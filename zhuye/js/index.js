$(function(){
    $(".hy-box>.tu").hide().eq(0).show();
    var num=0;
    function move(){
            num++;
            if(num >= $(".hy-box>.tu").length ){
                 num=0;
             }
        $(".hy-box>.tu").fadeOut("ease").eq(num).fadeIn(300)
    }
    var t=setInterval(move,4000)

    // 内容
    $(".hy-zp").each(function(i,obj){
        var flag=true;
        $(obj).hover(function(){
            if(flag){
                $(".hy-zp-title").eq(i).slideDown("ease")
                flag=true;
            }

        },function(){
            if(flag){
                $(".hy-zp-title").eq(i).slideUp(100)
            }
        })
    })

    $(".dd").click(function(){
        var clientW=$(window).width();
        var clientH=$(window).height();
        $(".son").css({
            "width":clientW,
            "height":clientH
        })
        $(".son").slideToggle(200);
    })
})