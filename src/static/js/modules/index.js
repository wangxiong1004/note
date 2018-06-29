layui.define(['jquery', 'layer', 'utils', 'api'], function (exports) {
	'use strict';

	var $ = layui.jquery;
	var layer = layui.layer;
	var utils = layui.utils;
	var api = layui.api;

	var srbank = {
		/*
		 * 上饶存管信息判断
		 * {}   object
		 * validata： { // 是否验证 object
		 *      signAutoBid： true / false 是否需要自动投标签约  boolean
		 *      signCreditTransfer: true / false 是否需要自动债转签约 boolean
		 *      signTransfer: true / false 否需要申请转让签约 boolean
		 *      whetherEvaluation: true/false   是否需要风险评测 boolean
		 * }
		 * srbankUserCallback: 是否是存管用户回调 function
		 * bindCardCallback: 绑卡回调 function
		 * resetPWDCallback: 重置密码回调 function
		 * signAutoBidCallback: 自动投标签约回调 function
		 * signCreditTransferCallback: 自动债转签约回调 function
		 * signTransferCallback: 申请转让签约回调 function
		 * whetherEvaluation: 风险评测回调 function
		 */
		isSrBankInfo: function (options) {
			layer.load(2);
			utils.getAjaxData({
				url: api.queryInformation,
				success: function (data) {
					console.log(data);
					layer.closeAll('loading');
					if (data.code === 0) {
						var userData = data.data.user;
						var userSRData = userData.srbank;

						var isSRbankUser = userSRData.is_srbank_user;
						var isSRbankBindCard = userSRData.is_srbank_user_bindcard;
						var isDLBindCardStatus = userData.bankcard_status;
						var isNeedRestPWD = userSRData.need_reset_pwd_first;
						var isSRbankUserSignAutoBid = userSRData.is_srbank_user_sign_auto_bid;
						var isSRbankUserSignCreditTransfer = userSRData.is_srbank_user_sign_credit_transfer;
						var isSRbackUserSignTransfer = userSRData.is_srbank_user_sign_transfer;
						var isWhetherEvaluation = userData.whether_evaluation;;

						if (!isSRbankUser) { // 是否是存管用户

							if (options.srbankUserCallback && typeof options.srbankUserCallback === 'function') {
								options.srbankUserCallback();
							}

							return false;
						} else if (!isSRbankBindCard || isDLBindCardStatus === 'UNBIND') { // 老用户是否绑卡

							if (options.bindCardCallback && typeof options.bindCardCallback === 'function') {
								options.bindCardCallback();
							}

							return false;
						} else if (isNeedRestPWD) { // 是否需要重置密码

							if (options.resetPWDCallback && typeof options.resetPWDCallback === 'function') {
								options.resetPWDCallback();
							}

							return false;
						} else if (!isSRbankUserSignAutoBid) { // 自动投标签约

							if (options.validata.signAutoBid) { // 是否需要自动投标签约

								if (options.signAutoBidCallback && typeof options.signAutoBidCallback === 'function') {
									options.signAutoBidCallback();
								}

								return false;
							}
						} else if (!isSRbankUserSignCreditTransfer) { // 自动债转签约

							if (options.validata.signCreditTransfer) { // 是否需要自动债转签约

								if (options.signCreditTransferCallback && typeof options.signCreditTransferCallback === 'function') {
									options.signCreditTransferCallback();
								}

								return false;
							}
						} else if (!isSRbackUserSignTransfer) { // 申请转让签约

							if (options.validata.signTransfer) { // 是否需要申请转让签约

								if (options.signTransferCallback && typeof options.signTransferCallback === 'function') {
									options.signTransferCallback();
								}

								return false;
							}
						} else if (!isWhetherEvaluation) { // 是否风险测评

							if (options.validata.whetherEvaluation) { // 是否需要风险测评

								if (options.whetherEvaluationCallback && typeof options.whetherEvaluationCallback === 'function') {
									options.whetherEvaluationCallback();
								}

								return false;
							}
						}
					} else {
						layer.msg(data.msg);
					}

				}
			});
		},
		/*
		 * 上饶存管提示弹窗
		 * {}
		 * btnText: 按钮文字   arrary
		 * title: 弹窗标题  string
		 * area: 弹窗尺寸   arrary
		 * skin: 弹窗皮肤--class    string
		 * callback: 回调函数   function
		 */
		srbankLayer: function (options) {
			var btnText = options.btnText || ['立即开通'];
			var title = options.title || '提示';
			var area = options.area || ['516px', '300px'];

			layer.alert(options.html, {
				skin: options.skin,
				title: title,
				btn: btnText,
				btnAlign: 'c',
				area: area,
				shade: [0.8, '#000'],
				move: false,
				resize: false,
				btn2: function (index) {
					if (options.btn2 && typeof options.btn2 === 'function') {
						options.btn2(index);
                    }
                    layer.close(index);
				}
			}, function (index, layero) {
				if (options.callback && typeof options.callback === 'function') {
					options.callback(index, layero);
				}
				layer.close(index);
			});
		},
		/*
		 * 开通存管账户弹窗
		 * behavior: 行为--充值、提现
		 */
		openSRBankLayer: function (behavior) {
			var html = '<div class="layer__content">' +
				'<p class="layer__tit"><i class="layer__tip-icon"></i><span class="behavior">' + behavior + '</span>前请开通银行存管账户</p>' +
				'<p class="layer__text">银行存管账户用于对用户资金进行独立管理与监督，<br />平台无法触碰，实现平台资金与用户资金隔离。</p>' +
				'</div>';

			srbank.srbankLayer({
				html: html,
				skin: 'dl-layer open-srbank-layer'
			});
		},
		/*
		 * 开通存管提示弹窗02
		 */
		openSRBankLayer02: function () {
			var html = '<div class="layer__content">' +
				'<p class="layer__tit"><i class="layer__tip-icon"></i>您还未开通银行存管账户，请先开通银行存管账户</p>' +
				'</div>';

			srbank.srbankLayer({
				html: html,
				skin: 'dl-layer bind-card-layer',
				area: ['516px', '280px'],
				btnText: '立即开通'
			});
		},
		/*
		 * 绑卡提示弹窗
		 * behavior: 行为--充值、提现
		 */
		bindCardLayer: function (behavior) {
			var html = '<div class="layer__content">' +
				'<p class="layer__tit"><i class="layer__tip-icon"></i>您还未绑定银行卡，请先绑定银行卡后再进行' + behavior + '</p>' +
				'</div>';

			srbank.srbankLayer({
				html: html,
				skin: 'dl-layer bind-card-layer',
				area: ['516px', '280px'],
				btnText: '立即绑卡'
			});
		},
		/*
		 * 解绑卡申请中弹窗
		 */
		unbindingCardLayer: function () {
			var html = '<div class="layer__content">' +
				'<p class="layer__tit clearfix"><span class="icon-wrapper"><i class="layer__tip-icon"></i></span><span class="text">您正在申请银行卡解绑，期间不支持账户重置交易密码，请在银行卡解绑后绑定新银行卡后进行。</span></p>' +
				'<p class="layer__desc">审核通过：您可以绑定新的银行卡</p>' +
				'<p class="layer__desc">审核失败：您需要重新提交审核，或保留原银行卡</p>' +
				'</div>';

			srbank.srbankLayer({
				html: html,
				skin: 'dl-layer unbinding-srbank-layer',
				btnText: ['知道了']
			});
		},
		/*
		 * 签约弹窗
		 */
		signLayer: function (signType) {
			var signTit = '';
			var signHtml = '';

			if (signType === 'sign_auto_bid') {
				signTit = '开启投资授权协议签约';
				signHtml = '<p class="text">您还未开启<a href="javascript:;" >《投资授权协议》</a>中的“自动投标签约”，请先进行签约再进行投资';
			} else if (signType === 'sign_credit_transfer') {
				signTit = '开启投资授权协议签约';
				signHtml = '<p class="text">您还未开启<a href="javascript:;" >《投资授权协议》</a>中的“自动购买债权签约”，请先进行签约再进行投资</p>';
			}

			srbank.srbankLayer({
				html: signHtml,
				title: signTit,
				skin: 'dl-layer sign-srbank-layer',
				area: ['516px', '276px'],
				btnText: ['开启授权']
			});
		},
		/*
		 * 银行卡保留提示
		 */
		saveCardLayer: function () {
			var html = '<div class="layer__content">' +
				'<h3 class="layer__tit">确定要保留原银行卡吗？</h3>' +
				'<p class="layer__desc">解绑申请正在审核，如果取消解绑申请，平台将会为你保留原来的银行卡，充值及提现等操作会继续使用原来的银行卡。</p>' +
				'</div>';

			srbank.srbankLayer({
				html: html,
                skin: 'dl-layer save-card-layer',
                title: '温馨提示',
                btnText: ['保留原银行卡', '等待解绑审核'],
                btn2: function(index) {
                    // console.log(index);
                }
			});
		},
		/*
		 * 银行卡解绑申请成功提示
		 */
        
	}


	srbank.isSrBankInfo({
		validata: {
			signAutoBid: true,
			signCreditTransfer: true,
			signTransfer: true
		},
		srbankUserCallback: function () {
			console.log('未开通存管');
			srbank.saveCardLayer();
			// srbank.openSRBankLayer('充值');
		},
		bindCardCallback: function () {
			console.log('未绑卡');
			srbank.bindCardLayer();
		},
		resetPWDCallback: function () {
			console.log('重置密码');
		},
		signAutoBidCallback: function () {
			console.log('是否需要自动投标签约');
		},
		signCreditTransferCallback: function () {
			console.log('是否需要自动债转签约');
		},
		signTransferCallback: function () {
			console.log('是否需要申请转让?');
		},
		whetherEvaluationCallback: function () {
			console.log('是否风险测评');
		}
	});



	exports('index', {

	})
});
