/********************************
 *  作者：kfzx-qiusd 
 *  说明：
 * 		1、点击能力pk页面后调用A3接口获取一次全量数据，赋值给本地变量
 * 		2、赋值后更新球员1和球员2的列表，生成所有可选球员
 * 		3、点击对比按钮后查询A4接口获取球员1和2的数据，赋值给本地变量
 * 		4、本地变量生成各图表
 *	
 * 
 * 
 *********************************/

/*
 *  ========== 变量定义开始 ==========  
 */


var playerArray = new Array();	//球员属性数组 每个值存放一个球员属性对象

//echart属性
var totalAbilityChart = echarts.init(document.getElementById('highchart_abbsdiv'));
var bodyChart = echarts.init(document.getElementById('body_abbsdiv'));
var techChart = echarts.init(document.getElementById('tech_abbsdiv'));
var specChart = echarts.init(document.getElementById('spec_abbsdiv'));
var attackChart = echarts.init(document.getElementById('attack_abbsdiv'));
var defenceChart = echarts.init(document.getElementById('defen_abbsdiv'));

//echart的参数
var barWidth = 10; // 柱条宽度
var player1Color = 'rgb(12,142,207)'; //'#4cb749';
var player2Color = 'rgb(223,77,0)'; //'#FC3E10';
var gridleft = '2%';
var gridright = '10%';
var gridbottom = '1%';
var textcolor = 'rgb(51,122,183)';

var player1select = document.getElementById("player1list");
player1select.addEventListener('click', selectplayer1, false);
var player2select = document.getElementById("player2list");
player2select.addEventListener('click', selectplayer2, false);
var comparebutton = $('#compareBTN').click(submitCompare);
//comparebutton.addEventListener('click',submitCompare, false);

//实现点击部门list后更新部门button的文字
function selectplayer1(event) {
	var selectedplayer = event.target; // 获取点击目标
	document.getElementById("selectedplayer1").innerHTML = selectedplayer.innerHTML;
	document.getElementById("selectedplayer1").setAttribute('tag', selectedplayer.innerHTML);
}

function selectplayer2(event) {
	var selectedplayer = event.target; // 获取点击目标
	document.getElementById("selectedplayer2").innerHTML = selectedplayer.innerHTML;
	document.getElementById("selectedplayer2").setAttribute('tag', selectedplayer.innerHTML);
}

//提交对比
function submitCompare() {
	console.clear();
	var name1 = $('#selectedplayer1').html();
	var name2 = $('#selectedplayer2').html();
	var currentsubmittime = new Date;
	var lastsubmittime = localStorage.lastsubmittime;
	console.log(lastsubmittime);
	var interaltime;
	if (lastsubmittime == undefined) {
		interaltime = 99;
	} else {
		var lefttime = parseInt((currentsubmittime.getTime() - lastsubmittime) / 1000);
		interaltime = parseInt(lefttime % 60);
	}
	console.log(name1 + " vs " + name2);
	//	descmodal
	if (name1.indexOf("选择球员") > 0 || name2.indexOf("选择球员") > 0) { // 未选择球员
		$('#descmodal').modal('show');
	} else if (interaltime < 10) { // 提交建个小于10秒
		$('#myModalLabel').html('为降低服务器压力，请不要在10秒内重复提交，谢谢！');
		$('#descmodal').modal('show');
	} else {
		var submittime = new Date;
		localStorage.setItem('lastsubmittime', submittime.getTime());
		GetPlayerData(name1, name1);
	}

}

/*
 *  ========== 变量定义结束 ==========  
 */

