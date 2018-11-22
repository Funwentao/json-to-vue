<template>
<div class="drag-content" @drag="onDrag">

</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onDrag(e) {
      console.log(e)
    }
  }
};
</script>
<style lang="sass" scoped>

</style>
