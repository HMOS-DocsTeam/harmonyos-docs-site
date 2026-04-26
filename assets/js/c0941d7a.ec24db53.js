"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["540679"], {
39709(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_graphics_accelerate_api_graphics_accelerate_c_api_total_annotated_x_open_g_t_x_game_scene_info_x_open_g_t_x_game_scene_info_md_c09_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-graphics-accelerate-api-graphics-accelerate-c-api-total-annotated-x-open-g-t-x-game-scene-info-x-open-g-t-x-game-scene-info-md-c09.json
var site_docs_ref_graphics_accelerate_api_graphics_accelerate_c_api_total_annotated_x_open_g_t_x_game_scene_info_x_open_g_t_x_game_scene_info_md_c09_namespaceObject = JSON.parse('{"id":"graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___game_scene_info/x_open_g_t_x___game_scene_info","title":"OpenGTX_GameSceneInfo","description":"概述","source":"@site/docs-ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___game_scene_info/x_open_g_t_x___game_scene_info.md","sourceDirName":"graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___game_scene_info","slug":"/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___game_scene_info/x_open_g_t_x___game_scene_info","permalink":"/harmonyos-docs-site/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___game_scene_info/x_open_g_t_x___game_scene_info","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"title":"OpenGTX_GameSceneInfo","sidebar_position":18,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___game_scene_info","kit":"图形","last_updated":"2026-04-22","slug":"x_open_g_t_x___game_scene_info"},"sidebar":"ref","previous":{"title":"OpenGTX_FrameRenderInfo","permalink":"/harmonyos-docs-site/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___frame_render_info/x_open_g_t_x___frame_render_info"},"next":{"title":"OpenGTX_NetworkInfo","permalink":"/harmonyos-docs-site/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___network_info/x_open_g_t_x___network_info"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___game_scene_info/x_open_g_t_x___game_scene_info.md


const frontMatter = {
	title: 'OpenGTX_GameSceneInfo',
	sidebar_position: 18,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___game_scene_info',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'x_open_g_t_x___game_scene_info'
};
const contentTitle = 'OpenGTX_GameSceneInfo';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "成员变量",
  "id": "成员变量",
  "level": 3
}, {
  "value": "结构体成员变量说明",
  "id": "结构体成员变量说明",
  "level": 2
}, {
  "value": "description",
  "id": "description",
  "level": 3
}, {
  "value": "maxFPS",
  "id": "maxfps",
  "level": 3
}, {
  "value": "minFPS",
  "id": "minfps",
  "level": 3
}, {
  "value": "recommendFPS",
  "id": "recommendfps",
  "level": 3
}, {
  "value": "resolutionCurValue",
  "id": "resolutioncurvalue",
  "level": 3
}, {
  "value": "sceneID",
  "id": "sceneid",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "opengtx_gamesceneinfo",
        children: "OpenGTX_GameSceneInfo"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述游戏场景信息，游戏应用获取到场景后传递此参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate",
        children: "GraphicsAccelerate"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/opengtx__base_8h/opengtx__base_8h",
        children: "opengtx_base.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#opengtx_sceneid-1",
              children: "OpenGTX_SceneID"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#sceneid",
              children: "sceneID"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏场景类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["char* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#description",
              children: "description"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对游戏场景的描述，字节长度范围[0,256]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#recommendfps",
              children: "recommendFPS"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前场景的建议帧率。取值范围0、[30,", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___config_description/x_open_g_t_x___config_description#targetfps",
              children: "targetFPS"
            }), "]，若设置0则该值不生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#minfps",
              children: "minFPS"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前场景预期的最小帧率。取值范围0、[30,", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___config_description/x_open_g_t_x___config_description#targetfps",
              children: "targetFPS"
            }), "]，若设置0则该值不生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#maxfps",
              children: "maxFPS"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前场景预期的最大帧率。取值范围0、[30,", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___config_description/x_open_g_t_x___config_description#targetfps",
              children: "targetFPS"
            }), "]，若设置0则该值不生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___resolution_value/x_open_g_t_x___resolution_value",
              children: "OpenGTX_ResolutionValue"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#resolutioncurvalue",
              children: "resolutionCurValue"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前场景的分辨率，取值范围360p-8k。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "结构体成员变量说明",
      children: "结构体成员变量说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "description",
      children: "description"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "char* OpenGTX_GameSceneInfo::description\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对游戏场景的描述，字节长度范围[0,256]。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "maxfps",
      children: "maxFPS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OpenGTX_GameSceneInfo::maxFPS\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前场景预期的最大帧率。取值范围0、[30,", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___config_description/x_open_g_t_x___config_description#targetfps",
        children: "targetFPS"
      }), "]，若设置0则该值不生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "minfps",
      children: "minFPS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OpenGTX_GameSceneInfo::minFPS\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前场景预期的最小帧率。取值范围0、[30,", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___config_description/x_open_g_t_x___config_description#targetfps",
        children: "targetFPS"
      }), "]，若设置0则该值不生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recommendfps",
      children: "recommendFPS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OpenGTX_GameSceneInfo::recommendFPS\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前场景的建议帧率。取值范围0、[30,", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___config_description/x_open_g_t_x___config_description#targetfps",
        children: "targetFPS"
      }), "]，若设置0则该值不生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resolutioncurvalue",
      children: "resolutionCurValue"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OpenGTX_ResolutionValue OpenGTX_GameSceneInfo::resolutionCurValue\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前场景的分辨率，取值范围360p-8k。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sceneid",
      children: "sceneID"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OpenGTX_SceneID OpenGTX_GameSceneInfo::sceneID\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "游戏场景类型。"
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