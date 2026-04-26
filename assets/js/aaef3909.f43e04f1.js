"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["333818"], {
736214(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_run_emulator_ide_emulator_overview_ide_emulator_specification_ide_emulator_specification_md_aae_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-run-emulator-ide-emulator-overview-ide-emulator-specification-ide-emulator-specification-md-aae.json
var site_docs_ide_run_emulator_ide_emulator_overview_ide_emulator_specification_ide_emulator_specification_md_aae_namespaceObject = JSON.parse('{"id":"ide-run-emulator/ide-emulator-overview/ide-emulator-specification/ide-emulator-specification","title":"模拟器与真机的差异","description":"模拟器是开发和调试HarmonyOS应用/元服务的便捷工具，例如不需要配置服务器域名即可开发和调试元服务，在大多数情况下，模拟器上推包调试不需要签名，但部分Kit仍需签名后才能正常运行，具体要求请参考Kit的开发指南。","source":"@site/docs/ide-run-emulator/ide-emulator-overview/ide-emulator-specification/ide-emulator-specification.md","sourceDirName":"ide-run-emulator/ide-emulator-overview/ide-emulator-specification","slug":"/ide-run-emulator/ide-emulator-overview/ide-emulator-specification/","permalink":"/harmonyos-docs-site/ide-run-emulator/ide-emulator-overview/ide-emulator-specification/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"模拟器与真机的差异","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-specification","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"设备支持类型","permalink":"/harmonyos-docs-site/ide-run-emulator/ide-emulator-overview/ide-emulator-devicetype/"},"next":{"title":"创建模拟器","permalink":"/harmonyos-docs-site/ide-run-emulator/ide-emulator-management/ide-emulator-create/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-run-emulator/ide-emulator-overview/ide-emulator-specification/ide-emulator-specification.md


const frontMatter = {
	title: '模拟器与真机的差异',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-specification',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '模拟器与真机的差异';

const assets = {

};



const toc = [{
  "value": "性能差异",
  "id": "性能差异",
  "level": 2
}, {
  "value": "显示效果差异",
  "id": "显示效果差异",
  "level": 2
}, {
  "value": "图形接口差异",
  "id": "图形接口差异",
  "level": 2
}, {
  "value": "多媒体差异",
  "id": "多媒体差异",
  "level": 2
}, {
  "value": "Kit能力差异",
  "id": "kit能力差异",
  "level": 2
}, {
  "value": "其他差异",
  "id": "其他差异",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "模拟器与真机的差异",
        children: "模拟器与真机的差异"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟器是开发和调试HarmonyOS应用/元服务的便捷工具，例如不需要配置服务器域名即可开发和调试元服务，在大多数情况下，模拟器上推包调试不需要签名，但部分Kit仍需签名后才能正常运行，具体要求请参考Kit的开发指南。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于模拟器和真机在硬件和能力上存在差异，部分功能场景仍需在真机上进行开发。您可以通过阅读本文档来决定哪些功能在模拟器中测试，哪些功能在真机上测试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "性能差异",
      children: "性能差异"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟器是运行在Mac或Windows电脑上的虚拟机应用，会使用电脑的硬件资源，包括CPU、内存和网络连接等。这些资源在容量和速度上可能与真机存在显著差异。因此，模拟器不适合用于测试应用/元服务的性能（如数据处理、图形渲染、网络速度）、资源占用（如内存、CPU、功耗），模拟器的性能测试结果仅能用于评估应用功能的相对差异。如需获取真实场景下的用户体验数据，建议在真机上进行测试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "显示效果差异",
      children: "显示效果差异"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模拟器使用电脑的显示器，与真机屏幕不同，可能会导致文本和图像在模拟器上出现边缘锯齿。放大模拟器窗口比例可以使文字和图像更清晰。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "电脑屏幕的色域范围可能与移动设备不同，从而导致颜色显示不准确。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模拟器不支持屏幕亮度调节。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "图形接口差异",
      children: "图形接口差异"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mac模拟器不支持OpenGL ES 3.1、3.2接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DevEco Studio 6.1.0 Beta2之前的版本，不支持Vulkan接口，从DevEco Studio 6.1.0 Beta2版本开始，支持除vkGetSwapchainGrallocUsageOHOS、vkAcquireImageOHOS、vkQueueSignalReleaseImageOHOS之外的接口。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多媒体差异",
      children: "多媒体差异"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模拟器不支持heif格式的图片。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "视频播放：模拟器仅支持h264文件格式，并且是RGBA像素格式的视频文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模拟器不支持视频录制/转码/处理、屏幕录像。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kit能力差异",
      children: "Kit能力差异"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前部分Kit在模拟器上使用时，和真机存在差异，具体请参考对应Kit简介。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如遇到因Kit能力不支持导致的应用闪退问题，可以尝试使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-runtime/arkts-runtime-module/arkts-dynamic-import#%E5%8A%A8%E6%80%81import%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88%E4%BB%8B%E7%BB%8D",
        children: "动态引入Kit"
      }), "的方式规避此异常问题。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kit不支持导致的报错信息如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "LastFatalMessage:[default] [LoadJSPandaFile:00] resolveBufferCallback get hsp buffer failed，hsp path:/data/storage/el1/bundle/com.huawei.hmos.{KitName}.kit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "其他差异",
      children: "其他差异"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "模拟器和真机的其他重要差异"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "影响场景"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIM卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持拨打电话、发送短信"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持连接、数据传输"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "蓝牙"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持蓝牙设备扫描、连接、数据传输"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "星闪"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持星闪设备扫描、连接、数据传输、分布式能力"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持NFC卡片读写、刷卡"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEE（Trusted Execution Environment，可信执行环境）"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["不支持安全GPS、设备证书等，部分安全相关Kit暂不支持，详情参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/system-security",
              children: "安全Kit简介"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NPU"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["部分AI相关Kit暂不支持，详情参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/harmony-agent-framework-kit-guide/hmaf-introduction",
              children: "AI Kit简介"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "生物识别"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持指纹、人脸认证等"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "摄像头/麦克风"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "依赖电脑设备，不支持多摄像头切换（广角/长焦）、闪光灯、降噪算法等"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "电源"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟电源，不支持温控、快充等场景"
          })]
        })]
      })]
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