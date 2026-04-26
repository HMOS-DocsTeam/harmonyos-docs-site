"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["725968"], {
378681(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_ui_paradigm_basic_syntax_arkts_custom_components_arkts_component_reusable_arkts_new_reusablev_2_arkts_new_reusablev_2_md_a6e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-ui-paradigm-basic-syntax-arkts-custom-components-arkts-component-reusable-arkts-new-reusablev-2-arkts-new-reusablev-2-md-a6e.json
var site_docs_arkui_arkts_ui_development_arkts_ui_paradigm_basic_syntax_arkts_custom_components_arkts_component_reusable_arkts_new_reusablev_2_arkts_new_reusablev_2_md_a6e_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-new-reusablev2/arkts-new-reusablev2","title":"@ReusableV2装饰器：V2组件复用","description":"为了降低反复创建销毁自定义组件带来的性能开销，开发者可以使用@ReusableV2装饰@ComponentV2装饰的自定义组件，达成组件复用的效果。","source":"@site/docs/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-new-reusablev2/arkts-new-reusablev2.md","sourceDirName":"arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-new-reusablev2","slug":"/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-new-reusablev2/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-new-reusablev2/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"@ReusableV2装饰器：V2组件复用","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-reusablev2","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"@Reusable装饰器：V1组件复用","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable/"},"next":{"title":"自定义组件冻结功能（V1）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-freeze/arkts-custom-components-freeze/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-new-reusablev2/arkts-new-reusablev2.md


const frontMatter = {
	title: '@ReusableV2装饰器：V2组件复用',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-reusablev2',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '@ReusableV2装饰器：V2组件复用';

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
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "使用限制",
  "id": "使用限制",
  "level": 2
}, {
  "value": "回收与复用的生命周期",
  "id": "回收与复用的生命周期",
  "level": 2
}, {
  "value": "复用阶段的冻结",
  "id": "复用阶段的冻结",
  "level": 2
}, {
  "value": "复用前的组件内状态变量重置",
  "id": "复用前的组件内状态变量重置",
  "level": 2
}, {
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "在if组件中使用",
  "id": "在if组件中使用",
  "level": 3
}, {
  "value": "在Repeat组件中使用",
  "id": "在repeat组件中使用",
  "level": 3
}, {
  "value": "在Repeat组件非懒加载场景的each属性中使用",
  "id": "在repeat组件非懒加载场景的each属性中使用",
  "level": 3
}, {
  "value": "在ForEach组件中使用",
  "id": "在foreach组件中使用",
  "level": 3
}, {
  "value": "在LazyForEach组件中使用",
  "id": "在lazyforeach组件中使用",
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
        id: "reusablev2装饰器v2组件复用",
        children: "@ReusableV2装饰器：V2组件复用"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了降低反复创建销毁自定义组件带来的性能开销，开发者可以使用@ReusableV2装饰", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#componentv2",
        children: "@ComponentV2"
      }), "装饰的自定义组件，达成组件复用的效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在阅读本文前，建议提前阅读：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable",
        children: "@Reusable装饰器：V1组件复用"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(242669)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，可以使用@ReusableV2装饰@ComponentV2装饰的自定义组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，该装饰器支持在元服务中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@ReusableV2用于装饰V2的自定义组件，表明该自定义组件具有被复用的能力："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@ReusableV2仅能装饰V2的自定义组件，即@ComponentV2装饰的自定义组件。并且仅能将@ReusableV2装饰的自定义组件作为V2自定义组件的子组件使用。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["@ReusableV2同样提供了", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttorecycle10",
          children: "aboutToRecycle"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttoreuse18",
          children: "aboutToReuse"
        }), "的生命周期，在组件被回收时调用aboutToRecycle，在组件被复用时调用aboutToReuse，但与@Reusable不同的是，aboutToReuse没有入参。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在回收阶段，会递归地调用所有子组件的aboutToRecycle回调（即使子组件未被标记可复用）；在复用阶段，会递归地调用所有子组件的aboutToReuse回调（即使子组件未被标记可复用）。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["@ReusableV2装饰的自定义组件会在被回收期间保持冻结状态，即无法触发UI刷新、无法触发", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-monitor",
          children: "@Monitor"
        }), "回调，与", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-freeze/arkts-custom-components-freezev2",
          children: "freezeWhenInactive"
        }), "标记位不同的是，在解除冻结状态后，不会触发延后的刷新。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["@ReusableV2装饰的自定义组件会在复用时自动重置组件内状态变量的值、重新计算组件内", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-computed",
          children: "@Computed"
        }), "以及与之相关的@Monitor。不建议开发者在aboutToRecycle中更改组件内状态变量，详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%A4%8D%E7%94%A8%E5%89%8D%E7%9A%84%E7%BB%84%E4%BB%B6%E5%86%85%E7%8A%B6%E6%80%81%E5%8F%98%E9%87%8F%E9%87%8D%E7%BD%AE",
          children: "复用前的组件内状态变量重置"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["V1和V2的复用组件可在一定规则下混用，详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E4%BD%BF%E7%94%A8%E9%99%90%E5%88%B6",
          children: "使用限制"
        }), "第二点。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不建议开发者嵌套滥用@ReusableV2装饰器，这可能会导致复用效率降低以及内存开销变大。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "装饰器说明",
      children: "装饰器说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "@ReusableV2装饰器"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰器参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "可装饰的组件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@ComponentV2装饰的自定义组件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰器作用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明该组件可被复用"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ReusableV2 // 装饰ComponentV2的自定义组件\n@ComponentV2\nstruct ReusableV2Component {\n  @Local message: string = 'Hello World';\n  build () {\n    Column() {\n      Text(this.message)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["reuse、ReuseOptions、ReuseIdCallback的接口说明参考API文档：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/other-property/ts-universal-attributes-reuse/ts-universal-attributes-reuse",
        children: "复用选项"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct Index {\n  build() {\n    Column() {\n      ReusableV2Component()\n        .reuse({ reuseId: () => 'reuseComponent' }) // 使用'reuseComponent'作为reuseId\n      ReusableV2Component()\n        .reuse({ reuseId: () => '' }) // 使用空字符串将默认使用组件名'ReusableV2Component'作为reuseId\n      ReusableV2Component() // 未指定reuseId将默认使用组件名'ReusableV2Component'作为reuseId\n    }\n  }\n}\n\n@ReusableV2\n@ComponentV2\nstruct ReusableV2Component {\n  build() {\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用限制",
      children: "使用限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "仅能将@ReusableV2装饰的自定义组件作为V2自定义组件的子组件使用。如果在V1的自定义组件中使用V2的复用组件将导致编译期报错，编译期无法校验到的复杂场景下将会有运行时报错。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@ComponentV2\nstruct Index {\n  build() {\n    Column() {\n      ReusableV2Component() // 正确用法\n    }\n  }\n}\n\n@ReusableV2\n@ComponentV2\nstruct ReusableV2Component {\n  build() {\n  }\n}\n\n@Builder\nfunction V2ReusableBuilder() {\n  ReusableV2Component()\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "V1和V2支持部分混用场景。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "下文提到的描述对应关系如下表："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "对应组件类型"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "V1普通组件"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.a, {
                  href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#component",
                  children: "@Component"
                }), "装饰的struct。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "V2普通组件"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "@ComponentV2装饰的struct。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "V1复用组件"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "@Reusable@Component装饰的struct。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "V2复用组件"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "@ReusableV2@ComponentV2装饰的struct。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "下面的表展示了V1和V2的混用支持关系，每行的含义为第一列作为父组件，能否将后面列的组件作为子组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以第一行V1普通组件为例，可以将V1普通组件、V2普通组件以及V1复用组件作为子组件，但无法将V2复用组件作为子组件。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "混用支持关系"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "V1普通组件"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "V2普通组件"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "V1复用组件"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "V2复用组件"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "V1普通组件"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "支持"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "支持"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "支持"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "不支持，编译报错"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "V2普通组件"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "支持"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "支持"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "不支持，编译告警，实际使用子组件不创建"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "支持"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "V1复用组件"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "支持"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["支持，需要使用API version 18及以上的SDK，否则会有运行时报错，从API version 23开始，将返回错误码", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-statemanagement/errorcode-statemanagement#section140113-%E5%A4%8D%E7%94%A8componentv2%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E4%BD%86%E5%B7%A5%E5%85%B7%E9%93%BE%E7%89%88%E6%9C%AC%E8%BF%87%E4%BD%8E",
                  children: "140113"
                })]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "支持"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "不支持，编译报错"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "V2复用组件"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "支持"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "支持"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "不支持，编译报错"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "支持"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据上表，仅支持12种可能的父子关系，不推荐开发者高度嵌套可复用组件，这会造成复用效率降低。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["V2的复用组件当前不支持直接用于", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-repeat/ts-rendering-control-repeat",
            children: "Repeat"
          }), "的template中，但是可以用在template中的V2自定义组件中。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@ComponentV2\nstruct Index {\n  @Local arr: number[] = [1, 2, 3, 4, 5];\n\n  build() {\n    Column() {\n      List() {\n        Repeat(this.arr)\n          .each(() => {\n          })\n          .virtualScroll()\n          .templateId(() => 'a')\n          .template('a', (ri) => {\n            ListItem() {\n              Column() {\n                NormalV2Component({ val: ri.item }) // 支持普通V2自定义组件下面包含V2复用组件\n              }\n            }\n          })\n      }\n    }\n  }\n}\n\n@ComponentV2\nstruct NormalV2Component {\n  @Require @Param val: number;\n\n  build() {\n    ReusableV2Component({ val: this.val })\n  }\n}\n\n@Builder\nfunction ReusableV2Builder(param: number) {\n  ReusableV2Component({ val: param })\n}\n\n@ReusableV2\n@ComponentV2\nstruct ReusableV2Component {\n  @Require @Param val: number;\n\n  build() {\n    Column() {\n      Text(`val: ${this.val}`)\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "回收与复用的生命周期",
      children: "回收与复用的生命周期"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@ReusableV2提供了aboutToRecycle以及aboutToReuse的生命周期，当组件被回收时触发aboutToRecycle，当组件被复用时触发aboutToReuse。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以if的使用场景为例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[Sample_Reusablev2]';\nconst DOMAIN = 0xF811;\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local condition1: boolean = false;\n  @Local condition2: boolean = true;\n\n  build() {\n    Column({ space: 10 }) {\n      Button('step1. appear')\n        .width('60%')\n        .onClick(() => {\n          this.condition1 = true;\n        })\n      Button('step2. recycle')\n        .width('60%')\n        .onClick(() => {\n          this.condition2 = false;\n        })\n      Button('step3. reuse')\n        .width('60%')\n        .onClick(() => {\n          this.condition2 = true;\n        })\n      Button('step4. disappear')\n        .width('60%')\n        .onClick(() => {\n          this.condition1 = false;\n        })\n      if (this.condition1) {\n        NormalV2Component({ condition: this.condition2 })\n      }\n    }\n    .width('100%')\n  }\n}\n\n@ComponentV2\nstruct NormalV2Component {\n  @Require @Param condition: boolean;\n\n  build() {\n    if (this.condition) {\n      ReusableV2Component()\n    }\n  }\n}\n\n@ReusableV2\n@ComponentV2\nstruct ReusableV2Component {\n  aboutToAppear() {\n    hilog.info(DOMAIN, TAG, 'ReusableV2Component aboutToAppear called'); // 组件创建时调用\n  }\n\n  aboutToDisappear() {\n    hilog.info(DOMAIN, TAG, 'ReusableV2Component aboutToDisappear called'); // 组件销毁时调用\n  }\n\n  aboutToRecycle() {\n    hilog.info(DOMAIN, TAG, 'ReusableV2Component aboutToRecycle called'); // 组件回收时调用\n  }\n\n  aboutToReuse() {\n    hilog.info(DOMAIN, TAG, 'ReusableV2Component aboutToReuse called'); // 组件复用时调用\n  }\n\n  build() {\n    Column() {\n      Text('ReusableV2Component')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议按下面顺序进行操作："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击step1. appear，此时condition1变为true，Index中的if组件切换分支，创建出NormalV2Component，由于condition2初始值为true，所以NormalV2Component中的if条件满足，尝试创建ReusableV2Component。此时复用池中无元素，因此会创建ReusableV2Component，并回调aboutToAppear的方法，输出ReusableV2Component aboutToAppear called的日志。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击step2. recycle，此时condition2变为false，通过@Param同步给NormalV2Component，if条件切换，由于ReusableV2Component使用了@ReusableV2，因此会将该组件回收至复用池而不是销毁，回调aboutToRecycle的方法并输出ReusableV2Component aboutToRecycle called的日志。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击step3. reuse，此时condition2变为true，通过@Param传递给NormalV2Component，if条件切换，由于ReusableV2Component使用了@ReusableV2，因此在创建该组件时尝试去复用池中寻找。此时复用池中有第二步放入的组件实例，因此从复用池中取出复用，回调aboutToReuse方法并输出ReusableV2Component aboutToReuse called的日志。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击step4. disappear，此时condition1变为false，Index组件中的if组件切换分支，销毁NormalV2Component，此时ReusableV2Component因为父组件销毁，所以会被一起销毁，回调aboutToDisappear的方法并输出ReusableV2Component aboutToDisappear called的日志。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "倘若该复用组件下有子组件时，会在回收和复用时递归调用子组件的aboutToRecycle和aboutToReuse（与子组件是否被标记复用无关），直到遍历完所有的孩子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(712184)/* ["default"] */.A) + "",
        width: "287",
        height: "291"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "复用阶段的冻结",
      children: "复用阶段的冻结"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在之前的复用中，V1组件在复用池中仍能响应更新，这会对性能带来一定的负面影响，需要开发者使用组件冻结能力，才能够使V1组件在复用池中时不响应更新。针对这一点，V2组件在复用时将会被自动冻结，不会响应在回收期间发生的变化。这一个期间包括aboutToRecycle，即aboutToRecycle中的修改不会刷新到UI上，也不会触发@Computed以及@Monitor。冻结状态将持续到aboutToReuse前，即aboutToReuse及之后的变量更改，才会正常触发UI刷新、@Computed重新计算以及@Monitor的调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以if的使用场景为例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[Sample_Reusablev2]';\nconst DOMAIN = 0xF811;\n\n@ObservedV2\nclass Info {\n  @Trace public age: number = 25;\n}\n\nconst info: Info = new Info();\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local condition: boolean = true;\n\n  build() {\n    Column({ space: 10 }) {\n      Button('Reuse/Recycle')\n        .width('60%')\n        .onClick(() => {\n          this.condition = !this.condition;\n        })\n      Button('Change value')\n        .width('60%')\n        .onClick(() => {\n          info.age++;\n        })\n      if (this.condition) {\n        ReusableV2Component()\n      }\n    }\n    .width('100%')\n  }\n}\n\n@ReusableV2\n@ComponentV2\nstruct ReusableV2Component {\n  @Local info: Info = info; // 仅做演示使用，并不建议@Local赋值全局变量\n\n  @Monitor('info.age')\n  onValChange() {\n    hilog.info(DOMAIN, TAG, 'info.age change');\n  }\n\n  aboutToRecycle() {\n    hilog.info(DOMAIN, TAG, 'aboutToRecycle');\n    this.info.age++;\n  }\n\n  aboutToReuse() {\n    hilog.info(DOMAIN, TAG, 'aboutToReuse');\n    this.info.age++;\n  }\n\n  onRender(): string {\n    hilog.info(DOMAIN, TAG, 'info.age onRender');\n    return this.info.age.toString();\n  }\n\n  build() {\n    Column() {\n      Text(this.onRender())\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议按如下步骤进行操作："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击Change value按钮，可以观察到UI变化，@Monitor触发并输出日志info.age change以及info.age onRender，说明此时能够正常监听到变化以及触发UI刷新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击Reuse/Recycle按钮，此时调用aboutToRecycle回调并输出aboutToRecycle的日志，但@Monitor不被触发，且onRender方法不被回调。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击Change value按钮，UI无变化，@Monitor不触发且onRender方法不被回调。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击Reuse/Recycle按钮，此时调用aboutToReuse回调并输出aboutToReuse的日志，@Monitor触发并输出日志info.age change且onRender方法回调输出info.age onRender，UI发生变化。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(909174)/* ["default"] */.A) + "",
        width: "1758",
        height: "743"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果去掉aboutToReuse方法中的自增操作，则上述第四步不会触发@Monitor回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在复杂的混用场景中，是否冻结的规则可以总结为以下两点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V1的组件根据是否开启组件冻结freezeWhenInactive决定。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V2的组件自动被冻结。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "复用前的组件内状态变量重置",
      children: "复用前的组件内状态变量重置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "与@Reusable不同的是，@ReusableV2在复用前会重置组件中的状态变量以及相关的@Computed、@Monitor的内容。在复用的过程当中，所有的V2自定义组件，无论是否被标记了@ReusableV2，都会经历这一个重置过程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重置会按照变量在组件中定义的顺序按照下面的规则依次进行："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "装饰器"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "重置方法"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local",
              children: "@Local"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直接使用定义时的初始值重新赋值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param",
              children: "@Param"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果有外部传入则使用外部传入值重新赋值，否则用本地初始值重新赋值。注意：@Once装饰的变量同样会被重置初始化一次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-event",
              children: "@Event"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果有外部传入则使用外部传入值重新赋值，否则用本地初始值重新赋值。如果本地没有初始值，则生成默认的空实现。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-provider-and-consumer",
              children: "@Provider"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直接使用定义时的初始值重新赋值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-provider-and-consumer",
              children: "@Consumer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果有对应的@Provider则直接使用@Provider对应的值，否则使用本地初始值重新赋值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Computed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用当前最新的值重新计算一次，如果使用到的变量还未被重置，将会使用重置前的值，因此推荐开发者将@Computed定义在所使用的变量之后。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Monitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在上述所有变量重置完成之后触发。重置过程中产生的变量变化不会触发@Monitor回调，仅更新IMonitorValue中的before值。重置过程中不产生变化的赋值不会触发@Monitor的重置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "常量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包括readonly的常量，不重置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的例子展示了重置的一些效果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[Sample_Reusablev2]';\nconst DOMAIN = 0xF811;\n\n@ObservedV2\nclass Info {\n  @Trace public age: number;\n\n  constructor(age: number) {\n    this.age = age;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local local: number = 0;\n  @Provider('inherit') inheritProvider: number = 100;\n  @Local condition: boolean = true;\n\n  build() {\n    Column({ space: 10 }) {\n      Button('Recycle/Reuse')\n        .onClick(() => {\n          this.condition = !this.condition;\n        })\n      Column({ space: 10 }) {\n        Text('Variables of parent component')\n        Text(`local: ${this.local}`)\n          .onClick(() => {\n            this.local++;\n          })\n        Text(`inheritProvider: ${this.inheritProvider}`)\n          .onClick(() => {\n            this.inheritProvider++;\n          })\n      }\n      .width('80%')\n      .borderWidth(2)\n\n      if (this.condition) {\n        ReusableV2Component({\n          paramOut: this.local,\n          paramOnce: this.local,\n          changeParam: () => {\n            this.local++;\n          }\n        })\n      }\n    }\n    .width('100%')\n  }\n}\n\n@ReusableV2\n@ComponentV2\nstruct ReusableV2Component {\n  @Local val: number = 0;\n  @Local info: Info = new Info(25);\n  @Param paramLocal: number = 1;\n  @Require @Param paramOut: number;\n  @Require @Param @Once paramOnce: number;\n  @Event changeParam: () => void;\n  @Provider('selfProvider') selfProvider: number = 0;\n  @Consumer('inherit') inheritConsumer: number = 0;\n  @Consumer('selfConsumer') selfConsumer: number = 0;\n  noDecoVariable: number = 0; // 未加装饰器，被视作常量\n  noDecoInfo: Info = new Info(30); // 未加装饰器，被视作常量\n  readonly readOnlyVariable: number = 0; // readonly常量\n\n  @Computed\n  get plusParam() {\n    return this.paramLocal + this.paramOut + this.paramOnce;\n  }\n\n  @Monitor('val')\n  onValChange(monitor: IMonitor) {\n    hilog.info(DOMAIN, TAG, `val change from ${monitor.value()?.before} to ${monitor.value()?.now}`);\n  }\n\n  @Monitor('plusParam')\n  onPlusParamChange(monitor: IMonitor) {\n    hilog.info(DOMAIN, TAG, `plusParam change from ${monitor.value()?.before} to ${monitor.value()?.now}`);\n  }\n\n  build() {\n    Column({ space: 10 }) {\n      Column({ space: 10 }) {\n        Text('Variables reset to local initial values')\n        Text(`val: ${this.val}`)\n          .onClick(() => {\n            this.val++;\n          })\n        Text(`info.age: ${this.info.age}`)\n          .onClick(() => {\n            this.info.age++;\n          })\n        Text(`paramLocal: ${this.paramLocal}`)\n          .onClick(() => {\n            /* 无外部传入的Local无法本地修改 */\n          })\n        Text(`selfProvider: ${this.selfProvider}`)\n          .onClick(() => {\n            this.selfProvider++;\n          })\n        Text(`selfConsumer: ${this.selfConsumer}`)\n          .onClick(() => {\n            this.selfConsumer++;\n          })\n      }\n      .width('80%')\n      .borderWidth(2)\n\n      Column({ space: 10 }) {\n        Text('Reset to an external variable')\n        Text(`paramOut: ${this.paramOut}`)\n          .onClick(() => {\n            this.changeParam();\n          })\n        Text(`paramOnce: ${this.paramOnce}`)\n          .onClick(() => {\n            this.paramOnce++;\n          })\n      }\n      .width('80%')\n      .borderWidth(2)\n\n      Column({ space: 10 }) {\n        Text('Depending on the parent component')\n        Text(`inheritConsumer: ${this.inheritConsumer}`)\n          .onClick(() => {\n            this.inheritConsumer++;\n          })\n        Text(`plusParam: ${this.plusParam}`)\n      }\n      .width('80%')\n      .borderWidth(2)\n\n      Column({ space: 10 }) {\n        Text('Not reset')\n        Text(`noDecoVariable: ${this.noDecoVariable}`)\n        Text(`noDecoInfo.age: ${this.noDecoInfo.age}`)\n          .onClick(() => {\n            this.noDecoInfo.age++;\n          }) // 能够触发刷新但是复用时不会被重置\n        Text(`readOnlyVariable: ${this.readOnlyVariable}`)\n      }\n      .width('80%')\n      .borderWidth(2)\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以尝试点击各个变量，并点击Recycle/Reuse按钮查看复用后的重置情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(772319)/* ["default"] */.A) + "",
        width: "285",
        height: "525"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要注意的是，上面的例子中noDecoInfo未被重置，如果存在监听noDecoInfo.age的@Monitor，因为noDecoInfo本身未产生变化，所以该@Monitor也不会被重置，因此在后续第一次更改noDecoInfo.age时，IMonitorValue的before值将不会被重置，仍是复用前的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将上面的例子简化可得下面的例子："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[Sample_Reusablev2]';\nconst DOMAIN = 0xF811;\n\n@ObservedV2\nclass Info {\n  @Trace public age: number;\n\n  constructor(age: number) {\n    this.age = age;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local condition: boolean = true;\n\n  build() {\n    Column({ space: 10 }) {\n      Button('Recycle/Reuse')\n        .width('60%')\n        .onClick(() => {\n          this.condition = !this.condition;\n        })\n      if (this.condition) {\n        ReusableV2Component()\n      }\n    }\n    .width('100%')\n  }\n}\n\n@ReusableV2\n@ComponentV2\nstruct ReusableV2Component {\n  noDecoInfo: Info = new Info(30); // 未加装饰器，被视作常量\n\n  @Monitor('noDecoInfo.age')\n  onAgeChange(monitor: IMonitor) {\n    hilog.info(DOMAIN, TAG, `age change from ${monitor.value()?.before} to ${monitor.value()?.now}`);\n  }\n\n  aboutToRecycle() {\n    this.noDecoInfo.age = 25;\n  }\n\n  aboutToReuse() {\n    this.noDecoInfo.age = 35;\n  }\n\n  build() {\n    Column() {\n      Column() {\n        Text(`noDecoInfo.age: ${this.noDecoInfo.age}`)\n          .onClick(() => {\n            this.noDecoInfo.age++;\n          }) // 能够触发刷新但是不会被重置\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议按照下列步骤进行操作："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击noDecoInfo.age: 30，UI刷新为noDecoInfo.age: 31，@Monitor触发并输出日志age change from 30 to 31。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击Recycle/Reuse两次，UI刷新为noDecoInfo.age: 35，@Monitor触发并输出日志age change from 31 to 35。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击noDecoInfo.age: 35，UI刷新为noDecoInfo.age: 36，@Monitor触发并输出日志age change from 35 to 36。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(758799)/* ["default"] */.A) + "",
        width: "1758",
        height: "743"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于冻结机制的存在，在aboutToRecycle中赋值不会被@Monitor观察到。而在经历完变量重置后，变量又会被赋予新的值，因此对于组件内状态变量来说，在aboutToRecycle中赋值不会有明显的效果；而常量（例如上面的noDecoInfo）由于冻结机制的存在，在aboutToRecycle中更改age也不会被观察到，并且因为不会被重置，所以相关的@Monitor也不会被重置，即这里的age值本身未被重置，也就不会重置与之绑定的@Monitor。最终表现出来的现象即：第二步回调的@Monitor中，monitor.value()?.before得到的值为31，而非age的初始值30。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["针对这一现象，推荐开发者在复用的场景减少使用类似的常量对象包含", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
        children: "@Trace"
      }), "属性的写法，以确保复用场景的功能符合预期。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在if组件中使用",
      children: "在if组件中使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过改变if组件的条件可以控制组件回收/复用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[Sample_Reusablev2]';\nconst DOMAIN = 0xF811;\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local condition: boolean = true;\n\n  build() {\n    Column({ space: 10 }) {\n      Button('Recycle/Reuse')\n        .width('60%')\n        .onClick(() => {\n          this.condition = !this.condition;\n        }) // 点击切换回收/复用状态\n      if (this.condition) {\n        ReusableV2Component()\n      }\n    }\n    .width('100%')\n  }\n}\n\n@ReusableV2\n@ComponentV2\nstruct ReusableV2Component {\n  @Local message: string = 'Hello World';\n\n  aboutToRecycle() {\n    hilog.info(DOMAIN, TAG, 'ReusableV2Component aboutToRecycle'); // 回收时被调用\n  }\n\n  aboutToReuse() {\n    hilog.info(DOMAIN, TAG, 'ReusableV2Component aboutToReuse'); // 复用时被调用\n  }\n\n  build() {\n    Column() {\n      Text(this.message)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(303291)/* ["default"] */.A) + "",
        width: "1758",
        height: "743"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在repeat组件中使用",
      children: "在Repeat组件中使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Repeat组件懒加载场景中，将会优先使用Repeat组件的缓存池，正常滑动场景、更新场景不涉及组件的回收与复用。当Repeat的缓存池需要扩充时将会向自定义组件要求新的子组件，此时如果复用池中有可复用的节点，将会进行复用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的例子中，先点击Change condition会让3个节点进入复用池，而后向下滑动List组件时，可以观察到日志输出ReusableV2Component aboutToReuse，表明Repeat可以使用自定义组件的复用池填充自己的缓存池。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[Sample_Reusablev2]';\nconst DOMAIN = 0xF811;\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local condition: boolean = true;\n  @Local simpleList: number[] = [];\n\n  aboutToAppear(): void {\n    for (let i = 0; i < 100; i++) {\n      this.simpleList.push(i);\n    }\n  }\n\n  build() {\n    Column() {\n      Button('Change condition')\n        .onClick(() => {\n          this.condition = !this.condition;\n        })\n      if (this.condition) {\n        // 此处仅做演示使用，让复用池中填充3个组件\n        ReusableV2Component({ num: 0 })\n        ReusableV2Component({ num: 0 })\n        ReusableV2Component({ num: 0 })\n      }\n      List({ space: 10 }) {\n        Repeat(this.simpleList)\n          .virtualScroll()\n          .each((obj: RepeatItem<number>) => {\n            ListItem() {\n              Column() {\n                ReusableV2Component({ num: obj.item })\n              }\n            }\n            .width('100%')\n          })\n      }.height('50%')\n      .cachedCount(2)\n    }\n  }\n}\n\n@ReusableV2\n@ComponentV2\nstruct ReusableV2Component {\n  @Require @Param num: number;\n\n  aboutToAppear() {\n    hilog.info(DOMAIN, TAG, 'ReusableV2Component aboutToAppear');\n  }\n\n  aboutToRecycle() {\n    hilog.info(DOMAIN, TAG, 'ReusableV2Component aboutToRecycle');\n  }\n\n  aboutToReuse() {\n    hilog.info(DOMAIN, TAG, 'ReusableV2Component aboutToReuse');\n  }\n\n  build() {\n    Column() {\n      Text(`${this.num}`).fontSize(50)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(178775)/* ["default"] */.A) + "",
        width: "1758",
        height: "743"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在repeat组件非懒加载场景的each属性中使用",
      children: "在Repeat组件非懒加载场景的each属性中使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Repeat组件非懒加载场景中，会在删除/创建子树时触发回收/复用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[Sample_Reusablev2]';\nconst DOMAIN = 0xF811;\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local simpleList: number[] = [1, 2, 3, 4, 5];\n  @Local condition: boolean = true;\n\n  build() {\n    Column({ space: 10 }) {\n      Button('Delete/Create Repeat')\n        .width('60%')\n        .onClick(() => {\n          this.condition = !this.condition;\n        })\n      Button('Add element')\n        .width('60%')\n        .onClick(() => {\n          this.simpleList.push(this.simpleList.length + 1);\n        })\n      Button('Delete element')\n        .width('60%')\n        .onClick(() => {\n          this.simpleList.pop();\n        })\n      Button('Change element')\n        .width('60%')\n        .onClick(() => {\n          this.simpleList[0]++;\n        })\n      if (this.condition) {\n        List({ space: 10 }) {\n          Repeat(this.simpleList)\n            .each((obj: RepeatItem<number>) => {\n              ListItem() {\n                Column() {\n                  ReusableV2Component({ num: obj.item })\n                }\n                .width('100%')\n              }\n            })\n        }\n      }\n    }\n    .width('100%')\n  }\n}\n\n@ReusableV2\n@ComponentV2\nstruct ReusableV2Component {\n  @Require @Param num: number;\n\n  aboutToAppear() {\n    hilog.info(DOMAIN, TAG, 'ReusableV2Component aboutToAppear');\n  }\n\n  aboutToRecycle() {\n    hilog.info(DOMAIN, TAG, 'ReusableV2Component aboutToRecycle');\n  }\n\n  aboutToReuse() {\n    hilog.info(DOMAIN, TAG, 'ReusableV2Component aboutToReuse');\n  }\n\n  build() {\n    Column() {\n      Text(`${this.num}`)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(184238)/* ["default"] */.A) + "",
        width: "1769",
        height: "763"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在foreach组件中使用",
      children: "在ForEach组件中使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(234029)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["推荐开发者使用Repeat组件的非懒加载场景代替", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-foreach/ts-rendering-control-foreach",
        children: "ForEach"
      }), "组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的例子中使用了ForEach组件渲染了数个可复用组件，由于每次点击Click to change按钮时key值都会发生变化，因此从第二次点击开始都会触发回收与复用（由于ForEach先判断有无可复用节点时复用池仍未初始化，因此第一次点击会创建新的节点，而后初始化复用池同时回收节点）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[Sample_Reusablev2]';\nconst DOMAIN = 0xF811;\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local simpleList: number[] = [0, 1, 2, 3, 4, 5];\n\n  build() {\n    Column() {\n      ForEach(this.simpleList, (num: number, index) => {\n        Row() {\n          Button('Click to change')\n            .margin({ right: 10 })\n            .onClick(() => {\n              this.simpleList[index]++;\n            })\n          ReusableV2Component({ num: num })\n        }\n        .margin({ bottom: 10 })\n      }) // 每次修改完key发生变化\n    }\n  }\n}\n\n@ReusableV2\n@ComponentV2\nstruct ReusableV2Component {\n  @Require @Param num: number;\n\n  aboutToAppear() {\n    hilog.info(DOMAIN, TAG, 'ReusableV2Component aboutToAppear', this.num); // 创建时触发\n  }\n\n  aboutToRecycle() {\n    hilog.info(DOMAIN, TAG, 'ReusableV2Component aboutToRecycle', this.num); // 回收时触发\n  }\n\n  aboutToReuse() {\n    hilog.info(DOMAIN, TAG, 'ReusableV2Component aboutToReuse', this.num); // 复用时触发\n  }\n\n  build() {\n    Column() {\n      Text(`child: ${this.num}`)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(145067)/* ["default"] */.A) + "",
        width: "1769",
        height: "763"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在lazyforeach组件中使用",
      children: "在LazyForEach组件中使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(991423)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["推荐开发者使用Repeat组件的懒加载场景代替", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach",
        children: "LazyForEach"
      }), "组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的例子中使用了LazyForEach渲染了数个可复用组件，在滑动时可以先观察到组件创建，直到预加载节点全部创建完成之后，再滑动则触发复用和回收。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[Sample_Reusablev2]';\nconst DOMAIN = 0xF811;\n\nclass BasicDataSource implements IDataSource {\n  private listeners: DataChangeListener[] = [];\n  private originDataArray: StringData[] = [];\n\n  public totalCount(): number {\n    return 0;\n  }\n\n  public getData(index: number): StringData {\n    return this.originDataArray[index];\n  }\n\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      hilog.info(DOMAIN, TAG, 'add listener');\n      this.listeners.push(listener);\n    }\n  }\n\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      hilog.info(DOMAIN, TAG, 'remove listener');\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  notifyDataReload(): void {\n    this.listeners.forEach(listener => {\n      listener.onDataReloaded();\n    });\n  }\n\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n    });\n  }\n\n  notifyDataChange(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataChange(index);\n    });\n  }\n\n  notifyDataDelete(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataDelete(index);\n    });\n  }\n\n  notifyDataMove(from: number, to: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataMove(from, to);\n    });\n  }\n\n  notifyDatasetChange(operations: DataOperation[]): void {\n    this.listeners.forEach(listener => {\n      listener.onDatasetChange(operations);\n    });\n  }\n}\n\nclass MyDataSource extends BasicDataSource {\n  private dataArray: StringData[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): StringData {\n    return this.dataArray[index];\n  }\n\n  public addData(index: number, data: StringData): void {\n    this.dataArray.splice(index, 0, data);\n    this.notifyDataAdd(index);\n  }\n\n  public pushData(data: StringData): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\n@ObservedV2\nclass StringData {\n  @Trace message: string;\n\n  constructor(message: string) {\n    this.message = message;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  data: MyDataSource = new MyDataSource(); // 数据源\n\n  aboutToAppear() {\n    for (let i = 0; i <= 200; i++) {\n      this.data.pushData(new StringData('Hello' + i));\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      LazyForEach(this.data, (item: StringData, index: number) => {\n        ListItem() {\n          Column() {\n            Text(item.message)\n            ChildComponent({ data: item.message })\n              .onClick(() => {\n                item.message += '!'; // message为@Trace装饰的变量，可观察变化\n              })\n          }\n        }\n      })\n    }.cachedCount(5)\n  }\n}\n\n@ReusableV2\n@ComponentV2\nstruct ChildComponent {\n  @Param @Require data: string;\n\n  aboutToAppear(): void {\n    hilog.info(DOMAIN, TAG, 'ChildComponent aboutToAppear', this.data);\n  }\n\n  aboutToDisappear(): void {\n    hilog.info(DOMAIN, TAG, 'ChildComponent aboutToDisappear', this.data);\n  }\n\n  aboutToReuse(): void {\n    hilog.info(DOMAIN, TAG, 'ChildComponent aboutToReuse', this.data); // 复用时触发\n  }\n\n  aboutToRecycle(): void {\n    hilog.info(DOMAIN, TAG, 'ChildComponent aboutToRecycle', this.data); // 回收时触发\n  }\n\n  build() {\n    Row() {\n      Text(this.data).fontSize(50)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(398908)/* ["default"] */.A) + "",
        width: "1769",
        height: "763"
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
398908(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437605-698b074d69d3b6ba417112624b715d1f.gif");

},
184238(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477559-40c2779555b75ffd7b28809d4a12a179.gif");

},
178775(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957558-7c8b055ca19705a3709d513d14d882bb.gif");

},
758799(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797908-9f10e29f120e187b317611b741936899.gif");

},
303291(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437603-c23666372e7d7b0936971ff0d2e304bb.gif");

},
772319(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477557-f1035e596eaa69f99acb7be126c6a4dc.gif");

},
712184(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437601-8257b77e1333973014d70d7694c25b11.gif");

},
234029(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
909174(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957556-d5d14c2d9af1fbcaede5c3ab1fb91504.gif");

},
145067(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797910-06dcd84f95a113a0573adcee05475bc5.gif");

},
242669(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
991423(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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