"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["435962"], {
224560(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_list_and_grid_arkts_layout_development_create_list_arkts_layout_development_create_list_md_3f2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-list-and-grid-arkts-layout-development-create-list-arkts-layout-development-create-list-md-3f2.json
var site_docs_arkui_arkts_ui_development_arkts_list_and_grid_arkts_layout_development_create_list_arkts_layout_development_create_list_md_3f2_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-list/arkts-layout-development-create-list","title":"创建列表 (List)","description":"概述","source":"@site/docs/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-list/arkts-layout-development-create-list.md","sourceDirName":"arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-list","slug":"/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-list/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-list/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"创建列表 (List)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-create-list","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"列表与网格概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-list-and-grid/arkts-list-grid-development-overview/"},"next":{"title":"弧形列表 (ArcList)（圆形屏幕推荐使用）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-arclist/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-list/arkts-layout-development-create-list.md


const frontMatter = {
	title: '创建列表 (List)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-create-list',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '创建列表 (List)';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "布局与约束",
  "id": "布局与约束",
  "level": 2
}, {
  "value": "布局",
  "id": "布局",
  "level": 3
}, {
  "value": "约束",
  "id": "约束",
  "level": 3
}, {
  "value": "开发布局",
  "id": "开发布局",
  "level": 2
}, {
  "value": "设置主轴方向",
  "id": "设置主轴方向",
  "level": 3
}, {
  "value": "设置交叉轴布局",
  "id": "设置交叉轴布局",
  "level": 3
}, {
  "value": "ListItem生命周期",
  "id": "listitem生命周期",
  "level": 2
}, {
  "value": "使用ForEach创建ListItem",
  "id": "使用foreach创建listitem",
  "level": 3
}, {
  "value": "使用LazyForEach创建ListItem",
  "id": "使用lazyforeach创建listitem",
  "level": 3
}, {
  "value": "使用Repeat创建ListItem",
  "id": "使用repeat创建listitem",
  "level": 3
}, {
  "value": "在列表中显示数据",
  "id": "在列表中显示数据",
  "level": 2
}, {
  "value": "迭代列表内容",
  "id": "迭代列表内容",
  "level": 2
}, {
  "value": "自定义列表样式",
  "id": "自定义列表样式",
  "level": 2
}, {
  "value": "设置内容间距",
  "id": "设置内容间距",
  "level": 3
}, {
  "value": "添加分隔线",
  "id": "添加分隔线",
  "level": 3
}, {
  "value": "添加滚动条",
  "id": "添加滚动条",
  "level": 3
}, {
  "value": "添加外置滚动条",
  "id": "添加外置滚动条",
  "level": 2
}, {
  "value": "支持分组列表",
  "id": "支持分组列表",
  "level": 2
}, {
  "value": "添加粘性标题",
  "id": "添加粘性标题",
  "level": 2
}, {
  "value": "控制滚动位置",
  "id": "控制滚动位置",
  "level": 2
}, {
  "value": "响应滚动位置",
  "id": "响应滚动位置",
  "level": 2
}, {
  "value": "响应列表项侧滑",
  "id": "响应列表项侧滑",
  "level": 2
}, {
  "value": "给列表项添加标记",
  "id": "给列表项添加标记",
  "level": 2
}, {
  "value": "下拉刷新与上拉加载",
  "id": "下拉刷新与上拉加载",
  "level": 2
}, {
  "value": "编辑列表",
  "id": "编辑列表",
  "level": 2
}, {
  "value": "新增列表项",
  "id": "新增列表项",
  "level": 3
}, {
  "value": "删除列表项",
  "id": "删除列表项",
  "level": 3
}, {
  "value": "长列表的处理",
  "id": "长列表的处理",
  "level": 2
}, {
  "value": "折叠与展开",
  "id": "折叠与展开",
  "level": 2
}, {
  "value": "切换布局方向",
  "id": "切换布局方向",
  "level": 2
}, {
  "value": "支持滑动离手事件",
  "id": "支持滑动离手事件",
  "level": 2
}, {
  "value": "设置边缘滑动效果",
  "id": "设置边缘滑动效果",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "创建列表-list",
        children: "创建列表 (List)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "列表是一种复杂的容器，当列表项达到一定数量，内容超过屏幕大小时，可以自动提供滚动功能。它适合用于呈现同类数据类型或数据类型集，例如图片和文本。在列表中显示数据集合是许多应用程序中的常见要求（如通讯录、音乐列表、购物清单等）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用列表可以轻松高效地显示结构化、可滚动的信息。通过在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
        children: "List"
      }), "组件中按垂直或者水平方向线性排列子组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitemgroup/ts-container-listitemgroup",
        children: "ListItemGroup"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem",
        children: "ListItem"
      }), "，为列表中的行或列提供单个视图，或使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
        children: "循环渲染"
      }), "迭代一组行或列，或混合任意数量的单个视图和ForEach结构，构建一个列表。List组件支持使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-ifelse",
        children: "条件渲染"
      }), "、循环渲染、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "懒加载"
      }), "等", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-overview",
        children: "渲染控制"
      }), "方式生成子组件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在圆形屏幕设备上，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist",
        children: "ArcList"
      }), "组件，使用方式可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-arclist",
        children: "创建弧形列表 (ArcList)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "布局与约束",
      children: "布局与约束"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "列表作为一种容器，会自动按其滚动方向排列子组件，向列表中添加组件或从列表中移除组件会重新排列子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下图所示，在垂直列表中，List按垂直方向自动排列ListItemGroup或ListItem。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ListItemGroup用于列表数据的分组展示，其子组件也是ListItem。ListItem表示单个列表项，可以包含单个子组件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " List、ListItemGroup和ListItem组件关系"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(352180)/* ["default"] */.A) + "",
        width: "319",
        height: "445"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(114270)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "List的子组件必须是ListItemGroup或ListItem，ListItem和ListItemGroup必须配合List来使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "布局",
      children: "布局"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "List除了提供垂直和水平布局能力、超出屏幕时可以滚动的自适应延伸能力之外，还提供了自适应交叉轴方向上排列个数的布局能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "利用垂直布局能力可以构建单列或者多列垂直滚动列表，如下图所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 垂直滚动列表（左：单列；右：多列）"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(362244)/* ["default"] */.A) + "",
        width: "1036",
        height: "334"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "利用水平布局能力可以构建单行或多行水平滚动列表，如下图所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " 水平滚动列表（左：单行；右：多行）"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(63542)/* ["default"] */.A) + "",
        width: "1078",
        height: "330"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grid和WaterFlow也可以实现单列、多列布局，如果布局每列等宽，且不需要跨行跨列布局，相比Grid和WaterFlow，则更推荐使用List。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "约束",
      children: "约束"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "列表的主轴方向是指子组件列的排列方向，也是列表的滚动方向。垂直于主轴的轴称为交叉轴，其方向与主轴方向相互垂直。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下图所示，垂直列表的主轴是垂直方向，交叉轴是水平方向；水平列表的主轴是水平方向，交叉轴是垂直方向。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图4"
        })
      }), " 列表的主轴与交叉轴"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(318971)/* ["default"] */.A) + "",
        width: "1125",
        height: "379"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果List组件主轴或交叉轴方向设置了尺寸，则其对应方向上的尺寸为设置值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果List组件主轴方向没有设置尺寸，当List子组件主轴方向总尺寸小于List的父组件尺寸时，List主轴方向尺寸自动适应子组件的总尺寸。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下图所示，一个垂直列表B没有设置高度时，其父组件A高度为200vp，若其所有子组件C的高度总和为150vp，则此时列表B的高度为150vp。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图5"
        })
      }), " 列表主轴高度约束示例1（", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "A"
        })
      }), ": List的父组件; ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "B"
        })
      }), ": List组件; ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "C"
        })
      }), ": List的所有子组件）"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(301289)/* ["default"] */.A) + "",
        width: "442",
        height: "244"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果子组件主轴方向总尺寸超过List父组件尺寸时，List主轴方向尺寸适应List的父组件尺寸。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下图所示，同样是没有设置高度的垂直列表B，其父组件A高度为200vp，若其所有子组件C的高度总和为300vp，则此时列表B的高度为200vp。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图6"
        })
      }), " 列表主轴高度约束示例2（", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "A"
        })
      }), ": List的父组件; ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "B"
        })
      }), ": List组件; ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "C"
        })
      }), ": List的所有子组件）"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(207130)/* ["default"] */.A) + "",
        width: "442",
        height: "277"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "List组件交叉轴方向在没有设置尺寸时，其尺寸默认自适应父组件尺寸。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发布局",
      children: "开发布局"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置主轴方向",
      children: "设置主轴方向"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "List组件主轴默认是垂直方向，即默认情况下不需要手动设置List方向，就可以构建一个垂直滚动列表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若是水平滚动列表场景，将List的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#listdirection",
        children: "listDirection"
      }), "属性设置为Axis.Horizontal即可实现。listDirection默认为Axis.Vertical，即主轴默认是垂直方向。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "List(\n  // ···\n) {\n  // ···\n}\n.listDirection(Axis.Horizontal)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置交叉轴布局",
      children: "设置交叉轴布局"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["List组件的交叉轴布局可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#lanes9",
        children: "lanes"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#alignlistitem9",
        children: "alignListItem"
      }), "属性进行设置，lanes属性用于确定交叉轴排列的列表项数量，alignListItem用于设置子组件在交叉轴方向的对齐方式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["List组件的lanes属性通常用于在不同尺寸的设备自适应构建不同行数或列数的列表，即一次开发、多端部署的场景。lanes属性的取值类型是\"number | ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#lengthconstrain",
        children: "LengthConstrain"
      }), "\"，即整数或者LengthConstrain类型。以垂直列表为例，如果将lanes属性设为2，表示构建的是一个两列的垂直列表，如图2中右图所示。lanes的默认值为1，即默认情况下，垂直列表的列数是1。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "List(\n  // ···\n) {\n  // ···\n}\n.lanes(2)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当其取值为LengthConstrain类型时，表示会根据LengthConstrain与List组件的尺寸自适应决定行或列数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct ListLayout {\n  @State egLanes: LengthConstrain = { minLength: 200, maxLength: 300 };\n  build() {\n    // ···\n          List(\n            // ···\n          ) {\n            // ···\n          }\n          .lanes(this.egLanes)\n        // ···\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，假设在垂直列表中设置了lanes的值为{ minLength: 200, maxLength: 300 }。此时："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当List组件宽度为300vp时，由于minLength为200vp，此时列表为一列。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当List组件宽度变化至400vp时，符合两倍的minLength，则此时列表自适应为两列。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同样以垂直列表为例，当alignListItem属性设置为ListItemAlign.Center表示列表项在水平方向上居中对齐。alignListItem的默认值是ListItemAlign.Start，即列表项在列表交叉轴方向上默认按首部对齐。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "List(\n  // ···\n) {\n  // ···\n}\n// ···\n.alignListItem(ListItemAlign.Center)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "listitem生命周期",
      children: "ListItem生命周期"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用foreach创建listitem",
      children: "使用ForEach创建ListItem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "List组件创建时，所有ListItem将会被创建。显示区域内的ListItem在首帧进行布局，预加载范围内的ListItem在空闲时完成布局。预加载范围之外的ListItem仅创建ListItem自身，ListItem其内部的子组件不会被创建。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当List组件滑动时，进入预加载及显示区域的ListItem将会创建其内部的子组件并完成布局，而滑出预加载及显示区域的ListItem将不会被销毁。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图7"
        })
      }), " ForEach创建ListItem的生命周期"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(623445)/* ["default"] */.A) + "",
        width: "1015",
        height: "692"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用lazyforeach创建listitem",
      children: "使用LazyForEach创建ListItem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "List组件创建时，显示区域中的ListItem会被创建与布局。预加载范围内的ListItem在空闲时创建与布局，但是不会被挂载到组件树上。预加载范围外的ListItem则不会被创建。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当List组件滑动时，进入预加载及显示区域的ListItem将被创建与布局，创建ListItem过程中，若ListItem内部包含@Reusable标记的自定义组件，则会优先从缓存池中复用。滑出预加载及显示区域的ListItem将被销毁，其内部若含@Reusable标记的自定义组件，则会被回收并加入缓存池。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图8"
        })
      }), " LazyForEach创建ListItem的生命周期"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(285790)/* ["default"] */.A) + "",
        width: "995",
        height: "720"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用repeat创建listitem",
      children: "使用Repeat创建ListItem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用virtualScroll"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["List组件创建时，使用设置了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-repeat/ts-rendering-control-repeat#virtualscroll",
        children: "virtualScroll"
      }), "的Repeat生成ListItem，此时显示区域内的ListItem将被创建和布局。预加载范围内的ListItem在渲染线程空闲时创建和布局，并且挂载至组件树上。预加载范围外的ListItem则不会被创建。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当List组件滑动时，进入预加载及显示区域的ListItem，将从缓存池中获取ListItem并复用及布局，若缓存池中无ListItem，则会新创建并布局。滑出预加载及显示区域的ListItem将被回收至缓存池。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图9"
        })
      }), " Repeat使用virtualScroll创建ListItem的生命周期"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(954554)/* ["default"] */.A) + "",
        width: "922",
        height: "680"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "不使用virtualScroll"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "List组件创建时，所有ListItem均被创建。显示区域内的ListItem在首帧完成布局，预加载范围内的ListItem在空闲时完成布局。预加载范围外的ListItem不会进行布局。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当List组件滑动时，进入预加载及显示区域的ListItem将进行布局。滑出预加载及显示区域的ListItem不会销毁。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图10"
        })
      }), " Repeat不使用virtualScroll创建ListItem的生命周期"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(203803)/* ["default"] */.A) + "",
        width: "937",
        height: "646"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在列表中显示数据",
      children: "在列表中显示数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "列表视图垂直或水平显示项目集合，在行或列超出屏幕时提供滚动功能，使其适合显示大型数据集合。在最简单的列表形式中，List静态地创建其列表项ListItem的内容。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图11"
        })
      }), " 城市列表"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(273090)/* ["default"] */.A) + "",
        width: "387",
        height: "68"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct DataInList {\n  build() {\n    // ···\n          List() {\n            ListItem() {\n              // app.string.city_beijing 资源文件中的value值为'北京'\n              Text($r('app.string.city_beijing'))\n                .fontSize(24)\n            }\n\n            ListItem() {\n              // app.string.city_hangzhou 资源文件中的value值为'杭州'\n              Text($r('app.string.city_hangzhou'))\n                .fontSize(24)\n            }\n\n            ListItem() {\n              // app.string.city_shanghai 资源文件中的value值为'上海'\n              Text($r('app.string.city_shanghai'))\n                .fontSize(24)\n            }\n          }\n          .backgroundColor('#FFF1F3F5')\n          .alignListItem(ListItemAlign.Center)\n        // ···\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于在ListItem中只能有一个根节点组件，不支持以平铺形式使用多个组件。因此，若列表项是由多个组件元素组成的，则需要将这多个元素组合到一个容器组件内或组成一个自定义组件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图12"
        })
      }), " 联系人列表项示例"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(303324)/* ["default"] */.A) + "",
        width: "438",
        height: "176"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如上图所示，联系人列表的列表项中，每个联系人都有头像和名称。此时，需要将Image和Text封装到一个Row容器内。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "List() {\n  ListItem() {\n    Row() {\n      // app.media.iconE为自定义资源\n      Image($r('app.media.iconE'))\n        .width(40)\n        .height(40)\n        .margin(10)\n\n      // app.string.peopleOne 资源文件中的value值为'小明'\n      Text($r('app.string.peopleOne'))\n        .fontSize(20)\n    }\n  }\n\n  ListItem() {\n    Row() {\n      // app.media.iconF为自定义资源\n      Image($r('app.media.iconF'))\n        .width(40)\n        .height(40)\n        .margin(10)\n\n      // app.string.peopleTwo 资源文件中的value值为'小红'\n      Text($r('app.string.peopleTwo'))\n        .fontSize(20)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "迭代列表内容",
      children: "迭代列表内容"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通常，应用通过数据集合动态地创建列表。使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
        children: "循环渲染"
      }), "可从数据源中迭代获取数据，并在每次迭代过程中创建相应的组件，降低代码复杂度。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
        children: "ForEach"
      }), "提供了组件的循环渲染能力。以简单形式的联系人列表为例，将联系人名称和头像数据以Contact类结构存储到contacts数组，使用ForEach中嵌套ListItem的形式来代替多个平铺的、内容相似的ListItem，从而减少重复代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { util } from '@kit.ArkTS';\n\nclass Contact {\n  public key: string = util.generateRandomUUID(true);\n  public name: ResourceStr;\n  public icon: Resource;\n\n  constructor(name: ResourceStr, icon: Resource) {\n    this.name = name;\n    this.icon = icon;\n  }\n}\n\n@Entry\n@Component\nexport struct ListIteration {\n  private contacts: Array<Contact> = [\n\n    // app.string.peopleOne 资源文件中的value值为'小明'，app.media.iconA为自定义资源\n    new Contact($r('app.string.peopleOne'), $r('app.media.iconA')),\n    // app.string.peopleTwo 资源文件中的value值为'小红'，app.media.iconB为自定义资源\n    new Contact($r('app.string.peopleTwo'), $r('app.media.iconB'))\n  ];\n\n  build() {\n    // ...\n          List() {\n            ForEach(this.contacts, (item: Contact) => {\n              ListItem() {\n                Row() {\n                  Image(item.icon)\n                    .width(40)\n                    .height(40)\n                    .margin(10)\n                  Text(item.name).fontSize(20)\n                }\n                .width('100%')\n                .justifyContent(FlexAlign.Start)\n              }\n            }, (item: Contact) => JSON.stringify(item))\n          }\n          .width('100%')\n          // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在List组件中，ForEach除了可以用来循环渲染ListItem，也可以用来循环渲染ListItemGroup。ListItemGroup的循环渲染详细使用请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%94%AF%E6%8C%81%E5%88%86%E7%BB%84%E5%88%97%E8%A1%A8",
        children: "支持分组列表"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义列表样式",
      children: "自定义列表样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置内容间距",
      children: "设置内容间距"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在初始化列表时，如需在列表项之间添加间距，可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#listoptions18%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "ListOptions"
      }), "的space参数。例如，在每个列表项之间沿主轴方向添加10vp的间距。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "List({ space: 10 }) {\n  // ···\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加分隔线",
      children: "添加分隔线"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分隔线用来将界面元素隔开，使单个元素更加容易识别。以系统设置场景为例（如下图所示），列表项左侧为图标（如蓝牙图标），右侧为文字描述且分割线在文字下方。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图13"
        })
      }), " 设置列表分隔线样式"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(242339)/* ["default"] */.A) + "",
        width: "611",
        height: "93"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["List提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#divider",
        children: "divider"
      }), "属性用于给列表项之间添加分隔线。在设置divider属性时，可以通过strokeWidth和color属性设置分隔线的粗细和颜色。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startMargin和endMargin属性分别用于设置分隔线距离列表侧边起始端的距离和距离列表侧边结束端的距离。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class DividerTmp {\n  public strokeWidth: Length = 1;\n  public startMargin: Length = 60;\n  public endMargin: Length = 10;\n  public color: ResourceColor = '#ffe9f0f0';\n\n  constructor(strokeWidth: Length, startMargin: Length, endMargin: Length, color: ResourceColor) {\n    this.strokeWidth = strokeWidth;\n    this.startMargin = startMargin;\n    this.endMargin = endMargin;\n    this.color = color;\n  }\n}\n\n@Entry\n@Component\nexport struct CustomListStyle {\n  @State egDivider: DividerTmp = new DividerTmp(1, 60, 10, '#ffe9f0f0');\n\n// ···\n\n  build() {\n    // ···\n          List(\n            // ···\n          ) {\n            // ···\n          }\n          .divider(this.egDivider)\n        // ···\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此示例表示从距离列表侧边起始端60vp开始到距离结束端10vp的位置，画一条粗细为1vp的分割线，可以实现图9设置列表分隔线的样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(989815)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "分隔线的宽度会使ListItem之间存在一定间隔，当List设置的内容间距小于分隔线宽度时，ListItem之间的间隔会使用分隔线的宽度。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当List存在多列时，分割线的startMargin和endMargin作用于每一列上。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List组件的分隔线画在两个ListItem之间，第一个ListItem上方和最后一个ListItem下方不会绘制分隔线。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加滚动条",
      children: "添加滚动条"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当列表项高度（宽度）超出屏幕高度（宽度）时，列表可以沿垂直（水平）方向滚动。在页面内容很多时，若用户需快速定位，可拖拽滚动条，如下图所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图14"
        })
      }), " 列表的滚动条"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(312536)/* ["default"] */.A) + "",
        width: "400",
        height: "70"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在使用List组件时，可通过scrollBar属性控制列表滚动条的显示。scrollBar的取值类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#barstate",
        children: "BarState"
      }), "，当取值为BarState.Auto表示按需显示滚动条。此时，当触摸到滚动条区域时显示控件，可上下拖拽滚动条快速浏览内容，拖拽时会变粗。若不进行任何操作，2秒后滚动条自动消失。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "scrollBar属性API version 9及以下版本默认值为BarState.Off，从API version 10版本开始默认值为BarState.Auto。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "List(\n  // ···\n) {\n  // ···\n}\n// ···\n.scrollBar(BarState.Auto)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加外置滚动条",
      children: "添加外置滚动条"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["列表", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
        children: "List"
      }), "可与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-basic-components-scrollbar/ts-basic-components-scrollbar",
        children: "ScrollBar"
      }), "组件配合使用，为列表添加外置滚动条。两者通过绑定同一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scroller",
        children: "Scroller"
      }), "滚动控制器对象实现联动。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["首先，需要创建一个", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scroller",
            children: "Scroller"
          }), "类型的对象listScroller。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "private listScroller: Scroller = new Scroller();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["然后，列表通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#listoptions18%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
            children: "scroller"
          }), "参数绑定滚动控制器。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// listScroller初始化List组件的scroller参数，绑定listScroller与列表。\nList({ scroller: this.listScroller }) {\n// ···\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["最后，滚动条通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-basic-components-scrollbar/ts-basic-components-scrollbar#scrollbaroptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
            children: "scroller"
          }), "参数绑定滚动控制器。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// listScroller初始化ScrollBar组件的scroller参数，绑定listScroller与列表。\nScrollBar({ scroller: this.listScroller})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图15"
        })
      }), " 列表的外置滚动条"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(516347)/* ["default"] */.A) + "",
        width: "680",
        height: "92"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(229658)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["滚动条组件", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-basic-components-scrollbar/ts-basic-components-scrollbar",
          children: "ScrollBar"
        }), "，还可配合其他可滚动组件使用，如", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist",
          children: "ArcList"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid",
          children: "Grid"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll",
          children: "Scroll"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow",
          children: "WaterFlow"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在圆形屏幕设备上，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
          children: "List"
        }), "可以与弧形滚动条组件", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-basic-components-arcscrollbar/ts-basic-components-arcscrollbar",
          children: "ArcScrollBar"
        }), "配合使用为列表添加弧形外置滚动条，使用方式可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-arclist",
          children: "创建弧形列表 (ArcList)"
        }), "的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-arclist#%E6%B7%BB%E5%8A%A0%E5%A4%96%E7%BD%AE%E6%BB%9A%E5%8A%A8%E6%9D%A1arcscrollbar",
          children: "添加外置滚动条ArcScrollBar"
        }), "章节。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持分组列表",
      children: "支持分组列表"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在列表中支持数据的分组展示，可以使列表显示结构清晰，查找方便，从而提高使用效率。分组列表在实际应用中十分常见，如下图所示联系人列表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图16"
        })
      }), " 联系人分组列表"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(662887)/* ["default"] */.A) + "",
        width: "671",
        height: "236"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在List组件中使用ListItemGroup对项目进行分组，可以构建二维列表。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在List组件中可以直接使用一个或者多个ListItemGroup组件，ListItemGroup的宽度默认充满List组件。在初始化ListItemGroup时，可通过header参数设置列表分组的头部组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct GroupedList {\n  @Builder\n  itemHead(text: string) {\n    // 列表分组的头部组件，对应联系人分组A、B等位置的组件\n    Text(text)\n      .fontSize(20)\n      .backgroundColor('#fff1f3f5')\n      .width('100%')\n      .padding(5)\n  }\n\n  build() {\n    // ···\n          List(\n            // ···\n          ) {\n            ListItemGroup({ header: this.itemHead('A') }) {\n              // 循环渲染分组A的ListItem\n            // ···\n            }\n\n            ListItemGroup({ header: this.itemHead('B') }) {\n              // 循环渲染分组B的ListItem\n            // ···\n            }\n          }\n        // ···\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果多个ListItemGroup结构类似，可以将多个分组的数据组成数组，然后使用ForEach对多个分组进行循环渲染。例如在联系人列表中，将每个分组的联系人数据contacts（可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%BF%AD%E4%BB%A3%E5%88%97%E8%A1%A8%E5%86%85%E5%AE%B9",
        children: "迭代列表内容"
      }), "章节）和对应分组的标题title数据进行组合，定义为数组contactsGroups。然后在ForEach中对contactsGroups进行循环渲染，即可实现多个分组的联系人列表。可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%B7%BB%E5%8A%A0%E7%B2%98%E6%80%A7%E6%A0%87%E9%A2%98",
        children: "添加粘性标题"
      }), "章节示例代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加粘性标题",
      children: "添加粘性标题"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "粘性标题是一种常见的标题模式，常用于定位字母列表的头部元素。如下图所示，在联系人列表中滚动A部分时，B部分开始的头部元素始终处于A的下方。而在开始滚动B部分时，B的头部会固定在屏幕顶部，直到所有B的项均完成滚动后，才被后面的头部替代。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "粘性标题不仅有助于阐明列表中数据的表示形式和用途，还可以帮助用户在大量信息中进行数据定位，从而避免用户在标题所在的表的顶部与感兴趣区域之间反复滚动。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图17"
        })
      }), " 粘性标题"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(655816)/* ["default"] */.A) + "",
        width: "666",
        height: "242"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["List组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#sticky9",
        children: "sticky"
      }), "属性配合ListItemGroup组件使用，用于设置ListItemGroup中的头部组件是否呈现吸顶效果或者尾部组件是否呈现吸底效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过给List组件设置sticky属性为StickyStyle.Header，即可实现列表的粘性标题效果。如果需要支持吸底效果，可以通过footer参数初始化ListItemGroup的底部组件，并将sticky属性设置为StickyStyle.Footer。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { util } from '@kit.ArkTS';\n\nclass Contact {\n  public key: string = util.generateRandomUUID(true);\n  public name: string | Resource;\n  public icon: Resource;\n\n  constructor(name: string | Resource, icon: Resource) {\n    this.name = name;\n    this.icon = icon;\n  }\n}\n\nclass ContactsGroup {\n  public title: string = '';\n  public contacts: Array<object> | null = null;\n  public key: string = '';\n}\n\nexport class ContactsGroupDataSource implements IDataSource {\n  private list: object[] = [];\n\n  constructor(list: object[]) {\n    this.list = list;\n  }\n\n  totalCount(): number {\n    return this.list.length;\n  }\n\n  getData(index: number): object {\n    return this.list[index];\n  }\n\n  registerDataChangeListener(listener: DataChangeListener): void {\n  }\n\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n  }\n}\n\nexport let contactsGroups: object[] = [\n  {\n    title: 'A',\n    contacts: [\n      // app.string.contacts_A_one 资源文件中的value值为'艾佳'，app.media.iconA为自定义资源\n      new Contact($r('app.string.contacts_A_one'), $r('app.media.iconA')),\n      // app.string.contacts_A_two 资源文件中的value值为'安安'，app.media.iconB为自定义资源\n      new Contact($r('app.string.contacts_A_two'), $r('app.media.iconB')),\n      // app.media.iconC为自定义资源\n      new Contact('Angela', $r('app.media.iconC')),\n    ],\n    key: util.generateRandomUUID(true)\n  } as ContactsGroup,\n  {\n    title: 'B',\n    contacts: [\n      // app.string.contacts_B_one 资源文件中的value值为'白叶'，app.media.iconD为自定义资源\n      new Contact($r('app.string.contacts_B_one'), $r('app.media.iconD')),\n      // app.string.contacts_B_three 资源文件中的value值为'伯明'，app.media.iconE为自定义资源\n      new Contact($r('app.string.contacts_B_three'), $r('app.media.iconE'))\n    ],\n    key: util.generateRandomUUID(true)\n  } as ContactsGroup\n];\nexport let contactsGroupsDataSource: ContactsGroupDataSource = new ContactsGroupDataSource(contactsGroups);\n\n@Entry\n@Component\nexport struct StickyHeaderList {\n  // 定义分组联系人数据集合contactsGroups数组\n  @Builder\n  itemHead(text: string) {\n    // 列表分组的头部组件，对应联系人分组A、B等位置的组件\n    Text(text)\n      .fontSize(20)\n      .backgroundColor('#fff1f3f5')\n      .width('100%')\n      .padding(5)\n  }\n\n  build() {\n    // ...\n          List() {\n            // 懒加载ListItemGroup，contactsGroups为多个分组联系人contacts和标题title的数据集合\n            LazyForEach(contactsGroupsDataSource, (itemGroup: ContactsGroup) => {\n              ListItemGroup({ header: this.itemHead(itemGroup.title) }) {\n                // 循环渲染ListItem\n                if (itemGroup.contacts) {\n                  LazyForEach(new ContactsGroupDataSource(itemGroup.contacts), (item: Contact) => {\n                    ListItem() {\n                      Row() {\n                        Image(item.icon).width(40).height(40).margin(10)\n                        Text(item.name).fontSize(20)\n                      }.width('100%').justifyContent(FlexAlign.Start)\n                    }\n                  }, (item: Contact) => JSON.stringify(item))\n                }\n              }\n            }, (itemGroup: ContactsGroup) => JSON.stringify(itemGroup))\n          }\n          .sticky(StickyStyle.Header) // 设置吸顶，实现粘性标题效果\n          // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "控制滚动位置",
      children: "控制滚动位置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "控制滚动位置在实际应用中十分常见，例如当新闻页列表项数量庞大，用户滚动列表到一定位置时，希望快速滚动到列表底部或返回列表顶部。此时，可以通过控制滚动位置来实现列表的快速定位，如下图所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图18"
        })
      }), " 返回列表顶部"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(83059)/* ["default"] */.A) + "",
        width: "421",
        height: "620"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["List组件初始化时，可以通过scroller参数绑定一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scroller",
        children: "Scroller"
      }), "对象，进行列表的滚动控制。例如，用户在新闻应用中，点击新闻页面底部的返回顶部按钮时，就可以通过Scroller对象的scrollToIndex方法使列表滚动到指定的列表项索引位置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "首先，需要创建一个Scroller的对象listScroller。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "private listScroller: Scroller = new Scroller();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "然后，通过将listScroller用于初始化List组件的scroller参数，完成listScroller与列表的绑定。在需要跳转的位置指定scrollToIndex的参数为0，表示返回列表顶部。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Stack({ alignContent: Alignment.Bottom }) {\n  // 将listScroller用于初始化List组件的scroller参数，完成listScroller与列表的绑定。\n  List({ space: 20, scroller: this.listScroller }) {\n    // ...\n  }\n\n  Button() {\n    // ...\n  }\n  // ...\n  .onClick(() => {\n    // 点击按钮时，指定跳转位置，返回列表顶部\n    this.listScroller.scrollToIndex(0);\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "响应滚动位置",
      children: "响应滚动位置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "许多应用需要监听列表的滚动位置变化并作出响应。例如，在联系人列表滚动时，如果跨越了不同字母开头的分组，则侧边字母索引栏也需要更新到对应的字母位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除了字母索引之外，滚动列表结合多级分类索引在应用开发过程中也很常见，例如购物应用的商品分类页面，多级分类也需要监听列表的滚动位置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图19"
        })
      }), " 字母索引响应联系人列表滚动"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(597086)/* ["default"] */.A) + "",
        width: "400",
        height: "535"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如上图所示，当联系人列表从A滚动到B时，右侧索引栏也需要同步从选中A状态变成选中B状态。此场景可以通过监听List组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#onscrollindex",
        children: "onScrollIndex"
      }), "事件来实现，右侧索引栏需要使用字母表索引组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-alphabet-indexer/ts-container-alphabet-indexer",
        children: "AlphabetIndexer"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在列表滚动时，根据列表此时所在的索引值位置firstIndex，重新计算字母索引栏对应字母的位置selectedIndex。由于AlphabetIndexer组件通过selected属性设置了选中项索引值，当selectedIndex变化时会触发AlphabetIndexer组件重新渲染，从而显示为选中对应字母的状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const alphabets = ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',\n  'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];\n\n// ...\n\n@Entry\n@Component\nexport struct ResponsiveScrollPositionList {\n  @State selectedIndex: number = 0;\n  private listScroller: Scroller = new Scroller();\n  // ...\n\n  build() {\n    // ...\n          Stack({ alignContent: Alignment.End }) {\n            // 此为响应滚动位置示例List容器\n            // listScroller初始化List组件的scroller参数，绑定listScroller与列表。\n            List({ scroller: this.listScroller }) {\n              // ...\n            }\n            .onScrollIndex((firstIndex: number) => {\n              // 根据列表滚动到的索引值，重新计算对应联系人索引栏的位置this.selectedIndex\n              // ...\n            })\n\n            // 字母表索引组件\n            AlphabetIndexer({ arrayValue: alphabets, selected: 0 })\n              .selected(this.selectedIndex)\n              .onSelect((index: number) => {\n                this.listScroller.scrollToIndex(index);\n              })\n          }\n          // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(661501)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "计算索引值时，ListItemGroup作为一个整体占一个索引值，不计算ListItemGroup内部ListItem的索引值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "响应列表项侧滑",
      children: "响应列表项侧滑"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["侧滑菜单在许多应用中都很常见。例如，通讯类应用通常会给消息列表提供侧滑删除功能，即用户可以通过向左侧滑列表的某一项，再点击删除按钮删除消息，如下图所示。其中，列表项头像右上角标记设置参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%BB%99%E5%88%97%E8%A1%A8%E9%A1%B9%E6%B7%BB%E5%8A%A0%E6%A0%87%E8%AE%B0",
        children: "给列表项添加标记"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图20"
        })
      }), " 侧滑删除列表项"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(16529)/* ["default"] */.A) + "",
        width: "400",
        height: "217"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ListItem的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem#swipeaction9",
        children: "swipeAction属性"
      }), "可用于实现列表项的左右滑动功能。swipeAction属性方法初始化时有必填参数SwipeActionOptions，其中，start参数表示设置列表项右滑时起始端滑出的组件，end参数表示设置列表项左滑时尾端滑出的组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在消息列表中，end参数表示设置ListItem左滑时尾端划出自定义组件，即删除按钮。在初始化end方法时，将滑动列表项的索引传入删除按钮组件，当用户点击删除按钮时，可以根据索引值来删除列表项对应的数据，从而实现侧滑删除功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实现尾端滑出组件的构建。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Builder\nitemEnd(index: number) {\n  // 构建尾端滑出组件\n  Button({ type: ButtonType.Circle }) {\n    Image($r('sys.media.ohos_ic_bottomsheet_close'))\n      .width(40)\n      .height(40)\n  }\n  // ...\n  .onClick(() => {\n    // this.arr为列表数据源，可根据实际场景构造。点击后从数据源删除指定数据项。\n    this.arr.splice(index, 1);\n  })\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "绑定swipeAction属性到可左滑的ListItem上。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 构建List时，通过ForEach基于数据源this.messages循环渲染ListItem。\nListItem() {\n  // ···\n}.swipeAction({\n  end: {\n    // index为该ListItem在List中的索引值。\n    builder: () => {\n      // ···\n      this.itemEnd(this.index);\n    },\n  }\n}) // 设置侧滑属性.\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "给列表项添加标记",
      children: "给列表项添加标记"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加标记是一种无干扰性且直观的方法，用于显示通知或将注意力集中到应用内的某个区域。例如，当消息列表接收到新消息时，通常对应消息列表的右上方会出现标记，提示有若干条未读消息，如下图所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图21"
        })
      }), " 给列表项添加标记"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(869810)/* ["default"] */.A) + "",
        width: "424",
        height: "241"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在ListItem中使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-badge/ts-container-badge",
        children: "Badge"
      }), "组件可实现给列表项添加标记功能。Badge是可以附加在单个组件上用于信息标记的容器组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在消息列表中，若希望在消息的右上角添加标记，可在实现消息列表项ListItem中，将对应的组件作为Badge的子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Badge组件中，count和position参数用于设置需要展示的消息数量和提示点显示位置，还可以通过style参数灵活设置标记的样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ListItem() {\n  // Badge组件实现消息右上角添加标记功能\n  Badge({\n    count: 1,\n    position: BadgePosition.RightTop,\n    style: { badgeSize: 16, badgeColor: '#FA2A2D' }\n  }) {\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "下拉刷新与上拉加载",
      children: "下拉刷新与上拉加载"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["页面的下拉刷新与上拉加载功能在移动应用中十分常见，例如，新闻页面的内容刷新和加载。这两种操作的原理都是通过响应用户的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch",
        children: "触摸事件"
      }), "，在顶部或者底部显示一个刷新或加载视图，完成后再将此视图隐藏。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下拉刷新为例，其实现主要分成三步："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "监听手指按下事件，记录其初始位置的值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "监听手指按压移动事件，记录并计算当前移动的位置与初始值的差值，大于0表示向下移动，同时设置一个允许移动的最大值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "监听手指抬起事件，若此时移动达到最大值，则触发数据加载并显示刷新视图，加载完成后将此视图隐藏。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(813237)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["页面的下拉刷新操作推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-refresh/ts-container-refresh",
        children: "Refresh"
      }), "组件实现。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下拉刷新与上拉加载的具体实现可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/codelabsPortal/carddetails/tutorials_NEXT-NewsDataArkTS",
        children: "新闻数据加载"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "编辑列表",
      children: "编辑列表"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "列表的编辑模式用途十分广泛，常见于待办事项管理、文件管理、备忘录的记录管理等应用场景。在列表的编辑模式下，新增和删除列表项是最基础的功能，其核心是对列表项对应的数据集合进行数据添加和删除。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以待办事项管理为例，介绍如何快速实现新增和删除列表项功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "新增列表项",
      children: "新增列表项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下图所示，当用户点击添加按钮时，提供用户新增列表项内容选择或填写的交互界面，用户点击确定后，列表中新增对应的项目。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图22"
        })
      }), " 新增待办"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(756800)/* ["default"] */.A) + "",
        width: "400",
        height: "383"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加列表项功能实现主要流程如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义列表项数据结构，以待办事项管理为例，首先定义待办数据结构。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ToDo.ets\nimport { util } from '@kit.ArkTS';\n\nexport class ToDo {\n  public key: string = util.generateRandomUUID(true);\n  public name: string;\n\n  constructor(name: string) {\n    this.name = name;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构建列表整体布局和列表项。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { ToDo } from './ToDo';\n\n@Component\nexport struct ToDoListItem {\n  @Link isEditMode: boolean;\n  @Link selectedItems: ToDo[];\n  private toDoItem: ToDo = new ToDo('');\n\n  build() {\n    Flex({ justifyContent: FlexAlign.SpaceBetween, alignItems: ItemAlign.Center }) {\n    // ···\n    }\n    // ···\n    .width('100%')\n    .height(80)\n    // .padding() 根据具体使用场景设置\n    .borderRadius(24)\n    // .linearGradient() 根据具体使用场景设置\n    .gesture(\n      GestureGroup(GestureMode.Exclusive,\n        LongPressGesture()\n          .onAction(() => {\n          })\n      )\n    )\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化待办列表数据和可选事项，最后，构建列表布局和列表项。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { ToDo } from './ToDo';\nimport { ToDoListItem } from './ToDoListItem';\n\n@Entry\n@Component\nexport struct AddListItem {\n  @State toDoData: ToDo[] = [];\n  @Watch('onEditModeChange') @State isEditMode: boolean = false;\n  @State selectedItems: ToDo[] = [];\n  private availableThings: string [] = [];\n\n  aboutToAppear(): void {\n    const context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n    const reading = context.resourceManager.getStringByNameSync('Reading')\n    this.availableThings.push(reading)\n    const exercise = context.resourceManager.getStringByNameSync('Exercise')\n    this.availableThings.push(exercise)\n    const travel = context.resourceManager.getStringByNameSync('Travel')\n    this.availableThings.push(travel)\n    const listening = context.resourceManager.getStringByNameSync('Listening_Music')\n    this.availableThings.push(listening)\n    const watching = context.resourceManager.getStringByNameSync('Watching_Films')\n    this.availableThings.push(watching)\n    const singing = context.resourceManager.getStringByNameSync('Singing')\n    this.availableThings.push(singing)\n  }\n\n  onEditModeChange() {\n    if (!this.isEditMode) {\n      this.selectedItems = [];\n    }\n  }\n\n  build() {\n    // ...\n      Column(\n        // ...\n      ) {\n        // ...\n            Row() {\n              if (this.isEditMode) {\n                Text('X')\n                  .fontSize(20)\n                  .onClick(() => {\n                    this.isEditMode = false;\n                  })\n                  .margin({ left: 20, right: 20 })\n              } else {\n                // app.string.TodoItem 资源文件中的value值为'待办'\n                Text($r('app.string.TodoItem'))\n                  .fontSize(36)\n                  .margin({ left: 40 })\n                Blank()\n                Text('+')// 提供新增列表项入口，即给新增按钮添加点击事件\n                // ...\n                  .onClick(() => {\n                    this.getUIContext().showTextPickerDialog({\n                      range: this.availableThings,\n                      onAccept: (value: TextPickerResult) => {\n                        let arr = Array.isArray(value.index) ? value.index : [value.index];\n                        for (let i = 0; i < arr.length; i++) {\n                          this.toDoData.push(new ToDo(this.availableThings[arr[i]])); // 新增列表项数据toDoData(可选事项)\n                        }\n                      },\n                    })\n                  })\n              }\n              // ...\n\n            List({ space: 10 }) {\n              ForEach(this.toDoData, (toDoItem: ToDo) => {\n                ListItem() {\n                  // 将toDoData的每个数据放入到以model的形式放进ListItem里\n                  ToDoListItem({\n                    isEditMode: this.isEditMode,\n                    toDoItem: toDoItem,\n                    selectedItems: this.selectedItems\n                  })\n                }\n              }, (toDoItem: ToDo) => toDoItem.name.toString())\n            }\n          }\n        }\n        // ...\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "删除列表项",
      children: "删除列表项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下图所示，当用户长按列表项进入删除模式时，提供用户删除列表项选择的交互界面，用户勾选完成后点击删除按钮，列表中删除对应的项目。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图23"
        })
      }), " 长按删除待办事项"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(961088)/* ["default"] */.A) + "",
        width: "400",
        height: "475"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除列表项功能实现主要流程如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "列表的删除功能一般进入编辑模式后才可使用，所以需要提供编辑模式的入口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以待办列表为例，通过监听列表项的长按事件，当用户长按列表项时，进入编辑模式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { util } from '@kit.ArkTS';\n\n// 结构参考\nexport class ToDo {\n  public key: string = util.generateRandomUUID(true);\n  public name: string;\n  public toDoData: ToDo[] = [];\n\n  constructor(name: string) {\n    this.name = name;\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实现参考："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Flex({ justifyContent: FlexAlign.SpaceBetween, alignItems: ItemAlign.Center }) {\n  // ...\n}\n// ...\n.gesture(\n  GestureGroup(GestureMode.Exclusive,\n    LongPressGesture()\n      .onAction(() => {\n        if (!this.isEditMode) {\n          this.isEditMode = true; // 进入编辑模式\n        }\n      })\n  )\n)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要响应用户的选择交互，记录要删除的列表项数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在待办列表中，通过勾选框的勾选或取消勾选，响应用户勾选列表项变化，记录所有选择的列表项。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { util } from '@kit.ArkTS';\n\n// 结构参考\nexport class ToDo {\n  public key: string = util.generateRandomUUID(true);\n  public name: string;\n  public toDoData: ToDo[] = [];\n\n  constructor(name: string) {\n    this.name = name;\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实现参考："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (this.isEditMode) {\n  Checkbox()\n    .onChange((isSelected) => {\n      if (isSelected) {\n        this.selectedItems.push(new ToDo(this.toDoItem.name)); // this.selectedItems为勾选时，记录选中的列表项，可根据实际场景构造\n      } else {\n        let index = this.selectedItems.indexOf(new ToDo(this.toDoItem.name));\n        if (index !== -1) {\n          this.selectedItems.splice(index, 1); // 取消勾选时，则将此项从selectedItems中删除\n        }\n      }\n    })\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要响应用户点击删除按钮事件，删除列表中对应的选项。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { util } from '@kit.ArkTS';\n\n// 结构参考\nexport class ToDo {\n  public key: string = util.generateRandomUUID(true);\n  public name: string;\n  public toDoData: ToDo[] = [];\n\n  constructor(name: string) {\n    this.name = name;\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实现参考："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// app.string.delete 资源文件中的value值为'删除'\nButton($r('app.string.delete'))\n// ···\n  .onClick(() => {\n    // this.toDoData为待办的列表项，可根据实际场景构造。点击后删除选中的列表项对应的toDoData数据\n    this.toDoData = this.toDoData.filter(toDoItem =>\n    !this.selectedItems.some(selectedItem => selectedItem.name === toDoItem.name));\n    this.isEditMode = false;\n  })\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "长列表的处理",
      children: "长列表的处理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
        children: "循环渲染"
      }), "适用于短列表，当构建具有大量列表项的长列表时，如果直接采用循环渲染方式，会一次性加载所有的列表元素，会导致页面启动时间过长，影响用户体验。因此，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "数据懒加载"
      }), "（LazyForEach）方式实现按需迭代加载数据，从而提升列表性能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["关于长列表按需加载优化的具体实现可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "数据懒加载"
      }), "章节中的示例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当使用懒加载方式渲染列表时，为了更好的列表滚动体验，减少列表滑动时出现白块，List组件提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#cachedcount",
        children: "cachedCount"
      }), "参数用于设置列表项缓存数，懒加载方式只会预加载List显示区域外cachedCount的内容，而非懒加载会全部加载。无论懒加载还是非懒加载都只布局List显示区域+List显示区域外cachedCount的内容。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "List(\n// ···\n) {\n// ···\n}.cachedCount(3)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以垂直列表为例："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List设置cachedCount后，显示区域外上下各会预加载并布局cachedCount行ListItem。计算ListItem行数时，会计算ListItemGroup内部的ListItem行数。如果ListItemGroup内没有ListItem，则整个ListItemGroup算一行。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List下嵌套使用LazyForEach，并且LazyForEach下嵌套使用ListItemGroup时，LazyForEach会在List显示区域外上下各会创建cachedCount个ListItemGroup。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(996149)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cachedCount的增加会增大UI的CPU、内存开销。使用时需要根据实际情况，综合性能和用户体验进行调整。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "列表使用数据懒加载时，除了显示区域的列表项和前后缓存的列表项，其他列表项会被销毁。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "折叠与展开",
      children: "折叠与展开"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "列表项的折叠与展开用途广泛，常用于信息清单的展示、填写等应用场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图24"
        })
      }), " 列表项的折叠与展开"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(802316)/* ["default"] */.A) + "",
        width: "434",
        height: "559"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "列表项折叠与展开效果实现主要流程如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义列表项数据结构。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { curves } from '@kit.ArkUI';\n\ninterface ItemInfo {\n  index: number,\n  name: ResourceStr,\n  label: ResourceStr,\n  type?: string,\n}\n\ninterface ItemGroupInfo extends ItemInfo {\n  children: ItemInfo[]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造列表结构。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "  @State routes: ItemGroupInfo[] = [\n    {\n      index: 0,\n      name: 'basicInfo',\n      // app.string.Personal_Basic_Information 资源文件中的value值为'个人基本资料'\n      label: $r('app.string.Personal_Basic_Information'),\n      children: [\n        {\n          index: 0,\n          // app.string.nick_name 资源文件中的value值为'昵称'\n          name: $r('app.string.nick_name'),\n          label: 'xxxx',\n          type: 'Text'\n        },\n        {\n          index: 1,\n          // app.string.avatar 资源文件中的value值为'头像'\n          name: $r('app.string.avatar'),\n          label: $r('sys.media.ohos_user_auth_icon_face'),\n          type: 'Image'\n        },\n        {\n          index: 2,\n          // app.string.age 资源文件中的value值为'年龄'\n          name: $r('app.string.age'),\n          label: 'xxxx',\n          type: 'Text'\n        },\n        {\n          index: 3,\n          // app.string.birthday 资源文件中的value值为'性别'\n          name: $r('app.string.birthday'),\n          label: 'xxxxxxxxx',\n          type: 'Text'\n        },\n        {\n          index: 4,\n          // app.string.gender 资源文件中的value值为''\n          name: $r('app.string.gender'),\n          label: 'xxxxxxxx',\n          type: 'Text'\n        },\n      ]\n    },\n    {\n      index: 1,\n      name: 'equipInfo',\n      // app.string.Device_Information 资源文件中的value值为'设备信息'\n      label: $r('app.string.Device_Information'),\n      children: []\n    },\n    {\n      index: 2,\n      name: 'appInfo',\n      // app.string.Application_usage_information 资源文件中的value值为'应用使用信息'\n      label: $r('app.string.Application_usage_information'),\n      children: []\n    },\n    {\n      index: 3,\n      name: 'uploadInfo',\n      // app.string.data_you_voluntarily_uploaded 资源文件中的value值为'您主动上传的数据'\n      label: $r('app.string.data_you_voluntarily_uploaded'),\n      children: []\n    },\n    {\n      index: 4,\n      name: 'tradeInfo',\n      // app.string.Trading_and_asset_information 资源文件中的value值为'交易与资产信息'\n      label: $r('app.string.Trading_and_asset_information'),\n      children: []\n    },\n    {\n      index: 5,\n      name: 'otherInfo',\n      // app.string.Other_materials 资源文件中的value值为'其他资料'\n      label: $r('app.string.Other_materials'),\n      children: []\n    },\n  ];\n  @State expandedItems: boolean[] = Array(this.routes.length).fill(false);\n  @State selection: string | null = null;\n\n  // ...\n\n  build() {\n    // ...\n          Column() {\n            List({ space: 10 }) {\n              ForEach(this.routes, (itemGroup: ItemGroupInfo) => {\n                ListItemGroup({\n                  header: this.ListItemGroupHeader(itemGroup),\n                  style: ListItemGroupStyle.CARD,\n                }) {\n                  if (this.expandedItems[itemGroup.index] && itemGroup.children) {\n                    ForEach(itemGroup.children, (item: ItemInfo) => {\n                      ListItem({ style: ListItemStyle.CARD }) {\n                        Row() {\n                          Text(item.name)\n                          Blank()\n                          if (item.type === 'Image') {\n                            Image(item.label)\n                              .height(20)\n                              .width(20)\n                          } else {\n                            Text(item.label)\n                          }\n                          Image($r('sys.media.ohos_ic_public_arrow_right'))\n                            .fillColor($r('sys.color.ohos_id_color_fourth'))\n                            .height(30)\n                            .width(30)\n                        }\n                        .width('100%')\n                      }\n                      .width('100%')\n                      .animation({ curve: curves.interpolatingSpring(0, 1, 528, 39) })\n                    })\n                  }\n                }.clip(true)\n              })\n            }\n            .width('100%')\n          }\n          .width('100%')\n          .height('100%')\n          .justifyContent(FlexAlign.Start)\n          .backgroundColor($r('sys.color.ohos_id_color_sub_background'))\n          // ...\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过改变ListItem的状态，来控制每个列表项是否展开，并通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-animatorproperty/ts-animatorproperty#animation",
            children: "animation"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#animateto",
            children: "animateTo"
          }), "来实现展开与折叠过程中的动效效果。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Builder\nListItemGroupHeader(itemGroup: ItemGroupInfo) {\n  Row() {\n    Text(itemGroup.label)\n    Blank()\n    Image($r('sys.media.ohos_ic_public_arrow_down'))\n      .fillColor($r('sys.color.ohos_id_color_fourth'))\n      .height(30)\n      .width(30)\n      .rotate({ angle: !!itemGroup.children.length ? (this.expandedItems[itemGroup.index] ? 180 : 0) : 180 })\n      .animation({ curve: curves.interpolatingSpring(0, 1, 228, 22) })\n  }\n  .width('100%')\n  .padding(10)\n  .animation({ curve: curves.interpolatingSpring(0, 1, 528, 39) })\n  .onClick(() => {\n    if (itemGroup.children.length) {\n      this.getUIContext()?.animateTo({ curve: curves.interpolatingSpring(0, 1, 528, 39) }, () => {\n        this.expandedItems[itemGroup.index] = !this.expandedItems[itemGroup.index];\n      })\n    }\n  })\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "切换布局方向",
      children: "切换布局方向"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "部分业务场景需要列表底部插入数据时，自动向上滚动，把新插入的节点展示出来。例如，直播评论、即时聊天等应用场景。而List组件正常布局时, 在内容下方增加节点，内容是保持不变的。此时，可以通过切换布局方向来实现所需效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图25"
        })
      }), " 实时消息滚动显示"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(525149)/* ["default"] */.A) + "",
        width: "320",
        height: "352"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义列表项数据结构。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "interface Message {\n  id: number\n  content: ResourceStr\n  sender: ResourceStr\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构造列表结构，同时把", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#stackfromend19",
            children: "stackFromEnd"
          }), "接口参数值设置为true，即可实现List列表在底部插入数据时，内容向上滚动。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Builder\nMessageItem(message: Message) {\n  Column() {\n    Text(`${message.sender}: ${message.content}`)\n      .fontSize(16)\n      .textAlign(TextAlign.Start)\n      .padding(10)\n      .backgroundColor(message.sender === 'system' ? '#F0F0F0' : '#E6F3FF')\n      .borderRadius(8)\n  }\n  .width('100%')\n  .alignItems(HorizontalAlign.Start)\n  .margin({ bottom: 8 })\n}\n\n@State messages: Message[] = [];\n\naboutToAppear(): void {\n  const context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  // app.string.welcome_live_room资源文件中的value值为'欢迎来到直播间'\n  const welcomeLiveRoom = context.resourceManager.getStringByNameSync('welcome_live_room');\n  // app.string.system资源文件中的value值为'系统'\n  const system = context.resourceManager.getStringByNameSync('system');\n  // app.string.hello_everyone资源文件中的value值为'大家好啊~'\n  const helloEveryone = context.resourceManager.getStringByNameSync('hello_everyone');\n  // app.string.anchors资源文件中的value值为'主播'\n  const anchors = context.resourceManager.getStringByNameSync('anchors');\n  this.messages = [\n    { id: 1, content: welcomeLiveRoom, sender: system },\n    { id: 2, content: helloEveryone, sender: anchors }\n  ];\n}\n\nbuild() {\n  // ...\n        Column() {\n          // 聊天消息区域\n          List({ space: 10 }) {\n            ForEach(this.messages, (item: Message) => {\n              ListItem() {\n                this.MessageItem(item)\n              }\n            }, (item: Message) => item.id.toString())\n          }\n          .stackFromEnd(true)\n          .layoutWeight(1)  // 占据剩余空间\n          .alignListItem(ListItemAlign.Center)\n\n          // ...\n        }\n        .width('100%')\n        .height('100%')\n        // ...\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持滑动离手事件",
      children: "支持滑动离手事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，滚动类组件（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid",
        children: "Grid"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
        children: "List"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll",
        children: "Scroll"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow",
        children: "WaterFlow"
      }), "）支持滑动离手事件回调功能，当用户手指离开屏幕时，会触发该事件并上报离手瞬间的滑动速度。开发者可利用此接口实现类似新闻浏览页面的自定义限位滚动效果，短新闻限位滚动，长新闻自由滚动。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图26"
        })
      }), " 自定义限位滚动效果"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(439486)/* ["default"] */.A) + "",
        width: "351",
        height: "431"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义新闻条目数据结构。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class News {\n  public id: string;\n  public title: ResourceStr;\n  public content: ResourceStr;\n  public type: string;\n\n  constructor(id: string, title: ResourceStr, content: ResourceStr, type: string) {\n    this.id = id;\n    this.title = title;\n    this.content = content;\n    this.type = type;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造新闻条目结构，通过type属性来区分长新闻，短新闻。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@State newsData: Array<News> = [\n  // app.string.new_title 资源文件中的value值为'新闻标题'\n  // app.string.new_short 资源文件中的value值为'这是第一条短新闻，内容较少，快速滑动切换'\n  new News('1', $r('app.string.new_title'), $r('app.string.new_short'), 'short'),\n  new News('2', $r('app.string.new_title'), $r('app.string.new_short'), 'short'),\n  // app.string.new_long 资源文件中的value值为'这是第二条长新闻，内容较多，可以自由滑动查看完整内容。'\n  new News('3', $r('app.string.new_title'), $r('app.string.new_long'), 'long'),\n  new News('4', $r('app.string.new_title'), $r('app.string.new_short'), 'short'),\n  new News('5', $r('app.string.new_title'), $r('app.string.new_long'), 'long'),\n];\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "滑动离手事件onWillStopDragging及新闻处理逻辑："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "上报离手瞬间滑动速度，支持正负方向速度检测，向上滑动为正，向下滑动为负。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: ".onWillStopDragging((velocity: number) => {\n  if (velocity < 0) {\n    // 向下滑动处理\n  } else {\n    // 向上滑动处理\n  }\n  // ...\n})\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#getitemrect11",
                children: "getItemRect"
              }), "接口方法获取当前项位置信息。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "let rect = this.scrollerForList.getItemRect(this.currentIndex);\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "处理短新闻：直接跳转相邻项。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "if (velocity > 10) {\n  this.scrollerForList.scrollToIndex(this.currentIndex, true, ScrollAlign.START)\n} else if (velocity < -10) {\n  this.scrollerForList.scrollToIndex(this.currentIndex + 1, true, ScrollAlign.START)\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "处理长新闻：计算剩余显示范围决定滚动终点。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "let rect = this.scrollerForList.getItemRect(this.currentIndex);\nif (velocity < -30) {\n  if (rect) {\n    // 当前节点在页面内的剩余显示范围\n    let leftRect = rect.y + rect.height;\n    // 终点位置\n    let mainPosition = -velocity * DEFAULT_FRICTION / FRICTION_SCALE;\n    if (leftRect + mainPosition > 0.75 * this.listHeight) {\n      this.scrollerForList.scrollToIndex(this.currentIndex + 1, true, ScrollAlign.START);\n      return;\n    } else if (leftRect + mainPosition < 0.25 * this.listHeight) {\n      this.scrollerForList.scrollToIndex(this.currentIndex, true, ScrollAlign.END,\n        { extraOffset: LengthMetrics.vp(this.listHeight * 0.3) })\n      return;\n    }\n  }\n} else if (velocity > 30) {\n  let leftRect = rect?.y + rect?.height;\n  let mainPosition = velocity * DEFAULT_FRICTION / FRICTION_SCALE;\n  if (leftRect + mainPosition > 0.75 * this.listHeight) {\n    this.scrollerForList.scrollToIndex(this.currentIndex, true, ScrollAlign.START);\n    return;\n  }\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置边缘滑动效果",
      children: "设置边缘滑动效果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["边缘滑动效果是指当用户滑动滚动组件至边缘后，继续滑动时触发的交互效果。当前List支持通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#edgeeffect",
        children: "edgeEffect"
      }), "属性设置三种边缘滑动效果，分别为弹簧效果（即回弹效果）、阴影效果、无效果。具体效果说明请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#edgeeffect",
        children: "EdgeEffect"
      }), "的枚举说明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当List组件的内容区大于等于一屏时，List的边缘滑动效果默认为回弹效果，如下图所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图27"
        })
      }), " 边缘回弹效果"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(61831)/* ["default"] */.A) + "",
        width: "374",
        height: "761"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置.edgeEffect(EdgeEffect.None)时，List无边缘滑动效果，如下图所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图28"
        })
      }), " 无边缘滑动效果"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(431603)/* ["default"] */.A) + "",
        width: "374",
        height: "761"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，List还支持只设置单边的边缘滑动效果，如设置.edgeEffect(EdgeEffect.Spring, { alwaysEnabled: true, effectEdge: EffectEdge.START })来实现起始边有边缘回弹效果，末尾边无效果，如下图所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图29"
        })
      }), " 单边边缘滑动效果"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(103103)/* ["default"] */.A) + "",
        width: "374",
        height: "761"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要注意的是，当List组件的内容区小于一屏时，List默认无边缘滑动效果。若要启用边缘回弹效果，可以通过设置.edgeEffect(EdgeEffect.Spring, { alwaysEnabled: true })来实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/two-dimension-list",
          children: "二维列表"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/nested-list",
          children: "List组件嵌套滑动"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/list-item-edit",
          children: "列表编辑效果"
        })
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
655816(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477773-ff809f4fa32cd72f701bd4f527a27083.gif");

},
996149(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
207130(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798118-83b49acd212178acbc043d52a7f66f39.png");

},
439486(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798128-ec76bb2248a6dd54b0847c5cfa5fe0e2.gif");

},
954554(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477769-2ed092abdaa4aedc061a2e6757b52e39.png");

},
63542(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
203803(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798120-282759b73f38338e7f1b35d256341fec.png");

},
802316(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957776-961a5a4cf47dcdc70395e194253a5777.gif");

},
352180(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798116-e5455c59b5dcecec12e94245ef502d71.png");

},
362244(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
303324(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957770-5aade1e982f0bafefcbc08a3ce78b02b.png");

},
813237(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
961088(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437821-02a67ef607f3a49e6ad9916819acdfe0.gif");

},
661501(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
312536(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798122-6571b7bc8360d97902c1ce3eda4cec92.gif");

},
242339(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477771-afad0e66af63b1b3d53c36c29e6e473e.png");

},
431603(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957778-0b7a1f40ed60c5ef11549e246ffb64f9.gif");

},
229658(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
273090(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
623445(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437813-c58a6388df1f3fd89fc044aa42c55c1d.png");

},
83059(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798124-d3da32d47bbc5c4458e97c5dc23c7508.gif");

},
662887(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957772-e129de4bcd26b9ed29aee26550d8da5e.png");

},
16529(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957774-d39dc5afc44111d1cd96fd9940bb403e.gif");

},
756800(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798126-a260c2e36c7b1563863e334a0c287bc2.gif");

},
516347(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437817-53ac17afa530ddb6cced0545283f3dea.gif");

},
301289(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477767-8d9f90e6fcd341a0b5900671cfcc6b4b.png");

},
114270(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
318971(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957766-a1a94e193c2f41371e4f147398b701e6.png");

},
103103(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477779-397b4163caaee7a79c7ddf6b6bbb72ee.gif");

},
869810(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477775-aa469c8d04a7e59b15800a973440e652.png");

},
525149(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477777-7ed0ecf6bdf66b73623e12593e0cfeb3.gif");

},
61831(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437823-4dde56f35fa3d807362701571ec0f42b.gif");

},
989815(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
285790(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957768-27d09b43ae3a7204f88faac6d2d7f4df.png");

},
597086(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437819-78cbf41b98f987f0b4595646ef18d5e5.gif");

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