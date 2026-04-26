"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["414832"], {
971678(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_ui_paradigm_basic_syntax_arkts_extend_components_arkts_mutablebuilder_arkts_mutablebuilder_md_a2d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-ui-paradigm-basic-syntax-arkts-extend-components-arkts-mutablebuilder-arkts-mutablebuilder-md-a2d.json
var site_docs_arkui_arkts_ui_development_arkts_ui_paradigm_basic_syntax_arkts_extend_components_arkts_mutablebuilder_arkts_mutablebuilder_md_a2d_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-mutablebuilder/arkts-mutablebuilder","title":"mutableBuilder：实现全局@Builder动态更新","description":"当在一个自定义组件内使用多个全局@Builder函数实现UI的不同效果时，代码维护将变得非常困难，且页面不够整洁。此时，可以使用wrapBuilder封装全局@Builder。但是wrapBuilder不支持动态切换@Builder，引入mutableBuilder实现全局@Builder的动态切换。","source":"@site/docs/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-mutablebuilder/arkts-mutablebuilder.md","sourceDirName":"arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-mutablebuilder","slug":"/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-mutablebuilder/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-mutablebuilder/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"mutableBuilder：实现全局@Builder动态更新","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-mutablebuilder","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"wrapBuilder：封装全局@Builder","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-wrapbuilder/"},"next":{"title":"@Styles装饰器：定义组件重用样式","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-style/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-mutablebuilder/arkts-mutablebuilder.md


const frontMatter = {
	title: 'mutableBuilder：实现全局@Builder动态更新',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-mutablebuilder',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'mutableBuilder：实现全局@Builder动态更新';

const assets = {

};



const toc = [{
  "value": "wrapBuilder不支持动态全局@Builder",
  "id": "wrapbuilder不支持动态全局builder",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "限制条件",
  "id": "限制条件",
  "level": 2
}, {
  "value": "动态更改全局@Builder实例",
  "id": "动态更改全局builder实例",
  "level": 2
}, {
  "value": "使用mutableBuilder显示弹出菜单",
  "id": "使用mutablebuilder显示弹出菜单",
  "level": 2
}, {
  "value": "观察mutableBuilder中@Builder的变化",
  "id": "观察mutablebuilder中builder的变化",
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
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "mutablebuilder实现全局builder动态更新",
        children: "mutableBuilder：实现全局@Builder动态更新"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当在一个自定义组件内使用多个全局", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
        children: "@Builder"
      }), "函数实现UI的不同效果时，代码维护将变得非常困难，且页面不够整洁。此时，可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-wrapbuilder",
        children: "wrapBuilder"
      }), "封装全局@Builder。但是wrapBuilder不支持动态切换@Builder，引入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/arkts-extend-component-decorator/ts-universal-mutablebuilder/ts-universal-mutablebuilder",
        children: "mutableBuilder"
      }), "实现全局@Builder的动态切换。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(486381)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，开发者可以使用mutableBuilder实现全局@Builder的动态切换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，mutableBuilder支持在元服务中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wrapbuilder不支持动态全局builder",
      children: "wrapBuilder不支持动态全局@Builder"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前wrapBuilder不支持二次赋值， 更改@Builder，UI不会发生变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class TextContent {\n  text: string = '';\n}\n\n@Builder\nfunction textBuilder(p: TextContent) {\n  Text(p.text)\n}\n\n@Builder\nfunction buttonBuilder(p: TextContent) {\n  Button(p.text)\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'init';\n  @State text: WrappedBuilder<[TextContent]> = wrapBuilder(textBuilder); // 使用textBuilder初始化\n\n  build() {\n    Column() {\n      this.text.builder({ text: this.message })\n      Button().onClick(() => {\n        this.text = wrapBuilder(buttonBuilder); // 点击Button，将textBuilder替换为buttonBuilder进行二次赋值\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上述代码中，使用textBuilder初始化wrapBuilder，点击Button的onClick事件，使用buttonBuilder再次初始化wrapBuilder，不会触发对应的@Builder的更新。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了解决这一问题，引入mutableBuilder作为动态全局@Builder封装函数。mutableBuilder返回MutableBuilder对象，用于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder#%E5%85%A8%E5%B1%80%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9E%84%E5%BB%BA%E5%87%BD%E6%95%B0",
        children: "全局@Builder"
      }), "的动态刷新。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["mutableBuilder是一个模板函数，返回一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/arkts-extend-component-decorator/ts-universal-mutablebuilder/ts-universal-mutablebuilder#mutablebuilder-2",
        children: "MutableBuilder"
      }), "对象。相比", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/arkts-extend-component-decorator/ts-universal-wrapbuilder/ts-universal-wrapbuilder#wrappedbuilder",
        children: "WrappedBuilder"
      }), "，MutableBuilder可以实现动态切换全局@Builder。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "declare function mutableBuilder<Args extends Object[]>(builder: BuilderCallback): MutableBuilder<Args>;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["同时MutableBuilder对象是一个模板类，继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-wrapbuilder#%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E",
        children: "WrappedBuilder"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "declare class MutableBuilder<Args extends Object[]> extends WrappedBuilder<Args> {\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(890361)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模板参数Args extends Object[]需要匹配@Builder函数参数的类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用方法："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let builderVar: MutableBuilder<[string, number]> = mutableBuilder(MyBuilder);\nlet builderArr: MutableBuilder<[string, number]>[] = [mutableBuilder(MyBuilder)]; // mutableBuilder支持放入数组中\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制条件",
      children: "限制条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["mutableBuilder方法只能传入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder#%E5%85%A8%E5%B1%80%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9E%84%E5%BB%BA%E5%87%BD%E6%95%B0",
            children: "全局@Builder"
          }), "方法，传入局部@Builder方法编译时报错。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class TextContent {\n  text: string = '';\n}\n\n@Builder\nfunction globalBuilder(p: TextContent) {\n  Text(p.text)\n}\n\n@ComponentV2\nstruct MyApp {\n  @Local message: string = 'init';\n  // 正确用法，使用全局@Builder\n  @Local switchingBuilder: MutableBuilder<[TextContent]> = mutableBuilder(globalBuilder);\n  // 错误用法，使用局部@Builder，编译报错\n  @Local localBuilderObject: MutableBuilder<[TextContent]> = mutableBuilder(this.localBuilder);\n  \n  @Builder\n  localBuilder(p: TextContent) {\n    Text(p.text)\n  }\n  build() {\n    Column() {\n      this.switchingBuilder.builder({ text: this.message })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MutableBuilder对象的builder属性方法仅限在自定义组件内部使用，在自定义组件外面使用会导致程序运行时崩溃。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class TextContent {\n  text: string = '';\n}\n\n@Builder\nfunction globalBuilder(p: TextContent) {\n  Text(p.text)\n}\n\n// 错误用法，MutableBuilder对象的builder属性方法在自定义组件外面使用，运行时崩溃\nlet outSideBuilder: MutableBuilder<[TextContent]> = mutableBuilder(globalBuilder);\noutSideBuilder.builder({ text: 'message' });\n\n@ComponentV2\nstruct MyApp {\n  @Local message: string = 'init';\n  @Local switchingBuilder: MutableBuilder<[TextContent]> = mutableBuilder(globalBuilder);\n  build() {\n    Column() {\n      // 正确用法，MutableBuilder对象的builder属性方法在自定义组件中使用\n      this.switchingBuilder.builder({ text: this.message })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不建议与wrapBuilder混合使用，因为mutableBuilder创建的对象类型是MutableBuilder类型，会导致不符合预期的更新。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如下为不推荐的用法："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 在实例化MutableBuilder对象时，建议使用mutableBuilder(builderName)方法\n@State switchingBuilder: MutableBuilder<[MutableBinding]> = mutableBuilder(textBuilder);\n// 不支持将MutableBuilder类型的变量赋值为undefined或null，会导致运行时crash\n@State switchingBuilder: MutableBuilder<[MutableBinding]> | undefined | null = null;\nButton(`MutableBuilder`).onClick(() => {\n  // 不建议将wrapBuilder创建的对象赋值给MutableBuilder类型的对象，赋值后会将textBuilder动态切换成buttonBuilder\n  this.switchingBuilder = wrapBuilder(buttonBuilder);\n})\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如下为推荐用法："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 在实例化MutableBuilder对象时，建议使用mutableBuilder(builderName)方法\n@State switchingBuilder: MutableBuilder<[MutableBinding]> = mutableBuilder(textBuilder);\n\nButton(`MutableBuilder`).onClick(() => {\n  // 赋值会将wrapBuilder中textBuilder中动态切换成buttonBuilder\n  this.switchingBuilder = mutableBuilder(buttonBuilder); // 推荐用法\n})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "动态更改全局builder实例",
      children: "动态更改全局@Builder实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用@Builder装饰器装饰的方法textBuilder作为mutableBuilder的参数，然后将mutableBuilder的返回值赋值给变量switchingBuilder，在Button的点击事件中，使用@Builder装饰器装饰的方法buttonBuilder作为mutableBuilder的参数，将mutableBuilder的返回值再次赋值给变量switchingBuilder，可实现textBuilder 更新为buttonBuilder，以解决wrapBuilder不支持二次赋值的问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class TextContent {\n  text: string = '';\n}\n\n@Builder\nfunction textBuilder(p: TextContent) {\n  Text(p.text).margin(20)\n}\n\n@Builder\nfunction buttonBuilder(p: TextContent) {\n  Button(p.text).margin(20)\n}\n\nlet counter: number = 1;\n@Entry\n@ComponentV2\nstruct MyApp {\n  @Local message: string = 'init';\n  @Local switchingBuilder: MutableBuilder<[TextContent]> = mutableBuilder(textBuilder);\n  build() {\n    Column() {\n      this.switchingBuilder.builder({ text: this.message })\n      Button('Click to change')\n      .onClick(() => {\n        counter++; // 每次点击按钮修改counter来动态改变全局@Builder\n        if(counter % 2 === 0) {\n          this.message += 'B';\n          this.switchingBuilder = mutableBuilder(buttonBuilder); // textBuilder--->buttonBuilder\n        } else {\n          this.message += 'T';\n          this.switchingBuilder = mutableBuilder(textBuilder); // buttonBuilder--->textBuilder\n        }\n      })\n    }.position({x: 120, y: 60})\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击Button，可将textBuilder动态更改为buttonBuilder，如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(597524)/* ["default"] */.A) + "",
        width: "294",
        height: "156"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用mutablebuilder显示弹出菜单",
      children: "使用mutableBuilder显示弹出菜单"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于MutableBuilder继承自WrappedBuilder，故mutableBuilder对应的@Builder具有跟WrappedBuilder同等能力，如下示例，mutableBuilder对应的@Builder方法可作为bindMenu入参，支持点击弹出菜单。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nfunction overBuilder() {\n  Row() {\n    Text('全局 Builder')\n      .fontSize(30)\n      .fontWeight(FontWeight.Bold)\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State arr: number[] = [1,2,3,4,5];\n\n  mutableBuilderMenu: MutableBuilder<[]> = mutableBuilder<[]>(overBuilder);\n  build() {\n    Column() {\n      List({ space: 10 }) {\n        ForEach(this.arr, (item: number) => {\n          ListItem() {\n            Text(`${item}`)\n            .width('100%')\n              .height(100)\n              .fontSize(16)\n              .textAlign(TextAlign.Center)\n              .borderRadius(10)\n              .backgroundColor(0xFFFFFF)\n          }\n          .bindMenu(this.mutableBuilderMenu.builder)\n        }, (item: number) => JSON.stringify(item))\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "观察mutablebuilder中builder的变化",
      children: "观察mutableBuilder中@Builder的变化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["mutableBuilder对应的@Builder函数中可使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#mutablebindingt20",
        children: "MutableBinding"
      }), "进行包裹来观察状态变量的变化，同时可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-monitor",
        children: "@Monitor"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-addmonitor-clearmonitor",
        children: "addMonitor"
      }), "监听mutableBuilder中@Builder的变化。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils, MutableBinding } from '@kit.ArkUI';\n\n@Builder\nfunction textBuilder(p: MutableBinding<string>) {\n  Text(p.value)\n    .margin(20)\n    .onClick(() => {\n      p.value += 't';\n    })\n}\n\n@Builder\nfunction buttonBuilder(p: MutableBinding<string>) {\n  Button(p.value)\n    .margin(20)\n    .onClick(() => {\n      p.value += 'b';\n    })\n}\n\nlet counter: number = 1;\n\n@Entry\n@ComponentV2\nstruct MyApp {\n  @Local message: string = 'init';\n  @Local switchingBuilder: MutableBuilder<[MutableBinding<string>]> = mutableBuilder(textBuilder);\n\n  @Monitor('switchingBuilder') variableChange(m: IMonitor): void {\n    console.info(`Builder changed. is buttonBuilder: ${m.value<MutableBuilder<[MutableBinding<string>]>>()?.now.builder === buttonBuilder}`);\n  }\n\n  build() {\n    Column() {\n      this.switchingBuilder.builder(UIUtils.makeBinding(()=> this.message, txt => this.message = txt))\n      Button('Click to change')\n        .onClick(() => {\n          counter++;\n          if(counter % 2 === 0) {\n            this.message += 'B';\n            this.switchingBuilder = mutableBuilder(buttonBuilder); // textBuilder--->buttonBuilder，@Monitor会触发回调\n          } else {\n            this.message += 'T';\n            this.switchingBuilder = mutableBuilder(textBuilder); // buttonBuilder--->textBuilder，@Monitor会触发回调\n          }\n        })\n    }.position({x: 120, y: 60})\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击Button，可将textBuilder动态切换为buttonBuilder。点击buttonBuilder，this.message会自动加B，如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(957539)/* ["default"] */.A) + "",
        width: "294",
        height: "156"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击Button将textBuilder动态切换为buttonBuilder时，@Monitor会监听到全局@Builder的变化，并打印日志@Builder change. is buttonBuilder: true。"
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
890361(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
486381(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
957539(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957582-dc83ac75d7df350e325472f54803aed9.gif");

},
597524(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437627-8dc65a7e9ba97453782394ac75d85262.gif");

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