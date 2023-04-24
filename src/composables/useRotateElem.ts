export const useRotateElem = (
  event: MouseEvent,
  element: HTMLElement,
  idx: number
) => {
  const rotateLimit = 25; // 45
  // get mouse position
  const x = event.clientX;
  const y = event.clientY;

  const elemCoordinates = element.getBoundingClientRect();

  // find the middle based on the element
  const middleX = elemCoordinates.x + elemCoordinates.width / 2; // window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  // get offset from middle as a percentage
  // and tone it down a little
  const offsetX = ((x - middleX) / (middleX / (idx + 1))) * rotateLimit;
  const offsetY = ((y - middleY) / middleY) * rotateLimit;

  const xVal = Math.min(Math.max(offsetX, -rotateLimit), rotateLimit);
  const yVal = Math.min(Math.max(offsetY, -rotateLimit), rotateLimit);

  // set rotation
  element.style.setProperty("--rotateX", xVal + "deg");
  element.style.setProperty("--rotateY", -1 * yVal + "deg");
};
