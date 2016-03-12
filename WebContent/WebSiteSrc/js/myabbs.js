/********************************
 *  作者：kfzx-qiusd 
 *  说明：有空在研究深入JQ...
 *
 *********************************/
/*
 *  ========== 全局变量定义开始 ========== 
 * 
 */
var opacityvalue = 1; //这个透明度在两个提示框都用到，设置为全局变量

var modalshow = false; //是否显示确认提交的模态框

var joinLeague = "yes"; //是否参加联赛，数据库字段是字符型，yes=参加 no=不参加


// 身体的SLIDER
var bodeabbs1 = $('#bodeabbs1').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');
var bodeabbs2 = $('#bodeabbs2').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');
var bodeabbs3 = $('#bodeabbs3').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');
var bodeabbs4 = $('#bodeabbs4').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');


// 技术的SLIDER
var tech_abbs1 = $('#tech_abbs1').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');
var tech_abbs2 = $('#tech_abbs2').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');
var tech_abbs3 = $('#tech_abbs3').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');
var tech_abbs4 = $('#tech_abbs4').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');


// 特殊能力的SLIDER
var spec_abbs1 = $('#spec_abbs1').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');
var spec_abbs2 = $('#spec_abbs2').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');

// 进攻能力的SLIDER
var attack_abbs1 = $('#attack_abbs1').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');
var attack_abbs2 = $('#attack_abbs2').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');
var attack_abbs3 = $('#attack_abbs3').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');

// 防守能力的SLIDER
var defen_abbs1 = $('#defen_abbs1').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');
var defen_abbs2 = $('#defen_abbs2').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');
var defen_abbs3 = $('#defen_abbs3').slider()
	.on('slideStop', GetandCalPlayerAbilities)
	.data('slider');



// 获取大项的progressBar
var body_progress = document.getElementById("body_abi_pg");
var tech_progress = document.getElementById("tech_abi_pg");
var spec_progress = document.getElementById("spec_abi_pg");
var attack_progress = document.getElementById("attack_abi_pg");
var defence_progress = document.getElementById("defence_abi_pg");

//提交按钮事件
var joinBtn = document.getElementById("joinBtn");
joinBtn.addEventListener('click', submitABI, false);
var submitToServer = document.getElementById('submitToServer');
submitToServer.addEventListener('click', submitTS, false);

//确认框内按回车的处理

$('#submitModal').on('shown.bs.modal', function() {
	modalshow = true;
	document.getElementById('verifycodeinput').focus();
})

document.onkeydown = function(event) {
	if (event.keyCode == 13 && modalshow) {
		submitTS();
	}
}

// 参加联赛按钮设置，这里用了icheck插件
$('#icheckbtn1').iCheck({
	checkboxClass: 'icheckbox_square-blue',
	radioClass: 'iradio_square-blue',
	increaseArea: '100%', // optional
	labelHover: true,
	cursor: true
});
$('#icheckbtn2').iCheck({
	checkboxClass: 'icheckbox_square-blue',
	radioClass: 'iradio_square-blue',
	increaseArea: '100%', // optional
	labelHover: true,
	cursor: true
});
$('#joinlabel1').on('click', function() {
	$('#icheckbtn1').iCheck('check');
	joinLeague = "yes";

});
$('#joinlabel2').on('click', function() {
	$('#icheckbtn2').iCheck('check');
	joinLeague = "no";
});

var joinlabel = $('.joinlabel');
console.log(joinlabel);



/*
 *  ========== 全局变量定义结束 ========== 
 * 
 */


//球员能力对象,记录所有的能力   
var ability = {
	//大项:
	totalabi: 50, //总实力
	body_abi: 50, //身体能力
	tech_abi: 50, //技术能力
	spec_abi: 50, //特殊能力
	attack_abi: 50, //进攻能力
	defence_abi: 50, //防守能力
	//细项:
	speed: bodeabbs1.getValue(), //速度
	strength: bodeabbs2.getValue(), //强壮
	stamina: bodeabbs3.getValue(), //体能
	health: bodeabbs4.getValue(), //受伤抗性
	passing: tech_abbs1.getValue(), //传球
	touching: tech_abbs2.getValue(), //停球
	dribbling: tech_abbs3.getValue(), //盘带
	heading: tech_abbs4.getValue(), //头球
	minding: spec_abbs1.getValue(), //意志力
	rating: spec_abbs2.getValue(), //出勤率
	shoot: attack_abbs1.getValue(), //射门
	offtheball: attack_abbs2.getValue(), //跑位
	creativity: attack_abbs3.getValue(), //创造力
	taking: defen_abbs1.getValue(), //抢断
	marking: defen_abbs2.getValue(), //盯人
	positioning: defen_abbs3.getValue() //防守站位

}



