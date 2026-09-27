/* ============================================================
   STUDENT DETAILS
   ============================================================ */
const STUDENT = {
  name: "Ch. Manikanta",
  roll: "25EU02072",
  year: "II Year",
  branch: "AI & ML",
  section: "B",
  subject: "Java Programming"
};

/* ============================================================
   WEEK DATA
   ============================================================ */
const WEEKS = [

/* ---------------- WEEK 1 ---------------- */
{
  id: 1,
  title: "Comparative Table — Java, C, C++, Python & JavaScript",
  type: "table",
  intro: "A feature-by-feature comparison of five widely used programming languages.",
  table: {
    headers: ["Feature", "Java", "C", "C++", "Python", "JavaScript"],
    rows: [
      ["Paradigm", "Object-Oriented", "Procedural", "Procedural + Object-Oriented", "Multi-paradigm (OOP, Functional)", "Multi-paradigm (Event-driven, OOP)"],
      ["Typing", "Statically typed", "Statically typed", "Statically typed", "Dynamically typed", "Dynamically typed"],
      ["Execution", "Compiled to bytecode, run on JVM", "Compiled to machine code", "Compiled to machine code", "Interpreted", "Interpreted / JIT compiled in engine"],
      ["Platform Dependency", "Platform-independent (WORA)", "Platform-dependent", "Platform-dependent", "Platform-independent", "Platform-independent"],
      ["Memory Management", "Automatic (Garbage Collector)", "Manual (malloc / free)", "Manual, with optional smart pointers", "Automatic (Garbage Collector)", "Automatic (Garbage Collector)"],
      ["Pointers", "Not supported directly", "Supported", "Supported", "Not supported", "Not supported"],
      ["Compiled Output", ".class bytecode", "Native executable", "Native executable", ".pyc bytecode (interpreted)", "None — interpreted / JIT"],
      ["Primary Use", "Enterprise apps, Android", "System & embedded programming", "System software, games", "Data science, scripting, AI", "Web front-end & back-end (Node.js)"],
      ["Inheritance", "Single (multiple via interfaces)", "Not applicable", "Multiple inheritance supported", "Multiple inheritance supported", "Prototype-based inheritance"],
      ["Performance", "Moderate to fast (JIT optimised)", "Very fast", "Very fast", "Slower (interpreted)", "Moderate (JIT optimised)"],
      ["Learning Curve", "Moderate", "Steep (low-level concepts)", "Steep", "Easy", "Easy to moderate"]
    ]
  }
},

/* ---------------- WEEK 2 ---------------- */
{
  id: 2,
  title: "JDK Installation on Windows",
  type: "install",
  intro: "Installation procedure for two common Java distributions.",
  programs: [
    {
      title: "Oracle JDK Installation — Windows",
      aim: "Install Oracle JDK on a Windows machine and verify the installation.",
      steps: [
        "Open a browser and visit the official Oracle Java downloads page (oracle.com/java).",
        "Select Windows as the platform and download the x64 Installer (.exe) for the required JDK version.",
        "Locate the downloaded file in Downloads and double-click it to launch the setup wizard.",
        "Accept the license agreement and click Next to continue.",
        "Choose the installation directory (default: C:\\Program Files\\Java\\jdk-xx) and click Next.",
        "Wait for the wizard to copy the required files, then click Close once installation finishes.",
        "Open System Properties → Environment Variables and create a new variable JAVA_HOME pointing to the JDK folder.",
        "Edit the Path variable and add %JAVA_HOME%\\bin to it.",
        "Open a new Command Prompt window and verify the installation using java and javac commands."
      ],
      verifyCode: `java -version
javac -version`,
      verifyOutput: `java version "21.0.4" 2024-07-16 LTS
Java(TM) SE Runtime Environment (build 21.0.4+8-LTS-274)
Java HotSpot(TM) 64-Bit Server VM (build 21.0.4+8-LTS-274, mixed mode, sharing)
javac 21.0.4`
    },
    {
      title: "OpenJDK Installation — Windows",
      aim: "Install OpenJDK (Eclipse Temurin build) on a Windows machine and verify the installation.",
      steps: [
        "Go to the Eclipse Temurin (Adoptium) website — the official distribution of OpenJDK builds.",
        "Choose Windows as the operating system and x64 as the architecture, then download the .msi installer.",
        "Run the downloaded .msi file to launch the installation wizard.",
        "On the Custom Setup screen, expand 'JavaSoft (Oracle) registry keys' and enable 'Set JAVA_HOME variable' and 'Add to PATH'.",
        "Click Next and then Install to begin copying files.",
        "Wait for the installation to finish and click Finish to close the wizard.",
        "Close and reopen any Command Prompt windows so the updated PATH takes effect.",
        "Verify the installation using the Command Prompt."
      ],
      verifyCode: `java -version
javac -version`,
      verifyOutput: `openjdk version "21.0.4" 2024-07-16
OpenJDK Runtime Environment Temurin-21.0.4+7 (build 21.0.4+7)
OpenJDK 64-Bit Server VM Temurin-21.0.4+7 (build 21.0.4+7, mixed mode, sharing)
javac 21.0.4`
    }
  ]
},

/* ---------------- WEEK 3 ---------------- */
{
  id: 3,
  title: "Java Basics — Variables, Data Types & Operators",
  type: "programs",
  intro: "Fifteen short programs covering Java's basic program structure, data types, operators, type conversion and control flow.",
  programs: [
    {
      title: "Hello, Java! and Basic Program Structure",
      aim: "Write a Java program to display \"Hello, Java!\" and demonstrate the basic structure of a Java program.",
      code: `public class HelloJava {
    public static void main(String[] args) {
        // println displays the text followed by a new line
        System.out.println("Hello, Java!");
    }
}`,
      output: `Hello, Java!`
    },
    {
      title: "Declaring All Primitive Data Types",
      aim: "Declare variables of byte, short, int, long, float, double, char and boolean data types and display their values.",
      code: `public class DataTypesDemo {
    public static void main(String[] args) {
        byte b = 10;
        short s = 1200;
        int i = 45000;
        long l = 9876543210L;
        float f = 12.34f;
        double d = 123.456789;
        char c = 'J';
        boolean flag = true;

        System.out.println("byte value    : " + b);
        System.out.println("short value   : " + s);
        System.out.println("int value     : " + i);
        System.out.println("long value    : " + l);
        System.out.println("float value   : " + f);
        System.out.println("double value  : " + d);
        System.out.println("char value    : " + c);
        System.out.println("boolean value : " + flag);
    }
}`,
      output: `byte value    : 10
short value   : 1200
int value     : 45000
long value    : 9876543210
float value   : 12.34
double value  : 123.456789
char value    : J
boolean value : true`
    },
    {
      title: "Arithmetic Operations on Integers",
      aim: "Perform addition, subtraction, multiplication, division and modulus operations on two integer variables.",
      code: `public class IntArithmetic {
    public static void main(String[] args) {
        int a = 20, b = 6;
        System.out.println("a = " + a + ", b = " + b);
        System.out.println("Addition       : " + (a + b));
        System.out.println("Subtraction    : " + (a - b));
        System.out.println("Multiplication : " + (a * b));
        System.out.println("Division       : " + (a / b));
        System.out.println("Modulus        : " + (a % b));
    }
}`,
      output: `a = 20, b = 6
Addition       : 26
Subtraction    : 14
Multiplication : 120
Division       : 3
Modulus        : 2`
    },
    {
      title: "Arithmetic Operations on Floating-Point Numbers",
      aim: "Perform arithmetic operations on floating-point numbers and display the results.",
      code: `public class FloatArithmetic {
    public static void main(String[] args) {
        double a = 15.5, b = 4.2;
        System.out.println("a = " + a + ", b = " + b);
        System.out.println("Addition       : " + (a + b));
        System.out.println("Subtraction    : " + (a - b));
        System.out.println("Multiplication : " + (a * b));
        System.out.println("Division       : " + (a / b));
    }
}`,
      output: `a = 15.5, b = 4.2
Addition       : 19.7
Subtraction    : 11.3
Multiplication : 65.10000000000001
Division       : 3.6904761904761907`
    },
    {
      title: "Character Data Type and ASCII Value",
      aim: "Demonstrate the character data type by displaying a character and its corresponding ASCII/Unicode value.",
      code: `public class CharAsciiDemo {
    public static void main(String[] args) {
        char ch = 'A';
        int ascii = ch;
        System.out.println("Character           : " + ch);
        System.out.println("ASCII/Unicode value : " + ascii);
    }
}`,
      output: `Character           : A
ASCII/Unicode value : 65`
    },
    {
      title: "Boolean Variables and Relational Operators",
      aim: "Demonstrate boolean variables and boolean expressions using relational operators.",
      code: `public class BooleanDemo {
    public static void main(String[] args) {
        int a = 15, b = 20;
        boolean isEqual = (a == b);
        boolean isGreater = (a > b);
        boolean isLess = (a < b);
        boolean isNotEqual = (a != b);

        System.out.println("a = " + a + ", b = " + b);
        System.out.println("a == b : " + isEqual);
        System.out.println("a > b  : " + isGreater);
        System.out.println("a < b  : " + isLess);
        System.out.println("a != b : " + isNotEqual);
    }
}`,
      output: `a = 15, b = 20
a == b : false
a > b  : false
a < b  : true
a != b : true`
    },
    {
      title: "Declaring and Displaying Different Variable Types",
      aim: "Declare and initialize different types of variables and display their values.",
      code: `public class VariableDemo {
    public static void main(String[] args) {
        String name = "Manikanta";
        int age = 19;
        double cgpa = 8.75;
        char grade = 'A';
        boolean isPassed = true;

        System.out.println("Name    : " + name);
        System.out.println("Age     : " + age);
        System.out.println("CGPA    : " + cgpa);
        System.out.println("Grade   : " + grade);
        System.out.println("Passed  : " + isPassed);
    }
}`,
      output: `Name    : Manikanta
Age     : 19
CGPA    : 8.75
Grade   : A
Passed  : true`
    },
    {
      title: "Swapping Two Variables Using a Temporary Variable",
      aim: "Swap the values of two variables using a temporary variable.",
      code: `public class SwapVariables {
    public static void main(String[] args) {
        int a = 25, b = 40;
        System.out.println("Before swap: a = " + a + ", b = " + b);

        int temp = a;
        a = b;
        b = temp;

        System.out.println("After swap : a = " + a + ", b = " + b);
    }
}`,
      output: `Before swap: a = 25, b = 40
After swap : a = 40, b = 25`
    },
    {
      title: "Widening Type Conversion",
      aim: "Demonstrate widening type conversion between primitive data types.",
      code: `public class WideningDemo {
    public static void main(String[] args) {
        byte b = 12;
        int i = b;        // byte to int
        long l = i;       // int to long
        float f = l;      // long to float
        double d = f;     // float to double

        System.out.println("byte value        : " + b);
        System.out.println("widened to int    : " + i);
        System.out.println("widened to long   : " + l);
        System.out.println("widened to float  : " + f);
        System.out.println("widened to double : " + d);
    }
}`,
      output: `byte value        : 12
widened to int    : 12
widened to long   : 12
widened to float  : 12.0
widened to double : 12.0`
    },
    {
      title: "Narrowing Type Casting",
      aim: "Demonstrate narrowing type casting between primitive data types.",
      code: `public class NarrowingDemo {
    public static void main(String[] args) {
        double d = 199.99;
        float f = (float) d;
        long l = (long) f;
        int i = (int) l;
        short s = (short) i;
        byte b = (byte) s;

        System.out.println("double value      : " + d);
        System.out.println("narrowed to float : " + f);
        System.out.println("narrowed to long  : " + l);
        System.out.println("narrowed to int   : " + i);
        System.out.println("narrowed to short : " + s);
        System.out.println("narrowed to byte  : " + b);
    }
}`,
      output: `double value      : 199.99
narrowed to float : 199.99
narrowed to long  : 199
narrowed to int   : 199
narrowed to short : 199
narrowed to byte  : -57`
    },
    {
      title: "Character to ASCII and ASCII to Character Conversion",
      aim: "Demonstrate conversion between a character and its ASCII value, and vice versa.",
      code: `public class CharAsciiConversion {
    public static void main(String[] args) {
        char ch = 'm';
        int code = ch;
        System.out.println("Character '" + ch + "' has ASCII value " + code);

        int num = 90;
        char converted = (char) num;
        System.out.println("ASCII value " + num + " corresponds to character '" + converted + "'");
    }
}`,
      output: `Character 'm' has ASCII value 109
ASCII value 90 corresponds to character 'Z'`
    },
    {
      title: "Check Whether a Number Is Even or Odd",
      aim: "Write a Java program to check whether a given number is even or odd.",
      code: `import java.util.Scanner;

public class EvenOdd {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();

        if (num % 2 == 0)
            System.out.println(num + " is Even");
        else
            System.out.println(num + " is Odd");
    }
}`,
      output: `Enter a number: 17
17 is Odd`
    },
    {
      title: "Largest of Two Numbers",
      aim: "Write a Java program to find the largest of two numbers.",
      code: `import java.util.Scanner;

public class LargestOfTwo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter first number : ");
        int a = sc.nextInt();
        System.out.print("Enter second number: ");
        int b = sc.nextInt();

        if (a > b)
            System.out.println(a + " is the largest number");
        else if (b > a)
            System.out.println(b + " is the largest number");
        else
            System.out.println("Both numbers are equal");
    }
}`,
      output: `Enter first number : 48
Enter second number: 63
63 is the largest number`
    },
    {
      title: "Displaying Reserved Keywords",
      aim: "Write a Java program to display Java's reserved keywords.",
      code: `public class ReservedKeywords {
    public static void main(String[] args) {
        String[] keywords = {
            "abstract", "assert", "boolean", "break", "byte", "case",
            "catch", "char", "class", "const", "continue", "default",
            "do", "double", "else", "enum", "extends", "final",
            "finally", "float", "for", "goto", "if", "implements",
            "import", "instanceof", "int", "interface", "long",
            "native", "new", "package", "private", "protected",
            "public", "return", "short", "static", "strictfp",
            "super", "switch", "synchronized", "this", "throw",
            "throws", "transient", "try", "void", "volatile", "while"
        };

        System.out.println("Total reserved keywords in Java: " + keywords.length);
        System.out.println("Some reserved keywords are:");
        for (int i = 0; i < 10; i++) {
            System.out.println((i + 1) + ". " + keywords[i]);
        }
        // Reserved keywords cannot be used as identifiers (variable/class/method names)
    }
}`,
      output: `Total reserved keywords in Java: 50
Some reserved keywords are:
1. abstract
2. assert
3. boolean
4. break
5. byte
6. case
7. catch
8. char
9. class
10. const`
    },
    {
      title: "For Loop — Numbers 1 to 10",
      aim: "Write a Java program using a for loop to display numbers from 1 to 10.",
      code: `public class ForLoopDemo {
    public static void main(String[] args) {
        System.out.println("Numbers from 1 to 10:");
        for (int i = 1; i <= 10; i++) {
            System.out.print(i + " ");
        }
        System.out.println();
    }
}`,
      output: `Numbers from 1 to 10:
1 2 3 4 5 6 7 8 9 10`
    }
  ]
},

/* ---------------- WEEK 4 ---------------- */
{ id: 4, title: "Week 4", type: "none", note: "No programming task was assigned this week." },

/* ---------------- WEEK 5 ---------------- */
{ id: 5, title: "Week 5", type: "none", note: "No programming task was assigned this week." },

/* ---------------- WEEK 6 ---------------- */
{
  id: 6,
  title: "Classes, Objects, Constructors & Static Members",
  type: "programs",
  intro: "Twenty-eight programs covering classes, objects, constructors, the this keyword, garbage collection, overloading, static/final members and nested/inner classes.",
  programs: [
    { title: "Student Information System", aim: "Create a Student Information System using classes, objects, instance variables and methods.",
      code: `class Student {
    int rollNo;
    String name;
    String branch;
    double marks;

    void setDetails(int rollNo, String name, String branch, double marks) {
        this.rollNo = rollNo;
        this.name = name;
        this.branch = branch;
        this.marks = marks;
    }

    void displayDetails() {
        System.out.println("Roll No : " + rollNo);
        System.out.println("Name    : " + name);
        System.out.println("Branch  : " + branch);
        System.out.println("Marks   : " + marks);
    }
}

public class StudentInfoSystem {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.setDetails(101, "Manikanta", "AI & ML", 92.5);
        s1.displayDetails();
    }
}`,
      output: `Roll No : 101
Name    : Manikanta
Branch  : AI & ML
Marks   : 92.5` },

    { title: "Employee Information System", aim: "Create an Employee Information System using a class, object, variables and methods.",
      code: `class Employee {
    int empId;
    String name;
    String department;
    double salary;

    void setDetails(int empId, String name, String department, double salary) {
        this.empId = empId;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    void displayDetails() {
        System.out.println("Employee ID : " + empId);
        System.out.println("Name        : " + name);
        System.out.println("Department  : " + department);
        System.out.println("Salary      : " + salary);
    }
}

public class EmployeeInfoSystem {
    public static void main(String[] args) {
        Employee e1 = new Employee();
        e1.setDetails(501, "Kavya Reddy", "Human Resources", 48500.0);
        e1.displayDetails();
    }
}`,
      output: `Employee ID : 501
Name        : Kavya Reddy
Department  : Human Resources
Salary      : 48500.0` },

    { title: "Book Details — Multiple Objects", aim: "Create three Book objects and display their book ID, title and author.",
      code: `class Book {
    int bookId;
    String title;
    String author;

    Book(int bookId, String title, String author) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
    }

    void display() {
        System.out.println(bookId + " | " + title + " | " + author);
    }
}

public class BookDetails {
    public static void main(String[] args) {
        Book b1 = new Book(1, "Introduction to Algorithms", "T. Cormen");
        Book b2 = new Book(2, "Effective Java", "Joshua Bloch");
        Book b3 = new Book(3, "Clean Code", "Robert C. Martin");

        System.out.println("ID | Title | Author");
        b1.display();
        b2.display();
        b3.display();
    }
}`,
      output: `ID | Title | Author
1 | Introduction to Algorithms | T. Cormen
2 | Effective Java | Joshua Bloch
3 | Clean Code | Robert C. Martin` },

    { title: "Array of Student Objects", aim: "Create an array of five Student objects, accept their details and display them.",
      code: `import java.util.Scanner;

class Student {
    int rollNo;
    String name;
    double marks;

    void read(Scanner sc, int index) {
        System.out.print("Enter roll number of student " + index + ": ");
        rollNo = sc.nextInt();
        System.out.print("Enter name of student " + index + "  : ");
        name = sc.next();
        System.out.print("Enter marks of student " + index + "  : ");
        marks = sc.nextDouble();
    }

    void display() {
        System.out.println(rollNo + "\\t" + name + "\\t" + marks);
    }
}

public class StudentArrayDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Student[] students = new Student[5];

        for (int i = 0; i < 5; i++) {
            students[i] = new Student();
            students[i].read(sc, i + 1);
        }

        System.out.println("\\nRoll No\\tName\\tMarks");
        for (int i = 0; i < 5; i++) {
            students[i].display();
        }
    }
}`,
      output: `Enter roll number of student 1: 101
Enter name of student 1  : Manikanta
Enter marks of student 1  : 92.5
Enter roll number of student 2: 102
Enter name of student 2  : Kavya
Enter marks of student 2  : 88.0
Enter roll number of student 3: 103
Enter name of student 3  : Arjun
Enter marks of student 3  : 79.5
Enter roll number of student 4: 104
Enter name of student 4  : Sneha
Enter marks of student 4  : 95.0
Enter roll number of student 5: 105
Enter name of student 5  : Vikram
Enter marks of student 5  : 83.5

Roll No	Name	Marks
101	Manikanta	92.5
102	Kavya	88.0
103	Arjun	79.5
104	Sneha	95.0
105	Vikram	83.5` },

    { title: "Reference Assignment", aim: "Demonstrate assigning one object reference variable to another.",
      code: `class Student {
    String name;
    int marks;
}

public class ReferenceAssignmentDemo {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.name = "Manikanta";
        s1.marks = 90;

        Student s2 = s1;      // s2 now refers to the same object as s1
        s2.name = "Kavya";
        s2.marks = 85;

        System.out.println("s1 -> " + s1.name + ", " + s1.marks);
        System.out.println("s2 -> " + s2.name + ", " + s2.marks);
    }
}`,
      output: `s1 -> Kavya, 85
s2 -> Kavya, 85` },

    { title: "Comparing Object References", aim: "Compare two object reference variables using the == operator.",
      code: `class Student {
    String name;
    Student(String name) { this.name = name; }
}

public class ReferenceComparisonDemo {
    public static void main(String[] args) {
        Student s1 = new Student("Manikanta");
        Student s2 = s1;
        Student s3 = new Student("Manikanta");

        System.out.println("s1 == s2 : " + (s1 == s2));
        System.out.println("s1 == s3 : " + (s1 == s3));
    }
}`,
      output: `s1 == s2 : true
s1 == s3 : false` },

    { title: "Calculator Using Methods", aim: "Create methods for addition, subtraction, multiplication and division.",
      code: `public class Calculator {
    int add(int a, int b) { return a + b; }
    int subtract(int a, int b) { return a - b; }
    int multiply(int a, int b) { return a * b; }
    double divide(int a, int b) { return (double) a / b; }

    public static void main(String[] args) {
        Calculator calc = new Calculator();
        int a = 18, b = 4;

        System.out.println("Addition       : " + calc.add(a, b));
        System.out.println("Subtraction    : " + calc.subtract(a, b));
        System.out.println("Multiplication : " + calc.multiply(a, b));
        System.out.println("Division       : " + calc.divide(a, b));
    }
}`,
      output: `Addition       : 22
Subtraction    : 14
Multiplication : 72
Division       : 4.5` },

    { title: "Rectangle Operations", aim: "Calculate the area and perimeter of a rectangle using a constructor and methods.",
      code: `class Rectangle {
    double length, breadth;

    Rectangle(double length, double breadth) {
        this.length = length;
        this.breadth = breadth;
    }

    double area() { return length * breadth; }
    double perimeter() { return 2 * (length + breadth); }
}

public class RectangleOperations {
    public static void main(String[] args) {
        Rectangle r = new Rectangle(12.5, 6.0);
        System.out.println("Area      : " + r.area());
        System.out.println("Perimeter : " + r.perimeter());
    }
}`,
      output: `Area      : 75.0
Perimeter : 37.0` },

    { title: "Student Constructors", aim: "Demonstrate default and parameterized constructors using Student objects.",
      code: `class Student {
    String name;
    int rollNo;

    Student() {
        name = "Not Assigned";
        rollNo = 0;
    }

    Student(String name, int rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }

    void display() {
        System.out.println("Roll No: " + rollNo + ", Name: " + name);
    }
}

public class StudentConstructors {
    public static void main(String[] args) {
        Student s1 = new Student();
        Student s2 = new Student("Manikanta", 101);

        s1.display();
        s2.display();
    }
}`,
      output: `Roll No: 0, Name: Not Assigned
Roll No: 101, Name: Manikanta` },

    { title: "Constructor Overloading", aim: "Demonstrate constructor overloading using constructors with different parameter lists.",
      code: `class Box {
    double length, width, height;

    Box() {
        length = width = height = 0;
    }

    Box(double side) {
        length = width = height = side;
    }

    Box(double length, double width, double height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    double volume() { return length * width * height; }
}

public class ConstructorOverloading {
    public static void main(String[] args) {
        Box b1 = new Box();
        Box b2 = new Box(4);
        Box b3 = new Box(3, 4, 5);

        System.out.println("Volume of b1: " + b1.volume());
        System.out.println("Volume of b2: " + b2.volume());
        System.out.println("Volume of b3: " + b3.volume());
    }
}`,
      output: `Volume of b1: 0.0
Volume of b2: 64.0
Volume of b3: 60.0` },

    { title: "Using this Keyword", aim: "Demonstrate the use of the this keyword for referring to the current object's variables.",
      code: `class Student {
    String name;
    int rollNo;

    Student(String name, int rollNo) {
        this.name = name;      // 'this' distinguishes the field from the parameter
        this.rollNo = rollNo;
    }

    void display() {
        System.out.println("Name: " + this.name + ", Roll No: " + this.rollNo);
    }
}

public class ThisKeywordDemo {
    public static void main(String[] args) {
        Student s1 = new Student("Manikanta", 101);
        s1.display();
    }
}`,
      output: `Name: Manikanta, Roll No: 101` },

    { title: "Constructor Chaining", aim: "Demonstrate constructor chaining using this() between constructors.",
      code: `class Student {
    String name;
    int rollNo;
    String branch;

    Student() {
        this("Not Assigned", 0);
        System.out.println("Default constructor called");
    }

    Student(String name, int rollNo) {
        this(name, rollNo, "Not Assigned");
        System.out.println("Two-argument constructor called");
    }

    Student(String name, int rollNo, String branch) {
        this.name = name;
        this.rollNo = rollNo;
        this.branch = branch;
        System.out.println("Three-argument constructor called");
    }

    void display() {
        System.out.println("Name: " + name + ", Roll No: " + rollNo + ", Branch: " + branch);
    }
}

public class ConstructorChaining {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.display();
    }
}`,
      output: `Three-argument constructor called
Two-argument constructor called
Default constructor called
Name: Not Assigned, Roll No: 0, Branch: Not Assigned` },

    { title: "Demonstrating Garbage Collection", aim: "Demonstrate objects becoming eligible for garbage collection and request garbage collection using System.gc().",
      code: `class Demo {
    int id;
    Demo(int id) { this.id = id; }

    @Override
    protected void finalize() {
        System.out.println("Object " + id + " is garbage collected");
    }
}

public class GarbageCollectionDemo {
    public static void main(String[] args) {
        Demo d1 = new Demo(1);
        Demo d2 = new Demo(2);

        d1 = null;   // object 1 becomes eligible for garbage collection
        d2 = null;   // object 2 becomes eligible for garbage collection

        System.gc();  // request the JVM to run the garbage collector
        System.out.println("Garbage collection requested");
    }
}`,
      output: `Garbage collection requested
Object 1 is garbage collected
Object 2 is garbage collected

Note: System.gc() only requests garbage collection; the JVM decides
when it actually runs, so the exact order/occurrence can vary.` },

    { title: "Object Eligibility for Garbage Collection", aim: "Demonstrate different situations in which objects become eligible for garbage collection.",
      code: `class Sample {
    int id;
    Sample(int id) { this.id = id; }
}

public class GCEligibilityDemo {
    public static void main(String[] args) {
        // 1. Nullifying a reference
        Sample s1 = new Sample(1);
        s1 = null;
        System.out.println("Case 1: Reference set to null - object 1 eligible for GC");

        // 2. Reassigning a reference to another object
        Sample s2 = new Sample(2);
        Sample s3 = new Sample(3);
        s2 = s3;
        System.out.println("Case 2: Reference reassigned - object 2 eligible for GC");

        // 3. Object created inside a method (local scope)
        createObject();
        System.out.println("Case 3: Method-local object eligible for GC after method returns");

        // 4. Island of isolation - objects referencing only each other
        Sample a = new Sample(4);
        Sample b = new Sample(5);
        a = null;
        b = null;
        System.out.println("Case 4: Isolated objects with no external reference eligible for GC");
    }

    static void createObject() {
        Sample temp = new Sample(6);
    }
}`,
      output: `Case 1: Reference set to null - object 1 eligible for GC
Case 2: Reference reassigned - object 2 eligible for GC
Case 3: Method-local object eligible for GC after method returns
Case 4: Isolated objects with no external reference eligible for GC` },

    { title: "Method Overloading", aim: "Demonstrate method overloading using methods with different parameter lists.",
      code: `public class MethodOverloading {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }

    public static void main(String[] args) {
        MethodOverloading obj = new MethodOverloading();
        System.out.println("add(int, int)       : " + obj.add(5, 10));
        System.out.println("add(double, double) : " + obj.add(5.5, 2.3));
        System.out.println("add(int, int, int)  : " + obj.add(1, 2, 3));
    }
}`,
      output: `add(int, int)       : 15
add(double, double) : 7.8
add(int, int, int)  : 6` },

    { title: "Overloading Area Methods", aim: "Calculate the area of a circle, rectangle and square using overloaded methods.",
      code: `public class AreaOverloading {
    double area(double radius) { return Math.PI * radius * radius; }
    int area(int length, int breadth) { return length * breadth; }
    int area(int side) { return side * side; }

    public static void main(String[] args) {
        AreaOverloading obj = new AreaOverloading();
        System.out.println("Area of circle    : " + obj.area(7.0));
        System.out.println("Area of rectangle : " + obj.area(5, 8));
        System.out.println("Area of square    : " + obj.area(6));
    }
}`,
      output: `Area of circle    : 153.93804002589985
Area of rectangle : 40
Area of square    : 36` },

    { title: "Passing Student Object", aim: "Pass a Student object to a method and display its details.",
      code: `class Student {
    String name;
    int marks;

    Student(String name, int marks) {
        this.name = name;
        this.marks = marks;
    }
}

public class PassObjectDemo {
    static void displayStudent(Student s) {
        System.out.println("Name  : " + s.name);
        System.out.println("Marks : " + s.marks);
    }

    public static void main(String[] args) {
        Student s1 = new Student("Manikanta", 94);
        displayStudent(s1);
    }
}`,
      output: `Name  : Manikanta
Marks : 94` },

    { title: "Comparing Employee Salaries", aim: "Compare the salaries of two Employee objects and display the employee with the higher salary.",
      code: `class Employee {
    String name;
    double salary;

    Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }
}

public class CompareSalaries {
    static void compare(Employee e1, Employee e2) {
        if (e1.salary > e2.salary)
            System.out.println(e1.name + " has a higher salary");
        else if (e2.salary > e1.salary)
            System.out.println(e2.name + " has a higher salary");
        else
            System.out.println("Both employees have equal salary");
    }

    public static void main(String[] args) {
        Employee e1 = new Employee("Arjun", 52000);
        Employee e2 = new Employee("Sneha", 58500);
        compare(e1, e2);
    }
}`,
      output: `Sneha has a higher salary` },

    { title: "Returning a Student Object", aim: "Create a Student object inside a method and return the object to the caller.",
      code: `class Student {
    String name;
    int rollNo;
}

public class ReturnObjectDemo {
    static Student createStudent() {
        Student s = new Student();
        s.name = "Manikanta";
        s.rollNo = 101;
        return s;
    }

    public static void main(String[] args) {
        Student s1 = createStudent();
        System.out.println("Name    : " + s1.name);
        System.out.println("Roll No : " + s1.rollNo);
    }
}`,
      output: `Name    : Manikanta
Roll No : 101` },

    { title: "Returning a Bank Account Object", aim: "Pass a Bank Account object to a method, update its balance and return the object.",
      code: `class BankAccount {
    String holder;
    double balance;

    BankAccount(String holder, double balance) {
        this.holder = holder;
        this.balance = balance;
    }
}

public class BankAccountUpdate {
    static BankAccount deposit(BankAccount acc, double amount) {
        acc.balance += amount;
        return acc;
    }

    public static void main(String[] args) {
        BankAccount acc = new BankAccount("Manikanta", 5000.0);
        acc = deposit(acc, 1500.0);

        System.out.println("Account Holder : " + acc.holder);
        System.out.println("Updated Balance: " + acc.balance);
    }
}`,
      output: `Account Holder : Manikanta
Updated Balance: 6500.0` },

    { title: "Static Variable", aim: "Demonstrate a static variable by counting the number of Student objects created.",
      code: `class Student {
    static int count = 0;

    Student() {
        count++;
    }
}

public class StaticVariableDemo {
    public static void main(String[] args) {
        new Student();
        new Student();
        new Student();

        System.out.println("Number of Student objects created: " + Student.count);
    }
}`,
      output: `Number of Student objects created: 3` },

    { title: "Static Methods", aim: "Demonstrate static methods by calculating square, cube and factorial.",
      code: `public class StaticMethodsDemo {
    static int square(int n) { return n * n; }
    static int cube(int n) { return n * n * n; }

    static long factorial(int n) {
        long fact = 1;
        for (int i = 1; i <= n; i++) fact *= i;
        return fact;
    }

    public static void main(String[] args) {
        int num = 5;
        System.out.println("Square of " + num + "    : " + square(num));
        System.out.println("Cube of " + num + "      : " + cube(num));
        System.out.println("Factorial of " + num + " : " + factorial(num));
    }
}`,
      output: `Square of 5    : 25
Cube of 5      : 125
Factorial of 5 : 120` },

    { title: "Final Keyword", aim: "Demonstrate final variables, final methods and final classes.",
      code: `final class Constants {          // a final class cannot be extended
    final int MAX_MARKS = 100;   // a final variable cannot be reassigned

    final void show() {          // a final method cannot be overridden
        System.out.println("Maximum marks allowed: " + MAX_MARKS);
    }
}

public class FinalKeywordDemo {
    public static void main(String[] args) {
        Constants c = new Constants();
        c.show();
    }
}`,
      output: `Maximum marks allowed: 100` },

    { title: "Blank Final Variable", aim: "Demonstrate a blank final variable initialized through a constructor.",
      code: `class Student {
    final int rollNo;   // blank final variable - not initialised at declaration

    Student(int rollNo) {
        this.rollNo = rollNo;   // must be initialised in the constructor
    }

    void display() {
        System.out.println("Roll No: " + rollNo);
    }
}

public class BlankFinalDemo {
    public static void main(String[] args) {
        Student s1 = new Student(101);
        s1.display();
    }
}`,
      output: `Roll No: 101` },

    { title: "College and Department — Nested Class", aim: "Demonstrate a static nested Department class inside a College class.",
      code: `class College {
    String collegeName = "Sunrise Institute of Technology";

    static class Department {
        String deptName;

        Department(String deptName) {
            this.deptName = deptName;
        }

        void display() {
            System.out.println("Department: " + deptName);
        }
    }
}

public class NestedClassDemo {
    public static void main(String[] args) {
        College.Department dept = new College.Department("AI & ML");
        dept.display();
    }
}`,
      output: `Department: AI & ML` },

    { title: "Employee Address — Nested Class", aim: "Demonstrate a static nested Address class associated with an Employee.",
      code: `class Employee {
    String name;

    static class Address {
        String city;
        String pincode;

        Address(String city, String pincode) {
            this.city = city;
            this.pincode = pincode;
        }

        void display() {
            System.out.println("City: " + city + ", Pincode: " + pincode);
        }
    }
}

public class EmployeeAddressDemo {
    public static void main(String[] args) {
        Employee.Address addr = new Employee.Address("Vijayawada", "520001");
        addr.display();
    }
}`,
      output: `City: Vijayawada, Pincode: 520001` },

    { title: "Student Address — Inner Class", aim: "Demonstrate a non-static inner Address class inside StudentAddressInner.",
      code: `class StudentAddressInner {
    String name = "Manikanta";

    class Address {
        String city = "Vijayawada";
        String state = "Andhra Pradesh";

        void display() {
            System.out.println("Student : " + name);
            System.out.println("City    : " + city);
            System.out.println("State   : " + state);
        }
    }
}

public class InnerClassDemo {
    public static void main(String[] args) {
        StudentAddressInner outer = new StudentAddressInner();
        StudentAddressInner.Address addr = outer.new Address();
        addr.display();
    }
}`,
      output: `Student : Manikanta
City    : Vijayawada
State   : Andhra Pradesh` },

    { title: "Library Management — Inner Class", aim: "Demonstrate an inner Book class inside a LibraryBookManager class.",
      code: `class LibraryBookManager {
    String libraryName = "Central Library";

    class Book {
        String title;
        String author;

        Book(String title, String author) {
            this.title = title;
            this.author = author;
        }

        void display() {
            System.out.println("Library: " + libraryName);
            System.out.println("Book   : " + title + " by " + author);
        }
    }
}

public class LibraryInnerClassDemo {
    public static void main(String[] args) {
        LibraryBookManager manager = new LibraryBookManager();
        LibraryBookManager.Book book = manager.new Book("Effective Java", "Joshua Bloch");
        book.display();
    }
}`,
      output: `Library: Central Library
Book   : Effective Java by Joshua Bloch` }
  ]
},

/* ---------------- WEEK 7 ---------------- */
{
  id: 7,
  title: "Strings, StringBuffer, StringTokenizer & Basic Inheritance",
  type: "programs",
  intro: "Five programs covering String handling classes and the fundamentals of inheritance.",
  programs: [
    { title: "String Constructors", aim: "Demonstrate different ways of creating and initializing String objects using String constructors, including literals, new String(), character arrays and byte arrays.",
      code: `public class StringConstructorsDemo {
    public static void main(String[] args) {
        String s1 = "Hello Java";                    // string literal
        String s2 = new String("Hello Java");        // using new keyword
        char[] charArray = {'J', 'a', 'v', 'a'};
        String s3 = new String(charArray);            // from character array
        byte[] byteArray = {72, 101, 108, 108, 111};
        String s4 = new String(byteArray);            // from byte array

        System.out.println("s1 (literal)    : " + s1);
        System.out.println("s2 (new String) : " + s2);
        System.out.println("s3 (char array) : " + s3);
        System.out.println("s4 (byte array) : " + s4);
    }
}`,
      output: `s1 (literal)    : Hello Java
s2 (new String) : Hello Java
s3 (char array) : Java
s4 (byte array) : Hello` },

    { title: "StringBuffer Class", aim: "Demonstrate mutable string operations using StringBuffer including append, insert, replace, delete and reverse.",
      code: `public class StringBufferDemo {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer("Java Programming");
        System.out.println("Original : " + sb);

        sb.append(" Language");
        System.out.println("Append   : " + sb);

        sb.insert(4, " SE");
        System.out.println("Insert   : " + sb);

        sb.replace(0, 4, "JAVA");
        System.out.println("Replace  : " + sb);

        sb.delete(0, 5);
        System.out.println("Delete   : " + sb);

        sb.reverse();
        System.out.println("Reverse  : " + sb);
    }
}`,
      output: `Original : Java Programming
Append   : Java Programming Language
Insert   : Java SE Programming Language
Replace  : JAVA SE Programming Language
Delete   : SE Programming Language
Reverse  : egaugnaL gnimmargorP ES` },

    { title: "StringTokenizer Class", aim: "Tokenize a sentence using StringTokenizer, display individual tokens, count the tokens and repeat the operation using a specified delimiter.",
      code: `import java.util.StringTokenizer;

public class StringTokenizerDemo {
    public static void main(String[] args) {
        String sentence = "Java is a powerful programming language";
        StringTokenizer st = new StringTokenizer(sentence);

        System.out.println("Tokens using default delimiter (space):");
        int count = 0;
        while (st.hasMoreTokens()) {
            System.out.println(st.nextToken());
            count++;
        }
        System.out.println("Total tokens: " + count);

        String data = "Manikanta,25EU02072,AI&ML,B";
        StringTokenizer st2 = new StringTokenizer(data, ",");
        System.out.println("\\nTokens using ',' delimiter:");
        while (st2.hasMoreTokens()) {
            System.out.println(st2.nextToken());
        }
    }
}`,
      output: `Tokens using default delimiter (space):
Java
is
a
powerful
programming
language
Total tokens: 6

Tokens using ',' delimiter:
Manikanta
25EU02072
AI&ML
B` },

    { title: "Basic Inheritance", aim: "Demonstrate basic inheritance by creating a child class that inherits methods from a parent class.",
      code: `class Parent {
    void display() {
        System.out.println("This method is from the Parent class");
    }
}

class Child extends Parent {
}

public class BasicInheritanceDemo {
    public static void main(String[] args) {
        Child c = new Child();
        c.display();   // inherited from Parent
    }
}`,
      output: `This method is from the Parent class` },

    { title: "Using super Keyword", aim: "Demonstrate the use of the super keyword to access parent class variables and methods.",
      code: `class Parent {
    int value = 100;

    void show() {
        System.out.println("Parent method, value = " + value);
    }
}

class Child extends Parent {
    int value = 200;

    void show() {
        super.show();      // calls Parent's method
        System.out.println("Child method, value = " + value);
        System.out.println("Parent's value using super: " + super.value);
    }
}

public class SuperKeywordDemo {
    public static void main(String[] args) {
        Child c = new Child();
        c.show();
    }
}`,
      output: `Parent method, value = 100
Child method, value = 200
Parent's value using super: 100` }
  ]
},

/* ---------------- WEEK 8 ---------------- */
{
  id: 8,
  title: "Inheritance, Overriding & Dynamic Method Dispatch",
  type: "programs",
  intro: "Ten programs exploring single, multilevel and dynamic-dispatch inheritance, with two applied case studies.",
  programs: [
    { title: "Single Inheritance", aim: "Demonstrate single inheritance using a Person superclass and Student subclass.",
      code: `class Person {
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void display() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

class Student extends Person {
    int rollNo;

    Student(String name, int age, int rollNo) {
        super(name, age);
        this.rollNo = rollNo;
    }

    void showRollNo() {
        System.out.println("Roll No: " + rollNo);
    }
}

public class SingleInheritanceDemo {
    public static void main(String[] args) {
        Student s = new Student("Manikanta", 19, 101);
        s.display();
        s.showRollNo();
    }
}`,
      output: `Name: Manikanta, Age: 19
Roll No: 101` },

    { title: "Using super Keyword", aim: "Demonstrate super for accessing superclass variables and methods.",
      code: `class Vehicle {
    String brand = "Generic Brand";

    void fuelType() {
        System.out.println("Runs on fuel");
    }
}

class Car extends Vehicle {
    String brand = "Toyota";

    void fuelType() {
        System.out.println("Runs on petrol/diesel");
    }

    void display() {
        System.out.println("Car brand     : " + brand);
        System.out.println("Vehicle brand : " + super.brand);
        fuelType();
        super.fuelType();
    }
}

public class SuperVariableMethodDemo {
    public static void main(String[] args) {
        Car c = new Car();
        c.display();
    }
}`,
      output: `Car brand     : Toyota
Vehicle brand : Generic Brand
Runs on petrol/diesel
Runs on fuel` },

    { title: "Multilevel Inheritance", aim: "Demonstrate multilevel inheritance using Person, Employee and Manager classes.",
      code: `class Person {
    String name;
    Person(String name) { this.name = name; }
}

class Employee extends Person {
    double salary;
    Employee(String name, double salary) {
        super(name);
        this.salary = salary;
    }
}

class Manager extends Employee {
    String department;
    Manager(String name, double salary, String department) {
        super(name, salary);
        this.department = department;
    }

    void display() {
        System.out.println("Name       : " + name);
        System.out.println("Salary     : " + salary);
        System.out.println("Department : " + department);
    }
}

public class MultilevelInheritanceDemo {
    public static void main(String[] args) {
        Manager m = new Manager("Arjun", 75000.0, "Operations");
        m.display();
    }
}`,
      output: `Name       : Arjun
Salary     : 75000.0
Department : Operations` },

    { title: "Method Overriding", aim: "Demonstrate method overriding using Animal, Dog and Cat classes.",
      code: `class Animal {
    void sound() {
        System.out.println("This animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {
    @Override
    void sound() {
        System.out.println("Cat meows");
    }
}

public class MethodOverridingDemo {
    public static void main(String[] args) {
        Animal a1 = new Dog();
        Animal a2 = new Cat();
        a1.sound();
        a2.sound();
    }
}`,
      output: `Dog barks
Cat meows` },

    { title: "Dynamic Method Dispatch", aim: "Demonstrate dynamic method dispatch using Shape as the superclass and Circle, Rectangle and Triangle as subclasses.",
      code: `class Shape {
    void area() {
        System.out.println("Area of shape is undefined");
    }
}

class Circle extends Shape {
    double radius = 5;
    void area() {
        System.out.println("Area of Circle: " + (Math.PI * radius * radius));
    }
}

class Rectangle extends Shape {
    double length = 6, width = 4;
    void area() {
        System.out.println("Area of Rectangle: " + (length * width));
    }
}

class Triangle extends Shape {
    double base = 8, height = 5;
    void area() {
        System.out.println("Area of Triangle: " + (0.5 * base * height));
    }
}

public class DynamicDispatchDemo {
    public static void main(String[] args) {
        Shape s;
        s = new Circle();
        s.area();
        s = new Rectangle();
        s.area();
        s = new Triangle();
        s.area();
    }
}`,
      output: `Area of Circle: 78.53981633974483
Area of Rectangle: 24.0
Area of Triangle: 20.0` },

    { title: "super with Method Overriding", aim: "Demonstrate super.display() to invoke the superclass implementation before displaying subclass details.",
      code: `class Employee {
    String name = "Manikanta";

    void display() {
        System.out.println("Employee name: " + name);
    }
}

class Manager extends Employee {
    String department = "AI & ML Research";

    @Override
    void display() {
        super.display();   // invoke superclass implementation first
        System.out.println("Department: " + department);
    }
}

public class SuperOverrideDemo {
    public static void main(String[] args) {
        Manager m = new Manager();
        m.display();
    }
}`,
      output: `Employee name: Manikanta
Department: AI & ML Research` },

    { title: "Multilevel Inheritance for Salary Calculation", aim: "Calculate total salary using Employee, Developer and SeniorDeveloper classes.",
      code: `class Employee {
    double basicSalary;
    Employee(double basicSalary) { this.basicSalary = basicSalary; }
    double calculateSalary() { return basicSalary; }
}

class Developer extends Employee {
    double projectAllowance;
    Developer(double basicSalary, double projectAllowance) {
        super(basicSalary);
        this.projectAllowance = projectAllowance;
    }
    double calculateSalary() { return super.calculateSalary() + projectAllowance; }
}

class SeniorDeveloper extends Developer {
    double leadershipBonus;
    SeniorDeveloper(double basicSalary, double projectAllowance, double leadershipBonus) {
        super(basicSalary, projectAllowance);
        this.leadershipBonus = leadershipBonus;
    }
    double calculateSalary() { return super.calculateSalary() + leadershipBonus; }
}

public class MultilevelSalaryDemo {
    public static void main(String[] args) {
        SeniorDeveloper sd = new SeniorDeveloper(40000, 8000, 12000);
        System.out.println("Total Salary: " + sd.calculateSalary());
    }
}`,
      output: `Total Salary: 60000.0` },

    { title: "Dynamic Method Dispatch for Bank Accounts", aim: "Demonstrate dynamic method dispatch using BankAccount, SavingsAccount and CurrentAccount.",
      code: `class BankAccount {
    double balance;
    BankAccount(double balance) { this.balance = balance; }
    double interestRate() { return 0; }
    void showInterest() {
        System.out.println("Interest earned: " + (balance * interestRate()));
    }
}

class SavingsAccount extends BankAccount {
    SavingsAccount(double balance) { super(balance); }
    @Override
    double interestRate() { return 0.04; }
}

class CurrentAccount extends BankAccount {
    CurrentAccount(double balance) { super(balance); }
    @Override
    double interestRate() { return 0.0; }
}

public class BankDynamicDispatchDemo {
    public static void main(String[] args) {
        BankAccount acc1 = new SavingsAccount(50000);
        BankAccount acc2 = new CurrentAccount(50000);

        acc1.showInterest();
        acc2.showInterest();
    }
}`,
      output: `Interest earned: 2000.0
Interest earned: 0.0` },

    { title: "Constructor Execution in Multilevel Inheritance", aim: "Demonstrate the order of constructor execution in multilevel inheritance.",
      code: `class A {
    A() {
        System.out.println("Constructor of class A");
    }
}

class B extends A {
    B() {
        System.out.println("Constructor of class B");
    }
}

class C extends B {
    C() {
        System.out.println("Constructor of class C");
    }
}

public class ConstructorOrderDemo {
    public static void main(String[] args) {
        C obj = new C();
    }
}`,
      output: `Constructor of class A
Constructor of class B
Constructor of class C` },

    { title: "Banking Application Using Inheritance", aim: "Develop a simple banking application using inheritance.",
      code: `class Account {
    String accHolder;
    double balance;

    Account(String accHolder, double balance) {
        this.accHolder = accHolder;
        this.balance = balance;
    }

    void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited: " + amount);
    }

    void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: " + amount);
        } else {
            System.out.println("Insufficient balance");
        }
    }

    void showBalance() {
        System.out.println("Account Holder: " + accHolder + ", Balance: " + balance);
    }
}

class SavingsAccount extends Account {
    double interestRate = 0.04;

    SavingsAccount(String accHolder, double balance) {
        super(accHolder, balance);
    }

    void addInterest() {
        double interest = balance * interestRate;
        balance += interest;
        System.out.println("Interest added: " + interest);
    }
}

public class BankingApplicationDemo {
    public static void main(String[] args) {
        SavingsAccount acc = new SavingsAccount("Manikanta", 20000);
        acc.showBalance();
        acc.deposit(5000);
        acc.withdraw(3000);
        acc.addInterest();
        acc.showBalance();
    }
}`,
      output: `Account Holder: Manikanta, Balance: 20000.0
Deposited: 5000.0
Withdrawn: 3000.0
Interest added: 880.0
Account Holder: Manikanta, Balance: 22880.0` }
  ]
},

/* ---------------- WEEK 9 ---------------- */
{
  id: 9,
  title: "Packages and Interfaces",
  type: "programs",
  intro: "Twelve programs covering user-defined packages, import styles, access control, CLASSPATH and interfaces.",
  programs: [
    { title: "Creating and Using a User-Defined Package", aim: "Create a user-defined package named mypackage containing a Student class, and access it from another Java program outside the package.",
      code: `// File: mypackage/Student.java
package mypackage;

public class Student {
    String name;
    int rollNo;

    public Student(String name, int rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }

    public void display() {
        System.out.println("Name: " + name + ", Roll No: " + rollNo);
    }
}

// File: TestPackage.java
import mypackage.Student;

public class TestPackage {
    public static void main(String[] args) {
        Student s = new Student("Manikanta", 101);
        s.display();
    }
}

// Compile : javac -d . mypackage/Student.java
// Compile : javac TestPackage.java
// Run     : java TestPackage`,
      output: `Name: Manikanta, Roll No: 101` },

    { title: "Importing Packages", aim: "Demonstrate different ways of importing and accessing classes (Student and Faculty) from a package named college, using both a specific import and a wildcard import.",
      code: `// File: college/Student.java
package college;
public class Student {
    public void show() { System.out.println("Inside Student class of college package"); }
}

// File: college/Faculty.java
package college;
public class Faculty {
    public void show() { System.out.println("Inside Faculty class of college package"); }
}

// File: ImportDemo.java  (specific import)
import college.Student;
import college.Faculty;

public class ImportDemo {
    public static void main(String[] args) {
        Student s = new Student();
        Faculty f = new Faculty();
        s.show();
        f.show();
    }
}

// File: WildcardImportDemo.java  (wildcard import)
import college.*;

public class WildcardImportDemo {
    public static void main(String[] args) {
        Student s = new Student();
        Faculty f = new Faculty();
        s.show();
        f.show();
    }
}`,
      output: `Inside Student class of college package
Inside Faculty class of college package

(Both ImportDemo and WildcardImportDemo produce this same output.)` },

    { title: "Packages and Member Access", aim: "Demonstrate the accessibility of public, private, protected and default members of a class from the same class, another class in the same package, and a class in a different package.",
      code: `// File: access/Demo.java
package access;

public class Demo {
    public int a = 1;
    private int b = 2;
    protected int c = 3;
    int d = 4;   // default access

    void showFromSameClass() {
        System.out.println("Same class    -> a:" + a + " b:" + b + " c:" + c + " d:" + d);
    }
}

// File: access/OtherClassSamePackage.java
package access;

public class OtherClassSamePackage {
    void access(Demo obj) {
        System.out.println("Same package  -> a:" + obj.a + " c:" + obj.c + " d:" + obj.d);
        // obj.b is not accessible here - 'b' is private to Demo
    }
}

// File: otherpackage/DifferentPackageClass.java
package otherpackage;
import access.Demo;

public class DifferentPackageClass extends Demo {
    void access() {
        System.out.println("Different pkg -> a:" + a + " c:" + c);
        // 'b' (private) and 'd' (default) are not accessible here
    }
}

// File: AccessModifierTest.java
import access.Demo;
import access.OtherClassSamePackage;
import otherpackage.DifferentPackageClass;

public class AccessModifierTest {
    public static void main(String[] args) {
        Demo d = new Demo();
        d.showFromSameClass();

        OtherClassSamePackage o = new OtherClassSamePackage();
        o.access(d);

        DifferentPackageClass dp = new DifferentPackageClass();
        dp.access();
    }
}`,
      output: `Same class    -> a:1 b:2 c:3 d:4
Same package  -> a:1 c:3 d:4
Different pkg -> a:1 c:3` },

    { title: "Demonstrate CLASSPATH", aim: "Demonstrate how Java uses the CLASSPATH to locate a user-defined package (utilities) containing a Calculator class, and access it from another program compiled and executed using the configured CLASSPATH.",
      code: `// File: utilities/Calculator.java
package utilities;

public class Calculator {
    public int add(int a, int b) { return a + b; }
    public int multiply(int a, int b) { return a * b; }
}

// File: ClasspathDemo.java
import utilities.Calculator;

public class ClasspathDemo {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println("Sum     : " + calc.add(15, 25));
        System.out.println("Product : " + calc.multiply(15, 25));
    }
}

// Commands used:
// javac -d C:\\myclasses utilities\\Calculator.java
// set CLASSPATH=C:\\myclasses;.
// javac ClasspathDemo.java
// java ClasspathDemo`,
      output: `Sum     : 40
Product : 375` },

    { title: "Package Containing Multiple Classes", aim: "Create and use a package named bank containing three classes — Account, Customer and Transaction — accessed together from a main class outside the package.",
      code: `// File: bank/Customer.java
package bank;
public class Customer {
    String name;
    public Customer(String name) { this.name = name; }
}

// File: bank/Account.java
package bank;
public class Account {
    Customer customer;
    public double balance;

    public Account(Customer customer, double balance) {
        this.customer = customer;
        this.balance = balance;
    }
}

// File: bank/Transaction.java
package bank;
public class Transaction {
    public void deposit(Account acc, double amount) {
        acc.balance += amount;
        System.out.println(acc.customer.name + " deposited " + amount);
        System.out.println("New balance: " + acc.balance);
    }
}

// File: BankPackageDemo.java
import bank.Account;
import bank.Customer;
import bank.Transaction;

public class BankPackageDemo {
    public static void main(String[] args) {
        Customer c = new Customer("Manikanta");
        Account acc = new Account(c, 10000.0);
        Transaction t = new Transaction();
        t.deposit(acc, 2500.0);
    }
}`,
      output: `Manikanta deposited 2500.0
New balance: 12500.0` },

    { title: "Defining and Implementing an Interface", aim: "Create an interface Shape containing a method area(), and implement it using Circle and Rectangle classes.",
      code: `interface Shape {
    double area();
}

class Circle implements Shape {
    double radius;
    Circle(double radius) { this.radius = radius; }
    public double area() { return Math.PI * radius * radius; }
}

class Rectangle implements Shape {
    double length, width;
    Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }
    public double area() { return length * width; }
}

public class InterfaceShapeDemo {
    public static void main(String[] args) {
        Shape s1 = new Circle(7);
        Shape s2 = new Rectangle(5, 6);

        System.out.println("Area of Circle    : " + s1.area());
        System.out.println("Area of Rectangle : " + s2.area());
    }
}`,
      output: `Area of Circle    : 153.93804002589985
Area of Rectangle : 30.0` },

    { title: "Implementing Multiple Interfaces", aim: "Demonstrate how a class can implement multiple interfaces, Printable and Showable, using a single Demo class.",
      code: `interface Printable {
    void print();
}

interface Showable {
    void show();
}

class Demo implements Printable, Showable {
    public void print() {
        System.out.println("Printable interface implemented");
    }
    public void show() {
        System.out.println("Showable interface implemented");
    }
}

public class MultipleInterfaceDemo {
    public static void main(String[] args) {
        Demo d = new Demo();
        d.print();
        d.show();
    }
}`,
      output: `Printable interface implemented
Showable interface implemented` },

    { title: "Interface-Based Polymorphism", aim: "Demonstrate polymorphism using an interface reference Vehicle, assigning objects of Car and Bike to it.",
      code: `interface Vehicle {
    void move();
}

class Car implements Vehicle {
    public void move() {
        System.out.println("Car moves on four wheels");
    }
}

class Bike implements Vehicle {
    public void move() {
        System.out.println("Bike moves on two wheels");
    }
}

public class InterfacePolymorphismDemo {
    public static void main(String[] args) {
        Vehicle v;
        v = new Car();
        v.move();
        v = new Bike();
        v.move();
    }
}`,
      output: `Car moves on four wheels
Bike moves on two wheels` },

    { title: "Variables in Interfaces", aim: "Demonstrate variables declared inside an interface named Constants (MAX_MARKS and PI), accessed from a class that implements the interface and directly using the interface name.",
      code: `interface Constants {
    int MAX_MARKS = 100;     // implicitly public, static, final
    double PI = 3.14159;
}

class Result implements Constants {
    void show() {
        System.out.println("Maximum marks : " + MAX_MARKS);
        System.out.println("Value of PI   : " + PI);
    }
}

public class InterfaceVariablesDemo {
    public static void main(String[] args) {
        Result r = new Result();
        r.show();

        // accessing directly using the interface name
        System.out.println("Direct access -> MAX_MARKS: " + Constants.MAX_MARKS + ", PI: " + Constants.PI);
    }
}`,
      output: `Maximum marks : 100
Value of PI   : 3.14159
Direct access -> MAX_MARKS: 100, PI: 3.14159` },

    { title: "Nested Interfaces", aim: "Demonstrate the concept of a nested interface Department declared inside an outer class University, implemented and used in another class.",
      code: `class University {
    interface Department {
        void deptName();
    }
}

class CSEDepartment implements University.Department {
    public void deptName() {
        System.out.println("Department: Computer Science and Engineering");
    }
}

public class NestedInterfaceDemo {
    public static void main(String[] args) {
        University.Department dept = new CSEDepartment();
        dept.deptName();
    }
}`,
      output: `Department: Computer Science and Engineering` },

    { title: "Interface Inheritance", aim: "Demonstrate inheritance between interfaces, where interface Dog extends interface Animal, and both methods are implemented in class Labrador.",
      code: `interface Animal {
    void eat();
}

interface Dog extends Animal {
    void bark();
}

class Labrador implements Dog {
    public void eat() {
        System.out.println("Labrador eats food");
    }
    public void bark() {
        System.out.println("Labrador barks loudly");
    }
}

public class InterfaceInheritanceDemo {
    public static void main(String[] args) {
        Labrador l = new Labrador();
        l.eat();
        l.bark();
    }
}`,
      output: `Labrador eats food
Labrador barks loudly` },

    { title: "Real-World Application Using Interfaces", aim: "Build a simple real-world payment system where different payment methods implement a common Payment interface.",
      code: `interface Payment {
    void pay(double amount);
}

class CreditCardPayment implements Payment {
    public void pay(double amount) {
        System.out.println("Paid Rs." + amount + " using Credit Card");
    }
}

class UpiPayment implements Payment {
    public void pay(double amount) {
        System.out.println("Paid Rs." + amount + " using UPI");
    }
}

public class PaymentSystemDemo {
    public static void main(String[] args) {
        Payment p1 = new CreditCardPayment();
        Payment p2 = new UpiPayment();

        p1.pay(2500.0);
        p2.pay(750.0);
    }
}`,
      output: `Paid Rs.2500.0 using Credit Card
Paid Rs.750.0 using UPI` }
  ]
}
];

