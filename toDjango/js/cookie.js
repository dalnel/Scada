//取得html檔案名稱
let getHtml = (path)=>
{
    let filePath = path.split('/');
    let fileName = filePath[filePath.length-1];
    return fileName;
};

//讀取有關"上次拜訪的網頁"的cookie
let last_visited = document.cookie.indexOf(`last_visited`);

//有讀到cookie就開啟網頁
if(last_visited != -1)
{
    let page = document.cookie.slice(last_visited+(`last_visited`).length+1, document.cookie.indexOf(';', last_visited));
    document.cookie = `last_visited=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    let prePage = getHtml(document.referrer);
    if(prePage.indexOf('cnvi_') == -1)
            window.open(`${page}`, '_self');
};

//在離開網頁前加入"上次拜訪的網頁"的cookie
window.addEventListener(`beforeunload`, ()=>
{
    let fileName = getHtml(window.location.pathname);
    document.cookie = `last_visited=${fileName}`;
});
