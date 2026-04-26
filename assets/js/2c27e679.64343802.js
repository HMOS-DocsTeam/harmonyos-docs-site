"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["663899"], {
469375(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_layout_development_arkts_layout_development_overview_arkts_layout_development_overview_md_2c2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-layout-development-arkts-layout-development-overview-arkts-layout-development-overview-md-2c2.json
var site_docs_arkui_arkts_ui_development_arkts_layout_development_arkts_layout_development_overview_arkts_layout_development_overview_md_2c2_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-layout-development/arkts-layout-development-overview/arkts-layout-development-overview","title":"布局概述","description":"组件按照布局的要求依次排列，构成应用的页面。在声明式UI中，所有的页面都是由自定义组件构成，开发者可以根据自己的需求，选择合适的布局进行页面开发。","source":"@site/docs/arkui/arkts-ui-development/arkts-layout-development/arkts-layout-development-overview/arkts-layout-development-overview.md","sourceDirName":"arkui/arkts-ui-development/arkts-layout-development/arkts-layout-development-overview","slug":"/arkui/arkts-ui-development/arkts-layout-development/arkts-layout-development-overview/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-layout-development/arkts-layout-development-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"布局概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Router切换Navigation","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-router-to-navigation/"},"next":{"title":"线性布局 (Row/Column)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-linear/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-layout-development/arkts-layout-development-overview/arkts-layout-development-overview.md


const frontMatter = {
	title: '布局概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '布局概述';

const assets = {

};



const toc = [{
  "value": "布局结构",
  "id": "布局结构",
  "level": 2
}, {
  "value": "布局元素的组成",
  "id": "布局元素的组成",
  "level": 2
}, {
  "value": "如何选择布局",
  "id": "如何选择布局",
  "level": 2
}, {
  "value": "布局位置",
  "id": "布局位置",
  "level": 2
}, {
  "value": "对子元素的约束",
  "id": "对子元素的约束",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
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
        id: "布局概述",
        children: "布局概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件按照布局的要求依次排列，构成应用的页面。在声明式UI中，所有的页面都是由自定义组件构成，开发者可以根据自己的需求，选择合适的布局进行页面开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "布局指用特定的组件或者属性来管理用户页面所放置UI组件的大小和位置。在实际的开发过程中，需要遵守以下流程保证整体的布局效果："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确定页面的布局结构。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "分析页面中的元素构成。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "选用适合的布局容器组件或属性控制页面中各个元素的位置和大小。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "布局结构",
      children: "布局结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "布局通常为分层结构，一个常见的页面结构如下所示："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 常见页面结构图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(67938)/* ["default"] */.A) + "",
        width: "440",
        height: "329"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为实现上述效果，开发者需要在页面中声明对应的元素。其中，Page表示页面的根节点，Column/Row等元素为系统组件。针对不同的页面结构，ArkUI提供了不同的布局组件来帮助开发者实现对应布局的效果，例如Row用于实现线性布局。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "布局元素的组成",
      children: "布局元素的组成"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "布局相关的容器组件可形成对应的布局效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 布局元素组成图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(805846)/* ["default"] */.A) + "",
        width: "380",
        height: "298"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["组件区域（蓝色方块）：组件区域表示组件的大小，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#width",
          children: "width"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#height",
          children: "height"
        }), "属性用于设置组件区域的大小。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["组件内容区（黄色方块）：组件内容区大小为组件区域大小减去组件的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-border/ts-universal-attributes-border#border",
          children: "border"
        }), "值，组件内容区大小会作为组件内容（或者子组件）进行大小测算时的布局测算限制。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["组件内容（绿色方块）：组件内容本身占用的大小，比如文本内容占用的大小。组件内容和组件内容区不一定匹配，比如设置了固定的width和height，此时组件内容的大小就是设置的width和height减去", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#padding",
          children: "padding"
        }), "和border值，但文本内容则是通过文本布局引擎测算后得到的大小，可能出现文本真实大小小于设置的组件内容区大小，也就是文本内容无法占满文本组件提供的内容区大小。当组件内容和组件内容区大小不一致时，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location#align",
          children: "align"
        }), "属性生效，定义组件内容在组件内容区的对齐方式，如居中对齐。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["组件布局边界（虚线部分）：组件通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#margin",
          children: "margin"
        }), "属性设置外边距时，组件布局边界就是组件区域加上margin的大小。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何选择布局",
      children: "如何选择布局"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明式UI提供了以下几种常见布局，开发者可根据实际应用场景选择合适的布局进行页面开发。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "布局"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "应用场景"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-linear",
              children: "线性布局"
            }), "（Row、Column）"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果布局内子元素超过1个时，且能够以某种方式线性排列时优先考虑此布局。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-stack-layout",
              children: "层叠布局"
            }), "（Stack）"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["组件需要有堆叠效果时优先考虑此布局。层叠布局的堆叠效果不会占用或影响其他同容器内子组件的布局空间。例如", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/arkui-declarative-comp-dep/ts-container-panel/ts-container-panel",
              children: "Panel"
            }), "作为子组件弹出时将其他组件覆盖更为合理，则优先考虑在外层使用堆叠布局。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-flex-layout",
              children: "弹性布局"
            }), "（Flex）"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弹性布局是与线性布局类似的布局方式。区别在于弹性布局默认能够使子组件压缩或拉伸。在子组件需要计算拉伸或压缩比例时优先使用此布局，可使得多个容器内子组件能有更好的视觉上的填充效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-relative-layout",
              children: "相对布局"
            }), "（RelativeContainer）"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相对布局是在二维空间中的布局方式，不需要遵循线性布局的规则，布局方式更为自由。通过在子组件上设置锚点规则（AlignRules）使子组件能够将自己在横轴、纵轴中的位置与容器或容器内其他子组件的位置对齐。设置的锚点规则可以天然支持子元素压缩、拉伸、堆叠或形成多行效果。在页面元素分布复杂或通过线性布局会使容器嵌套层数过深时推荐使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-grid-layout",
              children: "栅格布局"
            }), "（GridRow、GridCol）"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "栅格是多设备场景下通用的辅助定位工具，可将空间分割为有规律的栅格。栅格不同于网格布局固定的空间划分，可以实现不同设备下不同的布局，空间划分更随心所欲，从而显著降低适配不同屏幕尺寸的设计及开发成本，使得整体设计和开发流程更有秩序和节奏感，同时也保证多设备上应用显示的协调性和一致性，提升用户体验。推荐内容相同但布局不同时使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-navigation-tabs",
              children: "选项卡"
            }), "（Tabs）"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选项卡可以在一个页面内快速实现视图内容的切换，一方面提升查找信息的效率，另一方面精简用户单次获取到的信息量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "布局位置",
      children: "布局位置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "position、offset等属性影响了布局容器相对于自身或其他组件的位置。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "定位能力"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "使用场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "实现方式"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "绝对定位"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对于不同尺寸的设备，使用绝对定位的适应性会比较差，在屏幕的适配上有缺陷。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location#position",
              children: "position"
            }), "实现绝对定位，设置元素左上角相对于父容器左上角偏移位置。在布局容器中，设置该属性不影响父容器布局，仅在绘制时进行位置调整。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "相对定位"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相对定位不脱离文档流，即原位置依然保留，不影响元素本身的特性，仅相对于原位置进行偏移。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location#offset",
              children: "offset"
            }), "可以实现相对定位，设置元素相对于自身的偏移量。设置该属性，不影响父容器布局，仅在绘制时进行位置调整。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "对子元素的约束",
      children: "对子元素的约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "拉伸：容器组件尺寸发生变化时，增加或减小的空间全部分配给容器组件内指定区域。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-flex-layout/ts-universal-attributes-flex-layout#flexgrow",
            children: "flexGrow"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-flex-layout/ts-universal-attributes-flex-layout#flexshrink",
            children: "flexShrink"
          }), "属性："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "flexGrow基于父容器的剩余空间分配来控制组件拉伸。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "flexShrink设置父容器的压缩尺寸来控制组件压缩。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "缩放：子组件的宽高按照预设的比例，随容器组件发生变化，且变化过程中子组件的宽高比不变。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-layout-constraints/ts-universal-attributes-layout-constraints#aspectratio",
            children: "aspectRatio"
          }), "属性指定当前组件的宽高比来控制缩放，公式为：aspectRatio=width/height。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "占比：子组件的宽高按照预设的比例，随祖先容器组件发生变化。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "基于通用属性的两种实现方式："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "子组件的宽高设置为百分比。"
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "父组件与祖先组件宽高设置情况"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "子组件百分比"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "父组件设置宽或高 & 祖先组件未指定父组件宽或高"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "参考父组件的宽高"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "父组件设置宽或高 & 祖先组件指定父组件宽或高"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "参考祖先组件指定的父组件宽高"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "父组件未设置宽或高 & 祖先组件指定父组件宽或高"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "参考祖先组件指定的父组件宽高"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "父组件未设置宽或高 & 祖先组件未指定父组件宽或高"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "参考父组件的百分比参照。由于父组件未指定宽高，该百分比参照传递自祖先组件"
                  })]
                })]
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#layoutweight",
                children: "layoutWeight"
              }), "属性，使得子元素自适应占满剩余空间。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "隐藏：隐藏能力是指容器组件内的子组件，按照其预设的显示优先级，随容器组件尺寸变化显示或隐藏，其中相同显示优先级的子组件同时显示或隐藏。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-layout-constraints/ts-universal-attributes-layout-constraints#displaypriority",
            children: "displayPriority"
          }), "属性来控制组件的显示和隐藏。"]
        }), "\n"]
      }), "\n"]
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
805846(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798044-58d56b0cfe1fdc543197bcba353874b8.png");

},
67938(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477693-b64c9054d342962a17466d2d1cf7c85f.png");

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