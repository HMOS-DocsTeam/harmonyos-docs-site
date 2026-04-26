"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["29520"], {
556770(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_debug_app_ide_code_debugging_ide_hot_reload_ide_hot_reload_md_f21_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-debug-app-ide-code-debugging-ide-hot-reload-ide-hot-reload-md-f21.json
var site_docs_ide_debug_app_ide_code_debugging_ide_hot_reload_ide_hot_reload_md_f21_namespaceObject = JSON.parse('{"id":"ide-debug-app/ide-code-debugging/ide-hot-reload/ide-hot-reload","title":"Hot Reload","description":"DevEco Studio提供Hot Reload（热重载）能力，支持开发者在真机或模拟器上运行/调试应用时，修改代码并保存后无需重启应用，在真机或模拟器上即可使用最新的代码，帮助开发者更快速地进行调试。","source":"@site/docs/ide-debug-app/ide-code-debugging/ide-hot-reload/ide-hot-reload.md","sourceDirName":"ide-debug-app/ide-code-debugging/ide-hot-reload","slug":"/ide-debug-app/ide-code-debugging/ide-hot-reload/","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-hot-reload/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Hot Reload","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hot-reload","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"增量调试","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-incremental-debugging/"},"next":{"title":"查看ArkUI状态变量","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-arkui-state/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-debug-app/ide-code-debugging/ide-hot-reload/ide-hot-reload.md


const frontMatter = {
	title: 'Hot Reload',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hot-reload',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = 'Hot Reload';

const assets = {

};



const toc = [{
  "value": "热重载、热重启、完全重启的区别",
  "id": "热重载热重启完全重启的区别",
  "level": 2
}, {
  "value": "使用约束",
  "id": "使用约束",
  "level": 2
}, {
  "value": "使能热重启（可选）",
  "id": "使能热重启可选",
  "level": 2
}, {
  "value": "操作步骤",
  "id": "操作步骤",
  "level": 2
}, {
  "value": "动态配置签名或应用版本号（可选）",
  "id": "动态配置签名或应用版本号可选",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "hot-reload",
        children: "Hot Reload"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio提供Hot Reload（热重载）能力，支持开发者在真机或模拟器上运行/调试应用时，修改代码并保存后无需重启应用，在真机或模拟器上即可使用最新的代码，帮助开发者更快速地进行调试。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["针对大多数代码修改场景，热重载均能提供支持，但是一些特殊场景需要通过热重载+重启应用后方可生效，因此，DevEco Studio提供基于热重载的增强能力——热重启。", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section1724105718289",
        children: "开启开关后"
      }), "，DevEco Studio在遇到热重载不支持的场景时，将自动切换至热重启以获取更强的支持能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 5.1.1 Beta1版本开始支持热重启能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(658455)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hot Reload支持Stage模型的ArkTS工程，不支持ArkTS卡片相关工程，不建议在hotReload模式下执行与ArkTS卡片相关的操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "热重载热重启完全重启的区别",
      children: "热重载、热重启、完全重启的区别"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "热重载"
          })
        }), "：不重启应用，可保留应用状态，但整个过程会重新运行入口文件内的逻辑。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "热重启"
          })
        }), "：在运行流程上，与热重载相比，主要区别在于会重启应用，不保留应用状态，支持更广泛的ArkTS代码修改快速生效。一旦执行了热重启，后续热重载流程均会被热重启取代。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "完全重启"
          })
        }), "：会完全重新运行应用，该任务较为耗时，因为它会重新全量编译代码和资源文件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用约束",
      children: "使用约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 热重载/热重启的修改文件支持范围"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "修改文件"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "热重载"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "热重启"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改Entry入口模块内ets、ts代码文件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改Entry直接或间接依赖的Har模块内代码文件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Har模块与Entry模块间无Hsp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改Entry直接或间接依赖的Hsp模块内代码文件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "引入的其他工程Har模块内代码文件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Har模块与Entry模块间无Hsp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "引入的其他工程Hsp模块内代码文件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改worker线程文件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改模块目录下Index文件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "启动应用后新增的代码文件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C++、so文件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resource资源文件（如修改string.json文件的内容）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持对资源引用的修改，例如把$r('app.color.greenColor')改成$r('app.color.redColor')。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " 热重载/热重启的代码元素支持范围"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "代码元素"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "变更行为"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "热重载"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "热重启"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI代码（如修改字号、颜色等）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增、修改、删除"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI响应事件（如添加onClick事件等）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增、修改、删除"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "import  （从DevEco Studio 6.1.0 Beta1版本开始支持import *）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持从启动应用时未加载的文件中import模块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改、删除"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "动态import  lazy import  napi_load_module  napi_load_module_with_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从DevEco Studio 6.1.0 Beta1版本开始，支持部分能力"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从DevEco Studio 6.1.0 Beta1版本开始部分，支持部分能力"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持从启动应用时未加载的文件中import模块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改、删除"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从DevEco Studio 6.1.0 Beta1版本开始支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从DevEco Studio 6.1.0 Beta1版本开始支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "export"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增export default语句时应同步在调用文件内新增对应import语句，否则将失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改、删除"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰器（@State、@Prop等）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增、修改、删除"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "热重载、热重启：@Entry修饰的文件支持@Styles新增、修改、删除。  热重启：@Entry修饰的文件支持@State新增、修改和删除。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "declare声明变量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增、修改、删除"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Struct代码块"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Entry修饰的文件内不支持新增Struct代码块热重载，其他文件支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Entry修饰的文件不支持成员变量、成员函数热重载，其他文件支持。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Entry修饰的文件内不支持新增包含成员函数的class，其他文件支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Entry修饰的文件内class不支持新增成员函数，其他文件支持。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "继承"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Entry修饰的文件内不支持类继承及被继承场景，其他文件支持。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增、删除"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Entry修饰的文件内不支持接口对象修改，其他文件支持。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "枚举"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增、修改"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Entry修饰的文件内不支持新增枚举，不支持修改枚举的键和值，其他文件支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "匿名函数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增、修改、删除"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lambda函数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增、修改、删除"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "闭包函数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增、修改、删除"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "闭包变量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增、删除"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "热重载仅支持顶层闭包变量（不包括this变量）的新增或删除。  从DevEco Studio 6.0.0 Beta3版本开始，热重启不支持首次新增this变量或删除所有this变量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "热重载不支持顶层闭包变量的修改。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "自定义组件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增、修改、删除"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "热重载：@Entry修饰的文件内仅支持通过import方式引入的自定义组件的新增和修改。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表3"
        })
      }), " 其他场景"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "热重载"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "热重启"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "命中断点时"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["点击", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-debug-app/ide-code-debugging/ide-debug-arkts-debugger#section638719251088",
              children: "Resume Program"
            }), "继续执行后再进行热重载/热重启。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改跳转的其他ability页面"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改代码并执行热重载后，重新拉起该ability页面可生效。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使能热重启可选",
      children: "使能热重启（可选）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果需要使用热重启的能力，先打开对应开关：点击菜单栏", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "File > Settings"
        })
      }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DevEco Studio > Preferences/Settings"
        })
      }), "） ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: ">"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Build, Execution, Deployment > Hot Reload"
        })
      }), "，勾选", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Enable hot restart********(to hot reload and restart app)"
        })
      }), "，点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "OK"
        })
      }), "完成设置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(900314)/* ["default"] */.A) + "",
        width: "929",
        height: "688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "操作步骤",
      children: "操作步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "连接真机设备或模拟器。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在下拉菜单中，将运行/调试配置切换为Hot Reload的配置", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(57084)/* ["default"] */.A) + "",
            width: "60",
            height: "19"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(225616)/* ["default"] */.A) + "",
            width: "238",
            height: "162"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["运行/调试应用，请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-run-device",
            children: "使用本地真机运行应用"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-run-emulator",
            children: "使用模拟器运行应用"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "修改代码后，可以通过如下操作，查看设备上修改后的显示效果。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["点击Hot Reload", (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(699127)/* ["default"] */.A) + "",
                width: "17",
                height: "14"
              }), "按钮："]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(655320)/* ["default"] */.A) + "",
                width: "707",
                height: "35"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["通过快捷键方式触发Hot Reload：需要先在菜单栏点击", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "File > Settings"
                })
              }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "DevEco Studio > Preferences/Settings"
                })
              }), "），选择", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Tools > Actions on Save"
                })
              }), "，勾选", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Perform hot reload"
                })
              }), "，点击", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "OK"
                })
              }), "完成设置。修改代码后通过快捷键", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Ctrl + S"
                })
              }), "即可触发Hot Reload。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(316947)/* ["default"] */.A) + "",
                width: "972",
                height: "702"
              })
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "成功执行热重载后，控制台会打印以下内容："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Performing hot reload...\nSyncing files to device xxx\nReloaded 1 files in x s xxx ms.\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "成功执行热重启后，控制台中会打印以下内容："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Performing hot restart...\n$ hdc shell aa force-stop com.xx.xx\nSyncing files to device xxx\nReloaded 1 files in x s xxx ms.\n$ hdc shell aa start -a EntryAbility -b com.xxx.xxx in xxx ms\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击停止按钮终止运行/调试运行，退出Hot Reload模式。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "动态配置签名或应用版本号可选",
      children: "动态配置签名或应用版本号（可选）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在多人协作开发场景中，使用Hot Reload能力时，可以在hvigorfile.ts中动态配置签名或应用版本号，避免每个开发者都需要本地修改。该功能从DevEco Studio 6.0.2 Beta1版本开始支持。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["可以不使用build-profile.json5中自动生成的签名信息，而是在hvigorfile.ts中配置签名信息，Hot Reload功能仍可正常使用，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-build-customization/ide-hvigor-config-ohos/ide-hvigor-config-ohos-sample#section973053620286",
          children: "修改每个hvigorNode中的build-profile.json5"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["可以不使用app.json5中的versionCode，而是在hvigorfile.ts中动态配置应用版本号，Hot Reload功能仍可正常使用，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-build-customization/ide-hvigor-config-ohos/ide-hvigor-config-ohos-sample#section9435132933118",
          children: "修改app.json5中的配置信息"
        }), "。"]
      }), "\n"]
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
316947(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752711-fc6b2a7249bfe0388972215ce8638b7b.png");

},
900314(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752717-f5e8efe5d82a2f2b2f675afc751e2af3.png");

},
225616(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752709-392d7c08c8647e426746c9a2fcd3df5f.png");

},
57084(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAATCAYAAADMBm6RAAACPElEQVRYCe1Xu47qMBD1Z938kEsEHVtBBw0WBbQgkKiBJr9BAc1S8OgQv4DgXB0nExzfOLB3taus2JGs2GbGnjNPo/BipF4ML34Bhzy+2WwwmUxgjLGD89VqhdvtFhKp5P7THu73+xgOh1gul1gsFhgMBmg0Guh2uzidTpUEV6RUKWACaTab2O/3RbI4n8+gIcjzU0AHAV+vV+u9Wq2G9XqNw+FghyCX9eVysaDp6a8L7y1MpKBjuf3/v0HAzM96vY5Wq4Xj8YjxeGyHXOWu6WnyUuZr6BsAT6dTm6cCYDQagUPIXzO/KfOYYmiloNIRmW0qwv0Ixmjvtzy/igzeIQZIf/vzhrdI4X4WgFiDvD4FPdzr9TCfzzN+Amy325jNZnZw7hqAvKzg5ZSCEoyZ4pRKlZe43RpENIDlFYByerJWSiOL8hSgHB3r4hQIAqbyHwVMI5USlXK8K/PEM0XGKAcstknudOU5d4zhKBUEzPBkmAr5Ieyv2aYehrTnBTk7+boKc4de/AhgYGsiG9b8qrw1squCgKVosSCR3CLlrlnQWNieK1oElQ+1WIsnPg8YTINIQ2eGynBmkyBgthi2GvZZth5pQyIpa7Ystq5OpwO2sodkc/NetO6OKAOceM+mQK5o/Xsbc5fFSnLZ5wgCJqM8PAhaPO0fsNvtKvXwIOBctfYULgUsoOlpPiOZp3xWytOSXq0U2eiRFCnW7CFgijG8mdP+nweGc1XIhrJXH4p0ewpwkeBP3Xs5wH8BNCF2sJ38heAAAAAASUVORK5CYII=");

},
699127(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAOCAYAAADJ7fe0AAABwElEQVQ4jYWTPcryUBCFn4gWviCiEkWI+FMZI27AXdhoJaSxcyXuQAtb02QXLsAiCTYqElETgvhHOvNV+np9hW+qe5hzz5yZe0e6XC4RH7FcLlksFpxOJwAymQyNRgNN05Ak6ZOO9E1kMpmQSCQoFotEUcR+v2ez2SDLMt1uF1mWv4v4vs94PKbf71Mqlf5UC4IA0zTxPI/BYCAIxQAejweGYRCGIff7Hdd1cV33RXJdlzAM0XWdfD6PYRhEUSSK2LaN53mk02lSqRTz+Zz5fP4iPXE8HqfT6eB5HpZlvfJxAMdxqFar6LoOIFT5xLlcjlqthuM4NJvNX5EgCCiXy8JF13UxTfN1VhTllSsUCmy3W7Gdb8/2v3h3FwfIZrMcj0eBpCgKnU4HgNlsJuQOhwO5XE50oqoqq9WKIAh4Ont398S73Y7RaMR6vUZVVdGJpmnk83lM00TXddrttlD5ia/XK+fzmUKhQKPREJ1IkkS328XzPKbTKclkUhikoigoisLPzw/JZJJer0csFvt1+v7tfd/HMAx836dSqVAsFgHY7/fcbjeGw+HXIf/ZnSiKsCwL27aFBWy1WtTr9a8i/wC9ncv/VKb4YgAAAABJRU5ErkJggg==");

},
655320(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912770-83c9827eb1d62a96c77a1fb6abe4c8dc.png");

},
658455(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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