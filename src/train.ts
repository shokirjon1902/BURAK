

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
