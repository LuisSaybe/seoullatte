import React, { useContext, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

import { T } from 'common/i18n';
import { UPDATE_SUCCESS } from 'web/js/helper/text';
import {
  ORGANIZATION_STRIPE_CONNECT_PATH
} from 'common/routes';


import {
  ORGANIZATION_STRIPE_CONNECT
} from 'web/js/reducer/useFetch';
import { NaturalSpinner } from 'web/js/component/natural-spinner';
import {
  FetchDispatchContext,
  FetchStateContext,
  ApplicationContext
} from 'web/js/context';
import { safe } from 'web/js/helper';
import { routes } from 'web/js/routes';
import { MessageBlock, MessageBlockType } from 'web/js/component/message-block';
import { Anchor } from 'web/js/component/anchor';

import './style.scss';


export function OAuthRedirectPageComponent({ history }) {
  const { organizationId } = useContext(ApplicationContext);
  const [ dispatchFetch, dispatchFetchDelete ] = useContext(FetchDispatchContext);
  const fetchState = useContext(FetchStateContext);

  const organizationStripeConnectState = fetchState[ORGANIZATION_STRIPE_CONNECT];

  const loading = safe(() => organizationStripeConnectState.fetching);
  const succesfullyConnected = safe(() => organizationStripeConnectState.response.ok);
  const connectionFailure = safe(() => !organizationStripeConnectState.response.ok);

  useEffect(() => {
    return () => {
      dispatchFetchDelete([ORGANIZATION_STRIPE_CONNECT]);
    };
  }, []);

  useEffect(() => {
    if (!organizationId) {
      return;
    }

    const params = new URLSearchParams(location.search);
    const code = params.get('code');

    if (code) {
      dispatchFetch([ORGANIZATION_STRIPE_CONNECT_PATH, organizationId, code], {}, ORGANIZATION_STRIPE_CONNECT);
    }
  }, [ organizationId ]);

  useEffect(() => {
    if (succesfullyConnected) {
      toast(UPDATE_SUCCESS);
      history.push(routes.organizationPersist(organizationId));
    }
  }, [ succesfullyConnected ]);

  return (
    <div styleName='root'>
      {loading && <NaturalSpinner />}
      { connectionFailure &&
        <MessageBlock type={MessageBlockType.error}>
          {T('Sorry, we are not able to connect to your Stripe account')}
        </MessageBlock>
      }
      {
        !loading && <Anchor button to={routes.organizationPersist(organizationId)}>
          {T('Back to my organization')}
        </Anchor>
      }
    </div>
  );
}

OAuthRedirectPageComponent.propTypes = {
  history: PropTypes.object.isRequired
};

export const OAuthRedirectPage = withRouter(OAuthRedirectPageComponent);
