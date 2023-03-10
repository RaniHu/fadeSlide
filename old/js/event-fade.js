/**
 * Created by Administrator on 2016/4/27 0027.
 */
$(function () {
    var image_lis = $("#slide-image li"),                 //轮播图lis
        len = image_lis.length;                //轮播图片的长度(比索引值大1)

    //为轮播图片自动添加相应圆圈按钮个数
    for (var i = 1; i <= len; i++) {
        var li = "<li></li>";
        $(".circle-btn").append(li);
    }
    var circle_btn = $(".circle-btn li");                 //圆圈按钮lis

    //鼠标划入圆圈按钮
    image_lis.eq(0).show();
    circle_btn.first().addClass("circle-btn-on");         //给当前默认第一个圆圈按钮添加类名
    circle_btn.mouseover(function () {
        $(this).addClass("circle-btn-on").siblings().removeClass("circle-btn-on");        //为当前圆圈按钮添加类名，并去除同胞元素的类名
        var index = $(this).index();                                //把当前元素的索引值存入一个变量中
        l = index;                                                  //图片的索引值l等于圆圈的索引值index(手动控制与自动控制索引值对应)
        image_lis.eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);    //使当前的轮播图淡入，其他同胞图片淡出
    });

    //自动播放
    var l=0;                            //表示第一张轮播图(即索引值)
    var time=setInterval(function(){
        l++;
        move();
    },1500);

    //鼠标划入轮播图任何区域时关闭定时器
    $(".slide-box").hover(function () {
        clearInterval(time)
    }, function () {
        time = setInterval(function(){
            l++;
            move();
        }, 1500)
    });

    //点击向左按钮
    $("div.btn_l").click(function(){
        l--;
        move();
    });

    //点击向右按钮
    $("div.btn_r").click(function(){
        l++;
        move();
    });

    //淡入淡出动画
    function move(){
        if(l==-1){             //l等于-1(即在第一张图片时点击向左按钮)
            l=len-1;           //使l等于最后一张图片的索引值
        }
        if(l==len){
            l=0;
        }
        circle_btn.eq(l).addClass("circle-btn-on").siblings().removeClass("circle-btn-on");        //为当前圆圈按钮添加类名，并去除同胞元素的类名
        image_lis.eq(l).fadeIn(300).siblings().fadeOut(300);
    }





});