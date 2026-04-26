"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["623528"], {
364281(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_wear_engine_kit_guide_wearengine_verification_wearengine_verification_md_a00_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-wear-engine-kit-guide-wearengine-verification-wearengine-verification-md-a00.json
var site_docs_system_hardware_wear_engine_kit_guide_wearengine_verification_wearengine_verification_md_a00_namespaceObject = JSON.parse('{"id":"system-hardware/wear-engine-kit-guide/wearengine_verification/wearengine_verification","title":"调测验证","description":"按照预置条件进行分类。","source":"@site/docs/system-hardware/wear-engine-kit-guide/wearengine_verification/wearengine_verification.md","sourceDirName":"system-hardware/wear-engine-kit-guide/wearengine_verification","slug":"/system-hardware/wear-engine-kit-guide/wearengine_verification/","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_verification/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"调测验证","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/wearengine_verification","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用间消息通信","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_watchdev/watch_p2p_communication/"},"next":{"title":"如果工程已有APP ID，是否需要重新申请，填写新的APP ID","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_faq/wearengine_faq-1/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/wear-engine-kit-guide/wearengine_verification/wearengine_verification.md


const frontMatter = {
	title: '调测验证',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/wearengine_verification',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '调测验证';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
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
        id: "调测验证",
        children: "调测验证"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按照预置条件进行分类。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "预置条件一："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "手机已安装华为运动健康App，已登录华为账号。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "手机侧已安装三方App。"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "用例名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "步骤"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "预期结果"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "三方应用拉起用户授权页面"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 打开手机侧三方App，调用用户授权接口。  2. 在用户授权页面手动打开相应的权限开关。  3. 在授权页面的最下方，点击“确定”。  4. 调用步骤3中授予权限的对应接口。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 步骤2中，用户授权页面打开成功。  - 步骤4中，接口调用时不会返回The HUAWEI ID is not authorized的错误信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "预置条件二："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "手机已安装华为运动健康App，已登录华为账号。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "手机侧已安装三方App。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "穿戴设备侧安装对应的穿戴设备三方App。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "穿戴设备已在华为运动健康App绑定，连接正常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "已完成用户授权。"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "用例名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "步骤"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "预期结果"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "获取已配对穿戴设备"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手机侧三方App调用获取配对设备接口。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接口调用成功，返回配对的穿戴设备信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "手机拉起穿戴设备侧应用"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["手机侧三方App调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#startremoteapp",
              children: "startRemoteApp"
            }), "接口拉起穿戴设备侧三方App。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接口调用成功，能够拉起穿戴设备侧应用，接口调用返回码201或202。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "穿戴设备ping手机"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "穿戴设备侧三方App调用ping接口ping手机侧三方App。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接口调用成功，能够ping通手机侧三方App，接口调用返回码205。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "手机向穿戴设备发送消息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 穿戴设备侧三方App调用接口注册消息接收器。  2. 在手机侧三方App调用消息发送接口，向穿戴设备侧三方App发送消息。  3. 查看穿戴设备侧App接收到的消息是否与手机侧发送的消息一致。  4. 穿戴设备侧三方App调用取消注册消息接收器接口。  5. 在手机侧三方App调用消息发送接口，向穿戴设备侧发送消息。  6. 检查穿戴设备侧是否收到消息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 步骤2中，手机侧三方App发送消息成功，发送进度最终为100，接口调用返回码为207。  - 步骤3中，穿戴设备侧三方App收到的消息与手机侧发送的消息一致。  - 步骤5中，手机侧三方App发送消息失败，接口调用返回码为206。  - 步骤6中，穿戴设备侧三方App未收到消息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "手机向穿戴设备发送文件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 穿戴设备侧三方App调用接口注册文件接收器。  2. 在手机侧三方App调用文件发送接口，向穿戴设备侧三方App发送文件。  3. 查看穿戴设备侧App接收到的文件是否与发送的文件一致。  4. 穿戴设备侧三方App调用取消注册文件接收器接口。  5. 在手机侧三方App调用文件发送接口，向穿戴设备侧发送文件。  6. 检查穿戴设备侧是否收到文件。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 步骤2中，手机侧三方App发送文件成功，发送进度最终为100，接口调用返回码为207。  - 步骤3中，穿戴设备侧三方App收到的文件与手机侧发送的文件一致（三方应用通过穿戴设备侧demo实现）。  - 步骤5中，手机侧三方App发送文件失败，接口调用返回码为206。  - 步骤6中，穿戴设备侧三方App未收到文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "穿戴设备向手机发送消息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 手机侧三方App调用接口注册消息接收器。  2. 在穿戴设备侧三方App调用消息发送接口，向手机侧三方App发送消息。  3. 查看手机侧三方App接收到的消息是否与穿戴设备侧发送的消息一致。  4. 手机侧调用取消注册消息接收器。  5. 在穿戴设备侧调用消息发送接口，向手机侧发送消息。  6. 检查手机侧是否收到消息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 步骤2中，穿戴设备侧三方App发送消息成功，发送进度最终为100，接口调用返回码为207。  - 步骤3中，手机侧三方App收到的消息与穿戴设备侧发送的消息一致。  - 步骤5中，穿戴设备侧三方App发送消息失败，接口调用返回码为206。  - 步骤6中，手机侧三方App未收到消息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "穿戴设备向手机发送文件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 手机侧三方App调用接口注册文件接收器。  2. 在穿戴设备侧三方App调用文件发送接口，向手机侧三方App发送文件。  3. 查看手机侧App接收到的文件是否与穿戴侧发送的文件一致。  4. 手机侧三方App调用取消注册文件接收器接口。  5. 在穿戴设备侧三方App调用文件发送接口，向手机侧发送文件。  6. 检查手机侧是否收到文件。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 步骤2中，穿戴设备侧三方App发送文件成功，发送进度最终为100，接口调用返回码为207。  - 步骤3中，手机侧三方App收到的文件与穿戴设备侧发送的文件一致（三方应用通过手机侧demo实现）。  - 步骤5中，穿戴设备侧三方App发送文件失败，接口调用返回码为199开头的错误码。  - 步骤6中，手机侧三方App未收到文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "查询穿戴设备状态"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以查询电量和佩戴状态为例  1. 手机侧三方App调用接口查询穿戴设备电量。  2. 佩戴穿戴设备。  3. 手机侧三方App调用接口查询穿戴设备的佩戴状态。  4. 取消佩戴穿戴设备。  5. 手机侧三方App调用接口查询穿戴设备的佩戴状态。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 步骤1中，能够查询到穿戴设备的电量值。  - 步骤3中，手机侧三方App查询到的设备状态为已佩戴状态。  - 步骤5中，手机侧三方App查询到的设备状态为未佩戴状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "订阅穿戴设备状态"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以订阅连接状态和佩戴状态为例  1. 手机侧三方App调用接口订阅设备连接状态。  2. 拉开手机与穿戴设备的距离，直到手机与穿戴设备的连接断开。  3. 重新连接手机和穿戴设备。  4. 手机侧三方App调用接口订阅设备佩戴状态。  5. 佩戴穿戴设备。  6. 取消佩戴穿戴设备。  7. 手机侧三方App取消订阅连接状态与佩戴状态。  8. 取消佩戴穿戴设备并拉开手机与穿戴设备的距离直至连接断开。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 步骤2中，手机侧三方App收到穿戴设备断联事件上报。  - 步骤3中，手机侧三方App收到穿戴设备连接事件上报。  - 步骤5中，手机侧三方App收到穿戴设备佩戴事件上报。  - 步骤6中，手机侧三方App收到穿戴设备取消佩戴的事件上报。  - 步骤8中，手机侧三方App未收到取消佩戴与设备断联的事件上报。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "手机向穿戴设备发送通知"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 手机侧三方App调用接口向穿戴设备发送通知。  2. 查看穿戴设备侧接收到的通知是否与手机侧发送的通知一致。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "步骤2中，穿戴设备侧收到的通知与手机侧发送的通知一致，包括消息内容、标题、按钮等。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "预置条件三："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "手机已安装华为运动健康App，已登录华为账号。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "手机侧已安装三方App。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "穿戴设备侧安装对应的穿戴设备三方App。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "穿戴设备已在华为运动健康App绑定，连接正常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "已完成用户授权。"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "用例名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "步骤"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "预期结果"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "获取穿戴设备传感器列表"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手机侧应用调用接口获取穿戴设备的传感器列表。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接口调用成功，返回设备传感器列表，如ACC等，包括传感器的名称、ID、Type、精度、分辨率等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "读取穿戴设备传感器数据"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 手机侧三方App调用接口读取穿戴设备传感器数据。  2. 手机侧三方App调用接口停止读取穿戴设备传感器数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 步骤1中，接口调用成功，手机侧三方APP收到穿戴设备上报的数据，数据内容包括数据值和时间戳。  - 步骤2中，接口调用成功，手机侧三方APP不再收到穿戴设备上报的数据。"
          })]
        })]
      })]
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