"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["704901"], {
995346(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ar_engine_api_arengine_capi_arengine_header_struct_arengine_header_arengine_header_file_arengine_header_file_md_35b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ar-engine-api-arengine-capi-arengine-header-struct-arengine-header-arengine-header-file-arengine-header-file-md-35b.json
var site_docs_ref_ar_engine_api_arengine_capi_arengine_header_struct_arengine_header_arengine_header_file_arengine_header_file_md_35b_namespaceObject = JSON.parse('{"id":"ar-engine-api/arengine-capi/arengine-header-struct/arengine-header/arengine-header-file/arengine-header-file","title":"ar_engine_core.h","description":"概述","source":"@site/docs-ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-header/arengine-header-file/arengine-header-file.md","sourceDirName":"ar-engine-api/arengine-capi/arengine-header-struct/arengine-header/arengine-header-file","slug":"/ar-engine-api/arengine-capi/arengine-header-struct/arengine-header/arengine-header-file/arengine-header-file","permalink":"/harmonyos-docs-site/ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-header/arengine-header-file/arengine-header-file","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"ar_engine_core.h","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-header-file","kit":"图形","last_updated":"2026-04-22","slug":"arengine-header-file"},"sidebar":"ref","previous":{"title":"AR Engine","permalink":"/harmonyos-docs-site/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine"},"next":{"title":"AREngine_ARAugmentedImageSource","permalink":"/harmonyos-docs-site/ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-araugmentedimagesource/arengine-struct-araugmentedimagesource"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-header/arengine-header-file/arengine-header-file.md


const frontMatter = {
	title: 'ar_engine_core.h',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-header-file',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'arengine-header-file'
};
const contentTitle = 'ar_engine_core.h';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "结构体",
  "id": "结构体",
  "level": 3
}, {
  "value": "宏定义",
  "id": "宏定义",
  "level": 3
}, {
  "value": "类型定义",
  "id": "类型定义",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
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
        id: "ar_engine_coreh",
        children: "ar_engine_core.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本声明用于访问AR Engine（AR引擎服务）的API。提供AR（增强现实）能力的相关接口。AR的基础核心能力包含：环境识别与运动跟踪能力、图像识别与跟踪能力、人脸识别与跟踪能力和人体骨骼识别与跟踪能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <ar/ar_engine_core.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libarengine_ndk.z.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AREngine.Core"]
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
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine",
        children: "AR Engine"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-araugmentedimagesource/arengine-struct-araugmentedimagesource",
              children: "AREngine_ARAugmentedImageSource"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-clipplanedistance/arengine-struct-clipplanedistance",
              children: "AREngine_ClipPlaneDistance"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "裁剪平面距离数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-arsemanticdensepointdata/arengine-struct-arsemanticdensepointdata",
              children: "AREngine_ARSemanticDensePointData"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高精几何重建对象的稠密点云数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-arsemanticdensecubedata/arengine-struct-arsemanticdensecubedata",
              children: "AREngine_ARSemanticDenseCubeData"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高精几何重建对象的立方体数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "宏定义",
      children: "宏定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_aabb_point_size",
              children: "ARENGINE_AABB_POINT_SIZE"
            }), " = 6"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包围盒坐标集数组大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_distortion_count",
              children: "ARENGINE_DISTORTION_COUNT"
            }), " = 5"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机畸变参数的个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_pose_raw_size",
              children: "ARENGINE_POSE_RAW_SIZE"
            }), " = 7"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "位姿数据数组大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_view_matrix_size",
              children: "ARENGINE_VIEW_MATRIX_SIZE"
            }), " = 16"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "变换矩阵数组大小。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型定义",
      children: "类型定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_aranchor",
              children: "AREngine_ARAnchor"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_aranchor",
              children: "AREngine_ARAnchor"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "锚点对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_aranchorlist",
              children: "AREngine_ARAnchorList"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_aranchorlist",
              children: "AREngine_ARAnchorList"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "锚点对象列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_araugmentedimage",
              children: "AREngine_ARAugmentedImage"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_araugmentedimage",
              children: "AREngine_ARAugmentedImage"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跟踪图像对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_araugmentedimagedatabase",
              children: "AREngine_ARAugmentedImageDatabase"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_araugmentedimagedatabase",
              children: "AREngine_ARAugmentedImageDatabase"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跟踪图像数据库对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcamera",
              children: "AREngine_ARCamera"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcamera",
              children: "AREngine_ARCamera"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前帧对应的相机信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcameraconfig",
              children: "AREngine_ARCameraConfig"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcameraconfig",
              children: "AREngine_ARCameraConfig"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机的配置信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcameraintrinsics",
              children: "AREngine_ARCameraIntrinsics"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcameraintrinsics",
              children: "AREngine_ARCameraIntrinsics"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机内参。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于配置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), "的能力项（使用哪些能力、模式等）。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arface",
              children: "AREngine_ARFace"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arface",
              children: "AREngine_ARFace"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跟踪的人脸对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arfacegeometry",
              children: "AREngine_ARFaceGeometry"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arfacegeometry",
              children: "AREngine_ARFaceGeometry"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "人脸拓扑结构对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arfaceblendshapes",
              children: "AREngine_ARFaceBlendShapes"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arfaceblendshapes",
              children: "AREngine_ARFaceBlendShapes"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "人脸微表情对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arframe",
              children: "AREngine_ARFrame"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arframe",
              children: "AREngine_ARFrame"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AR Engine处理的一帧数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arhitresult",
              children: "AREngine_ARHitResult"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arhitresult",
              children: "AREngine_ARHitResult"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "命中检测结果对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arhitresultlist",
              children: "AREngine_ARHitResultList"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arhitresultlist",
              children: "AREngine_ARHitResultList"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "命中检测结果列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arimage",
              children: "AREngine_ARImage"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arimage",
              children: "AREngine_ARImage"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机视频流帧对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arplane",
              children: "AREngine_ARPlane"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arplane",
              children: "AREngine_ARPlane"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "平面对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpoint",
              children: "AREngine_ARPoint"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpoint",
              children: "AREngine_ARPoint"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "点对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpointcloud",
              children: "AREngine_ARPointCloud"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpointcloud",
              children: "AREngine_ARPointCloud"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可跟踪的3D点云的集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpose",
              children: "AREngine_ARPose"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpose",
              children: "AREngine_ARPose"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "位姿对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arscenemesh",
              children: "AREngine_ARSceneMesh"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arscenemesh",
              children: "AREngine_ARSceneMesh"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "环境mesh数据的集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsemanticdensedata",
              children: "AREngine_ARSemanticDenseData"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsemanticdensedata",
              children: "AREngine_ARSemanticDenseData"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示高精几何重建对象数据的集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "管理AR Engine的系统状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artarget",
              children: "AREngine_ARTarget"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artarget",
              children: "AREngine_ARTarget"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "物体对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artrackable",
              children: "AREngine_ARTrackable"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artrackable",
              children: "AREngine_ARTrackable"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可跟踪对象，如点、平面等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artrackablelist",
              children: "AREngine_ARTrackableList"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artrackablelist",
              children: "AREngine_ARTrackableList"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可跟踪对象列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void (*", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_photoavailablecallback",
              children: "HMS_AREngine_PhotoAvailableCallback"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-oh-nativebuffer/capi-vulkan-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), " *photoBuffer)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出拍照流图像回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arbody",
              children: "AREngine_ARBody"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arbody",
              children: "AREngine_ARBody"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "人体对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_featuretype",
              children: "AREngine_FeatureType"
            }), " {  ARENGINE_FEATURE_TYPE_SLAM = 0,  ARENGINE_FEATURE_TYPE_DEPTH = 1,  ARENGINE_FEATURE_TYPE_MESH = 2,  ARENGINE_FEATURE_TYPE_IMAGE = 3,  ARENGINE_FEATURE_TYPE_SEMANTIC_DENSE = 4,  ARENGINE_FEATURE_TYPE_SEMANTIC = 5,  ARENGINE_FEATURE_TYPE_FACE = 6,  ARENGINE_FEATURE_TYPE_BODY = 7  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AR特性类别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_araddaugmentedimagereason",
              children: "AREngine_ARAddAugmentedImageReason"
            }), " {  ARENGINE_ADD_AUGMENTED_IMAGE_REASON_NONE = 0,  ARENGINE_ADD_AUGMENTED_IMAGE_REASON_SIZE_NOT_MATCH = 1,  ARENGINE_ADD_AUGMENTED_IMAGE_REASON_LIGHT_ANOMALY = 2,  ARENGINE_ADD_AUGMENTED_IMAGE_REASON_FEATURE_LIMIT = 3,  ARENGINE_ADD_AUGMENTED_IMAGE_REASON_OTHER = 4  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跟踪失败的可能原因。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_aranimojiblendshape",
              children: "AREngine_ARAnimojiBlendShape"
            }), " {  ARENGINE_ARANIMOJI_EYE_BLINK_LEFT = 0,  ARENGINE_ARANIMOJI_EYE_LOOK_DOWN_LEFT = 1,  ARENGINE_ARANIMOJI_EYE_LOOK_IN_LEFT = 2,  ARENGINE_ARANIMOJI_EYE_LOOK_OUT_LEFT = 3,  ARENGINE_ARANIMOJI_EYE_LOOK_UP_LEFT = 4,  ARENGINE_ARANIMOJI_EYE_SQUINT_LEFT = 5,  ARENGINE_ARANIMOJI_EYE_WIDE_LEFT = 6,  ARENGINE_ARANIMOJI_EYE_BLINK_RIGHT = 7,  ARENGINE_ARANIMOJI_EYE_LOOK_DOWN_RIGHT = 8,  ARENGINE_ARANIMOJI_EYE_LOOK_IN_RIGHT = 9,  ARENGINE_ARANIMOJI_EYE_LOOK_OUT_RIGHT = 10,  ARENGINE_ARANIMOJI_EYE_LOOK_UP_RIGHT = 11,  ARENGINE_ARANIMOJI_EYE_SQUINT_RIGHT = 12,  ARENGINE_ARANIMOJI_EYE_WIDE_RIGHT = 13,  ARENGINE_ARANIMOJI_JAW_FORWARD = 14,  ARENGINE_ARANIMOJI_JAW_LEFT = 15,  ARENGINE_ARANIMOJI_JAW_RIGHT = 16,  ARENGINE_ARANIMOJI_JAW_OPEN = 17,  ARENGINE_ARANIMOJI_MOUTH_FUNNEL = 18,  ARENGINE_ARANIMOJI_MOUTH_PUCKER = 19,  ARENGINE_ARANIMOJI_MOUTH_LEFT = 20,  ARENGINE_ARANIMOJI_MOUTH_RIGHT = 21,  ARENGINE_ARANIMOJI_MOUTH_SMILE_LEFT = 22,  ARENGINE_ARANIMOJI_MOUTH_SMILE_RIGHT = 23,  ARENGINE_ARANIMOJI_MOUTH_FROWN_LEFT = 24,  ARENGINE_ARANIMOJI_MOUTH_FROWN_RIGHT = 25,  ARENGINE_ARANIMOJI_MOUTH_DIMPLE_LEFT = 26,  ARENGINE_ARANIMOJI_MOUTH_DIMPLE_RIGHT = 27,  ARENGINE_ARANIMOJI_MOUTH_STRETCH_LEFT = 28,  ARENGINE_ARANIMOJI_MOUTH_STRETCH_RIGHT = 29,  ARENGINE_ARANIMOJI_MOUTH_ROLL_LOWER = 30,  ARENGINE_ARANIMOJI_MOUTH_ROLL_UPPER = 31,  ARENGINE_ARANIMOJI_MOUTH_SHRUG_LOWER = 32,  ARENGINE_ARANIMOJI_MOUTH_SHRUG_UPPER = 33,  ARENGINE_ARANIMOJI_MOUTH_UPPER_UP = 34,  ARENGINE_ARANIMOJI_MOUTH_LOWER_DOWN = 35,  ARENGINE_ARANIMOJI_MOUTH_LOWER_OUT = 36,  ARENGINE_ARANIMOJI_BROW_DOWN_LEFT = 37,  ARENGINE_ARANIMOJI_BROW_DOWN_RIGHT = 38,  ARENGINE_ARANIMOJI_BROW_INNER_UP = 39,  ARENGINE_ARANIMOJI_BROW_OUTER_UP_LEFT = 40,  ARENGINE_ARANIMOJI_BROW_OUTER_UP_RIGHT = 41,  ARENGINE_ARANIMOJI_CHEEK_PUFF = 42,  ARENGINE_ARANIMOJI_CHEEK_SQUINT_LEFT = 43,  ARENGINE_ARANIMOJI_CHEEK_SQUINT_RIGHT = 44,  ARENGINE_ARANIMOJI_FROWN_NOSE_MOUTH_UP = 45,  ARENGINE_ARANIMOJI_TONGUE_IN = 46,  ARENGINE_ARANIMOJI_TONGUE_OUT_SLIGHT = 47,  ARENGINE_ARANIMOJI_TONGUE_LEFT = 48,  ARENGINE_ARANIMOJI_TONGUE_RIGHT = 49,  ARENGINE_ARANIMOJI_TONGUE_UP = 50,  ARENGINE_ARANIMOJI_TONGUE_DOWN = 51,  ARENGINE_ARANIMOJI_TONGUE_LEFT_UP = 52,  ARENGINE_ARANIMOJI_TONGUE_LEFT_DOWN = 53,  ARENGINE_ARANIMOJI_TONGUE_RIGHT_UP = 54,  ARENGINE_ARANIMOJI_TONGUE_RIGHT_DOWN = 55,  ARENGINE_ARANIMOJI_LEFT_EYEBALL_LEFT = 56,  ARENGINE_ARANIMOJI_LEFT_EYEBALL_RIGHT = 57,  ARENGINE_ARANIMOJI_LEFT_EYEBALL_UP = 58,  ARENGINE_ARANIMOJI_LEFT_EYEBALL_DOWN = 59,  ARENGINE_ARANIMOJI_RIGHT_EYEBALL_LEFT = 60,  ARENGINE_ARANIMOJI_RIGHT_EYEBALL_RIGHT = 61,  ARENGINE_ARANIMOJI_RIGHT_EYEBALL_UP = 62,  ARENGINE_ARANIMOJI_RIGHT_EYEBALL_DOWN = 63  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "微表情类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_aranimojitrianglelabel",
              children: "AREngine_ARAnimojiTriangleLabel"
            }), " {  ARENGINE_TRIANGLE_LABEL_NON_FACE = -1,  ARENGINE_TRIANGLE_LABEL_FACE_OTHER = 0,  ARENGINE_TRIANGLE_LABEL_LOWER_LIP = 1,  ARENGINE_TRIANGLE_LABEL_UPPER_LIP = 2,  ARENGINE_TRIANGLE_LABEL_LEFT_EYE = 3,  ARENGINE_TRIANGLE_LABEL_RIGHT_EYE = 4,  ARENGINE_TRIANGLE_LABEL_LEFT_BROW = 5,  ARENGINE_TRIANGLE_LABEL_RIGHT_BROW = 6,  ARENGINE_TRIANGLE_LABEL_BROW_CENTER = 7,  ARENGINE_TRIANGLE_LABEL_NOSE = 8  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "人脸三角形面片标签。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcameralensfacing",
              children: "AREngine_ARCameraLensFacing"
            }), " {  ARENGINE_CAMERA_FACING_REAR = 0,  ARENGINE_CAMERA_FACING_FRONT = 1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置摄像机镜头的朝向。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfidencelevel",
              children: "AREngine_ARConfidenceLevel"
            }), " {  ARENGINE_DEPTH_CONFIDENCE_LOW = 0,  ARENGINE_DEPTH_CONFIDENCE_MEDIUM = 1,  ARENGINE_DEPTH_CONFIDENCE_HIGH = 2  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "深度置信度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_ardepthmode",
              children: "AREngine_ARDepthMode"
            }), " {  ARENGINE_DEPTH_MODE_DISABLED = 0,  ARENGINE_DEPTH_MODE_AUTOMATIC = 1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "深度模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arfocusmode",
              children: "AREngine_ARFocusMode"
            }), " {  ARENGINE_FOCUS_MODE_FIXED = 0,  ARENGINE_FOCUS_MODE_AUTO = 1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对焦模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arimagedatabasemode",
              children: "AREngine_ARImageDatabaseMode"
            }), " {  ARENGINE_ADD_NORMAL = 0,  ARENGINE_ADD_AUTO = 1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于跟踪的特征库图像添加方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arimageformat",
              children: "AREngine_ARImageFormat"
            }), " {  ARENGINE_IMAGE_UNKNOWN = 0,  ARENGINE_IMAGE_YUV_420_888 = 2,  ARENGINE_IMAGE_Y_8 = 3,  ARENGINE_IMAGE_Y_16 = 4  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像数据格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arimagestreammode",
              children: "AREngine_ARImageStreamMode"
            }), " {  ARENGINE_IMAGE_STREAM_MODE_PREVIEW = 0,  ARENGINE_IMAGE_STREAM_MODE_PREVIEW_AND_PHOTO = 1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置图片数据流模式，默认情况下系统设置为ARENGINE_IMAGE_STREAM_MODE_PREVIEW。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_armeshmode",
              children: "AREngine_ARMeshMode"
            }), " {  ARENGINE_MESH_MODE_DISABLED = 0,  ARENGINE_MESH_MODE_ENABLE=1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mesh启用模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_armultifacemode",
              children: "AREngine_ARMultiFaceMode"
            }), " {  ARENGINE_MULTIFACE_DISABLE = 0x300,  ARENGINE_MULTIFACE_ENABLE = 0x800  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多人脸检测模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arplanefindingmode",
              children: "AREngine_ARPlaneFindingMode"
            }), " {  ARENGINE_PLANE_FINDING_MODE_DISABLED = 0,  ARENGINE_PLANE_FINDING_MODE_HORIZONTAL = 1,  ARENGINE_PLANE_FINDING_MODE_VERTICAL = 2,  ARENGINE_PLANE_FINDING_MODE_HORIZONTAL_AND_VERTICAL = 3  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "平面搜索模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arplanetype",
              children: "AREngine_ARPlaneType"
            }), " {  ARENGINE_PLANE_FACING_HORIZONTAL_UPWARD = 0,  ARENGINE_PLANE_FACING_HORIZONTAL_DOWNWARD = 1,  ARENGINE_PLANE_FACING_VERTICAL = 2,  ARENGINE_PLANE_FACING_INVALID = 3  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "平面类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpointorientationmode",
              children: "AREngine_ARPointOrientationMode"
            }), " {  ARENGINE_POINT_ORIENTATION_INITIALIZED_TO_IDENTITY = 0,  ARENGINE_POINT_ORIENTATION_ESTIMATED_SURFACE_NORMAL = 1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "朝向模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arposemode",
              children: "AREngine_ARPoseMode"
            }), " {  ARENGINE_POSE_MODE_GRAVITY = 0,  ARENGINE_POSE_MODE_GRAVITY_HEADING = 1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AR Engine输出的相机位姿对齐格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arposetype",
              children: "AREngine_ARPoseType"
            }), " {  ARENGINE_POSE_TYPE_IDENTITY = 0,  ARENGINE_POSE_TYPE_ROTATE_90 = 1,  ARENGINE_POSE_TYPE_ROTATE_180 = 2,  ARENGINE_POSE_TYPE_ROTATE_270 = 3  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "位姿类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpowermode",
              children: "AREngine_ARPowerMode"
            }), " {  ARENGINE_POWER_MODE_NORMAL = 0,  ARENGINE_POWER_MODE_POWER_SAVING = 1,  ARENGINE_POWER_MODE_PERFORMANCE_FIRST = 2,  ARENGINE_POWER_MODE_BOOST = 3 ,  ARENGINE_POWER_MODE_ULTRA_POWER_SAVING = 11  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "电源功耗模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpreviewmode",
              children: "AREngine_ARPreviewMode"
            }), " {  ARENGINE_PREVIEW_MODE_ENABLED = 0,  ARENGINE_PREVIEW_MODE_DISABLED = 1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预览模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsemanticdensemode",
              children: "AREngine_ARSemanticDenseMode"
            }), " {  ARENGINE_SEMANTIC_DENSE_MODE_DISABLED = 0,  ARENGINE_SEMANTIC_DENSE_MODE_NORMAL = 1,  ARENGINE_SEMANTIC_DENSE_MODE_CUBE_VOLUME = 2,  ARENGINE_SEMANTIC_DENSE_MODE_CUBE_SPACE = 3  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高精几何重建识别模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsemanticmode",
              children: "AREngine_ARSemanticMode"
            }), " {  ARENGINE_SEMANTIC_MODE_NONE = 0,  ARENGINE_SEMANTIC_MODE_PLANE = 1,  ARENGINE_SEMANTIC_MODE_TARGET = 2  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "语义模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsemanticplanelabel",
              children: "AREngine_ARSemanticPlaneLabel"
            }), " {  ARENGINE_PLANE_UNKNOWN = 0,  ARENGINE_PLANE_WALL = 1,  ARENGINE_PLANE_FLOOR = 2,  ARENGINE_PLANE_SEAT = 3,  ARENGINE_PLANE_TABLE = 4,  ARENGINE_PLANE_CEILING = 5,  ARENGINE_PLANE_DOOR = 6,  ARENGINE_PLANE_WINDOW = 7,  ARENGINE_PLANE_BED = 8,  ARENGINE_PLANE_SPACE = 9,  ARENGINE_CUBE_VOLUME = 10,  ARENGINE_CUBE_SPACE = 11  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前平面识别到的语义类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " {  ARENGINE_SUCCESS = 0,  ARENGINE_ERROR_PERMISSION_NOT_GRANTED = 201,  ARENGINE_ERROR_INVALID_ARGUMENT = 401,  ARENGINE_ERROR_DEVICE_NOT_SUPPORTED = 801,  ARENGINE_ERROR_FATAL = 1009200001,  ARENGINE_ERROR_SESSION_PAUSED = 1009200002,  ARENGINE_ERROR_SESSION_NOT_PAUSED = 1009200003,  ARENGINE_ERROR_NOT_TRACKING = 1009200004,  ARENGINE_ERROR_TEXTURE_NOT_SET = 1009200005,  ARENGINE_ERROR_MISSING_GL_CONTEXT = 1009200006,  ARENGINE_ERROR_UNSUPPORTED_CONFIGURATION = 1009200007,  ARENGINE_ERROR_RESOURCE_EXHAUSTED = 1009200008,  ARENGINE_ERROR_NOT_AVAILABLE = 1009200009,  ARENGINE_ERROR_CAMERA_NOT_AVAILABLE = 1009200010,  ARENGINE_ERROR_IMAGE_EXCEED_NUM_LIMIT = 1009200011,  ARENGINE_ERROR_IMAGE_INSUFFICIENT_QUALITY = 1009200012,  ARENGINE_ERROR_IMAGE_INVALID_DATABASE = 1009200013,  ARENGINE_ERROR_IMAGE_ADD_IMAGE_TRACKING_STATE = 1009200014,  ARENGINE_ERROR_NATIVEBUFFER_CREATE_FAILED = 1009200015,  ARENGINE_ERROR_NATIVEBUFFER_WRITE_FAILED = 1009200016,  ARENGINE_CAMERA_SERVICE_FATAL_ERROR = 1009200017  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接口返回错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artargetshapelabel",
              children: "AREngine_ARTargetShapeLabel"
            }), " {  ARENGINE_TARGET_SHAPE_UNKNOWN = 0,  ARENGINE_TARGET_SHAPE_CUBE = 1,  ARENGINE_TARGET_SHAPE_CIRCLE = 2,  ARENGINE_TARGET_SHAPE_RECTANGLE = 3  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "识别到的物体形状。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artrackabletype",
              children: "AREngine_ARTrackableType"
            }), " {  ARENGINE_TRACKABLE_BASE = 0x41520100,  ARENGINE_TRACKABLE_PLANE = 0x41520101,  ARENGINE_TRACKABLE_POINT = 0x41520102,  ARENGINE_TRACKABLE_AUGMENTED_IMAGE = 0x41520104,  ARENGINE_TRACKABLE_BODY = 0x50000001,  ARENGINE_TRACKABLE_FACE = 0x50000002,  ARENGINE_TRACKABLE_TARGET = 0x50000008,  ARENGINE_TRACKABLE_INVALID = 0  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可跟踪对象类型，如平面、点等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artrackingstate",
              children: "AREngine_ARTrackingState"
            }), " {  ARENGINE_TRACKING_STATE_TRACKING = 0,  ARENGINE_TRACKING_STATE_PAUSED = 1,  ARENGINE_TRACKING_STATE_STOPPED = 2  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可跟踪对象的跟踪状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artrackingstatereason",
              children: "AREngine_ARTrackingStateReason"
            }), " {  ARENGINE_TRACKING_STATE_REASON_NONE = 0,  ARENGINE_TRACKING_STATE_REASON_EXCESSIVE_MOTION = 1,  ARENGINE_TRACKING_STATE_REASON_INSUFFICIENT_FEATURES = 2  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可能的跟踪失败原因。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artype",
              children: "AREngine_ARType"
            }), " {  ARENGINE_TYPE_WORLD = 0x01,  ARENGINE_TYPE_BODY = 0x02,  ARENGINE_TYPE_FACE = 0x10,  ARENGINE_TYPE_IMAGE = 0x80  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AR能力类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arupdatemode",
              children: "AREngine_ARUpdateMode"
            }), " {  ARENGINE_UPDATE_MODE_BLOCKING = 0,  ARENGINE_UPDATE_MODE_LATEST = 1  }"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_update",
              children: "HMS_AREngine_ARSession_Update"
            }), "方法后数据更新模式。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arbodyskeletontype",
              children: "AREngine_ARBodySkeletonType"
            }), " {  ARENGINE_ARBODY_SKELETON_NECK = 1,  ARENGINE_ARBODY_SKELETON_R_SHO = 2,  ARENGINE_ARBODY_SKELETON_R_ELBOW = 3,  ARENGINE_ARBODY_SKELETON_R_WRIST = 4,  ARENGINE_ARBODY_SKELETON_L_SHO = 5,  ARENGINE_ARBODY_SKELETON_L_ELBOW = 6,  ARENGINE_ARBODY_SKELETON_L_WRIST = 7,  ARENGINE_ARBODY_SKELETON_R_HIP = 8,  ARENGINE_ARBODY_SKELETON_R_KNEE = 9,  ARENGINE_ARBODY_SKELETON_R_ANKLE = 10,  ARENGINE_ARBODY_SKELETON_L_HIP = 11,  ARENGINE_ARBODY_SKELETON_L_KNEE = 12,  ARENGINE_ARBODY_SKELETON_L_ANKLE = 13,  ARENGINE_ARBODY_SKELETON_HIP_MID = 14,  ARENGINE_ARBODY_SKELETON_R_EAR = 15,  ARENGINE_ARBODY_SKELETON_R_EYE = 16,  ARENGINE_ARBODY_SKELETON_NOSE = 17,  ARENGINE_ARBODY_SKELETON_L_EYE = 18,  ARENGINE_ARBODY_SKELETON_L_EAR = 19,  ARENGINE_ARBODY_SKELETON_SPINE = 20  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "骨骼点类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_checksupported",
              children: "HMS_AREngine_CheckSupported"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_featuretype",
              children: "AREngine_FeatureType"
            }), " type)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["判断当前设备支不支持AR特性的使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 在进行正式开发前，可通过此接口来判断AR特性是否能够正常运行在当前设备。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_aranchor_detach",
              children: "HMS_AREngine_ARAnchor_Detach"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_aranchor",
              children: "AREngine_ARAnchor"
            }), " *anchor)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通知AR Engine停止跟踪并解绑一个锚点。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 由于此函数并没有释放锚点", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_aranchor",
              children: "AREngine_ARAnchor"
            }), "，开发者需要通过调用 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_aranchor_release",
              children: "HMS_AREngine_ARAnchor_Release"
            }), "来释放锚点。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_aranchor_getpose",
              children: "HMS_AREngine_ARAnchor_GetPose"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_aranchor",
              children: "AREngine_ARAnchor"
            }), " *anchor, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpose",
              children: "AREngine_ARPose"
            }), " *outPose)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定锚点在世界坐标系中的位姿信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_aranchor_gettrackingstate",
              children: "HMS_AREngine_ARAnchor_GetTrackingState"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_aranchor",
              children: "AREngine_ARAnchor"
            }), " *anchor, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artrackingstate",
              children: "AREngine_ARTrackingState"
            }), " *outTrackingState)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定锚点位姿的追踪状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_aranchor_release",
              children: "HMS_AREngine_ARAnchor_Release"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_aranchor",
              children: "AREngine_ARAnchor"
            }), " *anchor)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放指定锚点对象的内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_aranchorlist_acquireitem",
              children: "HMS_AREngine_ARAnchorList_AcquireItem"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_aranchorlist",
              children: "AREngine_ARAnchorList"
            }), " *anchorList, int32_t index, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_aranchor",
              children: "AREngine_ARAnchor"
            }), " **outAnchor)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从锚点对象列表中获取指定位置的锚点信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_aranchorlist_create",
              children: "HMS_AREngine_ARAnchorList_Create"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_aranchorlist",
              children: "AREngine_ARAnchorList"
            }), " **outAnchorList)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个锚点对象列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_aranchorlist_destroy",
              children: "HMS_AREngine_ARAnchorList_Destroy"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_aranchorlist",
              children: "AREngine_ARAnchorList"
            }), " *anchorList)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放一个锚点对象列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_aranchorlist_getsize",
              children: "HMS_AREngine_ARAnchorList_GetSize"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_aranchorlist",
              children: "AREngine_ARAnchorList"
            }), " *anchorList, int32_t *outSize)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取锚点对象列表中包含锚点的数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_araugmentedimage_acquirename",
              children: "HMS_AREngine_ARAugmentedImage_AcquireName"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_aranchorlist",
              children: "AREngine_ARAnchorList"
            }), " *augmentedImage, char *augmentedImageName, uint32_t *outNameLength)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回跟踪图像的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_araugmentedimage_getcenterpose",
              children: "HMS_AREngine_ARAugmentedImage_GetCenterPose"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_araugmentedimage",
              children: "AREngine_ARAugmentedImage"
            }), " *augmentedImage, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpose",
              children: "AREngine_ARPose"
            }), " *outPose)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取跟踪图像中心点在世界坐标系中的位姿信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_araugmentedimage_getextendx",
              children: "HMS_AREngine_ARAugmentedImage_GetExtendX"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_araugmentedimage",
              children: "AREngine_ARAugmentedImage"
            }), " *augmentedImage, float *outExtendX)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以图像的中心点为坐标原点，获取X轴上的估计值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_araugmentedimage_getextendz",
              children: "HMS_AREngine_ARAugmentedImage_GetExtendZ"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_araugmentedimage",
              children: "AREngine_ARAugmentedImage"
            }), " *augmentedImage, float *outExtendZ)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以图像的中心点为坐标原点，获取Z轴上的估计值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_araugmentedimage_getindex",
              children: "HMS_AREngine_ARAugmentedImage_GetIndex"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_araugmentedimage",
              children: "AREngine_ARAugmentedImage"
            }), " *augmentedImage, uint32_t *outIndex)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取跟踪图像数据库中跟踪图像的索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_araugmentedimagedatabase_addimage",
              children: "HMS_AREngine_ARAugmentedImageDatabase_AddImage"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_araugmentedimagedatabase",
              children: "AREngine_ARAugmentedImageDatabase"
            }), " *database, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-araugmentedimagesource/arengine-struct-araugmentedimagesource",
              children: "AREngine_ARAugmentedImageSource"
            }), " *image, uint32_t *outIndex, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_araddaugmentedimagereason",
              children: "AREngine_ARAddAugmentedImageReason"
            }), " *outReason)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将图像添加到图像数据库并输出对应图像的索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_araugmentedimagedatabase_create",
              children: "HMS_AREngine_ARAugmentedImageDatabase_Create"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_araugmentedimagedatabase",
              children: "AREngine_ARAugmentedImageDatabase"
            }), " **outDatabase)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个空的跟踪图像数据库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_araugmentedimagedatabase_deserialize",
              children: "HMS_AREngine_ARAugmentedImageDatabase_Deserialize"
            }), "(const uint8_t *buffer, const uint64_t bufSize, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_araugmentedimagedatabase",
              children: "AREngine_ARAugmentedImageDatabase"
            }), " **outDatabase)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "反序列化特征数据库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_araugmentedimagedatabase_destroy",
              children: "HMS_AREngine_ARAugmentedImageDatabase_Destroy"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_araugmentedimagedatabase",
              children: "AREngine_ARAugmentedImageDatabase"
            }), " *database)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放图像数据库对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_araugmentedimagedatabase_getaddmode",
              children: "HMS_AREngine_ARAugmentedImageDatabase_GetAddMode"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_araugmentedimagedatabase",
              children: "AREngine_ARAugmentedImageDatabase"
            }), " *database, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arimagedatabasemode",
              children: "AREngine_ARImageDatabaseMode"
            }), " *outAddMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取添加跟踪图像模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_araugmentedimagedatabase_setaddmode",
              children: "HMS_AREngine_ARAugmentedImageDatabase_SetAddMode"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_araugmentedimagedatabase",
              children: "AREngine_ARAugmentedImageDatabase"
            }), " *database, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arimagedatabasemode",
              children: "AREngine_ARImageDatabaseMode"
            }), " addMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置添加跟踪图像模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_araugmentedimagedatabase_getcapacity",
              children: "HMS_AREngine_ARAugmentedImageDatabase_GetCapacity"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_araugmentedimagedatabase",
              children: "AREngine_ARAugmentedImageDatabase"
            }), " *database, uint32_t *outCapacity)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取可以添加的最大图像数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_araugmentedimagedatabase_getimagecount",
              children: "HMS_AREngine_ARAugmentedImageDatabase_GetImageCount"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_araugmentedimagedatabase",
              children: "AREngine_ARAugmentedImageDatabase"
            }), " *database, uint32_t *outImageCount)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取数据库中存储的图像数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_araugmentedimagedatabase_serialize",
              children: "HMS_AREngine_ARAugmentedImageDatabase_Serialize"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_araugmentedimagedatabase",
              children: "AREngine_ARAugmentedImageDatabase"
            }), " *database, uint8_t **outBuffer, uint64_t *outBufSize)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "序列化特征数据库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arcamera_getdisplayorientedpose",
              children: "HMS_AREngine_ARCamera_GetDisplayOrientedPose"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcamera",
              children: "AREngine_ARCamera"
            }), " *camera, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpose",
              children: "AREngine_ARPose"
            }), " *outPose)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置outPose为虚拟相机（面向显示）在世界空间中的位姿，用以将AR内容渲染到最新帧中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arcamera_getimageintrinsics",
              children: "HMS_AREngine_ARCamera_GetImageIntrinsics"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcamera",
              children: "AREngine_ARCamera"
            }), " *camera, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcameraintrinsics",
              children: "AREngine_ARCameraIntrinsics"
            }), " *outIntrinsics)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取物理相机离线内参的对象，可通过该对象获取相机的焦距、图像尺寸、主轴点和畸变参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arcamera_getpose",
              children: "HMS_AREngine_ARCamera_GetPose"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcamera",
              children: "AREngine_ARCamera"
            }), " *camera, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpose",
              children: "AREngine_ARPose"
            }), " *outPose)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置outPose为最新帧中物理相机在世界空间中的位姿。该位姿是OpenGL相机的位姿。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arcamera_getprojectionmatrix",
              children: "HMS_AREngine_ARCamera_GetProjectionMatrix"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcamera",
              children: "AREngine_ARCamera"
            }), " *camera, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-clipplanedistance/arengine-struct-clipplanedistance",
              children: "AREngine_ClipPlaneDistance"
            }), " clipPlaneDistance, float *outDestColMajor4x4, int32_t destColMajor4x4Num)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取用于在相机图像上层渲染虚拟内容的投影矩阵，可用于相机坐标系到裁剪坐标系转换。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arcamera_gettrackingstate",
              children: "HMS_AREngine_ARCamera_GetTrackingState"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcamera",
              children: "AREngine_ARCamera"
            }), " *camera, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artrackingstate",
              children: "AREngine_ARTrackingState"
            }), " *outTrackingState)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取相机的当前追踪状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arcamera_gettrackingstatereason",
              children: "HMS_AREngine_ARCamera_GetTrackingStateReason"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcamera",
              children: "AREngine_ARCamera"
            }), " *camera, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artrackingstatereason",
              children: "AREngine_ARTrackingStateReason"
            }), " *outTrackingStateReason)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取相机的当前追踪状态为ARENGINE_TRACKING_STATE_PAUSED时的原因。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arcamera_getviewmatrix",
              children: "HMS_AREngine_ARCamera_GetViewMatrix"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcamera",
              children: "AREngine_ARCamera"
            }), " *camera, float *outColMajor4x4, int32_t colMajor4x4Num)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取最新帧中相机的视图矩阵。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arcamera_release",
              children: "HMS_AREngine_ARCamera_Release"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcamera",
              children: "AREngine_ARCamera"
            }), " *camera)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放对相机的引用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arcameraconfig_create",
              children: "HMS_AREngine_ARCameraConfig_Create"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcameraconfig",
              children: "AREngine_ARCameraConfig"
            }), " **outCameraConfig)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个相机配置对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_getcameralensfacing",
              children: "HMS_AREngine_ARConfig_GetCameraLensFacing"
            }), "(const *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcameralensfacing",
              children: "AREngine_ARCameraLensFacing"
            }), " *outFacing)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取相机镜头朝向。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_getmultifacemode",
              children: "HMS_AREngine_ARConfig_GetMultiFaceMode"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_armultifacemode",
              children: "AREngine_ARMultiFaceMode"
            }), " *outFaceMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取多人脸检测模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_setcameralensfacing",
              children: "HMS_AREngine_ARConfig_SetCameraLensFacing"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcameralensfacing",
              children: "AREngine_ARCameraLensFacing"
            }), " facing)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置相机镜头朝向，参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcameralensfacing",
              children: "AREngine_ARCameraLensFacing"
            }), "。facing设置为ARENGINE_CAMERA_FACING_FRONT时，需要调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_setartype",
              children: "HMS_AREngine_ARConfig_SetARType"
            }), "将AR能力类型设置为ARENGINE_TYPE_FACE或ARENGINE_TYPE_BODY才生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_setmultifacemode",
              children: "HMS_AREngine_ARConfig_SetMultiFaceMode"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_armultifacemode",
              children: "AREngine_ARMultiFaceMode"
            }), " faceMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置多人脸检测模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arcameraconfig_destroy",
              children: "HMS_AREngine_ARCameraConfig_Destroy"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcameraconfig",
              children: "AREngine_ARCameraConfig"
            }), " *cameraConfig)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放相机配置对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arcameraconfig_getimagedimensions",
              children: "HMS_AREngine_ARCameraConfig_GetImageDimensions"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcameraconfig",
              children: "AREngine_ARCameraConfig"
            }), " *cameraConfig, int32_t *outWidth, int32_t *outHeight)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从相机配置对象中获取相机送到CPU处理的图像尺寸。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arcameraconfig_gettexturedimensions",
              children: "HMS_AREngine_ARCameraConfig_GetTextureDimensions"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcameraconfig",
              children: "AREngine_ARCameraConfig"
            }), " *cameraConfig, int32_t *outWidth, int32_t *outHeight)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从相机配置对象中获取相机送到GPU处理的图像纹理尺寸。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arcameraintrinsics_create",
              children: "HMS_AREngine_ARCameraIntrinsics_Create"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcameraintrinsics",
              children: "AREngine_ARCameraIntrinsics"
            }), " **outIntrinsics)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个相机内参对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arcameraintrinsics_destroy",
              children: "HMS_AREngine_ARCameraIntrinsics_Destroy"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcameraintrinsics",
              children: "AREngine_ARCameraIntrinsics"
            }), " *intrinsics)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放指定的相机内参对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arcameraintrinsics_getdistortion",
              children: "HMS_AREngine_ARCameraIntrinsics_GetDistortion"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcameraintrinsics",
              children: "AREngine_ARCameraIntrinsics"
            }), " *intrinsics, float *outDistortion, int32_t distortionNum)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取相机的畸变系数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arcameraintrinsics_getfocallength",
              children: "HMS_AREngine_ARCameraIntrinsics_GetFocalLength"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcameraintrinsics",
              children: "AREngine_ARCameraIntrinsics"
            }), " *intrinsics, float *outFocalX, float *outFocalY)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定相机的焦距，焦距以Pixel为单位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arcameraintrinsics_getimagedimensions",
              children: "HMS_AREngine_ARCameraIntrinsics_GetImageDimensions"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcameraintrinsics",
              children: "AREngine_ARCameraIntrinsics"
            }), " *intrinsics, int32_t *outWidth, int32_t *outHeight)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取相机图像的尺寸，包括宽度和高度，以Pixel为单位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arcameraintrinsics_getprincipalpoint",
              children: "HMS_AREngine_ARCameraIntrinsics_GetPrincipalPoint"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcameraintrinsics",
              children: "AREngine_ARCameraIntrinsics"
            }), " *intrinsics, float *outPrincipalX, float *outPrincipalY)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定相机的主轴点，主点位置以Pixel为单位表示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_create",
              children: "HMS_AREngine_ARConfig_Create"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " **outConfig)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建具有适当默认配置的配置对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_destroy",
              children: "HMS_AREngine_ARConfig_Destroy"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放指定的配置对象的内存空间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_getartype",
              children: "HMS_AREngine_ARConfig_GetARType"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artype",
              children: "AREngine_ARType"
            }), " *type)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前使用的AR能力类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_setartype",
              children: "HMS_AREngine_ARConfig_SetARType"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artype",
              children: "AREngine_ARType"
            }), " type)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前要使用的AR能力类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_getcamerapreviewmode",
              children: "HMS_AREngine_ARConfig_GetCameraPreviewMode"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpreviewmode",
              children: "AREngine_ARPreviewMode"
            }), " *outMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前的预览模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_setcamerapreviewmode",
              children: "HMS_AREngine_ARConfig_SetCameraPreviewMode"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpreviewmode",
              children: "AREngine_ARPreviewMode"
            }), " mode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置预览模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_getdepthmode",
              children: "HMS_AREngine_ARConfig_GetDepthMode"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_ardepthmode",
              children: "AREngine_ARDepthMode"
            }), " *outDepthMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前的深度模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_setdepthmode",
              children: "HMS_AREngine_ARConfig_SetDepthMode"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_ardepthmode",
              children: "AREngine_ARDepthMode"
            }), " depthMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置深度模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_getfocusmode",
              children: "HMS_AREngine_ARConfig_GetFocusMode"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arfocusmode",
              children: "AREngine_ARFocusMode"
            }), " *focusMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前配置的相机对焦模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_setfocusmode",
              children: "HMS_AREngine_ARConfig_SetFocusMode"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arfocusmode",
              children: "AREngine_ARFocusMode"
            }), " focusMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前所需的相机对焦模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_getmaxmapsize",
              children: "HMS_AREngine_ARConfig_GetMaxMapSize"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, uint64_t *maxMapSize)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取地图数据使用的最大内存大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_setmaxmapsize",
              children: "HMS_AREngine_ARConfig_SetMaxMapSize"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, uint64_t maxMapSize)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置地图数据最大使用内存大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_getmeshmode",
              children: "HMS_AREngine_ARConfig_GetMeshMode"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_armeshmode",
              children: "AREngine_ARMeshMode"
            }), " *outMeshMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前mesh模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_setmeshmode",
              children: "HMS_AREngine_ARConfig_SetMeshMode"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_armeshmode",
              children: "AREngine_ARMeshMode"
            }), " meshMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置mesh模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_getplanefindingmode",
              children: "HMS_AREngine_ARConfig_GetPlaneFindingMode"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arplanefindingmode",
              children: "AREngine_ARPlaneFindingMode"
            }), " *planeFindingMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前配置的平面识别模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_setplanefindingmode",
              children: "HMS_AREngine_ARConfig_SetPlaneFindingMode"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arplanefindingmode",
              children: "AREngine_ARPlaneFindingMode"
            }), " planeFindingMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前所需的平面识别模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_getposemode",
              children: "HMS_AREngine_ARConfig_GetPoseMode"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arposemode",
              children: "AREngine_ARPoseMode"
            }), " *poseMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取相机输出的位姿坐标系对齐模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_setposemode",
              children: "HMS_AREngine_ARConfig_SetPoseMode"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arposemode",
              children: "AREngine_ARPoseMode"
            }), " poseMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置相机输出的位姿坐标系对齐模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_getpowermode",
              children: "HMS_AREngine_ARConfig_GetPowerMode"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpowermode",
              children: "AREngine_ARPowerMode"
            }), " *powerMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前配置的功耗模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_setpowermode",
              children: "HMS_AREngine_ARConfig_SetPowerMode"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpowermode",
              children: "AREngine_ARPowerMode"
            }), " powerMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置功耗模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_setpreviewsize",
              children: "HMS_AREngine_ARConfig_SetPreviewSize"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, uint32_t width, uint32_t height)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置预览画面尺寸。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_getsemanticdensemode",
              children: "HMS_AREngine_ARConfig_GetSemanticDenseMode"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsemanticdensemode",
              children: "AREngine_ARSemanticDenseMode"
            }), " *outSemanticDenseMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取已设置的高精几何重建模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_setsemanticdensemode",
              children: "HMS_AREngine_ARConfig_SetSemanticDenseMode"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsemanticdensemode",
              children: "AREngine_ARSemanticDenseMode"
            }), " semanticDenseMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前所需的高精几何重建模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_getsemanticmode",
              children: "HMS_AREngine_ARConfig_GetSemanticMode"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsemanticmode",
              children: "AREngine_ARSemanticMode"
            }), " *mode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取已设置成功的语义识别模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_setsemanticmode",
              children: "HMS_AREngine_ARConfig_SetSemanticMode"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsemanticmode",
              children: "AREngine_ARSemanticMode"
            }), " mode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前所需的语义识别模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_getupdatemode",
              children: "HMS_AREngine_ARConfig_GetUpdateMode"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arupdatemode",
              children: "AREngine_ARUpdateMode"
            }), " *updateMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前配置的预览更新模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_setupdatemode",
              children: "HMS_AREngine_ARConfig_SetUpdateMode"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arupdatemode",
              children: "AREngine_ARUpdateMode"
            }), " updateMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置预览更新模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_setphotostreamsize",
              children: "HMS_AREngine_ARConfig_SetPhotoStreamSize"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, uint32_t width, uint32_t height)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arimagestreammode",
              children: "AREngine_ARImageStreamMode"
            }), "为ARENGINE_IMAGE_STREAM_MODE_PREVIEW_AND_PHOTO时，设置从拍照流获取图像的分辨率。仅支持4:3大小分辨率。如果超出这个范围，系统会自动设置图像分辨率为该设备在4:3宽高比下的最高分辨率。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_setimagestreammode",
              children: "HMS_AREngine_ARConfig_SetImageStreamMode"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arimagestreammode",
              children: "AREngine_ARImageStreamMode"
            }), " mode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置图像流模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_getimagestreammode",
              children: "HMS_AREngine_ARConfig_GetImageStreamMode"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arimagestreammode",
              children: "AREngine_ARImageStreamMode"
            }), " outMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取图像流模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arface_acquireblendshapes",
              children: "HMS_AREngine_ARFace_AcquireBlendShapes"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arface",
              children: "AREngine_ARFace"
            }), " *face, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arfaceblendshapes",
              children: "AREngine_ARFaceBlendShapes"
            }), " **outBlendshapes)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取人脸微表情对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arface_acquiregeometry",
              children: "HMS_AREngine_ARFace_AcquireGeometry"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arface",
              children: "AREngine_ARFace"
            }), " *face, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arfacegeometry",
              children: "AREngine_ARFaceGeometry"
            }), " **outGeometry)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取人脸拓扑结构对象，即人脸Mesh对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arface_acquireviewmatrix",
              children: "HMS_AREngine_ARFace_AcquireViewMatrix"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arface",
              children: "AREngine_ARFace"
            }), " *face, float *outColMajor4x4, int32_t colMajor4x4Num)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前人脸的面视图矩阵。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arface_getcenterpose",
              children: "HMS_AREngine_ARFace_GetCenterPose"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arface",
              children: "AREngine_ARFace"
            }), " *face, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpose",
              children: "AREngine_ARPose"
            }), " *outPose)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取人脸Mesh中心的位姿。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arfaceblendshapes_acquiredata",
              children: "HMS_AREngine_ARFaceBlendShapes_AcquireData"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arfaceblendshapes",
              children: "AREngine_ARFaceBlendShapes"
            }), " *blendshapes, const float **outData)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取微表情数据的集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arfaceblendshapes_acquiretypes",
              children: "HMS_AREngine_ARFaceBlendShapes_AcquireTypes"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arfaceblendshapes",
              children: "AREngine_ARFaceBlendShapes"
            }), " *blendshapes, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_aranimojiblendshape",
              children: "AREngine_ARAnimojiBlendShape"
            }), " **types)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取所有微表情参数类型数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arfaceblendshapes_getcount",
              children: "HMS_AREngine_ARFaceBlendShapes_GetCount"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arfaceblendshapes",
              children: "AREngine_ARFaceBlendShapes"
            }), " *blendshapes, int32_t *outSize)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取微表情参数个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arfaceblendshapes_release",
              children: "HMS_AREngine_ARFaceBlendShapes_Release"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arfaceblendshapes",
              children: "AREngine_ARFaceBlendShapes"
            }), " *blendshapes)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["释放blendShapes对象，即由", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arface_acquireblendshapes",
              children: "HMS_AREngine_ARFace_AcquireBlendShapes"
            }), "创建的对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arfacegeometry_acquireindices",
              children: "HMS_AREngine_ARFaceGeometry_AcquireIndices"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arfacegeometry",
              children: "AREngine_ARFaceGeometry"
            }), " *geometry, const int32_t **data)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取人脸Mesh三角面下标数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arfacegeometry_acquiretexcoord",
              children: "HMS_AREngine_ARFaceGeometry_AcquireTexCoord"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arfacegeometry",
              children: "AREngine_ARFaceGeometry"
            }), " *geometry, const float **outData)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取人脸Mesh纹理坐标点数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arfacegeometry_acquiretrianglelabels",
              children: "HMS_AREngine_ARFaceGeometry_AcquireTriangleLabels"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arfacegeometry",
              children: "AREngine_ARFaceGeometry"
            }), " *geometry, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_aranimojitrianglelabel",
              children: "AREngine_ARAnimojiTriangleLabel"
            }), " **data)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取人脸Mesh三角面标签。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arfacegeometry_acquirevertices",
              children: "HMS_AREngine_ARFaceGeometry_AcquireVertices"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arfacegeometry",
              children: "AREngine_ARFaceGeometry"
            }), " *geometry, const float **outData)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取人脸Mesh顶点数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arfacegeometry_getindicessize",
              children: "HMS_AREngine_ARFaceGeometry_GetIndicesSize"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arfacegeometry",
              children: "AREngine_ARFaceGeometry"
            }), " *geometry, int32_t *outSize)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取人脸Mesh三角面下标数组大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arfacegeometry_gettexcoordsize",
              children: "HMS_AREngine_ARFaceGeometry_GetTexCoordSize"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arfacegeometry",
              children: "AREngine_ARFaceGeometry"
            }), " *geometry, int32_t *outSize)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取人脸Mesh纹理坐标点数组大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arfacegeometry_gettrianglecount",
              children: "HMS_AREngine_ARFaceGeometry_GetTriangleCount"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arfacegeometry",
              children: "AREngine_ARFaceGeometry"
            }), " *geometry, int32_t *outSize)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取人脸Mesh三角面个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arfacegeometry_gettrianglelabelssize",
              children: "HMS_AREngine_ARFaceGeometry_GetTriangleLabelsSize"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arfacegeometry",
              children: "AREngine_ARFaceGeometry"
            }), " *geometry, int32_t *outSize)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取人脸Mesh三角面标签个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arfacegeometry_getverticessize",
              children: "HMS_AREngine_ARFaceGeometry_GetVerticesSize"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arfacegeometry",
              children: "AREngine_ARFaceGeometry"
            }), " *geometry, int32_t *outSize)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取人脸Mesh顶点数组大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arfacegeometry_release",
              children: "HMS_AREngine_ARFaceGeometry_Release"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arfacegeometry",
              children: "AREngine_ARFaceGeometry"
            }), " *geometry)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["释放当前人脸几何体对象，即由 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arface_acquireblendshapes",
              children: "HMS_AREngine_ARFace_AcquireBlendShapes"
            }), "创建的对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arframe_acquirecamera",
              children: "HMS_AREngine_ARFrame_AcquireCamera"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arframe",
              children: "AREngine_ARFrame"
            }), " *frame, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcamera",
              children: "AREngine_ARCamera"
            }), " **outCamera)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前帧的相机参数对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arframe_acquirecameraimage",
              children: "HMS_AREngine_ARFrame_AcquireCameraImage"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arframe",
              children: "AREngine_ARFrame"
            }), " *frame, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arimage",
              children: "AREngine_ARImage"
            }), " **outImage)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取相机的当前帧的图像。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arframe_acquirecameraphotoimage",
              children: "HMS_AREngine_ARFrame_AcquireCameraPhotoImage"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arframe",
              children: "AREngine_ARFrame"
            }), " *frame, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_photoavailablecallback",
              children: "HMS_AREngine_PhotoAvailableCallback"
            }), " photoCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前帧的拍照流图片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arframe_acquiredepthconfidenceimage",
              children: "HMS_AREngine_ARFrame_AcquireDepthConfidenceImage"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arframe",
              children: "AREngine_ARFrame"
            }), " *frame, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arimage",
              children: "AREngine_ARImage"
            }), " **outConfidenceImage)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前帧的深度置信度图像。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arframe_acquiredepthimage16bits",
              children: "HMS_AREngine_ARFrame_AcquireDepthImage16Bits"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arframe",
              children: "AREngine_ARFrame"
            }), " *frame, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arimage",
              children: "AREngine_ARImage"
            }), " **outDepthImage);"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前帧的深度图像。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arframe_acquirepointcloud",
              children: "HMS_AREngine_ARFrame_AcquirePointCloud"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arframe",
              children: "AREngine_ARFrame"
            }), " *frame, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpointcloud",
              children: "AREngine_ARPointCloud"
            }), " **outPointCloud)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前帧的点云数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arframe_acquirescenemesh",
              children: "HMS_AREngine_ARFrame_AcquireSceneMesh"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arframe",
              children: "AREngine_ARFrame"
            }), " *frame, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arscenemesh",
              children: "AREngine_ARSceneMesh"
            }), " **outSceneMesh)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前帧的mesh信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arframe_acquiresemanticdensedata",
              children: "HMS_AREngine_ARFrame_AcquireSemanticDenseData"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arframe",
              children: "AREngine_ARFrame"
            }), " *frame, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsemanticdensedata",
              children: "AREngine_ARSemanticDenseData"
            }), " **outSemanticDenseData);"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前帧的高精几何重建对象数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arframe_create",
              children: "HMS_AREngine_ARFrame_Create"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arframe",
              children: "AREngine_ARFrame"
            }), " **outFrame)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个新的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arframe",
              children: "AREngine_ARFrame"
            }), "对象，将指针存储到*outFrame中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arframe_destroy",
              children: "HMS_AREngine_ARFrame_Destroy"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arframe",
              children: "AREngine_ARFrame"
            }), " *frame)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["删除当前", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arframe",
              children: "AREngine_ARFrame"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arframe_getdisplaygeometrychanged",
              children: "HMS_AREngine_ARFrame_GetDisplayGeometryChanged"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arframe",
              children: "AREngine_ARFrame"
            }), " *frame, int32_t *outGeometryChangeState)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取显示（长宽和旋转）是否发生变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arframe_gettimestamp",
              children: "HMS_AREngine_ARFrame_GetTimestamp"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arframe",
              children: "AREngine_ARFrame"
            }), " *frame, int64_t *outTimestampNs)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前帧对应的时间戳信息，单位为ns。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arframe_getupdatedtrackables",
              children: "HMS_AREngine_ARFrame_GetUpdatedTrackables"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arframe",
              children: "AREngine_ARFrame"
            }), " *frame, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artrackabletype",
              children: "AREngine_ARTrackableType"
            }), " filterType, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artrackablelist",
              children: "AREngine_ARTrackableList"
            }), " *outTrackableList)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_update",
              children: "HMS_AREngine_ARSession_Update"
            }), "更新后发生变化的指定类型的可跟踪对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arframe_hittest",
              children: "HMS_AREngine_ARFrame_HitTest"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arframe",
              children: "AREngine_ARFrame"
            }), " *frame, float pixelX, float pixelY, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arhitresultlist",
              children: "AREngine_ARHitResultList"
            }), " *hitResultList)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从摄像头发射一条射线，该射线的方向由预览区上的点（pixelX，pixelY）确定（pixelX，pixelY）可以通过XComponent的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/ent-native-xcomponent-oh-nativexcomponent-callback/ent-native-xcomponent-oh-nativexcomponent-callback#dispatchtouchevent",
              children: "DispatchTouchEvent"
            }), "事件获取）。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arframe_transformdisplayuvcoords",
              children: "HMS_AREngine_ARFrame_TransformDisplayUvCoords"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arframe",
              children: "AREngine_ARFrame"
            }), " *frame, int32_t elementSize, const float *uvsIn, float *uvsOut)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调整纹理映射坐标，以便可以正确地显示相机捕捉到的背景图片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arhitresult_acquirenewanchor",
              children: "HMS_AREngine_ARHitResult_AcquireNewAnchor"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arhitresult",
              children: "AREngine_ARHitResult"
            }), " *hitResult, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_aranchor",
              children: "AREngine_ARAnchor"
            }), " **outAnchor)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在碰撞命中位置创建一个新的锚点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arhitresult_acquiretrackable",
              children: "HMS_AREngine_ARHitResult_AcquireTrackable"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arhitresult",
              children: "AREngine_ARHitResult"
            }), " *hitResult, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artrackable",
              children: "AREngine_ARTrackable"
            }), " **outTrackable)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取被命中的可追踪对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arhitresult_create",
              children: "HMS_AREngine_ARHitResult_Create"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arhitresult",
              children: "AREngine_ARHitResult"
            }), " **outHitResult)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个空的命中检测结果对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arhitresult_destroy",
              children: "HMS_AREngine_ARHitResult_Destroy"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arhitresult",
              children: "AREngine_ARHitResult"
            }), " *hitResult)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放命中检测结果对象使用的内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arhitresult_getdistance",
              children: "HMS_AREngine_ARHitResult_GetDistance"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arhitresult",
              children: "AREngine_ARHitResult"
            }), " *hitResult, float *outDistance)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回从相机到命中位置的距离，以m为单位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arhitresult_gethitpose",
              children: "HMS_AREngine_ARHitResult_GetHitPose"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arhitresult",
              children: "AREngine_ARHitResult"
            }), " *hitResult, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpose",
              children: "AREngine_ARPose"
            }), " *outPose)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取交点的位姿。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arhitresultlist_create",
              children: "HMS_AREngine_ARHitResultList_Create"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arhitresultlist",
              children: "AREngine_ARHitResultList"
            }), " **outHitResultList)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个命中检测结果对象列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arhitresultlist_destroy",
              children: "HMS_AREngine_ARHitResultList_Destroy"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arhitresultlist",
              children: "AREngine_ARHitResultList"
            }), " *hitResultList)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放命中检测结果对象列表，以及其中的所有命中检测结果对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arhitresultlist_getitem",
              children: "HMS_AREngine_ARHitResultList_GetItem"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arhitresultlist",
              children: "AREngine_ARHitResultList"
            }), " *hitResultList, int32_t index, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arhitresult",
              children: "AREngine_ARHitResult"
            }), " *outHitResult)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在命中检测结果列表中获取指定索引的命中检测结果对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arhitresultlist_getsize",
              children: "HMS_AREngine_ARHitResultList_GetSize"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arhitresultlist",
              children: "AREngine_ARHitResultList"
            }), " *hitResultList, int32_t *outSize)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取命中检测结果对象列表中包含的对象数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arimage_getformat",
              children: "HMS_AREngine_ARImage_GetFormat"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arimage",
              children: "AREngine_ARImage"
            }), " *image, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arimageformat",
              children: "AREngine_ARImageFormat"
            }), " *outFormat)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前帧的图像格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arimage_getheight",
              children: "HMS_AREngine_ARImage_GetHeight"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arimage",
              children: "AREngine_ARImage"
            }), " *image, int32_t *outHeight)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前帧的图像数据的高度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arimage_getwidth",
              children: "HMS_AREngine_ARImage_GetWidth"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arimage",
              children: "AREngine_ARImage"
            }), " *image, int32_t *outWidth)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前帧的图像数据的宽度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arimage_getnativebuffer",
              children: "HMS_AREngine_ARImage_GetNativeBuffer"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arimage",
              children: "AREngine_ARImage"
            }), " *image, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-oh-nativebuffer/capi-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), " **outNativeBuffer);"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前帧图像对象的NativeBuffer数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arimage_getplanecount",
              children: "HMS_AREngine_ARImage_GetPlaneCount"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arimage",
              children: "AREngine_ARImage"
            }), " *image, int32_t *outCount)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前帧图像的平面数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arimage_getplanedata",
              children: "HMS_AREngine_ARImage_GetPlaneData"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arimage",
              children: "AREngine_ARImage"
            }), " *image, int32_t planeIndex, const uint8_t **outData, int32_t *outLength)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前帧图像的平面数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arimage_getplanepixelstride",
              children: "HMS_AREngine_ARImage_GetPlanePixelStride"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arimage",
              children: "AREngine_ARImage"
            }), " *image, int32_t planeIndex, int32_t *outPixelStride)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取图像中两个连续像素的起点之间的字节距离。像素步幅始终大于0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arimage_getplanerowstride",
              children: "HMS_AREngine_ARImage_GetPlaneRowStride"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arimage",
              children: "AREngine_ARImage"
            }), " *image, int32_t planeIndex, int32_t *outRowStride)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取图像中两个连续像素行的起始位置之间的字节数。行间距始终大于0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arimage_gettimestamp",
              children: "HMS_AREngine_ARImage_GetTimestamp"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arimage",
              children: "AREngine_ARImage"
            }), " *image, int64_t *outTimestamp)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取图像的时间戳。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arimage_release",
              children: "HMS_AREngine_ARImage_Release"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arimage",
              children: "AREngine_ARImage"
            }), " *image)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["释放当前帧的图像对象，由", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arframe_acquirecameraimage",
              children: "HMS_AREngine_ARFrame_AcquireCameraImage"
            }), "创建的对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arplane_acquiresubsumedby",
              children: "HMS_AREngine_ARPlane_AcquireSubsumedBy"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arplane",
              children: "AREngine_ARPlane"
            }), " *plane, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arplane",
              children: "AREngine_ARPlane"
            }), " **outSubsumedBy)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取平面的父平面（一个平面被另一个平面合并时，会产生父平面），如果无父平面返回为NULL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arplane_getcenterpose",
              children: "HMS_AREngine_ARPlane_GetCenterPose"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arplane",
              children: "AREngine_ARPlane"
            }), " *plane, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpose",
              children: "AREngine_ARPose"
            }), " *outPose)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取从平面的局部坐标系到世界坐标系转换的位姿信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arplane_getextentx",
              children: "HMS_AREngine_ARPlane_GetExtentX"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arplane",
              children: "AREngine_ARPlane"
            }), " *plane, float *outExtentX)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取平面的矩形边界沿平面局部坐标系X轴的长度，如矩形的宽度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arplane_getextentz",
              children: "HMS_AREngine_ARPlane_GetExtentZ"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arplane",
              children: "AREngine_ARPlane"
            }), " *plane, float *outExtentZ)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取平面的矩形边界沿平面局部坐标系Z轴的长度，如矩形的高度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arplane_getlabel",
              children: "HMS_AREngine_ARPlane_GetLabel"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arplane",
              children: "AREngine_ARPlane"
            }), " *plane, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsemanticplanelabel",
              children: "AREngine_ARSemanticPlaneLabel"
            }), " *label)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取平面的语义类型，如桌面、地板等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arplane_getpolygon",
              children: "HMS_AREngine_ARPlane_GetPolygon"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arplane",
              children: "AREngine_ARPlane"
            }), " *plane, float *outPolygonXz, int32_t polygonSize)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取检测到平面的二维顶点数组，格式为[x1，z1，x2，z2，...]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arplane_getpolygonsize",
              children: "HMS_AREngine_ARPlane_GetPolygonSize"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arplane",
              children: "AREngine_ARPlane"
            }), " *plane, int32_t *outPolygonSize)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取检测到平面的二维顶点数组大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arplane_gettype",
              children: "HMS_AREngine_ARPlane_GetType"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arplane",
              children: "AREngine_ARPlane"
            }), " *plane, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arplanetype",
              children: "AREngine_ARPlaneType"
            }), " *outPlaneType)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取平面的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arplane_isposeinextents",
              children: "HMS_AREngine_ARPlane_IsPoseInExtents"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arplane",
              children: "AREngine_ARPlane"
            }), " *plane, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpose",
              children: "AREngine_ARPose"
            }), " *pose, int32_t *outPoseInExtents)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断位姿是否位于平面的矩形范围内。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arplane_isposeinpolygon",
              children: "HMS_AREngine_ARPlane_IsPoseInPolygon"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arplane",
              children: "AREngine_ARPlane"
            }), " *plane, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpose",
              children: "AREngine_ARPose"
            }), " *pose, int32_t *outPoseInPolygon)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断位姿是否位于平面的多边形范围内。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arpoint_getorientationmode",
              children: "HMS_AREngine_ARPoint_GetOrientationMode"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpoint",
              children: "AREngine_ARPoint"
            }), " *point, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpointorientationmode",
              children: "AREngine_ARPointOrientationMode"
            }), " *outOrientationMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取输入点的朝向模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arpoint_getpose",
              children: "HMS_AREngine_ARPoint_GetPose"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpoint",
              children: "AREngine_ARPoint"
            }), " *point, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpose",
              children: "AREngine_ARPose"
            }), " *outPose)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取输入点的位姿信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arpointcloud_getdata",
              children: "HMS_AREngine_ARPointCloud_GetData"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpointcloud",
              children: "AREngine_ARPointCloud"
            }), " *pointCloud, const float **outPointCloudData)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取点云中所有点的坐标及置信度数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arpointcloud_getnumberofpoints",
              children: "HMS_AREngine_ARPointCloud_GetNumberOfPoints"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpointcloud",
              children: "AREngine_ARPointCloud"
            }), " *pointCloud, int32_t *outNumberOfPoints)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取点云中所有点的坐标及置信度数组大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arpointcloud_gettimestamp",
              children: "HMS_AREngine_ARPointCloud_GetTimestamp"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpointcloud",
              children: "AREngine_ARPointCloud"
            }), " *pointCloud, int64_t *outTimestampNs)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取检测到当前特征点云的时间，以ns为单位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arpointcloud_release",
              children: "HMS_AREngine_ARPointCloud_Release"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpointcloud",
              children: "AREngine_ARPointCloud"
            }), " *pointCloud)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放点云对象使用的内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arpose_create",
              children: "HMS_AREngine_ARPose_Create"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const float *poseRaw, const uint32_t poseRawSize, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpose",
              children: "AREngine_ARPose"
            }), " **outPose)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分配并初始化一个新的位姿对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arpose_destroy",
              children: "HMS_AREngine_ARPose_Destroy"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpose",
              children: "AREngine_ARPose"
            }), " *pose)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放位姿对象使用的内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arpose_getmatrix",
              children: "HMS_AREngine_ARPose_GetMatrix"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpose",
              children: "AREngine_ARPose"
            }), " *pose, float *outMatrixColMajor4x4, int32_t matrixColMajor4x4Size)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将位姿数据转换成4X4的矩阵。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arpose_getposeraw",
              children: "HMS_AREngine_ARPose_GetPoseRaw"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpose",
              children: "AREngine_ARPose"
            }), " *pose, float *outPoseRaw, int32_t poseRawSize)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从位姿对象提取位姿数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arscenemesh_acquireindexlist",
              children: "HMS_AREngine_ARSceneMesh_AcquireIndexList"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arscenemesh",
              children: "AREngine_ARSceneMesh"
            }), " *sceneMesh, int32_t *outData, int32_t dataSize)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取mesh面片的索引集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arscenemesh_acquireindexlistsize",
              children: "HMS_AREngine_ARSceneMesh_AcquireIndexListSize"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arscenemesh",
              children: "AREngine_ARSceneMesh"
            }), " *sceneMesh, int32_t *outSize)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取mesh面片的索引个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arscenemesh_acquirevertexlist",
              children: "HMS_AREngine_ARSceneMesh_AcquireVertexList"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arscenemesh",
              children: "AREngine_ARSceneMesh"
            }), " *sceneMesh, float *outData, int32_t dataSize)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取mesh的顶点集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arscenemesh_acquirevertexnormallist",
              children: "HMS_AREngine_ARSceneMesh_AcquireVertexNormalList"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arscenemesh",
              children: "AREngine_ARSceneMesh"
            }), " *sceneMesh, float *outData, int32_t dataSize)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取mesh面片的法向量集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arscenemesh_acquireverticessize",
              children: "HMS_AREngine_ARSceneMesh_AcquireVerticesSize"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arscenemesh",
              children: "AREngine_ARSceneMesh"
            }), " *sceneMesh, int32_t *outSize)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取mesh的顶点个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arscenemesh_release",
              children: "HMS_AREngine_ARSceneMesh_Release"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arscenemesh",
              children: "AREngine_ARSceneMesh"
            }), " *SceneMesh)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放当前帧的mesh信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsemanticdense_acquirecubedata",
              children: "HMS_AREngine_ARSemanticDense_AcquireCubeData"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsemanticdensedata",
              children: "AREngine_ARSemanticDenseData"
            }), " *semanticDenseData, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-arsemanticdensecubedata/arengine-struct-arsemanticdensecubedata",
              children: "AREngine_ARSemanticDenseCubeData"
            }), " **outCubeData)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取识别到的高精几何重建对象数据中的立方体数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsemanticdense_acquirecubedatasize",
              children: "HMS_AREngine_ARSemanticDense_AcquireCubeDataSize"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsemanticdensedata",
              children: "AREngine_ARSemanticDenseData"
            }), " *semanticDenseData, int64_t *outSize)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取识别到的高精几何重建对象数据中的立方体数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsemanticdense_acquirepointdata",
              children: "HMS_AREngine_ARSemanticDense_AcquirePointData"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsemanticdensedata",
              children: "AREngine_ARSemanticDenseData"
            }), " *semanticDenseData, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-arsemanticdensepointdata/arengine-struct-arsemanticdensepointdata",
              children: "AREngine_ARSemanticDensePointData"
            }), " **outPointData)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取识别到的高精几何重建对象数据中的稠密点云数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsemanticdense_acquirepointdatasize",
              children: "HMS_AREngine_ARSemanticDense_AcquirePointDataSize"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsemanticdensedata",
              children: "AREngine_ARSemanticDenseData"
            }), " *semanticDenseData, int64_t *outSize)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取识别到的高精几何重建对象数据中的稠密点云数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsemanticdense_release",
              children: "HMS_AREngine_ARSemanticDense_Release"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsemanticdensedata",
              children: "AREngine_ARSemanticDenseData"
            }), " *semanticDenseData)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放高精几何重建对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_acquirenewanchor",
              children: "HMS_AREngine_ARSession_AcquireNewAnchor"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpose",
              children: "AREngine_ARPose"
            }), " *pose, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_aranchor",
              children: "AREngine_ARAnchor"
            }), " **outAnchor)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个持续跟踪的锚点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_configure",
              children: "HMS_AREngine_ARSession_Configure"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), "会话。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_create",
              children: "HMS_AREngine_ARSession_Create"
            }), "(void *env, void *applicationContext, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " **outSessionPointer)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个新的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), "会话。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_create_human_perception",
              children: "HMS_AREngine_ARSession_Create_Human_Perception"
            }), "(void *env, void *applicationContext, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " **outSessionPointer)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个新的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), "人体追踪会话。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_destroy",
              children: "HMS_AREngine_ARSession_Destroy"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["释放", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), "会话使用的资源。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_getcameraconfig",
              children: "HMS_AREngine_ARSession_GetCameraConfig"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arcameraconfig",
              children: "AREngine_ARCameraConfig"
            }), " *outCameraConfig)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取相机配置信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_getallanchors",
              children: "HMS_AREngine_ARSession_GetAllAnchors"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_aranchorlist",
              children: "AREngine_ARAnchorList"
            }), " *outAnchorList)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取所有锚点，包括", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artrackingstate",
              children: "AREngine_ARTrackingState"
            }), "中包含的所有状态下的锚点。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_getalltrackables",
              children: "HMS_AREngine_ARSession_GetAllTrackables"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artrackabletype",
              children: "AREngine_ARTrackableType"
            }), " filterType, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artrackablelist",
              children: "AREngine_ARTrackableList"
            }), " *outTrackableList)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取所有指定类型的可跟踪对象集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_pause",
              children: "HMS_AREngine_ARSession_Pause"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "暂停会话，停止相机预览流，不清除平面和锚点数据，释放相机（否则其他应用无法使用相机服务）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_resume",
              children: "HMS_AREngine_ARSession_Resume"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开始运行", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), "，或者在调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_pause",
              children: "HMS_AREngine_ARSession_Pause"
            }), "以后恢复", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), "的运行状态。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_setcameragltexture",
              children: "HMS_AREngine_ARSession_SetCameraGLTexture"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, uint32_t textureId)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置可用于存储相机预览流数据的OpenGL纹理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_setdisplaygeometry",
              children: "HMS_AREngine_ARSession_SetDisplayGeometry"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arposetype",
              children: "AREngine_ARPoseType"
            }), " rotation, int32_t width, int32_t height)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置显示的高和宽，以Pixel为单位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_stop",
              children: "HMS_AREngine_ARSession_Stop"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止AR Engine，停止相机预览流，清除平面和锚点数据，并释放相机，终止本次会话。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_update",
              children: "HMS_AREngine_ARSession_Update"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arframe",
              children: "AREngine_ARFrame"
            }), " *outFrame)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新AR Engine的计算结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_artarget_getaxisalignedboundingbox",
              children: "HMS_AREngine_ARTarget_GetAxisAlignedBoundingBox"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artarget",
              children: "AREngine_ARTarget"
            }), " *target, float *outAabb, int32_t aabbSize)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取语义物体最小外接包围盒坐标，坐标格式为（xmin，ymin，zmin，xmax，ymax，zmax）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_artarget_getcenterpose",
              children: "HMS_AREngine_ARTarget_GetCenterPose"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artarget",
              children: "AREngine_ARTarget"
            }), " *target, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpose",
              children: "AREngine_ARPose"
            }), " *outARPose)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取从目标语义对象的局部坐标系到世界坐标系转换的位姿对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_artarget_getradius",
              children: "HMS_AREngine_ARTarget_GetRadius"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artarget",
              children: "AREngine_ARTarget"
            }), " *target, float *radius)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取语义物体的球体半径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_artarget_getshapetype",
              children: "HMS_AREngine_ARTarget_GetShapeType"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artarget",
              children: "AREngine_ARTarget"
            }), " *target, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artargetshapelabel",
              children: "AREngine_ARTargetShapeLabel"
            }), " *shape)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取语义物体的形状类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_artrackable_acquirenewanchor",
              children: "HMS_AREngine_ARTrackable_AcquireNewAnchor"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artrackable",
              children: "AREngine_ARTrackable"
            }), " *trackable, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arpose",
              children: "AREngine_ARPose"
            }), " *pose, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_aranchor",
              children: "AREngine_ARAnchor"
            }), " **outAnchor)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过可跟踪对象的位姿信息创建对应的锚点对象，该锚点将和当前的可跟踪对象绑定。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_artrackable_getanchors",
              children: "HMS_AREngine_ARTrackable_GetAnchors"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artrackable",
              children: "AREngine_ARTrackable"
            }), " *trackable, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_aranchorlist",
              children: "AREngine_ARAnchorList"
            }), " *outAnchorList)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取绑定到输入可跟踪对象的锚点对象列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_artrackable_gettrackingstate",
              children: "HMS_AREngine_ARTrackable_GetTrackingState"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artrackable",
              children: "AREngine_ARTrackable"
            }), " *trackable, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artrackingstate",
              children: "AREngine_ARTrackingState"
            }), " *outTrackingState)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前可跟踪对象的跟踪状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_artrackable_gettype",
              children: "HMS_AREngine_ARTrackable_GetType"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artrackable",
              children: "AREngine_ARTrackable"
            }), " *trackable, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artrackabletype",
              children: "AREngine_ARTrackableType"
            }), " *outTrackableType)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取可跟踪对象的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_artrackable_release",
              children: "HMS_AREngine_ARTrackable_Release"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artrackable",
              children: "AREngine_ARTrackable"
            }), " *trackable)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放可跟踪对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_artrackablelist_acquireitem",
              children: "HMS_AREngine_ARTrackableList_AcquireItem"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artrackablelist",
              children: "AREngine_ARTrackableList"
            }), " *trackableList, int32_t index, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artrackable",
              children: "AREngine_ARTrackable"
            }), " **outTrackable)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从可跟踪列表中获取指定index的对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_artrackablelist_create",
              children: "HMS_AREngine_ARTrackableList_Create"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artrackablelist",
              children: "AREngine_ARTrackableList"
            }), " **outTrackableList)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个可跟踪对象列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_artrackablelist_destroy",
              children: "HMS_AREngine_ARTrackableList_Destroy"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artrackablelist",
              children: "AREngine_ARTrackableList"
            }), " *trackableList)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放可跟踪对象列表，以及它持有的所有锚点引用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_artrackablelist_getsize",
              children: "HMS_AREngine_ARTrackableList_GetSize"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artrackablelist",
              children: "AREngine_ARTrackableList"
            }), " *trackableList, int32_t *outSize)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取此列表中的可跟踪对象的数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arbody_getskeletonconfidence",
              children: "HMS_AREngine_ARBody_GetSkeletonConfidence"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arbody",
              children: "AREngine_ARBody"
            }), " *body, const float **outConfidence)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取人体对象每个骨骼点检测的置信度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arbody_getskeletonconnection",
              children: "HMS_AREngine_ARBody_GetSkeletonConnection"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arbody",
              children: "AREngine_ARBody"
            }), " *body, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arbodyskeletontype",
              children: "AREngine_ARBodySkeletonType"
            }), " **outSkeletonConnection)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取人体对象骨骼点之间的链接关系数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arbody_getskeletonconnectionsize",
              children: "HMS_AREngine_ARBody_GetSkeletonConnectionSize"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arbody",
              children: "AREngine_ARBody"
            }), " *body, int32_t *outConnectionCount)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取人体对象骨骼点之间的链接关系总数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arbody_getskeletontypes",
              children: "HMS_AREngine_ARBody_GetSkeletonTypes"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arbody",
              children: "AREngine_ARBody"
            }), " *body, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arbodyskeletontype",
              children: "AREngine_ARBodySkeletonType"
            }), " **outSkeletonTypes)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取识别出的人体对象骨骼点类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arbody_getskeletonpointcount",
              children: "HMS_AREngine_ARBody_GetSkeletonPointCount"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arbody",
              children: "AREngine_ARBody"
            }), " *body, int32_t *outPointCount)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取人体对象的骨骼点个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arbody_getskeletonpointdata2d",
              children: "HMS_AREngine_ARBody_GetSkeletonPointData2D"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arbody",
              children: "AREngine_ARBody"
            }), " *body, const float **outSkeletonPointData2D)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当运行2D骨骼跟踪算法时，返回人体骨骼点的坐标数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arbody_getskeletonpointisvalid",
              children: "HMS_AREngine_ARBody_GetSkeletonPointIsValid"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arbody",
              children: "AREngine_ARBody"
            }), " *body, const int32_t **outSkeletonPointIsValid)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取人体对象骨骼点的坐标是否有效，返回有效性数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arbody_getbodytrackid",
              children: "HMS_AREngine_ARBody_GetBodyTrackId"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arbody",
              children: "AREngine_ARBody"
            }), " *body, const int32_t *outBodyTrackId)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定人体对象的标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arbody_getbodytimestamp",
              children: "HMS_AREngine_ARBody_GetBodyTimeStamp"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arbody",
              children: "AREngine_ARBody"
            }), " *body, int64_t *timeStamp)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取人体对象的检测时间点，表示触发检测人体对象距离启动相机的时间间隔，单位为ns。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arstatus",
              children: "AREngine_ARStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_setbodydetectednum",
              children: "HMS_AREngine_ARConfig_SetBodyDetectedNum"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arconfig",
              children: "AREngine_ARConfig"
            }), " *config, int32_t maxNum)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置追踪人数。"
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