/* ============================================================
   HELPERS
   ============================================================ */
function escapeHtml(str){
  return String(str)
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;');
}
function getWeek(id){ return WEEKS.find(w => w.id === Number(id)); }

/* ============================================================
   RENDERERS
   ============================================================ */
function renderHome(){
  let cards = WEEKS.map(w => {
    let count = w.type === 'programs' ? w.programs.length + ' programs'
      : w.type === 'install' ? w.programs.length + ' procedures'
      : w.type === 'table' ? 'comparative table'
      : 'no task assigned';
    return `<a class="week-card" href="#/week/${w.id}">
      <div class="wk-num">WEEK ${w.id}</div>
      <div class="wk-title">${escapeHtml(w.title)}</div>
      <div class="wk-count">${count}</div>
    </a>`;
  }).join('');

  return `
    <div class="cover">
      <div class="cover-eyebrow">${escapeHtml(STUDENT.subject)} · Laboratory Record</div>
      <h1>Every program, compiled and logged.</h1>
      <p>This record collects each lab exercise from installation to interfaces —
      the question asked, the code written, and the output it produced.</p>
      <div class="cover-stamp">RECORD<br>VERIFIED</div>
      <div class="cover-meta">
        <div><b>${escapeHtml(STUDENT.name)}</b>Name</div>
        <div><b>${escapeHtml(STUDENT.roll)}</b>Roll Number</div>
        <div><b>${escapeHtml(STUDENT.year)}</b>Year</div>
        <div><b>${escapeHtml(STUDENT.branch)} · Sec ${escapeHtml(STUDENT.section)}</b>Branch &amp; Section</div>
      </div>
    </div>
    <div class="week-grid">${cards}</div>
  `;
}

