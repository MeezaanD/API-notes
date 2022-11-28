// fetch('../data/data.json')
// .then((response)=> {
//     return response.json();
// })
// .then((data)=> {
//     console.log(data);
// })
// .catch(()=> {
//     console.log("Please try again later");
// })

// fetch('../data/data.json')
// .then(res=>{
//     return res.json();
// })
// .then((data)=> {
//     console.table(data.results);
//     // let results = data.results;
//     // let record = results.filter((item)=> {
//     // return item.id == 1
//     // })
//     // console.table(record);
//     // for (let data of results) {
//     //     console.log(data);
//     // }
// })
// .catch(err=> {
//     console.log("Please try again later");
// })

// --------------------------------------------------------------------------------------------------------------------------------

// SIMPLIFIED FETCH CODE
// async function fetchData() {
//     let res = await fetch("../data/data.json");
//     let data = await res.json();
//     console.table(data.results);
// };
// fetchData();

// RANDOM USER
async function fetchData() {
    let res = await fetch("https://randomuser.me/api?results=100");
    let data = await res.json();
    return data.results;
};
(async function display() {
    let data = await fetchData();
    data.forEach( (item)=> {
        console.log(item);
    })
})();


// ----------------------------------------------------------------------------------------------------------------------------------

// ARRAYS
// let data = [9, 12, "Thando", 26, 8, 1];
// data.push(20);
// data.shift()
// data.pop()
// data.unshift("Meezaan")

// ----------------------------------------------------------------------------------------------------------------------------------
// FILTER METHODS(1)
// console.log(data.filter(Number));
// console.log(data.filter(item=> {
//     return typeof item !== "string"
// }));
// (2)
// let onlyNumbers =[];
// for(let d of data) {
//     if(typeof d != "string")
//     onlyNumbers.push(d)
//     console.log(onlyNumbers);
// }
// -----------------------------------------------------------------------------------------------------------------------------------

// let onlyNumbers = data.filter(Number)
// console.log(onlyNumbers);
// let sortedValues = onlyNumbers.sort((a,b)=> a-b)
// console.log(sortedValues);

// let first = data.slice(0, 2);
// let second = data.slice(3);
// let wellDone = first + second;
// console.log(wellDone);

// splice(start, removeCount, item1, item2...)
// console.log(data);
// data.splice(2, 1, "boy" )
// console.log(data);
// data[2] = "boy"

