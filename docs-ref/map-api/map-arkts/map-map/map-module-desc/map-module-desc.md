---
title: "模块描述"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-module-desc
kit: 应用服务
last_updated: "2026-04-22"
slug: map-module-desc
---

# 模块描述

map（地图显示功能）为开发者提供易于上手的接口，开发者可以通过相关接口便捷地在HarmonyOS应用/元服务中加入地图相关的功能，包括显示地图、在地图上绘制（覆盖物）、添加动画、与地图交互、更新地图状态、常用工具函数等功能。

该模块提供以下地图常用功能：

- [MapComponentController](/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller)：显示地图，与地图有关的所有方法从此处接入。

地图覆盖物：

- [Marker](/ref/map-api/map-arkts/map-map/map-map-marker/map-map-marker)：标记。
- [MapPolyline](/ref/map-api/map-arkts/map-map/map-map-mappolyline/map-map-mappolyline)：折线。
- [MapArc](/ref/map-api/map-arkts/map-map/map-map-maparc/map-map-maparc)：弧线。
- [MapPolygon](/ref/map-api/map-arkts/map-map/map-map-mappolygon/map-map-mappolygon)：多边形。
- [MapCircle](/ref/map-api/map-arkts/map-map/map-map-mapcircle/map-map-mapcircle)：圆形。
- [PointAnnotation](/ref/map-api/map-arkts/map-map/map-map-pointannotation/map-map-pointannotation)：点注释。
- [Bubble](/ref/map-api/map-arkts/map-map/map-map-bubble/map-map-bubble)：气泡。
- [ClusterOverlay](/ref/map-api/map-arkts/map-map/map-map-clusteroverlay/map-map-clusteroverlay)：点聚合。
- [ImageOverlay](/ref/map-api/map-arkts/map-map/map-map-imageoverlay/map-map-imageoverlay)：图片覆盖物。
- [BuildingOverlay](/ref/map-api/map-arkts/map-map/map-map-buildingoverlay/map-map-buildingoverlay)：3D建筑。
- [TraceOverlay](/ref/map-api/map-arkts/map-map/map-map-traceoverlay/map-map-traceoverlay)：动态轨迹。
- [TileOverlay](/ref/map-api/map-arkts/map-map/map-map-tileoverlay/map-map-tileoverlay)：瓦片图层。
- [Heatmap](/ref/map-api/map-arkts/map-map/map-map-heatmap/map-map-heatmap)：热力图。
- [MvtOverlay](/ref/map-api/map-arkts/map-map/map-map-mvtoverlay/map-map-mvtoverlay)：矢量图层。
- [FlowFieldOverlay](/ref/map-api/map-arkts/map-map/map-map-flowfieldoverlay/map-map-flowfieldoverlay)：流场图层。
- [MassPointOverlay](/ref/map-api/map-arkts/map-map/map-map-masspointoverlay/map-map-masspointoverlay)：海量点图层。

添加动画：

- [Animation](/ref/map-api/map-arkts/map-map/map-map-animation/map-map-animation)：动画抽象类。
- [AlphaAnimation](/ref/map-api/map-arkts/map-map/map-map-alphaanimation/map-map-alphaanimation)：控制透明度的动画类。
- [RotateAnimation](/ref/map-api/map-arkts/map-map/map-map-rotateanimation/map-map-rotateanimation)：控制旋转的动画类。
- [ScaleAnimation](/ref/map-api/map-arkts/map-map/map-map-scaleanimation/map-map-scaleanimation)：控制缩放的动画类。
- [TranslateAnimation](/ref/map-api/map-arkts/map-map/map-map-translateanimation/map-map-translateanimation)：控制移动的动画类。
- [FontSizeAnimation](/ref/map-api/map-arkts/map-map/map-map-fontsizeanimation/map-map-fontsizeanimation)：控制字体大小的动画类。
- [PlayImageAnimation](/ref/map-api/map-arkts/map-map/map-map-playimageanimation/map-map-playimageanimation)：控制多张图片的帧动画类。
- [AnimationSet](/ref/map-api/map-arkts/map-map/map-map-animationset/map-map-animationset)：动画类集合。

与地图交互：

- [MapEventManager](/ref/map-api/map-arkts/map-map/map-map-mapeventmanager/map-map-mapeventmanager)：地图监听事件管理器。

更新地图状态：

- [newLatLng](/ref/map-api/map-arkts/map-map/map-map-newlatlng/map-map-newlatlng)：设置地图的中心点和缩放层级。
- [newLatLngBounds](/ref/map-api/map-arkts/map-map/map-map-newlatlngbounds/map-map-newlatlngbounds)：设置地图经纬度范围、地图区域和边界之间的距离。
- [scrollBy](/ref/map-api/map-arkts/map-map/map-map-scrollby/map-map-scrollby)：按像素移动地图中心点。
- [zoomBy](/ref/map-api/map-arkts/map-map/map-map-zoomby/map-map-zoomby)：根据给定增量并以给定的屏幕像素点为中心点缩放地图级别。
- [zoomIn](/ref/map-api/map-arkts/map-map/map-map-zoomin/map-map-zoomin)：放大地图缩放级别，在当前地图显示的级别基础上加1。
- [zoomOut](/ref/map-api/map-arkts/map-map/map-map-zoomout/map-map-zoomout)：缩小地图缩放级别，在当前地图显示的级别基础上减1。
- [zoomTo](/ref/map-api/map-arkts/map-map/map-map-zoomto/map-map-zoomto)：设置地图缩放级别。

常用工具函数：

- [calculateDistance](/ref/map-api/map-arkts/map-map/map-map-calculatedistance/map-map-calculatedistance)：计算坐标点之间的距离。
- [convertCoordinate](/ref/map-api/map-arkts/map-map/map-map-convertcoordinate/map-map-convertcoordinate)：坐标系转换，使用Promise异步回调。
- [convertCoordinateSync](/ref/map-api/map-arkts/map-map/map-map-convertcoordinatesync/map-map-convertcoordinatesync)：坐标系转换。
- [rectifyCoordinate](/ref/map-api/map-arkts/map-map/map-map-rectifycoordinate/map-map-rectifycoordinate)：根据用户输入的坐标系和坐标以及获取当前的路由地，判断是否需要修正坐标。

## 导入模块

```
import { map } from '@kit.MapKit';
```
