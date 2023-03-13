!(function (window) {
  function Utils() {
    return {
      // 获取url参数函数
      getUrlParam: function (name) {
        const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        const r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURIComponent(r[2]);
        return null;
      },
      // 检验手机号是否有效正则
      checkPhone: function (phone) {
        const reg = /^1\d{10}$/;
        return reg.test(phone);
      },
    };
  }
  window.Utils = new Utils();
})(window || {});
