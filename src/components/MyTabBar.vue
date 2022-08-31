<template>
  <div class="my-tab-bar">
    <div :class="['tab-item',{current:currentTab===tab.componentName}]" v-for="tab in tabList" :key="tab.id" @click="changeTab(tab)">
      <!-- 图标 -->
      <span :class="['iconfont',tab.iconText]"></span>
      <!-- 文字 -->
      <span>{{tab.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabList: {
      type: Array,
      require: true,
      validator: (val) => {
        if (val.length >= 2 && val.length <= 5) {
          return true
        } else {
          console.error('数据源必须在2-5项')
          return false
        }
      }
    },
    currentTab: {
      type: String,
      default: 'MyGoodsList'
    }
  },
  methods: {
    changeTab (item) {
      this.$emit('update:currentTab', item.componentName)
    }
  }
}
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 20px;
  }
}

.current {
  color: #1d7bff;
  .iconfont{
    color: #1d7bff;
  }
}
</style>
