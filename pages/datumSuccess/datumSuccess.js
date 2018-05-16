// pages/packet/packet.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgPath: config.imgPath,
        popShow: false,
        getPacket:true
    },
    clipboard:function () {
        wx.setClipboardData({
            data: '微信账号',
            success: function(res) {
                util.showSuccess('复制成功');
            }
        })
    },
    slideDown:function () {
        this.setData({
            popShow:false
        })
    },
    slideUp:function () {
        this.setData({
            popShow:true
        })
    },
    getPacket:function () {
        this.setData({
            getPacket:false
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