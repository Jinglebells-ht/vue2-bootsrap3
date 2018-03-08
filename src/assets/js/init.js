/*
 * Copyright (c) 2018. Bowen Huang.
 */

var Init = Base.extend({
    constructor: function () {
        this.initNav();
    },
    messageCount: 20,
    taskCount: 10,
    initHeaderRight: function () {
        var hr = "<a href=\"message-task.html\" class=\"btn btn-info\" title=\"新消息\"><b>30 </b><i class=\"fa fa-envelope-o fa-2x\"></i></a>\n" +
            "<a href=\"message-task.html\" class=\"btn btn-primary\" title=\"新任务\"><b>40 </b><i class=\"fa fa-bars fa-2x\"></i></a>\n" +
            "<a href=\"login.html\" class=\"btn btn-danger\" title=\"退出登录\"><i class=\"fa fa-exclamation-circle fa-2x\"></i></a>";
        $("div.header-right").html(hr);
        $("div.header-right a b:eq(0)").text(this.messageCount+" ");
        $("div.header-right a b:eq(1)").text(this.taskCount+" ");
    },
    initNav: function () {
        $("#main-menu li [href='notification.html']").addClass("active-menu");
        alert("nav");
    }


});
