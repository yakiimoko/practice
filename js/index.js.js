
//swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    loopAdditionalSlides: 1,
    speed: 300,
  
    autoplay: { // 自動再生させる
        delay: 3000, // 次のスライドに切り替わるまでの時間（ミリ秒）
        disableOnInteraction: false, // ユーザーが操作しても自動再生を止めない
        waitForTransition: false, // アニメーションの間も自動再生を止めない（最初のスライドの表示時間を揃えたいときに）
      }, 

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  

//openmenu
const ham = document.getElementById('js-hamburger'); //js-hamburgerの要素を取得し、変数hamに格納
const bt = document.getElementById('js-btn');
ham.addEventListener('click', function () { //ハンバーガーメニューをクリックしたら
    ham.classList.toggle('active');
    bt.classList.toggle('active');
});
const close = document.getElementById('js-close');
close.addEventListener('click', function() {
   ham.classList.toggle('active');
   bt.classList.toggle('active');
});