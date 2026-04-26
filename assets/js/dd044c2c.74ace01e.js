"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["550322"], {
891705(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_user_defined_capabilities_arkts_user_defined_arkts_user_defined_md_dd0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-user-defined-capabilities-arkts-user-defined-arkts-user-defined-md-dd0.json
var site_docs_arkui_arkts_ui_development_arkts_user_defined_capabilities_arkts_user_defined_arkts_user_defined_md_dd0_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-user-defined/arkts-user-defined","title":"自定义能力概述","description":"自定义能力分层","source":"@site/docs/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-user-defined/arkts-user-defined.md","sourceDirName":"arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-user-defined","slug":"/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-user-defined/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-user-defined/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"自定义能力概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-user-defined","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"帧动画（ohos.animator）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animator/"},"next":{"title":"自定义组合","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-user-defined-composition/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-user-defined/arkts-user-defined.md


const frontMatter = {
	title: '自定义能力概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-user-defined',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义能力概述';

const assets = {

};



const toc = [{
  "value": "自定义能力分层",
  "id": "自定义能力分层",
  "level": 2
}, {
  "value": "自定义能力导览",
  "id": "自定义能力导览",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
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
        id: "自定义能力概述",
        children: "自定义能力概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义能力分层",
      children: "自定义能力分层"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义能力是ArkUI开发框架提供的对UI界面进行开发和定制化的能力。ArkUI开发框架提供的不同控制层级的自定义能力用于实现不同场景的应用的开发。自定义能力的开放层次越低，表示越接近底层基础能力，开发的灵活程度越高，开发难度越高、对于开发者能力的要求也越高。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前开放的自定义能力由低到高包括以下几个层次："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "自定义组合"
          })
        }), "：ArkUI框架提供的最基础的自定义方式，通过系统组件和自定义组件的基础能力，将这些能力进行组合，复用已有组件，进一步封装新的组件。具体包括：封装、布局、绘制和动画等基础能力。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "自定义扩展"
          })
        }), "：ArkUI框架提供一系列基于Modifier的自定义扩展能力，通过与UI分离的方式，对已有UI组件的属性、手势、内容进行扩展修改。包括", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier",
          children: "AttributeModifier"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-gesture-modifier/ts-universal-attributes-gesture-modifier#gesturemodifier-1",
          children: "GestureModifier"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-draw-modifier/ts-universal-attributes-draw-modifier#drawmodifier-1",
          children: "DrawModifier"
        }), "等扩展能力。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "自定义节点"
          })
        }), "：具备底层实体节点的部分基础能力的节点对象（", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
          children: "FrameNode"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode",
          children: "RenderNode"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode",
          children: "BuilderNode"
        }), "），这些节点能够通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-place-holder",
          children: "自定义占位节点"
        }), "与系统组件进行混合显示。自定义节点可以具备单个节点的测算布局、设置基础属性、设置事件监听、自定义绘制渲染内容的自定义能力。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "自定义渲染"
          })
        }), "：通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-add-component/napi-xcomponent-guidelines",
          children: "XComponent"
        }), "的“surface”模式暴露出的NativeWindow，使用NDK接口，可以将EGL/OpenGLES生成的显示数据或其它方式解码生成的媒体流数据写入到NativeWindow中，可以实现渲染内容的自定义。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义能力导览",
      children: "自定义能力导览"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述提到自定义能力层次不同，使用场景也不同。通过以下导览，可快速了解各种自定义能力的说明以及使用场景和建议。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "自定义层次"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "自定义能力"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "能力说明及适用场景"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "自定义组合"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义封装"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#component",
              children: "@Component"
            }), "装饰器：提供了最基础的组件封装能力，通过组合已有组件封装为新的自定义组件。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
              children: "@Builder"
            }), "装饰器：提供更轻量的UI封装和复用机制，可以将重复使用的UI结构抽象成一个Builder方法，在组件的build方法中调用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "自定义组合"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义布局"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-stack-layout",
              children: "层叠布局（Stack）"
            }), "：通过Stack容器，结合", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size",
              children: "尺寸设置"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location",
              children: "位置设置"
            }), "的通用属性，可对子组件进行自定义的排布。适用于子组件明确、相对简单的布局场景。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-page-custom-components-layout",
              children: "自定义组件的自定义布局"
            }), "：通过自定义组件的布局生命周期回调方法，对组件内子组件的位置进行调整。适用于封装一个特定布局算法的自定义组件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "自定义组合"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义绘制"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-draw/arkts-drawing-customization-on-canvas",
              children: "Canvas"
            }), "组件：通过Canvas组件的能力进行自定义绘制，通过组合的方式集成到自定义组件中，其接口和W3C标准的Canvas接口相近，在性能不敏感的场景下，适用于熟悉Web开发的开发者，可用于移植基于W3C的Canvas的绘制库。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-draw-graphics/arkts-geometric-shape-drawing",
              children: "Shape"
            }), "类组件：通过基础的图形类组件（", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-rect/ts-drawing-components-rect",
              children: "Rect"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-path/ts-drawing-components-path",
              children: "Path"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-circle/ts-drawing-components-circle",
              children: "Circle"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-ellipse/ts-drawing-components-ellipse",
              children: "Ellipse"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-polyline/ts-drawing-components-polyline",
              children: "Polyline"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-polygon/ts-drawing-components-polygon",
              children: "Polygon"
            }), "）进行组合，构建出自定义的图形。类似SVG矢量图的能力，适用于比较简单的图形组合，并可以结合动画的能力，实现一些交互的图形动画。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "自定义组合"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义动画"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-attribute-animation-apis",
              children: "属性动画"
            }), "：对于组件的可动画属性，通过属性动画的能力，可组合实现自定义的动画效果。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-animatable-extend",
              children: "@AnimatableExtend"
            }), "装饰器：对于组件的不可动画属性，通过@AnimatableExtend装饰器，使不可动画属性能实现自定义动画效果。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-animator/js-apis-animator",
              children: "@ohos.animator"
            }), " 接口：通过动画接口可实现逐帧修改属性或结合自定义绘制的能力，实现类似帧动画的自定义动画效果。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "自定义扩展"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "属性扩展"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
              children: "AttributeModifier"
            }), "：通过AttributeModifier可以实现UI与样式分离，实现属性、事件的动态设置与更新，同时支持跨文件的导出与复用。可用于组件封装，通过暴露Modifier实现属性的扩展。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#%E8%87%AA%E5%AE%9A%E4%B9%89modifier",
              children: "自定义Modifier"
            }), "：通过框架提供封装的组件Modifier类，直接在Modifier对象上暴露组件的属性和方法，可以简化组件封装时属性的传递与扩展。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-attributeupdater/js-apis-arkui-attributeupdater",
              children: "AttributeUpdater"
            }), "：在AttributeModifier的基础上增加直接设置属性的能力，避免通过状态变量更新带来的性能损耗。适用于大量组件频繁更新某些属性的场景，提升属性设置的性能。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "自定义扩展"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手势扩展"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-gesture-modifier/ts-universal-attributes-gesture-modifier#gesturemodifier-1",
              children: "GestureModifier"
            }), "：与AttributeModifier的能力类似，支持对手势进行扩展，动态的添加、删除手势，同样可以支持跨文件的导出与复用。适用于需要对自定义手势处理的通用逻辑进行封装和复用的场景。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "自定义扩展"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内容扩展"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-draw-modifier/ts-universal-attributes-draw-modifier#drawmodifier-1",
              children: "DrawModifier"
            }), "：通过DrawModifier可以在系统组件的基础之上，扩展叠加绘制自定义的内容，或者完全替换组件默认的绘制内容。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-content-modifier/ts-universal-attributes-content-modifier#contentmodifiert",
              children: "ContentModifier"
            }), "：在一些内容区和交互明确的系统组件上，通过ContentModifier可以实现使用自定义的Builder方法替换组件的内容。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "自定义节点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件节点"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-framenode",
              children: "FrameNode"
            }), "：表示组件的实体节点，主要提供以下两类能力：  完全自定义节点能力：提供完整的自定义能力，包括自定义测量、布局以及绘制，支持节点的动态增加、删除，并且可以为节点设置通用属性和事件。适用于不带渲染引擎，但需要依赖系统的布局、事件、动画及渲染等能力，实现语言为高级语言的三方框架对接。  组件代理节点能力：提供声明式组件的代理能力，提供遍历节点树的能力，通过FrameNode可以遍历整个组件树，并通过节点访问组件的信息或者注册额外的事件监听回调。适用于结合无感监听的接口实现打点、广告SDK、中台DFX等业务。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#typedframenode12",
              children: "TypedFrameNode"
            }), "：通过typeNode提供的接口，可创建具体类型的FrameNode能力。创建出具体组件类型的FrameNode，可通过FrameNode的接口，进行自定义的挂载，生成一棵自定义的组件树。适用于高效对接高级语言开发的动态化框架。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "自定义节点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "渲染节点"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-rendernode",
              children: "RenderNode"
            }), "：表示轻量级的渲染节点RenderNode，仅提供了设置渲染相关属性、自定义绘制内容以及节点操作的能力。可以向三方框架提供基础的渲染、动画能力。适用于不带渲染引擎，只依赖系统的基础动画、渲染的三方框架对接。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "自定义节点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统组件混合"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode",
              children: "BuilderNode"
            }), "：BuilderNode对象提供了能够创建、更新系统组件以及组件树的能力。用于在自定义的FrameNode或RenderNode树结构中嵌入声明式的组件结构，实现系统组件与自定义节点的混合显示。另外还提供了对Builder内容进行纹理导出的能力，可实现在XComponent创建的渲染环境中进行同层渲染显示。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "自定义渲染"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "独立渲染"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-add-component/napi-xcomponent-guidelines",
              children: "XComponent"
            }), "：XComponent的“surface”模式会暴露出NativeWindow，通过NDK接口配合NativeWindow可创建独立的渲染环境，将EGL/OpenGLES生成的显示数据或其它方式解码生成的媒体流数据写入到NativeWindow中，不依赖ArkUI框架提供的其它组件能力即可进行自定义的渲染。适用于自带渲染引擎的框架，如游戏引擎、地图、相机等场景。"]
          })]
        })]
      })]
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