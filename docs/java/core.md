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
#### Field and Method
1. **Method**: a.k.a. function / procedure in other languages
1. **Field**: a.k.a variable
1. Method and Field are **Member** of the class.
1. `void`
    - special return type
    - no value is returned
1. Method name and parameter types are called the **Method Signature**.
#### Classes and Source Files
1. **Class** is a **top level type**.
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
    - `public` is an access modifier.
    - `static` is used as no object need to be created to execute the program.
    - `...` is called `varargs` variable argument lists.
1. Compile and run the program with command below:
    ```
    javac Test.java
    java Test    
    ```
1. File must have extention .java.
1. The result of compilation is .class file, i.e. bytecode.
1. Shortcut for running single file source code.
    ```
    java Test.java
    ```
    - Skip explicit compilation step.
    - This feature is called **launching single-file source code** programs.
    - This feature is designed for when your program is one file.
### Package and Import
1. Package is the logical grouping for classes.
1. Package name is hierarchical, separated by period ( . ).
    ```java
    package org.irushu;
    ```
1. Directory structure is related to the package name.
1. Import statement tells which package to look in for classes.
    ```java
    import org.irushu.MyClass;
    ```
1. Use **wildcard** to import all the classes of a package.
    ```java
    import org.irushu.*;
    ```
1. Wildcard can help shorten import list.
1. Importing a lot of classes will not slow down execution time.
1. Below are limitations for import statements.
    - Wildcard can only match class names, but it cannot match directories or subdirectories.
    - There can only be 1 wildcard, and it must be placed at the end.
    - Import statement can only be used to match class names. It cannot match methods or fields.
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
1. **java.lang** are automatically imported.
1. Classes in the same package do not need to be imported.
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

### Creating objects
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
1. There are 8 primitive types.
    - **byte** (8), **short** (16), **int** (32), **long** (64)
        - Signed
        - Each numeric type is twice the size as the smaller similar type.
    - **float** (32), **double** (64)
        - Signed
        - Each decimal type is twice the size as the smaller similar type.
    - **char** (8)
        - Unsigned
        - short and char values can be casted to one another as their underlying data size is the same.
    - **boolean**
        - bit size depends on JVM implementation
1. When a number, decimal, String or character is present in the code, they are called **literals**.
1. By default java interprets numeric value as int.
1. To specify the numeric literal as long, add l or L at the end of it.
1. By default java interprets decimal value as double.
1. To specify the decimal literal as float, add f or F at the end of it.
    ```java
    // This will error
    float a = 2.0; // Cannot compile
    # highlight-next-line
    float b = 2.0f;
    ```
