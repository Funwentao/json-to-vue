// @ is an alias to /src
import home from '../pageData/home'

export default {
  name: 'home',
  created () {
    console.log(home)
  },
  data: function () {
    return {
      input: ''
    }
  },
  methods: {
    onTest (str) {
      console.log(str)
    },
    sync (prop, value) {
      this[prop] = value
    }
  },
  render: function (h) {
    return (
      <div className="home" >
        <div className="components-content" style="position:relative">
          <el-button type="primary" onClick={() => this.onTest('test1')} style="position:absolute;top:50px;left:50px;">按钮</el-button>
          <el-input on-input={(value) => this.sync('input', value)}></el-input>
          <span>{this.input}</span>
        </div>
        <div className="main-content"></div>
      </div>
    )
  }
}
