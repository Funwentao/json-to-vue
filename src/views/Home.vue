<template>
<div class="drag-content">
  <div class="component-content">
    <div class="mt10">
      <el-button ref="button" type="primary" draggable
      @dragstart.native="onDragStart"
      @dragend.native="onDragEnd($event,'button')">{{btnName}}</el-button>
    </div>
    <div class="mt10">
      <el-input v-model="btnName" ref="input" draggable class="input"
      @dragstart.native="onDragStart"
      @dragend.native="onDragEnd($event,'input')"></el-input>
    </div>
    <div class="mt10">
      <el-table ref="table" draggable class="table"
      @dragstart.native="onDragStart"
      @dragend.native="onDragEnd($event,'table')"></el-table>
    </div>
  </div>
  <div class="slot-content">
    <div ref="content" class="result-content"></div>
    <div class="btn-content">
      <el-button @click="onSubmitComponents" type="primary">提交</el-button>
    </div>
  </div>
</div>
</template>
<script>
import {
  deleteNode,
  downOnePx,
  upOnePx,
  leftOnePx,
  rightOnePx,
  addRedBorder
} from "../lib/operateNode"
export default {
  data() {
    return {
      btnName: "按钮",
      startX: 0,
      startY: 0,
      seletedNode: null,
      moveFlage: false
    }
  },
  created() {
    document.addEventListener("keydown", e => {
      if (this.seletedNode) {
        let { seletedNode } = this
        let { keyCode } = e
        switch (keyCode) {
          case 46:
            this.seletedNode = deleteNode(seletedNode)
            break
          case 40:
            downOnePx(seletedNode)
            break
          case 38:
            upOnePx(seletedNode)
            break
          case 37:
            leftOnePx(seletedNode)
            break
          case 39:
            rightOnePx(seletedNode)
            break
        }
      }
    });
    document.addEventListener("keyup", e => {
      this.moveFlage = false
    });
    
  },
  methods: {
    onDragStart(e) {
      let { clientX, clientY } = e
      this.startX = clientX
      this.startY = clientY
    },
    onDragEnd(e, ref) {
      let { clientX, pageY } = e
      let { startX, startY } = this
      let newNode = this.$refs[ref].$el.cloneNode(true)
      this.bindClik(newNode)
      const style1 = "position: absolute;"
      newNode.style = `${style1}top:${pageY}px;left:${clientX -250 - startX}px`
      this.$refs.content.appendChild(newNode)
    },
    bindClik(el) {
      el.addEventListener("click", () => {
        this.seletedNode = el
        // addRedBorder(el)
      })
    },
    onSubmitComponents () {
      console.log(this.$refs.content.innerHTML)
    }
  }
}
</script>
<style lang="scss">
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}
.input {
  width: 200px;
}
.drag-content {
  display: flex;
  height: 100%;
  .component-content {
    width: 250px;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    border-right: 1px solid #ccc;
    .mt10 {
      margin-top: 10px;
    }
  }
  .slot-content {
    flex: 1;
    height: 100%;
    position: relative;
    box-sizing: border-box;
    .result-content{
      height: 95%;
      border-bottom: 1px solid #ccc;
      box-sizing: border-box;
    }
    .btn-content{
      height: 5%;
      text-align: right;
      padding: 10px 20px 0 0 ;
      box-sizing: border-box;
    }
  }
}
</style>
