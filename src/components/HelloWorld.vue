<template>
  <div class="head">
    <ul class="nav10 nav-tabs nav-stacked">
      <li class="nav-item">
        <a href="#" class="nav-link active">新浪首页</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">新闻</a>
      </li>
      <li class="nav-item disabled">
        <a href="#" class="nav-link">体育</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link active">娱乐</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">财经</a>
      </li>
      <li class="nav-item disabled">
        <a href="#" class="nav-link">科技</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link active">博客</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">图片</a>
      </li>
      <li class="nav-item disabled">
        <a href="#" class="nav-link">专栏</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link active">...</a>
        <span class="nav-link disabled iconfont icon-sousuo"></span>
      </li>
    </ul>
    <div class="slider"></div>
    <nav class="nav11 justify-content-center">
      <img src="http://s3.pfp.sina.net/ea/ad/11/8/68ae00b4392a6ff91b08fb393453667e.jpg" alt />
      <img src="http://n.sinaimg.cn/sinanews/20214c6d/20181105/TiYubanner220_90.png" alt />
    </nav>
    <ul class="nav8 nav-tabs nav-stacked">
      <li class="nav-item">
        <a href="#" class="nav-link active">Active</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Link</a>
      </li>
      <li class="nav-item disabled">
        <a href="#" class="nav-link">Disabled</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link active">Active</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Link</a>
      </li>
      <li class="nav-item disabled">
        <a href="#" class="nav-link">Disabled</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link active">Active</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Link</a>
      </li>
      <li class="nav-item disabled">
        <a href="#" class="nav-link">Disabled</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link active">Active</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Link</a>
      </li>
      <li class="nav-item disabled">
        <a href="#" class="nav-link">Disabled</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link active">Active</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Link</a>
      </li>
      <li class="nav-item disabled">
        <a href="#" class="nav-link">Disabled</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link active">Active</a>
      </li>
    </ul>
    <ul class="nav9 nav-tabs nav-stacked">
      <li class="nav-item">
        <a href="#" class="nav-link active">Active</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Link</a>
      </li>
      <li class="nav-item disabled">
        <a href="#" class="nav-link">Disabled</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link active">Active</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Link</a>
      </li>
      <li class="nav-item disabled">
        <a href="#" class="nav-link">Disabled</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link active">Active</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Link</a>
      </li>
      <li class="nav-item disabled">
        <a href="#" class="nav-link">Disabled</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link active">Active</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Link</a>
      </li>
      <li class="nav-item disabled">
        <a href="#" class="nav-link">Disabled</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link active">Active</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Link</a>
      </li>
      <li class="nav-item disabled">
        <a href="#" class="nav-link">Disabled</a>
      </li>
     
    </ul>
    <div>{{id.id}}</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data() {
    return {
      id: this.$route.params
    };
  }
};
</script>


<style scoped>
@import url(//at.alicdn.com/t/font_1292176_92lkikwkouo.css);
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #9396aa;
  text-decoration: none;
}
.slider {
  border: 0.5px solid #cccccc;
}
.nav11 {
  overflow: hidden;
  height: 90px;
}
.nav10 {
  height: 40px;
}
.nav10 .nav-item a {
  line-height: 40px;
}
.nav8 {
  height: 60px;
  background-color: #e10000;
}
.nav8 .nav-item a {
  line-height: 60px;
  font-size: 18px;
  font-weight: 600;
  color: white;
}
.nav9 {
  height: 60px;
  background-color: #f9f9f9;
}
.nav9 .nav-item a {
  line-height: 50px;
  font-size: 18px;

  color: black;
}
</style>
