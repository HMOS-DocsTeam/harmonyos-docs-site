"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["925938"], {
62096(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_core_vision_api_core_vision_arkts_core_vision_object_detection_api_core_vision_object_detection_api_md_33d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-core-vision-api-core-vision-arkts-core-vision-object-detection-api-core-vision-object-detection-api-md-33d.json
var site_docs_ref_core_vision_api_core_vision_arkts_core_vision_object_detection_api_core_vision_object_detection_api_md_33d_namespaceObject = JSON.parse('{"id":"core-vision-api/core-vision-arkts/core-vision-object-detection-api/core-vision-object-detection-api","title":"objectDetection（多目标识别）","description":"多目标识别服务提供了从图像中识别多个目标的能力。通过拍照、录像等光学输入方式，把各种场景下的图像转化为数字图像信息，再利用AI底层能力对图像进行分析，从中定位并识别出多个感兴趣的目标对象，如人脸、动物、植物等，便于用户提取目标的类别、边框位置、置信度等信息。","source":"@site/docs-ref/core-vision-api/core-vision-arkts/core-vision-object-detection-api/core-vision-object-detection-api.md","sourceDirName":"core-vision-api/core-vision-arkts/core-vision-object-detection-api","slug":"/core-vision-api/core-vision-arkts/core-vision-object-detection-api/core-vision-object-detection-api","permalink":"/harmonyos-docs-site/ref/core-vision-api/core-vision-arkts/core-vision-object-detection-api/core-vision-object-detection-api","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"objectDetection（多目标识别）","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/core-vision-object-detection-api","kit":"AI","last_updated":"2026-04-22","slug":"core-vision-object-detection-api"},"sidebar":"ref","previous":{"title":"VisionBase（Core Vision Kit基类）","permalink":"/harmonyos-docs-site/ref/core-vision-api/core-vision-arkts/core-vision-vision-base-api/core-vision-vision-base-api"},"next":{"title":"skeletonDetection（骨骼点检测）","permalink":"/harmonyos-docs-site/ref/core-vision-api/core-vision-arkts/core-vision-skeleton-detection-api/core-vision-skeleton-detection-api"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/core-vision-api/core-vision-arkts/core-vision-object-detection-api/core-vision-object-detection-api.md


const frontMatter = {
	title: 'objectDetection（多目标识别）',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/core-vision-object-detection-api',
	kit: 'AI',
	last_updated: '2026-04-22',
	slug: 'core-vision-object-detection-api'
};
const contentTitle = 'objectDetection（多目标识别）';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "VisionObject",
  "id": "visionobject",
  "level": 2
}, {
  "value": "ObjectDetectionResponse",
  "id": "objectdetectionresponse",
  "level": 2
}, {
  "value": "ObjectDetector",
  "id": "objectdetector",
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
        id: "objectdetection多目标识别",
        children: "objectDetection（多目标识别）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多目标识别服务提供了从图像中识别多个目标的能力。通过拍照、录像等光学输入方式，把各种场景下的图像转化为数字图像信息，再利用AI底层能力对图像进行分析，从中定位并识别出多个感兴趣的目标对象，如人脸、动物、植物等，便于用户提取目标的类别、边框位置、置信度等信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前本服务支持识别的目标类型包括：风景，动物，植物，建筑，人脸，表格，文本，人头，猫头，狗头，食物，汽车，人体，文档，卡证。"
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
        children: "import { visionBase, objectDetection } from '@kit.CoreVisionKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "visionobject",
      children: "VisionObject"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "视觉信息对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.Vision.ObjectDetection"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "visionObject的边界框。"
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
            children: "visionObject的置信度。范围为(0,1)。0表示置信度最低，1表示置信度最高。置信度越高，说明这个点的位置越可靠。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "labels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "识别物体的类型标签。  0：风景。  1：动物。  2：植物。  3：建筑。  5：人脸。  6：表格。  7：文本。  8：人头。  9：猫头。  10：狗头。  11：食物。  12：汽车。  13：人体。  21：文档。  22：卡证。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "visionObject的唯一标识符。ID为从0开始递增的整数编号。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "objectdetectionresponse",
      children: "ObjectDetectionResponse"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["多目标检测的结果类。继承自visionBase基类的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-vision-api/core-vision-arkts/core-vision-vision-base-api/core-vision-vision-base-api#response",
        children: "Response"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.Vision.ObjectDetection"]
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
            children: "objects"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#visionobject",
              children: "VisionObject"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多目标检测结果。可以是单个对象或多个对象的数组。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "objectdetector",
      children: "ObjectDetector"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["定义多目标识别的接口和基本结构。继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-vision-api/core-vision-arkts/core-vision-vision-base-api/core-vision-vision-base-api#analyzer",
        children: "visionBase.Analyzer"
      }), "类。它有以下功能函数："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "private constructor()：这是一个私有构造函数，意味着不能直接通过new关键字实例化ObjectDetector，必须通过 create() 静态方法来创建实例。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "static create(): Promise<ObjectDetector>：这是一个静态方法，用于创建 ObjectDetector 的实例。使用Promise异步回调。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "process(request: visionBase.Request): Promise<ObjectDetectionResponse>：这是一个实例方法，用于处理多目标识别请求。使用Promise异步回调。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "destroy(): Promise<void>：这是一个实例方法，用于销毁多目标识别的进程。使用Promise异步回调。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.Vision.ObjectDetection"]
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
            children: "强制开发者必须使用static create()方法来创建ObjectDetector的实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "create"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化多目标识别接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多目标识别的实际执行接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "destroy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多目标识别进程的销毁接口。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "create",
      children: "create"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static create(): Promise<ObjectDetector>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多目标识别的初始化接口。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.Vision.ObjectDetection"]
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
              href: "#objectdetector",
              children: "ObjectDetector"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回ObjectDetector实例。"
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
        children: "import { objectDetection } from '@kit.CoreVisionKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nasync function createAndDestroyDetector() {\n  const detector = await objectDetection.ObjectDetector.create();\n  if (detector) {\n    hilog.info(0x0000, 'objectDetectionSample', 'Object detector created successfully');\n  } else {\n    hilog.error(0x0000,'objectDetectionSample','Failed to create object detector');\n    return;\n  }\n  // 使用 detector 进行一些操作\n  // ...\n\n  // 完成后销毁 detector\n  if (detector) {\n    await detector.destroy();\n    hilog.info(0x0000, 'objectDetectionSample', 'Object detector destroyed successfully');\n  } else {\n    hilog.error(0x0000,'objectDetectionSample','Failed to destroy object detector');\n  }\n}\n\n@Entry\n@Component\nstruct Page {\n\n  build() {\n    Column(){\n      Button('createAndDestroyDetector').onClick(() => {\n        createAndDestroyDetector()\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "destroy",
      children: "destroy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "destroy(): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁多目标识别的进程。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.Vision.ObjectDetection"]
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
        children: "import { objectDetection } from '@kit.CoreVisionKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nasync function createAndDestroyDetector() {\n  const detector = await objectDetection.ObjectDetector.create();\n  if (detector) {\n    hilog.info(0x0000, 'objectDetectionSample', 'Object detector created successfully');\n  } else {\n    hilog.error(0x0000,'objectDetectionSample','Failed to create object detector');\n    return;\n  }\n  // 使用 detector 进行一些操作\n  // ...\n\n  // 完成后销毁 detector\n  if (detector) {\n    await detector.destroy();\n    hilog.info(0x0000, 'objectDetectionSample', 'Object detector destroyed successfully');\n  } else {\n    hilog.error(0x0000,'objectDetectionSample','Failed to destroy object detector');\n  }\n}\n\n@Entry\n@Component\nstruct Page {\n\n  build() {\n    Column(){\n      Button('createAndDestroyDetector').onClick(() => {\n        createAndDestroyDetector()\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "process",
      children: "process"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "process(request: visionBase.Request): Promise<ObjectDetectionResponse>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建多目标识别实例并执行多目标识别。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.Vision.ObjectDetection"]
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
            children: ["图片实例。多目标识别接口仅支持传入一张图片，不支持传入多张图片。  具体规格请参考", (0,jsx_runtime.jsx)(_components.a, {
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
              href: "#objectdetectionresponse",
              children: "ObjectDetectionResponse"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回多目标识别的结果。"
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
        children: "import { objectDetection, visionBase } from '@kit.CoreVisionKit';\nimport { image } from '@kit.ImageKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\nlet imageSource: image.ImageSource | undefined = undefined;\nlet chooseImage: image.PixelMap | undefined = undefined;\n\n// 创建对象检测器\nlet detector: objectDetection.ObjectDetector | undefined = undefined;\n\nasync function createDetector() {\n  detector = await objectDetection.ObjectDetector.create();\n  hilog.info(0x0000, 'objectDetectionSample', 'Object detector created successfully');\n}\n\n@Entry\n@Component\nstruct Page {\n\n  build() {\n    Column(){\n      Button('Start').onClick(() => {\n        // 将图片转换为PixelMap，可以通过图库获取\n        let photoPicker: photoAccessHelper.PhotoViewPicker = new photoAccessHelper.PhotoViewPicker();\n        photoPicker.select({\n          MIMEType: photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE,\n          maxSelectNumber: 1\n        }).then((res: photoAccessHelper.PhotoSelectResult) => {\n          let uri = res.photoUris[0];\n          if (uri === undefined) {\n            hilog.info(0x0000, 'objectDetectionSample', 'uri is undefined');\n            return\n          }\n          setTimeout(async () => {\n            let file = await fileIo.open(uri, fileIo.OpenMode.READ_ONLY);\n            imageSource = image.createImageSource(file.fd);\n            chooseImage = await imageSource.createPixelMap();\n            hilog.info(0x0000, 'objectDetectionSample', 'chooseImage:', chooseImage);\n            if (!chooseImage) {\n              return\n            }\n\n            // 创建检测器\n            await createDetector();\n\n            if (!detector) {\n              hilog.error(0x0000, 'objectDetectionSample', 'Detector is not initialized');\n              return;\n            }\n\n            // 调用对象检测接口\n            let request: visionBase.Request = {\n              inputData: { pixelMap: chooseImage },\n              scene: visionBase.SceneMode.FOREGROUND\n            };\n\n            let response: objectDetection.ObjectDetectionResponse = await detector.process(request);\n\n            if (response.objects.length === 0) {\n              hilog.info(0x0000, 'objectDetectionSample', 'No objects detected in the image.');\n            } else {\n              let objectString = JSON.stringify(response.objects);\n              hilog.info(0x0000, 'objectDetectionSample', 'Detected objects: ' + objectString);\n            }\n\n            // 清理资源\n            if (chooseImage && imageSource) {\n              void chooseImage.release();\n              void imageSource.release();\n            }\n            if (file) {\n              try {\n                await fileIo.close(file);\n              } catch (err) {\n                hilog.error(0x0000, 'objectDetectionSample', `Failed to close fileSource. Code: ${err.code}, message: ${err.message}`);\n              }\n            }\n            if (detector) {\n              await detector.destroy();\n              hilog.info(0x0000, 'objectDetectionSample', 'Object detector destroyed successfully');\n            }\n          }, 100);\n        }).catch((err: BusinessError) => {\n          hilog.error(0x0000, 'objectDetectionSample', `Failed to get photo image uri. Code: ${err.code}, message: ${err.message}`);\n        });\n      })\n    }\n  }\n}\n"
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