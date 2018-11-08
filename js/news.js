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


});