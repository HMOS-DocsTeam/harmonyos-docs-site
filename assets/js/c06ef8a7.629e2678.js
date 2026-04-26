"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["322236"], {
886180(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_interaction_property_touch_interactions_ts_universal_attributes_hit_test_behavior_ts_universal_attributes_hit_test_behavior_md_c06_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-ts-component-general-attributes-interaction-property-touch-interactions-ts-universal-attributes-hit-test-behavior-ts-universal-attributes-hit-test-behavior-md-c06.json
var site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_interaction_property_touch_interactions_ts_universal_attributes_hit_test_behavior_ts_universal_attributes_hit_test_behavior_md_c06_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/touch-interactions/ts-universal-attributes-hit-test-behavior/ts-universal-attributes-hit-test-behavior","title":"触摸测试控制","description":"设置组件的触摸测试类型。在ArkUI开发框架中，处理触屏事件和鼠标事件时，会在事件触发前进行按压点与组件响应热区的触摸测试，以收集需响应事件的组件。基于测试结果，框架会分发相应的事件。hitTestBehavior属性用于设置不同的触摸测试响应模式，影响触摸测试收集结果及后续事件分发。具体影响参考HitTestMode枚举说明。影响点击事件、触摸事件、拖拽事件、鼠标事件、轴事件、悬浮事件、无障碍悬浮事件和手势事件的分发。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/touch-interactions/ts-universal-attributes-hit-test-behavior/ts-universal-attributes-hit-test-behavior.md","sourceDirName":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/touch-interactions/ts-universal-attributes-hit-test-behavior","slug":"/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/touch-interactions/ts-universal-attributes-hit-test-behavior/ts-universal-attributes-hit-test-behavior","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/touch-interactions/ts-universal-attributes-hit-test-behavior/ts-universal-attributes-hit-test-behavior","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"触摸测试控制","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-hit-test-behavior","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-universal-attributes-hit-test-behavior"},"sidebar":"ref","previous":{"title":"触摸热区设置","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/touch-interactions/ts-universal-attributes-touch-target/ts-universal-attributes-touch-target"},"next":{"title":"事件独占控制","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/touch-interactions/ts-universal-attributes-monopolize-events/ts-universal-attributes-monopolize-events"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/touch-interactions/ts-universal-attributes-hit-test-behavior/ts-universal-attributes-hit-test-behavior.md


const frontMatter = {
	title: '触摸测试控制',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-hit-test-behavior',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-universal-attributes-hit-test-behavior'
};
const contentTitle = '触摸测试控制';

const assets = {

};



const toc = [{
  "value": "hitTestBehavior",
  "id": "hittestbehavior",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（触摸测试类型为Block和Transparent的触摸测试效果）",
  "id": "示例1触摸测试类型为block和transparent的触摸测试效果",
  "level": 3
}, {
  "value": "示例2（触摸测试类型为BLOCK_HIERARCHY时的触摸测试效果）",
  "id": "示例2触摸测试类型为block_hierarchy时的触摸测试效果",
  "level": 3
}, {
  "value": "示例3（触摸测试类型为BLOCK_DESCENDANTS时的触摸测试效果）",
  "id": "示例3触摸测试类型为block_descendants时的触摸测试效果",
  "level": 3
}, {
  "value": "示例4（Stack组件中多节点重合时的触摸测试效果）",
  "id": "示例4stack组件中多节点重合时的触摸测试效果",
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
        id: "触摸测试控制",
        children: "触摸测试控制"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-basic-principles#%E8%A7%A6%E6%91%B8%E6%B5%8B%E8%AF%95",
        children: "触摸测试"
      }), "类型。在ArkUI开发框架中，处理触屏事件和鼠标事件时，会在事件触发前进行按压点与组件响应热区的触摸测试，以收集需响应事件的组件。基于测试结果，框架会分发相应的事件。hitTestBehavior属性用于设置不同的触摸测试响应模式，影响触摸测试收集结果及后续事件分发。具体影响参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#hittestmode9",
        children: "HitTestMode"
      }), "枚举说明。影响", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-click/ts-universal-events-click",
        children: "点击事件"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch",
        children: "触摸事件"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop",
        children: "拖拽事件"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-mouse-key/ts-universal-mouse-key",
        children: "鼠标事件"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-axis/ts-universal-events-axis",
        children: "轴事件"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-hover/ts-universal-events-hover",
        children: "悬浮事件"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/accessibility-related/ts-universal-accessibility-hover-event/ts-universal-accessibility-hover-event",
        children: "无障碍悬浮事件"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings",
        children: "手势事件"
      }), "的分发。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(903540)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 9开始支持，后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当Stack组件中有多个节点触摸区域重叠时，如果最上层节点的子组件命中，则默认只会对显示在最上层的节点做触摸测试。此时只有给显示在最上层的节点设置hitTestBehavior为HitTestMode.Transparent时，才能使显示在下层的节点触发触摸测试。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["存在新增节点时，如需该节点响应触摸测试，需要对其设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#hittestmode9",
          children: "HitTestMode"
        }), "。当新增节点存在多层级节点时，仅需设置根节点的HitTestMode。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hittestbehavior",
      children: "hitTestBehavior"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hitTestBehavior(value: HitTestMode): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件的触摸测试类型。如果组件不设置hitTestBehavior，其默认触摸测试类型为HitTestMode.Default。"
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#hittestmode9",
              children: "HitTestMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前组件的触摸测试类型。"
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1触摸测试类型为block和transparent的触摸测试效果",
      children: "示例1（触摸测试类型为Block和Transparent的触摸测试效果）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过设置不同的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#hittestmode9",
        children: "HitTestMode"
      }), "值演示了Block和Transparent的触摸测试效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct HitTestBehaviorExample {\n  build() {\n    // outer stack\n    Stack() {\n      Button('outer button')\n        .onTouch((event) => {\n          console.info(`outer button touched type: ${(event as TouchEvent).type}`)\n        })\n      // inner stack\n      Stack() {\n        Button('inner button')\n          .onTouch((event) => {\n            console.info(`inner button touched type: ${(event as TouchEvent).type}`)\n          })\n      }\n      .width(\"100%\").height(\"100%\")\n      .hitTestBehavior(HitTestMode.Block)\n      .onTouch((event) => {\n        console.info(`stack touched type: ${(event as TouchEvent).type}`)\n      })\n\n      Text('Transparent')\n        .hitTestBehavior(HitTestMode.Transparent)\n        .width(\"100%\").height(\"100%\")\n        .onTouch((event) => {\n          console.info(`text touched type: ${(event as TouchEvent).type}`)\n        })\n    }.width(300).height(300)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2触摸测试类型为block_hierarchy时的触摸测试效果",
      children: "示例2（触摸测试类型为BLOCK_HIERARCHY时的触摸测试效果）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，该示例演示了设置触摸测试类型为BLOCK_HIERARCHY时的触摸测试效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct BlockHierarchy {\n  build() {\n    // outer stack\n    Stack() {\n      Stack() {\n        Button('outer button')\n          .onTouch((event) => {\n            console.info(`HitTestMode outer button touched type: ${(event as TouchEvent).type}`);\n          })\n          .width(200)\n          .height(200)\n          .backgroundColor('#D5D5D5')\n        // inner stack\n        Stack() {\n          Button()\n            .id('button150')\n            .backgroundColor('#F7F7F7')\n            .width(150)\n            .height(150)\n            .onTouch((event) => {\n              console.info(`HitTestMode button150 touched type: ${(event as TouchEvent).type}`);\n            })\n            .hitTestBehavior(HitTestMode.Transparent)\n          Button()\n            .id('button100')\n            .backgroundColor('#707070')\n            .width(100)\n            .height(100)\n            .onTouch((event) => {\n              console.info(`HitTestMode button100 touched type: ${(event as TouchEvent).type}`);\n            })\n            .hitTestBehavior(HitTestMode.Transparent)\n          Button()\n            .id('button050')\n            .backgroundColor('#D5D5D5')\n            .width(50)\n            .height(50)\n            .onTouch((event) => {\n              console.info(`HitTestMode button050 touched type: ${(event as TouchEvent).type}`);\n            })\n            .hitTestBehavior(HitTestMode.Transparent)\n        }\n        .width(\"100%\").height(\"100%\")\n        // 设置触摸测试模式，自身和子节点响应触摸测试，阻止所有优先级较低的兄弟节点和父节点参与触摸测试\n        .hitTestBehavior(HitTestMode.BLOCK_HIERARCHY)\n        .onTouch((event) => {\n          console.info(`HitTestMode stack touched type: ${(event as TouchEvent).type}`);\n        })\n\n        Text('Transparent')\n          .hitTestBehavior(HitTestMode.Transparent)\n          .width(\"100%\").height(\"100%\")\n          .onTouch((event) => {\n            console.info(`HitTestMode text touched type: ${(event as TouchEvent).type}`);\n          })\n      }.width(300).height(300)\n      .borderWidth(2)\n      .onTouch((event) => {\n        console.info(`HitTestMode father stack touched type: ${(event as TouchEvent).type}`);\n      })\n    }.width(500).height(500)\n    .borderWidth(2)\n    .onTouch((event) => {\n      console.info(`HitTestMode grandfather stack touched type: ${(event as TouchEvent).type}`);\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3触摸测试类型为block_descendants时的触摸测试效果",
      children: "示例3（触摸测试类型为BLOCK_DESCENDANTS时的触摸测试效果）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，该示例演示了设置触摸测试类型为BLOCK_DESCENDANTS时的触摸测试效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct BlockDescendants {\n  build() {\n    // outer stack\n    Stack() {\n      Stack() {\n        Button('outer button')\n          .onTouch((event) => {\n            console.info(`HitTestMode outer button touched type: ${(event as TouchEvent).type}`);\n          })\n          .width(200)\n          .height(200)\n          .backgroundColor('#D5D5D5')\n        // inner stack\n        Stack() {\n          Button('inner button')\n            .width(100)\n            .height(100)\n            .onTouch((event) => {\n              console.info(`HitTestMode inner button touched type: ${(event as TouchEvent).type}`);\n            })\n        }\n        .width(\"100%\").height(\"100%\")\n        // 设置触摸测试模式，自身不响应触摸测试，并且所有的后代（孩子，孙子等）也不响应触摸测试\n        .hitTestBehavior(HitTestMode.BLOCK_DESCENDANTS)\n        .onTouch((event) => {\n          console.info(`HitTestMode stack touched type: ${(event as TouchEvent).type}`);\n        })\n\n        Text('Transparent')\n          .hitTestBehavior(HitTestMode.Transparent)\n          .width(\"100%\").height(\"100%\")\n          .onTouch((event) => {\n            console.info(`HitTestMode text touched type: ${(event as TouchEvent).type}`);\n          })\n      }.width(300).height(300)\n      .borderWidth(2)\n      .onTouch((event) => {\n        console.info(`HitTestMode father stack touched type: ${(event as TouchEvent).type}`);\n      })\n    }.width(500).height(500)\n    .borderWidth(2)\n    .onTouch((event) => {\n      console.info(`HitTestMode grandfather stack touched type: ${(event as TouchEvent).type}`);\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4stack组件中多节点重合时的触摸测试效果",
      children: "示例4（Stack组件中多节点重合时的触摸测试效果）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例演示了在Stack组件中存在多节点触摸区域重叠时的触摸测试效果。此时设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#hittestmode9",
        children: "HitTestMode"
      }), "为None时，重叠的背景区域无法响应触摸测试；只有设置为Transparent时，背景区域才能响应触摸测试。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct Index {\n  @State @Watch('onModeChange') mode: number = HitTestMode.None;\n  @State modeStr: string = 'None';\n\n  onModeChange() {\n    this.modeStr = this.mode === HitTestMode.None ? 'None' : 'Transparent';\n  }\n\n  build() {\n    Stack() {\n      Column()\n        .height('100%')\n        .width('100%')\n        .onTouch(() => {\n          console.info('background hit test!')\n        })\n      Stack() {\n        // 点击按钮进行触摸测试\n        Button('HitTest')\n        // 点击按钮切换不同的触摸测试模式\n        Button('HitTestMode: ' + this.modeStr)\n          .margin({ top: 100 })\n          .onClick(() => {\n            this.mode = this.mode === HitTestMode.None ?\n              HitTestMode.Transparent : HitTestMode.None;\n          })\n      }\n      .height('100%')\n      .width('100%')\n      // 只有上层节点的HitTestMode设置为Transparent时，下层节点才能响应触摸测试\n      .hitTestBehavior(this.mode)\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
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
903540(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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