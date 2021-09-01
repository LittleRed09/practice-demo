(async function f(){
    let time = 2000
    console.log('beforeDelay');
    await sleep(time);
    console.log('afterDelay'); // time 毫秒后调用
    function sleep(time){
        return new Promise((resolve)=>{
            setTimeout(resolve, time);
        })
    }
})()
