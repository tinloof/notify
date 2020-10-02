import React from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import cn from "classnames";

import createContainer from "../createContainer";
import { ReactComponent as Times } from "./times.svg";
import styles from "./Notification.module.css";

const container = createContainer();

let timeToDelete = 300;
let timeToClose = 1000 * 10;

export default function Notification({
  color = Color.info,
  autoClose = false,
  onDelete,
  children,
}) {
  const [isClosing, setIsClosing] = React.useState(false);

  React.useEffect(() => {
    if (isClosing) {
      const timeoutId = setTimeout(onDelete, timeToDelete);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isClosing, onDelete]);

  React.useEffect(() => {
    if (autoClose) {
      const timeoutId = setTimeout(() => setIsClosing(true), timeToClose);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [autoClose]);

  return createPortal(
    <div className={cn([styles.container, { [styles.shrink]: isClosing }])}>
      <div
        className={cn([
          styles.notification,
          styles[color],
          { [styles.slideIn]: !isClosing },
          { [styles.slideOut]: isClosing },
        ])}
      >
        {children}
        <button
          onClick={() => setIsClosing(true)}
          className={styles.closeButton}
        >
          <Times height={16} />
        </button>
      </div>
    </div>,
    container
  );
}

export const Color = {
  info: "info",
  success: "success",
  warning: "warning",
  error: "error",
};

Notification.propTypes = {
  notificationType: PropTypes.oneOf(Object.keys(Color)),
  autoClose: PropTypes.bool,
  onDelete: PropTypes.func.isRequired,
  children: PropTypes.element,
};
