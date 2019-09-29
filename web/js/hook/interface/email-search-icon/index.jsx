import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

import { isValidEmail, safe } from 'web/js/helper';
import {
  FetchStateContext,
} from 'web/js/context';
import {
  SEARCH_EMAIL
} from 'web/js/reducer/useFetch';

export function EmailSearchIcon({ className }) {
  const fetchState = useContext(FetchStateContext);
  const emailFetchState = fetchState[SEARCH_EMAIL];
  const fetchingEmail = safe(() => fetchingEmail.fetching);
  const emailIsAvailable = safe(() => emailFetchState.response.status === 404, false);
  const email = safe(() => emailFetchState.options.query.email, '');
  let iconStyleName = 'check-circle';

  if (email.length > 0 && !fetchingEmail) {
    if (isValidEmail(email) && emailIsAvailable) {
      iconStyleName = 'check-circle success';
    } else {
      iconStyleName = 'check-circle error';
    }
  }

  return (
    <FontAwesomeIcon className={className} styleName={iconStyleName} icon={fetchingEmail ? faSyncAlt : faCheckCircle} />
  );
}

EmailSearchIcon.propTypes = {
  className: PropTypes.string
};
