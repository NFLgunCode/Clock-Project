
      var hours = 0;
      var seconds = 0;
      var minutes = 0;
      var deg=document.querySelector(".second-hand");
      var jeg=document.querySelector(".min-hand");
      var beg=document.querySelector(".hour-hand")

      function incrementSeconds() {

          seconds += 1;
          degree=seconds*6;
          deg.style.transform = "rotate" + "(" + degree + "deg" + ")" ;

      }

      setInterval(incrementSeconds, 1000);


      function incrementMinutes() {


          minutes += 1;
          migri=minutes * 0.1;
          jeg.style.transform = "rotate" + "(" + migri + "deg" + ")" ;

      }

       setInterval(incrementMinutes, 1000);



         function incrementHours() {


          hours += 1;
          sigri=hours*(0.1/12);
          beg.style.transform = "rotate" + "(" + sigri + "deg" + ")" ;

      }

       setInterval(incrementHours, 1000);