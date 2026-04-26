"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["774534"], {
625342(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_utils_arkts_json_arkts_json_md_bd3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-utils-arkts-json-arkts-json-md-bd3.json
var site_docs_arkts_arkts_utils_arkts_json_arkts_json_md_bd3_namespaceObject = JSON.parse('{"id":"arkts/arkts-utils/arkts-json/arkts-json","title":"JSON扩展库","description":"场景介绍","source":"@site/docs/arkts/arkts-utils/arkts-json/arkts-json.md","sourceDirName":"arkts/arkts-utils/arkts-json","slug":"/arkts/arkts-utils/arkts-json/","permalink":"/harmonyos-docs-site/arkts/arkts-utils/arkts-json/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"JSON扩展库","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-json","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Buffer与FastBuffer","permalink":"/harmonyos-docs-site/arkts/arkts-utils/buffer/"},"next":{"title":"容器类库概述","permalink":"/harmonyos-docs-site/arkts/arkts-utils/containers/container-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-utils/arkts-json/arkts-json.md


const frontMatter = {
	title: 'JSON扩展库',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-json',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'JSON扩展库';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "JSON扩展说明",
  "id": "json扩展说明",
  "level": 2
}, {
  "value": "parse",
  "id": "parse",
  "level": 3
}, {
  "value": "stringify",
  "id": "stringify",
  "level": 3
}, {
  "value": "has",
  "id": "has",
  "level": 3
}, {
  "value": "remove",
  "id": "remove",
  "level": 3
}, {
  "value": "总结",
  "id": "总结",
  "level": 3
}, {
  "value": "开发场景",
  "id": "开发场景",
  "level": 2
}, {
  "value": "解析包含嵌套引号的JSON字符串场景",
  "id": "解析包含嵌套引号的json字符串场景",
  "level": 3
}, {
  "value": "解析包含大整数的JSON字符串场景",
  "id": "解析包含大整数的json字符串场景",
  "level": 3
}, {
  "value": "序列化BigInt对象场景",
  "id": "序列化bigint对象场景",
  "level": 3
}, {
  "value": "序列化浮点数number场景",
  "id": "序列化浮点数number场景",
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
        id: "json扩展库",
        children: "JSON扩展库"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该库扩展了原生JSON功能，提供了额外的错误处理、循环引用检测、BigInt处理以及对不同输入类型的严格检查。代码中底层依赖于原生JSON.parse和JSON.stringify，但在此基础上加入了多种自定义逻辑并提供额外的has和remove接口，具体可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-json/js-apis-json",
        children: "@arkts.json"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSON扩展库主要适用于以下场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要处理BigInt的JSON解析或序列化。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要更严格的参数校验和错误处理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要在序列化对象时检测循环引用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要安全的对象操作（has/remove）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该库适用于需要增强JSON功能的场景，特别是在处理BigInt和严格的参数校验时。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "json扩展说明",
      children: "JSON扩展说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "parse",
      children: "parse"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "parse(text: string, reviver?: Transformer, options?: ParseOptions): Object | null"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解析JSON字符串，支持BigInt模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "与原生的区别："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "特性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "原生parse"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "本库parse"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BigInt支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持（抛出TypeError）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持（通过parseBigInt扩展）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "参数校验"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弱校验"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "强校验（抛出BusinessError）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "错误信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "原生错误（如SyntaxError）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义BusinessError"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reviver参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持，但强制类型检查"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stringify",
      children: "stringify"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stringify(value: Object, replacer?: (number | string)[] | null, space?: string | number): string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将对象转换为JSON字符串，支持BigInt模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "与原生的区别："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "特性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "原生stringify"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "本库stringify"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BigInt支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持（抛出TypeError）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持（通过stringifyBigInt扩展）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "循环引用检测"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出TypeError"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检测并抛出BusinessError"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "参数校验"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弱校验"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "强校验（replacer必须是函数或数组）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "错误信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "原生错误"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义BusinessError"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "has",
      children: "has"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "has(obj: object, property: string): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查对象是否包含指定的属性，确保传入的值是一个对象，并且属性键是有效的字符串。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "与原生的区别："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "特性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "原生方式（obj.hasOwnProperty）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "本库has"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "参数校验"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无校验（可能误用）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "强制检查obj是普通对象，property是非空字符串"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "错误处理"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可能静默失败"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出BusinessError"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "remove",
      children: "remove"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "remove(obj: object, property: string): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从对象中删除指定的属性。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "特性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "原生方式（delete obj.key）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "本库remove"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "参数校验"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无校验（可能误删）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "强制检查obj是普通对象，property是非空字符串"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "错误处理"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可能静默失败"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出BusinessError"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "总结",
      children: "总结"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "原生JSON"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "本库"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "严格参数校验"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "循环引用检测"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BigInt处理"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "增强的错误处理（BusinessError）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "额外方法（has/remove）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发场景",
      children: "开发场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "解析包含嵌套引号的json字符串场景",
      children: "解析包含嵌套引号的JSON字符串场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSON字符串中的嵌套引号会破坏其结构，将导致解析失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 比如以下JSON字符串，由于嵌套引号导致结构破坏，执行JSON.parse将会抛异常。\n// let jsonStr = `{\"info\": \"{\"name\": \"zhangsan\", \"age\": 18}\"}`;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下提供两种方式解决该场景问题："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方式1：避免出现嵌套引号的操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { JSON } from '@kit.ArkTS';\n\ninterface Info {\n  name: string;\n  age: number;\n}\n\ninterface TestObj {\n  info: Info;\n}\n\ninterface TestStr {\n  info: string;\n}\n// ...\n  /*\n   * 将原始JSON字符串`{\"info\": \"{\"name\": \"zhangsan\", \"age\": 18}\"}`\n   * 修改为`{\"info\": {\"name\": \"zhangsan\", \"age\": 18}}`。\n   * */\n  let jsonStr = `{\"info\": {\"name\": \"zhangsan\", \"age\": 18}}`;\n  let obj1  = JSON.parse(jsonStr) as TestObj;\n  console.info(JSON.stringify(obj1));    //{\"info\":{\"name\":\"zhangsan\",\"age\":18}}\n  // 获取JSON字符串中的name信息\n  console.info(obj1.info.name); // zhangsan\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方式2：将JSON字符串中嵌套的引号进行双重转义，恢复JSON的正常结构。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { JSON } from '@kit.ArkTS';\n\ninterface Info {\n  name: string;\n  age: number;\n}\n\ninterface TestObj {\n  info: Info;\n}\n\ninterface TestStr {\n  info: string;\n}\n// ...\n  /*\n   * 将原始JSON字符串`{\"info\": \"{\"name\": \"zhangsan\", \"age\": 18}\"}`进行双重转义，\n   * 修改为`{\"info\": \"{\\\\\"name\\\\\": \\\\\"zhangsan\\\\\", \\\\\"age\\\\\": 18}\"}`。\n   * */\n  let jsonStr = `{\"info\": \"{\\\\\"name\\\\\": \\\\\"zhangsan\\\\\", \\\\\"age\\\\\": 18}\"}`;\n  let obj2 = JSON.parse(jsonStr) as TestStr;\n  console.info(JSON.stringify(obj2));    // {\"info\":\"{\\\"name\\\": \\\"zhangsan\\\", \\\"age\\\": 18}\"}\n  // 获取JSON字符串中的name信息\n  let obj3 = JSON.parse(obj2.info) as Info;\n  console.info(obj3.name); // zhangsan\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "解析包含大整数的json字符串场景",
      children: "解析包含大整数的JSON字符串场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当JSON字符串中存在小于-(2^53-1)或大于(2^53-1)的整数时，解析后数据会出现精度丢失或不正确的情况。该解析场景需要指定BigIntMode，将大整数解析为BigInt。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { JSON } from '@kit.ArkTS';\n// ...\n  let numberText = '{\"number\": 10, \"largeNumber\": 112233445566778899}';\n\n  let numberObj1 = JSON.parse(numberText) as Object;\n  console.info((numberObj1 as object)?.['largeNumber']);    // 112233445566778900\n\n  // 使用PARSE_AS_BIGINT的BigInt模式进行解析，避免出现大整数解析错误。\n  let options: JSON.ParseOptions = {\n    bigIntMode: JSON.BigIntMode.PARSE_AS_BIGINT,\n  }\n\n  let numberObj2 = JSON.parse(numberText, null, options) as Object;\n\n  console.info(typeof (numberObj2 as object)?.['number']);   // number\n  console.info((numberObj2 as object)?.['number']);    // 10\n\n  console.info(typeof (numberObj2 as object)?.['largeNumber']);    // bigint\n  console.info((numberObj2 as object)?.['largeNumber']);    // 112233445566778899\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "序列化bigint对象场景",
      children: "序列化BigInt对象场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为弥补原生JSON无法序列化BigInt对象的缺陷，本库提供以下两种JSON序列化方式："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方式1：不使用自定义转换函数，直接序列化BigInt对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { JSON } from '@kit.ArkTS';\n// ...\n  let bigIntObject = BigInt(112233445566778899n)\n\n  console.info(JSON.stringify(bigIntObject)); // 112233445566778899\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方式2：使用自定义转换函数，需预处理BigInt对象进行序列化操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { JSON } from '@kit.ArkTS';\n// ...\n  let bigIntObject = BigInt(112233445566778899n)\n\n  // 错误序列化用法：自定义函数中直接返回BigInt对象\n  // 错误案例：JSON.stringify(bigIntObject, (key: string, value: Object): Object =>{ return value; });\n\n  // 正确序列化用法：自定义函数中将BigInt对象预处理为string对象\n  let result: string = JSON.stringify(bigIntObject, (key: string, value: Object): Object => {\n    if (typeof value === 'bigint') {\n      return value.toString();\n    }\n    return value;\n  });\n  console.info('result:', result); // result: \"112233445566778899\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "序列化浮点数number场景",
      children: "序列化浮点数number场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在JSON序列化中，浮点数处理存在一个特殊行为：当小数部分为零时，为保持数值的简洁表示，序列化结果会自动省略小数部分。这可能导致精度信息丢失，影响需要精确表示浮点数的场景（如金融金额、科学计量）。以下示例提供解决该场景的方法："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { JSON } from '@kit.ArkTS';\n// ...\n  // 序列化小数部分不为零的浮点数，可以正常序列化。\n  let floatNumber1 = 10.12345;\n  console.info(JSON.stringify(floatNumber1)); // 10.12345\n\n  // 序列化小数部分为零的浮点数，为保持数值的简洁表示，会丢失小数部分的精度。\n  let floatNumber2 = 10.00;\n  console.info(JSON.stringify(floatNumber2)); // 10\n\n  // 以下是防止浮点数精度丢失的方法：\n  let result = JSON.stringify(floatNumber2, (key: string, value: Object): Object => {\n    if (typeof value === 'number') {\n      // 按照业务场景需要，定制所需的固定精度。\n      return value.toFixed(2);\n    }\n    return value;\n  });\n  console.info(result); // \"10.00\"\n"
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