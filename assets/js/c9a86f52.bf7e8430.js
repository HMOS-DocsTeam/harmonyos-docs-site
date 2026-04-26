"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["700370"], {
715076(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_2_arkts_v_2_manage_component_state_arkts_new_provider_and_consumer_arkts_new_provider_and_consumer_md_c9a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-v-2-arkts-v-2-manage-component-state-arkts-new-provider-and-consumer-arkts-new-provider-and-consumer-md-c9a.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_2_arkts_v_2_manage_component_state_arkts_new_provider_and_consumer_arkts_new_provider_and_consumer_md_c9a_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-provider-and-consumer/arkts-new-provider-and-consumer","title":"@Provider装饰器和@Consumer装饰器：跨组件层级双向同步","description":"@Provider和@Consumer用于跨组件层级数据双向同步，可以使得开发者不用拘泥于组件层级。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-provider-and-consumer/arkts-new-provider-and-consumer.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-provider-and-consumer","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-provider-and-consumer/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-provider-and-consumer/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"@Provider装饰器和@Consumer装饰器：跨组件层级双向同步","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-provider-and-consumer","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"@Event装饰器：规范组件输出","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-event/"},"next":{"title":"@ObservedV2装饰器和@Trace装饰器：类属性变化观测","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-provider-and-consumer/arkts-new-provider-and-consumer.md


const frontMatter = {
	title: '@Provider装饰器和@Consumer装饰器：跨组件层级双向同步',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-provider-and-consumer',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '@Provider装饰器和@Consumer装饰器：跨组件层级双向同步';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "@Provider和@Consumer vs @Provide和@Consume能力对比",
  "id": "provider和consumer-vs-provide和consume能力对比",
  "level": 2
}, {
  "value": "装饰器说明",
  "id": "装饰器说明",
  "level": 2
}, {
  "value": "基本规则",
  "id": "基本规则",
  "level": 3
}, {
  "value": "aliasName和属性名",
  "id": "aliasname和属性名",
  "level": 3
}, {
  "value": "变量传递",
  "id": "变量传递",
  "level": 2
}, {
  "value": "使用限制",
  "id": "使用限制",
  "level": 2
}, {
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "@Provider和@Consumer双向同步",
  "id": "provider和consumer双向同步",
  "level": 3
}, {
  "value": "装饰Array类型变量",
  "id": "装饰array类型变量",
  "level": 3
}, {
  "value": "装饰Date类型变量",
  "id": "装饰date类型变量",
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
  "value": "@Provider和@Consumer装饰回调事件用于组件之间完成行为抽象",
  "id": "provider和consumer装饰回调事件用于组件之间完成行为抽象",
  "level": 3
}, {
  "value": "@Provider和@Consumer装饰复杂类型，配合@Trace一起使用",
  "id": "provider和consumer装饰复杂类型配合trace一起使用",
  "level": 3
}, {
  "value": "@Provider重名时，@Consumer向上查找其最近的@Provider",
  "id": "provider重名时consumer向上查找其最近的provider",
  "level": 3
}, {
  "value": "@Provider和@Consumer初始化@Param",
  "id": "provider和consumer初始化param",
  "level": 3
}, {
  "value": "@Consumer在跨BuilderNode场景下和@Provider建立双向同步过程",
  "id": "consumer在跨buildernode场景下和provider建立双向同步过程",
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
        id: "provider装饰器和consumer装饰器跨组件层级双向同步",
        children: "@Provider装饰器和@Consumer装饰器：跨组件层级双向同步"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Provider和@Consumer用于跨组件层级数据双向同步，可以使得开发者不用拘泥于组件层级。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Provider和@Consumer属于状态管理V2装饰器，所以只能在@ComponentV2中才能使用，在@Component中使用会编译报错。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@Provider和@Consumer提供了跨组件层级数据双向同步的能力。在阅读本文档前，建议提前阅读：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#componentv2",
        children: "@ComponentV2"
      }), "。常见问题请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-inner-component",
        children: "组件内状态变量常见问题"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(894768)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Provider和@Consumer装饰器从API version 12开始支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，@Provider和@Consumer装饰器支持在元服务中使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 23开始，通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode",
        children: "BuilderNode"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#buildoptions12",
        children: "BuildOptions"
      }), "参数enableProvideConsumeCrossing为true，使得@Provider和@Consumer支持跨", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode",
        children: "BuilderNode"
      }), "双向同步。在BuilderNode挂载到自定义组件节点树之后，@Consumer会重新获取最近的@Provider数据，与之建立双向同步关系。具体可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#consumer%E5%9C%A8%E8%B7%A8buildernode%E5%9C%BA%E6%99%AF%E4%B8%8B%E5%92%8Cprovider%E5%BB%BA%E7%AB%8B%E5%8F%8C%E5%90%91%E5%90%8C%E6%AD%A5%E8%BF%87%E7%A8%8B",
        children: "@Consumer在跨BuilderNode场景下和@Provider建立双向同步"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，@Provider和@Consumer装饰器支持在ArkTS卡片中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Provider，即数据提供方，其所有的子组件都可以通过@Consumer绑定相同的key来获取@Provider提供的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Consumer，即数据消费方，可以通过绑定同样的key获取其最近父节点的@Provider的数据，当查找不到@Provider的数据时，使用本地默认值。图示如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(789739)/* ["default"] */.A) + "",
        width: "1142",
        height: "436"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Provider和@Consumer装饰的数据类型需要一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者在使用@Provider和@Consumer时要注意："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Provider和@Consumer强依赖自定义组件层级，@Consumer会因为所在组件的父组件不同，而被初始化为不同的值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Provider和@Consumer相当于把组件粘合在一起了，从组件独立角度考虑，应减少使用@Provider和@Consumer。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "provider和consumer-vs-provide和consume能力对比",
      children: "@Provider和@Consumer vs @Provide和@Consume能力对比"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在状态管理V1版本中，提供跨组件层级双向的装饰器为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
        children: "@Provide和@Consume"
      }), "，当前文档介绍的是状态管理V2装饰器@Provider和@Consumer。虽然两者名字和功能类似，但在特性上还存在一些差异。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者不了解状态管理V1中的@Provide和@Consume，可以直接跳过本节。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "能力"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "V2装饰器@Provider和@Consumer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "V1装饰器@Provide和@Consume"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Consume(r)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须本地初始化，当找不到@Provider时使用本地默认值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API version 20以前，@Consume禁止本地初始化，当找不到对应@Provide的时候，会抛出异常；从API version 20开始，@Consume支持设置默认值，如果没有设置默认值，且找不到对应@Provide时，会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "支持类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持function。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持function。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "观察能力"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["仅能观察自身赋值变化，如果要观察嵌套场景，配合", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
              children: "@Trace"
            }), "一起使用。"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["观察第一层变化，如果要观察嵌套场景，配合", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
              children: "@Observed和@ObjectLink"
            }), "一起使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "alias和属性名"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "alias是唯一匹配的key，缺省时默认属性名为alias。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "alias和属性名都为key，优先匹配alias，匹配不到可以匹配属性名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Provide(r) 从父组件初始化"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "允许。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Provide(r)支持重载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认开启，即@Provider可以重名，@Consumer向上查找最近的@Provider。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认关闭，即在组件树上不允许有同名@Provide。如果需要重载，则需要配置allowOverride。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "装饰器说明",
      children: "装饰器说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "基本规则",
      children: "基本规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Provider语法："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Provider(aliasName?: string) varName : varType = initValue"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "@Provider属性装饰器"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰器参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "aliasName?: string，别名，缺省时默认为属性名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "支持类型"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义组件中成员变量。属性的类型可以为number、string、boolean、class、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%A3%85%E9%A5%B0array%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
              children: "Array"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%A3%85%E9%A5%B0date%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
              children: "Date"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%A3%85%E9%A5%B0map%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
              children: "Map"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%A3%85%E9%A5%B0set%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
              children: "Set"
            }), "等类型。支持装饰", (0,jsx_runtime.jsx)(_components.a, {
              href: "#provider%E5%92%8Cconsumer%E8%A3%85%E9%A5%B0%E5%9B%9E%E8%B0%83%E4%BA%8B%E4%BB%B6%E7%94%A8%E4%BA%8E%E7%BB%84%E4%BB%B6%E4%B9%8B%E9%97%B4%E5%AE%8C%E6%88%90%E8%A1%8C%E4%B8%BA%E6%8A%BD%E8%B1%A1",
              children: "箭头函数"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "从父组件初始化"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "禁止。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "本地初始化"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须本地初始化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "观察能力"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "能力等同于@Trace。变化会同步给对应的@Consumer。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Consumer语法："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Consumer(aliasName?: string) varName : varType = initValue"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "@Consumer属性装饰器"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰器参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "aliasName?: string，别名，缺省时默认为属性名，向上查找最近的@Provider。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "可装饰的变量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义组件中成员变量。属性的类型可以为number、string、boolean、class、Array、Date、Map、Set等类型。支持装饰箭头函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "从父组件初始化"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "禁止。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "本地初始化"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须本地初始化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "观察能力"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "能力等同于@Trace。变化会同步给对应的@Provider。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aliasname和属性名",
      children: "aliasName和属性名"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Provider和@Consumer接受可选参数aliasName，没有配置参数时，使用属性名作为默认的aliasName。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(288478)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "aliasName是用于@Provider和@Consumer进行匹配的唯一指定key。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下三个例子可清楚介绍@Provider和@Consumer如何使用aliasName进行查找匹配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ComponentV2\nstruct Parent {\n  // 未定义aliasName, 使用属性名'str'作为aliasName\n  @Provider() str: string = 'hello';\n}\n\n@ComponentV2\nstruct Child {\n  // 定义aliasName为'str'，使用aliasName去寻找\n  // 能够在Parent组件上找到, 使用@Provider的值'hello'\n  @Consumer('str') str: string = 'world';\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ComponentV2\nstruct Parent {\n  // 定义aliasName为'alias'\n  @Provider('alias') str: string = 'hello';\n}\n\n@ComponentV2\nstruct Child {\n  // 定义aliasName为 'alias'，找到@Provider并获得值'hello'\n  @Consumer('alias') str: string = 'world';\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ComponentV2\nstruct Parent {\n  // 定义aliasName为'alias'\n  @Provider('alias') str: string = 'hello';\n}\n\n@ComponentV2\nstruct Child {\n  // 未定义aliasName，使用属性名'str'作为aliasName\n  // 没有找到对应的@Provider，使用本地值'world'\n  @Consumer() str: string = 'world';\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "变量传递",
      children: "变量传递"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "传递规则"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "从父组件初始化"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Provider和@Consumer装饰的变量仅允许本地初始化，不允许从外部传入初始化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "初始化子组件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Provider和@Consumer装饰的变量可以初始化子组件中@Param装饰的变量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用限制",
      children: "使用限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Provider和@Consumer为自定义组件的属性装饰器，只能装饰自定义组件内的属性，不能装饰class的属性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Provider和@Consumer为状态管理V2装饰器，只能在@ComponentV2中使用，不能在@Component中使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Provider和@Consumer只支持本地初始化，不支持外部传入初始化。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "provider和consumer双向同步",
      children: "@Provider和@Consumer双向同步"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建立双向绑定"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["自定义组件Parent和Child初始化：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Child中@Consumer() str: string = 'world'向上查找，查找到Parent中声明的@Provider() str: string = 'hello'。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "@Consumer() str: string = 'world'初始化为其查找到的@Provider的值，即'hello'。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "两者建立双向同步关系。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击Parent中的按钮，改变@Provider装饰的str，通知其对应的@Consumer，对应UI刷新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击Child中的按钮，改变@Consumer装饰的str，通知其对应的@Provider，对应UI刷新。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct Parent {\n  @Provider() str: string = 'hello';\n\n  build() {\n    Column() {\n      Button(this.str)\n        .onClick(() => {\n          this.str += '0';\n        })\n      Child()\n    }\n  }\n}\n\n@ComponentV2\nstruct Child {\n  // @Consumer装饰的属性str和Parent组件中@Provider装饰的属性str名称相同，因此建立了双向绑定关系\n  @Consumer() str: string = 'world';\n\n  build() {\n    Column() {\n      Button(this.str)\n        .onClick(() => {\n          this.str += '0';\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "未建立双向绑定"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的例子中，@Provider和@Consumer由于aliasName值不同，无法建立双向同步关系。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["自定义组件Parent和Child初始化：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Child中@Consumer() str: string = 'world'向上查找，未查找到其数据提供方@Provider。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "@Consumer() str: string = 'world'使用其本地默认值为'world'。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "两者未建立双向同步关系。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击Parent中的按钮，改变@Provider装饰的str1，仅刷新@Provider关联的Button组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击Child中的按钮，改变@Consumer装饰的str，仅刷新@Consumer关联的Button组件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct Parent {\n  @Provider() str1: string = 'hello';\n\n  build() {\n    Column() {\n      Button(this.str1)\n        .onClick(() => {\n          this.str1 += '0';\n        })\n      Child()\n    }\n  }\n}\n\n@ComponentV2\nstruct Child {\n  // @Consumer装饰的属性str和Parent组件中@Provider装饰的属性str1名称不同，无法建立双向绑定关系\n  @Consumer() str: string = 'world';\n\n  build() {\n    Column() {\n      Button(this.str)\n        .onClick(() => {\n          this.str += '0';\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰array类型变量",
      children: "装饰Array类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当装饰的对象是Array时，可以观察到Array整体的赋值，同时可以通过调用Array的接口push, pop, shift, unshift, splice, copyWithin, fill, reverse, sort更新Array中的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct Parent {\n  @Provider() count: number[] = [1, 2, 3];\n\n  build() {\n    Row() {\n      Column() {\n        ForEach(this.count, (item: number) => {\n          Text(`parent: ${item}`).fontSize(30)\n          Divider()\n        })\n        Button('push').onClick(() => {\n          this.count.push(111);\n        })\n        Button('reverse').onClick(() => {\n          this.count.reverse();\n        })\n        Button('fill').onClick(() => {\n          this.count.fill(6);\n        })\n        Child()\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n\n@ComponentV2\nstruct Child {\n  @Consumer() count: number[] = [9, 8, 7];\n\n  build() {\n    Column() {\n      ForEach(this.count, (item: number) => {\n        Text(`child: ${item}`).fontSize(30)\n        Divider()\n      })\n      Button('push').onClick(() => {\n        this.count.push(222);\n      })\n      Button('reverse').onClick(() => {\n        this.count.reverse();\n      })\n      Button('fill').onClick(() => {\n        this.count.fill(8);\n      })\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰date类型变量",
      children: "装饰Date类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当装饰Date类型变量时，可以观察到数据源对Date整体的赋值，以及调用Date的接口setFullYear, setMonth, setDate, setHours, setMinutes, setSeconds, setMilliseconds, setTime, setUTCFullYear, setUTCMonth, setUTCDate, setUTCHours, setUTCMinutes, setUTCSeconds, setUTCMilliseconds带来的变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct Parent {\n  @Provider() selectedDate: Date = new Date('2021-08-08');\n\n  build() {\n    Column() {\n      Text(`parent: ${this.selectedDate}`)\n      Button('update the new date')\n        .onClick(() => {\n          this.selectedDate = new Date('2023-07-07');\n        })\n      Button('increase the year by 1')\n        .onClick(() => {\n          this.selectedDate.setFullYear(this.selectedDate.getFullYear() + 1);\n        })\n      Button('increase the month by 1')\n        .onClick(() => {\n          this.selectedDate.setMonth(this.selectedDate.getMonth() + 1);\n        })\n      Button('increase the day by 1')\n        .onClick(() => {\n          this.selectedDate.setDate(this.selectedDate.getDate() + 1);\n        })\n      Child()\n    }\n  }\n}\n\n@ComponentV2\nstruct Child {\n  @Consumer() selectedDate: Date = new Date('2022-07-07');\n\n  build() {\n    Column() {\n      Text(`child: ${this.selectedDate}`)\n      Button('update the new date')\n        .onClick(() => {\n          this.selectedDate = new Date('2025-01-01');\n        })\n      Button('increase the year by 1')\n        .onClick(() => {\n          this.selectedDate.setFullYear(this.selectedDate.getFullYear() + 1);\n        })\n      Button('increase the month by 1')\n        .onClick(() => {\n          this.selectedDate.setMonth(this.selectedDate.getMonth() + 1);\n        })\n      Button('increase the day by 1')\n        .onClick(() => {\n          this.selectedDate.setDate(this.selectedDate.getDate() + 1);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰map类型变量",
      children: "装饰Map类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当装饰Map类型变量时，可以观察到数据源对Map整体的赋值，以及调用Map的接口set, clear, delete带来的变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct Parent {\n  @Provider() message: Map<number, string> = new Map([[0, 'a'], [1, 'b'], [3, 'c']]);\n\n  build() {\n    Column() {\n      Text('Parent').fontSize(30)\n      ForEach(Array.from(this.message.entries()), (item: [number, string]) => {\n        Text(`${item[0]}`).fontSize(30)\n        Text(`${item[1]}`).fontSize(30)\n        Divider()\n      })\n      Button('init map').onClick(() => {\n        this.message = new Map([[0, 'aa'], [1, 'bb'], [3, 'cc']]);\n      })\n      Button('set new one').onClick(() => {\n        this.message.set(4, 'd');\n      })\n      Button('clear').onClick(() => {\n        this.message.clear();\n      })\n      Button('replace the first one').onClick(() => {\n        this.message.set(0, 'a~');\n      })\n      Button('delete the first one').onClick(() => {\n        this.message.delete(0);\n      })\n      Child()\n    }\n  }\n}\n\n@ComponentV2\nstruct Child {\n  @Consumer() message: Map<number, string> = new Map([[0, 'd'], [1, 'e'], [3, 'f']]);\n\n  build() {\n    Column() {\n      Text('Child').fontSize(30)\n      ForEach(Array.from(this.message.entries()), (item: [number, string]) => {\n        Text(`${item[0]}`).fontSize(30)\n        Text(`${item[1]}`).fontSize(30)\n        Divider()\n      })\n      Button('init map').onClick(() => {\n        this.message = new Map([[0, 'dd'], [1, 'ee'], [3, 'ff']]);\n      })\n      Button('set new one').onClick(() => {\n        this.message.set(4, 'g');\n      })\n      Button('clear').onClick(() => {\n        this.message.clear();\n      })\n      Button('replace the first one').onClick(() => {\n        this.message.set(0, 'a*');\n      })\n      Button('delete the first one').onClick(() => {\n        this.message.delete(0);\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰set类型变量",
      children: "装饰Set类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当装饰Set类型变量时，可以观察到数据源对Set整体的赋值，以及调用Set的接口 add, clear, delete带来的变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct Parent {\n  @Provider() message: Set<number> = new Set([1, 2, 3, 4]);\n\n  build() {\n    Column() {\n      Text('Parent').fontSize(30)\n      ForEach(Array.from(this.message.entries()), (item: [number, number]) => {\n        Text(`${item[0]}`).fontSize(30)\n        Divider()\n      })\n      Button('init set').onClick(() => {\n        this.message = new Set([1, 2, 3, 4]);\n      })\n      Button('set new one').onClick(() => {\n        this.message.add(5);\n      })\n      Button('clear').onClick(() => {\n        this.message.clear();\n      })\n      Button('delete the first one').onClick(() => {\n        this.message.delete(1);\n      })\n      Child()\n    }\n  }\n}\n\n@ComponentV2\nstruct Child {\n  @Consumer() message: Set<number> = new Set([1, 2, 3, 4, 5, 6]);\n\n  build() {\n    Column() {\n      Text('Child').fontSize(30)\n      ForEach(Array.from(this.message.entries()), (item: [number, number]) => {\n        Text(`${item[0]}`).fontSize(30)\n        Divider()\n      })\n      Button('init set').onClick(() => {\n        this.message = new Set([1, 2, 3, 4, 5, 6]);\n      })\n      Button('set new one').onClick(() => {\n        this.message.add(7);\n      })\n      Button('clear').onClick(() => {\n        this.message.clear();\n      })\n      Button('delete the first one').onClick(() => {\n        this.message.delete(1);\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "provider和consumer装饰回调事件用于组件之间完成行为抽象",
      children: "@Provider和@Consumer装饰回调事件用于组件之间完成行为抽象"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当需要在父组件中向子组件注册回调函数时，可以使用@Provider和@Consumer装饰回调方法来实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在拖拽场景中，若需将子组件的拖拽起始位置信息同步给父组件，可参考以下示例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct Parent {\n  @Local childX: number = 0;\n  @Local childY: number = 1;\n  @Provider() onDrag: (x: number, y: number) => void = (x: number, y: number) => {\n    console.info(`onDrag event at x=${x} y:${y}`);\n    this.childX = x;\n    this.childY = y;\n  }\n\n  build() {\n    Column() {\n      Text(`child position x: ${this.childX}, y: ${this.childY}`)\n      Child()\n    }\n  }\n}\n\n@ComponentV2\nstruct Child {\n  @Consumer() onDrag: (x: number, y: number) => void = (x: number, y: number) => {};\n\n  build() {\n    Button('changed')\n      .draggable(true)\n      .onDragStart((event: DragEvent) => {\n        // 当前预览器上不支持通用拖拽事件\n        this.onDrag(event.getDisplayX(), event.getDisplayY());\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "provider和consumer装饰复杂类型配合trace一起使用",
      children: "@Provider和@Consumer装饰复杂类型，配合@Trace一起使用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["@Provider和@Consumer只能观察到数据本身的变化。如果需要观察其装饰的复杂数据类型的属性变化，可以配合@Trace一起使用，也可以使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-makeobserved",
          children: "makeObserved"
        }), "将非可观察数据变为可观察数据。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["装饰内置类型：Array、Map、Set、Date时，可以观察到某些API的变化，观察能力同", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace#%E8%A7%82%E5%AF%9F%E5%8F%98%E5%8C%96",
          children: "@Trace"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass User {\n  @Trace public name: string;\n  @Trace public age: number;\n\n  constructor(name: string, age: number) {\n    this.name = name;\n    this.age = age;\n  }\n}\nconst data: User[] = [new User('Json', 10), new User('Eric', 15)];\n@Entry\n@ComponentV2\nstruct Parent {\n  @Provider('data') users: User[] = data;\n\n  build() {\n    Column() {\n      Child()\n      Button('add new user')\n        .onClick(() => {\n          this.users.push(new User('Molly', 18));\n        })\n      Button('age++')\n        .onClick(() => {\n          this.users[0].age++;\n        })\n      Button('change name')\n        .onClick(() => {\n          this.users[0].name = 'Shelly';\n        })\n    }\n  }\n}\n\n@ComponentV2\nstruct Child {\n  @Consumer('data') users: User[] = [];\n\n  build() {\n    Column() {\n      ForEach(this.users, (item: User) => {\n        Column() {\n          Text(`name: ${item.name}`).fontSize(30)\n          Text(`age: ${item.age}`).fontSize(30)\n          Divider()\n        }\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "provider重名时consumer向上查找其最近的provider",
      children: "@Provider重名时，@Consumer向上查找其最近的@Provider"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Provider可以在组件树上重名，@Consumer会向上查找其最近父节点的@Provider的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct Index {\n  @Provider() val: number = 10;\n\n  build() {\n    Column() {\n      Parent()\n    }\n  }\n}\n\n@ComponentV2\nstruct Parent {\n  @Provider() val: number = 20;\n  @Consumer('val') val2: number = 0; // 10\n\n  build() {\n    Column() {\n      Text(`${this.val2}`)\n      Child()\n    }\n  }\n}\n\n@ComponentV2\nstruct Child {\n  @Consumer() val: number = 0; // 20\n\n  build() {\n    Column() {\n      Text(`${this.val}`)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上面的例子中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parent中的@Consumer向上查找，查找到Index中定义的@Provider() val: number = 10，初始化为10。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Child中的@Consumer向上查找，查找到Parent中定义的@Provider() val: number = 20后停止，初始化为20。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "provider和consumer初始化param",
      children: "@Provider和@Consumer初始化@Param"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Provider和@Consumer装饰的变量可以初始化子组件中@Param装饰的变量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct Index {\n  @Provider() val: number = 10;\n\n  build() {\n    Column() {\n      Text(`Index @Provider val: ${this.val}`).fontSize(30)\n      Parent({ val2: this.val })\n    }\n  }\n}\n\n@ComponentV2\nstruct Parent {\n  @Consumer() val: number = 0;\n  @Require @Param val2: number;\n\n  build() {\n    Column() {\n      Text(`Parent @Consumer val: ${this.val}`).fontSize(30)\n      Button('change val').onClick(() => {\n        this.val++;\n      })\n      Text(`Parent @Param val2: ${this.val2}`).fontSize(30)\n      Child({ val: this.val })\n    }.border({ width: 2, color: Color.Green })\n  }\n}\n\n@ComponentV2\nstruct Child {\n  @Require @Param val: number;\n\n  build() {\n    Column() {\n      Text(`Child @Param val ${this.val}`).fontSize(30)\n    }.border({ width: 2, color: Color.Pink })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上面的例子中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Index中@Provider装饰的变量val与Parent中@Consumer装饰的变量val建立双向数据绑定。Parent中@Param装饰的变量val2接收Index中数据源val的数据，并同步其变化。Child中@Param装饰的变量val接收Parent中数据源val的数据，并同步其变化。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击Parent中的按钮，触发@Consumer() val的变化，变化同步给Index中的@Provider() val和Child中的@Param val，对应UI刷新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Index中@Provider() val的变化同步给Parent中的@Param val2，对应UI刷新。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "consumer在跨buildernode场景下和provider建立双向同步过程",
      children: "@Consumer在跨BuilderNode场景下和@Provider建立双向同步过程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(539153)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，支持跨BuilderNode配对@Provider和@Consumer。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面给出一个示例，实现如下功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["BuilderNode通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder#%E5%85%A8%E5%B1%80%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9E%84%E5%BB%BA%E5%87%BD%E6%95%B0",
          children: "全局自定义构建函数"
        }), "构建组件树，组件树的根", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
          children: "FrameNode"
        }), "节点可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#getframenode",
          children: "getFrameNode"
        }), "获取，该节点可直接由", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller",
          children: "NodeController"
        }), "返回并挂载于", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
          children: "NodeContainer"
        }), "节点下。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "挂载到自定义组件节点树时，BuilderNode会通过addBuilderNode方法挂载在自定义组件下，此时BuilderNode节点下的@Consumer会向上查找@Provider，根据key的匹配规则找到最近的@Provider后，会和@Provider建立双向同步关系。如果找不到配对的@Provider，则@Consumer仍使用默认值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "建立双向同步的关系后，如果@Provider装饰变量的值和@Consumer的默认值不同，则会回调@Consumer的@Monitor方法，以及与@Consumer有同步关系的变量的@Monitor方法，例如：@Consumer通知其子组件中的@Param触发@Monitor方法。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BuilderNode从组件树卸载后，@Consumer会再次试图查找对应的@Provider，如果发现从组件树卸载后无法再找到之前配对的@Provider，则断开和@Provider的双向同步关系，@Consumer装饰的变量恢复成默认值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Consumer断开和@Provider的连接，恢复成默认值时，会判断@Consumer装饰变量的值相对于从@Provider变为@Consumer的默认值是否有变化，如果有变化，则会回调@Consumer的@Monitor方法以及与该@Consumer存在同步关系的变量的@Monitor方法。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BuilderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\n@Builder\nfunction buildText() {\n  TestRemove()\n}\n\nlet globalBuilderNode: BuilderNode<[]> | null = null;\n\nclass TextNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private uiContext: UIContext | null = null;\n\n  constructor() {\n    super();\n  }\n\n  makeNode(context: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(context);\n    this.uiContext = context;\n    return this.rootNode;\n  }\n\n  addBuilderNode(): void {\n    if (globalBuilderNode === null && this.uiContext) {\n      globalBuilderNode = new BuilderNode(this.uiContext);\n      // 构建BuilderNode，TestRemove作为子组件\n      globalBuilderNode.build(wrapBuilder<[]>(buildText), undefined, { enableProvideConsumeCrossing: true });\n    }\n    if (this.rootNode && globalBuilderNode) {\n      this.rootNode.appendChild(globalBuilderNode.getFrameNode());\n    }\n  }\n\n  removeBuilderNode(): void {\n    if (this.rootNode && globalBuilderNode) {\n      this.rootNode.removeChild(globalBuilderNode.getFrameNode());\n    }\n  }\n\n  disposeNode(): void {\n    if (this.rootNode && globalBuilderNode) {\n      globalBuilderNode.dispose();\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct RemoChildDisconnectProvider {\n  @Provider() content: string = 'Index: hello world';\n  @Monitor('content')\n  providerWatch() {\n    console.info(`Provider change ${this.content}`);\n  }\n\n  controllerIndex: TextNodeController = new TextNodeController();\n\n  build() {\n    Column({ space: 8 }) {\n      Text(`Provider: ${this.content}`)\n\n      // 添加BuilderNode，@Consumer与@Provider建立双向同步\n      Button('add child')\n        .onClick(() => {\n          this.controllerIndex.addBuilderNode();\n        })\n\n      // 移除BuilderNode，@Consumer与@Provider断开连接，恢复默认值\n      Button('remove child')\n        .onClick(() => {\n          this.controllerIndex.removeBuilderNode();\n        })\n\n      // 释放BuilderNode的子节点TestRemove，随后该子节点销毁，触发子节点的aboutToDisappear回调\n      Button('dispose child')\n        .onClick(() => {\n          this.controllerIndex.disposeNode();\n        })\n\n      // @Provider/@Consumer双向同步更新\n      Button('change Provider')\n        .onClick(() => {\n          this.content += 'Pro';\n        })\n      NodeContainer(this.controllerIndex)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n\n@ComponentV2\nstruct TestRemove {\n  @Consumer() content: string = 'default value';\n  @Monitor('content')\n  consumerWatch() {\n    console.info(`Consumer change ${this.content}`);\n  }\n\n  aboutToDisappear() {\n    console.info(`TestRemove aboutToDisappear`);\n  }\n\n  build() {\n    Column() {\n      Text('Consumer ' + this.content)\n\n      // @Provider和@Consumer绑定的Text组件刷新，并回调@Provider和@Consumer的@Monitor方法\n      Button('change cc')\n        .onClick(() => {\n          this.content += 'cc';\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上面的例子中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击add Child，TestRemove中@Consumer向上找到最近的RemoChildDisconnectProvider中的@Provider，将@Consumer从默认值更新为@Provider的值，并回调@Consumer的@Monitor方法。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Provider和@Consumer配对后，建立双向同步关系。点击change Provider和Text(change cc)，@Provider和@Consumer绑定的Text组件刷新，并回调@Provider和@Consumer的@Monitor方法。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击remove Child，BuilderNode子节点从组件树卸载，TestRemove中的@Consumer和RemoChildDisconnectProvider中的@Provider断开连接，TestRemove中的@Consumer恢复成默认值，并回调@Consumer的@Monitor方法。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击dispose Child，释放BuilderNode下的子节点TestRemove，随后该子节点销毁，执行aboutToDisappear回调。"
      }), "\n"]
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
539153(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
789739(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797968-941467c263ad858ae1703f9b33aac5a5.png");

},
894768(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
288478(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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