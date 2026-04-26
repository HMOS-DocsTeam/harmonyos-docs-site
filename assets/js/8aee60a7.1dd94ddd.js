"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["577871"], {
312689(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_arkts_camera_shooting_case_camera_shooting_case_md_8ae_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-arkts-camera-shooting-case-camera-shooting-case-md-8ae.json
var site_docs_camera_kit_camera_dev_arkts_camera_shooting_case_camera_shooting_case_md_8ae_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-arkts/camera-shooting-case/camera-shooting-case","title":"拍照实践(ArkTS)","description":"在开发相机应用时，需要先申请相关权限。","source":"@site/docs/camera-kit/camera-dev-arkts/camera-shooting-case/camera-shooting-case.md","sourceDirName":"camera-kit/camera-dev-arkts/camera-shooting-case","slug":"/camera-kit/camera-dev-arkts/camera-shooting-case/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-shooting-case/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"拍照实践(ArkTS)","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-shooting-case","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"拍照(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-shooting/"},"next":{"title":"录像(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-recording/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-arkts/camera-shooting-case/camera-shooting-case.md


const frontMatter = {
	title: '拍照实践(ArkTS)',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-shooting-case',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '拍照实践(ArkTS)';

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
        id: "拍照实践arkts",
        children: "拍照实践(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在开发相机应用时，需要先", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-preparation",
        children: "申请相关权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前示例提供完整的拍照流程介绍，方便开发者了解完整的接口调用顺序。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在参考以下示例前，建议开发者查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-arkts-mandatory/camera-device-management",
        children: "相机开发指导(ArkTS)"
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
        src: (__webpack_require__(546499)/* ["default"] */.A) + "",
        width: "1074",
        height: "1845"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Context获取方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#%E8%8E%B7%E5%8F%96uiability%E7%9A%84%E4%B8%8A%E4%B8%8B%E6%96%87%E4%BF%A1%E6%81%AF",
        children: "获取UIAbility的上下文信息"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如需要在图库中看到所保存的图片、视频资源，需要将其保存到媒体库，保存方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/medialibrary-kit/photoaccesshelper-savebutton",
        children: "保存媒体库资源"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-photooutput/arkts-apis-camera-photooutput#onphotoavailable11",
        children: "photoOutput.on('photoAvailable')"
      }), "接口获取到buffer时，将buffer在安全控件中保存到媒体库。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { camera } from '@kit.CameraKit';\nimport { image } from '@kit.ImageKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\ninterface ShootingResources {\n  cameraInput?: camera.CameraInput;\n  previewOutput?: camera.PreviewOutput;\n  photoOutput?: camera.PhotoOutput;\n  photoSession?: camera.PhotoSession;\n}\n\nconst resources: ShootingResources = {};\n\nfunction setPhotoOutputCb(photoOutput: camera.PhotoOutput): void {\n  if (!photoOutput) {\n    console.error('photoOutput is null');\n    return;\n  }\n  // 设置回调之后，调用photoOutput的capture方法，就会将拍照的buffer回传到回调中。\n  photoOutput?.on('photoAvailable', (err: BusinessError, photo: camera.Photo): void => {\n    console.info('getPhoto start');\n    console.error(`err: ${err}`);\n    if (err && err.code != 0) {\n      console.error('getPhoto failed');\n      return;\n    }\n    if (!photo || !photo.main) {\n      console.error('photo is null');\n      return;\n    }\n    let imageObj = photo.main;\n    imageObj.getComponent(image.ComponentType.JPEG, (errCode: BusinessError, component: image.Component): void => {\n      console.info('getComponent start');\n      if (errCode && errCode.code != 0 ) {\n        console.error('getComponent failed');\n        imageObj.release();\n        return;\n      }\n      let buffer: ArrayBuffer;\n      if (component && component.byteBuffer) {\n        buffer = component.byteBuffer;\n      } else {\n        console.error('byteBuffer is null');\n        imageObj.release();\n        return;\n      }\n      // 如需要在图库中看到所保存的图片、视频资源，请使用用户无感的安全控件创建媒体资源。\n\n      // buffer处理结束后需要释放该资源，如果未正确释放资源会导致后续拍照获取不到buffer。\n      imageObj.release();\n    });\n  });\n}\n\nasync function cameraShootingCase(context: Context, surfaceId: string): Promise<void> {\n  try {\n    // 创建CameraManager对象。\n    let cameraManager: camera.CameraManager = camera.getCameraManager(context);\n    if (!cameraManager) {\n      console.error(\"camera.getCameraManager error\");\n      return;\n    }\n    // 监听相机状态变化。\n    cameraManager.on('cameraStatus', (err: BusinessError, cameraStatusInfo: camera.CameraStatusInfo) => {\n      if (err !== undefined && err.code !== 0) {\n        console.error('cameraStatus with errorCode = ' + err.code);\n        return;\n      }\n      console.info(`camera : ${cameraStatusInfo.camera.cameraId}`);\n      console.info(`status: ${cameraStatusInfo.status}`);\n    });\n\n    // 获取相机列表。\n    let cameraArray: Array<camera.CameraDevice> = cameraManager.getSupportedCameras();\n    if (!cameraArray || cameraArray.length <= 0) {\n      console.error(\"cameraManager.getSupportedCameras error\");\n      return;\n    }\n\n    for (let index = 0; index < cameraArray.length; index++) {\n      console.info('cameraId : ' + cameraArray[index].cameraId);                          // 获取相机ID。\n      console.info('cameraPosition : ' + cameraArray[index].cameraPosition);              // 获取相机位置。\n      console.info('cameraType : ' + cameraArray[index].cameraType);                      // 获取相机类型。\n      console.info('connectionType : ' + cameraArray[index].connectionType);              // 获取相机连接类型。\n    }\n\n    // 创建相机输入流。\n    resources.cameraInput = cameraManager.createCameraInput(cameraArray[0]);\n    if (!resources.cameraInput) {\n      console.error('cameraInput is null');\n      return;\n    }\n\n    // 监听cameraInput错误信息。\n    let cameraDevice: camera.CameraDevice = cameraArray[0];\n    resources.cameraInput.on('error', cameraDevice, (error: BusinessError) => {\n      console.error(`Camera input error code: ${error.code}`);\n    })\n\n    // 打开相机。\n    await resources.cameraInput.open();\n\n    // 获取支持的模式类型。\n    let sceneModes: Array<camera.SceneMode> = cameraManager.getSupportedSceneModes(cameraArray[0]);\n    let isSupportPhotoMode: boolean = sceneModes.indexOf(camera.SceneMode.NORMAL_PHOTO) >= 0;\n    if (!isSupportPhotoMode) {\n      console.error('photo mode not support');\n      releaseResources();\n      return;\n    }\n    // 获取相机设备支持的输出流能力。\n    let cameraOutputCap: camera.CameraOutputCapability = cameraManager.getSupportedOutputCapability(cameraArray[0], camera.SceneMode.NORMAL_PHOTO);\n    if (!cameraOutputCap) {\n      console.error(\"cameraManager.getSupportedOutputCapability error\");\n      return;\n    }\n    console.info(\"outputCapability: \" + JSON.stringify(cameraOutputCap));\n\n    let previewProfilesArray: Array<camera.Profile> = cameraOutputCap.previewProfiles;\n    if (!previewProfilesArray || previewProfilesArray.length <= 0) {\n      console.error(\"previewProfilesArray is null or []\");\n      releaseResources();\n      return;\n    }\n\n    let photoProfilesArray: Array<camera.Profile> = cameraOutputCap.photoProfiles;\n    if (!photoProfilesArray || photoProfilesArray.length <= 0) {\n      console.error(\"photoProfilesArray is null or []\");\n      releaseResources();\n      return;\n    }\n\n    // 创建预览输出流,其中参数 surfaceId 参考上文 XComponent 组件，预览流为XComponent组件提供的surface。\n    resources.previewOutput = cameraManager.createPreviewOutput(previewProfilesArray[0], surfaceId);\n    if (!resources.previewOutput) {\n      console.error('previewOutput is null');\n      releaseResources();\n      return;\n    }\n    try {\n      // 监听预览输出错误信息。\n      resources.previewOutput.on('error', (error: BusinessError) => {\n        console.error(`Preview output error code: ${error.code}`);\n      });\n    } catch (e) {\n      console.error(`previewOutput.on call failed, error: ${JSON.stringify(e)}`);\n    }\n\n    // 创建拍照输出流。\n    resources.photoOutput = cameraManager.createPhotoOutput(photoProfilesArray[0]);\n    if (!resources.photoOutput) {\n      console.error('photoOutput is null');\n      releaseResources();\n      return;\n    }\n\n    // 调用上面的回调函数来保存图片。\n    setPhotoOutputCb(resources.photoOutput);\n\n    // 创建会话。\n    let photoSession = cameraManager.createSession(camera.SceneMode.NORMAL_PHOTO);\n    if (!photoSession) {\n      console.error('photoSession is null');\n      releaseResources();\n      return;\n    }\n    resources.photoSession =  photoSession as camera.PhotoSession;\n    try {\n      // 监听session错误信息。\n      resources.photoSession.on('error', (error: BusinessError) => {\n        console.error(`Capture session error code: ${error.code}`);\n      });\n    } catch (e) {\n      console.error(`photoSession.on call failed, error: ${JSON.stringify(e)}`);\n    }\n\n    // 开始配置会话。\n    resources.photoSession.beginConfig();\n\n    // 向会话中添加相机输入流。\n    resources.photoSession.addInput(resources.cameraInput);\n\n    // 向会话中添加预览输出流。\n    resources.photoSession.addOutput(resources.previewOutput);\n\n    // 向会话中添加拍照输出流。\n    resources.photoSession.addOutput(resources.photoOutput);\n\n    // 提交会话配置。\n    await resources.photoSession.commitConfig();\n\n    // 启动会话。\n    await resources.photoSession.start()\n    // 判断设备是否支持闪光灯。\n    let flashStatus: boolean = false;\n    flashStatus = resources.photoSession.hasFlash();\n    console.info('Returned with the flash light support status:' + flashStatus);\n\n    if (flashStatus) {\n      // 判断是否支持自动闪光灯模式。\n      let flashModeStatus: boolean = resources.photoSession.isFlashModeSupported(camera.FlashMode.FLASH_MODE_AUTO);\n      if(flashModeStatus) {\n        // 设置自动闪光灯模式。\n        resources.photoSession.setFlashMode(camera.FlashMode.FLASH_MODE_AUTO);\n      }\n    }\n\n    // 判断是否支持连续自动变焦模式。\n    let focusModeStatus: boolean = resources.photoSession.isFocusModeSupported(camera.FocusMode.FOCUS_MODE_CONTINUOUS_AUTO);\n\n    if (focusModeStatus) {\n      // 设置连续自动变焦模式。\n      resources.photoSession.setFocusMode(camera.FocusMode.FOCUS_MODE_CONTINUOUS_AUTO);\n    }\n\n    // 获取相机支持的可变焦距比范围。\n    let zoomRatioRange: Array<number> = [];\n    try {\n      zoomRatioRange = resources.photoSession.getZoomRatioRange();\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error('Failed to get the zoom ratio range. errorCode = ' + err.code);\n    }\n    if (zoomRatioRange.length > 0) {\n      // 设置可变焦距比。\n      try {\n        resources.photoSession.setZoomRatio(zoomRatioRange[0]);\n      } catch (error) {\n        let err = error as BusinessError;\n        console.error('Failed to set the zoom ratio value. errorCode = ' + err.code);\n      }\n    }\n\n    let photoCaptureSetting: camera.PhotoCaptureSetting = {\n      quality: camera.QualityLevel.QUALITY_LEVEL_HIGH, // 设置图片质量高。\n      rotation: camera.ImageRotation.ROTATION_0 // 设置图片旋转角度0。\n    }\n    // 使用当前拍照设置进行拍照。\n    try {\n      await resources.photoOutput.capture(photoCaptureSetting);\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(`capture call failed, err: ${JSON.stringify(err)}`);\n    }\n\n    // 需要在拍照结束之后调用以下关闭相机和释放会话流程，避免拍照未结束就将会话释放。\n\n\n    // 会话置空。\n    resources.photoSession = undefined;\n  } catch (error) {\n    console.error(`cameraShootingCase call failed, error: ${JSON.stringify(error)}`);\n    releaseResources();\n  }\n}\n\nasync function releaseResources(): Promise<void> {\n  // 停止当前会话。\n  await resources.photoSession?.stop().catch((e: BusinessError) => {console.error('停止会话失败:', e)});\n\n  // 释放相机输入流。\n  await resources.cameraInput?.close().catch((e: BusinessError) => {console.error('关闭相机失败:', e)});\n\n  // 释放预览输出流。\n  await resources.previewOutput?.release().catch((e: BusinessError) => {console.error('停止预览流失败:', e)});\n\n  // 释放拍照输出流。\n  await resources.photoOutput?.release().catch((e: BusinessError) => {console.error('停止拍照流失败:', e)});\n\n  // 释放会话。\n  await resources.photoSession?.release().catch((e: BusinessError) => {console.error('释放会话失败:', e)});\n}\n"
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
546499(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958566-75d27225bc9c382543122065445168e8.png");

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