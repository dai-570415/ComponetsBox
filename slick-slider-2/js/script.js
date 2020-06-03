(function($){
	$(window).load(function(){
		let slickbase = $('#slick-main');
		let timeline = 5000;

		// ズームさせるためのslick側の設定
		slickbase.slick({
			fade: true,              // fadeモードで動作させる
			autoplay: true,          // autoplayモードを有効化する
			autoplaySpeed: timeline, // [重要]画像の切り替えのタイミングをautoplaySpeedで取っておく
			speed: 0,                // [重要]通常はスライド自体の速度をこのプロパティで設定するがゼロに設定する(タイミング制御はCSS側で設定するため)
			pauseOnHover: false,     // 徐々にズームをさせるために一時停止は意味を持たないため無効化
			pauseOnFocus: false,     // 上に同じ
			swipe: false,            // [重要]徐々にズームをかける都合上、組込側が想定している挙動にするため、スワイプは無効化
			swipeToSlide: false,     // 上に同じ
			slidesToShow: 1,         // スライド数は1
			slidesToScroll: 1,       // スライドのスクロール数は1
			dots: false,              // ページングくらいは出したいのでdotはtrueで
			arrows: false,           // ページャーも一応設定可能だが、今回は扱わない
			infinite: true,          // 永続させる
		}).on('beforeChange', function(event, slick, currentSlide){
			let slidebase = $(this).parents();
			// slick-activeを抜けた際にエフェクトの継続をかけるために付与
			slidebase.find('.slick-slide').removeClass('slick-continue');
			slidebase.find('.slick-active').addClass('slick-continue');
		});

		// 以下は初回表示の際にスライドをスタートさせるための設定
		let firstslide = slickbase.find('.slick-slide:nth-child(1)');
		firstslide.removeClass('slick-active');
		window.setTimeout(function(){
			firstslide.addClass('slick-active');
		}, 1);

		// slick-dotの設定
		$('.slick-dots li button').on('click', function(e){
			if( !　$(this).parent().hasClass('slick-active') ){
				$('.slick-slide').removeClass('slick-active slick-continue');
			}else{
				// slick-activeになっている要素のページング押下を無効化
				e.preventDefault();
			}
		});
	});
})(jQuery);