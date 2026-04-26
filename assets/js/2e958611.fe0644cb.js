"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["708319"], {
502106(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_runtime_arkts_runtime_module_arkts_lazy_import_arkts_lazy_import_md_2e9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-runtime-arkts-runtime-module-arkts-lazy-import-arkts-lazy-import-md-2e9.json
var site_docs_arkts_arkts_runtime_arkts_runtime_module_arkts_lazy_import_arkts_lazy_import_md_2e9_namespaceObject = JSON.parse('{"id":"arkts/arkts-runtime/arkts-runtime-module/arkts-lazy-import/arkts-lazy-import","title":"延迟加载（lazy import）","description":"随着应用程序功能的扩展，冷启动时间显著增加，主要是因为启动初期加载了大量未实际执行的模块。这不仅延长了应用的初始化时间，还浪费了资源。需要精简加载流程，剔除非必需的文件执行，优化冷启动性能，确保用户体验流畅。","source":"@site/docs/arkts/arkts-runtime/arkts-runtime-module/arkts-lazy-import/arkts-lazy-import.md","sourceDirName":"arkts/arkts-runtime/arkts-runtime-module/arkts-lazy-import","slug":"/arkts/arkts-runtime/arkts-runtime-module/arkts-lazy-import/","permalink":"/harmonyos-docs-site/arkts/arkts-runtime/arkts-runtime-module/arkts-lazy-import/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"延迟加载（lazy import）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-lazy-import","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"动态加载","permalink":"/harmonyos-docs-site/arkts/arkts-runtime/arkts-runtime-module/arkts-dynamic-import/"},"next":{"title":"同步方式动态加载Native模块","permalink":"/harmonyos-docs-site/arkts/arkts-runtime/arkts-runtime-module/js-apis-load-native-module/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-runtime/arkts-runtime-module/arkts-lazy-import/arkts-lazy-import.md


const frontMatter = {
	title: '延迟加载（lazy import）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-lazy-import',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '延迟加载（lazy import）';

const assets = {

};



const toc = [{
  "value": "功能特性",
  "id": "功能特性",
  "level": 2
}, {
  "value": "使用方式",
  "id": "使用方式",
  "level": 2
}, {
  "value": "场景行为解析",
  "id": "场景行为解析",
  "level": 2
}, {
  "value": "lazy-import与动态加载的区别",
  "id": "lazy-import与动态加载的区别",
  "level": 2
}, {
  "value": "语法规格及起始支持版本",
  "id": "语法规格及起始支持版本",
  "level": 2
}, {
  "value": "错误示例",
  "id": "错误示例",
  "level": 3
}, {
  "value": "不推荐用法",
  "id": "不推荐用法",
  "level": 3
}, {
  "value": "注意事项",
  "id": "注意事项",
  "level": 3
}, {
  "value": "可延迟加载文件检测",
  "id": "可延迟加载文件检测",
  "level": 2
}, {
  "value": "检测步骤",
  "id": "检测步骤",
  "level": 3
}, {
  "value": "生成文件介绍",
  "id": "生成文件介绍",
  "level": 3
}, {
  "value": "检测原理",
  "id": "检测原理",
  "level": 3
}, {
  "value": "加载情况总结",
  "id": "加载情况总结",
  "level": 3
}, {
  "value": "被使用文件",
  "id": "被使用文件",
  "level": 3
}, {
  "value": "未被使用文件",
  "id": "未被使用文件",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例",
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
        id: "延迟加载lazy-import",
        children: "延迟加载（lazy import）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "随着应用程序功能的扩展，冷启动时间显著增加，主要是因为启动初期加载了大量未实际执行的模块。这不仅延长了应用的初始化时间，还浪费了资源。需要精简加载流程，剔除非必需的文件执行，优化冷启动性能，确保用户体验流畅。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(63470)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "延迟加载特性在API 12版本开始支持。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者如需在API 12上使用lazy import语法，需在工程中配置\"compatibleSdkVersionStage\": \"beta3\"，否则将无法通过编译。参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide-hvigor-build-profile-V5#section511142752919",
          children: "DevEco Studio build-profile.json5配置文件说明"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "针对API version大于12的工程，开发者可直接使用lazy import语法，无需再进行其他配置。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能特性",
      children: "功能特性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "延迟加载特性使文件在冷启动阶段不被加载，而是在程序运行时按需加载，从而缩短冷启动时间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用方式",
      children: "使用方式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以利用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-launch-overview/ide-insight-session-launch",
        children: "DevEco Profiler展示冷启动过程文件加载情况"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%8F%AF%E5%BB%B6%E8%BF%9F%E5%8A%A0%E8%BD%BD%E6%96%87%E4%BB%B6%E6%A3%80%E6%B5%8B",
        children: "可延迟加载文件检测"
      }), "、Trace工具或日志记录等手段，识别冷启动期间未被实际调用的文件，分析方法可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-arkts-high-performance#section12861143418213",
        children: "延迟加载lazy-import使用指导"
      }), "。通过对这些数据的分析，开发者可以精准定位启动阶段不必预先加载的文件列表，并在这些文件的调用点增加lazy标识。但需要注意，后续执行的加载是同步加载，可能阻塞任务执行（如单击任务，触发了延迟加载，那么运行时会去执行冷启动未加载的文件，从而增加耗时），因此是否使用lazy需要开发者自行评估。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(150938)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不建议盲目增加lazy，这会增加编译和运行时的识别开销。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景行为解析",
      children: "场景行为解析"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用lazy-import延迟加载。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// main.ets\nimport lazy { a } from \"./mod1\";    // \"mod1\" 未执行\nimport { c } from \"./mod2\";         // \"mod2\" 执行\n\n// ...\n\nconsole.info(\"main executed\");\nwhile (false) {\n    let xx = a;\n    let yy = c;\n}\n\n// mod1.ets\nexport let a = \"mod1 executed\"\nconsole.info(a);\n\n// mod2.ets\nexport let c = \"mod2 executed\"\nconsole.info(c);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行结果为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mod2 executed\nmain executed\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同时对同一模块引用lazy-import与import。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// main.ets\nimport lazy { a } from \"./mod1\";    // \"mod1\" 未执行\nimport { c } from \"./mod2\";         // \"mod2\" 执行\nimport { b } from \"./mod1\";         // \"mod1\" 执行\n\n// ...\n\nconsole.info(\"main executed\");\nwhile (false) {\n    let xx = a;\n    let yy = c;\n    let zz = b;\n}\n\n// mod1.ets\nexport let a = \"mod1 a executed\"\nconsole.info(a);\n\nexport let b = \"mod1 b executed\"\nconsole.info(b);\n\n// mod2.ets\nexport let c = \"mod2 c executed\"\nconsole.info(c);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行结果为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mod2 c executed\nmod1 a executed\nmod1 b executed\nmain executed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果在main.ets内删除lazy关键字，执行顺序如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mod1 a executed\nmod1 b executed\nmod2 c executed\nmain executed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "lazy-import与动态加载的区别",
      children: "lazy-import与动态加载的区别"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["lazy-import与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-runtime/arkts-runtime-module/arkts-dynamic-import",
        children: "动态加载"
      }), "都可以延后特定文件的执行时间，帮助设备分摊性能消耗，缓解特定时段的性能压力。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "区别项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "动态加载"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "lazy-import"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "语法示例"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "let A = await import(\"./A\");"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "import lazy { A } from \"./A\";"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "性能开销"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.创建异步任务开销。  2.执行到动态加载时，触发依赖模块的模块解析+源码执行。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.lazy-import的模块解析在冷启动依旧会触发遍历。  2.导入的变量A被使用到时，触发模块的源码执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "使用位置"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "代码块/运行逻辑中使用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要写在源码开头"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "是否可以运行时拼接"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "加载时序"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异步"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "lazy-import 相较于动态加载的优势："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在使用动态加载时，开发者需要将静态加载的代码（即同步导入）改写为动态加载语法（即异步导入），这可能涉及较大的代码修改量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果希望在冷启动阶段通过动态加载实现优化，开发者需要明确感知到被动态加载的文件在冷启动时不会被执行，否则会增加冷启动开销（放入异步队列等）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "相较于动态加载，使用 lazy-import 延迟加载，开发者只需在 import 语句中添加 lazy 关键字即可实现延迟加载，使用更加便捷。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "语法规格及起始支持版本",
      children: "语法规格及起始支持版本"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "lazy-import支持如下指令实现："
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "语法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ModuleRequest"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ImportName"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LocalName"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "开始支持的API版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "import lazy { x } from \"mod\";"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"mod\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"x\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"x\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API 12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "import lazy { x as v } from \"mod\";"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"mod\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"x\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"v\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API 12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "import lazy x from \"mod\";"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"mod\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"default\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"x\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API 12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "import lazy { KitClass } from \"@kit.SomeKit\";"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"@kit.SomeKit\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"KitClass\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"KitClass\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API 12"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "延迟加载共享模块或依赖路径内包含共享模块。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["延迟加载对于共享模块依旧生效，使用限制参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable-module",
            children: "共享模块开发指导"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "错误示例",
      children: "错误示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下写法将引起编译报错。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export lazy var v;                    // 编译器提示报错：应用编译报错\nexport lazy default function f(){};   // 编译器提示报错：应用编译报错\nexport lazy default function(){};     // 编译器提示报错：应用编译报错\nexport lazy default 42;               // 编译器提示报错：应用编译报错\nexport lazy { x };                    // 编译器提示报错：应用编译报错\nexport lazy { x as v };               // 编译器提示报错：应用编译报错\nexport lazy { x } from \"mod\";         // 编译器提示报错：应用编译报错\nexport lazy { x as v } from \"mod\";    // 编译器提示报错：应用编译报错\nexport lazy * from \"mod\";             // 编译器提示报错：应用编译报错\n\nimport lazy * as ns from \"mod\";            // 编译器提示报错：应用编译报错\nimport lazy KitClass from \"@kit.SomeKit\"   // 编译器提示报错：应用编译报错\nimport lazy * as MyKit from \"@kit.SomeKit\" // 编译器提示报错：应用编译报错\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "与type关键词同时使用会导致编译报错。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import lazy type { obj } from \"./mod\";    // 不支持，编译器、应用编译报错\nimport type lazy { obj } from \"./mod\";    // 不支持，编译器、应用编译报错\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不推荐用法",
      children: "不推荐用法"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在同一个ets文件中，期望延迟加载的依赖模块标记不完全。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "标记不完全将导致延迟加载失效，并且增加识别延迟加载的开销。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// mod1.ets\nexport let a = \"Variable A from mod1\";\nexport let b = \"Variable B from mod1\";\nconsole.info(\"mod1 executed\");\n\n// mod2.ets\nexport let c = \"Variable C from mod2\";\nconsole.info(\"mod2 executed\");\n\n// main.ets\nimport lazy { a } from \"./mod1\";    // 从\"mod1\"内获取a对象，标记为延迟加载\nimport { c } from \"./mod2\";\nimport { b } from \"./mod1\";         // 再次获取\"mod1\"内属性，未标记lazy，\"mod1\"默认执行\n\n// ...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在同一ets文件中，未使用延迟加载变量并再次导出，不支持延迟加载变量被re-export导出，可以通过打开工程级build-profile.json5文件中的reExportCheckMode开关进行扫描排查。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// build-profile.json5\n{\n  \"app\": {\n    ...,\n    \"products\": [\n      {\n        ...,\n        \"buildOption\": {\n          \"arkOptions\": {\n            \"reExportCheckMode\": \"compatible\"\n          }\n        }\n      }\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(174264)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "针对以下场景，编译时是否进行拦截报错：使用lazy import导入的变量，在同文件中被再次导出。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "noCheck（缺省默认值）：不检查，不报错。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "compatible：兼容模式，报Warning。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "strict：严格模式，报Error。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该字段从DevEco Studio 5.0.13.200版本开始支持。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这种方式导出的变量c未在B.ets中使用，因此C.ets不会触发执行。在A.ets中使用变量c时，由于该变量未被初始化，将会抛出JavaScript异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// A.ets\nimport { c } from \"./B\";\nconsole.info(c);\n\n// B.ets\nimport lazy { c } from \"./C\";    // 从\"C\"内获取c对象，标记为延迟加载\nexport { c }\n\n// C.ets\nlet c = \"c\";\nexport { c }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ReferenceError: c is not initialized\n    at func_main_0 (A.ets:2:13)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// A_ns.ets\nimport * as ns from \"./B\";\nconsole.info(ns.c);\n\n// B.ets\nimport lazy { c } from \"./C\";    // 从“C”内获取c对象，标记为延迟加载\nexport { c }\n\n// C.ets\nlet c = \"c\";\nexport { c }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ReferenceError: module environment is undefined\n    at func_main_0 (A_ns.js:2:13)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不依赖该模块执行的副作用（如初始化全局变量，挂载globalThis等）。可参考：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-runtime/arkts-runtime-module/arkts-module-side-effects",
          children: "模块加载副作用及优化"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用导出对象时，触发延迟加载的耗时可能导致对应特性的功能劣化。由于lazy-import的后续加载是同步加载，可能在某些场景阻塞任务执行（比如在点击业务时触发了懒加载，那么运行时会执行冷启动未加载的文件，增加执行耗时，存在掉帧风险），是否使用延迟加载仍需要开发者自行评估。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用lazy特性可能导致模块未执行，从而引发bug。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "已经被动态加载的文件同时使用lazy-import时，这些文件会执行lazy标识，在动态加载的then逻辑中同步加载。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "可延迟加载文件检测",
      children: "可延迟加载文件检测"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本工具用于本地检测应用冷启动时的文件加载情况，可打印应用启动后固定时间段内使用和未使用的文件名，帮助开发者筛选可延迟加载的文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(15691)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可延迟加载文件检测从API 20版本开始支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "检测步骤",
      children: "检测步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["打开工具：获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/debugging-commands/hdc#%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87",
            children: "hdc工具"
          }), "，连接设备，在终端直接输入下方命令执行。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell param set persist.ark.properties 0x200105c\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可选项：设置抓取应用启动阶段的时间，单位为ms，范围为[100-30000]，默认为2s。设置范围外的数字无法保证工具的计时准确性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell param set persist.ark.importDuration 1000\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "清除应用后台进程后，重新启动应用进程，等待抓取时间结束，会在应用沙箱下（data/app/el2/100/base/${bundlename}/files/）生成主/子线程对应文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(87821)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "该工具仅支持本地安装的应用。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "生成文件的操作需要在当前进程存活时执行。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果抓取过程中进程退出，那么不会生成对应的文件。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关闭工具"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该工具常开会损耗性能，使用后应及时关闭。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell param set persist.ark.properties 0x000105c\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "生成文件介绍",
      children: "生成文件介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "工具会根据设置的抓取时间，分别记录主线程和子线程在该时间内的文件加载情况。各线程独立计时。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，设置时间为1秒，工具将记录主线程和子线程各自启动后1秒内的文件执行情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件生成路径：data/app/el2/100/base/${bundleName}/files"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主线程文件名：${bundleName}_redundant_file.txt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "子线程文件名：${bundleName}_${tId}_redundant_file.txt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(509245)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "主线程文件名不含线程号信息，因此写入文件时会发生覆盖。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "子线程文件名包含线程号tId，且每个tId唯一，确保每个子线程对应一个单独的文件。若需查找对应线程文件，可依据日志中的线程号或使用trace工具查看线程号进行匹配。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前测试应用bundleName为com.example.myapplication，应用内创建了一个子线程，线程号为18089（随机）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件生成路径：data/app/el2/100/base/com.example.myapplication/files"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主线程文件名：data/app/el2/100/base/com.example.myapplication/files/com.example.myapplication_redundant_file.txt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "子线程文件名：data/app/el2/100/base/com.example.myapplication/files/com.example.myapplication_18089_redundant_file.txt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(103082)/* ["default"] */.A) + "",
        width: "628",
        height: "384"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "检测原理",
      children: "检测原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下例所示，A文件和B文件同时被Index文件依赖，那么A、B会随着Index文件的加载被直接加载执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A文件执行过程完成了变量定义赋值并进行导出，对应A文件的耗时。B文件定义了一个函数并导出，对应B文件的耗时。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Index文件执行时，B文件的导出函数func被顶层执行，因此B文件的导出是无法优化的，在工具侧就会显示used。但是A文件的导出变量a在Index文件的myFunc函数被调用时才使用，如果冷启动阶段没有其他文件调用myFunc函数，那么A文件在工具侧就会显示unused，即可以延迟加载。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { a } from './A';\nimport { func } from './B';\nfunc(); // 使用B文件变量\nexport function myFunc() {\n    return a; // a变量未被使用\n}\n\n// A.ets\nexport let a = 10;\n\n// B.ets\nexport function func() {\n    return 20;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "加载情况总结",
      children: "加载情况总结"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "总结加载时间内所有文件及其耗时，包括已使用的文件及其耗时和未使用的文件及其耗时。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<----Summary----> Total file number: 13, total time: 2ms, including used file:12, cost time: 1ms, and unused file: 1, cost time: 1ms\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述信息表示应用当前线程在冷启动抓取时间段内加载了13个文件，共耗时2ms。其中，12个文件导出内容被其他文件加载使用，执行这12个文件共耗时1ms；1个文件执行完成，但是其导出内容没有被其他文件在冷启阶段用到，耗时1ms。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "被使用文件",
      children: "被使用文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在冷启动阶段，导出内容被其他文件使用的文件称为used file。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景1：通过静态加载所加载的文件，其父文件（parentModule）代表该文件的引入方。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "used file 1: &entry/src/main/ets/pages/1&, cost time: 0.248ms\n    parentModule 1: &entry/src/main/ets/pages/outer& a\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对应写法示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/pages/outer.ets\nimport { a } from './1' // outer文件从1文件中加载了a变量\nconsole.info(\"example \", a); // a变量在outer文件执行时就被使用\n\n// entry/src/main/ets/pages/1.ets\nexport let a = \"a\";\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景2：通过静态加载所加载的文件，存在多个父文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 说明：显示顺序不代表父文件的加载顺序。\nused file 1: &entry/src/main/ets/pages/1&, cost time: 0.248ms\n   parentModule 1: &entry/src/main/ets/pages/outer& a\n   parentModule 2: &entry/src/main/ets/pages/innerinner& a\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对应写法示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/pages/outer.ets\nimport { a } from './1' // outer文件从1文件中加载了a变量\nconsole.info(\"example \", a); // a变量在outer文件执行时就被使用\n\n// entry/src/main/ets/pages/innerinner.ets\nimport { a } from './1' // innerinner文件从1文件中加载了a变量\nconsole.info(\"example \", a); // a变量在innerinner文件执行时就被使用\n\n// entry/src/main/ets/pages/1.ets\nexport let a = \"a\";\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景3：通过静态加载所加载的文件，存在多个导出，但是只显示了一部分。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "used file 1: &entry/src/main/ets/pages/1&, cost time: 0.248ms\n   parentModule 1: &entry/src/main/ets/pages/outer& a\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对应写法示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/pages/outer.ets\nimport { a , b } from './1' // 加载1文件的多个变量\nconsole.info(\"example \", a); // a被使用\nexport function myFunc() {\n return b; // b未被使用\n}\n\n// entry/src/main/ets/pages/1.ets\nexport let a = 10;\nexport let b = 100;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景4：动态加载或使用napi接口加载时，暂未支持父文件打印，因此不会显示父文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "unused file 1: &entry/src/main/ets/pages/1&, cost time: 0.07ms\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对应写法示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/pages/outer.ets\nimport(\"./1\").then((ns:ESObject) => {\n    console.info('import file 1 success');\n});\n\n// entry/src/main/ets/pages/1.ets\nexport let a = \"a\";\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景5：通过loadContent、pushUrl等接口加载的文件，其父文件（parentModule）统一显示为EntryPoint。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "used file 1: &entry/src/main/ets/pages/Index&, cost time: 0.545ms\nparentModule 1: EntryPoint\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "未被使用文件",
      children: "未被使用文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在冷启动阶段，导出内容没有被其他文件使用的文件称为未使用的文件，代表可以延迟加载。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景与被使用文件场景一致，但未被使用文件没有变量被使用的信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景：文件被这些父文件引用，但变量未被使用。可在引入未使用文件处（父文件）使用延迟加载方式加载该文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "unused file 1: &entry/src/main/ets/pages/under1&, cost time: 0.001ms\n    parentModule 1: &entry/src/main/ets/pages/1&\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对应写法示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/pages/1.ets\nimport { a } from './under1' // 加载under1文件的变量\nexport function myFunc() {\n    return a; // a未被使用\n}\n\n// entry/src/main/ets/pages/under1.ets\nexport let a = \"a\";\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可使用延迟加载："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/pages/1.ets\nimport lazy { a } from './under1' // 不在此处触发under1文件的加载\nexport function myFunc() {\n    return a; // 此时触发under1文件的加载\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下述例子中A文件被引用，在应用启动到点击按钮的这段时间里，A文件并没有被实际执行，在冷启动阶段加载A文件的行为属于冗余。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// A.ets\nexport let A = \"A\";\n\n// Index.ets\nimport { A } from \"./A\";\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    RelativeContainer() {\n      Button('点击执行A文件')\n        .onClick(() => {\n          // 点击后触发A文件的执行\n          console.info(\"执行A文件\", A);\n        })\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(474870)/* ["default"] */.A) + "",
        width: "1551",
        height: "449"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过抓取Trace图查看调用栈，可以发现应用在冷启动时加载了A文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用工具分析"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "连接设备，在终端直接输入下方命令执行。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell param set persist.ark.properties 0x200105c\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动应用，启动结束后关闭应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "下载文件到本地，其中${bundleName}为应用名。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc file recv data/app/el2/100/base/${bundleName}/files/${bundleName}_redundant_file.txt D:\\\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对上述示例代码获取到的文件进行分析。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(178950)/* ["default"] */.A) + "",
            width: "911",
            height: "389"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "修改方式"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "工具筛选出冗余文件后，开发者可在引入时添加lazy关键字，标记文件可延迟加载。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// A.ets\nexport let A = \"A\";\n\n// Index.ets\nimport lazy { A } from \"./A\"; // 此处添加lazy关键字，标记该文件可延迟加载\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    RelativeContainer() {\n      Button('点击执行A文件')\n        .onClick(() => {\n          // 点击后触发A文件的执行\n          console.info(\"执行A文件\", A);\n        })\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(775083)/* ["default"] */.A) + "",
        width: "1551",
        height: "436"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过抓取Trace图查看调用栈可以发现，使用lazy-import标识后，应用在冷启动时不再加载A文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "优化效果"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "优化效果"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "加载文件耗时（微秒μs）"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "优化前"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "412us"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "优化后"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "350us"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据上述优化前后案例Trace图对比分析，使用延迟加载后应用冷启动时不再加载A文件，在资源加载阶段减少因加载冗余文件产生的耗时约15%，提高了应用冷启动性能。（由于案例仅演示场景，优化数据仅做参考，在实际业务中随着引用文件的复杂度提高，引用文件数量增多，优化效果也会随之提升。）"
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
15691(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
103082(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437587-44040b0502a50356f50b843930dd7737.png");

},
87821(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
474870(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957542-3bd4be32f553ebd6ac006b6a87143cfa.png");

},
509245(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
775083(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797894-83bce59ce781b2b56200d4ee3a66b9fc.png");

},
150938(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
178950(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477543-13c57c7ea63eb92be0c7a9f458979738.png");

},
63470(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
174264(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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