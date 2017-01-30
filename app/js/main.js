$(function(){
  $(".b-hp-slider").slick({
       speed: 600,
       fade: true,
      //  autoplay: true,
       autoplaySpeed:3000,
       prevArrow:"<div class='arr-left arr slick-prev'><img class='a-left control-c prev ' src='assets/img/arrow.svg'></div>",
       nextArrow:"<div class='arr-right arr slick-next'><img class='a-right control-c next ' src='assets/img/arrow.svg'></div>"
      //  dots:true
  });

  $svg = $(".header__logo");

  $o = $(".o");
  $o_back = $(".o-back");
  $o_front = $(".o-front");

  $k = $(".k");

  $other = $(".other");
  $background = $(".header__logo__background");
  $all = $(".all");

function start(){
  $o.velocity({translateX:["0px", "-200px"]},900, [150,20]);
  setTimeout(function(){
    // $other.velocity({"opacity":"1" }, 700);
    // $o_front.velocity({fill: "#222"}, 700);
    // $o_back.velocity({fill: "#ffffff"}, 700);
    setTimeout(function(){$background.velocity({translateX: ["-63%","-100%"]}, 900, 'easeInOutCubic');},100);
    // setTimeout(function(){$svg.velocity({ scale:"0.1"}, 2000).velocity({ translateX:"-489%" , translateY:"-612%"},1000);},400);
    // setTimeout(function(){$o.velocity({ scale:"0.1"}, 2000).velocity({ translateX:"-489%" , translateY:"-612%"},2000);},100);
    // $background.velocity({opacity: 1}, 500 );
  },400);
  setTimeout(function(){
    $other.velocity({"opacity":"1" , fill:"#fff"}, 700);
    $o_front.velocity({fill: "#222"}, 700);
    $o_back.velocity({fill: "#fff"}, 700);
    setTimeout(function(){
      $background.css({"transform-origin":"bottom right "});
      $background.velocity({rotateZ: [90,0]}, 900,'easeInOutCubic', function(){
        // $svg.css({"transform-origin":"35.8% 50%"})
        // $svg.velocity({ scale: "0.24"},1200,'easeInOutCubic');
        $other.velocity({fill:"#222"}, 900, 'easeInOutCubic');
        $background.velocity({translateX: ["-100%","-63%"]}, 900, 'easeInOutCubic');
        setTimeout(function(){
          $k.velocity({"fill":"#222"},300, function(){
            $k.velocity({"fill":"#fff"},1200);
          });
          $o_back.css({"transform-origin":"center"});
          $o_back.velocity({"fill":"#222",scale:15},1500, 'easeInOutCubic');
          $all.velocity({"fill":"#ffffff"},1500, 'easeInOutCubic');

        },700);
      });
      $k.velocity({opacity:"1", fill:"#222"}, 900,[150,30]);
    },100);
    // setTimeout(function(){
    //   $background.velocity({ height: "12vh"});
    // },1000);
    // $o_back.velocity({fill: "#ffffff"}, 700);
    // setTimeout(function(){$background.velocity({translateX: ["-60%","-100%"]}, 900,[150,20]);},100);
    // setTimeout(function(){$svg.velocity({ scale:"0.1"}, 2000).velocity({ translateX:"-489%" , translateY:"-612%"},1000);},400);
    // setTimeout(function(){$o.velocity({ scale:"0.1"}, 2000).velocity({ translateX:"-489%" , translateY:"-612%"},2000);},100);
    // $background.velocity({opacity: 1}, 500 );
  },1200);

}

  // setTimeout(start, 1000);

});
