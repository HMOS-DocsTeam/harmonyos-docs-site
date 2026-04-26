"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["397150"], {
311131(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_list_and_grid_arkts_layout_development_create_grid_arkts_layout_development_create_grid_md_6f8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-list-and-grid-arkts-layout-development-create-grid-arkts-layout-development-create-grid-md-6f8.json
var site_docs_arkui_arkts_ui_development_arkts_list_and_grid_arkts_layout_development_create_grid_arkts_layout_development_create_grid_md_6f8_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-grid/arkts-layout-development-create-grid","title":"创建网格 (Grid/GridItem)","description":"概述","source":"@site/docs/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-grid/arkts-layout-development-create-grid.md","sourceDirName":"arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-grid","slug":"/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-grid/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-grid/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"创建网格 (Grid/GridItem)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-create-grid","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"弧形列表 (ArcList)（圆形屏幕推荐使用）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-arclist/"},"next":{"title":"创建瀑布流（WaterFlow）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-waterflow/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-grid/arkts-layout-development-create-grid.md


const frontMatter = {
	title: '创建网格 (Grid/GridItem)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-create-grid',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '创建网格 (Grid/GridItem)';

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
  "value": "设置排列方式",
  "id": "设置排列方式",
  "level": 2
}, {
  "value": "设置行列数量与占比",
  "id": "设置行列数量与占比",
  "level": 3
}, {
  "value": "设置子组件所占行列数",
  "id": "设置子组件所占行列数",
  "level": 3
}, {
  "value": "设置主轴方向",
  "id": "设置主轴方向",
  "level": 3
}, {
  "value": "在网格布局中显示数据",
  "id": "在网格布局中显示数据",
  "level": 2
}, {
  "value": "设置行列间距",
  "id": "设置行列间距",
  "level": 2
}, {
  "value": "构建可滚动的网格布局",
  "id": "构建可滚动的网格布局",
  "level": 2
}, {
  "value": "控制滚动位置",
  "id": "控制滚动位置",
  "level": 2
}, {
  "value": "添加外置滚动条",
  "id": "添加外置滚动条",
  "level": 2
}, {
  "value": "性能优化",
  "id": "性能优化",
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
        id: "创建网格-gridgriditem",
        children: "创建网格 (Grid/GridItem)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网格布局是由“行”和“列”分割的单元格所组成，通过指定“项目”所在的单元格做出各种各样的布局。网格布局具有较强的页面均分能力，子组件占比控制能力，是一种重要自适应布局，其使用场景有九宫格图片展示、日历、计算器等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkUI提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid",
        children: "Grid"
      }), "容器组件和子组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-griditem/ts-container-griditem",
        children: "GridItem"
      }), "，用于构建网格布局。Grid用于设置网格布局相关参数，GridItem定义子组件相关特征。Grid组件支持使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-ifelse",
        children: "条件渲染"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
        children: "循环渲染"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "懒加载"
      }), "等方式生成子组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(786115)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文仅展示关键代码片段，可运行的完整代码请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/ScrollableComponent/entry/src/main/ets/pages/grid",
        children: "创建网格代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "布局与约束",
      children: "布局与约束"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grid组件为网格容器，其中容器内各条目对应一个GridItem组件，如下图所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " Grid与GridItem组件关系"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(394535)/* ["default"] */.A) + "",
        width: "308",
        height: "382"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(555108)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grid的子组件必须是GridItem组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网格布局是一种二维布局。Grid组件支持自定义行列数和每行每列尺寸占比、设置子组件横跨几行或者几列，同时提供了垂直和水平布局能力。当网格容器组件尺寸发生变化时，所有子组件以及间距会等比例调整，从而实现网格布局的自适应能力。根据Grid的这些布局能力，可以构建出不同样式的网格布局，如下图所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 网格布局"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(165657)/* ["default"] */.A) + "",
        width: "2025",
        height: "465"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果Grid组件设置了宽高属性，则其尺寸为设置值。如果没有设置宽高属性，Grid组件的尺寸默认适应其父组件的尺寸。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grid组件根据行列数量与占比属性的设置，可以分为三种布局情况："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "行、列数量与占比同时设置：Grid只展示固定行列数的元素，其余元素不展示，且Grid不可滚动。（推荐使用该种布局方式）"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "只设置行、列数量与占比中的一个：元素按照设置的方向进行排布，超出的元素可通过滚动的方式展示。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "行列数量与占比都不设置：元素在布局方向上排布，其行列数由布局方向、单个网格的宽高等多个属性共同决定。超出行列容纳范围的元素不展示，且Grid不可滚动。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置排列方式",
      children: "设置排列方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置行列数量与占比",
      children: "设置行列数量与占比"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过设置行列数量与尺寸占比可以确定网格布局的整体排列方式。Grid组件提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid#rowstemplate",
        children: "rowsTemplate"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid#columnstemplate",
        children: "columnsTemplate"
      }), "属性用于设置网格布局行列数量与尺寸占比。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "rowsTemplate和columnsTemplate属性值是一个由多个空格和'数字+fr'间隔拼接的字符串，fr的个数即网格布局的行或列数，fr前面的数值大小，用于计算该行或列在网格布局宽度上的占比，最终决定该行或列宽度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " 行列数量占比示例"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(720411)/* ["default"] */.A) + "",
        width: "456",
        height: "344"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如上图所示，构建的是一个三行三列的网格布局，其在垂直方向上分为三等份，每行占一份；在水平方向上分为四等份，第一列占一份，第二列占两份，第三列占一份。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "只要将rowsTemplate设置为'1fr 1fr 1fr'，同时将columnsTemplate设置为'1fr 2fr 1fr'，即可实现上述网格布局。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Grid() {\n  // ···\n}\n.rowsTemplate('1fr 1fr 1fr')\n.columnsTemplate('1fr 2fr 1fr')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(854144)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当Grid组件设置了rowsTemplate或columnsTemplate时，Grid的layoutDirection、maxCount、minCount、cellLength属性不生效，属性说明可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid#%E5%B1%9E%E6%80%A7",
        children: "Grid-属性"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置子组件所占行列数",
      children: "设置子组件所占行列数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除了大小相同的等比例网格布局，由不同大小的网格组成不均匀分布的网格布局场景在实际应用中十分常见，如下图所示。在Grid组件中，可以通过创建Grid时传入合适的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid#gridlayoutoptions10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "GridLayoutOptions"
      }), "实现如图所示的单个网格横跨多行或多列的场景，其中，irregularIndexes和onGetIrregularSizeByIndex可对仅设置rowsTemplate或columnsTemplate的Grid使用；onGetRectByIndex可对同时设置rowsTemplate和columnsTemplate的Grid使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图4"
        })
      }), " 不均匀网格布局"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(172608)/* ["default"] */.A) + "",
        width: "457",
        height: "325"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如计算器的按键布局就是常见的不均匀网格布局场景。如下图，计算器中的按键“0”和“=”，按键“0”横跨第一、二两列，按键“=”横跨第五、六两行。使用Grid构建的网格布局，其行列标号从0开始，依次编号。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图5"
        })
      }), " 计算器"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(241608)/* ["default"] */.A) + "",
        width: "394",
        height: "500"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在网格中，可以通过onGetRectByIndex返回的[rowStart,columnStart,rowSpan,columnSpan]来实现跨行跨列布局，其中rowStart和columnStart属性表示指定当前元素起始行号和起始列号，rowSpan和columnSpan属性表示指定当前元素的占用行数和占用列数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "所以“0”按键横跨第一列和第二列，“=”按键横跨第五行和第六行，只要将“0”对应onGetRectByIndex的rowStart和columnStart设为6和0，rowSpan和columnSpan设为1和2，将“=”对应onGetRectByIndex的rowStart和columnStart设为5和3，rowSpan和columnSpan设为2和1即可。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "layoutOptions: GridLayoutOptions = {\n  regularSize: [1, 1],\n  onGetRectByIndex: (index: number) => {\n  // ···\n    if (index == key1) { // key1是“0”按键对应的index\n      return [6, 0, 1, 2];\n    } else if (index == key2) { // key2是“=”按键对应的index\n      return [5, 3, 2, 1];\n    }\n    // ···\n    // 这里需要根据具体布局返回其他item的位置\n  }\n}\n// ···\nGrid(undefined, this.layoutOptions) {\n  // ···\n}\n.columnsTemplate('1fr 1fr 1fr 1fr')\n.rowsTemplate('1fr 1fr 1fr 1fr 1fr 1fr 1fr')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置主轴方向",
      children: "设置主轴方向"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用Grid构建网格布局时，若没有设置行列数量与占比，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid#layoutdirection8",
        children: "layoutDirection"
      }), "设置网格布局的主轴方向，决定子组件的排列方式。此时可以结合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid#mincount8",
        children: "minCount"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid#maxcount8",
        children: "maxCount"
      }), "属性来约束主轴方向上的网格数量。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图6"
        })
      }), " 主轴方向示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(921299)/* ["default"] */.A) + "",
        width: "871",
        height: "455"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前layoutDirection设置为Row时，先从左到右排列，排满一行再排下一行。当前layoutDirection设置为Column时，先从上到下排列，排满一列再排下一列，如上图所示。此时，将maxCount属性设为3，表示主轴方向上最大显示的网格单元数量为3。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Grid() {\n  // ···\n}\n.maxCount(3)\n.layoutDirection(GridDirection.Row)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(937530)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "layoutDirection属性仅在不设置rowsTemplate和columnsTemplate时生效，此时元素在layoutDirection方向上排列。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅设置rowsTemplate时，Grid主轴为水平方向，交叉轴为垂直方向。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅设置columnsTemplate时，Grid主轴为垂直方向，交叉轴为水平方向。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在网格布局中显示数据",
      children: "在网格布局中显示数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网格布局采用二维布局的方式组织其内部元素，如下图所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图7"
        })
      }), " 通用办公服务"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(804847)/* ["default"] */.A) + "",
        width: "387",
        height: "308"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grid组件可以通过二维布局的方式显示一组GridItem子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Grid() {\n  GridItem() {\n    // app.string.Meeting资源文件中的value值为‘会议’\n    Text($r('app.string.Meeting'))\n    // ...\n  }\n\n  GridItem() {\n    // app.string.Check_in资源文件中的value值为‘签到’\n    Text($r('app.string.Check_in'))\n    // ...\n  }\n\n  GridItem() {\n    // app.string.Voting资源文件中的value值为‘投票’\n    Text($r('app.string.Voting'))\n    // ...\n  }\n\n  GridItem() {\n    // app.string.Printing资源文件中的value值为‘打印’\n    Text($r('app.string.Printing'))\n    // ...\n  }\n}\n// ...\n.rowsTemplate('1fr 1fr')\n.columnsTemplate('1fr 1fr')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于内容结构相似的多个GridItem，通常更推荐使用ForEach语句中嵌套GridItem的形式，来减少重复代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct DataInGrid {\n  // ...\n\n  @State services: Array<string> = [\n    // app.string.Meeting资源文件中的value值为‘会议’\n    this.context!.resourceManager.getStringSync($r('app.string.Meeting').id),\n    // app.string.Check_in资源文件中的value值为‘签到’\n    this.context!.resourceManager.getStringSync($r('app.string.Check_in').id),\n    // app.string.Voting资源文件中的value值为‘投票’\n    this.context!.resourceManager.getStringSync($r('app.string.Voting').id),\n    // app.string.Printing资源文件中的value值为‘打印’\n    this.context!.resourceManager.getStringSync($r('app.string.Printing').id)\n  ];\n  // ...\n\n  build() {\n    // ...\n      Column() {\n        // ...\n          Grid() {\n            ForEach(this.services, (service: string) => {\n              GridItem() {\n                Text(service)\n              }\n              // ...\n            }, (service: string): string => service)\n          }\n          .rowsTemplate(('1fr 1fr') as string)\n          .columnsTemplate(('1fr 1fr') as string)\n          // ...\n      }\n      // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置行列间距",
      children: "设置行列间距"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在两个网格单元之间的网格横向间距称为行间距，网格纵向间距称为列间距，如下图所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图8"
        })
      }), " 网格的行列间距"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(612370)/* ["default"] */.A) + "",
        width: "420",
        height: "453"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过Grid的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid#rowsgap",
        children: "rowsGap"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid#columnsgap",
        children: "columnsGap"
      }), "可以设置网格布局的行列间距。在图5所示的计算器中，行间距为15vp，列间距为10vp。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Grid() {\n  // ···\n}\n.columnsGap(10)\n.rowsGap(15)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "构建可滚动的网格布局",
      children: "构建可滚动的网格布局"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可滚动的网格布局常用在文件管理、购物或视频列表等页面中，如下图所示。在设置Grid的行列数量与占比时，如果仅设置行、列数量与占比中的一个，即仅设置rowsTemplate或仅设置columnsTemplate属性，网格单元按照设置的方向排列，超出Grid显示区域后，Grid拥有可滚动能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图9"
        })
      }), " 横向可滚动网格布局"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(350743)/* ["default"] */.A) + "",
        width: "349",
        height: "190"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果设置的是columnsTemplate，Grid的滚动方向为垂直方向；如果设置的是rowsTemplate，Grid的滚动方向为水平方向。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如上图所示的横向可滚动网格布局，只要设置rowsTemplate属性的值且不设置columnsTemplate属性，当内容超出Grid组件宽度时，Grid可横向滚动进行内容展示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct ScrollableGrid {\n  // ...\n  @State services: Array<string> = [\n    // 请将$r('app.string.Live_Streaming')替换为实际资源文件，在本示例中该资源文件的value值为\"直播\"\n    this.context!.resourceManager.getStringSync($r('app.string.Live_Streaming').id),\n    // 请将$r('app.string.Imported')替换为实际资源文件，在本示例中该资源文件的value值为\"进口\"\n    this.context!.resourceManager.getStringSync($r('app.string.Imported').id)\n    ];\n  // ...\n  build() {\n    // ...\n\n      Column({ space: 5 }) {\n        // ...\n\n          Grid() {\n            ForEach(this.services, (service: string, index: number) => {\n              GridItem() {\n                // ...\n              }\n              .width('25%')\n              // ...\n            }, (service: string): string => service)\n          }\n          .rowsTemplate('1fr 1fr') // 只设置rowsTemplate属性，当内容超出Grid区域时，可水平滚动。\n          .rowsGap(15)\n\n          // ...\n        }\n      }\n      // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "控制滚动位置",
      children: "控制滚动位置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "与新闻列表的返回顶部场景类似，控制滚动位置功能在网格布局中也很常用，例如下图所示日历的翻页功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图10"
        })
      }), " 日历翻页"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(930298)/* ["default"] */.A) + "",
        width: "463",
        height: "477"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Grid组件初始化时，可以绑定一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scroller",
        children: "Scroller"
      }), "对象，用于进行滚动控制，例如通过Scroller对象的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scrollpage9",
        children: "scrollPage"
      }), "方法进行翻页。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "private scroller: Scroller = new Scroller();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在日历页面中，用户在点击“下一页”按钮时，应用响应点击事件，通过指定scrollPage方法的参数next为true，滚动到下一页。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Column({ space: 5 }){\n  Grid(this.scroller) {\n    // ...\n  }\n  .columnsTemplate('1fr 1fr 1fr 1fr 1fr 1fr 1fr')\n  // ...\n  Row({ space: 20 }) {\n    // 请将$r('app.string.Previous_Page')替换为实际资源文件，在本示例中该资源文件的value值为\"上一页\"\n    Button($r('app.string.Previous_Page'))\n      .onClick(() => {\n        this.scroller.scrollPage({\n          next: false\n        });\n      })\n    // 请将$r('app.string.Next_page')替换为实际资源文件，在本示例中该资源文件的value值为\"下一页\"\n    Button($r('app.string.Next_page'))\n      .onClick(() => {\n        this.scroller.scrollPage({\n          next: true\n        });\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加外置滚动条",
      children: "添加外置滚动条"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["网格组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid",
        children: "Grid"
      }), "可与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-basic-components-scrollbar/ts-basic-components-scrollbar",
        children: "ScrollBar"
      }), "组件配合使用，为网格添加外置滚动条。两者通过绑定同一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scroller",
        children: "Scroller"
      }), "滚动控制器对象实现联动。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["首先，需要创建一个", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scroller",
            children: "Scroller"
          }), "类型的对象gridScroller。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "private gridScroller: Scroller = new Scroller();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["然后，通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid#%E6%8E%A5%E5%8F%A3",
            children: "scroller"
          }), "参数绑定滚动控制器。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// gridScroller初始化Grid组件的scroller参数，绑定gridScroller与网格。\nGrid( this.gridScroller) {\n// ···\n}\n"
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
            children: "// gridScroller初始化ScrollBar组件的scroller参数，绑定gridScroller与滚动条。\nScrollBar({ scroller: this.gridScroller })\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图11"
        })
      }), " 网格的外置滚动条"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(905196)/* ["default"] */.A) + "",
        width: "384",
        height: "408"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(652672)/* ["default"] */.A) + "",
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
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
          children: "List"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll",
          children: "Scroll"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow",
          children: "WaterFlow"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在圆形屏幕设备上，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid",
          children: "Grid"
        }), "可以与弧形滚动条组件", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-basic-components-arcscrollbar/ts-basic-components-arcscrollbar",
          children: "ArcScrollBar"
        }), "配合使用为网格添加弧形外置滚动条，使用方式可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-arclist",
          children: "创建弧形列表 (ArcList)"
        }), "的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-arclist#%E6%B7%BB%E5%8A%A0%E5%A4%96%E7%BD%AE%E6%BB%9A%E5%8A%A8%E6%9D%A1arcscrollbar",
          children: "添加外置滚动条ArcScrollBar"
        }), "章节。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "性能优化",
      children: "性能优化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-list#%E9%95%BF%E5%88%97%E8%A1%A8%E7%9A%84%E5%A4%84%E7%90%86",
        children: "长列表的处理"
      }), "类似，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
        children: "循环渲染"
      }), "适用于数据量较小的布局场景，当构建具有大量网格项的可滚动网格布局时，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "数据懒加载"
      }), "方式实现按需迭代加载数据，从而提升网格性能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["关于按需加载优化的具体实现可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "数据懒加载"
      }), "章节中的示例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当使用懒加载方式渲染网格时，为了更好的滚动体验，减少滑动时出现白块，Grid组件中也可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid#cachedcount",
        children: "cachedCount"
      }), "属性设置GridItem的预加载数量，只在懒加载", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "LazyForEach"
      }), "中生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置预加载数量后，会在Grid显示区域前后各缓存cachedCount*列数个GridItem，超出显示和缓存范围的GridItem会被释放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Grid() {\n  LazyForEach(this.dataSource, () => {\n    GridItem() {\n    }\n  })\n}\n.cachedCount(3)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(206725)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cachedCount的增加会增大UI的CPU、内存开销。使用时需要根据实际情况，综合性能和用户体验进行调整。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/grid-hybrid",
          children: "基于Grid的嵌套混合布局"
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
172608(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
921299(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798136-9fb8fbb54cd825e093f53a05b5bb93df.png");

},
930298(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798138-7854c4a2350bda1b4003019a02a01240.gif");

},
652672(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
394535(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798134-4f073278d6a2d966cdc5ad0d209ef4ca.png");

},
720411(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437829-ea78175f2a35fcf759f81d2e4e02a4b0.png");

},
854144(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
350743(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477787-78268f179d60f733e18c74550cb5374b.gif");

},
241608(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477785-a51309cb7b5d1171504879014d5c0234.png");

},
905196(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437833-6ea85e778eeade104da27963f2252979.gif");

},
804847(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437831-cfcd7389e9f1a37ba5da5564229648c2.png");

},
206725(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
937530(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
555108(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
786115(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
612370(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAAHFCAYAAAC95I3KAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAB/ZSURBVHhe7d0JmBTlmcDxt6cPpmeGAYThEBDUcKtEDZdGxSPxjppDTaJJVLwN6qPRPNF4+8TEqBHNIpoQjPusGkOe9YhRF3UXWRUHEI2oERTkEARGQebu6a6t95tqdsABhpnqmhf9/3Yr013d0wM20//+qr6qjnk+QSfwJJvNSSwWC653XFFRUXAJUVu3bp3E4/HgWsdks1mpqKgIrgFfHrFMU85bvLZWEkXhvTBi+zyJSZdYRsqKGtzljtL3FKUlaanJdZFPajLCUxmtrBeTvqkayUk4bwiK/H8VHzemeR4jlvPfmpenE9KvWypYg6jFquubvKn/vUpKUuG8u8OO+e8BZHhFQiYMSkkmG6zsAA1SeWlaXlneKK8v3yTJOCOlKNVmPLlkQon/NVjRQemkyLS5tZKKU6QoNWVzMmL3MvnGyB7BGkQtVtPQ5E2fs5ogRSiT9WRIr7iMGZAMNUiVqzLy5opqSSUIUpRqGz2ZNKY41CDNWFAvKX+IFOIWXexAxg/SsL6lMnFY92ANosYrFwDABIIEADCBIAEATCBIAAATCBIAwASCBAAwgSABAEwgSAAAEwgSAMAEggQAMIEgAQBMIEgAABMIEgDABIIEADCBIAEATCBIAAATCBIAwASCBAAwgSABAEwgSAAAEwgSAMAEggQAMIEgAQBMIEgAABMIEgDABIIEADCBIAEATCBIAAATCBIAwASCBAAwgSABAEwgSAAAEwgSAMAEggQAMIEgAQBMIEgAABMIEgDABIIEADCBIAEATCBIAAATCBIAwASCBAAwgSABAEwgSAAAEwgSAMAEggQAMIEgAQBMIEgAABMIEgDABIIEADCBIAEATCBIAAATCBIAwASCBAAwgSABAEwgSAAAEwgSAMAEggQAMIEgAQBMIEgAABMIEgDABIIEADCBIAEATCBIAAATCBIAwASCBAAwgSABAEwgSAAAEwgSAMAEggQAMIEgAQBMIEgAABMIEgDABIIEADCBIAEATCBIAAATCBIAwASCBAAwgSABAEwgSAAAEwgSAMCEWHV9kzdt9mopSdGmqDRlRYZVxGX8HknJ+Jc7yvM86VaWlleWZ2Th8mpJJmLBLYhCbaMnF41PS20mWNFB6aTIA5V1kiryn0eeyshksp6M6FcqR43oHqzZ0tvLNkk250m6S5Hs6d8vrs8PQhVryDR585ask1QiHqxCoeU0IMVF0qesyL8crOwADVIqmZC11TlZX53hFyVi+kI2qk9CmnLBig5K+O8N31nXJPEYz2OUNDYV5cWyV9/yYM2Wjv/5K7LR//3q1T0l+wwul1smjQxuaZ+nn35ajjvuuOBa+/zrX/+SqqoqOeigg4I1u7ZYNtvkfbbhUykqYoQUJQ1RGDHK0yjF/devImLUKcKKUZ5GCdFyb+xSXSRdWhas2dLM2aukOFkk/5j7sb+slfcf/mZwy86bPn26nHPOOfKLX/xCbr31Vnn44Ydl6dKlEo/HJdbKG5FMJiN77bWXfP/73w/W+P/mmppk1KhR8t5778mLL74oEydOdH+H5cuXS3V19XZf091WlW7dpH///sEafwT49ttyww03SJcuXdxjK32MY445xv3cGTNmuPi19ufTx2toaHB/p5aPubNi/g/2Pv2UIAH4ctMXVX0xLitrPUh5//afS+XOvyyWJf/RviA9+uijcvrpp8vAgQNdPNShhx4qL730kru8Ld/+9rdl5syZwbVm+v36vR9++KE899xz8vWvf12OPvroHT6WuuSSS+See+4JronMmzdPxowZI3vvvbd85StfceueffZZOf/88+W+++6TiooKWb9+vVu/LS+//LJMmDAhuLbzCBIA+NoapCkzP/CXJe0K0pQpU+TSSy+Vfv36yeLFi6W0tNSt/+ijj9wIY1uvw7lcTsrLy6Vnz57BmuZRUyKRkHfeeUe+9a1vyfvvv+/+DhqmVatWudHW1pLJpNvMd+ONN8rll18ud955Z3CLSGVlpYwdO1beeustN/JSQ4YMkSOOOEKmTZsmffv2dbGZOnWqNDY2up/Vko6q9D75v1N7ECQA8BU6SL/5zW/k6quvdi/yOvLYc889g1va5+9//7uLg45eNmzY4CKko6MdWbhwodvnpCOfu+66K1j7/0GaM2eOHHzwwW7doEGD5Nhjj3U/o0+fPm6zoI7wCoUKAUCB6Yu8xkg3ib3wwgsuRjrC6Yhly5a5KK1cuVL22WcfF4tFixbJu+++60ZN+UWv6/p169a576urq3Mjrm1pOQrTQLdUUlISXCoMggQABab7dq6//np57bXXZMCAAS4QqVRKrrvuuuAeO0831+mS3zQ3d+5cF6YRI0bIyJEjNy96Xdf/7W9/c/fblvxkhf3220+GDh3qvk83K+al02k3sUHv19qyo8dvCzbZAYCv7Zvs3pd/+88PpHLa4VJT1ySl6bgUp+Kie1TcYyS3fwjNmjVr3Iu+jlR0IsGSJUvkiSeecIFqSV+TdZ+P7pvJZrNuRKVhO+OMM9ztul9HJyboRAIdeeko7JBDDnH7qMaPH+/28+j36wjppptukj/84Q9uFtwrr7wihx9+uFx44YVbbLLTEde5557rZt/ppAgdUZ188sly4oknyllnneVCqn+Gww47bItZeJ988omb5ff444+7fVkdQZAAwNfWIN33+FL50z8+lP327iaZppx0LUk0B8n/fo2SXi7zI5VOJeSy7+3d/E2BTZs2yQ9+8AN56qmnZNasWXLkkUe6kdP999/vRjs60lD5F3q9f3FxsZssUF9fL5MmTZKbb77Z3WdbQdLjm3S/T57uM9J9Q7///e9dcLYVpJbOO+889+f74IMPgjUivXv3dvuoHnrooWBNM51MceCBB8qf/vQnOeWUU4K17UOFAGAnNOU8F46Va+ukuj7rrpd0iUtJcVxK/cVPm8RjRTKob7r5G1rQ0YvGSI/t0RipK6+80kVj/vz5bsSky5tvvil//OMf3e0aoDfeeMPd56qrrnLrtkdn66n8Piq9rrHbEY2bjoaUxi8/Cmop/9gtbdy40Y3gwkCQAGAn6HyAqo0N8o/bD5K/3jhWpl7+Vbnx7BFy09kj3XLrpFFy1Q+GyCmH7B58R7PvfOc7bhShdAp3XteuXd0MNh2B5Be9Xb+qHj16uOt6H73vtuT3JekoRYOpmwD1q26+082Duvlue/SYpvw+Ix2h6YhPZ97pNHANkT7WtqaSh7WFjSABwE7a2ZOsTJ482e301304+++/vxuB7Eh+hLK9GXEtaUDUCSecILfccoubMKGjq1NPPdWt39Hj6CgqHy39qrP3dFOfHoekozOdYafHMOnBtHr80h133CF3332324SnmxbDiBJBAoAC0/1Sv/zlL90LuO6namtkdkb+MS+++GK55ppr3MGv1157rbuso6Wd2aymMdRRmW461KnlOuNOg/f666+7uF5xxRVuU+Nll10mt99+e/P+syCIHUGQAKDANEY6003363T0+KMd0enZLenIZmdHLxq37t27y7777usmTGicdFSnkxp0lqCed08nPOQX3dR31FFHBd/dfgQJAAosH4n27Pxv68gjfz89QFb39+QXPTNEWzYRqny4Ws7409GSBiofKd2XNXjwYHdwb37Rc9/taHZiWxAkANgJqYg+bywfMZ323RZ68lPd36PHDp100kmbF72uIxs92FXp5judnLD1ZkP9OTU1Ne64KN1/pIcDnXnmmS5wOstPv68ts/U6wh2HpKcUD2uWBNom/+4lLGFtw0X7hP37s/WLBQpPf3/0RXlbM9n0LN/6sXGV726Q5+evlQ8e2fF547amr7UaBz256pNPPhmsbaYHoupJVvWYI93Mpvtn9GMq9AzfeqbvrW19HNKO6N9PX3P0/HcXXXSRm/Cg+5iU/hzd16Sb4/J0X9e4cePcsU36cw444AD371xnC+pBt1vTmXh6YKwGsL1i/h/SfxXjhSxaMck21suGTTWhREmfQn330rVrx4fMaI+YOy1/WFHSGPXq1cu/xO9l52j9d3L02S/IhuqMVHRPyaGje8mdF+8b3NJ2Gh0904EG6fnnnw/WNtOZbDoDT4OoIxEdoej99Lik3Xffcgq50tluOsGgLR/5cNttt8mvf/1r9zqxdu1at05/3ujRo91l/TgMPQ5KD5bV0w3pz9NNcLp5Ts/erZvtdPq4fvaSbnZ02diKTi2/4IILXPDaq/kjzP/nI0nzEeaR0Q9zG16RkPEDk5IJ4Y2w/uMoL03Lqyv0I8w3+e/iotmkgGZ1GZELx6Wl7vPHEbZLOiHywLw6SfIrGakm/Qjz3fUjzHsEa8Kn06P1gFc9PY+ejqclfdHXMyfo5jJ9U6KROe2001o99kfNnj1bnnnmGXfWbj0r9/a8+uqr8sgjj7jH1cjoKGf48OHBrXbEavwg/XHOaikhSJHRIA3pFZcxA/wghXCAcz5IlSsz8ubKakkSpEjVZjw5d0za/xqs6KB0UmTG/DpJ8TxGSj+Kfli/Ujl8WPdgDaJWpKNT3WqU36fBUvilYIKHbu1nshRw2cYmng7xH1ef0FZ/HkuBls2/QugkDIsAACYQJACACQQJAGACQQIAmECQAAAmECQAgAkECQBgAkECAJhAkAAAJhAkAIAJBAkAYAJBAgCYQJAAACYQJACACQQJAGACQQIAmECQAAAmECQAgAkECQBgAkECAJhAkAAAJhAkAIAJBAkAYAJBAgCYQJAAACYQJACACQQJAGACQQIAmECQAAAmECQAgAkECQBgAkECAJhAkAAAJhAkAIAJBAkAYAJBAgCYQJAAACYQJACACQQJAGACQQIAmECQAAAmECQAgAkECQBgAkECAJhAkAAAJhAkAIAJBAkAYAJBAgCYQJAAACYQJACACQQJAGACQQIAmECQAAAmECQAgAkECQBgAkECAJhAkAAAJhAkAIAJBAkAYAJBAgCYQJAAACYQJACACQQJAGACQQIAmECQAAAmECQAgAkECQBgAkECAJhAkAAAJhAkAIAJBAkAYAJBAgCYQJAAACYQJACACQQJAGACQQIAmECQAAAmECQAgAkECQBgAkECAJjggpTzdPFYIlr8/9zifwmdPqY+bGs/k6WAS/N//lD5D+s/l638LJaCLf7/F+T3Em0Xq67PeA++vEbSyXiwCoXW5L8D+ErPuHytf1IyIbyaef5vUdfStMxflZG3VtVIoigW3IIo1DV58pMDiqW+KVjRQcUJkX9fWC9JnsdINeVyMrRvqRw2tHuwBlGLVa1f5xUn2XIXtawfojBilKdR0qcxEedFrDOEFaM8jRKiVVRUJMVlxKgzxaqqqhikAvhS0zd0GqQePXoEa9AZGBoBAEwgSAAAEwgSAMAEggQAMIEgAQBMIEgAABMIEgDABIIEADCBIAEATCBIAAATCBIAwASCBAAwgSABAEwgSAAAE2JV69d7ST5DJ3JZr/mTesOip8+P+28v4jGey84Q5mdbqYT/XPJMRkd/FfXjJ8rK+TykzhTbuKnaW/BhtRCl6GiMepbEpH95PJQoaYy6pJKy6rOsfLyx0Q8Tz2WUMv4TemBIn/6rNEavr864Nxc8k9HQX0P/10gG9i6XwT2Lm1cicrGahqw37X8+kpIUW++ioi9cw3rFZfwe/otYNljZARqkbmVpeWVFRhYur5YUby4iVZvx5MJxaf9rsKKD0kmRP1TWuTeJPJPR0TcWw/uWyFEj+ZC+zuIHqcmbPme1H6R4sAqFpv/wh/hBGjMgvCCVl6alclVG3lzhB0nfYiMytY2eTBpTHGqQZiyol5Q/0mULbHQy2ZwM61sqE4ex2a6z8MoFADCBIAEATCBIAAATCBIAwASCBAAwgSABAEwgSAAAEwgSAMAEggQAMIEgAQBMIEgAABMIEgDABIIEADCBIAEATCBIAAATCBIAwASCBAAwgSABAEwgSAAAEwgSAMAEggQAMIEgAQBMIEgAABMIEgDABIIEADCBIAEATCBIAAATCBIAwASCBAAwgSABAEwgSAAAEwgSAMAEggQAMIEgAQBMIEgAABMIEgDABIIEADCBIAEATCBIAAATCBIAwASCBAAwgSABAEwgSAAAEwgSAMAEggQAMIEgAQBMIEgAABMIEgDABIIEADCBIAEATCBIAAATCBIAwASCBAAwgSABAEwgSAAAEwgSAMAEggQAMIEgAQBMIEgAABMIEgDABIIEADCBIAEATCBIAAATCBIAwASCBAAwgSABAEwgSAAAEwgSAMAEggQAMIEgAQBMIEgAABMIEgDABIIEADCBIAEATCBIAAATCBIAwASCBAAwgSABAEyI1TRkvd+/uEpKUvFgFQqtKefJ8IqEHDQoKZlssLIDPM+TbmUl8vLyjCz48DNJxnmfEaXajCc/nZD2vwYrOiidFLlvbp3/PMYkFqxD4WX938v9BpTKxGHdgzWIWuyTqiovk/Ukxr/8yHj+UuT/9y4K6T+6Bkkfy38aJedf5qmMlv+f3MVDn9cw6POX8V8ceR6jo7+KG+s8WbwxLseM6hGsRdRiVevXezFqFLmwXrzyNEr6NPKeunOE/XzyLEZL3yBuqMvJ25/G5ViC1GliVf4IKbgMAF9K+mZuQ21O/rm+SL41erdgLaJGkADAH+NmczGJFZdLr7JEsA5RY+83gC+9/H5AYtS5CBIA+NhU1PkIEgDABIIEADCBIAEATCBIAAATCBIAwASCBAAwgSABAEwgSAAAEwgSAMAEggQAMIEgAQBMIEgAABMIEgDAhCJ33nXs8vQTYzlfMdA++gm9fEpv54tVVa33imJ88HXUcv4S1nsB9/Hl/lf91Et9LhEtfRpzIb8X0I/U5pmMkidFRUXStRsfX96ZYjUNOe/eF1dKSSoerEKhNWU9GdE7IQcNSkomG6zsAA1St7IS+d/lGVmw7DNJJtgSG6XaRk8mH5SW2kywooPSSZGpc+skRZUilWnKyYh+JXLMPnyEeWfxg9TkTZ+zmiBFKOMHaUivuIwZEF6QykvTUrkqI2+uqJYUQYqUBmnSmOJQgzRjQb0LEgPe6GSyORnWt1QmDuserEHUeOUCAJhAkAAAJhAkAIAJBAkAYAJBAgCYQJAAACYQJACACQQJAGACQQIAmECQAAAmECQAgAkECQBgAkECAJhAkAAAJhAkAIAJBAkAYAJBAgCYQJAAACYQJACACQQJAGACQQIAmECQAAAmECQAgAkECQBgAkECAJhAkAAAJhAkAIAJBAkAYAJBAgCYQJAAACYQJACACQQJAGACQQIAmECQAAAmECQAgAkECQBgAkECAJhAkAAAJhAkAIAJBAkAYAJBAgCYQJAAACYQJACACQQJAGACQQIAmECQAAAmECQAgAkECQBgAkECAJhAkAAAJhAkAIAJBAkAYAJBAgCYQJAAACYQJACACQQJAGACQQIAmECQAAAmECQAgAkECQBgAkECAJhAkAAAJhAkAIAJBAkAYAJBAgCYQJAAACYQJACACQQJAGACQQIAmECQAAAmECQAgAkECQBgAkECAJhAkAAAJhAkAIAJBAkAYAJBAgCYQJAAACYQJACACQQJAGACQQJC4OnieaEs7sGAL6FYTX2T98BLH0lJKh6sQqFlcp4M7ZWQcQMS0pgNVnaAvoh1KyuRuSsz8uaKaknGY8EtiEJtoyfnjimW2kw4JSlJxmT6gnpJ+c8jz2R0MllPhvcrkSOG9wjWIGqx2oYm728L1kux/0uAaGRzInv0iMu+fRLulyAMpeku8tbHTfLex7WSKOK5jFJtY07OnNA3uBaOR+Z+LMkEz2OUmvw3inv2SsvYPcuDNYhazH93zQYCAECnYx8SAMAEggQAMIEgAQBMIEgAABMIEgDABILUidZtaJCGMA5E8m2qzcjG6kxwDQB2PQSpE933xFJ5e9mm4FrH/Ne8tTJz9kfBNQDY9XAcUid65IWVLkij9uwq2W0cIKvPTv+KYlld1dB8WplWxIti8sb7G+XgfXrK8SEfoAkAUSFInWj9xkaZ9+6nUp/JSmsniYn5q2L+/9z+yHtyznGDZbfylORyn3+6PP//SrokZOyI7tK9LBWsBYBdC0HaBRwyeba8NOXQ4BoAfDGxD2kX0LNrl+ASAHxxEaRdQN/dCBKALz6CtAsY2DsdXAKALy6CtAs4/IBewSUA+OJiUgMAwARGSAAAEwgSAMAEggQAMIEgAQBMIEgAABMIEgDABIIEADCBIAEATCBIAAATCJIhy5Ytk5tvvllefvnlYM3/03Wvv/56cA0Avng4dVAB/PznP5dEIuE+XE+/qqamJvdV6eW9995bzjjjDCkuLg7WisyfP1++9rWvydSpU+WCCy4I1oqsXr1aRo8eLevWrZMFCxbI/vvv7x5jyZIlUlNTI0VFrb+v0J+fy+Wkb9++svvuuwdrRZ5//nm5/fbbJZVKucfJf/9ZZ50lJ554ovz2t7+V+vr6Vj+hVtfF43G58MIL3eMCQGg0SAiXHxnPf9H2SkpK9BXdLf6L/+ZFrx911FHeokWLvHvvvdebM2eO+z5/BORue+CBB9z1lhYvXuztscce7nY/XN6aNWu8ESNGbH787S1+fIJHafbYY4+59WPHjvVOPfVU7/jjj3fXb7nlFnd7/vu6dOmyxZ9bF/17lZaWegsXLnT3BYCwMEIqgFWrVrnRiR8k+epXvyrdunWTZ5991o1W9D+3LmVlZfLuu+/KhAkTZNKkSeJHSN544w13f72s6/Lq6urcaEZvP+GEE8QPhSxdulRmzZoln3zySasjJL1PZWWl2wR4zz33yCWXXBLcIvKXv/xFzj//fPd4fuTcugEDBrhRzzXXXOP+7Hq7HyhpbGz83EhJ/x4VFRVbjO4AoKPYh1QA/fv3d5vIGhoa3Oa20047bfNmM71NX/y7d++++QVdw7U9Dz74oJx88skyaNAgeeaZZ2TmzJluvT/KEn+EI9/97nc/t+imt4kTJ7r7tfaeQzfVbdy40V3etGmTZDIZdzlP/0y9evXa/GduuQwcOJAYAQgdQSqgp556yo0wjj76aMlms1JbW+sW3T+j2jo4Xbx4scyePVvWrl0r++23n+y1115uX9LChQs/t+h+qE8//dR9nwZxW3Tf1m677eYud+3a1Y3AWtpRJAEgbASpQNavXy933XWXu6wTFTQApaWlbtEQ6GSE/ISHHUkmk24TnG5KUzpCOvDAA93khq0X/Vmvvfaau9+26ONs2LDBjdT69evnRkIrV64Mbm2+/dZbb3VfW1vmzZsX3BMAwkOQCuS5556TRYsWuU1tug/njjvucIHSfUcaAA1TW0dIW8uPZnT/0OOPPy6PPfaYPPHEE3Lttde69Rqw7Rk6dKicfvrpct5557kRnI7ezj77bBkzZoy7Xf9cI0aMcDP9zjnnHLfoPqVjjz3W3b71aAoAQuG/+CBkmzZt8g455BDPf+EP1jT77LPPvK5du3onnXSSu56fVTd58mR3feHChe761rPsrr76aq+iosJ755133PUHH3zQ3a+ystJdz3vhhRfc+lmzZrnrTz/9tLs+ZcoUd701OtvvsMMOC655XiaTcd+jP3Nrc+fOdbfpnxsAwsYIqQB09ttLL70k7733ntuvk6ez23QCgc5mU/5/f/e1PXTTmT6WznjT/VL6deuJCdvyjW98Q84880x3Wb+n5TFS+rgqv5+rperq6uASAISPIIVM43DKKafIsGHD3MGsul/noYcecsH461//6u6jkxw6Qvc9acyOOOIId5Cqbv7Tr/nH1cvbs2bNGneQrdL76mw7nb3nj4A2R621x9jRpkAA6AiCFDI924HSqdp6HND3vvc9+dGPfiTHHXecOxap5fFF7ZUfWem+nbvvvtudWWHKlCluCrja0chLg5YPju4Peuutt9y+rh/+8IfuGCoNj56qSPdRXX/99W7RyzNmzHDfkx9FAUCYCFLIfvzjH8ttt90m48aNcy/supnuqquucjHSY3puuOGG4J7tp5MQlG76mzx5slxxxRXy05/+VC666CK3XkdjbaWTGnQ0989//tNNkNA/o46SXn31Vbnppps2L9ddd538+c9/dt/TchMfAISFIIVMR0IaoJb0QFJ12WWXuQNL8zQGKn+A6s5Kp9PBpWbtOVhV46ZnXRgyZIiMGjXKTS9XOpLTqeG6aS+/6EG+urlPj4UCgLARpAJouUnrd7/7nRu96HLllVcGa5vpKEonD+Q3hbVVfpOcBkR/Vn4ZP368W9+WyRL5TXYtj4XSSRL50ZceLKv7pnSKesulT58+7EsCUBAEqUD0hf1Xv/qVXH755fLNb37T7edpTX5EojQAbaGb2HR/kR47tPWixxcNHjzY3S//2PnI5OlIqqqqyp3tQUc8eiaI448/Xo455hhZsWKFOzcexxoBiBonVy0A3dSlB5U++uijboq1fu3Ro0dw65aefPJJNzLRzW96eiAdUd17771y8cUXB/do/jiL6dOnu9uHDx8erG2djrjyMdH9VToZ4eGHH3ah0n1Lel1PmtpyP5COfHS0pufG06jpyWA1agcffPDn9hfpPxdddKKGnugVAMJCkEKmZ9/u2bOnu/yTn/xE7r///u1u4tJQaLBa0qi0HDnpvqdp06a5U/boZrrtufTSS92MO/3+/Lns9DRF+XPTHXnkke7s4TpDT88s3rt3bzcyKy8vd5vv9LaRI0e6Y440Rq3989D1P/vZz9zsOwAIC0EqAP2oBz3XXH4K+Pboh+zpsUu6D0hHJvmPg2hJZ+jpR1XotGwdzWyPzo7TUZdGUGfM6ZnG9XEBwDqCBAAwgUkNAAATCBIAwASCBAAwgSABAEwgSAAAEwgSAMAEggQAMIEgAQBMIEgAABMIEgDABIIEADCBIAEATCBIAAATCBIAwACR/wPd7YeyJDDERgAAAABJRU5ErkJggg==");

},
165657(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437809-c913f3e9fc8fa4bf2f1b17b18788848a.png");

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