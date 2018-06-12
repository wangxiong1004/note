layui.define(["jquery","element","layer","utils","api","code"],function(e){layui.jquery,layui.element,layui.layer;var a=layui.utils,i=layui.api;layui.code({skin:"notepad",height:"300px",about:!1});a.getAjaxData({url:i.bespeakEntry,success:function(e){console.log(e)}}),e("note",{})});
//# sourceMappingURL=note.js.map
