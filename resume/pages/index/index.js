// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width:0,
    height:0,
    name:"侯博文",
    spell:"Hou Bowen",
    job:"Java工程师",
    exp:"5年实习经验",
    tel: "18302966364",
    sex: "男",
    age: 27,
    email: "houbowen470@163.com",
    address: "西安市雁塔区",
    skill:[
      { name: "Java", percent:85},
      { name: "SQL", percent: 75 },
      { name: "HTML/VUE/JavaScript", percent: 75 }
    ],
    education:[
      {
        school:"陕西科技大学",
        major:"光信息科学与技术",
        year:"2011-2015",
        desc:"陕西科技大学位于陕西省会西安，是国家“中西部高校基础能力建设工程”建设高校、陕西省省属高水平大学之一，入选教育部“卓越工程师教育培养计划”试点高校、教育部“互联网+中国制造2025”产教融合促进计划试点院校和陕西省首批深化创新创业教育改革示范高校。"
      }
    ],
    work:[
      {
        company:"中软国际",
        job:"Java-Web开发",
        year:"2015/07-2018/03",
        desc:"在公司任职期间，主要负责华为业务线-无线工具部相关5G商用开发、测试用软件工具的旧项目迭代开发、新项目的开发以及日常需求对接与项目维护工作。"
      },
      {
        company: "西安恪诚电子",
        job: "Java-Web开发",
        year: "2018/03-至今",
        desc: "在公司任职期间，主要负责新项目的开发、相关开发文档的编写、技术栈的实践探索（包括zabbix的服务监控、postgres和mysql的集群话部署、Elasticsearch等）以及前期招聘面试工作。"
      }
    ],
    project:[
      {
        name:"中国铁路旅客接送站后台管理系统",
        desc:"在铁路候车大厅为旅客提供接送站、休息厅等一系列附加服务，使等待过程也是旅途的一种享受"
      },
      {
        name:"小红帽后台管理系统",
        desc:"在车站为旅客提供行李搬运的服务，帮助旅客减少旅途劳累"
      },
      {
        name:"客服知识库平台",
        desc:"为广大铁路系统客服人员，提供客诉知识库方便客服人员进行问题的经验管理，从而更好的为客户提供服务"
      }
    ],
    introduction:"谢谢！"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var width=wx.getSystemInfoSync().windowWidth
    var height=wx.getSystemInfoSync().windowHeight
    this.setData({
      width:width,
      height:height
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})