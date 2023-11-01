import {numbers} from '../../mocks';

export const bubbleSorting = () => {
  const arr = Array.from(numbers);
  let b = true;
  while (b) {
    b = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        b = true
      }
    }
  }
  return arr
}
