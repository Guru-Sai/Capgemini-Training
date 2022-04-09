package Com.Company;

import java.util.HashSet;

public class Main {

    public static void main(String[] args) {
	// write your code here
        HashSet<String> hs=new HashSet<>();
        hs.add("Guru");
        hs.add("Max");
        hs.add("Roshan");
        hs.add("Sai");
        hs.add("Mona");

        System.out.println("Original");
        System.out.println(hs);
        System.out.println(hs.size());

        hs.add("Guru");
        hs.add("Rohith");

        System.out.println("After adding duplicate elements");
        System.out.println(hs);
        System.out.println(hs.size());
    }
}
