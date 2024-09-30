var intger = 10;
var double = 5.5;
var navgative = 10;

console.log(10 === 10.0);
console.log(10 / 4);


/* 문자열 */
var string;
string = 'javaScript'; //작은 따옴표
string = "javaScript" // 큰 따옴표 
string = `javaScript` // 백틱(ES6)
  
/*  문자열 타입은 텍스트 데이터를 나타내는데 사용됨
    문자열은 작은 따옴표 (''), 큰 따옴표 (""), 백틱 (``) 으로 텍스트를 감싼다.
    자바는 문자열을 객체로 표현하지만 자바르스크립트의 문자열은 원시 타입이며, 변경 불가능한 값이다.
     
    탬플릿 리터럴 (``) 
    ES6부터 도입 된 멀티라인 문자열, 표현식 삽입 등의 편리한 문자열 처리 기능을 제공하는
    문자열 표기법이다. 이 때는 작은 따옴표, 큰 따옴표 대신 백틱을 사용햐 표현한다.*/

/** boolean (논리타입) **/
var flag = true;
console.log(flag);
falg = false;
console.log(flag);

// 불리언 타입의 값은 논리적 참, 거짓을 나타내는 true와 false 뿐이다.

/** undefined and null **/
var undef;
console.log(undef);

/** undefined 타입
 *  undefined 타입은 값은 undefined가 유일하다
 * var 키워드로 선언한 변수는 암묵적으로 undefined로 초기화 되므로 변수를 선언한 이후 값을 할당하지 않은 변수를 참조하면 undefined가 반환된다.
 */
/** undefined는 자바스크립트 엔진이 변수를 최화 할 때 사용하는 값이므로 개발자가 의도적으로 변수에 할당하는 것은 본래 취지와 어긋나고 혼란을 줄 수 있으므로 지양한다 */

var nullval = 'smomething';
nullval = null; // 이전 참조를 제거하여 더 이상 'something'을 참조하지 않는다.
console.log(nullval);
/** null 타입
 * null 타입의 값은 null이 유일하다.
 * 변수에 값이 없다는 것을 의도적으로 명시할 대 사용한다.
 * 이전에 할당 되어 있던 값에 대한 참조를 명시적으로 제거하지 않는 것을 의미하고 자바스크립트 엔진은 누구도 참조하지 않는 메모리 공간에 대해 가비지 콜렉션을 수행하게 된다.
 */

/** symbol and object */
var key = Symbol('key');
console.log(typeof key);
/** symbl 타입 
 * 심볼은 ES6에서 추가된 7번째 타입으로, 변경 불가능한 원시 타입이다. 
 * 다른 값과 중복 되지 않는 유일무이한 값으로 이름 충돌할 위험이 없는 객체 유일한 프로퍼티 키를 만들기 윟 사용한다. 
 * 심볼 이외의 원시 값은 리터럴을 통해 생성되지만 심볼은 Symbol 함수를 통해 호출해 생성한다.
 * 지금은 데이터 타입의 한 종류라고만 이해하고 넘어가면 된다,*/

var obj = {};             //객체 생성
var func = function() {}; // 함수 생성
var arr = [];             // 배열 생성

/** 객체 타입
 * 자바스크립트의 데이터 타입은 크게 원시 타입과 객체 타입으로 분류한다.
 * 자바스크립트는 객체 기반의 언어이며, 자바스크립트를 이루고 있는 거의 모든 것이 객체이다.
 * number, string, boolean, undefined, null, symbol 6가지 데이터 타입 이외의 값은 모두 객체 타입이다.
 */

/** dynamically typed language (동적 타입 언어)*/ 
/** 정적 타입(static/ sting type) 언어 (C, C++, Java, Kotlin 등)
 *  변수를 선언할 때 데이터 타입을 사전에 선언 (명시적 타입 선언) 해야 한다.
 * 변수의 타입을 변경할 수 없으며, 변수에 선언한 타입에 맞는 값만 할당할 수 있다
 * 컴파일 시점에 타입 체크를 수행하는데 타입의 일관성을 강제하여 런타임 오류를 줄인다.
*/

/** 동적 타입 (dynamic/ weak type) 언어(JavaScript, Pyyhon등) */
/** 자바스크립트는 var, let, const 키워드를 이용해 변수를 선언할 뿐 데이터 타입을 사전에 선언하지 않는다. 
 * 즉, 동적 타입 언어는 변수 선언이 아닌 할당에 의해 타입이 결정(타입 추론) 되며 재할당에 의해 변수의 타입은 언제든지 동적으로 변할 수 있다.
 * 변수의 값이 언제든지 변경 될 수 있기 때문에 확인하기 전에는 타입을 확신할 수 없다
 * 개발자의 의도와 상관 없이 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되기도 한다.
 * 유연성은 높지만 신뢰성은 떨어지기 때문에 변수를 사용허하기 전에 데이터 타입을 체크하기도 하는데, 이는 번거롭기도 하고 코드의 양도 증가한다.
*/

