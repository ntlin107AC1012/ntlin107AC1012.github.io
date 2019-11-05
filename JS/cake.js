$(document).ready(function(){  
    $(".strawberrytxt").click(function(){        /*草莓圖片內部移動到材料*/ 
      window.location.href="#ingredinet";
    });
    $(".strawberrytxt2").click(function(){
      window.location.href="#ingredinet";
    });
  
    $(".tdyimg").mouseenter(function(){           /*首頁萬聖節預定跑出*/
      $(".reserve").fadeIn(800);
    });
    $(".tdyimg").mouseleave(function(){
      $(".reserve").fadeOut(800);
    });
    $(".moneytxt2").mouseenter(function(){        /*購買圖片顯示*/
      $(".buy").fadeIn(500);    
    });
    $(".buy").mouseleave(function(){
      $(".buy").fadeOut(800);
    });
    $(".moneytxt4").mouseenter(function(){
      $(".buy2").fadeIn(500);    
    });
    $(".buy2").mouseleave(function(){
      $(".buy2").fadeOut(800);
    });
    $(".moneytxt6").mouseenter(function(){
      $(".buy3").fadeIn(500);    
    });
    $(".buy3").mouseleave(function(){
      $(".buy3").fadeOut(800);
    });
    $(".moneytxt7").mouseenter(function(){
      $(".buy4").fadeIn(500);    
    });
    $(".buy4").mouseleave(function(){
      $(".buy4").fadeOut(800);
    });
    $(".hide").mouseenter(function(){          /*草莓圖片小框資訊跑出*/
      $(".strawberrytxt").fadeIn(500);    
    });
    $(".pdimg").mouseenter(function(){
      $(".strawberrytxt").fadeOut(800);
    });
    $(".hide").mouseenter(function(){
      $(".strawberrytxt2").fadeIn(500);    
    });
    $(".pdimg").mouseenter(function(){
      $(".strawberrytxt2").fadeOut(800);
    });

    /*首頁草莓圖片按下轉移到product*/
    $(function(){
      var $img =$('navimg1');
    $img.click(function(){
      $("PRODUCT").click();
      });
    });
    /*選單按下跳到哪個選單的畫面*/
    $(function(){
      var $li = $('ul.nav_list li');
        $($li. eq(0) .addClass('active').find('a').attr('href')).siblings('.tab-inner').hide();
        $li.click(function(){
          $($(this).find('a'). attr ('href')).show().siblings ('.tab-inner').hide();
          $(this).addClass('active'). siblings ('.active').removeClass('active');
        });
    }); 
 });
 /*loading的時間*/
$(document).ready(function(){
    setTimeout(function(){
      $(".loading").fadeOut(500);}, 2000);
});
/*子選單的下滑上滑*/
$(document).ready(function(){
  $(".nav_item").hover(function(){
  $(this).children(".nav-sublist").slideDown("fast");},
  function(){
    $(this).children(".nav-sublist").slideUp("slow");}
  );
});
/*首頁滑動式圖片的設定*/
$(document).ready(function(){
  $(".flexslider").css("border","0px");
  $('.flexslider').flexslider({
  animation: "slide"
  });
});



 


