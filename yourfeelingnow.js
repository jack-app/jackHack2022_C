/* dataからパラメータ取得　連想配列を想定*/
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
/*paramの値だけすべて習得、最大値を探してその値に紐づいたキーを返す*/ 
param_value = Object.values(param)
var max = param_value.reduce(function(a, b) {
    return Math.max(a, b);
}, -Infinity);
var maxkey = Object.keys(param).filter( (key) => { 
  return param[key] === max
 });
console.log(maxkey)
/*htmlのlargestタグの部分にキーに基づいた表示文を表示*/ 
document.getElementById('largest').innerHTML = classchange.maxkey
console.log(document.getElementById('largest').innerHTML)
var keyword = document.getElementById("search")
var value = keyword.value
/*ユーザーが入れたキーワードをkeywordタグの部分にそのまま表示*/ 
document.getElementById('keyword').innerHTML = keyword.value
console.log(document.getElementById('keyword').innerHTML)