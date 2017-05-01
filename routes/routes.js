/**
 * Created by Administrator on 2017/3/15.
 */
//这两行代码表示定义router
var express=require('express');
var router=express.Router();

//设置一个默认界面，如果没有index.html，就会显示这个界面的内容
router.get('/',function(req,res){
    console.log('user in');
    res.type('text/html');
    res.send('<span style="color:green;">-welcome-</span>')
});


//上传文件预览
var formidable=require("formidable");
var fs=require("fs");
const AVATAR_UPLOAD_FOLDER="/avatar/";
router.post("/demofileSubmit",function(req,res){
   console.log("summernote传输文件来了！！！");
    //console.log(req.body);
    var form=new formidable.IncomingForm();
    form.encoding="utf-8";  //设置编辑编码
    form.uploadDir="public"+AVATAR_UPLOAD_FOLDER;
    form.keepExtensions=true;
    form.parse(req,function(err,fields,files){
       console.log(files);
        if(err){
            console.log("文件错误！！！")
        }
        var extName=""; //保持后缀名
        switch(files.demofile.type){
            case "image/pjpeg":extName="jpg";break;
            case "image/jpeg":extName="jpg";break;
            case "image/png":extName="png";break;
            case "image/x-png":extName="jpg";break;
            case "image/gif":extName="gif";break;
        }

        //因为是在windows系统下，，，路劲符号是\,所以要注意加上一个转义符
        var timepoint = Date.now();
        var newPath="public\\avatar_2\\"+timepoint+"."+extName;

        fs.renameSync(files.demofile.path,newPath);
        var webPath="avatar_2/"+timepoint+"."+extName;
        res.send(webPath);
    });
});

//传文件到后台
router.post("/textSubmit",function(req,res){
    console.log("------文件信息进来了------");
    console.log(req.body);

    //新建一个对象
    var writeJosnData={
        demotitle:req.body.title,
        demotext:req.body.text
    };

    var newJsonName=Date.now().toString();
    var newJsonPath="./public/jsons/"+newJsonName+".json";
    res.send(newJsonPath);

    //将文件写进json里面    这里直接写writeJosnData，保存的json文件啊是一个对象，要转化为字符串存进去
    fs.writeFile(newJsonPath,JSON.stringify(writeJosnData),function(err){
        if(err){
            console.log(err);
        }
    })

});

//发邮件部分
var credentials=require("../credentials.js");
var emailService=require("../lib/email.js")(credentials);
router.post("/getAdvide",function(req,res){
    console.log("Send Successful!!!");
    console.log(req.body.advice);
    emailService.send(req.body.email,"李开吉欢迎您！！！","已收到您的反馈信息！！！");
    return res.redirect("/sendMail");
});


module.exports=router;   //导出函数，表示将这个页面的路由处理函数导出到index.js里面