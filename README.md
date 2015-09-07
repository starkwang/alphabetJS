```

     /\     |ˉ|         |ˉˉˉˉˉˉˉˉˉ\ |ˉ|      |ˉ|     /\     |ˉˉˉˉˉˉˉˉˉ\ |ˉˉˉˉˉˉˉˉˉˉ||ˉˉˉˉˉˉˉˉˉˉˉ|
    /  \    | |         | |ˉˉˉˉˉˉ\ \| |      | |    /  \    | |ˉˉˉˉˉ\ | | |ˉˉˉˉˉˉˉˉ  ˉˉˉˉ| |ˉˉˉˉ 
   / /\ \   | |         | |      | ||  ˉˉˉˉˉˉ  |   / /\ \   |  ˉˉˉˉˉ  / |  ˉˉˉˉˉˉˉˉ|     | |     
  / /  \ \  | |         | ˉˉˉˉˉˉˉ  /| |ˉˉˉˉˉˉ| |  / /  \ \  | |ˉˉˉˉˉ\ \ | |ˉˉˉˉˉˉˉˉ      | |     
 /  ˉˉˉˉ  \ | |         | |ˉˉˉˉˉˉˉˉ | |      | | /  ˉˉˉˉ  \ | |     /  || |              | |     
/ /ˉˉˉˉˉˉ\ \|  ˉˉˉˉˉˉˉˉ|| |         | |      | |/ /ˉˉˉˉˉˉ\ \|  ˉˉˉˉˉ  / |  ˉˉˉˉˉˉˉˉ|     | |     
ˉˉ        ˉˉ ˉˉˉˉˉˉˉˉˉˉ ˉˉˉ          ˉ        ˉ ˉˉ        ˉˉ ˉˉˉˉˉˉˉˉˉ   ˉˉˉˉˉˉˉˉˉˉ      ˉˉˉ     

```

#AlphabetJS

AlphabetJS is a small tool to help you output big English character in console/shell or anyother platform.

------

#Usage  

###In browser

Import `alphabet.js` or `alphabet.min.js`


```
 <script type="text/javascript" src="alphabet.min.js"></script>

```

Then you can use it to print character in console:

```
 console.log(Alphabet('LJB23','stereo'));
```

And then you get:

```
|ˉ|ˉ|         |ˉˉˉˉˉˉˉˉˉ|ˉ||ˉˉˉˉˉˉˉˉˉ\ˉ\  /ˉˉˉˉˉˉˉˉ\ˉ\ |ˉˉˉˉˉˉˉˉˉˉ\ˉ\
| | |         ˉˉˉˉˉ| |ˉ|ˉˉˉ| |ˉ|ˉˉˉ\ | | / /ˉ/ˉˉˉˉ\ \ \ˉˉˉˉˉˉˉˉˉ| |ˉ|
| | |              | | |   |  ˉˉˉˉˉ  / / ˉˉˉˉ     / /ˉ/|ˉˉˉˉˉˉˉˉ  /ˉ/
| | |              | | |   | |ˉ|ˉˉˉ\ \ \ |ˉˉˉˉˉˉˉˉ / / ˉˉˉˉˉˉˉˉˉ| \ˉ\
| | |         \ˉ\ˉ\/ | |   | | |   /  | || |ˉ|ˉˉˉˉˉˉˉ           / |ˉ|
|  ˉˉˉˉˉˉˉˉ|ˉ| \ ˉˉ / /    |  ˉˉˉˉˉ  / /|  ˉˉˉˉˉˉˉˉ|ˉ||ˉˉˉˉˉˉˉˉ  /ˉ/
ˉˉˉˉˉˉˉˉˉˉˉˉˉˉ  ˉˉˉˉˉˉ     ˉˉˉˉˉˉˉˉˉˉˉˉ  ˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉ 
```
---------

###In node

Ise `npm` to install it 

```
 npm install alphabetjs
```
Then you can require it in node:

```
 Alphabet = require('alphabetjs');
  
```
Then you can use it to print character in shell:

```
 console.log(Alphabet('KOBE24','planar'));
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
#API

###Alphabet(str,character_type);

`@param {string} str` : `capital letter` or `number`, the string you want to output.

`@param {string} character_type` : `'planar'` or `'stereo'` , the style of the character