//  1、获取球员每个小项的能力
//	2、计算大项能力和总实力
//  每次拉动SLIDER，所有控件都会联动，目前暂不影响性能，后续分开控制。
function GetandCalPlayerAbilities() {
	//*****获取小项的能力*****
	ability.speed = bodeabbs1.getValue(); //速度
	ability.strength = bodeabbs2.getValue(); //强壮
	ability.stamina = bodeabbs3.getValue(); //体能
	ability.health = bodeabbs4.getValue(); //受伤抗性
	ability.passing = tech_abbs1.getValue(); //传球
	ability.touching = tech_abbs2.getValue(); //停球
	ability.dribbling = tech_abbs3.getValue(); //盘带
	ability.heading = tech_abbs4.getValue(); //头球
	ability.minding = spec_abbs1.getValue(); //意志力
	ability.rating = spec_abbs2.getValue(); //出勤率
	ability.shoot = attack_abbs1.getValue(); //射门
	ability.offtheball = attack_abbs2.getValue(); //跑位
	ability.creativity = attack_abbs3.getValue(); //创造力
	ability.taking = defen_abbs1.getValue(); //抢断
	ability.marking = defen_abbs2.getValue(); //盯人
	ability.positioning = defen_abbs3.getValue(); //防守站位

	//*****计算大项能力*****
	//身体属性，共四项
	var speed_w = 0.35; //速度权重值
	var strength_w = 0.2; //强壮权重值
	var stamina_w = 0.35; //体能权重值
	var health_w = 0.15; //受伤抗性	
	ability.body_abi = ability.speed * speed_w + ability.strength * strength_w + ability.stamina * stamina_w + ability.health * health_w;
	//	ability.body_abi.toFixed(2);
	ability.body_abi = parseInt(ability.body_abi);

	//技术属性，共四项
	var passing_w = 0.3; //传球权重值
	var touching_w = 0.3; //停球权重值
	var dribbling_w = 0.3; //盘带权重值
	var heading_w = 0.1; //头球权重值
	ability.tech_abi = ability.passing * passing_w + ability.touching * touching_w + ability.dribbling * dribbling_w + ability.heading * heading_w;
	//	ability.tech_abi.toFixed(2);
	ability.tech_abi = parseInt(ability.tech_abi);

	//特殊属性，共两项
	var minding_w = 0.4; //意志力权重值
	var rating_w = 0.6; //出勤率权重值
	ability.spec_abi = ability.minding * minding_w + ability.rating * rating_w;
	//	ability.spec_abi.toFixed(2);
	ability.spec_abi = parseInt(ability.spec_abi);

	//进攻属性，共三项
	var shoot_w = 0.3; //射门
	var offtheball_w = 0.45; //跑位
	var creativity_w = 0.25; //创造力
	ability.attack_abi = ability.shoot * shoot_w + ability.offtheball * offtheball_w + ability.creativity * creativity_w;
	//	ability.attack_abi.toFixed(2);
	ability.attack_abi = parseInt(ability.attack_abi);

	//防守属性，共三项
	var taking_w = 0.35; //抢断
	var marking_w = 0.25; //盯人
	var positioning_w = 0.4; //防守站位
	ability.defence_abi = ability.taking * taking_w + ability.marking * marking_w + ability.positioning * positioning_w; //防守能力
	ability.defence_abi = parseInt(ability.defence_abi);

	//总能力，共五项
	var body_w = 0.2; //身体
	var tech_w = 0.3; //技术
	var spec_w = 0.1; //特殊
	var attach_w = 0.2; //进攻
	var defence_w = 0.2; //防守
	ability.totalabi = ability.body_abi * body_w + ability.tech_abi * tech_w + ability.spec_abi * spec_w + ability.attack_abi * attach_w + ability.defence_abi * defence_w;
	ability.totalabi = parseInt(ability.totalabi);
	$('#abilityId').html(ability.totalabi);

	/*
	 * 
	 * 设置大项的属性条数值
	 * 
	 */
	body_progress.setAttribute('style', 'width: ' + ability.body_abi + '%');
	tech_progress.setAttribute('style', 'width: ' + ability.tech_abi + '%');
	spec_progress.setAttribute('style', 'width: ' + ability.spec_abi + '%');
	attack_progress.setAttribute('style', 'width: ' + ability.attack_abi + '%');
	defence_progress.setAttribute('style', 'width: ' + ability.defence_abi + '%');

	/*
	 * 
	 * 设置大项的属性条颜色
	 * 
	 */
	setProgessBarColor("body_abi_pg", ability.body_abi);
	setProgessBarColor("tech_abi_pg", ability.tech_abi);
	setProgessBarColor("spec_abi_pg", ability.spec_abi);
	setProgessBarColor("attack_abi_pg", ability.attack_abi);
	setProgessBarColor("defence_abi_pg", ability.defence_abi);

	$(function() {
		$('#highchartDiv').highcharts({
			chart: {
				polar: true,
				type: 'line'
			},
			title: {
				floating: true,
				text: ' ',
				x: -80
			},
			pane: {
				size: '80%'
			},
			xAxis: {
				categories: ['技术', '防守', '特殊', '身体', '进攻'],
				tickmarkPlacement: 'on',
				lineWidth: 0
			},
			yAxis: {
				tickInterval: 50,
				gridLineInterpolation: 'polygon',
				lineWidth: 0,
				max: 100,
				min: 0
			},
			tooltip: {
				shared: true,
				pointFormat: '<span style="color:{series.color}">{point.y:,.0f}'
			},
			legend: {
				align: 'right',
				verticalAlign: 'top',
				y: 120,
				x: 90,
				layout: 'vertical'
			},
			series: [{
				data: [ability.tech_abi, ability.defence_abi, ability.tech_abi, ability.body_abi, ability.attack_abi], //对应='技术', '防守', '特殊', '身体', '进攻'
				pointPlacement: 'on'
			}]

		});
	});

	//	console.clear();	
	//	for (var key in ability) {
	//		if (ability[key] != 50) {
	//			console.log(key + "=" + ability[key]); //speed = xx
	//		}
	//	}

};

