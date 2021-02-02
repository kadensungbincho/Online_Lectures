epackage com.virtualpairprogrammers.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.virtualpairprogrammers.data.MenuDataService;
import com.virtualpairprogrammers.domain.MenuItem;

public class MenuSearchServlet extends HttpServlet {
	
	public void service(HttpServletRequest request, HttpServletResponse response) throws IOException {
		
		PrintWriter out = response.getWriter();
		response.setContentType("text/html");
		
		String searchTerm = request.getParameter("searchTerm");
		
		MenuDataService menuService = new MenuDataService();
		List<MenuItem> menus = menuService.find(searchTerm);
		
		if (menus.size() > 0) {
			out.println("<html><body><h1>Ricky's Restaurant</h1>");
			out.println("<h2>Dishes containing " + searchTerm + "</h2>");
			out.println("<ul>");
			for(MenuItem menu: menus) {
				out.println("<li>" + menu + " " + menu.getDescription() + "</li>");
			}
			out.println("</ul>");
			out.println("</body></html>");
		} else {
			out.println("<html><body><h1>Ricky's Restaurant</h1>");
			out.println("<p>I'm sorry, there are no dishes containing " + searchTerm);
			out.println("</body></html>");
		}
		
		
		out.close();
	}
}
