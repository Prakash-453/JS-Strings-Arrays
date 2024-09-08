1. Uppercase
- Question: Write a function that takes an array of strings as input and returns a new array with all strings converted 
     to uppercase.
- Hints: Use the toUpperCase() method.
- Input Test Cases: ["hello", "world", "abc"], ["xyz","abc", "def"]
- Output Test Cases: ["HELLO", "WORLD", "ABC"], ["XYZ", "ABC", "DEF"]

PROGRAM : 
function uppercase(arr) {
    res = arr.map(a => a.toUpperCase());
}
uppercase(['hello', 'world', 'abc']);
console.log(res);
uppercase(['xyz', 'abc', 'def']);
console.log(res);

OUTPUT:
[ 'HELLO', 'WORLD', 'ABC' ]
[ 'XYZ', 'ABC', 'DEF' ]

2. Substring
- Question: Write a function that takes an array of strings as input and returns a new array with the first 3 
       characters of each string.
- Hints: Use the substring() method.
- Input Test Cases: ["hello", "world", "abc"], ["xyz","abcdef"]
- Output Test Cases: ["hel", "wor", "abc"], ["xyz", "abc"]

PROGRAM : 
function character(arr) {
    res = arr.map(a => a.substring(0, 3));
}
character(['hello', 'world', 'abc']);
console.log(res);
character(['xyz', 'abcdef']);
console.log(res);

OUTPUT:
[ 'hel', 'wor', 'abc' ]
[ 'xyz', 'abc' ]

3. Replace
- Question: Write a function that takes an array of strings as input and returns a new array with all occurrences of 
       "o" replaced with "0".
- Hints: Use the replace() method.
- Input Test Cases: ["hello", "world", "abc"], ["xyz","foo", "bar"]
- Output Test Cases: ["hell0", "w0rld", "abc"], ["xyz","f00", "bar"]

PROGRAM : 
function replace(arr) {
    res = arr.map(a => a.replace(/o/g, '0'))
}
replace(['hello', 'world', 'abc'])
console.log(res)
replace(['xyz', 'foo', 'bar'])
console.log(res)

OUTPUT:
[ 'hell0', 'w0rld', 'abc' ]       
[ 'xyz', 'f00', 'bar' ]

4. Split
- Question: Write a function that takes an array of strings as input and returns a new array with each string split into words.
- Hints: Use the split() method.
- Input Test Cases: ["hello-world", "abc-def"],["xyz-abc-def"]
- Output Test Cases: ["hello", "world", "abc", "def"], ["xyz", "abc", "def"]

PROGRAM:
function spliting(arr) {
    res=arr.flatMap(a=>a.split('-'))
}
spliting(["hello-world", "abc-def"])
console.log(res)
spliting(["xyz-abc-def"])
console.log(res)

OUTPUT:
[ 'hello', 'world', 'abc', 'def' ]
[ 'xyz', 'abc', 'def' ]

5. Filter
- Question: Write a function that takes an array of strings as input and returns a new array with only the strings 
        longer than 5 characters.
- Hints: Use the filter() method.
- Input Test Cases: ["hello", "world", "abc", "defghi"], ["xyz", "abcdef"]
- Output Test Cases: ["defghi"], ["abcdef"]

PROGRAM:
function filter(arr) {
    res = arr.filter(a => a.length>5)
}
filter(["hello", "world", "abc", "defghi"])
console.log(res)
filter(["xyz", "abcdef"])
console.log(res)

OUTPUT:
[ 'defghi' ]
[ 'abcdef' ]

6.Map
- Question: Write a function that takes an array of strings as input and returns a new array with all strings
            converted to uppercase and "!" appended.
- Hints: Use the map() method.
- Input Test Cases: ["hello", "world", "abc"], ["xyz","abc"]
- Output Test Cases: ["HELLO!", "WORLD!", "ABC!"], 
        ["XYZ!", "ABC!"]

PROGRAM:

function map(arr) {
    // res = arr.map(a => a.toUpperCase() + "!")
    res = arr.map(a => a.toUpperCase().concat("!"))
}
map(["hello", "world", "abc"])
console.log(res)
map(["xyz", "abc"])
console.log(res)

OUTPUT:
[ 'HELLO!', 'WORLD!', 'ABC!' ]
[ 'XYZ!', 'ABC!' ]

7.Find
- Question: Write a function that takes an array of strings as input and returns the first string containing "o".
- Hints: Use the find() method.
- Input Test Cases: ["hello", "world", "abc", "defghi"],["xyz", "foo", "bar"]
- Output Test Cases: "hello", "foo"

PROGRAM:
function find(arr)
{
    res=arr.find(a=>a.includes('o'))
}
find(["hello", "world", "abc", "defghi"])
console.log(res)
find(["xyz", "foo", "bar"])
console.log(res)


OUTPUT:
hello
foo

8.Join
- Question: Write a function that takes an array of strings as input and returns a new string with all strings joined by commas.
- Hints: Use the join() method.
- Input Test Cases: ["hello", "world", "abc"], ["xyz","abc"]
- Output Test Cases: "hello,world,abc", "xyz,abc"

PROGRAM:
function join(arr)
{
    res=arr.join(",")
}
join(["hello", "world", "abc"])
console.log(res)
join(["xyz", "abc"])
console.log(res)

OUTPUT:
hello,world,abc
xyz,abc



