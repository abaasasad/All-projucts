$(document).ready(function() {
  $("#submit1").click(function(){
//Business logic

    var marks = 0;
    var score = 0;
    var ques1 = document.forms["questions"]["question1"].value;
    var ques2 = document.forms["questions"]["question2"].value;
    var ques3 = document.forms["questions"]["question3"].value;
    var ques4 = document.forms["questions"]["question4"].value;
    var ques5 = document.forms["questions"]["question5"].value;
    var ques6 = document.forms["questions"]["question6"].value;
    var ques7 = document.forms["questions"]["question7"].value;
    var ques8 = document.forms["questions"]["question8"].value;
    var ques9 = document.forms["questions"]["question9"].value;
    var ques10 = document.forms["questions"]["question10"].value;


         if(ques1 == "answer"){
            score = marks + 10;
          }
          if(ques2 == "answer"){
            score = score+10;
          }
          if(ques3 == "answer"){
            score = score + 10;
          }
          if(ques4 == "answer"){
            score = score + 10;
          }
          if(ques5 == "answer"){
            score = score + 10;
          }
          if(ques6 == "answer"){
            score = score + 10;
          }
          if(ques7 == "answer"){
            score = score + 10;
          }
          if(ques8 == "answer"){
            score = score + 10;
          }
          if(ques9 == "answer"){
            score = score + 10;
          }
          if(ques10 == "answer"){
            score = score + 10;
          }
       event.preventDefault();
      document.getElementById("message").innerHTML="You scored" + " " + score +"%";
      });

  });

