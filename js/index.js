$(function(){
    // 二级导航
    $(".nav>li").mouseenter(function(){
        $(this).find(".menuTwo").stop().slideDown()
    })
    $(".nav>li").mouseleave(function(){
        $(this).find(".menuTwo").stop().hide()
    })
    // 轮播图
    var curIndex = 0 // 保存当前图片索引
    var t = null   // 保存计时器
    function autoChange(){
        // 控制图片显示
            $(".imgBox img").css({"display":"none"}).eq(curIndex).css({"display":"block"})
        // 控制项目符号显示
            $(".circle li").removeClass("active").eq(curIndex).addClass("active")
        curIndex++
        if(curIndex>=$(".imgBox img").length){
            curIndex = 0
        }
    }
    t =  setInterval(autoChange,3000)
    // 点击项目符号的时候切换对应的图片
    $(".circle li").click(function(){
        curIndex = $(this).index()
        // 控制图片显示
        $(".imgBox img").css({"display":"none"}).eq(curIndex).css({"display":"block"})
        // 控制项目符号显示
            $(".circle li").removeClass("active").eq(curIndex).addClass("active")
    })
    // 单击上一张
    $("#prev").click(function(){
        curIndex--
        if(curIndex<0){
            curIndex = $(".imgBox img").length-1
        }
         // 控制图片显示
         $(".imgBox img").css({"display":"none"}).eq(curIndex).css({"display":"block"})
         // 控制项目符号显示
             $(".circle li").removeClass("active").eq(curIndex).addClass("active") 
    })
    // 单击下一张
    $("#next").click(function(){
        curIndex++
        if(curIndex>=$(".imgBox img").length){
            curIndex = 0
        }
         // 控制图片显示
         $(".imgBox img").css({"display":"none"}).eq(curIndex).css({"display":"block"})
         // 控制项目符号显示
             $(".circle li").removeClass("active").eq(curIndex).addClass("active")    
    })
    // hover事件
    $(".slide").hover(function(){
        clearInterval(t)
    },function(){
       t =  setInterval(autoChange,3000)
    })
    // 分类切换效果
    $(".pro_type>li").hover(function(){
        $(this).find(".channel_out").show()
    },function(){
        $(this).find(".channel_out").hide()
    })
    // 窗口滚动事件
    $(window).scroll(function(){
        if($(this).scrollTop()>=300){
            $(".kefu li:last-child").css({"display":"block"})
        }else{
            $(".kefu li:last-child").css({"display":"none"})
        }
    })
    // 视频播放
    $(".thumb").click(function(){
       $(this).siblings(".tan").show()
    })
    // 关闭弹出视频
    $(".closeBtn").click(function(){
        $(this).parents(".tan").hide()
    })
})