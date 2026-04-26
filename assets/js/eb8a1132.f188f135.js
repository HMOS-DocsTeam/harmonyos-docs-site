"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["354927"], {
243720(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_buttons_and_selections_ts_basic_components_slider_ts_basic_components_slider_md_eb8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-buttons-and-selections-ts-basic-components-slider-ts-basic-components-slider-md-eb8.json
var site_docs_ref_arkui_api_arkui_declarative_comp_buttons_and_selections_ts_basic_components_slider_ts_basic_components_slider_md_eb8_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-slider/ts-basic-components-slider","title":"Slider","description":"滑动条组件，通常用于快速调节设置值，如音量调节、亮度调节等应用场景。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-slider/ts-basic-components-slider.md","sourceDirName":"arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-slider","slug":"/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-slider/ts-basic-components-slider","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-slider/ts-basic-components-slider","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"Slider","sidebar_position":13,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-slider","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-basic-components-slider"},"sidebar":"ref","previous":{"title":"Select","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-select/ts-basic-components-select"},"next":{"title":"ArcButton","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ohos-arkui-advanced-arcbutton/ohos-arkui-advanced-arcbutton"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-slider/ts-basic-components-slider.md


const frontMatter = {
	title: 'Slider',
	sidebar_position: 13,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-slider',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-basic-components-slider'
};
const contentTitle = 'Slider';

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
  "value": "SliderOptions对象说明",
  "id": "slideroptions对象说明",
  "level": 2
}, {
  "value": "SliderStyle枚举说明",
  "id": "sliderstyle枚举说明",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "blockColor",
  "id": "blockcolor",
  "level": 3
}, {
  "value": "blockColor21+",
  "id": "blockcolor21",
  "level": 3
}, {
  "value": "trackColor",
  "id": "trackcolor",
  "level": 3
}, {
  "value": "trackColorMetrics23+",
  "id": "trackcolormetrics23",
  "level": 3
}, {
  "value": "selectedColor",
  "id": "selectedcolor",
  "level": 3
}, {
  "value": "selectedColor18+",
  "id": "selectedcolor18",
  "level": 3
}, {
  "value": "showSteps",
  "id": "showsteps",
  "level": 3
}, {
  "value": "showTips",
  "id": "showtips",
  "level": 3
}, {
  "value": "trackThickness8+",
  "id": "trackthickness8",
  "level": 3
}, {
  "value": "blockBorderColor10+",
  "id": "blockbordercolor10",
  "level": 3
}, {
  "value": "blockBorderWidth10+",
  "id": "blockborderwidth10",
  "level": 3
}, {
  "value": "stepColor10+",
  "id": "stepcolor10",
  "level": 3
}, {
  "value": "trackBorderRadius10+",
  "id": "trackborderradius10",
  "level": 3
}, {
  "value": "selectedBorderRadius12+",
  "id": "selectedborderradius12",
  "level": 3
}, {
  "value": "blockSize10+",
  "id": "blocksize10",
  "level": 3
}, {
  "value": "blockStyle10+",
  "id": "blockstyle10",
  "level": 3
}, {
  "value": "stepSize10+",
  "id": "stepsize10",
  "level": 3
}, {
  "value": "sliderInteractionMode12+",
  "id": "sliderinteractionmode12",
  "level": 3
}, {
  "value": "minResponsiveDistance12+",
  "id": "minresponsivedistance12",
  "level": 3
}, {
  "value": "contentModifier12+",
  "id": "contentmodifier12",
  "level": 3
}, {
  "value": "slideRange12+",
  "id": "sliderange12",
  "level": 3
}, {
  "value": "enableHapticFeedback18+",
  "id": "enablehapticfeedback18",
  "level": 3
}, {
  "value": "digitalCrownSensitivity18+",
  "id": "digitalcrownsensitivity18",
  "level": 3
}, {
  "value": "prefix20+",
  "id": "prefix20",
  "level": 3
}, {
  "value": "suffix20+",
  "id": "suffix20",
  "level": 3
}, {
  "value": "showSteps20+",
  "id": "showsteps20",
  "level": 3
}, {
  "value": "minLabel(deprecated)",
  "id": "minlabeldeprecated",
  "level": 3
}, {
  "value": "maxLabel(deprecated)",
  "id": "maxlabeldeprecated",
  "level": 3
}, {
  "value": "ColorMetricsLinearGradient23+",
  "id": "colormetricslineargradient23",
  "level": 2
}, {
  "value": "constructor23+",
  "id": "constructor23",
  "level": 3
}, {
  "value": "ColorMetricsStop23+",
  "id": "colormetricsstop23",
  "level": 2
}, {
  "value": "SliderCustomContentOptions20+",
  "id": "slidercustomcontentoptions20",
  "level": 2
}, {
  "value": "SliderPrefixOptions20+",
  "id": "sliderprefixoptions20",
  "level": 2
}, {
  "value": "SliderSuffixOptions20+",
  "id": "slidersuffixoptions20",
  "level": 2
}, {
  "value": "SliderStepItemAccessibility20+",
  "id": "sliderstepitemaccessibility20",
  "level": 2
}, {
  "value": "SliderShowStepOptions20+",
  "id": "slidershowstepoptions20",
  "level": 2
}, {
  "value": "SliderBlockStyle10+对象说明",
  "id": "sliderblockstyle10对象说明",
  "level": 2
}, {
  "value": "SliderBlockType10+枚举说明",
  "id": "sliderblocktype10枚举说明",
  "level": 2
}, {
  "value": "SliderInteraction12+枚举说明",
  "id": "sliderinteraction12枚举说明",
  "level": 2
}, {
  "value": "SlideRange12+对象说明",
  "id": "sliderange12对象说明",
  "level": 2
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "onChange",
  "id": "onchange",
  "level": 3
}, {
  "value": "SliderChangeMode枚举说明",
  "id": "sliderchangemode枚举说明",
  "level": 2
}, {
  "value": "SliderConfiguration12+对象说明",
  "id": "sliderconfiguration12对象说明",
  "level": 2
}, {
  "value": "SliderTriggerChangeCallback12+",
  "id": "slidertriggerchangecallback12",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（滑动条基础样式）",
  "id": "示例1滑动条基础样式",
  "level": 3
}, {
  "value": "示例2（设置滑动条样式）",
  "id": "示例2设置滑动条样式",
  "level": 3
}, {
  "value": "示例3（自定义滑动条）",
  "id": "示例3自定义滑动条",
  "level": 3
}, {
  "value": "示例4（设置滑动条渐变色）",
  "id": "示例4设置滑动条渐变色",
  "level": 3
}, {
  "value": "示例5（滑动条设置前后缀内容）",
  "id": "示例5滑动条设置前后缀内容",
  "level": 3
}, {
  "value": "示例6（滑动条设置刻度点无障碍文本）",
  "id": "示例6滑动条设置刻度点无障碍文本",
  "level": 3
}, {
  "value": "示例7（设置滑动条的双向绑定）",
  "id": "示例7设置滑动条的双向绑定",
  "level": 3
}, {
  "value": "示例8（滑块设置渐变色）",
  "id": "示例8滑块设置渐变色",
  "level": 3
}, {
  "value": "示例9（设置滑轨的背景颜色）",
  "id": "示例9设置滑轨的背景颜色",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    crownsensitivity: "crownsensitivity",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    sliderconfiguration: "sliderconfiguration",
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
        id: "slider",
        children: "Slider"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "滑动条组件，通常用于快速调节设置值，如音量调节、亮度调节等应用场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(739340)/* ["default"] */.A) + "",
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
      children: "Slider(options?: SliderOptions)"
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
              href: "#slideroptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "SliderOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置滑动条的参数。若不传入，则使用SliderOptions中各属性的默认值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "slideroptions对象说明",
      children: "SliderOptions对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "滑动条的信息。"
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前进度值。  默认值：与属性min的取值一致。  从API version 10开始，该属性支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-two-way-sync",
              children: "$$"
            }), "双向绑定变量。  该属性支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-new-binding#%E7%B3%BB%E7%BB%9F%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A",
              children: "!!"
            }), "双向绑定变量。  取值范围： [min, max]  小于min时取min，大于max时取max。  $$运算符为系统组件提供TS变量的引用，使得TS变量和slider组件的value值保持同步。详细使用示例请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%A4%BA%E4%BE%8B7%E8%AE%BE%E7%BD%AE%E6%BB%91%E5%8A%A8%E6%9D%A1%E7%9A%84%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A",
              children: "示例7设置滑动条的双向绑定"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置最小值。  默认值：0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置最大值。  默认值：100  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  min >= max异常情况，min取默认值0，max取默认值100。  value不在[min, max]范围之内，取min或者max，靠近min取min，靠近max取max。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "step"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置Slider滑动步长。  默认值：1  取值范围：[0.01, max - min]  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  若设置的step值小于0或大于max值，则按默认值显示。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "style"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#sliderstyle%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "SliderStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置Slider的滑块与滑轨显示样式。  默认值：SliderStyle.OutSet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "direction8+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#axis",
              children: "Axis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置滑动条滑动方向为水平或竖直方向。  默认值：Axis.Horizontal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reverse8+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置滑动条取值范围是否反向。  true：横向Slider从右往左滑动，竖向Slider从下往上滑动；false：横向Slider从左往右滑动，竖向Slider从上往下滑动。  默认值：false"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sliderstyle枚举说明",
      children: "SliderStyle枚举说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["滑动条滑块在滑轨上显示的样式，具体样式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/ui-debug-optimize/ui-development-faq/arkts-select-component-faq#slider%E7%BB%84%E4%BB%B6%E6%BB%91%E5%9D%97%E4%B8%8E%E6%BB%91%E8%BD%A8%E6%98%AF%E5%A6%82%E4%BD%95%E5%AF%B9%E9%BD%90%E7%9A%84",
        children: "Slider组件滑块与滑轨是如何对齐的"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OutSet"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["滑块在滑轨上。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "InSet"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["滑块在滑轨内。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NONE12+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["无滑块  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 12开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(147783)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Slider无默认padding。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当Slider为水平滑动条时，默认高度为40vp，宽度为父容器的宽度，滑动条居中显示，当滑动条的style为SliderStyle.OutSet时，左右间距分别为9vp，即为", (0,jsx_runtime.jsx)(_components.a, {
          href: "#blocksize10",
          children: "blockSize"
        }), "宽度的一半，当滑动条的style为SliderStyle.InSet时，左右间距分别为6vp，若设置padding，padding不会覆盖左右间距。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当Slider为竖直滑动条时，默认宽度为40vp，高度为父容器的高度，滑动条居中显示，当滑动条的style为SliderStyle.OutSet时，上下间距分别为10vp，当滑动条的style为SliderStyle.InSet时，上下间距分别为6vp，若设置padding，padding不会覆盖上下间距。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持除触摸热区以外的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "通用属性"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "blockcolor",
      children: "blockColor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "blockColor(value: ResourceColor)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置滑块的颜色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当滑块形状设置为SliderBlockType.DEFAULT时，blockColor可设置默认圆形滑块颜色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当滑块形状设置为SliderBlockType.IMAGE时，滑块无填充，设置blockColor不生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当滑块形状设置为SliderBlockType.SHAPE时，blockColor可设置自定义形状的填充颜色。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑块的颜色。  默认值：$r('sys.color.ohos_id_color_foreground_contrary')"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "blockcolor21",
      children: "blockColor21+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "blockColor(value: ResourceColor | LinearGradient)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置Slider滑块的颜色，支持渐变色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当滑块形状设置为SliderBlockType.DEFAULT时，blockColor可设置默认圆形滑块颜色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当滑块形状设置为SliderBlockType.IMAGE时，滑块无填充，设置blockColor不生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当滑块形状设置为SliderBlockType.SHAPE时，blockColor可设置自定义形状的填充颜色。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 21开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 21开始，该接口支持在元服务中使用。"]
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
      id: "trackcolor",
      children: "trackColor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "trackColor(value: ResourceColor | LinearGradient)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置滑轨的背景颜色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始支持利用LinearGradient设置滑轨的渐变色。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-datapanel/ts-basic-components-datapanel#lineargradient10",
              children: "LinearGradient12+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trackcolormetrics23",
      children: "trackColorMetrics23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "trackColorMetrics(color: ColorMetricsLinearGradient)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置滑轨轨道的线性渐变背景颜色。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
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
            children: "color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#colormetricslineargradient23",
              children: "ColorMetricsLinearGradient"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑轨轨道的线性渐变背景颜色。  设置渐变色时，如果color的值为undefined，渐变色设置无效，轨道背景颜色默认取值为：$r('sys.color.ohos_id_color_component_normal')。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "selectedcolor",
      children: "selectedColor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "selectedColor(value: ResourceColor)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置滑轨的已滑动部分颜色。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑轨的已滑动部分颜色。  默认值：$r('sys.color.ohos_id_color_emphasize')"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "selectedcolor18",
      children: "selectedColor18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "selectedColor(selectedColor: ResourceColor | LinearGradient)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置滑轨的已滑动部分颜色。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#selectedcolor",
        children: "selectedColor"
      }), "相比，新增了LinearGradient类型的支持。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 18开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
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
            children: "selectedColor"
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
      id: "showsteps",
      children: "showSteps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "showSteps(value: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前是否显示步长刻度值。"
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前是否显示步长刻度值。  true：显示刻度值；false：不显示刻度值。  默认值：false"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "showtips",
      children: "showTips"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "showTips(value: boolean, content?: ResourceStr)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置滑动时是否显示气泡提示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当direction的值为Axis.Horizontal时，tip显示在滑块上方，如果上方空间不够，则在下方显示。当值为Axis.Vertical时，tip显示在滑块左边，如果左边空间不够，则在右边显示。当不设置周边边距或者周边边距比较小时，tip会被截断。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tip的绘制区域为Slider自身节点的overlay。"
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑动时是否显示气泡提示。  true：显示气泡；false：不显示气泡。  默认值：false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "content10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "气泡提示的文本内容，默认显示当前百分比。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trackthickness8",
      children: "trackThickness8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "trackThickness(value: Length)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置滑轨的粗细。设置小于等于0的值时，取默认值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为保证滑块和滑轨的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sliderstyle%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "SliderStyle"
      }), "样式，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#blocksize10",
        children: "blockSize"
      }), "跟随trackThickness同比例增减。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当style为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sliderstyle%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "SliderStyle"
      }), ".OutSet时，trackThickness ：", (0,jsx_runtime.jsx)(_components.a, {
        href: "#blocksize10",
        children: "blockSize"
      }), " = 1 ：4，当style为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sliderstyle%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "SliderStyle"
      }), ".InSet时，trackThickness ：", (0,jsx_runtime.jsx)(_components.a, {
        href: "#blocksize10",
        children: "blockSize"
      }), " = 5 ：3。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["trackThickness或", (0,jsx_runtime.jsx)(_components.a, {
        href: "#blocksize10",
        children: "blockSize"
      }), "的大小超过Slider组件的宽度或高度时，取默认值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sliderstyle%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "SliderStyle"
      }), "设置为OutSet时，尽管trackThickness的大小没超过Slider组件的宽度或高度，但是", (0,jsx_runtime.jsx)(_components.a, {
        href: "#blocksize10",
        children: "blockSize"
      }), "超过了，取默认值。"]
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["滑轨的粗细。  默认值：当参数style的值设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "#sliderstyle%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "SliderStyle"
            }), ".OutSet 时为 4.0vp，", (0,jsx_runtime.jsx)(_components.a, {
              href: "#sliderstyle%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "SliderStyle"
            }), ".InSet时为20.0vp。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "blockbordercolor10",
      children: "blockBorderColor10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "blockBorderColor(value: ResourceColor)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置滑块描边颜色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当滑块形状设置为SliderBlockType.DEFAULT时，blockBorderColor可设置默认圆形滑块描边颜色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当滑块形状设置为SliderBlockType.IMAGE时，滑块无描边，设置blockBorderColor不生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当滑块形状设置为SliderBlockType.SHAPE时，blockBorderColor可设置自定义形状中线的颜色。"
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
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑块描边颜色。  默认值：'#00000000'"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "blockborderwidth10",
      children: "blockBorderWidth10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "blockBorderWidth(value: Length)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置滑块描边粗细。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当滑块形状设置为SliderBlockType.DEFAULT时，blockBorderWidth可设置默认圆形滑块描边粗细。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当滑块形状设置为SliderBlockType.IMAGE时，滑块无描边，设置blockBorderWidth不生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当滑块形状设置为SliderBlockType.SHAPE时，blockBorderWidth可设置自定义形状中线的粗细。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["滑块描边粗细。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  设置string类型时，不支持百分比。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stepcolor10",
      children: "stepColor10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stepColor(value: ResourceColor)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置刻度颜色。"
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
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "刻度颜色。  默认值：  $r('sys.color.ohos_id_color_foreground')混合  $r('sys.color.ohos_id_alpha_normal_bg')透明度的颜色"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trackborderradius10",
      children: "trackBorderRadius10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "trackBorderRadius(value: Length)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置底板圆角半径。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["底板圆角半径。  默认值：  style值为SliderStyle.OutSet时默认值为'2vp'。  style值为SliderStyle.InSet时默认值为'10vp'。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  设定值小于0时取默认值。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "selectedborderradius12",
      children: "selectedBorderRadius12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "selectedBorderRadius(value: Dimension)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置已滑动部分（高亮）圆角半径。"
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已选择部分的圆角半径。  默认值：当style值为SliderStyle.InSet或SliderStyle.OutSet时，跟随底板圆角；当style值为SliderStyle.NONE时，为0。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  不支持Percentage类型。设定值小于0时取默认值。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "blocksize10",
      children: "blockSize10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "blockSize(value: SizeOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置滑块大小。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当滑块形状设置为SliderBlockType.DEFAULT时，取宽高的最小值作为圆形半径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当滑块形状设置为SliderBlockType.IMAGE时，用于设置图片的尺寸大小，图片采用ObjectFit.Cover策略进行缩放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当滑块形状设置为SliderBlockType.SHAPE时，用于设置自定义形状的大小，自定义形状也会采用ObjectFit.Cover策略进行缩放。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#sizeoptions",
              children: "SizeOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["滑块大小。  默认值：当参数style的值设置为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#sliderstyle%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "SliderStyle"
            }), ".OutSet时为{width: 18, height: 18}，当参数style的值设置为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#sliderstyle%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "SliderStyle"
            }), ".InSet时为{width: 12, height: 12}，当参数style的值设置为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#sliderstyle%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "SliderStyle"
            }), ".NONE时为，此字段不生效。  当设置的blockSize的宽高值不相等时，取较小值的尺寸，当设置的宽高值中有一个或两个都小于等于0的时候，取默认值。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "blockstyle10",
      children: "blockStyle10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "blockStyle(value: SliderBlockStyle)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置滑块形状参数。"
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
              href: "#sliderblockstyle10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "SliderBlockStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑块形状参数。  默认值：SliderBlockType.DEFAULT，滑块形状为圆形。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stepsize10",
      children: "stepSize10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stepSize(value: Length)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置刻度大小（直径）。当值为0时，刻度点不显示，当值小于0时，取默认值。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["刻度大小（直径）。  默认值：'4vp'  取值范围：[0, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#trackthickness8",
              children: "trackThickness"
            }), ")"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sliderinteractionmode12",
      children: "sliderInteractionMode12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "sliderInteractionMode(value: SliderInteraction)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置用户与滑动条组件交互方式。"
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#sliderinteraction12%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "SliderInteraction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户与滑动条组件交互方式。  默认值：SliderInteraction.SLIDE_AND_CLICK。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "minresponsivedistance12",
      children: "minResponsiveDistance12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "minResponsiveDistance(value: number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置滑动响应的最小距离。"
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置滑动响应的最小距离，滑动超过此距离后滑块才开始滑动。  默认值：0  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  单位与", (0,jsx_runtime.jsx)(_components.a, {
              href: "#slideroptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "SliderOptions"
            }), "中的属性min以及属性max一致。  当value小于0、大于max-min或非法值时，取默认值。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "contentmodifier12",
      children: "contentModifier12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "contentModifier(modifier: ContentModifier<SliderConfiguration>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定制Slider内容区的方法。"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-content-modifier/ts-universal-attributes-content-modifier",
              children: "ContentModifier"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "#sliderconfiguration12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: (0,jsx_runtime.jsx)(_components.sliderconfiguration, {})
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在Slider组件上，定制内容区的方法。  ContentModifier：内容修改器，开发者需要自定义class实现ContentModifier接口。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(433731)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置了contentModifier后，自定义区域内点击和手势滑动均不会触发原Slider组件的onChange事件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅当调用triggerChange函数且传递正确的参数值时，才可以触发原Slider组件的onChange事件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sliderange12",
      children: "slideRange12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "slideRange(value: SlideRange)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置有效滑动区间。"
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#sliderange12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "SlideRange"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置有效滑动区间"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enablehapticfeedback18",
      children: "enableHapticFeedback18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enableHapticFeedback(enabled: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否开启触控反馈。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开启触控反馈时，需要在工程的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json5"
      }), "中配置requestPermissions字段开启振动权限，配置如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"requestPermissions\": [\n  {\n    \"name\": \"ohos.permission.VIBRATE\"\n  }\n ]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
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
            children: "enabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否开启触控反馈。  true：开启触控反馈；false：不开启触控反馈。  默认值：true"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "digitalcrownsensitivity18",
      children: "digitalCrownSensitivity18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置旋转表冠的灵敏度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(314560)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该接口不支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
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
            children: "sensitivity"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#crownsensitivity18",
              children: (0,jsx_runtime.jsx)(_components.crownsensitivity, {})
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旋转表冠的灵敏度。  默认值：CrownSensitivity.MEDIUM"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prefix20",
      children: "prefix20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "prefix(content: ComponentContent, options?: SliderPrefixOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置滑动条的前缀。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent",
              children: "ComponentContent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义组件内容，用于定义滑块前缀的可视化内容，该内容会显示在滑块的起始位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#sliderprefixoptions20",
              children: "SliderPrefixOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑块前缀的配置选项，用于设置与无障碍功能相关的属性。  默认值：null"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "suffix20",
      children: "suffix20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "suffix(content: ComponentContent, options?: SliderSuffixOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置滑动条的后缀。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent",
              children: "ComponentContent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义组件内容，用于定义滑块后缀的可视化内容，该内容会显示在滑块的结束位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#slidersuffixoptions20",
              children: "SliderSuffixOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑块后缀的配置选项，用于设置与无障碍功能相关的属性。  默认值：null"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "showsteps20",
      children: "showSteps20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "showSteps(value: boolean, options?: SliderShowStepOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前是否显示步长刻度值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持设置每个刻度点的无障碍文本信息，不设置时默认使用当前刻度点的值作为无障碍文本信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当显示步长时，设置的刻度点无障碍文本信息生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 20开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前是否显示步长刻度值。  true：显示刻度值；false：不显示刻度值。  默认值：false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#slidershowstepoptions20",
              children: "SliderShowStepOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "刻度点无障碍文本的配置选项，用于设置与无障碍功能相关的属性。  默认值：null"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "minlabeldeprecated",
      children: "minLabel(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "minLabel(value: string)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置最小值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(577572)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 7开始支持，从API version 9开始废弃，建议使用min替代。min是", (0,jsx_runtime.jsx)(_components.a, {
        href: "#slideroptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "SliderOptions"
      }), "中的属性。"]
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最小值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "maxlabeldeprecated",
      children: "maxLabel(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "maxLabel(value: string)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置最大值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(768355)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 7开始支持，从API version 9开始废弃，建议使用max替代。max是", (0,jsx_runtime.jsx)(_components.a, {
        href: "#slideroptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "SliderOptions"
      }), "中的属性。"]
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最大值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "colormetricslineargradient23",
      children: "ColorMetricsLinearGradient23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "滑轨轨道的线性渐变背景颜色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor23",
      children: "constructor23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(colorStops: ColorMetricsStop[])"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ColorMetricsLinearGradient的构造函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
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
            children: "colorStops"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#colormetricsstop23",
              children: "ColorMetricsStop"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线性渐变颜色断点数组。每个元素用于描述一个颜色及其在渐变中的断点值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "colormetricsstop23",
      children: "ColorMetricsStop23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "线性渐变颜色断点类型，用于描述渐进色颜色断点。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
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
            children: "color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线性渐变颜色断点的颜色值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["线性渐变颜色断点的断点值，取值为0~1之间的比例值，如果数据值小于0则置为0，如果数据值大于1则置为1。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  如果传入字符串类型且内容为数字，则转换为对应的数值。例如'10vp'转换为10，'10%'转换为0.1。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "slidercustomcontentoptions20",
      children: "SliderCustomContentOptions20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Slider前后缀组件无障碍信息参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "accessibilityText"
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
            children: "用于提供辅助功能的文本，供屏幕阅读器等工具读取，增强无障碍功能。  默认值：\"\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accessibilityDescription"
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
            children: "用于提供辅助功能的详细描述，描述滑块前缀或后缀的功能或用途，供屏幕阅读器等工具使用。  默认值为“单指双击即可执行”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accessibilityLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于控制某个组件是否可被无障碍辅助服务所识别。  支持的值为:  \"auto\"：当前组件会转换为“yes”。  \"yes\"：当前组件可被无障碍辅助服务所识别。  \"no\"：当前组件不可被无障碍辅助服务所识别。  \"no-hide-descendants\"：当前组件及其所有子组件不可被无障碍辅助服务所识别。  默认值：\"auto\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accessibilityGroup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于标识该元素是否属于一个无障碍的组，帮助屏幕阅读器等工具将相关元素进行分组处理。  true：该组件及其所有子组件为一整个可以选中的组件，无障碍服务将不再关注其子组件内容；false：不启用无障碍分组。  默认值：false"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sliderprefixoptions20",
      children: "SliderPrefixOptions20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Slider前缀组件无障碍信息参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["提供前缀组件的无障碍信息，继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#slidercustomcontentoptions20",
        children: "SliderCustomContentOptions"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "slidersuffixoptions20",
      children: "SliderSuffixOptions20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Slider后缀组件无障碍信息参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["提供后缀组件的无障碍信息，继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#slidercustomcontentoptions20",
        children: "SliderCustomContentOptions"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sliderstepitemaccessibility20",
      children: "SliderStepItemAccessibility20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Slider刻度点的无障碍文本信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "text"
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
            children: "用于提供辅助功能的文本，供屏幕阅读器等工具读取，增强无障碍功能。  默认值：\"\""
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "slidershowstepoptions20",
      children: "SliderShowStepOptions20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Slider刻度点的无障碍文本信息映射集。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "stepsAccessibility"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Map<number, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#sliderstepitemaccessibility20",
              children: "SliderStepItemAccessibility"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于设置刻度点提供辅助功能文本，供屏幕阅读器等工具读取，增强无障碍功能。  Key取值范围：[0, INT32_MAX]，当Key设定为负数和小数时，设定项不生效。  默认值：{}"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sliderblockstyle10对象说明",
      children: "SliderBlockStyle10+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Slider组件滑块形状参数。"
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#sliderblocktype10%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "SliderBlockType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置滑块形状。  默认值：SliderBlockType.DEFAULT，使用圆形滑块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "image"
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
            children: "设置滑块图片资源。  图片显示区域大小由blockSize属性控制，请勿输入尺寸过大的图片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shape"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-circle/ts-drawing-components-circle",
              children: "Circle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-ellipse/ts-drawing-components-ellipse",
              children: "Ellipse"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-path/ts-drawing-components-path",
              children: "Path"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-rect/ts-drawing-components-rect",
              children: "Rect"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sliderblocktype10枚举说明",
      children: "SliderBlockType10+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Slider组件滑块形状枚举。"
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
            children: "DEFAULT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用默认滑块（圆形）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用图片资源作为滑块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHAPE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用自定义形状作为滑块。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sliderinteraction12枚举说明",
      children: "SliderInteraction12+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户与滑动条组件交互方式。"
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
            children: "SLIDE_AND_CLICK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户可拖拽滑块或者点击滑轨使滑块移动，鼠标或手指按下即发生移动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLIDE_ONLY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "禁止用户通过点击滑轨使滑块移动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLIDE_AND_CLICK_UP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户可拖拽滑块或者点击滑轨使滑块移动，当鼠标或手指抬起时，若与屏幕按压位置一致，则触发移动。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sliderange12对象说明",
      children: "SlideRange12+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义SlideRange中使用的回调类型。"
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
            children: "from"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置有效滑动区间的开始。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "to"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置有效滑动区间的结束。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(158355)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前仅当min<=from<=to<=max时该接口生效(min和max不依赖于其设置的值，而取决于其实际生效的值)。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可只设置from或者to，也可以同时设置from和to。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当接口生效且设置的from处于紧邻的step整数倍的值之间，则from实际取左区间step整数倍的那个值或者min作为修正后的值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当接口生效且设置的to处于紧邻的step整数倍的值之间，则to实际取右区间step整数倍的那个值或者MAX作为修正后的值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在from和to取修正值后， 当value是undefined或null时，其取值与from一致; 当value是数值型且value <= from，则取from; 当value > to，则取to。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
        children: "通用事件"
      }), "外，还支持以下事件："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onchange",
      children: "onChange"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onChange(callback: (value: number, mode: SliderChangeMode) => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Slider拖动或点击时触发事件回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Begin和End状态当手势点击时都会触发，Moving和Click状态当value值发生变化时触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当连贯动作为拖动动作时，不触发Click状态。"
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前滑动进度值，变化范围为对应步长steps数组。若返回值有小数，可使用number.toFixed()方法将数据处理为预期的精度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#sliderchangemode%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "SliderChangeMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件触发的相关状态值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sliderchangemode枚举说明",
      children: "SliderChangeMode枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "滑块的状态值。包括按下、拖动、离开以及点击滑动条使滑块位置时。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Begin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手势/鼠标接触或者按下滑块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Moving"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "正在拖动滑块过程中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "End"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["手势/鼠标离开滑块。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  异常值恢复成默认值时触发，即value设置小于min或大于max。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Click8+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "点击滑动条使滑块位置移动。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sliderconfiguration12对象说明",
      children: "SliderConfiguration12+对象说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者需要自定义class实现ContentModifier接口。继承自", (0,jsx_runtime.jsx)(_components.a, {
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "当前进度值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最小值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最大值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "step"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slider滑动步长。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "triggerChange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#slidertriggerchangecallback12",
              children: "SliderTriggerChangeCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发Slider变化。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "slidertriggerchangecallback12",
      children: "SliderTriggerChangeCallback12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type SliderTriggerChangeCallback = (value: number, mode: SliderChangeMode) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义SliderConfiguration中使用的回调类型。"
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置当前的进度值。  取值范围：[", (0,jsx_runtime.jsx)(_components.a, {
              href: "#slideroptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "min"
            }), "-", (0,jsx_runtime.jsx)(_components.a, {
              href: "#slideroptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "max"
            }), "]"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#sliderchangemode%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "SliderChangeMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置事件触发的相关状态值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1滑动条基础样式",
      children: "示例1（滑动条基础样式）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过配置style、showTips、showSteps控制气泡、刻度值、滑块和滑轨的显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct SliderExample {\n  @State outSetValueOne: number = 40;\n  @State inSetValueOne: number = 40;\n  @State noneValueOne: number = 40;\n  @State outSetValueTwo: number = 40;\n  @State inSetValueTwo: number = 40;\n  @State vOutSetValueOne: number = 40;\n  @State vInSetValueOne: number = 40;\n  @State vOutSetValueTwo: number = 40;\n  @State vInSetValueTwo: number = 40;\n\n  build() {\n    Column({ space: 8 }) {\n      Text('outset slider').fontSize(9).fontColor(0xCCCCCC).width('90%').margin(15)\n      Row() {\n        Slider({\n          value: this.outSetValueOne,\n          min: 0,\n          max: 100,\n          style: SliderStyle.OutSet\n        })\n          .showTips(true)\n          .onChange((value: number, mode: SliderChangeMode) => {\n            this.outSetValueOne = value;\n            console.info('value:' + value + 'mode:' + mode.toString());\n          })\n        // toFixed(0)将滑动条返回值处理为整数精度\n        Text(this.outSetValueOne.toFixed(0)).fontSize(12)\n      }\n      .width('80%')\n      Row() {\n        Slider({\n          value: this.outSetValueTwo,\n          step: 10,\n          style: SliderStyle.OutSet\n        })\n          .showSteps(true)\n          .onChange((value: number, mode: SliderChangeMode) => {\n            this.outSetValueTwo = value;\n            console.info('value:' + value + 'mode:' + mode.toString());\n          })\n        Text(this.outSetValueTwo.toFixed(0)).fontSize(12)\n      }\n      .width('80%')\n\n      Text('inset slider').fontSize(9).fontColor(0xCCCCCC).width('90%').margin(15)\n      Row() {\n        Slider({\n          value: this.inSetValueOne,\n          min: 0,\n          max: 100,\n          style: SliderStyle.InSet\n        })\n          .blockColor('#191970')\n          .trackColor('#ADD8E6')\n          .selectedColor('#4169E1')\n          .showTips(true)\n          .onChange((value: number, mode: SliderChangeMode) => {\n            this.inSetValueOne = value;\n            console.info('value:' + value + 'mode:' + mode.toString());\n          })\n        Text(this.inSetValueOne.toFixed(0)).fontSize(12)\n      }\n      .width('80%')\n      Row() {\n        Slider({\n          value: this.inSetValueTwo,\n          step: 10,\n          style: SliderStyle.InSet\n        })\n          .blockColor('#191970')\n          .trackColor('#ADD8E6')\n          .selectedColor('#4169E1')\n          .showSteps(true)\n          .onChange((value: number, mode: SliderChangeMode) => {\n            this.inSetValueTwo = value;\n            console.info('value:' + value + 'mode:' + mode.toString());\n          })\n        Text(this.inSetValueTwo.toFixed(0)).fontSize(12)\n      }\n      .width('80%')\n\n      Text('none slider').fontSize(9).fontColor(0xCCCCCC).width('90%').margin(15)\n      Row() {\n        Slider({\n          value: this.noneValueOne,\n          min: 0,\n          max: 100,\n          style: SliderStyle.NONE\n        })\n          .blockColor('#191970')\n          .trackColor('#ADD8E6')\n          .selectedColor('#4169E1')\n          .showTips(true)\n          .onChange((value: number, mode: SliderChangeMode) => {\n            this.noneValueOne = value;\n            console.info('value:' + value + 'mode:' + mode.toString());\n          })\n        Text(this.noneValueOne.toFixed(0)).fontSize(12)\n      }\n      .width('80%')\n\n      Row() {\n        Column() {\n          Text('vertical outset slider').fontSize(9).fontColor(0xCCCCCC).width('50%').margin(15)\n          Row() {\n            Text().width('10%')\n            Slider({\n              value: this.vOutSetValueOne,\n              style: SliderStyle.OutSet,\n              direction: Axis.Vertical\n            })\n              .blockColor('#191970')\n              .trackColor('#ADD8E6')\n              .selectedColor('#4169E1')\n              .showTips(true)\n              .onChange((value: number, mode: SliderChangeMode) => {\n                this.vOutSetValueOne = value;\n                console.info('value:' + value + 'mode:' + mode.toString());\n              })\n            Slider({\n              value: this.vOutSetValueTwo,\n              step: 10,\n              style: SliderStyle.OutSet,\n              direction: Axis.Vertical\n            })\n              .blockColor('#191970')\n              .trackColor('#ADD8E6')\n              .selectedColor('#4169E1')\n              .showSteps(true)\n              .onChange((value: number, mode: SliderChangeMode) => {\n                this.vOutSetValueTwo = value;\n                console.info('value:' + value + 'mode:' + mode.toString());\n              })\n          }\n        }.width('50%').height(300)\n\n        Column() {\n          Text('vertical inset slider').fontSize(9).fontColor(0xCCCCCC).width('50%').margin(15)\n          Row() {\n            Slider({\n              value: this.vInSetValueOne,\n              style: SliderStyle.InSet,\n              direction: Axis.Vertical,\n              reverse: true // 竖向的Slider默认是上端是min值，下端是max值，因此想要从下往上滑动，需要设置reverse为true\n            })\n              .showTips(true)\n              .onChange((value: number, mode: SliderChangeMode) => {\n                this.vInSetValueOne = value;\n                console.info('value:' + value + 'mode:' + mode.toString());\n              })\n            Slider({\n              value: this.vInSetValueTwo,\n              step: 10,\n              style: SliderStyle.InSet,\n              direction: Axis.Vertical,\n              reverse: true\n            })\n              .showSteps(true)\n              .onChange((value: number, mode: SliderChangeMode) => {\n                this.vInSetValueTwo = value;\n                console.info('value:' + value + 'mode:' + mode.toString());\n              })\n          }\n        }.width('50%').height(300)\n      }\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(892864)/* ["default"] */.A) + "",
        width: "454",
        height: "877"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2设置滑动条样式",
      children: "示例2（设置滑动条样式）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过blockBorderColor、blockSize、blockBorderWidth、blockStyle设置滑块的样式，通过stepSize、stepColor设置刻度值的样式，通过trackBorderRadius设置底板的圆角，通过selectedBorderRadius设置已滑动部分的圆角。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct SliderExample {\n  @State tipsValue: number = 40;\n\n  build() {\n    Column({ space: 8 }) {\n      Text('block').fontSize(9).fontColor(0xCCCCCC).margin(15).width('90%')\n      Slider({ style: SliderStyle.OutSet, value: 40 })\n        .blockSize({ width: 40, height: 40 })\n        .blockBorderColor(Color.Red)\n        .blockBorderWidth(5)\n      Divider()\n      Text('step').fontSize(9).fontColor(0xCCCCCC).margin(15).width('90%')\n      Slider({ style: SliderStyle.InSet, value: 40, step: 10 })\n        .showSteps(true)\n        .stepSize(8)\n        .stepColor(Color.Yellow)\n      Divider()\n      Text('track').fontSize(9).fontColor(0xCCCCCC).margin(15).width('90%')\n      Slider({ style: SliderStyle.InSet, value: 40 })\n        .trackBorderRadius(2)\n      Divider()\n      Text('selected').fontSize(9).fontColor(0xCCCCCC).margin(15).width('90%')\n      Slider({ style: SliderStyle.InSet, value: 40 })\n        .selectedBorderRadius(2)\n      Divider()\n      Text('blockStyle').fontSize(9).fontColor(0xCCCCCC).margin(15).width('90%')\n      Slider({ style: SliderStyle.OutSet, value: 40 })\n        .blockStyle({ type: SliderBlockType.DEFAULT })\n      Slider({ style: SliderStyle.OutSet, value: 40 })\n        .blockStyle({ type: SliderBlockType.IMAGE, image: $r('sys.media.ohos_app_icon') })\n      Slider({ style: SliderStyle.OutSet, value: 40 })\n        .blockSize({ width: '60px', height: '60px' })\n        .blockColor(Color.Red)\n        .blockStyle({ type: SliderBlockType.SHAPE, shape: new Path({ commands: 'M60 60 M30 30 L15 56 L45 56 Z' }) })\n      Divider()\n      Text('tips').fontSize(9).fontColor(0xCCCCCC).margin(15).width('90%')\n      Slider({ style: SliderStyle.InSet, value: this.tipsValue })\n        .showTips(true, this.tipsValue.toFixed())\n        .onChange(value => {\n          this.tipsValue = value;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(97360)/* ["default"] */.A) + "",
        width: "460",
        height: "854"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3自定义滑动条",
      children: "示例3（自定义滑动条）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例实现了Slider组件通过样式Builder定制内容区。点击增加按钮，进度条会按照原Slider设置的步长增加，反之点减少按钮进度条会减少，并触发原组件的onChange事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n\n@Builder\nfunction buildSlider(config: SliderConfiguration) {\n  Row() {\n    Column({ space: 30 }) {\n      Progress({ value: config.value, total: config.max, type: ProgressType.Ring })\n        .margin({ top: 20 })\n\n      Button('增加')\n        .onClick(() => {\n          config.value = config.value + config.step;\n          config.triggerChange(config.value, SliderChangeMode.Click);\n        })\n        .width(100)\n        .height(25)\n        .fontSize(10)\n        .enabled(config.value < config.max)\n\n      Button('减少')\n        .onClick(() => {\n          config.value = config.value - config.step;\n          config.triggerChange(config.value, SliderChangeMode.Click);\n        })\n        .width(100)\n        .height(25)\n        .fontSize(10)\n        .enabled(config.value > config.min)\n\n      Slider({\n        value: config.value,\n        min: config.min,\n        max: config.max,\n        step: config.step,\n      })\n        .width(100)\n        .visibility((config.contentModifier as MySliderStyle).showSlider ? Visibility.Visible : Visibility.Hidden)\n        .showSteps(true)\n        .onChange((value: number, mode: SliderChangeMode) => {\n          config.triggerChange(value, mode);\n        })\n      Text('当前状态：' + ((config.contentModifier as MySliderStyle).sliderChangeMode == 0 ? \"Begin\"\n        : ((config.contentModifier as MySliderStyle).sliderChangeMode == 1 ? \"Moving\"\n          : ((config.contentModifier as MySliderStyle).sliderChangeMode == 2 ? \"End\"\n            : ((config.contentModifier as MySliderStyle).sliderChangeMode == 3 ? \"Click\" : \"无\")))))\n        .fontSize(10)\n      Text('进度值：' + config.value)\n        .fontSize(10)\n      Text('最小值：' + config.min)\n        .fontSize(10)\n      Text('最大值：' + config.max)\n        .fontSize(10)\n      Text('步长：' + config.step)\n        .fontSize(10)\n    }\n    .width('80%')\n\n  }\n  .width('100%')\n}\n\nclass MySliderStyle implements ContentModifier<SliderConfiguration> {\n  showSlider: boolean = true;\n  sliderChangeMode: number = 0;\n\n  constructor(showSlider: boolean, sliderChangeMode: number) {\n    this.showSlider = showSlider;\n    this.sliderChangeMode = sliderChangeMode;\n  }\n\n  applyContent(): WrappedBuilder<[SliderConfiguration]> {\n    return wrapBuilder(buildSlider);\n  }\n}\n\n\n@Entry\n@Component\nstruct SliderExample {\n  @State showSlider: boolean = true;\n  @State sliderValue: number = 0;\n  @State sliderMin: number = 10;\n  @State sliderMax: number = 100;\n  @State sliderStep: number = 20;\n  @State sliderChangeMode: number = 0;\n\n  build() {\n    Column({ space: 8 }) {\n\n      Row() {\n        Slider({\n          value: this.sliderValue,\n          min: this.sliderMin,\n          max: this.sliderMax,\n          step: this.sliderStep,\n        })\n          .showSteps(true)\n          .onChange((value: number, mode: SliderChangeMode) => {\n            this.sliderValue = value;\n            this.sliderChangeMode = mode;\n            console.info('SliderLog value:' + value + 'mode:' + mode.toString());\n          })\n          .contentModifier(new MySliderStyle(this.showSlider, this.sliderChangeMode))\n\n      }\n      .width('100%')\n\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(27654)/* ["default"] */.A) + "",
        width: "335",
        height: "712"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4设置滑动条渐变色",
      children: "示例4（设置滑动条渐变色）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过colorGradient设置滑动条渐变色，通过focusable、defaultFocus和focusOnTouch设置滑动条支持表冠操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct SliderExample {\n  @State inSetValueOne: number = 60\n  @State colorGradient: LinearGradient = new LinearGradient([{ color: \"#FF0000FF\", offset: 0 }, { color: \"#FFFF0000\", offset: 1 }])\n  @State sensitivity: CrownSensitivity | undefined | null = CrownSensitivity.MEDIUM\n  scroller: Scroller = new Scroller()\n\n  getIntegerDigits(num: number): string {\n    let numRound = Math.round(num);\n    return numRound.toString();\n  }\n\n  build() {\n    Column() {\n      Scroll(this.scroller){\n        Column() {\n          Row() {\n            Stack({ alignContent: Alignment.Top }) {\n              Slider({\n                value: this.inSetValueOne,\n                min: 0,\n                max: 100,\n                style: SliderStyle.NONE,\n                direction: Axis.Vertical,\n                reverse: true\n              })\n                .focusable(true)\n                .defaultFocus(true)\n                .focusOnTouch(true)\n                .digitalCrownSensitivity(this.sensitivity)\n                .trackColor(\"#26FFFFFF\")\n                .trackThickness(52)\n                .selectedColor(this.colorGradient)\n                .onChange((value: number, mode: SliderChangeMode) => {\n                  this.inSetValueOne = value\n                })\n            }\n            .height(233 - 66)\n            .width(52)\n            .margin({ top: 33, bottom: 33, left: 56 })\n            Column() {\n              Text('音量')\n                .fontSize(19)\n                .fontColor(\"#A9FFFFFF\")\n                .fontWeight(500)\n                .textAlign(TextAlign.Start)\n                .margin({ left: 20 })\n              Row() {\n                Text(this.getIntegerDigits(this.inSetValueOne))\n                  .fontSize(52)\n                  .fontColor(\"#FFFFFFFF\")\n                  .fontWeight(700)\n                  .textAlign(TextAlign.Start)\n                  .margin({ left: 20 })\n                Text('%')\n                  .fontSize(19)\n                  .fontColor(\"#FFFFFFFF\")\n                  .fontWeight(500)\n                  .textAlign(TextAlign.Start)\n                  .margin({ left: 2 })\n              }\n            }.alignItems(HorizontalAlign.Start)\n          }\n          .width(233)\n          .height(233)\n          .borderRadius(116.5)\n          .backgroundColor(Color.Black)\n        }\n      }\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(783235)/* ["default"] */.A) + "",
        width: "457",
        height: "475"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5滑动条设置前后缀内容",
      children: "示例5（滑动条设置前后缀内容）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例实现了Slider组件通过prefix、suffix属性设置滑动条的前后缀内容，定制其内容区以及无障碍属性。设置无障碍属性后，屏幕阅读器将以设置的无障碍内容进行朗读。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { ComponentContent } from '@kit.ArkUI';\n\nclass NodeParams {\n  param: ResourceStr = \"\"\n\n  constructor(param: ResourceStr) {\n    this.param = param;\n  }\n}\n\n@Builder\nfunction textBuilder(params: NodeParams) {\n  Text(params.param)\n    .fontSize($r('sys.float.Caption_L'))\n    .clip(true)\n    .textAlign(TextAlign.Center)\n    .fontColor(Color.Black)\n}\n\n@Entry\n@Component\nstruct SliderExample {\n  private pre: string = '低';\n  private suf: string = '高';\n  private uiContext: UIContext = this.getUIContext();\n\n  private preNode1: ComponentContent<NodeParams> = new ComponentContent(this.uiContext, wrapBuilder(textBuilder), new NodeParams(this.pre));\n  private sufNode1: ComponentContent<NodeParams> = new ComponentContent(this.uiContext, wrapBuilder(textBuilder), new NodeParams(this.suf));\n  private preNode2: ComponentContent<NodeParams> = new ComponentContent(this.uiContext, wrapBuilder(textBuilder), new NodeParams(this.pre));\n  private sufNode2: ComponentContent<NodeParams> = new ComponentContent(this.uiContext, wrapBuilder(textBuilder), new NodeParams(this.suf));\n  private preNode3: ComponentContent<NodeParams> = new ComponentContent(this.uiContext, wrapBuilder(textBuilder), new NodeParams(this.pre));\n  private sufNode3: ComponentContent<NodeParams> = new ComponentContent(this.uiContext, wrapBuilder(textBuilder), new NodeParams(this.suf));\n  private preNode4: ComponentContent<NodeParams> = new ComponentContent(this.uiContext, wrapBuilder(textBuilder), new NodeParams(this.pre));\n  private sufNode4: ComponentContent<NodeParams> = new ComponentContent(this.uiContext, wrapBuilder(textBuilder), new NodeParams(this.suf));\n  private preNode5: ComponentContent<NodeParams> = new ComponentContent(this.uiContext, wrapBuilder(textBuilder), new NodeParams(this.pre));\n  private sufNode5: ComponentContent<NodeParams> = new ComponentContent(this.uiContext, wrapBuilder(textBuilder), new NodeParams(this.suf));\n  private preNode6: ComponentContent<NodeParams> = new ComponentContent(this.uiContext, wrapBuilder(textBuilder), new NodeParams(this.pre));\n  private sufNode6: ComponentContent<NodeParams> = new ComponentContent(this.uiContext, wrapBuilder(textBuilder), new NodeParams(this.suf));\n\n  build() {\n    Column({ space: 8 }) {\n      Text('outset slider').fontSize(9).fontColor(0xCCCCCC).width('90%').margin(15)\n      Row() {\n        Slider({\n          value: 50,\n          min: 0,\n          max: 100,\n          style: SliderStyle.OutSet\n        })\n          .showTips(true)\n          .prefix(this.preNode1)\n          .suffix(this.sufNode1)\n      }\n      .width('80%')\n\n      Row() {\n        Slider({\n          value: 50,\n          min: 0,\n          max: 100,\n          style: SliderStyle.OutSet\n        })\n          .showTips(true)\n          .prefix(this.preNode3)\n      }\n      .width('80%')\n\n      Row() {\n        Slider({\n          value: 50,\n          min: 0,\n          max: 100,\n          style: SliderStyle.OutSet\n        })\n          .showTips(true)\n          .suffix(this.sufNode3)\n      }\n      .width('80%')\n\n      Text('inset slider').fontSize(9).fontColor(0xCCCCCC).width('90%').margin(15)\n      Row() {\n        Slider({\n          value: 50,\n          min: 0,\n          max: 100,\n          style: SliderStyle.InSet\n        })\n          .blockColor('#191970')\n          .trackColor('#ADD8E6')\n          .selectedColor('#4169E1')\n          .showTips(true)\n          .trackThickness(36)\n          .prefix(this.preNode2)\n          .suffix(this.sufNode2)\n      }\n      .width('80%')\n\n      Row() {\n        Slider({\n          value: 50,\n          min: 0,\n          max: 100,\n          style: SliderStyle.InSet\n        })\n          .blockColor('#191970')\n          .trackColor('#ADD8E6')\n          .selectedColor('#4169E1')\n          .showTips(true)\n          .trackThickness(36)\n          .prefix(this.preNode4)\n      }\n      .width('80%')\n\n      Row() {\n        Slider({\n          value: 50,\n          min: 0,\n          max: 100,\n          style: SliderStyle.InSet\n        })\n          .blockColor('#191970')\n          .trackColor('#ADD8E6')\n          .selectedColor('#4169E1')\n          .showTips(true)\n          .trackThickness(36)\n          .suffix(this.sufNode4)\n      }\n      .width('80%')\n\n      Text('slider Show Step').fontSize(9).fontColor(0xCCCCCC).width('90%').margin(15)\n      Row() {\n        Slider({\n          value: 50,\n          min: 0,\n          max: 100,\n          step:10,\n          style: SliderStyle.InSet\n        })\n          .blockColor('#191970')\n          .trackColor('#ADD8E6')\n          .selectedColor('#4169E1')\n          .showTips(true)\n          .trackThickness(36)\n          .showSteps(true)\n          .prefix(this.preNode5, {\n            accessibilityText: 'prefixText',\n            accessibilityDescription: 'prefixDescription',\n            accessibilityLevel: 'auto',\n            accessibilityGroup: true\n          })\n          .suffix(this.sufNode5, {\n            accessibilityText: 'suffixText',\n            accessibilityDescription: 'suffixDescription',\n            accessibilityLevel: 'auto',\n            accessibilityGroup: true\n          })\n      }\n      .width('80%')\n\n      Row() {\n        Slider({\n          value: 50,\n          min: 0,\n          max: 100,\n          step:10,\n          style: SliderStyle.InSet\n        })\n          .blockColor('#191970')\n          .trackColor('#ADD8E6')\n          .selectedColor('#4169E1')\n          .showTips(true)\n          .trackThickness(36)\n          .showSteps(true)\n          .prefix(this.preNode6, {\n            accessibilityText: 'prefixText',\n            accessibilityDescription: 'prefixDescription',\n            accessibilityLevel: 'auto',\n            accessibilityGroup: true\n          })\n      }\n      .width('80%')\n      \n      Row() {\n        Slider({\n          value: 50,\n          min: 0,\n          max: 100,\n          step:10,\n          style: SliderStyle.InSet\n        })\n          .blockColor('#191970')\n          .trackColor('#ADD8E6')\n          .selectedColor('#4169E1')\n          .showTips(true)\n          .trackThickness(36)\n          .showSteps(true)\n          .suffix(this.sufNode6, {\n            accessibilityText: 'suffixText',\n            accessibilityDescription: 'suffixDescription',\n            accessibilityLevel: 'auto',\n            accessibilityGroup: true\n          })\n      }\n      .width('80%')\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(135113)/* ["default"] */.A) + "",
        width: "720",
        height: "916"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6滑动条设置刻度点无障碍文本",
      children: "示例6（滑动条设置刻度点无障碍文本）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例实现了Slider组件通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#showsteps20",
        children: "showSteps"
      }), "属性设置刻度点的无障碍文本信息。设置后，屏幕阅读器将以设置的无障碍内容进行朗读。从API version 20开始，新增", (0,jsx_runtime.jsx)(_components.a, {
        href: "#showsteps20",
        children: "showSteps"
      }), "属性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class SliderBlockBorderColorModifier1 implements AttributeModifier<SliderAttribute>{\n  optionMaps:Map<number, SliderStepItemAccessibility> = new Map()\n    .set(1, {text : '123123'})\n    .set(2, {text : 'Slider无障碍文本'})\n    .set(3, {text : $r('app.string.stepItemText')})\n    .set(4, {text : '!@#$%^&*()'});\n  applyNormalAttribute(instance: SliderAttribute): void {\n    instance.showSteps(true, {stepsAccessibility: this.optionMaps})\n  }\n}\n@Entry\n@Component\nstruct SliderExample {\n  @State show: boolean = true;\n  @State optionMaps:Map<number, SliderStepItemAccessibility> = new Map();\n  private  sliderModifier: SliderBlockBorderColorModifier1 =new SliderBlockBorderColorModifier1()\n  aboutToAppear(){\n    this.optionMaps.set(1, {text : '123123'})\n    this.optionMaps.set(2, {text : 'Slider无障碍文本'})\n    this.optionMaps.set(3, {text : $r('app.string.app_name')})\n    this.optionMaps.set(4, {text : '!@#$%^&*()'})\n    this.show = true;\n  }\n  build() {\n    Column({ space: 8 }) {\n      Text('This is an example for showSteps attribute').fontSize(15).fontColor(0x000000).margin(15).width('90%')\n      Row() {\n        Slider({\n          style: SliderStyle.InSet,\n          value: 20,\n          step: 10,\n          max: 50,\n          min: 0,\n          direction: Axis.Horizontal\n        })\n          .stepSize(8)\n          .stepColor(Color.Yellow)\n          .showSteps(true, {stepsAccessibility: this.optionMaps})\n      }.width('80%').height(100)\n      Divider()\n      Text('This is an example for showSteps attribute with modifier').fontSize(15).fontColor(0x000000).margin(15)\n        .width('90%')\n      Row() {\n        Slider({\n          style: SliderStyle.InSet,\n          value: 20,\n          step: 10,\n          max: 50,\n          min: 0,\n          direction: Axis.Horizontal\n        })\n          .stepSize(8)\n          .stepColor(Color.Yellow)\n          .attributeModifier(this.sliderModifier)\n      }.width('80%').height(100)\n      Divider()\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(764132)/* ["default"] */.A) + "",
        width: "379",
        height: "261"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例7设置滑动条的双向绑定",
      children: "示例7（设置滑动条的双向绑定）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 11开始，通过将", (0,jsx_runtime.jsx)(_components.a, {
        href: "#slideroptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "SliderOptions"
      }), "的value属性设置为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-two-way-sync",
        children: "$$"
      }), "绑定的变量，实现数据同步。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct SliderExample {\n  @State valueWith$: number = 40\n  @State valueWithout$: number = 40\n  build() {\n    Column({ space: 20 }) {\n      Text(\"使用$$双向绑定: \" + this.valueWith$)\n      Slider({\n        value: $$this.valueWith$,\n        min: 0,\n        max: 100,\n      })\n\n      Text(\"不使用$$双向绑定: \" + this.valueWithout$)\n      Slider({\n        value: this.valueWithout$,\n        min: 0,\n        max: 100,\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(372929)/* ["default"] */.A) + "",
        width: "528",
        height: "401"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例8滑块设置渐变色",
      children: "示例8（滑块设置渐变色）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例实现了Slider组件通过blockColor属性设置滑块渐变色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct SliderExample {\n  @State colorGradient: LinearGradient = new LinearGradient([{ color: \"#FFFFFF\", offset: 0 }, { color: \"#007DFF\", offset: 1 }])\n\n  build() {\n    Column({ space: 10 }) {\n      Slider({\n        style:SliderStyle.OutSet,\n        min: 0,\n        max: 100,\n      })\n        .blockColor(this.colorGradient)\n        .blockSize({width:\"50vp\",height:\"50vp\"})\n      Slider({\n        style:SliderStyle.OutSet,\n        min: 0,\n        max: 100,\n        reverse: true\n      })\n        .blockColor(this.colorGradient)\n        .blockSize({width:\"50vp\",height:\"50vp\"})\n      Slider({\n        style:SliderStyle.InSet,\n        min: 0,\n        max: 100,\n      })\n        .blockColor(this.colorGradient)\n        .blockSize({width:\"50vp\",height:\"50vp\"})\n      Slider({\n        style:SliderStyle.InSet,\n        min: 0,\n        max: 100,\n        reverse: true\n      })\n        .blockColor(this.colorGradient)\n        .blockSize({width:\"50vp\",height:\"50vp\"})\n      Slider({\n        style:SliderStyle.NONE,\n        min: 0,\n        max: 100,\n      })\n        .blockColor(this.colorGradient)\n        .blockSize({width:\"50vp\",height:\"50vp\"})\n      Slider({\n        style:SliderStyle.NONE,\n        min: 0,\n        max: 100,\n        reverse: true\n      })\n        .blockColor(this.colorGradient)\n        .blockSize({width:\"50vp\",height:\"50vp\"})\n\n      Row({ space: 20 }){\n        Slider({\n          style:SliderStyle.OutSet,\n          min: 0,\n          max: 100,\n          direction:Axis.Vertical\n        })\n          .blockColor(this.colorGradient)\n          .blockSize({width:\"50vp\",height:\"50vp\"})\n        Slider({\n          style:SliderStyle.OutSet,\n          min: 0,\n          max: 100,\n          reverse: true,\n          direction:Axis.Vertical\n        })\n          .blockColor(this.colorGradient)\n          .blockSize({width:\"50vp\",height:\"50vp\"})\n        Slider({\n          style:SliderStyle.InSet,\n          min: 0,\n          max: 100,\n          direction:Axis.Vertical\n        })\n          .blockColor(this.colorGradient)\n          .blockSize({width:\"50vp\",height:\"50vp\"})\n        Slider({\n          style:SliderStyle.InSet,\n          min: 0,\n          max: 100,\n          reverse: true,\n          direction:Axis.Vertical\n        })\n          .blockColor(this.colorGradient)\n          .blockSize({width:\"50vp\",height:\"50vp\"})\n        Slider({\n          style:SliderStyle.NONE,\n          min: 0,\n          max: 100,\n          direction:Axis.Vertical\n        })\n          .blockColor(this.colorGradient)\n          .blockSize({width:\"50vp\",height:\"50vp\"})\n        Slider({\n          style:SliderStyle.NONE,\n          min: 0,\n          max: 100,\n          reverse: true,\n          direction:Axis.Vertical\n        })\n          .blockColor(this.colorGradient)\n          .blockSize({width:\"50vp\",height:\"50vp\"})\n      }.height(\"50%\")\n    }.width(\"100%\")\n\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(216935)/* ["default"] */.A) + "",
        width: "475",
        height: "735"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例9设置滑轨的背景颜色",
      children: "示例9（设置滑轨的背景颜色）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#trackcolormetrics23",
        children: "trackColorMetrics"
      }), "设置指定色域的渐变断点值，包括偏移和颜色。示例中的colorSpace使用了ColorSpace.DISPLAY_P3类型，需要对应窗口调用setWindowColorSpace接口，将当前窗口设置为广色域模式，设置窗口色域模式为广色域参照方法", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setwindowcolorspace9",
        children: "setWindowColorSpace"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，新增trackColorMetrics接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { ColorMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct SliderExample {\n  @State greenColor: ColorMetrics = ColorMetrics.colorWithSpace(ColorSpace.DISPLAY_P3, 0.0, 1.0, 0.0, 1);\n  @State yellowColor: ColorMetrics = ColorMetrics.colorWithSpace(ColorSpace.DISPLAY_P3, 1.0, 1.0, 0.0, 1);\n  @State inSetValueOne: number = 40;\n  @State color: ColorMetricsLinearGradient =\n    new ColorMetricsLinearGradient([{ color: this.greenColor, offset: 0 }, { color: this.yellowColor, offset: 1 }])\n\n  build() {\n    Column({ space: 8 }) {\n      Slider({\n        value: this.inSetValueOne,\n        min: 0,\n        max: 100,\n        style: SliderStyle.InSet\n      }).margin('10')\n        .width('80%')\n        .blockColor('#FF0000')\n        .trackColorMetrics(this.color)\n        .selectedColor('#4169E1')\n        .showTips(true)\n        .onChange((value: number, mode: SliderChangeMode) => {\n          this.inSetValueOne = value;\n          console.info('value:' + value + 'mode:' + mode.toString());\n        })\n    }.alignItems(HorizontalAlign.Center)\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(426875)/* ["default"] */.A) + "",
        width: "252",
        height: "162"
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
739340(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
27654(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959728-aed7ab12677804d4b637e7ed26f61f3b.gif");

},
577572(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
135113(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800080-0ed4c24ab225459a0b1b5ceb2cdc59f7.jpeg");

},
433731(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
783235(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479729-f50484155e1c06d34f6d785a62851ee2.gif");

},
426875(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPwAAACiCAYAAABlL6DgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAbYSURBVHhe7dvNa1xVGMfx584kTSvUUmlBW1/qC9iFS3eC/4HFP8CF/gOiuPJPEFQQBNeCOxURxHURly4qQkHQ2iKKoFiKb0MzmfE8555z59y3ZBoaaPL7fkzmOTnnOTed3PnNTSaxWgYGQMIkVQACCDwghMADQgg8IITAA0IIPCCEwANCCDwghMADQgg8IITAA0IIPCCEwANCCDwghMADQgg8IITAA0IIPCCEwANCCDwghMADQgg8IITAA0IIPCCEwANCCDwghMADQgg8IITAA0IIPCCEwANCCDwghMADQgg8IITAA0IIPCCEwANCCDwghMADQgg8IITAA0IIPCCEwANCCDwghMADQgg8IITAA0IIPCCEwANCCDwghMADQgg8IITAA0IIPCCEwANCCDwghMADQgg8IITAA0IIPCCEwANCCDwghMADQgg8IITAA0IIPCCEwANCCDwghMADQgg8IITAA0IIPCCEwANCCDwghMADQgg8IITAA0IIPCCEwANCCDwgpFoGaQwB3dNdVVUaQcFo4HcWZn/8azabpwlXdA5uGnnqaE2P9LhmaZeebK2nqdCzZ1vRMNrbWej3hZmRza3pkR7XLO3Sk+3nvufTHGs+QAx7Ff7L447yAElvaqDHrdvn4tIu69m697sow4rF0b6BhXpq782t6ZGeLC7v0ePWuu/Byfsqe+J8Zcc200RHL/D+0be/mV2+ZvbP7frf0nSEGofp43JnHjeHCyUvD+3PNZZU3eo4dR3rHZwrFtNoNc5LnVr29uaKtXIulk71hdFjd+YH51Jt9rg8LmosqTbz4Xboc+bqN4uFTyxCn/fGyfBxCHnlP9V5rcM/dJxYOrVez5PxrVWb0p1L1Q0fs66xdNeD1VwexLdaHhc1llRd75ihxmFRY0nV9fc093xfxxntTTetuU71hd2OMwmn8YFTlb3x0oZden7aex5v/QzvB7r8k9mX34ewb6eD4JBLAfewL3bCA2JuZ08u7Ex4n9g8rIVv4dITweqRhMPKn9d/v7m0N9/ftg8+8fObFpLWFf7nW2YfXak3ubzSdIQah935YNWbB03b4P5cY0nVrY5T17HewbliMY1W47zUqWVvb65YK+di6VRfGD12Z35wLtVmj8vjosaSajMfboc+p9dlvLLvhCv8jp29f2mvv3jCHn9w6h32w69ze/vTmd3826/wfjWYhj3pklAcJ5ZOrdfzZHxr1aZ051J1w8esayzd9WA1lwfxrZbHRY0lVdc7ZqhxWNRYUnX9Pc0939dxRnvTTWuuU31h3c+5EU7zx29t2cULq8t86wr/zS+rsOMo8JPpD5ClTatFDPtT56Y2DWfd359+eMNevXQ8tJTf6vMAOCq2d8w+/KJ8Ea4TeL/C46ipQ3z6ZNVc2UsXH9mw48d8RNDvls6PzXfFfo959Vr7vLYCz29o9MSHA1m/qw7iy7nfY+76ot2jp9LgHnAQzz2aj2v/Slb251/L+DN719Ubc5tthwHP9kfSM0+2z2sr8M+eDxP3yHk/iHDqPaTrsFfVxBbLib372cy+uz637ZD72+H9yo9ze+/z/0LLNHRNQl/dj6Nha9Ps5Rc20ke13u/hv75h9tX1ELgwm1eaDp9LNZY8H6x686BpG9yfayyputVx6jrWOzhXLKbRapyXOrXs7c0Va+VcLJ3qC6PH7swPzqXa7HF5XNRYUm3mw+3Q56xr/WLcclH/Ws5sYVvpMTDzv7NIYV+GJwX/ExxepfebUFJ1/T3NPd/XcUZ7001rrlN9YZ3POZ1a/F38K53At67w7rnHzC5dNDt9on4lF4edX+FDiD3Qk/AoqDZsNp/Gd5tshDWfS1d3vq0/9DZDvi+cq+yd1zZ7YXejf1rrv567Natf2h8yuGlwsq3VskZ/Kbbf4R7vv9Mt5Ya19w5/Gcf373Lg/ewpNW1Ffz7NvdMdQh5jnsO+5udopP61tw007rn3Tves8Y/ptRzQntLIQ2R3ac+6W09smT10poq/gx8yGngcTd3Tzf88o4XAA0L4KR0QQuABIQQeEELgASEEHhBC4AEhBB4QQuABIQQeEELgASEEHhBC4AEhBB4QQuABIQQeEELgASEEHhBC4AEhBB4QQuABIQQeEELgASEEHhBC4AEhBB4QQuABIQQeEELgASEEHhBC4AEhBB4QQuABIQQeEELgASEEHhBC4AEhBB4QQuABIQQeEELgASEEHhBC4AEhBB4QQuABIQQeEELgASEEHhBC4AEhBB4QQuABIQQeEELgASEEHhBC4AEhBB4QQuABIQQeEELgASEEHhBC4AEhBB4QQuABIQQeEELgASEEHhBC4AEZZv8DrBaeb/5m7A0AAAAASUVORK5CYII=");

},
764132(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439775-121e069320508d1b7d09e06518064229.png");

},
147783(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
97360(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439773-b1183dd8f4aad202d79a500424dbf1b9.png");

},
314560(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
216935(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479731-9095817100a61c32b1cd208c9c89c91c.png");

},
158355(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
892864(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800078-3b404b811182aa3d7abca24435812992.gif");

},
768355(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
372929(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959730-85e7b5a85192e3b80d91179282e823a1.gif");

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