---
title: Windows 10 获取当前壁纸和锁屏
date: 2024-11-15 09:40:28
tags:
---

## 前置条件

假定你的电脑用户名称为 `Administrator`，用户目录存放在 `C` 盘，用户 `SID` 为 `S-1-5-21-882678180-858135499-125402313-500`。

## 获取壁纸

壁纸路径为：`C:\Users\Administrator\AppData\Roaming\Microsoft\Windows\Themes\CachedFiles`

![image.png](https://b3logfile.com/file/2024/11/image-sXtbTKp.png)

该文件就是当前壁纸。

## 获取锁屏

获取稳妥一点的做法是通过命令行，获取当前用户SID，再通过注册表拿到锁屏路径。

```shell
# 获取SID
whoami /USER
# 打开注册表
Win + R
regedit
# 注册表路径
计算机\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\SystemProtectedUserData\S-1-5-21-882678180-858135499-125402313-500\AnyoneRead\LockScreen
```

![打开注册表](https://b3logfile.com/file/2024/11/image-H456aDp.png)

![注册表内容](https://b3logfile.com/file/2024/11/image-EdVJhcZ.png)

在注册表中可以看到 `默认` 的值为 `BAZYXW`，进入目录 `C:\ProgramData\Microsoft\Windows\SystemData\S-1-5-21-882678180-858135499-125402313-500\ReadOnly`

![锁屏存放位置.png](https://b3logfile.com/file/2024/11/image-zpycNMk.png)

根据 `BA` `W` 的位置，表示 B 就是当前锁屏，前往 `C:\ProgramData\Microsoft\Windows\SystemData\S-1-5-21-882678180-858135499-125402313-500\ReadOnly\LockScreen_B` 就能看到当前锁屏了，其中LockScreen.jpg是原图，其它都是经过修改的。
