"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["290703"], {
775695(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_arkts_ui_js_apis_arkui_drawabledescriptor_js_apis_arkui_drawabledescriptor_md_9b5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-arkts-ui-js-apis-arkui-drawabledescriptor-js-apis-arkui-drawabledescriptor-md-9b5.json
var site_docs_ref_arkui_api_arkui_arkts_ui_js_apis_arkui_drawabledescriptor_js_apis_arkui_drawabledescriptor_md_9b5_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor","title":"@ohos.arkui.drawableDescriptor (DrawableDescriptor)","description":"本模块提供分层图标合成（包括前景，背景，蒙版），动图播放与控制，基础图像处理的能力。","source":"@site/docs-ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor.md","sourceDirName":"arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor","slug":"/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"@ohos.arkui.drawableDescriptor (DrawableDescriptor)","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-drawabledescriptor","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-arkui-drawabledescriptor"},"sidebar":"ref","previous":{"title":"@ohos.arkui.dragController (DragController)","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-dragcontroller/js-apis-arkui-dragcontroller"},"next":{"title":"@ohos.arkui.inspector (布局回调)","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-inspector/js-apis-arkui-inspector"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor.md


const frontMatter = {
	title: '@ohos.arkui.drawableDescriptor (DrawableDescriptor)',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-drawabledescriptor',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-arkui-drawabledescriptor'
};
const contentTitle = '@ohos.arkui.drawableDescriptor (DrawableDescriptor)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "DrawableDescriptorLoadedResult21+",
  "id": "drawabledescriptorloadedresult21",
  "level": 2
}, {
  "value": "DrawableDescriptor",
  "id": "drawabledescriptor",
  "level": 2
}, {
  "value": "getPixelMap",
  "id": "getpixelmap",
  "level": 3
}, {
  "value": "loadSync21+",
  "id": "loadsync21",
  "level": 3
}, {
  "value": "load21+",
  "id": "load21",
  "level": 3
}, {
  "value": "PixelMapDrawableDescriptor12+",
  "id": "pixelmapdrawabledescriptor12",
  "level": 2
}, {
  "value": "constructor12+",
  "id": "constructor12",
  "level": 3
}, {
  "value": "LayeredDrawableDescriptor",
  "id": "layereddrawabledescriptor",
  "level": 2
}, {
  "value": "constructor12+",
  "id": "constructor12-1",
  "level": 3
}, {
  "value": "getForeground",
  "id": "getforeground",
  "level": 3
}, {
  "value": "getBackground",
  "id": "getbackground",
  "level": 3
}, {
  "value": "getMask",
  "id": "getmask",
  "level": 3
}, {
  "value": "getMaskClipPath",
  "id": "getmaskclippath",
  "level": 3
}, {
  "value": "setBlendMode23+",
  "id": "setblendmode23",
  "level": 3
}, {
  "value": "AnimationOptions12+",
  "id": "animationoptions12",
  "level": 2
}, {
  "value": "AnimatedDrawableDescriptor12+",
  "id": "animateddrawabledescriptor12",
  "level": 2
}, {
  "value": "constructor12+",
  "id": "constructor12-2",
  "level": 3
}, {
  "value": "constructor21+",
  "id": "constructor21",
  "level": 3
}, {
  "value": "getAnimationController21+",
  "id": "getanimationcontroller21",
  "level": 3
}, {
  "value": "AnimationController21+",
  "id": "animationcontroller21",
  "level": 2
}, {
  "value": "start21+",
  "id": "start21",
  "level": 3
}, {
  "value": "stop21+",
  "id": "stop21",
  "level": 3
}, {
  "value": "resume21+",
  "id": "resume21",
  "level": 3
}, {
  "value": "pause21+",
  "id": "pause21",
  "level": 3
}, {
  "value": "getStatus21+",
  "id": "getstatus21",
  "level": 3
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
        id: "ohosarkuidrawabledescriptor-drawabledescriptor",
        children: "@ohos.arkui.drawableDescriptor (DrawableDescriptor)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块提供分层图标合成（包括前景，背景，蒙版），动图播放与控制，基础图像处理的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(630959)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "示例效果请以真机运行为准，当前DevEco Studio预览器不支持。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {\n  DrawableDescriptor,\n  LayeredDrawableDescriptor,\n  AnimatedDrawableDescriptor,\n  AnimationOptions,\n  AnimationController\n} from '@kit.ArkUI';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "drawabledescriptorloadedresult21",
      children: "DrawableDescriptorLoadedResult21+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传入的图片资源或地址的加载结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 21开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "imageWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片的宽度。  单位：px"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "imageHeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片的高度。  单位：px"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AnimatedDrawableDescriptor, AnimationOptions, DrawableDescriptor, DrawableDescriptorLoadedResult } from '@kit.ArkUI';\n\nlet options: AnimationOptions = { duration: 2000, iterations: 1 };\nlet drawable: DrawableDescriptor = new AnimatedDrawableDescriptor($r('app.media.gif'), options)\ntry {\n    // 可以提前手动加载动图资源到内存中。\n    let result: DrawableDescriptorLoadedResult = drawable.loadSync()\n    console.info(`load result = ${JSON.stringify(result)}`)\n} catch(e) {\n    console.error(\"load failed\")\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "drawabledescriptor",
      children: "DrawableDescriptor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["父类对象提供可重写的方法，包含：获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
        children: "PixelMap"
      }), "实例，图片资源加载能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getpixelmap",
      children: "getPixelMap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getPixelMap(): image.PixelMap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取PixelMap实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "image.PixelMap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PixelMap"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#layereddrawabledescriptor",
        children: "LayeredDrawableDescriptor"
      }), "中的示例代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "loadsync21",
      children: "loadSync21+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "loadSync(): DrawableDescriptorLoadedResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发起图片资源的同步加载，并返回加载结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 21开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#drawabledescriptorloadedresult21",
              children: "DrawableDescriptorLoadedResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片资源的加载结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-drawable-descriptor/errorcode-drawable-descriptor",
        children: "DrawableDescriptor错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "111001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "resource loading failed."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AnimatedDrawableDescriptor, DrawableDescriptor, DrawableDescriptorLoadedResult, AnimationOptions } from '@kit.ArkUI';\n\nlet options: AnimationOptions = { duration: 2000, iterations: 1 };\nlet drawable: DrawableDescriptor = new AnimatedDrawableDescriptor($r('app.media.gif'), options)\ntry {\n    // 可以提前手动加载动图资源到内存中\n    let result: DrawableDescriptorLoadedResult = drawable.loadSync()\n    console.info(`load result = ${JSON.stringify(result)}`)\n} catch(e) {\n    console.error(\"load failed\")\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "load21",
      children: "load21+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "load(): Promise<DrawableDescriptorLoadedResult>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发起图片资源的异步加载，并返回加载结果。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 21开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#drawabledescriptorloadedresult21",
              children: "DrawableDescriptorLoadedResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片资源的加载结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-drawable-descriptor/errorcode-drawable-descriptor",
        children: "DrawableDescriptor错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "111001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "resource loading failed."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {\n  AnimatedDrawableDescriptor,\n  DrawableDescriptor,\n  DrawableDescriptorLoadedResult,\n  AnimationOptions\n} from '@kit.ArkUI';\n\nlet options: AnimationOptions = { duration: 2000, iterations: 1 };\nlet drawable: DrawableDescriptor = new AnimatedDrawableDescriptor($r('app.media.gif'), options)\ndrawable.load().then((result: DrawableDescriptorLoadedResult) => {\n  console.info(`load result = ${JSON.stringify(result)}`)\n}).catch(() => {\n  console.info(`load failed`)\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pixelmapdrawabledescriptor12",
      children: "PixelMapDrawableDescriptor12+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持通过传入PixelMap创建PixelMapDrawableDescriptor对象。继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#drawabledescriptor",
        children: "DrawableDescriptor"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor12",
      children: "constructor12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(src?: image.PixelMap)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PixelMapDrawableDescriptor的构造函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "src"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "image.PixelMap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PixelMap类型参数，存储 PixelMap 图片数据。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "layereddrawabledescriptor",
      children: "LayeredDrawableDescriptor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当传入资源id或name为包含前景和背景资源的json文件时，生成LayeredDrawableDescriptor对象。继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#drawabledescriptor",
        children: "DrawableDescriptor"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "drawable.json位于项目工程entry/src/main/resources/base/media目录下。定义请参考："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"layered-image\":\n  {\n    \"background\" : \"$media:background\",\n    \"foreground\" : \"$media:foreground\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用json文件创建LayeredDrawableDescriptor，示例代码如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { DrawableDescriptor, LayeredDrawableDescriptor } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  private resManager = this.getUIContext().getHostContext()?.resourceManager;\n  // $r('app.media.drawable')需要替换为开发者所需的图像资源文件。\n  private layeredDrawableDescriptor: DrawableDescriptor | undefined =\n    this.resManager?.getDrawableDescriptor($r('app.media.drawable').id);\n\n  build() {\n    Row() {\n      Column() {\n        Image((this.layeredDrawableDescriptor instanceof LayeredDrawableDescriptor) ?\n          this.layeredDrawableDescriptor : undefined)\n        Image((this.layeredDrawableDescriptor instanceof LayeredDrawableDescriptor) ?\n          this.layeredDrawableDescriptor?.getForeground()?.getPixelMap() : undefined)\n      }.height('50%')\n    }.width('50%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用PixelMapDrawableDescriptor创建LayeredDrawableDescriptor，示例代码如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { DrawableDescriptor, LayeredDrawableDescriptor, PixelMapDrawableDescriptor } from '@kit.ArkUI';\nimport { image } from '@kit.ImageKit';\n\n@Entry\n@Component\nstruct Index {\n  @State fore1: image.PixelMap | undefined = undefined;\n  @State back1: image.PixelMap | undefined = undefined;\n\n  @State foregroundDraw: DrawableDescriptor | undefined = undefined;\n  @State backgroundDraw: DrawableDescriptor | undefined = undefined;\n  @State maskDraw: DrawableDescriptor | undefined = undefined;\n  @State maskPixel: image.PixelMap | undefined = undefined;\n  @State draw: LayeredDrawableDescriptor | undefined = undefined;\n\n  async aboutToAppear() {\n    // $r('app.media.foreground')需要替换为开发者所需的图像资源文件。\n    this.fore1 = await this.getPixmapFromMedia($r('app.media.foreground'));\n    // $r('app.media.background')需要替换为开发者所需的图像资源文件。\n    this.back1 = await this.getPixmapFromMedia($r('app.media.background'));\n    // $r('app.media.ohos_icon_mask')需要替换为开发者所需的图像资源文件。\n    this.maskPixel = await this.getPixmapFromMedia($r('app.media.ohos_icon_mask'));\n    // 使用PixelMapDrawableDescriptor创建LayeredDrawableDescriptor。\n    this.foregroundDraw = new PixelMapDrawableDescriptor(this.fore1);\n    this.backgroundDraw = new PixelMapDrawableDescriptor(this.back1);\n    this.maskDraw = new PixelMapDrawableDescriptor(this.maskPixel);\n    this.draw = new LayeredDrawableDescriptor(this.foregroundDraw,this.backgroundDraw,this.maskDraw);\n  }\n\n  build() {\n    Row() {\n      Column() {\n          Image(this.draw)\n            .width(300)\n            .height(300)\n      }.height('100%').justifyContent(FlexAlign.Center)\n    }.width('100%').height(\"100%\").backgroundColor(Color.Pink)\n  }\n  // 根据资源，通过图片框架获取pixelMap。\n  private async getPixmapFromMedia(resource: Resource) {\n    let unit8Array = await this.getUIContext().getHostContext()?.resourceManager?.getMediaContent(resource.id);\n    let imageSource = image.createImageSource(unit8Array?.buffer.slice(0, unit8Array.buffer.byteLength));\n    let createPixelMap: image.PixelMap = await imageSource.createPixelMap({\n      desiredPixelFormat: image.PixelMapFormat.BGRA_8888\n    });\n    await imageSource.release();\n    return createPixelMap;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor12-1",
      children: "constructor12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(foreground?: DrawableDescriptor, background?: DrawableDescriptor, mask?: DrawableDescriptor)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LayeredDrawableDescriptor的构造函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "foreground"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#drawabledescriptor",
              children: "DrawableDescriptor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分层图标的前景图片选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "background"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#drawabledescriptor",
              children: "DrawableDescriptor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分层图标的背景图片选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mask"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#drawabledescriptor",
              children: "DrawableDescriptor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分层图标的遮罩选项。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getforeground",
      children: "getForeground"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getForeground(): DrawableDescriptor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取前景的DrawableDescriptor对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#drawabledescriptor",
              children: "DrawableDescriptor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DrawableDescriptor对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { DrawableDescriptor, LayeredDrawableDescriptor } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State drawableDescriptor: DrawableDescriptor | undefined = undefined;\n\n  private getForeground(): DrawableDescriptor | undefined {\n    let resManager = this.getUIContext().getHostContext()?.resourceManager;\n    // $r('app.media.drawable')需要替换为开发者所需的图像资源文件。\n    let drawable: DrawableDescriptor | undefined = resManager?.getDrawableDescriptor($r('app.media.drawable').id);\n    if (!drawable) {\n      return undefined;\n    }\n    if (drawable instanceof LayeredDrawableDescriptor) {\n      let layeredDrawableDescriptor = (drawable as LayeredDrawableDescriptor).getForeground();\n      return layeredDrawableDescriptor;\n    }\n    return undefined;\n  }\n\n  aboutToAppear(): void {\n    this.drawableDescriptor = this.getForeground();\n  }\n\n  build() {\n    RelativeContainer() {\n      if (this.drawableDescriptor) {\n        Image(this.drawableDescriptor)\n          .width(100)\n          .height(100)\n          .borderWidth(1)\n          .backgroundColor(Color.Green);\n      }\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getbackground",
      children: "getBackground"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getBackground(): DrawableDescriptor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取背景的DrawableDescriptor对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#drawabledescriptor",
              children: "DrawableDescriptor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DrawableDescriptor对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { DrawableDescriptor, LayeredDrawableDescriptor } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State drawableDescriptor: DrawableDescriptor | undefined = undefined;\n\n  private getBackground(): DrawableDescriptor | undefined {\n    let resManager = this.getUIContext().getHostContext()?.resourceManager;\n    // $r('app.media.drawable')需要替换为开发者所需的图像资源文件。\n    let drawable: DrawableDescriptor | undefined = resManager?.getDrawableDescriptor($r('app.media.drawable').id);\n    if (!drawable) {\n      return undefined;\n    }\n    let layeredDrawableDescriptor = (drawable as LayeredDrawableDescriptor).getBackground();\n    return layeredDrawableDescriptor;\n  }\n\n  aboutToAppear(): void {\n    this.drawableDescriptor = this.getBackground();\n  }\n\n  build() {\n    RelativeContainer() {\n      if (this.drawableDescriptor) {\n        Image(this.drawableDescriptor)\n          .width(100)\n          .height(100)\n      }\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getmask",
      children: "getMask"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getMask(): DrawableDescriptor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取蒙版的DrawableDescriptor对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#drawabledescriptor",
              children: "DrawableDescriptor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DrawableDescriptor对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { DrawableDescriptor, LayeredDrawableDescriptor } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State drawableDescriptor: DrawableDescriptor | undefined = undefined;\n\n  private getMask(): DrawableDescriptor | undefined {\n    let resManager = this.getUIContext().getHostContext()?.resourceManager;\n    // $r('app.media.drawable')需要替换为开发者所需的图像资源文件。\n    let drawable: DrawableDescriptor | undefined = resManager?.getDrawableDescriptor($r('app.media.drawable').id);\n    if (!drawable) {\n      return undefined;\n    }\n    let layeredDrawableDescriptor = (drawable as LayeredDrawableDescriptor).getMask();\n    return layeredDrawableDescriptor;\n  }\n\n  aboutToAppear(): void {\n    this.drawableDescriptor = this.getMask();\n  }\n\n  build() {\n    RelativeContainer() {\n      if (this.drawableDescriptor) {\n        Image(this.drawableDescriptor)\n          .width(100)\n          .height(100)\n      }\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getmaskclippath",
      children: "getMaskClipPath"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static getMaskClipPath(): string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LayeredDrawableDescriptor的静态方法，获取系统内置的裁切路径参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回裁切路径的命令字符串。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { DrawableDescriptor, LayeredDrawableDescriptor } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      Column() {\n        // $r('app.media.icon')需要替换为开发者所需的图像资源文件。\n        Image($r('app.media.icon'))\n          .width('200px').height('200px')\n          .clipShape(new Path({commands:LayeredDrawableDescriptor.getMaskClipPath()}))\n        Text(`获取系统内置的裁剪路径参数：`)\n          .fontWeight(800)\n        Text(JSON.stringify(LayeredDrawableDescriptor.getMaskClipPath()))\n          .padding({ left: 20, right: 20 })\n      }.height('100%').justifyContent(FlexAlign.Center)\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setblendmode23",
      children: "setBlendMode23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setBlendMode(mode: drawing.BlendMode): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置LayeredDrawableDescriptor的混合模式。对同一LayeredDrawableDescriptor对象多次调用setBlendMode接口时，仅在绘制完成前的最后一次调用生效。该接口不支持动态切换。LayeredDrawableDescriptor的默认绘制顺序为背景、蒙版、前景。设置了混合模式后，绘制顺序变为背景、前景、蒙版。若设置的值无效，则按照未设置混合模式进行绘制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-e/arkts-apis-graphics-drawing-e#blendmode",
              children: "drawing.BlendMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "混合模式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { DrawableDescriptor, LayeredDrawableDescriptor } from '@kit.ArkUI';\nimport { image } from '@kit.ImageKit';\nimport { drawing } from '@kit.ArkGraphics2D';\n\n@Entry\n@Component\nstruct Index {\n  @State drawableDescriptor: DrawableDescriptor | undefined = undefined;\n\n  private setBlendMode(blendMode: drawing.BlendMode): DrawableDescriptor | undefined {\n    let resManager = this.getUIContext().getHostContext()?.resourceManager;\n    // $r('app.media.drawable')需要替换为开发者提供的分层图标文件。\n    let drawable: DrawableDescriptor | undefined = resManager?.getDrawableDescriptor($r('app.media.drawable').id);\n    if (!drawable) {\n      return undefined;\n    }\n    let layeredDrawableDescriptor = drawable as LayeredDrawableDescriptor;\n    layeredDrawableDescriptor.setBlendMode(blendMode);\n    return layeredDrawableDescriptor;\n  }\n\n  aboutToAppear(): void {\n    this.drawableDescriptor = this.setBlendMode(drawing.BlendMode.SRC_OVER);\n  }\n\n  build() {\n    RelativeContainer() {\n      if (this.drawableDescriptor) {\n        Image(this.drawableDescriptor)\n          .width(100)\n          .height(100)\n      }\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "animationoptions12",
      children: "AnimationOptions12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动画播放参数。包括播放时延，迭代次数，单帧播放时间，是否自动播放。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置图片数组播放总时间。  PixelMap数组的默认值是每张图片播放1秒。本地图片或者应用资源的默认值是图片资源中携带的播放时延。  单位：毫秒  取值范围：[0, +∞)  设置负数取默认值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iterations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置图片数组播放次数。  值为-1时表示无限播放，值为0时表示不播放，值大于0时表示有限的播放次数。  默认值为1。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "frameDurations21+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置动图中的单帧播放时间。不设置则按照总时间播放。  设置的优先级高于duration，即同时设置了duration和frameDurations时，duration不生效。  当设置的frameDurations长度与图片的数量不一致时，按照总时间播放。  单位：毫秒  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 21开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "autoPlay21+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置动图是否自动播放。  true表示自动播放，false表示不自动播放。  默认值为true。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 21开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AnimationOptions, AnimatedDrawableDescriptor } from '@kit.ArkUI';\nimport { image } from '@kit.ImageKit';\n\n@Entry\n@Component\nstruct Example {\n  pixelMaps: Array<image.PixelMap> = [];\n  // 设置了4张图，同时设置4张图的duration。\n  options: AnimationOptions = {\n    duration: 2000,\n    iterations: 1,\n    frameDurations: [20, 30, 40, 50],\n    autoPlay: true\n  };\n  @State animated?: DrawableDescriptor = undefined;\n\n  aboutToAppear() {\n    // $r('app.media.png1')需要替换为开发者所需的图像资源文件。\n    this.pixelMaps.push(this.getPixmapFromMedia($r('app.media.png1')));\n     // $r('app.media.png2')需要替换为开发者所需的图像资源文件。\n    this.pixelMaps.push(this.getPixmapFromMedia($r('app.media.png2')));\n     // $r('app.media.png3')需要替换为开发者所需的图像资源文件。\n    this.pixelMaps.push(this.getPixmapFromMedia($r('app.media.png3')));\n     // $r('app.media.png4')需要替换为开发者所需的图像资源文件。\n    this.pixelMaps.push(this.getPixmapFromMedia($r('app.media.png4')));\n    this.animated = new AnimatedDrawableDescriptor(this.pixelMaps, this.options);\n  }\n\n  build() {\n    Column() {\n      Row() {\n        Image(this.animated)\n          .width(100)\n          .height(100)\n      }\n    }\n  }\n\n  private getPixmapFromMedia(resource: Resource) {\n    let unit8Array = this.getUIContext().getHostContext()?.resourceManager?.getMediaContentSync(resource.id);\n    let imageSource = image.createImageSource(unit8Array?.buffer.slice(0, unit8Array.buffer.byteLength));\n    let pixelMap: image.PixelMap = imageSource.createPixelMapSync({\n      desiredPixelFormat: image.PixelMapFormat.RGBA_8888\n    });\n    imageSource.release();\n    return pixelMap;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "animateddrawabledescriptor12",
      children: "AnimatedDrawableDescriptor12+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image",
        children: "Image"
      }), "组件播放PixelMap数组或动图资源时传入AnimatedDrawableDescriptor对象，该对象继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#drawabledescriptor",
        children: "DrawableDescriptor"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor12-2",
      children: "constructor12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(pixelMaps: Array<image.PixelMap>, options?: AnimationOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AnimatedDrawableDescriptor的构造函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pixelMaps"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "image.PixelMap"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PixelMap 数组类型参数，存储 PixelMap 图片数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#animationoptions12",
              children: "AnimationOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动画控制选项。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor21",
      children: "constructor21+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(src: ResourceStr | Array<image.PixelMap>, options?: AnimationOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AnimatedDrawableDescriptor的构造函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 21开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "src"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "image.PixelMap"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#animationoptions12",
              children: "AnimationOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动画控制参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AnimationOptions, AnimatedDrawableDescriptor } from '@kit.ArkUI';\nimport { fileUri } from '@kit.CoreFileKit';\n\n@Entry\n@Component\nstruct Example {\n  options: AnimationOptions = { duration: 1000, iterations: -1, autoPlay: false };\n  // 支持传入file://xx沙箱路径和应用资源Resource。\n  @State animated1: AnimatedDrawableDescriptor = new AnimatedDrawableDescriptor($r('app.media.gif'), this.options);\n  @State animated2: AnimatedDrawableDescriptor | undefined = undefined;\n\n  aboutToAppear() {\n    let files = this.getUIContext().getHostContext()?.filesDir\n    let originPath = files + \"/flower.gif\"\n    let resultPath = fileUri.getUriFromPath(originPath)\n    this.animated2 = new AnimatedDrawableDescriptor(resultPath, { iterations: -1 })\n  }\n\n  build() {\n    Column() {\n      Row() {\n        Image(this.animated1).width(100).height(100)\n        Image(this.animated2).width(100).height(100)\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getanimationcontroller21",
      children: "getAnimationController21+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAnimationController(id?: string): AnimationController | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取动画控制器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 21开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["组件的id。  当", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image",
              children: "Image"
            }), "组件与AnimatedDrawableDescriptor确保1比1持有（仅传入一个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image",
              children: "Image"
            }), "组件）时，id非必填；  若同一AnimatedDrawableDescriptor需绑定多个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image",
              children: "Image"
            }), "组件，则必须设置唯一id以准确获取对应组件的动画控制器（唯一性由开发者保证）。  此规则基于动画系统设计原则：动画数据可多组件共享，但各组件动画独立运行，AnimationController与组件严格1比1持有关系（一个组件一个AnimationController对象）。  另外，", (0,jsx_runtime.jsx)(_components.a, {
              href: "#animateddrawabledescriptor12",
              children: "AnimatedDrawableDescriptor"
            }), "支持不可见时自动暂停播放功能，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-visible-area-change-event/ts-universal-component-visible-area-change-event#onvisibleareachange",
              children: "onVisibleAreaChange"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#animationcontroller21",
              children: "AnimationController"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image",
        children: "Image"
      }), "组件与AnimatedDrawableDescriptor保持1比1持有关系，示例代码如下。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AnimationOptions, AnimatedDrawableDescriptor, AnimationController } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Example {\n  options: AnimationOptions = { duration: 1000, iterations: -1, autoPlay: false };\n  // $r('app.media.gif')需要替换为开发者所需的图像资源文件。\n  @State animated: AnimatedDrawableDescriptor = new AnimatedDrawableDescriptor($r('app.media.gif'), this.options);\n\n  build() {\n    Column() {\n      Image(this.animated)\n        .width(100)\n        .height(100)\n        .borderColor(Color.Red)\n        .borderWidth(1)\n      Button(\"start\")\n        .onClick(() => {\n          let controller = this.animated.getAnimationController()\n          controller?.start()\n        })\n      Button(\"stop\")\n        .onClick(() => {\n          let controller = this.animated.getAnimationController()\n          controller?.stop()\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image",
        children: "Image"
      }), "组件与AnimatedDrawableDescriptor保持1比N持有关系，示例代码如下。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AnimationOptions, AnimatedDrawableDescriptor, AnimationController } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Example {\n  options: AnimationOptions = { duration: 1000, iterations: -1, autoPlay: false };\n  // $r('app.media.gif')需要替换为开发者所需的图像资源文件。\n  @State animated: AnimatedDrawableDescriptor = new AnimatedDrawableDescriptor($r('app.media.gif'), this.options);\n\n  build() {\n    Column() {\n      Image(this.animated)\n        .width(100)\n        .height(100)\n        .borderColor(Color.Red)\n        .borderWidth(1)\n        .id(\"Component1\")\n      Image(this.animated)\n        .width(100)\n        .height(100)\n        .borderColor(Color.Red)\n        .borderWidth(1)\n      Button(\"start\")\n        .onClick(() => {\n          let controller = this.animated.getAnimationController(\"Component1\")\n          controller?.start()\n        })\n      Button(\"stop\")\n        .onClick(() => {\n          let controller = this.animated.getAnimationController(\"Component1\")\n          controller?.stop()\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "animationcontroller21",
      children: "AnimationController21+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动画控制器对象。包含控制动画播放、停止、恢复、暂停和状态查询等方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "start21",
      children: "start21+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "start(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从首帧开始播放。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 21开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AnimationOptions, AnimatedDrawableDescriptor } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Example {\n  options: AnimationOptions = { duration: 1000, iterations: -1, autoPlay: false };\n  // $r('app.media.gif')需要替换为开发者所需的图像资源文件。\n  @State animated: AnimatedDrawableDescriptor = new AnimatedDrawableDescriptor($r('app.media.gif'), this.options);\n\n  build() {\n    Column() {\n      Image(this.animated)\n        .width(100)\n        .height(100)\n        .onClick(() => {\n          let controller = this.animated.getAnimationController()\n          // 可以通过start启动动图播放。\n          controller?.start()\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stop21",
      children: "stop21+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stop(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "停止动图的播放并回到首帧。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 21开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AnimationOptions, AnimatedDrawableDescriptor } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Example {\n  options: AnimationOptions = { duration: 1000, iterations: -1 };\n  // $r('app.media.gif')需要替换为开发者所需的图像资源文件。\n  @State animated: AnimatedDrawableDescriptor = new AnimatedDrawableDescriptor($r('app.media.gif'), this.options);\n\n  build() {\n    Column() {\n      Image(this.animated)\n        .width(100)\n        .height(100)\n        .onClick(() => {\n          let controller = this.animated.getAnimationController()\n          // 可以在动图播放时，通过stop停下播放并回到动图的首帧。\n          controller?.stop()\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume21",
      children: "resume21+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "resume(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在当前帧恢复播放动图。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 21开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AnimationOptions, AnimatedDrawableDescriptor } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Example {\n  options: AnimationOptions = { duration: 1000, iterations: -1 };\n  // $r('app.media.gif')需要替换为开发者所需的图像资源文件。\n  @State animated: AnimatedDrawableDescriptor = new AnimatedDrawableDescriptor($r('app.media.gif'), this.options);\n\n  build() {\n    Column() {\n      Image(this.animated)\n        .width(100)\n        .height(100)\n        .onClick(() => {\n          let controller = this.animated.getAnimationController()\n          // 可以在动图暂停或停止时从当前帧开始播放。\n          controller?.resume()\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pause21",
      children: "pause21+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pause(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "暂停动图的播放，保持在当前帧。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 21开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AnimationOptions, AnimatedDrawableDescriptor } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Example {\n  options: AnimationOptions = { duration: 1000, iterations: -1 };\n  // $r('app.media.gif')需要替换为开发者所需的图像资源文件。\n  @State animated: AnimatedDrawableDescriptor = new AnimatedDrawableDescriptor($r('app.media.gif'), this.options);\n\n  build() {\n    Column() {\n      Image(this.animated)\n        .width(100)\n        .height(100)\n        .onClick(() => {\n          let controller = this.animated.getAnimationController()\n          // 可以在动图播放时，暂停播放并保持在当前帧。\n          controller?.pause()\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getstatus21",
      children: "getStatus21+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getStatus(): AnimationStatus"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前动图播放的状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 21开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#animationstatus",
              children: "AnimationStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动图的播放状态。包含4种状态：初始态、播放态、暂停态、停止态。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AnimationOptions, AnimatedDrawableDescriptor } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Example {\n  options: AnimationOptions = { duration: 1000, iterations: -1 };\n  // $r('app.media.gif')需要替换为开发者所需的图像资源文件。\n  @State animated: AnimatedDrawableDescriptor = new AnimatedDrawableDescriptor($r('app.media.gif'), this.options);\n\n  statusToString(status: AnimationStatus): string {\n    switch (status) {\n      case AnimationStatus.Initial:\n        return \"Initial\"\n      case AnimationStatus.Running:\n        return \"Running\"\n      case AnimationStatus.Paused:\n        return \"Paused\"\n      case AnimationStatus.Stopped:\n        return \"Stopped\"\n      default:\n        return \"Error\"\n    }\n  }\n\n  build() {\n    Column() {\n      Image(this.animated)\n        .width(100)\n        .height(100)\n        .onClick(() => {\n          let controller = this.animated.getAnimationController()\n          // 获取当前动画的状态。\n          let status = controller?.getStatus()\n          console.info(`animation status = ${this.statusToString(status)}`)\n        })\n    }\n  }\n}\n"
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
630959(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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