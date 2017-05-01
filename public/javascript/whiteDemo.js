/**
 * Created by Administrator on 2017/3/15.
 */
$(function(){

    //初始化sunmmernote
    $("#summernote").summernote({
        width:"100%",
        height:"300px",
        callbacks:{
            //当在summernote中发生图片选择事件后，进行上传图片
            onImageUpload:function(files){
                /*遍历图片信息*/
                var len=files.length;
                for(var i=0;i<len;i++){
                    sendFile(files[i]);
                }
            }
        }
    });

    function sendFile(file){
        data=new FormData();
        data.append("demofile",file);
        console.log("-----开始提交到后台-----");
        $.ajax({
            data:data,
            type:"post",
            url:"/demofileSubmit",
            cache:false,
            contentType:false,
            processData:false,
            success:function(url){
                console.log("后台返回前台的文件保存地址："+url);
                $("#summernote").summernote("insertImage",url);  //表示将传回来的文件地址放到summernote里面，这个insertImage不能变
            }
        })
    }

    $("#sub").click(function(){
        //定义一个空白对象，发到路由端
        var writeData={};


        //获取输入的标题
        writeData.title=document.getElementById("demoTitle").value;
        //console.log(titleInput)

        //获取summernote的文本信息
        writeData.text=$("#summernote").summernote("code");
        console.log(writeData);

        //传信息到后台
        $.ajax({
            type:"post",
            url:"/textSubmit",
            data:writeData,
            dataType:"text",
            success:function(data){
                alert("项目信息添加成功!!!!");
                window.location.href="/#!/demoContent?data="+data;
            },
            error:function(jqXHR){
                console.log(jqXHR.status);
            }
        })
    });


});