layui.define(['utils'], function (exports) {
    var uitls = layui.utils;

    var apiUrl = uitls.getDomain().urlApi;

    var api = {
        pcIndex: apiUrl + 'v1/homepage/getIndexData',    // pc首页
        noticeList: apiUrl + 'v1/homepage/getNoticeList', // 公告列表
        appIndex: apiUrl + 'v1/app/appindex',    // app首页
        signin: apiUrl + 'v1/user/signin', // 登录
        detail: apiUrl + 'v1/user/detail', // 用户中心
        /*
         * 定期（随心投）
         */
        regularIndex: apiUrl + 'v1/regular/index',  // 定期列表
        regularDetail: apiUrl + 'v1/regular/plan',  // 定期详情
        regularUser: apiUrl + 'v1/regular/plan_user',   // 定期购买用户
        /*
         * 散标
         */
        standardMatch: apiUrl + 'v1/standard/loan_match', // 购买散标
        standardBidMatch: apiUrl + 'v1/standard/buy_bid_manual',   // 未签约用户购买散标
        standardBidCheck: apiUrl + 'v1/standard/buy_bid_manual_check', // 未签约用户购买后订单查询
        investInterestRepay: apiUrl + 'standard/invest_interest_repay', // 散标往期收益计算
        investmentList: apiUrl + 'v1/standard/get_investment_list', // 散标购买记录
        investmentSchedules: apiUrl + 'v1/standard/investment_schedules', // 还款计划
        /*
         * 转让
         */
        transferList: apiUrl + 'v1/standard/transfer_list', // 转让列表
        transferDetail: apiUrl + 'v1/standard/transfer_detail', // 转让详情
        transferCreditMatch: apiUrl + 'v1/standard/buy_credit_manual', // 未签约用户购买转让
        transferCreditCheck: apiUrl + 'v1/standard/buy_credit_manual_check', // 未签约用户购买转让后订单查询
        investmentSchedule: apiUrl + 'v1/standard/investment_schedule', // 已匹配投资还款计划
        investmentTransfer: apiUrl + 'v1/standard/investment_transfer', // 申请转让
        transferDetailWeb: apiUrl + 'v1/standard/transfer_detail_web', // 申请转让详情
        acceptTransfer: apiUrl + 'v1/standard/accept_transfer', // 购买申请转让
        /*
         * 一键投标
         */
        batch: apiUrl + 'v1/standard/batch', // 一键购买散标，转让
        /*
         * 上饶银行存管api
         */
        personalRegister: apiUrl + 'v1/srbankaccount/personal_register', // 开通存管
        queryInformation: apiUrl + 'v1/srbankaccount/query_information', // 银行存管信息
        rebindBankcardPage: apiUrl + 'v1/srbankaccount/rebind_bankcard_page', // 存管绑卡
        resetPassword: apiUrl + 'v1/srbankaccount/reset_password', // 重置密码
        srbankSignPage: apiUrl + 'v1/srbankaccount/srbank_sign_page', // 签约
        /*
         * 预约投标
         */
        bespeakEntry: apiUrl + 'v1/loan/bespeak', // 预约入口
        bespeakDetail: apiUrl + 'v1/loan/bespeak_detail', // 预约详情
        bespeakBuy: apiUrl + 'v1/standard/bespeak', // 预约购买
        bespeakList: apiUrl + 'v1/user/user_batch_auto_list', // 用户中心预约查询
        bespeakCancel: apiUrl + 'v1/user/user_batch_auto_cancel', // 取消预约
    };

    exports('api', api);
});