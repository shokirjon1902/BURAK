/* TASK S:

Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
MASALAN: missingNumber([3, 0, 1]) return 2 */

function missingNumber(arr: number[]): number{
  return arr.length * (arr.length + 1) / 2 - arr.reduce((acc, curr) => acc + curr, 0)
}

const result = missingNumber([3, 0, 1]); 
console.log("result", result);
/*TASK R

Shunday function yozing, u string parametrga ega bo'lsin.
Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

MASALAN: calculate("1 + 3"); return 4;
1 + 3 = 4, shu sababli 4 natijani qaytarmoqda. */

// function calculate (param: string): number{
//   const numbers = param.split("+").map((item)=> Number(item.trim()))
//   return numbers.reduce ((acc, curr) => acc + curr, 0)
// }
// const result = calculate("1 + 10");
// console.log("result", result);

/*TASK Q:

Shunday function yozing, u 2 ta parametrga ega bo'lib
birinchisi object, ikkinchisi string bo'lsin.
Agar qabul qilinayotgan ikkinchi string, objectning
biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda */

// function hasProperty(obj: object, prop: string): boolean {
//   return prop in obj;

// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));

/*
TASK P:

Parametr sifatida yagona object qabul qiladigan function yozing.
Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]
*/


// Task-O
// Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin. Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin. MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45 Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35 Qolganlari nested bo'lib yoki type'lari number emas.

// function calculateSumOfNumbers(arr: any[]): number {
//   let result: number = 0;
//   arr.forEach((item) => {
//     if (typeof item === "number") {
//       result += item;
//     }
//   });
//   return result;
// }
// console.log(calculateSumOfNumbers([10, "101", { son: 10 }, true, 155]));

/*

  Project Standarts:
  - Logging standarts
  - Naming standarts:
     function, method, variable => CAMEL
     class => PASCAL
     folder/file => KEBAB
     CSS => SNAKE
  - Error handling   

*/

/*

Traditional API 
Rest API
GraphQL API

*/

/*

TASK N:

Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.

MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

**/

// function palindromCheck(string: string) {
//   const original = string;
//   const reverse = string.split("").reverse().join("");
//   return original === reverse;
// }

// console.log(palindromCheck("dad"));
// console.log(palindromCheck("son"));

/**
 * TASK M: 

Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}]; 

*/
// function getSquareNumbers(arr: number[]) {
//   return arr.map((number: number) => {
//     return {
//       number: number,
//       square: number ** 2,
//     };
//   });
// }

// console.log(getSquareNumbers([1, 2, 3]));
