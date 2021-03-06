﻿$(document).ready(function () {

    loadAllDataFromCSV();
    //fires the "GetAllDataFromCsvFile" method in the HomeControllers, which returns a collection of "Data objects" and sets the 'allDataFromCSV' variable
    //each Data object represents each riddle or line

    var counter = 0;
    var totalQuestions = 0;
    var totalCorrectAnswer = 0;
    var time = '';
    var minutes = 0;
    var seconds = 0;

    var allDataFromCSV = null; // the "loadAllDataFromCSV()" methods sets this variable 
    //a collection of "Data" objects

    var currentDataIndex = 0;
    var startEndBtnText = 'Start Game';
    var imageCounter = 1;

    $('#gameDiv').hide();

    $('#spnFirstWord').hide();
    $('#spnSecondWord').hide();
    $('#spnThirdWord').hide();
    $('#spnFourthWord').hide();

    $('#btnStartAndEnd').text(startEndBtnText);

    //***run every 1000 milliseconds, which is every second
    setInterval(function () {
        counter++;
        time = counter + " seconds";
        if (counter > 59) {
            minutes = counter / 60;//this gets the minutes value
            minutes = Math.trunc(minutes);
            seconds = counter % 60;//this gets the seconds value
            time = minutes + " minutes " + seconds + " seconds";
        }

        $('#counter').text(time);
        if (counter >= 1200) { // 20 minutes to complete the game
            showGrade();
        }

    }, 1000);//run every 1000 milliseconds, which is every second

    $('#btnStartAndEnd').on('click', function () {
        //shows the theme image
        $('#themePicture').show();
        //shows the theme image

        counter = 0;
        $('#counter').show();
        $('#tdTotalQuestions').text(totalQuestions);
        $('#grade').text('');

        var btnText = $('#btnStartAndEnd').text();

        if (btnText == 'Start Game') {//fires when the "Start Game" button is pushed

            alert('Solve All Riddles Within 20 Minutes To Be A Boss!' + "\n \n" + "Finish in less than 10 minutes --> A letter grade \n" + "Finish in 11 minutes --> B letter grade \n" + "Finish in 12 minutes --> C letter grade \n" + "Finish in 13 minutes --> D letter grade \n" + "Finish in more than 13 minutes --> F letter grade \n");

            document.getElementById("readyToPlayP").style.visibility = "hidden";//hides the p tag with the ready to paly message
            document.getElementById("btnCheck").style.visibility = "visible";//shows 'check answer' button

            var btnText = $('#btnStartAndEnd').text('Give Up');//changes the texts

            $('#gameDiv').show();
            $('.clsAnswer').removeAttr('readonly');

            $('.clsAnswer').val('');
            $('#txtFinalAnswer').val('');
         //   $('.clsHint').val('a'); (need to fix this)
            $('#spnFirstWord').hide();
            $('#spnSecondWord').hide();
            $('#spnThirdWord').hide();
            $('#spnFourthWord').hide();
            //var answer = allDataFromCSV[currentDataIndex].Answer;
            //console.log(answer);
            //var totalTextBoxes = answer.trim().split(' ').length;
            //console.log(totalTextBoxes);
            //var htmlString = '';
            //for (var i = 0; i < totalTextBoxes; i++) {
            //    htmlString += '<input type = "text"/>&nbsp;&nbsp;&nbsp;'
            //}
            //$('#txtFinalAnswer').html(htmlString);

            textBoxes();

            //$('#btnGetFullAnswer').on('click', function () {
            //    var userAnswer = "";
            //    var div = $('#txtFinalAnswer').children();
            //    console.log(div);
            //    for (var i = 0; i < div.length; i++) {
            //        alert(div[i].value);
            //        userAnswer += div[i].value.trim() + " ";
            //    }
            //    alert(userAnswer);
            //});


            $('#tdRiddle').text(allDataFromCSV[currentDataIndex].Riddle);
            $('#tdJumbleWord1').text(shuffle(allDataFromCSV[currentDataIndex].JumbleWord1.Item1));
            $('#tdJumbleWord2').text(shuffle(allDataFromCSV[currentDataIndex].JumbleWord2.Item1));
            $('#tdJumbleWord3').text(shuffle(allDataFromCSV[currentDataIndex].JumbleWord3.Item1));
            $('#tdJumbleWord4').text(shuffle(allDataFromCSV[currentDataIndex].JumbleWord4.Item1));
        }
        else {//this will fire every time except the first time around
            //fires when the "Give Up" button is pushed
            document.getElementById("readyToPlayP").style.visibility = "visible";//shows the p tag with the ready to paly message
            document.getElementById("btnCheck").style.visibility = "hidden";//hides 'check answer' button

            // $('#gameDiv').hide();
            var btnText = $('#btnStartAndEnd').text('Start Game');
            alert('You Gave Up and Failed! Please Play Again!');
            $("#txtFirstWord").val(allDataFromCSV[currentDataIndex].JumbleWord1.Item1);
            $("#txtSecondWord").val(allDataFromCSV[currentDataIndex].JumbleWord2.Item1);
            $("#txtThirdWord").val(allDataFromCSV[currentDataIndex].JumbleWord3.Item1);
            $("#txtFourthWord").val(allDataFromCSV[currentDataIndex].JumbleWord4.Item1);
            $("#txtFinalAnswer").val(allDataFromCSV[currentDataIndex].Answer);
            currentDataIndex = 0;
            counter = 0;
            totalCorrectAnswer = 0;
            $('#counter').hide();
            $('#tdTotalCorrectAnswers').text(totalCorrectAnswer);
            $('#totalTimeTaken').text('');
            $('.clsHint').text('');

            imageCounter = 1;//resets the image counter 

            //resets the image back to 1 and then hides it
            $("#themePicture").attr("src", "/Pictures/theme1.png");
            $("#themePicture").css({ 'width': '', 'height': '325px' });

            //hide the image and set it to the first image 
            $('#themePicture').hide();
            //$('#themePicture').show();
        }
    });

    $('#btnCheck').on('click', function () {

        var firstAnswer = $('#txtFirstWord').val();
        var secondAnswer = $('#txtSecondWord').val();
        var thirdAnswer = $('#txtThirdWord').val();
        var fourthAnswer = $('#txtFourthWord').val();

        var userAnswer = "";
        var div = $('#txtFinalAnswer').children();
        console.log(div);
        for (var i = 0; i < div.length; i++) {
            //alert(div[i].value);
            userAnswer += div[i].value.trim() + " ";
        }
        //alert(userAnswer);
        console.log(userAnswer);

        
       // if ($('#txtFinalAnswer').children.val().toLocaleLowerCase().trim() == allDataFromCSV[currentDataIndex].Answer.toLocaleLowerCase().trim()) {
       //     alert('Congratulation ! Your answer is correct.');


        if (firstAnswer == '' || secondAnswer == '' || thirdAnswer == '' || fourthAnswer == '') {
            alert('Please Solve All The Jumbled Words First!.');
        }
        if (userAnswer.trim()== allDataFromCSV[currentDataIndex].Answer.toLocaleLowerCase().trim()) {
                alert('Congratulation ! Your answer is correct.');

        //if (true) {

            totalCorrectAnswer++;
            currentDataIndex++;

            //transition to next pic
            imageCounter = imageCounter + 1;
            alert('The image counter:' + imageCounter);
            //transition to next pic

            if (imageCounter == 2) {
                $("#themePicture").attr("src", "/Pictures/theme2.jpg");
                $("#themePicture").css({ 'width': '', 'height': '325px' });
            } else if (imageCounter == 3) {
                $("#themePicture").attr("src", "/Pictures/theme3.jpg");
                $("#themePicture").css({ 'width': '', 'height': '325px' });
            } else if (imageCounter == 4) {
                $("#themePicture").attr("src", "/Pictures/theme4.jpg");
                $("#themePicture").css({ 'width': '', 'height': '325px' });
            } else if (imageCounter == 5) {
                $("#themePicture").attr("src", "/Pictures/theme5.png");
                $("#themePicture").css({ 'width': '', 'height': '325px' });
            } else if (imageCounter == 6) {
                $("#themePicture").attr("src", "/Pictures/theme6.jpg");
                $("#themePicture").css({ 'width': '', 'height': '325px' });
            } else if (imageCounter == 7) {
                $("#themePicture").attr("src", "/Pictures/theme7.jpg");
                $("#themePicture").css({ 'width': '', 'height': '325px' });
            } else if (imageCounter == 8) {
                $("#themePicture").attr("src", "/Pictures/theme8.jpg");
                $("#themePicture").css({ 'width': '', 'height': '325px' });
            } else if (imageCounter == 9) {
                $("#themePicture").attr("src", "/Pictures/theme9.jpg");
                $("#themePicture").css({ 'width': '', 'height': '325px' });
            } else if (imageCounter == 10) {
                $("#themePicture").attr("src", "/Pictures/theme10.jpg");
                $("#themePicture").css({ 'width': '', 'height': '325px' });
            } else if (imageCounter == 11) {
               
            }


            $('#tdRiddle').text(allDataFromCSV[currentDataIndex].Riddle);
            $('#tdJumbleWord1').text(shuffle(allDataFromCSV[currentDataIndex].JumbleWord1.Item1));
            $('#tdJumbleWord2').text(shuffle(allDataFromCSV[currentDataIndex].JumbleWord2.Item1));
            $('#tdJumbleWord3').text(shuffle(allDataFromCSV[currentDataIndex].JumbleWord3.Item1));
            $('#tdJumbleWord4').text(shuffle(allDataFromCSV[currentDataIndex].JumbleWord4.Item1));

            $('#spnFirstWord').hide();
            $('#spnSecondWord').hide();
            $('#spnThirdWord').hide();
            $('#spnFourthWord').hide();

            $('.clsAnswer').val('');
            textBoxes();
        
            //$('.clsAnswer').prop('readonly', 'false');
            $('.clsAnswer').removeAttr('readonly');

            $('.clsHint').text('');

            $('#tdTotalCorrectAnswers').text(totalCorrectAnswer);

            $('#totalTimeTaken').text(time);
            showGrade();

            if (allDataFromCSV.length == currentDataIndex) {
                showGrade();
            }

            //code to check the score and decide if the game is beaten or not
            if (totalCorrectAnswer == 10) {

                //code here to: 
                //1:hide the theme picuture 
                $('#themePicture').hide();

                // Get the modal
                var modal = document.getElementById('myModal');

                // Get the <span> element that closes the modal
                var span = document.getElementsByClassName("close")[0];

                modal.style.display = "block";//displays the modal

                //code to calculate the score based on the time taken to complete the riddle

                //hides the timer
                $('#counter').hide(); 

                var totalSeconds = counter;
                var totalMinutesTaken = totalSeconds / 60;
                totalMinutesTaken = Math.trunc(totalMinutesTaken);
                var totalSecondsTaken = counter % 60;

                var totalTimeTaken = time;

                var letterGrade = "A";

                if (totalMinutesTaken <= 10) {
                    letterGrade = "A";
                } else if (totalMinutesTaken == 11) {
                    letterGrade = "B";
                } else if (totalMinutesTaken == 12) {
                    letterGrade = "C";
                } else if (totalMinutesTaken == 13) {
                    letterGrade = "D";
                } else {
                    letterGrade = "F";
                }
                

                $('#finalScore').text("Your total time: " + totalMinutesTaken + " minutes and " + totalSecondsTaken + " seconds!");
       
                $('#finalLetterGrade').text("Letter Grade: " + letterGrade);
                
                //alert("The total time is now: " + totalMinutesTaken + "minutes and " + totalSecondsTaken + " seconds!");
                //code to calculate the score based on the time taken to complete the riddle


                // When the user clicks on <span> (x), close the modal
                span.onclick = function () {
                    $('#counter').show();//displays the timer
                    modal.style.display = "none";
                    //----------code to reset the game----------
                    //1:reset values: counter,totalQuestions,totalCorrectAnswer, time, allDataFromCSV, currentDataIndex
                    //2: hide the "Check Answer" button
                    //3:show the 'readyToPlayP' paragraph tag
                    //4: set the 'btnStartAndEnd' button to "Start Game""
                    //5: set the 'imageCounter' variable to 1

                    document.getElementById("readyToPlayP").style.visibility = "visible";//hides the p tag with the ready to paly message
                    document.getElementById("btnCheck").style.visibility = "hidden";//hides 'check answer' button
                    $('#gameDiv').hide();
                    startEndBtnText = $('#btnStartAndEnd').text('Start Game');//changes the texts of the "btnStartAndEnd" button
                    $("#themePicture").attr("src", "/Pictures/theme1.png");//resets the theme pictures

                    //code to manually clear the feilds for the 'Total Correct Answers' and 'Time Taken Since Last Correct Answer' since the updated changes won't show until the page refreshes
                    $('#tdTotalCorrectAnswers').text("");
                    $('#totalTimeTaken').text("");
                    //code to manually clear the feilds for the 'Total Correct Answers' and 'Time Taken Since Last Correct Answer' since the updated changes won't show until the page refreshes


                    allDataFromCSV = null; //clears the collection of "Data" objects
                    loadAllDataFromCSV();//sets the the 'allDataFromCSV' variable to a collection of "Data" objects
                    counter = 0;
                    totalQuestions = 0;
                    totalCorrectAnswer = 0;
                    time = '';//resets timer
                    allDataFromCSV = null;
                    currentDataIndex = 0;
                    imageCounter = 1;
                    //alert('inside 1' + '\n' + totalCorrectAnswer.toString());
                    //----------code to reset the game----------
                }

                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function (event) {
                    if (event.target == modal) {
                        $('#counter').show();//displays the timer
                        modal.style.display = "none";

                        //----------code to reset the game----------
                        //1:reset values: counter,totalQuestions,totalCorrectAnswer, time, allDataFromCSV, currentDataIndex
                        //2:
                        //3:show the 'readyToPlayP' paragraph tag
                        //4: set the 'btnStartAndEnd' button to "Start Game""
                        //5: set the 'imageCounter' variable to 1

                        document.getElementById("readyToPlayP").style.visibility = "visible";//hides the p tag with the ready to paly message
                        document.getElementById("btnCheck").style.visibility = "hidden";//hides 'check answer' button
                        $('#gameDiv').hide();
                        startEndBtnText = $('#btnStartAndEnd').text('Start Game');//changes the texts of the "btnStartAndEnd" button
                        $("#themePicture").attr("src", "/Pictures/theme1.png");//resets the theme pictures

                        //code to manually clear the feilds for the 'Total Correct Answers' and 'Time Taken Since Last Correct Answer' since the updated changes won't show until the page refreshes
                        $('#tdTotalCorrectAnswers').text("");
                        $('#totalTimeTaken').text("");
                        //code to manually clear the feilds for the 'Total Correct Answers' and 'Time Taken Since Last Correct Answer' since the updated changes won't show until the page refreshes

                        //allDataFromCSV = null; //clears the collection of "Data" objects
                        loadAllDataFromCSV();//sets the the 'allDataFromCSV' variable to a collection of "Data" objects
                        counter = 0;
                        totalQuestions = 0;
                        totalCorrectAnswer = 0;
                        time = '';//resets timer
                        allDataFromCSV = null;
                        currentDataIndex = 0;
                        imageCounter = 1;
                        //alert('inside 2' + '\n' + totalCorrectAnswer.toString());
                        //----------code to reset the game----------
                    }
                }


            }
        }
        else {
            alert('Your answer is incorrect! Please try again!');
        }
    });

    $(document).on('click', 'table tbody tr td span', function () {
        var firstTD = $(this).parentsUntil('tbody').find('td')[0];
        console.log(firstTD.innerHTML);
        $(this).parentsUntil('tbody').find('td')[0].innerHTML = shuffle(firstTD.innerHTML);
    });

    $('#txtFirstWord').on('change', function () {
        if (allDataFromCSV[currentDataIndex].JumbleWord1.Item1.toLocaleLowerCase() == $('#txtFirstWord').val().toLocaleLowerCase()) {
            $('#tdHint1').text('Hint : ' + shuffle(allDataFromCSV[currentDataIndex].JumbleWord1.Item2));
            $('#spnFirstWord').show();
            $('#txtFirstWord').attr('readonly', 'true');
        }
    });

    $('#txtSecondWord').on('change', function () {
        if (allDataFromCSV[currentDataIndex].JumbleWord2.Item1.toLocaleLowerCase() == $('#txtSecondWord').val().toLocaleLowerCase()) {
            $('#tdHint2').text('Hint : ' + shuffle(allDataFromCSV[currentDataIndex].JumbleWord2.Item2));
            $('#spnSecondWord').show();
            $('#txtSecondWord').attr('readonly', 'true');
        }
    });

    $('#txtThirdWord').on('change', function () {
        if (allDataFromCSV[currentDataIndex].JumbleWord3.Item1.toLocaleLowerCase() == $('#txtThirdWord').val().toLocaleLowerCase()) {
            $('#tdHint3').text('Hint : ' + shuffle(allDataFromCSV[currentDataIndex].JumbleWord3.Item2));
            $('#spnThirdWord').show();
            $('#txtThirdWord').attr('readonly', 'true');
        }
    });

    $('#txtFourthWord').on('change', function () {
        if (allDataFromCSV[currentDataIndex].JumbleWord4.Item1.toLocaleLowerCase() == $('#txtFourthWord').val().toLocaleLowerCase()) {
            $('#tdHint4').text('Hint : ' + shuffle(allDataFromCSV[currentDataIndex].JumbleWord4.Item2));
            $('#spnFourthWord').show();
            $('#txtFourthWord').attr('readonly', 'true');
        }
    });

    function loadAllDataFromCSV() {
        $.post("/Home/GetAllDataFromCsvFile", function (data) {
            allDataFromCSV = data;
            // console.log(allDataFromCSV[0]);
            totalQuestions = data.length;
        });
    }

    function showGrade() {
        $('#counter').show();
        var grade = (totalCorrectAnswer * 100) / allDataFromCSV.length;
        $('#grade').text(grade + "%");
    }



    function textBoxes() {
        var answer = allDataFromCSV[currentDataIndex].Answer;
        console.log(answer);
        var totalTextBoxes = answer.trim().split(' ').length;
        console.log(totalTextBoxes);
        var htmlString = '';
        for (var i = 0; i < totalTextBoxes; i++) {
            htmlString += '<input type = "text"/>&nbsp;&nbsp;&nbsp;'
        }
        $('#txtFinalAnswer').html(htmlString);
    }

    function shuffle(str) {
        a = [];

        for (var k = 0; k < str.length; k++) {
            a.push(str.charAt(k));
        }

        var j, x, i;

        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }

        var result = "";

        for (var l = 0; l < a.length; l++) {
            result += a[l];
        }

        return result;
    };
});