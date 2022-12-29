console.log('Test start'); // 1;

setTimeout(() => {
  console.log('0 sec timer'); // 4;
}, 0);

Promise.resolve('Resolved Promise 1').then(res => console.log(res)); // 3 -> the microtasks queue has priority over the callback queue;

Promise.resolve('Resolved Promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
}); // 3 -> the microtasks queue has priority over the callback queue;

console.log('Test end'); // 2;
