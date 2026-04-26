"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["693139"], {
805186(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_vision_api_vision_arkts_vision_image_analyzer_vision_image_analyzer_md_fce_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-vision-api-vision-arkts-vision-image-analyzer-vision-image-analyzer-md-fce.json
var site_docs_ref_vision_api_vision_arkts_vision_image_analyzer_vision_image_analyzer_md_fce_namespaceObject = JSON.parse('{"id":"vision-api/vision-arkts/vision-image-analyzer/vision-image-analyzer","title":"visionImageAnalyzer（AI识图控件）","description":"AI识图是通过聚合OCR（Optical Character Recognition）、主体分割、实体识别、多目标识别等AI能力，提供场景化的文本识别、主体分割、识图搜索功能。","source":"@site/docs-ref/vision-api/vision-arkts/vision-image-analyzer/vision-image-analyzer.md","sourceDirName":"vision-api/vision-arkts/vision-image-analyzer","slug":"/vision-api/vision-arkts/vision-image-analyzer/vision-image-analyzer","permalink":"/harmonyos-docs-site/ref/vision-api/vision-arkts/vision-image-analyzer/vision-image-analyzer","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"visionImageAnalyzer（AI识图控件）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/vision-image-analyzer","kit":"AI","last_updated":"2026-04-22","slug":"vision-image-analyzer"},"sidebar":"ref","previous":{"title":"interactiveLiveness（人脸活体检测）","permalink":"/harmonyos-docs-site/ref/vision-api/vision-arkts/vision-interactive-liveness/vision-interactive-liveness"},"next":{"title":"CardRecognition（卡证识别控件）","permalink":"/harmonyos-docs-site/ref/vision-api/vision-component/vision-card-recognition/vision-card-recognition"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/vision-api/vision-arkts/vision-image-analyzer/vision-image-analyzer.md


const frontMatter = {
	title: 'visionImageAnalyzer（AI识图控件）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/vision-image-analyzer',
	kit: 'AI',
	last_updated: '2026-04-22',
	slug: 'vision-image-analyzer'
};
const contentTitle = 'visionImageAnalyzer（AI识图控件）';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "Menu",
  "id": "menu",
  "level": 2
}, {
  "value": "Rect",
  "id": "rect",
  "level": 2
}, {
  "value": "Subject",
  "id": "subject",
  "level": 2
}, {
  "value": "SelectedStatus",
  "id": "selectedstatus",
  "level": 2
}, {
  "value": "ImageAnalyzerVisibility",
  "id": "imageanalyzervisibility",
  "level": 2
}, {
  "value": "AIButtonStatus",
  "id": "aibuttonstatus",
  "level": 2
}, {
  "value": "ObjectSearchPanelVisibility",
  "id": "objectsearchpanelvisibility",
  "level": 2
}, {
  "value": "ImageAnalyzerUIStatus",
  "id": "imageanalyzeruistatus",
  "level": 2
}, {
  "value": "VisionImageAnalyzerController",
  "id": "visionimageanalyzercontroller",
  "level": 2
}, {
  "value": "setImageAnalyzerVisibility",
  "id": "setimageanalyzervisibility",
  "level": 3
}, {
  "value": "setAIButtonPosition",
  "id": "setaibuttonposition",
  "level": 3
}, {
  "value": "setAIButtonVisibility",
  "id": "setaibuttonvisibility",
  "level": 3
}, {
  "value": "setCustomTextMenuItems",
  "id": "setcustomtextmenuitems",
  "level": 3
}, {
  "value": "startSubjectAnalyzer",
  "id": "startsubjectanalyzer",
  "level": 3
}, {
  "value": "setCustomSubjectMenuItems",
  "id": "setcustomsubjectmenuitems",
  "level": 3
}, {
  "value": "setSelectedSubjects",
  "id": "setselectedsubjects",
  "level": 3
}, {
  "value": "getSelectedSubjects",
  "id": "getselectedsubjects",
  "level": 3
}, {
  "value": "getSubject",
  "id": "getsubject",
  "level": 3
}, {
  "value": "getSubjectsImage",
  "id": "getsubjectsimage",
  "level": 3
}, {
  "value": "getImageAnalyzerUIStatus",
  "id": "getimageanalyzeruistatus",
  "level": 3
}, {
  "value": "startObjectSearch",
  "id": "startobjectsearch",
  "level": 3
}, {
  "value": "stopObjectSearch",
  "id": "stopobjectsearch",
  "level": 3
}, {
  "value": "setSubjectMenuVisibility",
  "id": "setsubjectmenuvisibility",
  "level": 3
}, {
  "value": "on(type: &#39;aiButtonStatusChange&#39;)",
  "id": "ontype-aibuttonstatuschange",
  "level": 3
}, {
  "value": "off(type: &#39;aiButtonStatusChange&#39;)",
  "id": "offtype-aibuttonstatuschange",
  "level": 3
}, {
  "value": "on(type: &#39;imageAnalyzerVisibilityChange&#39;)",
  "id": "ontype-imageanalyzervisibilitychange",
  "level": 3
}, {
  "value": "off(type: &#39;imageAnalyzerVisibilityChange&#39;)",
  "id": "offtype-imageanalyzervisibilitychange",
  "level": 3
}, {
  "value": "on(type: &#39;textAnalysis&#39;)",
  "id": "ontype-textanalysis",
  "level": 3
}, {
  "value": "off(type: &#39;textAnalysis&#39;)",
  "id": "offtype-textanalysis",
  "level": 3
}, {
  "value": "on(type: &#39;selectedTextChange&#39;)",
  "id": "ontype-selectedtextchange",
  "level": 3
}, {
  "value": "off(type: &#39;selectedTextChange&#39;)",
  "id": "offtype-selectedtextchange",
  "level": 3
}, {
  "value": "on(type: &#39;subjectAnalysis&#39;)",
  "id": "ontype-subjectanalysis",
  "level": 3
}, {
  "value": "off(type: &#39;subjectAnalysis&#39;)",
  "id": "offtype-subjectanalysis",
  "level": 3
}, {
  "value": "on(type: &#39;selectedSubjectsChange&#39;)",
  "id": "ontype-selectedsubjectschange",
  "level": 3
}, {
  "value": "off(type: &#39;selectedSubjectsChange&#39;)",
  "id": "offtype-selectedsubjectschange",
  "level": 3
}, {
  "value": "on(type: &#39;objectSearchPanelVisibilityChange&#39;)",
  "id": "ontype-objectsearchpanelvisibilitychange",
  "level": 3
}, {
  "value": "off(type: &#39;objectSearchPanelVisibilityChange&#39;)",
  "id": "offtype-objectsearchpanelvisibilitychange",
  "level": 3
}, {
  "value": "on(type: &#39;cursorMoveInText&#39;)",
  "id": "ontype-cursormoveintext",
  "level": 3
}, {
  "value": "off(type: &#39;cursorMoveInText&#39;)",
  "id": "offtype-cursormoveintext",
  "level": 3
}, {
  "value": "on(type: &#39;cursorMoveOutText&#39;)",
  "id": "ontype-cursormoveouttext",
  "level": 3
}, {
  "value": "off(type: &#39;cursorMoveOutText&#39;)",
  "id": "offtype-cursormoveouttext",
  "level": 3
}, {
  "value": "on(type: &#39;analyzerFailed&#39;)",
  "id": "ontype-analyzerfailed",
  "level": 3
}, {
  "value": "off(type: &#39;analyzerFailed&#39;)",
  "id": "offtype-analyzerfailed",
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
    string: "string",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    void: "void",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "visionimageanalyzerai识图控件",
        children: "visionImageAnalyzer（AI识图控件）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI识图是通过聚合OCR（Optical Character Recognition）、主体分割、实体识别、多目标识别等AI能力，提供场景化的文本识别、主体分割、识图搜索功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(940768)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用接口需捕获异常。"
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
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "menu",
      children: "Menu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI识图菜单。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "菜单内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "action"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#callback",
              children: "Callback"
            }), "<string"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#subject",
              children: "Subject"
            }), "[]>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rect",
      children: "Rect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "矩形数据结构。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
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
            children: "left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "矩形的左方位置。取值范围在图片的左边界到右边界之间。单位：vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "top"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "矩形的上方位置。取值范围在图片的上边界到下边界之间。单位：vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "矩形的右方位置。取值范围在图片的左边界到右边界之间。单位：vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bottom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "矩形的下方位置。取值范围在图片的上边界到下边界之间。单位：vp。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "subject",
      children: "Subject"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主体识别结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
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
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主体id。取值范围：[0，6]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主体识别的图片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boundingBox"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#rect",
              children: "Rect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主体识别图片结果的外接矩形框。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maskData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Int32Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["基于原图大小的一维数组，表示主体掩码。0-255取值范围。0代表背景，255代表主体，中间值代表是否是显著性主体的概率。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本"
              })
            }), "：5.1.0(18)。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  maskData参数数据可能较大，通过JSON.stringify()方法解析打印日志会比较耗时，可能会影响接口性能，请按需打印。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "selectedstatus",
      children: "SelectedStatus"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "识图对象选中状态的枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "SELECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UNSELECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未选中状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "imageanalyzervisibility",
      children: "ImageAnalyzerVisibility"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI识图控件可见状态的枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "SHOWN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI识图控件的可见状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIDDEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI识图控件的不可见状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "aibuttonstatus",
      children: "AIButtonStatus"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AIButton状态的枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
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
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SELECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIButton选中状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UNSELECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIButton未选中状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIDDEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIButton隐藏状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "objectsearchpanelvisibility",
      children: "ObjectSearchPanelVisibility"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片搜索界面可见状态的枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.1(13)"]
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
            children: "SHOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片搜索界面的可见状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIDE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片搜索界面的不可见状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "imageanalyzeruistatus",
      children: "ImageAnalyzerUIStatus"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片分析界面状态的枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "INITIAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI_BUTTON_SELECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIButton选中状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEXT_SELECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文字选中状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SUBJECT_SELECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主体选中状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OBJECT_SEARCH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视觉搜索状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "visionimageanalyzercontroller",
      children: "VisionImageAnalyzerController"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["这是视觉图像控制器，用于控制交互。继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-image-common/ts-image-common#imageanalyzercontroller12",
        children: "ImageAnalyzerController"
      }), "类。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setimageanalyzervisibility",
      children: "setImageAnalyzerVisibility"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setImageAnalyzerVisibility(visibility: ImageAnalyzerVisibility): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置AI识图控件的可见性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
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
            children: "visibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#imageanalyzervisibility",
              children: "ImageAnalyzerVisibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI识图控件的可见性。"
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
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  aboutToAppear() {\n    this.visionImageAnalyzerController.setImageAnalyzerVisibility(visionImageAnalyzer.ImageAnalyzerVisibility.HIDDEN)\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n          types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n          aiController: this.visionImageAnalyzerController\n        })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setaibuttonposition",
      children: "setAIButtonPosition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setAIButtonPosition(position: Rect): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置AIButton的位置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
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
            children: "position"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#rect",
              children: "Rect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIButton区域距离AI识图控件四边的位置（vp）。默认展示在右下角 。  当传入部分参数时，优先按照传入的参数匹配，如果位置参数异常，使用默认位置展示。  同时设置top及bottom参数，调setAIButtonPosition接口仅top参数生效。"
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
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  aboutToAppear() {\n    let position: visionImageAnalyzer.Rect = {\n      bottom: 300\n    }\n    this.visionImageAnalyzerController.setAIButtonPosition(position)\n    this.visionImageAnalyzerController.setAIButtonVisibility(true)\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.6'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setaibuttonvisibility",
      children: "setAIButtonVisibility"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setAIButtonVisibility(visible: boolean): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置AIButton的可见性。配置AIButton属性可见后，会对图片进行预分析，当图片中存在文本且文本区域大于图片区域的5%时AIButton才会显示。开启AIButton会触发图片的预分析从而导致一定的功耗开销，建议评估场景，对图片中文本内容较为关注的场景下按需开启，带给消费者良好的图片浏览体验的同时降低不必要的功耗开销。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
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
            children: "visible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIButton的可见性。true表示可见，false表示不可见。  默认为false，隐藏AIButton。"
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
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  aboutToAppear() {\n    this.visionImageAnalyzerController.setAIButtonVisibility(true)\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n          types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n          aiController: this.visionImageAnalyzerController\n        })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setcustomtextmenuitems",
      children: "setCustomTextMenuItems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setCustomTextMenuItems(menus: Menu[]): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置自定义的文字分析菜单项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
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
            children: "menus"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#menu",
              children: "Menu"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中文字时，支持在文字菜单上增加自定义菜单项，回调中包含当前选中的文字结果。  最多只展示三个，超过三个时取前三个。"
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
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  aboutToAppear() {\n    this.visionImageAnalyzerController.setAIButtonVisibility(true)\n    this.visionImageAnalyzerController.setCustomTextMenuItems([\n      {\n        value: \"menu2\",\n        action: (param: string | visionImageAnalyzer.Subject[]) => {\n          console.info(\"DEMO_TAG\", \"text menu clicked\")\n        }\n      }\n    ]\n    )\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "startsubjectanalyzer",
      children: "startSubjectAnalyzer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startSubjectAnalyzer(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启主体识别，前提需确保当前设备支持主体识别功能。可通过监听 “subjectAnalysis”事件回调获取主体, 注意在等待返回主体时增加超时处理，避免因未识别到主体而一直处于等待状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  aboutToAppear() {\n    let supportTypes = this.visionImageAnalyzerController.getImageAnalyzerSupportTypes();\n    if (supportTypes.includes(ImageAnalyzerType.SUBJECT)) {\n       this.visionImageAnalyzerController.startSubjectAnalyzer()\n    }\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setcustomsubjectmenuitems",
      children: "setCustomSubjectMenuItems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setCustomSubjectMenuItems(menus: Menu[]): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置自定义的主体分析菜单项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
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
            children: "menus"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#menu",
              children: "Menu"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中主体时，支持在主体菜单上增加自定义菜单项，回调中包含当前选中的主体结果。  最多只展示三个，超过部分取前三个。"
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
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  aboutToAppear() {\n    this.visionImageAnalyzerController.setCustomSubjectMenuItems([\n      {\n        value: \"menu2\",\n        action: (param: string | visionImageAnalyzer.Subject[]) => {\n          console.info(\"DEMO_TAG\", \"subject menu clicked\")\n        }\n      }\n    ]\n    )\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setselectedsubjects",
      children: "setSelectedSubjects"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setSelectedSubjects(subjectIds: number[]): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据主体id列表设置选中的主体。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
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
            children: "subjectIds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["要选中的主体id列表。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#getsubject",
              children: "getSubject"
            }), "获取，只有图片识别结果中包含的主体id才有效。"]
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
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct SingleImageTest2 {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  aboutToAppear() {\n    this.visionImageAnalyzerController.on('subjectAnalysis', (subjects: visionImageAnalyzer.Subject[]) => {\n      console.info(\"DEMO_TAG\", `subjectAnalysis result: ${JSON.stringify(subjects)}`)\n      if(subjects.length > 0) {\n        this.visionImageAnalyzerController.setSelectedSubjects([subjects[0].id])\n      }\n    })\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getselectedsubjects",
      children: "getSelectedSubjects"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getSelectedSubjects(): Promise<Subject[] | null>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前选中的主体。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
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
              href: "#subject",
              children: "Subject"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null>"
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
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  getSelectedSubjects() {\n    void this.visionImageAnalyzerController.getSelectedSubjects().then((subjects: visionImageAnalyzer.Subject[] | null) => {\n      console.info(\"DEMO_TAG\", `getSelectedSubjects result: ${JSON.stringify(subjects)}`)\n    })\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getsubject",
      children: "getSubject"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getSubject(point: visionBase.Point): Promise<Subject | null>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据点位获取对应位置的主体。使用Promise异步回调。调用此接口前需先调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#startsubjectanalyzer",
        children: "startSubjectAnalyzer"
      }), "开启主体识别。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
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
            children: "point"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-vision-api/core-vision-arkts/core-vision-vision-base-api/core-vision-vision-base-api#section1465431712919",
              children: "visionBase.Point"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相对于图片左上角位置点位（px）。"
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
              href: "#subject",
              children: "Subject"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null>"
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
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\nimport { visionBase } from '@kit.CoreVisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController = new visionImageAnalyzer.VisionImageAnalyzerController()\n  getSelectedSubjects() {\n    let searchPoint: visionBase.Point = { x: 100, y: 100 }\n    void this.visionImageAnalyzerController.getSubject(searchPoint).then((subjects: visionImageAnalyzer.Subject | null) => {\n      console.info(\"DEMO_TAG\", `getSubject result: ${JSON.stringify(subjects)}`)\n    })\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getsubjectsimage",
      children: "getSubjectsImage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getSubjectsImage(subjectIds: number[]): Promise<PixelMap | null>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据主体id获取对应主体组装成的图像。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
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
            children: "subjectIds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["主体id列表。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#getsubject",
              children: "getSubject"
            }), "获取。"]
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
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null>"
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
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  getSubjectsImage() {\n    this.visionImageAnalyzerController.on('subjectAnalysis', (subjects: visionImageAnalyzer.Subject[]) => {\n      console.info(\"DEMO_TAG\", `subjectAnalysis result: ${JSON.stringify(subjects)}`)\n      if(subjects.length > 0) {\n        let ids: number[] = [subjects[0].id]\n        this.visionImageAnalyzerController.getSubjectsImage(ids).then((image: PixelMap | null) => {\n          console.info('Image data obtained successfully: ', image);\n        }).catch((error: Error) => {\n          console.error('Failed to obtain image data: ', error);\n        })\n      }\n    })\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getimageanalyzeruistatus",
      children: "getImageAnalyzerUIStatus"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getImageAnalyzerUIStatus(): Promise<ImageAnalyzerUIStatus>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前图片分析UI状态。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
              href: "#imageanalyzeruistatus",
              children: "ImageAnalyzerUIStatus"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，当前图片分析UI状态。"
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
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  aboutToAppear() {\n    this.visionImageAnalyzerController.setAIButtonVisibility(true);\n    this.visionImageAnalyzerController.on('objectSearchPanelVisibilityChange', (objectSearchPanelVisibility: visionImageAnalyzer.ObjectSearchPanelVisibility) => {\n      this.visionImageAnalyzerController.getImageAnalyzerUIStatus().then((status: visionImageAnalyzer.ImageAnalyzerUIStatus) => {\n        console.info('Image data obtained successfully: ', status);\n      }).catch((error: Error) => {\n        console.error('Failed to obtain image data: ', error);\n      })\n    })\n  }\n  build() {\n    Stack() {\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('60%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n\n      Button('获取当前图片分析UI状态', { stateEffect: true, type: ButtonType.Capsule })\n        .width('80%')\n        .height(40)\n        .onClick(() => {\n          this.visionImageAnalyzerController.getImageAnalyzerUIStatus()\n            .then((status: visionImageAnalyzer.ImageAnalyzerUIStatus) => {\n              console.info('Image data obtained successfully: ', status);\n            })\n            .catch((error: Error) => {\n              console.error('Failed to obtain image data: ', error);\n            })\n        })\n        .id('getImageAnalyzerUIStatus')\n        .width('40%')\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "startobjectsearch",
      children: "startObjectSearch"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startObjectSearch(): Promise<boolean>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启视觉搜索。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在PC/2in1上无效果，在其他设备类型中可正常调用。"]
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise对象，返回是否开启视觉搜索。true表示开启视觉搜索，false表示关闭视觉搜索。在文字选择或主体识别状态时拉起会返回false。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  视觉搜索若在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper",
              children: "Swiper"
            }), "容器切换图场景下无法生效，则需要在图片切换的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper#onanimationstart9",
              children: "onAnimationStart"
            }), "中置空一下当前选中图片的index，再由", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper#onanimationend9",
              children: "onAnimationEnd"
            }), "时将当前选中index置成当前index，以此实现overlay跟随图片变动而变动。"]
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
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  startObjectSearch() {\n    this.visionImageAnalyzerController.startObjectSearch()\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stopobjectsearch",
      children: "stopObjectSearch"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stopObjectSearch(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关闭视觉搜索功能。 如果当前在视觉搜索交互状态，则不支持关闭。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在PC/2in1上无效果，在其他设备类型中可正常调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  stopObjectSearch() {\n    this.visionImageAnalyzerController.stopObjectSearch()\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setsubjectmenuvisibility",
      children: "setSubjectMenuVisibility"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setSubjectMenuVisibility(visible: boolean): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置图像分割菜单状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.1(13)"]
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
            children: "visible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置图像分割菜单状态。  true：显示图像分割菜单；false：隐藏图像分割菜单。  默认是true。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  setSubjectMenuVisibility(visible: boolean) {\n    this.visionImageAnalyzerController.setSubjectMenuVisibility(visible)\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ontype-aibuttonstatuschange",
      children: "on(type: 'aiButtonStatusChange')"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'aiButtonStatusChange', callback: Callback<AIButtonStatus>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "监听AIButton展示状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值为\"aiButtonStatusChange\"。监听AIButton展示状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#callback",
              children: "Callback"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#aibuttonstatus",
              children: "AIButtonStatus"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callback回调函数。接收AIButton展示状态。"
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
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  aboutToAppear(): void {\n    this.visionImageAnalyzerController?.setAIButtonVisibility(true)\n    this.visionImageAnalyzerController.on('aiButtonStatusChange', (aiButtonState: visionImageAnalyzer.AIButtonStatus) => {\n      console.info(\"DEMO_TAG\", `aiButtonStatusChange result: ${JSON.stringify(aiButtonState)}`)\n    })\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "offtype-aibuttonstatuschange",
      children: "off(type: 'aiButtonStatusChange')"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'aiButtonStatusChange', callback?: Callback<AIButtonStatus>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消监听AIButton展示状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值为\"aiButtonStatusChange\"。取消监听AIButton展示状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#callback",
              children: "Callback"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#aibuttonstatus",
              children: "AIButtonStatus"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要取消注册的回调函数，需与订阅时传入的回调函数是同一个。若无此参数，则取消注册所有的回调函数。"
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
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  aboutToAppear(): void {\n    this.visionImageAnalyzerController?.setAIButtonVisibility(true)\n    this.visionImageAnalyzerController.on('aiButtonStatusChange', (aiButtonState: visionImageAnalyzer.AIButtonStatus) => {\n      console.info(\"DEMO_TAG\", `aiButtonStatusChange result: ${JSON.stringify(aiButtonState)}`)\n    })\n  }\n  aboutToDisappear(): void {\n    this.visionImageAnalyzerController.off('aiButtonStatusChange')\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ontype-imageanalyzervisibilitychange",
      children: "on(type: 'imageAnalyzerVisibilityChange')"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'imageAnalyzerVisibilityChange', callback: Callback<ImageAnalyzerVisibility>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "监听AI识图控件可见状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值为\"imageAnalyzerVisibilityChange\"。监听AI识图控件可见状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#callback",
              children: "Callback"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#imageanalyzervisibility",
              children: "ImageAnalyzerVisibility"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callback回调函数。接收AI识图控件可见状态。"
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
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  aboutToAppear(): void {\n    this.visionImageAnalyzerController?.setAIButtonVisibility(true)\n    this.visionImageAnalyzerController.on('imageAnalyzerVisibilityChange', (visibility: visionImageAnalyzer.ImageAnalyzerVisibility) => {\n      console.info(\"DEMO_TAG\", `imageAnalyzerVisibilityChange result: ${JSON.stringify(visibility)}`)\n    })\n  }\n  aboutToDisappear(): void {\n    this.visionImageAnalyzerController.off('imageAnalyzerVisibilityChange')\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "offtype-imageanalyzervisibilitychange",
      children: "off(type: 'imageAnalyzerVisibilityChange')"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'imageAnalyzerVisibilityChange', callback?: Callback<ImageAnalyzerVisibility>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消AI识图控件可见状态的监听。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值为\"imageAnalyzerVisibilityChange\"。取消AI识图控件可见状态的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#callback",
              children: "Callback"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#imageanalyzervisibility",
              children: "ImageAnalyzerVisibility"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要取消注册的回调函数，需与订阅时传入的回调函数是同一个。若无此参数，则取消注册所有的回调函数。"
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
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  aboutToAppear(): void {\n    this.visionImageAnalyzerController?.setAIButtonVisibility(true)\n    this.visionImageAnalyzerController.on('imageAnalyzerVisibilityChange', (visibility: visionImageAnalyzer.ImageAnalyzerVisibility) => {\n      console.info(\"DEMO_TAG\", `imageAnalyzerVisibilityChange result: ${JSON.stringify(visibility)}`)\n    })\n  }\n  aboutToDisappear(): void {\n    this.visionImageAnalyzerController.off('imageAnalyzerVisibilityChange')\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ontype-textanalysis",
      children: "on(type: 'textAnalysis')"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'textAnalysis', callback: Callback<string>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "监听文字分析结果。默认在首次长按图片文本时触发文本分析，PC/2in1是在图片首次加载时触发文本分析。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值为\"textAnalysis\"。监听文字分析结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#callback",
              children: "Callback"
            }), (0,jsx_runtime.jsx)(_components.string, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callback回调函数。接收文字分析结果。"
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
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  aboutToAppear(): void {\n    this.visionImageAnalyzerController.on('textAnalysis', (text: string) => {\n      console.info(\"DEMO_TAG\", `textAnalysis result: ${JSON.stringify(text)}`)\n    })\n  }\n  aboutToDisappear(): void {\n    this.visionImageAnalyzerController.off('textAnalysis')\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "offtype-textanalysis",
      children: "off(type: 'textAnalysis')"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'textAnalysis', callback?: Callback<string>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消文字分析结果的监听。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值为\"textAnalysis\"。取消文字分析结果的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#callback",
              children: "Callback"
            }), (0,jsx_runtime.jsx)(_components.string, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要取消注册的回调函数，需与订阅时传入的回调函数是同一个。若无此参数，则取消注册所有的回调函数。"
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
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  aboutToAppear(): void {\n    this.visionImageAnalyzerController.on('textAnalysis', (text: string) => {\n      console.info(\"DEMO_TAG\", `textAnalysis result: ${JSON.stringify(text)}`)\n    })\n  }\n  aboutToDisappear(): void {\n    this.visionImageAnalyzerController.off('textAnalysis')\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ontype-selectedtextchange",
      children: "on(type: 'selectedTextChange')"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'selectedTextChange', callback: Callback<string>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "监听文字选中结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值为\"selectedTextChange\"。监听文字选中结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#callback",
              children: "Callback"
            }), (0,jsx_runtime.jsx)(_components.string, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callback回调函数。接收文字选中结果。"
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
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  aboutToAppear(): void {\n    this.visionImageAnalyzerController.on('selectedTextChange', (selectedText: string) => {\n      console.info(\"DEMO_TAG\", `selectedTextChange result: ${JSON.stringify(selectedText)}`)\n    })\n  }\n  aboutToDisappear(): void {\n    this.visionImageAnalyzerController.off('selectedTextChange')\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "offtype-selectedtextchange",
      children: "off(type: 'selectedTextChange')"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'selectedTextChange', callback?: Callback<string>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消文字选中结果的监听。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值为\"selectedTextChange\"。取消文字选中结果的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#callback",
              children: "Callback"
            }), (0,jsx_runtime.jsx)(_components.string, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要取消注册的回调函数，需与订阅时传入的回调函数是同一个。若无此参数，则取消注册所有的回调函数。"
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
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  aboutToAppear(): void {\n    this.visionImageAnalyzerController.on('selectedTextChange', (selectedText: string) => {\n      console.info(\"DEMO_TAG\", `selectedTextChange result: ${JSON.stringify(selectedText)}`)\n    })\n  }\n  aboutToDisappear(): void {\n    this.visionImageAnalyzerController.off('selectedTextChange')\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ontype-subjectanalysis",
      children: "on(type: 'subjectAnalysis')"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'subjectAnalysis', callback: Callback<Subject[]>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "监听主体分析结果，返回所有主体信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值为\"subjectAnalysis\"。监听主体分析结果， 返回所有主体信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#callback",
              children: "Callback"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#subject",
              children: "Subject"
            }), "[]>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callback回调函数。接收主体分析结果， 返回所有主体信息。"
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
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  aboutToAppear(): void {\n    this.visionImageAnalyzerController.on('subjectAnalysis', (subjects: visionImageAnalyzer.Subject[]) => {\n      console.info(\"DEMO_TAG\", `subjectAnalysis result: ${JSON.stringify(subjects)}`)\n    })\n  }\n  aboutToDisappear(): void {\n    this.visionImageAnalyzerController.off('subjectAnalysis')\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "offtype-subjectanalysis",
      children: "off(type: 'subjectAnalysis')"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'subjectAnalysis', callback?: Callback<Subject[]>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消主体分析结果的监听。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值为\"subjectAnalysis\"。取消主体分析结果的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#callback",
              children: "Callback"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#subject",
              children: "Subject"
            }), "[]>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要取消注册的回调函数，需与订阅时传入的回调函数是同一个。若无此参数，则取消注册所有的回调函数。"
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
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  aboutToAppear(): void {\n    this.visionImageAnalyzerController.on('subjectAnalysis', (subjects: visionImageAnalyzer.Subject[]) => {\n      console.info(\"DEMO_TAG\", `subjectAnalysis result: ${JSON.stringify(subjects)}`)\n    })\n  }\n  aboutToDisappear(): void {\n    this.visionImageAnalyzerController.off('subjectAnalysis')\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ontype-selectedsubjectschange",
      children: "on(type: 'selectedSubjectsChange')"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'selectedSubjectsChange', callback: Callback<Subject[]>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "监听选中的主体。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值为\"selectedSubjectsChange\"。监听选中的主体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#callback",
              children: "Callback"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#subject",
              children: "Subject"
            }), "[]>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callback回调函数。接收选中的主体信息。"
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
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  aboutToAppear(): void {\n    this.visionImageAnalyzerController.on('selectedSubjectsChange', (subjects: visionImageAnalyzer.Subject[]) => {\n      console.info(\"DEMO_TAG\", `selectedSubjectsChange result: ${JSON.stringify(subjects)}`)\n    })\n  }\n  aboutToDisappear(): void {\n    this.visionImageAnalyzerController.off('selectedSubjectsChange')\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "offtype-selectedsubjectschange",
      children: "off(type: 'selectedSubjectsChange')"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'selectedSubjectsChange', callback?: Callback<Subject[]>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消对选中主体的监听。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值为\"selectedSubjectsChange\"。取消对选中主体的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#callback",
              children: "Callback"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#subject",
              children: "Subject"
            }), "[]>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要取消注册的回调函数，需与订阅时传入的回调函数是同一个。若无此参数，则取消注册所有的回调函数。"
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
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  aboutToAppear(): void {\n    this.visionImageAnalyzerController.on('selectedSubjectsChange', (subjects: visionImageAnalyzer.Subject[]) => {\n      console.info(\"DEMO_TAG\", `selectedSubjectsChange result: ${JSON.stringify(subjects)}`)\n    })\n  }\n  aboutToDisappear(): void {\n    this.visionImageAnalyzerController.off('selectedSubjectsChange')\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ontype-objectsearchpanelvisibilitychange",
      children: "on(type: 'objectSearchPanelVisibilityChange')"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'objectSearchPanelVisibilityChange', callback: Callback<ObjectSearchPanelVisibility>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "监听图片搜索事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.1(13)"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值为\"objectSearchPanelVisibilityChange\"。监听图片搜索事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#callback",
              children: "Callback"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#objectsearchpanelvisibility",
              children: "ObjectSearchPanelVisibility"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callback回调函数。接收图片搜索事件信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  aboutToAppear(): void {\n    this.visionImageAnalyzerController.on('objectSearchPanelVisibilityChange', (status: visionImageAnalyzer.ObjectSearchPanelVisibility) => {\n      console.info(\"DEMO_TAG\", `objectSearchPanelVisibilityChange result: ${JSON.stringify(status)}`)\n    })\n  }\n  aboutToDisappear(): void {\n    this.visionImageAnalyzerController.off('objectSearchPanelVisibilityChange')\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "offtype-objectsearchpanelvisibilitychange",
      children: "off(type: 'objectSearchPanelVisibilityChange')"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'objectSearchPanelVisibilityChange', callback?: Callback<ObjectSearchPanelVisibility>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消图片搜索事件的监听。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.1(13)"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值为\"objectSearchPanelVisibilityChange\"。取消监听图片搜索事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#callback",
              children: "Callback"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#objectsearchpanelvisibility",
              children: "ObjectSearchPanelVisibility"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要取消注册的回调函数，需与订阅时传入的回调函数是同一个。若无此参数，则取消注册所有的回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  aboutToAppear(): void {\n    this.visionImageAnalyzerController.on('objectSearchPanelVisibilityChange', (status: visionImageAnalyzer.ObjectSearchPanelVisibility) => {\n      console.info(\"DEMO_TAG\", `objectSearchPanelVisibilityChange result: ${JSON.stringify(status)}`)\n    })\n  }\n  aboutToDisappear(): void {\n    this.visionImageAnalyzerController.off('objectSearchPanelVisibilityChange')\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ontype-cursormoveintext",
      children: "on(type: 'cursorMoveInText')"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'cursorMoveInText', callback: Callback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "监听光标移入图片内文字区域事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值为\"cursorMoveInText\"。监听光标移入图片内文字区域事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#callback",
              children: "Callback"
            }), (0,jsx_runtime.jsx)(_components.void, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callback回调函数。接收光标移入图片内文字区域事件信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  aboutToAppear(): void {\n    this.visionImageAnalyzerController.on('cursorMoveInText', () => {\n      console.info(\"DEMO_TAG\", `cursorMoveInText on`)\n    })\n  }\n  aboutToDisappear(): void {\n    this.visionImageAnalyzerController.off('cursorMoveInText')\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "offtype-cursormoveintext",
      children: "off(type: 'cursorMoveInText')"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'cursorMoveInText', callback?: Callback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消光标移入图片内文字区域事件的监听。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值为\"cursorMoveInText\"。取消监听光标移入图片内文字区域事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#callback",
              children: "Callback"
            }), (0,jsx_runtime.jsx)(_components.void, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要取消注册的回调函数，需与订阅时传入的回调函数是同一个。若无此参数，则取消注册所有的回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  aboutToAppear(): void {\n    this.visionImageAnalyzerController.on('cursorMoveInText', () => {\n      console.info(\"DEMO_TAG\", `cursorMoveInText on`)\n    })\n  }\n  aboutToDisappear(): void {\n    this.visionImageAnalyzerController.off('cursorMoveInText')\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ontype-cursormoveouttext",
      children: "on(type: 'cursorMoveOutText')"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'cursorMoveOutText', callback: Callback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "监听光标移出图片内文字区域事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值为\"cursorMoveOutText\"。监听光标移出图片内文字区域事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#callback",
              children: "Callback"
            }), (0,jsx_runtime.jsx)(_components.void, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callback回调函数。接收光标移出图片内文字区域事件信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  aboutToAppear(): void {\n    this.visionImageAnalyzerController.on('cursorMoveOutText', () => {\n      console.info(\"DEMO_TAG\", `cursorMoveOutText on`)\n    })\n  }\n  aboutToDisappear(): void {\n    this.visionImageAnalyzerController.off('cursorMoveOutText')\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "offtype-cursormoveouttext",
      children: "off(type: 'cursorMoveOutText')"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'cursorMoveOutText', callback?: Callback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消光标移出图片内文字区域事件的监听。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值为\"cursorMoveOutText\"。取消监听光标移出图片内文字区域事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#callback",
              children: "Callback"
            }), (0,jsx_runtime.jsx)(_components.void, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要取消注册的回调函数，需与订阅时传入的回调函数是同一个。若无此参数，则取消注册所有的回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  aboutToAppear(): void {\n    this.visionImageAnalyzerController.on('cursorMoveOutText', () => {\n      console.info(\"DEMO_TAG\", `cursorMoveOutText on`)\n    })\n  }\n  aboutToDisappear(): void {\n    this.visionImageAnalyzerController.off('cursorMoveOutText')\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ontype-analyzerfailed",
      children: "on(type: 'analyzerFailed')"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'analyzerFailed', callback: ErrorCallback): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "监听AI识图的异常场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值为\"analyzerFailed\"。监听AI识图异常场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#errorcallback",
              children: "ErrorCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callback回调函数。接收AI识图异常场景信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/vision-api/vision-error-code/vision-error-code",
        children: "ArkTS API错误码"
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3.Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1013700002"
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
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  aboutToAppear(): void {\n    this.visionImageAnalyzerController.on('analyzerFailed', (error: BusinessError) => {\n      console.error(\"DEMO_TAG\", `analyzerFailed result: ${JSON.stringify(error)}`)\n    })\n  }\n  aboutToDisappear(): void {\n    this.visionImageAnalyzerController.off('analyzerFailed')\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "offtype-analyzerfailed",
      children: "off(type: 'analyzerFailed')"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'analyzerFailed', callback?: ErrorCallback): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消AI识图异常场景的监听。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.VisionImageAnalyzer"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值为\"analyzerFailed\"。取消AI识图异常场景的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#errorcallback",
              children: "ErrorCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要取消注册的回调函数，需与订阅时传入的回调函数是同一个。若无此参数，则取消注册所有的回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/vision-api/vision-error-code/vision-error-code",
        children: "ArkTS API错误码"
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3.Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1013700002"
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
        children: "import { visionImageAnalyzer } from '@kit.VisionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct ImageDemo {\n  private visionImageAnalyzerController: visionImageAnalyzer.VisionImageAnalyzerController =\n    new visionImageAnalyzer.VisionImageAnalyzerController()\n  aboutToAppear(): void {\n    this.visionImageAnalyzerController.on('analyzerFailed', (error: BusinessError) => {\n      console.error(\"DEMO_TAG\", `analyzerFailed result: ${JSON.stringify(error)}`)\n    })\n  }\n  aboutToDisappear(): void {\n    this.visionImageAnalyzerController.off('analyzerFailed')\n  }\n  build() {\n    Stack() {\n      // 此处图片需单独配置，添加到src/main/resources/base/media路径下\n      Image($r('app.media.img'), {\n        types: [ImageAnalyzerType.TEXT, ImageAnalyzerType.SUBJECT, ImageAnalyzerType.OBJECT_LOOKUP],\n        aiController: this.visionImageAnalyzerController\n      })\n        .width('100%')\n        .height('100%')\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n    }.width('100%').height('100%')\n  }\n}\n"
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
940768(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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