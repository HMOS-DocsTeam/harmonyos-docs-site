"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["215940"], {
383600(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_medialibrary_kit_movingphoto_movingphotoview_guidelines_movingphotoview_guidelines_md_669_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-medialibrary-kit-movingphoto-movingphotoview-guidelines-movingphotoview-guidelines-md-669.json
var site_docs_medialibrary_kit_movingphoto_movingphotoview_guidelines_movingphotoview_guidelines_md_669_namespaceObject = JSON.parse('{"id":"medialibrary-kit/movingphoto/movingphotoview-guidelines/movingphotoview-guidelines","title":"使用MovingPhotoView播放动态照片","description":"系统提供了MovingPhotoView组件，在一些社交类、图库类应用中，可用于播放动态照片文件。","source":"@site/docs/medialibrary-kit/movingphoto/movingphotoview-guidelines/movingphotoview-guidelines.md","sourceDirName":"medialibrary-kit/movingphoto/movingphotoview-guidelines","slug":"/medialibrary-kit/movingphoto/movingphotoview-guidelines/","permalink":"/harmonyos-docs-site/medialibrary-kit/movingphoto/movingphotoview-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用MovingPhotoView播放动态照片","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/movingphotoview-guidelines","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"访问和管理动态照片资源","permalink":"/harmonyos-docs-site/medialibrary-kit/movingphoto/photoaccesshelper-movingphoto/"},"next":{"title":"设备升级继承媒体文件访问权限","permalink":"/harmonyos-docs-site/medialibrary-kit/medialibrary-request-photouris-permission/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/medialibrary-kit/movingphoto/movingphotoview-guidelines/movingphotoview-guidelines.md


const frontMatter = {
	title: '使用MovingPhotoView播放动态照片',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/movingphotoview-guidelines',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用MovingPhotoView播放动态照片';

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
}, {
  "value": "效果展示",
  "id": "效果展示",
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
        id: "使用movingphotoview播放动态照片",
        children: "使用MovingPhotoView播放动态照片"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统提供了MovingPhotoView组件，在一些社交类、图库类应用中，可用于播放动态照片文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对MovingPhotoView组件的使用，有以下约束与限制："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前不支持动态属性设置。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当前不支持设置ArkUI通用属性", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-expand-safe-area/ts-universal-attributes-expand-safe-area#expandsafearea",
          children: "expandSafeArea"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件长按触发播放时组件区域放大为1.1倍。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["该组件使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avplayer/arkts-apis-media-avplayer",
          children: "AVPlayer"
        }), "进行播放，同时开启的AVPlayer个数不建议超过3个，超过3个可能会出现视频播放卡顿现象。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入动态照片模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(719640)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "MovingPhotoViewAttribute是用于配置MovingPhotoView组件属性的关键接口。API version 21及之前版本，导入MovingPhotoView组件后需要开发者手动导入MovingPhotoViewAttribute，否则会编译报错。从API version 22开始，编译工具链识别到导入MovingPhotoView组件后，会自动导入MovingPhotoViewAttribute，无需开发者手动导入。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "MovingPhotoViewAttribute导入后，DevEco Studio会将其显示置灰，不影响开发者使用。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "API version 21及之前版本："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { MovingPhotoView, MovingPhotoViewController, MovingPhotoViewAttribute } from '@kit.MediaLibraryKit';\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "API version 22及之后版本："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { MovingPhotoView, MovingPhotoViewController } from '@kit.MediaLibraryKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取动态照片对象（", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-movingphoto/arkts-apis-photoaccesshelper-movingphoto",
            children: "MovingPhoto"
          }), "）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MovingPhoto对象需要通过photoAccessHelper接口创建或获取，MovingPhotoView只接收构造完成的MovingPhoto对象。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建、获取的方式可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/medialibrary-kit/movingphoto/photoaccesshelper-movingphoto",
            children: "访问和管理动态照片资源"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "src: photoAccessHelper.MovingPhoto | undefined = undefined;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建动态照片控制器（", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-comp/ohos-multimedia-movingphotoview/ohos-multimedia-movingphotoview#movingphotoviewcontroller",
            children: "MovingPhotoViewController"
          }), "），用于控制动态照片的播放状态（如播放、停止）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "controller: MovingPhotoViewController = new MovingPhotoViewController();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建动态照片组件。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下参数取值仅为举例，具体每个属性的取值范围，可参考API文档：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-comp/ohos-multimedia-movingphotoview/ohos-multimedia-movingphotoview",
            children: "@ohos.multimedia.movingphotoview"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: " // API version 21及之前版本导入方式：import { photoAccessHelper, MovingPhotoView, MovingPhotoViewController, MovingPhotoViewAttribute } from '@kit.MediaLibraryKit';\n // API version 22及之后版本导入方式如下：\n import { photoAccessHelper, MovingPhotoView, MovingPhotoViewController } from '@kit.MediaLibraryKit';\n\n @Entry\n @Component\n struct Index {\n   @State src: photoAccessHelper.MovingPhoto | undefined = undefined\n   @State isMuted: boolean = false\n   controller: MovingPhotoViewController = new MovingPhotoViewController();\n   build() {\n     Column() {\n       MovingPhotoView({\n         movingPhoto: this.src,\n         controller: this.controller\n       })\n         // 是否静音播放，此处由按钮控制，默认值为false非静音播放。\n         .muted(this.isMuted)\n         // 视频显示模式，默认值为Cover。\n         .objectFit(ImageFit.Cover)\n         // 播放时触发。\n         .onStart(() => {\n           console.info('onStart');\n         })\n         // 播放结束触发。\n         .onFinish(() => {\n           console.info('onFinish');\n         })\n         // 播放停止触发。\n         .onStop(() => {\n           console.info('onStop')\n         })\n         // 出现错误触发。\n         .onError(() => {\n           console.error('onError');\n         })\n \n       Row() {\n         // 按钮：开始播放。\n         Button('start')\n           .onClick(() => {\n             this.controller.startPlayback()\n           })\n           .margin(5)\n         // 按钮：停止播放。\n         Button('stop')\n           .onClick(() => {\n             this.controller.stopPlayback()\n           })\n           .margin(5)\n       }\n       .alignItems(VerticalAlign.Center)\n       .justifyContent(FlexAlign.Center)\n       .height('15%')\n     }\n   }\n }\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "效果展示",
      children: "效果展示"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(236174)/* ["default"] */.A) + "",
        width: "240",
        height: "464"
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
236174(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478609-e73b908a6d6a7074d872f4643f109d49.gif");

},
719640(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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