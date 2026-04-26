"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["407318"], {
705491(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_access_control_security_components_savebutton_savebutton_md_110_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-access-control-security-components-savebutton-savebutton-md-110.json
var site_docs_system_security_access_control_security_components_savebutton_savebutton_md_110_namespaceObject = JSON.parse('{"id":"system-security/access-control/security-components/savebutton/savebutton","title":"使用保存控件","description":"保存控件允许用户通过点击按钮临时获取存储权限，无需权限弹框确认。","source":"@site/docs/system-security/access-control/security-components/savebutton/savebutton.md","sourceDirName":"system-security/access-control/security-components/savebutton","slug":"/system-security/access-control/security-components/savebutton/","permalink":"/harmonyos-docs-site/system-security/access-control/security-components/savebutton/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"使用保存控件","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/savebutton","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用粘贴控件","permalink":"/harmonyos-docs-site/system-security/access-control/security-components/pastebutton/"},"next":{"title":"使用系统Picker","permalink":"/harmonyos-docs-site/system-security/access-control/use-picker/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/access-control/security-components/savebutton/savebutton.md


const frontMatter = {
	title: '使用保存控件',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/savebutton',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用保存控件';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用保存控件",
        children: "使用保存控件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "保存控件允许用户通过点击按钮临时获取存储权限，无需权限弹框确认。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "集成保存控件后，当用户点击该控件时，应用会在短时间内获取访问媒体库特权接口的授权。在API version 19及之前的版本中，授权持续时间为10秒；在API version 20及之后的版本中，授权持续时间为1分钟。这适用于任何需要将文件保存到媒体库的应用场景，例如保存图片或视频等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "与需要触发系统应用并由用户选择具体保存路径的Picker不同，保存控件可以直接保存到指定的媒体库路径，使得操作更为便捷。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "保存控件效果如图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(889531)/* ["default"] */.A) + "",
        width: "721",
        height: "700"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当用户首次点击应用中的保存控件，系统将弹窗请求用户授权。如果用户点击“取消”，弹窗消失，应用无授权，用户再次点击保存控件时，将会重新弹窗；如果用户点击“允许”，弹窗消失，应用将被授予临时保存权限，此后点击该应用的保存控件将不会弹窗。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用在点击控件触发onClick()回调到调用媒体库特权接口的时间间隔需控制在授权时间内。在API version 19及之前的版本中，授权持续时间为10秒；在API version 20及之后的版本中，授权持续时间为1分钟。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["保存控件仅支持在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-e/arkts-apis-window-e#windowtype7",
            children: "应用主窗口和子窗口"
          }), "中使用，且不支持在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uiextension/js-apis-arkui-uiextension",
            children: "UIExtension"
          }), "中使用。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户点击一次控件，仅获取一次授权调用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "为了保障用户的隐私不被恶意应用获取，应用需确保安全控件是可见的且用户能够识别的。开发者需要合理的配置控件的尺寸、颜色等属性，避免视觉混淆的情况，如果发生因控件的样式不合法导致授权失败的情况，请检查设备错误日志。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当开发者需要自定义保存控件的图标和文本时，需要向应用市场申请ohos.permission.CUSTOMIZE_SAVE_BUTTON权限。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(523878)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ohos.permission.CUSTOMIZE_SAVE_BUTTON受限开放，仅默认样式无法满足业务场景时可申请，申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
            children: "申请使用受限权限"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以保存对话中图片为例，应用仅需在前台期间短暂使用保存图片的特性，而不需要长时间使用。此时，可以直接使用安全控件中的保存控件，免去权限申请和请求等环节，获得临时授权，保存对应图片。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入文件和媒体库依赖。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { photoAccessHelper } from '@kit.MediaLibraryKit';\nimport { fileIo } from '@kit.CoreFileKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置图片资源并添加保存控件。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["保存控件是由图标、文本和背景组成的类似按钮的安全控件。其中，背景是必选的，图标和文本至少选择一个。图标和文本可以从已有的选项中选择，也可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/arkui-security/ts-security-components-savebutton/ts-security-components-savebutton#seticon20",
            children: "setIcon"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/arkui-security/ts-security-components-savebutton/ts-security-components-savebutton#settext20",
            children: "setText"
          }), "自定义。在声明安全控件的接口时，有传参和不传参两种方式。不传参将默认创建一个包含图标、文本和背景的按钮；传参则根据参数创建，不包含未配置的元素。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当前示例使用默认参数。具体请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/arkui-security/ts-security-components-savebutton/ts-security-components-savebutton",
            children: "SaveButton控件"
          }), "。此外，所有安全控件都继承了", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/arkui-security/ts-securitycomponent-attributes/ts-securitycomponent-attributes",
            children: "安全控件通用属性"
          }), "，可用于定制样式。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["有关将图片保存到媒体库的详细信息，请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/medialibrary-kit/photoaccesshelper-savebutton",
            children: "保存媒体库资源"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { photoAccessHelper } from '@kit.MediaLibraryKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { common } from '@kit.AbilityKit';\nimport { promptAction } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nasync function savePhotoToGallery(context: common.UIAbilityContext) {\n  let helper = photoAccessHelper.getPhotoAccessHelper(context);\n  try {\n    // onClick触发后一分钟内通过createAsset接口创建图片文件，一分钟后createAsset权限收回。\n    let uri = await helper.createAsset(photoAccessHelper.PhotoType.IMAGE, 'jpg');\n    // 使用uri打开文件，可以持续写入内容，写入过程不受时间限制。\n    let file = await fileIo.open(uri, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);\n    // $r('app.media.test')需要替换为开发者所需的图像资源文件。\n    context.resourceManager.getMediaContent($r('app.media.test').id, 0)\n      .then(async value => {\n        let media = value.buffer;\n        // 写到媒体库文件中。\n        await fileIo.write(file.fd, media);\n        await fileIo.close(file.fd);\n        promptAction.openToast({ message: $r('app.string.saved_in_photo') });\n      });\n  } catch (error) {\n    const err: BusinessError = error as BusinessError;\n    console.error(`Failed to save photo. Code is ${err.code}, message is ${err.message}`);\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      Column({ space: 10 }) {\n        // $r('app.media.test')需要替换为开发者所需的图像资源文件。\n        Image($r('app.media.test'))\n          .height(400)\n          .width('100%')\n\n        SaveButton()\n          .padding({top: 12, bottom: 12, left: 24, right: 24})\n          .onClick((event: ClickEvent, result: SaveButtonOnClickResult) => {\n            if (result === SaveButtonOnClickResult.SUCCESS) {\n              const context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n              // 免去权限申请和权限请求等环节，获得临时授权，保存对应图片。\n              savePhotoToGallery(context);\n            } else {\n              promptAction.openToast({ message: $r('app.string.set_permission_failed') });\n            }\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n    .backgroundColor(0xf1f3f5)\n  }\n}\n"
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
889531(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438405-0a19675d36ae2b4319d1860d51000a18.png");

},
523878(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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