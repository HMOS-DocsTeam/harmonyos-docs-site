"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["486912"], {
633769(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_arkts_camera_moving_photo_camera_moving_photo_md_704_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-arkts-camera-moving-photo-camera-moving-photo-md-704.json
var site_docs_camera_kit_camera_dev_arkts_camera_moving_photo_camera_moving_photo_md_704_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-arkts/camera-moving-photo/camera-moving-photo","title":"动态照片拍摄(ArkTS)","description":"相机框架提供动态照片拍摄能力，业务应用可以类似拍摄普通照片一样，一键式拍摄得到动态照片。","source":"@site/docs/camera-kit/camera-dev-arkts/camera-moving-photo/camera-moving-photo.md","sourceDirName":"camera-kit/camera-dev-arkts/camera-moving-photo","slug":"/camera-kit/camera-dev-arkts/camera-moving-photo/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-moving-photo/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"动态照片拍摄(ArkTS)","sidebar_position":13,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-moving-photo","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"分段式拍照实践(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-deferred-capture-case/"},"next":{"title":"相机基础动效(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-animation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-arkts/camera-moving-photo/camera-moving-photo.md


const frontMatter = {
	title: '动态照片拍摄(ArkTS)',
	sidebar_position: 13,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-moving-photo',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '动态照片拍摄(ArkTS)';

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
  "value": "HDR动态照片",
  "id": "hdr动态照片",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "动态照片拍摄arkts",
        children: "动态照片拍摄(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机框架提供动态照片拍摄能力，业务应用可以类似拍摄普通照片一样，一键式拍摄得到动态照片。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用开发动态照片主要分为以下步骤："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用开发动态照片前，请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-preparation",
          children: "申请相机开发的权限"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-dev-arkts-mandatory/camera-device-management",
          children: "相机管理"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-dev-arkts-mandatory/camera-device-input",
          children: "设备输入"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-dev-arkts-mandatory/camera-session-management",
          children: "会话管理"
        }), "等流程完成相机应用开发必选能力配置。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查询当前设备的当前模式是否支持拍摄动态照片。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果支持动态照片，可以调用相机框架提供的使能接口", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "使能"
          })
        }), "动态照片能力。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["监听照片回调，将照片存入媒体库。可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/medialibrary-kit/movingphoto/photoaccesshelper-movingphoto",
          children: "MediaLibrary Kit-访问和管理动态照片资源"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera/arkts-apis-camera",
        children: "@ohos.multimedia.camera (相机管理)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(968964)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["拍摄动态照片需要麦克风权限ohos.permission.MICROPHONE，权限申请和校验的方式请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-preparation",
          children: "开发准备"
        }), "。否则拍摄的照片没有声音。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入依赖，需要导入相机框架、媒体库、图片相关领域依赖。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { camera } from '@kit.CameraKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
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
            children: "function getPhotoOutput(cameraManager: camera.CameraManager,\n  cameraOutputCapability: camera.CameraOutputCapability): camera.PhotoOutput | undefined {\n  if (!cameraOutputCapability || !cameraOutputCapability.photoProfiles) {\n    return;\n  }\n  let photoProfilesArray: Array<camera.Profile> = cameraOutputCapability.photoProfiles;\n  if (!photoProfilesArray || photoProfilesArray.length === 0) {\n    console.error(\"photoProfilesArray is null or []\");\n    return;\n  }\n  let photoOutput: camera.PhotoOutput | undefined = undefined;\n  try {\n    photoOutput = cameraManager.createPhotoOutput(photoProfilesArray[0]);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to createPhotoOutput. error: ${err}`);\n  }\n  return photoOutput;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询当前设备当前模式是否支持动态照片能力。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(92900)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["查询是否支持动态照片前需要先完成相机会话配置、提交和启动会话，详细开发步骤请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-arkts-mandatory/camera-session-management",
            children: "会话管理"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function isMovingPhotoSupported(photoOutput: camera.PhotoOutput): boolean {\n  let isSupported: boolean = false;\n  try {\n    isSupported = photoOutput.isMovingPhotoSupported();\n  } catch (error) {\n    // 失败返回错误码error.code并处理。\n    let err = error as BusinessError;\n    console.error(`The isMovingPhotoSupported call failed. error code: ${err.code}`);\n  }\n  return isSupported;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使能动态照片拍照能力。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(173482)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使能动态照片前需要使能", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-arkts/camera-deferred-capture",
            children: "分段式拍照"
          }), "能力。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function enableMovingPhoto(photoOutput: camera.PhotoOutput): void {\n  try {\n    photoOutput.enableMovingPhoto(true);\n  } catch (error) {\n    // 失败返回错误码error.code并处理。\n    let err = error as BusinessError;\n   console.error(`The enableMovingPhoto call failed. error code: ${err.code}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["触发拍照，与普通拍照方式相同，请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-arkts/camera-shooting",
            children: "拍照"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "状态监听",
      children: "状态监听"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在相机应用开发过程中，可以随时监听动态照片拍照输出流状态。通过注册photoAsset的回调函数获取监听结果，photoOutput创建成功时即可监听。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function getPhotoAccessHelper(context: Context): photoAccessHelper.PhotoAccessHelper {\n  let phAccessHelper = photoAccessHelper.getPhotoAccessHelper(context);\n  return phAccessHelper;\n}\n\nasync function mediaLibSavePhoto(photoAsset: photoAccessHelper.PhotoAsset,\n  phAccessHelper: photoAccessHelper.PhotoAccessHelper): Promise<void> {\n  try {\n    let assetChangeRequest: photoAccessHelper.MediaAssetChangeRequest = new photoAccessHelper.MediaAssetChangeRequest(photoAsset);\n    assetChangeRequest.saveCameraPhoto();\n    await phAccessHelper.applyChanges(assetChangeRequest);\n    console.info('apply saveCameraPhoto successfully');\n  } catch (err) {\n    console.error(`apply saveCameraPhoto failed with error: ${err.code}, ${err.message}`);\n  }\n}\n\nfunction onPhotoOutputPhotoAssetAvailable(photoOutput: camera.PhotoOutput, context: Context): void {\n  photoOutput.on('photoAssetAvailable', (err: BusinessError, photoAsset: photoAccessHelper.PhotoAsset): void => {\n    if (err) {\n      console.error(`photoAssetAvailable error: ${err}.`);\n      return;\n    }\n    console.info('photoOutPutCallBack photoAssetAvailable');\n    // 调用媒体库落盘接口保存一阶段图和动态照片视频。\n    mediaLibSavePhoto(photoAsset, getPhotoAccessHelper(context));\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hdr动态照片",
      children: "HDR动态照片"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，相机提供HDR动态照片拍摄能力，即组成动态照片的静态图片与动态短视频均为高动态范围（HDR）内容，能够在高光与暗部细节、色彩层次和整体质感方面优于SDR成片效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可以通过配置预览输出格式（Profile.format）和色彩空间（ColorSpace）灵活决定输出SDR/HDR动态照片。具体对应关系如下表所示，所有能力需先查后用，支持的预览输出格式通过接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#getsupportedfulloutputcapability23",
        children: "getSupportedFullOutputCapability"
      }), "查询，支持的色彩空间通过接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-colormanagementquery/arkts-apis-camera-colormanagementquery#getsupportedcolorspaces12",
        children: "getSupportedColorSpaces"
      }), "查询。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "静图动态范围"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "短视频动态范围"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "预览输出格式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "色彩空间"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SDR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SDR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_FORMAT_YUV_420_SP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SRGB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HDR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SDR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_FORMAT_YUV_420_SP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DISPLAY_P3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HDR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HDR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAMERA_FORMAT_YCRCB_P010、  CAMERA_FORMAT_YCBCR_P010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BT2020_HLG"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "HDR配置说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在配置预览输出流时，需要先通过接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#getsupportedfulloutputcapability23",
          children: "getSupportedFullOutputCapability"
        }), "查询当前镜头和模式支持的完整能力，选择的预览输出格式为P010（CAMERA_FORMAT_YCRCB_P010/CAMERA_FORMAT_YCBCR_P010）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在配置色彩空间时，需要先通过接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-colormanagementquery/arkts-apis-camera-colormanagementquery#getsupportedcolorspaces12",
          children: "getSupportedColorSpaces"
        }), "获取当前设备所支持的色彩空间，再通过接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-colormanagement/arkts-apis-camera-colormanagement#setcolorspace12",
          children: "setColorSpace"
        }), "设置色彩空间为BT2020_HLG。具体请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-colormanagement/arkts-apis-camera-colormanagement#setcolorspace12",
          children: "setColorSpace"
        }), "说明。"]
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
173482(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
92900(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
968964(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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