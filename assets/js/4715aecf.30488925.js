"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["485836"], {
203023(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_debugging_commands_param_tool_param_tool_md_471_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-debugging-commands-param-tool-param-tool-md-471.json
var site_docs_system_debug_optimize_debugging_commands_param_tool_param_tool_md_471_namespaceObject = JSON.parse('{"id":"system-debug-optimize/debugging-commands/param-tool/param-tool","title":"param工具","description":"param是为开发人员提供用于操作系统参数的工具，该工具只支持标准系统。","source":"@site/docs/system-debug-optimize/debugging-commands/param-tool/param-tool.md","sourceDirName":"system-debug-optimize/debugging-commands/param-tool","slug":"/system-debug-optimize/debugging-commands/param-tool/","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/param-tool/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"param工具","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/param-tool","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"restool工具","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/restool/"},"next":{"title":"power-shell工具","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/power-shell/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/debugging-commands/param-tool/param-tool.md


const frontMatter = {
	title: 'param工具',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/param-tool',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'param工具';

const assets = {

};



const toc = [{
  "value": "环境要求",
  "id": "环境要求",
  "level": 2
}, {
  "value": "param工具命令列表",
  "id": "param工具命令列表",
  "level": 2
}, {
  "value": "获取param支持的命令",
  "id": "获取param支持的命令",
  "level": 2
}, {
  "value": "获取系统参数信息",
  "id": "获取系统参数信息",
  "level": 2
}, {
  "value": "获取系统参数的值",
  "id": "获取系统参数的值",
  "level": 2
}, {
  "value": "设置系统参数的值",
  "id": "设置系统参数的值",
  "level": 2
}, {
  "value": "等待系统参数值匹配",
  "id": "等待系统参数值匹配",
  "level": 2
}, {
  "value": "保存persist(可持久化)参数",
  "id": "保存persist可持久化参数",
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
    p: "p",
    pre: "pre",
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
        id: "param工具",
        children: "param工具"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "param是为开发人员提供用于操作系统参数的工具，该工具只支持标准系统。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境要求",
      children: "环境要求"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取hdc工具，执行hdc shell。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "正常连接设备。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "param工具命令列表",
      children: "param工具命令列表"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取param支持的命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ls [-r] [name]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示匹配name的系统参数信息。带\"-r\"则根据参数权限获取信息，不带\"-r\"则直接获取参数信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "get [name]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定name系统参数的值；若不指定任何name，则返回所有系统参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "set name value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置指定name系统参数的值为value。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wait name [value] [timeout]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步等待指定name系统参数与指定值value匹配。value支持模糊匹配，如\"*\"表示任何值，\"val*\"表示只匹配前三个val字符。timeout为等待时间（单位：s），不设置则默认为30s。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "save"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保存persist参数到工作空间。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取param支持的命令",
      children: "获取param支持的命令"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取param支持的命令，命令格式如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "param -h\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取系统参数信息",
      children: "获取系统参数信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "显示匹配name的系统参数信息，命令格式如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "param ls [-r] [name]\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(34406)/* ["default"] */.A) + "",
            width: "749",
            height: "110"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(504909)/* ["default"] */.A) + "",
            width: "741",
            height: "194"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(1502)/* ["default"] */.A) + "",
            width: "756",
            height: "98"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取系统参数的值",
      children: "获取系统参数的值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取指定name系统参数的值，命令格式如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "param get [name]\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(783103)/* ["default"] */.A) + "",
            width: "756",
            height: "48"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置系统参数的值",
      children: "设置系统参数的值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置指定name系统参数的值为value，命令格式如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "param set name value\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(929218)/* ["default"] */.A) + "",
            width: "756",
            height: "39"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "等待系统参数值匹配",
      children: "等待系统参数值匹配"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同步等待指定name系统参数与指定值value匹配，命令格式如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "param wait name [value] [timeout]\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(812885)/* ["default"] */.A) + "",
            width: "751",
            height: "45"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "保存persist可持久化参数",
      children: "保存persist(可持久化)参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "保存persist(可持久化)参数到工作空间，命令格式如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "param save\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(425797)/* ["default"] */.A) + "",
            width: "756",
            height: "47"
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
1502(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
425797(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAvQAAAAvCAIAAAAD2MmEAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAAXdEVYdFVzZXIgQ29tbWVudABTY3JlZW5zaG9093UNRwAAA9lJREFUeJzt3UtyozAQAFAn5SNNZc2RcqAchnVqFlNzolngwkRqhMD4I+a9TRwspI6ycLuF4O3z8/Pr6+sEAHAI788OAABgT2ly0/f9M8IAANjHNbnp+37IbOQ3AEC7LslN3/dd13Vddzqduq6T3wAAjXLNDQBwKHFyM5RwAACacx5+rFqKGlqOpySZ0NjPeHx6pPxucmRqMd9KzqrpvxxPzaAAwKt5S+5zE+YruWmz4Xqd8Xj4eu6UxXPDlmE8yVj1sZVjlt8AQFuCZanKKs74qb9Y/whPqWm/2b37BwBe1nn3HpNFq93bh5LTw4pR0mCoyuS1GWkQADTtktzstf6ytp8d130Wl6U29AMANGf7VvCxwhEmEGvrHzfWSxZPzxuEZZt9owIAHu96QfGqXULjmk7eON9LNbePabF9fnAusMIQhR4W0zJVHABoTrBbquYT3TYiAOA1bVmW6j2CCgB4VeluqZp6jJoNAPCyPFsKADgUyQ0AcCjXZanynqZ2lbdZAQAHE9/Ez8XCAECjjr8s1XXd2rJN67ld6/EDwC3i5MYiDgDQqMuyVOFZBIUnfi8+D7zm4QblOx1P+6kfNzwlHH2ufc2VOpXxr523ub+o8G5+MLwdc9J+w3wW5O2TGAohLU5dGH85zqNeQwbAoh93KC4/oGDt6/zX3HTEyn7CU8rj5mGsbX9L/OH1TIX4w9fJix3/3g3zGc5D2L48bv3rtf1v/ocCcADv39+/x1+6rut+Pgpq7nvwjsYhuuwpVDWnlBusjWGDMP7yvOXxP2CeCx4/n0m2MZcI7jWuzAbgv3L++Pj19++f6aGkMDB+s0+SnrCEcNrv43lVP3M52V7tNwjnbff2a+Op9LLzWTnuA+IB4GXFW8FHG+r5e32Q3DJuTdh3XbZY2+ED5rnp+TzVVWWm4947HgBe1ntlu/x7c1i2WTyr0KbQ22I/dypj3B7/Xesri2etPb45jFUTdcoqK9PlvPD4XFeb/0AADuxyQXHyYZB86z3N7Ala/DivvPYi7znsZzHI/K21x5MOb49/+m550EL7/ODiskv4z0rab5jPOTVd5RM1fSvsrRx/Ydy18QNwJD92Sz1e6+sFrccPAMdTuyx1D8PX63ZXEFqPHwAO6bzc5G5ar3m0Hj8AHNIzKzcAALtLkxuLLABA067JTd/3LiIBAFp3SW6GXT/DRST5pmUAgFa45gYAOJQ4ubEPCABo1GUruKUoAOAYrpWb8ZobWQ4A0K5gWUoVBwBolwuKAYBDuW4Ff2oYAAD7ULkBAA4l2C013NDvWQEBANwi2C0lswEA2vUPaIulTd42f9AAAAAASUVORK5CYII=");

},
783103(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAvQAAAAwCAIAAADxWHnKAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAAXdEVYdFVzZXIgQ29tbWVudABTY3JlZW5zaG9093UNRwAABRtJREFUeJzt3VtvG0UUwPHjC3EBF8JFTjAEIQuFAJUQVqWqfbBW4hPwgPga+WI8wlulVSRSVUJ5CiiNQoQEysVS2jSJ6iYtXh52s6xndse79vqyk//vpfZkdvbMbKU9ntlLqV6vCwAAgC3K0S+u684oDAAAgHwEyY3run5mQ34DO/A/GQBurLKIuK7rOI7jOCLiOA5nhRsozG7nXJo4i9IXAMCElIdXsdS8nf9mG4+f2o5jOvGniTPM1AEAN1NMcsOJAQAAFFdVMi5F+TXDTZRMKGwnLI+WmP+qlEQNzbeUrWJb0wtjuzB0F9H6evvK+BjqK5ukjCdp/FOOszkePQY9JEPj6eNXjBCnuT4A4CYrRW8FT3myj1bzr9cJy2M/J20ydNvYmrHxpIzB8NXMHJ5eLoMnbHP9rPEkjX/SnwxxZio3fM4af2yEOcaZKR4AgGXUZSkn3SxOeNoYOk8Qu0ma+vNDOU2mOWXmVWfotvrx0oc3LyOMAwAA01fNtzlXW5TJt36s2AQr2v6cULpJcjC+uTq+AIA5UZX8JvCztjOF/c5bAsG6Sb4YQACAbsRbwd3INaT6CSbr7+kxf3/7MyKhrHsZundlxmXkaDPNZonxeS3m8R9BmsFJOQ5p4h/ZCMcXAHDTBBcUZ1ouCS//1Csry0yGK0KG1tcLkwIzXElq7pe52djKos2+KO0r1fTupI8nKbzY8U8zzob4lQaTyvUOZo3ffHxHjjM2wqQ4AQB2U++WSnMmyGu2IC+G5MZK1ncQAIBxZE5uDD/cZyjTzFOhzef4AwAwPwaSGwAAgKIb8YJiAACA+URyAwAArEJyAwAArJKY3EziISUAAACTlpjccDMOAAAoIpalAACAVYIXZxqeE5Pyybx6ud4UAADApMW8OFN5fYH+Oam+Xj65uAEAAGINWZYaZ+qFaRsAADB91RzbMrz4EAAAYDryTG5Eu/6G/AYAAExZnndLcZENAACYueDFmfpyknKTVNJXiczWcKsUAACYOd4KDgAArMJD/AAAgFVIbgAAgFVIbgAAgFUGkhtudwIAAEWXeLcUAABAEZXl+ml7fk6jPGUYAACgWLjmBgAAWCUmuWFZCgAAFFdVWIoCAAAWGXhCsZ/iMHMDAACKS12WYhYHAAAUGhcUAwAAqwS3gs86DAAAgHwwcwMAAKzCE4oBAIBV1LulyGwAAEChsSwFAACsUlpfX59Iw97r08PDF7ebzduVsOzf86O/n9eaH7+3UMp5b71er1KpSqnkN3z9r0ipJCKZ9lapkPDlw/O86AfP86If+v1+v98/OTlZWVmZTjwHBwfNZjOHhnp72eq/+bmIyMXuw5/Pvvrx7kcSfNs5e/f5O2vfrdblYve3g+bd1brnne8+fCz37snjX86+/KG97I/Y0dZPv3r3v/+m0T/f29j8s5dDFyajVqtdXl7OOoq0Go1Gt9v1P1fKi2/Ixctbq5++2n329retxQW5erZ/+Me5J1JevOWdvvRk6a3Pjl/8Fd/W0p0HX7xfDb68fvpkc/tYGl8/WKsdbWzt/1+nJXuPtrvSaneWr55sbh8Hf2m1O4unG1v7rXbnk2Ai/dXTnUfborTghz1Q2Lhzf23heHDbSBjdDxNa+KDq76KrFIqIyMU/G1v7fqcWgo1b7c7SVbR+q91ZvtzZ/L2u9CVSM+xmmn6FHYkOqb/3weGKRhI0HAx4JKpuGGO4YcK4aYdJ3fuAxGM6OD7XYYjSqfh9YTL+A7QTuGT5PFyLAAAAAElFTkSuQmCC");

},
929218(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAvQAAAAnCAIAAADvi0vpAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAAXdEVYdFVzZXIgQ29tbWVudABTY3JlZW5zaG9093UNRwAABJNJREFUeJzt3VuWqyAQQFH7rjswZuSInAtD6w8TYkNVCQR84NlfiSFlQbIaWpD8zPO8LMt0Eu+9c+6ss48nas/HNu9jKw4AmKbp/4nn9t5P9ENNOefWVg1PT0vlPHyvAODhzhzc0Pf0QKvSAgDwcP/OTgAAAKCleHCzndQAAAC4nc/gxnsfFiuclc0dhXYTXzo0lQMNXDUAwN291tyE1ZfrAxZjbq0deVGDDNz3D1w1AMAYHr3mJrOftoc1zrm0gHiwuVbjjKI4x1QNAIBq8uCG3gsAANzUa1oq2h/FFqZpxPmaECcc3x6xX42ObO2Ot6J3idHSg0VTTjnJ5weJ3qXlbwdJ8y+KX9cOAABc2Wefm9Db7S64Wcco0TKd9SXxcRp526eK5dPgdlY+2ZlXOx6lVDQoMapWEWRSapeTlZZ/TvxtwhXtAADAxQnTUplXcUJ3aF+P0d6SU75aj656pO5/pLoAABBpv0NxNGnVvLzI6T870HbY1Ik4QKyjDSu19gEAYDDxreBfKo3TcEJEnI6ZbtKRd2oH7TjzUACAgdXfCq6ta4leLY32ZTJ1xU6/uhOWMa3C8eipZrdeX7YPAAA38jPP87Isk36Xjci/9/pLC0fTTOl8U3759KCWmHEKu1522ChCtHzYqFppPsZCYDu9tIAWX8tHi2Of0QgFAMC5PoObVeaEBfMabWmDGwAAUKpmQbF//wQVHXArLPgFAKCVeHCT063S9fZAqwIA0MSjf1sKAACMh8ENAAAYymdairtgjmHclzTwMqaBqwYAuBp5Ez/2O/lG/m3V0VuGNHDVAADX9NW01N37rU7528Ma51xaQDzYXKv6FsU5pmoAAATy4IbeCAAA3NRrWmrdZ0VbCBIepzve5u/wa+9oLAZ35u+Na9vvGq/m5J+Wt/Mx5CSfH8TIczdgUX2N+EWfe530vNG5jCrsfrWm8vZkLRoA3M5nQbE4+NB2zg1dXea+ON57v/lJgW3PkT4OxfzfXyEwyqfB/fsHIoryF8sb+Rjsqu2+3chHC24oqq943I7Tinhel+xwuH26+3WazHrZ9dWOAwCu7M+01NqRd/oLHjoJZ16P0d6SU763NI2cwgM4qy67540GH9qArzR/rfxInykADEz4+YXogkfvYYT433nz8qX5XJw4QKyjDSu9Mn3T1QHnLarvWe0AAPiGfCv4Vtc/6KUTHBUTIr3Ln6LhxFDO595vHur485bW96x2AABUK7sVXLuqkbkGJTxIe4hjrq+U5n/ZqzjuvYxpFY5HTzW79e10VaxJQHv9jX1cC3W7LwAAwPAzz/OyLNEfcW0RpTYoyVwbIRaOppnS+ab88unB3WmFNKW0vJ1PKpow0nrcbajS9vf6wlg7w5z62vlocewzGqEyC4ufcvqSGK26vqUfPQDgCl6Dm96n8VzPb0ob3AAAAGFBcXPrv790wA3tXpECAOCxjhjc0PX2QKsCACAqW1AMAABwcfHghttDAADArX2mpba3xT5hyiP/fp/m8Qdu4cyqpWPoURsEAHC8eBO/cM82nc2uiuHRwBfGSqvGFwwA0MkvyThP4FnWrkEAAAAASUVORK5CYII=");

},
812885(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu8AAAAtCAIAAACRXhKQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAAXdEVYdFVzZXIgQ29tbWVudABTY3JlZW5zaG9093UNRwAABItJREFUeJzt3dFyqyoUANA008d+lJ/up92HtF4jsAWjJnjWeug0Fjcb7QxEUL9+fn5uAADdus8/jOP4pjQAADb6elybmY9jhmF4VzanebT3uJYG8cdxvOoRrmxaOmi+6gEB4Bzft1kn9Pjlwt3tjjaMhy586au1af7BANjRfb3IFQ3DUOpQKzvmuD/Oxg8q3dFeY6amOOc0DQCyMqMZ3RIA0JHv2+32mF2q3GGaYclOtUxxpu3zLfFfF1vmggFWms88sTR+aeN8e9MsUk2j6oOUUq0JGOTfFH/bcWiy4RABQMnX/A7tyt5rMVyY9+LZ30u7rO6bLZkmU9oxyCeIWb9saHG40iZXxi/tGOcfZLUhfn3+TVWvFttQCwAsLGeaKq/TTD1QfMWltEtN+UppwlMHuUv81doPiny+09oyr6jy/w0AAt/7hltM9+xefjXUcfHPlx0pblMaX5ZmoACgI093aL+oNc7uswyrs0t92TH/UpwXp5a26f28APBpNt6hPc4WiqY9U+uFkBcvnAxrz8jZFv/tl3Me7ZpM2xcfS0plxudFvpvj7MLIBoDXbXkW8Pi3xjYtvJjZSad46sunG+PxSmllaxohTmm+V6m6eZBFzKDJQb3Z45+2ZV7X6uitJn4pn1KcuMYgVKm8oQwAr1ve01TZdemETlAazQAAc82rgB/fqvWsJ7BKFwBqPF2bAQDozj/6niYA4DKMZgCAvt2n232nn5V3/779BuYrCY6n4wwAsXu6ttRq0yNsGP8ZMgJAjY0zTcMwlAY9vXfAB+UfjxGzxzM4yDvaq729n3cA+mXdDADQt5XnzWSf2Vp6kOu0vf5ZuvEzhW+5B9cO4Vu7Sw+6Df6abqx5lm6cT6Am+fogQZ6rAZvaG8RvOu+lOIt9g5RW/1Va8w+2A9CFaDQzFt7guOjDJtP2ms5g+HsJUbpX9vep2Pj8gP+gfBp8/HsnQ/YZu6X8s+WDfAJx01Z3D/IpBQ80tTe7PY5Tn/8t96jA+cfVf484zzj/0nYAevE70zR18/O/lb657mg+Qkq/ZGfrXQyqVssfLU2jpvAF7NWW1TiL0UZpxNaaT6n8lc4RwD/i+xbOlWS/N5+gtd5t5Vvz+XDBeWxVGkeOhRmcJnvFCTTlf0I+AByqdqbpTK31bsjz6PJvseP5qrlu8Up1e8WpiV9T79H5AHCoqnuatl2ZqFxHMv2SdiHnXEEp7dW6/e2Gv6VID9P2xceS1fbudd2rNZl0DU28vRSquxMKQKXft05O62bimaZpNeW8TGkUUrkeIls4rTeuNCifblydWUhTSsuvHoRszHT3oGlBFdn8x/Lq1zjDmvbG+ZTiBNVl42TPWvqnbLTN+beeSgA+zTvfoZ0OnnhFaTQDANf2ttFM6as2r4ivOQHAJb3z2gwAwOuqVgEDAHysp9GMmzsAgO78f0/TtMl6CwCgI/fb84uH0huGAQA+mXUzAEDfMqMZM00AQEeWb50EAOjL0/NmKp9MDwDwOZYzTa7TAAB9sQoYAOjb7x3a704DAGAj12YAgL55FjAA0Lf/AOVAYLK1rV9VAAAAAElFTkSuQmCC");

},
504909(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuUAAADCCAIAAABhbisOAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAAXdEVYdFVzZXIgQ29tbWVudABTY3JlZW5zaG9093UNRwAAFMhJREFUeJzt3T2Wpbx2gGH6W7WW5+QIx3cKPYgaUA8Gx86ceQA3dHBDZw6oj1Jp/7AlQBLwPkmf4oC0JU4fCSR0fn1+fv7582cCAAAY1V+9AwAAANiR91eWZekRBgAAgOm7v7Isy9pZuW+X5b6RAwAAx1d/ZVmWeZ7neZ6maZ7n2zX8W2cLzVDnAIBmHjJ/ZetsvUrf7sLxCqe7AwAI0vsrL2z7AQDAsD7Wf4rGgNY9t0Oyzs2WzrY93eK/m21JVXehstQq0vHjDx6oxrNuz+rT2T87JD12Nwx5voLnxY9HxiBDchKPxA8AwK9s/ZVg+5Huts592barr61Ddo9V93Sikp2nLIZI055Sm+HSYKxSpNuzvPz9g8VJ97SC3z0vR7Y7r4viBwC83IfctF5t7zYk2w7p/urVuXpI9kLd/3TxQvnvlvacIq3yWfvsHivPb7xcpSrqAQAASemvHCRHN87dv0iW7O3ay7vHDwDAKb76K2fdmS9Np8GIwN0HIO4ePwAAx9U/z5xOmZSNaOnNkovGg9oMM0nZfZHqMIruUU3umij++aqwm9EUrodI/ACAN/ueb1s07rC2edks0e2t6efTKFkLFN9fbrQCs7Lwsw6qTiQtiJraNlnV+nM366xarFpSz1fkvDjxZwla22UBK+IHALyc8nxQpLVgYOJeOF8AgFurGQ9abv4zQ2/D+QIA3F3+fNDVT9WiPc4XAODuHvL7QQAA4MHorwAAgNF9TO4i9A9290dR7h4/AABxH5O2QDuPk1joJQAA0N7Q40GXPtIyz3Npt2PtxsllUa6mZlcRPwAANzV0f2VYD+sosKosAGBw+793KBcnVRdgdRYztW4PyHflRjn+4q8P6yylmnJWnvULdSSeYD2oiZeuGCvjiVcOAACj+Vrf1lqaPZ3IIue4TEmLmL2wXmcv/HkzchqNs4Maj09N3yr+KfFE6mE3l4p4/HIBADC47/sragMWvEciX6j7X02GcSSR4+LxNKg3OigAgPuKjgdZwxln7R/XpSfUQGm9AQDwHjv9ldKBg4qBhqv3vwUGaAAAcESfD2pzF8Q6qnT7ffkluqi8y7I8ryYBAE/y6/Pz8/fv3+sf1qTOKRmnkAMW1pRVub/cmKUmA8gmik4/2+x0MqmTiFUoKx35p5NFPJ5IPaQvZMDWNJdgPOqfMnEAAEbz9XxQ7zAAAABMrBcHAABGR38FAACMjv4KAAAYHf0VAAAwukP9FfUhWB6OjXhPLT2gpHzOVy8sMoBx7K9vq+Jry/Gwx4O7FKdlpk5efM43i/YbYQDQzKHnmfnmsrSpmWb13/hEt28a/Yz4nC97P/wJAFd7xfyVs+5jP/V++LDlolG81LDnHQCk7/Gg3VVZp0D7IddOnZL77epCq+oqq+pSsH7Wxznx7B618hellYf469I6+29bIkHKytw9ZBKfBydOJ/2iz8Pkliv+OczSt06olUXkk+ZXY7CSrTitRPzz6GxJlZ53uowABvE1HmTd7/XvA1u3heV22VTspm/tc6lgAXf3z/peu7UUqYeK8LLsdkOyUt49X06Q1pZJ+zwEU4jEP2mFrTtf8c+5n11dnDJmecjuscH/TXXfAwDQgD4edMWXUWma8zwvy3Lfb8Yt7Fn8/FBcVvyDVZGGdCSdU1wdQ2n99zpfar5ph8M/JLJ/tRE+JwCw+hoPmu3fHTz3GxCWu9Sz1YKuTfV9+5ejWX6OFp2+v8r5HgCAvr7nr1j3e/nOauMu9XyXOG+ttNt3YjeRcR8AY/oaDyq6hrtIlvj6XXnwenFLqiIReUhROtueFV/66bhAmqOV+8Eq8ssVfGu0myu79S8/b/7+EcHzFc+39MwW7S/Pu3V4Wq6hzjKA9/ieb5tutcaDrGFyf3s2Ku/8md3TVkf0K2ypxXfOwnDSsepHHi4z2q1nGZIarV805+Q6iVj14MfpVI5MwfoAqOk7+UpO/VufN3X/os+5msXBONX/C06m1v8d+e6knfdgFn6hAOAKh9aLQ6nFeI4D57pL3d4lTgDornI9flQ75Y6Rn3LmqS2iVd7t3UEKfpc4AWBk3F8BAACj09dfQRv+lfcICZ5rtPKOFg8AwEJ/pZsrBgLkrMxxjFbe0eIBADjor/Rx3ayFMZvM0co7WjwAAF+H/sqyLHyhAwCAuA79lfc8DWF1y65+JKTXJf5dyjtaPACAXa8YD+KODgAAt9Zu/RXn4nt9Ya27qr51BbkeaJp1Gv/uuqvbxsiSoFa+/gqn1qKlcW8rb2k8/v7XxQMAkBr1VxZj7fnFXu/VeatU8Nj570XKt+zUONM/re3quxX5bqmpTaPVtAe9rbwV8chc0vJeFA8AQOq8vq16NT+Jlq/xleuWXd98Z/ELgrv9hlPybaZXeYPxTEaFOHECAC7Sf/5Kel0LlXXt/tRr+ruUd7R4AODBOvdX1p7K2zorFcMH8pre2T5a/2+08p44fHOL+geAB+iz/sruxqxFOdi6rLdwjqRwUHXuRc32OB5f3tHiAYDHazR/Zf755MU2BpTNWEzbgOyQBkFmsyzTTLP+kxrkJOKcf04XlW9tkzOsfCvE29G3lXfkeAAAPn6fuafT27bBG8vRyjtaPAAAC/0VAAAwuv7PBwEAAPjorwAAgNHRXwEAAKOjv4LbY902AHi8zuvxo71TntptIBInPRUAeAnur3TQt5U93lNpE38kznUJn8tDAQD09or+Svf1bQEAwBEtxoPSFWzXLek1sdyo9i3Udy+6tvbj3LYHyyUPmUoGO+SisdlKwVnWVv3IWlWTDZ6a6sGaijj9/QEAb9BovTjZNG7tt9yo7rC+yNYPvWI5UT8MuX23XLt/+sFMSV9HtutqLalxFm13XpfGX3QeK+IsigcAcFPtxoPUFsW/p9Je1vJFWsGz9tk9dha/Kpy+VZ2+qqIeAAC4Tv/ngxYxqhLZf3Cz+7uAqHCL8w4AuEjn/krFnfy7tP0MWJyLCgSANxvl+aC6q+f4LZngntl9kepr+tJ7RU6E6T6ntNm7GU3heojEX81JkHstAPA2Lebbbq1LOkc1+3NOnoJJd3DencLX3OnU1IqAs41+QWSQatZZSFaE2+xUubOVuFU/aq0622UBS+OvO4+7caoRWnECAJ6h0fNBqMNAEgAA0zjjQZDWmweMfQAA0P/5IFi4swIAwIr7KwAAYHT0VwAAwOiG7q8wdQMAAEzDzl8ZqqdS+jg0AAA416D3V+Z5Hqd/ME4kAAC806D9lXNdsfoqAABopsV4kLrwa2QRVTUda03VinVv/WhlOsF1b+X2gyEBAPByLforazdlbbDT19PP9Vt313KVi7inv1+T9RXSP4tW4rfSUV9b+8vtwQAAAIDUeTzI+iGYAR25QcLNFQAAjmj0fNB2W0XeRFF/AK/CUD0e5/f8AABAqc7PM5/4e36j9Qmc8SkAAFCk3XiQenNlU3F3xDkke6v980FD3ewBAODufn1+fv7586dNZmp/JRsP2uarpvuoc1edQ6whp2CQWTrZY0HWn5M9HYebKwAAHNG0vwIAAFDhFevFAQCAW6O/AgAARkd/BQAAjI7+CgAAGN3HpD18+4bnWYoeGhrQ3eMHACDuY9JWRmF9Mwu9BAAA2ht6POjSVdfmeS7tdqzduOM/HVBKza4ifgAAbmro/sqwHtZRaL/+LwAARfZ/PyhbznXSVpi13s22pNR35UY5/uKvPytzV6m7yV9ePDeeYD2oiWf5OsW04olXDgAAo/la39ZaPz6dyCLnuExJi5i9sF5nL/x5M3IajbODGo9PTd8q/inxROphN5eKePxyAQAwuO/7K2oDFrxHIl+o+19NhnEkkePi8TSoNzooAID7io4HWcMZZ+0f16Un1EBpvQEA8B47/ZXSgYOKgYar978FBmgAAHBEnw9qcxfEOqp0+335JbqovMuyPK8mAQBP8uvz8/P379/rH9akzikZp5ADFtaUVbm/3JilJgPIJopOP9vsdDKpk4hVKCsd+aeTRTyeSD2kL2TA1jSXYDzqnzJxAABG8/V8UO8wAAAATKwXBwAARkd/BQAAjI7+CgAAGB39FQAAMLpD/RX1IVgejo14Ty09oKR8zlcvLDKAceyvb6via8vxsMeDuxSnZaZOXnzON4v2G2EA0Myh55n55rK0qZlm9d/4RLdvGv2M+Jwvez/8CQBXe8X8lbPuYz/1fviw5aJRvNSw5x0ApO/xoN1VWadA+yHXTp2S++3qQqvqKqvqUrB+1sc58ewetfIXpZWH+OvSOvtvWyJBysrcPWQSnwcnTif9os/D5JYr/jnM0rdOqJVF5JPmV2Owkq04rUT88+hsSZWed7qMAAbxNR5k3e/17wNbt4XldtlU7KZv7XOpYAF398/6Xru1FKmHivCy7HZDslLePV9OkNaWSfs8BFOIxD9pha07X/HPuZ9dXZwyZnnI7rHB/0113wMA0IA+HnTFl1FpmvM8L8ty32/GLexZ/PxQXFb8g1WRhnQknVNcHUNp/fc6X2q+aYfDPySyf7URPicAsPoaD5rt3x089xsQlrvUs9WCrk31ffuXo1l+jhadvr/K+R4AgL6+569Y93v5zmrjLvV8lzhvrbTbd2I3kXEfAGP6Gg8quoa7SJb4+l158HpxS6oiEXlIUTrbnhVf+um4QJqjlfvBKvLLFXxrtJsru/UvP2/+/hHB8xXPt/TMFu0vz7t1eFquoc4ygPf4nm+bbrXGg6xhcn97Nirv/Jnd01ZH9CtsqcV3zsJw0rHqRx4uM9qtZxmSGq1fNOfkOolY9eDH6VSOTMH6AKjpO/lKTv1bnzd1/6LPuZrFwTjV/wtOptb/HfnupJ33YBZ+oQDgCofWi0OpxXiOA+e6S93eJU4A6K5yPX5UO+WOkZ9y5qktolXe7d1BCn6XOAFgZNxfAQAAo9PXX0Eb/pX3CAmea7TyjhYPAMBCf6WbKwYC5KzMcYxW3tHiAQA46K/0cd2shTGbzNHKO1o8AABfh/7Ksix8oQMAgLgO/ZX3PA1hdcuufiSk1yX+Xco7WjwAgF2vGA/ijg4AALfWbv0V5+J7fWGtu6q+dQW5HmiadRr/7rqr28bIkqBWvv4Kp9aipXFvK29pPP7+18UDAJAa9VcWY+35xV7v1XmrVPDY+e9Fyrfs1DjTP63t6rsV+W6pqU2j1bQHva28FfHIXNLyXhQPAEDqvL6tejU/iZav8ZXrll3ffGfxC4K7/YZT8m2mV3mD8UxGhThxAgAu0n/+SnpdC5V17f7Ua/q7lHe0eADgwTr3V9aeyts6KxXDB/Ka3tk+Wv9vtPKeOHxzi/oHgAfos/7K7sasRTnYuqy3cI6kcFB17kXN9jgeX97R4gGAx2s0f2X++eTFNgaUzVhM24DskAZBZrMs00yz/pMa5CTinH9OF5VvbZMzrHwrxNvRt5V35HgAAD5+n7mn09u2wRvL0co7WjwAAAv9FQAAMLr+zwcBAAD46K8AAIDR0V8BAACjo78CAABGR3/ldbqvRgMAQCn6Kx307S4cf+CW7g4AoLFX9Fe4owAAwK21WN82XcF23ZJe4suNat9Cffeitbn8OLftwXLJQ6bYUqpZ+rIG1Kyt+pG1qiYbPDUV8ccTT7U87wCAYTVaL042jVv7LTeqO6wvsvVDr1hO1A9Dbt8t1+6ffjBT0teR7b1aS2qcRdud19XxW/kOct4BACNrNx6kNjD+tXV7WUMYaRTP2mf32Fn8qnD6VnX6qop6sNzivAMABtfo9w4dctQgsv/gZvd3ATE99LwDAC7Sub9ScWP/Lm0/4xeOB593AMAVRnk+qO7qOX5pHtwzu9yvvqYvvWfgRJjuc0qbvZvRFK6HSPx1wVxxFADgvlrMt91al3SOavbnnDwFk+7gvDuFr7mzWZ+lAWcb/YLIINWs5URUa7fZfj5ITdyqH7VWne2ygKXxdz/vAIDHaPR8EOowkAQAwDTOeBCk9Y4CYx8AAPR/PggW7qwAALDi/goAABgd/RUAADC6oceDusw2dR6KOTfl6zK6VOlzOjzXAwA4btD+Sq9Jpov9oznHzT9/B2cWP4szvqXwd3xK9wcAQDXoeNA8z13urKSZymVUAABAF4P2V85VvfoqMtwdAQB00WI8SF34NbKIqpqOtabqdfMk5Fqr8t00X3XB1mAuk1EzzuK51lG78RycTxMZ3KF/AwA4RaP1ba15If58kd0t25+nzJNwskt7Kk7M6v5yeyqSptzNelERT0W9qf22yFF0XwAAdTqPB6l3Bca0hRqc12K1zXNC7uzfOznS3qvHpmWJ9yfW4ItOGZ0VAMARjZ4P2i791XsYU7gT4OjV4zkr37PqoRn1bKrorAAADur8PPOJLVmvFvGUfDu26LMxL0dVESedFQDAce3Gg/zL8YqbCs4h2VvLsgRHcNLd1HkkcnswpKC73FzJWDVs1SEAAEUazbddqS19Ng6izktV2zznEGvIKRikmql1H0Lmm6UgG2lntzQXqxLUGlCP8uNJE4zfAlHr2aphq+wAABRp2l+5r2cPajy7dACAB3jFenEHrTcJHjmWsY7j0FkBAAxu0N8PGsqDm/MHFw0A8CTcXwEAAKOjvwIAAEb3Mb31IY6ih4YGdPf4AQCI+5i0lVGYg2mhlwAAQHtDjwdd+kjOPM91S7W2XzJfza4ifgAAbuqv//nf3iHc0MM6CsH1fwEA6OXjX//8p7+HuhzqtsV/N9uSUt+VG+X4i79+q7o6rWQtYmslcko8wXpQE8/ydYppxROvHAAARvPrP/79H//13//pLP1urdqetqDbW9b+codF+7nm3Wk0zg5qPD41fav4p8QTqYfdXCri8csFAMDgPv7v71dqAxa8RyJfqPtfTYZxJJHj4vE0qDc6KACA+/r4t7095GjCFfvHdekJNVBabwAAvMf3/RVV6cBBxUDD1fvfAgM0AAA4/tq9v7JqcxfEOqp0+335JbqovMuyPK8mAQBP8uvz8/P379/rH9akzikZp5ADFtaUVbm/3JilJgPIJopOP9vsdDKpk4hVKCsd+aeTRTyeSD2kL2TA1jSXYDzqnzJxAABG8+vz8/PPnz+9wwAAADANvb4tAADARH8FAACMj/4KAAAY3f8DZVIUi2/a9GIAAAAASUVORK5CYII=");

},
34406(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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