/*
 * 
 * 设置大项的属性条颜色
 * 
 */
function setProgessBarColor(abilityName, ability) {
	var level5 = '#d81919' //传奇
	var level4 = '#9900ff' //史诗
	var level3 = '#41aff9' //精良
	var level2 = '#5cb85c' //优秀
	var level1 = '#f0ad4e' //普通

	var progressBar = $('#' + abilityName);
	if (ability < 40) {
		progressBar.css({
			'background': level1
		});
	} else if (ability < 65) {
		progressBar.css({
			'background': level2
		});
	} else if (ability < 80) {
		progressBar.css({
			'background': level3
		});
	} else if (ability < 95) {
		progressBar.css({
			'background': level4
		});
	} else {
		progressBar.css({
			'background': level5
		});
	}
}



//点击页面的提交按钮
function submitABI() {
	// 模态框出现，将slider置为不可用
	setSliderStatus(false);

	// 模态框赋值
	var tableRows = document.getElementById('comformTable').tBodies[0].rows;
	tableRows[5].cells[1].innerHTML = ability.totalabi;
	tableRows[0].cells[1].innerHTML = ability.body_abi;
	tableRows[1].cells[1].innerHTML = ability.tech_abi;
	tableRows[2].cells[1].innerHTML = ability.spec_abi;
	tableRows[3].cells[1].innerHTML = ability.attack_abi;
	tableRows[4].cells[1].innerHTML = ability.defence_abi;

	//计算4位随机数
	var RADDOMCODE = parseInt(9999 - Math.random() * 10000);
	if (RADDOMCODE < 1000) {
		RADDOMCODE += 1000;
	}
	document.getElementById('verifycode').innerHTML = RADDOMCODE;
	document.getElementById("verifycodeinput").value = "";
}

//模态框消失后，将slider置为enable
$('#submitModal').on('hidden.bs.modal', function() {
	setSliderStatus(true);
	modalshow = false;
})



//点击确认框的确认按钮
function submitTS() {
	var inputcode = document.getElementById('verifycodeinput').value;
	var verifycode = document.getElementById('verifycode').innerHTML;
	if (inputcode != verifycode) {
		$("#errordesc").html("验证码输入有误!");
		//清空输入
		document.getElementById("verifycodeinput").value = "";
		opacityvalue = 1;
		$("#errordesc").css({
			'opacity': opacityvalue
		});
		setTimeout(cleanTips, 2000);

	} else {
		LoginPost();
		//模态框消失后，将slider置为enable
		setSliderStatus(true);
		$('#submitModal').modal('hide');
		//清空输入
		document.getElementById("verifycodeinput").value = "";

	}

}


