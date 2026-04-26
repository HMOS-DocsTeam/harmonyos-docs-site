"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["616399"], {
677532(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_layout_development_arkts_build_layout_arkts_layout_development_relative_layout_arkts_layout_development_relative_layout_md_cf4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-layout-development-arkts-build-layout-arkts-layout-development-relative-layout-arkts-layout-development-relative-layout-md-cf4.json
var site_docs_arkui_arkts_ui_development_arkts_layout_development_arkts_build_layout_arkts_layout_development_relative_layout_arkts_layout_development_relative_layout_md_cf4_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-relative-layout/arkts-layout-development-relative-layout","title":"相对布局 (RelativeContainer)","description":"概述","source":"@site/docs/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-relative-layout/arkts-layout-development-relative-layout.md","sourceDirName":"arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-relative-layout","slug":"/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-relative-layout/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-relative-layout/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"相对布局 (RelativeContainer)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-relative-layout","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"弹性布局 (Flex)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-flex-layout/"},"next":{"title":"栅格布局 (GridRow/GridCol)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-grid-layout/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-relative-layout/arkts-layout-development-relative-layout.md


const frontMatter = {
	title: '相对布局 (RelativeContainer)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-relative-layout',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '相对布局 (RelativeContainer)';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "设置依赖关系",
  "id": "设置依赖关系",
  "level": 2
}, {
  "value": "设置参考边界",
  "id": "设置参考边界",
  "level": 3
}, {
  "value": "设置锚点",
  "id": "设置锚点",
  "level": 3
}, {
  "value": "设置相对于锚点的对齐位置",
  "id": "设置相对于锚点的对齐位置",
  "level": 3
}, {
  "value": "子组件位置偏移",
  "id": "子组件位置偏移",
  "level": 3
}, {
  "value": "多种组件的对齐布局",
  "id": "多种组件的对齐布局",
  "level": 2
}, {
  "value": "组件尺寸",
  "id": "组件尺寸",
  "level": 2
}, {
  "value": "多个组件形成链",
  "id": "多个组件形成链",
  "level": 2
}, {
  "value": "使用辅助线辅助定位子组件",
  "id": "使用辅助线辅助定位子组件",
  "level": 2
}, {
  "value": "多个组件的屏障",
  "id": "多个组件的屏障",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "相对布局-relativecontainer",
        children: "相对布局 (RelativeContainer)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用的开发过程中，经常需要设计复杂界面，此时涉及到多个相同或不同组件之间的嵌套。如果布局组件嵌套深度过深，或者嵌套组件数过多，会带来额外的开销。如果在布局的方式上进行优化，就可以有效的提升性能，减少时间开销。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RelativeContainer是一种采用相对布局的容器，支持容器内部的子元素设置相对位置关系，适用于处理界面复杂的场景，对多个子元素进行对齐和排列。子元素可以指定兄弟元素或父容器作为锚点，基于锚点进行相对位置布局。在使用锚点时，需注意子元素的相对位置关系，以避免出现错位或遮挡的情况。下图展示了一个 RelativeContainer的概念图，图中的虚线表示位置的依赖关系。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 相对布局示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(797711)/* ["default"] */.A) + "",
        width: "410",
        height: "247"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "子元素并不完全是上图中的依赖关系。比如，Item4可以以Item2为依赖锚点，也可以以RelativeContainer父容器为依赖锚点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参考边界：设置当前组件的哪个边界对齐到锚点。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "锚点：通过锚点设置当前元素基于哪个元素确定位置。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对齐方式：通过对齐方式，设置当前元素是基于锚点的上中下对齐，还是基于锚点的左中右对齐。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "链：将一系列组件以首尾相连的方式对齐，可以形成一条链。通过设置链的模式，可以指定链上元素的排列方式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "辅助线：辅助线是在容器内虚拟出的额外水平或垂直锚点，便于统一对齐至某个偏移位置。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "屏障：屏障是指容器内一组指定组件在特定方向上的共同最远边界，例如，一组组件下方的屏障，是指这些组件底部边缘中最底部的那个边界。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置依赖关系",
      children: "设置依赖关系"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置参考边界",
      children: "设置参考边界"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前组件的哪个边界对齐到锚点。容器内子组件的参考边界区分水平方向和垂直方向。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在水平方向上，可以按照起始（left）、居中（middle）或尾端（right）的组件边界与锚点对齐。当设置三个边界时，仅起始（left）和居中（middle）的边界设置生效。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(734265)/* ["default"] */.A) + "",
            width: "1792",
            height: "365"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在垂直方向上，可以设置组件边界与锚点对齐，具体包括顶部（top）、居中（center）和底部（bottom）。当设置三个边界时，仅顶部（top）和居中（center）生效。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(249431)/* ["default"] */.A) + "",
            width: "1790",
            height: "363"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置锚点",
      children: "设置锚点"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "锚点设置涉及子元素相对于其父元素或兄弟元素的位置依赖关系。具体而言，子元素可以将其位置锚定到相对布局容器（RelativeContainer）、辅助线（guideline）、屏障（barrier）或其他子元素上。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了准确定义锚点，RelativeContainer的子元素必须拥有唯一的组件标识（id），用于指定锚点信息。父元素RelativeContainer的标识默认为“__container__”，其他子元素的组件标识（id）则通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-component-id/ts-universal-attributes-component-id#id",
        children: "id"
      }), "属性设置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(884043)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "未设置组件标识（id）的组件虽可显示，但无法被其他组件引用为锚点。相对布局容器会为其拼接组件标识，但组件标识（id）的规律无法被应用感知。辅助线（guideline）与屏障（barrier）的组件标识（id）需确保唯一，避免与任何组件冲突。若有重复，遵循组件 > guideline > barrier 的优先级。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "组件间设置锚点时应避免形成依赖循环（组件之间设置链除外），依赖循环将导致子组件缺乏定位基准，最终无法绘制。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RelativeContainer父组件为锚点，__container__代表父容器的组件标识（id）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let alignRus: Record<string, Record<string, string | VerticalAlign | HorizontalAlign>> = {\n  'top': { 'anchor': '__container__', 'align': VerticalAlign.Top },\n  'left': { 'anchor': '__container__', 'align': HorizontalAlign.Start }\n}\nlet alignRue: Record<string, Record<string, string | VerticalAlign | HorizontalAlign>> = {\n  'top': { 'anchor': '__container__', 'align': VerticalAlign.Top },\n  'right': { 'anchor': '__container__', 'align': HorizontalAlign.End }\n}\nlet marginLeft: Record<string, number> = { 'left': 20 }\nlet bwc: Record<string, number | string> = { 'width': 2, 'color': '#6699FF' }\n\n@Entry\n@Component\nstruct ParentRefRelativeContainer {\n  build() {\n    RelativeContainer() {\n      Row() {\n        Text('row1')\n      }\n      .justifyContent(FlexAlign.Center)\n      .width(100)\n      .height(100)\n      .backgroundColor('#a3cf62')\n      .alignRules(alignRus)\n      .id('row1')\n\n      Row() {\n        Text('row2')\n      }\n      .justifyContent(FlexAlign.Center)\n      .width(100)\n      .height(100)\n      .backgroundColor('#00ae9d')\n      .alignRules(alignRue)\n      .id('row2')\n    }.width(300).height(300)\n    .margin(marginLeft)\n    .border(bwc)\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(79529)/* ["default"] */.A) + "",
            width: "319",
            height: "320"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以兄弟元素为锚点。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let alignRus001: Record<string, Record<string, string | VerticalAlign | HorizontalAlign>> = {\n  'top': { 'anchor': '__container__', 'align': VerticalAlign.Top },\n  'left': { 'anchor': '__container__', 'align': HorizontalAlign.Start }\n}\nlet relConB: Record<string, Record<string, string | VerticalAlign | HorizontalAlign>> = {\n  'top': { 'anchor': 'row1', 'align': VerticalAlign.Bottom },\n  'left': { 'anchor': 'row1', 'align': HorizontalAlign.Start }\n}\nlet marginLeft001: Record<string, number> = { 'left': 20 }\nlet bwc001: Record<string, number | string> = { 'width': 2, 'color': '#6699FF' }\n\n@Entry\n@Component\nstruct SiblingRefRelativeContainer {\n  build() {\n    RelativeContainer() {\n      Row() {\n        Text('row1')\n      }\n      .justifyContent(FlexAlign.Center)\n      .width(100)\n      .height(100)\n      .backgroundColor('#00ae9d')\n      .alignRules(alignRus001)\n      .id('row1')\n\n      Row() {\n        Text('row2')\n      }\n      .justifyContent(FlexAlign.Center)\n      .width(100)\n      .height(100)\n      .backgroundColor('#a3cf62')\n      .alignRules(relConB)\n      .id('row2')\n    }.width(300).height(300)\n    .margin(marginLeft001)\n    .border(bwc001)\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(383936)/* ["default"] */.A) + "",
            width: "323",
            height: "322"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "子组件锚点可以任意选择，但需注意不要相互依赖。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct ChildRefRelativeContainer {\n  build() {\n    Row() {\n      RelativeContainer() {\n        Row() {\n          Text('row1')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(100)\n        .height(100)\n        .backgroundColor('#a3cf62')\n        .alignRules({\n          top: { anchor: '__container__', align: VerticalAlign.Top },\n          left: { anchor: '__container__', align: HorizontalAlign.Start }\n        })\n        .id('row1')\n\n        Row() {\n          Text('row2')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(100)\n        .backgroundColor('#00ae9d')\n        .alignRules({\n          top: { anchor: '__container__', align: VerticalAlign.Top },\n          right: { anchor: '__container__', align: HorizontalAlign.End },\n          bottom: { anchor: 'row1', align: VerticalAlign.Center },\n        })\n        .id('row2')\n\n        Row() {\n          Text('row3')\n        }\n        .justifyContent(FlexAlign.Center)\n        .height(100)\n        .backgroundColor('#0a59f7')\n        .alignRules({\n          top: { anchor: 'row1', align: VerticalAlign.Bottom },\n          left: { anchor: 'row1', align: HorizontalAlign.Start },\n          right: { anchor: 'row2', align: HorizontalAlign.Start }\n        })\n        .id('row3')\n\n        Row() {\n          Text('row4')\n        }.justifyContent(FlexAlign.Center)\n        .backgroundColor('#2ca9e0')\n        .alignRules({\n          top: { anchor: 'row3', align: VerticalAlign.Bottom },\n          left: { anchor: 'row1', align: HorizontalAlign.Center },\n          right: { anchor: 'row2', align: HorizontalAlign.End },\n          bottom: { anchor: '__container__', align: VerticalAlign.Bottom }\n        })\n        .id('row4')\n      }\n      .width(300).height(300)\n      .margin({ left: 50 })\n      .border({ width: 2, color: '#6699FF' })\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(778879)/* ["default"] */.A) + "",
            width: "327",
            height: "313"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置相对于锚点的对齐位置",
      children: "设置相对于锚点的对齐位置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置了锚点之后，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location#alignrules9",
        children: "alignRules"
      }), "属性的align设置相对于锚点的对齐位置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在水平方向上，对齐位置可以设置为HorizontalAlign.Start、HorizontalAlign.Center、HorizontalAlign.End。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(654209)/* ["default"] */.A) + "",
        width: "1792",
        height: "365"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在垂直方向上，对齐位置可以设置为VerticalAlign.Top、VerticalAlign.Center、VerticalAlign.Bottom。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(105569)/* ["default"] */.A) + "",
        width: "1792",
        height: "363"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "子组件位置偏移",
      children: "子组件位置偏移"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["子组件经过相对位置对齐后，可能尚未达到目标位置。开发者可根据需要设置额外偏移（offset）。当使用offset调整位置的组件作为锚点时，对齐位置为设置offset之前的位置。从API Version 11开始，新增了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#bias%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "Bias"
      }), "对象，建议API Version 11及以后的版本使用bias来设置额外偏移。使用bias的示例可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer#%E7%A4%BA%E4%BE%8B4%E8%AE%BE%E7%BD%AE%E5%81%8F%E7%A7%BB",
        children: "示例4（设置偏移）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ChildComponentOffsetExample {\n  build() {\n    Row() {\n      RelativeContainer() {\n        Row() {\n          Text('row1')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(100)\n        .height(100)\n        .backgroundColor('#a3cf62')\n        .alignRules({\n          top: { anchor: '__container__', align: VerticalAlign.Top },\n          left: { anchor: '__container__', align: HorizontalAlign.Start }\n        })\n        .id('row1')\n\n        Row() {\n          Text('row2')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(100)\n        .backgroundColor('#00ae9d')\n        .alignRules({\n          top: { anchor: '__container__', align: VerticalAlign.Top },\n          right: { anchor: '__container__', align: HorizontalAlign.End },\n          bottom: { anchor: 'row1', align: VerticalAlign.Center },\n        })\n        .offset({\n          x: -40,\n          y: -20\n        })\n        .id('row2')\n\n        Row() {\n          Text('row3')\n        }\n        .justifyContent(FlexAlign.Center)\n        .height(100)\n        .backgroundColor('#0a59f7')\n        .alignRules({\n          top: { anchor: 'row1', align: VerticalAlign.Bottom },\n          left: { anchor: 'row1', align: HorizontalAlign.End },\n          right: { anchor: 'row2', align: HorizontalAlign.Start }\n        })\n        .offset({\n          x: -10,\n          y: -20\n        })\n        .id('row3')\n\n        Row() {\n          Text('row4')\n        }\n        .justifyContent(FlexAlign.Center)\n        .backgroundColor('#2ca9e0')\n        .alignRules({\n          top: { anchor: 'row3', align: VerticalAlign.Bottom },\n          bottom: { anchor: '__container__', align: VerticalAlign.Bottom },\n          left: { anchor: '__container__', align: HorizontalAlign.Start },\n          right: { anchor: 'row1', align: HorizontalAlign.End }\n        })\n        .offset({\n          x: -10,\n          y: -30\n        })\n        .id('row4')\n\n        Row() {\n          Text('row5')\n        }\n        .justifyContent(FlexAlign.Center)\n        .backgroundColor('#30c9f7')\n        .alignRules({\n          top: { anchor: 'row3', align: VerticalAlign.Bottom },\n          bottom: { anchor: '__container__', align: VerticalAlign.Bottom },\n          left: { anchor: 'row2', align: HorizontalAlign.Start },\n          right: { anchor: 'row2', align: HorizontalAlign.End }\n        })\n        .offset({\n          x: 10,\n          y: 20\n        })\n        .id('row5')\n\n        Row() {\n          Text('row6')\n        }\n        .justifyContent(FlexAlign.Center)\n        .backgroundColor('#ff33ffb5')\n        .alignRules({\n          top: { anchor: 'row3', align: VerticalAlign.Bottom },\n          bottom: { anchor: 'row4', align: VerticalAlign.Bottom },\n          left: { anchor: 'row3', align: HorizontalAlign.Start },\n          right: { anchor: 'row3', align: HorizontalAlign.End }\n        })\n        .offset({\n          x: -15,\n          y: 10\n        })\n        .backgroundImagePosition(Alignment.Bottom)\n        .backgroundImageSize(ImageSize.Cover)\n        .id('row6')\n      }\n      .width(300).height(300)\n      .margin({ left: 50 })\n      .border({ width: 2, color: '#6699FF' })\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(248516)/* ["default"] */.A) + "",
        width: "330",
        height: "349"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多种组件的对齐布局",
      children: "多种组件的对齐布局"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Row、Column、Flex、Stack等多种布局组件，可按照RelativeContainer组件规则进行对齐排布。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct RelativeContainerExample {\n  build() {\n    Row() {\n\n      RelativeContainer() {\n        Row()\n          .width(100)\n          .height(100)\n          .backgroundColor('#a3cf62')\n          .alignRules({\n            top: { anchor: '__container__', align: VerticalAlign.Top },\n            left: { anchor: '__container__', align: HorizontalAlign.Start }\n          })\n          .id('row1')\n\n        Column()\n          .width('50%')\n          .height(30)\n          .backgroundColor('#00ae9d')\n          .alignRules({\n            top: { anchor: '__container__', align: VerticalAlign.Top },\n            left: { anchor: '__container__', align: HorizontalAlign.Center }\n          })\n          .id('row2')\n\n        Flex({ direction: FlexDirection.Row }) {\n          Text('1').width('20%').height(50).backgroundColor('#0a59f7')\n          Text('2').width('20%').height(50).backgroundColor('#2ca9e0')\n          Text('3').width('20%').height(50).backgroundColor('#0a59f7')\n          Text('4').width('20%').height(50).backgroundColor('#2ca9e0')\n        }\n        .padding(10)\n        .backgroundColor('#30c9f7')\n        .alignRules({\n          top: { anchor: 'row2', align: VerticalAlign.Bottom },\n          left: { anchor: '__container__', align: HorizontalAlign.Start },\n          bottom: { anchor: '__container__', align: VerticalAlign.Center },\n          right: { anchor: 'row2', align: HorizontalAlign.Center }\n        })\n        .id('row3')\n\n        Stack({ alignContent: Alignment.Bottom }) {\n          Text('First child, show in bottom')\n            .width('90%')\n            .height('100%')\n            .backgroundColor('#a3cf62')\n            .align(Alignment.Top)\n          Text('Second child, show in top').width('70%').height('60%').backgroundColor('#00ae9d').align(Alignment.Top)\n        }\n        .margin({ top: 5 })\n        .alignRules({\n          top: { anchor: 'row3', align: VerticalAlign.Bottom },\n          left: { anchor: '__container__', align: HorizontalAlign.Start },\n          bottom: { anchor: '__container__', align: VerticalAlign.Bottom },\n          right: { anchor: 'row3', align: HorizontalAlign.End }\n        })\n        .id('row4')\n\n      }\n      .width(300).height(300)\n      .margin({ left: 50 })\n      .border({ width: 2, color: '#6699FF' })\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(674228)/* ["default"] */.A) + "",
        width: "314",
        height: "318"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "组件尺寸",
      children: "组件尺寸"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当同时存在前端页面设置的子组件尺寸和相对布局规则时，子组件的绘制尺寸依据约束规则确定。从API Version 11开始，此规则有所变化，子组件自身设置的尺寸优先级高于相对布局规则中的对齐锚点尺寸。因此，若要使子组件与锚点严格对齐，应仅使用alignRules，避免使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size",
        children: "尺寸设置"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(32503)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "根据约束条件和子组件自身的size属性无法确定子组件的大小，此时，不绘制该子组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在同一方向上设置两个或更多锚点时，若这些锚点的位置顺序有误，该子组件将被视为大小为0而不予绘制。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct RelativeAlignRulesExample {\n  build() {\n    Row() {\n      RelativeContainer() {\n        Row() {\n          Text('row1')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(100)\n        .height(100)\n        .backgroundColor('#a3cf62')\n        .alignRules({\n          top: { anchor: '__container__', align: VerticalAlign.Top },\n          left: { anchor: '__container__', align: HorizontalAlign.Start }\n        })\n        .id('row1')\n\n        Row() {\n          Text('row2')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(100)\n        .backgroundColor('#00ae9d')\n        .alignRules({\n          top: { anchor: '__container__', align: VerticalAlign.Top },\n          right: { anchor: '__container__', align: HorizontalAlign.End },\n          bottom: { anchor: 'row1', align: VerticalAlign.Center },\n        })\n        .id('row2')\n\n        Row() {\n          Text('row3')\n        }\n        .justifyContent(FlexAlign.Center)\n        .height(100)\n        .backgroundColor('#0a59f7')\n        .alignRules({\n          top: { anchor: 'row1', align: VerticalAlign.Bottom },\n          left: { anchor: 'row1', align: HorizontalAlign.End },\n          right: { anchor: 'row2', align: HorizontalAlign.Start }\n        })\n        .id('row3')\n\n        Row() {\n          Text('row4')\n        }.justifyContent(FlexAlign.Center)\n        .backgroundColor('#2ca9e0')\n        .alignRules({\n          top: { anchor: 'row3', align: VerticalAlign.Bottom },\n          bottom: { anchor: '__container__', align: VerticalAlign.Bottom },\n          left: { anchor: '__container__', align: HorizontalAlign.Start },\n          right: { anchor: 'row1', align: HorizontalAlign.End }\n        })\n        .id('row4')\n\n        Row() {\n          Text('row5')\n        }.justifyContent(FlexAlign.Center)\n        .backgroundColor('#30c9f7')\n        .alignRules({\n          top: { anchor: 'row3', align: VerticalAlign.Bottom },\n          bottom: { anchor: '__container__', align: VerticalAlign.Bottom },\n          left: { anchor: 'row2', align: HorizontalAlign.Start },\n          right: { anchor: 'row2', align: HorizontalAlign.End }\n        })\n        .id('row5')\n\n        Row() {\n          Text('row6')\n        }\n        .justifyContent(FlexAlign.Center)\n        .backgroundColor('#ff33ffb5')\n        .alignRules({\n          top: { anchor: 'row3', align: VerticalAlign.Bottom },\n          bottom: { anchor: 'row4', align: VerticalAlign.Bottom },\n          left: { anchor: 'row3', align: HorizontalAlign.Start },\n          right: { anchor: 'row3', align: HorizontalAlign.End }\n        })\n        .id('row6')\n        .backgroundImagePosition(Alignment.Bottom)\n        .backgroundImageSize(ImageSize.Cover)\n      }\n      .width(300).height(300)\n      .margin({ left: 50 })\n      .border({ width: 2, color: '#6699FF' })\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(39312)/* ["default"] */.A) + "",
        width: "312",
        height: "309"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多个组件形成链",
      children: "多个组件形成链"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "链的形成依赖于组件之间的关联关系。以组件A和组件B构成的最简水平链为例，其依赖关系为：锚点1 <-- 组件A <---> 组件B --> 锚点2，即A具有left锚点，B具有right锚点，同时A的right锚点与B的HorizontalAlign.Start对齐，B的left锚点与A的HorizontalAlign.End对齐。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["链的方向和格式在链头组件的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location#chainmode12",
          children: "chainMode"
        }), "接口中声明；链内元素的bias属性全部失效，链头元素的bias属性作为整个链的bias生效。链头是指在满足成链规则时链的第一个组件（在水平方向上，从左边开始，镜像语言中从右边开始；在垂直方向上，从上边开始）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果链内所有元素的size超出链的锚点约束，超出部分将被均匀分配到链的两侧。在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location#chainstyle12",
          children: "PACKED"
        }), "链中，可以通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#bias%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
          children: "Bias"
        }), "设置超出部分的分布。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在以下示例代码中，通过alignRules和chainMode将九个在容器内的Row组件分为三组水平链式排列。组件row1、组件row2和组件row3顶部对齐，水平方向成SPREAD链，链内组件在锚点间均匀分布。组件row4、组件row5、组件row6垂直方向基于容器居中，水平方向成SPREAD_INSIDE链，链内除首尾2个组件对齐锚点外，其他组件在链中均匀分布。组件row7、组件row8、组件row9底部对齐，水平方向组成PACKED链，链内组件无间隙。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct RelativeChainModeExample {\n  build() {\n    Row() {\n      RelativeContainer() {\n        Row() {\n          Text('row1')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(80)\n        .height(80)\n        .backgroundColor('#a3cf62')\n        .alignRules({\n          left: { anchor: '__container__', align: HorizontalAlign.Start },\n          right: { anchor: 'row2', align: HorizontalAlign.Start },\n          top: { anchor: '__container__', align: VerticalAlign.Top }\n        })\n        .id('row1')\n        .chainMode(Axis.Horizontal, ChainStyle.SPREAD)\n\n        Row() {\n          Text('row2')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(80)\n        .height(80)\n        .backgroundColor('#00ae9d')\n        .alignRules({\n          left: { anchor: 'row1', align: HorizontalAlign.End },\n          right: { anchor: 'row3', align: HorizontalAlign.Start },\n          top: { anchor: 'row1', align: VerticalAlign.Top }\n        })\n        .id('row2')\n\n        Row() {\n          Text('row3')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(80)\n        .height(80)\n        .backgroundColor('#0a59f7')\n        .alignRules({\n          left: { anchor: 'row2', align: HorizontalAlign.End },\n          right: { anchor: '__container__', align: HorizontalAlign.End },\n          top: { anchor: 'row1', align: VerticalAlign.Top }\n        })\n        .id('row3')\n\n        Row() {\n          Text('row4')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(80)\n        .height(80)\n        .backgroundColor('#a3cf62')\n        .alignRules({\n          left: { anchor: '__container__', align: HorizontalAlign.Start },\n          right: { anchor: 'row5', align: HorizontalAlign.Start },\n          center: { anchor: '__container__', align: VerticalAlign.Center }\n        })\n        .id('row4')\n        .chainMode(Axis.Horizontal, ChainStyle.SPREAD_INSIDE)\n\n        Row() {\n          Text('row5')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(80)\n        .height(80)\n        .backgroundColor('#00ae9d')\n        .alignRules({\n          left: { anchor: 'row4', align: HorizontalAlign.End },\n          right: { anchor: 'row6', align: HorizontalAlign.Start },\n          top: { anchor: 'row4', align: VerticalAlign.Top }\n        })\n        .id('row5')\n\n        Row() {\n          Text('row6')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(80)\n        .height(80)\n        .backgroundColor('#0a59f7')\n        .alignRules({\n          left: { anchor: 'row5', align: HorizontalAlign.End },\n          right: { anchor: '__container__', align: HorizontalAlign.End },\n          top: { anchor: 'row4', align: VerticalAlign.Top }\n        })\n        .id('row6')\n\n        Row() {\n          Text('row7')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(80)\n        .height(80)\n        .backgroundColor('#a3cf62')\n        .alignRules({\n          left: { anchor: '__container__', align: HorizontalAlign.Start },\n          right: { anchor: 'row8', align: HorizontalAlign.Start },\n          bottom: { anchor: '__container__', align: VerticalAlign.Bottom }\n        })\n        .id('row7')\n        .chainMode(Axis.Horizontal, ChainStyle.PACKED)\n\n        Row() {\n          Text('row8')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(80)\n        .height(80)\n        .backgroundColor('#00ae9d')\n        .alignRules({\n          left: { anchor: 'row7', align: HorizontalAlign.End },\n          right: { anchor: 'row9', align: HorizontalAlign.Start },\n          top: { anchor: 'row7', align: VerticalAlign.Top }\n        })\n        .id('row8')\n\n        Row() {\n          Text('row9')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(80)\n        .height(80)\n        .backgroundColor('#0a59f7')\n        .alignRules({\n          left: { anchor: 'row8', align: HorizontalAlign.End },\n          right: { anchor: '__container__', align: HorizontalAlign.End },\n          top: { anchor: 'row7', align: VerticalAlign.Top }\n        })\n        .id('row9')\n      }\n      .width(300).height(300)\n      .margin({ left: 50 })\n      .border({ width: 2, color: '#6699FF' })\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(513064)/* ["default"] */.A) + "",
        width: "315",
        height: "321"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用辅助线辅助定位子组件",
      children: "使用辅助线辅助定位子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "辅助线（guideLine）是在容器内虚拟出的额外水平或垂直锚点，便于统一对齐到特定偏移位置，从而避免为每个组件单独编写重复的偏移设置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "辅助线分为垂直（Vertical）和水平（Horizontal）两种：垂直辅助线通过start和end属性指定其距离容器左侧和右侧的距离；水平辅助线通过start和end属性指定其距离容器顶部和底部的距离。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果同时设置了start和end，当两者规则冲突时，仅start属性生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若容器在某个方向的尺寸被声明为\"auto\"，则该方向上的guideLine位置只能使用start属性声明（不允许使用百分比）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在以下示例代码中，定义了一条垂直辅助线guideline1，距离容器左侧50vp，以及另一条水平辅助线guideline2，距离容器顶部50vp。组件row1通过这两条辅助线来定位自身位置，无需设置bias。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct RelativeGuideLineExample {\n  build() {\n    Row() {\n      RelativeContainer() {\n        Row()\n          .width(100)\n          .height(100)\n          .backgroundColor('#a3cf62')\n          .alignRules({\n            left: { anchor: 'guideline1', align: HorizontalAlign.End },\n            top: { anchor: 'guideline2', align: VerticalAlign.Top }\n          })\n          .id('row1')\n      }\n      .width(300)\n      .height(300)\n      .margin({ left: 50 })\n      .border({ width: 2, color: '#6699FF' })\n      .guideLine([{ id: 'guideline1', direction: Axis.Vertical, position: { start: 50 } },\n        { id: 'guideline2', direction: Axis.Horizontal, position: { start: 50 } }])\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(784403)/* ["default"] */.A) + "",
        width: "315",
        height: "328"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多个组件的屏障",
      children: "多个组件的屏障"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "屏障（barrier）是容器的一种动态参考边界，它基于一组指定组件的实际位置，计算出它们在特定方向上的公共最远边界。当需要让某个组件参照多个组件的集体边界时使用，例如实现“位于这些组件右侧”或“不与其他任何组件重叠”等效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "屏障可以有上下左右四个方向。垂直方向（TOP，BOTTOM）的屏障仅能作为组件的水平方向锚点，用作垂直方向锚点时值为0；水平方向（LEFT，RIGHT）的屏障仅能作为组件的垂直方向锚点，用作水平方向锚点时值为0。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "与静态的guideline不同，barrier会随参照组件位置变化而自动更新，只需定义实际需要的方向即可。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下列示例代码中，item1，item2，item3三个组件可以视为由一个隐形的矩形区域包围着，outer1基于这个“隐形区域”的底部边界进行布局，位于该区域的下方；outer2基于这个“隐形区域”的右侧边界进行布局，位于该区域的右侧。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  build() {\n    RelativeContainer() {\n      Text('item 1')\n        .width(80)\n        .height(80)\n        .textAlign(TextAlign.Center)\n        .backgroundColor('#a3cf62')\n        .id('item1')\n        .alignRules({\n          top: {\n            anchor: '__container__',\n            align: VerticalAlign.Top\n          },\n          left: {\n            anchor: '__container__',\n            align: HorizontalAlign.Start\n          }\n        })\n      Text('item 2')\n        .width(80)\n        .height(80)\n        .textAlign(TextAlign.Center)\n        .backgroundColor('#a3cf62')\n        .id('item2')\n        .alignRules({\n          top: {\n            anchor: 'item1',\n            align: VerticalAlign.Bottom\n          },\n          left: {\n            anchor: 'item1',\n            align: HorizontalAlign.End\n          }\n        })\n      Text('item 3')\n        .width(80)\n        .height(80)\n        .textAlign(TextAlign.Center)\n        .backgroundColor('#a3cf62')\n        .id('item3')\n        .alignRules({\n          bottom: {\n            anchor: 'item2',\n            align: VerticalAlign.Top\n          },\n          left: {\n            anchor: 'item2',\n            align: HorizontalAlign.End\n          }\n        })\n      Text('outer 1')\n        .width(80)\n        .height(80)\n        .textAlign(TextAlign.Center)\n        .backgroundColor('#00ae9d')\n        // 定义其位置\n        .alignRules({\n          top: {\n            anchor: 'barrier_bottom',\n            align: VerticalAlign.Top\n          },\n          left: {\n            anchor: 'barrier_left',\n            align: HorizontalAlign.Start\n          }\n        })\n\n      Text('outer 2')\n        .width(80)\n        .height(80)\n        .textAlign(TextAlign.Center)\n        .backgroundColor('#00ae9d')\n        // 定义其位置\n        .alignRules({\n          top: {\n            anchor: 'barrier_top',\n            align: VerticalAlign.Top\n          },\n          left: {\n            anchor: 'barrier_right',\n            align: HorizontalAlign.Start\n          }\n        })\n    }\n    .width('100%')\n    .padding(10)\n    .barrier([\n      {\n        id: 'barrier_left',\n        direction: BarrierDirection.LEFT,\n        referencedId: ['item1', 'item2', 'item3']\n      },\n      {\n        id: 'barrier_right',\n        direction: BarrierDirection.RIGHT,\n        referencedId: ['item1', 'item2', 'item3']\n      },\n      {\n        id: 'barrier_top',\n        direction: BarrierDirection.TOP,\n        referencedId: ['item1', 'item2', 'item3']\n      },\n      {\n        id: 'barrier_bottom',\n        direction: BarrierDirection.BOTTOM,\n        referencedId: ['item1', 'item2', 'item3']\n      },\n    ])\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(856086)/* ["default"] */.A) + "",
        width: "496",
        height: "377"
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
778879(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437779-08a910900e9acc81a56cf07d3a3932a2.png");

},
734265(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437777-b8a40675467e85242383119016a087db.png");

},
884043(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
856086(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437783-787edb784bc951cf807c03424c18f1c3.png");

},
32503(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
249431(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957732-dbf5c1fa54f82cb59391ab161a2e6474.png");

},
674228(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437781-5a351cd7da50f00f229a199d41c1bd78.png");

},
784403(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
797711(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798082-4279c48b9c5042d0c6636e31c405358d.png");

},
248516(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798086-93941d99d3b01a7e856ab11af3f3b15d.png");

},
79529(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
383936(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUMAAAFCCAYAAABrb7+iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAB1YSURBVHhe7dwJfFXlnf/xG0KCGyrWqQ5Oq+IuuAwiYBSRTXFXUAQUAiHsgvs+VOvUrdYuipJ93wkQULSd6cxULYpkYbNWrfr6T//TaUc7nalVQSD5zu+5ea7GeIM36g3MPJ+3/nxyb84954aYD+dkiwgAIGIIAIYYAoAhhgBgiCEAGGIIAIYYAoAhhgBgiCEAGGIIAIYYAoAhhgBgEoxhq9S2y/67TdphN9u2a3tbm71oNz6227bssBd2aKdaW1uZHhh93Kqdbe5le7/YTX2o9tttO+y2vR8+tyY4cR/bcbXjxV272D7eMbqarvbR3WNG1wRnt/tw6y7t8uvut3NrgrPbfbi1m29vvGN0NV3to7vHjK4Jzm734dav+Gds///vsv/32xtk/7RZsWy6K8EYtu+9VR+pdUerfRy26tX/+FCvvfeRfm3z2h8/0qu2vvreNruP6Yl502arzdv/sU2b/7gt+n74tb//N+92WG1ia3fmM4/tvM8vWm1ia3fmM49N9Fid125O7DG73ecXrTaxtTvzmccmeqzYahNbuzOfeWyix+q8dnNij9ntPr9otYmtnecN28bNm+9u11v28fD2ux/q/e07fbsS140Yuv/amaH99337782523TjUmlW/g5lFmzTnBxpTq6UnddmY6u9PMuvsdvdXhPZptMaO+aXPnYi23SxfqW3N5FtOqxzcts0M1+68Qnp2kJ7uWCHZtt97jkwTEiTWbhTWbbGPj5m2Lz0zkfRcnVHNy6TYyP9ye6Zk9uqeQW7NKriVWXUbtaF5f+m86t/o9G1r2tMzdtMkuf86l/r7OVv69Kyd5RR/7ouLW5SfsNvlbvmt8qz6bx2Z7rax5ddE5lE95Xo2p1JdJ9ftHZnEt1nomsik+i+El27M4nu84vWeJP79Du2/j/lrP6dlhT/UQtydunlt7e3p6sbEophm+xa3n1y0FooO/v8b1uy83fqotr3lFZXociaXPWuqVNkZb4iDTmKrChikjy9l+cqsrZIKcvL7M88V0NXl2iX/UXlPpnR1tb26Wp/gcVf400X23be5xetXe0n7nSxbaLHiq1d7SfudLFtosfqvHa1v7jTxbaJHiu2drWfuNPFtokeK7Z2tZ+408W2iR6r89rV/myinyBs26nttnX5P72tBXbV+vLb7osb3ZPwZfJOC6L71/XwQ7s9J79Nk0veV8rqPEVWVap3fYGtJdEgpqwoZJI8vWwiDXnRlyOrCnVqzVJ7r7S/rxgmqLF/LY3RKFY8/5+aWbRdr7yVrBjacXa6DNpZ4U674WI4O1+aUvy+Ik8vswDWqPcKF8XSz33QMsmZaAxX+RiuLNKgulgMgcBYmtxJmna1quIXf7YYbtOGt9y3uXQPMfxfOsQQ8Ihh2EMMAY8Yhj3EEPCIYdhDDAGPGIY9xBDwiGHYQwwBjxiGPcQQ8Ihh2EMMAY8Yhj3EEPCIYdhDDAGPGIY9xBDwiGHYQwwBjxiGPcQQ8Ihh2EMMAY8Yhj3EEPCIYdhDDAGPGIY9xBDwiGHYQwwBjxiGPcQQ8Ihh2EMMAY8Yhj3EEPCIYdhDDAGPGIY9xBDwiGHYQwwBjxiGPcQQ8Ihh2EMMAY8Yhj3EEPCIYdhDDAGPGIY9xBDwiGHYQwwBjxiGPcQQ8Ihh2EMMAY8Yhj3EEPCIYdhDDAGPGIY9xBDwiOGenUhDviKrbdzqZlX7xNs2GUMMAY8Y7uFZaeGz6bUiX6n1+UqzSbWX426bhCGGgEcM9+zEzgTdRIPoJ962yRhiCHjEcA+PnRVGVuQqpaHg00tmm7jbJmGIIeARwz076eVPqd/yYvWpyY2eEfI5Q2APIYbtE1lVpNT6EqUtL1LkWZuGErvPxgIRWWWvX22zNs9e77Yts9eX2fZuO3fbR8W27WX7SFlhr19VbK8rUlq93W9r6grb12rbfnVB9G1MWVugA2uXKS1rhtLOGqO+BY8rfXmB7d+dIRZ87vkla4gh4IUew8hKFysXhGKl1xWrb7WtdqaWsqLUwlaqPnZfnzq3jbt8zdU3y92Zm8Xu2fLo63q72FkM2/dlAVzpAmqvX20vrynWPu6xtvay1x1YVaz9ai10K3O17/f+Tn0zxuuAc8ep/6lj1K9kaXQf0dhaeDs+x2QOMQQ8YuhiUGhnbnZGttqO/dM8HVBjZ23Vdha3xuZZi5fFIq0+155jjt3nnl+BRbPIYmivfzpP+9XZ6+y+6Fmknf25wKTV23Z2Fpju4vZ0gVJX2u217v4CHVWUpz5nXaz+N96qU3IfU7+h5+ubNfZ6i3LHuPbEEEPACz2GKSssXqtLte+yHyhtUbZ6Fz2q3lOnKf2yyUqpeUqRnxXom2XLtE9WllLHT1RadpYOKH88esncuzZXvW9aoH733WnPPVcpFrpeq/K1/48eUNqdN9hZXq56LXdnkjnqW/SY9p+7SCmrc5TSkKODK3Js21wdXvFj7T9srA4uXWqhjff8kjvEEPCIofvcXon6PXK/jhg0UqlnnaNvXj1Tva6doW9XFWjA0h8pkjFOkfMvVt/s+Tp4zAQdetpY9X34O3bGaJG85QbtN+pCpa+xsz+71O5T/aT2mThJvc6xS99KC15DsVKXP6UDF89T+vjJSq+wwNY/ZWeK7ky0UIdW/lh9zxyrwwvbYxj7/GP85/r1DzEEvNBj2KveYmhnhmkP36PDTjlb6fffYvf9xO7L0UFr7XWjLtB+EybroFqL1bN2pmeX0SmzZ6jX347QodV56p/7Ex04aIQOjn41uFCHVC5V3yHn6ZDBo3TQow9YMIuUZmd/kRGjtF/eD+ySOl+pP7Xj1bpvsi7WN6oe10FDxqp/gY+hXbYTQ2APCD2GLj697VL54EfuVd+h49THYpDeUBb9XN9hhRa6waN1WIldFj/rziCLlF5Voj6lT+iw00epz+MP6WAX0zEX6LAZi+zMME/7PbpE+55rIZw5S2mXTFLK8hwdWPkT7TvkLPW2YPay4HQ8/rdLH4+eGR5SYjFsiMXps88xmUMMAY8YfhrD/YeO1f4Neeptx3dnhkc/8oCF7nz1t7O4tOWlOrSqUvvUVah3/TL1Gz5K6UtuVZ/leep37106YOTlOqhumVInXaN+d9+sQ5c+ovSh43VoTY4OmD9X+067Tuk+hB2DSAyBvQQxbI/TQRbDfS2GfeqfUq8Gi2H9Exr45E902MjLdETJk/ac3Of4Sux5luugimXqP3K8vvHofYr8tEwHli9V7+FjNSD3UfXOOF/9ap5Uat2TSjlztP5qyS0Wyot0+LIf2PE+//2DxBDYSxDD9hj2/f692mfYGKVbDF30UteU6ZByC+PgEXbJm61I5ROKrM3XPnbfIYtuUCQjQ4eXWyTXlKq3XQqnXn6J0i6+QCkXXmZnlvmKPFOsA25aoAPHjLNtR9rltcUxzvGJIbCXCD6G7qu3FoEDHm2PYe8V7TGM1NrZYUO+Uh+9S0cNu1D7XDZJh/39Pdp/4rVKzRinvvfdoP1r3I/NVanXmiL1f/QeHTzkLB265Hal2P4i9YU6sOoxfXvQMPWdM9O2iX98YgjsJYihG4vefUsUueRKHZJvZ3vP+Ei4X5jQkKeDnnxEkUuvUOTs0YpMmKhDn3xM+9TZ2V+D+0p0kXqvLNBfl9ntq65Un4LHlWr3pa7M12Hup1WmTlb6Dx+MHiPe8Y8rsuNcerkOLrRL7Xq3z/aJt20yhhgCXugxdDFIt0vlSI2dmdXZWaFd8vax2+6rydHfKGMxdL9VJr36SR1YaWdx7pLY3W9xc9+Wk+J+BtmiGb3PLoUj1bafZ+zMsCHX9pWrfdzPGrtv3l5twbH9dj7+wWsrlVJjb7sFyUXQ/Rov9zsNO2+XrCGGgBd6DNvHjvmcXRo/a0GwsLkguRC6MzX3cqTentszFreGHHu9rXbm6H7Uzn3Ddmp9gVKfsSA+Y9F7zq3F6uV+qYP7nsGnbdy35KxxX3yJ/8sXorF1+3NDDIE9J/QYRi+TLULusrdvdXuIImtsnm4/+3NniO4XOLizQPdzw24+fZyLiftNM+3bRi9vLaJuHy6k0TNLd3nsw9r52G7cY932sQBH9+MeE2fbZAwxBLzQY+gmFqzPBMn90gaLWzR6K93ziY37jTZ2tucurd0XOlYWfHoG6UMWmxS77zNR7OLY0dd1OH504mybjCGGgEcM2ycWt+i32sS5r/3Xc/kI2nR+fGw6Psbd7rivjtvFJrpth+17eogh4BHDsIcYAh4xDHuIIeARw7CHGAIeMQx7iCHgEcOwhxgCHjEMe4gh4BHDsIcYAh4xDHuIIeARw7CHGAIeMQx7iCHgEcOwhxgCHjEMe4gh4BHDsIcYAh4xDHuIIeARw7CHGAIeMQx7iCHgEcOwhxgCHjEMe4gh4BHDsIcYAh4xDHuIIeARw7CHGAIeMQx7iCHgEcOwhxgCHjEMe4gh4BHDsIcYAh4xDHuIIeARw7CHGAIeMQx7iCHgEcOwhxgCHjEMe4gh4BHDsIcYAh4xDHuIIeARw7CHGAIeMQx7iCHgEcOwhxgCHjEMe4gh4O0NMcws/YNSG55QWn2e0lYUKbIm39Y8pdcXMEmeXqvsL6GGKqWt+rEi9fk6vfKH9n6ydxAQmr0hhueX7VLK2jKlLC9Vr5W1SnmmWCkN5UpZzSR7ejXYXz6rV6nXandGXqMB1eXa5d9dQFD2hhjOKvm9LvynuzX+Z/fq0qfv1oU/XaALnruN6YG55NkbbbU/++du1Xlr79DMld+3d1T0fwkgLHtDDG/O3aLCrbOUu/lGlTYvUMmWa1S8cb7KWuYwSZ7iTbNUtGm28jcvVK69Dxoa3WXyDv8OAwKyN8RwTsG/qnrTZBVsWqTKprmq3HSVfYAuVKl9sJa2zNvNOjfOmsh09Vi3fpljxtZEJt5j99wxSzbOVdnGmSppuV5lm6fo6VeeaP8fAgjN3hDDhXnvqHbjZFU1Z6m6eZqqW6baB2iWyjdm2sz8gnVGh7U70/mxHffZnWPG1kQm3mOTfczYdHzsp/uuaMlSbdN0+3PPVE3LZD234X73bgLCszfEcHHub1SyeY6qWjLtEnmqypvn2wepfeDaByqT3CnZZH8BNc1WxcZro2eNa1ruJIYIEzEMe4gh4BHDsIcYAh4xDHuIIeARw7CHGAIeMQx7iCHgEcOwhxgCHjEMe4gh4BHDsIcYAh4xDHuIIeARw7CHGAIeMQx7iCHgEcOwhxgCHjEMe4gh4BHDsIcYAh4xDHuIIeARw7CHGAIeMQx7iCHgEcOwhxgCHjEMe4gh4BHDsIcYAh4xDHuIIeARw7CHGAIeMQx7iCHgEcOwhxgCHjEMe4gh4BHDsIcYAh4xDHuIIeARw7CHGAIeMQx7iCHgEcOwhxgCHjEMe4gh4BHDsIcYAh4xDHuIIeARw7CHGAIeMQx7iCHgEcMenuZ5KmuZo7KNWSrdONtenmfrTJVtmha9r7x5jm2X/fnHJWmIIeARwx6e5rkWnWyVbsq0CFoQLYylG+22hajUwli+aYrKt0yI/9gkDDEEPGLYc1O2cZbKN9rbtXG6vX0zbWzdcqUqNk1SRfNsf9aY3X6GGOfxyRhiCHjEsOemYoud+W2eqrKmmaracJtqm25W3YY7Vb3+HlU1L1BJ8xXKe+U6lTbeHPfxyRhiCHjEsOemsCk7GsPKphu04HtTdOw5/XTiOUfohLNP07mTB6vhjZtU99Z1Kn81/uOTMcQQ8Iihu3x1M9Mm85P7KjZOs3VW+yWru99d2tqU2/1ldqnrLmfd6yvsOUcfE32sXQb7x5fb/twlcVn0dvv9RU1ZKnjlas19dKyOzThedz12oypfvEU/rLlFR5w+UMOvOlV5Ly60M8SFn+4nyUMMAY8Yuq/qZqnY4lVisav7lQWqcYEqXpmpwpez7XlNt9dfp+J1FrZ181SyYYYFZKaKmueqws70qixwlXaJW7TxSpW0LFZx4xSVr7fn3zhb5fa2FNolceWW2arZOE+1WxaoeP0sDRh1uGZ8d7yqXIA3z1DVazN1zc2X6pizjlVN06L2zx/GeZ7JGGIIeMTQYrBlrh6onaBRmQNU9PPvaOjE/hp++RCVrLtOpU2TVbHuXl2cPVqnjTvd1guU+w93qLpltr0+UxfPP06zHxyt/PVXq6RxkZ0NTtB9hbM16bbhKm2cYYGZZzNRxc/frHFzT1Bli71t6++yt/UWVW+erYINmRbEK3XjwzdpwNBBFk07o3T7ifM8kzHEEPCI4Sw77iw9XJWl00aeqRNGfEMXZA3T1NsuVp1d+j719M0aOHaABl3QX/MevECnjj9aA846UvcXZ6queZGy7z9PJ4892p7zPHvOC2x/1+iMC0/XgIxvqeSlm1TWNEfVW6dq6u2jNWTiScr/5bV2n3vb3NuZqeJX3PcVTtNpY4fqbwZ/qz2+Fsr4z/XrH2IIeKHHMPrtLpum6eHK2Tp1+Hl6oPg6Lfv5Iq16/VY7S8vWgDNP1ejpg1X00kxVbb1OK7bcoul3TNDRZx2nypfvUe4/Z2ngeYPtEvo2u7y1S971t+vkEQN14rnH6L4iu9y2S+yqDYt18nnH6LFVi+0s9Fp7+2ZG76+wCJa8vEjfLc3Wt874lh5bvtBieK0KorGM/3y/7iGGgBd6DEsthsVbJ+nBqhk6achZduk7TXVvTlP163YZbKE6cvBwVbx8p8psm8qtt6tis53ZvXijTjj3dH1/xW0qbszU8Rln6OrbLYjNk3Vv3vUafP4punL+KA2/8gyL7eUq+Me/01FDBqjUzgIrtlxub+cNFk57Gy1Ahc8v0sBRQ3XZnJFa9atFdulsQdw6Je5zTcYQQ8ALPYbRrwg3zddDVdN17LDBdjaYpeL1c1XUmG1ni4t04uDztHxTtkq2XqmiZgvV5omqaVxol8F/peu/f6lqWhbp9qcmatC552q5XRIPu3Kgrn9skp5Yu0jHDD9BtesXKvOui3TRgjOiX12uaLQQ2ttZa/tbufE7FtUzNHTCIBW+5L4he7pK3TGaF8d5nskZYgh4wcfQBapluh6qmWwx/FvVbLpWxRsmq/K1WSp9aYFOGDZEDS0Pq7hlsj2v71o0slT10hIdN2ykcp+91878rlDpy9k6NuNYlf/8Xg0cd6wqm65XZeNiHTfi2/pe3u06ZfwR+tGaRfb4earYNNn2MVX1jQ/ppJFDddKY41W5/m7lr3P32yX0pikW3GviP9ckDDEEPGLoYpiph6ozdezQ4XZmmGkxnKKqzd9RVfPNOi7jBE274wq7387ctkxQSeNVWvDgeB099FgV/OI2u8yeoLpXs3TGpcfp9HEZOvOKoSppmaTqrTM06/4LNWz8FTp+TD8VrbOzvcZbLTrTVbHhTh01/GgNOOcw1TTNU/4Ll9gl+TS7/xaVN9l29pziPtckDDEEvOBj6C6T7XhLn1moI049UZXN01TWuED5zVepcMNEu3xerOMzTtGQi0+xy+Ipypg4WieNGKIlBZNV2mTb2vMuszPLh6tu0CmjM3RXzhxVbnUzQ7VNd+jIMwdq6t0ZdgaZreKmiar71XwNuugk/c2gsRo1ebTOuepUjbj6DJ0z6QxlXHOy8p9fqML1E+M8z+QMMQQ8YjhLVRvnaknZuTr1giO18o2rLY7Xq3jzFFW+apfKTbNU9/IDGnLRMTr67CN0/Hn9lbP2FlW7n0DZNEMl9tgSu+ytab5dAy86REXrM1Xz2q0q2DBLJRumacS0/nryHxZZdK6z2/NVvuE2DRjTV4PGDdQp5x+nk0cepZPOO1onjjpSp9jxl/1ssYpfmR7neSZniCHgEcP2if4WmaaFFoXr7Lb78Tn3UyA20cvoLFU1uZ84mWehdD+C537rTPuP4bmvRrdf1rozzLn2sp0t+h/VK7e3oSL6+wlt/DbR40X32b7f9nHbucdblGx1X0jp+NySOcQQ8Ihh2EMMAY8Yhj3EEPCIYdhDDAGPGIY9xBDwiGHYQwwBjxiGPcQQ8Ihh2EMMAY8Yhj3EEPCIYdhDDAGPGIY9xBDwiGHYQwwBjxiGPcQQ8Ihh2EMMAY8Yhj3EEPCIYdhDDAGPGIY9xBDwiGHYQwwBjxiGPcQQ8Ihh2EMMAY8Yhj3EEPCIYdhDDAGPGIY9xBDwiGHYQwwBjxiGPcQQ8Ihh2EMMAY8Yhj3EEPCIYdhDDAGPGIY9xBDwiGHYQwwBjxiGPcQQ8Ihh2EMMAY8Yhj3EEPCIYdhDDAGPGIY9xBDwiGHYQwwBjxiGPcQQ8Ihh2EMMAY8Yhj3EEPCIYdhDDAGPGIY9xBDwiGHYQwwBb2+I4fUlW1TTfJOqm2eprGWmqhvnWhCz7WUm6dNsfwk1ZauieYYqWxZpZeMSew/ZOwgIzV4Rw/K3tPk3a9X42yqtf6dSm96q0IZ3avTKO1U21V9x7TiJPuarrh0n0cd81TXefPFj179Ta1NhU6Z1b9eq8V//Ubu0w7/DgIDsDTG8Ie8DtdrdH2u7PrIPxNbWHfZ8bMtdO9S2027HW5MxXR0rmce02e0xk3Ts2L532h/8Tvvz3tm2Tdt3blMr18gI1d4Qwxtz/ss+QO052L273Eb2ERn9mHT/YZI77r1vf/bRd0CrTZvd4e4HQrNXxDD3PftY3GUfk9tt3EfmR7aVnb3YuWL31u5MovtMdE1kEt1Xomt3Jv4+FB33OUI37mX3zo/+LwGEZW+I4eKcv9gl26cfltGzlOhq455dx7UnpvMx9+SxkzyfueluuxeAENnHnPuw26MxXJj/p2gJP3ZnhbvaoucsANCjiCEAGGIIAIYYAoAhhgBgiCEAGGIIAIYYAoAhhgBgiCEAGGIIAIYYAoAhhgBgiCEAGGIIAIYYAoAhhgBgiCEAGGIIAIYYAoAhhgBgiCEAGGIIAIYYAoAhhgBgiCEAGGIIAIYYAoAhhgBgiCEAGGIIAIYYAoAhhgBgiCEAGGIIAIYYAoAhhgBgiCEAGGIIAIYYAoAhhgBgiCEAGGIIAIYYAoAhhgBgiCEAGGIIAIYYAoAhhgBgiCEAGGIIAIYYAoAhhgBgiCEAGGIIAIYYAoAhhgBgiCEAGGIIAIYYAoAhhgBgiCEAGGIIAIYYAoAhhgBgiCEAGGIIAIYYAoAhhgBgiCEAGGIIAIYYAoAhhgBgiCEAGGIIAIYYAoAhhgBgiCEAGGIIAIYYAoAhhgBgiCEAGGIIAIYYAoAhhgBgiCEAGGIIAIYYAoAhhgBgejSGxppnR2yzDO7UB3bouXmtunXZ79xd2tlmB7ZQtqfQ7mAYhumpaWu1/+5yiyp/8a7mFmzTK29Fi9UtCcbQEtjmQmgHsPq9b/csfKpNi5dt18/f+lAvvPkn/fK1D/Qvb/y3/uXN/9Lzb/yZYRimR+YFmxdf/7N+8fpf9KNnPtCsnDate9vOzropwRhactvcztvPAP9iN29a2qoZdqk8u3iH5ud/rDm5UlbRR8ou+Fiz86S5drvj6l7feZ0TW7/MxNnnnjhmbN3dsT85ZmztznTaV8d1T7y9e+KYsXV3x/7kmLG1O9NpXx3XPfH27oljxtbdHfuTY8bW7kynfXVcv/Lba6+bnyNd/5S0IHenZuTt0Lp3PmpPVzckfGboPi0o2QEshB/ubFP9S7/X8hd/p3o3z7+ruhf+qOp1v1PdL919v7f5g82/+zV2263JnM7H6uljdnx7e2I6H7Mnjt35WD19TP6MkzMdj/W/68+4/KV/U+UvrUcvvKsVz/9BK178//rte+76tXsS/gKKi+Au/UWtFsK2to/sJatjm437pGGrvbLVfdLQre4a3t1vL3+p1Sa2fvJyoo/9qquf2Mu73fbrWm3c2vHlhB/7ZVeb2Npjx4ytfmIv73bbr2u1cWvHlxN+7JddbWJrjx0ztvqJvbzbbb+u1catHV9O+LFfdrWxtf0f93lDu9+9zv6NNqubEj4zdP9stwS65+A+ddi2K3pol0S7cv7YXvtB9Em0uTYyDMP00ES/uutCFPtUnrvT3d9NCcYQAP5vI4YAYIghABhiCACGGAKAIYYAYIghABhiCACGGAKApP8BBDwq9ibDU5YAAAAASUVORK5CYII=");

},
654209(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957734-b98db779507bddb8bda2e8901f014f91.png");

},
39312(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957736-34011b401f382edb25f95bf67e6fade2.png");

},
105569(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477735-eeb611287ed0bf36eaabb761351bc663.png");

},
513064(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477737-531a346873229f0e56b986aebb19ec21.png");

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