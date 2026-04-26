"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["19981"], {
420856(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_vision_kit_guide_vision_imageanalyzer_vision_imageanalyzer_md_681_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-vision-kit-guide-vision-imageanalyzer-vision-imageanalyzer-md-681.json
var site_docs_vision_kit_guide_vision_imageanalyzer_vision_imageanalyzer_md_681_namespaceObject = JSON.parse('{"id":"vision-kit-guide/vision-imageanalyzer/vision-imageanalyzer","title":"AI识图","description":"场景介绍","source":"@site/docs/vision-kit-guide/vision-imageanalyzer/vision-imageanalyzer.md","sourceDirName":"vision-kit-guide/vision-imageanalyzer","slug":"/vision-kit-guide/vision-imageanalyzer/","permalink":"/harmonyos-docs-site/vision-kit-guide/vision-imageanalyzer/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"AI识图","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/vision-imageanalyzer","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"文档扫描","permalink":"/harmonyos-docs-site/vision-kit-guide/vision-documentscanner/"},"next":{"title":"个人数据处理说明","permalink":"/harmonyos-docs-site/vision-kit-guide/visionkit-personal-data/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/vision-kit-guide/vision-imageanalyzer/vision-imageanalyzer.md


const frontMatter = {
	title: 'AI识图',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/vision-imageanalyzer',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'AI识图';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "开发实例",
  "id": "开发实例",
  "level": 2
}, {
  "value": "Index.ets",
  "id": "indexets",
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
        id: "ai识图",
        children: "AI识图"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AI识图是通过聚合OCR（Optical Character Recognition）、主体分割、实体识别、多目标识别等AI能力，提供场景化的文本识别、主体分割、识图搜索功能。AI识图功能主开关入口在基础控件API列表中，如果您接受AI识图默认的交互和功能，仅需使用基础控件提供的相关使能接口打开功能开关即可。该文档配套的API配合基础控件使用，主要满足您的定制诉求，帮助您完成AI识图功能交互上的细粒度控制，获取文本识别、图像分割等分析结果以便您进行扩展业务的开发，目前支持的基础控件范围包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image#enableanalyzer11",
        children: "Image"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-media-components-video/ts-media-components-video#enableanalyzer12",
        children: "Video"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent#enableanalyzer12",
        children: "XComponent"
      }), "。其中，配合Image控件可完成静态图片上的识图功能，配合Video控件可完成视频播放暂停帧的识图功能，配合XComponent可完成自定义渲染等场景下的图像的识图功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "识图功能提供如下能力："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "识别文字。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户长按文本选取文字或持续长按文本中的电话号码、邮箱、网址、地址、时间等实体，可触发对应实体的快捷操作，如持续长按文本中的时间，可触发\"新建日程\"快捷操作入口。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "识图搜索。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户抠图后可基于抠出的主体进行识图搜索，开发者也可以主动触发目标标识，触发后会识别图中的动物、植物、建筑物等目标并用相应的ICON标识，用户点击ICON也可以进行识图搜索，搜索结果会以模态窗的方式为用户呈现。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "主体分割。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户长按主体分割，分割后用户可以完成复制，分享，全选，识图搜索等功能。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "AIButton。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "AIButton承载了电话号码、邮箱、网址、地址、时间等实体的显性下划线标识（点击后出现快捷操作菜单），原图翻译（系统设置语种与图片上文本语种不一致且能将图中文本翻译为系统当前设置的语种时出现），表格提取（图片中存在表格时出现）等功能特性。配置AIButton属性可见后，会对图片进行预分析，当图片中存在文本且文本区域大于图片区域的5%时AIButton才会显示。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "识图功能提供如下建议："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI识图特性可帮助消费者从图片上获取更多的信息（长按抠图，长按选取文本，长按实体识别等）。建议在大图预览场景都打开此能力，大图预览场景下用户对图片中的内容会更感兴趣，此时适时的提供识图服务契合用户体验场景，同时为用户提供最佳的识图交互体验。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI识图特性中的AIButton与图片中是否有文本存在关联，显性的提醒用户操作文本。开启AIButton会触发图片的预分析从而导致一定的功耗开销，建议开发者充分理解自身业务场景，预估目标用户图片内容分布，兼顾用户图片浏览体验和提供更高阶AI识图功能体验的情况下按需提供AIButton露出。例如，业务本身是辅助用户高效提取图片中的文本内容，开启AIButton将会提升用户文本提取的体验。业务本身更偏向于图片编辑，也可隐藏AIButton。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " AI识图示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(995837)/* ["default"] */.A) + "",
        width: "273",
        height: "566"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持的文本语种类型：简体中文、繁体中文、英文、维吾尔文、藏文。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持图片最小规格100*100分辨率。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["分析图像要求是静态非矢量图，即svg、gif等图像类型不支持分析，支持传入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
            children: "PixelMap"
          }), "进行分析，目前仅支持", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-e/arkts-apis-image-e#pixelmapformat7",
            children: "RGBA_8888"
          }), "类型。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持翻译的图片宽高最小比例为1:3（高度小于宽度的3倍），支持文本识别的图片宽高最小比例为1:7（高度小于宽度的7倍）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当前设备支持本能力可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-image-common/ts-image-common#getimageanalyzersupporttypes12",
            children: "getImageAnalyzerSupportTypes"
          }), "进行判断。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["返回格式为“SupportTypes: [主体识别功能枚举值,文字识别功能枚举值,对象查找功能枚举值]”，具体枚举值可参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-image-common/ts-image-common#imageanalyzertype12",
            children: "ImageAnalyzerType"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若返回“SupportTypes: []”，则说明当前设备不支持AI识图能力；若返回其他值，则说明当前设备支持AI识图能力。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct Index {\n  private aiController: visionImageAnalyzer.VisionImageAnalyzerController = new visionImageAnalyzer.VisionImageAnalyzerController()\n\n  build() {\n    Row() {\n      Button('getTypes')\n        .onClick(() => {\n          let SupportTypes = this.aiController.getImageAnalyzerSupportTypes()\n          console.info(`SupportTypes: ${JSON.stringify(SupportTypes)}`)\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将AI识图控件相关的类添加。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { visionImageAnalyzer } from '@kit.VisionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["初始化", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/vision-api/vision-arkts/vision-image-analyzer/vision-image-analyzer#visionimageanalyzercontroller",
            children: "VisionImageAnalyzerController"
          }), "对象。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController = new visionImageAnalyzer.VisionImageAnalyzerController();\nprivate isSupportImageAnalyzer: boolean = false;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "判断设备是否支持AI识图相关功能，若支持，添加订阅事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "aboutToAppear(): void {\n  let supportTypes = this.visionImageAnalyzerController.getImageAnalyzerSupportTypes();\n  if (supportTypes.length > 0) {\n    this.isSupportImageAnalyzer = true;\n    this.registerListener();\n  }\n}\n\nregisterListener(){\n  this.visionImageAnalyzerController.on('imageAnalyzerVisibilityChange', (visibility: visionImageAnalyzer.ImageAnalyzerVisibility) => {\n    console.info(\"DEMO_TAG\", `imageAnalyzerVisibilityChange result: ${JSON.stringify(visibility)}`)\n  })\n  this.visionImageAnalyzerController.on('textAnalysis', (text: string) => {\n    console.info(\"DEMO_TAG\", `textAnalysis result: ${JSON.stringify(text)}`)\n  })\n  this.visionImageAnalyzerController.on('selectedTextChange', (selectedText: string) => {\n    console.info(\"DEMO_TAG\", `selectedTextChange result: ${JSON.stringify(selectedText)}`)\n  })\n  this.visionImageAnalyzerController.on('subjectAnalysis', (subjects: visionImageAnalyzer.Subject[]) => {\n    console.info(\"DEMO_TAG\", `subjectAnalysis result: ${JSON.stringify(subjects)}`)\n  })\n  this.visionImageAnalyzerController.on('selectedSubjectsChange', (subjects: visionImageAnalyzer.Subject[]) => {\n    console.info(\"DEMO_TAG\", `selectedSubjectsChange result: ${JSON.stringify(subjects)}`)\n  })\n  this.visionImageAnalyzerController.on('analyzerFailed', (error: BusinessError) => {\n    console.error(\"DEMO_TAG\", `analyzerFailed result: ${JSON.stringify(error)}`)\n  })\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["绑定", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/vision-api/vision-arkts/vision-image-analyzer/vision-image-analyzer#visionimageanalyzercontroller",
            children: "VisionImageAnalyzerController"
          }), "对象，可以控制识图相关的交互。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "build() {\n  Stack() {\n    // 需要替换您自己的资源图片，存放在resources/base/media目录下,设置的types参数必须是上一步supportTypes里包含的\n    Image($r('app.media.img'), {\n      types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n      aiController: this.visionImageAnalyzerController\n    })\n      .width('100%')\n      .height('100%')\n      .enableAnalyzer(this.isSupportImageAnalyzer ? true: false)\n      .objectFit(ImageFit.Contain)\n  }.width('100%').height('100%')\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取消订阅事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "aboutToDisappear(): void {\n  this.visionImageAnalyzerController.off('imageAnalyzerVisibilityChange')\n  this.visionImageAnalyzerController.off('textAnalysis')\n  this.visionImageAnalyzerController.off('selectedTextChange')\n  this.visionImageAnalyzerController.off('subjectAnalysis')\n  this.visionImageAnalyzerController.off('selectedSubjectsChange')\n  this.visionImageAnalyzerController.off('analyzerFailed')\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发实例",
      children: "开发实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "indexets",
      children: "Index.ets"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\nimport { BusinessError } from '@kit.BasicServicesKit'\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController = new visionImageAnalyzer.VisionImageAnalyzerController()\n  private isSupportImageAnalyzer: boolean = false;\n  aboutToAppear(): void {\n    let supportTypes = this.visionImageAnalyzerController.getImageAnalyzerSupportTypes();\n    if (supportTypes.length > 0) {\n      this.isSupportImageAnalyzer = true;\n      this.registerListener();\n    }\n  }\n\n  registerListener(){\n    this.visionImageAnalyzerController.on('imageAnalyzerVisibilityChange', (visibility: visionImageAnalyzer.ImageAnalyzerVisibility) => {\n      console.info(\"DEMO_TAG\", `imageAnalyzerVisibilityChange result: ${JSON.stringify(visibility)}`)\n    })\n    this.visionImageAnalyzerController.on('textAnalysis', (text: string) => {\n      console.info(\"DEMO_TAG\", `textAnalysis result: ${JSON.stringify(text)}`)\n    })\n    this.visionImageAnalyzerController.on('selectedTextChange', (selectedText: string) => {\n      console.info(\"DEMO_TAG\", `selectedTextChange result: ${JSON.stringify(selectedText)}`)\n    })\n    this.visionImageAnalyzerController.on('subjectAnalysis', (subjects: visionImageAnalyzer.Subject[]) => {\n      console.info(\"DEMO_TAG\", `subjectAnalysis result: ${JSON.stringify(subjects)}`)\n    })\n    this.visionImageAnalyzerController.on('selectedSubjectsChange', (subjects: visionImageAnalyzer.Subject[]) => {\n      console.info(\"DEMO_TAG\", `selectedSubjectsChange result: ${JSON.stringify(subjects)}`)\n    })\n    this.visionImageAnalyzerController.on('analyzerFailed', (error: BusinessError) => {\n      console.error(\"DEMO_TAG\", `analyzerFailed result: ${JSON.stringify(error)}`)\n    })\n  }\n  build() {\n    Stack() {\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(this.isSupportImageAnalyzer ? true : false)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n    aboutToDisappear(): void {\n      this.visionImageAnalyzerController.off('imageAnalyzerVisibilityChange')\n      this.visionImageAnalyzerController.off('textAnalysis')\n      this.visionImageAnalyzerController.off('selectedTextChange')\n      this.visionImageAnalyzerController.off('subjectAnalysis')\n      this.visionImageAnalyzerController.off('selectedSubjectsChange')\n      this.visionImageAnalyzerController.off('analyzerFailed')\n    }\n}\n"
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
995837(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439399-79bd314e1c248c9892b6e9200a6a16de.png");

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