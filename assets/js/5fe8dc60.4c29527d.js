"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["739057"], {
480532(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_ohpm_cli_ide_ohpm_common_commands_ide_ohpm_root_ide_ohpm_root_md_5fe_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-ohpm-cli-ide-ohpm-common-commands-ide-ohpm-root-ide-ohpm-root-md-5fe.json
var site_docs_ide_ohpm_cli_ide_ohpm_common_commands_ide_ohpm_root_ide_ohpm_root_md_5fe_namespaceObject = JSON.parse('{"id":"ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-root/ide-ohpm-root","title":"ohpm root","description":"在标准输出中打印有效的 oh\\\\_modules 目录路径信息。","source":"@site/docs/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-root/ide-ohpm-root.md","sourceDirName":"ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-root","slug":"/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-root/","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-root/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"ohpm root","sidebar_position":12,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-root","kit":"devtools/cli","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"ohpm update","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-update/"},"next":{"title":"ohpm version","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-version/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-root/ide-ohpm-root.md


const frontMatter = {
	title: 'ohpm root',
	sidebar_position: 12,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-root',
	kit: 'devtools/cli',
	last_updated: '2026-04-24'
};
const contentTitle = 'ohpm root';

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
  "value": "prefix",
  "id": "prefix",
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
    img: "img",
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
        id: "ohpm-root",
        children: "ohpm root"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在标准输出中打印有效的 oh_modules 目录路径信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命令格式",
      children: "命令格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm root\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能描述",
      children: "功能描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在模块的任意子目录下执行，用于打印命令工作路径下所在包的有效 oh_modules 目录路径信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "options",
      children: "Options"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prefix",
      children: "prefix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：\"\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型： string"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 root 命令后面配置 --prefix <string> 参数，用来指定包的根目录，该目录下必须存在 oh-package.json5 文件，将会打印该根目录中有效的 oh_modules 目录路径信息。"
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
      children: "从ohpm 6.0.2.636版本开始，可以在 root 命令后配置--log_level <string>参数，指定执行当前命令的日志级别（info、debug、warn、error），如果未指定该值则日志级别为.ohpmrc中配置的log_level的级别。"
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
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "项目结构为："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(87847)/* ["default"] */.A) + "",
        width: "521",
        height: "458"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在entry模块的src目录下执行："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm root\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(100249)/* ["default"] */.A) + "",
        width: "437",
        height: "56"
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
100249(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
87847(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752639-541e7505acc0235616ec9670cb66ad38.png");

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