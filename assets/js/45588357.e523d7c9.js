"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["522471"], {
23242(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_development_fundamentals_application_configuration_file_fa_deviceconfig_structure_deviceconfig_structure_md_455_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-development-fundamentals-application-configuration-file-fa-deviceconfig-structure-deviceconfig-structure-md-455.json
var site_docs_development_fundamentals_application_configuration_file_fa_deviceconfig_structure_deviceconfig_structure_md_455_namespaceObject = JSON.parse('{"id":"development-fundamentals/application-configuration-file-fa/deviceconfig-structure/deviceconfig-structure","title":"deviceConfig内部结构","description":"deviceConfig 包含设备上的应用配置信息，支持 default、tv、car、wearable 等属性。","source":"@site/docs/development-fundamentals/application-configuration-file-fa/deviceconfig-structure/deviceconfig-structure.md","sourceDirName":"development-fundamentals/application-configuration-file-fa/deviceconfig-structure","slug":"/development-fundamentals/application-configuration-file-fa/deviceconfig-structure/","permalink":"/harmonyos-docs-site/development-fundamentals/application-configuration-file-fa/deviceconfig-structure/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"deviceConfig内部结构","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/deviceconfig-structure","kit":"getting-started","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"app对象内部结构","permalink":"/harmonyos-docs-site/development-fundamentals/application-configuration-file-fa/app-structure/"},"next":{"title":"module对象内部结构","permalink":"/harmonyos-docs-site/development-fundamentals/application-configuration-file-fa/module-structure/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/development-fundamentals/application-configuration-file-fa/deviceconfig-structure/deviceconfig-structure.md


const frontMatter = {
	title: 'deviceConfig内部结构',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/deviceconfig-structure',
	kit: 'getting-started',
	last_updated: '2026-04-22'
};
const contentTitle = 'deviceConfig内部结构';

const assets = {

};



const toc = [{
  "value": "deviceConfig对象内部结构",
  "id": "deviceconfig对象内部结构",
  "level": 2
}, {
  "value": "deviceConfig设备对象内部结构",
  "id": "deviceconfig设备对象内部结构",
  "level": 2
}, {
  "value": "network对象内部结构",
  "id": "network对象内部结构",
  "level": 2
}, {
  "value": "securityConfig对象内部结构",
  "id": "securityconfig对象内部结构",
  "level": 2
}, {
  "value": "domainSettings对象内部结构",
  "id": "domainsettings对象内部结构",
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
        id: "deviceconfig内部结构",
        children: "deviceConfig内部结构"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "deviceConfig 包含设备上的应用配置信息，支持 default、tv、car、wearable 等属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deviceconfig对象内部结构",
      children: "deviceConfig对象内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "deviceConfig对象内部结构说明"
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可缺省"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "default"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置为default类型的应用，虽然可以正常编译构建，但是不支持发布上架。建议使用phone替代。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tablet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识平板特有的应用配置信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识智慧屏特有的应用配置信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "car"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识车机特有的应用配置信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wearable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识智能穿戴特有的应用配置信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2in1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识PC设备，主要交互方式以多窗口、多任务及键盘鼠标操作为主，充分发挥设备的生产力属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "phone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识手机特有的应用配置信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "liteWearable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识运动手表特有的应用配置信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["上表中各设备对象的内部结构说明参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#deviceconfig%E8%AE%BE%E5%A4%87%E5%AF%B9%E8%B1%A1%E5%86%85%E9%83%A8%E7%BB%93%E6%9E%84",
        children: "deviceConfig设备对象内部结构"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deviceconfig设备对象内部结构",
      children: "deviceConfig设备对象内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "deviceConfig设备对象内部结构说明"
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可缺省"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用或Ability的进程名。如果在deviceConfig标签下配置了process标签，则应用的所有Ability运行在此进程中。如果在abilities标签下为某个Ability配置了process标签，则该Ability运行在此进程中。该标签最大长度为31。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keepAlive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用是否始终保持运行状态，仅支持系统应用配置，三方应用配置不生效。  - true：应用始终保持为运行状态。系统启动时，该应用会被系统驱动起来。应用进程退出后，系统也会重新启动应用进程。  - false：应用不会始终保持为运行状态。系统启动时，该应用不会被系统驱动起来。应用进程退出后，系统不会重新启动应用进程。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "supportBackup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用是否支持备份和恢复。  - true：该应用支持执行备份或恢复操作。  - false：该应用不支持执行备份或恢复操作。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "compressNativeLibs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该字段在打包HAP时标识libs库是否以压缩方式存储。  - true：libs库以压缩方式存储。  - false：libs库以不压缩方式存储。  在应用安装时，该字段用于标识libs库是否需要解压出来（API16及之后版本支持，之前的版本均默认解压libs库）。  - true：解压。  - false：不解压。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省。打包HAP时缺省值为false，安装应用时未配置则默认为true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识网络安全性配置。该标签允许应用通过配置文件的安全声明自定义其网络安全，无需修改应用代码。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "network对象内部结构",
      children: "network对象内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表3"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "network对象内部结构说明"
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可缺省"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cleartextTraffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识是否允许应用使用明文网络流量（例如，明文HTTP）。  - true：允许应用使用明文流量的请求。  - false：拒绝应用使用明文流量的请求。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "securityConfig"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用的网络安全配置信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "securityconfig对象内部结构",
      children: "securityConfig对象内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表4"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "securityConfig对象内部结构说明"
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可缺省"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "domainSettings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识自定义域名范围的安全配置，支持多层嵌套。一个domainSettings对象中可嵌套更小域名范围的domainSettings对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省为空。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "domainsettings对象内部结构",
      children: "domainSettings对象内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表5"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "domainSettings对象内部结构说明"
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可缺省"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cleartextPermitted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识自定义域名范围内是否允许明文流量传输。cleartextTraffic和securityConfig同时存在时，以cleartextPermitted的值为准。  - true：允许明文流量传输。  - false：拒绝明文流量传输。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "domains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识域名配置信息，包含两个参数：subdomains和name。  - subdomains：表示是否包含子域名。取值为\"true\"时，表示该规则将与相应域名及所有子域名（包括子域名的子域名）匹配；取值为\"false\"时，规则仅适用于精确匹配项。  - name：表示域名名称，为字符串类型。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是deviceConfig的示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"deviceConfig\": {\n  \"default\": {\n    \"process\": \"com.example.test.example\",\n    \"supportBackup\": false,\n    \"network\": {\n      \"cleartextTraffic\": true,\n      \"securityConfig\": {\n        \"domainSettings\": {\n          \"cleartextPermitted\": true,\n          \"domains\": [\n            {\n              \"subdomains\": true,\n              \"name\": \"example.ohos.com\"\n            }\n          ]\n        }\n      }\n    }\n  }\n}\n"
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