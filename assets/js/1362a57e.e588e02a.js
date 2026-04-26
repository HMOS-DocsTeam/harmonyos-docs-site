"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["945502"], {
913182(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_inter_app_redirection_directional_redirection_deep_linking_startup_deep_linking_startup_md_136_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-inter-app-redirection-directional-redirection-deep-linking-startup-deep-linking-startup-md-136.json
var site_docs_ability_kit_stage_model_development_inter_app_redirection_directional_redirection_deep_linking_startup_deep_linking_startup_md_136_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/inter-app-redirection/directional-redirection/deep-linking-startup/deep-linking-startup","title":"使用Deep Linking实现应用间跳转","description":"采用Deep Linking进行跳转时，系统会根据接口中传入的uri信息，在本地已安装的应用中寻找到符合条件的应用并进行拉起。当匹配到多个应用时，会拉起应用选择框。","source":"@site/docs/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/deep-linking-startup/deep-linking-startup.md","sourceDirName":"ability-kit/stage-model-development/inter-app-redirection/directional-redirection/deep-linking-startup","slug":"/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/deep-linking-startup/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/deep-linking-startup/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"使用Deep Linking实现应用间跳转","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/deep-linking-startup","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用App Linking实现应用间跳转","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-linking-startup/"},"next":{"title":"显式Want跳转切换应用链接跳转适配指导","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/uiability-startup-adjust/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/deep-linking-startup/deep-linking-startup.md


const frontMatter = {
	title: '使用Deep Linking实现应用间跳转',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/deep-linking-startup',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Deep Linking实现应用间跳转';

const assets = {

};



const toc = [{
  "value": "实现原理",
  "id": "实现原理",
  "level": 2
}, {
  "value": "目标应用操作指导",
  "id": "目标应用操作指导",
  "level": 2
}, {
  "value": "配置module.json5文件",
  "id": "配置modulejson5文件",
  "level": 3
}, {
  "value": "获取并解析拉起方传入的应用链接",
  "id": "获取并解析拉起方传入的应用链接",
  "level": 3
}, {
  "value": "拉起方应用实现应用跳转",
  "id": "拉起方应用实现应用跳转",
  "level": 2
}, {
  "value": "使用openLink实现应用跳转",
  "id": "使用openlink实现应用跳转",
  "level": 3
}, {
  "value": "使用startAbility实现应用跳转",
  "id": "使用startability实现应用跳转",
  "level": 3
}, {
  "value": "使用Web组件实现应用跳转",
  "id": "使用web组件实现应用跳转",
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
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用deep-linking实现应用间跳转",
        children: "使用Deep Linking实现应用间跳转"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "采用Deep Linking进行跳转时，系统会根据接口中传入的uri信息，在本地已安装的应用中寻找到符合条件的应用并进行拉起。当匹配到多个应用时，会拉起应用选择框。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Deep Linking基于隐式Want匹配机制中的uri匹配来查询、拉起目标应用。隐式Want的uri匹配规则详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/want/explicit-implicit-want-mappings#uri%E5%8C%B9%E9%85%8D%E8%A7%84%E5%88%99",
        children: "uri匹配规则"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "目标应用操作指导",
      children: "目标应用操作指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置modulejson5文件",
      children: "配置module.json5文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了能够支持被其他应用访问，目标应用需要在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json5配置文件"
      }), "中配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#skills%E6%A0%87%E7%AD%BE",
        children: "skills标签"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(515994)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "skills标签下默认包含一个skill对象，用于标识应用入口。应用跳转链接不能在该skill对象中配置，需要创建独立的skill对象。如果存在多个跳转场景，需要在skills标签下创建不同的skill对象，否则会导致配置无法生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deep Linking中的scheme可以自定义，但不能以\"ohos\"开头，也不建议使用\"https\"、\"http\"、\"file\"等系统已保留的scheme值，否则可能会拉起默认的系统应用而非目标应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    // ···\n    \"abilities\": [\n    // ···\n      {\n        // ···\n        \"skills\": [\n          {\n            \"entities\": [\n              \"entity.system.home\"\n            ],\n            \"actions\": [\n              \"ohos.want.action.home\"\n            ]\n          },\n          {\n            \"actions\": [\n              // actions不能为空，actions为空会造成目标方匹配失败。\n              \"ohos.want.action.viewData\"\n            ],\n            \"uris\": [\n              {\n                // scheme必选，可以自定义，以link为例，需要替换为实际的scheme\n                \"scheme\": \"link\",\n                \"host\": \"www.example.com\"\n              }\n            ]\n          } // 新增一个skill对象，用于跳转场景。如果存在多个跳转场景，需配置多个skill对象。\n        ]\n      },\n    // ···\n    ],\n    // ···\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取并解析拉起方传入的应用链接",
      children: "获取并解析拉起方传入的应用链接"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在目标应用的UIAbility的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#oncreate",
        children: "onCreate()"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onnewwant",
        children: "onNewWant()"
      }), "生命周期回调中，获取、解析拉起方传入的应用链接。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 以DeepAbility.ets为例\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { url } from '@kit.ArkTS';\n\nconst DOMAIN = 0x0000;\n\nexport default class DeepAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    // 从want中获取传入的链接信息。\n    // 如传入的url为：link://www.example.com/programs?action=showall\n    let uri = want?.uri;\n    if (uri) {\n      // 从链接中解析query参数，拿到参数后，开发者可根据自己的业务需求进行后续的处理。\n      let urlObject = url.URL.parseURL(want?.uri);\n      let action = urlObject.params.get('action');\n      // 例如，当action为showall时，展示所有的节目。\n      if (action === 'showall') {\n        // ···\n      }\n    }\n  }\n// ···\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "拉起方应用实现应用跳转",
      children: "拉起方应用实现应用跳转"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下面通过三个案例，分别介绍如何使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#openlink12",
        children: "openLink()"
      }), "与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startability",
        children: "startAbility()"
      }), "接口实现应用跳转，以及如何在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web/arkts-basic-components-web",
        children: "Web组件"
      }), "中实现应用跳转。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用openlink实现应用跳转",
      children: "使用openLink实现应用跳转"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#openlink12",
        children: "openLink"
      }), "接口的link字段中传入目标应用的URL信息，并将options字段中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-openlinkoptions/js-apis-app-ability-openlinkoptions#openlinkoptions",
        children: "appLinkingOnly"
      }), "配置为false。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common, OpenLinkOptions } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = '[UIAbilityComponentsOpenLink]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\n@Entry\n@Component\nstruct DeepOpenLinkIndex {\n  build() {\n    Button('start link', { type: ButtonType.Capsule, stateEffect: true })\n      .width('87%')\n      .height('5%')\n      .margin({ bottom: '12vp' })\n      .onClick(() => {\n        let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n        let link: string = 'link://www.example.com'; // 此处为实际应用链接\n        let openLinkOptions: OpenLinkOptions = {\n          appLinkingOnly: false\n        };\n\n        try {\n          context.openLink(link, openLinkOptions)\n            .then(() => {\n              hilog.info(DOMAIN_NUMBER, TAG, 'openLink success.');\n            }).catch((err: BusinessError) => {\n            hilog.error(DOMAIN_NUMBER, TAG, `openLink failed. Code is ${err.code}, message is ${err.message}`);\n          });\n        } catch (paramError) {\n          hilog.error(DOMAIN_NUMBER, TAG, `Failed to start link. Code is ${paramError.code}, message is ${paramError.message}`);\n        }\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用startability实现应用跳转",
      children: "使用startAbility实现应用跳转"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startability",
        children: "startAbility"
      }), "接口是将应用链接放入Want中，通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/want/explicit-implicit-want-mappings#%E9%9A%90%E5%BC%8Fwant%E5%8C%B9%E9%85%8D%E5%8E%9F%E7%90%86",
        children: "隐式Want匹配"
      }), "的方法触发应用跳转。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common, Want } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = '[UIAbilityComponentsOpenLink]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\n@Entry\n@Component\nstruct DeepStartIndex {\n  build() {\n    Button('start ability', { type: ButtonType.Capsule, stateEffect: true })\n      .width('87%')\n      .height('5%')\n      .margin({ bottom: '12vp' })\n      .onClick(() => {\n        let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n        let want: Want = {\n          uri: 'link://www.example.com' // 此处为实际应用链接\n        };\n\n        try {\n          context.startAbility(want).then(() => {\n            hilog.info(DOMAIN_NUMBER, TAG, 'startAbility success.');\n          }).catch((err: BusinessError) => {\n            hilog.error(DOMAIN_NUMBER, TAG, `startAbility failed. Code is ${err.code}, message is ${err.message}`);\n          });\n        } catch (paramError) {\n          hilog.error(DOMAIN_NUMBER, TAG, `Failed to start ability. Code is ${paramError.code}, message is ${paramError.message}`);\n        }\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用web组件实现应用跳转",
      children: "使用Web组件实现应用跳转"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web组件可以在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onloadintercept10",
        children: "onLoadIntercept"
      }), "的回调函数中实现应用跳转。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// DeepWebIndex.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN_NUMBER = 0xF811;\nconst TAG = '[Sample_PullLinking]';\n\n@Entry\n@Component\nstruct DeepWebIndex {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('index.html'), controller: this.controller })\n        .onLoadIntercept((event) => {\n          const url: string = event.data.getRequestUrl();\n          if (url === 'link://www.example.com') {\n            (this.getUIContext().getHostContext() as common.UIAbilityContext).openLink(url)\n              .then(() => {\n                hilog.info(DOMAIN_NUMBER, TAG, 'openLink success.');\n              }).catch((err: BusinessError) => {\n              hilog.error(DOMAIN_NUMBER, TAG, `openLink failed, err: ${JSON.stringify(err)}.`);\n            });\n            return true;\n          }\n          // 返回true表示阻止此次加载，否则允许此次加载\n          return false;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "前端页面代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.html -->\n<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n</head>\n<body>\n<h1>Hello World</h1>\n<!--方式一、通过绑定事件window.open方法实现跳转-->\n<button class=\"doOpenLink\" onclick=\"doOpenLink()\">跳转其他应用一</button>\n<!--方式二、通过超链接实现跳转-->\n<a href=\"link://www.example.com\">跳转其他应用二</a>\n</body>\n</html>\n<script>\n    function doOpenLink() {\n        window.open(\"link://www.example.com\")\n    }\n</script>\n"
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
515994(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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