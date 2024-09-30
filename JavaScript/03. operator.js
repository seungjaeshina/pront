/** 3_ operator (연산자) 
 * 기본적인 연산자의 사용은 Java와 다르지 않다. JavaScript 에서 추가적으로 필요한 연산자와 관련한 내용을 담았다
*/

/** 3-1. comparison operator(비교 연산자)
 * 비교 연산자는 좌항과 우항의 비교 연산자를 비교한 다음 그 결과를 블리언 값으로 변환한다. if문이나 for문과 같은 제어문을 조건식에서 주로 사용한다.
 */
//숫자 1, answk '1', true 비교
console.log(`1 == '1' : ${1 == '1'}`);    // true
console.log(`1 == true : ${1 == true}`);  // true
console.log(`1 === '1' : ${1 === '1'}`);  // true
console.log(`1 === true : ${1 === true}`);  //false
/** 동등 비교 (loos equality) 연산자와 일치 비교 (strict equality) 연산자는 비교하는 엄격성의 정도가 다르다
 * 동등비교 (==, !=) 연산자는 먼저 암묵적 타입 변환을 통해 타입을 일치시킨 후 같은 값인지 비교한다.
 * 일치 비교 (===, !==) 연산자는 타입과 값이 모두 일치하는지 비교한다. 
 */

/** 3-2. logical operator(논리 연산자) */
console.log('apple' || 'banana');     // apple
console.log('apple' && 'banana');     // banana
/** short circuit evaluation(단축 평가)
 * 표현식을 평가하는 도중 평가 결과가 확정 된 경우 나머지 평가 과정을 생략하는 것을 말한다. */

/** 3-3. ES11 operator 
 * ES11(ECMAScript2020)에서 도입된 연산자 */

/** 3-3-1. option chaining operator (옵셔널 체이닝 연산자) */
var obj = null;
var val = obj?.value;
console.log(val);
/** 좌항의 피연산자가 null 또는 undefined인 경우 undefined 반환하고 그렇지 않으면 우항의 프로퍼티 참조를 이어간다. */

/** 3-3-2. nullish coalescing operator(null 병합 연산자) */
var test = null ?? '기본 값';
console.log(test);
/** 좌항의 피연산자가 null 또는 undefined 인 경우 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다.
 * 변수에 기본 값을 설정할 때 유용하다. */
