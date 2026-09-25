/*

TASK N:

Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.

MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

**/

function palindromCheck(string: string) {
  const original = string;
  const reverse = string.split("").reverse().join("");
  return original === reverse;
}

console.log(palindromCheck("dad"));
console.log(palindromCheck("son"));

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
