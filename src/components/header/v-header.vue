<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64" />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name"></span>
        </div>
        <div class="description"></div>
        <div class="support"></div>
      </div>
    </div>
    <div class="bulletin-wrapper"></div>
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object,
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="stylus">
@import '../../common/stylus/mixin'

.header
  .content-wrapper
    padding 24px 12px 18px 24px
    background #000
    color #fff
    .content
      .avatar
        display inline-block
        img
          border-radius 2px
      .title
        .brand
          display inline-block
          width 30px
          height 18px
          bg-image('brand')
          background-size 30px 18px
          background-repeat no-repeat
</style>
