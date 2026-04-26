"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["701346"], {
781481(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_debugging_commands_binary_sign_tool_binary_sign_tool_md_bfb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-debugging-commands-binary-sign-tool-binary-sign-tool-md-bfb.json
var site_docs_system_debug_optimize_debugging_commands_binary_sign_tool_binary_sign_tool_md_bfb_namespaceObject = JSON.parse('{"id":"system-debug-optimize/debugging-commands/binary-sign-tool/binary-sign-tool","title":"二进制签名工具","description":"Binary Sign Tool （二进制签名工具），用于对二进制文件进行代码签名，支持通过命令行的方式对标准ELF文件进行代码签名或打印已签名ELF的权限、证书信息。","source":"@site/docs/system-debug-optimize/debugging-commands/binary-sign-tool/binary-sign-tool.md","sourceDirName":"system-debug-optimize/debugging-commands/binary-sign-tool","slug":"/system-debug-optimize/debugging-commands/binary-sign-tool/","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/binary-sign-tool/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":23,"frontMatter":{"title":"二进制签名工具","sidebar_position":23,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/binary-sign-tool","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"netcopilot工具","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/command-line-utilities/network-netcopilot/"},"next":{"title":"媒体开发概览","permalink":"/harmonyos-docs-site/multimedia-development-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/debugging-commands/binary-sign-tool/binary-sign-tool.md


const frontMatter = {
	title: '二进制签名工具',
	sidebar_position: 23,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/binary-sign-tool',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = '二进制签名工具';

const assets = {

};



const toc = [{
  "value": "命令行工具获取",
  "id": "命令行工具获取",
  "level": 2
}, {
  "value": "二进制签名工具命令列表",
  "id": "二进制签名工具命令列表",
  "level": 2
}, {
  "value": "帮助命令（help）",
  "id": "帮助命令help",
  "level": 2
}, {
  "value": "签名命令（sign）",
  "id": "签名命令sign",
  "level": 2
}, {
  "value": "打印签名证书信息命令（display-sign）",
  "id": "打印签名证书信息命令display-sign",
  "level": 2
}, {
  "value": "错误信息",
  "id": "错误信息",
  "level": 2
}, {
  "value": "FILE_NOT_FOUND",
  "id": "file_not_found",
  "level": 3
}, {
  "value": "COMMAND_PARAM_ERROR",
  "id": "command_param_error",
  "level": 3
}, {
  "value": "KEY_PASSWORD_ERROR",
  "id": "key_password_error",
  "level": 3
}, {
  "value": "NOT_SUPPORT_ERROR",
  "id": "not_support_error",
  "level": 3
}, {
  "value": "KEY_ALIAS_ERROR",
  "id": "key_alias_error",
  "level": 3
}, {
  "value": "SIGN_ERROR",
  "id": "sign_error",
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
        id: "二进制签名工具",
        children: "二进制签名工具"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Binary Sign Tool （二进制签名工具），用于对二进制文件进行代码签名，支持通过命令行的方式对标准ELF文件进行代码签名或打印已签名ELF的权限、证书信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命令行工具获取",
      children: "命令行工具获取"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["支持运行在Linux平台的工具：下载最新的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/debugging-commands/command-line-tools-overview",
          children: "Command Line Tools"
        }), "，可以在SDK库openHarmony/toolchains/lib中找到，文件名为binary-sign-tool。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持运行在HarmonyOS PC/2in1平台的工具：从应用商店下载安装DevBox软件，无需额外配置，即可在终端窗口中执行binary-sign-tool命令。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "二进制签名工具命令列表",
      children: "二进制签名工具命令列表"
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
            children: "帮助命令，用于查询工具支持的命令信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sign"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "二进制文件签名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "display-sign"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印文件签名证书信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "帮助命令help",
      children: "帮助命令（help）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 显示帮助信息\nbinary-sign-tool -help\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "签名命令sign",
      children: "签名命令（sign）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "-keyAlias"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥别名，必填项，不区分大小写。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-keyPwd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥口令，可选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-appCertFile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "签名证书文件（证书链，顺序为实体证书-中间CA证书-根证书），必填项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-profileFile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "签名后的Provision Profile文件名，p7b格式，可选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-profileSigned"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示profile文件是否带有签名，1表示有签名，0表示没有签名，默认为1。可选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-signAlg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "签名算法，必填项，包括SHA256withECDSA或SHA384withECDSA。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-keystoreFile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥库文件，非自签名模式时为必填项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-keystorePwd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥库口令，可选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-inFile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入的原始elf文件，必填项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-outFile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出签名后文件，必填项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-moduleFile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "权限module.json文件，可选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-selfSign"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否本机自签名模式，1表示自签名，0表示证书签名，默认为0，可选项。"
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
        children: "# 使用证书对二进制文件签名\nbinary-sign-tool sign -keyAlias \"oh-app1-key-v1\" -signAlg \"SHA256withECDSA\" -appCertFile \"app1.pem\" -profileFile \"app1-profile.p7b\" -profileSigned \"1\" -inFile \"unsigned-elf\" -keystoreFile \"ohtest.p12\" -outFile \"signed-elf\" -keyPwd \"123456\" -keystorePwd \"123456\" -moduleFile \"module.json\"\n# 无证书对二进制文件自签名\nbinary-sign-tool sign -inFile \"unsigned-elf\" -outFile \"signed-elf\" -selfSign \"1\"\n# 执行结果\nwrite code sign data success.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "打印签名证书信息命令display-sign",
      children: "打印签名证书信息命令（display-sign）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-inFile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入的elf文件，必填项。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 打印二进制文件签名证书信息\nbinary-sign-tool display-sign -inFile \"signed-elf\"\n# 执行结果\n# 权限信息输出\n# 1. 无权限信息\npermission is not found\n# 2. 输出权限信息\n# 签名信息输出\n# 1. 无代码签名\ncode signature is not found\n# 2. 自签名模式\ncode signature is self-sign\n# 3. 输出签名证书\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "错误信息",
      children: "错误信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "file_not_found",
      children: "FILE_NOT_FOUND"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行命令，报错提示：ERROR - FILE_NOT_FOUND, code: -102. Details: The 'HarmonyOS.p12' file does not exist or the path is invalid, parameter name '-keystoreFile'"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入文件不存在或路径不正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查输入文件路径或文件名是否正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "command_param_error",
      children: "COMMAND_PARAM_ERROR"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行命令，报错提示：ERROR - COMMAND_PARAM_ERROR, code: -107. Details: 'generate-cert' Parameters error, Param key - value must in pairs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "粘贴命令时，多粘贴了一段内容，导致出现COMMAND_PARAM_ERROR错误。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "填写命令时，如果最后一个参数的value值未填写，将导致COMMAND_PARAM_ERROR错误。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查并修正命令中的多余或错误部分。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key_password_error",
      children: "KEY_PASSWORD_ERROR"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行命令，报错提示：ERROR - KEY_PASSWORD_ERROR, code: -114. Details: 'oh-app1-key-v1' keypair password error"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当密钥对密码错误时，会导致KEY_PASSWORD_ERROR错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查命令中的密码参数是否正确。确保访问不同密钥库时，填写各自的密钥对密码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "not_support_error",
      children: "NOT_SUPPORT_ERROR"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行命令，报错提示：ERROR - NOT_SUPPORT_ERROR, code: -104. Details: Not support file: ./HarmonyOS.p12"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "填写错误的密钥库文件类型会导致NOT_SUPPORT_ERROR错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "确保密钥库文件的后缀为 .p12。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key_alias_error",
      children: "KEY_ALIAS_ERROR"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行命令，报错提示：ERROR - KEY_ALIAS_ERROR, code: -109. Details: 'XXX' key alias already exists and cannot be generated repeatedly"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "密钥库中已存在该别名的密钥对，将导致KEY_ALIAS_ERROR错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "替换需要生成密钥对的别名为其他名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sign_error",
      children: "SIGN_ERROR"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行命令后，报错提示：ERROR - SIGN_ERROR, code: -105. Details: No certificates configured for sign"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "签名密钥与实体证书不匹配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查keyAlias密钥是否使用正确。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查appCertFile是否使用正确，确保密钥与证书匹配。"
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