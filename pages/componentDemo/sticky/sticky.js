export default {
  data () {
    return {
      items: [],
      offsetTop: ui.DEFAULT_HEADER_HEIGHT,
      imgHeight: parseInt(ui.WIN_WIDTH / 1125 * 628)
    }
  },
  mounted () {
    for (let i = 1; i <= 20; i++) {
      this.items.push(i + ' - 内容文本')
    }
  }
}
