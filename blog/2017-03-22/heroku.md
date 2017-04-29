# heroku
 
Reference:
- https://devcenter.heroku.com/categories/nodejs
- https://devcenter.heroku.com/articles/custom-domains#add-a-custom-domain-with-a-subdomain

罗列刚用到的基础命令：
```
heroku login
heroku create
git push heroku master
heroku open
git remote rm heroku
heroku logs --tail
heroku domains
```
好吧...
```
➜  NovelWebsite-vue_pc git:(master) heroku domains
=== frozen-caverns-83527 Heroku Domain
frozen-caverns-83527.herokuapp.com

➜  NovelWebsite-vue_pc git:(master) heroku domains:add heroku.ptspzy.com
Adding heroku.ptspzy.com to ⬢ frozen-caverns-83527... !
 ▸    Please verify your account in order to add domains (please enter a credit card) For more information, see https://devcenter.heroku.com/categories/billing Verify
 ▸    now at https://heroku.com/verify

```

遇到的问题：http://stackoverflow.com/questions/14322989/first-heroku-deploy-failed-error-code-h10

附上地址：https://frozen-caverns-83527.herokuapp.com/