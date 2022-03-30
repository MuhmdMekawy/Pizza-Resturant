window.onload = function(){
    $('.loading').fadeOut(1000).parent().css({
        "overflow-y" : "scroll" ,
        "overflow-x" : "hidden" 
    });
    $('.nav').show(1000)
    $('.styles').show(1000)
    $('.styles .content .left').show(1000)
    $('.nav').css({
        "z-index" : "99"
    })
}
$(document).ready(function(){
    $('.home-slider').owlCarousel({
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('.offcanvas.show').show(function(){
        $('.circles').hide(100)
    });
    $('.circles ul .one').hover(function(){
        $(this).css({
            "background-image" : "url(images/bg_1.png)" ,
            "background-size" : "cover" , 
            "width" : "60px" ,
            "height" : "60px" ,
            "transition" : "0.3s"
        })
        $(this).children().hide(100);
    } , function(){
        $(this).css({
            "background-image" : "none" ,
            "background-size" : "cover" , 
            "width" : "30px" ,
            "height" : "30px" ,
            "transition" : "0.3s"
        })
        $(this).children().show(100);
    });
    $('.circles ul .two').hover(function(){
        $(this).css({
            "background-image" : "url(images/bg_2.png)" ,
            "background-size" : "cover" , 
            "width" : "60px" ,
            "height" : "60px" ,
            "transition" : "0.3s"
        });
        $(this).children().hide(100);
    } , function(){
        $(this).css({
            "background-image" : "none" ,
            "background-size" : "cover" , 
            "width" : "30px" ,
            "height" : "30px" ,
            "transition" : "0.3s"
        });
        $(this).children().show(100);
    });
    $('.circles ul .three').hover(function(){
        $(this).css({
            "background-image" : "url(images/bg_3.jpg)" ,
            "background-size" : "contain" , 
            "width" : "60px" ,
            "height" : "60px" ,
            "transition" : "0.3s"
        });
        $(this).children().hide(100);
    } , function(){
        $(this).css({
            "background-image" : "none" ,
            "background-size" : "cover" , 
            "width" : "30px" ,
            "height" : "30px" ,
            "transition" : "0.3s"
        });
        $(this).children().show(100);
    });
    $('.circles ul .one').click(function(){
        $('.header .one').slideDown(500);
        $('.header .one').siblings().slideUp(500);
    });
    $('.circles ul .two').click(function(){
        $('.header .two').slideDown(500);
        $('.header .two').siblings().slideUp(500);
    });
    $('.circles ul .three').click(function(){
        $('.header .three').slideDown(500);
        $('.header .three').siblings().slideUp(500);
    });
    console.log($('.statics').offset().top)
    $(window).on('scroll' , function(){
        var src = $(window).scrollTop()
        var hei = $('.statics').offset().top
        var ho = $('.header').offset().top
        var ser = $('.services').offset().top
        var men = $('.meals').offset().top
        var blo = $('.blog').offset().top
        var con = $('.footer').offset().top
        if(src >= ho){
            $('.nav .content .first').css({
                "color" : "var(--main-color)"
            }).parent().siblings().children().css({
                "color" : "white"
            })  
        }
        if(src >= ser -100){
            $('.nav .content .second').css({
                "color" : "var(--main-color)"
            }).parent().siblings().children().css({
                "color" : "white"
            })  
        }
        if(src >= men -100){
            $('.nav .content .third').css({
                "color" : "var(--main-color)"
            }).parent().siblings().children().css({
                "color" : "white"
            })
        }
        if(src >= blo - 100){
            $('.nav .content .fourth').css({
                "color" : "var(--main-color)"
            }).parent().siblings().children().css({
                "color" : "white"
            })
        }
        if(src >= con - 100){
            $('.nav .content .fifth').css({
                "color" : "var(--main-color)"
            }).parent().siblings().children().css({
                "color" : "white"
            })
        }
        if(src >= hei - 300){
            $('.statics .cont .branches').each(function(){
            $(this).prop('counter' , 0).animate({
                counter : 100
            } , {
                    duration : 4000 , 
                    easing : 'linear' ,
                    step : function(e){
                        $(this).text(Math.ceil(e))
                    }
                })
            });
            $('.statics .cont .awards').each(function(){
            $(this).prop('counter' , 0).animate({
                counter : 85
            } , {
                    duration : 4000 , 
                    easing : 'linear' ,
                    step : function(e){
                        $(this).text(Math.ceil(e))
                    }
                })
            });
            $('.statics .cont .customer').each(function(){
            $(this).prop('counter' , 0).animate({
                counter : 17820
            } , {
                    duration : 4000 , 
                    easing : 'linear' ,
                    step : function(e){
                        $(this).text(Math.ceil(e))
                    }
                })
            });
            $('.statics .cont .staff').each(function(){
            $(this).prop('counter' , 0).animate({
                counter : 900
            } , {
                    duration : 4000 , 
                    easing : 'linear' ,
                    step : function(e){
                        $(this).text(Math.ceil(e))
                    }
                })
            });
        } 
        if(src >= 2000){
            $('.up').show(500);
            $('.up').click(function(){
                $(window).scrollTop(0)
            })
        }else{
                $('.up').hide(500)
            }
    });
    $('.list .content .right .top .pizzaa').on('click' , function(){
        $(this).css({
            "background-color" : "var(--main-color)" , 
            "color" : "var(--sec-color)" ,
            "border-radius" : "3px"
        }).siblings().css({
            "background-color" : "transparent" , 
            "color" : "white" ,
            "border-radius" : "0px"
        })
        $('.list .content .right .pizza').show();
        $('.list .content .right .burgers').hide();
        $('.list .content .right .pasta').hide();
        $('.list .content .right .drinks').hide();
    });
    $('.list .content .right .top .drink').on('click' , function(){
        $(this).css({
            "background-color" : "var(--main-color)" , 
            "color" : "var(--sec-color)" ,
            "border-radius" : "3px"
        }).siblings().css({
            "background-color" : "transparent" , 
            "color" : "white" ,
            "border-radius" : "0px"
        })
        $('.list .content .right .drinks').show();
        $('.list .content .right .burgers').hide();
        $('.list .content .right .pasta').hide();
        $('.list .content .right .pizza').hide();
    });
    $('.list .content .right .top .past').on('click' , function(){
        $(this).css({
            "background-color" : "var(--main-color)" , 
            "color" : "var(--sec-color)" ,
            "border-radius" : "3px"
        }).siblings().css({
            "background-color" : "transparent" , 
            "color" : "white" ,
            "border-radius" : "0px"
        })
        $('.list .content .right .pasta').show();
        $('.list .content .right .burgers').hide();
        $('.list .content .right .drinks').hide();
        $('.list .content .right .pizza').hide();
    });
    $('.list .content .right .top .burger').on('click' , function(){
        $(this).css({
            "background-color" : "var(--main-color)" , 
            "color" : "var(--sec-color)" ,
            "border-radius" : "3px"
        }).siblings().css({
            "background-color" : "transparent" , 
            "color" : "white" ,
            "border-radius" : "0px"
        })
        $('.list .content .right .burgers').show();
        $('.list .content .right .drinks').hide();
        $('.list .content .right .pasta').hide();
        $('.list .content .right .pizza').hide();
    });
    $('.styles .content .left').click(function(){
        $('.styles .content .right').toggle(500)
        $('.styles .content .right .grey').click(function(){
            $(':root').css({
                "--main-color" : "#607d8b"
            })
            $('.styles .content .right').hide(500)
        });
        $('.styles .content .right .green').click(function(){
            $(':root').css({
                "--main-color" : "#556b2f"
            })
            $('.styles .content .right').hide(500)
        });
        $('.styles .content .right .red').click(function(){
            $(':root').css({
                "--main-color" : "#d02828"
            })
            $('.styles .content .right').hide(500)
        });
        $('.styles .content .right .sky').click(function(){
            $(':root').css({
                "--main-color" : "#87cefa"
            })
            $('.styles .content .right').hide(500)
        });
        $('.styles .content .right .orange').click(function(){
            $(':root').css({
                "--main-color" : "#fac564"
            })
            $('.styles .content .right').hide(500)
        });
    });
    new WOW().init();
});