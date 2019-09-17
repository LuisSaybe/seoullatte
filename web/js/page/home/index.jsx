import React, { useContext } from 'react';

import { T } from 'common/i18n';

import { svgUrl } from 'web/js/helper';
import { Anchor } from 'web/js/component//anchor';
import { routes } from 'web/js/routes';
import './style.scss';

import {
  ApplicationContext
} from 'web/js/context';

export function Home() {
  const { organizationId, userId } = useContext(ApplicationContext);

  let organizationAnchors;

  if (organizationId) {
    organizationAnchors = (
      <>
        <Anchor box button styleName='anchor' to={routes.event()}>
          <img alt='circus-tent' src={svgUrl('599-circus-tent.svg')} />
          <span styleName='anchor-text'>
            {T('events')}
          </span>
        </Anchor>
        <Anchor box button styleName='anchor' to={routes.organizationPersist(organizationId)}>
          <img alt='calendar' src={svgUrl('623-ship.svg')} />
          <span styleName='anchor-text'>
            {T('my organization')}
          </span>
        </Anchor>
      </>
    );
  }

  return (
    <div styleName='root'>
      <div styleName='navigation'>
        {organizationAnchors}
        <Anchor box button styleName='anchor' to={routes.eventPersist()}>
          <img alt='calendar' src={svgUrl('731-calendar.svg')} />
          <span styleName='anchor-text'>
            {T('create event')}
          </span>
        </Anchor>
        <Anchor box button styleName='anchor' to={routes.account()}>
          <img alt='wrench' src={svgUrl('737-wrench.svg')} />
          <span styleName='anchor-text'>
            {T('account')}
          </span>
        </Anchor>
        <Anchor box button styleName='anchor' to={routes.userTransactions(userId)}>
          <img alt='wrench' src={svgUrl('721-credit-card.svg')} />
          <span styleName='anchor-text'>
            {T('my transactions')}
          </span>
        </Anchor>
      </div>
    </div>
  );
}
