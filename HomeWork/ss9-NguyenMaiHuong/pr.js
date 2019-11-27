// // let aPromise = new Promise((resolve, reject) => {
// //     // console.log('Hello')
// //     // resolve("Thanh cong");
// //     setTimeout(() => {
// //         // reject(new Error("khong the ket noi den server"));
// //         resolve('thanh cong')
// //     }, 2000)
// // });

// // aPromise.then((msg) =>console.log('da thuc thi:' + msg),
// //     (errMsg) => console.log(errMsg + ''))

// // let add = (a, b) => {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             if (typeof a != "number" || typeof b != "number") {
// //                 return reject(new Error('Tham so phai la kieu number'));
// //             }
// //             resolve(a+b);
// //         }, 2000)
// //     });
// // }
// // add("4",5).then((res) => console.log(res),
// // err => console.log(err + '')
// // )
// let fs = require('fs')
// // fs.readFile('./a.txt', 'utf8', (err,data) => {
// //     if(err) return console.log('Loi:' + err)
// //     console.log(data)
// // })

// // let promiseRead = new Promise((resolve, reject) => {
// //     fs.readFile('./a.txt', 'utf8', (err, data) => {
// //         if(err) return reject(err);
// //         resolve(data)
// //     })
// // })
// // promiseRead.then(data => console.log(data), err => console.log(err + ''))
// let readFile = (filename) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filename, 'utf8', (err, data) => {
//             if(err) return reject(err)
//             resolve(data)
//         })
//     })
// }
// readFile('./a.txt').then(data => console.log(data), err => console.log(err + ""))

// tinh dien tich hinh thang

let add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a != 'number' || typeof b != 'number'){
                return reject(new Error('THAM SO KHONG PHAI LA KIEU NUMBER'))
            }
            resolve(a+b)
        }, 1000)
    })
}

let multiply = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(typeof a != 'number' || typeof b != 'number'){
                return reject(new Error('tham so khong phai la kieu number'))
            }
            resolve(a*b)
        },1000)
    })
}

let division = (a,b) => {
    return new Promise((resolve, reject) => {
        if(typeof a != 'number' || typeof b != 'number'){
            return reject(new Error('tham so khong phai la kieu number'))
        }
        resolve(a/b)
    })
}

let tinhDienTich = (a,b,h) => {
   return add(a,b)
    .then(res => multiply(res,h))
    .then(result => division(result,2))
    // .then(square => console.log("dien tich hinh thang:" + square))
    // .catch(err => console.log('Loi' + err))
}
tinhDienTich("6",4,5)
.then(square => console.log('Dien tich hinh thang =' + square))
.catch(err => console.log(err + ''))