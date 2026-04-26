"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["736394"], {
811598(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_profiler_appendix_ide_graphics_profiler_ide_graphics_profiler_md_43e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-profiler-appendix-ide-graphics-profiler-ide-graphics-profiler-md-43e.json
var site_docs_ide_profiler_appendix_ide_graphics_profiler_ide_graphics_profiler_md_43e_namespaceObject = JSON.parse('{"id":"ide-profiler-appendix/ide-graphics-profiler/ide-graphics-profiler","title":"GPU帧捕获工具：Graphics Profiler抓帧入口","description":"Graphics Profiler（图形性能调优）是专为GPU分析和优化提供的一种调试分析解决方案，可帮助OpenGL ES游戏或Vulkan游戏提升性能，分析绘制和计算问题。从DevEco Studio 6.0.0 Beta1版本开始，提供Graphics Profiler工具的抓帧入口，该工具用于对HarmonyOS手机设备进行调试，需使用调试证书。","source":"@site/docs/ide-profiler-appendix/ide-graphics-profiler/ide-graphics-profiler.md","sourceDirName":"ide-profiler-appendix/ide-graphics-profiler","slug":"/ide-profiler-appendix/ide-graphics-profiler/","permalink":"/harmonyos-docs-site/ide-profiler-appendix/ide-graphics-profiler/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"GPU帧捕获工具：Graphics Profiler抓帧入口","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-graphics-profiler","kit":"devtools/profiler","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"快捷键","permalink":"/harmonyos-docs-site/ide-profiler-appendix/ide-shortcut-key/"},"next":{"title":"错误码","permalink":"/harmonyos-docs-site/ide-profiler-appendix/ide-profiler-errorcode/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-profiler-appendix/ide-graphics-profiler/ide-graphics-profiler.md


const frontMatter = {
	title: 'GPU帧捕获工具：Graphics Profiler抓帧入口',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-graphics-profiler',
	kit: 'devtools/profiler',
	last_updated: '2026-04-24'
};
const contentTitle = 'GPU帧捕获工具：Graphics Profiler抓帧入口';

const assets = {

};



const toc = [{
  "value": "操作步骤",
  "id": "操作步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "gpu帧捕获工具graphics-profiler抓帧入口",
        children: "GPU帧捕获工具：Graphics Profiler抓帧入口"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Graphics Profiler（图形性能调优）是专为GPU分析和优化提供的一种调试分析解决方案，可帮助OpenGL ES游戏或Vulkan游戏提升性能，分析绘制和计算问题。从DevEco Studio 6.0.0 Beta1版本开始，提供Graphics Profiler工具的抓帧入口，该工具用于对HarmonyOS手机设备进行调试，需使用调试证书。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "操作步骤",
      children: "操作步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将需要分析的使用OpenGL ES或Vulkan API接口开发的应用推送到设备，并确认应用完成安装。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在DevEco Studio顶部菜单栏中点击View > Tool Windows > Graphics Profiler进入帧捕获页面。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在帧捕获页面，可配置Ref All Resources和Verify Buffer Access两个参数，配置完成后点击Launch APP拉起应用。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ref All Resources：默认关闭，在打开此选项后，抓帧时捕获所有活动资源，无论抓取的这一帧是否使用活动资源，都保存在Trace中。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify Buffer Access：默认关闭，设置校验Buffer是否可以访问。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此处为可选配置，不配置也可直接点击Launch APP拉起应用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(562578)/* ["default"] */.A) + "",
            width: "841",
            height: "183"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在帧捕获界面拉起应用，成功建立连接后，Capture按钮点亮。设置抓帧数量，点击Capture按钮，等待帧捕获完成。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Scope：不可修改，默认为Frame。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Count：抓帧数量设置，范围为1-10帧。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(923427)/* ["default"] */.A) + "",
            width: "841",
            height: "276"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当抓帧完成，在下方显示界面中选择一条捕获帧，点击", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(325148)/* ["default"] */.A) + "",
            width: "23",
            height: "18"
          }), "按钮，可自动打开Graphics Profiler工具解析捕获帧信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(712530)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "887",
            height: "359"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(306769)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "抓帧文件名格式为：[应用包名] _ [抓帧时间] _frame [帧号].rdc。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Graphics Profiler工具一次只能解析一个rdc文件。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若首次使用，需根据界面提示下载Graphics Profiler执行工具，并在菜单栏", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File > Settings"
            })
          }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DevEco Studio > Preferences/Settings"
            })
          }), "） ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "> Tools > Graphics Profiler"
            })
          }), "中配置工具路径。默认路径为：工具安装路径/frame_profiler/FrameProfiler.exe（macOS中为工具安装路径/Contents/macOS/FrameProfiler）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(320597)/* ["default"] */.A) + "",
            width: "556",
            height: "53"
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
923427(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
562578(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
306769(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
712530(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913598-8093d4c04c127c71ba9910943dc5872a.png");

},
320597(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
325148(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASCAYAAACw50UTAAAAwElEQVQ4EWP49OnTf1phBloZDDIXq+EHDh3/X1Le+j+noA6OWzsm/3/85ClJvsRqeFlV+/8bN++gGLRtx77/dU19/x89foIijs/nWA0HuRibpp27D/7PL26E+wbms+r67v9nzl3C0EOS4dgsBIldvnL9f019D20MB1mAzbdUcfmo4RiRBovkwRHm5eBMdBunK2GuhdE3bt7+D9ID48NorKnlIJbsD8sw2GhQUQHSAzMURmM1HCZJKT1qOEZ4g4IUAI/98PoQdFL1AAAAAElFTkSuQmCC");

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