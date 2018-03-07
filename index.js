/**
 * Created by ow on 2018/3/4.
 */
$(function () {
// banner图
    let div = $('.bannertu')
    let pic = $('.bannerpic li')
    let left = $('.jiantoudi.left').eq(0)
    let right = $('.jiantoudi.right').eq(0)
    let cirs = $('.lunbodian li')
    let n = 0

    function move() {
        n++;
        if (n >= pic.length) {
            n = 0
        }
        pic.removeClass("active").eq(n).addClass("active");
        cirs.removeClass("active").eq(n).addClass("active");
    }

    let time = setInterval(move, 3000);
    div.mouseenter(function () {
        clearInterval(time)
    })
    div.mouseleave(function () {
        time = setInterval(move, 2000)
    })
    let flag = true
    cirs.click(function () {
        let index = $(this).index();
        pic.removeClass("active").eq(index).addClass("active");
        cirs.removeClass("active").eq(index).addClass("active");
        n = index
    })

    right.click(function () {
        clearInterval(time)
        move()
    })
    left.click(function () {
        clearInterval(time)
        n--;
        if (n < 0) {
            n = pic.length - 1
        }
        pic.removeClass("active").eq(n).addClass("active");
        cirs.removeClass("active").eq(n).addClass("active");
    })


// 头部下拉
    function touhide(a, b) {
        $(a).mouseenter(function () {
            $(b).slideDown(200)
        })
        $(a).mouseleave(function () {
            $(b).slideUp(200)
        })
    }

    touhide(".wangzhan1", ".wangzhan")
    touhide(".wangzhan2", ".wangdis")
    touhide(".wangzhan3", ".wandis")
    touhide(".rightd", ".dingdan")
    touhide(".right0", ".yigou")
    touhide(".right9", ".gouwu")
    touhide(".right09", ".shouji")

// 大聚惠
    function jiedian(box) {
        let big = box.children('.big')
        let right1 = box.children('.right')
        let left1 = box.children('.left')
        let w = box.width()
        function move() {
            let last = big.children().last()
            let first = big.children().first()
            first.after(last)
            big.animate({left: -w+ 'px'}, function () {
                big.css({left: 0})
            })

        }
        right1.click(function () {
            move()
        })
        left1.click(function () {
            let last = big.children().last()
            let first = big.children().first()
            last.after(first)
            big.css({left: -w + 'px'}).animate({left: 0})
        })
    }

    let box = $('.djh-bottom')
    jiedian(box)
    let spc = $('.sp-cen-box')
    jiedian(spc)


// 大聚惠
    let nav = $('.djh-top .dajuhui_top_center');
    let list = $('.dajuhui .djh-bottom')
    nav.mouseenter(function () {
        nav.removeClass('active1').eq($(this).index() - 1).addClass('active1')
        list.removeClass('activebtm').eq($(this).index() - 1).addClass('activebtm')

    })

// 侧导航 // 头部隐藏
//     let floor = $('.floor .diwuceng')
//     let celan = $('.aside2')
//     let aside = $('.aside2-list li')
//     let h = document.documentElement.clientHeight
//     let anniu = $('.as-di')
//     let hidden = $('.hidden')
//     let djh = $('.dajuhui')
//     $(window).scroll(function () {
//         let tops=
//
//     })

})