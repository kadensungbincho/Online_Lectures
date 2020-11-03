package intermediate.classex;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;

public class ClassTest {

	public static void main(String[] args) throws ClassNotFoundException, InstantiationException, IllegalAccessException, NoSuchMethodException, SecurityException, IllegalArgumentException, InvocationTargetException {
		
		Person person = new Person("James");
		System.out.println(person);
		
		Class c1 = Class.forName("intermediate.classex.Person");
		
		Person person1 = (Person)c1.newInstance();
		System.out.println(person1);
		
		Class[] parameterTyes = {String.class};
		Constructor cons = c1.getConstructor(parameterTyes);
		
		Object[] initargs = {"Lee"};
		Person person2 = (Person)cons.newInstance(initargs);
		System.out.println(person2);
		
		
	}

}
