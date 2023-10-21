---
sidebar_position: 1
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
1. **Field**: a.k.a. variable
1. Method and Field are **Member** of the **Class**.
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
    - `static` is used as no object needs to be created to run the program.
    - `...` is called `varargs` variable argument lists.
1. Compile and run the program with commands below:
    ```
    javac Test.java
    java Test    
    ```
1. File extention must be .java.
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
1. Classes in the same package are automatically imported.
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
        - Integral value
        - Each numeric type is twice the size as the smaller similar type.
    - **float** (32), **double** (64)
        - Signed
        - Floating point value
        - Each decimal type is twice the size as the smaller similar type.
    - **char** (16)
        - Unsigned
        - Unicode value
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
1. An **identifier** is the name of a variable, method, class, interface, or package.
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
1. Scope for different type of variables
    - Local variable: In scope from declaration to the end of the block.
    - Method parameters: In scope for the duration of the method.
    - Instance variable: In scope from declaration until the object is eligible for gc.
    - Class variable: In scope from declaration to end of the program.
### Garbage collection
1. For details, refers to [JVM section](jvm.md).
1. System.gc() is not guaranteed to do anything. JVM can ignore it.

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
    ```java
    int a = 7;
    System.out.println(~a); // Print -8. Because -1 * 7 - 1 
    ```
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
    ```java
    short a = 10;
    byte b = 20;
    int c = a + b;
    long d = a + b;
    float e = a + b;
    double f = a + b;
    System.out.println(c); // Print 30
    System.out.println(d); // Print 30
    System.out.println(e); // Print 30.0
    System.out.println(f); // Print 30.0
    ```
1. Compilation error occurs if you try to promote from larger to smaller data type without casting.
1. Casting is a unary operation.
1. Compiler automatically casts smaller types to larger ones.
1. Casting is required when converting to smaller data type.
1. Casting is performed by placing the data type, enclosed in parentheses, to the left of the value you want to cast.
    ```java
    short a = (short) 10;
    float b = 10;
    float c = (float) 10.0;
    float d = 10.0f;
    // This will error
    float e = 10.0;
    ```
1. Casting can also be applied to object and reference.
1. No conversion is performed for casting of object / reference.
1. Casting an object only change the reference of the object, not the object itself.
1. **Overflow** is when a number is so large that it will no longer fit within the data type, so the system “wraps around” to the lowest negative value and counts up from there.
    ```java
    int a = (byte)( Byte.MAX_VALUE + 1 );
    System.out.println(a); // Print -128
    ```
1. **Underflow** is analogy to overflow when the number is too low to fit in the data type.
    ```java
    int a = (byte)( Byte.MIN_VALUE - 1 );
    System.out.println(a); // Print 127
    ```
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
        a *= b; // Implicit casting from long to int
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
1. Second and third expressions in ternary operations don't need to be the same data type.
    ```java
    int a = 5;
    long b = 10;
    int c = (int)((true) ? b : a);
    System.out.println(c); // Print 10
    ```
1. Second and third expressions must make sense for the data type. Compiler can detect wrong data type.
    ```java
    int a = 5;
    // This will error
    int c = (int)((false) ? "Hello" : a);
    ```
1. Only one of the expression on the right will be evaluated at runtime. Beware of **unperformed side effect**.


## Control Flow Statement
1. *Control Flow Statement* breaks up the flow of execution by
    - Decision making (*if*, *switch*)
    - Looping (*while*, *do/while*, *for*, *for-each*)
    - Branching (*Nested loop*, *continue*, *break*, *return*)
1. It allows selective execution for a particular segments of code.
1. Target can be a single statement or block of statements.
1. Using block is often preferred.

### *if* statement
1. Java only accepts boolean expression, unlike other languages that accept 0 or 1.
1. Remember to trace the open and close braces of a block.

#### Pattern matching (Java 14)
1. Java 16 introduces **pattern matching** for if statement using `instanceof` operator.
    ```java title='if statement'
    if(baobao instanceof Dog){
        Dog dog = (Dog) baobao;
        dog.bark();
    }
    ```
    ```java title='if statement (With pattern matching)'
    if(baobao instanceof Dog dog ){
        dog.bark();
    }
    ```
1. Unrelated to regular expression.
1. Enhancement to reduce boilerplate code by introducing implicit type casting.
1. From the above example, *dog* is the **pattern variable**. 
1. Avoid potential ClassCastException because type casting is performed only if the instanceof statement is true.
1. It is a bad practice to reassign the pattern variable. Prevent reassignment by `final` modifier.
    ```java
    if(baobao instanceof Dog dog ){
        dog = new SmallDog(); // Bad practice to reassign the pattern variable.
    }
    ```
    ```java
    if(baobao instanceof final Dog dog ){ // Prevent reassignment by final modifier
        // Do something
    }
    ```
1. We can include && statement with pattern variable that declared on the same line to filter data out.
    ```java
    if(baobao instanceof final Dog dog 
    # highlight-next-line
        && dog.getAge() > 10 ){
        // Do something
    }
    ```
1. Pattern variable must be a strict subtype. It **cannot even** be the **same** type.
    ```java
    Integer a = 1000;
    // This will error
    if(a instanceof Integer b){
        // Do something
    }
    ```
1. **Flow scoping** means the variable is in scope only when the compiler can definitely determine its type.
1. Not strictly hierarchical like instance, class or local scoping.
1. Even if the variable is not inside the if statement, it can still be deemed in scope by the compiler.
    ```java
    void test(Number number) { 
        if (!(number instanceof Integer data))
            return;
        # highlight-next-line    
        System.out.println(data.intValue()); // Compiler determines the data variable in this line is in scope
    }
    ```
    Here, the *System.out.println* statement is not within if statement. However the compiler determines it is in scope as the instanceof operator returns true for that area.
1. We can conclude pattern matching is quite different from other scoping. It is not determined hierarchically by a pair of braces. It is determined by the compiler.

### *switch* statement
1. If no such case is found, the default case will be called. If default case is not provided, the whole switch block will be simply skipped.
    ```java
    int a = 999;
    switch(a){
        case 1: 
            System.out.println("1");
            break;    
        default: 
            System.out.println("0");
            break;
    }
    ```
    ```txt title="Result"
    0
    ```
1. A break statement ends the switch statement immediately.
    ```java
    int a = 3;
    switch(a){
        case 1: 
            System.out.println("1");
            break;
        case 2: 
            System.out.println("2");
            break;    
        case 3: 
            System.out.println("3");
            break;
        default: 
            System.out.println("0");
            break;
    }
    ```
    ```txt title="Result"
    3
    ```
1. Without break statement, it will match the first case statement, and **executes all of the branches** in the order they are found.
    ```java
    int a = 3;
    switch(a){
        case 1: System.out.println("1");
        case 2: System.out.println("2");    
        case 3: System.out.println("3");
        default: System.out.println("0");  
        case 5: System.out.println("5");  
        case 4: System.out.println("4");  
    }
    ```
    ```txt title="Result"
    3
    0
    5
    4
    ```
1. Starting with Java 14, case value can be combined.
    ```java title="Prior to Java 14"
    int a = 2;
    switch(a){
        # highlight-next-line
        case 1: case 2: 
            System.out.println(" 1 or 2 ");
            break;
        case 3: 
            System.out.println(" 3 ");
            break;
        default: 
            System.out.println(" Default ");
            break;
    }
    ```
    ```java title="Starting with Java 14"
    int a = 2;
    switch(a){
        # highlight-next-line
        case 1, 2: 
            System.out.println(" 1 or 2 ");
            break;
        case 3: 
            System.out.println(" 3 ");
            break;
        default: 
            System.out.println(" Default ");
            break;
    }
    ```
1. *switch* supports the following data type.
    - byte, short, int
    - char, String
    - enum values
1. boolean, long, float, double are not supported because their range of values are either too narrow or wide.
1. *case* value must be **compile time constant expression**. If the case value cannot be evaluated until runtime, it will fail the compilation.
    ```java
    static int getValue(){
        return 2;
    }
    public static void main(String... args) {
        int a = 2;
        final int CASE_1 = 1;
        final int CASE_2 = getValue();
        switch(a){
            # highlight-next-line
            case CASE_1:
                System.out.println(" 1 ");
                break;
            // This will error
            case CASE_2:
                System.out.println(" 2 ");
                break;
            default:
                System.out.println(" Default ");
                break;
        }
    }
    ```
