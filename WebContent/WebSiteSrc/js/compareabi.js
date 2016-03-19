/********************************
 *  作者：kfzx-qiusd 
 *  说明：有空在研究深入JQ...
 *
 *********************************/
/*
 *  ========== 全局变量定义开始 ==========  
 */

var bodyChart = echarts.init(document.getElementById('body_abbsdiv'));
var techChart = echarts.init(document.getElementById('tech_abbsdiv'));
var specChart = echarts.init(document.getElementById('spec_abbsdiv'));
var attackChart = echarts.init(document.getElementById('attack_abbsdiv'));
var defenceChart = echarts.init(document.getElementById('defen_abbsdiv'));

var barWidth = 10;

/*
 *  ========== 全局变量定义结束 ==========  
 */

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
		left: '2%',
		right: '5%',
		bottom: '1%',
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
				color: '#4cb749'
			}
		}
	}, {
		name: 'kfzx',
		type: 'bar',
		data: [77, 81, 37, 95],
		barWidth: barWidth,
		itemStyle: {
			normal: {
				color: '#FC3E10'
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
		left: '2%',
		right: '5%',
		bottom: '1%',
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
				color: '#4cb749'
			}
		}
	}, {
		name: 'kfzx',
		type: 'bar',
		data: [77, 81, 37, 95],
		barWidth: barWidth,
		itemStyle: {
			normal: {
				color: '#FC3E10'
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
		left: '2%',
		right: '5%',
		bottom: '1%',
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
				color: '#4cb749'
			}
		}
	}, {
		name: 'kfzx',
		type: 'bar',
		data: [77, 81, 37, 95],
		barWidth: barWidth,
		itemStyle: {
			normal: {
				color: '#FC3E10'
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
		left: '2%',
		right: '5%',
		bottom: '1%',
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
				color: '#4cb749'
			}
		}
	}, {
		name: 'kfzx',
		type: 'bar',
		data: [77, 81, 37, 95],
		barWidth: barWidth,
		itemStyle: {
			normal: {
				color: '#FC3E10'
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
		left: '2%',
		right: '5%',
		bottom: '1%',
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
				color: '#4cb749'
			}
		}
	}, {
		name: 'kfzx',
		type: 'bar',
		data: [77, 81, 37, 95],
		barWidth: barWidth,
		itemStyle: {
			normal: {
				color: '#FC3E10'
			}

		}
	}]
};

//设置雷达图
bodyChart.setOption(bodyChart_option);
techChart.setOption(techChart_option);
specChart.setOption(specChart_option);
attackChart.setOption(attackChart_option);
defenceChart.setOption(defenceChart_option);

var myChart = echarts.init(document.getElementById('highchartDiv'));
var option = {
	title: {
		//text: '多雷达图'
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: { //说明
		x: 'center',
		//data:['球员1'] // 标题，可省
	},
	radar: [{
		indicator: [{
			text: '技术',
			max: 110
		}, {
			text: '进攻',
			max: 110
		}, {
			text: '特殊',
			max: 110
		}, {
			text: '体质',
			max: 110
		}, {
			text: '防守',
			max: 110
		}],
		center: ['47.5%', '52%'],
		radius: 90, //半径长度
		startAngle: 90,
		splitNumber: 4,
		//shape: 'circle',//默认按定点数
		name: {
			// formatter:'【{value}】', //文字格式
			textStyle: {
				color: '#72ACD1', //文字颜色
				fontSize: 14
			}

		},
		splitArea: {
			areaStyle: {
				color: ['rgba(114, 172, 209, 0.2)', 'rgba(114, 172, 209, 0.6)', 'rgba(114, 172, 209, 0.6)',
					'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'
				],
				shadowColor: 'rgba(0, 0, 0, 0.2)',
				shadowBlur: 20
			}
		},
	}],
	series: [{
		type: 'radar',
		tooltip: {
			trigger: 'item'
		},
		itemStyle: {
			normal: {
				areaStyle: {
					type: 'default'
				}
			}
		},
		data: [{
			value: [80, 90,70,60,66],
			name: 'zidane',
			areaStyle: {
				normal: {
					color: 'rgba(200, 102, 99,0.7)' //能力覆盖区域颜色
				}
			}
		},
		{
			value: [77, 88, 80 , 70 , 60],
			name: 'kfzx',
			areaStyle: {
				normal: {
					color: 'rgba(200, 102, 99,0.7)' //能力覆盖区域颜色
				}
			}
		}
		
		]
	}]
};
myChart.setOption(option); //设置雷达图

//球员能力对象,记录所有的能力   
var ability = {
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
	positioning: 50 //防守站位

}

// ajax的post方法:
// 确认提交方法，调用A2接口
function LoginPost() {
	$.ajax({
		//提交数据的类型 POST GET
		type: "POST",
		//提交的网址
		url: clubserver.URL + "A2UpdatePlayer",
		//提交的数据
		data: {
			joinleague: joinLeague,
			playername: playername,
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