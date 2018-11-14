$(function(){
var user="";
var password="";
    new Vue({el:"#login",
        methods:{
        login:function(){
            user=$(".user input").val();
            password=$(".password input").val();
            localStorage.user=user;
            localStorage.password=password;
            window.location="news.html";
        },            
        sign_t:function(){
            $("#login").fadeOut();
        },
        login_t:function(){
            alert("Sdf");
        }
        }
    });
});