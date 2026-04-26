"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["714949"], {
503685(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_basic_services_kit_usb_usb_serial_dev_usbserial_overview_usbserial_overview_md_bd9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-basic-services-kit-usb-usb-serial-dev-usbserial-overview-usbserial-overview-md-bd9.json
var site_docs_system_basicfun_basic_services_kit_usb_usb_serial_dev_usbserial_overview_usbserial_overview_md_bd9_namespaceObject = JSON.parse('{"id":"system-basicfun/basic-services-kit/usb/usb-serial-dev/usbserial-overview/usbserial-overview","title":"USB串口通信服务开发概述","description":"简介","source":"@site/docs/system-basicfun/basic-services-kit/usb/usb-serial-dev/usbserial-overview/usbserial-overview.md","sourceDirName":"system-basicfun/basic-services-kit/usb/usb-serial-dev/usbserial-overview","slug":"/system-basicfun/basic-services-kit/usb/usb-serial-dev/usbserial-overview/","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/usb/usb-serial-dev/usbserial-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"USB串口通信服务开发概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/usbserial-overview","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"USB实时传输","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/usb/usb-dev/usb-host-dev/isochronoustransfer/"},"next":{"title":"USB串口配置管理","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/usb/usb-serial-dev/usbserial-configuration/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/basic-services-kit/usb/usb-serial-dev/usbserial-overview/usbserial-overview.md


const frontMatter = {
	title: 'USB串口通信服务开发概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/usbserial-overview',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'USB串口通信服务开发概述';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 3
}, {
  "value": "实现原理",
  "id": "实现原理",
  "level": 3
}, {
  "value": "约束和限制",
  "id": "约束和限制",
  "level": 3
}, {
  "value": "环境准备",
  "id": "环境准备",
  "level": 2
}, {
  "value": "环境要求",
  "id": "环境要求",
  "level": 3
}, {
  "value": "搭建环境",
  "id": "搭建环境",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "usb串口通信服务开发概述",
        children: "USB串口通信服务开发概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "USB串口通信服务主要提供USB Host设备转串口协议通信的功能，它提供获取遵循USB Host转串口标准协议的已连接的端口列表，同时提供打开端口、关闭端口、设置参数、获取参数、读取数据、写入数据和设备权限管理这些基本功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["USB串口通信服务，配置管理请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/basic-services-kit/usb/usb-serial-dev/usbserial-configuration",
        children: "USB串口配置管理"
      }), "，通信管理请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/basic-services-kit/usb/usb-serial-dev/usbserial-communication",
        children: "USB串口通信管理"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在进行USB串口通信服务开发时，开发者应了解以下基本概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "串口"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "即串行接口或串行通信接口，是采用串行通信方式的扩展接口。串行接口中数据是一位一位地顺序传送。串口特点是通信线路简单，只要一对传输线就可以实现双向通信，适用于远距离通信。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "USB串口服务主要包括两个阶段："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "识别设备并加载驱动。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "插入USB转串口设备后，USB Host设备通过USB总线发起枚举过程，获取设备描述符（如厂商ID、设备ID、USB通信设备类标识）。操作系统根据描述符匹配驱动，完成设备初始化和虚拟串口注册。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "收发数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "发送方向："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用层发送数据 → 驱动通过USB通道传输至设备 → 设备解析数据并通过物理串口发送给串口设备。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "接收方向："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设备接收物理串口数据 → 数据打包后上传至USB Host设备 → 驱动接收数据并存入串口缓冲区 → 应用层读取数据。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " USB串口收发数据流程"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(949175)/* ["default"] */.A) + "",
        width: "569",
        height: "453"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "约束和限制",
      children: "约束和限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Host设备与串口设备进行数据传输前，需先申请访问设备的权限，用户授权之后才可以传输数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数据传输时若开发者未主动设置配置参数，则使用默认配置参数（波特率：9600bps，数据位：8，校验位：0，停止位：1）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境准备",
      children: "环境准备"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "环境要求",
      children: "环境要求"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发工具及配置："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["DevEco Studio作为开发工具，是进行USB串口通信服务开发必备条件之一，开发者可以使用该工具进行开发、调试、打包等操作。请", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/download/",
            children: "下载安装"
          }), "该工具，并参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V14/ide-tools-overview-V14",
            children: "DevEco Studio使用指南"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V14/ide-create-new-project-V14",
            children: "创建工程及运行"
          }), "进行基本的操作验证，保证DevEco Studio可正常运行。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "SDK版本配置："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本模块提供的ArkTs接口，所需SDK版本为API19及以上才可使用。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "搭建环境",
      children: "搭建环境"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在PC上安装", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/download/deveco-studio",
          children: "DevEco Studio"
        }), "，要求版本在4.1及以上。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将public-SDK更新到API 19或以上。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "准备一根USB转串口线缆，线缆的USB接口连接到HarmonyOS设备USB端口（该端口需支持USB转串口），线缆的串口接口连接到目标设备的串口上。"
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
949175(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438493-20fc2f42f044fe3fdb79d36a41b75ab6.png");

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