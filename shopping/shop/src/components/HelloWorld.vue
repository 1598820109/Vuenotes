<template>
  <div class="hello">
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%'}">
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="">
                        <MenuItem name="1">
                           <Icon type="ios-home" size="21" />
                            Home
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-list-box" size="21" />
                            Product list
                        </MenuItem>
                        <!-- <MenuItem name="3">
                            <Icon type="ios-search"  size="21" />
                        </MenuItem> -->
                    </div>

                    <div class="layout-nav">
                        <MenuItem name="3">
                            <Icon type="ios-unlock-outline" size="21" />
                             Sign up
                        </MenuItem>

                        <MenuItem name="4">
                            <Icon type="md-unlock" size="21" />
                            Login
                        </MenuItem>
                    </div>
                </Menu>
            </Header>

            <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
                Content
            </Content>
        </Layout>
    </div>
  </div>
</template>

<script>
  export default {
   
    }
</script>

<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
</style>