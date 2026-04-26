"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["648249"], {
223593(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_arkts_camera_preview_camera_preview_md_14e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-arkts-camera-preview-camera-preview-md-14e.json
var site_docs_camera_kit_camera_dev_arkts_camera_preview_camera_preview_md_14e_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-arkts/camera-preview/camera-preview","title":"预览(ArkTS)","description":"在开发相机应用时，需要先申请相关权限。","source":"@site/docs/camera-kit/camera-dev-arkts/camera-preview/camera-preview.md","sourceDirName":"camera-kit/camera-dev-arkts/camera-preview","slug":"/camera-kit/camera-dev-arkts/camera-preview/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-preview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"预览(ArkTS)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-preview","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通过系统相机拍照和录像(CameraPicker)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-picker/"},"next":{"title":"双路预览(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-dual-channel-preview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-arkts/camera-preview/camera-preview.md


const frontMatter = {
	title: '预览(ArkTS)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-preview',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '预览(ArkTS)';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "状态监听",
  "id": "状态监听",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "预览arkts",
        children: "预览(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在开发相机应用时，需要先", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-preparation",
        children: "申请相关权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预览是启动相机后看见的画面，通常在拍照和录像前执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera/arkts-apis-camera",
        children: "@ohos.multimedia.camera (相机管理)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入camera接口，接口中提供了相机相关的属性和方法，导入方法如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { camera } from '@kit.CameraKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建Surface。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["相机开发模型为Surface模型，该模型主要通过Surface实现数据交互。在开发相机应用界面时，首先需要通过创建XComponent组件为预览流提供Surface，再通过获取XComponent组件对应Surface的ID创建预览流，预览流画面即可直接在XComponent组件内渲染，详细获取surfaceId请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent#getxcomponentsurfaceid9",
            children: "getXComponentSurfaceId"
          }), "方法。而XComponent的能力由UI提供，相关介绍可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
            children: "XComponent组件参考"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(560744)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "预览流与录像输出流的分辨率的宽高比要保持一致，如果设置XComponent组件中的Surface显示区域宽高比为1920:1080 = 16:9，则需要预览流中的分辨率的宽高比也为16:9，如分辨率选择640:360，或960:540，或1920:1080，以此类推。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct example {\n  xComponentCtl: XComponentController = new XComponentController();\n  surfaceId:string = '';\n  imageWidth: number = 1920;\n  imageHeight: number = 1080;\n  private uiContext: UIContext = this.getUIContext();\n  private mXComponentOptions: XComponentOptions = {\n    type: XComponentType.SURFACE,\n    controller: this.xComponentCtl\n  }\n\n  build() {\n    XComponent(this.mXComponentOptions)\n      .onLoad(async () => {\n        console.info('onLoad is called');\n        this.surfaceId = this.xComponentCtl.getXComponentSurfaceId(); // 获取组件surfaceId。\n        // 使用surfaceId创建预览流，开启相机，组件实时渲染每帧预览流数据。\n      })\n      // surface的宽、高设置与XComponent组件的宽、高设置相反，或使用.renderFit(RenderFit.RESIZE_CONTAIN)自动填充显示无需设置宽、高。\n      .width(this.uiContext.px2vp(this.imageHeight))\n      .height(this.uiContext.px2vp(this.imageWidth))\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-i/arkts-apis-camera-i#cameraoutputcapability",
            children: "CameraOutputCapability"
          }), "中的previewProfiles属性获取当前设备支持的预览能力，返回previewProfilesArray数组 。通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#createpreviewoutput",
            children: "createPreviewOutput"
          }), "方法创建预览输出流，其中，", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#createpreviewoutput",
            children: "createPreviewOutput"
          }), "方法中的两个参数分别是当前设备支持的预览配置信息previewProfile和步骤二中获取的surfaceId。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function getPreviewOutput(cameraManager: camera.CameraManager, cameraOutputCapability: camera.CameraOutputCapability, surfaceId: string): camera.PreviewOutput | undefined {\n  if (!cameraOutputCapability || !cameraOutputCapability.previewProfiles) {\n    return;\n  }\n  let previewProfilesArray: Array<camera.Profile> = cameraOutputCapability.previewProfiles;\n  if (!previewProfilesArray || previewProfilesArray.length === 0) {\n    console.error(\"previewProfilesArray is null or []\");\n    return;\n  }\n  let previewOutput: camera.PreviewOutput | undefined = undefined;\n  try {\n    // previewProfilesArray要选择与步骤二设置宽高比一致的previewProfile配置信息，此处选择数组第一项仅供接口使用示例参考。\n    previewOutput = cameraManager.createPreviewOutput(previewProfilesArray[0], surfaceId);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(\"Failed to create the PreviewOutput instance. error code: \" + err.code);\n  }\n  return previewOutput;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使能。通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#start11",
            children: "Session.start"
          }), "方法输出预览流，接口调用失败会返回相应错误码，错误码类型参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#cameraerrorcode",
            children: "CameraErrorCode"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function startPreviewOutput(cameraManager: camera.CameraManager, previewOutput: camera.PreviewOutput): Promise<void> {\n  try {\n    let cameraArray: Array<camera.CameraDevice> = [];\n    cameraArray = cameraManager.getSupportedCameras();\n    if (cameraArray.length == 0) {\n      console.error('no camera.');\n      return;\n    }\n    // 获取支持的模式类型。\n    let sceneModes: Array<camera.SceneMode> = cameraManager.getSupportedSceneModes(cameraArray[0]);\n    let isSupportPhotoMode: boolean = sceneModes.indexOf(camera.SceneMode.NORMAL_PHOTO) >= 0;\n    if (!isSupportPhotoMode) {\n      console.error('photo mode not support');\n      return;\n    }\n    let cameraInput: camera.CameraInput | undefined;\n    cameraInput = cameraManager.createCameraInput(cameraArray[0]);\n    if (cameraInput === undefined) {\n      console.error('cameraInput is undefined');\n      return;\n    }\n    // 打开相机。\n    await cameraInput.open();\n    let session = cameraManager.createSession(camera.SceneMode.NORMAL_PHOTO);\n    if (!session) {\n      console.error('session is null');\n      return;\n    }\n    let photoSession: camera.PhotoSession = session as camera.PhotoSession;\n    photoSession.beginConfig();\n    photoSession.addInput(cameraInput);\n    photoSession.addOutput(previewOutput);\n    await photoSession.commitConfig();\n    await photoSession.start();\n  } catch (error) {\n    console.error(`startPreviewOutput call failed, error: ${error}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "状态监听",
      children: "状态监听"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在相机应用开发过程中，可以随时监听预览输出流状态，包括预览流启动、预览流结束、预览流输出错误。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过注册固定的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-previewoutput/arkts-apis-camera-previewoutput#onframestart",
            children: "on('frameStart')"
          }), "回调函数获取监听预览启动结果，previewOutput创建成功时即可监听，预览第一次曝光时触发，有该事件返回结果则认为预览流已启动。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function onPreviewOutputFrameStart(previewOutput: camera.PreviewOutput): void {\n  previewOutput.on('frameStart', (err: BusinessError) => {\n    if (err !== undefined && err.code !== 0) {\n      return;\n    }\n    console.info('Preview frame started');\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过注册固定的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-previewoutput/arkts-apis-camera-previewoutput#onframeend",
            children: "on('frameEnd')"
          }), "回调函数获取监听预览结束结果，previewOutput创建成功时即可监听，预览完成最后一帧时触发，有该事件返回结果则认为预览流已结束。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function onPreviewOutputFrameEnd(previewOutput: camera.PreviewOutput): void {\n  previewOutput.on('frameEnd', (err: BusinessError) => {\n    if (err !== undefined && err.code !== 0) {\n      return;\n    }\n    console.info('Preview frame ended');\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过注册固定的error回调函数获取监听预览输出错误结果，回调返回预览输出接口使用错误时对应的错误码，错误码类型参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#cameraerrorcode",
            children: "CameraErrorCode"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function onPreviewOutputError(previewOutput: camera.PreviewOutput): void {\n  previewOutput.on('error', (previewOutputError: BusinessError) => {\n    console.error(`Preview output error code: ${previewOutputError.code}`);\n  });\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { camera } from '@kit.CameraKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { abilityAccessCtrl, Permissions } from '@kit.AbilityKit';\n\n\n@Entry\n@Component\nstruct Index {\n  private xComponentCtl: XComponentController = new XComponentController();\n  private xComponentSurfaceId: string = '';\n  @State imageWidth: number = 1920;\n  @State imageHeight: number = 1080;\n  private cameraManager: camera.CameraManager | undefined = undefined;\n  private cameras: Array<camera.CameraDevice> | undefined = [];\n  private cameraInput: camera.CameraInput | undefined = undefined;\n  private previewOutput: camera.PreviewOutput | undefined = undefined;\n  private session: camera.VideoSession | undefined = undefined;\n  private uiContext: UIContext = this.getUIContext();\n  private context: Context | undefined = this.uiContext.getHostContext();\n  private cameraPermission: Permissions = 'ohos.permission.CAMERA'; // 申请权限相关问题可参考本篇开头的申请相关权限文档\n  @State isShow: boolean = false;\n  private mXComponentOptions: XComponentOptions = {\n    type: XComponentType.SURFACE,\n    controller: this.xComponentCtl\n  }\n\n  async requestPermissionsFn(): Promise<void> {\n    let atManager = abilityAccessCtrl.createAtManager();\n    if (this.context) {\n      let res = await atManager.requestPermissionsFromUser(this.context, [this.cameraPermission]);\n      for (let i = 0; i < res.permissions.length; i++) {\n        if (this.cameraPermission.toString() === res.permissions[i] && res.authResults[i] === 0) {\n          this.isShow = true;\n        }\n      }\n    }\n  }\n\n  aboutToAppear(): void {\n    this.requestPermissionsFn();\n  }\n\n  onPageShow(): void {\n    console.info('onPageShow');\n    if (this.xComponentSurfaceId !== '') {\n      this.initCamera();\n    }\n  }\n\n  onPageHide(): void {\n    console.info('onPageHide');\n    this.releaseCamera();\n  }\n\n  build() {\n    Column() {\n      if (this.isShow) {\n        XComponent(this.mXComponentOptions)\n          .onLoad(async () => {\n            console.info('onLoad is called');\n            this.xComponentSurfaceId = this.xComponentCtl.getXComponentSurfaceId(); // 获取组件surfaceId。\n            // 初始化相机，组件实时渲染每帧预览流数据。\n            this.initCamera()\n          })\n          .width(this.uiContext.px2vp(this.imageHeight))\n          .height(this.uiContext.px2vp(this.imageWidth))\n      }\n    }\n    .justifyContent(FlexAlign.Center)\n    .height('100%')\n    .width('100%')\n  }\n\n\n  // 初始化相机。\n  async initCamera(): Promise<void> {\n    console.info(`initCamera previewOutput xComponentSurfaceId:${this.xComponentSurfaceId}`);\n    try {\n      // 获取相机管理器实例。\n      this.cameraManager = camera.getCameraManager(this.context);\n      if (!this.cameraManager) {\n        console.error('initCamera getCameraManager');\n        return;\n      }\n      // 获取当前设备支持的相机device列表。\n      this.cameras = this.cameraManager.getSupportedCameras();\n      if (!this.cameras) {\n        console.error('initCamera getSupportedCameras');\n      }\n      // 选择一个相机device，创建cameraInput输出对象。\n      this.cameraInput = this.cameraManager.createCameraInput(this.cameras[0]);\n      if (!this.cameraInput) {\n        console.error('initCamera createCameraInput');\n        return;\n      }\n      // 打开相机。\n      await this.cameraInput.open();\n      // 获取相机device支持的profile。\n      let capability: camera.CameraOutputCapability =\n        this.cameraManager.getSupportedOutputCapability(this.cameras[0], camera.SceneMode.NORMAL_VIDEO);\n      if (!capability || capability.previewProfiles.length === 0) {\n        console.error('capability is null || []');\n        this.releaseCamera();\n        return;\n      }\n      let minRatioDiff : number = 0.1;\n      let surfaceRatio : number = this.imageWidth / this.imageHeight; // 最接近16:9宽高比。\n      let previewProfile: camera.Profile = capability.previewProfiles[0];\n      // 应用开发者根据实际业务需求选择一个支持的预览流previewProfile。\n      // 此处以选择CAMERA_FORMAT_YUV_420_SP（NV21）格式、满足限定条件分辨率的预览流previewProfile为例。\n      for (let index = 0; index < capability.previewProfiles.length; index++) {\n        const tempProfile = capability.previewProfiles[index];\n        let tempRatio = tempProfile.size.width >= tempProfile.size.height ?\n          tempProfile.size.width / tempProfile.size.height : tempProfile.size.height / tempProfile.size.width;\n        let currentRatio = Math.abs(tempRatio - surfaceRatio);\n        if (currentRatio <= minRatioDiff && tempProfile.format == camera.CameraFormat.CAMERA_FORMAT_YUV_420_SP) {\n          previewProfile = tempProfile;\n          break;\n        }\n      }\n      this.imageWidth = previewProfile.size.width; // 更新xComponent组件的宽。\n      this.imageHeight = previewProfile.size.height; // 更新xComponent组件的高。\n      console.info(`initCamera imageWidth:${this.imageWidth} imageHeight:${this.imageHeight}`);\n\n      // 使用xComponentSurfaceId创建预览。\n      this.previewOutput = this.cameraManager.createPreviewOutput(previewProfile, this.xComponentSurfaceId);\n      if (!this.previewOutput) {\n        console.error('initCamera createPreviewOutput');\n        this.releaseCamera();\n        return;\n      }\n      // 创建录像模式相机会话。\n      let session = this.cameraManager.createSession(camera.SceneMode.NORMAL_VIDEO);\n      if (!session) {\n        console.error('session is null');\n        this.releaseCamera();\n        return;\n      }\n      this.session = session as camera.VideoSession;\n      // 开始配置会话。\n      this.session.beginConfig();\n      // 添加相机设备输入。\n      this.session.addInput(this.cameraInput);\n      // 添加预览流输出。\n      this.session.addOutput(this.previewOutput);\n      // 提交会话配置。\n      await this.session.commitConfig();\n      // 开始启动已配置的输入输出流。\n      await this.session.start();\n    } catch (error) {\n      console.error(`initCamera fail: ${JSON.stringify(error)}`);\n      this.releaseCamera();\n    }\n  }\n\n  // 释放相机。\n  async releaseCamera(): Promise<void> {\n    console.info('releaseCamera');\n    // 停止当前会话。\n    await this.session?.stop().catch((e: BusinessError) => {console.error('Failed to stop session: ', e)});\n    // 释放相机输入流。\n    await this.cameraInput?.close().catch((e: BusinessError) => {console.error('Failed to close the camera: ', e)});\n    // 释放预览输出流。\n    await this.previewOutput?.release().catch((e: BusinessError) => {console.error('Failed to stop the preview stream: ', e)});\n    // 释放会话。\n    await this.session?.release().catch((e: BusinessError) => {console.error('Failed to release session: ', e)});\n  }\n}\n"
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
560744(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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