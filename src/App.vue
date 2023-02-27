<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import VHeader from 'components/header/v-header.vue'

const ERR_OK = 0
export default {
  components: { VHeader },
  data() {
    return {
      seller: {},
    }
  },
  created() {
    this.$http.get('/api/seller').then((res) => {
      if (res.data.errno === ERR_OK) {
        this.seller = res.data.data
      }
    })
  },
}
</script>
<style lang="stylus">
@import './common/stylus/mixin'
.tab
  display flex
  height 40px
  line-height 40px
  border-1px(rgba(7, 17, 27, 0.1))
  .tab-item
    flex 1
    text-align center
    & > a
      display block
      color rgb(77, 85, 93)
      &.active
        color rgb(240, 20, 20)
</style>
