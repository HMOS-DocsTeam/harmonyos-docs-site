"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["855911"], {
822392(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_access_control_app_permission_mgmt_app_permission_mgmt_overview_app_permission_mgmt_overview_md_1b1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-access-control-app-permission-mgmt-app-permission-mgmt-overview-app-permission-mgmt-overview-md-1b1.json
var site_docs_system_security_access_control_app_permission_mgmt_app_permission_mgmt_overview_app_permission_mgmt_overview_md_1b1_namespaceObject = JSON.parse('{"id":"system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview/app-permission-mgmt-overview","title":"应用权限管控概述","description":"简介","source":"@site/docs/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview/app-permission-mgmt-overview.md","sourceDirName":"system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview","slug":"/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview/","permalink":"/harmonyos-docs-site/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"应用权限管控概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-permission-mgmt-overview","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"访问控制概述","permalink":"/harmonyos-docs-site/system-security/access-control/access-token-overview/"},"next":{"title":"选择申请权限的方式","permalink":"/harmonyos-docs-site/system-security/access-control/app-permission-mgmt/request-app-permissions/determine-application-mode/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview/app-permission-mgmt-overview.md


const frontMatter = {
	title: '应用权限管控概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-permission-mgmt-overview',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '应用权限管控概述';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "权限使用的基本原则",
  "id": "权限使用的基本原则",
  "level": 2
}, {
  "value": "授权方式",
  "id": "授权方式",
  "level": 2
}, {
  "value": "system_grant（系统授权）",
  "id": "system_grant系统授权",
  "level": 3
}, {
  "value": "user_grant（用户授权）",
  "id": "user_grant用户授权",
  "level": 3
}, {
  "value": "manual_settings（手动设置授权）",
  "id": "manual_settings手动设置授权",
  "level": 3
}, {
  "value": "权限组和子权限",
  "id": "权限组和子权限",
  "level": 2
}, {
  "value": "权限机制中的基本概念",
  "id": "权限机制中的基本概念",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "应用权限管控概述",
        children: "应用权限管控概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统提供一种通用权限访问方式，允许应用访问系统资源（如通讯录）和系统能力（如摄像头、麦克风），以保护系统数据（包括用户个人数据）和功能，防止不当或恶意使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用权限保护的对象可以分为数据和功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数据包括个人数据（如照片、通讯录、日历、位置）和设备数据（如设备标识、相机、麦克风）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "功能包括设备功能（如访问摄像头/麦克风、打电话、联网）和应用功能（如弹出悬浮窗、创建快捷方式）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "权限使用的基本原则",
      children: "权限使用的基本原则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "合理的使用场景有助于应用权限的申请和使用。开发应用时，权限申请需要满足以下原则。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用（包括应用引用的第三方库）所需权限必须在应用的配置文件中严格按照权限开发指导逐个声明。参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
          children: "声明权限"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "权限申请满足最小化原则，禁止申请非必要的、已废弃的权限。过多权限申请会引起用户对应用安全性的担忧以及使用体验变差，从而影响应用的安装率和留存率。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用申请敏感权限时，必须填写权限使用理由字段，敏感权限通常是指与用户隐私密切相关的权限，包括地理位置、相机、麦克风、日历、健身运动、身体传感器、音乐、文件、图片视频等权限。参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
          children: "向用户申请授权"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用敏感权限须在对应业务功能执行前动态申请，满足隐私最小化要求。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户拒绝授予某个权限后，应用与此权限无关的其他业务功能应允许正常使用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "授权方式",
      children: "授权方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据授权方式的不同，权限类型可分为system_grant（系统授权）、user_grant（用户授权）和manual_settings（手动设置授权）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "system_grant系统授权",
      children: "system_grant（系统授权）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "system_grant指的是系统授权类型，在该类型的权限许可下，应用被允许访问的数据不会涉及到用户的个人信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果应用中申请了system_grant权限，系统会在用户安装应用时自动授予相应的权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user_grant用户授权",
      children: "user_grant（用户授权）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "user_grant指的是用户授权类型，在该类型的权限许可下，应用被允许访问的数据将会涉及到用户的个人信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该类型权限需在安装包中申请，并在应用运行时通过弹窗请求用户授权。当用户手动允许授权后，应用才能获取相应权限，从而成功访问目标对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "manual_settings手动设置授权",
      children: "manual_settings（手动设置授权）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API 21开始，新增支持manual_settings（手动设置授权）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "manual_settings指的是手动设置授权类型，在该类型的权限许可下，应用被允许访问的数据将会涉及到用户的个人信息，应用被允许执行的操作可能对系统或者用户产生严重的影响。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该类型权限需在安装包中申请，无法通过弹窗请求用户授权，只能由用户在系统设置应用中授权。当用户手动设置授权后，应用才能获取相应权限，从而成功访问目标对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "权限组和子权限",
      children: "权限组和子权限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了尽可能减少权限弹窗数量并优化交互体验，系统将逻辑紧密相关的user_grant权限组合成多个权限组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用请求权限时，同一个权限组的权限将会在一个弹窗内一起请求用户授权。权限组中的某个权限，称之为该权限组的子权限。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["权限组和权限的归属关系不是固定不变的，一个权限所属的权限组可能发生变化。请查阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/app-permission-group-list",
        children: "应用权限组列表"
      }), "获取当前系统支持的权限组。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "权限机制中的基本概念",
      children: "权限机制中的基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TokenID"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "系统采用TokenID（Token identity）作为应用的唯一标识。权限管理服务通过应用的TokenID来管理应用的AT（Access Token）信息，包括身份标识APP ID、子用户ID、分身索引信息、APL、权限授权状态等。在资源使用时，系统将通过TokenID作为唯一身份标识映射获取对应应用的权限授权状态，并依此进行鉴权，从而管控应用的资源访问行为。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "值得注意的是，系统支持多用户特性和应用分身特性，同一个应用在不同的子用户下和不同的分身应用会有各自的AT，这些AT的TokenID也是不同的。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "APL等级"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "为了防止应用过度索取和滥用权限，系统基于APL（Ability Privilege Level，元能力权限等级）配置了不同的权限开放范围。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "元能力权限等级（APL）定义了应用的权限申请优先级。不同APL等级的应用可申请的权限不同。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "应用APL等级"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用的等级可以分为以下三个等级，等级依次提高。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "APL级别"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "normal"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "默认情况下，应用的APL等级都为normal等级。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "system_basic"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "该等级的应用服务提供系统基础服务。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "system_core"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "该等级的应用服务提供操作系统核心能力。  应用APL等级不允许配置为system_core。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "权限APL等级"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据权限对于不同等级应用有不同的开放范围，权限类型对应分为以下三个等级，等级依次提高。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "APL级别"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "开放范围"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "normal"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "允许应用访问超出默认规则外的普通系统资源，如配置Wi-Fi信息、调用相机拍摄等。  这些系统资源的开放（包括数据和功能）对用户隐私以及其他应用带来的风险较低。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "APL等级为normal及以上的应用。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "system_basic"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "允许应用访问操作系统基础服务（系统提供或者预置的基础功能）相关的资源，如系统设置、身份认证等。  这些系统资源的开放对用户隐私以及其他应用带来的风险较高。"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["- APL等级为system_basic及以上的应用。  - 部分权限对normal级别的应用受限开放，这部分权限在本指导中描述为“", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions",
                  children: "受限开放权限"
                }), "”。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "system_core"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "涉及开放操作系统核心资源的访问操作。这部分系统资源是系统最核心的底层服务，一旦遭受破坏，操作系统将无法正常运行。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "- APL等级为system_core的应用。  - 仅对系统应用开放。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "访问控制列表（ACL）"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如上所述，权限APL等级和应用APL等级一一对应。原则上，低APL等级的应用默认无法申请更高等级的权限。访问控制列表ACL（Access Control List）提供了低等级应用访问高等级权限的特殊渠道。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["系统权限均定义了“ACL使能”字段。当该字段为TRUE时，应用可以使用ACL方式跨级别申请权限。具体权限定义，可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions",
            children: "受限开放权限"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景举例：如开发者正在开发APL等级为normal的A应用，由于功能场景需要，A应用需要跨级申请等级为system_basic的P权限。当P权限的ACL使能为TRUE时，A应用可以通过ACL方式跨级申请权限P。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "携带数据的权限类型"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在传统的权限模型中，权限呈现非是即否的状态，每个权限所包含的内容有限，在逐步精细化的权限管控模型中显得力不从心。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "因此，系统引入了可以携带额外信息的权限键值对。这种新的权限类型能够在日益复杂的权限管控模型中展现出更大的灵活性和适应性。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以权限", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions#ohospermissionaccess_ddk_drivers",
            children: "ohos.permission.ACCESS_DDK_DRIVERS"
          }), "为例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景举例：如在扩展外设场景中，系统需要管理当前应用能够连接的驱动服务端，而这样的服务端可能有多个，这就要求权限能够携带具体的服务端数据，明确指出应用能够连接哪些外设驱动服务端。"
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