1. *case* value supports only
    - literals
    - enum constants
    - final constants
#### *switch* expression (Java 14)
1. Starting with Java 14, **switch expression** is supported.
    ```java
    byte a = 2;
    byte b = 4;
    byte c = switch (a) {
        case 1 -> 0; // expression
        case 2, 3 -> { // block
            if (b == 4) {
                yield 10;
            } else {
                yield 20;
            }
        }
        default -> 99;
    };
    System.out.println(c);
    ```
    ```txt title="Result"
    10
    ```
1. It is a compact form of switch statement.
1. It can return a value.
1. It supports both *expression* and *block*.
1. Keyword `yield` (exit the block) is provided to distinguish it from the keyword `return` (exit the method).
1. *break* statement is not required. Only one branch will be executed.
1. Each case or default expression requires a semicolon as well as the assignment itself.
1. It is allowed that switch expression doesn't return a value.
    ```java
    byte a = 3;
    switch(a){
        case 1 -> System.out.println("1");
        case 2 -> System.out.println("2");
        case 3 -> System.out.println("3");
        default -> System.out.println("default"); // Default case is optional in this case
    }
    ```
1. If the switch expression returns value, all of the branches must either **return** a value (expression) or **yield** a value (block).
1. If the switch expression returns value, all possible case values have to be covered. You can either
    - provide a default branch.
    - or cover all possible values. Though quite impossible unless it is a enum type.
1. If the switch expression returns value, all case and default branches must return a **consistent** and **compatible** data type.

### *while* statement
### *do while* statement
1. Guarantee the statement or block inside will be run once.
### *for* loop
1. Infinite loop is allowed.
    ```java
    for(;;){
        System.out.println("Hello World.");
        break;
    }
    ```
1. Multiple variables are allowed.
    ```java
    for(int x=0 , y=10; x<20 || y>=0; x++, y--){
        System.out.println("x="+x);
        System.out.println("y="+y);
    }
    ```
1. Variables must all be of the same type and declared once.
    ```java
    // This will error
    for(int x=0 , long y=10; x<20 || y>=0; x++, y--){
        System.out.println("x="+x);
        System.out.println("y="+y);
    }

    // This will error
    for(int x=0 , int y=10; x<20 || y>=0; x++, y--){
        System.out.println("x="+x);
        System.out.println("y="+y);
    }
    ```
1. Using variable outside the loop is not allowed. The variable is only scoped for the loop.
    ```java
    for(int x=0 , y=10; x<20 || y>=0; x++, y--)
        System.out.println("x="+x);
    // This will error
    System.out.println("y="+y);
    ```

### *for each* loop
1. The right side must be:
    - built-in Java array.
    - an object that implements *java.lang.Iterable*.
1. Not all Collection Framework classes implements *java.lang.Iterable*.
1. Map does not implement *java.lang.Iterable*. However, the collection that its methods such as values() and keySet() returns does.
    ```java
    Map<String, Integer> map = new HashMap<String, Integer>();
    map.put("one", 1);
    map.put("two", 2);
    # highlight-next-line
    for(String key: map.keySet()){
        System.out.println(key);
    }
    # highlight-next-line
    for(Integer value: map.values()){
        System.out.println(value);
    }
    ```
### Branching
#### Nested Loop
1. A loop can contain another loop. This is called nested loop.
#### Optional label
1. *if*, *switch* and *for* loop can all have **optional labels** on their block and control statements.
1. Optional label is not good for readability. Use only when necessary.
#### *break* statement
1. Break statement breaks the loop early. The loop terminates immediately. There will be no further iteration.
1. For nested loops, without a label, the break statement will terminate the latest inner loop.
    ```java
    for(int i=0 ; i<10; i++){
        for(int j=0 ; j<10; j++){
            System.out.println( i + j );
            if (i==j)
            # highlight-next-line
                break;
        }
    }
    ```
1. For nested loops, with an optional label, it makes the break statement possible to break out a higher level outer loop.
    ```java
    OUTER_LOOP: for(int i=0 ; i<10; i++){
        INNER_LOOP: for(int j=0 ; j<10; j++){
            System.out.println( i + j );
            if (i==j)
            # highlight-next-line
                break OUTER_LOOP;
        }
    }
    ```
#### *continue* statement
1. Continue statement ends the current iteration of the loop. It will skip the current iteration of the loop. It will continue to run the remaining iterations of the loop.
1. For nested lopps, without a label, the continue statement will end the current iteration of the inner loop.
1. For nested loops, with an optional label, the continue statement can end the current iteration of higher level outer loop.

#### *return* statement
1. When the loop is inside a method, return statement can be used to exit the loop early, instead of using break statement with optional label.
    ```java
    for(int i=0 ; i<10; i++){
        for(int j=0 ; j<10; j++){
            System.out.println( i + j );
            if (i==j)
            # highlight-next-line
                return;
        }
    }
    ```
1. Code without break statements and labels are easier to read.
#### Unreachable Code
1. Any code placed immediately after *break*, *continue*, *return* will be deemed unreachable by compiler.

#### Support for labels, `break`, `continue` and `yield`
1. `yield` can only be used in switch expression.
1. `continue` can only be used in loop statement.
1. `break` and optional labels can be used in switch and loop statements.


## Core APIs
### String
1. A sequence of characters which counts from 0 when indexed.
1. Doesn't need to be instantiated with new.
1. Text block can create String.
    ```java
    String hello = """
                    Hello World""";
    ```
1. Implements the interface `CharSequence`.
1. Rules for + operator
    - When both operands are numeric, + means addition.
    - If either one is String, + means concatenation.
    - Expression is evaluated from left to right.
    - During concatenation, a null value will be represented by the string **null**.
    ```java
    System.out.println( 10 + 100 ); // 110
    System.out.println( 12 + "345" ); // 12345
    System.out.println( "543" + 12 ); // 54321
    System.out.println( "654" + 32 + 1 ); // 654321
    System.out.println( 12 + 3 + "456" ); // 15456 
    // This will error
    System.out.println( 1 + null ); // compile error
    System.out.println( "1" + null ); // 1null
    String a = null;
    String b = null;
    System.out.println( a + b ); // nullnull
    ```
1. a += "1" means a = a + "1".
1. String is immutable.
1. Calling a method on String will return a different String object.
1. Illustration of String method.
    ```java
    String stringA = "Hello World";
    // length
    System.out.println( stringA.length() ); // 11
    // charAt
    System.out.println( stringA.charAt(0) ); // H
    System.out.println( stringA.charAt(10) ); // d
    try{
        // This will error
        System.out.println( stringA.charAt(11) ); // Runtime error: java.lang.StringIndexOutOfBoundsException
    }
    catch (Exception e){
        System.out.println(e);
    }
    // indexOf
    System.out.println( stringA.indexOf('l') ); // 2
    System.out.println( stringA.indexOf("l") ); // 2
    // subString
    System.out.println( stringA.substring(6) ); // World
    System.out.println( stringA.substring(0,2) ); // He
    // toLowerCase, toUpperCase
    System.out.println( stringA.toLowerCase() ); // hello world
    System.out.println( stringA.toUpperCase() ); // HELLO WORLD
    // equals, equalIgnoreCase
    System.out.println( stringA.toLowerCase().equals(stringA) ); // false
    System.out.println( stringA.toLowerCase().equalsIgnoreCase(stringA.toUpperCase()) ); // true
    // startsWith, endsWith, contains
    System.out.println( stringA.startsWith("Hello")); // true
    System.out.println( stringA.endsWith("World")); // true
    System.out.println( stringA.contains("o W")); // true
    // replace
    System.out.println( stringA.replace('H', 'h').replace('W','w')); // hello world
    System.out.println( stringA.replace("Hello", "Happy")); // Happy World
    // isEmpty, isBlank
    System.out.println(" ".isEmpty()); // false
    System.out.println("".isEmpty());  // true
    System.out.println(" ".isBlank()); // true
    System.out.println("".isBlank());  // true
    // trim, strip, stripLeading, stripTrailing
    System.out.println( "  Hello World   ".trim()); // "Hello World"
    System.out.println( "  Hello World   ".strip()); // "Hello World"
    System.out.println( "  Hello World   ".stripLeading()); // "Hello World   "
    System.out.println( "  Hello World   ".stripTrailing()); // "   Hello World"
    ```
    ```java title='Run to see the indentation'
    // indent
    var stringX = """
                    Hello
                     World""";
    System.out.println(stringX);
    System.out.println(stringX.length()); // 12
    System.out.println(stringX.indent(0));
    System.out.println(stringX.indent(0).length()); // 13
    System.out.println(stringX.indent(1));
    System.out.println(stringX.indent(1).length()); // 15
    System.out.println(stringX.indent(-1));
    System.out.println(stringX.indent(-1).length()); // 12
    ```
    ```java title='Run to see the indentation'
    // stripIndent
    var stringY = " Hello\n" +
                  " World\n" +
                  " !";
    System.out.println(stringY);
    System.out.println(stringY.length()); // 16
    System.out.println(stringY.stripIndent());
    System.out.println(stringY.stripIndent().length()); // 13
    ```
    ```java
    // translateEscapes
    var stringA = " Hello\\n" +
                  " World\\n" +
                  " !";
    System.out.println(stringA);
    System.out.println(stringA.translateEscapes());
    ```
    ```txt title='Result'
    Hello\n World\n !
    Hello
    World
    !
    ```
    ```java
    // format, formatted
    var stringA = "Hello World";
    var integerB = 123;
    var doubleC = 456.0;
    System.out.println( String.format("%s%n integerB=%d%n doubleC=%f", stringA, integerB, doubleC));
    System.out.println( "%s%n integerB=%d%n doubleC=%f".formatted( stringA, integerB, doubleC));
    ```
    ```txt title='Result'
    Hello World
     integerB=123
     doubleC=456.000000
    Hello World
     integerB=123
     doubleC=456.000000     
    ```
