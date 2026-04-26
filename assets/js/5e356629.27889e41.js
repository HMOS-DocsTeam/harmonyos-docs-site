"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["114527"], {
687089(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_compilation_tool_chain_arkts_arkguard_source_obfuscation_questions_source_obfuscation_questions_md_5e3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-compilation-tool-chain-arkts-arkguard-source-obfuscation-questions-source-obfuscation-questions-md-5e3.json
var site_docs_arkts_arkts_compilation_tool_chain_arkts_arkguard_source_obfuscation_questions_source_obfuscation_questions_md_5e3_namespaceObject = JSON.parse('{"id":"arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-questions/source-obfuscation-questions","title":"ArkGuard混淆常见问题","description":"如何排查功能异常","source":"@site/docs/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-questions/source-obfuscation-questions.md","sourceDirName":"arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-questions","slug":"/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-questions/","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-questions/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"ArkGuard混淆常见问题","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/source-obfuscation-questions","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"不同包类型的源码混淆建议","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-practice/"},"next":{"title":"ArkGuard字节码混淆工具概述","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-questions/source-obfuscation-questions.md


const frontMatter = {
	title: 'ArkGuard混淆常见问题',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/source-obfuscation-questions',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkGuard混淆常见问题';

const assets = {

};



const toc = [{
  "value": "如何排查功能异常",
  "id": "如何排查功能异常",
  "level": 2
}, {
  "value": "排查功能异常步骤",
  "id": "排查功能异常步骤",
  "level": 3
}, {
  "value": "排查非预期的混淆能力",
  "id": "排查非预期的混淆能力",
  "level": 3
}, {
  "value": "典型报错案例及解决方案",
  "id": "典型报错案例及解决方案",
  "level": 2
}, {
  "value": "报错信息为：Error message: Cannot read property xxx of undefined",
  "id": "报错信息为error-message-cannot-read-property-xxx-of-undefined",
  "level": 3
}, {
  "value": "报错信息为：Error message: is not callable",
  "id": "报错信息为error-message-is-not-callable",
  "level": 3
}, {
  "value": "报错信息为：&#39;module1/file1&#39; does not provide an export name &#39;x&#39;, which is imported by &#39;module2/file2&#39;",
  "id": "报错信息为module1file1-does-not-provide-an-export-name-x-which-is-imported-by-module2file2",
  "level": 3
}, {
  "value": "应用运行后无crash信息，但功能异常的情况",
  "id": "应用运行后无crash信息但功能异常的情况",
  "level": 2
}, {
  "value": "使用Record&lt;string, Object&gt;作为对象的类型定义时，属性被混淆",
  "id": "使用recordstring-object作为对象的类型定义时属性被混淆",
  "level": 3
}, {
  "value": "跨文件调用某属性，该属性在一个文件中保留，在另一个文件中被混淆",
  "id": "跨文件调用某属性该属性在一个文件中保留在另一个文件中被混淆",
  "level": 3
}, {
  "value": "未开启-enable-string-property-obfuscation，字符串字面量属性名却被混淆",
  "id": "未开启-enable-string-property-obfuscation字符串字面量属性名却被混淆",
  "level": 3
}, {
  "value": "数据库相关的字段被混淆后导致功能异常",
  "id": "数据库相关的字段被混淆后导致功能异常",
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
        id: "arkguard混淆常见问题",
        children: "ArkGuard混淆常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何排查功能异常",
      children: "如何排查功能异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "排查功能异常步骤",
      children: "排查功能异常步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在obfuscation-rules.txt中配置-disable-obfuscation选项关闭混淆，确认问题是否由混淆引起。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若确认开启混淆后功能出现异常，请先阅读文档，了解模块已配置的混淆规则的能力和需要配置白名单的语法场景，以确保应用功能正常。下文简要介绍默认开启的四项选项功能，详情请参阅对应选项的完整描述。\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation#section-enable-toplevel-obfuscation",
              children: "-enable-toplevel-obfuscation"
            }), "为顶层作用域名称混淆开关。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation#section-enable-property-obfuscation",
              children: "-enable-property-obfuscation"
            }), "为属性混淆开关。配置白名单的主要场景包括网络数据访问、json字段访问、动态属性访问、调用so库接口等。需要使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation#section-keep-property-name",
              children: "-keep-property-name"
            }), "来保留指定的属性名称。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation#section-enable-export-obfuscation",
              children: "-enable-export-obfuscation"
            }), "为导入/导出名称混淆。一般与-enable-toplevel-obfuscation和-enable-property-obfuscation选项配合使用。配置白名单的主要场景为模块对外接口不能混淆。需要使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation#section-keep-global-name",
              children: "-keep-global-name"
            }), "来保留指定的导出/导入名称。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation#section-enable-filename-obfuscation",
              children: "-enable-filename-obfuscation"
            }), "为文件名混淆。配置白名单的主要场景为动态import或运行时直接加载的文件路径。需要使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation#section-keep-file-name",
              children: "-keep-file-name"
            }), "来保留这些文件路径及名称。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["排查需要配置的白名单场景时，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-build-obfuscation#section19439175917123",
          children: "混淆助手配置保留选项"
        }), "，可以快速识别需要配置的保留选项和白名单字段。也可以参考以下典型报错案例，若遇到相似场景，可参照对应解决方法快速处理。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若以下报错案例中未找到相似场景，建议依据各项配置功能正向定位（若不需要相应功能，可删除对应配置项）。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用运行时崩溃分析方法：\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "打开应用运行日志，或点击DevEco Studio中出现的Crash弹窗，找到运行时崩溃栈。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["应用运行时异常栈中的行号为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-guide#%E6%9F%A5%E7%9C%8B%E6%B7%B7%E6%B7%86%E6%95%88%E6%9E%9C",
              children: "编译产物"
            }), "的行号，方法名也可能为混淆后名称；因此排查时建议直接根据异常栈查看编译产物，进而分析哪些名称不能被混淆，然后将其配置到白名单中。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用在运行时未崩溃但出现功能异常（如白屏）的分析方法：\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "打开应用运行日志：选择HiLog，检索与功能异常直接相关的日志，定位问题发生的上下文。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "定位异常代码段：分析日志，找到引发功能异常的代码块。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "增强日志输出：在疑似异常的功能代码中，增加日志打印以检查数据是否正常。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "分析并确定关键字段：通过分析新增的日志输出，判断数据异常是否由混淆导致。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "配置白名单以保护关键字段：将混淆后对应用功能有直接影响的关键字段添加到白名单中。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "排查非预期的混淆能力",
      children: "排查非预期的混淆能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若出现预期外的混淆效果，检查是否由于依赖的本地模块或三方库开启了某些混淆选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "假设当前模块未配置-compact，但混淆的中间产物中代码都被压缩成一行，可按照以下步骤排查混淆选项："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查看当前模块的oh-package.json5中的dependencies，此字段记录了当前模块的依赖信息。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在依赖的模块/三方库中的混淆配置文件内检索\"-compact\"：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在本地依赖的library中的consumer-rules.txt文件中检索\"-compact\"。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在工程目录下的oh_modules文件夹中，对全部的obfuscation.txt文件检索\"-compact\"。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，主模块默认不合并三方库的obfuscation.txt文件中的混淆选项，保留选项仍然有效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(302242)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "三方库中的consumer-rules.txt不建议配置以下开关选项。这些选项在主模块开启混淆时会生效，可能导致意外的混淆效果，甚至应用运行时崩溃。如果发现三方库的obfuscation.txt文件中包含以下开关选项，建议联系发布该三方库的团队删除这些选项并重新打包发布。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-enable-property-obfuscation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-enable-string-property-obfuscation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-enable-toplevel-obfuscation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-remove-log"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-compact"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "典型报错案例及解决方案",
      children: "典型报错案例及解决方案"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "报错信息为error-message-cannot-read-property-xxx-of-undefined",
      children: "报错信息为：Error message: Cannot read property xxx of undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "混淆规则配置如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-enable-property-obfuscation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 示例JSON文件结构（ImportJson.json）：\n/*\n{\n  \"jsonObj\": {\n    \"jsonProperty\": \"value\"\n  }\n}\n */\n\n// 混淆前\nimport jsonData from './ImportJson.json';\n// ...\nlet jsonProp = jsonData.jsonObj.jsonProperty;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆后\nimport jsonData from \"./test.json\";\n\nlet jsonProp = jsonData.i.j;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启属性混淆后，源码会被混淆，但JSON文件不会。源码中通过jsonData.i访问属性时，由于属性名称已经被混淆，JSON数据中并不存在对应的字段，导致获取的值为undefined。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将JSON文件中的字段配置到属性白名单中。示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep-property-name\njsonObj\njsonProperty\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "报错信息为error-message-is-not-callable",
      children: "报错信息为：Error message: is not callable"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景一：导出namespace中的方法时，该方法定义处被混淆，调用时未被混淆"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "混淆规则配置如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-enable-toplevel-obfuscation\n-enable-export-obfuscation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆前\n// ExportNs.ts\nexport namespace NS {\n  export function foo() { }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// import.ts\nimport { NS } from './ExportNs';\n  // ...\n  NS.foo();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆后\n// export.ts\nexport namespace i {\n  export function j() {}\n}\n\n// import.ts\nimport { i } from './export';\n\ni.foo();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "namespace中的foo属于export元素，当通过NS.foo调用时被视为属性。由于未开启-enable-property-obfuscation选项，导致foo在使用时未被混淆。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方案一：开启-enable-property-obfuscation选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方案二：使用-keep-global-name选项将namespace中导出的方法配置到白名单中。示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep-global-name\nfoo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景二：动态导入某个类，类定义处被混淆，调用时未被混淆"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "混淆规则配置如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-enable-toplevel-obfuscation\n-enable-export-obfuscation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆前\n// ExportUtils.ts\nexport function add(a: number, b: number): number {\n  return a + b;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// main.ts\nasync function loadAndUseAdd() {\n  let result: number = 0;\n  try {\n    const mathUtils = await import('./ExportUtils');\n    result = mathUtils.add(2, 3);\n    console.info(`result = ${result}`);\n  } catch (error) {\n    console.error('Failure reason:', error);\n  }\n}\n\nloadAndUseAdd();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆后\n// utils.ts\nexport function c1(d1: number, e1: number): number {\n    return d1 + e1;\n}\n\n// main.ts\nasync function i() {\n    try {\n        const a1 = await import(\"@normalized:N&&&entry/src/main/ets/pages/utils&\");\n        const b1 = a1.addNum(2, 3);\n    }\n    catch (z) {\n        console.error('Failure reason:', z);\n    }\n}\ni();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数addNum在定义时位于顶层作用域，但通过.addNum访问时被视为属性。由于未开启-enable-property-obfuscation选项，导致addNum被使用时未进行混淆。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方案一：开启-enable-property-obfuscation选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方案二：使用-keep-global-name选项将add配置到白名单中。示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep-global-name\naddNum\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景三：调用so库的方法后导致crash"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "混淆规则配置如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-enable-property-obfuscation\n-enable-export-obfuscation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/cpp/types/libentry/Index.d.ts\nexport const addNum: (a: number, b: number) => number;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// example.ets\n// 混淆前\nimport testNapi from 'libentry.so';\n  // ...\n  let sun = testNapi.addNum(1, 2);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// example.ets\n// 混淆后\nimport testNapi from \"@normalized:Y&&&libentry.so&\";\n\ntestNapi.m();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "混淆工具仅支持js/ts/ets代码的混淆。so库中的方法定义在C++侧，因此这些方法在定义处不会被混淆，但在调用处会被混淆。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将so库导出的方法配置到属性白名单中。示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep-property-name\naddNum\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "报错信息为module1file1-does-not-provide-an-export-name-x-which-is-imported-by-module2file2",
      children: "报错信息为：'module1/file1' does not provide an export name 'x', which is imported by 'module2/file2'"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主模块和HSP模块的混淆规则配置如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-enable-toplevel-obfuscation\n-enable-export-obfuscation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export function addNum(a: number, b: number) {\n  return a + b;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆前。\n// hsp模块。\nexport { addNum } from '../utils/Calc';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// entry模块\nimport { addNum } from 'sharedlibrary';\n\naddNum(1, 2);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆后\n// hsp模块\nexport function b() {}\n\n// entry模块\nimport { n } from '@normalized:N&myhsp&&myhsp/Index&';\n\nn();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当同时开启-enable-toplevel-obfuscation和-enable-export-obfuscation选项时，主模块与被调用模块的混淆情况如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "主模块"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "依赖模块"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "导入与导出的名称混淆情况"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HAP/HSP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HSP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HSP和主模块是独立编译的，混淆后名称会不一致，因此都需要配置白名单。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HAP/HSP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本地HAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本地HAR与主模块一起编译，混淆后名称一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HAP/HSP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三方库"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三方库中导出的名称及其属性会被收集到白名单，因此导入和导出时都不会被混淆。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于HAP和HSP模块是独立编译，因此混淆后导入和导出名称不一致，从而导致HAP引用HSP的方法时报错。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将HSP模块导出的方法配置到-keep-global-name下，并且需要在HSP的consumer-rules.txt和obfuscation-rules.txt文件中都进行对应配置。示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// consumer-rules.txt\n-keep-global-name\naddNum\n\n// obfuscation-rules.txt\n-keep-global-name\naddNum\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用运行后无crash信息但功能异常的情况",
      children: "应用运行后无crash信息，但功能异常的情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用recordstring-object作为对象的类型定义时属性被混淆",
      children: "使用Record<string, Object>作为对象的类型定义时，属性被混淆"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "parameters的类型为Record<string, Object>。开启属性混淆后，parameters对象中的linkSource属性被混淆，导致功能异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆前\nimport { Want } from '@kit.AbilityKit';\n  // ...\n  let petalMapWant: Want = {\n    bundleName: 'com.example.myapplication',\n    uri: 'maps://',\n    parameters: {\n      linkSource: 'com.other.app'\n    }\n  }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆后\nimport type Want from \"@ohos:app.ability.Want\";\n\nlet petalMapWant: Want = {\n    bundleName: 'com.example.myapplication',\n    uri: 'maps://',\n    parameters: {\n        i: 'com.other.app'\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例中parameters的类型为Record<string, Object>，这仅表示以字符串为键的对象的泛型定义，未详细描述其内部属性。因此，混淆工具无法识别对象内部哪些属性不应被混淆，导致linkSource被混淆后，引发功能异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将混淆后会出现问题的属性名配置到属性白名单中，示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep-property-name\nlinkSource\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "跨文件调用某属性该属性在一个文件中保留在另一个文件中被混淆",
      children: "跨文件调用某属性，该属性在一个文件中保留，在另一个文件中被混淆"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "混淆规则配置如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-enable-property-obfuscation\n-keep\n./file1.ts\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在file2.ts中导入file1.ts的接口。该接口包含一个对象类型的属性。此对象属性在file1.ts中被保留，但在file2.ts中被混淆，导致调用时出现功能异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆前\n// FileInside.ts\nexport interface MyInfo {\n  age: number;\n  address: {\n    city1: string;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// FileOutside.ts\nimport { MyInfo } from './FileInside';\n  // ...\n  const person: MyInfo = {\n    age: 20,\n    address: {\n      city1: 'shanghai'\n    }\n  }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆后\n// file1.ts\nexport interface MyInfo {\n  age: number;\n  address: {\n    city1: string;\n  }\n}\n\n// file2.ts\nimport { MyInfo } from './file1';\n\nconst person: MyInfo = {\n  age: 20,\n  address: {\n    i: \"shanghai\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用-keep选项保留file1.ts文件时，该文件中的代码不会被混淆。导出属性（如address）所属类型内的属性不会自动加入白名单，因此在其他文件中使用时会被混淆。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方案一：使用interface定义该属性的类型，并使用export进行导出，这样该属性将被自动加入到属性白名单中。示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// FileOutside.ts\nexport interface AddressType {\n  city1: string\n}\nexport interface MyInfo2 {\n  age: number;\n  address: AddressType;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方案二：使用-keep-property-name选项，将未直接导出的类型内的属性配置到属性白名单中。示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep-property-name\ncity1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "未开启-enable-string-property-obfuscation字符串字面量属性名却被混淆",
      children: "未开启-enable-string-property-obfuscation，字符串字面量属性名却被混淆"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆前\nconst person = {\n  myAge: 18\n}\nperson[\"myAge\"] = 20;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆后\nconst person = {\n  myAge: 18\n}\nperson[\"m\"] = 20;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主模块所依赖的其他模块中的consumer-rules.txt文件配置了-enable-string-property-obfuscation选项，主模块会合并该选项，导致字符串字面量属性名被混淆。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，主模块默认不会被三方库的混淆规则所影响，因此不会有这种情况。但如果API version低于18，可参考以下两种解决方案。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方案一：确认依赖的远程HAR包的obfuscation.txt文件中是否配置了-enable-string-property-obfuscation选项。若配置了则会影响主模块，需将其关闭。参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-questions#%E6%8E%92%E6%9F%A5%E9%9D%9E%E9%A2%84%E6%9C%9F%E7%9A%84%E6%B7%B7%E6%B7%86%E8%83%BD%E5%8A%9B",
        children: "排查非预期的混淆能力"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方案二：若工程复杂无法找到配置了该混淆选项的远程HAR包，可以将属性名直接配置到白名单中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据库相关的字段被混淆后导致功能异常",
      children: "数据库相关的字段被混淆后导致功能异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HiLog日志中报错信息为：table Account has no column named a23 in 'INSERT INTO Account(a23)'。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "混淆时代码中的SQL语句字段名称被混淆，但数据库中字段为原始名称，从而导致报错。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用-keep-property-name选项将使用到的数据库字段配置到白名单。"
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
302242(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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