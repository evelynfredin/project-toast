import { useEffect } from "react";

export const useEscapeKey = (handleDismiss) => {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === 'Escape') {
        handleDismiss([]);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleDismiss]);
}