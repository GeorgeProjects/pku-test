/**
 * Created by yangtaofeng on 2017/1/13.
 */
import template from './template.html'

export default {
  template,
  props: {
    records: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
