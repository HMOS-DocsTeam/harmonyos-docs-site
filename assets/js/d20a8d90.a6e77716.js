"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["450684"], {
176260(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_ohpm_cli_ide_ohpm_common_commands_ide_ohpm_run_ide_ohpm_run_md_d20_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-ohpm-cli-ide-ohpm-common-commands-ide-ohpm-run-ide-ohpm-run-md-d20.json
var site_docs_ide_ohpm_cli_ide_ohpm_common_commands_ide_ohpm_run_ide_ohpm_run_md_d20_namespaceObject = JSON.parse('{"id":"ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-run/ide-ohpm-run","title":"ohpm run","description":"执行用户自定义脚本。","source":"@site/docs/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-run/ide-ohpm-run.md","sourceDirName":"ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-run","slug":"/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-run/","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-run/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"ohpm run","sidebar_position":15,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-run","kit":"devtools/cli","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"ohpm cache clean","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-cache/"},"next":{"title":"ohpm --version","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm--version/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-run/ide-ohpm-run.md


const frontMatter = {
	title: 'ohpm run',
	sidebar_position: 15,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-run',
	kit: 'devtools/cli',
	last_updated: '2026-04-24'
};
const contentTitle = 'ohpm run';

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
  "value": "传递参数",
  "id": "传递参数",
  "level": 3
}, {
  "value": "支持多命令",
  "id": "支持多命令",
  "level": 3
}, {
  "value": "约束",
  "id": "约束",
  "level": 3
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
}, {
  "value": "参数传递的使用示例",
  "id": "参数传递的使用示例",
  "level": 3
}, {
  "value": "成功示例",
  "id": "成功示例",
  "level": 3
}, {
  "value": "失败示例",
  "id": "失败示例",
  "level": 3
}, {
  "value": "逻辑符(&amp;&amp;、||)使用示例",
  "id": "逻辑符使用示例",
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
        id: "ohpm-run",
        children: "ohpm run"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行用户自定义脚本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命令格式",
      children: "命令格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm run [options] <script_name> [-- <args...>]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能描述",
      children: "功能描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "指定运行定义在模块的 oh-package.json5 文件中 scripts 对象内的脚本。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "scripts对象内部支持\"key\":\"value\"方式配置多个待执行脚本。如以下示例所示，scriptName1、scriptName2、scriptName3为脚本别名（scriptName）；“echo hello”等为脚本内容（scriptContent），后续内容均参考此说明。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "oh-package.json5中scripts配置示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{               \n  \"scripts\": {\n    \"scriptName1\": \"echo hello\",\n    \"scriptName2\": \"ohpm run scriptName1\",\n    // 标识符\"--\"后可以通过'-p'或'--p'形式指定参数key, 可以通过' '或'='连接参数值\n    \"scriptName3\": \"node test.js -- -paramKey1 paramValue1 -paramKey2=paramValue2 --paramKey3 paramValue3\"\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "脚本内容中可以用ohpm run引用同一个 oh-package.json5 文件中其它脚本别名，如scriptName2；ohpm run 引用关系是一个有向无环图，不支持递归或循环引用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在解析脚本内容出错时，ohpm run命令将直接提示相应错误。比如，脚本内容中引用了一个在同一oh-package.json5文件中不存在的脚本别名；或在执行ohpm run时，发现脚本别名引用关系存在环的情况。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "传递参数",
      children: "传递参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ohpm run命令可以通过标识符“--”覆盖被引用脚本的参数或为被引用脚本传递额外的参数，如："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ohpm run scriptName3 -- -paramKey1 newValue -paramKey4 paramValue4\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该示例表明，脚本scriptName3的参数paramKey1会被替换为newValue, 并新增一个参数paramKey4。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果脚本内容为ohpm run scriptName且使用了标识符“--”，则该scriptName对应的脚本内容不能再包含ohpm run相关的描述，避免嵌套引用。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持多命令",
      children: "支持多命令"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持 && 和 || 两种命令连接符 （&& 和 || 没有优先级区分，命令从左到右执行，不支持用括号来改变各个子命令的优先级），详细请参见下方", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section157898418348",
        children: "示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "约束",
      children: "约束"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "约束项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scriptKey 命名约束"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "合法的 scriptKey 的名字可以包含字母（包含大小写），数字，ASCII 冒号 :，ASCII下划线 _ ，ASCII链接符 -，首字母必须是小写字母"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scriptContent 约束"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "合法的scriptContent不能引用除ohpm run以外的其它ohpm命令"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scriptContent 中使用 ohpm run 的约束"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1、ohpm run 依赖的其它script别名必须在同一 oh-package.json5 中存在  2、ohpm run 引用关系是一个有向无环图，不支持递归或循环引用"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "options",
      children: "Options"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prefix",
      children: "prefix"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以通过 --prefix 指定包的根目录，该目录下必须存在 oh-package.json5 文件。不支持通过这种方式调用依赖包中的脚本别名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm run --prefix <path> <脚本别名>\n"
      })
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
      children: "下列所有示例的scripts配置均来自如下oh-package.json5："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"name\": \"example\",\n  \"version\": \"1.0.0\",\n  \"description\": \"this is an example for ohpm run.\",\n  \"main\": \"./src/index.ets\",\n  \"author\": \"oh\",\n  \"license\": \"ISC\",\n  \"scripts\": {\n    \"testLogic\": \"ohpm run testFail || ohpm run testSuc && ohpm run testSuc\",\n    \"testFail\": \"test1\",\n    \"testSuc\": \"echo hello\"\n  }\n  ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "参数传递的使用示例",
      children: "参数传递的使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm run script_name -- -arg1=1 --arg2=2 -arg3 3 --arg4 4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行 script_name 的脚本，并指定脚本中参数arg1，arg2，arg3，arg4，取值分别为1，2，3，4，以上四种参数传递的方法均可生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成功示例",
      children: "成功示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行脚本testSuc，如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm run testSuc\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(639235)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "961",
        height: "202"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "失败示例",
      children: "失败示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行脚本testFail，如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm run testFail\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(308022)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "960",
        height: "216"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "逻辑符使用示例",
      children: "逻辑符(&&、||)使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行脚本testLogic，如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm run testLogic\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(576328)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "958",
        height: "364"
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
576328(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833025-0dc9201c40a7046287ed4aa8742e571a.png");

},
639235(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
308022(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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