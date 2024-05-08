<template>
  <div class="page-container">
    <!-- <layout-header></layout-header> -->
    <div class="page-content">
      <!-- <el-scrollbar class="page-content-nav">
        <div class="side-nav">
          <el-menu :router="true">
            <el-menu-item index="/page-start"> 开始 </el-menu-item>
          </el-menu>
        </div>
      </el-scrollbar> -->
      <el-scrollbar class="page-content-main">
        <div id="main">
          <router-view class="content"></router-view>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import LayoutHeader from "./header.vue";
export default {
  components: {
    LayoutHeader,
  },
};
</script>

<style scoped lang="scss">
.page-container {
  padding-top: 72px;
  height: 100vh;
  box-sizing: border-box;
  .page-content {
    display: flex;
    height: calc(100vh - 72px);
    overflow: hidden;
    &-nav {
      width: 300px;
      flex-shrink: 0;
    }
    &-main {
      flex: 1;
      box-sizing: border-box;
      .content {
        padding: 0 40px 40px;
        margin-top: 0;
      }
    }
  }
}

::v-deep {
  .page-content-main {
    h2 {
      font-size: 28px;
      margin: 0;
      font-weight: normal;
      color: #1f2f3d;
    }
    h3 {
      margin: 55px 0 20px;
      font-weight: 400;
      color: #1f2f3d;
      font-size: 22px;
    }
    p {
      font-size: 14px;
      color: #5e6d82;
      line-height: 1.5em;
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
    }
    .demo-block {
      margin-bottom: 24px;
    }
    pre {
      padding: 16px;
      overflow: auto;
      font-size: 100%;
      line-height: 1.45;
      border-radius: 6px;
      color: rgb(31, 35, 40);
      background-color: rgb(246, 248, 250);
    }
    pre code {
      background-color: initial;
      border: none;
      padding: 0;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      background-color: #fff;
      font-size: 14px;
      margin-bottom: 45px;
      line-height: 1.5em;

      strong {
        font-weight: normal;
      }

      td,
      th {
        border-bottom: 1px solid #dcdfe6;
        padding: 15px;
        max-width: 250px;
      }

      th {
        text-align: left;
        white-space: nowrap;
        color: #909399;
        font-weight: normal;
      }

      td {
        color: #606266;
      }

      th:first-child,
      td:first-child {
        padding-left: 10px;
      }
    }
  }
  .el-menu {
    border-right: none;
  }
}
</style>
