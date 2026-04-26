"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["615535"], {
114454(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_rendering_control_arkts_new_rendering_control_repeat_arkts_new_rendering_control_repeat_md_5a9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-rendering-control-arkts-new-rendering-control-repeat-arkts-new-rendering-control-repeat-md-5a9.json
var site_docs_arkui_arkts_ui_development_arkts_rendering_control_arkts_new_rendering_control_repeat_arkts_new_rendering_control_repeat_md_5a9_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat/arkts-new-rendering-control-repeat","title":"Repeat：可复用的循环渲染","description":"- Repeat从API version 12开始支持。","source":"@site/docs/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat/arkts-new-rendering-control-repeat.md","sourceDirName":"arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat","slug":"/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Repeat：可复用的循环渲染","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-rendering-control-repeat","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"LazyForEach：数据懒加载","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach/"},"next":{"title":"ContentSlot：混合开发","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-contentslot/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat/arkts-new-rendering-control-repeat.md


const frontMatter = {
	title: 'Repeat：可复用的循环渲染',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-rendering-control-repeat',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Repeat：可复用的循环渲染';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "使用限制",
  "id": "使用限制",
  "level": 2
}, {
  "value": "基础特性",
  "id": "基础特性",
  "level": 2
}, {
  "value": "子组件生成规则",
  "id": "子组件生成规则",
  "level": 3
}, {
  "value": "键值生成规则",
  "id": "键值生成规则",
  "level": 3
}, {
  "value": "懒加载能力说明",
  "id": "懒加载能力说明",
  "level": 3
}, {
  "value": "节点更新/复用能力说明",
  "id": "节点更新复用能力说明",
  "level": 3
}, {
  "value": "高级特性",
  "id": "高级特性",
  "level": 2
}, {
  "value": "数据精准懒加载",
  "id": "数据精准懒加载",
  "level": 3
}, {
  "value": "拖拽排序",
  "id": "拖拽排序",
  "level": 3
}, {
  "value": "数据前插保持",
  "id": "数据前插保持",
  "level": 3
}, {
  "value": "常见使用场景",
  "id": "常见使用场景",
  "level": 2
}, {
  "value": "数据展示&amp;操作",
  "id": "数据展示操作",
  "level": 3
}, {
  "value": "Repeat嵌套",
  "id": "repeat嵌套",
  "level": 3
}, {
  "value": "父容器组件应用场景",
  "id": "父容器组件应用场景",
  "level": 3
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "显示区域外增删数据时保持滚动位置不变",
  "id": "显示区域外增删数据时保持滚动位置不变",
  "level": 3
}, {
  "value": "totalCount值大于数据源长度",
  "id": "totalcount值大于数据源长度",
  "level": 3
}, {
  "value": "与@Builder混用时状态变量未刷新",
  "id": "与builder混用时状态变量未刷新",
  "level": 3
}, {
  "value": "expandSafeArea属性失效",
  "id": "expandsafearea属性失效",
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
        id: "repeat可复用的循环渲染",
        children: "Repeat：可复用的循环渲染"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(494570)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat从API version 12开始支持。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["本文档仅为开发指南。组件接口规范见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-repeat/ts-rendering-control-repeat",
          children: "Repeat API参数说明"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由于不同设备屏幕宽高不同，本指南内的示例的实际效果和截图有偏差。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Repeat基于数组类型数据来进行循环渲染，一般与滚动容器组件配合使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Repeat根据容器组件的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "显示区域和预加载区域"
        })
      }), "加载子组件。当容器滑动/数组改变时，Repeat会根据父容器组件的布局过程重新计算显示区域和预加载区域范围，并管理列表子组件节点的创建与销毁。Repeat通过组件节点更新/复用从而优化性能表现，详细描述见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%9B%B4%E6%96%B0%E5%A4%8D%E7%94%A8%E8%83%BD%E5%8A%9B%E8%AF%B4%E6%98%8E",
        children: "节点更新/复用能力说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文档依次介绍了Repeat的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%9F%BA%E7%A1%80%E7%89%B9%E6%80%A7",
        children: "基础特性"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7",
        children: "高级特性"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%B8%B8%E8%A7%81%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF",
        children: "常见使用场景"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98",
        children: "常见问题"
      }), "，开发者可以按需阅读。在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AD%90%E7%BB%84%E4%BB%B6%E7%94%9F%E6%88%90%E8%A7%84%E5%88%99",
        children: "子组件生成规则"
      }), "小节中，给出了简单的示例，可以帮助开发者快速上手Repeat的使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(428838)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Repeat与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "LazyForEach"
      }), "组件的区别："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Repeat直接监听状态变量的变化，而LazyForEach需要开发者实现", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach#idatasource",
          children: "IDataSource"
        }), "接口，手动管理子组件内容/索引的修改。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat还增强了节点复用能力，提高了长列表滑动和数据更新的渲染性能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat增加了渲染模板（template）的能力，在同一个数组中，根据开发者自定义的模板类型（template type）渲染不同的子组件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相较于LazyForEach，Repeat用法更加简单，渲染性能更好，建议开发者优先使用Repeat。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用限制",
      children: "使用限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Repeat必须在滚动类容器组件内使用，仅有", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
            children: "List"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitemgroup/ts-container-listitemgroup",
            children: "ListItemGroup"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid",
            children: "Grid"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper",
            children: "Swiper"
          }), "以及", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow",
            children: "WaterFlow"
          }), "组件支持Repeat懒加载场景。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["循环渲染只允许创建一个子组件，子组件应当是允许包含在容器组件中的子组件。例如：Repeat与", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
            children: "List"
          }), "组件配合使用时，子组件必须为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem",
            children: "ListItem"
          }), "组件。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Repeat", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E6%87%92%E5%8A%A0%E8%BD%BD%E8%83%BD%E5%8A%9B%E8%AF%B4%E6%98%8E",
            children: "懒加载模式"
          }), "不支持与", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview#%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86v1",
            children: "状态管理（V1）"
          }), "配合使用，否则会导致渲染异常。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Repeat当前不支持动画效果。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "滚动容器组件内只能包含一个Repeat。以List为例，不建议同时包含ListItem、ForEach、LazyForEach，不建议同时包含多个Repeat。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当Repeat与自定义组件或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
            children: "@Builder"
          }), "函数混用时，必须将RepeatItem类型整体进行传参，组件才能监听到数据变化。详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E4%B8%8Ebuilder%E6%B7%B7%E7%94%A8%E6%97%B6%E7%8A%B6%E6%80%81%E5%8F%98%E9%87%8F%E6%9C%AA%E5%88%B7%E6%96%B0",
            children: "与@Builder混用时状态变量未刷新"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Repeat子组件复用时不会触发", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttorecycle10",
            children: "aboutToRecycle"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttoreuse10",
            children: "aboutToReuse"
          }), "生命周期。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(461448)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Repeat功能依赖数组属性的动态修改。如果数组对象被密封（sealed）或冻结（frozen），将导致Repeat部分功能失效，因为密封操作会禁止对象扩展属性并锁定现有属性的配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常见触发场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1）可观察数据的转换：使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#makeobserved",
        children: "makeObserved"
      }), "将普通数组（如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-array/arkts-apis-arkts-collections-array",
        children: "collections.Array"
      }), "）转换为可观察数据时，某些实现会自动密封数组。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2）主动对象保护：显式调用Object.seal()或Object.freeze()防止数组被修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基础特性",
      children: "基础特性"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "子组件生成规则",
      children: "子组件生成规则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Repeat通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-repeat/ts-rendering-control-repeat#each",
        children: ".each()"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-repeat/ts-rendering-control-repeat#template",
        children: ".template()"
      }), "属性定义子组件生成规则。每个子组件必须有且仅有一个根节点。当Repeat仅包含一种类型的子组件时，可使用.each()属性定义子组件的生成规则。当Repeat包含多种类型的子组件时，可使用.template()属性分别定义不同类型子组件的生成规则。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "单一类型子组件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: ".each()适用于只需要循环渲染一种子组件的场景。下列示例代码使用Repeat组件进行简单的循环渲染。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 在List容器组件中使用Repeat\n@Entry\n@ComponentV2\n  // 推荐使用V2装饰器\nstruct RepeatExample {\n  @Local dataArr: Array<string> = []; // 数据源\n\n  aboutToAppear(): void {\n    for (let i = 0; i < 50; i++) {\n      this.dataArr.push(`data_${i}`); // 为数组添加一些数据\n    }\n  }\n\n  build() {\n    Column() {\n      List() {\n        Repeat<string>(this.dataArr)\n          .each((ri: RepeatItem<string>) => {\n            ListItem() {\n              Text('each_' + ri.item).fontSize(30)\n            }\n          })\n          .virtualScroll({ totalCount: this.dataArr.length }) // 打开懒加载，totalCount为期望加载的数据长度\n      }\n      .cachedCount(2) // 容器组件的预加载区域大小\n      .height('70%')\n      .border({ width: 1 }) // 边框\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行后界面如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(705360)/* ["default"] */.A) + "",
        width: "322",
        height: "532"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "多种类型子组件"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Repeat提供渲染模板（template）能力，可以在同一个数据源中渲染多种子组件。每个数据项会根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-repeat/ts-rendering-control-repeat#templateid",
        children: ".templateId()"
      }), "得到template type，从而渲染type对应的.template()中的子组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(275858)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [".template()需要在", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%87%92%E5%8A%A0%E8%BD%BD%E8%83%BD%E5%8A%9B%E8%AF%B4%E6%98%8E",
          children: "懒加载模式"
        }), "下使用。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: ".each()等价于template type为空字符串的.template()。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当多个template type相同时（包括template type为空字符串），Repeat仅生效最新定义的.each()或.template()。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果.templateId()缺省，或templateId()计算得到的template type不存在，则template type取默认值空字符串。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "只有相同template type的节点可以互相复用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下列示例代码中使用Repeat组件进行循环渲染，并使用了多个渲染模板。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 在List容器组件中使用Repeat\n@Entry\n@ComponentV2 // 推荐使用V2装饰器\nstruct RepeatExampleWithTemplates {\n  @Local dataArr: Array<string> = []; // 数据源\n\n  aboutToAppear(): void {\n    for (let i = 0; i < 50; i++) {\n      this.dataArr.push(`data_${i}`); // 为数组添加一些数据\n    }\n  }\n\n  build() {\n    Column() {\n      List() {\n        Repeat<string>(this.dataArr)\n          .each((ri: RepeatItem<string>) => { // 默认渲染模板\n            ListItem() {\n              Text('each_' + ri.item).fontSize(30).fontColor('rgb(161,10,33)') // 文本颜色为红色\n            }\n          })\n          .key((item: string, index: number): string => JSON.stringify(item)) // 键值生成函数\n          .virtualScroll({ totalCount: this.dataArr.length }) // 打开懒加载，totalCount为期望加载的数据长度\n          .templateId((item: string, index: number): string => { // 根据返回值寻找对应的模板子组件进行渲染\n            return index <= 4 ? 'A' : (index <= 10 ? 'B' : ''); // 前5个节点模板为A，接下来的5个为B，其余为默认模板\n          })\n          .template('A', (ri: RepeatItem<string>) => { // 'A'模板\n            ListItem() {\n              Text('A_' + ri.item).fontSize(30).fontColor('rgb(23,169,141)') // 文本颜色为绿色\n            }\n          }, { cachedCount: 3 }) // 'A'模板的缓存列表容量为3\n          .template('B', (ri: RepeatItem<string>) => { // 'B'模板\n            ListItem() {\n              Text('B_' + ri.item).fontSize(30).fontColor('rgb(39,135,217)') // 文本颜色为蓝色\n            }\n          }, { cachedCount: 4 }) // 'B'模板的缓存列表容量为4\n      }\n      .cachedCount(2) // 容器组件的预加载区域大小\n      .height('70%')\n      .border({ width: 1 }) // 边框\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行后界面如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(772913)/* ["default"] */.A) + "",
        width: "316",
        height: "506"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "键值生成规则",
      children: "键值生成规则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Repeat的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-repeat/ts-rendering-control-repeat#key",
        children: ".key()"
      }), "属性为每个子组件生成一个键值。Repeat通过键值识别数组增加、删除哪些数据以及哪些数据改变了位置（索引）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当.key()缺省时，Repeat会生成新的随机键值。当发现有重复key时，Repeat会在已有键值的基础上递归生成新的键值，直到没有重复键值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(612616)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "键值（key）与索引（index）的区别：键值是数据项的唯一标识符，Repeat根据键值是否发生变化判断数据项是否更新；索引只标识数据项在数组中的位置。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%87%92%E5%8A%A0%E8%BD%BD%E8%83%BD%E5%8A%9B%E8%AF%B4%E6%98%8E",
          children: "懒加载模式"
        }), "下，Repeat也会通过状态管理机制监听数据本身的变化，从而实现高效的更新。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "键值生成函数.key()的使用限制："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "即使数组发生变化，开发者也必须保证键值key唯一。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "每次执行.key()函数时，使用相同的数据项作为输入，输出必须是一致的。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "允许在.key()中使用index，但不建议开发者这样做。因为在数据项移动时索引index发生变化的同时key值也会改变，导致Repeat认为数据发生变化，从而触发子组件重新渲染，降低性能表现。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "推荐将简单类型数组转换为类对象数组，并添加一个readonly id属性，在构造函数中初始化唯一值。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "键值生成示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass ExampleData {\n  @Trace str: string;\n  num: number;\n\n  constructor(s: string, n: number) {\n    this.str = s;\n    this.num = n;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local exampleList: Array<ExampleData> = [];\n\n  aboutToAppear(): void {\n    for (let i = 0; i < 20; i++) {\n      this.exampleList.push(new ExampleData(`data${i}`, i));\n    }\n  }\n\n  build() {\n    Column() {\n      List({ space: 10 }) {\n        Repeat(this.exampleList)\n          .each((obj: RepeatItem<ExampleData>) => {\n            ListItem() {\n              Text(obj.item.str).fontSize(50)\n            }\n          })\n          .key(item => item.str) // UI显示刷新与属性str相关，建议在键值生成函数中设置其为返回值，此处键值生成与index无关\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上述示例代码中，使用.key()定义键值生成函数，各子组件的键值为item元素的str属性值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "懒加载能力说明",
      children: "懒加载能力说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Repeat加载子节点具有懒加载和全量加载两种模式。开发者可通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-repeat/ts-rendering-control-repeat#virtualscroll",
        children: ".virtualScroll()"
      }), "属性选择合适的加载模式。对于长列表场景，懒加载模式支持按需加载子组件，建议开发者优先使用懒加载模式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "懒加载模式"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Repeat的.virtualScroll()属性，即可使能懒加载能力。在懒加载模式下，Repeat根据当前的容器组件显示区域和预加载区域范围，按需加载子组件。如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(890437)/* ["default"] */.A) + "",
        width: "1000",
        height: "412"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(48207)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["懒加载模式需要和滚动容器组件", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
          children: "List"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitemgroup/ts-container-listitemgroup",
          children: "ListItemGroup"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid",
          children: "Grid"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper",
          children: "Swiper"
        }), "或", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow",
          children: "WaterFlow"
        }), "配合使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["懒加载模式需要和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview#%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86v2",
          children: "状态管理（V2）"
        }), "配合使用。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "键值变化或数据变化均会触发页面刷新。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "全量加载模式"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当关闭Repeat的.virtualScroll()属性时（即省略该属性），Repeat在初始化页面时加载列表中的所有子组件，适合", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "短数据列表/组件全部加载"
        })
      }), "的场景。对于", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "长数据列表（数据长度大于30）"
        })
      }), "，如果关闭懒加载，Repeat会一次性加载全量子组件，此操作耗时长，不建议使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(756188)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "渲染模板特性（template）不可用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不受滚动容器组件的限制，可以在任意场景使用。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["支持与", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview#%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86v1",
          children: "状态管理（V1）"
        }), "配合使用。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "页面刷新取决于键值变化：如果更新前后键值相同，即使数据改变，页面也不会刷新。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "节点更新复用能力说明",
      children: "节点更新/复用能力说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Repeat具有节点复用能力。Repeat子组件从组件树中移除时，会被存入缓存池中。后续创建新子组件时，会优先复用池中的节点。懒加载模式和全量加载模式下的复用流程细节存在差异，下文中将分别进行说明。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Repeat组件默认开启节点复用功能。从API version 18开始，在懒加载模式下，可以通过配置reusable字段选择是否启用复用功能。为了提高渲染性能，建议开发者保持节点复用。代码示例见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-repeat/ts-rendering-control-repeat#virtualscrolloptions",
        children: "VirtualScrollOptions"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18开始，Repeat支持懒加载模式下", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-freeze/arkts-custom-components-freezev2#repeat",
        children: "缓存池自定义组件冻结"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(711343)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Repeat子组件的节点操作分为四种：节点创建、节点更新、节点复用、节点销毁。其中，节点更新和节点复用的区别为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "节点更新：节点不销毁，状态变量驱动节点属性更新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "节点复用：旧节点不销毁，存储在空闲节点缓存池；需要创建新节点时，直接从缓存池中获取可复用的旧节点，并做相应的节点属性更新。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Repeat节点复用时，不会触发子组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttorecycle10",
        children: "aboutToRecycle"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttoreuse10",
        children: "aboutToReuse"
      }), "生命周期。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "懒加载模式下的节点更新/复用"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在懒加载模式下，当", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "滚动容器组件滑动/数组改变"
        })
      }), "时，Repeat将失效的子组件节点（离开容器组件的显示区域和预加载区域）加入空闲节点缓存池中，即断开组件节点与页面组件树的连接但不销毁节点。在需要生成新的组件时，对缓存池里的组件节点进行复用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下面通过", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "首次渲染"
        })
      }), "后典型的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "滑动场景"
        })
      }), "和", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "数据更新场景"
        })
      }), "示例来展示Repeat子组件的渲染逻辑。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "首次渲染。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义长度为20的数组，数组前5项的template type为aa，渲染浅蓝色组件，其余项为bb，渲染橙色组件。aa缓存池容量为3，bb缓存池容量为4。容器组件的预加载区域大小为2。为了便于理解，在aa和bb缓存池中分别加入一个和两个空闲节点。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "首次渲染时列表的节点状态如下图所示（template type在图中简写为ttype）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(210390)/* ["default"] */.A) + "",
            width: "887",
            height: "598"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "滑动场景。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将列表向下滑动一个节点的距离，Repeat会复用缓存池中的节点。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["1）index=10的节点进入预加载区域，计算出其template type为bb。由于bb缓存池非空，Repeat会从bb缓存池中取出一个空闲节点进行复用，更新其节点属性（数据item和索引index），该子组件中涉及数据item和索引index的其他孙子组件会根据", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview#%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86v2",
            children: "状态管理（V2）"
          }), "的规则做同步更新。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "2）index=0的节点滑出了预加载区域。当UI主线程空闲时，会检查aa缓存池是否已满，此时aa缓存池未满，将该节点加入到对应的缓存池中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "3）其余节点仍在容器显示区域和预加载区域范围，均只更新索引index。如果对应template type的缓存池已满，Repeat会在UI主线程空闲时销毁掉多余的节点。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(98803)/* ["default"] */.A) + "",
            width: "885",
            height: "607"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "数据更新场景。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在上一小节的基础上做如下的数组更新操作，删除index=4的节点，修改节点数据07为new。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "1）删除index=4的节点后，节点05前移。根据template type的计算规则，新的05节点的template type变为aa，直接复用旧的04节点，更新数据item和索引index，并且将旧的05节点加入bb缓存池。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "2）后面的列表节点前移，新进入预加载区域的节点11会复用bb缓存池中的空闲节点，其他节点均只更新索引index。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "3）对于节点数据从07变为new的情况，页面监听到数据源变化将会触发重新渲染。Repeat数据更新触发重新渲染的逻辑是比较当前索引处节点数据item是否变化，以此判断是否进行UI刷新，仅改变键值不改变item的情况不会触发刷新。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(761990)/* ["default"] */.A) + "",
            width: "887",
            height: "610"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "全量加载模式下的节点更新/复用"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在全量加载模式下，页面首次渲染时，Repeat子组件全部创建。数组发生改变后，Repeat对子组件节点的处理分为以下几个步骤："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "首先，遍历旧数组键值。如果新数组中没有该键值，将其加入键值集合deletedKeys。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其次，遍历新数组键值。依次判断以下条件，进行符合条件的操作："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若在旧数组中能找到相同键值，直接使用对应的子组件节点，并更新索引index。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若deletedKeys非空，按照先进后出的顺序，更新该集合中的键值所对应的节点。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若deletedKeys为空，则表示没有可以更新的节点，需要创建新节点。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "最后，如果新数组键值遍历结束后，deletedKeys非空，则销毁集合中的键值所对应的节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(306647)/* ["default"] */.A) + "",
        width: "700",
        height: "431"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下图中的数组变化为例，图中的item_X表示数据项的键值key。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(283652)/* ["default"] */.A) + "",
        width: "600",
        height: "301"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据上述判断逻辑：item_0没有变化，item_1和item_2只更新了索引，item_n1和item_n2分别由item_4和item_3进行节点更新获得，item_n3为新创建的节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(504938)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Repeat全量加载模式与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
        children: "ForEach"
      }), "组件的区别："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "针对特定数组更新场景的渲染性能进行了优化。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将子组件的内容/索引管理职责转移至框架层面。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例演示了全量加载模式下的节点更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct NodeUpdateMechanism {\n  @Local simpleList: Array<string> = ['one', 'two', 'three'];\n\n  build() {\n    Row() {\n      Column() {\n        Text('Click to change the value of the third array item')\n          .fontSize(24)\n          .fontColor(Color.Red)\n          .onClick(() => {\n            this.simpleList[2] = 'new three';\n          })\n\n        Repeat<string>(this.simpleList)\n          .each((obj: RepeatItem<string>)=>{\n            ChildItem({ item: obj.item })\n              .margin({top: 20})\n          })\n          .key((item: string) => item)\n      }\n      .justifyContent(FlexAlign.Center)\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n    .backgroundColor(0xF1F3F5)\n  }\n}\n\n@ComponentV2\nstruct ChildItem {\n  @Param @Require item: string;\n\n  build() {\n    Text(this.item)\n      .fontSize(30)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(632597)/* ["default"] */.A) + "",
        width: "349",
        height: "348"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击红色字体，第三个数据项发生变化（直接使用旧的组件节点，仅刷新数据）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "节点复用情况查看"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["查看节点是否为复用可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/deveco-testing",
        children: "DevEco Testing"
      }), "工具进行查看，进入DevEco Testing工具后，选择实用工具，界面如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(29356)/* ["default"] */.A) + "",
        width: "2559",
        height: "885"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在实用工具中选择UIViewer，该工具可以获取设备快照、控件树信息及控件节点属性，在右侧的控件树中选择Repeat子节点，右下方的节点属性会显示节点ID等信息，可以通过节点ID是否相同，判断组件复用或者新建的情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "高级特性",
      children: "高级特性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除循环渲染、懒加载、组件复用等能力外，Repeat还提供了数据精准懒加载、拖拽排序、数据前插保持等高级特性，开发者可按需使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据精准懒加载",
      children: "数据精准懒加载"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当数据源总长度较长，或数据项加载耗时较长时，可使用Repeat数据精准懒加载特性，避免在初始化时加载所有数据。Repeat数据精准懒加载特性从API version 19开始支持。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以设置.virtualScroll()的totalCount属性值或onTotalCount自定义方法用于计算期望加载的数据项总数，设置onLazyLoading属性实现数据精准懒加载，实现在节点首次渲染时加载对应的数据。详细说明和注意事项见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-repeat/ts-rendering-control-repeat#virtualscrolloptions",
        children: "VirtualScrollOptions"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例1"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据源总长度较长，在首次渲染、滑动屏幕、跳转显示区域时，动态加载对应区域内的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct RepeatLazyLoadingLongData {\n  // 假设数据源总长度较长，为1000。初始数组未提供数据。\n  @Local arr: Array<string> = [];\n  scroller: Scroller = new Scroller();\n\n  build() {\n    Column({ space: 5 }) {\n      // 初始显示位置为index = 100，数据可通过懒加载自动获取。\n      List({ scroller: this.scroller, space: 5, initialIndex: 100 }) {\n        Repeat(this.arr)\n          .virtualScroll({\n            // 期望的数据源总长度为1000。\n            onTotalCount: () => {\n              return 1000;\n            },\n            // 实现数据懒加载。\n            onLazyLoading: (index: number) => {\n              this.arr[index] = index.toString();\n            }\n          })\n          .each((obj: RepeatItem<string>) => {\n            ListItem() {\n              Row({ space: 5 }) {\n                Text(`${obj.index}: Item_${obj.item}`)\n              }\n            }\n            .height(50)\n          })\n      }\n      .height('80%')\n      .border({ width: 1 })\n\n      // 显示位置跳转至index = 500，数据可通过懒加载自动获取。\n      Button('ScrollToIndex 500')\n        .onClick(() => {\n          this.scroller.scrollToIndex(500);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行效果："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(700192)/* ["default"] */.A) + "",
        width: "311",
        height: "579"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例2"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据加载耗时长，在onLazyLoading方法中，首先为数据项创建占位符，再通过异步任务加载数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct RepeatLazyLoadingSync {\n  @Local arr: Array<string> = [];\n\n  build() {\n    Column({ space: 5 }) {\n      List({ space: 5 }) {\n        Repeat(this.arr)\n          .virtualScroll({\n            onTotalCount: () => {\n              return 100;\n            },\n            // 实现数据懒加载。\n            onLazyLoading: (index: number) => {\n              // 创建占位符。\n              this.arr[index] = '';\n              // 模拟高耗时加载过程，通过异步任务加载数据。\n              setTimeout(() => {\n                this.arr[index] = index.toString();\n              }, 1000);\n            }\n          })\n          .each((obj: RepeatItem<string>) => {\n            ListItem() {\n              Row({ space: 5 }) {\n                Text(`${obj.index}: Item_${obj.item}`)\n              }\n            }\n            .height(50)\n          })\n      }\n      .height('100%')\n      .border({ width: 1 })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行效果："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(99828)/* ["default"] */.A) + "",
        width: "311",
        height: "652"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例3"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用数据懒加载，并配合设置onTotalCount: () => { return this.arr.length + 1; }，可实现数据无限懒加载。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(475628)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "此场景下，开发者需要提供首屏显示所需的初始数据，并建议设置父容器组件cachedCount > 0，否则将会导致渲染异常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若与Swiper-Loop模式同时使用，停留在index = 0处时，将导致onLazyLoading方法被持续触发，建议避免与Swiper-Loop模式同时使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者需要关注内存消耗情况，避免因数据持续加载而导致内存过量消耗。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct RepeatLazyLoadingInfinite {\n  @Local arr: Array<string> = [];\n\n  // 提供首屏显示所需的初始数据。\n  aboutToAppear(): void {\n    for (let i = 0; i < 15; i++) {\n      this.arr.push(i.toString());\n    }\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      List({ space: 5 }) {\n        Repeat(this.arr)\n          .virtualScroll({\n            // 数据无限懒加载。\n            onTotalCount: () => {\n              return this.arr.length + 1;\n            },\n            onLazyLoading: (index: number) => {\n              this.arr[index] = index.toString();\n            }\n          })\n          .each((obj: RepeatItem<string>) => {\n            ListItem() {\n              Row({ space: 5 }) {\n                Text(`${obj.index}: Item_${obj.item}`)\n              }\n            }\n            .height(50)\n          })\n      }\n      .height('100%')\n      .border({ width: 1 })\n      // 建议设置cachedCount > 0。\n      .cachedCount(1)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行效果："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(611692)/* ["default"] */.A) + "",
        width: "311",
        height: "652"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "拖拽排序",
      children: "拖拽排序"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当Repeat在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
        children: "List"
      }), "组件下使用，并且设置了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-drag-sorting/ts-universal-attributes-drag-sorting#onmove",
        children: "onMove"
      }), "事件，Repeat每次迭代都生成一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem",
        children: "ListItem"
      }), "时，可以使能拖拽排序。Repeat拖拽排序特性从API version 19开始支持。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(790892)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "拖拽排序离手后，如果数据位置发生变化，则会触发onMove事件，上报数据移动原始索引号和目标索引号。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在onMove事件中，需要根据上报的起始索引号和目标索引号修改数据源。数据源修改前后，要保持每个数据的键值不变，只是顺序发生变化，才能保证落位动画正常执行。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "拖拽排序过程中，在离手之前，不允许修改数据源。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct RepeatVirtualScrollOnMove {\n  @Local simpleList: Array<string> = [];\n\n  aboutToAppear(): void {\n    for (let i = 0; i < 100; i++) {\n      this.simpleList.push(`${i}`);\n    }\n  }\n\n  build() {\n    Column() {\n      List() {\n        Repeat<string>(this.simpleList)\n        // 通过设置onMove，使能拖拽排序。\n          .onMove((from: number, to: number) => {\n            let temp = this.simpleList.splice(from, 1);\n            this.simpleList.splice(to, 0, temp[0]);\n          })\n          .each((obj: RepeatItem<string>) => {\n            ListItem() {\n              Text(obj.item)\n                .fontSize(16)\n                .textAlign(TextAlign.Center)\n                .size({ height: 100, width: '100%' })\n            }.margin(10)\n            .borderRadius(10)\n            .backgroundColor('#FFFFFFFF')\n          })\n          .key((item: string, index: number) => {\n            return item;\n          })\n          .virtualScroll({ totalCount: this.simpleList.length })\n      }\n      .border({ width: 1 })\n      .backgroundColor('#FFDCDCDC')\n      .width('100%')\n      .height('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行效果："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(842417)/* ["default"] */.A) + "",
        width: "230",
        height: "480"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据前插保持",
      children: "数据前插保持"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据前插保持，即在列表显示区域之前插入或删除数据后，保持显示区域子组件的滚动位置不变。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，仅当父容器组件为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
        children: "List"
      }), "且", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#maintainvisiblecontentposition12",
        children: "maintainVisibleContentPosition"
      }), "属性设置为true后，在List显示区域之前插入或删除数据时保持List显示区域子组件位置不变。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct PreInsertDemo {\n  @Local simpleList: Array<string> = [];\n  private cnt: number = 1;\n\n  aboutToAppear(): void {\n    for (let i = 0; i < 30; i++) {\n      this.simpleList.push(`Hello ${this.cnt++}`);\n    }\n  }\n\n  build() {\n    Column() {\n      Row() {\n        Button(`insert #5`)\n          .onClick(() => {\n            this.simpleList.splice(5, 0, `Hello ${this.cnt++}`);\n          })\n        Button(`delete #0`)\n          .onClick(() => {\n            this.simpleList.splice(0, 1);\n          })\n      }\n\n      List({ initialIndex: 5 }) {\n        Repeat<string>(this.simpleList)\n          .each((obj: RepeatItem<string>) => {\n            ListItem() {\n              Row() {\n                Text(`index: ${obj.index}  `)\n                  .fontSize(16)\n                  .fontColor('#70707070')\n                  .textAlign(TextAlign.End)\n                  .size({ height: 100, width: '40%' })\n                Text(`item: ${obj.item}`)\n                  .fontSize(16)\n                  .textAlign(TextAlign.Start)\n                  .size({ height: 100, width: '60%' })\n              }\n            }.margin(10)\n            .borderRadius(10)\n            .backgroundColor('#FFFFFFFF')\n          })\n          .key((item: string, index: number) => item)\n          .virtualScroll({ totalCount: this.simpleList.length })\n      }\n      .maintainVisibleContentPosition(true) // 启用前插保持\n      .border({ width: 1 })\n      .backgroundColor('#FFDCDCDC')\n      .width('100%')\n      .height('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例中，通过点击按钮在显示区域上方插入或删除数据时，显示区域的节点仅index发生改变，对应数据项不变。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行效果："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(54020)/* ["default"] */.A) + "",
        width: "343",
        height: "729"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见使用场景",
      children: "常见使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据展示操作",
      children: "数据展示&操作"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下面的代码示例展示了Repeat修改数组的常见操作，包括", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "插入数据、修改数据、删除数据、交换数据"
        })
      }), "。点击下拉框选择索引index值，点击相应的按钮即可操作数据项，依次点击两个不同的数据项可以进行交换。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass Repeat006Clazz {\n  @Trace public message: string = '';\n\n  constructor(message: string) {\n    this.message = message;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct RepeatVirtualScroll {\n  @Local simpleList: Array<Repeat006Clazz> = [];\n  private exchange: number[] = [];\n  private counter: number = 0;\n  @Local selectOptions: SelectOption[] = [];\n  @Local selectIdx: number = 0;\n\n  @Monitor('simpleList')\n  reloadSelectOptions(): void {\n    this.selectOptions = [];\n    for (let i = 0; i < this.simpleList.length; ++i) {\n      this.selectOptions.push({ value: i.toString() });\n    }\n    if (this.selectIdx >= this.simpleList.length) {\n      this.selectIdx = this.simpleList.length - 1;\n    }\n  }\n\n  aboutToAppear(): void {\n    for (let i = 0; i < 100; i++) {\n      this.simpleList.push(new Repeat006Clazz(`item_${i}`));\n    }\n    this.reloadSelectOptions();\n  }\n\n  handleExchange(idx: number): void { // 点击交换子组件\n    this.exchange.push(idx);\n    if (this.exchange.length === 2) {\n      let _a = this.exchange[0];\n      let _b = this.exchange[1];\n      let temp: Repeat006Clazz = this.simpleList[_a];\n      this.simpleList[_a] = this.simpleList[_b];\n      this.simpleList[_b] = temp;\n      this.exchange = [];\n    }\n  }\n\n  build() {\n    Column({ space: 10 }) {\n      Text('virtualScroll each()&template() 2t')\n        .fontSize(15)\n        .fontColor(Color.Gray)\n      Text('Select an index and press the button to update data.')\n        .fontSize(15)\n        .fontColor(Color.Gray)\n\n      Select(this.selectOptions)\n        .selected(this.selectIdx)\n        .value(this.selectIdx.toString())\n        .key('selectIdx')\n        .onSelect((index: number) => {\n          this.selectIdx = index;\n        })\n      Row({ space: 5 }) {\n        Button('Add No.' + this.selectIdx)\n          .onClick(() => {\n            this.simpleList.splice(this.selectIdx, 0, new Repeat006Clazz(`${this.counter++}_add_item`));\n            this.reloadSelectOptions();\n          })\n        Button('Modify No.' + this.selectIdx)\n          .onClick(() => {\n            this.simpleList.splice(this.selectIdx, 1, new Repeat006Clazz(`${this.counter++}_modify_item`));\n          })\n        Button('Del No.' + this.selectIdx)\n          .onClick(() => {\n            this.simpleList.splice(this.selectIdx, 1);\n            this.reloadSelectOptions();\n          })\n      }\n      Button('Update array length to 5')\n        .onClick(() => {\n          this.simpleList = this.simpleList.slice(0, 5);\n          this.reloadSelectOptions();\n        })\n\n      Text('Click on two items to exchange')\n        .fontSize(15)\n        .fontColor(Color.Gray)\n\n      List({ space: 10 }) {\n        Repeat<Repeat006Clazz>(this.simpleList)\n          .each((obj: RepeatItem<Repeat006Clazz>) => {\n            ListItem() {\n              Text(`[each] index${obj.index}: ${obj.item.message}`)\n                .fontSize(25)\n                .onClick(() => {\n                  this.handleExchange(obj.index);\n                })\n            }\n          })\n          .key((item: Repeat006Clazz, index: number) => {\n            return item.message;\n          })\n          .virtualScroll({ totalCount: this.simpleList.length })\n          .templateId((item: Repeat006Clazz, index: number) => {\n            return (index % 2 === 0) ? 'odd' : 'even';\n          })\n          .template('odd', (ri) => {\n            Text(`[odd] index${ri.index}: ${ri.item.message}`)\n              .fontSize(25)\n              .fontColor(Color.Blue)\n              .onClick(() => {\n                this.handleExchange(ri.index);\n              })\n          }, { cachedCount: 3 })\n          .template('even', (ri) => {\n            Text(`[even] index${ri.index}: ${ri.item.message}`)\n              .fontSize(25)\n              .fontColor(Color.Green)\n              .onClick(() => {\n                this.handleExchange(ri.index);\n              })\n          }, { cachedCount: 1 })\n      }\n      .cachedCount(2)\n      .border({ width: 1 })\n      .width('95%')\n      .height('40%')\n    }\n    .justifyContent(FlexAlign.Center)\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例代码展示了100项自定义类RepeatClazz的message字符串属性，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
        children: "List"
      }), "组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#cachedcount",
        children: "cachedCount"
      }), "属性设为2，模板'odd'和'even'的空闲节点缓存池大小分别设为3和1。运行后界面如下图所示："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(837003)/* ["default"] */.A) + "",
        width: "300",
        height: "442"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "repeat嵌套",
      children: "Repeat嵌套"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Repeat支持嵌套使用，示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Repeat嵌套\n@Entry\n@ComponentV2\nstruct NestedRepeat {\n  @Local outerList: string[] = [];\n  @Local innerList: number[] = [];\n\n  aboutToAppear(): void {\n    for (let i = 0; i < 20; i++) {\n      this.outerList.push(i.toString());\n      this.innerList.push(i);\n    }\n  }\n\n  build() {\n    Column({ space: 20 }) {\n      Text('Nested Repeat with virtualScroll')\n        .fontSize(15)\n        .fontColor(Color.Gray)\n      List() {\n        Repeat<string>(this.outerList)\n          .each((obj) => {\n            ListItem() {\n              Column() {\n                Text('outerList item: ' + obj.item)\n                  .fontSize(30)\n                List() {\n                  Repeat<number>(this.innerList)\n                    .each((subObj) => {\n                      ListItem() {\n                        Text('innerList item: ' + subObj.item)\n                          .fontSize(20)\n                      }\n                    })\n                    .key((item) => 'innerList_' + item)\n                    .virtualScroll()\n                }\n                .width('80%')\n                .border({ width: 1 })\n                .backgroundColor(Color.Orange)\n              }\n              .height('30%')\n              .backgroundColor(Color.Pink)\n            }\n            .border({ width: 1 })\n          })\n          .key((item) => 'outerList_' + item)\n          .virtualScroll()\n      }\n      .width('80%')\n      .border({ width: 1 })\n    }\n    .justifyContent(FlexAlign.Center)\n    .width('90%')\n    .height('80%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行效果："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(925290)/* ["default"] */.A) + "",
        width: "338",
        height: "612"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "父容器组件应用场景",
      children: "父容器组件应用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本节展示Repeat与滚动容器组件的常见应用场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "与List组合使用"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
        children: "List"
      }), "容器组件中使用Repeat，示例代码如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class DemoListItemInfo {\n  public name: string;\n  public icon: Resource;\n\n  constructor(name: string, icon: Resource) {\n    this.name = name;\n    this.icon = icon;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct DemoList {\n  @Local videoList: Array<DemoListItemInfo> = [];\n\n  aboutToAppear(): void {\n    for (let i = 0; i < 10; i++) {\n      // 此处app.media.listItem0、app.media.listItem1、app.media.listItem2仅作示例，请开发者自行替换\n      this.videoList.push(new DemoListItemInfo('Video' + i,\n        i % 3 == 0 ? $r('app.media.listItem0') :\n          i % 3 == 1 ? $r('app.media.listItem1') : $r('app.media.listItem2')));\n    }\n  }\n\n  @Builder\n  itemEnd(index: number) {\n    Button('Delete')\n      .backgroundColor(Color.Red)\n      .onClick(() => {\n        this.videoList.splice(index, 1);\n      })\n  }\n\n  build() {\n    Column({ space: 10 }) {\n      Text('List Contains the Repeat Component')\n        .fontSize(15)\n        .fontColor(Color.Gray)\n\n      List({ space: 5 }) {\n        Repeat<DemoListItemInfo>(this.videoList)\n          .each((obj: RepeatItem<DemoListItemInfo>) => {\n            ListItem() {\n              Column() {\n                Image(obj.item.icon)\n                  .width('80%')\n                  .margin(10)\n                Text(obj.item.name)\n                  .fontSize(20)\n              }\n            }\n            .swipeAction({\n              end: {\n                builder: () => {\n                  this.itemEnd(obj.index);\n                }\n              }\n            })\n            .onAppear(() => {\n            })\n          })\n          .key((item: DemoListItemInfo) => item.name)\n          .virtualScroll()\n      }\n      .cachedCount(2)\n      .height('90%')\n      .border({ width: 1 })\n      .listDirection(Axis.Vertical)\n      .alignListItem(ListItemAlign.Center)\n      .divider({\n        strokeWidth: 1,\n        startMargin: 60,\n        endMargin: 60,\n        color: '#ffe9f0f0'\n      })\n\n      Row({ space: 10 }) {\n        Button('Delete No.1')\n          .onClick(() => {\n            this.videoList.splice(0, 1);\n          })\n        Button('Delete No.5')\n          .onClick(() => {\n            this.videoList.splice(4, 1);\n          })\n      }\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "右滑并点击按钮，或点击底部按钮，可删除视频卡片："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(934830)/* ["default"] */.A) + "",
        width: "353",
        height: "709"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "与Grid组合使用"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid",
        children: "Grid"
      }), "容器组件中使用Repeat，示例如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nconst TAG = '[Sample_RenderingControl]';\nconst DOMAIN = 0xF811;\n\nclass DemoGridItemInfo {\n  public name: string;\n  public icon: Resource;\n\n  constructor(name: string, icon: Resource) {\n    this.name = name;\n    this.icon = icon;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct DemoGrid {\n  @Local itemList: Array<DemoGridItemInfo> = [];\n  @Local isRefreshing: boolean = false;\n  private layoutOptions: GridLayoutOptions = {\n    regularSize: [1, 1],\n    irregularIndexes: [10]\n  };\n  private gridScroller: Scroller = new Scroller();\n  private num: number = 0;\n\n  aboutToAppear(): void {\n    for (let i = 0; i < 10; i++) {\n      // 此处app.media.gridItem0、app.media.gridItem1、app.media.gridItem2仅作示例，请开发者自行替换\n      this.itemList.push(new DemoGridItemInfo('Video' + i,\n        i % 3 == 0 ? $r('app.media.gridItem0') :\n          i % 3 == 1 ? $r('app.media.gridItem1') : $r('app.media.gridItem2')));\n    }\n  }\n\n  build() {\n    Column({ space: 10 }) {\n      Text('Grid Contains the Repeat Component')\n        .fontSize(15)\n        .fontColor(Color.Gray)\n\n      Refresh({ refreshing: $$this.isRefreshing }) {\n        Grid(this.gridScroller, this.layoutOptions) {\n          Repeat<DemoGridItemInfo>(this.itemList)\n            .each((obj: RepeatItem<DemoGridItemInfo>) => {\n              if (obj.index === 10 ) {\n                GridItem() {\n                  Text('Last viewed here. Touch to refresh.')\n                    .fontSize(20)\n                }\n                .height(30)\n                .border({ width: 1 })\n                .onClick(() => {\n                  this.gridScroller.scrollToIndex(0);\n                  this.isRefreshing = true;\n                })\n                .onAppear(() => {\n                  hilog.info(DOMAIN, TAG, 'AceTag', obj.item.name);\n                })\n              } else {\n                GridItem() {\n                  Column() {\n                    Image(obj.item.icon)\n                      .width('100%')\n                      .height(80)\n                      .objectFit(ImageFit.Cover)\n                      .borderRadius({ topLeft: 16, topRight: 16 })\n                    Text(obj.item.name)\n                      .fontSize(15)\n                      .height(20)\n                  }\n                }\n                .height(100)\n                .borderRadius(16)\n                .backgroundColor(Color.White)\n                .onAppear(() => {\n                  hilog.info(DOMAIN, TAG, 'AceTag', obj.item.name);\n                })\n              }\n            })\n            .key((item: DemoGridItemInfo) => item.name)\n            .virtualScroll()\n        }\n        .columnsTemplate('repeat(auto-fit, 150)')\n        .cachedCount(4)\n        .rowsGap(15)\n        .columnsGap(10)\n        .height('100%')\n        .padding(10)\n        .backgroundColor('#F1F3F5')\n      }\n      .onRefreshing(() => {\n        setTimeout(() => {\n          this.itemList.splice(10, 1);\n          this.itemList.unshift(new DemoGridItemInfo('refresh', $r('app.media.gridItem0'))); // 此处app.media.gridItem0仅作示例，请开发者自行替换\n          for (let i = 0; i < 10; i++) {\n            // 此处app.media.gridItem0、app.media.gridItem1、app.media.gridItem2仅作示例，请开发者自行替换\n            this.itemList.unshift(new DemoGridItemInfo('New video' + this.num,\n              i % 3 == 0 ? $r('app.media.gridItem0') :\n                i % 3 == 1 ? $r('app.media.gridItem1') : $r('app.media.gridItem2')));\n            this.num++;\n          }\n          this.isRefreshing = false;\n        }, 1000);\n      })\n      .refreshOffset(64)\n      .pullToRefresh(true)\n      .width('100%')\n      .height('85%')\n\n      Button('Refresh')\n        .onClick(() => {\n          this.gridScroller.scrollToIndex(0);\n          this.isRefreshing = true;\n        })\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下拉屏幕，或点击刷新按钮，或点击“先前浏览至此，点击刷新”，可加载新的视频内容："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(460354)/* ["default"] */.A) + "",
        width: "353",
        height: "709"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "与Swiper组合使用"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper",
        children: "Swiper"
      }), "容器组件中使用Repeat，示例如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const remotePictures: string[] = [\n  'common/image/image1.png', // 请填写具体的图片地址\n  'common/image/image2.png',\n  'common/image/image3.png',\n];\n\n@ObservedV2\nclass DemoSwiperItemInfo {\n  public id: string;\n  @Trace public url: string = 'default';\n\n  constructor(id: string) {\n    this.id = id;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct DemoSwiper {\n  @Local pics: Array<DemoSwiperItemInfo> = [];\n\n  aboutToAppear(): void {\n    for (let i = 0; i < 3; i++) {\n      this.pics.push(new DemoSwiperItemInfo('pic' + i));\n    }\n    setTimeout(() => {\n      this.pics[0].url = remotePictures[0];\n    }, 1000);\n  }\n\n  build() {\n    Column() {\n      Text('Swiper Contains the Repeat Component')\n        .fontSize(15)\n        .fontColor(Color.Gray)\n\n      Stack() {\n        Text('Loading...')\n          .fontSize(15)\n          .fontColor(Color.Gray)\n        Swiper() {\n          Repeat(this.pics)\n            .each((obj: RepeatItem<DemoSwiperItemInfo>) => {\n              Image(obj.item.url)\n                .onAppear(() => {\n                })\n            })\n            .key((item: DemoSwiperItemInfo) => item.id)\n            .virtualScroll()\n        }\n        .cachedCount(9)\n        .height('50%')\n        .loop(false)\n        .indicator(true)\n        .onChange((index) => {\n          setTimeout(() => {\n            this.pics[index].url = remotePictures[index];\n          }, 1000);\n        })\n      }\n      .width('100%')\n      .height('100%')\n      .backgroundColor(Color.Black)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定时1秒后加载图片，模拟网络延迟："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(319114)/* ["default"] */.A) + "",
        width: "349",
        height: "652"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "显示区域外增删数据时保持滚动位置不变",
      children: "显示区域外增删数据时保持滚动位置不变"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下面的场景示例中，滚动列表显示区域外的增删数据操作将影响", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
        children: "List"
      }), "列表滚动条停留的位置："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在List组件中声明Repeat组件，实现key值生成逻辑和each逻辑（如下示例代码），点击按钮“insert”，在屏幕显示的第一个元素前面插入一个元素，列表显示区域数据向下滚动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 定义一个类，标记为可观察的\n// 类中自定义一个数组，标记为可追踪的\n@ObservedV2\nclass ArrayHolder {\n  @Trace public arr: Array<number> = [];\n\n  // constructor，用于初始化数组个数\n  constructor(count: number) {\n    for (let i = 0; i < count; i++) {\n      this.arr.push(i);\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct RepeatTemplateSingle {\n  @Local arrayHolder: ArrayHolder = new ArrayHolder(100);\n  @Local totalCount: number = this.arrayHolder.arr.length;\n  scroller: Scroller = new Scroller();\n\n  build() {\n    Column({ space: 5 }) {\n      List({ space: 20, initialIndex: 19, scroller: this.scroller }) {\n        Repeat(this.arrayHolder.arr)\n          .virtualScroll({ totalCount: this.totalCount })\n          .templateId((item, index) => {\n            return 'number';\n          })\n          .template('number', (r) => {\n            ListItem() {\n              Text(r.index! + ':' + r.item + 'Reuse');\n            }\n          })\n          .each((r) => {\n            ListItem() {\n              Text(r.index! + ':' + r.item + 'eachMessage');\n            }\n          })\n      }\n      .height('30%')\n\n      Button(`insert totalCount ${this.totalCount}`)\n        .height(60)\n        .onClick(() => {\n          // 插入元素，元素位置为屏幕显示的前一个元素\n          this.arrayHolder.arr.splice(18, 0, this.totalCount);\n          this.totalCount = this.arrayHolder.arr.length;\n        })\n    }\n    .width('100%')\n    .margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行效果："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(707834)/* ["default"] */.A) + "",
        width: "320",
        height: "277"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下为修正后的示例："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在部分场景中，我们不希望显示区域外的数据源增删操作或高度变化影响屏幕中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
        children: "List"
      }), "列表Scroller停留的位置，可以通过List组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#onscrollindex",
        children: "onScrollIndex"
      }), "事件对列表滚动动作进行监听，当列表发生滚动时，获取列表滚动位置。使用Scroller组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scrolltoindex",
        children: "scrollToIndex"
      }), "特性，滑动到指定index位置，实现屏幕外的数据源增加/删除数据时，Scroller停留的位置不变的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码仅对增加数据的情况进行展示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(732459)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Repeat从API version 20开始支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%95%B0%E6%8D%AE%E5%89%8D%E6%8F%92%E4%BF%9D%E6%8C%81",
        children: "数据前插保持"
      }), "，该功能特性可通过简单配置List组件的属性实现相同的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 定义一个类，标记为可观察的\n// 类中自定义一个数组，标记为可追踪的\n@ObservedV2\nclass ArrayHolderLocal {\n  @Trace public arr: Array<number> = [];\n\n  // constructor，用于初始化数组个数\n  constructor(count: number) {\n    for (let i = 0; i < count; i++) {\n      this.arr.push(i);\n    }\n  }\n}\n@Entry\n@ComponentV2\nstruct RepeatSingle {\n  @Local arrayHolder: ArrayHolderLocal = new ArrayHolderLocal(100);\n  @Local totalCount: number = this.arrayHolder.arr.length;\n  scroller: Scroller = new Scroller();\n\n  private start: number = 1;\n  private end: number = 1;\n\n  build() {\n    Column({ space: 5 }) {\n      List({ space: 20, initialIndex: 19, scroller: this.scroller }) {\n        Repeat(this.arrayHolder.arr)\n          .virtualScroll({ totalCount: this.totalCount })\n          .templateId((item, index) => {\n            return 'number';\n          })\n          .template('number', (r) => {\n            ListItem() {\n              Text(r.index! + ':' + r.item + 'Reuse')\n            }\n          })\n          .each((r) => {\n            ListItem() {\n              Text(r.index! + ':' + r.item + 'eachMessage')\n            }\n          })\n      }\n      .onScrollIndex((start, end) => {\n        this.start = start;\n        this.end = end;\n      })\n      .height('30%')\n\n      Button(`insert totalCount ${this.totalCount}`)\n        .height(60)\n        .onClick(() => {\n          // 插入元素，元素位置为屏幕显示的前一个元素\n          this.arrayHolder.arr.splice(18, 0, this.totalCount);\n          let rect = this.scroller.getItemRect(this.start); // 获取子组件的大小位置\n          this.scroller.scrollToIndex(this.start + 1); // 滑动到指定index\n          this.scroller.scrollBy(0, -rect.y); // 滑动指定距离\n          this.totalCount = this.arrayHolder.arr.length;\n        })\n    }\n    .width('100%')\n    .margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行效果："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(731075)/* ["default"] */.A) + "",
        width: "320",
        height: "279"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "totalcount值大于数据源长度",
      children: "totalCount值大于数据源长度"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当数据源总长度很大时，会使用懒加载的方式先加载一部分数据，为了使Repeat显示正确的滚动条样式，需要将数据总长度赋值给totalCount，即数据源全部加载完成前，totalCount大于array.length。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "totalCount > array.length时，在父组件容器滚动过程中，应用需要保证列表即将滑动到数据源末尾时请求后续数据，开发者需要对数据请求的错误场景（如网络延迟）进行保护操作，直到数据源全部加载完成，否则列表滑动的过程中会出现滚动效果异常。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["上述规范可以通过实现父组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
        children: "List"
      }), "/", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid",
        children: "Grid"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#onscrollindex",
        children: "onScrollIndex"
      }), "属性的回调函数完成。示例代码如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(72235)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Repeat从API version 19开始支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%95%B0%E6%8D%AE%E7%B2%BE%E5%87%86%E6%87%92%E5%8A%A0%E8%BD%BD",
        children: "数据精准懒加载"
      }), "，该功能特性可通过配置onLazyLoading回调函数动态加载对应区域内的数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass VehicleData {\n  @Trace public name: string;\n  @Trace public price: number;\n\n  constructor(name: string, price: number) {\n    this.name = name;\n    this.price = price;\n  }\n}\n\n@ObservedV2\nclass VehicleDB {\n  public vehicleItems: VehicleData[] = [];\n\n  constructor() {\n    // 数组初始化大小 20\n    for (let i = 1; i <= 20; i++) {\n      this.vehicleItems.push(new VehicleData(`Vehicle${i}`, i));\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct EntryCompSucc {\n  @Local vehicleItems: VehicleData[] = new VehicleDB().vehicleItems;\n  @Local listChildrenSize: ChildrenMainSize = new ChildrenMainSize(60);\n  @Local totalCount: number = this.vehicleItems.length;\n  scroller: Scroller = new Scroller();\n\n  build() {\n    Column({ space: 3 }) {\n      List({ scroller: this.scroller }) {\n        Repeat(this.vehicleItems)\n          .virtualScroll({ totalCount: 50 }) // 数组预期长度 50\n          .templateId(() => 'default')\n          .template('default', (ri) => {\n            ListItem() {\n              Column() {\n                Text(`${ri.item.name} + ${ri.index}`)\n                  .width('90%')\n                  .height(this.listChildrenSize.childDefaultSize)\n                  .backgroundColor(0xFFA07A)\n                  .textAlign(TextAlign.Center)\n                  .fontSize(20)\n                  .fontWeight(FontWeight.Bold)\n              }\n            }.border({ width: 1 })\n          }, { cachedCount: 5 })\n          .each((ri) => {\n            ListItem() {\n              Text('Wrong: ' + `${ri.item.name} + ${ri.index}`)\n                .width('90%')\n                .height(this.listChildrenSize.childDefaultSize)\n                .backgroundColor(0xFFA07A)\n                .textAlign(TextAlign.Center)\n                .fontSize(20)\n                .fontWeight(FontWeight.Bold)\n            }.border({ width: 1 })\n          })\n          .key((item, index) => `${index}:${item}`)\n      }\n      .height('50%')\n      .margin({ top: 20 })\n      .childrenMainSize(this.listChildrenSize)\n      .alignListItem(ListItemAlign.Center)\n      .onScrollIndex((start, end) => {\n        // 数据懒加载\n        if (this.vehicleItems.length < 50) {\n          for (let i = 0; i < 10; i++) {\n            if (this.vehicleItems.length < 50) {\n              this.vehicleItems.push(new VehicleData('Vehicle_loaded', i));\n            }\n          }\n        }\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码运行效果："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(600342)/* ["default"] */.A) + "",
        width: "400",
        height: "419"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "与builder混用时状态变量未刷新",
      children: "与@Builder混用时状态变量未刷新"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当Repeat与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
        children: "@Builder"
      }), "混用时，如果只传递RepeatItem.item或RepeatItem.index，参数值的改变不会引起@Builder函数内的UI刷新。推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder#%E6%8C%89%E5%BC%95%E7%94%A8%E4%BC%A0%E9%80%92%E5%8F%82%E6%95%B0",
        children: "按引用传递"
      }), "，即将RepeatItem类型整体进行传参，组件才能监听到数据变化。除此之外，从API version 20开始，开发者可以通过使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#makebinding20",
        children: "UIUtils.makeBinding()"
      }), "函数、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#bindingt20",
        children: "Binding类"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#mutablebindingt20",
        children: "MutableBinding类"
      }), "实现@Builder函数中状态变量的刷新。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils, Binding } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct RepeatBuilderPage {\n  @Local simpleList: Array<number> = [];\n\n  aboutToAppear(): void {\n    for (let i = 0; i < 100; i++) {\n      this.simpleList.push(i);\n    }\n  }\n\n  @Builder\n  buildItem1(bindingData: Binding<number>) { // 使用Binding类/MutableBinding类接收传参，通过value属性访问值。\n    Text('[Binding] item: ' + bindingData.value)\n      .fontSize(20)\n  }\n\n  @Builder\n  buildItem2(ri: RepeatItem<number>) {\n    Text('[RepeatItem] item: ' + ri.item)\n      .fontSize(20)\n  }\n\n  @Builder\n  buildItem3(data: number) {\n    Text('[number] item: ' + data)\n      .fontSize(20).fontColor(Color.Red)\n  }\n\n  build() {\n    Column({ space: 10 }) {\n      List({ space: 20 }) {\n        Repeat<number>(this.simpleList)\n          .each((ri) => {\n            ListItem() {\n              Column({ space: 2 }) {\n                this.buildItem1(UIUtils.makeBinding<number>(() => ri.item)) // 使用UIUtils.makeBinding()函数实现@Builder函数中状态变量的刷新。\n                this.buildItem2(ri) // 按引用传递，状态变量的改变会引起@Builder函数内的UI刷新。\n                this.buildItem3(ri.item) // 反例。按值传递，状态变量的改变不会引起@Builder函数内的UI刷新。\n              }\n            }.border({ width: 1 })\n          }).virtualScroll()\n      }\n      .cachedCount(1)\n      .border({ width: 1 })\n      .width('70%')\n      .height('60%')\n      .alignListItem(ListItemAlign.Center)\n\n      Button('click to change data.').onClick(() => {\n        this.simpleList[0] = 10000; // 修改第一项数据为10000。\n      })\n    }\n    .width('100%').height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Builder传参方式依次为makeBinding()、地址传递和值传递，界面展示如下图，进入页面后点击按钮改变数据。在@Builder构造函数中使用值传递传参不会引起函数内的UI刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(318980)/* ["default"] */.A) + "",
        width: "300",
        height: "494"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "expandsafearea属性失效",
      children: "expandSafeArea属性失效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在API version 18之前，Repeat子组件声明expandSafeArea属性，子组件无法扩展至全屏；从API version 18开始，子组件声明expandSafeArea属性可正常扩展至全屏展示。"
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
460354(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437717-588780cfb305ae55f52bb93c35b122e7.gif");

},
837003(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957670-45c70e8ee8cbe02a60d3ff11dd6f6fab.gif");

},
275858(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
72235(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
761990(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437711-3f2369b2021d13d07d336a66a8f35ce2.png");

},
934830(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798022-973fc770587f82c666080167b7eb38de.gif");

},
504938(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
319114(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957672-f0a26a8e2a8e61533c5e56c602bc7536.gif");

},
700192(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437713-5d91ab03dc63c7f105015239f8484bc3.gif");

},
306647(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957666-a98257ae734b1dc8ec7b4e0372ce0cfa.png");

},
428838(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
790892(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
711343(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
494570(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
731075(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798024-d8cbded298492a850aed46b23d0ee648.gif");

},
842417(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798020-2c9adf3d040c7a2c592ca187be06f1eb.gif");

},
475628(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
54020(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437715-c705d6a11ba84c31cc3f69eeb0b1d4fc.gif");

},
48207(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
210390(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477665-ab2f08c1cadaed0cf76ba51d183620b8.png");

},
707834(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477673-0bd3b31048c410fb4e7a1d08f6273629.gif");

},
772913(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437709-caebeac30d39eb4707fdb18f3fe3914a.png");

},
99828(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,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");

},
98803(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798016-0b776e39edfd750f84111a853f551455.png");

},
705360(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798014-8128527abe47338fb3fea20615615d6b.png");

},
756188(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
732459(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
612616(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
318980(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957674-47dce9352ccde047b775207d2e7037a7.png");

},
461448(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
29356(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798018-b05a25cea27ee9abbb8a9eef1414f6a3.png");

},
283652(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477667-445af78ae8595ce5b9e53c5542fd648f.png");

},
632597(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,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");

},
600342(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437719-c3197f02e9443cfac37421cff5165e2a.gif");

},
611692(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477669-a3a7b473f0d3b3da7eee3458ebd8bddd.gif");

},
890437(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957664-6ce9783d393c282f37e2021d2e6fe69c.png");

},
925290(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477671-e2fca26069ef540995a87b8e0ca8676b.png");

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