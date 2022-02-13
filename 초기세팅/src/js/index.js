import '../scss/main.scss';

console.log('bye');

async function test() {
  const promise = Promise.resolve('바벨');
  console.log(await promise);
}

test();
