"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["762140"], {
732202(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_custom_comp_arkts_extend_component_decorator_ts_animatable_extend_ts_animatable_extend_md_b86_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-custom-comp-arkts-extend-component-decorator-ts-animatable-extend-ts-animatable-extend-md-b86.json
var site_docs_ref_arkui_api_arkui_declarative_comp_custom_comp_arkts_extend_component_decorator_ts_animatable_extend_ts_animatable_extend_md_b86_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/custom-comp/arkts-extend-component-decorator/ts-animatable-extend/ts-animatable-extend","title":"定义可动画属性 (@AnimatableExtend)","description":"@AnimatableExtend装饰器用于自定义可动画的属性方法，该装饰器内定义的函数在动画过程中会被逐帧调用，直到动画结束。该装饰器的常见用途有：","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/custom-comp/arkts-extend-component-decorator/ts-animatable-extend/ts-animatable-extend.md","sourceDirName":"arkui-api/arkui-declarative-comp/custom-comp/arkts-extend-component-decorator/ts-animatable-extend","slug":"/arkui-api/arkui-declarative-comp/custom-comp/arkts-extend-component-decorator/ts-animatable-extend/ts-animatable-extend","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/custom-comp/arkts-extend-component-decorator/ts-animatable-extend/ts-animatable-extend","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"定义可动画属性 (@AnimatableExtend)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-animatable-extend","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-animatable-extend"},"sidebar":"ref","previous":{"title":"自定义组件参数","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-parameter/ts-custom-component-parameter"},"next":{"title":"@Entry：页面入口","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/custom-comp/arkts-extend-component-decorator/ts-universal-entry/ts-universal-entry"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/custom-comp/arkts-extend-component-decorator/ts-animatable-extend/ts-animatable-extend.md


const frontMatter = {
	title: '定义可动画属性 (@AnimatableExtend)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-animatable-extend',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-animatable-extend'
};
const contentTitle = '定义可动画属性 (@AnimatableExtend)';

const assets = {

};



const toc = [{
  "value": "语法",
  "id": "语法",
  "level": 2
}, {
  "value": "AnimatableArithmetic&lt;T&gt;",
  "id": "animatablearithmetict",
  "level": 2
}, {
  "value": "plus",
  "id": "plus",
  "level": 3
}, {
  "value": "subtract",
  "id": "subtract",
  "level": 3
}, {
  "value": "multiply",
  "id": "multiply",
  "level": 3
}, {
  "value": "equals",
  "id": "equals",
  "level": 3
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（逐帧布局的效果）",
  "id": "示例1逐帧布局的效果",
  "level": 3
}, {
  "value": "示例2（折线的动画效果）",
  "id": "示例2折线的动画效果",
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
        id: "定义可动画属性-animatableextend",
        children: "定义可动画属性 (@AnimatableExtend)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@AnimatableExtend装饰器用于自定义可动画的属性方法，该装饰器内定义的函数在动画过程中会被逐帧调用，直到动画结束。该装饰器的常见用途有："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使不可动画属性变为可动画属性，自定义数据运算规则使得属性能进行插值运算得到中间结果，再由动画驱动属性从起点值逐渐过渡到终点值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使属性逐帧变化，实现逐帧布局的效果。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可动画属性：如果一个属性方法在animation属性前调用，改变这个属性的值可以使animation属性的动画效果生效，属性有动画过渡效果，这个属性称为可动画属性。比如height、width、backgroundColor、translate属性，和Text组件的fontSize属性等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不可动画属性：如果一个属性方法在animation属性前调用，改变这个属性的值不能使animation属性的动画效果生效，属性突变无动画效果，这个属性称为不可动画属性。比如Polyline组件的points属性等。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(254814)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该装饰器从API version 10开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "语法",
      children: "语法"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@AnimatableExtend(UIComponentName) function functionName(value: typeName) {\n  .propertyName(value)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@AnimatableExtend仅支持定义在全局，不支持在组件内部定义。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@AnimatableExtend定义的函数参数类型必须为number类型或者实现 AnimatableArithmetic<T>接口的自定义类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@AnimatableExtend定义的函数体内只能调用@AnimatableExtend括号内组件的属性方法。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "animatablearithmetict",
      children: "AnimatableArithmetic<T>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口定义非number数据类型的动画运算规则。对非number类型的数据（如数组、结构体、颜色等）做动画，需要实现AnimatableArithmetic<T>接口中加法、减法、乘法和判断相等函数，使得该数据能参与动画的插值运算和识别该数据是否发生改变。即定义它们为实现了AnimatableArithmetic<T>接口的类型。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "plus",
      children: "plus"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "plus(rhs: AnimatableArithmetic<T>): AnimatableArithmetic<T>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义数据类型的加法运算规则。"
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
            children: "rhs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#animatablearithmetict",
              children: "AnimatableArithmetic<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加法运算的对象。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#animatablearithmetict",
              children: "AnimatableArithmetic<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加法运算的结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "subtract",
      children: "subtract"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "subtract(rhs: AnimatableArithmetic<T>): AnimatableArithmetic<T>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义该数据类型的减法运算规则。"
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
            children: "rhs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#animatablearithmetict",
              children: "AnimatableArithmetic<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "减法运算的对象。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#animatablearithmetict",
              children: "AnimatableArithmetic<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "减法运算的结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multiply",
      children: "multiply"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "multiply(scale: number): AnimatableArithmetic<T>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义该数据类型的乘法运算规则。"
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
            children: "scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "乘法运算的系数。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#animatablearithmetict",
              children: "AnimatableArithmetic<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "乘法运算的结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "equals",
      children: "equals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "equals(rhs: AnimatableArithmetic<T>): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义该数据类型的相等判断规则。"
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
            children: "rhs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#animatablearithmetict",
              children: "AnimatableArithmetic<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "和自身比较相等的另一个数据对象。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否相等。返回true表示相等，返回false表示不相等。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1逐帧布局的效果",
      children: "示例1（逐帧布局的效果）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例通过改变Text组件宽度实现逐帧布局的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@AnimatableExtend(Text)\nfunction animatableWidth(width: number) {\n  .width(width)\n}\n\n@Entry\n@Component\nstruct AnimatablePropertyExample {\n  @State textWidth: number = 80;\n\n  build() {\n    Column() {\n      Text(\"AnimatableProperty\")\n        .animatableWidth(this.textWidth)\n        .animation({ duration: 2000, curve: Curve.Ease })\n      Button(\"Play\")\n        .onClick(() => {\n          this.textWidth = this.textWidth == 80 ? 160 : 80;\n        })\n    }.width(\"100%\")\n    .padding(10)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(250073)/* ["default"] */.A) + "",
        width: "474",
        height: "217"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2折线的动画效果",
      children: "示例2（折线的动画效果）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例实现折线的动画效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Point {\n  x: number\n  y: number\n\n  constructor(x: number, y: number) {\n    this.x = x\n    this.y = y\n  }\n\n  plus(rhs: Point): Point {\n    return new Point(this.x + rhs.x, this.y + rhs.y);\n  }\n\n  subtract(rhs: Point): Point {\n    return new Point(this.x - rhs.x, this.y - rhs.y);\n  }\n\n  multiply(scale: number): Point {\n    return new Point(this.x * scale, this.y * scale);\n  }\n\n  equals(rhs: Point): boolean {\n    return this.x === rhs.x && this.y === rhs.y;\n  }\n}\n\n// PointVector实现了AnimatableArithmetic<T>接口\nclass PointVector extends Array<Point> implements AnimatableArithmetic<PointVector> {\n  constructor(value: Array<Point>) {\n    super();\n    value.forEach(p => this.push(p));\n  }\n\n  plus(rhs: PointVector): PointVector {\n    let result = new PointVector([]);\n    const len = Math.min(this.length, rhs.length);\n    for (let i = 0; i < len; i++) {\n      result.push((this as Array<Point>)[i].plus((rhs as Array<Point>)[i]));\n    }\n    return result;\n  }\n\n  subtract(rhs: PointVector): PointVector {\n    let result = new PointVector([]);\n    const len = Math.min(this.length, rhs.length);\n    for (let i = 0; i < len; i++) {\n      result.push((this as Array<Point>)[i].subtract((rhs as Array<Point>)[i]));\n    }\n    return result;\n  }\n\n  multiply(scale: number): PointVector {\n    let result = new PointVector([]);\n    for (let i = 0; i < this.length; i++) {\n      result.push((this as Array<Point>)[i].multiply(scale));\n    }\n    return result;\n  }\n\n  equals(rhs: PointVector): boolean {\n    if (this.length != rhs.length) {\n      return false;\n    }\n    for (let i = 0; i < this.length; i++) {\n      if (!(this as Array<Point>)[i].equals((rhs as Array<Point>)[i])) {\n        return false;\n      }\n    }\n    return true;\n  }\n\n  get(): Array<Object[]> {\n    let result: Array<Object[]> = [];\n    this.forEach(p => result.push([p.x, p.y]));\n    return result;\n  }\n}\n\n@AnimatableExtend(Polyline)\nfunction animatablePoints(points: PointVector) {\n  .points(points.get())\n}\n\n@Entry\n@Component\nstruct AnimatablePropertyExample {\n  @State points: PointVector = new PointVector([\n    new Point(50, Math.random() * 200),\n    new Point(100, Math.random() * 200),\n    new Point(150, Math.random() * 200),\n    new Point(200, Math.random() * 200),\n    new Point(250, Math.random() * 200),\n  ])\n\n  build() {\n    Column() {\n      Polyline()\n        .animatablePoints(this.points)\n        .animation({ duration: 1000, curve: Curve.Ease })// 设置动画参数\n        .size({ height: 220, width: 300 })\n        .fill(Color.Green)\n        .stroke(Color.Red)\n        .backgroundColor('#eeaacc')\n      Button(\"Play\")\n        .onClick(() => {\n          // points是实现了可动画协议的数据类型，points在动画过程中可按照定义的运算规则、动画参数从之前的PointVector变为新的PointVector数据，产生每一帧的PointVector数据，进而产生动画\n          this.points = new PointVector([\n            new Point(50, Math.random() * 200),\n            new Point(100, Math.random() * 200),\n            new Point(150, Math.random() * 200),\n            new Point(200, Math.random() * 200),\n            new Point(250, Math.random() * 200),\n          ]);\n        })\n    }.width(\"100%\")\n    .padding(10)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(612848)/* ["default"] */.A) + "",
        width: "294",
        height: "235"
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
612848(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440139-e0934feeb4058feef3182e909109afce.gif");

},
254814(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
250073(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800444-967b9d22c4b81286933ad890ddcccecd.gif");

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