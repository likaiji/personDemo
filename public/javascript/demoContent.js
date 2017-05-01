/**
 * Created by Administrator on 2017/3/15.
 */
$(function(){
    console.log(location.href);
    var Urlaaa=window.location.href.split("data=");
    console.log(Urlaaa[1]);

    var Urlbbb=Urlaaa[1].split("%2F");
    console.log(Urlbbb);

    var newJsonUrl=Urlbbb[2]+"/"+Urlbbb[3];
    console.log(newJsonUrl);
    console.log(typeof newJsonUrl);

    $.get(newJsonUrl,function(data){
        //console.log("------------------------")
        console.log(data);
        $("#demoContentTitle").append("<p>"+data.demotitle+"</p>");
        $("#demoContentContent").append(data.demotext);
    })
});