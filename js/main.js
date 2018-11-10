$(function(){
    
    //banner 页面设置
    new Vue({el: '.bg_ban',
    data: {
        bg:{
            bg_pic:"./img/new_top.png",                     //背景图片设置
            pic:"./img/tx.jpg",
            title:'Hello Vue.js!',
            name:'i am a test!!!',
            time:'3:00'
        }
    }
    });
    //card_list 页面设置
    new Vue({el:'.card_list',
    data:{
        list: [{
                    pic:"./img/fload.png",                   //背景图片设置
                    title: 'this is a title',
                    text: "this is a text",
                    time: '3:00'
                },
                {
                    pic:"./img/person.png",
                    title: 'this is a title',
                    text: "this is a text",
                    time: '3:00'
                },
                {
                    pic:"./img/new_top.png",
                    title: 'this is a title',
                    text: "this is a text",
                    time: '3:00'
                }
            ]
    }
});
   //feed 页面设置
   //数据绑定
   new Vue({el:'.feed_list',
   data:{
       list: [{
                   name:"this is a name",
                   pic:"./img/fload.png",                   //背景图片设置
                   title: 'this is a title',
                   text: "this is a text",
                   time: '3:00'
               },
               {
                   name:"this is a name",
                   pic:"./img/person.png",
                   title: 'this is a title',
                   text: "this is a text",
                   time: '3:00'
               },
               {
                   name:"this is a name",
                   pic:"./img/new_top.png",
                   title: 'this is a title',
                   text: "this is a text",
                   time: '3:00'
               }
           ]
   }
});

    //li 点击动画效果
    $("li").click(function(e){
        var index=$("ul li").index(this);
       // TweenMax.to(".feed_list>li,ul", 2,{"height":0,"margin-top":0},2);
        $(".feed_list").slideUp(1500);

    });
    
    //feed_detail页面
    //vue数据绑定
    new Vue({el: '.fd_list',
    data: {
        item:{
            name:"this is a name",
            pic:"./img/new_top.png",
            title: 'this is a title',
            text: "this is a text",
            time: '3:00',
            
        },
        coms:{
            pic:"./img/tx.jpg",
            title:'Hello Vue.js!',
            name:'i am a test!!!',
            time:'3:00'
       }
    }
    });


//profile页面

   $('#main-nav').hcOffcanvasNav({
    maxWidth: 980,
    customToggle:".aui-icon-menu"
  });
  $("#menu").removeClass("hc-nav-trigger");

  
});