"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["343314"], {
247676(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_learning_arkts_arkts_for_other_languages_getting_started_with_arkts_for_java_programmers_getting_started_with_arkts_for_java_programmers_md_887_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-learning-arkts-arkts-for-other-languages-getting-started-with-arkts-for-java-programmers-getting-started-with-arkts-for-java-programmers-md-887.json
var site_docs_learning_arkts_arkts_for_other_languages_getting_started_with_arkts_for_java_programmers_getting_started_with_arkts_for_java_programmers_md_887_namespaceObject = JSON.parse('{"id":"learning-arkts/arkts-for-other-languages/getting-started-with-arkts-for-java-programmers/getting-started-with-arkts-for-java-programmers","title":"从Java到ArkTS的迁移指导","description":"对于熟悉Java的开发者而言，ArkTS作为新的开发语言，带来了全新的开发体验与机遇。ArkTS在语法和编程范式上不仅继承了现代语言的特性，还针对生态进行了深度优化。理解Java与ArkTS的差异和共性，能够帮助开发者快速上手应用开发，避开常见的编程误区。","source":"@site/docs/learning-arkts/arkts-for-other-languages/getting-started-with-arkts-for-java-programmers/getting-started-with-arkts-for-java-programmers.md","sourceDirName":"learning-arkts/arkts-for-other-languages/getting-started-with-arkts-for-java-programmers","slug":"/learning-arkts/arkts-for-other-languages/getting-started-with-arkts-for-java-programmers/","permalink":"/harmonyos-docs-site/learning-arkts/arkts-for-other-languages/getting-started-with-arkts-for-java-programmers/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"从Java到ArkTS的迁移指导","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/getting-started-with-arkts-for-java-programmers","kit":"getting-started","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkTS高性能编程实践","permalink":"/harmonyos-docs-site/learning-arkts/arkts-high-performance-programming/"},"next":{"title":"从Swift到ArkTS的迁移指导","permalink":"/harmonyos-docs-site/learning-arkts/arkts-for-other-languages/getting-started-with-arkts-for-swift-programmers/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/learning-arkts/arkts-for-other-languages/getting-started-with-arkts-for-java-programmers/getting-started-with-arkts-for-java-programmers.md


const frontMatter = {
	title: '从Java到ArkTS的迁移指导',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/getting-started-with-arkts-for-java-programmers',
	kit: 'getting-started',
	last_updated: '2026-04-22'
};
const contentTitle = '从Java到ArkTS的迁移指导';

const assets = {

};



const toc = [{
  "value": "探索Java与ArkTS的差异",
  "id": "探索java与arkts的差异",
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
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "函数重载",
  "id": "函数重载",
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
        id: "从java到arkts的迁移指导",
        children: "从Java到ArkTS的迁移指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于熟悉Java的开发者而言，ArkTS作为新的开发语言，带来了全新的开发体验与机遇。ArkTS在语法和编程范式上不仅继承了现代语言的特性，还针对生态进行了深度优化。理解Java与ArkTS的差异和共性，能够帮助开发者快速上手应用开发，避开常见的编程误区。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文档基于Java语言对ArkTS语言进行对比和介绍。如需更详细的了解，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/learning-arkts/introduction-to-arkts",
        children: "ArkTS语言介绍"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "探索java与arkts的差异",
      children: "探索Java与ArkTS的差异"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文档将帮助Java开发者梳理在转向ArkTS开发过程中会遇到的误解和陷阱。ArkTS的语法、类型系统以及应用开发模式与Java存在差异，在学习过程中需特别注意这些关键区别。建议先掌握ArkTS的基础语法和运行时行为，再重点对比其与Java的不同之处。"
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
        children: "// 类型注解（类似Java）。\nlet age: number = 20;\nconst program: string = 'ArkTS';\n\n// 类型推断（类似Java的局部变量类型推断）。\nlet version = 5.0;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "基础数据类型",
      children: "基础数据类型"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Java类型"
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "let isDone: boolean = false;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义方式相似，均用于逻辑判断，无运行时装箱拆箱操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "byte"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "let b: number = 100;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java中的byte为8位整数。  ArkTS统一用number表示小整数类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "short"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "let s: number = 300;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java中的short为16位整数。  ArkTS统一用number表示小整数类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "let count: number = 10;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java的int为32位整数。  ArkTS的number是双精度浮点型，可存储整数和浮点数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "let largeNum: number = 9007199254740991;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java需加L后缀（如9007199254740991L）。  ArkTS用同一类型表示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "let pi: number = 3.14;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java需加f后缀（如3.14f）。  ArkTS直接使用number，无需特殊标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "double"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "let e: number = 2.71828;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java区分float和double。  ArkTS统一用number表示所有数值类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "let c: string = 'a';"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS无char类型，单字符场景使用string。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "let message: string = 'Hello';"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义方式类似，但ArkTS字符串支持模板字面量（如${name}）和更灵活的操作。"
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
            children: "Java类型体系"
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
            }), "：int[] arr = new int[5];"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Array"
              })
            }), "：let arr: Array<number> = [1, 2, 3];"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "// 固定长度初始化（类似Java）  let fixedArr: number[] = new Array<number>(5);  // 动态长度语法糖  let dynamicArr = [4, 5, 6];"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java数组长度固定。  ArkTS的Array是动态数组，支持push/pop等操作；可直接用[]简化初始化。数组不会越界，当数组下标超过数组长度时会得到undefined。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "集合 - List"
              })
            }), "：List<String> list = new ArrayList<>();"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Array"
              })
            }), "：let strList: Array<string> = ['a', 'b'];"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "strList.push('c'); // 向数组末尾添加元素  let firstItem = strList[0]; // 索引访问"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java集合通过接口（如List）与实现类（如ArrayList）分离。  ArkTS数组兼具基础类型与集合特性，语法更简洁。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "集合 - Map"
              })
            }), "：Map<String, Integer> map = new HashMap<>();"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Map"
              })
            }), "：let map: Map<string, number> = new Map();"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "map.set('key', 1); // 添加键值对  let value = map.get('key'); // 获取值  map.has('key'); // 检查键是否存在"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java的Map需显式声明泛型类型。  ArkTS的Map操作更直接，支持链式调用（如map.set('a', 1).set('b', 2)）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "接口"
              })
            }), "：interface Shape { double area(); }"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "interface"
              })
            }), "：interface Shapes { area(): number; }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "class Rectangles implements Shapes {  public width: number = 0;  public height: number = 0;  area(): number { return this.width * this.height; }  }"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "语法结构相似，但ArkTS接口实现无需显式修饰符（如Java的public），且支持可选属性（如name?: string）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类"
              })
            }), "：class Circle implements Shape { /* 类定义 */ }"]
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
            }), "：enum Color { RED, GREEN, BLUE; }"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "enum"
              })
            }), "：enum Colors { Red, Green, Blue }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "enum Colors { Red = 1, Green, Blue };  let color = Colors.Green; // 值为2（自动递增）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基本概念一致，但ArkTS枚举不支持Java中的自定义构造函数和方法，仅支持简单的数值或字符串枚举。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 常规函数定义。\nfunction add(x: number, y: number): number {\n  return x + y;\n}\n// ...\n  // 简洁的箭头函数形式。\n  const multiply = (a: number, b: number): number => a * b;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数重载",
      children: "函数重载"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Java在编译时多态，允许同一类中存在多个同名方法，通过参数列表（数量、类型、顺序）来进行区分。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过多个具体方法实现重载，每个重载方法有独立的方法体。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参数列表（类型、数量、顺序）必须不同，返回值类型可以相同或不同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "编译时根据参数类型选择具体方法。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Java示例："
        })
      }), " Java函数重载"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Example {\n    // 方法1：接受int参数。\n    void print(int value) {\n        System.out.println(\"Integer: \" + value);\n    }\n\n    // 方法2：接受String参数。\n    void print(String value) {\n        System.out.println(\"String: \" + value);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS提供类型声明层面的多态，仅用于类型检查和文档提示，实际只有一个实现函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过类型声明重载签名，但仅有一个实现函数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "实现函数需兼容所有重载签名，通常需要在函数体内手动判断参数类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型检查器根据调用时的参数匹配声明，但运行时只有单一函数。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS示例："
        })
      }), " ArkTS函数重载"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function foo(x: number): void;            /* 第一个函数定义 */\nfunction foo(x: string): void;            /* 第二个函数定义 */\nfunction foo(x: number | string): void {  /* 函数实现 */\n}\n// ...\n  foo(123);     //  OK，使用第一个定义。\n  foo('aa'); // OK，使用第二个定义。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "基础类库",
      children: "基础类库"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS基础类库和容器类库增强了语言的基础功能，包括高精度浮点运算、二进制Buffer、XML生成解析转换和多种容器库等能力，协助开发者简化开发工作，提升开发效率。详细介绍可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-utils/arkts-utils-overview",
        children: "ArkTS基础类库概述"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "语言结构",
      children: "语言结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Java是一种典型的面向对象的编程语言，即一切围绕类和对象展开。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS采用更为灵活的语言结构，融合了面向对象编程和函数式编程等多种范式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "模块与包管理",
      children: "模块与包管理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Java中，开发者使用包（package）来组织代码，通过import语句引入其他包中的类。ArkTS也有自己的模块和包管理机制，同样通过import语句引入其他模块中的功能。"
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
      children: "由于ArkTS的模块系统更注重模块化开发和代码复用，能够更便捷地管理不同功能模块之间的依赖关系，所以在使用方式上，与Java的包管理会有所区别。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类与命名空间特性",
      children: "类与命名空间特性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS的类系统在语法层面与Java相似，但在高阶特性上展现出更现代的设计理念。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "特性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Java实现方式"
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
            children: "静态嵌套类/内部类"
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
            children: "public/private/protected"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["同Java，但支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-runtime/arkts-runtime-module/module-principle",
              children: "模块级"
            }), "可见性控制。"]
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
      children: "相比Java的package+static class组合，ArkTS的命名空间能更直观地实现代码分层。"
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
      children: "Java依赖多线程和Future/CompletableFuture实现并发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS基于事件循环，使用Promise/async/await处理异步，避免阻塞主线程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误处理"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Java的同步代码通过try/catch捕获异常，异步异常需特殊处理（如Future.get()）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS中未捕获的Promise错误可能导致静默失败，需显式使用try/catch或.catch()。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "this的绑定",
      children: "this的绑定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Java的this始终指向当前类的实例对象，由代码结构在编译时确定。在方法中，this指向调用该方法的对象实例，无法通过调用方式改变this的指向。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Java示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class MyClass {\n  void method() {\n    System.out.println(this); // 始终指向MyClass的实例。\n  }\n}\n"
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
        children: "class A {\n  bar: string = 'I am A';\n\n  foo() {\n    console.info(this.bar);\n  }\n}\n\nclass B {\n  bar: string = 'I am B';\n\n  callFunction(fn: () => void) {\n    fn();\n  }\n}\n\nfunction callFunction(fn: () => void) {\n  fn();\n}\n// ...\n  let a: A = new A();\n  let b: B = new B();\n\n  // callFunction(a.foo); // 程序crash。this的上下文发生了变化。\n  // b.callFunction(a.foo); // 程序crash。this的上下文发生了变化。\n  b.callFunction(a.foo.bind(b)) // 输出'I am B'。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "类型系统",
      children: "类型系统"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS与Java的类型系统也存在差异。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型推断与可选类型",
      children: "类型推断与可选类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相较于Java需要显式类型声明和严格的null检查，ArkTS的类型系统提供了更灵活的表达方式。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同时，ArkTS支持可选类型，通过在类型后面添加问号（?）来表示该变量可以为null或undefined。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface Person {\n  name: string;\n  age?: number;  // age 是可选属性。\n}\n\nconst person: Person = {\n  name: 'Alice',\n};\n"
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