"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["275111"], {
827631(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_graphics_accelerate_kit_guide_graphics_accelerate_rendering_graphics_accelerate_overview_graphics_accelerate_overview_md_2b5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-graphics-accelerate-kit-guide-graphics-accelerate-rendering-graphics-accelerate-overview-graphics-accelerate-overview-md-2b5.json
var site_docs_graphics_accelerate_kit_guide_graphics_accelerate_rendering_graphics_accelerate_overview_graphics_accelerate_overview_md_2b5_namespaceObject = JSON.parse('{"id":"graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-overview/graphics-accelerate-overview","title":"业务概述","description":"约束与限制","source":"@site/docs/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-overview/graphics-accelerate-overview.md","sourceDirName":"graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-overview","slug":"/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-overview/","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"业务概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-overview","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Graphics Accelerate Kit简介","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-introduction/"},"next":{"title":"概述","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-interpolation/graphics-accelerate-fg-interpolation-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-overview/graphics-accelerate-overview.md


const frontMatter = {
	title: '业务概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-overview',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '业务概述';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "亮点/特征",
  "id": "亮点特征",
  "level": 2
}, {
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "场景约束",
  "id": "场景约束",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "业务概述",
        children: "业务概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "游戏渲染加速服务支持Phone、Tablet设备，并且从6.1.0(23)版本开始，新增支持TV设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "亮点特征",
      children: "亮点/特征"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "稳定帧率，减少卡顿、掉帧现象"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "游戏应用集成超帧、ABR后，在无画质损耗的基础上，可有效稳定或提升游戏运行帧率，减少卡顿和掉帧现象，使游戏运行更加稳定、流畅。集成OpenGTX后，通过感知游戏场景、设备状态等关键信息，动态调整游戏的帧率/刷新率以及设备的SOC/DDR频率，从而做到稳定帧率，保障游戏在终端设备上流畅运行。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "降低功耗和发热，延长续航时间"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "游戏应用集成超帧、ABR后，在GPU重负载游戏场景，单帧功耗可降低10%及以上，可有效降低GPU负载和系统功耗，减轻手机发热现象，延长续航时间。集成OpenGTX后，通过对游戏的帧率控制以及设备的SOC/DDR频率控制，在满足用户游戏体验的前提下，最大限度的降低设备的性能开销，从而做到降低功耗减少发热，提升设备的续航时间。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "超帧"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "为满足不同游戏场景的使用需求，我们为开发者提供了两种超帧模式供选择，分别是内插模式和外插模式。具体适用场景参见下方表格。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "超帧模式"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "适用场景"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-fg-interpolation",
                  children: "内插模式"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "适用于对渲染画质和运行流畅度要求高的游戏，如角色扮演游戏、竞速类游戏等。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-fg-extrapolation",
                  children: "外插模式"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "适用于对响应时延和操作跟手性要求高的游戏，如动作类游戏、射击类游戏等。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ABR"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "ABR策略"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "适用场景"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-abr",
                  children: "基于相机运动的感知策略"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "适用于竞速类游戏、角色扮演类游戏、射击类游戏等，在加速、奔跑、视角旋转等场景自适应调整Buffer分辨率，在用户对画质影响感知不明显的前提下，帮助游戏应用实现更稳定的帧率、更低的功耗。"
              })]
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OpenGTX"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "针对高帧率重负载游戏场景，OpenGTX LTPO方案提供了三种动态帧率/刷新率控制模式，分别是SCENE_MODE、TOUCH_MODE、ADAPTIVE_MODE，具体使用场景参见下方表格。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "LTPO模式"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "适用场景"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_ltpo_mode-1",
                  children: "SCENE_MODE"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "根据场景设置不同的游戏帧率，如游戏场景120fps。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_ltpo_mode-1",
                  children: "TOUCH_MODE"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "根据触控频率设置游戏帧率。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_ltpo_mode-1",
                  children: "ADAPTIVE_MODE"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "根据场景、相机、触控等自适应控制游戏帧率，包含SCENE_MODE和TOUCH_MODE。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景约束",
      children: "场景约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "超帧"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "超帧适用于GPU重负载的高目标帧率游戏场景：在负载较轻的游戏场景开启超帧可能存在功耗负收益，在目标帧率低于60fps游戏场景开启超帧可能引入拖影现象。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "超帧运动估计模式分为“基础模式”和“增强模式”，下表说明两种模式的使用约束。"
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "运动估计模式"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "开发准备"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "场景约束"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "基础模式"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "-"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "适用于相机或场景中物体静止以及慢速运动的游戏场景。在高速运动目标场景及复杂粒子特效场景可能引入拖影和鬼影。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "增强模式"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "需要开发者对绘制顶点的draw call进行标记。相比基础模式，增强模式利用三维场景中的顶点信息进行更精准的运动估计，超帧效果更优。"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "对于相机或物体慢速和快速运动场景均具有较好超帧效果，较基础模式能有效优化运动拖影现象。但在复杂粒子特效场景可能引入鬼影。"
                  })]
                })]
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "超帧API不支持并发调用。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ABR"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ABR目前只支持对一个Buffer进行自适应分辨率调整，请结合游戏渲染管线各Pass（通道）的GPU负载情况，选择GPU重负载Pass对应的Buffer使能ABR。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ABR API不支持并发调用。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OpenGTX"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设备规格：设备需要支持LTPO（Low Temperature Polycrystalline Oxide）屏幕。"
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