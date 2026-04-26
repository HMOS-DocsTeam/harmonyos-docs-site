"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["948056"], {
567502(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_arkts_camera_dual_channel_preview_camera_dual_channel_preview_md_eaa_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-arkts-camera-dual-channel-preview-camera-dual-channel-preview-md-eaa.json
var site_docs_camera_kit_camera_dev_arkts_camera_dual_channel_preview_camera_dual_channel_preview_md_eaa_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-arkts/camera-dual-channel-preview/camera-dual-channel-preview","title":"双路预览(ArkTS)","description":"在开发相机应用时，需要先申请相关权限。","source":"@site/docs/camera-kit/camera-dev-arkts/camera-dual-channel-preview/camera-dual-channel-preview.md","sourceDirName":"camera-kit/camera-dev-arkts/camera-dual-channel-preview","slug":"/camera-kit/camera-dev-arkts/camera-dual-channel-preview/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-dual-channel-preview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"双路预览(ArkTS)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-dual-channel-preview","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"预览(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-preview/"},"next":{"title":"拍照(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-shooting/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-arkts/camera-dual-channel-preview/camera-dual-channel-preview.md


const frontMatter = {
	title: '双路预览(ArkTS)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-dual-channel-preview',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '双路预览(ArkTS)';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "调用流程",
  "id": "调用流程",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "用于处理图像的第一路预览流",
  "id": "用于处理图像的第一路预览流",
  "level": 3
}, {
  "value": "用于显示画面的第二路预览流",
  "id": "用于显示画面的第二路预览流",
  "level": 3
}, {
  "value": "创建预览流获取数据",
  "id": "创建预览流获取数据",
  "level": 3
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
    h3: "h3",
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
        id: "双路预览arkts",
        children: "双路预览(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在开发相机应用时，需要先", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-preparation",
        children: "申请相关权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "双路预览，即应用可同时使用两路预览流，一路用于在屏幕上显示，一路用于图像处理等其他操作，提升处理效率。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["相机应用通过控制相机，实现图像显示（预览）、照片保存（拍照）、视频录制（录像）等基础操作。相机开发模型为Surface模型，即应用通过Surface进行数据传递，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-imagereceiver/arkts-apis-image-imagereceiver",
        children: "ImageReceiver"
      }), "的Surface获取拍照流的数据、通过XComponent的Surface获取预览流的数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果要实现双路预览，可以先参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-arkts/camera-shooting",
        children: "拍照"
      }), "，在双路预览中将拍照流改为另一路预览流，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-imagereceiver/arkts-apis-image-imagereceiver",
        children: "ImageReceiver"
      }), "的Surface创建另一个previewOutput，其余流程与拍照一致。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera/arkts-apis-camera",
        children: "@ohos.multimedia.camera (相机管理)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["暂不支持动态添加流，即不能在没有调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#stop11",
          children: "session.stop"
        }), "的情况下，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#addoutput11",
          children: "addOutput"
        }), "添加流。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对ImageReceiver组件获取到的图像数据处理后，需要将对应的图像Buffer释放，确保Surface的BufferQueue正常轮转。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用流程",
      children: "调用流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "双路方案调用流程图建议如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(963824)/* ["default"] */.A) + "",
        width: "2709",
        height: "4096"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用于处理图像的第一路预览流：创建ImageReceiver对象，获取SurfaceId创建第一路预览流，注册图像监听，按需处理预览流每帧图像。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用于显示画面的第二路预览流：创建XComponent组件，获取SurfaceId创建第二路预览流，预览流画面直接在组件内渲染。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建预览流获取数据：创建上述两路预览流，配置进相机会话，启动会话后，两路预览流同时获取数据。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下各步骤示例为片段代码，可通过点击示例代码右下方的链接获取完整工程示例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "用于处理图像的第一路预览流",
      children: "用于处理图像的第一路预览流"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入依赖，本篇文档需要用到图片和相机框架等相关依赖包。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { image } from '@kit.ImageKit';\nimport { camera } from '@kit.CameraKit';\nimport { display } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取第一路预览流SurfaceId：创建ImageReceiver对象，通过ImageReceiver对象可获取其SurfaceId。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async init(size: Size, format = image.ImageFormat.JPEG, capacity = 8) {\n  const receiver = image.createImageReceiver(size, format, capacity);\n  const surfaceId = await receiver.getReceivingSurfaceId();\n  this.onImageArrival(receiver);\n  return surfaceId;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ImageReceiver接收预览流图像数据获取图像格式请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-image/arkts-apis-image-image",
            children: "Image"
          }), "中的format参数，", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
            children: "PixelMap"
          }), "格式请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-e/arkts-apis-image-e#pixelmapformat7",
            children: "PixelMapFormat"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Image格式与PixelMap格式映射关系。\nlet formatToPixelMapFormatMap = new Map<number, image.PixelMapFormat>([\n  [12, image.PixelMapFormat.RGBA_8888],\n  [25, image.PixelMapFormat.NV21],\n  [35, image.PixelMapFormat.YCBCR_P010],\n  [36, image.PixelMapFormat.YCRCB_P010]\n]);\n// PixelMapFormat格式的单个像素点大小映射关系。\nlet pixelMapFormatToSizeMap = new Map<image.PixelMapFormat, number>([\n  [image.PixelMapFormat.RGBA_8888, 4],\n  [image.PixelMapFormat.NV21, 1.5],\n  [image.PixelMapFormat.YCBCR_P010, 3],\n  [image.PixelMapFormat.YCRCB_P010, 3]\n]);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["注册监听处理预览流每帧图像数据：通过ImageReceiver组件中imageArrival事件监听获取底层返回的图像数据，详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-imagereceiver/arkts-apis-image-imagereceiver",
            children: "ImageReceiver"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(160541)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["在通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-f/arkts-apis-image-f#imagecreatepixelmap8",
              children: "createPixelMap"
            }), "接口创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            }), "实例时，设置的Size、srcPixelFormat等属性必须和相机预览输出流previewProfile中配置的Size、Format属性保持一致，ImageReceiver图片像素格式请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-e/arkts-apis-image-e#pixelmapformat7",
              children: "PixelMapFormat"
            }), "，相机预览输出流previewProfile输出格式请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#cameraformat",
              children: "CameraFormat"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["由于不同设备产品差异性，应用开发者在创建相机预览输出流前，必须先通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#getsupportedoutputcapability11",
              children: "getSupportedOutputCapability"
            }), "方法获取当前设备支持的预览输出流previewProfile，再根据实际业务需求选择", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#cameraformat",
              children: "CameraFormat"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-i/arkts-apis-camera-i#size",
              children: "Size"
            }), "适合的预览输出流previewProfile。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["ImageReceiver接收预览流图像数据实际format格式由应用开发者在创建预览输出流相机预览输出流时，根据实际业务需求选择的previewProfile中format格式参数影响，详细步骤请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/camera-kit/camera-dev-arkts/camera-dual-channel-preview#%E5%88%9B%E5%BB%BA%E9%A2%84%E8%A7%88%E6%B5%81%E8%8E%B7%E5%8F%96%E6%95%B0%E6%8D%AE",
              children: "创建预览流获取数据"
            }), "。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "onImageArrival(receiver: image.ImageReceiver): void {\n  receiver.on('imageArrival', () => {\n    Logger.info(TAG, 'image arrival');\n    receiver.readNextImage((err: BusinessError, nextImage: image.Image) => {\n      if (err || nextImage === undefined) {\n        Logger.error(TAG, 'readNextImage failed');\n        return;\n      }\n      nextImage.getComponent(image.ComponentType.JPEG, async (err: BusinessError, imgComponent: image.Component) => {\n        if (err || imgComponent === undefined) {\n          Logger.error(TAG, 'getComponent failed');\n        }\n        if (imgComponent.byteBuffer) {\n          // ...\n        } else {\n          Logger.error(TAG, 'byteBuffer is null');\n        }\n        // ...\n      });\n    });\n  });\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-i/arkts-apis-image-i#component9",
            children: "image.Component"
          }), " 解析图片buffer数据参考："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(286740)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要确认图像的宽width是否与行距rowStride一致，如果不一致可参考以下方式处理："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方式一：去除imgComponent.byteBuffer中stride数据，拷贝得到新的buffer，调用不支持stride的接口处理buffer。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async getPixelMap(imgComponent: image.Component, width: number, height: number, stride: number) {\n  if (stride === width) {\n    return await image.createPixelMap(imgComponent.byteBuffer, {\n      size: { height: height, width: width },\n      srcPixelFormat: image.PixelMapFormat.NV21,\n    });\n  }\n  const dstBufferSize = width * height * 1.5;\n  const dstArr = new Uint8Array(dstBufferSize);\n  for (let j = 0; j < height * 1.5; j++) {\n    const srcBuf = new Uint8Array(imgComponent.byteBuffer, j * stride, width);\n    dstArr.set(srcBuf, j * width);\n  }\n  return await image.createPixelMap(dstArr.buffer, {\n    size: { height: height, width: width },\n    srcPixelFormat: image.PixelMapFormat.NV21,\n  });\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方式二：根据stride*height创建pixelMap，然后调用pixelMap的cropSync方法裁剪掉多余的像素。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建pixelMap，width宽传行距stride的值。\nlet pixelMap = await image.createPixelMap(imgComponent.byteBuffer, {\n  size:{height: height, width: stride}, srcPixelFormat: pixelMapFormat});\n// 裁剪多余的像素。\npixelMap.cropSync({size:{width:width, height:height}, x:0, y:0});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方式三：将原始imgComponent.byteBuffer和stride信息一起传给支持stride的接口处理。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "用于显示画面的第二路预览流",
      children: "用于显示画面的第二路预览流"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取第二路预览流SurfaceId：创建XComponent组件用于预览流显示，获取SurfaceId请参考XComponent组件提供的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent#getxcomponentsurfaceid9",
        children: "getXComponentSurfaceId"
      }), "方法，而XComponent的能力由UI提供，相关介绍可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
        children: "XComponent组件参考"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "XComponent({\n  type: XComponentType.SURFACE,\n  controller: this.previewVM.xComponentController\n})\n  .size({ height: '100%', width: '100%' })\n  .onLoad(async () => {\n    // ...\n    this.previewVM.surfaceId = this.previewVM.xComponentController.getXComponentSurfaceId();\n    this.previewVM.setPreviewSize();\n    this.previewVM.xComponentController.setXComponentSurfaceRotation({ lock: true });\n    // ...\n  })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建预览流获取数据",
      children: "创建预览流获取数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过两个SurfaceId分别创建两路预览流输出，加入相机会话，启动相机会话，获取预览流数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async createOutput(config: CreateOutputConfig) {\n  const cameraOutputCap = config.cameraManager.getSupportedOutputCapability(config.device, config.sceneMode);\n  const displayRatio = config.profile.size.width / config.profile.size.height;\n  const profileWidth = config.profile.size.width;\n  const previewProfile = cameraOutputCap.previewProfiles\n    .sort((a, b) => Math.abs(a.size.width - profileWidth) - Math.abs(b.size.width - profileWidth))\n    .find(pf => {\n      const pfDisplayRatio = pf.size.width / pf.size.height;\n      return pf.format === config.profile.format &&\n        Math.abs(pfDisplayRatio - displayRatio) <= CameraConstant.PROFILE_DIFFERENCE;\n    });\n  if (!previewProfile) {\n    Logger.error(TAG_LOG, 'Failed to get preview profile');\n    return;\n  }\n  this.output = config.cameraManager.createPreviewOutput(previewProfile, config.surfaceId);\n  this.addOutputListener(this.output);\n  return this.output;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { image } from '@kit.ImageKit';\nimport { camera } from '@kit.CameraKit';\nimport { display } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { Logger } from 'commons';\nimport OutputManager, { CreateOutputConfig } from './OutputManager';\nimport CameraConstant from '../constants/CameraConstants';\n\nconst TAG = 'ImageReceiverManager';\n\nexport class ImageReceiverManager implements OutputManager {\n  public output?: camera.PreviewOutput;\n  public isActive: boolean = true;\n  public callback: (px: PixelMap) => void;\n  private position: camera.CameraPosition = camera.CameraPosition.CAMERA_POSITION_BACK;\n\n  constructor(cb: (px: PixelMap) => void) {\n    this.callback = cb;\n  }\n\n  async createOutput(config: CreateOutputConfig) {\n    const cameraOutputCap = config.cameraManager.getSupportedOutputCapability(config.device, config.sceneMode);\n    const displayRatio = config.profile.size.width / config.profile.size.height;\n    const profileWidth = config.profile.size.width;\n    const previewProfile = cameraOutputCap.previewProfiles\n      .sort((a, b) => Math.abs(a.size.width - profileWidth) - Math.abs(b.size.width - profileWidth))\n      .find(pf => {\n        const pfDisplayRatio = pf.size.width / pf.size.height;\n        return pf.format === config.profile.format &&\n          Math.abs(pfDisplayRatio - displayRatio) <= CameraConstant.PROFILE_DIFFERENCE;\n      });\n    if (!previewProfile) {\n      Logger.error(TAG, 'Failed to get preview profile');\n      return;\n    }\n    const surfaceId = await this.init(config.profile.size);\n    this.output = config.cameraManager.createPreviewOutput(previewProfile, surfaceId);\n    this.position = config.device.cameraPosition;\n    return this.output;\n  }\n\n  async release() {\n    await this.output?.release();\n    this.output = undefined;\n  }\n\n  async init(size: Size, format = image.ImageFormat.JPEG, capacity = 8) {\n    const receiver = image.createImageReceiver(size, format, capacity);\n    const surfaceId = await receiver.getReceivingSurfaceId();\n    this.onImageArrival(receiver);\n    return surfaceId;\n  }\n\n  async getPixelMap(imgComponent: image.Component, width: number, height: number, stride: number) {\n    if (stride === width) {\n      return await image.createPixelMap(imgComponent.byteBuffer, {\n        size: { height: height, width: width },\n        srcPixelFormat: image.PixelMapFormat.NV21,\n      });\n    }\n    const dstBufferSize = width * height * 1.5;\n    const dstArr = new Uint8Array(dstBufferSize);\n    for (let j = 0; j < height * 1.5; j++) {\n      const srcBuf = new Uint8Array(imgComponent.byteBuffer, j * stride, width);\n      dstArr.set(srcBuf, j * width);\n    }\n    return await image.createPixelMap(dstArr.buffer, {\n      size: { height: height, width: width },\n      srcPixelFormat: image.PixelMapFormat.NV21,\n    });\n  }\n\n  onImageArrival(receiver: image.ImageReceiver): void {\n    receiver.on('imageArrival', () => {\n      Logger.info(TAG, 'image arrival');\n      receiver.readNextImage((err: BusinessError, nextImage: image.Image) => {\n        if (err || nextImage === undefined) {\n          Logger.error(TAG, 'readNextImage failed');\n          return;\n        }\n        nextImage.getComponent(image.ComponentType.JPEG, async (err: BusinessError, imgComponent: image.Component) => {\n          if (err || imgComponent === undefined) {\n            Logger.error(TAG, 'getComponent failed');\n          }\n          if (imgComponent.byteBuffer) {\n            const width = nextImage.size.width;\n            const height = nextImage.size.height;\n            const stride = imgComponent.rowStride;\n            Logger.info(TAG, `getComponent with width:${width} height:${height} stride:${stride}`);\n            const pixelMap = await this.getPixelMap(imgComponent, width, height, stride);\n            const displayRotation = display.getDefaultDisplaySync().rotation * camera.ImageRotation.ROTATION_90;\n            const rotation = this.output!.getPreviewRotation(displayRotation);\n            if (this.position === camera.CameraPosition.CAMERA_POSITION_FRONT) {\n              if (displayRotation === 90 || displayRotation === 270) {\n                await pixelMap.rotate((rotation + 180) % 360);\n              } else {\n                await pixelMap.rotate(rotation);\n              }\n              await pixelMap.flip(true, false);\n            } else {\n              await pixelMap.rotate(rotation);\n            }\n            this.callback(pixelMap);\n          } else {\n            Logger.error(TAG, 'byteBuffer is null');\n          }\n          nextImage.release().then(() => {Logger.info(TAG, 'image release done');}).catch((error: BusinessError) => {\n            Logger.error(TAG, `Release failed! Code ${error.code},message is ${error.message}`);\n          });\n          Logger.info(TAG, 'image process done');\n        });\n      });\n    });\n  }\n}\n"
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
963824(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438611-48af34229dc123ca2142d15c079311b7.png");

},
160541(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
286740(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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