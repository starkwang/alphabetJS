
# AlphabetJS

[![npm version](https://badge.fury.io/js/alphabetjs.svg)](https://badge.fury.io/js/alphabetjs)

```

     /\     |ˉ|         |ˉˉˉˉˉˉˉˉˉ\ |ˉ|      |ˉ|     /\     |ˉˉˉˉˉˉˉˉˉ\ |ˉˉˉˉˉˉˉˉˉˉ||ˉˉˉˉˉˉˉˉˉˉˉ|
    /  \    | |         | |ˉˉˉˉˉˉ\ \| |      | |    /  \    | |ˉˉˉˉˉ\ | | |ˉˉˉˉˉˉˉˉ  ˉˉˉˉ| |ˉˉˉˉ 
   / /\ \   | |         | |      | ||  ˉˉˉˉˉˉ  |   / /\ \   |  ˉˉˉˉˉ  / |  ˉˉˉˉˉˉˉˉ|     | |     
  / /  \ \  | |         | ˉˉˉˉˉˉˉ  /| |ˉˉˉˉˉˉ| |  / /  \ \  | |ˉˉˉˉˉ\ \ | |ˉˉˉˉˉˉˉˉ      | |     
 /  ˉˉˉˉ  \ | |         | |ˉˉˉˉˉˉˉˉ | |      | | /  ˉˉˉˉ  \ | |     /  || |              | |     
/ /ˉˉˉˉˉˉ\ \|  ˉˉˉˉˉˉˉˉ|| |         | |      | |/ /ˉˉˉˉˉˉ\ \|  ˉˉˉˉˉ  / |  ˉˉˉˉˉˉˉˉ|     | |     
ˉˉ        ˉˉ ˉˉˉˉˉˉˉˉˉˉ ˉˉˉ          ˉ        ˉ ˉˉ        ˉˉ ˉˉˉˉˉˉˉˉˉ   ˉˉˉˉˉˉˉˉˉˉ      ˉˉˉ     

```


AlphabetJS is a small tool to help you output big English character in console/shell or anyother platform.

------

# Usage  

Use `npm` to install it 

```
npm install alphabetjs --save
```
Then you can require it in node:

```js
const Alphabet = require('alphabetjs');
```
Then you can use it to print character in shell:

```js
const str = Alphabet('KOBE24','planar')
console.log(str);
```

And then you get:

```
|ˉ|    /ˉ/  /ˉˉˉˉˉˉˉˉ\ |ˉˉˉˉˉˉˉˉˉ\ |ˉˉˉˉˉˉˉˉˉˉ| /ˉˉˉˉˉˉˉˉ\     /ˉˉˉ|   
| |   / /  / /ˉˉˉˉˉˉ\ \| |ˉˉˉˉˉ\ | | |ˉˉˉˉˉˉˉˉ / /ˉˉˉˉˉˉ\ \   / /| |   
|  ˉˉˉ |   | |      | ||  ˉˉˉˉˉ  / |  ˉˉˉˉˉˉˉˉ|ˉˉ       / /  / / | |   
| |ˉˉˉ\ \  | |      | || |ˉˉˉˉˉ\ \ | |ˉˉˉˉˉˉˉˉ |ˉˉˉˉˉˉˉˉ /  / /  | |   
| |    \ \ \ \      / /| |     /  || |         | |ˉˉˉˉˉˉˉ  |  ˉˉˉˉ ˉˉˉ|
| |     \ \ \ ˉˉˉˉˉˉ / |  ˉˉˉˉˉ  / |  ˉˉˉˉˉˉˉˉ||  ˉˉˉˉˉˉˉˉ| ˉˉˉˉˉ| |ˉˉ 
 ˉ       ˉ   ˉˉˉˉˉˉˉˉ   ˉˉˉˉˉˉˉˉˉ   ˉˉˉˉˉˉˉˉˉˉ  ˉˉˉˉˉˉˉˉˉˉ       ˉˉˉ 

```


--------------
# API

### Alphabet(str,character_type);

`@param {string} str` : contains `english character` or `number`, the string you want to output.

`@param {string} character_type` : `'planar'` or `'stereo'` , the style of the character

----------
# License

The MIT License (MIT)

Copyright (c) Weijia Wang <starkwang@126.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

