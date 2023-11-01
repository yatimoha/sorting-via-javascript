import {numbers} from '../../mocks';

export const shakerSorting = () => {
  const arr = Array.from(numbers);
  let i = 0;
  let j = arr.length - 1;
  let directionRight = true;
  while (i !== j) {
    if (directionRight) {
      for (let k = i; k < j; k++ ) {
        if (arr[k] > arr[k + 1]) [arr[k], arr[k + 1]] = [arr[k + 1], arr[k]]
      }
      j -= 1;
      directionRight = false;
    } else {
      for (let k = j; i < k; k--) {
        if (arr[k] < arr[k - 1]) [arr[k], arr[k - 1]] = [arr[k - 1], arr[k]]
      }
      i += 1;
      directionRight = true;
    }
  }
  return arr
}
