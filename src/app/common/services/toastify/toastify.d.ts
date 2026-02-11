declare module 'toastify-js' {
  interface ToastifyOptions {
    text: string;
    position?: 'left' | 'right';
    className?: string;
    duration?: number;
    close?: boolean;
    stopOnFocus?: boolean;
    gravity?: string;
    style?: Record<string, string>;
  }
  function Toastify(options: ToastifyOptions): {
    showToast: () => void;
  };
  export default Toastify;
}
