<template>
  <div>
    <div class="back" v-show="isMain">
      <div class="title">强调说明</div>
      <div class="content">
        <p><strong>测评结果没有是非对错好坏之分，每种风格都有自己独有的特点。测试只是为了让我们更清醒地认知并发展自己，作出更好的职业规划，
          扬长避短以及取长补短，也可以让我们清楚与不同风格的人沟通中如何把握分寸，达到理想的效果。</strong></p>
      </div>

      <div class="title">注意事项</div>
      <div class="content">
        <p><span>1、</span>对照每一道题思考，这是否是我思想意识中所想、日常行为中所体现出来的。如果与自己非常吻合，则选中。
        而对于模棱两可或出现频率低的描述不要选！</p>
        <p><span>2、</span>选择的题目一定是自己真实的意识或行为表现，而不是自己喜欢的、欣赏的。</p>
        <p><span>3、</span>分析每一道题不要前思后想，第一感觉往往更准确，整体测试时间以20－30分钟为宜。</p>
      </div>

      <div class="btk">
        <div @click="ninthClick">九型人格测试</div>
        <div @click="workClick">霍兰德职业兴趣测试</div>
      </div>
    </div>

    <div class="back" v-show="isNinth">
      <div class="ap" @click="returnClick">返回</div>
      <div class="title">九型人格测试</div>
      <div class="content">
        <p><strong>九型人格测试属于一种自我测试。九型人格测试主要用于帮助你有效地掌握个人的行为习惯，
          测试中所回答的问题答案没有好与坏之分、没有正确与错误之别，它仅反映你自己的个性和你的世界观。</strong></p>
      </div>

      <div class="title">九种测试结果</div>
      <div class="content">
        <p><span>1号人格—完美主义者：</span>
        内心的正确标准变成严格的自我要求。不断产生自责的思想。 有一种强迫性需要，只接受正确的事情。</p>
        <p><span>2号人格—给予者：</span>
        争取得到他人支持，避免被他人反对。 对自己的重要性感到骄傲。“他们没有我不行”。</p>
        <p><span>3号人格—实干者：</span>
        看重自己的表现和成就。 讲究效率。 喜欢竞争，避免失败。 相信爱情来自你能提供什么，而不在于你是谁。</p>
        <p><span>4号人格—悲情浪漫者：</span>
        觉得有些东西在生活中遗失了，而别人又恰好拥有自己遗失的东西。 被遥不可及的事物深深吸引。把一个不存在的恋人理想化。</p>
        <p><span>5号人格—观察者：</span>
        私密。 保持不被涉及的状态。感到威胁时，第一道防线是撤退，或者系紧安全带。 害怕用心去感觉。</p>
        <p><span>6号人格—怀疑论者：</span>
        推延行动。用思想代替行动。工作无法善始善终。 忘记对成功和快乐的追求。 对权威的极端态度：要么顺从，要么反抗。</p>
        <p><span>7号人格—享乐主义者：</span>
        需要保持高度的兴奋。同时参与多项活动，对很多事情都感兴趣。喜欢保持感情的高峰状态。</p>
        <p><span>8号人格—领导者：</span>
        控制个人的占有物和空间，控制那些可能影响自己生活的人。 具有进攻性，公开表达自己的愤怒。 关注正义，喜欢保护他人。</p>
        <p><span>9号人格—调停者：</span>
        用不必要的事物来取代真实的需要。最重要的事情往往被留在一天的最后时刻。 难以做出决定。“我是同意，还是不同意？”</p>
      </div>
      <div class="btn">
        开始测试
      </div>
    </div>

    <div class="back" v-show="isWork">
      <div class="ap" @click="returnClick">返回</div>
      <div class="title">霍兰德职业兴趣测试</div>
      <div class="content">
        <p><strong>霍兰德职业兴趣自测（Self-Directed Search）是由美国职业指导专家霍兰德（John Holland）根据他本人大量的职业咨询经验及其职业类型理论编制的测评工具。
          </strong></p>
      </div>

      <div class="title">测试结果</div>
      <div class="content">
        <p>霍兰德认为，个人职业兴趣特性与职业之间应有一种内在的对应关系。根据兴趣的不同，
          人格可分为研究型（I）、艺术型（A）、社会型（S）、企业型（E）、传统型（C）、现实型（R）六个维度，
          每个人的性格都是这六个维度的不同程度组合
        </p>
      </div>
      <div class="btn">
        开始测试
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name:"preferenceTest",
    data(){
      return{
        isWork:false,
        isNinth:false,
        isMain:true
      }
    },
    methods: {
      ninthClick(){
        this.isNinth=true
        this.isMain=false
      },
      workClick(){
        this.isWork=true
        this.isMain=false
      },
      returnClick(){
        this.isNinth=false
        this.isMain=true
        this.isWork=false
      }
    },
    mounted(){

    },
    components:{

    }
    
  }
</script>

<style scoped>
  div.back{
    background-color: #eeeeee;
    width: 90%;
    margin: 0 auto;
    box-shadow: 1px -1px 2px 2px rgba(155, 155, 155, 0.452);
    padding: 12px;
    margin-top: 0px;
    margin-bottom: 120px;
  }

  div.content{
    background-color: #eeeeee;
    width: 93%;
    margin: 0 auto;
    box-shadow: 1px -1px 2px 2px rgba(155, 155, 155, 0.452);
    padding: 22px;
    margin-top: 18px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: #2c3e50;
    font-weight: 300;
    margin-bottom: 40px;
  }

  div.content span{
    color: #2c6e50;
    font-weight:bold;
    background-color: #eef4ee;
    font-family:"微软雅黑", Helvetica, sans-serif;
  }
  
  div.title{
    width: 96%;
    margin: 0 auto;
    margin-top: 12px;
    background-color: #d9d9d9;
    box-shadow: 1px -1px 2px 2px rgba(155, 155, 155, 0.452);
    padding: 5px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: rgba(55,33, 55,0.9);
    font-size: 22px;
    text-align: center;

    font-weight: bolder;
    background-color: #eedddd;
  }

  div.btn{
    width: 95%;
    height: 24px;
    margin: 0px auto;
    margin-top: 30px;
    margin-bottom: 12px;
    background-color: #a3e3a3;
    padding: 10px;
    box-shadow: 1px -1px 2px 2px rgba(155, 155, 155, 0.452);
    border-radius: 5px;

    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: rgba(55,33, 55,0.9);
    font-size: 22px;
    text-align: center;
    font-weight: bolder;
  }

  div.btn:hover{
    box-shadow: 2px -2px 2px 3px rgba(155, 155, 155, 0.452);
    cursor: pointer;
    background-color: #73e373;
    color: #000;
  }

  div.btk{
    width: 95%;
    height: 24px;
    margin: 0px auto;
    display: flex;
    margin-bottom: 16px;
  }

  div.btk div{
    background-color: #c3c3e3;
    height: 36px;
    box-shadow: 1px -1px 2px 2px rgba(155, 155, 155, 0.452);
    border-radius: 5px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: rgba(55,33, 55,0.9);
    font-size: 22px;
    text-align: center;
    font-weight: bolder;

  }
  div.btk div:nth-child(1){
    margin-right: 160px;
    width: 40%;
  }
  
  div.btk div:nth-child(2){
    flex: 1;
  }

  div.btk div:hover{
    box-shadow: 2px -2px 2px 3px rgba(155, 155, 155, 0.452);
    cursor: pointer;
    background-color: #afafe3;
    color: #000;
  }

  .ap{
    color: #000;
    text-decoration:none;
    cursor: pointer;
    font-weight: bolder;
    margin-left: 12px;
  }
</style>