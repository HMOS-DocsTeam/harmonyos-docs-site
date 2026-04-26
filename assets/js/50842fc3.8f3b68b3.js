"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["695251"], {
862326(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_compilation_error_analysis_ide_compilation_error_analysis_md_508_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-compilation-error-analysis-ide-compilation-error-analysis-md-508.json
var site_docs_ide_compilation_error_analysis_ide_compilation_error_analysis_md_508_namespaceObject = JSON.parse('{"id":"ide-compilation-error-analysis/ide-compilation-error-analysis","title":"编译报错智能分析","description":"当DevEco Studio构建ArkTS工程出现失败时，CodeGenie仅能够对ArkTS语法相关的错误进行智能分析，提供错误原因及修复方案，帮助开发者快速解决编译构建问题。","source":"@site/docs/ide-compilation-error-analysis/ide-compilation-error-analysis.md","sourceDirName":"ide-compilation-error-analysis","slug":"/ide-compilation-error-analysis/","permalink":"/harmonyos-docs-site/ide-compilation-error-analysis/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"编译报错智能分析","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-compilation-error-analysis","kit":"devtools/ai-coding","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"代码智能解读","permalink":"/harmonyos-docs-site/ide-explain-code/"},"next":{"title":"智慧调优","permalink":"/harmonyos-docs-site/ide-ai-profiler/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-compilation-error-analysis/ide-compilation-error-analysis.md


const frontMatter = {
	title: '编译报错智能分析',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-compilation-error-analysis',
	kit: 'devtools/ai-coding',
	last_updated: '2026-04-24'
};
const contentTitle = '编译报错智能分析';

const assets = {

};



const toc = [{
  "value": "操作步骤",
  "id": "操作步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "编译报错智能分析",
        children: "编译报错智能分析"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当DevEco Studio构建ArkTS工程出现失败时，CodeGenie仅能够对ArkTS语法相关的错误进行智能分析，提供错误原因及修复方案，帮助开发者快速解决编译构建问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在DevEco Studio 6.0.2 Beta1版本，编译报错修复的交互过程进一步优化，支持编辑区显示修改前后的差异点，以及开启自动编译验证。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.2 Release版本开始，编译报错智能修复能力使用的是HarmonyOS Act智能体。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.1.0 Beta2开始，不支持在编辑区点击Accept/Reject来接受/拒绝AI提供的修复方案；支持使用和切换模型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "操作步骤",
      children: "操作步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如需开启编译报错智能分析和自动修复，进入", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File > Settings"
            })
          }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "DevEco Studio > Preferences/Settings"
                })
              })
            })
          }), "） ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "> CodeGenie"
            })
          }), "****> General", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "页面，勾选"
            })
          }), "Enable AI**** ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "auto-fix for build errors"
            })
          }), "和", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Allow AI to modify local files for auto-fix"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(669170)/* ["default"] */.A) + "",
            width: "931",
            height: "711"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当ArkTS工程出现构建报错时，点击报错信息后方", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Add To Chat"
            })
          }), "图标，CodeGenie将自动引用构建报错信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者可在输入框中选择对当前报错修复任务进行补充指令，帮助开发者进行定制化修复，使修复更准确，如“当前工程为API 24工程，注意兼容性”等，点击或回车发送对话后，CodeGenie会分析该报错及开发者输入信息，并提供可能的错误原因，针对语法错误问题将参考开发者诉求，提供恰当的修复方案。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若弹窗提醒\"Please sign in to access DevEco CodeGenie\"，请先登录CodeGenie后，再次点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Add To Chat"
            })
          }), "图标查看解决方案。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(789532)/* ["default"] */.A) + "",
            width: "1381",
            height: "981"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CodeGenie提供的修复方案被自动应用到代码中。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["DevEco Studio 6.1.0 Beta2之前版本：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["点击编辑区", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Accept"
                  })
                }), "（或使用快捷键", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Ctrl+Shift+Y"
                  })
                }), "），确认和接受AI提供的修复方案；点击", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Reject"
                  })
                }), "（或使用快捷键", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Ctrl+Shift+N"
                  })
                }), "）拒绝。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["点击右侧对话框中的", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Accept All********/Reject All"
                  })
                }), "按钮，接受或拒绝所有文件的修改；将鼠标悬浮在文件路径上，点击", (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(101171)/* ["default"] */.A) + "",
                  width: "30",
                  height: "14"
                }), "可接受或拒绝该文件的修改。"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["DevEco Studio 6.1.0 Beta2及之后版本：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["点击右侧对话框中的", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Accept All********/Reject All"
                  })
                }), "按钮，接受或拒绝所有文件的修改；将鼠标悬浮在文件路径上，点击", (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(147349)/* ["default"] */.A) + "",
                  width: "30",
                  height: "14"
                }), "可接受或拒绝该文件的修改。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(258316)/* ["default"] */.A) + "",
            width: "1382",
            height: "981"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Run"
            })
          }), "编译验证，所需时间见提示，时间单位是秒。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["DevEco Studio 6.1.0 Beta2及之后版本，勾选对话问答结果中的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Auto Run"
            })
          }), "，或者Agent中", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Auto Run"
            })
          }), "，开启自动编译验证开关。取消勾选Agent中", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Auto Run"
            })
          }), "选项，关闭自动编译验证开关。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["DevEco Studio 6.1.0 Beta2之前版本，勾选对话问答结果中的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Automatically compile and verify without prompting"
            })
          }), "，或者", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: ">"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Settings"
            })
          }), "****> CodeGenie >", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsxs)(_components.strong, {
                  children: ["General", (0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "中的"
                    })
                  }), "Allow AI to automatically run compilation verification during auto-fix"]
                })
              }), "，开启自动编译验证开关。取消勾选"]
            })
          }), "File**** ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: ">"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Settings"
            })
          }), "****> CodeGenie >", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Genera"
                })
              })
            })
          }), "l", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "中"
            })
          }), "Allow AI to automatically run compilation verification during auto-fix****选项，关闭自动编译验证开关。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(46794)/* ["default"] */.A) + "",
            width: "611",
            height: "460"
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
101171(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAOCAIAAAC3hDtuAAACm0lEQVR4AayTXUhTYRjHz3m3s7PvtenYZvaNSJhYBrXKEAu78UK8SEQpsAJFCpEKg+yumyChm7oKL5LsYoRhgWkZpW4DXalDZ5N96GSmTrf2cfZxPB+d8V7MzonRhYcff9734fn/z8t53gP8827/yFfv2w9CfEOj/qkZvy/gXwnyWPT6xpz2N/b3/dZ3PF7bh4Znxxe8HoCO2+TzLtVyQIjS48W+WZFYHBE87ojvc3BygXD/THp4LBJL1s3p2ZALUI5ZTW21vqNVSMH1RrAdYROEIBlZjq4q5bLOqtbumjYeXRdvlJlKXFtLgE2ngUrJmQnbNLm6xi3oWCLldJGBIFDIEZpGaIYr8tihKTEQ4WIJr85tMREmw/A0lQHcBkJHY+G+gYzbk/gyER+bYCkK1v9fo6n4c9urxQ0PtOSi5WdOYSbDxtMXye9zCvNpbL8RduTXzcRWhiJZhE2Sqd7xlwSZKlIboCUXLdKoxfoC0h9g0hnuHQDHYUd+HZwffTbRtx4L9XzsLVRq280tGpkKWnLRSbvj99CI8WGX5FBxuN+yE1yHHfm1+WQ9d9Kblu6juoNtZ5vV0uzYoCUXTf7aMNzrUNZc0DY1cB+ECkdgR35VSRU9l28/qXvQfr4F/3uqAAUATkzbWC8tK+WCxIU6VW21rPw4S9EIiiIoV+ODoijDsjSTvTwSMVZuLOUuDGxiWIarZ3NFx44QDmdqbkEIYZti5XJUKoWe3apX6Ih00rrsmF518rCv/PBtBw6oTQC9UhMNBNcGBoWEJqeoijJEq9kdCtcnCkuNuGFw5lOfzcLD4hhmM6jZVAnY4iKkqUF0t0MIeusaU1mBSP7xX+jwfXWHL/WY7zyuus/j0bnOqyV1ellBbozwOHuofwAAAP//XkxhbAAAAAZJREFUAwAkO5WCvozFJQAAAABJRU5ErkJggg==");

},
789532(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753363-51a5f3983cfe53ed1899a4badc08a66c.png");

},
46794(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833345-e788cdcfdd46cd5bb792c68a2df846df.png");

},
669170(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913422-1a2bad9fbe766fe9885e3fdb051f0d08.png");

},
147349(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAOCAIAAAC3hDtuAAACm0lEQVR4AayTXUhTYRjHz3m3s7PvtenYZvaNSJhYBrXKEAu78UK8SEQpsAJFCpEKg+yumyChm7oKL5LsYoRhgWkZpW4DXalDZ5N96GSmTrf2cfZxPB+d8V7MzonRhYcff9734fn/z8t53gP8827/yFfv2w9CfEOj/qkZvy/gXwnyWPT6xpz2N/b3/dZ3PF7bh4Znxxe8HoCO2+TzLtVyQIjS48W+WZFYHBE87ojvc3BygXD/THp4LBJL1s3p2ZALUI5ZTW21vqNVSMH1RrAdYROEIBlZjq4q5bLOqtbumjYeXRdvlJlKXFtLgE2ngUrJmQnbNLm6xi3oWCLldJGBIFDIEZpGaIYr8tihKTEQ4WIJr85tMREmw/A0lQHcBkJHY+G+gYzbk/gyER+bYCkK1v9fo6n4c9urxQ0PtOSi5WdOYSbDxtMXye9zCvNpbL8RduTXzcRWhiJZhE2Sqd7xlwSZKlIboCUXLdKoxfoC0h9g0hnuHQDHYUd+HZwffTbRtx4L9XzsLVRq280tGpkKWnLRSbvj99CI8WGX5FBxuN+yE1yHHfm1+WQ9d9Kblu6juoNtZ5vV0uzYoCUXTf7aMNzrUNZc0DY1cB+ECkdgR35VSRU9l28/qXvQfr4F/3uqAAUATkzbWC8tK+WCxIU6VW21rPw4S9EIiiIoV+ODoijDsjSTvTwSMVZuLOUuDGxiWIarZ3NFx44QDmdqbkEIYZti5XJUKoWe3apX6Ih00rrsmF518rCv/PBtBw6oTQC9UhMNBNcGBoWEJqeoijJEq9kdCtcnCkuNuGFw5lOfzcLD4hhmM6jZVAnY4iKkqUF0t0MIeusaU1mBSP7xX+jwfXWHL/WY7zyuus/j0bnOqyV1ellBbozwOHuofwAAAP//XkxhbAAAAAZJREFUAwAkO5WCvozFJQAAAABJRU5ErkJggg==");

},
258316(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753426-d6aae7c0f23e423c41089601947e39ca.png");

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