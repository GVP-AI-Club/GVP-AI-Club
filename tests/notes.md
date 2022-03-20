```js
//image : 
[...document.querySelectorAll('.event-image')].map(a => a.src)
//title : 
[...document.querySelectorAll('.vertical-box--event-type')].map(a => a.innerHTML.trim())
//desc :
[...document.querySelectorAll('.vertical-box--event-title')].map(a => a.innerHTML.trim())
//date :
[...document.querySelectorAll('.vertical-box--event-date')].map(a => a.innerHTML.trim())
//link :
[...document.querySelectorAll('a.vertical-box-container')].map(a => a.href.trim())
```
to object:

```js
aoa = [ 
[...document.querySelectorAll('.event-image')].map(a => a.src), 
[...document.querySelectorAll('.vertical-box--event-type')].map(a => a.innerHTML.trim()), 
[...document.querySelectorAll('.vertical-box--event-title')].map(a => a.innerHTML.trim()),
[...document.querySelectorAll('.vertical-box--event-date')].map(a => a.innerHTML.trim()),
[...document.querySelectorAll('a.vertical-box-container')].map(a => a.href.trim())
]
arr = []
for(let i in aoa[0]) arr.push( { imgUrl : aoa[0][i], type: aoa[1][i], title: aoa[2][i], date: aoa[3][i], url: aoa[4][i] }) ;
14
```