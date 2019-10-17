<template>
  <!-- 商品列表 -->
  <Content class="content" :style="{margin: '88px 20px 0', background: '#fff', minHeight: '700px'}">
    
    <ShopNav></ShopNav>

    <Row style="padding:20px">
      <router-link
        to="/"
        tag="Col"
        v-for="(item,index) in items"
        :key="index"
        class="ivu-col-span-7 ivu-col-offset-1 IndexList"
      >
        <Card class="H_card">
          <div style="text-align:center">
            <img class="shopImg" v-lazy="item.image" />
            <p class="shopTitle">{{item.name}}</p>
            <h3 class="rmb">￥{{item.pPrice}}</h3>
            <p class="outline">
              <Icon type="ios-happy-outline" size="18" />
              好评:{{item.goodRate}}
            </p>
            <Button type="error" class="bot" ghost>点击购买</Button>
          </div>
        </Card>
      </router-link>
    </Row>


  </Content>
  <!-- 商品列表 -->
</template>

<script>

// 引入首页头部组件
import ShopNav from "@/components/Nav.vue";

// 引入axios
import axios from "axios";
export default {
  data() {
    return {
      items: [],
      sortFlat:true,
    };
  },

  components:{
      ShopNav,
  },

  created(data) {
    var sort = this.sortFlat?1:-1;
    axios.get("http://localhost:3000/shops/api",{params:{sort:sort}}).then(res => {
      var data = res.data.result;
      this.items = data;
    });
  },

   shopsPrice:function(){
       console.log(321);
   }

};
</script>