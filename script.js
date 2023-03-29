/*
Jason Sebastian Tjoang (00000055443)
*/
        var belajarpct = 0;
        var prcntbljr = 0;
        var counterBelajarfail = 0;
        var pctmakan;
        var pcttidur;
        var pctmain;
        var hour = 6;
        var minutes = 0;
        var name;
        var gender;
        var sem = 1;
        var intervalctrl;
        var dayinterval;
        var intervalbljr;
        var intervalgagal;
        var clockinterval;
        var daygreetinterval;
        var countermalas;
        var day=1;
        var namectrl;
        var harimalas=0;
        var hitungtidur=0;
        var tidurtimeinterval;
        var hitungbelajar=0;
        var hitungmain=0;
        var tidurboundary=0;
        var alertmakan = 0;
        var alertmain = 0;
        var alerttidur = 0;
        var alertbelajar = 0;
        var characterchoice;
        var characterchoicecheck=1;
        var cekmalasinterval;

        $("#gameinterface").removeClass("d-flex").addClass("d-none").hide();
        $("#gameend").hide();

        function after(){
            characterchoicecheck++;
            if(characterchoicecheck<=3){
                $('#avatarchoicemenu').empty();
                $('#avatarchoicemenu').append('<img src="asset/avatar' + characterchoicecheck + '.gif" class="avatar" alt="avatar1" width="300px" height="400px" />'); 
            }
            else{
                characterchoicecheck=1;
                $('#avatarchoicemenu').empty();
                $('#avatarchoicemenu').append('<img src="asset/avatar' + characterchoicecheck + '.gif" class="avatar" alt="avatar1" width="300px" height="400px" />'); 
            }
        }

        function before(){
            characterchoicecheck--;
            if(characterchoicecheck>=1){
                $('#avatarchoicemenu').empty();
                $('#avatarchoicemenu').append('<img src="asset/avatar' + characterchoicecheck + '.gif" class="avatar" alt="avatar1" width="300px" height="400px" />'); 
            }
            else{
                characterchoicecheck=3;
                $('#avatarchoicemenu').empty();
                $('#avatarchoicemenu').append('<img src="asset/avatar' + characterchoicecheck + '.gif" class="avatar" alt="avatar1" width="300px" height="400px" />'); 
            }
        }
        
        $('#playbutton').click(function() {
            $('#gamename').empty();
            name = $("#boxnama").val();
            $('#avatardiv').empty();
            $('#avatardiv').append('<img src="asset/avatar' + characterchoicecheck + '.gif" class="avatar" alt="avatar1" width="300px" height="400px" />'); 
            if(name==0){
                alert("Please Input Name");
                return;
            }
            else if($('#genderbox').val()==0){
                alert("Please Input Gender");
                return;
            }
            else{
                namectrl= $('#genderbox').val();
                $("#mainmenu").hide(2500);
                $("#gameinterface").removeClass("d-none").addClass("d-flex").hide().show();
                if($('#genderbox').val()==1){
                    $('#gamename').append('<h2>Good Morning Mr. ' + name + '</h2>'); 
                }
                else if($('#genderbox').val()==2){
                    $('#gamename').append('<h2>Good Morning Miss. ' + name + '</h2>'); 
                }
                else if($('#genderbox').val()==3){
                    $('#gamename').append('<h2>Good Morning ' + name + '</h2>'); 
                }  
                intervalctrl = setInterval(minus, 60000); //Minus kalau idle setiap 1 jam game time
                intervalgagal = setInterval(cekgagal, 1); //Cek kalau kriteria gagal sudah terpenuhi secara konstan
                clockinterval = setInterval(clockfunc, 1000); //Clock (1detik=1menit)
                dayinterval = setInterval(dayfunc, 1); //Cek day constant
                daygreetinterval = setInterval(daygreet,1); //Cek greeting konstan
                countermalas = setInterval(malas, 720000); // 1 hari ga belajar
                tidurtimeinterval = setInterval(tidurtime, 9600); // BISA BANGUN SELAMA 16 JAM SELAMA IDLE
                cekmalasinterval = setInterval(cekmalas, 1); //Cek apakah belajar tidak terpenuhi
            }
        });

        function restartpg(){ //Restart page saat selesai
            window.location.reload();
        }

        function clockfunc(){
            $('#gameday').empty();
            $('#gameday').append('<h2>' + "Day" + " " + day + '</h2>');
            if(minutes<60){
                minutes+=1;
                if(minutes<10 && hour<10){
                    $('#gameclock').empty();
                    $('#gameclock').append('<h2>' + "0" + hour + " " + ":" + " " + "0" + minutes + '</h2>'); 
                }
                else if(minutes>=10 && hour<10){
                    $('#gameclock').empty();
                    $('#gameclock').append('<h2>' + "0" + hour + " " + ":" + " " + minutes + '</h2>'); 
                }
                else if(minutes<10 && hour>=10){
                    $('#gameclock').empty();
                    $('#gameclock').append('<h2>' + hour + " " + ":" + " " + "0" + minutes + '</h2>'); 
                }
                else if(minutes>=10 && hour>=10){
                    $('#gameclock').empty();
                    $('#gameclock').append('<h2>' + hour + " " + ":" + " " + minutes + '</h2>'); 
                }
            }
            else if(minutes>=60){
                minutes=0;
                hour+=1;
                if(hour>=1 && hour<10){
                    $('#gameclock').empty();
                    $('#gameclock').append('<h2>' + "0" + hour + " " + ":" + " " + "0" + minutes + '</h2>'); 
                }
                else if(hour>=10 && hour<24){
                    $('#gameclock').empty();
                    $('#gameclock').append('<h2>' + hour + " " + ":" + " " + "0" + minutes + '</h2>'); 
                }
                else if(hour>=24){
                    hour=0;
                    minutes=0;
                    $('#gameclock').empty();
                    $('#gameclock').append('<h2>' + "0"  + hour + " " + ":" + " " + "0" + minutes + '</h2>');
                    addday();
                }
            }
        }

        function addday(){
            day++;
            $('#gameday').empty();
            $('#gameday').append('<h2>' + "Day" + " " + day + '</h2>');
        }

        function daygreet(){
            if(hour>=6 && hour<12){
                $('#gamename').empty(); 
                $('#gamename').css('color', 'black');
                $('#gameday').css('color', 'black');
                $('#gameclock').css('color', 'black');
                $('#midtext').css('color', 'black');
                if(namectrl==1){
                    $('#gamename').append('<h2>Good Morning Mr. ' + name + '</h2>');
                }
                else if(namectrl==2){
                    $('#gamename').append('<h2>Good Morning Miss. ' + name + '</h2>');
                }
                else if(namectrl==3){
                    $('#gamename').append('<h2>Good Morning ' + name + '</h2>');
                }  
            }
            else if(hour>=12 && hour<16){
                $('#gamename').empty();
                if(namectrl==1){
                    $('#gamename').append('<h2>Good Afternoon Mr. ' + name + '</h2>'); 
                }
                else if(namectrl==2){
                    $('#gamename').append('<h2>Good Afternoon Miss. ' + name + '</h2>'); 
                }
                else if(namectrl==3){
                    $('#gamename').append('<h2>Good Afternoon ' + name + '</h2>'); 
                }  
            }
            else if(hour>=16 && hour<19){
                $('#gamename').empty();
                if(namectrl==1){
                    $('#gamename').append('<h2>Good Evening Mr. ' + name + '</h2>'); 
                }
                else if(namectrl==2){
                    $('#gamename').append('<h2>Good Evening Miss. ' + name + '</h2>'); 
                }
                else if(namectrl==3){
                    $('#gamename').append('<h2>Good Evening ' + name + '</h2>'); 
                }  
            }
            else if((hour>=19 && hour<=23) || (hour>=0 && hour<6)){
                $('#gamename').empty();
                $('#gamename').css('color', 'white');
                $('#gameday').css('color', 'white');
                $('#gameclock').css('color', 'white');
                $('#midtext').css('color', 'white');
                if(namectrl==1){
                    $('#gamename').append('<h2>Good Night Mr. ' + name + '</h2>'); 
                }
                else if(namectrl==2){
                    $('#gamename').append('<h2>Good Night Miss. ' + name + '</h2>'); 
                }
                else if(namectrl==3){
                    $('#gamename').append('<h2>Good Night ' + name + '</h2>'); 
                }  
            }
        }

        function dayfunc(){
            if(hour>=6 && hour<12){
                document.body.style.backgroundImage = "url('asset/day.jpg')";
            }
            else if(hour>=12 && hour<16){
                document.body.style.backgroundImage = "url('asset/afternoon.jpg')";
            }
            else if(hour>=16 && hour<19){
                document.body.style.backgroundImage = "url('asset/evening.jpg')";
            }
            else if(hour>=19 && hour<=23){
                document.body.style.backgroundImage = "url('asset/night.jpg')";
            }
            else if(hour>=0 && hour<=5){
                document.body.style.backgroundImage = "url('asset/night.jpg')";
            }
        }

        function malas(){
            hitungmain = 0;
            hitungtidur = 0;
            harimalas++;
        }

        function cekmalas(){
            if(harimalas>=2){
                harimalas=0;
                hitungmain=0;
                hitungtidur=0;
                counterBelajarfail++;
                belajarCount();
            }
        }

        function cekgagal(){
            if(pctmain<=10 && alertmain==0){
                alert("Karakter Sudah Stres");
                alertmain++;
            }
            else if(pctmain>10 && alertmain!=0){
                alertmain--;
            }
            
            if(pctmakan<=10 && alertmakan==0){
                alert("Karakter Sudah Lapar");
                alertmakan++;
            }
            else if(pctmakan>10 && alertmakan!=0){
                alertmakan--;
            }
            
            if(pcttidur<=10 && alerttidur==0){
                alert("Karakter Mengantuk");
                alerttidur++;
            }
            else if(pcttidur>10 && alerttidur!=0){
                alerttidur--;
            }

            if(pctmain<=0){
                if(day==1){
                    $('#midtext').css('color', 'yellow');
                    $('#gameend').css('color', 'yellow');
                    clearInterval(intervalgagal);
                    clearInterval(intervalctrl);
                    clearInterval(intervalbljr);
                    clearInterval(clockinterval);
                    clearInterval(dayinterval);
                    clearInterval(daygreetinterval);
                    clearInterval(countermalas);
                    clearInterval(tidurtimeinterval);
                    $("#gameinterface").removeClass("d-flex").addClass("d-none").hide();
                    $("#gameend").show();
                    $("#survivaltime").append(document.createTextNode("You have survived for " + day + " Day"));
                    $("#overtype").append(document.createTextNode("How Did You Even Die on Day 1?"));
                }
                else{
                    $('#midtext').css('color', 'yellow');
                    $('#gameend').css('color', 'yellow');
                    clearInterval(intervalgagal);
                    clearInterval(intervalctrl);
                    clearInterval(intervalbljr);
                    clearInterval(clockinterval);
                    clearInterval(dayinterval);
                    clearInterval(daygreetinterval);
                    clearInterval(countermalas);
                    clearInterval(tidurtimeinterval);
                    $("#gameinterface").removeClass("d-flex").addClass("d-none").hide();
                    $("#gameend").show();
                    $("#survivaltime").append(document.createTextNode("You have survived for " + day + " Days"));
                    $("#overtype").append(document.createTextNode("Play Some Call Of Duty Bro!"));
                }
            }
            
            else if(pctmakan<=0){
                if(day==1){
                    $('#midtext').css('color', 'yellow');
                    $('#gameend').css('color', 'yellow');
                    clearInterval(intervalgagal);
                    clearInterval(intervalctrl);
                    clearInterval(intervalbljr);
                    clearInterval(clockinterval);
                    clearInterval(dayinterval);
                    clearInterval(daygreetinterval);
                    clearInterval(countermalas);
                    clearInterval(tidurtimeinterval);
                    $("#gameinterface").removeClass("d-flex").addClass("d-none").hide();
                    $("#gameend").show();
                    $("#survivaltime").append(document.createTextNode("You have survived for " + day + " Day"));
                    $("#overtype").append(document.createTextNode("How Did You Even Die on Day 1?"));
                }
                else{
                    $('#midtext').css('color', 'yellow');
                    $('#gameend').css('color', 'yellow');
                    clearInterval(intervalgagal);
                    clearInterval(intervalctrl);
                    clearInterval(intervalbljr);
                    clearInterval(clockinterval);
                    clearInterval(dayinterval);
                    clearInterval(daygreetinterval);
                    clearInterval(countermalas);
                    clearInterval(tidurtimeinterval);
                    $("#gameinterface").removeClass("d-flex").addClass("d-none").hide();
                    $("#gameend").show();
                    $("#survivaltime").append(document.createTextNode("You have survived for " + day + " Days"));
                    $("#overtype").append(document.createTextNode("You Ain't Gonna Eat With a Body That Size?"));
                }
            }
            
            else if(pcttidur<=0){
                if(day==1){
                    $('#midtext').css('color', 'yellow');
                    $('#gameend').css('color', 'yellow');
                    clearInterval(intervalgagal);
                    clearInterval(intervalctrl);
                    clearInterval(intervalbljr);
                    clearInterval(clockinterval);
                    clearInterval(dayinterval);
                    clearInterval(daygreetinterval);
                    clearInterval(countermalas);
                    clearInterval(tidurtimeinterval);
                    $("#gameinterface").removeClass("d-flex").addClass("d-none").hide();
                    $("#gameend").show();
                    $("#survivaltime").append(document.createTextNode("You have survived for " + day + " Day"));
                    $("#overtype").append(document.createTextNode("How Did You Even Die on Day 1?"));
                }
                else{
                    $('#midtext').css('color', 'yellow');
                    $('#gameend').css('color', 'yellow');
                    clearInterval(intervalgagal);
                    clearInterval(intervalctrl);
                    clearInterval(intervalbljr);
                    clearInterval(clockinterval);
                    clearInterval(dayinterval);
                    clearInterval(daygreetinterval);
                    clearInterval(countermalas);
                    clearInterval(tidurtimeinterval);
                    $("#gameinterface").removeClass("d-flex").addClass("d-none").hide();
                    $("#gameend").show();
                    $("#survivaltime").append(document.createTextNode("You have survived for " + day + " Days"));
                    $("#overtype").append(document.createTextNode("You Think Sleep Is Unnecessary Huh?"));
                }
            }
            
            else if(counterBelajarfail>3){
                if(day==1){
                    $('#midtext').css('color', 'yellow');
                    $('#gameend').css('color', 'yellow');
                    clearInterval(intervalgagal);
                    clearInterval(intervalctrl);
                    clearInterval(intervalbljr);
                    clearInterval(clockinterval);
                    clearInterval(dayinterval);
                    clearInterval(daygreetinterval);
                    clearInterval(countermalas);
                    clearInterval(tidurtimeinterval);
                    $("#gameinterface").removeClass("d-flex").addClass("d-none").hide();
                    $("#gameend").show();
                    $("#survivaltime").append(document.createTextNode("You have survived for " + day + " Day"));
                    $("#overtype").append(document.createTextNode("How Did You Even Die on Day 1?"));
                }
                else{
                    $('#midtext').css('color', 'yellow');
                    $('#gameend').css('color', 'yellow');
                    clearInterval(intervalgagal);
                    clearInterval(intervalctrl);
                    clearInterval(intervalbljr);
                    clearInterval(clockinterval);
                    clearInterval(dayinterval);
                    clearInterval(daygreetinterval);
                    clearInterval(countermalas);
                    clearInterval(tidurtimeinterval);
                    $("#gameinterface").removeClass("d-flex").addClass("d-none").hide();
                    $("#gameend").show();
                    $("#survivaltime").append(document.createTextNode("You have survived for " + day + " Days"));
                    $("#overtype").append(document.createTextNode("Laziness Brings You Nowhere, Keep That In Mind!"));
                }
            }
        }

        function belajarCount(){
            if(counterBelajarfail==1){
                alert("Kamu telah dimarahi dosen karena tidak mengerjakan tugas");
            }
            if(counterBelajarfail==2){
                alert("Kamu telah mendapatkan nilai 0 pada UTS");
            }
            if(counterBelajarfail==3){
                alert("Kamu telah ditegur oleh rektor dan diancam untuk DO.\nSekali lagi kamu tidak belajar, kamu akan DO!");
            }
        }

        // function belajarCount(){
        //     var width = $("#barbelajar").width();
        //     var parentWidth = $("#divbelajar").width();
        //     var percent = Math.round(100 * width / parentWidth);
        //     if(belajarpct==percent){
        //         counterBelajarfail++;
        //         if(counterBelajarfail==1){
        //             alert("Kamu telah dimarahi dosen karena tidak mengerjakan tugas");
        //         }
        //         if(counterBelajarfail==2){
        //             alert("Kamu telah mendapatkan nilai 0 pada UTS");
        //         }
        //         if(counterBelajarfail==3){
        //             alert("Kamu telah ditegur oleh rektor dan diancam untuk DO.\nSekali lagi kamu tidak belajar, kamu akan DO!");
        //         }
        //     }
        //     else{
        //         belajarpct=percent;
        //     }
        // }

        function tambahmakan(){
            clearInterval(intervalctrl);
            clearInterval(clockinterval);
            clearInterval(countermalas);
            clearInterval(tidurtimeinterval);
            var width = $("#barmakan").width();
            var parentWidth = $("#divmakan").width();
            pctmakan = Math.round(100 * width / parentWidth);
            var check = Number(pctmakan + 5);
            if(check<=100){
                pctmakan= Number(pctmakan + 5);
                $("#barmakan").css("width", pctmakan + "%");
            }
            else{
                var sisa=100-pctmakan;
                pctmakan=pctmakan+sisa;
                $("#barmakan").css("width", pctmakan + "%");
            }
            var check = minutes+30;
            if((check)>=60 && hour<23){
                minutes = minutes + 30 - 60;
                hour+=1;
            }
            else if((check)>=60 && hour>=23){
                minutes = minutes + 30 - 60;
                hour=0;
                addday();
            }
            else{
                minutes = minutes + 30;
            }
            hitungmain++;
            hitungtidur = hitungtidur + 0.06;
            if(hitungtidur>=3 || hitungmain>=48){
                harimalas++;
            }
            $("#barmakan").empty();
            $("#barmakan").append(document.createTextNode(pctmakan+"%"));
            $('#avatardiv').empty();
            $('#avatardiv').append('<img src="asset/avatar' + characterchoicecheck + 'eat.gif" class="avatar" alt="avatar1" width="300px" height="400px" />'); 
            setInterval(function(){
                $('#avatardiv').empty();
                $('#avatardiv').append('<img src="asset/avatar' + characterchoicecheck + '.gif" class="avatar" alt="avatar1" width="300px" height="400px" />');  
            }, 5000)      
            minusmakan();     
        }

        function tambahtidur(){
            clearInterval(intervalctrl);
            clearInterval(clockinterval);
            clearInterval(countermalas);
            clearInterval(tidurtimeinterval);
            pcttidur = 100;
            $("#bartidur").css("width", pcttidur + "%");
            $("#bartidur").empty();
            $("#bartidur").append(document.createTextNode(pcttidur+"%"));
            if(hour>=16 && hour<24){
                hour = hour + 8 - 24;
                hitungtidur++;
                addday();
            }
            else{
                hour += 8;
                hitungtidur++;
            }
            hitungmain = hitungmain + 16;
            if(hitungtidur>=3 || hitungmain>=48){
                malas();
            }
            $('#avatardiv').empty();
            $('#avatardiv').append('<img src="asset/avatar' + characterchoicecheck + 'sleep.gif" class="avatar" alt="avatar1" width="300px" height="400px" />'); 
            setInterval(function(){
                $('#avatardiv').empty();
                $('#avatardiv').append('<img src="asset/avatar' + characterchoicecheck + '.gif" class="avatar" alt="avatar1" width="300px" height="400px" />');  
            }, 5000)   
            minustidur();
        }

        function tambahmain(){
            clearInterval(intervalctrl);
            clearInterval(clockinterval);
            clearInterval(countermalas);
            clearInterval(tidurtimeinterval);
            var width = $("#barmain").width();
            var parentWidth = $("#divmain").width();
            pctmain = Math.round(100 * width / parentWidth);
            var check = Number(pctmain + 5);
            if(check<=100){
                pctmain= Number(pctmain + 5);
                $("#barmain").css("width", pctmain + "%");
            }
            else{
                var sisa=100-pctmain;
                pctmain=pctmain+sisa;
                $("#barmain").css("width", pctmain + "%");
            }
            var check = minutes+30;
            if((check)>=60 && hour<23){
                minutes = minutes + 30 - 60;
                hour+=1;
            }
            else if((check)>=60 && hour>=23){
                minutes = minutes + 30 - 60;
                hour=0;
                addday();
            }
            else{
                minutes = minutes + 30;
            }
            hitungmain++;
            hitungtidur = hitungtidur + 0.06;
            if(hitungtidur>=3 || hitungmain>=48){
                malas();
            }
            $('#avatardiv').empty();
            $('#avatardiv').append('<img src="asset/avatar' + characterchoicecheck + 'play.gif" class="avatar" alt="avatar1" width="300px" height="400px" />'); 
            setInterval(function(){
                $('#avatardiv').empty();
                $('#avatardiv').append('<img src="asset/avatar' + characterchoicecheck + '.gif" class="avatar" alt="avatar1" width="300px" height="400px" />');  
            }, 5000)   
            $("#barmain").empty();
            $("#barmain").append(document.createTextNode(pctmain+"%"));
            minusmain();
        }

        function tambahbelajar(){
            clearInterval(intervalctrl);
            clearInterval(clockinterval);          
            clearInterval(tidurtimeinterval);
            clearInterval(countermalas);
            var width = $("#barbelajar").width();
            var parentWidth = $("#divbelajar").width();
            prcntbljr = Math.round(100 * width / parentWidth);
            var check = Number(prcntbljr + 4);
            if(check<100){
                prcntbljr= Number(prcntbljr + 4);
                $("#barbelajar").css("width",prcntbljr + "%");
            }
            else{
                naiksemester();
            }
            var check = minutes+30;
            if((check)>=60 && hour<23){
                minutes = minutes + 30 - 60;
                hour+=1;
            }
            else if((check)>=60 && hour>=23){
                minutes = minutes + 30 - 60;
                hour=0;
                addday();
            }
            else{
                minutes = minutes + 30;
            }
            $("#barbelajar").empty();
            $("#barbelajar").append(document.createTextNode(prcntbljr+"%"));
            clearInterval(countermalas);
            $('#avatardiv').empty();
            $('#avatardiv').append('<img src="asset/avatar' + characterchoicecheck + 'study.gif" class="avatar" alt="avatar1" width="300px" height="400px" />'); 
            setInterval(function(){
                $('#avatardiv').empty();
                $('#avatardiv').append('<img src="asset/avatar' + characterchoicecheck + '.gif" class="avatar" alt="avatar1" width="300px" height="400px" />');  
            }, 5000)   
            minusbelajar();
        }


        function minusmakan(){
            var widthmain  = $("#barmain").width();
            var parentWidth = $("#divmakan").width();

            pctmain = Math.round(100 * widthmain / parentWidth);
           
            pctmain = Number(pctmain-2);
           
            $("#barmain").css("width", pctmain + "%"); 
            $("#barmain").empty();
            $("#barmain").append(document.createTextNode(pctmain+"%"));

            var widthtidur = $("#bartidur").width();

            pcttidur = Math.round(100 * widthtidur / parentWidth); 

            pcttidur = Number(pcttidur-3);
            tidurboundary++;
                        
            $("#bartidur").css("width", pcttidur + "%");
            $("#bartidur").empty();
            $("#bartidur").append(document.createTextNode(pcttidur+"%"));
            intervalctrl = setInterval(minus, 60000);
            clockinterval = setInterval(clockfunc, 1000);           
            tidurtimeinterval = setInterval(tidurtime, 9600);
            countermalas = setInterval(malas, 1440000); 
        }

        function minusbelajar(){
            var widthmakan = $("#barmakan").width();
            var widthmain  = $("#barmain").width(); 
            var parentWidth = $("#divmakan").width();
            
            pctmakan = Math.round(100 * widthmakan / parentWidth); 
            pctmain = Math.round(100 * widthmain / parentWidth);

            pctmain = Number(pctmain-2);
            pctmakan = Number(pctmakan-2);
            
            var widthtidur = $("#bartidur").width();

            pcttidur = Math.round(100 * widthtidur / parentWidth); 

            pcttidur = Number(pcttidur-3);
            tidurboundary++;

            $("#barmain").css("width", pctmain + "%"); 
            $("#barmain").empty();
            $("#barmain").append(document.createTextNode(pctmain+"%"));

            $("#barmakan").css("width", pctmakan + "%");
            $("#barmakan").empty();
            $("#barmakan").append(document.createTextNode(pctmakan+"%"));
                        
            $("#bartidur").css("width", pcttidur + "%");
            $("#bartidur").empty();
            $("#bartidur").append(document.createTextNode(pcttidur+"%"));
            intervalctrl = setInterval(minus, 60000);
            clockinterval = setInterval(clockfunc, 1000);
            countermalas = setInterval(malas, 1440000);
            tidurtimeinterval = setInterval(tidurtime, 9600);
            harimalas=0;
            hitungmain=0;
            hitungtidur=0;
        }

        function minustidur(){
            var widthmakan = $("#barmakan").width();
            var widthmain  = $("#barmain").width();
            var parentWidth = $("#divmakan").width();
            
            pctmakan = Math.round(100 * widthmakan / parentWidth); 
            pctmain = Math.round(100 * widthmain / parentWidth);

            pctmain = Number(pctmain-16);
            pctmakan = Number(pctmakan-16);

            $("#barmain").css("width", pctmain + "%"); 
            $("#barmain").empty();
            $("#barmain").append(document.createTextNode(pctmain+"%"));

            $("#barmakan").css("width", pctmakan + "%");
            $("#barmakan").empty();
            $("#barmakan").append(document.createTextNode(pctmakan+"%"));
            intervalctrl = setInterval(minus, 60000);
            clockinterval = setInterval(clockfunc, 1000);            
            tidurtimeinterval = setInterval(tidurtime, 9600);
            countermalas = setInterval(malas, 1440000); 
        }

        function minusmain(){
            var widthmakan = $("#barmakan").width(); 
            var parentWidth = $("#divmakan").width();

            pctmakan = Math.round(100 * widthmakan / parentWidth); 

            pctmakan = Number(pctmakan-2);

            $("#barmakan").css("width", pctmakan + "%");
            $("#barmakan").empty();
            $("#barmakan").append(document.createTextNode(pctmakan+"%"));

            var widthtidur = $("#bartidur").width();

            pcttidur = Math.round(100 * widthtidur / parentWidth); 

            pcttidur = Number(pcttidur-3);
            tidurboundary++;
                        
            $("#bartidur").css("width", pcttidur + "%");
            $("#bartidur").empty();
            $("#bartidur").append(document.createTextNode(pcttidur+"%"));
            intervalctrl = setInterval(minus, 60000);
            clockinterval = setInterval(clockfunc, 1000);
            tidurtimeinterval = setInterval(tidurtime, 9600);
            countermalas = setInterval(malas, 1440000); 
        }

        function tidurtime(){
            if(tidurboundary!=0){
                tidurboundary=0;
            }
            else{
                var widthtidur = $("#bartidur").width();
                var parentWidth = $("#divmakan").width();

                pcttidur = Math.round(100 * widthtidur / parentWidth); 

                pcttidur = Number(pcttidur-1);
                            
                $("#bartidur").css("width", pcttidur + "%");
                $("#bartidur").empty();
                $("#bartidur").append(document.createTextNode(pcttidur+"%"));
            }
        }

        function minus(){
            var widthmakan = $("#barmakan").width();
            var widthmain  = $("#barmain").width();
            var parentWidth = $("#divmakan").width();

            pctmakan = Math.round(100 * widthmakan / parentWidth); 
            pctmain = Math.round(100 * widthmain / parentWidth);
            
            pctmain = Number(pctmain-2);
            pctmakan = Number(pctmakan-2);

            $("#barmain").css("width", pctmain + "%"); 
            $("#barmain").empty();
            $("#barmain").append(document.createTextNode(pctmain+"%"));
            
            $("#barmakan").css("width", pctmakan + "%");
            $("#barmakan").empty();
            $("#barmakan").append(document.createTextNode(pctmakan+"%"));
        }
        
        function naiksemester(){
            sem++;
            if(sem>=9){
                $('#midtext').css('color', 'yellow');
                $('#gameend').css('color', 'yellow');
                clearInterval(intervalgagal);
                clearInterval(intervalctrl);
                clearInterval(intervalbljr);
                clearInterval(clockinterval);
                clearInterval(dayinterval);
                clearInterval(daygreetinterval);
                clearInterval(countermalas);
                clearInterval(tidurtimeinterval);
                $("#gameinterface").removeClass("d-flex").addClass("d-none").hide();
                $("#gameend").show();
                $("#survivaltime").append(document.createTextNode("You Have Successfully Survived UMN"));
                $("#overtype").append(document.createTextNode("Good Luck On The Next Stages of Life!"));
            }

            else{
                prcntbljr=0;
                $("#barbelajar").css("width",prcntbljr + "%");
                $("#barbelajar").empty();
                $("#barbelajar").append(document.createTextNode(prcntbljr+"%"));
                $("#headsem").empty();
                $("#headsem").append(document.createTextNode("Semester " + sem));
                counterBelajarfail=0;
                harimalas=0;
                hitungtidur=0;
                hitungmain=0;
            }
        }

/*
Jason Sebastian Tjoang (00000055443)
*/