// 总体实力图
var totalAbilityChart_option = {
	title: {
		//      text: '基础雷达图'
	},
	tooltip: {},
	legend: {
		//		data: ['zidane', 'kfzx'],
	},
	radar: {
		// shape: 'circle',
		indicator: [{
			name: '技术',
			max: 110
		}, {
			name: '进攻',
			max: 110
		}, {
			name: '特殊',
			max: 110
		}, {
			name: '体质',
			max: 110
		}, {
			name: '防守',
			max: 110
		}],
		center: ['50%', '50%'],
		radius: 90,
		name: {
			// formatter:'【{value}】', //文字格式
			textStyle: {
				color: '#000000', //文字颜色
				fontSize: 14
			}

		},

	},
	series: [{
		name: 'zidane vs kfzx',
		type: 'radar',
		// areaStyle: {normal: {}},
		data: [{
			value: [87, 77, 99, 65, 60],
			name: 'zidane',
			itemStyle: {
				normal: {
					color: player1Color // 线条颜色
				}
			},
			areaStyle: {
				normal: {
					opacity: 0.3,
					color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
						color: 'rgb(12,142,207)', //区域颜色
						offset: 0
					}, {
						color: 'rgb(12,142,207)',
						offset: 1
					}])
				}
			}
		}, {
			value: [97, 86, 85, 98, 66],
			name: 'kfzx',
			itemStyle: {
				normal: {
					color: player2Color // 线条颜色
				}

			},
			areaStyle: {
				normal: {
					opacity: 0.3,
					color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
						color: 'rgb(12,142,207)', //区域颜色
						offset: 0
					}, {
						color: 'rgb(12,142,207)',
						offset: 1
					}])
				}
			}
		}]
	}]
};

var bodyChart_option = {
	title: {
		text: '',
		subtext: ''
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'shadow'
		}
	},
	legend: {
		//		data: ['zidane', 'kfzx'],
		//		itemHeight: 10

	},
	grid: {
		left: gridleft,
		right: gridright,
		bottom: gridbottom,
		containLabel: true
	},
	xAxis: {
		max: 100,
		type: 'value',
		boundaryGap: [0, 1]
	},
	yAxis: {
		type: 'category',
		data: ['健康', '体能', '强壮', '速度']

	},
	series: [{
		name: 'zidane',
		type: 'bar',
		data: [90, 88, 77, 79],
		barWidth: barWidth,
		itemStyle: {
			normal: {
				color: player1Color
			}
		}
	}, {
		name: 'kfzx',
		type: 'bar',
		data: [77, 81, 37, 95],
		barWidth: barWidth,
		itemStyle: {
			normal: {
				color: player2Color
			}

		}
	}]
};

var techChart_option = {
	title: {
		text: '',
		subtext: ''
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'shadow'
		}
	},
	legend: {
		//		data: ['zidane', 'kfzx'],
		//		itemHeight: 10

	},
	grid: {
		left: gridleft,
		right: gridright,
		bottom: gridbottom,
		containLabel: true
	},
	xAxis: {
		max: 100,
		type: 'value',
		boundaryGap: [0, 1]
	},
	yAxis: {
		type: 'category',
		data: ['头球', '盘带', '停球', '传球']

	},
	series: [{
		name: 'zidane',
		type: 'bar',
		data: [90, 88, 77, 79],
		barWidth: barWidth,
		itemStyle: {
			normal: {
				color: player1Color
			}
		}
	}, {
		name: 'kfzx',
		type: 'bar',
		data: [77, 81, 37, 95],
		barWidth: barWidth,
		itemStyle: {
			normal: {
				color: player2Color
			}

		}
	}]
};

var specChart_option = {
	title: {
		text: '',
		subtext: ''
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'shadow'
		}
	},
	legend: {
		//		data: ['zidane', 'kfzx'],
		//		itemHeight: 10

	},
	grid: {
		left: gridleft,
		right: gridright,
		bottom: gridbottom,
		containLabel: true
	},
	xAxis: {
		max: 100,
		type: 'value',
		boundaryGap: [0, 1]
	},
	yAxis: {
		type: 'category',
		data: ['团队意识', '出勤率', '意志力']

	},
	series: [{
		name: 'zidane',
		type: 'bar',
		data: [90, 88, 77],
		barWidth: barWidth,
		itemStyle: {
			normal: {
				color: player1Color
			}
		}
	}, {
		name: 'kfzx',
		type: 'bar',
		data: [77, 81, 37],
		barWidth: barWidth,
		itemStyle: {
			normal: {
				color: player2Color
			}

		}
	}]
};

