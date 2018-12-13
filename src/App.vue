<template>
  <div id="app">
    <!-- 头部样式 -->
    <header class="page-header" ref="header">
      <div class="container">
        <div class="logo"></div>
        <a href="javascript:;" class="link-provincial-government">***人民政府</a>
        <div class="web-app">
          <div class="dropdown-menue" @click="showMenue">
            <a href="javascript:;">
              <img src="./assets/nav.png">
            </a>
          </div>
          <ul ref="menuelist">
            <li v-for="item in navList" :key="item.id">
              <a href="javascript:;">{{ item.text }}</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <nav class="main-nav" ref="nav">
      <div class="container">
        <router-link
          class="title"
          v-for="item in navList"
          :key="item.id"
          :to="item.url"
        >{{item.text}}</router-link>
      </div>
    </nav>
    <transition>
      <router-view/>
    </transition>

    <!-- 底部样式 -->
    <footer class="page-footer" ref="footer">
      <div class="container">
        <div class="footer-link">
          <a href="javascript:;" class="find-error">
            <img src="./assets/jiucuo.png">
          </a>
          <a href="javascript:;" class="dangzhengjiguan" target="_blank">
            <img src="./assets/dzjg.png">
          </a>
        </div>
        <div class="copyright">
          <div class="line">
            <a href="javascript:;">关于***政务服务网</a> |
            <a href="javascript:;">本站声明</a> |
            <a href="javascript:;">帮助中心</a>
            |
            <a href="javascript:;">反馈建议</a>
          </div>
          <div class="line">
            <span>主办单位：***人民政府办公厅</span>
            <span>运行单位：***人民政府政务服务中心</span>
            <span>建设单位：***发展和改革委员会</span>
          </div>
          <div class="line">
            <span>备案序号：皖ICP备17023***号</span>
            <span>皖公网安备34011102000***号</span>
          </div>
          <div class="line">
            <span class="tel">服务热线</span>（工作日08:30～12:00 13:30～17:30）
          </div>
        </div>
        <div class="copyright-webapp">
          <span>前端通用模板</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      navList: [
        // { name: "首页", url: "/home" },
        // { name: "新闻中心", url: "/content" },
        // { name: "实时播报", url: "/list" },
        // { name: "娱乐新闻", url: "/play" },
        // { name: "体育新闻", url: "/sport" },
        // { name: "联系我们", url: "/link" }
      ],
    };
  },
  created() {
    this.$http.get('static/data/nav.json').then(result => {
      console.log(result.body);
      this.navList = result.body

    })
  },
  methods: {
    showMenue() {
      if (this.$refs.menuelist.style.display === "block") {
        this.$refs.menuelist.style.display = "none";
      } else this.$refs.menuelist.style.display = "block";
    }
  },

};
</script>

