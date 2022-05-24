# 심볼(Symbol)

유일한 식별자

```jsx
const a = Symbol(); // new를 붙이지 않음
const b = Symbol();
// a===b; //false
// a==b; //false 
```

유일성이 보장됨

```jsx
const id = Symbol('id');
const user = {
	name : 'Mike',
	age : 30,
	[id] : 'myid'
}

//user -> {name : "Mike", age : 30, Symbole(id): "myid"}
Object.keys(user); // ["name", "age"]
Object.values(user); // ["Mike", 30]
Object.entries(user); // [Array(2), Array(2)]
```

- Symbol.for() : 전역 심볼
    - 하나의 심볼만 보장
    - 없으면 만들고, 있으면 가져옴
    - Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유
    
    ```jsx
    const id1 = Symbol.for('id');
    const id2 = Symbol.for('id');
    
    id1 === id2; //true
    ```