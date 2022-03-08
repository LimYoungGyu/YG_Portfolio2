$(document).ready(function(){
    // fullpage
    $('#fullpage').fullpage({
        anchors:['intro', 'profile','web','edit','contact'],
        sectionsColor:['','','','',''],
         // section background color 5가지
        //  현재 섹션이 나타난 후 (활성화 된 후, 열린 후)
        afterLoad:function(anchorLink, index){
            // 민액 활성화 된 section이 첫 번째 section이면
            if(index == 1){
                $('.intro .box h1').addClass('active');
                $('.intro .box h2').addClass('active');
                $('.intro .box .fixed').addClass('active');
            }else if(index == 2){
                // 자식객체 애니메이션
                $('.profile h1').addClass('active');
                $('.profile .box > div').addClass('active');
            }else if(index == 3){
                // 자색객체 애니메이션
                $('.web h1').addClass('active');
                $('.web .swiper').addClass('active');
            }else if(index == 4){
                $('.edit h1').addClass('active');
                $('.edit .gallery').addClass('active');
            }else{
                $('.contact  h1').addClass('active');
                $('.contact .contact_wrap').addClass('active');
            }
            
        },
	});
    jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').delay(1500).animate({
			width:jQuery(this).attr('data-percent')
		},3000);
	});
    // swiper slide
    var swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    // edit gallery
    $('.big_img ul li').hide();
    $('.big_img ul li').eq(0).show();    
    $('.thum_img ul li').click(function(){
        var idx=$(this).index();
        $('.big_img ul li').hide();
        $('.big_img ul li').eq(idx).fadeIn();    
    });
    
});