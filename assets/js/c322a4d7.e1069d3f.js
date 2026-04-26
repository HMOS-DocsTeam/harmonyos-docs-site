"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["175698"], {
206609(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_core_vision_api_core_vision_arkts_core_vision_facecomparator_api_core_vision_facecomparator_api_md_c32_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-core-vision-api-core-vision-arkts-core-vision-facecomparator-api-core-vision-facecomparator-api-md-c32.json
var site_docs_ref_core_vision_api_core_vision_arkts_core_vision_facecomparator_api_core_vision_facecomparator_api_md_c32_namespaceObject = JSON.parse('{"id":"core-vision-api/core-vision-arkts/core-vision-facecomparator-api/core-vision-facecomparator-api","title":"faceComparator（人脸比对）","description":"识别人脸，对人像进行高精度比对，给出置信度分数，判断对象是否为同一个人。人脸比对技术可应用于实现对图库照片的智能分类管理等场景中。基于领先的端侧智能图像识别算法，对人脸识别准确度高，让应用体验更好。","source":"@site/docs-ref/core-vision-api/core-vision-arkts/core-vision-facecomparator-api/core-vision-facecomparator-api.md","sourceDirName":"core-vision-api/core-vision-arkts/core-vision-facecomparator-api","slug":"/core-vision-api/core-vision-arkts/core-vision-facecomparator-api/core-vision-facecomparator-api","permalink":"/harmonyos-docs-site/ref/core-vision-api/core-vision-arkts/core-vision-facecomparator-api/core-vision-facecomparator-api","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"faceComparator（人脸比对）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/core-vision-facecomparator-api","kit":"AI","last_updated":"2026-04-22","slug":"core-vision-facecomparator-api"},"sidebar":"ref","previous":{"title":"faceDetector（人脸检测）","permalink":"/harmonyos-docs-site/ref/core-vision-api/core-vision-arkts/core-vision-face-detector-api/core-vision-face-detector-api"},"next":{"title":"subjectSegmentation（主体分割）","permalink":"/harmonyos-docs-site/ref/core-vision-api/core-vision-arkts/core-vision-subjectsegmentation-api/core-vision-subjectsegmentation-api"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/core-vision-api/core-vision-arkts/core-vision-facecomparator-api/core-vision-facecomparator-api.md


const frontMatter = {
	title: 'faceComparator（人脸比对）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/core-vision-facecomparator-api',
	kit: 'AI',
	last_updated: '2026-04-22',
	slug: 'core-vision-facecomparator-api'
};
const contentTitle = 'faceComparator（人脸比对）';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "VisionInfo",
  "id": "visioninfo",
  "level": 2
}, {
  "value": "FaceCompareResult",
  "id": "facecompareresult",
  "level": 2
}, {
  "value": "faceComparator.init",
  "id": "facecomparatorinit",
  "level": 2
}, {
  "value": "faceComparator.release",
  "id": "facecomparatorrelease",
  "level": 2
}, {
  "value": "faceComparator.compareFaces",
  "id": "facecomparatorcomparefaces",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "facecomparator人脸比对",
        children: "faceComparator（人脸比对）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "识别人脸，对人像进行高精度比对，给出置信度分数，判断对象是否为同一个人。人脸比对技术可应用于实现对图库照片的智能分类管理等场景中。基于领先的端侧智能图像识别算法，对人脸识别准确度高，让应用体验更好。"
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
        children: "import { faceComparator } from '@kit.CoreVisionKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "visioninfo",
      children: "VisionInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "待识别的视觉信息，目前仅支持颜色数据格式为RGBA_8888的PixelMap类型的视觉信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.Face.Comparator"]
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
            children: "pixelMap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "image.PixelMap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["待识别的图片。  具体规格请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/core-vision-kit-guide/core-vision-introduction#%E7%BA%A6%E6%9D%9F%E4%B8%8E%E9%99%90%E5%88%B6",
              children: "约束与限制"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "facecompareresult",
      children: "FaceCompareResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "人脸比对的结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.Face.Comparator"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "isSamePerson"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否是同一个人，true代表为同一个人，false不是同一个人。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "similarity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相似度，取值范围是(0,1)的浮点数。值越大说明相似程度越高。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "facecomparatorinit",
      children: "faceComparator.init"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "init(): Promise<boolean>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始化人脸比对分析器服务。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.Face.Comparator"]
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
            children: "Promise<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回初始化是否成功。  true：初始化成功；false：初始化失败。"
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
        children: "import { faceComparator } from '@kit.CoreVisionKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nasync function initAndReleaseFaceComparator() {\n  // 初始化人脸比较服务\n  const initResult = await faceComparator.init();\n  hilog.info(0x0000, 'faceComparatorSample', `Face comparator initialization result:${initResult}`);\n\n  if (initResult) {\n    hilog.info(0x0000, 'faceComparatorSample', 'Face comparator initialized successfully');\n\n    // 这里可以添加使用人脸比较服务的代码\n\n    // 使用完毕后，释放人脸比较服务\n    await faceComparator.release();\n    hilog.info(0x0000, 'faceComparatorSample', 'Face comparator released successfully');\n  } else {\n    hilog.error(0x0000, 'faceComparatorSample', 'Failed to initialize face comparator');\n  }\n}\n\n@Entry\n@Component\nstruct Page {\n\n  build() {\n    Column(){\n      Button('initAndReleaseFaceComparator').onClick(() => {\n        // 调用函数\n        void initAndReleaseFaceComparator();\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "facecomparatorrelease",
      children: "faceComparator.release"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "release(): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放人脸比对分析器服务。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.Face.Comparator"]
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
            children: "Promise对象，释放接口无返回值。"
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
        children: "import { faceComparator } from '@kit.CoreVisionKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nasync function initAndReleaseFaceComparator() {\n  // 初始化人脸比较服务\n  const initResult = await faceComparator.init();\n  hilog.info(0x0000, 'faceComparatorSample', `Face comparator initialization result:${initResult}`);\n\n  if (initResult) {\n    hilog.info(0x0000, 'faceComparatorSample', 'Face comparator initialized successfully');\n\n    // 这里可以添加使用人脸比较服务的代码\n\n    // 使用完毕后，释放人脸比较服务\n    await faceComparator.release();\n    hilog.info(0x0000, 'faceComparatorSample', 'Face comparator released successfully');\n  } else {\n    hilog.error(0x0000, 'faceComparatorSample', 'Failed to initialize face comparator');\n  }\n}\n\n@Entry\n@Component\nstruct Page {\n\n  build() {\n    Column(){\n      Button('initAndReleaseFaceComparator').onClick(() => {\n        // 调用函数\n        void initAndReleaseFaceComparator();\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "facecomparatorcomparefaces",
      children: "faceComparator.compareFaces"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "compareFaces(visionInfo1: VisionInfo, visionInfo2: VisionInfo): Promise<FaceCompareResult>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建人脸比对实例，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.Face.Comparator"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "visionInfo1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#visioninfo",
              children: "VisionInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第一张包含人脸的图片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "visionInfo2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#visioninfo",
              children: "VisionInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第二张包含人脸的图片。"
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
              href: "#facecompareresult",
              children: "FaceCompareResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回人脸比对的结果。"
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
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run timed out, please try again later."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The parameter check failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1008400001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to run, please try again."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1008400002"
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
        children: "import { faceComparator } from '@kit.CoreVisionKit';\nimport { image } from '@kit.ImageKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\nasync function faceCompareTest() {\n  let chooseImage: PixelMap | undefined = undefined;\n  let chooseImage1: PixelMap | undefined = undefined;\n\n  // 从图库中选择两张图片\n  let PhotoSelectOptions = new photoAccessHelper.PhotoSelectOptions();\n  PhotoSelectOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE;\n  PhotoSelectOptions.maxSelectNumber = 2;\n  let photoPicker: photoAccessHelper.PhotoViewPicker = new photoAccessHelper.PhotoViewPicker();\n  let PhotoSelectResult = await photoPicker.select(PhotoSelectOptions);\n  let uris = PhotoSelectResult.photoUris;\n\n  if (uris.length !== 2) {\n    hilog.info(0x0000, 'testTag', 'selected uris length is not 2');\n    return;\n  }\n\n  // 将选择的图片转换为PixelMap\n  let fileSource = await fileIo.open(uris[0], fileIo.OpenMode.READ_ONLY);\n  let imageSource = image.createImageSource(fileSource.fd);\n  chooseImage = await imageSource.createPixelMap();\n\n  fileSource = await fileIo.open(uris[1], fileIo.OpenMode.READ_ONLY);\n  imageSource = image.createImageSource(fileSource.fd);\n  chooseImage1 = await imageSource.createPixelMap();\n\n  if (!chooseImage || !chooseImage1) {\n    hilog.info(0x0000, 'testTag', 'chooseImage or chooseImage1 is undefined');\n    return;\n  }\n\n  // 调用人脸比对接口\n  let visionInfo: faceComparator.VisionInfo = {\n    pixelMap: chooseImage\n  };\n  let visionInfo1: faceComparator.VisionInfo = {\n    pixelMap: chooseImage1\n  };\n\n  let data: faceComparator.FaceCompareResult = await faceComparator.compareFaces(visionInfo, visionInfo1);\n  let similarity = (data.similarity * 100).toFixed(2);\n  let isSamePerson = data.isSamePerson ? 'is' : 'is not';\n  let faceString = `Similarity: ${similarity}%. ${isSamePerson} the same person`;\n  hilog.info(0x0000, 'testTag', 'faceString data is ' + faceString);\n\n  // 释放资源\n  if (chooseImage && chooseImage1) {\n    void chooseImage.release();\n    chooseImage1.release();\n  }\n  if (fileSource) {\n    try {\n      await fileIo.close(fileSource);\n    } catch (err) {\n      hilog.error(0x0000, 'testTag', `Failed to close fileSource. Code: ${err.code}, message: ${err.message}`);\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Page {\n\n  build() {\n    Column(){\n      Button('faceCompareTest').onClick(() => {\n        faceCompareTest().catch((err: BusinessError) => {\n          hilog.error(0x0000, 'faceCompareSample', `Failed to compare faces. Code: ${err.code}, message: ${err.message}`);\n        });\n      })\n    }\n  }\n}\n"
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