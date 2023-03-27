// function camelize(str){
//     let arr = str.split('-');
//     console.log(arr)
//     let arrFinal=[];
//     for(let i=0; i<arr.length;i++){
//         if(i==0){
//             arrFinal.unshift(arr[0]);
//         }else{
//             let arr2=arr[i].charAt(0).toUpperCase()+ arr[i].substr(1);
//             arrFinal.push(arr2)
//         }
//     }
//       console.log(arrFinal.join(''))
// }
// camelize("-webkit-transition") 
// const todos=[
//     {
//       "userId": 1,
//       "id": 1,
//       "title": "delectus aut autem",
//       "completed": false
//     },
//     {
//       "userId": 1,
//       "id": 2,
//       "title": "quis ut nam facilis et officia qui",
//       "completed": false
//     },
//     {
//       "userId": 1,
//       "id": 3,
//       "title": "fugiat veniam minus",
//       "completed": false
//     },
//     {
//       "userId": 1,
//       "id": 4,
//       "title": "et porro tempora",
//       "completed": true
//     },
//     {
//       "userId": 1,
//       "id": 5,
//       "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//       "completed": false
//     }
// ]
// const arrNew = todos.forEach(item=>{
//     return item.id
// })
// const arrMap = todos.map(item=>{
//     return {
//         ...todos,
//         title: item.title+'123',
//     }
// })
// let john = {id:1, name: "John",surname:"Jo", age: 25 };
// let pete = {id:2, name: "Pete",surname:"Pe", age: 30 };
// let mary = {id:3, name: "Mary",surname:"Ma", age: 28 };

// let users = [ john, pete, mary ];
// let arrName =[];
// bai 11
// const userName = users.map(user=>{
//   arrName.push(user.name);
// })
// const userName2 =users.reduce((acc,cur)=>{
//   return [...acc, cur.name]
// },[])
// console.log(userName2);
// console.log(users)
// bai 12
// const fullname = users.map(user=>{
//   return {id:user.id,fullname: user.name+user.surname}
// })
// console.log('fullname',fullname)
// const fullname2 =users.reduce((acc,cur)=>{
//   let id = cur.id;
//   let fullname = cur.name + cur.surname;
//   acc[id] = fullname
//   return acc
// },[])
// const arrNum = [1,2,,1,2,3,-1,-2];
// const arrFilter = arrNum.filter((cur,index,arr)=>arr.indexOf(cur)===index);
// const arrFind = arrNum.find((cur)=>cur>0);
// console.log('arrFilter: ',arrFilter);
// console.log('arrFind: ',arrFind);
// Expected results:

// const obj1 = arrToObj([
//    ['name', 'Son Dang'], 
//    ['age', 21], 
//    ['address', 'Ha Noi']
// ])
// console.log(obj1)
// Output: { name: 'Son Dang', age: 21, address: 'Ha Noi' }
const obj1 = [
   ['name', 'Son Dang'], 
   ['age', 21], 
   ['address', 'Ha Noi']
]
function arrToObj(arr) {
  return arr.reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
console.log(arrToObj(obj1));
