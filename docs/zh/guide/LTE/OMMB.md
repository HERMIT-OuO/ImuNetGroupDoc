# OMMB 使用指南

## 平台账户及 ip 配置

| 设备类型 |  平台  |   账户    |   密码   |    账户说明及登录地址    |
| :------: | :----: | :-------: | :------: | :----------------------: |
|   ommb   | redhat |   root    |  123456  | 系统用户 192.168.100.100 |
|   ommb   | redhat |    omc    | Aa123456 |         系统用户         |
|   ommb   | redhat |  oracle   |  oralce  |        数据用户名        |
|   ommb   | redhat |   ommb    |  oralce  |        数据库名称        |
|   ommb   | redhat | vncserver | nmdx1234 |         VNC远程          |

## 启动服务

### 启动 `Oracle`

1. 登录

   ```bash
   sudo -i
   su oracle
   ```

   

2. 连接

   ```bash
   sqlplus /nolog
   ```

   

3. 切换管理员权限

   ```bash
   connect /as sysdba
   ```

   

4. 启动服务

   ```bash
   startup
   ```

   

5. 退出 `sqlplus`，开启监听

   ```bash
   lsnrctl start
   ```

   

### 启动 `OMMB Server`

```bash
sudo root
cd /root/netnumen/ommb/ums/ums-svr/bin/
./console-liunx.sh
```

## 停止服务

### 关闭 `OMMB Server`

在统一网络管理控制台，点击 `停止` 按钮

### 关闭 `Oracle`

1. 关闭监听

   ```bash
   lsnrctl stop
   ```

   

2. 登录

   ```bash
   sudo -i
   su oracle
   ```

   

3. 连接

   ```bash
   sqlplus /nolog
   ```

   

4. 切换管理员权限

   ```bash
   connect /as sysdba
   ```

   

5. 关闭数据库

   ```sql
   shutdown immediate
   ```

   

