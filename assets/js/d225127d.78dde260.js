"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["220411"], {
853059(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_vulkan_guide_vulkan_guides_vulkan_guidelines_vulkan_guidelines_md_d22_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-vulkan-guide-vulkan-guides-vulkan-guidelines-vulkan-guidelines-md-d22.json
var site_docs_ref_vulkan_guide_vulkan_guides_vulkan_guidelines_vulkan_guidelines_md_d22_namespaceObject = JSON.parse('{"id":"vulkan-guide/vulkan-guides/vulkan-guidelines/vulkan-guidelines","title":"Vulkan Surface开发指导","description":"场景介绍","source":"@site/docs-ref/vulkan-guide/vulkan-guides/vulkan-guidelines/vulkan-guidelines.md","sourceDirName":"vulkan-guide/vulkan-guides/vulkan-guidelines","slug":"/vulkan-guide/vulkan-guides/vulkan-guidelines/vulkan-guidelines","permalink":"/harmonyos-docs-site/ref/vulkan-guide/vulkan-guides/vulkan-guidelines/vulkan-guidelines","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Vulkan Surface开发指导","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/vulkan-guidelines","kit":"标准库","last_updated":"2026-04-22","slug":"vulkan-guidelines"},"sidebar":"ref","previous":{"title":"Vulkan开发概述","permalink":"/harmonyos-docs-site/ref/vulkan-guide/vulkan-guides/vulkan-overview/vulkan-overview"},"next":{"title":"Vulkan External Memory开发指导","permalink":"/harmonyos-docs-site/ref/vulkan-guide/vulkan-guides/vulkan-oh-external-memory-guidelines/vulkan-oh-external-memory-guidelines"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/vulkan-guide/vulkan-guides/vulkan-guidelines/vulkan-guidelines.md


const frontMatter = {
	title: 'Vulkan Surface开发指导',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/vulkan-guidelines',
	kit: '标准库',
	last_updated: '2026-04-22',
	slug: 'vulkan-guidelines'
};
const contentTitle = 'Vulkan Surface开发指导';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
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
        id: "vulkan-surface开发指导",
        children: "Vulkan Surface开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在HarmonyOS中，扩展VK_OHOS_surface相关的API创建出来的VkSurfaceKHR会对接到本机窗口（OHNativeWindow）模块，实现本机缓冲区（OHNativeBuffer）的轮转，用于屏幕显示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建VkSurfaceKHR对象需要通过OHNativeWindow，而OHNativeWindow需要从XComponent中获取，所以此场景下需要配合XComponent模块和NativeWindow模块一起使用。XComponent模块的具体使用方法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-add-component/napi-xcomponent-guidelines",
        children: "XComponent开发指导"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreateSurfaceOHOS (VkInstance instance, const VkSurfaceCreateInfoOHOS* pCreateInfo, const VkAllocationCallbacks* pAllocator, VkSurfaceKHR* pSurface)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建VkSurfaceKHR对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["更多的接口说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/vulkan-guide/vulkan/vulkan",
        children: "Vulkan"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下步骤说明了如何创建一个VkSurfaceKHR对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "HarmonyOS平台宏"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用平台扩展的接口，需要定义一个宏VK_USE_PLATFORM_OHOS，我们在CMakeLists.txt定义这个宏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ADD_DEFINITIONS(-DVK_USE_PLATFORM_OHOS=1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "添加动态链接库"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CMakeLists.txt中添加Vulkan的lib和周边模块的lib。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "libvulkan.so\nlibace_ndk.z.so\nlibnative_window.so\nlibnative_image.so\nlibnative_buffer.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(291487)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在程序中通过dlopen函数链接libvulkan.so动态库时不需要在CMake中增加依赖，否则会导致符号冲突。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "头文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <ace/xcomponent/native_interface_xcomponent.h>\n#include <native_window/external_window.h>\n#include <vulkan/vulkan.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "首先需要创建一个Vulkan实例"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "VkInstance instance = VK_NULL_HANDLE;\n\nVkApplicationInfo appInfo = {};\nappInfo.sType = VK_STRUCTURE_TYPE_APPLICATION_INFO;\nappInfo.pApplicationName = \"vulkanExample\";\nappInfo.pEngineName = \"vulkanExample\";\nappInfo.apiVersion = VK_API_VERSION_1_3;\n\nVkInstanceCreateInfo instanceCreateInfo = {};\ninstanceCreateInfo.sType = VK_STRUCTURE_TYPE_INSTANCE_CREATE_INFO;\ninstanceCreateInfo.pNext = NULL;\ninstanceCreateInfo.pApplicationInfo = &appInfo;\n\nstd::vector<const char *> instanceExtensions = {\n    VK_KHR_SURFACE_EXTENSION_NAME,\n    VK_OHOS_SURFACE_EXTENSION_NAME // Surface扩展\n};\ninstanceCreateInfo.enabledExtensionCount = static_cast<uint32_t>(instanceExtensions.size());\ninstanceCreateInfo.ppEnabledExtensionNames = instanceExtensions.data();\n\nvkCreateInstance(&instanceCreateInfo, nullptr, &instance);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "获取OHNativeWindow"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["OHNativeWindow需要从XComponent组件中获取，下面提供一份从XComponent组件中获取OHNativeWindow的代码示例，XComponent模块的具体使用方法请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-add-component/napi-xcomponent-guidelines",
            children: "XComponent模块的介绍文档"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "ets/pages/Index.ets中增加一个XComponent组件。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "XComponent({\n    id: 'xcomponentId',\n    type: 'surface',\n    libraryname: 'entry'\n})\n.margin({ bottom: 20 })\n.width(360)\n.height(360)\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "从XComponent组件中获取OHNativeWindow。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// XComponent在创建Surface时的回调函数\nvoid OnSurfaceCreatedCB(OH_NativeXComponent *component, void *window) {\n    // 在回调函数里可以拿到OHNativeWindow\n    OHNativeWindow *nativeWindow = static_cast<OHNativeWindow *>(window);\n}\n\nstatic napi_value Init(napi_env env, napi_value exports) {\n    napi_property_descriptor desc[] = {{\"add\", nullptr, Add, nullptr, nullptr, nullptr, napi_default, nullptr}};\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n\n    napi_value exportInstance = nullptr;\n    OH_NativeXComponent *nativeXComponent = nullptr;\n    // 获取nativeXComponent\n    napi_get_named_property(env, exports, OH_NATIVE_XCOMPONENT_OBJ, &exportInstance);\n    napi_unwrap(env, exportInstance, reinterpret_cast<void **>(&nativeXComponent));\n    // 获取XComponentId\n    char idStr[OH_XCOMPONENT_ID_LEN_MAX + 1] = {};\n    uint64_t idSize = OH_XCOMPONENT_ID_LEN_MAX + 1;\n    OH_NativeXComponent_GetXComponentId(nativeXComponent, idStr, &idSize);\n\n    // 声明一个XComponent的Callback\n    OH_NativeXComponent_Callback callback;\n    // 注册OnSurfaceCreated回调函数\n    callback.OnSurfaceCreated = OnSurfaceCreatedCB;\n    // 将callback注册给nativeXComponent\n    OH_NativeXComponent_RegisterCallback(nativeXComponent, &callback);\n\n    return exports;\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "创建VkSurfaceKHR对象"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "VkSurfaceKHR surface = VK_NULL_HANDLE;\nVkSurfaceCreateInfoOHOS surfaceCreateInfo = {};\nsurfaceCreateInfo.sType = VK_STRUCTURE_TYPE_SURFACE_CREATE_INFO_OHOS;\nsurfaceCreateInfo.window = nativeWindow; // 这里的nativeWindow就是从上一步骤OnSurfaceCreatedCB回调函数中拿到的\nint err = vkCreateSurfaceOHOS(instance, &surfaceCreateInfo, NULL, &surface);\nif (err != VK_SUCCESS) {\n    // Create Surface Failed.\n}\n"
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
291487(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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