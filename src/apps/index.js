/**
 * Created by huangxinxin on 16/8/22.
 */
import style from './style.less'
import template from './template.html'
import {updateTestData} from '../vuex/actions'
import {testData, testDataUpdateStatus} from '../vuex/getters'

export default{
  template,
  vuex: {
    actions: {
      updateTestData
    },
    getters: {
      testData, testDataUpdateStatus
    }
  },
  data () {
    return {
      style,
      message: 'Hello World :)',
      isSuccess: false,
      isFailed: false
    }
  },
  computed: {
    privateTestData: {
      get () {
        return this.testData
      },
      set (v) {
        this.updateTestData(v)
      }
    },
    className () {
      let obj = {}
      obj[style['hl-span']] = this.isSuccess
      obj[style['hl-span-error']] = this.isFailed
      return obj
    }
  },
  watch: {
    testDataUpdateStatus (now) {
      if (this.CommonsConfig.debug) {
        console.log(now)
        this.isSuccess = this.VuexUtils.isStatusEqual(now, this.VuexMutations.TEST_DATA_UPDATE_SUCCESS)
        this.isFailed = this.VuexUtils.isStatusEqual(now, this.VuexMutations.TEST_DATA_UPDATE_FAILED)
      }
    }
  }
}