/** 동적 타입 언어의 단점을 보완하기 위해서 변수 사용 시 유의할 점
 * 1. 변수는 꼭 필요한 경우에 한해 제한적으로 사용
 * 2, 변수의 유효범위 (스코프)를 최대한 좁게 만듦
 * 3. 전역 변수 지양
 * 4. 변수보다 상수를 사용해 값의 변경 억제
 * 변수명을 토애 변수의 목적이나 의미를 파악할 수 있도록 함
 */

/** implicit-coercion(암묵적 타입 변환)
 * 개발자가 의도적으로 값의 타입을 변환하는 것을 명시적 타입 변환(explicit coercion)이라고 하며 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환 되는 것을 암묵적 타입 변환(implicit coercion) 이라고 한다. 명시적 타입 변환은 코드에서 드러나지만 암묵적 타입 변환은 드러나지 않으므로 타입 변환 된 결과를 예측할 수 있어야 오류를 방지할 수 있다.
 */

/** convert to string(문자열 타입으로 변환) */
console.log(10 + '20');
// 문자열 연결 연산자 (+)는 문자열 타입이 아닌 피연산자를 문자열 타입으로 암묵적으로 변환한다.

/** convert to number (숫자 타입으로 변환) */
console.log(10 - '5');  //산술 연산자
console.log(10 > '5');  //비교 연산자
console.log(+ '');      // + 단항 연산자
/** 산술 연산자의 피연산자는 모두 숫자여야하므로 숫자가 아닌 피 연산자를 숫자 타입으로 암묵적 타입 변환한다.
 * 비교 연산자로 크기를 비교하기 위해 모두 숫자 타입이여야 하므로 숫자가 아닌 피 연산자를 숫자 타입으로 암묵적으로 변환한다.
 * + 단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입 변환한다.
 */

/** convert to boolean (논리 타입으로 변환) */
if(undefined) console.log("if(undefined)"); // false
if(null) console.log("if(null)"); // false
if(0) console.log("if(0)"); // false
if(NaN) console.log("if(NaN)"); // false
if('') console.log("if('')"); // false
if('JavaScript') console.log("if('JavaScript')"); // true
/** 자바스크립트 엔진은 블리언 타입이 아닌 Truthy 값(참으로 평가 되는 값) 또는 Falsy 값( 거짓으로 평가되는 값)으로 구분한다. 
 * Truthy -> true, Falsy -> false로 암묵적 타입 변환 된다.
*/

/** explit coercion (명시적 타입 변환)
 * 개발자의 의도에 따라 값의 타입을 변환하는 것이다. 자바스크립트에서 기본 제공하는 표준 빌트인 생성자 함수 (String, Number, Boolean)를 new 연산자 없이 호출하는 방법, 빌트인 메서드를 제공하는 방법, 암묵적 타입 변환을 이용하는 방법이 있다.
 */

/** conver to string (문자열 타입으로 변환) */
console.log(String(10));        // String 생성자 함수
console.log((10).toString());   // Object.prototype.toString 메서드
console.log(10 + '20');         // 기타 연결 연산자
/** String 생성자 함수를 new 연산자 없이 호출한다.
 * Object.prototype.toString 메서드를 사용한다.
 * 문자열 연결 연산자를 이용한다.
 */

/** convrt to numbet (숫자 타입으로 변환) */
console.log(Number('10'));          // Number 생성자 함수
console.log(parseInt('10'));        // parseInt 함수
console.log(parseFloat('10.01'));   // parseFloat 함수
console.log(+'');                   // + 단항 연산자
console.log('10' + 1);              // 산술 연산자
/** Number 생성자 함수를 new연산자 없이 호출한다.
 * parseInt, parseFloat 함수를 이용한다.(문자열 -> 숫자만 가능)
 * + 단항 산술 연산자를 이용한다.
 * 산술 연산자를 이용한다.
 */

/** convert to boolean (논리 타입으로 변환) */
console.log(Boolean('JavaScript'));     // Boolean 생성자 함수
console.log(!!'JavaScript');            // ! 부정 논리 연산자 두번 사용
/** Boolean 생성자 함수를 new 연산자 없이 호출한다
 * ! 부정 논리 연산자를 두 번 사용한다.
 */
