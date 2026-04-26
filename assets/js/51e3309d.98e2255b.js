"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["188012"], {
263237(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_list_and_grid_arkts_layout_development_create_waterflow_arkts_layout_development_create_waterflow_md_51e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-list-and-grid-arkts-layout-development-create-waterflow-arkts-layout-development-create-waterflow-md-51e.json
var site_docs_arkui_arkts_ui_development_arkts_list_and_grid_arkts_layout_development_create_waterflow_arkts_layout_development_create_waterflow_md_51e_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-waterflow/arkts-layout-development-create-waterflow","title":"创建瀑布流（WaterFlow）","description":"瀑布流常用于展示图片信息，尤其在购物和资讯类应用中。","source":"@site/docs/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-waterflow/arkts-layout-development-create-waterflow.md","sourceDirName":"arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-waterflow","slug":"/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-waterflow/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-waterflow/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"创建瀑布流（WaterFlow）","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-create-waterflow","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"创建网格 (Grid/GridItem)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-grid/"},"next":{"title":"文本概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-text/arkts-text-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-waterflow/arkts-layout-development-create-waterflow.md


const frontMatter = {
	title: '创建瀑布流（WaterFlow）',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-create-waterflow',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '创建瀑布流（WaterFlow）';

const assets = {

};



const toc = [{
  "value": "布局与约束",
  "id": "布局与约束",
  "level": 2
}, {
  "value": "无限滚动",
  "id": "无限滚动",
  "level": 2
}, {
  "value": "到达末尾时新增数据",
  "id": "到达末尾时新增数据",
  "level": 3
}, {
  "value": "提前新增数据",
  "id": "提前新增数据",
  "level": 3
}, {
  "value": "动态切换列数",
  "id": "动态切换列数",
  "level": 2
}, {
  "value": "分组混合布局",
  "id": "分组混合布局",
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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "创建瀑布流waterflow",
        children: "创建瀑布流（WaterFlow）"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow",
        children: "瀑布流"
      }), "常用于展示图片信息，尤其在购物和资讯类应用中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI提供了WaterFlow容器组件，用于构建瀑布流布局。WaterFlow组件支持条件渲染、循环渲染和懒加载等方式生成子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(277423)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文仅展示关键代码片段，可运行的完整代码请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow#%E7%A4%BA%E4%BE%8B",
        children: "WaterFlow示例代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "布局与约束",
      children: "布局与约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["瀑布流支持横向和纵向布局。在纵向布局中，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow#columnstemplate",
        children: "columnsTemplate"
      }), "设置列数；在横向布局中，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow#rowstemplate",
        children: "rowsTemplate"
      }), "设置行数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在瀑布流的纵向布局中，第一行的子节点按从左到右顺序排列，从第二行开始，每个子节点将放置在当前总高度最小的列。如果多个列的总高度相同，则按照从左到右的顺序填充。如下图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(803147)/* ["default"] */.A) + "",
        width: "377",
        height: "779"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在瀑布流的横向布局中，每个子节点都会放置在当前总宽度最小的行。若多行总宽度相同，则按照从上到下的顺序进行填充。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(646166)/* ["default"] */.A) + "",
        width: "377",
        height: "408"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "无限滚动",
      children: "无限滚动"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "到达末尾时新增数据",
      children: "到达末尾时新增数据"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["瀑布流常用于无限滚动的信息流。可以在瀑布流组件到达末尾位置时触发的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow#onreachend",
        children: "onReachEnd"
      }), "事件回调中对", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach",
        children: "LazyForEach"
      }), "增加新数据，并将footer做成正在加载新数据的样式（使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-loadingprogress/ts-basic-components-loadingprogress",
        children: "LoadingProgress"
      }), "组件）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nitemFoot() {\n  Row() {\n    LoadingProgress()\n      .color(Color.Blue).height(50).aspectRatio(1).width('20%')\n    // 请将$r('app.string.waterFlow_text1')替换为实际资源文件，在本示例中该资源文件的value值为\"正在加载 \"\n    Text($r('app.string.waterFlow_text1'))\n      .fontSize(20)\n      .width('30%')\n      .height(50)\n      .align(Alignment.Center)\n      .margin({ top: 2 })\n  }.width('100%').justifyContent(FlexAlign.Center)\n}\n\nbuild() {\n  NavDestination() {\n    Column({ space: 12 }) {\n      // ...\n        WaterFlow({ footer: this.itemFoot(), layoutMode: WaterFlowLayoutMode.SLIDING_WINDOW }) {\n          LazyForEach(this.dataSource, (item: number) => {\n            FlowItem() {\n              ReusableFlowItem({ item: item })\n            }\n            .width('100%')\n            .aspectRatio(this.itemHeightArray[item % 100] / this.itemWidthArray[item%100])\n            .backgroundColor(this.colors[item % 5])\n          }, (item: string) => item)\n        }\n        .columnsTemplate('1fr '.repeat(this.columns))\n        .backgroundColor(0xFAEEE0)\n        .width('100%')\n        .height('100%')\n        .layoutWeight(1)\n        // 触底加载数据\n        .onReachEnd(() => {\n          setTimeout(() => {\n            this.dataSource.addNewItems(100);\n          }, 1000)\n        })\n      }\n      // ...\n  }\n  .backgroundColor('#f1f2f3')\n  // 请将$r('app.string.WaterFlowInfiniteScrolling_title')替换为实际资源文件，在本示例中该资源文件的value值为\"无限滚动（到达末尾时新增数据）\"\n  .title($r('app.string.WaterFlowInfiniteScrolling_title'))\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在此处应通过在数据末尾添加元素的方式来新增数据，不可直接修改dataArray后通过LazyForEach的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach#ondatareloaded",
        children: "onDataReloaded"
      }), "方法通知瀑布流重新加载数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于在瀑布流布局中，各子节点的高度不一致，下面的节点位置依赖于上面的节点，所以重新加载所有数据会触发整个瀑布流重新计算布局，可能会导致卡顿。在数据末尾增加数据后，应使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach#ondataadd8",
        children: "onDataAdd"
      }), "通知，以使瀑布流能够识别新增数据并继续加载，同时避免对已有数据进行重复处理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(606008)/* ["default"] */.A) + "",
        width: "367",
        height: "713"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "提前新增数据",
      children: "提前新增数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "虽然在onReachEnd()触发时加载数据可以实现无限加载，但在滑动到底部会出现明显的停顿。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了实现更加流畅的无限滑动，需要调整增加新数据的时机。比如可以在LazyForEach还剩余若干个数据未遍历的情况下提前加载新数据。以下代码通过在WaterFlow的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow#onscrollindex11",
        children: "onScrollIndex"
      }), "中判断当前显示的最后一个子节点相对数据集终点的距离，并在合适时机提前加载新数据，实现了无停顿的无限滚动。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "build() {\n  NavDestination() {\n    Column({ space: 12 }) {\n      // ...\n        WaterFlow({ layoutMode: WaterFlowLayoutMode.SLIDING_WINDOW }) {\n          LazyForEach(this.dataSource, (item: number) => {\n            FlowItem() {\n              ReusableFlowItem({ item: item })\n            }\n            .width('100%')\n            .aspectRatio(this.itemHeightArray[item % 100] / this.itemWidthArray[item%100])\n            .backgroundColor(this.colors[item % 5])\n          }, (item: string) => item)\n        }\n        .columnsTemplate('1fr '.repeat(this.columns))\n        .backgroundColor(0xFAEEE0)\n        .width('100%')\n        .height('100%')\n        .layoutWeight(1)\n        // 即将触底时提前增加数据\n        .onScrollIndex((first: number, last: number) => {\n          if (last + 20 >= this.dataSource.totalCount()) {\n            setTimeout(() => {\n              this.dataSource.addNewItems(100);\n            }, 1000);\n          }\n        })\n      }\n      // ...\n  }\n  .backgroundColor('#f1f2f3')\n  // 请将$r('app.string.WaterFlowInfiniteScrollingEarly_title')替换为实际资源文件，在本示例中该资源文件的value值为\"无限滚动（提前新增数据）\"\n  .title($r('app.string.WaterFlowInfiniteScrollingEarly_title'))\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(797280)/* ["default"] */.A) + "",
        width: "367",
        height: "713"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "动态切换列数",
      children: "动态切换列数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过动态调整瀑布流的列数，应用能够实现在列表模式与瀑布流模式间的切换，或适应屏幕宽度的变化。 若要动态设置列数，建议采用瀑布流的移动窗口布局模式，即取值为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow#waterflowlayoutmode12%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "WaterFlowLayoutMode枚举说明"
      }), "中的SLIDING_WINDOW，这可以实现更快速的列数转换。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Reusable\n@Component\nstruct ReusableListItem {\n  @State item: number = 0;\n\n  aboutToReuse(params: Record<string, number>) {\n    this.item = params.item;\n  }\n\n  build() {\n    Row() {\n      Image('res/waterFlow(' + this.item % 5 + ').JPG')\n        .objectFit(ImageFit.Fill)\n        .height(100)\n        .aspectRatio(1)\n      Text('N' + this.item).fontSize(12).height('16').layoutWeight(1).textAlign(TextAlign.Center)\n    }\n  }\n}\n\n@Entry\n@Component\nexport struct WaterFlowDynamicSwitchover {\n  // 通过状态变量设置列数，可以按需修改触发布局更新\n  @State columns: number = 2;\n\n  // ...\n  build() {\n    NavDestination() {\n      Column({ space: 12 }) {\n        // ...\n          Column({ space: 2 }) {\n            // 请将$r('app.string.waterFlow_text2')替换为实际资源文件，在本示例中该资源文件的value值为\"切换列数 \"\n            Button($r('app.string.waterFlow_text2')).fontSize(20).onClick(() => {\n              if (this.columns === 2) {\n                this.columns = 1;\n              } else {\n                this.columns = 2;\n              }\n            })\n            WaterFlow({ layoutMode: WaterFlowLayoutMode.SLIDING_WINDOW }) {\n              LazyForEach(this.dataSource, (item: number) => {\n                FlowItem() {\n                  if (this.columns === 1) {\n                    ReusableListItem({ item: item })\n                  } else {\n                    ReusableFlowItem({ item: item })\n                  }\n                }\n                .width('100%')\n                .aspectRatio(this.columns === 2 ? this.itemHeightArray[item % 100] / this.itemWidthArray[item % 100] : 0)\n                .backgroundColor(this.colors[item % 5])\n              }, (item: string) => item)\n            }\n            .columnsTemplate('1fr '.repeat(this.columns))\n            .backgroundColor(0xFAEEE0)\n            .width('100%')\n            .height('100%')\n            .layoutWeight(1)\n            // 即将触底时提前增加数据\n            .onScrollIndex((first: number, last: number) => {\n              if (last + 20 >= this.dataSource.totalCount()) {\n                setTimeout(() => {\n                  this.dataSource.addNewItems(100);\n                }, 1000);\n              }\n            })\n            // ...\n          }\n        }\n        // ...\n    }\n    .backgroundColor('#f1f2f3')\n    // 请将$r('app.string.WaterFlowDynamicSwitchover_title')替换为实际资源文件，在本示例中该资源文件的value值为\"动态切换列数\"\n    .title($r('app.string.WaterFlowDynamicSwitchover_title'))\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(569137)/* ["default"] */.A) + "",
        width: "416",
        height: "856"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "分组混合布局",
      children: "分组混合布局"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "许多应用界面在瀑布流上方包含其他内容，这类场景可通过在Scroll或List内部嵌套WaterFlow来实现。类似下图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(327481)/* ["default"] */.A) + "",
        width: "372",
        height: "776"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果能够将不同部分的子节点整合到一个数据源中，那么通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow#waterflowsections12",
        children: "WaterFlowSections"
      }), "，可以在一个 WaterFlow 容器内实现混合布局。与嵌套滚动相比，这种方法可以简化滚动事件处理等应用逻辑。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每个瀑布流分组可以分别设置自己的列数、行间距、列间距、margin和子节点总数，如下代码可以实现上述效果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct WaterFlowGroupingMixing {\n  minSize: number = 80;\n  maxSize: number = 180;\n  colors: number[] = [0xFFC0CB, 0xDA70D6, 0x6B8E23, 0x6A5ACD, 0x00FFFF, 0x00FF7F];\n  dataSource: WaterFlowDataSource = new WaterFlowDataSource(100);\n  private itemWidthArray: number[] = [];\n  private itemHeightArray: number[] = [];\n  private gridItems: number[] = [];\n  @State sections: WaterFlowSections = new WaterFlowSections();\n  sectionMargin: Margin = {\n    top: 10,\n    left: 5,\n    bottom: 10,\n    right: 5\n  };\n  oneColumnSection: SectionOptions = {\n    itemsCount: 1,\n    crossCount: 1,\n    columnsGap: 5,\n    rowsGap: 10,\n    margin: this.sectionMargin,\n  };\n  twoColumnSection: SectionOptions = {\n    itemsCount: 98,\n    crossCount: 2,\n  };\n  // 使用分组瀑布流时无法通过footer设置尾部组件，可以保留一个固定的分组作为footer\n  lastSection: SectionOptions = {\n    itemsCount: 1,\n    crossCount: 1,\n  };\n\n  // 计算FlowItem宽/高\n  getSize() {\n    let ret = Math.floor(Math.random() * this.maxSize);\n    return (ret > this.minSize ? ret : this.minSize);\n  }\n\n  // 设置FlowItem的宽/高数组\n  setItemSizeArray() {\n    for (let i = 0; i < 100; i++) {\n      this.itemWidthArray.push(this.getSize());\n      this.itemHeightArray.push(this.getSize());\n    }\n  }\n\n  aboutToAppear() {\n    this.setItemSizeArray();\n    for (let i = 0; i < 15; ++i) {\n      this.gridItems.push(i);\n    }\n    // 所有分组的itemCount之和需要和WaterFlow下数据源的子节点总数相等，否则无法正常布局\n    let sectionOptions: SectionOptions[] = [this.oneColumnSection, this.twoColumnSection, this.lastSection];\n    this.sections.splice(0, 0, sectionOptions);\n  }\n\n  build() {\n    NavDestination() {\n      // ...\n        WaterFlow({ layoutMode: WaterFlowLayoutMode.SLIDING_WINDOW, sections: this.sections }) {\n          LazyForEach(this.dataSource, (item: number) => {\n            FlowItem() {\n              if (item === 0) {\n                Grid() {\n                  ForEach(this.gridItems, (day: number) => {\n                    GridItem() {\n                      Text('GridItem').fontSize(14).height(16)\n                    }.backgroundColor(0xFFC0CB)\n                  }, (day: number) => day.toString())\n                }\n                .height('30%')\n                .rowsGap(5)\n                .columnsGap(5)\n                .columnsTemplate('1fr '.repeat(5))\n                .rowsTemplate('1fr '.repeat(3))\n              } else {\n                ReusableFlowItem({ item: item })\n              }\n            }\n            .width('100%')\n            .aspectRatio(item != 0 ? this.itemHeightArray[item % 100] / this.itemWidthArray[item % 100] : 0)\n            .backgroundColor(item != 0 ? this.colors[item % 5] : Color.White)\n          }, (item: string) => item)\n        }\n        .backgroundColor(0xFAEEE0)\n        .height('100%')\n        // 即将触底时提前增加数据\n        .onScrollIndex((first: number, last: number) => {\n          if (last + 20 >= this.dataSource.totalCount()) {\n            setTimeout(() => {\n              this.dataSource.addNewItems(100);\n              // 增加数据后同步调整对应分组的itemCount\n              this.twoColumnSection.itemsCount += 100;\n              this.sections.update(1, this.twoColumnSection);\n            }, 1000);\n          }\n        })\n        .margin(10)\n      }\n      // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(841326)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用分组混合布局时不支持单独设置footer，可以使用最后一个分组作为尾部组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "增加或删除数据后需要同步修改对应分组的itemCount。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/water-flow",
          children: "实现WaterFlow瀑布流布局功能"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS-Cases/cases/blob/master/CommonAppDevelopment/feature/functionalscenes/README.md",
          children: "主页瀑布流实现"
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
277423(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
797280(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798140-549dd3a945b4a34dd9be0ece6b288b1b.gif");

},
646166(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957788-cb23d81a82886d9ba129c7784e249a90.png");

},
841326(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
327481(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957790-43c112ef8cfaa6d4a5df01d9f9aa63da.png");

},
606008(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477789-70e89b8b168eb28dba9abe24dc1df644.gif");

},
803147(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957764-039b5528823c6b7cd42a6cb987ffd55c.png");

},
569137(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437835-2c2a7f1d991745fe80568e67331cf01a.gif");

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