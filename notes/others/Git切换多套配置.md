# 配置多套git以及ssh配置信息

>当有如下需求：
>
>1. 需要两个或者多个 ssh key链接到不同的 github 账户
>2.  在不同的项目中需要切换不同的 git 配置：用户名和邮箱
>此时，即可配置多套 git 配置以及 ssh 配置，用于快速切换不同的配置
## 1. 添加多套配置

**操作步骤概括如下：**

### 1.1 设置 ssh key

1. 生成两套 ssh key: `id_rsa_work`, `id_rsa_personal`

2. 添加两套 ssh key 到 github 设置中

3. 在 ssh 配置文件中添加如下配置信息：使用 `ssh-add` 命令或者添加配置信息

  - 使用 `ssh-add` 命令

    ```bash
    # 确保ssh服务启动，可以使用如下命令启动：
    eval "$(ssh-agent -s)"
    
    # 使用ssh add命令添加配置
    ssh-add ~/.ssh/id_rsa_work
    ssh-add ~/.ssh/id_rsa_personal
    ```

  - 添加配置信息

    ```bash
    vim ~/.ssh/config
    # 添加配置如下：
    Host github-work
        HostName github.com
        User git
        IdentityFile ~/.ssh/id_rsa_work
    
    Host github-personal
        HostName github.com
        User git
        IdentityFile ~/.ssh/id_rsa_personal
    ```

  - 查看代理中的密钥：

    ```bash
    ssh-add -l
    ```

### 1.2 设置git 配置

1. 添加两套git配置，设置别名来快速切换

   ```bash
   vim ~/.gticonfig
   
   # 添加别名信息
   [alias]
       work = "!git config user.name 'name_work' && git config user.email 'email_work'"
       personal = "!git config user.name 'name_personal' && git config user.email 'email_personal'"
   ```

## 2. 切换配置

- 拉取远程仓库代码

  ```bash
  # 拉取 work 相关的仓库:使用配置好的 github-work 配置
  git clone git@github-work:github-account/repo-work
  
  # 拉取personal 相关的仓库:使用配置好的 github-personal 配置
  git clone git@github-personal:github-account/repo-personal
  ```

- 切换git配置信息

  ```bash
  # 进入到仓库目录中，切换对应的 git 配置：别名可以快速切换
  cd repo-work
  git work
  
  cd repo-personal
  git personal
  ```

  