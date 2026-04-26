"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["397125"], {
117252(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_driver_development_kit_terms_terms_md_0b4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-driver-development-kit-terms-terms-md-0b4.json
var site_docs_system_hardware_driver_development_kit_terms_terms_md_0b4_namespaceObject = JSON.parse('{"id":"system-hardware/driver-development-kit/terms/terms","title":"扩展外设驱动开发术语","description":"A","source":"@site/docs/system-hardware/driver-development-kit/terms/terms.md","sourceDirName":"system-hardware/driver-development-kit/terms","slug":"/system-hardware/driver-development-kit/terms/","permalink":"/harmonyos-docs-site/system-hardware/driver-development-kit/terms/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"扩展外设驱动开发术语","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/terms","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"常见问题","permalink":"/harmonyos-docs-site/system-hardware/driver-development-kit/externaldevice-faqs/"},"next":{"title":"Multimodal Awareness Kit简介","permalink":"/harmonyos-docs-site/system-hardware/multimodal-awareness-kit/multimodalawareness-kit-intro/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/driver-development-kit/terms/terms.md


const frontMatter = {
	title: '扩展外设驱动开发术语',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/terms',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '扩展外设驱动开发术语';

const assets = {

};



const toc = [{
  "value": "A",
  "id": "a",
  "level": 2
}, {
  "value": "AMS",
  "id": "ams",
  "level": 3
}, {
  "value": "B",
  "id": "b",
  "level": 2
}, {
  "value": "BMS",
  "id": "bms",
  "level": 3
}, {
  "value": "C",
  "id": "c",
  "level": 2
}, {
  "value": "CDB",
  "id": "cdb",
  "level": 3
}, {
  "value": "D",
  "id": "d",
  "level": 2
}, {
  "value": "DDK",
  "id": "ddk",
  "level": 3
}, {
  "value": "H",
  "id": "h",
  "level": 2
}, {
  "value": "HID设备",
  "id": "hid设备",
  "level": 3
}, {
  "value": "HID协议",
  "id": "hid协议",
  "level": 3
}, {
  "value": "L",
  "id": "l",
  "level": 2
}, {
  "value": "Logical Block",
  "id": "logical-block",
  "level": 3
}, {
  "value": "S",
  "id": "s",
  "level": 2
}, {
  "value": "SCSI",
  "id": "scsi",
  "level": 3
}, {
  "value": "U",
  "id": "u",
  "level": 2
}, {
  "value": "USB 串口",
  "id": "usb-串口",
  "level": 3
}, {
  "value": "非标外设",
  "id": "非标外设",
  "level": 2
}, {
  "value": "标准外设",
  "id": "标准外设",
  "level": 2
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
        id: "扩展外设驱动开发术语",
        children: "扩展外设驱动开发术语"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "a",
      children: "A"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ams",
      children: "AMS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AMS（Ability Manager Service）用于协调各Ability运行关系及对生命周期进行调度的系统服务。在驱动开发过程中用于拉起和关闭扩展驱动能力DriverExtensionAbility。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "b",
      children: "B"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bms",
      children: "BMS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BMS（Bundle Manager Service）在HarmonyOS上主要负责应用的安装、卸载和数据管理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "c",
      children: "C"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cdb",
      children: "CDB"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CDB（Command Descriptor Block）即命令描述块，是 SCSI协议中用于发送命令的标准数据结构。CDB是一个固定长度的字节数组，包含了SCSI命令的操作码（Opcode）以及相关的参数，用于告诉设备执行什么操作（如读取、写入、查询等）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "d",
      children: "D"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ddk",
      children: "DDK"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DDK（Driver Development Kit）是HarmonyOS基于扩展外设框架，为开发者提供的驱动应用开发的工具包，可针对非标USB串口设备，开发对应的驱动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "h",
      children: "H"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hid设备",
      children: "HID设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HID设备是“Human Interface Device”的缩写，中文意思是“人机接口设备”。它是一类用于人与计算机或其他电子设备交互的设备，主要用于输入和输出操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hid协议",
      children: "HID协议"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HID协议是一种专门为人机交互设备设计的标准化通信协议，通过报告描述符和数据报告实现设备与主机之间的高效通信。它具有即插即用、低延迟、低带宽和高度兼容的特点，广泛应用于各种输入和控制设备中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "l",
      children: "L"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "logical-block",
      children: "Logical Block"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "逻辑块（Logical Block）是一个基本的数据存储单位。它代表设备上的一块固定大小的数据区域，通常用于数据读写操作。逻辑块的大小可以是512字节、1024字节、2048字节等，具体大小取决于设备的配置和文件系统的设计。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "s",
      children: "S"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scsi",
      children: "SCSI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SCSI是一种用于计算机和外围设备如硬盘驱动器、磁带驱动器、光盘驱动器、扫描仪等之间通信的标准化协议集。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "u",
      children: "U"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "usb-串口",
      children: "USB 串口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "USB 串口（USB-to-Serial）是指一种接口转换技术，它允许通过 USB（通用串行总线）接口实现与传统串行端口（如 RS-232、RS-485 等）之间的数据通信。这种技术通常通过专门的硬件适配器或特定的内置芯片来实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "非标外设",
      children: "非标外设"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "非标外设（也称为自定义外设或专有外设）是指不遵循通用标准或专门为特定应用场景定制设计的外围设备。这类设备往往需要专门的软件支持或者特殊的接口来实现与主机系统的通信。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "标准外设",
      children: "标准外设"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "标准外设指的是遵循行业广泛接受的标准规范设计的外围设备（USB 键盘、鼠标）。这些设备通常具有统一的接口协议、物理尺寸和电气特性，使得其可以在不同的系统之间互换使用。"
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