export function* setCounter(num){
  let i = num || 0;
  while(true){
    yield i++;
  }
}