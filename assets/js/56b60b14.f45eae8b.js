"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["850088"], {
131311(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_learning_arkts_arkts_for_other_languages_getting_started_with_arkts_for_swift_programmers_getting_started_with_arkts_for_swift_programmers_md_56b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-learning-arkts-arkts-for-other-languages-getting-started-with-arkts-for-swift-programmers-getting-started-with-arkts-for-swift-programmers-md-56b.json
var site_docs_learning_arkts_arkts_for_other_languages_getting_started_with_arkts_for_swift_programmers_getting_started_with_arkts_for_swift_programmers_md_56b_namespaceObject = JSON.parse('{"id":"learning-arkts/arkts-for-other-languages/getting-started-with-arkts-for-swift-programmers/getting-started-with-arkts-for-swift-programmers","title":"从Swift到ArkTS的迁移指导","description":"对于熟悉Swift的开发者而言，ArkTS作为新的开发语言，带来了全新的开发体验与机遇。ArkTS在语法和编程范式上不仅继承了现代语言的特性，还针对生态进行了深度优化。理解Swift与ArkTS的差异和共性，能够帮助开发者快速上手应用开发，避开常见的编程误区。","source":"@site/docs/learning-arkts/arkts-for-other-languages/getting-started-with-arkts-for-swift-programmers/getting-started-with-arkts-for-swift-programmers.md","sourceDirName":"learning-arkts/arkts-for-other-languages/getting-started-with-arkts-for-swift-programmers","slug":"/learning-arkts/arkts-for-other-languages/getting-started-with-arkts-for-swift-programmers/","permalink":"/harmonyos-docs-site/learning-arkts/arkts-for-other-languages/getting-started-with-arkts-for-swift-programmers/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"从Swift到ArkTS的迁移指导","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/getting-started-with-arkts-for-swift-programmers","kit":"getting-started","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"从Java到ArkTS的迁移指导","permalink":"/harmonyos-docs-site/learning-arkts/arkts-for-other-languages/getting-started-with-arkts-for-java-programmers/"},"next":{"title":"HarmonyOS术语","permalink":"/harmonyos-docs-site/glossary/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/learning-arkts/arkts-for-other-languages/getting-started-with-arkts-for-swift-programmers/getting-started-with-arkts-for-swift-programmers.md


const frontMatter = {
	title: '从Swift到ArkTS的迁移指导',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/getting-started-with-arkts-for-swift-programmers',
	kit: 'getting-started',
	last_updated: '2026-04-22'
};
const contentTitle = '从Swift到ArkTS的迁移指导';

const assets = {

};



const toc = [{
  "value": "探索Swift与ArkTS的差异",
  "id": "探索swift与arkts的差异",
  "level": 2
}, {
  "value": "基础语法",
  "id": "基础语法",
  "level": 2
}, {
  "value": "变量声明",
  "id": "变量声明",
  "level": 3
}, {
  "value": "基础数据类型",
  "id": "基础数据类型",
  "level": 3
}, {
  "value": "复杂数据类型",
  "id": "复杂数据类型",
  "level": 3
}, {
  "value": "函数与闭包",
  "id": "函数与闭包",
  "level": 3
}, {
  "value": "基础类库",
  "id": "基础类库",
  "level": 3
}, {
  "value": "语言结构",
  "id": "语言结构",
  "level": 2
}, {
  "value": "模块与包管理",
  "id": "模块与包管理",
  "level": 3
}, {
  "value": "类与命名空间特性",
  "id": "类与命名空间特性",
  "level": 3
}, {
  "value": "异步编程模型",
  "id": "异步编程模型",
  "level": 3
}, {
  "value": "this的绑定",
  "id": "this的绑定",
  "level": 3
}, {
  "value": "类型系统",
  "id": "类型系统",
  "level": 2
}, {
  "value": "类型推断与可选类型",
  "id": "类型推断与可选类型",
  "level": 3
}, {
  "value": "联合类型",
  "id": "联合类型",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "从swift到arkts的迁移指导",
        children: "从Swift到ArkTS的迁移指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于熟悉Swift的开发者而言，ArkTS作为新的开发语言，带来了全新的开发体验与机遇。ArkTS在语法和编程范式上不仅继承了现代语言的特性，还针对生态进行了深度优化。理解Swift与ArkTS的差异和共性，能够帮助开发者快速上手应用开发，避开常见的编程误区。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文档基于Swift语言对ArkTS语言进行对比和介绍。如需更详细的了解，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/learning-arkts/introduction-to-arkts",
        children: "ArkTS语言介绍"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "探索swift与arkts的差异",
      children: "探索Swift与ArkTS的差异"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文档将帮助Swift开发者梳理在转向ArkTS开发过程中会遇到的误解和陷阱。ArkTS的语法、类型系统以及应用开发模式与Swift存在差异，在学习过程中需特别注意这些关键区别。建议先掌握ArkTS的基础语法和运行时行为，再重点对比其与Swift的不同之处。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基础语法",
      children: "基础语法"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "变量声明",
      children: "变量声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 类型注解（类似Swift）。\nlet age: number = 20;\nconst program: string = 'ArkTS';\n\n// 类型推断（类似Swift的局部变量类型推断）。\nlet version = 5.0;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "基础数据类型",
      children: "基础数据类型"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Swift类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ArkTS类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "示例代码"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "核心差异说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "let isDone: boolean = false;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义方式相似，均用于逻辑判断。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Int8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "let count: number = 10;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swift的Int8为8位整数。  ArkTS统一用number表示小整数类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Int16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "let count: number = 10;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swift的Int16为16位整数。  ArkTS统一用number表示小整数类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Int32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "let count: number = 10;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swift的Int32为32位整数。  ArkTS的number是双精度浮点型，可存储整数和浮点数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Int64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "let largeNum: number = 9007199254740991;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swift需处理大整数。  ArkTS用同一类型表示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "let pi: number = 3.14;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swift需显式指定Float。  ArkTS直接使用number。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Double"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "let e: number = 2.71828;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swift区分Float和Double。  ArkTS统一用number表示所有数值类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Character"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "let c: string = 'a';"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS无Character类型，单字符场景使用string。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "let message: string = 'Hello';"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义方式类似，但ArkTS字符串支持模板字面量和更灵活的操作。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "复杂数据类型",
      children: "复杂数据类型"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Swift类型体系"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ArkTS类型体系"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ArkTS示例代码"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "核心差异说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "数组"
              })
            }), "：var arr: [Int] = [1, 2, 3]"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Array"
              })
            }), "：let arr: number[] = [1, 2, 3];"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "// 动态长度语法糖  let dynamicArr = [4, 5, 6];"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swift数组长度可变。  ArkTS的Array是动态数组，支持push/pop等操作；可直接用[]简化初始化。数组不会越界，当数组下标超过数组长度时会得到undefined。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "集合 - Set"
              })
            }), "：var mySet: Set<String> = [\"a\", \"b\"]"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Set"
              })
            }), "：let mySet: Set<string> = new Set([\"a\", \"b\"]);"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mySet.add('c'); // 向集合内添加元素  for (const item of mySet) {...); // 迭代访问"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swift集合通过类型声明。  ArkTS中集合的类型较灵活，适合动态场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "字典 - Dictionary"
              })
            }), "：var dict: [String: Int] = [\"key\": 1]"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Map"
              })
            }), "：let map: Map<string, number> = new Map();"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "map.set('key', 1); // 添加键值对  let value = map.get('key'); // 获取值  map.has('key'); // 检查键是否存在"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swift的Dictionary需显式声明类型。  ArkTS的Map操作更直接，支持链式调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "协议"
              })
            }), "：protocol Shape { func area() -> Double }"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "interface"
              })
            }), "：interface Shapes { area(): number; }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "class Rectangles implements Shapes {  public width: number = 0;  public height: number = 0;  area(): number { return this.width * this.height; }  }"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "语法结构相似，但ArkTS接口实现无需显式修饰符，且支持可选属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类"
              })
            }), "：class Circle: Shape { /* 类定义 */ }"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "class"
              })
            }), "：class Circles implements Shape { /* 类定义 */ }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "class Circles {  radius: number;  constructor(radius: number = 10) { // 支持参数默认值  this.radius = radius;  }  }"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS类支持属性默认值、可选参数，语法更简洁。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "枚举"
              })
            }), "：enum Color { case red, green, blue }"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "enum"
              })
            }), "：enum Colors { Red, Green, Blue }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "enum Colors { Red = 1, Green, Blue };  let color = Colors.Green; // 值为2（自动递增）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基本概念一致，但ArkTS枚举不支持Swift中的自定义构造函数和方法，仅支持简单的数值或字符串枚举。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数与闭包",
      children: "函数与闭包"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Swift和ArkTS在函数方面语法趋同，细节上有差别。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相似点：常规函数定义和箭头函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS示例："
        })
      }), " 函数定义"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 常规函数定义，与Swift类似。\nfunction add(x: number, y: number): number {\n  return x + y;\n}\n// ...\n  // 简洁的箭头函数形式，类似Swift的闭包语法。\n  const multiply = (a: number, b: number): number => a * b;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "差异点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS提供类型声明层面的多态，仅用于类型检查和文档提示，实际只有一个实现函数。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ArkTS示例："
            })
          }), " ArkTS函数重载"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function foo(x: number): void;            /*  第一个函数定义。  */\nfunction foo(x: string): void;            /*  第二个函数定义。  */\nfunction foo(x: number | string): void {  /*  函数实现。       */\n}\n// ...\n  foo(123);     //  OK，使用第一个定义。\n  foo('aa'); // OK，使用第二个定义。\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS可选参数使用?，如function foo(name?: string)，而非Swift的默认值语法。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function foo2(name?: string) {}  /*  name为可选参数。  */\n// ...\n  foo2('hello');     //  OK，传入name参数。\n  foo2();     //  OK，不传name参数。\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "基础类库",
      children: "基础类库"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS基础类库和容器类库增强了语言的基础功能，包括高精度浮点运算、二进制Buffer、XML生成解析转换和多种容器库等能力，协助开发者简化开发工作，提升开发效率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "语言结构",
      children: "语言结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Swift是一种融合面向对象、函数式和协议导向范式的现代语言，强调安全性、性能与简洁性，适用于跨平台开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS融合声明式UI、函数式和面向对象范式，通过响应式系统和跨设备适配能力，高效构建多端一致的高性能应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "模块与包管理",
      children: "模块与包管理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Swift中，开发者使用模块（module）来组织代码，通过import语句引入其他模块中的类。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS也有自己的模块和包管理机制，同样通过import语句引入其他模块中的功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 引入ArkTS标准库中的ArkTS容器集。\n\nimport { collections } from '@kit.ArkTS';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于ArkTS的模块系统更注重模块化开发和代码复用，能够更便捷地管理不同功能模块之间的依赖关系，所以在使用方式上，与Swift的模块管理会有所区别。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类与命名空间特性",
      children: "类与命名空间特性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS的类系统在语法层面与Swift相似，但在高阶特性上展现出更现代的设计理念。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "特性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Swift实现方式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ArkTS实现方式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "命名空间组织"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "嵌套结构/内部类"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "namespace关键字或模块文件结构。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持显式命名空间与模块化组织的混合模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类继承机制"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于类的继承体系"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于原型链的继承机制。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "语法相似但底层机制不同。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类成员可见性"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "public/private/internal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同Swift，但支持模块级可见性控制。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "增加了模块导出控制的维度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命名空间管理"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS支持显式命名空间（namespace）和模块化组织。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "namespace Models {\n  export class User {\n    // 实现细节。\n    // ...\n  }\n\n  export interface Repository {\n    // 接口定义。\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相比Swift的模块+内部类组合，ArkTS的命名空间能更直观地实现代码分层。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "异步编程模型",
      children: "异步编程模型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "单线程vs多线程"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Swift使用async/await + Task实现异步编程，使用多线程和DispatchQueue实现并发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS基于事件循环，使用Promise/async/await处理异步，避免阻塞主线程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误处理"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Swift的同步代码通过try/catch捕获异常，异步异常需特殊处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS中未捕获的Promise错误可能导致静默失败，需显式使用try/catch或.catch。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "this的绑定",
      children: "this的绑定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Swift的方法中，self始终指向类的实例对象，由代码结构在编译时确定。在方法中，self指向调用该方法的对象实例，无法通过调用方式改变self的指向。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Swift示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class MyClass {\n  func method() {\n    print(self) // 始终指向MyClass的实例。\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS的this指向取决于函数调用时的上下文。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class A {\n  bar: string = 'I am A';\n\n  foo() {\n    console.info(this.bar);\n  }\n}\n\nclass B {\n  bar: string = 'I am B';\n\n  callFunction(fn: () => void) {\n    fn();\n  }\n}\n\nfunction callFunction(fn: () => void) {\n  fn();\n}\n// ...\n  let a: A = new A();\n  let b: B = new B();\n\n  // callFunction(a.foo); // 程序crash。this的上下文发生了变化。\n  // b.callFunction(a.foo); // 程序crash。this的上下文发生了变化。\n  b.callFunction(a.foo.bind(b)) // 输出'I'm B'。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "类型系统",
      children: "类型系统"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS与Swift的类型系统也存在差异。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型推断与可选类型",
      children: "类型推断与可选类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相较于Swift需要显式类型声明和严格的nil检查，ArkTS的类型系统提供了更灵活的表达方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS具有强大的类型推断能力，编译器能够根据上下文自动推断出变量的类型，所以很多时候不需要显式声明变量的类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let num = 10; // 编译器自动推断num为number类型。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface Person {\n  name: string;\n  age?: number;  // age是可选属性。\n}\n\nconst person: Person = {\n  name: 'Alice',\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "联合类型",
      children: "联合类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "联合类型这种类型组合能力为复杂场景提供了更强的表达力，是ArkTS类型系统的重要创新点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS支持联合类型（|）。联合类型表示一个值可以是多种类型中的一种。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 联合类型示例。\n\nlet value: string | number;\nvalue = 'hello';\nvalue = 123;\n"
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