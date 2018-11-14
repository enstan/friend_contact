$(function(){
    $(".new_detail").hide();
    $(".detail_footer").hide();
    var page=1;         //0为news页，1为news_detail页
    //动态引入其他js文件
    // $.getScript('./hammer.js', function () {
    //     //todo
    // });
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
    //new_detail页面设置
    var new_d= new Vue({el: '.new_detail',
    data: {
        item:{
            name:"this is a name1",
            tx:"./img/person.png",
            pic:"./img/fload.png",                   //背景图片设置
            title: 'this is a title1',
            text: "this is a text1",
            time: '3:00'
        }
    }
    });
    //card_list 页面设置
    new Vue({el:'.card_list',
    data:{
        list: [{
                    pic:"./img/fload.png",                   //背景图片设置
                    title: 'this is a title1',
                    text: "this is a text1",
                    time: '3:00'
                },
                {
                    pic:"./img/person.png",
                    title: 'this is a title2',
                    text: "this is a text2",
                    time: '3:00'
                },
                {
                    pic:"./img/new_top.png",
                    title: 'this is a title3',
                    text: "this is a text3",
                    time: '3:00'
                }
            ]
    },
        methods:{
            swip:function(item){
                new_d.item=item;
                
                TweenMax.to(".new", 2,{"left":'-100%'},2);
                //TweenMax.to("#footer", 2,{"bottom":'-10%'},2);
                $(".new").fadeOut(1000);
                $(".new_detail").show();
                $(".aui-bar-nav,#menu,#search").css("color","black");
                $(".new_footer").fadeOut();
                $(".detail_footer").fadeIn();
                page=2;
            }
        }
});

   //footer
   new Vue({el:".new_footer",
        methods:{
            index:function(){
                window.location.href="news.html";
            },
            feed:function(){
                window.location.href="feed.html";
            },
            edit:function(){
                window.location.href="edit.html";
            },
            people:function(){
                window.location.href="news.html";
            },
            setting:function(){
                window.location.href="setting.html";
            }
       }
   });
    //hammer.js 滑动事件绑定。direction:8 为向上 ，16为向下

    const app = document.querySelector('.new,.new_detail,#news_app');
    const hammertime = new Hammer(app);
    hammertime.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
    hammertime.on('swipe', function(ev) {
        var direction=ev.direction;            //2为向左，4为向右
        if(page==1){
            if(direction==2){
            }
        }else{
            if(direction==4){
                TweenMax.to(".new", 2,{"left":'0'},2);
                //TweenMax.to("#footer", 2,{"bottom":'0'},2);
                $(".aui-bar-nav,#menu,#search").css("color","black");
                $(".new").fadeIn(1000);
                $(".new_detail").fadeOut();
                $(".aui-bar-nav,#menu,#search").css("color","white");
                $(".detail_footer").hide();
                $(".new_footer").fadeIn();

                page=1;
            }
        }
        console.log(ev+page);
    });
});