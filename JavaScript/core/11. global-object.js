/* 11_globla-object */

/* 11-1. global object (전역 객체) */
/* 11-1-1. globla property */

/* infinity
* 무한대를 나타내는 숫자 값 */
// 전역 프로퍼티는 global을 생략하고 참조 할 수 있다.
console.log(global.Infinity === Infinity);      // true
// 양의 무한대
console.log(10/0);                              // infinity
// 음의 무한대
console.log(-10/0);                             // infinity
console.log(typeof Infinity);                   // number

/* NaN 
* 숫자가 아님 (Not a Number) 을 나타내는 숫자 값
* Number.NaN 프로퍼티와 같다. */
console.log(global.NaN);        // NaN
console.log(Number('abc'));     // NaN
console.log(10 * 'abcf');       // NaN
console.log(typeof NaN);        // number

/* undefined */
/** 원시 타입 undefined */
console.log(global.undefined);   // undefined
let nothing;
console.log(nothing);             // undefined
console.log(typeof undefined);    // undefined


/* 11-2. built in global function (빌트인 전역 함수) */


/** isFinite
 * 전달 받은 인수가 정상적인 유한수인지 검사하여 유한수이면 true를 반환하고, 무한수이면 false를 반환한다.
 * 전달 받은 인수가 숫자가 아닌 경우 숫자로 타입 변환 후 검사를 수행하며, NaN으로 평가되는 값이면 false를 반환한다. */
console.log(isFinite(10));      // true
console.log(isFinite('10'));    // true
console.log(isFinite(null));    // true

console.log(isFinite(Infinity));    // false
console.log(isFinite(-Infinity));   // false

console.log(isFinite(NaN));         // false
console.log(isFinite('abc'));       // false


/** isNaN
 * 전달 받은 인수가 NaN인지 검사하여 그 검사 결과를 블리언 타입으로 반환한다.
 * 전달 받은 인수가 숫자가 아닌 경우 숫자로 타입 반환 후 검사를 수행한다.  */
console.log(isNaN(NaN));        // true
console.log(isNaN(10));         // false

console.log(isNaN('abc'));      // true
console.log(isNaN('10'));       // false
console.log(isNaN(''));         // false

console.log(isNaN(true));       // false (true => 1)
console.log(isNaN(false));      // false (false => 0)

console.log(isNaN(undefined));  // true

console.log(isNaN({}));         // true


/** parseFloat
 * 전달받은 문자열 인수를 부동 소수점 숫자, 실수로 반환한다. */

/** parselnt 
 * 전달받은 문자열 인수를 정수로 해석하여 반환한다. */

console.log(parseFloat('10.01'));     // 10.01
console.log(parseFloat('10'));        // 10

// 숫자가 아닌 문자열은 제외하고 반환
console.log(parseFloat('10cm'));      // 10

// 첫 번째 문자열을 숫자로 변환할 수 없다면 반환 불가
console.log(parseFloat('GS25'));      // NaN

// 앞뒤 공백은 무시
console.log(parseFloat('  1004  '));  // 1004
console.log(parseInt('10'));          // 10
console.log(parseInt('10.01'));       // 10


/** encodeURI
 * URL(인터넷에 있는 자원을 나타내는 유일한 주소)를 문자열로 전달받아 이스케이프 처리를 위해 인코딩한다.
 * 네트워크를 토애 정보를 공유할 때 어떤 시스템에서도 읽을 수 있는 아스키 문자 셋으로 변환한다. */

/** decodeURI
 * 인코딩 된 URL를 인수로 전달 받아 이스케이프 처리 이전으로 디코딩한다.  */
const url = 'http://greedy.com?name=홍길동&job=student';
const enc = encodeURI(url);
console.log(enc);               // http://greedy.com?name=%ED%99%8D%EA%B8%B8%EB%8F%99&job=student

const dec = decodeURI(enc);
console.log(dec);                // http://greedy.com?name=홍길동&job=student

/** encodeURIComponent
 * URI 구성 요소를 인수로 전달 받아 알파벳, 0~9의 숫자, -_.!~*'() 문자는 제외하고 인코딩한다.
 * 쿼리 스트링 구분자로 사용되는 =,?,& 까지 인코딩한다.
 */

/** decodeURIComponent 
 * 인코딩 된 URI를 인수로 전달 받아 이스케이프 처리 이전으로 디코딩한다.    */
const uriComp = 'name=홍길동&job=student';
const encComp = encodeURIComponent(uriComp);
console.log(encComp);      // name%3D%ED%99%8D%EA%B8%B8%EB%8F%99%26job%3Dstudent

const decComp = decodeURIComponent(encComp);
console.log(decComp);       // name=홍길동&job=student