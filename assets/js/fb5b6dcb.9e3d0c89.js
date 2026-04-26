"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["417600"], {
623237(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_xengine_api_xengine_c_xengine_kit_total_xengine_kit_annotated_xengine_kit_xeg_ddgidescription_xengine_kit_xeg_ddgidescription_md_fb5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-xengine-api-xengine-c-xengine-kit-total-xengine-kit-annotated-xengine-kit-xeg-ddgidescription-xengine-kit-xeg-ddgidescription-md-fb5.json
var site_docs_ref_xengine_api_xengine_c_xengine_kit_total_xengine_kit_annotated_xengine_kit_xeg_ddgidescription_xengine_kit_xeg_ddgidescription_md_fb5_namespaceObject = JSON.parse('{"id":"xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-ddgidescription/xengine-kit-xeg-ddgidescription","title":"XEG_DDGIDescription","description":"概述","source":"@site/docs-ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-ddgidescription/xengine-kit-xeg-ddgidescription.md","sourceDirName":"xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-ddgidescription","slug":"/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-ddgidescription/xengine-kit-xeg-ddgidescription","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-ddgidescription/xengine-kit-xeg-ddgidescription","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"XEG_DDGIDescription","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-ddgidescription","kit":"图形","last_updated":"2026-04-22","slug":"xengine-kit-xeg-ddgidescription"},"sidebar":"ref","previous":{"title":"XEG_DDGICreateInfo","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-ddgicreateinfo/xengine-kit-xeg-ddgicreateinfo"},"next":{"title":"XEG_DDGIVolumeEntryParameters","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-ddgivolumeentryparameters/xengine-kit-xeg-ddgivolumeentryparameters"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-ddgidescription/xengine-kit-xeg-ddgidescription.md


const frontMatter = {
	title: 'XEG_DDGIDescription',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-ddgidescription',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'xengine-kit-xeg-ddgidescription'
};
const contentTitle = 'XEG_DDGIDescription';

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
  "value": "enableVolumeNumber",
  "id": "enablevolumenumber",
  "level": 3
}, {
  "value": "inputBasecolorMetallicImage",
  "id": "inputbasecolormetallicimage",
  "level": 3
}, {
  "value": "inputDepthImage",
  "id": "inputdepthimage",
  "level": 3
}, {
  "value": "inputDirectionImage",
  "id": "inputdirectionimage",
  "level": 3
}, {
  "value": "inputNormalImage",
  "id": "inputnormalimage",
  "level": 3
}, {
  "value": "inputProbeCount",
  "id": "inputprobecount",
  "level": 3
}, {
  "value": "inputRayHitNormalAndMetallicImage",
  "id": "inputrayhitnormalandmetallicimage",
  "level": 3
}, {
  "value": "inputRayRadianceDistanceImage",
  "id": "inputrayradiancedistanceimage",
  "level": 3
}, {
  "value": "inputVolumeIndexAndProbeIndex",
  "id": "inputvolumeindexandprobeindex",
  "level": 3
}, {
  "value": "outputGIImage",
  "id": "outputgiimage",
  "level": 3
}, {
  "value": "outputProbeCount",
  "id": "outputprobecount",
  "level": 3
}, {
  "value": "outputVolumeIndexAndProbeIndex",
  "id": "outputvolumeindexandprobeindex",
  "level": 3
}, {
  "value": "pNext",
  "id": "pnext",
  "level": 3
}, {
  "value": "projectionMatrix",
  "id": "projectionmatrix",
  "level": 3
}, {
  "value": "pVolumeEntryParameters",
  "id": "pvolumeentryparameters",
  "level": 3
}, {
  "value": "sType",
  "id": "stype",
  "level": 3
}, {
  "value": "viewMatrix",
  "id": "viewmatrix",
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
        id: "xeg_ddgidescription",
        children: "XEG_DDGIDescription"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述更新DDGI探针辐照度及渲染输出GI图像所需的信息。"
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
            }), "值，必须是XEG_STRUCTURE_TYPE_DDGI_DESCRIPTION。"]
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
              href: "#viewmatrix",
              children: "viewMatrix"
            }), " [16]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机观察矩阵，必须是4*4列主序矩阵。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["float ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#projectionmatrix",
              children: "projectionMatrix"
            }), " [16]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机投影矩阵，必须是4*4列主序矩阵。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkImageView ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputnormalimage",
              children: "inputNormalImage"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入Gbuffer法向量图像，其宽高必须和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-ddgicreateinfo/xengine-kit-xeg-ddgicreateinfo",
              children: "XEG_DDGICreateInfo"
            }), "中viewSize的宽高保持一致。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkImageView ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputdepthimage",
              children: "inputDepthImage"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入Gbuffer深度图像，其宽高必须和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-ddgicreateinfo/xengine-kit-xeg-ddgicreateinfo",
              children: "XEG_DDGICreateInfo"
            }), "中viewSize的宽高保持一致。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkImageView ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputbasecolormetallicimage",
              children: "inputBasecolorMetallicImage"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入Gbuffer基础颜色和金属度图像，其宽高必须和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-ddgicreateinfo/xengine-kit-xeg-ddgicreateinfo",
              children: "XEG_DDGICreateInfo"
            }), "中viewSize的宽高保持一致。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkImageView ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputdirectionimage",
              children: "inputDirectionImage"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入探针发射光线方向图像，其宽高分别为：探针发射光线数量，输入探针数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkImageView ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputrayradiancedistanceimage",
              children: "inputRayRadianceDistanceImage"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入探针发射光线交点的辐射率及距离图像，其宽高分别为：探针发射光线数量，输入探针数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkImageView ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputrayhitnormalandmetallicimage",
              children: "inputRayHitNormalAndMetallicImage"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入探针发射光线交点的法向量及金属度图像，其宽高分别为：探针发射光线数量，输入探针数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkBuffer ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputvolumeindexandprobeindex",
              children: "inputVolumeIndexAndProbeIndex"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入探针的索引信息，对应于探针发射光线的信息，每个数据为两个uint值（探针索引/体积索引）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputprobecount",
              children: "inputProbeCount"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入探针数量，对应于inputVolumeIndexAndProbeIndex中的有效数据个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkBuffer ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#outputvolumeindexandprobeindex",
              children: "outputVolumeIndexAndProbeIndex"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出探针的索引信息，指示用户下一帧如何发射光线，每个数据为两个uint值（探针索引/体积索引）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkBuffer ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#outputprobecount",
              children: "outputProbeCount"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出探针数量，对应于outputVolumeIndexAndProbeIndex中的有效数据个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkImageView ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#outputgiimage",
              children: "outputGIImage"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出GI 2D图像，其宽高必须和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-ddgicreateinfo/xengine-kit-xeg-ddgicreateinfo",
              children: "XEG_DDGICreateInfo"
            }), "中viewSize的宽高保持一致，VkFormat为VK_FORMAT_R8G8B8A8_UNORM。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#enablevolumenumber",
              children: "enableVolumeNumber"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用的体积数量，必须不大于", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-ddgicreateinfo/xengine-kit-xeg-ddgicreateinfo",
              children: "XEG_DDGICreateInfo"
            }), "中的numberVolume值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-ddgivolumeentryparameters/xengine-kit-xeg-ddgivolumeentryparameters",
              children: "XEG_DDGIVolumeEntryParameters"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pvolumeentryparameters",
              children: "pVolumeEntryParameters"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入体积参数信息，对应于", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-ddgivolumeentryparameters/xengine-kit-xeg-ddgivolumeentryparameters",
              children: "XEG_DDGIVolumeEntryParameters"
            }), "。该结构体数组的大小必须等于enableVolumeNumber的值。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "结构体成员变量说明",
      children: "结构体成员变量说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enablevolumenumber",
      children: "enableVolumeNumber"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t XEG_DDGIDescription::enableVolumeNumber\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用的体积数量，必须不大于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-ddgicreateinfo/xengine-kit-xeg-ddgicreateinfo",
        children: "XEG_DDGICreateInfo"
      }), "中的numberVolume值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inputbasecolormetallicimage",
      children: "inputBasecolorMetallicImage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkImageView XEG_DDGIDescription::inputBasecolorMetallicImage\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["输入Gbuffer基础颜色和金属度图像，其宽高必须和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-ddgicreateinfo/xengine-kit-xeg-ddgicreateinfo",
        children: "XEG_DDGICreateInfo"
      }), "中viewSize的宽高保持一致。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inputdepthimage",
      children: "inputDepthImage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkImageView XEG_DDGIDescription::inputDepthImage\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["输入Gbuffer深度图像，其宽高必须和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-ddgicreateinfo/xengine-kit-xeg-ddgicreateinfo",
        children: "XEG_DDGICreateInfo"
      }), "中viewSize的宽高保持一致。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inputdirectionimage",
      children: "inputDirectionImage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkImageView XEG_DDGIDescription::inputDirectionImage\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入探针发射光线方向图像，其宽高分别为：探针发射光线数量，输入探针数量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inputnormalimage",
      children: "inputNormalImage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkImageView XEG_DDGIDescription::inputNormalImage\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["输入Gbuffer法向量图像，其宽高必须和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-ddgicreateinfo/xengine-kit-xeg-ddgicreateinfo",
        children: "XEG_DDGICreateInfo"
      }), "中viewSize的宽高保持一致。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inputprobecount",
      children: "inputProbeCount"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t XEG_DDGIDescription::inputProbeCount\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入探针数量，对应于inputVolumeIndexAndProbeIndex中的有效数据个数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inputrayhitnormalandmetallicimage",
      children: "inputRayHitNormalAndMetallicImage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkImageView XEG_DDGIDescription::inputRayHitNormalAndMetallicImage\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入探针发射光线交点的法向量及金属度图像，其宽高分别为：探针发射光线数量，输入探针数量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inputrayradiancedistanceimage",
      children: "inputRayRadianceDistanceImage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkImageView XEG_DDGIDescription::inputRayRadianceDistanceImage\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入探针发射光线交点的辐射率及距离图像，其宽高分别为：探针发射光线数量，输入探针数量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inputvolumeindexandprobeindex",
      children: "inputVolumeIndexAndProbeIndex"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkBuffer XEG_DDGIDescription::inputVolumeIndexAndProbeIndex\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入探针的索引信息，对应于探针发射光线的信息，每个数据为两个uint值（探针索引/体积索引）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "outputgiimage",
      children: "outputGIImage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkImageView XEG_DDGIDescription::outputGIImage\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["输出GI 2D图像，其宽高必须和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-ddgicreateinfo/xengine-kit-xeg-ddgicreateinfo",
        children: "XEG_DDGICreateInfo"
      }), "中viewSize的宽高保持一致，VkFormat为VK_FORMAT_R8G8B8A8_UNORM。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "outputprobecount",
      children: "outputProbeCount"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkBuffer XEG_DDGIDescription::outputProbeCount\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输出探针数量，对应于outputVolumeIndexAndProbeIndex中的有效数据个数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "outputvolumeindexandprobeindex",
      children: "outputVolumeIndexAndProbeIndex"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkBuffer XEG_DDGIDescription::outputVolumeIndexAndProbeIndex\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输出探针的索引信息，指示用户下一帧如何发射光线，每个数据为两个uint值（探针索引/体积索引）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pnext",
      children: "pNext"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const void* XEG_DDGIDescription::pNext\n"
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
      id: "projectionmatrix",
      children: "projectionMatrix"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float XEG_DDGIDescription::projectionMatrix[16]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机投影矩阵，必须是4*4列主序矩阵。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pvolumeentryparameters",
      children: "pVolumeEntryParameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const struct XEG_DDGIVolumeEntryParameters* XEG_DDGIDescription::pVolumeEntryParameters\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["输入体积参数信息，对应于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-ddgivolumeentryparameters/xengine-kit-xeg-ddgivolumeentryparameters",
        children: "XEG_DDGIVolumeEntryParameters"
      }), "。该结构体数组的大小必须等于enableVolumeNumber的值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stype",
      children: "sType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "XEG_StructureType XEG_DDGIDescription::sType\n"
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
      }), "值，必须是XEG_STRUCTURE_TYPE_DDGI_DESCRIPTION。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "viewmatrix",
      children: "viewMatrix"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float XEG_DDGIDescription::viewMatrix[16]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机观察矩阵，必须是4*4列主序矩阵。"
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