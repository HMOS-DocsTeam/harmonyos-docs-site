"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["444064"], {
675498(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_v_1_v_2_guide_arkts_state_management_v_1_v_2_migration_guide_arkts_v_1_v_2_migration_inner_component_arkts_v_1_v_2_migration_inner_component_md_b05_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-v-1-v-2-guide-arkts-state-management-v-1-v-2-migration-guide-arkts-v-1-v-2-migration-inner-component-arkts-v-1-v-2-migration-inner-component-md-b05.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_v_1_v_2_guide_arkts_state_management_v_1_v_2_migration_guide_arkts_v_1_v_2_migration_inner_component_arkts_v_1_v_2_migration_inner_component_md_b05_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-component/arkts-v1-v2-migration-inner-component","title":"组件内状态变量迁移","description":"本文档主要介绍组件内的状态变量的迁移场景，包含以下场景：","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-component/arkts-v1-v2-migration-inner-component.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-component","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-component/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-component/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"组件内状态变量迁移","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-v1-v2-migration-inner-component","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"V1-V2迁移概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-v1-v2-migration/"},"next":{"title":"数据对象状态变量迁移","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-class/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-component/arkts-v1-v2-migration-inner-component.md


const frontMatter = {
	title: '组件内状态变量迁移',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-v1-v2-migration-inner-component',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '组件内状态变量迁移';

const assets = {

};



const toc = [{
  "value": "各装饰器迁移示例",
  "id": "各装饰器迁移示例",
  "level": 2
}, {
  "value": "@State -&gt; @Local",
  "id": "state---local",
  "level": 3
}, {
  "value": "@Link -&gt; @Param/@Event",
  "id": "link---paramevent",
  "level": 3
}, {
  "value": "@Prop -&gt; @Param",
  "id": "prop---param",
  "level": 3
}, {
  "value": "@Provide/@Consume -&gt; @Provider/@Consumer",
  "id": "provideconsume---providerconsumer",
  "level": 3
}, {
  "value": "@Watch -&gt; @Monitor",
  "id": "watch---monitor",
  "level": 3
}, {
  "value": "重复计算 -&gt; @Computed计算属性",
  "id": "重复计算---computed计算属性",
  "level": 3
}, {
  "value": "双向绑定由$$迁移!!",
  "id": "双向绑定由迁移",
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
        id: "组件内状态变量迁移",
        children: "组件内状态变量迁移"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文档主要介绍组件内的状态变量的迁移场景，包含以下场景："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "V1装饰器名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "V2装饰器名"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
              children: "@State"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["无外部初始化：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local",
              children: "@Local"
            }), "  外部初始化一次：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param",
              children: "@Param"
            }), "/", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-once",
              children: "@Once"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop",
              children: "@Prop"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param",
              children: "@Param"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
              children: "@Link"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param",
              children: "@Param"
            }), "/", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-event",
              children: "@Event"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
              children: "@ObjectLink"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param",
              children: "@Param"
            }), "/", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-event",
              children: "@Event"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
              children: "@Provide"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-provider-and-consumer",
              children: "@Provider"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
              children: "@Consume"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-provider-and-consumer",
              children: "@Consumer"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-watch",
              children: "@Watch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-monitor",
              children: "@Monitor"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "无计算属性相关能力，需要重复计算"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-computed",
              children: "@Computed"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "各装饰器迁移示例",
      children: "各装饰器迁移示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "state---local",
      children: "@State -> @Local"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "迁移规则"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在V1中，@State装饰器用于装饰组件内部的状态变量，在V2中提供了@Local作为其替代能力，但两者在观察能力和初始化规则上存在明显差异。针对不同的使用场景，迁移策略如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "简单类型：对于简单类型的变量，可以直接将@State替换为@Local。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "复杂类型：V1中的@State可以观察复杂对象的第一层属性变化，而V2中的@Local只能观察对象自身的变化。如果需要追踪对象内部的属性变化，可以结合使用@ObservedV2和@Trace。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "外部初始化：V1中，@State支持从外部传递初始值；但在V2中，@Local禁止外部初始化。若需要从外部传递初始值，可以使用@Param和@Once装饰器来实现类似的效果。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "简单类型"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于简单类型变量，V1的@State可以直接替换为V2的@Local。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const INITIAL_VALUE = 10;\n\n@Entry\n@Component\nstruct Child {\n  @State val: number = INITIAL_VALUE;\n\n  build() {\n    Text(this.val.toString())\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2迁移策略：直接替换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const INITIAL_VALUE = 10;\n\n@Entry\n@ComponentV2\nstruct Child {\n  @Local val: number = INITIAL_VALUE;\n\n  build() {\n    Text(this.val.toString())\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "复杂类型"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1的@State能够观察复杂对象的第一层属性变化，但V2的@Local无法观察对象内部变化。为了解决这个问题，需要在类上添加@ObservedV2，并在需要观察的属性上添加@Trace。这样，框架就能追踪对象内部的属性变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const INITIAL_VALUE = 10;\n\nclass Child {\n  public value: number = INITIAL_VALUE;\n}\n\n@Component\n@Entry\nstruct Example {\n  @State child: Child = new Child();\n\n  build() {\n    Column() {\n      Text(this.child.value.toString())\n      // @State可以观察第一层变化\n      Button('value+1')\n        .onClick(() => {\n          this.child.value++;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2迁移策略：使用@ObservedV2和@Trace。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const INITIAL_VALUE = 10;\n\n@ObservedV2\nclass Child {\n  @Trace public value: number = INITIAL_VALUE;\n}\n\n@ComponentV2\n@Entry\nstruct Example {\n  // @Local只能观察自身，需要给Child加上@ObservedV2和@Trace\n  @Local child: Child = new Child();\n\n  build() {\n    Column() {\n      Text(this.child.value.toString())\n      Button('value+1')\n        .onClick(() => {\n          this.child.value++;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "外部初始化状态变量"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1的@State变量可以从外部初始化，V2的@Local禁止外部初始化。为实现类似功能，需要用@Param和@Once代替@State，允许外部传入初始值，并确保该值只初始化时同步一次。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1实现："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct Child {\n  @State value: number = 0;\n\n  build() {\n    Text(this.value.toString())\n  }\n}\n\n@Entry\n@Component\nstruct Parent {\n  build() {\n    Column() {\n      // @State可以从外部初始化\n      Child({ value: 30 })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2迁移策略：使用@Param和@Once。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ComponentV2\nstruct Child {\n  @Param @Once value: number = 0;\n\n  build() {\n    Text(this.value.toString())\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Parent {\n  build() {\n    Column() {\n      // @Local禁止从外部初始化，可以用@Param和@Once替代实现\n      Child({ value: 30 })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "link---paramevent",
      children: "@Link -> @Param/@Event"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "迁移规则"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在V1中，@Link允许父组件和子组件之间进行双向数据绑定。迁移到V2时，可以用@Param和@Event模拟双向同步。@Param实现父到子的单向传递，子组件再通过@Event回调函数触发父组件的状态更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1实现："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const INITIAL_MYVAL = 10;\n\n@Component\nstruct Child {\n  // @Link可以双向同步数据\n  @Link val: number;\n\n  build() {\n    Column() {\n      Text('child: ' + this.val.toString())\n      Button('+1')\n        .onClick(() => {\n          this.val++;\n        })\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Parent {\n  @State myVal: number = INITIAL_MYVAL;\n\n  build() {\n    Column() {\n      Text('parent: ' + this.myVal.toString())\n      Child({ val: this.myVal })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2迁移策略：使用@Param和@Event。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const INITIAL_MYVAL = 10;\n\n@ComponentV2\nstruct Child {\n  // @Param搭配@Event回调实现数据双向同步\n  @Param val: number = 0;\n  @Event addOne: () => void;\n\n  build() {\n    Column() {\n      Text('child: ' + this.val.toString())\n      Button('+1')\n        .onClick(() => {\n          this.addOne();\n        })\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Parent {\n  @Local myVal: number = INITIAL_MYVAL;\n\n  build() {\n    Column() {\n      Text('parent: ' + this.myVal.toString())\n      Child({ val: this.myVal, addOne: () => this.myVal++ })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prop---param",
      children: "@Prop -> @Param"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "迁移规则"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在V1中，@Prop装饰器用于从父组件传递参数给子组件，这些参数在子组件中可以被直接修改。在V2中，@Param取代了@Prop的作用，但@Param是只读的，子组件不能直接修改参数的值。因此，根据场景的不同，有3种迁移策略："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "简单类型：对于简单类型的参数，将@Prop替换为@Param。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "复杂类型：如果传递的是复杂对象且需要严格的单向数据绑定，需要深拷贝对象，防止子组件修改父组件的数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "子组件修改变量：如果子组件需要修改传入的参数，使用@Once允许子组件在本地修改该变量。但需要注意，使用@Once修饰符后，当前子组件只会被初始化一次，后续无父组件到子组件的同步能力。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "简单类型"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于简单类型变量，V1的@Prop可以直接替换为V2的@Param。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1实现："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct Child {\n  @Prop value: number;\n\n  build() {\n    Text(this.value.toString())\n  }\n}\n\n@Entry\n@Component\nstruct Parent {\n  build() {\n    Column() {\n      Child({ value: 30 })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2迁移策略：直接替换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ComponentV2\nstruct Child {\n  @Param value: number = 0;\n\n  build() {\n    Text(this.value.toString())\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Parent {\n  build() {\n    Column() {\n      Child({ value: 30 })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "复杂类型的单向数据传递"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在V2中，传递复杂类型时，如果希望实现严格的单向数据绑定，防止子组件修改父组件的数据，需要在使用@Param传递复杂对象时进行深拷贝以避免传递对象的引用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1实现："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const APPLE_INITIAL_COUNT = 5;\nconst ORANGE_INITIAL_COUNT = 10;\n\nclass Fruit {\n  public apple: number = APPLE_INITIAL_COUNT;\n  public orange: number = ORANGE_INITIAL_COUNT;\n}\n\n@Component\nstruct Child {\n  // @Prop传递Fruit类，当子类修改属性，父类不受影响\n  @Prop fruit: Fruit;\n\n  build() {\n    Column() {\n      Text('child apple: ' + this.fruit.apple.toString())\n      Text('child orange: ' + this.fruit.orange.toString())\n      Button('apple+1')\n        .onClick(() => {\n          this.fruit.apple++;\n        })\n      Button('orange+1')\n        .onClick(() => {\n          this.fruit.orange++;\n        })\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Parent {\n  @State parentFruit: Fruit = new Fruit();\n\n  build() {\n    Column() {\n      Text('parent apple: ' + this.parentFruit.apple.toString())\n      Text('parent orange: ' + this.parentFruit.orange.toString())\n      Child({ fruit: this.parentFruit })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2迁移策略：使用深拷贝。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const APPLE_INITIAL_COUNT = 5;\nconst ORANGE_INITIAL_COUNT = 10;\n\n@ObservedV2\nclass Fruit {\n  @Trace public apple: number = APPLE_INITIAL_COUNT;\n  @Trace public orange: number = ORANGE_INITIAL_COUNT;\n\n  // 实现深拷贝，子组件不会修改父组件的数据\n  clone(): Fruit {\n    let newFruit: Fruit = new Fruit();\n    newFruit.apple = this.apple;\n    newFruit.orange = this.orange;\n    return newFruit;\n  }\n}\n\n@ComponentV2\nstruct Child {\n  @Param fruit: Fruit = new Fruit();\n\n  build() {\n    Column() {\n      Text('child')\n      Text(this.fruit.apple.toString())\n      Text(this.fruit.orange.toString())\n      Button('apple+1')\n        .onClick(() => {\n          this.fruit.apple++;\n        })\n      Button('orange+1')\n        .onClick(() => {\n          this.fruit.orange++;\n        })\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Parent {\n  @Local parentFruit: Fruit = new Fruit();\n\n  build() {\n    Column() {\n      Text('parent')\n      Text(this.parentFruit.apple.toString())\n      Text(this.parentFruit.orange.toString())\n      Child({ fruit: this.parentFruit.clone() })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "子组件修改变量"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在V1中，子组件可以修改@Prop的变量，然而在V2中，@Param是只读的。如果子组件需要修改传入的值，可以使用@Param和@Once允许子组件在本地修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1实现："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct Child {\n  // @Prop可以直接修改变量值\n  @Prop value: number;\n\n  build() {\n    Column() {\n      Text(this.value.toString())\n      Button('+1')\n        .onClick(() => {\n          this.value++;\n        })\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Parent {\n  build() {\n    Column() {\n      Child({ value: 30 })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2迁移策略：使用@Param和@Once。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ComponentV2\nstruct Child {\n  // @Param搭配@Once使用，可以在本地修改@Param变量\n  @Param @Once value: number = 0;\n\n  build() {\n    Column() {\n      Text(this.value.toString())\n      Button('+1')\n        .onClick(() => {\n          this.value++;\n        })\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Parent {\n  build() {\n    Column() {\n      Child({ value: 30 })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在V1中，子组件可以修改@Prop的变量，且只会在本地更新，不会同步回父组件。父组件数据源更新时，会通知子组件更新，并覆写子组件本地@Prop的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "改变子组件Child的localValue，不会同步回父组件Parent。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "父组件更新value，通知子组件Child更新，并覆写本地子组件localValue的值。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const PARENT_INITIAL_STATE_VALUE = 10;\n\n@Component\nstruct Child {\n  @Prop localValue: number = 0;\n\n  build() {\n    Column() {\n      Text(`${this.localValue}`).fontSize(25)\n      Button('Child +100')\n        .onClick(() => {\n          // 改变localValue不会传递给父组件Parent\n          this.localValue += 100;\n        })\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Parent {\n  @State value: number = PARENT_INITIAL_STATE_VALUE;\n\n  build() {\n    Column() {\n      Button('Parent +1')\n        .onClick(() => {\n          // 改变value的值，通知子组件Child value更新\n          this.value += 1;\n        })\n      Child({ localValue: this.value })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2中，@Param本地不可写，与@Once搭配使用时只同步一次。若要实现子组件本地可写，且父组件后续更新仍能通知子组件，可借助@Monitor实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2实现："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "父组件Parent更新通知子组件value的刷新，并回调@Monitor修饰的onValueChange回调方法，onValueChange将更新后的值赋值给localValue。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "子组件Child改变localValue的值，不会同步给父组件Parent。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "父组件Parent中再次改变value，将会继续通知给子组件，并覆写子组件本地localValue的值。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0xFF00;\nconst TAG = '[Sample_StateMigration_App]';\nconst PARENT_INITIAL_LOCAL_VALUE = 10;\n\n@ComponentV2\nstruct Child {\n  @Local localValue: number = 0;\n  @Param value: number = 0;\n\n  @Monitor('value')\n  onValueChange(mon: IMonitor) {\n    hilog.info(DOMAIN, TAG, `value has been changed from ${mon.value()?.before} to ${mon.value()?.now}`);\n    // 父组件value变化时，通知子组件value更新，回调Monitor函数，将更新的值覆写给本地的localValue\n    this.localValue = this.value;\n  }\n\n  build() {\n    Column() {\n      Text(`${this.localValue}`).fontSize(25)\n      Button('Child +100')\n        .onClick(() => {\n          // 改变localValue不会传递给父组件Parent\n          this.localValue += 100;\n        })\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Parent {\n  @Local value: number = PARENT_INITIAL_LOCAL_VALUE;\n\n  build() {\n    Column() {\n      Button('Parent +1')\n        .onClick(() => {\n          // 改变value的值，通知子组件Child value更新\n          this.value += 1;\n        })\n      Child({ value: this.value })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "provideconsume---providerconsumer",
      children: "@Provide/@Consume -> @Provider/@Consumer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "迁移规则"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1的@Provide和@Consume与V2的@Provider和@Consumer定位和作用类似，基本可以实现丝滑替换，但存在以下细微差异，开发者可根据自己代码实现情况参考是否需要调整："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在V1中，@Provide和@Consume用于父子组件之间的数据共享，可以通过alias（别名）或属性名匹配，同时@Consume依赖父组件的@Provide，API version 20以前不允许本地初始化。V2中，@Provider和@Consumer增强了这些特性，使数据共享更加灵活。根据不同的场景，有以下迁移策略："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V1中@Provide和@Consume在没有指定alias的情况下，可以直接使用。V2中@Provider和@Consumer是标准装饰器，且参数可选，所以不管有无指定alias后面需要必须跟随“()”。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "alias和属性名匹配规则：V1中，@Provide和@Consume可以通过alias或属性名匹配；V2中，alias是唯一的匹配key，指定alias后只能通过alias匹配。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["本地初始化支持：API version 20以前，@Consume不允许本地初始化，必须依赖父组件；从API version 20开始，@Consume支持本地初始化，当找不到对应的@Provide时使用本地默认值，详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume#consume%E8%A3%85%E9%A5%B0%E7%9A%84%E5%8F%98%E9%87%8F%E6%94%AF%E6%8C%81%E8%AE%BE%E7%BD%AE%E9%BB%98%E8%AE%A4%E5%80%BC",
          children: "@Consume装饰的变量支持设置默认值"
        }), "；V2中，@Consumer支持本地初始化，当找不到对应的@Provider时使用本地默认值。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从父组件初始化：V1中，@Provide可以直接从父组件初始化；V2中，@Provider不支持外部初始化，需用@Param和@Once接受初始值并赋给@Provider。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "重载支持：V1中，@Provide默认不支持重载，需设置 allowOverride；V2中，@Provider默认支持重载，@Consumer会向上查找最近的@Provider。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "alias和属性名匹配规则"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在V1中，@Provide和@Consume的匹配既可以通过alias，也可以通过属性名。在V2中，alias成为唯一的key，如果在@Consumer中制定了alias，只能通过alias而非属性名进行匹配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1实现："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct Child {\n  // alias和属性名都为key，alias和属性名都可以匹配\n  @Consume('text') childMessage: string;\n  @Consume message: string;\n\n  build() {\n    Column() {\n      Text(this.childMessage)\n      Text(this.message) // Text是Hello World\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Parent {\n  @Provide('text') message: string = 'Hello World';\n\n  build() {\n    Column() {\n      Child()\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2迁移策略：确保alias一致，没有指定alias的情况下，依赖属性名进行匹配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ComponentV2\nstruct Child {\n  // alias是唯一匹配的key，有alias情况下无法通过属性名匹配\n  @Consumer('text') childMessage: string = 'default';\n  @Consumer() message: string = 'default';\n\n  build() {\n    Column() {\n      Text(this.childMessage)\n      Text(this.message) // Text是default\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Parent {\n  @Provider('text') message: string = 'Hello World';\n\n  build() {\n    Column() {\n      Child()\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "V1的@Consume不支持本地初始化，V2支持"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1中，API version 20之前，@Consume不允许本地初始化变量，必须依赖父组件的@Provide，否则会抛出异常。迁移到V2后，@Consumer允许本地初始化，当找不到对应的@Provider，会使用本地默认值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1实现："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct Child {\n  // @Consume禁止本地初始化，当找不到对应的@Provide时抛出异常\n  @Consume message: string;\n\n  build() {\n    Text(this.message)\n  }\n}\n\n@Entry\n@Component\nstruct Parent {\n  @Provide message: string = 'Hello World';\n\n  build() {\n    Column() {\n      Child()\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2迁移策略：@Consumer可以本地初始化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ComponentV2\nstruct Child {\n  // @Consumer允许本地初始化，当找不到@Provider的时候使用本地默认值\n  @Consumer() message: string = 'Hello World';\n\n  build() {\n    Text(this.message)\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Parent {\n  build() {\n    Column() {\n      Child()\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "V1的@Provide可以从父组件初始化，V2不支持"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在V1中，@Provide允许从父组件初始化，可以直接通过组件参数传递初始值。在V2中，@Provider禁止从外部初始化。为实现相同功能，可以在子组件中使用@Param @Once接受初始值，然后将其赋值给@Provider变量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1实现："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const STATE_INITIAL_PARENT_VALUE = 42;\n\n@Entry\n@Component\nstruct Parent {\n  @State parentValue: number = STATE_INITIAL_PARENT_VALUE;\n\n  build() {\n    Column() {\n      // @Provide可以从父组件初始化\n      Child({ childValue: this.parentValue })\n    }\n  }\n}\n\n@Component\nstruct Child {\n  @Provide childValue: number = 0;\n\n  build() {\n    Column() {\n      Text(this.childValue.toString())\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2迁移策略：使用@Param接受初始值，再赋值给@Provider。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const LOCAL_INITIAL_PARENT_VALUE = 42;\n\n@Entry\n@ComponentV2\nstruct Parent {\n  @Local parentValue: number = LOCAL_INITIAL_PARENT_VALUE;\n\n  build() {\n    Column() {\n      // @Provider禁止从父组件初始化，替代方案为先用@Param接受，再赋值给@Provider\n      Child({ initialValue: this.parentValue })\n    }\n  }\n}\n\n@ComponentV2\nstruct Child {\n  @Param @Once initialValue: number = 0;\n  @Provider() childValue: number = this.initialValue;\n\n  build() {\n    Column() {\n      Text(this.childValue.toString())\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "V1的@Provide默认不支持重载，V2默认支持"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在V1中，@Provide默认不支持重载，无法覆盖上层组件的同名@Provide。若需支持重载，必须设置allowOverride。在V2中，@Provider默认支持重载，@Consumer会向上查找最近的@Provider，无需额外设置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1实现："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const GRANDPARENT_REVIEW_VOTES_INITIAL = 40;\nconst PARENT_REVIEW_VOTES_INITIAL = 20;\n\n@Entry\n@Component\nstruct GrandParent {\n  @Provide('reviewVotes') reviewVotes: number = GRANDPARENT_REVIEW_VOTES_INITIAL;\n\n  build() {\n    Column() {\n      Parent()\n    }\n  }\n}\n\n@Component\nstruct Parent {\n  // @Provide默认不支持重载，支持重载需设置allowOverride函数\n  @Provide({ allowOverride: 'reviewVotes' }) reviewVotes: number = PARENT_REVIEW_VOTES_INITIAL;\n\n  build() {\n    Child()\n  }\n}\n\n@Component\nstruct Child {\n  @Consume('reviewVotes') reviewVotes: number;\n\n  build() {\n    Text(this.reviewVotes.toString()) // Text显示20\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2迁移策略：取消allowOverride设置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const GRANDPARENT_REVIEW_VOTES_INITIAL = 40;\nconst PARENT_REVIEW_VOTES_INITIAL = 20;\n\n@Entry\n@ComponentV2\nstruct GrandParent {\n  @Provider('reviewVotes') reviewVotes: number = GRANDPARENT_REVIEW_VOTES_INITIAL;\n\n  build() {\n    Column() {\n      Parent()\n    }\n  }\n}\n\n@ComponentV2\nstruct Parent {\n  // @Provider默认支持重载，@Consumer向上查找最近的@Provider\n  @Provider() reviewVotes: number = PARENT_REVIEW_VOTES_INITIAL;\n\n  build() {\n    Child()\n  }\n}\n\n@ComponentV2\nstruct Child {\n  @Consumer() reviewVotes: number = 0;\n\n  build() {\n    Text(this.reviewVotes.toString()) // Text显示20\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "watch---monitor",
      children: "@Watch -> @Monitor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "迁移规则"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在V1中，@Watch用于监听状态变量的变化，并在变量变化时触发指定回调函数。在V2中，@Monitor替代了@Watch，可以更灵活地监听变量的变化，并获取变量变化前后的值。具体的迁移策略如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "单变量监听：对于简单的场景，可以直接用@Monitor替换@Watch，效果一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多变量监听：V1的@Watch无法获取变化前的值。在V2中，@Monitor支持同时监听多个变量，并可以访问变量变化前后的状态。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "单变量监听"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于简单案例，V1的@Watch可以直接替换为V2的@Monitor。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1实现："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0xFF00;\nconst TAG = '[Sample_StateMigration_App]';\n\n@Entry\n@Component\nstruct WatchExample {\n  @State @Watch('onAppleChange') apple: number = 0;\n\n  onAppleChange(): void {\n    hilog.info(DOMAIN, TAG, 'apple count changed to ' + this.apple);\n  }\n\n  build() {\n    Column() {\n      Text(`apple count: ${this.apple}`)\n      Button('add apple')\n        .onClick(() => {\n          this.apple++;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2迁移策略：直接替换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0xFF00;\nconst TAG = '[Sample_StateMigration_App]';\n\n@Entry\n@ComponentV2\nstruct MonitorExample {\n  @Local apple: number = 0;\n\n  @Monitor('apple')\n  onFruitChange(monitor: IMonitor) {\n    hilog.info(DOMAIN, TAG, `apple changed from ${monitor.value()?.before} to ${monitor.value()?.now}`);\n  }\n\n  build() {\n    Column() {\n      Text(`apple count: ${this.apple}`)\n      Button('add apple')\n        .onClick(() => {\n          this.apple++;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "多变量监听"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在V1中，每个@Watch回调函数只能监听一个变量，且无法获取变化前的值。迁移到V2后，可以使用一个@Monitor同时监听多个变量，并获取监听变量变化前后的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1实现："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0xFF00;\nconst TAG = '[Sample_StateMigration_App]';\n\n@Entry\n@Component\nstruct WatchExample {\n  @State @Watch('onAppleChange') apple: number = 0;\n  @State @Watch('onOrangeChange') orange: number = 0;\n\n  // @Watch 回调，只能监听单个变量，不能获取变化前的值\n  onAppleChange(): void {\n    hilog.info(DOMAIN, TAG, 'apple count changed to ' + this.apple);\n  }\n\n  onOrangeChange(): void {\n    hilog.info(DOMAIN, TAG, 'orange count changed to ' + this.orange);\n  }\n\n  build() {\n    Column() {\n      Text(`apple count: ${this.apple}`)\n      Text(`orange count: ${this.orange}`)\n      Button('add apple')\n        .onClick(() => {\n          this.apple++;\n        })\n      Button('add orange')\n        .onClick(() => {\n          this.orange++;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2迁移策略：同时监听多个变量，以及获取变化前的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0xFF00;\nconst TAG = '[Sample_StateMigration_App]';\n\n@Entry\n@ComponentV2\nstruct MonitorExample {\n  @Local apple: number = 0;\n  @Local orange: number = 0;\n\n  // @Monitor回调，支持监听多个变量，可以获取变化前的值\n  @Monitor('apple','orange')\n  onFruitChange(monitor: IMonitor) {\n    monitor.dirty.forEach((name: string) => {\n      hilog.info(DOMAIN, TAG, `${name} changed from ${monitor.value(name)?.before} to ${monitor.value(name)?.now}`);\n    });\n  }\n\n  build() {\n    Column() {\n      Text(`apple count: ${this.apple}`)\n      Text(`orange count: ${this.orange}`)\n      Button('add apple')\n        .onClick(() => {\n          this.apple++;\n        })\n      Button('add orange')\n        .onClick(() => {\n          this.orange++;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "重复计算---computed计算属性",
      children: "重复计算 -> @Computed计算属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "迁移规则"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1中并没有提供计算属性的概念，所以对于UI中的冗余计算，并没有办法可以减少重复计算。V2针对该场景，提供了@Computed装饰器，可以帮助开发者减少重复计算。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，每次改变lastName都会触发Text组件的刷新，每次Text组件的刷新，都需要重复计算this.lastName + ' ' + this.firstName。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  @State firstName: string = 'Li';\n  @State lastName: string = 'Hua';\n\n  build() {\n    Column() {\n      Text(this.lastName + ' ' + this.firstName)\n      Text(this.lastName + ' ' + this.firstName)\n      Button('changed lastName').onClick(() => {\n        this.lastName += 'a';\n      })\n\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用V2中的@Computed，每次改变lastName仅会触发一次计算。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct Index {\n  @Local firstName: string = 'Li';\n  @Local lastName: string = 'Hua';\n\n  @Computed\n  get fullName() {\n    return this.firstName + ' ' + this.lastName;\n  }\n\n  build() {\n    Column() {\n      Text(this.fullName)\n      Text(this.fullName)\n      Button('changed lastName').onClick(() => {\n        this.lastName += 'a';\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "双向绑定由迁移",
      children: "双向绑定由$$迁移!!"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["状态管理V1中，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-two-way-sync",
        children: "$$"
      }), "实现系统组件的双向绑定；在状态管理V2中，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-new-binding",
        children: "!!"
      }), "语法糖统一处理双向绑定。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(173223)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "!!语法从API version 12开始支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "迁移策略"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于系统组件参数，V1的$$直接替换为V2的!!。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1实现："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct TextInputExample {\n  @State text: string = '';\n  controller: TextInputController = new TextInputController();\n\n  build() {\n    Column({ space: 20 }) {\n      Text(this.text)\n      TextInput({ text: $$this.text, placeholder: 'input your word...', controller: this.controller })\n        .placeholderColor(Color.Grey)\n        .placeholderFont({ size: 14, weight: 400 })\n        .caretColor(Color.Blue)\n        .width(300)\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2迁移策略：装饰器修改为V1的同时，$$直接替换为!!。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct TextInputExampleV2 {\n  @Local text: string = '';\n  controller: TextInputController = new TextInputController();\n\n  build() {\n    Column({ space: 20 }) {\n      Text(this.text)\n      // V2中直接用!!替换$$\n      TextInput({ text: this.text!!, placeholder: 'input your word...', controller: this.controller })\n        .placeholderColor(Color.Grey)\n        .placeholderFont({ size: 14, weight: 400 })\n        .caretColor(Color.Blue)\n        .width(300)\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n}\n"
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
173223(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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