export const useDebounce = (
  func: { apply: (arg0: undefined, arg1: any[]) => void },
  wait: number,
  immediate: boolean
) => {
  let timeout: any;

  return (...args: any) => {
    const context = this;
    const callNow = immediate && !timeout;

    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};
