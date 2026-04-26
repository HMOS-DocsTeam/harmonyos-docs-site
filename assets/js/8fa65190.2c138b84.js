"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["476570"], {
468893(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_ui_paradigm_basic_syntax_arkts_custom_components_arkts_custom_components_access_restrictions_arkts_custom_components_access_restrictions_md_8fa_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-ui-paradigm-basic-syntax-arkts-custom-components-arkts-custom-components-access-restrictions-arkts-custom-components-access-restrictions-md-8fa.json
var site_docs_arkui_arkts_ui_development_arkts_ui_paradigm_basic_syntax_arkts_custom_components_arkts_custom_components_access_restrictions_arkts_custom_components_access_restrictions_md_8fa_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-custom-components-access-restrictions/arkts-custom-components-access-restrictions","title":"自定义组件成员属性访问限定符使用限制","description":"在状态管理V1版本中，完成自定义组件封装后，调用方难以明确知晓应传入哪些变量作为组件的输入参数。当组件开发者不希望状态变量被外部初始化时，可以使用private限定符来限制当前变量不允许被外部初始化。外部初始化也需要遵循装饰器自身的规则，具体规则见使用限制。","source":"@site/docs/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-custom-components-access-restrictions/arkts-custom-components-access-restrictions.md","sourceDirName":"arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-custom-components-access-restrictions","slug":"/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-custom-components-access-restrictions/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-custom-components-access-restrictions/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"自定义组件成员属性访问限定符使用限制","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-custom-components-access-restrictions","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义组件的自定义布局","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-page-custom-components-layout/"},"next":{"title":"@Reusable装饰器：V1组件复用","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-custom-components-access-restrictions/arkts-custom-components-access-restrictions.md


const frontMatter = {
	title: '自定义组件成员属性访问限定符使用限制',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-custom-components-access-restrictions',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义组件成员属性访问限定符使用限制';

const assets = {

};



const toc = [{
  "value": "使用限制",
  "id": "使用限制",
  "level": 2
}, {
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "自定义组件成员属性访问限定符使用限制",
        children: "自定义组件成员属性访问限定符使用限制"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在状态管理V1版本中，完成自定义组件封装后，调用方难以明确知晓应传入哪些变量作为组件的输入参数。当组件开发者不希望状态变量被外部初始化时，可以使用private限定符来限制当前变量不允许被外部初始化。外部初始化也需要遵循装饰器自身的规则，具体规则见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E4%BD%BF%E7%94%A8%E9%99%90%E5%88%B6",
        children: "使用限制"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS会对自定义组件的成员变量使用的访问限定符private/public/protected进行校验，当不按规范使用访问限定符private/public/protected时，会产生对应的日志信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在阅读本文档前，建议提前阅读：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview",
        children: "状态管理概述"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(538541)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，支持自定义组件成员属性访问限定符使用限制的规则。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用限制",
      children: "使用限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
          children: "@State"
        }), "/", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop",
          children: "@Prop"
        }), "/", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
          children: "@Provide"
        }), "/", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builderparam",
          children: "@BuilderParam"
        }), "/常规成员变量(不涉及更新的普通变量)的初始化规则为可以被外部初始化，也可以使用本地值进行初始化。当组件开发者不希望当前变量被外部初始化时，可以使用private进行修饰，在这种情况下，错误进行外部初始化会有编译告警日志提示。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#storagelink",
          children: "@StorageLink"
        }), "/", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#storageprop",
          children: "@StorageProp"
        }), "/", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#localstoragelink",
          children: "@LocalStorageLink"
        }), "/", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#localstorageprop",
          children: "@LocalStorageProp"
        }), "/", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
          children: "@Consume"
        }), "变量的初始化规则为不可以被外部初始化，当组件开发者希望当前变量被外部初始化而使用public修饰时，与装饰器本身的初始化规则不符，会有编译告警日志提示。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
          children: "@Link"
        }), "/", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
          children: "@ObjectLink"
        }), "变量的初始化规则为必须被外部初始化，禁止本地初始化。当组件开发者使用private对变量进行修饰时，与装饰器本身的初始化规则不符，会有编译告警日志提示。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由于struct没有继承能力，上述所有的这些变量使用protected修饰时，会有编译告警日志提示。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-require",
          children: "@Require"
        }), "含义是当前被@Require装饰的变量必须被外部初始化，当@Require和private同时装饰", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
          children: "@State"
        }), "/", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop",
          children: "@Prop"
        }), "/", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
          children: "@Provide"
        }), "/", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builderparam",
          children: "@BuilderParam"
        }), "/常规成员变量(不涉及更新的普通变量)时，它们的含义是自相矛盾的，会有编译告警日志提示。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当成员变量被private访问限定符和@State/@Prop/@Provide/@BuilderParam装饰器同时修饰，并且通过父组件进行初始化赋值，ArkTS会进行校验并产生告警日志。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "【反例】"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct LinkErrorAccessRestrictions {\n  @Builder\n  buildTest() {\n    Text('Parent builder')\n  }\n\n  build() {\n    Column() {\n      LinkErrorComponentChild({\n        stateValue: 'Hello',\n        propValue: 'Hello',\n        provideValue: 'Hello',\n        builderValue: this.buildTest,\n        regularValue: 'Hello'\n      })\n    }\n    .width('100%')\n  }\n}\n\n@Component\nstruct LinkErrorComponentChild {\n  // 此处使用private修饰符时会出现告警日志\n  @State private stateValue: string = 'Hello';\n  // 此处使用private修饰符时会出现告警日志\n  @Prop private propValue: string = 'Hello';\n  // 此处使用private修饰符时会出现告警日志\n  @Provide private provideValue: string = 'Hello';\n  // 此处使用private修饰符时会出现告警日志\n  @BuilderParam private builderValue: () => void = this.buildTest;\n  // 此处使用private修饰符时会出现告警日志\n  private regularValue: string = 'Hello';\n\n  @Builder\n  buildTest() {\n    Text('Child builder')\n  }\n\n  build() {\n    Column() {\n      Text('Hello')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译告警日志如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Property 'stateValue' is private and can not be initialized through the component constructor.\nProperty 'propValue' is private and can not be initialized through the component constructor.\nProperty 'provideValue' is private and can not be initialized through the component constructor.\nProperty 'builderValue' is private and can not be initialized through the component constructor.\nProperty 'regularValue' is private and can not be initialized through the component constructor.\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "【正例】"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct LinkAccessRestrictions {\n  @Builder\n  buildTest() {\n    Text('Parent builder')\n  }\n\n  build() {\n    Column() {\n      LinkComponentChild({\n        stateValue: 'Hello',\n        propValue: 'Hello',\n        provideValue: 'Hello',\n        builderValue: this.buildTest,\n        regularValue: 'Hello'\n      })\n    }\n    .width('100%')\n  }\n}\n\n@Component\nstruct LinkComponentChild {\n  @State stateValue: string = 'Hello';\n  @Prop propValue: string = 'Hello';\n  @Provide provideValue: string = 'Hello';\n  @BuilderParam builderValue: () => void = this.buildTest;\n  regularValue: string = 'Hello';\n\n  @Builder\n  buildTest() {\n    Text('Child builder')\n  }\n\n  build() {\n    Column() {\n      Text('Hello')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当成员变量被public访问限定符和@StorageLink/@StorageProp/@LocalStorageLink/@LocalStorageProp/@Consume装饰器同时修饰，并且通过父组件进行初始化赋值，ArkTS会进行校验并产生告警日志。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "【反例】"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct PublicErrorAccessRestrictions {\n  @Provide consumeValue: string = 'Hello';\n\n  build() {\n    Column() {\n      PublicErrorComponentChild()\n    }\n    .width('100%')\n  }\n}\n\n@Component\nstruct PublicErrorComponentChild {\n  // 此处使用public修饰符时会出现告警日志\n  @LocalStorageProp('sessionLocalProp') public localPropValue: string = 'Hello';\n  // 此处使用public修饰符时会出现告警日志\n  @LocalStorageLink('sessionLocalLink') public localLinkValue: string = 'Hello';\n  // 此处使用public修饰符时会出现告警日志\n  @StorageProp('sessionProp') public storagePropValue: string = 'Hello';\n  // 此处使用public修饰符时会出现告警日志\n  @StorageLink('sessionLink') public storageLinkValue: string = 'Hello';\n  // 此处使用public修饰符时会出现告警日志\n  @Consume public consumeValue: string;\n\n  build() {\n    Column() {\n      Text('Hello')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译告警日志如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Property 'localPropValue' can not be decorated with both '@LocalStorageProp' and public.\nProperty 'localLinkValue' can not be decorated with both '@LocalStorageLink' and public.\nProperty 'storagePropValue' can not be decorated with both '@StorageProp' and public.\nProperty 'storageLinkValue' can not be decorated with both '@StorageLink' and public.\nProperty 'consumeValue' can not be decorated with both '@Consume' and public.\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "【正例】"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct PublicCorrectAccessRestrictions {\n  @Provide consumeValue: string = 'Hello';\n\n  build() {\n    Column() {\n      PublicCorrectComponentChild()\n    }\n    .width('100%')\n  }\n}\n\n@Component\nstruct PublicCorrectComponentChild {\n  @LocalStorageProp('sessionLocalProp') localPropValue: string = 'Hello';\n  @LocalStorageLink('sessionLocalLink') localLinkValue: string = 'Hello';\n  @StorageProp('sessionProp') storagePropValue: string = 'Hello';\n  @StorageLink('sessionLink') storageLinkValue: string = 'Hello';\n  @Consume consumeValue: string;\n\n  build() {\n    Column() {\n      Text('Hello')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当成员变量被private访问限定符和@Link/@ObjectLink装饰器同时修饰，并且通过父组件进行初始化赋值，ArkTS会进行校验并产生告警日志。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "【反例】"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct PrivateWithLinkErrorAccessRestrictions {\n  @State linkValue: string = 'Hello';\n  @State objectLinkValue: PrivateErrorComponentObj = new PrivateErrorComponentObj();\n\n  build() {\n    Column() {\n      PrivateWithLinkErrorComponentChild({ linkValue: this.linkValue, objectLinkValue: this.objectLinkValue })\n    }\n    .width('100%')\n  }\n}\n\n@Observed\nclass PrivateErrorComponentObj {\n  public count: number = 0;\n}\n\n@Component\nstruct PrivateWithLinkErrorComponentChild {\n  // 此处使用private修饰符时会出现告警日志\n  @Link private linkValue: string;\n  // 此处使用private修饰符时会出现告警日志\n  @ObjectLink private objectLinkValue: PrivateErrorComponentObj;\n\n  build() {\n    Column() {\n      Text('Hello')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译告警日志如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Property 'linkValue' can not be decorated with both '@Link' and private.\nProperty 'objectLinkValue' can not be decorated with both '@ObjectLink' and private.\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "【正例】"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct PrivateWithLinkAccessRestrictions {\n  @State linkValue: string = 'Hello';\n  @State objectLinkValue: PrivateComponentObj = new PrivateComponentObj();\n\n  build() {\n    Column() {\n      PrivateWithLinkComponentChild({ linkValue: this.linkValue, objectLinkValue: this.objectLinkValue })\n    }\n    .width('100%')\n  }\n}\n\n@Observed\nclass PrivateComponentObj {\n  public count: number = 0;\n}\n\n@Component\nstruct PrivateWithLinkComponentChild {\n  @Link linkValue: string;\n  @ObjectLink objectLinkValue: PrivateComponentObj;\n\n  build() {\n    Column() {\n      Text('Hello')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当成员变量被protected访问限定符修饰，并且通过父组件进行初始化赋值，ArkTS会进行校验并产生告警日志。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "【反例】"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct ProtectedErrorAccessRestrictions {\n  build() {\n    Column() {\n      ProtectedErrorComponentChild({ regularValue: 'Hello' })\n    }\n    .width('100%')\n  }\n}\n\n@Component\nstruct ProtectedErrorComponentChild {\n  // 此处使用protected修饰符时会出现告警日志\n  protected regularValue: string = 'Hello';\n\n  build() {\n    Column() {\n      Text('Hello')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译告警日志如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "The member attributes of a struct can not be protected.\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "【正例】"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct ProtectedCorrectAccessRestrictions {\n  build() {\n    Column() {\n      ProtectedCorrectComponentChild({ regularValue: 'Hello' })\n    }\n    .width('100%')\n  }\n}\n\n@Component\nstruct ProtectedCorrectComponentChild {\n  regularValue: string = 'Hello';\n\n  build() {\n    Column() {\n      Text('Hello')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当成员变量被private访问限定符、@Require和@State/@Prop/@Provide/@BuilderParam装饰器同时修饰，并且通过父组件初始化赋值时，ArkTS会进行校验并产生告警日志。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "【反例】"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct PrivateErrorAccessRestrictions {\n  build() {\n    Column() {\n      PrivateErrorComponentChild({ propValue: 'Hello' })\n    }\n    .width('100%')\n  }\n}\n\n@Component\nstruct PrivateErrorComponentChild {\n  // 此处使用private修饰符时会出现告警日志\n  @Require @Prop private propValue: string = 'Hello';\n\n  build() {\n    Column() {\n      Text('Hello')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译告警日志如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Property 'propValue' can not be decorated with both '@Require' and private.\nProperty 'propValue' is private and can not be initialized through the component constructor.\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "【正例】"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct PrivateCorrectAccessRestrictions {\n  build() {\n    Column() {\n      PrivateCorrectComponentChild({ propValue: 'Hello' })\n    }\n    .width('100%')\n  }\n}\n\n@Component\nstruct PrivateCorrectComponentChild {\n  @Require @Prop propValue: string = 'Hello';\n\n  build() {\n    Column() {\n      Text('Hello')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n    }\n  }\n}\n"
          })
        }), "\n"]
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
538541(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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