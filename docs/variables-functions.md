---
id: vars-and-funcs
title: Variables and Functions
sidebar_label: Variables and Functions
---

## Immutable variables declaration

In scala val keyword is used to declare an immutable variable. If the the same variable is re-assigned to another value, then the compiler complains about the same.

Let's launch the `amm` shell and start exploring.

```scala
@ val s = "Human"
s: String = "Human"

@ val i = 10
i: Int = 10

@ i = 50
cmd2.sc:1: reassignment to val
val res2 = i = 50
             ^
Compilation Failed
```

Re-assigning different value to a variable initialized using val keyword, would result in compilation error.

## Mutable variable declaration

If you want to re-assign a different value to the variable then you need to use `var` keyword. In the below example, you can see, that name is being re-assigned to another value.

```scala
@ var name = "Shad Amez"
name: String = "Shad Amez"

@ name = "Shad"


@ name = 100
cmd4.sc:1: type mismatch;
 found   : Int(100)
 required: String
val res4 = name = 100
```

`var` keyword allows re-assignment to a variable of the same type as the initial value.
