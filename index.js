var express=require("express"),  //需要一个express三方插件
    fs=require("fs"),
    url=require("url"),
//配置默认进入界面
    INDEX_HTML=fs.readFileSync(__dirname+"/public/index.html","utf-8"),
//配置需要的界面信息
    ACCEPTABLE_URLS=['/personData','/personEvaluate','/personProject','/personSkill','/sendMail','/demoContent'];

var app=express();

//为了SEO优化，用来处理#！。。显示时就没有
app.use(function(req,res,next){
    var parts=url.parse(req.url);
    var urlCounter=ACCEPTABLE_URLS.length;
    for(var i=0;i<urlCounter;i++){
        //当我们找到一个匹配的客户端页面路由的配置时
        if(parts.pathname.indexOf(ACCEPTABLE_URLS[i])===0){
            return res.send(200,INDEX_HTML);}
    }
    return next();
});


//使用body-parser解析表单数据
app.use(require("body-parser")());

//静态资源
app.use(express.static(__dirname+"/public"));
app.set("port",process.env.PORT || 4000);




//配置默认界面
var router=require('./routes/routes.js');
app.use('/',router);

//404
app.use(function(req,res){
    res.type("text/html");
    res.status(404);
    res.send("---404---")
});

//500
app.use(function(req,res,err,next){
    console.error(err,stack);
    res.type("text/plain");
    res.status(500);
    res.send("---500---")
});


app.listen(app.get("port"),function(){
    console.log("This port is : "+app.get("port"));
});