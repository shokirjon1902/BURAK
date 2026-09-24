/**
 * TASK M: 

Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}]; 

*/
function getSquareNumbers(arr: number[]) {
  return arr.map((number: number) => {
    return {
      number: number,
      square: number ** 2,
    };
  });
}

console.log(getSquareNumbers([1, 2, 3]));
