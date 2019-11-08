//index.js
//获取应用实例

Page({
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    //canIUse: wx.canIUse('button.open-type.getUserInfo'),
    //isHide: false,
    stuArray: [
      ['北一', '北二', '北三', '北四', '北五', '北六', '北七', '北八', '北九', '北十'],
      ['A', 'B', 'C'],
      [ '101', '102', '103', '104', '105', '106', '107', '108', '109', '110',
        '111', '112', '113', '114', '115', '116', '117', '118', '119', '120',
        '201', '202', '203', '204', '205', '206', '207', '208', '209', '210',
        '211', '212', '213', '214', '215', '216', '217', '218', '219', '220',
        '301', '302', '303', '304', '305', '306', '307', '308', '309', '310',
        '311', '312', '313', '314', '315', '316', '317', '318', '319', '320',
        '401', '402', '403', '404', '405', '406', '407', '408', '409', '410',
        '411', '412', '413', '414', '415', '416', '417', '418', '419', '420',
        '501', '502', '503', '504', '505', '506', '507', '508', '509', '510',
        '511', '512', '513', '514', '515', '516', '517', '518', '519', '520',
      ]
    ],
   teaArray: [
      '北一', '北二', '北三', '北四', '北五', '北六', '北七', '北八', '北九', '北十'
    ],
    stuIndex: [0, 0, 0],
    teaIndex: 0,
    hidden_stu: true,
    hidden_tea: true,
    sname: '姓名：',
    snum: '学号/工号：'
  },
  bindtap_stu:function(e){
    var that = this;
    var userid = wx.getStorageSync('openid');//本地缓存中指定的 key
    if (app.globalData.userInfo == null) {
      wx.showModal({
        title: '📢提示',
        content: '先去授权登录哟(*/ω＼*)',
        confirmText: "确定",
        success(res) {
          if (res.confirm) {
            wx.switchTab({
              url: '/pages/user/user',
            })
          }
        }
      })
    } else {
      if (that.data.isRegister == false) {
        wx.request({
          url: '',
          data: {
            userid: userid
          },
          method: 'POST',
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {
            if (!res.data) {
              that.setData({
                hidden_stu: false,
              })
            } else {
              that.setData({
                isRegister: true
              })
              wx.navigateTo({
                url: ''
              })
            }
          },
          fail: function (res) { },
          complete: function (res) { },
        })
      } else {
        wx.navigateTo({
          url: ''
        })
      }
    }
  },
  bindtap_tea:function(e){
    //if (e.detail.userInfo != undefined) {
      this.setData({
        hidden_tea: false,
      })
    //}
  },
  bindChange_stu: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      stuIndex: e.detail.value
    })
  },
  bindChange_tea: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      teaIndex: e.detail.value
    })
  },
  bindColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
  },

  //获取input的信息
  setname: function (e) {
    this.setData({
      sname: e.detail.value
    })
  },
  setnum: function (e) {
    this.setData({
      snum: e.detail.value
    })
  },

  //取消按钮
  cancel: function () {
    this.setData({
      hidden_stu: true,
      hidden_tea: true,
    });
  },

  //确认
  confirm: function (e) {
    var that = this;
    this.setData({
      hidden_stu: true,
      hidden_tea: true,
    })
    if (!that.data.sname || !that.data.snum) {
      wx.showToast({
        title: '输入为空(+_+)?',
        icon: 'none'
      })
    }
  },


  onLoad: function () {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function() {
      wx.hideLoading()
    }, 1500)
  },
  /*
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              // 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值
              // 根据自己的需求有其他操作再补充
              // 我这里实现的是在用户授权成功后，调用微信的 wx.login 接口，从而获取code
              wx.login({
                success: res => {
                  // 获取到用户的 code 之后：res.code
                  console.log("用户的code:" + res.code);
                  // 可以传给后台，再经过解析获取用户的 openid
                  // 或者可以直接使用微信的提供的接口直接获取 openid ，方法如下：
                  // wx.request({
                  //     // 自行补上自己的 APPID 和 SECRET
                  //     url: 'https://api.weixin.qq.com/sns/jscode2session?appid=自己的APPID&secret=自己的SECRET&js_code=' + res.code + '&grant_type=authorization_code',
                  //     success: res => {
                  //         // 获取到用户的 openid
                  //         console.log("用户的openid:" + res.data.openid);
                  //     }
                  // });
                }
              });
            }
          });
        } else {
          // 用户没有授权
          // 改变 isHide 的值，显示授权页面
          that.setData({
            isHide: true
          });
        }
      }
    });

  bindGetUserInfo: function (e) {
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      var that = this;
      // 获取到用户的信息了，打印到控制台上看下
      console.log("用户的信息如下：");
      console.log(e.detail.userInfo);
      //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
      that.setData({
        isHide: false
      });
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          // 用户没有授权成功，不需要改变 isHide 的值
          if (res.confirm) {
            console.log('用户点击了“返回授权”');
          }
        }
      });
    }
  }
})
*/


/*
const app = getApp()
*/



/*
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }


  */
})

