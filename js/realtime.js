function ShowTime() {
    var NowDate = new Date();
    var h = NowDate.getHours();
    var m = NowDate.getMinutes();
    var s = NowDate.getSeconds();
    document.getElementById('showbox').innerHTML = h + '時' + m + '分' + s + '秒';
    setTimeout('ShowTime()', 1000);
}