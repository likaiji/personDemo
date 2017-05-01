/**
 * Created by Administrator on 2017/3/13.
 */
angular.module("personDemo",["ngRoute","ngTable","ngAnimate"])

    //配置路由
  .config(["$locationProvider","$routeProvider",
    function($locationProvider,$routeProvider){
        //如果后端是PHP，java，不是node，就不用配置下面的两行
        //angular中的路由不带#号
        $locationProvider.html5Mode(true);

        //angular中的不搜索框引擎优化
        $locationProvider.hashPrefix("!");

        //路由到页面
        $routeProvider


            //表示用户默认进入index.html时，就加在这个personData.hbs，控制器为personDataController
            .when("/",{
                templateUrl:"template/personData.hbs",
                    controller:"personDataController"
            })
            //表示用户默认进入personData时，就加在这个personData.hbs，控制器为personDataController
             .when("/personData",{
                    templateUrl:"template/personData.hbs",
                    controller:"personDataController"
             })
            //表示用户默认进入personEvaluate时，就加在这个personEvaluate.hbs，控制器为personEvaluateController
            .when("/personEvaluate",{
                templateUrl:"template/personEvaluate.hbs",
                controller:"personEvaluateController"
            })
            //表示用户默认进入personProject时，就加在这个personProject.hbs，控制器为personProjectController
            .when("/personProject",{
                templateUrl:"template/personProject.hbs",
                controller:"personProjectController"
            })
            //表示用户默认进入personSkill时，就加在这个personSkill.hbs，控制器为personSkillController
            .when("/personSkill",{
                templateUrl:"template/personSkill.hbs",
                controller:"personSkillController"
            })
            //表示用户默认进入sendMail时，就加在这个sendMail.hbs，控制器为sendMailController
            .when("/sendMail",{
                templateUrl:"template/sendMail.hbs",
                controller:"sendMailController"
            })
            //表示用户进入demoContent详情页面，加载demoContentController控制器
            .when("/demoContent",{
                templateUrl:"template/demoContent.hbs",
                controller:"demoContentController"
            })
        }
    ])

        //personDataController配置控制器
    .controller("personDataController",["$scope",function($scope){
        var self=this;
        $scope.pageMove="pagemove";
        }])

     //personEvaluateController控制器
    .controller("personEvaluateController",["$scope",function($scope){
        var self=this;
        $scope.pageMove="pagemove";
    }])

    //personProjectController控制器
    .controller("personProjectController",["$scope",function($scope){
        var self=this;
        $scope.pageMove="pagemove";

        self.data=[
            {
                img:"../images/cque/ershizhuanzhuan.png",
                dataUrl:"./public/jsons/1489653973418.json"
            },
            {
                img:"../images/simple.png",
                dataUrl:"./public/jsons/1489655641722.json"
            },
            {
                img:"../images/staywithme.png",
                dataUrl:"./public/jsons/1489657016497.json"
            },
            {
                img:"../images/shenjia.png",
                dataUrl:"./public/jsons/1489657383654.json"
            }
        ]
    }])

    //personSkillController控制器
    .controller("personSkillController",["$scope",function($scope){
        var self=this;
        $scope.pageMove="pagemove";
    }])

    //sendMailController控制器
    .controller("sendMailController",["$scope",function($scope){
        var self=this;
        $scope.pageMove="pagemove";
    }])

    //demoContentController控制器
    .controller("demoContentController",["$scope",function($scope){
        var self=this;
        $scope.pageMove="pagemove";
    }]);


