layui.define(['layer', 'srbank', 'laypage', 'api', 'utils'], function (exports) {
    'use strict';
    
    var layer = layui.layer;
    var srbank = layui.srbank;

    var laypage = layui.laypage;
    var utils = layui.utils;
    var api = layui.api;
    
    // srbank.isSrBankInfo({
    // 	validata: {
    // 		signAutoBid: true,
    // 		signCreditTransfer: true,
    // 		signTransfer: true
    // 	},
    // 	srbankUserCallback: function () {
    // 		console.log('未开通存管');
    // 		srbank.saveCardLayer();
    // 		// srbank.openSRBankLayer('充值');
    // 	},
    // 	bindCardCallback: function () {
    // 		console.log('未绑卡');
    // 		srbank.bindCardLayer();
    // 	},
    // 	resetPWDCallback: function () {
    // 		console.log('重置密码');
    // 	},
    // 	signAutoBidCallback: function () {
    // 		console.log('是否需要自动投标签约');
    // 	},
    // 	signCreditTransferCallback: function () {
    //     srbank.signLayer('sign_credit_transfer');
    // 		console.log('是否需要自动债转签约');
    // 	},
    // 	signTransferCallback: function () {
    // 		console.log('是否需要申请转让?');
    // 	},
    // 	whetherEvaluationCallback: function () {
    // 		console.log('是否风险测评');
    // 	}
    // });

    // 投资授权协议
    // layer.open({
    //     type: 2,
    //     title: '投资授权协议',
    //     shadeClose: false,
    //     shade: 0.8,
    //     move: false,
    //     resize: false,
    //     area: ['780px', '570px'],
    //     content: 'https://www.dolabank.club/about/invest_sign_pc'
    // });


    // 弹窗分页
    // utils.getAjaxData({
    //     url: 'https://api.dolabank.club/v1/loan/list',
    //     data: {
    //         filter_status: 'PAYBACK,FINISH,ADVAN_FINISH',
    //         filter_period: '',
    //         filter_unmatch_amount: '',
    //         page: 1,
    //         page_size: 10
    //     },
    //     success: function(data) {
    //         console.log(data);

    //         var html = '<div>hello world<div id="page"></div></div>';

    //         layer.open({
    //             content: html,
    //             success: function() {
    //                 laypage.render({
    //                     elem: 'page',
    //                     count: data.data.total,
    //                     jump: function(obj, first) {
    //                         // obj包含了当前分页的所有参数，比如：
    //                         console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
    //                         console.log(obj.limit); //得到每页显示的条数

    //                         //首次不执行
    //                         if (!first) {
    //                             //do something
    //                             console.log(555);
    //                         }
    //                     }
    //                 });
    //             }
    //         })
    //     }
    // });

    

    
    exports('index', {});
});