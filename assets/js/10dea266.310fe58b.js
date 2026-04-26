"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["380349"], {
343026(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_car_kit_guide_car_preparations_car_preparations_md_10d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-car-kit-guide-car-preparations-car-preparations-md-10d.json
var site_docs_system_hardware_car_kit_guide_car_preparations_car_preparations_md_10d_namespaceObject = JSON.parse('{"id":"system-hardware/car-kit-guide/car-preparations/car-preparations","title":"开发准备","description":"应用在使用Car Kit能力前，开发者需要完成的配置：配置编译模式、配置权限、配置能力。","source":"@site/docs/system-hardware/car-kit-guide/car-preparations/car-preparations.md","sourceDirName":"system-hardware/car-kit-guide/car-preparations","slug":"/system-hardware/car-kit-guide/car-preparations/","permalink":"/harmonyos-docs-site/system-hardware/car-kit-guide/car-preparations/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"开发准备","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/car-preparations","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Car Kit简介","permalink":"/harmonyos-docs-site/system-hardware/car-kit-guide/car-introduction/"},"next":{"title":"导航流转至车机","permalink":"/harmonyos-docs-site/system-hardware/car-kit-guide/car-implement-navi-hop/car-navi-hop/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/car-kit-guide/car-preparations/car-preparations.md


const frontMatter = {
	title: '开发准备',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/car-preparations',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '开发准备';

const assets = {

};



const toc = [{
  "value": "配置编译模式",
  "id": "配置编译模式",
  "level": 2
}, {
  "value": "配置权限",
  "id": "配置权限",
  "level": 2
}, {
  "value": "配置能力",
  "id": "配置能力",
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
        id: "开发准备",
        children: "开发准备"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用在使用Car Kit能力前，开发者需要完成的配置：配置编译模式、配置权限、配置能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置编译模式",
      children: "配置编译模式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在打包应用时，请在DevEco Studio中，点击右上角", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(969480)/* ["default"] */.A) + "",
        width: "22",
        height: "20"
      }), "图标，将编译模式修改为“release”，然后点击右下角的“Apply”即可。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(960653)/* ["default"] */.A) + "",
        width: "465",
        height: "310"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置权限",
      children: "配置权限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Car Kit为开发者提供了两类接口：导航类接口和出行互联类接口，使用对应接口需要分别配置相应的权限。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用导航类接口需要配置ohos.permission.ACCESS_SERVICE_NAVIGATION_INFO权限。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用出行互联类接口需要配置ohos.permission.ACCESS_CAR_DISTRIBUTED_ENGINE权限。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者需要在entry/src/main路径下的应用配置文件module.json5中配置所需权限。示例代码如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    \"requestPermissions\": [\n      {\n        \"name\": \"ohos.permission.ACCESS_CAR_DISTRIBUTED_ENGINE\"\n      },\n      {\n        \"name\": \"ohos.permission.ACCESS_SERVICE_NAVIGATION_INFO\"\n      }\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置能力",
      children: "配置能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者需要在entry/src/main路径下的应用配置文件module.json5的abilities数组中配置导航流转能力或HiCar能力，具体步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#skills%E6%A0%87%E7%AD%BE",
            children: "skills"
          }), "中配置导航信息服务的actions。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(585598)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生态应用如有其它skills配置，请避免直接修改现有的配置，需在skills数组内追加。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"skills\": [\n  {\n    \"entities\": [\n      \"entity.system.default\"\n    ],\n    \"actions\": [\n      \"action.navigation.infoservice\"\n    ]\n  },\n  // 其它 skills 配置\n  {\n    // ...\n  }\n]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在元数据信息metadata中配置导航流转能力或HiCar能力。具体示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\": {\n    \"abilities\": [\n     {\n        \"name\": \"xxxx\",\n        \"srcEntry\": \"xxxx\",\n        \"description\": \"xxxx\",\n        \"skills\": [\n          {\n            \"entities\": [\n              \"entity.system.home\"\n            ],\n            \"actions\": [\n              \"action.system.home\"\n            ]\n          },\n          {\n            \"entities\": [\n              \"entity.system.default\"\n            ],\n            \"actions\": [\n              \"action.navigation.infoservice\"\n            ]\n          }\n        ],\n        \"metadata\": [\n          {\n            \"name\" : \"carHopCapability\",\n            \"value\" : \"carHopNavi,getOnCarNavi,insideCarNavi,getOffCarNavi\"\n          },\n          {\n            \"name\" : \"hiCarCapability\",\n            \"value\" :\"basicNavi,shortcutOper,multiScreenUI,mapUIOper,updateNaviStatus,searchPOI\"\n          }\n        ]\n      }\n    ]\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "metadata的name可选值：carHopCapability、hiCarCapability。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "name取值为carHopCapability时，代表适配了导航流转的能力。对应的value值根据不同的业务场景取值如下："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "value"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "场景"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "carHopNavi"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "碰一碰导航流转，不可与碰一碰地址流转并存。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "carHopAddress"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "碰一碰地址流转，不可与碰一碰导航流转并存。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "getOnCarNavi"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "上车导航自动流转。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "insideCarNavi"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "车内导航自动流转。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "getOffCarNavi"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "下车步行导航流转。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "name取值为hiCarCapability时，代表适配了HiCar的能力。对应的value值根据不同的业务场景取值如下："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "value"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "场景"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "basicNavi"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "适配基础导航功能，对应指令：  1. START_NAVIGATION  2. STOP_NAVIGATION"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "shortcutOper"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "适配快捷操作功能，对应指令：  1. GO_HOME  2. GO_TO_COMPANY"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "multiScreenUI"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "多屏显示适配功能，对应指令：  1. START_MAP_LAYER  2. STOP_MAP_LAYER"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "mapUIOper"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "地图UI控制功能，对应指令：  1. ZOOM_IN_MAP  2. ZOOM_OUT_MAP  3. CHANGE_THEME"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "updateNaviStatus"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "适配地图状态和地图元数据，对应指令：  1. START_UPDATE_NAVIGATION_STATUS  2. STOP_UPDATE_NAVIGATION_STATUS"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "searchPOI"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "适配地址搜索功能，对应指令：  SEARCH_POI"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["关于指令的更多详情请查阅", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/car-api/car-api-references/car-navigationinfomgr/car-navigationinfomgr#commandtype",
            children: "CommandType"
          }), "。"]
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
969480(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAIAAAAGHlpnAAAAx0lEQVQ4EbWUsQ4DIQiG74mNcWTjCexz8AR1cSasdpbBF2mil8v1al24/hNR+EBEt9aaGtRa2wzhe+j/Ec+udaWrKpj50cXMC8ocISKI6E5CRBGZgiYIEQkhnMJ3M4QwpVwRtdaR33tPRK8uIvLeO+cQsdZ6qeWKYOaRlIhyztCVcyaisf7dlw9ESinGOFxLKQAwbAAopQw7xphSOhdyN0JVrQdR1RvaqarWSx19so7W0W3TgB8U6zM7QGvjYy7Wrr92N/vH9wZrGRCVdVGbOwAAAABJRU5ErkJggg==");

},
960653(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958466-b82bece89ee6294587a1507bfa3ffed0.png");

},
585598(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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