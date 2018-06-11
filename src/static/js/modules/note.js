layui.define(['jquery', 'element', 'layer', 'utils', 'api'], function (exports) {
	var $ = layui.jquery;
	var element = layui.element;
	var layer = layui.layer;
	var utils = layui.utils;
	var api = layui.api;

	utils.getAjaxData({
		url: api.bespeakEntry,
		success: function (data) {
			console.log(data);
		}
	});

	exports('note', {});
});