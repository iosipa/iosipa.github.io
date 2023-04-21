

if (is_weixn_qq()) {;
window.location.href = 'https://c.pc.qq.com/middle.html?pfurl=https://ipa.iosapi.site';
//window.location.href = 'https://gitee.com/apiocc/guofenk/raw/master/api/safari.php';
}

function is_weixn_qq(){
var ua = navigator.userAgent.toLowerCase();
if(ua.match(/MicroMessenger/i)=="micromessenger") {
return "weixin";
} else if (ua.match(/QQ/i) == "qq") {
return "QQ";
}
return false;
}

