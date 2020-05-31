# The needs
- An Evolution of data CSV
    - header, rows, columns
    - east to parse, east to read
    - dis
        - the data types of elements has to be inferred

- Relational tables definitions
    - add types
    - Ad
        - fully typed
        - fits in a table
    - dis
        - data has to be flat
        - stored in database, data definition will be different for each database

- Json
    - can be shared across the network
    - Ad
        - Data can take any form
        - widely accepted format on the web
        - can be read
    - dis
        - no schema enforcing
        - objects quite big size

- Protocol Buffers
    - defined by a .proto text file
    - easily read it and understand
    - Ad
        - Data is fully typed
        - Data is compressed automatically
        - Schema is needed to generate code and read the data
        - Documentation can be embedded in the schema
        - Data can be read across any language
        - Schema can evolve over time
        - 3 - 10 x smaller, 20 - 100x faster than XML
        - Code is generated automatically
    - Dis
        - support for some languages 
        - Can't open the serialized data with a text editor

- Today Protocol Buffers is used as Google for almost all their internal applications
- They have over 48000 Protocol messages types in 12000 .proto files

# How are Protocol Bufferes used?
- .proto file: human-readable -> (automated generation of code) Java, Python, Go .. -> Serialized Data ( can be interpreted by any language)
- Some databases may have support for Protocol Buffers data format
- Lots of RPC frameworks, including gRPC, use Protocol Buffers to exchange data
- Google uses it for all their internal API
- Some big projects like 'etcd' use Protocol Bufferes for transporting data

- Proto2 vs Proto3
    - Mid 2016, Google release the 3rd iteration of Protocol Buffers
    - Only view proto3
    
# Course Structure
- Basics 
- Programming


# Basics
- Message
    - syntax
    - message

- Scalar Types
    - floating point numbers
    

# Tags
- smallest tag: 1,
- largest: 2 ^ 29 - 1
- 1 to 15 use 1 byte in space, so use them for frequently populated fields
- 16 to 2047 use 2 bytes

# Repeated Fields
- To make a "list" or an "array", you can use the concept of repeated fields


# Default Values for fields
- bool: false
- number: 0
- string: empty string
- bytes: empty bytes
- enum: first value
- repeated: empty list

# Enums

# Basics 2
- multiple messages in a same proto file
- nesting types
- importing types

# Packages
- it is very important to define the packages in which your protocol buffere messages live
    - when your code get compiled, it will be placed at the package indicated
    - it also helps to prevent name conflicts between messagees
- Pachages will help all the different languages compile correctly from .proto file

# Evolution of Data 
- When you first declare a message in your protocol, you have a defined sets of requirements
- But as time go on, your business will evolve, and you may have a different set of requirements
- Some fileds may change, some fileds may be added and other removed

- So you need to be able to evolve the source data without breaking the other applications reading it

# Updating protocol rules
1. Don't change the numeric tags for any existing fields
2. You can add new fields, and old code will just ignore them
3. Likewise, if the old / new code freads unknown data, the default will take place
4. Fields can be remoed, as long as the tag number is not used again in your updated message type. You want to rename the field instead, perhaps adding the prefix "OBSOLETE_", or make the tag reserved, so that future users of your .proto can't accidentally reuse the number

# Add, Change, Remove Fields
- Should care the default values, always

# Reserved Keywords
- You can reserve TAGS and FIELD NAMES
- You can't mix TAGS and FIELD NAMES in the same reserved statement
- We reserve TAGS to prevent new fields from re-using tags
- we reserve FIELD NAMES to prevent code bugs
- Do not ever remove any reserved tags

# Beware of Defaults
- Make sure the default value doesn't have meaning for your business

# Evolving Enumerations

# Protocol Buffers Advanced
- Integer Deep Dive
    - Integer Types
        - Each type is basically constructed to handle
            - Range of allowed values: 64 bits has more values than 32 bits
            - Whether negative values are allowed
	    - size efficiency on serialization

	- 64 bits allow for a greater range
	- 32 bit
	    - int32 / sint32: -2,147,483,648 to 2,147,483,647
	    - uint32: 0 to 4,294,967,295
	- 64 bit

- Advanced Types
    - OneOf
	- You can use oneof to tel protocol buffers that only one field can have a value
	- oneof fields cannot be repeated
    - Maps
	- Maps can be used to map scalars to values of any type
    - Timestamp
	- Timestamp: seconds and nanoseconds
    - Duration

- Protocol Buffers Options
    - Options allow to alter the behavior of the protoc compiler when generating code for specific languages
    - There are few bundled options

# Naming Conventions
- Use CamelCase for message names
- Use underscore_separated_names for fields
- Use CalmelCase for Enums and CAPITAL_WITH_UNDERSCORE for values names

# Use stype guiding: https://github.com/uber/prototool/blob/dev/etc/style/uber1/uber1.proto

# Services
- Protocol Buffers can define Services on top of Messages
- A service is a set of endpoints your application can be accessible
- Mainly gRPC

# Intro to gRPC

# Protocol Buffers Internal
- Encoding
    - The magic is protocol buffers is to have the same serialization and deserialization for all the languages
    - Serialization means transforming an object into bytes and deserialization means taking bytes and getting an object out of it

- High level understanding encoding
- Decoding rules for VarInts
    - VarInt is a number of variable length when encoded
    - here's the strategy for the number 300
	- AC02: Sequence of 2 Bytes - hex form (one byte is 8 bit)
        - 300 is 0xAC02 in VarInt form
	- 1010 1100 0000 0010: Sequence of 16 bits
	- 010 1100 000 0010: bit sequence after dropping the first bit (if the first bit drooped in 1, read next byte, else stop - MSB: https://en.wikipedia.org/wiki/Bit_numbering)
	- 000 0010 ++ 010 1100: Reverse order of byte sequence
	- (000 00) 100101100: Concatenate the bits and drop the leading 0s
	- 100101100 = 256 + 32 + 8 + 4 = 300 

- Decoding Rules for Messages
    - Messages are a series of <key, value> pair
    - The key has two component
	- The tag number
	- The "wire" type - takes three bits 
    - Wire type can take 6 different values (for now)
	- VarInt, 64-int, Length-delimited, start group, end group, 32-bit

- The first field is always a varint representing the key
- Schema: message MyMessage {int32 age = 1 };
- Walkthrough on actual Protocol message: 08 AC 02

- 08 = 0000 1000 (byte into bits)
- 000 1000: read as varint, drop the MSB(0) 
- Take last three bits: 000 -> wire type is 0, meaning "varint"
- key is tag 1, field type is varint
- value is AC 02 (== 300) 
