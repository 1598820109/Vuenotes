<template>
  <div class="section">
    <div class="layout">
      <Layout>
        <!-- 首页内容 -->
        <HeaderNav></HeaderNav>
        <!-- 首页内容 end-->
        <!-- 商品导航 -->
        <!-- 商品导航 end-->
        <!-- 商品列表 -->
        <Content></Content>
        <!-- 商品列表 end -->
         <BackTop></BackTop>
      </Layout>
    </div>
  </div>
</template>
<script>
  // 引入首页头部组件
  import HeaderNav from "@/components/Header.vue";

  // 引入公共列表组件
  import Content from "@/components/Content.vue";
  export default {
    components: {
      // 公用头部组件
      HeaderNav,
      Content,
      // ShopNav
    },
  };
</script>

<style>
  @import '../assets/css/style.css';
</style>


