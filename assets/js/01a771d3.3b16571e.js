"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["394938"], {
635580(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_arkts_camera_hdr_shooting_camera_hdr_shooting_md_01a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-arkts-camera-hdr-shooting-camera-hdr-shooting-md-01a.json
var site_docs_camera_kit_camera_dev_arkts_camera_hdr_shooting_camera_hdr_shooting_md_01a_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-arkts/camera-hdr-shooting/camera-hdr-shooting","title":"HDR Vivid相机拍照(ArkTS)","description":"HarmonyOS支持调用接口拍摄HDR Vivid照片，可以拍出层次表现更细腻、光影细节更丰富的画面，提升画面质感，呈现更卓越的视觉效果。","source":"@site/docs/camera-kit/camera-dev-arkts/camera-hdr-shooting/camera-hdr-shooting.md","sourceDirName":"camera-kit/camera-dev-arkts/camera-hdr-shooting","slug":"/camera-kit/camera-dev-arkts/camera-hdr-shooting/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-hdr-shooting/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":28,"frontMatter":{"title":"HDR Vivid相机拍照(ArkTS)","sidebar_position":28,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-hdr-shooting","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用相机预配置(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-preconfig/"},"next":{"title":"HDR Vivid相机录像(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-hdr-recording/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-arkts/camera-hdr-shooting/camera-hdr-shooting.md


const frontMatter = {
	title: 'HDR Vivid相机拍照(ArkTS)',
	sidebar_position: 28,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-hdr-shooting',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = 'HDR Vivid相机拍照(ArkTS)';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
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
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "hdr-vivid相机拍照arkts",
        children: "HDR Vivid相机拍照(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS支持调用接口拍摄HDR Vivid照片，可以拍出层次表现更细腻、光影细节更丰富的画面，提升画面质感，呈现更卓越的视觉效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前示例提供完整的HDR Vivid拍照开发步骤，方便开发者实现HDR拍照的功能。更多HDR Vivid的开发指导，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/multimedia-hdr-vivid",
        children: "使用HDR Vivid特性开发媒体应用"
      }), "。"]
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
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { camera } from '@kit.CameraKit';\nimport { colorSpaceManager } from '@kit.ArkGraphics2D';\nimport { image } from '@kit.ImageKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询支持的色彩空间。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function getSupportedColorSpaces(session: camera.PhotoSession): Array<colorSpaceManager.ColorSpace> {\n  let colorSpaces: Array<colorSpaceManager.ColorSpace> = [];\n  try {\n    colorSpaces = session.getSupportedColorSpaces();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`The getSupportedColorSpaces call failed. error code: ${err.code}`);\n  }\n  return colorSpaces;\n }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置色彩空间。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果是SDR拍照色彩空间需要设置为SRGB，如果是HDR拍照色彩空间需要设置为DISPLAY_P3。具体参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-colormanagement/arkts-apis-camera-colormanagement#setcolorspace12",
            children: "setColorSpace"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function setColorSpaceBeforeCommitConfig(session: camera.PhotoSession, isHdr: boolean): void {\n  let colorSpace: colorSpaceManager.ColorSpace = isHdr? colorSpaceManager.ColorSpace.DISPLAY_P3 : colorSpaceManager.ColorSpace.SRGB;\n  let colorSpaces: Array<colorSpaceManager.ColorSpace> = getSupportedColorSpaces(session);\n  let isSupportedColorSpaces = colorSpaces.indexOf(colorSpace) >= 0;\n  if (isSupportedColorSpaces) {\n    console.info(`setColorSpace: ${colorSpace}`);\n    session.setColorSpace(colorSpace);\n    let activeColorSpace:colorSpaceManager.ColorSpace = session.getActiveColorSpace();\n    console.info(`activeColorSpace: ${activeColorSpace}`);\n  } else {\n    console.info(`colorSpace: ${colorSpace} is not support`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实现HDR拍照。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在提交会话配置前执行步骤3设置色彩空间，其余流程按照正常拍照流程开发。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function savePicture(buffer: ArrayBuffer, img: image.Image, context: Context): Promise<void> {\n  let accessHelper: photoAccessHelper.PhotoAccessHelper = photoAccessHelper.getPhotoAccessHelper(context);\n  let options: photoAccessHelper.CreateOptions = {\n    title: Date.now().toString()\n  };\n  let photoUri: string = await accessHelper.createAsset(photoAccessHelper.PhotoType.IMAGE, 'jpg', options);\n  // createAsset的调用需要ohos.permission.READ_IMAGEVIDEO和ohos.permission.WRITE_IMAGEVIDEO的权限\n  let file: fileIo.File = fileIo.openSync(photoUri, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);\n  await fileIo.write(file.fd, buffer);\n  fileIo.closeSync(file);\n  img.release();\n}\n\nfunction setPhotoOutputCb(photoOutput: camera.PhotoOutput, context: Context): void {\n  // 设置回调之后，调用photoOutput的capture方法，就会将拍照的buffer回传到回调中\n  photoOutput.on('photoAvailable', (errCode: BusinessError, photo: camera.Photo): void => {\n    console.info('getPhoto start');\n    console.info(`err: ${JSON.stringify(errCode)}`);\n    if (errCode || photo === undefined) {\n      console.error('getPhoto failed');\n      return;\n    }\n    let imageObj = photo.main;\n    imageObj.getComponent(image.ComponentType.JPEG, (errCode: BusinessError, component: image.Component): void => {\n      console.info('getComponent start');\n      if (errCode || component === undefined) {\n        console.error('getComponent failed');\n        return;\n      }\n      let buffer: ArrayBuffer;\n      if (component.byteBuffer) {\n        buffer = component.byteBuffer;\n      } else {\n        console.error('byteBuffer is null');\n        return;\n      }\n      savePicture(buffer, imageObj, context);\n    });\n  });\n}\n\nasync function cameraHdrShootingCase(context: Context, surfaceId: string): Promise<void> {\n  // 创建CameraManager对象\n  let cameraManager: camera.CameraManager = camera.getCameraManager(context);\n  if (!cameraManager) {\n    console.error(\"camera.getCameraManager error\");\n    return;\n  }\n  // 监听相机状态变化\n  cameraManager.on('cameraStatus', (err: BusinessError, cameraStatusInfo: camera.CameraStatusInfo) => {\n    if (err !== undefined && err.code !== 0) {\n      console.error('cameraStatus with errorCode = ' + err.code);\n      return;\n    }\n    console.info(`camera : ${cameraStatusInfo.camera.cameraId}`);\n    console.info(`status: ${cameraStatusInfo.status}`);\n  });\n\n  // 获取相机列表\n  let cameraArray: Array<camera.CameraDevice> = cameraManager.getSupportedCameras();\n  if (cameraArray.length <= 0) {\n    console.error(\"cameraManager.getSupportedCameras error\");\n    return;\n  }\n\n  for (let index = 0; index < cameraArray.length; index++) {\n    console.info('cameraId : ' + cameraArray[index].cameraId);                          // 获取相机ID\n    console.info('cameraPosition : ' + cameraArray[index].cameraPosition);              // 获取相机位置\n    console.info('cameraType : ' + cameraArray[index].cameraType);                      // 获取相机类型\n    console.info('connectionType : ' + cameraArray[index].connectionType);              // 获取相机连接类型\n  }\n\n  // 创建相机输入流\n  let cameraInput: camera.CameraInput | undefined = undefined;\n  try {\n    cameraInput = cameraManager.createCameraInput(cameraArray[0]);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to createCameraInput errorCode = ' + err.code);\n  }\n  if (cameraInput === undefined) {\n    return;\n  }\n\n  // 监听cameraInput错误信息\n  let cameraDevice: camera.CameraDevice = cameraArray[0];\n  cameraInput.on('error', cameraDevice, (error: BusinessError) => {\n    console.error(`Camera input error code: ${error.code}`);\n  })\n\n  // 打开相机\n  await cameraInput.open();\n\n  // 获取支持的模式类型\n  let sceneModes: Array<camera.SceneMode> = cameraManager.getSupportedSceneModes(cameraArray[0]);\n  let isSupportPhotoMode: boolean = sceneModes.indexOf(camera.SceneMode.NORMAL_PHOTO) >= 0;\n  if (!isSupportPhotoMode) {\n    console.error('photo mode not support');\n    return;\n  }\n  // 获取相机设备支持的输出流能力\n  let cameraOutputCap: camera.CameraOutputCapability = cameraManager.getSupportedOutputCapability(cameraArray[0], camera.SceneMode.NORMAL_PHOTO);\n  if (!cameraOutputCap) {\n    console.error(\"cameraManager.getSupportedOutputCapability error\");\n    return;\n  }\n  console.info(\"outputCapability: \" + JSON.stringify(cameraOutputCap));\n\n  let previewProfilesArray: Array<camera.Profile> = cameraOutputCap.previewProfiles;\n  if (!previewProfilesArray) {\n    console.error(\"createOutput previewProfilesArray == null || undefined\");\n  }\n\n  let photoProfilesArray: Array<camera.Profile> = cameraOutputCap.photoProfiles;\n  if (!photoProfilesArray) {\n    console.error(\"createOutput photoProfilesArray == null || undefined\");\n  }\n\n  // 创建预览输出流,其中参数 surfaceId 参考上文 XComponent 组件，预览流为XComponent组件提供的surface\n  let previewOutput: camera.PreviewOutput | undefined = undefined;\n  try {\n    previewOutput = cameraManager.createPreviewOutput(previewProfilesArray[0], surfaceId);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to create the PreviewOutput instance. error code: ${err.code}`);\n  }\n  if (previewOutput === undefined) {\n    return;\n  }\n  // 监听预览输出错误信息\n  previewOutput.on('error', (error: BusinessError) => {\n    console.error(`Preview output error code: ${error.code}`);\n  });\n\n  // 创建拍照输出流\n  let photoOutput: camera.PhotoOutput | undefined = undefined;\n  try {\n    photoOutput = cameraManager.createPhotoOutput(photoProfilesArray[0]);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to createPhotoOutput errorCode = ' + err.code);\n  }\n  if (photoOutput === undefined) {\n    return;\n  }\n\n  // 调用上面的回调函数来保存图片\n  setPhotoOutputCb(photoOutput, context);\n\n  // 创建会话\n  let photoSession: camera.PhotoSession | undefined = undefined;\n  try {\n    photoSession = cameraManager.createSession(camera.SceneMode.NORMAL_PHOTO) as camera.PhotoSession;\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to create the session instance. errorCode = ' + err.code);\n  }\n  if (photoSession === undefined) {\n    return;\n  }\n  // 监听session错误信息\n  photoSession.on('error', (error: BusinessError) => {\n    console.error(`Capture session error code: ${error.code}`);\n  });\n\n  // 开始配置会话\n  try {\n    photoSession.beginConfig();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to beginConfig. errorCode = ' + err.code);\n  }\n\n  // 向会话中添加相机输入流\n  try {\n    photoSession.addInput(cameraInput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to addInput. errorCode = ' + err.code);\n  }\n\n  // 向会话中添加预览输出流\n  try {\n    photoSession.addOutput(previewOutput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to addOutput(previewOutput). errorCode = ' + err.code);\n  }\n\n  // 向会话中添加拍照输出流\n  try {\n    photoSession.addOutput(photoOutput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to addOutput(photoOutput). errorCode = ' + err.code);\n  }\n\n  // 设置色彩空间\n  setColorSpaceBeforeCommitConfig(photoSession, true);\n\n  // 提交会话配置\n  await photoSession.commitConfig();\n\n  // 启动会话\n  await photoSession.start().then(() => {\n    console.info('Promise returned to indicate the session start success.');\n  });\n\n  let photoCaptureSetting: camera.PhotoCaptureSetting = {\n    quality: camera.QualityLevel.QUALITY_LEVEL_HIGH, // 设置图片质量高\n    rotation: camera.ImageRotation.ROTATION_0 // 设置图片旋转角度0\n  }\n  // 使用当前拍照设置进行拍照\n  photoOutput.capture(photoCaptureSetting, (err: BusinessError) => {\n    if (err) {\n      console.error(`Failed to capture the photo ${err.message}`);\n      return;\n    }\n    console.info('Callback invoked to indicate the photo capture request success.');\n  });\n\n  // 需要在拍照结束之后调用以下关闭摄像头和释放会话流程，避免拍照未结束就将会话释放。\n  // 停止当前会话\n  await photoSession.stop();\n\n  // 释放相机输入流\n  await cameraInput.close();\n\n  // 释放预览输出流\n  await previewOutput.release();\n\n  // 释放拍照输出流\n  await photoOutput.release();\n\n  // 释放会话\n  await photoSession.release();\n\n  // 会话置空\n  photoSession = undefined;\n}\n"
          })
        }), "\n"]
      }), "\n"]
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