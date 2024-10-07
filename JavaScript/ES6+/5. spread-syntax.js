/* 3. spread syntax (스프레드 문법) */
/** 3-1. rest parameter (나머지 매개변수) 
 * 3-1-1. rest parameter (나머지 매개변수)
 * 함수에 정해진 인수보다 적게 전달 되면 undefined, 정해진 인수보다 많이 전달 되면 해당 인수를 무시하고 기능한다.
 * 이 때 나머지 매개변수 ... 를 사용하면 매개변수를 한데 모아 배열에 담을 수 있다.
 * 유의할 점은 나머지 매개변수는 항상 마지막에 있어야 한다. */
function marge(msg1, msg2) {
  return msg1 + msg2;
}

console.log(marge('안녕하세요'));
console.log(marge('안녕하세요','반갑습니다.'));
console.log(marge('안녕하세요', '반갑습니다.', '제 이름은 홍길동입니다.'));

function margeAll(...args) {
  let message = '';

  for (let arg of args) message += arg;

  return message;
}

console.log(margeAll('안녕하세요'));
console.log(margeAll('안녕하세요','반갑습니다.'));
console.log(margeAll('안녕하세요', '반갑습니다.', '제 이름은 홍길동입니다.'));


/* 3-2. spread syntax (스프레드 문법, 전개 문법) */
/** 3-2-1. spread syntax (스프레드 문법, 전개 문법) 
 * rest parameter처럼 매개변수 목록을 배열로 가져오는 것과는 반대로 배열을 통째로 매개변수에 넘겨주는 기능이다.
 * 하나로 뭉쳐 있는 여러 값들의 집합을 전개해서 개별적인 값들의 목록으로 만든다. */
console.log(`가장 큰 값: ${Math.max(10, 20, 30)}`);

let arr = [10, 20, 30];
// Math.max는 배열이 아닌 숫자 목록을 인수로 받기 때문에 배열을 전달하면 원하는 대로 동작하지 않는다.
console.log(`가장 큰 값 : ${Math.max(arr)}`);
// 스프레드 문법을 사용하면 arr이 인수 목록으로 확장되어 최대 값을 알아올 수 있다.
console.log(`가장 큰 값 : ${Math.max(...arr)}`);

let arr1 = [10, 30, 20];
let arr2 = [100, 300, 200];

console.log(`가장 작은 값 : ${Math.min(...arr1, ...arr2)}`);    // 배열 객체 여러개 전달 가능
console.log(`가장 작은 값 : ${Math.min(1, ...arr1, 2, ...arr2, 3)}`);    // 일반 값과 혼합해서 사용 가능

/**
 * 배열 병합에도 사용 가능
 * 문자열 배열로 변환 가능 */

// concat 메소드보다 간결핮게 배열에 병합해 사용 가능
let marged = [0, ...arr, 2, ...arr2];
console.log(marged);

// 문자열을 배열로 변환
let str = "JavaScript";
console.log([...str]);


/* 3-3. array and object copy (스프레드 문법을 이용한 배열, 객체 복사 ) */
/** 3-3-1. array and object copt (스프레드 문법을 이용한 배열, 객체복사) 
 * 배열 복사 */
let arr3 = [10, 20, 30];
let arrCopy = [...arr3];
console.log(arr3);
console.log(arrCopy);
console.log(arr3 === arrCopy);

/** 객체 복사 */
let obj = { name: '홍길동', age: 20 };
let objCopy = { ...obj };
console.log(obj);
console.log(objCopy);
console.log(obj === objCopy);

/** 정리
 * 스프레드 문법과 나머지 매개변수의 구분
 * 스프레드 문법 : 배열을 목록으로 확장해주므로 ...이 함수 호출 시, 배열이나 객체 리터럴 내부에 사용된다.
 * 나머지 매개변수 : 인수 목록의 나머지를 배열로 모아주므로 ...이 함수 매개변수의 끝에 있다.
 * 두 가지 문법을 함께 사용하면 매개변수 목록과 배열 간 전환을 쉽게 할 수 있다. */