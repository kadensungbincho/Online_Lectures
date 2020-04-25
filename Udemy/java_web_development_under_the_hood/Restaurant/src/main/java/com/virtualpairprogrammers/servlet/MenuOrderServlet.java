package com.virtualpairprogrammers.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.virtualpairprogrammers.data.MenuDataService;
import com.virtualpairprogrammers.domain.MenuItem;

public class MenuOrderServlet extends HttpServlet {
	
	public void service(HttpServletRequest request, HttpServletResponse response) throws IOException {
		MenuDataService menuService = new MenuDataService();
		List<MenuItem> menus = menuService.getFullMenu();
		
		PrintWriter out = response.getWriter();
		response.setContentType("text/html");
		out.println("<html><body><h1>Ricky's Restaurant</h1>");
		out.println("<h2>Order your food</h2>");
		out.println("<form action='orderReceived.html' method='POST'>");
		out.println("<ul>");
		for (MenuItem menuItem: menus) {
			out.println("<li>");
			out.println(menuItem.getName() + "(" + menuItem.getPrice() + ")<input type='text' name='item_" + menuItem.getId() + "'/>");
			out.println("</li>");
		}
		out.println("</ul>");
		out.println("<input type='submit' />");
		out.println("</form>");
		out.println("</body></html>");
		out.close();
	}
}
