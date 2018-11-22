// pages/join/join.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: []
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

  },
  download: function (){
    wx.downloadFile({
      url: 'https://www.//tiano0.top/api/now', //仅为示例，并非真实的资源
      success(res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          wx.playVoice({
            filePath: res.tempFilePath
          })
        }
      }
    })
  },
  content: function (){
    var that = this;
    wx.request({
      url: 'https://www.tian0o0.top/api/now', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:function(res) {
        that.setData({
          result: res.data.data
        })
        console.log(res.data)
      }
    })
  },
  call: function (){
    wx.makePhoneCall({
      phoneNumber: '1340000' //仅为示例，并非真实的电话号码
    })
  }
})