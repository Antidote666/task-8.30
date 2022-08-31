<template>
  <div>
    <my-table :list="goodList">
      <template #head>
        <tr>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </tr>
      </template>
      <template #body="{item}">
        <td>{{item.id}}</td>
        <td>{{item.goods_name}}</td>
        <td>{{item.goods_price}}</td>
        <td>
            <my-tags :tags="item.tags" :inputVisible.sync="item.inputVisible" @addTag="item.tags.push($event)"></my-tags>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="delGood(item)">删除</button>
        </td>
      </template>
    </my-table>
  </div>
</template>

<script>
import MyTags from '@/components/MyTags.vue'
import MyTable from '@/components/MyTable.vue'
import { getTabList } from '@/api/table'
export default {
  name: 'MyGoodsList',
  data () {
    return {
      goodList: []
    }
  },
  async created () {
    try {
      this.goodList = await getTabList()
      console.log(this.goodList)
    } catch (error) {

    }
  },
  methods: {
    delGood (data) {
      this.goodList = this.goodList.filter(item => item !== data)
    }
  },
  components: {
    MyTable,
    MyTags
  }
}
</script>

<style>

</style>
