# HTTP

**: HTML 문서와 같은 리소스들을 가져올 수 있도록 해주는 프로토콜**

(인터넷에서 데이터를 주고 받을 수 있도록 하는 프로토콜)

(프로토콜 : 데이터 교환 방식을 정의하는 규칙 체계 / 형식을 정의하는 규칙의 집합)

**모든 데이터 교환의 기초,  클라이언트 - 서버 프로토콜**

(클라이언트 - 서버 프로토콜 : 수신자 측에서 의해 요청이 초기화되는 프로토콜)

→ 쉬운 확장이 가능한 프로토콜

**HTTP 동작**

- 요청(request) : client → server
- 응답(response) : server → client

**HTTP 특징**

- TCP / IP 이용하는 응용 프로토콜
    - TCP(전송 제어 프로토콜) : 두 개의 호스트 연결, 데이터 스트림 교환해주는 네트워크  프로토콜)
        
        (데이트 스트림 : 한 번의 익기 또는 쓰기 동작으로 전송되는 정보, 데이터 항목의 연속적인 흐름)
        
    - IP(인터넷 규약 주소) : 컴퓨터 네트워크 장치들이 서로 통신하기 위해 사용되는 번호
- 연결 상태를 유지하지 않는 비연결성 프로토콜
- 연결을 유지 하지 않는 프로토콜 → 요청/응답 방식으로 동작

**HTTP 단점**

- 암호화 하지 않는 통신이기 때문에 도청 가능
- 통신 상대를확인 하지 않아 위장 가능
- 변조 가능

**HTTP단점을 해결하기 위한 암호화 방식**

![img1.daumcdn.png](HTTP%208a5ba9aac10a4e41a4ee75d0ad7d59fe/img1.daumcdn.png)

- 공개키 방식
    
    한 쌍의 키로 암호화 복호화를 함
    
    (ex A키가 암호화, B키는 복호화)
    
- 대칭키 암호화 방식
    
    암호화를 하는 키와 복호화를  하는 키가 동일
    

**Request (요청)**

- **종류**
    - GET : 자료 요청
    - POST : 자료 생성
    - PUT : 자료 수정
    - DELETE : 자료 삭제
- **예시**
    
    ```jsx
    GET https://velog.io/@surim014 HTTP/1.1								// 시작줄
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) ...			  // 헤더
    Upgrade-Insecure-Requests: 1
    ```
    
    1. 시작줄 (첫 줄)
        
        메서드 구조 버전으로 구성
        
        - GET : HTTP Method
        - [https://velog.io/@surim014](https://velog.io/@surim014) : 사이트 주소
        - HTTP/1.1 : HTTP 버전
    2. 헤더 ( 두 번째 줄부터)
        
        요청에 대한 정보 담고 있음
        
        - User-Agent, Upgrade-Insecure-Requests 등
    3. 본문 (헤더에서 한 줄 띄고)
        
        요청을 할 때 보낼 데이터를 담는 부분
        
        - 예시는 지금 비어 있음
    
    ![HTTP_Request.png](HTTP%208a5ba9aac10a4e41a4ee75d0ad7d59fe/HTTP_Request.png)
    

**Response (응답)**

- **상태 코드**
    - 1XX (조건부 응답) : 요청 받음, 작업 계속 진행
    - 2XX (성공) : 클라이언트 요청을 이해,승낙 했으며 성공적으로 처리했음
    - 3XX (리다이렉션 완료) : 클라이언트는 요청을 마치기 위해 추가 동작 취해야 함
    - 4XX (요청 오류) : 클라이언트에 오류 있음
    - 5XX (서버 오류) : 서버가 유효한 요청을 명백히 수행하지 못했음
- **예시**
    
    ```jsx
    HTTP/1.1 200 OK														// 시작줄
    Connection: keep-alive												 // 헤더
    Content-Encoding: gzip												 
    Content-Length: 35653
    Content-Type: text/html;
    
    <!DOCTYPE html><html lang="ko" data-reactroot=""><head><title...
    ```
    
    1. 시작줄 (첫 줄)
        
        버전 상태코드 메세지
        
        - 200은 성공적인 요청이었다는 뜻
    2. 헤더 ( 두 번째 줄부터)
        
        응답에 대한 정보
        
    3. 본문 (헤더 뒤부터)
        
        요청한 데이터를 담아서 보내줌
        
        응답 메시지에 HTML이 담겨 있는데 이 HTML을 받아 브라우저가 화면에 렌더링함
        
    
    ![HTTP_Response.png](HTTP%208a5ba9aac10a4e41a4ee75d0ad7d59fe/HTTP_Response.png)