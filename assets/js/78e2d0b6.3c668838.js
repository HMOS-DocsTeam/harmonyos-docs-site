"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["448364"], {
555062(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_debugging_commands_edm_tool_edm_tool_md_78e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-debugging-commands-edm-tool-edm-tool-md-78e.json
var site_docs_system_debug_optimize_debugging_commands_edm_tool_edm_tool_md_78e_namespaceObject = JSON.parse('{"id":"system-debug-optimize/debugging-commands/edm-tool/edm-tool","title":"edm工具","description":"Enterprise Device Manager（企业设备管理工具，简称为edm），为设备管理应用提供调试和测试能力，例如激活企业设备管理拓展能力、解除激活企业设备管理拓展能力。","source":"@site/docs/system-debug-optimize/debugging-commands/edm-tool/edm-tool.md","sourceDirName":"system-debug-optimize/debugging-commands/edm-tool","slug":"/system-debug-optimize/debugging-commands/edm-tool/","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/edm-tool/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"edm工具","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/edm-tool","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"anm工具","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/anm-tool/"},"next":{"title":"restool工具","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/restool/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/debugging-commands/edm-tool/edm-tool.md


const frontMatter = {
	title: 'edm工具',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/edm-tool',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'edm工具';

const assets = {

};



const toc = [{
  "value": "环境要求",
  "id": "环境要求",
  "level": 2
}, {
  "value": "edm工具命令列表",
  "id": "edm工具命令列表",
  "level": 2
}, {
  "value": "帮助命令（help）",
  "id": "帮助命令help",
  "level": 2
}, {
  "value": "激活命令（enable-admin）",
  "id": "激活命令enable-admin",
  "level": 2
}, {
  "value": "解除激活命令（disable-admin）",
  "id": "解除激活命令disable-admin",
  "level": 2
}, {
  "value": "edm工具错误信息",
  "id": "edm工具错误信息",
  "level": 2
}, {
  "value": "error: command requires option",
  "id": "error-command-requires-option",
  "level": 3
}, {
  "value": "error: -n, --bundle-name option requires an argument",
  "id": "error--n---bundle-name-option-requires-an-argument",
  "level": 3
}, {
  "value": "error: -a, --ability-name option requires an argument",
  "id": "error--a---ability-name-option-requires-an-argument",
  "level": 3
}, {
  "value": "error: unknown option",
  "id": "error-unknown-option",
  "level": 3
}, {
  "value": "error: -n &lt;bundle-name&gt; is expected",
  "id": "error--n-bundle-name-is-expected",
  "level": 3
}, {
  "value": "error: -a &lt;ability-name&gt; is expected",
  "id": "error--a-ability-name-is-expected",
  "level": 3
}, {
  "value": "9200003 error: the administrator ability component is invalid",
  "id": "9200003-error-the-administrator-ability-component-is-invalid",
  "level": 3
}, {
  "value": "9200004 error: failed to enable the administrator application of the device",
  "id": "9200004-error-failed-to-enable-the-administrator-application-of-the-device",
  "level": 3
}, {
  "value": "9200005 error: failed to disable the administrator application of the device",
  "id": "9200005-error-failed-to-disable-the-administrator-application-of-the-device",
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
        id: "edm工具",
        children: "edm工具"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Enterprise Device Manager（企业设备管理工具，简称为edm），为设备管理应用提供调试和测试能力，例如激活企业设备管理拓展能力、解除激活企业设备管理拓展能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境要求",
      children: "环境要求"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用本工具前，开发者需要先获取hdc工具，执行hdc shell。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "edm工具命令列表",
      children: "edm工具命令列表"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助命令，用于查询edm支持的命令信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enable-admin"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["激活命令，用于激活企业设备管理拓展能力，目标组件必须为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-basicfun/mdm-kit/mdm-kit-admin",
              children: "enterpriseAdmin类型的ExtensionAbility"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "disable-admin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解除激活命令，用于解除激活企业设备管理拓展能力。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "帮助命令help",
      children: "帮助命令（help）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 显示帮助信息\nedm help\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "激活命令enable-admin",
      children: "激活命令（enable-admin）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 显示帮助信息\nedm enable-admin -h\n# 激活\nedm enable-admin -n <bundleName> -a <abilityName> [-t <adminType>]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "激活命令参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h/--help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-n/--bundle-name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，bundleName。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-a/--ability-name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，abilityName。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-t/--admin-type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，adminType。  取值如下：  super - 表示激活为超级设备管理应用。  byod - 表示激活为BYOD（自带设备办公）设备管理应用。  缺省值为super。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 激活一个所在应用包名为com.example.mdmsample，类名为EnterpriseAdminAbility的EnterpriseAdminExtensionAbility。\nedm enable-admin -n com.example.mdmsample -a com.example.mdmsample.EnterpriseAdminAbility\n# 执行结果\nenable-admin success.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "解除激活命令disable-admin",
      children: "解除激活命令（disable-admin）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 显示帮助信息\nedm disable-admin -h\n# 解除激活\nedm disable-admin -n <bundleName>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解除激活命令参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h/--help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-n/--bundle-name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，bundleName。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 解除激活所在应用包名为com.example.mdmsample的EnterpriseAdminExtensionAbility。\nedm disable-admin -n com.example.mdmsample\n# 执行结果\ndisable-admin success.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "edm工具错误信息",
      children: "edm工具错误信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "error-command-requires-option",
      children: "error: command requires option"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "未传入bundleName和abilityName。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "未传入bundleName和abilityName。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、如果当前使用的命令是enable-admin，请补充-n <bundle-name>和-a <ability-name>参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、如果当前使用的命令是disable-admin，请补充-n <bundle-name>参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "error--n---bundle-name-option-requires-an-argument",
      children: "error: -n, --bundle-name option requires an argument"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传入的bundleName为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传入的bundleName为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查-n后的参数，请补充bundleName。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "error--a---ability-name-option-requires-an-argument",
      children: "error: -a, --ability-name option requires an argument"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传入的abilityName为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传入的abilityName为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查-a后的参数，请补充abilityName。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "error-unknown-option",
      children: "error: unknown option"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传入了未知的参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传入了未知的参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请确认参数是否在参数列表中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "error--n-bundle-name-is-expected",
      children: "error: -n <bundle-name> is expected"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "未传入bundleName。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "未传入bundleName。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请补充-n <bundle-name>。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "error--a-ability-name-is-expected",
      children: "error: -a <ability-name> is expected"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "未传入abilityName。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "未传入abilityName。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请补充-a <ability-name>。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9200003-error-the-administrator-ability-component-is-invalid",
      children: "9200003 error: the administrator ability component is invalid"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传入的bundleName或者abilityName不正确或者不是enterpriseAdmin类型的ExtensionAbility。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、传入的bundleName不正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、传入的abilityName不正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3、传入的不是enterpriseAdmin类型的ExtensionAbility。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询应用的bundleName和enterpriseAdmin类型的ExtensionAbility的abilityName，并将其传入到参数中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9200004-error-failed-to-enable-the-administrator-application-of-the-device",
      children: "9200004 error: failed to enable the administrator application of the device"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "激活失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、传入的bundleName不正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、传入的不是enterpriseAdmin类型的ExtensionAbility。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3、存在已激活的正式的enterpriseAdmin类型的ExtensionAbility。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、查询应用的bundleName和enterpriseAdmin类型的ExtensionAbility的abilityName，并将其传入到参数中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、请使用未被管控的设备进行调试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9200005-error-failed-to-disable-the-administrator-application-of-the-device",
      children: "9200005 error: failed to disable the administrator application of the device"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解除激活失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、此组件未被激活。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、此组件不是通过hdc命令被激活的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3、解除激活失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询可以被hdc命令解除激活的应用的bundleName，并将其传入到参数中。"
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