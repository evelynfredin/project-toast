import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {
  const {  
    toastMessages, 
    setToastMessages, 
  } = React.useContext(ToastContext);
  const handleRemoveToast = (messageId) => {
    const newCollection = toastMessages.filter((message) => message.id !== messageId)
    setToastMessages(newCollection)
  }

  return (
    <ol className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {
        toastMessages.map((message) => (
          <li key={message.id} className={styles.toastWrapper}>
            <Toast message={message.message}  variant={message.variant} trashToast={() => handleRemoveToast(message.id)} />
          </li>
        ))
      }
    </ol>
  );
}

export default ToastShelf;
