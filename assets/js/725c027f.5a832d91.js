"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["816822"], {
78188(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_location_kit_location_kit_intro_location_kit_intro_md_725_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-location-kit-location-kit-intro-location-kit-intro-md-725.json
var site_docs_location_kit_location_kit_intro_location_kit_intro_md_725_namespaceObject = JSON.parse('{"id":"location-kit/location-kit-intro/location-kit-intro","title":"Location Kit简介","description":"Location Kit开发概述","source":"@site/docs/location-kit/location-kit-intro/location-kit-intro.md","sourceDirName":"location-kit/location-kit-intro","slug":"/location-kit/location-kit-intro/","permalink":"/harmonyos-docs-site/location-kit/location-kit-intro/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Location Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/location-kit-intro","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"关于实况窗数量约束的问题","permalink":"/harmonyos-docs-site/live-view-kit-guide/liveview-faq/liveview-faq-5/"},"next":{"title":"申请位置权限开发指导","permalink":"/harmonyos-docs-site/location-kit/location-preparation/location-permission-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/location-kit/location-kit-intro/location-kit-intro.md


const frontMatter = {
	title: 'Location Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/location-kit-intro',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Location Kit简介';

const assets = {

};



const toc = [{
  "value": "Location Kit开发概述",
  "id": "location-kit开发概述",
  "level": 2
}, {
  "value": "Location Kit简介",
  "id": "location-kit简介-1",
  "level": 3
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 3
}, {
  "value": "支持的国家/地区",
  "id": "支持的国家地区",
  "level": 3
}, {
  "value": "支持的设备",
  "id": "支持的设备",
  "level": 3
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
        id: "location-kit简介",
        children: "Location Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "location-kit开发概述",
      children: "Location Kit开发概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "移动终端设备已经深入人们日常生活的方方面面，如查看所在城市的天气、新闻轶事、出行打车、旅行导航、运动记录。这些习以为常的活动，都离不开定位用户终端设备的位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用户处于这些丰富的使用场景中时，系统的位置能力可以提供实时准确的位置数据。对于开发者，设计基于位置体验的服务，也可以使应用的使用体验更贴近每个用户。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用在实现基于设备位置的功能时，如：驾车导航，记录运动轨迹等，可以调用该模块的API接口，完成位置信息的获取。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "location-kit简介-1",
      children: "Location Kit简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "位置子系统使用多种定位技术提供服务，如GNSS定位、基站定位、WLAN/蓝牙定位（基站定位、WLAN/蓝牙定位后续统称“网络定位技术”）；通过这些定位技术，无论用户设备在室内或是户外，都可以准确地确定设备位置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "坐标"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "系统以1984年世界大地坐标系统为参考，使用经度、纬度数据描述地球上的一个位置。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GNSS定位"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "基于全球导航卫星系统，包含：GPS、GLONASS、北斗、Galileo等，通过导航卫星、设备芯片提供的定位算法，来确定设备准确位置。定位过程具体使用哪些定位系统，取决于用户设备的硬件能力。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "基站定位"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据设备当前驻网基站和相邻基站的位置，估算设备当前位置。此定位方式的定位结果精度相对较低，并且需要设备可以访问蜂窝网络。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "WLAN、蓝牙定位"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据设备可搜索到的周围WLAN、蓝牙设备位置，估算设备当前位置。此定位方式的定位结果精度依赖设备周围可见的固定WLAN、蓝牙设备的分布，密度较高时，精度也相较于基站定位方式更高，同时也需要设备可以访问网络。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Location Kit除了提供基础的定位服务之外，还提供了地理围栏、地理编码等功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "地理围栏（英语：GeoFence）是虚拟地理边界，当设备进入、离开某个特定地理区域时，可以接收自动通知和警告。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "地理编码（英语：GeoCode）是表示地理实体（位置或要素）的代码。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "正地理编码：根据地址获取地点的经纬度。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "逆地理编码：获取经纬度对应的地点信息。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "位置能力作为系统为应用提供的一种基础服务，需要应用在所使用的业务场景，向系统主动发起请求，并在业务场景结束时，主动结束此请求，在此过程中系统会将实时的定位结果上报给应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用设备的位置能力，需要用户进行确认并主动开启位置开关。如果位置开关没有开启，系统不会向任何应用提供定位服务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备位置信息属于用户敏感数据，所以即使用户已经开启位置开关，应用在获取设备位置前仍需向用户申请位置访问权限。在用户确认允许后，系统才会向应用提供定位服务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Location Kit在不同的设备上提供不同的能力，并且部分能力依赖于硬件的支持。例如GPS、北斗等定位芯片，可以为设备提供GNSS定位能力；在没有定位芯片但具有WLAN或者蜂窝网络的设备，可以获取WLAN定位、基站定位能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的国家地区",
      children: "支持的国家/地区"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持的设备中Wearable设备支持以下", (0,jsx_runtime.jsx)(_components.a, {
        href: "/location-kit/location-kit-appendix#%E6%94%AF%E6%8C%81%E7%9A%84%E5%9B%BD%E5%AE%B6%E5%9C%B0%E5%8C%BA",
        children: "支持的国家/地区"
      }), "，其他设备仅支持中国境内（不包含中国香港、中国澳门、中国台湾）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的设备",
      children: "支持的设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本kit仅适用于Phone、Tablet、PC/2in1和Wearable。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本Kit支持模拟器，但与真机存在差异，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification",
        children: "模拟器与真机的差异"
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