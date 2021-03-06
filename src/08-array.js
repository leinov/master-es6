/**
 * @file 数组
 * @author leinov
 * @date 2019-1-19
 * @desc: 这里除了es6也会回顾一些es5中array的用法
 * @flag true:会改变原数组，false:不会改变原数组
 */
const {log} = console;
 // push 在数组尾部添加项 --true--
 {
    var arr = ["a", "b"];
    var count = arr.push("c");
    log(count); // 3 切记返回的是长度
    log(arr); // ["a","b","c"]
 }

 // unshift 在数组的头部添加  --true--
 {
     var arr = ["s","k"];
     var count = arr.unshift("m");
     log(count); // 3
     log(arr); // ["m","s","k"]
 }

 // pop 在数组尾部删除项 --true--
 {
     var arr = ["x","y","z"];
     var item = arr.pop();
     log(item);  // "z"
     log(arr); // ["x","y"]
 }

 // shift 在数组头部删除项 --true--
 {
    var arr = ["m","n","q"];
    var item = arr.shift();
    log(item);  // "m"
    log(arr); // ["n","q"]
}

// reverse 翻转数组 --true--
{
    var arr = ["x",1,"b","dd"];
    arr.reverse();
    log(arr); // [ 'dd', 'b', 1, 'x' ]
}

// sort 排序 --true--
{
    var arr = [23, 1, 2, 6, 3];
    newArr = arr.sort((value1,value2)=>{
        if(value1<value2){
            return -1
        }else if(value1>value2){
            return 1
        }else{
            return 0;
        }
    });
    log(arr);
    log(newArr);
}
log('-------------------------')
// concat 拼接数组 --false--
{
    var arr = [1,2,3];
    var arr2 = arr.concat(4,[5,6], 7);
    log(arr); // [1,2,3]
    log(arr2); // [ 1, 2, 3, 4, 5, 6, 7 ]
}

// slice 
// 截取数组，可以是一个参数(截到最后一位),两个参数(从开始下标截到结束下标之间的项，但不包含结束项) 
// 不会影响原有数组长度 --false--

{
    var arr = [1,2,3,4,5];
    var newArr = arr.slice(3) 
    var newArr2 = arr.slice(1,3);
    log(arr); //[1,2,3,4,5]  不会影响原来数组长度
    log(newArr); // [4,5]
    log(newArr2); // [2,3] //不包含结束项
}

// splice 数组的删除，插入，替换 --true--
{
    // 删除
    var company = ["google","airbnb","hulu","alibaba","tencent"];
    var removed = company.splice(2,2);
    log(company); // ["google", "airbnb", "tencent"]
    log(removed); // ["hulu", "alibaba"]

    // 添加
    company.splice(0,0,"jd","baidu");// ["jd", "baidu", "google", "airbnb", "tencent"] 从第0项开始，删除0项，添加两项
    log(company);

    // 替换
    company.splice(1,2,"hulu","alibaba");
    log(company); // ["jd", "hulu", "alibaba", "airbnb", "tencent"] 从第一项开始删除2项 再添加两项
}

// indexOf & lastIndexOf 数组的位置
{
    var arr = [1,22,3,55,2,1,6,55];
    var index = arr.indexOf(55);
    var lastIndex = arr.lastIndexOf(55);
    log(index); // 3
    log(lastIndex);// 7

    var index2 = arr.indexOf(55,4);
    log(index2); //7  查找55 从小标4位置开始
    var lastIndex2 = arr.lastIndexOf(1,7);
    log(lastIndex2); // 5 反方向
}

// every迭代，每一项都符合则返回true --false--
{   

    var arr = [
        {city: "beijing", count:2000},
        {city: "xi'an", count:1000},
        {city:"chengdu", count:1500},
        {city:"wuhan", count:1200}
    ];
    var isbig= arr.every((item,index,arr)=>{
        return item.count > 1000;
    })
    log(isbig); // false
}

// some 对数组运行函数，只要有一项返回true 则返回true 跟every正好相反 --false--
{
    var  arr =[600,300,2,50,8,40];
    var isOneBig = arr.some((item,index,arr)=>{
        return item > 500
    })
    log(arr);
    log(isOneBig); // true
}

// filter 返回true的组成新数组 --false--
{
    var arr = [
        {city: "beijing", count:2000},
        {city: "xi'an", count:1000},
        {city:"chengdu", count:1500},
        {city:"wuhan", count:1200}
    ];
    var newArr = arr.filter((item,index,arr)=>{
        return item.count > 1500;
    })
    log(newArr); // [ { city: 'beijing', count: 2000 } ]
    log(arr); // 原数组
}
log('//////////');
// forEach 对每项运行函数，没有返回值 --false--
{
   var arr = [1,2,3,4];
   var newArr = arr.forEach((item, index, arr)=>{
        // doSomething
   }) 
   log(arr);
}

// map 对每项执行函数并返回新数组 --false--
{
    var arr = [1,2,3,4];
    var newArr = arr.map((item,index,arr)=>{
        return item*2;
    }) 
    log(arr); // [1, 2, 3, 4]
    log(newArr); // [2, 4, 6, 8]
}

// reduce 叠加
{
    var arr = [1,2,3,4,5];
    var sum = arr.reduce((pre,cur,index,arry)=>{
        return pre + cur;
    })
    log(sum);
}

log('-------------es6----------------')

// entries / keys / values

{
    let arr = ['a', 'b', 'c', 'd'];
    let enArr = arr.entries();
    log('entries', enArr.next().value) // [0, 'a']

    let keysArr = arr.keys();
    log('keys', keysArr.next().value);

    let valuesArr = arr.values();
    log('values', valuesArr.next().value);
    log('values', valuesArr.next().value)
}
// from 
{
    let arr = [3,4,5];
    let newArr = Array.from(arr);
    arr.push(6);
    log('old Array has push a new value 6', arr)
    log('new array from arr', newArr)
}

// fill
{
    let arr = Array(6).fill(1);
    log('fill', arr);

    arr.fill(3, 2, 4); // 从下标为2开始到下标为4（不含4）结束填充3
    log(arr);
}