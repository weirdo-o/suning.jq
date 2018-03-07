/**
 * Created by ow on 2018/1/28.
 */
window.onload = function () {
    let n = 0;
    let lis = document.querySelectorAll('.bannerpic li');
    let banner = document.querySelector('.bannertu')
    let right = document.querySelector('.jiantoudi.right')
    let left = document.querySelector('.jiantoudi.left')
    let cirs = document.querySelectorAll('.lunbodian li')

    function move() {
        n++;
        if (n >= lis.length) {
            n = 0;
        }
        lis.forEach(function (dom, index) {
            dom.classList.remove('active');
            cirs[index].classList.remove('active')
        })
        lis[n].classList.add('active')
        cirs[n].classList.add('active')

    }

    let t = setInterval(move, 2000)
    banner.onmouseover = function () {
        clearInterval(t)
    }
    banner.onmouseout = function () {
        t = setInterval(move, 2000)
    }
    let flag = true
    right.onclick = function () {
        if (!flag) {
            return
        }
        flag = false
        move()
    }
    left.onclick = function () {
        if (!flag) {
            return
        }
        flag = false
        n--;
        if (n < 0) {
            n = lis.length - 1
        }
        lis.forEach(function (dom, index) {
            dom.classList.remove('active');
            cirs[index].classList.remove('active')
        })
        lis[n].classList.add('active')
        cirs[n].classList.add('active')
    }

    cirs.forEach(function (val, index) {
        val.onclick = function () {
            if (!flag) {
                return
            }
            flag = false
            lis.forEach(function (va, ind) {
                va.classList.remove('active')
                cirs[ind].classList.remove('active')
            })
            lis[index].classList.add('active')
            this.classList.add('active')
            n = index
        }
    })

    lis.forEach(function (dom) {
        dom.addEventListener('transitionend', function () {
            flag = true
        })
    })

// 大聚惠
    let nav = document.querySelectorAll('.djh-top .dajuhui_top_center');
    let list = document.querySelectorAll('.dajuhui .djh-bottom')
    nav.forEach(function (val, index) {
        val.onmouseover = function () {
            nav.forEach(function (a, b) {
                a.classList.remove('active1')
                list[b].classList.remove('activebtm')
            })
            this.classList.add('active1')
            list[index].classList.add('activebtm')
        }
    })


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

// 节点轮播
    function jiedian(box) {
        let big = box.querySelector('.big')
        let right1 = box.querySelector('.right')
        let left1 = box.querySelector('.left')
        // let flag=true
        let w = box.offsetWidth

        function move() {
            if (!flag) {
                return
            }
            flag = false
            let first = big.firstElementChild
            animate(big, {left: -w}, function () {
                big.appendChild(first)
                big.style.left = 0
                flag = true
            })
        }

        right1.onclick = function () {
            move()
        }
        left1.onclick = function () {
            if (!flag) {
                return
            }
            flag = false
            let last = big.lastElementChild
            let first = big.firstElementChild
            big.insertBefore(last, first)
            big.style.left = -w + 'px'
            animate(big, {left: 0}, function () {
                flag = true
            })
        }
    }

    // 大聚惠
    let box = document.querySelector('.djh-bottom')
    jiedian(box)
    let spc = document.querySelector('.sp-cen-box')
    jiedian(spc)

    // 排行双下标轮播

    let now = 0;
    let next = 0;
    let boxph = document.querySelector('.paihang-xia')
    let ph = document.querySelectorAll('.paihang-xia .phb-list')
    let rightph = document.querySelector('.paihang .jiantoudi.right')
    let leftph = document.querySelector('.paihang .jiantoudi.left')
    let cirsph = document.querySelectorAll('.ph-yuandian li')
    let width = parseInt(window.getComputedStyle(boxph, null).width)
    // let flag=true
    function moveph() {
        if (!flag) {
            return
        }
        flag = false
        next = now + 1
        if (next >= ph.length) {
            next = 0
        }
        ph[next].style.left = '100%'
        animate(ph[now], {left: -width}, 300)
        animate(ph[next], {left: 0}, 300, function () {
            flag = true
        })
        cirsph[now].classList.remove('active')
        cirsph[next].classList.add('active')
        now = next
    }

    rightph.onclick = function () {
        moveph()
    }
    leftph.onclick = function () {
        if (!flag) {
            return
        }
        flag = false
        next = now - 1
        if (next < 0) {
            next = ph.length - 1
        }
        ph[next].style.left = '-100%'
        animate(ph[now], {left: width}, 300)
        animate(ph[next], {left: 0}, 300, function () {
            flag = true
        })
        cirsph[now].classList.remove('active')
        cirsph[next].classList.add('active')
        now = next
    }
    cirsph.forEach(function (val, index) {
        val.onclick = function () {
            if (!flag) {
                return
            }
            flag = false
            next = index
            if (next > now) {
                ph[next].style.left = '100%'
                animate(ph[now], {left: -width}, 300)
                animate(ph[next], {left: 0}, 300, function () {
                    flag = true
                })
                cirsph[now].classList.remove('active')
                cirsph[next].classList.add('active')
                now = next
            } else if (next < now) {
                ph[next].style.left = '-100%'
                animate(ph[now], {left: width}, 300)
                animate(ph[next], {left: 0}, 300, function () {
                    flag = true
                })
                cirsph[now].classList.remove('active')
                cirsph[next].classList.add('active')
                now = next
            } else {
                flag = true
            }
        }
    })


// 头部下拉
    let navli = document.querySelector('.wangzhan1')
    navli.onmouseenter = function () {
        let hidden = this.querySelector('.wangzhan')
        if (!hidden) {
            return
        }
        hidden.style.display = 'block'
        animate(hidden, {height: 250}, 200)
    }
    navli.onmouseleave = function () {
        let hidden = this.querySelector('.wangzhan')
        if (!hidden) {
            return
        }
        hidden.style.display = 'none'
        animate(hidden, {height: 0}, 200)
    }


    let navli1 = document.querySelector('.wangzhan2')
    navli1.onmouseenter = function () {
        let hidden = this.querySelector('.wangdis')
        if (!hidden) {
            return
        }
        hidden.style.display = 'block'
        animate(hidden, {height: 130}, 200)
    }
    navli1.onmouseleave = function () {
        let hidden = this.querySelector('.wangdis')
        if (!hidden) {
            return
        }
        hidden.style.display = 'none'
        animate(hidden, {height: 0}, 200)
    }

    //
    let navli2 = document.querySelector('.wangzhan3')
    navli2.onmouseenter = function () {
        let hidden = this.querySelector('.wandis')
        if (!hidden) {
            return
        }
        hidden.style.display = 'block'
        animate(hidden, {height: 130}, 200)
    }
    navli2.onmouseleave = function () {
        let hidden = this.querySelector('.wandis')
        if (!hidden) {
            return
        }
        hidden.style.display = 'none'
        animate(hidden, {height: 0}, 200)
    }

    let navli3 = document.querySelector('.toubu-right .right3')
    navli3.onmouseenter = function () {
        let hidden = this.querySelector('.dingdan')
        if (!hidden) {
            return
        }
        hidden.style.display = 'block'
        animate(hidden, {height: 130}, 200)
    }
    navli3.onmouseleave = function () {
        let hidden = this.querySelector('.dingdan')
        if (!hidden) {
            return
        }
        hidden.style.display = 'none'
        animate(hidden, {height: 0}, 200)
    }

    let navli4 = document.querySelector('.toubu-right .right3.right0')
    navli4.onmouseenter = function () {
        let hidden = this.querySelector('.yigou')
        if (!hidden) {
            return
        }
        hidden.style.display = 'block'
        animate(hidden, {height: 170}, 200)
    }
    navli4.onmouseleave = function () {
        let hidden = this.querySelector('.yigou')
        if (!hidden) {
            return
        }
        hidden.style.display = 'none'
        animate(hidden, {height: 0}, 200)
    }

    let navli5 = document.querySelector('.toubu-right .right3.right9')
    navli5.onmouseenter = function () {
        let hidden = this.querySelector('.gouwu')
        if (!hidden) {
            return
        }
        hidden.style.display = 'block'
        animate(hidden, {height: 170}, 200)
    }
    navli5.onmouseleave = function () {
        let hidden = this.querySelector('.gouwu')
        if (!hidden) {
            return
        }
        hidden.style.display = 'none'
        animate(hidden, {height: 0}, 200)
    }

    let navli6 = document.querySelector('.toubu-right .right3.right09')
    navli6.onmouseenter = function () {
        let hidden = this.querySelector('.shouji')
        if (!hidden) {
            return
        }
        hidden.style.display = 'block'
        animate(hidden, {height: 220}, 200)
    }
    navli6.onmouseleave = function () {
        let hidden = this.querySelector('.shouji')
        if (!hidden) {
            return
        }
        hidden.style.display = 'none'
        animate(hidden, {height: 0}, 200)
    }




}

