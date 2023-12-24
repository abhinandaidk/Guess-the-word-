var player1 = localStorage.getItem("player1_name");
var player2 =localStorage.getItem("player2_name");

question_turn = "player1"
answer_turn = "player2 "

var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;

document.getElementById("player1_scorename").innerHTML= player1 + " : ";
document.getElementById("player2_scorename").innerHTML= player2 + " : ";

document.getElementById("player_turn").innerHTML = "Question: " + player1;
document.getElementById("player_answer").innerHTML = "Answer: " + player2;

function send(){
    get_word = document.getElementById("input").value;
    word = get_word.toLowerCase();
    console.log("word in lower case: " + word);

    charAt1 = word.charAt(1);
     console.log(charAt1)

     word_length_divide2= Math.floor(word.length/2);
     charAt2 = word.charAt(word_length_divide2);
     console.log(charAt2);
     
      length_minus_one= word.length - 1; 
      charAt3 = word.charAt(length_minus_one);
     console.log(length_minus_one);

      remove_char1 = word.replace(charAt1, "_");
     remove_char2 = remove_char1.replace(charAt2,"_");
     remove_char3 = remove_char2.replace(charAt3, "_");
     console.log(remove_char3); 

      question= "<h4 id='worddisplay' >Q. " + remove_char3 + "</h4>";
      input_box = "<br>Answer: <input type='text' id='input_check_box'>";
      check_button = "<br><br><button class='btn btn-success' onclick='check()'>Check</button>";
      row = question + input_box + check_button;
     document.getElementById("output").innerHTML = row;
     document.getElementById("input").value = " ";

}

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lowercase: " + answer);

    if(answer == word){
        if(answer_turn == "player1"){
            player1_score = player1_score + 1; 
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    else{
        if(answer_turn == "player1"){
            player1_score = player1_score - 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score - 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if( question_turn == "player1"){
        question_turn = "player2"
        console.log(question_turn);
        document.getElementById("player_turn").innerHTML = "Question turn: " + player2;
    }
    else {
        question_turn = "player1";
        console.log(question_turn);
        document.getElementById("player_turn").innerHTML ="Question turn: " + player1 ;
    }

    if( answer_turn == "player1"){
        answer_turn = "player2"
        console.log(answer_turn);
        document.getElementById("player_answer").innerHTML = "Answer turn: " + player2;
    }
    else {
        answer_turn = "player1";
        console.log(answer_turn);
        document.getElementById("player_answer").innerHTML ="Answer turn: " + player1;
    }
    document.getElementById("output").innerHTML = " ";
}