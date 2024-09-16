# NVM

> nvm是一个可以管理 nodejs 的包管理工具，可以方便的安装、管理、切换不同版本的 nodejs

## 1. NVM安装

- 可以使用`wget` 或者 `curl` 命令下载安装脚本并安装

- 下载安装脚本时，需要指定版本号，如 0.40.0，版本号可以在 github 查找：https://github.com/nvm-sh/nvm/releases

  ```bash
  # 安装命令：
  
  # 使用wget安装：
  wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
  
  # 使用curl安装：
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
  ```

  - 安装后，重启终端即可使用，使用`command -v nvm` 可以查看是否安装成功，如输出`nvm` 则证明安装成功

## 2. NVM使用

- 使用 nvm 安装需要版本的 nodejs 后，可以使用`nvm use <verison or alias>`来指定需要使用的 nodejs

- nvm常用命令如下：

  ```bash
  # 查看nvm版本
  nvm -v
  
  # 查看可用 nodeJs 版本
  nvm ls-remote
  
  # 安装特定版本nodeJs
  # or nvm install 18：安装 nodejs 18 最新版
  nvm install 18.17.0
  
  # 安装最新的LTS版本（长期支持版本）
  nvm install --lts
  
  # 查看已经安装的nodeJs版本
  nvm ls	# nvm list
  
  # 设置默认版本
  nvm alias default 20.17.0		# or nvm alias default 20
  
  # 设置别名
  nvm alias my_alias v20.17.0
  
  # 查看安装位置
  nvm which 20.17.0		# or nvm which 20.17 or nvm which 20
  
  # 指定需要使用的 nodejs 版本
  nvm use 20	# or nvm use <别名>		or nvm use 20.17.0
  ```