---
sidebar_position: 1
---

import { Mermaid } from 'mdx-mermaid/Mermaid'

# JVM

### Notes

1. From source code to JVM
   ```mermaid
      flowchart LR;
      A1[Java source code <br/>.java files]-->B1[Java Compiler]-->C[bytecode <br/>.class files]-->D1[JVM for Windows]-->E1[fa:fa-windows Windows]
      A2[Kotlin source code <br/>.kt files]-->B2[Kotlin Compiler]-->C
      A3[Scala source code <br/>.sc files]-->B3[Scala Compiler]-->C
      C-->D2[JVM for Linux]-->E2[fa:fa-linux Linix]
      C-->D3[JVM for macOS]-->E3[fa:fa-apple macOS]       
   ```
1. JVM Overview
   [![JVM Overview](/img/java/jvm-memory.svg)](/img/java/jvm-memory.svg)
1. Runtime data areas
    1. PC registers (Call stack)
        - What code and which line of code being executed is being held here
        - Hold the address of the instruction
        - Know the sequence of instructions that needs to be executed
        - Each thread has its own PC register
    1. Stack area
        - Linear data structure
        - Where the **primitives** and **references to the heap** are stored
        - Each thread has its own stack
        - Each stack has **frames**
        - Each frame is created for each method call
        - When method A calls method B, a new frame for method B is created. This new frame will then become the **current frame**, and also the **top frame** of the stack. The stack has access to this top frame only.
        - Each frame is removed after method execution.
        - Each frame consists of the following:
            -  Local variable array
                - For instance method, the first element is the reference to the object itself, i.e. this.
            -  Frame data
                - consists of data needed to execute the method. Examples: reference to the constant pool.
            -  Operand stack
        - *StackOverFlowError* is thrown if stack memory is too small for the frame
        - *OutOfMemoryError* is thrown if not enough space for a new stack for a new thread
    1. Heap area
        - Hierarchical data structure
        - Where the **object** is stored
        - Dynamic memory allocation
        - Garbage collection by JVM here
        - *OutOfMemoryError* is thrown when running out of heap memory
    1. Method area (Metaspace)
        - Class's metadata
            - Klass
            - Bytecode
            - Static variables
            - Constant pools
            - Constructor code
            - Annotation   
    1. Native method stack area
        - a.k.a. C stack
1. Stack or Heap: where are things actually stored?
    1. Primitives and wrapper classes
        - Both are immutable
        - Primitive for the stack frame is stored on the stack
        - Primitive belongs to the object (as instance variable) is stored together with the object on the heap
        - All wrapper class objects are stored on the heap
    1. References
        - Can be stored on both the stack and the heap
        - Local variable: stack
        - Instance variable: heap
    1. Objects
        - Always on the heap
        - String is stored in String Pool (a.k.a. String Constant Pool) in the heap
1. Call-by-value vs Call-by-reference
    - Call-by-value: passing parameters as **copy**. Hence immutable.
    - Call-by-reference: passing parameters as **reference**. 
        - The object being referred to is mutable. Anyone who get its reference can mutate the object, even it is declared private.
        - Problem: Violate the proper encapsulation
        - Solution: Defensive copying, Deep copy on both the way in and out            
1. Garbage Collection
    - Eligibility of object for GC: whether the object can be deallocated from memory
    - **GC root** (Garbage collection root): special type of live object not eligible for GC
    - All objects reachable from GC roots are not eligible for GC
    - GC root includes:
        - Local variable
        - Static variable
        - Active Java threads
        - Native references
    - Generational GC: divide memory into young and old generation
    - Minor GC
        - Triggered when eden is full
        - GC on young generation
        - Move live objects from young generation to old generation
        - Algorithm: **Mark and Copy**. For newbie, google details for minor GC.
            - Survivor space is deliberately divided into S0 and S1. This is for the purpose of copying
            - S0 and S1 takes turn as the target copying space
            - Take S1 to be the target copying space. For live objects in different places, do the following:
                1. At S1
                    - For live objects that reach their live threshold, copy to old generation
                    - clear only the live objects above in S1
                1. At eden
                    - copy to S1
                    - clear the whole eden
                1. At S0 
                    - copy to S1
                    - clear the whole S0                
                1. Incoming new objects
                    - copy to eden    
    - Major GC
        - Triggered when tenured is full
        - GC on old generation
        - Algorithm: **Mark and Compact**

### Reference

- [java how to avoid stop-the-world garbage collection](https://stackoverflow.com/questions/77046489/java-how-to-avoid-stop-the-world-garbage-collection)
- [Does Java Garbage Collect always has to "Stop-the-World"?](https://stackoverflow.com/questions/40182392/does-java-garbage-collect-always-has-to-stop-the-world)
- [minor gc 会发生stop the world 现象吗？](https://www.zhihu.com/question/29114369?utm_id=0)

### Books
[![Java Memory Management](https://learning.oreilly.com/covers/urn:orm:book:9781801812856/160h/)](https://learning.oreilly.com/library/view/java-memory-management/9781801812856/)




