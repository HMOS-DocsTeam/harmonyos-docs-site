"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["805188"], {
251852(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_compilation_tool_chain_arkoptions_guide_arkoptions_guide_md_528_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-compilation-tool-chain-arkoptions-guide-arkoptions-guide-md-528.json
var site_docs_arkts_arkts_compilation_tool_chain_arkoptions_guide_arkoptions_guide_md_528_namespaceObject = JSON.parse('{"id":"arkts/arkts-compilation-tool-chain/arkoptions-guide/arkoptions-guide","title":"在build-profile.json5中配置arkOptions","description":"概述","source":"@site/docs/arkts/arkts-compilation-tool-chain/arkoptions-guide/arkoptions-guide.md","sourceDirName":"arkts/arkts-compilation-tool-chain/arkoptions-guide","slug":"/arkts/arkts-compilation-tool-chain/arkoptions-guide/","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkoptions-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"在build-profile.json5中配置arkOptions","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkoptions-guide","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkGuard字节码混淆常见问题","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-questions/"},"next":{"title":"ArkUI简介","permalink":"/harmonyos-docs-site/arkui/arkui-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-compilation-tool-chain/arkoptions-guide/arkoptions-guide.md


const frontMatter = {
	title: '在build-profile.json5中配置arkOptions',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkoptions-guide',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '在build-profile.json5中配置arkOptions';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "types",
  "id": "types",
  "level": 2
}, {
  "value": "types配置文件标签说明",
  "id": "types配置文件标签说明",
  "level": 3
}, {
  "value": "arkOptions中的types字段配置说明",
  "id": "arkoptions中的types字段配置说明",
  "level": 3
}, {
  "value": "注意事项",
  "id": "注意事项",
  "level": 3
}, {
  "value": "maxFlowDepth",
  "id": "maxflowdepth",
  "level": 2
}, {
  "value": "maxFlowDepth配置文件标签说明",
  "id": "maxflowdepth配置文件标签说明",
  "level": 3
}, {
  "value": "arkOptions下的tscConfig中maxFlowDepth字段配置说明",
  "id": "arkoptions下的tscconfig中maxflowdepth字段配置说明",
  "level": 3
}, {
  "value": "注意事项",
  "id": "注意事项-1",
  "level": 3
}, {
  "value": "transformLib",
  "id": "transformlib",
  "level": 2
}, {
  "value": "transformLib配置文件标签说明",
  "id": "transformlib配置文件标签说明",
  "level": 3
}, {
  "value": "arkOptions中的transformLib字段配置说明",
  "id": "arkoptions中的transformlib字段配置说明",
  "level": 3
}, {
  "value": "注意事项",
  "id": "注意事项-2",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "在build-profilejson5中配置arkoptions",
        children: "在build-profile.json5中配置arkOptions"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["arkOptions主要提供ArkTS编译相关配置，当前文档介绍arkOptions中types配置类型、maxFlowDepth配置控制流分析最大深度等，arkOptions中的其他配置项请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration-file/ide-hvigor-configuration-file-overview",
        children: "build-profile.json5"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "types",
      children: "types"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "types配置文件标签说明",
      children: "types配置文件标签说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "arkOptions的types字段配置文件标签说明："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "配置范围"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可缺省"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过types字段将指定的类型声明文件作为全局引入，从而避免在每个源码文件中单独引入。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块级"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkoptions中的types字段配置说明",
      children: "arkOptions中的types字段配置说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "arkOptions中types字段示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在模块build-profile.json5配置文件buildOption标签的arkOptions属性中添加types字段。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 在/entry/build-profile.json5\n\"arkOptions\": {\n  \"types\": [\"pako\", \"./oh_modules/@types/mime\", \"./src/main/ets/pages/global\"]\n},\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "types字段支持填写包名、包所在位置的相对路径，以及声明文件所在位置的相对路径。类型的查找范围仅限于当前声明文件所在的模块内，若目录下存在同名文件（后缀不同），默认加载顺序为 .d.ets > .d.ts，即优先加载 .d.ets 后缀的文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "填写包名方式：通过包名到oh_modules/@types/目录查找包名中定义的声明文件，如\"pako\"。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "填写包所在相对路径方式：支持在基于build-profile.json5的相对路径中查找定义的声明文件，如\"./oh_modules/@types/mime\"。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "填写声明文件所在相对路径方式：支持查找相对路径下的声明文件，如\"./src/main/ets/pages/global\"。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果在types字段中填写包名或者包所在位置的相对路径，需要在工程文件/entry/oh-package.json5中dependencies作如下配置："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"dependencies\": {\n  \"@types/pako\": \"latest\",\n  \"@types/mime\": \"latest\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果在types字段中填写声明文件所在相对路径，前提是在模块下存在相应的声明文件，比如模块下存在src/main/ets/pages/global.d.ts声明文件，声明文件内容如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "declare namespace Global {\n  type ObjectType = string | number;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过types全局引入后，对全局类型的使用示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 在entry/src/main/ets/pages/Index.ets\nlet testPako: pako.constants = 0;\nlet testMime: mime.TypeMap = {};\nlet testGlobal: Global.ObjectType = 'test';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "maxflowdepth",
      children: "maxFlowDepth"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "maxflowdepth配置文件标签说明",
      children: "maxFlowDepth配置文件标签说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "arkOptions下tscConfig中maxFlowDepth字段配置文件标签说明："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "配置范围"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可缺省"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxFlowDepth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者通过maxFlowDepth字段自定义配置tsc编译过程中的tsc控制流分析最大深度，避免固定最大深度导致编译报错问题。该配置项可配置的最小值为2000，可配置最大值为65535。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "工程级"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数字型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值时使用tsc控制流分析最大深度默认值2000。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkoptions下的tscconfig中maxflowdepth字段配置说明",
      children: "arkOptions下的tscConfig中maxFlowDepth字段配置说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "arkOptions/tscConfig中maxFlowDepth字段展示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在工程级目录下的build-profile.json5配置文件buildOption标签的arkOptions/tscConfig属性中添加maxFlowDepth字段。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 在工程名/build-profile.json5文件中。\n\"arkOptions\": {\n  \"tscConfig\": {\n    \"maxFlowDepth\": 2222\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "注意事项-1",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "仅可在工程级目录下build-profile.json5文件中配置maxFlowDepth字段。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若开发者未对maxFlowDepth字段进行配置时，则该字段默认为2000；若开发者对maxFlowDepth字段配置的值超过可配置范围，则会出现编译构建相关报错。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: " hvigor ERROR: Schema validate failed.\n  Detail: Please check the following fields.\n    {\n       instancePath: 'app.products[0].buildOption.arkOptions.tscConfig.maxFlowDepth',\n       keyword: 'maximum',\n       params: { comparison: '<=', limit: 65535 },\n       message: 'must be <= 65535',\n       location: 'D:/工程名/build-profile.json5:行号:列号'\n    }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果代码中函数或者模块过长导致控制流分析深度大于或者等于该字段所配置/默认的值，则会终止控制流分析并且报错：The containing function or module body is too large for control flow analysis."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "transformlib",
      children: "transformLib"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transformlib配置文件标签说明",
      children: "transformLib配置文件标签说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "arkOptions的transformLib字段配置文件标签说明："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "配置范围"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可缺省"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "transformLib"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字节码插桩插件配置，允许开发者在编译时对字节码进行插桩修改。仅支持Stage模型，格式为相对路径，指向实现插桩功能的动态库。不同系统要求的动态库文件类型如下，动态库文件内容需要在对应平台生成，不能拷贝修改后缀名混用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块级"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值时代表不使用该功能。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkoptions中的transformlib字段配置说明",
      children: "arkOptions中的transformLib字段配置说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "arkOptions中transformLib字段示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在模块build-profile.json5配置文件buildOption标签的arkOptions属性中添加transformLib字段。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 在/entry/build-profile.json5\n{\n  \"buildOption\": {\n    \"arkOptions\": {\n      \"transformLib\": \"./dll/example.dll\"\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["修改方舟字节码能力可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-compilation-tool-chain/arkts-bytecode/customize-bytecode-during-compilation",
        children: "编译期自定义修改方舟字节码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "注意事项-2",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若开发者未对字段进行配置时，则默认不使用该功能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HAP、HSP模块配置即生效，HAR模块仅字节码HAR配置生效，非字节码HAR配置不生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件格式要求：Windows：.dll文件，Linux/Mac：.so文件。"
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