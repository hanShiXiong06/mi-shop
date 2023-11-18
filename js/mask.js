$(function(){
    // 1. 选项卡效果
    $(".tab-item li").hover(function() {
        var cur = $(this).index()
        $(".tab-content img").eq(cur).show().siblings("img").hide()
    })
    // 2. 显示和隐藏放大镜
    $(".tab-content").hover(function(){
        // a. 显示放大镜
        $(".mask").show()
        $(".bigBox").show()
    },function() {
        // b. 隐藏放大镜
        $(".mask").hide()
        $(".bigBox").hide()
    })
    // 3. 放大镜绑定移动事件
    var mwidth = $(".mask").width()
    var mheight = $(".mask").height()
    $(".tab-content").on("mousemove",function(e){
        // 计算放大镜上和左的偏移位置
        console.log(e.pageX);
        var mx = e.pageX-$(this).offset().left-mwidth/2
        var my = e.pageY-$(this).offset().top-mheight/2
        // 设置放大镜水平方向的临界点
        if(mx<0){
            mx = 0
        }else if(mx>$(this).width()-mwidth){
            mx = $(this).width()-mwidth
        }
        // 设置放大镜垂直方向的临界点
        if(my<0){
            my = 0
        }else if(my>$(this).height()-mheight){
            my = $(this).height()-mheight
        }
        // 设置放大镜的位置
        $(".mask").css({
            "top":my+"px",
            "left":mx+"px"
        })
        // 计算缩放比例
        var rotate = $(".bigBox img").width()/$(".tab-content img").width()
        $(".bigBox img").css({
            "margin-top":-rotate*my,
            "margin-left":-rotate*mx,
        })
    })
})