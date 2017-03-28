$(function () {

    var $slide = $('.slider__controlpanel div');



    $slide.on('click', function(e) {
        e.preventDefault();
        $(this).children('.slider__controlpanel__checked').css('display', 'inline-block');
        $(this).children('.slider__controlpanel__unchecked').css('display', 'none');
        $(this).siblings('div').children('.slider__controlpanel__checked').css('display', 'none');
        $(this).siblings('div').children('.slider__controlpanel__unchecked').css('display', 'inline-block');

        var $slide2 = $('.slider__controlpanel__checkbox2 .slider__controlpanel__checked').css('display');
        var $slide3 = $('.slider__controlpanel__checkbox3 .slider__controlpanel__checked').css('display');

        if($slide2 == 'inline-block') {
            $('.slider__mainpicture2').show();
            $('.slider__mainpicture1').hide();
            $('.slider__mainpicture3').hide();
        } else if ($slide3 == 'inline-block') {
            $('.slider__mainpicture3').show();
            $('.slider__mainpicture1').hide();
            $('.slider__mainpicture2').hide();
        } else {
            $('.slider__mainpicture1').show();
            $('.slider__mainpicture2').hide();
            $('.slider__mainpicture3').hide();
        }


    });


    $('.pictures div a').mouseover(function() {
        $(this).children('img').css('display','inline-block');
        $(this).siblings().css('color','#f4b60d');
        $('.background').mouseleave(function () {
            $('.background').css('display','none');
            $(this).parent().siblings().css('color','white');
        });
    });

    var $links = $('.banners__panel li');

    $links.on('click', function(e) {
        e.preventDefault();
        $(this).children('.banners__plus').toggleClass('active');
        $(this).children('.banners__minus').toggleClass('disabled');
        $(this).children('.banners__name').toggleClass('color');
        $(this).children('ul').toggle();
    });

    $('.blocks div div div a').mouseover(function() {
        $(this).siblings('.arrow').toggle();
        $(this).siblings('.arrow_selected').toggle();
        $(this).css('color', '#0187f4');
        $('.blocks div div div a').mouseleave(function () {
            $(this).siblings('.arrow').toggle();
            $(this).siblings('.arrow_selected').toggle();
            $(this).css('color', 'black');
        });
    });

    $('.header__icons a img').hover(function() {
            $(this).siblings('img').toggleClass('hidden');
            $(this).toggleClass('hidden')},
        function () {
            $(this).siblings('img').toggleClass('hidden');
            $(this).toggleClass('hidden');
        });

});﻿
