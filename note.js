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


            Object에 에러있다 !

        ~Object !  
        {/* player라는 Object의 property !     */}
        const player = {
          name : "tarae",
          cute : true,
          age : 8,
        };

         console.log(player.age);
         player.lastName = "Bae";  - 추가
        

        ~함수 !
        {/* function name(params)               */}
        function sayHello(nameOfPerseon, age) {
          console.log("Hello i'm" + nameOfPerseon + "and" + age);          
        }

        sayHello("nico", 12);        
          (print) -> Hello i'm nico and 12 age


        ~응용 !
          const calculate ={
            name : "계산기", 
            plus: function (firstNumber, secondNumber) {
              console.log(firstNumber + secondNumber);
            }
            minus: function (firstNumber, secondNumber) {
              console.log(firstNumber - secondNumber);
            }
            divide: function (firstNumber, secondNumber) {
              console.log(firstNumber / secondNumber);
            }
            multiple: function (firstNumber, secondNumber) {
              console.log(firstNumber * secondNumber);
            }
            powerof: function (firstNumber, secondNumber) {
              console.log(firstNumber ** secondNumber);
            }            
          } 

          calculate.plus(3, 5); 
          calculate.minus(3, 5); 
          calculate.divide(3, 5); 
          calculate.multiple(3, 5); 
          calculate.powerof(3, 5); 




          ~return !
          log로 출력시 값은 저장이 안되고 출력만 된다.
          값을 저장하고싶다면, return을 쓰자.

           ex) powerof: function (firstNumber, secondNumber) {
                return console.log(firstNumber ** secondNumber);
              }  


          ! syntax 
           parseInt(15) = 15라는 string값을 int로 변환
           isnan(~)  -> number면 flase, 아니면 true
 
          

          ~console에 document치면 html 코드가 나온당

          
          if (age === 100) {
            ~~
          } else if (true) {
            ~~
          }
  


 


























      </div>
    </main>

    <footer>&copy; 니꼬쌤 강의</footer>
  </body>
</html>
