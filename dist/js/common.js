// Code by ZenLiver
// 名古轩

$(function () {

    // 全局变量
    var screenWidth = $(window).width();
    var screenHeight = $(window).height();

    // 启动sr
    window.sr = ScrollReveal({
        reset: true,
        mobile: true,
        easing: 'ease',
        distance: '30px'
    });

    // 给当前页的顶部导航项添加active样式
    var currentPagePath=location.pathname;
    var currentPagePathProcessed = currentPagePath.slice(1);
    console.log(currentPagePathProcessed);
    var navbarHrefs=new Array();
    var navbarLinks=$(".nav.navbar-nav li a");
    for (var i = 0; i < navbarLinks.length; i++) {
        navbarHrefs[i]=navbarLinks.eq(i).attr("href");
        console.log(navbarHrefs);
    }
    for (var n = 0; n < navbarLinks.length; n++) {
        if (navbarHrefs[n].indexOf(currentPagePathProcessed)>=0) {
            // navbarHrefs[n].slice(0,-5)
            $(".nav.navbar-nav li").removeClass("active");
            $(".nav.navbar-nav li a").eq(n).parent().addClass("active");
            break;
        }
    }

    // 去除active的导航项前面的border-right
    $(".nav.navbar-nav li.active").prev().find("a").css("border-right","none");

    $(".join-process .thumbnail").mouseover(function () {
        $(".join-process .thumbnail").removeClass("active");
        $(this).addClass("active");
    });

    // 手机下折叠菜单添加动画效果
    var navbarLis=$(".navbar-nav li");
    var animationDelay=0;
    for (var i = 0; i < navbarLis.length; i++) {
        navbarLis.eq(i).css("animation-delay",animationDelay+"s");
        animationDelay=animationDelay+0.05;
    }
    $(".navbar-toggle").click(function () {
        $(".navbar-nav li").toggleClass("animated fadeInRight");
        // $(".navbar-nav li").animateCss("fadeInUp");
    });

    // 首页：产品图标区域动画效果
    $(".index_products_body .thumbnail > a > img").mouseover(function () {
        $(this).animateCss("flipInY");
    });
    // $(".index_products_body .thumbnail > a > img").mouseout(function () {
    //     $(this).removeClass("rotateY");
    // });

    // 首页：加盟流程区域鼠标滑过效果
    $(".index_join_circle_item").mouseover(function () {
        $(".index_join_circle_item").removeClass("active");
        $(this).addClass("active");
    });

    // 首页：加盟流程区域sr动画效果
    if (screenWidth >= 768) {
        sr.reveal('.index_join_circle', {
            duration: 2000,
            delay: 100,
            rotate: {z: -30}
        });
    }
    else {
        sr.reveal('.index_join_circle_item', {
            duration: 1500
        });
    }
    sr.reveal('.index_brand_body .col-md-6:nth-child(1)', {
        duration: 1500,
        origin: 'left'
    });
    sr.reveal('.index_brand_body .col-md-6:nth-child(2)', {
        duration: 1500,
        origin: 'right'
    });
    sr.reveal('.index_rongyu_banner', {
        duration: 1500
    });
    sr.reveal('.index_products_body .col-md-4, .index_rongyu_body .col-md-4, .index_rongyu_body .col-md-2', {
        duration: 1500
    });
    sr.reveal('.footer_logo img', {
        duration: 1500,
        scale: 0.5
    });
    sr.reveal('.index_news_body .col-md-7', {
        duration: 1500,
        origin: 'left',
        distance: '10px'
    });
    sr.reveal('.index_news_body .col-md-5', {
        duration: 1500,
        origin: 'right',
        distance: '10px'
    });


    // footer：微信二维码modal垂直居中
    if (screenWidth >= 768) {
        $("#footer_weixin_modal .modal-dialog").css({
            "margin-bottom": "0",
            "margin-top": (screenHeight-388)/2+"px"
        });
    }
    else {
        $("#footer_weixin_modal .modal-dialog").css({
            "margin-bottom": "0",
            "margin-top": (screenHeight-358)/2+"px"
        });
    }

    // 手机下自动播放背景音乐


    // function forceSafariPlayAudio() {
    //  audioEl.load(); // iOS 9 还需要额外的 load 一下, 否则直接 play 无效
    //  audioEl.play(); // iOS 7/8 仅需要 play 一下
    //
    //  }
    //
    //   var audioEl = document.getElementById('bgmusic_audio');
    //
    //   // 可以自动播放时正确的事件顺序是
    //  // loadstart
    //  // loadedmetadata
    //  // loadeddata
    //  // canplay
    //  // play
    //  // playing
    //  //
    //  // 不能自动播放时触发的事件是
    //  // iPhone5 iOS 7.0.6 loadstart
    //  // iPhone6s iOS 9.1 loadstart -> loadedmetadata -> loadeddata -> canplay
    //  audioEl.addEventListener('loadstart', function() {
    // //  log('loadstart');
    //  }, false);
    //  audioEl.addEventListener('loadeddata', function() {
    // //  log('loadeddata');
    //  }, false);
    //  audioEl.addEventListener('loadedmetadata', function() {
    // //  log('loadedmetadata');
    //  }, false);
    //  audioEl.addEventListener('canplay', function() {
    // //  log('canplay');
    //  }, false);
    //  audioEl.addEventListener('play', function() {
    // //  log('play');
    //  // 当 audio 能够播放后, 移除这个事件
    //  window.removeEventListener('touchstart', forceSafariPlayAudio, false);
    //  }, false);
    //  audioEl.addEventListener('playing', function() {
    // //  log('playing');
    //  }, false);
    //  audioEl.addEventListener('pause', function() {
    // //  log('pause');
    //  }, false);
    //
    //   // 由于 iOS Safari 限制不允许 audio autoplay, 必须用户主动交互(例如 click)后才能播放 audio,
    //  // 因此我们通过一个用户交互事件来主动 play 一下 audio.
    //  window.addEventListener('touchstart', forceSafariPlayAudio, false);
    //
    // //   audioEl.src = 'http://www.w3school.com.cn/i/song.mp3';

    $("body").on("touchstart",function () {
        var bgmusicAudio = document.getElementById("bgmusic_audio");
        // bgmusicAudio.load();
        bgmusicAudio.play();
        console.log("touchstart");
        // alert("touched!");
    });

});
