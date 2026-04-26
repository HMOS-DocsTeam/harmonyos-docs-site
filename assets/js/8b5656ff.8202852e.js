"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["325146"], {
999785(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_ohpm_cli_ide_ohpm_common_commands_ide_ohpm_unpublish_ide_ohpm_unpublish_md_8b5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-ohpm-cli-ide-ohpm-common-commands-ide-ohpm-unpublish-ide-ohpm-unpublish-md-8b5.json
var site_docs_ide_ohpm_cli_ide_ohpm_common_commands_ide_ohpm_unpublish_ide_ohpm_unpublish_md_8b5_namespaceObject = JSON.parse('{"id":"ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-unpublish/ide-ohpm-unpublish","title":"ohpm unpublish","description":"下架已发布的三方库。","source":"@site/docs/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-unpublish/ide-ohpm-unpublish.md","sourceDirName":"ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-unpublish","slug":"/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-unpublish/","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-unpublish/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"ohpm unpublish","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-unpublish","kit":"devtools/cli","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"ohpm prepublish","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-prepublish/"},"next":{"title":"ohpm update","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-update/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-unpublish/ide-ohpm-unpublish.md


const frontMatter = {
	title: 'ohpm unpublish',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-unpublish',
	kit: 'devtools/cli',
	last_updated: '2026-04-24'
};
const contentTitle = 'ohpm unpublish';

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
  "value": "force",
  "id": "force",
  "level": 3
}, {
  "value": "publish_registry",
  "id": "publish_registry",
  "level": 3
}, {
  "value": "publish_id",
  "id": "publish_id",
  "level": 3
}, {
  "value": "key_path",
  "id": "key_path",
  "level": 3
}, {
  "value": "fetch_timeout",
  "id": "fetch_timeout",
  "level": 3
}, {
  "value": "strict_ssl",
  "id": "strict_ssl",
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
        id: "ohpm-unpublish",
        children: "ohpm unpublish"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下架已发布的三方库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命令格式",
      children: "命令格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm unpublish [options] [<@group>]<pkg>[@<version>]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(476310)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@group：三方库的命名空间，可选。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pkg：三方库名称，必选。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "version：三方库的版本号，可选。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能描述",
      children: "功能描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从 OpenHarmony 三方库中心仓下架已经发布并审核通过上架的三方库。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若不指定版本，则默认下架三方库的所有版本，并且需要加上 -f 配置参数；全部版本均下架后，在 24h 内则不允许重新发布相同名称的三方库。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若下架了某个版本，该版本号不允许再次使用，后续发布必须使用新的版本号。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若此三方库被其它三方库依赖，则不删除，而是打上 deprecated 的标签；若没有被依赖，则直接删除。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "options",
      children: "Options"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "force",
      children: "force"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：false"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：Boolean"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "别名：f"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "强制下架。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "publish_registry",
      children: "publish_registry"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：\"\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：URL"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 unpublish 命令后面配置 --publish_registry <r> 参数，指定发布仓库地址。如果未指定，默认从配置中获取发布仓库地址。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "publish_id",
      children: "publish_id"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：\"\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：String"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 unpublish 命令后面配置 --publish_id <id> 参数，指定发布码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key_path",
      children: "key_path"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：\"\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：String"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 unpublish 命令后面配置 --key_path "
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: " 参数，指定ssh私钥路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fetch_timeout",
      children: "fetch_timeout"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：60000"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型： Number"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "别名：ft"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 unpublish 命令后面配置 --ft, --fetch_timeout <number> 参数，设置操作的超时时间，如果没有指定，默认超时时间为60000ms。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "strict_ssl",
      children: "strict_ssl"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：true"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型： Boolean"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 unpublish 命令后面配置 --strict_ssl true 参数，校验 https 证书；配置 --strict_ssl false 参数，不校验 https 证书。"
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
      children: "从ohpm 6.0.2.636版本开始，可以在 unpublish 命令后配置--log_level <string>参数，指定执行当前命令的日志级别（info、debug、warn、error），如果未指定该值则日志级别为.ohpmrc中配置的log_level的级别。"
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
      children: "下架已发布的三方库，执行以下命令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm unpublish demo@1.0.0 -f\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(129555)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "621",
        height: "49"
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
476310(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
129555(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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