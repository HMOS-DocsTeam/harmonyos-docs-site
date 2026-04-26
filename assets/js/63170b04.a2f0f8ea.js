"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["859485"], {
630273(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_input_kit_keypressed_guidelines_keypressed_guidelines_md_631_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-input-kit-keypressed-guidelines-keypressed-guidelines-md-631.json
var site_docs_system_basicfun_input_kit_keypressed_guidelines_keypressed_guidelines_md_631_namespaceObject = JSON.parse('{"id":"system-basicfun/input-kit/keypressed-guidelines/keypressed-guidelines","title":"优先响应系统功能键开发指导","description":"场景介绍","source":"@site/docs/system-basicfun/input-kit/keypressed-guidelines/keypressed-guidelines.md","sourceDirName":"system-basicfun/input-kit/keypressed-guidelines","slug":"/system-basicfun/input-kit/keypressed-guidelines/","permalink":"/harmonyos-docs-site/system-basicfun/input-kit/keypressed-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"优先响应系统功能键开发指导","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/keypressed-guidelines","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"输入设备开发指导","permalink":"/harmonyos-docs-site/system-basicfun/input-kit/inputdevice-guidelines/"},"next":{"title":"鼠标光标开发指导","permalink":"/harmonyos-docs-site/system-basicfun/input-kit/pointerstyle-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/input-kit/keypressed-guidelines/keypressed-guidelines.md


const frontMatter = {
	title: '优先响应系统功能键开发指导',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/keypressed-guidelines',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = '优先响应系统功能键开发指导';

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
  "value": "音量键翻页和应用内拍照",
  "id": "音量键翻页和应用内拍照",
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
    li: "li",
    p: "p",
    pre: "pre",
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
        id: "优先响应系统功能键开发指导",
        children: "优先响应系统功能键开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每个系统功能键均具有默认功能，由系统固定实现，比如音量键是用来调节设备音量，但是部分应用在特定场景下期望定制这部分按键的功能，本篇指导用于支撑这部分应用的诉求达成。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常见使用场景：阅读类型应用期望通过音量键翻页，相机应用期望通过音量键拍照等应用响应系统功能键做其他业务的场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持功能键列表：从API version 16开始支持音量加按键和音量减按键。从API version 21开始支持多媒体播放/暂停、多媒体下一首和多媒体上一首按键。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用只有处于焦点时，优先响应才生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用选择高于系统优先响应指定的系统功能键后，功能键的默认行为将失效，所以应用需要确保只有在确定响应时才激活该功能。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["按键按下事件常用接口如下表所示，接口详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-arkts/js-apis-inputconsumer/js-apis-inputconsumer",
        children: "@ohos.multimodalInput.inputConsumer"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: \"keyPressed\", options: KeyPressedConfig, callback: Callback<KeyEvent>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅指定按键按下事件，拦截系统默认响应。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: \"keyPressed\", callback?: Callback<KeyEvent>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消按键事件订阅，恢复系统默认响应。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用开启时调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-arkts/js-apis-inputconsumer/js-apis-inputconsumer#inputconsumeronkeypressed16",
        children: "on"
      }), "方法订阅按键按下事件，应用关闭时再用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-arkts/js-apis-inputconsumer/js-apis-inputconsumer#inputconsumeroffkeypressed16",
        children: "off"
      }), "方法取消订阅按键按下事件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "音量键翻页和应用内拍照",
      children: "音量键翻页和应用内拍照"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在电子书或新闻阅读应用中，用户希望通过音量键控制翻页（例如：音量加键向下翻页，音量减键向上翻页）；在相机或扫码类应用中，用户按音量键可直接拍照，而不跳转系统相机应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { inputConsumer, KeyEvent } from '@kit.InputKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { KeyCode } from '@kit.InputKit';\n\nconst DOMAIN = 0x0000;\n\n@Entry\n@Component\nstruct TestDemo14 {\n  @State text: string = \"Default monitoring for Volume Up and Down keys has been added.\"\n  private volumeUpCallBackFunc: (event: KeyEvent) => void = () => {\n  }\n  private volumeDownCallBackFunc: (event: KeyEvent) => void = () => {\n  }\n  options1: inputConsumer.KeyPressedConfig = {\n    key: KeyCode.KEYCODE_VOLUME_UP,\n    action: 1, // 按下按键的行为\n    isRepeat: false, // 优先消费掉按键事件，不上报\n  }\n  options2: inputConsumer.KeyPressedConfig = {\n    key: KeyCode.KEYCODE_VOLUME_DOWN,\n    action: 1, // 按下按键的行为\n    isRepeat: false, // 优先消费掉按键事件，不上报\n  }\n\n  aboutToAppear(): void {\n    try {\n      // 点击了音量按键上事件回调\n      this.volumeUpCallBackFunc = (event: KeyEvent) => {\n        this.getUIContext().getPromptAction().showToast({ message: 'Volume Up key pressed' })\n        // do something\n      }\n\n      // 点击了音量按键下事件回调\n      this.volumeDownCallBackFunc = (event: KeyEvent) => {\n        this.getUIContext().getPromptAction().showToast({ message: 'Volume Down key pressed' })\n        // do something\n      }\n      // 注册监听事件\n      inputConsumer.on('keyPressed', this.options1, this.volumeUpCallBackFunc);\n      inputConsumer.on('keyPressed', this.options2, this.volumeDownCallBackFunc);\n    } catch (error) {\n      hilog.error(DOMAIN, 'InputConsumer', `Subscribe execute failed, error: %{public}s`,\n        JSON.stringify(error, [\"code\", \"message\"]));\n    }\n  }\n\n  build() {\n    Column() {\n      Row() {\n        Button('Add monitoring for Volume Up key')\n          .onClick(() => {\n            try {\n              // 添加指定回调函数\n              inputConsumer.on('keyPressed', this.options1, this.volumeUpCallBackFunc);\n              this.getUIContext()\n                .getPromptAction()\n                .showToast({ message: 'Successfully added monitoring for Volume Up key!' })\n              this.text = \"Monitoring for Volume Up key has been added.\"\n            } catch (error) {\n              hilog.error(DOMAIN, 'InputConsumer', `Unsubscribe execute failed, error: %{public}s`,\n                JSON.stringify(error, [\"code\", \"message\"]));\n              this.getUIContext()\n                .getPromptAction()\n                .showToast({ message: 'Failed to add monitoring for Volume Up key!' })\n              this.text = `Failed to add monitoring for Volume Up key: ${JSON.stringify(error, [\"code\", \"message\"])}`\n            }\n          })\n      }.width('100%')\n      .justifyContent(FlexAlign.Center)\n      .margin({ top: 20, bottom: 50 })\n\n      Row() {\n        Button('Remove monitoring for Volume Up key')\n          .onClick(() => {\n            try {\n              // 取消指定回调函数\n              inputConsumer.off('keyPressed', this.volumeUpCallBackFunc);\n              this.getUIContext()\n                .getPromptAction()\n                .showToast({ message: 'Successfully removed monitoring for Volume Up key!' })\n              this.text = \"Monitoring for Volume Up key has been removed.\"\n            } catch (error) {\n              hilog.error(DOMAIN, 'InputConsumer', `Unsubscribe execute failed, error: %{public}s`,\n                JSON.stringify(error, [\"code\", \"message\"]));\n              this.getUIContext()\n                .getPromptAction()\n                .showToast({ message: 'Failed to remove monitoring for Volume Up key!' })\n              this.text = `Failed to remove monitoring for Volume Up key: ${JSON.stringify(error, [\"code\", \"message\"])}`\n            }\n          })\n      }.width('100%')\n      .justifyContent(FlexAlign.Center)\n      .margin({ top: 20, bottom: 50 })\n\n      Row() {\n        Button('Add monitoring for Volume Down key')\n          .onClick(() => {\n            try {\n              // 添加指定回调函数\n              inputConsumer.on('keyPressed', this.options2, this.volumeDownCallBackFunc);\n              this.getUIContext()\n                .getPromptAction()\n                .showToast({ message: 'Successfully added monitoring for Volume Down key!' })\n              this.text = \"Monitoring for Volume Down key has been added.\"\n            } catch (error) {\n              hilog.error(DOMAIN, 'InputConsumer', `Unsubscribe execute failed, error: %{public}s`,\n                JSON.stringify(error, [\"code\", \"message\"]));\n              this.getUIContext()\n                .getPromptAction()\n                .showToast({ message: 'Failed to add monitoring for Volume Down key!' })\n              this.text = `Failed to add monitoring for Volume Down key: ${JSON.stringify(error, [\"code\", \"message\"])}`\n            }\n          })\n      }.width('100%')\n      .justifyContent(FlexAlign.Center)\n      .margin({ top: 20, bottom: 50 })\n\n      Row() {\n        Button('Remove monitoring for Volume Down key')\n          .onClick(() => {\n            try {\n              // 取消指定回调函数\n              inputConsumer.off('keyPressed', this.volumeDownCallBackFunc);\n              this.getUIContext()\n                .getPromptAction()\n                .showToast({ message: 'Successfully removed monitoring for Volume Down key!' })\n              this.text = \"Monitoring for Volume Down key has been removed.\"\n            } catch (error) {\n              hilog.error(DOMAIN, 'InputConsumer', `Unsubscribe execute failed, error: %{public}s`,\n                JSON.stringify(error, [\"code\", \"message\"]));\n              this.getUIContext()\n                .getPromptAction()\n                .showToast({ message: 'Failed to remove monitoring for Volume Down key!' })\n              this.text =\n                `Failed to remove monitoring for Volume Down key: ${JSON.stringify(error, [\"code\", \"message\"])}`\n            }\n          })\n      }.width('100%')\n      .justifyContent(FlexAlign.Center)\n      .margin({ top: 20, bottom: 50 })\n\n      Row() {\n        Text(this.text)\n      }\n      .width('100%')\n      .justifyContent(FlexAlign.Center)\n    }.width('100%').height('100%')\n  }\n}\n"
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