<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64" />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="description">
          {{ seller.description }}/{{ seller.deliveryTime }}分钟送达
        </div>
        <div class="support" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>
        <div class="support-count" v-if="seller.supports">
          <span class="count">{{ seller.supports.length }}个</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{ seller.bulletin }}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%" />
    </div>
    <div class="detail" v-show="detailShow"></div>
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
    return {
      detailShow: false,
    }
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
}
</script>

<style lang="stylus">
@import '../../common/stylus/mixin'

.header
  position relative
  overflow hidden
  color #fff
  .content-wrapper
    position relative
    padding 24px 12px 18px 24px
    color #fff
    background rgba(7, 17, 27, 0.5)
    .avatar
      display inline-block
      vertical-align top
      img
        border-radius 2px
    .content
      display inline-block
      margin-left 16px
      .title
        margin 2px 0 8px
        .brand
          display inline-block
          vertical-align top
          width 30px
          height 18px
          bg-image('brand')
          background-size 30px 18px
          background-repeat no-repeat
        .name
          margin-left 6px
          line-height 18px
          font-size 16px
          font-weight bold
      .description
        font-size 12px
        font-weight 200
      .support
        margin 10px 0 2px
        .icon
          display inline-block
          vertical-align top
          width 12px
          height 12px
          background-size 12px 12px
          background-repeat no-repeat
          &.decrease
            bg-image('decrease_1')
          &.discount
            bg-image('discount_1')
          &.special
            bg-image('special_1')
          &.invoice
            bg-image('invoice_1')
          &.guarantee
            bg-image('guarantee_1')
        .text
          margin-left 4px
          line-height 12px
          font-size 10px
          font-weight 200
          vertical-align top
      .support-count
        position absolute
        right 12px
        bottom 15px
        display flex
        padding 0 8px
        border-radius 16px
        background rgba(0, 0, 0, 0.2)
        .count
          margin-right 2px
          line-height 24px
          font-size 10px
          font-weight 200
        .icon-keyboard_arrow_right
          line-height 24px
  .bulletin-wrapper
    display flex
    align-items center
    padding 0 12px
    height 28px
    background rgba(7, 17, 27, 0.6)
    .bulletin-title
      display inline-block
      width 22px
      height 12px
      bg-image('bulletin')
      background-size 22px 12px
      background-repeat no-repeat
    .bulletin-text
      margin 0 2px
      flex 1
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
      font-size 10px
      font-weight 200
  .background
    z-index -1
    position absolute
    left 0
    top 0
    width 100%
    height 100%
    img
      filter blur(5px)
</style>
