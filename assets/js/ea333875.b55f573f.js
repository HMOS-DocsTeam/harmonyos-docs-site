"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["523495"], {
627753(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_rendering_control_arkts_rendering_control_foreach_arkts_rendering_control_foreach_md_ea3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-rendering-control-arkts-rendering-control-foreach-arkts-rendering-control-foreach-md-ea3.json
var site_docs_arkui_arkts_ui_development_arkts_rendering_control_arkts_rendering_control_foreach_arkts_rendering_control_foreach_md_ea3_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach/arkts-rendering-control-foreach","title":"ForEach：循环渲染","description":"ForEach接口基于数组循环渲染，需要与容器组件配合使用，且接口返回的组件应当是允许包含在ForEach父容器组件中的子组件。例如，ListItem组件要求ForEach的父容器组件必须为List组件。","source":"@site/docs/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach/arkts-rendering-control-foreach.md","sourceDirName":"arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach","slug":"/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"ForEach：循环渲染","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-rendering-control-foreach","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"if/else：条件渲染","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-ifelse/"},"next":{"title":"LazyForEach：数据懒加载","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach/arkts-rendering-control-foreach.md


const frontMatter = {
	title: 'ForEach：循环渲染',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-rendering-control-foreach',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ForEach：循环渲染';

const assets = {

};



const toc = [{
  "value": "键值生成规则",
  "id": "键值生成规则",
  "level": 2
}, {
  "value": "组件创建规则",
  "id": "组件创建规则",
  "level": 2
}, {
  "value": "首次渲染",
  "id": "首次渲染",
  "level": 3
}, {
  "value": "非首次渲染",
  "id": "非首次渲染",
  "level": 3
}, {
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "数据源不变",
  "id": "数据源不变",
  "level": 3
}, {
  "value": "数据源数组项发生变化",
  "id": "数据源数组项发生变化",
  "level": 3
}, {
  "value": "数据源数组项子属性变化",
  "id": "数据源数组项子属性变化",
  "level": 3
}, {
  "value": "拖拽排序",
  "id": "拖拽排序",
  "level": 3
}, {
  "value": "使用建议",
  "id": "使用建议",
  "level": 2
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "渲染结果非预期",
  "id": "渲染结果非预期",
  "level": 3
}, {
  "value": "渲染性能降低",
  "id": "渲染性能降低",
  "level": 3
}, {
  "value": "数据变化不渲染",
  "id": "数据变化不渲染",
  "level": 3
}, {
  "value": "非必要内存消耗",
  "id": "非必要内存消耗",
  "level": 3
}, {
  "value": "键值生成失败",
  "id": "键值生成失败",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "foreach循环渲染",
        children: "ForEach：循环渲染"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ForEach接口基于数组循环渲染，需要与容器组件配合使用，且接口返回的组件应当是允许包含在ForEach父容器组件中的子组件。例如，ListItem组件要求ForEach的父容器组件必须为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
        children: "List组件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["API参数说明见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-foreach/ts-rendering-control-foreach",
        children: "ForEach API参数说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(160699)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 9开始，该接口支持在ArkTS卡片中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "键值生成规则",
      children: "键值生成规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ForEach循环渲染过程中，系统会为每个数组元素生成一个唯一且持久的键值，用于标识对应的组件。当键值变化时，ArkUI框架会视为该数组元素已被替换或修改，并会基于新的键值创建一个新的组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ForEach提供了一个名为keyGenerator的参数，这是一个函数，开发者可以通过它自定义键值的生成规则。如果开发者没有定义keyGenerator函数，则ArkUI框架会使用默认的键值生成函数，即(item: Object, index: number) => { return index + '__' + JSON.stringify(item); }。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI框架对于ForEach的键值生成有一套特定的判断规则，这主要与itemGenerator函数和keyGenerator函数的第二个参数index有关。具体的键值生成规则判断逻辑如下图所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " ForEach键值生成规则"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(56429)/* ["default"] */.A) + "",
        width: "600",
        height: "430"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(80390)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ArkUI框架会对重复的键值发出运行时警告。在UI更新时，如果出现重复的键值，框架可能无法正常工作，具体请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%B8%B2%E6%9F%93%E7%BB%93%E6%9E%9C%E9%9D%9E%E9%A2%84%E6%9C%9F",
          children: "渲染结果非预期"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不建议在键值中包含数据项索引index，这可能会导致", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%B8%B2%E6%9F%93%E7%BB%93%E6%9E%9C%E9%9D%9E%E9%A2%84%E6%9C%9F",
          children: "渲染结果非预期"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%B8%B2%E6%9F%93%E6%80%A7%E8%83%BD%E9%99%8D%E4%BD%8E",
          children: "渲染性能降低"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果开发者在itemGenerator函数中声明了index参数，但未在keyGenerator函数中声明index参数，框架会在keyGenerator函数返回值的基础上拼接index，作为最终的键值，这将会引发上述第二点中的问题。为避免此现象，请在keyGenerator函数中声明index参数。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "键值生成示例:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface ChildItemType {\n  str: string;\n  num: number;\n}\n\n@Entry\n@Component\nstruct Index {\n  @State simpleList: Array<ChildItemType> = [\n    { str: 'one', num: 1 },\n    { str: 'two', num: 2 },\n    { str: 'three', num: 3 }\n  ];\n\n  build() {\n    Row() {\n      Column() {\n        ForEach(this.simpleList, (item: ChildItemType, index: number) => {\n          ChildItem({ str: item.str, num: index }) // 组件生成函数中使用index参数\n        }, (item: ChildItemType, index: number) => {\n          return item.str; // 建议在键值生成函数中使用与UI界面相关的数据属性str\n        })\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n    .backgroundColor(0xF1F3F5)\n  }\n}\n\n@Component\nstruct ChildItem {\n  @Prop str: string = '';\n  @Prop num: number = 0;\n\n  build() {\n    Text(this.str)\n      .fontSize(50)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上述示例中，当组件生成函数声明index时，建议键值生成函数也声明index参数，以避免渲染性能降低和渲染结果非预期。同时建议在键值生成函数实现中使用与UI相关的数据属性，在本示例中，数据属性str与UI界面显示相关，因此建议将其作为键值生成函数的返回值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "组件创建规则",
      children: "组件创建规则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在确定键值生成规则后，ForEach的第二个参数itemGenerator函数会根据键值生成规则为数据源的每个数组项创建组件。组件的创建包括两种情况：", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%A6%96%E6%AC%A1%E6%B8%B2%E6%9F%93",
        children: "ForEach首次渲染"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%9D%9E%E9%A6%96%E6%AC%A1%E6%B8%B2%E6%9F%93",
        children: "ForEach非首次渲染"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "首次渲染",
      children: "首次渲染"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ForEach首次渲染时，会根据前述键值生成规则为数据源的每个数组项生成唯一键值，并创建相应的组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ForEachFirstRender {\n  @State simpleList: Array<string> = ['one', 'two', 'three'];\n\n  build() {\n    Row() {\n      Column() {\n        ForEach(this.simpleList, (item: string) => {\n          ForEachChildItem({ item: item })\n        }, (item: string) => item) // 需要保证key唯一\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n    .backgroundColor(0xF1F3F5)\n  }\n}\n\n@Component\nstruct ForEachChildItem {\n  @Prop item: string;\n\n  build() {\n    Text(this.item)\n      .fontSize(50)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行效果如下图所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " ForEach数据项不存在相同键值案例首次渲染运行效果图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(149798)/* ["default"] */.A) + "",
        width: "526",
        height: "260"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上述代码中，keyGenerator函数的返回值是item。在ForEach渲染循环时，为数组项依次生成键值one、two和three，并创建对应的ForEachChildItem组件渲染到界面上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当不同数组项生成的键值相同时，框架的行为是未定义的。例如，在以下代码中，ForEach渲染相同的数据项two时，只创建了一个SameKeyChildItem组件，而没有创建多个具有相同键值的组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ForEachSameKey {\n  @State simpleList: Array<string> = ['one', 'two', 'two', 'three'];\n\n  build() {\n    Row() {\n      Column() {\n        ForEach(this.simpleList, (item: string) => {\n          SameKeyChildItem({ item: item })\n        }, (item: string) => item)\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n    .backgroundColor(0xF1F3F5)\n  }\n}\n\n@Component\nstruct SameKeyChildItem {\n  @Prop item: string;\n\n  build() {\n    Text(this.item)\n      .fontSize(50)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行效果如下图所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " ForEach数据源存在相同值案例首次渲染运行效果图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(54544)/* ["default"] */.A) + "",
        width: "526",
        height: "260"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在该示例中，最终键值生成规则为item。当ForEach遍历数据源simpleList，遍历到索引为1的two时，创建键值为two的组件并记录。当遍历到索引为2的two时，当前项的键值也为two，此时不再创建新的组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "非首次渲染",
      children: "非首次渲染"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ForEach组件进行非首次渲染时，它会检查新生成的键值是否在上次渲染中已经存在。如果键值不存在，则会创建一个新的组件；如果键值存在，则不会创建新的组件，而是直接渲染该键值所对应的组件。例如，在以下的代码示例中，通过点击事件修改了数组的第三项值为\"new three\"，这将触发ForEach组件进行非首次渲染。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ForEachNotFirstRender {\n  @State simpleList: Array<string> = ['one', 'two', 'three'];\n\n  build() {\n    Row() {\n      Column() {\n        Text('Click to change the value of the third array item')\n          .fontSize(24)\n          .fontColor(Color.Red)\n          .onClick(() => {\n            this.simpleList[2] = 'new three';\n          })\n\n        ForEach(this.simpleList, (item: string) => {\n          NotFirstRenderChildItem({ item: item })\n            .margin({ top: 20 })\n        }, (item: string) => item)\n      }\n      .justifyContent(FlexAlign.Center)\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n    .backgroundColor(0xF1F3F5)\n  }\n}\n\n@Component\nstruct NotFirstRenderChildItem {\n  @Prop item: string;\n\n  build() {\n    Text(this.item)\n      .fontSize(30)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行效果如下图所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图4"
        })
      }), " ForEach非首次渲染案例运行效果图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(893797)/* ["default"] */.A) + "",
        width: "349",
        height: "348"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从本例可以看出", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
        children: "@State"
      }), "能够监听到简单数据类型数组simpleList数组项的变化。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当simpleList数组项发生变化时，会触发ForEach重新渲染。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ForEach遍历新的数据源['one', 'two', 'new three']，并生成对应的键值one、two和new three。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "其中，键值one和two在上次渲染中已经存在，所以 ForEach 复用了对应的组件并进行了渲染。对于第三个数组项 \"new three\"，由于其通过键值生成规则 item 生成的键值new three在上次渲染中不存在，因此 ForEach 为该数组项创建了一个新的组件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ForEach组件在开发过程中的主要应用场景包括：", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%95%B0%E6%8D%AE%E6%BA%90%E4%B8%8D%E5%8F%98",
        children: "数据源不变"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%95%B0%E6%8D%AE%E6%BA%90%E6%95%B0%E7%BB%84%E9%A1%B9%E5%8F%91%E7%94%9F%E5%8F%98%E5%8C%96",
        children: "数据源数组项发生变化"
      }), "（如插入、删除操作）、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%95%B0%E6%8D%AE%E6%BA%90%E6%95%B0%E7%BB%84%E9%A1%B9%E5%AD%90%E5%B1%9E%E6%80%A7%E5%8F%98%E5%8C%96",
        children: "数据源数组项子属性变化"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据源不变",
      children: "数据源不变"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在数据源保持不变的场景中，数据源可以直接采用基本数据类型。例如，页面加载状态时，可以使用骨架屏列表进行渲染展示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ArticleList {\n  @State simpleList: Array<number> = [1, 2, 3, 4, 5];\n\n  build() {\n    Column() {\n      ForEach(this.simpleList, (item: number) => {\n        ArticleSkeletonView()\n          .margin({ top: 20 })\n      }, (item: number) => item.toString())\n    }\n    .padding(20)\n    .width('100%')\n    .height('100%')\n  }\n}\n\n@Builder\nfunction textArea(width: number | Resource | string = '100%', height: number | Resource | string = '100%') {\n  Row()\n    .width(width)\n    .height(height)\n    .backgroundColor('#FFF2F3F4')\n}\n\n@Component\nstruct ArticleSkeletonView {\n  build() {\n    Row() {\n      Column() {\n        textArea(80, 80)\n      }\n      .margin({ right: 20 })\n\n      Column() {\n        textArea('60%', 20)\n        textArea('50%', 20)\n      }\n      .alignItems(HorizontalAlign.Start)\n      .justifyContent(FlexAlign.SpaceAround)\n      .height('100%')\n    }\n    .padding(20)\n    .borderRadius(12)\n    .backgroundColor('#FFECECEC')\n    .height(120)\n    .width('100%')\n    .justifyContent(FlexAlign.SpaceBetween)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行效果如下图所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图5"
        })
      }), " 骨架屏运行效果图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(799431)/* ["default"] */.A) + "",
        width: "339",
        height: "700"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在本示例中，采用数据项item作为键值生成规则，由于数据源simpleList的数组项各不相同，因此能够保证键值的唯一性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据源数组项发生变化",
      children: "数据源数组项发生变化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在数据源数组项发生变化的场景下，如数组插入、删除操作或者数组项索引位置交换时，数据源应为对象数组类型，并使用对象的唯一ID作为键值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class ArticleChangeSource {\n  public id: string;\n  public title: string;\n  public brief: string;\n\n  constructor(id: string, title: string, brief: string) {\n    this.id = id;\n    this.title = title;\n    this.brief = brief;\n  }\n}\n\n@Entry\n@Component\nstruct ArticleListViewChangeSource {\n  isListReachEnd: boolean = false;\n  @State articleList: Array<ArticleChangeSource> = [\n    new ArticleChangeSource('001', 'Article 1', 'Abstract'),\n    new ArticleChangeSource('002', 'Article 2', 'Abstract'),\n    new ArticleChangeSource('003', 'Article 3', 'Abstract'),\n    new ArticleChangeSource('004', 'Article 4', 'Abstract'),\n    new ArticleChangeSource('005', 'Article 5', 'Abstract'),\n    new ArticleChangeSource('006', 'Article 6', 'Abstract')\n  ];\n\n  loadMoreArticles() {\n    this.articleList.push(new ArticleChangeSource('007', 'New Article', 'Abstract'));\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      List() {\n        ForEach(this.articleList, (item: ArticleChangeSource) => {\n          ListItem() {\n            ArticleCardChangeSource({ article: item })\n              .margin({ top: 20 })\n          }\n        }, (item: ArticleChangeSource) => item.id)\n      }\n      .onReachEnd(() => {\n        this.isListReachEnd = true;\n      })\n      .parallelGesture(\n        PanGesture({ direction: PanDirection.Up, distance: 80 })\n          .onActionStart(() => {\n            if (this.isListReachEnd) {\n              this.loadMoreArticles();\n              this.isListReachEnd = false;\n            }\n          })\n      )\n      .padding(20)\n      .scrollBar(BarState.Off)\n    }\n    .width('100%')\n    .height('100%')\n    .backgroundColor(0xF1F3F5)\n  }\n}\n\n@Component\nstruct ArticleCardChangeSource {\n  @Prop article: ArticleChangeSource;\n\n  build() {\n    Row() {\n      // 此处'app.media.startIcon'仅作示例，请开发者自行替换，否则imageSource创建失败会导致后续无法正常执行。\n      Image($r('app.media.startIcon'))\n        .width(80)\n        .height(80)\n        .margin({ right: 20 })\n\n      Column() {\n        Text(this.article.title)\n          .fontSize(20)\n          .margin({ bottom: 8 })\n        Text(this.article.brief)\n          .fontSize(16)\n          .fontColor(Color.Gray)\n          .margin({ bottom: 8 })\n      }\n      .alignItems(HorizontalAlign.Start)\n      .width('80%')\n      .height('100%')\n    }\n    .padding(20)\n    .borderRadius(12)\n    .backgroundColor('#FFECECEC')\n    .height(120)\n    .width('100%')\n    .justifyContent(FlexAlign.SpaceBetween)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始运行效果（左图）和手势上滑加载后效果（右图）如下图所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图6"
        })
      }), " 数据源数组项变化案例运行效果图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(602658)/* ["default"] */.A) + "",
        width: "580",
        height: "576"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在本示例中，ArticleCardChangeSource组件作为ArticleListViewChangeSource组件的子组件，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop",
        children: "@Prop"
      }), "装饰器接收一个ArticleChangeSource对象，用于渲染文章卡片。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当列表滚动到底部且手势滑动距离超过80vp时，触发loadMoreArticles()函数。此函数在articleList数据源尾部添加新数据项，增加数据源长度。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数据源被@State装饰器修饰，ArkUI框架能够感知数据源长度的变化并触发ForEach进行重新渲染。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据源数组项子属性变化",
      children: "数据源数组项子属性变化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当数据源的数组项为对象数据类型，并且只修改某个数组项的属性值时，由于数据源为复杂数据类型，ArkUI框架无法监听到@State装饰器修饰的数据源数组项的属性变化，从而无法触发ForEach的重新渲染。为实现ForEach子组件重新渲染，需要结合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
        children: "@Observed和@ObjectLink"
      }), "装饰器使用。例如，在文章列表卡片上点击“点赞”按钮，从而修改文章的点赞数量。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Observed\nclass ArticleChangeChild {\n  public id: string;\n  public title: string;\n  public brief: string;\n  public isLiked: boolean;\n  public likesCount: number;\n\n  constructor(id: string, title: string, brief: string, isLiked: boolean, likesCount: number) {\n    this.id = id;\n    this.title = title;\n    this.brief = brief;\n    this.isLiked = isLiked;\n    this.likesCount = likesCount;\n  }\n}\n\n@Entry\n@Component\nstruct ArticleListChangeView {\n  @State articleList: Array<ArticleChangeChild> = [\n    new ArticleChangeChild('001', 'Article 0', 'Abstract', false, 100),\n    new ArticleChangeChild('002', 'Article 1', 'Abstract', false, 100),\n    new ArticleChangeChild('003', 'Article 2', 'Abstract', false, 100),\n    new ArticleChangeChild('004', 'Article 4', 'Abstract', false, 100),\n    new ArticleChangeChild('005', 'Article 5', 'Abstract', false, 100),\n    new ArticleChangeChild('006', 'Article 6', 'Abstract', false, 100),\n  ];\n\n  build() {\n    List() {\n      ForEach(this.articleList, (item: ArticleChangeChild) => {\n        ListItem() {\n          ArticleCardChangeChild({\n            article: item\n          })\n            .margin({ top: 20 })\n        }\n      }, (item: ArticleChangeChild) => item.id)\n    }\n    .padding(20)\n    .scrollBar(BarState.Off)\n    .backgroundColor(0xF1F3F5)\n  }\n}\n\n@Component\nstruct ArticleCardChangeChild {\n  @ObjectLink article: ArticleChangeChild;\n\n  handleLiked() {\n    this.article.isLiked = !this.article.isLiked;\n    this.article.likesCount = this.article.isLiked ? this.article.likesCount + 1 : this.article.likesCount - 1;\n  }\n\n  build() {\n    Row() {\n      // 此处'app.media.startIcon'仅作示例，请开发者自行替换，否则imageSource创建失败会导致后续无法正常执行。\n      Image($r('app.media.startIcon'))\n        .width(80)\n        .height(80)\n        .margin({ right: 20 })\n\n      Column() {\n        Text(this.article.title)\n          .fontSize(20)\n          .margin({ bottom: 8 })\n        Text(this.article.brief)\n          .fontSize(16)\n          .fontColor(Color.Gray)\n          .margin({ bottom: 8 })\n\n        Row() {\n          // 此处app.media.iconLiked'，'app.media.iconUnLiked'仅作示例，请开发者自行替换，否则imageSource创建失败会导致后续无法正常执行。\n          Image(this.article.isLiked ? $r('app.media.iconLiked') : $r('app.media.iconUnLiked'))\n            .width(24)\n            .height(24)\n            .margin({ right: 8 })\n          Text(this.article.likesCount.toString())\n            .fontSize(16)\n        }\n        .onClick(() => this.handleLiked())\n        .justifyContent(FlexAlign.Center)\n      }\n      .alignItems(HorizontalAlign.Start)\n      .width('80%')\n      .height('100%')\n    }\n    .padding(20)\n    .borderRadius(12)\n    .backgroundColor('#FFECECEC')\n    .height(120)\n    .width('100%')\n    .justifyContent(FlexAlign.SpaceBetween)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述代码的初始运行效果（左图）和点击第1个文章卡片上的点赞图标后的运行效果（右图）如下图所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图7"
        })
      }), " 数据源数组项子属性变化案例运行效果图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(93090)/* ["default"] */.A) + "",
        width: "557",
        height: "553"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在本示例中，ArticleChangeChild类被@Observed装饰器修饰。父组件ArticleListChangeView传入ArticleChangeChild对象实例给子组件ArticleCardChangeChild，子组件使用@ObjectLink装饰器接收该实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当点击第1个文章卡片上的点赞图标时，会触发ArticleCardChangeChild组件的handleLiked函数。该函数修改第1个卡片对应组件里ArticleChangeChild实例的isLiked和likesCount属性值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ArticleChangeChild实例是@ObjectLink装饰的状态变量，其属性值变化，会触发ArticleCardChangeChild组件渲染，此时读取的isLiked和likesCount为修改后的新值。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "拖拽排序",
      children: "拖拽排序"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在List组件下使用ForEach，并设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-drag-sorting/ts-universal-attributes-drag-sorting#onmove",
        children: "onMove"
      }), "事件，每次迭代生成一个ListItem时，可以使能拖拽排序。拖拽排序离手后，如果组件位置发生变化，将触发onMove事件，上报组件移动原始索引号和目标索引号。在onMove事件中，需要根据上报的起始索引号和目标索引号修改数据源。数据源修改前后，要保持每个数据的键值不变，只是顺序发生变化，才能保证落位动画正常执行。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ForEachSort {\n  @State arr: Array<string> = [];\n\n  build() {\n    Column() {\n      // 点击此按钮会触发ForEach重新渲染\n      Button('Add one item')\n        .onClick(() => {\n          this.arr.push('10');\n        })\n        .width(300)\n        .margin(10)\n\n      List() {\n        ForEach(this.arr, (item: string) => {\n          ListItem() {\n            Text(item.toString())\n              .fontSize(16)\n              .textAlign(TextAlign.Center)\n              .size({ height: 100, width: '100%' })\n          }.margin(10)\n          .borderRadius(10)\n          .backgroundColor('#FFFFFFFF')\n        }, (item: string) => item)\n          .onMove((from: number, to: number) => {\n            // 以下两行代码是为了确保拖拽后屏幕上组件的顺序与数组arr中每一项的顺序保持一致。\n            // 若注释以下两行，第一步拖拽排序，第二步在arr末尾插入一项，触发ForEach渲染，此时屏上组件的顺序会跟数组arr中每一项的顺序一致，而不是维持第一步拖拽后的顺序，意味着拖拽排序在ForEach渲染后失效了。\n            let tmp = this.arr.splice(from, 1);\n            this.arr.splice(to, 0, tmp[0]);\n          })\n      }\n      .width('100%')\n      .height('100%')\n      .backgroundColor('#FFDCDCDC')\n    }\n  }\n\n  aboutToAppear(): void {\n    for (let i = 0; i < 10; i++) {\n      this.arr.push(i.toString());\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图8"
        })
      }), " ForEach拖拽排序效果图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(406296)/* ["default"] */.A) + "",
        width: "264",
        height: "577"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注释掉onMove事件调用中的两行代码，点击Add one item触发渲染后的效果如下图所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图9"
        })
      }), " ForEach拖拽排序效果在重新渲染后没有保留"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(379994)/* ["default"] */.A) + "",
        width: "266",
        height: "447"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用建议",
      children: "使用建议"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为满足键值的唯一性，对于对象数据类型，建议使用对象数据中的唯一id作为键值。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不建议在键值中包含数据项索引index，可能会导致", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%B8%B2%E6%9F%93%E7%BB%93%E6%9E%9C%E9%9D%9E%E9%A2%84%E6%9C%9F",
          children: "渲染结果非预期"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%B8%B2%E6%9F%93%E6%80%A7%E8%83%BD%E9%99%8D%E4%BD%8E",
          children: "渲染性能降低"
        }), "。如果确实需要使用index，例如列表通过index进行条件渲染，开发者需接受ForEach在数据源变更后重新创建组件导致的性能损耗。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "基本类型数组的数据项没有唯一ID属性。如果使用数据项作为键值，必须确保数据项无重复。对于数据源会变化的场景，建议将基本类型数组转换为具有唯一ID属性的Object类型数组，再使用唯一ID属性作为键值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于以上限制规则，index参数存在的意义为：index是开发者保证键值唯一性的最终手段；对数据项进行修改时，由于itemGenerator中的item参数是不可修改的，所以须用index索引值对数据源进行修改，进而触发UI重新渲染。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ForEach在滚动容器组件 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
          children: "List"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid",
          children: "Grid"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper",
          children: "Swiper"
        }), "以及", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow",
          children: "WaterFlow"
        }), " 内使用的时候，不建议与", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
          children: "LazyForEach"
        }), " 同时使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在大量子组件的场景下，ForEach可能会导致卡顿。请考虑使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
          children: "LazyForEach"
        }), "替代。最佳实践请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-lazyforeach-optimization",
          children: "使用懒加载优化性能"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当数组项为对象类型时，不建议用内容相同的数组项替换旧项。若数组项发生变更但键值未变，会导致", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%95%B0%E6%8D%AE%E5%8F%98%E5%8C%96%E4%B8%8D%E6%B8%B2%E6%9F%93",
          children: "数据变化不渲染"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对ForEach键值的错误使用会导致功能和性能问题。详见案例", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%B8%B2%E6%9F%93%E7%BB%93%E6%9E%9C%E9%9D%9E%E9%A2%84%E6%9C%9F",
        children: "渲染结果非预期"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%B8%B2%E6%9F%93%E6%80%A7%E8%83%BD%E9%99%8D%E4%BD%8E",
        children: "渲染性能降低"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "渲染结果非预期",
      children: "渲染结果非预期"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在本示例中，通过设置ForEach的第三个参数KeyGenerator函数，自定义键值生成规则为数据源的索引index的字符串类型值。当点击父组件ForEachAbnormal中“Insert Item After First Item”文本组件后，界面会出现非预期的结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ForEachAbnormal {\n  @State simpleList: Array<string> = ['one', 'two', 'three'];\n\n  build() {\n    Column() {\n      Button() {\n        Text('Insert Item After First Item').fontSize(30)\n      }\n      .onClick(() => {\n        this.simpleList.splice(1, 0, 'new item');\n      })\n\n      ForEach(this.simpleList, (item: string) => {\n        ForEachAbnormalChildItem({ item: item })\n      }, (item: string, index: number) => index.toString())\n    }\n    .justifyContent(FlexAlign.Center)\n    .width('100%')\n    .height('100%')\n    .backgroundColor(0xF1F3F5)\n  }\n}\n\n@Component\nstruct ForEachAbnormalChildItem {\n  @Prop item: string;\n\n  build() {\n    Text(this.item)\n      .fontSize(30)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述代码的初始渲染效果和点击“在第1项后插入新项”文本组件后的渲染效果如下图所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图10"
        })
      }), " 渲染结果非预期运行效果图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(272828)/* ["default"] */.A) + "",
        width: "349",
        height: "348"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ForEach在首次渲染时，创建的键值依次为\"0\"、\"1\"、\"2\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "插入新项后，数据源simpleList变为['one', 'new item', 'two', 'three']，框架监听到@State装饰的数据源长度变化触发ForEach重新渲染。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ForEach依次遍历新数据源，遍历数据项\"one\"时生成键值\"0\"，存在相同键值，因此不创建新组件。继续遍历数据项\"new item\"时生成键值\"1\"，存在相同键值，因此不创建新组件。继续遍历数据项\"two\"生成键值\"2\"，存在相同键值，因此不创建新组件。最后遍历数据项\"three\"时生成键值\"3\"，不存在相同键值，创建内容为\"three\"的新组件并渲染。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从以上可以看出，当键值包含数据项索引index时，期望的界面渲染结果为['one', 'new item', 'two', 'three']，而实际的渲染结果为['one', 'two', 'three', 'three']，不符合开发者预期。因此，开发者在使用ForEach时应避免键值包含索引index。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "渲染性能降低",
      children: "渲染性能降低"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在本示例中，ForEach的第三个参数KeyGenerator函数缺省。根据上述", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%94%AE%E5%80%BC%E7%94%9F%E6%88%90%E8%A7%84%E5%88%99",
        children: "键值生成规则"
      }), "，此例使用框架默认的键值，即最终键值为字符串index + '__' + JSON.stringify(item)。点击文本组件“在第1项后插入新项”后，ForEach将为第2个数组项及后面的所有数据项重新创建组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nconst TAG = '[Sample_RenderingControl]';\nconst DOMAIN = 0xF811;\n\n@Entry\n@Component\nstruct ReducedRenderingPerformance {\n  @State simpleList: Array<string> = ['one', 'two', 'three'];\n\n  build() {\n    Column() {\n      Button() {\n        Text('Insert Item After First Item').fontSize(30)\n      }\n      .onClick(() => {\n        this.simpleList.splice(1, 0, 'new item');\n        hilog.info(DOMAIN, 'testTag', '[onClick]: simpleList is [${this.simpleList.join(', ')}]');\n      })\n\n      ForEach(this.simpleList, (item: string) => {\n        ReducedChildItem({ item: item })\n      })\n    }\n    .justifyContent(FlexAlign.Center)\n    .width('100%')\n    .height('100%')\n    .backgroundColor(0xF1F3F5)\n  }\n}\n\n@Component\nstruct ReducedChildItem {\n  @Prop item: string;\n\n  aboutToAppear() {\n    hilog.info(DOMAIN, TAG, '[aboutToAppear]: item is ${this.item}');\n  }\n\n  build() {\n    Text(this.item)\n      .fontSize(50)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上代码的初始渲染效果和点击\"Insert Item After First Item\"文本组件后的渲染效果如下图所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图11"
        })
      }), " 渲染性能降低案例运行效果图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(310872)/* ["default"] */.A) + "",
        width: "349",
        height: "348"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击“Insert Item After First Item”文本组件后，DevEco Studio的日志打印结果如下所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图12"
        })
      }), " 渲染性能降低案例日志打印图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(479105)/* ["default"] */.A) + "",
        width: "1193",
        height: "85"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["插入新项后，ForEach为new item、 two、 three三个数组项创建了对应的ReducedChildItem组件，并执行了组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttoappear",
        children: "aboutToAppear()"
      }), "生命周期函数。这是因为："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ForEach首次渲染时，生成的键值依次为0__one、1__two和2__three。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "插入新项后，数据源simpleList变为['one', 'new item', 'two', 'three']，ArkUI框架监听到@State装饰的数据源长度变化触发ForEach重新渲染。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ForEach依次遍历新数据源，遍历数据项one时生成键值0__one，键值已存在，因此不创建新组件。继续遍历数据项new item时生成键值1__new item，不存在相同键值，创建内容为new item的新组件并渲染。继续遍历数据项two生成键值2__two，不存在相同键值，创建内容为two的新组件并渲染。最后遍历数据项three时生成键值3__three，不存在相同键值，创建内容为three的新组件并渲染。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "尽管本例中界面渲染结果符合预期，但在每次向数组中间插入新数组项时，ForEach会为该数组项及其后面的所有数组项重新创建组件。当数据源数据量较大或组件结构复杂时，组件无法复用会导致性能下降。因此，不建议省略第三个参数KeyGenerator函数，也不建议在键值中使用数据项索引index。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "正确渲染并保证效率的ForEach写法是："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ForEach(this.simpleList, (item: string) => {\n  ForEachChildItem({ item: item })\n}, (item: string) => item) // 需要保证key唯一\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供了第三个参数KeyGenerator，在这个例子中，对数据源的不同数据项生成不同的key，并且对同一个数据项每次生成相同的key。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据变化不渲染",
      children: "数据变化不渲染"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击按钮Like/UnLike first article，第一个组件会切换点赞手势和后面的点赞数量，但是点击按钮Replace first article之后再点击按钮Like/UnLike first article就不生效了。原因是替换articleList[0]之后，articleList状态变量发生变化，触发ForEach重新渲染，但是新的articleList[0]生成的key没有变，ForEach不会将数据更新同步给子组件，因此第一个组件仍然绑定旧的articleList[0]。新articleList[0]的属性发生变更，第一个组件感知不到，不会重新渲染。点击点赞手势，会触发渲染。因为变更的是跟组件绑定的数组项的属性，组件会感知并重新渲染。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Observed\nclass ArticleChangeData {\n  public id: string;\n  public title: string;\n  public brief: string;\n  public isLiked: boolean;\n  public likesCount: number;\n\n  constructor(id: string, title: string, brief: string, isLiked: boolean, likesCount: number) {\n    this.id = id;\n    this.title = title;\n    this.brief = brief;\n    this.isLiked = isLiked;\n    this.likesCount = likesCount;\n  }\n}\n\n@Entry\n@Component\nstruct ArticleListChangeData {\n  @State articleList: Array<ArticleChangeData> = [\n    new ArticleChangeData('001', 'Article 0', 'Abstract', false, 100),\n    new ArticleChangeData('002', 'Article 1', 'Abstract', false, 100),\n    new ArticleChangeData('003', 'Article 2', 'Abstract', false, 100),\n    new ArticleChangeData('004', 'Article 4', 'Abstract', false, 100),\n    new ArticleChangeData('005', 'Article 5', 'Abstract', false, 100),\n    new ArticleChangeData('006', 'Article 6', 'Abstract', false, 100),\n  ];\n\n  build() {\n    Column() {\n      Button('Replace first article')\n        .onClick(() => {\n          this.articleList[0] = new ArticleChangeData('001', 'Article 0', 'Abstract', false, 100);\n        })\n        .width(300)\n        .margin(10)\n\n      Button('Like/Unlike first article')\n        .onClick(() => {\n          this.articleList[0].isLiked = !this.articleList[0].isLiked;\n          this.articleList[0].likesCount =\n            this.articleList[0].isLiked ? this.articleList[0].likesCount + 1 : this.articleList[0].likesCount - 1;\n        })\n        .width(300)\n        .margin(10)\n\n      List() {\n        ForEach(this.articleList, (item: ArticleChangeData) => {\n          ListItem() {\n            ArticleCardChangeData({\n              article: item\n            })\n              .margin({ top: 20 })\n          }\n        }, (item: ArticleChangeData) => item.id)\n      }\n      .padding(20)\n      .scrollBar(BarState.Off)\n      .backgroundColor(0xF1F3F5)\n    }\n  }\n}\n\n@Component\nstruct ArticleCardChangeData {\n  @ObjectLink article: ArticleChangeData;\n\n  handleLiked() {\n    this.article.isLiked = !this.article.isLiked;\n    this.article.likesCount = this.article.isLiked ? this.article.likesCount + 1 : this.article.likesCount - 1;\n  }\n\n  build() {\n    Row() {\n      // 此处'app.media.startIcon'仅作示例，请开发者自行替换，否则imageSource创建失败会导致后续无法正常执行。\n      Image($r('app.media.startIcon'))\n        .width(80)\n        .height(80)\n        .margin({ right: 20 })\n\n      Column() {\n        Text(this.article.title)\n          .fontSize(20)\n          .margin({ bottom: 8 })\n        Text(this.article.brief)\n          .fontSize(16)\n          .fontColor(Color.Gray)\n          .margin({ bottom: 8 })\n\n        Row() {\n          // 此处app.media.iconLiked'，'app.media.iconUnLiked'仅作示例，请开发者自行替换，否则imageSource创建失败会导致后续无法正常执行。\n          Image(this.article.isLiked ? $r('app.media.iconLiked') : $r('app.media.iconUnLiked'))\n            .width(24)\n            .height(24)\n            .margin({ right: 8 })\n          Text(this.article.likesCount.toString())\n            .fontSize(16)\n        }\n        .onClick(() => this.handleLiked())\n        .justifyContent(FlexAlign.Center)\n      }\n      .alignItems(HorizontalAlign.Start)\n      .width('80%')\n      .height('100%')\n    }\n    .padding(20)\n    .borderRadius(12)\n    .backgroundColor('#FFECECEC')\n    .height(120)\n    .width('100%')\n    .justifyContent(FlexAlign.SpaceBetween)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图13"
        })
      }), " 数据变化不渲染"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(179181)/* ["default"] */.A) + "",
        width: "385",
        height: "766"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "非必要内存消耗",
      children: "非必要内存消耗"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者没有定义keyGenerator函数，则ArkUI框架会使用默认的键值生成函数，即(item: Object, index: number) => { return index + '__' + JSON.stringify(item); }。当item是复杂对象时，将其JSON序列化会得到长字符串，占用更多的内存。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class MemoryData {\n  public longStr: string;\n  public key: string;\n\n  constructor(longStr: string, key: string) {\n    this.longStr = longStr;\n    this.key = key;\n  }\n}\n\n@Entry\n@Component\nstruct NonNecessaryMemory {\n  @State simpleList: Array<MemoryData> = [];\n\n  aboutToAppear(): void {\n    let longStr = '';\n    for (let i = 0; i < 2000; i++) {\n      longStr += i.toString();\n    }\n    for (let index = 0; index < 3000; index++) {\n      let data: MemoryData = new MemoryData(longStr, 'a' + index.toString());\n      this.simpleList.push(data);\n    }\n  }\n\n  build() {\n    List() {\n      ForEach(this.simpleList, (item: MemoryData) => {\n        ListItem() {\n          Text(item.key)\n        }\n      }\n        // 如果不定义下面的keyGenerator函数，则ArkUI框架会使用默认的键值生成函数\n        , (item: MemoryData) => {\n          return item.key;\n        }\n      )\n    }.height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对比自定义keyGenerator函数和使用默认键值生成函数两种情况下的内存占用（通过DevEco->Profiler->Realtime Monitor工具，可以获取相关进程的内存数据）。自定义keyGenerator函数，这个示例代码的内存占用降低了约70MB。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图14"
        })
      }), " 使用默认键值生成函数下的内存占用"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(295193)/* ["default"] */.A) + "",
        width: "708",
        height: "486"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图15"
        })
      }), " 自定义键值生成函数下的内存占用"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(797668)/* ["default"] */.A) + "",
        width: "709",
        height: "489"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "键值生成失败",
      children: "键值生成失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者没有定义keyGenerator函数，则ArkUI框架会使用默认的键值生成函数，即(item: Object, index: number) => { return index + '__' + JSON.stringify(item); }。然而，JSON.stringify序列化在某些数据结构上会失败，导致应用发生jscrash并退出。例如，bigint无法被JSON.stringify序列化："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class KeyData {\n  public content: bigint;\n\n  constructor(content: bigint) {\n    this.content = content;\n  }\n}\n\n@Entry\n@Component\nstruct GenerationKeyExample {\n  @State simpleList: Array<KeyData> = [new KeyData(1234567890123456789n), new KeyData(2345678910987654321n)];\n\n  build() {\n    Row() {\n      Column() {\n        ForEach(this.simpleList, (item: KeyData) => {\n          GenerationKeyChildItem({ item: item.content.toString() })\n        }\n          // 如果不定义下面的keyGenerator函数，则ArkUI框架会使用默认的键值生成函数\n          // KeyData中的content: bigint在JSON序列化时失败\n          , (item: KeyData) => item.content.toString()\n        )\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n    .backgroundColor(0xF1F3F5)\n  }\n}\n\n@Component\nstruct GenerationKeyChildItem {\n  @Prop item: string;\n\n  build() {\n    Text(this.item)\n      .fontSize(50)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者定义keyGenerator函数，应用正常启动："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(729047)/* ["default"] */.A) + "",
        width: "231",
        height: "316"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用默认的键值生成函数，应用发生jscrash："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Error message:@Component 'Parent'[4]: ForEach id 7: use of default id generator function not possible on provided data structure. Need to specify id generator function (ForEach 3rd parameter). Application Error!\nStacktrace:\n    ...\n    at anonymous (entry/src/main/ets/pages/Index.ets:18:52)\n"
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
797668(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798002-6317d50366f56c95f94067b25203a5f9.png");

},
179181(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957650-dc2133e1890a12e90f334ce84286b791.png");

},
93090(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797998-48c2b2aeb4109e586b50341b7dbcddb3.png");

},
893797(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,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");

},
379994(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957648-85ecac5efd023ab472c1b54e64e2e208.png");

},
160699(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
310872(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798000-d1058c1966b2e0f021b17da2f037f8f6.gif");

},
80390(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
602658(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477647-62ce7dca4db8453a54d7377d3ad1ac31.png");

},
799431(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957646-e2142a4750af34bffd478a2a5a582c3f.png");

},
406296(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437693-31cec22521f660fe2a6f83621adb2fbb.gif");

},
149798(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477645-eaf5ac03f6731d00514c34a6b2382b88.png");

},
729047(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437697-f0244db72ea6c886f5b3a9f8c741b3e0.png");

},
54544(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797996-eaf5ac03f6731d00514c34a6b2382b88.png");

},
295193(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477651-6eddaa6fbe95f8319767726c70d3da71.png");

},
56429(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957644-b3791365228ca91ef69786d45049321f.png");

},
479105(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437695-1095530f74d53fbd0432c80ca2a7d076.png");

},
272828(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477649-93e38ff0addb8980bebc57b69b6fc65f.gif");

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