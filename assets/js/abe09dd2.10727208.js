"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["747761"], {
906521(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_1_arkts_v_1_component_state_management_arkts_provide_and_consume_arkts_provide_and_consume_md_abe_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-v-1-arkts-v-1-component-state-management-arkts-provide-and-consume-arkts-provide-and-consume-md-abe.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_1_arkts_v_1_component_state_management_arkts_provide_and_consume_arkts_provide_and_consume_md_abe_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume/arkts-provide-and-consume","title":"@Provide装饰器和@Consume装饰器：与后代组件双向同步","description":"@Provide和@Consume，应用于与后代组件的双向数据同步、状态数据在多个层级之间传递的场景。不同于上文提到的父子组件之间通过命名参数机制传递，@Provide和@Consume摆脱参数传递机制的束缚，实现跨层级传递。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume/arkts-provide-and-consume.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"@Provide装饰器和@Consume装饰器：与后代组件双向同步","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-provide-and-consume","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"@Link装饰器：父子双向同步","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link/"},"next":{"title":"@Observed装饰器和@ObjectLink装饰器：嵌套类对象属性变化","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume/arkts-provide-and-consume.md


const frontMatter = {
	title: '@Provide装饰器和@Consume装饰器：与后代组件双向同步',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-provide-and-consume',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '@Provide装饰器和@Consume装饰器：与后代组件双向同步';

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
  "value": "@Provide变量与@Consume变量建立双向绑定",
  "id": "provide变量与consume变量建立双向绑定",
  "level": 3
}, {
  "value": "装饰Array类型变量",
  "id": "装饰array类型变量",
  "level": 3
}, {
  "value": "装饰Map类型变量",
  "id": "装饰map类型变量",
  "level": 3
}, {
  "value": "装饰Set类型变量",
  "id": "装饰set类型变量",
  "level": 3
}, {
  "value": "装饰Date类型变量",
  "id": "装饰date类型变量",
  "level": 3
}, {
  "value": "Provide和Consume支持联合类型实例",
  "id": "provide和consume支持联合类型实例",
  "level": 3
}, {
  "value": "@Provide支持allowOverride参数",
  "id": "provide支持allowoverride参数",
  "level": 3
}, {
  "value": "@Consume装饰的变量支持设置默认值",
  "id": "consume装饰的变量支持设置默认值",
  "level": 3
}, {
  "value": "@Consume在跨BuilderNode场景下和@Provide建立双向同步",
  "id": "consume在跨buildernode场景下和provide建立双向同步",
  "level": 3
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "@BuilderParam尾随闭包情况下@Provide未定义错误",
  "id": "builderparam尾随闭包情况下provide未定义错误",
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
        id: "provide装饰器和consume装饰器与后代组件双向同步",
        children: "@Provide装饰器和@Consume装饰器：与后代组件双向同步"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Provide和@Consume，应用于与后代组件的双向数据同步、状态数据在多个层级之间传递的场景。不同于上文提到的父子组件之间通过命名参数机制传递，@Provide和@Consume摆脱参数传递机制的束缚，实现跨层级传递。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中@Provide装饰的变量是在祖先组件中，可以理解为被“提供”给后代的状态变量。@Consume装饰的变量是在后代组件中，去“消费（绑定）”祖先组件提供的变量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@Provide/@Consume是跨组件层级的双向同步。在阅读@Provide和@Consume文档前，建议开发者对UI范式基本语法和自定义组件有基本的了解。建议提前阅读：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-basic-syntax-overview",
        children: "基本语法概述"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-declarative-ui-description",
        children: "声明式UI描述"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components",
        children: "创建自定义组件"
      }), "。最佳实践请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-status-management",
        children: "状态管理最佳实践"
      }), "。常见问题请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state-management-faq",
        children: "状态管理常见问题"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(192944)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 9开始，这两个装饰器支持在ArkTS卡片中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始，这两个装饰器支持在元服务中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API version 19及以前，@Provide和@Consume双向同步仅支持声明式节点场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，@Consume装饰的变量支持设置默认值。当查找不到@Provide的匹配结果时，@Consume装饰的变量会使用默认值进行初始化；当查找到@Provide的匹配结果时，@Consume装饰的变量会优先使用@Provide匹配结果的值，默认值不生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode",
        children: "BuilderNode"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#buildoptions12",
        children: "BuildOptions"
      }), "参数enableProvideConsumeCrossing为true，使得@Provide和@Consume支持跨", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode",
        children: "BuilderNode"
      }), "双向同步。但需要注意，BuilderNode会在上树前构造节点，所以BuilderNode内部定义的@Consume需要设置默认值，并在BuilderNode上树后，重新获取最近的@Provide数据，与之建立双向同步关系。具体可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#consume%E5%9C%A8%E8%B7%A8buildernode%E5%9C%BA%E6%99%AF%E4%B8%8B%E5%92%8Cprovide%E5%BB%BA%E7%AB%8B%E5%8F%8C%E5%90%91%E5%90%8C%E6%AD%A5",
        children: "@Consume在跨BuilderNode场景下和@Provide建立双向同步"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Provide/@Consume装饰的状态变量有以下特性："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Provide装饰的状态变量自动对其所有后代组件可用，开发者不需要多次在组件之间传递变量。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["后代通过使用@Consume获取@Provide提供的变量，建立在@Provide和@Consume之间的双向数据同步，与", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
          children: "@State"
        }), "/", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
          children: "@Link"
        }), "不同的是，前者可以更便捷的在多层级父子组件之间传递。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Provide和@Consume通过变量名或者变量别名绑定，需要类型相同，否则会发生类型隐式转换，从而导致应用行为异常。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 通过相同的变量名绑定\n@Provide age: number = 0;\n@Consume age: number;\n   \n// 通过相同的变量别名绑定\n@Provide('a') id: number = 0;\n@Consume('a') age: number;\n   \n// 通过Provide的变量别名和Consume的变量名相同绑定\n@Provide('a') id: number = 0;\n@Consume a: number;\n   \n// 通过Provide的变量名和Consume的变量别名绑定\n@Provide id: number = 0;\n@Consume('id') a: number;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当@Provide指定变量别名时，会同时保存变量名与变量别名，@Consume在查找时，会优先以变量别名作为查找值去匹配，如果没有别名则用变量名作为查找值，只要@Consume提供的查找值与@Provide保存的变量名或别名中任意一项一致，即可成功建立绑定关系。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "装饰器说明",
      children: "装饰器说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "@Provide变量装饰器"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰器参数"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["别名：常量字符串，可选。  如果指定了别名，则通过别名来绑定变量；如果未指定别名，则通过变量名绑定变量。  allowOverride：允许重写，string类型，可选。  如果使用allowOverride指定别名，则别名可以被重写，即可以存在同名的@Provide变量。  未使用allowOverride时则不允许重名。示例见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#provide%E6%94%AF%E6%8C%81allowoverride%E5%8F%82%E6%95%B0",
              children: "@Provide支持allowOverride参数"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "允许装饰的变量类型"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Object、class、string、number、boolean、enum类型，以及这些类型的数组。  API version 10开始支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%A3%85%E9%A5%B0date%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
              children: "Date类型"
            }), "。  API version 11及以上支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%A3%85%E9%A5%B0map%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
              children: "Map"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%A3%85%E9%A5%B0set%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
              children: "Set"
            }), "类型、undefined和null类型、ArkUI框架定义的联合类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            }), "类型以及这些类型的联合类型，示例见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#provide%E5%92%8Cconsume%E6%94%AF%E6%8C%81%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B%E5%AE%9E%E4%BE%8B",
              children: "@Provide和Consume支持联合类型实例"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "不允许装饰的变量类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持装饰Function类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "初始化规则"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须定义本地默认值。  可以从父组件传入非undefined类型变量，此时使用该传入变量进行初始化。  父组件未传入或传入undefined类型变量时，使用本地默认值进行初始化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "同步规则"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "在子组件使用时："
              })
            }), "  不与父组件中的任何类型变量同步。  父组件传入的外部变量对@Provide初始化时，仅作为初始值，后续变量的变化不会同步至@Provide。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "在父组件使用时："
              })
            }), "  可以初始化子组件的常规变量、@State、@Link、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop",
              children: "@Prop"
            }), "、@Provide。  @Provide变量的变化会同步给子组件的@Link、@Prop变量。  与后代子组件中别名匹配的@Consume变量双同步。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " @Provide初始化规则图示"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(578736)/* ["default"] */.A) + "",
        width: "1883",
        height: "273"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "@Consume变量装饰器"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰器参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "别名：常量字符串，可选。  如果指定了别名，则通过别名来绑定变量；如果未指定别名，则通过变量名绑定变量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "允许装饰的变量类型"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Object、class、string、number、boolean、enum类型，以及这些类型的数组。  API version 10开始支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%A3%85%E9%A5%B0date%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
              children: "Date类型"
            }), "。  API version 11及以上支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%A3%85%E9%A5%B0map%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
              children: "Map"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%A3%85%E9%A5%B0set%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
              children: "Set"
            }), "类型、undefined和null类型、ArkUI框架定义的联合类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            }), "类型以及这些类型的联合类型，示例见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#provide%E5%92%8Cconsume%E6%94%AF%E6%8C%81%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B%E5%AE%9E%E4%BE%8B",
              children: "@Provide和Consume支持联合类型实例"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  API version 20之前，@Consume装饰的变量，在其父组件或者祖先组件上，必须有对应的属性和别名的@Provide装饰的变量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "不允许装饰的变量类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持装饰Function类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "初始化规则"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["API version 20之前，@Consume装饰的变量不支持本地设置默认值，必须要有与其匹配的@Provide装饰的变量。  从API version 20开始，@Consume支持设置默认值。若存在匹配成功的@Provide，则会使用@Provide的变量值作为初始值。若未匹配到@Provide变量，则使用本地默认值。示例见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#consume%E8%A3%85%E9%A5%B0%E7%9A%84%E5%8F%98%E9%87%8F%E6%94%AF%E6%8C%81%E8%AE%BE%E7%BD%AE%E9%BB%98%E8%AE%A4%E5%80%BC",
              children: "@Consume装饰的变量支持设置默认值"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "同步规则"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "在子组件使用时："
              })
            }), "  与祖先组件匹配的@Provide变量双向同步。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "在父组件使用时："
              })
            }), "  可以初始化子组件的常规变量、@State、@Link、@Prop、@Provide。  @Consume变量的变化会同步给子组件的@Link、@Prop变量。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " @Consume初始化规则图示"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(897232)/* ["default"] */.A) + "",
        width: "799",
        height: "232"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "观察变化和行为表现",
      children: "观察变化和行为表现"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "观察变化",
      children: "观察变化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当装饰的数据类型为boolean、string、number类型时，可以观察到数值的变化。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当装饰的数据类型为class或者Object的时候，可以观察到赋值和属性赋值的变化（属性为Object.keys(observedObject)返回的所有属性）。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当装饰Array时，可以观察到数组本身、数组项的赋值及其API操作带来的变化。详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%A3%85%E9%A5%B0array%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
          children: "装饰Array类型变量"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当装饰的对象是Date时，可以观察到Date整体的赋值，同时可通过调用Date的接口setFullYear, setMonth, setDate, setHours, setMinutes, setSeconds, setMilliseconds, setTime, setUTCFullYear, setUTCMonth, setUTCDate, setUTCHours, setUTCMinutes, setUTCSeconds, setUTCMilliseconds 更新Date的属性，详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%A3%85%E9%A5%B0date%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
          children: "装饰Date类型变量"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当装饰的变量是Map时，可以观察到Map整体的赋值，同时可通过调用Map的接口set, clear, delete 更新Map的值。详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%A3%85%E9%A5%B0map%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
          children: "装饰Map类型变量"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当装饰的变量是Set时，可以观察到Set整体的赋值，同时可通过调用Set的接口add, clear, delete 更新Set的值。详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%A3%85%E9%A5%B0set%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
          children: "装饰Set类型变量"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "框架行为",
      children: "框架行为"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始渲染："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "@Provide装饰的变量会以Map的形式，传递给当前@Provide所属组件的所有子组件。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "子组件中如果使用@Consume变量，则会在Map中查找是否有该变量名/alias（别名）对应的@Provide的变量。在API version 20之前，如果查找不到，框架会抛出JS ERROR。从API version 20开始，如果查找不到，会判断@Consume装饰的变量是否设置了默认值，如果没有设置默认值，框架会抛出JS ERROR。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在初始化@Consume变量时，如果在Map中有该变量名/alias（别名）对应的@Provide的变量，则和@State/@Link的流程类似，@Consume变量会在Map中查找到对应的@Provide变量进行保存，并把自己注册给@Provide。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "从API version 20开始，在初始化@Consume变量时，如果在Map中没有该变量名/alias（别名）对应的@Provide的变量，而@Consume的变量设置了默认值时，@Consume变量会利用默认值创建一个临时的数据源，保证通知链路的连续性。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当@Provide装饰的数据变化时："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过初始渲染的步骤可知，子组件@Consume已把自己注册给父组件。父组件@Provide变量变更后，会遍历更新所有依赖它的系统组件（elementid）和状态变量（@Consume）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通知@Consume更新后，子组件所有依赖@Consume的系统组件（elementId）都会被通知更新。以此实现@Provide对@Consume状态数据同步。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当@Consume装饰的数据变化时："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过初始渲染的步骤可知，子组件@Consume持有@Provide的实例。在@Consume更新后调用@Provide的更新方法，将更新的数值同步回@Provide，以此实现@Consume向@Provide的同步更新。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(831720)/* ["default"] */.A) + "",
        width: "1269",
        height: "717"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制条件",
      children: "限制条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Provide/@Consume的参数key必须为string类型，否则编译时会报错。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 错误写法，编译报错\nlet change: number = 10;\n@Provide(change) message: string = 'Hello';\n\n// 正确写法\nlet change: string = 'change';\n@Provide(change) message: string = 'Hello';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Consume装饰的变量不能在构造参数中传入初始化，否则编译时会报错。@Consume仅能通过key来匹配对应的@Provide变量或者从API version 20开始设置默认值进行初始化。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "【反例】"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Component\nstruct Child {\n  @Consume msg: string;\n\n  build() {\n    Text(this.msg)\n  }\n}\n\n@Entry\n@Component\nstruct Parent {\n  @Provide message: string = 'Hello';\n\n  build() {\n    Column() {\n      // 错误写法，不允许外部传入初始化\n      Child({msg: 'Hello'})\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "【正例】"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Component\nstruct Child {\n  @Consume num: number;\n  // 从API version 20开始，@Consume装饰的变量支持设置默认值\n  @Consume num1: number = 17;\n\n  build() {\n    Column() {\n      Text(`Value of num: ${this.num}`)\n      Text(`Value of num1: ${this.num1}`)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Parent {\n  @Provide num: number = 10;\n\n  build() {\n    Column() {\n      Text(`Value of num: ${this.num}`)\n      Child()\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["@Provide的key重复定义时，框架会抛出运行时错误，从API version 23开始，将返回错误码", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-statemanagement/errorcode-statemanagement#section140114-%E5%A3%B0%E6%98%8E%E9%87%8D%E5%A4%8Dkey%E7%9A%84provide",
            children: "140114"
          }), "，提醒开发者重复定义key。如果开发者需要重复key，可以使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "#provide%E6%94%AF%E6%8C%81allowoverride%E5%8F%82%E6%95%B0",
            children: "allowOverride"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 错误写法，a重复定义\n@Provide('a') count: number = 10;\n@Provide('a') num: number = 10;\n\n// 正确写法\n@Provide('a') count: number = 10;\n@Provide('b') num: number = 10;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在API version 20之前，初始化@Consume变量时，如果开发者没有定义对应key的@Provide变量，框架会抛出运行时错误，提示开发者初始化@Consume变量失败，原因是无法找到其对应key的@Provide变量。从API version 20开始，初始化@Consume变量时，如果开发者没有定义对应key的@Provide变量，同时没有设置默认值，框架会抛出运行时错误，从API version 23开始，将返回错误码", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-statemanagement/errorcode-statemanagement#section140112-consume%E7%BC%BA%E5%A4%B1%E5%AF%B9%E5%BA%94%E7%9A%84provide",
            children: "140112"
          }), "，提示开发者初始化@Consume变量失败，原因是无法找到其对应key的@Provide变量同时也没有设置默认值。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "【反例】"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Component\nstruct Child {\n  @Consume num: number;\n\n  build() {\n    Column() {\n      Text(`num的值: ${this.num}`)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Parent {\n  // 错误写法，缺少@Provide\n  num: number = 10;\n\n  build() {\n    Column() {\n      Text(`num的值: ${this.num}`)\n      Child()\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "【正例】"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Component\nstruct Child {\n  @Consume num: number;\n  // 正确写法 从API version 20开始，@Consume装饰的变量支持设置默认值\n  @Consume numWithDefaultValue: number = 6;\n\n  build() {\n    Column() {\n      Text(`Value of num: ${this.num}`)\n      Text(`Value of numWithDefaultValue: ${this.numWithDefaultValue}`)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Parent {\n  // 正确写法\n  @Provide num: number = 10;\n\n  build() {\n    Column() {\n      Text(`Value of num: ${this.num}`)\n      Child()\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Provide与@Consume不支持装饰Function类型的变量，API version 23之前，框架会抛出运行时错误。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从API version 23开始，添加对@Provide与@Consume装饰Function类型变量的校验，编译期会报错。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从API version 20开始，支持跨BuilderNode配对@Provide/@Consume。在BuilderNode上树时，@Consume通过key匹配找到最近的@Provide，两者类型需要一致，如果不一致，则会抛出运行时错误。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要注意类型不相等判断，包括类实例的判断，比如："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class A {}\nclass B {}\n// 两个message都为object类型，但其构造函数不同，属于不同类型\n@Provide message: A = new A();\n@Consume message: B = new B();\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在非BuilderNode场景中，仍建议配对的@Provide/@Consume类型一致。虽然在运行时不会有强校验，但在@Consume装饰的变量初始化时，会隐式转换成@Provide装饰变量的类型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { NodeController, BuilderNode, FrameNode, UIContext } from '@kit.ArkUI';\n\n@Builder\nfunction buildText() {\n  Column() {\n    Child()\n  }\n}\n\nclass TextNodeController extends NodeController {\n  private builderNode: BuilderNode<[]> | null = null;\n\n  constructor() {\n    super();\n  }\n\n  makeNode(context: UIContext): FrameNode | null {\n    this.builderNode = new BuilderNode(context);\n    // 配置跨BuilderNode支持@Provide/@Consume\n    this.builderNode.build(wrapBuilder(buildText), undefined,\n      { enableProvideConsumeCrossing: true });\n    // 将BuilderNode的根节点挂载到NodeContainer\n    return this.builderNode.getFrameNode();\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @Provide message: string = 'hello';\n  controller: TextNodeController = new TextNodeController();\n\n  build() {\n    Column() {\n      NodeContainer(this.controller)\n        .width('100%')\n        .height(100)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n\n\n@Component\nstruct Child {\n  // Child通过BuilderNode上树后，@Consume和Index中的@Provide建立连接时发现类型不一致，抛出运行时错误\n  @Consume message: number = 0;\n\n  build() {\n    Column() {\n      Text(`@Consume ${this.message}`)\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "父组件传入undefined时，@Provide装饰的变量仍使用本地默认值进行初始化。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Parent {\n  @State count: number | undefined = undefined;\n\n  build() {\n    Column() {\n      Text(`Parent count value: ${this.count}`)\n        .fontSize(20)\n        .margin(10)\n      Child({ count: this.count })\n    }\n  }\n}\n\n@Component\nstruct Child {\n  @Provide count: number | undefined = 0;\n\n  build() {\n    Column() {\n      Text(`Child count value: ${this.count}`)\n        .fontSize(20)\n        .margin(10)\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "provide变量与consume变量建立双向绑定",
      children: "@Provide变量与@Consume变量建立双向绑定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例是@Provide变量与后代组件中@Consume变量进行双向同步的场景。当分别点击ToDo和ToDoItem组件内的Button时，count的更改会双向同步在ToDo和ToDoItem中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct ToDoItem {\n  // @Consume装饰的变量通过相同的属性名绑定其祖先组件ToDo内的@Provide装饰的变量\n  @Consume count: number;\n\n  build() {\n    Column() {\n      Text(`count(${this.count})`)\n      Button(`count(${this.count}), count + 1`)\n        .onClick(() => this.count += 1)\n    }\n    .width('50%')\n  }\n}\n\n@Component\nstruct ToDoList {\n  build() {\n    Row({ space: 5 }) {\n      ToDoItem()\n      ToDoItem()\n    }\n  }\n}\n\n@Component\nstruct ToDoDemo {\n  build() {\n    ToDoList()\n  }\n}\n\n@Entry\n@Component\nstruct ToDo {\n  // @Provide装饰的变量count由入口组件ToDo提供其后代组件\n  @Provide count: number = 0;\n\n  build() {\n    Column() {\n      Button(`count(${this.count}), count + 1`)\n        .onClick(() => this.count += 1)\n      ToDoDemo()\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰array类型变量",
      children: "装饰Array类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例中，message类型为number[]，点击Button改变message的值，视图会随之刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  @Provide message: number[] = [0, 1, 2, 3];\n\n  build() {\n    Column() {\n      ForEach(this.message, (item: number) => {\n        Text(`Provide ${item}`)\n          .fontSize(20)\n          .margin(10)\n      })\n      // 新增数组元素，触发UI刷新\n      Button('Push element')\n        .onClick(() => {\n          this.message.push(4);\n        })\n        .width(300)\n        .margin(10)\n      // 删除数组元素，触发UI刷新\n      Button('Pop element')\n        .onClick(() => {\n          this.message.pop();\n        })\n        .width(300)\n        .margin(10)\n      Child()\n    }\n  }\n}\n\n@Component\nstruct Child {\n  @Consume message: number[] = [0, 1, 2, 3];\n\n  build() {\n    Row() {\n      Column() {\n        ForEach(this.message, (item: number) => {\n          Text(`Consume ${item}`)\n            .fontSize(20)\n            .margin(10)\n        })\n        // 对数组整体重新赋值，触发UI刷新\n        Button('Reset array')\n          .onClick(() => {\n            this.message = [9, 8, 7, 6];\n          })\n          .width(300)\n          .margin(10)\n        // 更新数组元素，触发UI刷新\n        Button('Modify element[0]')\n          .onClick(() => {\n            this.message[0] = 10;\n          })\n          .width(300)\n          .margin(10)\n      }\n      .width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰map类型变量",
      children: "装饰Map类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(959373)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始，@Provide，@Consume支持Map类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例中，message类型为Map<number, string>，点击Button改变message的值，视图会随之刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct Child {\n  @Consume message: Map<number, string>\n\n  build() {\n    Column() {\n      ForEach(Array.from(this.message.entries()), (item: [number, string]) => {\n        Text(`${item[0]}`)\n          .fontSize(30)\n        Text(`${item[1]}`)\n          .fontSize(30)\n        Divider()\n      })\n      Button('Consume init Map')\n        .onClick(() => {\n          this.message = new Map([[0, 'a'], [1, 'b'], [3, 'c']]);\n        })\n      Button('Consume set new one')\n        .onClick(() => {\n          this.message.set(4, 'd');\n        })\n      Button('Consume clear')\n        .onClick(() => {\n          this.message.clear();\n        })\n      Button('Consume replace the first item')\n        .onClick(() => {\n          this.message.set(0, 'aa');\n        })\n      Button('Consume delete the first item')\n        .onClick(() => {\n          this.message.delete(0);\n        })\n    }\n  }\n}\n\n\n@Entry\n@Component\nstruct MapSample {\n  @Provide message: Map<number, string> = new Map([[0, 'a'], [1, 'b'], [3, 'c']])\n\n  build() {\n    Row() {\n      Column() {\n        Button('Provide init Map')\n          .onClick(() => {\n            this.message = new Map([[0, 'a'], [1, 'b'], [3, 'c'], [4, 'd']]);\n          })\n        Child()\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰set类型变量",
      children: "装饰Set类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(872068)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始，@Provide，@Consume支持Set类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例中，message类型为Set<number>，点击Button改变message的值，视图会随之刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct Child {\n  @Consume message: Set<number>\n\n  build() {\n    Column() {\n      ForEach(Array.from(this.message.entries()), (item: [number, number]) => {\n        Text(`${item[0]}`)\n          .fontSize(30)\n        Divider()\n      })\n      Button('Consume init set')\n        .onClick(() => {\n          this.message = new Set([0, 1, 2, 3, 4]);\n        })\n      Button('Consume set new one')\n        .onClick(() => {\n          this.message.add(5);\n        })\n      Button('Consume clear')\n        .onClick(() => {\n          this.message.clear();\n        })\n      Button('Consume delete the first one')\n        .onClick(() => {\n          this.message.delete(0);\n        })\n    }\n    .width('100%')\n  }\n}\n\n\n@Entry\n@Component\nstruct SetSample {\n  @Provide message: Set<number> = new Set([0, 1, 2, 3, 4])\n\n  build() {\n    Row() {\n      Column() {\n        Button('Provide init set')\n          .onClick(() => {\n            this.message = new Set([0, 1, 2, 3, 4, 5]);\n          })\n        Child()\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰date类型变量",
      children: "装饰Date类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例中，selectedDate类型为Date，点击Button改变selectedDate的值，视图会随之刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct Child {\n  @Consume selectedDate: Date;\n\n  build() {\n    Column() {\n      Button(`child increase the day by 1`)\n        .onClick(() => {\n          this.selectedDate.setDate(this.selectedDate.getDate() + 1);\n        })\n      Button('child update the new date')\n        .margin(10)\n        .onClick(() => {\n          this.selectedDate = new Date('2023-09-09');\n        })\n      DatePicker({\n        start: new Date('1970-1-1'),\n        end: new Date('2100-1-1'),\n        selected: this.selectedDate\n      })\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Parent {\n  @Provide selectedDate: Date = new Date('2021-08-08')\n\n  build() {\n    Column() {\n      Button('parent increase the day by 1')\n        .margin(10)\n        .onClick(() => {\n          this.selectedDate.setDate(this.selectedDate.getDate() + 1);\n        })\n      Button('parent update the new date')\n        .margin(10)\n        .onClick(() => {\n          this.selectedDate = new Date('2023-07-07');\n        })\n      DatePicker({\n        start: new Date('1970-1-1'),\n        end: new Date('2100-1-1'),\n        selected: this.selectedDate\n      })\n      Child()\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "provide和consume支持联合类型实例",
      children: "Provide和Consume支持联合类型实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Provide和@Consume支持联合类型和undefined和null。以下示例中，count类型为string | undefined，当点击父组件Parent中的Button改变count的属性或者类型时，Child中也会对应刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct Child {\n  // @Consume装饰的变量通过相同的属性名绑定其祖先组件Ancestors内的@Provide装饰的变量\n  @Consume count: string | undefined;\n\n  build() {\n    Column() {\n      Text(`count(${this.count})`)\n      Button(`count(${this.count}), Child`)\n        .onClick(() => this.count = 'Ancestors')\n    }\n    .width('50%')\n  }\n}\n\n@Component\nstruct Parent {\n  build() {\n    Row({ space: 5 }) {\n      Child()\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Ancestors {\n  // @Provide装饰的联合类型count由入口组件Ancestors提供其后代组件\n  @Provide count: string | undefined = 'Child';\n\n  build() {\n    Column() {\n      Button(`count(${this.count}), Child`)\n        .onClick(() => this.count = undefined)\n      Parent()\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "provide支持allowoverride参数",
      children: "@Provide支持allowOverride参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "allowOverride：@Provide重写选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(945685)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始使用。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
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
            children: "allowOverride"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否允许@Provide重写。允许在同一组件树下通过allowOverride重写同名的@Provide。如果开发者未写allowOverride，定义同名的@Provide，运行时会报错。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct MyComponent {\n  @Provide({ allowOverride: 'reviewVotes' }) reviewVotes: number = 10;\n\n  build() {\n  }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完整示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct GrandSon {\n  // @Consume装饰的变量通过相同的属性名绑定其祖先内的@Provide装饰的变量\n  @Consume('reviewVotes') reviewVotes: number;\n\n  build() {\n    Column() {\n      Text(`reviewVotes(${this.reviewVotes})`) // Text显示10\n      Button(`reviewVotes(${this.reviewVotes}), give +1`)\n        .onClick(() => this.reviewVotes += 1)\n    }\n    .width('50%')\n  }\n}\n\n@Component\nstruct Child {\n  @Provide({ allowOverride: 'reviewVotes' }) reviewVotes: number = 10;\n\n  build() {\n    Row({ space: 5 }) {\n      GrandSon()\n    }\n  }\n}\n\n@Component\nstruct Parent {\n  @Provide({ allowOverride: 'reviewVotes' }) reviewVotes: number = 20;\n\n  build() {\n    Child()\n  }\n}\n\n@Entry\n@Component\nstruct GrandParent {\n  @Provide('reviewVotes') reviewVotes: number = 40;\n\n  build() {\n    Column() {\n      Button(`reviewVotes(${this.reviewVotes}), give +1`)\n        .onClick(() => this.reviewVotes += 1)\n      Parent()\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上面的示例中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GrandParent声明了@Provide('reviewVotes') reviewVotes: number = 40。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parent是GrandParent的子组件，声明@Provide为allowOverride，重写父组件GrandParent的@Provide('reviewVotes') reviewVotes: number = 40。如果不设置allowOverride，则会抛出运行时报错，提示@Provide重复定义。Child同理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GrandSon在初始化@Consume的时候，@Consume装饰的变量通过相同的属性名绑定其最近的祖先的@Provide装饰的变量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GrandSon查找到相同属性名的@Provide在祖先Child中，所以@Consume('reviewVotes') reviewVotes: number初始化数值为10。如果Child中没有定义与@Consume同名的@Provide，则继续向上寻找Parent中的同名@Provide值为20，以此类推。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果查找到根节点还没有找到key对应的@Provide，则会报初始化@Consume找不到@Provide的报错。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "consume装饰的变量支持设置默认值",
      children: "@Consume装饰的变量支持设置默认值"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(827465)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，@Consume装饰的变量支持设置默认值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct MyComponent {\n  @Consume('withDefault') defaultValue: number = 10;\n\n  build() {\n  }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完整示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Parent {\n  @Provide('firstKey') provideOne: string | undefined = undefined;\n  @Provide('secondKey') provideTwo: string = 'the second provider';\n\n  build() {\n    Column() {\n      Row() {\n        Column() {\n          Text(`${this.provideOne}`)\n          Text(`${this.provideTwo}`)\n        }\n\n        Column() {\n          // 点击change provideOne按钮，provideOne和子组件中的textOne属性会同时变化\n          Button('change provideOne')\n            .onClick(() => {\n              this.provideOne = undefined;\n            })\n          // 点击change provideTwo按钮，provideTwo和子组件中的textTwo属性会同时变化\n          Button('change provideTwo')\n            .onClick(() => {\n              this.provideTwo = 'the next provider';\n            })\n        }\n      }\n\n      Row() {\n        Column() {\n          Child()\n        }\n      }\n    }\n  }\n}\n\n@Component\nstruct Child {\n  // @Consume装饰的变量通过相同的别名绑定其祖先内的@Provide装饰的变量，同时设置默认值\n  @Consume('firstKey') textOne: string | undefined = 'child';\n  // @Consume装饰的变量通过相同的别名绑定其祖先内的@Provide装饰的变量，没有设置默认值\n  @Consume('secondKey') textTwo: string;\n  // @Consume装饰的变量在祖先内没有匹配成功的@Provide装饰的变量，但设置了默认值\n  @Consume('thirdKey') textThree: string = 'defaultValue';\n\n  build() {\n    Column() {\n      Text(`${this.textOne}`)\n      Text(`${this.textTwo}`)\n      Text(`${this.textThree}`)\n      // 点击change textOne按钮，textOne和父组件的provideOne会同时变化\n      Button('change textOne')\n        .onClick(() => {\n          this.textOne = 'not undefined';\n        })\n      // 点击change textTwo按钮，textTwo和父组件的provideTwo会同时变化\n      Button('change textTwo')\n        .onClick(() => {\n          this.textTwo = 'change textTwo';\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上面的示例中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parent声明了@Provide('firstKey') provideOne: string | undefined = undefined 与 @Provide('secondKey') provideTwo: string = 'the second provider'。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Child声明了@Consume('firstKey') textOne: string | undefined = 'child'，@Consume('secondKey') textTwo: string 与 @Consume('thirdKey') textThree: string = 'defaultValue'。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Child是Parent的子组件，Child在初始化@Consume装饰的三个属性时，textOne根据'firstKey'别名绑定Parent中的provideOne属性，provideOne的值会覆盖textOne的默认值，所以textOne初始化的值为undefined；textTwo根据'secondKey'别名绑定Parent中的providedTwo属性，textTwo初始化的值为'the second provider'；textThree在祖先组件中不存在匹配结果，如果@Consume没有设置默认值，则会抛出运行时错误，示例中textThree有默认值'defaultValue'，所以textThree初始化的值为'defaultValue'。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Consume装饰的属性设置的默认值仅在祖先组件没有匹配结果时才生效，有匹配结果时无影响。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "consume在跨buildernode场景下和provide建立双向同步",
      children: "@Consume在跨BuilderNode场景下和@Provide建立双向同步"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(129591)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，支持跨BuilderNode配对@Provide/@Consume。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BuilderNode支持@Provide/@Consume，需注意："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在BuilderNode子树中定义的@Consume需要设置默认值，或者在子树中已存在配对的@Provide，否则会发生运行时报错。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BuilderNode上树后，设置默认值的@Consume会向上查找@Provide，根据key的匹配规则找到最近的@Provide后，会和@Provide建立双向同步关系。如果找不到配对的@Provide，则@Consume仍使用默认值。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["建立双向同步的关系后，如果@Provide装饰变量的值和@Consume的默认值不同，则会回调@Consume的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-watch",
          children: "@Watch"
        }), "方法，以及与@Consume有同步关系的变量的@Watch方法，例如@Consume通知与其双向同步的@Link触发@Watch方法。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BuilderNode下树后，@Consume会再次试图查找对应的@Provide，如果发现下树后无法再找到之前配对的@Provide，则断开和@Provide的双向同步关系，@Consume装饰的变量恢复成默认值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Consume断开和@Provide的连接，恢复成默认值时，会判断@Consume装饰变量的值从和@Provide变为@Consume的默认值是否有变化，如果有变化，则会回调@Consume以及与其有同步关系变量的@Watch方法。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的例子中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["点击add Child:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "构建BuilderNode下的子节点Child，Child中@Consume未找到@Provide，使用本地默认值default value初始化。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "BuilderNode上树时，Child中@Consume向上找到最近的Index中的@Provide，将@Consume从默认值更新为@Provide的值，并回调@Consume的@Watch方法。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["@Provide和@Consume配对后，建立双向同步关系。点击Text(", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Provide: ${this.message}"
        }), ")和Text(", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Consume ${this.message}"
        }), ")，@Provide和@Consume绑定的Text组件刷新，并回调@Provide和@Consume的@Watch方法。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击remove Child, BuilderNode子节点下树，Child中的@Consume和Index中的@Provide断开连接，Child中的@Consume恢复成默认值，并回调@Consume的@Watch方法。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["点击dispose Child，释放BuilderNode下子节点，BuilderNode子节点Child销毁，执行", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttodisappear",
          children: "aboutToDisappear"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, BuilderNode, FrameNode, UIContext } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\n@Builder\nfunction buildText() {\n  Column() {\n    Child()\n  }\n}\n\nclass TextNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private uiContext: UIContext | null = null;\n  private builderNode: BuilderNode<[]> | null = null;\n\n  constructor() {\n    super();\n  }\n\n  makeNode(context: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(context);\n    this.uiContext = context;\n    // 将rootNode节点挂载在NodeContainer下\n    return this.rootNode;\n  }\n\n  addBuilderNode(): void {\n    if (this.builderNode === null && this.uiContext && this.rootNode) {\n      this.builderNode = new BuilderNode(this.uiContext);\n      // 配置跨BuilderNode支持@Provide/@Consume\n      this.builderNode.build(wrapBuilder(buildText), undefined,\n        { enableProvideConsumeCrossing: true });\n      // 将BuilderNode的根节点挂载到rootNode节点下\n      try {\n        this.rootNode.appendChild(this.builderNode.getFrameNode());\n      } catch (e) {\n        hilog.error(DOMAIN, 'testTag', 'Failed to appendChild', JSON.stringify(e) ?? '');\n      }\n    }\n  }\n\n  removeBuilderNode(): void {\n    if (this.rootNode && this.builderNode) {\n      // 从rootNode节点下的BuildNode节点移除\n      try {\n        this.rootNode.removeChild(this.builderNode.getFrameNode());\n      } catch (e) {\n        hilog.error(DOMAIN, 'testTag', 'Failed to removeChild', JSON.stringify(e) ?? '');\n      }\n    }\n  }\n\n  disposeNode(): void {\n    if (this.rootNode && this.builderNode) {\n      // 立即释放当前BuilderNode\n      this.builderNode.dispose();\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @Provide @Watch('onChange') message: string = 'hello';\n  controller: TextNodeController = new TextNodeController();\n\n  onChange() {\n    hilog.info(DOMAIN, 'testTag', '%{public}s', `Index Provide change ${this.message}`);\n  }\n\n  build() {\n    Column() {\n      Text(`@Provide: ${this.message}`)\n        .fontSize(20)\n        .onClick(() => {\n          this.message += ' Provide';\n        })\n\n      // 执行BuilderNode的build方法，构造Child自定义组件\n      // 并将BuilderNode挂载在NodeContainer下\n      // Child中@Consume可以和当前Index中的@Provide配对\n      // @Consume装饰的变量message从default value变为hello，并回调@Consume的@Watch方法\n      Button('add Child')\n        .onClick(() => {\n          this.controller.addBuilderNode();\n        })\n      // 将BuilderNode下的节点从NodeContainer上移除\n      // @Consume修饰的变量message从和@Provide配对的值变为default value，并回调@Consume的@Watch方法\n      Button('remove Child')\n        .onClick(() => {\n          this.controller.removeBuilderNode();\n        })\n\n      // 立即释放当前BuilderNode，BuilderNode下节点销毁，Child组件执行aboutToDisappear\n      Button('dispose Child')\n        .onClick(() => {\n          this.controller.disposeNode();\n        })\n      NodeContainer(this.controller)\n        .width('100%')\n        .height(100)\n        .backgroundColor(Color.Pink)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n\n\n@Component\nstruct Child {\n  @Consume @Watch('onChange') message: string = 'default value';\n\n  onChange() {\n    hilog.info(DOMAIN, 'testTag', '%{public}s', `Child Consume change ${this.message}`);\n  }\n\n  aboutToDisappear(): void {\n    hilog.info(DOMAIN, 'testTag', '%{public}s', `Child aboutToDisappear`);\n  }\n\n  build() {\n    Column() {\n      Text(`@Consume ${this.message}`)\n        .fontSize(20)\n        .onClick(() => {\n          this.message += ' Consume';\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "builderparam尾随闭包情况下provide未定义错误",
      children: "@BuilderParam尾随闭包情况下@Provide未定义错误"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在此", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builderparam#%E5%B0%BE%E9%9A%8F%E9%97%AD%E5%8C%85%E5%88%9D%E5%A7%8B%E5%8C%96%E7%BB%84%E4%BB%B6",
        children: "尾随闭包"
      }), "场景下，CustomWidget执行this.builder()创建子组件CustomWidgetChild时，this指向的是HomePage。因此找不到CustomWidget的@Provide变量，所以下面示例会报找不到@Provide错误，和@BuilderParam连用的时候要谨慎this的指向。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "错误示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Tmp {\n  a: string = '';\n}\n\n@Entry\n@Component\nstruct HomePage {\n  // 错误点1：HomePage未声明@Provide\n  @Builder\n  builder2($$: Tmp) {\n    Text(`${$$.a}测试`)\n  }\n\n  build() {\n    Column() {\n      // 错误点2：使用尾随闭包的形式将创建CustomWidgetChild的函数传递给CustomWidget，此时尾随闭包中this指向HomePage\n      CustomWidget() {\n        CustomWidgetChild({ builder: this.builder2 })\n      }\n    }\n  }\n}\n\n@Component\nstruct CustomWidget {\n  // 错误点3：@Provide变量声明在CustomWidget中，仅有CustomWidget自身及其子组件能够消费\n  @Provide('a') a: string = 'abc';\n  @BuilderParam\n  builder: () => void;\n\n  build() {\n    Column() {\n      Button('你好').onClick(() => {\n        if (this.a == 'ddd') {\n          this.a = 'abc';\n        }\n        else {\n          this.a = 'ddd';\n        }\n\n      })\n      this.builder()\n    }\n  }\n}\n\n@Component\nstruct CustomWidgetChild {\n  // 错误点4：尝试消费CustomWidget的@Provide('a')，但实际上CustomWidgetChild的父组件为HomePage，无法找到对应的@Provide\n  @Consume('a') a: string;\n  @BuilderParam\n  builder: ($$: Tmp) => void;\n\n  build() {\n    Column() {\n      this.builder({ a: this.a })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "正确示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Tmp {\n  public name: string = '';\n}\n\n@Entry\n@Component\nstruct HomePage {\n  // 修正点1：将@Provide声明在Entry组件（根作用域），确保子组件能正确消费\n  @Provide('name') name: string = 'abc';\n\n  @Builder\n  builder2($$: Tmp) {\n    Text(`${$$.name} test`)\n  }\n\n  build() {\n    Column() {\n      Button('Hello').onClick(() => {\n        if (this.name == 'ddd') {\n          this.name = 'abc';\n        } else {\n          this.name = 'ddd';\n        }\n      })\n      // 修正点2：CustomWidget不再声明@Provide，仅作为容器传递builder\n      CustomWidget() {\n        CustomWidgetChild({ builder: this.builder2 })\n      }\n    }\n  }\n}\n\n@Component\nstruct CustomWidget {\n  @BuilderParam\n  builder: () => void;\n\n  build() {\n    this.builder()\n  }\n}\n\n@Component\nstruct CustomWidgetChild {\n  // 修正点3：@Consume从根作用域（HomePage）获取@Provide('name')，作用域正确\n  @Consume('name') name: string;\n  @BuilderParam\n  builder: ($$: Tmp) => void;\n\n  build() {\n    Column() {\n      this.builder({ name: this.name })\n    }\n  }\n}\n"
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
959373(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
578736(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477603-8d157393f367bc2046765f448789497f.png");

},
945685(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
872068(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
827465(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
897232(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
192944(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
129591(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
831720(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437649-53ab3f8e655307ee7f7fb0b6037cf64e.png");

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