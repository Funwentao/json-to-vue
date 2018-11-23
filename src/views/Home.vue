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
  </div>
  <div class="slot-content" ref="content"></div>
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
      seletedNode: null
    }
  },
  created() {
    document.addEventListener("keyup", e => {
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
  }
}
</style>
