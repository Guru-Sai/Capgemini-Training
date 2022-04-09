package Com.Company;

import java.util.HashSet;
import java.util.Set;

public class Main {

    public static void main(String[] args) {
	// write your code here
        Employee e1= new Employee(142,"Guru",40000,"IT","Age:22");
        Employee e2= new Employee(143,"Payne",90000,"Management","Age:25");
        Employee e3= new Employee(144,"Mona",80000,"Business","Age:26");
        Set<Employee> employees=new HashSet<>();
        employees.add(e1);
        employees.add(e2);
        employees.add(e3);
        for (Employee employee2 : employees) {
            System.out.println(employee2.toString());
        }
    }
}
