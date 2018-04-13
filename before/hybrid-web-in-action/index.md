# Hybrid Web In Action 

Reference:
- ["Native, HTML5, or Hybrid: Understanding Your Mobile Application Development Options"](https://developer.salesforce.com/page/Native,_HTML5,_or_Hybrid:_Understanding_Your_Mobile_Application_Development_Options)
- https://www.oschina.net/question/576444_2152963
- http://www.phonegap100.com/app.html

## 基础环境

### Java环境
[https://www.java.com/zh_CN/download/help/linux_x64_install.xml](https://www.java.com/zh_CN/download/help/linux_x64_install.xml)  
```
# /etc/profile
JAVA_HOME=/usr/java/jdk1.8.0_111
PATH=$PATH:$JAVA_HOME/bin
CLASSPATH=.:$JAVA_HOME/lib
export JAVA_HOME
export PATH
export CLASSPATH
```

### Android Studio(Android IDE)

https://developer.android.google.cn/studio/index.html

确保ANDROID_HOME环境变量正确地指向了你安装的Android SDK的路径。

具体的做法是把下面的命令加入到~/.bashrc、~/.bash_profile文件中。如果你使用的是其他的shell，则选择对应的配置文件:
```
export ANDROID_HOME=~/Library/Android/sdk
```
也可单独安装Android Emulator

### 在 Android Emulator 上运行应用
https://developer.android.google.cn/studio/run/emulator.html

## React Natice
http://reactnative.cn/docs/0.43/getting-started.html#content

## cordova
http://cordova.apache.org/#getstarted

```
cordova platform add browser
cordova run browser 

cordova platform add <platform name>
cordova run <platform name>  
```

## ionic
http://ionicframework.com/

## Problem

- [Android emulator and virtualbox cannot run at same time](http://stackoverflow.com/questions/16168799/android-emulator-and-virtualbox-cannot-run-at-same-time)
- [Error: Could not find gradle wrapper within android sdk. Might need to update yo ur Android SDK](https://forum.ionicframework.com/t/error-could-not-find-gradle-wrapper-within-android-sdk-might-need-to-update-yo-ur-android-sdk/22056)
- [You have not accepted the license agreements of the following SDK component](https://forum.ionicframework.com/t/you-have-not-accepted-the-license-agreements-of-the-following-sdk-component/69570)
- [http://askubuntu.com/questions/564910/kvm-is-not-installed-on-this-machine-dev-kvm-is-missing](http://askubuntu.com/questions/564910/kvm-is-not-installed-on-this-machine-dev-kvm-is-missing)


所以仅仅使用一个静态服务器，然后提供mock数据是远远不够的。我们需要的mock应该还能做到： 
1.前端依赖指定格式的mock数据来进行UI开发 
2.前端的开发和测试都基于这些mock数据 
3.后端产生指定格式的mock数据 
4.后端需要测试来确保生成的mock数据正是前端需要的 
简而言之，我们需要商定一些契约，并将这些契约作为可以被测试的中间格式。然后前后端都需要有测试来使用这些契约。一旦契约发生变化，则另一方的测试会失败，这样就会驱动双方协商，并降低集成时的浪费。 