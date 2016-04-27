/**
 * Created by Administrator on 2016/4/27 0027.
 */
//轮播图移动
$(function () {

    var l = 0,                                            //表示第一张轮播图(即索引值)
        btn_l = $(".btn_l"),
        btn_r = $(".btn_r"),
        slide_image = $("#slide-image"),                  //轮播图ul
        image_lis = $("#slide-image li"),                 //轮播图lis
        clone_image = image_lis.first().clone();          //克隆第一张轮播图
    slide_image.append(clone_image);                  //将克隆的图片插入轮播图最后

    var len = $("#slide-image li").length,                //轮播图片的长度(比索引值大1)
        circle_btn = $(".circle-btn li");                 //圆圈按钮lis
    circle_btn.first().addClass("circle-btn-on");         //给当前默认第一个圆圈按钮添加类名


    //圆圈按钮滑入
    circle_btn.hover(function () {
        var index = $(this).index();                                //获取当前圆圈按钮的索引值
        l = index;                                                  //将轮播图的索引值赋给圆圈按钮
        slide_image.animate({left: -index * 1150}, 300);
        $(this).addClass("circle-btn-on").siblings().removeClass("circle-btn-on");   //给当前的按钮添加类名

    });

    //自动播放
    var time = setInterval(move_l, 2500);
    //鼠标焦点在图片上时关闭定时器
    slide_image.hover(function () {
        clearInterval(time);
    }, function () {
        time = setInterval(move_l, 2500);
    });
    //鼠标焦点在圆圈按钮上时关闭定时器
    circle_btn.hover(function () {
        clearInterval(time);
    }, function () {
        time = setInterval(move_l, 2500);
    });
    //鼠标焦点在左右按钮上时关闭定时器
    $(".slide-btn").hover(function () {
        clearInterval(time);
    }, function () {
        time = setInterval(move_l, 2500);
    });


    //点击向左按钮时
    btn_l.click(function () {
        move_l();
    });

    //点击向右按钮时
    btn_r.click(function () {
        move_r();
    });

    function move_l() {
        l++;
        if (l == len) {                               //当l的值等于轮播图片的最大长度(即开始第二轮)
            slide_image.css({left: 0});                 //将轮播图拉回初始位置
            l = 1;                                    //呈现第二张图片
        }
        slide_image.stop().animate({left: -l * 1150}, 500);

        if (l == len - 1) {                           //如果点击到最后一张图片
            //为第一个圆圈按钮添加类名，并移除同胞元素上的类名
            circle_btn.eq(0).addClass("circle-btn-on").siblings().removeClass("circle-btn-on");
        } else {
            //为当前的圆圈按钮添加类名，并移除同胞元素上的类名
            circle_btn.eq(l).addClass("circle-btn-on").siblings().removeClass("circle-btn-on");
        }
    }

    function move_r() {
        l--;
        if (l == -1) {                                //当l的值等于-1时
            slide_image.css({left: -(len - 1) * 1150});  //将轮播图拉到最后一张图片的位置
            l = len - 2;                              //呈现倒数第二张图片
        }
        slide_image.stop().animate({left: -l * 1150}, 500);

        circle_btn.eq(l).addClass("circle-btn-on").siblings().removeClass("circle-btn-on");

    }
});
/**
 * Created by Administrator on 2016/4/27 0027.
 */
