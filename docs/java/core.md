---
sidebar_position: 2
---

# Core Java

Below notes are based on the book *OCP Oracle Certified Professional Java SE 17 Developer Study Guide*

## Building Blocks

### Environment
1. `JDK`: Java Development Kit
    - `javac`: Convert .java (source file) into .class (bytecode)
    - `java`: Execute
    - `jar`: Package
    - `javadoc`: Document
1. `JRE`: Java Runtime Environment
    - subset of JDK
    - could not compile
1. `IDE`: Integrated Development Environment

### Class Structure
#### Fields and Methods
1. Methods
    - a.k.a. functions / procedures in other languages
1. Fields
    - variables
1. Methods and Fields are **members** of the class.
1. void
    - special return type
    - no value at all is returned
1. Method name and parameter types are called the **method signature**.
#### Classes and Source Files
1. Class is the top level type
1. You can put two or more classes in a file
1. At most one of the top level type is allowed to be public
1. If you have a public top level type, it must match the filename
#### main() method
1. main() method for execution of the program
    ```
    public static void main(String[] args)
    public static void main(String args[])
    public static void main(String... args)
    final public static void main(String... args)
    ```
    - public as access modifier
    - static as no object is created
    - ... are called `varargs` variable argument lists
1. Compile and execute as follow
    ```
    javac Test.java
    java Test    
    ```
1. File must have extention .java
1. Result of compilation is .class file
1. Shortcut for single file source code
    ```
    java Test.java
    ```
    - Skip explicit compilation steps
    - This feature is called launching single-file source code programs
    - This feature is designed for when your program is one file
### Packages and Imports
1. Packages is the logical grouping for classes
1. Package name are hierarchical, separated by period (.)
1. Directory structure is related to the package name
1. Use import statement to tell Java which package to look in for classes
1. You can import all the classes of package with wildcard *
1. Wildcard can help shorten import list
1. Import a lot of classes will not slow down execution time. So don't worry.
1. Below are import limitations
    - wildcard can only match class names, but not directory/paths
    - can only have 1 wildcard, and it must be placed at the end
    - can only match class names, not method
1. Naming conflicts
    - Class names don't have to be unique across all of Java
    - The class name you imported are therefore can be found in multiple places
    - Explicitly importing a class name will take precedence over any wildcard present
        ```
        import java.util.Date; // This will win
        import java.sql.*;
        ```
    - In case you need a class name, e.g. Date, from 2 different packages, use *fully qualified class name*
        ```
        java.util.Date utilDate;
        java.sql.Date sqlDate;
        ```
### Compilation, Execution and JAR files
1. You can compile as below
    ```
    javac org/irushu/test/Test.java
    javac org/irushu/test/*.java
    javac *.java // This won't compile the source file in package org.irush.test
    ```
1. You can compile and placed the class files in different directory
    ```
    javac -d classes org/irushu/test/Test.java
    ```
1. You can specify the classpath for needed libraries to compile the program
1. You can specify the classpath and run the program
    ```
    java -cp classes org.irushu.test.Test
    java -classpath classes org.irushu.test.Test
    java --class-path classes org.irushu.test.Test
    ```
1. You can create jar file as below
    ```
    jar -cvf test.jar .
    jar -cvf test.jar -C classes . // -C specify the location that contains the class files
    jar --create --verbose --file test.jar .
    ```
### Ordering elements in a class
- Order as below
    1. Package declaration
    1. Import statement
    1. Top level type declaration (Class / Interface / Enum)
    1. Field declaration
    1. Method declaration
### Creating Objects
1. You can define Constructor for later creation of objects
    ```
    public class Test{
        public Test(){

        }
    }
    ```
1. Constructor does not have return type
1. If you don't specify a constructor, compiler will supply a do nothing default constructor for you
1. You can create object with new keyword
    ```java
    Test test = new Test();
    ```
1. One can read and write instance variables directly from the caller. However, one should honour encapsulation and protect instance variables with access modifier.
    ```java
    public class Test{
        String helloWorld = "Hello World";
        public static void main(String... args){
            Test test = new Test();
            test.helloWorld = "Happy Valley";
        }
    }
    ```
1. You can define **Instance initializer** as below
    ```
    public class Test{
       {
        System.out.println("Test");
        }
    }
    ```
1. Order of execution
    - Fields and Instance Initializer run in the order they appeared in the file
    - Constructor
1. Order matters and you can't refer to a variable before it has been defined
### Data Types
1. 8 primitive types
    - byte (8), short (16), int (32), long (64)
        - signed
        - each numeric type is twice the size as the smaller similar type
    - float (32), double (64)
        - signed
        - each decimal type is twice the size as the smaller similar type
    - char (8)
        - unsigned
        - short and char values can be casted to one another as the underlying data size is the same
    - boolean 
        - bit size depends on JVM implementation
1. By default java interprets numeric value as int if l or L is not specified for long type.
1. By default java interprets decimal value as double if f or F is not specified for float type.
1. When a number is present in the code, it is called a **literal**.
1. One can specify a number by **changing base**. By default it is using decimal number system.
    - octal (0-7): 017
    - Hexadecimal (0-9 a-f A-F): 0xFF
    - Binary (0-1): 0B101
1. You can have underscores in numbers. 
    ```java
    int value = 1_000_000;
    ```
1. You cannot have underscore at the beginning or end of a literal, or right before or after a decimal point.
    ```java
    double a = _1000.00;          // CANNOT COMPILE
    double b = 1000.00_;          // CANNOT COMPILE
    double c = 1000._00;          // CANNOT COMPILE
    double d = 1000_.00;          // CANNOT COMPILE
    ```