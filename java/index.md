下载：
> http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

MacOS：

```
vim ~/.zshrc
```
```
JAVA_HOME="/Library/Java/JavaVirtualMachines/jdk1.8.0_144.jdk/Contents/Home"
CLASS_HOME="$JAVA_HOME/lib"
PATH=".;$PATH:$JAVA_HOME/bin"
export JAVA_HOME
export CLASS_HOME
export PATH
```

```
echo $JAVA_HOME
```

```
brew install tomcat
brew info tomcat
/usr/local/Cellar/tomcat/9.0.7
```