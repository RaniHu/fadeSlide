/**
 * Created by Administrator on 2016/2/10 0010.
 */
window.onload = function () {
    var navItem = document.getElementById('nav-item'),
        itemLis = navItem.getElementsByTagName('li'),
        txt = navItem.getElementsByTagName('a'),
        detailSort = document.getElementsByClassName('detail-sort'),
        top_nav=document.getElementById("nav").getElementsByTagName("a"),
        top_nav_icon=document.getElementsByClassName("hover-icon");


    //左侧商品导航栏下划线样式
    for (var i = 0; i < txt.length; i++) {
        txt[i].onmouseover = function () {
            this.style.textDecoration = 'underline';
        };
        txt[i].onmouseout = function () {
            this.style.textDecoration = 'none';
        }
    }


    //头部导航鼠标滑过动画
    for(var i=0;i<top_nav.length;i++){
        top_nav[i].index=i;
        top_nav[i].onmouseover=function(){
            //用this_变量来引用当前划过的li
            var this_ = this;
            setTimeout(function () {
             top_nav_icon[this_.index].style.display = 'block';
             //滑动动画
             startMove(top_nav_icon[this_.index],{top:"-21"})
             }, 200);

        };

        top_nav[i].onmouseout=function(){
            var this_ = this;
            setTimeout(function () {
                top_nav_icon[this_.index].style.display = 'none';
                startMove(top_nav_icon[this_.index],{top:"-18"})
            }, 200);
        }
    }



    //左侧商品导航动画
    for (var i = 0; i < itemLis.length; i++) {
        //为li标签创建索引
        itemLis[i].index = i;
        itemLis[i].onmouseover = function () {
            //用this_变量来引用当前划过的li
            var this_ = this;
            //详细二级菜单滑动效果
            detailSort[this_.index].style.display = 'block';
        };

        itemLis[i].onmouseout = function () {
            var this_ = this;
            detailSort[this_.index].style.display = 'none';
        }
    }

    //轮播图

    //图标动画
    var iconUl = document.getElementById('icon-animation'),
        iconLis = iconUl.getElementsByTagName('li');
    for (var i = 0; i < iconLis.length; i++) {
        //onmouseenter类似于onmouseover 唯一的区别是它不支持冒泡
        iconLis[i].onmouseenter = function () {
            var _this = this.getElementsByTagName('i')[0];
            startMove(_this, {top: -12, opacity: 0}, function () {
                _this.style.top = 30 + 'px';
                startMove(_this, {top: 12, opacity: 100})
            })
        };
    }

    //轮播图
    var l = 0,                                            //表示第一张轮播图(即索引值)
        btn_l = $(".btn_l"),
        btn_r = $(".btn_r"),
        slide_image = $("#slide-image"),                  //轮播图ul
        image_lis = $("#slide-image li"),                 //轮播图lis
        clone_image = image_lis.first().clone();          //克隆第一张轮播图
        slide_image.append(clone_image);                  //将克隆的图片插入轮播图最后

    var len = $("#slide-image li").length;                //轮播图片的长度(比索引值大1)
    for(var j=0 ;j<len-1;j++){
        var li="<li></li>";
        $(".circle-btn").append(li);
    }
    var circle_btn = $(".circle-btn li");                 //圆圈按钮lis
    circle_btn.first().addClass("circle-btn-on");         //给当前默认第一个圆圈按钮添加类名


    //圆圈按钮滑入
    circle_btn.hover(function () {
        var index = $(this).index();                                //获取当前圆圈按钮的索引值
        l = index;                                                  //将轮播图的索引值赋给圆圈按钮
        slide_image.stop().animate({left: -index * 1150}, 300);
        $(this).addClass("circle-btn-on").siblings().removeClass("circle-btn-on");   //给当前的按钮添加类名

    });

   //自动播放
            var time = setInterval(function(){
                l++;
                move();
            }, 1500);
            //鼠标焦点在图片上时关闭定时器
            $(".banner").hover(function () {
                clearInterval(time);
            }, function () {
                time = setInterval(function(){
                    l++;
                    move();
                }, 1500);
            });




    //点击向左按钮时
    btn_l.click(function () {
        l--;
        move();
    });

    //点击向右按钮时
    btn_r.click(function () {
        l++;
        move();
    });

    function move() {
        if (l == len) {                               //当l的值等于轮播图片的最大长度(即开始第二轮)
            slide_image.css({left: 0});                 //将轮播图拉回初始位置
            l = 1;                                    //呈现第二张图片
        }

        if (l == -1) {                                //当l的值等于-1时
            slide_image.css({left: -(len - 1) * 1150});  //将轮播图拉到最后一张图片的位置
            l = len - 2;                              //呈现倒数第二张图片
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



};



