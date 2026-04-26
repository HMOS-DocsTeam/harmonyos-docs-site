"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["357332"], {
575279(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_medialibrary_kit_restricted_open_capabilities_photoaccesshelper_preparation_photoaccesshelper_preparation_md_5fb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-medialibrary-kit-restricted-open-capabilities-photoaccesshelper-preparation-photoaccesshelper-preparation-md-5fb.json
var site_docs_medialibrary_kit_restricted_open_capabilities_photoaccesshelper_preparation_photoaccesshelper_preparation_md_5fb_namespaceObject = JSON.parse('{"id":"medialibrary-kit/restricted-open-capabilities/photoaccesshelper-preparation/photoaccesshelper-preparation","title":"开发准备","description":"应用需获取相册管理模块实例，才能访问和修改相册中的媒体数据。相册管理模块涉及用户个人数据信息，应用需向用户申请读写权限，以保证功能的正常运行。使用相册管理模块接口时，如无其他注明，默认在工程代码的pages/index.ets或其他自定义的ets文件中使用。","source":"@site/docs/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-preparation/photoaccesshelper-preparation.md","sourceDirName":"medialibrary-kit/restricted-open-capabilities/photoaccesshelper-preparation","slug":"/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-preparation/","permalink":"/harmonyos-docs-site/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-preparation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"开发准备","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-preparation","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"设备升级继承媒体文件访问权限","permalink":"/harmonyos-docs-site/medialibrary-kit/medialibrary-request-photouris-permission/"},"next":{"title":"媒体资源使用指导","permalink":"/harmonyos-docs-site/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-resource-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-preparation/photoaccesshelper-preparation.md


const frontMatter = {
	title: '开发准备',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-preparation',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '开发准备';

const assets = {

};



const toc = [{
  "value": "获取相册管理模块实例",
  "id": "获取相册管理模块实例",
  "level": 2
}, {
  "value": "申请相册管理模块功能相关权限",
  "id": "申请相册管理模块功能相关权限",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "开发准备",
        children: "开发准备"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用需获取相册管理模块实例，才能访问和修改相册中的媒体数据。相册管理模块涉及用户个人数据信息，应用需向用户申请读写权限，以保证功能的正常运行。使用相册管理模块接口时，如无其他注明，默认在工程代码的pages/index.ets或其他自定义的ets文件中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取相册管理模块实例",
      children: "获取相册管理模块实例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用需要通过上下文", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/application-context-stage",
        children: "Context"
      }), "和接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-f/arkts-apis-photoaccesshelper-f#photoaccesshelpergetphotoaccesshelper",
        children: "getPhotoAccessHelper"
      }), "，获取相册管理模块实例，用于访问和修改相册中的媒体数据信息，如图片和视频。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "导入photoAccessHelper模块以使用相册管理模块相关接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过getUIContext().getHostContext()获取应用上下文。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取相册管理模块实例。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { photoAccessHelper } from '@kit.MediaLibraryKit';\nimport { common } from '@kit.AbilityKit';\n\n// 此处获取的photoAccessHelper实例为全局对象，后续文档中使用到的地方默认为使用此处获取的对象，如未添加此段代码报未定义的错误请自行添加。\n// 请在组件内获取context，确保this.getUiContext().getHostContext()返回结果为UIAbilityContext\n@Entry\n@Component\nstruct Index {\n  @State outputText: string = '支持的类型为：\\n';\n\n  build() {\n    Row() {\n      Button('example').onClick(async () => {\n        let context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n        let phAccessHelper = photoAccessHelper.getPhotoAccessHelper(context);\n      }).width('100%')\n    }\n    .height('90%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "申请相册管理模块功能相关权限",
      children: "申请相册管理模块功能相关权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["相册管理模块的读写操作需要相应权限，在申请权限前，请保证符合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview#%E6%9D%83%E9%99%90%E4%BD%BF%E7%94%A8%E7%9A%84%E5%9F%BA%E6%9C%AC%E5%8E%9F%E5%88%99",
        children: "权限使用的基本原则"
      }), "。涉及的权限如下表。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "权限名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "授权方式"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.permission.READ_IMAGEVIDEO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "允许应用读取媒体库的图片和视频媒体文件信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "user_grant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.permission.WRITE_IMAGEVIDEO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "允许应用读写媒体库的图片和视频媒体文件信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "user_grant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.permission.MEDIA_LOCATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "允许应用访问用户媒体文件中的地理位置信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "user_grant"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以上权限的授权方式均为user_grant（用户授权），即开发者在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json5配置文件"
      }), "中配置对应的权限后，需要使用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-abilityaccessctrl/js-apis-abilityaccessctrl#requestpermissionsfromuser9",
        children: "abilityAccessCtrl.requestPermissionsFromUser"
      }), "去校验当前用户是否已授权。如果已授权，应用可以直接访问和修改目标对象；否则需要弹框向用户申请授权。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["上述权限ohos.permission.READ_IMAGEVIDEO和ohos.permission.WRITE_IMAGEVIDEO为受控权限，通常是不允许三方应用申请的。如果有特殊场景需要使用，请提供相关申请材料到应用市场（AGC）申请相应权限证书。申请前请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions",
        children: "受限开放权限"
      }), "，确保应用符合可申请的场景。然后再参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
        children: "申请受限权限"
      }), "，完成受限开放权限的申请。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(643657)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "即使用户曾经授予权限，应用在调用受此权限保护的接口前，也应该先检查是否有权限。不能把之前授予的状态持久化，因为用户在动态授予后还可以通过“设置”取消应用的权限。"
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
643657(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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