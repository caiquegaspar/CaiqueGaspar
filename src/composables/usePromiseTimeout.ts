interface PromiseTimeoutInterface {
  delay: number;
  callBackFn?: () => any;
  abortController?: AbortControllerInterface;
  str: string;
  reason?: string;
}

interface AbortControllerInterface {
  idxs: number[];
  abort(): void;
}

type PromiseParams = {
  resolve: (value: string | PromiseLike<string>) => void;
  reject: (reason?: any) => void;
};

const timeoutArr: { resolve(): void; timeout: number; abort(): void }[] = [];

export async function usePromiseTimeout({
  delay = 0,
  callBackFn,
  abortController,
  str = "Timeout ended!",
  reason,
}: PromiseTimeoutInterface): Promise<string> {
  const idx = timeoutArr.length;
  let abort = false;

  if (abortController) abortController.idxs.push(idx);

  const abortFn = () => {
    abort = true;
    clearTimeout(timeoutArr[idx].timeout);
    queueMicrotask(() => timeoutArr[idx].resolve());
  };

  const abortFnProxy = new Proxy(abortFn, {
    apply(target, thisArg, args: []) {
      target.apply(thisArg, args);
    },
  });

  const resolveTimeout = <A extends PromiseParams>({ resolve, reject }: A) => {
    if (reason || abort) {
      // reject(reason);
      // or
      // throw new Error(reason)

      return;
    }

    if (callBackFn) callBackFn();

    resolve(str);
  };

  return new Promise(
    (resolve, reject) =>
      (timeoutArr[idx] = {
        resolve: () => resolveTimeout({ resolve, reject }),
        timeout: setTimeout(() => resolveTimeout({ resolve, reject }), delay),
        abort: abortFnProxy,
      })
  );
}

export function useAbortController(): AbortControllerInterface {
  return {
    idxs: [],
    abort() {
      this.idxs.forEach((idx) => {
        timeoutArr[idx].abort();
      });
    },
  };
}
