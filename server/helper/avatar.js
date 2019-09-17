import mongodb from 'mongodb';

import {
  EventCollection,
  OrganizationCollection,
  ItemCollection,
  UserCollection
} from 'server/database';
import {
  EVENT_AVATAR_PATH,
  ITEM_AVATAR_PATH,
  USER_AVATAR_PATH,
  ORGANIZATION_AVATAR_PATH,
  ITEM_ID,
  USER_ID,
  ORGANIZATION_ID,
  EVENT_ID
} from 'common/routes';
import { upload, deleteObject } from 'server/digitalocean';
import { Require, Permission } from 'server/router';

export const getAvatarRoute = (collection) => {
  let path;
  let param;

  if (collection === EventCollection) {
    path = EVENT_AVATAR_PATH;
    param = EVENT_ID;
  } else if (collection === OrganizationCollection) {
    path = ORGANIZATION_AVATAR_PATH;
    param = ORGANIZATION_ID;
  } else if (collection === ItemCollection) {
    path = ITEM_AVATAR_PATH;
    param = ITEM_ID;
  } else if (collection === UserCollection) {
    path = USER_AVATAR_PATH;
    param = USER_ID;
  } else {
    throw new Error('collection', collection, 'is not a valid collection');
  }

  return  {
    method: 'POST',
    path,
    requires: [ Require.Authenticated ],
    accessRules: [
      {
        permission: Permission.WRITE,
        collection,
        param,
      }
    ],
    on: async (request, response, { db }) => {
      const entity = await db.collection(collection)
        .findOne({ _id: new mongodb.ObjectID(request.params[param]) });
      const type = request.headers['content-type'];

      let ext;

      if (type === 'image/jpeg') {
        ext = '.jpg';
      } else if (type === 'image/png') {
        ext = '.png';
      } else {
        response.status(415).end();
        return;
      }

      if (entity.avatar !== null) {
        const parts = entity.avatar.split('/');
        const key = parts[parts.length - 1];
        await deleteObject(key);
      }

      const name = new mongodb.ObjectId().toString() + ext;
      const { url } = await upload(name, request.body, type);

      const $set = {
        lastUserActivity: new Date(),
        avatar: url
      };

      await db.collection(collection).updateOne({ _id: entity._id }, { $set });
      response.status(200).end();
    }
  };
};
