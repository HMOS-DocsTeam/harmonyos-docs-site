"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["803369"], {
505783(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_xengine_api_xengine_c_xengine_kit_total_xengine_kit_annotated_xengine_kit_xeg_nngidescription_xengine_kit_xeg_nngidescription_md_e27_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-xengine-api-xengine-c-xengine-kit-total-xengine-kit-annotated-xengine-kit-xeg-nngidescription-xengine-kit-xeg-nngidescription-md-e27.json
var site_docs_ref_xengine_api_xengine_c_xengine_kit_total_xengine_kit_annotated_xengine_kit_xeg_nngidescription_xengine_kit_xeg_nngidescription_md_e27_namespaceObject = JSON.parse('{"id":"xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngidescription/xengine-kit-xeg-nngidescription","title":"XEG_NNGIDescription","description":"概述","source":"@site/docs-ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngidescription/xengine-kit-xeg-nngidescription.md","sourceDirName":"xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngidescription","slug":"/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngidescription/xengine-kit-xeg-nngidescription","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngidescription/xengine-kit-xeg-nngidescription","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"XEG_NNGIDescription","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-nngidescription","kit":"图形","last_updated":"2026-04-22","slug":"xengine-kit-xeg-nngidescription"},"sidebar":"ref","previous":{"title":"XEG_NNGICreateInfo","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngicreateinfo/xengine-kit-xeg-nngicreateinfo"},"next":{"title":"XEG_RTAOParameters","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtaoparameters/xengine-kit-xeg-rtaoparameters"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngidescription/xengine-kit-xeg-nngidescription.md


const frontMatter = {
	title: 'XEG_NNGIDescription',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-nngidescription',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'xengine-kit-xeg-nngidescription'
};
const contentTitle = 'XEG_NNGIDescription';

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
  "value": "inferenceCameraProjectionMatrix",
  "id": "inferencecameraprojectionmatrix",
  "level": 3
}, {
  "value": "inferenceCameraViewMatrix",
  "id": "inferencecameraviewmatrix",
  "level": 3
}, {
  "value": "inferenceInputBaseColorMetallicImage",
  "id": "inferenceinputbasecolormetallicimage",
  "level": 3
}, {
  "value": "inferenceInputDepthImage",
  "id": "inferenceinputdepthimage",
  "level": 3
}, {
  "value": "inferenceInputNormalImage",
  "id": "inferenceinputnormalimage",
  "level": 3
}, {
  "value": "inferenceOutputGIImage",
  "id": "inferenceoutputgiimage",
  "level": 3
}, {
  "value": "isSceneUnbounded",
  "id": "issceneunbounded",
  "level": 3
}, {
  "value": "pNext",
  "id": "pnext",
  "level": 3
}, {
  "value": "sceneAabb",
  "id": "sceneaabb",
  "level": 3
}, {
  "value": "spatialScaleFactor",
  "id": "spatialscalefactor",
  "level": 3
}, {
  "value": "sType",
  "id": "stype",
  "level": 3
}, {
  "value": "trainingCameraProjectionMatrix",
  "id": "trainingcameraprojectionmatrix",
  "level": 3
}, {
  "value": "trainingCameraViewMatrix",
  "id": "trainingcameraviewmatrix",
  "level": 3
}, {
  "value": "trainingInputBaseColorMetallicImage",
  "id": "traininginputbasecolormetallicimage",
  "level": 3
}, {
  "value": "trainingInputGIImage",
  "id": "traininginputgiimage",
  "level": 3
}, {
  "value": "trainingInputNormalImage",
  "id": "traininginputnormalimage",
  "level": 3
}, {
  "value": "trainingInputPositionImage",
  "id": "traininginputpositionimage",
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
        id: "xeg_nngidescription",
        children: "XEG_NNGIDescription"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述更新NNGI用于计算光线追踪全局光照的所需的信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine",
        children: "XEngine"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-rtgi-8h/xengine-kit-xeg-vulkan-rtgi-8h",
        children: "xeg_vulkan_rtgi.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: ["XEG_StructureType ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#stype",
              children: "sType"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["识别此结构的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_structuretype",
              children: "XEG_StructureType"
            }), "值，必须是XEG_STRUCTURE_TYPE_NNGI_DESCRIPTION。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const void * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pnext",
              children: "pNext"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向扩展结构的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["float ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#inferencecameraviewmatrix",
              children: "inferenceCameraViewMatrix"
            }), " [16]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "推理图像的相机观察矩阵，与用户生成Gbuffer使用的矩阵保持一致，必须是4*4列主序矩阵。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["float ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#inferencecameraprojectionmatrix",
              children: "inferenceCameraProjectionMatrix"
            }), " [16]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "推理图像的相机投影矩阵，与用户生成Gbuffer使用的矩阵保持一致，必须是4*4列主序矩阵。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkImageView ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#inferenceinputdepthimage",
              children: "inferenceInputDepthImage"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["推理输入深度图像，不能为空，格式必须支持深度模板附件，存储Gbuffer的depth纹理。其分辨率和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngicreateinfo/xengine-kit-xeg-nngicreateinfo",
              children: "XEG_NNGICreateInfo"
            }), "中inferenceInputSize的分辨率保持一致。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkImageView ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#inferenceinputnormalimage",
              children: "inferenceInputNormalImage"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["推理输入法线向量图像，不能为空，格式必须是至少3通道数据，RGB通道分别存储法线的xyz分量。其分辨率和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngicreateinfo/xengine-kit-xeg-nngicreateinfo",
              children: "XEG_NNGICreateInfo"
            }), "中inferenceInputSize的分辨率保持一致。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkImageView ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#inferenceinputbasecolormetallicimage",
              children: "inferenceInputBaseColorMetallicImage"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["推理输入基础颜色图像，不能为空，格式必须是至少3通道数据，RGB通道分别存储红绿蓝分量，忽略alpha通道信息。其分辨率和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngicreateinfo/xengine-kit-xeg-nngicreateinfo",
              children: "XEG_NNGICreateInfo"
            }), "中inferenceInputSize的分辨率保持一致。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkImageView ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#inferenceoutputgiimage",
              children: "inferenceOutputGIImage"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["推理输出GI图像，格式必须是至少3通道数据，RGB通道分别存储红绿蓝分量的间接光照值，忽略alpha通道信息。其分辨率和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngicreateinfo/xengine-kit-xeg-nngicreateinfo",
              children: "XEG_NNGICreateInfo"
            }), "中inferenceOutputSize的分辨率保持一致。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["float ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#trainingcameraviewmatrix",
              children: "trainingCameraViewMatrix"
            }), " [16]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "训练图像的相机观察矩阵，该矩阵与用户生成PathTracing使用的矩阵保持一致，必须是4*4列主序矩阵。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["float ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#trainingcameraprojectionmatrix",
              children: "trainingCameraProjectionMatrix"
            }), " [16]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "训练图像的相机投影矩阵，该矩阵与用户生成PathTracing使用的矩阵保持一致，必须是4*4列主序矩阵。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkImageView ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#traininginputpositionimage",
              children: "trainingInputPositionImage"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["训练输入位置图像，不能为空，格式必须是至少3通道数据，RGB通道分别存储每个像素的xyz轴坐标。其分辨率和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngicreateinfo/xengine-kit-xeg-nngicreateinfo",
              children: "XEG_NNGICreateInfo"
            }), "中trainingSize的分辨率保持一致。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkImageView ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#traininginputnormalimage",
              children: "trainingInputNormalImage"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["训练输入法向量图像，不能为空，格式必须是至少3通道数据，RGB通道分别存储法线的xyz分量。其分辨率和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngicreateinfo/xengine-kit-xeg-nngicreateinfo",
              children: "XEG_NNGICreateInfo"
            }), "中trainingSize的分辨率保持一致。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkImageView ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#traininginputbasecolormetallicimage",
              children: "trainingInputBaseColorMetallicImage"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["训练输入基础颜色图像，不能为空，格式必须是至少3通道数据，RGB通道分别存储红绿蓝分量，忽略alpha通道信息。其分辨率和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngicreateinfo/xengine-kit-xeg-nngicreateinfo",
              children: "XEG_NNGICreateInfo"
            }), "中trainingSize的分辨率保持一致。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkImageView ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#traininginputgiimage",
              children: "trainingInputGIImage"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["训练输入GI图像，不能为空，格式必须是至少3通道数据，RGB通道分别存储红绿蓝分量的辐射度值，忽略alpha通道信息。该训练图像的GI结果的质量越高，推理输出的GI结果的质量就越高。其分辨率和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngicreateinfo/xengine-kit-xeg-nngicreateinfo",
              children: "XEG_NNGICreateInfo"
            }), "中trainingSize的分辨率保持一致。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkAabbPositionsKHR ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#sceneaabb",
              children: "sceneAabb"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "渲染包围盒范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["bool ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#issceneunbounded",
              children: "isSceneUnbounded"
            }), " = false"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "渲染场景是否无界，当前只支持false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["float ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#spatialscalefactor",
              children: "spatialScaleFactor"
            }), " = 0"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "场景缩放因子，对于有界场景，无需设置，XEngine根据sceneAabb计算该值，对于无界场景，建议设置为平均深度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "结构体成员变量说明",
      children: "结构体成员变量说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inferencecameraprojectionmatrix",
      children: "inferenceCameraProjectionMatrix"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float XEG_NNGIDescription::inferenceCameraProjectionMatrix[16]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "推理图像的相机投影矩阵，与用户生成Gbuffer使用的矩阵保持一致，必须是4*4列主序矩阵。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inferencecameraviewmatrix",
      children: "inferenceCameraViewMatrix"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float XEG_NNGIDescription::inferenceCameraViewMatrix[16]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "推理图像的相机观察矩阵，与用户生成Gbuffer使用的矩阵保持一致，必须是4*4列主序矩阵。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inferenceinputbasecolormetallicimage",
      children: "inferenceInputBaseColorMetallicImage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkImageView XEG_NNGIDescription::inferenceInputBaseColorMetallicImage\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["推理输入基础颜色图像，不能为空，格式必须是至少3通道数据，RGB通道分别存储红绿蓝分量，忽略alpha通道信息。其分辨率和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngicreateinfo/xengine-kit-xeg-nngicreateinfo",
        children: "XEG_NNGICreateInfo"
      }), "中inferenceInputSize的分辨率保持一致。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inferenceinputdepthimage",
      children: "inferenceInputDepthImage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkImageView XEG_NNGIDescription::inferenceInputDepthImage\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["推理输入深度图像，不能为空，格式必须支持深度模板附件，存储Gbuffer的depth纹理。其分辨率和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngicreateinfo/xengine-kit-xeg-nngicreateinfo",
        children: "XEG_NNGICreateInfo"
      }), "中inferenceInputSize的分辨率保持一致。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inferenceinputnormalimage",
      children: "inferenceInputNormalImage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkImageView XEG_NNGIDescription::inferenceInputNormalImage\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["推理输入法线向量图像，不能为空，格式必须是至少3通道数据，RGB通道分别存储法线的xyz分量。其分辨率和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngicreateinfo/xengine-kit-xeg-nngicreateinfo",
        children: "XEG_NNGICreateInfo"
      }), "中inferenceInputSize的分辨率保持一致。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inferenceoutputgiimage",
      children: "inferenceOutputGIImage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkImageView XEG_NNGIDescription::inferenceOutputGIImage\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["推理输出GI图像，格式必须是至少3通道数据，RGB通道分别存储红绿蓝分量的间接光照值，忽略alpha通道信息。其分辨率和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngicreateinfo/xengine-kit-xeg-nngicreateinfo",
        children: "XEG_NNGICreateInfo"
      }), "中inferenceOutputSize的分辨率保持一致。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issceneunbounded",
      children: "isSceneUnbounded"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool XEG_NNGIDescription::isSceneUnbounded = false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "渲染场景是否无界，当前只支持false。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pnext",
      children: "pNext"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const void* XEG_NNGIDescription::pNext\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指向扩展结构的指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sceneaabb",
      children: "sceneAabb"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkAabbPositionsKHR XEG_NNGIDescription::sceneAabb\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "渲染包围盒范围。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "spatialscalefactor",
      children: "spatialScaleFactor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float XEG_NNGIDescription::spatialScaleFactor = 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景缩放因子，对于有界场景，无需设置，XEngine根据sceneAabb计算该值，对于无界场景，建议设置为平均深度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stype",
      children: "sType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "XEG_StructureType XEG_NNGIDescription::sType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["识别此结构的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_structuretype",
        children: "XEG_StructureType"
      }), "值，必须是XEG_STRUCTURE_TYPE_NNGI_DESCRIPTION。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trainingcameraprojectionmatrix",
      children: "trainingCameraProjectionMatrix"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float XEG_NNGIDescription::trainingCameraProjectionMatrix[16]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "训练图像的相机投影矩阵，该矩阵与用户生成PathTracing使用的矩阵保持一致，必须是4*4列主序矩阵。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trainingcameraviewmatrix",
      children: "trainingCameraViewMatrix"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float XEG_NNGIDescription::trainingCameraViewMatrix[16]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "训练图像的相机观察矩阵，该矩阵与用户生成PathTracing使用的矩阵保持一致，必须是4*4列主序矩阵。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "traininginputbasecolormetallicimage",
      children: "trainingInputBaseColorMetallicImage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkImageView XEG_NNGIDescription::trainingInputBaseColorMetallicImage\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["训练输入基础颜色图像，不能为空，格式必须是至少3通道数据，RGB通道分别存储红绿蓝分量，忽略alpha通道信息。其分辨率和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngicreateinfo/xengine-kit-xeg-nngicreateinfo",
        children: "XEG_NNGICreateInfo"
      }), "中trainingSize的分辨率保持一致。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "traininginputgiimage",
      children: "trainingInputGIImage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkImageView XEG_NNGIDescription::trainingInputGIImage\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["训练输入GI图像，不能为空，格式必须是至少3通道数据，RGB通道分别存储红绿蓝分量的辐射度值，忽略alpha通道信息。该训练图像的GI结果的质量越高，推理输出的GI结果的质量就越高。其分辨率和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngicreateinfo/xengine-kit-xeg-nngicreateinfo",
        children: "XEG_NNGICreateInfo"
      }), "中trainingSize的分辨率保持一致。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "traininginputnormalimage",
      children: "trainingInputNormalImage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkImageView XEG_NNGIDescription::trainingInputNormalImage\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["训练输入法向量图像，不能为空，格式必须是至少3通道数据，RGB通道分别存储法线的xyz分量。其分辨率和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngicreateinfo/xengine-kit-xeg-nngicreateinfo",
        children: "XEG_NNGICreateInfo"
      }), "中trainingSize的分辨率保持一致。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "traininginputpositionimage",
      children: "trainingInputPositionImage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkImageView XEG_NNGIDescription::trainingInputPositionImage\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["训练输入位置图像，不能为空，格式必须是至少3通道数据，RGB通道分别存储每个像素的xyz轴坐标。其分辨率和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngicreateinfo/xengine-kit-xeg-nngicreateinfo",
        children: "XEG_NNGICreateInfo"
      }), "中trainingSize的分辨率保持一致。"]
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