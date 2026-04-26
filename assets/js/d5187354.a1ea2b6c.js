"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["871581"], {
601777(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_basic_services_kit_usb_usb_glossary_usb_glossary_md_d51_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-basic-services-kit-usb-usb-glossary-usb-glossary-md-d51.json
var site_docs_system_basicfun_basic_services_kit_usb_usb_glossary_usb_glossary_md_d51_namespaceObject = JSON.parse('{"id":"system-basicfun/basic-services-kit/usb/usb-glossary/usb-glossary","title":"USB服务开发术语","description":"B","source":"@site/docs/system-basicfun/basic-services-kit/usb/usb-glossary/usb-glossary.md","sourceDirName":"system-basicfun/basic-services-kit/usb/usb-glossary","slug":"/system-basicfun/basic-services-kit/usb/usb-glossary/","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/usb/usb-glossary/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"USB服务开发术语","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/usb-glossary","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"常见问题","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/usb/faqs-usb/"},"next":{"title":"示例服务器开发概述","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/update/sample-server-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/basic-services-kit/usb/usb-glossary/usb-glossary.md


const frontMatter = {
	title: 'USB服务开发术语',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/usb-glossary',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'USB服务开发术语';

const assets = {

};



const toc = [{
  "value": "B",
  "id": "b",
  "level": 2
}, {
  "value": "Baud Rate（波特率）",
  "id": "baud-rate波特率",
  "level": 3
}, {
  "value": "Bulk Transfer（批量传输）",
  "id": "bulk-transfer批量传输",
  "level": 3
}, {
  "value": "C",
  "id": "c",
  "level": 2
}, {
  "value": "Control Transfer（控制传输）",
  "id": "control-transfer控制传输",
  "level": 3
}, {
  "value": "D",
  "id": "d",
  "level": 2
}, {
  "value": "Data Bit（数据位）",
  "id": "data-bit数据位",
  "level": 3
}, {
  "value": "Device（设备）",
  "id": "device设备",
  "level": 3
}, {
  "value": "E",
  "id": "e",
  "level": 2
}, {
  "value": "Endpoint（端点）",
  "id": "endpoint端点",
  "level": 3
}, {
  "value": "H",
  "id": "h",
  "level": 2
}, {
  "value": "Host（主机）",
  "id": "host主机",
  "level": 3
}, {
  "value": "I",
  "id": "i",
  "level": 2
}, {
  "value": "Interface（接口）",
  "id": "interface接口",
  "level": 3
}, {
  "value": "Interrupt Transfer（中断传输）",
  "id": "interrupt-transfer中断传输",
  "level": 3
}, {
  "value": "Isochronous Transfer（实时传输）",
  "id": "isochronous-transfer实时传输",
  "level": 3
}, {
  "value": "P",
  "id": "p",
  "level": 2
}, {
  "value": "Parity Bit（校验位）",
  "id": "parity-bit校验位",
  "level": 3
}, {
  "value": "Pipe（管道）",
  "id": "pipe管道",
  "level": 3
}, {
  "value": "S",
  "id": "s",
  "level": 2
}, {
  "value": "Stop Bit（停止位）",
  "id": "stop-bit停止位",
  "level": 3
}, {
  "value": "U",
  "id": "u",
  "level": 2
}, {
  "value": "USBConfiguration（配置）",
  "id": "usbconfiguration配置",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "usb服务开发术语",
        children: "USB服务开发术语"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "b",
      children: "B"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "baud-rate波特率",
      children: "Baud Rate（波特率）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "波特率表示串口设备每秒传输的符号数（符号即二进制位，包括数据位、起始位、停止位、校验位），单位为Baud（波特），例如9600 Baud表示每秒传输9600个符号。收发双方必须使用相同的波特率，否则数据无法正确解析。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bulk-transfer批量传输",
      children: "Bulk Transfer（批量传输）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一种USB服务的单向数据传输模式，适用于大数据量的传输场景。在传输过程中使用批量事务（IN/OUT令牌包、数据包、握手包）处理方式提高总体传输量，并通过错误检测和重传机制保证数据传输的可靠性，但批量传输在几种USB传输模式中优先级最低。其主要应用于U盘、打印机、扫描仪等对实时性要求低但需要高可靠性的设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "c",
      children: "C"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "control-transfer控制传输",
      children: "Control Transfer（控制传输）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一种USB服务的双向传输模式，适用于设备配置、状态查询和命令传输场景。在传输过程中包含三个阶段：建立阶段（SETUP事务）、数据阶段（可选批量事务）和状态阶段（握手确认）。其主要应用于设备枚举（如读取描述符）、初始化配置、固件升级等基础控制操作的场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "d",
      children: "D"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "data-bit数据位",
      children: "Data Bit（数据位）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据位表示每个数据包中实际传输的有效二进制位数，决定了单个字符的数据容量。常见的取值包括5位、6位、7位和8位。数据位决定单次传输的信息量，数据位越多，单次传输信息量越大，但需更多时间同步。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "device设备",
      children: "Device（设备）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Device（设备）指连接到Host（主机）的外设，负责执行特定功能（如存储、输入输出等），被动响应Host的指令。例如U盘、鼠标、打印机等均属于Device（设备）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "e",
      children: "E"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "endpoint端点",
      children: "Endpoint（端点）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "端点是设备（Device）与主机（Host）之间进行数据传输的逻辑终点，是USB通信的基本单元。每个端点具有唯一的地址和方向（IN表示设备（Device）到主机（Host），OUT表示主机（Host）到设备（Device））。每个端点代表一个单向或双向的数据传输通道。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "h",
      children: "H"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "host主机",
      children: "Host（主机）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Host是指具有USB主机功能的设备。Host是控制和管理USB总线的设备，它负责管理总线上的连接设备，并协调数据传输和通信。Host通常是计算机或其他主机，如PC机、智能手机、平板等。Host可以连接和控制多个设备，通过USB端口与设备相连，提供数据传输和充电的功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "i",
      children: "I"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interface接口",
      children: "Interface（接口）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Interface（接口）是USB设备中功能模块的逻辑抽象，代表设备的一种独立功能（如音频、存储或通信功能）。每个接口包含一组端点（Endpoint），并通过配置（USBConfiguration）管理其激活状态。通过接口的灵活配置，USB设备能够实现多功能复用和动态功能切换，这是USB协议支持即插即用和复杂外设的核心机制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interrupt-transfer中断传输",
      children: "Interrupt Transfer（中断传输）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一种USB服务的单向数据传输模式，主机周期性轮询设备（如1ms~255ms），保证实时性和正确性。事务结构与批量传输类似，但优先级更高。适用于键盘、鼠标、游戏手柄等需要低延迟响应的输入设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isochronous-transfer实时传输",
      children: "Isochronous Transfer（实时传输）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一种USB服务的单向数据传输模式，无握手包，通过固定带宽保证实时性但允许数据丢失。事务仅包含令牌和数据阶段，适合流媒体传输。适用于摄像头、USB音响、视频会议设备等对连续性要求高、容错性强的场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "p",
      children: "P"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "parity-bit校验位",
      children: "Parity Bit（校验位）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "校验位是附加在数据帧中的1位二进制值，根据数据位的内容按特定规则生成。常见的有，奇校验（Odd）数据位+校验位中“1”的总数为奇数，偶校验（Even）数据位+校验位中“1”的总数为偶数，无校验（None）不添加校验位。校验位通过验证数据位中“1”的数量，判断数据在传输过程中是否发生位翻转、噪声干扰等错误，增加校验位会略微降低传输效率，但能提高容错性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pipe管道",
      children: "Pipe（管道）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pipe（管道） 是主机（Host）与设备端点（Endpoint）之间的逻辑通信通道，用于数据传输。Pipe并非物理连接，而是主机（Host）与设备端点（Endpoint）之间的抽象通信路径。每个Pipe对应设备的一个特定端点（Endpoint）。Pipe是单向的，方向由端点决定（例如IN端点对应主机接收数据的Pipe，OUT端点对应主机发送数据的Pipe）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "s",
      children: "S"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stop-bit停止位",
      children: "Stop Bit（停止位）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "停止位位于数据帧末尾，是逻辑高电平信号，用于标识一个字符（数据包）传输的结束。典型长度有1位和2位（实际开发中1位最常用，2位多用于抗干扰场景）。其核心作用是为接收端提供时序同步容错空间，并确保数据完整性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "u",
      children: "U"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "usbconfiguration配置",
      children: "USBConfiguration（配置）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "USBConfiguration表示USB设备的一种功能集合。一个USB设备可以支持多个配置，但同一时间只能激活一个配置。每个USBConfiguration包含多个Interface（接口），每个接口代表一种独立功能（如数据传输、音频输出等）。每个Interface下又包含多个Endpoint（端点），用于实际的数据传输（如控制传输、批量传输等）。"
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