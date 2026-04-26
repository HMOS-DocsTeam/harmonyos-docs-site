"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["472461"], {
302749(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_security_kit_guide_devicesecurity_dlpantipeep_devicesecurity_dlpantipeep_md_ff3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-security-kit-guide-devicesecurity-dlpantipeep-devicesecurity-dlpantipeep-md-ff3.json
var site_docs_system_security_device_security_kit_guide_devicesecurity_dlpantipeep_devicesecurity_dlpantipeep_md_ff3_namespaceObject = JSON.parse('{"id":"system-security/device-security-kit-guide/devicesecurity-dlpantipeep/devicesecurity-dlpantipeep","title":"防窥保护","description":"场景介绍","source":"@site/docs/system-security/device-security-kit-guide/devicesecurity-dlpantipeep/devicesecurity-dlpantipeep.md","sourceDirName":"system-security/device-security-kit-guide/devicesecurity-dlpantipeep","slug":"/system-security/device-security-kit-guide/devicesecurity-dlpantipeep/","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-dlpantipeep/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"防窥保护","sidebar_position":12,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-dlpantipeep","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"获取诈骗应用","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-antifraudpicker/devicesecurity-selectfraudapp/"},"next":{"title":"病毒防护服务管理(C/C++)","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-vps-c/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-security-kit-guide/devicesecurity-dlpantipeep/devicesecurity-dlpantipeep.md


const frontMatter = {
	title: '防窥保护',
	sidebar_position: 12,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-dlpantipeep',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '防窥保护';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "开发前置条件",
  "id": "开发前置条件",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
        id: "防窥保护",
        children: "防窥保护"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持应用根据屏幕窥视状态保护机主隐私，如拉起系统级蒙层遮盖窗口，非机主状态下不进行个性化推荐，隐藏浏览记录、支付记录、收藏记录等敏感信息。其中系统使用智能判断将长期通过人脸解锁手机的人作为防窥保护的机主。若防窥保护开关未打开，可以拉起设置弹窗或提醒用户进入设置页开启。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发前置条件",
      children: "开发前置条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要在设备开启人脸识别。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在设备上选择“设置 > 隐私与安全 > 防窥保护”，开启防窥保护开关。通过人脸验证后，打开需要加入保护的应用开关。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "满足以下所有条件："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本特性需要设备上存在防窥保护选项。开发者可通过在设备上选择“设置 > 隐私与安全 > 防窥保护”查看防窥保护选项。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS系统：HarmonyOS 6.0.0 Beta1及以上。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DevEco Studio版本：DevEco Studio 6.0.0 Beta1及以上。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS SDK版本: HarmonyOS 6.0.0 Beta1 SDK及以上。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "防窥保护功能使用智能判断，通过传感器判断您周边环境给您风险提醒。判断因素包括人脸距离设备是否在一定的范围内、人脸是否有遮挡、周围环境是否有充足的光线。当距离较近或较远、人脸被遮挡、周围环境较暗时，可能会引起识别误差，从而导致系统未提醒或者误提醒。如果您认为智能判断可能有误，您可以尝试调整位置和光线，重新使用人脸解锁手机等操作，并再次使用该功能帮助您防窥。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(394215)/* ["default"] */.A) + "",
        width: "955",
        height: "1251"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "流程说明："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户在“设置 > 隐私与安全 > 防窥保护”中开启当前应用的功能开关，或应用提供设置入口，用户点击后通过调用requestAntiPeepOptions(context: Context)接口拉起设置弹窗进行设置。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用isDlpAntiPeepSwitchOn()接口查询当前应用开关的状态。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用on()接口注册防窥保护通知：3.1 机主自身注视屏幕时反馈非窥视状态；3.2 机主与非机主同时注视屏幕时反馈被窥视状态。3.3 没有机主使用手机或机主分享场景，返回非窥视状态。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "手动调用getDlpAntiPeepInfo()接口返回当前应用的窥视状态。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用setAntiPeepMaskLayer(windowId: number)接口，拉起系统级蒙层。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用passDlpAntiPeepInfo()接口修改窥视状态，直到手机锁屏或应用退出前一直会返回非窥视状态。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用off()接口解除注册防窥保护通知。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是获取防窥状态信息相关接口，更多接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-dlpantipeep-api/devicesecurity-dlpantipeep-api",
        children: "API参考"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isDlpAntiPeepSwitchOn(): Promise<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查是否打开防窥保护。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'dlpAntiPeep', callback: Callback<DlpAntiPeepStatus>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅防窥保护状态通知。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'dlpAntiPeep', callback?: Callback<DlpAntiPeepStatus>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解除订阅防窥保护状态通知。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getDlpAntiPeepInfo(): DlpAntiPeepStatus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前应用的窥视状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "passDlpAntiPeepInfo(): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直到手机锁屏或应用退出前一直会返回非窥视状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setAntiPeepMaskLayer(windowId: number): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉起系统级窗口蒙层遮盖。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requestAntiPeepOptions(context: Context): Promise<AntiPeepOptionsResult>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉起设置弹框请求用户打开防窥保护开关。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "publishAntiPeepInformation(): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发布防窥保护提示信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(632513)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在开发准备过程中，需要申请权限：ohos.permission.DLP_GET_HIDE_STATUS；用于获取当前应用使用过程中被非机主本人窥视屏幕相关状态信息。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["面向合作企业开放，仅在允许名单内的固定应用可申请该权限，申请方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
          children: "申请使用受限权限"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者需向用户说明数据使用的目的、方式和范围。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入防窥保护模块及相关公共模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { dlpAntiPeep } from '@kit.DeviceSecurityKit';\nimport { window } from '@kit.ArkUI';\nimport { common } from '@kit.AbilityKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用检查接口确认当前应用是否开启防窥保护，开启防窥保护时调用防窥保护订阅接口获取窥视状态信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n  @State message: string = 'DlpAntiPeep';\n  private hasShownMask: boolean = false;\n\n  // 防窥状态变化回调\n  private onStatusChange = async (status: dlpAntiPeep.DlpAntiPeepStatus): Promise<void> => {\n    if (status === dlpAntiPeep.DlpAntiPeepStatus.PASS) { // 表示当前状态为无人窥视\n      console.info('DlpAntiPeepStatus is PASS.');\n    } else if (status === dlpAntiPeep.DlpAntiPeepStatus.HIDE) { // 表示有人在窥屏，应用可以进行隐私保护操作。\n      console.info('DlpAntiPeepStatus is HIDE.');\n      if (!this.hasShownMask) {\n        await this.setMaskLayer(); // 拉起系统蒙层\n      }\n    }\n  }\n\n  // 检查防窥保护开关并订阅通知\n  async aboutToAppear() {\n    try {\n      const isOpen = await dlpAntiPeep.isDlpAntiPeepSwitchOn();\n      if (isOpen) {\n        dlpAntiPeep.on('dlpAntiPeep', this.onStatusChange);\n      } else {\n        // 开关未开启，引导用户设置\n        const context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n        const result = await dlpAntiPeep.requestAntiPeepOptions(context);\n        if (result === dlpAntiPeep.AntiPeepOptionsResult.SUCCESS ||\n            result === dlpAntiPeep.AntiPeepOptionsResult.ALREADY_ON) { // 表示防窥保护开关开启成功或已开启\n          dlpAntiPeep.on('dlpAntiPeep', this.onStatusChange);\n        }\n      }\n    } catch (error) {\n      console.error(`Failed to init DlpAntiPeep. Code: ${error.code}, message: ${error.message}`);\n    }\n  }\n\n  // 取消订阅防窥保护通知\n  aboutToDisappear() {\n    try {\n      dlpAntiPeep.off('dlpAntiPeep', this.onStatusChange);\n    } catch (error) {\n      console.error(`Failed to off DlpAntiPeep. Code: ${error.code}, message: ${error.message}`);\n    }\n  }\n\n  onPageShow() {\n    console.info('Page shown, reset mask flag');\n    this.hasShownMask = false;\n  }\n\n  // 拉起系统蒙层\n  private async setMaskLayer(): Promise<void> {\n    try {\n      const context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n      const windowClass = await window.getLastWindow(context);\n      const windowId = windowClass.getWindowProperties().id;\n      await dlpAntiPeep.setAntiPeepMaskLayer(windowId);\n      this.hasShownMask = true; // 避免窥视状态时频繁拉起蒙层\n    } catch (error) {\n      console.error(`Failed to set AntiPeep MaskLayer. Code: ${error.code}, message: ${error.message}`);\n    }\n  }\n\n  build() {\n    Column() {\n      Text(this.message)\n        .fontSize(20)\n        .margin(20)\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n}\n"
          })
        }), "\n"]
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
632513(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
394215(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438449-4c4666ed5c07fff8bd95953b4d97bfcc.jpg");

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