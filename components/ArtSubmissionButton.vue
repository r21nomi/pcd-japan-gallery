<template>
  <div class="artSubmissionButton">
    <a href="javascript:void(0)" target="_blank"
      >スケッチの募集は修了しました</a
    >
    <p class="caption">たくさんの投稿ありがとうございました。</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({
  components: {},
})
export default class ArtSubmissionButton extends Vue {}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'
@require '~@/assets/style/mixin'

.artSubmissionButton
  text-align center

  a
    display inline-block
    padding $padding_20 $padding_40
    background-color $gray_aaa
    color $white_fff
    font-size $font_size_16
    font-weight $font_weight_bold
    text-decoration none
    pointer-events none

  .caption
    font-size $font_size_12
    color $white_fff
    margin-top $margin_12
</style>
