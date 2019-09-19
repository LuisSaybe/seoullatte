import mongodb from 'mongodb';
import { settings } from 'server/settings';

export const UserCollection = 'user';
export const PasswordRecoveryCollection = 'password_recovery';

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

    const passwordRecoveryCollcetion = db.collection(PasswordRecoveryCollection);
    await passwordRecoveryCollcetion.createIndex({ userId: 1 });

    return db;
};
