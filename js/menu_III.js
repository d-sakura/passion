function isSmartPhone() {//バーガーSP判別の設定
    if (window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches) {
      return true;
    } else {
      return false;
    }
  }

document.querySelector('.bagger').addEventListener('click', function () {
    var target = this;
    var menu = document.querySelector('.bagger-menu')

    target.classList.toggle('hide');
    
    setTimeout(function () {
        target.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    }, 600)
});

$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    arrows: true,
    centerPadding: '10%',
    adaptiveHeight: true,
    zIndex: 10,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    responsive: [{//レスポンシブ
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});
$(".full").slick({
    arrows: false,
    // dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 3000,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    zIndex: 5,

});

$(window).scroll(function () {//バーガー

    　if (isSmartPhone()) {//SP用
        var top = $('.header-bottom').offset().top;
        var baggerTop = $('.bagger').offset().top;

        if (baggerTop >= top){
            $('.bagger span').css('border-left-color', 'rgb(33, 76, 129)');
            $('.bagger-menu').css('background', 'rgb(33, 76, 129)').css('opacity', '1');
        } else {
            $('.bagger span').css('border-left-color', '#eee');
            $('.bagger-menu').css('background', 'rgba(33, 76, 129, 0.8)').css('opacity', '0.8');
        }

    } else {//PC用
        var top = $('#contents').offset().top;//#contentsより上
        var baggerTop = $('.bagger').offset().top;//.baggerより上

        if (baggerTop >= top) {//.baggerがtopの位置（領域)を超えたら（数値が大きくなったら）
            $('.bagger span').css('border-left-color', 'rgb(33, 76, 129)');
            $('.bagger-menu').css('background', 'rgb(33, 76, 129)').css('opacity', '1');
        } else {
            $('.bagger span').css('border-left-color', '#eee');
            $('.bagger-menu').css('background', 'rgba(33, 76, 129, 0.8)').css('opacity', '0.8');

        }
    }

    

})
// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

    // ふわっ
    $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top-50;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
      }else{
      $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
      }
      });
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述
  
  // 画面が読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function(){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
  