"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["831593"], {
132553(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_build_expanding_ide_hvigor_task_ide_hvigor_task_md_51a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-build-expanding-ide-hvigor-task-ide-hvigor-task-md-51a.json
var site_docs_ide_build_expanding_ide_hvigor_task_ide_hvigor_task_md_51a_namespaceObject = JSON.parse('{"id":"ide-build-expanding/ide-hvigor-task/ide-hvigor-task","title":"开发Hvigor任务","description":"了解任务","source":"@site/docs/ide-build-expanding/ide-hvigor-task/ide-hvigor-task.md","sourceDirName":"ide-build-expanding/ide-hvigor-task","slug":"/ide-build-expanding/ide-hvigor-task/","permalink":"/harmonyos-docs-site/ide-build-expanding/ide-hvigor-task/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"开发Hvigor任务","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-task","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"模块化编译","permalink":"/harmonyos-docs-site/ide-build-optimized/ide-hvigor-esmodule-compile/"},"next":{"title":"开发Hvigor插件","permalink":"/harmonyos-docs-site/ide-build-expanding/ide-hvigor-plugin/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-build-expanding/ide-hvigor-task/ide-hvigor-task.md


const frontMatter = {
	title: '开发Hvigor任务',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-task',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = '开发Hvigor任务';

const assets = {

};



const toc = [{
  "value": "了解任务",
  "id": "了解任务",
  "level": 2
}, {
  "value": "注册任务",
  "id": "注册任务",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "开发hvigor任务",
        children: "开发Hvigor任务"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "了解任务",
      children: "了解任务"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任务是Hvigor构建过程中的基本执行单元，通常包含一段可执行代码；一个任务可以依赖其他多个任务。Hvigor任务调度执行时通过解析依赖关系确定任务执行时序。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UP-TO-DATE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任务标识，表示任务未实际执行。Hvigor任务增量跳过机制，在二次执行任务时检测任务输入输出条件未发生变化，则任务跳过执行提高构建效率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "> hvigor UP-TO-DATE ::PackageApp...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Finished"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任务执行完成标识，表示任务已执行完成。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "> hvigor Finished ::PackageApp... after 310 ms\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注册任务",
      children: "注册任务"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用HvigorNode节点对象注册任务。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑工程下hvigorfile.ts文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 导入模块\nimport { getNode, HvigorNode, HvigorTask } from '@ohos/hvigor';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写任务代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取当前hvigorNode节点对象\nconst node: HvigorNode = getNode(__filename);\n\n// 注册Task\nnode.registerTask({\n  name: 'customTask',\n  run() {\n    console.log('this is Task');\n  }\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行任务。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用hvigor命令行工具执行任务："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hvigorw customTask\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查看任务执行结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(366358)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "548",
            height: "85"
          })
        }), "\n"]
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
366358(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753201-fb2225bc2e62fe62f848a01824aa2b03.png");

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