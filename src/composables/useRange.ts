export const useRange = (
  value: number & string,
  minLimiter: number,
  maxLimiter: number
) => {
  const parsed = parseInt(value);
  const range = Math.min(Math.max(parsed, minLimiter), maxLimiter);

  return range;
};
