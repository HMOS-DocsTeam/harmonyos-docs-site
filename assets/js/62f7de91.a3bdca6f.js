"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["357730"], {
595294(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_debug_app_ide_developer_mode_ide_developer_mode_md_62f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-debug-app-ide-developer-mode-ide-developer-mode-md-62f.json
var site_docs_ide_debug_app_ide_developer_mode_ide_developer_mode_md_62f_namespaceObject = JSON.parse('{"id":"ide-debug-app/ide-developer-mode/ide-developer-mode","title":"开发者选项","description":"HarmonyOS系统上的“设置”包含开发者选项的界面，用于辅助HarmonyOS应用程序开发、测试及优化，面向开发人员提供商业发行版之外的功能（如API能力），提供更多的调试选项及能力；您可在该界面中通过配置选项来帮助您分析和调试应用，例如，您可以通过启用USB/无线调试进行应用调试、开启DFX稳定性相关选项获取更多应用的故障及性能信息、开启过度绘制等选项快速发现性能问题等等。","source":"@site/docs/ide-debug-app/ide-developer-mode/ide-developer-mode.md","sourceDirName":"ide-debug-app/ide-developer-mode","slug":"/ide-debug-app/ide-developer-mode/","permalink":"/harmonyos-docs-site/ide-debug-app/ide-developer-mode/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"开发者选项","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-developer-mode","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"查看ArkUI状态变量","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-arkui-state/"},"next":{"title":"布局分析","permalink":"/harmonyos-docs-site/ide-debug-app/ide-arkui-inspector/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-debug-app/ide-developer-mode/ide-developer-mode.md


const frontMatter = {
	title: '开发者选项',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-developer-mode',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '开发者选项';

const assets = {

};



const toc = [{
  "value": "启用开发者选项",
  "id": "启用开发者选项",
  "level": 2
}, {
  "value": "禁用开发者选项",
  "id": "禁用开发者选项",
  "level": 2
}, {
  "value": "常规选项",
  "id": "常规选项",
  "level": 2
}, {
  "value": "调试",
  "id": "调试",
  "level": 2
}, {
  "value": "网络",
  "id": "网络",
  "level": 2
}, {
  "value": "输入",
  "id": "输入",
  "level": 2
}, {
  "value": "绘图",
  "id": "绘图",
  "level": 2
}, {
  "value": "应用",
  "id": "应用",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "开发者选项",
        children: "开发者选项"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS系统上的“设置”包含开发者选项的界面，用于辅助HarmonyOS应用程序开发、测试及优化，面向开发人员提供商业发行版之外的功能（如API能力），提供更多的调试选项及能力；您可在该界面中通过配置选项来帮助您分析和调试应用，例如，您可以通过启用USB/无线调试进行应用调试、开启DFX稳定性相关选项获取更多应用的故障及性能信息、开启过度绘制等选项快速发现性能问题等等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "启用开发者选项",
      children: "启用开发者选项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在Phone或Tablet上查看", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设置 > 系统"
        })
      }), "中", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发者选项"
        })
      }), "是否存在，如果不存在，可在", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["设置 > ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "具体的设备名称"
          })]
        })
      }), "中，连续点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "软件版本"
        })
      }), "七次，直到提示“开启开发者选项”，点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "确认开启"
        })
      }), "后输入PIN码（如果已设置），设备将自动重启，请等待设备完成重启。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "禁用开发者选项",
      children: "禁用开发者选项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在Phone或Tablet上点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设置 > 系统"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "> 开发者选项"
        })
      }), "，关闭开发者选项开关，弹出提示框后点击确认关闭，设备会自动重启。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常规选项",
      children: "常规选项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "充电温度限制"
          })
        }), "：防止手机充电时过热，用于对充电温度进行严格控制。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "系统回退"
          })
        }), "：支持开发者将终端设备从HarmonyOS NEXT回退到HarmonyOS。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调试",
      children: "调试"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "USB调试"
            })
          }), "：如果开发者希望通过计算机侧命令对移动设备进行调测，需要启用USB调试，同时通过设备授权确认。开启并授权后，HarmonyOS设备才能连接到计算机进行调试，可用于在计算机和设备之间复制数据、在设备上安装或卸载调试应用、以及读取日志数据等。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "无线调试"
            })
          }), "：通过Wi-Fi进行设备连接从而实现设备的调测，在开启无线调试后，可以查看设备的IP地址和端口，通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-run-device#section9315596477",
            children: "DevEco Studio或hdc命令"
          }), "进行设备连接。使用过程中需要确保您的设备与计算机在同一个Wi-Fi网络中，初次连接需要进行设备授权确认。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(899017)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "451",
            height: "308"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "清除受信任设备：针对之前授权过的所有计算机，撤销USB/无线调试的访问权限。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DFX稳定性配置选项包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "系统trace跟踪"
          })
        }), "：可以将系统采集的trace落盘到本地文件，便于本地问题定位及故障上报。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "冻屏信息日志"
          })
        }), "：稳定性在故障时会生成稳定性日志，提供更详细的日志信息。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "系统资源泄漏日志"
          })
        }), "：稳定性在故障时会生成内存相关日志，用于定位资源泄漏问题，提供更详细的日志信息。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其他调试选项包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "意图框架调试"
            })
          }), "：方便开发者在设备上验证意图框架，可以关闭部分校验机制并直接显示最近使用的意图。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(335589)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "397",
            height: "383"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "显示刷新频率"
            })
          }), "：刷新频率是指显示器每秒钟更新画面的次数，可在屏幕左上方显示刷新率档位和RenderService实时帧率，更好地了解设备性能和屏幕表现，从而进行针对性的优化或调整。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(761582)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "383",
            height: "320"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "关闭充电"
            })
          }), "：连接USB后默认充电，如果开发者希望不充电，需手动打开开关，插拔USB后可恢复默认充电状态。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "网络",
      children: "网络"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "网络领航员"
          })
        }), "：开启网络领航员后，开发者可以选择预置的网络模拟场景或者自定义网络模拟场景进行网络验证，提升APP体验的测试及验证效率，具体使用方式请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-network/network-debug-optimize/network-navigator",
          children: "网络领航员"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "输入",
      children: "输入"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "****显示触摸操作：****开启开关后，当用户触摸屏幕时, 会有一个小圆点跟随手指移动，显示用户的触摸动作。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "****指针位置：****开启指针位置后，屏幕上会出现十字准线，可以显示指针（点按）位置。屏幕上方会显示一个条形，用于跟踪十字准线的坐标。移动指针时，该条形中的坐标会跟踪十字准线位置，且屏幕上会绘制出指针路径。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(745248)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "403",
            height: "259"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "绘图",
      children: "绘图"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "显示布局边界"
            })
          }), "：开启后可以显示应用的裁剪边界、外边距和设备上的其他界面结构，方便开发者查看控件布局、空白空隙及控件重叠等问题。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(855696)/* ["default"] */.A) + "",
            width: "326",
            height: "269"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "显示重绘刷新区域"
            })
          }), "：当点击、滚动屏幕或者系统自动刷新使得屏幕上的某块区域重新绘制时，该区域突出显示。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(297844)/* ["default"] */.A) + "",
            width: "331",
            height: "312"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "缓存是否命中检测"
            })
          }), "：在一些属性动画的场景下，您可以使用renderGroup缓存提升属性动画性能；开启选项后，检测缓存未命中的场景，通过颜色标识。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(300097)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "396",
            height: "476"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "过度绘制检测"
            })
          }), "：显示设备上的颜色编码，以便可视化相同像素在同一帧中绘制的次数，可视化会显示应用可能在哪里进行了不必要的渲染。过度绘制的程度可以通过颜色来表示。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "过渡动画缩放"
            })
          }), "：设置过渡动画播放速度，便于开发者查看不同速度下的性能。缩放越小，速度越快。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用",
      children: "应用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "开发中元服务豁免管控"
          })
        }), "：嵌入式运行元服务能力默认是受限的，需要开发者申请权限才能使用。如果在申请权限之前的开发调试阶段想临时开启权限，可以通过开启本选项获取调试嵌入式元服务的权限。"]
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
855696(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753115-96659a3b1698537a6d6dbf7e5cd988d7.png");

},
335589(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753188-6eb809036a33a49445c06c83fd9946e8.png");

},
300097(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833101-75c92b91997fbe724e07f77c32d97de3.png");

},
745248(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753113-a263531c7b690ff82f5e5e5e90f65a9e.png");

},
761582(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753194-431cda1b111aa74dee6a79be7b18efc7.png");

},
297844(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753117-28270eecbbdb0117e17de7a70f7fa6fa.png");

},
899017(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753121-dd9db9f5ac944d871bab7b35db9a9bdd.png");

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