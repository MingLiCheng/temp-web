<!-- 主页 -->
<template>
  <div class="home" ref="home">
    <main class="page-body">
      <article class="container">
        <h1 class="cotainer-title">前端通用模板
          <p class="sub-title">——兼容IE8的多页应用模板</p>
        </h1>
        <p class="container-info">本模板适用于需要兼容IE8浏览器的前端应用场景，例如门户网站类应用等。</p>
      </article>
    </main>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {};
  },
  components: {},

  computed: {},

  methods: {}
};
</script>
<style lang='less' scoped>
@media screen and (min-width: 1201px) {
  .home {
    flex: 1;
    margin: 0;
    background: url("../assets/body.jpg") no-repeat center;
    background-size:cover;
    .page-body {
      width: 1200px;
      // height: 570px;
      margin: 0 auto;
      .container {
        text-align: left;
        padding-top: 70px;
        padding-left: 100px;
        box-sizing: border-box;
        border: transparent 1px solid;
        .cotainer-title {
          font-size: 50px;
          margin: 0;
          .sub-title {
            font-size: 18px;
            line-height: 32px;
            /* padding: 0; */
            margin: 0;
            /* font-family: sans-serif */
            font-weight: normal;
            font-size: 16px;
          }
        }
        .container-info {
          line-height: 32px;
          margin: 0;
          font-size: 16px;
          /* padding: 0 */
        }
      }
    }
  }
}
@media screen and (min-width: 993px) and (max-width: 1200px) {
  .home {
    flex: 1;
    margin: 0;
    background: url("../assets/body.jpg") no-repeat center;
    background-size:cover;
    .page-body {
      width: 100%;
      // height: 570px;
      margin: 0 auto;
      .container {
        text-align: left;
        padding-top: 70px;
        padding-left: 100px;
        box-sizing: border-box;
        border: transparent 1px solid;
        .cotainer-title {
          font-size: 50px;
          margin: 0;
          .sub-title {
            font-size: 18px;
            line-height: 32px;
            /* padding: 0; */
            margin: 0;
            /* font-family: sans-serif */
            font-weight: normal;
            font-size: 16px;
          }
        }
        .container-info {
          line-height: 32px;
          margin: 0;
          font-size: 16px;
          /* padding: 0 */
        }
      }
    }
  }
}
@media screen and (min-width: 769px) and (max-width: 992px) {
  .home {
    flex: 1;
    margin: 0;
    background: url("../assets/body.jpg") no-repeat center;
    background-size:cover;
    .page-body {
      width: 100%;
      // height: 570px;
      margin: 0 auto;
      .container {
        text-align: left;
        padding-top: 70px;
        padding-left: 100px;
        box-sizing: border-box;
        border: transparent 1px solid;
        .cotainer-title {
          font-size: 50px;
          margin: 0;
          .sub-title {
            font-size: 18px;
            line-height: 32px;
            /* padding: 0; */
            margin: 0;
            /* font-family: sans-serif */
            font-weight: normal;
            font-size: 16px;
          }
        }
        .container-info {
          line-height: 32px;
          margin: 0;
          font-size: 16px;
          /* padding: 0 */
        }
      }
    }
  }
}
@media screen and (min-width: 481px) and (max-width: 768px) {
  .home {
    flex: 1;
    margin: 0;
    background: url("../assets/body.jpg") no-repeat center;
    background-size:cover;
    .page-body {
      width: 100%;
      // height: 570px;
      margin: 0 auto;
      .container {
        text-align: left;
        padding-top: 70px;
        padding-left: 100px;
        box-sizing: border-box;
        border: transparent 1px solid;
        .cotainer-title {
          font-size: 50px;
          margin: 0;
          .sub-title {
            font-size: 18px;
            line-height: 32px;
            /* padding: 0; */
            margin: 0;
            /* font-family: sans-serif */
            font-weight: normal;
            font-size: 16px;
          }
        }
        .container-info {
          line-height: 32px;
          margin: 0;
          font-size: 16px;
          /* padding: 0 */
        }
      }
    }
  }
}
@media screen and (max-width: 480px) {
  .home {
    flex: 1;
    margin: 0;
    background: url("../assets/body.jpg") no-repeat center;
    background-size:cover;
    .page-body {
      width: 100%;
      // height: 490px;
      margin: 0 auto;
      .container {
        text-align: left;
        padding-top: 70px;
        padding-left: 53px;
        box-sizing: border-box;
        border: transparent 1px solid;
        .cotainer-title {
          font-size: 30px;
          margin: 0;
          .sub-title {
            font-size: 14px;
            line-height: 32px;
            /* padding: 0; */
            margin: 0;
            /* font-family: sans-serif */
            font-weight: normal;
            // font-size: 16px;
          }
        }
        .container-info {
          line-height: 32px;
          margin: 0;
          font-size: 14px;
          /* padding: 0 */
        }
      }
    }
  }
}
</style>
