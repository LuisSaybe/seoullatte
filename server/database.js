import mongodb from 'mongodb';
import { settings } from 'server/settings';

export const UserCollection = 'user';
export const EventCollection = 'event';
export const ItemCollection = 'item';
export const OrganizationCollection = 'organization';
export const TransactionCollection = 'transaction';
export const PasswordRecoveryCollection = 'passwordRecovery';
export const OrganizationInvitationCollection = 'organizationInvitation';

export const SORT_DIRECTIONS_AS_STRING = ['-1', '1'];
export const EMAIL_COLLATION = {
  locale : 'en',
  strength : 2
};

export const getDatabase = async () => {
    const client = await mongodb.MongoClient.connect(settings.mongo.url, { useNewUrlParser: true });
    const db = client.db('joseon');

    const userCollection = db.collection(UserCollection);
    await userCollection.createIndex({email : 1}, { unique:true, collation: EMAIL_COLLATION });

    const organizationCollection = db.collection(OrganizationCollection);
    await organizationCollection.createIndex({ ownerId: 1 });
    await organizationCollection.createIndex({ read: 1 });
    await organizationCollection.createIndex({ write: 1 });

    const eventCollection = db.collection(EventCollection);
    await eventCollection.createIndex({ organization: 1 });
    await eventCollection.createIndex({ hash: 1 }, { unique:true });

    const itemCollection = db.collection(ItemCollection);
    await itemCollection.createIndex({ eventId: 1 });
    await itemCollection.createIndex({ order: 1 });

    const transactionCollection = db.collection(TransactionCollection);
    await transactionCollection.createIndex({ userId: 1 });
    await transactionCollection.createIndex({ eventId: 1 });

    const passwordRecoveryCollcetion = db.collection(PasswordRecoveryCollection);
    await passwordRecoveryCollcetion.createIndex({ userId: 1 });

    const organizationInvitationCollection = db.collection(OrganizationInvitationCollection);
    await organizationInvitationCollection.createIndex({ userId: 1, organization: 1 }, { unique:true });
    await organizationInvitationCollection.createIndex({ userId: 1 });
    await organizationInvitationCollection.createIndex({ organization: 1 });

    return db;
};
