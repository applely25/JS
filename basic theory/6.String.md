# String

‘ 사용 → html 파일 작성시 많이 사용

“ 사용 → 문장 적을때 많이 사용

` 사용 → $랑 {}을 이용하여 변수나 표현식 이용시 유용함

```jsx
let name  = 'Mike';
let result = `My name is ${name}.` //My name is Mike.
let add = `2더하기 3은 %{2+3}입니다.` // 2더하기 3은 5입니다 

//`은 여러줄 사용 가능
let desc = `오늘은 맑고 화창한
낭씨가 계속 되겠습니다.`;

let desc = '오늘은 맑고  화창한\n낭씨가 계속 되겠습니다.';
let desc = '오늘은 맑고  화창한
낭씨가 계속 되겠습니다.'; //error!!
```

```jsx
//length : 문자열 길이
let desc = '안녕하세요.';
desc.length //6

//배열처럼 한 문자에 접근 가능
let desc = '안녕하세요.';
desc[2] //하
desc[0] //안
desc[4] = '용'; //-> 내용을 바꾸는 것은 안됨
console.log(desc); //안녕하세요.

//toUpperCase() / toLowerCase()
let desc = "Hi guys. Nice to meet you.";
des.toUpperCase(); // "HI GUYS. NICE TO MEET YOU."
des.toLowewrCase(); //"hi guys. nice to meet you."

//str.indexOf(text) : 문자를 인수로 받아 볓번째인지 알려줌
let desc = "Hi guys. Nice to meet you.";
desc.indexof('to'); //14 -> 첫번째글자 t를 기준으로 출력
desc.indexof('man'); //-1 -> 단어가 없는 경우 -1 출력
desc.indexof('Hi'); //0

//str.slice(n,m) : n부터 m까지 문자열을 반환
//n:시작점
//m : 없으면 문자열 끝까지 양수면 그 숫자까지(포함x) 음수면 끝에서부터 셈
let desc = "abcdefg";
desc.slice(2) //"cdefg"
desc.slice(0,5) //"abcde"
desc.slice(2,-2) // "cde"

//str.substring(n,m) : n과 m사이 문자열 반환
// n과 m을 바꿔도 동작
// 음수는 0으로 인식
let desc = "abcdefg";
desc.substring(2,5) //"cde"
desc.substring(5,2) //"cde"

//str.substr(n,m) : n부터시작 m개를 반환
desc.substr(2,4) //"cdef"
desc.substr(-4,2) //"de"
 
//str.trim() : 앞 뒤 공백 제거
let desc = " coding      ";
desc.trim(); //coding

//str.repeat(n) : n번 반복
let hello = "hello!";
hello.repeat(3); //"hello!hello!hello!"
```