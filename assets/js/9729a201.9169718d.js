"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["1369"], {
783491(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_spatial_recon_api_spatial_recon_arkts_spatial_recon_spatialrender_spatial_recon_spatialrender_md_972_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-spatial-recon-api-spatial-recon-arkts-spatial-recon-spatialrender-spatial-recon-spatialrender-md-972.json
var site_docs_ref_spatial_recon_api_spatial_recon_arkts_spatial_recon_spatialrender_spatial_recon_spatialrender_md_972_namespaceObject = JSON.parse('{"id":"spatial-recon-api/spatial-recon-arkts/spatial-recon-spatialrender/spatial-recon-spatialrender","title":"spatialRender","description":"spatialRender模块主要用于渲染3DGS数据，展示3DGS渲染场景。","source":"@site/docs-ref/spatial-recon-api/spatial-recon-arkts/spatial-recon-spatialrender/spatial-recon-spatialrender.md","sourceDirName":"spatial-recon-api/spatial-recon-arkts/spatial-recon-spatialrender","slug":"/spatial-recon-api/spatial-recon-arkts/spatial-recon-spatialrender/spatial-recon-spatialrender","permalink":"/harmonyos-docs-site/ref/spatial-recon-api/spatial-recon-arkts/spatial-recon-spatialrender/spatial-recon-spatialrender","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"spatialRender","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/spatial-recon-spatialrender","kit":"图形","last_updated":"2026-04-22","slug":"spatial-recon-spatialrender"},"sidebar":"ref","previous":{"title":"OpenGTX_Vector3","permalink":"/harmonyos-docs-site/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___vector3/x_open_g_t_x___vector3"},"next":{"title":"spatial_recon_interface.h","permalink":"/harmonyos-docs-site/ref/spatial-recon-api/spatial-recon-c/spatial-recon-headerfile/capi-spatial-recon-interface-h/capi-spatial-recon-interface-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/spatial-recon-api/spatial-recon-arkts/spatial-recon-spatialrender/spatial-recon-spatialrender.md


const frontMatter = {
	title: 'spatialRender',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/spatial-recon-spatialrender',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'spatial-recon-spatialrender'
};
const contentTitle = 'spatialRender';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "GSNode（3DGS渲染对象）",
  "id": "gsnode3dgs渲染对象",
  "level": 2
}, {
  "value": "使用说明",
  "id": "使用说明",
  "level": 3
}, {
  "value": "GSPlugin",
  "id": "gsplugin",
  "level": 2
}, {
  "value": "常量",
  "id": "常量",
  "level": 3
}, {
  "value": "loadGSNode",
  "id": "loadgsnode",
  "level": 3
}, {
  "value": "GSImportSettings",
  "id": "gsimportsettings",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 3
}, {
  "value": "RetroEffectParams",
  "id": "retroeffectparams",
  "level": 2
}, {
  "value": "RetroEffect",
  "id": "retroeffect",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-1",
  "level": 3
}, {
  "value": "ComicEffectParams",
  "id": "comiceffectparams",
  "level": 2
}, {
  "value": "ComicEffect",
  "id": "comiceffect",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-2",
  "level": 3
}, {
  "value": "ObraDinnEffectParams",
  "id": "obradinneffectparams",
  "level": 2
}, {
  "value": "ObraDinnEffect",
  "id": "obradinneffect",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-3",
  "level": 3
}, {
  "value": "ColorEditingEffectParams",
  "id": "coloreditingeffectparams",
  "level": 2
}, {
  "value": "ColorEditingEffect",
  "id": "coloreditingeffect",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-4",
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
    img: "img",
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
        id: "spatialrender",
        children: "spatialRender"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "spatialRender模块主要用于渲染3DGS数据，展示3DGS渲染场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.SpatialRender"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.1(21)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { spatialRender } from '@kit.SpatialReconKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gsnode3dgs渲染对象",
      children: "GSNode（3DGS渲染对象）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GSNode类继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-nodes/js-apis-inner-scene-nodes#node",
        children: "Node"
      }), "，代表一个3DGS（3D Gaussian Splatting）渲染对象，帮助开发者操作3DGS模型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Graphics.SpatialRender"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.1(21)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用说明",
      children: "使用说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GSNode类的使用方法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-nodes/js-apis-inner-scene-nodes#node",
        children: "Node"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gsplugin",
      children: "GSPlugin"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GSPlugin类封装了与3DGS相关的内容，包括3DGS插件ID和3DGS模型加载接口，帮助开发者实现对3DGS的自定义功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Graphics.SpatialRender"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.1(21)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(747650)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用GSPlugin接口前，必须先加载对应的插件ID，否则会出现未定义的行为。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { spatialRender } from '@kit.SpatialReconKit';\nimport { Scene } from '@kit.ArkGraphics3D';\n\nlet renderContext = Scene.getDefaultRenderContext();\nif (renderContext != null) {\n  renderContext.loadPlugin(spatialRender.GSPlugin.PLUGIN_ID);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "常量",
      children: "常量"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Graphics.SpatialRender"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.1(21)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PLUGIN_ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示该类对应的插件ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RETRO_EFFECT_ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示复古效果对应的ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COMIC_EFFECT_ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示漫画效果对应的ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OBRA_DINN_EFFECT_ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示黑白bit效果对应的ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COLOR_EDITING_EFFECT_ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示颜色编辑效果对应的ID。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者不需要感知各ID的具体值，推荐直接使用字符串变量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "loadgsnode",
      children: "loadGSNode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载3DGS模型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Graphics.SpatialRender"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.1(21)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scene"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene/js-apis-inner-scene",
              children: "Scene"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定在应用界面想要显示的场景，是ArkGraphics 3D基础模块。建议通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene/js-apis-inner-scene#load",
              children: "Scene.load"
            }), "来获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/spatial-recon-api/spatial-recon-arkts/spatial-recon-spatialrender/spatial-recon-spatialrender#gsimportsettings",
              children: "GSImportSettings"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载3DGS模型的设置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "parent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-nodes/js-apis-inner-scene-nodes#node",
              children: "Node"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预期挂载3DGS模型的节点。如果不传，加载的3DGS模型会被挂载到Scene的根节点上。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/spatial-recon-api/spatial-recon-arkts/spatial-recon-spatialrender/spatial-recon-spatialrender#gsnode3dgs%E6%B8%B2%E6%9F%93%E5%AF%B9%E8%B1%A1",
              children: "GSNode"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过Promise获取3DGS模型对应的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/spatial-recon-api/spatial-recon-arkts/spatial-recon-spatialrender/spatial-recon-spatialrender#gsnode3dgs%E6%B8%B2%E6%9F%93%E5%AF%B9%E8%B1%A1",
              children: "GSNode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Scene, RenderContext } from '@kit.ArkGraphics3D';\nimport { spatialRender } from '@kit.SpatialReconKit';\n\nlet renderContext: RenderContext | null = Scene.getDefaultRenderContext();\n\nif (renderContext != null) {\n  renderContext.loadPlugin(spatialRender.GSPlugin.PLUGIN_ID);\n  let scene = Scene.load().then(async (scene: Scene) => {\n    let uri = \"OhosRawFile://assets/gltf/model.glb\"; //3DGS模型的uri，根据实际情况修改\n    let offset = 0;\n    let gsNodeext: spatialRender.GSNode = await spatialRender.GSPlugin.loadGSNode(scene, {uri, offset}, scene.root);\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gsimportsettings",
      children: "GSImportSettings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GSImportSettings类封装了加载3DGS模型的设置，包括模型路径和数据在文件中的偏移量，帮助开发者加载3DGS模型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Graphics.SpatialRender"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.1(21)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性",
      children: "属性"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3DGS模型的文件路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待加载数据在3DGS模型文件中的偏移量。默认值0。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Scene, RenderContext } from '@kit.ArkGraphics3D';\nimport { spatialRender } from '@kit.SpatialReconKit';\n\nlet renderContext: RenderContext | null = Scene.getDefaultRenderContext();\n\nif (renderContext != null) {\n  renderContext.loadPlugin(spatialRender.GSPlugin.PLUGIN_ID);\n  let scene = Scene.load().then(async (scene: Scene) => {\n    let uri = \"OhosRawFile://assets/gltf/doll.glb\";\n    let offset = 0;\n    let setting: spatialRender.GSImportSettings = { uri: uri, offset : offset};\n    let gsNodeext: spatialRender.GSNode = await spatialRender.GSPlugin.loadGSNode(scene, setting, scene.root);\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "retroeffectparams",
      children: "RetroEffectParams"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["RetroEffect参数，该类型为字符串枚举，该枚举值可在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-resources/js-apis-inner-scene-resources#effect21",
        children: "Effect"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-scene-resources.md#getpropertyvalue23",
        children: "getPropertyValue"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-scene-resources.md#setpropertyvalue23",
        children: "setPropertyValue"
      }), "方法中使用，用于声明属性的名称，以获取属性的当前值或更新属性的值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.SpatialRender"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COLOR_NUM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'colorNum'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RetroEffect中colorNum属性的名称。  属性对应取值类型为number。该属性表示使用多少种颜色来作为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/spatial-recon-kit-guide/spatial-recon-glossary#%E9%A2%9C%E8%89%B2%E6%8A%96%E5%8A%A8",
              children: "颜色抖动"
            }), "。通常属性值越大图像质量越高、值越小复古风格越重。属性取值范围大于0，默认值8。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PIXEL_SIZE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'pixelSize'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RetroEffect中pixelSize属性的名称。  属性对应取值类型为number。该属性表示下采样的程度。越大越重。若该属性取值为1，则不会进行下采样。属性取值范围大于等于1，默认值4。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEND_ENABLED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'blendEnabled'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RetroEffect中blendEnabled属性的名称。  属性对应取值类型为boolean。该属性表示是否把处理后的图片与原始图片融合，属性值设置为true会把处理后的图片与原始图片融合，设置为false不会做融合。由于复古风格会造成图像的亮度下降、色彩偏移，将该属性值设为true用以维持图像的亮度与色彩。属性取值默认为true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CURVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'curve'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RetroEffect中curve属性的名称。  属性对应取值类型为number。该属性表示显像管电视屏幕带有的曲率。复古风格会模拟显像管电视的显示特征。该属性代表显像管电视屏幕带有的曲率，属性取值越大曲率越大。属性取值范围[0, 1]，默认值0.25。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Scene, RenderContext, RenderingPipelineType, Effect } from '@kit.ArkGraphics3D';\nimport { spatialRender } from '@kit.SpatialReconKit';\nlet renderContext: RenderContext | null = Scene.getDefaultRenderContext();\n\nif (renderContext != null) {\n  renderContext.loadPlugin(spatialRender.GSPlugin.PLUGIN_ID);\n  Scene.load().then(async (scene: Scene) => {\n    let rf = scene.getResourceFactory();\n    let effect : Effect =\n      await rf.createEffect({ effectId: spatialRender.GSPlugin.RETRO_EFFECT_ID });\n    let colNum = effect.getPropertyValue(spatialRender.RetroEffectParams.COLOR_NUM);\n    let res = effect.setPropertyValue(spatialRender.RetroEffectParams.COLOR_NUM, 4);\n    let camera = await rf.createCamera({ name: \"gsCam\", path: \"//gsCam\" }, { renderingPipeline: RenderingPipelineType.FORWARD });\n    camera.effects.append(effect)\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "retroeffect",
      children: "RetroEffect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RetroEffect接口封装了复古风格的效果参数。可实现自定义的复古风格。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Graphics.SpatialRender"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.1(21)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性-1",
      children: "属性"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "colorNum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用多少种颜色来作为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/spatial-recon-kit-guide/spatial-recon-glossary#%E9%A2%9C%E8%89%B2%E6%8A%96%E5%8A%A8",
              children: "颜色抖动"
            }), "。通常值越大图像质量越高、值越小复古风格越重。取值范围大于0。默认值8。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pixelSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下采样的程度。越大越重。若为1，则不会进行下采样。取值范围大于等于1。默认值4。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "blendEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否把处理后的图片与原始图片融合，设置为true会把处理后的图片与原始图片融合，设置为false不会做融合。复古风格会造成图像的亮度下降、色彩偏移。设为true用以维持图像的亮度与色彩。默认值true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "curve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显像管电视屏幕带有的曲率。复古风格会模拟显像管电视的显示特征，  curve代表显像管电视屏幕带有的曲率，值越大曲率越大。取值范围[0, 1]。默认值0.25。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Scene, RenderContext, RenderingPipelineType } from '@kit.ArkGraphics3D';\nimport { spatialRender } from '@kit.SpatialReconKit';\nlet renderContext: RenderContext | null = Scene.getDefaultRenderContext();\n\nif (renderContext != null) {\n  renderContext.loadPlugin(spatialRender.GSPlugin.PLUGIN_ID);\n  Scene.load().then(async (scene: Scene) => {\n    let rf = scene.getResourceFactory();\n    let effect : spatialRender.RetroEffect =\n      await rf.createEffect({ effectId: spatialRender.GSPlugin.RETRO_EFFECT_ID }) as spatialRender.RetroEffect;\n    let camera = await rf.createCamera({ name: \"gsCam\", path: \"//gsCam\" }, { renderingPipeline: RenderingPipelineType.FORWARD });\n    camera.effects.append(effect)\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "comiceffectparams",
      children: "ComicEffectParams"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ComicEffect参数，该类型为字符串枚举，该枚举值可在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-resources/js-apis-inner-scene-resources#effect21",
        children: "Effect"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-scene-resources.md#getpropertyvalue23",
        children: "getPropertyValue"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-scene-resources.md#setpropertyvalue23",
        children: "setPropertyValue"
      }), "方法中使用，用于声明属性的名称，以获取属性的当前值或更新属性的值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.SpatialRender"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LINE_THRESHOLD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'lineThreshold'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ComicEffect中lineThreshold属性的名称。  属性对应取值类型为number。该属性表示用来判定像素为轮廓线的阈值，图像梯度大于该阈值的像素会被判定为轮廓线。该属性取值范围[0, 1]，默认值为0.2。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LINE_COLOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'lineColor'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ComicEffect中lineThreshold属性的名称。  属性对应取值类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-types/js-apis-inner-scene-types#color",
              children: "Color"
            }), "。该属性表示轮廓线的颜色。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Scene, RenderContext, RenderingPipelineType, Effect } from '@kit.ArkGraphics3D';\nimport { spatialRender } from '@kit.SpatialReconKit';\nlet renderContext: RenderContext | null = Scene.getDefaultRenderContext();\n\nif (renderContext != null) {\n  renderContext.loadPlugin(spatialRender.GSPlugin.PLUGIN_ID);\n  Scene.load().then(async (scene: Scene) => {\n    let rf = scene.getResourceFactory();\n    let effect : Effect =\n      await rf.createEffect({ effectId: spatialRender.GSPlugin.COMIC_EFFECT_ID });\n    let threshold = effect.getPropertyValue(spatialRender.ComicEffectParams.LINE_THRESHOLD);\n    let res = effect.setPropertyValue(spatialRender.ComicEffectParams.LINE_THRESHOLD, 0.5);\n    let camera = await rf.createCamera({ name: \"gsCam\", path: \"//gsCam\" }, { renderingPipeline: RenderingPipelineType.FORWARD });\n    camera.effects.append(effect)\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "comiceffect",
      children: "ComicEffect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ComicEffect接口封装了漫画风格的效果的参数。可实现自定义的漫画风格。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Graphics.SpatialRender"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.1(21)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性-2",
      children: "属性"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lineThreshold"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判定像素为轮廓线的阈值。图像梯度大于该阈值的像素会被判定为轮廓线。取值范围[0, 1] ，默认值0.2。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lineColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-types/js-apis-inner-scene-types#color",
              children: "Color"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轮廓线的颜色。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Scene, RenderContext, RenderingPipelineType } from '@kit.ArkGraphics3D';\nimport { spatialRender } from '@kit.SpatialReconKit';\nlet renderContext: RenderContext | null = Scene.getDefaultRenderContext();\n\nif (renderContext != null) {\n  renderContext.loadPlugin(spatialRender.GSPlugin.PLUGIN_ID);\n  Scene.load().then(async (scene: Scene) => {\n    let rf = scene.getResourceFactory();\n    let effect : spatialRender.ComicEffect =\n      await rf.createEffect({ effectId: spatialRender.GSPlugin.COMIC_EFFECT_ID }) as spatialRender.ComicEffect;\n    let camera = await rf.createCamera({ name: \"gsCam\", path: \"//gsCam\" }, { renderingPipeline: RenderingPipelineType.FORWARD });\n    camera.effects.append(effect)\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "obradinneffectparams",
      children: "ObraDinnEffectParams"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ObraDinnEffect参数，该类型为字符串枚举，该枚举值可在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-resources/js-apis-inner-scene-resources#effect21",
        children: "Effect"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-scene-resources.md#getpropertyvalue23",
        children: "getPropertyValue"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-scene-resources.md#setpropertyvalue23",
        children: "setPropertyValue"
      }), "方法中使用，用于声明属性的名称，以获取属性的当前值或更新属性的值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.SpatialRender"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NOISE_STRENGTH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'noiseStrength'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ObraDinnEffect中的noiseStrength属性的名称。  属性对应取值类型为number。该属性表示选择哪些像素用来", (0,jsx_runtime.jsx)(_components.a, {
              href: "/spatial-recon-kit-guide/spatial-recon-glossary#%E9%A2%9C%E8%89%B2%E6%8A%96%E5%8A%A8",
              children: "颜色抖动"
            }), "。该属性可以起到平滑边缘的效果，加大噪声强度会导致边缘更模糊。属性取值范围[0, 1]，默认值0.3。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "THRESHOLD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'threshold'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ObraDinnEffect中的threshold属性的名称。  属性对应取值类型为number。该属性表示将像素分为前景颜色或后景颜色的阈值。该属性取值越高，图像整体的颜色会越接近后景颜色。属性值取值范围[0, 1]，默认值0.4。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FOREGROUND_COLOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'foregroundColor'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ObraDinnEffect中的foregroundColor属性的名称。  属性对应取值类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-types/js-apis-inner-scene-types#color",
              children: "Color"
            }), "。该属性表示前景颜色。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BACKGROUND_COLOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'backgroundColor'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ObraDinnEffect中的backgroundColor属性的名称。  属性对应取值类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-types/js-apis-inner-scene-types#color",
              children: "Color"
            }), "。该属性表示背景颜色。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Scene, RenderContext, RenderingPipelineType, Effect } from '@kit.ArkGraphics3D';\nimport { spatialRender } from '@kit.SpatialReconKit';\nlet renderContext: RenderContext | null = Scene.getDefaultRenderContext();\n\nif (renderContext != null) {\n  renderContext.loadPlugin(spatialRender.GSPlugin.PLUGIN_ID);\n  Scene.load().then(async (scene: Scene) => {\n    let rf = scene.getResourceFactory();\n    let effect : Effect =\n      await rf.createEffect({ effectId: spatialRender.GSPlugin.OBRA_DINN_EFFECT_ID });\n    let noiseStrength = effect.getPropertyValue(spatialRender.ObraDinnEffectParams.NOISE_STRENGTH);\n    let res = effect.setPropertyValue(spatialRender.ObraDinnEffectParams.NOISE_STRENGTH, 0.5);\n    let camera = await rf.createCamera({ name: \"gsCam\", path: \"//gsCam\" }, { renderingPipeline: RenderingPipelineType.FORWARD });\n    camera.effects.append(effect)\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "obradinneffect",
      children: "ObraDinnEffect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ObraDinnEffect接口封装了bit风格的效果参数。可实现自定义的bit风格。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Graphics.SpatialRender"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.1(21)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性-3",
      children: "属性"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "noiseStrength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["选择哪些像素用来", (0,jsx_runtime.jsx)(_components.a, {
              href: "/spatial-recon-kit-guide/spatial-recon-glossary#%E9%A2%9C%E8%89%B2%E6%8A%96%E5%8A%A8",
              children: "颜色抖动"
            }), "。可以起到平滑边缘的效果。加大噪声强度会导致边缘更模糊。取值范围[0, 1]，默认值0.3。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "threshold"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "把像素分为前景颜色或后景颜色的阈值。高于该阈值的像素会被处理为前景颜色。threshold越低，图像整体的颜色会越接近前景颜色。threshold越高，图像整体的颜色会越接近后景颜色。取值范围[0, 1]，默认值0.4。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "foregroundColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-types/js-apis-inner-scene-types#color",
              children: "Color"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "前景颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-types/js-apis-inner-scene-types#color",
              children: "Color"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "背景颜色。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Scene, RenderContext, RenderingPipelineType } from '@kit.ArkGraphics3D';\nimport { spatialRender } from '@kit.SpatialReconKit';\nlet renderContext: RenderContext | null = Scene.getDefaultRenderContext();\n\nif (renderContext != null) {\n  renderContext.loadPlugin(spatialRender.GSPlugin.PLUGIN_ID);\n  Scene.load().then(async (scene: Scene) => {\n    let rf = scene.getResourceFactory();\n    let effect : spatialRender.ObraDinnEffect =\n      await rf.createEffect({ effectId: spatialRender.GSPlugin.OBRA_DINN_EFFECT_ID }) as spatialRender.ObraDinnEffect;\n    let camera = await rf.createCamera({ name: \"gsCam\", path: \"//gsCam\" }, { renderingPipeline: RenderingPipelineType.FORWARD });\n    camera.effects.append(effect)\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "coloreditingeffectparams",
      children: "ColorEditingEffectParams"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ColorEditingEffect参数，该类型为字符串枚举，该枚举值可在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-resources/js-apis-inner-scene-resources#effect21",
        children: "Effect"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-scene-resources.md#getpropertyvalue23",
        children: "getPropertyValue"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-scene-resources.md#setpropertyvalue23",
        children: "setPropertyValue"
      }), "方法中使用，用于声明属性的名称，以获取属性的当前值或更新属性的值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.SpatialRender"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EXPOSURE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'exposure'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ColorEditingEffect中的exposure属性的名称。  属性对应取值类型为number。该属性表示图像的曝光度。属性推荐取值范围[-5, 5]，默认值0.0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CONTRAST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'contrast'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ColorEditingEffect中的contrast属性的名称。  属性对应取值类型为number。该属性表示图像的对比度。属性推荐取值范围[0, 2]，默认值1.0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEMPERATURE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'temperature'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ColorEditingEffect中的temperature属性的名称。  属性对应取值类型为number。该属性表示图像的色温。属性推荐取值范围[-2, 2]，默认值0.0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'tint'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ColorEditingEffect中的tint属性的名称。  属性对应取值类型为number。该属性表示图像的色调。属性推荐取值范围[-1, 1]，默认值0.0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SATURATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'saturation'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ColorEditingEffect中的saturation属性的名称。  属性对应取值类型为number。该属性表示图像的饱和度。属性推荐取值范围[0, 2]，默认值1.0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VIBRANCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'vibrance'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ColorEditingEffect中的vibrance属性的名称。  属性对应取值类型为number。该属性表示图像的自然饱和度。属性推荐取值范围[-1, 1]，默认值0.0。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Scene, RenderContext, RenderingPipelineType, Effect } from '@kit.ArkGraphics3D';\nimport { spatialRender } from '@kit.SpatialReconKit';\nlet renderContext: RenderContext | null = Scene.getDefaultRenderContext();\n\nif (renderContext != null) {\n  renderContext.loadPlugin(spatialRender.GSPlugin.PLUGIN_ID);\n  Scene.load().then(async (scene: Scene) => {\n    let rf = scene.getResourceFactory();\n    let effect : Effect =\n      await rf.createEffect({ effectId: spatialRender.GSPlugin.COLOR_EDITING_EFFECT_ID });\n    let exposure = effect.getPropertyValue(spatialRender.ColorEditingEffectParams.EXPOSURE);\n    let res = effect.setPropertyValue(spatialRender.ColorEditingEffectParams.EXPOSURE, 0.5);\n    let camera = await rf.createCamera({ name: \"gsCam\", path: \"//gsCam\" }, { renderingPipeline: RenderingPipelineType.FORWARD });\n    camera.effects.append(effect)\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "coloreditingeffect",
      children: "ColorEditingEffect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ColorEditingEffect接口封装了颜色编辑风格的参数。可帮助开发者实现自定义的图像风格。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Graphics.SpatialRender"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.1(21)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性-4",
      children: "属性"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "exposure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像的曝光度，推荐取值范围[-5，5]，默认值0.0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "contrast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像的对比度，推荐取值范围[0, 2]，默认值1.0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "temperature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像的色温，推荐取值范围[-2, 2]，默认值0.0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像的色调，推荐取值范围[-1，1]，默认值0.0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "saturation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像的饱和度，推荐取值范围[0, 2]，默认值1.0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "vibrance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像的自然饱和度，推荐取值范围[-1, 1]，默认值0.0。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Scene, RenderContext, RenderingPipelineType } from '@kit.ArkGraphics3D';\nimport { spatialRender } from '@kit.SpatialReconKit';\nlet renderContext: RenderContext | null = Scene.getDefaultRenderContext();\n\nif (renderContext != null) {\n  renderContext.loadPlugin(spatialRender.GSPlugin.PLUGIN_ID);\n  Scene.load().then(async (scene: Scene) => {\n    let rf = scene.getResourceFactory();\n    let effect : spatialRender.ColorEditingEffect =\n      await rf.createEffect({ effectId: spatialRender.GSPlugin.COLOR_EDITING_EFFECT_ID }) as spatialRender.ColorEditingEffect;\n    let camera = await rf.createCamera({ name: \"gsCam\", path: \"//gsCam\" }, { renderingPipeline: RenderingPipelineType.FORWARD });\n    camera.effects.append(effect)\n  });\n}\n"
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
747650(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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