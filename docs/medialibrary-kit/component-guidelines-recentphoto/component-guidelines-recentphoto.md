---
title: "使用RecentPhoto组件获取最近一张图片"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/component-guidelines-recentphoto
kit: media
last_updated: "2026-04-22"
---

# 使用RecentPhoto组件获取最近一张图片

应用可以在布局中嵌入最近图片组件，通过此组件，应用无需申请权限，即可指定配置访问公共目录中最近的一个图片或视频文件。授予的权限仅包含只读权限。

界面效果如图所示。

![](../../images/e0f3cce9/zh-cn_image_0000002552958606.png)

## 开发步骤

1. 导入最近图片组件模块文件。

   ```
   import { BaseItemInfo } from '@ohos.file.PhotoPickerComponent';
   import {
     PhotoSource,
     RecentPhotoComponent,
     RecentPhotoOptions,
     photoAccessHelper
   } from '@kit.MediaLibraryKit';
   ```
2. 创建最近图片组件选择选项实例（RecentPhotoOptions）。

   通过RecentPhotoOptions，开发者可配置显示多长时间段内的图片、文件类型、文件内容来源，详见[RecentPhotoOptions API参考](/ref/media-library-api/media-library-comp/ohos-file-recentphotocomponent/ohos-file-recentphotocomponent#recentphotooptions)。

   ```
   // 最近图片组件初始化。
   recentPhotoOptions: RecentPhotoOptions = new RecentPhotoOptions();
   ```
3. 初始化最近图片组件选择选项实例（RecentPhotoOptions）。

   ```
   // 设置数据类型，IMAGE_VIDEO_TYPE：图片和视频（默认值）、IMAGE_TYPE：图片、VIDEO_TYPE：视频、MOVING_PHOTO_IMAGE_TYPE：动态图片。
   this.recentPhotoOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_VIDEO_TYPE;

   // 设置最近图片的时间范围，单位（秒），0表示所有时间。
   this.recentPhotoOptions.period = 0;

   // 设置资源的来源，ALL：所有、CAMERA：相机、SCREENSHOT：截图。
   this.recentPhotoOptions.photoSource = PhotoSource.ALL;
   ```
4. 创建[RecentPhotoComponent](/ref/media-library-api/media-library-comp/ohos-file-recentphotocomponent/ohos-file-recentphotocomponent#recentphotocomponent)组件。

   ```
   RecentPhotoComponent({
     // 设置最近图片组件选择选项实例。
     recentPhotoOptions: this.recentPhotoOptions,
       
      /**
      * 最近图片点击事件。
      * BaseItemInfo（uri, mimeType, width, height, size, duration）
      * return 返回值为true时才会给url授权，才可以显示。
      */
     onRecentPhotoClick: (recentPhotoInfo: BaseItemInfo): boolean => this.onRecentPhotoClick(recentPhotoInfo),

     // 检查是否存在最近的资源。
     onRecentPhotoCheckResult: (recentPhotoExists: boolean) => this.onReceiveCheckResult(recentPhotoExists),
   })
   ```
5. 实现相关回调。

   实现onReceiveCheckResult回调，可查询是否存在最近图片，仅返回true时才可进一步实现控制是否显示最近图片。

   实现onRecentPhotoClick回调，将上报返回图片/视频相关信息[BaseItemInfo](/ref/media-library-api/media-library-comp/ohos-file-photopickercomponent/ohos-file-photopickercomponent#baseiteminfo)。

   ```
   // 返回值为true时，才能获取uri的权限。
   private onRecentPhotoClick(recentPhotoInfo: BaseItemInfo): boolean {
     if (!recentPhotoInfo) {
       return false;
     }
     return true;
   }

   private onReceiveCheckResult(recentPhotoExists: boolean): void {
     if (!recentPhotoExists) {
       console.info('not exist recent photo');
     }
     // 存在最近图片的话，可以实现业务需求，如去控制RecentPhotoComponent是否显示。
   }
   ```

## 完整示例

完整示例请查阅[示例](/ref/media-library-api/media-library-comp/ohos-file-recentphotocomponent/ohos-file-recentphotocomponent#示例)。
