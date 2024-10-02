/* 14. Date */
/** 
 * 표준 빌트인 객체인 Date는 날짜와 시간을 위한 메서드를 제공하는 빌트인 객체이면서 생성자 함수다.
- UTC(협정 세계시) : 국제 표준시로 기술적인 표기에서 사용된다. - GMT(그리니치 평군시) : UTC와
초의 소수점 단위에서만 차이가 나기 때문에 일상에서는 혼용되어 사용한다. - KST(한국 표준시) :UTC에 9시간을 더한 시간이다. */


/* 14-1. Date */
/** 
 * Date 객체는 내부적으로 날짜와 시간을 나타내는 정수 값을 가진다.
1970년 1월 1일 00:00:00(UTC)를 기점으로 Date 객체가 나타내는 날짜와 시간까지의 밀리초를 나타낸다.*/

// 1. new Date() : 현재 날짜와 시간을 가지는 Date 객체 반환
console.log(new Date());
// 2. new Date(milliseconds) : 1970년 1월 1일 00:00:00(UTC)를 기점으로 인수로 전달 된 밀리초만큼 경과한 날짜와 시간을 나타내는 Date 객체 반환
console.log(new Date(0)); // 1970-01-01T00:00:00.000Z
console.log(new Date(24 * 60 * 60 * 1000)); // 1970-01-02T00:00:00.000Z
// 3. new Date(dateString) : 날짜와 시간을 나타내는 문자열을 인수로 전달하면 지정 된 날짜와 시간을 나타내는 Date객체 반환
console.log(new Date('Jul 26, 2022 09:00:00')); // 2022-07-26T00:00:00.000Z
console.log(new Date('2022/07/26/09:00:00')); // 2022-07-26T00:00:00.000Z
// 4. new Date(year, month[, day, hour, minute, second, millisecond])
// : 연, 월, 일, 시, 분, 초, 밀리초를 의미하는 숫자를 인수로 전달하면 지정 된 날짜와 시간을 나타내는 Date 객체 반환
// 연, 월은 반드시 지정해야 하며 지정하지 않은 정보는 0 또는 1로 초기화 된다
// month(0~11)에 주의한다
console.log(new Date(2022, 1)); // 2022-01-31T15:00:00.000Z
console.log(new Date(2022, 1, 1, 9, 0, 0, 0)); // 2022-02-01T00:00:00.000Z


/* 14-2. Date method */
/**Date.now
* 1970년 1월 1일 00:00:00(UTC)을 기점으로 현재 시간까지 경과한 밀리초를 숫자로 반환한다. */

/** Date.parse
* 1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달된 지정 시간(new Date(dateString)의 인수와 동일한 형식)까지의 밀리초를 숫자로 반환한다. ### Date.UTC 

* Date.UTC : 1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달 된 지정 시간까지의 밀리초를 숫자로 반환한다.

* new Date(year, month[, day, hour, minute, second, millisecond])와 같은 형식의 인수를 사용한다.

* 인수는 로컬 타임(KST)이 아닌 UTC로 인식된다. */

console.log(Date.parse('Jan 1, 1970 09:00:00')); // 0
console.log(Date.parse('Jan 1, 1970 09:00:00 UTC')); // 32400000
console.log(Date.parse('1970/01/01/09:00:00')); // 0
console.log(Date.parse('1970/01/01/09:00:00 UTC')); // 32400000
console.log(Date.UTC(1970, 0, 1)); // 0


/* 연, 월, 일, 요일, 시, 분, 초 반환 */
const date = new Date();
console.log(date.getFullYear()); // 년
console.log(date.getMonth()); // 월
console.log(date.getDate()); // 일
console.log(date.getDay()); // 요일 (일요일부터 월요일을 0~6으로 반환)
console.log(date.getHours()); // 시
console.log(date.getMinutes()); // 분
console.log(date.getSeconds()); // 초
console.log(date.getMilliseconds()); // 밀리세컨


/* 연, 월, 일, 시, 분, 초 설정 */
const date2 = new Date();
date2.setFullYear(2020);
date2.setMonth(0);
date2.setDate(1);
date2.setHours(9);
date2.setMinutes(10);
date2.setSeconds(10);
date2.setMilliseconds(10);
console.log(date2); // 2020-01-01T00:10:10.010Z



/** Date.getTime 
 * 1970년 1월 1일 00:00:00(UTC)을 기점으로 경과된 밀리초 반환 */

/** Date.setTime
 * 1970년 1월 1일 00:00:00(UTC)을 기점으로 경과된 밀리초 설정 */
const date3 = new Date();
console.log(date3.getTime());
date3.setTime(5 * 24 * 60 * 60 * 1000);
console.log(date3);   // 1970-01-06T00:00:00.000Z


/** Date.prototype.getTimezoneOffset
 * UTC와 Date 객체에 지정된 로케일 시간과의 차이를 분 단위로 반환한다. */
const today = new Date();
console.log(today.getTimezoneOffset());       // -540
console.log(today.getTimezoneOffset() / 60);  // -9


/** Date.prototype.to__String 
 * 사람이 읽을 수 있는 형식의 문자열로 Date 객체의 날짜 반환한다. */
console.log(today.toString());
console.log(today.toDateString());
console.log(today.toTimeString());
console.log(today.toISOString());
console.log(today.toLocaleString());
console.log(today.toLocaleTimeString());