function renderProfile(){
  return `
    <div class="profile-card">
      <div class="profile-top">
        <div class="profile-photo" id="profilePhotoBox">
          <img src="assets/profile.png" alt="${escapeHtml(STUDENT.name)}"
            onerror="this.parentNode.innerHTML='Add<br>assets/profile.png';">
        </div>
        <div>
          <div class="profile-name">${escapeHtml(STUDENT.name)}</div>
          <div class="profile-role">${escapeHtml(STUDENT.subject)} Laboratory Record</div>
        </div>
      </div>
      <div class="profile-fields">
        <div class="p-field"><div class="p-label">Roll Number</div><div class="p-value">${escapeHtml(STUDENT.roll)}</div></div>
        <div class="p-field"><div class="p-label">Year</div><div class="p-value">${escapeHtml(STUDENT.year)}</div></div>
        <div class="p-field"><div class="p-label">Branch</div><div class="p-value">${escapeHtml(STUDENT.branch)}</div></div>
        <div class="p-field"><div class="p-label">Section</div><div class="p-value">${escapeHtml(STUDENT.section)}</div></div>
        <div class="p-field"><div class="p-label">Subject</div><div class="p-value">${escapeHtml(STUDENT.subject)}</div></div>
      </div>
    </div>
  `;
}

