import jsonToTemplate from '@/jsonToTemplate'
import home from '../pageData/home'

export default {
  template: jsonToTemplate(home),
  data () {
    return {
      input: ''
    }
  },
  created () {
    console.log(jsonToTemplate(home))
  }
}
