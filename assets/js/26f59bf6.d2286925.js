"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["498538"], {
577581(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_runtime_arkts_runtime_module_arkts_dynamic_import_arkts_dynamic_import_md_26f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-runtime-arkts-runtime-module-arkts-dynamic-import-arkts-dynamic-import-md-26f.json
var site_docs_arkts_arkts_runtime_arkts_runtime_module_arkts_dynamic_import_arkts_dynamic_import_md_26f_namespaceObject = JSON.parse('{"id":"arkts/arkts-runtime/arkts-runtime-module/arkts-dynamic-import/arkts-dynamic-import","title":"动态加载","description":"动态import支持条件延迟加载，支持部分反射功能，可以提升页面的加载速度；动态import支持加载HSP模块/HAR模块/OHPM包/Native库等，并且HAR模块之间可通过变量动态import来访问彼此导出的内容，可避免编译期强依赖，实现模块解耦。","source":"@site/docs/arkts/arkts-runtime/arkts-runtime-module/arkts-dynamic-import/arkts-dynamic-import.md","sourceDirName":"arkts/arkts-runtime/arkts-runtime-module/arkts-dynamic-import","slug":"/arkts/arkts-runtime/arkts-runtime-module/arkts-dynamic-import/","permalink":"/harmonyos-docs-site/arkts/arkts-runtime/arkts-runtime-module/arkts-dynamic-import/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"动态加载","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-dynamic-import","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"模块化运行简介","permalink":"/harmonyos-docs-site/arkts/arkts-runtime/arkts-runtime-module/module-principle/"},"next":{"title":"延迟加载（lazy import）","permalink":"/harmonyos-docs-site/arkts/arkts-runtime/arkts-runtime-module/arkts-lazy-import/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-runtime/arkts-runtime-module/arkts-dynamic-import/arkts-dynamic-import.md


const frontMatter = {
	title: '动态加载',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-dynamic-import',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '动态加载';

const assets = {

};



const toc = [{
  "value": "技术适用场景介绍",
  "id": "技术适用场景介绍",
  "level": 2
}, {
  "value": "业务扩展场景介绍",
  "id": "业务扩展场景介绍",
  "level": 2
}, {
  "value": "动态import实现方案介绍",
  "id": "动态import实现方案介绍",
  "level": 2
}, {
  "value": "动态import实现中的关键点",
  "id": "动态import实现中的关键点",
  "level": 2
}, {
  "value": "动态import常量表达式",
  "id": "动态import常量表达式",
  "level": 3
}, {
  "value": "动态import变量表达式",
  "id": "动态import变量表达式",
  "level": 3
}, {
  "value": "HAR模块间动态import依赖解耦",
  "id": "har模块间动态import依赖解耦",
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
        id: "动态加载",
        children: "动态加载"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动态import支持条件延迟加载，支持部分反射功能，可以提升页面的加载速度；动态import支持加载HSP模块/HAR模块/OHPM包/Native库等，并且HAR模块之间可通过变量动态import来访问彼此导出的内容，可避免编译期强依赖，实现模块解耦。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "技术适用场景介绍",
      children: "技术适用场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用开发的有些场景中，如果希望根据条件导入模块或者按需导入模块，可以使用动态import代替", (0,jsx_runtime.jsx)(_components.a, {
        href: "/learning-arkts/introduction-to-arkts#%E5%AF%BC%E5%85%A5",
        children: "静态import"
      }), "。下面是可能会需要动态import的场景："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当静态import的模块明显降低了代码的加载速度且很少被使用，或者并不需要马上使用它。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当静态import的模块明显占用了大量的系统内存且很少被使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当被导入的模块，在加载时并不存在，需要异步获取。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当需要动态构建模块说明符时，应使用动态import。静态import仅支持静态说明符。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当导入的模块存在副作用（即模块中包含直接运行的代码），这些副作用仅在满足特定条件时才需要。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务扩展场景介绍",
      children: "业务扩展场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动态import在业务上除了能实现条件延迟加载，还可以实现部分反射功能。实例如下，HAP动态import HAR包harlibrary，并调用类Calc的静态成员函数staticAdd()、成员函数instanceAdd()，以及全局方法addHarLibrary()。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// harlibrary's src/main/ets/utils/Calc.ets\nexport class Calc {\n  public static staticAdd(a: number, b: number): number {\n    let c = a + b;\n    console.info('DynamicImport I am harlibrary in staticAdd, %d + %d = %d', a, b, c);\n    return c;\n  }\n\n  public instanceAdd(a: number, b: number): number {\n    let c = a + b;\n    console.info('DynamicImport I am harlibrary in instanceAdd, %d + %d = %d', a, b, c);\n    return c;\n  }\n}\n\nexport function addHarLibrary(a: number, b: number): number {\n  let c = a + b;\n  console.info('DynamicImport I am harlibrary in addHarLibrary, %d + %d = %d', a, b, c);\n  return c;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// harlibrary's Index.ets\nexport { Calc, addHarLibrary } from './src/main/ets/utils/Calc'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// HAP's oh-package.json5\n\"dependencies\": {\n  \"harlibrary\": \"file:../harlibrary\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// HAP's src/main/ets/pages/Index.ets\nimport('harlibrary').then((ns:ESObject) => {\n  ns.Calc.staticAdd(8, 9);  // 调用静态成员函数staticAdd()\n  let calc:ESObject = new ns.Calc();  // 实例化类Calc\n  calc.instanceAdd(10, 11);  // 调用成员函数instanceAdd()\n  ns.addHarLibrary(6, 7);  // 调用全局方法addHarLibrary()\n\n  // 使用类、成员函数和方法的字符串名字进行反射调用\n  let className = 'Calc';\n  let methodName = 'instanceAdd';\n  let staticMethod = 'staticAdd';\n  let functionName = 'addHarLibrary';\n  ns[className][staticMethod](12, 13);  // 调用静态成员函数staticAdd()\n  let calc1:ESObject = new ns[className]();  // 实例化类Calc\n  calc1[methodName](14, 15);  // 调用成员函数instanceAdd()\n  ns[functionName](16, 17);  // 调用全局方法addHarLibrary()\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "动态import实现方案介绍",
      children: "动态import实现方案介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动态import根据入参是常量或变量，分为动态import常量表达式和动态import变量表达式两大特性规格。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是动态import支持的规格列表："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "动态import场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "动态import详细分类"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "本地工程模块"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态import模块内文件路径"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要求路径以./或../开头。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "本地工程模块"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态import HSP模块名"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "本地工程模块"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态import HSP模块文件路径"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "本地工程模块"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态import HAR模块名"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "本地工程模块"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态import HAR模块文件路径"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "远程包"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态import远程HAR模块名"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "远程包"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态import ohpm包名"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态import @system.*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态import @ohos.*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态import @arkui-x.*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "模块Native库"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态import libNativeLibrary.so"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(349415)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.当前所有import中使用的模块名都是依赖方oh-package.json5文件中dependencies项的别名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.本地模块在依赖方的dependencies中配置的别名建议与moduleName以及packageName三者一致。moduleName指的是被依赖的HSP/HAR的module.json5中配置的名字，packageName指的是被依赖的HSP/HAR的oh-package.json5中配置的名字。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.import一个模块名，实际的行为是import该模块的入口文件，一般为Index.ets/ts。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "动态import实现中的关键点",
      children: "动态import实现中的关键点"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "动态import常量表达式",
      children: "动态import常量表达式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动态import常量表达式是指动态import的入参为常量的场景。下面以HAP引用其他模块的API的示例来说明典型用法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文示例代码中的路径，如Index.ets，是根据当前DevEco Studio的模块配置设置的。如果后续有变化，请调整文件的位置和相对路径。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HAP常量动态import HAR模块名"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAR's Index.ets\nexport function add(a: number, b: number): number {\n  let c = a + b;\n  console.info('DynamicImport I am a HAR, %d + %d = %d', a, b, c);\n  return c;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's src/main/ets/pages/Index.ets\nimport('myhar').then((ns:ESObject) => {\n  console.info('DynamicImport ns.add(3, 5) = %d', ns.add(3, 5));\n});\n\n// 可使用 await 处理动态import (必须在 async 函数内使用)\nasync function asyncDynamicImport() {\n  let ns:ESObject = await import('myhar');\n  console.info('DynamicImport ns.add(3, 5) = %d', ns.add(3, 5));\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's oh-package.json5\n\"dependencies\": {\n  \"myhar\": \"file:../myhar\"\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HAP常量动态import HAR模块文件路径"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAR's Index.ets\nexport function add(a: number, b: number): number {\n  let c = a + b;\n  console.info('DynamicImport I am a HAR, %d + %d = %d', a, b, c);\n  return c;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's src/main/ets/pages/Index.ets\nimport('myhar/Index').then((ns:ESObject) => {\n  console.info('DynamicImport ns.add(3, 5) = %d', ns.add(3, 5));\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's oh-package.json5\n\"dependencies\": {\n  \"myhar\": \"file:../myhar\"\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HAP常量动态import HSP模块名"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HSP's Index.ets\nexport function add(a: number, b: number): number {\n  let c = a + b;\n  console.info('DynamicImport I am a HSP, %d + %d = %d', a, b, c);\n  return c;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's src/main/ets/pages/Index.ets\nimport('myhsp').then((ns:ESObject) => {\n  console.info('DynamicImport ns.add(3, 5) = %d', ns.add(3, 5));\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's oh-package.json5\n\"dependencies\": {\n  \"myhsp\": \"file:../myhsp\"\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HAP常量动态import HSP模块名文件路径"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HSP's Index.ets\nexport function add(a: number, b: number): number {\n  let c = a + b;\n  console.info('DynamicImport I am a HSP, %d + %d = %d', a, b, c);\n  return c;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's src/main/ets/pages/Index.ets\nimport('myhsp/Index').then((ns:ESObject) => {\n  console.info('DynamicImport ns.add(3, 5) = %d', ns.add(3, 5));\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's oh-package.json5\n\"dependencies\": {\n  \"myhsp\": \"file:../myhsp\"\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HAP常量动态import远程HAR模块名"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's src/main/ets/pages/Index.ets\nimport('@ohos/crypto-js').then((ns:ESObject) => {\n  console.info('DynamicImport @ohos/crypto-js: ' + ns.CryptoJS.MD5(123456));\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's oh-package.json5\n\"dependencies\": {\n  \"@ohos/crypto-js\": \"2.0.3-rc.0\"\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HAP常量动态import ohpm包"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's src/main/ets/pages/Index.ets\nimport('json5').then((ns:ESObject) => {\n  console.info('DynamicImport json5');\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's oh-package.json5\n\"dependencies\": {\n  \"json5\": \"1.0.2\"\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HAP常量动态import自己的单文件"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's src/main/ets/Calc.ets\nexport function add(a: number, b: number): number {\n  let c = a + b;\n  console.info('DynamicImport I am a HAP, %d + %d = %d', a, b, c);\n  return c;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's src/main/ets/pages/Index.ets\nimport('../Calc').then((ns:ESObject) => {\n  console.info('DynamicImport ns.add(3, 5) = %d', ns.add(3, 5));\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HAP常量动态import自己的Native库"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// libnativeapi.so's index.d.ts\nexport const add: (a: number, b: number) => number;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's src/main/ets/pages/Index.ets\nimport('libnativeapi.so').then((ns:ESObject) => {\n  console.info('DynamicImport libnativeapi.so: ' + ns.default.add(2, 3));\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's oh-package.json5\n\"dependencies\": {\n  \"libnativeapi.so\": \"file:./src/main/cpp/types/libnativeapi\"\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HAP常量动态import加载API"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's src/main/ets/pages/Index.ets\nimport('@system.app').then((ns:ESObject) => { ns.default.terminate(); });\nimport('@system.router').then((ns:ESObject) => { ns.default.clear(); });\nimport('@ohos.curves').then((ns:ESObject) => { ns.default.springMotion(0.555, 0.75, 0.001); });\nimport('@ohos.matrix4').then((ns:ESObject) => { ns.default.identity(); });\nimport('@ohos.hilog').then((ns:ESObject) => { ns.default.info(0x0000, 'testTag', '%{public}s', 'DynamicImport @ohos.hilog.'); });\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "动态import变量表达式",
      children: "动态import变量表达式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio中模块间的依赖关系通过oh-package.json5中的dependencies字段进行配置。dependencies列表中所有的模块默认都会进行安装（本地模块）或下载（远程模块），但是不会默认参与编译。HAP/HSP编译时会以入口文件（一般为Index.ets/Index.ts）开始搜索依赖关系，搜索到的模块或文件才会加入编译。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在编译期，静态import和常量动态import可以被打包工具rollup及其插件识别解析，加入依赖树中，参与编译流程，最终生成方舟字节码。但是，如果是变量动态import，该变量值可能需要进行运算或外部传入才能得到，在编译态无法解析其内容，也就无法加入编译。为了将这部分模块/文件加入编译，还需要额外增加一个runtimeOnly的buildOption配置，用于指定动态import的变量实际的模块名或文件路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1. runtimeOnly字段schema配置格式"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在HAP/HSP/HAR的build-profile.json5中的buildOption中增加runtimeOnly配置项，仅在通过变量动态import时配置，静态import和常量动态import无需配置；并且，通过变量动态import加载API时也无需配置runtimeOnly。如下实例说明如何配置通过变量动态import其他模块，以及变量动态import本模块自己的单文件："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 变量动态import其他模块myhar\nlet harName = 'myhar';\nimport(harName).then((obj: ESObject) => {\n    console.info('DynamicImport I am a har');\n})\n\n// 变量动态import本模块自己的单文件src/main/ets/index.ets\nlet filePath = './utils/Calc';\nimport(filePath).then((obj: ESObject) => {\n    console.info('DynamicImport I am a file');\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对应的runtimeOnly配置："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"buildOption\": {\n  \"arkOptions\": {\n    \"runtimeOnly\": {\n      \"packages\": [ \"myhar\" ],\n      \"sources\": [ \"./src/main/ets/utils/Calc.ets\" ]\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\"runtimeOnly\"的\"packages\"：用于配置本模块变量动态import其他模块名，要求与dependencies中配置的名字一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\"runtimeOnly\"的\"sources\"：用于配置本模块变量动态import自己的文件路径，路径相对于当前build-profile.json5文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2. 使用实例"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HAP变量动态import HAR模块名"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAR's Index.ets\nexport function add(a: number, b: number): number {\n  let c = a + b;\n  console.info('DynamicImport I am a HAR, %d + %d = %d', a, b, c);\n  return c;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's src/main/ets/pages/Index.ets\nlet packageName = 'myhar';\nimport(packageName).then((ns:ESObject) => {\n  console.info('DynamicImport ns.add(3, 5) = %d', ns.add(3, 5));\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's oh-package.json5\n\"dependencies\": {\n  \"myhar\": \"file:../myhar\"\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's build-profile.json5\n\"buildOption\": {\n  \"arkOptions\": {\n    \"runtimeOnly\": {\n      \"packages\": [\n        \"myhar\"  // 仅用于使用变量动态import其他模块名场景，静态import或常量动态import无需配置。\n      ]\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HAP变量动态import HSP模块名"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HSP's Index.ets\nexport function add(a: number, b: number): number {\n  let c = a + b;\n  console.info('DynamicImport I am a HSP, %d + %d = %d', a, b, c);\n  return c;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's src/main/ets/pages/Index.ets\nlet packageName = 'myhsp';\nimport(packageName).then((ns:ESObject) => {\n  console.info('DynamicImport ns.add(3, 5) = %d', ns.add(3, 5));\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's oh-package.json5\n\"dependencies\": {\n  \"myhsp\": \"file:../myhsp\"\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's build-profile.json5\n\"buildOption\": {\n  \"arkOptions\": {\n    \"runtimeOnly\": {\n      \"packages\": [\n        \"myhsp\"  // 仅用于使用变量动态import其他模块名场景，静态import或常量动态import无需配置。\n      ]\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HAP变量动态import远程HAR模块名"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's src/main/ets/pages/Index.ets\nlet packageName = '@ohos/crypto-js';\nimport(packageName).then((ns:ESObject) => {\n  console.info('DynamicImport @ohos/crypto-js: ' + ns.CryptoJS.MD5(123456));\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's oh-package.json5\n\"dependencies\": {\n  \"@ohos/crypto-js\": \"2.0.3-rc.0\"\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's build-profile.json5\n\"buildOption\": {\n  \"arkOptions\": {\n    \"runtimeOnly\": {\n      \"packages\": [\n        \"@ohos/crypto-js\"  // 仅用于使用变量动态import其他模块名场景，静态import或常量动态import无需配置。\n      ]\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HAP变量动态import ohpm包"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's src/main/ets/pages/Index.ets\nlet packageName = 'json5';\nimport(packageName).then((ns:ESObject) => {\n  console.info('DynamicImport json5');\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's oh-package.json5\n\"dependencies\": {\n  \"json5\": \"1.0.2\"\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's build-profile.json5\n\"buildOption\": {\n  \"arkOptions\": {\n    \"runtimeOnly\": {\n      \"packages\": [\n        \"json5\"  // 仅用于使用变量动态import其他模块名场景，静态import或常量动态import无需配置。\n      ]\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HAP变量动态import自己的单文件"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's src/main/ets/Calc.ets\nexport function add(a: number, b: number): number {\n  let c = a + b;\n  console.info('DynamicImport I am a HAP, %d + %d = %d', a, b, c);\n  return c;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's src/main/ets/pages/Index.ets\nlet filePath = '../Calc';\nimport(filePath).then((ns:ESObject) => {\n  console.info('DynamicImport ns.add(3, 5) = %d', ns.add(3, 5));\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's build-profile.json5\n\"buildOption\": {\n  \"arkOptions\": {\n    \"runtimeOnly\": {\n      \"sources\": [\n        \"./src/main/ets/Calc.ets\"  // 仅用于使用变量动态import模块自己单文件场景，静态import或常量动态import无需配置。\n      ]\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HAP变量动态import自己的Native库"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// libnativeapi.so's index.d.ts\nexport const add: (a: number, b: number) => number;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's src/main/ets/pages/Index.ets\nlet soName = 'libnativeapi.so';\nimport(soName).then((ns:ESObject) => {\n  console.info('DynamicImport libnativeapi.so: ' + ns.default.add(2, 3));\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's oh-package.json5\n\"dependencies\": {\n  \"libnativeapi.so\": \"file:./src/main/cpp/types/libnativeapi\"\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's build-profile.json5\n\"buildOption\": {\n  \"arkOptions\": {\n    \"runtimeOnly\": {\n      \"packages\": [\n        \"libnativeapi.so\"  // 仅用于使用变量动态import其他模块名场景，静态import或常量动态import无需配置。\n      ]\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HAP变量动态import加载API"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// HAP's src/main/ets/pages/Index.ets\nlet packageName = '@system.app';\nimport(packageName).then((ns:ESObject) => { ns.default.terminate(); });\npackageName = '@system.router';\nimport(packageName).then((ns:ESObject) => { ns.default.clear(); });\npackageName = '@ohos.curves';\nimport(packageName).then((ns:ESObject) => { ns.default.springMotion(0.555, 0.75, 0.001); });\npackageName = '@ohos.matrix4';\nimport(packageName).then((ns:ESObject) => { ns.default.identity(); });\npackageName = '@ohos.hilog';\nimport(packageName).then((ns:ESObject) => { ns.default.info(0x0000, 'testTag', '%{public}s', 'DynamicImport @ohos.hilog.'); });\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过变量动态import加载API时无需配置runtimeOnly。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "har模块间动态import依赖解耦",
      children: "HAR模块间动态import依赖解耦"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用包含多个HAR包，HAR包之间的依赖关系比较复杂。在DevEco Studio中配置依赖关系时，可能会形成循环依赖。这时，如果HAR之间的依赖关系中仅有变量动态import，可以将HAR包之间直接依赖关系转移到HAP/HSP中配置，HAR包之间无需配置依赖关系，从而达到HAR包间依赖解耦的目的。如下示意图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(36750)/* ["default"] */.A) + "",
        width: "568",
        height: "173"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAR之间的依赖关系转移至HAP/HSP后："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(925944)/* ["default"] */.A) + "",
        width: "374",
        height: "283"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用限制"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅限在本地源码HAR包之间存在循环依赖时，使用该规避方案。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "被转移依赖的HAR之间只能通过变量动态import，不能有静态import或常量动态import。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["转移依赖时，需同时转移", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "dependencies"
          })
        }), "和", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "runtimeOnly"
          })
        }), "依赖配置。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HSP不支持转移依赖。即：HAP->HSP1->HSP2->HSP3，这里的HSP2和HSP3不能转移到HAP上面。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "转移依赖的整个链路上只能有HAR包，不能跨越HSP转移。即：HAP->HAR1->HAR2->HSP->HAR3->HAR4，HAR1对HAR2的依赖可以转移到HAP上，HAR3对HAR4的依赖可以转移到HSP上。但是，不能将HAR3或HAR4转移到HAP上。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果引用了其他工程模块、远程包或集成HSP，需确保在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile-app",
          children: "工程级build-profile.json5文件"
        }), "中的", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "useNormalizedOHMUrl"
          })
        }), "配置一致，同时设置为true或false，否则可能导致运行错误：", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Cannot find dynamic-import module library"
          })
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用实例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的实例通过在单向依赖HAP->HAR1->HAR2->HAR3之上增加依赖HAR2->HAR1、HAR3->HAR1，形成了循环依赖。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(944462)/* ["default"] */.A) + "",
        width: "568",
        height: "173"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// HAP's src/main/ets/pages/Index.ets\nlet harName = 'har1'\nimport(harName).then((ns: ESObject) => {\n  console.info('[DynamicImport] hap -> har1, 0 + 1 = ' + ns.classHar1.add(0, 1));\n})\n\n// HAR1's src/main/ets/utils/Calc.ets\nexport class classHar1 {\n  static isImportedHar2: boolean = false;\n\n  static add(a: number, b: number): number {\n    const c = a + b;\n    console.info('[DynamicImport] classHar1.add(), %d + %d = %d', a, b, c);\n\n    if (!classHar1.isImportedHar2) {\n      const harName = 'har2';\n      import(harName).then((ns: ESObject) => {\n        classHar1.isImportedHar2 = true;\n        console.info('[DynamicImport] har1 -> har2, 1 + 2 = ' + ns.classHar2.add(1, 2));\n      })\n    }\n\n    return c;\n  }\n}\n// HAR1's Index.ets\nexport { classHar1 } from './src/main/ets/utils/Calc';\n\n// HAR2's src/main/ets/utils/Calc.ets\nexport class classHar2 {\n  static isImportedHar1: boolean = false;\n  static isImportedHar3: boolean = false;\n\n  static add(a: number, b: number): number {\n    const c = a + b;\n    console.info('[DynamicImport] classHar2.add(), %d + %d = %d', a, b, c);\n\n    if (!classHar2.isImportedHar1) {\n      const harName = 'har1';\n      import(harName).then((ns: ESObject) => {\n        classHar2.isImportedHar1 = true;\n        console.info('[DynamicImport] har2 -> har1, 2 + 1 = ' + ns.classHar1.add(2, 1));\n      })\n    }\n\n    if (!classHar2.isImportedHar3) {\n      const harName = 'har3';\n      import(harName).then((ns: ESObject) => {\n        classHar2.isImportedHar3 = true;\n        console.info('[DynamicImport] har2 -> har3, 2 + 3 = ' + ns.classHar3.add(2, 3));\n      })\n    }\n\n    return c;\n  }\n}\n// HAR2's Index.ets\nexport { classHar2 } from './src/main/ets/utils/Calc';\n\n// HAR3's src/main/ets/utils/Calc.ets\nexport class classHar3 {\n  static isImportedHar1: boolean = false;\n\n  static add(a: number, b: number): number {\n    const c = a + b;\n    console.info('[DynamicImport] classHar3.add(), %d + %d = %d', a, b, c);\n\n    if (!classHar3.isImportedHar1) {\n      const harName = 'har1';\n      import(harName).then((ns: ESObject) => {\n        classHar3.isImportedHar1 = true;\n        console.info('[DynamicImport] har3 -> har1, 3 + 1 = ' + ns.classHar1.add(3, 1));\n      })\n    }\n\n    return c;\n  }\n}\n// HAR3's Index.ets\nexport { classHar3 } from './src/main/ets/utils/Calc';\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若未对HAR之间的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "dependencies"
        })
      }), "和", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "runtimeOnly"
        })
      }), "配置进行依赖解耦，ohpm无法解决循环依赖，依赖安装失败。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// HAP's oh-package.json5\n\"dependencies\": {\n  \"har1\": \"file:../har1\"\n}\n// HAP's build-profile.json5\n\"buildOption\": {\n  \"arkOptions\": {\n    \"runtimeOnly\": {\n      \"packages\": [ // 仅用于变量动态加载的场景，静态加载或常量动态加载无需配置。\n        \"har1\"\n      ]\n    }\n  }\n}\n\n// HAR1's oh-package.json5\n\"dependencies\": {\n  \"har2\": \"file:../har2\"\n}\n// HAR1's build-profile.json5\n\"buildOption\": {\n  \"arkOptions\": {\n    \"runtimeOnly\": {\n      \"packages\": [ // 仅用于变量动态加载的场景，静态加载或常量动态加载无需配置。\n        \"har2\"\n      ]\n    }\n  }\n}\n\n// HAR2's oh-package.json5\n\"dependencies\": {\n  \"har1\": \"file:../har1\",\n  \"har3\": \"file:../har3\"\n}\n// HAR2's build-profile.json5\n\"buildOption\": {\n  \"arkOptions\": {\n    \"runtimeOnly\": {\n      \"packages\": [ // 仅用于变量动态加载的场景，静态加载或常量动态加载无需配置。\n        \"har1\",\n        \"har3\"\n      ]\n    }\n  }\n}\n\n// HAR3's oh-package.json5\n\"dependencies\": {\n  \"har1\": \"file:../har1\",\n}\n// HAR3's build-profile.json5\n\"buildOption\": {\n  \"arkOptions\": {\n    \"runtimeOnly\": {\n      \"packages\": [ // 仅用于变量动态加载的场景，静态加载或常量动态加载无需配置。\n        \"har1\"\n      ]\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "对应的报错信息如下："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm ERROR: Run install command failed\nError: 00618005 Invalid Dependency\nError Message: Invalid dependency har2@~\\Coupled\\har2 -> har2@1.0.0.\n\nTry the following:\nThe name of an indirect dependency cannot be the same as the module name.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将HAR之间的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "dependencies"
        })
      }), "和", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "runtimeOnly"
        })
      }), "配置转移到HAP中，解耦了包间循环依赖，程序能够正确运行。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// HAP's oh-package.json5\n\"dependencies\": {\n  \"har1\": \"file:../har1\",\n  \"har2\": \"file:../har2\",\n  \"har3\": \"file:../har3\"\n}\n// HAP's build-profile.json5\n\"buildOption\": {\n  \"arkOptions\": {\n    \"runtimeOnly\": {\n      \"packages\" : [ // 仅用于变量动态加载的场景，静态加载或常量动态加载无需配置。\n        \"har1\",\n        \"har2\",\n        \"har3\"\n      ]\n    }\n  }\n}\n\n// HAR1's oh-package.json5\n\"dependencies\": {}\n// HAR1's build-profile.json5\n\"buildOption\": {}\n\n// HAR2's oh-package.json5\n\"dependencies\": {}\n// HAR2's build-profile.json5\n\"buildOption\": {}\n\n// HAR3's oh-package.json5\n\"dependencies\": {}\n// HAR3's build-profile.json5\n\"buildOption\": {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "对应的运行日志如下："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[DynamicImport] classHar1.add(), 0 + 1 = 1\n[DynamicImport] hap -> har1, 0 + 1 = 1\n[DynamicImport] classHar2.add(), 1 + 2 = 3\n[DynamicImport] har1 -> har2, 1 + 2 = 3\n[DynamicImport] classHar1.add(), 2 + 1 = 3\n[DynamicImport] har2 -> har1, 2 + 1 = 3\n[DynamicImport] classHar3.add(), 2 + 3 = 5\n[DynamicImport] har2 -> har3, 2 + 3 = 5\n[DynamicImport] classHar1.add(), 3 + 1 = 4\n[DynamicImport] har3 -> har1, 3 + 1 = 4\n"
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
944462(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
349415(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
36750(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
925944(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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