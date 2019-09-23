<template>
  <div id="app">
    <div class="box-1" v-for="(item, index) in moveList" :key="index">
      <div class="imgbox" v-on:click="href(index)">
        <img class="img" :src="item.photourl" alt />
        <div class="tongkuan">
          <div class="text1">找同款</div>
          <div class="text2">找相似</div>
        </div>
      </div>

      <div class="box-2">
        <div class="box-2-1">
          <div class="sprice">￥{{item.price}}</div>
          <div class="number">{{item.buynum}}</div>
        </div>
        <div v-on:click="href" class="box-2-2">{{item.photodes}}</div>
        <div class="box-2-3">
          <div class="shop">
            <div class="icon">
              <span class="sp">一</span>
              <span class="sp">一</span>
              <span class="sp">一</span>
            </div>
            <div class="shop_name">
              <u>gxg官方旗舰店</u>
            </div>
          </div>
          <div class="place">{{item.pholocation}}</div>
        </div>
        <div class="box-2-4">
          <div class="tianmao">
            <img class="tianmao" src="../../imgs/tm.png" alt />
          </div>
          <div class="wangwang">
            <img class="wangwang" src="../../imgs/ww.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      moveList: []
    };
  },
  name: "taobao_gxg",
  methods: {
    href: function(index) {
      console.log(index);
      let num = index;
      this.$router.push(`./myjob/${num}`);
    }
  },
  mounted() {
    this.$http.get("http://192.168.3.33:8888/photo").then(res => {
      this.moveList = res.data;
      console.log(this.moveList);
    });
  }
};
</script>


<style scoped>
@import url(//at.alicdn.com/t/font_1292176_92lkikwkouo.css);
#app {
  width: 1000px;
  height: 730px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
}

.box-1 {
  width: 222px;
  height: 350px;
}

.imgbox {
  width: 220px;
  height: 220px;
  margin: 0 auto;
  position: relative;
}
.text1 {
  width: 109px;
  height: 30px;
  text-align: center;
  display: inline-block;
  line-height: 30px;
  font-size: 12px;
  border-right: 1px solid rgb(223, 195, 195);
}
.text2 {
  width: 110px;
  height: 30px;
  text-align: center;
  display: inline-block;
  line-height: 30px;
  font-size: 12px;
}
.tongkuan {
  width: 220px;
  height: 30px;
  position: absolute;
  top: 190px;
  left: 0px;
  color: rgb(241, 231, 231);
  background-color: #ff4400;
  opacity: 0.85;
  display: none;
}
.imgbox:hover .tongkuan {
  display: block;
}

.img {
  width: 220px;
  height: 220px;
}
.box-1:hover {
  border: 1px solid #ff4400;
}
.box-2 {
  width: 220px;
  height: 121px;
}
.box-2-1 {
  width: 220px;
  height: 22px;
  display: flex;
  margin-top: 5px;
  justify-content: space-between;
}
.sprice {
  color: #ff4400;
  font-size: 18px;
  margin-left: 5px;
}
.number {
  color: #888888;
  font-size: 12px;
}
.box-2-2 {
  width: 220px;
  height: 36px;
  color: #404040;
  font-size: 12px;
  margin-left: 5px;
  text-align: left;
}
.box-2-3 {
  width: 220px;
  height: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.shop {
  width: 105px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.shop_name {
  color: #888888;
  font-size: 12px;
}
.place {
  width: 52px;
  height: 100%;
  color: #888888;
  font-size: 12px;
}
.icon {
  width: 13px;
  height: 8px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
}
.sp {
  width: 8px;
  height: 2px;
  color: #ff4400;
  font-weight: 900;
  margin-bottom: 2px;
  font-size: 12px;
  line-height: 2px;
}
.box-2-4 {
  width: 220px;
  height: 20px;
  margin-top: 10px;
  margin-left: 5px;

  display: flex;
  justify-content: space-between;
}
.tianmao {
  width: 16px;
  height: 16px;
}
.wangwang {
  width: 16px;
  height: 16px;
  margin-right: 10px;
}
</style>
