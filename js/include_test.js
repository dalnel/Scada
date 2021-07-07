$.ajax({
  type: "GET",
  url: "/test",
  success: function (res) {
    init(res);
  }
})
function init(res){
  for (let i = 1; i <= 48; i++)
  {
    document.querySelector("#but_" + i + "_1").checked = convertBool(res[0][i-1]);
    document.querySelector("#but_" + i + "_2").checked = convertBool(res[1][i-1]);
    document.querySelector("#but_" + i + "_3").checked = convertBool(res[2][i-1]);
    document.querySelector("#but_" + i + "_4").checked = convertBool(res[3][i-1]);
    
  }
}
function convertBool(string){
  if(string == "true")
  {
    return true;
  }
  else
  {
    return false;
  }
}

