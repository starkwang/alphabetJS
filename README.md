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
 console.log(Alphabet('STARK','stereo'));
```

And then you get:

```
 /ˉˉˉˉˉˉˉˉˉ|ˉ||ˉˉˉˉˉˉˉˉˉˉˉ|ˉ|     /\ˉ\     |ˉˉˉˉˉˉˉˉˉ\ˉ\ |ˉ|ˉ|  /ˉ/ˉ/ 
/ /ˉ/ˉˉˉˉˉˉˉˉˉˉˉˉˉˉ| |ˉ|ˉˉˉˉˉ    /  \ \    | |ˉTˉˉˉˉ\ \ \| | | / / /  
\ ˉˉˉˉˉˉˉˉ\ˉ\      | | |        / /\ \ \   | | |    | | ||  ˉˉˉ | |   
 ˉˉˉˉˉˉˉˉ\ \ \     | | |       / / /\ \ \  | ˉˉˉˉˉˉˉ  / /| |ˉ|ˉ\ \ \  
\ˉ\ˉ\    / / /     | | |      /  ˉˉˉˉ  \ \ | |ˉ|ˉˉ\ \ˉ\ˉ | | |  \ \ \ 
 \ ˉˉˉˉˉˉ / /      | | |     / /ˉ/ˉˉˉˉ\ \ \| | |   \ \ \ | | |   \ \ \
  ˉˉˉˉˉˉˉˉˉˉ       ˉˉˉˉˉ     ˉˉˉˉ      ˉˉˉˉˉˉˉˉˉ    ˉˉˉˉ ˉˉˉˉˉ    ˉˉˉˉ
```
---------

###In node

Ise `npm` to install it 

```
 npm install alphabetjs
```
Then you can require it in node:

```
 alphabet = require('alphabetjs').print;
  
```
Then you can use it to print character in shell:

```
 console.log(alphabet('STARK','planar'));
```

And then you get:

```
 
 /ˉˉˉˉˉˉˉˉˉ||ˉˉˉˉˉˉˉˉˉˉˉ|     /\     |ˉˉˉˉˉˉˉˉˉ\ |ˉ|    /ˉ/  
/ /ˉˉˉˉˉˉˉˉ  ˉˉˉˉ| |ˉˉˉˉ     /  \    | |ˉˉˉˉˉˉ\ \| |   / /   
\ ˉˉˉˉˉˉˉˉ\      | |        / /\ \   | |      | ||  ˉˉˉ |    
 ˉˉˉˉˉˉˉˉ\ \     | |       / /  \ \  | ˉˉˉˉˉˉˉ  /| |ˉˉˉ\ \   
\ˉ\      / /     | |      /  ˉˉˉˉ  \ | |ˉˉˉˉ\ \ˉ | |    \ \  
 \ ˉˉˉˉˉˉ /      | |     / /ˉˉˉˉˉˉ\ \| |     \ \ | |     \ \ 
  ˉˉˉˉˉˉˉˉ       ˉˉˉ     ˉˉ        ˉˉ ˉ       ˉˉ  ˉ       ˉ  
```


--------------
#API

###Alphabet(str,character_type);

@param {string} str : the string you want to output

@param {string} character_type : `'planar'` or `'stereo'` , the style of the character

