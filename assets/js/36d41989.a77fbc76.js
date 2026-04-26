"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["930372"], {
972187(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_learning_arkts_arkts_high_performance_programming_arkts_high_performance_programming_md_36d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-learning-arkts-arkts-high-performance-programming-arkts-high-performance-programming-md-36d.json
var site_docs_learning_arkts_arkts_high_performance_programming_arkts_high_performance_programming_md_36d_namespaceObject = JSON.parse('{"id":"learning-arkts/arkts-high-performance-programming/arkts-high-performance-programming","title":"ArkTS高性能编程实践","description":"概述","source":"@site/docs/learning-arkts/arkts-high-performance-programming/arkts-high-performance-programming.md","sourceDirName":"learning-arkts/arkts-high-performance-programming","slug":"/learning-arkts/arkts-high-performance-programming/","permalink":"/harmonyos-docs-site/learning-arkts/arkts-high-performance-programming/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"ArkTS高性能编程实践","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-high-performance-programming","kit":"getting-started","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"适配指导案例","permalink":"/harmonyos-docs-site/learning-arkts/typescript-to-arkts-migration/arkts-more-cases/"},"next":{"title":"从Java到ArkTS的迁移指导","permalink":"/harmonyos-docs-site/learning-arkts/arkts-for-other-languages/getting-started-with-arkts-for-java-programmers/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/learning-arkts/arkts-high-performance-programming/arkts-high-performance-programming.md


const frontMatter = {
	title: 'ArkTS高性能编程实践',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-high-performance-programming',
	kit: 'getting-started',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkTS高性能编程实践';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "声明与表达式",
  "id": "声明与表达式",
  "level": 2
}, {
  "value": "使用const声明不变的变量",
  "id": "使用const声明不变的变量",
  "level": 3
}, {
  "value": "number类型变量避免整型和浮点型混用",
  "id": "number类型变量避免整型和浮点型混用",
  "level": 3
}, {
  "value": "数值计算避免溢出",
  "id": "数值计算避免溢出",
  "level": 3
}, {
  "value": "循环中常量提取，减少属性访问次数",
  "id": "循环中常量提取减少属性访问次数",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 2
}, {
  "value": "建议使用参数传递函数外的变量",
  "id": "建议使用参数传递函数外的变量",
  "level": 3
}, {
  "value": "避免使用可选参数",
  "id": "避免使用可选参数",
  "level": 3
}, {
  "value": "数组",
  "id": "数组",
  "level": 2
}, {
  "value": "数值数组推荐使用TypedArray",
  "id": "数值数组推荐使用typedarray",
  "level": 3
}, {
  "value": "避免使用稀疏数组",
  "id": "避免使用稀疏数组",
  "level": 3
}, {
  "value": "避免使用联合类型数组",
  "id": "避免使用联合类型数组",
  "level": 3
}, {
  "value": "异常",
  "id": "异常",
  "level": 2
}, {
  "value": "避免频繁抛出异常",
  "id": "避免频繁抛出异常",
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
        id: "arkts高性能编程实践",
        children: "ArkTS高性能编程实践"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文提供应用性能敏感场景下的高性能编程建议，帮助开发者编写高性能应用。高性能编程实践是在开发过程中总结的一些高性能写法和建议。在实现业务功能时，应同步思考并理解高性能写法的原理，并将其应用于代码逻辑中。关于ArkTS编程规范，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/learning-arkts/arkts-coding-style-guide",
        children: "ArkTS编程规范"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "声明与表达式",
      children: "声明与表达式"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用const声明不变的变量",
      children: "使用const声明不变的变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不变的变量推荐使用const声明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const index = 10000; // 该变量在后续过程中未发生改变，建议声明成常量。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "number类型变量避免整型和浮点型混用",
      children: "number类型变量避免整型和浮点型混用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对number类型，运行时在优化时会区分整型和浮点型数据。建议避免在初始化后改变数据类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let intNum = 1;\nintNum = 1.1;  // 该变量在声明时为整型数据，建议后续不要赋值浮点型数据。\n\nlet doubleNum = 1.1;\ndoubleNum = 1;  // 该变量在声明时为浮点型数据，建议后续不要赋值整型数据。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数值计算避免溢出",
      children: "数值计算避免溢出"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常见的可能导致溢出的数值计算包括如下场景，溢出之后，会导致引擎走入慢速的溢出逻辑分支处理，影响后续的性能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "针对加法、减法、乘法、指数运算等运算操作，应避免数值大于INT32_MAX（2147483647）或小于INT32_MIN（-2147483648）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "针对&（and）、>>>（无符号右移）等运算操作，应避免数值大于INT32_MAX。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "循环中常量提取减少属性访问次数",
      children: "循环中常量提取，减少属性访问次数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果常量在循环中不会改变，可以将其提取到循环外部，减少访问次数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Time {\n  static start: number = 0;\n  static info: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];\n}\n\nfunction getNum(num: number): number {\n  let total: number = 348;\n  for (let index: number = 0x8000; index > 0x8; index >>= 1) {\n    // 此处会多次对Time的info及start进行查找，并且每次查找出来的值是相同的。\n    total += ((Time.info[num - Time.start] & index) !== 0) ? 1 : 0;\n  }\n  return total;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "优化后的代码如下，可以将Time.info[num - Time.start]提取为常量，这样可以显著减少属性访问次数，提升性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class TimeBetter {\n  static start: number = 0;\n  static info: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];\n}\n\nfunction getNumBetter(num: number): number {\n  let total: number = 348;\n  const info = TimeBetter.info[num - TimeBetter.start];  // 从循环中提取不变量。\n  for (let index: number = 0x8000; index > 0x8; index >>= 1) {\n    if ((info & index) != 0) {\n      total++;\n    }\n  }\n  return total;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数",
      children: "函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "建议使用参数传递函数外的变量",
      children: "建议使用参数传递函数外的变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用闭包会造成额外的开销。在性能敏感场景中，建议使用参数传递函数外的变量替代。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let arr = [0, 1, 2];\n\nfunction fooWithout(): number {\n  return arr[0] + arr[1];\n}\n\nfooWithout();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议使用参数传递函数外部的变量，以替代使用闭包。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let arr_ = [0, 1, 2];\n\nfunction fooWithArray(array: number[]): number {\n  return array[0] + array[1];\n}\n\nfooWithArray(arr_);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "避免使用可选参数",
      children: "避免使用可选参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数的可选参数表示参数可能为undefined，在函数内部使用该参数时，需要进行非空值的判断，造成额外的开销。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function add(left?: number, right?: number): number | undefined {\n  if (left != undefined && right != undefined) {\n    return left + right;\n  }\n  return undefined;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据业务需求，将函数参数声明为必选参数。考虑使用默认参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function addWithParams(left: number = 0, right: number = 0): number {\n  return left + right;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "数组",
      children: "数组"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数值数组推荐使用typedarray",
      children: "数值数组推荐使用TypedArray"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "涉及纯数值计算时，推荐使用TypedArray数据结构。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "优化前的代码示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const arr1 = new Array<number>(1, 2, 3);\nconst arr2 = new Array<number>(4, 5, 6);\nlet res = new Array<number>(3);\nfor (let i = 0; i < 3; i++) {\n  res[i] = arr1[i] + arr2[i];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "优化后的代码示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const typedArray1 = Int8Array.from([1, 2, 3]);\nconst typedArray2 = Int8Array.from([4, 5, 6]);\nlet res1 = new Array<number>(3);\nfor (let i = 0; i < 3; i++) {\n  res1[i] = typedArray1[i] + typedArray2[i];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "避免使用稀疏数组",
      children: "避免使用稀疏数组"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行时在分配超过1024大小的数组或稀疏数组时，会采用hash表来存储元素。在该模式下，访问数组元素速度较慢。代码开发时应避免数组变成稀疏数组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 直接分配100000大小的数组，运行时会处理成用hash表来存储元素。\nlet count = 100000;\nlet res: number[] = new Array(count).fill(0);\n\n// 创建数组后，直接在9999处赋值，会变成稀疏数组。\nlet result: number[] = [];\nresult[9999] = 0;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "避免使用联合类型数组",
      children: "避免使用联合类型数组"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "避免使用联合类型数组。避免在数值数组中混合使用整型数据和浮点型数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let arrNum: number[] = [1, 1.1, 2]; // 数值数组中混合使用整型数据和浮点型数据。\nlet arrUnion: (number | string)[] = [1, 'hello']; // 联合类型数组。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据业务需求，将相同类型的数据放在同一数组中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let arrInt: number[] = [1, 2, 3];\nlet arrDouble: number[] = [0.1, 0.2, 0.3];\nlet arrString: string[] = ['hello', 'world'];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "异常",
      children: "异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "避免频繁抛出异常",
      children: "避免频繁抛出异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建异常时会构造异常的栈帧，造成性能损耗。在性能敏感场景下，如for循环语句中，应避免频繁抛出异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "优化前的代码示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function div(a: number, b: number): number {\n  if (a <= 0 || b <= 0) {\n    throw new Error('Invalid numbers.');\n  }\n  return a / b;\n}\n\nfunction sum(num: number): number {\n  let sum = 0;\n  try {\n    for (let t = 1; t < 100; t++) {\n      sum += div(t, num);\n    }\n  } catch (e) {\n    console.info(e.message);\n  }\n  return sum;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "优化后的代码示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function sumBetter(num: number): number {\n  let sum = 0;\n  for (let t = 1; t < 100; t++) {\n    // 直接拦截异常场景，避免频繁抛出异常\n    if (num <= 0) {\n      console.info('Invalid numbers.');\n    }\n    sum += divBetter(t, num);\n  }\n  return sum;\n}\n"
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