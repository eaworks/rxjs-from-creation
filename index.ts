import { of, map, from, Observable } from 'rxjs';

// from(['Can', 'Osman', 'Hakan']).subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('Completed'),
// });

// from([10, 20, 30]).subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('Completed'),
// });

const array = [10, 20, 30];
const result = from(array);
result.subscribe((x) => console.log(x));

const somePromise = new Promise((resolve, reject) => {
  // resolve('Kabul Edildi');
  reject('Reddedildi');
});
const observableFromPromise$ = from(somePromise);
observableFromPromise$.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.log('Error', err),
  complete: () => console.log('Completed'),
});
