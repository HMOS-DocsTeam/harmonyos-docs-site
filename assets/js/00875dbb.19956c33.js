"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["145144"], {
429399(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_medialibrary_kit_component_guidelines_recentphoto_component_guidelines_recentphoto_md_008_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-medialibrary-kit-component-guidelines-recentphoto-component-guidelines-recentphoto-md-008.json
var site_docs_medialibrary_kit_component_guidelines_recentphoto_component_guidelines_recentphoto_md_008_namespaceObject = JSON.parse('{"id":"medialibrary-kit/component-guidelines-recentphoto/component-guidelines-recentphoto","title":"使用RecentPhoto组件获取最近一张图片","description":"应用可以在布局中嵌入最近图片组件，通过此组件，应用无需申请权限，即可指定配置访问公共目录中最近的一个图片或视频文件。授予的权限仅包含只读权限。","source":"@site/docs/medialibrary-kit/component-guidelines-recentphoto/component-guidelines-recentphoto.md","sourceDirName":"medialibrary-kit/component-guidelines-recentphoto","slug":"/medialibrary-kit/component-guidelines-recentphoto/","permalink":"/harmonyos-docs-site/medialibrary-kit/component-guidelines-recentphoto/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"使用RecentPhoto组件获取最近一张图片","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/component-guidelines-recentphoto","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用AlbumPicker组件访问相册列表","permalink":"/harmonyos-docs-site/medialibrary-kit/component-guidelines-albumpicker/"},"next":{"title":"使用PickerController将编辑后的图片替换原图","permalink":"/harmonyos-docs-site/medialibrary-kit/medialibrary-pickercontroller/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/medialibrary-kit/component-guidelines-recentphoto/component-guidelines-recentphoto.md


const frontMatter = {
	title: '使用RecentPhoto组件获取最近一张图片',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/component-guidelines-recentphoto',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用RecentPhoto组件获取最近一张图片';

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
        id: "使用recentphoto组件获取最近一张图片",
        children: "使用RecentPhoto组件获取最近一张图片"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用可以在布局中嵌入最近图片组件，通过此组件，应用无需申请权限，即可指定配置访问公共目录中最近的一个图片或视频文件。授予的权限仅包含只读权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "界面效果如图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(671780)/* ["default"] */.A) + "",
        width: "231",
        height: "497"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入最近图片组件模块文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BaseItemInfo } from '@ohos.file.PhotoPickerComponent';\nimport {\n  PhotoSource,\n  RecentPhotoComponent,\n  RecentPhotoOptions,\n  photoAccessHelper\n} from '@kit.MediaLibraryKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建最近图片组件选择选项实例（RecentPhotoOptions）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过RecentPhotoOptions，开发者可配置显示多长时间段内的图片、文件类型、文件内容来源，详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-comp/ohos-file-recentphotocomponent/ohos-file-recentphotocomponent#recentphotooptions",
            children: "RecentPhotoOptions API参考"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 最近图片组件初始化。\nrecentPhotoOptions: RecentPhotoOptions = new RecentPhotoOptions();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化最近图片组件选择选项实例（RecentPhotoOptions）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置数据类型，IMAGE_VIDEO_TYPE：图片和视频（默认值）、IMAGE_TYPE：图片、VIDEO_TYPE：视频、MOVING_PHOTO_IMAGE_TYPE：动态图片。\nthis.recentPhotoOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_VIDEO_TYPE;\n\n// 设置最近图片的时间范围，单位（秒），0表示所有时间。\nthis.recentPhotoOptions.period = 0;\n\n// 设置资源的来源，ALL：所有、CAMERA：相机、SCREENSHOT：截图。\nthis.recentPhotoOptions.photoSource = PhotoSource.ALL;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-comp/ohos-file-recentphotocomponent/ohos-file-recentphotocomponent#recentphotocomponent",
            children: "RecentPhotoComponent"
          }), "组件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "RecentPhotoComponent({\n  // 设置最近图片组件选择选项实例。\n  recentPhotoOptions: this.recentPhotoOptions,\n    \n   /**\n   * 最近图片点击事件。\n   * BaseItemInfo（uri, mimeType, width, height, size, duration）\n   * return 返回值为true时才会给url授权，才可以显示。\n   */\n  onRecentPhotoClick: (recentPhotoInfo: BaseItemInfo): boolean => this.onRecentPhotoClick(recentPhotoInfo),\n\n  // 检查是否存在最近的资源。\n  onRecentPhotoCheckResult: (recentPhotoExists: boolean) => this.onReceiveCheckResult(recentPhotoExists),\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实现相关回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实现onReceiveCheckResult回调，可查询是否存在最近图片，仅返回true时才可进一步实现控制是否显示最近图片。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["实现onRecentPhotoClick回调，将上报返回图片/视频相关信息", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-comp/ohos-file-photopickercomponent/ohos-file-photopickercomponent#baseiteminfo",
            children: "BaseItemInfo"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 返回值为true时，才能获取uri的权限。\nprivate onRecentPhotoClick(recentPhotoInfo: BaseItemInfo): boolean {\n  if (!recentPhotoInfo) {\n    return false;\n  }\n  return true;\n}\n\nprivate onReceiveCheckResult(recentPhotoExists: boolean): void {\n  if (!recentPhotoExists) {\n    console.info('not exist recent photo');\n  }\n  // 存在最近图片的话，可以实现业务需求，如去控制RecentPhotoComponent是否显示。\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整示例请查阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-comp/ohos-file-recentphotocomponent/ohos-file-recentphotocomponent#%E7%A4%BA%E4%BE%8B",
        children: "示例"
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
671780(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958606-cce140ef11eceb762f6b7cf79f46f30d.png");

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