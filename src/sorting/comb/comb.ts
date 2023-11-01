import {numbers} from '../../mocks';

export const combSorting = () => {
  const arr = Array.from(numbers);
  let step = arr.length - 1;
  const k = 1.2473309;
  while (step > 1) {
    for (let i = 0; i + step < arr.length; i++) {
      if (arr[i] > arr[i + step]) [arr[i], arr[i + step]] = [arr[i + step], arr[i]]
    }
    const nextStep = Math.round(step / k);
    step = nextStep !== step ? nextStep : nextStep - 1;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
  }
  return arr
}
