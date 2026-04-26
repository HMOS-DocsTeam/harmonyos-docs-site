"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["895677"], {
334807(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_hitss_api_ref_hitss_api_ref_md_8c1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-hitss-api-ref-hitss-api-ref-md-8c1.json
var site_docs_ref_hitss_api_ref_hitss_api_ref_md_8c1_namespaceObject = JSON.parse('{"id":"hitss-api-ref/hitss-api-ref","title":"HiTSS","description":"简介","source":"@site/docs-ref/hitss-api-ref/hitss-api-ref.md","sourceDirName":"hitss-api-ref","slug":"/hitss-api-ref/hitss-api-ref","permalink":"/harmonyos-docs-site/ref/hitss-api-ref/hitss-api-ref","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"HiTSS","sidebar_position":12,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/hitss-api-ref","kit":"标准库","last_updated":"2026-04-22","slug":"hitss-api-ref"},"sidebar":"ref","previous":{"title":"OH_NativeBuffer","permalink":"/harmonyos-docs-site/ref/vulkan-guide/vulkan-extensions/capi-vulkan-oh-nativebuffer/capi-vulkan-oh-nativebuffer"},"next":{"title":"Native api中没有导出的符号列表","permalink":"/harmonyos-docs-site/ref/appendixes/musl-peculiar-symbol/musl-peculiar-symbol"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/hitss-api-ref/hitss-api-ref.md


const frontMatter = {
	title: 'HiTSS',
	sidebar_position: 12,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/hitss-api-ref',
	kit: '标准库',
	last_updated: '2026-04-22',
	slug: 'hitss-api-ref'
};
const contentTitle = 'HiTSS';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "HiTSS版本",
  "id": "hitss版本",
  "level": 2
}, {
  "value": "HiTSS支持的能力",
  "id": "hitss支持的能力",
  "level": 2
}, {
  "value": "引入HiTSS能力",
  "id": "引入hitss能力",
  "level": 2
}, {
  "value": "使用示例",
  "id": "使用示例",
  "level": 2
}, {
  "value": "错误码",
  "id": "错误码",
  "level": 2
}, {
  "value": "TSS2_BASE_RC_INTERNAL_ERROR",
  "id": "tss2_base_rc_internal_error",
  "level": 3
}, {
  "value": "TSS2_BASE_RC_SAPI_INIT",
  "id": "tss2_base_rc_sapi_init",
  "level": 3
}, {
  "value": "TSS2_BASE_RC_CANCEL",
  "id": "tss2_base_rc_cancel",
  "level": 3
}, {
  "value": "TSS2_TCTI_RC_MEMORY",
  "id": "tss2_tcti_rc_memory",
  "level": 3
}, {
  "value": "与TCG TSS标准规范的差异",
  "id": "与tcg-tss标准规范的差异",
  "level": 2
}, {
  "value": "相关参考",
  "id": "相关参考",
  "level": 2
}, {
  "value": "HiTSS支持的系统级接口列表",
  "id": "hitss支持的系统级接口列表",
  "level": 2
}, {
  "value": "命令上下文管理",
  "id": "命令上下文管理",
  "level": 3
}, {
  "value": "命令准备",
  "id": "命令准备",
  "level": 3
}, {
  "value": "命令执行",
  "id": "命令执行",
  "level": 3
}, {
  "value": "TPM命令调用",
  "id": "tpm命令调用",
  "level": 3
}, {
  "value": "HiTSS支持的序列化和反序列化接口列表",
  "id": "hitss支持的序列化和反序列化接口列表",
  "level": 2
}, {
  "value": "HiTSS支持的命令传输接口列表",
  "id": "hitss支持的命令传输接口列表",
  "level": 2
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
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
        id: "hitss",
        children: "HiTSS"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HiTSS是基于TPM（Trusted Platform Module）2.0规范开发的组件，它提供了访问TPM 2.0芯片的API，包括命令传输接口、系统级接口和序列化反序列化接口，使开发者可以更方便地使用TPM 2.0芯片用于执行各种TPM操作，例如创建密钥、签名验签等，帮助开发者轻松与TPM 2.0芯片进行通信。HiTSS目前只针对鸿蒙电脑企业客户开放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitss版本",
      children: "HiTSS版本"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API 6.0.0(20)开始，HiTSS匹配TCG （Trusted Computing Group）TSS（TPM2 Software Stack）规范版本为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TCG TSS 2.0 Overview and Common Structures Specification Version 1.0 Revision 10, September 23 2021"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TCG TSS 2.0 Marshaling/Unmarshaling API Specification Version 1.0 Revision 07, 10 March 2020"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TCG TSS 2.0 System Level API (SAPI) Specification Version 1.1 Revision 36, October 1 2021"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TCG TSS 2.0 TPM Command Transmission Interface (TCTI) API Specification Version 1.0 Revision 18, 24 January 2020"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitss支持的能力",
      children: "HiTSS支持的能力"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["命令传输接口，具体内容请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#hitss%E6%94%AF%E6%8C%81%E7%9A%84%E5%91%BD%E4%BB%A4%E4%BC%A0%E8%BE%93%E6%8E%A5%E5%8F%A3%E5%88%97%E8%A1%A8",
          children: "HiTSS支持的命令传输接口列表"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["序列化反序列化接口，具体内容请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#hitss%E6%94%AF%E6%8C%81%E7%9A%84%E5%BA%8F%E5%88%97%E5%8C%96%E5%92%8C%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96%E6%8E%A5%E5%8F%A3%E5%88%97%E8%A1%A8",
          children: "HiTSS支持的序列化和反序列化接口列表"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["系统级接口（由于芯片能力限制，HiTSS只支持部分系统级接口），具体内容请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#hitss%E6%94%AF%E6%8C%81%E7%9A%84%E7%B3%BB%E7%BB%9F%E7%BA%A7%E6%8E%A5%E5%8F%A3%E5%88%97%E8%A1%A8",
          children: "HiTSS支持的系统级接口列表"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "引入hitss能力",
      children: "引入HiTSS能力"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开发应用时，在访问命令传输接口或系统级接口前，需要申请权限：ohos.permission.CALL_TPM_CMD，申请方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
            children: "申请使用受限权限"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果开发者需要使用HiTSS相关能力，首先请添加头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <tss2/tss2_common.h>\n#include <tss2/tss2_tpm2_types.h>\n#include <tss2/tss2_mu.h>\n#include <tss2/tss2_sys.h>\n#include <tss2/tss2_tcti.h>\n#include <tss2/tss2_tctildr.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其次在CMakeLists.txt中添加以下动态链接库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "libtss2-mu.so\nlibtss2-sys.so\nlibtss2-tctildr.so\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <stdio.h>\n#include <tss2/tss2_tctildr.h>\n#include <tss2/tss2_sys.h>\n#include <tss2/tss2_mu.h>\n\n#define SAFE_FREE(p) do { \\\n    if ((p) != NULL) { \\\n        free(p); \\\n        (p) = NULL; \\\n    } \\\n} while (false)\n\n// 初始化上下文\nTSS2_SYS_CONTEXT* InitSysCtx()\n{\n    TSS2_TCTI_CONTEXT *tctiCtx = NULL;\n    const char *nameConf = \"hmsa\";\n    // nameConf参数字符串中不支持设定conf，conf必须为空\n    // 正确用法\n    // Tss2_TctiLdr_Initialize(\"hmsa\", &tctiCtx);\n    // Tss2_TctiLdr_Initialize(\"hmsa:\", &tctiCtx);\n    // 错误用法\n    // Tss2_TctiLdr_Initialize(\"hmsa:/dev/tpm0\", &tctiCtx);\n    TSS2_RC rc = Tss2_TctiLdr_Initialize(nameConf, &tctiCtx);\n    if (rc != TSS2_RC_SUCCESS) {\n        return NULL;\n    }\n    size_t size = Tss2_Sys_GetContextSize(0);\n    TSS2_SYS_CONTEXT *sysCtx = (TSS2_SYS_CONTEXT *)calloc(1, size);\n    if (sysCtx == nullptr) {\n        return NULL;\n    }\n    TSS2_ABI_VERSION ver = TSS2_ABI_VERSION_CURRENT;\n    rc = Tss2_Sys_Initialize(sysCtx, size, tctiCtx, &ver);\n    if (rc != TSS2_RC_SUCCESS) {\n        Tss2_TctiLdr_Finalize(&tctiCtx);\n        SAFE_FREE(sysCtx);\n        return NULL;\n    }\n    return sysCtx;\n}\n\n// 释放上下文\nvoid ReleaseSysCtx(TSS2_SYS_CONTEXT **sysCtx)\n{\n    TSS2_TCTI_CONTEXT *tctiCtx = NULL;\n    TSS2_RC rc = Tss2_Sys_GetTctiContext(*sysCtx, &tctiCtx);\n    if (rc != TSS2_RC_SUCCESS) {\n        return;\n    }\n    if (tctiCtx != NULL) {\n        Tss2_TctiLdr_Finalize(&tctiCtx);\n    }\n    Tss2_Sys_Finalize(*sysCtx);\n    SAFE_FREE(*sysCtx);\n}\n\n// 通过Sys API获取随机数示例\nvoid GetRandomExample()\n{\n    TSS2_SYS_CONTEXT *sysCtx = InitSysCtx();\n    if (sysCtx == NULL) {\n        return;\n    }\n    TPM2B_DIGEST random = {};\n    TSS2_RC rc = Tss2_Sys_GetRandom(sysCtx, NULL, 32, &random, NULL); // 32: 随机数长度\n    if (rc != TSS2_RC_SUCCESS) {\n        printf(\"Failed to get random, error:%d.\\n\", rc);\n    }\n    ReleaseSysCtx(&sysCtx);\n}\n\n// 通过Sys API获取随机数示例\nvoid GetRandomExample2()\n{\n    TSS2_SYS_CONTEXT *sysCtx = InitSysCtx();\n    if (sysCtx == NULL) {\n        return;\n    }\n    TPM2B_DIGEST random = {};\n    do {\n        if (Tss2_Sys_GetRandom_Prepare(sysCtx, 32) != TSS2_RC_SUCCESS) { // 32: 随机数长度\n            break;\n        }\n        if (Tss2_Sys_Execute(sysCtx) != TSS2_RC_SUCCESS) {\n            break;\n        }\n        if (Tss2_Sys_GetRandom_Complete(sysCtx, &random) != TSS2_RC_SUCCESS) {\n            break;\n        }\n    } while(false);\n    ReleaseSysCtx(&sysCtx);\n}\n\n// MU API使用示例\nvoid Int32MarshalUnmarshalExample()\n{\n    INT32 data = 20;\n    uint8_t buffer[sizeof(data)] = { 0 };\n    size_t bufferSize = sizeof(data);\n    // 序列化data\n    TSS2_RC rc = Tss2_MU_INT32_Marshal(data, buffer, bufferSize, NULL);\n    if (rc != TSS2_RC_SUCCESS) {\n        printf(\"Failed to marshal data, error:%d.\\n\", rc);\n    }\n    INT32 dest = 0;\n    // 反序列化data，然后打印\n    rc = Tss2_MU_INT32_Unmarshal(buffer, bufferSize, NULL, &dest);\n    if (rc != TSS2_RC_SUCCESS) {\n        printf(\"Failed to unmarshal data, error:%d.\\n\", rc);\n    }\n    printf(\"The unmarshal result is %d.\\n\", dest);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "错误码",
      children: "错误码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(41331)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下仅介绍HiTSS特有错误码，通用错误码请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://trustedcomputinggroup.org/wp-content/uploads/TSS_Overview_Common_v1_r10_pub09232021.pdf",
        children: "TCG TSS 2.0 Overview and Common Structures Specification"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tss2_base_rc_internal_error",
      children: "TSS2_BASE_RC_INTERNAL_ERROR"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内部错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "代码内部处理逻辑与预期不符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查代码逻辑和芯片状态是否正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tss2_base_rc_sapi_init",
      children: "TSS2_BASE_RC_SAPI_INIT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SAPI上下文初始化失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数不正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查函数入参是否正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tss2_base_rc_cancel",
      children: "TSS2_BASE_RC_CANCEL"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令取消错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令队列已满。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "尝试重试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tss2_tcti_rc_memory",
      children: "TSS2_TCTI_RC_MEMORY"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TCTI接口内存错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备内存不足或其它内存异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查看设备可用内存是否大于申请内存，并及时清理设备内存。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "与tcg-tss标准规范的差异",
      children: "与TCG TSS标准规范的差异"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下类型和结构体与TCG TSS标准规范存在差异，HiTSS在标准规范基础上进行了能力扩充和错误修复。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// HiTSS新增宏定义\n#define TPM2_ST_ATTEST_NV_DIGEST ((TPM2_ST) 0x801C)\n\n// HiTSS新增nvDigest字段\ntypedef union TPMU_ATTEST TPMU_ATTEST;\nunion TPMU_ATTEST {\n    TPMS_CERTIFY_INFO certify; /* TPM2_ST_ATTEST_CERTIFY */\n    TPMS_CREATION_INFO creation; /* TPM2_ST_ATTEST_CREATION */\n    TPMS_QUOTE_INFO quote; /* TPM2_ST_ATTEST_QUOTE */\n    TPMS_COMMAND_AUDIT_INFO commandAudit; /* TPM2_ST_ATTEST_COMMAND_AUDIT */\n    TPMS_SESSION_AUDIT_INFO sessionAudit; /* TPM2_ST_ATTEST_SESSION_AUDIT */\n    TPMS_TIME_ATTEST_INFO time; /* TPM2_ST_ATTEST_TIME */\n    TPMS_NV_CERTIFY_INFO nv; /* TPM2_ST_ATTEST_NV */\n    TPMS_NV_DIGEST_CERTIFY_INFO nvDigest; /* TPM2_ST_ATTEST_NV_DIGEST */\n};\n\n// HiTSS新增类型\ntypedef TPM2_KEY_BITS TPMI_TDES_KEY_BITS;\n\n// HiTSS新增tdes字段\ntypedef union TPMU_SYM_KEY_BITS TPMU_SYM_KEY_BITS;\nunion TPMU_SYM_KEY_BITS {\n    TPMI_TDES_KEY_BITS tdes; /* TPM2_ALG_TDES */\n    TPMI_AES_KEY_BITS aes; /* TPM2_ALG_AES */\n    TPMI_SM4_KEY_BITS sm4; /* TPM2_ALG_SM4 */\n    TPMI_CAMELLIA_KEY_BITS camellia; /* TPM2_ALG_CAMELLIA */\n    TPM2_KEY_BITS sym;\n    TPMI_ALG_HASH exclusiveOr; /* TPM2_ALG_XOR */\n    TPMS_EMPTY null; /* TPM2_ALG_NULL */\n};\n\n// HiTSS新增tdes字段\ntypedef union TPMU_SYM_MODE TPMU_SYM_MODE;\nunion TPMU_SYM_MODE {\n    TPMI_ALG_SYM_MODE tdes; /* TPM2_ALG_TDES */\n    TPMI_ALG_SYM_MODE aes; /* TPM2_ALG_AES */\n    TPMI_ALG_SYM_MODE sm4; /* TPM2_ALG_SM4 */\n    TPMI_ALG_SYM_MODE camellia; /* TPM2_ALG_CAMELLIA */\n    TPMI_ALG_SYM_MODE sym;\n    TPMS_EMPTY exclusiveOr; /* TPM2_ALG_XOR */\n    TPMS_EMPTY null; /* TPM2_ALG_NULL */\n};\n\n// TCG规范中缺失的定义\ntypedef UINT32 TPM2_AT;\n\n// TCG规范中缺失的定义\n#define TPM2_MAX_AC_CAPABILITIES (TPM2_MAX_CAP_BUFFER / sizeof(TPMS_AC_OUTPUT))\n\n// 为方便用户使用，HiTSS新增TPM2B结构体\ntypedef struct {\n    UINT16 size;\n    BYTE buffer[];\n} TPM2B;\n\n// TCG规范中缺失的定义\ntypedef TPM2_HANDLE TPMI_RH_HIERARCHY_POLICY;\n\n// TCG规范中错误定义了tag字段的类型，HiTSS进行了修正\ntypedef struct TPMS_AC_OUTPUT TPMS_AC_OUTPUT;\nstruct TPMS_AC_OUTPUT {\n    TPM2_AT tag;\n    UINT32 data;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "相关参考",
      children: "相关参考"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://trustedcomputinggroup.org/wp-content/uploads/TCG_TSS_Marshaling_Unmarshaling_API_v1p0_r07_pub.pdf",
          children: "TCG TSS 2.0 Marshaling/Unmarshaling API Specification"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://trustedcomputinggroup.org/wp-content/uploads/TSS_SAPI_v1p1_r36_pub10012021.pdf",
          children: "TCG TSS 2.0 System Level API (SAPI) Specification"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://trustedcomputinggroup.org/wp-content/uploads/TCG_TSS_TCTI_v1p0_r18_pub.pdf",
          children: "TCG TSS 2.0 TPM Command Transmission Interface (TCTI) API Specification"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://trustedcomputinggroup.org/wp-content/uploads/TSS_Overview_Common_v1_r10_pub09232021.pdf",
          children: "TCG TSS 2.0 Overview and Common Structures Specification"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitss支持的系统级接口列表",
      children: "HiTSS支持的系统级接口列表"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "命令上下文管理",
      children: "命令上下文管理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tss2_Sys_GetContextSize"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tss2_Sys_Initialize"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tss2_Sys_Finalize"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tss2_Sys_GetTctiContext"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "命令准备",
      children: "命令准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tss2_Sys_SetCmdAuths"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "命令执行",
      children: "命令执行"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tss2_Sys_ExecuteAsync"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tss2_Sys_ExecuteFinish"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tss2_Sys_Execute"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tss2_Sys_GetRspAuths"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tpm命令调用",
      children: "TPM命令调用"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Prepare接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complete接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "命令接口"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Startup_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Startup_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Startup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Shutdown_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Shutdown_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Shutdown"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_SelfTest_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_SelfTest_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_SelfTest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_IncrementalSelfTest_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_IncrementalSelfTest_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_IncrementalSelfTest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_GetTestResult_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_GetTestResult_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_GetTestResult"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_StartAuthSession_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_StartAuthSession_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_StartAuthSession"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicyRestart_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicyRestart_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicyRestart"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Create_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Create_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Create"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Load_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Load_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Load"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_LoadExternal_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_LoadExternal_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_LoadExternal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_ReadPublic_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_ReadPublic_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_ReadPublic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_ActivateCredential_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_ActivateCredential_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_ActivateCredential"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_MakeCredential_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_MakeCredential_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_MakeCredential"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Unseal_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Unseal_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Unseal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_ObjectChangeAuth_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_ObjectChangeAuth_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_ObjectChangeAuth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_CreateLoaded_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_CreateLoaded_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_CreateLoaded"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Duplicate_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Duplicate_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Duplicate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Rewrap_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Rewrap_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Rewrap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Import_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Import_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Import"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_RSA_Encrypt_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_RSA_Encrypt_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_RSA_Encrypt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_RSA_Decrypt_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_RSA_Decrypt_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_RSA_Decrypt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_ECDH_KeyGen_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_ECDH_KeyGen_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_ECDH_KeyGen"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_ECDH_ZGen_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_ECDH_ZGen_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_ECDH_ZGen"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_ECC_Parameters_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_ECC_Parameters_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_ECC_Parameters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_ZGen_2Phase_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_ZGen_2Phase_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_ZGen_2Phase"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_EncryptDecrypt_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_EncryptDecrypt_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_EncryptDecrypt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_EncryptDecrypt2_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_EncryptDecrypt2_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_EncryptDecrypt2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Hash_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Hash_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Hash"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_HMAC_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_HMAC_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_HMAC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_GetRandom_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_GetRandom_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_GetRandom"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_StirRandom_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_StirRandom_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_StirRandom"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_HashSequenceStart_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_HashSequenceStart_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_HashSequenceStart"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_SequenceUpdate_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_SequenceUpdate_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_SequenceUpdate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_SequenceComplete_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_SequenceComplete_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_SequenceComplete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Certify_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Certify_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Certify"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_CertifyCreation_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_CertifyCreation_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_CertifyCreation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Quote_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Quote_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Quote"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Commit_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Commit_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Commit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_EC_Ephemeral_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_EC_Ephemeral_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_EC_Ephemeral"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_VerifySignature_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_VerifySignature_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_VerifySignature"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Sign_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Sign_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Sign"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PCR_Extend_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PCR_Extend_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PCR_Extend"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PCR_Event_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PCR_Event_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PCR_Event"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PCR_Read_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PCR_Read_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PCR_Read"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PCR_Allocate_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PCR_Allocate_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PCR_Allocate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PCR_Reset_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PCR_Reset_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PCR_Reset"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicySigned_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicySigned_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicySigned"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicySecret_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicySecret_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicySecret"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicyTicket_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicyTicket_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicyTicket"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicyOR_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicyOR_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicyOR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicyPCR_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicyPCR_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicyPCR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicyCommandCode_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicyCommandCode_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicyCommandCode"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicyCpHash_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicyCpHash_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicyCpHash"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicyAuthValue_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicyAuthValue_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicyAuthValue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicyPassword_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicyPassword_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicyPassword"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicyGetDigest_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicyGetDigest_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_PolicyGetDigest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_CreatePrimary_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_CreatePrimary_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_CreatePrimary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_HierarchyControl_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_HierarchyControl_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_HierarchyControl"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Clear_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Clear_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_Clear"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_ClearControl_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_ClearControl_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_ClearControl"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_HierarchyChangeAuth_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_HierarchyChangeAuth_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_HierarchyChangeAuth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_DictionaryAttackLockReset_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_DictionaryAttackLockReset_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_DictionaryAttackLockReset"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_DictionaryAttackParameters_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_DictionaryAttackParameters_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_DictionaryAttackParameters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_ContextSave_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_ContextSave_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_ContextSave"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_ContextLoad_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_ContextLoad_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_ContextLoad"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_FlushContext_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_FlushContext_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_FlushContext"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_EvictControl_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_EvictControl_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_EvictControl"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_GetCapability_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_GetCapability_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_GetCapability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_TestParms_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_TestParms_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_TestParms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_DefineSpace_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_DefineSpace_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_DefineSpace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_UndefineSpace_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_UndefineSpace_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_UndefineSpace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_ReadPublic_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_ReadPublic_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_ReadPublic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_Write_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_Write_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_Write"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_Increment_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_Increment_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_Increment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_Extend_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_Extend_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_Extend"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_SetBits_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_SetBits_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_SetBits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_WriteLock_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_WriteLock_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_WriteLock"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_GlobalWriteLock_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_GlobalWriteLock_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_GlobalWriteLock"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_Read_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_Read_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_Read"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_ReadLock_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_ReadLock_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_ReadLock"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_ChangeAuth_Prepare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_ChangeAuth_Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_Sys_NV_ChangeAuth"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitss支持的序列化和反序列化接口列表",
      children: "HiTSS支持的序列化和反序列化接口列表"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Marshal接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Unmarshal接口"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_INT8_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_INT8_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_UINT8_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_UINT8_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_INT16_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_INT16_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_UINT16_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_UINT16_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_INT32_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_INT32_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_UINT32_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_UINT32_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_INT64_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_INT64_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_UINT64_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_UINT64_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_BYTE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_BYTE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_ALGORITHM_ID_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_ALGORITHM_ID_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_MODIFIER_INDICATOR_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_MODIFIER_INDICATOR_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_AUTHORIZATION_SIZE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_AUTHORIZATION_SIZE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_PARAMETER_SIZE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_PARAMETER_SIZE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_KEY_SIZE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_KEY_SIZE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_KEY_BITS_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_KEY_BITS_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_SPEC_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_SPEC_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_GENERATED_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_GENERATED_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_ALG_ID_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_ALG_ID_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_ECC_CURVE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_ECC_CURVE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_CC_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_CC_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_RC_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_RC_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_CLOCK_ADJUST_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_CLOCK_ADJUST_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_EO_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_EO_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_ST_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_ST_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_SU_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_SU_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_SE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_SE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_CAP_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_CAP_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_PT_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_PT_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_PT_PCR_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_PT_PCR_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_PS_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_PS_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_HANDLE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_HANDLE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_HT_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_HT_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_RH_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_RH_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_HC_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_HC_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMA_ALGORITHM_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMA_ALGORITHM_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMA_OBJECT_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMA_OBJECT_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMA_SESSION_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMA_SESSION_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMA_LOCALITY_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMA_LOCALITY_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMA_PERMANENT_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMA_PERMANENT_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMA_STARTUP_CLEAR_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMA_STARTUP_CLEAR_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMA_MEMORY_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMA_MEMORY_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMA_CC_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMA_CC_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMA_MODES_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMA_MODES_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMA_X509_KEY_USAGE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMA_X509_KEY_USAGE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_YES_NO_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_YES_NO_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_DH_OBJECT_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_DH_OBJECT_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_DH_PARENT_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_DH_PARENT_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_DH_PERSISTENT_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_DH_PERSISTENT_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_DH_ENTITY_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_DH_ENTITY_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_DH_PCR_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_DH_PCR_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_SH_AUTH_SESSION_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_SH_AUTH_SESSION_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_SH_HMAC_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_SH_HMAC_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_SH_POLICY_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_SH_POLICY_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_DH_CONTEXT_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_DH_CONTEXT_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_DH_SAVED_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_DH_SAVED_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_RH_HIERARCHY_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_RH_HIERARCHY_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_RH_ENABLES_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_RH_ENABLES_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_RH_HIERARCHY_AUTH_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_RH_HIERARCHY_AUTH_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_RH_HIERARCHY_POLICY_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_RH_HIERARCHY_POLICY_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_RH_PLATFORM_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_RH_PLATFORM_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_RH_OWNER_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_RH_OWNER_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_RH_ENDORSEMENT_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_RH_ENDORSEMENT_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_RH_PROVISION_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_RH_PROVISION_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_RH_CLEAR_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_RH_CLEAR_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_RH_NV_AUTH_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_RH_NV_AUTH_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_RH_LOCKOUT_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_RH_LOCKOUT_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_RH_NV_INDEX_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_RH_NV_INDEX_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_RH_AC_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_RH_AC_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_RH_ACT_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_RH_ACT_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ALG_HASH_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ALG_HASH_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ALG_ASYM_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ALG_ASYM_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ALG_SYM_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ALG_SYM_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ALG_SYM_OBJECT_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ALG_SYM_OBJECT_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ALG_SYM_MODE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ALG_SYM_MODE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ALG_KDF_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ALG_KDF_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ALG_SIG_SCHEME_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ALG_SIG_SCHEME_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ECC_KEY_EXCHANGE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ECC_KEY_EXCHANGE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ST_COMMAND_TAG_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ST_COMMAND_TAG_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ALG_MAC_SCHEME_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ALG_MAC_SCHEME_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ALG_CIPHER_MODE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ALG_CIPHER_MODE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_EMPTY_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_EMPTY_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_ALGORITHM_DESCRIPTION_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_ALGORITHM_DESCRIPTION_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_HA_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_HA_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_HA_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_HA_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_DIGEST_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_DIGEST_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_DATA_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_DATA_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_NONCE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_NONCE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_AUTH_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_AUTH_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_OPERAND_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_OPERAND_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_EVENT_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_EVENT_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_MAX_BUFFER_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_MAX_BUFFER_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_MAX_NV_BUFFER_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_MAX_NV_BUFFER_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_TIMEOUT_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_TIMEOUT_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_IV_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_IV_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_NAME_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_NAME_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_NAME_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_NAME_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_PCR_SELECT_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_PCR_SELECT_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_PCR_SELECTION_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_PCR_SELECTION_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_TK_CREATION_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_TK_CREATION_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_TK_VERIFIED_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_TK_VERIFIED_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_TK_AUTH_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_TK_AUTH_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_TK_HASHCHECK_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_TK_HASHCHECK_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_ALG_PROPERTY_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_ALG_PROPERTY_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_TAGGED_PROPERTY_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_TAGGED_PROPERTY_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_TAGGED_PCR_SELECT_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_TAGGED_PCR_SELECT_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_TAGGED_POLICY_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_TAGGED_POLICY_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPML_CC_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPML_CC_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPML_CCA_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPML_CCA_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPML_ALG_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPML_ALG_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPML_HANDLE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPML_HANDLE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPML_DIGEST_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPML_DIGEST_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPML_DIGEST_VALUES_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPML_DIGEST_VALUES_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPML_PCR_SELECTION_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPML_PCR_SELECTION_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPML_ALG_PROPERTY_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPML_ALG_PROPERTY_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPML_TAGGED_TPM_PROPERTY_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPML_TAGGED_TPM_PROPERTY_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPML_TAGGED_PCR_PROPERTY_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPML_TAGGED_PCR_PROPERTY_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPML_ECC_CURVE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPML_ECC_CURVE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPML_TAGGED_POLICY_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPML_TAGGED_POLICY_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_CAPABILITIES_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_CAPABILITIES_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_CAPABILITY_DATA_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_CAPABILITY_DATA_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_CLOCK_INFO_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_CLOCK_INFO_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_TIME_INFO_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_TIME_INFO_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_TIME_ATTEST_INFO_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_TIME_ATTEST_INFO_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_CERTIFY_INFO_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_CERTIFY_INFO_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_QUOTE_INFO_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_QUOTE_INFO_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_COMMAND_AUDIT_INFO_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_COMMAND_AUDIT_INFO_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SESSION_AUDIT_INFO_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SESSION_AUDIT_INFO_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_CREATION_INFO_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_CREATION_INFO_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_NV_CERTIFY_INFO_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_NV_CERTIFY_INFO_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ST_ATTEST_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ST_ATTEST_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_ATTEST_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_ATTEST_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_ATTEST_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_ATTEST_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_ATTEST_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_ATTEST_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_AUTH_COMMAND_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_AUTH_COMMAND_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_AUTH_RESPONSE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_AUTH_RESPONSE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_AES_KEY_BITS_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_AES_KEY_BITS_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_SM4_KEY_BITS_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_SM4_KEY_BITS_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_CAMELLIA_KEY_BITS_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_CAMELLIA_KEY_BITS_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_SYM_KEY_BITS_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_SYM_KEY_BITS_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_SYM_MODE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_SYM_MODE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_SYM_DEF_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_SYM_DEF_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_SYM_DEF_OBJECT_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_SYM_DEF_OBJECT_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_SYM_KEY_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_SYM_KEY_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SYMCIPHER_PARMS_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SYMCIPHER_PARMS_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_LABEL_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_LABEL_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_DERIVE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_DERIVE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_DERIVE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_DERIVE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_SENSITIVE_CREATE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_SENSITIVE_CREATE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_SENSITIVE_DATA_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_SENSITIVE_DATA_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SENSITIVE_CREATE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SENSITIVE_CREATE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_SENSITIVE_CREATE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_SENSITIVE_CREATE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SCHEME_HASH_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SCHEME_HASH_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SCHEME_ECDAA_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SCHEME_ECDAA_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ALG_KEYEDHASH_SCHEME_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ALG_KEYEDHASH_SCHEME_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SCHEME_HMAC_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SCHEME_HMAC_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SCHEME_XOR_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SCHEME_XOR_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_SCHEME_KEYEDHASH_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_SCHEME_KEYEDHASH_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_KEYEDHASH_SCHEME_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_KEYEDHASH_SCHEME_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SIG_SCHEME_RSASSA_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SIG_SCHEME_RSASSA_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SIG_SCHEME_RSAPSS_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SIG_SCHEME_RSAPSS_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SIG_SCHEME_ECDSA_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SIG_SCHEME_ECDSA_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SIG_SCHEME_SM2_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SIG_SCHEME_SM2_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SIG_SCHEME_ECSCHNORR_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SIG_SCHEME_ECSCHNORR_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SIG_SCHEME_ECDAA_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SIG_SCHEME_ECDAA_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_SIG_SCHEME_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_SIG_SCHEME_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_SIG_SCHEME_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_SIG_SCHEME_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_ENC_SCHEME_OAEP_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_ENC_SCHEME_OAEP_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_ENC_SCHEME_RSAES_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_ENC_SCHEME_RSAES_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_KEY_SCHEME_ECDH_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_KEY_SCHEME_ECDH_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_KEY_SCHEME_ECMQV_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_KEY_SCHEME_ECMQV_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SCHEME_MGF1_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SCHEME_MGF1_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SCHEME_KDF1_SP800_56A_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SCHEME_KDF1_SP800_56A_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SCHEME_KDF2_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SCHEME_KDF2_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SCHEME_KDF1_SP800_108_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SCHEME_KDF1_SP800_108_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_KDF_SCHEME_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_KDF_SCHEME_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_KDF_SCHEME_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_KDF_SCHEME_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ALG_ASYM_SCHEME_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ALG_ASYM_SCHEME_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_ASYM_SCHEME_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_ASYM_SCHEME_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_ASYM_SCHEME_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_ASYM_SCHEME_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ALG_RSA_SCHEME_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ALG_RSA_SCHEME_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_RSA_SCHEME_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_RSA_SCHEME_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ALG_RSA_DECRYPT_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ALG_RSA_DECRYPT_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_RSA_DECRYPT_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_RSA_DECRYPT_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_PUBLIC_KEY_RSA_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_PUBLIC_KEY_RSA_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_RSA_KEY_BITS_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_RSA_KEY_BITS_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_PRIVATE_KEY_RSA_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_PRIVATE_KEY_RSA_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_ECC_PARAMETER_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_ECC_PARAMETER_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_ECC_POINT_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_ECC_POINT_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_ECC_POINT_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_ECC_POINT_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ALG_ECC_SCHEME_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ALG_ECC_SCHEME_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ECC_CURVE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ECC_CURVE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_ECC_SCHEME_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_ECC_SCHEME_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_ALGORITHM_DETAIL_ECC_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_ALGORITHM_DETAIL_ECC_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SIGNATURE_RSA_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SIGNATURE_RSA_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SIGNATURE_RSASSA_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SIGNATURE_RSASSA_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SIGNATURE_RSAPSS_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SIGNATURE_RSAPSS_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SIGNATURE_ECC_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SIGNATURE_ECC_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SIGNATURE_ECDSA_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SIGNATURE_ECDSA_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SIGNATURE_ECDAA_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SIGNATURE_ECDAA_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SIGNATURE_SM2_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SIGNATURE_SM2_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SIGNATURE_ECSCHNORR_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_SIGNATURE_ECSCHNORR_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_SIGNATURE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_SIGNATURE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_SIGNATURE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_SIGNATURE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_ENCRYPTED_SECRET_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_ENCRYPTED_SECRET_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_ENCRYPTED_SECRET_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_ENCRYPTED_SECRET_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ALG_PUBLIC_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_ALG_PUBLIC_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_PUBLIC_ID_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_PUBLIC_ID_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_KEYEDHASH_PARMS_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_KEYEDHASH_PARMS_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_ASYM_PARMS_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_ASYM_PARMS_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_RSA_PARMS_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_RSA_PARMS_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_ECC_PARMS_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_ECC_PARMS_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_PUBLIC_PARMS_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_PUBLIC_PARMS_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_PUBLIC_PARMS_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_PUBLIC_PARMS_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_PUBLIC_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_PUBLIC_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_PUBLIC_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_PUBLIC_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_TEMPLATE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_TEMPLATE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_PRIVATE_VENDOR_SPECIFIC_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_PRIVATE_VENDOR_SPECIFIC_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_SENSITIVE_COMPOSITE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMU_SENSITIVE_COMPOSITE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_SENSITIVE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMT_SENSITIVE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_SENSITIVE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_SENSITIVE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU__PRIVATE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU__PRIVATE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_PRIVATE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_PRIVATE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_ID_OBJECT_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_ID_OBJECT_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_ID_OBJECT_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_ID_OBJECT_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_NV_INDEX_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_NV_INDEX_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_NT_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_NT_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_NV_PIN_COUNTER_PARAMETERS_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_NV_PIN_COUNTER_PARAMETERS_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMA_NV_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMA_NV_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_NV_PUBLIC_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_NV_PUBLIC_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_NV_PUBLIC_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_NV_PUBLIC_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_CONTEXT_SENSITIVE_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_CONTEXT_SENSITIVE_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_CONTEXT_DATA_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_CONTEXT_DATA_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_CONTEXT_DATA_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_CONTEXT_DATA_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_CONTEXT_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_CONTEXT_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_CREATION_DATA_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_CREATION_DATA_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_CREATION_DATA_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2B_CREATION_DATA_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_ACT_DATA_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_ACT_DATA_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMA_ACT_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMA_ACT_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_AT_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPM2_AT_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_NV_DIGEST_CERTIFY_INFO_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_NV_DIGEST_CERTIFY_INFO_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_TDES_KEY_BITS_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMI_TDES_KEY_BITS_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_AC_OUTPUT_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPMS_AC_OUTPUT_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPML_ACT_DATA_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPML_ACT_DATA_Unmarshal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPML_AC_CAPABILITIES_Marshal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tss2_MU_TPML_AC_CAPABILITIES_Unmarshal"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hitss支持的命令传输接口列表",
      children: "HiTSS支持的命令传输接口列表"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tss2_TctiLdr_Initialize"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tss2_TctiLdr_Initialize_Ex"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tss2_TctiLdr_Finalize"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tss2_TctiLdr_GetInfo"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tss2_TctiLdr_FreeInfo"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit暂不支持模拟器。"
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
41331(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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