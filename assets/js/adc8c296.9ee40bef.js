"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["651960"], {
598051(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_learning_arkts_introduction_to_arkts_introduction_to_arkts_md_adc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-learning-arkts-introduction-to-arkts-introduction-to-arkts-md-adc.json
var site_docs_learning_arkts_introduction_to_arkts_introduction_to_arkts_md_adc_namespaceObject = JSON.parse('{"id":"learning-arkts/introduction-to-arkts/introduction-to-arkts","title":"ArkTS语言介绍","description":"ArkTS是一种设计用于构建高性能应用的编程语言。它在继承TypeScript语法的基础上进行了优化，以提供更高的性能和开发效率。","source":"@site/docs/learning-arkts/introduction-to-arkts/introduction-to-arkts.md","sourceDirName":"learning-arkts/introduction-to-arkts","slug":"/learning-arkts/introduction-to-arkts/","permalink":"/harmonyos-docs-site/learning-arkts/introduction-to-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"ArkTS语言介绍","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/introduction-to-arkts","kit":"getting-started","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"初识ArkTS语言","permalink":"/harmonyos-docs-site/learning-arkts/arkts-get-started/"},"next":{"title":"ArkTS编程规范","permalink":"/harmonyos-docs-site/learning-arkts/arkts-coding-style-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/learning-arkts/introduction-to-arkts/introduction-to-arkts.md


const frontMatter = {
	title: 'ArkTS语言介绍',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/introduction-to-arkts',
	kit: 'getting-started',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkTS语言介绍';

const assets = {

};



const toc = [{
  "value": "基本知识",
  "id": "基本知识",
  "level": 2
}, {
  "value": "声明",
  "id": "声明",
  "level": 3
}, {
  "value": "类型",
  "id": "类型",
  "level": 3
}, {
  "value": "运算符",
  "id": "运算符",
  "level": 3
}, {
  "value": "语句",
  "id": "语句",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 2
}, {
  "value": "函数声明",
  "id": "函数声明",
  "level": 3
}, {
  "value": "可选参数",
  "id": "可选参数",
  "level": 3
}, {
  "value": "rest参数",
  "id": "rest参数",
  "level": 3
}, {
  "value": "返回类型",
  "id": "返回类型",
  "level": 3
}, {
  "value": "函数的作用域",
  "id": "函数的作用域",
  "level": 3
}, {
  "value": "函数调用",
  "id": "函数调用",
  "level": 3
}, {
  "value": "函数类型",
  "id": "函数类型",
  "level": 3
}, {
  "value": "箭头函数（又名Lambda函数）",
  "id": "箭头函数又名lambda函数",
  "level": 3
}, {
  "value": "闭包",
  "id": "闭包",
  "level": 3
}, {
  "value": "函数重载",
  "id": "函数重载",
  "level": 3
}, {
  "value": "类",
  "id": "类",
  "level": 2
}, {
  "value": "字段",
  "id": "字段",
  "level": 3
}, {
  "value": "方法",
  "id": "方法",
  "level": 3
}, {
  "value": "构造函数",
  "id": "构造函数",
  "level": 3
}, {
  "value": "可见性修饰符",
  "id": "可见性修饰符",
  "level": 3
}, {
  "value": "对象字面量",
  "id": "对象字面量",
  "level": 3
}, {
  "value": "抽象类",
  "id": "抽象类",
  "level": 3
}, {
  "value": "接口",
  "id": "接口",
  "level": 2
}, {
  "value": "接口属性",
  "id": "接口属性",
  "level": 3
}, {
  "value": "接口继承",
  "id": "接口继承",
  "level": 3
}, {
  "value": "抽象类和接口",
  "id": "抽象类和接口",
  "level": 3
}, {
  "value": "泛型类型和函数",
  "id": "泛型类型和函数",
  "level": 2
}, {
  "value": "泛型类和接口",
  "id": "泛型类和接口",
  "level": 3
}, {
  "value": "泛型约束",
  "id": "泛型约束",
  "level": 3
}, {
  "value": "泛型函数",
  "id": "泛型函数",
  "level": 3
}, {
  "value": "泛型默认值",
  "id": "泛型默认值",
  "level": 3
}, {
  "value": "空安全",
  "id": "空安全",
  "level": 2
}, {
  "value": "非空断言运算符",
  "id": "非空断言运算符",
  "level": 3
}, {
  "value": "空值合并运算符",
  "id": "空值合并运算符",
  "level": 3
}, {
  "value": "可选链",
  "id": "可选链",
  "level": 3
}, {
  "value": "模块",
  "id": "模块",
  "level": 2
}, {
  "value": "导出",
  "id": "导出",
  "level": 3
}, {
  "value": "导入",
  "id": "导入",
  "level": 3
}, {
  "value": "顶层语句",
  "id": "顶层语句",
  "level": 3
}, {
  "value": "关键字",
  "id": "关键字",
  "level": 2
}, {
  "value": "this",
  "id": "this",
  "level": 3
}, {
  "value": "注解",
  "id": "注解",
  "level": 2
}, {
  "value": "用户自定义注解",
  "id": "用户自定义注解",
  "level": 3
}, {
  "value": "ArkUI支持",
  "id": "arkui支持",
  "level": 2
}, {
  "value": "ArkUI示例",
  "id": "arkui示例",
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
        id: "arkts语言介绍",
        children: "ArkTS语言介绍"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS是一种设计用于构建高性能应用的编程语言。它在继承TypeScript语法的基础上进行了优化，以提供更高的性能和开发效率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "许多编程语言在设计之初未考虑移动设备，导致应用运行缓慢、低效且功耗大。随着移动设备在日常生活中越来越普遍，针对移动环境的编程语言优化需求日益增加。ArkTS专为解决这些问题而设计，聚焦提高运行效率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TypeScript是在JavaScript基础上通过添加类型定义扩展而来的，ArkTS则是TypeScript的进一步扩展。TypeScript提供了一种更结构化的JavaScript编码方法，深受开发者喜爱。ArkTS保持了TypeScript的大部分语法，旨在为现有的TypeScript开发者提供高度兼容的体验，帮助移动开发者快速上手。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS的一大特性是它专注于低运行时开销。ArkTS对TypeScript的动态类型特性施加了更严格的限制，以减少运行时开销，提高执行效率。通过取消动态类型特性，ArkTS代码能更有效地被运行前编译和优化，从而实现更快的应用启动和更低的功耗。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS语言设计中考虑了与TypeScript和JavaScript的互通性。许多移动应用开发者希望重用TypeScript和JavaScript代码及库，因此ArkTS提供与TypeScript和JavaScript的无缝互通，使开发者可以轻松集成TypeScript和JavaScript代码到应用中，充分利用现有代码和库进行ArkTS开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本教程将指导开发者了解ArkTS的核心功能、语法和最佳实践，助力开发者使用ArkTS高效构建高性能的移动应用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如需详细了解ArkTS语言，请参阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-overview",
        children: "ArkTS具体指南"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-tools-overview",
        children: "DevEco Studio"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本知识",
      children: "基本知识"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "声明",
      children: "声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS通过声明引入变量、常量、类型和函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "变量声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用关键字let声明的变量可以在程序执行期间具有不同的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let hi: string = 'hello';\nhi = 'hello, world';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "常量声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用关键字const声明的常量为只读类型，只能被赋值一次。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const hello: string = 'hello';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对常量重新赋值会造成编译时错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "自动类型推断"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果变量或常量的声明包含初始值，开发者无需显式指定类型，因为ArkTS规范已列举了所有允许自动推断类型的场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例中，两条声明语句都是有效的，两个变量都是string类型："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let hi1: string = 'hello';\nlet hi2 = 'hello, world';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型",
      children: "类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "基本类型和引用类型"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基本数据类型包括number、string等简单类型，它们可以准确地表示单一的数据类型。对基本类型的存储和访问都是直接的，比较时直接比较其值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "引用类型包括对象、数组和函数等复杂数据结构。这些类型通过引用访问数据，对象和数组可以包含多个值或键值对，函数则可以封装可执行的代码逻辑。引用类型在内存中通过指针访问数据，修改引用会影响原始数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "number类型"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS提供number类型，任何整数和浮点数都可以被赋给此类型的变量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数字字面量包括整数字面量和十进制浮点数字面量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "整数字面量包括以下类别："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "十进制整数，由数字序列组成。例如：0、117、-345。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "十六进制整数，以0x（或0X）开头，包含数字（0-9）和字母a-f或A-F。例如：0x1123、0x00111、-0xF1A7。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "八进制整数，以0o（或0O）开头，只能包含数字（0-7）。例如：0o777。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "二进制整数，以0b（或0B）开头，只能包含数字0和1。例如：0b11、0b0011、-0b11。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "浮点数字面量包括以下部分："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "十进制整数，可为有符号数（前缀为“+”或“-”）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "小数点（“.”）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "小数部分（由十进制数字字符串表示）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "指数部分，以“e”或“E”开头，后跟有符号（前缀为“+”或“-”）或无符号整数。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let n1 = 3.14;\nlet n2 = 3.141592;\nlet n3 = 0.5;\nlet n4 = 1e2;\n\nfunction factorial(n: number): number {\n  if (n <= 1) {\n    return 1;\n  }\n  return n * (n - 1);\n}\n  // ...\n  factorial(n1) // 6.719600000000001\n  factorial(n2) // 6.728008294464001\n  factorial(n3) // 1\n  factorial(n4) // 9900\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "number类型在表示大整数（即超过-9007199254740991~9007199254740991）时会造成精度丢失。在开发时可以按需使用bigint类型来确保精度："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let bigInt: bigint = 999999999999999999999999999999999999999999999999999999999999n;\nconsole.info('bigInt:' + bigInt.toString());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "boolean类型"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "boolean类型由true和false两个逻辑值组成。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通常在条件语句中使用boolean类型的变量："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let isDone: boolean = false;\n\n// ...\n\nif (isDone) {\n  console.info('Done!');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "string类型"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "string类型代表字符序列，可以使用转义字符来表示字符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字符串字面量由单引号（'）或双引号（\"）之间括起来的零个或多个字符组成。字符串字面量还有一特殊形式，是用反向单引号（`）括起来的模板字面量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let s1 = 'Hello, world!\\n';\nlet s2 = 'this is a string';\nlet a = 'Success';\nlet s3 = `The result is ${a}`;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "void类型"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "void类型用于指定函数没有返回值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此类型只有一个值，同样是void。由于void是引用类型，因此它可以用于泛型类型参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Class<T> {\n  // ...\n}\nlet instance: Class<void>;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Object类型"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Object类型是所有引用类型的基类型。任何值，包括基本类型的值，都可以直接被赋给Object类型的变量（基本类型值会被自动装箱）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "object类型用于表示除基本类型外的类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let o1: Object = 'Alice';\nlet o2: Object = ['a', 'b'];\nlet o3: Object = 1;\nlet o4: object = [1, 2, 3];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "array类型"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "array类型，即数组，是由可赋值给数组声明中指定的元素类型的数据组成的对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数组可由数组复合字面量赋值。数组复合字面量是用方括号括起来的零个或多个表达式列表，每个表达式为数组中的一个元素。数组的长度由数组中元素的个数确定。数组中第一个元素的索引为0。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例将创建包含三个元素的数组："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let names: string[] = ['Alice', 'Bob', 'Carol'];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "enum类型"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enum类型，即枚举类型，是预先定义的一组命名值的值类型，其中命名值又称为枚举常量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用枚举常量时必须以枚举类型名称为前缀。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ColorSet { Red, Green, Blue }\nlet c: ColorSet = ColorSet.Red;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常量表达式用于显式设置枚举常量的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ColorSet { White = 0xFF, Grey = 0x7F, Black = 0x00 }\nlet c: ColorSet = ColorSet.Black;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Union类型"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Union类型，即联合类型，是由多个类型组合成的引用类型。联合类型包含了变量可能的所有类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Cat {\n  public name: string = 'cat';\n  // ...\n}\n\nclass Dog {\n  public name: string = 'dog';\n  // ...\n}\n\nclass Frog {\n  public name: string = 'frog';\n  // ...\n}\n\ntype Animal = Cat | Dog | Frog | number | string | null | undefined;\n// Cat、Dog、Frog是一些类型（类或接口）\n\nlet animal: Animal = new Cat();\nanimal = new Frog();\nanimal = 42;\nanimal = 'dog';\nanimal = undefined;\n// 可以将类型为联合类型的变量赋值为任何组成类型的有效值\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以使用不同机制获取联合类型中的特定类型值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Cat { sleep () {}; meow () {} }\nclass Dog { sleep () {}; bark () {} }\nclass Frog { sleep () {}; leap () {} }\n\ntype Animal = Cat | Dog | Frog;\n\nfunction foo(animal: Animal) {\n  if (animal instanceof Frog) {  // 判断animal是否是Frog类型\n    animal.leap();  // animal在这里是Frog类型\n  }\n  animal.sleep(); // Animal具有sleep方法\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Aliases类型"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Aliases类型为匿名类型（如数组、函数、对象字面量或联合类型）提供名称，或为已定义的类型提供替代名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 二维数组类型\ntype Matrix = number[][];\nconst gameBoard: Matrix = [\n  [1, 0],\n  [0, 1]\n];\n\n// 函数类型\ntype Handler = (s: string, no: number) => string;\nconst repeatString: Handler = (str, times) => {\n  return str.repeat(times);\n};\nconsole.info(repeatString('abc', 3)); // 'abcabcabc'\n// ...\n// 泛型函数类型\ntype Predicate<T> = (x: T) => boolean;\nconst isEven: Predicate<number> = (num) => num % 2 === 0;\n\n// 可为空的对象类型\ntype NullableObject = Object | null;\n\nclass Cat {\n}\n\nlet animalData: NullableObject = new Cat();\nlet emptyData: NullableObject = null;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "运算符",
      children: "运算符"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "赋值运算符"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "赋值运算符=，使用方式如x=y。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "复合赋值运算符将赋值与运算符组合在一起，例如：a += b 等价于 a = a + b，"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中的 += 即为复合赋值运算符"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "复合赋值运算符包括：+=、-=、*=、/=、%=、<<=、>>=、>>>=、&=、|=、^=。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "比较运算符"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "运算符"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "==="
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果两个操作数严格相等（对于不同类型的操作数认为是不相等的），则返回true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "!=="
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果两个操作数严格不相等（对于不同类型的操作数认为是不相等的），则返回true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "=="
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果两个操作数相等，则返回true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "!="
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果两个操作数不相等，则返回true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ">"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果左操作数大于右操作数，则返回true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ">="
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果左操作数大于或等于右操作数，则返回true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "<"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果左操作数小于右操作数，则返回true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "<="
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果左操作数小于或等于右操作数，则返回true。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "===与==的区别："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ==只比较目标的值相等\nconsole.info(String(null == undefined)); // true\n// ===比较目标的值和类型都相等\nconsole.info(String(null === undefined)); // false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "算术运算符"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一元运算符包括：-、+、--、++。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "二元运算符列举如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "运算符"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加法"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "减法"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "乘法"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "除法"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "除法后余数"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "位运算符"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "运算符"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "a & b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按位与：如果两个操作数的对应位都为1，则将这个位设置为1，否则设置为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "b"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "a ^ b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按位异或：如果两个操作数的对应位不同，则将这个位设置为1，否则设置为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "~ a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按位非：反转操作数的位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "a << b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左移：将a的二进制表示向左移b位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "a >> b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "算术右移：将a的二进制表示向右移b位，带符号扩展。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "a >>> b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "逻辑右移：将a的二进制表示向右移b位，左边补0。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "逻辑运算符"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "运算符"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "a && b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "逻辑与"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "! a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "逻辑非"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "instanceof运算符"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "instanceof运算符用于在运行时检查一个对象是否是指定类或其子类的实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "obj instanceof className\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值类型为boolean。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果obj是className类或其子类的实例，则返回值为true；否则，返回值为false。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Person {}\nconst person = new Person();\nif ((person instanceof Person)) {\n  console.info('true'); // true\n}\n\nclass Animal {}\nclass Bird extends Animal {}\nconst bird = new Bird();\nif (bird instanceof Animal) {\n  console.info('true'); // true\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "语句",
      children: "语句"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "if语句"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "if语句用于需要根据逻辑条件执行不同语句的场景。当逻辑条件为真时，执行对应的一组语句，否则执行另一组语句（如果有的话）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "else部分也可以包含if语句。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "if语句如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "if (condition1) {\n  // 语句1\n} else if (condition2) {\n  // 语句2\n} else {\n  // else语句\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "条件表达式可以是任何类型，非boolean类型会进行隐式类型转换："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let s1 = 'Hello';\nif (s1) {\n  console.info(s1); // 打印\"Hello\"\n}\n\nlet s2 = 'World';\nif (s2.length != 0) {\n  console.info(s2); // 打印\"World\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "switch语句"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用switch语句执行与switch表达式值匹配的代码块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "switch语句如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "switch (expression) {\n  case label1: // 如果label1匹配,则执行\n    // ...\n    // 语句1\n    // ...\n    break; // 可省略\n  case label2:\n  case label3: // 如果label2或label3匹配,则执行\n    // ...\n    // 语句23\n    // ...\n    break; // 可省略\n  default:\n  // 默认语句\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果switch表达式的值等于某个label的值，则执行相应的语句。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果没有任何一个label值与表达式值相匹配，并且switch具有default子句，那么程序会执行default子句对应的代码块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "break语句（可选的）允许跳出switch语句并继续执行switch语句之后的语句。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果没有break语句，则执行switch中的下一个label对应的代码块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "条件表达式"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "条件表达式根据第一个表达式的布尔值来返回其他两个表达式之一的结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "condition ? expression1 : expression2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果condition的值为真值（转换后为true的值），则使用expression1作为该表达式的结果；否则，使用expression2作为该表达式的结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let message = Math.random() > 0.5 ? 'Valid' : 'Failed';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "condition如果是非bool值则会进行隐式转换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "console.info('a' ? 'true' : 'false'); // true\nconsole.info('' ? 'true' : 'false'); // false\nconsole.info(1 ? 'true' : 'false'); // true\nconsole.info(0 ? 'true' : 'false'); // false\nconsole.info(null ? 'true' : 'false'); // false\nconsole.info(undefined ? 'true' : 'false'); // false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "for语句"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "for语句会被重复执行，直到循环退出语句值为false。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "for语句如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for ([init]; [condition]; [update]) {\n  statements\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "for语句的执行流程如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、 执行init表达式（如有）。此表达式通常初始化一个或多个循环计数器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、 计算condition。如果它为真值（转换后为true的值），则执行循环主体的语句。如果它为假值（转换后为false的值），则for循环终止。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3、 执行循环主体的语句。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4、 如果有update表达式，则执行该表达式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "5、 返回步骤2。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let sum = 0;\nfor (let i = 0; i < 10; i += 2) {\n  sum += i;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "for-of语句"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用for-of语句可遍历数组、Set、Map、字符串等可迭代的类型。示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (forVar of IterableExpression) {\n  // process forVar\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (let ch of 'a string object') {\n  console.info(ch);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "while语句"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "只要condition为真值（转换后为true的值），while语句就会执行statements语句。示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "while (condition) {\n  statements\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let n = 0;\nlet x = 0;\nwhile (n < 3) {\n  n++;\n  x += n;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "do-while语句"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果condition的值为真值（转换后为true的值），那么statements语句会重复执行。示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "do {\n  statements\n} while (condition)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let i = 0;\ndo {\n  i += 1;\n} while (i < 10)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "break语句"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用break语句可以终止循环语句或switch。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let x = 0;\nwhile (true) {\n  x++;\n  if (x > 5) {\n    break;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果break语句后带有标识符，则将控制流转移到该标识符所包含的语句块之外。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let x = 1;\nlabel: while (true) {\n  switch (x) {\n    case 1:\n      // statements\n      break label; // 中断while语句\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "continue语句"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "continue语句会停止当前循环迭代的执行，并将控制传递给下一次迭代。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let sum = 0;\nfor (let x = 0; x < 100; x++) {\n  if (x % 2 == 0) {\n    continue;\n  }\n  sum += x;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "throw和try语句"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "throw语句用于抛出异常或错误："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "throw new Error('this error')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "try语句用于捕获和处理异常或错误："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n  // ...\n} catch (e) {\n  // 异常处理\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的示例中throw和try语句用于处理除数为0的错误："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class ZeroDivisor extends Error {}\n\nfunction divide (a: number, b: number): number {\n  if (b == 0) {\n    throw new ZeroDivisor();\n  }\n  return a / b;\n}\n\nfunction process(a: number, b: number) {\n  try {\n    let res = divide(a, b);\n    console.info('result: ' + res);\n  } catch (x) {\n    console.error('some error');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持finally语句："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function processData(s: string) {\n  let error: Error | null = null;\n\n  try {\n    console.info('Data processed: ' + s);\n    // ...\n    // 可能发生异常的语句\n    // ...\n  } catch (e) {\n    error = e as Error;\n    // ...\n    // 异常处理\n    // ...\n  } finally {\n    // 无论是否发生异常都会执行的代码\n    if (error != null) {\n      console.error(`Error caught: input='${s}', message='${error.message}'`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数",
      children: "函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数声明",
      children: "函数声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数声明引入一个函数，包含其名称、参数列表、返回类型和函数体。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例是一个简单的函数和它的语法语义说明："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.参数类型标注：x: string, y: string 显式声明参数类型为字符串类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.返回值类型：: string 指定函数返回值为字符串类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function add(x: string, y: string): string {\n  let z: string = `${x} ${y}`;\n  return z;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在函数声明中，必须为每个参数标记类型。如果参数为可选参数，那么允许在调用函数时省略该参数。函数的最后一个参数可以是rest参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "可选参数",
      children: "可选参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可选参数的格式可为name?: Type。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function hello(name?: string) {\n  if (name == undefined) {\n    console.info('Hello!');\n  } else {\n    console.info(`Hello, ${name}!`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可选参数的另一种形式为设置的参数默认值。如果在函数调用中这个参数被省略了，则会使用此参数的默认值作为实参。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function multiply(n: number, coeff: number = 2): number {\n  return n * coeff;\n}\n// ...\n  multiply(2);  // 返回2*2\n  multiply(2, 3); // 返回2*3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rest参数",
      children: "rest参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数的最后一个参数可以是rest参数，格式为...restName: Type[]。rest参数允许函数接收一个不定长数组，用于处理不定数量的参数输入。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function sum(...numbers: number[]): number {\n  let res = 0;\n  for (let n of numbers) {\n    res += n;\n  }\n  return res;\n}\n// ...\n  sum(); // 返回0\n  sum(1, 2, 3); // 返回6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "返回类型",
      children: "返回类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果可以从函数体内推断出函数返回类型，则可在函数声明中省略标注返回类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 显式指定返回类型\nfunction foo(): string { return 'foo'; }\n\n// 推断返回类型为string\nfunction goo() { return 'goo'; }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不需要返回值的函数的返回类型可以显式指定为void或省略标注。这类函数不需要返回语句。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例中两种函数声明方式都是有效的："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function hi1() { console.info('hi'); }\nfunction hi2(): void { console.info('hi'); }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数的作用域",
      children: "函数的作用域"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数中定义的变量和其他实例仅可以在函数内部访问，不能从外部访问。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果函数中定义的变量与外部作用域中已有实例同名，则函数内的局部变量定义将覆盖外部定义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let outerVar = 'I am outer ';\n\nfunction func() {\n  let outerVar = 'I am inside';\n  console.info(outerVar); // 输出: I am inside\n}\n// ...\n  func();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数调用",
      children: "函数调用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用函数以执行其函数体，实参值会赋值给函数的形参。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果函数定义如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function join(x: string, y: string): string {\n  let z: string = `${x} ${y}`;\n  return z;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "则此函数的调用需要包含两个string类型的参数："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let x = join('hello', 'world');\nconsole.info(x); // 输出: hello world\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数类型",
      children: "函数类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数类型通常用于定义回调函数："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "type trigFunc = (x: number) => number // 这是一个函数类型\n\nfunction doAction(f: trigFunc) {\n  f(3.141592653589); // 调用函数\n}\n\ndoAction(Math.sin); // 将函数作为参数传入\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "箭头函数又名lambda函数",
      children: "箭头函数（又名Lambda函数）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数可以定义为箭头函数，例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let sum = (x: number, y: number): number => {\n  return x + y;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "箭头函数的返回类型可以省略，此时返回类型从函数体推断。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表达式可以指定为箭头函数，使表达更简短，因此以下两种表达方式是等价的："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let sum1 = (x: number, y: number) => { return x + y; }\nlet sum2 = (x: number, y: number) => x + y\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "闭包",
      children: "闭包"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "闭包是由函数及声明该函数的环境组合而成的。该环境包含了这个闭包创建时作用域内的任何局部变量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下例中，f函数返回了一个闭包，它捕获了count变量，每次调用z，count的值会被保留并递增。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function f(): () => number {\n  let count = 0;\n  let g = (): number => { count++; return count; };\n  return g;\n}\n// ...\n  let z = f();\n  z(); // 返回：1\n  z(); // 返回：2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数重载",
      children: "函数重载"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以通过编写重载，指定函数的不同调用方式。具体方法是，为同一个函数写入多个同名但签名不同的函数头，函数实现紧随其后。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function foo1(x: number): void;            /* 第一个函数定义 */\nfunction foo1(x: string): void;            /* 第二个函数定义 */\nfunction foo1(x: number | string): void {  /* 函数实现 */\n}\n\nfoo1(123);     // OK，使用第一个定义\nfoo1('aa'); // OK，使用第二个定义\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不允许重载函数有相同的参数列表，否则将导致编译错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "类",
      children: "类"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "类声明引入一个新类型，并定义其字段、方法和构造函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在以下示例中，定义了Person类，该类具有字段name和surname、构造函数和方法fullName："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Person {\n  public name: string = '';\n  public surname: string = '';\n  constructor (n: string, sn: string) {\n    this.name = n;\n    this.surname = sn;\n  }\n  fullName(): string {\n    return this.name + ' ' + this.surname;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义类后，可以使用关键字new创建实例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let p = new Person('John', 'Smith');\nconsole.info(p.fullName());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "或者，可以使用对象字面量创建实例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Point {\n  public x: number = 0;\n  public y: number = 0;\n}\nlet p: Point = {x: 42, y: 42};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "字段",
      children: "字段"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字段是直接在类中声明的某种类型的变量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "类可以具有实例字段或者静态字段。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "实例字段"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实例字段存在于类的每个实例上。每个实例都有自己的实例字段集合。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "要访问实例字段，需要使用类的实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Person1 {\n  public name: string = '';\n  public age: number = 0;\n  constructor(n: string, a: number) {\n    this.name = n;\n    this.age = a;\n  }\n\n  getName(): string {\n    return this.name;\n  }\n}\n// ...\n  let p1 = new Person1('Alice', 25);\n  p1.name; // Alice\n  let p2 = new Person1('Bob', 28);\n  p2.getName(); // Bob\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "静态字段"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用关键字static将字段声明为静态。静态字段属于类本身，类的所有实例共享一个静态字段。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "要访问静态字段，需要使用类名："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Person2 {\n  public static numberOfPersons = 0;\n  constructor() {\n    // ...\n    Person2.numberOfPersons++;\n    // ...\n  }\n}\n\nPerson2.numberOfPersons;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "字段初始化"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了减少运行时错误并提升执行性能，ArkTS要求所有字段在声明时或构造函数中显式初始化，与标准TS的strictPropertyInitialization模式相同。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下代码在ArkTS中不合法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Person {\n  name: string; // undefined\n  \n  setName(n: string): void {\n    this.name = n;\n  }\n  \n  getName(): string {\n    // 开发者使用\"string\"作为返回类型，这隐藏了name可能为\"undefined\"的事实。\n    // 更合适的做法是将返回类型标注为\"string | undefined\"，以告诉开发者这个API所有可能的返回值。\n    return this.name;\n  }\n}\n\nlet jack = new Person();\n// 假设代码中没有对name赋值，即没有调用\"jack.setName('Jack')\"\njack.getName().length; // 运行时异常：name is undefined\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS中，开发者应该这样写代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Person3 {\n  public name: string = '';\n\n  setName(n: string): void {\n    this.name = n;\n  }\n\n  // 类型为'string'，不可能为\"null\"或者\"undefined\"\n  getName(): string {\n    return this.name;\n  }\n}\n\n\nlet jack = new Person3();\n// 假设代码中没有对name赋值，即没有调用\"jack.setName('Jack')\"\njack.getName().length; // 0, 没有运行时异常\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接下来的代码示例展示了当name的值可能为undefined时，如何正确编写代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Person {\n  name?: string; // 可能为`undefined`\n\n  setName(n: string): void {\n    this.name = n;\n  }\n\n  // 编译时错误：name可以是\"undefined\"，所以这个API的返回值类型不能仅定义为string类型\n  getNameWrong(): string {\n    return this.name;\n  }\n\n  getName(): string | undefined { // 返回类型匹配name的类型\n    return this.name;\n  }\n}\n\nlet jack = new Person();\n// 假设代码中没有对name赋值，即没有调用\"jack.setName('Jack')\"\n\n// 编译时错误：编译器认为下一行代码有可能会访问undefined的属性，报错\njack.getName().length;  // 编译失败\n\njack.getName()?.length; // 编译成功，没有运行时错误\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "getter和setter"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setter和getter可用于提供对类属性的受控访问。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在以下示例中，setter用于禁止将_age属性设置为无效值："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Person4 {\n  public name: string = '';\n  private _age: number = 0;\n  get age(): number { return this._age; }\n  set age(x: number) {\n    if (x < 0) {\n      throw Error('Invalid age argument');\n    }\n    this._age = x;\n  }\n}\n// ...\n  let p = new Person4();\n  p.age; // 输出0\n  // ...\n    p.age = -42; // 设置无效age值会抛出错误\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在类中可以定义getter或者setter。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "方法",
      children: "方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方法属于类。类可以定义实例方法或者静态方法。静态方法属于类本身，只能访问静态字段。而实例方法既可以访问静态字段，也可以访问实例字段，包括类的私有字段。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "实例方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例说明了实例方法的工作原理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "calculateArea方法计算矩形面积："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class RectangleSize {\n  private height: number = 0;\n  private width: number = 0;\n  constructor(height: number, width: number) {\n    this.height = height;\n    this.width = width;\n  }\n  calculateArea(): number {\n    return this.height * this.width;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "必须通过类的实例调用实例方法："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let square = new RectangleSize(10, 10);\nsquare.calculateArea(); // 输出：100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "静态方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用关键字 static 声明静态方法。静态方法属于类，只能访问静态字段。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "静态方法定义了类作为一个整体的公共行为。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "必须通过类名调用静态方法："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C2 {\n  public static staticMethod(): string {\n    return 'this is a static method.';\n  }\n}\n// ...\n  console.info(C2.staticMethod());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "继承"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一个类可以继承另一个类（称为基类），并使用以下语法实现多个接口："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class [extends BaseClassName] [implements listOfInterfaces] {\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "继承类继承基类的字段和方法，但不继承构造函数。继承类可以新增定义字段和方法，也可以覆盖其基类定义的方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基类也称为“父类”或“超类”。继承类也称为“派生类”或“子类”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Person5 {\n  public name: string = '';\n  public _age = 0;\n  get age(): number {\n    return this._age;\n  }\n}\nclass Employee extends Person5 {\n  public salary: number = 0;\n  calculateTaxes(): number {\n    return this.salary * 0.42;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "包含implements子句的类必须实现列出的接口中定义的所有方法，但使用默认实现定义的方法除外。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface DateInterface {\n  now(): string;\n}\nclass MyDate implements DateInterface {\n  now(): string {\n    // 在此实现\n    return 'now';\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "父类访问"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关键字super可用于访问父类的方法和构造函数。在实现子类功能时，可以通过该关键字从父类中获取所需接口："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class RectangleSize {\n  protected height: number = 0;\n  protected width: number = 0;\n\n  constructor (h: number, w: number) {\n    this.height = h;\n    this.width = w;\n  }\n\n  draw() {\n    /* 绘制边界 */\n  }\n}\nclass FilledRectangle extends RectangleSize {\n  public color = ''\n  constructor (h: number, w: number, c: string) {\n    super(h, w); // 父类构造函数的调用\n    this.color = c;\n  }\n\n  draw() {\n    super.draw(); // 父类方法的调用\n    /* 填充矩形 */\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方法重写"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "子类可以重写其父类中定义的方法的实现。重写的方法必须具有与原始方法相同的参数类型和相同或派生的返回类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class RectangleSize {\n  // ...\n  area(): number {\n    // 实现\n    return 0;\n  }\n}\nclass Square extends RectangleSize {\n  private side: number = 0;\n  area(): number {\n    return this.side * this.side;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方法重载签名"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过重载签名，指定方法的不同调用。具体方法为，为同一个方法写入多个同名但签名不同的方法头，方法实现紧随其后。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C {\n  foo(x: number): void;            /* 第一个签名 */\n  foo(x: string): void;            /* 第二个签名 */\n  foo(x: number | string): void {  /* 实现签名 */\n  }\n}\nlet c = new C();\nc.foo(123);     // OK，使用第一个签名\nc.foo('aa'); // OK，使用第二个签名\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果两个重载签名的名称和参数列表均相同，则为错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "构造函数",
      children: "构造函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "类声明可以包含用于初始化对象状态的构造函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构造函数定义如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "constructor ([parameters]) {\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果未定义构造函数，则会自动创建具有空参数列表的默认构造函数，例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Point {\n  public x: number = 0;\n  public y: number = 0;\n}\nlet p = new Point();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在这种情况下，默认构造函数使用字段类型的默认值初始化实例中的字段。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "派生类的构造函数"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构造函数函数体的第一条语句可以使用关键字super来显式调用直接父类的构造函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class RectangleSize {\n  constructor(width: number, height: number) {\n    // ...\n  }\n}\nclass Square extends RectangleSize {\n  constructor(side: number) {\n    super(side, side);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "构造函数重载签名"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以通过编写重载签名，指定构造函数的不同调用方式。具体方法是，为同一个构造函数写入多个同名但签名不同的构造函数头，构造函数实现紧随其后。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C {\n  constructor(x: number)             /* 第一个签名 */\n  constructor(x: string)             /* 第二个签名 */\n  constructor(x: number | string) {  /* 实现签名 */\n  }\n}\nlet c1 = new C(123);      // OK，使用第一个签名\nlet c2 = new C('abc');    // OK，使用第二个签名\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果两个重载签名的名称和参数列表均相同，则为错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "可见性修饰符",
      children: "可见性修饰符"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "类的方法和属性都可以使用可见性修饰符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可见性修饰符包括：private、protected和public。默认可见性为public。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Public（公有）"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "public修饰的类成员（字段、方法、构造函数）在程序的任何可访问该类的地方都是可见的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Private（私有）"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "private修饰的成员不能在声明该成员的类之外访问，例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C {\n  public x: string = '';\n  private y: string = '';\n  set_y (new_y: string) {\n    this.y = new_y; // OK，因为y在类本身中可以访问\n  }\n}\nlet c = new C();\nc.x = 'a'; // OK，该字段是公有的\nc.y = 'b'; // 编译时错误：'y'不可见\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Protected（受保护）"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "protected修饰符的作用与private修饰符非常相似，不同点是protected修饰的成员允许在派生类中访问，例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Base {\n  protected x: string = '';\n  private y: string = '';\n}\nclass Derived extends Base {\n  foo() {\n    this.x = 'a'; // OK，访问受保护成员\n    this.y = 'b'; // 编译时错误，'y'不可见，因为它是私有的\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "对象字面量",
      children: "对象字面量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对象字面量是一个表达式，可用于创建类实例并提供一些初始值。它在某些情况下更方便，可以用来代替new表达式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对象字面量的表示方式是：封闭在花括号对({})中的'属性名：值'的列表。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C {\n  public n: number = 0;\n  public s: string = '';\n}\n\nlet c: C = {n: 42, s: 'foo'};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS是静态类型语言，如上述示例所示，对象字面量只能在可以推导出该字面量类型的上下文中使用。其他正确的例子如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C1 {\n  public n: number = 0;\n  public s: string = '';\n}\n\nfunction foo(c1: C1) {}\n\nlet c1: C1\n\nc1 = {n: 42, s: 'foo'};  // 使用变量的类型\nfoo({n: 42, s: 'foo'}); // 使用参数的类型\n\nfunction bar(): C1 {\n  return {n: 42, s: 'foo'}; // 使用返回类型\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "也可以在数组元素类型或类字段类型中使用："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C {\n  public n: number = 0;\n  public s: string = '';\n}\nlet cc: C[] = [{n: 1, s: 'a'}, {n: 2, s: 'b'}];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Record类型的对象字面量"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "泛型Record<K, V>用于将类型（键类型）的属性映射到另一个类型（值类型）。常用对象字面量来初始化该类型的值："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let map: Record<string, number> = {\n  'John': 25,\n  'Mary': 21\n};\n// ...\n  map['John']; // 25\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "类型K可以是字符串类型或数值类型(不包括bigint)，而V可以是任何类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface PersonInfo {\n  age: number;\n  salary: number;\n}\nlet map: Record<string, PersonInfo> = {\n  'John': { age: 25, salary: 10},\n  'Mary': { age: 21, salary: 20}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "抽象类",
      children: "抽象类"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "带有abstract修饰符的类称为抽象类。抽象类可用于表示一组更具体的概念所共有的概念。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "尝试创建抽象类的实例会导致编译错误："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "abstract class X {\n  field: number;\n  constructor(p: number) {\n    this.field = p;\n  }\n}\n\nlet x = new X(666)  // 编译时错误：不能创建抽象类的具体实例\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "抽象类的子类可以是抽象类也可以是非抽象类。抽象父类的非抽象子类可以实例化。因此，执行抽象类的构造函数和该类非静态字段的字段初始化器："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "abstract class Base {\n  private field: number;\n  constructor(p: number) {\n    this.field = p;\n  }\n}\n\nclass Derived extends Base {\n  constructor(p: number) {\n    super(p);\n  }\n}\n\nlet x = new Derived(666);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "抽象方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "带有abstract修饰符的方法称为抽象方法，抽象方法可以被声明但不能被实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "只有抽象类内才能有抽象方法，如果非抽象类具有抽象方法，则会发生编译时错误："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Y {\n  abstract method(p: string)  // 编译时错误：抽象方法只能在抽象类内。\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明引入新类型。接口是定义代码协定的常见方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任何类的实例，只要实现了特定接口，即可通过该接口实现多态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口通常包含属性和方法的声明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface Style {\n  color: string; // 属性\n}\ninterface AreaSize {\n  calculateAreaSize(): number; // 方法的声明\n  someMethod(): void;     // 方法的声明\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现接口的类示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 接口：\ninterface AreaSize {\n  calculateAreaSize(): number; // 方法的声明\n  someMethod(): void;     // 方法的声明\n}\n\n// 实现：\nclass RectangleSize implements AreaSize {\n  private width: number = 0;\n  private height: number = 0;\n  someMethod(): void {\n    console.info('someMethod called');\n  }\n  calculateAreaSize(): number {\n    this.someMethod(); // 调用另一个方法并返回结果\n    return this.width * this.height;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口属性",
      children: "接口属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口属性可以是字段、getter、setter或getter和setter组合的形式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "属性字段只是getter/setter对的便捷写法。以下表达方式是等价的："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface Style {\n  color: string;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface Style {\n  get color(): string;\n  set color(x: string);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现接口的类也可以使用以下两种方式："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface Style {\n  color: string;\n}\n\nclass StyledRectangle implements Style {\n  public color: string = '';\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface Style {\n  color: string;\n}\n\nclass StyledRectangle implements Style {\n  private _color: string = '';\n  get color(): string { return this._color; }\n  set color(x: string) { this._color = x; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口继承",
      children: "接口继承"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口可以继承其他接口，示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface Style {\n  color: string;\n}\n\ninterface ExtendedStyle extends Style {\n  width: number;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "继承接口包含被继承接口的所有属性和方法，还可以添加自己的属性和方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "抽象类和接口",
      children: "抽象类和接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "抽象类与接口都无法实例化。抽象类是类的抽象，抽象类用来捕捉子类的通用特性，接口是行为的抽象。在ArkTS语法中抽象类与接口的区别如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "一个类只能继承一个抽象类，而一个类可以实现一个或多个接口；"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Bird类继承Animal抽象类并实现多个接口CanFly、CanSwim\nclass Bird extends Animal implements CanFly, CanSwim {\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "接口中不能含有静态代码块以及静态方法，而抽象类可以有静态代码块和静态方法；"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface MyInterface {\n    // 错误：接口中不能包含静态成员\n    static staticMethod(): void;\n\n    // 错误：接口中不能包含静态代码块\n    static { console.info('static'); };\n}\n\nabstract class MyAbstractClass {\n    // 正确：抽象类可以有静态方法\n    static staticMethod(): void { console.info('static'); }\n\n    // 正确：抽象类可以有静态代码块\n    static { console.info('static initialization block'); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "抽象类里面可以有方法的实现，但是接口没有方法的实现，是完全抽象的；"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "abstract class MyAbstractClass {\n   // 正确：抽象类里面可以有方法的实现\n   func(): void { console.info('func'); }\n}\ninterface MyInterface {\n   // 错误：接口没有方法的实现，是完全抽象的\n   func(): void { console.info('func'); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "抽象类可以有构造函数，而接口不能有构造函数。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "abstract class MyAbstractClass {\n  constructor(){}  // 正确：抽象类可以有构造函数\n}\ninterface MyInterface {\n  constructor(); // 错误：接口中不能有构造函数\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "泛型类型和函数",
      children: "泛型类型和函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "泛型类型和函数使代码能够以类型安全的方式操作多种数据类型，而无需为每种类型编写重复的逻辑。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "泛型类和接口",
      children: "泛型类和接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "类和接口可以定义为泛型，将参数添加到类型定义中。如以下示例中的类型参数Element："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class CustomStack<Element> {\n  public push(e: Element):void {\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "要使用类型CustomStack，必须为每个类型参数指定类型实参："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let s = new CustomStack<string>();\ns.push('hello');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译器在使用泛型类型和函数时会确保类型安全。参见以下示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let s = new CustomStack<string>();\ns.push(55); // 将会产生编译时错误\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "泛型约束",
      children: "泛型约束"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "泛型类型的类型参数可以被限制只能取某些特定的值。例如，MyHashMap<Key, Value>这个类中的Key类型参数必须具有hash方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface Hashable {\n  hash(): number;\n}\nclass MyHashMap<Key extends Hashable, Value> {\n  public set(k: Key, v: Value) {\n    let h = k.hash();\n    // ...其他代码...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上面的例子中，Key类型扩展了Hashable，Hashable接口的所有方法都可以为key调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "泛型函数",
      children: "泛型函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用泛型函数可编写更通用的代码。比如返回数组最后一个元素的函数："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function last(x: number[]): number {\n  return x[x.length - 1];\n}\n// ...\n  last([1, 2, 3]); // 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果需要为任何数组定义相同的函数，使用类型参数将该函数定义为泛型："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function last1<T>(x: T[]): T {\n  return x[x.length - 1];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "现在，该函数可以与任何数组一起使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在函数调用中，类型实参可以显式或隐式设置："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 显式设置的类型实参\nlet res1: string = last<string>(['aa', 'bb']);\nlet res2: number = last<number>([1, 2, 3]);\n\n// 隐式设置的类型实参\n// 编译器根据调用参数的类型来确定类型实参\nlet res3: number = last([1, 2, 3]);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "泛型默认值",
      children: "泛型默认值"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "泛型类型的类型参数可以设置默认值，这样无需指定实际类型实参，直接使用泛型类型名称即可。以下示例展示了类和函数的这一特性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class SomeType {}\ninterface Interface <T1 = SomeType> { }\nclass Base <T2 = SomeType> { }\nclass Derived1 extends Base implements Interface { }\n// Derived1在语义上等价于Derived2\nclass Derived2 extends Base<SomeType> implements Interface<SomeType> { }\n\nfunction foo<T = number>(): void {\n  // ...\n}\nfoo();\n// 此函数在语义上等价于下面的调用\nfoo<number>();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "空安全",
      children: "空安全"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认情况下，ArkTS中的所有类型都不允许为空，这类似于TypeScript的(strictNullChecks)模式，但规则更严格。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，所有行都会导致编译时错误："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let x: number = null;    // 编译时错误\nlet y: string = null;    // 编译时错误\nlet z: number[] = null;  // 编译时错误\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以为空值的变量定义为联合类型T | null。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let x: number | null = null;\nx = 1;    // ok\nx = null; // ok\nif (x != null) { /* do something */ }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "非空断言运算符",
      children: "非空断言运算符"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "后缀运算符!可用于断言其操作数为非空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用于可空类型的值时，编译时类型会变为非空类型。例如，类型从T | null变为T："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class A {\n  value: number = 0;\n}\n\nfunction foo(a: A | null) {\n  a.value;   // 编译时错误：无法访问可空值的属性\n  a!.value;  // 编译通过，如果运行时a的值非空，可以访问到a的属性；如果运行时a的值为空，则发生运行时异常\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "空值合并运算符",
      children: "空值合并运算符"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "空值合并二元运算符??用于检查左侧表达式的求值是否等于null或者undefined。如果是，则表达式的结果为右侧表达式；否则，结果为左侧表达式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "换句话说，a ?? b等价于三元运算符(a != null && a != undefined) ? a : b。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在以下示例中，getNick方法返回已设置的昵称。如果未设置，则返回空字符串。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Person {\n  // ...\n  public nick: string | null = null;\n  getNick(): string {\n    return this.nick ?? '';\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "可选链",
      children: "可选链"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "访问对象属性时，如果属性是undefined或null，可选链运算符返回undefined。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Person {\n  public nick: string | null = null;\n  public spouse?: Person\n\n  setSpouse(spouse: Person): void {\n    this.spouse = spouse;\n  }\n\n  getSpouseNick(): string | null | undefined {\n    return this.spouse?.nick;\n  }\n\n  constructor(nick: string) {\n    this.nick = nick;\n    this.spouse = undefined;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(394422)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getSpouseNick的返回类型必须为string | null | undefined，因为该方法在某些情况下会返回null或undefined。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可选链可以任意长，可以包含任意数量的?.运算符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在以下示例中，如果Person实例的spouse属性不为空，并且spouse的nick属性也不为空时，输出spouse.nick。否则，输出undefined。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Person {\n  public nick: string | null = null;\n  public spouse?: Person;\n\n  constructor(nick: string) {\n    this.nick = nick;\n    this.spouse = undefined;\n  }\n}\n\nlet p: Person = new Person('Alice');\np.spouse?.nick; // undefined\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模块",
      children: "模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "程序可划分为多组编译单元或模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每个模块都有其自己的作用域，即在模块中创建的任何声明（变量、函数、类等）在该模块之外都不可见，除非它们被显式导出。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "与此相对，必须首先将另一个模块导出的变量、函数、类、接口等导入到当前模块中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导出",
      children: "导出"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以使用关键字export导出顶层的声明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "未导出的声明名称被视为私有名称，只能在声明该名称的模块中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export class Point {\n  public x: number = 0;\n  public y: number = 0;\n  constructor(x: number, y: number) {\n    this.x = x;\n    this.y = y;\n  }\n}\nexport let origin = new Point(0, 0);\nexport function Distance(p1: Point, p2: Point): number {\n  return Math.sqrt((p2.x - p1.x) * (p2.x - p1.x) + (p2.y - p1.y) * (p2.y - p1.y));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "导出默认导出的对象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Demo{\n  constructor(){\n  }\n}\nexport default new Demo();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入",
      children: "导入"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "静态导入"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导入声明用于导入从其他模块导出的实体，并在当前模块中提供其绑定。导入声明由两部分组成："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "导入路径，用于指定导入的模块；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "导入绑定，用于定义导入的模块中的可用实体集和使用形式（限定或不限定使用）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导入绑定可以有几种形式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "假设模块的路径为“./utils”，并且导出了实体“X”和“Y”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导入绑定* as A表示绑定名称“A”，通过A.name可访问从导入路径指定的模块导出的所有实体："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import * as Utils from './utils';\n// ...\nUtils.X // 表示来自Utils的X\nUtils.Y // 表示来自Utils的Y\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导入绑定{ ident1, ..., identN }表示将导出的实体与指定名称绑定，该名称可以用作简单名称："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { X, Y } from './utils';\n// ...\nX // 表示来自utils的X\nY // 表示来自utils的Y\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果标识符列表定义了ident as alias，则实体ident将绑定在名称alias下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { X as Z, Y } from './utils';\nZ // 表示来自Utils的X\nY // 表示来自Utils的Y\nX // 编译时错误：'X'不可见\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "动态导入"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用开发的有些场景中，如果希望根据条件导入模块或者按需导入模块，可以使用动态导入代替静态导入。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "import()语法被称为动态导入（dynamic import），是一种类似函数的表达式，用于动态导入模块。调用这种方式，会返回一个promise。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下例所示，import(modulePath)可以加载模块并返回一个promise，该promise resolve为一个包含其所有导出的模块对象。该表达式可以在代码中的任意位置调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Calc.ets\nexport function add(a:number, b:number):number {\n  let c = a + b;\n  console.info('Dynamic import, %d + %d = %d', a, b, c);\n  return c;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\n// ESObject是ArkTS跨语言调用场景中用于标注JS/TS对象的类型\nimport('./Calc').then((obj: ESObject) => {\n  console.info(obj.add(3, 5));\n}).catch((err: Error) => {\n  console.error('Module dynamic import error: ', err);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果在异步函数中，可以使用let module = await import(modulePath)。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// say.ets\nexport function hi() {\n  console.info('Hello');\n}\nexport function bye() {\n  console.info('Bye');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "那么，可以像下面这样进行动态导入："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async function test() {\n  let ns = await import('./say');\n  let hi = ns.hi;\n  let bye = ns.bye;\n  hi();\n  bye();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["更多的使用动态import的业务场景和使用实例见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-runtime/arkts-runtime-module/arkts-dynamic-import",
        children: "动态import"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "导入HarmonyOS SDK的开放能力"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS SDK提供的开放能力（接口）也需要在导入声明后使用。可直接导入接口模块来使用该模块内的所有接口能力，例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import UIAbility from '@ohos.app.ability.UIAbility';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从HarmonyOS NEXT Developer Preview 1版本开始引入Kit概念。SDK对同一个Kit下的接口模块进行了封装，开发者在示例代码中可通过导入Kit的方式来使用Kit所包含的接口能力。其中，Kit封装的接口模块可查看SDK目录下Kit子目录中各Kit的定义。在代码开发中，推荐通过导入Kit方式使用开放能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过导入Kit方式使用开放能力有三种方式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方式一：导入Kit下单个模块的接口能力。例如："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIAbility } from '@kit.AbilityKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方式二：导入Kit下多个模块的接口能力。例如："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIAbility, Ability, Context } from '@kit.AbilityKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方式三：导入Kit包含的所有模块的接口能力。例如："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import * as module from '@kit.AbilityKit';\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其中，“module”为别名，可自定义，然后通过该名称调用模块的接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(229052)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方式三可能会导入过多无需使用的模块，导致编译后的HAP包太大，占用过多资源，请谨慎使用。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "顶层语句",
      children: "顶层语句"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "顶层语句是指在模块最外层编写的语句，不被任何函数、类或块级作用域包裹。这些语句包括变量声明、函数声明和表达式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "关键字",
      children: "关键字"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "this",
      children: "this"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关键字this只能在类的实例方法中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class A {\n  private count: string = 'a';\n  m(i: string): void {\n    this.count = i;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用限制："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持this类型"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持在函数和类的静态方法中使用this"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class A {\n  n: number = 0;\n  f1(arg1: this) {} // 编译时错误，不支持this类型\n  static f2(arg1: number) {\n    this.n = arg1;  // 编译时错误，不支持在类的静态方法中使用this\n  }\n}\n\nfunction foo(arg1: number) {\n  this.n = i;       // 编译时错误，不支持在函数中使用this\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关键字this的指向:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用实例方法的对象"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "正在构造的对象"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注解",
      children: "注解"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注解（Annotation）是一种语言特性，它通过添加元数据来改变应用声明的语义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注解的声明和使用如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 注解的声明：\n@interface ClassAuthor {\n  authorName: string\n}\n\n// 注解的使用：\n@ClassAuthor({authorName: \"Bob\"})\nclass MyClass {\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用@interface声明注解。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "注解ClassAuthor需要将元信息添加到类声明中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "注解必须放置在声明之前。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "注解可以包含上述示例中所示的参数。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于要使用的注解，其名称必须以符号@（例如：@MyAnno）为前缀。符号@和名称之间不允许有空格和行分隔符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ClassAuthor({authorName: \"Bob\"}) // 编译错误：注解需要'@'为前缀\n@ ClassAuthor({authorName: \"Bob\"}) // 编译错误：符号`@`和名称之间不允许有空格和行分隔符\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果在使用位置无法访问注解名称，则会发生编译错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注解声明可以导出并在其他文件中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多个注解可以应用于同一个声明（注解间的先后顺序不影响使用）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@MyAnno()\n@ClassAuthor({authorName: \"John Smith\"})\nclass MyClass1 {\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注解不是Typescript中的特性，只能在.ets/.d.ets文件中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(666335)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用开发中，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration/ide-hvigor-build-har#section19788284410",
        children: "release模式下构建"
      }), "源码HAR，并同时", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation",
        children: "开启混淆"
      }), "时，由于编译产物为JS文件，而在JS中没有注解的实现机制，因此会在编译过程中被移除，导致无法通过注解实现AOP插桩。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为避免因此引起的功能异常，禁止在JS HAR(编译产物中存在JS的HAR包)中使用注解。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果需要在release模式并且开启混淆的情况下构建含有注解的HAR包，可以构建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration/ide-hvigor-build-har#section16598338112415",
        children: "字节码HAR"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "用户自定义注解",
      children: "用户自定义注解"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "从API version 20及之后版本，支持用户自定义注解。"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "用户自定义注解的声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户自定义注解的定义与interface的定义类似，其中的interface关键字以符号@为前缀。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注解字段仅限于下面列举的类型："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "number"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "boolean"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "string"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "枚举"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以上类型的数组"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(663013)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果使用其他类型用作注解字段的类型，则会发生编译错误。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "注解字段类型不支持bigint。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注解字段的默认值必须使用常量表达式来指定。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常量表达式的场景如下所示："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "数字字面量"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "布尔字面量"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "字符串字面量"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "枚举值（需要在编译时确定值）"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以上常量组成的数组"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(162541)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果枚举值不能在编译时确定，会编译报错。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// a.ts\nexport enum X {\n  x = foo(); // x不是编译时能确定的常量\n}\n\n// b.ets\nimport {X} from './a';\n\n@interface Position {\n  data: number = X.x; // 编译错误：注解字段的默认值必须使用常量表达式\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注解必须定义在顶层作用域（top-level），否则会出现编译报错。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注解的名称不能与注解定义所在作用域内可见的其他实体名称相同，否则会出现编译报错。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注解不支持类型Typescript中的合并，否则会出现编译报错。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "namespace ns {\n  @interface MetaInfo { // 编译错误：注解必须定义在顶层作用域\n    // ...\n  }\n}\n\n@interface Position {\n  // ...\n}\n\nclass Position { // 编译错误：注解的名称不能与注解定义所在作用域内可见的其他实体名称相同\n  // ...\n}\n\n@interface ClassAuthor {\n  name: string;\n}\n\n@interface ClassAuthor { // 编译错误：注解的名称不能与注解定义所在作用域内可见的其他实体名称相同\n  data: string;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注解不是类型，把注解当类型使用时会出现编译报错（例如：对注解使用类型别名）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@interface Position {}\ntype Pos = Position; // 编译错误：注解不是类型\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注解不支持在类的getter和setter方法中添加，若添加注解会编译报错。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@interface ClassAuthor {\n  authorName: string;\n}\n\n@ClassAuthor({authorName: 'John Smith'})\nclass MyClass {\n  private _name: string = 'Bob';\n\n  @ClassAuthor({authorName: 'John Smith'}) // 编译错误：注解不支持在类的getter和setter方法添加\n  get name() {\n    return this._name;\n  }\n\n  @ClassAuthor({authorName: 'John Smith'}) // 编译错误：注解不支持在类的getter和setter方法添加\n  set name(authorName: string) {\n    this._name = authorName;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "用户自定义注解的使用"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注解声明示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@interface ClassPreamble {\n  authorName: string;\n  revision: number = 1;\n}\n@interface MyAnno {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前仅允许对class declarations和method declarations使用注解，对类和方法可以同时使用同一个注解。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注解用法示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ClassPreamble({authorName: \"John\", revision: 2})\nclass C1 {\n  // ...\n}\n\n\n@ClassPreamble({authorName: \"Bob\"}) // revision的默认值为1\nclass C2 {\n  // ...\n}\n\n@MyAnno() // 对类和方法可以同时使用同一个注解\nclass C3 {\n  @MyAnno()\n  foo() {}\n  @MyAnno()\n  static bar() {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注解中的字段顺序不影响使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ClassPreamble1({authorName: \"John\", revision: 2})\n// ...\n// the same as:\n@ClassPreamble1({revision: 2, authorName: \"John\"})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用注解时，必须给所有没有默认值的字段赋值，否则会发生编译错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(22798)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "赋值应当与注解声明的类型一致，所赋的值与注解字段默认值的要求一样，只能使用常量表达式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ClassPreamble() // 编译错误：authorName字段未定义\nclass C1 {\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果注解中定义了数组类型的字段，则使用数组字面量来设置该字段的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@interface ClassPreamble2 {\n  authorName: string;\n  revision: number = 1;\n  reviewers: string[];\n}\n\n@ClassPreamble2(\n{\n  authorName: \"Alice\",\n  reviewers: [\"Bob\", \"Clara\"]\n}\n)\nclass C0 {\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果不需要定义注解字段，可以省略注解名称后的括号。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@MyAnno\nclass C4 {\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "导入和导出注解"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注解也可以被导入导出。针对导出，当前仅支持在定义时的导出，即export @interface的形式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export @interface MyAnno1 {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对导入，当前仅支持import {}和import * as两种方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// a.ets\nexport @interface MyAnno2 {}\nexport @interface ClassAuthor2 {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// b.ets\nimport { MyAnno2 } from './a';\nimport * as ns from './a';\n// ...\n@MyAnno2\n@ns.ClassAuthor2\nclass C {\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不允许在import中对注解进行重命名。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { MyAnno as Anno } from './a'; // 编译错误：不允许在import中对注解进行重命名\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不允许对注解使用任何其他形式的 import/export，这会导致编译报错。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由于注解不是类型，因此禁止使用type符号进行导入和导出。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import type { MyAnno } from './a'; // 编译错误：注解不允许使用'type'符号进行导入和导出\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果仅从模块导入注解，则不会触发模块的副作用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// a.ets\nexport @interface Anno {}\n\nexport @interface ClassAuthor1 {}\n\nconsole.info('hello');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// b.ets\nimport { MyAnno2 } from './a';\nimport * as ns from './a';\n// 仅引用了Anno注解，不会导致a.ets的console.info执行\nclass X {\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: ".d.ets文件中的注解"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注解可以出现在.d.ets文件中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在.d.ets文件中用环境声明（ambient declaration）来声明注解。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ambientAnnotationDeclaration:\n  'declare' userDefinedAnnotationDeclaration\n  ;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// a.d.ets\nexport declare @interface ClassAuthor3 {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述声明中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不会引入新的注解定义，而是提供注解的类型信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "注解需定义在其他源代码文件中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "注解的环境声明和实现需要完全一致，包括字段的类型和默认值。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// a.d.ets\nexport declare @interface NameAnno{name: string = \"\"}\n\n// a.ets\nexport @interface NameAnno{name: string = \"\"} // ok\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "环境声明的注解和class类似，也可以被import使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// a.d.ets\nexport declare @interface MyAnno {}\n\n// b.ets\nimport { MyAnno } from './a';\n\n@MyAnno\nclass C {\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "编译器自动生成的.d.ets文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当编译器根据ets代码自动生成.d.ets文件时，存在以下2种情况。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当注解定义被导出时，源代码中的注解定义会在.d.ets文件中保留。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// a.ets\nexport @interface ClassAuthor5 {}\n\n@interface MethodAnno { // 没导出\n  data: number;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// a.d.ets\nexport declare @interface ClassAuthor3 {}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当下面所有条件成立时，源代码中实体的注解实例会在.d.ets文件中保留。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "2.1 注解的定义被导出（import的注解也算作被导出）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "2.2 如果实体是类，则类被导出。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "2.3 如果实体是方法，则类被导出，并且方法不是私有方法。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// a.ets\nimport { ClassAuthor } from './author';\n\nexport @interface MethodAnno {\n  data: number = 0;\n}\n\n@ClassAuthor\nclass MyClass {\n  @MethodAnno({data: 123})\n  foo() {}\n\n  @MethodAnno({data: 456})\n  private bar() {}\n}\n\n// a.d.ets 编译器生成的声明文件\nimport {ClassAuthor} from \"./author\";\n\nexport declare @interface MethodAnno {\n  data: number = 0;\n}\n\n@ClassAuthor\nexport declare class MyClass {\n  @MethodAnno({data: 123})\n  foo(): void;\n\n  bar; // 私有方法不保留注解\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发者生成的.d.ets文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者生成的.d.ets文件中的注解信息不会自动应用到实现的源代码中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// b.d.ets 开发者生成的声明文件\n@interface ClassAuthor {}\n\n@ClassAuthor // 声明文件中有注解\nclass C {\n  // ...\n}\n\n// b.ets 开发者对声明文件实现的源代码\n@interface ClassAuthor {}\n\n// 实现文件中没有注解\nclass C {\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在最终编译产物中，class C没有注解。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "重复注解和继承"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同一个实体不能重复使用同一注解，否则会导致编译错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@MyAnno({name: \"123\", value: 456})\n@MyAnno({name: \"321\", value: 654}) // 编译错误：不允许重复注释\nclass C {\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "子类不会继承基类的注解，也不会继承基类方法的注解。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "注解和抽象类、抽象方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持对抽象类或抽象方法使用注解，否则将导致编译错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@MyAnno // 编译错误：不允许在抽象类和抽象方法上使用注解\nabstract class C {\n  @MyAnno\n  abstract foo(): void; // 编译错误：不允许在抽象类和抽象方法上使用注解\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkui支持",
      children: "ArkUI支持"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本节演示ArkTS为创建图形用户界面（GUI）程序提供的机制。ArkUI基于TypeScript提供了一系列扩展能力，以声明式地描述应用程序的GUI以及GUI组件间的交互。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkui示例",
      children: "ArkUI示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-mvvm#%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B",
        children: "MVVM代码示例"
      }), "提供了一个完整的基于ArkUI的应用程序，以展示其GUI编程功能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["有关ArkUI功能的更多详细信息，请参见ArkUI", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-basic-syntax-overview",
        children: "基本语法概述"
      }), "。"]
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
663013(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
394422(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
162541(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
22798(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
666335(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

},
229052(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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