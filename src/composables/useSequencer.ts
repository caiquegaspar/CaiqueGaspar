export const useSequencer = <F extends (arg: any) => void>(
  array: (() => Promise<string>)[],
  andThen: F
) => {
  return (async function () {
    await array.reduce(
      async (
        previousPromise: Promise<void>,
        nextAsyncFunction: () => Promise<string>
      ) => {
        await previousPromise;
        const result = await nextAsyncFunction();

        andThen(result);
      },
      Promise.resolve()
    );
  })();
};
