// cambiar color de navbar en  scroll

$(document).ready(function(){
    $(window).scroll(()=>{
        $('nav').toggleClass("scrolled", $(this).scrollTop()>20);
        //$('nav').toggleClass("mt-0", $(this).scrollTop()<20);
         if($(this).scrollTop()>20){
            $('#logo').attr('src','images/Logo_aee_-01.png');
        }else{
            $('#logo').attr('src','images/Logo_aee_-03.png');
        }
    })
});

function showMsg(){
    $('#msgContainer').toggle()
    //$('nav').toggleClass("mt-10")
}