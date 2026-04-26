"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["704148"], {
412034(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_asset_store_kit_asset_store_kit_overview_asset_store_kit_overview_md_cbe_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-asset-store-kit-asset-store-kit-overview-asset-store-kit-overview-md-cbe.json
var site_docs_system_security_asset_store_kit_asset_store_kit_overview_asset_store_kit_overview_md_cbe_namespaceObject = JSON.parse('{"id":"system-security/asset-store-kit/asset-store-kit-overview/asset-store-kit-overview","title":"Asset Store Kit简介","description":"Asset Store Kit（关键资产存储服务，简称ASSET）包含了一系列开放接口，用于提供用户短敏感数据的安全存储及管理功能。这类短敏感数据包括但不限于密码类（账号/密码）、Token类（应用凭据）以及其他关键明文（如银行卡号）等长度较短的敏感信息。","source":"@site/docs/system-security/asset-store-kit/asset-store-kit-overview/asset-store-kit-overview.md","sourceDirName":"system-security/asset-store-kit/asset-store-kit-overview","slug":"/system-security/asset-store-kit/asset-store-kit-overview/","permalink":"/harmonyos-docs-site/system-security/asset-store-kit/asset-store-kit-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Asset Store Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/asset-store-kit-overview","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用加密","permalink":"/harmonyos-docs-site/system-security/code-protect/"},"next":{"title":"保护密码类数据","permalink":"/harmonyos-docs-site/system-security/asset-store-kit/asset-scenarios/asset-scenario1/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/asset-store-kit/asset-store-kit-overview/asset-store-kit-overview.md


const frontMatter = {
	title: 'Asset Store Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/asset-store-kit-overview',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = 'Asset Store Kit简介';

const assets = {

};



const toc = [{
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}, {
  "value": "与相关Kit的关系",
  "id": "与相关kit的关系",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "asset-store-kit简介",
        children: "Asset Store Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Asset Store Kit（关键资产存储服务，简称ASSET）包含了一系列开放接口，用于提供用户短敏感数据的安全存储及管理功能。这类短敏感数据包括但不限于密码类（账号/密码）、Token类（应用凭据）以及其他关键明文（如银行卡号）等长度较短的敏感信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关键资产的安全存储，依赖底层的通用密钥库系统。具体来说，关键资产的加/解密操作以及访问控制校验，都由通用密钥库系统在安全环境（如可信执行环境）中完成，即使系统被攻破，也能保证用户敏感数据不发生泄露。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中，关键资产的加/解密使用AES256-GCM算法，关键资产的访问控制分为以下几类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "基于属主的访问控制："
            })
          }), " 所有的关键资产都受属主访问控制保护，业务无需设置。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "只允许关键资产被其属主（写入该关键资产的业务）访问。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "关键资产属主身份由ASSET从系统服务中获取，即使业务身份被仿冒，仿冒者也无法获取到其他业务的数据。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "关键资产加/解密时，其属主身份参与了完整性保护，即使关键资产属主身份被篡改，攻击者也无法获取到其他业务的数据。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "基于群组的访问控制："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "同一开发者开发的多个应用，可配置为同一群组，并在存储关键资产时设置群组共享，以便群组内的多个应用可以互通访问数据。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["关键资产所属的群组信息，由开发者ID和群组ID组成。其中，开发者ID无需配置，群组ID在应用开发期配置，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
              children: "配置文件标签说明"
            }), "。应用发布时使用开发者私钥签名保证群组ID的完整性。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "开发者可以为应用配置多个群组，根据关键资产的共享范围，将不同关键资产配置在相应的群组内，从而实现细粒度的群组访问控制。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "基于锁屏状态的访问控制："
            })
          }), " 分为以下三种保护等级（安全性依次递增），业务可根据实际情况设置任意一种，若不设置，则默认保护等级为“首次解锁后可访问”。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "开机后可访问：关键资产在开机后被允许访问。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "首次解锁后可访问：关键资产在开机首次解锁后被允许访问。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "屏幕处于解锁状态时可访问：关键资产仅在处于解锁状态时被允许访问。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "基于锁屏密码设置状态的访问控制："
            })
          }), " 该访问控制默认不开启，业务可根据实际情况决定是否开启。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在用户设置了锁屏密码后，关键资产才被允许访问。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "基于用户认证的访问控制："
            })
          }), " 该访问控制默认不开启，业务可根据实际情况决定是否开启。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "关键资产在用户身份认证通过后被允许访问。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "任意一种认证方式（指纹、人脸、PIN码）通过，均可授权本次关键资产的访问。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "业务可通过设置认证有效期，达成一次用户认证、授权多个关键资产访问的效果。认证有效期最长可设置10分钟。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设备限制"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "轻量级智能穿戴设备暂不支持使用本Kit。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "基于别名的访问"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关键资产以密文的形式存储在ASSET数据库中，以业务身份 + 别名作为唯一索引。故业务需要保证每条关键资产的别名唯一。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "批量查询关键资产"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "批量查询出的关键资产需要通过IPC通道传输给业务，受IPC缓冲区大小限制，建议对查询超过40条关键资产时，进行分批查询，且每次查询数量不超过40条。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "业务自定义数据存储"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ASSET为业务预留了12个关键资产自定义属性，名称以\"DATA_LABEL\"开头。对于超过12个自定义属性的情况，业务可以将多段数据按照一定的格式（如JSON）拼接到同一个ASSET属性中。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ASSET对部分属性会进行完整性保护，这部分属性名称以\"DATA_LABEL_CRITICAL\"开头，写入后不支持更新。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "基于群组的访问控制"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ASSET不支持沙箱应用、应用分身存储或访问群组数据。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-arkts/js-apis-asset/js-apis-asset#tag",
              children: "IS_PERSISTENT"
            }), "属性设置为True的关键资产，不允许设置为群组共享。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关键资产删除时机"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["业务主动调用remove删除关键资产时，删除符合条件的数据。详见删除关键资产", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/asset-store-kit/asset-arkts/asset-js-remove",
              children: "ArkTS"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/asset-store-kit/asset-native/asset-native-remove",
              children: "C/C++"
            }), "开发指导。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["应用卸载时，会清除对应的数据。", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-arkts/js-apis-asset/js-apis-asset#tag",
              children: "IS_PERSISTENT"
            }), "属性设置为true的数据将保留。\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "从API 21开始：清除存储在ASSET中的非群组数据。群组数据仅在群组内所有应用卸载时清除。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "在API 20及之前的版本：清除存储在ASSET中的非群组和群组数据。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "系统子用户删除时，清除该用户下ASSET中所有数据。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "设备恢复出厂设置时，清除ASSET中所有数据。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit支持模拟器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模拟器与真机存在通用差异，详情请参见详情请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification",
        children: "模拟器与真机的差异"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "与相关kit的关系",
      children: "与相关Kit的关系"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["关键资产存储服务仅提供短敏感数据（不超过1KB）的安全存储能力，如业务希望对超长的数据提供保护时，请考虑使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-overview",
        children: "通用密钥库系统"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-architecture-kit-intro",
        children: "加解密算法库框架"
      }), "保护您的数据。"]
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