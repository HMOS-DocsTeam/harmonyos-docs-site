"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["332087"], {
565172(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_ui_paradigm_basic_syntax_arkts_extend_components_arkts_localbuilder_arkts_localbuilder_md_820_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-ui-paradigm-basic-syntax-arkts-extend-components-arkts-localbuilder-arkts-localbuilder-md-820.json
var site_docs_arkui_arkts_ui_development_arkts_ui_paradigm_basic_syntax_arkts_extend_components_arkts_localbuilder_arkts_localbuilder_md_820_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-localbuilder/arkts-localbuilder","title":"@LocalBuilder装饰器： 维持组件关系","description":"当开发者使用局部@Builder进行引用数据传递时，需要考虑组件的父子关系。然而在使用.bind(this)的方式更改函数调用上下文后，会出现组件的父子关系与状态管理的父子关系不一致的问题。为了解决这一问题，引入@LocalBuilder装饰器。@LocalBuilder拥有和局部@Builder相同的功能，且比局部@Builder能够更好的确定组件的父子关系和状态管理的父子关系。","source":"@site/docs/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-localbuilder/arkts-localbuilder.md","sourceDirName":"arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-localbuilder","slug":"/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-localbuilder/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-localbuilder/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"@LocalBuilder装饰器： 维持组件关系","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-localbuilder","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"@Builder装饰器：自定义构建函数","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder/"},"next":{"title":"@BuilderParam装饰器：引用@Builder函数","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builderparam/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-localbuilder/arkts-localbuilder.md


const frontMatter = {
	title: '@LocalBuilder装饰器： 维持组件关系',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-localbuilder',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '@LocalBuilder装饰器： 维持组件关系';

const assets = {

};



const toc = [{
  "value": "装饰器使用说明",
  "id": "装饰器使用说明",
  "level": 2
}, {
  "value": "自定义组件内自定义构建函数",
  "id": "自定义组件内自定义构建函数",
  "level": 3
}, {
  "value": "@LocalBuilder和局部@Builder使用区别",
  "id": "localbuilder和局部builder使用区别",
  "level": 2
}, {
  "value": "限制条件",
  "id": "限制条件",
  "level": 2
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
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "@LocalBuilder在@ComponentV2修饰的自定义组件中使用",
  "id": "localbuilder在componentv2修饰的自定义组件中使用",
  "level": 3
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "@LocalBuilder函数和$$参数一起使用UI不刷新",
  "id": "localbuilder函数和参数一起使用ui不刷新",
  "level": 3
}, {
  "value": "@LocalBuilder函数在参数处直接调用出现布局错乱",
  "id": "localbuilder函数在参数处直接调用出现布局错乱",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "localbuilder装饰器-维持组件关系",
        children: "@LocalBuilder装饰器： 维持组件关系"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当开发者使用局部@Builder进行引用数据传递时，需要考虑组件的父子关系。然而在使用.bind(this)的方式更改函数调用上下文后，会出现组件的父子关系与状态管理的父子关系不一致的问题。为了解决这一问题，引入@LocalBuilder装饰器。@LocalBuilder拥有和局部@Builder相同的功能，且比局部@Builder能够更好的确定组件的父子关系和状态管理的父子关系。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在阅读本文档前，建议提前阅读：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
        children: "@Builder"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(806871)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，该装饰器支持在ArkTS卡片中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，该装饰器支持在元服务中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "装饰器使用说明",
      children: "装饰器使用说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自定义组件内自定义构建函数",
      children: "自定义组件内自定义构建函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义的语法："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@LocalBuilder\nmyBuilderFunction() {\n  // ···\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用方法："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "this.myBuilderFunction()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "允许在自定义组件内定义一个或多个@LocalBuilder函数，该函数被视为是该组件的私有、特殊类型的成员函数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自定义构建函数可以在所属组件的build函数和其他自定义构建函数中调用，但不允许在组件外调用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在自定义函数体中，this指代当前所属组件，组件的状态变量可以在自定义构建函数内访问。建议通过this访问自定义组件的状态变量而不是参数传递。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "localbuilder和局部builder使用区别",
      children: "@LocalBuilder和局部@Builder使用区别"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "跨组件传递局部@Builder函数时，会使用.bind(this)更改函数上下文，但这可能会导致组件的父子关系与状态管理的父子关系不一致。而@LocalBuilder无论是否使用.bind(this)，都不会改变组件的父子关系，即@LocalBuilder中定义组件所属的父组件是确定的，无法被改变。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(222457)/* ["default"] */.A) + "",
        width: "586",
        height: "282"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(646376)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bind()方法创建一个新的函数，称为绑定函数，当调用者绑定bind()时，该绑定函数会以创建时传入的第一个this作为原函数的this。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下方用例中，当函数componentBuilder被@Builder修饰时，显示效果为“Child”；当函数componentBuilder被@LocalBuilder修饰时，显示效果是“Parent”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct Child {\n  label: string = 'Child';\n  @BuilderParam customBuilderParam: () => void;\n\n  build() {\n    Column() {\n      this.customBuilderParam()\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Parent {\n  label: string = 'Parent';\n\n  @Builder\n  componentBuilder() {\n    Text(`${this.label}`) // @Builder内的this指向实际调用点的组件，在这个用例中因为调用点在Child组件内，所以this实际指向Child组件\n  }\n\n  @LocalBuilder\n  componentLocalBuilder() {\n    Text(`${this.label}`) // @LocalBuilder内的this指向声明@LocalBuilder函数Parent组件\n  }\n\n  build() {\n    Column() {\n      Child({ customBuilderParam: this.componentBuilder }) // Child组件内调用customBuilderParam显示字符串Child。\n      Child({ customBuilderParam: this.componentLocalBuilder }) // Child组件内调用customBuilderParam显示字符串Parent，传递函数本身写法。\n      Child({\n        customBuilderParam: () => {\n          this.componentLocalBuilder()\n        }\n      }) // Child组件内调用customBuilderParam显示字符串Parent，() => { 函数调用 }写法。\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制条件",
      children: "限制条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@LocalBuilder只能在所属组件内声明，不允许全局声明。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@LocalBuilder不能与内置装饰器或自定义装饰器一起使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在自定义组件中，@LocalBuilder不能用来装饰静态函数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "关于@LocalBuilder函数的传递方式，建议优先传递函数本身，或使用 () => { 函数调用 } 的形式，避免直接传递函数的执行结果。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "参数传递规则",
      children: "参数传递规则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@LocalBuilder函数的参数传递有", (0,jsx_runtime.jsx)(_components.a, {
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
        children: "参数的类型必须与参数声明的类型一致，且不允许为undefined、null。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在@LocalBuilder修饰的函数内部，不允许改变参数值。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["@LocalBuilder内的UI语法遵循", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#build%E5%87%BD%E6%95%B0%E5%AE%9E%E7%8E%B0%E8%A7%84%E5%88%99",
          children: "UI语法规则"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "按回调传递和按引用传递时，支持@Builder函数内UI组件刷新。按引用传递只在传入一个参数且该参数直接传入对象字面量时生效，有多个参数时不支持@Builder函数内UI组件刷新。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "按回调传递参数",
      children: "按回调传递参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，开发者可以通过使用UIUtils.makeBinding()函数、Binding类和MutableBinding类实现@Builder函数中状态变量的刷新。详情请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#makebinding20",
        children: "状态管理API文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils, Binding } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Parent {\n  @State variableValue: string = 'Hello World';\n\n  @LocalBuilder\n  citeLocalBuilder(params: Binding<string>) {\n    Row() {\n      Text(`UseStateVarByReference: ${params.value}`)\n    }\n  }\n\n  build() {\n    Column() {\n      this.citeLocalBuilder(UIUtils.makeBinding<string>(() => this.variableValue))\n      Button('Click me')\n        .onClick(() => {\n          this.variableValue = 'Hi World';\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "按引用传递参数",
      children: "按引用传递参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按引用传递参数时，传递的参数可为状态变量，且状态变量的改变会引起@LocalBuilder函数内的UI刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(991410)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若@LocalBuilder函数和$$参数一起使用，子组件调用父组件的@LocalBuilder函数，子组件传入的参数发生变化，不会引起@LocalBuilder函数内的UI刷新。见常见错误", (0,jsx_runtime.jsx)(_components.a, {
        href: "#localbuilder%E5%87%BD%E6%95%B0%E5%92%8C%E5%8F%82%E6%95%B0%E4%B8%80%E8%B5%B7%E4%BD%BF%E7%94%A8ui%E4%B8%8D%E5%88%B7%E6%96%B0",
        children: "@LocalBuilder函数和$$参数一起使用UI不刷新"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件Parent内的@LocalBuilder函数在build函数内调用，按键值对写法进行传值，当点击Click me时，@LocalBuilder内的Text文本内容会随着状态变量内容的改变而改变。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class ReferenceType {\n  paramString: string = '';\n}\n\n@Entry\n@Component\nstruct Parent {\n  @State variableValue: string = 'Hello World';\n\n  @LocalBuilder\n  citeLocalBuilder(params: ReferenceType) {\n    Row() {\n      Text(`UseStateVarByReference: ${params.paramString}`)\n    }\n  };\n\n  build() {\n    Column() {\n      this.citeLocalBuilder({ paramString: this.variableValue })\n      Button('Click me').onClick(() => {\n        this.variableValue = 'Hi World';\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按引用传递参数时，如果在@LocalBuilder函数内调用自定义组件，ArkUI提供$$作为按引用传递参数的范式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件Parent内的@LocalBuilder函数内调用自定义组件，且按照引用传递参数将值传递到自定义组件，当Parent组件内状态变量值发生变化时，@LocalBuilder函数内的自定义组件HelloComponent的message值也会随之更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class ReferenceType {\n  paramString: string = '';\n}\n\n@Component\nstruct HelloComponent {\n  @Prop message: string;\n\n  build() {\n    Row() {\n      Text(`HelloComponent===${this.message}`)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Parent {\n  @State variableValue: string = 'Hello World';\n\n  @LocalBuilder\n  citeLocalBuilder($$: ReferenceType) {\n    Row() {\n      Column() {\n        Text(`citeLocalBuilder===${$$.paramString}`)\n        HelloComponent({ message: $$.paramString })\n      }\n    }\n  }\n\n  build() {\n    Column() {\n      this.citeLocalBuilder({ paramString: this.variableValue })\n      Button('Click me').onClick(() => {\n        this.variableValue = 'Hi World';\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当子组件引用父组件的@LocalBuilder函数并传入状态变量时，状态变量的改变不会触发@LocalBuilder函数内的UI刷新。这是因为调用@LocalBuilder装饰的函数创建出来的组件绑定于父组件，而状态变量的刷新机制仅作用于当前组件及其子组件，对父组件无效。而使用@Builder修饰函数可触发UI刷新，原因在于@Builder改变了函数的this指向，使创建出来的组件绑定到子组件上，从而在子组件修改变量能够实现@Builder中的UI刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面示例中，组件Child将状态变量传递到Parent的@Builder和@LocalBuilder函数内。在@Builder函数内，this指向Child，参数变化能触发UI刷新。在@LocalBuilder函数内，this指向Parent，参数变化不会触发UI刷新。若@LocalBuilder函数内引用Parent的状态变量发生变化，UI能正常刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Data {\n  public size: number = 0;\n}\n\n@Entry\n@Component\nstruct Parent {\n  label: string = 'parent';\n  @State data: Data = new Data();\n\n  @Builder\n  componentBuilder($$: Data) {\n    // 点击Button 触发UI刷新\n    Text('builder + $$')\n    Text(`${'this -> ' + this.label}`)\n    Text(`${'size : ' + $$.size}`)\n  }\n\n  @LocalBuilder\n  componentLocalBuilder($$: Data) {\n    // 点击Button 不会触发UI刷新\n    Text('LocalBuilder + $$ data')\n    Text(`${'this -> ' + this.label}`)\n    Text(`${'size : ' + $$.size}`)\n  }\n\n  @LocalBuilder\n  contentLocalBuilderNoArgument() {\n    // 点击Button 触发UI刷新\n    Text('LocalBuilder + local data')\n    Text(`${'this -> ' + this.label}`)\n    Text(`${'size : ' + this.data.size}`)\n  }\n\n  build() {\n    Column() {\n      Child({\n        contentBuilder: this.componentBuilder,\n        contentLocalBuilder: this.componentLocalBuilder,\n        contentLocalBuilderNoArgument: this.contentLocalBuilderNoArgument,\n        data: this.data\n      })\n    }\n  }\n}\n\n@Component\nstruct Child {\n  label: string = 'child';\n\n  @Builder\n  customBuilder() {\n  };\n\n  @BuilderParam contentBuilder: ((data: Data) => void) = this.customBuilder;\n  @BuilderParam contentLocalBuilder: ((data: Data) => void) = this.customBuilder;\n  @BuilderParam contentLocalBuilderNoArgument: (() => void) = this.customBuilder;\n  @Link data: Data;\n\n  build() {\n    Column() {\n      this.contentBuilder({ size: this.data.size })\n      this.contentLocalBuilder({ size: this.data.size })\n      this.contentLocalBuilderNoArgument()\n      Button('add child size')\n        .onClick(() => {\n          this.data.size += 1;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "按值传递参数",
      children: "按值传递参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用@LocalBuilder装饰的函数默认按值传递。当传递的参数为状态变量时，状态变量的改变不会引起@LocalBuilder函数内的UI刷新。所以当使用状态变量的时候，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%8C%89%E5%9B%9E%E8%B0%83%E4%BC%A0%E9%80%92%E5%8F%82%E6%95%B0",
        children: "按回调传递"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%8C%89%E5%BC%95%E7%94%A8%E4%BC%A0%E9%80%92%E5%8F%82%E6%95%B0",
        children: "按引用传递"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件Parent将@State修饰的label值按照函数传参方式传递到@LocalBuilder函数内，此时@LocalBuilder函数获取到的值为普通变量值，所以改变@State修饰的label值时，@LocalBuilder函数内的值不会发生改变。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Parent {\n  @State label: string = 'Hello';\n\n  @LocalBuilder\n  citeLocalBuilder(paramA1: string) {\n    Row() {\n      Text(`UseStateVarByValue: ${paramA1}`)\n    }\n  }\n\n  build() {\n    Column() {\n      this.citeLocalBuilder(this.label)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "localbuilder在componentv2修饰的自定义组件中使用",
      children: "@LocalBuilder在@ComponentV2修饰的自定义组件中使用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#componentv2",
        children: "@ComponentV2"
      }), "装饰的自定义组件中使用局部的@LocalBuilder，修改变量时会触发UI刷新。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass Info {\n  @Trace name: string = '';\n  @Trace age: number = 0;\n}\n\n@ComponentV2\nstruct ChildPage {\n  @Require @Param childInfo: Info;\n\n  build() {\n    Column() {\n      Text(`Custom component name: ${this.childInfo.name}`)\n        .fontSize(20)\n        .fontWeight(FontWeight.Bold)\n      Text(`Custom component age: ${this.childInfo.age}`)\n        .fontSize(20)\n        .fontWeight(FontWeight.Bold)\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct ParentPage {\n  info1: Info = { name: 'Tom', age: 25 };\n  @Local info2: Info = { name: 'Tom', age: 25 };\n\n  @LocalBuilder\n  privateBuilder() {\n    Column() {\n      Text(`Local @LocalBuilder name: ${this.info1.name}`)\n        .fontSize(20)\n        .fontWeight(FontWeight.Bold)\n      Text(`Local @LocalBuilder age: ${this.info1.age}`)\n        .fontSize(20)\n        .fontWeight(FontWeight.Bold)\n    }\n  }\n\n  @LocalBuilder\n  privateBuilderSecond() {\n    Column() {\n      Text(`Local @LocalBuilder name: ${this.info2.name}`)\n        .fontSize(20)\n        .fontWeight(FontWeight.Bold)\n      Text(`Local @LocalBuilder age: ${this.info2.age}`)\n        .fontSize(20)\n        .fontWeight(FontWeight.Bold)\n    }\n  }\n\n  build() {\n    Column() {\n      Text(`info1: ${this.info1.name}  ${this.info1.age}`) // Text1\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n      this.privateBuilder() // 调用局部@Builder\n      Line()\n        .width('100%')\n        .height(10)\n        .backgroundColor('#000000')\n        .margin(10)\n      Text(`info2: ${this.info2.name}  ${this.info2.age}`) // Text2\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n      this.privateBuilderSecond() // 调用局部@Builder\n      Line()\n        .width('100%')\n        .height(10)\n        .backgroundColor('#000000')\n        .margin(10)\n      Text(`info1: ${this.info1.name}  ${this.info1.age}`) // Text1\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n      ChildPage({ childInfo: this.info1 }) // 调用自定义组件\n      Line()\n        .width('100%')\n        .height(10)\n        .backgroundColor('#000000')\n        .margin(10)\n      Text(`info2: ${this.info2.name}  ${this.info2.age}`) // Text2\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n      ChildPage({ childInfo: this.info2 }) // 调用自定义组件\n      Line()\n        .width('100%')\n        .height(10)\n        .backgroundColor('#000000')\n        .margin(10)\n      Button('change info1&info2')\n        .onClick(() => {\n          this.info1 = { name: 'Cat', age: 18 }; // Text1不会刷新，原因是info1没被装饰器装饰，无法监听到值的改变。\n          this.info2 = { name: 'Cat', age: 18 }; // Text2会刷新，原因是info2有装饰器装饰，可以监听到值的改变。\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "localbuilder函数和参数一起使用ui不刷新",
      children: "@LocalBuilder函数和$$参数一起使用UI不刷新"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若@LocalBuilder函数和$$参数一起使用，子组件调用父组件的@LocalBuilder函数，子组件传入的参数发生变化，不会引起@LocalBuilder函数内的UI刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class LayoutSize {\n  public size: number = 0;\n}\n\n@Entry\n@Component\nstruct Parent {\n  label: string = 'parent';\n  @State layoutSize: LayoutSize = { size: 0 };\n\n  @LocalBuilder\n  componentBuilder($$: LayoutSize) {\n    Text(`this: ${this.label}`)\n    Text(`size: ${$$.size}`)\n  }\n\n  build() {\n    Column() {\n      Child({\n        customBuilder: this.componentBuilder,\n        layoutSize: this.layoutSize\n      })\n    }\n  }\n}\n\n@Component\nstruct Child {\n  label: string = 'child';\n  @BuilderParam customBuilder: ((layoutSize: LayoutSize) => void);\n  @Link layoutSize: LayoutSize;\n\n  build() {\n    Column() {\n      this.customBuilder({ size: this.layoutSize.size }) // 子组件调用父组件的@LocalBuilder函数\n      Button('add child size')\n        .onClick(() => {\n          this.layoutSize.size += 1; // 子组件传入的参数发生变化，不会引起@LocalBuilder函数内的UI刷新\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在声明@LocalBuilder的组件下创建状态变量并在@LocalBuilder函数内访问，可以在状态变量变化时更新@LocalBuilder内的UI组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class LayoutSize {\n  public size: number = 0;\n}\n\n@Entry\n@Component\nstruct Parent {\n  label: string = 'parent';\n  @State layoutSize: LayoutSize = { size: 0 };\n\n  @LocalBuilder\n  componentBuilder() {\n    Text(`this: ${this.label}`)\n    Text(`size: ${this.layoutSize.size}`)\n  }\n\n  build() {\n    Column() {\n      Child({\n        customBuilder: this.componentBuilder,\n        layoutSize: this.layoutSize\n      })\n    }\n  }\n}\n\n@Component\nstruct Child {\n  label: string = 'child';\n  @BuilderParam customBuilder: () => void;\n  @Link layoutSize: LayoutSize;\n\n  build() {\n    Column() {\n      this.customBuilder()\n      Button('add child size')\n        .onClick(() => {\n          this.layoutSize.size += 1; // 子组件传入的参数发生变化，由@Link传入父组件@State，刷新父组件声明的@LocalBuilder函数的UI。\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(513022)/* ["default"] */.A) + "",
        width: "450",
        height: "288"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "localbuilder函数在参数处直接调用出现布局错乱",
      children: "@LocalBuilder函数在参数处直接调用出现布局错乱"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@LocalBuilder装饰的函数作为参数时，直接传递函数的执行结果，会导致布局和预期效果有偏差。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Page {\n  @State message: string[] = ['1', '2', '3'];\n\n  build() {\n    List() {\n      // 错误写法，直接传递itemFoot的执行结果。\n      ListItemGroup({ space: 10, footer: this.itemFoot() }) {\n        ForEach(this.message, (item: string, index: number) => {\n          ListItem() {\n            Stack() {\n              Text(item)\n                .fontSize(30)\n            }\n          }\n        })\n      }\n    }\n  }\n\n  @LocalBuilder\n  itemFoot() {\n    Column() {\n      Text('itemFoot')\n        .fontSize(30)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(959079)/* ["default"] */.A) + "",
        width: "245",
        height: "238"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@LocalBuilder装饰的函数作为参数时，使用 () => { 函数调用 } 的形式，布局能够符合预期效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Page {\n  @State message: string[] = ['1', '2', '3'];\n\n  build() {\n    List() {\n      // 正确写法，使用() => { 函数调用 }的形式。\n      ListItemGroup({ space: 10, footer: () => { this.itemFoot() } }) {\n        ForEach(this.message, (item: string, index: number) => {\n          ListItem() {\n            Stack() {\n              Text(item)\n                .fontSize(30)\n            }\n          }\n        })\n      }\n    }\n  }\n\n  @LocalBuilder\n  itemFoot() {\n    Column() {\n      Text('itemFoot')\n        .fontSize(30)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(417195)/* ["default"] */.A) + "",
        width: "214",
        height: "240"
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
806871(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
991410(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
959079(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797928-cab328894fe067ce8e75f8410a82d504.png");

},
417195(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437623-367e1ff287f8bc1ce89db92addf6a4ee.png");

},
222457(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957576-c5cab4f263dda49a6729d81ae9c356f6.png");

},
646376(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
513022(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477577-1f0ec6b1b01092a0cfa4cbf9cf001790.gif");

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