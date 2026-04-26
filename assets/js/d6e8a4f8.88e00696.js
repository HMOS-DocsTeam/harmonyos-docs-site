"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["183776"], {
404926(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_ohpm_cli_ide_ohpm_common_commands_ide_ohpm_cache_ide_ohpm_cache_md_d6e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-ohpm-cli-ide-ohpm-common-commands-ide-ohpm-cache-ide-ohpm-cache-md-d6e.json
var site_docs_ide_ohpm_cli_ide_ohpm_common_commands_ide_ohpm_cache_ide_ohpm_cache_md_d6e_namespaceObject = JSON.parse('{"id":"ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-cache/ide-ohpm-cache","title":"ohpm cache clean","description":"清理 ohpm 缓存文件夹。","source":"@site/docs/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-cache/ide-ohpm-cache.md","sourceDirName":"ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-cache","slug":"/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-cache/","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-cache/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"ohpm cache clean","sidebar_position":14,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-cache","kit":"devtools/cli","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"ohpm version","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-version/"},"next":{"title":"ohpm run","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-run/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-cache/ide-ohpm-cache.md


const frontMatter = {
	title: 'ohpm cache clean',
	sidebar_position: 14,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-cache',
	kit: 'devtools/cli',
	last_updated: '2026-04-24'
};
const contentTitle = 'ohpm cache clean';

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
}, {
  "value": "关于缓存设计的说明",
  "id": "关于缓存设计的说明",
  "level": 3
}, {
  "value": "配置",
  "id": "配置",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ohpm-cache-clean",
        children: "ohpm cache clean"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "清理 ohpm 缓存文件夹。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命令格式",
      children: "命令格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm cache clean [options]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能描述",
      children: "功能描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于清理 ohpm 缓存文件夹。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "options",
      children: "Options"
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
      children: "从ohpm 6.0.2.636版本开始，可以在命令后配置--log_level <string>参数，指定执行当前命令的日志级别（info、debug、warn、error），如果未指定该值则日志级别为.ohpmrc中配置的log_level的级别。"
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
      children: "清理 ohpm 缓存文件夹，可执行以下命令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm cache clean\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(362863)/* ["default"] */.A) + "",
        width: "391",
        height: "79"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "关于缓存设计的说明",
      children: "关于缓存设计的说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohpm 将缓存数据存储在配置的 cache 目录下名为 content-v1 的文件夹中，存储所有通过 http 请求获取的 HAR 包数据。包的路径使用包的 sha512 哈希值分割成 3 段，第 1、2 位作为第一级目录，哈希值第 3、4 位作为第二级目录，哈希值第 5 位到结尾的所有字符作为文件名。使用哈希值可以将文件较均匀地分布在各个目录下，分成 3 层目录结构避免一个目录下文件数量过多，可以提升文件索引效率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置",
      children: "配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["缓存的配置方式见 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-ohpm-cli/ide-ohpmrc",
        children: "ohpmrc"
      }), " 。"]
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
362863(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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