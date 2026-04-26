"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["435989"], {
768673(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_access_control_app_permission_mgmt_request_app_permissions_declare_permissions_declare_permissions_md_7eb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-access-control-app-permission-mgmt-request-app-permissions-declare-permissions-declare-permissions-md-7eb.json
var site_docs_system_security_access_control_app_permission_mgmt_request_app_permissions_declare_permissions_declare_permissions_md_7eb_namespaceObject = JSON.parse('{"id":"system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions/declare-permissions","title":"声明权限","description":"应用在申请权限时，需在项目的配置文件中逐个声明所需权限，否则无法获取授权，并可能导致应用上架申请被驳回。","source":"@site/docs/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions/declare-permissions.md","sourceDirName":"system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions","slug":"/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions/","permalink":"/harmonyos-docs-site/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"声明权限","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"选择申请权限的方式","permalink":"/harmonyos-docs-site/system-security/access-control/app-permission-mgmt/request-app-permissions/determine-application-mode/"},"next":{"title":"向用户申请授权","permalink":"/harmonyos-docs-site/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions/declare-permissions.md


const frontMatter = {
	title: '声明权限',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '声明权限';

const assets = {

};



const toc = [{
  "value": "在配置文件中声明权限",
  "id": "在配置文件中声明权限",
  "level": 2
}, {
  "value": "声明样例",
  "id": "声明样例",
  "level": 2
}, {
  "value": "权限使用理由的文案内容规范",
  "id": "权限使用理由的文案内容规范",
  "level": 2
}, {
  "value": "reason字段的内容写作规范及建议",
  "id": "reason字段的内容写作规范及建议",
  "level": 3
}, {
  "value": "权限使用理由展示方式",
  "id": "权限使用理由展示方式",
  "level": 3
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
        id: "声明权限",
        children: "声明权限"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用在申请权限时，需在项目的配置文件中逐个声明所需权限，否则无法获取授权，并可能导致应用上架申请被驳回。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在配置文件中声明权限",
      children: "在配置文件中声明权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用必须在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json5配置文件"
      }), "的requestPermissions标签中声明权限。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "取值范围"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要使用的权限名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "必填"
              })
            }), "，需为系统已定义的权限，取值范围请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-permissions",
              children: "应用权限列表"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reason"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "申请权限的原因。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "可选填写"
              })
            }), "，该字段用于应用上架校验，申请user_grant/manual_settings权限时必填并需多语种适配。  格式为$string: ***。string资源引用需要在string.json文件配置标签\"name\": \"reason\"，配置样例可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/resource-categories-and-access#%E8%B5%84%E6%BA%90%E6%96%87%E4%BB%B6%E7%A4%BA%E4%BE%8B",
              children: "资源文件示例"
            }), "。  reason填写内容可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%9D%83%E9%99%90%E4%BD%BF%E7%94%A8%E7%90%86%E7%94%B1%E7%9A%84%E6%96%87%E6%A1%88%E5%86%85%E5%AE%B9%E8%A7%84%E8%8C%83",
              children: "权限使用理由的文案内容规范"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "usedScene"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "权限使用的场景，该字段用于应用上架校验。包括abilities和when两个子项。  - abilities：使用权限的UIAbility或者ExtensionAbility组件的名称。  - when：调用时机。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "申请user_grant/manual_settings权限时，usedScene必填，其他情况下选填。"
              })
            }), "  - abilities：可以配置为多个UIAbility或者ExtensionAbility名称的字符串数组。  - when：配置此字段，只能填入固定值", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "inuse"
              })
            }), "（使用时）或", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "always"
              })
            }), "（始终），不能为空。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(508944)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在多HAP场景下，已在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-package-fundamentals/application-package-dev/hap-package",
        children: "entry"
      }), "模块中声明的权限，无需在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-package-fundamentals/application-package-dev/hap-package",
        children: "feature"
      }), "模块中重复添加，权限将在整个应用中生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["同理，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-package-fundamentals/application-package-dev/hap-package",
        children: "feature"
      }), "模块中已声明的权限，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-package-fundamentals/application-package-dev/hap-package",
        children: "entry"
      }), "模块也无需重复添加。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "声明样例",
      children: "声明样例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json5配置文件"
      }), "的requestPermissions标签中声明权限。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(593980)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下述\"name\"中填入的权限仅为样例示意。请开发者根据实际需要，参照上表要求填写对应属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    // ···\n    // 1.ohos.permission.APPROXIMATELY_LOCATION与ohos.permission.LOCATION为user_grant权限，reason和usedScene为必填字段。\n    // 2.ohos.permission.USE_BLUETOOTH为system_grant权限，reason和usedScene为选填字段。\n    \"requestPermissions\": [\n      {\n        \"name\": \"ohos.permission.APPROXIMATELY_LOCATION\",\n        \"reason\": \"$string:approximately_location_permission_reason\",\n        \"usedScene\": {\n          \"abilities\": [\n            \"FormAbility\"\n          ],\n          \"when\": \"inuse\"\n        }\n      },\n      {\n        \"name\": \"ohos.permission.LOCATION\",\n        \"reason\": \"$string:location_permission_reason\",\n        \"usedScene\": {\n          \"abilities\": [\n            \"FormAbility\"\n          ],\n          \"when\": \"inuse\"\n        }\n      },\n      {\n        \"name\": \"ohos.permission.USE_BLUETOOTH\"\n      }\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "权限使用理由的文案内容规范",
      children: "权限使用理由的文案内容规范"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当申请user_grant/manual_settings权限时，字段reason（申请权限的原因）必填。开发者需在应用配置文件中配置每个需要的权限。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["但在实际向用户弹窗申请授权时，user_grant权限将会以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview#%E6%9D%83%E9%99%90%E7%BB%84%E5%92%8C%E5%AD%90%E6%9D%83%E9%99%90",
        children: "权限组"
      }), "的形式向用户申请。当前支持的权限组请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/app-permission-group-list",
        children: "应用权限组列表"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reason字段的内容写作规范及建议",
      children: "reason字段的内容写作规范及建议"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "权限使用理由应准确告知用户获取权限后用于什么场景/功能。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "未明确告知用户实际使用场景/功能、权限使用理由和实际调用权限功能不符合将会导致权限申请被驳回，进而导致应用上架申请被驳回。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "样例"
            })
          }), "：以申请相机权限的reason字符串为例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "正例：用于视频通话/拍照。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "反例（未明确告知用户实际使用场景/功能）：使用相机；获取相机权限；需要权限。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "反例（权限使用理由和实际调用权限功能不符）：录制音频用于语音聊天；获取蓝牙权限用于多设备之间传输文件。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如需了解更多权限使用理由的案例讲解，可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/forum/topic/0208158494714878699?fid=0102104600515103427",
            children: "隐私合规问题小学堂——未同步告知权限的使用目的"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "字串应为直白、具体、易理解的完整短句， 用于向用户说明应用使用敏感权限的理由。句子避免使用被动语态，并以句号结尾。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "建议句式"
                })
              }), "：用于做某事。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "样例"
                })
              }), "：以申请相机权限的reason字符串为例。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "正例：用于视频通话。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用途描述的字串建议小于72个字符（即36个中文字符，UI界面显示大约为两行）。不能超过256个字符，以保证多语言适配的体验。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "字串不能为空白字符串，即不能不填，也不能只填空格符。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果应用申请的权限用于多个场景，需要确保字串的完整性，让用户了解应用使用此权限的所有场景；多个HAP包内如果申请同一个权限，各个权限Reason字段需要保持场景的完整性和一致性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "样例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用中有2个HAP包，均需申请使用相机权限，其中HAP1提供功能场景为视频通话、HAP2提供功能场景为视频直播。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "正例：HAP1和HAP2中，相机权限的使用理由都填写为“用于视频通话、视频直播功能。”"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "反例1：HAP1和HAP2中，相机权限的使用理由字段未保持完全一致。如HAP1中填写为“用于视频通话功能。”，HAP2中填写为“用于视频直播功能。”"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "反例2：HAP1和HAP2中，相机权限的使用理由字段保持完全一致，但是描述不全面，如HAP1和HAP2中，相机权限的使用理由都填写为“用于视频通话功能。”。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "权限使用理由展示方式",
      children: "权限使用理由展示方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "权限使用理由有两个展示途径：授权弹窗界面和“设置（Settings）”界面。“设置”的具体路径：设置-隐私-权限管理-某应用某权限详情。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果申请的是“电话、信息、日历、通讯录、通话记录”这五个权限组中的权限，根据工信部要求，将展示具体子权限的内容与用途。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "句式"
            })
          }), "：包括子权限A和子权限B，用于某事。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "样例"
            })
          }), "：用于获取通话状态和移动网络信息，用于安全运营和统计计费服务。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果是申请其他权限组中的权限，系统将使用权限组内当前被申请的第一个子权限的使用理由，作为该权限组的使用理由进行展示。组内的排序固定按照权限管理内排列的权限组数组顺序。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "举例说明：权限组A = {权限A, 权限B, 权限C}；申请传入的权限是{权限C, 权限B}，界面将展示权限B的权限使用理由。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果应用内多包申请的权限名称相同，但权限使用理由不一致，系统返回的权限申请详细信息", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-bundleinfo/js-apis-bundlemanager-bundleinfo#reqpermissiondetail",
            children: "ReqPermissionDetail"
          }), "中只会显示一个权限申请理由。优先级从高到低为：entry类型HAP、feature类型HAP、应用内HSP。"]
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
508944(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
593980(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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