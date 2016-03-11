// 绑定列表点击事件，点击后会传递event给绑定的时间
var navList = document.getElementById('nav-pills');
if (navList) {
    navList.addEventListener('click', navSelect, false);
};
function navSelect(event) {
    var selectedBtn = event.target;             // click事件对象
    var pageUrl = "../pages/"+selectedBtn.getAttribute('urltag');
    console.log(selectedBtn.innerHTML+": 加载:"+pageUrl);
    iframeRefresh(pageUrl);
}

function iframeRefresh(pageUrl) {
	var iframe = document.getElementById('middleFrameID');	
	iframe.setAttribute('src', pageUrl);
	document.iframe.location.reload()
}



