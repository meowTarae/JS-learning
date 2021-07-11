<!DOCTYPE html>
<html lang="kr">
  <head>
    <meta charset="utf-8" />
    <link rel="short icon" href="note.jpg" />
  </head>

  <body>
    <header>
      <h1>여기는 바닐라 JS !!!</h1>
    </header>

    <main>
      <div>
        <!-- -바닐라 JS 시작!!- -->

        변수(=variables) 선언
          -> const, let

          const는 상수 지정, 변경 불가.
          But, let은 변수 느낌.
           ex) let a = 5;
               ...  a = 4; 로 코딩 가능.

            (기본적으론 상수 const 사용, 
             필요할때만 변수 let 사용) 



        console.log();  -> 기록하여 보여줌.
         -> L 누르고  탭 !



        boolaens  -> True / Flase
        

        JS에서의 배열 
         const 7day = ["mon", "tue", "wen", ..];

         console.log(7day);

         7day.push("sum");  - 추가
         console.log(7day[0~6]);  - 여기도 0부터 시작함.


            

        ~Object !  
        {/* player라는 Object의 property !     */}
        const player = {
          name : "tarae",          
          age : 8,
        };    <- 끝에 ; 붙음

         console.log(player.age);
         player.lastName = "Bae";  - 추가
        






        ~함수 !
          function myFunc(a, b) {
            console.log("Hi"+a+b);
          }    <- 끝에 ; 안붙음
          
          myFunc()   ->  ()은 함수 실행 버튼으로 생각 !
          myFunc(1,2);   -> ' Hi3 '
              






        ~Object 안에 함수를 넣어보자.            
            const Calculate = {
              plus: function (n1, n2) {
                return n1 + n2;
              },
              minus: function (n1, n2) {
                return n1 - n2;
              },                              
            };
                
            console.log(Calculate.plus(3, 5));
        




          ~return !
          log로 출력시 값은 저장이 안되고 출력만 된다.
          값을 저장하고 싶다면, return을 쓰자.

           ex) powerof: function (firstNumber, secondNumber) {
                return console.log(firstNumber ** secondNumber);
              }  





          ! syntax 
           parseInt(15) = 15라는 string값을 int로 변환
           isnan(~)  -> number면 flase, 아니면 true
 
          
                 
                 
                 

          ~console에 document치면 html 코드가 나온당
              ex) const a = document.querySelector(".list div");   
                                                        -> 하나만 호출
                  
                  const a = document.querySelectorAll(".list div");
                                                        ->   전체 호출
                                                          
                                                        
                                                            
          
          ~dir
          console.dir(a);   ->  요소 a의 내부를 볼 수 있음
          
          
                    
          
          
          ~Event
          const text = document.querySelector(".box h2");
          
          function ifClick() {
            text.classList.toggle("ifClicked");
                                  -> ifClicked는 css에서 내가 적은 style중 하나임.
            text.style.color = "royalblue";                      
          }

          text.addEventListener("click", ifClick);
                                  -> click 시 ifClick함수가 실행되는거라 ()안붙인다.

                                  

                                  
 

         h1.classname = "A";               -> Class를 A로 지정
         h1.classname = "";                -> Class를 제거
         h1.getElementByClassName = "A";   -> Class가 A인 애를 호출
         
         
         
         
         
         
         =의 갯수관련
          
          = 1개    ->  값의 변경을 의미
          === 3개    ->  좌/우가 같은지 확인


          
          
         ~classList

          console text = "~";  
          
          text.classList.toggle("요소");  -> 요소의 class가 있으면 제거, 없으면 생성을 해줌.          
          text.classList.add("요소");  -> 요소의 class를 추가.
        

      
         ~ 필기..

          function ~~~(event){
            evnet.preventDefault();
          }
          loginForm.addEvnetListener("submit", ~~~);
              addEvnetListener에서의 func의 첫번째 argument인 event는 
              방금 일어난 event에 대한 정보를 가지고 있음.
              그리고 preventDefault라는 함수는 event 발생을 막아주는 함수이다.
                                                                        
                                     
           
                                     
         ~ 글자 관련해서,
          "Hello" + text + "!" 이러지 말고
          `Hello ${text}!` 이렇게 하자.
              
              
              
         ~  
          














      </div>
    </main>

    <footer>&copy; 니꼬쌤 강의</footer>
  </body>
</html>
