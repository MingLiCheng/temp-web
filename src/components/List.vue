<!-- 新闻列表 -->
<template>
  <div class="list">
    <main class="page-body">
      <section class="page-body-left">
        <h3>新闻中心</h3>
        <ul class="page-body-left-list">
          <li v-for="item in newscenter" :key="item.categoryId">
            <a href="javascript:;">{{item.title}}</a>
          </li>
        </ul>
      </section>
      <section class="page-body-right">
        <h3>政务要闻</h3>
        <ul class="content-title">
          <li class="content-info" v-for="item in newslist" :key="item.id">
            <a>{{item.title}}</a>
            <span>{{ item.date }}</span>
          </li>
        </ul>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          :page-size="6"
          @current-change="currentChange"
          @size-change="sizeChange"
        ></el-pagination>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "ListPage",
  data() {
    return {
      newscenter: [],
      newslist:[],
      allnewslist: [],
      pageSize: 4,
      total:0,
    };
  },
  created() {
    this.$http.get('static/data/news-category.json').then( result => {
      console.log(result.body);
      this.newscenter = result.body

    })


    this.$http.get("static/data/news-list.json").then(result => {
      // console.log(result.body.total);
      this.total = result.body.total
      // console.log(result.body.rows);
      this.allnewslist = result.body.rows
      this.showPageData(1);
    });
  },
  mounted() {},
  components: {},

  computed: {},

  methods: {
    // 改变page时触发
    currentChange(val) {
      console.log(val);
      this.showPageData(val);
    },
    // 传递参数 1. 当前页
    showPageData(currentPage) {
      this.newslist = [];
      for (
        let i = (currentPage-1) * this.pageSize;
        i < currentPage * this.pageSize;
        i++
      ) {
        this.newslist.push(
          this.allnewslist[i] == null
            ? { id: null, info: null, url: null, time: null }
            : this.allnewslist[i]
        );
      }
    },
    // 改变第几页
    sizeChange(pageSize) {
      this.pageSize = pageSize;
    }
  }
};
</script>
<style lang='less' scoped>
.list {
  background: #eeeeee;
  overflow: hidden;
  .page-body {
    width: 1200px;
    height: 570px;
    margin: 0 auto;
    background: #fff;
    margin-top: 20px;
    position: relative;
    .page-body-left {
      width: 260px;
      height: 100%;
      float: left;
      background: #f5f5f5;
      h3 {
        height: 58px;
        background: url("../assets/bg-class-title.png");
        margin: 0;
        color: #fff;
        padding-left: 39px;
        text-align: left;
        letter-spacing: 3px;
        line-height: 58px;
      }
      .page-body-left-list {
        /* background: #f5f5f5; */
        margin: 0;
        padding: 0;
        li {
          height: 50px;
          line-height: 50px;
          list-style: none;
          /* padding-left: 30px; */
          border-bottom: 1px dashed #ccc;
          margin: 0 18px;
          font-size: 14px;
          a {
            display: block;
            /* float: left; */
            text-indent: 2em;
            text-align: left;
            span {
              float: right;
              color: #ccc;
            }
          }
          a:after {
            content: ">";
            float: right;
          }
          a:link {
            text-decoration: none;
            color: #000;
          }
          a:hover {
            color: #fac06b;
            transition: all 0.5s ease;
          }
        }
      }
    }
    .page-body-right {
      position: absolute;
      right: 0;
      width: 940px;
      height: 480px;
      float: left;
      background: #ffffff;
      h3 {
        background: url("../assets/bg-title.png") no-repeat left;
        text-align: left;
        padding-left: 25px;
        margin-left: 10;
      }
      .content-title {
        list-style: none;
        padding: 0;
        .content-info {
          height: 62px;
          border-bottom: 1px solid #ccc;
          margin: 0 20px;
          line-height: 62px;
          text-align: left;
          text-indent: 1em;
          font-size: 14px;
          display: flex;
          justify-content: space-between;
          a {
            display: block;
          }
          a:link,
          a:visited {
            text-decoration: none;
            color: #979797;
          }
          // a:hover {
          //   background: #effcfe;
          //   transition: all 0.5s ease;
          // }
        }
        .content-info:hover {
          background: #effcfe;
          transition: all 0.5s ease;
        }

        span {
          color: #979797;
        }
      }
      .el-pagination {
        float: right;
      }
    }
  }
}

</style>
