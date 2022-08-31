<template>
  <div id="app">
    <my-header title="Tabs"></my-header>
    <component :is="currentTab"></component>
    <my-tab-bar :tabList="tabList" :currentTab.sync="currentTab"></my-tab-bar>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyTabBar from './components/MyTabBar.vue'
import MyGoodsList from './view/MyGoodsList.vue'
import MyGoodsSearch from './view/MyGoodsSearch.vue'
import MyUserInfo from './view/MyUserInfo.vue'
export default {
  name: 'APP',
  data () {
    return {
      tabList: [
        {
          iconText: 'icon-shangpinliebiao',
          text: '商品列表',
          componentName: 'MyGoodsList'
        },
        {
          iconText: 'icon-sousuo',
          text: '商品搜索',
          componentName: 'MyGoodsSearch'
        },
        {
          iconText: 'icon-user',
          text: '我的信息',
          componentName: 'MyUserInfo'
        }
      ],
      currentTab: 'MyGoodsList'
    }
  },
  components: {
    MyTabBar,
    MyHeader,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo
  }
}
</script>

<style lang="less" scoped>
  #app{
    padding: 50px 0 45px 0;
  }

</style>