function renderWeekOverview(week){
  let crumbs = `<div class="crumbs"><a href="#/">Cover Page</a> / Week ${week.id}</div>`;
  let head = `<div class="page-head">${crumbs}<h1>Week ${week.id} — ${escapeHtml(week.title)}</h1>
    ${week.intro ? `<div class="subhead">${escapeHtml(week.intro)}</div>` : ''}</div>`;

  if(week.type === 'none'){
    return head + `<div class="note-card">${escapeHtml(week.note)}</div>`;
  }

  if(week.type === 'table'){
    let t = week.table;
    let thead = '<tr>' + t.headers.map(h=>`<th>${escapeHtml(h)}</th>`).join('') + '</tr>';
    let tbody = t.rows.map(r => '<tr>' + r.map(c=>`<td>${escapeHtml(c)}</td>`).join('') + '</tr>').join('');
    return head + `<div class="table-wrap"><table class="cmp"><thead>${thead}</thead><tbody>${tbody}</tbody></table></div>`;
  }

  // 'programs' or 'install'
  let list = week.programs.map((p, idx) => `
    <a href="#/week/${week.id}/program/${idx}">
      <span class="pi-num">${String(idx+1).padStart(2,'0')}</span>
      <span class="pi-title">${escapeHtml(p.title)}</span>
    </a>`).join('');

  return head + `<div class="prog-index">${list}</div>`;
}

