"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["404821"], {
204852(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_arkts_camera_auto_switch_camera_auto_switch_md_3e9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-arkts-camera-auto-switch-camera-auto-switch-md-3e9.json
var site_docs_camera_kit_camera_dev_arkts_camera_auto_switch_camera_auto_switch_md_3e9_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-arkts/camera-auto-switch/camera-auto-switch","title":"自动切换摄像头实践(ArkTS)","description":"应用适配折叠屏时，在简单UX交互场景下，如人脸识别场景推荐使用相机镜头自动切换能力。在有多个前置镜头的折叠设备上，应用使能自动切换镜头能力后，系统能够自动完成镜头切换、会话配置，在不同的折叠状态下，可自动切换到当前可使用的前置镜头，避免前置镜头被折入内部导致黑屏。","source":"@site/docs/camera-kit/camera-dev-arkts/camera-auto-switch/camera-auto-switch.md","sourceDirName":"camera-kit/camera-dev-arkts/camera-auto-switch","slug":"/camera-kit/camera-dev-arkts/camera-auto-switch/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-auto-switch/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"title":"自动切换摄像头实践(ArkTS)","sidebar_position":17,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-auto-switch","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"相机启动恢复实践(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-background-recovery/"},"next":{"title":"白平衡设置(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-whitebalance/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-arkts/camera-auto-switch/camera-auto-switch.md


const frontMatter = {
	title: '自动切换摄像头实践(ArkTS)',
	sidebar_position: 17,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-auto-switch',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '自动切换摄像头实践(ArkTS)';

const assets = {

};



const toc = [{
  "value": "导入相关依赖",
  "id": "导入相关依赖",
  "level": 2
}, {
  "value": "创建XComponent",
  "id": "创建xcomponent",
  "level": 2
}, {
  "value": "开启自动切换摄像头",
  "id": "开启自动切换摄像头",
  "level": 2
}, {
  "value": "监听或解监听自动切换摄像头状态",
  "id": "监听或解监听自动切换摄像头状态",
  "level": 2
}, {
  "value": "完整示例代码",
  "id": "完整示例代码",
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
        id: "自动切换摄像头实践arkts",
        children: "自动切换摄像头实践(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用适配折叠屏时，在简单UX交互场景下，如人脸识别场景推荐使用相机镜头自动切换能力。在有多个前置镜头的折叠设备上，应用使能自动切换镜头能力后，系统能够自动完成镜头切换、会话配置，在不同的折叠状态下，可自动切换到当前可使用的前置镜头，避免前置镜头被折入内部导致黑屏。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["例如，折叠设备拥有三颗摄像头：后置摄像头A、前置摄像头B和前置摄像头C。在展开状态下，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#getsupportedcameras",
        children: "CameraManager.getSupportedCameras"
      }), "接口可获取到后置摄像头A和前置摄像头B；在折叠状态下，可获取到后置摄像头A和前置摄像头C。在当前折叠状态下启用前置摄像头，并调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-autodeviceswitch/arkts-apis-camera-autodeviceswitch#enableautodeviceswitch13",
        children: "enableAutoDeviceSwitch"
      }), "开启自动切换镜头；这样，在下次折叠屏状态变化时，会自动切换到对应折叠状态下的前置摄像头。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(914116)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自动切换镜头功能由系统自动完成输入设备切换，会话配置和参数接续。当系统发现镜头切换时，两颗镜头的变焦范围不一致，则会通过AutoDeviceSwitchStatus中的isDeviceCapabilityChanged字段告知应用，此时需要应用自己处理UX的变更（如变焦范围的调整，需要重新通过getZoomRatioRange接口获取数据并更新UX）。因此如相机拍照或录像等复杂场景的镜头选择，请参阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-arkts/camera-foldable-display",
        children: "适配不同折叠状态的摄像头变更"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera/arkts-apis-camera",
        children: "@ohos.multimedia.camera (相机管理)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Context获取方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#%E8%8E%B7%E5%8F%96uiability%E7%9A%84%E4%B8%8A%E4%B8%8B%E6%96%87%E4%BF%A1%E6%81%AF",
        children: "获取UIAbility的上下文信息"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在开发相机应用时，需要先", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-preparation",
        children: "申请相关权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入相关依赖",
      children: "导入相关依赖"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { camera } from '@kit.CameraKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { abilityAccessCtrl } from '@kit.AbilityKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建xcomponent",
      children: "创建XComponent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
        children: "XComponent"
      }), "展示摄像头的预览画面。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  private mXComponentController: XComponentController = new XComponentController();\n  private mCameraPosition: camera.CameraPosition = camera.CameraPosition.CAMERA_POSITION_BACK;\n  private mXComponentOptions: XComponentOptions = {\n    type: XComponentType.SURFACE,\n    controller: this.mXComponentController\n  }\n\n  async loadXComponent() {\n    // 初始化XComponent。\n  }\n\n  build() {\n    Stack() {\n      XComponent(this.mXComponentOptions)\n        .onLoad(async () => {\n          await this.loadXComponent();\n        })\n        .width(this.getUIContext().px2vp(1080))\n        .height(this.getUIContext().px2vp(1920))\n      Text('切换相机')\n        .size({ width: 80, height: 48 })\n        .position({ x: 1, y: 1 })\n        .backgroundColor(Color.White)\n        .textAlign(TextAlign.Center)\n        .borderRadius(24)\n        .onClick(async () => {\n          this.mCameraPosition = this.mCameraPosition === camera.CameraPosition.CAMERA_POSITION_BACK ?\n            camera.CameraPosition.CAMERA_POSITION_FRONT : camera.CameraPosition.CAMERA_POSITION_BACK;\n          await this.loadXComponent();\n        })\n    }\n    .size({ width: '100%', height: '100%' })\n    .backgroundColor(Color.Black)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开启自动切换摄像头",
      children: "开启自动切换摄像头"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-autodeviceswitch/arkts-apis-camera-autodeviceswitch#enableautodeviceswitch13",
        children: "enableAutoDeviceSwitch"
      }), "接口前需要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-autodeviceswitchquery/arkts-apis-camera-autodeviceswitchquery#isautodeviceswitchsupported13",
        children: "isAutoDeviceSwitchSupported"
      }), "接口查询当前设备是否支持自动切换摄像头能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function enableAutoDeviceSwitch(session: camera.PhotoSession) {\n  if (session.isAutoDeviceSwitchSupported()) {\n    try {\n      session.enableAutoDeviceSwitch(true);\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(`The enableAutoDeviceSwitch call failed, error code: ${err.code}, error message: ${err.message}`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "监听或解监听自动切换摄像头状态",
      children: "监听或解监听自动切换摄像头状态"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-photosession/arkts-apis-camera-photosession#onautodeviceswitchstatuschange13",
        children: "on('autoDeviceSwitchStatusChange')"
      }), "监听自动切换摄像头的结果。系统自动切换镜头结束后会触发该回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自动切换摄像头期间，禁止调用任何", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session",
        children: "session"
      }), "相关接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function callback(err: BusinessError, autoDeviceSwitchStatus: camera.AutoDeviceSwitchStatus): void {\n  if (err !== undefined && err.code !== 0) {\n    console.error(`Callback Error, errorCode: ${err.code}`);\n    return;\n  }\n  console.info(`isDeviceSwitched: ${autoDeviceSwitchStatus.isDeviceSwitched}, isDeviceCapabilityChanged: ${autoDeviceSwitchStatus.isDeviceCapabilityChanged}`);\n}\n\nfunction registerAutoDeviceSwitchStatus(photoSession: camera.PhotoSession): void {\n  photoSession.on('autoDeviceSwitchStatusChange', callback);\n}\nfunction unregisterAutoDeviceSwitchStatus(photoSession: camera.PhotoSession): void {\n  photoSession.off('autoDeviceSwitchStatusChange', callback);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例代码",
      children: "完整示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { camera } from '@kit.CameraKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { abilityAccessCtrl } from '@kit.AbilityKit';\n\nconst TAG = 'AutoSwitchCameraDemo ';\n\n@Entry\n@Component\nstruct Index {\n  @State isShow: boolean = false;\n  @State reloadXComponentFlag: boolean = false;\n  private mXComponentController: XComponentController = new XComponentController();\n  private mXComponentOptions: XComponentOptions = {\n    type: XComponentType.SURFACE,\n    controller: this.mXComponentController\n  }\n  private mSurfaceId: string = '';\n  private mCameraPosition: camera.CameraPosition = camera.CameraPosition.CAMERA_POSITION_BACK;\n  private mCameraManager: camera.CameraManager | undefined = undefined;\n  private curCameraDevice: camera.CameraDevice | undefined = undefined;\n  private mCameraInput: camera.CameraInput | undefined = undefined;\n  private mPreviewOutput: camera.PreviewOutput | undefined = undefined;\n  private mPhotoSession: camera.PhotoSession | undefined = undefined;\n  // One of the recommended preview resolutions.\n  private previewProfileObj: camera.Profile = {\n    format: 1003,\n    size: {\n      width: 1920,\n      height: 1080\n    }\n  };\n  private mContext: Context | undefined = undefined;\n  autoDeviceSwitchCallback: (err: BusinessError, autoDeviceSwitchStatus: camera.AutoDeviceSwitchStatus) => void =\n    (err: BusinessError, autoDeviceSwitchStatus: camera.AutoDeviceSwitchStatus) => {\n      if (err !== undefined && err.code !== 0) {\n        console.error(`${TAG} Callback Error, errorCode: ${err.code}`);\n        return;\n      }\n      console.info(`${TAG} isDeviceSwitched: ${autoDeviceSwitchStatus.isDeviceSwitched}, isDeviceCapabilityChanged: ${autoDeviceSwitchStatus.isDeviceCapabilityChanged}`);\n  }\n\n  requestPermissionsFn(): void {\n    let atManager = abilityAccessCtrl.createAtManager();\n    atManager.requestPermissionsFromUser(this.mContext, [\n      'ohos.permission.CAMERA'\n    ]).then((): void => {\n      this.isShow = true;\n    }).catch((error: BusinessError): void => {\n      console.error(TAG + `ohos.permission.CAMERA no permission, error: ${error.code}`);\n    });\n  }\n\n  initContext(): void {\n    let uiContext = this.getUIContext();\n    this.mContext = uiContext.getHostContext();\n  }\n\n  initCameraManager(): void {\n    try {\n      this.mCameraManager = camera.getCameraManager(this.mContext);\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(`getCameraManager failed, error: ${err.code}`);\n    }\n  }\n\n  aboutToAppear(): void {\n    console.info(TAG + 'aboutToAppear is called');\n    this.initContext();\n    this.requestPermissionsFn();\n    this.initCameraManager();\n  }\n\n  async aboutToDisappear(): Promise<void> {\n    await this.releaseCamera();\n  }\n\n  async onPageShow(): Promise<void> {\n    await this.initCamera(this.mSurfaceId, this.mCameraPosition);\n  }\n\n  async releaseCamera(): Promise<void> {\n    // 停止当前会话。\n    try {\n      await this.mPhotoSession?.stop();\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG + 'Failed to stop session, errorCode = ' + err.code);\n    }\n\n    // 释放相机输入流。\n    try {\n      await this.mCameraInput?.close();\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG + 'Failed to close device, errorCode = ' + err.code);\n    }\n\n    // 释放预览输出流。\n    try {\n      await this.mPreviewOutput?.release();\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG + 'Failed to release previewOutput, errorCode = ' + err.code);\n    }\n\n    this.mPreviewOutput = undefined;\n\n    // 释放会话。\n    try {\n      await this.mPhotoSession?.release();\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG + 'Failed to release photoSession, errorCode = ' + err.code);\n    }\n\n    // 会话置空。\n    this.mPhotoSession = undefined;\n  }\n\n  async loadXComponent(): Promise<void> {\n    this.mSurfaceId = this.mXComponentController.getXComponentSurfaceId();\n    console.info(TAG + `mCameraPosition: ${this.mCameraPosition}`)\n    await this.initCamera(this.mSurfaceId, this.mCameraPosition);\n  }\n\n  getPreviewProfile(cameraOutputCapability: camera.CameraOutputCapability): camera.Profile | undefined {\n    let previewProfiles = cameraOutputCapability.previewProfiles;\n    if (previewProfiles.length < 1) {\n      return undefined;\n    }\n    let index = previewProfiles.findIndex((previewProfile: camera.Profile) => {\n      return previewProfile.size.width === this.previewProfileObj.size.width &&\n        previewProfile.size.height === this.previewProfileObj.size.height &&\n        previewProfile.format === this.previewProfileObj.format;\n    })\n    if (index === -1) {\n      return undefined;\n    }\n    return previewProfiles[index];\n  }\n\n  async initCamera(surfaceId: string, cameraPosition: camera.CameraPosition,\n    connectionType: camera.ConnectionType = camera.ConnectionType.CAMERA_CONNECTION_BUILT_IN): Promise<void> {\n    await this.releaseCamera();\n    // 创建CameraManager对象。\n    if (!this.mCameraManager) {\n      console.error(TAG + 'camera.getCameraManager error');\n      return;\n    }\n\n    // 获取相机列表。\n    let cameraArray: Array<camera.CameraDevice> = this.mCameraManager.getSupportedCameras();\n    if (cameraArray.length <= 0) {\n      console.error(TAG + 'cameraManager.getSupportedCameras error');\n      return;\n    }\n\n    for (let index = 0; index < cameraArray.length; index++) {\n      console.info(TAG + 'cameraId : ' + cameraArray[index].cameraId); // 获取相机ID。\n      console.info(TAG + 'cameraPosition : ' + cameraArray[index].cameraPosition); // 获取相机位置。\n      console.info(TAG + 'cameraType : ' + cameraArray[index].cameraType); // 获取相机类型。\n      console.info(TAG + 'connectionType : ' + cameraArray[index].connectionType); // 获取相机连接类型。\n    }\n\n    let deviceIndex = cameraArray.findIndex((cameraDevice: camera.CameraDevice) => {\n      return cameraDevice.cameraPosition === cameraPosition && cameraDevice.connectionType === connectionType;\n    })\n    // 没有找到对应位置的摄像头，可选择其他摄像头，具体场景具体对待。\n    if (deviceIndex === -1) {\n      deviceIndex = 0;\n      console.error(TAG + 'not found camera');\n    }\n    this.curCameraDevice = cameraArray[deviceIndex];\n\n    // 创建相机输入流。\n    try {\n      this.mCameraInput = this.mCameraManager.createCameraInput(this.curCameraDevice);\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG + 'Failed to createCameraInput errorCode = ' + err.code);\n    }\n    if (this.mCameraInput === undefined) {\n      return;\n    }\n\n    // 打开相机。\n    try {\n      await this.mCameraInput.open();\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG + 'Failed to open device, errorCode = ' + err.code);\n    }\n\n    // 获取支持的模式类型。\n    let sceneModes: Array<camera.SceneMode> = this.mCameraManager.getSupportedSceneModes(this.curCameraDevice);\n    let isSupportPhotoMode: boolean = sceneModes.indexOf(camera.SceneMode.NORMAL_PHOTO) >= 0;\n    if (!isSupportPhotoMode) {\n      console.error(TAG + 'photo mode not support');\n      return;\n    }\n\n    // 获取相机设备支持的输出流能力。\n    let cameraOutputCapability: camera.CameraOutputCapability =\n      this.mCameraManager.getSupportedOutputCapability(this.curCameraDevice, camera.SceneMode.NORMAL_PHOTO);\n    if (!cameraOutputCapability) {\n      console.error(TAG + 'cameraManager.getSupportedOutputCapability error');\n      return;\n    }\n    console.info(TAG + 'outputCapability: ' + JSON.stringify(cameraOutputCapability));\n    let previewProfile = this.getPreviewProfile(cameraOutputCapability);\n    if (previewProfile === undefined) {\n      console.error(TAG + 'The resolution of the current preview stream is not supported.');\n      return;\n    }\n    this.previewProfileObj = previewProfile;\n\n    // 创建预览输出流,其中参数 surfaceId 参考上文 XComponent 组件，预览流为XComponent组件提供的surface。\n    try {\n      this.mPreviewOutput = this.mCameraManager.createPreviewOutput(this.previewProfileObj, surfaceId);\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG + `Failed to create the PreviewOutput instance. error code: ${err.code}`);\n    }\n    if (this.mPreviewOutput === undefined) {\n      return;\n    }\n\n    // 创建会话。\n    try {\n      this.mPhotoSession = this.mCameraManager.createSession(camera.SceneMode.NORMAL_PHOTO) as camera.PhotoSession;\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG + 'Failed to create the session instance. errorCode = ' + err.code);\n    }\n    if (this.mPhotoSession === undefined) {\n      return;\n    }\n    if (this.mPhotoSession.isAutoDeviceSwitchSupported()) {\n      this.mPhotoSession.enableAutoDeviceSwitch(true);\n      this.mPhotoSession.on('autoDeviceSwitchStatusChange', this.autoDeviceSwitchCallback);\n    }\n    // 开始配置会话。\n    try {\n      this.mPhotoSession.beginConfig();\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG + 'Failed to beginConfig. errorCode = ' + err.code);\n    }\n\n    // 向会话中添加相机输入流。\n    try {\n      this.mPhotoSession.addInput(this.mCameraInput);\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG + 'Failed to addInput. errorCode = ' + err.code);\n    }\n\n    // 向会话中添加预览输出流。\n    try {\n      this.mPhotoSession.addOutput(this.mPreviewOutput);\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG + 'Failed to addOutput(previewOutput). errorCode = ' + err.code);\n    }\n\n    // 提交会话配置。\n    try {\n      await this.mPhotoSession.commitConfig();\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG + 'Failed to commit session configuration, errorCode = ' + err.code);\n    }\n\n    // 启动会话。\n    try {\n      await this.mPhotoSession.start()\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG + 'Failed to start session. errorCode = ' + err.code);\n    }\n  }\n\n  build() {\n    if (this.isShow) {\n      Stack() {\n        XComponent(this.mXComponentOptions)\n          .onLoad(async () => {\n            await this.loadXComponent();\n          })\n          .width(this.getUIContext().px2vp(1080))\n          .height(this.getUIContext().px2vp(1920))\n        Text('切换相机')\n          .size({ width: 80, height: 48 })\n          .position({ x: 1, y: 1 })\n          .backgroundColor(Color.White)\n          .textAlign(TextAlign.Center)\n          .borderRadius(24)\n          .onClick(async () => {\n            this.mCameraPosition = this.mCameraPosition === camera.CameraPosition.CAMERA_POSITION_BACK ?\n            camera.CameraPosition.CAMERA_POSITION_FRONT : camera.CameraPosition.CAMERA_POSITION_BACK;\n            await this.loadXComponent();\n          })\n      }\n      .size({ width: '100%', height: '100%' })\n      .backgroundColor(Color.Black)\n    }\n  }\n}\n"
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
914116(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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