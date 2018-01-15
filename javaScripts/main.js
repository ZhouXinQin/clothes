
main();
function main() {
    //信息盒子
    var oMain = document.getElementsByTagName("main")[0];

   window.onhashchange = function () {
       var getHash = location.hash;
       console.log(getHash)
       getJson("https://www.aulence.com/data/clothingData.json",function (json) {
           console.log(json)
           if(getHash === "#clothes"){
               oMain.style.top = "0";
               goodNav(json.clothes,oMain)
           }
           else if(getHash === "#skirt"){
               oMain.style.top = "0";
               goodNav(json.skirt,oMain)
           }
           else if(getHash === "#shoe"){
               oMain.style.top = "0";
               goodNav(json.shoe,oMain)
           }
           //点击消失
           oMain.onclick = function () {
               oMain.innerHTML = "";
               oMain.style.top = "-100%";
               location.hash = "";
           }
       },function () {

       })
   }
}

