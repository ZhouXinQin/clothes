
/**
 *开发者：周琴
 * 开发时间：2017/10/12
 * 功能：函数封装
 */


/*
 * 请求json数据
 * @param url               json地址
 * @param success           请求成功回调
 * @param fail              请求失败回调
 *
 * */
function getJson(url,success,fail) {
    //1、创建请求
    var xhr  = new XMLHttpRequest();
    //2、配置请求
    xhr.open("GET",url,true);
    //3、发送请求
    xhr.send(null);
    //4、监听状态
    xhr.onreadystatechange = function () {
        //判断请求是否成功
        if( xhr.readyState == 4 && xhr.status == 200 ){
            //请求成功
            if(success){
                //解析json字符串
                var obj = JSON.parse(xhr.responseText);
                console.log(obj)

                success(obj)
            }
        }
        else {
            //请求失败
            if(fail){
                fail(xhr.status)
            }
        }
    }
}

/*
* json: 数据
* main: 信息盒子
* */
function goodNav(json,main) {
    var str = "";
       str =  '<p>'+
       '<span class="commodity">品牌 </span>'+
           '<span class="detail">' + json.brand+
           '</span>'+
           '</p>'+
           '<p>'+
           '<span class="commodity">类型 </span>'+
           '<span class="details">' +json.type+
           '</span>'+
           '</p>'+
           '<p>'+
           '<span class="commodity">材质 </span>'+
           '<span class="details">' +json.texture+
           '</span>'+
           '</p>'+
           '<p>'+
           '<span class="commodity">价格 </span>'+
           '<span class="details">$' +json.price+
           '</span>'+
       '</p>'+
       '<p>'+
       '<span class="commodity">描述 </span>'+
           '<span class="details">' +json.describe+
           '</span>'+
           '</p>'
   main.innerHTML = str;
}