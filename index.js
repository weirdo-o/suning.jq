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
            big.animate({left: -w+ 'px'}).css({left: 0})

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

    //大聚惠
    // function dajuhui(arr) {
    //     let now=0,next=0;
    //     let box=$(arr);
    //     let lis=$('.dajuhui-lisbox',box);
    //     let flag=true;
    //     $('.right').click(function () {
    //         next=now+1;
    //         if(next>=lis.length){
    //             next=0;
    //         }
    //         lis.eq(next).css('left','1000px').animate({left:0}).end().eq(now).animate({left:-1000});
    //         now=next;
    //     });
    //     $('.left').click(function () {
    //         next=now-1;
    //         if(next<0){
    //             next=lis.length-1;
    //         }
    //         lis.eq(next).css('left','-1000px').animate({left:0}).end().eq(now).animate({left:1000});
    //         now=next;
    //     });
    // }
    // dajuhui('.big','.djh-bottom');


// 侧导航 // 头部隐藏
    let floor = document.querySelectorAll('.floor .diwuceng')
    let celan = document.querySelector('.aside2')
    let aside = document.querySelectorAll('.aside2-list li')
    let h = document.documentElement.clientHeight
    let anniu = document.querySelector('.as-di')
    let hidden = document.querySelector('.hidden')
    let djh = document.querySelector('.dajuhui')
    // let flag=true
    let out = true
    let back = false
    let aaa = true
    let bbb = false
    window.onscroll = function () {
        if (!flag) {
            return
        }
        let tops = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop
        if (tops >= djh.offsetTop) {
            if (out) {
                out = false
                hidden.style.display = 'block'
                back = true
            }
        } else {
            if (back) {
                back = false
                hidden.style.display = 'none'
                out = true
            }
        }
        if (tops >= floor[0].offsetTop - 300) {
            if (aaa) {
                aaa = false
                animate(celan, {opacity: 1}, 100, function () {
                    bbb = true
                })
            }
        } else {
            if (bbb) {
                bbb = false
                animate(celan, {opacity: 0}, 100, function () {
                    aaa = true
                })
            }
        }

        floor.forEach(function (val, index) {
            if (tops >= val.offsetTop + 400 - h) {
                aside.forEach(function (va) {
                    va.classList.remove('active')
                })
                aside[index].classList.add('active')
            }
        })
    }
    anniu.onclick = function () {
        animate(document.body, {scrollTop: 0})
        animate(document.documentElement, {scrollTop: 0}, 200, function () {
        })
    }
    aside.forEach(function (al, index) {
        al.onclick = function () {
            flag = false
            aside.forEach(function (va) {
                va.classList.remove('active')
            })
            al.classList.add('active')
            let to = floor[index].offsetTop
            animate(document.body, {scrollTop: to})
            animate(document.documentElement, {scrollTop: to}, function () {
                flag = true
            })
        }
    })

    let fl = document.querySelector('.fenleibox')
    let flcl = document.querySelector('.fenleibox .celan')
    fl.onmouseover = function () {
        flcl.style.display = 'block'
    }
    fl.onmouseout = function () {
        flcl.style.display = 'none'
    }



})
