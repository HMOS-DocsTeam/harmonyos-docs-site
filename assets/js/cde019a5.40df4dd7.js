"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["417174"], {
530651(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_arkts_camera_deferred_capture_camera_deferred_capture_md_cde_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-arkts-camera-deferred-capture-camera-deferred-capture-md-cde.json
var site_docs_camera_kit_camera_dev_arkts_camera_deferred_capture_camera_deferred_capture_md_cde_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-arkts/camera-deferred-capture/camera-deferred-capture","title":"分段式拍照(ArkTS)","description":"分段式拍照是相机的重要功能之一，即应用下发拍照任务后，系统将分多阶段上报不同质量的图片。","source":"@site/docs/camera-kit/camera-dev-arkts/camera-deferred-capture/camera-deferred-capture.md","sourceDirName":"camera-kit/camera-dev-arkts/camera-deferred-capture","slug":"/camera-kit/camera-dev-arkts/camera-deferred-capture/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-deferred-capture/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"分段式拍照(ArkTS)","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-deferred-capture","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"适配不同折叠状态的摄像头变更(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-foldable-display/"},"next":{"title":"分段式拍照实践(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-deferred-capture-case/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-arkts/camera-deferred-capture/camera-deferred-capture.md


const frontMatter = {
	title: '分段式拍照(ArkTS)',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-deferred-capture',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '分段式拍照(ArkTS)';

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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "分段式拍照arkts",
        children: "分段式拍照(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分段式拍照是相机的重要功能之一，即应用下发拍照任务后，系统将分多阶段上报不同质量的图片。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在第一阶段，系统快速上报轻量处理的图片，轻量处理的图片比全质量图低，出图速度快。应用通过回调会收到一个", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoasset/arkts-apis-photoaccesshelper-photoasset",
          children: "PhotoAsset"
        }), "对象，通过该对象可调用媒体库接口，读取图片或落盘图片。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在第二阶段，相机框架会根据应用的请求图片诉求或在相机进入后台时，进行图像增强处理得到全质量图，并将处理好的图片传回给媒体库，替换轻量处理的图片。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过分段式拍照，优化了系统的拍照响应时延，从而提升用户体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用开发分段式拍照主要分为以下步骤："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过PhotoOutput，监听photoAssetAvailable回调，获取", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper/arkts-apis-photoaccesshelper",
          children: "photoAccessHelper"
        }), "的PhotoAsset对象。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过PhotoAsset对象，调用媒体库相关接口，读取或落盘图片。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(681122)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["分段式拍照能力由", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "设备"
          })
        }), "和", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "模式"
          })
        }), "决定，不同的设备支持的模式各异，对应分段式能力也有所差异，因此应用在切换设备或模式后分段式能力可能会发生变化。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用无需主动使能分段式拍照能力，相机框架会在配流期间判断设备和模式是否支持分段式，如果支持会使能该功能。"
      }), "\n"]
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
          children: "导入依赖，需要导入相机框架、媒体库、图片相关领域依赖。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { camera } from '@kit.CameraKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "确定拍照输出流。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-i/arkts-apis-camera-i#cameraoutputcapability",
            children: "CameraOutputCapability"
          }), "中的photoProfiles属性，可获取当前设备支持的拍照输出流，通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#createphotooutput11",
            children: "createPhotoOutput"
          }), "方法创建拍照输出流。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function getPhotoOutput(cameraManager: camera.CameraManager,\n  cameraOutputCapability: camera.CameraOutputCapability): camera.PhotoOutput | undefined {\n  let photoProfilesArray: Array<camera.Profile> = cameraOutputCapability.photoProfiles;\n  if (photoProfilesArray===null || photoProfilesArray===undefined) {\n    console.error(\"createOutput photoProfilesArray is null!\");\n    return undefined;\n  }\n  let photoOutput: camera.PhotoOutput | undefined = undefined;\n  try {\n   if (photoProfilesArray.length > 0) {\n       photoOutput = cameraManager.createPhotoOutput(photoProfilesArray[0]);\n   } else {\n       console.error(\"the length of photoProfilesArray<=0!\");\n       return undefined;\n   }\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to createPhotoOutput. error: ${err}`);\n  }\n  return photoOutput;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置拍照photoAssetAvailable的回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(534966)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果已经注册了photoAssetAvailable回调，并且在Session开始之后又注册了photoAvailable回调，photoAssetAvailable和photoAvailable同时注册，会导致流被重启，仅photoAssetAvailable生效。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["不建议开发者同时注册", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-photooutput/arkts-apis-camera-photooutput#onphotoavailable11",
            children: "photoAvailable"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-photooutput/arkts-apis-camera-photooutput#onphotoassetavailable12",
            children: "photoAssetAvailable"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function getPhotoAccessHelper(context: Context): photoAccessHelper.PhotoAccessHelper {\n  let phAccessHelper = photoAccessHelper.getPhotoAccessHelper(context);\n  return phAccessHelper;\n}\n\nfunction onPhotoOutputPhotoAssetAvailable(photoOutput: camera.PhotoOutput, context: Context): void {\n  photoOutput.on('photoAssetAvailable', (err: BusinessError, photoAsset: photoAccessHelper.PhotoAsset) => {\n    if (err) {\n      console.error(`photoAssetAvailable error: ${err}.`);\n      return;\n    }\n    console.info('photoOutPutCallBack photoAssetAvailable');\n    // 开发者可通过photoAsset调用媒体库相关接口，自定义处理图片。\n    // 处理方式一：调用媒体库落盘接口保存一阶段图，二阶段图就绪后媒体库会主动帮应用替换落盘图片。\n    mediaLibSavePhoto(photoAsset, getPhotoAccessHelper(context));\n    // 处理方式二：调用媒体库接口请求图片并注册一阶段图或二阶段图buffer回调，自定义使用。\n    mediaLibRequestBuffer(photoAsset, context);\n  });\n}\n\nasync function mediaLibSavePhoto(photoAsset: photoAccessHelper.PhotoAsset,\n  phAccessHelper: photoAccessHelper.PhotoAccessHelper): Promise<void> {\n  try {\n    let assetChangeRequest: photoAccessHelper.MediaAssetChangeRequest = new photoAccessHelper.MediaAssetChangeRequest(photoAsset);\n    assetChangeRequest.saveCameraPhoto();\n    await phAccessHelper.applyChanges(assetChangeRequest);\n    console.info('apply saveCameraPhoto successfully');\n  } catch (err) {\n    console.error(`apply saveCameraPhoto failed with error: ${err.code}, ${err.message}`);\n  }\n}\n\nclass MediaDataHandler implements photoAccessHelper.MediaAssetDataHandler<ArrayBuffer> {\n  onDataPrepared(data: ArrayBuffer) {\n    if (data === undefined) {\n      console.error('Error occurred when preparing data');\n      return;\n    }\n    // 应用获取到图片buffer后可自定义处理。\n    console.info('on image data prepared');\n  }\n}\n\nasync function mediaLibRequestBuffer(photoAsset: photoAccessHelper.PhotoAsset, context: Context) {\n  let requestOptions: photoAccessHelper.RequestOptions = {\n    // 按照业务需求配置回图模式。\n    // FAST_MODE：仅接收一阶段低质量图回调。\n    // HIGH_QUALITY_MODE：仅接收二阶段全质量图回调。\n    // BALANCE_MODE：接收一阶段及二阶段图片回调。\n    deliveryMode: photoAccessHelper.DeliveryMode.FAST_MODE,\n  }\n  const handler = new MediaDataHandler();\n  await photoAccessHelper.MediaAssetManager.requestImageData(context, photoAsset, requestOptions, handler);\n  console.info('requestImageData successfully');\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["落盘图片参考媒体库接口：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/kts-apis-photoaccesshelper-mediaassetchangerequest/kts-apis-photoaccesshelper-mediaassetchangerequest#savecameraphoto12",
            children: "saveCameraPhoto"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["请求图片参考媒体库接口：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-mediaassetmanager/arkts-apis-photoaccesshelper-mediaassetmanager#requestimagedata11",
            children: "requestImageData"
          }), " 和 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-mediaassetdatahandler/arkts-apis-photoaccesshelper-mediaassetdatahandler#ondataprepared11",
            children: "onDataPrepared"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["拍照时的会话配置及触发拍照的方式，与普通拍照相同，请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-arkts/camera-shooting",
            children: "拍照"
          }), "的步骤4-5。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "状态监听",
      children: "状态监听"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在相机应用开发过程中，可以随时监听拍照输出流状态，包括拍照流开始、拍照帧的开始与结束、拍照输出流的错误。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过注册固定的captureStartWithInfo回调函数获取监听拍照开始结果，photoOutput创建成功时即可监听，相机设备已经准备开始这次拍照时触发，该事件返回此次拍照的captureId。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function onPhotoOutputCaptureStart(photoOutput: camera.PhotoOutput): void {\n  photoOutput.on('captureStartWithInfo', (err: BusinessError, captureStartInfo: camera.CaptureStartInfo) => {\n    if (err !== undefined && err.code !== 0) {\n      return;\n    }\n    console.info(`photo capture started, captureId : ${captureStartInfo.captureId}`);\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过注册固定的captureEnd回调函数获取监听拍照结束结果，photoOutput创建成功时即可监听，该事件返回结果为拍照完全结束后的相关信息", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-i/arkts-apis-camera-i#captureendinfo",
            children: "CaptureEndInfo"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function onPhotoOutputCaptureEnd(photoOutput: camera.PhotoOutput): void {\n  photoOutput.on('captureEnd', (err: BusinessError, captureEndInfo: camera.CaptureEndInfo) => {\n    if (err !== undefined && err.code !== 0) {\n      return;\n    }\n    console.info(`photo capture end, captureId : ${captureEndInfo.captureId}`);\n    console.info(`frameCount : ${captureEndInfo.frameCount}`);\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过注册固定的captureReady回调函数获取监听可拍下一张结果，photoOutput创建成功时即可监听，当下一张可拍时触发，该事件返回结果为下一张可拍的相关信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function onPhotoOutputCaptureReady(photoOutput: camera.PhotoOutput): void {\n  photoOutput.on('captureReady', (err: BusinessError) => {\n    if (err !== undefined && err.code !== 0) {\n      return;\n    }\n    console.info(`photo capture ready`);\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过注册固定的error回调函数获取监听拍照输出流的错误结果。callback返回拍照输出接口使用错误时的对应错误码，错误码类型参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#cameraerrorcode",
            children: "CameraErrorCode"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function onPhotoOutputError(photoOutput: camera.PhotoOutput): void {\n  photoOutput.on('error', (error: BusinessError) => {\n    console.error(`Photo output error code: ${error.code}`);\n  });\n}\n"
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
534966(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
681122(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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