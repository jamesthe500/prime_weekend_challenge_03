$(document).ready(function(){

    $.ajax({
        url: "/data",
        success: function(data) {
            console.log(data);
            console.log(Object.keys(data).length);
            $.each(data, function () {
                $('.people').append('<div class="person"><div><h3>' + this.name + '</h3></div><div><p>' + this.desc + '</p></div><div><p><em><b class="quotes">“ </b>' + this.thanks + '<b class="quotes"> ”</b></em></p></div></div>');
            });
            $('.person').first().addClass('current-person');
            for (var i = 0; i < Object.keys(data).length; i++) {
                $('ul').append('<span class="dot glyphicon glyphicon-asterisk" aria-hidden="true"></span>');
            }

            $('.dot').first().addClass('current-dot');
        }
    });



    $('.btn-next').on('click', function(){
        var currentPerson = $('.current-person');
        var nextPerson = currentPerson.next();
        if (nextPerson.length == 0){
            nextPerson = $('.person').first();
        }
        currentPerson.fadeOut(400, function(){
            nextPerson.fadeIn(400).addClass('current-person');
        }).removeClass('current-person');

        var currentDot = $('.current-dot');
        var nextDot = currentDot.next();
        if (nextDot.length == 0){
            nextDot = $('.dot').first();
        }
        currentDot.removeClass('current-dot');
        nextDot.addClass('current-dot');

    });

    $('.btn-previous').on('click', function(){
        var currentPerson = $('.current-person');
        var nextPerson = currentPerson.prev();
        if (nextPerson.length == 0){
            nextPerson = $('.person').last();
        }
        currentPerson.fadeOut(400, function(){
            nextPerson.fadeIn(400).addClass('current-person');
        }).removeClass('current-person');

        var currentDot = $('.current-dot');
        var nextDot = currentDot.prev();
        if (nextDot.length == 0){
            nextDot = $('.dot').last();
        }
        currentDot.removeClass('current-dot');
        nextDot.addClass('current-dot');
    });


}); // doc ready