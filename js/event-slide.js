/**
 * Created by Administrator on 2016/4/27 0027.
 */
//�ֲ�ͼ�ƶ�
$(function () {

    var l = 0,                                            //��ʾ��һ���ֲ�ͼ(������ֵ)
        btn_l = $(".btn_l"),
        btn_r = $(".btn_r"),
        slide_image = $("#slide-image"),                  //�ֲ�ͼul
        image_lis = $("#slide-image li"),                 //�ֲ�ͼlis
        clone_image = image_lis.first().clone();          //��¡��һ���ֲ�ͼ
    slide_image.append(clone_image);                  //����¡��ͼƬ�����ֲ�ͼ���

    var len = $("#slide-image li").length,                //�ֲ�ͼƬ�ĳ���(������ֵ��1)
        circle_btn = $(".circle-btn li");                 //ԲȦ��ťlis
    circle_btn.first().addClass("circle-btn-on");         //����ǰĬ�ϵ�һ��ԲȦ��ť�������


    //ԲȦ��ť����
    circle_btn.hover(function () {
        var index = $(this).index();                                //��ȡ��ǰԲȦ��ť������ֵ
        l = index;                                                  //���ֲ�ͼ������ֵ����ԲȦ��ť
        slide_image.animate({left: -index * 1150}, 300);
        $(this).addClass("circle-btn-on").siblings().removeClass("circle-btn-on");   //����ǰ�İ�ť�������

    });

    //�Զ�����
    var time = setInterval(move_l, 2500);
    //��꽹����ͼƬ��ʱ�رն�ʱ��
    slide_image.hover(function () {
        clearInterval(time);
    }, function () {
        time = setInterval(move_l, 2500);
    });
    //��꽹����ԲȦ��ť��ʱ�رն�ʱ��
    circle_btn.hover(function () {
        clearInterval(time);
    }, function () {
        time = setInterval(move_l, 2500);
    });
    //��꽹�������Ұ�ť��ʱ�رն�ʱ��
    $(".slide-btn").hover(function () {
        clearInterval(time);
    }, function () {
        time = setInterval(move_l, 2500);
    });


    //�������ťʱ
    btn_l.click(function () {
        move_l();
    });

    //������Ұ�ťʱ
    btn_r.click(function () {
        move_r();
    });

    function move_l() {
        l++;
        if (l == len) {                               //��l��ֵ�����ֲ�ͼƬ����󳤶�(����ʼ�ڶ���)
            slide_image.css({left: 0});                 //���ֲ�ͼ���س�ʼλ��
            l = 1;                                    //���ֵڶ���ͼƬ
        }
        slide_image.stop().animate({left: -l * 1150}, 500);

        if (l == len - 1) {                           //�����������һ��ͼƬ
            //Ϊ��һ��ԲȦ��ť������������Ƴ�ͬ��Ԫ���ϵ�����
            circle_btn.eq(0).addClass("circle-btn-on").siblings().removeClass("circle-btn-on");
        } else {
            //Ϊ��ǰ��ԲȦ��ť������������Ƴ�ͬ��Ԫ���ϵ�����
            circle_btn.eq(l).addClass("circle-btn-on").siblings().removeClass("circle-btn-on");
        }
    }

    function move_r() {
        l--;
        if (l == -1) {                                //��l��ֵ����-1ʱ
            slide_image.css({left: -(len - 1) * 1150});  //���ֲ�ͼ�������һ��ͼƬ��λ��
            l = len - 2;                              //���ֵ����ڶ���ͼƬ
        }
        slide_image.stop().animate({left: -l * 1150}, 500);

        circle_btn.eq(l).addClass("circle-btn-on").siblings().removeClass("circle-btn-on");

    }
});
/**
 * Created by Administrator on 2016/4/27 0027.
 */
