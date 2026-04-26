"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["629970"], {
608869(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_layout_development_arkts_build_layout_arkts_layout_development_stack_layout_arkts_layout_development_stack_layout_md_9e6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-layout-development-arkts-build-layout-arkts-layout-development-stack-layout-arkts-layout-development-stack-layout-md-9e6.json
var site_docs_arkui_arkts_ui_development_arkts_layout_development_arkts_build_layout_arkts_layout_development_stack_layout_arkts_layout_development_stack_layout_md_9e6_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-stack-layout/arkts-layout-development-stack-layout","title":"层叠布局 (Stack)","description":"概述","source":"@site/docs/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-stack-layout/arkts-layout-development-stack-layout.md","sourceDirName":"arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-stack-layout","slug":"/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-stack-layout/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-stack-layout/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"层叠布局 (Stack)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-stack-layout","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"线性布局 (Row/Column)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-linear/"},"next":{"title":"弹性布局 (Flex)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-flex-layout/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-stack-layout/arkts-layout-development-stack-layout.md


const frontMatter = {
	title: '层叠布局 (Stack)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-stack-layout',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '层叠布局 (Stack)';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "开发布局",
  "id": "开发布局",
  "level": 2
}, {
  "value": "对齐方式",
  "id": "对齐方式",
  "level": 2
}, {
  "value": "Z序控制",
  "id": "z序控制",
  "level": 2
}, {
  "value": "场景示例",
  "id": "场景示例",
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
        id: "层叠布局-stack",
        children: "层叠布局 (Stack)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["层叠布局（StackLayout）用于在屏幕上预留一块区域来显示组件中的元素，提供元素可以重叠的布局。层叠布局通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-stack/ts-container-stack",
        children: "Stack"
      }), "容器组件实现位置的固定定位与层叠，容器中的子元素依次入栈，后一个子元素覆盖前一个子元素，子元素可以叠加，也可以设置位置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "层叠布局具有较强的页面层叠、位置定位能力，其使用场景有广告、卡片层叠效果等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如图1，Stack作为容器，容器内的子元素的顺序为Item1->Item2->Item3。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 层叠布局"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(482923)/* ["default"] */.A) + "",
        width: "331",
        height: "247"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(219063)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["过多的嵌套组件数会导致性能劣化。在部分场景中，直接使用组件属性或借助系统API的能力可以替代层叠布局的效果，减少了嵌套组件数进而优化性能。最佳实践请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-component-nesting-optimization#section78181114123811",
        children: "组件嵌套优化-优先使用组件属性代替嵌套组件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发布局",
      children: "开发布局"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stack组件为容器组件，容器内可包含各种子元素。其中子元素默认进行居中堆叠。子元素被约束在Stack下，进行自己的样式定义以及排列。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nlet mTop:Record<string,number> = { 'top': 50 }\n\n@Entry\n@Component\nstruct StackLayoutExample {\n  build() {\n    Column(){\n      Stack({ }) {\n        Column(){}.width('90%').height('100%').backgroundColor('#ff58b87c')\n        Text('text').width('60%').height('60%').backgroundColor('#ffc3f6aa')\n        Button('button').width('30%').height('30%').backgroundColor('#ff8ff3eb').fontColor('#000')\n      }.width('100%').height(150).margin(mTop)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(673857)/* ["default"] */.A) + "",
        width: "300",
        height: "146"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "对齐方式",
      children: "对齐方式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Stack组件通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-stack/ts-container-stack#aligncontent",
        children: "alignContent参数"
      }), "实现位置的相对移动。如图2所示，支持九种对齐方式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " Stack容器内元素的对齐方式"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(134204)/* ["default"] */.A) + "",
        width: "1761",
        height: "1549"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct StackAlignContentExample {\n  build() {\n    Stack({ alignContent: Alignment.TopStart }) {\n      Text('Stack').width('90%').height('100%').backgroundColor('#e1dede').align(Alignment.BottomEnd)\n      Text('Item 1').width('70%').height('80%').backgroundColor(0xd2cab3).align(Alignment.BottomEnd)\n      Text('Item 2').width('50%').height('60%').backgroundColor(0xc1cbac).align(Alignment.BottomEnd)\n    }.width('100%').height(150).margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "z序控制",
      children: "Z序控制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Stack容器中兄弟组件显示层级关系可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-z-order/ts-universal-attributes-z-order",
        children: "Z序控制"
      }), "的zIndex属性改变。zIndex值越大，显示层级越高，即zIndex值大的组件会覆盖在zIndex值小的组件上方。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在层叠布局中，如果后面子元素尺寸大于前面子元素尺寸，则前面子元素完全隐藏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Stack({ alignContent: Alignment.BottomStart }) {\n  Column() {\n    // 请将$r('app.string.stack_num1')替换为实际资源文件，在本示例中该资源文件的value值为\"Stack子元素1\"\n    Text($r('app.string.stack_num1')).textAlign(TextAlign.End).fontSize(20)\n  }.width(100).height(100).backgroundColor(0xffd306)\n\n  Column() {\n    // 请将$r('app.string.stack_num2')替换为实际资源文件，在本示例中该资源文件的value值为\"Stack子元素2\"\n    Text($r('app.string.stack_num2')).fontSize(20)\n  }.width(150).height(150).backgroundColor(Color.Pink)\n\n  Column() {\n    // 请将$r('app.string.stack_num3')替换为实际资源文件，在本示例中该资源文件的value值为\"Stack子元素3\"\n    Text($r('app.string.stack_num3')).fontSize(20)\n  }.width(200).height(200).backgroundColor(Color.Grey)\n}.width(350).height(350).backgroundColor(0xe0e0e0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(627095)/* ["default"] */.A) + "",
        width: "412",
        height: "411"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上图中，最后的子元素3的尺寸大于前面的所有子元素，所以，前面两个元素完全隐藏。改变子元素1、子元素2的zIndex属性后，可以将元素展示出来。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Stack({ alignContent: Alignment.BottomStart }) {\n  Column() {\n    // 请将$r('app.string.stack_num1')替换为实际资源文件，在本示例中该资源文件的value值为\"Stack子元素1\"\n    Text($r('app.string.stack_num1')).fontSize(20)\n  }.width(100).height(100).backgroundColor(0xffd306).zIndex(2)\n\n  Column() {\n    // 请将$r('app.string.stack_num2')替换为实际资源文件，在本示例中该资源文件的value值为\"Stack子元素2\"\n    Text($r('app.string.stack_num2')).fontSize(20)\n  }.width(150).height(150).backgroundColor(Color.Pink).zIndex(1)\n\n  Column() {\n    // 请将$r('app.string.stack_num3')替换为实际资源文件，在本示例中该资源文件的value值为\"Stack子元素3\"\n    Text($r('app.string.stack_num3')).fontSize(20)\n  }.width(200).height(200).backgroundColor(Color.Grey)\n}.width(350).height(350).backgroundColor(0xe0e0e0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(702439)/* ["default"] */.A) + "",
        width: "285",
        height: "286"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景示例",
      children: "场景示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用层叠布局快速搭建页面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct StackSample {\n  private arr: string[] = ['APP1', 'APP2', 'APP3', 'APP4', 'APP5', 'APP6', 'APP7', 'APP8'];\n\n  build() {\n    Stack({ alignContent: Alignment.Bottom }) {\n      Flex({ wrap: FlexWrap.Wrap }) {\n        ForEach(this.arr, (item:string) => {\n          Text(item)\n            .width(100)\n            .height(100)\n            .fontSize(16)\n            .margin(10)\n            .textAlign(TextAlign.Center)\n            .borderRadius(10)\n            .backgroundColor(0xFFFFFF)\n        }, (item:string):string => item)\n      }.width('100%').height('100%')\n\n      Flex({ justifyContent: FlexAlign.SpaceAround, alignItems: ItemAlign.Center }) {\n        // 请将$r('app.string.contacts')替换为实际资源文件，在本示例中该资源文件的value值为\"联系人\"\n        Text($r('app.string.contacts')).fontSize(16)\n        // 请将$r('app.string.setting')替换为实际资源文件，在本示例中该资源文件的value值为\"设置\"\n        Text($r('app.string.setting')).fontSize(16)\n        // 请将$r('app.string.text_message')替换为实际资源文件，在本示例中该资源文件的value值为\"短信\"\n        Text($r('app.string.text_message')).fontSize(16)\n      }\n      .width('50%')\n      .height(50)\n      .backgroundColor('#16302e2e')\n      .margin({ bottom: 15 })\n      .borderRadius(15)\n    }.width('100%').height('100%').backgroundColor('#CFD0CF')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(88566)/* ["default"] */.A) + "",
        width: "290",
        height: "634"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/component-stack",
          children: "组件堆叠"
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
134204(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477713-ea25b61cc1d986336c474e60f6f022ed.png");

},
627095(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZwAAAGbCAYAAADwRCaBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAABifSURBVHhe7d3Vri1Z2cfhxt3d3S24B5cAgeDu7u7uGhISboH7gSOOSHMn68tvJmOnejF3925kkJfvOXhSc1WNGiVz9/uvUVVr9XV///vfLwDgP03gALCFwAFgC4EDwBYCB4AtBA4AWwgcALYQOABsIXAA2ELgALCFwAFgC4EDwBYCB4AtBA4AWwgcALYQOABsIXAA2ELgALCFwAFgC4EDwBYCB4AtBA4AWwgcALYQOABsIXAA2ELgALCFwAFgC4EDwBYCB4AtBA4AWwgcALYQOABsIXAA2ELgALCFwAFgC4EDwBYCB4AtBA4AWwgcALYQOABsIXAA2ELgALCFwAFgC4EDwBYCB4AtBA4AWwgcALYQOABsIXAA2ELgALCFwAFgC4EDwBYCB4AtBA4AWwgcALYQOABsIXAA2ELgALCFwAFgC4EDwBYCB4AtBA4AWwgcALYQOABsIXAA2ELgALCFwAFgC4EDwBYCB4AtBA4AWwgcALYQOABsIXAA2ELgALCFwAFgC4EDwBYCB4AtBA4AWwgcALYQOABsIXAA2ELgALCFwAFgC4EDwBYCB4AtBA4AWwgcALYQOABsIXAA2ELgALCFwAFgC4EDwBYCB4AtBA4AWwgcALYQOABsIXAA2ELgALCFwAFgC4EDwBYCB4AtBA4AWwgcALYQOABsIXAA2ELgALCFwAFgC4EDwBYCB4AtBA4AWwgcALYQOABsIXAA2ELgALCFwAFgC4EDwBYCB4AtBA4AWwgcALYQOABsIXAA2ELgALCFwAFgC4EDwBYCB4AtBA4AWwgcALYQOABsIXAA2ELgALCFwAFgC4EDwBYCB4AtBA4AWwgcALYQOABsIXAA2ELgALCFwAFgC4EDwBYCB4AtBA4AWwgcALYQOABsIXAA2ELgALCFwAFgC4EDwBYCB4AtBA4AWwgcALYQOABsIXAA2ELgALCFwAFgC4EDwBYCB4AtBA4AWwgcALYQOABsIXAA2ELgALCFwAFgC4EDwBYCB4AtBA4AWwgcALYQOABsIXAA2ELgALCFwAFgC4EDwBYCB4Atrrv++usvgBnO/UcMU1z3t7/97QKY4dx/xDDFdX/6058ugBn++te/nv0PGSa47kc/+tEFM/z4xz+++MUvfnHxve997/T5X7H6++EPf3iDbfzgBz+4+MlPfnLaRtPL612L73//+xc//elPb9DvtfrlL395mtbP5WX86OIvf/nL2f+QYQKBM0jhUCBUzPv8rypQ6u/ydgqM5v8zRb99W6FzbvlNef/733/xzne+U+BchcBhMoEzyCrC3/3ud88GyM1xtZFEfTe66XPtCo6bo/UKnZ/97Gc36Pda3fKWtzz5+c9/fnb5/3cCh8lGB07Fcl1NpyJVsaxQ9rniWeGrzboNtW4Xfec73zndnmp57c/1/5/0la985eLZz372xWte85qzy89p1JF73OMeF3e+851vtrvc5S5Xpk972tNOx3/52DtHd7zjHS/ucIc7nNr2+ea6293udiV8jl784hdfPPShD714yEMeclVtt8B52MMednb58rKXvey07+vfQJ/Xbby+4z63D+vzmn7729/+h/2aROAw2ejAWbd9Pve5z1089rGPvbjNbW5zKlZNb3WrW50K3AqaVYy6sl9X8P/Nq+iPf/zjp3189KMffc2jgfa74+j4rrvuumtyi1vc4srnzs2a97jHPe50/J2b4zYqzO3X5XWvVevm2Ofy/Oc//+K+973vxf3ud7/T9Jz6uPWtb33x4Ac/+Ozy3Oc+97l4wQtecOqz87FuC65/C49//ONPx7qOo3D92te+dmr337i4+HcSOEw2OnAqNhWxCuMqpre//e1vUPy6Yv7Upz51KqSr2PzhD384rfv1r3/9SiBd7vs/7ROf+MRpnyv855afUzA1altBey1q+5vf/ObiDW94wymoOlcPfOADL7761a+ell0Ou+al0UGjwDV6vFbtX+e2bR/77dx3ro+jknPWPq6R6Tn113b63L723f7qV786jXpa97a3ve1pmsKraee6fwcCB/57xgXOKjgVjg9+8IOnQpI3velNV9pUhCpIj3rUo04F5653vevpar7C1LJvfvObp/ndWqo41ldaVv+rKK7t1Wb1u5Y1Xdu77Lhsfb7cvuLXfj/mMY+5wfzU/9qXfu5z+97P6xgur3PUtlK7bt094AEPOBXdivmb3/zm0yivcDhu5zitj2vZzjltd43Ejv22rG2+7nWvu3jyk5988ZSnPOWsvpfOy4216aWC+msbaXsf+MAHroyO3vKW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");

},
702439(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437759-6caa1cd586690aa7ee889e3615284197.png");

},
88566(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957714-729203fe4ac055afef927ff82dc4a57b.png");

},
673857(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
482923(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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O7Xg0QlKulHmpHHD6mwvqlCMtPKlNvUNpjT96Jy9G28tr10G3tOI5WE2XEjorNN6NX1SXhee2atPXrLDjxifWjVG37zqLc396x36xhVv6ckVY1R08RsuRPq787v0ybnb9ZG/6HbrEvr7T2zRtfO2aEdPg3rdyNQPL10UF/9np37x2AQfyubGcmVqX/m0AN4lYnmY+Xi5CBbLLoQufCV36+1LqX8oqTsemqz5P5umny0+2sfOpuUtTSW1tpYUu6CWSpGOOSqvYt7ekjdWU1PRvyGlPzbpPn78oi7d9o+vq38goSddfO14JoADQyzrhI360snKGfGW5qI62wr6yqc26borNun6Kzfqus9uVGMmVtlFddd3260u2/7+/7q7UK7f3KTsoAXUbSgldOzkvAaH+KMGDgY/QYeLi5sdU/Sxc5FraynquZc79Mq6FnU0lzRpfEF3PjBZm7dk9ODSCXpo6XgfUtvHomjsbcmLbnRpz2VjRttmJ3GGcpFuWzBFq/7QquWrO/TY85360PGD/sQRgANDLA+TgovcnA/1qcNNqe1s+NzzujV5fE4vrm1RVzatyz+8XWd9sN8fu2xMl3Xpn/e4GCZ09sl9asqUfBinThrWzKk5N/W2YEaa7bbZ1USnnTigL31iix9h/s/WBl3/6U06fkquElYAB4SXaDuML9Fm11RawCojxdhf+pNwi/mCrbPtdmmRm2q75YKts33cNNuOb9p03I5N2p4+lm6r3+aez0aQNh23/W0fOzFUeQzeK3iJtgpeou19wkaK1Sm1/WW3M+O54eq6yG+3+7a+8tfArStVttu/OxbM/4vgyDb30bbZets3726EEjh4xBIAAhBLAAhALAEgALEEgADEEgACEEsACEAsASAAsQSAAMQSAAIQSwAIQCwBIACxBIAAxBIAAhBLAAhALAEgALEEgADEEgACEEsACEAsASAAsQSAAMQSAAIQSwAIQCwBIACxBIAAxBIAAhBLAAhALAEgALEEgADEEgACEEsACEAsASAAsQSAAMQSAAIQSwAIQCwBIACxBIAAxBIAAhBLAAhALAEgALEEgADEEgACEEsACEAsASAAsQSAAMQSAAIQSwAIQCwBIACxBIAAxBIAAhBLAAhALAEgQJTNZuOR5UPOnrg9HemWVT1KRe6TRe6XOhLHkVLpITW397jlWv67ESsbd+iazO06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");

},
219063(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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