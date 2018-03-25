<p align='center'>
<img src='./image/vue-objccn_banner_.png'>
</p>

<p align="center">
<img src="https://img.shields.io/badge/Language-%20JavaScript%20-f9e229.svg">
<a href="https://github.com/vuejs/vue"><img src="https://img.shields.io/badge/Framework-Vue.js%20-0eb984.svg"></a>
<a href="https://github.com/halfrost/vue-objccn/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-GPL-blue.svg"></a>
<img src="https://img.shields.io/badge/platform-%20iOS | Mac | Web%20-ff69b4.svg">
<a href="https://github.com/halfrost/vue-objccn/pulls"><img src="https://img.shields.io/badge/PR-Welcome-brightgreen.svg"></a>
<a href="http://weibo.com/halfrost"><img src="https://img.shields.io/badge/weibo-@halfrost-red.svg?style=flat"></a>
<img src="https://img.shields.io/badge/made%20with-%3C3-red.svg">
</p>

Use Vue.js to develop a cross-platform full stack application of [Objc china](https://objccn.io/).
    
- [x] ✅ Desktop application available for three platforms, Mac, Linux and Windows 
- [x] ✅ Web application supports desktop browsers and mobile browsers
- [x] ✅ Mobile App which uses the Cordova framework, supports iOS、Android、Windows Phone and BlackBerry platforms
- [ ] ❌ Native Mobile App, which can use Weex framework to support both iOS and Android

> Note: This project is just a bit of fun and purely for learning purpose, please support [喵神(@onevcat)](https://github.com/onevcat) and [Objc china](https://objccn.io/).  


> [Chinese introduction](./README_CN.md)

## Preface

### 1. About me

I'm a full-time iOS developer, not a front-end developer. Due to take part in Weex development, I get to know the `Vue.js`.

### 2. Why write this project？

1. The motivation to write this project is from an e-pal, he left a message on my blog - was there a better Weex demo?  I recommended [@EVAN YOU](http://evanyou.me/)’s Hacker News. Later he supposed me to make one. I refused but kept it in mind.

2. On May 19 this year, GitHub used Electron rewrite the macOS and Windows client, coupled with the recent year development of cross-platform getting hotter, to some companies, Web and app are all needed, app also need support iOS and Android two platforms, and more they develop Weixin mini programs. Although desktop applications are a few, Electron can develop them all. I'm going to have a try.

3. As a result of the contact to the Vue.js, of course, do not want to stay in the primary, would like to advanced, [@EVAN YOU](http://evanyou.me/) especially given the recommendations, is more practice, more practice. In order to speed up the pace of progress, I own private to find the project for practicing.

4. Why choose Objc China, the reason is typically simple - I am an iOS developer. To iOS developers, Objc is basically well known, [喵神(@onevcat)](https://github.com/onevcat) as the same. I admire him very much [喵神(@onevcat)](https://github.com/onevcat) and decide to write Objc china without hesitation.

5. Because of love ... ...

### 3. Why not use Weex to build this cross-platform project？

When I completed the project and tried to convert it directly into Weex, I got a lot of errors and most of them cannot be fixed immediately. I believe that I use the wrong way, not Weex's problem. By the way, Weex has released a new version, and then there is time to put Weex version of the open source again.

Well, into the topic, Let's introduce this project:

## Technology stack & main framework

📦 All technology stack of Vue：vue2 + vuex + vue-router + webpack  
📌 ES6     
📡 Network request：axios  
🎈 Response framework：bootstrap, element-ui  
✏️ Backend：express  
📝 Code highlighted：highlight.js  
🗄 Database：lowdb  
📖 Markdown Parser：vue-markdown  
🔖 Form validation：vee-validate  
🏆 Cross-platform framework：Electron  

## 📱 Supported platforms

<p align='center'>
<img src='./image/Supported_Platforms_.png'>
</p>

## 🔨 How to build 

As the Objc china website is directly response html data, to simulate the network request to return data, I build a backend and write API to return data.

I use Express framework to build a server, set up in the 8081 port, and write routing, the request will go to 8080, open the server will automatically open the background.

My current development environment is node v6.11.0 , npm v3.10.10, Vue.js v2.8.2.

``` bash

# install dependencies 
npm install

# serve with hot reload at localhost:8080
npm run dev

# serve with hot reload at localhost:8080
npm run start

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

# build Mac application
npm run build:mac

# build Linxu application
npm run build:linux

# build Win application
npm run build:win

# build Cordova application
npm run build:app

```

Here to talk about Cordova's packaging alone, it is slightly more than the desktop side of the special point.

First, make the `src/main.js` file on the three lines on the Coredova note open, Coredova library initialization needs to be included in the generation of Vue instance outside. After opening the comment, proceed to the next step.

I put a Makefile in the project, you can do this according to this.

1. First install the cordova command globally

> npm install -g cordova 

2. And then enter the following command to generate the app project directory

> cordova create app com.vueobjccn vueobjccn

3. Into the app folder

> cd app

4. Add the corresponding platform

> cordova platform add ios  
> cordova platform add android

5. Run the project

> cordova run ios  
> cordova run android

Cordova only generated a shell of the app, all the content are still read from the web page. There is a folder called WWW in the corresponding application and used to load the page. JavaScript package will generate the www folder, just replace the content under this folder.

In addition, if you develop a large app with Cordova framework and no any optimization, the user experience is really not as fast as the native. If you really want to use front-end technology to develop app, share you two recommendation: The one is trying to do optimization when use Cordova framework. The other is using React Native or Weex to get the experience close to native.

## 🚀 Cross-platform development

Package this project into desktop application by JavaScript cross-platform development, mainly used the Electron framework. Here you need to install these three dependencies "electron", "electron-builder" and "electron-packager" in devDependencies. Configure other paths in the webpack.

About Cordova installation, I make complaints a little network problems in china. If you are not over the wall in china, it is really painful. For example, Not over the wall and in a very poor network environment, installation of Cordova globally, lots of error, even for the complete installation of cnpm after the addition of the iOS platform will later report a problem of 'co' file can not find, I suspect cnpm could not install the command complete. Later, I go back home, over the wall and network environment is very good, All of a sudden the npm installation is complete. But there is a small episode: If Cordova iOS 4.4.0 template throw a error, suggest installation of several times, the reason is still for the network over the wall in china, no catch to it.

There may be encountered the following error:

> "Error: Cannot find module 'config-chain'" when running 'ionic start'

The solution of this error is trying again the original order with the sudo command. This error could be solved

The final package will be done in the dist folder.

Next to show the performance of the cross-platform application on each platform:

First show the Web side:

<p align='center'>
<img src='./image/Screenshots/Web/Web 1.png'>
</p>

<p align='center'>
<img src='./image/Screenshots/Web/Web 2.png'>
</p>

<p align='center'>
<img src='./image/Screenshots/Web/Web 3.png'>
</p>

<p align='center'>
<img src='./image/Screenshots/Web/Web 4.png'>
</p>

<p align='center'>
<img src='./image/Screenshots/Web/Web 5.png'>
</p>

<p align='center'>
<img src='./image/Screenshots/Web/Web 6.png'>
</p>

<p align='center'>
<img src='./image/Screenshots/Web/Web 7.png'>
</p>

And then show the effect in the mobile browser:

Android platform

Nexus 5x Web

<p align='center'>
<img src='./image/Screenshots/Web/Nexus 5x Web.png'>
</p>

Nexus 6P Web

<p align='center'>
<img src='./image/Screenshots/Web/Nexus 6P Web.png'>
</p>

iOS platform

iPhone 5 Web

<p align='center'>
<img src='./image/Screenshots/Web/iPhone 5 Web.png'>
</p>

iPhone 7 Web

<p align='center'>
<img src='./image/Screenshots/Web/iPhone 7 Web.png'>
</p>

iPhone 7 Plus Web

<p align='center'>
<img src='./image/Screenshots/Web/iPhone 7 Plus Web.png'>
</p>

iPad Web

<p align='center'>
<img src='./image/Screenshots/Web/iPad Web.png'>
</p>

Then look at the performance in Mac side:

<p align='center'>
<img src='./image/Screenshots/Mac/Mac 1.png'>
</p>

<p align='center'>
<img src='./image/Screenshots/Mac/Mac 2.png'>
</p>

<p align='center'>
<img src='./image/Screenshots/Mac/Mac 3.png'>
</p>

<p align='center'>
<img src='./image/Screenshots/Mac/Mac 4.png'>
</p>

<p align='center'>
<img src='./image/Screenshots/Mac/Mac 5.png'>
</p>

<p align='center'>
<img src='./image/Screenshots/Mac/Mac 6.png'>
</p>

Finally look at Cordova's effect:

<p align='center'>
<img src='./image/Screenshots/iPhone/iPhone 1.png'>
</p>

<p align='center'>
<img src='./image/Screenshots/iPhone/iPhone 2.png'>
</p>

<p align='center'>
<img src='./image/Screenshots/iPhone/iPhone 3.png'>
</p>

<p align='center'>
<img src='./image/Screenshots/iPad/iPad 1.png'>
</p>

<p align='center'>
<img src='./image/Screenshots/iPad/iPad 2.png'>
</p>

<p align='center'>
<img src='./image/Screenshots/iPad/iPad 3.png'>
</p>

## 🌈 Function display

Build a Web page with Vue.js quickly.

<p align='center'>
<img src='./image/Gifs/Web.gif'>
</p>

Vuex management status is very convenient. Login status saved in the state inside, the global object will be obtained it.

<p align='center'>
<img src='./image/Gifs/Web-login.gif'>
</p>

If there is no login in information and user click the purchase button to buy an e-book, it will jump to the login page. 

Another point is to say that because this is a SPA, so the routing inside are using Router-link to achieve, but did not use `<a>` tag jump, the effect is to jump and do not have to request data, jump quickly. This user experience is really cool.

`<router-link>` is preferred over hard-coded `<a href="...">` for the following reasons:

It works the same way in both HTML5 history mode and hash mode, so if you ever decide to switch mode, or when the router falls back to hash mode in IE9, nothing needs to be changed.

In HTML5 history mode, router-link will intercept the click event so that the browser doesn't try to reload the page.

When you are using the base option in HTML5 history mode, you don't need to include it in to prop's URLs.

<p align='center'>
<img src='./image/Gifs/Web-logout.gif'>
</p>

Similarly, once the user logs out, all places showing the user name will become a status to be logged in, the shopping cart on navigationBar also be disappeared. Manage status with Vuex, very exciting.

<p align='center'>
<img src='./image/Gifs/Web-email.gif'>
</p>

This is the email form validation, not too much technical content.

<p align='center'>
<img src='./image/Gifs/Web-buy.gif'>
</p>

Here is the shopping cart page and use the MVVM page binding ideas. There are four buttons on the page, clicking any one will immediately change the related total price. To iOSer, it's worthy to learn the implemention on the MVVM.

Then this is the iPhone's Safari performance, the speed is well.

<p align='center'>
<img src='./image/Gifs/Web-iPhone.gif'>
</p>

In the cross-platform of these applications, the best experience, I think, is the application of Mac. 

<p align='center'>
<img src='./image/Gifs/Web-Mac.gif'>
</p>

Finally is the mobile phone app build by Cordova framework, I'm a little picky and not satificated with the unoptimized Cordova. See this showcase below:

iPhone application

<p align='center'>
<img src='./image/Gifs/Web-iPone app.gif'>
</p>

iPad application

<p align='center'>
<img src='./image/Gifs/Web-iPad app.gif'>
</p>

## 🤔 Reflection

I strongly recommand you the [element-ui](https://github.com/ElemeFE/element) (Vue.js developers must have heard of this library). It is a really fast way to build projects by using it, an app can be efficient developed. Save time and put more energy on business development.

Everyone says "Now is in the era of front-end, mobile development and front-end integration is inevitable". But there are many different aspectes of the development between front-end and iOS, I experience them all and think a lot. Font-end and iOS, they have lots to learn from each other in their own advantages and disadvantages, I intend to write an article series on those aspects - engineering, component, routing, MVVM. (Dig a big hole to jump)

## 📜 Feature

If I had more free time, I would like to support Weex. Taking Vue.js into a complete Weex application, to become a native app, the performance will not be bad. After then, it can cover the entire platform.

## ❗️ Errata

If you find a bug, welcome to sumbit your PR.  
If you feel confused by something, welcome to submit your Issues.    
I'm really appreciate it！🙏🙏🙏

## ♥️ Thanks

If you like this project, welcome Star!

## 🌏 LICENSE

![](https://www.gnu.org/graphics/gplv3-127x51.png)

Vue-ObjcCN is available under the GPLv3 license. See the LICENSE file for more info.
