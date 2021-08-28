/**
 * 监听页面上新增的JSONP请求
 * 注意：该demo为自己瞎写，不保证正确
 * @returns function
 */
const observeJSONP  = function () {
	const scriptList = document.getElementByTagName('script')
    return function observe() {
    	setTimeout(()=>{
          const curList = document.getElementByTagName('script')
          if(curList.length < scriptList.length){
          	const newScript = curList.slice(scriptList.length)
            newScript.forEach((script)=>{
              if(script.test(/callback/)){
                 console.log(script.src)
              }
            })
        }
        },3000)
    }
}