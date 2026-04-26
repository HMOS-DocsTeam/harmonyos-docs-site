"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["324707"], {
656385(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_run_simulator_ide_run_simulator_md_577_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-run-simulator-ide-run-simulator-md-577.json
var site_docs_ide_run_simulator_ide_run_simulator_md_577_namespaceObject = JSON.parse('{"id":"ide-run-simulator/ide-run-simulator","title":"使用仿真器运行轻量级穿戴应用","description":"DevEco Studio提供的*Simulator*可以运行和调试Lite Wearable设备上的HarmonyOS应用，兼容签名与不签名两种类型的HAP。","source":"@site/docs/ide-run-simulator/ide-run-simulator.md","sourceDirName":"ide-run-simulator","slug":"/ide-run-simulator/","permalink":"/harmonyos-docs-site/ide-run-simulator/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"使用仿真器运行轻量级穿戴应用","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-run-simulator","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"使用本地真机运行应用","permalink":"/harmonyos-docs-site/ide-run-device/"},"next":{"title":"使用环境","permalink":"/harmonyos-docs-site/ide-run-emulator/ide-emulator-overview/ide-emulator-requirements/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-run-simulator/ide-run-simulator.md


const frontMatter = {
	title: '使用仿真器运行轻量级穿戴应用',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-run-simulator',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '使用仿真器运行轻量级穿戴应用';

const assets = {

};



const toc = [{
  "value": "操作步骤",
  "id": "操作步骤",
  "level": 2
}, {
  "value": "功能介绍",
  "id": "功能介绍",
  "level": 2
}, {
  "value": "屏幕",
  "id": "屏幕",
  "level": 3
}, {
  "value": "传感器",
  "id": "传感器",
  "level": 3
}, {
  "value": "电池",
  "id": "电池",
  "level": 3
}, {
  "value": "设备设置",
  "id": "设备设置",
  "level": 3
}, {
  "value": "调试",
  "id": "调试",
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
        id: "使用仿真器运行轻量级穿戴应用",
        children: "使用仿真器运行轻量级穿戴应用"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DevEco Studio提供的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Simulator"
        })
      }), "可以运行和调试Lite Wearable设备上的HarmonyOS应用，兼容签名与不签名两种类型的HAP。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "操作步骤",
      children: "操作步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在DevEco Studio右上角的设备框中选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Huawei Lite Wearable Simulator。"
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(206470)/* ["default"] */.A) + "",
            width: "386",
            height: "31"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Run"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(714015)/* ["default"] */.A) + "",
            width: "13",
            height: "13"
          }), "或", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Debug"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(413134)/* ["default"] */.A) + "",
            width: "16",
            height: "16"
          }), "按钮，在弹框中选择设备形状和分辨率，点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OK"
            })
          }), "按钮，开始运行或调试应用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(715956)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "443",
            height: "438"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DevEco Studio会启动编译构建和安装，完成后应用即可运行在Simulator上。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在Simulator界面中，点击设备上方的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "More"
        })
      }), "可展开更多功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(194999)/* ["default"] */.A) + "",
        width: "667",
        height: "639"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "屏幕",
      children: "屏幕"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "****Turn screen on：****控制屏幕开关。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Keep screen on：", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "控制屏幕是否保持常亮状态。关闭开关时，息屏计时结束后，屏幕自动关闭，同时"
              })
            }), "Turn screen on"]
          })
        }), "开关自动关闭。开启屏幕后，打开", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Keep screen on"
          })
        }), "开关才能使屏幕常亮。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["****Brightness adjustment mode：****调节屏幕亮度。\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "****Manual：****手动调节，可拖动滑动条，或直接输入亮度。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(91309)/* ["default"] */.A) + "",
                width: "393",
                height: "99"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "****Automatic：****自动调节。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["****Resolution：****运行/调试模式下暂不支持调整分辨率，如需调整，请停止运行后，按照", (0,jsx_runtime.jsx)(_components.a, {
          href: "#section1332819367496",
          children: "操作步骤"
        }), "选择分辨率。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "传感器",
      children: "传感器"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["仿真器提供了虚拟传感器来模拟硬件传感器的能力。在该界面，您可以调节不同的传感器来测试您的应用，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/sensor-service-api/sensor-service-arkts/js-apis-system-sensor/js-apis-system-sensor",
        children: "@system.sensor"
      }), "模块监听传感器值的变化，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/location-api/location-arkts/location-arkts-dep/js-apis-system-location/js-apis-system-location",
        children: "@system.geolocation"
      }), "模块监听地理位置的变化。仿真器提供以下虚拟传感器："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "On-body status"
          })
        }), "：传感器所在设备穿戴状态，包括已穿戴和未穿戴。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "****Barometer：****气压传感器用于测量环境气压，单位为Pa。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "****Heart rate：****心率传感器用于测量心率数值，拖动滑动条，或直接输入心率大小。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "****Step count：****计步传感器用于统计行走步数，拖动滑动条，或直接输入步数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "****Geographic location：****输入经度、纬度，模拟设备所处的地理位置。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(34093)/* ["default"] */.A) + "",
        width: "387",
        height: "496"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "电池",
      children: "电池"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["您可以通过仿真器模拟不同的电池状态，包括以下三种充电状态，也可以手动输入或拖动滑动条来改变电量大小。在应用中，您可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-arkts-dep/js-apis-system-battery/js-apis-system-battery",
        children: "@system.battery"
      }), "模块查询仿真器的剩余电量以及充电状态。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not charging：未充电。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Charging：正在充电。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wireless charging：无线充电。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(591837)/* ["default"] */.A) + "",
        width: "388",
        height: "267"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设备设置",
      children: "设备设置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "您可以更改设备的语言和地区，当前仅运行模式可以更改，调试模式暂不支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(312442)/* ["default"] */.A) + "",
        width: "385",
        height: "122"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调试",
      children: "调试"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Screen coordinate system"
            })
          }), "****：****开启屏幕坐标系后，将光标移动到表盘上时，会显示屏幕坐标。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(856668)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "763",
            height: "700"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Show device mask"
            })
          }), "****：****关闭开关后，表盘周围的表冠颜色淡化。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(26238)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "762",
            height: "696"
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
714015(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAIAAAD9iXMrAAABN0lEQVR4AVxQPU4CQRT+ZlyMNrraaWzcRCjkAsRKLqAXIOoB1LOIvSFojTeAjngAKBbY2YZopSiNFsuO39tZCPDyzcyb9/O9L08bExkeXjniaBSbuW8i+nE0Mtpa0F6Gr5PfKaDcl/cCAJSChpgNJ9FD/6n93p3ZhNFlSB5SZ9mqoGep7YzfHnvNwY/B3Jgi+NOulR5hkX7+fTXD1vOgRRmuQuJW+OisI/w29X6j8yEymCMX9Sl6ZAKsgnYAkKRJe9yt9xrDqchgHYMKCixdgCH6vDPIEmQv1KEyJlICbBHWgt6sHp3dnl6f7Bznc/mApngI2WfRD+7KV9XDSmHDc1k3Nx9Kqv1tv1a6qBUv97Z8aZIuviqvo+tpLx+0G/BLDbJYMmSQOuor+cF9+eb8oMJqKaKGVfwDAAD//1ETs9sAAAAGSURBVAMAvLqg4skM3jcAAAAASUVORK5CYII=");

},
91309(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
194999(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752812-8a4ec6565e07ad26297d7f126fc7479c.png");

},
26238(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752735-f617a4f7486f804292d6a7218433282c.gif");

},
413134(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACSklEQVR4ATRQX0hTURj/zmXQEB+CILGCEBJ8GFmDaCRk9IcUDHrI6iETH0IK6SEwSKiHKHrKCa6iNOdL1FNP2150BkOh7q4gEgXda9hmkxb33+bmuNvu8Xd29fC753zfd36/8/2+K9mWbZlAAUEDBctEDNhealu7FdBQkUgsho1zqtScSSW6ZvxBCmjG+qQygyJiIs6YoEHAmAhE0axYWftvZDn6S/+t6usRZTZr54xtS9xBwbEYBCKFBmhtPjgcHHDqTkSJAk69OtR5E0XBIAKBiHYF8APoZWtm5RMnXnPdqlvj5L5f+bhRzHlUsAEJPGAiPTWRnh6X3xoVYQBU3AGlajmSng3L02F5CjRURAc8oJfNf1t5c7uAEsBIggY7UHRKm8U8CKARLOGA9Nm5hwOBa8gZSWNnRl73Pn/T++JR1z3CrOT2tZ8HATFjXFiCJqbNf80t41UgtSHHtGRMm09lZZCA1fxPpAg4F3+JI4qrSWVzlTX+wVJGSagLqCxmhADFH/+1hPoFbPST8DwOdLwduE6NBSeveoSlsa4RNAT62i887R6FH5AxHKGFXjLrVCNiRAQn8TVYWkhlFaQAJ26UTXHJGh6IKKy8+/D9M1oBi5lvcXUuoSaXhCW8xmPqHAigcb4nGDzeP9jZfyNwxe/zey95u0/yXe3owRUIYEPjzUChw8HQoeDZI6HR0N0TLYEmX9M+yd9x4NiD03cut3XjCgQMIAT4MAR3cWIA1trcMnzy1suLT8YvPb5/aqht/1HOmQAInBijHQAAAP//5W4YBgAAAAZJREFUAwAybkJK+k84ZwAAAABJRU5ErkJggg==");

},
206470(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752733-5e320f2ad83901d6c9bf23e3ffb9e57c.png");

},
591837(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752798-0773d0d9fece3395b677fb8719cd412d.png");

},
856668(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752806-eae8ed5990c45b862d5f398374a74d2b.gif");

},
715956(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752739-814e3b828ca0f4800e6b33cb50c43a9a.png");

},
312442(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912800-d922495b6b3b1c054f7d3b85fc564823.png");

},
34093(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912796-9c433b772218218ee4c178e72e95da48.png");

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