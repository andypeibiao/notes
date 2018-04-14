# Homebrew
> The missing package manager for macOS

> https://brew.sh/

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

```
  brew search [TEXT|/REGEX/]
  brew info [FORMULA...]
  brew install FORMULA...
  brew update
  brew upgrade [FORMULA...]
  brew uninstall FORMULA...
  brew list [FORMULA...]
```

# oh-my-zsh
> Oh My Zsh is an open source, community-driven framework for managing your zsh configuration.

> https://github.com/robbyrussell/oh-my-zsh

### Advanced Installation
Some users may want to change the default path, or manually install Oh My Zsh.

**Custom Directory**
The default location is ~/.oh-my-zsh (hidden in your home directory)

If you'd like to change the install directory with the ZSH environment variable, either by running export ZSH=/your/path before installing, or by setting it before the end of the install pipeline like this:
```
export ZSH="$HOME/.dotfiles/oh-my-zsh"; sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```
**Manual Installation**
1. Clone the repository:
```
git clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh
```
2. Optionally, backup your existing ~/.zshrc file:
```
cp ~/.zshrc ~/.zshrc.orig
```
3. Create a new zsh configuration file
You can create a new zsh config file by copying the template that we have included for you.
```
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
```
4. Change your default shell
```
chsh -s /bin/zsh
```
5. Initialize your new zsh configuration
Once you open up a new terminal window, it should load zsh with Oh My Zsh's configuration.