1. Although float values can be declared with an f suffix, they are not printed with an f suffix.
    ```java
    float b = 2.0f;
    System.out.println(b); // It will print 0.0
    ```
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
    // This will error
    double a = _999.00; // CANNOT COMPILE
    // This will error
    double b = 999.00_; // CANNOT COMPILE
    // This will error
    double c = 999._00; // CANNOT COMPILE
    // This will error
    double d = 999_.00; // CANNOT COMPILE
    ```
### Reference Type
1. A **reference type** refers to an object.
1. A **reference** “points” to an object by storing the memory address where the object is located.
1. A reference is like a **pointer**.
1. A reference can be assigned to another object.
1. A reference can be assigned to new object.
### Primitive Type vs Reference Type
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
### Declaring variables
1. Identifiers must begin with letter, a currency symbol or undercore symbol _ .
1. Currency symbol includes dollar ($), yuan (¥), euro (€).
1. A single underscore is not allowed.
1. Cannot use reserve word.
1. Cannot use literal values like true, false or null.
### Case convention
1. Method or Field names are declared as **lowercase camel** case.
1. Constants or enum values are declared as **uppercase snake** case.
1. Class and Interface names are declared as **uppercase camel** case.
### Declaring multiple variables
```java
String str1, str2, str3="Foo";
// This will error
int int1, float float1; // There can only be one type of declaration in a statement.
// This will error
String str4, String str5; // You cannot repeat the same declaration in a statement, even they are the same.
double double1; double double2; // Semicolon separates statements, so there is no violation.
// This will error
boolean boolean1; boolean2; Invalid declaration for boolean 2 as type is omitted.
```
1. You can declare many variables in the same declaration as long as they are all of the same type.
1. You cannot repeat the same declaration.
1. There can only be one declaration, no other declaration can be made.
### Initializing variables
1. **Local variable** is a variable defined within a constructor, method, or initializer block.
1. `final` modifier is equivalent to declaring constants.
1. `final` modifier can apply to local variable.
1. For `final` variable of primitive type, you cannot change its value once it is initiailized.
1. For `final` variable of reference type, you cannot change the reference, but you can modify the content the reference points to.
1. Local variables do not have **default value**.
1. Local variables must be initialized before use.
1. For local variables that have never be used, compiler doesn't care if they are not initialized.
1. Compiler is clever enough to determine whether the local variable has been used or not.
1. If you pass uninitialized parameters to constructor or method, the program will fail to compile.
1. **Instance variable** is a field defined within a specific instance of object.
1. **Class variable** is defined on the class level and shared among all instances of the class.
1. Both instance and class variables are given a default value once declared. You don't need to initialize them.
1. Initialization of instance and class variables sticks to below rules.
    - null for an object
    - 0 for numeric types
    - 0.0 for decimal types
    - false for boolean
    - '\u000' for char
1. Java does not support setting default method parameter values.
    ```java
        // This will error
        public void method(int hello = 3){
        }
    ```
### Using var for local variable
1. You can use keyword `var` to declare local variables under certain circumstances.
1. This feature is called **local variable type inference**.
1. `var` is **only** used for **local variables**.
1. `var` will instruct the compiler to determine the type.
1. In javascript, `var` can take on any type.
1. But in java, compiler will determine the specific type for `var`. The type cannot be changed during runtime.
1. `var` variable cannot be initialized to null during declaration. Compiler cannot infer its type.
1. If the underlying type is a reference type, `var` variable can be reassigned with null value after declaration.
1. `var` cannot be used in multiple variable assignment.
1. For `var`, compiler will look only at the line of declaration. variable must be assigned values on the lines where they are defined.
    ```java
    void methodA(){
        var a = "String A";
        var b
            = 5;
        // This will error
        var c; // var variable is not assigned with values on the same line they are declared.
        c = 1;
        // This will error
        var d = null; // compiler cannot infer the type
        var e = "String B";
        e = null;
        // This will error  
        var f = 2, g = 2; // var cannot be used in multiple variable assignment
    }
    ```
1. `var` cannot be used on method parameters.
   ```java
    // This will error
    void methodB(var a, var b){
    
    }
   ```
1. `var` is not a reserved word and allowed to be used as an identifier.
    ```java
    void methodC(){
        {/* highlight-start */}
        var var = "hello"; // This will compile
        {/* highlight-end */}
    }
    ```
### Variable scope
1. A set of braces means a new code block.
1. Each code block has its own scope.
1. Code block can contain another code block. 
1. Inner block can reference variables of outer block, but not vice versa.
1. Scope for different type of varibles
    - Local variable: In scope from declaration to the end of the block.
    - Method parameters: In scope for the duration of the method.
    - Instance variable: In scope from declaration until the object is eligible for gc.
    - Class variable: In scope from declaration to end of the program.
### Garbage collection
1. For details, refers to [JVM section](jvm.md).
1. System.gc() is not guranteed to do anything. JVM can ignore it.

## Operators
1. An **operator** is a special symbol or operation that can be applied to operands.
1. An **operand** is the variable / literal / value the operator being applied to.
1. **unary**, **binary** and **tenary** operator take 1, 2 and 3 operand(s) respectively.
1. Evaluation can be **left-to-right** or **right-to-left**.
1. Some operators require the operand of specific type.
### Order of operator precedence
1. Operator should follow below orders

    | Operator                        | Symbols                                            | Evaluation    |
    |---------------------------------|----------------------------------------------------|---------------|
    | Post-unary operators            | expression++, expression--                         | LR |
    | Pre-unary operators             | ++expression, --expression                         | LR |
    | Other unary operators           | -, !, ~, +, (type)                                 | Right-to-left |
    | Cast	(Type)                    | reference                                          | Right-to-left |
    | Multiplication/division/modulus | *, /, %                                            | LR |
    | Addition/subtraction            | +, -                                               | LR |
    | Shift operators                 | <<, >>, >>>                                        | LR |
    | Relational operators            | <, >, <=, >=, instanceof                           | LR |
    | Equal to/not equal to           | ==, !=                                             | LR |
    | Logical AND                     | &                                                  | LR |
    | Logical exclusive OR            | ^                                                  | LR |
    | Logical inclusive OR            | \|                                                 | LR |
    | Conditional AND                 | &&                                                 | LR |
    | Conditional OR                  | \|\|                                               | LR |
    | Ternary operators               | boolean expression ? expression1 : expression2     | Right-to-left |
    | Assignment operators            | =, +=, -=, *=, /=, %=, &=, ^=, \|=, <<=, >>=, >>>= | Right-to-left |

### Unary Operators
1. Requires exactly one operand to function.

    | Operator             | Examples   | Description                                                       |
    |----------------------|------------|-------------------------------------------------------------------|
    | Logical complement   | !a         | Inverts a boolean's logical value                                 |
    | Bitwise complement   | ~b         | Inverts all 0s and 1s in a number                                 |
    | Plus                 | +c         | Indicates a number is positive                                    |
    | Negation or minus    | -d         | Indicates a literal number is negative or negates an expression   |
    | Increment            | ++e f++    | Increments a value by 1                                           |
    | Decrement            | --f h--    | Decrements a value by 1                                           |
1. **Bitwise complement operator ( ~ )** flips all 0s and 1s in a number. 
1. Bitwise complement operator can apply only on byte, short, int, long, char.
1. You can use the formula `bitwise complement = -1 * number value -1` to calculate the result for bitwise complement operation.
1. **Negation operator ( - )** reverses the sign of numeric expression.
1. Negation operator can apply only on numeric expression.
1. **Increment and decrement operators ( ++ -- )** can apply only on numeric variable.
1. The order on how Increment and decrement operators attached to the variable can change the behavior.
    - **++x / --y**: increase / decrease by 1 and return the **new value**.
    - **x++ / y--**: increase / decrease by 1 but return the **original value**.
    ```java
    int a = 1;
    System.out.println(++a); // print 2
    System.out.println(a++); // print 2
    System.out.println(a); // print 3
    ```
### Binary Arithemtic Operators
1. Addition: `a + b`
1. Subtraction: `a - b`
1. Multiplication: `a * b`
1. Division: `a / b`
1. Modulus: `a % b`
1. Arithmetic operators can apply on all primitives, except boolean.
1. Addition operators ( + ) can apply on String for concatenation.
1. You can change the precedence by wrapping with **parentheses**.
1. Parentheses should be applied in a *valid* and *balanced* manner.
    - A new right parentheses match with a previous left parentheses
    - Equal number of left and right parentheses
1. For **integer** values, **division** results in the **floor value** (value without anything after the decimal point) of the nearest integer that fulfills the operation.
    ```java
    System.out.println(13 / 4); // Prints 3
    ```
### Numeric Promotion
1. Numeric Promotion rules
    - If two values have different data types, promote one of the values to the larger of the two data types.
        ```java
        int a = 1;
        long b = 2;
        var c = a + b; // a will be promoted to long. c will be long.
        ```
    - If one is integral and the other is floating-point, promote the integral value to the floating-point value's data type.
        ```java
        int a = 1;
        float b = 2.1f;
        var c = a + b; // a will be promoted to float. c will be float.
        ```
    - Smaller data types, namely, byte, short, and char, are first promoted to int, even if neither of the operands is int. 
        ```java
        byte a = 1;
        short b = 2;
        var c = a + b; // a and b will be promoted to int. c will be int.
        ```
        - Unary operators are **excluded** from this rule.
    - Resulting value will have the same data type as its promoted operands.
1. Be aware of the data type of variables, intermediate values, and resulting values
### Assignment Operator
1. Binary operator that assigns variable on the left side with the result of the equation on the right side.
1. Promotion rule and Casting will occur during assignment.
1. Automatically promote from smaller to larger data type.
1. Compilation error occurs if you try to promote from larger to smaller data type without casting.
1. Casting is a unary operation.
1. Compiler automatically casts smaller types to larger ones.
1. Casting is required when converting to smaller data type.
1. Casting is performed by placing the data type, enclosed in parentheses, to the left of the value you want to cast.
    ```java
    short a = (short) 10;
    ```
1. Casting can also be applied to object and reference.
1. No conversion is performed for casting of object / reference.
1. Casting an object only change the reference of the object, not the object itself.
1. **Overflow** is when a number is so large that it will no longer fit within the data type, so the system “wraps around” to the lowest negative value and counts up from there.
1. **Underflow** is analogy to overflow when the number is too low to fit in the data type.
1. **Casting** can appear anywhere in an expression, not just an assignment.
1. Compiler **doesn't require casting when working with literals** that fit into data types.
    ```java
    byte a = 1;
    // This will error
    byte b = (byte) a * 2; // Because a is involved in the multiplication, third promotion rule applys, and a is casted to int during multiplication.
    # highlight-next-line
    byte c = 10 * 2; // Doesn't require casting
    // This will error
    byte d = 100 * 200; // Overflow occurs and compilers report error
    // This will error
    int e = 2 * 5.0;
    // This will error
    float f = 2 * 5.0;
    # highlight-next-line
    float g = 2 * 5.0f;
    # highlight-next-line
    double h = 2 * 5.0;
    ```
1. When working with **literals / value**, the compiler has enough information for the programmer's intent.
1. When working with **variables**, there is ambiguity about how to proceed, and the compilers will throw error.
1. Result of assignment for the expression is equal to the value of the assignment.
    ```java
    int a = 5;
    int b = ( a = 10 ); // First 10 is assigned to a. Then the whole expression a = 10 returns 10.
    System.out.println(a); // Print 10
    System.out.println(b); // Print 10
    ```
### Compound Assignment Operators
1. Addition assignment: a += 10
1. Subtraction assignment: b -= 10
1. Multiplication assignment: c *= 10
1. Division assignment: d /= 10
1. Compound assignment is a glorified form of simple assignment. It performs the following:
    - built-in operation that applies the left and right side of statement.
    - assigns the resulting value on the left side variable.
    - compiler will automatically perform casting during assignment.
    ```java
        int a = 10;
        long b = 100;
        // This will error
        a = a * b; // Compilation error as long type is assigned to int type
        // This will error
        a = (int) a * b; // Compilation error as casting applied to a only, and then promotes to long again during multiplication
        # highlight-next-line
        a = (int) (a * b); // Implicit casting from long to int
        # highlight-next-line
        a *= b; // Explicit casting from long to int
    ```
### Equality Operators
1. Equality `==` and Inequality `!=`.
1. For object type, we need to distinguish if
    - 2 objects are the same. (Using equality operator)
    - 2 objects are equivalent. (Using equals method)
1. For object comparison, equality operator is applied to reference, not to the object that reference point to.
1. For primitive type, there is no such distinction.
1. Equality Operators must apply on the same type.
    ```java
    int a = 1;
    float b = 2.0f;
    boolean c = true;
    String d = "true";
    int a1 = 1;
    float b1 = 3.0f;
    boolean c1 = true;
    # highlight-next-line
    System.out.println( a == b ); // Promotion rule to promote a to float
    // This will error
    System.out.println( b == c ); // Compilation error due to comparison between mixed type
    // This will error
    System.out.println( c == d ); // Compilation error due to comparison between mixed type
    # highlight-next-line
    System.out.println( a == a1 );
    # highlight-next-line
    System.out.println( b == b1 );
    # highlight-next-line
    System.out.println( c == c1 );
    ```
1. Comparing null with null will return true in java.
    ```java
    System.out.println( null == null ); // Print true
    ```
### Relational Operators
1. `>`, `>=`, `<`, `<=`, `instanceof`
1. **instanceof** tests whether the target object is a member of a particular class or interface at runtime.
1. If the compiler can determine that a variable cannot possibly be cast to a specific class, it reports an error.
    ```java
    Integer x = 1;
    // This will error
    if(x instanceof String){
        // Do something
    }
    ```
1. instanceof on a null literal / reference will always return false.
    ```java
    String a = null;
    String b = "Hello World";
    System.out.println( null instanceof Object ); // Print false
    System.out.println( a instanceof String ); // Print false
    System.out.println( b instanceof Object ); // Print true
    System.out.println( b instanceof String ); // Print true
    ```
1. null cannot be used on the right side of instanceof.
    ```java
    String a = null;
    // This will error
    System.out.println( a instanceof null );
    ``````
