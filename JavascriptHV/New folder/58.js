//filter method
//filter method always return boolean value
const numbers=[1,2,3,4,5,6,7,8,9,78,90];
// const isEven=function(number)
// {
//     return number%2===0;
// }
// const evenNumbers=numbers.filter(isEven);
// console.log(evenNumbers);

// const isEven=numbers.filter((i,)=>{
//     return i%2===0;
// })
// console.log(isEven);

const isEven=numbers.filter((number)=>{
    return number%2===0;
})
console.log(isEven);
