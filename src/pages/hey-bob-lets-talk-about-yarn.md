---
title: "Hey Bob lets talk about yarn"
date: "2017-09-17"
---

Hey bob lets talk about yarn. Javascript package managers are somewhat of a hit these days and I feel like a lot of people don’t understand them. so lets start from the basics, what is npm? How do we get it? and why would I want to use yarn?

**So what is npm?**

Simple enough it stands for Node Package Manager. Basically to run javascript on your computer you download something called Node.js (you get it from a node manager such as nvm but thats another post). Once you download Node you get npm. So what does npm do for us? It allows us to download other people’s javascript and store it in a folder called node_modules. Once downloaded we can use those packages across our project to do cool things like set a color of a page, *change font of some text, *and on and on.

So pretty simple right? Sure, if each node_module we download doesn’t also have a package.json and doesn’t also have its own node_modules that we need to get, but in the world that we live in thats not the case. Everyone has node_modules and everyone has its own dependencies they rely on and this can cause some serious problems. Lets say that I am working on a project and I set up my package.json and set up my dependencies and download them using npm, then I commit my stuff up to github because I love it and lets say now you bob want to also run this project. So lets say you check it out and you get it set up and you go and run npm install to grab all your dependencies. What are the chances that you will get the same dependencies I have on my machine? If our package.json is small and we don’t have a lot of dependencies probably pretty good but if its large? Thats probably not very likely given that you are now relying on several developers to not change their code or push a fix to npm before you install it.

So this is a huge problem right? Even if you are using the package.json correctly and pinning version such like instructure-ui: 4.3.2 things could still change couldn’t they? Sure npm will ONLY grab instructure-ui version 4.3.2 but what is guaranteeing that we are only grabbing the version of its child dependencies that we want and its children's children's dependencies? Nothing and this actually has caused problems at my work as well. When deploying USUALLY you have to run a full set up on the server right? So say we do that and we run an npm install to get the dependencies to use on this production server, do you think we will be getting the same ones that we tested a day ago? A week? A month? probably not. This is where the main issue comes in and how it has affected the companies I have worked for. We have gotten bit before by running a deploy and some dependencies children updated and ended up breaking our product completely. So how do we make this **deterministic** (word of the day) or in other words how do we make it 100% certain that we are going to get the same version of our packages every time? well glad you asked.

**Yarn**

If you haven’t gotten it by now this is the **why **to why we use yarn. Making it so that our node_modules are **deterministic** causes us a lot less stress and causes it so that our product doesn’t break. So what is yarn? How do we use it to its fullest?

yarn is a drop in replacement for npm and in some cases (though ironic) you install yarn through npm. Basically whatever you did with npm you do with yarn. Yarn provides us with deterministic front end package fetching which in english terms means that it will help us pin down exactly what we want and make sure we install it every time. It does this through something called a yarn.lock file.

**yarn.lock**

The yarn.lock file provides us with this deterministic mind set. It isn’t 100% deterministic but it gets us pretty dang close. If you ever check out a yarn.lock it looks pretty crazy. It really is just a giant json that has all the versions of your current dependencies that you have installed. So how does it work? Lets say you bob check out my project but this time it has a yarn.lock and this time instead of using npm you use yarn install or yarn what happens? Well yarn will use the lock file to actually fetch the dependencies and instead of just fetching the ones randomly (like if they were upgraded or something) it will instead just fetch the version specified in your lock file.

“But Steven I ran yarn install and now my yarn.lock is dirty why? What do I do?” Well first probably should make sure you are on the version your company or project expect, secondly this is a common problem in the yarn community.
[**yarn.lock file changing due to non-deterministic generation. · Issue #1168 · yarnpkg/yarn**
*Bug: Yarn.lock file changing ordering of dependencies and resolutions. What is the current behavior? The yarn.lock file…*github.com](https://github.com/yarnpkg/yarn/issues/1168)
[**[install] don't write lockfile when yarn.lock is the source of truth · Issue #1576 · yarnpkg/yarn**
*Do you want to request a feature or report a bug? Bug/feature fix What is the current behavior? yarn.lock is…*github.com](https://github.com/yarnpkg/yarn/issues/1576)

The thought process should go as followed.

**If my yarn.lock changed and I didn’t want it to**.

Then just reset it or check it out again. Nothing wrong with that. If you are really worried about it and hate the constant checkout run yarn install --pure-lockfile this solves all your problems. It will now not only install your dependencies but won’t touch the lock file.

**If my yarn.lock changed and nothing seems broken should I check it in?**

Of course you should. Keeping an up to date lock file is always good but just be aware what actually changes. Just take a peak at the file and see if things are just getting moved around (like the issues above) or things really are upgraded. If things get updated make sure it doesn’t break anything in your app. You just want to make sure things are consistent and don’t break your app.

**I need to upgrade a package. Whats the best way?**

Well there are 2 ways. If you update the package in your package.json and just run a yarn install or just a yarn you will see your yarn.lock will change. You can also run yarn upgrade <package-name>with the same result. In either case you should still take a look and make sure it didn’t change like 100 things in your lock file. Usually if your yarn.lock is > 2k lines changed you should be wary that you screwed up. The changes to your yarn.lock should be minimal if you upgrade just single packages. NOTE: yarn upgrade <package> DOES NOT MEAN yarn upgrade The latter will update every package in your package.json and put the output in your yarn.lock. It will not however modify your package.json it really will just update your yarn.lock and when you check that in the next person who yarn install will get the latest and greatest even if your package.json doesn’t say so.

**Should I modify my yarn.lock?**

Honestly no, unless you know what you are doing. The yarn documentation says explicitly to not modify the lock and let the CLI manage it for you. However I have encountered times where someone has modified the lock file and installed 2 versions of a dependency and when yarn tries to resolve that it does some funky stuff (depending on the version it will either take the older dependency or the newer one which in either case is not good) in which case we had to manually remove that dependency from our lock file so that our builds/deploys/everything didn’t actually break. We could have however regenerated the lock file and ensured that we let the CLI for sure update the lock file, however we KNEW what it updated and we KNEW what we didn’t want. This is not the recommended way but if you know what you are doing I can see no harm. Just be careful.

Well thats all today bob good luck.
