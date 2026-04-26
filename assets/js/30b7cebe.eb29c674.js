"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["918821"], {
501476(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_medialibrary_kit_medialibrary_request_photouris_permission_medialibrary_request_photouris_permission_md_30b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-medialibrary-kit-medialibrary-request-photouris-permission-medialibrary-request-photouris-permission-md-30b.json
var site_docs_medialibrary_kit_medialibrary_request_photouris_permission_medialibrary_request_photouris_permission_md_30b_namespaceObject = JSON.parse('{"id":"medialibrary-kit/medialibrary-request-photouris-permission/medialibrary-request-photouris-permission","title":"设备升级继承媒体文件访问权限","description":"应用在HarmonyOS 3.1 Release API 9及更低版本运行时，有图片/视频访问权限，并在应用内记录对应的图片/视频文件路径或uri，在进入应用特定界面时，可实时访问图片/视频显示内容。","source":"@site/docs/medialibrary-kit/medialibrary-request-photouris-permission/medialibrary-request-photouris-permission.md","sourceDirName":"medialibrary-kit/medialibrary-request-photouris-permission","slug":"/medialibrary-kit/medialibrary-request-photouris-permission/","permalink":"/harmonyos-docs-site/medialibrary-kit/medialibrary-request-photouris-permission/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"设备升级继承媒体文件访问权限","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/medialibrary-request-photouris-permission","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用MovingPhotoView播放动态照片","permalink":"/harmonyos-docs-site/medialibrary-kit/movingphoto/movingphotoview-guidelines/"},"next":{"title":"开发准备","permalink":"/harmonyos-docs-site/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-preparation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/medialibrary-kit/medialibrary-request-photouris-permission/medialibrary-request-photouris-permission.md


const frontMatter = {
	title: '设备升级继承媒体文件访问权限',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/medialibrary-request-photouris-permission',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '设备升级继承媒体文件访问权限';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "完整示例",
  "id": "完整示例",
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
        id: "设备升级继承媒体文件访问权限",
        children: "设备升级继承媒体文件访问权限"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用在HarmonyOS 3.1 Release API 9及更低版本运行时，有图片/视频访问权限，并在应用内记录对应的图片/视频文件路径或uri，在进入应用特定界面时，可实时访问图片/视频显示内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "但在设备从HarmonyOS 3.1 Release API 9及更低版本升级至HarmonyOS 5.0.2及以上版本时，图片、视频等媒体文件的访问方式发生变化，应用无法使用原来的文件路径或uri访问媒体文件，且新版本上应用默认没有权限直接访问图片/视频。在新版本上，应用需要向用户发起请求，用户同意后，可继承原有的媒体文件访问权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本指南将帮助开发者了解如何在升级后，继承媒体文件的访问权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(968947)/* ["default"] */.A) + "",
        width: "351",
        height: "654"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用在启动或是进入对应的业务界面之后，从应用数据中获取在HarmonyOS 3.1/4.0版本的应用上已有权限且需要继承权限的媒体文件uri，调用Scenario Fusion Kit的接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/scenario-fusion-api/scenario-fusion-arktsapi/scenario-fusion-fileuriresult/scenario-fusion-fileuriresult#convertfileuris",
        children: "convertFileUris"
      }), "，获取转换后的HarmonyOS 5.0可访问的uri。再调用Media Library Kit的接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper#requestphotourisreadpermission14",
        children: "requestPhotoUrisReadPermission()"
      }), "，输入需要继承访问权限的媒体文件uri，拉起授权界面。在授权界面，根据应用输入的uri，将显示对应图片/视频缩略图。用户可以勾选对应的图片/视频，并同意授权，此时应用将获取该图片/视频的访问权限。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在用户界面的效果如图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(354910)/* ["default"] */.A) + "",
        width: "1037",
        height: "513"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此处仅展示如何调用Media Library Kit的接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper#requestphotourisreadpermission14",
        children: "requestPhotoUrisReadPermission()"
      }), "，输入需要继承访问权限的媒体文件uri，拉起授权界面。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用Scenario Fusion Kit的接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/scenario-fusion-api/scenario-fusion-arktsapi/scenario-fusion-fileuriresult/scenario-fusion-fileuriresult#convertfileuris",
        children: "convertFileUris"
      }), "，获取转换后的HarmonyOS 5.0可访问的uri，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/code-precautions#%E5%85%AC%E5%85%B1%E7%9B%AE%E5%BD%95%E6%96%87%E4%BB%B6uri%E7%BB%A7%E6%89%BF",
        children: "公共目录文件URI继承"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关接口模块文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { photoAccessHelper } from '@kit.MediaLibraryKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化输入的uri列表。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 用于初始化时接口类实例\n// 请在组件内获取context，确保this.getUiContext().getHostContext()返回结果为UIAbilityContext\nimport { common } from '@kit.AbilityKit';\nlet context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\nlet phAccessHelper: photoAccessHelper.PhotoAccessHelper = photoAccessHelper.getPhotoAccessHelper(context);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化输入的uri列表并赋值。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "private uris: Array<string> = new Array<string>();\n// 自行对其赋值，输入需要授权的uri信息\nthis.uris = [];\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用接口拉起授权界面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  phAccessHelper.requestPhotoUrisReadPermission(this.uris).then((result: Array<string>) => {\n    console.info(\"requestPhotoUrisReadPermission, result = \" + JSON.stringify(result));\n    if (result) {\n      // 授权成功返回授权后新的uri列表\n    } else {\n      // 授权失败后的处理\n    }\n  })\n} catch(error) {\n  console.error(\"requestPhotoUrisReadPermission error: \" + JSON.stringify(error));\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { photoAccessHelper } from '@kit.MediaLibraryKit';\nimport { common } from '@kit.AbilityKit';\n@Entry\n@Component\nstruct Index{\n  private uris: Array<string> = new Array<string>();\n\n  build() {\n    Row() {\n      Column() {\n        Button(\"拉起授权界面\").width('100%').height('10%').margin({top: 150})\n          .onClick(()=>{\n            // 自行对其赋值，输入需要授权的uri信息\n            this.uris = [];\n            let context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n            let phAccessHelper: photoAccessHelper.PhotoAccessHelper = photoAccessHelper.getPhotoAccessHelper(context);\n            try {\n              phAccessHelper.requestPhotoUrisReadPermission(this.uris).then((result: Array<string>) => {\n                console.info(\"requestPhotoUrisReadPermission, result = \" + JSON.stringify(result));\n                if (result) {\n                  // 授权成功返回授权后新的uri列表\n                } else {\n                  // 授权失败后的处理\n                }\n              })\n            } catch(error) {\n              console.error(\"requestPhotoUrisReadPermission error: \" + JSON.stringify(error));\n            }\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
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
354910(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438655-45da9c5b783fdaa5e2ff7cb0b138861f.png");

},
968947(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798960-11a1c5ed2753c80887fa82c5b2eac69e.png");

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