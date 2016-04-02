package com.demo;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Random;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sun.org.apache.xpath.internal.functions.Function;

/**
 * Servlet implementation class A3GetPlayerData
 */
@WebServlet("/A3GetPlayerData")
public class A3GetPlayerData extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public A3GetPlayerData() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setContentType("text/html; charset=utf-8");
		String remotehost = request.getRemoteHost();
		try {
			
			if (request.getParameter("joinflag").equals("0")){ // 获取球员数量
				String retJsonStr = ""
						+ "{\"retCode\" : \"0\","
						+ "\"totalnum\" : \"99\"}";

				PrintWriter out = response.getWriter();
				out.flush();
				out.write(retJsonStr.toString());
				System.out.println(remotehost+":获取球员数量");
				
			} else if (request.getParameter("joinflag").equals("1")){ // 获取参加比赛的球员			
				String jsonStr = createData(50);
				String retJsonStr = ""
						+ "{\"retCode\" : \"0\","
						+ "\"totalnum\" : \"99\","
						+ "\"playerlist\" : " + jsonStr
						+ "}";			

				PrintWriter out = response.getWriter();
				out.flush();
				out.write(retJsonStr.toString());
				System.out.println(remotehost+":获取参加比赛的球员");
			} else {
				System.out.println(remotehost+":请求所有球员数据");
			}
			
		} catch (Exception e) {
			System.err.println(e.getMessage());
			// TODO: handle exception
		}
		
		
		

	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

	protected String createData(int totalplayers) {

		String playerDataJson = "{";
		String team = "";
		for (int i = 0 ; i<totalplayers; i++) {
			String name = "player"+ i; 
			String department = "";
			if (i%11==0){
				department="广州测试部";
				team="1队";
			}else if (i%23==0){
				department="其他机构";
				team="2队";
			}else if (i%33==0){
				department="广州海外支持部";
				team="3队";
			}else if (i%13==0){
				department="广州研发支持部";
				team="4队";
			}else if (i%16==0){
				department="北京研发部";
				team="1队";
			}else if (i%6==0){
				department="广州测试部";
				team="2队";
			} else if(i%2==0) {
				department="广州开发一部";
				team="3队";
			}else if(i%3==0) {
				department="广州开发三部";
				team="4队";
			}else if(i%5==0) {
				department="广州开发二部";
				team="1队";
			}else{
				department="广州研发支持部";
				team="2队";
			}
			int abb1 = (int)(Math.random()*100);
			int abb2 = (int)(Math.random()*100);
			int abb3 = (int)(Math.random()*100);
			int abb4 = (int)(Math.random()*100);
			int abb5 = (int)(Math.random()*100);
			int ability = (int)(Math.random()*100);
			int captain = (int)(Math.random()*100)>90 ? 1 : 0;
			
			playerDataJson += ""
					+ "\""+name+"\" : {" 	
					+ "\"body_abi\":\""+abb1+"\","
					+ "\"tech_abi\":\""+abb2+"\","
					+ "\"spec_abi\":\""+abb3+"\","
					+ "\"attack_abi\":\""+abb4+"\","
					+ "\"defence_abi\":\""+abb5+"\","
					+ "\"team\":\""+team+"\","
					+ "\"captain\":\""+captain+"\","	// 队长标志
					+ "\"ability\":\""+ability+"\","	// 总实力
					+ "\"speed\":\"81\","
					+ "\"strength\":\"61\","
					+ "\"stamina\":\"85\","
					+ "\"health\":\"91\","
					+ "\"passing\":\"85\","
					+ "\"touching\":\"85\","
					+ "\"dribbling\":\"85\","
					+ "\"heading\":\"75\","
					+ "\"minding\":\"90\","
					+ "\"rating\":\"90\","
					+ "\"teamwork\":\"80\","
					+ "\"shoot\":\"80\","
					+ "\"offtheball\":\"85\","
					+ "\"creativity\":\"85\","
					+ "\"taking\":\"60\","
					+ "\"marking\":\"40\","
					+ "\"positioning\":\"60\","
					+ "\"department\":\""+department+"\"},";
			
		}
		
		playerDataJson += ""
				+ "\"zidane\" : {" 
				+ "\"speed\":\"81\","
				+ "\"strength\":\"61\","
				+ "\"stamina\":\"85\","
				+ "\"health\":\"91\","
				+ "\"passing\":\"85\","
				+ "\"touching\":\"85\","
				+ "\"dribbling\":\"85\","
				+ "\"heading\":\"75\","
				+ "\"minding\":\"90\","
				+ "\"rating\":\"90\","
				+ "\"teamwork\":\"80\","
				+ "\"shoot\":\"80\","
				+ "\"offtheball\":\"85\","
				+ "\"creativity\":\"85\","
				+ "\"taking\":\"60\","
				+ "\"marking\":\"40\","
				+ "\"positioning\":\"60\","
				+ "\"department\":\"广州研发支持部\"}}";
			

		return playerDataJson;

	}

}
