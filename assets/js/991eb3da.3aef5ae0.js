"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["878968"], {
209711(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_debug_app_ide_arkui_inspector_ide_arkui_inspector_md_991_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-debug-app-ide-arkui-inspector-ide-arkui-inspector-md-991.json
var site_docs_ide_debug_app_ide_arkui_inspector_ide_arkui_inspector_md_991_namespaceObject = JSON.parse('{"id":"ide-debug-app/ide-arkui-inspector/ide-arkui-inspector","title":"布局分析","description":"开发者可以使用ArkUI Inspector，在DevEco Studio上查看应用在真机上的UI显示效果，并通过查看多次操作后的界面状态，快速分析定位UI界面存在的问题。","source":"@site/docs/ide-debug-app/ide-arkui-inspector/ide-arkui-inspector.md","sourceDirName":"ide-debug-app/ide-arkui-inspector","slug":"/ide-debug-app/ide-arkui-inspector/","permalink":"/harmonyos-docs-site/ide-debug-app/ide-arkui-inspector/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"布局分析","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-arkui-inspector","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"开发者选项","permalink":"/harmonyos-docs-site/ide-debug-app/ide-developer-mode/"},"next":{"title":"访问设备文件","permalink":"/harmonyos-docs-site/ide-debug-app/ide-device-file-explorer/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-debug-app/ide-arkui-inspector/ide-arkui-inspector.md


const frontMatter = {
	title: '布局分析',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-arkui-inspector',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '布局分析';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "使用约束",
  "id": "使用约束",
  "level": 2
}, {
  "value": "操作步骤",
  "id": "操作步骤",
  "level": 2
}, {
  "value": "显示组件信息",
  "id": "显示组件信息",
  "level": 2
}, {
  "value": "导入/导出UI界面快照",
  "id": "导入导出ui界面快照",
  "level": 2
}, {
  "value": "UI组件源码跳转",
  "id": "ui组件源码跳转",
  "level": 2
}, {
  "value": "显示布局边框",
  "id": "显示布局边框",
  "level": 2
}, {
  "value": "查看UI组件的状态变量",
  "id": "查看ui组件的状态变量",
  "level": 2
}, {
  "value": "查看窗口交互事件",
  "id": "查看窗口交互事件",
  "level": 2
}, {
  "value": "3D展开应用",
  "id": "3d展开应用",
  "level": 2
}, {
  "value": "使用场景",
  "id": "使用场景-1",
  "level": 3
}, {
  "value": "进入3D视图",
  "id": "进入3d视图",
  "level": 3
}, {
  "value": "基础操作",
  "id": "基础操作",
  "level": 3
}, {
  "value": "隐藏前方图层",
  "id": "隐藏前方图层",
  "level": 3
}, {
  "value": "隐藏后方图层",
  "id": "隐藏后方图层",
  "level": 3
}, {
  "value": "恢复隐藏图层",
  "id": "恢复隐藏图层",
  "level": 3
}, {
  "value": "切换图层排列顺序",
  "id": "切换图层排列顺序",
  "level": 3
}, {
  "value": "调节图层间距",
  "id": "调节图层间距",
  "level": 3
}, {
  "value": "显示/隐藏图层边框",
  "id": "显示隐藏图层边框",
  "level": 3
}, {
  "value": "放大/缩小视图",
  "id": "放大缩小视图",
  "level": 3
}, {
  "value": "自适应窗口",
  "id": "自适应窗口",
  "level": 3
}, {
  "value": "切换正面/侧面视图",
  "id": "切换正面侧面视图",
  "level": 3
}, {
  "value": "返回2D视图",
  "id": "返回2d视图",
  "level": 3
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
        id: "布局分析",
        children: "布局分析"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以使用ArkUI Inspector，在DevEco Studio上查看应用在真机上的UI显示效果，并通过查看多次操作后的界面状态，快速分析定位UI界面存在的问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI Inspector支持的功能包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#section1645813371383",
          children: "查看设备上应用的UI显示效果"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#section0442629153111",
          children: "导出及导入应用UI界面快照"
        }), "，脱离设备查看UI显示效果。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在组件树上选择组件，UI界面自动框选对应组件，属性列表显示当前组件的属性信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在UI界面点击选择组件，组件树对应组件变化为选中状态，属性列表显示当前组件的属性信息。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#section1226015494335",
          children: "UI组件源码跳转"
        }), "，选中UI组件后点击源码跳转按钮即可跳转至源码位置。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在UI界面上选择Show Component Border，可", (0,jsx_runtime.jsx)(_components.a, {
          href: "#section1137025915336",
          children: "查看当前页面上所有组件显示区域"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在组件树上选择自定义组件，属性列表显示当前组件配置的", (0,jsx_runtime.jsx)(_components.a, {
          href: "#section19923158103412",
          children: "状态变量信息以及影响组件"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#section516993011576",
          children: "查看窗口交互事件"
        }), "，包括触屏、鼠标、按键、滚轮、窗口焦点变化事件。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["按照组件粒度", (0,jsx_runtime.jsx)(_components.a, {
          href: "#section138812162416",
          children: "3D展开应用"
        }), "，方便查看组件之间的嵌套、遮挡关系。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对界面较复杂的应用："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过组件树查看组件的父子关系，检查是否存在冗余组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "针对应用在真机或模拟器上运行出现UI界面显示异常，尤其经过多次界面复杂操作后产生的界面错误以及后台逻辑错误，进行问题分析定位。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用约束",
      children: "使用约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅运行在前台的应用支持通过Inspector查看。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "已通过USB或WLAN连接设备。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅支持Stage工程。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅支持全屏应用或者焦点在前台的窗口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持应用市场上架的商用签名应用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "操作步骤",
      children: "操作步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在DevEco Studio下方点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ArkUI Inspector"
            })
          }), "，打开ArkUI Inspector。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(243000)/* ["default"] */.A) + "",
            width: "1864",
            height: "527"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击RUN", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(16001)/* ["default"] */.A) + "",
            width: "13",
            height: "17"
          }), "或者DEBUG", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(155698)/* ["default"] */.A) + "",
            width: "15",
            height: "17"
          }), "按钮，将应用推送安装到设备上，在设备的应用列表中选择当前显示在前台的UI进程。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(59685)/* ["default"] */.A) + "",
            width: "1875",
            height: "233"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ArkUI Inspector左侧为当前的组件树结构，中间栏显示当前设备的UI界面，右侧在选中组件的情况下为当前组件的属性信息。可以在左侧组件树上或在中间UI界面点击选择组件。当设备上UI发生变化时，可点击中间栏右上角", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(549523)/* ["default"] */.A) + "",
            width: "14",
            height: "15"
          }), "按钮同步设备上的UI效果。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(86138)/* ["default"] */.A) + "",
            width: "1875",
            height: "675"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在设备框，点击设备列表的最后一项", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stop inspector"
            })
          }), "，可断开与设备的连接。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(560409)/* ["default"] */.A) + "",
            width: "298",
            height: "66"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "显示组件信息",
      children: "显示组件信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(409426)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "26",
            height: "23"
          }), "，勾选", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Show Tree Statistics"
            })
          }), "，可显示组件树组件信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(68225)/* ["default"] */.A) + "",
            width: "1239",
            height: "678"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(359624)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "26",
            height: "23"
          }), "，勾选", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Show Hidden Components"
            })
          }), "，可显示隐藏的组件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(149280)/* ["default"] */.A) + "",
            width: "1232",
            height: "894"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(484286)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "26",
            height: "23"
          }), "，勾选", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Show Custom Components"
            })
          }), "，可过滤自定义组件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(642377)/* ["default"] */.A) + "",
            width: "1623",
            height: "533"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(503434)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "26",
            height: "23"
          }), "，勾选", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Show System Components"
            })
          }), "，可过滤系统组件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(541478)/* ["default"] */.A) + "",
            width: "1633",
            height: "558"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入导出ui界面快照",
      children: "导入/导出UI界面快照"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI Inspector支持导出及导入应用UI界面快照，脱离设备查看应用UI界面显示效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在中间栏点击", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(841613)/* ["default"] */.A) + "",
          width: "16",
          height: "16"
        }), "可以导入本地的应用UI界面快照。导入成功后将在DevEco Studio中打开该快照。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在中间栏点击", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(447786)/* ["default"] */.A) + "",
          width: "16",
          height: "16"
        }), "可以将应用UI界面快照导出到本地。导出成功后将默认在DevEco Studio中打开该快照。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(304780)/* ["default"] */.A) + "",
        width: "1292",
        height: "676"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ui组件源码跳转",
      children: "UI组件源码跳转"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Run > Edit Configurations"
            })
          }), "，勾选“", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Enable DebugLine"
            })
          }), "”，点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OK"
            })
          }), "保存后，重新运行工程，表示开启源码跳转功能。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(881020)/* ["default"] */.A) + "",
            width: "863",
            height: "398"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在ArkUI Inspector中，选中要进行源码跳转的UI组件，点击右侧的源码跳转，即可跳转到UI组件源码位置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(706059)/* ["default"] */.A) + "",
            width: "1878",
            height: "928"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "显示布局边框",
      children: "显示布局边框"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在UI显示设置上，勾选“", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Show Component Border"
        })
      }), "”，可显示当前页面所有组件的布局信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(721405)/* ["default"] */.A) + "",
        width: "1876",
        height: "628"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看ui组件的状态变量",
      children: "查看UI组件的状态变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击自定义组件，可以查看自定义组件的状态变量，以及状态变量影响的下一层组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(331377)/* ["default"] */.A) + "",
        width: "1883",
        height: "626"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看窗口交互事件",
      children: "查看窗口交互事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从DevEco Studio 6.1.0 Beta1版本开始，支持查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-capability-overview",
        children: "窗口交互事件"
      }), "，包括触屏、鼠标、按键、滚轮、窗口焦点变化事件，帮助开发者定位窗口发生失焦、获焦、重绘等问题。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "WindowEvents"
        })
      }), "页签，点击Start按钮", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(879926)/* ["default"] */.A) + "",
        width: "15",
        height: "17"
      }), "，开始上报事件消息，包括事件时间戳、窗口ID、事件类型、坐标等，支持按事件类型过滤。点击Stop按钮", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(376751)/* ["default"] */.A) + "",
        width: "16",
        height: "14"
      }), "，即可停止上报事件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(225688)/* ["default"] */.A) + "",
        width: "1505",
        height: "536"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3d展开应用",
      children: "3D展开应用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI Inspector支持将应用按照组件粒度进行3D展开，即UI界面能够在Z轴展开，方便查看组件之间的嵌套、遮挡关系。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该功能从DevEco Studio 6.0.0 Beta1版本开始支持，同时设备系统版本需要升级到API 20。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用场景-1",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击图层可以精准选中和查看被遮挡的组件，可用于定位组件是否被遮挡等问题。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3D视图展示的图层均是组件树上参与渲染的组件，可帮助开发者判断组件是否需要进行渲染，例如过长的列表、不可见区域是否需要渲染，帮助开发者优化渲染性能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于页面复杂、小组件较多的场景，在组件树或者2D视图中难以选中，通过3D视图增加图层之间的距离，能够有效地突出小组件，使其更易于选中。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "进入3d视图",
      children: "进入3D视图"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点击3D View按钮", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(123066)/* ["default"] */.A) + "",
        width: "16",
        height: "16"
      }), "，进入3D视图。首次进入3D视图会加载3D数据，请等待数据加载完成。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(748687)/* ["default"] */.A) + "",
        width: "1240",
        height: "625"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "基础操作",
      children: "基础操作"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "旋转视图：按住鼠标左键移动。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "平移视图：按住鼠标右键移动。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "放大/缩小视图：滚动鼠标滚轮。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "隐藏前方图层",
      children: "隐藏前方图层"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["选中图层后，图层会显示蓝色边框，点击Hide Views in Front按钮", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(508928)/* ["default"] */.A) + "",
        width: "16",
        height: "16"
      }), "，能够隐藏当前选中图层前方（朝向用户）的所有图层，避免不必要图层的干扰。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(826695)/* ["default"] */.A) + "",
        width: "1875",
        height: "598"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "隐藏后方图层",
      children: "隐藏后方图层"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["和隐藏前方图层类似，选中图层后，点击Hide Views Behind按钮", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(623114)/* ["default"] */.A) + "",
        width: "16",
        height: "16"
      }), "，能够隐藏当前选中图层后方的所有图层。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(46824)/* ["default"] */.A) + "",
        width: "1875",
        height: "598"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "恢复隐藏图层",
      children: "恢复隐藏图层"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点击Restore Hidden Views按钮", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(24129)/* ["default"] */.A) + "",
        width: "16",
        height: "16"
      }), "，能够恢复所有隐藏的前方图层和后方图层。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(902813)/* ["default"] */.A) + "",
        width: "1875",
        height: "598"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "切换图层排列顺序",
      children: "切换图层排列顺序"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图层有两种排列顺序，id顺序和层级顺序。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "id顺序：默认顺序，即渲染的顺序，也是组件真实显示的顺序，图层的遮挡关系和实际应用一致，每个图层显示在一个Z轴平面上，但如果图层数量较多，会导致Z轴过长，操作不方便。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "层级顺序：组件树上同一层级的组件，在3D视图中会显示在相同Z轴平面上，能够有效减少3D视图下Z轴长度。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["切换方式：点击Switch to Layer Order/Switch to Id Order按钮", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(461190)/* ["default"] */.A) + "",
        width: "22",
        height: "22"
      }), "，可以将图层的排列顺序分别切换至层级顺序/id顺序。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(884533)/* ["default"] */.A) + "",
        width: "1875",
        height: "598"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调节图层间距",
      children: "调节图层间距"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["鼠标悬浮在Adjust the Gap of Layers按钮", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(401234)/* ["default"] */.A) + "",
        width: "16",
        height: "16"
      }), "上，出现一个拖动条，拖动后可调节图层间的距离，范围是0~100px。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(917832)/* ["default"] */.A) + "",
        width: "1875",
        height: "598"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "显示隐藏图层边框",
      children: "显示/隐藏图层边框"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DevEco Studio默认给图层加了边框，此边框并非应用自身边框，便于查看透明图层。点击Hide Border按钮", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(972447)/* ["default"] */.A) + "",
        width: "16",
        height: "16"
      }), "或Show Border", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(786691)/* ["default"] */.A) + "",
        width: "16",
        height: "16"
      }), "可以隐藏或显示图层边框。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(49657)/* ["default"] */.A) + "",
        width: "1875",
        height: "598"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "放大缩小视图",
      children: "放大/缩小视图"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点击Zoom In按钮", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(212748)/* ["default"] */.A) + "",
        width: "20",
        height: "20"
      }), "或Zoom Out按钮", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(995443)/* ["default"] */.A) + "",
        width: "20",
        height: "20"
      }), "，能够放大或缩小3D视图。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(494186)/* ["default"] */.A) + "",
        width: "1875",
        height: "598"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自适应窗口",
      children: "自适应窗口"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点击Zoom to Fit Screen按钮", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(147864)/* ["default"] */.A) + "",
        width: "19",
        height: "18"
      }), "，能够自动根据窗口大小，调整3D图层的缩放比例，并使3D视图回到区域中间。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(11417)/* ["default"] */.A) + "",
        width: "1875",
        height: "598"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "切换正面侧面视图",
      children: "切换正面/侧面视图"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DevEco Studio默认展示侧面视图，经过复杂的旋转后，可点击Switch to Front View按钮", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(447875)/* ["default"] */.A) + "",
        width: "16",
        height: "16"
      }), "或Switch to Side View按钮", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(111887)/* ["default"] */.A) + "",
        width: "16",
        height: "16"
      }), "，将3D视图自动调整到预设的正面或侧面视角。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(100509)/* ["default"] */.A) + "",
        width: "1875",
        height: "598"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "返回2d视图",
      children: "返回2D视图"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点击2D View按钮", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(941043)/* ["default"] */.A) + "",
        width: "16",
        height: "16"
      }), "，可切换至2D视图。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(520567)/* ["default"] */.A) + "",
        width: "1875",
        height: "598"
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
560409(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASoAAABCCAYAAADg6pusAAAPDklEQVR4nO2dT2gbxxfHv+O4cQql0CRObIgpgriHQJpi52A5bQo59VikutQSFEqPvZXc7ObgWLeQW4+lJyuQILX3HxTTIsuB1AebltIYRLHABlMIiaEpKZrfYWd238zO6o8te1fS+xBFuzOzM29Gu9998/aPxerqqgTDMEyCGQaAqampuO1gGIZxsrGxgaG4jWAYhmnFcNwGHIXNzc24TWAYpgXvvvvukevoaaECgBs3bsRtAsMwEVQqla7Uw1M/hmEST897VK148eJF9ysVdFE4i0jZ4mKqyg+XEhCiAXj/zAZdTTUa8M43odKk7qjzkdn60JBX1jPNsszRZwkZ7r97OIJM0ayIqq1pHfDHzreS2Ett9xYFgAaEABoQQAMQ3n9kxChDGNJ1DOn6hgBIDPnrAmIIZIgERBOb3XnhcaNjKYQw00m+zrO/IUgNZFkCODXU2z5J3wtVS8GIq91IoZLetpLmSUQUVvU04ChNcB+SoVKN9ssqS9su21U6EioJb0yVvca3i0YwAtZCo2EUSxgCQv8iQkDI2H6dY6HvharRaMA8e0k4T9kCaqfWZydpFSfbSOq1tBYkZ4lIoVKpkQeSqx4RWZNHKxdFlWrmzgSnaghDFKVZxmWGPvO7+kW9AF2bVaWNn00FS49nSKharIeNpV01FgQdA2Ft49qlVKL7nBXsRAIApJIZEUiO01sX3iDrX6G9X7b36XuhCns2TQ5oo2wTL6YzAzoUKunYsVvZIp1rIiI/wNzN9UHeVLASQGdC1UzA3LVL3X+pxcmTBCmJWCVNJfRJgnpTzeajPUbfC1VDuf4GUoZ3MmkthDRLhvyyjnAJllPEDiNUztJtHEfuEk6h8mMkDpvDQTG6EYRLlLWXFSHkvjdCEy2FoULkLZKpHU3zi7UjVLo/YS8qWLdjaaZHJVTByOm/jtN5aqK+lAclobx5+7cRXhm9jR5XMRieVd8LlXNniWPy3pZQuaZ84TlgU/P9/gqjXETI333WTeqe36lQ6eVQWlBPeCyF0gniRSFYT+zY2CjPql/whWpxcREAsLy8bKy3QpdPKrIREfXs5DdUp097k9YXpxz+kp3mECuzSHOhCnl5RKhomcjuCrOcPltTI4QQIU/FuAooI2J+tvD6saqgfmld7fL7ovIjY1TaPjp+epmkucXLr8UtVH7DxF7tSQnPaOEPqoAQwW8mHOMXutIplX+uxsiPUQkSe6KC6DlTZBu9N/aCYnaHwfSoYmy720IVSu+js2gURxcqS6Qs5Y+cfSWUQDNVfMq+6tcHsSpfqGzPKOmeUrvIkIcR9jj8KZDLVXHuza2vs6nGQ1uaQuUWJWmth1sP6o+2wZoiUe8gZKMgsxqp3ZwmCJA5kWmdK14lyDYd0GyMZZRQqemhIVj+N50K+hv5RnsCpT09z15vt9CBdQkpBflWbckgRiW1h0QHULVn6kUwzk5NJB6bt27GSFv/Rv3FAHpUrl2/iRocxUE5AaGKj3g9t+4Klb2UZITx5acSgfW9KpXX7qxiZ2cHP/74Y1tlJycn8dFHH7VVthv0v1CBni+pPxWegoU2NCoRoexmJzSXQJoaJWkWyOQETsGybYpsOMq6sGgGV6t0YyryIYJ1+PEWegYn9gipWhPhLMO7krpJ0+eQZs+BiCt+ftOW0JM0qVNssTLW2xAr6k15ASfQ/4O4lL4SKJWDKYjjqPxYEusyTNfxKT3uQkKQOBXt40m5Tn///Te2t7fbKnvhwoVjtsbkRILp7dbVSZ1tozxsug5YaW1gXEFRkVSHk08OFJpoHYquuIpzPVyXXTYaW5JsS5W15ADTB0WgS97gSf+gckw3VFnnjRakvKlxRDQdwXQq8s5guiHydjzKEiRQYaICRf43BESJFElW8XNA+tmGfVIv+QJPq3JMYFVRr2lvRaj9VEgRjKXQFyqC2z/1XkflyxdXwIxRdRibeu+993Dz5k38/PPPTctNTk7i448/7qjuo9LbDwAxDNNVstksrl27Fpl/8eJFfPbZZxgZGTlBq04omN4vgXmGSRLHNSnM5XJ4/vw5arWakX7mzBnMz8/j/Pnzx9Bqc9ijYhjG4MyZM8jlcjh79qyRns/nkUqlYrGp/4VKhUn8j1Af2B9BvgWEMD8gH7O83RzZxk+0HloVZFsh/LpoWT+mRI21bRZhO0P9iLQUpG/mYAkdN1J5uk9mOV3WasmwB+6WyQ8R9ZocXcyZbsVehPEd3LAZpAf9CNKD/wUdVP1FguDGsm3VycS5T5wLFy4gn8/j1KlTAIBPPvmkK2/qPCx9f2e6K9zt3LuEXc5VT4ttrOC2UJFXHWz1YvD0gVFJzFEHmFThUj+YTdoQQQ9Cdvn1hq0Nj4HVDVNFreNTkBxhVWPaFd1A5Er3obFrP6gMM1it7kmSUhibmStCV4HQCPapONlcvnwZn3/+OQAv0B4nfX97gvBPl0aqo2CLeiIT491r22n9+ISqTSOaCFUnm2pNt1+B0vVYTTOh8r1ML8V0nF1ea7C93YawVoSuj3jHvudJPFgQrxW+L2vV26UBiVugNH1/Z3qw81gHI6JXnfVEJh5ljyAvO/OT6OMPaq+zPTVnVdoj0/+1Z1fo4KLP45F1Z9lIYzotoy+9Ky8yYgPtcVLBtC/TN/eJpfrylu2HEWyDo96c4F4mW0fcFhBONkUv8KyjPNUBceUcDIhHBSRTqI4B/0Bsr2z4VcLxCVVQNO4xjU+oaDzQ95icsUhvO0EWbM/Y8Nh6nP4XKvWu6OCse4hDIUKQwvudUG0g8IL8RxnUHdLk0QZYjzo0S+uIdov7Z3ArURjZMHrqEjeryGFp65fRrpdeFXSo1TugfO8yGEspg+li6N1UEZbo+g3rDiFQ5jTPasMhVFqkgmX4wuQwcSDof6GyPQSd3lEl7i0Sua8IAA3raI5iCIBMjlAlh6QJVXBFNYhPwUzTvwr9fTq8Mz3J9L1QnbPuBWEYpvfo//uoGIbpeVioGIZJPCxUDMMknp6PUXXrb9szDJNcelqo3n//RtwmMD3E8+cv4jaBOSQ9LVQM0wmbm5txmzCwHPWB5mEAoffO9A5e5wfgD68wR0DfTnTjBnvgcVCpVI6sMcMAYnvHTCe89tprcZvAMMwheeeddw697ePHj/mqH8MwyYeFimGYxMNCxTBM4mGhYhgm8QykUL169SpuExiG6YCBE6p6vY4nT54YYrW/v3/IyorIWi80K6zTAlUURBbF+pFMjqR6V0DcrR5P5V3hePvPDA4DJVT1eh1bW1t49uyZL1Z//fUXnjx50rlY1YvITpSQ3ZGQUn12VrCRFsg+2DueDlikv5GQ36RPpC2GiZOBEaqtrS28fPkSV65cAQA8e/YM6+vr2N7exvnz5zv+o4p7v5RQnsvi1iWSeCmHb4sZlH/4CXuooiBmsYgy8hPU06qiQDwwKmp7D7IQd6uep+T00EyoR1W9K5B9UDTqptvuPcgSz496OcrrWSfe4adFmFJr2hzy4izP0utTRP/XCxF2eH0oPNB1ZZv/AMxAMRBCVa/XUa/X8fTpU7x69coXq4ODA5w+fRrXrl2LfjtjBGOpKeBRHt9ZQjI2X4J8mMMY0liQa1hGBis7EgszgD54N4q7ygtbw1Ru3PTA7szi3uVdw0NrJlaUcq6ElPLwdosZLKYLqALAegHjuSmsac+vOoX8hMrztkQ+XcNtlb92NY9xX6w8m1HVnuMuVrZmic1VFCbymPLzvT4V1h39Xy9ApDewskPtMMVqMaftKHX0ezD9zTAQ3zNQw8PDGB8fx1tvvXVsbejp3tmzZzEyMoKnT59icnISV65cwe+//46DgwP8+uuvuH79emd3v88sYLe4gfG0gP8XEOdWsPswh7GITfYe3MPi3Ap253WJNBaqyxDp71CdX0BK1fGtzr+Uw+2lPGb/V8XCTBtTvKXbyCkPb+yDLDIooVYHQlvOLIQeO1quLvjl0l+sIDNRwk/1HG79cg+LS2uQM7rkGHL3V1CaUDbrPvn5aSw4n2naQ/H+IjLFXd9GzCxgbUlg9vsqcnoKu3QrbC8z8AwD8T0DdXBwgN9+++3YhIqK1PT0NDY3N3H69OmQWOmYVadiNTZfgpz3lqt3BWbv5DEu8sgUd1GaD8tVbbsMXL1tCtmlFDIgz0FdTRn5qcsZ4Ica9pCOFMCWzHyJlblxzAr1R2ar2sPTZJAyprApTKGMWl3ZfKcMcceudBm3o/rkpIbaI2Dqa7Nk6nIG2D5En5iBItap3xtvvIH//vvv2OofGRkxROrff//FzZs38eabb4amgSMjI0d6njD9jZ7OLKOc+w7JuhY3htxDNa1bAhbT4fhQU5bWggsG/meBPR/mxOjrGNXo6KghUtevX8fOzg5evHiBc+fOGWI1NTXVQc17KH4acXXvUgoZbKDmEIHU5QywVTMD1fUaynTdyvc8ltThvSkLT1B3sTJXRukX3VLZtLdew4byspw2E1rlk5JIzQEbNbNkbbscUZ5hAvpaqAAvDjYxMeGL1J9//onp6WmMjo4CAPb29vD22293WOsYcl8vo5wbDwW6q9/nUSaxImOr+dtYfpTHVzQQnV5Epvhl4J3QAH29iHt3Mlj54oi+y3oBQpDgef0nlB5lkP0gkL/F+8GVPtqHsM3qCqIKtuv84KJClIjrMfsq8OTWC5jtRv+YvmcgXpw3OjqK/f19X6QODg7wxx9/4OLFix16UoSZBcidFLIT5l+5yxR3IUmw/NZSGbMTAqXiLkrz3pWwghiHyAXljXjW3DJwX0A88laXq9Ipep3aurYk/BiVq97lqzWM6yufcyvYfeiH1rGws4LsRGCzedFA55NxWFpTYzBm9X8BslqAmBDIe73Hyk7p6P1j+h6xuroqP/zww9gMqFQqbb39zxU/ev31MwDaf3He/v5+d0TqmNh7kMX4D9mmVw67T3D7gRlg7x+0/vILFuOhUqlgenr60Ns/fvx4MDwqjZ7uJVGkGIaJZqCECvDESgsWwzC9wcAJVZKh92WdHFE3aDJMcuj7q34Mw/Q+LFQMwySevpj6dfg8McMwPUZfCBXDtEOlUonbBOaQ9LRQ/fPPy7hNYHqKw9/Lw8QLx6gYhkk8LFQMwyQeFiqGYRIPCxXDMIlHrK6u8m3JDMMkmv8D6uXSBiFV/BEAAAAASUVORK5CYII=");

},
706059(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752772-054e1c00cafdac5ce4c5302c929edf88.png");

},
111887(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAASNJREFUOI3NkjFSwkAUhr9ElnFkEgspKPUGHCGdpUeAAwQlvUOWOGNjkyIX8AjeIJ7AK2hpx5Bmh+g+CxI1QEap9C/fe/+3b3d/+Gs5bY1wqgN4j8EJgHmWJvpHwNoEayOA8whuDjYA4l2gT8BlpJ+s2CFIDgfzLNX59lYzXYHuszQZA3TqphU7dFzXiLUB2Bcg/zLqAOwYuKhKI6AJAOif9A+LYokxZjSJ4nMReRU4Bnsq8OzAQ5Ym43A6k9rTAAB4no/n+RTFcmCMGTjrdc8252q5bQ3P8wGo77o34LdqAMpytTfg+xvMF4tF3FVqddTrdZXqNgarnwio8lDXt5I4ieIbEblWSr2VZdmphuP6kNYgbSqc6luwV8AduPmuYP0PfQBAC2vf1cVM8wAAAABJRU5ErkJggg==");

},
212748(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4AeyS0QnEIBBEl1QilmIp2opt2IqlaA82cOcEXEJOmBzxLwkO0Z3xCatba+2zUpss/igw5ywppV1XzqZAQGqtAmHOdAnIIEf/yUDc5kzHy5j5qJVStI3aQ2yEeRbqI332xnr4+CsQixVSYAhBYow/cs7pOTMfNWutZhSolZuTF3izgX077aExRrz3u3qeDgrEkxiitB6gwJ75a3wBAAD//5/ibgsAAAAGSURBVAMA1RyszVWzNTkAAAAASUVORK5CYII=");

},
721405(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752695-b99344a154022020e24f2a085a1f312f.png");

},
748687(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752747-7baceab46b9a8fe7f43b4282368ebfd6.png");

},
484286(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAXCAYAAAAV1F8QAAAAkklEQVRIDeWVQQpAIQhEO7FX6Spdpat0AaPFA/luDKTgt5ApaxqVgcoYQ09EOSGyNB4Qaq0pwVjZ7yBc0I2u1qoiogu5RG7lI2G5vHFPiAqy0XWULcB794R670pQDfsdhAu6jnCYdQ65iOO+jr0vZMdDNTYXXcMF3eg4yMYHhHDYf1xnvwIMYXPRNVzwATPQajZOKsZDryKtVbAAAAAASUVORK5CYII=");

},
68225(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912764-f84e1d24085361fd9024ddbcc2612084.png");

},
123066(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAANFJREFUOI2tk0sOhCAQRB/j3Gv0Piy4wCh4AhbcRz2YMgsgaVETE6dWBLqqqz/AQ6hy0Ka3wAAQ/KjOgrXpYz664EcrH2wWuIVDvFAWd7bV5jtp08cz8cJ5n6mnUtYZGgfbIgh764ge7J28uuDtXDuCbYJ9jw4OAAfbpE3vstgM6wBbm95SowteNTv40YoMQyI3LvhR1fZPBaRQyqiWupxbAndxELjahzLW+l5lUix1i410ED8itEWMsXAOU8gBedNUC3FOTbTdZR1PVvk/n+kJflWceM0uByjwAAAAAElFTkSuQmCC");

},
623114(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAIZJREFUOI1jYBhowAhjXL56u4GBgaEeh7pGXW3VBrwmXb56+z85cixYFGN1CdQQ3C6B2UKqS5DD4L+utiojjM4pqMPqEihonDKhCdUl6C7IKajD6RJkOSZciogFyAY04vM/QQN0tVUbdLVVGfEpJuQCslyCYQCpLsFISMguwRMTjcRaQHsAANM6Ri510HdgAAAAAElFTkSuQmCC");

},
243000(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832709-2e575ba85bf60c23da0be9009b16fee6.png");

},
917832(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912812-4f4af773768e7b150e0811cb619cd3cd.png");

},
786691(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAGJJREFUOI1jYBhowAhj5BTUNTAwMNQTqa9xyoSmBhSRnIK6/+iqcgoaHHIKGhwwxRFqmYi0EScYeANYkDmY/v1bDxVH0/aPei5Asn00FhgYGBoxwwES2jkFdej6Gim1mHoAAPHUIBHctxVuAAAAAElFTkSuQmCC");

},
841613(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACMSURBVDiNY2CgEDBC6QME1C2AYgzABKXtGRgYFChxyX8GBoYGcjQyEVbCwMCAx3XEGFDMwMCQQa4BxQwMDD1EWII1DIqh4vgwJz4XiBJjMz4XMDAwMLRA5TpwaWQhYHANIXWEDIAZoolLkth0cB2XBCwv/GdgYHjIwMDwAIe6BQw48gLMCweJdAn1AQBUGRpCX2aH6QAAAABJRU5ErkJggg==");

},
995443(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAW0lEQVR4AeyQwQnAQAgE5UqxNVuxLkvRHmwg8bUFqI9A7riFRXCQOZn5bObQ8rvAudA/OzQz6sbdIR8OI6INBK0KgNVXPoAiQqraCjPjGAAxGZYLHAqs9e87fAEAAP//yD0ZRQAAAAZJREFUAwBatKnNSpVryQAAAABJRU5ErkJggg==");

},
16001(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAARCAYAAAAG/yacAAAAnUlEQVQ4jWP89OnTfwYSAROpGgZI09QzCxjefHtHlCYWGOPSq+sM19/eYXBXsmfwUHJgYGVmJc55v//+Zthyew9Dw+E+hsuvrhOnCQbefHvHMOXMApxOZsGiBw5wOZlg6GFzMllBjtd5DAwMDKzMrBjOw6tJT0yTIVzLj0GES4iwTSJcQgwRWn4MumKahJ2HzSl4NeFyCjbASE5+AgBS2T3R4LRPxwAAAABJRU5ErkJggg==");

},
826695(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832683-6818ac1586960764e6a95a38e5a8841e.png");

},
494186(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912736-bcfb2d7506ed7d408e8bf5aaba3da491.png");

},
508928(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAIpJREFUOI1jYBhowAhj5BTUNTAwMNTjUNc4ZUJTA16Tcgrq/pMjx4IucPnqbawuSU+N/c/AwNCoq62K4hIMAxgYGOp1tVUZsYgzXL56+z8DAwNBA/C6BGoI3CU4DSDWJUx4DCAKIBvQiC+0iQZQ58FpfGrQXQB3CT7NJLuEkBy+WMDnkkZyHUZ9AABl+UBhG8VI+QAAAABJRU5ErkJggg==");

},
642377(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752804-2f6016d7ab6b2e2a519766351d5505a7.png");

},
24129(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAHFJREFUOI3FkkEKwCAMBNfS53rwBWp8QQ75b3upUFBjagvdk+gyDInA33H14EPMANKgR8IlqyQf4rHytnfKXZML0pg0AABJuLjOfYVMAY9MhgCryaYATLkDSJv2FCBc8kjZavDKpIn1Y2lb0ExoVez7nP95NA5240meAAAAAElFTkSuQmCC");

},
881020(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752751-715c05584fc7386f7b2c15e439666d31.png");

},
86138(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832725-ea19b34dc600e5401a6724631e1a60ff.png");

},
331377(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752816-6aafd22b7c01228eaea80e9e5e7d223f.png");

},
972447(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAGJJREFUOI1jYBg0IKeg7j+xNIxNsWUEBXMK6hpyCuoa8BnGBGNMmdDESI4LmLAJEgLIlmHYiurk//ZQZQeRNDfkFNT9hxlCsQvwAlyBSNUwoDgW8AsSAZiQOaQkZ3Isow0AAKOUTV+fZSnlAAAAAElFTkSuQmCC");

},
461190(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAoElEQVR4AeyTsQmAQAxFg3tY6FLWgiNYWVhYWDmCYO1SWrjBLaD+gGL3E1GwUHxw3P28C4GLQgjrG0Syf1XdCWOP6c9yOEdQxVg8zS8+J/qdUaRJLAy07e64yDNh3BKjyIK7YzwABi52i1FkQcVtUwrDIrtmVHzdeGqt4n4YheG9UMXTvAjjlthbZMlrx5agN/OLz4npKNjjwPlRgTUD2Q0AAP//esRdhQAAAAZJREFUAwANQ9t7k880SgAAAABJRU5ErkJggg==");

},
49657(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752766-268065b099b9d07afeb53acdad5ac09a.png");

},
401234(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAJxJREFUOI1jYKAW+P//PyM5aplhjLcf//86deJgMzEGIKtlQhJnJdYFyGqZ8KkiBmA1IKegrgFTrMGBKAOgmusxlf7bj81geGjmFNT9Z2BgaETS3IimFlm8fsqEJkasLkAC//HIYQKoCxhyCuoaYGx0eZgXkOUxXDBlQlMDAwOTIxY7GiFyBFxAimuxuoBUgGzAbxL0YaolNzNRDAAg30OmIA155gAAAABJRU5ErkJggg==");

},
902813(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912760-f66fc7963123799211bf74856a901ba8.png");

},
225688(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752757-6dece37c6cc77a8bc4c36d953edc4e9c.png");

},
409426(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAXCAYAAAAV1F8QAAAAkklEQVRIDeWVQQpAIQhEO7FX6Spdpat0AaPFA/luDKTgt5ApaxqVgcoYQ09EOSGyNB4Qaq0pwVjZ7yBc0I2u1qoiogu5RG7lI2G5vHFPiAqy0XWULcB794R670pQDfsdhAu6jnCYdQ65iOO+jr0vZMdDNTYXXcMF3eg4yMYHhHDYf1xnvwIMYXPRNVzwATPQajZOKsZDryKtVbAAAAAASUVORK5CYII=");

},
100509(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912786-70ed497e1e7b089fdbdf2fb47466fc88.png");

},
520567(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752792-589607a129f3ad6f414dddfd097a0926.png");

},
149280(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752679-d612a240d9fa33395e87f5f4c4d14aec.png");

},
549523(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAYAAADUFP50AAABOElEQVQ4jZ2SrbLCMBBGDwwisnVFRhZHZCWyEhvJI2CReQyQWBx5BGSQkZGtK1MVxxVMw08RdzhyJ2dn98tO+r6/8wPTXySAGUDTNMzncwCcc1yvV0IICCGQUrJYLFgul2/ipO/7uzEGrTXWWpqmASDLMgButxsAUkq01gghnuJut0udyrKkrmvyPAeg6zqstXjvkVKy2Wy+77harZIEkOc5WmvKsiSEgHPuu3g4HNK4r9R1DYD3/jlqCOHtkRAihfXJEORsKGRZ9jbiwGfTgRnA+XymbVu22+1I7rqO0+n0VjPGPHZUSgFgrR11VkqxXq9H9SlAVVUURYH3nuPxSIwxPYgxpkBemQy3GmNkv9/Tti3w+AYhREq4KAqUUlhrMcY8xYHL5YJzLjUYhKqqgMdJKqXG4n/5A4hBkWgtxMGlAAAAAElFTkSuQmCC");

},
46824(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912742-e8ad6e696157e877e6a5c3100accb10b.png");

},
376751(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAIAAACpTQvdAAABSUlEQVR4AXySP0/DMBDF7aAO/KnahZYVJPgYMHVqMyOiLDDxCWCEjkjMiK0LCjDTTJ3ga1SClcJAWxAMoJjf5VyLLlgvz++e785WdNFkfo3HPg7Cx7MtMsY4Zz4HD697h8+ddBSno3YiiFNCgOboa3BPJpACto/eTb171Ly7EuRZM8/W+qXGybNa9/i9d0tfEPFRUEynla0Naw0gVKABurK5TgIaRHxY1hWwghYB6vxleZLW/JNEgXYkxz9JLAvJk6gPEMuIacqFLzeUWoiYjTYAARAKtEIKxLJylQinvmdtQeBmCVIQXEQASQFiukLYGikw80vvUdYTtArY/9aF6srP8JFYz2iGVkZ8D59src4R8E9fPkjeTs+ZAhmNuJwO5Xby0kkmJ2fV/V0qgX/SUmu7kV0wETIa5TjIaORZoy9Yvb5cbO3ohb8AAAD//2eb9zwAAAAGSURBVAMA5UPNP+0tbcMAAAAASUVORK5CYII=");

},
541478(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752760-b633e32ba23a2b3f2f8085e5a7ad6c85.png");

},
447786(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACTSURBVDiNrdO9DcJADIbhJxENW2QTVqGlo4MSOlZIl5YtYAooYZKjuUiB/Cl3vJJlyWd/+s6SyaSI+TbT18ToUca8QZXjJOCUMljOt3xR5QpscckRgENXZDXRGGZE4JjioGWNYkqgGIhzfKuxR0hxUGMnfnFqB0Nc8dTZz1KBx2+hvYWAN14jg42RW2gd3Bc6+R8fA7kUpQnSRdkAAAAASUVORK5CYII=");

},
879926(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAARCAIAAACNaGH2AAABMklEQVR4AZSOS0vDQBSFO0kaElTSKFKTRWpqFlIEEWpxVckft9SVjy5EpLiwieki8YFN44OEPGa80CGEPlJ6OQx37vnOnWG+NymmsklROkzCh4/HG/c+SqOSOKVHgf32+x5EQW98/eJbqwKU5hkeE5yRjBBiTe3euO/+eIsZSheNFKdhEg2/nm/dgR9Ni9YSembHWTyJJnfe4OlzmOBkNlxJgw2/ynDm/XlXTt8OHJiU0WCDkiyFzMi3XgNnPQ0BECEYzvU0x3Iswxq7xqHUKKMRQixi1S3F1Lq61CjbzbO8LMgdtX2y34IeUNCS3RzDiVWhtXd8oZ7LQg2gXJSOcYwq8C6DEGrWdFO7VHeUHMobSh9J+sF2XRZlU+sacjO35xpKi1XxrH7aUdoCJ8wRxes/AAAA//8fOAwEAAAABklEQVQDAHknlq0SKybUAAAAAElFTkSuQmCC");

},
11417(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912790-9ed076706ab062458f21bac934f9f9d4.png");

},
147864(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAACb0lEQVR4AZRU+1MSURT+WJBFHF+Z+UJBsNTGt/hLyn9fZCUFCKbNZAFiGsZjeYPsdr/LsLOFOOMO396z95zz3cc5H0qlUjEegqZpRip9ZURjSSP8/kSCdlrM0fdQjoL/HsMwkEpn8TZ8gkTiArVaHfV6AzUBjvHEufBFkM5cg7HW9H/Imq0WPkXiyF7f4mXAh9DRAbY21zA6OoIxgc2NVYQOD7DiX0Im8wufo0m02/cmn0nW6XQQjZ1B1w0E9zYxN/cCimK6zQS73Y75+Rns722gUW8iFv8qcnTpN6O/X6bRaraxs7UOp3NIOh97uVwqdrbXUalW5ZEZK8mazRausjdYfeUHg+iwwu0eBmGdoz0y4kbA78XPVBadjg5JdneXh6o6MT39jDF98Hk9IPocYoJHZiEKhWKXrKiVMTkxBpvNJtxP+9kVReYWSlqXrN1qy9Jf/sigh1wuP5CVvl4cR1aUbSOPabPZ0Gy0UCiWTJQrlYFkmvBZY9lSMNDdmaqqGB8fxf7uhgn/8hIGPQHhs8YyVxV3LnfGj0Kh1NfRg8is87quI58vYmJ8rLuz51OTuBdNmxNVtQb27JvbHIjet3X8nfsjmtbA1NREl2xoyAHPwizYuFzJGkybKxO0raBqmONdWoDD4eiSMcC/vCjlc5q8EA3Y4dSjIFHs9Byq0wmfd0HGyjujRc1RHpQUxV4uD65msajh+GMUrOC2kF9PwyYZCbkKBTw7My3+Ec5w/OELEslvKJer0ATiYifvwhFw997FeezuvAaviLmEwpcVXIXSCR0GsbLik1p1DatwD7tALa6vBXD0JgiPZ65PMX8BAAD///kPhIQAAAAGSURBVAMAX/NdLzZKp1MAAAAASUVORK5CYII=");

},
503434(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAXCAYAAAAV1F8QAAAAkklEQVRIDeWVQQpAIQhEO7FX6Spdpat0AaPFA/luDKTgt5ApaxqVgcoYQ09EOSGyNB4Qaq0pwVjZ7yBc0I2u1qoiogu5RG7lI2G5vHFPiAqy0XWULcB794R670pQDfsdhAu6jnCYdQ65iOO+jr0vZMdDNTYXXcMF3eg4yMYHhHDYf1xnvwIMYXPRNVzwATPQajZOKsZDryKtVbAAAAAASUVORK5CYII=");

},
884533(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832671-fe7e371b703001c962e394c81cc5cbae.png");

},
304780(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832675-c23631cbbb80c3de38b21031fb257cb4.png");

},
447875(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAARVJREFUOI3NkjFOw0AQRd9ubCwFaQvAFOk4AUfw3oEDxAcwkhtKHNsnsBT3wC3o4twE2rhCwikIWVMkxEnsiIgGppzZ93ak+fDXJQ4NgjDWsByB0ECSZ2n8o2AFwQoEEFOQBRgNjLpEooGjAvCgLqCX5FlctLeK4rXoKc9SH8DamnsCXmqEBvMKFA0YazA+cLNuDYGWgHGWXgVh9AgMb8PIq+ENhAtm0JPy07JPLKUUZTnbMHJ/zTxL/TxLRQ1T4NpxnIHrXnJ2fmEppfaftwXbIoAu6CjBsbUjaM74O0ECZhKE95Mu0WLxQVW9z8tyhm3ZD9/9VhKbW9cFCN3vnzKfV5tPDgapSySlvBMwXhqeu4L1P+oL/R5dW5g8onoAAAAASUVORK5CYII=");

},
155698(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAARCAYAAAACCvahAAABk0lEQVQ4jaWSPWgTcRjGf/kgNUgSQxyKSgotyaCDg2AVhE5xEBqcHJwcxG4tuDg4OxTE4Vza4iEudSgURFDErRQk3FAIgvkwVg6ibdK7JJc04S53ly72QsiZSHzG9/88/J73z+vRNK3HhPJOGnQN65aBIIkU1X1nVlT3ESQR3TJGh9VOHblRRpBE8kqJgvoDQRKRG2XUTn3A63Hb+XvtJ8+/rOH3+gDo2iYr1x9y+XxiPFnce0uPHl3bpGubALza20TWfrmTX2Q2AKi2laF6pwoFznIhNA3A4/lH+E8fjtoqpm3S0JuuQYCmcUy5ecCULzC889dqjpfSawCe3lomHr4IgKyVebYrAHD/yl0WZm4C9Mnvi585bFUdyo6cITIVAhhok618QzNaLCZSffLShyd/reum9Tur/bDSqZFXSrzJbo2snU6kuHHpGrFgdPDDLNsaW7v3xxsLRv+vtkN+cPUeALqps537OHTHPo+XdPI2kTNhZ+Z6nr9bFd4VPpFXSli2zVw0zmIyxey5mQGfa/hfdQJ+xs7IB+yKxAAAAABJRU5ErkJggg==");

},
359624(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAXCAYAAAAV1F8QAAAAkklEQVRIDeWVQQpAIQhEO7FX6Spdpat0AaPFA/luDKTgt5ApaxqVgcoYQ09EOSGyNB4Qaq0pwVjZ7yBc0I2u1qoiogu5RG7lI2G5vHFPiAqy0XWULcB794R670pQDfsdhAu6jnCYdQ65iOO+jr0vZMdDNTYXXcMF3eg4yMYHhHDYf1xnvwIMYXPRNVzwATPQajZOKsZDryKtVbAAAAAASUVORK5CYII=");

},
59685(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832715-b4417c08546a444df9a0bf3028faf977.png");

},
941043(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAJlJREFUOI3tk80RgyAQhT9I+tKCOFCBoBV4oCAsTMkh7IgJzCThmnfagffDzi7QCSWFsZMHHEBYF1UjGzulXM5hXXx54bPBRyj5Spwl1Vg/wjG2xJIsGv3qDLtrZ6fhGXDinl2LntV26e8t4BiBKBpdI36Dv0GewrkHOsLu2kuVBlBbqbm8IKw+CqGO21wdcfcqyyG/fqYePADki1IQhYW45QAAAABJRU5ErkJggg==");

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