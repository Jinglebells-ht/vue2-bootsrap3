/*
 * Copyright (c) 2018. Bowen Huang.
 */

/*=============================================================
    Authour URI: #
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */


(function ($) {
    "use strict";
    var mainApp = {

        metisMenu: function () {

            /*====================================
            METIS MENU 
            ======================================*/

            $('#main-menu').metisMenu();

        },


        loadMenu: function () {

            /*====================================
            LOAD APPROPRIATE MENU BAR
         ======================================*/

            $(window).bind("load resize", function () {
                if ($(this).width() < 768) {
                    $('div.sidebar-collapse').addClass('collapse')
                } else {
                    $('div.sidebar-collapse').removeClass('collapse')
                }
            });
        },
        slide_show: function () {

            /*====================================
           SLIDESHOW SCRIPTS
        ======================================*/

            $('#carousel-example').carousel({
                interval: 3000 // THIS TIME IS IN MILLI SECONDS
            })
        },
        reviews_fun: function () {
            /*====================================
         REWIEW SLIDE SCRIPTS
      ======================================*/
            $('#reviews').carousel({
                interval: 2000 //TIME IN MILLI SECONDS
            })
        },
        wizard_fun: function () {
            /*====================================
            //horizontal wizrd code section
             ======================================*/
            $(function () {
                $("#wizard").steps({
                    headerTag: "h2",
                    bodyTag: "section",
                    transitionEffect: "slideLeft"
                });
            });
            /*====================================
            //vertical wizrd  code section
            ======================================*/
            $(function () {
                $("#wizardV").steps({
                    headerTag: "h2",
                    bodyTag: "section",
                    transitionEffect: "slideLeft",
                    stepsOrientation: "vertical"
                });
            });
        },

        initName: function () {
            //判断选择非空
            if ($("tr").length > 0) {
                //code

            }

            $.get("http://localhost/app-web/rest/greeting", function (data) {
                //alert("Data Loaded: " + data);
                // var t = $("div#officerName").text(d);
                console.log(data);
            });
            // var t = $("div#officerName").text(d);
            //var t = $("div.inner-text").text("hby");


        },
        initStaticContent: function () {
            $("a.navbar-brand").text("渝都监狱五监区");
            document.title="业务信息系统";

            var name = $("div.inner-text").children("span");

            // name.html(function(i,origText){
            //     return "Old html: " + origText + " New html: Hello <b>world!</b>
            //     (index: " + i + ")";
            // });

            // alert(name.html());
            // var loginTime = $("small");
            // alert(loginTime.html());
            //
            // name.text("姓名").appendChild(loginTime.html());
            // $
            
			var user = new User("hby");
			user.say();
			name.text(user.name);
//			name.text("姓名");

            var init = new Init();
            init.initHeaderRight();


        }


    };
    $(document).ready(function () {
        mainApp.metisMenu();
        mainApp.loadMenu();
        mainApp.slide_show();
        mainApp.reviews_fun();
        mainApp.wizard_fun();
        mainApp.initStaticContent();
        mainApp.initName();

    });
}(jQuery));