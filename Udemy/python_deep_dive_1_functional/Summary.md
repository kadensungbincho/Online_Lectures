# Python Hierarchy
- Numbers
    - integral
        - bool
        - integers
    - non integral
        - floats
        - complex
        - dicimals
        - fractions
- Collections
    - Sequences
        - Mutable
            - list
        - Immutable
            - tuples
            - strings
    - Sets
        - Mutable
            - sets
        - Immutable
            - frozen sets
    - Mapping
        - Dictionaries
- Callables
    - User Defined Functions
    - Generators
    - Classes
    - Instance Methods
    - Class Instances (__call__())
    - Built-in Functions 
    - Built-in Methods
- Singletons
    - None
    - Notimplemented
    - Ellipsis (...)

# Multi Line Statements and Strings
Python Program
    - physical lines of code: end with a physical newline character
        - logical lines of code: end with a logical NEWLINE token
            - tokenized
physical newline vs logical newline

- implicit: support inline comments
    - list literals
    - tuple literals
    - dictionary literals
    - set literals
    - function arguments / parameters

- explicit
    - you can break up statements over multiple lines explicitly by using the \ character
    ```python3
    if a \
       and b \
       and c:
    ```

Multi line string literals

# Variables
- memory references
    - what variables really are
    - memory management
    - reference counting vs garbage collection
    - dynamic vs static typing
    - mutability and immutability
    - shared references
    - variable equality
    - everything is an object

# Variables are memory references
- memory 
- memory address
- heap
- python memory manager
- id() function