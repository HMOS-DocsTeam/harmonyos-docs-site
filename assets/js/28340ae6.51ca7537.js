"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["479229"], {
625964(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_graphics_accelerate_kit_guide_graphics_accelerate_introduction_graphics_accelerate_introduction_md_283_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-graphics-accelerate-kit-guide-graphics-accelerate-introduction-graphics-accelerate-introduction-md-283.json
var site_docs_graphics_accelerate_kit_guide_graphics_accelerate_introduction_graphics_accelerate_introduction_md_283_namespaceObject = JSON.parse('{"id":"graphics-accelerate-kit-guide/graphics-accelerate-introduction/graphics-accelerate-introduction","title":"Graphics Accelerate Kit简介","description":"Graphics Accelerate Kit（图形加速服务）是集成了先进的图形渲染加速和资源管理优化的综合解决方案，旨在通过软硬件协同优化，全面提升图形处理相关应用的性能和用户体验。该服务的应用场景包括游戏、AR、VR、UI交互渲染、3D动效等。其中，游戏作为端侧典型的重负载GPU渲染场景。本Kit已构建三大核心服务：游戏渲染加速服务、游戏资源加速服务、游戏启动加速服务。","source":"@site/docs/graphics-accelerate-kit-guide/graphics-accelerate-introduction/graphics-accelerate-introduction.md","sourceDirName":"graphics-accelerate-kit-guide/graphics-accelerate-introduction","slug":"/graphics-accelerate-kit-guide/graphics-accelerate-introduction/","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Graphics Accelerate Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-introduction","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkGraphics Editor插件及编辑器的下载与安装","permalink":"/harmonyos-docs-site/arkgraphics-3d/arkgraphics-editor/"},"next":{"title":"业务概述","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/graphics-accelerate-kit-guide/graphics-accelerate-introduction/graphics-accelerate-introduction.md


const frontMatter = {
	title: 'Graphics Accelerate Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-introduction',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = 'Graphics Accelerate Kit简介';

const assets = {

};



const toc = [{
  "value": "业务介绍",
  "id": "业务介绍",
  "level": 2
}, {
  "value": "约束和限制",
  "id": "约束和限制",
  "level": 2
}, {
  "value": "支持的国家/地区",
  "id": "支持的国家地区",
  "level": 3
}, {
  "value": "支持的设备",
  "id": "支持的设备",
  "level": 3
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
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
        id: "graphics-accelerate-kit简介",
        children: "Graphics Accelerate Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Graphics Accelerate Kit（图形加速服务）是集成了先进的图形渲染加速和资源管理优化的综合解决方案，旨在通过软硬件协同优化，全面提升图形处理相关应用的性能和用户体验。该服务的应用场景包括游戏、AR、VR、UI交互渲染、3D动效等。其中，游戏作为端侧典型的重负载GPU渲染场景。本Kit已构建三大核心服务：游戏渲染加速服务、游戏资源加速服务、游戏启动加速服务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务介绍",
      children: "业务介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "游戏渲染加速服务"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "游戏渲染加速服务作为软硬件协同的系统级图形加速解决方案，帮助游戏应用快速构建超帧、ABR（自适应稳态渲染）、OpenGTX（Open GPU Turbo X）等游戏渲染加速能力，解决游戏运行不流畅、卡顿掉帧、长时间运行造成发热发烫等痛点体验问题。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "功能模块"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-fg",
                  children: "超帧"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "针对GPU重负载的高目标帧率游戏场景，超帧利用渲染管线中的时域和空域信息，通过软硬件结合的MEMC（运动估计、运动补偿）技术，在游戏真实渲染帧间高效插入预测帧。在最大程度保持原始渲染画质前提下，有效提升游戏帧率和运行流畅度，降低系统负载和功耗，延长手机的续航时间。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-abr",
                  children: "ABR"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "针对GPU重负载游戏场景，通过感知游戏、设备状态，自适应决策分辨率缩放因子，并基于FrameBuffer（帧缓冲，下文简称Buffer）调整分辨率，帮助游戏应用实现更稳定的帧率、更低的功耗。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-opengtx",
                  children: "OpenGTX"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "针对高帧率重负载游戏场景，LTPO（动态帧率/刷新率）等方案通过实时感知游戏渲染状态、游戏场景、设备状态等信息，自适应调整游戏的帧率、设备的SOC/DDR频率，在不影响用户游戏体验的前提下，有效降低系统负载和功耗。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "游戏资源加速服务"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "游戏资源加速服务旨在利用后台任务调度、预加载等技术手段，实现资源包的高效后台更新和管理，降低游戏启动的等待时间，避免由于游戏内的资源包更新导致玩家流失。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "功能模块"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-introduction",
                  children: "资源包后台下载"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "资源包后台下载是将资源文件（例如关卡包、3D角色模型、纹理等）静默下载到用户设备中，减少游戏启动后等待资源包下载的时间，解决游戏启动慢的问题，为用户提供即开即玩的游戏体验。"
              })]
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "游戏启动加速服务"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "游戏启动加速服务基于游戏内存镜像精准恢复技术，实现游戏秒级启动，支持玩家享受高品质的游戏体验。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "功能模块"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/graphics-accelerate-kit-guide/graphics-accelerate-launchacceleration-service/graphics-accelerate-mirror-launch/graphics-accelerate-launch-introduction",
                  children: "秒级启动"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "秒级启动功能是在游戏退出时，系统自动为游戏制作内存镜像，在该游戏下一次冷启动时，可通过加载内存镜像实现游戏的秒开秒进，无需再经过漫长的加载过程，大大提升了游戏操控体验。"
              })]
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束和限制",
      children: "约束和限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的国家地区",
      children: "支持的国家/地区"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit仅支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的设备",
      children: "支持的设备"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "核心服务"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持的设备"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "游戏渲染加速服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、TV"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "游戏资源加速服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "游戏启动加速服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit暂不支持模拟器。"
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