---
title : GPU 服务器使用指南
lang : zh-CN
description: 一份 GPU 服务器使用指南
---


# GPU 服务器使用指南

::: tip

使用前请联系管理员分配账户

:::

## GPU 服务器配置

目前组内共有 GPU 服务器两台，配置分别如下：

| Name  |       CPU       |         GPU         |     RAM      |  Storage   | SSH               |
| :---: | :-------------: | :-----------------: | :----------: | :--------: | ----------------- |
| Small | Intel I7-7820X  |   RTX 2080Ti(11G)   | DDR4 16G × 2 |  SSD 250G  | 183.175.13.250:22 |
| Large | Intel E5-2678V3 | RTX 2080Ti(11G) × 2 |   DDR4 32G   | SSD 1T × 4 | 202.207.12.198:22 |

## SSH 客户端

::: tip

1. 本指南只提供最基础的服务器连接教程
2. 除 `Termius` 与 `MobaXterm` 外，其他的 `ssh` 客户端也可使用 
3. 在使用 `ssh` 工具进行初次连接时，一般会有安全提示，一路通过即可

:::

### [Termius](https://termius.com/)

![image-20201210170623180](https://i.loli.net/2020/12/10/rjQwA1b84FzuUIh.png)

![image-20201210170648402](https://i.loli.net/2020/12/10/y94DMKUA1ZIqLxP.png)

#### 特点

- 全平台可用
- `SSH` 连接、软件配置等信息跟随账号同步
- UI 设计十分优秀
- 集成 `SFTP`

#### 下载地址

- [Windows](https://autoupdate.termius.com/windows/Termius.exe)
- [Linux](https://www.termius.com/download/linux/Termius.deb)
- [macOs](https://termi.us/mac-download)
- ···

#### 使用指南

1. 根据所用系统下载并安装 `Termius`

   建议登录账号，以同步 `ssh` 连接等信息

2. 添加 `ssh` 连接

   ![image-20201210172552563](https://i.loli.net/2020/12/10/PCc9Nsg8tGAVX71.png)

   ![image-20201210172757575](https://i.loli.net/2020/12/10/JAB4mES8PlueVbd.png)

3. 点击创建好的 `HOST` 访问服务器

   ![image-20201210172918684](https://i.loli.net/2020/12/10/tMblvOFoEqdGcah.png)

#### Tips

可通过认证 `Github Student Developer Pack` 获得[专业版订阅](https://termius.com/education)

### [MobaXterm](https://mobaxterm.mobatek.net/)

![image-20201210183111311](https://i.loli.net/2020/12/10/VJPf5LgYZoThWHX.png)

#### 下载地址

- [便携版](https://download.mobatek.net/2062020111930940/MobaXterm_Portable_v20.6.zip)
- [安装版](https://download.mobatek.net/2062020111930940/MobaXterm_Installer_v20.6.zip)

#### 使用指南

1. 下载并解压（或安装） `MobaXterm`

2. 添加 Session

   ![image-20201210173524673](https://i.loli.net/2020/12/10/vF4h1QmrKg6auVz.png)

   ![image-20201210173608846](https://i.loli.net/2020/12/10/viA6mx9ocKur45p.png)

3. 点击 OK 即可访问服务器

   ![image-20201210173650681](https://i.loli.net/2020/12/10/xjU31wJplkesdGf.png)

   

##  GPU 服务器

::: warning

1. 进行危险操作前请联系管理员
2. 请将自己的程序、数据集等文件保存在 `/home/yourusername` 中，并及时备份
3. 请自行创建 `conda` 虚拟环境，在虚拟环境中安装相关依赖，防止干扰他人
4. 已使用 `conda` 清华源，创建过程可能较慢，请耐心等待

:::

###  基础环境

- `python 3.6`（Small）、`python 3.7`（Large）
- `cuda 11.1`
- `cuDNN 8.0.5`
- `conda 4.4.10`

