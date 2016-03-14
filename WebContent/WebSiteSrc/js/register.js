/*
 * created by kfzx-qiusd 2016-03-02
 * 
 */


var departmentlist = document.getElementById("departmentlist");
departmentlist.addEventListener('click', selectDepartment, false);

var submitinput = document.getElementById("submitinput");
submitinput.addEventListener('click', submitCheck, false);

//实现点击部门list后更新部门button的文字
function selectDepartment(event) {
	var selectedlist = event.target; // 获取点击目标
	document.getElementById("mydepartment").innerHTML = selectedlist.innerHTML;
	document.getElementById("mydepartment").setAttribute('tag', selectedlist.innerHTML);
}

//提交时检查合法性
function submitCheck(event) {
	var userdepartment = document.getElementById("mydepartment").getAttribute('tag');
	var username = document.getElementById("nameinput").value;
	var userpassword = document.getElementById("passwordinput").value;
	if (userdepartment == "选择部门") {
		alert("请选择部门！");
	} else if (username == "") {
		alert("请输入用户名!");
	} else if (userpassword == "") {
		alert("请输入密码!");
	} else {
		//调用B1-注册接口---牟宁;		
		var result = confirm("您的注册信息为:\n\n用户名：" + username + "\n密码：" + userpassword + "\n部门：" + userdepartment + "\n\n用户名不要写错噢!")
		if (result) {
			RegisterPost(userdepartment, username, userpassword);
		} else {
			alert("取消了，请重新确认");
		}

	}
}



// ajax的post方法:
// Register的post方法，调用B1接口
function RegisterPost(deparment, name, password) {
	$.ajax({
		//提交数据的类型 POST GET
		type: "POST",
		//提交的网址--改为调用B1接口
		url: clubserver.URL+"RegisterServlet",
		//提交的数据
		data: {
			deparment: deparment,
			name: name,
			password: password
		},
		//返回数据的格式
		datatype: "html", //"xml", "html", "script", "json", "jsonp", "text".
		//在请求之前调用的函数
		beforeSend: function() {
			//$("#msg").html("Registering");
		},
		//成功返回之后调用的函数            
		success: function(data) {
			//$("#msg").html(decodeURI(data));
		},
		//调用执行后调用的函数
		complete: function(XMLHttpRequest, textStatus) {
			//			alert(XMLHttpRequest.responseText); //XMLHttpRequest.responseText是返回的信息，用这个来放JSON数据
			try {
				var jsonObject = JSON.parse(XMLHttpRequest.responseText);
				for (var key in jsonObject) {
					alert("属性=" + key + "\n值=" + jsonObject[key]);
					if (key == "retcode") {
						if (jsonObject[key] == "0") {
//							console.log("注册成功，跳转到个人属性页面"); // 跳转时 							
							document.location.href='../pages/myabbs.html';
						}
					}
				}

			} catch (e) {
				e.message;
				alert("返回信息=>" + XMLHttpRequest.responseText + "\n=>无法转换为JSON");
			}
		},
		//调用出错执行的函数
		error: function() {
			alert("调用登陆接口失败，请检查网络环境");
		}
	});
}