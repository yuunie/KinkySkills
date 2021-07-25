/**
 * Use array instead of IF
 * 使用数组代替 IF
 * 
 * Judge whether 1 is greater than 2
 * 下面的代码判断 1 是否大于 2
 */
[() => { console.log(true) }, () => { console.log(false) }][+!(1 > 2)]
