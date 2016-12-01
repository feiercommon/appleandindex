$(function () {
    var num=0;
    var ch=$(window).height();
    var flag=true;//加开关为了不让一次滑好多张
    $("#fullpage").mousedown(function(e){
        e.preventDefault()
    })
    $("#fullpage").mousemove(function(e){
        e.preventDefault()
    })
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
        flag=true;

            $(".aa").each(function(index,obj){
                if(index==0){
                    return;
                }
                if(index==num){
                    $(obj).find(".left-img img").css({
                        marginLeft:0,
                        opacity:1
                    })
                    $(obj).find(".left-img .text").css({
                        marginLeft:0,
                        opacity:1
                    })
                    $(obj).find(".left-img .center").css({
                        marginLeft:0,
                        opacity:1
                    })
                    $(obj).find(".right-img img").css({
                        marginRight:0,
                        opacity:1
                    })
                }else{
                    $(obj).find(".left-img img").css({
                        marginLeft:-50,
                        opacity:0
                    })
                    $(obj).find(".left-img .text").css({
                        marginLeft:-50,
                        opacity:0
                    })
                    $(obj).find(".left-img .center").css({
                        marginLeft:-50,
                        opacity:0
                    })
                    $(obj).find(".right-img img").css({
                        marginRight:-50,
                        opacity:0
                    })
                }

            })


    })

    // 菜单的操作
    var flag2=true;
    $(".menuOption").click(function(){
        $(".menu a").css("display","block")
        if(flag2){
            // 按钮
            $(this).find(".menuOption-tline").css({
                transform:"translate(0,5px) rotate(45deg)"
            })
            $(this).find(".menuOption-bline").css({
                transform:"translate(0,-5px) rotate(-45deg)"
            })
            // 菜单变化
            //     $(".menu a").css({
            //         opacity:0,transform:"rotate(90deg)"
            //     })
            $(".menu a").each(function(index,obj){
                $(obj).css({
                    opacity:0,
                    transform:"rotateX(90deg)",
                    animation:"menu 0.3s linear forwards "+0.2*index+"s"

                })
            })
            flag2=false;
        }else{
            $(this).find(".menuOption-tline").css({
                transform:"translate(0,0) rotate(0deg)"
            })
            $(this).find(".menuOption-bline").css({
                transform:"translate(0,0) rotate(0deg)"
            })
            $(".menu a").each(function(index,obj){
                $(obj).css({
                    opacity:1,
                    transform:"rotateX(0deg)",
                    animation:"menu1 0.3s linear forwards "+(1.2-0.2*index)+"s"
                })

            })
            setTimeout(function(){
                $(".menu a").css("display","none")
            },1200)
            flag2=true;
        }

    })
    $(window).resize(function(){
        ch=$(window).height();
        cw=$(window).width();
        $("#fullpage").css("margin-top",-num*ch);
        if(cw>1000){
            $(".menu a").css({
                animation:"none",
                opacity:0,
                transform:"rotateX(90deg)"
            })
            $(".menuOption-bline,.menuOption-tline").css({
                transform:"translate(0,0) rotate(0deg)"
            })
        }
        flag2=true;
    })
})

