"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["554635"], {
456290(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_information_display_ts_basic_components_progress_ts_basic_components_progress_md_81c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-information-display-ts-basic-components-progress-ts-basic-components-progress-md-81c.json
var site_docs_ref_arkui_api_arkui_declarative_comp_information_display_ts_basic_components_progress_ts_basic_components_progress_md_81c_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/information-display/ts-basic-components-progress/ts-basic-components-progress","title":"Progress","description":"进度条组件，用于显示内容加载或操作处理等进度。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-progress/ts-basic-components-progress.md","sourceDirName":"arkui-api/arkui-declarative-comp/information-display/ts-basic-components-progress","slug":"/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-progress/ts-basic-components-progress","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-progress/ts-basic-components-progress","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"Progress","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-progress","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-basic-components-progress"},"sidebar":"ref","previous":{"title":"PatternLock","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-patternlock/ts-basic-components-patternlock"},"next":{"title":"QRCode","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-qrcode/ts-basic-components-qrcode"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-progress/ts-basic-components-progress.md


const frontMatter = {
	title: 'Progress',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-progress',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-basic-components-progress'
};
const contentTitle = 'Progress';

const assets = {

};



const toc = [{
  "value": "子组件",
  "id": "子组件",
  "level": 2
}, {
  "value": "接口",
  "id": "接口",
  "level": 2
}, {
  "value": "ProgressOptions对象说明",
  "id": "progressoptions对象说明",
  "level": 2
}, {
  "value": "ProgressType8+枚举说明",
  "id": "progresstype8枚举说明",
  "level": 2
}, {
  "value": "ProgressStyle枚举说明",
  "id": "progressstyle枚举说明",
  "level": 2
}, {
  "value": "ProgressStyleMap10+对象说明",
  "id": "progressstylemap10对象说明",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "value",
  "id": "value",
  "level": 3
}, {
  "value": "color",
  "id": "color",
  "level": 3
}, {
  "value": "style8+",
  "id": "style8",
  "level": 3
}, {
  "value": "contentModifier12+",
  "id": "contentmodifier12",
  "level": 3
}, {
  "value": "privacySensitive12+",
  "id": "privacysensitive12",
  "level": 3
}, {
  "value": "ProgressConfiguration12+",
  "id": "progressconfiguration12",
  "level": 2
}, {
  "value": "CommonProgressStyleOptions10+",
  "id": "commonprogressstyleoptions10",
  "level": 2
}, {
  "value": "ScanEffectOptions10+",
  "id": "scaneffectoptions10",
  "level": 2
}, {
  "value": "ProgressStyleOptions8+",
  "id": "progressstyleoptions8",
  "level": 2
}, {
  "value": "CapsuleStyleOptions10+",
  "id": "capsulestyleoptions10",
  "level": 2
}, {
  "value": "RingStyleOptions10+",
  "id": "ringstyleoptions10",
  "level": 2
}, {
  "value": "LinearStyleOptions10+",
  "id": "linearstyleoptions10",
  "level": 2
}, {
  "value": "ScaleRingStyleOptions10+",
  "id": "scaleringstyleoptions10",
  "level": 2
}, {
  "value": "EclipseStyleOptions10+",
  "id": "eclipsestyleoptions10",
  "level": 2
}, {
  "value": "ProgressStatus10+枚举说明",
  "id": "progressstatus10枚举说明",
  "level": 2
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（设置进度条的类型）",
  "id": "示例1设置进度条的类型",
  "level": 3
}, {
  "value": "示例2（设置环形进度条属性）",
  "id": "示例2设置环形进度条属性",
  "level": 3
}, {
  "value": "示例3（设置环形进度条动画）",
  "id": "示例3设置环形进度条动画",
  "level": 3
}, {
  "value": "示例4（设置胶囊形进度条属性）",
  "id": "示例4设置胶囊形进度条属性",
  "level": 3
}, {
  "value": "示例5（设置进度平滑动效）",
  "id": "示例5设置进度平滑动效",
  "level": 3
}, {
  "value": "示例6（设置定制内容区）",
  "id": "示例6设置定制内容区",
  "level": 3
}, {
  "value": "示例7（设置隐私隐藏）",
  "id": "示例7设置隐私隐藏",
  "level": 3
}, {
  "value": "示例8（设置Capsule进度条圆角半径）",
  "id": "示例8设置capsule进度条圆角半径",
  "level": 3
}, {
  "value": "示例9（设置线性进度条和胶囊进度条属性）",
  "id": "示例9设置线性进度条和胶囊进度条属性",
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
        id: "progress",
        children: "Progress"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进度条组件，用于显示内容加载或操作处理等进度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(33783)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该组件从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Progress(options: ProgressOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建进度条组件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#progressoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ProgressOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按进度条类型不同，设置不同属性的进度条组件参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "progressoptions对象说明",
      children: "ProgressOptions对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进度条选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定当前进度值。设置小于0的数值时置为0，设置大于total的数值时置为total。  默认值：0  取值范围：[0, total]  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "total"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定进度总长。设置小于等于0的数值时置为100。  默认值：100  取值范围：[0, 2147483647]  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type8+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#progresstype8%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ProgressType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定进度条类型。  默认值：ProgressType.Linear  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 不同的type需分别对应相应的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#style8",
              children: "style"
            }), "属性设置，详细映射关系参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#progressstylemap10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ProgressStyleMap"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "style(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#progressstyle%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ProgressStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定进度条样式。  该参数从API version8开始废弃，建议使用type替代。  默认值：ProgressStyle.Linear"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "progresstype8枚举说明",
      children: "ProgressType8+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进度条类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "Linear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线性样式。从API version 9开始，当高度大于宽度时，自适应垂直显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "环形无刻度样式，环形圆环逐渐显示直至完全填充。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eclipse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆形样式，显示类似月圆月缺的进度展示效果，从月牙逐渐变化至满月。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ScaleRing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "环形有刻度样式，显示类似时钟刻度形式的进度展示效果。从API version 9开始，刻度外圈出现重叠时自动转换为环形无刻度进度条。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Capsule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "胶囊样式，头尾两端圆弧处的进度展示效果与Eclipse相同，中段的进度展示效果与Linear相同。当高度大于宽度时，自适应垂直显示。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "progressstyle枚举说明",
      children: "ProgressStyle枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进度条样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "Linear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线性样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ring8+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "环形圆环逐渐显示直至完全填充。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eclipse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆形样式，显示类似月圆月缺的进度展示效果，从月牙逐渐变化至满月。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ScaleRing8+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "环形有刻度样式，显示类似时钟刻度形式的进度展示效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Capsule8+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "胶囊样式，头尾两端圆弧处的进度展示效果与Eclipse相同，中段的进度展示效果与Linear相同。当高度大于宽度时，自适应垂直显示。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "progressstylemap10对象说明",
      children: "ProgressStyleMap10+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进度条类型和样式的映射表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ProgressType.Linear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#linearstyleoptions10",
              children: "LinearStyleOptions10+"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ProgressType.Ring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ringstyleoptions10",
              children: "RingStyleOptions10+"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ProgressType.Eclipse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#eclipsestyleoptions10",
              children: "EclipseStyleOptions10+"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ProgressType.ScaleRing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#scaleringstyleoptions10",
              children: "ScaleRingStyleOptions10+"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ProgressType.Capsule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#capsulestyleoptions10",
              children: "CapsuleStyleOptions10+"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "通用属性"
      }), "外，还支持以下属性："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(118469)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该组件重写了通用属性", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundcolor",
        children: "backgroundColor"
      }), "，直接添加在Progress组件上，设置进度条的底色。如需设置整个Progress组件的背景色，需要在外层容器上添加backgroundColor，并用该容器包裹Progress组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "value",
      children: "value"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "value(value: number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前进度值。设置小于0的数值时置为0，设置大于total的数值时置为total。非法数值不生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前进度值。  默认值：0"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "color",
      children: "color"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "color(value: ResourceColor | LinearGradient)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置进度条前景色。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 10开始支持利用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-datapanel/ts-basic-components-datapanel#lineargradient10",
        children: "LinearGradient"
      }), "设置Ring样式的渐变色。Ring类型不建议设置透明度，如需设置透明度，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-datapanel/ts-basic-components-datapanel",
        children: "DataPanel"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 23开始支持利用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-datapanel/ts-basic-components-datapanel#lineargradient10",
        children: "LinearGradient"
      }), "设置Linear样式和Capsule样式的渐变色。API version 22及之前版本利用LinearGradient设置Linear样式和Capsule样式的渐变色时，会以默认主题色显示。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用，暂不支持LinearGradient。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-datapanel/ts-basic-components-datapanel#lineargradient10",
              children: "LinearGradient"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "style8",
      children: "style8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "style(value: ProgressStyleOptions | CapsuleStyleOptions | RingStyleOptions | LinearStyleOptions | ScaleRingStyleOptions | EclipseStyleOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件的样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#progressstyleoptions8",
              children: "ProgressStyleOptions8+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#capsulestyleoptions10",
              children: "CapsuleStyleOptions10+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ringstyleoptions10",
              children: "RingStyleOptions10+"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "contentmodifier12",
      children: "contentModifier12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "contentModifier(modifier:ContentModifier<ProgressConfiguration>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定制progress内容区的方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "modifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#progressconfiguration12",
              children: "ContentModifier<ProgressConfiguration>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在progress组件上，定制内容区的方法。  modifier： 内容修改器，开发者需要自定义class实现ContentModifier接口。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "privacysensitive12",
      children: "privacySensitive12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "privacySensitive(isPrivacySensitiveMode: Optional<boolean>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置隐私敏感。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(576343)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 12开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "isPrivacySensitiveMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional<boolean>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置隐私敏感，隐私模式下进度清零，文字将被遮罩。true：打开隐私敏感；false：关闭隐私敏感。  默认值：false  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  设置null表示不敏感。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "progressconfiguration12",
      children: "ProgressConfiguration12+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["进度条配置。继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-content-modifier/ts-universal-attributes-content-modifier#commonconfigurationt",
        children: "CommonConfiguration"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前进度值。当设置的数值小于0时，将其置为0。当设置的数值大于total时，将其置为total。  默认值：0  取值范围：[0, total]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "total"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["进度总长。  取值范围：[0, 2147483647]  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  total是负数时，按照100处理。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "commonprogressstyleoptions10",
      children: "CommonProgressStyleOptions10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进度条通用样式选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "enableSmoothEffect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进度平滑动效的开关。开启平滑动效后设置进度，进度会从当前值渐变至设定值，页面会有进度变化的动效；否则进度从当前值突变至设定值，页面无动效。  true：表示开启进度平滑动效。  false：表示关闭进度平滑动效。  默认值：true"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scaneffectoptions10",
      children: "ScanEffectOptions10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "扫光效果选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "enableScanEffect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["扫光效果的开关。仅支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "#progresstype8%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "Linear、Ring、Capsule"
            }), "类型的进度条。  true：表示开启扫光效果。  false：表示关闭扫光效果。  默认值：false"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "progressstyleoptions8",
      children: "ProgressStyleOptions8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进度条样式选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#commonprogressstyleoptions10",
        children: "CommonProgressStyleOptions"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "strokeWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置进度条宽度（不支持百分比设置）。  默认值：4.0vp  超出取值范围按默认值处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scaleCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置环形进度条总刻度数。  默认值：120vp  取值范围：[2, min(width, height)/scaleWidth/2/π]，超出取值范围时，样式显示为环形无刻度进度条。默认情况下宽高最小为77vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scaleWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置环形进度条刻度粗细（不支持百分比设置）。刻度粗细大于进度条宽度时，为系统默认粗细。  默认值：2.0vp"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "capsulestyleoptions10",
      children: "CapsuleStyleOptions10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "胶囊样式选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#scaneffectoptions10",
        children: "ScanEffectOptions"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#commonprogressstyleoptions10",
        children: "CommonProgressStyleOptions"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "borderColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内描边颜色。  默认值：  API version 10：'#33006cde'  API version 11及以上：'#33007dff'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "borderWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内描边宽度（不支持百分比设置）。  默认值：1vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本内容，应用可自定义。  从API version 20开始，支持Resource类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "font"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#font",
              children: "Font"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文本样式。  默认值：  文本大小（不支持百分比设置）：12fp  其他文本参数跟随", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
              children: "Text"
            }), "组件的主题值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本颜色。  默认值：'#ff182431'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "showDefaultPercentage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示百分比文本的开关。开启后，进度条上显示当前进度的百分比。设置了content属性时该属性不生效。  true：表示显示百分比文本；false：表示不显示百分比文本。  默认值：false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "borderRadius18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capsule进度条圆角半径（不支持百分比设置）。  取值范围：[0, height/2]。默认值：height / 2。  设置非法数值时，按照默认值处理。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ringstyleoptions10",
      children: "RingStyleOptions10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "环形无刻度样式选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#scaneffectoptions10",
        children: "ScanEffectOptions"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#commonprogressstyleoptions10",
        children: "CommonProgressStyleOptions"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "strokeWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置进度条宽度（不支持百分比设置）。当宽度大于等于半径时，宽度默认修改为半径值的二分之一。  默认值：4.0vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shadow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进度条阴影开关。  true：表示打开进度条阴影；false：表示关闭进度条阴影。  默认值：false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#progressstatus10%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ProgressStatus10+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置进度条状态。当设置为ProgressStatus.LOADING时会开启检查更新动效，此时设置进度值不生效。当从ProgressStatus.LOADING设置为ProgressStatus.PROGRESSING时，检查更新动效会执行到终点再停止。  默认值：ProgressStatus.PROGRESSING"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "linearstyleoptions10",
      children: "LinearStyleOptions10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "线性样式选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#scaneffectoptions10",
        children: "ScanEffectOptions"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#commonprogressstyleoptions10",
        children: "CommonProgressStyleOptions"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "strokeWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置进度条宽度（不支持百分比设置）。  默认值：4.0vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "strokeRadius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#px10",
              children: "PX"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#vp10",
              children: "VP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#lpx10",
              children: "LPX"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scaleringstyleoptions10",
      children: "ScaleRingStyleOptions10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "环形有刻度样式选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#commonprogressstyleoptions10",
        children: "CommonProgressStyleOptions"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "strokeWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置进度条宽度（不支持百分比设置）。  默认值：4.0vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scaleCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置环形进度条总刻度数。  默认值：120vp  取值范围：[2, min(width, height)/scaleWidth/2/π]，超出取值范围时，样式显示为环形无刻度进度条。默认情况下宽高最小为77vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scaleWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置环形进度条刻度粗细（不支持百分比设置）。刻度粗细大于进度条宽度时，为系统默认粗细。  默认值：2.0vp"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "eclipsestyleoptions10",
      children: "EclipseStyleOptions10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "圆形样式选项。圆形样式的显示类似月圆月缺的进度展示效果，从月牙逐渐变化至满月。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#commonprogressstyleoptions10",
        children: "CommonProgressStyleOptions"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "progressstatus10枚举说明",
      children: "ProgressStatus10+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进度条的当前状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "LOADING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'LOADING'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PROGRESSING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'PROGRESSING'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进度更新中。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
        children: "通用事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1设置进度条的类型",
      children: "示例1（设置进度条的类型）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#progressoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "ProgressOptions"
      }), "的入参type，实现了设置进度条类型的功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ProgressExample {\n  build() {\n    Column({ space: 15 }) {\n      Text('Linear Progress').fontSize(9).fontColor(0xCCCCCC).width('90%')\n      Progress({ value: 10, type: ProgressType.Linear }).width(200)\n      Progress({ value: 20, total: 150, type: ProgressType.Linear }).color(Color.Grey).value(50).width(200)\n\n\n      Text('Eclipse Progress').fontSize(9).fontColor(0xCCCCCC).width('90%')\n      Row({ space: 40 }) {\n        Progress({ value: 10, type: ProgressType.Eclipse }).width(100)\n        Progress({ value: 20, total: 150, type: ProgressType.Eclipse }).color(Color.Grey).value(50).width(100)\n      }\n\n      Text('ScaleRing Progress').fontSize(9).fontColor(0xCCCCCC).width('90%')\n      Row({ space: 40 }) {\n        Progress({ value: 10, type: ProgressType.ScaleRing }).width(100)\n        Progress({ value: 20, total: 150, type: ProgressType.ScaleRing })\n          .color(Color.Grey).value(50).width(100)\n          .style({ strokeWidth: 15, scaleCount: 15, scaleWidth: 5 })\n      }\n\n      // scaleCount和scaleWidth效果对比\n      Row({ space: 40 }) {\n        Progress({ value: 20, total: 150, type: ProgressType.ScaleRing })\n          .color(Color.Grey).value(50).width(100)\n          .style({ strokeWidth: 20, scaleCount: 20, scaleWidth: 5 })\n        Progress({ value: 20, total: 150, type: ProgressType.ScaleRing })\n          .color(Color.Grey).value(50).width(100)\n          .style({ strokeWidth: 20, scaleCount: 30, scaleWidth: 3 })\n      }\n\n      Text('Ring Progress').fontSize(9).fontColor(0xCCCCCC).width('90%')\n      Row({ space: 40 }) {\n        Progress({ value: 10, type: ProgressType.Ring }).width(100)\n        Progress({ value: 20, total: 150, type: ProgressType.Ring })\n          .color(Color.Grey).value(50).width(100)\n          .style({ strokeWidth: 20 })\n      }\n\n      Text('Capsule Progress').fontSize(9).fontColor(0xCCCCCC).width('90%')\n      Row({ space: 40 }) {\n        Progress({ value: 10, type: ProgressType.Capsule }).width(100).height(50)\n        Progress({ value: 20, total: 150, type: ProgressType.Capsule })\n          .color(Color.Grey)\n          .value(50)\n          .width(100)\n          .height(50)\n      }\n    }.width('100%').margin({ top: 30 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(84891)/* ["default"] */.A) + "",
        width: "340",
        height: "619"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2设置环形进度条属性",
      children: "示例2（设置环形进度条属性）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#style8",
        children: "style"
      }), "接口的strokeWidth和shadow属性，实现了环形进度条视觉属性设置功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ProgressExample {\n  private gradientColor: LinearGradient = new LinearGradient([{ color: Color.Yellow, offset: 0.5 },\n    { color: Color.Orange, offset: 1.0 }])\n\n  build() {\n    Column({ space: 15 }) {\n      Text('Gradient Color').fontSize(9).fontColor(0xCCCCCC).width('90%')\n      Progress({ value: 70, total: 100, type: ProgressType.Ring })\n        .width(100).style({ strokeWidth: 20 })\n        .color(this.gradientColor)\n\n      Text('Shadow').fontSize(9).fontColor(0xCCCCCC).width('90%')\n      Progress({ value: 70, total: 100, type: ProgressType.Ring })\n        .width(120).color(Color.Orange)\n        .style({ strokeWidth: 20, shadow: true })\n    }.width('100%').padding({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(866080)/* ["default"] */.A) + "",
        width: "349",
        height: "345"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3设置环形进度条动画",
      children: "示例3（设置环形进度条动画）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#style8",
        children: "style"
      }), "接口的status和enableScanEffect属性，实现了环形进度条动效的开关功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ProgressExample {\n  build() {\n    Column({ space: 15 }) {\n      Text('Loading Effect').fontSize(9).fontColor(0xCCCCCC).width('90%')\n      Progress({ value: 0, total: 100, type: ProgressType.Ring })\n        .width(100).color(Color.Blue)\n        .style({ strokeWidth: 20, status: ProgressStatus.LOADING })\n\n      Text('Scan Effect').fontSize(9).fontColor(0xCCCCCC).width('90%')\n      Progress({ value: 30, total: 100, type: ProgressType.Ring })\n        .width(100).color(Color.Orange)\n        .style({ strokeWidth: 20, enableScanEffect: true })\n    }.width('100%').padding({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(28184)/* ["default"] */.A) + "",
        width: "406",
        height: "400"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4设置胶囊形进度条属性",
      children: "示例4（设置胶囊形进度条属性）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#style8",
        children: "style"
      }), "接口的borderColor、borderWidth、content、font、fontColor、enableScanEffect、showDefaultPercentage属性，实现胶囊形进度条的视觉属性设置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ProgressExample {\n  build() {\n    Column({ space: 15 }) {\n      Row({ space: 40 }) {\n        Progress({ value: 100, total: 100, type: ProgressType.Capsule }).width(100).height(50)\n          .style({\n            borderColor: Color.Blue,\n            borderWidth: 1,\n            content: 'Installing...',\n            font: { size: 13, style: FontStyle.Normal },\n            fontColor: Color.Gray,\n            enableScanEffect: false,\n            showDefaultPercentage: false\n          })\n      }\n    }.width('100%').padding({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(334624)/* ["default"] */.A) + "",
        width: "232",
        height: "67"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5设置进度平滑动效",
      children: "示例5（设置进度平滑动效）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#style8",
        children: "style"
      }), "接口的enableSmoothEffect属性，实现了进度平滑动效开关的功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct Index {\n  @State value: number = 0;\n\n  build() {\n    Column({ space: 10 }) {\n      Text('enableSmoothEffect: true')\n        .fontSize(9)\n        .fontColor(0xCCCCCC)\n        .width('90%')\n        .margin(5)\n        .margin({ top: 20 })\n      Progress({ value: this.value, total: 100, type: ProgressType.Linear })\n        .style({ strokeWidth: 10, enableSmoothEffect: true })\n\n      Text('enableSmoothEffect: false').fontSize(9).fontColor(0xCCCCCC).width('90%').margin(5)\n      Progress({ value: this.value, total: 100, type: ProgressType.Linear })\n        .style({ strokeWidth: 10, enableSmoothEffect: false })\n\n      Button('value +10').onClick(() => {\n        this.value += 10;\n      })\n        .width(75)\n        .height(15)\n        .fontSize(9)\n    }\n    .width('50%')\n    .height('100%')\n    .margin({ left: 20 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(296770)/* ["default"] */.A) + "",
        width: "660",
        height: "400"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6设置定制内容区",
      children: "示例6（设置定制内容区）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contentmodifier12",
        children: "contentModifier"
      }), "接口，实现了自定义进度条的功能，自定义实现星形，其中总进度为3，且当前值可通过按钮进行增减，达到的进度使用自定义颜色填充。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nclass MyProgressModifier implements ContentModifier<ProgressConfiguration> {\n  color: ResourceColor = Color.White;\n\n  constructor(color: ResourceColor) {\n    this.color = color;\n  }\n\n  applyContent(): WrappedBuilder<[ProgressConfiguration]> {\n    return wrapBuilder(myProgress);\n  }\n}\n\n@Builder\nfunction myProgress(config: ProgressConfiguration) {\n\n  Column({ space: 30 }) {\n    Text('当前进度：' + config.value + '/' + config.total).fontSize(20)\n    Row() {\n      Flex({ justifyContent: FlexAlign.SpaceBetween }) {\n        Path()\n          .width('30%')\n          .height('30%')\n          .commands('M108 0 L141 70 L218 78.3 L162 131 L175 205 L108 170 L41.2 205 L55 131 L1 78 L75 68 L108 0 Z')\n          .fill(config.enabled && config.value >= 1 ? (config.contentModifier as MyProgressModifier).color :\n          Color.White)\n          .stroke(Color.Black)\n          .strokeWidth(3)\n        Path()\n          .width('30%')\n          .height('30%')\n          .commands('M108 0 L141 70 L218 78.3 L162 131 L175 205 L108 170 L41.2 205 L55 131 L1 78 L75 68 L108 0 Z')\n          .fill(config.enabled && config.value >= 2 ? (config.contentModifier as MyProgressModifier).color :\n          Color.White)\n          .stroke(Color.Black)\n          .strokeWidth(3)\n        Path()\n          .width('30%')\n          .height('30%')\n          .commands('M108 0 L141 70 L218 78.3 L162 131 L175 205 L108 170 L41.2 205 L55 131 L1 78 L75 68 L108 0 Z')\n          .fill(config.enabled && config.value >= 3 ? (config.contentModifier as MyProgressModifier).color :\n          Color.White)\n          .stroke(Color.Black)\n          .strokeWidth(3)\n      }.width('100%')\n    }\n  }.margin({ bottom: 100 })\n}\n\n@Entry\n@Component\nstruct Index {\n  @State currentValue: number = 0;\n  modifier = new MyProgressModifier('rgb(39, 135, 217)');\n  @State myModifier: (MyProgressModifier | undefined) = this.modifier;\n\n  build() {\n    Column() {\n      Progress({ value: this.currentValue, total: 3, type: ProgressType.Ring }).contentModifier(this.modifier)\n      Button('Progress++').onClick(() => {\n        if (this.currentValue < 3) {\n          this.currentValue += 1;\n        }\n      }).width('30%')\n      Button('Progress--').onClick(() => {\n        if (this.currentValue > 0) {\n          this.currentValue -= 1;\n        }\n      }).width('30%').margin('10')\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(640559)/* ["default"] */.A) + "",
        width: "400",
        height: "487"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例7设置隐私隐藏",
      children: "示例7（设置隐私隐藏）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#privacysensitive12",
        children: "privacySensitive"
      }), "属性，实现了隐私隐藏效果。效果展示需要卡片框架支持。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ProgressExample {\n  build() {\n    Row() {\n      Column({ space: 15 }) {\n        Progress({ value: 33, total: 100, type: ProgressType.Capsule }).width(300).height(50)\n          .color(Color.Blue)\n          .style({\n            borderWidth: 5,\n            font: { size: 13, style: FontStyle.Normal },\n            enableScanEffect: false,\n            showDefaultPercentage: true\n          })\n          .privacySensitive(true)\n        Progress({ value: 33, total: 100, type: ProgressType.Capsule }).width(300).height(50)\n          .color(Color.Blue)\n          .style({\n            borderWidth: 5,\n            content: 'Installing...',\n            font: { size: 13, style: FontStyle.Normal },\n            enableScanEffect: false,\n          })\n          .privacySensitive(true)\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(131499)/* ["default"] */.A) + "",
        width: "402",
        height: "150"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例8设置capsule进度条圆角半径",
      children: "示例8（设置Capsule进度条圆角半径）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#capsulestyleoptions10",
        children: "CapsuleStyleOptions"
      }), "的入参borderRadius，实现了Capsule类型进度条圆角半径设置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，新增borderRadius属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { LengthMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct ProgressExample {\n  build() {\n    Column({ space: 15 }) {\n      Text('Capsule Progress').fontSize(9).width('90%')\n      Row({ space: 15 }) {\n        Progress({ value: 30, total: 100, type: ProgressType.Capsule })\n          .style({ content: '默认圆角', borderWidth: 5 })\n          .width(100)\n          .height(60)\n      }\n\n      Row({ space: 15 }) {\n        Progress({ value: 30, total: 100, type: ProgressType.Capsule })\n          .style({ content: '圆角为20vp', borderWidth: 5, borderRadius: LengthMetrics.vp(20) })\n          .width(100)\n          .height(60)\n      }\n    }\n    .width('100%')\n    .margin({ top: 30 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(171712)/* ["default"] */.A) + "",
        width: "674",
        height: "263"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例9设置线性进度条和胶囊进度条属性",
      children: "示例9（设置线性进度条和胶囊进度条属性）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 23开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#color",
        children: "color"
      }), "属性中的LinearGradient，实现线性进度条和胶囊进度条渐变色的功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ProgressExample {\n  private gradientColor: LinearGradient = new LinearGradient([{ color: \"#87BDF9\", offset: 0.5 },\n    { color: \"#3662F0\", offset: 1.0 }])\n  public gradientColor2: LinearGradient = new LinearGradient([{ color: \"#A5A5AF\", offset: 0.5 },\n    { color: \"#67666C\", offset: 1.0 }])\n\n  build() {\n    Column({ space: 15 }) {\n      Text('Linear：').fontSize(9).fontColor(0xCCCCCC).width('90%')\n      Progress({ value: 70, total: 100, type: ProgressType.Linear })\n        .width(100).style({ strokeWidth: 20 })\n        .color(this.gradientColor)\n\n      Text('Capsule：').fontSize(9).fontColor(0xCCCCCC).width('90%')\n      Progress({ value: 50, total: 100, type: ProgressType.Capsule })\n        .width(120).style({ strokeWidth: 40 })\n        .color(this.gradientColor2)\n    }.width('100%').padding({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(758941)/* ["default"] */.A) + "",
        width: "479",
        height: "197"
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
33783(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
640559(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800266-3f963c1bbab975389784f4f04c0eb0e3.gif");

},
576343(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
296770(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479915-73e92e4e1cd8d20faedea9bea043d47f.gif");

},
131499(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439961-61bb5d5d9410994c00bcf48cca90cecc.gif");

},
866080(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800264-02ac8232d6a2a211ac124c367de94926.png");

},
28184(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439959-9b857fc5d2c9c900ed0dfce19ff95640.gif");

},
118469(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
171712(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959916-ca0c16d0bbd9cf296cc8b009149a312a.png");

},
758941(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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PSeUIN5wzWuFGFCAFVBg44MPffZzn/+t3/rNlWetOji8/+577xEFMbk4yry4iL1XYsoljxuJAu//wK++/Zfe8uP77//a17++fsP6r/7PP+7rHxgeHg7xrICClEgBJSjBxRQ3kvMvePVN71pHnpIkFtFTli4KXT6CE/dWGWPMCTRb3ZmYepxLmNDfl/zqr7z7T776Jwf2H0TucnXjzfwTn/rdzU9s+ekjj5177rlve+ubzz9v9dmrXwUISHLvRfL77rs398JMU1NTP/7xfeedtzpNs7vu+qclpyy5/vrrb731y4899vi+fcP9fQPPPvuCqOa5Pr1j5/59B1QkTXPvM+8zn/vzz1v91FNbzz33vNe85tXnnXv2QH/vqcuWQjRPPYQgOsvxG2PM/HZEYwXf975f37Zt26/+yvt++fpfSnrjH/7TjxqNxplnnjE+Pvqtb/717bf/34VDCzb8/fcixyoShqg89+zOz/zeZy695JJ777tvoL/vnetuSLP8tttuu/feey++6KKNGzeetfKMZUuXXPX6K//ya//nj/7w1sWLF/7kgQcHB3qJKHKup5F475lp7Q033HnnnZ/61CffdNXVe/f+7I477vjmN/960aIhALfc8vG1625461uvO/7vkjHGnGjUWfadiSLPJcvyjRs3btz48ERz4oILX33tdddFzkVR9Ohjj9111w+J6M1vvvbJJ7e98Y1XDw0tfO973//hD39obGxsy5aty0877Ya17xgcGMi9Hxsd/9bffGv//uFTT33FunVr+/v7AGzZsuUf//EHPT09b3nLW7Zv337hBReuWHH6j++/P0kav3DZZUQ01Zz63t9/b/vWbYsXL77hhuuXLVuqijiOvva1r19x5RUXXfTqE/RWGWPMCXQE6QyoQFW9F+c4F8/MzJxlWTnYT5idiITxfkT0a7/26x/5yEfe8IZritGGQJZljUZDVfLcx3HsvQ/lZREh5jDCuxjJDcdMWZaHsnLYbZ77yDEz5bmvXjqMKqwGEBpjzMnk8GMFi8I0MUiJ2QGIXfGUJAlDqClsEx51jgGICBFEBEDo9OZcAwARJwmXKwVAGNLSQhS6YVSZG3aYJFG4/BfWh71Vh2eMMSefl2x4SpGAVMxQdySdJN5wzVWvWLaUCUffqcL6YBhjDA5T2VBAQue5l9E+9d4DCJWKMOeRMcaYo3L4tnNoycrRBjSXpeSX2G7Gx631bIwxh70qaHPbG2PMnDlMo9ii2Rhj5owVhY0xpo4snY0xpo4snY0xpo4snY0xpo4snY0xpo4snY0xpo4snY0xpo4snY0xpo4snY0xpo4snY0xpo4snY0xpo4snY0xpo4snY0xpo4snU330lnmGD+5dMGPeJKyW6aaaWSuD2CaY9eAUICKrJJihRCO9uZqNUKzT/NLxfTsqvAACVzrHqBmnrB0NtOcvH+/M0QZO/j53LokKM0yFXtYqQQolO1mGvOQpbPpEgLMFGQ6389GMvPZhVp3uyfYrY7mpSO4+5/pKnX753DMIiUHADgFFZUNhR6mNDBPHOb4qVXIaf+lzvezURextrNBuI16uHu6ClRBRESYmmoePDg2OTk+OTnRbDZVEc7lqhIqmqpKRdk2rAdQbENE5WLr0fL74v8i0v7tzMuk5dO1upVw+NJ2DG2v1LYQjk1VVZXIq5IqKVhVvbo1l1/BMTfncz5T8f4UmKMo4jhyziHhUGUmKBgEgCAKT2TpPG9YOhsAcM557wEQOE2zp59+5plnnt2zZ0+aps45VQ2PlknXSr2gisXqa/tD0x49NIPb13c+VwGpNhAVKNr3HP5PhGkv257mYT8KrwoVUkLkGqmXCy+8OB2TzPXoPL4uCOq4ipuWHwakr8f19jT6e5LEQQBSMB3uKqKpIUtn08rcAwcOPL5527antotIaE0TnHiogikKMUdUtHlVUbSSQ9qGb8rlstZZBmX5VUSqNC5THlVWt+8TUIUAUp0MoGUeA8xcNtIx7czR1sSukppUXfWz5nme5dkZZ5ySS3G9bP5qj1sR5F6zzOe5H03zvcNj+8kN9PYO9kd9PSxCTGR/8POI/bK6VusyERFNTExu2rRp+/anJY9CVoYmMzN776e1i6mzsdm+pr1l3UrVti3DbsPK6XsuGsatVjBCr4RqWaHoaLaXL8TlT1TtrdqsOioX6jEEFfFJEolXZjjMbx3NYQaYEEUeUR81Mt8/NSXjI1PjExN9PdGSxf0RkWsFurb2YWrJ0rk7qWhIRgbx09uf2bjx4cmJJlGiEEVopoZSpSgBRBKaxJ0liGJ5WqYeuk1IWCioSORDqssKkqJ5TFVRQ9sSW6FA2Spubx2XO5leVOncf7ETVQGUIJrn0cn6UZ8QAQOqyqT9LP19+0eT/aOTo7snFi/uX9qAUwBKlIEUYKhDUZo29WLp3KVUNc2yOGo8vvnxTZseFY84bngf8mvODqqtQXecxvG17/9kTqRilI0ChIUDUV/v4N7hyeE9B6MF/QuHIgaYIoJ0vB8n8dsxP1k6dyfKvURRct99P962bUcUxc5xmqZE8/2DvmlDxRcH9DqsOKX34EHaf3Ai9b1LFsesFBEzhUq/WE+7GrJ07lZKD/zkoRDN4UM/M4t4ms8dGExL+WtkgFQUGjEtWdDQuLF77wG4wUVDEQBXjFrxoNnGHJo5Y+ncRbz3zjkREdGtW7f/279tbTR6siyDsqqEfhaz1Y5nrSkf5TaYeRttvxI4fT9QiOrM+686Pr/kMUyvR5/c2goVQiRECgUTL+hzunRo789G2Q0sGnQEMJRULZlryD7OdJHQAQPA7t27f/rTR+OoIR7c6mQl9ZsCyfycBEU7mkL/jhhY1M8LB3v37R+baKpXeAXYsrmOLJ27SJ7noUPbgw8+CGXvVQREzv4ZnHyoPNcqoGCFU3IAOc2jXJYuSnqSZP9wUxRglq75SDG/2J9lF3Eu8t5vf3rH8PABEWWOAM7zfK6PyxwPVacXFrCABCRgaMasMWHxwp5mMx0bz71CrK5RS1Z3PukVl+MVEIUX/PSRLXC9EKj6tuHONG00dfs3L6PuTNoa+XcEz1VVUZWO9dByDh+VmfeDqv/fUdWdVSVMTxFGgZ+kuKpouDKnCQD1gjMgG+xtjPU2Dh7I+wYiIedO4ndi3rK2cxdhph3PPDs2Pp57qy+f9GjaN+1jCglK0IULGt7nY2OZts+lZGrD0rmLqGLnzueZOUxHZ7pR0Z6OCNTTgyThsYlJi+Z6sr/SLtJsps8//3yYdm6uj8XMEQozR0VhMOHAgEvTPLNLD7Vkdecu8vzzLxBRHMdpmkagl6oF/3x9nPWo9qM6rd5d9nGe6bWm93E+2rqziBDrodM5dQMNHesUTBCgv7+x5+D4ZCoLImuo1Y79SrrI7t17Qn9nq2x0LYFo1c8OnlhcHKV5152l5gX7K+0iIyMjob/zXB+ImRta9NwpviF4R5LE8VRzro/MzMTSuYtMTEyE8dxd+IneBFrdAxZhtmtEUZRlc3xUZkZWdz7JtbeT0zSFF1aQl5+rpnz86s6H9HE+5LVm6ONs82wcsbL3M4d5tBMQQSYJAjTm+tjMdNZ27iJ5nhNRea9V06WoGCzUfsMwP8fHZGZi6dxFQtG5urGI6XJVgcsqXfVk6dxFent7wySi9tdoQrfncM9z68NTT1Z37iI9PT2qB4/tfM3Hsu48Ux/nY3U8YRKPsmat4u2zfHH7SO+J2UYn1ZGdM7vIwMBAGCVopWcDACpMSDOfJPZZqo4snbvIihWnW03DtEsziJeehuVAHdlvpYucfvpp4ZP+nPMNRPcAAAZOSURBVNYZtZwwTduWcXzuwG1mI4CCeLKZElMjtnN2HVnd+SQXLvwADEUSRacuO+2FF14UhdKc1J0VJK3lsp9zOZ/zMe/j3L5NR9/n4n7VXRZKCmSAU4U0QVHG0f4pTXoavZFNv19H1nY+6bX+7kSwevVZeZ7zHN9HTttaymqt5hOGgCicsMkpJ+OZTk1lg32RE7V0riFL565BIMJpy5cvWrTARh90JwIiFagoN5rg4bE8jnhBg2MSO0fWkKVzNyh+yyLS0xNf/JoLvNjECt1JCR7kUvBIirHxqYUDSYOU1CZ4riOrO5/0WifgKGbxetaqM554YtHwgbEs81EUZVlW3lrwhNSdO+7vd3z7OB+u7lxWvbut9AzVHGgC+w5M9SbRwr7IQWBl51qytnMXERFR32jEv3j5ZSLinAvRPNfHZU4cUfbMew/k6dTUKxb29rIACo4toGvI0rmLEFEUsapfseK0Sy+7JMzEb+ncTchztG/Mj41PLVs8uCARkiagqd31tZasstFVRKSYBemii1598ODIk1ufVJ32wXbG3hQ60wYvtU3Yq2rVg63cpP0bOuS5x0n1ch3HOd9TiWZr87a/u+V3Cuwfy/bsHx9aOLio35GfhObqkvn+JpysLJ27CJGjsp8v+fT1r7s0z8a3b9vhXOK9QgmAUl5MeVHMfRFmXFYqi8ZVLbfqs1ytb1+Wzm3KZUCKqYVRVoElvE6xrjjUalkVqtTW33m2bWZY37asAoFClaGACrEQlODn+eUwcjP9CRPCLVAUREokBAFyxcGxqQP70qWDA0sWOAdVFxMcqTZUQPYxunYsnbuUcxxF7tpr37R40aMbNz7sOPFeNVwmKxKVqrmJDmnt6kwt3yPZptxttV71RLSbOw4ASlp+kudI3fxtObbf5qSTissJrHAKeCDNMHyweXB08pRFQwuH2BEYBHBR2wzdna3EVTOWzl1NRH7x8ksXL17yox/dk2WZqjK7tmDV1rIeXWN11m1C11rV1mDu4rVkpjqJdm4z20iWl96GirOAgABVpVAS4KroMl/RzMN5MpCCwm0Ex8fz4X2TRNHyZYv6+0Hl+HkC22CgOrN07lIiwhwRUZ77s84686ab1j788CNbtz7lhdqKs7Ol3stOzNmS4MQkhAKqBIUqwYOJlKhJ8zifWJEculaBFC5TTIynE2OTkkt/f+/CoZ44QgQogcNG4bxEbcumTiydu1QUJQCq6ZAWLBh845uuuvDCV2/66eNbtmxlpjzPmZmomP1CRdpqFGXLt3is6NxMRaFipvUo+zfDH9pJueoNPVu35faUJ5r+3PZuJyLVPB6hO0pxSmAiQTHDhjJlWZaLCMAuOWG1leOgo6+F9xBBlvssk5FJzvOMSRpJsmhJT29ETBJKGAwqChtt1SZTQ3YTI4OQcSLCzAoaG5vcvn3b9u3PvPjiruZUM4ojEYFo2KYzT0HE1XdUlJTDloqO8SLtgdxa1doVSbj0V91b69CYDtNSH5Lph9umWmY4VVXyAs1VPfj3P/t5VZ7Ke+dzv1IFpVXKMrMXTyAm19/oSxLu7UNPDAYIOSEjeEYCRFA+ZD+W0LVj6WxCfvnQjk4zCbcfZOYsy4eHh8fGRkdHR7M0E1FVUSliOKRvaHyHtKSiKTctkcFE5fBBap95LkzGFJZFfStJmcratYpMnxJkWri3rzx0udo/oWjZe/K5B8XJmjVXRnGPajR/m44EEFrpTOyYOY6jJKJGW9WCICBPYUygMsBQbv3Q5AEp5kcydWLpbCBS9isjaLhQRqRQouLamXb8NRcODcGqwlBNId1WYSiXww4VCnBbb1wqe3Cgc7n9tco0L7apLjRWZwjVmZdbHUcIAp8Lgdlr+ISvNI//BMiB2qobSly9dykVbyUX9Ywwmyz5ck05yzblgAI2XLB2LJ1N12kvZs/nS4KHn6G6fZBR56CUQ86zM641c87S2Rhj6mj+Xg8xxpiTmaWzMcbUkaWzMcbUkaWzMcbUkaWzMcbUkaWzMcbUkaWzMcbUkaWzMcbUkaWzMcbUkaWzMcbUkaWzMcbUkaWzMcbUkaWzMcbUkaWzMcbUkaWzMcbUkaWzMcbUkaWzMcbUkaWzMcbUkaWzMcbUkaWzMcbUkaWzMcbUkaWzMcbUkaWzMcbU0f8HhWXFf0++M8oAAAAASUVORK5CYII=");

},
334624(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959914-b506cff55c97e28ee3a9a9ad2222bfcc.png");

},
84891(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479913-1ec0b360aaa5594c36855608dff28de5.png");

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