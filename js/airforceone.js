function cancelMouse(){return false;}
  document.oncontextmenu = cancelMouse;

function mover(o){
    o.style.backgroundPosition='left bottom';
}

function mout(o){
    o.style.backgroundPosition='left top';
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
function subWin(swf){
  window.open(swf,"gameOpen","width=1024,height=768");
}
function subWinRule(swf){
  window.open(swf,"gameOpenRule","width=1024,height=768,scrollbars=yes");
}

// 下載版JS
function downloadvwin(){
    window.open('/cl/?module=MRule&method=InstallationInstruction&type=download', 'downloadnew' ,'width=1024,height=640,status=no,scrollbars=yes');
}

//設為首頁
function setfirst(url) {
   if(document.all){
        document.body.style.behavior = 'url(#default#homepage)';  
        document.body.setHomePage(url);  
   }else{ 
        alert("您的瀏覽器目前不支援此功能!");
    }
}

// 加入最愛
function bookmarksite(url,title) {
    if (window.sidebar||window.opera) {
        // for firfox 
        window.sidebar.addPanel(title, url,"");
    }else if(document.all){
        // for IE
        window.external.AddFavorite( url, title); 
    }else{
        alert("您的瀏覽器目前不支援此功能!");
    }
}

//透明按鈕效果(漸變)~
function over_o(o){
    $(o).stop().animate({'opacity': 0}, 650);
}
function out_o(o){
    $(o).stop().animate({'opacity': 1}, 650);
}

$(function() {
    // 圖片 淡出效果
    //$('.hover-pic a').hover(
    //    function() {
    //        $(this).stop().animate({'opacity': 0}, 500);
    //    }, function() {
    //        $(this).stop().animate({'opacity': 1}, 500);
    //    }
    //);

    // 圖片 效果
    $('.box span, #logo-wrap span, .hover-pic span').hover(
        function() {
            $(this).stop().css('background-position', 'left bottom');
        }, function() {
            $(this).stop().css('background-position', 'left top');
        }
    );



    // 文字閃爍
    // new toggleColor('#js_promotions', ['#FFF','#FF0'] , 500 );

    // 表單 label 字暫留效果
     $("#LoginForm label").InputLabels();

});