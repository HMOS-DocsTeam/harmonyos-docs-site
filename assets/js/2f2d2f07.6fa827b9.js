"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["465523"], {
635198(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_mechanic_kit_mechanic_kit_intro_mechanic_kit_intro_md_2f2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-mechanic-kit-mechanic-kit-intro-mechanic-kit-intro-md-2f2.json
var site_docs_system_hardware_mechanic_kit_mechanic_kit_intro_mechanic_kit_intro_md_2f2_namespaceObject = JSON.parse('{"id":"system-hardware/mechanic-kit/mechanic-kit-intro/mechanic-kit-intro","title":"Mechanic Kit简介","description":"Mechanic Kit 是机械体设备控制器提供的API集合。从API version 20起，应用可使用Mechanic Kit控制机械体设备。Mechanic Kit 提供了完整的三方机械体设备配件集成方案，满足手机与云台等设备间的交互需求。","source":"@site/docs/system-hardware/mechanic-kit/mechanic-kit-intro/mechanic-kit-intro.md","sourceDirName":"system-hardware/mechanic-kit/mechanic-kit-intro","slug":"/system-hardware/mechanic-kit/mechanic-kit-intro/","permalink":"/harmonyos-docs-site/system-hardware/mechanic-kit/mechanic-kit-intro/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Mechanic Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mechanic-kit-intro","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"振动开发指导(C/C++)","permalink":"/harmonyos-docs-site/system-hardware/sensor-service-kit/vibrator/vibrator-guidelines-capi/"},"next":{"title":"目标拍摄跟踪开发指南","permalink":"/harmonyos-docs-site/system-hardware/mechanic-kit/camera-tracking-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/mechanic-kit/mechanic-kit-intro/mechanic-kit-intro.md


const frontMatter = {
	title: 'Mechanic Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mechanic-kit-intro',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = 'Mechanic Kit简介';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "能力范围",
  "id": "能力范围",
  "level": 2
}, {
  "value": "设备连接管理",
  "id": "设备连接管理",
  "level": 3
}, {
  "value": "目标跟踪控制",
  "id": "目标跟踪控制",
  "level": 3
}, {
  "value": "设备状态监控",
  "id": "设备状态监控",
  "level": 3
}, {
  "value": "运作机制",
  "id": "运作机制",
  "level": 2
}, {
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "mechanic-kit简介",
        children: "Mechanic Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mechanic Kit 是机械体设备控制器提供的API集合。从API version 20起，应用可使用Mechanic Kit控制机械体设备。Mechanic Kit 提供了完整的三方机械体设备配件集成方案，满足手机与云台等设备间的交互需求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mechanic Kit 通过 mechanicManager 模块，实现设备连接管理、目标追踪和状态监控，支持精准控制，帮助开发者构建高质量的设备交互应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mechanic Kit 通过 mechanicManager 模块支持对连接的机械体设备进行控制和交互，包括连接管理、控制和监控。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "机械体设备管理主要面向云台等机械体设备的交互控制场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "物体跟踪"
          })
        }), "：通过机械体设备实现人脸跟踪和物体追踪，提升拍摄质量。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "拍摄控制"
          })
        }), "：手机作为控制终端，操控云台等机械体设备进行精准的角度调整和运动轨迹控制。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mechanic Kit提供设备连接、目标跟踪和精准控制功能，构建机械配件控制应用更便捷。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "能力范围",
      children: "能力范围"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mechanic Kit为开发者提供全面的机械体设备操控能力，核心功能包括："
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设备连接管理",
      children: "设备连接管理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "设备发现"
          })
        }), "：获取当前连接的机械体设备列表，支持云台等多种机械体设备类型。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "连接状态监听"
          })
        }), "：实时监听设备连接和断开状态变化。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "设备信息查询"
          })
        }), "：获取设备ID、名称、类型等基本信息。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "目标跟踪控制",
      children: "目标跟踪控制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "摄像头跟踪开关"
          })
        }), "：启用或禁用摄像头目标跟踪功能。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "跟踪布局设置"
          })
        }), "：支持默认、左侧、中间、右侧四种跟踪布局模式。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "跟踪状态监听"
          })
        }), "：监听用户操作和布局变化等跟踪事件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设备状态监控",
      children: "设备状态监控"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "当前角度查询"
          })
        }), "：实时获取设备在三个轴向的当前角度。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "旋转限制查询"
          })
        }), "：获取设备在各轴向的最大旋转范围。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "旋转轴状态监听"
          })
        }), "：监听各旋转轴的启用状态和限制情况。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "运动参数查询"
          })
        }), "：获取最大旋转速度和连续旋转时间。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运作机制",
      children: "运作机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(723979)/* ["default"] */.A) + "",
        width: "698",
        height: "618"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图注：灰色代表暂未支持。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "目标跟踪运作机制"
        })
      }), "：相机驱动检测到人脸后，上报给相机服务。相机服务结合人脸位置和相机参数，上报给机械体控制服务。控制服务将信息转换为转动指令，通过蓝牙服务下发给机械体。应用可通过开放接口控制目标跟踪功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Mechanic Kit的能力前，需满足以下条件："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "机械体设备"
          })
        }), "：机械体设备必须符合Mechanic Kit协议标准，例如厂商已对外宣称该设备支持Mechanic Kit。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "开发设备"
          })
        }), "：如果要支持目标跟踪功能，开发设备上相机驱动必须具备摄像头人脸检测能力，支持上报人脸Metadata数据（Metadata符合HDI接口规范）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "设备连接要求"
          })
        }), "：开发设备必须与机械体设备建立连接，确保通信链路正常。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "相机权限"
          })
        }), "：前台应用需要获得相机使用权限，用于支持目标追踪等视觉相关功能。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "系统权限"
          })
        }), "：某些高级功能（如转动控制）需要系统应用权限。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "硬件限制"
          })
        }), "：操作范围受限于机械体设备的运动限位。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(554678)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请在调用接口前完成条件检查，避免功能异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit暂不支持模拟器。"
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
554678(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
723979(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798834-182835fd8048e74fd419ccb3f39bbfb4.png");

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