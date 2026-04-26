"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["282585"], {
578974(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_learning_arkts_typescript_to_arkts_migration_typescript_to_arkts_migration_guide_typescript_to_arkts_migration_guide_md_192_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-learning-arkts-typescript-to-arkts-migration-typescript-to-arkts-migration-guide-typescript-to-arkts-migration-guide-md-192.json
var site_docs_learning_arkts_typescript_to_arkts_migration_typescript_to_arkts_migration_guide_typescript_to_arkts_migration_guide_md_192_namespaceObject = JSON.parse('{"id":"learning-arkts/typescript-to-arkts-migration/typescript-to-arkts-migration-guide/typescript-to-arkts-migration-guide","title":"从TypeScript到ArkTS的适配规则","description":"ArkTS规范约束了TypeScript（简称TS）中影响开发正确性或增加运行时开销的特性。本文罗列了ArkTS中限制的TS特性，并提供重构代码的建议。ArkTS保留了TS大部分语法特性，未在本文中约束的TS特性，ArkTS完全支持。例如，ArkTS支持自定义装饰器，语法与TS一致。按本文约束进行代码重构后，代码仍为合法有效的TS代码。","source":"@site/docs/learning-arkts/typescript-to-arkts-migration/typescript-to-arkts-migration-guide/typescript-to-arkts-migration-guide.md","sourceDirName":"learning-arkts/typescript-to-arkts-migration/typescript-to-arkts-migration-guide","slug":"/learning-arkts/typescript-to-arkts-migration/typescript-to-arkts-migration-guide/","permalink":"/harmonyos-docs-site/learning-arkts/typescript-to-arkts-migration/typescript-to-arkts-migration-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"从TypeScript到ArkTS的适配规则","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/typescript-to-arkts-migration-guide","kit":"getting-started","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkTS语法适配背景","permalink":"/harmonyos-docs-site/learning-arkts/typescript-to-arkts-migration/arkts-migration-background/"},"next":{"title":"适配指导案例","permalink":"/harmonyos-docs-site/learning-arkts/typescript-to-arkts-migration/arkts-more-cases/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/learning-arkts/typescript-to-arkts-migration/typescript-to-arkts-migration-guide/typescript-to-arkts-migration-guide.md


const frontMatter = {
	title: '从TypeScript到ArkTS的适配规则',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/typescript-to-arkts-migration-guide',
	kit: 'getting-started',
	last_updated: '2026-04-22'
};
const contentTitle = '从TypeScript到ArkTS的适配规则';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "强制使用静态类型",
  "id": "强制使用静态类型",
  "level": 3
}, {
  "value": "禁止在运行时变更对象布局",
  "id": "禁止在运行时变更对象布局",
  "level": 3
}, {
  "value": "限制运算符的语义",
  "id": "限制运算符的语义",
  "level": 3
}, {
  "value": "不支持 structural typing",
  "id": "不支持-structural-typing",
  "level": 3
}, {
  "value": "约束说明",
  "id": "约束说明",
  "level": 2
}, {
  "value": "对象的属性名必须是合法的标识符",
  "id": "对象的属性名必须是合法的标识符",
  "level": 3
}, {
  "value": "不支持Symbol()API",
  "id": "不支持symbolapi",
  "level": 3
}, {
  "value": "不支持以#开头的私有字段",
  "id": "不支持以开头的私有字段",
  "level": 3
}, {
  "value": "类型、命名空间的命名必须唯一",
  "id": "类型命名空间的命名必须唯一",
  "level": 3
}, {
  "value": "使用let而非var",
  "id": "使用let而非var",
  "level": 3
}, {
  "value": "使用具体的类型而非any或unknown",
  "id": "使用具体的类型而非any或unknown",
  "level": 3
}, {
  "value": "使用class而非具有call signature的类型",
  "id": "使用class而非具有call-signature的类型",
  "level": 3
}, {
  "value": "使用class而非具有构造签名的类型",
  "id": "使用class而非具有构造签名的类型",
  "level": 3
}, {
  "value": "仅支持一个静态块",
  "id": "仅支持一个静态块",
  "level": 3
}, {
  "value": "不支持index signature",
  "id": "不支持index-signature",
  "level": 3
}, {
  "value": "使用继承而非intersection type",
  "id": "使用继承而非intersection-type",
  "level": 3
}, {
  "value": "不支持this类型",
  "id": "不支持this类型",
  "level": 3
}, {
  "value": "不支持条件类型",
  "id": "不支持条件类型",
  "level": 3
}, {
  "value": "不支持在constructor中声明字段",
  "id": "不支持在constructor中声明字段",
  "level": 3
}, {
  "value": "接口中不支持构造签名",
  "id": "接口中不支持构造签名",
  "level": 3
}, {
  "value": "不支持索引访问类型",
  "id": "不支持索引访问类型",
  "level": 3
}, {
  "value": "不支持通过索引访问字段",
  "id": "不支持通过索引访问字段",
  "level": 3
}, {
  "value": "不支持structural typing",
  "id": "不支持structural-typing",
  "level": 3
}, {
  "value": "需要显式标注泛型函数类型实参",
  "id": "需要显式标注泛型函数类型实参",
  "level": 3
}, {
  "value": "需要显式标注对象字面量的类型",
  "id": "需要显式标注对象字面量的类型",
  "level": 3
}, {
  "value": "对象字面量不能用于类型声明",
  "id": "对象字面量不能用于类型声明",
  "level": 3
}, {
  "value": "数组字面量必须仅包含可推断类型的元素",
  "id": "数组字面量必须仅包含可推断类型的元素",
  "level": 3
}, {
  "value": "使用箭头函数而非函数表达式",
  "id": "使用箭头函数而非函数表达式",
  "level": 3
}, {
  "value": "不支持使用类表达式",
  "id": "不支持使用类表达式",
  "level": 3
}, {
  "value": "类不允许implements",
  "id": "类不允许implements",
  "level": 3
}, {
  "value": "不支持修改对象的方法",
  "id": "不支持修改对象的方法",
  "level": 3
}, {
  "value": "类型转换仅支持as T语法",
  "id": "类型转换仅支持as-t语法",
  "level": 3
}, {
  "value": "不支持JSX表达式",
  "id": "不支持jsx表达式",
  "level": 3
}, {
  "value": "一元运算符+、-和~仅适用于数值类型",
  "id": "一元运算符-和仅适用于数值类型",
  "level": 3
}, {
  "value": "不支持delete运算符",
  "id": "不支持delete运算符",
  "level": 3
}, {
  "value": "仅允许在表达式中使用typeof运算符",
  "id": "仅允许在表达式中使用typeof运算符",
  "level": 3
}, {
  "value": "部分支持instanceof运算符",
  "id": "部分支持instanceof运算符",
  "level": 3
}, {
  "value": "不支持in运算符",
  "id": "不支持in运算符",
  "level": 3
}, {
  "value": "不支持解构赋值",
  "id": "不支持解构赋值",
  "level": 3
}, {
  "value": "逗号运算符,仅用在for循环语句中",
  "id": "逗号运算符仅用在for循环语句中",
  "level": 3
}, {
  "value": "不支持解构变量声明",
  "id": "不支持解构变量声明",
  "level": 3
}, {
  "value": "不支持在catch语句标注类型",
  "id": "不支持在catch语句标注类型",
  "level": 3
}, {
  "value": "不支持for .. in",
  "id": "不支持for--in",
  "level": 3
}, {
  "value": "不支持映射类型",
  "id": "不支持映射类型",
  "level": 3
}, {
  "value": "不支持with语句",
  "id": "不支持with语句",
  "level": 3
}, {
  "value": "限制throw语句中表达式的类型",
  "id": "限制throw语句中表达式的类型",
  "level": 3
}, {
  "value": "限制省略函数返回类型标注",
  "id": "限制省略函数返回类型标注",
  "level": 3
}, {
  "value": "不支持参数解构的函数声明",
  "id": "不支持参数解构的函数声明",
  "level": 3
}, {
  "value": "不支持在函数内声明函数",
  "id": "不支持在函数内声明函数",
  "level": 3
}, {
  "value": "不支持在函数和类的静态方法中使用this",
  "id": "不支持在函数和类的静态方法中使用this",
  "level": 3
}, {
  "value": "不支持生成器函数",
  "id": "不支持生成器函数",
  "level": 3
}, {
  "value": "使用instanceof和as进行类型保护",
  "id": "使用instanceof和as进行类型保护",
  "level": 3
}, {
  "value": "部分支持展开运算符",
  "id": "部分支持展开运算符",
  "level": 3
}, {
  "value": "接口不能继承具有相同方法的两个接口",
  "id": "接口不能继承具有相同方法的两个接口",
  "level": 3
}, {
  "value": "不支持声明合并",
  "id": "不支持声明合并",
  "level": 3
}, {
  "value": "接口不能继承类",
  "id": "接口不能继承类",
  "level": 3
}, {
  "value": "不支持构造函数类型",
  "id": "不支持构造函数类型",
  "level": 3
}, {
  "value": "只能使用类型相同的编译时表达式初始化枚举成员",
  "id": "只能使用类型相同的编译时表达式初始化枚举成员",
  "level": 3
}, {
  "value": "不支持enum声明合并",
  "id": "不支持enum声明合并",
  "level": 3
}, {
  "value": "命名空间不能被用作对象",
  "id": "命名空间不能被用作对象",
  "level": 3
}, {
  "value": "不支持命名空间中的非声明语句",
  "id": "不支持命名空间中的非声明语句",
  "level": 3
}, {
  "value": "不支持require和import赋值表达式",
  "id": "不支持require和import赋值表达式",
  "level": 3
}, {
  "value": "不支持export = ...语法",
  "id": "不支持export--语法",
  "level": 3
}, {
  "value": "不支持ambient module声明",
  "id": "不支持ambient-module声明",
  "level": 3
}, {
  "value": "不支持在模块名中使用通配符",
  "id": "不支持在模块名中使用通配符",
  "level": 3
}, {
  "value": "不支持通用模块定义(UMD)",
  "id": "不支持通用模块定义umd",
  "level": 3
}, {
  "value": "不支持new.target",
  "id": "不支持newtarget",
  "level": 3
}, {
  "value": "不支持确定赋值断言",
  "id": "不支持确定赋值断言",
  "level": 3
}, {
  "value": "不支持在原型上赋值",
  "id": "不支持在原型上赋值",
  "level": 3
}, {
  "value": "不支持globalThis",
  "id": "不支持globalthis",
  "level": 3
}, {
  "value": "不支持一些utility类型",
  "id": "不支持一些utility类型",
  "level": 3
}, {
  "value": "不支持对函数声明属性",
  "id": "不支持对函数声明属性",
  "level": 3
}, {
  "value": "不支持Function.apply和Function.call",
  "id": "不支持functionapply和functioncall",
  "level": 3
}, {
  "value": "不支持Function.bind",
  "id": "不支持functionbind",
  "level": 3
}, {
  "value": "不支持as const断言",
  "id": "不支持as-const断言",
  "level": 3
}, {
  "value": "不支持导入断言",
  "id": "不支持导入断言",
  "level": 3
}, {
  "value": "限制使用标准库",
  "id": "限制使用标准库",
  "level": 3
}, {
  "value": "强制进行严格类型检查",
  "id": "强制进行严格类型检查",
  "level": 3
}, {
  "value": "不允许通过注释关闭类型检查",
  "id": "不允许通过注释关闭类型检查",
  "level": 3
}, {
  "value": "允许.ets文件import.ets/.ts/.js文件源码, 不允许.ts/.js文件import.ets文件源码",
  "id": "允许ets文件importetstsjs文件源码-不允许tsjs文件importets文件源码",
  "level": 3
}, {
  "value": "class不能被用作对象",
  "id": "class不能被用作对象",
  "level": 3
}, {
  "value": "不支持在import语句前使用其他语句",
  "id": "不支持在import语句前使用其他语句",
  "level": 3
}, {
  "value": "限制使用ESObject类型",
  "id": "限制使用esobject类型",
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
        id: "从typescript到arkts的适配规则",
        children: "从TypeScript到ArkTS的适配规则"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS规范约束了TypeScript（简称TS）中影响开发正确性或增加运行时开销的特性。本文罗列了ArkTS中限制的TS特性，并提供重构代码的建议。ArkTS保留了TS大部分语法特性，未在本文中约束的TS特性，ArkTS完全支持。例如，ArkTS支持自定义装饰器，语法与TS一致。按本文约束进行代码重构后，代码仍为合法有效的TS代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "包含关键字var的原始TypeScript代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function addTen(x: number): number {\n  var ten = 10;\n  return x + ten;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重构后的代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function addTen(x: number): number {\n  let ten = 10;\n  return x + ten;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "约束分为两个级别：错误、警告。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "错误：必须要遵从的约束。如果不遵从该约束，将会导致程序编译失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "警告：推荐遵从的约束。尽管现在违反该约束不会影响编译流程，但是在将来，违反该约束可能会导致程序编译失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "不支持的特性"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前，不支持的特性主要包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "与降低运行时性能的动态类型相关的特性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要编译器额外支持从而导致项目构建时间增加的特性。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据开发者的反馈和实际场景的数据，未来将逐步减少不支持的特性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本节罗列了ArkTS不支持或部分支持的TypeScript特性。完整的列表以及详细的代码示例和重构建议，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%BA%A6%E6%9D%9F%E8%AF%B4%E6%98%8E",
        children: "约束说明"
      }), "。更多案例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/learning-arkts/typescript-to-arkts-migration/arkts-more-cases",
        children: "适配指导案例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "强制使用静态类型",
      children: "强制使用静态类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "静态类型是ArkTS的重要特性之一。当程序使用静态类型时，所有类型在编译时已知，这有助于开发者理解代码中的数据结构。编译器可以提前验证代码的正确性，减少运行时的类型检查，从而提升性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于上述考虑，ArkTS中禁止使用any类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 不支持：\nlet res: any = some_api_function('hello', 'world');\n// 支持：\nclass CallResult {\n  public succeeded(): boolean {\n    return false;\n  }\n  public errorMessage(): string {\n    return '123';\n  }\n}\nfunction some_api_function(param1: string, param2: string): CallResult {\n  return new CallResult();\n}\n\nlet res: CallResult = some_api_function('hello', 'world');\nif (!res.succeeded()) {\n  console.info('Call failed: ' + res.errorMessage());\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "any类型在TypeScript中并不常见，仅约1%的TypeScript代码库使用。代码检查工具（例如ESLint）也制定了一系列规则来禁止使用any。因此，虽然禁止any将导致代码重构，但重构量很小，有助于整体性能提升。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "禁止在运行时变更对象布局",
      children: "禁止在运行时变更对象布局"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为实现最佳性能，ArkTS要求在程序执行期间不能更改对象的布局。换句话说，ArkTS禁止以下行为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "向对象中添加新的属性或方法。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从对象中删除已有的属性或方法。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将任意类型的值赋值给对象属性。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TypeScript编译器已经禁止了许多此类操作。然而，有些操作还是有可能绕过编译器的，例如，使用as any转换对象的类型，或者在编译TS代码时关闭严格类型检查的配置，或者在代码中通过@ts-ignore忽略类型检查。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS中，严格类型检查不是可配置项。ArkTS强制进行部分严格类型检查，并通过规范禁止使用any类型，禁止在代码中使用@ts-ignore。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Point {\n  public x: number = 0\n  public y: number = 0\n\n  constructor(x: number, y: number) {\n    this.x = x;\n    this.y = y;\n  }\n}\n\n// 无法从对象中删除某个属性，从而确保所有Point对象都具有属性x\nlet p1 = new Point(1.0, 1.0);\ndelete p1.x;           // 在TypeScript和ArkTS中，都会产生编译时错误\ndelete (p1 as any).x;  // 在TypeScript中不会报错；在ArkTS中会产生编译时错误\n\n// Point类没有定义命名为z的属性，在程序运行时也无法添加该属性\nlet p2 = new Point(2.0, 2.0);\np2.z = 'Label';           // 在TypeScript和ArkTS中，都会产生编译时错误\n(p2 as any).z = 'Label';   // 在TypeScript中不会报错；在ArkTS中会产生编译时错误\n\n// 类的定义确保了所有Point对象只有属性x和y，并且无法被添加其他属性\nlet p3 = new Point(3.0, 3.0);\nlet prop = Symbol();      // 在TypeScript中不会报错；在ArkTS中会产生编译时错误\n(p3 as any)[prop] = p3.x; // 在TypeScript中不会报错；在ArkTS中会产生编译时错误\np3[prop] = p3.x;          // 在TypeScript和ArkTS中，都会产生编译时错误\n\n// 类的定义确保了所有Point对象的属性x和y都具有number类型，因此，无法将其他类型的值赋值给它们\nlet p4 = new Point(4.0, 4.0);\np4.x = 'Hello!';          // 在TypeScript和ArkTS中，都会产生编译时错误\n(p4 as any).x = 'Hello!'; // 在TypeScript中不会报错；在ArkTS中会产生编译时错误\n\n// 使用符合类定义的Point对象：\nfunction distance(p1: Point, p2: Point): number {\n  return Math.sqrt(\n    (p2.x - p1.x) * (p2.x - p1.x) + (p2.y - p1.y) * (p2.y - p1.y)\n  );\n}\nlet p5 = new Point(5.0, 5.0);\nlet p6 = new Point(6.0, 6.0);\nconsole.info('Distance between p5 and p6: ' + distance(p5, p6));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改对象布局会影响代码可读性和运行时性能。定义类后，在其他地方修改对象布局，容易引起困惑乃至引入错误。此外，还需要额外的运行时支持，增加执行开销。这与静态类型约束冲突：使用显式类型时，不应添加或删除属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前，只有少数项目允许在运行时变更对象布局，一些常用的代码检查工具也增加了相应的限制规则。虽然需要少量代码重构，但由此带来的性能提升收益十分可观。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "限制运算符的语义",
      children: "限制运算符的语义"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为获得更好的性能并鼓励开发者编写更清晰的代码，ArkTS限制了一些运算符的语义。详细的语义限制，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%BA%A6%E6%9D%9F%E8%AF%B4%E6%98%8E",
        children: "约束说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 一元运算符`+`只能作用于数值类型：\nlet t = +42;   // 合法运算\nlet s = +'42'; // 编译时错误\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用额外的语义重载语言运算符会增加语言规范的复杂度，而且，开发者还被迫牢记所有可能的例外情况及对应的处理规则。在特定情况下，这会导致不必要的运行时开销。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前只有不到1%的代码库使用该特性。因此，尽管限制运算符的语义需要重构代码，但重构量很小且非常容易操作，并且，通过重构能使代码更清晰、具备更高性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持-structural-typing",
      children: "不支持 structural typing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "假设两个不相关的类T和U都拥有相同的publicAPI："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class T {\n  public name: string = ''\n\n  public greet(): void {\n    console.info('Hello, ' + this.name);\n  }\n}\n\nclass U {\n  public name: string = ''\n\n  public greet(): void {\n    console.info('Greetings, ' + this.name);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "类型为T的值是否能赋给类型为U的变量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let u: U = new T(); // 是否允许？\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "类型为T的值是否能传递给接受类型为U的参数的函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function greeter(u: U) {\n  console.info('To ' + u.name);\n  u.greet();\n}\n\nlet t: T = new T();\ngreeter(t); // 是否允许？\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体采用哪种方法，情况如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T和U没有继承关系或没有implements相同的接口，但由于它们具有相同的publicAPI，它们“在某种程度上是相等的”，因此上述两个问题的答案都是“是”。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T和U没有继承关系或没有implements相同的接口，应当始终被视为完全不同的类型，因此上述两个问题的答案都是“否”。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "采用第一种方法的语言支持structural typing，而采用第二种方法的语言则不支持structural typing。目前TypeScript支持structural typing，而ArkTS不支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关于structural typing是否有助于生成清晰、易理解的代码，目前尚无定论。ArkTS不支持structural typing的原因如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因为对structural typing的支持是一个重大的特性，需要在语言规范、编译器和运行时进行大量的考虑和仔细的实现。另外，由于ArkTS使用静态类型，运行时为了支持这个特性需要额外的性能开销。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["鉴于此，当前我们还不支持该特性。根据实际场景的需求和反馈，我们后续会重新加以考虑。更多案例和建议请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%BA%A6%E6%9D%9F%E8%AF%B4%E6%98%8E",
        children: "约束说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束说明",
      children: "约束说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "对象的属性名必须是合法的标识符",
      children: "对象的属性名必须是合法的标识符"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-identifiers-as-prop-names"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605001"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS中，对象的属性名不能为数字或字符串。例外：ArkTS支持属性名为字符串字面量和枚举中的字符串值。通过属性名访问类的属性，通过数值索引访问数组元素。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "var x = { 'name': 'x', 2: '3' };\n\nconsole.info(x['name']); // x。\nconsole.info(x[2]); // 3。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class X {\n  public name: string = '';\n}\nlet x: X = { name: 'x' };\nconsole.info(x.name); // x。\n\nlet y = ['a', 'b', 'c'];\nconsole.info(y[2]); // c。\n\n// 在需要通过非标识符（即不同类型的key）获取数据的场景中，使用Map<Object, some_type>。\nlet z = new Map<Object, string>();\nz.set('name', '1');\nz.set(2, '2');\nconsole.info(z.get('name'));  // 1。\nconsole.info(z.get(2)); // 2。\n\nenum Test {\n  A = 'aaa',\n  B = 'bbb'\n};\n\nlet obj: Record<string, number> = {\n  [Test.A]: 1,   // 枚举中的字符串值。\n  [Test.B]: 2,   // 枚举中的字符串值。\n  ['value']: 3   // 字符串字面量。\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持symbolapi",
      children: "不支持Symbol()API"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-symbol"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605002"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS中，对象布局在编译时确定，不可在运行时更改，因此不支持Symbol() API。该API在静态类型语言中通常没有实际意义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS只支持Symbol.iterator。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持以开头的私有字段",
      children: "不支持以#开头的私有字段"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-private-identifiers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605003"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持使用#符号开头声明的私有字段。改用private关键字。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C {\n  #foo: number = 42\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C {\n  private foo: number = 42;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型命名空间的命名必须唯一",
      children: "类型、命名空间的命名必须唯一"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-unique-names"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605004"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "类型（类、接口、枚举）和命名空间的名称必须唯一，并且不能与其他名称（如变量名、函数名）重复。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let X: string\ntype X = number[] // 类型的别名与变量同名。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let X: string;\ntype T = number[]; // 为避免名称冲突，此处不允许使用X。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用let而非var",
      children: "使用let而非var"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-var"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605005"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "let关键字可以在块级作用域中声明变量，帮助程序员避免错误。因此，ArkTS不支持var，请使用let声明变量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function f(shouldInitialize: boolean) {\n  if (shouldInitialize) {\n     var x = 'b';\n  }\n  return x;\n}\n\nconsole.info(f(true));  // b\nconsole.info(f(false)); // undefined\n\nlet upperLet = 0;\n{\n  var scopedVar = 0;\n  let scopedLet = 0;\n  upperLet = 5;\n}\nscopedVar = 5; // 可见\nscopedLet = 5; // 编译时错误\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function f(shouldInitialize: boolean): string {\n  let x: string = 'a';\n  if (shouldInitialize) {\n    x = 'b';\n  }\n  return x;\n}\n\nconsole.info(f(true));  // b\nconsole.info(f(false)); // a\n\nlet upperLet = 0;\nlet scopedVar = 0;\n{\n  let scopedLet = 0;\n  upperLet = 5;\n}\nscopedVar = 5;\nscopedLet = 5; // 编译时错误\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用具体的类型而非any或unknown",
      children: "使用具体的类型而非any或unknown"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-any-unknown"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605008"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持any和unknown类型。显式指定具体类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let value1: any\nvalue1 = true;\nvalue1 = 42;\n\nlet value2: unknown\nvalue2 = true;\nvalue2 = 42;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let valueB: boolean = true; // 或者 let valueB = true。\nlet valueN: number = 42; // 或者 let valueN = 42。\nlet valueO1: Object = true;\nlet valueO2: Object = 42;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用class而非具有call-signature的类型",
      children: "使用class而非具有call signature的类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-call-signatures"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605014"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持对象类型中包含call signature。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "type DescribableFunction = {\n  description: string\n  (someArg: string): string // call signature。\n}\n\nfunction doSomething(fn: DescribableFunction): void {\n  console.info(fn.description + ' returned ' + fn(''));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class DescribableFunction {\n  public description: string;\n  public invoke(someArg: string): string {\n    return someArg;\n  }\n  constructor() {\n    this.description = 'desc';\n  }\n}\n\nfunction doSomething(fn: DescribableFunction): void {\n  console.info(fn.description + ' returned ' + fn.invoke(''));\n}\n\ndoSomething(new DescribableFunction());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用class而非具有构造签名的类型",
      children: "使用class而非具有构造签名的类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-ctor-signatures-type"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605015"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持对象类型中的构造签名。改用类。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class SomeObject { }\n\ntype SomeConstructor = {\n  new(s: string): SomeObject\n}\n\nfunction fn(ctor: SomeConstructor) {\n  return new ctor('hello');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class SomeObject {\n  public f: string;\n  constructor (s: string) {\n    this.f = s;\n  }\n}\n\nfunction fn(s: string): SomeObject {\n  return new SomeObject(s);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "仅支持一个静态块",
      children: "仅支持一个静态块"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-multiple-static-blocks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605016"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不允许类中存在多个静态块。如果存在多个静态块语句，请将其合并到一个静态块中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C {\n  static s: string\n\n  static {\n    C.s = 'aa'\n  }\n  static {\n    C.s = C.s + 'bb'\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C {\n  public static s: string;\n\n  static {\n    C.s = 'aa';\n    C.s = C.s + 'bb';\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持index-signature",
      children: "不支持index signature"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-indexed-signatures"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605017"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不允许index signature，改用数组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 带index signature的接口：\ninterface StringArray {\n  [index: number]: string\n}\n\nfunction getStringArray(): StringArray {\n  return ['a', 'b', 'c'];\n}\n\nconst myArray: StringArray = getStringArray();\nconst secondItem = myArray[1];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class X {\n  public f: string[] = [];\n}\n\nlet myArray: X = new X();\nconst secondItem = myArray.f[1];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用继承而非intersection-type",
      children: "使用继承而非intersection type"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-intersection-types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605019"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前ArkTS不支持intersection type，可以使用继承作为替代方案。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface Identity {\n  id: number\n  name: string\n}\n\ninterface Contact {\n  email: string\n  phoneNumber: string\n}\n\ntype Employee = Identity & Contact\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface Identity {\n  id: number;\n  name: string;\n}\n\ninterface Contact {\n  email: string;\n  phoneNumber: string;\n}\n\ninterface Employee extends Identity,  Contact {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持this类型",
      children: "不支持this类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-typing-with-this"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605021"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持this类型，改用显式具体类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface ListItem {\n  getHead(): this\n}\n\nclass C {\n  n: number = 0\n\n  m(c: this) {\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface testListItem {\n  getHead(): testListItem;\n}\n\nclass C {\n  public n: number = 0;\n\n  m(c: C) {\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持条件类型",
      children: "不支持条件类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-conditional-types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605022"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持条件类型别名，建议引入带显式约束的新类型，或使用Object进行逻辑重构。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持infer关键字。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "type X<T> = T extends number ? T : never;\ntype Y<T> = T extends Array<infer Item> ? Item : never;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 在类型别名中提供显式约束。\ntype X1<T extends number> = T;\n\n// 用Object重写，类型控制较少，需要更多的类型检查以确保安全。\ntype X2<T> = Object;\n\n// Item必须作为泛型参数使用，并能正确实例化。\ntype YI<Item, T extends Array<Item>> = Item;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持在constructor中声明字段",
      children: "不支持在constructor中声明字段"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-ctor-prop-decls"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605025"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS禁止在构造函数中声明类字段，所有字段都必须在class作用域内显式声明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Person {\n  constructor(\n    protected ssn: string,\n    private firstName: string,\n    private lastName: string\n  ) {\n    this.ssn = ssn;\n    this.firstName = firstName;\n    this.lastName = lastName;\n  }\n\n  getFullName(): string {\n    return this.firstName + ' ' + this.lastName;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Person {\n  protected ssn: string;\n  private firstName: string;\n  private lastName: string;\n\n  constructor(ssn: string, firstName: string, lastName: string) {\n    this.ssn = ssn;\n    this.firstName = firstName;\n    this.lastName = lastName;\n  }\n\n  getFullName(): string {\n    return this.firstName + ' ' + this.lastName;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口中不支持构造签名",
      children: "接口中不支持构造签名"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-ctor-signatures-iface"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605027"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS语法禁止在接口（interface）中定义构造签名。作为替代方案，建议使用普通函数或方法来实现相同功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface I {\n  new(s: string): I;\n}\n\nfunction fn(i: I) {\n  return new i('hello');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface I {\n  create(s: string): I;\n}\n\nfunction fn(i: I) {\n  return i.create('hello');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持索引访问类型",
      children: "不支持索引访问类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-aliases-by-index"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605028"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持索引访问类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持通过索引访问字段",
      children: "不支持通过索引访问字段"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-props-by-index"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605029"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持动态声明字段，不支持动态访问字段。只能访问已在类中声明或者继承可见的字段，访问其他字段将会造成编译时错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用点操作符访问字段，例如（obj.field），不支持索引访问（obj['field']）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS支持通过索引访问TypedArray（例如Int32Array）中的元素。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Point {\n  x: string = '';\n  y: string = '';\n}\nlet p: Point = { x: '1', y: '2' };\nconsole.info(p['x']); // 1。\n\nclass Person {\n  name: string = '';\n  age: number = 0;\n  [key: string]: string | number;\n}\n\nlet person: Person = {\n  name: 'John',\n  age: 30,\n  email: '***@example.com',\n  phoneNumber: '18*********',\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Point {\n  x: string = ''\n  y: string = ''\n}\nlet p: Point = {x: '1', y: '2'};\nconsole.info(p.x); // 1\n\nclass Person {\n  name: string\n  age: number\n  email: string\n  phoneNumber: string\n\n  constructor(name: string, age: number, email: string,\n        phoneNumber: string) {\n    this.name = name;\n    this.age = age;\n    this.email = email;\n    this.phoneNumber = phoneNumber;\n  }\n}\n\nlet person = new Person('John', 30, '***@example.com', '18*********');\nconsole.info(person['name']);     // 编译时错误\nconsole.info(person.unknownProperty); // 编译时错误\n\nlet arr = new Int32Array(1);\narr[0];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持structural-typing",
      children: "不支持structural typing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-structural-typing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605030"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持structural typing，编译器无法比较两种类型的publicAPI并决定它们是否相同。使用其他机制，例如继承、接口或类型别名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface I1 {\n  f(): string\n}\n\ninterface I2 { // I2等价于I1\n  f(): string\n}\n\nclass X {\n  n: number = 0\n  s: string = ''\n}\n\nclass Y { // Y等价于X\n  n: number = 0\n  s: string = ''\n}\n\nlet x = new X();\nlet y = new Y();\n\n// 将X对象赋值给Y对象\ny = x;\n\n// 将Y对象赋值给X对象\nx = y;\n\nfunction foo(x: X) {\n  console.info(x.n + x.s);\n}\n\n// 由于X和Y的API是等价的，所以X和Y是等价的\nfoo(new X());\nfoo(new Y());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface I1 {\n  f(): string\n}\n\ntype I2 = I1 // I2是I1的别名\n\nclass B {\n  n: number = 0\n  s: string = ''\n}\n\n// D是B的继承类，构建了子类型和父类型的关系\nclass D extends B {\n  constructor() {\n    super()\n  }\n}\n\nlet b = new B();\nlet d = new D();\n\nconsole.info('Assign D to B');\nb = d; // 合法赋值，因为B是D的父类\n\n// 将b赋值给d将会引起编译时错误\n// d = b\n\ninterface Z {\n   n: number\n   s: string\n}\n\n// 类X implements 接口Z，构建了X和Y的关系\nclass X implements Z {\n  n: number = 0\n  s: string = ''\n}\n\n// 类Y implements 接口Z，构建了X和Y的关系\nclass Y implements Z {\n  n: number = 0\n  s: string = ''\n}\n\nlet x: Z = new X();\nlet y: Z = new Y();\n\nconsole.info('Assign X to Y');\ny = x // 合法赋值，它们是相同的类型\n\nconsole.info('Assign Y to X');\nx = y // 合法赋值，它们是相同的类型\n\nfunction foo(c: Z): void {\n  console.info(c.n + c.s);\n}\n\n// 类X和类Y implement 相同的接口，因此下面的两个函数调用都是合法的\nfoo(new X());\nfoo(new Y());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "需要显式标注泛型函数类型实参",
      children: "需要显式标注泛型函数类型实参"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-inferred-generic-params"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605034"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果可以从传递给泛型函数的参数中推断出具体类型，ArkTS允许省略泛型类型实参。否则，省略泛型类型实参会发生编译时错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "禁止仅基于泛型函数返回类型推断泛型类型参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function choose<T>(x: T, y: T): T {\n  return Math.random() < 0.5 ? x: y;\n}\n\nlet x = choose(10, 20);   // 推断choose<number>(...)\nlet y = choose('10', 20); // 编译时错误\n\nfunction greet<T>(): T {\n  return 'Hello' as T;\n}\nlet z = greet() // T的类型被推断为“unknown”\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function choose<T>(x: T, y: T): T {\n  return Math.random() < 0.5 ? x: y;\n}\n\nlet x = choose(10, 20);   // 推断choose<number>(...)\nlet y = choose('10', 20); // 编译时错误\n\nfunction greet<T>(): T {\n  return 'Hello' as T;\n}\nlet z = greet<string>();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "需要显式标注对象字面量的类型",
      children: "需要显式标注对象字面量的类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-untyped-obj-literals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605038"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在 ArkTS 中，需要显式标注对象字面量的类型，否则将导致编译时错误。在某些场景下，编译器可以根据上下文推断出字面量的类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在以下上下文中不支持使用字面量初始化类和接口："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "初始化具有any、Object或object类型的任何对象"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "初始化带有方法的类或接口"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "初始化包含自定义含参数的构造函数的类"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "初始化带readonly字段的类"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "例子1"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let o1 = { n: 42, s: 'foo' };\nlet o2: Object = { n: 42, s: 'foo' };\nlet o3: object = { n: 42, s: 'foo' };\n\nlet oo: Object[] = [{ n: 1, s: '1' }, { n: 2, s: '2' }];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C1 {\n  public n: number = 0;\n  public s: string = '';\n}\n\nlet o1: C1 = {n: 42, s: 'foo'};\nlet o2: C1 = {n: 42, s: 'foo'};\nlet o3: C1 = {n: 42, s: 'foo'};\n\nlet oo: C1[] = [{n: 1, s: '1'}, {n: 2, s: '2'}];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "例子2"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C2 {\n  s: string;\n  constructor(s: string) {\n    this.s = 's =' + s;\n  }\n}\nlet o4: C2 = { s: 'foo' };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C2 {\n  public s: string;\n  constructor(s: string) {\n    this.s = 's =' + s;\n  }\n}\nlet o4 = new C2('foo');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "例子3"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C3 {\n  readonly n: number = 0;\n  readonly s: string = '';\n}\nlet o5: C3 = { n: 42, s: 'foo' };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C3 {\n  public n: number = 0;\n  public s: string = '';\n}\nlet o5: C3 = {n: 42, s: 'foo'};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "例子4"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "abstract class A { }\nlet o6: A = {};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "abstract class A {}\nclass C extends A {}\nlet o6: C = {}; // 或 let o6: C = new C()。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "例子5"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C4 {\n  n: number = 0;\n  s: string = '';\n  f() {\n    console.info('Hello');\n  }\n}\nlet o7: C4 = { n: 42, s: 'foo', f: () => { } };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C4 {\n  public n: number = 0;\n  public s: string = '';\n  f() {\n    console.info('Hello');\n  }\n}\nlet o7 = new C4();\no7.n = 42;\no7.s = 'foo';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "例子6"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Point {\n  x: number = 0;\n  y: number = 0;\n}\n\nfunction getPoint(o: Point): Point {\n  return o;\n}\n\n// TS支持structural typing，可以推断p的类型为Point。\nlet p = { x: 5, y: 10 };\ngetPoint(p);\n\n// 可通过上下文推断出对象字面量的类型为Point。\ngetPoint({ x: 5, y: 10 });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Point {\n  public x: number = 0;\n  public y: number = 0;\n\n  // 在字面量初始化之前，使用constructor()创建一个有效对象。\n  // 由于没有为Point定义构造函数，编译器将自动添加一个默认构造函数。\n}\n\nfunction getPoint(o: Point): Point {\n  return o;\n}\n\n// 字面量初始化需要显式定义类型。\nlet p: Point = {x: 5, y: 10};\ngetPoint(p);\n\n// getPoint接受Point类型，字面量初始化生成一个Point的新实例。\ngetPoint({x: 5, y: 10});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "对象字面量不能用于类型声明",
      children: "对象字面量不能用于类型声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-obj-literals-as-types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605040"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持使用对象字面量声明类型，建议使用类或接口声明类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let o: { x: number, y: number } = {\n  x: 2,\n  y: 3\n}\n\ntype S = Set<{ x: number, y: number }>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class O {\n  public x: number = 0;\n  public y: number = 0;\n}\n\nlet o: O = {x: 2, y: 3};\n\ntype S = Set<O>;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数组字面量必须仅包含可推断类型的元素",
      children: "数组字面量必须仅包含可推断类型的元素"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-noninferrable-arr-literals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605043"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS将数组字面量的类型推断为所有元素的联合类型。如果其中任何一个元素的类型无法推导，则在编译时会发生错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let a = [{ n: 1, s: '1' }, { n: 2, s: '2' }];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C {\n  public n: number = 0\n  public s: string = ''\n}\n\nlet a1 = [{n: 1, s: '1'} as C, {n: 2, s: '2'} as C]; // a1的类型为“C[]”。\nlet a2: C[] = [{n: 1, s: '1'}, {n: 2, s: '2'}];    // a2的类型为“C[]”。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用箭头函数而非函数表达式",
      children: "使用箭头函数而非函数表达式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-func-expressions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605046"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持函数表达式，使用箭头函数（=>）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let f = function (s: string) {\n  console.info(s);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let f = (s: string) => {\n  console.info(s);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持使用类表达式",
      children: "不支持使用类表达式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-class-literals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605050"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持类表达式，必须显式声明一个类。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const Rectangle = class {\n  constructor(height: number, width: number) {\n    this.height = height;\n    this.width = width;\n  }\n\n  height;\n  width;\n}\n\nconst rectangle = new Rectangle(0.0, 0.0);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class TestRectangle {\n  constructor(testHeight: number, testWidth: number) {\n    this.testHeight = testHeight;\n    this.testWidth = testWidth;\n  }\n\n  public testHeight: number;\n  public testWidth: number;\n}\n\nconst rectangle = new TestRectangle(0.0, 0.0);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类不允许implements",
      children: "类不允许implements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-implements-only-iface"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605051"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS中只有接口可以被implements，类不允许被implements。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C {\n  foo() { }\n}\n\nclass C1 implements C {\n  foo() { }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface C {\n  foo(): void\n}\n\nclass C1 implements C {\n  foo() {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持修改对象的方法",
      children: "不支持修改对象的方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-method-reassignment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605052"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持修改对象的方法。在静态语言中，对象布局固定，类的所有实例共享同一个方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若需为特定对象添加方法，可封装函数或采用继承机制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C {\n  foo() {\n    console.info('foo');\n  }\n}\n\nfunction bar() {\n  console.info('bar');\n}\n\nlet c1 = new C();\nlet c2 = new C();\nc2.foo = bar;\n\nc1.foo(); // foo。\nc2.foo(); // bar。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C {\n  foo() {\n    console.info('foo');\n  }\n}\n\nclass Derived extends C {\n  foo() {\n    console.info('Extra');\n    super.foo();\n  }\n}\n\nfunction bar() {\n  console.info('bar');\n}\n\nlet c1 = new C();\nlet c2 = new C();\nc1.foo(); // foo。\nc2.foo(); // foo。\n\nlet c3 = new Derived();\nc3.foo(); // Extra foo。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型转换仅支持as-t语法",
      children: "类型转换仅支持as T语法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-as-casts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605053"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS中，as关键字是类型转换的唯一语法，错误的类型转换会导致编译时错误或者运行时抛出ClassCastException异常。ArkTS不支持使用<type>语法进行类型转换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要将primitive类型（如number或boolean）转换为引用类型时，请使用new表达式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class testShape { }\nclass testCircle extends testShape { x: number = 5 }\nclass testSquare extends testShape { y: string = 'a' }\n\nfunction createShape(): testShape {\n    return new testCircle();\n}\n\nlet c1 = <testCircle>createShape();\n\nlet c2 = createShape() as testCircle;\n\n// 如果转换错误，不会产生编译时或运行时报错。\nlet c3 = createShape() as testSquare;\nconsole.info(c3.y); // undefined。\n\n// 在TS中，由于`as`关键字不会在运行时生效，所以`instanceof`的左操作数不会在运行时被装箱成引用类型。\nlet e1 = (5.0 as Number) instanceof Number; // false。\n\n// 创建Number对象，获得预期结果：\nlet e2 = (new Number(5.0)) instanceof Number; // true。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class TestShape {}\nclass TestCircle extends TestShape { public x: number = 5 }\n\n\nfunction createShape(): TestShape {\n  return new TestCircle();\n}\n\n\nlet c1 = createShape() as TestCircle;\n\n// 创建Number对象，获得预期结果：\nlet e1 = (new Number(5.0)) instanceof Number; // true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持jsx表达式",
      children: "不支持JSX表达式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-jsx"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605054"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持使用JSX。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "一元运算符-和仅适用于数值类型",
      children: "一元运算符+、-和~仅适用于数值类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-polymorphic-unops"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605055"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS对一元运算符实施严格的类型检查，仅允许操作数值类型。与TypeScript不同，ArkTS禁止隐式的字符串转换到数值，开发者必须使用显式类型的转换方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let a = +5;    // 5（number类型）\nlet b = +'5';    // 5（number类型）\nlet c = -5;    // -5（number类型）\nlet d = -'5';    // -5（number类型）\nlet e = ~5;    // -6（number类型）\nlet f = ~'5';    // -6（number类型）\nlet g = +'string'; // NaN（number类型）\n\nfunction returnTen(): string {\n    return '-10';\n}\n\nfunction returnString(): string {\n    return 'string';\n}\n\nlet x = +returnTen();  // -10（number类型）\nlet y = +returnString(); // NaN\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let a = +5;    // 5（number类型）\nlet b = +'5';    // 编译时错误\nlet c = -5;    // -5（number类型）\nlet d = -'5';    // 编译时错误\nlet e = ~5;    // -6（number类型）\nlet f = ~'5';    // 编译时错误\nlet g = +'string'; // 编译时错误\n\nfunction returnTen(): string {\n  return '-10';\n}\n\nfunction returnString(): string {\n  return 'string';\n}\n\nlet x = +returnTen();  // 编译时错误\nlet y = +returnString(); // 编译时错误\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持delete运算符",
      children: "不支持delete运算符"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-delete"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605059"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS中，对象布局于编译时确定，运行时不可更改，因此删除属性的操作无意义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Point {\n  x?: number = 0.0;\n  y?: number = 0.0;\n}\n\nlet p = new Point();\ndelete p.y;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 可以声明一个可空类型并使用null作为缺省值。\nclass Point {\n  public x: number | null = 0;\n  public y: number | null = 0;\n}\n\nlet p = new Point();\np.y = null;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "仅允许在表达式中使用typeof运算符",
      children: "仅允许在表达式中使用typeof运算符"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-type-query"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605060"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS仅支持在表达式中使用typeof运算符，不允许使用typeof作为类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let n1 = 42;\nlet s1 = 'foo';\nconsole.info(typeof n1); // 'number'。\nconsole.info(typeof s1); // 'string'。\nlet n2: typeof n1;\nlet s2: typeof s1;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let n1 = 42;\nlet s1 = 'foo';\nconsole.info(typeof n1); // 'number'。\nconsole.info(typeof s1); // 'string'。\nlet n2: number;\nlet s2: string;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "部分支持instanceof运算符",
      children: "部分支持instanceof运算符"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-instanceof-ref-types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605065"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TypeScript中，instanceof运算符的左操作数类型必须为any类型、对象类型或类型参数，否则结果为false。ArkTS中，instanceof运算符的左操作数类型必须为引用类型（如对象、数组或函数），否则会发生编译时错误。此外，左操作数必须是对象实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let num: number = 42;\nlet result = num instanceof Number;\nconsole.info('result = ', result); // result = false。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let num: number = 42;\nlet result = num instanceof Number; // 编译报错\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持in运算符",
      children: "不支持in运算符"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-in"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605066"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS中，对象布局在编译时已知且运行时无法修改，因此不支持in运算符。需要检查类成员是否存在时，使用instanceof代替。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Person {\n  name: string = '';\n}\nlet p = new Person();\n\nlet b = 'name' in p; // true。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Person {\n  public name: string = '';\n}\nlet p = new Person();\n\nlet b = p instanceof Person; // true，且属性name一定存在。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持解构赋值",
      children: "不支持解构赋值"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-destruct-assignment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605069"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持解构赋值。可使用其他替代方法，例如，使用临时变量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let [one, two] = [1, 2]; // 此处需要分号。\n[one, two] = [two, one];\n\nlet head, tail;\n[head, ...tail] = [1, 2, 3, 4];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let arr: number[] = [1, 2];\nlet one = arr[0];\nlet two = arr[1];\n\nlet tmp = one;\none = two;\ntwo = tmp;\n\nlet data: Number[] = [1, 2, 3, 4];\nlet head = data[0];\nlet tail: Number[] = [];\nfor (let i = 1; i < data.length; ++i) {\n  tail.push(data[i]);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "逗号运算符仅用在for循环语句中",
      children: "逗号运算符,仅用在for循环语句中"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-comma-outside-loops"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605071"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS中，逗号运算符仅适用于for循环语句，用于明确执行顺序。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(663418)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "这与声明变量和函数参数传递时使用的逗号分隔符不同。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (let i = 0, j = 0; i < 10; ++i, j += 2) {\n  // ...\n}\n\nlet x = 0;\nx = (++x, x++); // 1。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (let i = 0, j = 0; i < 10; ++i, j += 2) {\n  // ...\n}\n\n// 通过语句表示执行顺序，而非逗号运算符。\nlet x = 0;\n++x;\nx = x++;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持解构变量声明",
      children: "不支持解构变量声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-destruct-decls"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605074"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持解构变量声明。解构变量声明是一个依赖于结构兼容性的动态特性，且解构声明中的名称必须与被解构对象中的属性名称一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Point {\n  x: number = 0.0;\n  y: number = 0.0;\n}\n\nfunction returnZeroPoint(): Point {\n  return new Point();\n}\n\nlet { x, y } = returnZeroPoint();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Point {\n  public x: number = 0.0;\n  public y: number = 0.0;\n}\n\nfunction returnZeroPoint(): Point {\n  return new Point();\n}\n\n// 创建一个局部变量来处理每个字段。\nlet zp = returnZeroPoint();\nlet x = zp.x;\nlet y = zp.y;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持在catch语句标注类型",
      children: "不支持在catch语句标注类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-types-in-catch"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605079"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TypeScript的catch语句中，只能标注any或unknown类型。ArkTS不支持这些类型，应省略类型标注。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n  // ...\n} catch (a: unknown) {\n  // 处理异常。\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n  // ...\n} catch (a) {\n  // 处理异常。\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持for--in",
      children: "不支持for .. in"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-for-in"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605080"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS中，对象布局在编译时确定且运行时不可修改，因此不支持使用for .. in迭代对象属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let a: string[] = ['1.0', '2.0', '3.0'];\nfor (let i in a) {\n  console.info(a[i]);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let a: string[] = ['1.0', '2.0', '3.0'];\nfor (let i = 0; i < a.length; ++i) {\n  console.info(a[i]);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持映射类型",
      children: "不支持映射类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-mapped-types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605083"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持映射类型，使用其他语法表示相同语义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "type OptionsFlags<Type> = {\n  [Property in keyof Type]: boolean\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C {\n  public n: number = 0;\n  public s: string = '';\n}\n\nclass CFlags {\n  public n: boolean = false;\n  public s: boolean = false;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持with语句",
      children: "不支持with语句"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-with"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605084"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持with语句，使用其他语法来表示相同的语义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "with (Math) { // 编译时错误, 但是仍能生成JavaScript代码\n  let r: number = 42;\n  let area: number = PI * r * r;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let r: number = 42;\nlet area: number = Math.PI * r * r;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "限制throw语句中表达式的类型",
      children: "限制throw语句中表达式的类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-limited-throw"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605087"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS只支持抛出Error类或其派生类的实例。禁止抛出其他类型的数据，例如number或string。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "throw 4;\nthrow '';\nthrow new Error();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "throw new Error();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "限制省略函数返回类型标注",
      children: "限制省略函数返回类型标注"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-implicit-return-types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605090"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS在部分场景中支持对函数返回类型进行推断。当return语句中的表达式是对某个函数或方法进行调用，且该函数或方法的返回类型没有被显著标注时，会出现编译时错误。在这种情况下，请标注函数返回类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 只有在开启noImplicitAny选项时会产生编译时错误。\nfunction f(x: number) {\n  if (x <= 0) {\n    return x;\n  }\n  return g(x);\n}\n\n// 只有在开启noImplicitAny选项时会产生编译时错误。\nfunction g(x: number) {\n  return f(x - 1);\n}\n\nfunction doOperation(x: number, y: number) {\n  return x + y;\n}\n\nf(10);\ndoOperation(2, 3);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 需标注返回类型：\nfunction f(x: number): number {\n  if (x <= 0) {\n    return x;\n  }\n  return g(x);\n}\n\n// 可以省略返回类型，返回类型可以从f的类型标注推导得到。\nfunction g(x: number): number {\n  return f(x - 1);\n}\n\n// 可以省略返回类型。\nfunction doOperation(x: number, y: number) {\n  return x + y;\n}\n\nf(10);\ndoOperation(2, 3);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持参数解构的函数声明",
      children: "不支持参数解构的函数声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-destruct-params"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605091"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS要求实参必须直接传递给函数，且必须指定到形参。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function drawText({ text = '', location: [x, y] = [0, 0], bold = false }) {\n  text;\n  x;\n  y;\n  bold;\n}\n\ndrawText({ text: 'Hello, world!', location: [100, 50], bold: true });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function drawText(text: String, location: number[], bold: boolean) {\n  let x = location[0];\n  let y = location[1];\n  text;\n  x;\n  y;\n  bold;\n}\n\nfunction main() {\n  drawText('Hello, world!', [100, 50], true);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持在函数内声明函数",
      children: "不支持在函数内声明函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-nested-funcs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605092"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持在函数内声明函数，改用lambda函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function addNum(a: number, b: number): void {\n\n  // 函数内声明函数。\n  function logToConsole(message: string): void {\n    console.info(message);\n  }\n\n  let result = a + b;\n\n  // 调用函数。\n  logToConsole('result is ' + result);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function addNum(a: number, b: number): void {\n  // 使用lambda函数代替声明函数。\n  let logToConsole: (message: string) => void = (message: string): void => {\n    console.info(message);\n  }\n\n  let result = a + b;\n\n  logToConsole('result is ' + result);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持在函数和类的静态方法中使用this",
      children: "不支持在函数和类的静态方法中使用this"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-standalone-this"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605093"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS中this只能在类的实例方法中使用，不支持在函数和类的静态方法中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function foo(i: string) {\n  this.count = i; // 只有在开启noImplicitThis选项时会产生编译时错误。\n}\n\nclass A {\n  count: string = 'a';\n  m = foo;\n}\n\nlet a = new A();\nconsole.info(a.count); // 打印a。\na.m('b');\nconsole.info(a.count); // 打印b。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class A {\n  public count: string = 'a'\n  m(i: string): void {\n    this.count = i;\n  }\n}\n\nfunction main(): void {\n  let a = new A();\n  console.info(a.count);  // 打印a。\n  a.m('b');\n  console.info(a.count);  // 打印b。\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持生成器函数",
      children: "不支持生成器函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-generators"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605094"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前ArkTS不支持生成器函数，可使用async或await机制处理并行任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function* counter(start: number, end: number) {\n  for (let i = start; i <= end; i++) {\n    yield i;\n  }\n}\n\nfor (let num of counter(1, 5)) {\n  console.info(num.toString());\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async function complexNumberProcessing(num: number): Promise<number> {\n  // ...\n  return num;\n}\n\nasync function foo() {\n  for (let i = 1; i <= 5; i++) {\n    await complexNumberProcessing(i);\n  }\n}\n\nfoo();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用instanceof和as进行类型保护",
      children: "使用instanceof和as进行类型保护"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-is"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605096"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS中，不支持is关键字，必须使用instanceof运算符来替代。在使用instanceof之前，必须先使用as运算符将对象转换为所需类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Foo {\n  foo: string = ''\n  common: string = ''\n}\n\nclass Bar {\n  bar: string = ''\n  common: string = ''\n}\n\nfunction isFoo(arg: any): arg is Foo {\n  return arg.foo !== undefined;\n}\n\nfunction doStuff(arg: Foo | Bar) {\n  if (isFoo(arg)) {\n    console.info(arg.foo);  // OK\n    console.info(arg.bar);  // 编译时错误\n  } else {\n    console.info(arg.foo);  // 编译时错误\n    console.info(arg.bar);  // OK\n  }\n}\n\ndoStuff({ foo: '123', common: '123' });\ndoStuff({ bar: '123', common: '123' });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Foo {\n  foo: string = ''\n  common: string = ''\n}\n\nclass Bar {\n  bar: string = ''\n  common: string = ''\n}\n\nfunction isFoo(arg: Object): boolean {\n  return arg instanceof Foo;\n}\n\nfunction doStuff(arg: Object): void {\n  if (isFoo(arg)) {\n    let fooArg = arg as Foo;\n    console.info(fooArg.foo);   // OK\n    console.info(arg.bar);    // 编译时错误\n  } else {\n    let barArg = arg as Bar;\n    console.info(arg.foo);    // 编译时错误\n    console.info(barArg.bar);   // OK\n  }\n}\n\nfunction main(): void {\n  doStuff(new Foo());\n  doStuff(new Bar());\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "部分支持展开运算符",
      children: "部分支持展开运算符"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-spread"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605099"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS仅支持使用展开运算符展开数组、Array的子类和TypedArray（例如Int32Array）。仅支持使用在以下场景中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "传递给剩余参数时；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "复制一个数组到数组字面量。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function foo(x: number, y: number, z: number) {\n  // ...\n}\n\nlet args: [number, number, number] = [0, 1, 2];\nfoo(...args);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function logNumbers(x: number, y: number, z: number) {\n  // ...\n}\n\nlet numbers: number[] = [1, 2, 3];\nlogNumbers(numbers[0], numbers[1], numbers[2]);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let point2d = { x: 1, y: 2 };\nlet point3d = { ...point2d, z: 3 };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Point2D {\n  public x: number = 0;\n  public y: number = 0;\n}\n\nclass Point3D {\n  public x: number = 0;\n  public y: number = 0;\n  public z: number = 0\n  constructor(p2d: Point2D, z: number) {\n    this.x = p2d.x;\n    this.y = p2d.y;\n    this.z = z;\n  }\n}\n\nlet p3d = new Point3D({ x: 1, y: 2 } as Point2D, 3);\n\nclass DerivedFromArray extends Uint16Array {};\n\nlet arr1 = [1, 2, 3];\nlet arr2 = new Uint16Array([4, 5, 6]);\nlet arr3 = new DerivedFromArray([7, 8, 9]);\nlet arr4 = [...arr1, 10, ...arr2, 11, ...arr3];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口不能继承具有相同方法的两个接口",
      children: "接口不能继承具有相同方法的两个接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-extend-same-prop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：106050102"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在TypeScript中，如果一个接口继承了两个具有相同方法的接口，则必须使用联合类型声明该方法的返回值类型。在ArkTS中，由于接口不能包含两个无法区分的方法（如参数列表相同但返回类型不同），因此不能继承具有相同方法的两个接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface Mover {\n  getStatus(): { speed: number }\n}\ninterface Shaker {\n  getStatus(): { frequency: number }\n}\n\ninterface MoverShaker extends Mover, Shaker {\n  getStatus(): {\n    speed: number\n    frequency: number\n  }\n}\n\nclass C implements MoverShaker {\n  private speed: number = 0\n  private frequency: number = 0\n\n  getStatus() {\n    return { speed: this.speed, frequency: this.frequency };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class MoveStatus {\n  public speed: number;\n  constructor() {\n    this.speed = 0;\n  }\n}\ninterface Mover {\n  getMoveStatus(): MoveStatus\n}\n\nclass ShakeStatus {\n  public frequency: number;\n  constructor() {\n    this.frequency = 0;\n  }\n}\ninterface Shaker {\n  getShakeStatus(): ShakeStatus\n}\n\nclass MoveAndShakeStatus {\n  public speed: number;\n  public frequency: number;\n  constructor() {\n    this.speed = 0;\n    this.frequency = 0;\n  }\n}\n\nclass C implements Mover, Shaker {\n  private moveStatus: MoveStatus;\n  private shakeStatus: ShakeStatus;\n\n  constructor() {\n    this.moveStatus = new MoveStatus();\n    this.shakeStatus = new ShakeStatus();\n  }\n\n  public getMoveStatus(): MoveStatus {\n    return this.moveStatus;\n  }\n\n  public getShakeStatus(): ShakeStatus {\n    return this.shakeStatus;\n  }\n\n  public getStatus(): MoveAndShakeStatus {\n    return {\n      speed: this.moveStatus.speed,\n      frequency: this.shakeStatus.frequency\n    };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持声明合并",
      children: "不支持声明合并"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-decl-merging"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605103"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持类和接口的声明合并。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface Document {\n  createElement(tagName: any): number;\n}\n\ninterface Document {\n  createElement(tagName: string): boolean;\n}\n\ninterface Document {\n  createElement(tagName: number): number;\n  createElement(tagName: boolean): boolean;\n  createElement(tagName: string, value: number): string;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface Document {\n  createElement(tagName: number): number;\n  createElement(tagName: boolean): boolean;\n  createElement(tagName: string, value: number): number;\n  createElement(tagName: string): string;\n  createElement(tagName: Object): object;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口不能继承类",
      children: "接口不能继承类"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-extends-only-class"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605104"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS中，接口不能继承类，只能继承其他接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Control {\n  state: number = 0;\n}\n\ninterface SelectableControl extends Control {\n  select(): void\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface Control {\n  state: number\n}\n\ninterface SelectableControl extends Control {\n  select(): void\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持构造函数类型",
      children: "不支持构造函数类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-ctor-signatures-funcs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605106"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持构造函数类型，改用lambda函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Person {\n  constructor(\n    name: string,\n    age: number\n  ) { }\n}\ntype PersonCtor = new (name: string, age: number) => Person;\n\nfunction createPerson(Ctor: PersonCtor, name: string, age: number): Person {\n  return new Ctor(name, age);\n}\n\nconst person = createPerson(Person, 'John', 30);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Person {\n  constructor(\n    name: string,\n    age: number\n  ) {}\n}\ntype PersonCtor = (n: string, a: number) => Person\n\nfunction createPerson(ctor: PersonCtor, n: string, a: number): Person {\n  return ctor(n, a);\n}\n\nlet impersonate: PersonCtor = (n: string, a: number): Person => {\n  return new Person(n, a);\n}\n\nconst person = createPerson(impersonate, 'John', 30);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "只能使用类型相同的编译时表达式初始化枚举成员",
      children: "只能使用类型相同的编译时表达式初始化枚举成员"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-enum-mixed-types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605111"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持使用运行期间计算的表达式初始化枚举成员。枚举中所有显式初始化的成员必须具有相同类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum E1 {\n  A = 0xa,\n  B = 0xb,\n  C = Math.random(),\n  D = 0xd,\n  E // 推断出0xe。\n}\n\nenum E2 {\n  A = 0xa,\n  B = '0xb',\n  C = 0xc,\n  D = '0xd'\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum E1 {\n  A = 0xa,\n  B = 0xb,\n  C = 0xc,\n  D = 0xd,\n  E // 推断出0xe。\n}\n\nenum E2 {\n  A = '0xa',\n  B = '0xb',\n  C = '0xc',\n  D = '0xd'\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持enum声明合并",
      children: "不支持enum声明合并"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-enum-merging"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605113"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持enum声明合并。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ColorSet {\n  RED,\n  GREEN\n}\nenum ColorSet {\n  YELLOW = 2\n}\nenum ColorSet {\n  BLACK = 3,\n  BLUE\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ColorSet {\n  RED,\n  GREEN,\n  YELLOW,\n  BLACK,\n  BLUE\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "命名空间不能被用作对象",
      children: "命名空间不能被用作对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-ns-as-obj"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605114"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持将命名空间用作对象，可以使用类或模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "namespace MyNamespace {\n  export let x: number;\n}\n\nlet m = MyNamespace;\nm.x = 2;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "namespace MyNamespace {\n  export let x: number;\n}\n\nMyNamespace.x = 2;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持命名空间中的非声明语句",
      children: "不支持命名空间中的非声明语句"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-ns-statements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605116"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS中，命名空间用于定义标识符的可见范围，仅在编译时有效。因此，命名空间中不支持非声明语句。可以将非声明语句写在函数中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "namespace A {\n  export let x: number;\n  x = 1;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "namespace A {\n  export let x: number\n\n  export function init() {\n    x = 1;\n  }\n}\n\n// 调用初始化函数来执行。\nA.init();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持require和import赋值表达式",
      children: "不支持require和import赋值表达式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-require"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605121"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持通过require导入和import赋值表达式，改用import。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import m = require('mod')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import * as m from 'mod'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持export--语法",
      children: "不支持export = ...语法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-export-assignment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605126"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持export = ...语法，改用常规的export或import。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// module1\nexport = Point\n\nclass Point {\n  constructor(x: number, y: number) {}\n  static origin = new Point(0, 0)\n}\n\n// module2\nimport Pt = require('module1')\n\nlet p = Pt.Point.origin;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// module1\nexport class Point {\n  constructor(x: number, y: number) {}\n  static origin = new Point(0, 0)\n}\n\n// module2\nimport * as Pt from 'module1'\n\nlet p = Pt.Point.origin\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持ambient-module声明",
      children: "不支持ambient module声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-ambient-decls"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605128"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于ArkTS本身有与JavaScript交互的机制，ArkTS不支持ambient module声明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "declare module 'someModule' {\n  export function normalize(s: string): string;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 从原始模块中导入需要的内容\nimport { normalize } from 'someModule'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持在模块名中使用通配符",
      children: "不支持在模块名中使用通配符"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-module-wildcards"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605129"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS中，导入是编译时而非运行时行为，不支持在模块名中使用通配符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 声明\ndeclare module '*!text' {\n  const content: string\n  export default content\n}\n\n// 使用代码\nimport fileContent from 'some.txt!text'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 声明\ndeclare namespace N {\n  function foo(x: number): number\n}\n\n// 使用代码\nimport * as m from 'module'\nconsole.info('N.foo called: ' + N.foo(42));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持通用模块定义umd",
      children: "不支持通用模块定义(UMD)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-umd"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605130"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持通用模块定义（UMD）。因为在ArkTS中没有“脚本”的概念（相对于“模块”）。此外，在ArkTS中，导入是编译时而非运行时特性。改用export和import语法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// math-lib.d.ts\nexport const isPrime(x: number): boolean\nexport as namespace mathLib\n\n// 脚本中\nmathLib.isPrime(2)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// math-lib.d.ts\nnamespace mathLib {\n  export isPrime(x: number): boolean\n}\n\n// 程序中\nimport { mathLib } from 'math-lib'\nmathLib.isPrime(2)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持newtarget",
      children: "不支持new.target"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-new-target"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605132"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS没有原型的概念，因此不支持new.target。此特性不符合静态类型的原则。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持确定赋值断言",
      children: "不支持确定赋值断言"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-definite-assignment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：警告"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605134"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持确定赋值断言，例如：let v!: T。改为在声明变量的同时为变量赋值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let x!: number // 提示：在使用前将x初始化\n\ninitialize();\n\nfunction initialize() {\n  x = 10;\n}\n\nconsole.info('x = ' + x);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function initialize(): number {\n  return 10;\n}\n\nlet x: number = initialize();\n\nconsole.info('x = ' + x);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持在原型上赋值",
      children: "不支持在原型上赋值"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-prototype-assignment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605136"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS没有原型的概念，因此不支持在原型上赋值。此特性不符合静态类型的原则。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let C = function (p) {\n  this.p = p; // 只有在开启noImplicitThis选项时会产生编译时错误。\n}\n\nC.prototype = {\n  m() {\n    console.info(this.p);\n  }\n}\n\nC.prototype.q = function (r: string) {\n  return this.p == r;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C {\n  public p: string = '';\n  m() {\n    console.info(this.p);\n  }\n  q(r: string) {\n    return this.p === r;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持globalthis",
      children: "不支持globalThis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-globalthis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：警告"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605137"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于ArkTS不支持动态更改对象的布局，因此不支持全局作用域和globalThis。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 全局文件中。\nvar abc = 100;\n\n// 从上面引用'abc'。\nlet x = globalThis.abc;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// file1\nexport let abc: number = 100;\n\n// file2\nimport * as M from 'file1'\n\nlet x = M.abc;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持一些utility类型",
      children: "不支持一些utility类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-utility-types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605138"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS仅支持Partial、Required、Readonly和Record，不支持TypeScript中其他的Utility Types。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于Partial<T>类型，泛型参数T必须为类或者接口类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于Record类型的对象，通过索引访问到的值的类型是包含undefined的联合类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持对函数声明属性",
      children: "不支持对函数声明属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-func-props"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605139"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于ArkTS不支持动态改变函数对象布局，因此，不支持对函数声明属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持functionapply和functioncall",
      children: "不支持Function.apply和Function.call"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-func-apply-call"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605152"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不允许使用标准库函数Function.apply和Function.call，因为这些函数用于显式设置被调用函数的this参数。在ArkTS中，this的语义仅限于传统的OOP风格，函数体中禁止使用this。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持functionbind",
      children: "不支持Function.bind"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-func-bind"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：警告"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605140"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS禁用标准库函数Function.bind。标准库使用这些函数显式设置被调用函数的this参数。在ArkTS中，this仅限于传统OOP风格，函数体中禁用使用this。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持as-const断言",
      children: "不支持as const断言"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-as-const"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605142"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持as const断言和字面量类型。在标准TypeScript中，as const用于标注字面量类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 'hello'类型\nlet x = 'hello' as const;\n\n// 'readonly [10, 20]'类型\nlet y = [10, 20] as const;\n\n// '{ readonly text: 'hello' }'类型\nlet z = { text: 'hello' } as const;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 'string'类型。\nlet x: string = 'hello';\n\n// 'number[]'类型。\nlet y: number[] = [10, 20];\n\nclass Label {\n  public text: string = '';\n}\n\n// 'Label'类型。\nlet z: Label = {\n  public text: 'hello',\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持导入断言",
      children: "不支持导入断言"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-import-assertions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605143"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不支持导入断言。因为导入是编译时特性，运行时检查导入API是否正确没有意义。改用常规的import语法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { obj } from 'something.json' assert { type: 'json' }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 编译时将检查导入T的正确性\nimport { something } from 'module'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "限制使用标准库",
      children: "限制使用标准库"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-limited-stdlib"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605144"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS不允许使用TypeScript或JavaScript标准库中的某些接口。大部分接口与动态特性有关。ArkTS中禁止使用以下接口："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "全局对象的属性和方法：eval"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Object：__proto__、__defineGetter__、__defineSetter__、"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "__lookupGetter__、__lookupSetter__、assign、create、"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "defineProperties、defineProperty、freeze、"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fromEntries、getOwnPropertyDescriptor、getOwnPropertyDescriptors、"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getOwnPropertySymbols、getPrototypeOf、"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hasOwnProperty、is、isExtensible、isFrozen、"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isPrototypeOf、isSealed、preventExtensions、"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "propertyIsEnumerable、seal、setPrototypeOf"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reflect：apply、construct、defineProperty、deleteProperty、"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getOwnPropertyDescriptor、getPrototypeOf、"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isExtensible、preventExtensions、"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setPrototypeOf"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Proxy：handler.apply()、handler.construct()、"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "handler.defineProperty()、handler.deleteProperty()、handler.get()、"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "handler.getOwnPropertyDescriptor()、handler.getPrototypeOf()、"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "handler.has()、handler.isExtensible()、handler.ownKeys()、"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "handler.preventExtensions()、handler.set()、handler.setPrototypeOf()"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "强制进行严格类型检查",
      children: "强制进行严格类型检查"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605999"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在编译阶段，会进行TypeScript严格模式的类型检查，包括："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "noImplicitReturns,"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "strictFunctionTypes,"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "strictNullChecks,"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "strictPropertyInitialization。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 只有在开启noImplicitReturns选项时会产生编译时错误。\nfunction foo(s: string): string {\n  if (s != '') {\n    console.info(s);\n    return s;\n  } else {\n    console.info(s);\n  }\n}\n\nlet n: number = null; // 只有在开启strictNullChecks选项时会产生编译时错误。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function foo(s: string): string {\n  console.info(s);\n  return s;\n}\n\nlet n1: number | null = null;\nlet n2: number = 0;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在定义类时，如果无法在声明时或者构造函数中初始化某实例属性，那么可以使用确定赋值断言符!来消除strictPropertyInitialization的报错。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用确定赋值断言符会增加代码错误的风险。开发者必须确保实例属性在使用前已赋值，以避免运行时异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用确定赋值断言符会增加运行时开销，应尽量避免使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用确定赋值断言符将产生warning: arkts-no-definite-assignment。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C {\n  name: string  // 只有在开启strictPropertyInitialization选项时会产生编译时错误。\n  age: number   // 只有在开启strictPropertyInitialization选项时会产生编译时错误。\n}\n\nlet c = new C();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C {\n  name: string = ''\n  age!: number      // warning: arkts-no-definite-assignment\n\n  initAge(age: number) {\n    this.age = age;\n  }\n}\n\nlet c = new C();\nc.initAge(10);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不允许通过注释关闭类型检查",
      children: "不允许通过注释关闭类型检查"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-strict-typing-required"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605146"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS中，类型检查不是可选项。不允许通过注释关闭类型检查，不支持使用@ts-ignore和@ts-nocheck。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// @ts-nocheck\n// ...\n// 关闭了类型检查后的代码\n// ...\n\nlet s1: string = null; // 没有报错。\n\n// @ts-ignore\nlet s2: string = null; // 没有报错。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let s1: string | null = null; // 没有报错，合适的类型\nlet s2: string = null; // 编译时报错\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "允许ets文件importetstsjs文件源码-不允许tsjs文件importets文件源码",
      children: "允许.ets文件import.ets/.ts/.js文件源码, 不允许.ts/.js文件import.ets文件源码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-ts-deps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605147"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: ".ets文件可以import.ets/.ts/.js文件源码，但是.ts/.js文件不允许import.ets文件源码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// app.ets\nexport class C {\n  // ...\n}\n\n// lib.ts\nimport { C } from 'app'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// lib1.ets\nexport class C {\n  // ...\n}\n\n// lib2.ets\nimport { C } from 'lib1'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "class不能被用作对象",
      children: "class不能被用作对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-classes-as-obj"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：警告"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605149"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS中，class声明的是一个新类型，不是值。因此，不支持将class用作对象，例如将其赋值给一个对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持在import语句前使用其他语句",
      children: "不支持在import语句前使用其他语句"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-no-misplaced-imports"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605150"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS中，除动态 import 语句外，所有 import 语句都应置于其他语句之前。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C {\n  s: string = ''\n  n: number = 0\n}\n\nimport foo from 'module1'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import foo from 'module1'\n\nclass C {\n  s: string = ''\n  n: number = 0\n}\n\nimport('module2').then(() => {}).catch(() => {})  // 动态import\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "限制使用esobject类型",
      children: "限制使用ESObject类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****规则：****arkts-limited-esobj"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "级别：警告"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码：10605151"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了防止动态对象（来自.ts/.js文件）在静态代码（.ets文件）中的滥用，ESObject类型在ArkTS中的使用是受限的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在API版本18以前，唯一允许使用ESObject类型的场景是局部变量的声明。ESObject类型变量只能被跨语言调用的对象赋值，例如：ESObject、any、unknown、匿名类型等。禁止使用在.ets文件中定义的静态类型值初始化ESObject类型变量。ESObject类型变量只能用于跨语言调用的函数或赋值给另一个ESObject类型变量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API版本18开始，ESObject类型不再支持赋值对象字面量类型。ESObject类型支持在动态导入场景中作为类型标注，以及用于属性访问（点操作符和[]访问）、调用表达式和new表达式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// lib.d.ts\ndeclare function foo(): any;\ndeclare function bar(a: any): number;\n\n// main.ets\nlet e0: ESObject = foo(); // API18以前，编译时错误：ESObject类型只能用于局部变量；API18以后，OK，显式标注ESObject类型\n\nfunction f() {\n  let e1 = foo();        // 编译时错误：e1的类型是any\n  let e2: ESObject = 1;  // API18以前，编译时错误：不能用非动态值初始化ESObject类型变量；API18以后，OK，支持赋值数字类型\n  let e3: ESObject = {}; // API18以前，编译时错误：不能用非动态值初始化ESObject类型变量；API18以后，编译时错误：ESObject不支持赋值对象字面量类型\n  let e4: ESObject = []; // API18以前，编译时错误：不能用非动态值初始化ESObject类型变量；API18以后，OK，支持赋值数组类型\n  let e5: ESObject = ''; // API18以前，编译时错误：不能用非动态值初始化ESObject类型变量；API18以后，OK，支持赋值字符串类型\n  e5['prop'];            // API18以前，编译时错误：不能访问ESObject类型变量的属性；API18以后，OK，支持[]访问\n  e5[1];                 // API18以前，编译时错误：不能访问ESObject类型变量的属性；API18以后，OK，支持[]访问\n  e5.prop;               // API18以前，编译时错误：不能访问ESObject类型变量的属性；API18以后，OK，支持点操作符访问\n\n  let e6: ESObject = foo(); // OK，显式标注ESObject类型\n  let e7: ESObject = e6;    // OK，使用ESObject类型赋值\n  bar(e7);                  // OK，ESObject类型变量传给跨语言调用的函数\n}\n"
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
663418(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

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