1.
  시계 만드는 코드!

  현재시간 불러오는 법
  const a = new date();

  시각을 알고 싶다
  const hour = a.getHours();
  
  문자열로 변환
  String(a.getHours())

  07:00:01 처럼 0붙여서 두자리로 출력하고싶다.
  String(a.getHours()).padStart(2, "0");

  setInterval(함수명, 1000); // 시간마다 함수가 실행됨.
                      
  setTimeout(함수명, 1000);  // 시간 후에 함수가 한번 실행됨.
                      -> 단위는 (ms)


2.
  JS에서 배열 작성법.
  const a = [
    {
      b = 1,
      c = 1,
    },
    {
      b = 2,
      c = 2,
    },
  ];


3.
  Math Function
  
   올림 : Math.ceil(3.2);      // = 4
   내림 : Math.floor(3.2);     // = 3
   반올림 : Math.round(3.2);   // = 3
  
   랜덤 : Math.random();       // = 0.0... ~ 0.9... 사이의 값 하나 추출
   
   응용
    Math.floor(Math.random() * myArray.length); 
    // 랜덤으로 숫자 하나 겟.
    // 배열의 갯수 추출 ex) 5개
    // 곱해서 내림하면, 0 ~ 4의 숫자를 얻음.


4.
  Document(HTML) -> JS
    const a = Document.qurrySelector(".clock");

  JS -> Document
    const a = Document.createElement("img");
    a.src = './img/${images[0]}';
    document.body.appendChild(a);

  => <img src="./img/0.jpeg" />  // html 맨 밑 js수입하는 줄 밑에, body 안에 생성됨 
    
