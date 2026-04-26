"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["559972"], {
429885(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_medialibrary_kit_restricted_open_capabilities_using_ndk_mediaassetmanager_for_request_resource_using_ndk_mediaassetmanager_for_request_resource_md_3b0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-medialibrary-kit-restricted-open-capabilities-using-ndk-mediaassetmanager-for-request-resource-using-ndk-mediaassetmanager-for-request-resource-md-3b0.json
var site_docs_medialibrary_kit_restricted_open_capabilities_using_ndk_mediaassetmanager_for_request_resource_using_ndk_mediaassetmanager_for_request_resource_md_3b0_namespaceObject = JSON.parse('{"id":"medialibrary-kit/restricted-open-capabilities/using-ndk-mediaassetmanager-for-request-resource/using-ndk-mediaassetmanager-for-request-resource","title":"使用MediaAssetManager请求媒体资源(C/C++)","description":"使用MediaAssetManager可以实现请求媒体资源到目标沙箱路径，本开发指导将以请求一张图片作为示例，向开发者讲解MediaAssetManager相关功能。","source":"@site/docs/medialibrary-kit/restricted-open-capabilities/using-ndk-mediaassetmanager-for-request-resource/using-ndk-mediaassetmanager-for-request-resource.md","sourceDirName":"medialibrary-kit/restricted-open-capabilities/using-ndk-mediaassetmanager-for-request-resource","slug":"/medialibrary-kit/restricted-open-capabilities/using-ndk-mediaassetmanager-for-request-resource/","permalink":"/harmonyos-docs-site/medialibrary-kit/restricted-open-capabilities/using-ndk-mediaassetmanager-for-request-resource/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"使用MediaAssetManager请求媒体资源(C/C++)","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-ndk-mediaassetmanager-for-request-resource","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"媒体资源变更通知相关指导","permalink":"/harmonyos-docs-site/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-notify-guidelines/"},"next":{"title":"Ringtone Kit简介","permalink":"/harmonyos-docs-site/ringtone-kit-guide/ringtone-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/medialibrary-kit/restricted-open-capabilities/using-ndk-mediaassetmanager-for-request-resource/using-ndk-mediaassetmanager-for-request-resource.md


const frontMatter = {
	title: '使用MediaAssetManager请求媒体资源(C/C++)',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-ndk-mediaassetmanager-for-request-resource',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用MediaAssetManager请求媒体资源(C/C++)';

const assets = {

};



const toc = [{
  "value": "开发步骤及注意事项",
  "id": "开发步骤及注意事项",
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
        id: "使用mediaassetmanager请求媒体资源cc",
        children: "使用MediaAssetManager请求媒体资源(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用MediaAssetManager可以实现请求媒体资源到目标沙箱路径，本开发指导将以请求一张图片作为示例，向开发者讲解MediaAssetManager相关功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求图片资源的全流程包含：创建MediaAssetManager，设置请求资源，请求图片资源，取消本次请求(可选)。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤及注意事项",
      children: "开发步骤及注意事项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在CMake脚本中链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC libmedia_asset_manager.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者通过引入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-manager-capi-h/capi-media-asset-manager-capi-h",
        children: "media_asset_manager_capi.h"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h",
        children: "media_asset_base_capi.h"
      }), "头文件，使用MediaAssetManager相关API。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-c/media-library-module/capi-mediaassetmanager/capi-mediaassetmanager",
        children: "MediaAssetManager API"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(67700)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发前，需要参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-preparation",
        children: "开发准备"
      }), "，申请ohos.permission.READ_IMAGEVIDEO权限。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建实例：OH_MediaAssetManager_Create()。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置资源：设置资源请求回调、设置资源请求策略、设置源图片Uri和目标Uri。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请求图片资源：调用OH_MediaAssetManager_RequestImageForPath()请求图片资源到目标Uri。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "取消请求：调用OH_MediaAssetManager_CancelRequest()。(可选)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n#include \"multimedia/media_library/media_asset_base_capi.h\"\n#include \"multimedia/media_library/media_asset_manager_capi.h\"\n#include <cstdio>\n#include <cstring>\n\nconst char ERROR_REQUEST_ID[UUID_STR_MAX_LENGTH] = \"00000000-0000-0000-0000-000000000000\";\n\n// 资源请求回调\nvoid OnDataPrepared(int32_t result, MediaLibrary_RequestId requestIdStruct)\n{\n    printf(\"OnDataPrepared requestId: %s result: %d\\n\", requestIdStruct.requestId, result);\n}\n\n// ...\n\nstatic napi_value RequestMediaAssets(napi_env env, napi_callback_info info)\n{\n    // 创建MediaAssetManager实例\n    OH_MediaAssetManager *manager = OH_MediaAssetManager_Create();\n    if (manager == nullptr) {\n        // 处理异常。\n        printf(\"Get MediaAssetManager failed.\\n\");\n        // ...\n    } else {\n        // 设置资源请求回调\n        OH_MediaLibrary_OnDataPrepared callback = OnDataPrepared;\n        \n        // 设置资源请求策略\n        MediaLibrary_RequestOptions options;\n        options.deliveryMode = MEDIA_LIBRARY_HIGH_QUALITY_MODE;\n\n        // 预置图片资源Uri，默认为高质量图片。注：以下Uri是示例，开发者需根据实际情况创建或获取\n        const char *srcUri = \"file://media/Photo/87/VID_1712195295_025/request_image_src.jpg\";\n\n        // 提供目标路径Uri。注：以下Uri是示例，开发者需根据实际情况创建或获取\n        const char *destUri = \"file://media/Photo/9/IMG_1712195237_008/request_image_dest.jpg\";\n\n        // 将图片资源请求到目标路径\n        MediaLibrary_RequestId requestIdStruct = OH_MediaAssetManager_RequestImageForPath(manager, srcUri,\n            options, destUri, callback);\n        if (strcmp(requestIdStruct.requestId, ERROR_REQUEST_ID) == 0) {\n            // 处理异常\n            printf(\"Request image failed requestId：%s\\n\", requestIdStruct.requestId);\n            // ...\n        } else {\n            // 请求成功，打印请求Id\n            printf(\"Request image success, requestId: %s\\n\", requestIdStruct.requestId);\n\n            // 调用CancelRequest接口，用来取消尚在处理中的请求\n            // 注：OH_MediaAssetManager_CancelRequest不是必须流程，开发者可根据实际情况选择是否调用该接口来取消尚未回调返回的资源请求\n            bool ret = OH_MediaAssetManager_CancelRequest(manager, requestIdStruct);\n            // ...\n        }\n    }\n}\n"
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
67700(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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