//////////////a성질 제거/////////////////

$("a").click(function (e) {
    e.preventDefault();
});

///////////////////////////
//mo - 햄버거버튼, 검은배경
$(".menu_toggle_btn, #close").on("click", function () {
    $("#mo-menu").toggleClass("on");
});

//mo - 아코디언메뉴
$("#gnb-mo ul li a").click(function (e) {
    e.preventDefault();
    $(this).next().slideUp(),
        $(this).next().is(":visible") || $(this).next().slideDown();
});

//$(".sub-mo").on("click", function () {
//	$(".sub-mo > a:after").toggleClass("on");
//});
////////////////////////////////
var $menu = $(".gnb-pc");
	var $menu_list = $menu.children("li");

	$menu_list.on("mouseenter", function () {
		var $this = $(this);
		$this.addClass("slide");
		$this.children("div").css("z-index", "100").stop().slideDown(500, function () {
			$menu_list.not(".slide").children("div").hide();
			$this.removeClass("slide");
		});
       
	}).on("mouseleave", function () {
		var $this = $(this);
		$this.children("div").css("z-index", "1");
		$menu_list.children("div").hide();
	});


//////////////////////////////////////////////

$(document).on('click', function (event) {
    if (!$(event.target).closest('.dropdown').length) {
        $('.option-list, .search-box').hide();
    }
});
$('.select').click(function (event) {
    //$('.option-list, .search-box').hide();
    $(this).closest('.dropdown').find('.option-list, .search-box').toggle();
    $('.option-list a').click(function () {
        var select = $(this).text();
        $(this).closest('.dropdown').children('.select').text(select);
        $('.option-list, .search-box').hide();
    });
});
/////////////공지사항 상하 슬라이드////////////////
$(document).ready(function () {
    var num = 1;
    var imgs = $(".notice_slider li:first").clone();
    imgs.appendTo(".notice_slider")

    function Slide() {
        if (num > 3) {
            $(".notice_slider").css("margin-top", "0");
            num = 1;
        }
        $(".notice_slider").animate({
            marginTop: "-=40px"
        }, 600, "swing");
        num++;
    }
    setInterval(Slide, 3000);
})

//$(".notice_btn").click(function () {
//    $("#notice").hide();
//});
///////////////메인슬라이드///////////////
$('.slick_slider').slick({
    slide: 'div', //슬라이드 되어야 할 태그
    infinite: true, //무한 반복 옵션 
    slidesToShow: 1, // 한 화면에 보여질 컨텐츠 개수 
    slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수 
    speed: 100, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms) 
    arrows: false,
    dots: true, // 스크롤바 아래 점으로 페이지네이션 여부 
    autoplay: true, // 자동 스크롤 사용 여부 
    autoplaySpeed: 9000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms) 
    pauseOnHover: true, // 슬라이드 이동 시 마우스 호버하면 슬라이더 멈추게 설정
    dotsClass: "slick-dots" //아래 나오는 페이지네이션(점) css class 지정 
});

/*/////////////////tabbtn보너스항공권////////*/

$(".check").click(function () {
    $(this).toggleClass('check_active');
    return false;
});


/*/////////////////tabbtntap//////*/
var tabBtn = $(".top_btn_tap > li")

tabBtn.click(function () {
    var target = $(this);
    var index = target.index();

    tabBtn.removeClass("active");
    target.addClass("active");


});
///////////////////캘린더 달력 생성///////////////////
$(function () {

    $("#startdate").datepicker({

    });

});
$(function () {

    $("#enddate").datepicker({

    });

});

////////////////인원수 입력/////////////////
const inputWrapperList = document.getElementsByClassName('input-number-wrapper');

for (let wrapper of inputWrapperList) {
    const input = wrapper.querySelector('input');
    const incrementation = +input.step || 1;

    wrapper.querySelector('.increase').addEventListener('click', function () {
        incInputNumber(input, incrementation);
    });

    wrapper.querySelector('.decrease').addEventListener('click', function () {
        incInputNumber(input, "-" + incrementation);
    });
}

function incInputNumber(input, step) {
    if (!input.disabled) {
        let val = +input.value;

        if (isNaN(val)) val = 0;
        val += +step;

        if (input.max && val > input.max) {
            val = input.max;
        } else if (input.min && val < input.min) {
            val = input.min;
        } else if (val < 0) {
            val = 0;
        }

        input.value = val;
        input.setAttribute("value", val);
    }
};
//////////////////부가서비스////////////////////
$(function () {
    $('.rotating-slider').rotatingSlider({
        slideHeight: Math.min(140, window.innerWidth - 20),
        slideWidth: Math.min(100, window.innerWidth - 20),
    });
});

$('.service_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: $('.service_next'),
    prevArrow: $('.service_prev'),
});

/////////////////////특가항공권/////////////////////


$('.price_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
 responsive: [
//    {
//            breakpoint: 1200,
//            settings: {
//                slidesToShow: 4,
//                slidesToScroll: 1,
//                infinite: true,
//                dots: false
//            }
//                },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
                },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
                }
            ]
});

 $('#price_slider_pc').slick({
            autoplay: true,
            autoplaySpeed: 10000,
            slidesToShow: 4,
     prevArrow: $('.price_prev'),
    nextArrow: $('.price_next'),
      responsive: [
    {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
                },
        {
            breakpoint: 1700,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
                }
                             ]
        });

$(".price_slider_bar").slider({
    orientation: "Horizontal",
    range: "min",
    min: 1,
    max: 6,
    value: 4,
    infinite: false,
    refresh: '',
    slide: function (event, ui) {
        jQuery('.price_slider').slick('slickGoTo', ui.value - 1);
        console.log(ui.value - 1);
    }
});
//////////////이벤트///////////////////


$('.event_slider').slick({
    autoplay: true,
    autoplaySpeed: 10000,
});
$('.event_slider_tab').slick({
    autoplay: true,
    autoplaySpeed: 10000,
});
$('.event_slider_pc').slick({
    autoplay: true,
    autoplaySpeed: 10000,
});

//////////////제휴서비스///////////////////


$('.partner_slider').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    prevArrow: $('.partner_prev'),
    nextArrow: $('.partner_next')
});

$('.partner_slider_pc').slick({
            autoplay: true,
            autoplaySpeed: 10000,
            slidesToShow: 3,
    prevArrow: $('.partner_prev2'),
    nextArrow: $('.partner_next2')
        });