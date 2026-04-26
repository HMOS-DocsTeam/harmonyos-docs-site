"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["206305"], {
324531(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_3_d_arkgraphics_3_d_resource_arkgraphics_3_d_shader_resource_arkgraphics_3_d_shader_resource_md_19b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-3-d-arkgraphics-3-d-resource-arkgraphics-3-d-shader-resource-arkgraphics-3-d-shader-resource-md-19b.json
var site_docs_arkgraphics_3_d_arkgraphics_3_d_resource_arkgraphics_3_d_shader_resource_arkgraphics_3_d_shader_resource_md_19b_namespaceObject = JSON.parse('{"id":"arkgraphics-3d/arkgraphics3d-resource/arkgraphics3d-shader-resource/arkgraphics3d-shader-resource","title":".shader资源文件格式要求","description":"ArkGraphics 3D中支持的.shader文件基于JSON格式，书写.shader文件时需符合JSON语法要求。文件包含以下部分：","source":"@site/docs/arkgraphics-3d/arkgraphics3d-resource/arkgraphics3d-shader-resource/arkgraphics3d-shader-resource.md","sourceDirName":"arkgraphics-3d/arkgraphics3d-resource/arkgraphics3d-shader-resource","slug":"/arkgraphics-3d/arkgraphics3d-resource/arkgraphics3d-shader-resource/","permalink":"/harmonyos-docs-site/arkgraphics-3d/arkgraphics3d-resource/arkgraphics3d-shader-resource/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":".shader资源文件格式要求","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkgraphics3d-shader-resource","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"创建并使用环境资源","permalink":"/harmonyos-docs-site/arkgraphics-3d/arkgraphics3d-resource/arkgraphics3d-resource-environment/"},"next":{"title":"ArkGraphics 3D场景动画控制以及管理","permalink":"/harmonyos-docs-site/arkgraphics-3d/arkgraphics3d-animation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-3d/arkgraphics3d-resource/arkgraphics3d-shader-resource/arkgraphics3d-shader-resource.md


const frontMatter = {
	title: '.shader资源文件格式要求',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkgraphics3d-shader-resource',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '.shader资源文件格式要求';

const assets = {

};



const toc = [{
  "value": "compatibility_info",
  "id": "compatibility_info",
  "level": 2
}, {
  "value": "vert",
  "id": "vert",
  "level": 2
}, {
  "value": "frag",
  "id": "frag",
  "level": 2
}, {
  "value": "vertexInputDeclaration",
  "id": "vertexinputdeclaration",
  "level": 2
}, {
  "value": "state",
  "id": "state",
  "level": 2
}, {
  "value": "rasterizationState",
  "id": "rasterizationstate",
  "level": 3
}, {
  "value": "depthStencilState",
  "id": "depthstencilstate",
  "level": 3
}, {
  "value": "colorBlendState",
  "id": "colorblendstate",
  "level": 3
}, {
  "value": "materialMetadata",
  "id": "materialmetadata",
  "level": 2
}, {
  "value": "name",
  "id": "name",
  "level": 3
}, {
  "value": "customProperties",
  "id": "customproperties",
  "level": 3
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    pre: "pre",
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
        id: "shader资源文件格式要求",
        children: ".shader资源文件格式要求"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkGraphics 3D中支持的.shader文件基于JSON格式，书写.shader文件时需符合JSON语法要求。文件包含以下部分："
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "compatibility_info",
      children: "compatibility_info"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "类型：object"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "说明：用于向引擎声明shader版本兼容性信息。统一使用如下字段："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"compatibility_info\": { \"version\": \"22.00\", \"type\": \"shader\" }\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "表示这是引擎22.00版本下的shader描述文件。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vert",
      children: "vert"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "类型：string"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "说明：指定使用该shader的DrawCall中使用的vertex shader文件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "默认值："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"vert\": \"3dshaders://shader/core3d_dm_fw.vert.spv\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "自定义路径："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"vert\": \"appshaders://yourDir/yourShader.vert.spv\"\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其中yourDir/yourShader.vert.spv是用户使用的shader文件在文件沙箱中的路径。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "frag",
      children: "frag"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "类型：string"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "说明：指定使用该shader的DrawCall中使用的fragment shader文件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "默认值："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"frag\": \"3dshaders://shader/core3d_dm_fw.frag.spv\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "自定义路径："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"frag\": \"appshaders://yourDir/yourShader.frag.spv\"\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其中yourDir/yourShader.frag.spv是用户使用的shader文件在文件沙箱中的路径。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vertexinputdeclaration",
      children: "vertexInputDeclaration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "类型：string"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "说明：指定输入vertex数据中的attributes排布方式。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前限制：渲染引擎暂不支持自定义attributes排布，保持默认值即可。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "默认值："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"vertexInputDeclaration\": \"3dvertexinputdeclarations://core3d_dm_fw.shadervid\"\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "state",
      children: "state"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：object"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "说明：指定本次渲染管线中的pipeline state，包括rasterizationState、depthStencilState、colorBlendState三部分："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rasterizationstate",
      children: "rasterizationState"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于表示光栅化过程中的属性配置，具体包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "enableDepthClamp：用于控制渲染过程中的depth写入时是否进行clamp，true表示进行clamp，false表示不进行clamp。当前此属性应设置为false。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "enableDepthBias：用于控制渲染过程中的depth写入时是否进行Bias计算，true表示进行Bias计算，false表示不进行Bias计算。当前此属性应设置为false。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "enableRasterizerDiscard：用于控制本次drawCall的fragment阶段是否跳过，true表示跳过，false表示不跳过。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "polygonMode：用于指定光栅化渲染中的三角形填充方式，可取值及含义见下表。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "可取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"fill\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "全填充模式，将三角形内部所有像素填充颜色。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"line\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "线填充模式，只绘制三角形的边线。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"point\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "点填充模式，只绘制三角形的顶点。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "cullModeFlags：用于指定光栅化渲染中的culling方式，可取值及含义见下表。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "可取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"back\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背面剔除，不渲染三角形的背面。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"front\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "正面剔除，不渲染三角形的正面。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"none\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "不进行剔除，正面和背面都渲染。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"front_and_back\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "全部剔除，正面和背面都不渲染。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "frontFace：用于指定三角面的正面如何定义，可取值及含义见下表。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "可取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "顶点排序方式"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"counter_clockwise\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "逆时针"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "按逆时针顺序排列的三角形被认为是正面。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"clockwise\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "顺时针"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "按顺时针顺序排列的三角形被认为是正面。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "depthstencilstate",
      children: "depthStencilState"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于表示深度测试和模板测试的状态属性，具体包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "enableDepthTest：用于控制是否开启深度测试，true表示开启，false表示关闭。若开启深度测试则非透明物体将按照深度呈现遮挡关系，若关闭深度测试则物体按照绘制顺序排序。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "enableDepthWrite：用于物体绘制时深度附件是否写入该物体的深度值，true表示写入，false表示不写入。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "enableDepthBoundsTest：在深度测试的基础上再规定了通过深度测试的最小值和最大值范围，在此范围之外的值不通过深度测试，true表示开启，false表示关闭。当前此属性应设置为false。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "enableStencilTest：用于控制是否开启模板测试，true表示开启，false表示关闭。若开启模板测试则通过模板测试的物体会被绘制，没有通过模板测试的物体不被绘制，若关闭则不进行模板测试。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "depthCompareOp：用于控制深度测试的比较方式，可取值及含义见下表。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "可取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"never\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "永不通过深度测试，像素不会被绘制。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"less\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当前像素深度小于已有深度值时通过测试，像素被绘制。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"equal\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当前像素深度等于已有深度值时通过测试，像素被绘制。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"less_or_equal\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当前像素深度小于或等于已有深度值时通过测试，像素被绘制。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"greater\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当前像素深度大于已有深度值时通过测试，像素被绘制。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"not_equal\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当前像素深度不等于已有深度值时通过测试，像素被绘制。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"greater_or_equal\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当前像素深度大于或等于已有深度值时通过测试，像素被绘制。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"always\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "总是通过深度测试，像素总是被绘制。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "colorblendstate",
      children: "colorBlendState"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于指定本次渲染中渲染源与渲染目标的混合状态属性。包括colorAttachments，用于指定本次渲染中颜色附件的混合状态属性。colorAttachments具体包括如下几项："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "enableBlend：渲染源与渲染目标的混合是否开启，true表示开启混合，false表示关闭混合。若开启则渲染源与渲染目标以指定方式混合，若不开启则不进行混合。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "colorWriteMask：指定渲染颜色附件中通道掩码，若指定了通道掩码则该通道将被计算混合，若不指定则不计算混合，可取值有r_bit、g_bit、b_bit、a_bit，各个通道可以用|符号取并集，可取值及含义见下表。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "可取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"r_bit\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "红色通道允许写入或参与混合。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"g_bit\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "绿色通道允许写入或参与混合。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"b_bit\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "蓝色通道允许写入或参与混合。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"a_bit\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "透明通道允许写入或参与混合。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "srcColorBlendFactor: 指定渲染源颜色通道的混合因子，可取值及含义见下表。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "可取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "因子"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "结果"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "应用场景"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"zero\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源颜色×0=0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "不显示新颜色，只保留背景。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源颜色×1=源颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色完全显示，覆盖背景。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"src_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源颜色×源颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色按自身颜色比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_src_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-源颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源颜色×(1-源颜色)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色按自身剩余颜色比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"dst_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源颜色×目标颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色按背景颜色比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_dst_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-目标颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源颜色×(1-目标颜色)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色按背景剩余颜色比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"src_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源颜色×源Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色按自身Alpha比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_src_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-源Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源颜色×(1-源Alpha)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色按自身Alpha剩余比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"dst_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源颜色×目标Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色按背景Alpha比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_dst_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-目标Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源颜色×(1-目标Alpha)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色按背景Alpha剩余比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"constant_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "固定颜色常量"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源颜色×固定颜色常量"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色按固定颜色比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_constant_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-固定颜色常量"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源颜色×(1-固定颜色常量)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色按固定颜色剩余比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"constant_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "固定Alpha常量"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源颜色×固定Alpha常量"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色按固定Alpha比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_constant_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-固定Alpha常量"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源颜色×(1-固定Alpha常量)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色按固定Alpha剩余比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"src_alpha_saturate\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "min(源Alpha, 1-目标Alpha)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源颜色×min(源Alpha, 1-目标Alpha)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色按源Alpha与背景剩余Alpha最小值比例混合显示，避免叠加过强。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"src1_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "第二源颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源颜色×第二源颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色按第二源颜色比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_src1_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-第二源颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源颜色×(1-第二源颜色)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色按第二源颜色剩余比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"src1_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "第二源Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源颜色×第二源Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色按第二源Alpha比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_src1_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-第二源Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源颜色×(1-第二源Alpha)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色按第二源Alpha剩余比例混合显示。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "dstColorBlendFactor：指定渲染目标颜色通道的混合因子，可取值及含义见下表。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "可取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "因子"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "结果"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "应用场景"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"zero\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标颜色×0=0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "不显示背景颜色，相当于背景清零。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标颜色×1=目标颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "保留背景颜色原样，不受影响。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"src_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标颜色×源颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景按新颜色比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_src_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-源颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标颜色×(1-源颜色)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景按新颜色剩余比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"dst_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标颜色×目标颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景按自身比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_dst_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-目标颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标颜色×(1-目标颜色)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景按自身剩余比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"src_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标颜色×源Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景按源Alpha比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_src_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-源Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标颜色×(1-源Alpha)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景按源Alpha剩余比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"dst_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标颜色×目标Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景按自身Alpha比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_dst_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-目标Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标颜色×(1-目标Alpha)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景按自身Alpha剩余比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"constant_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "固定颜色常量"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标颜色×固定颜色常量"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景按固定颜色比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_constant_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-固定颜色常量"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标颜色×(1-固定颜色常量)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景按固定颜色剩余比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"constant_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "固定Alpha常量"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标颜色×固定Alpha常量"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景按固定Alpha比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_constant_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-固定Alpha常量"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标颜色×(1-固定Alpha常量)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景按固定Alpha剩余比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"src_alpha_saturate\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "min(源Alpha, 1-目标Alpha)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标颜色×min(源Alpha, 1-目标Alpha)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景按源Alpha与背景剩余Alpha最小值比例混合显示，避免叠加过强。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"src1_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "第二源颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标颜色×第二源颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景按第二源颜色比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_src1_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-第二源颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标颜色×(1-第二源颜色)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景按第二源颜色剩余比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"src1_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "第二源Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标颜色×第二源Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景按第二源Alpha比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_src1_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-第二源Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标颜色×(1-第二源Alpha)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景按第二源Alpha剩余比例混合显示。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "colorBlendOp：指定渲染源和渲染目标颜色通道的混合方式，可取值及含义见下表。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "可取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"add\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源颜色+目标颜色。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"subtract\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源颜色-目标颜色。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"reverse_subtract\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标颜色-源颜色。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"min\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "取源颜色与目标颜色的最小值。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"max\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "取源颜色与目标颜色的最大值。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "srcAlphaBlendFactor：指定渲染源透明通道的混合因子，可取值及含义见下表。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "可取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "因子"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "结果"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "应用场景"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"zero\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源Alpha×0=0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "不显示新颜色透明度，相当于透明度清零。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源Alpha×1=源Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "保留新颜色透明度原样，不受影响。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"src_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源Alpha×源颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色透明度按自身颜色比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_src_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-源颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源Alpha×(1-源颜色)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色透明度按自身剩余颜色比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"dst_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源Alpha×目标颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色透明度按背景颜色比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_dst_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-目标颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源Alpha×(1-目标颜色)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色透明度按背景剩余颜色比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"src_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源Alpha×源Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色透明度按自身Alpha比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_src_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-源Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源Alpha×(1-源Alpha)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色透明度按自身剩余Alpha比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"dst_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源Alpha×目标Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色透明度按背景Alpha比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_dst_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-目标Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源Alpha×(1-目标Alpha)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色透明度按背景剩余Alpha比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"constant_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "固定颜色常量"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源Alpha×固定颜色常量"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色透明度按固定颜色比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_constant_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-固定颜色常量"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源Alpha×(1-固定颜色常量)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色透明度按固定颜色剩余比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"constant_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "固定Alpha常量"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源Alpha×固定Alpha常量"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色透明度按固定Alpha比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_constant_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-固定Alpha常量"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源Alpha×(1-固定Alpha常量)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色透明度按固定Alpha剩余比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"src_alpha_saturate\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "min(源Alpha, 1-目标Alpha)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源Alpha×min(源Alpha, 1-目标Alpha)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色透明度按源Alpha与背景剩余Alpha最小值比例混合显示，避免叠加过强。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"src1_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "第二源颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源Alpha×第二源颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色透明度按第二源颜色比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_src1_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-第二源颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源Alpha×(1-第二源颜色)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色透明度按第二源颜色剩余比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"src1_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "第二源Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源Alpha×第二源Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色透明度按第二源Alpha比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_src1_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-第二源Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源Alpha×(1-第二源Alpha)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新颜色透明度按第二源Alpha剩余比例混合显示。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "dstAlphaBlendFactor：指定渲染目标透明通道的混合因子，可取值及含义见下表。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "可取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "因子"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "结果"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "应用场景"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"zero\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标Alpha×0=0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "不显示背景透明度，相当于透明度清零。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标Alpha×1=目标Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "保留背景透明度原样，不受影响。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"src_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标Alpha×源颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景透明度按新颜色比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_src_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-源颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标Alpha×(1-源颜色)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景透明度按新颜色剩余比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"dst_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标Alpha×目标颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景透明度按自身比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_dst_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-目标颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标Alpha×(1-目标颜色)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景透明度按自身剩余比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"src_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标Alpha×源Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景透明度按源Alpha比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_src_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-源Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标Alpha×(1-源Alpha)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景透明度按源Alpha剩余比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"dst_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标Alpha×目标Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景透明度按自身Alpha比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_dst_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-目标Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标Alpha×(1-目标Alpha)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景透明度按自身剩余Alpha比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"constant_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "固定颜色常量"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标Alpha×固定颜色常量"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景透明度按固定颜色比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_constant_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-固定颜色常量"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标Alpha×(1-固定颜色常量)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景透明度按固定颜色剩余比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"constant_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "固定Alpha常量"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标Alpha×固定Alpha常量"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景透明度按固定Alpha比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_constant_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-固定Alpha常量"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标Alpha×(1-固定Alpha常量)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景透明度按固定Alpha剩余比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"src_alpha_saturate\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "min(源Alpha, 1-目标Alpha)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标Alpha×min(源Alpha, 1-目标Alpha)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景透明度按源Alpha与背景剩余Alpha最小值比例混合显示，避免叠加过强。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"src1_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "第二源颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标Alpha×第二源颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景透明度按第二源颜色比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_src1_color\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-第二源颜色"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标Alpha×(1-第二源颜色)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景透明度按第二源颜色剩余比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"src1_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "第二源Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标Alpha×第二源Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景透明度按第二源Alpha比例混合显示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"one_minus_src1_alpha\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1-第二源Alpha"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标Alpha×(1-第二源Alpha)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "背景透明度按第二源Alpha剩余比例混合显示。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "alphaBlendOp：指定渲染源和渲染目标透明通道的混合方式，可取值及含义见下表。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "可取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"add\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源alpha+目标alpha。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"subtract\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源alpha-目标alpha。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"reverse_subtract\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标alpha-源alpha。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"min\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "取源alpha与目标alpha的最小值。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"max\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "取源alpha与目标alpha的最大值。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "materialmetadata",
      children: "materialMetadata"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：array<MaterialMetadata>"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "说明：指定渲染材质的元数据。MaterialMetadata对象包含材质名称name及自定义属性customProperties。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "name",
      children: "name"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于标识材质组件名称，当前有效值为\"MaterialComponent\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "customproperties",
      children: "customProperties"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于指定渲染中传入的自定义属性。包括data数组，用于指定渲染中传入的自定义数据。data数组中的对象包含以下属性："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "name：用于指定渲染中传入的自定义数据名称与自定义渲染中的数据名对应。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "displayName：用于指定3D编辑器中显示的名称。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "type：用于指定数据类型，可取值及含义见下表。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "可取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"vec4\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "4维向量[x, y, z, w]。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"vec3\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "3维向量[x, y, z]。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"vec2\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "2维向量[x, y]。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"float\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "浮点数。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\"int\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "整数。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "value：属性默认值。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"compatibility_info\" : { \"version\" : \"22.00\", \"type\" : \"shader\" },\n    \"vert\": \"3dshaders://shader/core3d_dm_fw.vert.spv\",\n    \"frag\": \"appshaders://custom_shader/custom_material_sample.frag.spv\",\n    \"vertexInputDeclaration\": \"3dvertexinputdeclarations://core3d_dm_fw.shadervid\",\n    \"state\": {\n        \"rasterizationState\": {\n            \"enableDepthClamp\": false,\n            \"enableDepthBias\": false,\n            \"enableRasterizerDiscard\": false,\n            \"polygonMode\": \"fill\",\n            \"cullModeFlags\": \"back\",\n            \"frontFace\": \"counter_clockwise\"\n        },\n        \"depthStencilState\": {\n            \"enableDepthTest\": true,\n            \"enableDepthWrite\": true,\n            \"enableDepthBoundsTest\": false,\n            \"enableStencilTest\": false,\n            \"depthCompareOp\": \"less_or_equal\"\n        },\n        \"colorBlendState\": {\n            \"colorAttachments\": [\n                {\n                    \"enableBlend\": true,\n                    \"colorWriteMask\": \"r_bit|g_bit|b_bit|a_bit\",\n                    \"srcColorBlendFactor\": \"one\",\n                    \"dstColorBlendFactor\": \"one_minus_src_alpha\",\n                    \"colorBlendOp\": \"add\",\n                    \"srcAlphaBlendFactor\": \"one\",\n                    \"dstAlphaBlendFactor\": \"one_minus_src_alpha\",\n                    \"alphaBlendOp\": \"add\"\n                }\n            ]\n        }\n    },\n    \"materialMetadata\": [\n        {\n            \"name\": \"MaterialComponent\",\n            \"customProperties\": [\n                {\n                    \"data\": [\n                        {\n                            \"name\": \"vec_1\",\n                            \"displayName\": \"Color\",\n                            \"type\": \"vec4\",\n                            \"value\" : [1.0,1.0,1.0,1.0]\n                        },\n                        {\n                            \"name\": \"time\",\n                            \"displayName\": \"Time\",\n                            \"type\": \"float\",\n                            \"value\": 0.0\n                        },\n                        {\n                            \"name\": \"dof\",\n                            \"displayName\": \"Dof\",\n                            \"type\": \"int\",\n                            \"value\": 1\n                        },\n                        {\n                            \"name\": \"motionblur\",\n                            \"displayName\": \"MotionBlur\",\n                            \"type\": \"int\",\n                            \"value\": 1\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}\n"
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