"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["78490"], {
35527(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_1_arkts_v_1_data_object_state_management_arkts_track_arkts_track_md_57f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-v-1-arkts-v-1-data-object-state-management-arkts-track-arkts-track-md-57f.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_1_arkts_v_1_data_object_state_management_arkts_track_arkts_track_md_57f_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-data-object-state-management/arkts-track/arkts-track","title":"@Track装饰器：class对象属性级更新","description":"@Track应用于class对象的属性级更新。@Track装饰的属性变化时，只会触发该属性关联的UI更新。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-data-object-state-management/arkts-track/arkts-track.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-data-object-state-management/arkts-track","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-data-object-state-management/arkts-track/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-data-object-state-management/arkts-track/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"@Track装饰器：class对象属性级更新","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-track","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"@Watch装饰器：状态变量更改通知","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-watch/"},"next":{"title":"管理应用拥有的状态概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-application-state-management-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-data-object-state-management/arkts-track/arkts-track.md


const frontMatter = {
	title: '@Track装饰器：class对象属性级更新',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-track',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '@Track装饰器：class对象属性级更新';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "class属性级更新说明",
  "id": "class属性级更新说明",
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
  "value": "限制条件",
  "id": "限制条件",
  "level": 2
}, {
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "@Track和自定义组件更新",
  "id": "track和自定义组件更新",
  "level": 3
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "在UI中使用非@Track装饰的属性发生运行时报错",
  "id": "在ui中使用非track装饰的属性发生运行时报错",
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
        id: "track装饰器class对象属性级更新",
        children: "@Track装饰器：class对象属性级更新"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Track应用于class对象的属性级更新。@Track装饰的属性变化时，只会触发该属性关联的UI更新。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在阅读本文档之前，建议开发者对状态管理基本观察能力有基本的了解。建议提前阅读：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
        children: "@State"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(269867)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始，该装饰器支持在ArkTS卡片中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，该装饰器支持在元服务中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Track是class对象的属性装饰器。当一个class对象是状态变量时，@Track装饰的属性发生变化，只会触发该属性关联的UI更新；如果class类中使用了@Track装饰器，则未被@Track装饰器装饰的属性不能在UI中使用，如果使用，会发生运行时报错。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "class属性级更新说明",
      children: "class属性级更新说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态管理V1中@State等装饰器默认支持观察第一层属性的变化，第一层属性的变化虽然可以触发更新，但无法做到类属性级的观察，下面的例子就展示了这一限制："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN_NUMBER: number = 0XFF00;\nconst TAG: string = '[Sample_StateTrack]';\nclass Info {\n  public name: string = 'Jack';\n  public age: number = 12;\n}\n\n@Entry\n@Component\nstruct Index {\n  @State info: Info = new Info();\n\n  // 借助getFontSize的日志打印，可以分辨哪个组件触发了渲染\n  getFontSize(id: number): number {\n    hilog.info(DOMAIN_NUMBER, TAG, `Component ${id} render`);\n    return 30;\n  }\n\n  build() {\n    Column() {\n      Text(`name: ${this.info.name}`)\n        .fontSize(this.getFontSize(1))\n      Text(`age: ${this.info.age}`)\n        .fontSize(this.getFontSize(2))\n\n      // 点击当前Button，可以发现当前虽然仅改变了name属性\n      // 但是依旧会触发两个Text的刷新\n      // Text(`age: ${this.info.age}`)是冗余刷新\n      Button('change name').onClick(() => {\n        this.info.name = 'Jane';\n      })\n\n      // 点击当前Button，可以发现当前虽然仅改变了age属性\n      // 但是依旧会触发两个Text的刷新\n      // Text(`name: ${this.info.name}`)是冗余刷新\n      Button('change age').onClick(() => {\n        this.info.age++;\n      })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(667568)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当UI刷新时，会执行组件的属性设置方法，利用这一机制可以通过观察getFontSize方法是否被调用来判断当前组件是否刷新。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "UI首次渲染完成，观察到输出如下日志："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Component 1 render\nComponent 2 render\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当点击Button('change name')时，即使只修改了info.name，观察日志发现两个Text组件仍会重新渲染。组件Text(", (0,jsx_runtime.jsx)(_components.code, {
            children: "age: ${this.info.age}"
          }), ")并未使用name属性，但仍因为info.name的改变而刷新，因此这次刷新是冗余的。日志输出如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Component 1 render\nComponent 2 render\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["同理，点击Button('change age')，也会触发Text(", (0,jsx_runtime.jsx)(_components.code, {
            children: "name: ${this.info.name}"
          }), ")的刷新。日志输出如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Component 1 render\nComponent 2 render\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "造成上述冗余刷新的根本原因是：状态管理V1中@State等装饰器无法精准观察类属性的访问与变更。为了实现类对象属性的精准观察，引入@Track装饰器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "装饰器说明",
      children: "装饰器说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "@Track变量装饰器"
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
            children: "可装饰的变量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "class对象的非静态成员属性。@Track不支持观察Function类型的数据变化，修改@Track装饰的Function类型的数据，UI不会刷新。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "观察变化和行为表现",
      children: "观察变化和行为表现"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当一个class对象是状态变量时，@Track装饰的属性发生变化，该属性关联的UI触发更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(748462)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当class对象中没有一个属性被标记@Track，行为与原先保持不变。@Track没有深度观测的功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用@Track装饰器可以避免冗余刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN_NUMBER: number = 0XFF00;\nconst TAG: string = '[Sample_StateTrack]';\n\nclass LogTrack {\n  @Track public str1: string;\n  @Track public str2: string;\n\n  constructor(str1: string) {\n    this.str1 = str1;\n    this.str2 = 'World';\n  }\n}\n\nclass LogNotTrack {\n  public str1: string;\n  public str2: string;\n\n  constructor(str1: string) {\n    this.str1 = str1;\n    this.str2 = 'World';\n  }\n}\n\n@Entry\n@Component\nstruct AddLog {\n  @State logTrack: LogTrack = new LogTrack('Hello');\n  @State logNotTrack: LogNotTrack = new LogNotTrack('Hello');\n\n  isRender(index: number) {\n    hilog.info(DOMAIN_NUMBER, TAG, `Text ${index} is rendered`);\n    return 50;\n  }\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.logTrack.str1) // Text1\n          .id('str1')\n          .fontSize(this.isRender(1))\n          .fontWeight(FontWeight.Bold)\n        Text(this.logTrack.str2) // Text2\n          .fontSize(this.isRender(2))\n          .fontWeight(FontWeight.Bold)\n        Button('change logTrack.str1')\n          .id('str2')\n          .onClick(() => {\n            this.logTrack.str1 = 'Bye';\n          })\n        Text(this.logNotTrack.str1) // Text3\n          .fontSize(this.isRender(3))\n          .fontWeight(FontWeight.Bold)\n        Text(this.logNotTrack.str2) // Text4\n          .fontSize(this.isRender(4))\n          .fontWeight(FontWeight.Bold)\n        Button('change logNotTrack.str1')\n          .onClick(() => {\n            this.logNotTrack.str1 = 'Bye';\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上面的示例中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "类LogTrack中的属性均被@Track装饰器装饰，点击按钮\"change logTrack.str1\"，此时Text1刷新，Text2不刷新，只有一条日志输出，避免了冗余刷新。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Text 1 is rendered\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "类logNotTrack中的属性均未被@Track装饰器装饰，点击按钮\"change logNotTrack.str1\"，此时Text3、Text4均会刷新，有两条日志输出，存在冗余刷新。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Text 3 is rendered\nText 4 is rendered\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制条件",
      children: "限制条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果class类中使用了@Track装饰器，那么该class类中非@Track装饰的属性不能在@Component UI中使用，包括不能绑定在组件上、不能用于初始化子组件，错误的使用将导致运行时报错，从API version 23开始，将返回错误码", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-statemanagement/errorcode-statemanagement#section140110-%E5%9C%A8ui%E4%B8%AD%E4%BD%BF%E7%94%A8%E9%9D%9Etrack%E8%A3%85%E9%A5%B0%E7%9A%84%E5%B1%9E%E6%80%A7%E5%8F%91%E7%94%9F%E8%BF%90%E8%A1%8C%E6%97%B6%E6%8A%A5%E9%94%99",
          children: "140110"
        }), "，详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%9C%A8ui%E4%B8%AD%E4%BD%BF%E7%94%A8%E9%9D%9Etrack%E8%A3%85%E9%A5%B0%E7%9A%84%E5%B1%9E%E6%80%A7%E5%8F%91%E7%94%9F%E8%BF%90%E8%A1%8C%E6%97%B6%E6%8A%A5%E9%94%99",
          children: "在UI中使用非@Track装饰的属性发生运行时报错"
        }), "；可以在非UI中使用非@Track装饰的属性，如事件回调函数中、生命周期函数中等。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["API version 19及以后，@Track使用在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#componentv2",
          children: "@ComponentV2"
        }), "的UI中，不会引起运行时报错，但依旧不会刷新，详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/v1v2-mixing/arkts-v1-v2-mixusage#%E4%BC%A0%E9%80%92class%E7%B1%BB%E5%9E%8Bv1-v2",
          children: "@Observed+@Track装饰的class（V1->V2）"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/v1v2-mixing/arkts-v1-v2-mixusage#%E4%BC%A0%E9%80%92class%E7%B1%BB%E5%9E%8Bv2-v1",
          children: "@Observed+@Track装饰的class（V2->V1）"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "建议开发者不要混用包含@Track的class对象和不包含@Track的class对象，如联合类型中、类继承中等，容易在UI中误用非@Track装饰的属性，导致运行时报错。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "track和自定义组件更新",
      children: "@Track和自定义组件更新"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例展示组件更新和@Track的处理步骤。对象log是@State装饰的状态变量，logInfo是@Track装饰的成员属性，其余成员属性都是非@Track装饰的，而且也不准备在UI中更新它们的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN_NUMBER: number = 0XFF00;\nconst TAG: string = '[Sample_StateTrack]';\nclass Log {\n  @Track public logInfo: string;\n  public owner: string;\n  public id: number;\n  public time: Date;\n  public location: string;\n  public reason: string;\n\n  constructor(logInfo: string) {\n    this.logInfo = logInfo;\n    this.owner = 'OH';\n    this.id = 0;\n    this.time = new Date();\n    this.location = 'CN';\n    this.reason = 'NULL';\n  }\n}\n\n@Entry\n@Component\nstruct AddLog {\n  @State log: Log = new Log('origin info.');\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.log.logInfo)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            // 没有被@Track装饰的属性可以在点击事件中使用。\n            hilog.info(DOMAIN_NUMBER, TAG, 'owner: ' + this.log.owner +\n              ' id: ' + this.log.id +\n              ' time: ' + this.log.time +\n              ' location: ' + this.log.location +\n              ' reason: ' + this.log.reason);\n            this.log.time = new Date();\n            this.log.id++;\n            this.log.logInfo += ' info.';\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "处理步骤："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AddLog自定义组件的Text.onClick点击事件自增字符串' info.'。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由于@State log变量的@Track属性logInfo更改，Text重新渲染。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在ui中使用非track装饰的属性发生运行时报错",
      children: "在UI中使用非@Track装饰的属性发生运行时报错"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在UI中使用非@Track装饰的属性，运行时会报错，从API version 23开始，将返回错误码140110。需要给age也添加@Track装饰器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Person {\n  // id被@Track装饰\n  @Track id: number;\n  // age未被@Track装饰\n  age: number;\n\n  constructor(id: number, age: number) {\n    this.id = id;\n    this.age = age;\n  }\n}\n\n@Entry\n@Component\nstruct Parent {\n  @State parent: Person = new Person(2, 30);\n\n  build() {\n    // 没有被@Track装饰的属性不可以在UI中使用，运行时会报错\n    Text(`Parent id is: ${this.parent.id} and Parent age is: ${this.parent.age}`)\n  }\n}\n"
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
667568(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
269867(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
748462(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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