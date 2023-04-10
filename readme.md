tsc filename.ts -------ts to js

tsc -watch filename.ts

what is typescript?

typescript is a superset of js.
superset ->which simply means , a wrapper or layer with more features.

some features include
-types
-interfaces
-decorators

- all es6 feature like classes,arrow functions,modules,block scoped variable

## types:-

when we use types,we tell our program what kind of data it should expect.

let name :string;

name:edwind;

## interfaces

with interfaces we can define how iur data or functionalities should be modeled.

interface Post{
title:string;
}

let post:Post ={
title:form.title
}

## Decorators

Decorators are funtions that are invoked with a prefixed @symbol.

@component
-they return the same thing that was passed in but it has been argument in some way.

-we cann decorate,classes,methods,properties and parameters

---

type Inference
string
number
boolean
function as type
object as type
union type

---

defining and using interfaces
see interface.ts

---

implementing interfaces to functions
see interface.ts

---

implementing interfaces to classes
see interfaces.ts

---

Interface Inheritance

see interface.ts

---

Class Defination

## see class_defination.ts

Class Access Modifier------private ,public,protected
see class_defination.ts

---

class Inheritance
see class_inheritance.ts

---

class Abstract
abstract_class.ts

---

Generics
generics.ts

---

class generics
generic classes.ts

---

class constraints
generic classes.ts

---

Namespaces
index.html
namespace.ts

---

using namespaces
namespace.ts

---

Namespace import
module1.ts
namespace.ts
 tsc namespace --outFile namespace.js

----------------------------
namespace alias
namepace.ts
import


------------------------------------------
module exports
module_external
module_runner
--------------------------------------------
loading modules
