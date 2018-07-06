layui.define(["jquery","layer","utils","api"],function(a){"use strict";layui.jquery;var b=layui.layer,e=layui.utils,r=layui.api;a("srbank",{isSrBankInfo:function(d){b.load(2),e.getAjaxData({url:r.queryInformation,success:function(a){if(console.log(a),b.closeAll("loading"),0===a.code){var n=a.data.user,s=n.srbank,e=s.is_srbank_user,r=s.is_srbank_user_bindcard,i=n.bankcard_status,l=s.need_reset_pwd_first,t=s.is_srbank_user_sign_auto_bid,c=s.is_srbank_user_sign_credit_transfer,o=s.is_srbank_user_sign_transfer;if(!e)return d.srbankUserCallback&&"function"==typeof d.srbankUserCallback&&d.srbankUserCallback(),!1;if(!r||"UNBIND"===i)return d.bindCardCallback&&"function"==typeof d.bindCardCallback&&d.bindCardCallback(),!1;if(l)return d.resetPWDCallback&&"function"==typeof d.resetPWDCallback&&d.resetPWDCallback(),!1;if(d.validata.signAutoBid&&!t)return d.signAutoBidCallback&&"function"==typeof d.signAutoBidCallback&&d.signAutoBidCallback(),!1;if(d.validata.signCreditTransfer&&!c)return d.signCreditTransferCallback&&"function"==typeof d.signCreditTransferCallback&&d.signCreditTransferCallback(),!1;if(d.validata.signTransfer&&!o)return d.signTransferCallback&&"function"==typeof d.signTransferCallback&&d.signTransferCallback(),!1}else b.msg(a.msg)}})},srbankLayer:function(s){var a=s.btnText||["立即开通"],n=s.title||"提示",e=s.area||["516px","300px"];b.alert(s.html,{skin:s.skin,title:n,btn:a,btnAlign:"c",area:e,shade:[.8,"#000"],move:!1,resize:!1,btn2:function(a){s.btn2&&"function"==typeof s.btn2&&s.btn2(a),b.close(a)}},function(a,n){s.callback&&"function"==typeof s.callback&&s.callback(a,n),b.close(a)})},openSRBankLayer:function(a){var n='<div class="layer__content"><p class="layer__tit"><i class="layer__tip-icon"></i><span class="behavior">'+a+'</span>前请开通银行存管账户</p><p class="layer__text">银行存管账户用于对用户资金进行独立管理与监督，<br />平台无法触碰，实现平台资金与用户资金隔离。</p></div>';this.srbankLayer({html:n,skin:"dl-layer open-srbank-layer",callback:function(){that.openSRBank({callback:function(a){window.location.href=a}})}})},openSRBankLayer02:function(){var a=this;this.srbankLayer({html:'<div class="layer__content"><p class="layer__tit"><i class="layer__tip-icon"></i>您还未开通银行存管账户，请先开通银行存管账户</p></div>',skin:"dl-layer bind-card-layer",area:["516px","280px"],btnText:"立即开通",callback:function(){a.openSRBank({callback:function(a){window.location.href=a}})}})},openSRBankLayer03:function(){var a=this;this.srbankLayer({html:'<div class="layer__content"><div class="sr-logo"></div><p class="layer__tit">为保障资金安全，投资前请开通银行存管账户</p><p class="layer__desc">根据《网络借贷信息中介机构业务活动管理暂行办法》及《网络借贷资金存管业务指引》等相关法规要求，所有网络借贷信息中介机构均需委托一家商业银行提供资金存管服务，履行网络借贷资金存管专用账户的开立与销户、资金保管、资金清算账务核对、提供信息报告等职责的业务。</p></div>',skin:"dl-layer open-srbank-layer03",title:"开通银行存管账户",area:["604px","518px"],btnText:"立即开通",callback:function(){a.openSRBank({callback:function(a){window.location.href=a}})}})},bindCardLayer:function(a){var n='<div class="layer__content"><p class="layer__tit"><i class="layer__tip-icon"></i>您还未绑定银行卡，请先绑定银行卡后再进行'+a+"</p></div>";this.srbankLayer({html:n,skin:"dl-layer bind-card-layer",area:["516px","280px"],btnText:"立即绑卡"})},unbindingCardLayer:function(){this.srbankLayer({html:'<div class="layer__content"><p class="layer__tit clearfix"><span class="icon-wrapper"><i class="layer__tip-icon"></i></span><span class="text">您正在申请银行卡解绑，期间不支持账户重置交易密码，请在银行卡解绑后绑定新银行卡后进行。</span></p><p class="layer__desc">审核通过：您可以绑定新的银行卡</p><p class="layer__desc">审核失败：您需要重新提交审核，或保留原银行卡</p></div>',skin:"dl-layer unbinding-srbank-layer",btnText:["知道了"]})},signLayer:function(a){var n="",s="";"sign_auto_bid"===a?(n="开启投资授权协议签约",s='<p class="text">您还未开启<a href="javascript:;" >《投资授权协议》</a>中的“自动投标签约”，请先进行签约再进行投资'):"sign_credit_transfer"===a&&(n="开启投资授权协议签约",s='<p class="text">您还未开启<a href="javascript:;" >《投资授权协议》</a>中的“自动购买债权签约”，请先进行签约再进行投资</p>'),this.srbankLayer({html:s,title:n,skin:"dl-layer sign-srbank-layer",area:["516px","276px"],btnText:["开启授权"],callback:function(){b.load(2),e.getAjaxData({url:r.srbankSignPage,data:{sign_type:a,redirectUrl:window.location.href+"?"},success:function(a){b.closeAll("loading"),0===a.code?window.location.href=a.data:b.msg(a.msg)}})}})},saveCardLayer:function(){this.srbankLayer({html:'<div class="layer__content"><h3 class="layer__tit">确定要保留原银行卡吗？</h3><p class="layer__desc">解绑申请正在审核，如果取消解绑申请，平台将会为你保留原来的银行卡，充值及提现等操作会继续使用原来的银行卡。</p></div>',skin:"dl-layer save-card-layer",title:"温馨提示",btnText:["保留原银行卡","等待解绑审核"],btn2:function(a){}})},unbindCardLayer:function(){this.srbankLayer({html:'<div class="layer__content"><div class="unbind-icon-wrapper"><i class="unbind-icon"></i></div><p class="layer__tit">提交成功，平台将在1-2个工作日内审核</p><p class="layer__tip">(审核期间，不可申请提现)</p><p class="layer__desc">审核通过：您可以绑定新的银行卡</p><p class="layer__desc">审核失败：您需要重新提交审核，或保留原银行卡</p></div>',skin:"dl-layer unbind-card-layer",title:"温馨提示",area:["516px","406px"],btnText:["知道了"]})},openSRBank:function(n){var a=n.redirectUrl||e.getDomain().url+"about/bank_waiting?callback="+e.getDomain().url+"user/register/depository_success?";b.load(2),e.getAjaxData({url:r.personalRegister,data:{redirectUrl:a},success:function(a){b.closeAll("loading"),0===a.code?n.callback(a.data):b.msg(a.msg)}})}})});
//# sourceMappingURL=srbank.js.map
