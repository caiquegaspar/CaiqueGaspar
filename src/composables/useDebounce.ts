export const useDebounce = <F extends (...args: any[]) => any>(
  func: F,
  delay: number,
  immediate: boolean
) => {
  let timeout: number = 0;

  return (...args: any[]) => {
    const context = this;
    const callNow = immediate && !timeout;

    const later = () => {
      timeout = 0;
      if (!immediate) func.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, delay);

    if (callNow) func.apply(context, args);
  };
};
