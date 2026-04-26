"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["328636"], {
622881(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_core_vision_api_core_vision_arkts_core_vision_skeleton_detection_api_core_vision_skeleton_detection_api_md_7bb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-core-vision-api-core-vision-arkts-core-vision-skeleton-detection-api-core-vision-skeleton-detection-api-md-7bb.json
var site_docs_ref_core_vision_api_core_vision_arkts_core_vision_skeleton_detection_api_core_vision_skeleton_detection_api_md_7bb_namespaceObject = JSON.parse('{"id":"core-vision-api/core-vision-arkts/core-vision-skeleton-detection-api/core-vision-skeleton-detection-api","title":"skeletonDetection（骨骼点检测）","description":"骨骼点检测可以从图像中检测出人体的关键骨骼点，如头部、肩部、手肘、手腕、髋部、膝盖、脚踝等，并给出它们的位置坐标和置信度。同时，骨骼点检测是一项底层的AI能力，还可以与Core Vision Kit中其他AI能力如人脸识别、文字识别等组合使用，开发出更加智能化的应用。","source":"@site/docs-ref/core-vision-api/core-vision-arkts/core-vision-skeleton-detection-api/core-vision-skeleton-detection-api.md","sourceDirName":"core-vision-api/core-vision-arkts/core-vision-skeleton-detection-api","slug":"/core-vision-api/core-vision-arkts/core-vision-skeleton-detection-api/core-vision-skeleton-detection-api","permalink":"/harmonyos-docs-site/ref/core-vision-api/core-vision-arkts/core-vision-skeleton-detection-api/core-vision-skeleton-detection-api","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"skeletonDetection（骨骼点检测）","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/core-vision-skeleton-detection-api","kit":"AI","last_updated":"2026-04-22","slug":"core-vision-skeleton-detection-api"},"sidebar":"ref","previous":{"title":"objectDetection（多目标识别）","permalink":"/harmonyos-docs-site/ref/core-vision-api/core-vision-arkts/core-vision-object-detection-api/core-vision-object-detection-api"},"next":{"title":"ArkTS API错误码","permalink":"/harmonyos-docs-site/ref/core-vision-api/core-vision-error-code/core-vision-error-code"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/core-vision-api/core-vision-arkts/core-vision-skeleton-detection-api/core-vision-skeleton-detection-api.md


const frontMatter = {
	title: 'skeletonDetection（骨骼点检测）',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/core-vision-skeleton-detection-api',
	kit: 'AI',
	last_updated: '2026-04-22',
	slug: 'core-vision-skeleton-detection-api'
};
const contentTitle = 'skeletonDetection（骨骼点检测）';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "SkeletonPointType",
  "id": "skeletonpointtype",
  "level": 2
}, {
  "value": "SkeletonPoint",
  "id": "skeletonpoint",
  "level": 2
}, {
  "value": "Skeleton",
  "id": "skeleton",
  "level": 2
}, {
  "value": "SkeletonDetectionResponse",
  "id": "skeletondetectionresponse",
  "level": 2
}, {
  "value": "SkeletonDetector",
  "id": "skeletondetector",
  "level": 2
}, {
  "value": "create",
  "id": "create",
  "level": 3
}, {
  "value": "destroy",
  "id": "destroy",
  "level": 3
}, {
  "value": "process",
  "id": "process",
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
        id: "skeletondetection骨骼点检测",
        children: "skeletonDetection（骨骼点检测）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "骨骼点检测可以从图像中检测出人体的关键骨骼点，如头部、肩部、手肘、手腕、髋部、膝盖、脚踝等，并给出它们的位置坐标和置信度。同时，骨骼点检测是一项底层的AI能力，还可以与Core Vision Kit中其他AI能力如人脸识别、文字识别等组合使用，开发出更加智能化的应用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { visionBase, skeletonDetection } from '@kit.CoreVisionKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "skeletonpointtype",
      children: "SkeletonPointType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "骨骼点类型的枚举类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.Vision.SkeletonDetection"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "NOSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼻子。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEFT_EYE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左眼。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RIGHT_EYE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右眼。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEFT_EAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左耳。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RIGHT_EAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右耳。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEFT_SHOULDER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左肩。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RIGHT_SHOULDER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右肩。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEFT_ELBOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左肘。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RIGHT_ELBOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右肘。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEFT_WRIST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左腕。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RIGHT_WRIST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右腕。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEFT_HIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左髋。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RIGHT_HIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右髋。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEFT_KNEE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左膝。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RIGHT_KNEE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右膝。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEFT_ANKLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左脚踝。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RIGHT_ANKLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右脚踝。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "skeletonpoint",
      children: "SkeletonPoint"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "详细的骨骼点信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.Vision.SkeletonDetection"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "point"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["visionBase.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-vision-api/core-vision-arkts/core-vision-vision-base-api/core-vision-vision-base-api#point",
              children: "Point"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "骨骼点的图像坐标，即它在图像中的x和y位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "score"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "骨骼点的置信度。取值范围是(0,1)。0表示置信度最低，1表示置信度最高，置信度越高，说明这个点的位置越可靠。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#skeletonpointtype",
              children: "SkeletonPointType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "骨骼点的类型，即它在人体骨骼模型中的位置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "skeleton",
      children: "Skeleton"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于描述一个完整的人体骨骼检测结果。包括总体置信度和人体在图像中的大致位置，还详细列出了各个关键点的位置和类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.Vision.SkeletonDetection"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "boundingBox"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["visionBase.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-vision-api/core-vision-arkts/core-vision-vision-base-api/core-vision-vision-base-api#boundingbox",
              children: "BoundingBox"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "骨骼的边界框，也就是所有骨骼点加一起的矩形框。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "score"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示骨骼点的总体置信度,取值范围是(0,1)，0表示置信度最低，1表示置信度最高。反映了这个骨骼整体的可信程度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "points"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#skeletonpoint",
              children: "SkeletonPoint"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回包含骨骼点详情的对象数组。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "skeletondetectionresponse",
      children: "SkeletonDetectionResponse"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于表示一次骨骼点检测的完整结果。作为骨骼点检测的顶层输出，封装了一次检测的全部结果。继承自visionBase的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-vision-api/core-vision-arkts/core-vision-vision-base-api/core-vision-vision-base-api#response",
        children: "Response"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.Vision.SkeletonDetection"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "skeletons"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#skeleton",
              children: "Skeleton"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含图片内所有人的人体骨骼点结果集合。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "skeletondetector",
      children: "SkeletonDetector"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["定义骨骼点检测的接口和基本结构。继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-vision-api/core-vision-arkts/core-vision-vision-base-api/core-vision-vision-base-api#analyzer",
        children: "visionBase.Analyzer"
      }), "类。它有以下功能函数："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "private constructor()：这是一个私有构造函数，意味着不能直接通过 new 关键字实例化SkeletonDetector。必须通过 create() 静态方法来创建实例。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "static create(): Promise<SkeletonDetector>：这是一个静态方法，用于创建SkeletonDetector的实例。使用Promise异步回调。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "process(request: visionBase.Request): Promise<SkeletonDetectionResponse>：这是一个实例方法，用于处理骨骼点检测请求。使用Promise异步回调。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "destroy(): Promise<void>：这是一个实例方法，用于销毁骨骼点检测的进程，使用Promise异步回调。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.Vision.SkeletonDetection"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "constructor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "强制开发者必须使用static create()方法来创建SkeletonDetector的实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "create"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化骨骼点检测接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "骨骼点检测的实际执行接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "destroy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "骨骼点检测的销毁接口。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "create",
      children: "create"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static create(): Promise<SkeletonDetector>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "骨骼点检测的初始化接口。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.Vision.SkeletonDetection"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
              href: "#skeletondetector",
              children: "SkeletonDetector"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise对象，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#skeletondetector",
              children: "SkeletonDetector"
            }), "实例。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-vision-api/core-vision-error-code/core-vision-error-code",
        children: "Core Vision Kit错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1011000001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to run, please try again."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1011000002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The service is abnormal."
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
        children: "import { skeletonDetection } from '@kit.CoreVisionKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nasync function createAndDestroyDetector() {\n  const detector = await skeletonDetection.SkeletonDetector.create();\n  if (detector) {\n    hilog.info(0x0000, 'skeletonDetectionSample', 'Skeleton detector created successfully');\n  } else {\n    hilog.error(0x0000,'skeletonDetectionSample','Failed to create Skeleton detector');\n    return;\n  }\n  // 使用 detector 进行一些操作\n  // ...\n\n  // 完成后销毁 detector\n  if (detector) {\n    await detector.destroy();\n    hilog.info(0x0000, 'skeletonDetectionSample', 'Skeleton detector destroyed successfully');\n  } else {\n    hilog.error(0x0000,'skeletonDetectionSample','Failed to destroy Skeleton detector');\n  }\n}\n\n@Entry\n@Component\nstruct Page {\n\n  build() {\n    Column(){\n      Button('createAndDestroyDetector').onClick(() => {\n        createAndDestroyDetector()\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "destroy",
      children: "destroy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "destroy(): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁骨骼点检测能力。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.Vision.SkeletonDetection"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无返回结果的Promise对象。"
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
        children: "import { skeletonDetection } from '@kit.CoreVisionKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nasync function createAndDestroyDetector() {\n  const detector = await skeletonDetection.SkeletonDetector.create();\n  if (detector) {\n    hilog.info(0x0000, 'skeletonDetectionSample', 'Skeleton detector created successfully');\n  } else {\n    hilog.error(0x0000,'skeletonDetectionSample','Failed to create Skeleton detector');\n    return;\n  }\n  // 使用 detector 进行一些操作\n  // ...\n\n  // 完成后销毁 detector\n  if (detector) {\n    await detector.destroy();\n    hilog.info(0x0000, 'skeletonDetectionSample', 'Skeleton detector destroyed successfully');\n  } else {\n    hilog.error(0x0000,'skeletonDetectionSample','Failed to destroy Skeleton detector');\n  }\n}\n\n@Entry\n@Component\nstruct Page {\n\n  build() {\n    Column(){\n      Button('createAndDestroyDetector').onClick(() => {\n        createAndDestroyDetector()\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "process",
      children: "process"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "process(request: visionBase.Request): Promise<SkeletonDetectionResponse>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建骨骼点检测实例并执行骨骼点检测。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.Vision.SkeletonDetection"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "request"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["visionBase.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-vision-api/core-vision-arkts/core-vision-vision-base-api/core-vision-vision-base-api#request",
              children: "Request"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片实例。骨骼点检测接口仅支持传入一张图片，不支持传入多张图片。  具体规格请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/core-vision-kit-guide/core-vision-introduction#%E7%BA%A6%E6%9D%9F%E4%B8%8E%E9%99%90%E5%88%B6",
              children: "约束与限制"
            }), "。"]
          })]
        })
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
              href: "#skeletondetectionresponse",
              children: "SkeletonDetectionResponse"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回骨骼点识别的结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-vision-api/core-vision-error-code/core-vision-error-code",
        children: "Core Vision Kit错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The parameter check failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1011000001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to run, please try again."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1011000003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to run the model, please try again."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1011000004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Running the model timed out. Try again later."
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
        children: "import { skeletonDetection, visionBase } from '@kit.CoreVisionKit';\nimport { image } from '@kit.ImageKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\nlet imageSource: image.ImageSource | undefined = undefined;\nlet chooseImage: image.PixelMap | undefined = undefined;\n\n// 创建骨骼检测器\nlet detector: skeletonDetection.SkeletonDetector | undefined = undefined;\n\nasync function createDetector() {\n  detector = await skeletonDetection.SkeletonDetector.create();\n  hilog.info(0x0000, 'skeletonDetectionSample', 'Skeleton detector created successfully');\n}\n\n@Entry\n@Component\nstruct Page {\n\n  build() {\n    Column(){\n      Button('Button').onClick(() => {\n        // 将图片转换为PixelMap，可以通过图库获取\n        let photoPicker: photoAccessHelper.PhotoViewPicker = new photoAccessHelper.PhotoViewPicker();\n        photoPicker.select({\n          MIMEType: photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE,\n          maxSelectNumber: 1\n        }).then((res: photoAccessHelper.PhotoSelectResult) => {\n          let uri = res.photoUris[0];\n          if (uri === undefined) {\n            hilog.info(0x0000, 'skeletonDetectionSample', 'uri is undefined');\n            return\n          }\n          setTimeout(async () => {\n            let file = await fileIo.open(uri, fileIo.OpenMode.READ_ONLY);\n            imageSource = image.createImageSource(file.fd);\n            chooseImage = await imageSource.createPixelMap();\n            hilog.info(0x0000, 'skeletonDetectionSample', 'chooseImage:', chooseImage);\n            if (!chooseImage) {\n              return\n            }\n\n            // 创建检测器\n            await createDetector();\n\n            if (!detector) {\n              hilog.error(0x0000, 'skeletonDetectionSample', 'Detector is not initialized');\n              return;\n            }\n\n            // 调用骨骼检测接口\n            let request: visionBase.Request = {\n              inputData: { pixelMap: chooseImage },\n              scene: visionBase.SceneMode.FOREGROUND\n            };\n\n            let response: skeletonDetection.SkeletonDetectionResponse = await detector.process(request);\n\n            if (response.skeletons.length === 0) {\n              hilog.info(0x0000, 'skeletonDetectionSample', 'No skeletons detected in the image.');\n            } else {\n              hilog.info(0x0000, 'skeletonDetectionSample', `Detected ${response.skeletons.length} skeletons.`);\n              response.skeletons.forEach((skeleton, index) => {\n                hilog.info(0x0000, 'skeletonDetectionSample', `  Score: ${skeleton.score}`);\n                hilog.info(0x0000, 'skeletonDetectionSample', `  Number of points: ${skeleton.points.length}`);\n                skeleton.points.forEach(point => {\n                  hilog.info(0x0000, 'skeletonDetectionSample', `    ${skeletonDetection.SkeletonPointType[point.type]}: (${point.point.x}, ${point.point.y}), Score: ${point.score}`);\n                });\n              });\n            }\n\n            // 清理资源\n            if (chooseImage && imageSource) {\n              void chooseImage.release();\n              void imageSource.release();\n            }\n            if (file) {\n              try {\n                await fileIo.close(file);\n              } catch (err) {\n                hilog.error(0x0000, 'skeletonDetectionSample', `Failed to close fileSource. Code: ${err.code}, message: ${err.message}`);\n              }\n            }\n            if (detector) {\n              await detector.destroy();\n              hilog.info(0x0000, 'skeletonDetectionSample', 'Skeleton detector destroyed successfully');\n            }\n          }, 100);\n        }).catch((err: BusinessError) => {\n          hilog.error(0x0000, 'skeletonDetectionSample', `Failed to get photo image uri. Code: ${err.code}, message: ${err.message}`);\n        });\n      })\n    }\n  }\n}\n"
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