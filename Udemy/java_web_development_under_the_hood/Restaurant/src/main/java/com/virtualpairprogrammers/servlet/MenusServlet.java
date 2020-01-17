package com.virtualpairprogrammers.servlet;


import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.virtualpairprogrammers.data.MenuDataService;
import com.virtualpairprogrammers.domain.MenuItem;


public class MenusServlet extends HttpServlet {
	public void service(HttpServletRequest request, HttpServletResponse response) throws IOException {
		MenuDataService menuService = new MenuDataService();
		List<MenuItem> menus = menuService.getFullMenu();
		
		PrintWriter out = response.getWriter();
		response.setContentType("text/html");
		out.println("<html><body>");
		out.println("<h1>Menu</h1>");
		out.println("<ul>");
		for(MenuItem menu: menus) {
			out.println("<li>" + menu.toString() + "</li>");
		}
		out.println("</ul>");
		out.println("</body></html>");
		out.close();
	}
}
