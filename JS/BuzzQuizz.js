/**
 * Created by itc_user on 6/15/2016.
 */
var sum = 0;

// var answerOneResult = function () {
//     var allAnswers1 = document.getElementsByName("question1");
//     for (var i = 0; i < allAnswers1.length; i++) {
//         var currentAnswer1 = allAnswers1[i];
//         if (currentAnswer1.checked) {
//             sum += parseInt(currentAnswer1.value);
//         }
//         // else {
//         //     sum += NaN;
//         // }
//
//     }
// };

// var arrayQ1Q2 = ["question1","question2"];
//
// var ans1ans2 = function(arrayQ1Q2){
    
    
// }

var handleChecked = function (num) {
    var allAnswers = document.getElementsByName("question"+num);
    for (var j = 0; j < allAnswers.length; j++) {
        var currentAnswer = allAnswers[j];
        if (currentAnswer.checked) {
            sum += parseInt(currentAnswer.value);
        }
    }
};

var answerThreeResult = function () {
    var allAnswers3 = document.getElementsByClassName("outfit selected");
    var outfitValue = allAnswers3[0].getAttribute("data-outfit-val");
    sum += parseInt(outfitValue);
};

var answerFourResult = function () {
    var allAnswers4 = document.getElementById("quantity");
    var houmousValue = calculateHumusValue(parseInt(allAnswers4.value));
    sum += parseInt(houmousValue);
};

var answerFiveResult = function () {
    var allAnswers5 = document.getElementById("ingredient");
    if (allAnswers5.value.toLowerCase() === "eggplant") {
        sum += 5;
    }
    else if (allAnswers5.value.toLowerCase() === "egg") {
        sum += 3;
    }
    else if (allAnswers5.value.toLowerCase() === "pita") {
        sum += 1;
    }
    else {
        sum += 0;
    }
};

var toggleSelected = function(clickedPic){
    // var allAnswers3 = document.getElementsByClassName("outfit");

    var allImages = document.getElementsByClassName('outfit');
    for( var i=0;i<allImages.length;i++){
        allImages[i].className = 'outfit';
    }
    clickedPic.className = "outfit selected";


};

var calculateHumusValue = function(houmousValue){
    var result = 0;
    switch (houmousValue){
        case 1:
            result = 1;
            break;
        case 2:
            result = 2;
            break;
        case 3:
            result = 3;
            break;
        case 4:
            result = 7;
            break;
        case 5:
            result = 6;
            break;
        case 6:
            result = 4;
            break;
        case 7:
            result = 5;
            break;

    }
    return result;

};

var checkPointsAnswers = function(){
    // answerOneResult();
    for (var i=1;i<3;i++) {
        handleChecked(i) //Checking answer of question 1 and 2
    }
    // answerTwoResult('1');
    // answerTwoResult('2');
    answerThreeResult();
    answerFourResult();
    answerFiveResult();
};

var checkMyScore = function () {
    checkPointsAnswers();
    var message = "";
    if (isNaN(sum)){
        message = "Please fill all the fields";
    }else {
        if (sum >=3 && sum < 9) {
            message = "Are you even trying???";
        }
        else if(sum>=9 && sum<15){
            message = "You have a lot of work to do";
        }
        else if(sum>=15 && sum<18){
            message ="You are getting close";
        }
        else if(sum>=18){
            message = "Yes you are a true Israeli, now what??? Want a gift?";
        }
    }

    var userMessage = document.getElementById("userMessage");
    userMessage.innerHTML = message;

};