<template>
  <div class="layout-header">
    <div class="layout-header__container">
      <div class="left-wrap">
        <div class="name">插件使用文档</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "layout-header"
}

</script>

<style scoped lang="scss">
.layout-header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: #ffffff;
  box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.06); 
  z-index: 100;
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 58px;
    padding-left: 20px;
    .left-wrap {
      display: flex;
      align-items: center;
      .logo {
        height: 36px;
      }
      .name {
        font-size: 26px;
        font-weight: 500;
        text-align: LEFT;
        color: #2459f6;
      }
    }
  }
}
</style>
