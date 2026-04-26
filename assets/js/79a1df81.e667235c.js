"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["370875"], {
836602(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_debug_optimize_ui_development_faq_arkts_select_component_faq_arkts_select_component_faq_md_79a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-debug-optimize-ui-development-faq-arkts-select-component-faq-arkts-select-component-faq-md-79a.json
var site_docs_arkui_ui_debug_optimize_ui_development_faq_arkts_select_component_faq_arkts_select_component_faq_md_79a_namespaceObject = JSON.parse('{"id":"arkui/ui-debug-optimize/ui-development-faq/arkts-select-component-faq/arkts-select-component-faq","title":"按钮与选择组件常见问题","description":"本文档介绍按钮与选择组件的常见问题并提供参考。","source":"@site/docs/arkui/ui-debug-optimize/ui-development-faq/arkts-select-component-faq/arkts-select-component-faq.md","sourceDirName":"arkui/ui-debug-optimize/ui-development-faq/arkts-select-component-faq","slug":"/arkui/ui-debug-optimize/ui-development-faq/arkts-select-component-faq/","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-development-faq/arkts-select-component-faq/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"按钮与选择组件常见问题","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-select-component-faq","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义节点常见问题","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-development-faq/arkts-user-defined-node-faq/"},"next":{"title":"使用文本常见问题","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-development-faq/arkts-text-faq/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-debug-optimize/ui-development-faq/arkts-select-component-faq/arkts-select-component-faq.md


const frontMatter = {
	title: '按钮与选择组件常见问题',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-select-component-faq',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '按钮与选择组件常见问题';

const assets = {

};



const toc = [{
  "value": "Slider组件滑块与滑轨是如何对齐的",
  "id": "slider组件滑块与滑轨是如何对齐的",
  "level": 2
}, {
  "value": "使用AttributeModifier设置Button的LabelStyle时，默认字体粗细与直接设置不一致",
  "id": "使用attributemodifier设置button的labelstyle时默认字体粗细与直接设置不一致",
  "level": 2
}, {
  "value": "Button组件设置type时，ButtonType枚举值与数字值不一致",
  "id": "button组件设置type时buttontype枚举值与数字值不一致",
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
        id: "按钮与选择组件常见问题",
        children: "按钮与选择组件常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文档介绍按钮与选择组件的常见问题并提供参考。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "slider组件滑块与滑轨是如何对齐的",
      children: "Slider组件滑块与滑轨是如何对齐的"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Slider的滑块与滑轨显示样式", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-slider/ts-basic-components-slider#sliderstyle%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "SliderStyle"
      }), "有三种，其中SliderStyle.OutSet与SliderStyle.InSet存在滑块。Slider的滑动条进度为最小值时，滑块对齐方式如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SliderStyle.OutSet模式下，滑块的中心与滑轨的端点对齐，示例图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(382764)/* ["default"] */.A) + "",
        width: "315",
        height: "100"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SliderStyle.InSet模式下，滑块与滑轨的中心对齐，即距离端点滑轨高度的一半的位置，示例图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(809435)/* ["default"] */.A) + "",
        width: "315",
        height: "100"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  build() {\n    Column() {\n      Slider({\n        style: SliderStyle.OutSet\n      })\n        .blockSize({\n          width: 20,\n          height: 20\n        })\n        .trackThickness(50)\n      Slider({\n        style: SliderStyle.InSet\n      })\n        .blockSize({\n          width: 20,\n          height: 20\n        })\n        .trackThickness(50)\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用attributemodifier设置button的labelstyle时默认字体粗细与直接设置不一致",
      children: "使用AttributeModifier设置Button的LabelStyle时，默认字体粗细与直接设置不一致"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Button组件中设置LabelStyle时，采用不同设置方式会出现Label文本默认字体粗细显示不一致的现象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置LabelStyle有两种方式，其中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["直接设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button#labelstyle10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
          children: "LabelStyle"
        }), "。此时font属性中的weight默认值为FontWeight.Medium，对应数值500。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
          children: "AttributeModifier"
        }), "接口设置。此时font属性中的weight默认值为400，与LabelStyle对象说明中的默认值存在差异。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为避免不同设置方式导致的显示差异，建议在通过AttributeModifier接口设置LabelStyle时，显式指定weight的值，以确保文本样式符合预期，具体示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// pages/ButtonModifierFAQ.ets\nclass MyButtonModifier1 implements AttributeModifier<ButtonAttribute> {\n  applyNormalAttribute(instance: ButtonAttribute): void {\n    instance.labelStyle({});\n  }\n}\n\nclass MyButtonModifier2 implements AttributeModifier<ButtonAttribute> {\n  applyNormalAttribute(instance: ButtonAttribute): void {\n    instance.labelStyle({\n      font: {\n        weight: FontWeight.Medium\n      }\n    });\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State modifier1: MyButtonModifier1 = new MyButtonModifier1();\n  @State modifier2: MyButtonModifier2 = new MyButtonModifier2();\n\n  build() {\n    Column() {\n      Text('normal')\n      // Button直接设置labelStyle，font属性中的weight默认值为500\n      Button('DemoButtonTest')\n        .width(100)\n        .labelStyle({})\n      Divider()\n      // 通过AttributeModifier接口设置labelStyle，font属性中的weight默认值为400\n      Text('modifier1')\n      Button('DemoButtonTest')\n        .width(100)\n        .attributeModifier(this.modifier1)\n\n      Text('modifier2')\n      Button('DemoButtonTest')\n        .width(100)\n        .attributeModifier(this.modifier2)\n    }.height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(507567)/* ["default"] */.A) + "",
        width: "280",
        height: "280"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "button组件设置type时buttontype枚举值与数字值不一致",
      children: "Button组件设置type时，ButtonType枚举值与数字值不一致"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Button组件的type属性支持使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button#buttontype%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "ButtonType"
      }), "枚举或数字进行设置，但SDK中枚举的数值与实际type可用的数值不一致。例如ButtonType.ROUNDED_RECTANGLE枚举数值为3，但是使用type(ButtonType.ROUNDED_RECTANGLE)与type(3)的效果不同。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button#buttontype%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "ButtonType"
      }), "枚举数值的定义仅表示枚举项的索引，与type属性实际接收数值不同。映射如下："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ButtonType枚举"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "type实际数值"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Normal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Capsule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Circle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ROUNDED_RECTANGLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因此，type(8)的效果等同于type(ButtonType.ROUNDED_RECTANGLE)，而type(3)不对应任何有效类型，API version 18之前会使用默认值ButtonType.Capsule，API version 18及之后会使用默认值ButtonType.ROUNDED_RECTANGLE。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button#buttontype%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "ButtonType"
      }), "枚举进行设置，避免直接使用数字值可能带来的混淆。如果确需使用数字值，请参照上表中的\"type实际数值\"列进行设置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// pages/ButtonTypeFAQ.ets\n@Entry\n@Component\nstruct ButtonTypeDemo {\n  build() {\n    Column({ space: 20 }) {\n      // 使用枚举设置（推荐）\n      Text('使用枚举设置：')\n      Button('Capsule')\n        .type(ButtonType.Capsule)\n      Button('Circle')\n        .type(ButtonType.Circle)\n      Button('Normal')\n        .type(ButtonType.Normal)\n      Button('ROUNDED_RECTANGLE')\n        .type(ButtonType.ROUNDED_RECTANGLE)\n\n      // 使用数字设置（需使用type实际数值）\n      Text('使用数字设置：')\n      Button('type(1)')\n        .type(1) // 等同于 ButtonType.Capsule\n      Button('type(2)')\n        .type(2) // 等同于 ButtonType.Circle\n      Button('type(0)')\n        .type(0) // 等同于 ButtonType.Normal\n      Button('type(8)')\n        .type(8) // 等同于 ButtonType.ROUNDED_RECTANGLE\n\n      // 错误示例：使用SDK枚举值作为type数字\n      Text('错误示例（使用SDK枚举值）：')\n      Button('type(3)')\n        .type(3) // 不对应任何类型，使用默认样式\n    }\n    .width('100%')\n    .height('100%')\n    .backgroundColor(Color.White)\n    .justifyContent(FlexAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(208070)/* ["default"] */.A) + "",
        width: "272",
        height: "772"
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
507567(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798516-06a7625f4b30ee674f44b647e20b34f3.png");

},
809435(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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");

},
382764(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABkATsDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD6pooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKY0qKcM6j6mm/aIf+eqfnQBLRUX2iH/nov50faIf+ei/nQBLRUX2iH/nov50faIf+ei/nQBLRUX2iH/nov50faIf+ei/nQBLRUX2iH/nov50faIf+ei/nQBLRUX2iH/nov50faIf+ei/nQBLRUX2iH/nov50faIf+ei/nQBLRUX2iH/nov50faIf+ei/nQBLRUX2iH/nov50faIf+ei/nQBLRUX2iH/nov50faIf+ei/nQBLRUX2iH/nov50faIf+ei/nQBLRUX2iH/nov50faIf+ei/nQBLRUX2iH/nov50faIf+ei/nQBLRUX2iH/nov50faIf+ei/nQBLRUX2iH/nov50faIf+eifnQBLRUYniPSRP++qkBBGRyKACiiigAooooAKKKY7HIVepoAc7hFLMcAdayLm7eUkKSqegrQuLXz49rSsO/FZE0T28vlyYPcMO9ADaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKfFK8TZRiKZRQBs2lyJ1weHHUVYrDtpDFMrDpnn6VuUAFFFFABUY4mOe44qSmuu76igB1ZessDJCo+8Mn8KtXb3EcJaLaSOpI7VkEszl3Ys56k0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAAOa6BeFGetY9lCZZ1/urya2aACiiigAooooAKz7mwyS0J/4Ca0KKAMNreZesb/gM00xSf3G/Kt6igDB8t/7jfkaPLf8AuN+RreooAwfLf+435Gjy3/uN+RreooAwfLf+435Gjy3/ALjfka3qKAMHy3/uN+Ro8t/7jfka3qKAMHy3/uN+Ro8t/wC435Gt6igDB8t/7jfkaPLf+435Gt6igDB8t/7jfkaPLf8AuN+RreooAwfLf+435Gjy3/uN+RreooAwfLf+435Gjy3/ALjfka3qKAMHy3/uN+Ro8t/7jfka3qKAMHy3/uN+Ro8t/wC435Gt6igDB8t/7jfkaPLf+435Gt6igDB8t/7jfkaPLf8AuN+RreooAwfLf+435Gjyn/uN+Vb1FAGEIZT0jc/gamisZXI3DYvvWvRQAyGJYU2oOP50+iigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/9k=");

},
208070(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438211-eb4eb8b707fc34d59fe2ce29241c19f2.png");

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