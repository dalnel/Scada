var flag_3 = true;
// var flag_2 = true;
setInterval("Butn_init()", 2000)
function Butn_init() {
    $.ajax({
        type: "GET",
        url: "/background",
        success: function (res) {
            if (res.bts1 == 111 || res.bts1 == 100) {
                $('#btn_1').css("background-color", "lightgreen");
                $('#btn_2').css("background-color", "lightgreen");
            }
            else {
                $('#btn_1').css("background-color", "red");
                $('#btn_2').css("background-color", "red");
            }
            alarm_1(res.bts5);
            /* alarm_2(res.bts4); */
            switch_1(res.bts1);
            switch_2(res.bts2);
            switch_3(res.bts3);
            switch_4(res.bts4);
        }
    })

}
function alarm_1(sw){
    if(sw == 111 && flag_3 == true)
    {
        $('#alarm_1_light').toggle();
        flag = false; 
    }
}
$('#alarm_1').click(function(){
    if(flag_3 == false)
    {
        $('#alarm_1_light').toggle();
        $.post("", { butn: "bts9", csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
        flag = true;    
    }
})

/* function alarm_2(sw){
    if(sw == 111 && flag_2 == true)
    {
        $('#alarm_2_light').toggle();
        flag = false; 
    }
}
$('#alarm_2').click(function(){
    if(flag_2 == false)
    {
        $('#alarm_2_light').toggle();
        $.post("", { butn: "bts10", csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
        flag = true;    
    }
}) */

function switch_1(state){
    if(state == 111)
    {
        $('#toggle_1').checked = true;
    }
    else if(state == 100)
    {
        $('#toggle_1').checked = false;
    }
}
$('#toggle_1').click(function(){
    if($('#toggle_1').checked == true)
    {
        $.post("", { butn: "bts1", csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
    else if($('#toggle_1').checked == false)
    {
        $.post("", { butn: "bts2", csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
})

function switch_2(state){
    if(state == 111)
    {
        $('#toggle_2').checked = true;
    }
    else if(state == 100)
    {
        $('#toggle_2').checked = false;
    }
}
$('#toggle_2').click(function(){
    if($('#toggle_2').checked == true)
    {
        $.post("", { butn: "bts3", csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
    else if($('#toggle_2').checked == false)
    {
        $.post("", { butn: "bts4", csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
})

function switch_3(state){
    if(state == 111)
    {
        $('#toggle_3').checked = true;
    }
    else if(state == 100)
    {
        $('#toggle_3').checked = false;
    }
}
$('#toggle_3').click(function(){
    if($('#toggle_3').checked == true)
    {
        $.post("", { butn: "bts5", csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
    else if($('#toggle_3').checked == false)
    {
        $.post("", { butn: "bts6", csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
})

function switch_4(state){
    if(state == 111)
    {
        $('#toggle_4').checked = true;
    }
    else if(state == 100)
    {
        $('#toggle_4').checked = false;
    }
}
$('#toggle_4').click(function(){
    if($('#toggle_4').checked == true)
    {
        $.post("", { butn: "bts7", csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
    else if($('#toggle_4').checked == false)
    {
        $.post("", { butn: "bts8", csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
})var flag_3 = true;
// var flag_2 = true;
setInterval("Butn_init()", 2000)
function Butn_init() {
    $.ajax({
        type: "GET",
        url: "/background",
        success: function (res) {
            if (res.bts1 == 111 || res.bts1 == 100) {
                $('#btn_1').css("background-color", "lightgreen");
                $('#btn_2').css("background-color", "lightgreen");
            }
            else {
                $('#btn_1').css("background-color", "red");
                $('#btn_2').css("background-color", "red");
            }
            alarm_1(res.bts5);
            /* alarm_2(res.bts4); */
            switch_1(res.bts1);
            switch_2(res.bts2);
            switch_3(res.bts3);
            switch_4(res.bts4);
        }
    })

}
function alarm_1(sw){
    if(sw == 111 && flag_3 == true)
    {
        $('#alarm_1_light').toggle();
        flag = false; 
    }
}
$('#alarm_1').click(function(){
    if(flag_3 == false)
    {
        $('#alarm_1_light').toggle();
        $.post("", { butn: "bts9", csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
        flag = true;    
    }
})

/* function alarm_2(sw){
    if(sw == 111 && flag_2 == true)
    {
        $('#alarm_2_light').toggle();
        flag = false; 
    }
}
$('#alarm_2').click(function(){
    if(flag_2 == false)
    {
        $('#alarm_2_light').toggle();
        $.post("", { butn: "bts10", csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
        flag = true;    
    }
}) */

function switch_1(state){
    if(state == 111)
    {
        $('#toggle_1').checked = true;
    }
    else if(state == 100)
    {
        $('#toggle_1').checked = false;
    }
}
$('#toggle_1').click(function(){
    if($('#toggle_1').checked == true)
    {
        $.post("", { butn: "bts1", csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
    else if($('#toggle_1').checked == false)
    {
        $.post("", { butn: "bts2", csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
})

function switch_2(state){
    if(state == 111)
    {
        $('#toggle_2').checked = true;
    }
    else if(state == 100)
    {
        $('#toggle_2').checked = false;
    }
}
$('#toggle_2').click(function(){
    if($('#toggle_2').checked == true)
    {
        $.post("", { butn: "bts3", csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
    else if($('#toggle_2').checked == false)
    {
        $.post("", { butn: "bts4", csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
})

function switch_3(state){
    if(state == 111)
    {
        $('#toggle_3').checked = true;
    }
    else if(state == 100)
    {
        $('#toggle_3').checked = false;
    }
}
$('#toggle_3').click(function(){
    if($('#toggle_3').checked == true)
    {
        $.post("", { butn: "bts5", csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
    else if($('#toggle_3').checked == false)
    {
        $.post("", { butn: "bts6", csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
})

function switch_4(state){
    if(state == 111)
    {
        $('#toggle_4').checked = true;
    }
    else if(state == 100)
    {
        $('#toggle_4').checked = false;
    }
}
$('#toggle_4').click(function(){
    if($('#toggle_4').checked == true)
    {
        $.post("", { butn: "bts7", csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
    else if($('#toggle_4').checked == false)
    {
        $.post("", { butn: "bts8", csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val() }, function () { });
    }
})