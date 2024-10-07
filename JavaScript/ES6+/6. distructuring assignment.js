/* 4. distructuring assignment (구조 분해 할당) 
 * 구조 븐헤 할당을 사용하면 배열이나 객체를 변수로 '분해'하여 연결할 수 있다. */

/** 4-1. array distructring assignment basic syntax (배열 구조 분해 할당) 
 * 
 * 4-1-1. array distructring assignment basic syntax (배열 구조 분해 할당 기본 문법) */
let nameArr = ["Gildong", "Hong"];

// let firstName = nameArr[0];
// let lastName = nameArr[1];
let [firstName, lastName] = nameArr;
console.log(firstName);
console.log(lastName);

// 반환 값이 배열인 split 메소드를 활요한 예제
let [firstName2, lastName2] = "Saimdang Shin".split(" ");
console.log(firstName2);
console.log(lastName2);

// 쉼표를 사용하여 필요하지 않은 배열 요소를 벌리 수 있다.
let arr4 = ['firstName', 'middleName', 'lastName'];
let [firstName3, lastName3] = arr4;
console.log(firstName3);
console.log(lastName3);

/** 4-1-2. various usage(다양한 사용법) 
 * 객체 프로퍼티에 사용 */
let user = {};
[user.firstName4, user.lastName4] = "Gwansoon Yu".split(" ");
console.log(user);


/** 변수 교환 용도로도 사용할 수 있다. */
let student = "학생";
let teacher = "선생님";

[student, teacher] = [teacher, student];
console.log(`student : ${student}, teacher : ${teacher}`);

/** rest prameter ...로 나머지 요소를 한 번에 가져올 수도 있다.  */
let [sign1, sign2, ...rest] = ['양자리', '황소자리', '쌍둥이자리', '게자리', '사자자리'];
console.log(sign1);
console.log(sign2);
console.log(rest);


/** 기본 값을 설정하고 사용할 수도 있다 */
let [firstName5 = "아무개", lastName5 = "김"] = ["길동"];
console.log(firstName5);    // 배열에서 구조 분해 할당 된 값
console.log(lastName5);     // 기본 값



/* 4-2. object distructring assignment (객체 구조 분해 할당) 
  4-2-1. object distructring assignment basic syntax (객체 구조 분해 할당 기본 문법) */
let pants = {
  porductName: '배기팬츠',
  color: '검정색',
  price: 30000
};

let { porductName, color, price } = pants;
console.log(porductName);
console.log(color);
console.log(price);

// 각 변수의 서술 순서는 무관하며 (객체 프로퍼티 : 목펴 변수 ) 형식으로 작성할 수 있다.
let { color: co, price: pr, porductName: pn } = pants;
console.log(co);
console.log(pr);
console.log(pn);


/** 4-2-2. various usage(다양한 사용법) 
 * 프로퍼티가 많은 복잡한 객체에서 원하는 정보만 뽑아올 수 있다. */
let pants2 = {
  porductName2: '배기팬츠',
  color: '검정색',
  price: 30000
};

let{porductName2} = pants2;
console.log(`productName : ${porductName2}`);

/*  객체에 존재하지 않는 프로퍼티는 기본 값을 설정해서 사용할 수 있다. */

let shirts = {
    productName3 : '베이직 셔츠'
};

let { productName3: pn2, color: co2, price: pr2 = 0 } = shirts;
console.log(pn2);
console.log(co2);
console.log(pr2);


/* rest prameter ...로 나머지 요소를 한 번에 가져올 수도 있다. */
let { productName : productName2, ...rest2 } = pants;
console.log(productName2);
console.log(rest2);


/* let 키워드 없이 사용할 시 유의한다. */
let productName3, color3, price3;

// {procutName : productName3, color : color3, price : price3} = pants; 코드 블럭으로 인식하기 때문에 오류 발생
// ({procutName : productName3, color : color3, price : price3} = pants); 소괄호로 감싸주면 오류 해결
console.log(productName3);
console.log(color3);
console.log(price3);


/* 4-2-3. nested distructring (중첩 구조 분해) */
let product = {
  size : {
  width : 10,
  height : 30
  },
  items : ['doll', 'robot']
  };
  // 중첩 구조 분해 시 코드를 여러 줄에 걸쳐 작성해 의도하는 바를 명확히 드러낸다
  let {
  size : {
  width,
  height
    },
    items: [item1, item2],
    producer = "홍길동"
} = product;
  

  console.log(width);
  console.log(height);
  console.log(item1);
  console.log(item2);
  console.log(producer);
  

/** 4-2-4. fucntion parameters (함수 매개변수) 
 * 함수의 매개변수가 많거나 매개변수 기본값이 필요한 경우 등에 활용된다. */

// 인수의 순서가 고정되어 있어 순서가 바뀌면 문제가 생기고
// 기본 값 활용시에도 undefined를 이용해서 인수를 남겨줘야만 한다.
function displayProduct(producer = "아무개", width = 0, items = []) { }

displayProduct("신사임당", undefined, undefined, ["coffee", "Donut"]);

// 구조 분해 할당을 매개변수에 적용
function displayProduct2({ producer = "아무개", width = 0, height = 0, items = [] }) {
  console.log(producer);
  console.log(width);
  console.log(height);
  console.log(items);
}

// 함수에 전달할 객체
let exampleProduct = {
  items: ["Coffee", "Dount"],
  producer : "신사임당"
}

displayProduct2(exampleProduct);