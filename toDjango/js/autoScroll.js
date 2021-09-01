//是否按著滑鼠
let isHolding = false;

document.body.addEventListener((`mousedown`),
    (event) =>
    {
        if (isHolding == false)
        {
            isHolding = true;
        }
    });
document.body.addEventListener((`mouseup`),
    (event) =>
    {
        if (isHolding == true)
        {
            isHolding = false;
        }
    });

//正在自動捲動的任務
let scrolling = null;

document.body.addEventListener((`mousemove`), (event) =>
{
    if (isHolding == true && scrolling == null)
    {
        scrolling = setInterval(() =>
        {
            scroll(event);
        }, 10);
    }
});


//自動捲動
function scroll (event)
{
    //取得裝表格的容器
    let table = document.querySelector("#section");
    //取得表格的位置矩形
    let rect = table.getClientRects()[0];
    //取得主體位置矩形
    let bodyRect = document.body.getClientRects()[0];
    //取得畫面的寬度
    let screenWidth = window.screen.width;
    //取得畫面的長度
    let screenHeight = window.screen.height;
    //算出左邊界
    let left = rect.x > bodyRect.x ? rect.x : bodyRect.x;
    left = left > 0 ? left : 0;
    //算出右邊界
    let right = rect.right < bodyRect.right ? rect.right : bodyRect.right;
    right = right < screenWidth ? right : screenWidth;
    //算出上邊界
    let top = rect.y > bodyRect.y ? rect.y : bodyRect.y;
    top = top > 0 ? top : 0;
    //算出下邊界
    let bottom = rect.bottom < bodyRect.bottom ? rect.bottom : bodyRect.bottom;
    bottom = bottom < screenHeight ? bottom : screenHeight;
    //當滑鼠按住並且位置大於最右邊-50就向右捲動
    if (isHolding == true && event.clientX >= (right - 50))//(-50)->因為右邊有捲動條所以要距離右邊遠一點
    {
        console.log("right");
        table.scrollBy(5, 0);
        return;
    }
    //當滑鼠按住並且位置小於最左邊+30就向左捲動
    if (isHolding == true && event.clientX <= (left + 30))
    {
        console.log("left");
        table.scrollBy(-5, 0);
        return;
    }
    //當滑鼠按住並且位置大於下面-50就向下捲動
    if (isHolding == true && event.clientY >= (bottom - 50))//(-50)->因為下面有捲動條所以要距離下面遠一點
    {
        console.log("down");
        table.scrollBy(0, 5);
        return;
    }
    //當滑鼠按住並且位置小於最上面+30就向上捲動
    if (isHolding == true && event.clientY <= (top + 30))
    {
        console.log("top");
        table.scrollBy(0, -5);
        return;
    }
    //滑鼠放開或位置不對就結束自動捲動任務
    clearInterval(scrolling);
    scrolling = null;
}