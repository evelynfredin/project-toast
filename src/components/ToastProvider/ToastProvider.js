import React, { useState } from 'react';
import { useEscapeKey } from '../../hooks/useEscapeKey';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toastMessages, setToastMessages] = useState([])

  const createNewToast = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const message = formData.get('message');
    const variant = formData.get('variant');

    setToastMessages([...toastMessages, {
      message, 
      variant, 
      id: crypto.randomUUID()
    }])

    e.target.reset();
  }

  useEscapeKey(setToastMessages)

  
  return (
    <ToastContext.Provider value={{  createNewToast, toastMessages, setToastMessages }}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
