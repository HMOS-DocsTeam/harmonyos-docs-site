"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["746810"], {
875966(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_network_boost_kit_guide_networkboost_preparations_networkboost_preparations_md_270_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-network-boost-kit-guide-networkboost-preparations-networkboost-preparations-md-270.json
var site_docs_system_network_network_boost_kit_guide_networkboost_preparations_networkboost_preparations_md_270_namespaceObject = JSON.parse('{"id":"system-network/network-boost-kit-guide/networkboost-preparations/networkboost-preparations","title":"开发准备","description":"申请权限","source":"@site/docs/system-network/network-boost-kit-guide/networkboost-preparations/networkboost-preparations.md","sourceDirName":"system-network/network-boost-kit-guide/networkboost-preparations","slug":"/system-network/network-boost-kit-guide/networkboost-preparations/","permalink":"/harmonyos-docs-site/system-network/network-boost-kit-guide/networkboost-preparations/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"开发准备","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/networkboost-preparations","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Network Boost Kit简介","permalink":"/harmonyos-docs-site/system-network/network-boost-kit-guide/networkboost-introduction/"},"next":{"title":"网络质量评估","permalink":"/harmonyos-docs-site/system-network/network-boost-kit-guide/networkboost-netqualityguide/networkboost-qoscallback/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/network-boost-kit-guide/networkboost-preparations/networkboost-preparations.md


const frontMatter = {
	title: '开发准备',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/networkboost-preparations',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '开发准备';

const assets = {

};



const toc = [{
  "value": "申请权限",
  "id": "申请权限",
  "level": 2
}, {
  "value": "场景概述",
  "id": "场景概述",
  "level": 3
}, {
  "value": "申请权限步骤",
  "id": "申请权限步骤",
  "level": 3
}, {
  "value": "C API开发准备",
  "id": "c-api开发准备",
  "level": 3
}, {
  "value": "配置签名",
  "id": "配置签名",
  "level": 2
}, {
  "value": "受限ACL权限申请",
  "id": "受限acl权限申请",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "开发准备",
        children: "开发准备"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "申请权限",
      children: "申请权限"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "场景概述",
      children: "场景概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用在使用Network Boost Kit能力前需要检查是否已经获取对应权限。如未获得授权，需要声明对应权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Network Boost Kit所需权限有："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.GET_NETWORK_INFO：用户获取设备网络信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.INTERNET：允许使用因特网访问网络。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.LINKTURBO: 允许应用使用多网并发等网络加速能力，连接迁移能力部分接口需要该权限，如果不使用该能力，不需要申请该权限。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["必须手动配置上述权限后才能使用，详细配置参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%94%B3%E8%AF%B7%E6%9D%83%E9%99%90%E6%AD%A5%E9%AA%A4",
        children: "申请权限步骤"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["其中ohos.permission.LINKTURBO权限为受限ACL权限，需要特别配置和申请，具体操作步骤参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%85%8D%E7%BD%AE%E7%AD%BE%E5%90%8D",
        children: "配置签名"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%8F%97%E9%99%90acl%E6%9D%83%E9%99%90%E7%94%B3%E8%AF%B7",
        children: "受限ACL权限申请"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "申请权限步骤",
      children: "申请权限步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要在entry/src/main路径下的module.json5中配置所需申请的权限。示例代码如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    \"requestPermissions\": [\n      {\n        \"name\": \"ohos.permission.GET_NETWORK_INFO\"\n      },\n      {\n        \"name\": \"ohos.permission.INTERNET\"\n      },\n      {\n        \"name\": \"ohos.permission.LINKTURBO\"\n      }\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-api开发准备",
      children: "C API开发准备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除上述权限配置外，C API使用时还需要在CMakeLists.txt中设置动态库路径及头文件路径，并进行链接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如编译target为entry，则添加如下命令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_include_directories(entry PUBLIC ${HMOS_SDK_NATIVE}/sysroot/usr/include)\ntarget_link_directories(entry PUBLIC ${HMOS_SDK_NATIVE}/sysroot/usr/lib/aarch64-linux-ohos)\ntarget_link_libraries(entry PUBLIC libnetwork_boost.so) #链接libnetwork_boost.so及其他依赖的so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置签名",
      children: "配置签名"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调试阶段需要在AGC中", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-debugcert-0000001914263178",
          children: "申请调试证书"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-device-0000001946142249",
          children: "注册调试设备"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-debugprofile-0000001914423102",
          children: "申请调试Profile"
        }), "后，再", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-signing#section297715173233",
          children: "手动签名"
        }), "，或者通过DevEco Studio自动签名完成申请，在自动签名的过程中，将由DevEco Studio完成向AGC申请受限权限的步骤，开发者可直接使用，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-signing#section151231211105010",
          children: "自动签名-操作步骤"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["发布阶段", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "必须在AGC中重新"
          })
        }), (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-releasecert-0000001946273961",
          children: "申请发布证书"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-releaseprofile-0000001914714796",
          children: "发布Profile文件"
        }), "，并完成", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-publish-app#section280162182818",
          children: "配置签名信息"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "受限acl权限申请",
      children: "受限ACL权限申请"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-debugprofile-0000001914423102",
            children: "申请调试Profile"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-releaseprofile-0000001914714796",
            children: "发布Profile文件"
          }), "中第4步“申请权限”是必须的，选中“受限ACL权限”后再点击“选择”。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(541192)/* ["default"] */.A) + "",
            width: "521",
            height: "118"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在权限搜索框中输入\"ohos.permission.LINKTURBO\"找到LINKTURBO的权限并勾选，再提交申请。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(396069)/* ["default"] */.A) + "",
            width: "885",
            height: "444"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["根据实际业务需求填写申请原因并提交，提交后将在1个工作日回复，可以", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/interactive",
            children: "互动中心"
          }), "查看申请情况。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(105396)/* ["default"] */.A) + "",
            width: "759",
            height: "442"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "权限申请通过后在“已获取权限”中可以看到已申请的权限，勾选后点击确定。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(604304)/* ["default"] */.A) + "",
            width: "967",
            height: "483"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["选择权限后点击“添加”生成新的Profile文件，下载后按", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-signing#section297715173233",
            children: "手动签名"
          }), "替换profile文件。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在工程中entry模块的module.json5文件中，在\"requestPermissions\"节点添加\"ohos.permission.LINKTURBO\"权限，如下所示："
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"requestPermissions\": [{\n  \"name\": \"ohos.permission.LINKTURBO\"\n}]\n"
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
541192(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
105396(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958428-d4638abd1b128cd1b73dc6aa5b6e0d8b.png");

},
396069(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438473-6481b28019d9ea77073b8d414d4ac257.png");

},
604304(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478429-ed49cd920c053aa58a4f342d29b77002.png");

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