export const usePromiseTimeout = (
  delay: number,
  str: string = "sucess",
  reason?: string
): Promise<string> =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => (reason === undefined ? resolve(str) : reject(reason)),
      delay
    )
  );
