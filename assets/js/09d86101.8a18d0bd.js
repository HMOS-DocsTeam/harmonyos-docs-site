"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["216473"], {
449749(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_ohpm_cli_ide_ohpm_common_commands_ide_ohpm_clean_ide_ohpm_clean_md_09d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-ohpm-cli-ide-ohpm-common-commands-ide-ohpm-clean-ide-ohpm-clean-md-09d.json
var site_docs_ide_ohpm_cli_ide_ohpm_common_commands_ide_ohpm_clean_ide_ohpm_clean_md_09d_namespaceObject = JSON.parse('{"id":"ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-clean/ide-ohpm-clean","title":"ohpm clean","description":"清理工程下所有模块的ohpm安装产物。","source":"@site/docs/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-clean/ide-ohpm-clean.md","sourceDirName":"ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-clean","slug":"/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-clean/","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-clean/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"title":"ohpm clean","sidebar_position":18,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-clean","kit":"devtools/cli","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"ohpm ping","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-ping/"},"next":{"title":"ohpm dist-tags","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-dist-tags/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-clean/ide-ohpm-clean.md


const frontMatter = {
	title: 'ohpm clean',
	sidebar_position: 18,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-clean',
	kit: 'devtools/cli',
	last_updated: '2026-04-24'
};
const contentTitle = 'ohpm clean';

const assets = {

};



const toc = [{
  "value": "命令格式",
  "id": "命令格式",
  "level": 2
}, {
  "value": "功能描述",
  "id": "功能描述",
  "level": 2
}, {
  "value": "Options",
  "id": "options",
  "level": 2
}, {
  "value": "keep-lockfile",
  "id": "keep-lockfile",
  "level": 3
}, {
  "value": "log_level",
  "id": "log_level",
  "level": 3
}, {
  "value": "debug",
  "id": "debug",
  "level": 3
}, {
  "value": "注意事项",
  "id": "注意事项",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ohpm-clean",
        children: "ohpm clean"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "清理工程下所有模块的ohpm安装产物。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命令格式",
      children: "命令格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm clean|cls\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能描述",
      children: "功能描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "清理工程下所有模块的oh_modules目录、oh-package-lock.json5文件和oh-package-targetName-lock.json5文件（指定选项--target_path安装时生成）()，清理完成后会在控制台打印耗时信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "options",
      children: "Options"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "keep-lockfile",
      children: "keep-lockfile"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：false"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型： Boolean"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "别名：kl"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 clean 命令后面配置--kl或者--keep-lockfile参数，执行清理时会保留oh-package-lock.json5文件和oh-package-targetName-lock.json5文件（指定选项--target_path安装时生成）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "log_level",
      children: "log_level"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：无"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型： String"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从ohpm 6.0.2.636版本开始，可以在 clean 命令后配置--log_level <string>参数，指定执行当前命令的日志级别（info、debug、warn、error），如果未指定该值则日志级别为.ohpmrc中配置的log_level的级别。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "debug",
      children: "debug"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：false"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型： Boolean"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从ohpm 6.0.2.636版本开始，可以在命令后配置--debug参数，指定执行当前命令的日志级别为debug，该配置仅在当前命令行生效，不修改.ohpmrc中的日志级别，如果未指定该值则日志级别为.ohpmrc中配置的log_level的级别。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "clean命令只会清理工程根目录和在build-profile.json5文件中modules节点下配置的模块。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当build-profile.json5文件不存在时，当前oh-package.json5文件所在目录即为工程根目录。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前工程为 test，子模块为testModule1，工程结构如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "test \n|————testModule1   \n     |————libs   \n     |————oh-package.json5 \n|————build-profile.json5 \n|————oh-package.json5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在当前工程的任意子目录执行（以libs目录下执行为例）："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm clean\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "D:\\test\\testModule1\\libs>ohpm clean \nohpm DEBUG: startClean. \nohpm DEBUG: clean all modules under: D:\\test \nohpm DEBUG: begin to clean module: D:\\test\\testModule1 \nohpm DEBUG: begin to clean module: D:\\test \nohpm DEBUG: clean module: D:\\test\\testModule1 succeed. \nohpm DEBUG: clean module: D:\\test succeed. \nclean completed in 0s 67ms\n"
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