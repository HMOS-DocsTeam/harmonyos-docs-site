"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["257799"], {
955949(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_rendering_control_arkts_rendering_control_lazyforeach_arkts_rendering_control_lazyforeach_md_2a4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-rendering-control-arkts-rendering-control-lazyforeach-arkts-rendering-control-lazyforeach-md-2a4.json
var site_docs_arkui_arkts_ui_development_arkts_rendering_control_arkts_rendering_control_lazyforeach_arkts_rendering_control_lazyforeach_md_2a4_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach/arkts-rendering-control-lazyforeach","title":"LazyForEach：数据懒加载","description":"概述","source":"@site/docs/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach/arkts-rendering-control-lazyforeach.md","sourceDirName":"arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach","slug":"/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"LazyForEach：数据懒加载","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-rendering-control-lazyforeach","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ForEach：循环渲染","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach/"},"next":{"title":"Repeat：可复用的循环渲染","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach/arkts-rendering-control-lazyforeach.md


const frontMatter = {
	title: 'LazyForEach：数据懒加载',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-rendering-control-lazyforeach',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'LazyForEach：数据懒加载';

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
  "value": "设置数据源",
  "id": "设置数据源",
  "level": 3
}, {
  "value": "键值生成规则",
  "id": "键值生成规则",
  "level": 3
}, {
  "value": "组件创建规则",
  "id": "组件创建规则",
  "level": 3
}, {
  "value": "首次渲染",
  "id": "首次渲染",
  "level": 3
}, {
  "value": "数据更新",
  "id": "数据更新",
  "level": 3
}, {
  "value": "高级特性",
  "id": "高级特性",
  "level": 2
}, {
  "value": "使用状态管理V1修改数据子属性",
  "id": "使用状态管理v1修改数据子属性",
  "level": 3
}, {
  "value": "使用状态管理V2修改数据子属性",
  "id": "使用状态管理v2修改数据子属性",
  "level": 3
}, {
  "value": "拖拽排序",
  "id": "拖拽排序",
  "level": 3
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "删除节点后渲染结果非预期",
  "id": "删除节点后渲染结果非预期",
  "level": 3
}, {
  "value": "重渲染时图片闪烁",
  "id": "重渲染时图片闪烁",
  "level": 3
}, {
  "value": "@ObjectLink属性变化UI未更新",
  "id": "objectlink属性变化ui未更新",
  "level": 3
}, {
  "value": "在List内使用屏幕闪烁",
  "id": "在list内使用屏幕闪烁",
  "level": 3
}, {
  "value": "组件复用渲染异常",
  "id": "组件复用渲染异常",
  "level": 3
}, {
  "value": "键值不合理导致组件不刷新",
  "id": "键值不合理导致组件不刷新",
  "level": 3
}, {
  "value": "子组件尺寸缺失导致懒加载失效",
  "id": "子组件尺寸缺失导致懒加载失效",
  "level": 3
}, {
  "value": "BasicDataSource示例代码",
  "id": "basicdatasource示例代码",
  "level": 2
}, {
  "value": "string类型数组的BasicDataSource代码",
  "id": "string类型数组的basicdatasource代码",
  "level": 3
}, {
  "value": "泛型数组的BasicDataSource代码",
  "id": "泛型数组的basicdatasource代码",
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
        id: "lazyforeach数据懒加载",
        children: "LazyForEach：数据懒加载"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 7开始，LazyForEach为开发者提供了基于数据源渲染出一系列子组件的能力。具体而言，LazyForEach从数据源中按需迭代数据，并在每次迭代时创建相应组件。当LazyForEach用于滚动容器时，框架会根据滚动容器可视区域按需创建组件，当组件滑出可视区域外时，框架会销毁并回收组件以降低内存占用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文档依次介绍了LazyForEach的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%9F%BA%E7%A1%80%E7%89%B9%E6%80%A7",
        children: "基础特性"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7",
        children: "高级特性"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98",
        children: "常见问题"
      }), "，开发者可以按需阅读。在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%A6%96%E6%AC%A1%E6%B8%B2%E6%9F%93",
        children: "首次渲染"
      }), "小节中，给出了简单的示例，可以帮助开发者快速上手LazyForEach的使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文档对应的API接口说明参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach",
        children: "LazyForEach API参数说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(600033)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在大量子组件的场景下，LazyForEach与缓存列表项、动态预加载、组件复用等方法配合使用，可以进一步提升滑动帧率并降低应用内存占用。最佳实践请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-best-practices-long-list",
        children: "长列表加载丢帧优化"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat",
        children: "Repeat"
      }), "组件也提供了循环渲染能力。相较于LazyForEach，Repeat基于状态管理监听数据源变化，使用更加便利。同时，Repeat具有子组件复用能力，UI渲染效率更高。建议开发者优先使用Repeat。开发者也可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-rendering-control-repeat",
        children: "循环渲染迁移"
      }), "，将现有的LazyForEach组件迁移至Repeat组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用限制",
      children: "使用限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["LazyForEach必须在容器组件内使用，仅有", (0,jsx_runtime.jsx)(_components.a, {
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
        }), "组件支持数据懒加载（可配置cachedCount属性，即只加载可视部分以及其前后少量数据用于缓冲），其他组件仍然是一次性加载所有的数据。支持数据懒加载的父组件根据自身及子组件的高度或宽度计算可视区域内需布局的子节点数量，高度或宽度的缺失会导致部分场景", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%AD%90%E7%BB%84%E4%BB%B6%E5%B0%BA%E5%AF%B8%E7%BC%BA%E5%A4%B1%E5%AF%BC%E8%87%B4%E6%87%92%E5%8A%A0%E8%BD%BD%E5%A4%B1%E6%95%88",
          children: "懒加载失效"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LazyForEach依赖生成的键值判断是否刷新子组件，键值不变则不触发刷新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "容器组件内只能包含一个LazyForEach。以List为例，不建议同时包含ListItem、ForEach、LazyForEach，不建议同时包含多个LazyForEach。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LazyForEach在每次迭代中，必须创建且只允许创建一个子组件；即LazyForEach的子组件生成函数有且只有一个根组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "生成的子组件必须是允许包含在LazyForEach父容器组件中的子组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "允许LazyForEach包含在if/else条件渲染语句中，也允许LazyForEach中出现if/else条件渲染语句。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "键值生成器必须针对每个数据生成唯一的值，如果键值相同，将导致键值相同的UI组件渲染出现问题。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["LazyForEach必须使用一个数据变化监听器DataChangeListener对象进行更新（具体参数使用参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach",
          children: "LazyForEach"
        }), "），重新赋值第一个参数dataSource会导致异常；dataSource使用状态变量时，状态变量改变不会触发LazyForEach的UI刷新。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为了高性能渲染，使用DataChangeListener对象的onDataChange方法更新UI时，需要生成不同于原来的键值来触发组件刷新。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["LazyForEach和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable",
          children: "@Reusable装饰器"
        }), "一起使用能触发节点复用。使用方法：将@Reusable装饰在LazyForEach列表的组件上，见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable#%E5%88%97%E8%A1%A8%E6%BB%9A%E5%8A%A8%E9%85%8D%E5%90%88lazyforeach%E4%BD%BF%E7%94%A8",
          children: "列表滚动配合LazyForEach使用"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["LazyForEach和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-new-reusablev2",
          children: "@ReusableV2装饰器"
        }), "一起使用能触发节点复用。详见@ReusableV2装饰器指南文档中的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-new-reusablev2#%E5%9C%A8lazyforeach%E7%BB%84%E4%BB%B6%E4%B8%AD%E4%BD%BF%E7%94%A8",
          children: "在LazyForEach组件中使用"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LazyForEach的子节点在离开可视区域和预加载区域时，不会立即被析构或回收，LazyForEach会在空闲时析构或回收这些节点。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基础特性",
      children: "基础特性"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置数据源",
      children: "设置数据源"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了管理", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach#datachangelistener",
        children: "DataChangeListener"
      }), "监听器和通知LazyForEach更新数据，开发者需要使用如下方法：首先实现LazyForEach提供的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach#idatasource",
        children: "IDataSource"
      }), "接口，将其作为LazyForEach的数据源，然后管理监听器和更新数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为实现基本的数据管理和监听能力，开发者需要实现IDataSource的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach#totalcount",
        children: "totalCount"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach#getdata",
        children: "getData"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach#registerdatachangelistener",
        children: "registerDataChangeListener"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach#unregisterdatachangelistener",
        children: "unregisterDataChangeListener"
      }), "方法，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#basicdatasource%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81",
        children: "BasicDataSource示例代码"
      }), "。当数据源变化时，通过调用监听器的接口通知LazyForEach更新，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%95%B0%E6%8D%AE%E6%9B%B4%E6%96%B0",
        children: "数据更新"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "键值生成规则",
      children: "键值生成规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在LazyForEach循环渲染过程中，系统为每个item生成一个唯一且持久的键值，用于标识对应的组件。键值变化时，ArkUI框架将视为该数组元素已被替换或修改，并基于新的键值创建新的组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LazyForEach提供了参数keyGenerator，开发者可以使用该函数生成自定义键值。如果未定义keyGenerator函数，ArkUI框架将使用默认的键值生成函数：(item: Object, index: number) => { return viewId + '-' + index.toString(); }。viewId在编译器转换过程中生成，同一个LazyForEach组件内的viewId一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "键值应满足以下条件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "键值具有唯一性，每个数据项对应的键值互不相同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "键值具有一致性，数据项不变时对应的键值也不变。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述条件保证LazyForEach正确、高效地更新子组件，否则可能存在渲染结果异常、渲染效率降低等问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "组件创建规则",
      children: "组件创建规则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在确定键值生成规则后，LazyForEach的第二个参数itemGenerator函数会根据组件创建规则为数据源的每个数组项创建组件。组件的创建包括两种情况：LazyForEach", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%A6%96%E6%AC%A1%E6%B8%B2%E6%9F%93",
        children: "首次渲染"
      }), "和LazyForEach非首次渲染的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%95%B0%E6%8D%AE%E6%9B%B4%E6%96%B0",
        children: "数据更新"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "首次渲染",
      children: "首次渲染"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用LazyForEach时，开发者需要提供数据源、键值生成函数和组件创建函数。", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发者需保证键值生成函数为每项数据生成不同的键值。"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在LazyForEach首次渲染时，会根据上述键值生成规则为数据源的每个数组项生成唯一键值并创建相应的组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于预加载区域内的节点，若创建耗时较长，框架会分帧执行创建任务。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BasicDataSource代码见文档末尾BasicDataSource示例代码: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#string%E7%B1%BB%E5%9E%8B%E6%95%B0%E7%BB%84%E7%9A%84basicdatasource%E4%BB%A3%E7%A0%81",
        children: "string类型数组的BasicDataSource代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n// BasicDataSource代码见文档末尾BasicDataSource示例代码: String类型数组的BasicDataSource代码。\nimport { BasicDataSource } from './BasicDataSource';\nconst TAG = '[Sample_RenderingControl]';\nconst DOMAIN = 0xF811;\n\nclass InitialDataSource extends BasicDataSource {\n  private dataArray: string[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\n@Entry\n@Component\nstruct InitialRendering {\n  private data: InitialDataSource = new InitialDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 20; i++) {\n      this.data.pushData(`Hello ${i}`);\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      LazyForEach(this.data, (item: string) => {\n        ListItem() {\n          Row() {\n            Text(item).fontSize(50)\n              .onAppear(() => {\n                hilog.info(DOMAIN, TAG, `appear: ${item}`);\n              })\n          }.margin({ left: 10, right: 10 })\n        }\n      }, (item: string) => item)\n    }\n    .cachedCount(5)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上述代码中，keyGenerator函数的返回值是item。LazyForEach循环渲染时，为数据源数组项依次生成键值Hello 0、Hello 1 ... Hello 20，并创建对应的ListItem子组件渲染到界面上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行效果如下图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LazyForEach正常首次渲染"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(145467)/* ["default"] */.A) + "",
        width: "303",
        height: "610"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误案例：键值相同导致渲染异常"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当不同数据项生成的键值相同时，框架的行为是不可预测的。例如，在以下代码中，LazyForEach渲染的数据项键值均相同，在滑动过程中，LazyForEach会预加载划入划出当前页面的子组件，而新建的子组件和销毁的旧子组件具有相同的键值，框架可能取用错误的缓存，导致子组件渲染出现问题。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BasicDataSource代码见文档末尾BasicDataSource示例代码: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#string%E7%B1%BB%E5%9E%8B%E6%95%B0%E7%BB%84%E7%9A%84basicdatasource%E4%BB%A3%E7%A0%81",
        children: "string类型数组的BasicDataSource代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// BasicDataSource代码见文档末尾BasicDataSource示例代码: string类型数组的BasicDataSource代码。\nimport { BasicDataSource } from './BasicDataSource';\n\nclass MyDataSource extends BasicDataSource {\n  private dataArray: string[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent {\n  private data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 20; i++) {\n      this.data.pushData(`Hello ${i}`);\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      LazyForEach(this.data, (item: string) => {\n        ListItem() {\n          Row() {\n            Text(item).fontSize(50)\n              .onAppear(() => {\n                console.info(`appear: ${item}`);\n              })\n          }.margin({ left: 10, right: 10 })\n        }\n      }, (item: string) => `same key`) // 自定义键值生成函数，返回相同键值\n    }.cachedCount(5)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行效果如下图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LazyForEach存在相同键值"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(816235)/* ["default"] */.A) + "",
        width: "278",
        height: "589"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改上述示例中LazyForEach的键值生成函数，使每个数据项生成唯一的键值，保证渲染效果符合预期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "LazyForEach(this.data, (item: string) => {\n  ListItem() {\n    Row() {\n      Text(item).fontSize(50)\n        .onAppear(() => {\n          hilog.info(DOMAIN, TAG, `appear: ${item}`);\n        })\n    }.margin({ left: 10, right: 10 })\n  }\n}, (item: string, index: number) => `${item}-${index}`) // 自定义键值生成函数，返回唯一键值\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改后运行效果如下图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LazyForEach生成唯一键值"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(645979)/* ["default"] */.A) + "",
        width: "278",
        height: "589"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据更新",
      children: "数据更新"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当LazyForEach数据源发生变化，需要再次渲染时，开发者应根据数据源的变化情况调用listener对应的接口，通知LazyForEach做相应的更新。LazyForEach的更新操作包括：添加数据、删除数据、交换数据、改变单个数据、改变多个数据以及精准批量修改数据，各使用场景示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "添加数据"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BasicDataSource代码见文档末尾BasicDataSource示例代码: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#string%E7%B1%BB%E5%9E%8B%E6%95%B0%E7%BB%84%E7%9A%84basicdatasource%E4%BB%A3%E7%A0%81",
        children: "string类型数组的BasicDataSource代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// BasicDataSource代码见文档末尾BasicDataSource示例代码: String类型数组的BasicDataSource代码。\nimport { BasicDataSource } from './BasicDataSource';\n\nclass MyDataSource extends BasicDataSource {\n  private dataArray: string[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\n@Entry\n@Component\nstruct AddingData {\n  private data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 20; i++) {\n      this.data.pushData(`Hello ${i}`);\n    }\n  }\n\n  build() {\n    Scroll(){\n      List({ space: 3 }) {\n        LazyForEach(this.data, (item: string) => {\n          ListItem() {\n            Row() {\n              Text(item).fontSize(50)\n                .onAppear(() => {\n                })\n            }.margin({ left: 10, right: 10 })\n          }\n          .onClick(() => {\n            // 点击追加子组件\n            this.data.pushData(`Hello ${this.data.totalCount()}`);\n          })\n        }, (item: string) => item)\n      }\n      .cachedCount(5)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击LazyForEach的子组件时，首先调用数据源data的pushData方法。此方法会在数据源末尾添加数据，并调用notifyDataAdd方法。notifyDataAdd方法内部会调用listener.onDataAdd方法，通知LazyForEach有数据添加。LazyForEach接收到通知后，在该索引处新建子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行效果如下图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LazyForEach添加数据"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(769014)/* ["default"] */.A) + "",
        width: "303",
        height: "610"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "删除数据"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BasicDataSource代码见文档末尾BasicDataSource示例代码: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#string%E7%B1%BB%E5%9E%8B%E6%95%B0%E7%BB%84%E7%9A%84basicdatasource%E4%BB%A3%E7%A0%81",
        children: "string类型数组的BasicDataSource代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n// BasicDataSource代码见文档末尾BasicDataSource示例代码: String类型数组的BasicDataSource代码。\nimport { BasicDataSource } from './BasicDataSource';\nconst TAG = '[Sample_RenderingControl]';\nconst DOMAIN = 0xF811;\n\nclass DataDeletionSource extends BasicDataSource {\n  private dataArray: string[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  public getAllData(): string[] {\n    return this.dataArray;\n  }\n\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n  }\n\n  public deleteData(index: number): void {\n    this.dataArray.splice(index, 1);\n    this.notifyDataDelete(index);\n  }\n}\n\n@Entry\n@Component\nstruct DataDeletion {\n  private data: DataDeletionSource = new DataDeletionSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 20; i++) {\n      this.data.pushData(`Hello ${i}`);\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      LazyForEach(this.data, (item: string, index: number) => {\n        ListItem() {\n          Row() {\n            Text(item).fontSize(50)\n              .onAppear(() => {\n                hilog.info(DOMAIN, TAG, `appear: ${item}`);\n              })\n          }.margin({ left: 10, right: 10 })\n        }\n        .onClick(() => {\n          // 点击删除子组件\n          this.data.deleteData(this.data.getAllData().indexOf(item));\n        })\n      }, (item: string) => item)\n    }\n    .cachedCount(5)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击LazyForEach的子组件时，调用数据源data的deleteData方法。此方法删除数据源中对应索引的数据，并调用notifyDataDelete方法。notifyDataDelete方法内调用listener.onDataDelete方法，通知 LazyForEach删除该索引处的子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行效果如下图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LazyForEach删除数据"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(749271)/* ["default"] */.A) + "",
        width: "303",
        height: "610"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "交换数据"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BasicDataSource代码见文档末尾BasicDataSource示例代码: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#string%E7%B1%BB%E5%9E%8B%E6%95%B0%E7%BB%84%E7%9A%84basicdatasource%E4%BB%A3%E7%A0%81",
        children: "string类型数组的BasicDataSource代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n// BasicDataSource代码见文档末尾BasicDataSource示例代码: String类型数组的BasicDataSource代码。\nimport { BasicDataSource } from './BasicDataSource';\nconst TAG = '[Sample_RenderingControl]';\nconst DOMAIN = 0xF811;\n\nclass SwappingDataSource extends BasicDataSource {\n  private dataArray: string[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  public getAllData(): string[] {\n    return this.dataArray;\n  }\n\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n  }\n\n  public moveData(from: number, to: number): void {\n    let temp: string = this.dataArray[from];\n    this.dataArray[from] = this.dataArray[to];\n    this.dataArray[to] = temp;\n    this.notifyDataMove(from, to);\n  }\n}\n\n@Entry\n@Component\nstruct SwappingData {\n  private moved: number[] = [];\n  private data: SwappingDataSource = new SwappingDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 20; i++) {\n      this.data.pushData(`Hello ${i}`);\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      LazyForEach(this.data, (item: string, index: number) => {\n        ListItem() {\n          Row() {\n            Text(item).fontSize(50)\n              .onAppear(() => {\n                hilog.info(DOMAIN, TAG, `appear: ${item}`);\n              })\n          }.margin({ left: 10, right: 10 })\n        }\n        .onClick(() => {\n          this.moved.push(this.data.getAllData().indexOf(item));\n          if (this.moved.length === 2) {\n            // 点击交换子组件\n            this.data.moveData(this.moved[0], this.moved[1]);\n            this.moved = [];\n          }\n        })\n      }, (item: string) => item)\n    }\n    .cachedCount(5)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "首次点击LazyForEach的子组件时，将要移动的数据索引存储在moved成员变量中。再次点击LazyForEach的另一个子组件时，将首次点击的子组件移到此处。调用数据源data的moveData方法，该方法将数据源中的数据移动到预期位置，并调用notifyDataMove方法。notifyDataMove方法会调用listener.onDataMove方法，通知LazyForEach在该处有数据需要移动。LazyForEach将from和to索引处的子组件进行位置调换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行效果如下图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LazyForEach交换数据"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(836011)/* ["default"] */.A) + "",
        width: "303",
        height: "610"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "改变单个数据"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BasicDataSource代码见文档末尾BasicDataSource示例代码: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#string%E7%B1%BB%E5%9E%8B%E6%95%B0%E7%BB%84%E7%9A%84basicdatasource%E4%BB%A3%E7%A0%81",
        children: "string类型数组的BasicDataSource代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n// BasicDataSource代码见文档末尾BasicDataSource示例代码: String类型数组的BasicDataSource代码。\nimport { BasicDataSource } from './BasicDataSource';\nconst TAG = '[Sample_RenderingControl]';\nconst DOMAIN = 0xF811;\n\nclass ModifyingDataSource extends BasicDataSource {\n  private dataArray: string[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n  }\n\n  public changeData(index: number, data: string): void {\n    this.dataArray.splice(index, 1, data);\n    this.notifyDataChange(index);\n  }\n}\n\n@Entry\n@Component\nstruct ModifyingIndividualDataItems {\n  private data: ModifyingDataSource = new ModifyingDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 20; i++) {\n      this.data.pushData(`Hello ${i}`);\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      LazyForEach(this.data, (item: string, index: number) => {\n        ListItem() {\n          Row() {\n            Text(item).fontSize(50)\n              .onAppear(() => {\n                hilog.info(DOMAIN, TAG, `appear: ${item}`);\n              })\n          }.margin({ left: 10, right: 10 })\n        }\n        .onClick(() => {\n          this.data.changeData(index, item + '00');\n        })\n      }, (item: string) => item)\n    }\n    .cachedCount(5)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击LazyForEach的子组件时，首先改变当前数据，然后调用数据源data的changeData方法。changeData 方法会调用notifyDataChange方法，该方法又会调用listener.onDataChange方法，通知LazyForEach组件数据发生变化。LazyForEach会在对应索引处重建子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行效果如下图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LazyForEach改变单个数据"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(96739)/* ["default"] */.A) + "",
        width: "303",
        height: "610"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "改变多个数据"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BasicDataSource代码见文档末尾BasicDataSource示例代码: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#string%E7%B1%BB%E5%9E%8B%E6%95%B0%E7%BB%84%E7%9A%84basicdatasource%E4%BB%A3%E7%A0%81",
        children: "string类型数组的BasicDataSource代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n// BasicDataSource代码见文档末尾BasicDataSource示例代码: String类型数组的BasicDataSource代码。\nimport { BasicDataSource } from './BasicDataSource';\nconst TAG = '[Sample_RenderingControl]';\nconst DOMAIN = 0xF811;\n\nclass ModifyingMultiSourceEleven extends BasicDataSource {\n  private dataArray: string[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n  }\n\n  public reloadData(): void {\n    this.notifyDataReload();\n  }\n\n  public modifyAllData(): void {\n    this.dataArray = this.dataArray.map((item: string) => {\n      return item + '0';\n    });\n  }\n}\n\n@Entry\n@Component\nstruct ModifyingMultipleDataItems {\n  private data: ModifyingMultiSourceEleven = new ModifyingMultiSourceEleven();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 20; i++) {\n      this.data.pushData(`Hello ${i}`);\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      LazyForEach(this.data, (item: string, index: number) => {\n        ListItem() {\n          Row() {\n            Text(item).fontSize(50)\n              .onAppear(() => {\n                hilog.info(DOMAIN, TAG, `appear: ${item}`);\n              })\n          }.margin({ left: 10, right: 10 })\n        }\n        .onClick(() => {\n          this.data.modifyAllData();\n          this.data.reloadData();\n        })\n      }, (item: string) => item)\n    }\n    .cachedCount(5)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击LazyForEach的子组件时，首先调用data的modifyAllData方法修改数据源中的所有数据，然后调用数据源的reloadData方法。该方法内会调用notifyDataReload方法，notifyDataReload方法内会调用listener.onDataReloaded方法，通知LazyForEach重建所有子节点。LazyForEach会将原数据项和新数据项进行键值比对，若键值相同则使用缓存，若键值不同则重新构建。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行效果如下图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LazyForEach改变多个数据"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(738830)/* ["default"] */.A) + "",
        width: "303",
        height: "610"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "精准批量修改数据"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BasicDataSource代码见文档末尾BasicDataSource示例代码: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#string%E7%B1%BB%E5%9E%8B%E6%95%B0%E7%BB%84%E7%9A%84basicdatasource%E4%BB%A3%E7%A0%81",
        children: "string类型数组的BasicDataSource代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n// BasicDataSource代码见文档末尾BasicDataSource示例代码: String类型数组的BasicDataSource代码。\nimport { BasicDataSource } from './BasicDataSource';\nconst TAG = '[Sample_RenderingControl]';\nconst DOMAIN = 0xF811;\n\nclass PreciseModifyingDataSource extends BasicDataSource {\n  private dataArray: string[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  public operateData(): void {\n    this.dataArray.splice(4, 0, this.dataArray[1]);\n    this.dataArray.splice(1, 1);\n    let temp = this.dataArray[4];\n    this.dataArray[4] = this.dataArray[6];\n    this.dataArray[6] = temp;\n    this.dataArray.splice(8, 0, 'Hello 1', 'Hello 2');\n    this.dataArray.splice(12, 2);\n    this.notifyDatasetChange([\n      { type: DataOperationType.MOVE, index: { from: 1, to: 3 } },\n      { type: DataOperationType.EXCHANGE, index: { start: 4, end: 6 } },\n      { type: DataOperationType.ADD, index: 8, count: 2 },\n      { type: DataOperationType.DELETE, index: 10, count: 2 }]);\n  }\n\n  public init(): void {\n    this.dataArray.splice(0, 0, 'Hello a', 'Hello b', 'Hello c', 'Hello d', 'Hello e', 'Hello f', 'Hello g', 'Hello h',\n      'Hello i', 'Hello j', 'Hello k', 'Hello l', 'Hello m', 'Hello n', 'Hello o', 'Hello p', 'Hello q', 'Hello r');\n  }\n}\n\n@Entry\n@Component\nstruct PreciselyModifyingData {\n  private data: PreciseModifyingDataSource = new PreciseModifyingDataSource();\n\n  aboutToAppear() {\n    this.data.init();\n  }\n\n  build() {\n    Column() {\n      Text('change data')\n        .fontSize(10)\n        .backgroundColor(Color.Blue)\n        .fontColor(Color.White)\n        .borderRadius(50)\n        .padding(5)\n        .onClick(() => {\n          this.data.operateData();\n        })\n      List({ space: 3 }) {\n        LazyForEach(this.data, (item: string, index: number) => {\n          ListItem() {\n            Row() {\n              Text(item).fontSize(35)\n                .onAppear(() => {\n                  hilog.info(DOMAIN, TAG, `appear: ${item}`);\n                })\n            }.margin({ left: 10, right: 10 })\n          }\n\n        }, (item: string) => item + new Date().getTime())\n      }\n      .cachedCount(5)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onDatasetChange接口允许开发者一次性通知LazyForEach进行数据添加、删除、移动和交换等操作。在上述例子中，点击“change data”文本后，第二项数据被移动到第四项位置，第五项与第七项数据交换位置，并且从第九项开始添加了数据\"Hello 1\"和\"Hello 2\"，同时从第十一项开始删除了两项数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LazyForEach改变多个数据"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(882664)/* ["default"] */.A) + "",
        width: "347",
        height: "741"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "第二个例子，直接给数组赋值，不涉及 splice 操作。operations直接从比较原数组和新数组得到。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BasicDataSource代码见文档末尾BasicDataSource示例代码: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#string%E7%B1%BB%E5%9E%8B%E6%95%B0%E7%BB%84%E7%9A%84basicdatasource%E4%BB%A3%E7%A0%81",
        children: "string类型数组的BasicDataSource代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n// BasicDataSource代码见文档末尾BasicDataSource示例代码: String类型数组的BasicDataSource代码。\nimport { BasicDataSource } from './BasicDataSource';\nconst TAG = '[Sample_RenderingControl]';\nconst DOMAIN = 0xF811;\n\nclass PreciselyModifyingSource extends BasicDataSource {\n  private dataArray: string[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  public operateData(): void {\n    this.dataArray =\n      ['Hello x', 'Hello 1', 'Hello 2', 'Hello b', 'Hello c', 'Hello e', 'Hello d', 'Hello f', 'Hello g', 'Hello h'];\n    this.notifyDatasetChange([\n      { type: DataOperationType.CHANGE, index: 0 },\n      { type: DataOperationType.ADD, index: 1, count: 2 },\n      { type: DataOperationType.EXCHANGE, index: { start: 3, end: 4 } },\n    ]);\n  }\n\n  public init(): void {\n    this.dataArray = ['Hello a', 'Hello b', 'Hello c', 'Hello d', 'Hello e', 'Hello f', 'Hello g', 'Hello h'];\n  }\n}\n\n@Entry\n@Component\nstruct PreciselyModifyingDataTwo {\n  private data: PreciselyModifyingSource = new PreciselyModifyingSource();\n\n  aboutToAppear() {\n    this.data.init();\n  }\n\n  build() {\n    Column() {\n      Text('Multi-Data Change')\n        .fontSize(10)\n        .backgroundColor(Color.Blue)\n        .fontColor(Color.White)\n        .borderRadius(50)\n        .padding(5)\n        .onClick(() => {\n          this.data.operateData();\n        })\n      List({ space: 3 }) {\n        LazyForEach(this.data, (item: string, index: number) => {\n          ListItem() {\n            Row() {\n              Text(item).fontSize(35)\n                .onAppear(() => {\n                  hilog.info(DOMAIN, TAG, `appear: ${item}`);\n                })\n            }.margin({ left: 10, right: 10 })\n          }\n        }, (item: string) => item + new Date().getTime())\n      }\n      .cachedCount(5)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LazyForEach改变多个数据"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(262086)/* ["default"] */.A) + "",
        width: "355",
        height: "432"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用该接口时请注意以下事项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不要将onDatasetChange与其他操作数据的接口混用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "传入onDatasetChange的operations中，每一项operation的index均从修改前的原数组中查找。因此，operations中的index不总是与Datasource中的index一一对应，并且不能为负数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "第一个例子清楚地显示了这一点:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 修改之前的数组\n['Hello a','Hello b','Hello c','Hello d','Hello e','Hello f','Hello g','Hello h','Hello i','Hello j','Hello k','Hello l','Hello m','Hello n','Hello o','Hello p','Hello q','Hello r']\n// 修改之后的数组\n['Hello a','Hello c','Hello d','Hello b','Hello g','Hello f','Hello e','Hello h','Hello 1','Hello 2','Hello i','Hello j','Hello m','Hello n','Hello o','Hello p','Hello q','Hello r']\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "\"Hello b\" 从第2项变成第4项，因此第一个 operation 为 { type: DataOperationType.MOVE, index: { from: 1, to: 3 } }。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "\"Hello e\" 跟 \"Hello g\" 对调了，而 \"Hello e\" 在修改前的原数组中的 index=4，\"Hello g\" 在修改前的原数组中的 index=6, 因此第二个 operation 为 { type: DataOperationType.EXCHANGE, index: { start: 4, end: 6 } }。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "\"Hello 1\",\"Hello 2\" 在 \"Hello h\" 之后插入，而 \"Hello h\" 在修改前的原数组中的 index=7，因此第三个 operation 为 { type: DataOperationType.ADD, index: 8, count: 2 }。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "\"Hello k\",\"Hello l\" 被删除了，而 \"Hello k\" 在原数组中的 index=10，因此第四个 operation 为 { type: DataOperationType.DELETE, index: 10, count: 2 }。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在同一个onDatasetChange批量处理数据时，如果多个DataOperation操作同一个index，只有第一个DataOperation生效。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "部分操作由开发者传入键值，LazyForEach不再重复调用keygenerator获取键值，开发者需保证传入键值的正确性。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若操作集合中包含RELOAD操作，则其他操作均不生效。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "高级特性",
      children: "高级特性"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用状态管理v1修改数据子属性",
      children: "使用状态管理V1修改数据子属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若仅靠LazyForEach的刷新机制，当item变化时若想更新子组件，需要将原来的子组件全部销毁再重新构建，在子组件结构较为复杂的情况下，靠改变键值去刷新渲染性能较低。因此状态管理V1提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
        children: "@Observed装饰器和@ObjectLink装饰器"
      }), "机制进行深度观测，可以做到仅刷新使用了该属性的组件，提高渲染性能。开发者可根据其自身业务特点选择使用哪种刷新方式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GenericBasicDataSource代码见文档末尾BasicDataSource示例代码: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%B3%9B%E5%9E%8B%E6%95%B0%E7%BB%84%E7%9A%84basicdatasource%E4%BB%A3%E7%A0%81",
        children: "泛型数组的BasicDataSource代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// GenericBasicDataSource代码见文档末尾BasicDataSource示例代码: 泛型数组的BasicDataSource代码。\nimport { GenericBasicDataSource } from './GenericBasicDataSource';\n\nclass MySubDataSource extends GenericBasicDataSource<StringData> {\n  private dataArray: StringData[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): StringData {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: StringData): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\n@Observed\nclass StringData {\n  public message: string;\n\n  constructor(message: string) {\n    this.message = message;\n  }\n}\n\n@Entry\n@Component\nstruct ChangingDataSubproperties {\n  private data: MySubDataSource = new MySubDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 20; i++) {\n      this.data.pushData(new StringData(`Hello ${i}`));\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      LazyForEach(this.data, (item: StringData, index: number) => {\n        ListItem() {\n          ChangingDataSubpropertiesChildComponent({ data: item })\n        }\n        .onClick(() => {\n          item.message += '0';\n        })\n      }, (item: StringData, index: number) => index.toString())\n    }\n    .cachedCount(5)\n  }\n}\n\n@Component\nstruct ChangingDataSubpropertiesChildComponent {\n  @ObjectLink data: StringData;\n\n  build() {\n    Row() {\n      Text(this.data.message).fontSize(50)\n        .onAppear(() => {\n        })\n    }.margin({ left: 10, right: 10 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击LazyForEach子组件改变item.message时，重渲染依赖ChangingDataSubpropertiesChildComponent的@ObjectLink成员变量对子属性的监听。框架仅刷新Text(this.data.message)，不会重建整个ListItem子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LazyForEach改变数据子属性"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(528687)/* ["default"] */.A) + "",
        width: "303",
        height: "610"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用状态管理v2修改数据子属性",
      children: "使用状态管理V2修改数据子属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["状态管理V2提供", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
        children: "@ObservedV2装饰器和@Trace装饰器"
      }), "，用于实现属性的深度观测。使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local",
        children: "@Local装饰器"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param",
        children: "@Param装饰器"
      }), "，可以管理子组件的刷新，仅刷新使用了对应属性的组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "嵌套类属性变化观测"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GenericBasicDataSource代码见文档末尾BasicDataSource示例代码: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%B3%9B%E5%9E%8B%E6%95%B0%E7%BB%84%E7%9A%84basicdatasource%E4%BB%A3%E7%A0%81",
        children: "泛型数组的BasicDataSource代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// GenericBasicDataSource代码见文档末尾BasicDataSource示例代码: 泛型数组的BasicDataSource代码。\nimport { GenericBasicDataSource } from './GenericBasicDataSource';\n\nclass PropertiesDataSource extends GenericBasicDataSource<ClassPropertiesStringData> {\n  private dataArray: ClassPropertiesStringData[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): ClassPropertiesStringData {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: ClassPropertiesStringData): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\nclass ClassPropertiesStringData {\n  public firstLayer: FirstLayer;\n\n  constructor(firstLayer: FirstLayer) {\n    this.firstLayer = firstLayer;\n  }\n}\n\nclass FirstLayer {\n  public secondLayer: SecondLayer;\n\n  constructor(secondLayer: SecondLayer) {\n    this.secondLayer = secondLayer;\n  }\n}\n\nclass SecondLayer {\n  public thirdLayer: ThirdLayer;\n\n  constructor(thirdLayer: ThirdLayer) {\n    this.thirdLayer = thirdLayer;\n  }\n}\n\n@ObservedV2\nclass ThirdLayer {\n  @Trace public fourthLayer: string;\n\n  constructor(fourthLayer: string) {\n    this.fourthLayer = fourthLayer;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct ObservingNestedClassProperties {\n  private data: PropertiesDataSource = new PropertiesDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 20; i++) {\n      this.data.pushData(new ClassPropertiesStringData(new FirstLayer(new SecondLayer(new ThirdLayer(`Hello ${i}`)))));\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      LazyForEach(this.data, (item: ClassPropertiesStringData, index: number) => {\n        ListItem() {\n          Text(item.firstLayer.secondLayer.thirdLayer.fourthLayer).fontSize(50)\n            .onClick(() => {\n              item.firstLayer.secondLayer.thirdLayer.fourthLayer += '!';\n            })\n        }\n      }, (item: ClassPropertiesStringData, index: number) => index.toString())\n    }\n    .cachedCount(5)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@ObservedV2与@Trace用于装饰类以及类中的属性，配合使用能深度观测被装饰的类和属性。示例中，展示了深度嵌套类结构下，通过@ObservedV2和@Trace实现对多层嵌套属性变化的观测和子组件刷新。当点击子组件Text修改被@Trace修饰的嵌套类最内层的类成员属性时，仅重新渲染依赖了该属性的组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "组件内部状态"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GenericBasicDataSource代码见文档末尾BasicDataSource示例代码: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%B3%9B%E5%9E%8B%E6%95%B0%E7%BB%84%E7%9A%84basicdatasource%E4%BB%A3%E7%A0%81",
        children: "泛型数组的BasicDataSource代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// GenericBasicDataSource代码见文档末尾BasicDataSource示例代码: 泛型数组的BasicDataSource代码。\nimport { GenericBasicDataSource } from './GenericBasicDataSource';\n\nclass MyStateDataSource extends GenericBasicDataSource<StateStringData> {\n  private dataArray: StateStringData[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): StateStringData {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: StateStringData): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\n@ObservedV2\nclass StateStringData {\n  @Trace public message: string;\n\n  constructor(message: string) {\n    this.message = message;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct ObservingComponentInternalState {\n  data: MyStateDataSource = new MyStateDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 20; i++) {\n      this.data.pushData(new StateStringData(`Hello ${i}`));\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      LazyForEach(this.data, (item: StateStringData, index: number) => {\n        ListItem() {\n          Row() {\n            Text(item.message).fontSize(50)\n              .onClick(() => {\n                // 修改@ObservedV2装饰类中@Trace装饰的变量，触发刷新此处Text组件\n                item.message += '!';\n              })\n            ObservingComponentChildComponent()\n          }\n        }\n      }, (item: StateStringData, index: number) => index.toString())\n    }\n    .cachedCount(5)\n  }\n}\n\n@ComponentV2\nstruct ObservingComponentChildComponent {\n  @Local message: string = '?';\n\n  build() {\n    Row() {\n      Text(this.message).fontSize(50)\n        .onClick(() => {\n          // 修改@Local装饰的变量，触发刷新此处Text组件\n          this.message += '?';\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Local使得自定义组件内被修饰的变量具有观测其变化的能力，该变量必须在组件内部进行初始化。示例中，点击Text组件修改item.message触发变量更新并刷新使用该变量的组件，ObservingComponentChildComponent中@Local装饰的变量message变化时也能刷新子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "组件外部输入"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GenericBasicDataSource代码见文档末尾BasicDataSource示例代码: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%B3%9B%E5%9E%8B%E6%95%B0%E7%BB%84%E7%9A%84basicdatasource%E4%BB%A3%E7%A0%81",
        children: "泛型数组的BasicDataSource代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// GenericBasicDataSource代码见文档末尾BasicDataSource示例代码: 泛型数组的BasicDataSource代码。\nimport { GenericBasicDataSource } from './GenericBasicDataSource';\n\nclass MyInputDataSource extends GenericBasicDataSource<InputStringData> {\n  private dataArray: InputStringData[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): InputStringData {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: InputStringData): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\n@ObservedV2\nclass InputStringData {\n  @Trace public message: string;\n\n  constructor(message: string) {\n    this.message = message;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct ReceivingExternalInput {\n  data: MyInputDataSource = new MyInputDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 20; i++) {\n      this.data.pushData(new InputStringData(`Hello ${i}`));\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      LazyForEach(this.data, (item: InputStringData, index: number) => {\n        ListItem() {\n          ReceivingExternalInputChildComponent({ data: item.message })\n            .onClick(() => {\n              item.message += '!';\n            })\n        }\n      }, (item: InputStringData, index: number) => index.toString())\n    }\n    .cachedCount(5)\n  }\n}\n\n@ComponentV2\nstruct ReceivingExternalInputChildComponent {\n  @Param @Require data: string = '';\n\n  build() {\n    Row() {\n      Text(this.data).fontSize(50)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用@Param装饰器，子组件可以接受外部输入参数，实现父子组件间的数据同步。在ReceivingExternalInput中创建子组件时，传递item.message，并用@Param修饰的变量data与其关联。点击ListItem中的组件修改item.message，数据变化会从父组件传递到子组件，触发子组件刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "拖拽排序",
      children: "拖拽排序"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当LazyForEach在List组件下使用，并且设置了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-drag-sorting/ts-universal-attributes-drag-sorting#onmove",
        children: "onMove"
      }), "事件，可以使能拖拽排序。拖拽排序释放后，如果数据位置发生变化，将触发onMove事件，上报原始索引号和目标索引号。在onMove事件中，根据上报的索引号修改数据源。修改数据源时，无需调用DataChangeListener接口通知数据源变化。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BasicDataSource代码见文档末尾BasicDataSource示例代码: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#string%E7%B1%BB%E5%9E%8B%E6%95%B0%E7%BB%84%E7%9A%84basicdatasource%E4%BB%A3%E7%A0%81",
        children: "string类型数组的BasicDataSource代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// BasicDataSource代码见文档末尾BasicDataSource示例代码: String类型数组的BasicDataSource代码。\nimport { BasicDataSource } from './BasicDataSource';\n\nclass DragAndDropDataSource extends BasicDataSource {\n  private dataArray: string[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  public moveDataWithoutNotify(from: number, to: number): void {\n    let tmp = this.dataArray.splice(from, 1);\n    this.dataArray.splice(to, 0, tmp[0]);\n  }\n\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\n@Entry\n@Component\nstruct DragandDropSorting {\n  private data: DragAndDropDataSource = new DragAndDropDataSource();\n\n  aboutToAppear(): void {\n    for (let i = 0; i < 100; i++) {\n      this.data.pushData(i.toString());\n    }\n  }\n\n  build() {\n    Row() {\n      List() {\n        LazyForEach(this.data, (item: string) => {\n          ListItem() {\n            Text(item.toString())\n              .fontSize(16)\n              .textAlign(TextAlign.Center)\n              .size({ height: 100, width: '100%' })\n          }.margin(10)\n          .borderRadius(10)\n          .backgroundColor('#FFFFFFFF')\n        }, (item: string) => item)\n          .onMove((from: number, to: number) => {\n            this.data.moveDataWithoutNotify(from, to);\n          })\n      }\n      .width('100%')\n      .height('100%')\n      .backgroundColor('#FFDCDCDC')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LazyForEach拖拽排序效果图"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(108544)/* ["default"] */.A) + "",
        width: "348",
        height: "652"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "删除节点后渲染结果非预期",
      children: "删除节点后渲染结果非预期"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BasicDataSource代码见文档末尾BasicDataSource示例代码: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#string%E7%B1%BB%E5%9E%8B%E6%95%B0%E7%BB%84%E7%9A%84basicdatasource%E4%BB%A3%E7%A0%81",
        children: "string类型数组的BasicDataSource代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// BasicDataSource代码见文档末尾BasicDataSource示例代码: string类型数组的BasicDataSource代码。\nimport { BasicDataSource } from './BasicDataSource';\n\nclass MyDataSource extends BasicDataSource {\n  private dataArray: string[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n\n  public deleteData(index: number): void {\n    this.dataArray.splice(index, 1);\n    this.notifyDataDelete(index);\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent {\n  private data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 20; i++) {\n      this.data.pushData(`Hello ${i}`);\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      LazyForEach(this.data, (item: string, index: number) => {\n        ListItem() {\n          Row() {\n            Text(item).fontSize(50)\n              .onAppear(() => {\n                console.info(`appear: ${item}`);\n              })\n          }.margin({ left: 10, right: 10 })\n        }\n        .onClick(() => {\n          // 点击删除子组件\n          this.data.deleteData(index);\n        })\n      }, (item: string) => item)\n    }.cachedCount(5)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LazyForEach删除数据非预期"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(477263)/* ["default"] */.A) + "",
        width: "303",
        height: "610"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多次点击子组件时，发现删除的不一定是点击的那个子组件。原因在于删除某个子组件后，该子组件之后的数据项的index应减1，但实际后续数据项对应的子组件仍使用最初分配的index，itemGenerator中的index未更新，导致删除结果与预期不符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修复代码如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BasicDataSource代码见文档末尾BasicDataSource示例代码: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#string%E7%B1%BB%E5%9E%8B%E6%95%B0%E7%BB%84%E7%9A%84basicdatasource%E4%BB%A3%E7%A0%81",
        children: "string类型数组的BasicDataSource代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n// BasicDataSource代码见文档末尾BasicDataSource示例代码: String类型数组的BasicDataSource代码。\nimport { BasicDataSource } from './BasicDataSource';\nconst TAG = '[Sample_RenderingControl]';\nconst DOMAIN = 0xF811;\n\nclass UnexpectedDataSource extends BasicDataSource {\n  private dataArray: string[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n\n  public deleteData(index: number): void {\n    this.dataArray.splice(index, 1);\n    this.notifyDataDelete(index);\n  }\n\n  public reloadData(): void {\n    this.notifyDataReload();\n  }\n}\n\n@Entry\n@Component\nstruct UnexpectedRenderingResults {\n  private data: UnexpectedDataSource = new UnexpectedDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 20; i++) {\n      this.data.pushData(`Hello ${i}`);\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      LazyForEach(this.data, (item: string, index: number) => {\n        ListItem() {\n          Row() {\n            Text(item).fontSize(50)\n              .onAppear(() => {\n                hilog.info(DOMAIN, TAG, `appear: ${item}`);\n              })\n          }.margin({ left: 10, right: 10 })\n        }\n        .onClick(() => {\n          // 点击删除子组件\n          this.data.deleteData(index);\n          // 重置所有子组件的index索引\n          this.data.reloadData();\n        })\n      }, (item: string, index: number) => item + index.toString())\n    }\n    .cachedCount(5)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在删除一个数据项后调用reloadData方法，重建后面的数据项，以达到更新index索引的目的。要保证reloadData方法重建数据项，必须保证数据项能生成新的key。这里用了item + index.toString()保证被删除数据项后面的数据项都被重建。如果用item + Date.now().toString()替代，那么所有数据项都生成新的key，导致所有数据项都被重建。这种方法，效果是一样的，只是性能略差。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "修复LazyForEach删除数据非预期"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(316270)/* ["default"] */.A) + "",
        width: "303",
        height: "610"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "重渲染时图片闪烁",
      children: "重渲染时图片闪烁"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GenericBasicDataSource代码见文档末尾BasicDataSource示例代码: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%B3%9B%E5%9E%8B%E6%95%B0%E7%BB%84%E7%9A%84basicdatasource%E4%BB%A3%E7%A0%81",
        children: "泛型数组的BasicDataSource代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// GenericBasicDataSource代码见文档末尾BasicDataSource示例代码: 泛型数组的BasicDataSource代码。\nimport { GenericBasicDataSource } from './GenericBasicDataSource';\n\nclass MyDataSource extends GenericBasicDataSource<StringData> {\n  private dataArray: StringData[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): StringData {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: StringData): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n\n  public reloadData(): void {\n    this.notifyDataReload();\n  }\n}\n\nclass StringData {\n  message: string;\n  imgSrc: Resource;\n\n  constructor(message: string, imgSrc: Resource) {\n    this.message = message;\n    this.imgSrc = imgSrc;\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent {\n  private moved: number[] = [];\n  private data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 20; i++) {\n      // 此处'app.media.img'仅作示例，请开发者自行替换，否则imageSource创建失败会导致后续无法正常执行。\n      this.data.pushData(new StringData(`Hello ${i}`, $r('app.media.img')));\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      LazyForEach(this.data, (item: StringData, index: number) => {\n        ListItem() {\n          Column() {\n            Text(item.message).fontSize(50)\n              .onAppear(() => {\n                console.info(`appear: ${item.message}`);\n              })\n            Image(item.imgSrc)\n              .width(500)\n              .height(200)\n          }.margin({ left: 10, right: 10 })\n        }\n        .onClick(() => {\n          item.message += '00';\n          this.data.reloadData();\n        })\n      }, (item: StringData, index: number) => item.message) // 修改message属性会导致键值变化\n    }.cachedCount(5)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LazyForEach仅改变文字但是图片闪烁问题"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(308510)/* ["default"] */.A) + "",
        width: "348",
        height: "711"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单击ListItem子组件时，只改变了数据项的message属性，但因为键值发生变化，导致整个ListItem被重建。由于Image组件异步刷新，视觉上图片会闪烁。解决方法是保持键值不变，并使用@ObjectLink和@Observed单独刷新子组件Text。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修复代码如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GenericBasicDataSource代码见文档末尾BasicDataSource示例代码: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%B3%9B%E5%9E%8B%E6%95%B0%E7%BB%84%E7%9A%84basicdatasource%E4%BB%A3%E7%A0%81",
        children: "泛型数组的BasicDataSource代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n// GenericBasicDataSource代码见文档末尾BasicDataSource示例代码: 泛型数组的BasicDataSource代码。\nimport { GenericBasicDataSource } from './GenericBasicDataSource';\nconst TAG = '[Sample_RenderingControl]';\nconst DOMAIN = 0xF811;\n\nclass FliceringDataSource extends GenericBasicDataSource<ImageFliceringStringData> {\n  private dataArray: ImageFliceringStringData[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): ImageFliceringStringData {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: ImageFliceringStringData): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\n// @Observed类装饰器 和 @ObjectLink 用于在涉及嵌套对象或数组的场景中进行双向数据同步\n@Observed\nclass ImageFliceringStringData {\n  public message: string;\n  public imgSrc: Resource;\n\n  constructor(message: string, imgSrc: Resource) {\n    this.message = message;\n    this.imgSrc = imgSrc;\n  }\n}\n\n@Entry\n@Component\nstruct ImageFlickeringDuringRerenders {\n  private data: FliceringDataSource = new FliceringDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 20; i++) {\n      // 此处'app.media.img'仅作示例，请开发者自行替换，否则imageSource创建失败会导致后续无法正常执行。\n      this.data.pushData(new ImageFliceringStringData(`Hello ${i}`, $r('app.media.img')));\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      LazyForEach(this.data, (item: ImageFliceringStringData, index: number) => {\n        ListItem() {\n          ImageFlickeringChildComponent({ data: item })\n        }\n        .onClick(() => {\n          item.message += '0';\n        })\n      }, (item: ImageFliceringStringData, index: number) => index.toString()) // 键值不受message属性影响\n    }\n    .cachedCount(5)\n  }\n}\n\n@Component\nstruct ImageFlickeringChildComponent {\n  // 用状态变量来驱动UI刷新，而不是通过Lazyforeach的api来驱动UI刷新\n  @ObjectLink data: ImageFliceringStringData;\n\n  build() {\n    Column() {\n      Text(this.data.message).fontSize(50)\n        .onAppear(() => {\n          hilog.info(DOMAIN, TAG, `appear: ${this.data.message}`);\n        })\n      Image(this.data.imgSrc)\n        .width(500)\n        .height(200)\n    }.margin({ left: 10, right: 10 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "修复LazyForEach仅改变文字但是图片闪烁问题"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(753794)/* ["default"] */.A) + "",
        width: "353",
        height: "709"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "objectlink属性变化ui未更新",
      children: "@ObjectLink属性变化UI未更新"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GenericBasicDataSource代码见文档末尾BasicDataSource示例代码: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%B3%9B%E5%9E%8B%E6%95%B0%E7%BB%84%E7%9A%84basicdatasource%E4%BB%A3%E7%A0%81",
        children: "泛型数组的BasicDataSource代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// GenericBasicDataSource代码见文档末尾BasicDataSource示例代码: 泛型数组的BasicDataSource代码。\nimport { GenericBasicDataSource } from './GenericBasicDataSource';\n\nclass MyDataSource extends GenericBasicDataSource<StringData> {\n  private dataArray: StringData[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): StringData {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: StringData): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\n@Observed\nclass StringData {\n  message: NestedString;\n\n  constructor(message: NestedString) {\n    this.message = message;\n  }\n}\n\n@Observed\nclass NestedString {\n  message: string;\n\n  constructor(message: string) {\n    this.message = message;\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent {\n  private moved: number[] = [];\n  private data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 20; i++) {\n      this.data.pushData(new StringData(new NestedString(`Hello ${i}`)));\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      LazyForEach(this.data, (item: StringData, index: number) => {\n        ListItem() {\n          ChildComponent({ data: item })\n        }\n        .onClick(() => {\n          item.message.message += '0';\n        })\n      }, (item: StringData, index: number) => item.message.message + index.toString())\n    }.cachedCount(5)\n  }\n}\n\n@Component\nstruct ChildComponent {\n  @ObjectLink data: StringData;\n\n  build() {\n    Row() {\n      Text(this.data.message.message).fontSize(50)\n        .onAppear(() => {\n          console.info(`appear: ${this.data.message.message}`);\n        })\n    }.margin({ left: 10, right: 10 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ObjectLink属性变化后UI未更新"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(550109)/* ["default"] */.A) + "",
        width: "303",
        height: "610"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@ObjectLink装饰的成员变量仅能监听到其子属性的变化，无法监听深层嵌套属性，因此，只能通过修改子属性来通知组件重新渲染。具体请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
        children: "@ObjectLink装饰器与@Observed装饰器的详细使用方法和限制条件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修复代码如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GenericBasicDataSource代码见文档末尾BasicDataSource示例代码: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%B3%9B%E5%9E%8B%E6%95%B0%E7%BB%84%E7%9A%84basicdatasource%E4%BB%A3%E7%A0%81",
        children: "泛型数组的BasicDataSource代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// GenericBasicDataSource代码见文档末尾BasicDataSource示例代码: 泛型数组的BasicDataSource代码。\nimport { GenericBasicDataSource } from './GenericBasicDataSource';\n\nclass UINoteRenderingSource extends GenericBasicDataSource<UINoteRenderingStringData> {\n  private dataArray: UINoteRenderingStringData[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): UINoteRenderingStringData {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: UINoteRenderingStringData): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\n@Observed\nclass UINoteRenderingStringData {\n  public message: NestedString;\n\n  constructor(message: NestedString) {\n    this.message = message;\n  }\n}\n\n@Observed\nclass NestedString {\n  public message: string;\n\n  constructor(message: string) {\n    this.message = message;\n  }\n}\n\n@Entry\n@Component\nstruct UINotRerenderedWhenObjectLinkIsChanged {\n  private moved: number[] = [];\n  private data: UINoteRenderingSource = new UINoteRenderingSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 20; i++) {\n      this.data.pushData(new UINoteRenderingStringData(new NestedString(`Hello ${i}`)));\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      LazyForEach(this.data, (item: UINoteRenderingStringData, index: number) => {\n        ListItem() {\n          UINotRerenderedChildComponent({ data: item })\n        }\n        .onClick(() => {\n          // @ObjectLink装饰的成员变量仅能监听到其子属性的变化，再深入嵌套的属性便无法观测到\n          item.message = new NestedString(item.message.message + '0');\n        })\n      }, (item: UINoteRenderingStringData, index: number) => item.message.message + index.toString())\n    }\n    .cachedCount(5)\n  }\n}\n\n@Component\nstruct UINotRerenderedChildComponent {\n  @ObjectLink data: UINoteRenderingStringData;\n\n  build() {\n    Row() {\n      Text(this.data.message.message).fontSize(50)\n    }.margin({ left: 10, right: 10 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "修复ObjectLink属性变化后UI更新"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(555609)/* ["default"] */.A) + "",
        width: "303",
        height: "610"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在list内使用屏幕闪烁",
      children: "在List内使用屏幕闪烁"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在List的onScrollIndex方法中调用onDataReloaded可能会导致屏幕闪烁。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BasicDataSource代码见文档末尾BasicDataSource示例代码: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#string%E7%B1%BB%E5%9E%8B%E6%95%B0%E7%BB%84%E7%9A%84basicdatasource%E4%BB%A3%E7%A0%81",
        children: "string类型数组的BasicDataSource代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// BasicDataSource代码见文档末尾BasicDataSource示例代码: string类型数组的BasicDataSource代码。\nimport { BasicDataSource } from './BasicDataSource';\n\nclass MyDataSource extends BasicDataSource {\n  private dataArray: string[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n\n  operateData(): void {\n    const totalCount = this.dataArray.length;\n    const batch = 5;\n    for (let i = totalCount; i < totalCount + batch; i++) {\n      this.dataArray.push(`Hello ${i}`);\n    }\n    this.notifyDataReload();\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent {\n  private moved: number[] = [];\n  private data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 10; i++) {\n      this.data.pushData(`Hello ${i}`);\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      LazyForEach(this.data, (item: string, index: number) => {\n        ListItem() {\n          Row() {\n            Text(item)\n              .width('100%')\n              .height(80)\n              .backgroundColor(Color.Gray)\n              .onAppear(() => {\n                console.info(`appear: ${item}`);\n              })\n          }.margin({ left: 10, right: 10 })\n        }\n      }, (item: string) => item)\n    }.cachedCount(10)\n    .onScrollIndex((start, end, center) => {\n      if (end === this.data.totalCount() - 1) {\n        console.info('scroll to end');\n        this.data.operateData();\n      }\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "当List下拉到底时，屏幕闪烁"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(649117)/* ["default"] */.A) + "",
        width: "320",
        height: "541"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用onDatasetChange代替onDataReloaded，不仅可以修复闪屏问题，还能提升加载性能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BasicDataSource代码见文档末尾BasicDataSource示例代码: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#string%E7%B1%BB%E5%9E%8B%E6%95%B0%E7%BB%84%E7%9A%84basicdatasource%E4%BB%A3%E7%A0%81",
        children: "string类型数组的BasicDataSource代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n// BasicDataSource代码见文档末尾BasicDataSource示例代码: String类型数组的BasicDataSource代码。\nimport { BasicDataSource } from './BasicDataSource';\nconst TAG = '[Sample_RenderingControl]';\nconst DOMAIN = 0xF811;\n\nclass ScreenFliceringDataSource extends BasicDataSource {\n  private dataArray: string[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n\n  operateData(): void {\n    const totalCount = this.dataArray.length;\n    const batch = 5;\n    for (let i = totalCount; i < totalCount + batch; i++) {\n      this.dataArray.push(`Hello ${i}`);\n    }\n    // 替换 notifyDataReload\n    this.notifyDatasetChange([{ type: DataOperationType.ADD, index: totalCount, count: batch }]);\n  }\n}\n\n@Entry\n@Component\nstruct ScreenFlickeringInList {\n  private moved: number[] = [];\n  private data: ScreenFliceringDataSource = new ScreenFliceringDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 10; i++) {\n      this.data.pushData(`Hello ${i}`);\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      LazyForEach(this.data, (item: string, index: number) => {\n        ListItem() {\n          Row() {\n            Text(item)\n              .width('100%')\n              .height(80)\n              .backgroundColor(Color.Gray)\n              .onAppear(() => {\n                hilog.info(DOMAIN, TAG, `appear: ${item}`);\n              })\n          }.margin({ left: 10, right: 10 })\n        }\n      }, (item: string) => item)\n    }\n    .cachedCount(10)\n    .onScrollIndex((start, end, center) => {\n      if (end === this.data.totalCount() - 1) {\n        this.data.operateData();\n      }\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "修复后，当List下拉到底时，屏幕不闪烁"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(665848)/* ["default"] */.A) + "",
        width: "320",
        height: "541"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "组件复用渲染异常",
      children: "组件复用渲染异常"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@Reusable装饰器与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#componentv2",
        children: "@ComponentV2装饰器"
      }), "混用会导致组件渲染异常。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GenericBasicDataSource代码见文档末尾BasicDataSource示例代码: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%B3%9B%E5%9E%8B%E6%95%B0%E7%BB%84%E7%9A%84basicdatasource%E4%BB%A3%E7%A0%81",
        children: "泛型数组的BasicDataSource代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// GenericBasicDataSource代码见文档末尾BasicDataSource示例代码: 泛型数组的BasicDataSource代码。\nimport { GenericBasicDataSource } from './GenericBasicDataSource';\n\nclass MyDataSource extends GenericBasicDataSource<StringData> {\n  private dataArray: StringData[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): StringData {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: StringData): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\n\nclass StringData {\n  message: string;\n\n  constructor(message: string) {\n    this.message = message;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct MyComponent {\n  data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 30; i++) {\n      this.data.pushData(new StringData(`Hello${i}`));\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      LazyForEach(this.data, (item: StringData, index: number) => {\n        ListItem() {\n          ChildComponent({ data: item })\n            .onAppear(() => {\n              console.info(`onAppear: ${item.message}`);\n            })\n        }\n      }, (item: StringData, index: number) => index.toString())\n    }.cachedCount(5)\n  }\n}\n\n@Reusable\n@Component\nstruct ChildComponent {\n  @State data: StringData = new StringData('');\n\n  aboutToAppear(): void {\n    console.info(`aboutToAppear: ${this.data.message}`);\n  }\n\n  aboutToRecycle(): void {\n    console.info(`aboutToRecycle: ${this.data.message}`);\n  }\n\n  // 对复用的组件进行数据更新\n  aboutToReuse(params: Record<string, ESObject>): void {\n    this.data = params.data as StringData;\n    console.info(`aboutToReuse: ${this.data.message}`);\n  }\n\n  build() {\n    Row() {\n      Text(this.data.message).fontSize(50)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "反例中，在@ComponentV2装饰的组件MyComponent中，LazyForEach列表使用了@Reusable装饰的组件ChildComponent，导致组件渲染失败。从日志中可以看到，组件触发了onAppear，但没有触发aboutToAppear。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将@ComponentV2修改为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#component",
        children: "@Component"
      }), "可以修复渲染异常。修复后，当滑动事件触发组件节点下树时，对应的可复用组件ChildComponent会被加入复用缓存，而非被销毁，并触发aboutToRecycle事件，打印日志信息。当列表滑动，出现新节点时，会将可复用的组件从复用缓存中重新加入到节点树，触发aboutToReuse刷新组件数据，并打印日志信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "键值不合理导致组件不刷新",
      children: "键值不合理导致组件不刷新"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者需要定义合适的键值生成函数，返回与目标数据相关联的键值。目标数据发生改变时，LazyForEach识别到键值改变才会刷新对应组件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BasicDataSource代码见文档末尾BasicDataSource示例代码: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#string%E7%B1%BB%E5%9E%8B%E6%95%B0%E7%BB%84%E7%9A%84basicdatasource%E4%BB%A3%E7%A0%81",
        children: "string类型数组的BasicDataSource代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// BasicDataSource代码见文档末尾BasicDataSource示例代码: string类型数组的BasicDataSource代码。\nimport { BasicDataSource } from './BasicDataSource';\n\nclass MyDataSource extends BasicDataSource {\n  private dataArray: string[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n\n  public updateAllData(): void {\n    this.dataArray = this.dataArray.map((item: string) => item + `!`);\n    this.notifyDataReload();\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent {\n  private data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 20; i++) {\n      this.data.pushData(`Hello ${i}`);\n    }\n  }\n\n  build() {\n    Column() {\n      Button(`update all`)\n        .onClick(() => {\n          this.data.updateAllData();\n        })\n      List({ space: 3 }) {\n        LazyForEach(this.data, (item: string) => {\n          ListItem() {\n            Text(item).fontSize(50)\n          }\n        })\n      }.cachedCount(5)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "点击按钮更新数据，组件不会刷新"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(992528)/* ["default"] */.A) + "",
        width: "268",
        height: "446"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LazyForEach依赖生成的键值判断是否刷新子组件，如果更新的数据没有改变键值（如示例中开发者没有定义键值生成函数，此时键值仅与组件索引index有关，更新数据时键值不变），则LazyForEach不会刷新对应组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "LazyForEach(this.data, (item: string) => {\n  ListItem() {\n    Text(item).fontSize(50)\n  }\n}, (item: string) => item) // 定义键值生成函数\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "定义键值生成函数后，点击按钮更新数据，组件刷新"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(13639)/* ["default"] */.A) + "",
        width: "268",
        height: "446"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "子组件尺寸缺失导致懒加载失效",
      children: "子组件尺寸缺失导致懒加载失效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持数据懒加载的父组件基于自身和子组件的高度或宽度计算可视范围内应布局的子节点数量，高度或宽度的缺失会导致部分场景懒加载失效。如下示例，在纵向布局中，首次渲染时子组件的高度缺失，所有数据项对应组件都会被创建。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BasicDataSource代码见文档末尾BasicDataSource示例代码: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#string%E7%B1%BB%E5%9E%8B%E6%95%B0%E7%BB%84%E7%9A%84basicdatasource%E4%BB%A3%E7%A0%81",
        children: "string类型数组的BasicDataSource代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// BasicDataSource代码见文档末尾BasicDataSource示例代码: string类型数组的BasicDataSource代码。\nimport { BasicDataSource } from './BasicDataSource';\n\nclass MyDataSource extends BasicDataSource {\n  public dataArray: string[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent {\n  private data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 100; i++) {\n      this.data.pushData(``);\n    }\n  }\n\n  build() {\n    List() {\n      LazyForEach(this.data, (item: string, index: number) => {\n        ChildComponent({ message: item, index: index })\n        // 子组件未设置默认高度，首次渲染时所有数据项对应组件都被创建\n        // .height(60)\n      }, (item: string, index: number) => item + index)\n    }\n    .cachedCount(2)\n  }\n}\n\n@Component\nstruct ChildComponent {\n  message: string = ``;\n  index: number = -1;\n\n  aboutToAppear(): void {\n    console.info(`about to appear ${this.index}`);\n  }\n\n  build() {\n    Text(this.message).fontSize(50)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述示例由于子组件ChildComponent的变量message初始值为空字符串，导致其内部的Text组件高度为 0，同时子组件未显式设置默认高度（如.height(60)），因此在首次渲染时所有子组件的高度均被计算为0。父组件List在基于高度计算可视范围时，判断所有子组件均位于可视区域内，导致懒加载机制失效，最终触发了全部数据项对应组件的创建（此示例无实际显示内容，可通过日志观察到所有about to appear打印）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为子组件设置默认高度，确保父组件能正确计算可视范围，从而恢复此场景下懒加载功能（此示例无实际显示内容，可通过日志观察到仅显示区域和预加载区域内的节点打印了about to appear日志）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "LazyForEach(this.data, (item: string, index: number) => {\n  ChildComponent({ message: item, index: index })\n  // 设置子组件默认高度，首次渲染懒加载生效\n    .height(60)\n}, (item: string, index: number) => item + index)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "basicdatasource示例代码",
      children: "BasicDataSource示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "string类型数组的basicdatasource代码",
      children: "string类型数组的BasicDataSource代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// BasicDataSource实现了IDataSource接口，用于管理listener监听，以及通知LazyForEach数据更新\nexport class BasicDataSource implements IDataSource {\n  private listeners: DataChangeListener[] = [];\n  private originDataArray: string[] = [];\n\n  public totalCount(): number {\n    return this.originDataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.originDataArray[index];\n  }\n\n  // 该方法为框架侧调用，为LazyForEach组件向其数据源处添加listener监听\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      this.listeners.push(listener);\n    }\n  }\n\n  // 该方法为框架侧调用，为对应的LazyForEach组件在数据源处去除listener监听\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  // 通知LazyForEach组件需要重载所有子组件\n  notifyDataReload(): void {\n    this.listeners.forEach(listener => {\n      listener.onDataReloaded();\n    });\n  }\n\n  // 通知LazyForEach组件需要在index对应索引处添加子组件\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n      // 写法2：listener.onDatasetChange([{type: DataOperationType.ADD, index: index}]);\n    });\n  }\n\n  // 通知LazyForEach组件在index对应索引处数据有变化，需要重建该子组件\n  notifyDataChange(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataChange(index);\n      // 写法2：listener.onDatasetChange([{type: DataOperationType.CHANGE, index: index}]);\n    });\n  }\n\n  // 通知LazyForEach组件需要在index对应索引处删除该子组件\n  notifyDataDelete(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataDelete(index);\n      // 写法2：listener.onDatasetChange([{type: DataOperationType.DELETE, index: index}]);\n    });\n  }\n\n  // 通知LazyForEach组件将from索引和to索引处的子组件进行交换\n  notifyDataMove(from: number, to: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataMove(from, to);\n      // 写法2：listener.onDatasetChange(\n      // [{type: DataOperationType.EXCHANGE, index: {start: from, end: to}}]);\n    });\n  }\n\n  notifyDatasetChange(operations: DataOperation[]): void {\n    this.listeners.forEach(listener => {\n      listener.onDatasetChange(operations);\n    });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "泛型数组的basicdatasource代码",
      children: "泛型数组的BasicDataSource代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// GenericBasicDataSource实现了IDataSource接口，用于管理listener监听，以及通知LazyForEach数据更新\nexport class GenericBasicDataSource<T> implements IDataSource {\n  private listeners: DataChangeListener[] = [];\n  private originDataArray: T[] = [];\n\n  public totalCount(): number {\n    return this.originDataArray.length;\n  }\n\n  public getData(index: number): T {\n    return this.originDataArray[index];\n  }\n\n  // 该方法为框架侧调用，为LazyForEach组件向其数据源处添加listener监听\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      this.listeners.push(listener);\n    }\n  }\n\n  // 该方法为框架侧调用，为对应的LazyForEach组件在数据源处去除listener监听\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  // 通知LazyForEach组件需要重载所有子组件\n  notifyDataReload(): void {\n    this.listeners.forEach(listener => {\n      listener.onDataReloaded();\n    });\n  }\n\n  // 通知LazyForEach组件需要在index对应索引处添加子组件\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n    });\n  }\n\n  // 通知LazyForEach组件在index对应索引处数据有变化，需要重建该子组件\n  notifyDataChange(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataChange(index);\n    });\n  }\n\n  // 通知LazyForEach组件需要在index对应索引处删除该子组件\n  notifyDataDelete(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataDelete(index);\n    });\n  }\n\n  // 通知LazyForEach组件将from索引和to索引处的子组件进行交换\n  notifyDataMove(from: number, to: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataMove(from, to);\n    });\n  }\n\n  notifyDatasetChange(operations: DataOperation[]): void {\n    this.listeners.forEach(listener => {\n      listener.onDatasetChange(operations);\n    });\n  }\n}\n"
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
738830(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437701-5db17a662d13de889e924b7685f1f7e1.gif");

},
882664(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957656-c729904de8ee1143b2e825a98ea15f31.gif");

},
769014(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437699-1e21b439f812b20e1f733d79c4cfe184.gif");

},
836011(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477655-efc72e568274e080e799e0fca62fd1b8.gif");

},
649117(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798012-1ae5c28df88b59475d69a6fd9776e562.gif");

},
308510(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798010-b317329a39df0a7c3b6e4bf68164a721.gif");

},
477263(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957658-01f2292e7c80c22b90449cc3fed1925b.gif");

},
262086(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477657-b3649c088d84261cd8cc7ebf09b7682b.gif");

},
528687(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798008-83258378a82626ab554d8453a1f3d5b6.gif");

},
316270(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477659-0bd2e58dbb2d909138f687f1c9f7b8ae.gif");

},
992528(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957662-9e943d74f2ed3211b0889b00836ae505.gif");

},
96739(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798006-228d5284a04f3825dfa60ab32573f363.gif");

},
753794(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437705-44e07ab6b84ce575875732994cb7b649.gif");

},
749271(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957654-8bc8535967b30bc6afbbb552617886d4.gif");

},
13639(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477663-62e04b2369bd37ff33d00a25989c0adb.gif");

},
816235(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477653-7f3c086ec6c80b5e8569688b694d3e69.gif");

},
550109(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957660-cbe55550c2b5c130a659ea0d870c034a.gif");

},
600033(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
645979(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798004-3eb7ed6c7eee3a9c08a8188e4b67087b.gif");

},
665848(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437707-5d9a1e954ce09ae0558b2d1703340f72.gif");

},
108544(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437703-90dfadd5464f505792706379b81ebbba.gif");

},
555609(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477661-0cc7383a50c76f48997cfb18bd748733.gif");

},
145467(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957652-a755ff1432bae6823c91ec3cb379d36c.gif");

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