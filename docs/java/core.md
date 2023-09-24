---
sidebar_position: 2
---

# Core Java

Below notes are based on the book *OCP Oracle Certified Professional Java SE 17 Developer Study Guide*.

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
    - no value at all is returned.
1. Method name and parameter types are called the **method signature**.
#### Classes and Source Files
1. Class is the top level type.
1. You can put two or more classes in a file.
1. At most one of the top level type is allowed to be public.
1. If you have a public top level type, it must match the filename.
#### main() method
1. main() method is for execution of the program.
    ```java
    public static void main(String[] args)
    public static void main(String args[])
    public static void main(String... args)
    final public static void main(String... args)
    ```
    - public is an access modifier.
    - static as no object is created.
    - ... are called `varargs` variable argument lists.
1. Compile and execute as follow:
    ```
    javac Test.java
    java Test    
    ```
1. File must have extention .java.
1. The result of compilation is .class file, which is bytecode.
1. Shortcut for single file source code.
    ```
    java Test.java
    ```
    - Skip explicit compilation steps.
    - This feature is called **launching single-file source code** programs.
    - This feature is designed for when your program is one file.
### Packages and Imports
1. Packages is the logical grouping for classes.
1. Package name are hierarchical, separated by period (.).
1. Directory structure is related to the package name.
1. Import statement tells Java which package to look in for classes.
1. You can import all the classes of package with wildcard *.
1. Wildcard can help shorten import list.
1. Importing a lot of classes will not slow down execution time.
1. Below are limitations for import.
    - wildcard can only match class names, but not directory / paths.
    - There can only be 1 wildcard, and it must be placed at the end.
    - Import can only be used to match class names, not methods.
1. Naming conflicts
    - Class names don't have to be unique across all of Java.
    - The class name you imported are therefore can be found in multiple places.
    - Explicitly importing a class name will take precedence over any wildcard present.
        ```
        import java.util.Date; // This will win
        import java.sql.*;
        ```
    - In case you need a class name from 2 different packages, use *fully qualified class name* to declare the fields.
        ```
        java.util.Date utilDate;
        java.sql.Date sqlDate;
        ```
### Compilation, Execution and JAR files
1. You can compile as below.
    ```
    javac org/irushu/test/Test.java
    javac org/irushu/test/*.java
    javac *.java // This won't compile the source file in package org.irush.test
    ```
1. You can use **-d** to place class files in a different directory.
    ```
    javac -d classes org/irushu/test/Test.java
    ```
1. You can specify the classpath for required libraries to compile the program.
1. You can specify the classpath and run the program.
    ```
    java -cp classes org.irushu.test.Test
    java -classpath classes org.irushu.test.Test
    java --class-path classes org.irushu.test.Test
    ```
1. You can create jar file as below.
    ```
    jar -cvf test.jar .
    jar -cvf test.jar -C classes . // -C specify the location that contains the class files
    jar --create --verbose --file test.jar .
    ```
### Ordering elements in a class
- Elements should be ordered in a class as below.
    1. Package declaration
    1. Import statement
    1. Top level type declaration (Class / Interface / Enum)
    1. Field declaration
    1. Method declaration

### Creating Objects
1. You can define **constructor** for creation of objects.
2. Below is an example of constructor. Note it does not have return type.
    ```java
    public class Test{
        public Test(){
            // do something
        }
    }
    ```
1. If you don't provide a constructor, compiler will supply a do nothing default constructor for you.
1. You can create object with the **new** keyword.
    ```java
    Test test = new Test();
    ```
1. One can read and write instance variables directly from the caller. 
    ```java
    public class Test{
        String helloWorld = "Hello World";
        public static void main(String... args){
            Test test = new Test();
            test.helloWorld = "Happy Valley";
        }
    }
    ```
1. However, one should honour encapsulation and protect instance variables with access modifier.
1. One can define **Instance initializer** as below.
    ```java
    public class Test{
       {
            System.out.println("Test");
       }
    }
    ```
1. Order of execution
    - Fields and Instance Initializer run in the order they appeared in the file.
    - Constructor
1. Order matters and you can't refer to a variable before it has been defined.

### Primitive Type and Literals
1. 8 primitive types
    - byte (8), short (16), int (32), long (64)
        - Signed
        - Each numeric type is twice the size as the smaller similar type.
    - float (32), double (64)
        - Signed
        - Each decimal type is twice the size as the smaller similar type.
    - char (8)
        - Unsigned
        - short and char values can be casted to one another as their underlying data size is the same.
    - boolean 
        - bit size depends on JVM implementation
1. When a number, decimal, String or character is present in the code, they are called **literals**.
1. By default java interprets numeric value as int.
1. To specify the numeric literal as long, add l or L at the end of it.
1. By default java interprets decimal value as double.
1. To specify the decimal literal as float, add f or F at the end of it.
1. One can specify a number by **changing base**. By default it is using decimal number system.
    ```java
    int a = 017; // Octal (0-7)
    int b = 0xFF; // Hexadecimal (0-9 a-f A-F)
    int c = 0B101; // Binary (0-1)
    System.out.println(a); // Print 15
    System.out.println(b); // Print 255
    System.out.println(c); // Print 5
    ```
1. You can put underscores in numbers. 
    ```java
    int value = 1_000_000;
    ```
1. You cannot put underscore at the beginning or end of a literal, or right before or after a decimal point.
    ```java
    double a = _999.00; // CANNOT COMPILE
    double b = 999.00_; // CANNOT COMPILE
    double c = 999._00; // CANNOT COMPILE
    double d = 999_.00; // CANNOT COMPILE
    ```
### Reference Type
1. A **reference type** refers to an object.
1. A **reference** “points” to an object by storing the memory address where the object is located.
1. A reference is like a **pointer**.
1. A reference can be assigned to another object.
1. A reference can be assigned to new object.
### Primitive type vs Reference type
1. Primitive types have lowercase type names.
1. Reference types have uppercase type names.
1. Reference types can be used to call methods.
1. Primitive types do not have methods declared on them.
1. If primitive types are unknown, assign null to their wrapper class.
### Wrapper Class
1. valueOf to convert to wrapper class.
    ```java
    Integer a = Integer.valueOf("456"); // Wrapper
    int b = Integer.parseInt("789"); // Primitive
    ```
1. Number classes, Boolean and Character Wrapper classes have userful helper methods:
    - byteValue(), shortValue(), intValue(), longValue()
    - floatValue(), doubleValue()
    - booleanValue()
    - charValue()
1. Helper classes do their best to convert values but can result in a loss of precision.
### Text Block
1. **"""** as Start text block and End text block.
1. Incidental whitespace
1. Essential whitespace
1. Escape characters
### Declaring Variables
1. Identifiers must begin with letter, a currency symbol or undercore symbol _ .
1. Currency symbol includes dollar ($), yuan (¥), euro (€).
1. A single underscore is not allowed.
1. Cannot use reserve word.
1. Cannot use literal values like true, false or null.
### Case convention
1. Method or Field names are declared as lowercase camel case.
1. Constants or enum values are declared as uppercase snake case.
1. Class and Interface names are declared as uppercase camel case.