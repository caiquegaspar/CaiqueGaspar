interface PromiseTimeoutInterface {
  delay: number;
  callBackFn?: () => any;
  abortController?: AbortControllerInterface;
  str: string;
  reason?: string;
}

interface AbortControllerInterface {
  idx: number;
  abort(): void;
}

const timeoutArr: number[] = [];

export async function usePromiseTimeout({
  delay = 0,
  callBackFn,
  abortController,
  str = "Default sucess message",
  reason,
}: PromiseTimeoutInterface): Promise<string> {
  const idx = timeoutArr.length;

  if (abortController) abortController.idx = idx;

  const resolveTimeout = (
    resolve: (value: string | PromiseLike<string>) => void,
    reject: (reason?: any) => void
  ) => {
    if (reason) {
      reject(reason);
      return;
    }

    if (callBackFn) callBackFn();

    resolve(str);
  };

  return new Promise(
    (resolve, reject) =>
      (timeoutArr[idx] = setTimeout(
        () => resolveTimeout(resolve, reject),
        delay
      ))
  );
}

export function useAbortController(): AbortControllerInterface {
  return {
    idx: -1,
    abort() {
      clearTimeout(timeoutArr[this.idx]);
    },
  };
}
