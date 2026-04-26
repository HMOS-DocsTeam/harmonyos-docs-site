"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["354708"], {
827492(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_arkts_arkui_arkts_dep_js_apis_system_app_js_apis_system_app_md_3e0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-arkts-arkui-arkts-dep-js-apis-system-app-js-apis-system-app-md-3e0.json
var site_docs_ref_arkui_api_arkui_arkts_arkui_arkts_dep_js_apis_system_app_js_apis_system_app_md_3e0_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-system-app/js-apis-system-app","title":"@system.app (应用上下文)","description":"本模块首批接口从API version 3开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。","source":"@site/docs-ref/arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-system-app/js-apis-system-app.md","sourceDirName":"arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-system-app","slug":"/arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-system-app/js-apis-system-app","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-system-app/js-apis-system-app","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"@system.app (应用上下文)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-system-app","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-system-app"},"sidebar":"ref","previous":{"title":"@ohos.prompt (弹窗)","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-prompt/js-apis-prompt"},"next":{"title":"@system.configuration (应用配置)","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-system-configuration/js-apis-system-configuration"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-system-app/js-apis-system-app.md


const frontMatter = {
	title: '@system.app (应用上下文)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-system-app',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-system-app'
};
const contentTitle = '@system.app (应用上下文)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "App",
  "id": "app",
  "level": 2
}, {
  "value": "getInfo",
  "id": "getinfo",
  "level": 3
}, {
  "value": "terminate",
  "id": "terminate",
  "level": 3
}, {
  "value": "setImageCacheCount7+",
  "id": "setimagecachecount7",
  "level": 3
}, {
  "value": "setImageRawDataCacheSize7+",
  "id": "setimagerawdatacachesize7",
  "level": 3
}, {
  "value": "setImageFileCacheSize7+",
  "id": "setimagefilecachesize7",
  "level": 3
}, {
  "value": "ScreenOnVisible(deprecated)",
  "id": "screenonvisibledeprecated",
  "level": 3
}, {
  "value": "requestFullWindow(deprecated)",
  "id": "requestfullwindowdeprecated",
  "level": 3
}, {
  "value": "AppResponse",
  "id": "appresponse",
  "level": 2
}, {
  "value": "ScreenOnVisibleOptions",
  "id": "screenonvisibleoptions",
  "level": 2
}, {
  "value": "RequestFullWindowOptions",
  "id": "requestfullwindowoptions",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "systemapp-应用上下文",
        children: "@system.app (应用上下文)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(823309)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 3开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import app, { AppResponse } from '@system.app';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "app",
      children: "App"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getinfo",
      children: "getInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static getInfo(): AppResponse"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前应用配置文件中声明的信息。在Stage模型下接口返回值为null。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version9开始，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#bundlemanagergetbundleinfoforself",
        children: "bundleManager.getBundleInfoForSelf"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Lite"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#appresponse",
              children: "AppResponse"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义AppResponse信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import app, { AppResponse } from '@system.app';\nexport default class Info {\n  getInfo() {\n    let info:AppResponse = app.getInfo();\n    console.info(JSON.stringify(info));\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JS示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n    <text class=\"title\" style=\"font-size: {{fontSize}}; color: {{fontColor}};\">\n        app.getInfo example\n    </text>\n    <div class=\"info-item\">\n        <text class=\"label\">appName:</text>\n        <text class=\"value\">{{appName}}</text>\n    </div>\n    <div class=\"info-item\">\n        <text class=\"label\">versionName:</text>\n        <text class=\"value\">{{versionName}}</text>\n    </div>\n    <div class=\"info-item\">\n        <text class=\"label\">versionCode:</text>\n        <text class=\"value\">{{versionCode}}</text>\n    </div>\n    <input type=\"button\" value=\"getAppInfo\" style=\"width: 240px; height: 50px; margin: 5px;\" onclick=\"getAppInfo\"></input>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    left: 0px;\n    top: 0px;\n    width: 454px;\n    height: 454px;\n    background-color: #000000;\n}\n.title {\n    font-size: 32px;\n    text-align: center;\n    width: 400px;\n    height: 80px;\n    margin-top: 20px;\n    color: #ffffff;\n}\n.info-item {\n    width: 400px;\n    height: 60px;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 10px;\n    padding-left: 20px;\n    padding-right: 20px;\n    background-color: #1a1a1a;\n    border-radius: 10px;\n}\n.label {\n    font-size: 24px;\n    color: #aaaaaa;\n}\n.value {\n    font-size: 24px;\n    color: #ffffff;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nimport app from '@system.app';\n\nexport default {\n    data: {\n        fontSize: '32px',\n        fontColor: '#ffffff',\n        appName: '',\n        versionName: '',\n        versionCode: ''\n    },\n    onInit() {\n        this.getAppInfo();\n    },\n    getAppInfo() {\n        try {\n            const info = app.getInfo();\n            console.info('app.getInfo success');\n            console.info('appName: ' + info.appName);\n            console.info('versionName: ' + info.versionName);\n            console.info('versionCode: ' + info.versionCode);\n            this.appName = info.appName || 'Unknown';\n            this.versionName = info.versionName || 'Unknown';\n            this.versionCode = String(info.versionCode) || 'Unknown';\n        } catch (error) {\n            console.error('app.getInfo failed: ' + error.message);\n            this.appName = 'Failed';\n            this.versionName = 'Failed';\n            this.versionCode = 'Failed';\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "terminate",
      children: "terminate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static terminate(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "退出当前Ability。在Stage模型下接口功能不生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 7开始，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/fa-model/js-apis-ability-featureability/js-apis-ability-featureability",
        children: "@ohos.ability.featureAbility"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Lite"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import app, { AppResponse } from '@system.app';\nexport default class TerM {\n  terminate() {\n    app.terminate();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JS示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n    <text class=\"title\" style=\"font-size: {{fontSize}}; color: {{fontColor}};\">\n        app.terminate example\n    </text>\n    <text class=\"desc\">\n        Click the button below to exit the app\n    </text>\n    <input type=\"button\" value=\"exit app\" style=\"width: 240px; height: 50px; margin: 5px;\" onclick=\"terminateApp\"></input>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    left: 0px;\n    top: 0px;\n    width: 454px;\n    height: 454px;\n    background-color: #000000;\n}\n.title {\n    font-size: 32px;\n    text-align: center;\n    width: 400px;\n    height: 80px;\n    margin-top: 60px;\n    color: #ffffff;\n}\n.desc {\n    font-size: 24px;\n    text-align: center;\n    width: 290px;\n    height: 120px;\n    margin-top: 20px;\n    color: #aaaaaa;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nimport app from '@system.app';\n\nexport default {\n    data: {\n        fontSize: '32px',\n        fontColor: '#ffffff'\n    },\n    terminateApp() {\n        console.info('Calling app.terminate...');\n        try {\n            app.terminate();\n            console.info('app.terminate called');\n        } catch (error) {\n            console.error('app.terminate failed: ' + error.message);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setimagecachecount7",
      children: "setImageCacheCount7+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static setImageCacheCount(value: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置内存中缓存解码后图片的数量上限，提升再次加载同源图片的加载速度。如果不设置则默认为0，不进行缓存。缓存采用内置的LRU策略，新图片加载后，如果超过缓存上限，会删除最久未再次加载的缓存。建议根据应用内存需求，设置合理缓存数量，数字过大可能导致内存使用过高。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["setImageCacheCount方法需要在@Entry标记的页面，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#onpageshow",
        children: "onPageShow"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttoappear",
        children: "aboutToAppear"
      }), "里面设置才生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["setImageCacheCount、setImageRawDataCacheSize、和setImageFileCacheSize并不灵活，后续不继续演进，对于复杂情况，更推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony-tpc/ImageKnife",
        children: "ImageKnife"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内存中解码后图片的缓存数量。number取值需大于0。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport app, { AppResponse } from '@system.app';\n\n@Entry\n@Component\nstruct Index {\n  onPageShow() {\n    // 设置解码后图片内存缓存上限为100张\n    app.setImageCacheCount(100);\n    console.info('Application onPageShow');\n  }\n  onDestroy() {\n    console.info('Application onDestroy');\n  }\n\n  build() {\n    Row(){\n      // xxxxxxxxxxxxx为图片地址\n      Image('xxxxxxxxxxxxx')\n        .width(200)\n        .height(50)\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setimagerawdatacachesize7",
      children: "setImageRawDataCacheSize7+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static setImageRawDataCacheSize(value: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置内存中缓存解码前图片数据的大小上限，单位为字节，提升再次加载同源图片的加载速度。如果不设置则默认为0，不进行缓存。缓存采用内置的LRU策略，新图片加载后，如果解码前数据超过缓存上限，会删除最久未再次加载的图片数据缓存。建议根据应用内存需求，设置合理缓存上限，过大可能导致应用内存使用过高。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["setImageRawDataCacheSize方法需要在@Entry标记的页面，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#onpageshow",
        children: "onPageShow"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttoappear",
        children: "aboutToAppear"
      }), "里面设置才生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内存中解码前图片数据的缓存大小，单位为字节。number取值需大于0。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport app, { AppResponse } from '@system.app';\n\n@Entry\n@Component\nstruct Index {\n  onPageShow() {\n    // 设置解码前图片数据内存缓存上限为100MB (100MB=100*1024*1024B=104857600B)\n    app.setImageRawDataCacheSize(104857600);\n    console.info('Application onPageShow');\n  }\n  onDestroy() {\n    console.info('Application onDestroy');\n  }\n\n  build() {\n    Row(){\n      // xxxxxxxxxxxxx为图片地址\n      Image('xxxxxxxxxxxxx')\n        .width(200)\n        .height(50)\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setimagefilecachesize7",
      children: "setImageFileCacheSize7+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static setImageFileCacheSize(value: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置图片文件缓存的大小上限，单位为字节，提升再次加载同源图片的加载速度，特别是对网络图源会有较明显提升。如果不设置则默认为100MB。缓存采用内置的LRU策略，新图片加载后，如果超过文件缓存上限，会按照时间由远到近删除缓存图片文件直到缓存图片大小满足缓存上限。建议根据应用实际需求，设置合理文件缓存上限，数字过大可能导致磁盘空间占用过高。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片文件的缓存大小，单位为字节。number取值需大于0。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// app.ets\nimport app, { AppResponse } from '@system.app';\n\nexport default class OnC {\n  onCreate() {\n    app.setImageFileCacheSize(209715200);\n    // 设置图片文件数据缓存上限为200MB (200MB=200*1024*1024B=209715200B)\n    console.info('Application onCreate');\n  }\n  onDestroy() {\n    console.info('Application onDestroy');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "screenonvisibledeprecated",
      children: "ScreenOnVisible(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static screenOnVisible(options?: ScreenOnVisibleOptions): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义屏幕唤醒时是否保持应用可见。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口从API version 8 开始废弃。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " 以下各项对应的系统能力均为SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#screenonvisibleoptions",
              children: "ScreenOnVisibleOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当启动保活时，锁屏时将阻止系统返回桌面显示，以保持屏幕唤醒时应用可见。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requestfullwindowdeprecated",
      children: "requestFullWindow(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static requestFullWindow(options?: RequestFullWindowOptions): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求应用以全窗口运行，FA在某些场景下（如半模态FA）会以非全窗口运行，调用该接口会从非全窗口切换为全窗口运行，如果已经以全窗口运行则该接口调用无效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 7开始，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window/arkts-apis-window",
        children: "@ohos.window (窗口)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#requestfullwindowoptions",
              children: "RequestFullWindowOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求全屏时，设定非全屏到全屏的过渡时间，单位为毫秒，默认时间与非全屏到全屏的距离成正比。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import app, { AppResponse } from '@system.app';\nexport default class Req {\n  requestFullWindow() {\n    app.requestFullWindow({\n      duration: 200\n    });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appresponse",
      children: "AppResponse"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义AppResponse信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " 以下各项对应的系统能力有所不同，详见下表。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appID6+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示应用的包名，用于标识应用的唯一性。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.ArkUI.ArkUI.Full"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示应用的名称。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.ArkUI.ArkUI.Lite"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "versionName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示应用的版本名称。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.ArkUI.ArkUI.Lite"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "versionCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示应用的版本号。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.ArkUI.ArkUI.Lite"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "screenonvisibleoptions",
      children: "ScreenOnVisibleOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义屏幕上可见接口的选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " 以下各项对应的系统能力均为SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "visible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否启动保活，默认值false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "success"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接口调用成功的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(data: string, code: number) => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接口调用失败的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接口调用结束的回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "requestfullwindowoptions",
      children: "RequestFullWindowOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义RequestFullWindow接口的选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " 以下各项对应的系统能力均为SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义动画选项的持续时间，单位为毫秒。"
          })]
        })
      })]
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
823309(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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