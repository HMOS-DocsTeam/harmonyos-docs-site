"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["677446"], {
336935(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_debug_app_ide_code_debugging_ide_debug_arkts_ide_debug_arkts_attach_ide_debug_arkts_attach_md_0d8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-debug-app-ide-code-debugging-ide-debug-arkts-ide-debug-arkts-attach-ide-debug-arkts-attach-md-0d8.json
var site_docs_ide_debug_app_ide_code_debugging_ide_debug_arkts_ide_debug_arkts_attach_ide_debug_arkts_attach_md_0d8_namespaceObject = JSON.parse('{"id":"ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-attach/ide-debug-arkts-attach","title":"attach启动调试","description":"开发者也可以通过将调试程序attach到已运行的应用进行调试。","source":"@site/docs/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-attach/ide-debug-arkts-attach.md","sourceDirName":"ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-attach","slug":"/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-attach/","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-attach/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"attach启动调试","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-arkts-attach","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"debug启动调试","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-debug/"},"next":{"title":"等待调试","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-attach-to-process/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-attach/ide-debug-arkts-attach.md


const frontMatter = {
	title: 'attach启动调试',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-arkts-attach',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = 'attach启动调试';

const assets = {

};



const toc = [{
  "value": "前提条件",
  "id": "前提条件",
  "level": 2
}, {
  "value": "使用约束",
  "id": "使用约束",
  "level": 2
}, {
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
        id: "attach启动调试",
        children: "attach启动调试"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者也可以通过将调试程序attach到已运行的应用进行调试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Attach Debugger和Debug的区别在于，Attach Debugger to Process可以先运行应用/元服务，然后再启动调试，或者直接启动设备上已安装的应用/元服务进行调试；而Debug是直接运行应用/元服务后立即启动调试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前设备上被attach的应用代码和本地代码一致，且已提前进行构建生成必要的sourceMap文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用约束",
      children: "使用约束"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "attach不支持的场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本地无源码。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "bundleName不匹配，将出现提示“The selected process does not match the bundlename of the current project!”，但不阻塞调试过程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(832643)/* ["default"] */.A) + "",
            width: "456",
            height: "256"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "操作步骤",
      children: "操作步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在工具栏中，选择调试的设备，并单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Attach Debugger to Process"
            })
          }), (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(345082)/* ["default"] */.A) + "",
            width: "17",
            height: "18"
          }), "启动调试。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(961800)/* ["default"] */.A) + "",
            width: "569",
            height: "27"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择要调试的应用进程，若应用bundleName与当前工程不一致，则需勾选Show all process。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(254804)/* ["default"] */.A) + "",
            width: "448",
            height: "588"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(548070)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "正常情况下，attach调试仅支持debug签名的应用，从DevEco Studio 6.0.2 Beta1版本开始，PC/2in1上的应用，如果使用了release签名并且配置了ohos.permission.kernel.ALLOW_DEBUG权限，也支持被attach调试。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择需要使用的调试配置，或者使用默认配置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(478940)/* ["default"] */.A) + "",
            width: "452",
            height: "593"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择需要调试的Debug type，若选择已创建的Run/Debug configuration进行attach调试，此时Debug type不可改变，只可在Run/Debug configuration界面修改。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(599478)/* ["default"] */.A) + "",
            width: "917",
            height: "601"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(540141)/* ["default"] */.A) + "",
            width: "1040",
            height: "644"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OK"
            })
          }), "开始attach调试。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(126500)/* ["default"] */.A) + "",
            width: "457",
            height: "595"
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
126500(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753627-9b57dbbab511f22f9fce10a59b308b22.png");

},
478940(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913674-c17de56aea4a8f5b96aed244f7f9389b.png");

},
540141(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753688-422e3c3ee3d2137bf8c085cf4af158d0.png");

},
832643(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753631-95b835983c0315366ff658b16ec98a97.png");

},
345082(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAASCAYAAAC9+TVUAAAB3UlEQVQ4jbWTP2gTYRjGf9eWNkFOBzMUC3UxCDo4CJaCYhy6XcHJwUkScVRwElyjkzici4gXcdGhIJgeiNQlKshxQ1Ecmp6xchD/cM3ZXC65XHK5c+qVmosUiu/08bx8P57nfXkFx3Ei9llj+wX8P4g/6CHrCoa9EWuGvYGsK/iD3t4gtreF2awj6wrVRo11+yuyrmA269jeViJESBrsl9/fuPfhIRNj4wD0w4AbZ65yIpPduxNl9TkREf0woB8GADxefYbpfP+3k/vaIwCsTmOkbXHyAEfEaQBuzl2L9Yntx2bHJggDmn4rEQDQ6rWpt34yNT6Z7ATgs7XGA/0JALfPXmf24AwAplPnznsZgMsnL3L+6HwyZNlY4Zdrof/4CMC52TkOTYksZhdGOhuKoxpvdjXemRoAi9kFoihCVVU0TRsCFIvFHcjdC7eoNmo8/bQ0FEcQBCRJAkgExSve7NgMwkHceGtqLBsrO7kFgVwuRzqdHh1ne8VJcQBc16VUKuF5HqlUim63Owy5cuoSAH7g82Lt1a47cV0XRVGwLItMJkM+n6dSqcTRYsj8zOn40/HDx3i5/ppqowaAqqoxoFAoIIpiPCMYcTt/V7vdplwuI0kSoijGehRFCILAH2aT4kxVvaGKAAAAAElFTkSuQmCC");

},
548070(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
599478(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753682-c0ade3a763016f9b6aa4cfd96ee680af.png");

},
961800(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
254804(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753623-e313f3c9b54e7d0e2df6bbffe2a2887c.png");

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