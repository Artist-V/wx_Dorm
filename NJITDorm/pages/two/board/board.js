// pages/two/board/board.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    HiddenNote:false,
    text:"📢公告栏：表彰当日卫生优秀的宿舍名单，通报批评当日宿舍卫生为差的名单",
    date:"2019年11月06日",
    classify:[
      { name: "优秀宿舍" },
      { name: "批评宿舍" }
    ],
    curNav:'优秀宿舍',
    classifyItems:[],
    listData:[
      { name: "N10B511", number: "1号床", describe: "优秀" },
      { name: "N10B512", number: "1号床", describe: "优秀" },
      { name: "N10B513", number: "1号床", describe: "优秀" },
      { name: "N10B514", number: "1号床", describe: "优秀" },
      { name: "N10B515", number: "1号床", describe: "优秀" },
    ],
  },
  switchNotice: function () {
    this.setData({
      HiddenNote: true
    })
  },
  topTab: function (e) { //let是局部变量
    let name = e.target.dataset.name;
    this.setData({
      curNav: name
    })
    this.kinds();
  },
  kinds: function () {
    var that = this;
    var data = "";
    wx.request({
      url: 'http://apicloud.mob.com/v1/cook/menu/search?cid=0010001007&key=17113fceca309&size=20&name=' + this.data.curNav + "&page=" + this.data.page,
      methodL: 'get',
      success: function (data) {
        console.log(data);
        that.setData({
        })
      }
    })
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