function renderProgram(week, idx){
  const p = week.programs[idx];
  const isLast = idx === week.programs.length - 1;
  const isFirst = idx === 0;
  const tagLabel = week.type === 'install' ? 'Procedure' : 'Program';

  let crumbs = `<div class="crumbs"><a href="#/">Cover Page</a> / <a href="#/week/${week.id}">Week ${week.id}</a> / ${tagLabel} ${idx+1}</div>`;

  let body;
  if(week.type === 'install'){
    let steps = p.steps.map(s => `<li>${escapeHtml(s)}</li>`).join('');
    body = `
      <div class="block">
        <h3>Installation Steps</h3>
        <ol class="steps">${steps}</ol>
      </div>
      <div class="block">
        <h3>Verify Installation</h3>
        <pre class="code">${escapeHtml(p.verifyCode)}</pre>
      </div>
      <div class="block">
        <h3>Sample Output</h3>
        <pre class="output">${escapeHtml(p.verifyOutput)}</pre>
      </div>`;
  } else {
    body = `
      <div class="block">
        <h3>Program</h3>
        <pre class="code">${escapeHtml(p.code)}</pre>
      </div>
      <div class="block">
        <h3>Output</h3>
        <pre class="output">${escapeHtml(p.output)}</pre>
      </div>`;
  }

  let nav = `<div class="prog-nav">
    ${!isFirst ? `<a href="#/week/${week.id}/program/${idx-1}">← Previous</a>` : `<span></span>`}
    <span class="spacer"></span>
    ${!isLast ? `<a href="#/week/${week.id}/program/${idx+1}">Next →</a>` : `<a href="#/week/${week.id}">Back to Week ${week.id} →</a>`}
  </div>`;

  return `${crumbs}
    <div class="prog-card">
      <div class="prog-card-head">
        <div class="tag">${tagLabel} ${idx+1} of ${week.programs.length}</div>
        <h2>${escapeHtml(p.title)}</h2>
        <div class="aim">${escapeHtml(p.aim)}</div>
      </div>
      ${body}
      ${nav}
    </div>`;
}

