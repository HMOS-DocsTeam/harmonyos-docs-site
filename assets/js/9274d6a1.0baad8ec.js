"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["29836"], {
512901(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_enterprise_space_api_enterprisespace_arkts_enterprisespace_spacedatatransfer_enterprisespace_spacedatatransfer_md_927_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-enterprise-space-api-enterprisespace-arkts-enterprisespace-spacedatatransfer-enterprisespace-spacedatatransfer-md-927.json
var site_docs_ref_enterprise_space_api_enterprisespace_arkts_enterprisespace_spacedatatransfer_enterprisespace_spacedatatransfer_md_927_namespaceObject = JSON.parse('{"id":"enterprise-space-api/enterprisespace-arkts/enterprisespace-spacedatatransfer/enterprisespace-spacedatatransfer","title":"spaceDataTransfer (空间数据传输)","description":"空间数据传输为企业安全管控类MDM应用提供下发空间互传策略能力，提供设置审批信息、获取审批信息的能力。","source":"@site/docs-ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacedatatransfer/enterprisespace-spacedatatransfer.md","sourceDirName":"enterprise-space-api/enterprisespace-arkts/enterprisespace-spacedatatransfer","slug":"/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacedatatransfer/enterprisespace-spacedatatransfer","permalink":"/harmonyos-docs-site/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacedatatransfer/enterprisespace-spacedatatransfer","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"spaceDataTransfer (空间数据传输)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacedatatransfer","kit":"应用服务","last_updated":"2026-04-22","slug":"enterprisespace-spacedatatransfer"},"sidebar":"ref","previous":{"title":"Contacts错误码","permalink":"/harmonyos-docs-site/ref/contacts-api/contacts-arkts-errcode/errorcode-contacts/errorcode-contacts"},"next":{"title":"spaceManager (空间管理)","permalink":"/harmonyos-docs-site/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacemanager/enterprisespace-spacemanager"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-spacedatatransfer/enterprisespace-spacedatatransfer.md


const frontMatter = {
	title: 'spaceDataTransfer (空间数据传输)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacedatatransfer',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'enterprisespace-spacedatatransfer'
};
const contentTitle = 'spaceDataTransfer (空间数据传输)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "AuditInfo",
  "id": "auditinfo",
  "level": 2
}, {
  "value": "setAuditInfo",
  "id": "setauditinfo",
  "level": 2
}, {
  "value": "getAuditInfo",
  "id": "getauditinfo",
  "level": 2
}, {
  "value": "policyPush",
  "id": "policypush",
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
        id: "spacedatatransfer-空间数据传输",
        children: "spaceDataTransfer (空间数据传输)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["空间数据传输为企业安全管控类", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mdm-kit",
        children: "MDM"
      }), "应用提供下发空间互传策略能力，提供设置审批信息、获取审批信息的能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "供企业安全管控类MDM应用申请权限后使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { fileTransfer } from '@kit.EnterpriseSpaceKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "auditinfo",
      children: "AuditInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "审批信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.EnterpriseSpace.SpaceDataTransfer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "auditId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示在发起审批时由数据库自动生成的审批ID，通常为由9位数字组成的字符串。不能为空字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "userId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用户ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "userName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用户名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示整型转换后的审批时间戳，以ms为单位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "comments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示审批评论。无位数限制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示文件审批状态。其中，\"1\"表示等待审批，\"2\"表示取消审批，\"3\"表示拒绝审批，\"4\"表示同意审批。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setauditinfo",
      children: "setAuditInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setAuditInfo(transactionNum: string, info: AuditInfo): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置审批信息，将审批结果返回给空间互传应用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ENTERPRISE_FILE_TRANSFER_AUDIT_POLICY_MANAGEMENT"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.EnterpriseSpace.SpaceDataTransfer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "transactionNum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在传输文件时由数据库自动生成的传输编号，通常为由19位数字组成的字符串。不能为空字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#auditinfo",
              children: "AuditInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示审批信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回设置审批信息的结果。结果为0代表设置审批信息成功。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-error-code/enterprisespace-error-code",
        children: "ArkTS API错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "the application does not have permission to call this function."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1020300001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System service exception."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1020300002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { fileTransfer } from '@kit.EnterpriseSpaceKit';\n\nconst transactionNum: string = '1111111';\nconst info: fileTransfer.AuditInfo = {\n  auditId: '123456',\n  userId: '100',\n  userName: 'test',\n  time: Date.now(),\n  comments: 'Waiting approval',\n  status: '1'\n};\ntry {\n  const ret: number = fileTransfer.setAuditInfo(transactionNum, info);\n  console.info(`Succeeded in setting audit info, number:`, ret);\n} catch (err) {\n  console.error(`Failed to set audit info. Code: ${err.code}, message: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getauditinfo",
      children: "getAuditInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAuditInfo(transactionNum: string): AuditInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取审批信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ENTERPRISE_FILE_TRANSFER_AUDIT_POLICY_MANAGEMENT"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.EnterpriseSpace.SpaceDataTransfer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "transactionNum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在传输文件时由数据库自动生成的传输编号，通常为由19位数字组成的字符串。不能为空字符串。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#auditinfo",
              children: "AuditInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示审批信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-error-code/enterprisespace-error-code",
        children: "ArkTS API错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "the application does not have permission to call this function."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1020300001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System service exception."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1020300002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { fileTransfer } from '@kit.EnterpriseSpaceKit';\n\nconst transactionNum: string = '1111111';\ntry {\n  const auditInfo: fileTransfer.AuditInfo = fileTransfer.getAuditInfo(transactionNum);\n  console.info(`Succeeded in getting audit info:` + JSON.stringify(auditInfo));\n} catch (err) {\n  console.error(`Failed to get audit info. Code: ${err.code}, message: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "policypush",
      children: "policyPush"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "policyPush(policyContext: string): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置工作空间互传单双通策略。具体而言，分别配置是否允许个人工作空间和企业工作空间向对端空间发送文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ENTERPRISE_FILE_TRANSFER_AUDIT_POLICY_MANAGEMENT或ohos.permission.FILE_TRANSFER_OPERATION"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.EnterpriseSpace.SpaceDataTransfer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "policyContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["下发单双通策略的内容。一级节点为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "config"
              })
            }), "，其有6个二级节点，分别为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "inEnable"
              })
            }), "、", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "incoming_check"
              })
            }), "、", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "outEnable"
              })
            }), "、", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "outgoing_check"
              })
            }), "、", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "checkpoint_config"
              })
            }), "和", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "approvalpoint_config"
              })
            }), "。每个节点负责不同的功能，共同构成了完整的策略配置。详细内容参考下表。  - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "inEnable"
              })
            }), "：控制企业空间接收文件的权限。  - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "incoming_check"
              })
            }), "：定义个人空间向企业空间发送文件时的检测规则。参数格式为字符串，内容会在后续详细解释。  - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "outEnable"
              })
            }), "：控制企业空间外发文件的权限。  - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "outgoing_check"
              })
            }), "：定义企业空间向个人空间发送文件时的检测规则。参数格式为字符串，内容会在后续详细解释。  - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "checkpoint_config"
              })
            }), "：配置检测应用的信息，包括应用的包名、组件名、参数、检测函数编码。参数格式为字符串，内容会在后续详细解释。  - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "approvalpoint_config"
              })
            }), "：配置审批点的信息，包括应用的包名和组件名。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "二级节点详细说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "inEnable"
          })
        }), "：控制企业空间接收文件的权限。其值为“0”时，表示禁止；为“1”时，表示允许。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "outEnable"
          })
        }), "：控制企业空间外发文件的权限。其值为“0”时，表示禁止；为“1”时，表示允许。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "incoming_check"
          })
        })
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参数名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "功能描述"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "示例值"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data_list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义个人空间向企业空间发送文件时的检测规则。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[ { \"allow\": \"VirusCheck.result == 0\", \"approval\": \"\", \"check_point\": \"VirusCheck\", \"check_point_name\": \"VirusCheck_in\", \"is_enable\": \"true\", \"forbidden\": \"VirusCheck.result == 1\", \"order\": \"0\" } ]"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "outgoing_check"
          })
        })
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参数名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "功能描述"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "示例值"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data_list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义企业空间向个人空间发送文件时的检测规则。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[ { \"allow\": \"SecurityCheck.Result == 3 or SecurityCheck.Result == 4 or SecurityCheck.Result == 6 or SecurityCheck.Result == 7\", \"approval\": \"SecurityCheck.Result == 10\", \"check_point\": \"SecurityCheck\", \"check_point_name\": \"SecurityCheck_out\", \"is_enable\": \"true\", \"forbidden\": \"SecurityCheck.Result == 0 or SecurityCheck.Result == 1 or SecurityCheck.Result == 12 or SecurityCheck.Result == 2 or SecurityCheck.Result == 5 or SecurityCheck.Result == 8 or SecurityCheck.Result == 9 or SecurityCheck.Result == 11\", \"order\": \"0\" } ]"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "checkpoint_config"
          })
        })
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参数名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "功能描述"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "示例值"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data_list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置检测应用的信息，包括应用的包名、组件名、参数、检测函数编码。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[ { \"check_point\": \"VirusCheck\", \"check_point_name\": \"VirusCheck_in\", \"check_sequence\": \"Serial\", \"order\": \"0\", \"allow\": \"VirusCheck.result == 0\", \"forbidden\": \"VirusCheck.result == 1\" } ]"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "approvalpoint_config"
          })
        })
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参数名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "功能描述"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "示例值"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data_list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义个人空间向企业空间发送文件时的检测规则。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[ { \"bundle_name\": \"com.example.enterprisespacekit_samplecode_clientdemo_arkts\", \"ability_name\": \"TestApprovalAbility\" } ]"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "三级节点详细说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "incoming_check"
          })
        }), "下的", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "data_list"
          })
        })]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参数名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "功能描述"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "示例值"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "allow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "放通动作配置，通过表达式配置。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"VirusCheck.result == 0\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "approval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "审批动作配置，个人空间向企业空间发送文件时的审批不生效，不需要配置。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"VirusCheck.Result == 10\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "check_point"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检测点类型。  SecurityCheck：安全检查  VirusCheck：病毒检查"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"SecurityCheck\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "check_point_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检测点名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"VirusCheck_in\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "is_enable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置个人空间向企业空间发送文件时检测的规则是否生效。可选参数。  true：生效  false：不生效  默认值：true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"true\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "forbidden"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拦截动作配置信息，通过“VirusCheck.Result == xx”样式表达拦截动作，当用“or”连接多个表达式时，多个拦截动作组合配置。“xx”具体取值由业务决定。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"VirusCheck.result == 1 or VirusCheck.result == 2\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检测点顺序号，编号从0开始。空间互传服务会根据编号顺序依次处理检测点。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"0\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "outgoing_check"
          })
        }), "下的", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "data_list"
          })
        })]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参数名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "功能描述"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "示例值"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "allow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "放通动作配置，通过表达式配置。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"SecurityCheck.Result == 3 or SecurityCheck.Result == 4 or SecurityCheck.Result == 6 or SecurityCheck.Result == 7\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "approval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "审批动作配置，通过表达式配置。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"SecurityCheck.Result == 10\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "check_point"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检测点类型。  SecurityCheck：安全检查  VirusCheck：病毒检查"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"SecurityCheck\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "check_point_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检测点名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"SecurityCheck_out\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "is_enable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置个人空间向企业空间发送文件时检测的规则是否生效。可选参数。  true：生效  false：不生效  默认值：true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"true\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "forbidden"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拦截动作配置信息，通过“SecurityCheck.Result == xx”样式表达拦截动作，当用“or”连接多个表达式时，多个拦截动作组合配置。“xx”具体取值由业务决定。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"SecurityCheck.Result == 0 or SecurityCheck.Result == 1 or SecurityCheck.Result == 12 or SecurityCheck.Result == 2 or SecurityCheck.Result == 5 or SecurityCheck.Result == 8 or SecurityCheck.Result == 9 or SecurityCheck.Result == 11\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检测点顺序号，编号从0开始。空间互传服务会根据编号顺序依次处理检测点。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"0\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "checkpoint_config"
          })
        }), "下的", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "data_list"
          })
        })]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参数名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "功能描述"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "示例值"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "check_point_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检测点名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"SecurityCheck\" 或 \"VirusCheck\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundle_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包名。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"com.example.enterprisespacekit_samplecode_clientdemo_arkts\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ability_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件名。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"TestScanAbility\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "func_code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检测函数编码。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"2\" 或 \"3\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检测点类型。  1：病毒检测  2：资产检测，检测资产能否外发  3：其他类型  当前仅支持病毒检测和资产检测类型。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "“1”"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "approvalpoint_config"
          })
        }), "下的", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "data_list"
          })
        })]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参数名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "功能描述"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "示例值"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundle_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包名。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"com.example.enterprisespacekit_samplecode_clientdemo_arkts\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ability_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件名。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"TestApprovalAbility\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "policyContext内容可参考如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"config\": {\n    \"inEnable\": \"1\",\n    \"incoming_check\": {\n      \"data_list\": [\n        {\n          \"allow\": \"VirusCheck.result == 0\",\n          \"approval\": \"\",\n          \"check_point\": \"VirusCheck\",\n          \"check_point_name\": \"VirusCheck_in\",\n          \"is_enable\": \"true\",\n          \"forbidden\": \"VirusCheck.result == 1\",\n          \"order\": \"0\"\n        }\n      ]\n    },\n    \"outEnable\": \"1\",\n    \"outgoing_check\": {\n      \"data_list\": [\n        {\n          \"allow\": \"SecurityCheck.Result == 3 or SecurityCheck.Result == 4 or SecurityCheck.Result == 6 or SecurityCheck.Result == 7\",\n          \"approval\": \"SecurityCheck.Result == 10\",\n          \"check_point\": \"SecurityCheck\",\n          \"check_point_name\": \"SecurityCheck_out\",\n          \"is_enable\": \"true\",\n          \"forbidden\": \"SecurityCheck.Result == 0 or SecurityCheck.Result == 1 or SecurityCheck.Result == 12 or SecurityCheck.Result == 2 or SecurityCheck.Result == 5 or SecurityCheck.Result == 8 or SecurityCheck.Result == 9 or SecurityCheck.Result == 11\",\n          \"order\": \"0\"\n        }\n      ]\n    },\n    \"checkpoint_config\": {\n      \"data_list\": [\n        {\n          \"check_point_name\": \"SecurityCheck\",\n          \"bundle_name\": \"com.example.enterprisespacekit_samplecode_clientdemo_arkts\",\n          \"ability_name\": \"TestScanAbility\",\n          \"func_code\": \"2\",\n          \"type\": \"2\"\n        },\n        {\n          \"check_point_name\": \"VirusCheck\",\n          \"bundle_name\": \"com.example.enterprisespacekit_samplecode_clientdemo_arkts\",\n          \"ability_name\": \"TestScanAbility\",\n          \"func_code\": \"3\",\n          \"type\": \"1\"\n        }\n      ]\n    },\n    \"approvalpoint_config\": {\n      \"data_list\": [\n        {\n          \"bundle_name\": \"com.example.enterprisespacekit_samplecode_clientdemo_arkts\",\n          \"ability_name\": \"TestApprovalAbility\"\n        }\n      ]\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/enterprise-space-api/enterprisespace-arkts/enterprisespace-error-code/enterprisespace-error-code",
        children: "ArkTS API错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "the application does not have permission to call this function."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1020300001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System service exception."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1020300002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { fileTransfer } from '@kit.EnterpriseSpaceKit';\n\nconst policyContext: string =\n  '{\\\"config\\\":{\\\"inEnable\\\":\\\"1\\\",\\\"incoming_check\\\":{\\\"data_list\\\":[{\\\"allow\\\":\\\"VirusCheck.result == 0\\\",\\\"approval\\\":\\\"\\\",\\\"check_point\\\":\\\"VirusCheck\\\",\\\"check_point_name\\\":\\\"VirusCheck_in\\\",\\\"check_sequence\\\":\\\"Serial\\\",\\\"forbidden\\\":\\\"VirusCheck.result == 1\\\",\\\"order\\\":\\\"0\\\"}]},\\\"outEnable\\\":\\\"0\\\",\\\"outgoing_check\\\":{\\\"data_list\\\":[{\\\"allow\\\":\\\"SecurityCheck.Result == 3 or SecurityCheck.Result == 4 or SecurityCheck.Result == 6 or SecurityCheck.Result == 7\\\",\\\"approval\\\":\\\"SecurityCheck.Result == 10\\\",\\\"check_point\\\":\\\"SecurityCheck\\\",\\\"check_point_name\\\":\\\"SecurityCheck_out\\\",\\\"check_sequence\\\":\\\"Serial\\\",\\\"forbidden\\\":\\\"SecurityCheck.Result == 0 or SecurityCheck.Result == 1 or SecurityCheck.Result == 12 or SecurityCheck.Result == 2 or SecurityCheck.Result == 5 or SecurityCheck.Result == 8 or SecurityCheck.Result == 9 or SecurityCheck.Result == 11\\\",\\\"order\\\":\\\"0\\\"}]},\\\"checkpoint_config\\\":{\\\"data_list\\\":[{\\\"check_point_name\\\":\\\"SecurityCheck\\\",\\\"bundle_name\\\":\\\"com.example.enterprisespacekit_samplecode_clientdemo_arkts\\\",\\\"ability_name\\\":\\\"TestScanAbility\\\",\\\"func_code\\\":\\\"2\\\",\\\"type\\\":\\\"2\\\"},{\\\"check_point_name\\\":\\\"VirusCheck\\\",\\\"bundle_name\\\":\\\"com.example.enterprisespacekit_samplecode_clientdemo_arkts\\\",\\\"ability_name\\\":\\\"TestScanAbility\\\",\\\"func_code\\\":\\\"3\\\",\\\"type\\\":\\\"1\\\"}]},\\\"approvalpoint_config\\\":{\\\"data_list\\\":[{\\\"bundle_name\\\":\\\"com.example.enterprisespacekit_samplecode_clientdemo_arkts\\\",\\\"ability_name\\\":\\\"TestApprovalAbility\\\"}]}}}';\ntry {\n  fileTransfer.policyPush(policyContext);\n  console.info(`Succeeded in pushing policy`);\n} catch (err) {\n  console.error(`Failed to push policy. Code: ${err.code}, message: ${err.message}`);\n}\n"
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