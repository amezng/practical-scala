---
id: hello
title: Hello Scala World
sidebar_label: Hello Scala
---

## First program

Fire up the ammonite shell using the command `amm` and typing `Hello World` as shown below.

```scala
@ "Hello Scala"
res0: String = "Hello Scala"
```

Printing `Hello Scala` also resulted in some extra output shown as `res0: String = "Hello Scala"`. This leads to the next topic, which is data types in Scala.

## Data types

### String

The most commonly used data type for representing text in String. Scala inferred the type of the given value automatically and stored in a temp variable `res0` in this case.

### Int

Let's type a number in the shell. The type inferred in this case is a `Int` whose value ranges from -2147483648 to 2147483647.

```
@ 456
res1: Int = 456
```

### Expressions

Using expressions is similar to other programming languages, as shown below.

```
@ 12 + 65
res2: Int = 77
```

```
@ "Hello" + 12
res3: String = "Hello12"
```

### Type conversions

Converting types to another type is as simple as calling a method - `toXXX`. Let's try some.

```java
@ "Hello".toInt
java.lang.NumberFormatException: For input string: "Hello"
  java.lang.NumberFormatException.forInputString(NumberFormatException.java:65)
  java.lang.Integer.parseInt(Integer.java:580)
  java.lang.Integer.parseInt(Integer.java:615)
  scala.collection.StringOps$.toInt$extension(StringOps.scala:889)
  ammonite.$sess.cmd4$.<clinit>(cmd4.sc:1)
```

Oops! This brings us to the world of Java. :zany_face: Scala being a JVM language, you can expect such exception stack trace in the real world more often, although Scala enables better exception handling using the power of functional effects. More on this on the upcoming chapters.

Let's try again.

```
@ 'A'.toByte
res6: Byte = 65
```

## First exercise

Explore the following functions for the 'A' character and notice the result and their respective types.

- to(70)
- toHexString
- toLower
- toRadians
- toShort
- toLong

All the above methods will help you see most of the primitive types available in Scala.
