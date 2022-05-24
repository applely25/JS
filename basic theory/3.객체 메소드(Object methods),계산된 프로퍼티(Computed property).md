# 객체 메소드(Object methods),계산된 프로퍼티(Computed property)

- Computed property
    
    ```jsx
    let a = 'age';
    
    const user = {
    	name : 'Mike',
    	[a] : 30  // [a] -> 변수 a에 할당 된 값 // age : 30
    }
    
    const user2 = {
    	[1+4] : 5, // 5: 5
    	["안녕"+"하세요"] : "Hello" // 안녕하세요: "Hello"
    }
    ```
    
- Methods
    - Object.assign() : 객체 복제
        
        ```jsx
        const user = {
        	name : 'Mike',
        	age : 30,
        }
        
        const cloneUser = user; //복제가 되는것이 아니라 하나를 공유함
        // cloneUser에 이름을 바꾸면 user 이름도 바뀜
        
        //복제하고 싶으면 Object.assign 사용
        const newUser = Object.assign({}, user); //{}: 초기값, 두번째 매개변수부터 쓰인것이 들어옴
        
        *// {} + {name : 'Mike', age : 30) = {name : 'Mike', age : 30,)
        
        newUser.name = 'Tom'; //newUser의 이름을 바꾸어도 상관 없음
        console.log(user.name); // 'Mike'
        newUser != user
        
        const newUser2 = Object.assign({gender : 'male'}, user); //추가됨
        //{gender : 'male'} + {name : 'Mike', age : 30) = {gender : 'male' ,name : 'Mike', age : 30,)
        
        const newUser3 = Object.assign({name : 'Tom'}, user); //덮어씀
        //{name : 'Tom'} + {name : 'Mike', age : 30) = {name : 'Tom', age : 30,)* 
        
        ```
        
    - Object.keys() :  키 배열 반환
        
        ```jsx
        const user = {
        	name : 'Mike',
        	age : 30,
        	gender : 'male',
        }
        Object.keys(user); //["name", "age", "gender"]
        ```
        
    - Object.values() :  값 배열 반환
        
        ```jsx
        const user = {
        	name : 'Mike',
        	age : 30,
        	gender : 'male',
        }
        Object.valuse(user); //["Mike", "30", "male"]
        ```
        
    - Object.entries() :  키/값 배열 반환
        
        ```jsx
        const user = {
        	name : 'Mike',
        	age : 30,
        	gender : 'male',
        }
        Object.entries(user); //[["name","Mike],["age",30], ["gender", "male"]]
        ```
        
    - Object.formEntries() :  키/값 배열을 객체로
        
        ```jsx
        const user =
        [
        	["name" : "Mike"],
        	["age" : 30],
        	["gender" : "male"]
        ]
        Object.formEntries(user); //{name : 'Mike', age : 30, gender : 'male'}
        ```