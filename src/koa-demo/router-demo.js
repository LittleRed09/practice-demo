const Koa = require('koa');
// 注意koa的引入是一个函数
const router = require('koa-router')()

const app = new Koa();

app.use(async (ctx, next)=>{
    console.log(ctx.request.url)
    await next()
})

router.get('/hello/:name', async (ctx, next)=>{
    let name = ctx.params.name
    ctx.response.body = `<h1>hello, ${name}</h1>`
})

router.get('/', async (ctx, next)=>{
    ctx.response.body = `<h1>index</h1>`
})

//add router middleware
app.use(router.routes());

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');