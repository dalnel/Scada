let table = document.querySelector("#tableContent");
let header = document.querySelector("#tableHeader");


//總共有4列，每列有48行
let tableContent = CreateTableContent(4, 48);
tableContent.forEach(item => table.appendChild(item));
let headerContent = CreateHeaders(48);
headerContent.forEach(item => header.appendChild(item));

// 建立多行的標頭
//columns: 行數
function CreateHeaders (columns)
{
  let headers = [];
  for (let columnIndex = 0; columnIndex <= columns; columnIndex++)
  {
    headers.push(CreateHeader(columnIndex));
  }
  return headers;
}

// 建立某行的標頭
//columnIndex: 第幾行
function CreateHeader (columnIndex)
{
  let header = document.createElement("th");
  if (columnIndex == 0)
  {
    return header;
  }
  columnIndex = (columnIndex - 1);
  let hour = Math.floor(columnIndex / 2);
  if (hour < 10)
  {
    hour = "0" + hour;
  }
  header.title = `Field ${columnIndex}`;
  let min = columnIndex % 2 ? "30" : "00"; //if elseif
  header.innerHTML = `${hour}:${min}`;
  return header;
}

//建立整個表格的內容
//rowIndex:    第幾列
//columnIndex: 第幾行
function CreateTableContent (rowIndex, columnIndex)
{
  let content = [];
  for (let row = 1; row <= rowIndex; row++)
  {
    content.push(CreateRow(row, columnIndex));
  }
  return content;
}

//建立某一列
//rowIndex:  47  第幾列
//columnIndex: 4 第幾行
function CreateRow (rowIndex, columnIndex)
{
  let row = document.createElement("tr");
  for (let column = 0; column <= columnIndex; column++)
  {
    row.appendChild(CreateRowData(rowIndex, column));
  }
  return row;
}

//建立某一列的資料
//rowIndex:  47  第幾列
//columnIndex:  4 第幾行
function CreateRowData (rowIndex, columnIndex)
{
  let data = document.createElement("td");
  if (columnIndex == 0)
  {
    data.innerText = `BTS${rowIndex}`;
    return data;
  }

  let input = CreateInput(rowIndex, columnIndex);
  let label = CreateLabel(rowIndex, columnIndex);
  if (columnIndex != 0)
  {
    data.appendChild(input);
    data.appendChild(label);
  }
  return data;
}

//建立表格資料的輸入元素
//rowIndex:    第幾列
//columnIndex: 第幾行
function CreateInput (rowIndex, columnIndex)
{
  let input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", `but_${columnIndex}_${rowIndex}`);
  input.setAttribute("name", "checkbox");
  // input.setAttribute("class", "on");
  return input;
}

//建立表格資料的標籤元素
//rowIndex:    第幾列
//columnIndex: 第幾行
function CreateLabel (rowIndex, columnIndex)
{
  let label = document.createElement("label");
  label.setAttribute("for", `but_${columnIndex}_${rowIndex}`);
  // label.setAttribute("id", `lab_${columnIndex}_${rowIndex}`);
  // label.innerHTML += "Checkbox 1";
  return label;
}

//選取日期
var press = false;
var set = true;
var BTS1_Time = [];
var BTS2_Time = [];
var BTS3_Time = [];
var BTS4_Time = [];
document.getElementById('SetTime').focus();

$('td').mousedown(function (e)
{
  press = true;
  if (set)
  {
    document.getElementById('SetTime').focus();
  }
  else
  {
    document.getElementById('ResetTime').focus();
  }
  e.preventDefault();
});
//移動選取是否有變更時程
let changed = false;
$(document).mouseup(function (e)
{
  press = false;
  e.preventDefault();
  console.log("up");
  //移動選取後，有改變時程才post到伺服器
  if (changed) 
  {
    schedule();
    changed = false;
  }
});

//表格內所有按鈕在click事件後都post到伺服器
let buttons = document.querySelectorAll('input[id^="but_"]');
buttons.forEach(button => button.addEventListener('click', () => schedule()));

$('td').mouseout(function (e)
{
  if (press)
  {
    toggleDot($(this));
    e.preventDefault();
  }
});

$("#SetTime").click(function ()
{
  set = true;
  console.log(set);
});
$("#ResetTime").click(function ()
{
  set = false;
  console.log(set);
});
$("#ResetAll").click(function ()
{
  set = true;
  for (let i = 1; i <= 48; i++)
  {
    document.querySelector("#but_" + i + "_1").checked = false;
    document.querySelector("#but_" + i + "_2").checked = false;
    document.querySelector("#but_" + i + "_3").checked = false;
    document.querySelector("#but_" + i + "_4").checked = false;
    // console.log(document.querySelector("#but_" + i + "_1").checked);
  }
  schedule();
});
function toggleDot (me)
{
  var ele = $(me).get(0).firstChild.id;
  let isChecked = document.querySelector("#" + ele).checked;
  if (set != isChecked)
  {
    document.querySelector("#" + ele).checked = set;
    changed = true;
  }
}
function schedule ()
{
  for (let i = 1; i <= 48; i++)
  {
    BTS1_Time[i - 1] = document.querySelector("#but_" + i + "_1").checked;
    BTS2_Time[i - 1] = document.querySelector("#but_" + i + "_2").checked;
    BTS3_Time[i - 1] = document.querySelector("#but_" + i + "_3").checked;
    BTS4_Time[i - 1] = document.querySelector("#but_" + i + "_4").checked;
    console.log("in");
  }
  console.log(BTS1_Time);
  $.post("", {
    station: "1", 'time_1[]': BTS1_Time, 'time_2[]': BTS2_Time, 'time_3[]': BTS3_Time, 'time_4[]': BTS4_Time
    , csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val()
  }, function () { });
}