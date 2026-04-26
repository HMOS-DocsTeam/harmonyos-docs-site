"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["723155"], {
51654(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_debug_app_ide_code_debugging_ide_debug_arkts_debugger_ide_debug_arkts_debugger_md_e2a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-debug-app-ide-code-debugging-ide-debug-arkts-debugger-ide-debug-arkts-debugger-md-e2a.json
var site_docs_ide_debug_app_ide_code_debugging_ide_debug_arkts_debugger_ide_debug_arkts_debugger_md_e2a_namespaceObject = JSON.parse('{"id":"ide-debug-app/ide-code-debugging/ide-debug-arkts-debugger/ide-debug-arkts-debugger","title":"使用调试器","description":"Debug界面有三个tab页，分别是“entry”、“entry(PandaDebugger)”和“entry(Native)”。","source":"@site/docs/ide-debug-app/ide-code-debugging/ide-debug-arkts-debugger/ide-debug-arkts-debugger.md","sourceDirName":"ide-debug-app/ide-code-debugging/ide-debug-arkts-debugger","slug":"/ide-debug-app/ide-code-debugging/ide-debug-arkts-debugger/","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-arkts-debugger/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"使用调试器","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-arkts-debugger","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"智能步入","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-native/ide-smart-step-into/"},"next":{"title":"跨语言调试","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-cross-language-debugging/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-debug-app/ide-code-debugging/ide-debug-arkts-debugger/ide-debug-arkts-debugger.md


const frontMatter = {
	title: '使用调试器',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-arkts-debugger',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '使用调试器';

const assets = {

};



const toc = [{
  "value": "Debugger窗格",
  "id": "debugger窗格",
  "level": 2
}, {
  "value": "Resume Program",
  "id": "resume-program",
  "level": 3
}, {
  "value": "Pause Program",
  "id": "pause-program",
  "level": 3
}, {
  "value": "Step Over",
  "id": "step-over",
  "level": 3
}, {
  "value": "Step Into",
  "id": "step-into",
  "level": 3
}, {
  "value": "Step Out",
  "id": "step-out",
  "level": 3
}, {
  "value": "Run to Cursor",
  "id": "run-to-cursor",
  "level": 3
}, {
  "value": "JSVM Debug Port",
  "id": "jsvm-debug-port",
  "level": 3
}, {
  "value": "Console窗格",
  "id": "console窗格",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
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
        id: "使用调试器",
        children: "使用调试器"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Debug界面有三个tab页，分别是“entry”、“entry(PandaDebugger)”和“entry(Native)”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通常第一个tab页“entry”用于展示推包安装过程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(321026)/* ["default"] */.A) + "",
        width: "1136",
        height: "296"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["第二个tab页“entry(PandaDebugger)”和第三个tab页“entry(Native)”是调试器，用于调试Debugger功能，其中“entry(Native)”仅在涉及Native调试时才会拉起。调试器包含两个窗格，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#section1437520119316",
            children: "Debugger"
          }), (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "和"
            })
          }), (0,jsx_runtime.jsx)(_components.a, {
            href: "#section327153017314",
            children: "Console"
          })]
        })
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(500250)/* ["default"] */.A) + "",
        width: "1048",
        height: "297"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugger窗格",
      children: "Debugger窗格"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Debugger显示两个独立的窗格："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "左侧区域是Frames，当应用调试到某个断点时，Frames区会显示当前代码所引用的代码位置。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "右侧区域是Variables，用于展示当前变量。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(847683)/* ["default"] */.A) + "",
        width: "1521",
        height: "391"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Debugger窗格有多个按钮："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 调试器按钮"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "按钮"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "快捷键"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resume Program"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "F9"
              })
            }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Option+Command+R"
              })
            }), "）"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当程序执行到断点时停止执行，单击此按钮程序继续执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step Over"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "F8"
              })
            }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "F8"
              })
            }), "）"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在单步调试时，直接前进到下一行（如果在函数中存在子函数时，不会进入子函数内单步执行，而是将整个子函数当作一步执行）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step Into"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "F7"
              })
            }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "F7"
              })
            }), "）"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在单步调试时，遇到子函数后，进入子函数并继续单步执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Force Step Into"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Alt+Shift+F7"
              })
            }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Option+Shift+F7"
              })
            }), "）"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在单步调试时，强制进入方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step Out"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Shift+F8"
              })
            }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Shift+F8"
              })
            }), "）"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在单步调试执行到子函数内时，单击Step Out会执行完子函数剩余部分，并跳出返回到上一层函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Ctrl+F2"
              })
            }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Command+F2"
              })
            }), "）"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止调试任务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run To Cursor"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Alt+F9"
              })
            }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Option+F9"
              })
            }), "）"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "断点执行到鼠标停留处。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSVM Debug Port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["转发JSVM调试的端口，转发后可以在浏览器的DevTools工具上进行", (0,jsx_runtime.jsx)(_components.a, {
              href: "/coding/jsvm/jsvm-scenarios/jsvm-debugger-cpuprofiler-heapsnapshot",
              children: "JSVM-API调试"
            }), "。  说明：  仅Native调试器中支持该按钮。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-program",
      children: "Resume Program"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点击Resume Program图标", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(594274)/* ["default"] */.A) + "",
        width: "21",
        height: "20"
      }), "，如果存在断点时，命中下一个断点，并展示对应的Frames和Variables信息；如果不存在断点，设备上的应用正常运行，Frames和Variables信息会消失。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(414245)/* ["default"] */.A) + "",
        width: "742",
        height: "255"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pause-program",
      children: "Pause Program"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点击Pause Program图标", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(137001)/* ["default"] */.A) + "",
        width: "22",
        height: "23"
      }), "，当有对应源代码时，应用会暂停。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-over",
      children: "Step Over"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点击Step Over", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(156612)/* ["default"] */.A) + "",
        width: "23",
        height: "26"
      }), "，当前代码执行到下一行代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(155093)/* ["default"] */.A) + "",
        width: "766",
        height: "312"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-into",
      children: "Step Into"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点击Step Into", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(506417)/* ["default"] */.A) + "",
        width: "22",
        height: "21"
      }), "，当前代码进入到方法内部。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(331617)/* ["default"] */.A) + "",
        width: "815",
        height: "319"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如代码进入add方法的定义处。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(299203)/* ["default"] */.A) + "",
        width: "670",
        height: "267"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(95243)/* ["default"] */.A) + "",
        width: "738",
        height: "63"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-out",
      children: "Step Out"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点击Step Out", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(956449)/* ["default"] */.A) + "",
        width: "20",
        height: "26"
      }), "，代码会从方法内部回到调用处。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(172177)/* ["default"] */.A) + "",
        width: "816",
        height: "315"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "run-to-cursor",
      children: "Run to Cursor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点击Run to Cursor", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(715724)/* ["default"] */.A) + "",
        width: "22",
        height: "18"
      }), "，代码停留在鼠标停留处。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(282036)/* ["default"] */.A) + "",
        width: "809",
        height: "313"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm-debug-port",
      children: "JSVM Debug Port"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点击JSVM Debug Port", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(251199)/* ["default"] */.A) + "",
        width: "25",
        height: "21"
      }), "，弹出输入转发端口的面板，输入端口并点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "OK"
        })
      }), "后会开始转发，转发成功后会有弹窗提示，打开对应的URL即可对JS代码进行调试。关于如何调试C++拉起的JS代码，请查阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/jsvm-scenarios/jsvm-debugger-cpuprofiler-heapsnapshot",
        children: "JSVM-API调试&定位"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该功能从DevEco Studio 5.1.0 Release版本开始支持。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(677257)/* ["default"] */.A) + "",
        width: "223",
        height: "145"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(902139)/* ["default"] */.A) + "",
        width: "344",
        height: "95"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "console窗格",
      children: "Console窗格"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Console窗格用于展示已加载的ets/js。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(546385)/* ["default"] */.A) + "",
        width: "810",
        height: "236"
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
546385(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833441-86edabb6fbe3f692e7f7e0425817602b.png");

},
95243(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753413-0071470e5260d162d203986f743edb76.png");

},
677257(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
414245(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913478-166d479ebcf607d5327d190ea1117ab3.png");

},
902139(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
506417(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAAAnklEQVRIDWP49OnT//v371MdMwwKgy3mX/sPwsT4kCQXjxoMD1OqBcWui3f/Oy6CRBjMUGQaJAdSgy0yCUbezgt3/ztgMRyfoSCLCBoMUoRuOMgiXC6FuZ4og0GKd0BdDjIUZBHMAFw00QbDDCfGUJBakgzG5Tps4jgNzsvL+08KRjec/gaju4BUPk4Xk2oQuvpRg+EZBxwUoOqJ2hgA+vtPkOQSE/4AAAAASUVORK5CYII=");

},
299203(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753443-91d2445931c260cf2a6083d84a5c8151.png");

},
500250(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753478-f7b5bd769e9d4caf8f2f62c1fa2df9ae.png");

},
156612(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAaCAYAAABctMd+AAAA7klEQVRIDWNYsfHAf1phhk+fPv2nFR41HGvQjgYLecHy8t3H/6/ff8SqmVASxhvmL959/J+48c7/rG33yLIAp+Ewgy3mX/sPwtgseEXAR1gNRza4aOf9/5lb72FYADI4bcvd/x8+4s7hGIajG/zuAyTMkS14/PoD2GCQj4g2HJvBsEgDRSrMAofF18E+Icnwmr0PwJpAQQFyMcxgGA1yMbLBJBn+8NX7/52HH2E1GBbGIAORMdHBAnMhOo3LYJJcjm4opXyM1EKpgcj6MQzPy8v7TwpGNgydTV/D0W2nhI/hckoMQ9c7ajhGUQEKIgCI4YwQwO00tAAAAABJRU5ErkJggg==");

},
172177(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833449-0bbe034b341b567a0cc846625e982fca.png");

},
847683(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833399-dde4d0bdc49d069606b3d7dbfe6c8e5c.png");

},
251199(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAVCAIAAAA8SdJPAAABY0lEQVQ4EeWS0UuDQBzH928uaPWSbKPs5WqjJ0OqByWqpz0LguzIKTFErI0KXGA2ZtRmIk5sLaMi7i/oQZBxnRYxeum4h9/ve/f9cN8fV0DzW4X5odCfsOL3F8bg7fEgebjpWztnB68fbzk5Mt81mngrMliG6/Z40POvS5CuKvUgDn/DQghZQb8oVUqQXmyuLUjVfujkgBDKnpf/HFSUWlGqpJuSgfvk5eAIGRmDZwy+qtZTSlqUlRpj8LudQyKRwFpVt8qtzdSPFVRrA7S3f8pCCF16Vwni/tFNbPZ4kCjG6JwIIs9LtI/3LxqJs9ETpBsly4zphIxYqBKkMU9WS2AFcdi+O8UyZvlndQLLCvontzqWUdM00zSn06koilEUWZalquosiDwvYkaO4wRBcF0XAOA4DoSQZdnvWfqwqw+7iqMtNenk32OerJaQMb06nDzsdY4oGaRKfpHHynd+Pf0PrE+tn19WFxyrswAAAABJRU5ErkJggg==");

},
715724(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAYAAABfJS4tAAAArklEQVQ4EWP49OnTf1pgBmyGXn/27v/j1x8oshDD4GvP3v33XnHzf8S62xiG3335nmjLMAwGuRRkqMX8ayiGgwwNXHXz/0cigw7DYFDQoBt+9tFbsKEgyygyGN1wkIEwTLHBIMNBLrVEMpQqLoaFKcylMBrk4ry8PDAGWY7MBvFhGGsY4zIU3cUgQ2EGodNYDUZXhIs/ajA8XIdOUCAnMWQ2ciRTlCqQDUJnDz2DAYjDtDh9naIZAAAAAElFTkSuQmCC");

},
594274(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAl0lEQVQ4EWP49OnTf2pjBmobCDJv1FA6R1Tkisz/MAyL0JS1xf/PPriIN8XgjSiYgSAaZiiIHbcq9/+eGwfhYjA5GE2WoSCDo1Zk/V96di1Wg8k2FOaLCYdm/X/34R2K4RQbCjK8blfX/+dvX8ANpoqhIIPb9k2krqFUdylVw5TqsU/1dEpxjoLlEFJpvEmKVMNg6mliKAAc59+NTm+QtwAAAABJRU5ErkJggg==");

},
137001(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAXCAYAAAAP6L+eAAAAXElEQVRIDWO4f//+f2rjT58+/WegtqEg80YNhscV3qDIy8v7D8OweIDxQTRMDBs9ajA8eEaDYjQoMEvHgUkV2LIqsWJ4XUysIdjUjRpMXAbBFnbEioHDGETQAgMAN1TVGS+2b7QAAAAASUVORK5CYII=");

},
155093(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913480-f62d21e8a6003a7ac881ffb52bfa7f15.png");

},
321026(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913488-dc4fbd378346a4a2f6bb4a084880994d.png");

},
331617(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913482-67c823f1863b545a97bd469c7f51697b.png");

},
282036(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833445-d01998551bb7a8080f734125e5d090c9.png");

},
956449(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAApElEQVRIDWNYsfHAf2pihk+fPv2nJh4CBt6/f/8/NTEDNQ0DmTUMDNxx4e7/XRfvEh3OeL2888Ld/w6Lrv13XHSNaENxGggzzGL+tf8gTKyhWA0EeRFkAMwwGE2MoRgG4jIMZqjT4mv/d+MJUwwD0dMlyCDL+deoEykgw0cNJBiWBCMFPZII8VEMzMvL+08KxmY4bQ3EZiOpYiguJFUzNvUj0EAAg80au099sC0AAAAASUVORK5CYII=");

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