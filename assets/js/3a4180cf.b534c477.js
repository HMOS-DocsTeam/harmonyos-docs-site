"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["378726"], {
779365(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_arkts_ui_ui_interface_arkui_js_apis_arkui_attributeupdater_js_apis_arkui_attributeupdater_md_3a4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-arkts-ui-ui-interface-arkui-js-apis-arkui-attributeupdater-js-apis-arkui-attributeupdater-md-3a4.json
var site_docs_ref_arkui_api_arkui_arkts_ui_ui_interface_arkui_js_apis_arkui_attributeupdater_js_apis_arkui_attributeupdater_md_3a4_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-attributeupdater/js-apis-arkui-attributeupdater","title":"AttributeUpdater","description":"将属性直接设置给组件，无需标记为状态变量即可直接触发UI更新。","source":"@site/docs-ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-attributeupdater/js-apis-arkui-attributeupdater.md","sourceDirName":"arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-attributeupdater","slug":"/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-attributeupdater/js-apis-arkui-attributeupdater","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-attributeupdater/js-apis-arkui-attributeupdater","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"AttributeUpdater","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-attributeupdater","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-arkui-attributeupdater"},"sidebar":"ref","previous":{"title":"RenderNode","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode"},"next":{"title":"Content","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-content/js-apis-arkui-content"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-attributeupdater/js-apis-arkui-attributeupdater.md


const frontMatter = {
	title: 'AttributeUpdater',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-attributeupdater',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-arkui-attributeupdater'
};
const contentTitle = 'AttributeUpdater';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "Initializer&lt;T&gt;",
  "id": "initializert",
  "level": 2
}, {
  "value": "AttributeUpdater&lt;T, C = Initializer&lt;T&gt;&gt;",
  "id": "attributeupdatert-c--initializert",
  "level": 2
}, {
  "value": "applyNormalAttribute",
  "id": "applynormalattribute",
  "level": 3
}, {
  "value": "initializeModifier",
  "id": "initializemodifier",
  "level": 3
}, {
  "value": "attribute",
  "id": "attribute",
  "level": 3
}, {
  "value": "属性",
  "id": "属性",
  "level": 3
}, {
  "value": "onComponentChanged",
  "id": "oncomponentchanged",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "attributeupdater",
        children: "AttributeUpdater"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将属性直接设置给组件，无需标记为状态变量即可直接触发UI更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(615337)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AttributeUpdater } from '@kit.ArkUI';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(212294)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "由于与属性方法同时设置或者在AttributeUpdater中实现applyNormalAttribute等方法时，涉及到与状态管理更新机制同时使用，易出现混淆，因此不建议在同一组件上同时用两种方法设置相同属性。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当与属性方法同时设置时，属性生效的原则为：后设置的生效。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若先进行属性直通更新，后通过状态管理机制更新属性方法，则后更新的属性方法生效；"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若先通过状态管理机制更新属性方法，后进行属性直通更新，则属性直通更新生效。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一个AttributeUpdater对象只能同时关联一个组件，否则将出现设置的属性只在一个组件上生效的现象。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者需要自行保障AttributeUpdater中T和C的类型匹配。比如T为ImageAttribute，C要对应为ImageInterface，否则可能导致"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用updateConstructorParams时功能异常。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "updateConstructorParams当前只支持Button，Image，Text，Span，SymbolSpan和ImageSpan组件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "AttributeUpdater不支持深浅色切换等状态管理相关的操作。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-global-interface#ui%E4%B8%8A%E4%B8%8B%E6%96%87%E4%B8%8D%E6%98%8E%E7%A1%AE",
            children: "UI上下文不明确"
          }), "的场景中调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "#attributeupdatert-c--initializert",
            children: "AttributeUpdater"
          }), "对象的接口时，建议使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
            children: "UIContext"
          }), "的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#runscopedtask",
            children: "runScopedTask"
          }), "接口明确UI上下文，参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-global-interface#%E6%89%A7%E8%A1%8C%E7%BB%91%E5%AE%9Aui%E5%AE%9E%E4%BE%8B%E7%9A%84%E9%97%AD%E5%8C%85",
            children: "执行绑定UI实例的闭包"
          }), "示例。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "initializert",
      children: "Initializer<T>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Initializer<T> = () => T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以将属性更新到本地的修饰器。"
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "attributeupdatert-c--initializert",
      children: "AttributeUpdater<T, C = Initializer<T>>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifiert",
        children: "AttributeModifier"
      }), "的实现类，开发者需要自定义class继承AttributeUpdater。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中C代表组件的构造函数类型，比如Text组件的TextInterface，Image组件的ImageInterface等，仅在使用updateConstructorParams时才需要传递C类型。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "applynormalattribute",
      children: "applyNormalAttribute"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "applyNormalAttribute?(instance: T): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义正常态更新属性函数。"
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
            children: "instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件的属性类，用来标识进行属性设置的组件的类型，比如Button组件的ButtonAttribute，Text组件的TextAttribute等。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "initializemodifier",
      children: "initializeModifier"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "initializeModifier(instance: T): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AttributeUpdater首次设置给组件时提供的样式。"
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
            children: "instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件的属性类，用来标识进行属性设置的组件的类型，比如Button组件的ButtonAttribute，Text组件的TextAttribute等。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过initializeModifier方法初始化设置属性值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { AttributeUpdater } from '@kit.ArkUI';\n\nclass MyButtonModifier extends AttributeUpdater<ButtonAttribute> {\n  // 该AttributeUpdater对象第一次使用的时候触发的回调\n  initializeModifier(instance: ButtonAttribute): void {\n    instance.backgroundColor('#ffd5d5d5')\n      .labelStyle({ maxLines: 3 })\n      .width('80%')\n  }\n\n  // 该AttributeUpdater对象后续使用或者更新的时候触发的回调\n  applyNormalAttribute(instance: ButtonAttribute): void {\n    instance.borderWidth(1);\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  modifier: MyButtonModifier = new MyButtonModifier();\n  @State flushTheButton: string = 'Button';\n\n  build() {\n    Row() {\n      Column() {\n        Button(this.flushTheButton)\n          .attributeModifier(this.modifier)\n          .onClick(() => {\n            // 通过AttributeUpdater的attribute对属性进行修改\n            // 需要注意先通过组件的attributeModifier属性方法建立组件与AttributeUpdater绑定关系\n            this.modifier.attribute?.backgroundColor('#ff2787d9').labelStyle({ maxLines: 5 });\n          })\n          .margin('10%')\n        Button('Trigger Button Update')\n          .width('80%')\n          .labelStyle({ maxLines: 2 })\n          .onClick(() => {\n            this.flushTheButton = this.flushTheButton + ' Updated';\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(170047)/* ["default"] */.A) + "",
        width: "277",
        height: "148"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "attribute",
      children: "attribute"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get attribute(): T | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取AttributeUpdater中组件对应的属性类实例，通过该实例实现属性直通更新的功能。"
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
            children: "T"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过属性直通设置方式更新属性值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { AttributeUpdater } from '@kit.ArkUI';\n\nclass MyButtonModifier extends AttributeUpdater<ButtonAttribute> {\n  initializeModifier(instance: ButtonAttribute): void {\n    instance.backgroundColor('#ffd5d5d5')\n      .width('50%')\n      .height(30);\n  }\n}\n\n@Entry\n@Component\nstruct updaterDemo2 {\n  modifier: MyButtonModifier = new MyButtonModifier();\n\n  build() {\n    Row() {\n      Column() {\n        Button(\"Button\")\n          .attributeModifier(this.modifier)\n          .onClick(() => {\n            this.modifier.attribute?.backgroundColor('#ff2787d9').width('30%');\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(85589)/* ["default"] */.A) + "",
        width: "300",
        height: "200"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性",
      children: "属性"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "updateConstructorParams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#attributeupdatert-c--initializert",
              children: "C"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C代表组件的构造函数类型，比如Text组件的TextInterface，Image组件的ImageInterface等。用于更改组件的构造函数入参。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用updateConstructorParams更新组件的构造入参。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { AttributeUpdater } from '@kit.ArkUI';\n\nclass MyTextModifier extends AttributeUpdater<TextAttribute, TextInterface> {\n  initializeModifier(instance: TextAttribute) {\n  }\n}\n\n@Entry\n@Component\nstruct attributeDemo3 {\n  private modifier: MyTextModifier = new MyTextModifier();\n\n  build() {\n    Row() {\n      Column() {\n        Text(\"Initialize\")\n          .attributeModifier(this.modifier)\n          .fontSize(14).border({ width: 1 }).textAlign(TextAlign.Center).lineHeight(20)\n          .width(200).height(50)\n          .backgroundColor('#fff7f7f7')\n          .onClick(() => {\n            this.modifier.updateConstructorParams(\"Updated\");\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(810207)/* ["default"] */.A) + "",
        width: "300",
        height: "200"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oncomponentchanged",
      children: "onComponentChanged"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onComponentChanged(component: T): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绑定相同的自定义的Modifier对象，组件发生切换时，通过该接口通知到应用。"
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
            children: "component"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件的属性类，用来标识进行属性设置的组件的类型，比如Button组件的ButtonAttribute，Text组件的TextAttribute等。"
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
        children: "// xxx.ets\nimport { AttributeUpdater } from '@kit.ArkUI';\n\nclass MyButtonModifier extends AttributeUpdater<ButtonAttribute> {\n  initializeModifier(instance: ButtonAttribute): void {\n    instance.backgroundColor('#ff2787d9')\n      .width('50%')\n      .height(30);\n  }\n\n  onComponentChanged(instance: ButtonAttribute): void {\n    instance.backgroundColor('#ff519db4')\n      .width('50%')\n      .height(30);\n  }\n}\n\n@Entry\n@Component\nstruct updaterDemo4 {\n  @State btnState: boolean = false;\n  modifier: MyButtonModifier = new MyButtonModifier();\n\n  build() {\n    Row() {\n      Column() {\n        Button(\"Test\")\n          .onClick(() => {\n            this.btnState = !this.btnState;\n          }).margin({ bottom: 20 })\n\n        if (this.btnState) {\n          Button(\"Button\")\n            .attributeModifier(this.modifier)\n        } else {\n          Button(\"Button\")\n            .attributeModifier(this.modifier)\n        }\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(438297)/* ["default"] */.A) + "",
        width: "300",
        height: "160"
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
615337(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
438297(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439505-86b1a21872bc16a10f524b2f76c5efa8.gif");

},
212294(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
85589(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479459-d5f6b319c09612df32d3391342091ffc.gif");

},
810207(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,R0lGODlhLAHIAHcAACH/C05FVFNDQVBFMi4wAwEAAAAsAAAAACwByACn////9vb2+Pn5+Pn29vb5+Pb1AAAA+Pb55eXl/v7+6enp9fj19fn8+Pf8+vz99fj5+fn89/jz8vX59PP08fT1NTpA/Pr6MTpF9fX89PXy9fP48vj78fL17vHz+v358fHxhYuRMjxFTlRZ8fL48vTx8fb9MThA/PT0pKy0MTY9mJyhODdFhIOL6u70Mjg+7e7x6evx7e3u8vj8NDlJBgYGLzhCMzdALTQ9NDk9/P36NDQ2lZqivMLK7/j9VFti7fT5paWsqKipW2BlNjlFOT1BMTU7dHuC7/Dt3eHj2trafYCF7PD5ZGdsiZCWk5eg0dXZa21ylpme5ensOUFJOTlBNDc9RElT9fLyVlhd8O/0PUNO8vHvyMvQ+PbyjpahMDQ3kJWagoKJ1tfcOT1FNjY6io2TLjZBqKinu8HHLDE0Dg4Or7S7srKytr3DnaGlLTM6LjU6ysrKKzM/w8fPxMnO6uvtQ0ZMZ2lp6e3tOkBGOEBDZmtw4ebsRUlN6vH5YGFiVlxk7/f8TlZeZmdqVVZZUlda1t3hdnZ82dzhPT5DOz9J3NzcbXJ4tr7I09zexMzRu73CoKCk1Nncy83Qubq/tre629zd7Ovvzs7TztPe1NXWxMTM1tbZ39/jzMzM0dTcU1tiW1xeU1tpVV5jWFdcTlNWR1JZU1dfSlFfYGVsYGVrZGltZGNoZWZlW1tiWFZjY2NnWGNqS09ZNTxGNT5DNz9NNzxINTUzKi0yKyowKzg+LSwwR0ZLQ0ZLRU9RQ0hQPUFJODtKODtFOUZNP0BEa2ttmpuflJadoKKhmqGplpaYjpCVioiTkJSdjpSco6OmqqixpKuzrLC1ra6wr6+vpKWqoqauq6+vo6ivcnF3bXFwdnh0d3d3bWxta2xuZmxyYmt0dnh6hIONgYKGiImMhISKf4WNfoKNeYCJdHeCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACP8AAQgcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gQ4ocSbKkyZMoU6pcybKly5cwY8qcSbOmzZs4c+rcybOnz59AgwodSrSo0aNIkypdyrSp06dQo0qdSrWq1atYs2rdyrWr169gw4odS7as2bNo06pdy7at27dw48qdS7eu3bt48+rdy7ev37+AAwseTLiw4cOIEytezLix48eQI0ueTLmy5cuYM2vezLmz58+gQ4seTbq06dOoU6tezbq169ewY8ueTbu27du4c+vezbu379/AgwsfTrx4xATIkytfzry58+fQo0ufTr269evYs2vfzj06SRoGwov/H0++vPnz6NOrX8++vfv38OPLn0+/PnoaJNUsQoBAgQL+//UH4IACFhjggQQiaGCCDC7ooIIQNhjhgxJWSOGFE2ZooYYYbuhhhyBquIgaJBkQgAUBpKjiiiy26OKLMMYo44w01mjjjTjmqOOOPPbIogABGFDiBD4WaeSRSCap5JJM4jiBkCOZ2OSUVFZp5ZVY0jhAilCKJKUABQhwwABikjlmmWieqaaZbKbZ5ppuxgnnnG/WKaeddN6pZ5584unnnn/2CeigghZaJwFclpjloow26uijMIaZaJQpDjDmAQJYmimmmnbK6aebhuqpqKCOamqpqJKq6qmrpsrqq67G/9rqrLDSKmutuN6qq6gEADmpl5AGK+ywxPZYQAC+dhmSlJbmauuzzka7q7TQTmtttdhSq+2122baq4rKgiRlseSWa+6wx0oapKLIhmkooYHGC++879Yrr7303qtvvvziSwCZ3/667LkEF2zwlcmyq2mYYArQ8MMMR+ywxBBPbHHFGFOs8cUbZ8zxxx6H3PHIIJMscskon6yyySynvDG47KqIaAAz15yizTTfrHPOPOPs884/9wz00EIXHfTRRCNtdNJML+200lA3HfXTUgOtbrgffRlmAWRyDWbXYH8tttdkh1322GanjfbaZ7ettttsvy133HTDbffcd9eN99569/9NdqbIwkypzlMXXjXViBue+OGKN87444tH7rjkKR4QwJYEYO2R1n7znffnnofe+eigky566aifrrrpYl8+s+YdjYvo5LRDXjvluN+uu+285967zQUQcDW7DafOuvHIr5788co3z/zzy8N9OZC+rjt4zrv7rn323P/u/fbfd0815rBzxHn0zqMPffrsr++++vCH/nrMs4dvP/j4i6///fvnn/Twgyte++L3vgEasIAIJKACzQa46pVvI7LznwT7R0HG1W+C/MugBC1HPuJt7YALTGDYOBCACQxgAAVI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");

},
170047(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959458-3c26c3f8200934e19ffc3287fbf8ecb6.gif");

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