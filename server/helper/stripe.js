import { TransactionCollection } from 'server/database';

export const updatePaymentIntent = (db, stripe, transactions) => {
  const promises = transactions.map(transaction => {
    return stripe.paymentIntents.retrieve(transaction.session.payment_intent).then(paymentIntent => {
      return db.collection(TransactionCollection).updateOne({ _id : transaction._id }, {
        $set: { paymentIntent }
      });
    });
  });
  return Promise.all(promises);
};
