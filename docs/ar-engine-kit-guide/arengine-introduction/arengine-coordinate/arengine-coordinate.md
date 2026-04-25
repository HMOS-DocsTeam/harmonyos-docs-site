---
title: "坐标系说明"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-coordinate
kit: graphics
last_updated: "2026-04-20"
---

# 坐标系说明

## AR Engine重力对齐世界坐标系

- 以相机启动时相机中心为坐标原点；
- 重力方向为Y轴，向上+Y，向下-Y；
- 设备水平前后移动为X轴，由近及远+X，由远及近-X；
- 设备水平左右移动为Z轴，向右+Z，向左-Z。

****图1**** 重力对齐世界坐标系示意图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/58/v3/AXOCo3JmT_C4h5viPAoSLA/zh-cn_image_0000002573854567.png?HW-CC-KV=V1&HW-CC-Date=20260423T051603Z&HW-CC-Expire=86400&HW-CC-Sign=3275889CAE128E29D982623C4371D55647D5F487775929A7B5221725EC661FA4)

## AR Engine重力对齐北向坐标系

- 以相机启动时相机中心为坐标原点；
- 重力方向为Y轴，向上+Y，向下-Y；
- 指南针北向为+X轴，南向为-X轴；
- 指南针东向为+Z轴，西向为-Z轴；
- 重力对齐北向坐标系为固定坐标系，不受设备位姿变化影响。

****图2**** 重力对齐北向坐标系示意图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d0/v3/Ah31GlL2RfaY2W2a2VJ9Jw/zh-cn_image_0000002573974543.png?HW-CC-KV=V1&HW-CC-Date=20260423T051603Z&HW-CC-Expire=86400&HW-CC-Sign=AF8C1E06AFE2DC0A94118BA32F473BC796E8E9801C125E50CCCD650FA4B79202)

## AGP世界坐标系

- 以相机启动时相机中心为坐标原点；
- 设备垂直方向为Y轴，向上+Y，向下-Y；
- 设备水平前后移动为Z轴，向前+Z，向后-Z；
- 设备水平左右移动为X轴，向左+X，向右-X。

****图3**** AGP世界坐标系示意图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f2/v3/3DnY9-4DStydVrszsdSBNQ/zh-cn_image_0000002573854567.png?HW-CC-KV=V1&HW-CC-Date=20260423T051603Z&HW-CC-Expire=86400&HW-CC-Sign=4D54829D3453AB3FEDDEE2C00F231C3FE26467FD72A5361DBAFA7A93A8E85832)
