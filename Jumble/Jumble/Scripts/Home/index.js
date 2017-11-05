$(document).ready(function () {

    loadAllDataFromCSV();
    var counter = 0;
    var totalQuestions = 0;
    var totalCorrectAnswer = 0;
    var time = '';
    var allDataFromCSV = null;
    var currentDataIndex = 0;
    var startEndBtnText = 'Start Game7';
    var imageCounter = 1;



    $('#gameDiv').hide();

    $('#spnFirstWord').hide();
    $('#spnSecondWord').hide();
    $('#spnThirdWord').hide();
    $('#spnFourthWord').hide();

    $('#btnStartAndEnd').text(startEndBtnText);

    setInterval(function () {
        counter++;
        time = counter + " seconds";
        if (counter > 59) {
            var minutes = counter / 60;
            minutes = Math.trunc(minutes);
            var seconds = counter % 60;
            time = minutes + " minutes " + seconds + " seconds";
        }
        $('#counter').text(time);
        if (counter >= 1200) { // 20 minutes to complete the game
            showGrade();
        }
    }, 1000);

    $('#btnStartAndEnd').on('click', function () {
        //shows the theme image
        $('#themePicture').show();
        //shows the theme image


        counter = 0;
        $('#counter').show();
        $('#tdTotalQuestions').text(totalQuestions);
        $('#grade').text('');

        var btnText = $('#btnStartAndEnd').text();

        if (btnText == startEndBtnText) {

            alert('solve all riddles within 20 minutes');

            document.getElementById("readyToPlayP").style.visibility = "hidden";//hides the p tag with the ready to paly message
            document.getElementById("btnCheck").style.visibility = "visible";//shows 'check answer' button

            var btnText = $('#btnStartAndEnd').text('Give Up');//changes the texts

            $('#gameDiv').show();

            $('.clsAnswer').val('');
            $('#txtFinalAnswer').val('');

            $('#tdRiddle').text(allDataFromCSV[currentDataIndex].Riddle);
            $('#tdJumbleWord1').text(shuffle(allDataFromCSV[currentDataIndex].JumbleWord1.Item1));
            $('#tdJumbleWord2').text(shuffle(allDataFromCSV[currentDataIndex].JumbleWord2.Item1));
            $('#tdJumbleWord3').text(shuffle(allDataFromCSV[currentDataIndex].JumbleWord3.Item1));
            $('#tdJumbleWord4').text(shuffle(allDataFromCSV[currentDataIndex].JumbleWord4.Item1));
        }
        else {//this will fire every time except the first time around
            document.getElementById("readyToPlayP").style.visibility = "visible";//shows the p tag with the ready to paly message
            document.getElementById("btnCheck").style.visibility = "hidden";//hides 'check answer' button

            // $('#gameDiv').hide();
            var btnText = $('#btnStartAndEnd').text(startEndBtnText);
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

        }

    });

    $('#btnCheck').on('click', function () {

        var firstAnswer = $('#txtFirstWord').val();
        var secondAnswer = $('#txtSecondWord').val();
        var thirdAnswer = $('#txtThirdWord').val();
        var fourthAnswer = $('#txtFourthWord').val();
        //if (firstAnswer == '' || secondAnswer == '' || thirdAnswer == '' || fourthAnswer == '') {
        //    alert('please solve all the riddles first.');
        //    return false;
        //}
        //if ($('#txtFinalAnswer').val().toLocaleLowerCase().trim() == allDataFromCSV[currentDataIndex].Answer.toLocaleLowerCase()) {
        //alert('Congratulation ! Your answer is correct.');

        if (true) {

            totalCorrectAnswer++;
            currentDataIndex++;

            //transition to next pic
            imageCounter = imageCounter + 1;
            alert('The image counter:' + imageCounter);
            //transition to next pic

            if (imageCounter == 2) {
                $("#themePicture").attr("src", "https://www.churchmotiongraphics.com/wp-content/uploads/2016/06/Under-The-Sea.jpg");
                $("#themePicture").css({ 'width': '', 'height': '325px' });
            } else if (imageCounter == 3) {
                $("#themePicture").attr("src", "https://wallpaperscraft.com/image/grass_sky_girl_dress_umbrella_69990_1920x1080.jpg");
                $("#themePicture").css({ 'width': '', 'height': '325px' });
            } else if (imageCounter == 4) {
                $("#themePicture").attr("src", "https://i.ytimg.com/vi/1SehP6S8JoQ/maxresdefault.jpg");
                $("#themePicture").css({ 'width': '', 'height': '325px' });
            } else if (imageCounter == 5) {
                $("#themePicture").attr("src", "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/VGQYpqS9gikig2l31/videoblocks-a-stack-of-papers-is-stapled-with-a-stapler_hu4sk9bol_thumbnail-full01.png");
                $("#themePicture").css({ 'width': '', 'height': '325px' });
            } else if (imageCounter == 6) {
                $("#themePicture").attr("src", "https://wallpaperscraft.com/image/statue_stone_storage_63300_1920x1080.jpg");
                $("#themePicture").css({ 'width': '', 'height': '325px' });
            } else if (imageCounter == 7) {
                $("#themePicture").attr("src", "https://www.quietrev.com/wp-content/uploads/2015/12/5-Ways-to-Make-Small-Talk-More-Meaningful_SOURCE_stocksy.jpg");
                $("#themePicture").css({ 'width': '', 'height': '325px' });
            } else if (imageCounter == 8) {
                $("#themePicture").attr("src", "https://wallpaperscraft.com/image/mushroom_grass_plant_nature_83167_1920x1080.jpg");
                $("#themePicture").css({ 'width': '', 'height': '325px' });
            } else if (imageCounter == 9) {
                $("#themePicture").attr("src", "https://wallpaperscraft.com/image/keyboard_laptop_macro_73432_1920x1080.jpg");
                $("#themePicture").css({ 'width': '', 'height': '325px' });
            } else if (imageCounter == 10) {
                $("#themePicture").attr("src", "http://stanfordservicesnv.com/wp-content/themes/ga5/images/sliders/02.jpg");
                $("#themePicture").css({ 'width': '', 'height': '325px' });
            } else if (imageCounter == 11) {
                $("#themePicture").attr("src", "http://www.hdwallpaperup.com/wp-content/uploads/2014/12/winner-1920x1080.jpg");
                $("#themePicture").css({ 'width': '', 'height': '325px' });
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
            $('#txtFinalAnswer').val('');

            //$('.clsAnswer').prop('readonly', 'false');
            $('.clsAnswer').removeAttr('readonly');

            $('.clsHint').text('');

            $('#tdTotalCorrectAnswers').text(totalCorrectAnswer);

            $('#totalTimeTaken').text(time);
            showGrade();

            if (allDataFromCSV.length == currentDataIndex) {
                showGrade();
            }

            //code to check the score and decide if the game was beaten or not
            if (totalCorrectAnswer == 3) {
                alert("You've Beaten This Game!")
                loadAllDataFromCSV();

                var counter = 0;
                var totalQuestions = 0;
                var totalCorrectAnswer = 0;
                var time = '';
                var allDataFromCSV = null;
                var currentDataIndex = 0;

                document.getElementById("readyToPlayP").style.visibility = "visible";//hides the p tag with the ready to paly message
                var btnText = $('#btnStartAndEnd').text('Start Game7');//changes the texts

                totalCorrectAnswer = 0;
                $('#gameDiv').show();
                $('.clsAnswer').val('');
                $('#txtFinalAnswer').val('');
                $('#tdRiddle').text(allDataFromCSV[currentDataIndex].Riddle);
                $('#tdJumbleWord1').text(shuffle(allDataFromCSV[currentDataIndex].JumbleWord1.Item1));
                $('#tdJumbleWord2').text(shuffle(allDataFromCSV[currentDataIndex].JumbleWord2.Item1));
                $('#tdJumbleWord3').text(shuffle(allDataFromCSV[currentDataIndex].JumbleWord3.Item1));
                $('#tdJumbleWord4').text(shuffle(allDataFromCSV[currentDataIndex].JumbleWord4.Item1));
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
            $('#tdHint1').text('Hint : ' + allDataFromCSV[currentDataIndex].JumbleWord1.Item2);
            $('#spnFirstWord').show();
            $('#txtFirstWord').attr('readonly', 'true');
        }
    });
    $('#txtSecondWord').on('change', function () {
        if (allDataFromCSV[currentDataIndex].JumbleWord2.Item1.toLocaleLowerCase() == $('#txtSecondWord').val().toLocaleLowerCase()) {
            $('#tdHint2').text('Hint : ' + allDataFromCSV[currentDataIndex].JumbleWord2.Item2);
            $('#spnSecondWord').show();
            $('#txtSecondWord').attr('readonly', 'true');
        }
    });
    $('#txtThirdWord').on('change', function () {
        if (allDataFromCSV[currentDataIndex].JumbleWord3.Item1.toLocaleLowerCase() == $('#txtThirdWord').val().toLocaleLowerCase()) {
            $('#tdHint3').text('Hint : ' + allDataFromCSV[currentDataIndex].JumbleWord3.Item2);
            $('#spnThirdWord').show();
            $('#txtThirdWord').attr('readonly', 'true');
        }
    });
    $('#txtFourthWord').on('change', function () {
        if (allDataFromCSV[currentDataIndex].JumbleWord4.Item1.toLocaleLowerCase() == $('#txtFourthWord').val().toLocaleLowerCase()) {
            $('#tdHint4').text('Hint : ' + allDataFromCSV[currentDataIndex].JumbleWord4.Item2);
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
        //$('#counter').hide();//old
        $('#counter').show();//new
        var grade = (totalCorrectAnswer * 100) / allDataFromCSV.length;
        $('#grade').text(grade + "%");

        // logic to display grade
        //...........................
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