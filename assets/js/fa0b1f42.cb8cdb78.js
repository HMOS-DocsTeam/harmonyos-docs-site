"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["888918"], {
514526(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_vision_kit_guide_vision_interactiveliveness_vision_interactiveliveness_md_fa0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-vision-kit-guide-vision-interactiveliveness-vision-interactiveliveness-md-fa0.json
var site_docs_vision_kit_guide_vision_interactiveliveness_vision_interactiveliveness_md_fa0_namespaceObject = JSON.parse('{"id":"vision-kit-guide/vision-interactiveliveness/vision-interactiveliveness","title":"人脸活体检测","description":"场景介绍","source":"@site/docs/vision-kit-guide/vision-interactiveliveness/vision-interactiveliveness.md","sourceDirName":"vision-kit-guide/vision-interactiveliveness","slug":"/vision-kit-guide/vision-interactiveliveness/","permalink":"/harmonyos-docs-site/vision-kit-guide/vision-interactiveliveness/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"人脸活体检测","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/vision-interactiveliveness","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Vision Kit简介","permalink":"/harmonyos-docs-site/vision-kit-guide/vision-introduction/"},"next":{"title":"卡证识别","permalink":"/harmonyos-docs-site/vision-kit-guide/vision-cardrecognition/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/vision-kit-guide/vision-interactiveliveness/vision-interactiveliveness.md


const frontMatter = {
	title: '人脸活体检测',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/vision-interactiveliveness',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '人脸活体检测';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "开发实例",
  "id": "开发实例",
  "level": 2
}, {
  "value": "Index.ets",
  "id": "indexets",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "人脸活体检测",
        children: "人脸活体检测"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "人脸活体检测支持动作活体检测模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动作活体检测支持实时捕捉人脸，需要用户配合做指定动作就可以判断是真实活体，还是非活体攻击（比如：打印图片、人脸翻拍视频以及人脸面具等）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(88471)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "活体检测是一项纯端侧算法、试用期免费的系统基础服务，推荐开发者使用在考勤打卡、辅助登录和实名认证等低危业务场景中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "端侧算法在HarmonyOS NEXT/5.0.x已完成权威机构（CFCA）检测认证。鉴于支付和金融应用的高风险性，建议开发者基于现有的安全性，针对不同的功能场景进行风险评估和风控策略评估，并采取必要的安全措施。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 权威认证", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "增强级"
        })
      }), "检测报告"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(881449)/* ["default"] */.A) + "",
        width: "525",
        height: "667"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 活体检测示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(55849)/* ["default"] */.A) + "",
        width: "264",
        height: "548"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "平板仅支持竖屏检测，大折叠屏仅支持折叠时使用，小折叠屏仅支持展开时使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持的文本语种类型：简体中文、繁体中文、英文、维吾尔文、藏文。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持的播报语种类型：简体中文、英文。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "人脸活体检测服务暂不支持横屏、分屏进行检测。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下仅列出demo中调用的部分主要接口，具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/vision-api/vision-arkts/vision-interactive-liveness/vision-interactive-liveness",
        children: "API参考"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vision-api/vision-arkts/vision-interactive-liveness/vision-interactive-liveness#startlivenessdetection",
              children: "startLivenessDetection"
            }), "(config: InteractiveLivenessConfig): Promise<boolean>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跳转到人脸活体检测页面的入口"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vision-api/vision-arkts/vision-interactive-liveness/vision-interactive-liveness#getinteractivelivenessresult",
              children: "getInteractiveLivenessResult"
            }), "(): Promise<InteractiveLivenessResult>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取人脸活体检测的结果。使用Promise异步回调"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将实现人脸活体检测相关的类添加至工程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common, abilityAccessCtrl, Permissions } from '@kit.AbilityKit';\nimport { interactiveLiveness } from '@kit.VisionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在module.json5文件中添加CAMERA权限，其中reason，abilities标签必填，配置方式参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions#%E5%9C%A8%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%B8%AD%E5%A3%B0%E6%98%8E%E6%9D%83%E9%99%90",
            children: "requestPermissions标签说明"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"requestPermissions\":[\n  {\n    \"name\": \"ohos.permission.CAMERA\",\n    \"reason\": \"$string:camera_desc\",\n    \"usedScene\": {\"abilities\": []}\n  }\n]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "简单配置页面的布局，选择人脸活体检测验证完后的跳转模式。如果使用back跳转模式，表示人脸活体检测完成后返回到上一页。如果使用replace跳转模式，表示人脸活体检测完跳转到成功或失败页面。默认选择的是replace跳转模式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Flex({ direction: FlexDirection.Row, justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center }) {\n  Text(\"验证完的跳转模式：\")\n    .fontSize(18)\n    .width(\"25%\")\n  Flex({ direction: FlexDirection.Row, justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center }) {\n    Row() {\n      Radio({ value: \"replace\", group: \"routeMode\" }).checked(true)\n        .height(24)\n        .width(24)\n        .onChange((isChecked: boolean) => {\n          this.routeMode = \"replace\"\n        })\n      Text(\"replace\")\n        .fontSize(16)\n    }\n    .margin({ right: 15 })\n\n    Row() {\n      Radio({ value: \"back\", group: \"routeMode\" }).checked(false)\n        .height(24)\n        .width(24)\n        .onChange((isChecked: boolean) => {\n          this.routeMode = \"back\";\n        })\n      Text(\"back\")\n        .fontSize(16)\n    }\n  }\n  .width(\"75%\")\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果选择动作活体模式，可填写验证的动作个数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Flex({ direction: FlexDirection.Row, justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center }) {\n  Text(\"动作数量：\")\n    .fontSize(18)\n    .width(\"25%\")\n  TextInput({\n    placeholder: this.actionsNum != 0 ? this.actionsNum.toString() : \"动作数量为3或4个\"\n  })\n    .type(InputType.Number)\n    .placeholderFont({\n      size: 18,\n      weight: FontWeight.Normal,\n      family: \"HarmonyHeiTi\",\n      style: FontStyle.Normal\n    })\n    .fontSize(18)\n    .fontWeight(FontWeight.Bold)\n    .fontFamily(\"HarmonyHeiTi\")\n    .fontStyle(FontStyle.Normal)\n    .width(\"65%\")\n    .onChange((value: string) => {\n      this.actionsNum = Number(value) as interactiveLiveness.ActionsNumber;\n    })\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击“开始检测“按钮，触发点击事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Button(\"开始检测\", { type: ButtonType.Normal, stateEffect: true })\n  .width(192)\n  .height(40)\n  .fontSize(16)\n  .backgroundColor(0x317aff)\n  .borderRadius(20)\n  .margin({\n    bottom: 56\n  })\n  .onClick(() => {\n    this.startDetection();\n  })\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "触发CAMERA权限校验。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "private context: common.UIAbilityContext = this.getUIContext()?.getHostContext() as common.UIAbilityContext;\nprivate array: Array<Permissions> = [\"ohos.permission.CAMERA\"];\n// 校验CAMERA权限\nprivate startDetection() {\n  abilityAccessCtrl.createAtManager().requestPermissionsFromUser(this.context, this.array).then((res) => {\n    for (let i = 0; i < res.permissions.length; i++) {\n      if (res.permissions[i] === \"ohos.permission.CAMERA\" && res.authResults[i] === 0) {\n        this.routerLibrary();\n      }\n    }\n  }).catch((err: BusinessError) => {\n    hilog.error(0x0001, \"LivenessCollectionIndex\", `Failed to request permissions from user. Code is ${err.code}, message is ${err.message}`);\n  })\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["配置人脸活体检测控件的配置项", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/vision-api/vision-arkts/vision-interactive-liveness/vision-interactive-liveness#interactivelivenessconfig",
            children: "InteractiveLivenessConfig"
          }), "，用于跳转到人脸活体检测控件。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["配置中具体的参数可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/vision-api/vision-arkts/vision-interactive-liveness/vision-interactive-liveness",
            children: "API文档"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let routerOptions: interactiveLiveness.InteractiveLivenessConfig = {\n  isSilentMode: this.isSilentMode as interactiveLiveness.DetectionMode,\n  routeMode: this.routeMode as interactiveLiveness.RouteRedirectionMode,\n  actionsNum: this.actionsNum\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用interactiveLiveness的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/vision-api/vision-arkts/vision-interactive-liveness/vision-interactive-liveness#startlivenessdetection",
            children: "startLivenessDetection"
          }), "接口，判断跳转到人脸活体检测控件是否成功。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 跳转到人脸活体检测控件\nprivate routerLibrary() {\n  if (canIUse(\"SystemCapability.AI.Component.LivenessDetect\")) {\n    interactiveLiveness.startLivenessDetection(routerOptions).then((isSuccess) => {\n      if (isSuccess) {\n         hilog.info(0x0001, \"LivenessCollectionIndex\", `Succeeded in jumping.`);\n       } else {\n         hilog.info(0x0001, \"LivenessCollectionIndex\", `Redirection failed.`);\n       }\n    }).catch((err: BusinessError) => {\n      hilog.error(0x0001, \"LivenessCollectionIndex\", `Failed to jump. Code: ${err.code}, message: ${err.message}`);\n    })\n  } else {\n    hilog.error(0x0001, \"LivenessCollectionIndex\", 'this api is not supported on this device');\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["检测结束后回到当前界面，可调用interactiveLiveness的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/vision-api/vision-arkts/vision-interactive-liveness/vision-interactive-liveness#getinteractivelivenessresult",
            children: "getInteractiveLivenessResult"
          }), "接口，验证人脸活体检测的结果。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取验证结果\nprivate getDetectionResultInfo() {\n  // getInteractiveLivenessResult接口调用完会释放资源\n  if (canIUse(\"SystemCapability.AI.Component.LivenessDetect\")) {\n    let resultInfo = interactiveLiveness.getInteractiveLivenessResult();\n    resultInfo.then(data => {\n      this.resultInfo = data;\n    }).catch((err: BusinessError) => {\n      this.failResult = {\n        \"code\": err.code,\n        \"message\": err.message\n      }\n    })\n  } else {\n    hilog.error(0x0001, \"LivenessCollectionIndex\", 'this api is not supported on this device');\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发实例",
      children: "开发实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "indexets",
      children: "Index.ets"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common, abilityAccessCtrl, Permissions } from '@kit.AbilityKit';\nimport { interactiveLiveness } from '@kit.VisionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct LivenessCollectionIndex{\n  private context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  private array: Array<Permissions> = [\"ohos.permission.CAMERA\"];\n  @State actionsNum: number = 0;\n  @State isSilentMode: string = \"INTERACTIVE_MODE\";\n  @State routeMode: string = \"replace\";\n  @State resultInfo: interactiveLiveness.InteractiveLivenessResult = {\n    livenessType: 0\n  };\n  @State failResult: Record<string, number | string> = {\n    \"code\": 1008302000,\n    \"message\": \"\"\n  };\n\n  build() {\n    Stack({\n      alignContent: Alignment.Top\n    }) {\n      Column() {\n        Row() {\n          Flex({ direction: FlexDirection.Row, justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center }) {\n            Text(\"验证完的跳转模式：\")\n              .fontSize(18)\n              .width(\"25%\")\n            Flex({ direction: FlexDirection.Row, justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center }) {\n              Row() {\n                Radio({ value: \"replace\", group: \"routeMode\" }).checked(true)\n                  .height(24)\n                  .width(24)\n                  .onChange(() => {\n                    this.routeMode = \"replace\"\n                  })\n                Text(\"replace\")\n                  .fontSize(16)\n              }\n              .margin({ right: 15 })\n\n              Row() {\n                Radio({ value: \"back\", group: \"routeMode\" }).checked(false)\n                  .height(24)\n                  .width(24)\n                  .onChange(() => {\n                    this.routeMode = \"back\";\n                  })\n                Text(\"back\")\n                  .fontSize(16)\n              }\n            }\n            .width(\"75%\")\n          }\n        }\n        .margin({ bottom: 30 })\n\n          Row() {\n            Flex({ direction: FlexDirection.Row, justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center }) {\n              Text(\"动作数量：\")\n                .fontSize(18)\n                .width(\"25%\")\n              TextInput({\n                placeholder: this.actionsNum != 0 ? this.actionsNum.toString() : \"动作数量为3或4个\"\n              })\n                .type(InputType.Number)\n                .placeholderFont({\n                  size: 18,\n                  weight: FontWeight.Normal,\n                  family: \"HarmonyHeiTi\",\n                  style: FontStyle.Normal\n                })\n                .fontSize(18)\n                .fontWeight(FontWeight.Bold)\n                .fontFamily(\"HarmonyHeiTi\")\n                .fontStyle(FontStyle.Normal)\n                .width(\"65%\")\n                .onChange((value: string) => {\n                  this.actionsNum = Number(value) as interactiveLiveness.ActionsNumber;\n                })\n            }\n          }\n      }\n      .margin({ left: 24, top: 80 })\n      .zIndex(1)\n\n      Stack({\n        alignContent: Alignment.Bottom\n      }) {\n        if (this.resultInfo?.mPixelMap) {\n          Image(this.resultInfo?.mPixelMap)\n            .width(260)\n            .height(260)\n            .align(Alignment.Center)\n            .margin({ bottom: 260 })\n          Circle()\n            .width(300)\n            .height(300)\n            .fillOpacity(0)\n            .strokeWidth(60)\n            .stroke(Color.White)\n            .margin({ bottom: 250, left: 0 })\n        }\n\n        Text(this.resultInfo.mPixelMap ?\n          \"检测成功\" :\n          this.failResult.code != 1008302000 ?\n            \"检测失败\" :\n            \"\")\n          .width(\"100%\")\n          .height(26)\n          .fontSize(20)\n          .fontColor(\"#000000\")\n          .fontFamily(\"HarmonyHeiTi\")\n          .margin({ top: 50 })\n          .textAlign(TextAlign.Center)\n          .fontWeight(\"Medium\")\n          .margin({ bottom: 240 })\n\n        if(this.failResult.code != 1008302000) {\n          Text(this.failResult.message as string)\n            .width(\"100%\")\n            .height(26)\n            .fontSize(16)\n            .fontColor(Color.Gray)\n            .textAlign(TextAlign.Center)\n            .fontFamily(\"HarmonyHeiTi\")\n            .fontWeight(\"Medium\")\n            .margin({ bottom: 200 })\n        }\n\n        Button(\"开始检测\", { type: ButtonType.Normal, stateEffect: true })\n          .width(192)\n          .height(40)\n          .fontSize(16)\n          .backgroundColor(0x317aff)\n          .borderRadius(20)\n          .margin({\n            bottom: 56\n          })\n          .onClick(() => {\n            this.startDetection();\n          })\n      }\n      .height(\"100%\")\n    }\n  }\n\n  onPageShow() {\n    this.resultRelease();\n    this.getDetectionResultInfo();\n  }\n\n  // 跳转到人脸活体检测控件\n  private routerLibrary() {\n    let routerOptions: interactiveLiveness.InteractiveLivenessConfig = {\n      isSilentMode: this.isSilentMode as interactiveLiveness.DetectionMode,\n      routeMode: this.routeMode as interactiveLiveness.RouteRedirectionMode,\n      actionsNum: this.actionsNum\n    }\n\n    if (canIUse(\"SystemCapability.AI.Component.LivenessDetect\")) {\n      interactiveLiveness.startLivenessDetection(routerOptions).then((isSuccess) => {\n        if (isSuccess) {\n            hilog.info(0x0001, \"LivenessCollectionIndex\", `Succeeded in jumping.`);\n          } else {\n            hilog.info(0x0001, \"LivenessCollectionIndex\", `Redirection failed.`);\n          }\n      }).catch((err: BusinessError) => {\n        hilog.error(0x0001, \"LivenessCollectionIndex\", `Failed to jump. Code: ${err.code}, message: ${err.message}`);\n      })\n    } else {\n      hilog.error(0x0001, \"LivenessCollectionIndex\", 'this api is not supported on this device');\n    }\n  }\n\n  // 校验CAMERA权限\n  private startDetection() {\n    abilityAccessCtrl.createAtManager().requestPermissionsFromUser(this.context, this.array).then((res) => {\n      for (let i = 0; i < res.permissions.length; i++) {\n        if (res.permissions[i] === \"ohos.permission.CAMERA\" && res.authResults[i] === 0) {\n        this.routerLibrary();\n      }\n     }\n    }).catch((err: BusinessError) => {\n      hilog.error(0x0001, \"LivenessCollectionIndex\", `Failed to request permissions from user. Code is ${err.code}, message is ${err.message}`);\n    })\n  }\n\n  // 获取验证结果\n  private getDetectionResultInfo() {\n    // getInteractiveLivenessResult接口调用完会释放资源\n    if (canIUse(\"SystemCapability.AI.Component.LivenessDetect\")) {\n      interactiveLiveness.getInteractiveLivenessResult().then(data => {\n        this.resultInfo = data;\n      }).catch((err: BusinessError) => {\n        this.failResult = {\n          \"code\": err.code,\n          \"message\": err.message\n        }\n      })\n    } else {\n      hilog.error(0x0001, \"LivenessCollectionIndex\", 'this api is not supported on this device');\n    }\n  }\n\n  // result release\n  private resultRelease() {\n    this.resultInfo = {\n      livenessType: 0\n    }\n    this.failResult = {\n      \"code\": 1008302000,\n      \"message\": \"\"\n    }\n  }\n}\n"
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
881449(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959352-282b1b18cda5bf5c3f4b6c60573fda11.png");

},
55849(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479353-a558ad551f4f51490614b6d587bd66c7.png");

},
88471(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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