<style lang='less'>
#app {
  flex-direction: column;
}
@media screen and (min-width: 1201px) {
  #app {
    height: 100%;
    display: flex;
    /*头部样式*/
    .page-header {
      width: 100%;
      // background: #333;
      .container {
        width: 1200px;
        height: 88px;
        margin: auto;
        // background: #f00;
        position: relative;
        .logo {
          width: 277px;
          height: 51px;
          position: absolute;
          left: 0;
          top: 25px;
          background: url("./assets/logo.png") left top no-repeat;
        }
        .link-provincial-government {
          position: absolute;
          line-height: 30px;
          right: 0;
          top: 50%;
          margin-top: -15px;
          background: url(./assets/seal.png) left center no-repeat;
          padding-left: 30px;
        }

        .link-provincial-government:link,
        .link-provincial-government:visited {
          text-decoration: none;
          color: #333;
        }

        .link-provincial-government:hover {
          text-decoration: none;
          color: #f00;
        }
        .web-app {
          display: none;
        }
      }
    }
    /*导航演示*/
    .main-nav {
      background: #369;
      width: 100%;
      .container {
        width: 1200px;
        height: 30px;
        padding: 5px;
        text-align: center;
        margin: 0 auto;
        .title {
          width: 16%;
          text-decoration: none;
          color: #fff;
          text-align: center;
          padding: 0 40px;
          line-height: 30px;
        }
      }
    }

    /*底部样式*/
    .page-footer {
      width: 100%;
      background: #369;
      padding: 20px 0;
      /* overflow: hidden; */
      .container {
        width: 1200px;
        margin: 0 auto;
        position: relative;
        .footer-link {
          position: absolute;
          left: 0;
          top: 25%;
          width: 270px;
          height: 61px;
          letter-spacing: 20px;
          a {
            text-decoration: none;
          }
        }
        .copyright {
          margin-left: 270px;
          padding-left: 30px;
          text-align: left;
          border-left: #4d71a6 1px solid;
          color: #fff;
          font-size: 14px;
          line-height: 30px;
          a {
            color: #fff;
            text-decoration: none;
          }
          .tel {
            display: inline-block;
            height: 30px;
            background: #39c url(./assets/tel.png) 16px center no-repeat;
            padding-left: 44px;
            padding-right: 17px;
            border-radius: 5px;
          }
        }
        .copyright-webapp {
          display: none;
        }
      }
    }
  }
}
@media screen and (min-width: 993px) and (max-width: 1200px) {
  #app {
    height: 100%;
    display: flex;
    /*头部样式*/
    .page-header {
      width: 100%;
      .container {
        position: relative;
        margin: auto;
        height: 88px;
        width: 68%;
        .logo {
          width: 277px;
          height: 51px;
          position: absolute;
          left: 0;
          top: 25px;
          background: url("./assets/logo.png") left top no-repeat;
        }
        .link-provincial-government {
          position: absolute;
          line-height: 30px;
          right: 0;
          top: 50%;
          margin-top: -15px;
          background: url(./assets/seal.png) left center no-repeat;
          padding-left: 30px;
        }

        .link-provincial-government:link,
        .link-provincial-government:visited {
          text-decoration: none;
          color: #333;
        }

        .link-provincial-government:hover {
          text-decoration: none;
          color: #f00;
        }
        .web-app {
          display: none;
        }
      }
    }
    /*导航演示*/
    .main-nav {
      background: #369;
      width: 100%;
      .container {
        width: 62.5%;
        text-align: center;
        height: 30px;
        padding: 0;
        margin: auto;
        .title {
          text-decoration: none;
          color: #fff;
          text-align: center;
          padding: 0 20px;
          line-height: 30px;
        }
      }
    }

    /*底部样式*/
    .page-footer {
      width: 100%;
      background: #369;
      padding: 20px 0;
      /* overflow: hidden; */
      .container {
        width: 62%;
        margin: 0 auto;
        position: relative;
        .footer-link {
          position: absolute;
          left: 0;
          top: 25%;
          width: 270px;
          height: 61px;
          letter-spacing: 20px;
          a {
            text-decoration: none;
          }
        }
        .copyright {
          margin-left: 270px;
          padding-left: 30px;
          text-align: left;
          border-left: #4d71a6 1px solid;
          color: #fff;
          font-size: 14px;
          line-height: 30px;
          a {
            color: #fff;
            text-decoration: none;
          }
          .tel {
            display: inline-block;
            height: 30px;
            background: #39c url(./assets/tel.png) 16px center no-repeat;
            padding-left: 44px;
            padding-right: 17px;
            border-radius: 5px;
          }
        }
        .copyright-webapp {
          display: none;
        }
      }
    }
  }
}
@media screen and (min-width: 769px) and (max-width: 992px) {
  #app {
    height: 100%;
    display: flex;
    /*头部样式*/
    .page-header {
      width: 100%;
      .container {
        position: relative;
        margin: auto;
        height: 88px;
        width: 68%;
        height: 88px;
        .logo {
          width: 277px;
          height: 51px;
          position: absolute;
          left: 0;
          top: 25px;
          background: url("./assets/logo.png") left top no-repeat;
        }
        .link-provincial-government {
          position: absolute;
          line-height: 30px;
          right: 0;
          top: 50%;
          margin-top: -15px;
          background: url(./assets/seal.png) left center no-repeat;
          padding-left: 30px;
        }

        .link-provincial-government:link,
        .link-provincial-government:visited {
          text-decoration: none;
          color: #333;
        }

        .link-provincial-government:hover {
          text-decoration: none;
          color: #f00;
        }
        .web-app {
          display: none;
        }
      }
    }
    /*导航演示*/
    .main-nav {
      background: #369;
      width: 100%;
      .container {
        width: 62.5%;
        text-align: center;
        height: 30px;
        padding: 0;
        margin: auto;
        .title {
          text-decoration: none;
          color: #fff;
          text-align: center;
          padding: 0 10px;
          line-height: 30px;
        }
      }
    }

    /*底部样式*/
    .page-footer {
      width: 100%;
      background: #369;
      padding: 20px 0;
      /* overflow: hidden; */
      .container {
        width: 62%;
        margin: 0 auto;
        position: relative;
        .footer-link {
          position: absolute;
          left: 0;
          top: 25%;
          width: 270px;
          height: 61px;
          letter-spacing: 20px;
          a {
            text-decoration: none;
          }
        }
        .copyright {
          margin-left: 270px;
          padding-left: 30px;
          text-align: left;
          border-left: #4d71a6 1px solid;
          color: #fff;
          font-size: 14px;
          line-height: 30px;
          a {
            color: #fff;
            text-decoration: none;
          }
          .tel {
            display: inline-block;
            height: 30px;
            background: #39c url(./assets/tel.png) 16px center no-repeat;
            padding-left: 44px;
            padding-right: 17px;
            border-radius: 5px;
          }
        }
        .copyright-webapp {
          display: none;
        }
      }
    }
  }
}
@media screen and (min-width: 481px) and (max-width: 768px) {
  #app {
    height: 100%;
    display: flex;
    /*头部样式*/
    .page-header {
      width: 100%;
      .container {
        position: relative;
        margin: auto;
        height: 88px;
        // width: 68%;
        height: 88px;
        .logo {
          width: 277px;
          height: 51px;
          position: absolute;
          left: 0;
          top: 25px;
          background: url("./assets/logo.png") left top no-repeat;
        }
        .link-provincial-government {
          display: none;
        }
        .web-app {
          position: relative;
          .dropdown-menue {
            width: 45px;
            height: 40px;
            float: right;
            margin-top: 28px;
            margin-right: 24px;
          }
          ul {
            display: none;
            list-style: none;
            margin: 0;
            padding: 0;
            position: absolute;
            right: 10px;
            top: 70px;

            li {
              line-height: 30px;
              background: #a4d9f9;
              border-bottom: 1px dashed #ffffff;
              text-align: center;
              border-radius: 5px;
              a:link {
                text-decoration: none;
                color: #fff;
              }
              a:hover {
                color: #333;
              }
            }
            li:hover {
              background: #e9e9e9;
              transition: all 0.5s ease;
            }
          }
        }
      }
    }
    /*导航演示*/
    .main-nav {
      height: 10px;
      background: #369;
      width: 100%;
      .container {
        display: none;
        width: 62.5%;
        text-align: center;
        height: 30px;
        padding: 0;
        margin: auto;
        .title {
          text-decoration: none;
          color: #fff;
          text-align: center;
          padding: 0 10px;
          line-height: 30px;
        }
      }
    }

    /*底部样式*/
    .page-footer {
      width: 100%;
      background: #369;
      padding: 20px 0;
      /* overflow: hidden; */
      .container {
        width: 62%;
        margin: 0 auto;
        position: relative;
        .footer-link {
          display: none;
        }
        .copyright {
          display: none;
        }
        .copyright-webapp {
          text-align: center;
        }
      }
    }
  }
}
@media screen and (max-width: 480px) {
  #app {
    height: 100%;
    display: flex;
    /*头部样式*/
    .page-header {
      width: 100%;
      .container {
        position: relative;
        margin: auto;
        height: 88px;
        // width: 68%;
        height: 88px;
        .logo {
          width: 277px;
          height: 51px;
          position: absolute;
          left: 0;
          top: 25px;
          background: url("./assets/logo.png") left top no-repeat;
        }
        .link-provincial-government {
          display: none;
        }
        .web-app {
          position: relative;
          .dropdown-menue {
            width: 45px;
            height: 40px;
            float: right;
            margin-top: 28px;
            margin-right: 24px;
          }
          ul {
            display: none;
            list-style: none;
            margin: 0;
            padding: 0;
            position: absolute;
            right: 10px;
            top: 70px;

            li {
              line-height: 30px;
              background: #a4d9f9;
              border-bottom: 1px dashed #ffffff;
              text-align: center;
              border-radius: 5px;
              a:link {
                text-decoration: none;
                color: #fff;
              }
              a:hover {
                color: #333;
              }
            }
            li:hover {
              background: #e9e9e9;
              transition: all 0.5s ease;
            }
          }
        }
      }
    }
    /*导航演示*/
    .main-nav {
      height: 10px;
      background: #369;
      width: 100%;
      .container {
        display: none;
        width: 62.5%;
        text-align: center;
        height: 30px;
        padding: 0;
        margin: auto;
        .title {
          text-decoration: none;
          color: #fff;
          text-align: center;
          padding: 0 10px;
          line-height: 30px;
        }
      }
    }

    /*底部样式*/
    .page-footer {
      width: 100%;
      background: #369;
      padding: 20px 0;
      /* overflow: hidden; */
      .container {
        width: 62%;
        margin: 0 auto;
        position: relative;
        .footer-link {
          display: none;
        }
        .copyright {
          display: none;
        }
        .copyright-webapp {
          text-align: center;
        }
      }
    }
  }
}
</style>
