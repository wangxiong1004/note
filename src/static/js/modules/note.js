layui.define(['jquery', 'element', 'layer', 'utils', 'api', 'code'], function (exports) {
	var $ = layui.jquery;
	var element = layui.element;
	var layer = layui.layer;
	var utils = layui.utils;
	var api = layui.api;
	var code = layui.code({
        skin: 'notepad',
        height: '300px',
        about: false 
    });

	utils.getAjaxData({
		url: api.bespeakEntry,
		success: function (data) {
			console.log(data);
		}
    });

	exports('note', {});
});