"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["813150"], {
200389(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_learning_arkts_typescript_to_arkts_migration_arkts_migration_background_arkts_migration_background_md_899_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-learning-arkts-typescript-to-arkts-migration-arkts-migration-background-arkts-migration-background-md-899.json
var site_docs_learning_arkts_typescript_to_arkts_migration_arkts_migration_background_arkts_migration_background_md_899_namespaceObject = JSON.parse('{"id":"learning-arkts/typescript-to-arkts-migration/arkts-migration-background/arkts-migration-background","title":"ArkTS语法适配背景","description":"ArkTS在保留TypeScript（简称TS）基本语法风格的基础上，进一步通过规范强化了静态检查和分析，使得开发者在程序开发阶段能够检测出更多错误，提升程序的稳定性和运行性能。本文将详细解释为什么建议将TS代码适配为ArkTS代码。","source":"@site/docs/learning-arkts/typescript-to-arkts-migration/arkts-migration-background/arkts-migration-background.md","sourceDirName":"learning-arkts/typescript-to-arkts-migration/arkts-migration-background","slug":"/learning-arkts/typescript-to-arkts-migration/arkts-migration-background/","permalink":"/harmonyos-docs-site/learning-arkts/typescript-to-arkts-migration/arkts-migration-background/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"ArkTS语法适配背景","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-migration-background","kit":"getting-started","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkTS编程规范","permalink":"/harmonyos-docs-site/learning-arkts/arkts-coding-style-guide/"},"next":{"title":"从TypeScript到ArkTS的适配规则","permalink":"/harmonyos-docs-site/learning-arkts/typescript-to-arkts-migration/typescript-to-arkts-migration-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/learning-arkts/typescript-to-arkts-migration/arkts-migration-background/arkts-migration-background.md


const frontMatter = {
	title: 'ArkTS语法适配背景',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-migration-background',
	kit: 'getting-started',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkTS语法适配背景';

const assets = {

};



const toc = [{
  "value": "程序稳定性",
  "id": "程序稳定性",
  "level": 2
}, {
  "value": "程序性能",
  "id": "程序性能",
  "level": 2
}, {
  "value": ".ets代码兼容性",
  "id": "ets代码兼容性",
  "level": 2
}, {
  "value": "支持与TS/JS的交互",
  "id": "支持与tsjs的交互",
  "level": 2
}, {
  "value": "方舟运行时兼容TS/JS",
  "id": "方舟运行时兼容tsjs",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "arkts语法适配背景",
        children: "ArkTS语法适配背景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS在保留TypeScript（简称TS）基本语法风格的基础上，进一步通过规范强化了静态检查和分析，使得开发者在程序开发阶段能够检测出更多错误，提升程序的稳定性和运行性能。本文将详细解释为什么建议将TS代码适配为ArkTS代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "程序稳定性",
      children: "程序稳定性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动态类型语言如JavaScript（简称JS）虽能提升开发效率，但也容易在运行时引发非预期错误。例如未检查的undefined值可能导致程序崩溃，这类问题若能在开发阶段发现将显著提升稳定性。TypeScript（TS）通过类型标注机制，使编译器能在编译时检测出多数类型错误，但其非强制类型系统仍存在局限。例如未标注类型的变量会阻碍完整编译检查。ArkTS通过强制静态类型系统克服这一缺陷，实施更严格的类型验证机制，从而最大限度减少运行时错误的发生。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面这个例子展示了ArkTS通过强制严格的类型检查来提高代码稳定性和正确性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "显式初始化类的属性"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS要求类的所有属性在声明时或者在构造函数中显式地初始化，这和TS中的strictPropertyInitialization检查一致。以下的代码片段是非严格模式下的TS代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Person {\n  name: string; // undefined\n  \n  setName(n: string): void {\n    this.name = n;\n  }\n  \n  getName(): string {\n  // 开发者使用\"string\"作为返回类型，这隐藏了name可能为\"undefined\"的事实。\n  // 更合适的做法是将返回类型标注为\"string | undefined\"，以告诉开发者这个API所有可能的返回值的类型。\n    return this.name;\n  }\n}\n\nlet buddy = new Person()\n// 假设代码中没有对name的赋值，例如没有调用\"buddy.setName('John')\"\nbuddy.getName().length; // 运行时异常：name is undefined\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS要求属性显式初始化，代码应如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Person {\n  name: string = ''; // undefined\n\n  setName(n: string): void {\n    this.name = n;\n  }\n\n  // 类型为\"string\"，不可能为\"null\"或者\"undefined\"。\n  getName(): string {\n    return this.name;\n  }\n}\n// ...\n  let buddy = new Person()\n  // 假设代码中没有对name的赋值，例如没有调用\"buddy.setName('John')\"。\n  let len = buddy.getName().length; // 0, 没有运行时异常。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果name可以是undefined，其类型应在代码中精确标注。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Person1 {\n  name?: string; // 可能为undefined。\n\n  setName(n: string): void {\n    this.name = n;\n  }\n\n  getName(): string | undefined { // 返回类型匹配name的类型。\n    return this.name;\n  }\n}\n// ...\n  let buddy = new Person1()\n  // 假设代码中没有对name的赋值，例如没有调用\"buddy.setName('John')\"。\n\n  let len = buddy.getName()?.length; // 编译成功，没有运行时错误。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "程序性能",
      children: "程序性能"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了确保程序的正确性，动态类型语言需要在运行时检查对象的类型。例如JavaScript不允许访问undefined的属性。检查一个值是否为undefined的唯一方法是在运行时进行类型检查。所有JavaScript引擎都会执行以下操作：如果一个值不是undefined，则可以访问其属性；如果尝试访问的值是undefined，则会抛出异常。虽然现代JavaScript引擎可以优化这类操作，但仍然存在一些无法消除的运行时检查，这会导致程序变慢。由于TypeScript代码总是先被编译成JavaScript代码，因此在TypeScript中也会遇到相同的问题。ArkTS解决了这个问题。通过启用静态类型检查，ArkTS代码将被编译成方舟字节码文件，而不是JavaScript代码。因此，ArkTS运行速度更快，更容易被进一步优化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Null Safety"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function notify(who: string, what: string) {\n  console.info(`Dear ${who}, a message for you: ${what}`);\n}\n\n// ...\n  notify('Jack', 'You look great today');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在大多数情况下，函数notify会接受两个string类型的变量作为输入，产生一个新的字符串。但是，如果将一些特殊值作为输入，例如notify(null, undefined)，情况会怎么样呢？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "程序仍会正常运行，输出预期值：Dear null, a message for you: undefined。虽然系统表现一切正常，但值得注意的是，为了保障该场景下程序的正确性，引擎在运行时会持续进行类型检查，其实现机制类似于以下伪代码所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function __internal_tostring(s: any): string {\n  if (typeof s === 'string')\n    return s;\n  if (s === undefined)\n    return 'undefined';\n  if (s === null)\n    return 'null';\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "试想一下，如果notify函数并非只是简单的日志打印，而是某些高负载场景下关键逻辑的一部分，那么在运行时频繁执行类似__internal_tostring的类型检查操作，势必会带来显著的性能开销。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果可以保证在运行时，只有string类型的值（不会是其他类型的值，例如null或者undefined）可以被传入函数notify呢？在这种情况下，因为可以确保没有其他边界情况，像__internal_tostring的检查就是多余的了。在该场景下，这种机制被称为“null-safety”（空安全），其核心目的是确保null不能作为合法的字符串类型值。如果ArkTS支持这一特性，那么任何类型不匹配的代码都将在编译阶段被拦截，无法编译通过。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function notify(who: string, what: string) {\n  console.info(`Dear ${who}, a message for you: ${what}`);\n}\n\nnotify('Jack', 'You look great today');\nnotify(null, undefined); // 编译时错误\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TS通过启用编译选项strictNullChecks实现此特性。虽然TS被编译成JS，但因为JS没有这个特性，所以严格null检查仅在编译时起效。从程序稳定性和性能的角度考虑，ArkTS将“null-safety”视为一个重要的特性。因此，ArkTS强制进行严格null检查，在ArkTS中上述代码将会编译失败。作为交换，此类代码为ArkTS引擎提供了更多信息和关于值的类型保证，有助于优化性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ets代码兼容性",
      children: ".ets代码兼容性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在API version 10之前的版本中，ArkTS（以.ets为扩展名的文件）在语法层面完全遵循标准的TypeScript规范。从API version 10 Release起，明确定义ArkTS的语法规则，同时，SDK增加了在编译流程中对.ets文件的ArkTS语法检查，通过编译告警或编译失败提示开发者适配新的ArkTS语法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据工程的compatibleSdkVersion，具体策略如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "compatibleSdkVersion >= 10 为标准模式。在该模式下，所有.ets文件必须严格遵循ArkTS语法规则，任何语法违规工程都会编译不通过，开发者需要修正所有语法问题后才能获得编译通过。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "compatibleSdkVersion < 10 为兼容模式。在该模式下，对.ets文件以warning形式提示违反ArkTS语法规则的所有代码。尽管违反ArkTS语法规则的工程在兼容模式下仍可编译成功，但需完全适配ArkTS语法后方可在标准模式下编译成功。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持与tsjs的交互",
      children: "支持与TS/JS的交互"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS支持与TS/JS的高效互操作。在当前版本中，ArkTS运行时兼容动态类型对象语义。在ArkTS与TypeScript/JavaScript交互操作场景中，直接复用TS/JS的数据和对象作为ArkTS的实体使用时，可能规避ArkTS的静态类型检查机制，进而引发运行时异常或引入额外的性能损耗。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// lib.ts\nexport class C {\n  v: string; // 在TS严格模式下，编译期报错 Property 'v' has no initializer\n}\n\nexport let c = new C()\n\n// app.ets\nimport { C, c } from './lib';\n\nfunction foo(c: C) {\n  c.v.length;\n}\n\nfoo(c);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "方舟运行时兼容tsjs",
      children: "方舟运行时兼容TS/JS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在API version 11上，HarmonyOS SDK中的TypeScript版本为4.9.5，target字段为es2017。应用中支持使用ECMA2017及更高版本的语法进行TS/JS开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用环境限制"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "强制使用严格模式（use strict）"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "禁止使用eval()"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "禁止使用with() {}"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "禁止以字符串为代码创建函数"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "禁止循环依赖"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "循环依赖示例:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// bar.ets\nimport {v} from './foo'; // bar.ets依赖foo.ets\nexport let u = 0;\nconsole.info(`v: ${v}`);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// foo.ets\nimport {u} from './bar'; // foo.ets同时又依赖bar.ets\nexport let v = 0;\nconsole.info(`u: ${u}`);\n\n// 应用加载失败\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "与标准TS/JS的差异"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在标准的TS/JS中，JSON的数字格式要求小数点后必须跟随数字，例如 2.e3 这类科学计数法不被允许，会导致 SyntaxError。方舟运行时则支持这类科学计数法。"
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