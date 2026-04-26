"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["140006"], {
530547(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_ui_system_scenarization_capability_arkts_layout_development_media_query_arkts_layout_development_media_query_md_4f5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-ui-system-scenarization-capability-arkts-layout-development-media-query-arkts-layout-development-media-query-md-4f5.json
var site_docs_arkui_arkts_ui_development_arkts_ui_system_scenarization_capability_arkts_layout_development_media_query_arkts_layout_development_media_query_md_4f5_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-layout-development-media-query/arkts-layout-development-media-query","title":"媒体查询 (@ohos.mediaquery)","description":"概述","source":"@site/docs/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-layout-development-media-query/arkts-layout-development-media-query.md","sourceDirName":"arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-layout-development-media-query","slug":"/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-layout-development-media-query/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-layout-development-media-query/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"媒体查询 (@ohos.mediaquery)","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-media-query","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"检查页面布局","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-inspector-overview/"},"next":{"title":"全屏启动元服务组件（FullScreenLaunchComponent）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-ui-cross-process/arkts-fullscreencomponent/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-layout-development-media-query/arkts-layout-development-media-query.md


const frontMatter = {
	title: '媒体查询 (@ohos.mediaquery)',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-media-query',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '媒体查询 (@ohos.mediaquery)';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "引入与使用流程",
  "id": "引入与使用流程",
  "level": 2
}, {
  "value": "媒体查询条件",
  "id": "媒体查询条件",
  "level": 2
}, {
  "value": "语法规则",
  "id": "语法规则",
  "level": 3
}, {
  "value": "媒体类型（media-type）",
  "id": "媒体类型media-type",
  "level": 3
}, {
  "value": "媒体逻辑操作（media-logic-operations）",
  "id": "媒体逻辑操作media-logic-operations",
  "level": 3
}, {
  "value": "媒体特征（media-feature）",
  "id": "媒体特征media-feature",
  "level": 3
}, {
  "value": "场景示例",
  "id": "场景示例",
  "level": 2
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
    li: "li",
    ol: "ol",
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
        id: "媒体查询-ohosmediaquery",
        children: "媒体查询 (@ohos.mediaquery)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-mediaquery/js-apis-mediaquery",
        children: "媒体查询"
      }), "作为响应式设计的核心，在移动设备上应用十分广泛。媒体查询可根据不同设备类型或同设备不同状态修改应用的样式。媒体查询常用于下面两种场景："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "针对设备和应用的属性信息（比如显示区域、深浅色、分辨率），设计出相匹配的布局。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当屏幕发生动态改变时（比如分屏、横竖屏切换），同步更新应用的页面布局。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "引入与使用流程",
      children: "引入与使用流程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["媒体查询通过mediaquery模块接口，设置查询条件并绑定回调函数，任一", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AA%92%E4%BD%93%E7%89%B9%E5%BE%81media-feature",
        children: "媒体特征"
      }), "改变时，均会触发回调函数，返回匹配结果，根据返回值更改页面布局或者实现业务逻辑，实现页面的响应式设计。具体步骤如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "首先导入媒体查询模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { mediaquery } from '@kit.ArkUI';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过matchMediaSync接口设置媒体查询条件，保存返回的条件监听句柄listener。例如监听横屏事件："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "listener:mediaquery.MediaQueryListener = this.getUIContext().getMediaQuery().matchMediaSync('(orientation: landscape)');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "给条件监听句柄listener绑定回调函数onPortrait，当listener检测设备状态变化时执行回调函数。在回调函数内，根据不同设备状态更改页面布局或者实现业务逻辑。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  onPortrait(mediaQueryResult:mediaquery.MediaQueryResult) {\n    if (mediaQueryResult.matches as boolean) { // 若设备为横屏状态，更改相应的页面布局\n    // ···\n    } else {\n    // ···\n    }\n  }\n\n// ···\n    this.listener.on('change', (mediaQueryResult: mediaquery.MediaQueryResult) => {\n    // ···\n    });\n    // ···\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "媒体查询条件",
      children: "媒体查询条件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "媒体查询条件由媒体类型、逻辑操作符、媒体特征组成，其中媒体类型可省略，逻辑操作符用于连接不同媒体类型与媒体特征，媒体特征要使用()包裹且可以有多个。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "语法规则",
      children: "语法规则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["语法规则包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AA%92%E4%BD%93%E7%B1%BB%E5%9E%8Bmedia-type",
        children: "媒体类型（media-type）"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AA%92%E4%BD%93%E9%80%BB%E8%BE%91%E6%93%8D%E4%BD%9Cmedia-logic-operations",
        children: "媒体逻辑操作（media-logic-operations）"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AA%92%E4%BD%93%E7%89%B9%E5%BE%81media-feature",
        children: "媒体特征（media-feature）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[media-type] [media-logic-operations] [(media-feature)]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "screen and (round-screen: true) ：表示当设备屏幕是圆形时条件成立。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(max-height: 800px) ：表示当高度小于等于800px时条件成立。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(height <= 800px) ：表示当高度小于等于800px时条件成立。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "screen and (device-type: tv) or (resolution < 2) ：表示包含多个媒体特征的多条件复杂语句查询，当设备类型为tv或设备分辨率小于2时条件成立。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(dark-mode: true) ：表示当系统为深色模式时成立。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "媒体类型media-type",
      children: "媒体类型（media-type）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询条件未写媒体类型时，默认为screen。媒体类型必须写在查询条件开头。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "screen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按屏幕相关参数进行媒体查询。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "媒体逻辑操作media-logic-operations",
      children: "媒体逻辑操作（media-logic-operations）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "媒体逻辑操作符包括and、or、not、only，用于构成复杂媒体查询，也可以通过逗号,将其组合，详细解释说明如下表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 媒体逻辑操作符"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "and"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将多个媒体特征（Media Feature）以“与”的方式连接成一个媒体查询，只有当所有媒体特征都为true时，查询条件成立。另外，它还可以将媒体类型和媒体功能结合起来。例如：screen and (device-type: wearable) and (max-height: 600px) 表示当设备类型是智能穿戴且应用的最大高度小于等于600个像素单位时成立。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "or"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将多个媒体特征以“或”的方式连接成一个媒体查询，如果存在结果为true的媒体特征，则查询条件成立。例如：screen and (max-height: 1000px) or (round-screen: true) 表示当应用高度小于等于1000个像素单位或者设备屏幕是圆形时，条件成立。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "not"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "not操作符必须搭配screen使用，取反媒体查询结果，媒体查询结果不成立时返回true，否则返回false。例如：not screen and (min-height: 50px) and (max-height: 600px) 表示当应用高度小于50个像素单位或者大于600个像素单位时成立。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "only操作符必须搭配screen使用, 当前效果与单独使用screen相同。例如：only screen and (height <= 50) 。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "comma（, ）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将多个媒体特征以“或”的方式连接成一个媒体查询，如果存在结果为true的媒体特征，则查询条件成立。其效果等同于or运算符。例如：screen and (min-height: 1000px), (round-screen: true) 表示当应用高度大于等于1000个像素单位或者设备屏幕是圆形时，条件成立。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "媒体范围操作符包括<=，>=，<，>，详细解释说明如下表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " 媒体逻辑范围操作符"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "<="
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小于等于，例如：screen and (height <= 50)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ">="
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "大于等于，例如：screen and (height >= 600)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "<"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小于，例如：screen and (height < 50)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ">"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "大于，例如：screen and (height > 600)。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "媒体特征media-feature",
      children: "媒体特征（media-feature）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "媒体特征包括应用显示区域的宽高、设备分辨率以及设备的宽高等属性，详细说明如下表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表3"
        })
      }), " 媒体特征说明表"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "比较height、width等宽高尺寸时，支持vp和px单位，无单位时默认为px。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用页面可绘制区域的高度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "min-height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用页面可绘制区域的最小高度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "max-height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用页面可绘制区域的最大高度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用页面可绘制区域的宽度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "min-width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用页面可绘制区域的最小宽度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "max-width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用页面可绘制区域的最大宽度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的分辨率，支持dpi，dppx和dpcm单位。其中：  - dpi表示每英寸中物理像素个数，1dpi ≈ 0.39dpcm；  - dpcm表示每厘米上的物理像素个数，1dpcm ≈ 2.54dpi；  - dppx表示每个px中的物理像素数（此单位按96px = 1英寸为基准，与页面中的px单位计算方式不同），1dppx = 96dpi。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "min-resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的最小分辨率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "max-resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的最大分辨率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "orientation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "屏幕的方向。  可选值：  - orientation: portrait（设备竖屏）；  - orientation: landscape（设备横屏）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "device-height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的高度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "min-device-height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的最小高度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "max-device-height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的最大高度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "device-width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的宽度。当前仅在应用初始化时保存一次，不会随设备宽度变化实时更新，例如折叠屏的折叠展开场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "device-type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的类型。  可选值：default、phone、tablet、tv、car、wearable、2in1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "min-device-width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的最小宽度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "max-device-width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的最大宽度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "round-screen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "屏幕类型，圆形屏幕为true，非圆形屏幕为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dark-mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统当前的深浅模式。可选值：true、false。  深色模式为true，浅色模式为false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(339048)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前在卡片中使用媒体查询，只支持height、width。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景示例",
      children: "场景示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面给出两个媒体查询的使用示例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例一使用媒体查询，实现屏幕横竖屏切换时，为页面文本应用添加不同的内容和样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stage模型下的示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { mediaquery } from '@kit.ArkUI';\nimport { window } from '@kit.ArkUI';\nimport { common } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct MediaQueryExample {\n  @State color: string = '#DB7093';\n  @State text: string = 'Portrait';\n  // 当设备横屏时条件成立\n  listener:mediaquery.MediaQueryListener = this.getUIContext().getMediaQuery().matchMediaSync('(orientation: landscape)');\n\n  // 当满足媒体查询条件时，触发回调\n  onPortrait(mediaQueryResult:mediaquery.MediaQueryResult) {\n    if (mediaQueryResult.matches as boolean) { // 若设备为横屏状态，更改相应的页面布局\n      this.color = '#FFD700';\n      this.text = 'Landscape';\n    } else {\n      this.color = '#DB7093';\n      this.text = 'Portrait';\n    }\n  }\n\n  aboutToAppear() {\n    // 绑定当前应用实例\n    // 绑定回调函数\n    this.listener.on('change', (mediaQueryResult: mediaquery.MediaQueryResult) => {\n      this.onPortrait(mediaQueryResult);\n    });\n  }\n\n  aboutToDisappear() {\n    // 解绑listener中注册的回调函数\n    this.listener.off('change');\n  }\n\n  // 改变设备横竖屏状态函数\n  private changeOrientation(isLandscape: boolean) {\n    // 获取UIAbility实例的上下文信息\n    let context:common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n    // 调用该接口手动改变设备横竖屏状态\n    window.getLastWindow(context).then((lastWindow) => {\n      lastWindow.setPreferredOrientation(isLandscape ? window.Orientation.LANDSCAPE : window.Orientation.PORTRAIT);\n    });\n  }\n\n  build() {\n    Column({ space: 50 }) {\n      Text(this.text).fontSize(50).fontColor(this.color);\n      Text('Landscape').fontSize(50).fontColor(this.color).backgroundColor(Color.Orange)\n        .onClick(() => {\n          this.changeOrientation(true);\n        });\n      Text('Portrait').fontSize(50).fontColor(this.color).backgroundColor(Color.Orange)\n        .onClick(() => {\n          this.changeOrientation(false);\n        });\n    }\n    .width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FA模型下的示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { mediaquery } from '@kit.ArkUI';\nimport { featureAbility } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct MediaQueryExample {\n  @State color: string = '#DB7093';\n  @State text: string = 'Portrait';\n  listener:mediaquery.MediaQueryListener = mediaquery.matchMediaSync('(orientation: landscape)'); // 当设备横屏时条件成立\n\n  onPortrait(mediaQueryResult:mediaquery.MediaQueryResult) { // 当满足媒体查询条件时，触发回调\n    if (mediaQueryResult.matches as boolean) { // 若设备为横屏状态，更改相应的文本内容与字体颜色\n      this.color = '#FFD700';\n      this.text = 'Landscape';\n    } else {\n      this.color = '#DB7093';\n      this.text = 'Portrait';\n    }\n  }\n\n  aboutToAppear() {\n    // 绑定当前应用实例\n    this.listener.on('change', (mediaQueryResult:mediaquery.MediaQueryResult) => { this.onPortrait(mediaQueryResult) }); //绑定回调函数\n  }\n\n  aboutToDisappear() {\n    // 解绑listener中注册的回调函数\n    this.listener.off('change');\n  }\n\n  build() {\n    Column({ space: 50 }) {\n      Text(this.text).fontSize(50).fontColor(this.color)\n      Text('Landscape').fontSize(50).fontColor(this.color).backgroundColor(Color.Orange)\n        .onClick(() => {\n          let context = featureAbility.getContext();\n          context.setDisplayOrientation(0); //调用该接口手动改变设备横竖屏状态\n        })\n      Text('Portrait').fontSize(50).fontColor(this.color).backgroundColor(Color.Orange)\n        .onClick(() => {\n          let context = featureAbility.getContext();\n          context.setDisplayOrientation(1); //调用该接口手动改变设备横竖屏状态\n        })\n    }\n    .width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 竖屏"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(676622)/* ["default"] */.A) + "",
        width: "362",
        height: "566"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 横屏"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(862399)/* ["default"] */.A) + "",
        width: "642",
        height: "282"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例二使用媒体查询实现屏幕横竖屏切换时Flex组件的不同布局，竖屏时Flex采用垂直方向布局，横屏时采用水平方向布局。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { LengthMetrics, mediaquery, window } from '@kit.ArkUI';\nimport { common } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct MediaQueryExample {\n  @State color: string = '#DB7093';\n  @State text: string = 'Portrait';\n  @State dir: FlexDirection = FlexDirection.Column\n  @State textHeight: string = \"30%\"\n  @State textWidth: string = \"100%\"\n  // 当设备横屏时条件成立\n  listener: mediaquery.MediaQueryListener =\n    this.getUIContext().getMediaQuery().matchMediaSync('(orientation: landscape)');\n\n  // 当满足媒体查询条件时，触发回调\n  onPortrait(mediaQueryResult: mediaquery.MediaQueryResult) {\n    if (mediaQueryResult.matches as boolean) { // 若设备为横屏状态，更改相应的文本内容与字体颜色\n      this.color = '#FFD700';\n      this.text = 'Landscape';\n      this.dir = FlexDirection.Row;\n      this.textHeight = \"100%\"\n      this.textWidth = \"33%\"\n    } else {\n      this.color = '#DB7093';\n      this.text = 'Portrait';\n      this.dir = FlexDirection.Column;\n      this.textHeight = \"33%\"\n      this.textWidth = \"100%\"\n    }\n  }\n\n  aboutToAppear() {\n    // 绑定当前应用实例\n    // 绑定回调函数\n    this.listener.on('change', (mediaQueryResult: mediaquery.MediaQueryResult) => {\n      this.onPortrait(mediaQueryResult)\n    });\n  }\n\n  aboutToDisappear() {\n    // 解绑listener中注册的回调函数\n    this.listener.off('change');\n  }\n\n  // 改变设备横竖屏状态函数\n  private changeOrientation(isLandscape: boolean) {\n    // 获取UIAbility实例的上下文信息\n    let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n    // 调用该接口手动改变设备横竖屏状态\n    window.getLastWindow(context).then((lastWindow) => {\n      lastWindow.setPreferredOrientation(isLandscape ? window.Orientation.LANDSCAPE : window.Orientation.PORTRAIT)\n    });\n  }\n\n  build() {\n    Column({ space: 30 }) {\n      Text(this.text).fontSize(24).fontColor(this.color)\n      Text('Landscape').fontSize(50).fontColor(this.color).backgroundColor(Color.Orange)\n        .onClick(() => {\n          this.changeOrientation(true);\n        })\n      Text('Portrait').fontSize(50).fontColor(this.color).backgroundColor(Color.Orange)\n        .onClick(() => {\n          this.changeOrientation(false);\n        })\n      Flex({ direction: this.dir, space: { main: LengthMetrics.vp(10), cross: LengthMetrics.vp(5) } }) {\n        Text('1')\n          .height(this.textHeight)\n          .width(this.textWidth)\n          .textAlign(TextAlign.Center)\n          .backgroundColor('rgb(0, 74, 175)')\n        Text('2')\n          .height(this.textHeight)\n          .width(this.textWidth)\n          .textAlign(TextAlign.Center)\n          .backgroundColor('rgb(39, 135, 217)')\n        Text('3')\n          .height(this.textHeight)\n          .width(this.textWidth)\n          .textAlign(TextAlign.Center)\n          .backgroundColor('rgb(240, 250, 255)')\n      }.layoutWeight(1)\n      .width(\"100%\")\n    }\n    .width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " 竖屏"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(18123)/* ["default"] */.A) + "",
        width: "332",
        height: "705"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图4"
        })
      }), " 横屏"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(948916)/* ["default"] */.A) + "",
        width: "722",
        height: "320"
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
18123(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958058-1e45c65a2b8f37df2eaea9d6cbafac56.png");

},
339048(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
862399(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438103-ce568cc2d42f1ad7488cf0bfa92c103c.jpg");

},
676622(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798408-309041e7a164dcd86cd676a098b400a6.jpg");

},
948916(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478059-9aaf232456bde723f042a2788fa72ba5.png");

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