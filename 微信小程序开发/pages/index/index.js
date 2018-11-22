//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/003.jpg',
      '/images/002.jpg',
      '/images/001.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
 
  onLoad: function () {
    
  }
})
