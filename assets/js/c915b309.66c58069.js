"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["379366"], {
23394(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_development_fundamentals_application_package_fundamentals_application_package_dev_in_app_hsp_in_app_hsp_md_c91_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-development-fundamentals-application-package-fundamentals-application-package-dev-in-app-hsp-in-app-hsp-md-c91.json
var site_docs_development_fundamentals_application_package_fundamentals_application_package_dev_in_app_hsp_in_app_hsp_md_c91_namespaceObject = JSON.parse('{"id":"development-fundamentals/application-package-fundamentals/application-package-dev/in-app-hsp/in-app-hsp","title":"HSP","description":"HSP（Harmony Shared Package）是动态共享包，包含代码、C++库、资源和配置文件，通过HSP可以实现代码和资源的共享。HSP不支持独立发布上架，而是跟随宿主应用的APP包一起发布，与宿主应用同进程，具有相同的包名和生命周期。","source":"@site/docs/development-fundamentals/application-package-fundamentals/application-package-dev/in-app-hsp/in-app-hsp.md","sourceDirName":"development-fundamentals/application-package-fundamentals/application-package-dev/in-app-hsp","slug":"/development-fundamentals/application-package-fundamentals/application-package-dev/in-app-hsp/","permalink":"/harmonyos-docs-site/development-fundamentals/application-package-fundamentals/application-package-dev/in-app-hsp/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"HSP","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/in-app-hsp","kit":"getting-started","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"HAR","permalink":"/harmonyos-docs-site/development-fundamentals/application-package-fundamentals/application-package-dev/har-package/"},"next":{"title":"应用安装卸载与更新开发指导","permalink":"/harmonyos-docs-site/development-fundamentals/application-package-fundamentals/application-package-install/application-package-install-uninstall/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/development-fundamentals/application-package-fundamentals/application-package-dev/in-app-hsp/in-app-hsp.md


const frontMatter = {
	title: 'HSP',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/in-app-hsp',
	kit: 'getting-started',
	last_updated: '2026-04-22'
};
const contentTitle = 'HSP';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}, {
  "value": "创建",
  "id": "创建",
  "level": 2
}, {
  "value": "开发",
  "id": "开发",
  "level": 2
}, {
  "value": "导出ArkUI组件",
  "id": "导出arkui组件",
  "level": 3
}, {
  "value": "导出类和方法",
  "id": "导出类和方法",
  "level": 3
}, {
  "value": "导出native方法",
  "id": "导出native方法",
  "level": 3
}, {
  "value": "通过$r访问HSP中的资源",
  "id": "通过r访问hsp中的资源",
  "level": 3
}, {
  "value": "导出HSP中的资源",
  "id": "导出hsp中的资源",
  "level": 3
}, {
  "value": "使用",
  "id": "使用",
  "level": 2
}, {
  "value": "引用HSP中的接口",
  "id": "引用hsp中的接口",
  "level": 3
}, {
  "value": "页面跳转和返回",
  "id": "页面跳转和返回",
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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "hsp",
        children: "HSP"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HSP（Harmony Shared Package）是动态共享包，包含代码、C++库、资源和配置文件，通过HSP可以实现代码和资源的共享。HSP不支持独立发布上架，而是跟随宿主应用的APP包一起发布，与宿主应用同进程，具有相同的包名和生命周期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(888992)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用内HSP：在编译过程中与应用包名（bundleName）强耦合，只能给某个特定的应用使用。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-typical-scenarios/integrated-hsp",
          children: "集成态HSP"
        }), "：构建、发布过程中，不与特定的应用包名耦合；使用时，工具链支持自动将集成态HSP的包名替换成宿主应用包名，并且会重新签名生成一个新的HSP包，作为宿主应用的安装包，这个新的HSP也属于宿主应用HAP的应用内HSP。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "指南和API参考文档中如无特殊说明，默认HSP都为应用内HSP。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多个HAP/HSP共用的代码和资源放在同一个HSP中，可以提高代码、资源的可重用性和可维护性，同时编译打包时也只保留一份HSP代码和资源，能够控制应用包的大小。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["HSP在运行时", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-modular-design#section28312051291",
          children: "按需加载"
        }), "，有助于提升应用性能。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同一个组织内部的多个应用之间，可以使用集成态HSP实现代码和资源的共享。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["可以和依赖该HSP的HAP一起安装/运行。在安装或更新时，多模块之间存在校验，详情参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-package-fundamentals/application-package-install/install-and-update-consistency-verification",
          children: "一致性校验"
        }), "。使用打包工具进行打包时，会进行合法性校验，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/debugging-commands/packing-unpacking/packing-tool",
          children: "打包工具"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从API version 14开始HSP支持在配置文件中", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-overview#%E5%A3%B0%E6%98%8E%E9%85%8D%E7%BD%AE",
          children: "声明UIAbility"
        }), "组件，但不支持具有入口能力的UIAbility（即skill标签配置了entity.system.home和ohos.want.action.home）。配置UIAbility的方法参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-project/ide-module-management/ide-add-new-ability#section18658758104318",
          children: "模块中添加UIAbility"
        }), "，HSP中UIAbility的启动方式与", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-intra-device-interaction",
          children: "应用内启动UIAbility"
        }), "方法相同。API version 13及之前版本，不支持在配置文件中声明", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-overview#%E5%A3%B0%E6%98%8E%E9%85%8D%E7%BD%AE",
          children: "UIAbility"
        }), "组件。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从API version 18开始HSP支持在配置文件中声明", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/extensionability-overview",
          children: "ExtensionAbility"
        }), "组件，但不支持具有入口能力的ExtensionAbility（即skill标签配置了entity.system.home和ohos.want.action.home）。HSP中配置ExtensionAbility的方法参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-project/ide-module-management/ide-add-new-ability#section18891639459",
          children: "模块中添加ExtensionAbility"
        }), "。 API version 17及之前版本，不支持在配置文件中声明", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/extensionability-overview",
          children: "ExtensionAbility"
        }), "组件。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HSP可以依赖其他HAR或HSP，也可以被HAP或者HSP依赖集成，但不支持循环依赖，也不支持依赖传递。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(195690)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "循环依赖：例如有三个HSP，HSP-A、HSP-B和HSP-C，循环依赖指HSP-A依赖HSP-B，HSP-B依赖HSP-C，HSP-C又依赖HSP-A。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "依赖传递：例如有三个HSP，HSP-A、HSP-B和HSP-C，依赖关系是HSP-A依赖HSP-B，HSP-B依赖HSP-C。不支持传递依赖指HSP-A可以使用HSP-B的方法和组件，但是HSP-A不能直接使用HSP-C的方法和组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建",
      children: "创建"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用DevEco Studio创建一个用于调用C++代码的HSP模块。并在“Configure New Module”页面中启用“Enable native”选项。详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-creating-har-api9/ide-hsp#section7717162312546",
        children: "创建HSP模块"
      }), "，以创建一个名为library的HSP模块为例。基本的工程目录结构如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MyApplication\n├── library\n│   ├── src\n│   │   └── main\n|   |       ├── cpp\n|   |       |   ├── CMakeLists.txt    //C++代码编译的配置文件\n|   |       |   └── napi_init.cpp     //NAPI模块初始化的C++文件\n│   │       ├── ets\n│   │       │   └── pages\n│   │       │       └── index.ets     //模块library的页面文件\n│   │       ├── resources             //模块library的资源目录\n│   │       └── module.json5          //模块library的配置文件\n│   ├── oh-package.json5              //模块级\n│   ├── index.ets                     //入口文件index.ets\n│   └── build-profile.json5           //模块级\n└── build-profile.json5               //工程级\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发",
      children: "开发"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "介绍如何导出HSP的ArkUI组件、接口、资源，供应用内的其他HAP/HSP引用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导出arkui组件",
      children: "导出ArkUI组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI组件可以通过export导出，例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// library/src/main/ets/components/MyTitleBar.ets\n@Component\nexport struct MyTitleBar {\n  build() {\n    Row() {\n      Text($r('app.string.library_title'))\n        .id('library')\n        .fontFamily('HarmonyHeiTi')\n        .fontWeight(FontWeight.Bold)\n        .fontSize(32)\n        .fontColor($r('app.color.text_color'))\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在入口文件 index.ets 中声明对外暴露的接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// library/index.ets\nexport { MyTitleBar } from './src/main/ets/components/MyTitleBar';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导出类和方法",
      children: "导出类和方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过export导出类和方法，例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// library/src/main/ets/utils/test.ets\nexport class Log {\n  static info(msg: string): void {\n    console.info(msg);\n  }\n}\n\nexport function add(a: number, b: number): number {\n  return a + b;\n}\n\nexport function minus(a: number, b: number): number {\n  return a - b;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在入口文件 index.ets 中声明对外暴露的接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// library/index.ets\nexport { Log, add, minus } from './src/main/ets/utils/test';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导出native方法",
      children: "导出native方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在HSP中也可以包含C++编写的so。对于so中的native方法，HSP通过间接的方式导出，以导出liblibrary.so的乘法接口multi为例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// library/src/main/ets/utils/nativeTest.ets\nimport native from 'liblibrary.so';\n\nexport function nativeMulti(a: number, b: number): number {\n  let result: number = native.multi(a, b);\n  return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在入口文件 index.ets 中声明对外暴露的接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// library/index.ets\nexport { nativeMulti } from './src/main/ets/utils/nativeTest';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通过r访问hsp中的资源",
      children: "通过$r访问HSP中的资源"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在组件中，经常需要使用字符串、图片等资源。HSP中的组件需要使用资源时，一般将其所用资源放在HSP包内，而非放在HSP的使用方处，以符合高内聚低耦合的原则。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在工程中，常通过$r/$rawfile的形式引用应用资源。可以用$r/$rawfile访问本模块resources目录下的资源，如访问resources目录下定义的图片src/main/resources/base/media/example.png时，可以用$r(\"app.media.example\")。有关$r/$rawfile的使用方式，请参阅文档", (0,jsx_runtime.jsx)(_components.a, {
        href: "/resource-categories-and-access",
        children: "资源分类与访问"
      }), "中“资源访问-应用资源”小节。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不推荐使用相对路径的方式，容易引用错误路径。例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当要引用上述同一图片资源时，在HSP模块中使用Image(\"../../resources/base/media/example.png\")，实际上该Image组件访问的是HSP调用方（如entry）下的资源entry/src/main/resources/base/media/example.png。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// library/src/main/ets/pages/Index.ets\n// 正确用例\nImage($r('app.media.example'))\n  .id('example')\n  .borderRadius('48px')\n// // 错误用例\nImage(\"../../resources/base/media/example.png\")\n  .id('example1')\n  .borderRadius('48px')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导出hsp中的资源",
      children: "导出HSP中的资源"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "跨包访问HSP内资源时，推荐实现一个资源管理类，以封装对外导出的资源。采用这种方式，具有如下优点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HSP开发者可以控制自己需要导出的资源，不需要对外暴露的资源可以不用导出。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用方无须感知HSP内部的资源名称。当HSP内部的资源名称发生变化时，也不需要使用方跟着修改。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其具体实现如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将需要对外提供的资源封装为一个资源管理类："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// library/src/main/ets/ResManager.ets\nexport class ResManager{\n  static getPic(): Resource{\n    return $r('app.media.pic');\n  }\n  static getDesc(): Resource{\n    return $r('app.string.shared_desc');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在入口文件 index.ets 中声明对外暴露的接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// library/index.ets\nexport { ResManager } from './src/main/ets/ResManager';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用",
      children: "使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "介绍如何引用HSP中的接口，以及如何通过页面路由实现HSP的pages页面跳转与返回。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "引用hsp中的接口",
      children: "引用HSP中的接口"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["要使用HSP中的接口，首先需要在使用方的 oh-package.json5 文件中配置对它的依赖。具体配置方法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-har-import",
        children: "引用动态共享包"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "依赖配置成功后，就可以像使用HAR一样调用HSP的对外接口了。例如，上面的library已经导出了下面这些接口："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// library/index.ets\n// ...\nexport { Log, add, minus } from './src/main/ets/utils/test';\n// ...\nexport { MyTitleBar } from './src/main/ets/components/MyTitleBar';\n// ...\nexport { ResManager } from './src/main/ets/ResManager';\n// ...\nexport { nativeMulti } from './src/main/ets/utils/nativeTest';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用方的代码中，可以这样使用："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// entry/src/main/ets/pages/index.ets\nimport { Log, add, MyTitleBar, ResManager, nativeMulti } from 'library';\nimport { BusinessError } from \"@kit.BasicServicesKit\";\nimport { application} from '@kit.AbilityKit';\n\nconst TAG = 'Index';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = '';\n\n  build() {\n    Column() {\n      List() {\n        ListItem() {\n          MyTitleBar()\n        }\n        .margin({ left: '35px', top: '32px' })\n\n        ListItem() {\n          Text(this.message)\n            .fontFamily('HarmonyHeiTi')\n            .fontSize(18)\n            .textAlign(TextAlign.Start)\n            .width('100%')\n            .fontWeight(FontWeight.Bold)\n        }\n        .width('685px')\n        .margin({ top: 30, bottom: 10 })\n\n        ListItem() {\n          // ResManager返回的Resource对象，可以传给组件直接使用，也可以从中取出资源来使用\n          Image(ResManager.getPic())\n            .id('image')\n            .borderRadius('48px')\n        }\n        .width('685px')\n        .margin({ top: 10, bottom: 10 })\n        .padding({ left: 12, right: 12, top: 4, bottom: 4 })\n\n        ListItem() {\n          Text($r('app.string.add'))\n            .fontSize(18)\n            .textAlign(TextAlign.Start)\n            .width('100%')\n            .fontWeight(500)\n            .height('100%')\n        }\n        .id('add')\n        .borderRadius(24)\n        .width('685px')\n        .height('84px')\n        .backgroundColor($r('sys.color.ohos_id_color_foreground_contrary'))\n        .margin({ top: 10, bottom: 10 })\n        .padding({ left: 12, right: 12, top: 4, bottom: 4 })\n        .onClick(() => {\n          Log.info('add button click!');\n          this.message = 'result: ' + add(1, 2);\n        })\n\n        ListItem() {\n          Text(ResManager.getDesc())\n            .fontSize(18)\n            .textAlign(TextAlign.Start)\n            .width('100%')\n            .fontWeight(500)\n            .height('100%')\n        }\n        .id('getStringValue')\n        .borderRadius(24)\n        .width('685px')\n        .height('84px')\n        .backgroundColor($r('sys.color.ohos_id_color_foreground_contrary'))\n        .margin({ top: 10, bottom: 10 })\n        .padding({ left: 12, right: 12, top: 4, bottom: 4 })\n        .onClick(() => {\n          // 先通过当前application.createModuleContext获取hsp模块的上下文，再获取hsp模块的resourceManager，然后再调用resourceManager的接口获取资源\n          application.createModuleContext(this.getUIContext()?.getHostContext(), \"library\").then((context:Context)=>{\n            context.resourceManager.getStringValue(ResManager.getDesc().id)\n              .then(value => {\n                console.info('getStringValue is ' + value);\n                this.message = 'getStringValue is ' + value;\n              })\n              .catch((err: BusinessError) => {\n                console.error('getStringValue promise error is ' + err);\n              });\n          }).catch((err: BusinessError) => {\n            console.error('createModuleContext promise error is ' + err);\n          });\n        })\n\n        ListItem() {\n          Text($r('app.string.native_multi'))\n            .fontSize(18)\n            .textAlign(TextAlign.Start)\n            .width('100%')\n            .fontWeight(500)\n            .height('100%')\n        }\n        .id('nativeMulti')\n        .borderRadius(24)\n        .width('685px')\n        .height('84px')\n        .backgroundColor($r('sys.color.ohos_id_color_foreground_contrary'))\n        .margin({ top: 10, bottom: 10 })\n        .padding({ left: 12, right: 12, top: 4, bottom: 4 })\n        .onClick(() => {\n          Log.info('nativeMulti button click!');\n          this.message = 'result: ' + nativeMulti(3, 4);\n        })\n      }\n      .alignListItem(ListItemAlign.Center)\n    }\n    .width('100%')\n    .backgroundColor($r('app.color.page_background'))\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "页面跳转和返回",
      children: "页面跳转和返回"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者想在entry模块中，添加一个按钮跳转至library模块中的menu页面（路径为：library/src/main/ets/pages/library_menu.ets），那么可以在使用方的代码（entry模块下的Index.ets，路径为：entry/src/main/ets/pages/Index.ets）里这样使用："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  @State message: string = '';\n  pathStack: NavPathStack = new NavPathStack();\n\n  build() {\n    Navigation(this.pathStack) {\n      Column() {\n        List() {\n          ListItem() {\n            Text($r('app.string.click_to_menu'))\n              .fontSize(18)\n              .textAlign(TextAlign.Start)\n              .width('100%')\n              .fontWeight(500)\n              .height('100%')\n          }\n          .id('clickToMenu')\n          .borderRadius(24)\n          .width('685px')\n          .height('84px')\n          .backgroundColor($r('sys.color.ohos_id_color_foreground_contrary'))\n          .margin({ top: 10, bottom: 10 })\n          .padding({\n            left: 12,\n            right: 12,\n            top: 4,\n            bottom: 4\n          })\n          .onClick(() => {\n            this.pathStack.pushPathByName('library_menu', null)\n          })\n        }\n        .alignListItem(ListItemAlign.Center)\n      }\n      .width('100%')\n      .backgroundColor($r('app.color.page_background'))\n      .height('100%')\n    }.title(\"Navigation_Index\")\n    .mode(NavigationMode.Stack)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在library下新增page文件（library/src/main/ets/pages/library_menu.ets），其中'back_to_index'的按钮返回上一页。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nexport function PageOneBuilder() {\n  Library_Menu()\n}\n\n@Component\nexport struct Library_Menu {\n  @State message: string = 'Hello World';\n  pathStack: NavPathStack = new NavPathStack();\n\n  build() {\n    NavDestination() {\n      Row() {\n        Column() {\n          Text(this.message)\n            .fontSize($r('app.float.page_text_font_size'))\n            .fontWeight(FontWeight.Bold)\n            .onClick(() => {\n              this.message = 'Welcome';\n            })\n          Button('back_to_index').fontSize(50).onClick(() => {\n            this.pathStack.pop();\n          })\n        }\n        .width('100%')\n      }\n      .height('100%')\n    }.title('Library_Menu')\n    .onReady((context: NavDestinationContext) => {\n      this.pathStack = context.pathStack;\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要在library模块下新增route_map.json文件（library/src/main/resources/base/profile/route_map.json）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"routerMap\": [\n    {\n      \"name\": \"library_menu\",\n      \"pageSourceFile\": \"src/main/ets/pages/library_menu.ets\",\n      \"buildFunction\": \"PageOneBuilder\",\n      \"data\": {\n        \"description\": \"this is library_menu\"\n      }\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在library模块下的配置文件（library/src/main/module.json5）中配置json文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    \"name\": \"library\",\n    \"type\": \"shared\",\n    \"description\": \"$string:shared_desc\",\n    \"deviceTypes\": [\n      \"tablet\",\n      \"2in1\"\n    ],\n    \"deliveryWithInstall\": true,\n    \"pages\": \"$profile:main_pages\",\n    \"routerMap\": \"$profile:route_map\" // 新增配置，指向route_map.json文件\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["页面跳转和页面返回都使用了Navigation的特性，详情参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-jump#%E8%B7%AF%E7%94%B1%E6%93%8D%E4%BD%9C",
        children: "Navigation跳转"
      }), "。"]
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
195690(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
888992(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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