# vue3+vite+ts: vercel使用
## 什么是vercel
[https://vercel.com/](https://vercel.com/)
Vercel是一个云原生应用程序开发和部署平台，旨在简化前端开发人员构建、部署和扩展现代网站和应用程序的过程。它最初是一个名为"ZEIT"的公司，后来改名为Vercel。

Vercel提供了许多功能和工具，使开发人员能够更快地将他们的项目推向生产环境。一些主要特点包括：

零配置部署：Vercel支持自动化部署，它能够检测您的项目类型并自动配置服务器设置，使得部署变得非常简单。

全球内容分发网络（CDN）：Vercel的应用程序将部署到全球分布的服务器上，使用户可以从离他们最近的服务器加载内容，提高加载速度和性能。

Serverless功能：Vercel支持使用Serverless函数进行后端开发，这意味着您可以在没有维护服务器的情况下运行代码。

预渲染和静态生成：对于前端框架如React、Next.js、vue.js等，Vercel支持预渲染和静态生成，提供更好的SEO和性能。

自定义域名：您可以将自定义域名绑定到Vercel应用程序，从而使您的应用在您自己的域名下运行。

集成：Vercel可以与许多常见的版本控制系统（如GitHub、GitLab）、CMS（如WordPress、Contentful）和其他服务进行集成。

简单来说,vercel可以帮助前端开发人员快速部署，并提供相关服务

## 使用须知
需要科学上网
对50M以上的文件，免费版不支持

## 步骤
1. [需要注册一个vercel账号](https://vercel.com/)

2. 在需要部署的vue3+vite+ts项目中添加vercel，注意全局安装需要权限
```bash
    sudo npm install -g vercel
```

3. 登录vercel
```bash
    vercel login
```
```bash
Vercel CLI 31.0.4
? Log in to Vercel 
● Continue with GitHub 
○ Continue with GitLab 
○ Continue with Bitbucket 
○ Continue with Email 
○ Continue with SAML Single Sign-On 
  ─────────────────────────────────
○ Cancel 
```
选择注册时采用的方式即可

4. 部署命令
在package.json中添加命令
```json
    "deploy": "vercel --prod"
```
我的如下，注意将tsconfig.app.json替换成自己的tsconfig.json
```json
 "scripts": {
    "dev": "vite",
    "build": "run-p type-check build-only",
    "preview": "vite preview",
    "build-only": "vite build",
    "type-check": "vue-tsc --noEmit -p tsconfig.app.json --composite false",
    "deploy": "vercel --prod"
  },
```

6. 路由配置
在根目录下创建vercel.json
```json
{
    "rewrites": [
        {
            "source": "/(.*)",
            "destination": "/"
        }
    ]
}
```
这个契合vue3单页模式，可以解决刷新404

5. 一键部署
```bash
    npm run deploy
```
首次上传需要添加必要信息，结合终端打印的信息进行自定义配置即可，但vercel会自动识别vite+vue3+ts项目给出配置，所以我们不许额外配置

6. 成功图样
```bash
    Vercel CLI 31.0.4
    🔍  Inspect: https://vercel.com/duringbug/dub-ui/8G2c4FrVn1hsRPoQjFwvTwd6QaJC [6s]
    ✅  Production: https://dub-ui.vercel.app [50s]
```
接下来就可以访问[https://dub-ui.vercel.app](https://dub-ui.vercel.app)来查看项目情况,再次强调需要科学上网

❗部署后可能会出现静态资源路径被当成route的问题,注意确保vue3正确引用了路径才能在网址上识别，比如笔者的:
```typescript
const wallDiffTextures = texturesLoader.load('/textures/wall/japanese_stone_wall_diff_4k.jpg')
```
路径在public/textures/wall/japanese_stone_wall_diff_4k.jpg下
使用
```typescript
const wallDiffTextures = texturesLoader.load('public/textures/wall/japanese_stone_wall_diff_4k.jpg')
```
虽然在本地测试时可以加载，但部署后就不行

## 最终成果

![vercel](https://img-blog.csdnimg.cn/2c5820a8c1684e32b38f5d779b3017bc.png#pic_center)

![vercel](https://img-blog.csdnimg.cn/286db1dd11eb4dcf97a6209fbf827cb9.png#pic_center)

