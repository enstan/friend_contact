$(function(){
    new Vue({el: '#bg',
    data:{
        bg:{
            bg_pic:"./img/new_top.png",                     //背景图片设置
            pic:"./img/tx.jpg",
            name:'i am a test!!!',
            time:'3:00'
        }
    }
    });
    new Vue({el: '.content',
    data:{
        photo:{
            num:2,
            pics:{
                pic:""
            }
        },
        video:{
            
        }
    }
    });
    
    //相册列表展开动画
    var ph_t=new TimelineMax();
    var vi_t=new TimelineMax();
    var f_screen=false;
    $("#ph_link").click(function(){
        if(f_screen){
            ph_t.reverse();             //反向播放动画
            $(".pro_tx,.name,.locat").fadeIn(1500);
            $(".sec_video").fadeIn(1500);
            f_screen=false;
        }else{
            ph_t.to(".pro_bg", 1.5,{"height":'0%',"margin-top":"2.5rem"},0).play();
            ph_t.to(".sec_video>a", 1.5,{"height":'0%',"margin-top":"2.5rem"},0).play();
            $(".pro_tx,.name,.locat").fadeOut(1500);
            $(".sec_video").fadeOut(1500);
            f_screen=true;
        }
        console.log(f_screen);

    });
    $("#vi_link").click(function(){
        if(f_screen){
            vi_t.reverse();             //反向播放动画
            $(".pro_tx,.name,.locat").fadeIn(1500);
            $(".sec_photo").fadeIn(1500);
            f_screen=false;
        }else{
        vi_t.to(".pro_bg", 2,{"height":'0%',"margin-top":"2.5rem",top:0},0).play();
        vi_t.to("#ph_link,#pho_list", 2,{"height":'0',top:0},0).play();
        $(".pro_tx,.name,.locat").fadeOut(1500);
        $(".sec_photo").fadeOut(1500);
        f_screen=true;

        }
        console.log(f_screen);

    });
});