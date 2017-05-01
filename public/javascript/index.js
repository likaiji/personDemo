/**
 * Created by Administrator on 2017/3/13.
 */
$(function(){

    //设置进度条消失
    function changeWidth(){
        var loadBarComeWidth=document.getElementById("loadBarCome").clientWidth;
        if(loadBarComeWidth==300){
            document.getElementById("loadBox").style.display="none";
        }
    }
    setInterval(changeWidth,2000);
    //清除导航栏的z-index
    function clearNav(){
        document.getElementById("navStart").style.zIndex="5";
    }
    setInterval(clearNav,3000);
    
});
