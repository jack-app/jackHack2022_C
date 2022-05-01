param = {
    "sweetness": 5000, 
    "astringency": 3, 
    "hot": 7, 
    "bitterness": 9, 
    "sour": 1
            },
classchange = {
    "sweetness": "あまい",
    "astringency": "しょっぱい",
    "hot": "からい",
    "bitterness": "にがい",
    "sour": "すっぱい"
            }
param_value = Object.values(param)
var max = param_value.reduce(function(a, b) {
    return Math.max(a, b);
}, -Infinity);
var maxkey = Object.keys(param).filter( (key) => { 
  return param[key] === max
 });
console.log(maxkey)
document.getElementById('largest').innerHTML = classchange.maxkey
console.log(document.getElementById('largest').innerHTML)
var keyword = document.getElementById("search")
var value = keyword.value
document.getElementById('keyword').innerHTML = keyword.value
console.log(document.getElementById('keyword').innerHTML)