/* ============================================================
   ROUTER
   ============================================================ */
function parseHash(){
  let h = location.hash.replace(/^#/, '');
  if(h === '' || h === '/') return { route: 'home' };
  let parts = h.split('/').filter(Boolean);
  if(parts[0] === 'profile') return { route: 'profile' };
  if(parts[0] === 'week' && parts[1]){
    if(parts[2] === 'program' && parts[3] !== undefined){
      return { route: 'program', week: parts[1], idx: Number(parts[3]) };
    }
    return { route: 'week', week: parts[1] };
  }
  return { route: 'home' };
}

function render(){
  const info = parseHash();
  const content = document.getElementById('content');
  let html = '';
  let activeWeek = null, activeProg = null, activeRoute = info.route;

  if(info.route === 'home'){
    html = renderHome();
  } else if(info.route === 'profile'){
    html = renderProfile();
  } else if(info.route === 'week'){
    const w = getWeek(info.week);
    if(!w){ html = renderHome(); activeRoute = 'home'; }
    else { html = renderWeekOverview(w); activeWeek = w.id; }
  } else if(info.route === 'program'){
    const w = getWeek(info.week);
    if(!w || !w.programs || !w.programs[info.idx]){ html = renderHome(); activeRoute = 'home'; }
    else { html = renderProgram(w, info.idx); activeWeek = w.id; activeProg = info.idx; }
  }

  content.innerHTML = html;
  window.scrollTo(0,0);
  updateSidebar(activeRoute, activeWeek, activeProg);
  closeMobileNav();
}

/* ============================================================
   SIDEBAR
   ============================================================ */
function buildSidebar(){
  const nav = document.getElementById('weekNav');
  nav.innerHTML = WEEKS.map(w => {
    let hasList = (w.type === 'programs' || w.type === 'install');
    let progLinks = hasList ? w.programs.map((p, idx) =>
      `<a class="prog-link" data-week="${w.id}" data-idx="${idx}" href="#/week/${w.id}/program/${idx}">${idx+1}. ${escapeHtml(p.title)}</a>`
    ).join('') : '';

    return `<div class="week-block" data-week-block="${w.id}">
      <div class="week-head" data-week="${w.id}">
        <span>Week ${w.id}</span>
        ${hasList ? '<span class="chev">▶</span>' : ''}
      </div>
      ${hasList ? `<div class="week-programs">${progLinks}</div>` : ''}
    </div>`;
  }).join('');

  nav.querySelectorAll('.week-head').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.getAttribute('data-week');
      const block = nav.querySelector(`.week-block[data-week-block="${id}"]`);
      const alreadyOpen = block.classList.contains('open');
      nav.querySelectorAll('.week-block').forEach(b => b.classList.remove('open'));
      if(!alreadyOpen) block.classList.add('open');
      location.hash = `#/week/${id}`;
    });
  });
}

