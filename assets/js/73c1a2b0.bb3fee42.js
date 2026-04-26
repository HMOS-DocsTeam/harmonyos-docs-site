"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["362675"], {
880744(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_audio_device_audio_input_device_management_audio_input_device_management_md_73c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-audio-device-audio-input-device-management-audio-input-device-management-md-73c.json
var site_docs_audio_kit_audio_device_audio_input_device_management_audio_input_device_management_md_73c_namespaceObject = JSON.parse('{"id":"audio-kit/audio-device/audio-input-device-management/audio-input-device-management","title":"查询和监听音频输入设备","description":"本模块提供音频输入设备管理能力，包括查询输入设备信息、监听设备连接状态变化等。具体API说明可参考文档AudioRoutingManager。","source":"@site/docs/audio-kit/audio-device/audio-input-device-management/audio-input-device-management.md","sourceDirName":"audio-kit/audio-device/audio-input-device-management","slug":"/audio-kit/audio-device/audio-input-device-management/","permalink":"/harmonyos-docs-site/audio-kit/audio-device/audio-input-device-management/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"查询和监听音频输入设备","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-input-device-management","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"实现音频低时延耳返","permalink":"/harmonyos-docs-site/audio-kit/audio-recording/audio-ear-monitor-loopback/"},"next":{"title":"查询和监听音频输出设备","permalink":"/harmonyos-docs-site/audio-kit/audio-device/audio-output-device-management/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/audio-device/audio-input-device-management/audio-input-device-management.md


const frontMatter = {
	title: '查询和监听音频输入设备',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-input-device-management',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '查询和监听音频输入设备';

const assets = {

};



const toc = [{
  "value": "创建AudioRoutingManager实例",
  "id": "创建audioroutingmanager实例",
  "level": 2
}, {
  "value": "支持的音频输入设备类型",
  "id": "支持的音频输入设备类型",
  "level": 2
}, {
  "value": "获取输入设备信息",
  "id": "获取输入设备信息",
  "level": 2
}, {
  "value": "监听设备连接状态变化",
  "id": "监听设备连接状态变化",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
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
        id: "查询和监听音频输入设备",
        children: "查询和监听音频输入设备"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本模块提供音频输入设备管理能力，包括查询输入设备信息、监听设备连接状态变化等。具体API说明可参考文档", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audioroutingmanager/arkts-apis-audio-audioroutingmanager",
        children: "AudioRoutingManager"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下各步骤示例为片段代码，可通过示例代码右下方链接获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/Media/Audio/AudioRoutingManagerSampleJS",
        children: "完整示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建audioroutingmanager实例",
      children: "创建AudioRoutingManager实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用AudioRoutingManager管理音频设备前，需要先导入模块并创建实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit'; // 导入audio模块。\n\nlet audioManager = audio.getAudioManager(); // 需要先创建AudioManager实例。\nlet audioRoutingManager = audioManager.getRoutingManager(); // 再调用AudioManager的方法创建AudioRoutingManager实例。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持的音频输入设备类型",
      children: "支持的音频输入设备类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前支持的音频输入设备见下表："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WIRED_HEADSET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "有线耳机，带麦克风。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLUETOOTH_SCO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蓝牙设备SCO（Synchronous Connection Oriented）连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MIC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "麦克风。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USB_HEADSET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USB耳机，带麦克风。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NEARLINK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "星闪设备。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取输入设备信息",
      children: "获取输入设备信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audioroutingmanager/arkts-apis-audio-audioroutingmanager#getdevices9",
        children: "getDevices"
      }), "方法可以获取当前所有输入设备的信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit'; // 导入audio模块。\n// ...\n  audioRoutingManager.getDevices(audio.DeviceFlag.INPUT_DEVICES_FLAG).then((data: audio.AudioDeviceDescriptors) => {\n    console.info('Promise returned to indicate that the device list is obtained.');\n\n    // ...\n  });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "监听设备连接状态变化",
      children: "监听设备连接状态变化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以设置监听事件来监听设备连接状态的变化，当有设备连接或断开时触发回调："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';  // 导入audio模块。\n// ...\n  // 监听音频设备状态变化。\n  audioRoutingManager.on('deviceChange', audio.DeviceFlag.INPUT_DEVICES_FLAG,\n    (deviceChanged: audio.DeviceChangeAction) => {\n    console.info('device change type : ' + deviceChanged.type);  // 设备连接状态变化,0为连接,1为断开连接。\n    console.info('device descriptor size : ' + deviceChanged.deviceDescriptors.length);\n    console.info('device change descriptor : ' + deviceChanged.deviceDescriptors[0].deviceRole);  // 设备角色。\n    console.info('device change descriptor : ' + deviceChanged.deviceDescriptors[0].deviceType);  // 设备类型。\n\n    // ...\n  });\n  // ...\n  // 取消监听音频设备状态变化。\n  audioRoutingManager.off('deviceChange', (deviceChanged: audio.DeviceChangeAction) => {\n    console.info('Should be no callback.');\n  });\n"
      })
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