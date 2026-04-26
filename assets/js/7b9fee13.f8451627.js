"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["500932"], {
176814(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_v_1_v_2_guide_arkts_state_management_v_1_v_2_migration_guide_arkts_v_1_v_2_migration_reusable_arkts_v_1_v_2_migration_reusable_md_7b9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-v-1-v-2-guide-arkts-state-management-v-1-v-2-migration-guide-arkts-v-1-v-2-migration-reusable-arkts-v-1-v-2-migration-reusable-md-7b9.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_v_1_v_2_guide_arkts_state_management_v_1_v_2_migration_guide_arkts_v_1_v_2_migration_reusable_arkts_v_1_v_2_migration_reusable_md_7b9_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-reusable/arkts-v1-v2-migration-reusable","title":"组件复用迁移","description":"本文档主要介绍组件复用从V1向V2的迁移，涉及如下装饰器。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-reusable/arkts-v1-v2-migration-reusable.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-reusable","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-reusable/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-reusable/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"组件复用迁移","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-v1-v2-migration-reusable","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用内状态变量迁移","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-application/"},"next":{"title":"循环渲染迁移","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-rendering-control-repeat/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-reusable/arkts-v1-v2-migration-reusable.md


const frontMatter = {
	title: '组件复用迁移',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-v1-v2-migration-reusable',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '组件复用迁移';

const assets = {

};



const toc = [{
  "value": "@Reusable-&gt;@ReusableV2迁移规则",
  "id": "reusable-reusablev2迁移规则",
  "level": 2
}, {
  "value": "V1-&gt;V2组件迁移",
  "id": "v1-v2组件迁移",
  "level": 3
}, {
  "value": "aboutToRecycle与aboutToReuse迁移",
  "id": "abouttorecycle与abouttoreuse迁移",
  "level": 3
}, {
  "value": "reuseId-&gt;reuse",
  "id": "reuseid-reuse",
  "level": 3
}, {
  "value": "组件冻结",
  "id": "组件冻结",
  "level": 3
}, {
  "value": "LazyForEach-&gt;Repeat",
  "id": "lazyforeach-repeat",
  "level": 3
}, {
  "value": "@Reusable-&gt;@ReusableV2迁移示例",
  "id": "reusable-reusablev2迁移示例",
  "level": 2
}, {
  "value": "if使用场景",
  "id": "if使用场景",
  "level": 3
}, {
  "value": "列表滚动-Repeat使用场景",
  "id": "列表滚动-repeat使用场景",
  "level": 3
}, {
  "value": "列表滚动-if使用场景",
  "id": "列表滚动-if使用场景",
  "level": 3
}, {
  "value": "列表滚动-Repeat全量加载使用场景",
  "id": "列表滚动-repeat全量加载使用场景",
  "level": 3
}, {
  "value": "Grid使用场景",
  "id": "grid使用场景",
  "level": 3
}, {
  "value": "WaterFlow使用场景",
  "id": "waterflow使用场景",
  "level": 3
}, {
  "value": "Swiper使用场景",
  "id": "swiper使用场景",
  "level": 3
}, {
  "value": "列表滚动-ListItemGroup使用场景",
  "id": "列表滚动-listitemgroup使用场景",
  "level": 3
}, {
  "value": "多种条目类型使用场景",
  "id": "多种条目类型使用场景",
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
        id: "组件复用迁移",
        children: "组件复用迁移"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文档主要介绍组件复用从V1向V2的迁移，涉及如下装饰器。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "V1装饰器名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "V2装饰器名称"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable",
              children: "@Reusable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-new-reusablev2",
              children: "@ReusableV2"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reusable-reusablev2迁移规则",
      children: "@Reusable->@ReusableV2迁移规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "v1-v2组件迁移",
      children: "V1->V2组件迁移"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "迁移规则"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将@Component装饰的父自定义组件迁移至@ComponentV2装饰。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将@Reusable装饰的子自定义组件迁移为@ReusableV2装饰。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["涉及组件内状态变量的迁移可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-component",
          children: "组件内状态变量迁移指导"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "abouttorecycle与abouttoreuse迁移",
      children: "aboutToRecycle与aboutToReuse迁移"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "迁移规则"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttorecycle10",
          children: "aboutToRecycle"
        }), "生命周期无需改动，可保留原实现。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttoreuse18",
          children: "aboutToReuse"
        }), "生命周期在组件复用V2中进行了优化，去除了参数的同时，在复用前会自动重置各状态变量（详情参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-new-reusablev2#%E5%A4%8D%E7%94%A8%E5%89%8D%E7%9A%84%E7%BB%84%E4%BB%B6%E5%86%85%E7%8A%B6%E6%80%81%E5%8F%98%E9%87%8F%E9%87%8D%E7%BD%AE",
          children: "复用前的组件内状态变量重置"
        }), "），无需开发者在aboutToReuse中手动赋值回初始值。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// V1原组件\n@Reusable\n@Component\nstruct ReusableComponent {\n  // 存在外部传值的可能性，可迁移为@Local或@Param @Once\n  @State val: string = 'Hello World';\n  aboutToRecycle(): void {\n    // 这里可以释放比较占内存的内容或其他非必要资源引用，避免一直占用内存\n    console.info('ReusableComponent aboutToRecycle called');\n  }\n  aboutToReuse(params: ESObject): void {\n    console.info('ReusableComponent aboutToReuse called');\n    this.val = params.val ?? 'Hello World'; // 对@State变量重新赋值\n  }\n  build() {\n    Column() {\n      Text(`val: ${this.val}`)\n    }\n  }\n}\n\n// V2迁移后组件\n@ReusableV2\n@ComponentV2\nstruct ReusableV2Component {\n  // 当不存在外部传入值时，可迁移为@Local\n  @Local val: string = 'Hello World';\n  // 当存在外部传入值时，可迁移为@Param @Once\n  @Require @Param @Once param: string;\n  aboutToRecycle(): void {\n    // aboutToRecycle无需改动\n    console.info('ReusableComponent aboutToRecycle called');\n  }\n  aboutToReuse(): void { // aboutToReuse不再有参数\n    // aboutToReuse执行时@Local已重置回'Hello World'，@Param @Once已经重置回外部传入值\n    console.info('ReusableComponent aboutToReuse called');\n    this.val = 'Hello ArkUI'; // 可以在复用阶段修改为其他值\n    this.param = 'Hello ArkUI'; // @Param @Once可本地修改\n  }\n  build() {\n    Column() {\n      Text(`val: ${this.val}`)\n      Text(`param: ${this.param}`)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reuseid-reuse",
      children: "reuseId->reuse"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "迁移规则"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在组件复用V1中，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/other-property/ts-universal-attributes-reuse-id/ts-universal-attributes-reuse-id#reuseid",
        children: "reuseId"
      }), "属性标记组件的复用组。迁移到组件复用V2后，需更换使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/other-property/ts-universal-attributes-reuse/ts-universal-attributes-reuse#reuse",
        children: "reuse"
      }), "属性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// V1原写法\nReusableComponent().reuseId('groupA')\n// V2迁移后写法\nReusableV2Component().reuse({reuseId: () => 'groupA'})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "组件冻结",
      children: "组件冻结"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "迁移规则"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["组件复用V1中，当开发者打开复用组件的冻结开关freezeWhenInactive时，才会冻结复用池中的组件，详细规则参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-freeze/arkts-custom-components-freeze",
        children: "自定义组件冻结功能"
      }), "。而在组件复用V2中，会自动开启冻结，详细规则参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-new-reusablev2#%E5%A4%8D%E7%94%A8%E9%98%B6%E6%AE%B5%E7%9A%84%E5%86%BB%E7%BB%93",
        children: "复用阶段的冻结"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lazyforeach-repeat",
      children: "LazyForEach->Repeat"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "迁移规则"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["组件复用V1中，经常使用LazyForEach配合组件复用实现高性能懒加载。在组件复用V2中，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat",
        children: "Repeat"
      }), "替代", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "LazyForEach"
      }), "。Repeat自身能够对组件进行复用，相比LazyForEach具有更简洁的API以及更好的性能。由LazyForEach迁移至Repeat可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-rendering-control-repeat#lazyforeach%E8%BF%81%E7%A7%BBrepeat",
        children: "LazyForEach迁移Repeat"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reusable-reusablev2迁移示例",
      children: "@Reusable->@ReusableV2迁移示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "if使用场景",
      children: "if使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@Reusable使用示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable#%E5%8A%A8%E6%80%81%E5%B8%83%E5%B1%80%E6%9B%B4%E6%96%B0",
        children: "动态布局更新"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@ReusableV2的if使用场景示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass Message {\n  @Trace value: string | undefined;\n\n  constructor(value: string) {\n    this.value = value;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local switch: boolean = true;\n\n  build() {\n    Column() {\n      Button('Hello')\n        .fontSize(24)\n        .fontWeight(FontWeight.Bold)\n        .onClick(() => {\n          this.switch = !this.switch;\n        })\n      if (this.switch) {\n        // 如果只有一个复用的组件，可以不用设置reuse\n        Child({ message: new Message('Child') })\n          .reuse({ reuseId: () => 'Child' })\n      }\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n\n@ReusableV2\n@ComponentV2\nstruct Child {\n  @Require @Param @Once message: Message = new Message('AboutToReuse');\n\n  aboutToReuse() {\n    // 如无需对状态变量做额外修改，aboutToReuse回调可移除\n    console.info('Recycle====Child==');\n  }\n\n  build() {\n    Column() {\n      Text(this.message.value)\n        .fontSize(30)\n        .margin(20)\n    }\n    .borderWidth(1)\n    .margin({ top: 10 })\n    .height(100)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(418588)/* ["default"] */.A) + "",
        width: "300",
        height: "257"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "列表滚动-repeat使用场景",
      children: "列表滚动-Repeat使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@Reusable使用示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable#%E5%88%97%E8%A1%A8%E6%BB%9A%E5%8A%A8%E9%85%8D%E5%90%88lazyforeach%E4%BD%BF%E7%94%A8",
        children: "列表滚动配合LazyForEach使用"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@ReusableV2的列表滚动-Repeat使用场景示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct ReuseV2Demo {\n  private data: string[] = [];\n\n  aboutToAppear() {\n    for (let i = 1; i < 1000; i++) {\n      this.data.push(i + '');\n    }\n  }\n\n  build() {\n    Column() {\n      List() {\n        Repeat(this.data)\n          .virtualScroll()\n          .each((ri) => {\n            ListItem() {\n              CardViewV2({ item: ri.item })\n            }\n          })\n      }\n    }\n  }\n}\n\n// 复用组件\n@ReusableV2\n@ComponentV2\nexport struct CardViewV2 {\n  // 使用@Param @Once接收外部传入变量并观察变化\n  @Param @Once item: string = '';\n\n  aboutToReuse(): void {\n    // Repeat自身能够进行复用，不会走到自定义组件复用的生命周期\n  }\n\n  build() {\n    Column() {\n      Text(this.item)\n        .fontSize(30)\n    }\n    .borderWidth(1)\n    .height(100)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(532145)/* ["default"] */.A) + "",
        width: "150",
        height: "1374"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "列表滚动-if使用场景",
      children: "列表滚动-if使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@Reusable使用示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable#%E5%88%97%E8%A1%A8%E6%BB%9A%E5%8A%A8-if%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF",
        children: "列表滚动-if使用场景"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@ReusableV2的列表滚动-if使用场景示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct Index {\n  private dataSource: FriendMoment[] = new Array<FriendMoment>();\n\n  aboutToAppear(): void {\n    for (let i = 0; i < 20; i++) {\n      let title = i + 1 + 'test_if';\n      // 开发者可自行替换显示图片的内容，此处以app.media.startIcon为例\n      this.dataSource.push(new FriendMoment(i.toString(), title, 'app.media.startIcon'));\n    }\n\n    for (let i = 0; i < 50; i++) {\n      let title = i + 1 + 'test_if';\n      this.dataSource.push(new FriendMoment(i.toString(), title, ''));\n    }\n  }\n\n  build() {\n    Column() {\n      List({ space: 3 }) {\n        Repeat(this.dataSource)\n          .virtualScroll()\n          .each((ri) => {\n            ListItem() {\n              if (ri.item.image) {\n                OneMoment({ moment: ri.item })\n                  .reuse({ reuseId: () => 'withImage' })\n              } else {\n                OneMoment({ moment: ri.item })\n                  .reuse({ reuseId: () => 'noImage' })\n              }\n            }\n          })\n      }\n      .cachedCount(0)\n    }\n  }\n}\n\n@ObservedV2\nclass FriendMoment {\n  @Trace id: string = '';\n  @Trace text: string = '';\n  @Trace title: string = '';\n  @Trace image: string = '';\n  @Trace answers: Array<ResourceStr> = [];\n\n  constructor(id: string, title: string, image: string) {\n    this.text = id;\n    this.title = title;\n    this.image = image;\n  }\n}\n\n@ReusableV2\n@ComponentV2\nexport struct OneMoment {\n  @Require @Param moment: FriendMoment;\n\n  // 复用id相同的组件才能触发复用\n  aboutToReuse(): void {\n    // 如无需对状态变量做额外修改，aboutToReuse回调可移除\n    console.info(`=====aboutToReuse====OneMoment==复用了==${this.moment.text}`);\n  }\n\n  build() {\n    Column() {\n      Text(this.moment.text)\n      // if分支判断。\n      if (this.moment.image !== '') {\n        Flex({ wrap: FlexWrap.Wrap }) {\n          Image($r(this.moment.image)).height(50).width(50)\n          Image($r(this.moment.image)).height(50).width(50)\n          Image($r(this.moment.image)).height(50).width(50)\n          Image($r(this.moment.image)).height(50).width(50)\n        }\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(941449)/* ["default"] */.A) + "",
        width: "300",
        height: "890"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "列表滚动-repeat全量加载使用场景",
      children: "列表滚动-Repeat全量加载使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["状态管理V2推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat#%E6%87%92%E5%8A%A0%E8%BD%BD%E8%83%BD%E5%8A%9B%E8%AF%B4%E6%98%8E",
        children: "Repeat全量加载模式"
      }), "替代", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
        children: "ForEach"
      }), "实现循环渲染。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@Reusable使用示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable#%E5%88%97%E8%A1%A8%E6%BB%9A%E5%8A%A8-foreach%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF",
        children: "列表滚动-ForEach使用场景"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@ReusableV2的列表滚动-Repeat全量加载使用场景示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@ComponentV2\nstruct Index {\n  @Local isShow: boolean = true;\n  @Local dataSource: ListItemObject[] = [];\n\n  build() {\n    Column() {\n      Row() {\n        Button('clear').onClick(() => {\n          for (let i = 1; i < 50; i++) {\n            this.dataSource.pop();\n          }\n        }).height(40)\n\n        Button('update').onClick(() => {\n          for (let i = 1; i < 50; i++) {\n            let obj = new ListItemObject();\n            obj.id = i;\n            obj.uuid = Math.random().toString();\n            obj.isExpand = false;\n            this.dataSource.push(obj);\n          }\n        }).height(40)\n      }\n\n      List({ space: 10 }) {\n        Repeat(this.dataSource)\n          .each((ri) => {\n            ListItem() {\n              ListItemView({\n                obj: ri.item\n              })\n            }\n          })\n      }.cachedCount(0)\n      .width('100%')\n      .height('100%')\n    }\n  }\n}\n\n@ReusableV2\n@ComponentV2\nstruct ListItemView {\n  @Require @Param obj: ListItemObject;\n\n  aboutToAppear(): void {\n    // 点击 update，首次进入，上下滑动，由于ForEach全展开属性，无法复用\n    console.info('=====aboutToAppear=====ListItemView==创建了==');\n  }\n\n  aboutToReuse() {\n    // 点击clear，再次update，复用成功\n    // 符合一帧内重复创建多个已被销毁的自定义组件\n    // 如无需对状态变量做额外修改，aboutToReuse回调可移除\n    console.info('=====aboutToReuse====ListItemView==复用了==');\n  }\n\n  build() {\n    Column({ space: 10 }) {\n      Text(`${this.obj.id}.标题`)\n        .fontSize(16)\n        .fontColor('#000000')\n        .padding({\n          top: 20,\n          bottom: 20,\n        })\n\n      if (this.obj.isExpand) {\n        Text('expand')\n          .fontSize(14)\n          .fontColor('#999999')\n      }\n    }\n    .width('100%')\n    .borderRadius(10)\n    .backgroundColor(Color.White)\n    .padding(15)\n    .onClick(() => {\n      this.obj.isExpand = !this.obj.isExpand;\n    })\n  }\n}\n\n@ObservedV2\nclass ListItemObject {\n  @Trace uuid: string = '';\n  @Trace id: number = 0;\n  @Trace isExpand: boolean = false;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(319064)/* ["default"] */.A) + "",
        width: "300",
        height: "478"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "grid使用场景",
      children: "Grid使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@Reusable使用示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable#grid%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF",
        children: "Grid使用场景"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@ReusableV2的Grid使用场景示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct MyComponent {\n  // 数据源。\n  @Local data: number[] = [];\n\n  aboutToAppear() {\n    for (let i = 1; i < 1000; i++) {\n      this.data.push(i);\n    }\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      Grid() {\n        Repeat(this.data)\n          .virtualScroll()\n          .each((ri) => {\n            GridItem() {\n              ReusableV2ChildComponent({ item: ri.item })\n            }\n          })\n      }\n      .cachedCount(2) // 设置GridItem的缓存数量。\n      .columnsTemplate('1fr 1fr 1fr')\n      .columnsGap(10)\n      .rowsGap(10)\n      .margin(10)\n      .height(500)\n      .backgroundColor(0xFAEEE0)\n    }\n  }\n}\n\n@ReusableV2\n@ComponentV2\nstruct ReusableV2ChildComponent {\n  @Param item: number = 0;\n\n  aboutToAppear() {\n  }\n\n  build() {\n    Column() {\n      // 开发者可自行替换显示图片的内容，此处以app.media.startIcon为例\n      Image($r('app.media.startIcon'))\n        .objectFit(ImageFit.Fill)\n        .layoutWeight(1)\n      Text(`图片${this.item}`)\n        .fontSize(16)\n        .textAlign(TextAlign.Center)\n    }\n    .width('100%')\n    .height(120)\n    .backgroundColor(0xF9CF93)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(937091)/* ["default"] */.A) + "",
        width: "333",
        height: "350"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "waterflow使用场景",
      children: "WaterFlow使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@Reusable使用示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable#waterflow%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF",
        children: "WaterFlow使用场景"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@ReusableV2的WaterFlow使用场景示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ReusableV2\n@ComponentV2\nstruct ReusableV2FlowItem {\n  @Param item: number = 0;\n\n  build() {\n    Column() {\n      Text('N' + this.item).fontSize(24).height(26).margin(10)\n      // 开发者可自行替换显示图片的内容，此处以app.media.startIcon为例\n      Image($r('app.media.startIcon'))\n        .objectFit(ImageFit.Cover)\n        .width(50)\n        .height(50)\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local minSize: number = 50;\n  @Local maxSize: number = 80;\n  @Local fontSize: number = 24;\n  @Local colors: number[] = [0xFFC0CB, 0xDA70D6, 0x6B8E23, 0x6A5ACD, 0x00FFFF, 0x00FF7F];\n  scroller: Scroller = new Scroller();\n  @Local dataSource: number[] = [];\n  private itemWidthArray: number[] = [];\n  private itemHeightArray: number[] = [];\n\n  // 计算flow item宽/高。\n  getSize() {\n    let ret = Math.floor(Math.random() * this.maxSize);\n    return (ret > this.minSize ? ret : this.minSize);\n  }\n\n  // 保存flow item宽/高。\n  getItemSizeArray() {\n    for (let i = 0; i < 100; i++) {\n      this.itemWidthArray.push(this.getSize());\n      this.itemHeightArray.push(this.getSize());\n    }\n  }\n\n  aboutToAppear() {\n    for (let i = 0; i <= 60; i++) {\n      this.dataSource.push(i);\n    }\n    this.getItemSizeArray();\n  }\n\n  build() {\n    Stack({ alignContent: Alignment.TopStart }) {\n      Column({ space: 2 }) {\n        Button('back top')\n          .height('5%')\n          .onClick(() => {\n            // 点击后回到顶部。\n            this.scroller.scrollEdge(Edge.Top);\n          })\n        WaterFlow({ scroller: this.scroller }) {\n          Repeat(this.dataSource)\n            .virtualScroll()\n            .each((ri) => {\n              FlowItem() {\n                ReusableV2FlowItem({ item: ri.item })\n              }.onAppear(() => {\n                if (ri.item + 20 == this.dataSource.length) {\n                  for (let i = 0; i < 50; i++) {\n                    this.dataSource.splice(this.dataSource.length, 0, this.dataSource.length);\n                  }\n                }\n              })\n            })\n        }.margin({ left: 160, top: 10 })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(790194)/* ["default"] */.A) + "",
        width: "250",
        height: "932"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "swiper使用场景",
      children: "Swiper使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@Reusable使用示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable#swiper%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF",
        children: "Swiper使用场景"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@ReusableV2的Swiper使用场景示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct Index {\n  private dataSource: Question[] = new Array<Question>();\n\n  aboutToAppear(): void {\n    for (let i = 0; i < 1000; i++) {\n      let title = i + 1 + 'test_swiper';\n      let answers = ['test1', 'test2', 'test3', 'test4'];\n      // 开发者可自行替换显示图片的内容，此处以app.media.startIcon为例\n      this.dataSource.push(new Question(i.toString(), title, $r('app.media.startIcon'), answers));\n    }\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      Swiper() {\n        Repeat(this.dataSource)\n          .virtualScroll()\n          .each((ri) => {\n            QuestionSwiperItem({ itemData: ri.item })\n          })\n      }\n    }\n    .width('100%')\n    .margin({ top: 5 })\n  }\n}\n\n@ObservedV2\nclass Question {\n  @Trace id: string = '';\n  @Trace title: ResourceStr = '';\n  @Trace image: ResourceStr = '';\n  @Trace answers: Array<ResourceStr> = [];\n\n  constructor(id: string, title: ResourceStr, image: ResourceStr, answers: Array<ResourceStr>) {\n    this.id = id;\n    this.title = title;\n    this.image = image;\n    this.answers = answers;\n  }\n}\n\n@ReusableV2\n@ComponentV2\nstruct QuestionSwiperItem {\n  @Param itemData: Question | null = null;\n\n  build() {\n    Column() {\n      Text(this.itemData?.title)\n        .fontSize(18)\n        .fontColor($r('sys.color.ohos_id_color_primary'))\n        .alignSelf(ItemAlign.Start)\n        .margin({\n          top: 10,\n          bottom: 16\n        })\n      Image(this.itemData?.image)\n        .width('100%')\n        .borderRadius(12)\n        .objectFit(ImageFit.Contain)\n        .margin({\n          bottom: 16\n        })\n        .height(80)\n        .width(80)\n\n      Column({ space: 16 }) {\n        Repeat(this.itemData?.answers)\n          .each((ri) => {\n            Text(ri.item)\n              .fontSize(16)\n              .fontColor($r('sys.color.ohos_id_color_primary'))\n          })\n      }\n      .width('100%')\n      .alignItems(HorizontalAlign.Start)\n    }\n    .width('100%')\n    .padding({\n      left: 16,\n      right: 16\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(902684)/* ["default"] */.A) + "",
        width: "300",
        height: "220"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "列表滚动-listitemgroup使用场景",
      children: "列表滚动-ListItemGroup使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@Reusable使用示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable#%E5%88%97%E8%A1%A8%E6%BB%9A%E5%8A%A8-listitemgroup%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF",
        children: "列表滚动-ListItemGroup使用场景"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@ReusableV2的列表滚动-ListItemGroup使用场景示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct ListItemGroupAndReusable {\n  dataSource: DataSrc[] = new Array<DataSrc>();\n\n  @Builder\n  itemHead(text: string) {\n    Text(text)\n      .fontSize(20)\n      .backgroundColor(0xff519db4)\n      .width('100%')\n      .padding(10)\n  }\n\n  aboutToAppear() {\n    for (let i = 0; i < 10000; i++) {\n      let data = new DataSrc();\n      for (let j = 0; j < 12; j++) {\n        data.dataScr1.push(`测试条目数据: ${i} - ${j}`);\n      }\n      this.dataSource.push(data);\n    }\n  }\n\n  build() {\n    Stack() {\n      List() {\n        Repeat(this.dataSource)\n          .virtualScroll()\n          .each((ri) => {\n            ListItemGroup({ header: this.itemHead(ri.index.toString()) }) {\n              Repeat(ri.item.dataScr1)\n                .virtualScroll()\n                .each((ri) => {\n                  ListItem() {\n                    Inner({ str: ri.item })\n                  }\n                })\n            }\n          })\n      }\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n\n@ReusableV2\n@ComponentV2\nstruct Inner {\n  @Param str: string = '';\n\n  build() {\n    Text(this.str)\n  }\n}\n\n@ObservedV2\nclass DataSrc {\n  @Trace dataScr1: string[] = [];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(306164)/* ["default"] */.A) + "",
        width: "300",
        height: "827"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "多种条目类型使用场景",
      children: "多种条目类型使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@Reusable使用示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable#%E5%A4%9A%E7%A7%8D%E6%9D%A1%E7%9B%AE%E7%B1%BB%E5%9E%8B%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF",
        children: "多种条目类型使用场景"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@ReusableV2的多种条目类型使用场景示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "标准型"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "复用组件的布局相同，示例参见本文列表滚动部分用例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "有限变化型"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "复用组件间存在差异，但类型有限。例如，可以通过显式设置两个reuse选项或使用两个自定义组件来实现复用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct Index {\n  private data: number[] = [];\n\n  aboutToAppear() {\n    for (let i = 0; i < 1000; i++) {\n      this.data.push(i);\n    }\n  }\n\n  build() {\n    Column() {\n      List({ space: 10 }) {\n        Repeat(this.data)\n          .virtualScroll()\n          .each((ri) => {\n            ListItem() {\n              if (ri.item % 2 === 0 ) {\n                ReusableV2Component({ item: ri.item }).reuse({reuseId: () => 'ReusableV2ComponentOne'})\n              } else {\n                ReusableV2Component({ item: ri.item }).reuse({reuseId: () => 'ReusableV2ComponentTwo'})\n              }\n            }\n          })\n      }\n      .cachedCount(2)\n    }\n  }\n}\n\n@ReusableV2\n@ComponentV2\nstruct ReusableV2Component {\n  @Param item: number = 0;\n\n  aboutToReuse() {\n    // 如无需对状态变量做额外修改，aboutToReuse回调可移除\n    console.info(`ReusableComponent aboutToReuse called${this.item}`)\n  }\n\n  build() {\n    Column() {\n      // 组件内部根据类型差异渲染\n      if (this.item % 2 === 0) {\n        Text(`Item ${this.item} ReusableComponentOne`)\n          .fontSize(20)\n          .margin({ left: 10 })\n      } else {\n        Text(`Item ${this.item} ReusableComponentTwo`)\n          .fontSize(20)\n          .margin({ left: 10 })\n      }\n    }.margin({ left: 10, right: 10 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(833245)/* ["default"] */.A) + "",
        width: "369",
        height: "530"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "组合型"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["复用组件间存在多种差异，但通常具备共同的子组件。将三种复用组件以组合型方式转换为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
        children: "@Builder"
      }), "函数后，内部的共享子组件将统一置于父组件MyComponentV2之下。复用这些子组件时，缓存池在父组件层面实现共享，减少组件创建过程中的资源消耗。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct MyComponentV2 {\n  private data: string[] = [];\n\n  aboutToAppear() {\n    for (let i = 0; i < 1000; i++) {\n      this.data.push(i.toString());\n    }\n  }\n\n  // itemBuilderOne作为复用组件的写法未展示，以下为转为Builder之后的写法。\n  @Builder\n  itemBuilderOne(item: string) {\n    Column() {\n      ChildComponentA({ item: item })\n      ChildComponentB({ item: item })\n      ChildComponentC({ item: item })\n    }\n  }\n\n  // itemBuilderTwo转为Builder之后的写法。\n  @Builder\n  itemBuilderTwo(item: string) {\n    Column() {\n      ChildComponentA({ item: item })\n      ChildComponentC({ item: item })\n      ChildComponentD({ item: item })\n    }\n  }\n\n  // itemBuilderThree转为Builder之后的写法。\n  @Builder\n  itemBuilderThree(item: string) {\n    Column() {\n      ChildComponentA({ item: item })\n      ChildComponentB({ item: item })\n      ChildComponentD({ item: item })\n    }\n  }\n\n  build() {\n    List({ space: 40 }) {\n      Repeat(this.data)\n        .virtualScroll()\n        .each((ri) => {\n          ListItem() {\n            if (ri.index % 3 === 0) {\n              this.itemBuilderOne(ri.item)\n            } else if (ri.index % 5 === 0) {\n              this.itemBuilderTwo(ri.item)\n            } else {\n              this.itemBuilderThree(ri.item)\n            }\n          }\n        })\n    }\n    .width('100%')\n    .height('100%')\n    .cachedCount(0)\n  }\n}\n\n@ReusableV2\n@ComponentV2\nstruct ChildComponentA {\n  @Param item: string = '';\n\n  aboutToReuse() {\n    // 如无需对状态变量做额外修改，aboutToReuse回调可移除\n    console.info(`ChildComponentA Reuse ${this.item}`);\n  }\n\n  aboutToRecycle(): void {\n    console.info(`ChildComponentA ${this.item} Recycle`);\n  }\n\n  build() {\n    Column() {\n      Text(`Item ${this.item} Child Component A`)\n        .fontSize(20)\n        .margin({ left: 10 })\n        .fontColor(Color.Blue)\n      Grid() {\n        ForEach((new Array(20)).fill(''), (item: string, index: number) => {\n          GridItem() {\n            // 开发者可自行替换显示图片的内容，此处以app.media.startIcon为例\n            Image($r('app.media.startIcon'))\n              .height(20)\n          }\n        })\n      }\n      .columnsTemplate('1fr 1fr 1fr 1fr 1fr')\n      .rowsTemplate('1fr 1fr 1fr 1fr')\n      .columnsGap(10)\n      .width('90%')\n      .height(160)\n    }\n    .margin({ left: 10, right: 10 })\n    .backgroundColor(0xFAEEE0)\n  }\n}\n\n@ReusableV2\n@ComponentV2\nstruct ChildComponentB {\n  @Param item: string = '';\n\n  build() {\n    Row() {\n      Text(`Item ${this.item} Child Component B`)\n        .fontSize(20)\n        .margin({ left: 10 })\n        .fontColor(Color.Red)\n    }.margin({ left: 10, right: 10 })\n  }\n}\n\n@ReusableV2\n@ComponentV2\nstruct ChildComponentC {\n  @Param item: string = '';\n\n  build() {\n    Row() {\n      Text(`Item ${this.item} Child Component C`)\n        .fontSize(20)\n        .margin({ left: 10 })\n        .fontColor(Color.Green)\n    }.margin({ left: 10, right: 10 })\n  }\n}\n\n@ReusableV2\n@ComponentV2\nstruct ChildComponentD {\n  @Param item: string = '';\n\n  build() {\n    Row() {\n      Text(`Item ${this.item} Child Component D`)\n        .fontSize(20)\n        .margin({ left: 10 })\n        .fontColor(Color.Orange)\n    }.margin({ left: 10, right: 10 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(619320)/* ["default"] */.A) + "",
        width: "288",
        height: "430"
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
902684(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957626-f3cfa6a61fc4dfcf99d9b2315a75f6b0.gif");

},
319064(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477625-302e3eeb787b6aae1db6b1164e435d82.gif");

},
833245(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797978-d540df7ec10ec8dfec60cec8a338f876.png");

},
937091(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797976-6128a5324a69c12b0ac40b34778184e0.png");

},
941449(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957624-53e7115b741d526f2d45c3c6358e6f3e.gif");

},
532145(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437669-a1477f176587a626290e96b212d92d46.gif");

},
418588(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797974-5166b67b85c6572a20a926abcbea64f9.gif");

},
790194(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437671-eb52c4f0e5401e51140079395802c819.gif");

},
619320(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437673-1a9a0529c0d34166041065bac81bc1a6.png");

},
306164(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477627-9da7d8b88723d19f1dcd5f05cb6c28dc.gif");

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