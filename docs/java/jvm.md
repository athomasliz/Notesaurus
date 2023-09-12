---
sidebar_position: 1
---

import { Mermaid } from 'mdx-mermaid/Mermaid'

# Day 0: JVM

### Notes

1. Flow: From source code to JVM
   ```mermaid
      flowchart LR;
      A1[Java source code <br/>.java files]-->B1[Java Compiler]-->C[bytecode <br/>.class files]-->D1[JVM for Windows]-->E1[fa:fa-windows Windows]
      A2[Kotlin source code <br/>.kt files]-->B2[Kotlin Compiler]-->C
      A3[Scala source code <br/>.sc files]-->B3[Scala Compiler]-->C
      C-->D2[JVM for Linux]-->E2[fa:fa-linux Linix]
      C-->D3[JVM for macOS]-->E3[fa:fa-apple macOS]       
   ```
1. JVM main task: Garbage Collection
    - Deallocation of objects
    - Reallocate live objects to get rid of **Memory Fragmentation** via compacting / copy
1. How: How does Java run on JVM?
   ```mermaid
      flowchart TD;
      A[.class files]-->B[Class Loader]<-->C[Runtime data areas]<-->D[Execution engine]<-->E[JNI Java Native Interface]<-->F[Native Libraries]
  ```
1. Runtime data area
    1. PC registers (Call stack)
        - Each thread has its own PC registers
    1. Stack        
        - Each thread has its own stack
        - Each stack has **frames**
        - Each frame is created for each method call (Consider recursion)
            -  Local variable array
                - First element is reference to the object, i.e. this, for instance method
            -  Frame data
            -  Operand stack
        - StackOverFlowError is thrown if stack memory is too small for the frame
        - OutOfMemoryError is thrown if not enough space for a new stack for a new thread
    1. Heap
    1. Method area (Metaspace)
        - Klass
        - Bytecode
        - Constant Pool
        - Annotation etc   
    1. Native method stack

### Reference

- [![Java Memory Management](https://learning.oreilly.com/covers/urn:orm:book:9781801812856/160h/)](https://learning.oreilly.com/library/view/java-memory-management/9781801812856/)


