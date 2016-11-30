$(function () {
    var num=0;
    var ch=$(window).height();
    var flag=true;//加开关为了不让一次滑好多张
    touch.on("body","swipeup","#fullpage",function(){
        if(!flag){
            return;
        }
        num++;
        if(num==$("section").length){
            num=$("section").length-1;
            return;
        }
        // document.title=num;
        flag=false;
        $("#fullpage").css("margin-top",-num*ch)
    })
    $("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true
    })//转为原生 检测事件完成
    touch.on("body","swipedown","#fullpage",function(){
        if(!flag){
            return;
        }

        num--;
        if(num==-1){
            num=0;
            return;
        }

        // document.title=num;

        flag=false;
        $("#fullpage").css("margin-top",-num*ch)
    })
    $("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true
    })
})