var attackChart_option = {
	title: {
		text: '',
		subtext: ''
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'shadow'
		}
	},
	legend: {
		//		data: ['zidane', 'kfzx'],
		//		itemHeight: 10

	},
	grid: {
		left: gridleft,
		right: gridright,
		bottom: gridbottom,
		containLabel: true
	},
	xAxis: {
		max: 100,
		type: 'value',
		boundaryGap: [0, 1]
	},
	yAxis: {
		type: 'category',
		data: ['创造力', '跑位', '射门']

	},
	series: [{
		name: 'zidane',
		type: 'bar',
		data: [90, 88, 77],
		barWidth: barWidth,
		itemStyle: {
			normal: {
				color: player1Color
			}
		}
	}, {
		name: 'kfzx',
		type: 'bar',
		data: [77, 81, 37],
		barWidth: barWidth,
		itemStyle: {
			normal: {
				color: player2Color
			}

		}
	}]
};

var defenceChart_option = {
	title: {
		text: '',
		subtext: ''
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'shadow'
		}
	},
	legend: {
		//		data: ['zidane', 'kfzx'],
		//		itemHeight: 10

	},
	grid: {
		left: gridleft,
		right: gridright,
		bottom: gridbottom,
		containLabel: true
	},
	xAxis: {
		max: 100,
		type: 'value',
		boundaryGap: [0, 1]
	},
	yAxis: {
		type: 'category',
		data: ['防守站位', '盯人', '抢断']

	},
	series: [{
		name: 'zidane',
		type: 'bar',
		data: [90, 88, 77],
		barWidth: barWidth,
		itemStyle: {
			normal: {
				color: player1Color
			}
		}
	}, {
		name: 'kfzx',
		type: 'bar',
		data: [77, 81, 37],
		barWidth: barWidth,
		itemStyle: {
			normal: {
				color: player2Color
			}

		}
	}]
};

//设置雷达图
totalAbilityChart.setOption(totalAbilityChart_option); //设置雷达图
bodyChart.setOption(bodyChart_option);
techChart.setOption(techChart_option);
specChart.setOption(specChart_option);
attackChart.setOption(attackChart_option);
defenceChart.setOption(defenceChart_option);

//球员能力对象,记录所有的能力   
var playerData = {
	playername:"empty",
	//大项:
	totalabi: 50, //总实力
	body_abi: 50, //体质能力
	tech_abi: 50, //技术能力
	spec_abi: 50, //特殊能力
	attack_abi: 50, //进攻能力
	defence_abi: 50, //防守能力
	//细项:
	speed: 50, //速度
	strength: 50, //强壮
	stamina: 50, //体能
	health: 50, //受伤抗性
	passing: 50, //传球
	touching: 50, //停球
	dribbling: 50, //盘带
	heading: 50, //头球
	minding: 50, //意志力
	rating: 50, //出勤率
	rating: 50, //团队意识
	shoot: 50, //射门
	offtheball: 50, //跑位
	creativity: 50, //创造力
	taking: 50, //抢断
	marking: 50, //盯人
	positioning: 50, //防守站位
	
	department:"empty"//部门

}

// ajax的post方法:
// 确认提交方法，调用A2接口
function GetPlayerData(player1, player2) {
	$.ajax({
		//提交数据的类型 POST GET
		type: "POST",
		//提交的网址
		url: clubserver.URL + "A3GetPlayerData",
		//提交的数据
		data: {
			player1: player1,
			player2: player2,

		},
		//返回数据的格式
		datatype: "html", //"xml", "html", "script", "json", "jsonp", "text".
		//在请求之前调用的函数
		beforeSend: function() {
			// $("#msg").html("logining");
		},
		//成功返回之后调用的函数            
		success: function(data) {
			console.log('成功返回playerabi数据');
		},
		//调用执行后调用的函数
		complete: function(XMLHttpRequest, textStatus) {
			//alert(XMLHttpRequest.responseText); //XMLHttpRequest.responseText是返回的信息，用这个来放JSON数据
			try {
				var jsonObject = JSON.parse(XMLHttpRequest.responseText);
				var arraylength = 0;
				for (var key in jsonObject) {
					playerData.playername = key;
					var playObject = jsonObject[key];	// 取出对应的属性JSON
					playerData.department = playObject["department"];
					playerArray[arraylength++] = playerData;
//					console.log(playerArray[0].playername);
//					console.log(playerArray[0].department);
				}
				
			} catch (e) {
				console.log("error=" + e.message);
				console.log("compareabi.js成功返回信息=>" + XMLHttpRequest.responseText + "\n=>无法转换为JSON");
			}
			// HideLoading();
		},
		//调用出错执行的函数
		error: function() {
			//请求出错处理
		}
	});
}