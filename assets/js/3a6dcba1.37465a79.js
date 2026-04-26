"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["630269"], {
330047(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_development_fundamentals_application_package_fundamentals_application_package_dev_har_package_har_package_md_3a6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-development-fundamentals-application-package-fundamentals-application-package-dev-har-package-har-package-md-3a6.json
var site_docs_development_fundamentals_application_package_fundamentals_application_package_dev_har_package_har_package_md_3a6_namespaceObject = JSON.parse('{"id":"development-fundamentals/application-package-fundamentals/application-package-dev/har-package/har-package","title":"HAR","description":"HAR（Harmony Archive）是静态共享包，可以包含代码、C++库、资源和配置文件。通过HAR可以实现多个模块或多个工程共享ArkUI组件、资源等相关代码。","source":"@site/docs/development-fundamentals/application-package-fundamentals/application-package-dev/har-package/har-package.md","sourceDirName":"development-fundamentals/application-package-fundamentals/application-package-dev/har-package","slug":"/development-fundamentals/application-package-fundamentals/application-package-dev/har-package/","permalink":"/harmonyos-docs-site/development-fundamentals/application-package-fundamentals/application-package-dev/har-package/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"HAR","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/har-package","kit":"getting-started","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"HAP","permalink":"/harmonyos-docs-site/development-fundamentals/application-package-fundamentals/application-package-dev/hap-package/"},"next":{"title":"HSP","permalink":"/harmonyos-docs-site/development-fundamentals/application-package-fundamentals/application-package-dev/in-app-hsp/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/development-fundamentals/application-package-fundamentals/application-package-dev/har-package/har-package.md


const frontMatter = {
	title: 'HAR',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/har-package',
	kit: 'getting-started',
	last_updated: '2026-04-22'
};
const contentTitle = 'HAR';

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
  "value": "导出资源",
  "id": "导出资源",
  "level": 3
}, {
  "value": "使用",
  "id": "使用",
  "level": 2
}, {
  "value": "引用HAR的ArkUI组件",
  "id": "引用har的arkui组件",
  "level": 3
}, {
  "value": "引用HAR的类和方法",
  "id": "引用har的类和方法",
  "level": 3
}, {
  "value": "引用HAR的native方法",
  "id": "引用har的native方法",
  "level": 3
}, {
  "value": "引用HAR的资源",
  "id": "引用har的资源",
  "level": 3
}, {
  "value": "构建",
  "id": "构建",
  "level": 2
}, {
  "value": "混淆配置",
  "id": "混淆配置",
  "level": 3
}, {
  "value": "发布",
  "id": "发布",
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
        id: "har",
        children: "HAR"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAR（Harmony Archive）是静态共享包，可以包含代码、C++库、资源和配置文件。通过HAR可以实现多个模块或多个工程共享ArkUI组件、资源等相关代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持应用内共享，也可以作为二方库（SDK）、三方库（SDK）发布后供其他应用使用。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["作为二方库（SDK），发布到", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo",
          children: "OHPM私仓"
        }), "，供公司内部其他应用使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["作为三方库（SDK），发布到", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://ohpm.openharmony.cn/#/cn/home",
          children: "OHPM中心仓"
        }), "，供其他应用使用。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HAR不支持在设备上单独安装或运行，只能作为应用模块的依赖项被引用。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从API version 14开始，HAR支持在配置文件中声明", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-overview",
          children: "UIAbility"
        }), "组件，配置UIAbility的方法参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-project/ide-module-management/ide-add-new-ability#section18658758104318",
          children: "在模块中添加Ability"
        }), "，拉起HAR中UIAbility的方式与", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-intra-device-interaction",
          children: "启动应用内的UIAbility"
        }), "方法相同。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(106669)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startability",
        children: "startAbility"
      }), "接口拉起HAR中的UIAbility，接口参数中的moduleName取值需要为依赖该HAR的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-package-fundamentals/application-package-dev/hap-package",
        children: "HAP"
      }), "/", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-package-fundamentals/application-package-dev/in-app-hsp",
        children: "HSP"
      }), "的moduleName。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从API version 18开始，HAR支持在配置文件中声明", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/extensionability-overview",
          children: "ExtensionAbility"
        }), "组件，但不支持具有入口能力的ExtensionAbility（即skill标签配置了entity.system.home和ohos.want.action.home）。HAR中配置ExtensionAbility的方法和支持的类型请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-project/ide-module-management/ide-add-new-ability#section18891639459",
          children: "模块中添加ExtensionAbility"
        }), "。API version 17及之前版本，不支持在配置文件中声明", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/extensionability-overview",
          children: "ExtensionAbility"
        }), "组件。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["HAR不支持在配置文件中声明", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#pages%E6%A0%87%E7%AD%BE",
          children: "pages"
        }), "页面，但是可以包含pages页面，并通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-jump#%E8%B7%AF%E7%94%B1%E6%93%8D%E4%BD%9C",
          children: "Navigation跳转"
        }), "的方式进行跳转。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HAR不支持引用AppScope目录中的资源。在编译构建时，AppScope中的内容不会打包到HAR中，因此会导致HAR资源引用失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由于HSP仅支持应用内共享，如果HAR依赖了HSP，则该HAR文件仅支持应用内共享，不支持发布到二方仓或三方仓供其他应用使用，否则会导致编译失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多包（HAP/HSP）引用相同的HAR时，会造成多包间代码和资源的重复拷贝，从而导致应用包变大。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HAR可以依赖其他HAR或者HSP，但不支持循环依赖，也不支持依赖传递。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HAP引用HAR时，在编译构建过程中系统会自动合并两者的权限配置。因此开发者无需在HAP和HAR中重复申请相同权限。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(463289)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "循环依赖：例如有三个HAR，HAR-A、HAR-B和HAR-C，循环依赖指HAR-A依赖HAR-B，HAR-B依赖HAR-C，HAR-C又依赖HAR-A。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "依赖传递：例如有三个HAR，HAR-A、HAR-B和HAR-C，依赖关系是HAR-A依赖HAR-B，HAR-B依赖HAR-C。不支持传递依赖指HAR-A可以使用HAR-B的方法和组件，但是HAR-A不能直接使用HAR-C的方法和组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建",
      children: "创建"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以通过DevEco Studio创建一个用于调用C++代码的HAR模块，创建过程中需要在Configure New Module界面中开启Enable native。详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-creating-har-api9/ide-har#section643521083015",
        children: "创建库模块"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发",
      children: "开发"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "介绍如何导出HAR的ArkUI组件、接口、资源，供其他应用或当前应用的其他模块引用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Index.ets文件是HAR导出声明文件的入口，HAR需要导出的接口，统一在Index.ets文件中导出。Index.ets文件是DevEco Studio默认自动生成的，开发者也可以自定义，在模块的oh-package.json5文件中的main字段配置入口声明文件，配置如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  // ...\n  \"main\": \"Index.ets\",\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(824573)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HAR在和宿主应用一起编译时，会把HAR的代码直接编译到宿主应用中，HAR包是一个编译中间态产物，不是最终的运行实体。运行时，HAR运行的身份信息是其宿主应用，系统会以宿主应用的版本做行为区分。如果需要在HAR中区分宿主应用的版本做不同的行为区分，可以调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#bundlemanagergetbundleinfoforself",
        children: "getBundleInfoForSelf"
      }), "接口，获取宿主应用的targetVersion，然后根据不同的targetVersion，做不同的逻辑处理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导出arkui组件",
      children: "导出ArkUI组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过export导出ArkUI组件，示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// library/src/main/ets/components/mainpage/MainPage.ets\n@Component\nexport struct MainPage {\n  @State message: string = 'HAR MainPage';\n\n  build() {\n    Column() {\n      Row() {\n        Text(this.message)\n          .fontSize(32)\n          .fontWeight(FontWeight.Bold)\n      }\n      .margin({ top: '32px' })\n      .height(56)\n      .width('624px')\n\n      Flex({ justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center, alignContent: FlexAlign.Center }) {\n        Column() {\n          Image($r('app.media.pic_empty')).width('33%')\n          Text($r('app.string.empty'))\n            .fontSize(14)\n            .fontColor($r('app.color.text_color'))\n        }\n      }.width('100%')\n      .height('90%')\n    }\n    .width('100%')\n    .height('100%')\n    .backgroundColor($r('app.color.page_background'))\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAR对外暴露的接口，在Index.ets导出文件中声明如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// library/Index.ets\nexport { MainPage } from './src/main/ets/components/mainpage/MainPage';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导出类和方法",
      children: "导出类和方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过export导出类和方法，支持导出多个类和方法，示例如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// library/src/main/ets/test.ets\nexport class Log {\n  static info(msg: string) {\n    console.info(msg);\n  }\n}\n\nexport function func() {\n  return 'har func';\n}\n\nexport function func2() {\n  return 'har func2';\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAR对外暴露的接口，在Index.ets导出文件中声明如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// library/Index.ets\nexport { Log, func, func2 } from './src/main/ets/test';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导出native方法",
      children: "导出native方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在HAR中也可以包含C++编写的so。对于so中的native方法，HAR通过以下方式导出，以导出liblibrary.so的加法接口add为例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// library/src/main/ets/utils/nativeTest.ets\nimport native from 'liblibrary.so';\n\nexport function nativeAdd(a: number, b: number): number {\n  let result: number = native.add(a, b);\n  return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAR对外暴露的接口，在Index.ets导出文件中声明如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// library/Index.ets\nexport { nativeAdd } from './src/main/ets/utils/nativeTest';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导出资源",
      children: "导出资源"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在编译构建HAP时，DevEco Studio会从HAP模块及依赖的模块中收集资源文件，如果不同模块下的资源文件出现重名冲突时，DevEco Studio会按照以下优先级进行覆盖（优先级由高到低）："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "AppScope（仅Stage模型支持）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HAP包自身模块。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "依赖的HAR模块，如果依赖的多个HAR之间有资源冲突，会按照工程oh-package.json5中dependencies下的依赖顺序进行覆盖，依赖顺序在前的优先级较高。例如下方示例中dayjs和lottie中包含同名文件时，会优先使用dayjs中的资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(29772)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果在AppScope、HAP模块或HAR模块的国际化目录中配置了资源，在相同的国际化限定词下，合并的优先级也遵循上述规则。同时，国际化限定词中配置的优先级高于在base中的配置。例如，在AppScope的base中配置了资源字段，在HAR模块的en_US中配置了同样的资源字段，则在en_US的使用场景中，会更优先使用HAR模块中配置的资源字段。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  // ...\n  \"dependencies\": {\n    // ...\n    \"dayjs\": \"file:../dayjs\",\n    \"lottie\": \"file:../lottie\",\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用",
      children: "使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "介绍如何配置HAR依赖，并引用HAR的ArkUI组件、接口、资源。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["引用HAR前，需要先配置对HAR的依赖，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-har-import",
        children: "引用HAR文件和资源"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "引用har的arkui组件",
      children: "引用HAR的ArkUI组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAR的依赖配置成功后，可以引用HAR的ArkUI组件。通过import引入HAR导出的ArkUI组件，示例如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// entry/src/main/ets/pages/IndexSec.ets\nimport { MainPage } from 'library';\n\n@Entry\n@Component\nstruct IndexSec {\n  build() {\n    Row() {\n      // 引用HAR的ArkUI组件\n      MainPage()\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "引用har的类和方法",
      children: "引用HAR的类和方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过import引用HAR导出的类和方法，示例如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// entry/src/main/ets/pages/Index.ets\nimport { Log, func } from 'library';\n// ...\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    Column() {\n      Text(this.message)\n        .fontFamily('HarmonyHeiTi')\n        .fontWeight(FontWeight.Bold)\n        .fontSize(32)\n\n      // 引用HAR的ets类和方法\n      Button($r('app.string.button'))\n        .id('button')\n        .height(48)\n        .width('624px')\n        .margin({ top: '4%' })\n        .type(ButtonType.Capsule)\n        .onClick(() => {\n          // 引用HAR的类和方法\n          Log.info('har msg');\n          this.message = 'func return: ' + func();\n        })\n      // ...\n\n      // ...\n    }\n    .width('100%')\n    .backgroundColor($r('app.color.page_background'))\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "引用har的native方法",
      children: "引用HAR的native方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过import引用HAR导出的native方法，示例如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// entry/src/main/ets/pages/Index.ets\nimport { nativeAdd } from 'library';\n// ...\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    Column() {\n      Text(this.message)\n        .fontFamily('HarmonyHeiTi')\n        .fontWeight(FontWeight.Bold)\n        .fontSize(32)\n\n      // ...\n      // 引用HAR的native方法\n      Button($r('app.string.native_add'))\n        .id('nativeAdd')\n        .height(48)\n        .width('624px')\n        .margin({ top: '4%', bottom: '6%' })\n        .type(ButtonType.Capsule)\n        .onClick(() => {\n          this.message = 'result: ' + nativeAdd(1, 2);\n        })\n\n      // ...\n    }\n    .width('100%')\n    .backgroundColor($r('app.color.page_background'))\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "引用har的资源",
      children: "引用HAR的资源"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过$r引用HAR中的资源，例如在HAR模块的src/main/resources里添加字符串资源（在string.json中定义，name：hello_har）和图片资源（icon_har.png），然后在Entry模块中引用该字符串和图片资源的示例如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// entry/src/main/ets/pages/Index.ets\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    Column() {\n      Text(this.message)\n        .fontFamily('HarmonyHeiTi')\n        .fontWeight(FontWeight.Bold)\n        .fontSize(32)\n\n      // ...\n\n      // 引用HAR的字符串资源\n      Text($r('app.string.hello_har'))\n        .id('stringHar')\n        .fontFamily('HarmonyHeiTi')\n        .fontColor($r('app.color.text_color'))\n        .fontSize(24)\n        .fontWeight(500)\n        .margin({ top: '40%' })\n\n      List() {\n        ListItem() {\n          // 引用HAR的图片资源\n          Image($r('app.media.icon_har'))\n            .id('iconHar')\n            .borderRadius('48px')\n        }\n        .margin({ top: '5%' })\n        .width('312px')\n      }\n      .alignListItem(ListItemAlign.Center)\n    }\n    .width('100%')\n    .backgroundColor($r('app.color.page_background'))\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "构建",
      children: "构建"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详情请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration/ide-hvigor-build-har",
        children: "构建HAR"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "混淆配置",
      children: "混淆配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HAR可以作为二方库和三方库提供给其他应用使用，如果需要对代码资产进行保护，建议", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-guide#%E5%BC%80%E5%90%AF%E6%BA%90%E7%A0%81%E6%B7%B7%E6%B7%86",
        children: "开启混淆"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation",
        children: "混淆能力"
      }), "开启后，DevEco Studio在构建HAR时，会对代码进行编译、混淆及压缩处理，保护代码资产。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HAR模块原先默认开启混淆能力，会对API 10及以上的HAR模块，且编译模块为release时，自动进行简单的代码混淆；", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "从DevEco Studio 5.0.3.600开始，新建工程默认关闭代码混淆功能"
        })
      }), "，可以在HAR模块的build-profile.json5文件中的ruleOptions字段下的enable进行开启混淆，详情请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-build-obfuscation",
        children: "代码混淆"
      }), "，配置如下所示："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"apiType\": \"stageMode\",\n  \"buildOption\": {\n    // ...\n  },\n  \"buildOptionSet\": [\n    {\n      \"name\": \"release\",\n      \"arkOptions\": {\n        \"obfuscation\": {\n          \"ruleOptions\": {\n            \"enable\": true,\n            \"files\": [\n              \"./obfuscation-rules.txt\"\n            ]\n          },\n          \"consumerFiles\": [\n            \"./consumer-rules.txt\"\n          ]\n        }\n      },\n      // ...\n    },\n  ],\n  \"targets\": [\n    {\n      \"name\": \"default\"\n    },\n    // ...\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "发布",
      children: "发布"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-creating-har-api9/ide-har-publish",
        children: "发布HAR"
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
106669(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
463289(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
29772(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
824573(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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