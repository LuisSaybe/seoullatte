import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";

import { FetchStateContext } from "web/js/context";
import { isValidEmail } from "web/js/helper";
import { DispatchFetchType } from "web/js/interface";

import "./style.scss";

interface IInterface {
  className?: string;
}

export function EmailSearchIcon(props: IInterface) {
  const fetchState = useContext(FetchStateContext);
  const emailFetchState = fetchState[DispatchFetchType.SEARCH_EMAIL];
  const emailIsAvailable = emailFetchState?.response?.status === 404;
  const email = emailFetchState?.params?.get("email");
  let iconStyleName = "check-circle";

  if (email.length > 0 && !emailFetchState?.fetching) {
    if (isValidEmail(email) && emailIsAvailable) {
      iconStyleName = "check-circle success";
    } else {
      iconStyleName = "check-circle error";
    }
  }

  // TODO add back styleName

  return (
    <FontAwesomeIcon
      className={props.className}
      // styleName={iconStyleName}
      icon={emailFetchState?.fetching ? faSyncAlt : faCheckCircle}
    />
  );
}
