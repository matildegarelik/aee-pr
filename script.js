// cambiar color de navbar en  scroll

$(document).ready(function(){
    $(window).scroll(()=>{
        $('nav').toggleClass("scrolled", $(this).scrollTop()>300);
        $('nav').toggleClass("mt-5", $(this).scrollTop()<20);
         if($(this).scrollTop()>300){
            $('#logo').attr('src','images/Logo_aee_-01.png');
        }else{
            $('#logo').attr('src','images/Logo_aee_-03.png');
        }
    })
});

function showMsg(){
    $('#msg').toggle()
}