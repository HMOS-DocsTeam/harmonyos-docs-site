"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["402943"], {
462936(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_basic_services_kit_basic_services_kit_overview_basic_services_kit_overview_md_d1d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-basic-services-kit-basic-services-kit-overview-basic-services-kit-overview-md-d1d.json
var site_docs_system_basicfun_basic_services_kit_basic_services_kit_overview_basic_services_kit_overview_md_d1d_namespaceObject = JSON.parse('{"id":"system-basicfun/basic-services-kit/basic-services-kit-overview/basic-services-kit-overview","title":"Basic Services Kit简介","description":"Basic Services Kit（基础服务）作为基础服务套件，为应用开发者提供常用的基础能力。比如常用的剪贴板读写、文件上传下载、文件压缩、文件打印、进程间/线程间通信、设备管理、应用账号管理等能力都由本Kit提供。","source":"@site/docs/system-basicfun/basic-services-kit/basic-services-kit-overview/basic-services-kit-overview.md","sourceDirName":"system-basicfun/basic-services-kit/basic-services-kit-overview","slug":"/system-basicfun/basic-services-kit/basic-services-kit-overview/","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/basic-services-kit-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Basic Services Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/basic-services-kit-overview","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用网络领航员进行网络模拟","permalink":"/harmonyos-docs-site/system-network/network-debug-optimize/network-navigator/"},"next":{"title":"公共事件简介","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/app-events/common-event-communication/common-event-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/basic-services-kit/basic-services-kit-overview/basic-services-kit-overview.md


const frontMatter = {
	title: 'Basic Services Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/basic-services-kit-overview',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Basic Services Kit简介';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "能力范围",
  "id": "能力范围",
  "level": 2
}, {
  "value": "与其他kit的关系",
  "id": "与其他kit的关系",
  "level": 2
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "basic-services-kit简介",
        children: "Basic Services Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Basic Services Kit（基础服务）作为基础服务套件，为应用开发者提供常用的基础能力。比如常用的剪贴板读写、文件上传下载、文件压缩、文件打印、进程间/线程间通信、设备管理、应用账号管理等能力都由本Kit提供。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Basic Services Kit为开发者提供了多种基础能力，满足开发者不同场景的开发需求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "典型使用场景举例："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "剪贴板读写："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "本地复制粘贴：比如在A应用中复制一段文字，粘贴到其他应用中。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "跨设备复制粘贴：比如在A设备浏览器复制一段文本，粘贴到B设备的备忘录中。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "文件上传下载："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "小文件前台上传下载：发布社交动态（图片、短视频等）、发送文件给好友、保存图片到本地等，通常数据量较小，要给用户即时反馈。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "大文件后台上传下载：云盘数据同步、下载电影，通常数据量较大，可后台执行，支持断点续传。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "进程间/线程间通信："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "进程间通信：比如ExtensionAbility发送事件给主进程。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "线程间通信：比如worker线程处理完网络请求后将事件传递回UI主线程。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "能力范围",
      children: "能力范围"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据不同使用场景分类，本Kit主要包含如下能力："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "数据文件处理："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-pasteboard/js-apis-pasteboard",
              children: "剪贴板"
            }), "：提供内容复制粘贴能力，支持多种数据类型包括文本、HTML数据、URI、PixelMap等。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-zlib/js-apis-zlib",
              children: "压缩"
            }), "：提供文件压缩解压缩的能力。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-print/js-apis-print",
              children: "打印"
            }), "：提供基础文件打印的能力，比如传入文件进行打印、设置打印参数等。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-request/js-apis-request",
              children: "上传下载"
            }), "：提供文件上传下载、后台传输代理的基础能力。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "进程间/线程间通信："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/js-apis-commoneventmanager/js-apis-commoneventmanager",
              children: "公共事件"
            }), "：提供进程间通信的能力，包括订阅、发布、退订公共事件等，相关开发指南请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-basicfun/basic-services-kit/app-events/common-event-communication/common-event-overview",
              children: "公共事件简介"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/js-apis-emitter/js-apis-emitter",
              children: "Emitter"
            }), "：提供线程内通信的能力，包括订阅、发布、退订自定义事件等，相关开发指南请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-basicfun/basic-services-kit/app-events/itc-with-emitter",
              children: "使用Emitter进行线程间通信"
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设备管理："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/device-management-arkts/js-apis-device-info/js-apis-device-info",
              children: "设备信息"
            }), "：提供查询产品信息的能力，比如查询设备类型、设备品牌名称、产品系列、产品版本号等。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-settings/js-apis-settings",
              children: "设置数据项"
            }), "：提供查询系统设置数据项的能力，比如查询是否启用飞行模式、是否启用触摸浏览等。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/device-management-arkts/js-apis-battery-info/js-apis-battery-info",
              children: "电量信息查询"
            }), "：提供查询电量信息的能力。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/device-management-arkts/js-apis-power/js-apis-power",
              children: "系统电源管理"
            }), "：提供系统电源管理相关的能力，比如查询屏幕状态能力等。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/device-management-arkts/js-apis-runninglock/js-apis-runninglock",
              children: "RunningLock锁操作"
            }), "：提供RunningLock锁相关操作的能力，包括创建、查询、持锁、释放锁等操作。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/device-management-arkts/js-apis-thermal/js-apis-thermal",
              children: "热管理"
            }), "：提供热管理相关的能力，比如热档位查询等。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/device-management-arkts/js-apis-usbmanager/js-apis-usbmanager",
              children: "USB管理"
            }), "：提供USB设备管理相关的能力，比如查询USB设备列表、批量数据传输、控制命令传输、权限控制等，相关开发指南请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-basicfun/basic-services-kit/usb/usb-dev/usbhost-overview",
              children: "USB服务开发概述"
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其他："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/account-management-arkts/js-apis-appaccount/js-apis-appaccount",
              children: "应用账号管理"
            }), "：提供应用账号的期管理以及数据管理的能力，相关开发指南请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-basicfun/basic-services-kit/account-management/application-account/manage-application-account",
              children: "管理应用账号"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base",
              children: "公共回调"
            }), "：定义了HarmonyOS ArkTS接口的公共回调类型，包括接口调用时出现的公共回调和公共错误信息。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-date-time/js-apis-date-time",
              children: "时间时区"
            }), "：提供获取系统时间以及系统时区的能力。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "与其他kit的关系",
      children: "与其他kit的关系"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-overview",
          children: "ArkTS Kit"
        }), "：ArkTS Kit中的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-concurrency/multithread-concurrency/multi-thread-concurrency-overview",
          children: "多线程并发(Worker和Taskpool)"
        }), "需要使用本Kit中的Emitter进行线程间通信。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/abilitykit-overview",
          children: "Ability Kit"
        }), "：Ability Kit中的进程间通信需要使用本Kit中的公共事件。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/core-file-kit/core-file-kit-intro",
          children: "Core File Kit"
        }), "：与Core File Kit的使用场景不同，Core File Kit主要提供访问和管理文件的能力，开发者可以在应用文件访问和文件分享、应用数据备份恢复等场景使用Core File Kit进行开发，而涉及到文件压缩、文件上传下载、文件打印等场景时需要使用本Kit进行开发。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit支持模拟器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模拟器与真机存在通用差异，详情请参见“", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification",
        children: "模拟器与真机的差异"
      }), "”。"]
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