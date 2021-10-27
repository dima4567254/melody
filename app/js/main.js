 $(function () {

     var modal = $(".modal");
     var currentFloor = 2; // переменая текущего этажа
     var floorPath = $(".home-image path"); //каждый отдельный этаж svg
     var counterUP = $(".counter-up") /*кнопка  увелечения этажа*/
     var counterDown = $(".counter-down") /*кнопка  уменьшения  этажа*/
     var modaCloseButton = $(".modal-close-button");
     var viewFlatsButton = $("view-flats");

     floorPath.on("click", toggleModal); //при клике на этаж вызвать окно
     modaCloseButton.on("click", toggleModal); // клик на кнопку закрыть
     viewFlatsButton.on("click", toggleModal);

     function toggleModal() {
         /*пример функции в переменной */ //функция закрыть открыть окно 
         modal.toggleClass("is-open");
     }

       /*функция при наведении мышью на этаж*/
       floorPath.on("mauseover", function () {
           floorPath.removeClass("current-floor"); // удаляем активный класс этажей 
           currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
           $(".counter").text(currentFloor); //записываем значение этажа в счетчик справа
       });

       counterUP.on("click", function() { //отслеживаем клик по кнопке верх
           if (currentFloor < 18) { //проверям значегие этажа
               currentFloor++; //прибавляем этаэ
               usCurrentFloor = currentFloor.toLocaleString("en-US", { // фарматируем переменую с этажом что бы было на 1 меньше 
                   minimumIntegerDigits: 2,
                   useGrouping: false
               });
               $(".counter").text(usCurrentFloor); //записываем значение этажа в счетчик справа

               floorPath.removeClass("current-floor"); //удаляем активнуй класс у этажей 
               $(`[data-floor=${usCurrentFloor}]`) .toggleClass("current-floor"); //подсвечиваем текущий этаж;
           }
       });

       counterDown.on("click", function() {
       if (currentFloor > 2) {
           currentFloor--;
           usCurrentFloor = currentFloor.toLocaleString("en-US", {
               minimumIntegerDigits: 2,
               useGrouping: false
           });
           $(".counter").text(usCurrentFloor);

           floorPath.removeClass("current-floor");
           $(`[data-floor=${usCurrentFloor}]`) .toggleClass("current-floor");
       }
       });
       });


   





 /*модальное окно сделанно через опасити  + js для закрытия окна   , при клике на этаж открывается окно становится опасити 1 а было 0 */
 /*floorPath класс который открывает*/