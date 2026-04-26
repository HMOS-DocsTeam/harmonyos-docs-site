"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["405280"], {
387368(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_check_ide_realtime_check_ide_realtime_check_md_8a5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-check-ide-realtime-check-ide-realtime-check-md-8a5.json
var site_docs_ide_code_edit_ide_code_check_ide_realtime_check_ide_realtime_check_md_8a5_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-check/ide-realtime-check/ide-realtime-check","title":"代码实时检查及快速修复","description":"实时检查","source":"@site/docs/ide-code-edit/ide-code-check/ide-realtime-check/ide-realtime-check.md","sourceDirName":"ide-code-edit/ide-code-check/ide-realtime-check","slug":"/ide-code-edit/ide-code-check/ide-realtime-check/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-realtime-check/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"代码实时检查及快速修复","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-realtime-check","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"代码生成/补全","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-completion/"},"next":{"title":"Code Linter代码检查","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-code-linter/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-check/ide-realtime-check/ide-realtime-check.md


const frontMatter = {
	title: '代码实时检查及快速修复',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-realtime-check',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '代码实时检查及快速修复';

const assets = {

};



const toc = [{
  "value": "实时检查",
  "id": "实时检查",
  "level": 2
}, {
  "value": "代码快速修复",
  "id": "代码快速修复",
  "level": 2
}, {
  "value": "C++快速修复使用演示",
  "id": "c快速修复使用演示",
  "level": 2
}, {
  "value": "填充switch语句",
  "id": "填充switch语句",
  "level": 3
}, {
  "value": "使用auto替换类型",
  "id": "使用auto替换类型",
  "level": 3
}, {
  "value": "用?:三元操作符替换if-else",
  "id": "用三元操作符替换if-else",
  "level": 3
}, {
  "value": "从使用处生成构造函数",
  "id": "从使用处生成构造函数",
  "level": 3
}, {
  "value": "将变量拆分为声明和赋值",
  "id": "将变量拆分为声明和赋值",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "代码实时检查及快速修复",
        children: "代码实时检查及快速修复"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实时检查",
      children: "实时检查"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编辑器会实时地进行代码分析，如果输入的语法不符合编码规范，或者出现语义语法错误，将在代码中突出显示错误或警告，将鼠标放置在错误代码处，会提示详细的错误信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 4.0 Release版本开始，当compileSdkVersion≥10时，编辑器代码实时检查支持ArkTS性能语法规范检查。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(907966)/* ["default"] */.A) + "",
        width: "1054",
        height: "401"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(797663)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前compileSdkVersion≥10且arkTSVersion≥1.1（默认）时，ArkTS严格类型检查支持实时检查。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "代码快速修复",
      children: "代码快速修复"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio支持代码快速修复能力，辅助开发者快速修复ArkTS或C++代码问题。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["查看告警信息：", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "使用双击"
            })
          }), "Shift"]
        })
      }), "快捷键打开文件查询框，输入", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "problems"
        })
      }), "打开问题工具面板；双击对应告警信息，可以查看告警的具体位置及原因。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["快速修复：", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "将光标放在错误告警的位置，可在弹出的悬浮窗中查看问题描述和对应修复方式；单击"
            })
          }), "M********ore actions"]
        })
      }), "可查看更多修复方法。或是在页面出现灯泡图标时，可点击图标并根据相应建议，实现代码快速修复。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(36041)/* ["default"] */.A) + "",
        width: "1385",
        height: "727"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "c快速修复使用演示",
      children: "C++快速修复使用演示"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面通过示例展示C++代码中快速修复功能的使用方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "填充switch语句",
      children: "填充switch语句"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编辑器支持快速修复方式，对C++代码自动补齐switch条件表达式缺失的case条件，提升编码效率。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["光标悬浮在switch表达式的条件变量处，点击灯泡图标，在下拉菜单中选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Create missing switch cases"
        })
      }), "，完成缺失的case条件补充。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(76888)/* ["default"] */.A) + "",
        width: "997",
        height: "652"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用auto替换类型",
      children: "使用auto替换类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编辑器中可以用 auto 替换 iterator，new expression，cast expression的声明类型。光标悬浮在类型名称处，点击灯泡图标，在下拉菜单中选择****Replace the type with 'auto********'****完成替换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(56276)/* ["default"] */.A) + "",
        width: "997",
        height: "162"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "用三元操作符替换if-else",
      children: "用?:三元操作符替换if-else"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编辑器中支持将if-else语句替换为?:三元操作符。光标放在if表达式的条件处，左侧出现黄色灯泡图标，点击灯泡图标，在下拉菜单中选择****Replace 'if else' with '?:'****完成替换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(805258)/* ["default"] */.A) + "",
        width: "737",
        height: "623"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "从使用处生成构造函数",
      children: "从使用处生成构造函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如使用了未定义的构造函数，可通过quickfix方式快速生成相应的构造函数定义。点击构造函数名称，左侧出现红色灯泡后，点击灯泡图标选择****Create new constructor 'xxx'****生成构造函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(332063)/* ["default"] */.A) + "",
        width: "869",
        height: "447"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "将变量拆分为声明和赋值",
      children: "将变量拆分为声明和赋值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["光标点击需要拆分的变量，左侧出现黄色灯泡后，点击灯泡图标选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Split into declaration and assignment"
        })
      }), "，将变量的声明赋值语句拆分成声明语句和赋值语句。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(942673)/* ["default"] */.A) + "",
        width: "737",
        height: "587"
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
942673(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913046-65c6fb9ad2748794649799c6e2ef4cac.gif");

},
332063(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832967-dd704a3955e7438d0b90fe51e1784002.gif");

},
56276(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752971-9ded19e19a9bad0fc7854ef17d226304.gif");

},
76888(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753042-456fb23f3fd408e25162ebb9e6ecea2c.gif");

},
797663(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
907966(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752973-41e835dc39feab4dbb0a8554b18994cd.png");

},
36041(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832975-8937bce40e25cdbf54ef05fdc692db42.png");

},
805258(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752981-936668e983c5294f39a26d5fbb82357e.gif");

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