// ajax的post方法:
// 确认提交方法，调用A2接口
function LoginPost() {
	$.ajax({
		//提交数据的类型 POST GET
		type: "POST",
		//提交的网址
		url: "http://localhost:8080/FootBallWebSite/A2UpdatePlayer",
		//提交的数据
		data: {
			joinleague: joinLeague,
			playername: document.getElementById('usernameId').innerHTML,
			totalabi: ability.totalabi,
			body_abi: ability.body_abi,
			tech_abi: ability.tech_abi,
			spec_abi: ability.spec_abi,
			attack_abi: ability.attack_abi,
			defence_abi: ability.defence_abi,
			speed: ability.speed,
			strength: ability.strength,
			stamina: ability.stamina,
			health: ability.health,
			passing: ability.passing,
			touching: ability.touching,
			dribbling: ability.dribbling,
			heading: ability.heading,
			minding: ability.minding,
			rating: ability.rating,
			shoot: ability.shoot,
			offtheball: ability.offtheball,
			creativity: ability.creativity,
			taking: ability.taking,
			marking: ability.marking,
			positioning: ability.positioning

		},
		//返回数据的格式
		datatype: "html", //"xml", "html", "script", "json", "jsonp", "text".
		//在请求之前调用的函数
		beforeSend: function() {
			// $("#msg").html("logining");
		},
		//成功返回之后调用的函数            
		success: function(data) {
			try {
				setTimeout(function() {
					opacityvalue = 1;
					$("#submitResultDesc").css({
						'opacity': 1
					});
					$("#submitResultDesc").html("恭喜！您的数据已登记!");
					$("#submitResultDesc").css({
						'color': 'green'
					});

				}, 2000);
				
				setTimeout(cleanTips, 6000);
			} catch (e) {
				$("#submitResultDesc").html("发生错误，您的数据未登记，请联系【开发团队】->右上角!");
				$("#submitResultDesc").css({
					'color': 'red',
					'opacity': 1
				});
			}
		},
		//调用执行后调用的函数
		complete: function(XMLHttpRequest, textStatus) {
			//alert(XMLHttpRequest.responseText); //XMLHttpRequest.responseText是返回的信息，用这个来放JSON数据
			try {
				$("#submitResultDesc").html("提交成功! 后台处理中...");
				$("#submitResultDesc").css({
					'color': 'green'
				});
				opacityvalue = 1;
				$("#submitResultDesc").css({
					'opacity': 1
				});
				setTimeout(cleanTips, 1000);
			} catch (e) {
				$("#submitResultDesc").html("提交失败！请联系【开发团队】->右上角!");
				$("#submitResultDesc").css({
					'color': 'red',
					'opacity': 1
				});
			}
			// HideLoading();
		},
		//调用出错执行的函数
		error: function() {
			//请求出错处理
		}
	});
}

// 缓慢隐藏文字-透明度
function cleanTips() {
	opacityvalue -= 0.1;
	$('#errordesc').css({
		'opacity': opacityvalue
	});
	$('#submitResultDesc').css({
		'opacity': opacityvalue
	});
	if (opacityvalue > 0) {
		setTimeout(cleanTips, 50);
	}
	if (opacityvalue <= 0) {
		//清空
		$("#submitResultDesc").html("");
		$('#errordesc').html("");
	}
}

function setSliderStatus(status) {
	if (status == true) {
		bodeabbs1.enable();
		bodeabbs2.enable();
		bodeabbs3.enable();
		bodeabbs4.enable();
		tech_abbs1.enable();
		tech_abbs2.enable();
		tech_abbs3.enable();
		tech_abbs4.enable();
		spec_abbs1.enable();
		spec_abbs2.enable();
		attack_abbs1.enable();
		attack_abbs2.enable();
		attack_abbs3.enable();
		defen_abbs1.enable();
		defen_abbs2.enable();
		defen_abbs3.enable();
	} else {
		bodeabbs1.disable();
		bodeabbs2.disable();
		bodeabbs3.disable();
		bodeabbs4.disable();
		tech_abbs1.disable();
		tech_abbs2.disable();
		tech_abbs3.disable();
		tech_abbs4.disable();
		spec_abbs1.disable();
		spec_abbs2.disable();
		attack_abbs1.disable();
		attack_abbs2.disable();
		attack_abbs3.disable();
		defen_abbs1.disable();
		defen_abbs2.disable();
		defen_abbs3.disable();
	}

}


//改变slider-selection的颜色
//$('#tech_abbs1 .slider-selection').css('background', 'rgb(120, 142, 207)');
//$('.slider-selection').css('background', 'rgb(120, 142, 207)');

//改变背景颜色
//$('#'+abilityName).css({'background':'#9900ff'});

/* 
 ** 【  slider方法 】**
 * 
 * 	var g1 = $('#G').setValue(50); --设置数值
 *	console.log(g1.getValue()); --获取数值
 * 
 * 
 */