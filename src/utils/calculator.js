
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')

console.log(calculator);

calculator.addEventListener('click', e => {
  console.log('calc clicked');
  if (e.target.matches('button')) {
    console.log("hello");
  }
})