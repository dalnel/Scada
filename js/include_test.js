/*測試用JS，沒有加入在html中*/

var press = false;

$('td').mousedown( function(e) { 
  press = true;
  e.preventDefault();
});
  $(document).mouseup( function(e) { 
    press = false;   
    //toggleDot($(this));
    e.preventDefault();
  });
  
  $('td').mouseover( function(e) {
    if (press) { 
      toggleDot($(this));
      e.preventDefault();
    }
  });

  function toggleDot(me) {
    var ele =  $(me).get(0).firstChild.id;
    console.log(ele);
    document.querySelector("#" + ele).checked = true;
}