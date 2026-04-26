"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["532794"], {
196152(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_learning_arkts_arkts_coding_style_guide_arkts_coding_style_guide_md_e4d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-learning-arkts-arkts-coding-style-guide-arkts-coding-style-guide-md-e4d.json
var site_docs_learning_arkts_arkts_coding_style_guide_arkts_coding_style_guide_md_e4d_namespaceObject = JSON.parse('{"id":"learning-arkts/arkts-coding-style-guide/arkts-coding-style-guide","title":"ArkTS编程规范","description":"目标和适用范围","source":"@site/docs/learning-arkts/arkts-coding-style-guide/arkts-coding-style-guide.md","sourceDirName":"learning-arkts/arkts-coding-style-guide","slug":"/learning-arkts/arkts-coding-style-guide/","permalink":"/harmonyos-docs-site/learning-arkts/arkts-coding-style-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"ArkTS编程规范","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-coding-style-guide","kit":"getting-started","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkTS语言介绍","permalink":"/harmonyos-docs-site/learning-arkts/introduction-to-arkts/"},"next":{"title":"ArkTS语法适配背景","permalink":"/harmonyos-docs-site/learning-arkts/typescript-to-arkts-migration/arkts-migration-background/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/learning-arkts/arkts-coding-style-guide/arkts-coding-style-guide.md


const frontMatter = {
	title: 'ArkTS编程规范',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-coding-style-guide',
	kit: 'getting-started',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkTS编程规范';

const assets = {

};



const toc = [{
  "value": "目标和适用范围",
  "id": "目标和适用范围",
  "level": 2
}, {
  "value": "规则来源",
  "id": "规则来源",
  "level": 2
}, {
  "value": "章节概览",
  "id": "章节概览",
  "level": 2
}, {
  "value": "代码风格",
  "id": "代码风格",
  "level": 3
}, {
  "value": "编程实践",
  "id": "编程实践",
  "level": 3
}, {
  "value": "术语和定义",
  "id": "术语和定义",
  "level": 2
}, {
  "value": "总体原则",
  "id": "总体原则",
  "level": 2
}, {
  "value": "命名",
  "id": "命名",
  "level": 2
}, {
  "value": "为标识符取一个好名字，提高代码可读性",
  "id": "为标识符取一个好名字提高代码可读性",
  "level": 3
}, {
  "value": "类名、枚举名、命名空间名采用UpperCamelCase风格",
  "id": "类名枚举名命名空间名采用uppercamelcase风格",
  "level": 3
}, {
  "value": "变量名、方法名、参数名采用lowerCamelCase风格",
  "id": "变量名方法名参数名采用lowercamelcase风格",
  "level": 3
}, {
  "value": "常量名、枚举值名采用全部大写，单词间使用下划线隔开",
  "id": "常量名枚举值名采用全部大写单词间使用下划线隔开",
  "level": 3
}, {
  "value": "避免使用否定的布尔变量名，布尔型的局部变量或方法需加上表达是非意义的前缀",
  "id": "避免使用否定的布尔变量名布尔型的局部变量或方法需加上表达是非意义的前缀",
  "level": 3
}, {
  "value": "格式",
  "id": "格式",
  "level": 2
}, {
  "value": "使用空格缩进，禁止使用tab字符",
  "id": "使用空格缩进禁止使用tab字符",
  "level": 3
}, {
  "value": "行宽不超过120个字符",
  "id": "行宽不超过120个字符",
  "level": 3
}, {
  "value": "条件语句和循环语句的实现建议使用大括号",
  "id": "条件语句和循环语句的实现建议使用大括号",
  "level": 3
}, {
  "value": "switch语句的case和default需缩进一层",
  "id": "switch语句的case和default需缩进一层",
  "level": 3
}, {
  "value": "表达式换行需保持一致性，运算符放行末",
  "id": "表达式换行需保持一致性运算符放行末",
  "level": 3
}, {
  "value": "多个变量定义和赋值语句不允许写在一行",
  "id": "多个变量定义和赋值语句不允许写在一行",
  "level": 3
}, {
  "value": "空格应该突出关键字和重要信息，避免不必要的空格",
  "id": "空格应该突出关键字和重要信息避免不必要的空格",
  "level": 3
}, {
  "value": "建议字符串使用单引号",
  "id": "建议字符串使用单引号",
  "level": 3
}, {
  "value": "对象字面量属性超过4个，需要都换行",
  "id": "对象字面量属性超过4个需要都换行",
  "level": 3
}, {
  "value": "把else/catch放在if/try代码块关闭括号的同一行",
  "id": "把elsecatch放在iftry代码块关闭括号的同一行",
  "level": 3
}, {
  "value": "大括号{和语句在同一行",
  "id": "大括号和语句在同一行",
  "level": 3
}, {
  "value": "编程实践",
  "id": "编程实践-1",
  "level": 2
}, {
  "value": "建议添加类属性的可访问修饰符",
  "id": "建议添加类属性的可访问修饰符",
  "level": 3
}, {
  "value": "不建议省略浮点数小数点前后的0",
  "id": "不建议省略浮点数小数点前后的0",
  "level": 3
}, {
  "value": "判断变量是否为Number.NaN时必须使用Number.isNaN()方法",
  "id": "判断变量是否为numbernan时必须使用numberisnan方法",
  "level": 3
}, {
  "value": "数组遍历优先使用Array对象方法",
  "id": "数组遍历优先使用array对象方法",
  "level": 3
}, {
  "value": "不要在控制性条件表达式中执行赋值操作",
  "id": "不要在控制性条件表达式中执行赋值操作",
  "level": 3
}, {
  "value": "在finally代码块中，不要使用return、break、continue或抛出异常，避免finally块非正常结束",
  "id": "在finally代码块中不要使用returnbreakcontinue或抛出异常避免finally块非正常结束",
  "level": 3
}, {
  "value": "避免使用ESObject",
  "id": "避免使用esobject",
  "level": 3
}, {
  "value": "使用T[]表示数组类型",
  "id": "使用t表示数组类型",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "arkts编程规范",
        children: "ArkTS编程规范"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "目标和适用范围",
      children: "目标和适用范围"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文参考业界标准和实践，结合ArkTS语言特点，提供编码指南，以提高代码的规范性、安全性和性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文适用于使用ArkTS编写的开发场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则来源",
      children: "规则来源"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS在保持TypeScript基本语法风格的基础上，进一步强化静态检查和分析。本文部分规则筛选自《", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/docs/blob/master/zh-cn/contribute/OpenHarmony-Application-Typescript-JavaScript-coding-guide.md",
        children: "OpenHarmony应用TS&JS编程指南"
      }), "》，为ArkTS语言新增的语法添加了规则，旨在提高代码可读性、执行性能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "章节概览",
      children: "章节概览"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "代码风格",
      children: "代码风格"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "包含命名和格式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "编程实践",
      children: "编程实践"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "包含声明与初始化、数据类型、运算与表达式、异常等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考了《OpenHarmony应用TS&JS编程指南》中的规则，去除了ArkTS语言不涉及的部分，并为新增的语法添加了规则。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "术语和定义",
      children: "术语和定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "术语"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "缩略语"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "中文解释"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS编程语言"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TypeScript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TypeScript编程语言"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JavaScript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JavaScript编程语言"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ESObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在ArkTS跨语言调用的场景中，用以标注JS/TS对象的类型"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "总体原则",
      children: "总体原则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "规则分为两个级别：要求和建议。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "要求"
        })
      }), "：表示原则上应该遵从。本文所有内容目前均为针对ArkTS的要求。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建议"
        })
      }), "：表示该条款属于最佳实践，可结合实际情况考虑是否纳入。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命名",
      children: "命名"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "为标识符取一个好名字提高代码可读性",
      children: "为标识符取一个好名字，提高代码可读性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【描述】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "好的标识符命名应遵循以下原则："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "清晰表达意图，避免使用单个字母或非标准缩写命名。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用正确的英文单词并符合英文语法，不要使用中文拼音。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保语句清晰，避免歧义。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类名枚举名命名空间名采用uppercamelcase风格",
      children: "类名、枚举名、命名空间名采用UpperCamelCase风格"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【级别】建议"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【描述】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "类采用首字母大写的驼峰命名法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "类名通常是名词或名词短语，例如Person、Student、Worker。不应使用动词，也应该避免类似Data、Info这样的模糊词。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【正例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 类名\nclass User {\n  username: string\n\n  constructor(username: string) {\n    this.username = username;\n  }\n\n  sayHi() {\n    console.info('hi' + this.username);\n  }\n}\n\n// 枚举名\nenum UserType {\n  TEACHER = 0,\n  STUDENT = 1\n};\n\n// 命名空间\nnamespace Base64Utils {\n  export function encrypt() {\n    // todo encrypt\n  }\n\n  export function decrypt() {\n    // todo decrypt\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "变量名方法名参数名采用lowercamelcase风格",
      children: "变量名、方法名、参数名采用lowerCamelCase风格"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【级别】建议"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【描述】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数的命名通常是动词或动词短语，采用小驼峰命名。示例如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "load + 属性名()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "put + 属性名()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "is + 布尔属性名()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "has + 名词/形容词()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "动词()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "动词 + 宾语()"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "变量名通常是名词或名词短语，采用小驼峰命名，便于理解。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【正例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let msg = 'Hello world';\n\nfunction sendMsg(msg: string) {\n  // todo send message\n  // ...\n}\n\nlet userName = 'Zhangsan';\n\nfunction findUser(userName: string) {\n  // todo find user by user name\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "常量名枚举值名采用全部大写单词间使用下划线隔开",
      children: "常量名、枚举值名采用全部大写，单词间使用下划线隔开"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【级别】建议"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【描述】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常量命名，应该由全大写单词与下划线组成，单词间用下划线分割。常量命名要尽量表达完整的语义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【正例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum UserType1 {\n  TEACHER = 0,\n  STUDENT = 1\n};\n\nconst MAX_USER_SIZE = 10000;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "避免使用否定的布尔变量名布尔型的局部变量或方法需加上表达是非意义的前缀",
      children: "避免使用否定的布尔变量名，布尔型的局部变量或方法需加上表达是非意义的前缀"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【级别】建议"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【描述】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "布尔型的局部变量建议加上表达是非意义的前缀，比如is，也可以是has、can、should等。但是，当使用逻辑非运算符，并出现双重否定时，会出现理解问题，比如!isNotError，难以理解。因此，应避免定义否定的布尔变量名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【反例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let isNoError = true;\nlet isNotFound = false;\n\nfunction empty() {}\nfunction next() {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【正例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let isError = false;\nlet isFound = true;\n\nfunction isEmpty() {}\nfunction hasNext() {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "格式",
      children: "格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用空格缩进禁止使用tab字符",
      children: "使用空格缩进，禁止使用tab字符"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【级别】建议"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【描述】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "只允许使用空格(space)进行缩进。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议大部分场景优先使用2个空格，换行导致的缩进优先使用4个空格。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不允许插入制表符Tab。当前几乎所有的集成开发环境（IDE）和代码编辑器都支持配置将Tab键自动扩展为2个空格输入，应在代码编辑器中配置使用空格进行缩进。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【正例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class DataSource {\n  id: number = 0\n  title: string = ''\n  content: string = ''\n}\n\nconst dataSource: DataSource[] = [\n  {\n    id: 1,\n    title: 'Title 1',\n    content: 'Content 1'\n  },\n  {\n    id: 2,\n    title: 'Title 2',\n    content: 'Content 2'\n  }\n\n];\n\nfunction test(dataSource: DataSource[]) {\n  if (!dataSource.length) {\n    return;\n  }\n\n  for (let data of dataSource) {\n    if (!data || !data.id || !data.title || !data.content) {\n      continue;\n    }\n    // some code\n  }\n\n  // some code\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "行宽不超过120个字符",
      children: "行宽不超过120个字符"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【级别】建议"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【描述】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "代码行宽不宜过长，否则不利于阅读。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "控制行宽可以间接引导程序员缩短函数和变量的命名，减少嵌套层数，精炼注释，从而提升代码可读性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议每行字符数不超过120个，除非需要显著增加可读性（超过120个），且不会隐藏信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例外：如果一行注释包含了超过120个字符的命令或URL，则可以保持一行，以方便复制、粘贴和通过grep查找；预处理的error信息在一行便于阅读和理解，即使超过120个字符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "条件语句和循环语句的实现建议使用大括号",
      children: "条件语句和循环语句的实现建议使用大括号"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【级别】建议"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【描述】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在if、for、do、while等语句的执行体加大括号{}是一种最佳实践，因为省略大括号可能导致错误，并且降低代码的清晰度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【反例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let condition = true;\nif (condition)\n  console.info('success');\nfor (let idx = 0; idx < 5; ++idx)\n  console.info('', idx);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【正例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let condition = true;\nif (condition) {\n  console.info('success');\n}\nfor (let idx = 0; idx < 5; ++idx) {\n  console.info('', idx);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "switch语句的case和default需缩进一层",
      children: "switch语句的case和default需缩进一层"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【级别】建议"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【描述】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "switch的case和default要缩进一层（2个空格）。开关标签之后换行的语句，需再缩进一层（2个空格）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【正例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "switch (condition) {\n  case 0: {\n    doSomething();\n    break;\n  }\n  case 1: {\n    doOtherthing();\n    break;\n  }\n  default:\n    break;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "表达式换行需保持一致性运算符放行末",
      children: "表达式换行需保持一致性，运算符放行末"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【级别】建议"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【描述】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当语句过长或可读性不佳时，需要在合适的地方进行换行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "换行时将操作符放在行末，表示“未结束，后续还有”，保持与常用的格式化工具的默认配置一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【正例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 假设条件语句超出行宽\nif (userCount > MAX_USER_COUNT ||\n  userCount < MIN_USER_COUNT) {\n  doSomething();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "多个变量定义和赋值语句不允许写在一行",
      children: "多个变量定义和赋值语句不允许写在一行"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【级别】要求"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【描述】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每个语句的变量声明都应只声明一个变量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这种方式更便于添加变量声明，无需考虑将分号改为逗号，以免引入错误。此外，每个语句只声明一个变量，使用调试器逐个调试也很方便，而不是一次跳过所有变量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【反例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let maxCount = 10, isCompleted = false;\nlet pointX, pointY;\npointX = 10; pointY = 0;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【正例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let maxCount = 10;\nlet isCompleted = false;\nlet pointX = 0;\nlet pointY = 0;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "空格应该突出关键字和重要信息避免不必要的空格",
      children: "空格应该突出关键字和重要信息，避免不必要的空格"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【级别】建议"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【描述】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "空格应该突出关键字和重要信息。总体建议如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "if, for, while, switch等关键字与左括号(之间加空格。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在函数定义和调用时，函数名称与参数列表的左括号(之间不加空格。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "关键字else或catch与其之前的大括号}之间加空格。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "任何打开大括号({)之前加空格，有两个例外："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) 在作为函数的第一个参数或数组中的第一个元素时，对象之前不用加空格，例如：foo({ name: 'abc' })。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "b) 在模板中，不用加空格，例如：abc${name}。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "二元操作符(+ - * = < > <= >= === !== && ||)前后加空格；三元操作符(? :)符号两侧均加空格。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "数组初始化中的逗号和函数中多个参数之间的逗号后加空格。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在逗号(,)或分号(;)之前不加空格。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "数组的中括号([])内侧不要加空格。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不要出现多个连续空格。在某行中，多个空格若不是用来作缩进的，通常是个错误。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【反例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  // if 和左括号 ( 之间没有加空格\n  if(isJedi) {\n    fight();\n  }\n  // ...\n// 函数名fight和左括号 ( 之间加了空格\nfunction fightBad (): void {\n  console.info('Swooosh!');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【正例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  // if 和左括号之间加一个空格\n  if (isJedi) {\n    fight();\n  }\n  // ...\n// 函数名fight和左括号 ( 之间不加空格\nfunction fight(): void {\n  console.info('Swooosh!');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【反例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "if (flag) {\n  // ...\n}else { // else 与其前面的大括号 } 之间没有加空格\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【正例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "if (flag) {\n  // ...\n} else { // else 与其前面的大括号 } 之间增加空格\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【正例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function foo() { // 函数声明时，左大括号 { 之前加个空格\n  // ...\n}\n// ...\n  bar('attr', { // 左大括号前加个空格\n    age: '1 year',\n    sbreed: 'Bernese Mountain Dog',\n  });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【正例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const arr = [1, 2, 3]; // 数组初始化中的逗号后面加个空格，逗号前面不加空格\nmyFunc(bar1, foo1, baz); // 函数的多个参数之间的逗号后加个空格，逗号前面不加空格\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "建议字符串使用单引号",
      children: "建议字符串使用单引号"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【级别】建议"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【描述】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了保持代码一致性和可读性，建议使用单引号。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【反例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let message1 = 'world';\nconsole.info(message1);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【正例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let message2 = 'world';\nconsole.info(message2);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "对象字面量属性超过4个需要都换行",
      children: "对象字面量属性超过4个，需要都换行"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【级别】建议"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【描述】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对象字面量的属性应保持一致的格式：要么每个属性都换行，要么所有属性都在同一行。当对象字面量的属性超过4个时，建议统一换行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【反例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface I {\n  name: string\n  age: number\n  value: number\n  sum: number\n  foo: boolean\n  bar: boolean\n}\n\nlet obj1: I = { name: 'tom', age: 16, value: 1, sum: 2, foo: true, bar: false }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【正例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface I {\n  name: string\n  age: number\n  value: number\n  sum: number\n  foo: boolean\n  bar: boolean\n}\n\n// ...\nlet obj2: I = {\n  name: 'tom',\n  age: 16,\n  value: 1,\n  sum: 2,\n  foo: true,\n  bar: false\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "把elsecatch放在iftry代码块关闭括号的同一行",
      children: "把else/catch放在if/try代码块关闭括号的同一行"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【级别】建议"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【描述】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编写条件语句时，建议将else放在if代码块关闭括号的同一行。同样，编写异常处理语句时，建议将catch放在try代码块关闭括号的同一行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【反例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "if (isOk) {\n  doThing1();\n  doThing2();\n}\nelse {\n  doThing3();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【正例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "if (isOk) {\n  doThing1();\n  doThing2();\n} else {\n  doThing3();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【反例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n  doSomething();\n}\ncatch (err) {\n  // 处理错误。\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【正例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n  doSomething();\n} catch (err) {\n  // 处理错误。\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "大括号和语句在同一行",
      children: "大括号{和语句在同一行"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【级别】建议"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【描述】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应保持一致的大括号风格。建议将大括号置于控制语句或声明语句的同一行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【反例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function foo1()\n{\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【正例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function foo2() {\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "编程实践-1",
      children: "编程实践"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "建议添加类属性的可访问修饰符",
      children: "建议添加类属性的可访问修饰符"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【级别】建议"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【描述】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS提供了private, protected和public可访问修饰符。默认情况下，属性的可访问修饰符为public。选取适当的可访问修饰符可以提升代码的安全性和可读性。注意：如果类中包含private属性，无法通过对象字面量初始化该类。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【反例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C1 {\n  count: number = 0\n\n  getCount(): number {\n    return this.count\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【正例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class C2 {\n  private count: number = 0\n\n  public getCount(): number {\n    return this.count\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不建议省略浮点数小数点前后的0",
      children: "不建议省略浮点数小数点前后的0"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【级别】建议"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【描述】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS中，浮点值包含一个小数点，不要求小数点之前或之后必须有一个数字。在小数点前面和后面都添加数字可以提高代码的可读性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【反例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const num1 = .5;\nconst num2 = 2.;\nconst num3 = -.7;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【正例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const num4 = 0.5;\nconst num5 = 2.0;\nconst num6 = -0.7;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "判断变量是否为numbernan时必须使用numberisnan方法",
      children: "判断变量是否为Number.NaN时必须使用Number.isNaN()方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【级别】要求"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【描述】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS中，Number.NaN是Number类型的一个特殊值。它被用来表示非数值，这里的数值是指在IEEE浮点数算术标准中定义的双精度64位格式的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS中，Number.NaN的独特之处在于它不等于任何值，包括其本身。与Number.NaN进行比较时，结果是令人困惑的：Number.NaN !== Number.NaN 和 Number.NaN != Number.NaN 的值都是 true。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因此，必须使用Number.isNaN()函数来测试一个值是否是Number.NaN。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【反例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "if (foo == Number.NaN) {\n  // ...\n}\n\nif (foo != Number.NaN) {\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【正例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "if (Number.isNaN(foo)) {\n  // ...\n}\n\nif (!Number.isNaN(foo)) {\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数组遍历优先使用array对象方法",
      children: "数组遍历优先使用Array对象方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【级别】要求"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【描述】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于数组遍历，应该优先使用Array对象方法，如：forEach(), map(), every(), filter(), find(), findIndex(), reduce(), some()。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【反例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const numbers = [1, 2, 3, 4, 5];\n// 依赖已有数组来创建新的数组时，通过for遍历，生成一个新数组\nconst increasedByOne1: number[] = [];\nfor (let i = 0; i < numbers.length; i++) {\n  increasedByOne1.push(numbers[i] + 1);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【正例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const numbers = [1, 2, 3, 4, 5];\n// ...\n// better: 使用map方法是更好的方式\nconst increasedByOne2: number[] = numbers.map(num => num + 1);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不要在控制性条件表达式中执行赋值操作",
      children: "不要在控制性条件表达式中执行赋值操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【级别】要求"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【描述】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "控制性条件表达式用于 if、while、for 以及 ?: 等条件判断语句中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在控制性条件表达式中执行赋值容易导致意外行为，且降低代码的可读性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【反例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 在控制性判断中赋值不易理解\nif (isFoo = false) {\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【正例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const isFoo = false; // 在上面赋值，if条件判断中直接使用\nif (isFoo) {\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在finally代码块中不要使用returnbreakcontinue或抛出异常避免finally块非正常结束",
      children: "在finally代码块中，不要使用return、break、continue或抛出异常，避免finally块非正常结束"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【级别】要求"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【描述】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在finally代码块中，直接使用return、break、continue、throw语句或调用方法时未处理异常，会导致finally代码块无法正常结束。finally代码块异常结束会影响try或catch代码块中异常的抛出，也可能影响方法的返回值。因此，必须确保finally代码块正常结束。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【反例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function foo4() {\n  try {\n    // ...\n    return 1;\n  } catch (err) {\n    // ...\n    return 2;\n  } finally {\n    return 3;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【正例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function foo5() {\n  try {\n    // ...\n    return 1;\n  } catch (err) {\n    // ...\n    return 2;\n  } finally {\n    console.info('XXX!');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "避免使用esobject",
      children: "避免使用ESObject"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【级别】建议"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【描述】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ESObject主要用于ArkTS和TS/JS的跨语言调用场景中的类型标注。在非跨语言调用场景中使用ESObject标注类型，会引入不必要的跨语言调用，导致额外的性能开销。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【反例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// lib.ets\nexport interface I {\n  sum: number\n}\n\nexport function getObject1(value: number): I {\n  let obj: I = { sum: value };\n  return obj\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { getObject1 } from './lib'\n// ...\nlet obj1: I = getObject1(123);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【正例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// lib.ets\nexport interface I {\n  sum: number\n}\n\n// ...\nexport function getObject2(value: number): I {\n  let obj: I = { sum: value };\n  return obj\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { getObject2, I } from './lib';\n// ...\nlet obj2: I = getObject2(123);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用t表示数组类型",
      children: "使用T[]表示数组类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【级别】建议"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【描述】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS提供了两种数组类型的表示方式：T[]和Array<T>。建议所有数组类型均使用T[]表示，以提高代码可读性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【反例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let x: Array<number> = [1, 2, 3];\nlet y: Array<string> = ['a', 'b', 'c'];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【正例】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 统一使用T[]语法\nlet x: number[] = [1, 2, 3];\nlet y: string[] = ['a', 'b', 'c'];\n"
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