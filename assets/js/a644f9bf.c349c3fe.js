"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["677326"], {
957028(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_manage_page_interaction_web_focus_web_focus_md_a64_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-manage-page-interaction-web-focus-web-focus-md-a64.json
var site_docs_arkweb_web_manage_page_interaction_web_focus_web_focus_md_a64_namespaceObject = JSON.parse('{"id":"arkweb/web-manage-page-interaction/web-focus/web-focus","title":"Web组件焦点管理","description":"开发者可利用Web组件的焦点管理功能，有效管理Web组件的获焦与失焦，同时利用H5端的W3C标准接口，管理网页界面上唯一可交互的元素获焦与失焦。","source":"@site/docs/arkweb/web-manage-page-interaction/web-focus/web-focus.md","sourceDirName":"arkweb/web-manage-page-interaction/web-focus","slug":"/arkweb/web-manage-page-interaction/web-focus/","permalink":"/harmonyos-docs-site/arkweb/web-manage-page-interaction/web-focus/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Web组件焦点管理","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-focus","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Web组件对接软键盘","permalink":"/harmonyos-docs-site/arkweb/web-manage-page-interaction/web-docking-softkeyboard/"},"next":{"title":"使用Web组件的手势与应用交互","permalink":"/harmonyos-docs-site/arkweb/web-manage-page-interaction/web-gesture/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-manage-page-interaction/web-focus/web-focus.md


const frontMatter = {
	title: 'Web组件焦点管理',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-focus',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Web组件焦点管理';

const assets = {

};



const toc = [{
  "value": "基础概念",
  "id": "基础概念",
  "level": 2
}, {
  "value": "Web组件走焦规范",
  "id": "web组件走焦规范",
  "level": 2
}, {
  "value": "主动走焦",
  "id": "主动走焦",
  "level": 3
}, {
  "value": "被动走焦",
  "id": "被动走焦",
  "level": 3
}, {
  "value": "Web组件与ArkUI组件焦点控制",
  "id": "web组件与arkui组件焦点控制",
  "level": 2
}, {
  "value": "Web组件内H5元素焦点控制",
  "id": "web组件内h5元素焦点控制",
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
        id: "web组件焦点管理",
        children: "Web组件焦点管理"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可利用Web组件的焦点管理功能，有效管理Web组件的获焦与失焦，同时利用H5端的W3C标准接口，管理网页界面上唯一可交互的元素获焦与失焦。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Web组件与ArkUI组件焦点控制的常用接口及其使用场景："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["通过requestFocus主动请求Web组件获焦：当应用内有多个组件时，开发者可通过Web组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#requestfocus",
              children: "requestFocus"
            }), "接口，主动将焦点转移到Web组件。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "根据焦点情况更改Web组件样式：组件监听焦点事件上报，为组件修改样式，例如边框、背景色等，以提供视觉和交互反馈。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Web组件内H5元素焦点控制的常用接口及其使用场景："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过tabindex属性管理元素焦点：定义Web组件内元素的焦点顺序。可以通过将元素的tabindex设置为\"-1\"，使其能够通过脚本进行聚焦，同时在CSS中对元素的可见性进行控制。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "键盘事件更新焦点位置：监听键盘事件，例如Tab键，依据用户的操作更新Web内元素焦点位置。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "根据焦点情况更改Web组件内元素样式：为焦点元素添加样式，例如边框、背景色等，以提供视觉和交互反馈。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基础概念",
      children: "基础概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web组件焦点、焦点链和走焦的详情说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
        children: "ArkUI焦点基础概念"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["焦点：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "组件焦点：指当前应用界面上唯一的一个可交互元素。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "网页内元素焦点：指当前网页界面上唯一的一个可交互元素。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["走焦：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "组件走焦：指焦点在应用内的组件之间转移的行为。这一过程对用户是透明的，开发者可以通过监听onFocus（焦点获取）和onBlur（焦点失去）事件来捕捉这些变化。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "网页内元素走焦：指焦点在网页内的元素之间转移的行为。该行为遵循W3C标准，开发者可以通过监听focus（在元素获取焦点时触发）和blur（在元素失去焦点时触发）事件来捕捉这些变化。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "web组件走焦规范",
      children: "Web组件走焦规范"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据走焦的触发方式，可以分为主动走焦和被动走焦，Web组件走焦规范详情参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event#%E8%B5%B0%E7%84%A6%E8%A7%84%E8%8C%83",
        children: "ArkUI走焦规范"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "主动走焦",
      children: "主动走焦"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指开发者或用户主观行为导致的焦点移动。包括：使用requestFocus申请焦点、外接键盘的按键走焦（Tab键/Shift+Tab键）、点击申请焦点（手势/鼠标/触摸板）等导致的焦点转移。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "requestFocus"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkweb/web-manage-page-interaction/web-focus#web%E7%BB%84%E4%BB%B6%E4%B8%8Earkui%E7%BB%84%E4%BB%B6%E7%84%A6%E7%82%B9%E6%8E%A7%E5%88%B6",
            children: "Web组件与ArkUI组件焦点控制"
          }), "，可以主动将焦点转移到Web组件上。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按键走焦"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "支持Web组件与其他组件通过Tab键、Shift+Tab键走焦。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "支持Web组件内部网页元素通过Tab键、Shift+Tab键走焦，网页元素走焦完成后，抛回ArkUI继续框架侧走焦。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击申请获焦"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者或用户可通过手势、鼠标或触摸板点击Web组件，使其主动获得焦点。当具体点击到Web组件内的某个元素时，该元素能够获得焦点，例如：点击网页内的输入框，可使其从不可编辑状态转变为可编辑状态，并激活输入法。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "被动走焦",
      children: "被动走焦"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "被动走焦指焦点因系统或其他操作而转移，无需开发者直接干预，是焦点系统的默认行为。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "被动走焦的场景有："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "组件移除：当焦点所在的Web组件被移除时，系统会按照先向后再向前的原则，将焦点转移至相邻的同级组件。若所有同级组件均不可获焦，则焦点将被释放，并通知其父级组件进行焦点处理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "属性变更：若将处于焦点状态的组件的focusable或enabled属性设置为false，或者将visibility属性设置为不可见，系统将自动转移焦点至其他可获焦组件，转移方式同组件移除。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Web组件不可见：Web组件获焦后，应用前后台切换、页面切换、Navigation导航等场景，Web组件会失焦再获焦。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Web组件加载网页：Web组件通过src、loadUrl、loadData加载网页，默认会获取焦点，但若此时Web组件为不可获焦状态则会获焦失败（常见的不可获焦状态原因有：转场动画过程中父组件不可获焦、应用侧设置了Web组件或其父组件不可获焦属性等），应用侧可以调用主动申请获焦接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#requestfocus",
          children: "requestFocus"
        }), "再次尝试使Web组件获焦。当获焦成功后，应用侧onFocus、W3C focus事件均会上报。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["autofocus样式：设置了autofocus样式的元素网页完成加载时默认获焦。若该元素支持文本输入，则输入框会有光标闪烁，但不会弹出软键盘。如需自动弹出软键盘，可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkweb/web-manage-page-interaction/web-docking-softkeyboard#%E8%BD%AF%E9%94%AE%E7%9B%98%E8%87%AA%E5%8A%A8%E5%BC%B9%E5%87%BA",
          children: "软键盘自动弹出"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["菜单弹出：ArkUI的overlay属性类型组件默认抢焦，在与此类组件结合的Web组件场景中（", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menu/ts-basic-components-menu",
          children: "Menu"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-datepicker/ts-basic-components-datepicker",
          children: "DatePicker"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-timepicker/ts-basic-components-timepicker",
          children: "TimePicker"
        }), "、下拉框、弹窗等），Web组件均会失焦。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "web组件与arkui组件焦点控制",
      children: "Web组件与ArkUI组件焦点控制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用侧通用获焦回调接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-focus-event/ts-universal-focus-event#onfocus",
          children: "onFocus"
        }), "，获焦事件回调，绑定该接口的组件获焦时，回调响应。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用侧通用失焦回调接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-focus-event/ts-universal-focus-event#onblur",
          children: "onBlur"
        }), "，失焦事件回调，绑定该接口的组件失焦时，回调响应。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用侧主动申请获焦接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#requestfocus",
          children: "requestFocus"
        }), "，组件主动申请获焦。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["设置组件是否可获焦：应用可以通过设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus#focusable",
          children: "focusable"
        }), "属性，控制Web组件是否能够获取焦点。Web组件默认可获焦。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "requestFocus接口允许应用开发者主动控制让Web组件获焦。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "onFocus和onBlur两个接口通常成对使用，来监听组件的焦点变化。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  controller2: webview.WebviewController = new webview.WebviewController();\n  @State webBorderColor: Color = Color.Red;\n  @State webBorderColor2: Color = Color.Red;\n\n  build() {\n    Column() {\n      Row() {\n        Button('web1 requestFocus')\n          .onClick(() => {\n            try {\n              this.controller.requestFocus();\n            } catch (error) {\n              console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n            }\n          });\n        Button('web2 requestFocus')\n          .onClick(() => {\n            try {\n              this.controller2.requestFocus();\n            } catch (error) {\n              console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n            }\n          });\n      }\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onFocus(() => {\n          this.webBorderColor = Color.Green;\n        })\n        .onBlur(() => {\n          this.webBorderColor = Color.Red;\n        })\n        // ···\n        .margin(3)\n        .borderWidth(10)\n        .borderColor(this.webBorderColor)\n        .height('45%')\n\n      Web({ src: 'www.example.com', controller: this.controller2 })\n        .onFocus(() => {\n          this.webBorderColor2 = Color.Green;\n        })\n        .onBlur(() => {\n          this.webBorderColor2 = Color.Red;\n        })\n        .margin(3)\n        .borderWidth(10)\n        .borderColor(this.webBorderColor2)\n        .height('45%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例图1"
        })
      }), " 组件获焦/失焦事件"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过requestFocus接口主动请求获焦，并监听通用接口onFocus和onBlur事件，改变Web组件边框颜色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(510629)/* ["default"] */.A) + "",
        width: "906",
        height: "576"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "web组件内h5元素焦点控制",
      children: "Web组件内H5元素焦点控制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "W3C标准事件focus，前端感知网页获焦"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "addEventListener(\"focus\", (event) => {});\n\nonfocus = (event) => {};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "W3C标准事件blur，前端感知网页失焦"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "addEventListener(\"blur\", (event) => {});\n\nonblur = (event) => {};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "W3C autofocus，表示元素应在页面加载时或其所属的 dialog 显示时获焦"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<input name=\"q\" autofocus />\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在文档或对话框中，最多只能有一个元素具有 autofocus 属性。若应用于多个元素，第一个元素将获得焦点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('test.html'), controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载的html文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// test.html\n<!-- test.html -->\n<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"utf-8\">\n<title>test</title>\n</head>\n<body>\n  <form id=\"form\">\n    <input type=\"text\" placeholder=\"text input\" />\n    <input type=\"password\" placeholder=\"password\" />\n  </form>\n</body>\n<script>\nconst form = document.getElementById(\"form\");\n\nform.addEventListener(\n  \"focus\",\n  (event) => {\n    event.target.style.background = \"pink\";\n  },\n  true,\n);\n\nform.addEventListener(\n  \"blur\",\n  (event) => {\n    event.target.style.background = \"\";\n  },\n  true,\n);\n</script>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例图2"
        })
      }), " Web组件内元素焦点获焦/失焦事件"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过监听W3C接口focus和blur事件，改变输入背景色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(694794)/* ["default"] */.A) + "",
        width: "648",
        height: "126"
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
510629(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798570-142ce059a42cb97ffde9308c7165cc8c.gif");

},
694794(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438265-a70fe187a13814968b3f2d4a6aa021e8.gif");

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