export const debounce = (cb: Function, delay: number) => {
  let timer: any;
  return (...args: any) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb.apply(this, args);
    }, delay);
  };
};
