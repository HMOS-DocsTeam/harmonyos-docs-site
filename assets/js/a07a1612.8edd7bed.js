"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["587337"], {
116306(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_arkts_camera_deferred_capture_case_camera_deferred_capture_case_md_a07_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-arkts-camera-deferred-capture-case-camera-deferred-capture-case-md-a07.json
var site_docs_camera_kit_camera_dev_arkts_camera_deferred_capture_case_camera_deferred_capture_case_md_a07_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-arkts/camera-deferred-capture-case/camera-deferred-capture-case","title":"分段式拍照实践(ArkTS)","description":"在开发相机应用时，需要先申请相关权限。","source":"@site/docs/camera-kit/camera-dev-arkts/camera-deferred-capture-case/camera-deferred-capture-case.md","sourceDirName":"camera-kit/camera-dev-arkts/camera-deferred-capture-case","slug":"/camera-kit/camera-dev-arkts/camera-deferred-capture-case/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-deferred-capture-case/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"分段式拍照实践(ArkTS)","sidebar_position":12,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-deferred-capture-case","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"分段式拍照(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-deferred-capture/"},"next":{"title":"动态照片拍摄(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-moving-photo/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-arkts/camera-deferred-capture-case/camera-deferred-capture-case.md


const frontMatter = {
	title: '分段式拍照实践(ArkTS)',
	sidebar_position: 12,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-deferred-capture-case',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '分段式拍照实践(ArkTS)';

const assets = {

};



const toc = [{
  "value": "开发流程",
  "id": "开发流程",
  "level": 2
}, {
  "value": "完整示例",
  "id": "完整示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "分段式拍照实践arkts",
        children: "分段式拍照实践(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在开发相机应用时，需要先", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-preparation",
        children: "申请相关权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前示例提供完整的分段式拍照流程介绍，方便开发者了解完整的接口调用顺序。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在参考以下示例前，建议开发者查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-arkts/camera-deferred-capture",
        children: "分段式拍照(ArkTS)"
      }), "的具体章节，了解", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-arkts-mandatory/camera-device-input",
        children: "设备输入"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-arkts-mandatory/camera-session-management",
        children: "会话管理"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-arkts/camera-shooting",
        children: "拍照"
      }), "等单个流程。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发流程",
      children: "开发流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在获取到相机支持的输出流能力后，开始创建拍照流，开发流程如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(873605)/* ["default"] */.A) + "",
        width: "2240",
        height: "4096"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Context获取方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#%E8%8E%B7%E5%8F%96uiability%E7%9A%84%E4%B8%8A%E4%B8%8B%E6%96%87%E4%BF%A1%E6%81%AF",
        children: "获取UIAbility的上下文信息"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { camera } from '@kit.CameraKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { abilityAccessCtrl, Permissions } from '@kit.AbilityKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\nlet photoSession: camera.PhotoSession | undefined = undefined;\nlet cameraInput: camera.CameraInput | undefined = undefined;\nlet previewOutput: camera.PreviewOutput | undefined = undefined;\nlet photoOutput: camera.PhotoOutput | undefined = undefined;\n\nfunction getPhotoAccessHelper(context: Context): photoAccessHelper.PhotoAccessHelper {\n  let phAccessHelper = photoAccessHelper.getPhotoAccessHelper(context);\n  return phAccessHelper;\n}\n   \nclass MediaDataHandler implements photoAccessHelper.MediaAssetDataHandler<ArrayBuffer> {\n  onDataPrepared(data: ArrayBuffer) {\n    if (data === undefined) {\n      console.error('Error occurred when preparing data');\n      return;\n    }\n    console.info('on image data prepared');\n    // 请在获取到拍照buffer后，再释放session，提前释放session，会导致无法正常出图。\n    releaseCamSession();\n  }\n}\n\nasync function mediaLibRequestBuffer(photoAsset: photoAccessHelper.PhotoAsset, context: Context) {\n  let requestOptions: photoAccessHelper.RequestOptions = {\n    deliveryMode: photoAccessHelper.DeliveryMode.FAST_MODE,\n  }\n  const handler = new MediaDataHandler();\n  await photoAccessHelper.MediaAssetManager.requestImageData(context, photoAsset, requestOptions, handler);\n  console.info('requestImageData successfully');\n}\n\nasync function mediaLibSavePhoto(photoAsset: photoAccessHelper.PhotoAsset,\n  phAccessHelper: photoAccessHelper.PhotoAccessHelper): Promise<void> {\n  try {\n    let assetChangeRequest: photoAccessHelper.MediaAssetChangeRequest =\n      new photoAccessHelper.MediaAssetChangeRequest(photoAsset);\n    assetChangeRequest.saveCameraPhoto();\n    await phAccessHelper.applyChanges(assetChangeRequest);\n    console.info('apply saveCameraPhoto successfully');\n  } catch (err) {\n    console.error(`apply saveCameraPhoto failed with error: ${err.code}, ${err.message}`);\n  }\n}\n\nfunction setPhotoOutputCb(photoOutput: camera.PhotoOutput, context: Context): void {\n  // 监听回调之后，调用photoOutput的capture方法，低质量图上报后触发回调。\n  photoOutput.on('photoAssetAvailable', async (err: BusinessError, photoAsset: photoAccessHelper.PhotoAsset): Promise<void> => {\n    console.info('getPhotoAsset start');\n    console.error(`err: ${err}`);\n    if ((err !== undefined && err.code !== 0) || photoAsset === undefined) {\n      console.error('getPhotoAsset failed');\n      return;\n    }\n    // 调用媒体库落盘接口保存一阶段低质量图，二阶段真图就绪后媒体库会主动帮应用替换落盘图片。\n    await mediaLibSavePhoto(photoAsset, getPhotoAccessHelper(context));\n    // 调用媒体库接口注册低质量图或高质量图buffer回调，自定义处理。\n    // mediaLibRequestBuffer(photoAsset, context);\n  });\n}\n\n\nasync function deferredCaptureCase(context: Context, surfaceId: string): Promise<void> {\n  // 创建CameraManager对象。\n  let cameraManager: camera.CameraManager = camera.getCameraManager(context);\n  if (!cameraManager) {\n    console.error('camera.getCameraManager error');\n    return;\n  }\n  // 监听相机状态变化。\n  cameraManager.on('cameraStatus', (err: BusinessError, cameraStatusInfo: camera.CameraStatusInfo) => {\n    if (err !== undefined && err.code !== 0) {\n      console.error('cameraStatus with errorCode = ' + err.code);\n      return;\n    }\n    console.info(`camera : ${cameraStatusInfo.camera.cameraId}`);\n    console.info(`status: ${cameraStatusInfo.status}`);\n  });\n\n  // 获取相机列表。\n  let cameraArray: Array<camera.CameraDevice> = cameraManager.getSupportedCameras();\n  if (cameraArray.length <= 0) {\n    console.error('cameraManager.getSupportedCameras error');\n    return;\n  }\n\n  for (let index = 0; index < cameraArray.length; index++) {\n    console.info('cameraId : ' + cameraArray[index].cameraId); // 获取相机ID。\n    console.info('cameraPosition : ' + cameraArray[index].cameraPosition); // 获取相机位置。\n    console.info('cameraType : ' + cameraArray[index].cameraType); // 获取相机类型。\n    console.info('connectionType : ' + cameraArray[index].connectionType); // 获取相机连接类型。\n  }\n\n  // 创建相机输入流。\n  try {\n    cameraInput = cameraManager.createCameraInput(cameraArray[0]);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to createCameraInput errorCode = ' + err.code);\n  }\n  if (cameraInput === undefined) {\n    return;\n  }\n\n  // 监听cameraInput错误信息。\n  let cameraDevice: camera.CameraDevice = cameraArray[0];\n  cameraInput.on('error', cameraDevice, (error: BusinessError) => {\n    console.error(`Camera input error code: ${error.code}`);\n  });\n\n  // 打开相机。\n  await cameraInput.open();\n\n  // 获取支持的模式类型。\n  let sceneModes: Array<camera.SceneMode> = cameraManager.getSupportedSceneModes(cameraArray[0]);\n  let isSupportPhotoMode: boolean = sceneModes.indexOf(camera.SceneMode.NORMAL_PHOTO) >= 0;\n  if (!isSupportPhotoMode) {\n    console.error('photo mode not support');\n    return;\n  }\n  // 获取相机设备支持的输出流能力。\n  let cameraOutputCap: camera.CameraOutputCapability =\n    cameraManager.getSupportedOutputCapability(cameraArray[0], camera.SceneMode.NORMAL_PHOTO);\n  if (!cameraOutputCap) {\n    console.error('cameraManager.getSupportedOutputCapability error');\n    return;\n  }\n  console.info('outputCapability: ' + JSON.stringify(cameraOutputCap));\n\n  let previewProfilesArray: Array<camera.Profile> = cameraOutputCap.previewProfiles;\n  if (!previewProfilesArray) {\n    console.error('createOutput previewProfilesArray == null || undefined');\n  }\n\n  let photoProfilesArray: Array<camera.Profile> = cameraOutputCap.photoProfiles;\n  if (!photoProfilesArray) {\n    console.error('createOutput photoProfilesArray == null || undefined');\n  }\n\n  // 创建预览输出流,其中参数surfaceId参考上文XComponent组件，预览流为XComponent组件提供的surface。\n  try {\n    previewOutput = cameraManager.createPreviewOutput(previewProfilesArray[0], surfaceId);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to create the PreviewOutput instance. error code: ${err.code}`);\n  }\n  if (previewOutput === undefined) {\n    return;\n  }\n\n  // 监听预览输出错误信息。\n  previewOutput.on('error', (error: BusinessError) => {\n    console.error(`Preview output error code: ${error.code}`);\n  });\n\n  // 创建拍照输出流。\n  try {\n    photoOutput = cameraManager.createPhotoOutput(photoProfilesArray[0]);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to createPhotoOutput errorCode = ' + err.code);\n  }\n  if (photoOutput === undefined) {\n    return;\n  }\n\n  // 注册监听photoAssetAvailable回调。\n  setPhotoOutputCb(photoOutput, context);\n\n  // 创建会话。\n  try {\n    photoSession = cameraManager.createSession(camera.SceneMode.NORMAL_PHOTO) as camera.PhotoSession;\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to create the session instance. errorCode = ' + err.code);\n  }\n  if (photoSession === undefined) {\n    return;\n  }\n  // 监听session错误信息。\n  photoSession.on('error', (error: BusinessError) => {\n    console.error(`Capture session error code: ${error.code}`);\n  });\n\n  // 开始配置会话。\n  try {\n    photoSession.beginConfig();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to beginConfig. errorCode = ' + err.code);\n  }\n\n  // 向会话中添加相机输入流。\n  try {\n    photoSession.addInput(cameraInput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to addInput. errorCode = ' + err.code);\n  }\n\n  // 向会话中添加预览输出流。\n  try {\n    photoSession.addOutput(previewOutput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to addOutput(previewOutput). errorCode = ' + err.code);\n  }\n\n  // 向会话中添加拍照输出流。\n  try {\n    photoSession.addOutput(photoOutput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to addOutput(photoOutput). errorCode = ' + err.code);\n  }\n\n  // 提交会话配置。\n  await photoSession.commitConfig();\n\n  // 启动会话。\n  await photoSession.start().then(() => {\n    console.info('Promise returned to indicate the session start success.');\n  });\n  // 判断设备是否支持闪光灯。\n  let flashStatus: boolean = false;\n  try {\n    flashStatus = photoSession.hasFlash();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to hasFlash. errorCode = ' + err.code);\n  }\n  console.info('Returned with the flash light support status:' + flashStatus);\n\n  if (flashStatus) {\n    // 判断是否支持自动闪光灯模式。\n    let flashModeStatus: boolean = false;\n    try {\n      let status: boolean = photoSession.isFlashModeSupported(camera.FlashMode.FLASH_MODE_AUTO);\n      flashModeStatus = status;\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error('Failed to check whether the flash mode is supported. errorCode = ' + err.code);\n    }\n    if (flashModeStatus) {\n      // 设置自动闪光灯模式。\n      try {\n        photoSession.setFlashMode(camera.FlashMode.FLASH_MODE_AUTO);\n      } catch (error) {\n        let err = error as BusinessError;\n        console.error('Failed to set the flash mode. errorCode = ' + err.code);\n      }\n    }\n  }\n\n  // 判断是否支持连续自动变焦模式。\n  let focusModeStatus: boolean = false;\n  try {\n    let status: boolean = photoSession.isFocusModeSupported(camera.FocusMode.FOCUS_MODE_CONTINUOUS_AUTO);\n    focusModeStatus = status;\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to check whether the focus mode is supported. errorCode = ' + err.code);\n  }\n\n  if (focusModeStatus) {\n    // 设置连续自动变焦模式。\n    try {\n      photoSession.setFocusMode(camera.FocusMode.FOCUS_MODE_CONTINUOUS_AUTO);\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error('Failed to set the focus mode. errorCode = ' + err.code);\n    }\n  }\n\n  // 获取相机支持的可变焦距比范围。\n  let zoomRatioRange: Array<number> = [];\n  try {\n    zoomRatioRange = photoSession.getZoomRatioRange();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to get the zoom ratio range. errorCode = ' + err.code);\n  }\n  if (zoomRatioRange.length <= 0) {\n    return;\n  }\n\n  // 设置可变焦距比。\n  try {\n    photoSession.setZoomRatio(zoomRatioRange[0]);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to set the zoom ratio value. errorCode = ' + err.code);\n  }\n  let photoCaptureSetting: camera.PhotoCaptureSetting = {\n    quality: camera.QualityLevel.QUALITY_LEVEL_HIGH, // 设置图片质量高。\n    rotation: camera.ImageRotation.ROTATION_0 // 设置图片旋转角度0。\n  }\n\n  // 使用当前拍照设置触发一次拍照。\n  photoOutput.capture(photoCaptureSetting, (err: BusinessError) => {\n    if (err) {\n      console.error(`Failed to capture the photo ${err.message}`);\n      return;\n    }\n    console.info('Callback invoked to indicate the photo capture request success.');\n  });\n}\n\nasync function releaseCamSession() {\n  // 停止当前会话。\n  await photoSession?.stop();\n\n  // 释放拍照输出流。\n  await photoOutput?.release();\n\n  // 释放预览输出流。\n  await previewOutput?.release();\n\n  // 释放相机输入流。\n  await cameraInput?.close();\n\n  // 释放会话。\n  await photoSession?.release();\n\n  // 会话置空。\n  photoSession = undefined;\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'PhotoAssetDemo';\n  @State isShow: boolean = false;\n  private mXComponentController: XComponentController = new XComponentController();\n  private surfaceId = '';\n  private uiContext: UIContext = this.getUIContext();\n  private context: Context | undefined = this.uiContext.getHostContext();\n  private cameraPermission: Permissions = 'ohos.permission.CAMERA'; // 申请权限相关问题可参考本篇开头的申请相关权限文档\n  private mXComponentOptions: XComponentOptions = {\n    type: XComponentType.SURFACE,\n    controller: this.mXComponentController\n  }\n\n\n  async requestPermissionsFn(): Promise<void> {\n    let atManager = abilityAccessCtrl.createAtManager();\n    if (this.context) {\n      let res = await atManager.requestPermissionsFromUser(this.context, [this.cameraPermission]);\n      for (let i = 0; i < res.permissions.length; i++) {\n        if (this.cameraPermission.toString() === res.permissions[i] && res.authResults[i] === 0) {\n          this.isShow = true;\n        }\n      }\n    }\n  }\n\n  aboutToAppear(): void {\n    this.requestPermissionsFn();\n  }\n\n  build() {\n    Column() {\n      Column() {\n        if (this.isShow) {\n          XComponent(this.mXComponentOptions)\n          .onLoad(async () => {\n            console.info('onLoad is called');\n            if (this.context) {\n              this.surfaceId = this.mXComponentController.getXComponentSurfaceId();\n              console.info(`onLoad surfaceId: ${this.surfaceId}`);\n              deferredCaptureCase(this.context, this.surfaceId);\n            }\n          })\n          .renderFit(RenderFit.RESIZE_CONTAIN)\n        }\n      }\n      .height('95%')\n      .justifyContent(FlexAlign.Center)\n\n      Text(this.message)\n        .id('PhotoAssetDemo')\n        .fontSize(38)\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
873605(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798918-b9a333ce487cfb75c466f9118c0e3df5.png");

},
28453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(296540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


},

}]);