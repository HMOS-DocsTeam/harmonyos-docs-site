"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["496529"], {
964388(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_form_selection_arkts_advanced_components_arcbutton_arkts_advanced_components_arcbutton_md_1af_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-form-selection-arkts-advanced-components-arcbutton-arkts-advanced-components-arcbutton-md-1af.json
var site_docs_arkui_arkts_ui_development_arkts_form_selection_arkts_advanced_components_arcbutton_arkts_advanced_components_arcbutton_md_1af_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-form-selection/arkts-advanced-components-arcbutton/arkts-advanced-components-arcbutton","title":"弧形按钮 (ArcButton)(圆形屏幕推荐使用)","description":"从API version 18开始支持ArcButton。ArcButton是弧形按钮组件，推荐用于圆形屏幕。为用户提供强调、普通、警告等样式按钮。具体用法请参考ArcButton。","source":"@site/docs/arkui/arkts-ui-development/arkts-form-selection/arkts-advanced-components-arcbutton/arkts-advanced-components-arcbutton.md","sourceDirName":"arkui/arkts-ui-development/arkts-form-selection/arkts-advanced-components-arcbutton","slug":"/arkui/arkts-ui-development/arkts-form-selection/arkts-advanced-components-arcbutton/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-form-selection/arkts-advanced-components-arcbutton/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"弧形按钮 (ArcButton)(圆形屏幕推荐使用)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-advanced-components-arcbutton","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"按钮 (Button)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-form-selection/arkts-common-components-button/"},"next":{"title":"单选框 (Radio)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-form-selection/arkts-common-components-radio-button/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-form-selection/arkts-advanced-components-arcbutton/arkts-advanced-components-arcbutton.md


const frontMatter = {
	title: '弧形按钮 (ArcButton)(圆形屏幕推荐使用)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-advanced-components-arcbutton',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '弧形按钮 (ArcButton)(圆形屏幕推荐使用)';

const assets = {

};



const toc = [{
  "value": "创建按钮",
  "id": "创建按钮",
  "level": 2
}, {
  "value": "设置按钮类型",
  "id": "设置按钮类型",
  "level": 2
}, {
  "value": "自定义样式",
  "id": "自定义样式",
  "level": 2
}, {
  "value": "添加事件",
  "id": "添加事件",
  "level": 2
}, {
  "value": "场景示例",
  "id": "场景示例",
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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "弧形按钮-arcbutton圆形屏幕推荐使用",
        children: "弧形按钮 (ArcButton)(圆形屏幕推荐使用)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18开始支持ArcButton。ArcButton是弧形按钮组件，推荐用于圆形屏幕。为用户提供强调、普通、警告等样式按钮。具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ohos-arkui-advanced-arcbutton/ohos-arkui-advanced-arcbutton",
        children: "ArcButton"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建按钮",
      children: "创建按钮"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArcButton通过调用以下接口来创建。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArcButton({\n  options: new ArcButtonOptions({\n    label: 'OK',\n    position: ArcButtonPosition.TOP_EDGE,\n    styleMode: ArcButtonStyleMode.EMPHASIZED_LIGHT,\n  // ···\n  })\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["其中，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ohos-arkui-advanced-arcbutton/ohos-arkui-advanced-arcbutton#arcbuttonoptions",
        children: "label"
      }), "设置按钮文字，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ohos-arkui-advanced-arcbutton/ohos-arkui-advanced-arcbutton#arcbuttonoptions",
        children: "position"
      }), "设置按钮类型，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ohos-arkui-advanced-arcbutton/ohos-arkui-advanced-arcbutton#arcbuttonoptions",
        children: "styleMode"
      }), "设置按钮样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(102042)/* ["default"] */.A) + "",
        width: "316",
        height: "314"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置按钮类型",
      children: "设置按钮类型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArcButton有上弧形按钮和下弧形按钮两种类型。使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ohos-arkui-advanced-arcbutton/ohos-arkui-advanced-arcbutton#arcbuttonoptions",
        children: "position"
      }), "设置按钮类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "下弧形按钮（默认类型）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过将", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ohos-arkui-advanced-arcbutton/ohos-arkui-advanced-arcbutton#arcbuttonoptions",
            children: "position"
          }), "属性设置为ArcButtonPosition.BOTTOM_EDGE，可以将按钮设置为下弧形按钮。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ArcButton({\n  options: new ArcButtonOptions({\n    label: 'OK',\n    position: ArcButtonPosition.BOTTOM_EDGE,\n    styleMode: ArcButtonStyleMode.EMPHASIZED_LIGHT,\n  // ···\n  })\n\n})\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(458052)/* ["default"] */.A) + "",
            width: "316",
            height: "316"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "上弧形按钮。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过将", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ohos-arkui-advanced-arcbutton/ohos-arkui-advanced-arcbutton#arcbuttonoptions",
            children: "position"
          }), "属性设置为ArcButtonPosition.TOP_EDGE，可以将按钮设置为上弧形按钮。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ArcButton({\n  options: new ArcButtonOptions({\n    label: 'OK',\n    position: ArcButtonPosition.TOP_EDGE,\n    styleMode: ArcButtonStyleMode.EMPHASIZED_LIGHT,\n  // ···\n  })\n})\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(54445)/* ["default"] */.A) + "",
            width: "316",
            height: "312"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义样式",
      children: "自定义样式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置背景色。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ohos-arkui-advanced-arcbutton/ohos-arkui-advanced-arcbutton#arcbuttonoptions",
            children: "backgroundColor"
          }), "属性设置按钮的背景色。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ArcButton({\n  options: new ArcButtonOptions({\n    label: 'OK',\n    styleMode: ArcButtonStyleMode.CUSTOM,\n    backgroundColor: ColorMetrics.resourceColor('#707070')\n  })\n})\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(806774)/* ["default"] */.A) + "",
            width: "316",
            height: "316"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置文本颜色。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ohos-arkui-advanced-arcbutton/ohos-arkui-advanced-arcbutton#arcbuttonoptions",
            children: "fontColor"
          }), "属性设置按钮的文本颜色。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ArcButton({\n  options: new ArcButtonOptions({\n    label: 'OK',\n    styleMode: ArcButtonStyleMode.CUSTOM,\n    backgroundColor: ColorMetrics.resourceColor('#E84026'),\n    fontColor: ColorMetrics.resourceColor('#707070')\n  })\n})\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(142944)/* ["default"] */.A) + "",
            width: "316",
            height: "316"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置阴影颜色。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ohos-arkui-advanced-arcbutton/ohos-arkui-advanced-arcbutton#arcbuttonoptions",
            children: "shadowEnabled"
          }), "属性启用按钮阴影，并通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ohos-arkui-advanced-arcbutton/ohos-arkui-advanced-arcbutton#arcbuttonoptions",
            children: "shadowColor"
          }), "属性设置按钮的阴影颜色。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ArcButton({\n  options: new ArcButtonOptions({\n    label: 'OK',\n    shadowEnabled: true,\n    shadowColor: ColorMetrics.resourceColor('#ffec1022')\n  })\n})\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(371739)/* ["default"] */.A) + "",
            width: "316",
            height: "314"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加事件",
      children: "添加事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "绑定onClick事件来响应点击操作后的自定义行为。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ArcButton({\n  options: new ArcButtonOptions({\n    label: 'OK',\n  // ···\n    onClick: () => {\n      hilog.info(DOMAIN, TAG, 'ArcButton onClick');\n    },\n  })\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "绑定onTouch事件来响应触摸操作后的自定义行为。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ArcButton({\n  options: new ArcButtonOptions({\n    label: 'OK',\n  // ···\n    onTouch: (event: TouchEvent) => {\n      hilog.info(DOMAIN, TAG, 'ArcButton onTouch');\n    }\n  })\n\n})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景示例",
      children: "场景示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在亮度设置界面，进度条显示当前亮度为30%。点击重置后，亮度值将被重置为默认的50%。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["运行该示例推荐在Wearable设备上以获得最佳显示效果，同时支持在其他设备上运行。若要在Wearable设备上运行，在src/main目录下的工程配置文件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json5"
      }), "中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#devicetypes%E6%A0%87%E7%AD%BE",
        children: "deviceTypes标签"
      }), "内配置wearable。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"module\": {\n  // ···\n  \"deviceTypes\": [\n    \"wearable\"\n  ],\n  // ···\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { LengthMetrics, LengthUnit, ArcButton, ArcButtonOptions, ArcButtonStyleMode } from '@kit.ArkUI';\n\nconst BRIGHT_NESS_VALUE = 30;\nconst BRIGHT_NESS_VALUE_DEFAULT = 50;\n\n@Entry\n@ComponentV2\nstruct BrightnessPage {\n  @Local brightnessValue: number = BRIGHT_NESS_VALUE;\n  private defaultBrightnessValue: number = BRIGHT_NESS_VALUE_DEFAULT;\n\n  build() {\n    RelativeContainer() {\n      // 请将$r('app.string.Brightness')替换为实际资源文件，在本示例中该资源文件的value值为\"设置亮度\"\n      Text($r('app.string.Brightness'))\n        .fontColor(Color.White)\n        .id('id_brightness_set_text')\n        .fontSize(24)\n        .margin({ top: 16 })\n        .alignRules({\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n\n      Text(`${this.brightnessValue} %`)\n        .fontColor(Color.White)\n        .id('id_brightness_min_text')\n        .margin({ left: 16 })\n        .alignRules({\n          start: { anchor: '__container__', align: HorizontalAlign.Start },\n          center: { anchor: '__container__', align: VerticalAlign.Center }\n        })\n\n      Slider({\n        value: this.brightnessValue,\n        min: 0,\n        max: 100,\n        style: SliderStyle.InSet\n      })\n        .blockColor('#191970')\n        .trackColor('#ADD8E6')\n        .selectedColor('#4169E1')\n        .width(150)\n        .id('id_brightness_slider')\n        .margin({ left: 16, right: 16 })\n        .onChange((value: number, mode: SliderChangeMode) => {\n          this.brightnessValue = value;\n        })\n        .alignRules({\n          center: { anchor: 'id_brightness_min_text', align: VerticalAlign.Center },\n          start: { anchor: 'id_brightness_min_text', align: HorizontalAlign.End }\n        })\n\n      ArcButton({\n        options: new ArcButtonOptions({\n          // 请将$r('app.string.Reset')替换为实际资源文件，在本示例中该资源文件的value值为\"重置\"\n          label: $r('app.string.Reset'),\n          styleMode: ArcButtonStyleMode.EMPHASIZED_LIGHT,\n          fontSize: new LengthMetrics(19, LengthUnit.FP),\n          onClick: () => {\n            this.brightnessValue = this.defaultBrightnessValue;\n          }\n        })\n      })\n        .alignRules({\n          middle: { anchor: '__container__', align: HorizontalAlign.Center },\n          bottom: { anchor: '__container__', align: VerticalAlign.Bottom }\n        })\n    }\n    .height('100%')\n    .width('100%')\n    .backgroundColor(Color.Black)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(251575)/* ["default"] */.A) + "",
        width: "316",
        height: "320"
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
806774(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437927-1c4e1b7b25d383f60c030c934174c65e.png");

},
102042(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957880-4c5baa8a63cfab0739ca5dff99d8c8ae.png");

},
458052(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477881-18d3ead7006552096f7aabede5489d95.png");

},
251575(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798234-c130a3f3e6504294faf21b8a0580411d.png");

},
54445(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798232-89f62257f7a357afce9e91c482643d55.png");

},
142944(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957882-380471f34355a9647254d328b33ded8e.png");

},
371739(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477883-2f6bbce3881a12be2cc5b1c4a8a03f87.png");

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