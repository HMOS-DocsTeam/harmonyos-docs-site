"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["971746"], {
485122(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_arkts_camera_foldable_display_camera_foldable_display_md_8ab_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-arkts-camera-foldable-display-camera-foldable-display-md-8ab.json
var site_docs_camera_kit_camera_dev_arkts_camera_foldable_display_camera_foldable_display_md_8ab_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-arkts/camera-foldable-display/camera-foldable-display","title":"适配不同折叠状态的摄像头变更(ArkTS)","description":"折叠设备形态各异，在相机应用的开发过程中需要统一的摄像头切换方案，以确保用户在拍照、录像过程中获得更好的体验。","source":"@site/docs/camera-kit/camera-dev-arkts/camera-foldable-display/camera-foldable-display.md","sourceDirName":"camera-kit/camera-dev-arkts/camera-foldable-display","slug":"/camera-kit/camera-dev-arkts/camera-foldable-display/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-foldable-display/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"适配不同折叠状态的摄像头变更(ArkTS)","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-foldable-display","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"手电筒使用(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-torch-use/"},"next":{"title":"分段式拍照(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-deferred-capture/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-arkts/camera-foldable-display/camera-foldable-display.md


const frontMatter = {
	title: '适配不同折叠状态的摄像头变更(ArkTS)',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-foldable-display',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '适配不同折叠状态的摄像头变更(ArkTS)';

const assets = {

};



const toc = [{
  "value": "创建XComponent",
  "id": "创建xcomponent",
  "level": 2
}, {
  "value": "获取设备折叠状态",
  "id": "获取设备折叠状态",
  "level": 2
}, {
  "value": "判断是否存在对应位置摄像头",
  "id": "判断是否存在对应位置摄像头",
  "level": 2
}, {
  "value": "摄像头切换逻辑",
  "id": "摄像头切换逻辑",
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
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "适配不同折叠状态的摄像头变更arkts",
        children: "适配不同折叠状态的摄像头变更(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "折叠设备形态各异，在相机应用的开发过程中需要统一的摄像头切换方案，以确保用户在拍照、录像过程中获得更好的体验。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["一台可折叠设备在不同折叠状态下，可使用不同的相机。系统会标识所有摄像头，每个摄像头与一个折叠状态相对应，表示该摄像头可在对应的折叠状态下使用。应用可调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#onfoldstatuschange12",
        children: "CameraManager.on('foldStatusChange')"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#displayonfoldstatuschange10",
        children: "display.on('foldStatusChange')"
      }), "监听设备的折叠状态变化，并调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#getsupportedcameras",
        children: "CameraManager.getSupportedCameras"
      }), "获取当前状态下可用相机，完成相应适配，确保应用在折叠状态变更时的用户体验。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不同折叠设备在不同折叠状态下支持的摄像头数量不同。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["例如，折叠设备拥有三颗摄像头：后置摄像头A、前置摄像头B和前置摄像头C。在展开状态下，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#getsupportedcameras",
        children: "CameraManager.getSupportedCameras"
      }), "接口可获取到后置摄像头A和前置摄像头B；在折叠状态下，可获取到后置摄像头A和前置摄像头C。不同的折叠状态获取到的镜头不同，因此，在折叠状态变化时，需要重新获取镜头信息。"]
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
      children: ["在开发相机应用时，需要先申请相机相关权限，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-preparation",
        children: "申请相关权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建xcomponent",
      children: "创建XComponent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用两个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
        children: "XComponent"
      }), "分别展示折叠态和展开态，防止切换折叠屏状态亮屏的时候上一个相机还未关闭，残留上一个相机的画面。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " @Entry\n @Component\n struct Index {\n   @State reloadXComponentFlag: boolean = false;\n   @StorageLink('foldStatus') @Watch('reloadXComponent') foldStatus: number = 0;\n   private mXComponentController: XComponentController = new XComponentController();\n   private mXComponentOptions: XComponentOptions = {\n     type: XComponentType.SURFACE,\n     controller: this.mXComponentController\n   }\n\n   reloadXComponent() {\n     this.reloadXComponentFlag = !this.reloadXComponentFlag;\n   }\n\n   async loadXComponent() {\n     // 初始化XComponent。\n   }\n\n   build() {\n     Stack() {\n       if (this.reloadXComponentFlag) {\n         XComponent(this.mXComponentOptions)\n           .onLoad(async () => {\n             await this.loadXComponent();\n           })\n           .width(this.getUIContext().px2vp(1080))\n           .height(this.getUIContext().px2vp(1920))\n       } else {\n         XComponent(this.mXComponentOptions)\n           .onLoad(async () => {\n             await this.loadXComponent();\n           })\n           .width(this.getUIContext().px2vp(1080))\n           .height(this.getUIContext().px2vp(1920))\n       }\n     }\n     .size({ width: '100%', height: '100%' })\n     .backgroundColor(Color.Black)\n   }\n }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取设备折叠状态",
      children: "获取设备折叠状态"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处提供两种方案供开发者选择。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["方案一：使用相机框架提供的", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#onfoldstatuschange12",
                children: "CameraManager.on('foldStatusChange')"
              }), "监听设备折叠态变化。"]
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { camera } from '@kit.CameraKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nfunction registerFoldStatusChanged(err: BusinessError, foldStatusInfo: camera.FoldStatusInfo) {\n  // foldStatus 变量用来控制显示XComponent组件。\n  AppStorage.setOrCreate<number>('foldStatus', foldStatusInfo.foldStatus);\n}\n\nfunction onFoldStatusChange(cameraManager: camera.CameraManager) {\n  cameraManager.on('foldStatusChange', registerFoldStatusChanged);\n}\n\nfunction offFoldStatusChange(cameraManager: camera.CameraManager) {\n  cameraManager.off('foldStatusChange', registerFoldStatusChanged);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["方案二：使用图形图像的", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#displayonfoldstatuschange10",
                children: "display.on('foldStatusChange')"
              }), "监听设备折叠态变化。"]
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { display } from '@kit.ArkUI';\n\nfunction getFoldStatus(): display.FoldStatus {\n  let curFoldStatus: display.FoldStatus = display.FoldStatus.FOLD_STATUS_UNKNOWN;\n  try {\n    curFoldStatus = display.getFoldStatus();\n  } catch (error) {\n    console.error('getFoldStatus call failed');\n  }\n  return curFoldStatus;\n}\n\nlet preFoldStatus: display.FoldStatus = getFoldStatus();\ndisplay.on('foldStatusChange', (foldStatus: display.FoldStatus) => {\n  // 从半折叠态（FOLD_STATUS_HALF_FOLDED）到展开态（FOLD_STATUS_EXPANDED），相机框架返回所支持的相机是一致的，所以从半折叠态到展开态不需要重新配流，从展开态到半折叠态也是一样的。\n  if ((preFoldStatus === display.FoldStatus.FOLD_STATUS_HALF_FOLDED &&\n    foldStatus === display.FoldStatus.FOLD_STATUS_EXPANDED) ||\n    (preFoldStatus === display.FoldStatus.FOLD_STATUS_EXPANDED &&\n      foldStatus === display.FoldStatus.FOLD_STATUS_HALF_FOLDED)) {\n    preFoldStatus = foldStatus;\n    return;\n  }\n  preFoldStatus = foldStatus;\n  // foldStatus 变量用来控制显示XComponent组件。\n  AppStorage.setOrCreate<number>('foldStatus', foldStatus);\n})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "判断是否存在对应位置摄像头",
      children: "判断是否存在对应位置摄像头"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#getsupportedcameras",
        children: "CameraManager.getSupportedCameras"
      }), "接口可获取到当前设备折叠状态下支持的所有镜头，遍历获取到的结果，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#cameraposition",
        children: "CameraPosition"
      }), "判断镜头是否存在。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { camera } from '@kit.CameraKit';\n\n// connectionType默认为camera.ConnectionType.CAMERA_CONNECTION_BUILT_IN，表示设备的内置镜头。\nfunction hasCameraAt(cameraManager: camera.CameraManager, cameraPosition: camera.CameraPosition,\n  connectionType: camera.ConnectionType = camera.ConnectionType.CAMERA_CONNECTION_BUILT_IN): boolean {\n  let cameraArray: Array<camera.CameraDevice> = cameraManager.getSupportedCameras();\n  if (cameraArray.length <= 0) {\n    console.error('cameraManager.getSupportedCameras error');\n    return false;\n  }\n  for (let index = 0; index < cameraArray.length; index++) {\n    if (cameraArray[index].cameraPosition === cameraPosition &&\n      cameraArray[index].connectionType === connectionType) {\n      return true;\n    }\n  }\n  return false;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "摄像头切换逻辑",
      children: "摄像头切换逻辑"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在监听到折叠状态发生变化时通过设置被", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#storagelink",
        children: "@StorageLink"
      }), "修饰的foldStatus变量改变，触发reloadXComponent方法重新加载XComponent组件，从而实现相机的切换逻辑。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { camera } from '@kit.CameraKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { abilityAccessCtrl } from '@kit.AbilityKit';\nimport { display } from '@kit.ArkUI';\n\nconst TAG = 'FoldScreenCameraAdaptationDemo ';\n\n@Entry\n@Component\nstruct Index {\n  @State isShow: boolean = false;\n  @State reloadXComponentFlag: boolean = false;\n  @StorageLink('foldStatus') @Watch('reloadXComponent') foldStatus: number = 0;\n  private mXComponentController: XComponentController = new XComponentController();\n  private mXComponentOptions: XComponentOptions = {\n    type: XComponentType.SURFACE,\n    controller: this.mXComponentController\n  }\n  private mSurfaceId: string = '';\n  private mCameraPosition: camera.CameraPosition = camera.CameraPosition.CAMERA_POSITION_BACK;\n  private mCameraManager: camera.CameraManager | undefined = undefined;\n  // surface宽高根据需要自行选择。\n  private surfaceRect: SurfaceRect = {\n    surfaceWidth: 1080,\n    surfaceHeight: 1920\n  };\n  private curCameraDevice: camera.CameraDevice | undefined = undefined;\n  private mCameraInput: camera.CameraInput | undefined = undefined;\n  private mPreviewOutput: camera.PreviewOutput | undefined = undefined;\n  private mPhotoSession: camera.PhotoSession | undefined = undefined;\n  // 请根据实际业务诉求选择符合需求场景的预览流Profile，此处以分辨率1080P，CameraFormat：1003为例。\n  private previewProfileObj: camera.Profile = {\n    format: 1003,\n    size: {\n      width: 1920,\n      height: 1080\n    }\n  };\n  private mContext: Context | undefined = undefined;\n\n  private preFoldStatus: display.FoldStatus = this.getFoldStatus();\n  // 监听折叠屏状态，可以使用cameraManager.on(type: 'foldStatusChange', callback: AsyncCallback<FoldStatusInfo>): void;\n  // 也可以使用display.on(type: 'foldStatusChange', callback: Callback<FoldStatus>): void;\n  private foldStatusCallback =\n    (err: BusinessError, info: camera.FoldStatusInfo): void => this.registerFoldStatusChanged(err, info);\n  private displayFoldStatusCallback =\n    (foldStatus: display.FoldStatus): void => this.onDisplayFoldStatusChange(foldStatus);\n\n  getFoldStatus(): display.FoldStatus {\n    let curFoldStatus: display.FoldStatus = display.FoldStatus.FOLD_STATUS_UNKNOWN;\n    try {\n      curFoldStatus = display.getFoldStatus();\n    } catch (error) {\n      console.info(`${TAG} getFoldStatus call failed, error: ${error.code}`);\n    }\n    return curFoldStatus;\n  }\n\n  registerFoldStatusChanged(err: BusinessError, foldStatusInfo: camera.FoldStatusInfo) {\n    if (err !== undefined && err.code !== 0) {\n      console.info(`${TAG} registerFoldStatusChanged call failed, error: ${err.code}`);\n      return;\n    }\n    console.info(TAG + 'foldStatusChanged foldStatus: ' + foldStatusInfo.foldStatus);\n    for (let i = 0; i < foldStatusInfo.supportedCameras.length; i++) {\n      console.info(TAG +\n        `foldStatusChanged camera[${i}]: ${foldStatusInfo.supportedCameras[i].cameraId},cameraPosition: ${foldStatusInfo.supportedCameras[i].cameraPosition}`);\n    }\n    AppStorage.setOrCreate<number>('foldStatus', foldStatusInfo.foldStatus);\n  }\n\n  onDisplayFoldStatusChange(foldStatus: display.FoldStatus): void {\n    console.info(TAG + `onDisplayFoldStatusChange foldStatus: ${foldStatus}`);\n    if ((this.preFoldStatus === display.FoldStatus.FOLD_STATUS_HALF_FOLDED &&\n      foldStatus === display.FoldStatus.FOLD_STATUS_EXPANDED) ||\n      (this.preFoldStatus === display.FoldStatus.FOLD_STATUS_EXPANDED &&\n        foldStatus === display.FoldStatus.FOLD_STATUS_HALF_FOLDED)) {\n      this.preFoldStatus = foldStatus;\n      return;\n    }\n    this.preFoldStatus = foldStatus;\n    if (!this.curCameraDevice) {\n      return;\n    }\n    // foldStatus 变量用来控制显示XComponent组件。\n    AppStorage.setOrCreate<number>('foldStatus', foldStatus);\n  }\n\n  requestPermissionsFn(): void {\n    let atManager = abilityAccessCtrl.createAtManager();\n    atManager.requestPermissionsFromUser(this.mContext, [\n      'ohos.permission.CAMERA'\n    ]).then((): void => {\n      this.isShow = true;\n    }).catch((error: BusinessError): void => {\n      console.error(`${TAG} requestPermissionsFromUser call failed, error: ${error.code}`);\n    });\n  }\n\n  initContext(): void {\n    let uiContext = this.getUIContext();\n    this.mContext = uiContext.getHostContext();\n  }\n\n  initCameraManager(): void {\n    try {\n      this.mCameraManager = camera.getCameraManager(this.mContext);\n    } catch (error) {\n      console.error(`${TAG} getCameraManager call failed, error: ${error.code}`);\n    }\n  }\n\n  aboutToAppear(): void {\n    console.info(TAG + 'aboutToAppear is called');\n    this.initContext();\n    this.initCameraManager();\n    this.requestPermissionsFn();\n    this.onFoldStatusChange();\n  }\n\n  async aboutToDisappear(): Promise<void> {\n    await this.releaseCamera();\n    // 解注册。\n    this.offFoldStatusChange();\n  }\n\n  async onPageShow(): Promise<void> {\n    await this.initCamera(this.mSurfaceId, this.mCameraPosition);\n  }\n\n  async releaseCamera(): Promise<void> {\n    // 停止当前会话。\n    try {\n      await this.mPhotoSession?.stop();\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG + 'Failed to stop session, errorCode = ' + err.code);\n    }\n\n    // 释放相机输入流。\n    try {\n      await this.mCameraInput?.close();\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG + 'Failed to close device, errorCode = ' + err.code);\n    }\n\n    // 释放预览输出流。\n    try {\n      await this.mPreviewOutput?.release();\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG + 'Failed to release previewOutput, errorCode = ' + err.code);\n    }\n\n    this.mPreviewOutput = undefined;\n\n    // 释放会话。\n    try {\n      await this.mPhotoSession?.release();\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG + 'Failed to release photoSession, errorCode = ' + err.code);\n    }\n\n    // 会话置空。\n    this.mPhotoSession = undefined;\n  }\n\n  onFoldStatusChange(): void {\n    this.mCameraManager?.on('foldStatusChange', this.foldStatusCallback);\n    // display.on('foldStatusChange', this.displayFoldStatusCallback);\n  }\n\n  offFoldStatusChange(): void {\n    this.mCameraManager?.off('foldStatusChange', this.foldStatusCallback);\n    // display.off('foldStatusChange', this.displayFoldStatusCallback);\n  }\n\n  reloadXComponent(): void {\n    this.reloadXComponentFlag = !this.reloadXComponentFlag;\n  }\n\n  async loadXComponent(): Promise<void> {\n    if (!this.mXComponentController) {\n      console.error(TAG + 'mXComponentController is null');\n      return;\n    }\n    this.mSurfaceId = this.mXComponentController.getXComponentSurfaceId();\n    this.mXComponentController.setXComponentSurfaceRect(this.surfaceRect);\n    console.info(TAG + `mCameraPosition: ${this.mCameraPosition}`)\n    await this.initCamera(this.mSurfaceId, this.mCameraPosition);\n  }\n\n  getPreviewProfile(cameraOutputCapability: camera.CameraOutputCapability): camera.Profile | undefined {\n    let previewProfiles = cameraOutputCapability.previewProfiles;\n    if (previewProfiles.length < 1) {\n      return undefined;\n    }\n    let index = previewProfiles.findIndex((previewProfile: camera.Profile) => {\n      return previewProfile.size.width === this.previewProfileObj.size.width &&\n        previewProfile.size.height === this.previewProfileObj.size.height &&\n        previewProfile.format === this.previewProfileObj.format;\n    })\n    if (index === -1) {\n      return undefined;\n    }\n    return previewProfiles[index];\n  }\n\n  async initCamera(surfaceId: string, cameraPosition: camera.CameraPosition,\n    connectionType: camera.ConnectionType = camera.ConnectionType.CAMERA_CONNECTION_BUILT_IN): Promise<void> {\n    await this.releaseCamera();\n    // 创建CameraManager对象。\n    if (!this.mCameraManager) {\n      console.error(TAG + 'camera.getCameraManager error');\n      return;\n    }\n\n    // 获取相机列表。\n    let cameraArray: Array<camera.CameraDevice> = this.mCameraManager.getSupportedCameras();\n    if (!cameraArray || cameraArray.length == 0) {\n      console.error(TAG + 'cameraManager.getSupportedCameras error');\n      return;\n    }\n\n    for (let index = 0; index < cameraArray.length; index++) {\n      console.info(TAG + 'cameraId : ' + cameraArray[index].cameraId); // 获取相机ID。\n      console.info(TAG + 'cameraPosition : ' + cameraArray[index].cameraPosition); // 获取相机位置。\n      console.info(TAG + 'cameraType : ' + cameraArray[index].cameraType); // 获取相机类型。\n      console.info(TAG + 'connectionType : ' + cameraArray[index].connectionType); // 获取相机连接类型。\n    }\n\n    let deviceIndex = cameraArray.findIndex((cameraDevice: camera.CameraDevice) => {\n      return cameraDevice.cameraPosition === cameraPosition && cameraDevice.connectionType === connectionType;\n    })\n    // 没有找到对应位置的摄像头，可选择其他摄像头，具体场景具体对待。\n    if (deviceIndex === -1) {\n      deviceIndex = 0;\n      console.error(TAG + 'not found camera');\n    }\n    this.curCameraDevice = cameraArray[deviceIndex];\n\n    // 创建相机输入流。\n    try {\n      this.mCameraInput = this.mCameraManager.createCameraInput(this.curCameraDevice);\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG + 'Failed to createCameraInput errorCode = ' + err.code);\n    }\n    if (this.mCameraInput === undefined) {\n      return;\n    }\n\n    // 打开相机。\n    try {\n      await this.mCameraInput.open();\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG + 'Failed to open device, errorCode = ' + err.code);\n    }\n\n    // 获取支持的模式类型。\n    let sceneModes: Array<camera.SceneMode> = this.mCameraManager.getSupportedSceneModes(this.curCameraDevice);\n    let isSupportPhotoMode: boolean = sceneModes.indexOf(camera.SceneMode.NORMAL_PHOTO) >= 0;\n    if (!isSupportPhotoMode) {\n      console.error(TAG + 'photo mode not support');\n      await this.releaseCamera();\n      return;\n    }\n\n    // 获取相机设备支持的输出流能力。\n    let cameraOutputCapability: camera.CameraOutputCapability =\n      this.mCameraManager.getSupportedOutputCapability(this.curCameraDevice, camera.SceneMode.NORMAL_PHOTO);\n    if (!cameraOutputCapability) {\n      console.error(TAG + 'cameraManager.getSupportedOutputCapability error');\n      return;\n    }\n    console.info(TAG + 'outputCapability: ' + JSON.stringify(cameraOutputCapability));\n    let previewProfile = this.getPreviewProfile(cameraOutputCapability);\n    if (!previewProfile) {\n      console.error(TAG + 'The resolution of the current preview stream is not supported.');\n      await this.releaseCamera();\n      return;\n    }\n    this.previewProfileObj = previewProfile;\n\n    // 创建预览输出流,其中参数 surfaceId 参考上文 XComponent 组件，预览流为XComponent组件提供的surface。\n    try {\n      this.mPreviewOutput = this.mCameraManager.createPreviewOutput(this.previewProfileObj, surfaceId);\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG + `Failed to create the PreviewOutput instance. error code: ${err.code}`);\n    }\n    if (!this.mPreviewOutput) {\n      await this.releaseCamera();\n      return;\n    }\n\n    // 创建会话。\n    try {\n      let session = this.mCameraManager.createSession(camera.SceneMode.NORMAL_PHOTO);\n      if (!session) {\n        await this.releaseCamera();\n        return;\n      }\n      this.mPhotoSession = session as camera.PhotoSession;\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG + 'Failed to create the session instance. errorCode = ' + err.code);\n    }\n\n    if (!this.mPhotoSession) {\n      await this.releaseCamera();\n      return;\n    }\n\n    // 开始配置会话。\n    try {\n      this.mPhotoSession.beginConfig();\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG + 'Failed to beginConfig. errorCode = ' + err.code);\n    }\n\n    // 向会话中添加相机输入流。\n    try {\n      this.mPhotoSession.addInput(this.mCameraInput);\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG + 'Failed to addInput. errorCode = ' + err.code);\n    }\n\n    // 向会话中添加预览输出流。\n    try {\n      this.mPhotoSession.addOutput(this.mPreviewOutput);\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG + 'Failed to addOutput(previewOutput). errorCode = ' + err.code);\n    }\n\n    // 提交会话配置。\n    try {\n      await this.mPhotoSession.commitConfig();\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG + 'Failed to commit session configuration, errorCode = ' + err.code);\n    }\n\n    // 启动会话。\n    try {\n      await this.mPhotoSession.start()\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG + 'Failed to start session. errorCode = ' + err.code);\n    }\n  }\n\n  build() {\n    if (this.isShow) {\n      Stack() {\n        if (this.reloadXComponentFlag) {\n          XComponent(this.mXComponentOptions)\n            .onLoad(async () => {\n              await this.loadXComponent();\n            })\n            .width(this.getUIContext().px2vp(1080))\n            .height(this.getUIContext().px2vp(1920))\n        } else {\n          XComponent(this.mXComponentOptions)\n            .onLoad(async () => {\n              await this.loadXComponent();\n            })\n            .width(this.getUIContext().px2vp(1080))\n            .height(this.getUIContext().px2vp(1920))\n        }\n        Text('切换相机')\n          .size({ width: 80, height: 48 })\n          .position({ x: 1, y: 1 })\n          .backgroundColor(Color.White)\n          .textAlign(TextAlign.Center)\n          .borderRadius(24)\n          .onClick(async () => {\n            this.mCameraPosition = this.mCameraPosition === camera.CameraPosition.CAMERA_POSITION_BACK ?\n              camera.CameraPosition.CAMERA_POSITION_FRONT : camera.CameraPosition.CAMERA_POSITION_BACK;\n            this.reloadXComponentFlag = !this.reloadXComponentFlag;\n          })\n      }\n      .size({ width: '100%', height: '100%' })\n      .backgroundColor(Color.Black)\n    }\n  }\n}\n"
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