### StringBuilder
1. StringBuilder is not immutable.
1. Concatenation of String will result in a lot of interim String objects, which are immediately available for GC.
    ```java title='Below code will create 27 objects.'
    String str = "";
    for(char i='a'; i<='z'; i++)
        str += i;
    System.out.println(str);
    ```
1. Concatenation of String via StringBuilder will not result in any interim object.
    ```java title='Below code will create only the StringBuilder object.'
    StringBuilder stringBuilder = new StringBuilder("");
    for(char i='a'; i<='z'; i++)
        stringBuilder.append(i);
    System.out.println(stringBuilder.toString());
    ```
1. `substring()` returns a String instead of StringBuilder. No modification is ever made to the original StringBuilder.
    ```java
    // substring
    StringBuilder stringBuilder = new StringBuilder("Hello World");
    String substring = stringBuilder.substring(0,4);
    System.out.println(substring); // Hell
    System.out.println(stringBuilder.toString()); // Hello World
    ```
1. Some common methods as below:
    ```java
    var stringBuilder = new StringBuilder("Hello World");
    // length
    System.out.println(stringBuilder.length()); // 11
    // indexOf
    System.out.println(stringBuilder.indexOf("l")); // 2
    // charAt
    System.out.println(stringBuilder.charAt(4)); // o
    // insert, append
    System.out.println(stringBuilder.insert(0,'(').append(')')); // (Hello World)
    // delete, deleteCharAt
    System.out.println(stringBuilder.delete(0,1).deleteCharAt(stringBuilder.length()-1)); // Hello World
    // replace
    System.out.println(stringBuilder.replace(0,5,"Happy")); // Happy World
    // reverse, toString
    System.out.println(stringBuilder.reverse().toString().toUpperCase()); // DLROW YPPAH
    ```
### Equality
1. Operator `==` checks object reference equality.
1. By default, `equals()` checks object reference equality.
1. `equals()` of StringBuilder checks object reference equality.
    ```java
    var a1 = new StringBuilder("Hello World");
    var a2 = new StringBuilder("Hello World");
    System.out.println(a1.equals(a2)); // false
    System.out.println(a1 == a2); // false
    ```
1. `equals()` of String is overridden, and checks value equality.
    ```java
    var a1 = "Hello World";
    var a2 = "Hello World";
    System.out.println(a1.equals(a2)); // true
    System.out.println(a1 == a2); // true
    ```
1. String literal is pooled in String Pool.
    ```java
    var a1 = "Hello World";
    var a2 = "Hello World";
    var a3 = "Hello" + " " + "World";
    var a4 = "Hello World".trim();
    var a5 = " Hello World ".trim();
    System.out.println(a1 == a2); // true
    System.out.println(a1 == a3); // true
    System.out.println(a1 == a4); // true
    System.out.println(a1 == a5); // false
    ```
1.  For String that are not the same at compile time, a new String object is created.
    ```java
    var a1 = "Hello World";
    var a2 = "Hello";
    a2 += " World";
    System.out.println(a1 == a2); // false
    ```
1. `intern()` will return the String from the String Pool (if exist) instead of creating a new String.
    ```java
    var a1 = "Hello World";
    var a2 = "Hello";
    a2 += " World";
    a2 = a2.intern();
    System.out.println(a1 == a2); // true
    ```
1. intern() should only be used in the exam.
### Array
1. An area of memory on the heap with space for a designated number of elements.
1. Both String and StringBuilder are implemented as array.
1. For String, method is provided to handle characters specifically.
1. For StringBuilder, array object is replaced with bigger array object when running out of space.
1. An array is an ordered list.
1. Declaration
    ```java
    int[] a1;
    int [] a2;
    int []a3;
    int a4[];
    int a5 [];
    // Multiple declaration
    int[] a6, a7; // 2 int array
    int a8, a9[] // 1 int, 1 int[]
    ```
1. Instantiation and initialization
    ```java
    int[] a = new int[] { 1, 2, 3};
    int[] b = { 1, 2, 3 };
    ```
1. `equals()` of array checks reference equality.
    ```java
    Integer[] a = { 1, 2, 3 };
    Integer[] b = a;
    System.out.println(a.equals(b)); // true
    System.out.println(a); // [Ljava.lang.Integer;@7a4f0f29
    // [L means array.
    // java.lang.Integer is the reference type.
    // 7a4f0f29 is the hash code
    System.out.println(Arrays.toString(a)); // [1, 2, 3]
    ```
1. Casting to force bigger type to smaller type.
    ```java
    String[] strings1 = { "Happy Valley" };
    Object[] objects = strings1;
    String[] strings2 = (String[]) objects;
    // This will error
    objects[0] = new StringBuilder("Hello World"); // java.lang.ArrayStoreException
    ```
1. Some common methods
    ```java
    String[] friends = { "Mary", "Cindy", "Amy"};
    System.out.println(friends.length); // 3
    // This will error
    System.out.println(friends.length()); // Compilation Error
    System.out.println(friends[0]); // Mary
    // This will error
    System.out.println(friends[3]); // ArrayIndexOutOfBoundsException
    ```
1. *length* attribute does not consider what is in the array. It only considers how many slots have been allocated.
    ```java
    String[] friends = new String[3];
    System.out.println(friends.length); // 3
    System.out.println(friends[0]); // null
    ```
1. `sort`
    ```java
    String[] friends = { "Mary", "Cindy", "Amy"};
    System.out.println(Arrays.toString(friends)); // [Mary, Cindy, Amy]
    Arrays.sort(friends);
    System.out.println(Arrays.toString(friends)); // [Amy, Cindy, Mary]
    ```
1. `binarySearch`
    - Prerequisite: the array should be sorted beforehand, or unknown result will be returned.
    - Found: return index.
    - Not Found:  -(Index of smaller but largest match) -1 .
    ```java
    int[] a = { 10, 50, 100, 1000, 10000};
    System.out.println(Arrays.binarySearch(a, 10)); // 0
    System.out.println(Arrays.binarySearch(a, 100)); // 2
    System.out.println(Arrays.binarySearch(a, 999)); // -4
    System.out.println(Arrays.binarySearch(a, 5000)); // -5
    System.out.println(Arrays.binarySearch(a, 9999)); // -5
    ```
