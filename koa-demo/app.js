const Koa = require('koa');
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

const app = new Koa();
const router = new Router();

// 中间件
app.use(async (ctx, next)=>{
    console.log(ctx.request.url)
    await next()

    // 错误处理
    if(ctx.status === 404){
        ctx.body = '这是一个404页面'
    }
})

app.use(bodyParser());

router.get('/hello/:name', async (ctx, next)=>{
    let name = ctx.params.name
    ctx.response.body = `<h1>hello, ${name}</h1>`
})

// 创建一个表单
router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>1111</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});

router.post('/signin', async(ctx, next) => {
    let name = ctx.request.body.name || ''
    let password = ctx.request.body.password
    console.log(name, password)
    if(name === 'koa' && password === '123'){
        ctx.response.body = `<h1>Hello, ${name}</h1>`
    } else {
        ctx.response.body = `<h1>try again</h1>`
    }
})

//add router middleware
app.use(router.routes());

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');