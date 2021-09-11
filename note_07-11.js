1.
  const text = document.querySelector(".login h1");
  console.log(text.length);   -> text의 글자 길이

  
2.
  function ifUserEnter(event = (요소명)) {
    evnet.preventDefault();   
     ->       현 func의 첫번째 argument(요소명)인 event는 
              방금 일어난 event에 대한 정보를 가지고 있음.
              그리고 preventDefault라는 함수는 event 발생을 막아주는 함수이다.
  }


3.
  새로고침을 하더라도 정보가 날라가지 않게끔, 정보를 Application-LocalStroage에 저장하자.
  
  
  const name = "Bae";
  localStorage.setItem("myName", name);
   -> myName이라는 Key에 name값인 Bae라는 Value가 저장됨.
  
  const localMemory = localStorage.getItem("myName");
   -> Key값이 localMemory에 저장됨. 빈값이면 NULL. 
   
  const localMemory = localStorage.removeItem("myName");
   

4.
  class명이 반복되는 경우, 
  const 로 변수 지정해서 사용하는게 좋다.
  const로 변수를 지정하면, JS에서 변수 오타를 잡을 수 있기 때문.
  


  
