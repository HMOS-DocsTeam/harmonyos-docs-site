"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["913148"], {
949361(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_1_arkts_v_1_component_state_management_arkts_observed_and_objectlink_arkts_observed_and_objectlink_md_c6c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-v-1-arkts-v-1-component-state-management-arkts-observed-and-objectlink-arkts-observed-and-objectlink-md-c6c.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_1_arkts_v_1_component_state_management_arkts_observed_and_objectlink_arkts_observed_and_objectlink_md_c6c_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink/arkts-observed-and-objectlink","title":"@Observed装饰器和@ObjectLink装饰器：嵌套类对象属性变化","description":"上文所述的装饰器（包括@State、@Prop、@Link、@Provide和@Consume装饰器）仅能观察到第一层的变化，但是在实际应用开发中，应用会根据开发需要，封装自己的数据模型。对于多层嵌套的情况，比如二维数组、对象数组、嵌套类场景，无法观察到第二层的属性变化。因此，为了实现对嵌套数据结构中深层属性变化的观察，引入了@Observed和@ObjectLink装饰器。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink/arkts-observed-and-objectlink.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"@Observed装饰器和@ObjectLink装饰器：嵌套类对象属性变化","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-observed-and-objectlink","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"@Provide装饰器和@Consume装饰器：与后代组件双向同步","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume/"},"next":{"title":"@Watch装饰器：状态变量更改通知","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-watch/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink/arkts-observed-and-objectlink.md


const frontMatter = {
	title: '@Observed装饰器和@ObjectLink装饰器：嵌套类对象属性变化',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-observed-and-objectlink',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '@Observed装饰器和@ObjectLink装饰器：嵌套类对象属性变化';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "装饰器说明",
  "id": "装饰器说明",
  "level": 2
}, {
  "value": "变量的传递/访问规则说明",
  "id": "变量的传递访问规则说明",
  "level": 2
}, {
  "value": "观察变化和行为表现",
  "id": "观察变化和行为表现",
  "level": 2
}, {
  "value": "观察变化",
  "id": "观察变化",
  "level": 3
}, {
  "value": "框架行为",
  "id": "框架行为",
  "level": 3
}, {
  "value": "限制条件",
  "id": "限制条件",
  "level": 2
}, {
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "对象类型",
  "id": "对象类型",
  "level": 3
}, {
  "value": "嵌套对象",
  "id": "嵌套对象",
  "level": 3
}, {
  "value": "对象数组",
  "id": "对象数组",
  "level": 3
}, {
  "value": "二维数组",
  "id": "二维数组",
  "level": 3
}, {
  "value": "继承Map类",
  "id": "继承map类",
  "level": 3
}, {
  "value": "继承Set类",
  "id": "继承set类",
  "level": 3
}, {
  "value": "ObjectLink支持联合类型",
  "id": "objectlink支持联合类型",
  "level": 3
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "基础嵌套对象属性更改失效",
  "id": "基础嵌套对象属性更改失效",
  "level": 3
}, {
  "value": "复杂嵌套对象属性更改失效",
  "id": "复杂嵌套对象属性更改失效",
  "level": 3
}, {
  "value": "@Prop与@ObjectLink的差异",
  "id": "prop与objectlink的差异",
  "level": 3
}, {
  "value": "在@Observed装饰类的构造函数中延时更改成员变量",
  "id": "在observed装饰类的构造函数中延时更改成员变量",
  "level": 3
}, {
  "value": "@ObjectLink数据源更新时机",
  "id": "objectlink数据源更新时机",
  "level": 3
}, {
  "value": "@Observed装饰的类，在构造函数中使用this赋值属性，不触发UI更新",
  "id": "observed装饰的类在构造函数中使用this赋值属性不触发ui更新",
  "level": 3
}, {
  "value": "LazyForEach和@ObjectLink一起使用时，替换数组数据后UI不刷新",
  "id": "lazyforeach和objectlink一起使用时替换数组数据后ui不刷新",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "observed装饰器和objectlink装饰器嵌套类对象属性变化",
        children: "@Observed装饰器和@ObjectLink装饰器：嵌套类对象属性变化"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["上文所述的装饰器（包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
        children: "@State"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop",
        children: "@Prop"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
        children: "@Link"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
        children: "@Provide和@Consume"
      }), "装饰器）仅能观察到第一层的变化，但是在实际应用开发中，应用会根据开发需要，封装自己的数据模型。对于多层嵌套的情况，比如二维数组、对象数组、嵌套类场景，无法观察到第二层的属性变化。因此，为了实现对嵌套数据结构中深层属性变化的观察，引入了@Observed和@ObjectLink装饰器。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@Observed/@ObjectLink适用于观察嵌套对象（对象的属性是对象）属性的变化，需要开发者对装饰器的基本观察能力有一定的了解，再来对比阅读该文档。建议提前阅读：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
        children: "@State"
      }), "的基本用法。最佳实践请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-status-management",
        children: "状态管理最佳实践"
      }), "。常见问题请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state-management-faq",
        children: "状态管理常见问题"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(759777)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 9开始，这两个装饰器支持在ArkTS卡片中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始，这两个装饰器支持在元服务中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@ObjectLink和@Observed类装饰器配合使用，可实现嵌套对象或数组的双向数据同步，使用方式如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["将数组项或类属性声明为@Observed装饰的类型，示例请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%B5%8C%E5%A5%97%E5%AF%B9%E8%B1%A1",
          children: "嵌套对象"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在子组件中使用@ObjectLink装饰的状态变量，用于接收父组件@Observed装饰的类实例，从而建立双向数据绑定。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["API version 19之前，@ObjectLink只能接收@Observed装饰的类实例；API version 19及以后，@ObjectLink也可以接收复杂类型，无@Observed装饰的限制。但需注意，如需观察嵌套类型场景，需要其接收@Observed装饰的类实例或", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#makev1observed19",
          children: "makeV1Observed"
        }), "的返回值。示例请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E4%BA%8C%E7%BB%B4%E6%95%B0%E7%BB%84",
          children: "二维数组"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者如需实现单向数据同步，需要搭配@Prop使用，示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#prop%E4%B8%8Eobjectlink%E7%9A%84%E5%B7%AE%E5%BC%82",
        children: "@Prop与@ObjectLink的差异"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "装饰器说明",
      children: "装饰器说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "@Observed类装饰器"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰器参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类装饰器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "装饰class。需要放在class的定义前，使用new创建类对象。"
          })]
        })]
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "@ObjectLink变量装饰器"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰器参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "允许装饰的变量类型"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持继承Date、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E4%BA%8C%E7%BB%B4%E6%95%B0%E7%BB%84",
              children: "Array"
            }), "的class实例。  API version 11及以后支持继承", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%BB%A7%E6%89%BFmap%E7%B1%BB",
              children: "Map"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%BB%A7%E6%89%BFset%E7%B1%BB",
              children: "Set"
            }), "的class实例以及@Observed装饰类和undefined或null组成的联合类型，比如ClassA"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "被装饰变量的初始值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "禁止本地初始化。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@ObjectLink的属性可以被改变，但不允许整体赋值，即@ObjectLink装饰的变量是只读的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 允许@ObjectLink装饰的数据属性赋值\nthis.objLink.a= ...\n// 不允许@ObjectLink装饰的数据自身赋值\nthis.objLink= ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(315537)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@ObjectLink装饰的变量不能被赋值，如果要使用赋值操作，请使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop",
        children: "@Prop"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Prop装饰的变量和数据源的关系是单向同步，@Prop装饰的变量在本地拷贝了数据源，所以它允许本地更改，如果父组件中的数据源有更新，@Prop装饰的变量在本地的修改将被覆盖。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@ObjectLink装饰的变量和数据源的关系是双向同步，@ObjectLink装饰的变量相当于指向数据源的指针。禁止对@ObjectLink装饰的变量赋值，如果发生@ObjectLink装饰的变量的赋值，则同步链将被打断。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "变量的传递访问规则说明",
      children: "变量的传递/访问规则说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "@ObjectLink传递/访问"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "从父组件初始化"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["必须指定。  必须使用复杂类型初始化@ObjectLink装饰的变量，如果需要观察变化需要满足以下场景：  - API version 19之前，类型必须为被@Observed装饰的class实例。  - API version 19及以后，@ObjectLink可以被复杂类型初始化，即class、object或built-in类型。但当观察嵌套类型时，仍需其接收@Observed装饰的类实例或makeV1Observed的返回值。  - 同步源的class或者数组必须是", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
              children: "@State"
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
              children: "@Link"
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
              children: "@Provide"
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
              children: "@Consume"
            }), "或者@ObjectLink装饰的数据。  同步源是数组项的示例请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AF%B9%E8%B1%A1%E6%95%B0%E7%BB%84",
              children: "对象数组"
            }), "。初始化的class的示例请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B5%8C%E5%A5%97%E5%AF%B9%E8%B1%A1",
              children: "嵌套对象"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "与源对象同步"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "双向。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "可以初始化子组件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "允许，可用于初始化常规变量、@State、@Link、@Prop、@Provide"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 初始化规则图示"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(337142)/* ["default"] */.A) + "",
        width: "1249",
        height: "566"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "观察变化和行为表现",
      children: "观察变化和行为表现"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "观察变化",
      children: "观察变化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["API version 19之前，如果需要观察嵌套场景的变化，如嵌套类，二维数组，对象数组等，那么内层的数据类型也需要被@Observed装饰。API version 19及以后，也可以通过使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#makev1observed19",
        children: "makeV1Observed"
      }), "来使内层数据可观察。内层数据需要传递给@ObjectLink，使其在UI上可观察。示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%B5%8C%E5%A5%97%E5%AF%B9%E8%B1%A1",
        children: "嵌套对象"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@ObjectLink接收对象时，如果对象被@State或其他状态变量装饰器装饰，则可以观察第一层变化。示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B",
        children: "对象类型"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@ObjectLink接收嵌套对象时，内层对象需要为被@Observed装饰的class类型。从API version 19开始，内层对象也支持被", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#makev1observed19",
        children: "makeV1Observed"
      }), "处理的返回值。示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%B5%8C%E5%A5%97%E5%AF%B9%E8%B1%A1",
        children: "嵌套对象"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@ObjectLink推荐设计单独的自定义组件来渲染每一个数组或对象。此时，对象数组或嵌套对象需要两个自定义组件，一个自定义组件呈现外部数组/对象，另一个自定义组件呈现嵌套在数组/对象内的类对象。可以观察到："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["其属性的数值的变化，其中属性是指Object.keys(observedObject)返回的所有属性，示例请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%B5%8C%E5%A5%97%E5%AF%B9%E8%B1%A1",
          children: "嵌套对象"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果数据源是数组，则可以观察到数组项的替换，如果数据源是class，可观察到class的属性的变化，示例请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%AF%B9%E8%B1%A1%E6%95%B0%E7%BB%84",
          children: "对象数组"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@ObjectLink装饰继承于Date的class时，可以观察到Date整体的赋值，同时可通过调用Date的接口setFullYear, setMonth, setDate, setHours, setMinutes, setSeconds, setMilliseconds, setTime, setUTCFullYear, setUTCMonth, setUTCDate, setUTCHours, setUTCMinutes, setUTCSeconds, setUTCMilliseconds 更新Date的属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Observed\nclass DateClass extends Date {\n  constructor(args: number | string) {\n    super(args);\n  }\n}\n\n@Observed\nclass NewDate {\n  public data: DateClass;\n\n  constructor(data: DateClass) {\n    this.data = data;\n  }\n}\n\n@Component\nstruct Child {\n  label: string = 'date';\n  @ObjectLink data: DateClass;\n\n  build() {\n    Column() {\n      Button('child increase the day by 1')\n        .onClick(() => {\n          this.data.setDate(this.data.getDate() + 1);\n        })\n      DatePicker({\n        start: new Date('1970-1-1'),\n        end: new Date('2100-1-1'),\n        selected: this.data\n      })\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Parent {\n  @State newData: NewDate = new NewDate(new DateClass('2023-1-1'));\n\n  build() {\n    Column() {\n      Child({ label: 'date', data: this.newData.data })\n\n      Button('parent update the new date')\n        .onClick(() => {\n          this.newData.data = new DateClass('2023-07-07');\n        })\n      Button(`ViewB: this.newData = new NewDate(new DateClass('2023-08-20'))`)\n        .onClick(() => {\n          this.newData = new NewDate(new DateClass('2023-08-20'));\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@ObjectLink装饰继承于Map的class时，可以观察到Map整体的赋值，同时可通过调用Map的接口set, clear, delete 更新Map的值。示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%BB%A7%E6%89%BFmap%E7%B1%BB",
        children: "继承Map类"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@ObjectLink装饰继承于Set的class时，可以观察到Set整体的赋值，同时可通过调用Set的接口add, clear, delete 更新Set的值。示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%BB%A7%E6%89%BFset%E7%B1%BB",
        children: "继承Set类"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "框架行为",
      children: "框架行为"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始渲染："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "a. @Observed装饰的class的实例会被代理对象包装，代理了class上的属性的setter和getter方法。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "b. 子组件中@ObjectLink装饰的变量从父组件初始化，接收被@Observed装饰的class的实例，@ObjectLink的包装类会将自己注册给@Observed class。这里的注册行为指的是，@ObjectLink包装类会向@Observed实例提供自身的引用，让@Observed实例将其添加到依赖列表中，以便属性变化时能通知到它。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "属性更新：当@Observed装饰的class属性改变时，会执行代理的setter和getter，然后遍历依赖它的@ObjectLink包装类，通知数据更新。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制条件",
      children: "限制条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用@Observed装饰class会改变class原始的原型链，@Observed和其他类装饰器装饰同一个class可能会带来问题。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["@ObjectLink装饰器不建议在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#entry",
            children: "@Entry"
          }), "装饰的自定义组件中使用，编译时会产生告警。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@ObjectLink装饰的类型必须是复杂类型，否则会有编译时报错。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "API version 19前，@ObjectLink装饰的变量类型必须是显式地由@Observed装饰的类。如果未指定类型，或不是@Observed装饰的class，编译时报错。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["API version 19及以后，@ObjectLink也可以被", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#makev1observed19",
            children: "makeV1Observed"
          }), "的返回值初始化，若@ObjectLink接收未使用@Observed装饰的class或makeV1Observed返回值进行初始化，则会有运行时告警日志。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class Test {\n  msg: number;\n\n  constructor(msg: number) {\n    this.msg = msg;\n  }\n}\n// 错误写法，count未指定类型，编译报错\n@ObjectLink count;\n// 错误写法，Test未被@Observed装饰，编译报错\n@ObjectLink test: Test;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Observed\nclass Info {\n  public count: number;\n\n  constructor(count: number) {\n    this.count = count;\n  }\n}\n// ...\n// 正确写法\n@ObjectLink count: Info;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@ObjectLink装饰的变量不能本地初始化，仅能通过构造参数从父组件传入初始值，否则编译时会报错。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 错误写法，编译报错\n@ObjectLink count: CountInfo = new CountInfo(10);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Observed\nclass CountInfo {\n  public count: number;\n\n  constructor(count: number) {\n    this.count = count;\n  }\n}\n// ...\n// 正确写法\n@ObjectLink count: CountInfo;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@ObjectLink装饰的变量是只读的，不能被赋值，否则会有运行时报错提示Cannot set property when setter is undefined。如果需要对@ObjectLink装饰的变量进行整体替换，可以在父组件对其进行整体替换。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "【反例】"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Observed\nclass Info {\n  count: number;\n\n  constructor(count: number) {\n    this.count = count;\n  }\n}\n\n@Component\nstruct Child {\n  @ObjectLink num: Info;\n\n  build() {\n    Column() {\n      Text(`num的值: ${this.num.count}`)\n        .onClick(() => {\n          // 错误写法，@ObjectLink装饰的变量不能被赋值，运行时报错\n          this.num = new Info(10);\n        })\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Parent {\n  @State num: Info = new Info(10);\n\n  build() {\n    Column() {\n      Text(`count的值: ${this.num.count}`)\n      Child({num: this.num})\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "【正例】"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Observed\nclass Info {\n  public count: number;\n\n  constructor(count: number) {\n    this.count = count;\n  }\n}\n\n@Component\nstruct Child {\n  @ObjectLink num: Info;\n\n  build() {\n    Column() {\n      Text(`num value: ${this.num.count}`)\n        .onClick(() => {\n          // 正确写法，可以更改@ObjectLink装饰变量的成员属性\n          this.num.count = 20;\n        })\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Parent {\n  @State num: Info = new Info(10);\n\n  build() {\n    Column() {\n      Text(`count value: ${this.num.count}`)\n      Button('click')\n        .onClick(() => {\n          // 可以在父组件做整体替换\n          this.num = new Info(30);\n        })\n      Child({ num: this.num })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "对象类型",
      children: "对象类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该场景包含built-in类型（Array、Map、Set和Date）和普通class。从API version 19开始，@ObjectLink接收@State传递built-in类型和普通class对象，可以观察其API调用和第一层变化，无需额外添加@Observed装饰。因为@State等状态变量装饰器，会给对象（外层对象）添加一层“代理”包装，其功能等同于添加@Observed装饰。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Book {\n  public name: string;\n\n  constructor(name: string) {\n    this.name = name;\n  }\n}\n\n@Component\nstruct BookCard {\n  @ObjectLink book: Book;\n\n  build() {\n    Column() {\n      Text(`BookCard: ${this.book.name}`) // 可以观察到name的变化\n        .width(320)\n        .margin(10)\n        .textAlign(TextAlign.Center)\n\n      Button('change book.name')\n        .width(320)\n        .margin(10)\n        .onClick(() => {\n          this.book.name = 'C++';\n        })\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State book: Book = new Book('JS');\n\n  build() {\n    Column() {\n      BookCard({ book: this.book })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "嵌套对象",
      children: "嵌套对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Observed\nclass Book {\n  public name: string;\n\n  constructor(name: string) {\n    this.name = name;\n  }\n}\n\n@Observed\nclass Bag {\n  public book: Book;\n\n  constructor(book: Book) {\n    this.book = book;\n  }\n}\n\n@Component\nstruct BookCard {\n  @ObjectLink book: Book;\n\n  build() {\n    Column() {\n      Text(`BookCard: ${this.book.name}`) // 可以观察到name的变化\n        .width(320)\n        .margin(10)\n        .textAlign(TextAlign.Center)\n\n      Button('change book.name')\n        .width(320)\n        .margin(10)\n        .onClick(() => {\n          this.book.name = 'C++';\n        })\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State bag: Bag = new Bag(new Book('JS'));\n\n  build() {\n    Column() {\n      Text(`Index: ${this.bag.book.name}`) // 无法观察到name的变化\n        .width(320)\n        .margin(10)\n        .textAlign(TextAlign.Center)\n\n      Button('change bag.book.name')\n        .width(320)\n        .margin(10)\n        .onClick(() => {\n          this.bag.book.name = 'TS';\n        })\n\n      BookCard({ book: this.bag.book })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(645875)/* ["default"] */.A) + "",
        width: "325",
        height: "193"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述示例中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于Index组件内状态变量@State bag: Bag，bag.book是第一层，bag.book.name是第二层。因此，当点击change bag.book.name直接修改this.bag.book.name时，Index中的Text('Index: ${this.bag.book.name}')不会刷新，因为@State只能观察到第一层属性变化，不能直接观察嵌套对象内部属性name的变化。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于BookCard组件内状态变量@ObjectLink book: Book，Book被@Observed装饰，且book被@ObjectLink接收。book.name变化可以被@ObjectLink观察，因此无论是在父组件Index中点击change bag.book.name，还是在子组件BookCard中点击change book.name，BookCard中的Text('BookCard: ${this.book.name}')都会刷新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@State负责感知外层对象Bag的第一层变化，@Observed + @ObjectLink负责感知内层对象Book的属性变化。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "对象数组",
      children: "对象数组"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对象数组是一种常用的数据结构。以下示例展示了对象数组的用法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(557886)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["NextID是用来在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
        children: "ForEach循环渲染"
      }), "过程中，为每个数组元素生成一个唯一且持久的键值，标识对应的组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0001;\nconst TAG = 'ArkTSObservedAndObjectlink';\nlet nextID: number = 1;\n\n@Observed\nclass Info {\n  public id: number;\n  public info: number;\n\n  constructor(info: number) {\n    this.id = nextID++;\n    this.info = info;\n  }\n}\n\n@Component\nstruct Child {\n  // 子组件Child的@ObjectLink的类型是Info\n  @ObjectLink info: Info;\n  label: string = 'ViewChild';\n\n  build() {\n    Row() {\n      Button(`ViewChild [${this.label}] this.info.info = ${this.info ? this.info.info : 'undefined'}`)\n        .width(320)\n        .margin(10)\n        .onClick(() => {\n          this.info.info += 1;\n        })\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Parent {\n  // Parent中有@State装饰的Info[]\n  @State arrA: Info[] = [new Info(0), new Info(0)];\n\n  build() {\n    Column() {\n      ForEach(this.arrA,\n        (item: Info) => {\n          Child({ label: `#${item.id}`, info: item })\n        },\n        (item: Info): string => item.id.toString()\n      )\n      // 使用@State装饰的数组的数组项初始化@ObjectLink，其中数组项是被@Observed装饰的Info的实例\n      Child({ label: 'ViewChild this.arrA[first]', info: this.arrA[0] })\n      Child({ label: 'ViewChild this.arrA[last]', info: this.arrA[this.arrA.length-1] })\n\n      Button('ViewParent: reset array')\n        .width(320)\n        .margin(10)\n        .onClick(() => {\n          this.arrA = [new Info(0), new Info(0)];\n        })\n      Button('ViewParent: push')\n        .width(320)\n        .margin(10)\n        .onClick(() => {\n          this.arrA.push(new Info(0));\n        })\n      Button('ViewParent: shift')\n        .width(320)\n        .margin(10)\n        .onClick(() => {\n          if (this.arrA.length > 0) {\n            this.arrA.shift();\n          } else {\n            hilog.info(DOMAIN, TAG, 'length <= 0');\n          }\n        })\n      Button('ViewParent: item property in middle')\n        .width(320)\n        .margin(10)\n        .onClick(() => {\n          this.arrA[Math.floor(this.arrA.length / 2)].info = 10;\n        })\n      Button('ViewParent: item property in middle')\n        .width(320)\n        .margin(10)\n        .onClick(() => {\n          this.arrA[Math.floor(this.arrA.length / 2)] = new Info(11);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(710282)/* ["default"] */.A) + "",
        width: "325",
        height: "600"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "this.arrA[Math.floor(this.arrA.length/2)] = new Info(..) ：该状态变量的改变触发2次更新："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["ForEach：数组项的赋值导致ForEach的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-foreach/ts-rendering-control-foreach",
              children: "itemGenerator"
            }), "被修改，因此数组项被识别为有更改，ForEach的item builder将执行，创建新的Child组件实例。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Child({ label: 'ViewChild this.arrA[last]', info: this.arrA[this.arrA.length-1] })：上述更改改变了数组中第二个元素，所以绑定this.arrA[1]的Child将被更新。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "this.arrA.push(new Info(0)) ： 将触发2次不同效果的更新："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["ForEach：新添加的Info对象对于ForEach是未知的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-foreach/ts-rendering-control-foreach",
              children: "itemGenerator"
            }), "，ForEach的item builder将执行，创建新的Child组件实例。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Child({ label: 'ViewChild this.arrA[last]', info: this.arrA[this.arrA.length-1] })：数组的最后一项有更改，因此引起第二个Child的实例的更改。对于Child({ label: 'ViewChild this.arrA[first]', info: this.arrA[0] })，数组的更改并没有触发一个数组项更改的改变，所以第一个Child不会刷新。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "this.arrA[Math.floor(this.arrA.length/2)].info：@State无法观察到第二层的变化，但是Info被@Observed装饰，Info的属性的变化将被@ObjectLink观察到。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "二维数组",
      children: "二维数组"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用@Observed观察二维数组的变化。可以声明一个被@Observed装饰的继承Array的子类。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Observed\nclass ObservedArray<T> extends Array<T> {\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明一个继承自Array的类ObservedArray<T>，并使用new操作符创建ObservedArray<string>的实例，该实例可以观察到属性变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，展示了如何利用@Observed观察二维数组的变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Observed\nclass ObservedArray<T> extends Array<T> {\n}\n\n@Component\nstruct Item {\n  @ObjectLink itemArr: ObservedArray<string>;\n\n  build() {\n    Row() {\n      ForEach(this.itemArr, (item: string, index: number) => {\n        Text(`${index}: ${item}`)\n          .width(100)\n          .height(100)\n      }, (item: string) => item)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct IndexPage {\n  @State arr: Array<ObservedArray<string>> = [\n    new ObservedArray<string>('apple'),\n    new ObservedArray<string>('banana'),\n    new ObservedArray<string>('orange')\n  ];\n\n  build() {\n    Column() {\n      ForEach(this.arr, (itemArr: ObservedArray<string>) => {\n        Item({ itemArr: itemArr })\n      })\n\n      Divider()\n\n      Button('push two-dimensional array item')\n        .margin(10)\n        .onClick(() => {\n          this.arr[0].push('strawberry');\n        })\n\n      Button('push array item')\n        .margin(10)\n        .onClick(() => {\n          this.arr.push(new ObservedArray<string>('pear'));\n        })\n\n      Button('change two-dimensional array first item')\n        .margin(10)\n        .onClick(() => {\n          this.arr[0][0] = 'APPLE';\n        })\n\n      Button('change array first item')\n        .margin(10)\n        .onClick(() => {\n          this.arr[0] = new ObservedArray<string>('watermelon');\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["API version 19及以后，@ObjectLink也可以被", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#makev1observed19",
        children: "makeV1Observed"
      }), "的返回值初始化。所以开发者如果不想额外声明继承Array的类，也可以使用makeV1Observed来达到同样的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完整例子如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\n@Component\nstruct Item {\n  @ObjectLink itemArr: Array<string>;\n\n  build() {\n    Row() {\n      ForEach(this.itemArr, (item: string, index: number) => {\n        Text(`${index}: ${item}`)\n          .width(100)\n          .height(100)\n      }, (item: string) => item)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct IndexPage {\n  @State arr: Array<Array<string>> =\n    [UIUtils.makeV1Observed(['apple']), UIUtils.makeV1Observed(['banana']), UIUtils.makeV1Observed(['orange'])];\n\n  build() {\n    Column() {\n      ForEach(this.arr, (itemArr: Array<string>) => {\n        Item({ itemArr: itemArr })\n      })\n\n      Divider()\n\n      Button('push two-dimensional array item')\n        .margin(10)\n        .onClick(() => {\n          this.arr[0].push('strawberry');\n        })\n\n      Button('push array item')\n        .margin(10)\n        .onClick(() => {\n          this.arr.push(UIUtils.makeV1Observed(['pear']));\n        })\n\n      Button('change two-dimensional array first item')\n        .margin(10)\n        .onClick(() => {\n          this.arr[0][0] = 'APPLE';\n        })\n\n      Button('change array first item')\n        .margin(10)\n        .onClick(() => {\n          this.arr[0] = UIUtils.makeV1Observed(['watermelon']);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(59508)/* ["default"] */.A) + "",
        width: "342",
        height: "612"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "继承map类",
      children: "继承Map类"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(756461)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始，@ObjectLink支持@Observed装饰Map类型和继承Map类的类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，myMap类型为MyMap<number, string>，点击Button改变myMap的属性，视图会随之刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Observed\nclass Info {\n  public info: MyMap<number, string>;\n\n  constructor(info: MyMap<number, string>) {\n    this.info = info;\n  }\n}\n\n@Observed\nexport class MyMap<K, V> extends Map<K, V> {\n  public name: string;\n\n  constructor(name?: string, args?: [K, V][]) {\n    super(args);\n    this.name = name ? name : 'My Map';\n  }\n\n  getName() {\n    return this.name;\n  }\n}\n\n@Entry\n@Component\nstruct MapSampleNested {\n  @State message: Info = new Info(new MyMap('myMap', [[0, 'a'], [1, 'b'], [3, 'c']]));\n\n  build() {\n    Row() {\n      Column() {\n        MapSampleNestedChild({ myMap: this.message.info })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n\n@Component\nstruct MapSampleNestedChild {\n  @ObjectLink myMap: MyMap<number, string>;\n\n  build() {\n    Row() {\n      Column() {\n        ForEach(Array.from(this.myMap.entries()), (item: [number, string]) => {\n          Text(`${item[0]}`).fontSize(30)\n          Text(`${item[1]}`).fontSize(30)\n          Divider().strokeWidth(5)\n        })\n\n        Button('set new one')\n          .width(200)\n          .margin(10)\n          .onClick(() => {\n            this.myMap.set(4, 'd');\n          })\n        Button('clear')\n          .width(200)\n          .margin(10)\n          .onClick(() => {\n            this.myMap.clear();\n          })\n        Button('replace the first one')\n          .width(200)\n          .margin(10)\n          .onClick(() => {\n            this.myMap.set(0, 'aa');\n          })\n        Button('delete the first one')\n          .width(200)\n          .margin(10)\n          .onClick(() => {\n            this.myMap.delete(0);\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(745781)/* ["default"] */.A) + "",
        width: "232",
        height: "573"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "继承set类",
      children: "继承Set类"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(210403)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始，@ObjectLink支持@Observed装饰Set类型和继承Set类的类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，mySet类型为MySet<number>，点击Button改变mySet的属性，视图会随之刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Observed\nclass Info {\n  public info: MySet<number>;\n\n  constructor(info: MySet<number>) {\n    this.info = info;\n  }\n}\n\n@Observed\nexport class MySet<T> extends Set<T> {\n  public name: string;\n\n  constructor(name?: string, args?: T[]) {\n    super(args);\n    this.name = name ? name : 'My Set';\n  }\n\n  getName() {\n    return this.name;\n  }\n}\n\n@Entry\n@Component\nstruct SetSampleNested {\n  @State message: Info = new Info(new MySet('Set', [0, 1, 2, 3, 4]));\n\n  build() {\n    Row() {\n      Column() {\n        SetSampleNestedChild({ mySet: this.message.info })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n\n@Component\nstruct SetSampleNestedChild {\n  @ObjectLink mySet: MySet<number>;\n\n  build() {\n    Row() {\n      Column() {\n        ForEach(Array.from(this.mySet.entries()), (item: [number, number]) => {\n          Text(`${item}`).fontSize(30)\n          Divider()\n        })\n        Button('set new one')\n          .width(200)\n          .margin(10)\n          .onClick(() => {\n            this.mySet.add(5);\n          })\n        Button('clear')\n          .width(200)\n          .margin(10)\n          .onClick(() => {\n            this.mySet.clear();\n          })\n        Button('delete the first one')\n          .width(200)\n          .margin(10)\n          .onClick(() => {\n            this.mySet.delete(0);\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(371862)/* ["default"] */.A) + "",
        width: "232",
        height: "365"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "objectlink支持联合类型",
      children: "ObjectLink支持联合类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@ObjectLink支持@Observed装饰类和undefined或null组成的联合类型，在下面的示例中，count类型为Source | Data | undefined，点击父组件Parent中的Button改变count的属性或者类型，Child组件中对应的Text组件刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0001;\nconst TAG = 'ArkTSObservedAndObjectlink';\n\n@Observed\nclass Source {\n  public source: number;\n\n  constructor(source: number) {\n    this.source = source;\n  }\n}\n\n@Observed\nclass Data {\n  public data: number;\n\n  constructor(data: number) {\n    this.data = data;\n  }\n}\n\n@Entry\n@Component\nstruct Parent {\n  @State count: Source | Data | undefined = new Source(10);\n\n  build() {\n    Column() {\n      Child({ count: this.count })\n\n      Button('change count property')\n        .margin(10)\n        .onClick(() => {\n          // 判断count的类型，做属性的更新\n          if (this.count instanceof Source) {\n            this.count.source += 1;\n          } else if (this.count instanceof Data) {\n            this.count.data += 1;\n          } else {\n            hilog.info(DOMAIN, TAG, `count is undefined, cannot change property`);\n          }\n        })\n\n      Button('change count to Source')\n        .margin(10)\n        .onClick(() => {\n          // 赋值为Source的实例\n          this.count = new Source(100);\n        })\n\n      Button('change count to Data')\n        .margin(10)\n        .onClick(() => {\n          // 赋值为Data的实例\n          this.count = new Data(100);\n        })\n\n      Button('change count to undefined')\n        .margin(10)\n        .onClick(() => {\n          // 赋值为undefined\n          this.count = undefined;\n        })\n    }.width('100%')\n  }\n}\n\n@Component\nstruct Child {\n  @ObjectLink count: Source | Data | undefined;\n\n  build() {\n    Column() {\n      Text(`count is instanceof ${this.count instanceof Source ? 'Source' :\n        this.count instanceof Data ? 'Data' : 'undefined'}`)\n        .fontSize(30)\n        .margin(10)\n\n      Text(`count's property is  ${this.count instanceof Source ? this.count.source : this.count?.data}`).fontSize(15)\n\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(340581)/* ["default"] */.A) + "",
        width: "337",
        height: "343"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "基础嵌套对象属性更改失效",
      children: "基础嵌套对象属性更改失效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用开发中，有很多嵌套对象场景，例如，开发者更新了某个属性，但UI没有进行对应的更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每个装饰器都有观察能力，但并非所有的改变都可以被观察到，只有可以被观察到的变化才会触发UI更新。@Observed装饰器可以观察到嵌套对象的属性变化，其他装饰器仅能观察到第一层的变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的例子中，一些UI组件并不会更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Parent {\n  parentId: number;\n\n  constructor(parentId: number) {\n    this.parentId = parentId;\n  }\n\n  getParentId(): number {\n    return this.parentId;\n  }\n\n  setParentId(parentId: number): void {\n    this.parentId = parentId;\n  }\n}\n\nclass Child {\n  childId: number;\n\n  constructor(childId: number) {\n    this.childId = childId;\n  }\n\n  getChildId(): number {\n    return this.childId;\n  }\n\n  setChildId(childId: number): void {\n    this.childId = childId;\n  }\n}\n\nclass Cousin extends Parent {\n  cousinId: number = 47;\n  child: Child;\n\n  constructor(parentId: number, cousinId: number, childId: number) {\n    super(parentId);\n    this.cousinId = cousinId;\n    this.child = new Child(childId);\n  }\n\n  getCousinId(): number {\n    return this.cousinId;\n  }\n\n  setCousinId(cousinId: number): void {\n    this.cousinId = cousinId;\n  }\n\n  getChild(): number {\n    return this.child.getChildId();\n  }\n\n  setChild(childId: number): void {\n    this.child.setChildId(childId);\n  }\n}\n\n@Entry\n@Component\nstruct MyView {\n  @State cousin: Cousin = new Cousin(10, 20, 30);\n\n  build() {\n    Column({ space: 10 }) {\n      Text(`parentId: ${this.cousin.parentId}`)\n      Button('Change Parent.parent')\n        .onClick(() => {\n          this.cousin.parentId += 1;\n        })\n\n      Text(`cousinId: ${this.cousin.cousinId}`)\n      Button('Change Cousin.cousinId')\n        .onClick(() => {\n          this.cousin.cousinId += 1;\n        })\n\n      Text(`childId: ${this.cousin.child.childId}`)\n      Button('Change Cousin.Child.childId')\n        .onClick(() => {\n          // 点击时上面的Text组件不会刷新\n          this.cousin.child.childId += 1;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "最后一个Text组件Text('child: ${this.cousin.child.childId}')，当点击该组件时UI不会刷新。 因为，@State cousin : Cousin 只能观察到this.cousin属性的变化，比如this.cousin.parentId, this.cousin.cousinId 和this.cousin.child的变化，但是无法观察嵌套在属性中的属性，即this.cousin.child.childId（属性childId是内嵌在cousin中的对象Child的属性）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "为了观察到嵌套于内部的Child的属性，需要做如下改变："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "构造一个子组件，用于单独渲染Child的实例。 该子组件可以使用@ObjectLink child : Child或@Prop child : Child。通常会使用@ObjectLink，除非子组件需要对其Child对象进行本地修改。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "嵌套的Child必须用@Observed装饰。当在Cousin中创建Child对象时（本示例中的Cousin(10, 20, 30）)，它将被包装在ES6代理中，当Child属性更改时（this.cousin.child.childId += 1），该代码将修改通知到@ObjectLink变量。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例使用@Observed/@ObjectLink来观察嵌套对象的属性更改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Parent {\n  public parentId: number;\n\n  constructor(parentId: number) {\n    this.parentId = parentId;\n  }\n\n  getParentId(): number {\n    return this.parentId;\n  }\n\n  setParentId(parentId: number): void {\n    this.parentId = parentId;\n  }\n}\n\n@Observed\nclass Child {\n  public childId: number;\n\n  constructor(childId: number) {\n    this.childId = childId;\n  }\n\n  getChildId(): number {\n    return this.childId;\n  }\n\n  setChildId(childId: number): void {\n    this.childId = childId;\n  }\n}\n\nclass Cousin extends Parent {\n  public cousinId: number = 47;\n  public child: Child;\n\n  constructor(parentId: number, cousinId: number, childId: number) {\n    super(parentId);\n    this.cousinId = cousinId;\n    this.child = new Child(childId);\n  }\n\n  getCousinId(): number {\n    return this.cousinId;\n  }\n\n  setCousinId(cousinId: number): void {\n    this.cousinId = cousinId;\n  }\n\n  getChild(): number {\n    return this.child.getChildId();\n  }\n\n  setChild(childId: number): void {\n    this.child.setChildId(childId);\n  }\n}\n\n@Component\nstruct ViewChild {\n  @ObjectLink child: Child;\n\n  build() {\n    Column({ space: 10 }) {\n      Text(`childId: ${this.child.getChildId()}`)\n      Button('Change childId')\n        .onClick(() => {\n          this.child.setChildId(this.child.getChildId() + 1);\n        })\n    }\n  }\n}\n\n@Entry\n@Component\nstruct MyView {\n  @State cousin: Cousin = new Cousin(10, 20, 30);\n\n  build() {\n    Column({ space: 10 }) {\n      Text(`parentId: ${this.cousin.parentId}`)\n      Button('Change Parent.parentId')\n        .onClick(() => {\n          this.cousin.parentId += 1;\n        })\n\n      Text(`cousinId: ${this.cousin.cousinId}`)\n      Button('Change Cousin.cousinId')\n        .onClick(() => {\n          this.cousin.cousinId += 1;\n        })\n\n      ViewChild({ child: this.cousin.child }) // Text(`childId: ${this.cousin.child.childId}`)的替代写法\n      Button('Change Cousin.Child.childId')\n        .onClick(() => {\n          this.cousin.child.childId += 1;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "复杂嵌套对象属性更改失效",
      children: "复杂嵌套对象属性更改失效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例创建了一个带有@ObjectLink装饰变量的子组件，用于渲染一个含有嵌套属性的ParentCounter，用@Observed装饰嵌套在ParentCounter中的SubCounter。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let nextId = 1;\n@Observed\nclass SubCounter {\n  counter: number;\n  constructor(c: number) {\n    this.counter = c;\n  }\n}\n@Observed\nclass ParentCounter {\n  id: number;\n  counter: number;\n  subCounter: SubCounter;\n  incrCounter() {\n    this.counter++;\n  }\n  incrSubCounter(c: number) {\n    this.subCounter.counter += c;\n  }\n  setSubCounter(c: number): void {\n    this.subCounter.counter = c;\n  }\n  constructor(c: number) {\n    this.id = nextId++;\n    this.counter = c;\n    this.subCounter = new SubCounter(c);\n  }\n}\n@Component\nstruct CounterComp {\n  @ObjectLink value: ParentCounter;\n  build() {\n    Column({ space: 10 }) {\n      Text(`${this.value.counter}`)\n        .fontSize(25)\n        .onClick(() => {\n          this.value.incrCounter();\n        })\n      Text(`${this.value.subCounter.counter}`)\n        .onClick(() => {\n          this.value.incrSubCounter(1);\n        })\n      Divider().height(2)\n    }\n  }\n}\n@Entry\n@Component\nstruct ParentComp {\n  @State counter: ParentCounter[] = [new ParentCounter(1), new ParentCounter(2), new ParentCounter(3)];\n  build() {\n    Row() {\n      Column() {\n        CounterComp({ value: this.counter[0] })\n        CounterComp({ value: this.counter[1] })\n        CounterComp({ value: this.counter[2] })\n        Divider().height(5)\n        ForEach(this.counter,\n          (item: ParentCounter) => {\n            CounterComp({ value: item })\n          },\n          (item: ParentCounter) => item.id.toString()\n        )\n        Divider().height(5)\n        // 第一个点击事件\n        Text('Parent: incr counter[0].counter')\n          .fontSize(20).height(50)\n          .onClick(() => {\n            this.counter[0].incrCounter();\n            // 每次触发时自增10\n            this.counter[0].incrSubCounter(10);\n          })\n        // 第二个点击事件\n        Text('Parent: set.counter to 10')\n          .fontSize(20).height(50)\n          .onClick(() => {\n            // 无法将value设置为10，UI不会刷新\n            this.counter[0].setSubCounter(10);\n          })\n        Text('Parent: reset entire counter')\n          .fontSize(20).height(50)\n          .onClick(() => {\n            this.counter = [new ParentCounter(1), new ParentCounter(2), new ParentCounter(3)];\n          })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于Text('Parent: incr counter[0].counter')的onClick事件，this.counter[0].incrSubCounter(10)调用incrSubCounter方法使SubCounter的counter值增加10，UI同步刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "然而，在Text('Parent: set.counter to 10')的onClick中调用this.counter[0].setSubCounter(10)时，SubCounter的counter值无法重置为10。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "incrSubCounter和setSubCounter都是同一个SubCounter的函数。在第一个点击处理时调用incrSubCounter可以正确更新UI，而第二个点击处理调用setSubCounter时却没有更新UI。实际上incrSubCounter和setSubCounter两个函数都不能触发Text('${this.value.subCounter.counter}')的更新，因为@ObjectLink value : ParentCounter仅能观察其代理ParentCounter的属性，对于this.value.subCounter.counter是SubCounter的属性，无法观察到嵌套类的属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "另外，第一个click事件调用this.counter[0].incrCounter()将CounterComp自定义组件中的@ObjectLink value: ParentCounter标记为已更改，会触发Text('${this.value.subCounter.counter}')的更新。如果在第一个点击事件中删除this.counter[0].incrCounter()，则无法更新UI。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于上述问题，为了直接观察SubCounter中的属性，以便this.counter[0].setSubCounter(10)操作有效，可以利用下面的方法："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let nextId = 1;\n\n@Observed\nclass SubCounter {\n  public counter: number;\n\n  constructor(c: number) {\n    this.counter = c;\n  }\n}\n\n@Observed\nclass ParentCounter {\n  public id: number;\n  public counter: number;\n  public subCounter: SubCounter;\n\n  incrCounter() {\n    this.counter++;\n  }\n\n  incrSubCounter(c: number) {\n    this.subCounter.counter += c;\n  }\n\n  setSubCounter(c: number): void {\n    this.subCounter.counter = c;\n  }\n\n  constructor(c: number) {\n    this.id = nextId++;\n    this.counter = c;\n    this.subCounter = new SubCounter(c);\n  }\n}\n\n\n@Entry\n@Component\nstruct ParentComp {\n  @State counter: ParentCounter[] = [new ParentCounter(1), new ParentCounter(2), new ParentCounter(3)];\n  build() {\n    Row() {\n        CounterComp({ value: this.counter[0] }) // ParentComp组件传递 ParentCounter 给 CounterComp 组件\n    }\n  }\n}\n\n@Component\nstruct CounterComp {\n  @ObjectLink value: ParentCounter; // @ObjectLink 接收 ParentCounter\n  build() {\n      // CounterChild 是 CounterComp 的子组件，CounterComp 传递 this.value.subCounter 给 CounterChild 组件\n      CounterChild({ subValue: this.value.subCounter })\n  }\n}\n\n@Component\nstruct CounterChild {\n  @ObjectLink subValue: SubCounter; // @ObjectLink 接收 SubCounter\n  build() {\n    Text(`${this.subValue.counter}`)\n      .onClick(() => {\n        this.subValue.counter += 1;\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该方法使得@ObjectLink分别代理了ParentCounter和SubCounter的属性，这样对于这两个类的属性的变化都可以观察到，即都会对UI视图进行刷新。即使删除了上面所说的this.counter[0].incrCounter()，UI也会进行正确的刷新。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该方法可用于实现“两个层级”的观察，即外部对象和内部嵌套对象的观察。但是该方法只能用于@ObjectLink装饰器，无法作用于@Prop（@Prop通过深拷贝传入对象）。详情参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#prop%E4%B8%8Eobjectlink%E7%9A%84%E5%B7%AE%E5%BC%82",
        children: "@Prop与@ObjectLink的差异"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let nextId = 1;\n\n@Observed\nclass SubCounter {\n  public counter: number;\n\n  constructor(c: number) {\n    this.counter = c;\n  }\n}\n\n@Observed\nclass ParentCounter {\n  public id: number;\n  public counter: number;\n  public subCounter: SubCounter;\n\n  incrCounter() {\n    this.counter++;\n  }\n\n  incrSubCounter(c: number) {\n    this.subCounter.counter += c;\n  }\n\n  setSubCounter(c: number): void {\n    this.subCounter.counter = c;\n  }\n\n  constructor(c: number) {\n    this.id = nextId++;\n    this.counter = c;\n    this.subCounter = new SubCounter(c);\n  }\n}\n\n@Component\nstruct CounterComp {\n  @ObjectLink value: ParentCounter;\n\n  build() {\n    Column({ space: 10 }) {\n      Text(`${this.value.counter}`)\n        .fontSize(25)\n        .onClick(() => {\n          this.value.incrCounter();\n        })\n      CounterChild({ subValue: this.value.subCounter })\n      Divider().height(2)\n    }\n  }\n}\n\n@Component\nstruct CounterChild {\n  @ObjectLink subValue: SubCounter;\n\n  build() {\n    Text(`${this.subValue.counter}`)\n      .onClick(() => {\n        this.subValue.counter += 1;\n      })\n  }\n}\n\n@Entry\n@Component\nstruct ParentComp {\n  @State counter: ParentCounter[] = [new ParentCounter(1), new ParentCounter(2), new ParentCounter(3)];\n\n  build() {\n    Row() {\n      Column() {\n        CounterComp({ value: this.counter[0] })\n        CounterComp({ value: this.counter[1] })\n        CounterComp({ value: this.counter[2] })\n        Divider().height(5)\n        ForEach(this.counter,\n          (item: ParentCounter) => {\n            CounterComp({ value: item })\n          },\n          (item: ParentCounter) => item.id.toString()\n        )\n        Divider().height(5)\n        Text('Parent: reset entire counter')\n          .fontSize(20).height(50)\n          .onClick(() => {\n            this.counter = [new ParentCounter(1), new ParentCounter(2), new ParentCounter(3)];\n          })\n        Text('Parent: incr counter[0].counter')\n          .fontSize(20).height(50)\n          .onClick(() => {\n            this.counter[0].incrCounter();\n            this.counter[0].incrSubCounter(10);\n          })\n        Text('Parent: set.counter to 10')\n          .fontSize(20).height(50)\n          .onClick(() => {\n            this.counter[0].setSubCounter(10);\n          })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prop与objectlink的差异",
      children: "@Prop与@ObjectLink的差异"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Prop和@ObjectLink都可以接收@Observed装饰的类对象实例。@Prop对对象进行深拷贝，修改深拷贝后的对象不会影响原对象及其关联的组件。@ObjectLink获取对象的引用，修改引用对象会影响原对象及其关联的组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的例子中，UserChild组件同时使用@Prop与@ObjectLink接收了来自父组件的@Observed装饰的类对象实例作为数据源。对该数据源对象的修改将同时影响@Prop与@ObjectLink装饰的变量。依次点击change @ObjectLink value按钮和change @Prop value按钮可以观察到："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "修改@ObjectLink装饰的对象内容将影响数据源对象，并重新同步给@Prop，因此两个Text组件都将刷新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "修改@Prop装饰的对象内容仅影响使用该对象的Text2组件，不会影响数据源对象。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let nextId = 0;\n\n@Observed\nclass User {\n  public id: number;\n\n  constructor() {\n    this.id = nextId++;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State users: User[] = [new User(), new User(), new User()];\n\n  build() {\n    Column() {\n      UserChild({ firstUserByObjectLink: this.users[0], firstUserByProp: this.users[0] })\n    }\n  }\n}\n\n@Component\nstruct UserChild {\n  @ObjectLink firstUserByObjectLink: User;\n  @Prop firstUserByProp: User;\n\n  build() {\n    Column() {\n      // 比较结果为false说明@Prop经过深拷贝后得到的对象与原对象已不是同一个对象\n      Text(`firstUserByObjectLink equals firstUserByProp? : ${this.firstUserByObjectLink === this.firstUserByProp}`)\n      Text(`UserChild firstUserByObjectLink.id: ${this.firstUserByObjectLink.id}`) // Text1\n      Text(`UserChild firstUserByProp.id: ${this.firstUserByProp.id}`) // Text2\n      Button('change @ObjectLink value')\n        .onClick(() => {\n          this.firstUserByObjectLink.id++;\n        })\n      Button('change @Prop value')\n        .onClick(() => {\n          this.firstUserByProp.id++;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上面的示例关系如图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(602489)/* ["default"] */.A) + "",
        width: "770",
        height: "424"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在observed装饰类的构造函数中延时更改成员变量",
      children: "在@Observed装饰类的构造函数中延时更改成员变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在状态管理中，使用@Observed装饰类后，会给该类使用一层“代理”进行包装。当在组件中改变该类的成员变量时，会被该代理进行拦截，在更改数据源中值的同时，也会将变化通知给绑定的组件，从而实现观测变化与触发刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当开发者在类的构造函数中对成员变量进行赋值或者修改时，此修改不会经过代理（因为是直接对数据源中的值进行修改），也就无法被观测到。所以，如果开发者在类的构造函数中使用定时器修改类中的成员变量，即使该修改成功执行了，也不会触发UI的刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Observed\nclass RenderClass {\n  waitToRender: boolean = false;\n\n  constructor() {\n    setTimeout(() => {\n      this.waitToRender = true;\n      console.info('更改waitToRender的值为：' + this.waitToRender);\n    }, 1000)\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State @Watch('renderClassChange') renderClass: RenderClass = new RenderClass();\n  @State textColor: Color = Color.Black;\n\n  renderClassChange() {\n    console.info('renderClass的值被更改为：' + this.renderClass.waitToRender);\n  }\n\n  build() {\n    Row() {\n      Column() {\n        Text('renderClass的值为：' + this.renderClass.waitToRender)\n          .fontSize(20)\n          .fontColor(this.textColor)\n        Button('Show')\n          .onClick(() => {\n            // 使用其他状态变量强行刷新UI的做法并不推荐，此处仅用来检测waitToRender的值是否更新\n            this.textColor = Color.Red;\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上文的示例代码中在RenderClass的构造函数中使用定时器在1秒后修改了waitToRender的值，但是不会触发UI的刷新。此时，点击按钮强行刷新Text组件，可以看到waitToRender的值已经被修改成了true。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0001;\nconst TAG = 'ArkTSObservedAndObjectlink';\n\n@Observed\nclass RenderClass {\n  public waitToRender: boolean = false;\n\n  constructor() {\n  }\n}\n\n@Entry\n@Component\nstruct DelayedChangeIndex {\n  @State @Watch('renderClassChange') renderClass: RenderClass = new RenderClass();\n\n  renderClassChange() {\n    hilog.info(DOMAIN, TAG, `The value of renderClass is changed to: ${this.renderClass.waitToRender}`);\n  }\n\n  onPageShow() {\n    setTimeout(() => {\n      this.renderClass.waitToRender = true;\n    }, 1000);\n  }\n\n  build() {\n    Row() {\n      Column() {\n        Text(`The value of renderClass is: ${this.renderClass.waitToRender}`)\n          .fontSize(20)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["上文的示例代码将定时器修改移入到组件内，此时界面显示时会先显示“The value of renderClass is：false”。待定时器触发时，renderClass的值改变，触发", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-watch",
        children: "@Watch"
      }), "回调，此时界面刷新显示“The value of renderClass is：true”，日志输出“The value of renderClass is changed to：true”。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因此，更推荐开发者在组件中对@Observed装饰的类成员变量进行修改，以实现刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "objectlink数据源更新时机",
      children: "@ObjectLink数据源更新时机"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0001;\nconst TAG = 'ArkTSObservedAndObjectlink';\n\n@Observed\nclass Person {\n  public name: string = '';\n  public age: number = 0;\n\n  constructor(name: string, age: number) {\n    this.name = name;\n    this.age = age;\n  }\n}\n\n@Observed\nclass Info {\n  public person: Person;\n\n  constructor(person: Person) {\n    this.person = person;\n  }\n}\n\n@Entry\n@Component\nstruct Parent {\n  @State @Watch('onChange01') info: Info =\n    new Info(\n      new Person('Bob', 10)\n    );\n\n  onChange01() {\n    hilog.info(DOMAIN, TAG, `:::onChange01: + ${this.info.person.name}`); // 2\n  }\n\n  build() {\n    Column() {\n      Text(this.info.person.name).height(40)\n      Child({\n        per: this.info.person, clickEvent: () => {\n          hilog.info(DOMAIN, TAG, `:::clickEvent before ${this.info.person.name}`); // 1\n          this.info.person = new Person('Jack', 12);\n          hilog.info(DOMAIN, TAG, `:::clickEvent after ${this.info.person.name}`); // 3\n        }\n      })\n    }\n  }\n}\n\n@Component\nstruct Child {\n  @ObjectLink @Watch('onChange02') per: Person;\n  clickEvent?: () => void;\n\n  onChange02() {\n    hilog.info(DOMAIN, TAG, `:::onChange02:${this.per.name}`); // 5\n  }\n\n  build() {\n    Column() {\n      Button(this.per.name)\n        .height(40)\n        .onClick(() => {\n          this.onClickType();\n        })\n    }\n  }\n\n  private onClickType() {\n    if (this.clickEvent) {\n      this.clickEvent();\n    }\n    hilog.info(DOMAIN, TAG, `:::--------this.per.name in Child is still: ${this.per.name}`); // 4\n  };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@ObjectLink的数据源更新依赖其父组件，当父组件中数据源改变引起父组件刷新时，会重新设置子组件@ObjectLink的数据源。这个过程不是在父组件数据源变化后立刻发生的，而是在父组件实际刷新时才会进行。上述示例中，Parent包含Child，Parent传递箭头函数给Child，在点击时，日志打印顺序是1-2-3-4-5，打印到日志4时，点击事件流程结束，此时仅仅是将子组件Child标记为需要父组件更新的节点，因此日志4打印的this.per.name的值仍为Bob，等到父组件真正更新时，才会更新Child的数据源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当@ObjectLink @Watch('onChange02') per: Person的@Watch函数执行时，说明@ObjectLink的数据源已被父组件更新，此时日志5打印的值为更新后的Jack。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "日志的含义为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "日志1：对Parent @State @Watch('onChange01') info: Info = new Info(new Person('Bob', 10)) 赋值前。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "日志2：对Parent @State @Watch('onChange01') info: Info = new Info(new Person('Bob', 10)) 赋值，执行其@Watch函数，同步执行。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "日志3：对Parent @State @Watch('onChange01') info: Info = new Info(new Person('Bob', 10)) 赋值完成。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "日志4：onClickType方法内clickEvent执行完，此时只是将子组件Child标记为需要父组件更新的节点，未将最新的值更新给Child @ObjectLink @Watch('onChange02') per: Person，所以日志4打印的this.per.name的值仍然是Bob。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "日志5：下一次vsync信号触发Child更新，@ObjectLink @Watch('onChange02') per: Person被更新，触发其@Watch方法，此时@ObjectLink @Watch('onChange02') per: Person为新值Jack。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Prop父子同步原理与@ObjectLink一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当clickEvent中更改this.info.person.name时，修改会立刻生效，此时日志4打印的值是Jack。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Child({\n  per: this.info.person, clickEvent: () => {\n    hilog.info(DOMAIN, TAG, `:::clickEvent before ${this.info.person.name}`); // 1\n    this.info.person.name = 'Jack';\n    hilog.info(DOMAIN, TAG, `:::clickEvent after ${this.info.person.name}`); // 3\n  }\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此时Parent中Text组件不会刷新，因为this.info.person.name属于两层嵌套。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "observed装饰的类在构造函数中使用this赋值属性不触发ui更新",
      children: "@Observed装饰的类，在构造函数中使用this赋值属性，不触发UI更新"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Observed类的构造函数中对成员变量进行赋值或者修改时，此修改不会经过代理，无法被观测到。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Observed\nclass DataDownloader {\n  state: number;\n  constructor() {\n    this.state = 0;\n    setInterval(() => {\n      // 从构造函数修改成员变量，不触发UI更新\n      this.state += 1;\n    }, 2000);\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State dataDownloader: DataDownloader = new DataDownloader();\n  build() {\n    Column() {\n      Text(`Download state is ${this.dataDownloader.state}`)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Observed\nclass DataDownloader {\n  public state: number;\n\n  constructor() {\n    this.state = 0;\n  }\n\n  startIntervalUpdate() {\n    setInterval(() => {\n      this.state += 1;\n    }, 2000);\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State dataDownloader: DataDownloader = new DataDownloader();\n\n  aboutToAppear() {\n    this.dataDownloader.startIntervalUpdate(); // @Observed装饰的类构建后再修改属性可以触发更新UI\n  }\n\n  build() {\n    Column() {\n      Text(`Download state is ${this.dataDownloader.state}`)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(777743)/* ["default"] */.A) + "",
        width: "575",
        height: "123"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lazyforeach和objectlink一起使用时替换数组数据后ui不刷新",
      children: "LazyForEach和@ObjectLink一起使用时，替换数组数据后UI不刷新"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@Observed装饰的类的数组，用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "LazyForEach"
      }), "展开显示的时候，可能会出现替换数组数据后，修改数组数据不刷新UI的问题。改变数组数据后，需要调用onDataChange通知LazyForEach组件重新绑定状态变量，否则就会出现上述问题。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// LazyForEach遍历数据基类\nclass BasicDataSource implements IDataSource {\n  private listeners: DataChangeListener[] = [];\n  private originDataArray: StringData[] = [];\n\n  public totalCount(): number {\n    return this.originDataArray.length;\n  }\n\n  public getData(index: number): StringData {\n    return this.originDataArray[index];\n  }\n\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      console.info('add listener');\n      this.listeners.push(listener);\n    }\n  }\n\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      console.info('remove listener');\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n    });\n  }\n}\n\n// LazyForEach遍历数据类型\nclass MyDataSource extends BasicDataSource {\n  public dataArray: StringData[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): StringData {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: StringData): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\n@Observed\nclass StringData {\n  message: string;\n\n  constructor(message: string) {\n    this.message = message;\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent {\n  private data: MyDataSource = new MyDataSource();\n  helloCount: number = 4;\n\n  aboutToAppear() {\n    for (let i = 0; i <= 3; i++) {\n      this.data.pushData(new StringData(`Hello ${i}`));\n    }\n  }\n\n  build() {\n    Column() {\n      List({ space: 3 }) {\n        // 使用LazyForEach懒加载遍历数据\n        LazyForEach(this.data, (item: StringData, index: number) => {\n          ListItem() {\n            ChildComponent({ data: item })\n          }\n        }, (item: StringData, index: number) => index.toString() + item.message)\n      }.cachedCount(3)\n      Button('替换第一个元素')\n        .onClick(() => {\n          // 替换数组元素不刷新UI，此时新替换的值还未绑定到LazyForEach组件上。\n          this.data.dataArray[0] = new StringData('Hello ' + this.helloCount++)\n        })\n      Button('修改第一个元素的数据')\n        .onClick(() => {\n          // 替换数组元素后修改元素值也不会刷新UI。\n          this.data.dataArray[0].message += '1';\n        })\n    }\n  }\n}\n\n// 使用@Reusable实现组件复用\n@Reusable\n@Component\nstruct ChildComponent {\n  // 使用@ObjectLink接收@Observed装饰的类的数据\n  @ObjectLink data: StringData;\n\n  aboutToAppear(): void {\n    console.info(`aboutToAppear: ${this.data.message}`);\n  }\n\n  aboutToRecycle(): void {\n    console.info(`aboutToRecycle: ${this.data.message}`);\n  }\n\n  // 对复用的组件进行数据更新\n  aboutToReuse(params: Record<string, ESObject>): void {\n    this.data.message = (params.data as StringData).message;\n    console.info(`aboutToReuse: ${this.data.message}`);\n  }\n\n  build() {\n    Row() {\n      Text(this.data.message)\n        .fontSize(50)\n        .onAppear(() => {\n          console.info(`appear: ${this.data.message}`);\n        })\n    }.margin({ left: 10, right: 10 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// LazyForEach遍历数据基类\nclass BasicDataSource implements IDataSource {\n  private listeners: DataChangeListener[] = [];\n  private originDataArray: StringData[] = [];\n\n  public totalCount(): number {\n    return this.originDataArray.length;\n  }\n\n  public getData(index: number): StringData {\n    return this.originDataArray[index];\n  }\n\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      console.info('add listener');\n      this.listeners.push(listener);\n    }\n  }\n\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      console.info('remove listener');\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n    });\n  }\n\n  // 通知LazyForEach处理数据替换\n  notifyDataChanged(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataChange(index);\n    })\n  }\n}\n\n// LazyForEach遍历数据类型\nclass MyDataSource extends BasicDataSource {\n  public dataArray: StringData[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): StringData {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: StringData): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\n@Observed\nclass StringData {\n  public message: string;\n\n  constructor(message: string) {\n    this.message = message;\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent {\n  private data: MyDataSource = new MyDataSource();\n  helloCount: number = 4;\n\n  aboutToAppear() {\n    for (let i = 0; i <= 2; i++) {\n      this.data.pushData(new StringData(`Hello ${i}`));\n    }\n  }\n\n  build() {\n    Column({ space: 3 }) {\n      List({ space: 3 }) {\n        // 使用LazyForEach懒加载遍历数据\n        LazyForEach(this.data, (item: StringData, index: number) => {\n          ListItem() {\n            ChildComponent({ data: item })\n          }.width('100%')\n          // LazyForEach的key从index和message构建，每次替换元素时，需要修改key才能触发UI刷新。\n        }, (item: StringData, index: number) => index.toString() + item.message)\n      }.cachedCount(3)\n      Button('替换第一个元素')\n        .onClick(() => {\n          this.data.dataArray[0] = new StringData('Hello ' + this.helloCount++);\n          // 替换元素后通知LazyForEach，可以刷新UI。\n          this.data.notifyDataChanged(0);\n        })\n      Button('修改第一个元素的数据')\n        .onClick(() => {\n          // 替换元素后由于重新建立绑定，后续修改元素值也能刷新UI。\n          this.data.dataArray[0].message += '1';\n        })\n    }\n    .width('100%')\n    .alignItems(HorizontalAlign.Center)\n  }\n}\n\n// 使用Reusable使能组件复用\n@Reusable\n@Component\nstruct ChildComponent {\n  // 使用@ObjectLink接受@Observed类数据\n  @ObjectLink data: StringData;\n\n  aboutToAppear(): void {\n    console.info(`aboutToAppear: ${this.data.message}`);\n  }\n\n  aboutToRecycle(): void {\n    console.info(`aboutToRecycle: ${this.data.message}`);\n  }\n\n  // 对复用的组件进行数据更新\n  aboutToReuse(params: Record<string, ESObject>): void {\n    this.data.message = (params.data as StringData).message;\n    console.info(`aboutToReuse: ${this.data.message}`);\n  }\n\n  build() {\n    Row() {\n      Text(this.data.message)\n        .fontSize(50)\n        .onAppear(() => {\n          console.info(`appear: ${this.data.message}`);\n        })\n    }.margin({ left: 10, right: 10 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(688021)/* ["default"] */.A) + "",
        width: "300",
        height: "223"
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
371862(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477607-fc57a728ca75dd3e87a04da6142ab789.gif");

},
557886(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
59508(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437651-53483692bd19a4d4f31f8826d73a6edd.gif");

},
759777(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
777743(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957608-81542bf6cff65f8a657484e84b79e525.gif");

},
756461(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
745781(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957606-fe95ddfee94eef9816680d42b6330706.gif");

},
340581(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797958-296c72ca9d59803fbc240069958f267a.gif");

},
337142(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957604-48b7753b06d112bf35b5441af20ac4ff.png");

},
315537(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
210403(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
602489(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437653-9e23cb61f990944341047e12769ce2e9.jpg");

},
645875(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477605-5dfd0e473dfa3f48d4d66b0a3c501df2.gif");

},
710282(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797956-742eee4fcc13a6cb1266de9419236175.gif");

},
688021(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477609-cf7f80ad439bd62800797932f94c365d.gif");

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