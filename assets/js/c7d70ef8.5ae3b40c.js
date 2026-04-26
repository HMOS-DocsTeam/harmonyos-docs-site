"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["641934"], {
908802(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_arkts_camera_animation_camera_animation_md_c7d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-arkts-camera-animation-camera-animation-md-c7d.json
var site_docs_camera_kit_camera_dev_arkts_camera_animation_camera_animation_md_c7d_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-arkts/camera-animation/camera-animation","title":"相机基础动效(ArkTS)","description":"在使用相机过程中，当遇到相机模式切换、前后置镜头切换等场景时，会不可避免地出现预览流替换。为优化用户体验，可合理使用动效过渡。本文主要介绍如何使用预览流截图，并通过ArkUI提供的animateToImmediately接口触发显式动画功能，实现下方三种核心场景动效。","source":"@site/docs/camera-kit/camera-dev-arkts/camera-animation/camera-animation.md","sourceDirName":"camera-kit/camera-dev-arkts/camera-animation","slug":"/camera-kit/camera-dev-arkts/camera-animation/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-animation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"相机基础动效(ArkTS)","sidebar_position":14,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-animation","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"动态照片拍摄(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-moving-photo/"},"next":{"title":"在Worker线程中使用相机(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-worker/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-arkts/camera-animation/camera-animation.md


const frontMatter = {
	title: '相机基础动效(ArkTS)',
	sidebar_position: 14,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-animation',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '相机基础动效(ArkTS)';

const assets = {

};



const toc = [{
  "value": "闪黑动效",
  "id": "闪黑动效",
  "level": 2
}, {
  "value": "模糊动效",
  "id": "模糊动效",
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
        id: "相机基础动效arkts",
        children: "相机基础动效(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在使用相机过程中，当遇到相机模式切换、前后置镜头切换等场景时，会不可避免地出现预览流替换。为优化用户体验，可合理使用动效过渡。本文主要介绍如何使用预览流截图，并通过ArkUI提供的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#animatetoimmediately23",
        children: "animateToImmediately"
      }), "接口触发显式动画功能，实现下方三种核心场景动效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模式切换动效，使用预览流截图做模糊动效过渡。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "图片为从录像模式切换为拍照模式的效果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(943322)/* ["default"] */.A) + "",
            width: "221",
            height: "458"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "前后置切换动效，使用预览流截图做翻转模糊动效过渡。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "图片为从前置相机切换为后置相机的效果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(850729)/* ["default"] */.A) + "",
            width: "221",
            height: "458"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "拍照闪黑动效，使用闪黑组件覆盖预览流实现闪黑动效过渡。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "图片为点击完成拍摄的效果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(437683)/* ["default"] */.A) + "",
            width: "221",
            height: "458"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "闪黑动效",
      children: "闪黑动效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用组件覆盖的形式实现闪黑效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下步骤中的示例代码均为自定义组件（即被@Component修饰的组件）的内部方法或逻辑。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入依赖，需要导入相机框架、图片、ArkUI相关领域依赖。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { camera } from '@kit.CameraKit';\nimport { image } from '@kit.ImageKit';\nimport { curves } from '@kit.ArkUI';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构建闪黑组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此处定义一个闪黑组件，在拍照闪黑及前后置切换时显示，用来遮挡XComponent组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "属性定义："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@State isShowBlur: boolean = false;\n@State isShowBlack: boolean = false;\n@StorageLink('modeChange') @Watch('onModeChange') modeChangeFlag: number = 0;\n@StorageLink('switchCamera') @Watch('onSwitchCamera') switchCameraFlag: number = 0;\n@StorageLink('frameStart') @Watch('onFrameStart') frameStartFlag: number = 0;\n@StorageLink('captureClick') @Watch('onCaptureClick') captureClickFlag: number = 0;\n@StorageLink('surfaceShot') screenshotPixelMap: image.PixelMap | undefined = undefined; // 预览流截图。\n@StorageLink('curPosition') curPosition: number = 0; // 当前镜头前后置状态。\n@State shotImgBlur: number = 0;\n@State shotImgOpacity: number = 1;\n@State shotImgScale: ScaleOptions = { x: 1, y: 1 };\n@State shotImgRotation: RotateOptions = { y: BlurAnimateUtil.ROTATE_AXIS, angle: BlurAnimateUtil.IMG_FLIP_ANGLE_0 }\n@State flashBlackOpacity: number = 1;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "闪黑组件的实现逻辑参考："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 拍照闪黑及前后置切换时显示，用来遮挡XComponent组件。\nif (this.isShowBlack) {\n  Column()\n    .key('black')\n    .width(this.getUIContext().px2vp(Constants.X_COMPONENT_SURFACE_HEIGHT))\n    .height(this.getUIContext().px2vp(Constants.X_COMPONENT_SURFACE_WIDTH))\n    .backgroundColor(Color.Black)\n    .opacity(this.flashBlackOpacity)\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实现闪黑动效。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "private flashBlackAnim() {\n  Logger.info(TAG, 'flashBlackAnim E');\n  this.flashBlackOpacity = 1;\n  this.isShowBlack = true;\n  animateToImmediately({\n    curve: curves.interpolatingSpring(1, 1, 410, 38),\n    delay: 50,\n    onFinish: () => {\n      this.isShowBlack = false;\n      this.flashBlackOpacity = 1;\n      Logger.info(TAG, 'flashBlackAnim X');\n    }\n  }, () => {\n    this.flashBlackOpacity = 0;\n  })\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "触发闪黑动效。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击或触控拍照按钮，更新", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#storagelink",
            children: "@StorageLink"
          }), "绑定CaptureClick的值，触发onCaptureClick方法，动效开始播放。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "onCaptureClick(): void {\n  Logger.info(TAG, 'onCaptureClick');\n  this.flashBlackAnim();\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模糊动效",
      children: "模糊动效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过预览流截图，实现模糊动效，从而完成模式切换，或是前后置切换的动效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下除了步骤2，其他步骤中的示例代码均为自定义组件（即被@Component修饰的组件）的内部方法或逻辑。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入依赖，需要导入相机框架、图片、ArkUI相关领域依赖。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { camera } from '@kit.CameraKit';\nimport { image } from '@kit.ImageKit';\nimport { curves } from '@kit.ArkUI';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取预览流截图。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["预览流截图通过图形提供的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-f/arkts-apis-image-f#imagecreatepixelmapfromsurface11",
            children: "image.createPixelMapFromSurface"
          }), "接口实现，surfaceId为当前预览流的surfaceId，size为当前预览流profile的宽高。创建截图工具类（ts文件），导入依赖，导出获取截图方法供页面使用，截图工具类实现参考："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export class BlurAnimateUtil {\n  public static surfaceShot: image.PixelMap;\n  // ...\n\n  /**\n   * 获取surface截图\n   * @param surfaceId\n   * @returns\n   */\n  public static async doSurfaceShot(surfaceId: string) {\n    Logger.info(TAG, `doSurfaceShot surfaceId:${surfaceId}.`);\n    if ('' === surfaceId) {\n      Logger.error(TAG, 'surface not ready!');\n      return;\n    }\n    try {\n      if (this.surfaceShot) {\n        await this.surfaceShot.release();\n      }\n      this.surfaceShot = await image.createPixelMapFromSurface(surfaceId, {\n        size: { width: Constants.X_COMPONENT_SURFACE_WIDTH, height: Constants.X_COMPONENT_SURFACE_HEIGHT }, // 取预览流profile的宽高。\n        x: 0,\n        y: 0\n      });\n      let imageInfo: image.ImageInfo = await this.surfaceShot.getImageInfo();\n      Logger.info('doSurfaceShot surfaceShot:' + JSON.stringify(imageInfo.size));\n    } catch (err) {\n      Logger.error(JSON.stringify(err))\n    }\n  }\n\n  public static getSurfaceShot() {\n    return this.surfaceShot;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构建截图组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此处定义一个截图组件，置于预览流XComponent组件之上，用来遮挡XComponent组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "属性定义："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@State isShowBlur: boolean = false;\n@State isShowBlack: boolean = false;\n@StorageLink('modeChange') @Watch('onModeChange') modeChangeFlag: number = 0;\n@StorageLink('switchCamera') @Watch('onSwitchCamera') switchCameraFlag: number = 0;\n@StorageLink('frameStart') @Watch('onFrameStart') frameStartFlag: number = 0;\n@StorageLink('captureClick') @Watch('onCaptureClick') captureClickFlag: number = 0;\n@StorageLink('surfaceShot') screenshotPixelMap: image.PixelMap | undefined = undefined; // 预览流截图。\n@StorageLink('curPosition') curPosition: number = 0; // 当前镜头前后置状态。\n@State shotImgBlur: number = 0;\n@State shotImgOpacity: number = 1;\n@State shotImgScale: ScaleOptions = { x: 1, y: 1 };\n@State shotImgRotation: RotateOptions = { y: BlurAnimateUtil.ROTATE_AXIS, angle: BlurAnimateUtil.IMG_FLIP_ANGLE_0 }\n@State flashBlackOpacity: number = 1;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "截图组件的实现参考："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (this.isShowBlur) {\n  Column() {\n    Image(this.screenshotPixelMap)\n      .blur(this.shotImgBlur)\n      .opacity(this.shotImgOpacity)\n      .rotate(this.shotImgRotation)// ArkUI提供的旋转，用于组件沿指定坐标系进行旋转。\n      .scale(this.shotImgScale)\n      .width(this.getUIContext().px2vp(Constants.X_COMPONENT_SURFACE_HEIGHT))\n      .height(this.getUIContext().px2vp(Constants.X_COMPONENT_SURFACE_WIDTH))\n      .syncLoad(true)\n  }\n  .width(this.getUIContext().px2vp(Constants.X_COMPONENT_SURFACE_HEIGHT))\n  .height(this.getUIContext().px2vp(Constants.X_COMPONENT_SURFACE_WIDTH))\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（按实际情况选择）实现模糊出现动效。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模式切换动效分两段实现，模糊出现动效和模糊消失动效。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模糊出现动效：用户点击或触控事件触发预览流截图，显示截图组件，截图清晰到模糊，覆盖旧预览流。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(77867)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["由于图形提供的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-f/arkts-apis-image-f#imagecreatepixelmapfromsurface11",
            children: "image.createPixelMapFromSurface"
          }), "接口是通过截取surface内容获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
            children: "PixelMap"
          }), "，其内容和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
            children: "XComponent"
          }), "组件绘制逻辑不同，需要根据", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "前后置"
            })
          }), "镜头做不同的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图片内容旋转补偿"
            })
          }), "和", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "组件旋转补偿"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "private async showBlurAnim() {\n  Logger.info(TAG, 'showBlurAnim E');\n  // 获取已完成的surface截图。\n  let shotPixel = BlurAnimateUtil.getSurfaceShot();\n  // 后置。\n  if (this.curPosition === 0) {\n    Logger.info(TAG, 'showBlurAnim BACK');\n    // 直板机后置截图旋转补偿90°。\n    await shotPixel.rotate(BlurAnimateUtil.IMG_ROTATE_ANGLE_90);\n    // 直板机后置截图初始翻转0°。\n    this.shotImgRotation = { y: BlurAnimateUtil.ROTATE_AXIS, angle: BlurAnimateUtil.IMG_FLIP_ANGLE_0 };\n  } else {\n    Logger.info(TAG, 'showBlurAnim FRONT');\n    // 直板机前置截图旋转补偿270°。\n    await shotPixel.rotate(BlurAnimateUtil.IMG_ROTATE_ANGLE_270);\n    // 直板机前置截图镜像补偿。\n    this.shotImgRotation = { y: BlurAnimateUtil.ROTATE_AXIS, angle: BlurAnimateUtil.IMG_FLIP_ANGLE_180 };\n  }\n  this.screenshotPixelMap = shotPixel;\n  // 初始化动效参数。\n  this.shotImgBlur = 0; // 无模糊。\n  this.shotImgOpacity = 1; // 不透明。\n  // 触发页面渲染。\n  this.isShowBlur = true;\n  animateToImmediately(\n    {\n      duration: BlurAnimateUtil.SHOW_BLUR_DURATION,\n      curve: Curve.Friction,\n      onFinish: async () => {\n        Logger.info(TAG, 'showBlurAnim X');\n      }\n    },\n    () => {\n      // 截图模糊度变化动效。\n      this.shotImgBlur = BlurAnimateUtil.ANIM_MODE_SWITCH_BLUR;\n    }\n  );\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实现模糊消失动效。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["模糊消失动效：由新模式预览流首帧回调", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-previewoutput/arkts-apis-camera-previewoutput#onframestart",
            children: "on('frameStart')"
          }), "触发，截图组件模糊到清晰，显示新预览流。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "private hideBlurAnim(): void {\n  this.isShowBlack = false;\n  Logger.info(TAG, 'hideBlurAnim E');\n  animateToImmediately({\n    duration: BlurAnimateUtil.HIDE_BLUR_DURATION,\n    curve: Curve.FastOutSlowIn,\n    onFinish: () => {\n      // 模糊组件下树。\n      this.isShowBlur = false;\n      this.shotImgBlur = 0;\n      this.shotImgOpacity = 1;\n      Logger.info(TAG, 'hideBlurAnim X');\n    }\n  }, () => {\n    // 截图透明度变化动效。\n    this.shotImgOpacity = 0;\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（按实际情况选择）实现模糊翻转动效。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模糊翻转动效分两段实现，模糊翻转动效和模糊消失动效，其中模糊消失动效同第5步。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模糊翻转动效：分两段组件翻转实现，先向外翻转90°再向内翻转90°，同时还执行了模糊度、透明度、比例缩放等动效。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["为保证预览流在翻转时不露出，需要构建一个闪黑组件用于遮挡XComponent组件，构建方式参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E9%97%AA%E9%BB%91%E5%8A%A8%E6%95%88",
            children: "闪黑动效"
          }), "-步骤2。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/**\n * 先向外翻转90°，前后置切换触发\n */\nprivate async rotateFirstAnim() {\n  Logger.info(TAG, 'rotateFirstAnim E');\n  // 获取已完成的surface截图。\n  let shotPixel = BlurAnimateUtil.getSurfaceShot();\n  // 后置切前置。\n  if (this.curPosition === 1) {\n    Logger.info(TAG, 'rotateFirstAnim BACK');\n    // 直板机后置切前置截图旋转补偿90°。\n    await shotPixel.rotate(BlurAnimateUtil.IMG_ROTATE_ANGLE_90); // Image Kit提供的旋转，用于处理图片本身的旋转。\n    // 直板机后置切前置截图初始翻转0°。\n    this.shotImgRotation = { y: BlurAnimateUtil.ROTATE_AXIS, angle: BlurAnimateUtil.IMG_FLIP_ANGLE_0 };\n  } else {\n    Logger.info(TAG, 'rotateFirstAnim FRONT');\n    // 直板机前置切后置截图旋转补偿270°。\n    await shotPixel.rotate(BlurAnimateUtil.IMG_ROTATE_ANGLE_270);\n    // 直板机前置切后置截图初始翻转180°。\n    this.shotImgRotation = { y: BlurAnimateUtil.ROTATE_AXIS, angle: BlurAnimateUtil.IMG_FLIP_ANGLE_180 };\n  }\n  this.screenshotPixelMap = shotPixel;\n  // 触发页面渲染。\n  this.isShowBlack = true;\n  this.isShowBlur = true;\n  animateToImmediately(\n    {\n      duration: BlurAnimateUtil.ROTATION_DURATION,\n      delay: BlurAnimateUtil.FLIP_DELAY, // 时延保证组件缩放模糊动效先行，再翻转后视觉效果更好。\n      curve: curves.cubicBezierCurve(0.20, 0.00, 0.83, 1.00),\n      onFinish: () => {\n        Logger.info(TAG, 'rotateFirstAnim X');\n        // 在onFinish后触发二段旋转。\n        this.rotateSecondAnim();\n      }\n    },\n    () => {\n      // 截图向翻转动效。\n      if (this.curPosition === 1) {\n        this.shotImgRotation = { y: BlurAnimateUtil.ROTATE_AXIS, angle: BlurAnimateUtil.IMG_FLIP_ANGLE_90 };\n      } else {\n        this.shotImgRotation = { y: BlurAnimateUtil.ROTATE_AXIS, angle: BlurAnimateUtil.IMG_FLIP_ANGLE_270 };\n      }\n    }\n  )\n}\n\n/**\n * 再向内翻转90°\n */\nasync rotateSecondAnim() {\n  Logger.info(TAG, 'rotateSecondAnim E');\n  // 获取已完成的surface截图。\n  let shotPixel = BlurAnimateUtil.getSurfaceShot();\n  // 后置。\n  if (this.curPosition === 1) {\n    // 直板机后置镜头旋转补偿90°。\n    await shotPixel.rotate(BlurAnimateUtil.IMG_ROTATE_ANGLE_90); // Image Kit提供的旋转，用于处理图片本身的旋转。\n    // 瞬时调整为-90°，保证二段旋转后，图片不是镜像的。\n    this.shotImgRotation = { y: BlurAnimateUtil.ROTATE_AXIS, angle: BlurAnimateUtil.IMG_FLIP_ANGLE_MINUS_90 };\n  } else { // 前置。\n    // 直板机前置截图旋转补偿270°。\n    await shotPixel.rotate(BlurAnimateUtil.IMG_ROTATE_ANGLE_270);\n    // 直板机前置截图镜像补偿。\n    this.shotImgRotation = { y: BlurAnimateUtil.ROTATE_AXIS, angle: BlurAnimateUtil.IMG_FLIP_ANGLE_180 };\n  }\n  this.screenshotPixelMap = shotPixel;\n\n  animateToImmediately(\n    {\n      duration: BlurAnimateUtil.ROTATION_DURATION,\n      curve: curves.cubicBezierCurve(0.17, 0.00, 0.20, 1.00),\n      onFinish: () => {\n        Logger.info(TAG, 'rotateSecondAnim X');\n      }\n    },\n    () => {\n      // 截图翻转为初始状态。\n      if (this.curPosition === 1) {\n        this.shotImgRotation = { y: BlurAnimateUtil.ROTATE_AXIS, angle: BlurAnimateUtil.IMG_FLIP_ANGLE_0 };\n      } else {\n        this.shotImgRotation = { y: BlurAnimateUtil.ROTATE_AXIS, angle: BlurAnimateUtil.IMG_FLIP_ANGLE_180 };\n      }\n    }\n  )\n}\n\n/**\n * 向外翻转90°同时\n */\nblurFirstAnim() {\n  Logger.info(TAG, 'blurFirstAnim E');\n  // 初始化动效参数。\n  this.shotImgBlur = 0; // 无模糊。\n  this.shotImgOpacity = 1; // 不透明。\n  this.shotImgScale = { x: 1, y: 1 };\n  animateToImmediately(\n    {\n      duration: BlurAnimateUtil.ROTATION_DURATION,\n      curve: Curve.Sharp,\n      onFinish: () => {\n        Logger.info(TAG, 'blurFirstAnim X');\n        this.blurSecondAnim();\n      }\n    },\n    () => {\n      // 截图模糊度变化动效。\n      this.shotImgBlur = BlurAnimateUtil.ANIM_MODE_SWITCH_BLUR;\n      // 截图比例动效。\n      this.shotImgScale = { x: BlurAnimateUtil.IMG_SCALE, y: BlurAnimateUtil.IMG_SCALE };\n    }\n  );\n}\n\n/**\n * 向内翻转90°同时\n */\nblurSecondAnim() {\n  Logger.info(TAG, 'blurSecondAnim E');\n  animateToImmediately(\n    {\n      duration: BlurAnimateUtil.ROTATION_DURATION,\n      curve: Curve.Sharp,\n      onFinish: () => {\n        Logger.info(TAG, 'blurSecondAnim X');\n      }\n    },\n    () => {\n      this.shotImgScale = { x: 1, y: 1 };\n    }\n  )\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按需触发动效。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["模式切换动效触发：点击或触控模式按钮立即执行doSurfaceShot截图方法，更新", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#storagelink",
            children: "@StorageLink"
          }), "绑定modeChange的值，触发onModeChange方法，开始动效。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "onModeChange(): void {\n  Logger.info(TAG, 'onModeChange');\n  this.showBlurAnim();\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["前后置切换动效触发：点击或触控前后置切换按钮立即执行doSurfaceShot截图方法，更新", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#storagelink",
            children: "@StorageLink"
          }), "绑定switchCamera的值，触发onSwitchCamera方法，开始动效。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "onSwitchCamera(): void {\n  Logger.info(TAG, 'onSwitchCamera');\n  this.blurFirstAnim();\n  this.rotateFirstAnim();\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["模糊消失动效触发：监听预览流首帧回调", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-previewoutput/arkts-apis-camera-previewoutput#onframestart",
            children: "on('frameStart')"
          }), "，更新", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#storagelink",
            children: "@StorageLink"
          }), "绑定frameStart的值，触发onFrameStart方法，开始动效。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "onFrameStart(): void {\n  Logger.info(TAG, 'onFrameStart');\n  this.hideBlurAnim();\n}\n"
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
77867(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
850729(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958568-d36621c8bf1efb9b49ec1c93265b43d5.gif");

},
437683(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478569-4736988e96bcf98161a0c7b3a6310594.gif");

},
943322(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438613-a27ab3e3bc58aa1bfbe2cfed608caf62.gif");

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