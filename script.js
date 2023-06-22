// cambiar color de navbar en  scroll

$(document).ready(function(){

    $(window).scroll(()=>{
        $('nav').toggleClass("scrolled", $(this).scrollTop()>300);
        $('nav').toggleClass("mt-5", $(this).scrollTop()<20);

    })
});

function showMsg(){
    $('#msg').toggle()
}