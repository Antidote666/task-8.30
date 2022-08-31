<template>
  <div>
    <input v-if="inputVisible" v-focus type="text" v-model="tagInpt" style="width: 50px;" @blur="showInput" @keyup.enter="showInput">
    <button v-else type="button"
    class="btn btn-primary btn-sm" @click="showBtn">+Tag</button>
    <span class="badge bg-warning text-dark"
    v-for="(tag,index) in tags" :key="index">{{tag}}</span>
  </div>
</template>

<script>
export default {
  name: 'MyTags',
  data () {
    return {
      tagInpt: ''
    }
  },
  props: {
    tags: {
      type: Array,
      default: () => ([])
    },
    inputVisible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    showBtn () {
      this.$emit('update:inputVisible', true)
    },
    showInput () {
      this.$emit('update:inputVisible', false)
      if (this.tagInpt !== '') {
        this.$emit('addTag', this.tagInpt)
      }
      this.tagInpt = ''
    }
  },
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  }
}
</script>

<style>

</style>