1. `compare` for number
    - same length, same elements => 0
    - same elements, but more element at the end of first array => +
    - same elements, but more element at the end of second array => -
    - first element is larger in the first array => +
    - first element is larger in the second array => -
    ```java
    int[] a1 = { 1, 3, 5, 7, 9};
    int[] a2 = { 1, 3, 5, 7, 9};
    int[] b1 = { 1, 3, 5, 7, 9, 11};
    int[] b2 = { 1, 3, 5, 7};
    int[] c1 = { 2, 2, 2, 2, 2};
    int[] c2 = { 1, 2, 2, 2, 2};
    int[] c3 = { 1, 4, 2, 2, 2};
    int[] c4 = { 1, 1, 1, 1};
    int[] c5 = { 1, 1, 1, 1, 1, 1};
    System.out.println(Arrays.compare(a1, a2)); // 0
    System.out.println(Arrays.compare(a1, b1)); // -1
    System.out.println(Arrays.compare(a1, b2)); // 1
    System.out.println(Arrays.compare(a1, c1)); // -1
    System.out.println(Arrays.compare(a1, c2)); // 1
    System.out.println(Arrays.compare(a1, c3)); // -1
    System.out.println(Arrays.compare(a1, c4)); // 1
    System.out.println(Arrays.compare(a1, c5)); // 1
    ```
1. `compare` for string
    - null is smaller
    - uppercase is smaller than lowercase
    - number is smaller than letter
    ```java
    String[] a = { "a" };
    String[] A = { "A" };
    String[] b = { "b" };
    String[] B = { "B" };
    String[] c_s = { "c" , "C" };
    String[] z = { "z" };
    String[] NULL = { null };
    String[] NUMBER = { "0" };
    System.out.println(Arrays.compare(a, A)); // 32
    System.out.println(Arrays.compare(a, b)); // -1
    System.out.println(Arrays.compare(a, B)); // 31
    System.out.println(Arrays.compare(z, c_s)); // 23
    System.out.println(Arrays.compare(a, NULL)); // 1
    System.out.println(Arrays.compare(a, NUMBER)); // 49
    ```
1. `mismatch`
    - the same => -1
    - not the same => the first index they differ
    ```java
    int[] a1 = { 1, 3, 5, 7, 9 };
    int[] a2 = { 1, 3, 5, 7, 9 };
    int[] b1 = { 0, 2, 4, 6, 8 };
    int[] b2 = { 2, 4, 6, 8, 10 };
    int[] c1 = { 1, 3, 5, 7, 9, 11};
    int[] c2 = { 1, 3, 5, 7};
    System.out.println(Arrays.mismatch(a1, a2)); // -1
    System.out.println(Arrays.mismatch(a1, b1)); // 0
    System.out.println(Arrays.mismatch(a1, b2)); // 0
    System.out.println(Arrays.mismatch(a1, c1)); // 5
    System.out.println(Arrays.mismatch(a1, c2)); // 4
    ```
1. Multi-dimensional array
    ```java
    // 2D array
    int[][] a = {{ 1, 3, 5, 7, 9 }, { 2, 4, 6, 8, 10 }};
    int[] b[] = new int[5][5];
    // 3D array
    int[] c[][];
    // Asymmetric array
    int[] []d = new int[2][];
    d[0] = new int[3];
    d[1] = new int[6];
    // for loop
    for(int i=0; i<a.length; i++){
        for(int j=0; j<a[i].length; j++){
            System.out.print(a[i][j]); // 13579246810
        }
    }
    System.out.println("");
    // for each loop
    for(int[] outer: a){
        for(int inner: outer){
            System.out.print(inner); // 13579246810
        }
    }
    ```
### Math API
1. https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html
1. Perform basic numeric operations such as the elementary **exponential**, **logarithm**, **square root**, and **trigonometric** functions.
1. Fields and some methods
    ```java
    static final double E // Base of natural logarithms
    static final double PI // ratio of circumference of a circle to its diameter
    public static double min(double a, double b)
    public static float min(float a, float b)
    public static int min(int a, int b)
    public static long min(long a, long b)
    public static long round(double num)
    public static int round(float num)
    public static double ceil(double num)
    public static double floor(double num)
    public static double pow(double number, double exponent)
    public static double random()
    ```
### Date and Time
1. 3 things: **Date**, **Time** and **Timezone**.
    1. **LocalDate** contains Date only.
    1. **LocalTime** contains Time only.
    1. **LocalDateTime** contains Date and Time only.
    1. **ZonedDateTime** contains Date, Time and Timezone.
    ```java
    System.out.println(LocalDate.now()); // 2023-10-07
    System.out.println(LocalTime.now()); // 14:34:07.333623
    System.out.println(LocalDateTime.now()); // 2023-10-07T14:34:07.333692
    System.out.println(ZonedDateTime.now()); // 2023-10-07T14:34:07.333956+08:00[Asia/Hong_Kong]
    ```
1. Timezone offset can be listed as +08:00, GMT+8 or UTC+8.
1. Common Methods
    ```java
    public static LocalDate of(int year, int month, int dayOfMonth)
    public static LocalDate of(int year, Month month, int dayOfMonth)
    public static LocalTime of(int hour, int minute)
    public static LocalTime of(int hour, int minute, int second)
    public static LocalTime of(int hour, int minute, int second, int nanos)
    public static LocalDateTime of(int year, int month, int dayOfMonth, int hour, int minute)
    public static LocalDateTime of(int year, int month, int dayOfMonth, int hour, int minute, int second)
    public static LocalDateTime of(int year, int month, int dayOfMonth, int hour, int minute, int second, int nanos)
    public static LocalDateTime of(int year, int month, int dayOfMonth, int hour, int minute)
    public static LocalDateTime of(int year, int month, int dayOfMonth, int hour, int minute, int second)
    public static LocalDateTime of(int year, int month, int dayOfMonth, int hour, int minute, int second, int nanos)
    ```
1. **plus** and **minus** method
    ```java
    plusYears()
    minusYears()
    plusMonths()
    minusMonths()
    plusWeeks()
    minusWeeks()
    plusDays()
    minusDays()
    plusHours()
    minusHours()
    plusMinutes()
    minusMinutes()
    plusSeconds()
    minusSeconds()
    plusNanos()
    minusNanos()
    ```
1. **Period** class
    ```java
    var date = ZonedDateTime.now();
    System.out.println(date); // 2023-10-07T14:48:31.417133+08:00[Asia/Hong_Kong]
    var period = Period.ofMonths(2);
    date.plus(period);
    System.out.println(date); // 2023-12-07T14:48:31.417133+08:00[Asia/Hong_Kong]
    ```
1. Period supports *years*, *months*, *weeks* and *days*.
1. Period.of takes only year, months and days, **without** weeks.
1. Be aware of using invalid period on objects. For example, time has no years, months or days.
    ```java
    var period = Period.of(1, 2, 3); // 1 year 2 months 3 days
    var zonedDateTime = ZonedDateTime.now();
    var localTime = LocalTime.now();
    # highlight-next-line
    zonedDateTime = zonedDateTime.plus(period);
    // This will error
    localTime = localTime.plus(period); // java.time.temporal.UnsupportedTemporalTypeException: Unsupported unit: Months
    ```
1. **Duration** class is for smaller units of time.
1. Duration supports *days*, *hours*, *minutes*, *seconds*, *milliseconds* and *nanoseconds*.
1. Duration doesn't have a factory method that takes multiple units like Period.of.
1. Duration has a generic factory method that takes **ChronoUnit**.
    ```java
    var dateTime = LocalDateTime.now();
    System.out.println(dateTime); // 2023-10-07T15:11:07.554493
    var halfDay = Duration.of(4, ChronoUnit.HALF_DAYS);
    dateTime = dateTime.plus(halfDay);
    System.out.println(dateTime); // 2023-10-09T15:11:07.554493
    ```
1. LocalDate, LocalTime, LocalDateTime, ZoneDateTime are **temporal**.
1. ChronoUnit can tell the time gap between 2 temporals.
    ```java
    var date1 = LocalDateTime.of( 2023, 10, 7, 0, 0);
    var date2 = LocalDateTime.of( 2023, 10, 17, 0, 0);
    # highlight-next-line
    System.out.println(ChronoUnit.DAYS.between(date1, date2)); // 10
    ```
