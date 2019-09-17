import mongodb from 'mongodb';

import { UserCollection } from 'server/database';
import {
  STRIPE_SESSION_PATH,
  STRIPE_SESSION_ID
} from 'common/routes';
import { Require } from 'server/router';

export const GET_CHECKOUT_SESSION = {
  method: 'GET',
  path: STRIPE_SESSION_PATH,
  requires: [ Require.Authenticated ],
  on: async (request, response, { stripe, jwt: { sub }, db }) => {
    const [ session, user ] = await Promise.all([
      stripe.checkout.sessions.retrieve(request.params[STRIPE_SESSION_ID]),
      db.collection(UserCollection)
        .findOne({ _id: new mongodb.ObjectID(sub) })
    ]);

    if (!session) {
      response.status(404).end();
      return;
    }

    if (!user || !user.stripeSessions.includes(session.id)) {
      response.status(401).end();
      return;
    }

    const paymentIntent = await stripe.paymentIntents.retrieve(session.payment_intent);

    response.json({
      session,
      paymentIntent
    }).end();
  }
};
