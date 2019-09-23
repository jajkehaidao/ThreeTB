<template>
  <div class="box">
    <div class="left">
      <div class="top">
        <img v-bind:src="src" alt />
      </div>
      <div class="bottom">
        <div v-for="(item,index) in arr2" v-on:click="fun(item.url)" :key="index">
          <img v-bind:src="item.url" alt />
        </div>
      </div>
      <div class="bottom2">
        <a href="#">★收藏商品（3338人气）</a>
        <a href="#" class="a2">举报</a>
      </div>
    </div>

    <div class="right">
      <h3>GXG男装2019秋季新款刺绣宽松休闲情侣卫衣潮牌ins男连帽帽衫春秋</h3>
      <p class="p">刺绣装饰，时尚潮流，基础抽绳连帽设计</p>
      <div class="img">
        <img
          style="width:100%;height:100%;"
          src="https://weixin00-1300073012.cos.ap-chengdu.myqcloud.com/qita/tupian.png"
          alt
          title="衣服"
        />
      </div>
      <div class="div1">
        <div style="margin-top:14px;">
          <span class="span1">运费</span>
          <span>浙江宁波至成都快递0.00</span>
        </div>
      </div>
      <div class="div1">
        <div style="margin-top:14px;">
          <span class="span1">
            月销量
            <span style="color:red;">1219</span>
          </span>
          <span class="span1">
            累计评价
            <span style="color:red;">155</span>
          </span>
          <span class="span1">
            送天猫积分
            <span style="color:green;">199</span>
          </span>
        </div>
      </div>
      <div style="width:100%;height:50px;">
        <div style="float:left; margin-top:11px;color:rgba(0,0,0,.5);">尺码</div>
        <div class="chima" v-for="(item,index) in chima" :key="index">{{item}}</div>
      </div>
      <div style="width:100%;height:50px;">
        <div style="float:left; margin-top:11px;color:rgba(0,0,0,.5);">颜色</div>
        <div class="yanse" v-for="(item,index) in yanse" :key="index">{{item}}</div>
      </div>
      <div style="width:100%;height:50px; margin-bottom:20px;">
        <div style=" margin-top:11px;float:left;margin-right:20px;color:rgba(0,0,0,.5);">数量</div>
        <div style="width:70px;height:50px;border:1px solid rgb(184,183,189);float:left;">
          <input type="number" min="1" max="5" step="1" style="width:100%;height:100%;" />
        </div>
        <div
          style="margin-left:15px; width:400px;height:50px;line-height:50px;text-align:left; float:left;color:rgba(0,0,0,.5);"
        >件 库存3228件 （每人限购5件）</div>
      </div>
      <div style="width:100%;height:50px; margin-bottom:20px;">
        <div style="float:left; margin-top:11px;color:rgba(0,0,0,.5);">花呗分期</div>
        <div class="fenqi" v-for="(item,index) in fenqi" :key="index">{{item}}</div>
      </div>
      <div style="margin-top:30px;">
        <a href="#" class="a1">立即购买</a>
        <a href="#" class="a2">加入购物车</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Myjob",
  data() {
    return {
      arr: [],
      arr2: [],
      chima: ["165/S", "170/M", "175/L", "180/XL", "185/XXL"],
      yanse: ["黑色", "白色", "灰色", "红色", "蓝色"],
      fenqi: ["136x3期", "69x6期", "35x12期"],
      src:
        "https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/454291526/O1CN01uPujRS1N8wxPCpyO4_!!0-item_pic.jpg_360x360Q90.jpg_.webp"
    };
  },

  methods: {
    fun: function(photourl) {
      // console.log("aaa")
      this.src = photourl;
    }
  },
  mounted() {
    let courseid = this.$route.params.id;

    this.$http
      .get(`http://192.168.3.33:8888/course/?id=${courseid}`)
      .then(response => {
        console.log(response.data);
        this.arr2 = response.data;
      });
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
}
.left {
  width: 45%;
  height: 600px;
  /* background-color: green; */
  float: left;
}
.top {
  width: 50%;
  height: 65%;
  margin-left: 25%;
  margin-bottom: 5%;
  /* background-color: green; */
}
.top img {
  width: 100%;
  height: 100%;
}

.bottom {
  width: 80%;
  height: 20%;
  /* background-color: red; */
  margin-left: 10%;
}
.bottom > div {
  float: left;
  width: 15%;
  height: 90%;
  margin-top: 1%;
  /* background-color: green; */
  margin-left: 22px;
  cursor: pointer;
}

.bottom > div:hover {
  border: 3px solid black;
}
.bottom > div > img {
  width: 99%;
  height: 99%;
}

.bottom2 {
  width: 80%;
  height: 10%;
  margin-left: 10%;
  padding-top: 40px;
  /* background-color: black; */
}

.bottom2 a {
  color: #c9c9c9;
  text-decoration: none;
  font-size: 14px;
}
.bottom2 .a2 {
  margin-left: 333px;
}

.right {
  width: 55%;
  height: 600px;
  /* background-color: red; */
  float: right;
}
.right > .p {
  color: red;
}

.right > .img {
  width: 80%;
  height: 120px;
  background-color: green;
  cursor: pointer;
}
.right .a1 {
  text-decoration: none;
  display: inline-block;
  width: 25%;
  height: 40px;
  background-color: rgb(255, 237, 237);
  color: red;
  line-height: 40px;
  text-align: center;
  margin-right: 10%;
  border: 1px solid red;
}
.right .a2 {
  text-decoration: none;
  display: inline-block;
  width: 25%;
  height: 40px;
  background-color: red;
  color: white;
  line-height: 40px;
  text-align: center;
}

.right .div1 {
  height: 40px;
  width: 100%;
  border-bottom: 1px solid #cccccc;
}
.right .span1 {
  color: rgba(0, 0, 0, 0.5);
  margin-right: 40px;
}

.right .chima {
  float: left;
  margin-left: 10px;
  width: 70px;
  height: 40px;
  border: 1px solid rgb(184, 183, 189);
  line-height: 40px;
  text-align: center;
  cursor: pointer;
}
.right .chima:hover,
.right .yanse:hover,
.right .fenqi:hover {
  border-color: red;
}

.right .yanse {
  float: left;
  margin-left: 10px;
  width: 70px;
  height: 40px;
  border: 1px solid rgb(184, 183, 189);
  line-height: 40px;
  text-align: center;
  cursor: pointer;
}

.right .fenqi {
  float: left;
  margin-left: 10px;
  width: 100px;
  height: 50px;
  border: 1px solid rgb(184, 183, 189);
  line-height: 50px;
  text-align: center;
  cursor: pointer;
}
</style>
