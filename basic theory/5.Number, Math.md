# Number, Math

- toString()
    
    10진수 → 2진수/16진수
    
    ```jsx
    let num = 10;
    num.toString(); //"10" //숫자를 문자로
    num.toString(2); //"1010" //()안에 숫자의 진법으로 바꾸어줌
    
    let num2 = 255;
    num2.toString(16); //"ff"
    ```
    
- Math
    
    ```jsx
    //Math.PI; //원주율 구해줌 //3.141592653589793..
    
    //Math.ceil() : 올림
    let num1 = 5.1;
    let num2 = 5.7;
    Math.ceil(num1); //6
    Math.ceil(num2); //6
    
    //Math.floor() : 내림
    let num1 = 5.1;
    let num2 = 5.7;
    Math.floor(num1); //5
    Math.floor(num2); //5
    
    //Math.round() : 잔올림
    let num1 = 5.1;
    let num2 = 5.7;
    Math.round(num1); //5
    Math.round(num2); //6
    
    //소숫점 둘째자리 표현하는 경우(셋째자리에서 반올림)
    let userRate = 30.1234;
    Math.roud(userRate *100)/100 // 30.12
    
    //toFixed() : 소숫점 반올림
    // 주의(문자로 반환함) -> 숫자로 사용시 number(userRate.toFixed(2)); 이런식으로 사용해야함
    let userRate = 30.1234;
    userRate.toFixed(2); //30.12 소숫점 둘째자리 표현하는 경우(셋째자리에서 반올림)
    userRate.toFixed(0); //30
    userRate.toFixed(6); //30.123400 //남는부분 0을 채워줌
    
    //isNaN() :NaN인지 아닌지 판단
    let x = Number('X'); //NaN
    x == Nan //false
    x === NaN //false
    NaN == NaN //false
    
    isNaN(x) //true
    isNaN(3) //false
    
    //parseInt() :문자와 숫자가 섞여있어도 읽을수 있는데까지 숫자로 바꿈
    //소숫점이하는 무시
    let margin = '10px';
    parseInt(margin); // 10
    Number(margin); //NaN
    
    let redColor = 'f3'; //앞에서부터 문자가 나오기전까지 읽음
    parseInt(redColor); //NaN
    parseInt(redColor,16); //243 //16진수를 숫자로 바꿈
    parseInt('11', 2) //3  //2진수 11은 10진수로 3
    
    //parseFloat() : 소숫점까지 숫자로 바꾸어줌
    let padding - '18.5%';
    parseInt(padding); //18
    parseFloat(padding); //18.5
    
    //Math.random : 랜덤함수 만듬
    //0에서 1사이에 무작위 숫자
    Math.random() //0.2456324863256
    Math.random() //0.98741252595
    //1~100 사이 임의의 숫자 원할시
    Math.floor(Math.raandom()*100)+1
    //Math.random ->0.6789
    //Math.random*100 ->67.89
    //Math.floor(Math.raandom()*100) -> 67
    //Math.floor(Math.raandom()*100)+1 -> 68
    // 1을 더해주지 않는 경우 : 0~99
    
    //Math.max(), Math.min //최솟값, 최댓값
    Math.max(1,4,-1,5,10,9,5.54); //10
    Math.min(1,4,-1,5,10,9,5.54); //-1
    
    //Math.abs() : 절대값
    Math.abs(-1) //1
    
    //Math.pow(n,m) : 제곱 n의 m제곱
    Math.pow(2,10) //1024
    
    //Math.aqrt() : 제곱근
    Math.sqrt(16) //4
    ```