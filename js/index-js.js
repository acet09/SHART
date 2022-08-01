$(document).ready(function(){
    



    // header 영역
    // 좌측 header nav
    $('.menu1 nav').hover(function(){
        $('.menu1 .sub').stop().slideDown();
        $('.sub_bg').stop().slideDown();
    }, function() {
        $('.menu1 .sub').stop().slideUp();
        $('.sub_bg').stop().slideUp();
    });
    // 우측 header nav
    $('.menu2 nav').hover(function(){
        $('.menu2 .sub').stop().slideDown();    
        $('.sub_bg').stop().slideDown({
            // easing 사용법
            duration:500,
            easing:"easeOutBack"
        });
    }, function() {
        $('.menu2 .sub').stop().slideUp();
        $('.sub_bg').stop().slideUp();
    });       
    
    // 검색 메뉴 slideDown 
        $('.search a').click(function(){
            $('.search_area').stop().slideDown();
            $('.search_area .in_bg').css({
                opacity : 0.8
            });
    });
        $('.search_area > a').click(function(){
            $('.search_area').stop().slideUp();
            $('.search_area .in_bg').css({
                opacity : 0
            });
    });    
    

    // visual 영역
    // swiper 제이쿼리 (버튼)
    var swiper = new Swiper(".mySwiper", {
        
        // spaceBetween : 슬라이드 이미지간의 간격조절(드레그 해서 확인해보자)
        spaceBetween: 1500,
        loop: true, 

        navigation: {   
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    // tab 영역
    // tab메뉴 영역의 버튼에 클릭이벤트 설정
    $('.tab_btn ul li a').on('click',function(e){      
        // a태그 링크 속성 막음
        e.preventDefault();  
        // 클릭한 버튼(a태그)의 부모객체(li)의 인덱스 번호를 읽어서 변수 btnnum 저장      
        var btnNum=$(this).parent('li').index();
        
        // 클릭 남발해도 1번만 실행(감싸기)
        // .hasClass() : 클래스 속성을 갖고 있는지 검사 ** .find(); : 하위 요소중 특정요소 찾는 메소드
        // 만약 클릭한 버튼(a태그)에 active속성 없다면
        if(!($(this).hasClass('active'))){

        // 모든 버튼 (a태그)의 active 제거
        $('.tab_btn ul li a').removeClass('active');
        // 클릭한 버튼(a버튼) active 설정
        $(this).addClass('active');  
        // 이미지 움직이는 기능을 가진 함수 호출

        // 인덱스번호(btnNum)을 함수 매개변수로 넘김
        imgMove(btnNum);   // 가운데 이미지    
        desMove(btnNum);   // 우측 설명글 

        }
    });

    // 가운데 이미지 함수
    // a태그 클릭 방지
    $('.tab_img ul li a').click(function(e){
        e.preventDefault(); 
    });
    function imgMove(btnNum){
        // 이미지(li)의 가로크기를 읽어서 imgwidth변수에 저장
        var imgWidth=$('.tab_img ul li').width();
        // 클릭한 버튼의 인덱스번호* 이미지의 가로길이만큼 왼쪽 이동
        var moving=-(btnNum*imgWidth);
        $('.tab_img ul').stop().animate({
            left:moving
        });
    };
    // 우측 설명글 함수
        $('.tab_des ul li a').click(function(e){
        e.preventDefault(); 
        });

        var currentDes=$('.tab_des ul li:first');
        var oldDes='';    
        function desMove(btnNum){

        oldDes=currentDes;        
        currentDes=$('.tab_des ul li').eq(btnNum);
        oldDes.stop().animate({ opacity:0, top:-100 },100,  

        function(){ oldDes.delay(100).css({opacity:1, top:600 },200);});
        // currnetDes에 있는 li객체는 아래에서 올라오면서 나타남
        currentDes.stop().delay(200).animate({
            opacity:1, top:100 
        },200);        
    }    
    
    
    
    // 섹션 collection 영역    
    // 처음 시작 화면 안 겹치게 하는 태그
    $('.t1').addClass('active');
    $('.t2').removeClass('active');
    $('.new').click(function(e){
        e.preventDefault();
        $('.t1').addClass('active');
        $('.t2').removeClass('active');
        $('.new').addClass('active');
        $('.best').removeClass('active');
    });
    $('.best').click(function(e){
        e.preventDefault();
        $('.t1').removeClass('active');
        $('.t2').addClass('active');
        $('.new').removeClass('active');
        $('.best').addClass('active');
    });

    var swiper = new Swiper(".mySwiper2", {        
        // spaceBetween : 슬라이드 이미지간의 간격조절(드레그 해서 확인해보자)
        spaceBetween: 100,
        loop: false, 
        navigation: {   
            nextEl: ".myNext2",
            prevEl: ".myPrev2",            
        },
        scrollbar: {
            el : ".bar1"
        },
    });
    var swiper = new Swiper(".mySwiper3", {        
        // spaceBetween : 슬라이드 이미지간의 간격조절(드레그 해서 확인해보자)
        spaceBetween: 100,
        loop: false, 
        navigation: {   
            nextEl: ".myNext3",
            prevEl: ".myPrev3",
        },
        scrollbar: {
            el : ".bar2"            
        },
    });
    // benner SHNEWS
    var bannerWidth=$('.banner_img ul li').innerWidth();
    // banner버튼을 클릭하면 이미지가 좌우로 이동
    $('.banner_btn ul li').click(function(e){
        e.preventDefault();
        $('.banner_btn ul li').removeClass('active');
        $(this).addClass('active');
        var bannerNum=$(this).index();
        var bannerMove=bannerNum*bannerWidth;
        $('.banner_img ul').stop().animate({
            left:-bannerMove
        });
    });

    // family 영역
    $('.fa_con').hide();
    $('.family .fa_title span').click(function(e){
        e.preventDefault();
        $('.fa_con').show();
    });
    $('.family .fa_con > a').click(function(e){
        e.preventDefault();
        $('.fa_con').hide();
    });



    // top버튼 작동 jqeury
    $('.top').click(function(){
        $('html,body').animate({
            scrollTop:0
        });
    });
    // tOP버튼 스티키 애니메이션 (오브젝트 위치값 고정)
    $(window).scroll(function(){
        // 만약 윈도우 아래족에서 footer높이만큼 스크롤되면 걸리는 애니메이션
        // $(window).scrollTop()은 body문서의 맨 위쪽 위치값
        // $(window).height() : 브라우저 높이값
        // $('footer').offset().top : footer의 위쪽 위치값이 브라우저의 높이값과 떨어져 있는 거리
        if($(window).scrollTop()+$(window).height() >= $
        ('footer').offset().top){
            // .top에 active 클래스 추가
            $('.top').addClass('active');
            // 그렇지 않으면
        }else{
            // .top에 active 클래스 제거
            $('.top').removeClass('active');
        }
    });



    // site 사이트 영역 
    // 마우스 스크롤 안 움직이게 하는 태그형식
    // $('.site').on('scroll touchmove mousewheel', function(event) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     return false;
    //     });
    
    $('.total_menu').click(function(){
        $('.site').animate({
            right:0
        },700, function(){
            navAni1();
        });        
    });
    $('.site_close').click(function(){
        $('.site').animate({
            right:'-100%'
        },700, function(){
            navAniEnd();
        });
    });
    
    // 종류 버튼 클릭시 글자 애니(리셋)
    function navAniEnd(){
        // site메뉴 크기 안튀나오게 함
        $('body').removeClass('active');

        $('.site_menu nav > ul > li').css({
            'opacity' :0,
            'margin-top' : '700px',
        })
        $('.site .site_banner > ul > li').css({
            'opacity':0,
            'margin-top':'450px'
            })
        $('.site_nav > ul > li').css({
            'opacity':0,
            'margin-top':'750px'
            }) 
        $('.site .site_nav > ul > li').css({
            'opacity':0,
            'margin-top':'1090px'
        })
    }
    navAniEnd();    

    // 종류 버튼 클릭시 글자 애니(동작)
    // 아래서부터 위로 쫘르륵 나오는 애니메이션    
    function navAni1(){
        // site메뉴 크기 안튀나오게 함
        $('body').addClass('active');

        // each : 갯수만큼 반복해주세요 명령어
        $('.site_menu nav > ul > li').each(function(){
            var liNum=$(this).index();
            $(this).delay(200*liNum).animate({
            'opacity' :1,
            'margin-top': '0px'
            });     
        });
        
        $('.site .site_banner > ul > li').each(function(){
        var liNum2=$(this).index();
        $(this).delay(200*liNum2).animate({
            'opacity' :1,
            'margin-top': '0px'
            });     
        });
        
        $('.site_nav > ul > li').each(function(){
        var liNum3=$(this).index();
        $(this).delay(200*liNum3).animate({
            'opacity' :1,
            'margin-top': '0px'
            });     
        });
        
        $('.site .site_nav > ul > li').each(function(){
            var liNum4=$(this).index();
            $(this).delay(200*liNum4).animate({
            'opacity' :1,
            'margin-top': '0px'
            });     
        });        
    }   

    
    // 사이트 메뉴 애니메이션 모음
    $('.site_bg ul li').removeClass('active');
    $('.site_bg ul li:first').addClass('active');

    // site mouse hover animate 사이드 애니메이션
    $('.site_menu nav > ul > li > a ').hover(function(){

        // 만약 클릭한 메뉴(a태그)에 active가 없으면
        
        if(!($(this).parent('li').hasClass('active'))){
            //모든 메뉴에서 active제거
            $('.site_menu nav > ul > li').removeClass('active');
            // 클릭한 a태그만 active클래스 추가
            $(this).parent('li').addClass('active');

        var siteNum=$(this).parent('li').index();

        $('.site_bg ul li').each(function(){
            if(siteNum==$(this).index()){
            $('.site_bg ul li').removeClass('active');
            $(this).addClass('active');
            }
        });      
        
        // 파란줄 애니메이션
        $('.site_menu nav > ul > li > p').removeClass('active');
        $(this).next().addClass('active');

        // sub메뉴 애니메이션
        $('.site_menu nav .sub ').hide();
        $(this).next().next().slideDown();
        } //if문 end
    });

    // .site_menu nav > ul > li 마우스 아웃 했을때
    $('.site_menu nav > ul > li').mouseleave(function(){
        $(this).removeClass('active');
        $(this).find('p').removeClass('active');
        $(this).find('.sub ').hide();
        $('.site_bg ul li').removeClass('active');
        $('.site_bg ul li:first').addClass('active');
    });    
    

});






