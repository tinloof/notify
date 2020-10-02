import React from "react";
import ReactDOM from "react-dom";

import NotificationsManager from "./NotificationsManager";
import Notification, { Color } from "./Notification";
import createContainer from "./createContainer";

const containerElement = createContainer();
let notify;

ReactDOM.render(
  <NotificationsManager
    setNotify={(notifyFn) => {
      notify = notifyFn;
    }}
  />,
  containerElement
);

export { Notification, Color };

export function info(children, autoClose) {
  return notify({
    color: Color.info,
    children,
    autoClose,
  });
}

export function success(children, autoClose) {
  return notify({
    color: Color.success,
    children,
    autoClose,
  });
}

export function warning(children, autoClose) {
  return notify({
    color: Color.warning,
    children,
    autoClose,
  });
}

export function error(children, autoClose) {
  return notify({
    color: Color.error,
    children,
    autoClose,
  });
}
