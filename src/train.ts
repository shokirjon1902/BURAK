/*TASK X

Shunday function yozing, uni object va string parametrlari bo'lsin.
Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
necha marotaba takrorlanganlini sanab qaytarsin.

Eslatma => Nested object'lar ham sanalsin

MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
Funktsiya, shu ikkinchi argument 'model', birinchi argument object
tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda */

function countOccurrences(obj: object, target: string): number {
  let count = 0;

  for (const [key, value] of Object.entries(obj)) {
    if (key === target) {
      count++;
    }

    if (value !== null && typeof value === "object") {
      count += countOccurrences(value, target);
    }
  }

  return count;
}

console.log(
  countOccurrences(
    { model: "Bugatti", steer: { model: "HANKOOK", size: 30 } },
    "model",
  ),
);
/*TASK W

Shunday function yozing, u o'ziga parametr sifatida
yagona array va number qabul qilsin. Siz tuzgan function
arrayni numberda berilgan uzunlikda kesib bo'laklarga
ajratgan holatida qaytarsin.
MASALAN: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

Yuqoridagi namunada berilayotgan array ikkinchi parametr 3'ga
asoslanib 3 bo'lakga bo'linib qaytmoqda. Qolgani esa o'z holati qolyapti */

// function chunkArray(any: number[]) {
//   const result = [];
//   for (let i = 0; i < any.length; i += 3) {
//     any.slice(i, i + 3);
//     result.push(any.slice(i, i + 3));
//   }
//   return result;
// }

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/*TASK V

Shunday function yozing, uni string parametri bo'lsin.
Va bu function stringdagi har bir harfni o'zi bilan
necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.
  
MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

Yuqoridagi misolda, 'hello' so'zi tarkibida
qatnashgan harflar necha marotaba takrorlangini bilan
object sifatida qaytarilmoqda. */

// function countChars(parametr: string) {
//   let a = {};
//   for (const harf of parametr) {
//     if (harf in a) {
//       a[harf] += 1;
//     } else {
//       a[harf] = 1;
//     }
//   }
//   return a;
// }
// console.log(countChars("hello"));
/*TASK U

Shunday function tuzing, uni number parametri bo'lsin.
Va bu function berilgan parametrgacha, 0'dan boshlab
oraliqda nechta toq sonlar borligini aniqlab return qilsi.

MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

Yuqoridagi birinchi misolda, argument sifatida, 9 berilmoqda.
Va 0'dan boshlab sanaganda 9'gacha 4'ta toq son mavjud. 
Keyingi namunada ham xuddi shunday xolat takrorlanmoqda. */

// function sumodds (number){
//   let count = 0 ;

//   for(let i = 0; i < number; i++) {
//     if(i%2 !== 0){
//       count++
//     }

//   }

//   return count

// }
// const result = sumodds(11)
// console.log("result:",result)

/*TASK T

Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];

Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda. */

// function mergeSortedArray (array1: number[], array2: number[]) {
//   const birlashtirish = array1.concat(array2)
//   birlashtirish.sort((a: number, b: number) => a - b)
//   return birlashtirish
// }

// const result = mergeSortedArray([0, 3, 4, 31], [4, 6, 30]);
// console.log("result:", result)

/* TASK S:

Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
MASALAN: missingNumber([3, 0, 1]) return 2 */

// function missingNumber(arr: number[]): number{
//   return arr.length * (arr.length + 1) / 2 - arr.reduce((acc, curr) => acc + curr, 0)
// }

// const result = missingNumber([3, 0, 1]);
// console.log("result", result);
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
