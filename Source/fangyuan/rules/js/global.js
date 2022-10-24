(function() {
	//以下VIP解析功能
	//精简接口
	/*var apis = [
    {"name":"小蒋极致","url":"https://www.kpezp.cn/jlexi.php?url="},
    {"name":"无广告秒播","url":"http://jx.98a.ink/?v="},
    {"name":"1907","url":"https://z1.m1907.cn/?jx="},
    {"name":"360dy接口","url":"http://yun.360dy.wang/?url="},
    {"name":"科技解析","url":"http://ka61b.cn/jx.php?url="},
    {"name":"17K云","url":"http://17kyun.com/api.php?url="},
    {"name":"百度oos解析","url":"http://app.baiduoos.cn:2019/vip/?url="},
    {"name":"aldsw解析","url":"http://jx.aldsw.cn/jx/index.php?url="},
    {"name":"流氓凡解析","url":"http://jx.wslmf.com/?url="},
    {"name":"巢云","url":"http://www.dgua.xyz/webcloud/?url="}];
    */
    
    
    //备用接口，实际未使用
    
    var apis = [
	{"name": "初心解析", "url": "http://jx.bwcxy.com/?v="},
	{"name": "初颜解析", "url": "http://jx.wodym.cn/?url="},
	{"name": "Hk解析", "url": "http://jx.rdhk.net/?v="},
	{"name":"知网解析","url":"http://www.xyyh.xyz/zwjx/?url="},
    {"name": "星空解析", "url": "https://jx.fo97.cn/?url="},
    {"name": "全网vip", "url": "https://play.fo97.cn/?url="},
	{"name": "360dy解析", "url": "http://yun.360dy.wang/jx.php?url="},
	{"name": "小蒋极致", "url": "https://www.kpezp.cn/jlexi.php?url="},
    {"name":"维多解析（超清）","url":"https://jx.ivito.cn/?url="},
    {"name":"云梦解析","url":"http://www.xuanbo.top/yjx/index.php?url="},
    {"name":"云梦2","url":"http://app.hoptc.cn/dyjx.php?url="},
    {"name":"z8解析","url":"http://www.hoptc.cn/z8/?url="},
    {"name": "tv920解析", "url": "https://api.tv920.com/vip/?url="},
	{"name":"89免费解析","url":"http://www.ka61b.cn/jx.php?url="},
	{"name": "1907影视", "url": "https://z1.m1907.cn/?jx="},
	{"name": "下视频", "url": "http://www.xiashipin.net/?url="},
	{"name":"智库解析","url":"http://www.guandianzhiku.com/v/s/?url="},
      {"name":"逆天解析","url":"http://nitian9.com/?url="},
	{"name": "羊分享", "url": "http://buchi.me/?v="},
	{"name": "爱分享", "url": "http://api.iifen.top/?v="},
	{"name": "XyPlayer解析", "url": "http://jx.xyplay.vip/?url="},
	{"name":"豪华啦","url":"http://api.lhh.la/vip/?url="},
	{"name": "40解析", "url": "https://jx40.net/url="},
	{"name": "无名影视", "url": "http://api.51ds.shop/jx/?url="},
	{"name": "宿命解析", "url": "http://api.sumingys.com/index.php?url="},
	{"name": "ZLVIP", "url": "https://vip.zlkkk.shop/2019/?url="},
    {"name": "8B解析", "url": "http://api.8bjx.cn/?url="},
    {"name":"千忆解析","url":"https://v.qianyicp.com/v.php?url="},
	{"name": "梦城", "url": " https://mcncn.cn/?url="},
	{"name": "114解析", "url": "https://jx.f41.cc/?url="},
	{"name": "解析系统", "url": "https://www.ckmov.vip/api.php?url="},
    {"name":"超清干货","url":"http://k8aa.com/jx/index.php?url="},
    {"name":"七星解析1","url":"http://api.greatchina56.com/?url="},
    {"name":"bl解析","url":"https://vip.bljiex.com/?v="},
    {"name":"熊猫解析","url":"http://111ys.cn/111/?url="},
    {"name":"穷二代","url":"http://jx.ejiafarm.com/x/jiexi.php?url="},
    {"name":"517解析","url":"http://cn.bjbanshan.cn/jx.php?url="},
    {"name":"千亿","url":"https://v.qianyicp.com/v.php?url="},
	{"name": "小视频", "url": "http://www.xiashipin.net/?url="},
	{"name": "52解析", "url": "http://apk.528kan.cn/index.php?url="},
    {"name": "丸酷解析", "url": "https://wq66.cn/?url="},
    {"name":"智能解析","url":"https://jx.qppyy.com/jx/?url="},
    {"name":"618戈","url":"http://jx.618ge.com/?url="},
	{"name":"凉城解析","url":"http://jx.mw0.cc/?url="},
	{"name":"解析","url":"http://69p.top/?url="},
    {"name":"播大大","url":"https://vip.bddjx.com/?url="},
	{"name": "爸比解析", "url": "http://www.33tn.cn/?url="},
	{"name":"大亨解析","url":"http://jx.cesms.cn/?url="},
	{"name":"赵先森","url":"https://jx.zhaodh.top/?v="},
    {"name":"宏伟解析","url":"http://www.cqhwdnwx.com/jx/?url="},
	{"name": "地久天长", "url": "http://www.lexiangsj.xyz/?v="},
	{"name": "47解析", "url": "http://jx.nxnns47.cf/?v="},
	{"name": "1ff1解析", "url": "http://jx.1ff1.cn/?url="},
	{"name": "116kan", "url": "http://vip.116kan.com/?url="},
	{"name": "弦易阁", "url": "http://jx.hongyishuzhai.com/index.php?url="},
	{"name": "55解析", "url": "http://55jx.top/?url="},
	{"name": "00180", "url": " https://jx.000180.top/jx/?url="},
	{"name": "七星", "url": "http://qx.c7776.com/v3/?v="},
	{"name": "128解析", "url": "https://jx.128sp.com/jxjx/?url="},
	{"name": "19解析", "url": "http://19g.top/?url="},
	{"name": "无极速", "url": "http://jx.6666txt.com/?url="},
    {"name":"云易1","url":"http://app.baiyug.cn:2019/vip/?url="},
    {"name":"云易2","url":"https://vip.bddjx.com/?url="},
	{"name":"秒播解析","url":" http://www.cuan.la/?url="},
	{"name": "265解析", "url": "https://vod.265ks.com/vod/index.php?url="},
	{"name":"1969解析","url":"http://ys.1969com.cn/?url="},
    {"name":"优奇高速稳定","url":"https://jx.youqi.tw/v.php?url="},
	{"name": "云解析", "url": "https://api.3456yun.com/?url="},
	{"name": "热点解析", "url": "http://jx.rdhk.net/?v="},
	{"name":"ha12解析","url":"http://py.ha12.xyz/sos/index.php?url="},
    {"name":"9酷解析","url":"https://jx.9ku.wang/9ku/?url="},
    {"name": "冰河解析", "url": "http://jx.duzhiqiang.com/?url="},
    {"name": "智能解析", "url": "https://lany.lzure.kim/?v="},
	{"name": "狸猫解析", "url": "http://111jx.xyz/?url="},
	{"name":"云解析","url":"http://gege.ha123.club/gege1234/index.php?url="},
    {"name": "清风明月", "url": "http://fateg.xyz/?url="},
    {"name": "花语有你", "url": "http://api.huahuay.com/?url="},
    {"name": "解析吧", "url": "http://jx.jxba.cc/?url="},
	{"name": "智能无广", "url": "https://www.xcdy5.com/jx/?url="},
	{"name": "福祥影视", "url": "http://jx.hao0606.com/?url="},
	{"name": "猪蹄无广告", "url": "http://jx.iztyy.com/svip/?url="},
	{"name": "猪蹄无广告1", "url": "https://jx.iztyy.com/svip/?url="},
	{"name": "青山解析", "url": "http://api.cypay.me/?v="},
	{"name":"无广告秒","url":"http://jx.98a.ink/?v="},
	{"name": "T15X解析", "url": "https://play.t15x.com/index.php?url="},
	{"name": "爱奇艺专线", "url": "https://www.58danke.top/jx/ck?url="},
    {"name": "芒果蓝光解析", "url": "http://www.guandianzhiku.com/v/s/?url="},
   	{"name": "科技解析", "url": "http://ka61b.cn/jx.php?url="},
	{"name":"爱解析","url":"http://jx.wfxzzx.cn/?url="},
    {"name":"购买的解析","url":"http://jx.vipshares.xyz/index1.php?url="},
    {"name":"快视宝3号解析","url":"http://jx.q73w.cn/jx03/?url="},
     {"name":"快视宝4号解析","url":"http://jx.q73w.cn/jx04/?url="},
    {"name":"快视宝5号解析","url":"http://jx.q73w.cn/jx05/?url="},
    {"name":"快视宝6号解析","url":"http://jx.q73w.cn/jx06/?url="},
    {"name":"快视宝7号解析","url":"http://jx.q73w.cn/jx07/?url="},
     {"name": "爱看碟解析", "url": "http://jx.ikandie.cn/?url="},
    {"name": "紫云解析", "url": "https://api.smq1.com/?url="},
    {"name": "调试", "url": "https://vip.mpos.ren/v/?url="},
    {"name": "人人解析", "url": "https://cdn.yangju.vip/k/?url="},
	{"name": "黑米解析", "url": "https://www.heimijx.com/jx/api/?url="},
	{"name": "飞鸟云播", "url": "http://jx.ledboke.com/?url="},	
	{"name": "kh38解析", "url": "http://jx.kh38.cn/?url="},
	{"name":"607p","url":"http://607p.com/?url="},
    {"name":"69p","url":"http://69p.top/?url="},
    {"name":"playx","url":"http://playx.top/?url="},
    {"name":"泥潭9","url":"http://nitian9.com/?url="},
    {"name":"19g","url":"http://19g.top/?url="},
    {"name":"52088","url":"http://52088.online/?url="},
    {"name":"冰豆解析","url":"http://api.bingdou.net/?url="},
    {"name":"bofang","url":"http://bofang.online/?url="},
    {"name":"play1","url":"http://play1.online/?url="},
    {"name":"ckplay","url":"http://ckplay.online/?url="},
    {"name": "云渡", "url": "http://yy.6tc.top/jx/?url="},
    {"name": "771解析", "url": "https://vip.qi71.cn/jiexi.php?url="},
    {"name": "狂野解析", "url": "https://api.653520.top/vip/?url="},
	{"name": "神农解析", "url": "http://zx.asys520.top/?url="},
	{"name": "傻猫解析", "url": "http://www.sillycat.xyz/jx/?url="},
     {"name":"鑫梦解析","url":"http://api.52xmw.com/?url="},
	{"name": "三岁解析", "url": "http://sc.sansuib.cn/?url="},
	{"name": "918解析", "url": "https://jx.xj106.cc/jx/?v="},
	{"name": "黑云解析", "url": "http://jx.daheiyun.com/?url="},
    {"name": "叮咚", "url": "http://jiexi.exdnd.com/?url="},
    {"name": "蛋壳", "url": "http://www.58danke.top/jx/xin?url="},
	{"name": "1616解析", "url": "https://www.1616jx.com/jx/api.php?url="},
    {"name": "Beaacc", "url": "https://beaacc.com/api.php?url="},
	{"name": "我爱解析", "url": "http://jx.52a.ink/?url="},
	{"name": "超能解析", "url": "http://jiexi.44cn.net/byg/index.php?url="},
	{"name": "瑞特解析", "url": "http://jx.0421v.pw/index.php?url="},
	{"name": "久久云解析", "url": "http://jx.99yyw.com/api/?url="},
	{"name": "芽芽智能", "url": "http://jx.yayaol.xyz/?url="},
	{"name": "A.xinVIP解析", "url": "http://tv.cuione.cn/?url="},
	{"name": "范特尔", "url": "http://jx.79it.cn/?url="},
	{"name": "OK解析", "url": "http://okjx.cc/?url="},
	{"name": "玩得嗨", "url": "http://tv.wandhi.com/go.html?url="},
	{"name": "船长解析", "url": "http://czjx8.com/?url="},
	{"name": "万能", "url": "http://api.lkdmkj.com/jx/jx00/index.php?url="},
	{"name": "免VIP智能", "url": "https://v.mvipsp.top/?v="},
	{"name": "17K云", "url": "http://17kyun.com/api.php?url="},
	{"name": "高端解析", "url": "http://api.51ckm.com/jx.php?url="},
	{"name": "高端解析1", "url": "http://api.hlglwl.com/jx.php?url="},
	{"name": "vip多线路", "url": "http://api.ledboke.com/vip/?url="},
	{"name": "AT520", "url": "http://at520.cn/jx/?url="},
	{"name": "酷博", "url": "http://jx.x-99.cn/api.php?id="},
	{"name": "金桥解析", "url": "http://jqaaa.com/jx.php?url="},
	{"name": "石头云", "url": "http://jiexi.071811.cc/jx.php?url="},
	{"name": "1717云", "url": "http://www.1717yun.com/jx/ty.php?url="},
	{"name": "牛巴巴", "url": "http://mv.688ing.com/player?url="},
	{"name": "FlvPS", "url": "https://api.flvsp.com/?url="},
	{"name": "660e", "url": "https://660e.com/?url="},
	{"name": "WoCao", "url": "https://www.wocao.xyz/index.php?url="},
	{"name": "思古解析", "url": "https://api.sigujx.com/?url="},
	{"name": "神马解析", "url": "http://baidukan.top/jx.php?url="},
	{"name": "影院解析", "url": "http://52jx.top/?url="},
	{"name": "智能解析", "url": "http://jx.lache.me/cc/?url="},
	{"name": "流氓凡解析", "url": "https://jx.wslmf.com/?url="},
    {"name": "618G", "url": "https://jx.618g.com/?url="}];
    
    
    loadVipFunc();
		
    //置顶置底功能，不需要在前面加//即可
	eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[235-8acdf-yA-V]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(7(){g(6.o(\'i\')){}p{7 i(){8 2=6.y("div");2.A="2";2.setAttribute("3","font-B:4vw !5;width:q !5;C:q !5;line-C:q !5;text-align:r !5;j:url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAABD0lEQVR42u3bMRLCMAwFUbz3v7MpKKACkvhLzsyqcCntO4DHfNx7eAgQIECAAAECBAgQIECAAAECBAgQIOBzxhzzxoBXfJ5AMr+CQDY/TyCdnyaQz88SqMhPEqjJzxGoyk8RyOXPMUeeQC7//SYJJPMrCGTz8wTS+WkC+fwsgYr8JIGa/ByBqvwUgbr8DIHK/ASB2vz1BKrzVxOoz19LoCN/JYGe/HUEuvJXEejLX0OgM38Fgd786wS6868S6M+/RmCH/CsE9sg/T2CX/LME9sk/R2Cn/DME/llSl3/8Or+X1OYfvc6vJfX5x67zfUlP/pHrwx8cAgQIECBAgAABAgQIECBAgAABAgQIECCgfJ7DZZC9LC8fDAAAAABJRU5ErkJggg==\') no-repeat r r !5;j-B:D D !5;j-s:c(d,d,d,0.9) !5;box-shadow:t f f c(0,0,0,0.4);s:#000 !5;position:fixed !5;bottom:15vh !5;right:45vw !5;z-index:99999999999999999 !5;border-radius:100% !5;a:h;");6.k.E(2)};7 F(){8 l;8 theBody=6.getElementsByTagName(\'k\')[0];8 topTopBtn=6.o(\'2\');6.ontouchstart=7(e){g(l){clearTimeout(l)};G=e.H[0].I};6.ontouchmove=7(e){J=e.H[0].I;8 u=J-G;g(u>0){2.3.m="1";2.3.a="K";2.3.L="M(0deg)";2.3.N="t f f c(0,0,0,0.4)";2.O=7(){P.Q(0,0);n.3.a="h";2.R(\'S\',n,T)}}p g(u<0){2.3.m="1";2.3.a="K";2.3.L="M(180deg)";2.3.N="t -f f c(0,0,0,0.4)";2.O=7(){P.Q(0,6.k.scrollHeight);n.3.a="h";2.R(\'S\',n,T)}}p{2.3.a="h"}};6.ontouchend=7(e){l=U(7(){2.3.transitionProperty="m,j-s";2.3.transitionDuration="500ms";2.3.transitionTimingFunction="linear";2.3.m="0";2.3.V="c(v,v,v,1)";U(7(){2.3.a="h";2.3.V="c(d,d,d,0.9)"},500)},3000)}};8 w;w=6.o(\'2\');g(!w){i();F()};8 x=6.y(\'b\');x.A=\'i\';6.k.E(x)}})();',[],58,'||toTopBtn|style||important|document|function|var||display||rgba|250||1px|if|none|toTopLikeKuAn|background|body|toTopTimer|opacity|this|getElementById|else|10vw|center|color|0px|myY|200|isHaveToTopBtn|pans|createElement||id|size|height|3vw|appendChild|isScrollToTop|mystartY|changedTouches|clientY|myendY|block|transform|rotateZ|boxShadow|onclick|window|scrollTo|removeEventListener|click|false|setTimeout|backgroundColor'.split('|'),0,{}));

	//小说双击自动滚动功能，白名单设置
	function openReadScrollMode(){
	    var whiteList=["jx.hao0606.com"];
	    var inWhiteList = false;
	    for(var i=0;i<whiteList.length;i++){
	       if(location.href.indexOf(whiteList[i])!=-1){
	           inWhiteList = true;
	           break;
	        }
       	}
	    if(!inWhiteList){
            eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(5(){6(3.1c(\'L\')){}1b{4 f=3.1a(\'b\');f.19=\'L\';3.7.18(f);13(J,12);5 J(){N();6(9.w.Y(\'X\')>-1){9.t(0,0);i=H;j[h]=M(r,s);h++}}4 g,u,p,s=W;4 h=0;4 i=C;4 j=o V();5 r(){g=3.B.l||3.7.l;9.t(0,++g)};5 F(){i=C;T(4 x=0;x<j.S;x++){R(j[x])};h=0};5 N(){K(2,3.7,5(a,n){i=H;j[h]=M(r,s);h++});4 b=3.P(\'7\')[0];3.m("Q",5(e){u=e.I[0].G});3.m("U",5(e){p=e.I[0].G;4 y=p-u;﻿6(y>=15){9.w="";F()}})};4 k=0;3.m("t",A);5 A(){z=3.B.l||3.7.l;6(z+9.Z.10>3.7.O+11){k=k*1+1;6(k>1&&i){}}}5 K(n,c,d){c.14(\'16\',17);4 n=E(n)<1?1:E(n),8=0,q=0;4 e=5(a){4 b=o v().D();8=(b-q)<1d?8+1:0;q=o v().D();6(8>=n-1){d(a,n);8=0}};c.m(\'1e\',e)}}})();',62,77,'|||document|var|function|if|body|count|window||||||||||||scrollTop|addEventListener||new|pooendY|lastTime|pooScrollWin|poomsec|scroll|poostartY|Date|dataOxp|||topin|dddb|documentElement|false|getTime|parseInt|pooScrollWin_Off|clientY|true|changedTouches|okrex|nclickEvent|xxmRead2019|setInterval|scrollAutoClickNextUrl|scrollHeight|getElementsByTagName|touchstart|clearInterval|length|for|touchmove|Array|40|oxp|indexOf|screen|height|110|400|setTimeout|removeEventListener||dblclick|null|appendChild|id|createElement|else|getElementById|300|click'.split('|'),0,{}))
     	}
	}
	//小说双击自动滑动，多次双击可以加速，上滑停止滑动；
    //如果要关闭此功能，可以在下面一行代码前加上"//"即可
	//openReadScrollMode();
	
	//以下是VIP解析功能
	function loadVipFunc(){
	    var domain = location.href.split("?");
	    var ye = "<span style='display:block;float:left;width:5vw;height:5vw;font-size:2.5vw;color:#fff;line-height:5vw;text-align:center;border-radius:100%;box-shadow:0px 0px 3px #a9a9a9;background:#0078FF;margin:3.78vw 2.1vw;'>★</span>";
	    if (domain[0].match(".iqiyi.com") || domain[0].match(".youku.com") || domain[0].match(".le.com") || domain[0].match(".letv.com") || domain[0].match("v.qq.com") || domain[0].match(".tudou.com") || domain[0].match(".mgtv.com") || domain[0].match(".sohu.com")) {
    		var myBtn = document.createElement("div");
	    	myBtn.id = "myBtn2019";
    		myBtn.innerHTML = "➿‍";
    		myBtn.setAttribute("style", "width:12vw;height:12vw;position:fixed;bottom:25vh;right:10vw;z-index:100000;border-radius:100%;text-align:center;line-height:12vw;box-shadow:0px 1px 3px rgba(0,0,0,0.3);font-size:4.5vw;background:#fafafa;");
    		myBtn.onclick = function() {
			    loadVip(location.href);
		    };
	    	document.body.appendChild(myBtn);
    		var myul = document.createElement("ul");
		    myul.id = "myul2019";
	    	myul.setAttribute("style", "display:none;background:#fff;box-shadow:0px 1px 10px rgba(0,0,0,0.3);margin:0;padding:0 4.2vw;position:fixed;bottom:35vh;right:12vw;z-index:99999;height:60vh;overflow:scroll;border-radius:1.26vw;");
	    	for (var i = 0; i < apis.length; i++) {
	    		var myli = document.createElement("li");
	    		var that = this;
    			myli.setAttribute("style", "margin:0;padding:0;display:block;list-style:none;font-size:4.2vw;width:33.6vw;text-align:left;line-height:12.6vw;letter-spacing:0;border-bottom:1px solid #f0f0f0;position:relative;overflow:hidden;text-overflow:hidden;white-space:nowrap;"); 
    			(function(num) {
			    	myli.onclick = function() {
			    		window.open(apis[num].url + tryGetRealUrl(location.href), '_blank');
		    		};
		    		myli.ontouchstart = function() {
				    	this.style.cssText += "color:yellow;background:#373737;border-radius:1.26vw;";
			    	};
			    	myli.ontouchend = function() {
				    	this.style.cssText += "color:black;background:transparent;border-radius:0;";
			    	};
		    	})(i);
		    	myli.innerHTML = apis[i].name;
		    	myul.appendChild(myli)
	    	}
	    	document.body.appendChild(myul);
    		//让视频区域显示文字，直接解析
		    showVipTitle(location.href);
	    }
	}
	function showVipTitle(url) {
		var titleStr = "视频连接成功！点击选择解析接口";
		if (url.indexOf("iqiyi.com") != -1) {
			var iframe = document.getElementById('_if');
			if (iframe) {
				window.location.reload();
				return;
			};
			var i = document.getElementsByClassName('m-video-player-wrap')[0];
			if (typeof(i) != 'undefined') {
				i.style.height = '220px';
				i.style.color = '#fff';
				i.style.lineHeight = '15';
				i.style.position = 'static';
				i.style.paddingTop = '0%';
				i.style.background = '#000000';
				i.style.textAlign = 'center';
				i.innerHTML = '<div>' + titleStr + '</div>';
				i.addEventListener('tap',
				function() {
					loadVip(window.location.href);
				})
			};
		} else if (url.indexOf("v.qq.com") != -1) {
			var i = document.getElementsByClassName('site_player')[0];
			if (typeof(i) != 'undefined') {
				i.style.height = '210px';
				i.style.background = '#000000';
				i.style.textAlign = 'center';
				i.style.color = '#fff';
				i.style.lineHeight = '14';
				i.innerHTML = '<div>' + titleStr + '</div>';
				i.addEventListener('touchstart',
				function(e) {
					loadVip(window.location.href);
				})
			};
		} else if (url.indexOf("m.le.com") != -1) {
			var i = document.getElementsByClassName('playB')[0];
			if (typeof(i) != 'undefined') {
				i.style.background = '#000000';
				i.innerHTML = '<div>' + titleStr + '</div>';
				i.style.width = '100%';
				i.style.textAlign = 'center';
				i.style.lineHeight = '14';
				i.style.color = '#fff';
				i.addEventListener('touchstart',
				function(e) {
					loadVip(window.location.href);
				});
			}
		} else if (url.indexOf("youku.com") != -1) {
			var i = document.getElementById('playerBox');
			if (typeof(i) != 'undefined') {
				i.style.background = '#000000';
				i.style.color = '#fff';
				i.style.textAlign = 'center';
				i.style.lineHeight = '15';
				i.innerHTML = '<div>' + titleStr + '</div>';
				i.addEventListener('touchstart',
				function(e) {
					loadVip(window.location.href);
				});
			}
		} else if (url.indexOf("mgtv.com") != -1) {
			var i = document.getElementsByClassName('video-area')[0];
			if (typeof(i) != 'undefined') {
				i.style.background = '#000000';
				i.style.color = '#fff';
				i.style.textAlign = 'center';
				i.style.lineHeight = '16';
				i.innerHTML = '<div>' + titleStr + '</div>';
				i.addEventListener('click',
				function(e) {
					loadVip(window.location.href);
				});
			}
		} else if (url.indexOf("sohu.com") != -1) {
			var i = document.getElementsByClassName('x-player')[0];
			var x = document.getElementById('top-poster');
			if (typeof(i) != 'undefined') {
				i.style.background = '#000000';
				i.style.color = '#fff';
				i.style.textAlign = 'center';
				i.style.lineHeight = '13';
				i.innerHTML = '<div>' + titleStr + '</div>';
				i.addEventListener('touchstart',
				function(e) {
					loadVip(window.location.href);
				})
			} else if (typeof(x) != 'undefined') {
				x.style.background = '#000000';
				x.style.color = '#fff';
				x.style.height = '210px';
				x.style.textAlign = 'center';
				x.style.lineHeight = '13';
				i.innerHTML = '<div>' + titleStr + '</div>';
				x.addEventListener('click',
				function() {
					loadVip(window.location.href);
				});
			}
		} else if (url.indexOf("baofeng.com") != -1) {
			var myVideo = document.getElementsByTagName('video')[0];
			myVideo.pause();
			var i = document.getElementById('videoplayer');
			if (typeof(i) != 'undefined') {
				i.style.background = '#000000';
				i.style.textAlign = 'center';
				i.style.color = '#fff';
				i.style.lineHeight = '17';
				i.innerHTML = '<div>' + titleStr + '</div>';
				i.addEventListener('touchstart',
				function(e) {
					loadVip(window.location.href);
				});
			}
		}
	}
	function tryGetRealUrl(url) {
		var realUrl = url;
		try {
			realUrl = getRealUrl(url);
		} catch(err) {
			console.log(err);
		}
		return realUrl;
	}
	function getYoukuRealUrl(url) {
		var li = document.getElementsByClassName('hot-row-bottom')[0].children[0];
		var data = li.getAttribute('data-param');
		var s = data.split('svid=');
		if (s.length > 1) {
			var svid = s[1].split('&')[0];
			return 'https://v.youku.com/v_show/id_' + svid + '.html';
		}
		return url;
	}
	function getRealUrl(url) {
		var dataurl2 = url;
		var txurlc = dataurl2.split(":");
		var txurl = txurlc[1].slice(0, 12);
		var ykurl = txurlc[1].slice(0, 13);
		var ykdata = txurlc[1].slice(13);
		var funurl = txurlc[1].slice(0, 11);
		if (ykurl == '//m.youku.com') {
			return getYoukuRealUrl(url);
		}
		if (ykurl == '//m.youku.com') {
			var txurlc = dataurl2.split(":");
			var ykurl = txurlc[1].slice(0, 13);
			var ykdata = txurlc[1].slice(13);
			dataurl2 = 'http://www.youku.com' + ykdata;
		} else if (ykurl == '//m.iqiyi.com') {
			var txurlc = dataurl2.split(":");
			var ykurl = txurlc[1].slice(0, 13);
			var ykdata = txurlc[1].slice(13);
			dataurl2 = 'https://www.iqiyi.com' + ykdata;
		} else if (txurl == '//m.v.qq.com') {
			var vid = getParam(dataurl2, "vid");
			var cid = getParam(dataurl2, "cid");
			var txdata2 = dataurl2.split("?");
			var str = "play.html";
			if (txdata2[0].slice(txdata2[0].length - str.length) == str) {
				if (cid.length > 1) {
					dataurl2 = "https://v.qq.com/x/cover/" + cid + ".html";
					return dataurl2;
				} else if (vid.length == 11) {
					return "https://v.qq.com/x/page/" + vid + ".html";
				}
			}
			cid = txdata2[0].slice( - 20, -5);
			if (vid.length == 11) {
				dataurl2 = 'https://v.qq.com/x/cover/' + cid + '/' + vid + '.html';
			} else {
				dataurl2 = 'https://v.qq.com/x/cover/' + cid + '.html';
			}
		} else if (ykurl == '//m.le.com/vp') {
			var leurlc = dataurl2.split("_");
			var leurl = leurlc[1];
			dataurl2 = 'http://www.le.com/ptv/vplay/' + leurl;
		}
		return dataurl2;
	}
	function getParam(dataurl2, name) {
		return dataurl2.match(new RegExp('[?&]' + name + '=([^?&]+)', 'i')) ? decodeURIComponent(RegExp.$1) : '';
	}
	function loadVip(url) {
		var myBtn = document.getElementById("myBtn2019");
		var myul = document.getElementById("myul2019");
		if (myul.style.display == "none") {
			myul.style.display = "block";
			myBtn.innerHTML = "➕";
			myBtn.style.transform = "rotateZ(45deg)";
		} else {
			myul.style.display = "none";
			myBtn.innerHTML = "➿";
			myBtn.style.transform = "rotateZ(0deg)";
		}
	}
})();