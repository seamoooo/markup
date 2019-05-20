var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var ytPlayer;

function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player('player', {
        height: 390,
        width: 640,
        videoId: 'iVstp5Ozw2o',
        playerVars: {//パラメータ
          playsinline: 1,// インライン再生指定
          rel      : 0,// 関連動画出さない
          controls: 0,// コントローラー出さない
          showinfo: 0// タイトルとか動画情報出さない
        },    
        events: {//　イベント
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady() {
  ytPlayer.mute();// ミュートにしてから
  ytPlayer.playVideo();// 再生
}


$(function(){
    $('.slider').slick({
        infinite: true,
        adaptiveHeight: true,
        prevArrow: '<img src="images/arrow-right.png" class="slide-prearrow">',
        nextArrow: '<img src="images/arrow-left.png" class="slide-nextarrow">'
    });
});

$('.hamburger-button').click(function(){
  $('.nav-wrap').toggleClass('is-open');
  $('.body-wrap').toggleClass('is-overlay');
});

$('.close-nav').click(function(){
  $('.nav-wrap').removeClass('is-open');
  $('.body-wrap').removeClass('is-overlay');
})