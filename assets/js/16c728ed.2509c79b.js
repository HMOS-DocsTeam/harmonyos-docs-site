"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["169466"], {
335124(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_harmonyos_act_ide_code_modify_ide_code_modify_md_16c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-harmonyos-act-ide-code-modify-ide-code-modify-md-16c.json
var site_docs_ide_harmonyos_act_ide_code_modify_ide_code_modify_md_16c_namespaceObject = JSON.parse('{"id":"ide-harmonyos-act/ide-code-modify/ide-code-modify","title":"代码修改","description":"CodeGenie提供代码修改能力，在*对话框内*输入需求描述，生成符合要求的代码，提升代码质量与开发效率。","source":"@site/docs/ide-harmonyos-act/ide-code-modify/ide-code-modify.md","sourceDirName":"ide-harmonyos-act/ide-code-modify","slug":"/ide-harmonyos-act/ide-code-modify/","permalink":"/harmonyos-docs-site/ide-harmonyos-act/ide-code-modify/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"代码修改","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-modify","kit":"devtools/ai-coding","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"代码生成","permalink":"/harmonyos-docs-site/ide-harmonyos-act/ide--code-generation/"},"next":{"title":"编辑区对话","permalink":"/harmonyos-docs-site/ide-codegenie-code-edit/ide-edit-area-code-generation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-harmonyos-act/ide-code-modify/ide-code-modify.md


const frontMatter = {
	title: '代码修改',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-modify',
	kit: 'devtools/ai-coding',
	last_updated: '2026-04-24'
};
const contentTitle = '代码修改';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "代码修改",
        children: "代码修改"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CodeGenie提供代码修改能力，在", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "对话框内"
        })
      }), "输入需求描述，生成符合要求的代码，提升代码质量与开发效率。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在DevEco Studio 6.0.1 Beta1和Release版本，生成的代码与原文件代码可快速对比和采纳。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.2 Beta1开始，生成的内容直接被应用到代码文件中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.2 Release开始，代码修改使用的是HarmonyOS Act智能体。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以DevEco Studio 6.0.2 Release和DevEco Studio 6.0.1 Beta1版本为例说明，如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DevEco Studio 6.0.2 Release"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "操作步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["选择HarmonyOS Act智能体，在对话框中输入****@", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "符号选择"
          })
        }), "Files****，或点击****@****", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add Context"
          })
        }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Files"
          })
        }), "，选择需要修改的代码文件，或在对话框输入文件路径指定需要修改的代码文件，或修改当前代码文件。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在对话框输入描述，点击", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(463207)/* ["default"] */.A) + "",
          width: "17",
          height: "16"
        }), "发送。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在问答区域的", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Changed Files"
          })
        }), "可以查看被修改的文件；点击", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Accept All********/Reject All"
          })
        }), "按钮，接受或拒绝所有文件的修改；将鼠标悬浮在文件路径上，点击", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(668060)/* ["default"] */.A) + "",
          width: "30",
          height: "14"
        }), "可接受或拒绝该文件的修改。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["点击问答区域中", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Run"
          })
        }), "，可以编译验证；开启", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Auto Run"
          })
        }), "开关，可以开启自动编译验证。Auto Run更多描述可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-agent/ide-agent-use#section2075893021715",
          children: "Agent配置"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(431219)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1910",
        height: "954"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DevEco Studio 6.0.1 Beta1"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "操作步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["点击****@Add Context >**** ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Files"
          })
        }), "选择需要修改的文件，在对话框输入代码修改描述。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在对话问答区域，点击文件路径，打开代码对比页面。点击", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(430716)/* ["default"] */.A) + "",
          width: "15",
          height: "12"
        }), "，快速采纳修改后的代码。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(934125)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1928",
        height: "1082"
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
431219(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753202-34e68b70086832849b3ae08d0618b912.gif");

},
430716(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAMCAIAAAAyIHCzAAABoElEQVR4AURQTU/bQBB961tTqU34SLk07qG9xaUHMHHaW9MfAAfnl3Fppd4rVWqKhAQHO8dAAlLAICFDgAhDCCKA4IYUD28CgtWsPTP73pu3a4WnwUsk4c/ar3/tWngaMoIkWPyzuLy3zDxM6vxaEDwFJF7f22/E6XAI9kTaK+1kN5GUCNZAaizAjALxWnywflDy3dxUViQldHBy9bX6LfPmNXHQRbQRGKrGneahV/VyU2MUa69sDU4G5aqXyb4CRxNDUSPUVtVOs1PyS7l3Y0IDq4Relv1y5m1GFXVzPlnGavxtxI245M/RAIfUf9fPO71ydQQVqAcxYCgH1sT7SQPr9uJOW2LGC+PD++Hd1S1MCjUA0AOguRHr09zH2YWZnXCnG3UBTFe+OD+cVq3VP+qDkk8Enmio77ydn52fiYLtbnTMnl384FQ+b/zf7B/3Waqq/nQrmhokuAtuFERKMEJC8XuxVWvqBIgSOEf4gsrR/Uw4i3uA2I7tVKY3ljavezcglBDDF3zMWAAkeL43WZjA6Ga2U3Dn3Ww+C94Yuh4AAAD//6q5Mj8AAAAGSURBVAMAAzPQG4mnk7oAAAAASUVORK5CYII=");

},
934125(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753141-1ad5ed981a0b8bf5450fca774c7a8b7a.gif");

},
463207(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAIAAAB/UwMIAAACW0lEQVR4AVxRS09aQRQ+c5Fbq4nKo8ZoYqOISnUlDxMpO01cyaaaENry04q7mhRowgaopUBNfAANtYRuikUjKU1NeYREipc7/eYSWTj5cuacb857JFXtqaqiCqn2evdQ1J7C1R4gXqDfA7wqEXEipoEYbtKOUMBTt3tXrVbPz78eHn44OvoMZ/hInDMNmiuRoii12q9i8Vvy08eDg7f7+8FYLFGpXA4PP76+rtZqv4mYxBhrNBqlUimVSodC4WDwTTKZRO7x8Qmny/Vid/fV65eL1oWlJaui3BmNRpSSEBCNRm9u/pjN5vX19UAg4Pf7t7e37Xb73Nxco1E/PT2xWC3HJ8cOp0N+JBMjqdvtMkbT09OrqyszMzOyLJN22u12IhGv/60/d3suyhfE2fKSDRKQJiefbGxs5PP5cDiCljgnbK9QKLyPRGzLtrU1e6fz7+ws53a7kZoxLIZjB3x+fn5vb9dmW06nU/F4LBR6V/5R9nq9s7NPOef5fM5isZhMZqTTOiCxA0RLkoQYn883MWFgJO3seMfGxokIc1YqP51OB4rA7AN1oOA7kJEYk5AS2tCQHiyQyWRcLtdgSDAA/pRQlHOEweRGg6HVamKhML6XSjrdkNW6yDEFbLBcOIsYmGgPDBSdTjcyMtpsNm9vO7n8F4/Hg64APEH2IWKg9SlIwGAwNputbDa7sIDR8YngRPpBNREzMMQjkclkKhaLV1eXDoejzzyQ2BtpdTAPIF5XVp7Jsn5zc1Ov1yMdAFbzwS0KijpChS4GZcRodHRka2trampK4x8Kxug/AAAA//9ZpphIAAAABklEQVQDAHIWIrbqT4wiAAAAAElFTkSuQmCC");

},
668060(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAOCAIAAAC3hDtuAAACm0lEQVR4AayTXUhTYRjHz3m3s7PvtenYZvaNSJhYBrXKEAu78UK8SEQpsAJFCpEKg+yumyChm7oKL5LsYoRhgWkZpW4DXalDZ5N96GSmTrf2cfZxPB+d8V7MzonRhYcff9734fn/z8t53gP8827/yFfv2w9CfEOj/qkZvy/gXwnyWPT6xpz2N/b3/dZ3PF7bh4Znxxe8HoCO2+TzLtVyQIjS48W+WZFYHBE87ojvc3BygXD/THp4LBJL1s3p2ZALUI5ZTW21vqNVSMH1RrAdYROEIBlZjq4q5bLOqtbumjYeXRdvlJlKXFtLgE2ngUrJmQnbNLm6xi3oWCLldJGBIFDIEZpGaIYr8tihKTEQ4WIJr85tMREmw/A0lQHcBkJHY+G+gYzbk/gyER+bYCkK1v9fo6n4c9urxQ0PtOSi5WdOYSbDxtMXye9zCvNpbL8RduTXzcRWhiJZhE2Sqd7xlwSZKlIboCUXLdKoxfoC0h9g0hnuHQDHYUd+HZwffTbRtx4L9XzsLVRq280tGpkKWnLRSbvj99CI8WGX5FBxuN+yE1yHHfm1+WQ9d9Kblu6juoNtZ5vV0uzYoCUXTf7aMNzrUNZc0DY1cB+ECkdgR35VSRU9l28/qXvQfr4F/3uqAAUATkzbWC8tK+WCxIU6VW21rPw4S9EIiiIoV+ODoijDsjSTvTwSMVZuLOUuDGxiWIarZ3NFx44QDmdqbkEIYZti5XJUKoWe3apX6Ih00rrsmF518rCv/PBtBw6oTQC9UhMNBNcGBoWEJqeoijJEq9kdCtcnCkuNuGFw5lOfzcLD4hhmM6jZVAnY4iKkqUF0t0MIeusaU1mBSP7xX+jwfXWHL/WY7zyuus/j0bnOqyV1ellBbozwOHuofwAAAP//XkxhbAAAAAZJREFUAwAkO5WCvozFJQAAAABJRU5ErkJggg==");

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