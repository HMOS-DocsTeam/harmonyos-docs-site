"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["838324"], {
122196(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_interthread_communication_interthread_communication_object_sendable_object_sendable_constraints_sendable_constraints_md_0a1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-interthread-communication-interthread-communication-object-sendable-object-sendable-constraints-sendable-constraints-md-0a1.json
var site_docs_arkts_arkts_concurrency_interthread_communication_interthread_communication_object_sendable_object_sendable_constraints_sendable_constraints_md_0a1_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-constraints/sendable-constraints","title":"Sendable使用规则与约束","description":"继承规则","source":"@site/docs/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-constraints/sendable-constraints.md","sourceDirName":"arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-constraints","slug":"/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-constraints/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-constraints/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Sendable使用规则与约束","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/sendable-constraints","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Sendable对象简介","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable/"},"next":{"title":"异步锁","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-async-lock-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-constraints/sendable-constraints.md


const frontMatter = {
	title: 'Sendable使用规则与约束',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/sendable-constraints',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Sendable使用规则与约束';

const assets = {

};



const toc = [{
  "value": "继承规则",
  "id": "继承规则",
  "level": 2
}, {
  "value": "Sendable类必须继承自Sendable类",
  "id": "sendable类必须继承自sendable类",
  "level": 3
}, {
  "value": "非Sendable类必须继承自非Sendable类",
  "id": "非sendable类必须继承自非sendable类",
  "level": 3
}, {
  "value": "接口实现规则",
  "id": "接口实现规则",
  "level": 2
}, {
  "value": "非Sendable类禁止实现Sendable接口",
  "id": "非sendable类禁止实现sendable接口",
  "level": 3
}, {
  "value": "Sendable类/接口成员变量规则",
  "id": "sendable类接口成员变量规则",
  "level": 2
}, {
  "value": "必须是Sendable支持的数据类型",
  "id": "必须是sendable支持的数据类型",
  "level": 3
}, {
  "value": "不支持使用!断言",
  "id": "不支持使用断言",
  "level": 3
}, {
  "value": "不支持使用计算属性名",
  "id": "不支持使用计算属性名",
  "level": 3
}, {
  "value": "不支持使用类型别名",
  "id": "不支持使用类型别名",
  "level": 3
}, {
  "value": "泛型规则",
  "id": "泛型规则",
  "level": 2
}, {
  "value": "泛型类中的Sendable类、SendableLruCache、collections.Array、collections.Map和collections.Set的模板类型必须是Sendable类型",
  "id": "泛型类中的sendable类sendablelrucachecollectionsarraycollectionsmap和collectionsset的模板类型必须是sendable类型",
  "level": 3
}, {
  "value": "上下文访问规则",
  "id": "上下文访问规则",
  "level": 2
}, {
  "value": "Sendable类的内部不允许使用当前模块内上下文环境中定义的变量",
  "id": "sendable类的内部不允许使用当前模块内上下文环境中定义的变量",
  "level": 3
}, {
  "value": "@Sendable装饰器使用规则",
  "id": "sendable装饰器使用规则",
  "level": 2
}, {
  "value": "@Sendable装饰器仅支持修饰类和函数",
  "id": "sendable装饰器仅支持修饰类和函数",
  "level": 3
}, {
  "value": "Sendable类和Sendable函数禁止使用除@Sendable外的装饰器",
  "id": "sendable类和sendable函数禁止使用除sendable外的装饰器",
  "level": 3
}, {
  "value": "支持在Sendable class上叠加自定义装饰器",
  "id": "支持在sendable-class上叠加自定义装饰器",
  "level": 3
}, {
  "value": "初始化规则",
  "id": "初始化规则",
  "level": 2
}, {
  "value": "禁止使用对象字面量/数组字面量初始化Sendable对象",
  "id": "禁止使用对象字面量数组字面量初始化sendable对象",
  "level": 3
}, {
  "value": "类型转换规则",
  "id": "类型转换规则",
  "level": 2
}, {
  "value": "禁止非Sendable类型强制转换为Sendable",
  "id": "禁止非sendable类型强制转换为sendable",
  "level": 3
}, {
  "value": "函数规则",
  "id": "函数规则",
  "level": 2
}, {
  "value": "箭头函数不可标记为Sendable",
  "id": "箭头函数不可标记为sendable",
  "level": 3
}, {
  "value": "与TS/JS交互的规则",
  "id": "与tsjs交互的规则",
  "level": 2
}, {
  "value": "ArkTS通用规则（目前只针对Sendable对象）",
  "id": "arkts通用规则目前只针对sendable对象",
  "level": 3
}, {
  "value": "NAPI规则（目前只针对Sendable对象）",
  "id": "napi规则目前只针对sendable对象",
  "level": 3
}, {
  "value": "与UI交互的规则",
  "id": "与ui交互的规则",
  "level": 2
}, {
  "value": "在HAR包中的使用规则",
  "id": "在har包中的使用规则",
  "level": 2
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
        id: "sendable使用规则与约束",
        children: "Sendable使用规则与约束"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "继承规则",
      children: "继承规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sendable类必须继承自sendable类",
      children: "Sendable类必须继承自Sendable类"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sendable对象的布局和原型链不可变，而非Sendable对象可以通过特殊方式修改布局。因此，不允许互相继承。这里的类不包含变量，Sendable类不能继承自变量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Sendable\nclass A {\n  constructor() {\n  }\n}\n\n@Sendable\nclass B extends A {\n  constructor() {\n    super()\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "反例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class A {\n  constructor() {\n  }\n}\n\n@Sendable\nclass B extends A { // A不是sendable class，B不能继承它，编译报错\n  constructor() {\n    super()\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "非sendable类必须继承自非sendable类",
      children: "非Sendable类必须继承自非Sendable类"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sendable对象的布局和原型链不可变，而非Sendable对象可以通过特殊方式修改布局，因此不允许互相继承。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class A {\n  constructor() {\n  }\n}\n\nclass B extends A {\n  constructor() {\n    super()\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "反例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Sendable\nclass A {\n  constructor() {\n  }\n}\n\nclass B extends A { // A是sendable class，B不能继承它，编译报错\n  constructor() {\n    super()\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口实现规则",
      children: "接口实现规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "非sendable类禁止实现sendable接口",
      children: "非Sendable类禁止实现Sendable接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "非Sendable类实现Sendable接口时，可能被误认为是Sendable类，导致错误使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface I {};\n\nclass B implements I {};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "反例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { lang } from '@kit.ArkTS';\n\ntype ISendable = lang.ISendable;\n\ninterface I extends ISendable {};\n\nclass B implements I {};  // I是sendable interface，B不能实现，编译报错\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sendable类接口成员变量规则",
      children: "Sendable类/接口成员变量规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "必须是sendable支持的数据类型",
      children: "必须是Sendable支持的数据类型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sendable数据不得持有非Sendable数据，因此Sendable类或接口的成员变量必须是", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable#sendable%E6%94%AF%E6%8C%81%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B",
        children: "Sendable支持的数据类型"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Sendable\nclass A {\n  constructor() {\n  }\n  a: number = 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "反例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Sendable\nclass A {\n  constructor() {\n  }\n  b: Array<number> = [1, 2, 3] // 编译报错，需使用collections.Array\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持使用断言",
      children: "不支持使用!断言"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sendable对象的成员属性必须赋初值，而“!”修饰的变量可以不赋初值，因此不支持使用“!”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Sendable\nclass A {\n  constructor() {\n  }\n  a: number = 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "反例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Sendable\nclass A {\n  constructor() {\n  }\n  a!: number; // 编译报错，不支持使用“!”\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持使用计算属性名",
      children: "不支持使用计算属性名"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sendable对象的布局不可更改，因为计算属性无法静态确定对象布局，所以不支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Sendable\nclass A {\n    num1: number = 1;\n    num2: number = 2;\n    add(): number {\n      return this.num1 + this.num2;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "反例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum B {\n    b1 = \"bbb\"\n}\n@Sendable\nclass A {\n    [\"aaa\"]: number = 1; // 编译报错，不支持[\"aaa\"]\n    [B.b1]: number = 2; // 编译报错，不支持[B.b1]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持使用类型别名",
      children: "不支持使用类型别名"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sendable类的成员变量不能使用类型别名（即使用type关键字定义的别名）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Sendable\nclass B {\n  num1: number = 1;\n  num2: number = 2;\n  add(): number {\n    return this.num1 + this.num2;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "反例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "type A = number;\n\n@Sendable\nclass B {\n  num1: A = 1; // 运行报错，不支持使用类型别名\n  num2: A = 2; // 运行报错，不支持使用类型别名\n  add(): number {\n    return this.num1 + this.num2;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "泛型规则",
      children: "泛型规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "泛型类中的sendable类sendablelrucachecollectionsarraycollectionsmap和collectionsset的模板类型必须是sendable类型",
      children: "泛型类中的Sendable类、SendableLruCache、collections.Array、collections.Map和collections.Set的模板类型必须是Sendable类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sendable数据不能持有非Sendable数据，因此泛型类中的Sendable数据的模版类型必须是Sendable类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { collections } from '@kit.ArkTS';\n\ntry {\n  let arr1: collections.Array<number> = new collections.Array<number>();\n  let num: number = 1;\n  arr1.push(num);\n} catch (e) {\n  console.error(`taskpool execute: Code: ${e.code}, message: ${e.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "反例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { collections } from '@kit.ArkTS';\n\ntry {\n  let arr1: collections.Array<Array<number>> = new collections.Array<Array<number>>(); // 编译报错，模板类型必须是Sendable类型\n  let arr2: Array<number> = new Array<number>();\n  arr2.push(1);\n  arr1.push(arr2);\n} catch (e) {\n  console.error(`taskpool execute: Code: ${e.code}, message: ${e.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "上下文访问规则",
      children: "上下文访问规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sendable类的内部不允许使用当前模块内上下文环境中定义的变量",
      children: "Sendable类的内部不允许使用当前模块内上下文环境中定义的变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于Sendable对象在不同并发实例间的上下文环境不同，属于单个虚拟机实例，如果直接访问会有非预期行为。不支持Sendable对象使用当前模块内上下文环境中定义的变量，违反此规则会在编译阶段报错。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(788326)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，Sendable class的内部支持使用top level的Sendable class对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { lang } from '@kit.ArkTS';\n\ntype ISendable = lang.ISendable;\n\ninterface I extends ISendable {}\n\n@Sendable\nclass B implements I {\n  static o: number = 1;\n  static bar(): B {\n    return new B();\n  }\n}\n\n@Sendable\nclass C {\n  v: I = new B();\n  u: number = B.o;\n\n  foo() {\n    return B.bar();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "反例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { lang } from '@kit.ArkTS';\n\ntype ISendable = lang.ISendable;\n\ninterface I extends ISendable {}\n\n@Sendable\nclass B implements I {}\n\nfunction bar(): B {\n  return new B();\n}\n\nlet b = new B();\n\n{\n  @Sendable\n  class A implements I {}\n\n  @Sendable\n  class C {\n    u: I = bar(); // bar不是sendable class对象，编译报错\n    v: I = new A(); // A不是定义在top level中，编译报错\n\n    foo() {\n      return b; // b不是sendable class对象，而是sendable class的实例，编译报错\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sendable装饰器使用规则",
      children: "@Sendable装饰器使用规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sendable装饰器仅支持修饰类和函数",
      children: "@Sendable装饰器仅支持修饰类和函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前仅支持修饰类和函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Sendable\ntype SendableFuncType = () => void;\n\n@Sendable\nclass C {}\n\n@Sendable\nfunction SendableFunc() {\n  console.info(\"Sendable func\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "反例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Sendable\ntype A = number; // 编译报错\n\n@Sendable\ntype D = C; // 编译报错\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sendable类和sendable函数禁止使用除sendable外的装饰器",
      children: "Sendable类和Sendable函数禁止使用除@Sendable外的装饰器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ts文件中定义类装饰器时，可能会改变类的结构，进而引发运行时错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Sendable\nclass A {\n  num: number = 1;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "反例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Sendable\n@Observed // 编译报错\nclass C {\n  num: number = 1;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持在sendable-class上叠加自定义装饰器",
      children: "支持在Sendable class上叠加自定义装饰器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，支持在Sendable class上叠加使用除@Sendable装饰器之外的其他自定义装饰器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile-app",
        children: "工程级build-profile.json5文件"
      }), "的\"buildOption\"字段下的\"strictMode\"中增加\"disableSendableCheckRules\"字段，配置该能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\"disableSendableCheckRules\"字段及其具体取值示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"buildOption\": {\n  \"strictMode\": {\n    \"caseSensitiveCheck\": true,\n    \"useNormalizedOHMUrl\": true,\n    \"disableSendableCheckRules\": [\"arkts-sendable-class-decorator\"]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(851173)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "\"disableSendableCheckRules\"字段值为包含Sendable规则的数组。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "默认不展示，即默认不支持在Sendable class上叠加使用除@Sendable之外的其他自定义装饰器。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "禁止配置为空数组。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当数组中配置了\"arkts-sendable-class-decorator\"规则时，支持在Sendable class上叠加除@Sendable之外的其他自定义装饰器。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Sendable和其他自定义装饰器叠加使用可能造成运行时异常，需要开发者适配装饰器函数的实现。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "初始化规则",
      children: "初始化规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "禁止使用对象字面量数组字面量初始化sendable对象",
      children: "禁止使用对象字面量/数组字面量初始化Sendable对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对象字面量和数组字面量不是Sendable类型。Sendable类型必须通过Sendable类型的new表达式创建。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { collections } from '@kit.ArkTS';\n\nlet arr1: collections.Array<number> = new collections.Array<number>(1, 2, 3); // 是Sendable类型\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "反例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { collections } from '@kit.ArkTS';\n\nlet arr2: collections.Array<number> = [1, 2, 3]; // 不是Sendable类型，编译报错\nlet arr3: number[] = [1, 2, 3]; // 不是Sendable类型，正例，不报错\nlet arr4: number[] = new collections.Array<number>(1, 2, 3); // 编译报错\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "类型转换规则",
      children: "类型转换规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "禁止非sendable类型强制转换为sendable",
      children: "禁止非Sendable类型强制转换为Sendable"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除了Object类型，非Sendable类型不能强转成Sendable类型。非Sendable类型通过as强转成Sendable类型后，实际数据仍为非Sendable类型，会导致错误使用。Sendable类型在不违反Sendable规则的前提下，需要和非Sendable类型行为兼容，因此Sendable类型可以通过as强转成非Sendable类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class A {\n  state: number = 0;\n}\n\n@Sendable\nclass SendableA {\n  state: number = 0;\n}\n\nlet a1: A = new SendableA() as A;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "反例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class A {\n  state: number = 0;\n}\n\n@Sendable\nclass SendableA {\n  state: number = 0;\n}\n\nlet a2: SendableA = new A() as SendableA; // 编译报错\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数规则",
      children: "函数规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "箭头函数不可标记为sendable",
      children: "箭头函数不可标记为Sendable"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "箭头函数不支持@Sendable装饰器，因此它是非Sendable函数，因此不支持共享。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Sendable\ntype SendableFuncType = () => void;\n\n@Sendable\nfunction SendableFunc() {\n  console.info(\"Sendable func\");\n}\n\n@Sendable\nclass SendableClass {\n  constructor(f: SendableFuncType) {\n    this.func = f;\n  }\n  func: SendableFuncType;\n}\n\nlet sendableClass = new SendableClass(SendableFunc);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "反例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Sendable\ntype SendableFuncType = () => void;\nlet func: SendableFuncType = () => {}; // 编译报错\n\n@Sendable\nclass SendableClass {\n  func: SendableFuncType = () => {}; // 编译报错\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "与tsjs交互的规则",
      children: "与TS/JS交互的规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkts通用规则目前只针对sendable对象",
      children: "ArkTS通用规则（目前只针对Sendable对象）"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.th, {
            children: "规则"
          })
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "Sendable对象传入TS/JS的接口中，禁止操作其对象布局（增、删属性，改变属性类型）。"
          })
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "Sendable对象设置到TS/JS的对象上，TS中获取到Sendable对象后，禁止操作其对象布局（增、删属性，改变属性类型）。"
          })
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "Sendable对象放入TS/JS的容器中，TS中获取到Sendable对象后，禁止操作其对象布局（增、删属性，改变属性类型）。"
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(205548)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "改变属性类型不包括Sendable对象类型的改变，例如从Sendable class A变为Sendable class B。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi规则目前只针对sendable对象",
      children: "NAPI规则（目前只针对Sendable对象）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["NAPI相关接口请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-extension#sendable%E7%9B%B8%E5%85%B3",
        children: "Sendable相关的NAPI接口"
      }), "，具体使用请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-sendable-napi",
        children: "Native与Sendable ArkTS对象绑定"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.th, {
            children: "规则"
          })
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "禁止删除属性。不能使用napi_delete_property接口。"
          })
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "禁止新增属性。不能使用napi_set_property、napi_set_named_property、napi_define_properties接口。"
          })
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "禁止修改属性类型。不能使用napi_set_property、napi_set_named_property、napi_define_properties接口。"
          })
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持Symbol相关接口和类型。不能使用napi_create_symbol、napi_is_symbol_object、napi_symbol接口。"
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "与ui交互的规则",
      children: "与UI交互的规则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sendable数据需要与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-makeobserved",
        children: "makeObserved"
      }), "配合使用，才可以观察Sendable对象的数据变化，具体使用请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-makeobserved#makeobserved%E5%92%8Csendable%E8%A3%85%E9%A5%B0%E7%9A%84class%E9%85%8D%E5%90%88%E4%BD%BF%E7%94%A8",
        children: "makeObserved和@Sendable装饰的class配合文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在har包中的使用规则",
      children: "在HAR包中的使用规则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sendable可在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-package-fundamentals/application-package-dev/har-package",
        children: "HAR"
      }), "包中使用。当在字节码HAR中使用Sendable时，无需进行额外配置，可直接使用。当在TS HAR中使用Sendable时，需在HAR模块下的module.json5文件中将\"metadata\"字段下的\"name\"设置为“UseTsHar”，配置如下所示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    \"name\": \"library\",\n    \"type\": \"har\",\n    \"deviceTypes\": [\n      \"tablet\",\n      \"2in1\"\n    ],\n    \"metadata\": [\n      {\n        \"name\": \"UseTsHar\",\n        \"value\": \"true\"\n      }\n    ]\n  }\n}\n"
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
851173(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
788326(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
205548(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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