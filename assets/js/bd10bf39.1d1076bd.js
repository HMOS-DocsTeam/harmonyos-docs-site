"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["182967"], {
624222(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_command_line_codelinter_ide_command_line_codelinter_md_bd1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-command-line-codelinter-ide-command-line-codelinter-md-bd1.json
var site_docs_ide_command_line_codelinter_ide_command_line_codelinter_md_bd1_namespaceObject = JSON.parse('{"id":"ide-command-line-codelinter/ide-command-line-codelinter","title":"代码检查工具（codelinter）","description":"codelinter同时支持使用命令行执行代码检查与修复，可将codelinter工具集成到门禁或持续集成环境中。","source":"@site/docs/ide-command-line-codelinter/ide-command-line-codelinter.md","sourceDirName":"ide-command-line-codelinter","slug":"/ide-command-line-codelinter/","permalink":"/harmonyos-docs-site/ide-command-line-codelinter/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"代码检查工具（codelinter）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-command-line-codelinter","kit":"devtools/cli","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"获取命令行工具","permalink":"/harmonyos-docs-site/ide-commandline-get/"},"next":{"title":"堆栈解析工具（hstack）","permalink":"/harmonyos-docs-site/ide-command-line-hstack/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-command-line-codelinter/ide-command-line-codelinter.md


const frontMatter = {
	title: '代码检查工具（codelinter）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-command-line-codelinter',
	kit: 'devtools/cli',
	last_updated: '2026-04-24'
};
const contentTitle = '代码检查工具（codelinter）';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    filepath: "filepath",
    h1: "h1",
    header: "header",
    img: "img",
    levels: "levels",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    productname: "productname",
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
        id: "代码检查工具codelinter",
        children: "代码检查工具（codelinter）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "codelinter同时支持使用命令行执行代码检查与修复，可将codelinter工具集成到门禁或持续集成环境中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "codelinter命令行格式为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "codelinter [options] [dir]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["options：可选配置，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#table25697717185",
        children: "表1"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dir：待检查的工程根目录；为可选参数，如不指定，默认为当前上下文目录。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " codelinter命令行配置"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "指令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["--config/-c ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.filepath, {})
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定执行codelinter检查的规则配置文件，**", (0,jsx_runtime.jsx)(_components.filepath, {
              children: "**指定执行检查的规则配置文件位置。"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--fix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置codelinter检查同时执行QuickFix。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--format/-f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置检查结果的输出格式。目前支持default/json/xml/html四种格式；不指定时，默认是default格式（文本格式）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["--output/-o ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.filepath, {})
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定检查结果保存位置，且命令行窗口不展示检查结果。**", (0,jsx_runtime.jsx)(_components.filepath, {
              children: "**指定存放代码检查结果的文件路径，支持使用相对/绝对路径。不使用--output指令时，检查结果默认会显示在命令行窗口中。"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--version/-v"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查看codelinter版本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["--product/-p ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.productname, {})
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定当前生效的product。 ", (0,jsx_runtime.jsx)(_components.productname, {
              children: " 为生效的product名称。"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--incremental/-i"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对Git工程中的增量文件（包含新增/修改/重命名的文件）执行Code Linter检查。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--help/-h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询codelinter命令行帮助。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["--exit-on/-e ", (0,jsx_runtime.jsx)(_components.levels, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定哪些告警级别需要返回非零退出码，告警级别包括：error、warn和suggestion。若需要指定多个告警级别，级别间需要用英文逗号分开。  退出码的计算方式为：用一个3位的二进制数从高到低分别表示error、warn、suggestion告警级别。若在命令行中配置告警级别，并且代码检查结果中也包含该告警级别，则该二进制值为1，否则均为0。将二进制数转换为十进制数，则是退出码。  例如：   - 命令配置为--exit-on error，代码检查结果包括error、warn、suggestion三类告警，则退出码的二进制数为100，十进制数为4。 - 命令配置为--exit-on error，代码检查结果包括warn、suggestion两类告警，则退出码的二进制数为000，十进制数为0。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "进行codelinter代码检查与修复。若您的工程存在多个product，请使用--product/-p指令，指定生效的product和执行检查的工程根目录。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(158779)/* ["default"] */.A) + "",
            width: "948",
            height: "168"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["在工程根目录下使用命令行工具：\n", (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["直接执行 ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "codelinter"
                    })
                  }), " 指令。此时根据默认codelinter检查规则，对该工程中的TS/ArkTS文件进行代码检查。默认的规则清单可在检查完成后，根据命令行提示，查看相应位置的code-linter.json5文件。"]
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "codelinter // 进行codelinter检查\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.img, {
                    src: (__webpack_require__(275832)/* ["default"] */.A) + "",
                    title: "点击放大",
                    width: "1134",
                    height: "459"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "执行如下命令，指定codelinter检查所使用的code-linter.json5规则配置文件，并进行代码检查。"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "codelinter -c filepath // 指定执行检查的规则配置文件位置\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.img, {
                    src: (__webpack_require__(77530)/* ["default"] */.A) + "",
                    title: "点击放大",
                    width: "848",
                    height: "197"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "执行如下命令，对指定工程将根据指定的规则配置文件执行codelinter检查，并对部分支持修复的告警信息进行自动修复。"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "codelinter -c filepath --fix // 对工程中的告警进行修复\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.img, {
                    src: (__webpack_require__(9851)/* ["default"] */.A) + "",
                    width: "748",
                    height: "114"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["在非工程根目录下使用命令行工具：\n", (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "执行如下命令，指定需要进行检查的工程目录或文件路径。此时根据默认codelinter检查规则，对该工程中的TS/ArkTS文件进行代码检查。默认的规则清单可在检查完成后，根据命令行提示，查看相应位置的code-linter.json5文件。"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "codelinter dir [filepath] [dir1] // 指定执行检查的工程目录或文件路径。支持同时配置多个文件/文件夹路径。 filepath为待检查的文件所在位置，dir、dir1指定待检查的工程目录\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.img, {
                    src: (__webpack_require__(189765)/* ["default"] */.A) + "",
                    title: "点击放大",
                    width: "908",
                    height: "133"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "在指定的工程目录下，根据指定的codelinter规则配置文件进行代码检查。"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "codelinter -c filepath dir // filepath为指定的规则配置文件所在位置，dir指定执行检查的工程根目录\n"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "执行如下命令，对指定工程重新执行codelinter检查，并对部分支持修复的告警进行自动修复。"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "codelinter -c filepath dir --fix // 对指定工程中的告警进行修复。支持配置同时多个工程路径\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.img, {
                    src: (__webpack_require__(554788)/* ["default"] */.A) + "",
                    title: "点击放大",
                    width: "1082",
                    height: "214"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如需指定检查结果输出格式（以json格式为例），执行如下指令。检查结果将在命令行窗口展示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "codelinter [dir] -f json  //[dir]为待检查的工程根目录\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(732512)/* ["default"] */.A) + "",
            width: "1037",
            height: "209"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行如下指令，指定代码检查输出格式及结果保存位置。此时将不在命令行窗口中打印检查结果，可在指定的文件存放路径下查看。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "codelinter [dir] -f json -o filepath2     // [dir]为待检查的工程根目录，filepath2为指定存放代码检查结果的文件路径\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(533641)/* ["default"] */.A) + "",
            width: "674",
            height: "134"
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
275832(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833691-0e7cb8b76b34bfd636d30f0f4ce821f0.png");

},
732512(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753778-eb6da16903c7954ef6baa15c958f7e64.png");

},
158779(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753715-33af502a15160ad08b4d2cb1a75f9424.png");

},
189765(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753780-e3fe6b891a05c50dc960d22c44e7ec60.png");

},
77530(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833695-e98e90cb76feed02dda26d4ce4fe4595.png");

},
554788(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753774-a7506726f46821f1bd12d98e03df0918.png");

},
533641(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
9851(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753719-041d478c3c85709f0a3ea76049ad2793.png");

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