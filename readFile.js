import thenFs from 'then-fs';
import fs from 'fs';

// thenFs.readFile('./files/1.txt', 'utf8')
// .then(r1=>{ console.log(r1)}, err1=>{ console.log(err1.message)})

/*thenFs.readFile('./files/1.txt', 'utf8')
    .then(r1=>{
        console.log(r1)
        return thenFs.readFile('./files/2.txt', 'utf8');
    })
    .then(r2=>{
        console.log(r2)
        return thenFs.readFile('./files/3.txt', 'utf8')
    })
    .then(r3=>{
        console.log(r3)
    })
    .catch(err=>{
        console.log(err.message)
    });*/

const promiseArr = [
    thenFs.readFile('./files/1.txt', 'utf8'),
    thenFs.readFile('./files/2.txt', 'utf8'),
    thenFs.readFile('./files/3.txt', 'utf8'),
]

//Promise.all方法会发起并行的Promise异步操作，全部结束才会执行下一步的.then操作
/*Promise.all(promiseArr)
    .then(([r1,r2,r3])=>{
        console.log(r1,r2,r3)
    }).catch(err=>{
    console.log(err.message)
});

Promise.race(promiseArr).then(result=>{
    console.log(result)
}).catch(err=>{
    console.log(err.message)
});*/

function getFile(fpath){
    return new Promise(function (resolve, reject){
        fs.readFile(fpath, 'utf8', (err, result)=>{
            if(err) return reject(err);
            resolve(result)
        });
    })
}

getFile('./files/11.txt').then(result=>{
    console.log(result)
}, err=>{
    console.log(err.message)
}).catch(err=>{
    console.log(err.message)
})
