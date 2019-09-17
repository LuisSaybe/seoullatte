import React from 'react';
import ReactDOM from 'react-dom';
import URLSearchParams from '@ungap/url-search-params';
import 'web/js/sentry';
import 'react-toastify/dist/ReactToastify.css';

import { Root } from 'web/js/page/root';

if (!window.URLSearchParams) {
  window.URLSearchParams = URLSearchParams;
}

ReactDOM.render(
  <Root />,
  document.querySelector('.projectroot'),
);
