<template>
  <div>
    <div class="app-head">
      <div class="app-head-inner">
        <img class="head-logo" src="../assets/logo.png" alt="logo">
        <div class="head-nav">
          <ul class="nav-list">
            <li>登陆</li>
            <li class="nav-pile">|</li>
            <li>注册</li>
            <li class="nav-pile">|</li>
            <li>关于</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-foot">
      <p>© 2017 by xiaohangzi</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{
  display: block;
}
body{
  background: #f0f2f5;
  font-family: "Helvetica Neue","Helvetica","Arial","Microsoft YaHei",sans-serif;
  font-size: 14px;
  color: #444;
}
ol,ul,li,a{
  list-style: none;
  text-decoration: none;
}
.app-head{
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.app-head-inner{
  width: 1800px;
  margin: 0 auto;
}
.head-logo{
  float: left;
}
.app-head-inner img{
  width: 50px;
  height: 50px;
  margin-top: 20px;
  margin-left: 300px;
}
.head-nav{
  float: left;
  margin-left: 800px;
}
.head-nav ul{
  overflow: hidden;
}
.head-nav li{
  cursor: pointer;
  float: left;
}
.nav-pile{
  padding: 0 20px;
}
.app-foot{
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
  clear: both;
  margin-top: 30px;
}
.container{
  width: 1200px;
  margin: 0 auto;
}
</style>
