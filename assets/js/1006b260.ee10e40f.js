"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["774845"], {
736157(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_runtime_arkts_runtime_module_module_principle_module_principle_md_100_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-runtime-arkts-runtime-module-module-principle-module-principle-md-100.json
var site_docs_arkts_arkts_runtime_arkts_runtime_module_module_principle_module_principle_md_100_namespaceObject = JSON.parse('{"id":"arkts/arkts-runtime/arkts-runtime-module/module-principle/module-principle","title":"模块化运行简介","description":"为了解决大型或复杂应用开发过程中，部分代码编译时被多次拷贝导致包体积增大、文件依赖、代码与资源共享困难以及单例和全局变量污染等问题，ArkTS支持应用模块化编译、打包和运行，简化代码的编写与维护。","source":"@site/docs/arkts/arkts-runtime/arkts-runtime-module/module-principle/module-principle.md","sourceDirName":"arkts/arkts-runtime/arkts-runtime-module/module-principle","slug":"/arkts/arkts-runtime/arkts-runtime-module/module-principle/","permalink":"/harmonyos-docs-site/arkts/arkts-runtime/arkts-runtime-module/module-principle/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"模块化运行简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-principle","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"GC垃圾回收","permalink":"/harmonyos-docs-site/arkts/arkts-runtime/gc-introduction/"},"next":{"title":"动态加载","permalink":"/harmonyos-docs-site/arkts/arkts-runtime/arkts-runtime-module/arkts-dynamic-import/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-runtime/arkts-runtime-module/module-principle/module-principle.md


const frontMatter = {
	title: '模块化运行简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-principle',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '模块化运行简介';

const assets = {

};



const toc = [{
  "value": "模块化运行加载流程",
  "id": "模块化运行加载流程",
  "level": 2
}, {
  "value": "ArkTS支持的模块化规范",
  "id": "arkts支持的模块化规范",
  "level": 2
}, {
  "value": "ECMAScript模块",
  "id": "ecmascript模块",
  "level": 3
}, {
  "value": "CommonJS模块",
  "id": "commonjs模块",
  "level": 3
}, {
  "value": "CommonJS与ES Module支持规格",
  "id": "commonjs与es-module支持规格",
  "level": 3
}, {
  "value": "ArkTS支持加载的模块类型",
  "id": "arkts支持加载的模块类型",
  "level": 2
}, {
  "value": "ets/ts/js",
  "id": "etstsjs",
  "level": 3
}, {
  "value": "JSON文件",
  "id": "json文件",
  "level": 3
}, {
  "value": "Native模块",
  "id": "native模块",
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
        id: "模块化运行简介",
        children: "模块化运行简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了解决大型或复杂应用开发过程中，部分代码编译时被多次拷贝导致包体积增大、文件依赖、代码与资源共享困难以及单例和全局变量污染等问题，ArkTS支持应用模块化编译、打包和运行，简化代码的编写与维护。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模块化是将ArkTS/TS/JS模块（一个文件对应一个模块）以及so模块通过编译工具或运行时机制将这些", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%A8%A1%E5%9D%97%E5%8C%96%E8%BF%90%E8%A1%8C%E5%8A%A0%E8%BD%BD%E6%B5%81%E7%A8%8B",
        children: "模块加载"
      }), "、解析、组合并执行的过程。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS支持的模块类型包括ets/ts/js文件、json文件、Native模块。ArkTS中支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ecmascript%E6%A8%A1%E5%9D%97",
        children: "ECMAScript模块规范"
      }), "及", (0,jsx_runtime.jsx)(_components.a, {
        href: "#commonjs%E6%A8%A1%E5%9D%97",
        children: "CommonJS模块规范"
      }), "，此外，ArkTS也对加载方式进行了拓展，包含", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-runtime/arkts-runtime-module/arkts-dynamic-import",
        children: "动态加载"
      }), "、静态加载、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-runtime/arkts-runtime-module/arkts-lazy-import",
        children: "延迟加载"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-runtime/arkts-runtime-module/js-apis-load-native-module",
        children: "同步动态加载Native模块"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-runtime/arkts-runtime-module/load-module-base-nodeapi",
        children: "Node-API接口加载文件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模块化运行加载流程",
      children: "模块化运行加载流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS模块化运行根据ECMAScript模块规范实现，以后序遍历的方式执行模块：从模块图的最左侧子树开始，执行模块，然后执行它们的同级，然后执行它们的父级。此算法递归运行，直至执行到模块图的根。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下图为例，每个父节点加载对应子节点，并按import顺序执行同级。模块图文件执行顺序为：D->F->G->E->B->I->H->C->A。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(962634)/* ["default"] */.A) + "",
        width: "643",
        height: "568"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A文件称为入口文件，即执行起点。一些内置的加载接口，如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#loadcontent9",
        children: "windowStage.loadContent"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-architecture",
        children: "路由跳转"
      }), "等页面拉起接口（即不是通过import写法拉起的文件），入参文件都会作为入口文件执行。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以A文件为入口，会加载一整套文件，包括A文件及其依赖文件，以及这些文件后续依赖的文件，直到各分支的叶节点。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["普通模块在同一线程内只加载一次，而在不同线程中会加载多次，每个线程都会生成新的模块对象。如果需要在进程内只加载一次，请使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable-module",
        children: "共享模块"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts支持的模块化规范",
      children: "ArkTS支持的模块化规范"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ecmascript模块",
      children: "ECMAScript模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ECMAScript模块（ECMAScript Modules，后文称ES Module）是JavaScript自ECMAScript6.0之后，从标准层面（ECMAScript® 2025 Language Specification (tc39.es)）实现的模块功能。其模块功能由两个命令组成：export和import。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS中export和import用法详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/learning-arkts/introduction-to-arkts#%E6%A8%A1%E5%9D%97",
        children: "ArkTS语言介绍"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "commonjs模块",
      children: "CommonJS模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CommonJS模块是JavaScript社区2009年提出的标准，首先在Node.js采用部分标准并实现。CommonJS将每个文件视为一个模块，通过module变量代表当前模块，module.exports即为该模块对外导出的变量，每个模块还拥有exports变量（exports === module.exports）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模块导入和模块导出写法参考下表："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "加载类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "模块导入"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "模块导出（不能把module.exports与exports混用）"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "变量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "const ohos = require('ohos')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "exports.add = add或module.exports.name = name"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "变量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "const ohos = require('ohos')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "module.exports = add"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "函数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "const ohos = require('ohos')  ohos.fun();"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "exports.fun = function foo () {}或module.exports.fun = function foo () {}"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(438859)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CommonJS模块仅适用于第三方包的导出，不支持在工程中创建和使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "commonjs与es-module支持规格",
      children: "CommonJS与ES Module支持规格"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CommonJS与ES Module互相引用的规格如下表所示，导入和导出语法需遵循各自的模块规范。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "互相引用关系"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ES Module 导出"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CommonJS导出"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "ES Module 导入"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "CommonJS导入"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts支持加载的模块类型",
      children: "ArkTS支持加载的模块类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "etstsjs",
      children: "ets/ts/js"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["加载ets/ts/js模块类型时，需遵循", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ecmascript%E6%A8%A1%E5%9D%97",
        children: "ECMAScript模块规范"
      }), "及", (0,jsx_runtime.jsx)(_components.a, {
        href: "#commonjs%E6%A8%A1%E5%9D%97",
        children: "CommonJS模块规范"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "json文件",
      children: "JSON文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSON（JavaScript Object Notation）是一种轻量级的数据交互格式，采用完全独立于编程语言的文本格式来存储和表示数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSON文件只能使用default方式导入，如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import data from './ImportJson.json';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "native模块",
      children: "Native模块"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Native模块（so）的导入导出与加载ets/ts/js语法规格一致。详情请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-runtime/arkts-runtime-module/arkts-import-native-module",
        children: "静态方式加载native模块"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(989389)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Native模块不支持在CommonJS模块中导入。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// libentry.so对应的index.d.ts\nexport const add: (a: number, b: number) => number;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// NameImport.ets\nimport { add } from 'libentry.so';\nadd(2, 3);\n"
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
962634(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957540-a25cf33bfc5132153e7859e72e4e145f.png");

},
989389(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
438859(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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