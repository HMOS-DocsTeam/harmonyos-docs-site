"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["336351"], {
540933(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_basic_services_kit_update_sample_server_guidelines_sample_server_guidelines_md_f71_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-basic-services-kit-update-sample-server-guidelines-sample-server-guidelines-md-f71.json
var site_docs_system_basicfun_basic_services_kit_update_sample_server_guidelines_sample_server_guidelines_md_f71_namespaceObject = JSON.parse('{"id":"system-basicfun/basic-services-kit/update/sample-server-guidelines/sample-server-guidelines","title":"示例服务器开发指导","description":"开发步骤","source":"@site/docs/system-basicfun/basic-services-kit/update/sample-server-guidelines/sample-server-guidelines.md","sourceDirName":"system-basicfun/basic-services-kit/update/sample-server-guidelines","slug":"/system-basicfun/basic-services-kit/update/sample-server-guidelines/","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/update/sample-server-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"示例服务器开发指导","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/sample-server-guidelines","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"示例服务器开发概述","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/update/sample-server-overview/"},"next":{"title":"申请访问剪贴板权限","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/pasteboard/get-pastedata-permission-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/basic-services-kit/update/sample-server-guidelines/sample-server-guidelines.md


const frontMatter = {
	title: '示例服务器开发指导',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/sample-server-guidelines',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = '示例服务器开发指导';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "示例服务器开发指导",
        children: "示例服务器开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生成SSL证书"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生成serverKey.pem和serverCert.cer两个文件，用于示例服务器的SSL协议通信。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "openssl req -newkey rsa:2048 -nodes -keyout serverKey.pem -x509 -days 365 -out serverCert.cer -subj \"/C=CN/ST=GD/L=GZ/O=abc/OU=defg/CN=hijk/emailAddress=test.com\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "修改bundle.json"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在build字段新增一个sub_component。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"sub_component\": [\n    \"//base/update/updateservice/server_sample:testserver\",\n    ...\n],\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "建立代码目录"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "进入到update_updateservice目录下，执行以下命令，建立代码目录。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "mkdir server_sample                            // 建立示例服务器server_sample目录\ntouch server_sample/BUILD.gn                   // 创建BUILD.gn编译文件\nmkdir server_sample/include                    // 建立示例服务器头文件include目录\ntouch server_process.h                         // 创建server_process.h头文件\nmkdir server_sample/src                        // 建立示例服务器c/c++文件src目录\ntouch server_sample/src/server_process.c       // 创建server_process.c文件\ntouch server_sample/src/main.cpp               // 创建main.cpp文件\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写编译文件BUILD.gn"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "文件BUILD.gn一共编译两个ohos组件，一个是ohos_shared_library库文件libserver_process.z.so，另一个是ohos_executable可执行文件testserver。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import(\"//build/ohos.gni\")\n\nohos_shared_library(\"server_process\") {\n    sources = [\n        \"//base/update/updateservice/server_sample/src/server_process.c\",\n    ]\n\n    include_dirs = [\n        \"//base/update/updateservice/server_sample/include\",\n        \"//third_party/openssl/include\",\n    ]\n\n    deps = [\n        \"//base/update/updater/services/log:libupdaterlog\",\n        \"//third_party/bounds_checking_function:libsec_static\",\n        \"//third_party/openssl:crypto_source\",\n        \"//third_party/openssl:ssl_source\",\n        \"//utils/native/base:utils\",\n    ]\n\n    part_name = \"update_service\"\n}\n\nohos_executable(\"testserver\") {\n    sources = [\n        \"//base/update/updateservice/server_sample/src/main.cpp\",\n    ]\n\n    include_dirs = [\n        \"//base/update/updateservice/server_sample/include\",\n    ]\n\n    deps = [\n        \"//base/update/updateservice/server_sample:server_process\",\n    ]\n\n    part_name = \"update_service\"\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写头文件server_process.h"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "文件server_process.h声明了示例服务器的接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#ifndef __SERVER_PROCESS_H__\n#define __SERVER_PROCESS_H__\n\n/*\nInit函数：用于创建socket环境，并预设置一些属性\n*/\nint Init();\n\n/*\nSetParam函数：所有插件参数设置的统一接口\n*/\nint SetParam(const char *key, const char *value);\n\n/*\nGetParam函数：所有插件参数获取的统一接口\n*/\nint GetParam(const char *key, char *value);\n\n/*\nReverseSetParamCallback函数：回调\n*/\nint ReverseSetParamCallback(int(*setParam)(const char *key, const char *value));\n\n/*\nOpen函数：用于服务打开的接口\n*/\nint Open();\n\n/*\nMainLoop函数：每隔100ms调用一次\n*/\nint MainLoop();\n\n/*\nClose函数，用于关闭服务并释放资源\n*/\nint Close();\n\n#endif //__SERVER_PROCESS_H__\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写server_process.c、main.cpp"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "文件server_process.c主要声明了服务器的返回报文格式respondContent，main.cpp可参考普通SSL协议的服务器编写，注意包含相关头文件，同时加载serverKey.pem和serverCert.cer两个证书。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"server_process.h\"\n\n#include <netinet/in.h>\n#include <sys/types.h>\n#include <sys/socket.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <stdlib.h>\n#include <string.h>\n#include <stdio.h>\n\n#include \"openssl/err.h\"\n#include \"openssl/ssl.h\"\n\n#define SERVER_PEM \"/data/sdcard/serverKey.pem\"  //使用绝对路径\n#define SERVER_CER \"/data/sdcard/serverCert.cer\" //使用绝对路径\n\n#define LOG_PRINT(fmt, ...) printf(\"[ServerProcess][%s:%d] \" fmt \"\\n\", __func__, __LINE__, ##__VA_ARGS__)\n#define DO_CHECK(cond, log, ...) \\\n    if (!(cond)) {\\\n        LOG_PRINT(log);\\\n        __VA_ARGS__;\\\n        return -1;\\\n    }\n\n// 请参考server_process.h的接口予以实现，注意服务器返回的内容格式。\nrespondContent = \"{\"\n    \"\\\"searchStatus\\\": 0,\"\n    \"\\\"errMsg\\\": \\\"success\\\",\"\n    \"\\\"checkResults\\\": [{\"\n        \"\\\"versionName\\\": \\\"sampleVersionName\\\",\"\n         \"\\\"versionCode\\\": \\\"sampleVersionCode\\\",\"\n        \"\\\"verifyInfo\\\": \\\"sampleVerifyInfoSha256Value\\\",\"\n        \"\\\"size\\\": 1234567,\"\n        \"\\\"packageType\\\": 1,\"\n        \"\\\"descriptPackageId\\\": \\\"abcdefg1234567ABCDEFG\\\",\"\n    \"}],\"\n    \"\\\"descriptInfo\\\": [{\"\n        \"\\\"descriptionType\\\": 0,\"\n        \"\\\"content\\\": \\\"This package message is used for sampleContent\\\"\"\n    \"}]\"\n\"}\";\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译输出产物"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译输出目录会新增testserver和libserver_process.z.so两个文件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "升级包制作"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/openharmony/update_packaging_tools",
            children: "update_packaging_tools仓"
          }), "制作升级包。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动搜包服务器"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "建议在开发板上新建一个纯英文路径，然后将testserver、libserver_process.z.so、serverCert.cer和serverKey.pem放到同一个目录下，进入该目录，执行以下启动命令即可启动搜包服务器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "./testserver ./libserver_process.z.so &\n"
          })
        }), "\n"]
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