### Logical Operator
1. Logical AND `&`: true when both operands are true.
1. Logical OR `|`: true when at least one of operands is true.
1. Logical XOR `^`: true when operands are different to each other.
### Conditional Operator
1. Conditional AND `&&`: true when both operands are true.
1. Conditional OR `||`: true when at least one of operands is true.
1. Short-circuit
    - For &&, if left side is false, right side will not be evaluated.
    - For ||, if left side is true, right side will not be evaluated.
1. Avoid null pointer exception.
    ```java
    String a = null;
    if( a != null && a.equals("Hello World")){ // Since a is null, if will short circuit immediately, and avoid NullPointerException on the right side
    }
    // This will error
    if( a != null & a.equals("Hello World")){ // Throw NullPointerException at runtime
    }
    ```
### Ternary Operator
1. (boolean expression) ? ( expression that returned if boolean is true) : ( expression that returned if boolean is false)
2. Second and third expressions in ternary operations don't need to be the same data type.
    ```java
    int a = 5;
    long b = 10;
    int c = (int)((true) ? b : a);
    System.out.println(c); // Print 10
    ```
3. Second and third expressions must make sense for the data type. Compiler can detect wrong data type.
    ```java
    int a = 5;
    // This will error
    int c = (int)((false) ? "Hello" : a);
    ```
4. Only one of the expression on the right will be evaluated at runtime. Beware of **unperformed side effect**.




## Making Decisions
## Core APIs
## Methods
## Class Design
## Beyond Classes
## Lambdas And Functional Interfaces