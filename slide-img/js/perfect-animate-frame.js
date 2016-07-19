function startMove(obj, json, fn) {
    clearInterval(obj.timer);         //防止与页面上其他定时器的冲突，使每个定时器都互不干扰
    obj.timer = setInterval(function () {
        var flag = true;                //假设所有运动都达到了目标值
        for (var attr in json) {
            //取当前值
            var icur = 0;
            if (attr == 'opacity') {
                icur = Math.round(parseFloat(getStyle(obj, attr)) * 100);  //*100会有误差所以要用Math.round()四舍五入
            } else {
                icur = parseInt(getStyle(obj, attr));
            }
            //计算速度
            var speed = (json[attr] - icur) / 10;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            //检测所有运动是否到达目标
            //如果不是所有运动都到达了终点
            if (icur != json[attr]) {
                flag = false;
            }
            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity:' + (icur + speed) + ')';
                obj.style.opacity = (icur + speed) / 100;
            } else {
                obj.style[attr] = icur + speed + 'px';
            }
        }
        //如果所有运动都到达了终点
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 18)
}
//获取样式方法
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}
