"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["384568"], {
617313(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_ui_paradigm_basic_syntax_arkts_extend_components_arkts_builderparam_arkts_builderparam_md_856_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-ui-paradigm-basic-syntax-arkts-extend-components-arkts-builderparam-arkts-builderparam-md-856.json
var site_docs_arkui_arkts_ui_development_arkts_ui_paradigm_basic_syntax_arkts_extend_components_arkts_builderparam_arkts_builderparam_md_856_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builderparam/arkts-builderparam","title":"@BuilderParam装饰器：引用@Builder函数","description":"当开发者创建自定义组件并需要为其添加特定功能（例如页面跳转功能）时，如果直接在组件内嵌入事件方法，会导致所有该自定义组件的实例都增加此功能。为了解决此问题，ArkUI引入了@BuilderParam装饰器。@BuilderParam用于装饰指向@Builder方法的变量，开发者可以在初始化自定义组件时，使用不同的方式（如参数修改、尾随闭包、借用箭头函数等）对@BuilderParam装饰的自定义构建函数进行传参赋值。在自定义组件内部，通过调用@BuilderParam为组件增加特定功能。","source":"@site/docs/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builderparam/arkts-builderparam.md","sourceDirName":"arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builderparam","slug":"/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builderparam/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builderparam/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"@BuilderParam装饰器：引用@Builder函数","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-builderparam","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"@LocalBuilder装饰器： 维持组件关系","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-localbuilder/"},"next":{"title":"wrapBuilder：封装全局@Builder","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-wrapbuilder/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builderparam/arkts-builderparam.md


const frontMatter = {
	title: '@BuilderParam装饰器：引用@Builder函数',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-builderparam',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '@BuilderParam装饰器：引用@Builder函数';

const assets = {

};



const toc = [{
  "value": "装饰器使用说明",
  "id": "装饰器使用说明",
  "level": 2
}, {
  "value": "初始化@BuilderParam装饰的方法",
  "id": "初始化builderparam装饰的方法",
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
  "value": "参数初始化组件",
  "id": "参数初始化组件",
  "level": 3
}, {
  "value": "尾随闭包初始化组件",
  "id": "尾随闭包初始化组件",
  "level": 3
}, {
  "value": "使用@BuilderParam隔离多组件对@Builder跳转逻辑的调用",
  "id": "使用builderparam隔离多组件对builder跳转逻辑的调用",
  "level": 3
}, {
  "value": "使用全局和局部@Builder初始化@BuilderParam",
  "id": "使用全局和局部builder初始化builderparam",
  "level": 3
}, {
  "value": "在@ComponentV2装饰的自定义组件中使用@BuilderParam",
  "id": "在componentv2装饰的自定义组件中使用builderparam",
  "level": 3
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "改变内容UI不刷新",
  "id": "改变内容ui不刷新",
  "level": 3
}, {
  "value": "@Require装饰器和@BuilderParam装饰器联合使用",
  "id": "require装饰器和builderparam装饰器联合使用",
  "level": 3
}, {
  "value": "@BuilderParam装饰器初始化的值必须为@Builder",
  "id": "builderparam装饰器初始化的值必须为builder",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "builderparam装饰器引用builder函数",
        children: "@BuilderParam装饰器：引用@Builder函数"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当开发者创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components",
        children: "自定义组件"
      }), "并需要为其添加特定功能（例如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
        children: "页面跳转"
      }), "功能）时，如果直接在组件内嵌入事件方法，会导致所有该自定义组件的实例都增加此功能。为了解决此问题，ArkUI引入了@BuilderParam装饰器。@BuilderParam用于装饰指向@Builder方法的变量，开发者可以在初始化自定义组件时，使用不同的方式（如参数修改、尾随闭包、借用箭头函数等）对@BuilderParam装饰的自定义构建函数进行传参赋值。在自定义组件内部，通过调用@BuilderParam为组件增加特定功能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在阅读本文档前，建议提前阅读：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
        children: "@Builder"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(763217)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 7开始支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 9开始，该装饰器支持在ArkTS卡片中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始，该装饰器支持在元服务中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "装饰器使用说明",
      children: "装饰器使用说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "初始化builderparam装饰的方法",
      children: "初始化@BuilderParam装饰的方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@BuilderParam装饰的方法只能被自定义构建函数（@Builder装饰的方法）初始化。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用所属自定义组件的自定义构建函数或者全局的自定义构建函数，在本地初始化@BuilderParam装饰的方法。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Builder\nfunction overBuilder() {\n}\n\n@Component\nstruct Child {\n  @Builder\n  doNothingBuilder() {\n  }\n\n  // 使用自定义组件的自定义构建函数初始化@BuilderParam装饰的方法\n  @BuilderParam customBuilderParam: () => void = this.doNothingBuilder;\n  // 使用全局自定义构建函数初始化@BuilderParam装饰的方法\n  @BuilderParam customOverBuilderParam: () => void = overBuilder;\n\n  build() {\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用父组件自定义构建函数初始化子组件@BuilderParam装饰的方法。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Component\nstruct Child {\n  @Builder\n  customBuilder() {\n  }\n\n  @BuilderParam customBuilderParam: () => void = this.customBuilder;\n\n  build() {\n    Column() {\n      this.customBuilderParam()\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Parent {\n  @Builder\n  componentBuilder() {\n    Text('Parent builder')\n  }\n\n  build() {\n    Column() {\n      Child({ customBuilderParam: this.componentBuilder })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 示例效果图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(338983)/* ["default"] */.A) + "",
        width: "379",
        height: "88"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要注意this的指向。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Component\nstruct Child {\n  label: string = 'Child';\n\n  @Builder\n  customBuilder() {\n  }\n\n  @Builder\n  customChangeThisBuilder() {\n  }\n\n  @BuilderParam customBuilderParam: () => void = this.customBuilder;\n  @BuilderParam customChangeThisBuilderParam: () => void = this.customChangeThisBuilder;\n\n  build() {\n    Column() {\n      this.customBuilderParam()\n      this.customChangeThisBuilderParam()\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Parent {\n  label: string = 'Parent';\n\n  @Builder\n  componentBuilder() {\n    Text(`${this.label}`)\n  }\n\n  build() {\n    Column() {\n      // 调用this.componentBuilder()时，this指向当前@Entry所装饰的Parent组件，即label变量的值为'Parent'。\n      this.componentBuilder()\n      Child({\n        // 把this.componentBuilder传给子组件Child的@BuilderParam customBuilderParam，this指向的是子组件Child，即label变量的值为'Child'。\n        customBuilderParam: this.componentBuilder,\n        // 把():void=>{this.componentBuilder()}传给子组件Child的@BuilderParam customChangeThisBuilderParam，\n        // 因为箭头函数的this指向的是宿主对象，所以label变量的值为'Parent'。\n        customChangeThisBuilderParam: (): void => {\n          this.componentBuilder()\n        }\n      })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 示例效果图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(183297)/* ["default"] */.A) + "",
        width: "144",
        height: "167"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制条件",
      children: "限制条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用@BuilderParam装饰的变量只能通过@Builder函数进行初始化。具体参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#builderparam%E8%A3%85%E9%A5%B0%E5%99%A8%E5%88%9D%E5%A7%8B%E5%8C%96%E7%9A%84%E5%80%BC%E5%BF%85%E9%A1%BB%E4%B8%BAbuilder",
          children: "@BuilderParam装饰器初始化的值必须为@Builder"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-require",
          children: "@Require装饰器"
        }), "和@BuilderParam装饰器一起使用时，必须初始化@BuilderParam装饰器。具体参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#require%E8%A3%85%E9%A5%B0%E5%99%A8%E5%92%8Cbuilderparam%E8%A3%85%E9%A5%B0%E5%99%A8%E8%81%94%E5%90%88%E4%BD%BF%E7%94%A8",
          children: "@Require装饰器和@BuilderParam装饰器联合使用"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在自定义组件尾随闭包的场景下，子组件有且仅有一个@BuilderParam用来接收此尾随闭包，且此@BuilderParam装饰的方法不能有参数。具体参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%B0%BE%E9%9A%8F%E9%97%AD%E5%8C%85%E5%88%9D%E5%A7%8B%E5%8C%96%E7%BB%84%E4%BB%B6",
          children: "尾随闭包初始化组件"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "参数初始化组件",
      children: "参数初始化组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@BuilderParam装饰的方法为有参数或无参数的形式，必须与指向的@Builder方法类型匹配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Tmp {\n  public label: string = '';\n}\n\n@Builder\nfunction overBuilder($$: Tmp) {\n  Text($$.label)\n    .width('100%')\n    .height(50)\n    .backgroundColor(Color.Green)\n}\n\n@Component\nstruct Child {\n  label: string = 'Child';\n\n  @Builder\n  customBuilder() {\n  }\n\n  // 无参数类型，指向的customBuilder也是无参数类型\n  @BuilderParam customBuilderParam: () => void = this.customBuilder;\n  // 有参数类型，指向的overBuilder也是有参数类型的方法\n  @BuilderParam customOverBuilderParam: ($$: Tmp) => void = overBuilder;\n\n  build() {\n    Column() {\n      this.customBuilderParam()\n      this.customOverBuilderParam({ label: 'global Builder label' })\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Parent {\n  label: string = 'Parent';\n\n  @Builder\n  componentBuilder() {\n    Text(`${this.label}`)\n  }\n\n  build() {\n    Column() {\n      this.componentBuilder()\n      Child({ customBuilderParam: this.componentBuilder, customOverBuilderParam: overBuilder })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " 示例效果图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(201918)/* ["default"] */.A) + "",
        width: "503",
        height: "123"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "尾随闭包初始化组件",
      children: "尾随闭包初始化组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在自定义组件中，使用@BuilderParam装饰的属性可通过尾随闭包进行初始化。初始化时，组件后需紧跟一个大括号“{}”形成尾随闭包场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(259787)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "此场景下自定义组件内仅有一个使用@BuilderParam装饰的属性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "此场景下自定义组件不支持通用属性。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可将尾随闭包内的内容看作@Builder装饰的函数传给@BuilderParam。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例1："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct CustomContainer {\n  @Prop header: string = '';\n\n  @Builder\n  closerBuilder() {\n  }\n\n  // 使用父组件的尾随闭包{}(@Builder装饰的方法)初始化子组件@BuilderParam装饰的方法\n  @BuilderParam closer: () => void = this.closerBuilder;\n\n  build() {\n    Column() {\n      Text(this.header)\n        .fontSize(30)\n      this.closer()\n    }\n  }\n}\n\n@Builder\nfunction specificParam(label1: string, label2: string) {\n  Column() {\n    Text(label1)\n      .fontSize(30)\n    Text(label2)\n      .fontSize(30)\n  }\n}\n\n@Entry\n@Component\nstruct CustomContainerUser {\n  @State text: string = 'header';\n\n  build() {\n    Column() {\n      // 创建CustomContainer，在创建CustomContainer时，通过其后紧跟一个大括号“{}”形成尾随闭包\n      // 作为传递给子组件CustomContainer @BuilderParam closer: () => void的参数\n      CustomContainer({ header: this.text }) {\n        Column() {\n          specificParam('testA', 'testB')\n        }.backgroundColor(Color.Yellow)\n        .onClick(() => {\n          this.text = 'changeHeader';\n        })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图4"
        })
      }), " 示例效果图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(129366)/* ["default"] */.A) + "",
        width: "432",
        height: "223"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以使用全局或局部@Builder通过尾随闭包的形式对", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#componentv2",
        children: "@ComponentV2"
      }), "装饰的自定义组件中的@BuilderParam装饰的方法进行初始化。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例2："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ComponentV2\nstruct ChildPage {\n  @Require @Param message: string = '';\n\n  @Builder\n  customBuilder() {\n  }\n\n  @BuilderParam customBuilderParam: () => void = this.customBuilder;\n\n  build() {\n    Column() {\n      Text(this.message)\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n      this.customBuilderParam()\n    }\n  }\n}\n\nconst builderValue: string = 'Hello World';\n\n@Builder\nfunction overBuilder() {\n  Row() {\n    Text(`Global Builder: ${builderValue}`)\n      .fontSize(20)\n      .fontWeight(FontWeight.Bold)\n  }\n}\n\n@Entry\n@ComponentV2\nstruct ParentPage {\n  @Local label: string = 'Parent Page';\n\n  @Builder\n  componentBuilder() {\n    Row() {\n      Text(`Local Builder: ${this.label}`)\n        .fontSize(20)\n        .fontWeight(FontWeight.Bold)\n    }\n  }\n\n  build() {\n    Column() {\n      ChildPage({ message: this.label }) {\n        Column() { // 使用局部@Builder，通过组件后紧跟一个大括号“{}”形成尾随闭包去初始化自定义组件@BuilderParam装饰的方法\n          this.componentBuilder();\n        }\n      }\n\n      Line()\n        .width('100%')\n        .height(10)\n        .backgroundColor('#000000').margin(10)\n      ChildPage({ message: this.label }) { // 使用全局@Builder，通过组件后紧跟一个大括号“{}”形成尾随闭包去初始化自定义组件@BuilderParam装饰的方法\n        Column() {\n          overBuilder();\n        }\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用builderparam隔离多组件对builder跳转逻辑的调用",
      children: "使用@BuilderParam隔离多组件对@Builder跳转逻辑的调用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当@Builder封装的系统组件包含跳转逻辑时，所有调用该@Builder的自定义组件将具备该跳转功能。如果需要禁用特定组件的跳转功能，可使用@BuilderParam来隔离跳转逻辑。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(772382)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前示例代码中使用了Navigation组件导航，具体实现逻辑可以查询", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-architecture",
        children: "Navigation"
      }), "指南。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { HelloWorldPageBuilder } from './helloworld';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\nclass NavigationParams {\n  public pathStack: NavPathStack = new NavPathStack();\n  public boo: boolean = true;\n}\n\n@Builder\nfunction navigationAction(params: NavigationParams) {\n  Column() {\n    Navigation(params.pathStack) {\n      Button('router to page', { stateEffect: true, type: ButtonType.Capsule })\n        .width('80%')\n        .height(40)\n        .margin(20)\n        .onClick(() => {\n          // 通过修改@BuilderParam参数决定是否跳转。\n          if (params.boo) {\n            params.pathStack.pushPath({ name: 'HelloWorldPage' });\n          } else {\n            hilog.info(DOMAIN, 'testTag', '%{public}s', '@BuilderParam setting does not jump');\n          }\n        })\n    }\n    .navDestination(HelloWorldPageBuilder)\n    .hideTitleBar(true)\n    .height('100%')\n    .width('100%')\n  }\n  .height('25%')\n  .width('100%')\n}\n\n@Entry\n@Component\nstruct ParentPage {\n  @State info: NavigationParams = new NavigationParams();\n\n  build() {\n    Column() {\n      Text('ParentPage')\n      navigationAction({ pathStack: this.info.pathStack, boo: true })\n      ChildPageOne()\n      ChildPage_BuilderParam({ eventBuilder: navigationAction })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n\n@Component\nstruct ChildPageOne {\n  @State info: NavigationParams = new NavigationParams();\n\n  build() {\n    Column() {\n      Text('ChildPage')\n      navigationAction({ pathStack: this.info.pathStack, boo: true })\n    }\n  }\n}\n\n@Component\nstruct ChildPage_BuilderParam {\n  @State info: NavigationParams = new NavigationParams();\n  @BuilderParam eventBuilder: (param: NavigationParams) => void = navigationAction;\n\n  build() {\n    Column() {\n      Text('ChildPage_BuilderParam')\n      // 对传递过来的全局@Builder进行参数修改，可以实现禁用点击跳转的功能。\n      this.eventBuilder({ pathStack: this.info.pathStack, boo: false })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nexport function HelloWorldPageBuilder() {\n  HelloWorldPage()\n}\n\n@Component\nstruct HelloWorldPage {\n  @State message: string = 'Hello World';\n  @State pathStack: NavPathStack = new NavPathStack();\n\n  build() {\n    NavDestination() {\n      Column() {\n        Text(this.message)\n          .fontSize(20)\n          .fontWeight(FontWeight.Bold)\n      }\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "router_map.json"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这个文件位于项目的resources/base/profile目录下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"routerMap\": [\n    {\n      \"name\": \"HelloWorldPage\",\n      \"buildFunction\": \"HelloWorldPageBuilder\",\n      \"pageSourceFile\": \"src/main/ets/pages/helloworld.ets\"\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "module.json5"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这个文件位于应用模块的根目录下，例如entry/src/main/module.json5。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    \"routerMap\": \"$profile:router_map\",\n    ......\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图5"
        })
      }), " 示例效果图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(428112)/* ["default"] */.A) + "",
        width: "314",
        height: "461"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用全局和局部builder初始化builderparam",
      children: "使用全局和局部@Builder初始化@BuilderParam"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在自定义组件中，使用@BuilderParam装饰的变量接收父组件通过@Builder传递的内容进行初始化，由于父组件的@Builder可以使用箭头函数改变当前的this指向，因此使用@BuilderParam装饰的变量会展示不同的内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct ChildPage {\n  label: string = 'Child Page';\n\n  @Builder\n  customBuilder() {\n  }\n\n  @BuilderParam customBuilderParam: () => void = this.customBuilder;\n  @BuilderParam customChangeThisBuilderParam: () => void = this.customBuilder;\n\n  build() {\n    Column() {\n      this.customBuilderParam()\n      this.customChangeThisBuilderParam()\n    }\n  }\n}\n\nconst builderValue: string = 'Hello World';\n\n@Builder\nfunction overBuilder() {\n  Row() {\n    Text(`Global Builder: ${builderValue}`)\n      .fontSize(20)\n      .fontWeight(FontWeight.Bold)\n  }\n}\n\n@Entry\n@Component\nstruct ParentPage {\n  label: string = 'Parent Page';\n\n  @Builder\n  componentBuilder() {\n    Row() {\n      Text(`Local Builder: ${this.label}`)\n        .fontSize(20)\n        .fontWeight(FontWeight.Bold)\n    }\n  }\n\n  build() {\n    Column() {\n      // 调用this.componentBuilder()时，this指向当前@Entry所装饰的ParentPage组件，所以label变量的值为'Parent Page'。\n      this.componentBuilder()\n      ChildPage({\n        // 把this.componentBuilder传给子组件ChildPage的@BuilderParam customBuilderParam，\n        // this指向的是子组件ChildPage，所以label变量的值为'Child Page'。\n        customBuilderParam: this.componentBuilder,\n        // 把():void=>{this.componentBuilder()}传给子组件ChildPage的@BuilderParam customChangeThisBuilderParam，\n        // 因为箭头函数的this指向的是宿主对象，所以label变量的值为'Parent Page'。\n        customChangeThisBuilderParam: (): void => {\n          this.componentBuilder()\n        }\n      })\n      Line()\n        .width('100%')\n        .height(10)\n        .backgroundColor('#000000').margin(10)\n      // 调用全局overBuilder()时，this指向当前整个活动页，所以展示的内容为'Hello World'。\n      overBuilder()\n      ChildPage({\n        // 把全局overBuilder传给子组件ChildPage的@BuilderParam customBuilderParam，\n        // this指向当前整个活动页，所以展示的内容为'Hello World'。\n        customBuilderParam: overBuilder,\n        // 把全局overBuilder传给子组件ChildPage的@BuilderParam customChangeThisBuilderParam，\n        // this指向当前整个活动页，所以展示的内容为'Hello World'。\n        customChangeThisBuilderParam: overBuilder\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图6"
        })
      }), " 示例效果图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(568418)/* ["default"] */.A) + "",
        width: "296",
        height: "179"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在componentv2装饰的自定义组件中使用builderparam",
      children: "在@ComponentV2装饰的自定义组件中使用@BuilderParam"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用全局或局部@Builder初始化@ComponentV2装饰的自定义组件中的@BuilderParam属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ComponentV2\nstruct ChildPage {\n  @Param label: string = 'Child Page';\n\n  @Builder\n  customBuilder() {\n  }\n\n  @BuilderParam customBuilderParam: () => void = this.customBuilder;\n  @BuilderParam customChangeThisBuilderParam: () => void = this.customBuilder;\n\n  build() {\n    Column() {\n      this.customBuilderParam()\n      this.customChangeThisBuilderParam()\n    }\n  }\n}\n\nconst builderValue: string = 'Hello World';\n\n@Builder\nfunction overBuilder() {\n  Row() {\n    Text(`Global Builder: ${builderValue}`)\n      .fontSize(20)\n      .fontWeight(FontWeight.Bold)\n  }\n}\n\n@Entry\n@ComponentV2\nstruct ParentPage {\n  @Local label: string = 'Parent Page';\n\n  @Builder\n  componentBuilder() {\n    Row() {\n      Text(`Local Builder: ${this.label}`)\n        .fontSize(20)\n        .fontWeight(FontWeight.Bold)\n    }\n  }\n\n  build() {\n    Column() {\n      // 调用this.componentBuilder()时，this指向当前@Entry所装饰的ParentPage组件，所以label变量的值为'Parent Page'。\n      this.componentBuilder()\n      ChildPage({\n        // 把this.componentBuilder传给子组件ChildPage的@BuilderParam customBuilderParam，\n        // this指向的是子组件ChildPage，所以label变量的值为'Child Page'。\n        customBuilderParam: this.componentBuilder,\n        // 把():void=>{this.componentBuilder()}传给子组件ChildPage的@BuilderParam customChangeThisBuilderPara\n        // 因为箭头函数的this指向的是宿主对象，所以label变量的值为'Parent Page'。\n        customChangeThisBuilderParam: (): void => {\n          this.componentBuilder()\n        }\n      })\n      Line()\n        .width('100%')\n        .height(5)\n        .backgroundColor('#000000').margin(10)\n      // 调用全局overBuilder()时，this指向当前整个活动页，所以展示的内容为'Hello World'。\n      overBuilder()\n      ChildPage({\n        // 把全局overBuilder传给子组件ChildPage的@BuilderParam customBuilderParam，\n        // this指向当前整个活动页，所以展示的内容为'Hello World'。\n        customBuilderParam: overBuilder,\n        // 把全局overBuilder传给子组件ChildPage的@BuilderParam customChangeThisBuilderParam，\n        // this指向当前整个活动页，所以展示的内容为'Hello World'。\n        customChangeThisBuilderParam: overBuilder\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图7"
        })
      }), " 示例效果图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(533535)/* ["default"] */.A) + "",
        width: "296",
        height: "179"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "改变内容ui不刷新",
      children: "改变内容UI不刷新"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用自定义组件ChildPage时，通过this.componentBuilder传递@Builder参数。this指向自定义组件内部，因此父组件中改变label的值时，ChildPage无法感知这一变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct ChildPage {\n  @State label: string = 'Child Page';\n\n  @Builder\n  customBuilder() {\n  }\n\n  @BuilderParam customChangeThisBuilderParam: () => void = this.customBuilder;\n\n  build() {\n    Column() {\n      this.customChangeThisBuilderParam()\n    }\n  }\n}\n\n@Entry\n@Component\nstruct ParentPage {\n  @State label: string = 'Parent Page';\n\n  @Builder\n  componentBuilder() {\n    Row() {\n      Text(`Builder :${this.label}`)\n        .fontSize(20)\n        .fontWeight(FontWeight.Bold)\n    }\n  }\n\n  build() {\n    Column() {\n      ChildPage({\n        // 当前写法this指向ChildPage组件内\n        customChangeThisBuilderParam: this.componentBuilder\n      })\n      // 请将$r('app.string.builderOpp_text1')替换为实际资源文件，在本示例中该资源文件的value值为\"点击改变label内容\"\n      Button($r('app.string.builderOpp_text1'))\n        .onClick(() => {\n          this.label = 'Hello World';\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用箭头函数将@Builder传递到自定义组件ChildPage中，this指向会停留在父组件ParentPage里。在父组件中改变label的值时，ChildPage会感知到并重新渲染UI。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct ChildPage {\n  @State label: string = 'Child Page';\n\n  @Builder\n  customBuilder() {\n  }\n\n  @BuilderParam customChangeThisBuilderParam: () => void = this.customBuilder;\n\n  build() {\n    Column() {\n      this.customChangeThisBuilderParam()\n    }\n  }\n}\n\n@Entry\n@Component\nstruct ParentPage {\n  @State label: string = 'Parent Page';\n\n  @Builder\n  componentBuilder() {\n    Row() {\n      Text(`Builder :${this.label}`)\n        .fontSize(20)\n        .fontWeight(FontWeight.Bold)\n    }\n  }\n\n  build() {\n    Column() {\n      ChildPage({\n        customChangeThisBuilderParam: () => {\n          this.componentBuilder()\n        }\n      })\n      // 请将$r('app.string.builderOpp_text1')替换为实际资源文件，在本示例中该资源文件的value值为\"点击改变label内容\"\n      Button($r('app.string.builderOpp_text1'))\n        .onClick(() => {\n          this.label = 'Hello World';\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "require装饰器和builderparam装饰器联合使用",
      children: "@Require装饰器和@BuilderParam装饰器联合使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于@Require装饰器所装饰的变量需进行初始化，未初始化会导致编译报错。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nfunction globalBuilder() {\n  Text('Hello World')\n}\n\n@Entry\n@Component\nstruct CustomBuilderDemo {\n  build() {\n    Column() {\n      // 由于未对@Require装饰的变量ChildBuilder进行赋值，此处无论是编译还是编辑，均会报错。\n      ChildPage()\n    }\n  }\n}\n\n@Component\nstruct ChildPage {\n  @Require @BuilderParam ChildBuilder: () => void = globalBuilder;\n\n  build() {\n    Column() {\n      this.ChildBuilder()\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Require装饰的变量必须从外部初始化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nfunction globalBuilder() {\n  Text('Hello World')\n}\n\n@Entry\n@Component\nstruct CustomBuilderDemo {\n  build() {\n    Column() {\n      ChildPage({ childBuilder: globalBuilder })\n    }\n  }\n}\n\n@Component\nstruct ChildPage {\n  @Require @BuilderParam childBuilder: () => void = globalBuilder;\n\n  build() {\n    Column() {\n      this.childBuilder()\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "builderparam装饰器初始化的值必须为builder",
      children: "@BuilderParam装饰器初始化的值必须为@Builder"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用@State装饰器装饰的变量，在初始化子组件的@BuilderParam和ChildBuilder变量时，编译时会输出报错信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nfunction globalBuilder() {\n  Text('Hello World')\n}\n\n@Entry\n@Component\nstruct CustomBuilderDemo {\n  @State message: string = '';\n\n  build() {\n    Column() {\n      // @BuilderParam装饰的变量ChildBuilder接收@State装饰的变量，会出现编译和编辑报错\n      ChildPage({ ChildBuilder: this.message })\n    }\n  }\n}\n\n@Component\nstruct ChildPage {\n  @BuilderParam ChildBuilder: () => void = globalBuilder;\n\n  build() {\n    Column() {\n      this.ChildBuilder()\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用全局@Builder装饰的globalBuilder()方法为子组件@BuilderParam装饰的ChildBuilder变量初始化，编译无报错，功能正常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nfunction globalBuilder() {\n  Text('Hello World')\n}\n\n@Entry\n@Component\nstruct CustomBuilderDemo {\n  build() {\n    Column() {\n      ChildPage({ childBuilder: globalBuilder })\n    }\n  }\n}\n\n@Component\nstruct ChildPage {\n  @BuilderParam childBuilder: () => void = globalBuilder;\n\n  build() {\n    Column() {\n      this.childBuilder()\n    }\n  }\n}\n"
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
763217(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
183297(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477579-4e073a1d8da8d6fc9f02afa83720fa93.png");

},
428112(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957580-c83aa89ce9086837190a930d9fc9b7f8.gif");

},
568418(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477581-f6ccbf35587cef83bba154b209a9bf5c.png");

},
129366(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437625-599e5d6bd06a0eb9283160b9af502d8c.gif");

},
259787(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
201918(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797930-fcaf71a757ca9ce647f96ae979ba461c.png");

},
533535(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797932-f6ccbf35587cef83bba154b209a9bf5c.png");

},
338983(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957578-4adf4d47f842bd1a7679229489e6bda1.png");

},
772382(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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