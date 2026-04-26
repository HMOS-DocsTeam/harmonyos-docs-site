"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["710393"], {
973109(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_learning_arkts_typescript_to_arkts_migration_arkts_more_cases_arkts_more_cases_md_a8c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-learning-arkts-typescript-to-arkts-migration-arkts-more-cases-arkts-more-cases-md-a8c.json
var site_docs_learning_arkts_typescript_to_arkts_migration_arkts_more_cases_arkts_more_cases_md_a8c_namespaceObject = JSON.parse('{"id":"learning-arkts/typescript-to-arkts-migration/arkts-more-cases/arkts-more-cases","title":"适配指导案例","description":"本文通过具体应用场景中的案例，提供在ArkTS语法规则下将TS代码适配成ArkTS代码的建议。各章以ArkTS语法规则的英文名称命名，每个案例展示适配前的TS代码和适配后的ArkTS代码。","source":"@site/docs/learning-arkts/typescript-to-arkts-migration/arkts-more-cases/arkts-more-cases.md","sourceDirName":"learning-arkts/typescript-to-arkts-migration/arkts-more-cases","slug":"/learning-arkts/typescript-to-arkts-migration/arkts-more-cases/","permalink":"/harmonyos-docs-site/learning-arkts/typescript-to-arkts-migration/arkts-more-cases/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"适配指导案例","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-more-cases","kit":"getting-started","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"从TypeScript到ArkTS的适配规则","permalink":"/harmonyos-docs-site/learning-arkts/typescript-to-arkts-migration/typescript-to-arkts-migration-guide/"},"next":{"title":"ArkTS高性能编程实践","permalink":"/harmonyos-docs-site/learning-arkts/arkts-high-performance-programming/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/learning-arkts/typescript-to-arkts-migration/arkts-more-cases/arkts-more-cases.md


const frontMatter = {
	title: '适配指导案例',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-more-cases',
	kit: 'getting-started',
	last_updated: '2026-04-22'
};
const contentTitle = '适配指导案例';

const assets = {

};



const toc = [{
  "value": "arkts-identifiers-as-prop-names",
  "id": "arkts-identifiers-as-prop-names",
  "level": 2
}, {
  "value": "arkts-no-any-unknown",
  "id": "arkts-no-any-unknown",
  "level": 2
}, {
  "value": "按照业务逻辑，将代码中的any, unknown改为具体的类型",
  "id": "按照业务逻辑将代码中的any-unknown改为具体的类型",
  "level": 3
}, {
  "value": "标注JSON.parse返回值类型",
  "id": "标注jsonparse返回值类型",
  "level": 3
}, {
  "value": "使用Record类型",
  "id": "使用record类型",
  "level": 3
}, {
  "value": "arkts-no-call-signature",
  "id": "arkts-no-call-signature",
  "level": 2
}, {
  "value": "arkts-no-ctor-signatures-type",
  "id": "arkts-no-ctor-signatures-type",
  "level": 2
}, {
  "value": "arkts-no-indexed-signatures",
  "id": "arkts-no-indexed-signatures",
  "level": 2
}, {
  "value": "arkts-no-typing-with-this",
  "id": "arkts-no-typing-with-this",
  "level": 2
}, {
  "value": "arkts-no-ctor-prop-decls",
  "id": "arkts-no-ctor-prop-decls",
  "level": 2
}, {
  "value": "arkts-no-ctor-signatures-iface",
  "id": "arkts-no-ctor-signatures-iface",
  "level": 2
}, {
  "value": "arkts-no-props-by-index",
  "id": "arkts-no-props-by-index",
  "level": 2
}, {
  "value": "arkts-no-inferred-generic-params",
  "id": "arkts-no-inferred-generic-params",
  "level": 2
}, {
  "value": "arkts-no-regexp-literals",
  "id": "arkts-no-regexp-literals",
  "level": 2
}, {
  "value": "arkts-no-untyped-obj-literals",
  "id": "arkts-no-untyped-obj-literals",
  "level": 2
}, {
  "value": "从SDK中导入类型，标注object literal类型",
  "id": "从sdk中导入类型标注object-literal类型",
  "level": 3
}, {
  "value": "用class为object literal标注类型，要求class的构造函数无参数",
  "id": "用class为object-literal标注类型要求class的构造函数无参数",
  "level": 3
}, {
  "value": "用class/interface为object literal标注类型，要求使用identifier作为object literal的key",
  "id": "用classinterface为object-literal标注类型要求使用identifier作为object-literal的key",
  "level": 3
}, {
  "value": "使用Record类型为object literal标注类型，要求使用字符串作为object literal的key",
  "id": "使用record类型为object-literal标注类型要求使用字符串作为object-literal的key",
  "level": 3
}, {
  "value": "函数参数类型包含index signature",
  "id": "函数参数类型包含index-signature",
  "level": 3
}, {
  "value": "函数实参使用了object literal",
  "id": "函数实参使用了object-literal",
  "level": 3
}, {
  "value": "class/interface 中包含方法",
  "id": "classinterface-中包含方法",
  "level": 3
}, {
  "value": "export default对象",
  "id": "export-default对象",
  "level": 3
}, {
  "value": "通过导入namespace获取类型",
  "id": "通过导入namespace获取类型",
  "level": 3
}, {
  "value": "object literal传参给Object类型",
  "id": "object-literal传参给object类型",
  "level": 3
}, {
  "value": "arkts-no-obj-literals-as-types",
  "id": "arkts-no-obj-literals-as-types",
  "level": 2
}, {
  "value": "arkts-no-noninferrable-arr-literals",
  "id": "arkts-no-noninferrable-arr-literals",
  "level": 2
}, {
  "value": "arkts-no-method-reassignment",
  "id": "arkts-no-method-reassignment",
  "level": 2
}, {
  "value": "arkts-no-polymorphic-unops",
  "id": "arkts-no-polymorphic-unops",
  "level": 2
}, {
  "value": "arkts-no-type-query",
  "id": "arkts-no-type-query",
  "level": 2
}, {
  "value": "arkts-no-in",
  "id": "arkts-no-in",
  "level": 2
}, {
  "value": "使用Object.keys判断属性是否存在",
  "id": "使用objectkeys判断属性是否存在",
  "level": 3
}, {
  "value": "arkts-no-destruct-assignment",
  "id": "arkts-no-destruct-assignment",
  "level": 2
}, {
  "value": "arkts-no-types-in-catch",
  "id": "arkts-no-types-in-catch",
  "level": 2
}, {
  "value": "arkts-no-for-in",
  "id": "arkts-no-for-in",
  "level": 2
}, {
  "value": "arkts-no-mapped-types",
  "id": "arkts-no-mapped-types",
  "level": 2
}, {
  "value": "arkts-limited-throw",
  "id": "arkts-limited-throw",
  "level": 2
}, {
  "value": "arkts-no-standalone-this",
  "id": "arkts-no-standalone-this",
  "level": 2
}, {
  "value": "函数内使用this",
  "id": "函数内使用this",
  "level": 3
}, {
  "value": "class的静态方法内使用this",
  "id": "class的静态方法内使用this",
  "level": 3
}, {
  "value": "arkts-no-spread",
  "id": "arkts-no-spread",
  "level": 2
}, {
  "value": "arkts-no-ctor-signatures-funcs",
  "id": "arkts-no-ctor-signatures-funcs",
  "level": 2
}, {
  "value": "arkts-no-globalthis",
  "id": "arkts-no-globalthis",
  "level": 2
}, {
  "value": "arkts-no-func-apply-bind-call",
  "id": "arkts-no-func-apply-bind-call",
  "level": 2
}, {
  "value": "使用标准库中接口",
  "id": "使用标准库中接口",
  "level": 3
}, {
  "value": "bind定义方法",
  "id": "bind定义方法",
  "level": 3
}, {
  "value": "使用apply",
  "id": "使用apply",
  "level": 3
}, {
  "value": "arkts-limited-stdlib",
  "id": "arkts-limited-stdlib",
  "level": 2
}, {
  "value": "Object.fromEntries()",
  "id": "objectfromentries",
  "level": 3
}, {
  "value": "严格模式检查(StrictModeError)",
  "id": "严格模式检查strictmodeerror",
  "level": 2
}, {
  "value": "strictPropertyInitialization",
  "id": "strictpropertyinitialization",
  "level": 3
}, {
  "value": "Type *** | null is not assignable to type ***",
  "id": "type---null-is-not-assignable-to-type-",
  "level": 3
}, {
  "value": "严格属性初始化检查",
  "id": "严格属性初始化检查",
  "level": 3
}, {
  "value": "严格函数类型检查",
  "id": "严格函数类型检查",
  "level": 3
}, {
  "value": "严格空值检查",
  "id": "严格空值检查",
  "level": 3
}, {
  "value": "函数返回类型不匹配",
  "id": "函数返回类型不匹配",
  "level": 3
}, {
  "value": "Type &#39;*** | null&#39; is not assignable to type &#39;***&#39;",
  "id": "type---null-is-not-assignable-to-type--1",
  "level": 3
}, {
  "value": "Cannot invoke an object which is possibly &#39;undefined&#39;",
  "id": "cannot-invoke-an-object-which-is-possibly-undefined",
  "level": 3
}, {
  "value": "Variable &#39;***&#39; is used before being assigned",
  "id": "variable--is-used-before-being-assigned",
  "level": 3
}, {
  "value": "Function lacks ending return statement and return type does not include &#39;undefined&#39;.",
  "id": "function-lacks-ending-return-statement-and-return-type-does-not-include-undefined",
  "level": 3
}, {
  "value": "arkts-strict-typing-required",
  "id": "arkts-strict-typing-required",
  "level": 2
}, {
  "value": "Importing ArkTS files to JS and TS files is not allowed",
  "id": "importing-arkts-files-to-js-and-ts-files-is-not-allowed",
  "level": 2
}, {
  "value": "arkts-no-tsdeps",
  "id": "arkts-no-tsdeps",
  "level": 2
}, {
  "value": "arkts-no-special-imports",
  "id": "arkts-no-special-imports",
  "level": 2
}, {
  "value": "arkts-no-classes-as-obj",
  "id": "arkts-no-classes-as-obj",
  "level": 2
}, {
  "value": "使用class构造实例",
  "id": "使用class构造实例",
  "level": 3
}, {
  "value": "访问静态属性",
  "id": "访问静态属性",
  "level": 3
}, {
  "value": "arkts-no-side-effects-imports",
  "id": "arkts-no-side-effects-imports",
  "level": 2
}, {
  "value": "arkts-no-func-props",
  "id": "arkts-no-func-props",
  "level": 2
}, {
  "value": "arkts-limited-esobj",
  "id": "arkts-limited-esobj",
  "level": 2
}, {
  "value": "拷贝",
  "id": "拷贝",
  "level": 2
}, {
  "value": "浅拷贝",
  "id": "浅拷贝",
  "level": 3
}, {
  "value": "深拷贝",
  "id": "深拷贝",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "适配指导案例",
        children: "适配指导案例"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文通过具体应用场景中的案例，提供在ArkTS语法规则下将TS代码适配成ArkTS代码的建议。各章以ArkTS语法规则的英文名称命名，每个案例展示适配前的TS代码和适配后的ArkTS代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-identifiers-as-prop-names",
      children: "arkts-identifiers-as-prop-names"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当属性名是有效的标识符（即不包含特殊字符、空格等，并且不以数字开头），可以直接使用而无需引号。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface W {\n  bundleName: string\n  action: string\n  entities: string[]\n}\n\nlet wantInfo: W = {\n  'bundleName': 'com.huawei.hmos.browser',\n  'action': 'ohos.want.action.viewData',\n  'entities': ['entity.system.browsable']\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface W {\n  bundleName: string\n  action: string\n  entities: string[]\n}\n\nlet wantInfo: W = {\n  bundleName: 'com.huawei.hmos.browser',\n  action: 'ohos.want.action.viewData',\n  entities: ['entity.system.browsable']\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-any-unknown",
      children: "arkts-no-any-unknown"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "按照业务逻辑将代码中的any-unknown改为具体的类型",
      children: "按照业务逻辑，将代码中的any, unknown改为具体的类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function printObj(obj: any) {\n  console.info(obj);\n}\n\nprintObj('abc'); // abc\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function printObj(obj: string) {\n  console.info(obj);\n  // ...\n}\n// ...\n          printObj('abc'); // abc\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "标注jsonparse返回值类型",
      children: "标注JSON.parse返回值类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class A {\n  v: number = 0\n  s: string = ''\n\n  foo(str: string) {\n    let tmpStr = JSON.parse(str);\n    if (tmpStr.add != undefined) {\n      this.v = tmpStr.v;\n      this.s = tmpStr.s;\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class A {\n  public v: number = 0\n  public s: string = ''\n\n  foo(str: string) {\n    let tmpStr: Record<string, Object> = JSON.parse(str);\n    if (tmpStr.add != undefined) {\n      this.v = tmpStr.v as number;\n      this.s = tmpStr.s as string;\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用record类型",
      children: "使用Record类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function printProperties(obj: any) {\n  console.info(obj.name);\n  console.info(obj.value);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function printProperties(obj: Record<string, Object>) {\n  console.info(obj.name as string);\n  console.info(obj.value as string);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-call-signature",
      children: "arkts-no-call-signature"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用函数类型进行替代。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface I {\n  (value: string): void;\n}\n\nfunction foo(fn: I) {\n  fn('abc');\n}\n\nfoo((value: string) => {\n  console.info(value);\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "type I = (value: string) => void\n\nfunction foo(fn: I) {\n  fn('abc');\n}\n// ...\n  foo((value: string) => {\n    console.info(value);\n    // ...\n  })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-ctor-signatures-type",
      children: "arkts-no-ctor-signatures-type"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用工厂函数（() => Instance）替代构造函数签名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Controller {\n  value: string = ''\n\n  constructor(value: string) {\n    this.value = value;\n  }\n}\n\ntype ControllerConstructor = {\n  new (value: string): Controller;\n}\n\nclass testMenu {\n  controller: ControllerConstructor = Controller\n  createController() {\n    if (this.controller) {\n      return new this.controller('123');\n    }\n    return null;\n  }\n}\n\nlet t = new testMenu();\nconsole.info(t.createController()!.value);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Controller {\n  public value: string = ''\n\n  constructor(value: string) {\n    this.value = value;\n  }\n}\n\ntype ControllerConstructor = () => Controller;\n\nclass TestMenu {\n  public controller: ControllerConstructor = () => {\n    return new Controller('abc');\n  }\n\n  createController() {\n    if (this.controller) {\n      return this.controller();\n    }\n    return null;\n  }\n}\n// ...\n  let t: TestMenu = new TestMenu();\n  console.info(t.createController()!.value);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-indexed-signatures",
      children: "arkts-no-indexed-signatures"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Record类型进行替代。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function foo1(data: { [key: string]: string }) {\n  data['a'] = 'a';\n  data['b'] = 'b';\n  data['c'] = 'c';\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function foo1(data: Record<string, string>) {\n  data['a'] = 'a';\n  data['b'] = 'b';\n  data['c'] = 'c';\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-typing-with-this",
      children: "arkts-no-typing-with-this"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用具体类型替代this。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C {\n  getInstance(): this {\n    return this;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C {\n  getInstance(): C {\n    return this;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-ctor-prop-decls",
      children: "arkts-no-ctor-prop-decls"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "显式声明类属性，并在构造函数中手动赋值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Person {\n  constructor(readonly name: string) {}\n\n  getName(): string {\n    return this.name;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Person {\n  public name: string\n  constructor(name: string) {\n    this.name = name;\n  }\n\n  getName(): string {\n    return this.name;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-ctor-signatures-iface",
      children: "arkts-no-ctor-signatures-iface"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用type定义工厂函数或普通函数类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Controller {\n  value: string = ''\n\n  constructor(value: string) {\n    this.value = value;\n  }\n}\n\ninterface ControllerConstructor {\n  new (value: string): Controller;\n}\n\nclass testMenu {\n  controller: ControllerConstructor = Controller\n  createController() {\n    if (this.controller) {\n      return new this.controller('abc');\n    }\n    return null;\n  }\n}\n\nlet t = new testMenu();\nconsole.info(t.createController()!.value);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Controller {\n  public value: string = ''\n\n  constructor(value: string) {\n    this.value = value;\n  }\n}\n\ntype ControllerConstructor = () => Controller;\n\nclass TestMenu {\n  public controller: ControllerConstructor = () => {\n    return new Controller('abc');\n  }\n\n  createController() {\n    if (this.controller) {\n      return this.controller();\n    }\n    return null;\n  }\n}\n\nlet t: TestMenu = new TestMenu();\nconsole.info(t.createController()!.value);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-props-by-index",
      children: "arkts-no-props-by-index"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以将对象转换为Record类型，以便访问其属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function foo2(params: Object) {\n  let funNum: number = params['funNum'];\n  let target: string = params['target'];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function foo2(params: Record<string, string | number>) {\n  let funNum: number = params['funNum'] as number;\n  let target: string = params['target'] as string;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-inferred-generic-params",
      children: "arkts-no-inferred-generic-params"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "所有泛型调用都应显式标注泛型参数类型，如 Map<string, T>、.map<T>()。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class A {\n  str: string = ''\n}\nclass B extends A {}\nclass C extends A {}\n\nlet arr: Array<A> = [];\n\nlet originMenusMap:Map<string, C> = new Map(arr.map(item => [item.str, (item instanceof C) ? item: null]));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class A {\n  public str: string = ''\n}\nclass B extends A {}\nclass C extends A {}\n\nlet arr: A[] = [];\n\nlet originMenusMap: Map<string, C | null> = new Map<string, C | null>\n(arr.map<[string, C | null]>(item => [item.str, (item instanceof C) ? item: null]));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(item instanceof C) ? item: null 需要声明类型为C | null，由于编译器无法推导出map的泛型类型参数，需要显式标注。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-regexp-literals",
      children: "arkts-no-regexp-literals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用new RegExp(pattern, flags) 构造函数替代RegExp字面量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let regex: RegExp = /\\s*/g;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let regexp: RegExp = new RegExp('\\\\s*','g');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果正则表达式中使用了标志符，需要将其作为new RegExp()的参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-untyped-obj-literals",
      children: "arkts-no-untyped-obj-literals"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "从sdk中导入类型标注object-literal类型",
      children: "从SDK中导入类型，标注object literal类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const area = { // 没有写明类型 不方便维护\n  pixels: new ArrayBuffer(8),\n  offset: 0,\n  stride: 8,\n  region: { size: { height: 1,width:2 }, x: 0, y: 0 }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { image } from '@kit.ImageKit';\n// ...\nconst area: image.PositionArea = { // 写明具体类型\n  pixels: new ArrayBuffer(8),\n  offset: 0,\n  stride: 8,\n  region: { size: { height: 1, width: 2 }, x: 0, y: 0 }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "用class为object-literal标注类型要求class的构造函数无参数",
      children: "用class为object literal标注类型，要求class的构造函数无参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Test {\n  value: number = 1\n  // 有构造函数\n  constructor(value: number) {\n    this.value = value;\n  }\n}\n\nlet t: Test = { value: 2 };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法1"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 去除构造函数\nclass Test {\n  public value: number = 1\n}\n\nlet t: Test = { value: 2 };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法2"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 使用new\nclass Test {\n  public value: number = 1\n\n  constructor(value: number) {\n    this.value = value;\n  }\n}\n\nlet t: Test = new Test(2);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C {\n  value: number = 1\n\n  constructor(n: number) {\n    if (n < 0) {\n      throw new Error('Negative');\n    }\n    this.value = n;\n  }\n}\n\nlet s: C = new C(-2);   // 抛出异常\nlet t: C = { value: -2 }; // ArkTS 不支持\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果允许使用C来标注object literal的类型，变量t会导致行为的二义性。ArkTS禁止通过object literal绕过这一行为。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "用classinterface为object-literal标注类型要求使用identifier作为object-literal的key",
      children: "用class/interface为object literal标注类型，要求使用identifier作为object literal的key"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Test {\n  value: number = 0\n}\n\nlet arr: Test[] = [\n  {\n    'value': 1\n  },\n  {\n    'value': 2\n  },\n  {\n    'value': 3\n  }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Test {\n  public value: number = 0\n}\nlet arr: Test[] = [\n  {\n    value: 1\n  },\n  {\n    value: 2\n  },\n  {\n    value: 3\n  }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用record类型为object-literal标注类型要求使用字符串作为object-literal的key",
      children: "使用Record类型为object literal标注类型，要求使用字符串作为object literal的key"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let obj: Record<string, number | string> = {\n  value: 123,\n  name: 'abc'\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let obj: Record<string, number | string> = {\n  'value': 123,\n  'name': 'abc'\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数参数类型包含index-signature",
      children: "函数参数类型包含index signature"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function foo3(obj: { [key: string]: string}): string {\n  if (obj != undefined && obj != null) {\n    return obj.value1 + obj.value2;\n  }\n  return '';\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function foo(obj: Record<string, string>): string {\n  if (obj != undefined && obj != null) {\n    return obj.value1 + obj.value2;\n  }\n  return '';\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数实参使用了object-literal",
      children: "函数实参使用了object literal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "(fn) => {\n  fn({ value: 123, name:'' });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class T {\n  public value: number = 0\n  public name: string = ''\n}\n\n(fn: (v: T) => void) => {\n  fn({ value: 123, name: '' });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "classinterface-中包含方法",
      children: "class/interface 中包含方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface T {\n  foo(value: number): number\n}\n\nlet t:T = { foo: (value) => { return value } };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法1"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface T {\n  foo: (value: number) => number\n}\n\nlet t:T = { foo: (value) => { return value } };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法2"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class T {\n  public foo: (value: number) => number = (value: number) => {\n    return value;\n  }\n}\n\nlet t:T = new T();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class/interface中声明的方法应被所有实例共享。ArkTS不支持通过object literal改写实例方法。ArkTS支持函数类型的属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "export-default对象",
      children: "export default对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export default {\n  onCreate() {\n    // ...\n  },\n  onDestroy() {\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Test {\n  onCreate() {\n    // ...\n  }\n  onDestroy() {\n    // ...\n  }\n}\n\nexport default new Test()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通过导入namespace获取类型",
      children: "通过导入namespace获取类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// test.d.ets\ndeclare namespace test {\n  interface I {\n    id: string;\n    type: number;\n  }\n\n  function foo(name: string, option: I): void;\n}\n\nexport default test;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// app.ets\nimport test from './test';\n\nlet option = { id: '', type: 0 };\ntest.foo('', option);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// test.d.ets\ndeclare namespace Test {\n  interface I {\n    id: string;\n    type: number;\n  }\n\n  function foo(name: string, option: I): void;\n  function foo(): I;\n}\n\nexport default Test;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// app.ets\nimport test from './test';\n\nlet option = { id: '', type: 0 };\ntest.foo('', option);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对象字面量缺少类型，根据test.foo分析可以得知，option的类型来源于声明文件，那么只需要将类型导入即可。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在test.d.ets中，I定义在namespace中。在ets文件中，先导入namespace，再通过名称获取相应的类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "object-literal传参给object类型",
      children: "object literal传参给Object类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function emit(event: string, ...args: Object[]): void {}\n\nemit('', {\n  'action': 11,\n  'outers': false\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function emit(event: string, ...args: Object[]): void {}\n\nlet emitArg: Record<string, number | boolean> = {\n  'action': 11,\n  'outers': false\n}\n\nemit('', emitArg);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-obj-literals-as-types",
      children: "arkts-no-obj-literals-as-types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用interface显式定义结构类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "type Person = { name: string, age: number }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface Person {\n  name: string,\n  age: number\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-noninferrable-arr-literals",
      children: "arkts-no-noninferrable-arr-literals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "显式声明数组元素的类型（使用interface或class），并为数组变量添加类型注解。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let permissionList = [\n  { name: '设备信息', value: '用于分析设备的续航、通话、上网、SIM卡故障等' },\n  { name: '麦克风', value: '用于反馈问题单时增加语音' },\n  { name: '存储', value: '用于反馈问题单时增加本地文件附件' }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为对象字面量声明类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class PermissionItem {\n  public name?: string\n  public value?: string\n}\n\nlet permissionList: PermissionItem[] = [\n  { name: '设备信息', value: '用于分析设备的续航、通话、上网、SIM卡故障等' },\n  { name: '麦克风', value: '用于反馈问题单时增加语音' },\n  { name: '存储', value: '用于反馈问题单时增加本地文件附件' }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-method-reassignment",
      children: "arkts-no-method-reassignment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用函数类型的类字段（class field）代替原型方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C {\n  add(left: number, right: number): number {\n    return left + right;\n  }\n}\n\nfunction sub(left: number, right: number): number {\n  return left - right;\n}\n\nlet c1 = new C();\nc1.add = sub;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C3 {\n  public add: (left: number, right: number) => number =\n    (left: number, right: number) => {\n      return left + right;\n    }\n}\n\nfunction sub(left: number, right: number): number {\n  return left - right;\n}\n\nlet c1 = new C3();\nc1.add = sub;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-polymorphic-unops",
      children: "arkts-no-polymorphic-unops"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用 Number.parseInt()、new Number() 等显式转换函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let a = +'5'; // 使用操作符隐式转换\nlet b = -'5';\nlet c = ~'5';\nlet d = +'string';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let a = Number.parseInt('5'); // 使用Number.parseInt显示转换\nlet b = -Number.parseInt('5');\nlet c = ~Number.parseInt('5');\nlet d = new Number('123');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-type-query",
      children: "arkts-no-type-query"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用类、接口或类型别名替代typeof，避免依赖变量做类型推导。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// module1.ts\nclass C {\n  value: number = 0\n}\n\nexport let c = new C()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// module2.ts\nimport { c } from './module1'\nlet t: typeof c = { value: 123 };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 文件名：module1.ets\nclass C {\n  public value: number = 0\n}\n\nexport { C }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 文件名：module2.ets\nimport { C } from './module1'\nlet t: C = { value: 123 };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-in",
      children: "arkts-no-in"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用objectkeys判断属性是否存在",
      children: "使用Object.keys判断属性是否存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function test(str: string, obj: Record<string, Object>) {\n  return str in obj;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function test(str: string, obj: Record<string, Object>) {\n  for (let i of Object.keys(obj)) {\n    if (i == str) {\n      return true;\n    }\n  }\n  return false;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-destruct-assignment",
      children: "arkts-no-destruct-assignment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用索引访问元素或手动赋值代替解构赋值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let map = new Map<string, string>([['a', 'a'], ['b', 'b']]);\nfor (let [key, value] of map) {\n  console.info(key);\n  console.info(value);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用数组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let map = new Map<string, string>([['a', 'a'], ['b', 'b']]);\n// ...\nfor (let arr of map) {\n  let key = arr[0];\n  let value = arr[1];\n  console.info(key);\n  console.info(value);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-types-in-catch",
      children: "arkts-no-types-in-catch"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用无类型 catch (error)，然后通过类型断言处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit'\n\ntry {\n  // ...\n} catch (e: BusinessError) {\n  console.error(e.message, e.code);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit'\n// ...\ntry {\n  // ...\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(e.message, e.code);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-for-in",
      children: "arkts-no-for-in"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用 Object.entries(obj) + for of 替代 for in。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface Person {\n  [name: string]: string\n}\nlet p: Person = {\n  name: 'tom',\n  age: '18'\n};\n\nfor (let t in p) {\n  console.info(p[t]);  // info: \"tom\", \"18\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let p: Record<string, string> = {\n  'name': 'tom',\n  'age': '18'\n};\n// ...\nfor (let ele of Object.entries(p)) {\n  console.info(ele[1]); // info: \"tom\", \"18\"\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-mapped-types",
      children: "arkts-no-mapped-types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用 Record<K, T> 替代映射类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C {\n  a: number = 0\n  b: number = 0\n  c: number = 0\n}\ntype OptionsFlags = {\n  [Property in keyof C]: string\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C {\n  public a: number = 0\n  public b: number = 0\n  public c: number = 0\n}\n\ntype OptionsFlags = Record<keyof C, string>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-limited-throw",
      children: "arkts-limited-throw"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将对象转换为Error，或创建新的Error实例抛出。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit'\n\nfunction ThrowError(error: BusinessError) {\n  throw error;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit'\n\nfunction throwError(error: BusinessError) {\n  throw error as Error;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "throw语句中值的类型必须为Error或者其继承类，如果继承类是一个泛型，会有编译期报错。建议使用as将类型转换为Error。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-standalone-this",
      children: "arkts-no-standalone-this"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数内使用this",
      children: "函数内使用this"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function foo4() {\n  console.info(this.value);\n}\n\nlet obj = { value: 'abc' };\nfoo.apply(obj);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法1"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用类的方法实现,如果该方法被多个类使用,可以考虑采用继承的机制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Test {\n  public value: string = ''\n  constructor (value: string) {\n    this.value = value\n  }\n\n  foo() {\n    console.info(this.value);\n    // ...\n  }\n}\n\nlet obj: Test = new Test('abc');\nobj.foo();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法2"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将this作为参数传入。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function foo3(obj: Test) {\n  console.info(obj.value);\n  // ...\n}\n// ...\nclass Test {\n  public value: string = ''\n}\nlet obj1: Test = { value: 'abc' };\nfoo3(obj1);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法3"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将属性作为参数传入。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function foo5(value: string) {\n  console.info(value);\n}\n\nclass Test1 {\n  value: string = ''\n}\n\nlet obj2: Test1 = { value: 'abc' };\nfoo5(obj2.value);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "class的静态方法内使用this",
      children: "class的静态方法内使用this"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Test {\n  static value: number = 123\n  static foo(): number {\n    return this.value\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Test {\n  public static value: number = 123\n  public static foo(): number {\n    return Test.value\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-spread",
      children: "arkts-no-spread"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Object.assign()、手动赋值或数组方法替代扩展运算符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// test.d.ets\ndeclare namespace test {\n  interface I {\n    id: string;\n    type: number;\n  }\n\n  function foo(): I;\n}\n\nexport default test\n\n// app.ets\nimport test from 'test';\n\nlet t: test.I = {\n  ...test.foo(),\n  type: 0\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// test.d.ets\ndeclare namespace Test {\n  interface I {\n    id: string;\n    type: number;\n  }\n\n  function foo(name: string, option: I): void;\n  function foo(): I;\n}\n\nexport default Test;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// app.ets\nimport test from './test';\n\nlet t: test.I = test.foo();\nt.type = 0;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS中，对象布局在编译期是确定的。如果需要将一个对象的所有属性展开赋值给另一个对象可以通过逐个属性赋值语句完成。在本例中，需要展开的对象和赋值的目标对象类型恰好相同，可以通过改变该对象属性的方式重构代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-ctor-signatures-funcs",
      children: "arkts-no-ctor-signatures-funcs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在class内声明属性，而不是在构造函数上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Controller {\n  value: string = ''\n  constructor(value: string) {\n    this.value = value\n  }\n}\n\ntype ControllerConstructor = new (value: string) => Controller;\n\nclass testMenu {\n  controller: ControllerConstructor = Controller\n  createController() {\n    if (this.controller) {\n      return new this.controller('abc');\n    }\n    return null;\n  }\n}\n\nlet t = new testMenu()\nconsole.info(t.createController()!.value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Controller {\n  public value: string = ''\n  constructor(value: string) {\n    this.value = value;\n  }\n}\n\ntype ControllerConstructor = () => Controller;\n\nclass TestMenu {\n  public controller: ControllerConstructor = () => { return new Controller('abc') }\n  createController() {\n    if (this.controller) {\n      return this.controller();\n    }\n    return null;\n  }\n}\n\nlet t: TestMenu = new TestMenu();\nconsole.info(t.createController()!.value);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-globalthis",
      children: "arkts-no-globalthis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持globalThis。一方面无法为globalThis添加静态类型，只能通过查找方式访问其属性，导致额外性能开销。另一方面，无法为globalThis的属性标记类型，无法保证操作的安全性和高性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(806510)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "建议按照业务逻辑根据import/export语法实现数据在不同模块的传递。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["必要情况下，可以通过构造的", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "单例对象"
          })
        }), "来实现全局对象的功能。（不能在har中定义单例对象，har在打包时会在不同的hap中打包两份，无法实现单例。）"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "构造单例对象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 构造单例对象\nexport class GlobalContext {\n  private constructor() {}\n  private static instance: GlobalContext;\n  private _objects = new Map<string, Object>();\n\n  public static getContext(): GlobalContext {\n    if (!GlobalContext.instance) {\n      GlobalContext.instance = new GlobalContext();\n    }\n    return GlobalContext.instance;\n  }\n\n  getObject(value: string): Object | undefined {\n    return this._objects.get(value);\n  }\n\n  setObject(key: string, objectClass: Object): void {\n    this._objects.set(key, objectClass);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// file1.ts\n\nexport class Test {\n  value: string = '';\n  foo(): void {\n    globalThis.value = this.value;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// file2.ts\n\nglobalThis.value;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// file1.ets\n\nimport { GlobalContext } from './GlobalContext'\n\nexport class Test {\n  public value: string = '';\n  foo(): void {\n    GlobalContext.getContext().setObject('value', this.value);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// file2.ets\n\nimport { GlobalContext } from './GlobalContext'\n\nGlobalContext.getContext().getObject('value');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-func-apply-bind-call",
      children: "arkts-no-func-apply-bind-call"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用标准库中接口",
      children: "使用标准库中接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let arr: number[] = [1, 2, 3, 4];\nlet str = String.fromCharCode.apply(null, Array.from(arr));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let arr: number[] = [1, 2, 3, 4];\nlet str = String.fromCharCode(...Array.from(arr));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bind定义方法",
      children: "bind定义方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class A {\n  value: string = ''\n  foo: Function = () => {}\n}\n\nclass Test {\n  value: string = '1234'\n  obj: A = {\n    value: this.value,\n    foo: this.foo.bind(this)\n  }\n\n  foo() {\n    console.info(this.value);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法1"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class A {\n  public value: string = ''\n  public foo: Function = () => {}\n}\n\nclass Test {\n  public value: string = '1234'\n  public obj: A = {\n    value: this.value,\n    foo: (): void => this.foo()\n  }\n\n  foo() {\n    console.info(this.value);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法2"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class A {\n  public value: string = ''\n  public foo: Function = () => {}\n}\n\nclass Test {\n  public value: string = '1234'\n  public foo: () => void = () => {\n    console.info(this.value);\n  }\n  public obj: A = {\n    value: this.value,\n    foo: this.foo\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用apply",
      children: "使用apply"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class A {\n  value: string;\n  constructor (value: string) {\n    this.value = value;\n  }\n\n  foo() {\n    console.info(this.value);\n  }\n}\n\nlet a1 = new A('1');\nlet a2 = new A('2');\n\na1.foo();\na1.foo.apply(a2);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class A {\n  public value: string;\n  constructor (value: string) {\n    this.value = value;\n  }\n\n  foo() {\n    this.fooApply(this);\n  }\n\n  fooApply(a: A) {\n    console.info(a.value);\n    // ...\n  }\n}\n\nlet a1 = new A('1');\nlet a2 = new A('2');\n\na1.foo();\na1.fooApply(a2);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-limited-stdlib",
      children: "arkts-limited-stdlib"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "objectfromentries",
      children: "Object.fromEntries()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let entries = new Map([\n  ['foo', 123],\n  ['bar', 456]\n]);\n\nlet obj = Object.fromEntries(entries);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let entries = new Map([\n  ['foo', 123],\n  ['bar', 456]\n]);\n\nlet obj: Record<string, Object> = {};\nentries.forEach((value, key) => {\n  if (key != undefined && key != null) {\n    obj[key] = value;\n  }\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "严格模式检查strictmodeerror",
      children: "严格模式检查(StrictModeError)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "strictpropertyinitialization",
      children: "strictPropertyInitialization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface I {\n  name:string\n}\n\nclass A {}\n\nclass Test {\n  a: number;\n  b: string;\n  c: boolean;\n  d: I;\n  e: A;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  interface I {\n    name:string\n  }\n\n  class A {}\n\n  class Test {\n    public a: number;\n    public b: string;\n    public c: boolean;\n    public d: I = { name:'abc' };\n    public e: A | null = null;\n    constructor(a:number, b:string, c:boolean) {\n      this.a = a;\n      this.b = b;\n      this.c = c;\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "type---null-is-not-assignable-to-type-",
      children: "Type *** | null is not assignable to type ***"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class A {\n  bar() {}\n}\nfunction foo(n: number) {\n  if (n === 0) {\n    return null;\n  }\n  return new A();\n}\nfunction getNumber() {\n  return 5;\n}\nlet a:A = foo(getNumber());\na.bar();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class A {\n  bar() {}\n}\nfunction foo(n: number) {\n  if (n === 0) {\n    return null;\n  }\n  return new A();\n}\nfunction getNumber() {\n  return 5;\n}\n\nlet a: A | null = foo(getNumber());\na?.bar();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "严格属性初始化检查",
      children: "严格属性初始化检查"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在class中，如果一个属性没有初始化，且没有在构造函数中被赋值，ArkTS将报错。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1.一般情况下，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议按照业务逻辑"
        })
      }), "在声明时初始化属性，或者在构造函数中为属性赋值。如："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// code with error\nclass Test {\n  value: number\n  flag: boolean\n}\n\n// 方式一，在声明时初始化\nclass Test {\n  value: number = 0\n  flag: boolean = false\n}\n\n// 方式二，在构造函数中赋值\nclass Test {\n  value: number\n  flag: boolean\n  constructor(value: number, flag: boolean) {\n    this.value = value;\n    this.flag = flag;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.对于对象类型（包括函数类型）A，如果不确定如何初始化，建议按照以下方式之一进行初始化："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "​ 方式(i) prop: A | null = null"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "​ 方式(ii) prop?: A"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "​ 方式三(iii) prop： A | undefined = undefined"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从性能角度看，null类型仅用于编译期的类型检查，不会影响虚拟机性能。而undefined | A被视为联合类型，运行时可能产生额外开销。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从代码可读性、简洁性的角度来说，prop?:A是prop： A | undefined = undefined的语法糖，", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "推荐使用可选属性的写法"
          })
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "严格函数类型检查",
      children: "严格函数类型检查"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function foo(fn: (value?: string) => void, value: string): void {}\n\nfoo((value: string) => {}, ''); // error\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function foo1(fn: (value?: string) => void, value: string): void {}\n\nfoo1((value?: string) => {}, '');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，在以下的例子中，如果编译期不开启严格函数类型的检查，那么该段代码可以编译通过，但是在运行时会产生非预期的行为。具体来看，在foo的函数体中，一个undefined被传入fn（这是可以的，因为fn可以接受undefined），但是在代码第6行foo的调用点，传入的(value: string) => { console.info(value.toUpperCase()) }的函数实现中，始终将参数value当做string类型，允许其调用toUpperCase方法。如果不开启严格函数类型的检查，那么这段代码在运行时，会出现在undefined上无法找到属性的错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function foo(fn: (value?: string) => void, value: string): void {\n  let v: string | undefined = undefined;\n  fn(v);\n}\n\nfoo((value: string) => { console.info(value.toUpperCase()) }, ''); // Cannot read properties of undefined (reading 'toUpperCase')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了避免运行时的非预期行为，开启严格类型检查时，这段代码将无法编译通过，需要提醒开发者修改代码，确保程序安全。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "严格空值检查",
      children: "严格空值检查"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Test {\n  private value?: string;\n\n  public printValue () {\n    console.info(this.value.toLowerCase());\n  }\n}\n\nlet t = new Test();\nt.printValue();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码运行时错误原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译期不开启严格空值检查，应用代码可以通过编译，但是在运行时会报错。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因为t的属性value为undefined，在调用printValue方法时，由于在该方法内未对this.value的值进行空值检查，直接按照string类型访问其属性，导致了运行时的错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在编写代码时，建议减少可空类型的使用。如果对变量、属性标记了可空类型，那么在使用它们之前，需要进行空值的判断，根据是否为空值处理不同的逻辑。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Test {\n  private value?: string;\n\n  public printValue () {\n    if (this.value) {\n      console.info(this.value.toLowerCase());\n    }\n  }\n}\n\nlet t = new Test();\nt.printValue();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数返回类型不匹配",
      children: "函数返回类型不匹配"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Test {\n  handleClick: (action: string, externInfo?: string) => void | null = null;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在这种写法下，函数返回类型被解析为 void | undefined，需要添加括号用来区分union类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Test {\n  public handleClick: ((action: string, externInfo?: string) => void) | null = null;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "type---null-is-not-assignable-to-type--1",
      children: "Type '*** | null' is not assignable to type '***'"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class A {\n  value: number\n  constructor(value: number) {\n    this.value = value;\n  }\n}\n\nfunction foo6(v: number): A | null {\n  if (v > 0) {\n    return new A(v);\n  }\n  return null;\n}\n\nlet a1: A = foo6(1);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法1"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改变量a的类型：let a: A | null = foo()。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class A1 {\n  value: number\n  constructor(value: number) {\n    this.value = value;\n  }\n}\n\nfunction foo(v: number): A1 | null {\n  if (v > 0) {\n    return new A1(v);\n  }\n  return null;\n}\n\nlet a: A1 | null = foo(123);\n\nif (a != null) {\n  // 非空分支\n} else {\n  // 处理null\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法2"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果确定此处调用foo一定返回非空值，可以使用非空断言!。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class A2 {\n  value: number\n  constructor(value: number) {\n    this.value = value;\n  }\n}\n\nfunction foo(v: number): A2 | null {\n  if (v > 0) {\n    return new A2(v);\n  }\n  return null;\n}\n\nlet a: A2 = foo(123)!;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cannot-invoke-an-object-which-is-possibly-undefined",
      children: "Cannot invoke an object which is possibly 'undefined'"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface A {\n  foo?: () => void\n}\n\nlet a:A = { foo: () => {} };\na.foo();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法1"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface A {\n  foo: () => void\n}\nlet a: A = { foo: () => {} };\na.foo();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法2"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface A {\n  foo?: () => void\n}\n\nlet a: A = { foo: () => {} };\nif (a.foo) {\n  a.foo();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在原先代码的定义中，foo是可选属性，可能为undefined，对undefined的调用会导致报错。建议根据业务逻辑判断是否需要将foo设为可选属性。如果确实需要，那么在访问该属性后需要进行空值检查。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "variable--is-used-before-being-assigned",
      children: "Variable '***' is used before being assigned"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Test {\n  value: number = 0\n}\n\nlet a: Test\ntry {\n  a = { value: 1};\n} catch (e) {\n  a.value;\n}\na.value;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Test {\n  public value: number = 0\n}\n\nlet a: Test | null = null;\ntry {\n  a = { value:1 };\n} catch (e) {\n  if (a) {\n    a.value;\n  }\n}\n\nif (a) {\n  a.value;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于primitive types，可以根据业务逻辑赋值，例如0，''，false。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于对象类型，可以将其类型修改为与null的联合类型，并赋值为null。使用时需要进行非空检查。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "function-lacks-ending-return-statement-and-return-type-does-not-include-undefined",
      children: "Function lacks ending return statement and return type does not include 'undefined'."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function foo7(a: number): number {\n  if (a > 0) {\n    return a;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法1"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据业务逻辑，在else分支中返回合适的数值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法2"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function foo4(a: number): number | undefined {\n  if (a > 0) {\n    return a;\n  }\n  return\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-strict-typing-required",
      children: "arkts-strict-typing-required"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除忽略注释，为所有变量显式声明类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// @ts-ignore\nvar a: any = 123;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let a: number = 123;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持通过注释的方式绕过严格类型检查。首先将注释（// @ts-nocheck或者// @ts-ignore）删去，再根据报错信息修改其他代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "importing-arkts-files-to-js-and-ts-files-is-not-allowed",
      children: "Importing ArkTS files to JS and TS files is not allowed"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-tsdeps",
      children: "arkts-no-tsdeps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不允许.ts、.js文件import.ets文件源码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方式1.将.ts文件的后缀修改为ets，并按ArkTS语法规则适配代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方式2.将.ets文件中被.ts文件依赖的代码单独抽取到.ts文件中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-special-imports",
      children: "arkts-no-special-imports"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "改为使用普通import { ... } from '...' 导入类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import type {A, B, C, D } from '***'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {A, B, C, D } from '***'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-classes-as-obj",
      children: "arkts-no-classes-as-obj"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用class构造实例",
      children: "使用class构造实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Controller {\n  value: string = ''\n  constructor(value: string) {\n    this.value = value\n  }\n}\n\ninterface ControllerConstructor {\n  new (value: string): Controller;\n}\n\nclass TestMenu {\n  controller: ControllerConstructor = Controller\n  createController() {\n    if (this.controller) {\n      return new this.controller('abc');\n    }\n    return null;\n  }\n}\n\nlet t = new TestMenu();\nconsole.info(t.createController()!.value);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Controller {\n  public value: string = ''\n\n  constructor(value: string) {\n    this.value = value;\n  }\n}\n\ntype ControllerConstructor = () => Controller;\n\nclass TestMenu {\n  public controller: ControllerConstructor = () => {\n    return new Controller('abc');\n  }\n\n  createController() {\n    if (this.controller) {\n      return this.controller();\n    }\n    return null;\n  }\n}\n\nlet t: TestMenu = new TestMenu();\nconsole.info(t.createController()!.value);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "访问静态属性",
      children: "访问静态属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C1 {\n  static value: string = 'abc'\n}\n\nclass C2 {\n  static value: string = 'def'\n}\n\nfunction getValue(obj: any) {\n  return obj['value'];\n}\n\nconsole.info(getValue(C1));\nconsole.info(getValue(C2));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C1 {\n  public static value: string = 'abc'\n}\n\nclass C2 {\n  public static value: string = 'def'\n}\n\nfunction getC1Value(): string {\n  return C1.value;\n}\n\nfunction getC2Value(): string {\n  return C2.value;\n}\n\nconsole.info(getC1Value());\nconsole.info(getC2Value());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-side-effects-imports",
      children: "arkts-no-side-effects-imports"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "改用动态import。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import 'module'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import('module')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-no-func-props",
      children: "arkts-no-func-props"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用class来组织多个相关函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function foo8(value: number): void {\n  console.info(value.toString());\n}\n\nfoo8.add = (left: number, right: number) => {\n  return left + right;\n}\n\nfoo8.sub = (left: number, right: number) => {\n  return left - right;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Foo {\n  static foo(value: number): void {\n    console.info(value.toString());\n    // ...\n  }\n\n  static add(left: number, right: number): number {\n    return left + right;\n  }\n\n  static sub(left: number, right: number): number {\n    return left - right;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-limited-esobj",
      children: "arkts-limited-esobj"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用具体类型（如number, string）或接口代替不明确的ESObject。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// testa.ts\nexport function foo(): any {\n  return null;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// main.ets\nimport {foo} from './testa'\nlet e0: ESObject = foo();\n\nfunction f() {\n  let e1 = foo();\n  let e2: ESObject = 1;\n  let e3: ESObject = {};\n  let e4: ESObject = '';\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议改法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// testa.ts\nexport function foo(): any {\n  return null;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// main.ets\nimport {foo} from './testa'\ninterface I {}\n\nfunction f() {\n  let e0: ESObject = foo();\n  let e1: ESObject = foo();\n  let e2: number = 1;\n  let e3: I = {};\n  let e4: string = '';\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "拷贝",
      children: "拷贝"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "浅拷贝",
      children: "浅拷贝"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function shallowCopy(obj: object): object {\n  let newObj = {};\n  Object.assign(newObj, obj);\n  return newObj;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function shallowCopy(obj: object): object {\n  let newObj: Record<string, Object> = {};\n  for (let key of Object.keys(obj)) {\n    newObj[key] = obj[key];\n  }\n  return newObj;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "深拷贝",
      children: "深拷贝"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function deepCopy(obj: object): object {\n  let newObj = Array.isArray(obj) ? [] : {};\n  for (let key in obj) {\n    if (typeof obj[key] === 'object') {\n      newObj[key] = deepCopy(obj[key]);\n    } else {\n      newObj[key] = obj[key];\n    }\n  }\n  return newObj;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function deepCopy(obj: object): object {\n  let newObj: Record<string, Object> | Object[] = Array.isArray(obj) ? [] : {};\n  for (let key of Object.keys(obj)) {\n    if (typeof obj[key] === 'object') {\n      newObj[key] = deepCopy(obj[key]);\n    } else {\n      newObj[key] = obj[key];\n    }\n  }\n  return newObj;\n}\n"
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
806510(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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