function updateSidebar(route, weekId, progIdx){
  document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
  document.querySelectorAll('.week-head').forEach(a => a.classList.remove('active'));
  document.querySelectorAll('.prog-link').forEach(a => a.classList.remove('active'));
  document.querySelectorAll('.week-block').forEach(b => b.classList.remove('open'));

  if(route === 'home') document.querySelector('.nav-link[data-route="home"]').classList.add('active');
  if(route === 'profile') document.querySelector('.nav-link[data-route="profile"]').classList.add('active');

  if(weekId != null){
    const head = document.querySelector(`.week-head[data-week="${weekId}"]`);
    if(head){
      head.classList.add('active');
      const block = document.querySelector(`.week-block[data-week-block="${weekId}"]`);
      if(block) block.classList.add('open');
    }
  }
  if(progIdx != null){
    const link = document.querySelector(`.prog-link[data-week="${weekId}"][data-idx="${progIdx}"]`);
    if(link) link.classList.add('active');
  }
}

/* ============================================================
   MOBILE NAV + THEME
   ============================================================ */
function closeMobileNav(){
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
}
function initChrome(){
  document.getElementById('navToggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('overlay').classList.add('show');
  });
  document.getElementById('overlay').addEventListener('click', closeMobileNav);

  const themeBtn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('jr-theme');
  if(saved === 'dark') document.documentElement.setAttribute('data-theme','dark');
  themeBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if(isDark){
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('jr-theme','light');
    } else {
      document.documentElement.setAttribute('data-theme','dark');
      localStorage.setItem('jr-theme','dark');
    }
  });
}

/* ============================================================
   INIT
   ============================================================ */
buildSidebar();
initChrome();
window.addEventListener('hashchange', render);
render();
