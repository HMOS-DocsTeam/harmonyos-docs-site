"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["179152"], {
197282(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_arkts_camera_shooting_camera_shooting_md_158_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-arkts-camera-shooting-camera-shooting-md-158.json
var site_docs_camera_kit_camera_dev_arkts_camera_shooting_camera_shooting_md_158_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-arkts/camera-shooting/camera-shooting","title":"拍照(ArkTS)","description":"概述","source":"@site/docs/camera-kit/camera-dev-arkts/camera-shooting/camera-shooting.md","sourceDirName":"camera-kit/camera-dev-arkts/camera-shooting","slug":"/camera-kit/camera-dev-arkts/camera-shooting/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-shooting/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"拍照(ArkTS)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-shooting","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"双路预览(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-dual-channel-preview/"},"next":{"title":"拍照实践(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-shooting-case/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-arkts/camera-shooting/camera-shooting.md


const frontMatter = {
	title: '拍照(ArkTS)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-shooting',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '拍照(ArkTS)';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "高性能拍照",
  "id": "高性能拍照",
  "level": 2
}, {
  "value": "画质优先策略",
  "id": "画质优先策略",
  "level": 3
}, {
  "value": "如何正确设置画质优先策略",
  "id": "如何正确设置画质优先策略",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤-1",
  "level": 3
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
    h3: "h3",
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
        id: "拍照arkts",
        children: "拍照(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "拍照是相机的重要功能之一，拍照模块基于相机复杂的逻辑，为了保证用户拍出的照片质量，在中间步骤可以设置分辨率、闪光灯、焦距、照片质量及旋转角度等信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["目前相机开发有两种相机拍照方案，分别是相机", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-arkts/camera-deferred-capture",
        children: "分段式拍照"
      }), "和相机单段式拍照（", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "本文将以单段式拍照为基础进行说明"
        })
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "分段式拍照是指相机拍照既可以输出低质量图用作缩略图，提升用户感知拍照速度，也可以使用高质量图保证最后的成图质量达到系统相机的水平。满足了图像处理算法的需求的同时，又不会阻塞前台的拍照速度，构筑相机性能竞争力，提升用户体验。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["单段式拍照是指在拍照过程中通过多帧融合以及多个底层算法处理之后返回一张高质量图片，所以Shot2See（用户点击拍照控件到在缩略图显示区域显示缩略图的过程）完成时延较长。此外，单段式拍照支持通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E9%AB%98%E6%80%A7%E8%83%BD%E6%8B%8D%E7%85%A7",
          children: "高性能拍照"
        }), "功能调整", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E7%94%BB%E8%B4%A8%E4%BC%98%E5%85%88%E7%AD%96%E7%95%A5",
          children: "画质优先策略"
        }), "，以加快出图速度或提升图片质量。"]
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
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["导入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-image/arkts-apis-image-image",
            children: "Image"
          }), "接口。获取拍照输出的数据需要用到系统提供的Image接口能力，导入Image接口的方法如下。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { image } from '@kit.ImageKit';\nimport { camera } from '@kit.CameraKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建拍照输出流。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-i/arkts-apis-camera-i#cameraoutputcapability",
            children: "CameraOutputCapability"
          }), "中的photoProfiles属性，可获取当前设备支持的拍照输出流。通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#createphotooutput11",
            children: "createPhotoOutput"
          }), "方法传入支持的某一个输出流", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-i/arkts-apis-camera-i#profile",
            children: "Profile"
          }), "创建拍照输出流。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function getPhotoOutput(cameraManager: camera.CameraManager, cameraOutputCapability: camera.CameraOutputCapability): camera.PhotoOutput | undefined {\n  let photoProfilesArray: Array<camera.Profile> = cameraOutputCapability.photoProfiles;\n  if (!photoProfilesArray || photoProfilesArray.length === 0) {\n    console.error(\"photoProfilesArray is null or []\");\n  }\n  let photoOutput: camera.PhotoOutput | undefined = undefined;\n  try {\n    photoOutput = cameraManager.createPhotoOutput(photoProfilesArray[0]);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to createPhotoOutput. error: ${err}`);\n  }\n  return photoOutput;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["设置拍照", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-photooutput/arkts-apis-camera-photooutput#onphotoavailable11",
            children: "on('photoAvailable')"
          }), "的回调，并将拍照的buffer保存为图片。"]
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
            children: "function setPhotoOutputCb(photoOutput: camera.PhotoOutput) {\n// 设置回调之后，调用photoOutput的capture方法，就会将拍照的buffer回传到回调中。\n  photoOutput.on('photoAvailable', (errCode: BusinessError, photo: camera.Photo): void => {\n     console.info('getPhoto start');\n     if (errCode || photo === undefined) {\n       console.error('getPhoto failed, err: ${errCode}');\n       return;\n     }\n     let imageObj: image.Image = photo.main;\n     imageObj.getComponent(image.ComponentType.JPEG, (errCode: BusinessError, component: image.Component): void => {\n       console.info('getComponent start');\n       if (errCode || component === undefined) {\n         console.error('getComponent failed');\n         return;\n       }\n       let buffer: ArrayBuffer;\n       if (component.byteBuffer) {\n         buffer = component.byteBuffer;\n       } else {\n         console.error('byteBuffer is null');\n         return;\n       }\n       // 如需要在图库中看到所保存的图片、视频资源，请使用用户无感的安全控件创建媒体资源。\n\n      // buffer处理结束后需要释放该资源，如果未正确释放资源会导致后续拍照获取不到buffer。\n      imageObj.release();\n    });\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "参数配置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置相机的参数可以调整拍照的一些功能，包括闪光灯、变焦、焦距等。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function configuringSession(photoSession: camera.PhotoSession): void {\n  // 判断设备是否支持闪光灯。\n  let flashStatus: boolean = false;\n  try {\n    flashStatus = photoSession.hasFlash();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to hasFlash. error: ${err}`);\n  }\n  console.info(`Returned with the flash light support status: ${flashStatus}`);\n  if (flashStatus) {\n    // 判断是否支持自动闪光灯模式。\n    let flashModeStatus: boolean = false;\n    try {\n      flashModeStatus = photoSession?.isFlashModeSupported(camera.FlashMode.FLASH_MODE_AUTO);\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(`Failed to check whether the flash mode is supported. error: ${err}`);\n    }\n    if (flashModeStatus) {\n      // 设置自动闪光灯模式。\n      try {\n        photoSession?.setFlashMode(camera.FlashMode.FLASH_MODE_AUTO);\n      } catch (error) {\n        let err = error as BusinessError;\n        console.error(`Failed to set the flash mode. error: ${err}`);\n      }\n    }\n  }\n  // 判断是否支持连续自动变焦模式。\n  let focusModeStatus: boolean = false;\n  try {\n    focusModeStatus = photoSession?.isFocusModeSupported(camera.FocusMode.FOCUS_MODE_CONTINUOUS_AUTO);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to check whether the focus mode is supported. error: ${err}`);\n  }\n  if (focusModeStatus) {\n    // 设置连续自动变焦模式。\n    try {\n      photoSession?.setFocusMode(camera.FocusMode.FOCUS_MODE_CONTINUOUS_AUTO);\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(`Failed to set the focus mode. error: ${err}`);\n    }\n  }\n  // 获取相机支持的可变焦距比范围。\n  let zoomRatioRange: Array<number> = [];\n  try {\n    zoomRatioRange = photoSession?.getZoomRatioRange();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to get the zoom ratio range. error: ${err}`);\n  }\n  if (zoomRatioRange.length <= 0 ) {\n    return;\n  }\n  // 设置可变焦距比。\n  try {\n    photoSession?.setZoomRatio(zoomRatioRange[0]);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to set the zoom ratio value. error: ${err}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "触发拍照。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过photoOutput的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-photooutput/arkts-apis-camera-photooutput#capture-2",
            children: "capture"
          }), "方法，执行拍照任务。该方法有两个参数，第一个参数为拍照设置参数的setting，setting中可以设置照片的质量和旋转角度，第二参数为回调函数。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取拍照旋转角度的方法为，通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-photooutput/arkts-apis-camera-photooutput",
            children: "PhotoOutput"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-photooutput/arkts-apis-camera-photooutput#getphotorotation12",
            children: "getPhotoRotation"
          }), "方法获取rotation实际的值。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(262691)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["图片地理位置信息", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/location-api/location-arkts/js-apis-geolocationmanager/js-apis-geolocationmanager#geolocationmanagergetcurrentlocation",
            children: "Location"
          }), "，使用方法可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-photooutput/arkts-apis-camera-photooutput#capture-3",
            children: "capture"
          }), "示例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function capture(captureLocation: camera.Location, photoOutput: camera.PhotoOutput): void {\n  let settings: camera.PhotoCaptureSetting = {\n    quality: camera.QualityLevel.QUALITY_LEVEL_HIGH,  // 设置图片质量高。\n    rotation: camera.ImageRotation.ROTATION_0,  // 设置图片旋转角度的camera.ImageRotation.ROTATION_0是通过说明中获取拍照角度的getPhotoRotation方法获取的值进行设置。\n    location: captureLocation,  // 设置图片地理位置。\n    mirror: false  // 设置镜像使能开关(默认关)。\n  };\n  try {\n    photoOutput.capture(settings, (err: BusinessError) => {\n      if (err) {\n        console.error(`Failed to capture the photo. error: ${err}`);\n        return;\n      }\n      console.info('Callback invoked to indicate the photo capture request success.');\n    });\n  } catch (error) {\n    console.error(`capture call failed. error: ${error}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "高性能拍照",
      children: "高性能拍照"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 21开始支持高性能拍照功能，即在进行单段式拍照时设置明确的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%94%BB%E8%B4%A8%E4%BC%98%E5%85%88%E7%AD%96%E7%95%A5",
        children: "画质优先策略"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单段式拍照的体验主要由出图速度和最终图片质量衡量。因此，为满足开发者在不同场景下的差异化需求，对这两项指标的侧重也不同。例如，街头抓拍要求快速捕捉瞬间，而风景或人像拍摄则更追求极致的画质。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(809926)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅单段式拍照支持设置画质优先策略。若在分段式拍照中设置画质优先策略，该设置将无效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "画质优先策略",
      children: "画质优先策略"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在使用单段式拍照时，支持设置速度优先和画质优先两种画质优先策略类型，并且分别对应着不同的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#photoqualityprioritization21",
        children: "PhotoQualityPrioritization"
      }), "枚举类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#photoqualityprioritization21",
          children: "SPEED"
        }), "对应着速度优先，表示降低画质来提升拍照的速度。如果开发者在进行单段式拍照时没有设置明确的画质优先策略，", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "单段式拍照就默认为速度优先状态"
          })
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#photoqualityprioritization21",
          children: "HIGH_QUALITY"
        }), "对应着画质优先，表示通过较长的耗时来得到画质更高的图片。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "如何正确设置画质优先策略",
      children: "如何正确设置画质优先策略"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了正确的在单段式拍照中设置画质优先策略，高性能拍照功能提供了如下两个接口："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-photooutput/arkts-apis-camera-photooutput#isphotoqualityprioritizationsupported21",
          children: "isPhotoQualityPrioritizationSupported"
        }), "：查询当前设备是否支持指定的画质优先策略。返回true表示支持，返回false表示不支持。在进行设置画质优先策略之前，必须先查询将要设置的画质优先策略在当前设备上是否可用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-photooutput/arkts-apis-camera-photooutput#setphotoqualityprioritization21",
          children: "setPhotoQualityPrioritization"
        }), "：画质优先策略设置接口，通过该接口设置对应的画质优先策略，实现高性能拍照。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-1",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["高性能拍照相关接口需要在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-arkts-mandatory/camera-session-management",
        children: "会话管理(ArkTS)"
      }), "流程的使能步骤中进行调用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体调用时机如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-arkts-mandatory/camera-session-management",
            children: "会话管理(ArkTS)"
          }), "流程的使能步骤中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#commitconfig11",
            children: "commitConfig"
          }), "结束之后进行调用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function startSession(videoSession: camera.VideoSession, cameraInput: camera.CameraInput, previewOutput: camera.PreviewOutput, photoOutput: camera.PhotoOutput): Promise<void> {\n  try {\n    videoSession.addInput(cameraInput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to addInput. error: ${err.code}`);\n  }\n  let canAddPreviewOutput : boolean = false;\n  try {\n    canAddPreviewOutput = videoSession.canAddOutput(previewOutput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to add previewOutput. error: ${err.code}`);\n  }\n  if (!canAddPreviewOutput) {\n    console.error(`Failed to add preview output.`);\n    return;\n  }\n  try {\n    videoSession.addOutput(previewOutput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to add previewOutput. error: ${err.code}`);\n  }\n  let canAddPhotoOutput : boolean = false\n  try {\n    canAddPhotoOutput = videoSession.canAddOutput(photoOutput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to add photoOutput error: ${err.code}`);\n  }\n  if (!canAddPhotoOutput) {\n    console.error(`Failed to add photo output.`);\n    return;\n  }\n  try {\n    videoSession.addOutput(photoOutput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to add photoOutput. error: ${err.code}`);\n  }\n  try {\n    await videoSession.commitConfig();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to commitConfig. error: ${err.code}`);\n    return;\n  }\n \n  try {\n    await videoSession.start();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to start. error: ${err.code}`);\n  }\n  modeSwitchToHigh(videoSession, photoOutput);\n}\n\nasync function modeSwitchToHigh(videoSession: camera.VideoSession, photoOutput: camera.PhotoOutput): Promise<void> {\n  try {\n    if (videoSession) {\n      let quality: camera.PhotoQualityPrioritization = camera.PhotoQualityPrioritization.HIGH_QUALITY;\n      let isSupported = false;\n      isSupported = photoOutput.isPhotoQualityPrioritizationSupported(quality);\n      if (isSupported) {\n        photoOutput.setPhotoQualityPrioritization(quality);\n      } else {\n        console.error(`session is not supported`);\n      }\n    } else {\n      console.error(`session is null`);\n    }\n  } catch {\n    console.error(`catch error`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-arkts-mandatory/camera-session-management",
            children: "会话管理(ArkTS)"
          }), "流程的使能步骤中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#commitconfig11",
            children: "commitConfig"
          }), "之前调用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function startSession(videoSession: camera.VideoSession, cameraInput: camera.CameraInput, previewOutput: camera.PreviewOutput, photoOutput: camera.PhotoOutput): Promise<void> {\n  try {\n    videoSession.addInput(cameraInput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to addInput. error: ${err.code}`);\n  }\n  let canAddPreviewOutput : boolean = false;\n  try {\n    canAddPreviewOutput = videoSession.canAddOutput(previewOutput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to add previewOutput. error: ${err.code}`);\n  }\n  if (!canAddPreviewOutput) {\n    console.error(`Failed to add preview output.`);\n    return;\n  }\n  try {\n    videoSession.addOutput(previewOutput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to add previewOutput. error: ${err.code}`);\n  }\n  let canAddPhotoOutput : boolean = false\n  try {\n    canAddPhotoOutput = videoSession.canAddOutput(photoOutput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to add photoOutput error: ${err.code}`);\n  }\n  if (!canAddPhotoOutput) {\n    console.error(`Failed to add photo output.`);\n    return;\n  }\n  try {\n    videoSession.addOutput(photoOutput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to add photoOutput. error: ${err.code}`);\n  }\n  modeSwitchToHigh(videoSession, photoOutput);\n  try {\n    await videoSession.commitConfig();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to commitConfig. error: ${err.code}`);\n    return;\n  }\n \n  try {\n    await videoSession.start();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to start. error: ${err.code}`);\n  }\n}\n\nasync function modeSwitchToHigh(videoSession: camera.VideoSession, photoOutput: camera.PhotoOutput): Promise<void> {\n  try {\n    if (videoSession) {\n      let quality: camera.PhotoQualityPrioritization = camera.PhotoQualityPrioritization.HIGH_QUALITY;\n      let isSupported = false;\n      isSupported = photoOutput.isPhotoQualityPrioritizationSupported(quality);\n      if (isSupported) {\n        photoOutput.setPhotoQualityPrioritization(quality);\n      } else {\n        console.error(`session is not supported`);\n      }\n    } else {\n      console.error(`session is null`);\n    }\n  } catch {\n    console.error(`catch error`);\n  }\n}\n"
          })
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
          children: "通过注册固定的captureStart回调函数获取监听拍照开始结果，photoOutput创建成功时即可监听，相机设备已经准备开始这次拍照时触发，该事件返回此次拍照的captureId。"
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
          children: ["通过注册固定的error回调函数获取监听拍照输出流的错误结果。回调返回拍照输出接口使用错误时的对应错误码，错误码类型参见", (0,jsx_runtime.jsx)(_components.a, {
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
262691(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
809926(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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