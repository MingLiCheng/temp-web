<!-- 内容 -->
<template>
  <div class="content">
    <main class="page-body">
      <article class="page-body-article">
        <div class="page-body-content">
          <h1>{{newscontent.title}}</h1>
          <p class="page-body-sub">
            <span>发布时间：{{ newscontent.postTime }} &nbsp;&nbsp;&nbsp;信息来源：{{newscontent.source}}</span>
            <span>
              【字体：
              <a id="bigFont" href="javascript:;" @click="changeFontSize(20)">大</a>
              <a id="middleFont" href="javascript:;" @click="changeFontSize(18)">中</a>
              <a id="smallFont" href="javascript:;" @click="changeFontSize(14)">小</a>】
            </span>
          </p>
          <p class="page-body-info" ref="infofont" v-html="newscontent.content"></p>
          <a href="javascript:;" class="page-body-close" @click="close">关闭</a>
        </div>
      </article>
    </main>
  </div>
</template>

<script>
export default {
  name: "ContentPage",
  data() {
    return {
      newscontent: {
        // title: "图便宜买“烂尾小区” 这个小区无楼梯扶手、无消防设施",
        // time: new Date(),
        // from: "华商网",
        // info: `近日，西安市鄠邑区秦渡街办牛东中堡的现代新苑小区业主张先生打进华商报新闻热线说：“小区中间有个大塔吊，比7层楼还高出一截，已在小区放置至少6年，反映给多个部门，可一直没人管。”
        //       昨日上午，华商报记者来到现代新苑小区。在距离小区很远处，就能看到这个比小区7层楼房还高的塔吊，近看塔吊底架的4根铁柱油漆已全部脱落，塔身、司机室、起重臂等处均有锈迹。
        //       小区有几辆私家车停放，也有几名业主在小区内活动。2单元3楼一户业主正拿着合同和几名欲购房者谈交易，其中一名欲购房者对小区的糟糕环境不以为然，她说反正水、电都通着，房价便宜，但她拒绝透露具体数目。
        //       之后，该购房者还专程前往已入住的张先生家，询问他家防盗门在哪儿购买、价格多少等`
      }
    };
  },
  created() {
    this.$http.get('static/data/news.json').then(result => {
      console.log(result.body)
      this.newscontent = result.body
      // content: "<p style="text-indent: 36px; line-height: 2em;"><span style="font-size:19px">8</span><span style="font-size:19px;font-family:宋体">月</span><span style="font-size:19px">17</span><span style="font-size:19px;font-family:宋体">日</span><span style="font-size:19px;font-family:宋体">上午，夏辑副厅长主持召开厅长办公会议，专题研究部署厅推进政务服务“一网、一门、一次”改革工作。会议传达、学习了国务院办公厅和省政府关于进一步推进政务服务改革工作的相关精神要求，围绕省政府办公厅《进一步深化“互联网</span><span style="font-size:19px">+</span><span style="font-size:19px;font-family:宋体">政务服务”推进政务服务“一网、一门、一次”改革行动方案》的部署要求，结合省科技厅实际，进行了深入研究和探讨，并分解落实了责任任务。夏辑要求，各相关处室和单位，要进一步提高思想认识，按照会议明确的责任分工和时限要求，重点围绕安徽推进政务服务改革的“三个亮点”任务、“三个难点”工作、“三个焦点”问题，积极探索服务企业和群众的新方法、新途径，加强统筹协调，将工作做细做实，确保于</span><span style="font-size:19px">11</span><span style="font-size:19px;font-family:宋体">月底前，完成各项任务，助推我省政务服务“一网通办”“只进一扇门”“最多跑一次”改革目标的顺利实现。</span></p><p><br/></p>"
      // createTime: "20180822095350"
      // id: "ff8080816555a97101655f5686920df0"
      // postTime: "20180822094500"
      // source: "省科技厅供稿"
      // title:


    })
  },

  components: {},

  computed: {},

  methods: {
    // 关闭窗口
    close() {
      if (
        navigator.userAgent.indexOf("Firefox") != -1 ||
        navigator.userAgent.indexOf("Chrome") != -1
      ) {
        window.location.href = "about:blank";
        window.close();
      } else {
        window.opener = null;
        window.open("", "_self");
        window.close();
      }
    },
    // 改变字体大小
    changeFontSize(size) {
      this.$refs.infofont.style.fontSize = size + "px";
    }
  }
};
</script>
<style lang='less' scoped>
.content {
  background: #eeeeee;
  overflow: hidden;
  // height: 570px;
  .page-body {
    width: 1200px;

    margin: auto;
    border: 1px solid #3b94d0;
    background: #fff;
    margin-top: 20px;
    .page-body-content {
      padding: 72px 52px;
      h1 {
        margin: 0;
        color: #5aa1cd;
        font-weight: normal;
        font-size: 35px;
        line-height: 67px;
      }
      .page-body-sub {
        display: flex;
        justify-content: space-between;
        color: #929292;
        font-size: 14px;
        border-bottom: 1px solid #ccc;
        padding-bottom: 24px;
        a {
          padding-left: 3px;
        }
        a:link {
          text-decoration: none;
          color: #4885f0;
        }
        .page-body-sub a:hover {
          color: #f00;
        }
      }
      .page-body-info {
        text-indent: 2em;
        text-align: left;
        line-height: 28px;
        font-size: 16px;
      }
      .page-body-close {
        float: right;
        font-size: 14px;
      }
      .page-body-close:link {
        text-decoration: none;
        color: #4885f0;
      }
      .page-body-close:hover {
        color: #f00;
      }
    }
  }
}
</style>
