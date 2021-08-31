var flag_3 = true;
var flag_2 = true;
var canRead = true;
var canWrite = true;
setInterval("Butn_init()", 2000);
function Butn_init() {
    canWrite = false;
    if(canRead)
    {
        $.ajax({
            type: "GET",
            url: "/background",
            dataType: "json",
            success: function (res) {                
                if (res.station[0].bts1 == 111 || res.station[0].bts1 == 100) {
                    $('#btn_1').css("background-color", "lightgreen");
                    $('#btn_2').css("background-color", "lightgreen");
                }
                else {
                    $('#btn_1').css("background-color", "red");
                    $('#btn_2').css("background-color", "red");
                }
                alarm_1(res.station[0].bts5);
                alarm_2(res.station[1].bts5); 
                switch_1(res.station[0].bts1);//******
                switch_2(res.station[0].bts2);//ID_1 *
                switch_3(res.station[0].bts3);//     *
                switch_4(res.station[0].bts4);//******
                    
                switch_5(res.station[1].bts1);//******
                switch_6(res.station[1].bts2);//ID_2 *
                switch_7(res.station[1].bts3);//     *
                switch_8(res.station[1].bts4);//******
        
                // RFID(res.station[1].id_1,res.station[1].id_2,res.station[1].id_3,res.station[1].id_4,); 
                canWrite = true;
                schedule();             
            }
        })
    }
}
function schedule(){
    if(canWrite)
    {
        canRead = false;
        $.post("/test/",{null: "null", csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () {canRead = true;});    
    }
}
function alarm_1(sw){
    if(sw == 111 && flag_3 == true)
    {
        $('#alarm_1_light').toggle();
        flag_3 = false; 
    }
}
$('#alarm_1').click(function(){
    if(flag_3 == false)
    {
        $('#alarm_1_light').toggle();
        $.post("", { station: "1", 'butn[]': ["4","100"], csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
        flag_3 = true;    
    }
})

function alarm_2(sw){
    if(sw == 111 && flag_2 == true)
    {
        $('#alarm_2_light').toggle();
        flag_2 = false; 
    }
}
$('#alarm_2').click(function(){
    if(flag_2 == false)
    {
        $('#alarm_2_light').toggle();
        $.post("", { station: "2", 'butn[]': ["4","100"], csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
        flag_2 = true;    
    }
}) 

function switch_1(state){
    if(state == 111)
    {
        document.getElementById("toggle_1").checked = true;
    }
    else if(state == 100)
    {
        document.getElementById("toggle_1").checked = false;
    }
}
$('#toggle_1').click(function(){
    if(document.getElementById("toggle_1").checked == true)
    {
        $.post("", { station: "1", 'butn[]': ["0","111"], csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
    else if(document.getElementById("toggle_1").checked == false)
    {       
        $.post("", { station: "1", 'butn[]': ["0","100"], csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
})

function switch_2(state){
    if(state == 111)
    {
        document.getElementById("toggle_2").checked = true;
    }
    else if(state == 100)
    {
        document.getElementById("toggle_2").checked = false;
    }
}
$('#toggle_2').click(function(){
    if(document.getElementById("toggle_2").checked == true)
    {
        $.post("", { station: "1", 'butn[]': ["1","111"], csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
    else if(document.getElementById("toggle_2").checked == false)
    {       
        $.post("", { station: "1", 'butn[]': ["1","100"], csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
})

function switch_3(state){
    if(state == 111)
    {
        document.getElementById("toggle_3").checked = true;
    }
    else if(state == 100)
    {
        document.getElementById("toggle_3").checked = false;
    }
}
$('#toggle_3').click(function(){
    if( document.getElementById("toggle_3").checked == true)
    {
        $.post("", { station: "1", 'butn[]': ["2","111"], csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
    else if( document.getElementById("toggle_3").checked == false)
    {
        $.post("", { station: "1", 'butn[]': ["2","100"], csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
})

function switch_4(state){
    if(state == 111)
    {
        document.getElementById("toggle_4").checked = true;
    }
    else if(state == 100)
    {
        document.getElementById("toggle_4").checked = false;
    }
}
$('#toggle_4').click(function(){
    if( document.getElementById("toggle_4").checked == true)
    {
        $.post("", { station: "1", 'butn[]': ["3","111"], csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
    else if( document.getElementById("toggle_4").checked == false)
    {
        $.post("", { station: "1", 'butn[]': ["3","100"], csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
})

function switch_5(state){
    if(state == 111)
    {
        document.getElementById("toggle_5").checked = true;
    }
    else if(state == 100)
    {
        document.getElementById("toggle_5").checked = false;
    }
}
$('#toggle_5').click(function(){
    if( document.getElementById("toggle_5").checked == true)
    {
        $.post("", { station: "2", 'butn[]': ["0","111"], csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
    else if( document.getElementById("toggle_5").checked == false)
    {
        $.post("", { station: "2", 'butn[]': ["0","100"], csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
})

function switch_6(state){
    if(state == 111)
    {
        document.getElementById("toggle_6").checked = true;
    }
    else if(state == 100)
    {
        document.getElementById("toggle_6").checked = false;
    }
}
$('#toggle_6').click(function(){
    if( document.getElementById("toggle_6").checked == true)
    {
        $.post("", { station: "2", 'butn[]': ["1","111"], csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
    else if(document.getElementById("toggle_6").checked == false)
    {
        $.post("", { station: "2", 'butn[]': ["1","100"], csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
})

function switch_7(state){
    if(state == 111)
    {
        document.getElementById("toggle_7").checked = true;
    }
    else if(state == 100)
    {
        document.getElementById("toggle_7").checked = false;
    }
}
$('#toggle_7').click(function(){
    if( document.getElementById("toggle_7").checked == true)
    {
        $.post("", { station: "2", 'butn[]': ["2","111"], csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
    else if( document.getElementById("toggle_7").checked == false)
    {
        $.post("", { station: "2", 'butn[]': ["2","100"], csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
})

function switch_8(state){
    if(state == 111)
    {
        document.getElementById("toggle_8").checked = true;
    }
    else if(state == 100)
    {
        document.getElementById("toggle_8").checked = false;
    }
}
$('#toggle_8').click(function(){
    if( document.getElementById("toggle_8").checked == true)
    {
        $.post("", { station: "2", 'butn[]': ["3","111"], csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
    else if( document.getElementById("toggle_7").checked == false)
    {
        $.post("", { station: "2", 'butn[]': ["3","100"], csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
})


function RFID(id_1, id_2, id_3, id_4){
    Stime = new Date();
    Etime = new Date();
    now = new Date($.now());
    Stime.setHours(20);
    Etime.setHours(21);    
    if(id_1 + id_2 + id_3 + id_4 != 0)
    {
        $('#footer').load("" +  ' #footer');  
        ID = String(id_1) + " " + String(id_2) + " " + String(id_3) + " " + String(id_4);
        if(Etime.getHours() > now.getHours() && now.getHours() >= Stime.getHours())
        {         
            $.post("/led/", { station: "1", descripition: "走廊A_上下班打卡", ID: ID, class: "上/下班", csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val()}, function () {});
        }
        else
        {
            $.post("/led/", { station: "1", descripition: "走廊A_刷卡求救", ID: ID, class: "刷卡求救", csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val()}, function () {});
        }   
    }    
}