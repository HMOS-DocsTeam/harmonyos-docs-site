"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["573220"], {
217807(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_connectivity_kit_bluetooth_bluetooth_overview_bluetooth_overview_md_5cb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-connectivity-kit-bluetooth-bluetooth-overview-bluetooth-overview-md-5cb.json
var site_docs_system_network_connectivity_kit_bluetooth_bluetooth_overview_bluetooth_overview_md_5cb_namespaceObject = JSON.parse('{"id":"system-network/connectivity-kit/bluetooth/bluetooth-overview/bluetooth-overview","title":"蓝牙服务开发概述","description":"概述","source":"@site/docs/system-network/connectivity-kit/bluetooth/bluetooth-overview/bluetooth-overview.md","sourceDirName":"system-network/connectivity-kit/bluetooth/bluetooth-overview","slug":"/system-network/connectivity-kit/bluetooth/bluetooth-overview/","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/bluetooth/bluetooth-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"蓝牙服务开发概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/bluetooth-overview","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Connectivity Kit简介","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/connectivity-kit-intro/"},"next":{"title":"蓝牙设置","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/bluetooth/br-development-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/connectivity-kit/bluetooth/bluetooth-overview/bluetooth-overview.md


const frontMatter = {
	title: '蓝牙服务开发概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/bluetooth-overview',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '蓝牙服务开发概述';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "传统蓝牙",
  "id": "传统蓝牙",
  "level": 2
}, {
  "value": "低功耗蓝牙",
  "id": "低功耗蓝牙",
  "level": 2
}, {
  "value": "蓝牙设备地址类型",
  "id": "蓝牙设备地址类型",
  "level": 2
}, {
  "value": "设备角色",
  "id": "设备角色",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    del: "del",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
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
        id: "蓝牙服务开发概述",
        children: "蓝牙服务开发概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "蓝牙技术是一种无线通信技术，可以在短距离内传输数据，该技术规范由蓝牙技术联盟（Bluetooth Special Interest Group, SIG）制定。可以用于连接手机、耳机、音箱、键盘、鼠标、打印机等各种设备。目前蓝牙有两种常见的技术分类：传统蓝牙（BR/EDR）和低功耗蓝牙（BLE）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "蓝牙的实现原理是基于无线电技术的短距离通信协议，使用2.4GHz频段的无线电波进行通信，使用频率跳跃技术（Frequency Hopping Spread Spectrum，FHSS）来避免与其他无线设备的干扰。在通信过程中，蓝牙设备会发送和接收数据包，并且使用不同的蓝牙协议来控制通信流程和数据传输。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "传统蓝牙",
      children: "传统蓝牙"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["蓝牙基础率/增强数据率（Basic Rate/Enhanced Data Rate，BR/EDR），也被称为传统蓝牙。蓝牙EDR技术是蓝牙BR技术的增强版本，有更高的数据传输速率，比BR快2", (0,jsx_runtime.jsx)(_components.del, {
        children: "3倍，最高可达2"
      }), "3Mbps。在理想条件下，通信范围约100米。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传统蓝牙提供了多样化且成熟的技术协议。例如：高级音频分发、免提通话、个人局域网、电话簿访问等协议。利用这些技术，使得传统蓝牙可以满足许多不同应用场景下的多样化需求。例如：使用蓝牙耳机、音响等设备听音乐，通过车载访问手机电话本、短信等数据，实现设备间的数据共享。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "低功耗蓝牙",
      children: "低功耗蓝牙"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "低功耗蓝牙（Bluetooth Low Energy, BLE）是从蓝牙4.0开始支持的技术。相比于传统蓝牙，BLE在保障一定的传输速率情况下，具备更低功耗的特点，广泛使用于续航要求较高的蓝牙设备中。其最高传输速率可达1Mbps，通信范围通常为10米左右。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相比于传统蓝牙，BLE以其低功耗的特点，广泛应用于穿戴设备、智能家居和物联网传感器等领域。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "蓝牙设备地址类型",
      children: "蓝牙设备地址类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在蓝牙服务开发过程中，涉及两种维度的地址类型定义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(391351)/* ["default"] */.A) + "",
        width: "1154",
        height: "302"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 蓝牙设备地址类型"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "蓝牙子系统定义的地址类型。蓝牙设备的实际MAC地址属于用户的隐私信息，在发现设备的过程中，蓝牙子系统会给每个蓝牙外设分配一个虚拟MAC地址，并保存该虚拟MAC地址和外设实际MAC地址的映射关系。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "蓝牙协议定义的地址类型。蓝牙协议定义的蓝牙设备地址类型主要可以分为两大类：Public Address和Random Address。传统蓝牙使用的是Public Address，低功耗蓝牙可以使用Public Address和Random Address。其中，Random Address又包括Static Random Adress和Private Random Address两种类型。Private Random Address可以继续分为Non-resolvable Private Address和Resolvable Private Address两种类型。每种地址类型介绍如下："
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Public Address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "公共设备地址，该类型地址由IEEE组织分配并保证唯一性，永久不变。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Static Random Address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "静态随机地址，该类型地址在蓝牙设备上电初始化时随机生成，本次上电周期内不会改变。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resolvable Private Address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可解析私有地址，该类型地址通过一组地址解析密钥（Identity Resolving Key, IRK）生成，会定期（蓝牙协议建议15分钟更新一次）发生变化。若一个蓝牙设备A拥有另一个蓝牙设备B的IRK，即可通过解析设备B的可解析私有地址来识别设备B。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Non-resolvable Private Address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可解析私有地址，该类型地址是完全随机的临时地址，会定期（蓝牙协议建议15分钟更新一次）发生变化，难以追踪。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设备角色",
      children: "设备角色"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在蓝牙设备的配对和连接过程中，根据设备在连接建立阶段所表现出的主动或被动行为，可以将其定义为中心设备（Central）和外围设备（Peripheral）两种角色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在传统蓝牙中，通过查询来发现周围设备，并主动发起配对和连接的设备称为中心设备，响应其他设备的查询并接受配对和连接请求的设备称为外围设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在低功耗蓝牙中，扫描其他设备并主动发起连接的设备称为中心设备，发送广播并接受其他设备连接请求的设备称为外围设备。"
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
391351(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478419-4e46126ed7873ad874e78c40e7e87c98.png");

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