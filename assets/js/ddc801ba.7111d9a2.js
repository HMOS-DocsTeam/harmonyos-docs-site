"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["225601"], {
360957(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_arkts_camera_worker_camera_worker_md_ddc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-arkts-camera-worker-camera-worker-md-ddc.json
var site_docs_camera_kit_camera_dev_arkts_camera_worker_camera_worker_md_ddc_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-arkts/camera-worker/camera-worker","title":"在Worker线程中使用相机(ArkTS)","description":"Worker主要作用是为应用程序提供一个多线程的运行环境，可满足应用程序在执行过程中与主线程分离，在后台线程中运行一个脚本进行耗时操作，极大避免类似计算密集型或高延迟的任务阻塞主线程的运行。","source":"@site/docs/camera-kit/camera-dev-arkts/camera-worker/camera-worker.md","sourceDirName":"camera-kit/camera-dev-arkts/camera-worker","slug":"/camera-kit/camera-dev-arkts/camera-worker/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-worker/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"在Worker线程中使用相机(ArkTS)","sidebar_position":15,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-worker","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"相机基础动效(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-animation/"},"next":{"title":"相机启动恢复实践(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-background-recovery/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-arkts/camera-worker/camera-worker.md


const frontMatter = {
	title: '在Worker线程中使用相机(ArkTS)',
	sidebar_position: 15,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-worker',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '在Worker线程中使用相机(ArkTS)';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "trace对比",
  "id": "trace对比",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "在worker线程中使用相机arkts",
        children: "在Worker线程中使用相机(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/worker-introduction",
        children: "Worker"
      }), "主要作用是为应用程序提供一个多线程的运行环境，可满足应用程序在执行过程中与主线程分离，在后台线程中运行一个脚本进行耗时操作，极大避免类似计算密集型或高延迟的任务阻塞主线程的运行。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通常开发者使用相机功能需要创建相机会话，并持续接收处理预览流、拍照流、录像流等从而实现相关相机功能，这些密集型操作如果都放在主线程即UI线程，可能会阻塞UI绘制，推荐开发者在worker线程中实现相机功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入依赖，本篇文档需要用到worker和相机框架等相关依赖包。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { camera } from '@kit.CameraKit';\nimport { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建相机服务代理类，调用CameraKit方法都放在这个类里执行。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class CameraService {\n  private imageWidth: number = 1920;\n  private imageHeight: number = 1080;\n  private cameraManager: camera.CameraManager | undefined = undefined;\n  private cameras: Array<camera.CameraDevice> = [];\n  private cameraInput: camera.CameraInput | undefined = undefined;\n  private previewOutput: camera.PreviewOutput | undefined = undefined;\n  private photoOutput: camera.PhotoOutput | undefined = undefined;\n  private session: camera.PhotoSession | camera.VideoSession | undefined = undefined;\n\n  // 初始化相机。\n  async initCamera(context: Context, surfaceId: string): Promise<void> {\n    console.info(`initCamera surfaceId: ${surfaceId}`);\n    try {\n      await this.releaseCamera();\n      // 获取相机管理器实例。\n      this.cameraManager = camera.getCameraManager(context);\n      if (this.cameraManager === undefined) {\n        console.error('cameraManager is undefined');\n        return;\n      }\n      this.cameras = this.cameraManager.getSupportedCameras();\n      if (!this.cameras || this.cameras.length <= 0) {\n        console.error(\"cameraManager.getSupportedCameras error\");\n        return;\n      }\n      // 创建cameraInput输出对象。\n      this.cameraInput = this.cameraManager.createCameraInput(this.cameras[0]);\n      if (this.cameraInput === undefined) {\n        console.error('Failed to create the camera input.');\n        return;\n      }\n      // 打开相机。\n      await this.cameraInput.open();\n\n      let previewProfile: camera.Profile = {\n        format: camera.CameraFormat.CAMERA_FORMAT_YUV_420_SP,\n        size: {\n          width: this.imageWidth,\n          height: this.imageHeight\n        }\n      };\n      // 创建预览流输出。\n      this.previewOutput = this.cameraManager.createPreviewOutput(previewProfile, surfaceId);\n      if (this.previewOutput === undefined) {\n        console.error('Failed to create the preview stream.');\n        this.releaseCamera();\n        return;\n      }\n\n      let photoProfile: camera.Profile = {\n        format: camera.CameraFormat.CAMERA_FORMAT_JPEG,\n        size: {\n          width: this.imageWidth,\n          height: this.imageHeight\n        }\n      };\n      // 创建拍照流输出。\n      this.photoOutput = this.cameraManager.createPhotoOutput(photoProfile);\n      if (this.photoOutput === undefined) {\n        console.error('Failed to create the photoOutput.');\n        this.releaseCamera();\n        return;\n      }\n\n      // 创建相机会话，启动会话。\n      let session = this.cameraManager.createSession(camera.SceneMode.NORMAL_PHOTO);\n      if (!session) {\n        console.error('session is null');\n        this.releaseCamera();\n        return;\n      }\n      this.session = session as camera.PhotoSession;\n      this.session.beginConfig();\n      this.session.addInput(this.cameraInput);\n      this.session.addOutput(this.previewOutput);\n      this.session.addOutput(this.photoOutput);\n      await this.session.commitConfig();\n      await this.session.start();\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(`initCamera fail: ${err}`);\n      this.releaseCamera();\n    }\n  }\n\n  // 释放相机资源。\n  async releaseCamera(): Promise<void> {\n    console.info('releaseCamera is called');\n    // 停止当前会话。\n    await this.session?.stop().catch((e: BusinessError) => {console.error('Failed to stop session: ', e)});\n    // 释放相机输入流。\n    await this.cameraInput?.close().catch((e: BusinessError) => {console.error('Failed to close the camera: ', e)});\n    // 释放预览输出流。\n    await this.previewOutput?.release().catch((e: BusinessError) => {console.error('Failed to stop the preview stream: ', e)});\n    // 释放拍照输出流。\n    await this.photoOutput?.release().catch((e: BusinessError) => {console.error('Stop Photo Stream Failure: ', e)});\n    // 释放会话。\n    await this.session?.release().catch((e: BusinessError) => {console.error('Failed to release session: ', e)});\n    console.info('releaseCamera success');\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建worker线程文件，配置worker。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DevEco Studio支持一键生成Worker，在对应的{moduleName}目录下任意位置，点击鼠标右键 > New > Worker，即可自动生成Worker的模板文件及配置信息，无需再手动在build-profile.json5中进行相关配置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CameraWorker.ets实现参考："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let cameraService = new CameraService();\nconst workerPort: ThreadWorkerGlobalScope = worker.workerPort;\n\n// 自定义消息格式。\ninterface MessageInfo {\n  hasResolve: boolean;\n  type: string;\n  context: Context; // 注意worker线程中无法使用getContext()直接获取宿主线程context，需要通过消息从宿主线程通信到worker线程使用。\n  surfaceId: string;\n}\n\nworkerPort.onmessage = async (e: MessageEvents) => {\n  const messageInfo: MessageInfo = e.data;\n  console.info(`worker onmessage type:${messageInfo.type}`)\n  if ('initCamera' === messageInfo.type) {\n    // 在worker线程中收到宿主线程初始化相机的消息。\n    console.info(`worker initCamera surfaceId:${messageInfo.surfaceId}`)\n    // 在worker线程中初始化相机。\n    await cameraService.initCamera(messageInfo.context, messageInfo.surfaceId);\n  } else if ('releaseCamera' === messageInfo.type) {\n    // 在worker线程中收到宿主线程释放相机的消息。\n    console.info('worker releaseCamera.');\n    // 在worker线程中释放相机。\n    await cameraService.releaseCamera();\n  }\n}\n\nworkerPort.onmessageerror = (e: MessageEvents) => {\n}\n\nworkerPort.onerror = (e: ErrorEvent) => {\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建组件，用于显示预览流，在页面相关生命周期中构造ThreadWorker实例，在worker线程中完成相机初始化和释放。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n  private mXComponentController: XComponentController = new XComponentController();\n  private surfaceId: string = '';\n  @State imageWidth: number = 1920;\n  @State imageHeight: number = 1080;\n  // 创建ThreadWorker对象获取worker实例。\n  private workerInstance: worker.ThreadWorker = new worker.ThreadWorker('entry/ets/workers/CameraWorker.ets');\n  private uiContext: UIContext = this.getUIContext();\n  private context: Context | undefined = this.uiContext.getHostContext();\n private mXComponentOptions: XComponentOptions = {\n   type: XComponentType.SURFACE,\n   controller: this.mXComponentController\n }\n\n  onPageShow(): void {\n    if ('' !== this.surfaceId) {\n      // 通过worker实例向worker线程发送消息初始化相机。\n      this.workerInstance.postMessage({\n        type: 'initCamera',\n        context: this.context,\n        surfaceId: this.surfaceId,\n      })\n    }\n  }\n\n  onPageHide(): void {\n    // 通过worker实例向worker线程发送消息销毁相机。\n    this.workerInstance.postMessage({\n      type: 'releaseCamera',\n    })\n  }\n\n  build() {\n    Column() {\n      Column() {\n        XComponent(this.mXComponentOptions)\n          .onLoad(async () => {\n            console.info('onLoad is called');\n            // 初始化XComponent获取预览流surfaceId。\n            this.surfaceId = this.mXComponentController.getXComponentSurfaceId();\n            let surfaceRect: SurfaceRect = {\n              surfaceWidth: this.imageHeight,\n              surfaceHeight: this.imageWidth\n            };\n            this.mXComponentController.setXComponentSurfaceRect(surfaceRect);\n            console.info(`onLoad surfaceId: ${this.surfaceId}`);\n            if (!this.workerInstance) {\n              console.error('create stage worker failed');\n              return;\n            }\n            // 宿主线程向worker线程发送初始化相机消息。\n            this.workerInstance.postMessage({\n              type: 'initCamera',\n              context: this.context, // 将宿主线程的context传给worker线程使用。\n              surfaceId: this.surfaceId, // 将surfaceId传给worker线程使用。\n            })\n          })// The width and height of the surface are opposite to those of the XComponent.\n          .width(this.uiContext.px2vp(this.imageHeight))\n          .height(this.uiContext.px2vp(this.imageWidth))\n\n      }.justifyContent(FlexAlign.Center)\n      .height('90%')\n\n      Text('WorkerDemo')\n        .fontSize(36)\n    }\n    .justifyContent(FlexAlign.End)\n    .height('100%')\n    .width('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "trace对比",
      children: "trace对比"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不使用Worker："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(230164)/* ["default"] */.A) + "",
        width: "1552",
        height: "969"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Worker："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(134646)/* ["default"] */.A) + "",
        width: "1744",
        height: "1065"
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
134646(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438615-d05edcbc4ab6951ddc06a9016c68c9c6.png");

},
230164(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798920-d6b0dc5d85f00b57d5574989a70bfcdb.png");

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