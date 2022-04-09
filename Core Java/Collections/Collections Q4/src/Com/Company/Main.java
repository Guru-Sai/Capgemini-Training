package Com.Company;

import java.util.LinkedList;

public class Main {

    public static void main(String[] args) {
        // write your code here
        Date dob1 = new Date(13, 6, 2000);
        Date dob2 = new Date(6, 1, 2001);
        Date dob3 = new Date(3, 7, 1996);
        LinkedList<Date> dob = new LinkedList<>();
        dob.add(dob1);
        dob.add(dob2);
        dob.add(dob3);

        for (int i = 0; i < dob.size(); i++) {
            int year = dob.get(i).getYear();
            if (year % 400 == 0 || year % 100 == 0 || year % 4 == 0) {
                System.out.println(dob.get(i) + " : Born in Leap Year.");
            } else {
                System.out.println(dob.get(i) + " : Not Born in a Leap Year.");
            }
        }
    }
}
