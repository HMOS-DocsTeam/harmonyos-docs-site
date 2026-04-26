"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["712641"], {
831717(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_ui_paradigm_basic_syntax_arkts_extend_components_arkts_builder_arkts_builder_md_b2d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-ui-paradigm-basic-syntax-arkts-extend-components-arkts-builder-arkts-builder-md-b2d.json
var site_docs_arkui_arkts_ui_development_arkts_ui_paradigm_basic_syntax_arkts_extend_components_arkts_builder_arkts_builder_md_b2d_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder/arkts-builder","title":"@Builder装饰器：自定义构建函数","description":"ArkUI提供轻量的UI元素复用机制@Builder，其内部UI结构固定，仅与使用方进行数据传递。开发者可将重复使用的UI元素抽象成函数，在build函数中调用。","source":"@site/docs/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder/arkts-builder.md","sourceDirName":"arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder","slug":"/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"@Builder装饰器：自定义构建函数","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-builder","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"组件扩展概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-extend-components-overview/"},"next":{"title":"@LocalBuilder装饰器： 维持组件关系","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-localbuilder/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder/arkts-builder.md


const frontMatter = {
	title: '@Builder装饰器：自定义构建函数',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-builder',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '@Builder装饰器：自定义构建函数';

const assets = {

};



const toc = [{
  "value": "装饰器使用说明",
  "id": "装饰器使用说明",
  "level": 2
}, {
  "value": "私有自定义构建函数",
  "id": "私有自定义构建函数",
  "level": 3
}, {
  "value": "全局自定义构建函数",
  "id": "全局自定义构建函数",
  "level": 3
}, {
  "value": "参数传递规则",
  "id": "参数传递规则",
  "level": 2
}, {
  "value": "按回调传递参数",
  "id": "按回调传递参数",
  "level": 3
}, {
  "value": "按引用传递参数",
  "id": "按引用传递参数",
  "level": 3
}, {
  "value": "按值传递参数",
  "id": "按值传递参数",
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
  "value": "自定义组件内使用自定义构建函数",
  "id": "自定义组件内使用自定义构建函数",
  "level": 3
}, {
  "value": "全局自定义构建函数",
  "id": "全局自定义构建函数-1",
  "level": 3
}, {
  "value": "修改装饰器修饰的变量触发UI刷新",
  "id": "修改装饰器修饰的变量触发ui刷新",
  "level": 3
}, {
  "value": "将@Builder装饰的函数当作CustomBuilder类型使用",
  "id": "将builder装饰的函数当作custombuilder类型使用",
  "level": 3
}, {
  "value": "多层@Builder函数嵌套",
  "id": "多层builder函数嵌套",
  "level": 3
}, {
  "value": "@Builder函数联合V2装饰器",
  "id": "builder函数联合v2装饰器",
  "level": 3
}, {
  "value": "跨组件复用的全局@Builder",
  "id": "跨组件复用的全局builder",
  "level": 3
}, {
  "value": "@Builder支持状态变量刷新",
  "id": "builder支持状态变量刷新",
  "level": 3
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "@Builder存在两个或两个以上参数",
  "id": "builder存在两个或两个以上参数",
  "level": 3
}, {
  "value": "使用@ComponentV2装饰器触发动态刷新",
  "id": "使用componentv2装饰器触发动态刷新",
  "level": 3
}, {
  "value": "在@Builder内创建自定义组件传递参数不刷新问题",
  "id": "在builder内创建自定义组件传递参数不刷新问题",
  "level": 3
}, {
  "value": "在UI语句外调用@Builder函数或方法影响节点正常刷新",
  "id": "在ui语句外调用builder函数或方法影响节点正常刷新",
  "level": 3
}, {
  "value": "在@Builder方法中使用MutableBinding未传递set访问器",
  "id": "在builder方法中使用mutablebinding未传递set访问器",
  "level": 3
}, {
  "value": "在@Builder装饰的函数内部修改入参内容",
  "id": "在builder装饰的函数内部修改入参内容",
  "level": 3
}, {
  "value": "在@Watch函数中执行@Builder函数",
  "id": "在watch函数中执行builder函数",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "builder装饰器自定义构建函数",
        children: "@Builder装饰器：自定义构建函数"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI提供轻量的UI元素复用机制@Builder，其内部UI结构固定，仅与使用方进行数据传递。开发者可将重复使用的UI元素抽象成函数，在build函数中调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Builder装饰的函数也称为“自定义构建函数”。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在阅读本文档前，建议提前阅读：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-basic-syntax-overview",
        children: "基本语法概述"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-declarative-ui-description",
        children: "声明式UI描述"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components",
        children: "自定义组件-创建自定义组件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@Builder装饰器和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#component",
        children: "@Component装饰器"
      }), "在功能和使用方式上的主要差异："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["@Builder装饰器用于封装可复用的UI结构，通过提取重复的布局代码提高开发效率。该装饰器严格禁止在其内部定义", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-glossary#%E7%8A%B6%E6%80%81%E5%8F%98%E9%87%8Fstate-variables",
          children: "状态变量"
        }), "或使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle",
          children: "生命周期函数"
        }), "，必须通过参数传递或者访问所属组件的状态变量完成数据交互。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在ArkUI框架中，@Component装饰器作为封装复杂UI组件的核心机制，允许开发者通过组合多个基础组件来构建可复用的复合界面。该装饰器不仅支持内部状态变量的定义，还能完整管理组件的生命周期。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(302684)/* ["default"] */.A) + "",
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@Builder装饰器有两种使用方式，分别是定义在自定义组件内部的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A7%81%E6%9C%89%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9E%84%E5%BB%BA%E5%87%BD%E6%95%B0",
        children: "私有自定义构建函数"
      }), "和定义在全局的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%85%A8%E5%B1%80%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9E%84%E5%BB%BA%E5%87%BD%E6%95%B0",
        children: "全局自定义构建函数"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "私有自定义构建函数",
      children: "私有自定义构建函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct BuilderDemo {\n  @Builder\n  showTextBuilder() {\n    // @Builder装饰此函数，使其能以链式调用的方式配置并构建Text组件\n    Text('Hello World')\n      .fontSize(30)\n      .fontWeight(FontWeight.Bold)\n  }\n\n  @Builder\n  showTextValueBuilder(param: string) {\n    Text(param)\n      .fontSize(30)\n      .fontWeight(FontWeight.Bold)\n  }\n\n  build() {\n    Column() {\n      // 无参数\n      this.showTextBuilder()\n      // 有参数\n      this.showTextValueBuilder('Hello @Builder')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用方法："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "允许在自定义组件内定义一个或多个@Builder函数，该函数被认为是该组件的私有、特殊类型的成员函数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "私有自定义构建函数允许在自定义组件内、build函数和其他自定义构建函数中调用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在自定义组件中，this指代当前所属组件，组件的状态变量可在自定义构建函数内访问。建议通过this访问组件的状态变量，而不是通过参数传递。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "全局自定义构建函数",
      children: "全局自定义构建函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nfunction showTextBuilder() {\n  Text('Hello World')\n    .fontSize(30)\n    .fontWeight(FontWeight.Bold)\n}\n\n@Entry\n@Component\nstruct BuilderSample {\n  build() {\n    Column() {\n      showTextBuilder()\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果不涉及组件状态变量变化，建议使用全局的自定义构建函数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "全局自定义构建函数允许在build函数和其他自定义构建函数中调用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "参数传递规则",
      children: "参数传递规则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自定义构建函数的参数传递有", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%8C%89%E5%9B%9E%E8%B0%83%E4%BC%A0%E9%80%92%E5%8F%82%E6%95%B0",
        children: "按回调传递"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%8C%89%E5%BC%95%E7%94%A8%E4%BC%A0%E9%80%92%E5%8F%82%E6%95%B0",
        children: "按引用传递"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%8C%89%E5%80%BC%E4%BC%A0%E9%80%92%E5%8F%82%E6%95%B0",
        children: "按值传递"
      }), "，均需遵守以下规则："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Builder装饰的函数参数类型不允许为undefined、null和返回undefined、null的表达式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在@Builder装饰的函数内部，不允许改变参数值。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["@Builder内UI语法遵循", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#build%E5%87%BD%E6%95%B0%E5%AE%9E%E7%8E%B0%E8%A7%84%E5%88%99",
          children: "UI语法规则"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "按回调传递和按引用传递时，支持@Builder函数内UI组件刷新。按引用传递只在传入一个参数且该参数直接传入对象字面量时生效，有多个参数时不支持@Builder函数内UI组件刷新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用引用传递时，在@Builder函数中不能修改参数的属性，但使用UIUtils.makeBinding并传入写回调时，我们可以在@Builder函数内修改属性，并同步到调用@Builder的组件中。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "按回调传递参数",
      children: "按回调传递参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，开发者可以通过使用UIUtils.makeBinding()函数、Binding类和MutableBinding类实现@Builder函数中状态变量的刷新。详细用例见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#builder%E6%94%AF%E6%8C%81%E7%8A%B6%E6%80%81%E5%8F%98%E9%87%8F%E5%88%B7%E6%96%B0",
        children: "@Builder支持状态变量刷新"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用UIUtils.makeBinding()包装读取状态变量的回调函数作为参数传入@Builder函数，可以支持@Builder函数中UI组件刷新；UIUtils.makeBinding()中额外传入写状态变量的回调函数可以将@Builder函数内对参数的修改，传递到调用@Builder函数的组件中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Binding, MutableBinding, UIUtils } from '@kit.ArkUI';\n\n@Builder\nfunction customButton(num1: Binding<number>, num2: MutableBinding<number>) {\n  Row() {\n    Column() {\n      Text(`number1: ${num1.value}, number2: ${num2.value}`)\n      Button(`only change number2`)\n        .onClick(() => {\n          // 赋值MutableBinding类型传递该修改到父组件中。\n          num2.value += 1;\n        })\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct ParameterMakeBinding {\n  @Local number1: number = 5;\n  @Local number2: number = 12;\n\n  build() {\n    Column() {\n      customButton(\n        // 使用makeBinding传入参数，需要传入读回调，返回Binding类型，支持@Builder内组件UI刷新。\n        UIUtils.makeBinding<number>(() => this.number1),\n        // makeBinding额外传入写回调时返回MutableBinding类型，支持@Builder内组件UI刷新并且同步属性修改。\n        UIUtils.makeBinding<number>(\n          () => this.number2,\n          (val: number) => {\n            this.number2 = val;\n          })\n      )\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "按引用传递参数",
      children: "按引用传递参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按引用传递参数时，传递的参数可为状态变量，且状态变量的改变会引起@Builder函数内的UI刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Tmp {\n  public paramA1: string = '';\n}\n\n@Builder\nfunction overBuilderByReference(params: Tmp) {\n  Row() {\n    Text(`UseStateVarByReference: ${params.paramA1} `)\n  }\n}\n\n@Entry\n@Component\nstruct ParameterReference {\n  @State label: string = 'Hello';\n\n  build() {\n    Column() {\n      // 在父组件中调用overBuilderByReference组件时，\n      // 把this.label通过引用传递的方式传给overBuilderByReference组件。\n      overBuilderByReference({ paramA1: this.label })\n      Button('Click me').onClick(() => {\n        // 单击Click me后，UI文本从Hello更改为ArkUI。\n        this.label = 'ArkUI';\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "按值传递参数",
      children: "按值传递参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用@Builder装饰的函数默认按值传递。当传递的参数为状态变量时，状态变量的改变不会引起@Builder函数内的UI刷新。所以当使用状态变量的时候，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%8C%89%E5%9B%9E%E8%B0%83%E4%BC%A0%E9%80%92%E5%8F%82%E6%95%B0",
        children: "按回调传递"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%8C%89%E5%BC%95%E7%94%A8%E4%BC%A0%E9%80%92%E5%8F%82%E6%95%B0",
        children: "按引用传递"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nfunction overBuilderByValue(paramA1: string) {\n  Row() {\n    Text(`UseStateVarByValue: ${paramA1} `)\n  }\n}\n\n@Entry\n@Component\nstruct ParameterValue {\n  @State label: string = 'Hello';\n\n  build() {\n    Column() {\n      overBuilderByValue(this.label)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制条件",
      children: "限制条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["@Builder装饰的函数内部在没有使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#mutablebindingt20",
          children: "MutableBinding"
        }), "时不允许修改参数值，修改不会触发UI刷新。若", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%8C%89%E5%BC%95%E7%94%A8%E4%BC%A0%E9%80%92%E5%8F%82%E6%95%B0",
          children: "按引用传递参数"
        }), "且仅传入一个参数时，修改参数内部的属性会抛出运行时错误。使用MutableBinding可以帮助开发者在@Builder装饰的函数内部修改参数值，请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%9C%A8builder%E8%A3%85%E9%A5%B0%E7%9A%84%E5%87%BD%E6%95%B0%E5%86%85%E9%83%A8%E4%BF%AE%E6%94%B9%E5%85%A5%E5%8F%82%E5%86%85%E5%AE%B9",
          children: "在@Builder装饰的函数内部修改入参内容"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["@Builder按引用传递传入一个参数时，可以触发动态渲染UI，请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%8C%89%E5%BC%95%E7%94%A8%E4%BC%A0%E9%80%92%E5%8F%82%E6%95%B0",
          children: "按引用传递参数"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果@Builder传入的参数是两个或两个以上，且未使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%8C%89%E5%9B%9E%E8%B0%83%E4%BC%A0%E9%80%92%E5%8F%82%E6%95%B0",
          children: "按回调传递参数"
        }), "，不会触发动态渲染UI，请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#builder%E5%AD%98%E5%9C%A8%E4%B8%A4%E4%B8%AA%E6%88%96%E4%B8%A4%E4%B8%AA%E4%BB%A5%E4%B8%8A%E5%8F%82%E6%95%B0",
          children: "@Builder存在两个或两个以上参数"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["@Builder传入的参数中同时包含按值传递和按引用传递，不会触发动态渲染UI，请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#builder%E5%AD%98%E5%9C%A8%E4%B8%A4%E4%B8%AA%E6%88%96%E4%B8%A4%E4%B8%AA%E4%BB%A5%E4%B8%8A%E5%8F%82%E6%95%B0",
          children: "@Builder存在两个或两个以上参数"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不允许在@Builder函数里修改参数的属性，否则会抛出运行时错误，从API version 23开始，将返回错误码", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-statemanagement/errorcode-statemanagement#section140109-builder%E9%9D%9E%E6%B3%95%E8%A7%A6%E5%8F%91%E5%8F%82%E6%95%B0%E5%B1%9E%E6%80%A7%E8%B5%8B%E5%80%BC",
          children: "140109"
        }), "，示例请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%9C%A8builder%E8%A3%85%E9%A5%B0%E7%9A%84%E5%87%BD%E6%95%B0%E5%86%85%E9%83%A8%E4%BF%AE%E6%94%B9%E5%85%A5%E5%8F%82%E5%86%85%E5%AE%B9",
          children: "在@Builder装饰的函数内部修改入参内容"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自定义组件内使用自定义构建函数",
      children: "自定义组件内使用自定义构建函数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建私有的@Builder函数，在Column中使用this.builder()调用。通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttoappear",
        children: "aboutToAppear"
      }), "生命周期函数和按钮的点击事件更新builderValue，实现UI的动态渲染。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct PrivateBuilder {\n  @State builderValue: string = 'Hello';\n\n  @Builder\n  builder() {\n    Column() {\n      Text(this.builderValue)\n        .width(230)\n        .height(40)\n        .backgroundColor('#ffeae5e5')\n        .borderRadius(20)\n        .margin(12)\n        .textAlign(TextAlign.Center)\n    }\n  }\n\n  aboutToAppear(): void {\n    setTimeout(() => {\n      this.builderValue = 'Hello World';\n    }, 2000);\n  }\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.builderValue)\n          .width(230)\n          .height(40)\n          .backgroundColor('#ffeae5e5')\n          .borderRadius(20)\n          .textAlign(TextAlign.Center)\n        this.builder()\n        Button('Click to change the builderValue')\n          .onClick(() => {\n            this.builderValue = 'builderValue was clicked';\n          })\n      }\n      .height('100%')\n      .width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例效果图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(225317)/* ["default"] */.A) + "",
        width: "270",
        height: "148"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "全局自定义构建函数-1",
      children: "全局自定义构建函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建全局的@Builder函数，并在Column中通过overBuilder()方式调用。传递参数时，可以使用对象字面量形式，无论是简单类型还是复杂类型，值的任何变化都会触发UI界面的刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class ChildTmp {\n  public val: number = 1;\n}\n\nclass ParamTmp {\n  public strValue: string = 'Hello';\n  public numValue: number = 0;\n  public tmpValue: ChildTmp = new ChildTmp();\n  public arrayTmpValue: Array<ChildTmp> = [];\n}\n\n@Builder\nfunction overBuilder(param: ParamTmp) {\n  Column() {\n    Text(`strValue: ${param.strValue}`)\n      .width(230)\n      .height(40)\n      .margin(12)\n      .backgroundColor('#0d000000')\n      .fontColor('#e6000000')\n      .borderRadius(20)\n      .textAlign(TextAlign.Center)\n    Text(`numValue: ${param.numValue}`)\n      .width(230)\n      .height(40)\n      .margin(12)\n      .backgroundColor('#0d000000')\n      .fontColor('#e6000000')\n      .borderRadius(20)\n      .textAlign(TextAlign.Center)\n    Text(`tmpValue: ${param.tmpValue.val}`)\n      .width(230)\n      .height(40)\n      .margin(12)\n      .backgroundColor('#0d000000')\n      .fontColor('#e6000000')\n      .borderRadius(20)\n      .textAlign(TextAlign.Center)\n    ForEach(param.arrayTmpValue, (item: ChildTmp) => {\n      ListItem() {\n        Text(`arrayTmpValue: ${item.val}`)\n          .width(230)\n          .height(40)\n          .margin(12)\n          .backgroundColor('#0d000000')\n          .fontColor('#e6000000')\n          .borderRadius(20)\n          .textAlign(TextAlign.Center)\n      }\n    }, (item: ChildTmp) => JSON.stringify(item))\n  }\n}\n\n@Entry\n@Component\nstruct ParentDemo {\n  @State objParam: ParamTmp = new ParamTmp();\n\n  build() {\n    Column() {\n      Text('UI Rendered via @Builder')\n        .fontSize(20)\n        .margin(12)\n      // 调用全局@Builder函数overBuilder\n      overBuilder({\n        strValue: this.objParam.strValue,\n        numValue: this.objParam.numValue,\n        tmpValue: this.objParam.tmpValue,\n        arrayTmpValue: this.objParam.arrayTmpValue\n      })\n      Button('Update Values').onClick(() => {\n        this.objParam.strValue = 'Hello World';\n        this.objParam.numValue = 1;\n        this.objParam.tmpValue.val = 8;\n        const childValue: ChildTmp = {\n          val: 2\n        }\n        this.objParam.arrayTmpValue.push(childValue);\n      })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例效果图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(621405)/* ["default"] */.A) + "",
        width: "270",
        height: "344"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "修改装饰器修饰的变量触发ui刷新",
      children: "修改装饰器修饰的变量触发UI刷新"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在该场景中，@Builder被用来展示Text组件，不会参与动态UI刷新。Text组件中值的变化是通过使用装饰器的特性，监听到值的改变触发的UI刷新，而不是通过@Builder的能力触发的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class ChildrenTmp {\n  public strValue: string = 'Hello';\n}\n\n@Entry\n@Component\nstruct ParentSample {\n  @State objParam: ChildrenTmp = new ChildrenTmp();\n  @State label: string = 'World';\n\n  @Builder\n  privateBuilder() {\n    Column() {\n      Text(`wrapBuilder strValue: ${this.objParam.strValue}`)\n        .width(350)\n        .height(40)\n        .margin(12)\n        .backgroundColor('#0d000000')\n        .fontColor('#e6000000')\n        .borderRadius(20)\n        .textAlign(TextAlign.Center)\n      Text(`wrapBuilder num: ${this.label}`)\n        .width(350)\n        .height(40)\n        .margin(12)\n        .backgroundColor('#0d000000')\n        .fontColor('#e6000000')\n        .borderRadius(20)\n        .textAlign(TextAlign.Center)\n    }\n  }\n\n  build() {\n    Column() {\n      Text('UI Rendered via @Builder')\n        .fontSize(20)\n      this.privateBuilder()\n      Button('Update Values').onClick(() => {\n        this.objParam.strValue = 'strValue Hello World';\n        this.label = 'label Hello World';\n      })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例效果图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(482657)/* ["default"] */.A) + "",
        width: "344",
        height: "196"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "将builder装饰的函数当作custombuilder类型使用",
      children: "将@Builder装饰的函数当作CustomBuilder类型使用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当参数类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
        children: "CustomBuilder"
      }), "时，可以传入定义的@Builder函数。因为CustomBuilder实际上是Function(() => any)或void类型，而@Builder也是Function类型。所以通过传入@Builder可以实现特定效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "全局@Builder函数当作CustomBuilder类型传递时需要绑定this上下文，开发者可以直接调用全局@Builder函数，编译工具链会自动生成绑定this上下文的代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nfunction overBuilderDemo() {\n  Row() {\n    Text('Global Builder')\n      .fontSize(30)\n      .fontWeight(FontWeight.Bold)\n  }\n}\n\n@Entry\n@Component\nstruct customBuilderDemo {\n  @State arr: number[] = [0, 1, 2, 3, 4];\n\n  @Builder\n  privateBuilder() {\n    Row() {\n      Text('Private Builder')\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n    }\n  }\n\n  build() {\n    Column() {\n      List({ space: 10 }) {\n        ForEach(this.arr, (item: number) => {\n          ListItem() {\n            Text(`${item}`)\n              .width('100%')\n              .height(100)\n              .fontSize(16)\n              .textAlign(TextAlign.Center)\n              .borderRadius(10)\n              .backgroundColor(0xFFFFFF)\n          }\n          .swipeAction({\n            start: {\n              builder: overBuilderDemo() // 编译工具链会自动绑定this上下文\n            },\n            end: {\n              builder: () => {\n                // 在箭头函数中调用局部@Builder会自动绑定this上下文，无需编译工具链处理\n                this.privateBuilder()\n              }\n            }\n          })\n        }, (item: number) => JSON.stringify(item))\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例效果图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(578417)/* ["default"] */.A) + "",
        width: "360",
        height: "544"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "多层builder函数嵌套",
      children: "多层@Builder函数嵌套"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在@Builder函数内调用自定义组件或其他@Builder函数，实现多个@Builder嵌套使用。若要实现最内层的@Builder动态UI刷新功能，每层调用@Builder的地方必须使用按引用传递的方式。这里$$不是必须的参数形式，可以换成其他名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class ThisTmp {\n  public paramA1: string = '';\n}\n\n@Builder\nfunction parentBuilder($$: ThisTmp) {\n  Row() {\n    Column() {\n      Text(`parentBuilder===${$$.paramA1}`)\n        .width(300)\n        .height(40)\n        .margin(10)\n        .backgroundColor('#0d000000')\n        .fontColor('#e6000000')\n        .borderRadius(20)\n        .textAlign(TextAlign.Center)\n      // 调用自定义组件HelloComponent\n      HelloComponent({ message: $$.paramA1 })\n      // 调用全局@Builder函数childBuilder\n      childBuilder({ paramA1: $$.paramA1 })\n    }\n  }\n}\n\n@Component\nstruct HelloComponent {\n  @Prop message: string = '';\n\n  build() {\n    Row() {\n      Text(`HelloComponent===${this.message}`)\n        .width(300)\n        .height(40)\n        .margin(10)\n        .backgroundColor('#0d000000')\n        .fontColor('#e6000000')\n        .borderRadius(20)\n        .textAlign(TextAlign.Center)\n    }\n  }\n}\n\n@Builder\nfunction childBuilder($$: ThisTmp) {\n  Row() {\n    Column() {\n      Text(`childBuilder===${$$.paramA1}`)\n        .width(300)\n        .height(40)\n        .margin(10)\n        .backgroundColor('#0d000000')\n        .fontColor('#e6000000')\n        .borderRadius(20)\n        .textAlign(TextAlign.Center)\n      // 调用自定义组件HelloChildComponent\n      HelloChildComponent({ message: $$.paramA1 })\n      // 调用全局@Builder函数grandsonBuilder\n      grandsonBuilder({ paramA1: $$.paramA1 })\n    }\n  }\n}\n\n@Component\nstruct HelloChildComponent {\n  @Prop message: string = '';\n\n  build() {\n    Row() {\n      Text(`HelloChildComponent===${this.message}`)\n        .width(300)\n        .height(40)\n        .margin(10)\n        .backgroundColor('#0d000000')\n        .fontColor('#e6000000')\n        .borderRadius(20)\n        .textAlign(TextAlign.Center)\n    }\n  }\n}\n\n@Builder\nfunction grandsonBuilder($$: ThisTmp) {\n  Row() {\n    Column() {\n      Text(`grandsonBuilder===${$$.paramA1}`)\n        .width(300)\n        .height(40)\n        .margin(10)\n        .backgroundColor('#0d000000')\n        .fontColor('#e6000000')\n        .borderRadius(20)\n        .textAlign(TextAlign.Center)\n      // 调用自定义组件HelloGrandsonComponent\n      HelloGrandsonComponent({ message: $$.paramA1 })\n    }\n  }\n}\n\n@Component\nstruct HelloGrandsonComponent {\n  @Prop message: string;\n\n  build() {\n    Row() {\n      Text(`HelloGrandsonComponent===${this.message}`)\n        .width(300)\n        .height(40)\n        .margin(10)\n        .backgroundColor('#0d000000')\n        .fontColor('#e6000000')\n        .borderRadius(20)\n        .textAlign(TextAlign.Center)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct ParentExample {\n  @State label: string = 'Hello';\n\n  build() {\n    Column() {\n      // 调用全局@Builder函数parentBuilder\n      parentBuilder({ paramA1: this.label })\n      Button('Click me').onClick(() => {\n        this.label = 'ArkUI';\n      })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例效果图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(594407)/* ["default"] */.A) + "",
        width: "360",
        height: "396"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "builder函数联合v2装饰器",
      children: "@Builder函数联合V2装饰器"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
        children: "@ObservedV2"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
        children: "@Trace"
      }), "装饰的类对象实例具备深度观测属性变化的能力。在@ComponentV2装饰的自定义组件中，当调用全局Builder或局部Builder且使用值传递的方式传递参数时，修改@Trace装饰的对象属性可以触发UI刷新。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass Info {\n  @Trace public name: string;\n  @Trace public age: number;\n\n  constructor(name: string, age: number) {\n    this.name = name;\n    this.age = age;\n  }\n}\n\n@Builder\nfunction overBuilderTest(param: Info) {\n  Column() {\n    Text(`Global@Builder name: ${param.name}`)\n    Text(`Global@Builder age: ${param.age}`)\n  }\n  .width(230)\n  .height(40)\n  .margin(10)\n  .padding({ left: 20 })\n  .backgroundColor('#0d000000')\n  .borderRadius(20)\n}\n\n@ComponentV2\nstruct ChildPage {\n  @Require @Param childInfo: Info;\n\n  build() {\n    Column() {\n      // 此处必须为值传递方式，如果使用引用传递的方式会被ArkTS语法拦截\n      overBuilderTest(this.childInfo)\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct ParentPage {\n  info1: Info = new Info('Tom', 25);\n  info2: Info = new Info('Tom', 25);\n\n  @Builder\n  privateBuilder() {\n    Column() {\n      Text(`Private@Builder name: ${this.info1.name}`)\n      Text(`Private@Builder age: ${this.info1.age}`)\n    }\n    .width(230)\n    .height(40)\n    .margin(10)\n    .backgroundColor('#0d000000')\n    .borderRadius(20)\n  }\n\n  build() {\n    Column() {\n      Flex() {\n        Column() {\n          Text(`info1: ${this.info1.name}  ${this.info1.age}`) // Text1\n          Text(`info2: ${this.info2.name}  ${this.info2.age}`) // Text2\n        }\n      }\n      .width(230)\n      .height(40)\n      .margin(10)\n      .padding({ left: 60 })\n      .backgroundColor('#0d000000')\n      .borderRadius(20)\n\n      // 调用局部@Builder\n      this.privateBuilder()\n      // 调用全局@Builder, 此处必须为值传递方式，如果使用引用传递的方式会被ArkTS语法拦截\n      overBuilderTest(this.info2)\n      ChildPage({ childInfo: this.info1 }) // 调用自定义组件\n      ChildPage({ childInfo: this.info2 }) // 调用自定义组件\n      Button('change info1&info2')\n        .onClick(() => {\n          this.info1.name = 'Cat'; // 修改Text1显示的info1的name值\n          this.info1.age = 18; // 修改Text1显示的info1的age值\n          this.info2.name = 'Cat'; // 修改Text2显示的info2的name值\n          this.info2.age = 18; // 修改Text2显示的info2的age值\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例效果图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(621780)/* ["default"] */.A) + "",
        width: "226",
        height: "340"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当通过引用传递方式向@Builder传递参数时，若参数为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local",
        children: "@Local"
      }), "装饰的对象，对该对象进行整体赋值会触发@Builder中UI刷新。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class LocalInfo {\n  public name: string = 'Tom';\n  public age: number = 25;\n}\n\n@Builder\nfunction overBuilderLocal(param: LocalInfo) {\n  Column() {\n    Text(`Global@Builder name: ${param.name}`)\n    Text(`Global@Builder age: ${param.age}`)\n  }\n  .width(230)\n  .height(40)\n  .margin(10)\n  .padding({ left: 20 })\n  .backgroundColor('#0d000000')\n  .borderRadius(20)\n}\n\n@ComponentV2\nstruct ChildLocalPage {\n  @Require @Param childLocalInfo: LocalInfo;\n\n  build() {\n    Column() {\n      // 此处为引用传递方式\n      overBuilderLocal({ name: this.childLocalInfo.name, age: this.childLocalInfo.age })\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct ParentLocalPage {\n  LocalInfo1: LocalInfo = { name: 'Tom', age: 25 };\n  @Local LocalInfo2: LocalInfo = { name: 'Tom', age: 25 };\n\n  @Builder\n  privateBuilder() {\n    Column() {\n      Text(`Private@Builder name: ${this.LocalInfo1.name}`)\n      Text(`Private@Builder age: ${this.LocalInfo1.age}`)\n    }\n    .width(230)\n    .height(40)\n    .margin(10)\n    .backgroundColor('#0d000000')\n    .borderRadius(20)\n  }\n\n  build() {\n    Column() {\n      Flex() {\n        Column() {\n          Text(`LocalInfo1: ${this.LocalInfo1.name}  ${this.LocalInfo1.age}`) // Text1\n          Text(`LocalInfo2: ${this.LocalInfo2.name}  ${this.LocalInfo2.age}`) // Text2\n        }\n      }\n      .width(230)\n      .height(40)\n      .margin(10)\n      .padding({ left: 60 })\n      .backgroundColor('#0d000000')\n      .borderRadius(20)\n\n      // 调用局部@Builder\n      this.privateBuilder()\n      // 调用全局@Builder, 此处为引用传递方式\n      overBuilderLocal({ name: this.LocalInfo2.name, age: this.LocalInfo2.age })\n      ChildLocalPage({ childLocalInfo: this.LocalInfo1 }) // 调用自定义组件\n      ChildLocalPage({ childLocalInfo: this.LocalInfo2 }) // 调用自定义组件\n      Button('change LocalInfo1&LocalInfo2')\n        .onClick(() => {\n          this.LocalInfo1 = { name: 'Cat', age: 18 }; // Text1不会刷新，原因是没有装饰器修饰监听不到值的改变\n          this.LocalInfo2 = { name: 'Cat', age: 18 }; // Text2会刷新，原因是有装饰器修饰，可以监听到值的改变\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例效果图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(17748)/* ["default"] */.A) + "",
        width: "256",
        height: "340"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "跨组件复用的全局builder",
      children: "跨组件复用的全局@Builder"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在跨组件的场景中调用全局@Builder，通过按引用传递的方式传递参数，可以实现UI的动态刷新功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class ReusableTmp {\n  public componentName: string = 'Child';\n}\n\n@Builder\nfunction itemBuilder(params: ReusableTmp) {\n  Column() {\n    Text(`Builder ===${params.componentName}`)\n      .width(300)\n      .height(40)\n      .margin(10)\n      .backgroundColor('#0d000000')\n      .fontColor('#e6000000')\n      .borderRadius(20)\n      .textAlign(TextAlign.Center)\n  }\n}\n\n@Entry\n@Component\nstruct ReusablePage {\n  @State switchFlag: boolean = true;\n\n  build() {\n    Column() {\n      if (this.switchFlag) {\n        // 调用自定义组件ReusableChildPage\n        ReusableChildPage({ message: 'Child' })\n      } else {\n        // 调用自定义组件ReusableChildTwoPage\n        ReusableChildTwoPage({ message: 'ChildTwo' })\n      }\n      Button('Click me')\n        .onClick(() => {\n          this.switchFlag = !this.switchFlag;\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n\n@Reusable\n@Component\nstruct ReusableChildPage {\n  @State message: string = 'Child';\n\n  aboutToReuse(params: Record<string, ESObject>): void {\n    console.info('Recycle ====Child');\n    this.message = params.message;\n  }\n\n  build() {\n    Column() {\n      Text(`ReusableChildPage ===${this.message}`)\n        .width(300)\n        .height(40)\n        .margin(10)\n        .backgroundColor('#0d000000')\n        .fontColor('#e6000000')\n        .borderRadius(20)\n        .textAlign(TextAlign.Center)\n      // 调用全局@Builder函数itemBuilder\n      itemBuilder({ componentName: this.message })\n    }\n  }\n}\n\n@Reusable\n@Component\nstruct ReusableChildTwoPage {\n  @State message: string = 'ChildTwo';\n\n  aboutToReuse(params: Record<string, ESObject>): void {\n    console.info('Recycle ====ChildTwo');\n    this.message = params.message;\n  }\n\n  build() {\n    Column() {\n      Text(`ReusableChildTwoPage ===${this.message}`)\n        .width(300)\n        .height(40)\n        .margin(10)\n        .backgroundColor('#0d000000')\n        .fontColor('#e6000000')\n        .borderRadius(20)\n        .textAlign(TextAlign.Center)\n      // 调用全局@Builder函数itemBuilder\n      itemBuilder({ componentName: this.message })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例效果图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(465152)/* ["default"] */.A) + "",
        width: "518",
        height: "280"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "builder支持状态变量刷新",
      children: "@Builder支持状态变量刷新"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，开发者可以通过使用UIUtils.makeBinding()函数、Binding类和MutableBinding类实现@Builder函数中状态变量的刷新。详情请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#makebinding20",
        children: "状态管理API文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Binding, MutableBinding, UIUtils } from '@kit.ArkUI';\n\n@ObservedV2\nclass ClassA {\n  @Trace public props: string = 'Hello';\n}\n\n@Builder\nfunction customButton(num1: Binding<number>, num2: MutableBinding<number>) {\n  Row() {\n    Column() {\n      Text(`number1 === ${num1.value},  number2 === ${num2.value}`)\n        .width(300)\n        .height(40)\n        .margin(10)\n        .backgroundColor('#0d000000')\n        .fontColor('#e6000000')\n        .borderRadius(20)\n        .textAlign(TextAlign.Center)\n\n      Button(`only change number2`)\n        .onClick(() => {\n          num2.value += 1;\n        })\n    }\n  }\n}\n\n@Builder\nfunction customButtonObj(obj1: MutableBinding<ClassA>) {\n  Row() {\n    Column() {\n      Text(`props === ${obj1.value.props}`)\n        .width(300)\n        .height(40)\n        .margin(10)\n        .backgroundColor('#0d000000')\n        .fontColor('#e6000000')\n        .borderRadius(20)\n        .textAlign(TextAlign.Center)\n\n      Button(`change props`)\n        .onClick(() => {\n          obj1.value.props += 'Hi';\n        })\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Single {\n  @Local number1: number = 5;\n  @Local number2: number = 12;\n  @Local classA: ClassA = new ClassA();\n\n  build() {\n    Column() {\n      Button(`change both number1 and number2`)\n        .onClick(() => {\n          this.number1 += 1;\n          this.number2 += 2;\n        })\n      Text(`number1 === ${this.number1}`)\n        .width(300)\n        .height(40)\n        .margin(10)\n        .backgroundColor('#0d000000')\n        .fontColor('#e6000000')\n        .borderRadius(20)\n        .textAlign(TextAlign.Center)\n      Text(`number2 === ${this.number2}`)\n        .width(300)\n        .height(40)\n        .margin(10)\n        .backgroundColor('#0d000000')\n        .fontColor('#e6000000')\n        .borderRadius(20)\n        .textAlign(TextAlign.Center)\n      // 调用全局@Builder函数customButton\n      customButton(\n        UIUtils.makeBinding<number>(() => this.number1), // 使用UIUtils.makeBinding()函数实现@Builder函数中状态变量的刷新\n        UIUtils.makeBinding<number>(\n          () => this.number2,\n          (val: number) => {\n            this.number2 = val;\n          })\n      )\n      Text(`classA.props === ${this.classA.props}`)\n        .width(300)\n        .height(40)\n        .margin(10)\n        .backgroundColor('#0d000000')\n        .fontColor('#e6000000')\n        .borderRadius(20)\n        .textAlign(TextAlign.Center)\n      // 调用全局@Builder函数customButtonObj\n      customButtonObj(\n        UIUtils.makeBinding<ClassA>( // 使用UIUtils.makeBinding()函数实现@Builder函数中状态变量的刷新\n          () => this.classA,\n          (val: ClassA) => {\n            this.classA = val;\n          })\n      )\n    }\n    .width('100%')\n    .height('100%')\n    .alignItems(HorizontalAlign.Center)\n    .justifyContent(FlexAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例效果图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(353358)/* ["default"] */.A) + "",
        width: "395",
        height: "511"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "builder存在两个或两个以上参数",
      children: "@Builder存在两个或两个以上参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当存在两个或两个以上的参数时，即使通过对象字面量形式传递，值的改变也不会触发UI刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class GlobalTmp1 {\n  public strValue: string = 'Hello';\n}\n\n@Builder\nfunction overBuilder1(param: GlobalTmp1, num: number) {\n  Column() {\n    Text(`strValue: ${param.strValue}`)\n    Text(`num: ${num}`)\n  }\n}\n\n@Entry\n@Component\nstruct Parent1 {\n  @State objParam: GlobalTmp1 = new GlobalTmp1();\n  @State num: number = 0;\n\n  build() {\n    Column() {\n      Text('UI Rendered via @Builder')\n        .fontSize(20)\n      // 使用了两个参数，用法错误。\n      overBuilder1({ strValue: this.objParam.strValue }, this.num)\n      Line()\n        .width('100%')\n        .height(10)\n        .backgroundColor('#000000').margin(10)\n      Button('Update Values').onClick(() => {\n        this.objParam.strValue = 'Hello World';\n        this.num = 1;\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class GlobalTmp2 {\n  public strValue: string = 'Hello';\n}\n\nclass SecondTmp {\n  public numValue: number = 0;\n}\n\n@Builder\nfunction overBuilder2(param: GlobalTmp2, num: SecondTmp) {\n  Column() {\n    Text(`strValue: ${param.strValue}`)\n    Text(`num: ${num.numValue}`)\n  }\n}\n\n@Entry\n@Component\nstruct Parent2 {\n  @State strParam: GlobalTmp2 = new GlobalTmp2();\n  @State numParam: SecondTmp = new SecondTmp();\n\n  build() {\n    Column() {\n      Text('UI Rendered via @Builder')\n        .fontSize(20)\n      // 使用了两个参数，用法错误。\n      overBuilder2({ strValue: this.strParam.strValue }, { numValue: this.numParam.numValue })\n      Line()\n        .width('100%')\n        .height(10)\n        .backgroundColor('#000000').margin(10)\n      Button('Update Values').onClick(() => {\n        this.strParam.strValue = 'Hello World';\n        this.numParam.numValue = 1;\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Builder只接受一个参数。当传入一个参数的时候，通过对象字面量的形式传递，值的改变会引起UI的刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class GlobalTmp3 {\n  public strValue: string = 'Hello';\n  public numValue: number = 0;\n}\n\n@Builder\nfunction overBuilder3(param: GlobalTmp3) {\n  Column() {\n    Text(`strValue: ${param.strValue}`)\n    Text(`num: ${param.numValue}`)\n  }\n}\n\n@Entry\n@Component\nstruct Parent3 {\n  @State objParam: GlobalTmp3 = new GlobalTmp3();\n\n  build() {\n    Column() {\n      Text('UI Rendered via @Builder')\n        .fontSize(20)\n      // 传入一个参数，正确用法\n      overBuilder3({ strValue: this.objParam.strValue, numValue: this.objParam.numValue })\n      Line()\n        .width('100%')\n        .height(10)\n        .backgroundColor('#000000').margin(10)\n      Button('Update Values').onClick(() => {\n        this.objParam.strValue = 'Hello World';\n        this.objParam.numValue = 1;\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用componentv2装饰器触发动态刷新",
      children: "使用@ComponentV2装饰器触发动态刷新"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在@ComponentV2装饰的组件中，配合@ObservedV2和@Trace装饰器，通过按值传递实现UI刷新功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#componentv2",
        children: "@ComponentV2"
      }), "装饰的自定义组件中，使用简单数据类型不可以触发UI的刷新。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass ParamTemp {\n  @Trace public count : number = 0;\n}\n\n@Builder\nfunction renderNumber(paramNum: number) {\n  Text(`paramNum : ${paramNum}`)\n    .fontSize(30)\n    .fontWeight(FontWeight.Bold)\n}\n\n@Entry\n@ComponentV2\nstruct PageBuilderIncorrectUsage {\n  @Local classValue: ParamTemp = new ParamTemp();\n  // 此处使用简单数据类型不支持刷新UI的能力。\n  @Local numValue: number = 0;\n  private progressTimer: number = -1;\n\n  aboutToAppear(): void {\n    this.progressTimer = setInterval(() => {\n      if (this.classValue.count < 100) {\n        this.classValue.count += 5;\n        this.numValue += 5;\n      } else {\n        clearInterval(this.progressTimer);\n      }\n    }, 500);\n  }\n\n  build() {\n    Column() {\n      renderNumber(this.numValue)\n    }\n    .width('100%')\n    .height('100%')\n    .padding(50)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在@ComponentV2装饰器装饰的自定义组件中，只有使用@ObservedV2装饰的ParamTmpClass类和使用@Trace装饰的count属性才能触发UI刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass ParamTmpClass {\n  @Trace public count: number = 0;\n}\n\n@Builder\nfunction renderText(param: ParamTmpClass) {\n  Column() {\n    Text(`param : ${param.count}`)\n      .fontSize(20)\n      .fontWeight(FontWeight.Bold)\n  }\n}\n\n@Builder\nfunction renderMap(paramMap: Map<string, number>) {\n  Text(`paramMap : ${paramMap.get('name')}`)\n    .fontSize(20)\n    .fontWeight(FontWeight.Bold)\n}\n\n@Builder\nfunction renderSet(paramSet: Set<number>) {\n  Text(`paramSet : ${paramSet.size}`)\n    .fontSize(20)\n    .fontWeight(FontWeight.Bold)\n}\n\n@Builder\nfunction renderNumberArr(paramNumArr: number[]) {\n  Text(`paramNumArr : ${paramNumArr[0]}`)\n    .fontSize(20)\n    .fontWeight(FontWeight.Bold)\n}\n\n@Entry\n@ComponentV2\nstruct PageBuilderCorrectUsage {\n  @Local builderParams: ParamTmpClass = new ParamTmpClass();\n  @Local mapValue: Map<string, number> = new Map();\n  @Local setValue: Set<number> = new Set([0]);\n  @Local numArrValue: number[] = [0];\n  private progressTimer: number = -1;\n\n  aboutToAppear(): void {\n    this.progressTimer = setInterval(() => {\n      if (this.builderParams.count < 100) {\n        this.builderParams.count += 5;\n        this.mapValue.set('name', this.builderParams.count);\n        this.setValue.add(this.builderParams.count);\n        this.numArrValue[0] = this.builderParams.count;\n      } else {\n        clearInterval(this.progressTimer);\n      }\n    }, 500);\n  }\n\n  @Builder\n  localBuilder() {\n    Column() {\n      Text(`localBuilder : ${this.builderParams.count}`)\n        .fontSize(20)\n        .fontWeight(FontWeight.Bold)\n    }\n  }\n\n  build() {\n    Column() {\n      this.localBuilder()\n      Text(`builderParams :${this.builderParams.count}`)\n        .fontSize(20)\n        .fontWeight(FontWeight.Bold)\n      renderText(this.builderParams)\n      renderText({ count: this.builderParams.count })\n      renderMap(this.mapValue)\n      renderSet(this.setValue)\n      renderNumberArr(this.numArrValue)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在builder内创建自定义组件传递参数不刷新问题",
      children: "在@Builder内创建自定义组件传递参数不刷新问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在parentBuilder1函数中创建自定义组件HelloComponent1，传递参数为class对象并修改对象内的值时，UI不会触发刷新功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Tmp4 {\n  public name: string = 'Hello';\n  public age: number = 16;\n}\n\n@Builder\nfunction parentBuilder1(params: Tmp4) {\n  Row() {\n    Column() {\n      Text(`parentBuilder1===${params.name}===${params.age}`)\n        .fontSize(20)\n        .fontWeight(FontWeight.Bold)\n      // 此写法不属于按引用传递方式，用法错误导致UI不刷新。\n      HelloComponent1({ info: params })\n    }\n  }\n}\n\n@Component\nstruct HelloComponent1 {\n  @Prop info: Tmp4 = new Tmp4();\n\n  build() {\n    Row() {\n      Text(`HelloComponent1===${this.info.name}===${this.info.age}`)\n        .fontSize(20)\n        .fontWeight(FontWeight.Bold)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct ParentPage1 {\n  @State nameValue: string = 'Zhang San';\n  @State ageValue: number = 18;\n\n  build() {\n    Column() {\n      parentBuilder1({ name: this.nameValue, age: this.ageValue })\n      Button('Click me')\n        .onClick(() => {\n          // 此处修改内容时，不会引起HelloComponent1处的变化\n          this.nameValue = 'Li Si';\n          this.ageValue = 20;\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在parentBuilder2函数中创建自定义组件HelloComponent2，传递参数为对象字面量形式并修改对象内的值时，UI触发刷新功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Tmp5 {\n  public name: string = 'Hello';\n  public age: number = 16;\n}\n\n@Builder\nfunction parentBuilder2(params: Tmp5) {\n  Row() {\n    Column() {\n      Text(`parentBuilder2===${params.name}===${params.age}`)\n        .fontSize(20)\n        .fontWeight(FontWeight.Bold)\n      // 将整个对象拆分开变成简单类型，属于按引用传递方式，更改属性能够触发UI刷新。\n      HelloComponent2({ childName: params.name, childAge: params.age })\n    }\n  }\n}\n\n@Component\nstruct HelloComponent2 {\n  @Prop childName: string = '';\n  @Prop childAge: number = 0;\n\n  build() {\n    Row() {\n      Text(`HelloComponent2===${this.childName}===${this.childAge}`)\n        .fontSize(20)\n        .fontWeight(FontWeight.Bold)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct ParentPage2 {\n  @State nameValue: string = 'Zhang San';\n  @State ageValue: number = 18;\n\n  build() {\n    Column() {\n      parentBuilder2({ name: this.nameValue, age: this.ageValue })\n      Button('Click me')\n        .onClick(() => {\n          // 此处修改内容时，会引起HelloComponent2处的变化\n          this.nameValue = 'Li Si';\n          this.ageValue = 20;\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在ui语句外调用builder函数或方法影响节点正常刷新",
      children: "在UI语句外调用@Builder函数或方法影响节点正常刷新"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当@Builder方法赋值给变量或者数组后，在UI方法中无法使用，且会造成刷新时节点显示异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct BackGround1 {\n  @Builder\n  myImages() {\n    Column() {\n      // 从应用media目录加载名为startIcon的图像资源。此处'app.media.startIcon'仅作示例，请开发者自行替换。\n      Image($r('app.media.startIcon')).width('100%').height('100%')\n    }\n  };\n\n  @Builder\n  myImages2() {\n    Column() {\n      // 从应用media目录加载名为startIcon的图像资源。此处'app.media.startIcon'仅作示例，请开发者自行替换。\n      Image($r('app.media.startIcon')).width('100%').height('100%')\n    }\n  };\n\n  private bgList: Array<CustomBuilder> = [this.myImages(), this.myImages2()]; // 错误用法，应避免在UI方法外调用@Builder方法\n  @State bgBuilder: CustomBuilder = this.myImages(); // 错误用法，应避免在UI方法外调用@Builder方法\n  @State bgColor: ResourceColor = Color.Orange;\n  @State bgColor2: ResourceColor = Color.Orange;\n  @State index: number = 0;\n\n  build() {\n    Column({ space: 10 }) {\n      Text('1').width(100).height(50)\n      Text('2').width(100).height(50)\n      Text('3').width(100).height(50)\n\n      Text('4-1').width(100).height(50).fontColor(this.bgColor)\n      Text('5-1').width(100).height(50)\n      Text('4-2').width(100).height(50)\n      Text('5-2').width(100).height(50)\n      Stack() {\n        Column() {\n          Text('Vsync2')\n        }\n        .size({ width: '100%', height: '100%' })\n        .border({ width: 1, color: Color.Black })\n      }\n      .size({ width: 100, height: 80 })\n      .backgroundColor('#ffbbd4bb')\n\n      Button('change').onClick((event: ClickEvent) => {\n        this.index = 1;\n        this.bgColor = Color.Red;\n        this.bgColor2 = Color.Red;\n      })\n    }\n    .margin(10)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Builder方法赋值给变量或数组后在UI方法中无法使用，开发者应避免将@Builder赋值给变量或数组后再使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct BackGround2 {\n  @Builder\n  myImages() {\n    Column() {\n      // 从应用media目录加载名为startIcon的图像资源。此处'app.media.startIcon'仅作示例，请开发者自行替换。\n      Image($r('app.media.startIcon')).width('100%').height('100%')\n    }\n  }\n\n  @Builder\n  myImages2() {\n    Column() {\n      // 从应用media目录加载名为startIcon的图像资源。此处'app.media.startIcon'仅作示例，请开发者自行替换。\n      Image($r('app.media.startIcon')).width('100%').height('100%')\n    }\n  }\n\n  @State bgColor: ResourceColor = Color.Orange;\n  @State bgColor2: ResourceColor = Color.Orange;\n  @State index: number = 0;\n\n  build() {\n    Column({ space: 10 }) {\n      Text('1').width(100).height(50)\n      Text('2').width(100).height(50).background(this.myImages) // 直接传递@Builder方法\n      Text('3').width(100).height(50).background(this.myImages()) // 直接调用@Builder方法\n\n      Text('4-1').width(100).height(50).fontColor(this.bgColor)\n      Text('5-1').width(100).height(50)\n      Text('4-2').width(100).height(50)\n      Text('5-2').width(100).height(50)\n      Stack() {\n        Column() {\n          Text('Vsync2')\n        }\n        .size({ width: '100%', height: '100%' })\n        .border({ width: 1, color: Color.Black })\n      }\n      .size({ width: 100, height: 80 })\n      .backgroundColor('#ffbbd4bb')\n\n      Button('change').onClick((event: ClickEvent) => {\n        this.index = 1;\n        this.bgColor = Color.Red;\n        this.bgColor2 = Color.Red;\n      })\n    }\n    .margin(10)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在builder方法中使用mutablebinding未传递set访问器",
      children: "在@Builder方法中使用MutableBinding未传递set访问器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Builder方法定义时使用MutableBinding，构造时没有给MutableBinding类型参数传递set访问器，触发set访问器会造成运行时错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils, Binding, MutableBinding } from '@kit.ArkUI';\n\n@ObservedV2\nclass GlobalTmp1 {\n  @Trace public strValue: string = 'Hello';\n}\n\n@Builder\nfunction builderWithTwoParams1(param1: Binding<GlobalTmp1>, param2: MutableBinding<number>) {\n  Column() {\n    Text(`strValue: ${param1.value.strValue}`)\n    Button(`num: ${param2.value}`)\n      .onClick(() => {\n        param2.value += 1; // 点击Button触发set访问器会造成运行时错误\n      })\n  }.borderWidth(1)\n}\n\n@Entry\n@ComponentV2\nstruct MakeBindingTest1 {\n  @Local GlobalTmp1: GlobalTmp1 = new GlobalTmp1();\n  @Local num: number = 0;\n\n  build() {\n    Column() {\n      Text(`${this.GlobalTmp1.strValue}`)\n      builderWithTwoParams1(UIUtils.makeBinding(() => this.GlobalTmp1),\n        UIUtils.makeBinding<number>(() => this.num)) // 构造MutableBinding类型参数时没有传SetterCallback\n      Button('Update Values').onClick(() => {\n        this.GlobalTmp1.strValue = 'Hello World 2025';\n        this.num = 1;\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用规格详见状态管理API文档中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#mutablebindingt20",
        children: "MutableBinding"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils, Binding, MutableBinding } from '@kit.ArkUI';\n\n@ObservedV2\nclass GlobalTmp2 {\n  @Trace public strValue: string = 'Hello';\n}\n\n@Builder\nfunction builderWithTwoParams2(param1: Binding<GlobalTmp2>, param2: MutableBinding<number>) {\n  Column() {\n    Text(`strValue: ${param1.value.strValue}`)\n    Button(`num: ${param2.value}`)\n      .onClick(() => {\n        param2.value += 1; // 修改了MutableBinding类型参数的value属性\n      })\n  }.borderWidth(1)\n}\n\n@Entry\n@ComponentV2\nstruct MakeBindingTest2 {\n  @Local GlobalTmp2: GlobalTmp2 = new GlobalTmp2();\n  @Local num: number = 0;\n\n  build() {\n    Column() {\n      Text(`${this.GlobalTmp2.strValue}`)\n      builderWithTwoParams2(UIUtils.makeBinding(() => this.GlobalTmp2),\n        UIUtils.makeBinding<number>(() => this.num,\n          val => {\n            this.num = val;\n          }))\n      Button('Update Values').onClick(() => {\n        this.GlobalTmp2.strValue = 'Hello World 2025';\n        this.num = 1;\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在builder装饰的函数内部修改入参内容",
      children: "在@Builder装饰的函数内部修改入参内容"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#mutablebindingt20",
        children: "MutableBinding"
      }), "的情况下，在@Builder装饰的函数内部修改参数值，修改不会生效且可能造成运行时错误。从API version 23开始，将返回错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-statemanagement/errorcode-statemanagement#section140109-builder%E9%9D%9E%E6%B3%95%E8%A7%A6%E5%8F%91%E5%8F%82%E6%95%B0%E5%B1%9E%E6%80%A7%E8%B5%8B%E5%80%BC",
        children: "140109"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nfunction myGlobalBuilder(value: string) {\n  Column() {\n    Text(`myGlobalBuilder: ${value} `)\n      .fontSize(16)\n      .onClick(() => {\n        // 简单类型按值传递的@Builder函数中修改参数，不闪退但UI不刷新\n        value = 'value change';\n      })\n  }.borderWidth(1)\n}\n\ninterface TempMod1 {\n  paramA: string;\n}\n\n@Builder\nfunction overBuilderMod1(param: TempMod1) {\n  Row() {\n    Column() {\n      Button(`overBuilderMod1 === ${param.paramA}`)\n        .onClick(() => {\n          // 错误写法，不允许在@Builder装饰的函数内部修改对象类型参数的属性，闪退且UI不刷新\n          param.paramA = 'Yes';\n        })\n      Button('change')\n        .onClick(() => {\n          // 错误写法，不允许在@Builder装饰的函数内部修改对象类型参数的引用，不闪退但UI不刷新\n          param = { paramA: 'change trial' };\n        })\n    }\n  }\n}\n\n@Entry\n@Component\nstruct ParentMod1 {\n  @State label: string = 'Hello';\n  @State message1: string = 'Value Passing';\n\n  @Builder\n  extendBlank() {\n    Row() {\n      Blank()\n    }\n    .height(20)\n  }\n\n  build() {\n    Column() {\n      // 按引用传递能实现参数变化时的UI刷新，但不能在@Builder函数内部修改参数\n      overBuilderMod1({ paramA: this.label });\n      this.extendBlank();\n      Button('click me')\n        .onClick(() => {\n          this.label = 'ArkUI';\n        })\n      this.extendBlank();\n      myGlobalBuilder(this.message1);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["正确使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#mutablebindingt20",
        children: "MutableBinding"
      }), "可以帮助开发者在@Builder装饰的函数内部修改参数值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils, MutableBinding } from '@kit.ArkUI';\n\n// 使用MutableBinding在@Builder装饰的函数中修改参数值\n@Builder\nfunction myGlobalBuilderMod(str: MutableBinding<string>) {\n  Column() {\n    Text(`Mod--MyGlobalBuilder: ${str.value}`)\n      .fontSize(16)\n      .onClick(() => {\n        str.value = 'value change mod';\n      })\n  }\n}\n\ninterface TempMod2 {\n  paramA: string;\n}\n\n// 使用MutableBinding在@Builder装饰的函数内部修改参数值\n@Builder\nfunction overBuilderMod2(param: MutableBinding<TempMod2>) {\n  Column() {\n    Button(`Mod--overBuilder === ${param.value.paramA}`)\n      .onClick(() => {\n        param.value.paramA = 'Yes';\n      })\n    Button(`change`)\n      .onClick(() => {\n        param.value = { paramA: 'trialOne' };\n      })\n  }\n}\n\n@Entry\n@Component\nstruct ParentMod2 {\n  @State label: string = 'Hello';\n  @State message1: string = 'Value Passing';\n  @State objectOne: TempMod2 = {\n    paramA: this.label\n  };\n\n  @Builder\n  extendBlank() {\n    Row() {\n      Blank()\n    }\n    .height(20)\n  }\n\n  build() {\n    Column() {\n      // 使用MutableBinding时无法传对象字面量，需要先将字面量对象抽出为状态变量\n      overBuilderMod2(\n        UIUtils.makeBinding<TempMod2>(\n          () => this.objectOne,\n          value => {\n            this.objectOne = value; // 必须要传SetterCallback，否则触发时会造成运行时错误\n          }\n        )\n      )\n      this.extendBlank();\n      Button('click me')\n        .onClick(() => {\n          this.objectOne.paramA = 'ArkUI';\n        })\n      this.extendBlank();\n      myGlobalBuilderMod(\n        UIUtils.makeBinding<string>(\n          () => this.message1,\n          value => {\n            this.message1 = value; // 必须要传SetterCallback，否则触发时会造成运行时错误\n          }\n        )\n      );\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在watch函数中执行builder函数",
      children: "在@Watch函数中执行@Builder函数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-watch",
        children: "@Watch"
      }), "函数中执行@Builder函数，会导致UI刷新异常。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Child1 {\n  @Provide @Watch('provideWatch') content: string = 'Index: hello world';\n\n  @Builder\n  watchBuilder(content: string) {\n    Row() {\n      Text(`${content}`)\n    }\n  }\n\n  provideWatch() {\n    this.watchBuilder(this.content); // 错误写法，在@Watch函数中使用@Builder函数\n  }\n\n  build() {\n    Column() {\n      Button(`content value: ${this.content}`)\n        .onClick(() => {\n          this.content += '_world';\n        })\n      this.watchBuilder(this.content);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Button按钮会出现UI异常的情况，开发者需要避免在@Watch函数中使用@Builder函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Child2 {\n  @Provide @Watch('provideWatch') content: string = 'Index: hello world';\n\n  @Builder\n  watchBuilder(content: string) {\n    Row() {\n      Text(`${content}`)\n    }\n  }\n\n  provideWatch() {\n    console.info(`content value has changed.`);\n  }\n\n  build() {\n    Column() {\n      Button(`content value: ${this.content}`)\n        .onClick(() => {\n          this.content += '_world';\n        })\n      this.watchBuilder(this.content);\n    }\n  }\n}\n"
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
578417(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797924-6a5781bef5db9169a730195737556d54.gif");

},
225317(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437617-be33988c4eb4a8ba5c216f088b2eae82.gif");

},
621405(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957572-9485e76c58bf3e7ebfb9eaa53979075b.gif");

},
353358(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437621-911516815a5a7b6dfb951d8628d0aeb7.gif");

},
594407(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437619-cea96d16b0f2838ea5bf6b90b0461dad.gif");

},
482657(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477573-feaf2bf630ab46844510b52acc0c4510.gif");

},
621780(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957574-e102d554c3687a08a97791c959bda981.gif");

},
465152(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797926-e1e4596e4e947afc642b986e6b1f7043.gif");

},
302684(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
17748(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477575-051e4eff9467bf0297bf8a6051b47aa4.gif");

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