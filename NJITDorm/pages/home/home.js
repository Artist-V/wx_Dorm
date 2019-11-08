// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper:true,
    autoplay:true,
    imgURL1:[
      { img: "/image/picture/pic1.jpg"},
      { img: "/image/picture/pic2.jpg"}
    ],
    imgURL2: [
      { img: "/image/picture/pic6.jpg" },
      { img: "/image/picture/pic7.jpg" }
    ],
    navigator:[
      { img: "/image/icon/公告栏.png", text: "公告栏", url:"/pages/two/board/board"},
      { img: "/image/icon/考勤签到.png", text: "考勤签到", url: "/pages/two/check/check"},
      { img: "/image/icon/离校返校.png", text: "离校返校", url: "/pages/two/goback/goback"},
      { img: "/image/icon/报修反馈.png", text: "报修反馈", url: "/pages/two/repairs/repairs"},
      { img: "/image/icon/留言区.png", text: "留言区", url: "/pages/two/message/message"},
      { img: "/image/icon/自习室.png", text: "自习室", url: "/pages/two/room/room"},
    ]
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