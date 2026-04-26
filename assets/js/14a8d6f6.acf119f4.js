"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["579802"], {
220164(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_v_1_v_2_guide_v_1_v_2_mixing_arkts_v_1_v_2_mixusage_arkts_v_1_v_2_mixusage_md_14a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-v-1-v-2-guide-v-1-v-2-mixing-arkts-v-1-v-2-mixusage-arkts-v-1-v-2-mixusage-md-14a.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_v_1_v_2_guide_v_1_v_2_mixing_arkts_v_1_v_2_mixusage_arkts_v_1_v_2_mixusage_md_14a_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/v1v2-mixing/arkts-v1-v2-mixusage/arkts-v1-v2-mixusage","title":"状态管理V1和V2混用指导（API version 19及之后）","description":"概述","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/v1v2-mixing/arkts-v1-v2-mixusage/arkts-v1-v2-mixusage.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/v1v2-mixing/arkts-v1-v2-mixusage","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/v1v2-mixing/arkts-v1-v2-mixusage/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/v1v2-mixing/arkts-v1-v2-mixusage/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"状态管理V1和V2混用指导（API version 19及之后）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-v1-v2-mixusage","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"状态管理V1和V2混用指导（API version 19前）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/v1v2-mixing/arkts-v1-v2-mixusage-before-api-version/"},"next":{"title":"组件内状态管理常见问题","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-inner-component/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/v1v2-mixing/arkts-v1-v2-mixusage/arkts-v1-v2-mixusage.md


const frontMatter = {
	title: '状态管理V1和V2混用指导（API version 19及之后）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-v1-v2-mixusage',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '状态管理V1和V2混用指导（API version 19及之后）';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "限制条件",
  "id": "限制条件",
  "level": 2
}, {
  "value": "新增接口",
  "id": "新增接口",
  "level": 2
}, {
  "value": "makeV1Observed",
  "id": "makev1observed",
  "level": 3
}, {
  "value": "enableV2Compatibility",
  "id": "enablev2compatibility",
  "level": 3
}, {
  "value": "混用规则",
  "id": "混用规则",
  "level": 2
}, {
  "value": "V1中使用V2的自定义组件",
  "id": "v1中使用v2的自定义组件",
  "level": 2
}, {
  "value": "传递class类型（V1-&gt;V2）",
  "id": "传递class类型v1-v2",
  "level": 3
}, {
  "value": "传递内置类型（V1-&gt;V2）",
  "id": "传递内置类型v1-v2",
  "level": 3
}, {
  "value": "传递二维数组（V1-&gt;V2）",
  "id": "传递二维数组v1-v2",
  "level": 3
}, {
  "value": "传递嵌套类型（V1-&gt;V2）",
  "id": "传递嵌套类型v1-v2",
  "level": 3
}, {
  "value": "V2中使用V1的自定义组件",
  "id": "v2中使用v1的自定义组件",
  "level": 2
}, {
  "value": "传递class类型（V2-&gt;V1）",
  "id": "传递class类型v2-v1",
  "level": 3
}, {
  "value": "传递内置类型（V2-&gt;V1）",
  "id": "传递内置类型v2-v1",
  "level": 3
}, {
  "value": "传递二维数组（V2-&gt;V1）",
  "id": "传递二维数组v2-v1",
  "level": 3
}, {
  "value": "传递嵌套类型（V2-&gt;V1）",
  "id": "传递嵌套类型v2-v1",
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
        id: "状态管理v1和v2混用指导api-version-19及之后",
        children: "状态管理V1和V2混用指导（API version 19及之后）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了帮助开发者顺利地向状态管理V2迁移，从API version 19开始，减少了对状态管理V1和V2混用场景的约束。具体变更可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%99%90%E5%88%B6%E6%9D%A1%E4%BB%B6",
        children: "限制条件"
      }), "。同时提供新的方法", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#enablev2compatibility19",
        children: "enableV2Compatibility"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#makev1observed19",
        children: "makeV1Observed"
      }), "来帮助开发者解决在迁移过程中遇到的混用问题。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(102675)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文档中使用“->”表示变量的传递，比如“V1->V2”，表示V1状态变量向V2状态变量传递。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制条件",
      children: "限制条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["V1装饰器不能和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
          children: "@ObservedV2"
        }), "一起使用。因为@ObservedV2/@Trace有自己独立的观察能力，不仅可以在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#componentv2",
          children: "@ComponentV2"
        }), "中使用，也可以独立在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#component",
          children: "@Component"
        }), "中使用，状态管理框架不希望其观察能力和V1的观察能力混合使用，所以依旧维持禁止现状。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V2->V1，V1不支持用装饰器接收@ObservedV2装饰的class，否则编译报错。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["V1中", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
          children: "@Link"
        }), "遵循其原本初始化规则，只能被V1状态变量初始化，详情见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link#%E5%8F%98%E9%87%8F%E7%9A%84%E4%BC%A0%E9%80%92%E8%AE%BF%E9%97%AE%E8%A7%84%E5%88%99%E8%AF%B4%E6%98%8E",
          children: "@Link初始化规则示意图"
        }), "。因为V1中", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
          children: "@Link"
        }), "仅能和V1状态变量建立双向同步关系，而V2中如果想实现双向同步，可以使用@Param、@Event，具体例子见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-component#link---paramevent",
          children: "@Link -> @Param/@Event迁移场景"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "新增接口",
      children: "新增接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "makev1observed",
      children: "makeV1Observed"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#makev1observed19",
        children: "makeV1Observed"
      }), "将不可观察的对象包装成状态管理V1可观察的对象，能力等同于@Observed，其返回值可初始化@ObjectLink。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(983483)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 19开始，开发者可以使用UIUtils中的makeV1Observed接口将不可观察的对象包装成状态管理V1可观察的对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "makeV1Observed主要和enableV2Compatibility搭配使用，实现V2->V1的传递。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "makeV1Observed可将普通class、Array、Map、Set、Date类型转换为V1的状态变量，其能力等同于@Observed，所以其返回值可以初始化@ObjectLink。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果makeV1Observed接受的数据已经是V1的状态变量，则返回自身，不做任何改变。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "makeV1Observed不会递归执行，仅会将第一层包装成V1的状态变量。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "限制条件"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不支持", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections/arkts-apis-arkts-collections",
          children: "collections类型"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable",
          children: "@Sendable"
        }), "装饰的class。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持非object类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持undefined、null。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不支持@ObservedV2、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#makeobserved",
          children: "makeObserved"
        }), "的返回值和V2装饰器装饰的built-in类型的变量（Array、Map、Set和Date）。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enablev2compatibility",
      children: "enableV2Compatibility"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#enablev2compatibility19",
        children: "enableV2Compatibility"
      }), "将V1的状态变量使能V2的观察能力，即让V1状态变量可以在@ComponentV2中观察到变化。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(100131)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 19开始，开发者可以使用UIUtils中的enableV2Compatibility接口将V1的状态变量兼容V2中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该接口主要应用于V1->V2的场景，V1的状态变量调用该接口后，传递到@ComponentV2中，则可以在V2中观察到变化，从而实现数据的联动刷新。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["enableV2Compatibility只能作用于V1的状态变量。V1状态变量为V1装饰器装饰的变量，即@Observed装饰的变量，或", (0,jsx_runtime.jsx)(_components.a, {
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
          children: "@Provide"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
          children: "@Consume"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
          children: "@ObjectLink"
        }), "（@ObjectLink需是@Observed装饰的实例或者makeV1Observed的返回值）装饰的变量。否则，将返回入参自身。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "enableV2Compatibility会递归遍历class的所有属性，Array/Set/Map的所有子项，直到遇到非V1状态变量的数据，则停止当前分支的遍历。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "限制条件"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持非object类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持undefined、null。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持非V1的状态变量数据。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不支持@ObservedV2、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#makeobserved",
          children: "makeObserved"
        }), "的返回值和V2装饰器装饰的built-in类型的变量（Array、Map、Set和Date）。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "混用规则",
      children: "混用规则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "V1->V2传递复杂类型数据，需要调用enableV2Compatibility，否则无法实现V1和V2的数据联动，建议在V2组件的构造处调用，否则当变量被整体赋值时，需要再次手动调用enableV2Compatibility。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 建议用法，this.state = new ObservedClass()时无需再调用UIUtils.enableV2Compatibility，减少代码量\nSubComponentV2({param: UIUtils.enableV2Compatibility(this.state)})\n\n// 不建议用法，state做整体赋值时，需要再次调用UIUtils.enableV2Compatibility\n// 否则传递给SubComponentV2的V1变量是无法在V2中观察的\n// @State state: ObservedClass = UIUtils.enableV2Compatibility(new ObservedClass());\n// this.state = UIUtils.enableV2Compatibility(new ObservedClass());\nSubComponentV2({param: this.state})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "V2->V1传递复杂类型数据，在V2中优先声明成V1的状态变量数据，并调用UIUtils.enableV2Compatibility。因为在状态管理V1中，状态变量默认有观察第一层的能力，而状态管理V2仅有观察自身的能力，如果希望双方数据联动，则需要调用UIUtils.enableV2Compatibility(UIUtils.makeV1Observed())拉齐双方的观察能力。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 建议用法\n@Local unObservedClass: UnObservedClass = UIUtils.enableV2Compatibility(UIUtils.makeV1Observed(new UnObservedClass()));\n\n// 建议用法，ObservedClass是@Observed装饰的class\n@Local observedClass: ObservedClass = UIUtils.enableV2Compatibility(new ObservedClass());\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "UIUtils.enableV2Compatibility(UIUtils.makeV1Observed())不会改变V1和V2本身观察能力。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在V1中，UIUtils.enableV2Compatibility(UIUtils.makeV1Observed())等于V1的观察能力，观察数据本身的赋值和第一层属性的赋值，无法深度观察，如果需要深度观察，则需要配合@ObjectLink。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在V2中，UIUtils.enableV2Compatibility(UIUtils.makeV1Observed())可以深度观察，但是需要每一层都是@Observed装饰的class，或者是makeV1Observed的返回值。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "不使用enableV2Compatibility和makeV1Observed会导致双重代理问题，使同一状态对象被V1和V2两套状态管理体系同时生成代理对象，从而引起监听逻辑冲突。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当数据已使用V2观察能力，即调用UIUtils.enableV2Compatibility后，会将新的数据默认使用V2观察能力，但需要开发者确保新增数据是@Observed装饰的class，或者是makeV1Observed的返回值。完整例子可见", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E4%BC%A0%E9%80%92%E5%B5%8C%E5%A5%97%E7%B1%BB%E5%9E%8Bv1-v2",
            children: "传递嵌套类型（V1->V2）"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E4%BC%A0%E9%80%92%E5%B5%8C%E5%A5%97%E7%B1%BB%E5%9E%8Bv2-v1",
            children: "传递嵌套类型（V2->V1）"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let arr: Array<ArrayItem> = UIUtils.enableV2Compatibility(UIUtils.makeV1Observed(new ArrayItem()));\n\narr.push(new ArrayItem()); // 新增数据不是V1状态变量，所以不会具有V2观察能力\narr.push(UIUtils.makeV1Observed(new ArrayItem())); // 新增数据是V1的状态变量，默认在V2中可观察\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["对于built-in类型，如Array、Map、Set和Date，V1和V2都可以观察自身赋值和其API的调用所带来的变化。虽然开发者在不调用UIUtils.enableV2Compatibility时，也可以在一些简单场景下实现数据刷新，但是会带来双重代理导致性能较差的问题，所以建议开发者使用UIUtils.enableV2Compatibility(UIUtils.makeV1Observed())，具体例子见", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E4%BC%A0%E9%80%92%E5%86%85%E7%BD%AE%E7%B1%BB%E5%9E%8Bv1-v2",
            children: "传递内置类型（V1->V2）"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E4%BC%A0%E9%80%92%E5%86%85%E7%BD%AE%E7%B1%BB%E5%9E%8Bv2-v1",
            children: "传递内置类型（V2->V1）"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["对于有", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-data-object-state-management/arkts-track",
            children: "@Track"
          }), "装饰属性的类，非@Track装饰的属性在@ComponentV2中使用不会崩溃，在@Component中使用仍会崩溃。具体例子见", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E4%BC%A0%E9%80%92class%E7%B1%BB%E5%9E%8Bv1-v2",
            children: "传递class类型（V1->V2）"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E4%BC%A0%E9%80%92class%E7%B1%BB%E5%9E%8Bv2-v1",
            children: "传递class类型（V2->V1）"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者在使用这两个接口混用V1V2时，可遵循下图逻辑。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(73730)/* ["default"] */.A) + "",
        width: "1022",
        height: "950"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "v1中使用v2的自定义组件",
      children: "V1中使用V2的自定义组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "传递class类型v1-v2",
      children: "传递class类型（V1->V2）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "普通class"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下代码中，V1的状态变量在传递给V2时，调用enableV2Compatibility接口，使V1的变量observedClass在V2组件中有观察能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\nclass ObservedClass {\n  public name: string = 'Tom';\n}\n\n@Entry\n@Component\nstruct CompV1 {\n  @State observedClass: ObservedClass = new ObservedClass();\n\n  build() {\n    Column() {\n      Text(`@State observedClass: ${this.observedClass.name}`)\n        .onClick(() => {\n          this.observedClass.name += '!'; // 刷新\n        })\n      // 调用UIUtils.enableV2Compatibility使V1的状态变量可在@ComponentV2中有观察能力。\n      CompV2({ observedClass: UIUtils.enableV2Compatibility(this.observedClass) })\n    }\n  }\n}\n\n@ComponentV2\nstruct CompV2 {\n  @Param observedClass: ObservedClass = new ObservedClass();\n\n  build() {\n    // V1状态变量在使能V2观察能力后，可以在V2观察第一层的变化\n    Text(`@Param observedClass: ${this.observedClass.name}`)\n      .onClick(() => {\n        this.observedClass.name += '!'; // 刷新\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "@Observed+@Track装饰的class"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class类被@Observed修饰，从V1向V2传递使用enableV2Compatibility接口装饰的变量。该变量@Track装饰的属性在V1和V2中均可观察，但非@Track装饰的属性，在V1的UI中使用会导致运行时错误，而在V2中虽不会报错，但UI不会响应更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的例子中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "name是@Track装饰的属性，其在V1和V2均是可观察的。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "count是非@Track装饰的属性，其在V1和V2的UI中使用均是非法的。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在V1中，如果将非@Track装饰的属性使用在UI中，是非法行为，会有运行时报错。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在V2中，非@Track装饰的属性使用在UI不会有运行时报错，但不会响应更新。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\n@Observed\nclass ObservedClass {\n  @Track public name: string = 'a';\n  public count: number = 0;\n}\n\n@Entry\n@Component\nstruct CompV1 {\n  @State observedClass: ObservedClass = new ObservedClass();\n\n  build() {\n    Column() {\n      Text(`@State observedClass: ${this.observedClass.name}`)\n        .onClick(() => {\n          this.observedClass.name += 'a'; // 触发刷新\n        })\n      // 调用UIUtils.enableV2Compatibility使V1的状态变量可在@ComponentV2中有观察能力。\n      CompV2({ observedClass: UIUtils.enableV2Compatibility(this.observedClass) })\n    }\n  }\n}\n\n@ComponentV2\nstruct CompV2 {\n  @Param observedClass: ObservedClass = new ObservedClass();\n\n  build() {\n    Column() {\n      // V1状态变量在使能V2观察能力后，可以在V2观察第一层的变化\n      Text(`@Param observedClass: ${this.observedClass.name}`)\n        .onClick(() => {\n          this.observedClass.name += '!'; // 刷新\n        })\n\n      // 使用非@Track的变量在V2中不会崩溃，但不会响应更新\n      Text(`count: ${this.observedClass.count}`).onClick(() => {\n        this.observedClass.count++; // 不触发刷新\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "传递内置类型v1-v2",
      children: "传递内置类型（V1->V2）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以Array为例。建议调用enableV2Compatibility和makeV1Observed，避免造成V1和V2双重代理的问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct ArrayCompV1 {\n  @State arr: Array<number> = UIUtils.makeV1Observed([1, 2, 3]);\n\n  build() {\n    Column() {\n      Text(`V1 ${this.arr[0]}`).onClick(() => {\n        // 点击触发ArrayCompV1和ArrayCompV2变化\n        this.arr[0]++;\n      })\n      // 传递给V2时，发现当前代理是makeV1Observed包装的，且使能V2观察能力\n      // 在ArrayCompV2中Param不会再次包装代理，避免双重代理的问题\n      ArrayCompV2({ arr: UIUtils.enableV2Compatibility(this.arr) })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n\n@ComponentV2\nstruct ArrayCompV2 {\n  @Param arr: Array<number> = [1, 2, 3];\n\n  build() {\n    Column() {\n      Text(`V2 ${this.arr[0]}`).onClick(() => {\n        // 点击触发ArrayCompV1和ArrayCompV2变化\n        this.arr[0]++;\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "传递二维数组v1-v2",
      children: "传递二维数组（V1->V2）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的例子中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用makeV1Observed将二维数组的内层数组变成V1的状态变量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在传递给V2子组件时，调用enableV2Compatibility，使其具有V2的观察能力，也避免V1V2的双重代理。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\n@ComponentV2\nstruct Item {\n  @Require @Param itemArr: Array<string>;\n\n  build() {\n    Row() {\n      ForEach(this.itemArr, (item: string, index: number) => {\n        Text(`${index}: ${item}`)\n      }, (item: string) => item + Math.random())\n      // 新增数组元素\n      Button('@Param push')\n        .onClick(() => {\n          this.itemArr.push('Param');\n        })\n    }\n  }\n}\n\n@Entry\n@Component\nstruct IndexPage {\n  @State arr: Array<Array<string>> =\n    [UIUtils.makeV1Observed(['apple']), UIUtils.makeV1Observed(['banana']), UIUtils.makeV1Observed(['orange'])];\n\n  build() {\n    Column() {\n      ForEach(this.arr, (itemArr: Array<string>) => {\n        Item({ itemArr: UIUtils.enableV2Compatibility(itemArr) })\n      }, (itemArr: Array<string>) => JSON.stringify(itemArr) + Math.random())\n      Divider()\n      // 数组arr[0]新增元素\n      Button('@State push two-dimensional array item')\n        .onClick(() => {\n          this.arr[0].push('strawberry');\n        })\n      // 数组arr新增元素\n      Button('@State push array item')\n        .onClick(() => {\n          this.arr.push(UIUtils.makeV1Observed(['pear']));\n        })\n      // 修改数组项arr[0][0]的值\n      Button('@State change two-dimensional array first item')\n        .onClick(() => {\n          this.arr[0][0] = 'APPLE';\n        })\n      // 修改数组arr的第一个元素\n      Button('@State change array first item')\n        .onClick(() => {\n          this.arr[0] = UIUtils.makeV1Observed(['watermelon']);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "传递嵌套类型v1-v2",
      children: "传递嵌套类型（V1->V2）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者在状态管理V1中基于@Observed和@ObjectLink实现深度观测，以下代码示例是嵌套场景："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "普通outer类在传递给V2子组件NestedClassV2时，调用enableV2Compatibility，使其具有V2的观察能力。如果开发者在传递给V2时没有调用enableV2Compatibility，则@Param无法观察对象的属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\nclass ArrayItem {\n  public value: number = 0;\n\n  constructor(value: number) {\n    this.value = value;\n  }\n}\n\nclass Inner {\n  public innerValue: string = 'inner';\n  public arr: Array<ArrayItem>;\n\n  constructor(arr: Array<ArrayItem>) {\n    this.arr = arr;\n  }\n}\n\nclass Outer {\n  @Track public outerValue: string = 'outer';\n  @Track public inner: Inner;\n\n  constructor(inner: Inner) {\n    this.inner = inner;\n  }\n}\n\n@Entry\n@Component\nstruct NestedClassV1 {\n  // 需保证每一层都是V1的状态变量\n  @State outer: Outer =\n    UIUtils.makeV1Observed(new Outer(\n      UIUtils.makeV1Observed(new Inner(UIUtils.makeV1Observed([\n        UIUtils.makeV1Observed(new ArrayItem(1)),\n        UIUtils.makeV1Observed(new ArrayItem(2))\n      ])))\n    ));\n\n  build() {\n    Column() {\n      Text(`@State outer.outerValue can update ${this.outer.outerValue}`)\n        .fontSize(20)\n        .onClick(() => {\n          // @State可以观察第一层的变化\n          // 变化会通知@ObjectLink和@Param刷新\n          this.outer.outerValue += '!';\n        })\n\n      Text(`@State outer.inner.innerValue cannot update ${this.outer.inner.innerValue}`)\n        .fontSize(20)\n        .onClick(() => {\n          // @State无法观察第二层的变化\n          // 但该变化会被@ObjectLink和@Param观察\n          this.outer.inner.innerValue += '!';\n        })\n      // 将inner传递给@ObjectLink可观察inner属性的变化\n      NestedClassV1ObjectLink({ inner: this.outer.inner })\n      // 将开启enableV2Compatibility的数据传给V2\n      NestedClassV2({ outer: UIUtils.enableV2Compatibility(this.outer) })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n\n@Component\nstruct NestedClassV1ObjectLink {\n  @ObjectLink inner: Inner;\n\n  build() {\n    Text(`@ObjectLink inner.innerValue can update ${this.inner.innerValue}`)\n      .fontSize(20)\n      .onClick(() => {\n        // 可以触发刷新，和@Param是同一个对象的引用，@Param也会进行刷新\n        this.inner.innerValue += '!';\n      })\n  }\n}\n\n@ComponentV2\nstruct NestedClassV2 {\n  @Require @Param outer: Outer;\n\n  build() {\n    Column() {\n      Text(`@Param outer.outerValue can update ${this.outer.outerValue}`)\n        .fontSize(20)\n        .onClick(() => {\n          // 可以观察第一层的变化\n          this.outer.outerValue += '!';\n        })\n      Text(`@Param outer.inner.innerValue can update ${this.outer.inner.innerValue}`)\n        .fontSize(20)\n        .onClick(() => {\n          // 可以观察第二层的变化，和@ObjectLink是同一个对象的引用，也会触发刷新\n          this.outer.inner.innerValue += '!';\n        })\n\n      Repeat(this.outer.inner.arr)\n        .each((item: RepeatItem<ArrayItem>) => {\n          Text(`@Param outer.inner.arr index: ${item.index} item: ${item.item.value}`)\n        })\n\n      Button('@Param push').onClick(() => {\n        // outer已经使能了V2观察能力，对于新增加的数据，则默认开启V2观察能力\n        this.outer.inner.arr.push(UIUtils.makeV1Observed(new ArrayItem(20)));\n      })\n\n      Button('@Param change the last Item').onClick(() => {\n        // 可以观察最后一个数组项的属性变化\n        this.outer.inner.arr[this.outer.inner.arr.length - 1].value++;\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上例子刷新行为可总结为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@State仅能观察第一层的变化，如果要深度观察，需要传递给@ObjectLink。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@State的第二层的改变，虽然不能带来本层的刷新，但会被@ObjectLink和@Param观察到，并触发它们关联组件的刷新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@ObjectLink和@Param是同一个对象的引用，其属性改变也会带来其他引用的刷新。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "v2中使用v1的自定义组件",
      children: "V2中使用V1的自定义组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "传递class类型v2-v1",
      children: "传递class类型（V2->V1）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "普通class"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因为V1和V2观察能力不同，如果不调用UIUtils.enableV2Compatibility(UIUtils.makeV1Observed())直接进行数据传递，则会造成不刷新或者刷新行为不一致的问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\nclass ObservedClass {\n  public name: string = 'Tom';\n}\n\n@Entry\n@ComponentV2\nstruct CompV2 {\n  @Local observedClass: ObservedClass = UIUtils.enableV2Compatibility(UIUtils.makeV1Observed(new ObservedClass()));\n\n  build() {\n    Column() {\n      // @Local原本能力仅可观察自身\n      // 但是调用了UIUtils.makeV1Observed使其变成V1的状态变量，V1状态变量可观察第一层变化\n      // 又调用UIUtils.enableV2Compatibility使其在V2中可观察\n      // 所以当前可观察第一层属性的变化\n      Text(`@Local observedClass: ${this.observedClass.name}`)\n        .onClick(() => {\n          this.observedClass.name += '!'; // 刷新\n        })\n      // @ObjectLink可接收@Observed装饰class的实例或者makeV1Observed的返回值\n      CompV1({ observedClass: this.observedClass })\n    }\n  }\n}\n\n@Component\nstruct CompV1 {\n  @ObjectLink observedClass: ObservedClass;\n\n  build() {\n    // 在CompV1中可观察第一层的变化\n    Text(`@ObjectLink observedClass: ${this.observedClass.name}`)\n      .onClick(() => {\n        this.observedClass.name += '!'; // 刷新\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "@Observed+@Track装饰的class"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面例子中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ObservedClass是@Observed装饰的class，所以传递给V1调用UIUtils.enableV2Compatibility时，无需再调用UIUtils.makeV1Observed。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "只有@Track装饰的变量在V1和V2中可观察。非@Track的变量在V1中使用在UI上会有运行时报错，在V2中不会报错，但不会响应刷新。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\n@Observed\nclass ObservedClass {\n  @Track public name: string = 'a';\n  public count: number = 0;\n}\n\n@Entry\n@ComponentV2\nstruct CompV1 {\n  @Local observedClass: ObservedClass = UIUtils.enableV2Compatibility(new ObservedClass());\n\n  build() {\n    Column() {\n      Text(`name: ${this.observedClass.name}`).onClick(() => {\n        // 触发刷新\n        this.observedClass.name += 'a';\n      })\n      // 使用非@Track的变量在V2中不会崩溃，但不响应更新\n      Text(`count: ${this.observedClass.count}`).onClick(() => {\n        this.observedClass.count++;\n      })\n\n      CompV2({ observedClass: this.observedClass })\n    }\n  }\n}\n\n@Component\nstruct CompV2 {\n  @ObjectLink observedClass: ObservedClass;\n\n  build() {\n    Column() {\n      Text(`count: ${this.observedClass.name}`).onClick(() => {\n        // 触发刷新\n        this.observedClass.name += 'a';\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "传递内置类型v2-v1",
      children: "传递内置类型（V2->V1）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果在V2中定义@Local arr: Array<number> = UIUtils.enableV2Compatibility(UIUtils.makeV1Observed([1, 2, 3]))，由于用了@Local装饰器V2可以观察属性的变化。但是没有调用enableV2Compatibility和makeV1Observed，V1无法观察属性的变化。所以正确做法调用UIUtils.enableV2Compatibility(UIUtils.makeV1Observed())，使V1中可以观察属性的变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct ArrayCompV2 {\n  @Local arr: Array<number> = UIUtils.enableV2Compatibility(UIUtils.makeV1Observed([1, 2, 3]));\n\n  build() {\n    Column() {\n      Text(`V2 ${this.arr[0]}`).fontSize(20).onClick(() => {\n        // 点击触发V2变化，且同步给V1 @ObjectLink\n        this.arr[0]++;\n      })\n      ArrayCompV1({ arr: this.arr })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n\n@Component\nstruct ArrayCompV1 {\n  @ObjectLink arr: Array<number>;\n\n  build() {\n    Column() {\n      Text(`V1 ${this.arr[0]}`).fontSize(20).onClick(() => {\n        // 点击触发V1变化，且双向同步回给V2\n        this.arr[0]++;\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "传递二维数组v2-v1",
      children: "传递二维数组（V2->V1）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的例子中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用makeV1Observed将二维数组的内层数组变成V1的状态变量。调用enableV2Compatibility，使其具有V2的观察能力，也避免V1和V2的双重代理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在V1中，使用@ObjectLink接收二维数组的内层数组，因为其为makeV1Observed的返回值，所以点击Button('@ObjectLink push')，会正常响应刷新。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\n@Component\nstruct Item {\n  @ObjectLink itemArr: Array<string>;\n\n  build() {\n    Row() {\n      ForEach(this.itemArr, (item: string, index: number) => {\n        Text(`${index}: ${item}`)\n      }, (item: string) => item + Math.random())\n      // 新增数组元素\n      Button('@ObjectLink push')\n        .onClick(() => {\n          this.itemArr.push('ObjectLink');\n        })\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct IndexPage {\n  @Local arr: Array<Array<string>> =\n    UIUtils.enableV2Compatibility(UIUtils.makeV1Observed([UIUtils.makeV1Observed(['apple']),\n      UIUtils.makeV1Observed(['banana']), UIUtils.makeV1Observed(['orange'])]));\n\n  build() {\n    Column() {\n      ForEach(this.arr, (itemArr: Array<string>) => {\n        Item({ itemArr: itemArr })\n      }, (itemArr: Array<string>) => JSON.stringify(itemArr) + Math.random())\n      Divider()\n      // 数组arr[0]新增元素\n      Button('@Local push two-dimensional array item')\n        .onClick(() => {\n          this.arr[0].push('strawberry');\n        })\n      // 数组arr新增元素\n      Button('@Local push array item')\n        .onClick(() => {\n          this.arr.push(UIUtils.makeV1Observed(['pear']));\n        })\n      // 修改数组项arr[0][0]的值\n      Button('@Local change two-dimensional array first item')\n        .onClick(() => {\n          this.arr[0][0] = 'APPLE';\n        })\n      // 修改数组arr的第一个元素\n      Button('@Local change array first item')\n        .onClick(() => {\n          this.arr[0] = UIUtils.makeV1Observed(['watermelon']);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "传递嵌套类型v2-v1",
      children: "传递嵌套类型（V2->V1）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面例子中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NestedClassV2中outer调用了UIUtils.enableV2Compatibility，且每一层都是UIUtils.makeV1Observed的返回值，所以outer在V2中有了深度观察的能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V1中仅能观察第一层的变化，所以需要多层自定义组件，且每层都配合使用@ObjectLink来接收，从而实现深度观察能力。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\nclass ArrayItem {\n  public value: number = 0;\n\n  constructor(value: number) {\n    this.value = value;\n  }\n}\n\nclass Inner {\n  public innerValue: string = 'inner';\n  public arr: Array<ArrayItem>;\n\n  constructor(arr: Array<ArrayItem>) {\n    this.arr = arr;\n  }\n}\n\nclass Outer {\n  @Track public outerValue: string = 'out';\n  @Track public inner: Inner;\n\n  constructor(inner: Inner) {\n    this.inner = inner;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct NestedClassV2 {\n  // 需保证每一层都是V1的状态变量\n  @Local outer: Outer = UIUtils.enableV2Compatibility(\n    UIUtils.makeV1Observed(new Outer(\n      UIUtils.makeV1Observed(new Inner(UIUtils.makeV1Observed([\n        UIUtils.makeV1Observed(new ArrayItem(1)),\n        UIUtils.makeV1Observed(new ArrayItem(2))\n      ])))\n    )));\n\n  build() {\n    Column() {\n      Text(`@Local outer.outerValue can update ${this.outer.outerValue}`)\n        .fontSize(20)\n        .onClick(() => {\n          // 可观察第一层的变化\n          this.outer.outerValue += '!';\n        })\n\n      Text(`@Local outer.inner.innerValue can update ${this.outer.inner.innerValue}`)\n        .fontSize(20)\n        .onClick(() => {\n          // 可观察第二层的变化\n          this.outer.inner.innerValue += '!';\n        })\n      // 将inner传递给@ObjectLink可观察inner属性的变化\n      NestedClassV1ObjectLink({ inner: this.outer.inner })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n\n@Component\nstruct NestedClassV1ObjectLink {\n  @ObjectLink inner: Inner;\n\n  build() {\n    Column() {\n      Text(`@ObjectLink inner.innerValue can update ${this.inner.innerValue}`)\n        .fontSize(20)\n        .onClick(() => {\n          // 可以触发刷新\n          this.inner.innerValue += '!';\n        })\n      NestedClassV1ObjectLinkArray({ arr: this.inner.arr })\n    }\n  }\n}\n\n@Component\nstruct NestedClassV1ObjectLinkArray {\n  @ObjectLink arr: Array<ArrayItem>;\n\n  build() {\n    Column() {\n      ForEach(this.arr, (item: ArrayItem) => {\n        NestedClassV1ObjectLinkArrayItem({ item: item })\n      }, (item: ArrayItem, index: number) => {\n        return item.value.toString() + index.toString();\n      })\n\n      Button('@ObjectLink push').onClick(() => {\n        this.arr.push(UIUtils.makeV1Observed(new ArrayItem(20)));\n      })\n\n      Button('@ObjectLink change the last Item').onClick(() => {\n        // 在NestedClassV1ObjectLinkArrayItem中可以观察最后一个数组项的属性变化\n        this.arr[this.arr.length - 1].value++;\n      })\n    }\n  }\n}\n\n@Component\nstruct NestedClassV1ObjectLinkArrayItem {\n  @ObjectLink item: ArrayItem;\n\n  build() {\n    Text(`@ObjectLink outer.inner.arr item: ${this.item.value}`)\n  }\n}\n"
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
73730(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477633-ca306dd09a453b13b522ad04c8af9111.png");

},
100131(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
102675(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
983483(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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