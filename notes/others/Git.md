# Git

> 官网：https://git-scm.com/

## 1. 安装

### 1.1 MacOS安装Git

- MacOS可以使用**homebrew**安装

  ```bash
  brew install git
  ```

### 1.2 Linux安装Git

- 在终端中执行如下操作：

  ```bash
  # for ubuntu
  # 添加 ppa
  sudo add-apt-repository ppa:git-core/ppa
  
  # 更新 list
  sudo apt update
  
  # 安装 git
  sudo apt install git
  ```

## 2. Git配置

### 2.1 git全局配置

- 使用`--global` 关键字进行全局配置

  ```bash
  # 设置用户名和邮箱
  git config --global user.name "sky"
  git config --global user.email "sky@email.com"
  ```

### 2.2 添加ssh key到github

- ```bash
  # 生成 ssh key
  # 4096：秘钥位数，4096更安全，可能稍微影响性能；2048：适用于大多数需求
  # -C "comment content"：注释内容，可选内容，可以使用邮箱或其他内容作为注释
  ssh-keygen -t rsa -b 4096 -C "comment content"
  
  # 查看生成的 key
  cat ~/.ssh/id_rsa.pub
  
  # 复制输出的 key 内容，添加到 github 即可
  ```

### 2.3 使用多套 Git 配置

- 在使用`git config --global user.name "sky"` 和 `git config --global user.email "sky@email.com"`后会配置全局用户名和邮箱，如需使用别名来切换不同的 git 配置，需要先清除全局配置

  ```bash
  # 清除全局设置
  git config --global --unset user.name
  git config --global --unset user.email
  
  # 查看是否已经清除全局设置，下列命令无输出即为已成功清除
  git config --global --get user.name
  git config --global --get user.email
  
  # 编辑~/.gitconfig文件，添加别名信息
  [alias]
      use-personal = "!git config user.name '个人用户名' && git config user.email 'personal@example.com'"
      use-work = "!git config user.name '工作用户名' && git config user.email 'work@example.com'"
  
  # 之后即可使用 git use-personal或git use-work来切换 git 配置
  ```

## 3. Git使用

- 介绍常用的 git 命令：

  ```bash
  # 查看文件修改状态
  git status
  
  # 添加全部修改文件到暂存区
  git add .
  
  # 添加特定文件到暂存区
  git add <file>
  
  # 合并修改
  git commit -m 'commit content'
  
  # 将修改内容推送到远程仓库
  git push
  
  # 从远程仓库拉取最新代码并合并到工作区
  git pull
  
  # 从远程仓库拉取最新代码，但不合并到工作区
  git fetch
  
  # 显示工作区与暂存区的差异
  git diff
  ```



