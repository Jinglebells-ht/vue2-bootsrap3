<template>
  <div class="background">
    <div class="container">
      <div class="row text-center " style="padding-top:100px;">
        <div class="col-md-12"><img src="../assets/img/logo-invoice.png"/></div>
      </div>
      <div class="row ">
        <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
          <div class="panel-body">
            <form role="form">
              <hr/>
              <h5>请输入账号密码：</h5>
              <br/>
              <div class="form-group input-group"><span class="input-group-addon"><font-awesome-icon
                :icon="['fas','user']"/></span>
                <input type="text" class="form-control" placeholder="用户名 "/>
              </div>
              <div class="form-group input-group"><span class="input-group-addon"><font-awesome-icon
                :icon="['fas','lock']"/></span>
                <input type="password" class="form-control" placeholder="密码"/>
              </div>
              <div class="form-group">
                <label class="checkbox-inline">
                  <input type="checkbox"/>
                  记住账号 </label>
                <span class="pull-right"> <a href="index.html">忘记密码? </a> </span></div>
              <a href="index.html" class="btn btn-primary ">登录</a>
              <hr/>
              还未注册 ? <a href="register.html">点击注册 </a> 或者联系我们 <a href="index.html">联系方式</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  };
  // $("#h").text("hby");
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  .background {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    /*background-color: gray;*/
    background-color: #E2E2E2;
  }

</style>
