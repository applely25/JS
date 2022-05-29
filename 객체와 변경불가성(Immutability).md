# 객체와 변경불가성(Immutability)

1. **immutable value VS mutable value**
    
    immutable : 변경 불가능한 값
    
    - Boolean, null, undefined, Number, String, Symbol
    
    ```jsx
    var str = 'Hello';
    str = 'world';
    // hello가 사라지고 world가 저장되는 것이 아닌
    // 메머리에 world가 생성되고 str이 그것을 가르키는 것
    ```
    
    mutable value : 변경 가능한 값
    
    ```jsx
    var arr = [];
    console.log(arr.length); // 0
    
    var v2 = arr.push(2);
    // arr.push()는 메소드 실행 후 arr의 length를 반환
    console.log(arr.length); // 1
    ```
    
    하나를 공유 →
    
    ```jsx
    var user1 = {
      name: 'Lee',
      address: {
        city: 'Seoul'
      }
    };
    
    var user2 = user1; // 변수 user2는 객체 타입이다.
    
    user2.name = 'Kim';
    
    console.log(user1.name); // Kim
    console.log(user2.name); // Kim
    ```
    
    ![immutability.png](%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8B%E1%85%AA%20%E1%84%87%E1%85%A7%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC%E1%84%87%E1%85%AE%E1%86%AF%E1%84%80%E1%85%A1%E1%84%89%E1%85%A5%E1%86%BC(Immutability)%206c2b02f659464034b3e42a25e3965fc4/immutability.png)
    

1. **불변 데이터 패턴(immutable data pattern)**
    
    의도하지 않은 객체의 변경이 발생하는 원인
    
     : 레퍼런스를 참조한 다른 객체에서 객체를 변경
    
    - 객체의 방어적 복사(defensive copy)
        
        Object.assign
        
    - 불변객체화를 통한 객체 변경 방지
        
        Object.freeze
        
    - **Object.assign**
        
        ```jsx
        // Copy
        const obj = { a: 1 };
        const copy = Object.assign({}, obj);
        console.log(copy); // { a: 1 }
        console.log(obj == copy); // false
        
        // Merge
        const o1 = { a: 1 };
        const o2 = { b: 2 };
        const o3 = { c: 3 };
        
        const merge1 = Object.assign(o1, o2, o3);
        
        console.log(merge1); // { a: 1, b: 2, c: 3 }
        console.log(o1);     // { a: 1, b: 2, c: 3 }, 객체가 변경 됨
        console.log(o2);     // { b: 2 }, 변경 안됨
        console.log(o3);     // { c: 3 }, 변경 안됨
        
        // Merge
        const o4 = { a: 1 };
        const o5 = { b: 2 };
        const o6 = { c: 3 };
        
        const merge2 = Object.assign({}, o4, o5, o6);
        
        console.log(merge2); // { a: 1, b: 2, c: 3 }
        console.log(o4);     // { a: 1 }, 변경 안됨
        console.log(o5);     // { b: 2 }, 변경 안됨
        console.log(o6);     // { c: 3 }, 변경 안됨
        ```
        
        ```jsx
        const user1 = {
          name: 'Lee',
          address: {
            city: 'Seoul'
          }
        };
        
        // 새로운 빈 객체에 user1을 copy한다.
        const user2 = Object.assign({}, user1);
        // user1과 user2는 참조값이 다르다.
        console.log(user1 === user2); // false
        
        user2.name = 'Kim';
        console.log(user1.name); // Lee
        console.log(user2.name); // Kim
        
        // 객체 내부의 객체(Nested Object)는 Shallow copy된다.
        console.log(user1.address === user2.address); // true
        
        user1.address.city = 'Busan';
        console.log(user1.address.city); // Busan
        console.log(user2.address.city); // Busan
        ```
        
    - **Object.freeze**
        
        → 불변의 객체로 만들 수 있음
        
        ```jsx
        const user1 = {
          name: 'Lee',
          address: {
            city: 'Seoul'
          }
        };
        
        // Object.assign은 완전한 deep copy를 지원하지 않는다.
        const user2 = Object.assign({}, user1, {name: 'Kim'});
        
        console.log(user1.name); // Lee
        console.log(user2.name); // Kim
        
        Object.freeze(user1); //user1은 변경이 안된다
        
        user1.name = 'Kim'; // 무시된다!
        user1.address.city = 'Busan'; // 변경된다!
        //-> 객체 내부의 객체는 변경 가능
        
        console.log(user1); // { name: 'Lee', address: { city: 'Busan' } }
        console.log(Object.isFrozen(user1)); // true
        
        deepFreeze(user1);
        user1.address.city = 'Seoul'; // 무시된다!
        console.log(user1); // { name: 'Lee', address: { city: 'Busan' } }
        ```
        
    - **Immutable.js**
        
        ```bash
        $ npm install immutable // npm을 사용하여 설치
        ```
        
        ```jsx
        const { Map } = require('immutable')
        const map1 = Map({ a: 1, b: 2, c: 3 })
        const map2 = map1.set('b', 50)
        map1.get('b') // 2
        map2.get('b') // 50
        ```