/********************************
 * 欢迎界面
 *
 *********************************/
countDownTime();
// kfzx-wengzj
function countDownTime() {
	var nowtime = new Date;
	var endtime = new Date("2016/05/11,18:00:00");
	var lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);
	var day = parseInt(lefttime / (24 * 60 * 60));
	var hour = parseInt(lefttime / (60 * 60) % 24);
	var minute = parseInt(lefttime / 60 % 60);
	var second = parseInt(lefttime % 60);
	hour = checkTime(hour);
	minute = checkTime(minute);
	second = checkTime(second);
	$('#day').html(day);
	$('#hour').html(hour);
	$('#minute').html(minute);
	$('#second').html(second);

	function checkTime(time) {
		if (time < 10) {
			time = '0' + time;
		}
		return time;
	}
}
setInterval(countDownTime, 1000);