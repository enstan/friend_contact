$(function(){
    $(".fd_list").hide();
 //feed 页面设置
   //数据绑定
   //tab栏方法绑定
   new Vue({el:'#tab',
        methods:{
            tab:function(e){
                $(".aui-tab-item").removeClass("aui-active");
                $(".aui-tab-item:nth-child("+e+")").addClass("aui-active");
                //页面跳转
                switch (e) {
                    case 1:
                        break;
                    case 2:
                        break;                
                    default:
                        break;
                }    
            }
       }
   });

      //feed_detail页面
    //vue数据绑定
    var feed_d=new Vue({el: '.fd_list',
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
   //feedlist页面绑定
   new Vue({el:'.feed_list',
   data:{
       list: [{
                   name:"this is a name1",
                   pic:"./img/fload.png",                   //背景图片设置
                   title: 'this is a title1',
                   text: "this is a text1",
                   time: '3:00'
               },
               {
                   name:"this is a name2",
                   pic:"./img/person.png",
                   title: 'this is a title2',
                   text: "this is a text2",
                   time: '3:00'
               },
               {
                   name:"this is a name3",
                   pic:"./img/new_top.png",
                   title: 'this is a title3',
                   text: "this is a text3",
                   time: '3:00'
               }
           ]
   },
   methods:{
    show:function(item){
        feed_d.item=item;
    }
}
});
    
    //li 点击动画效果
    $(".con_text").click(function(e){
       var index=$("ul li").index(this);
       TweenMax.to(".feed_list>li,ul", 2,{"height":0,"margin-top":0},2);
       $(".fd_list").show();
       TweenMax.to(".aui-tab >.aui-tab-item", 2,{height:0},2);
       $(".aui-tab-item").fadeOut();
       //$(".feed_list").slideUp(1500);
    });

    //hammer.js 滑动事件绑定。direction:8 为向上 ，16为向下
    const app = document.querySelector('.fd_list');
    const hammertime = new Hammer(app);
    hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
    hammertime.on('swipe', function(ev) {
        TweenMax.to("ul", 2,{"height":'100%',"margin-top":"4.5rem"},2);
        TweenMax.to(".aui-tab >.aui-tab-item", 2,{height:"2.2rem"},2);
        $(".aui-tab-item").fadeIn();
        //tweenmax oncomplete函数
        TweenMax.to("ul>li", 2,{"height":'45%',"margin-top":0,onComplete:function(){
            $(".fd_list").hide();
        }},2);
        console.log(ev);
    });
});