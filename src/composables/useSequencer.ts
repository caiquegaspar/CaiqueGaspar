interface SequencerInterface {
  delay: number;
  array: string[];
  andThen: (arg: any) => void;
}

let timeout: number;

export const useSequencer = ({ delay, array, andThen }: SequencerInterface) =>
  array.reduce(async (previousPromise: Promise<void>, nextItem: string) => {
    await previousPromise;

    const result = await new Promise(
      (resolve) => (timeout = setTimeout(() => resolve(nextItem), delay))
    );

    andThen(result);
  }, Promise.resolve());

export function useSequencerController(): { abort(): void } {
  return {
    abort() {
      clearTimeout(timeout);
    },
  };
}