1. ChronoUnit is in the java.time.Temporal package.
1. Duration can only be used with object with time.
1. Period can only be used with object with date.
1. **Instant** specifies moment in **GMT time zone**.
    ```java
    System.out.println(ZonedDateTime.now()); // 2023-10-07T15:25:59.475706+08:00[Asia/Hong_Kong]
    System.out.println(ZonedDateTime.now().toInstant()); // 2023-10-07T07:25:59.475894Z
    System.out.println(Instant.now()); // 2023-10-07T07:25:59.477320Z
    ```
1. Daylight Saving Time. 
    1. March forwards from 1:59 am to 3:00 am. (Skip the hour, so 2:30 am doesn't exist)
    1. November falls back and experience hour 1:00 am to 1:59 am twice. (Repeat the hour)

## Methods
### Introduction
1. A method consists of the following. **Bolded** elements are mandatory.
    - Access modifier
    - Optional specifier
    - **Return type**
    - **Method name**
    - **Parameter list**
    - **Method Signature** (Method name + Parameter list)
    - Exception List
    - **Method body** (Except for abstract method)
1. Access modifier and optional specifier can appear in any order.    
1. Access modifier and optional specifier must all appear before return type.

#### Access Modifier
1. `private` - same class
    :::tip 
    The access is on the class itself. 
    Even if 2 classes are defined in the same java file, they cannot access private fields or methods of each other.
    :::
1. package - same package, default access, no keyword
1. `protected` - same package or subclass.
    - There are 2 ways to access protected members.
        - via inheritance, easy to understand
        - via variable, i.e. reference type of the variable, **check the relationship between the current class and the variable, whether they are of the same package or the current class is a subclass of the variable reference type**
        ```java
        class Child extends Parent{
            public Child(){
                # highlight-next-line
                System.out.println(whatIsProtected); // via inheritance
            }
        }
        class Peer{
            void createParent(){
                Parent parent = new Parent();
                # highlight-next-line
                System.out.println(parent.whatIsProtected); // via variable
            }
        }
        public class Parent {
            protected String whatIsProtected= "Only for same package and subclass Here";
            public static void main(String... args) {
                Child child = new Child(); // Only for same package and subclass Here
                Peer peer = new Peer();
                peer.createParent(); // Only for same package and subclass Here
            }
        }
        ```
    - Please refer to book examples.
1. `public` - Anyone
#### Optional Specifier
1. `static`, `abstract`, `final`, `default`, `synchronized`, `native`, `strictfp`
1. Some specifiers are not compatible with one another.
1. You can't declare a method `final` and `abstract`.
#### Return Type
1. Appear after access modifier or optional specifier.
1. Appear before method name.
1. If there is no return type, use the keyword `void`.
1. Methods with a return type other than void must have a return statement inside the method body.
1. Methods with return type `void` can either skip the return statement, or include return statement with no value returned.
#### Method Name
1. Review the section [Building Blocks > Declaring variables](#declaring-variables) for restrictions and convention for an identifier.
#### Parameter List
1. Required but doesn't have to contain any parameters.
1. Separate multiple parameters with comma.
#### Method Signature
1. Composed of method name and parameter list.
1. Names of the parameters are not used as a part of a method signature.
1. Method signature only cares about the **type** and **order** of parameters in a parameter list.
1. Java uses it to uniquely identify which method you are trying to call.
#### Exception List
#### Method Body
1. a code block with return statement.
1. requires to have a body unless declared `abstract`.
### Local variables and Instance variables
1. **Local variables** are defined in a method or code block.
1. **Instance variables** are defined as a member of a class.
1. Only `final` modifier can apply to local variables.
1. For final primitives, once it is assigned, its value cannot be modified.
1. For final object, once it is assigned, its *reference* cannot be modified. Its content can however be modified.
1. **Effectively final** means the variable is not modified after assignment, even if it is not marked as final.
1. Local classes and lambda expressions declared within a method can only reference local variables that are final or effectively final.
1. Access modifier can be applied to **instance variables**.
1. Optional specifier `final`, `transient`, `volatile` can be applied to instance variables.
1. Compiler does not apply default value to final instance or final class variables.
1. If instance variables are marked final, they must be assigned a value when it is declared or when the object is instantiated.
### Methods with Varargs
1. A method may use a **varargs** parameter with below rules:
    - It can have **at most 1** varargs parameter.
    - Varargs parameter must be the **last parameter**.
    ```java
    static void method(String... p1) {};
    static void method(String p1, String... p2) {};
    // This will error
    static void method(String... p1, String p2) {}; // violation: Last parameter
    // This will error
    static void method(String... p1, String... p2) {}; // violation: At most 1 varargs parameter
    ```
1. When calling method, you can either:
    - pass in an array
    - or list the elements and let Java create for you
    ```java
    static void print(String... names) {
        for(String name : names) System.out.println(name);
    }
    public static void main(String... args) {
        # highlight-next-line
        print( new String[]{"Mary", "Cindy", "Amy"} ); // pass in array
        # highlight-next-line
        print("June", "Jane", "Becky"); // list the elements
    }
    ```
1. The method will receive the array containing the elements.
1. Java will create an array of length 0 if varargs is omitted.
    ```java
    static void print(String... names) {
       System.out.println(names.length);
    }
    public static void main(String... args) {
        # highlight-next-line
        print(); // 0
    }
    ```
1. Accessing a varargs parameter is like accessing array. It has the same array indexing.
1. If passing null to varargs parameter, java will treat it as array reference and result in NullPointerException.
    ```java
    static void print(String... names) {
        System.out.println(names.length);
    }
    public static void main(String... args) {
        // This will error
        print(null); // java.lang.NullPointerException: Cannot read the array length because "a" is null
    }
    ```
### Static 
1. `static` can be applied to *class*, *method* and *variable*.
1. `static` can be applied to *import statement*.
1. The target will then belong to the class rather than a specific instance of the class.
1. Static methods have 2 main purpose.
    - Utility / Helper methods that don't require any **object state**.
    - For state that is shared by all instances.
1. You can use an instance of the class to call the static method. The compiler **checks for the type of the reference and uses that instead of the object**.
    ```java
    public class Test {
        public static String everyone = "Everyone";
        public static void main(String... args) {
            Test test = null;
            System.out.println(Test.everyone); // Everyone
            System.out.println(test.everyone); // Everyone
        }
    }
    ```
    Java doesn't care the variable *test* is null as it is looking for a static variable.
1. Static member doesn't require an instance to use.
1. Instance member require an instance to use.
1. A static method can call another static method.
1. A static method **cannot** call instance method without referencing instance of class, even it is within the ssame class.
1. An instance method can call static method.
1. An instance method can call another instance method within the same class.
1. Static variable can be declared with same modifiers as instance variables such as `final`, `transient` and `volatile`.
1. When a static variable is declared final, the compiler will not assigned it with default value. It must be initialized with a value.
1. Use **static initializer** to initialize static final variables.
    ```java
    static int a;
    final static int b;
    // This will error
    final static int c; // Compile error as c is final and not initialized
    static{ // static initializer
        b = 5;
    }
    ```
1. Instance Initializer / Constructor cannot initialize static final variables.
1. All static initializers run when the class is *first used*, in the order they are defined.
    ```java
    static {
        System.out.println("cp 1");
    }
    static {
        System.out.println("cp 2");
    }
    ```
    cp1 will print before cp2.
1. Try to avoid instance initializer. Use constructor instead.
1. Use static initializer if initializing static variables uses more than one line. Put all static initialization in the same block.
1. **Static import** can import static member of classes.
    ```java
    import java.time.Duration;
    # highlight-next-line
    import static java.time.Duration.ofDays;
    public class Test {
        public static void main(String... args) {
            # highlight-next-line
            Duration duration = ofDays(1); // ofDays instead of Duration.ofDays
            System.out.println(duration); // PT24H
        }
    }
    ```
1. Static import allows you not to specify where each static method or variable comes from each time you use it.
1. Static import can only import static members.
1. Static import cannot import class. To import class, use regular import instead.
1. You cannot static import 2 or more static members with the same name. In that case, refer to static member via their class name.
### Pass by value
1. Java is a pass-by-value language.
1. When a method is invoked, it receives **copy** of the parameter from the caller.
1. Assignments made to the parameter in the method do not affect the caller.
1. When passing a primitive, the method receives a copy of primitive's value.
    ```java
    static void increment(int i){
        i += 1;
        System.out.println( "Callee: " + i ); // Callee: 1001
    }
    public static void main(String... args) {
        int salary = 1000;
        increment(salary);
        System.out.println( "Caller: " + salary ); // Caller: 1000
    }
    ```
1. When passing an object, the method receives a copy of reference.
    ```java
    static void reassign(StringBuilder sb){
        sb = new StringBuilder("Happy Valley");
        System.out.println( "Callee: " + sb ); // Callee: Happy Valley
    }
    public static void main(String... args) {
       var sb = new StringBuilder("Hello World");
       reassign(sb);
       System.out.println( "Caller: " + sb ); // Caller: Hello World
    }
    ```
    Note sb in the main method is still pointing to the Stringbuilder with value Hello World.
1. Note the above example focus on assignment of variables, and show that any assignments made to the parameter in the method do not affect the caller.
1. When passing an object to a method, the method receives a copy of reference, but that copy of reference **points to the same object** as the caller.
1. Changes made to the object will be available to both references (caller and callee).
    ```java
    static void append(StringBuilder sb){
        sb.append(" and Happy new year.");
        System.out.println( "Callee: " + sb); // Callee: Hello World and Happy new year.
    }
    public static void main(String... args) {
       var sb = new StringBuilder("Hello World");
       append(sb);
       System.out.println( "Caller: " + sb); // Caller: Hello World and Happy new year
    }
    ```
### Returning data
1. Method can return data. However be careful if the caller ignores the data returned.
    ```java
    static String change(String str){
        str += " Wong";
        return str;
    }
    public static void main(String... args) {
       var a1 = "Mary";
       var a2 = "Amy";
       a1= change(a1);
       # highlight-next-line
       change(a2); // ignores the data returned
       System.out.println(a1); // Mary Wong
       System.out.println(a2); // Amy
    }
    ```
### Autoboxing and Unboxing
1. Java will automatically convert between primitives and wrapper classes.
1. Autoboxing: primitive -> wrapper class
1. Unboxing: wrapper class -> primitive
1. Java will implicitly cast a smaller primitive to larger one, and autobox a primitive to wrapper, but it will **NOT** do both.
    ```java
    float f = 1.0f;
    double d1 = f;
    Double d2 = d1;
    // This will error
    Double d3 = f; // Compilation error - java: incompatible types: float cannot be converted to java.lang.Double
    ```
1. Unboxing a null value will throw NullPointerException.
    ```java
    Double a = null;
    // This will error
    double b = a; // java.lang.NullPointerException: Cannot invoke "java.lang.Double.doubleValue()" because "a" is null
    ```
### Overloading
1. Overloading methods have the same method name but different parameters lists. 
1. Overloading methods must have different method signature. 
1. You cannot declare duplicate methods (same method signature) in the same class.
1. Things other than method name can vary for overloading methods, such as access modifier, optional specifier, return type, exception list, etc.
1. Java picks **the most specific version** it can when calling overloading methods, be it primitive or reference type.
1. The same applies to autoboxing when both primitive and wrapper version are present as overloading methods. Java picks the most specific version.
    ```java
    static void print(int a) { System.out.println("Primitive method is called.");}
    static void print(Integer a) { System.out.println("Wrapper method is called.");}
    public static void main(String... args) {
        int primitive = 1 ;
        Integer wrapper = 2;
        print(primitive); // Primitive method is called.
        print(wrapper); // Wrapper method is called.
    }
    ```
1. Array does not autobox.
    ```java
    static void method(Integer[] i){};
    public static void main (String... args){
        int[] i = { 1, 2, 3 };
        // This will error
        method(i); // Compile error: java: incompatible types: int[] cannot be converted to java.lang.Integer[]
    } 
    ```
1. Java treats varargs as if they were an array. Method signature will be the same as an array, and lead to duplicate method error.
    ```java
    static void method(Integer[] i){};
    // This will error
    static void method(Integer... i){}; // java: cannot declare both method(java.lang.Integer...) and method(java.lang.Integer[])
    ```
1. Overloading order is listed below in order of precedence.
    - Exact match by type
    - Larger primitive type
    - Autoboxed type
    - varargs

## Class Design
### Inheritance
1. A **subclass** automatically includes certain members of its parent class.
1. Use the keyword `extends` to declare subclass.
    ```java
    class Parent{}
    class Child extends Parent{}
    ```
1. Inheritance is **transitive**. If A extends B, and B extends C, then A is also a subclass of C.
1. All public and protected members are automatically available to child class.
1. Package members (same package as the child) are available to child class.
1. Private members are **NEVER** available via inheritance.
1. You cannot `extends` a **final** class.
1. Java supports **single inheritance** but not multiple inheritance. A class can inherit from only one parent class.
### java.lang.Object
1. All class inherit from **java.lang.Object**.
1. If a class doesn't extend another class, the compiler will automatically add the syntax *extends java.lang.Object*.
1. Primitive type doesn't inherit from java.lang.Object.
1. Wrapper class inherits from java.lang.Object.
### Access modifier
1. A top level class is one not defined in another class, i.e. not nested class.
1. You don't have to declare a top level class `public`.
    ```java
    #highlight-next-line
    class Test {}
    ```
1. You cannot declare a top level class `private` or `protected`.
    ```java
    // This will error
    private class Test {}
    ```
1. You can declare a nested class with any access modifier.
    ```java
    class Test {
        {/* highlight-start */}
        public class Nested1{}
        class Nested2{}
        protected class Nested3{}
        private class Nested4{}
        {/* highlight-end */}
    }
    ```
### `this`
1. Local variable and Instance variable can have the same name.
1. By default, Java will use the most granular scope, i.e. it will use the local variable.
1. To use the instance variable instead of the local variable, use the keyword `this`.
    ```java
    public class Test {
        String name = "Peter";
        public void print(String name){
            System.out.println(name);
            #highlight-next-line
            System.out.println(this.name);
        }
        public static void main(String... args) {
            Test test = new Test();
            test.print("John");
        }
    }
    ```
    ```txt title='Result'
    John
    Peter
    ```
1. `this` cannot be used in static method or static initializer.
    ```java
    public class Test {
        String name = "Peter";
        public static void print(String name){
            // This will error
            System.out.println(this.name); // Compilation error - java: non-static variable this cannot be referenced from a static context
        }
        static{
            // This will error
            System.out.println(this.name); // Compilation error - java: non-static variable this cannot be referenced from a static context
        }
    }
    ```
1. The use of `this` is optional. When Java encounters a variable, it will check the class hierarchy.
    ```java
    public class Test {
        String name = "Peter";
        public void print(){
            #highlight-next-line
            System.out.println(name); // Print Peter
            #highlight-next-line
            System.out.println(this.name); // Print Peter
        }
        public static void main(String... args){
            Test test = new Test();
            test.print(); 
        }
    }
    ```
    Unless a local variable with the same name exists, it is not necessary to use `this` to refer an instance variable.
### `super`
1. You can refer a parent variable or method with `super`.
    ```java
    class Parent{
        String name = "John";
    }
    public class Test extends Parent{
        String name = "Peter";
        public void print(){
            System.out.println(this.name); // Print Peter
            #highlight-next-line
            System.out.println(super.name); // Print John
        }
        public static void main(String... args){
            Test test = new Test();
            test.print();
        }
    }
    ```
1. `super` excludes any members found in the current class.
    ```java
    class Parent{}
    class Child extends Parent{
        String name = "Peter";
        public void print(){
            // This will error
            System.out.println(super.name); // Compilation error - java: cannot find symbol, symbol: variable name
        }
        public static void main(String... args){
            Child child = new Child();
            child.print();
        }
    }
    ```
1. Since `this` includes inherited members, you only use `super` when you have a naming conflict via inheritance, and that you need to use the member of parent specifically.
### Constructor
1. A constructor has the same name as the class.
1. A constructor has no return type.
1. Parameter type cannot be var.
1. A class can have multiple constructors with different signature. This is called **constructor overloading**.
1. Constructor is used when creating a new object. This is called **instantiation**.
1. If you don't include any constructors in the class, Java will create a **no-argument default constructor**.
1. Compiler only inserts the default constructor when no constructor is defined.
    ```java
    public class Test
    {
        public Test(String name){}
        public static void main(String... args){
            // This will error
            Test test = new Test(); // Compilation error
        }
    }
    ```
    ```txt title='Result'
    java: constructor Test in class Test cannot be applied to given types;
        required: java.lang.String
        found:    no arguments
        reason: actual and formal argument lists differ in length
    ```
1. A private constructor cannot be called by other classes.
1. If a class only has private constructors, there is no way for other classes to instantiate it. Design pattern like Singleton uses this technique to control and prevent other classes from instantiating a class via `new`.
1. A constructor can call one another using this().
    ```java
    public class Test
    {
        public Test(){
            #highlight-next-line
            this("Hello World");
            System.out.println("Constructor with no parameter is called.");
        }
        public Test(String message){
            System.out.println("Constructor with String parameter ( %s ) is called.".formatted(message));
        }
        public static void main(String... args){
            Test test = new Test();
        }
    }
    ```
    ```txt title='Result'
    Constructor with String parameter ( Hello World ) is called.
    Constructor with no parameter is called.
    ```
1. **this()** call must be first statement in constructor.
    ```java
    public class Test
    {
        public Test(){
            System.out.println("Constructor with no parameter is called.");
            // This will error
            this("Hello World"); // Compilation error - java: call to this must be first statement in constructor
        }
        public Test(String message){
            System.out.println("Constructor with String parameter ( %s ) is called.".formatted(message));
        }
        public static void main(String... args){
            Test test = new Test();
        }
    }
    ```
1. A constructor cannot use this() to call itself.
    ```java
    public class Test
    {
        public Test(){
            // This will error
            this(); // Compilation error - java: recursive constructor invocation
        }
        public static void main(String... args){
            Test test = new Test();
        }
    }
    ```
1. You can use `super()` to call parent constructor.
    ```java
    class Parent{
        public Parent(){
            System.out.println("I am Parent");
        }
        public Parent(String name){
            System.out.println("I am %s".formatted(name));
        }
    }
    class Child extends Parent{
        public Child(){
            #highlight-next-line
            super();
            System.out.println("I am Child");
        }
        public Child(String childName, String parentName){
            #highlight-next-line
            super(parentName);
            System.out.println("I am %s".formatted(childName));
        }
        public static void main(String... args){
            Child child1 = new Child();
            Child child2 = new Child("Alucard", "Dracula");
        }
    }
    ```
    ```txt title='Result'
    I am Parent
    I am Child
    I am Dracula
    I am Alucard
    ```
1. First line of every constructor is a call to either `super()` or overloaded constructor using `this()`.
1. Like `this()`, `super()` call must also be first statement in constructor.
    ```java
    class Parent{
        public Parent(){
            System.out.println("I am Parent");
        }
    }
    class Child extends Parent{
        public Child(){
            System.out.println("I am Child");
            // This will error
            super(); // Compilation error - java: call to super must be first statement in constructor
        }
        public static void main(String... args){
            Child child = new Child();
        }
    }
    ```
1. Java compiler automatically inserts a call to the no-argument constructor `super()` if you do not explicitly call `this()` or `super()` as the first line of a constructor.
    ```java
    class Parent{
        public Parent(){
            System.out.println("I am Parent");
        }
    }
    class Child extends Parent{
        public Child(){
            System.out.println("I am Child");
        }
        public static void main(String... args){
            Child child = new Child();
        }
    }    
    ```
    ```txt title='Result'
    I am Parent
    I am Child
    ```
1. Java compiler only knows how to add no-argument default constructor. It does **NOT** detect and add default constructor that have arguments. You must understand how the compiler add default constructor and `super()`.
1. In case Java compiler cannot implicitly add default constructor due to absence of no-argument constructor in the parent class, you must explicitly call the correct parent constructor in the child constructor. 
    ```java
    class Parent{
        public Parent( String name ){}
    }
    // This will error
    class Child1 extends Parent{} // Compilation error - java: constructor Parent in class Parent cannot be applied to given types
    // This will error
    class Child2 extends Parent{ // Compilation error - java: constructor Parent in class Parent cannot be applied to given types
        // This will error
        public Child2(){}
    // This will error    
    }
    class Child extends Parent{
        public Child(){
            #highlight-next-line
            super( "Bob" );
        }
    } 
    ```
    ```txt title='Compilation error'
    java: constructor Parent in class Parent cannot be applied to given types;
    required: java.lang.String
    reason: actual and formal argument lists differ in length
    ```
1. `super()` always refers to the most direct parent.
### Initialization
1. Class is loaded by JVM before it can be used.
1. Each class is initialized **at most once**.
1. **Class initialization** in the following order:
    1. Superclass is initialized before subclass.
    1. static variable is processed in the order in which they appear in the class.
    1. static initializer is processed in the order in which they appear in the class.
1. `final` instance fields will not be assigned with default values. They must be assigned **exactly once** by the time the constructor completes.
1. `final` Instance fields can be assigned in 3 areas.
    1. The same line they are declared
    1. Initializer
    1. Constructor
1. Remember **final** fields can be assigned only once.    
1. Unlike `final` **local** variables, which are not required to have a value unless they are actually used, `final` **instance** variables must be assigned a value.    
1. **Instance initialization** in the following order:
    1. Class initialization if target class is not initialized.
    1. If target class has superclass, initialize the instance of its super class.
    1. Instance variable in the order in which they appear in the class.
    1. Instance initializer in the order in which they appear in the class.
    1. Constructor
    ```java
    class Parent{
        static{
            System.out.println("Parent static initializer");
        }
        {
            System.out.println("Parent instance initializer");
        }
        public Parent(){
            System.out.println("Parent constructor");
        }
    }
    class Child extends Parent{
        static{
            System.out.println("Child static initializer");
        }
        {
            System.out.println("Child instance initializer");
        }
        public Child(){
            System.out.println("Child constructor");
        }
        public static void main(String... args){
            Child child1 = new Child();
            Child child2 = new Child();
        }
    } 
    ```
    ```txt title='Result'
    Parent static initializer
    Child static initializer
    Parent instance initializer
    Parent constructor
    Child instance initializer
    Child constructor
    Parent instance initializer
    Parent constructor
    Child instance initializer
    Child constructor
    ```
### Overriding and Hiding
1. You cannot override or hide `private` methods since they are not inherited.
1. Rules for **overriding** an instance method:
    1. **Same method signature** as its parent method.   
    1. **At least as accessible as** its parent method. Can be more accessible. Cannot be more restrictive.
    1. **Must not throw new or broader exception** than its parent method.
    1. **Return type must be the same or a subtype** of its parent method.
1. A static method cannot be overridden.
1. A static method can be hidden.
1. When both the parent and the child defines a static method with the same signature, the parent one will be hidden when accessing with child reference. This is called **method hiding**.
1. Rules for **hiding** a static method:
    1. Rules for overriding an instance method apply.
    1. If the method is defined as static in the parent, the child must also define it as static.
1. **Method hiding** if both methods in the parent and child are static.
     ```java title='Method hiding'
    class Parent{
        #highlight-next-line
        static void welcome(){
            System.out.println("Hello");
        }
    }
    class Child extends Parent{
        #highlight-next-line
        static void welcome(){
            System.out.println("hi");
        }
        public static void main(String... args){
            Child child = null;
            child.welcome(); // print hi
        }
    }
    ```
1. **Method overriding** if both methods in the parent and child are NOT static.
    ```java title='Method overriding'
    class Parent{
        #highlight-next-line
        void welcome(){
            System.out.println("Hello");
        }
    }
    class Child extends Parent{
        #highlight-next-line
        void welcome(){
            System.out.println("hi");
        }
        public static void main(String... args){
            Child child = new Child();
            child.welcome(); // print hi
        }
    }
    ```
1. Compilation error occurs if one is static and the other one is not static.
    ```java
    class Parent{
        static void welcome(){
            System.out.println("Hello");
        }
    }
    class Child extends Parent{
        // This will error
        void welcome(){ // Compilation error - java: welcome() in Child cannot override welcome() in Parent, overridden method is static
            System.out.println("hi");
        }
        public static void main(String... args){
            Child child = new Child();
            child.welcome(); // print hi
        }
    }
    ```
1. Variable cannot be overridden. It can only be hidden.
1. If both the parent and child defines an instance variable with the same name, there will be 2 copies of variables. The parent one will be hidden if the variable is accessed by child reference.
1. Overriding a method replaces the parent method on all reference variables (other than super).
    ```java title='Overriding an instance method'
    class Parent{
        #highlight-next-line
        void welcome(){
            System.out.println("Hello");
        }
    }
    class Child extends Parent{
        #highlight-next-line
        void welcome(){
            System.out.println("hi");
        }
        public static void main(String... args){
            Child child = new Child();
            Parent parent = child;
            #highlight-next-line
            child.welcome(); // print hi
            #highlight-next-line
            parent.welcome(); // print hi
        }
    }    
    ```
1. Hiding a method or variable replaces the member only if a child reference type is used.
    ```java title='Hiding a static method'
    class Parent{
        #highlight-next-line
        static void welcome(){
            System.out.println("Hello");
        }
    }
    class Child extends Parent{
        #highlight-next-line
        static void welcome(){
            System.out.println("hi");
        }
        public static void main(String... args){
            Child child = new Child();
            Parent parent = child;
            #highlight-next-line
            child.welcome(); // print hi
            #highlight-next-line
            parent.welcome(); // print Hello
        }
    }
    ```
    ```java title='Hiding a variable'
    class Parent{
        #highlight-next-line
        String name = "Dracula";
    }
    class Child extends Parent{
        #highlight-next-line
        String name = "Alucard";
        public static void main(String... args){
            Child child = new Child();
            Parent parent = child;
            #highlight-next-line
            System.out.println(child.name); // Alucard
            #highlight-next-line
            System.out.println(parent.name); // Dracula
        }
    }    
    ```
1. You cannot override / hide a final method.
    ```java
    class Parent{
        final void welcome(){
            System.out.println("Hello");
        }
    }
    class Child extends Parent{
        // This will error
        void welcome(){ // Compilation error - welcome() in Child cannot override welcome() in Parent, overridden method is final
            System.out.println("hi");
        }
    }    
    ```
    ```java
    class Parent{
        static final void welcome(){
            System.out.println("Hello");
        }
    }
    class Child extends Parent{
        // This will error
        static void welcome(){ // Compilation error - welcome() in Child cannot override welcome() in Parent, overridden method is static,final
            System.out.println("hi");
        }
    }    
    ```
1. The above rule only applies to inherited method. Private methods are redeclared, not overridden or hidden. So no compilation error occurs below.
    ```java
    class Parent{
        #highlight-next-line        
        private final void welcome(){
            System.out.println("Hello");
        }
    }
    class Child extends Parent{
        #highlight-next-line
        private void welcome(){
            System.out.println("hi");
        }
    }    
    ```
    ```java
    class Parent{
        #highlight-next-line
        private static final void welcome(){
            System.out.println("Hello");
        }
    }
    class Child extends Parent{
        #highlight-next-line
        private static void welcome(){
            System.out.println("hi");
        }
    }  
    ```
### Abstract Class
1. You can use keyword `abstract` to define an abstract class.
1. An abstract class cannot be instantiated.
1. An abstract class can contain abstract instance method(s).
1. An abstract class is not required to include any abstract methods.
1. An abstract method does not define a body.
1. By declaring a method abstract, we can guarantee that some version will be available on an instance without having to specify what that version is in the abstract parent class.
1. The overridden method will be used at runtime. This is runtime polymorphism, the object can take many form.
1. Only instance method can be abstract. Variables, static methods etc cannot be abstract.
1. Abstract instance method can only be declared in abstract class.
1. A concrete class is a non-abstract class.
1. Concrete class that inherits the abstract class must implement all inherited abstract methods.
1. Overriding an abstract method sticks to same rules of overriding methods.
1. An abstract class can have constructors.
1. Abstract classes are initialized with constructors in the same way as non-abstract classes.
1. A constructor in an abstract class can be called only when it is being initialized by a non-abstract subclass.
1. A method or class cannot marked as both `final` and `abstract`.
1. A method cannot be marked as both `private` and `abstract`.
1. A method can be marked as both `private` and `final`.
1. A `static` method cannot be marked `abstract`.
### Immutable Object
1. Java is an OOP. States are stored in object.
1. States are, after all, variables which can eventually end up as object(s).
1. If an outsider can change the internal states of an object, it will affect the functions, operations or calculations performed by this object.
1. Some people may think, as long as the instance variables are defined as private, setter is not defined, and that the constructor is defined private, outsiders cannot control the instantiation process or change its internal value.
1. The cruel fact is, as long as reference type is involved and that the outsiders hold a reference of internal variables of your target object in whatever way, even though they cannot reassign the reference, they can change the content of that reference.
1. Immutable objects pattern is an object-oriented design pattern in which an object cannot be modified after it is created.
1. Below is the strategy to make an object immutable:
    1. Mark the class final. 
        - So there is no way for other people to subclass your class to make it mutable.
    1. Make all the constructor private.
        - So except via specific factory method or static method, no people can instantiate your class in whatever way via `new`.
    1. Mark all the instance variables `private` and `final`.
        - `private` isolates the instance variables from outsiders.
        - `final` does not allow reassignment of instance variables.
    1. Don't allow referenced mutable objects to be modified.
        - Instead of providing outsider getter method to access the reference mutable objects, provide **delegate** or **wrapper** method to outsider to read the data.
    1. Defensive copying
        - **on the way in**: the input parameters passed to constructor for instantiation of the target object will first make a copy inside the constructor. This way, even the outside may hold the reference of parameter and change its content, the target object is not affected.
            ```java title='Without defensive copying'
            import java.util.ArrayList;
            import java.util.List;
            public class Test
            {
                private final List<String> names;
                public Test(List<String> names){
                    this.names = names;
                }
                public void print(){
                    System.out.println(names);
                }
                public static void main(String... args){
                    List<String> names = new ArrayList<String>(){ { add("John"); add("Mary"); add("June"); } };
                    Test test = new Test(names);
                    test.print(); // [John, Mary, June]
                    names.clear();
                    // This will error
                    test.print(); // [], the object is being changed by an outsider
                }
            }
            ```
            ```java title='With defensive copying'
            import java.util.ArrayList;
            import java.util.List;
            public class Test
            {
                private final List<String> names;
                public Test(List<String> names){
                    #highlight-next-line
                    List<String> copy = new ArrayList<String>(names); // Defensive copying
                    this.names = copy;
                }
                public void print(){
                    System.out.println(names);
                }
                public static void main(String... args){
                    List<String> names = new ArrayList<String>(){ { add("John"); add("Mary"); add("June"); } };
                    Test test = new Test(names);
                    test.print(); // [John, Mary, June]
                    names.clear();
                    #highlight-next-line
                    test.print(); // [John, Mary, June]
                }
            }
            ```
        - **on the way out**: the output return type of the target object will always be a copy. Even outsiders hold the reference of this copy and make changes to it, the original target object will not be affected.
            ```java title='Without defensive copying'
            import java.util.ArrayList;
            import java.util.List;
            public class Test
            {
                private final List<String> names = new ArrayList<String>(){ { add("John"); add("Mary"); add("June"); } };;
                public List<String> getNames(){
                    return names;
                }
                public static void main(String... args){
                    Test test = new Test();
                    List<String> names = test.getNames(); // [John, Mary, June]
                    System.out.println(names);
                    names.clear();
                    names = test.getNames();
                    // This will error
                    System.out.println(names); // [], the object is being changed by an outsider
                }
            }
            ``` 
            ```java title='With defensive copying'
            import java.util.ArrayList;
            import java.util.List;
            public class Test
            {
                private final List<String> names = new ArrayList<String>(){ { add("John"); add("Mary"); add("June"); } };;
                public List<String> getNames(){
                    #highlight-next-line
                    return new ArrayList(names); // Defensive copying
                }
                public static void main(String... args){
                    Test test = new Test();
                    List<String> names = test.getNames(); // [John, Mary, June]
                    System.out.println(names);
                    names.clear();
                    names = test.getNames();
                    #highlight-next-line
                    System.out.println(names); // [John, Mary, June]
                }
            }
            ```

## Beyond Classes
## Lambdas And Functional Interfaces