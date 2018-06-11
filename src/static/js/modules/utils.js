layui.define([
    'jquery'
], function (exports) {
    'use strict';
    var $ = layui.jquery;
    var utils = {
        showTime: function () {
            var time_start = new Date("2014/12/17 00:00:00").getTime();
            var time_end = new Date().getTime();
            var time_distance = time_end - time_start;
            if (time_distance > 0) {
                var int_year = Math.floor(time_distance / 31536000000)
                time_distance -= int_year * 31536000000;
                var int_day = Math.floor(time_distance / 86400000)
                time_distance -= int_day * 86400000;
                var int_hour = Math.floor(time_distance / 3600000)
                time_distance -= int_hour * 3600000;
                var int_minute = Math.floor(time_distance / 60000)
                time_distance -= int_minute * 60000;
                var int_second = Math.floor(time_distance / 1000)
                if (int_day < 10) {
                    int_day = "0" + int_day;
                }
                if (int_hour < 10) {
                    int_hour = "0" + int_hour;
                }
                if (int_minute < 10) {
                    int_minute = "0" + int_minute;
                }
                if (int_second < 10) {
                    int_second = "0" + int_second;
                }
                $("#time_y").html(int_year);
                $("#time_d").html(int_day);
                $("#time_h").html(int_hour);
                $("#time_m").html(int_minute);
                $("#time_s").html(int_second);
                setTimeout("Util.showTime()", 1000);
            } else {
                $("#time_y").html('0');
                $("#time_d").html('00');
                $("#time_h").html('00');
                $("#time_m").html('00');
                $("#time_s").html('00');
            }
        },
        /**
         * 0-10的随机数
         * @returns {Number}
         */
        mathRandom: function () {
            return parseInt(10 * Math.random());
        },
        /**
         * 后退一天
         * @param data
         * @returns {string}
         */
        getPrevDay: function () {
            var d = new Date();
            d = +d - 1000 * 60 * 60 * 24;
            d = new Date(d);
            return d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日";
        },
        /**
         * 时间戳转换
         * @param timeStamp
         * @param type
         * @returns {string}
         */
        formatDateTime: function (timeStamp, type) {
            var date = new Date();
            date.setTime(timeStamp * 1000);
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            m = m < 10 ? ('0' + m) : m;
            var d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            var h = date.getHours();
            h = h < 10 ? ('0' + h) : h;
            var minute = date.getMinutes();
            var second = date.getSeconds();
            minute = minute < 10 ? ('0' + minute) : minute;
            second = second < 10 ? ('0' + second) : second;
            if (type == 1) {
                return y + '-' + m;
            } else if (type == 2) {
                return d + ' ';
            } else {
                return y + '-' + m + '-' + d + ' ';
            }
        },
        /**
         * tab切换
         * @param tab
         * @param tabContent
         * @param currentClass
         * @param call
         * @param evenType
         */
        tabFn: function (tab, tabContent, currentClass, call, evenType) {
            if (typeof currentClass == 'undefined') {
                currentClass = 'curr';
            }
            if (typeof evenType == 'undefined') {
                evenType = 'click';
            }
            tab.bind(evenType, function () {
                tab.removeClass(currentClass);
                $(this).addClass(currentClass);
                var index = $(this).index();
                tabContent.hide().eq(index).show();
                if (typeof call != 'undefined') {
                    call(index);
                }
            });
        },
        /**
         * 获取cookie
         * @param name
         * @returns {*}
         */
        getCookie: function (name) {
            var strCookie = document.cookie;
            var arrCookie = strCookie.split("; ");
            for (var i = 0; i < arrCookie.length; i++) {
                var arr = arrCookie[i].split("=");
                if (name == arr[0]) {
                    return arr[1];
                }
            }
            return "";
        },
        /**
         * 获取时间戳
         * @returns {number}
         */
        getSeconds: function () {
            return new Date().getTime();
        },
        /**
         * 毫秒时间戳.随机数
         */
        getRrandomTime: function () {
            var d = new Date().getTime();
            var num = "";
            for (var i = 0; i < 5; i++) {
                num += Math.floor(Math.random() * 10);
            }
            return d + '.' + num;
        },
        /**
         * 随机的16为字符串 X-Dola-Code
         * @returns {string}
         */
        getRrandomStr: function () {
            var data = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            var result = "";
            for (var i = 0; i < 16; i++) {
                var r = Math.floor(Math.random() * 62);
                result += data[r];
            }
            return result;
        },
        /**
         * 生成36位的uuid
         * @returns {string}
         */
        getGuid: function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        },
        /**
         *
         * @param Codekey 加密的key
         * @param str  加密的str
         * @param name
         * @returns {*}
         */
        encryption: function (Codekey, str, name) {
            if (Codekey) {
                return base64encode(des(Codekey, utf16to8(str), 1, 0, hexToString(name), 1))
            }
        },
        /**
         *
         * @param key 解密的key
         * @param str 解密的str
         * @param name
         * @returns {*}
         */
        decrypt: function (key, str, name) {
            if (key) {
                return Handle(utf8to16(des(key, base64decode(String(str)), 0, 0, hexToString(name), 0)))
            }
        },
        /**
         *
         * @param platform 平台标志
         * @param token 身份验证
         * @returns {*}
         */
        getParams: function (platform, token, params) {
            if (platform) {
                var params = {
                    platform: 'pc',
                    proglang: 'javascript',
                    sn: this.getRrandomTime(),
                    params: params,
                    token: token
                }
                return JSON.stringify(params);
            }
        },
        /**
         * 金额格式化 4位分割
         * @param num
         * @returns {string}
         */
        toMoney: function (num) {
            var number = new Number(num);
            var str = number.toString();
            var newstr = str.replace(/\d{1,4}(?=(\d{4})+$)/g, function (s) {
                return s + ','
            })
            return newstr;
        },
        /**
         * 金额正常格式
         * @param num
         * @returns {string|*}
         */
        toMoneyNormal: function (num) {
            num = num.toFixed(2);
            num = parseFloat(num)
            num = num.toLocaleString();
            return num;
        },
        /**
         * 获取域名
         * @param ''
         * @returns {*}
         */
        getDomain: function () {
            var url = "",
                urlApi = "";
            var domainObj = {};
            switch (window.location.hostname) {
                case "www.dolabank.com":
                    urlApi = 'https://www.dolabank.com/apigateway/';
                    url = 'https://www.dolabank.com/';
                    break;
                case "www.duolajucai.top":
                    urlApi = 'https://api.duolajucai.top/';
                    url = 'https://www.duolajucai.top/';
                    break;
                case "www.dolabank.top":
                    urlApi = 'https://api.dolabank.top/';
                    url = 'https://www.dolabank.top/';
                    break;
                case "www.dolabank.club":
                    urlApi = 'https://api.dolabank.club/';
                    url = 'https://www.dolabank.club/';
                    break;
                case "www.dola.dev":
                    urlApi = 'https://api.dola.dev/';
                    url = 'https://www.dola.dev/';
                    //                  urlApi = 'https://www.dolabank.com/apigateway/';
                    break;
                default:
                    //                  urlApi = 'https://www.dolabank.com/apigateway/';
                    urlApi = 'https://api.dolabank.com/';
                    url = 'https://www.dolabank.com/';
            }

            domainObj['url'] = url;
            domainObj['urlApi'] = urlApi;

            return domainObj;

        },
        /**
         * 获取链接参数
         * @param name
         * @returns { string }
         */
        getQueryString: function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var reg_rewrite = new RegExp("(^|/)" + name + "/([^/]*)(/|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            var q = window.location.pathname.substr(1).match(reg_rewrite);
            if (r != null) {
                return unescape(r[2]);
            } else if (q != null) {
                return unescape(q[2]);
            } else {
                return null;
            }
        },
        /**
         * 异步获取数据
         * @param options
         * url:
         * platform: 'pc' 操作平台
         * type: 'get' 请求方式
         * async: 是否异步
         * data: {},
         * success: function(data) {}
         */
        getAjaxData: function (options) {
            var that = this;

            var url = options.url || '';
            var platform = options.platform || 'pc';
            var type = options.type || 'get';
            var token = this.getCookie('token');
            var Codekey = this.getRrandomStr();
            var paramsdata = options.data;
            var params = this.getParams(platform, token, paramsdata);
            params = this.encryption(Codekey, params, 'code');
            $.ajax({
                type: type,
                url: url,
                async: options.async,
                headers: {
                    "X-Dola-Time": that.getSeconds(),
                    "X-Dola-ClientID": that.getGuid(),
                    'X-Dola-Code': Codekey
                },
                data: {
                    data: params
                },
                success: function (res, status, xhr) {
                    var key = xhr.getResponseHeader("X-Dola-Edoc");
                    var data = res;
                    var str = that.decrypt(key, data, 'code');
                    var data = JSON.parse(str);

                    if (options.success && typeof options.success === 'function') {
                        options.success(data);
                    }

                },
                error: function (data) {
                    if (options.error && typeof options.error === "function") {
                        options.error(data);
                    }
                }
            });
        },
        /*
         * 判断是否展示的当前页面
         * @param { string } url参数
         * @returns { blooen }
         */
        isCurrentPage: function (urlString) {
            var pathnameStr = window.location.pathname;

            if (pathnameStr === urlString) {
                return true;
            } else {
                return false;
            }
        },
        /*
         * 选择添加class
         * @param { object } 当前元素
         * @param { string } 添加的class
         * @returns { * }
         */
        addClassActive: function (ele, className) {
            ele.addClass(className).siblings().removeClass(className);
        },
        /*
         * 切换class
         * @param { object } 当前元素
         * @param { string } 添加的class
         * @returns { * }
         */
        toggleClass: function (ele, className) {
            if (!ele.data('checked')) {
                ele.removeClass(className);
                ele.data('checked', true);
            } else {
                ele.addClass(className);
                ele.data('checked', false);
            }
        }
    };

    exports('utils', utils);
});