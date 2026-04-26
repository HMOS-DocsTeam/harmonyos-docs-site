"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["486593"], {
828658(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_data_protection_kit_dlp_dlp_guidelines_dlp_guidelines_md_15e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-data-protection-kit-dlp-dlp-guidelines-dlp-guidelines-md-15e.json
var site_docs_system_security_data_protection_kit_dlp_dlp_guidelines_dlp_guidelines_md_15e_namespaceObject = JSON.parse('{"id":"system-security/data-protection-kit/dlp/dlp-guidelines/dlp-guidelines","title":"数据防泄漏服务开发指导","description":"DLP是系统提供的系统级的数据防泄漏解决方案，提供一种称为DLP的文件格式。后缀格式为“原始文件名（包含原始文件后缀）.dlp”，例如“test.docx.dlp”，文件由授权凭证和原始文件密文组成。","source":"@site/docs/system-security/data-protection-kit/dlp/dlp-guidelines/dlp-guidelines.md","sourceDirName":"system-security/data-protection-kit/dlp/dlp-guidelines","slug":"/system-security/data-protection-kit/dlp/dlp-guidelines/","permalink":"/harmonyos-docs-site/system-security/data-protection-kit/dlp/dlp-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"数据防泄漏服务开发指导","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/dlp-guidelines","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"数据防泄漏服务简介","permalink":"/harmonyos-docs-site/system-security/data-protection-kit/dlp/dlp-overview/"},"next":{"title":"适配加密分享","permalink":"/harmonyos-docs-site/system-security/data-protection-kit/dlp/dlp-adapting-encrypted-sharing/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/data-protection-kit/dlp/dlp-guidelines/dlp-guidelines.md


const frontMatter = {
	title: '数据防泄漏服务开发指导',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/dlp-guidelines',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '数据防泄漏服务开发指导';

const assets = {

};



const toc = [{
  "value": "沙箱限制",
  "id": "沙箱限制",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "预置操作",
  "id": "预置操作",
  "level": 3
}, {
  "value": "导入模块",
  "id": "导入模块",
  "level": 3
}, {
  "value": "应用支持打开DLP文件绑定的FUSE文件",
  "id": "应用支持打开dlp文件绑定的fuse文件",
  "level": 3
}, {
  "value": "应用根据DLP文件的权限对界面进行适配",
  "id": "应用根据dlp文件的权限对界面进行适配",
  "level": 3
}, {
  "value": "应用与DLP沙箱分身数据共享",
  "id": "应用与dlp沙箱分身数据共享",
  "level": 3
}, {
  "value": "应用支持更新最近打开记录",
  "id": "应用支持更新最近打开记录",
  "level": 3
}, {
  "value": "应用内支持打开选定的DLP文件",
  "id": "应用内支持打开选定的dlp文件",
  "level": 3
}, {
  "value": "应用内支持对DLP文件权限设置",
  "id": "应用内支持对dlp文件权限设置",
  "level": 3
}, {
  "value": "其他DLP能力增强",
  "id": "其他dlp能力增强",
  "level": 3
}, {
  "value": "典型问题自排查",
  "id": "典型问题自排查",
  "level": 2
}, {
  "value": "应用可以打开正常文件，无法打开FUSE文件",
  "id": "应用可以打开正常文件无法打开fuse文件",
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
        id: "数据防泄漏服务开发指导",
        children: "数据防泄漏服务开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DLP是系统提供的系统级的数据防泄漏解决方案，提供一种称为DLP的文件格式。后缀格式为“原始文件名（包含原始文件后缀）.dlp”，例如“test.docx.dlp”，文件由授权凭证和原始文件密文组成。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过端云协同认证（需要联网）来获取文件的访问授权，授权类型包含只读、编辑、文件拥有者三种。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "只读：能读取文件内容但不能修改。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "编辑：能够读写文件内容，但不能修改文件权限配置。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件拥有者：可读写文件、修改权限配置、恢复原始文件等。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用需要访问DLP文件时，系统会自动安装应用的DLP沙箱分身应用，相当于完全独立的应用，数据和配置会继承原应用，但相互之间并不共享。分身应用在运行时会处于DLP沙箱环境中，访问外部的权限会被限制，以防止数据的泄漏。每当打开一个新的DLP文件会生成一个应用沙箱分身，沙箱应用之间也是相互隔离的，当应用关闭后应用分身会自动卸载，沙箱期间产生的临时数据也会丢弃。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "正常情况下，应用不会感知到沙箱的存在，访问的也是解密后的明文，和访问普通文件没有区别，但由于DLP沙箱会限制其访问外部的权限（例如网络、剪切板、截屏、录屏、蓝牙等）。为了更好的用户体验，需要应用进行适配，例如文件只读的情况下，不应显示“保存”按钮，不应主动联网等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "沙箱限制",
      children: "沙箱限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用进入DLP沙箱状态时，可以申请的权限将受到限制，根据DLP文件授权类型不同，限制也不相同，如下表："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "权限名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "授权类型：只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "授权类型：编辑/文件拥有者"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.permission.USE_BLUETOOTH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "允许应用使用蓝牙。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "禁止"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "禁止"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.permission.INTERNET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "允许应用访问网络。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "禁止"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "禁止"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.permission.DISTRIBUTED_DATASYNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "允许应用与远程设备交换用户数据（如图片、音乐、视频、及应用数据等）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "禁止"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "禁止"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.permission.WRITE_MEDIA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用读写用户媒体文件，如视频、音频、图片等，需要申请此权限。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "禁止"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "允许"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.permission.NFC_TAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "允许应用使用NFC。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "禁止"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "允许"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isDLPFile(fd: number): Promise<boolean>  isDLPFile(fd: number, callback: AsyncCallback<boolean>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断是否是dlp文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getDLPPermissionInfo(): Promise<DLPPermissionInfo>  getDLPPermissionInfo(callback: AsyncCallback<DLPPermissionInfo>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前沙箱应用的权限类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getOriginalFileName(fileName: string): string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取dlp文件原始文件名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getDLPSuffix(): string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取dlp文件dlp后缀名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'openDLPFile', listener: Callback<AccessedDLPFileInfo>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册dlp文件打开事件监听，用于原始应用获取dlp文件打开事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'openDLPFile', listener?: Callback<AccessedDLPFileInfo>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消dlp文件打开事件监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isInSandbox(): Promise<boolean>  isInSandbox(callback: AsyncCallback<boolean>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断当前是否是dlp沙箱应用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getDLPSupportedFileTypes(): Promise<Array<string>>  getDLPSupportedFileTypes(callback: AsyncCallback<Array<string>>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前系统支持添加权限保护的文件格式类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setRetentionState(docUris: Array<string>): Promise<void>  setRetentionState(docUris: Array<string>, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置dlp分身应用保留状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cancelRetentionState(docUris: Array<string>): Promise<void>  cancelRetentionState(docUris: Array<string>, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消dlp分身应用保留状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getRetentionSandboxList(bundleName?: string): Promise<Array<RetentionSandboxInfo>>  getRetentionSandboxList(bundleName: string, callback: AsyncCallback<Array<RetentionSandboxInfo>>): void  getRetentionSandboxList(callback: AsyncCallback<Array<RetentionSandboxInfo>>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前保留沙箱列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getDLPFileAccessRecords(): Promise<Array<AccessedDLPFileInfo>>  getDLPFileAccessRecords(callback: AsyncCallback<Array<AccessedDLPFileInfo>>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取dlp文件访问记录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setSandboxAppConfig(configInfo: string): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置沙箱应用配置信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getSandboxAppConfig(): Promise<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询沙箱应用配置信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cleanSandboxAppConfig(): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清理沙箱应用配置信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startDLPManagerForResult(context: common.UIAbilityContext, want: Want): Promise<DLPManagerResult>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在当前UIAbility界面以无边框形式打开DLP权限管理应用（只支持Stage模型）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DLP作为HarmonyOS系统级数据防泄漏方案，可以让应用在零适配或低代码适配的情况下接入DLP能力，打开DLP文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用户使用默认应用或指定应用打开DLP文件时，DLP框架将会完成："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "安装此应用的DLP沙箱分身应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为这个DLP文件绑定一个FUSE文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将FUSE文件分享给DLP沙箱分身应用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现DLP沙箱分身在无感加解密流程下访问DLP文件解密后的内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当三方应用接入DLP（支持打开DLP文件）时，为了更优的体验，可从以下方面完成适配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "预置操作",
      children: "预置操作"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文档提供接口示例代码，如需要了解工程项目创建方式，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-project",
        children: "工程创建"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用接入DLP能力，支持被安装为DLP沙箱分身应用，打开DLP文件，需要具备以下条件："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用需要支持打开以下文件类型中的其中一种或几种，也就是当前DLP支持的文件类型。包括："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "  \".doc\", \".docm\", \".docx\", \".dot\", \".dotm\", \".dotx\", \".odp\", \".odt\", \".pdf\", \".pot\", \".potm\", \".potx\", \".ppa\",\n  \".ppam\", \".pps\", \".ppsm\", \".ppsx\", \".ppt\", \".pptm\", \".pptx\", \".rtf\", \".txt\", \".wps\", \".xla\", \".xlam\", \".xls\",\n  \".xlsb\", \".xlsm\", \".xlsx\", \".xlt\", \".xltm\", \".xltx\", \".xlw\", \".xml\", \".xps\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用需要具备ohos.want.action.viewData或ohos.want.action.editData的skills，可在module.json5文件中增加相应配置："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "  \"skills\":[\n    {\n      \"entities\":[\n        ...\n      ],\n      \"actions\":[\n        ...\n        \"ohos.want.action.viewData\"\n      ]\n    }\n  ]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用的设备需要具备域账号环境。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["引入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/data-protection-api/data-protection-arkts/js-apis-dlppermission/js-apis-dlppermission",
        children: "dlpPermission"
      }), "模块。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dlpPermission } from '@kit.DataProtectionKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用支持打开dlp文件绑定的fuse文件",
      children: "应用支持打开DLP文件绑定的FUSE文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["一般情况下，应用如果支持打开", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%A2%84%E7%BD%AE%E6%93%8D%E4%BD%9C",
        children: "预置操作"
      }), "中指定文件类型的文件，没有对传入的Want做特定限制的情况下，不需要适配即可打开FUSE文件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打开DLP文件时，应用被安装为DLP沙箱分身应用（后续简称为分身），分身会收到want请求，分身可以对其中一些字段进行解析："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Want } from '@kit.AbilityKit';\n\ninterface DLPUriObj {\n  name: string\n};\n\ninterface DLPWriteable {\n  name:boolean\n};\n\ninterface DLPNameObj {\n  dateModified: string,\n  displayName: string,\n  relativePath: string,\n};\n\ninterface DLPLinkNameObj {\n  name: string\n};\n\nfunction getParams(want: Want) {\n  // 接收打开DLP文件传过来的参数\n  let dlpFuseUri: string = want.uri? want.uri : '';  // FUSE文件的uri, 存放解密后的明文\n  let dlpFuseWriteable: boolean = (want.parameters?.linkFileWriteable as DLPWriteable).name; // 对FUSE文件是否有写权限\n  let dlpUri: string = (want.parameters?.dlpUri as DLPUriObj).name; // DLP文件的uri\n  let dlpName: string = (want.parameters?.fileAsset as DLPNameObj).displayName; // DLP文件的文件名\n  let dlpFuseName: string = (want.parameters?.linkFileName as DLPLinkNameObj).name; // FUSE文件的文件名\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分身可以通过把want.uri打开为fd，获取FUSE文件的内容："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { fileIo } from '@kit.CoreFileKit';\nimport { util } from '@kit.ArkTS';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'dlp';\n\nfunction readFileContent(dlpFuseUri: string): string {\n  let content: string = '';\n  let file: fileIo.File | undefined = undefined;\n  try {\n    file = fileIo.openSync(dlpFuseUri, fileIo.OpenMode.READ_ONLY);\n  } catch (err) {\n    hilog.error(0x0000, TAG, 'openSync failed. ' + err);\n    if (file) {\n      fileIo.closeSync(file);\n    }\n    return content;\n  }\n\n  try {\n    let buffer = new ArrayBuffer(4096);\n    let bytesRead = fileIo.readSync(file.fd, buffer);\n    let actualBuffer = buffer.slice(0, bytesRead);\n    content = bufferToString(actualBuffer);\n  } catch (err) {\n    hilog.error(0x0000, TAG,'readSync failed. ' + err);\n  } finally {\n    if (file) {\n      fileIo.closeSync(file);\n    }\n  }\n  return content;\n}\n\nfunction bufferToString(buffer: ArrayBuffer): string {\n  let textDecoder = new util.TextDecoder('utf-8', {\n    ignoreBOM: true\n  });\n  return textDecoder.decodeToString(new Uint8Array(buffer), {\n    stream: true\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果有FUSE文件的读写权限，也可以更新FUSE文件内容："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { fileIo } from '@kit.CoreFileKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'dlp';\n\nfunction writeFileContent(dlpFuseUri: string, content: string): void {\n  let file: fileIo.File | undefined = undefined;\n\n  try {\n    file = fileIo.openSync(dlpFuseUri, fileIo.OpenMode.CREATE | fileIo.OpenMode.READ_WRITE);\n    // O_RDWR: 读写模式, O_CREAT: 文件不存在时创建\n    let writeLen: number = fileIo.writeSync(file.fd, content);\n\n  } catch (err) {\n    hilog.error(0x0000, TAG, '文件操作失败: ' + err);\n  } finally {\n    if (file) {\n      fileIo.closeSync(file);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用根据dlp文件的权限对界面进行适配",
      children: "应用根据DLP文件的权限对界面进行适配"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DLP沙箱分身中可以调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/data-protection-api/data-protection-arkts/js-apis-dlppermission/js-apis-dlppermission#dlppermissiongetdlppermissioninfo",
        children: "getDLPPermissionInfo"
      }), "方法查询当前系统登陆的域账号用户对本DLP文件的用户权限和操作权限，不同用户权限可以对应不同的对文档的操作权限。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dlpPermission } from '@kit.DataProtectionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'dlp';\n\ndlpPermission.getDLPPermissionInfo().then((data: dlpPermission.DLPPermissionInfo)=> {\n  let userAccess: dlpPermission.DLPFileAccess = data.dlpFileAccess; // 用户对本DLP文件的用户权限\n  let isEditable: number = data.flags & dlpPermission.ActionFlagType.ACTION_EDIT; // 用户对本DLP文件的操作权限\n}).catch((err: BusinessError) => {\n  hilog.error(0x0000, TAG, 'getDLPPermissionInfo: ' + JSON.stringify(err));\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["getDLPPermissionInfo返回的data为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/data-protection-api/data-protection-arkts/js-apis-dlppermission/js-apis-dlppermission#dlppermissioninfo",
        children: "DLPPermissionInfo"
      }), "类型，其中dlpFileAccess表示用户权限，flags表示操作权限的按位组合的结果。可以根据返回的flags字段对照", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/data-protection-api/data-protection-arkts/js-apis-dlppermission/js-apis-dlppermission#actionflagtype",
        children: "ActionFlagType"
      }), "判断DLP沙箱分身是否具有对应的操作权限，可以用于界面按钮置灰操作等。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用与dlp沙箱分身数据共享",
      children: "应用与DLP沙箱分身数据共享"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DLP沙箱分身是普通应用的分身，所有数据都是全新的，如果二者之间有些数据需要实现共享，可以通过DLP框架提供的应用与DLP沙箱分身数据共享机制实现。一种典型的使用场景是原应用与DLP沙箱分身之间共用是否已经弹出过隐私声明弹框的配置信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一般包括下面四种读写配置信息前后顺序组合："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "原应用写配置，原应用读配置。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "原应用写配置，DLP沙箱分身读配置。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DLP沙箱分身写配置，DLP沙箱分身读配置。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DLP沙箱分身写配置，原应用读配置。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "约束与限制"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "每次调用设置配置信息接口会覆盖上次调用的设置内容。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "出于数据防泄漏考虑，DLP沙箱分身写配置需要在读取FUSE文件内容之前完成。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "具体步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置配置信息。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["把需要保存的配置信息转成string类型，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/data-protection-api/data-protection-arkts/js-apis-dlppermission/js-apis-dlppermission#dlppermissionsetsandboxappconfig11",
            children: "setSandboxAppConfig"
          }), "接口设置配置信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "普通应用和DLP沙箱分身都可以调用该接口，但DLP沙箱分身必须在读取DLP文件内容之前才允许调用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { dlpPermission } from '@kit.DataProtectionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'dlp';\n\nasync function setSandboxAppConfig() {\n  try {\n    await dlpPermission.setSandboxAppConfig('configInfo'); // 设置配置信息\n  } catch (err) {\n    hilog.error(0x0000, TAG, 'setSandboxAppConfig error: ' + JSON.stringify(err)); // 失败报错\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "清理配置信息。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/data-protection-api/data-protection-arkts/js-apis-dlppermission/js-apis-dlppermission#dlppermissioncleansandboxappconfig11",
            children: "cleanSandboxAppConfig"
          }), "接口清理该应用的所有配置信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该接口只允许普通应用中调用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { dlpPermission } from '@kit.DataProtectionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'dlp';\n\nasync function cleanSandboxAppConfig() {\n  try {\n    await dlpPermission.cleanSandboxAppConfig(); // 清理配置信息\n  } catch (err) {\n    hilog.error(0x0000, TAG, 'cleanSandboxAppConfig error: ' + JSON.stringify(err)); // 失败报错\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取配置信息。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/data-protection-api/data-protection-arkts/js-apis-dlppermission/js-apis-dlppermission#dlppermissiongetsandboxappconfig11",
            children: "getSandboxAppConfig"
          }), "查询该应用的所有配置信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "普通应用和DLP沙箱分身都可以调用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { dlpPermission } from '@kit.DataProtectionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'dlp';\n\nasync function getSandboxAppConfig() {\n  try {\n    let res:string = await dlpPermission.getSandboxAppConfig(); // 查询配置信息\n  } catch (err) {\n    hilog.error(0x0000, TAG, 'getSandboxAppConfig error: ' + JSON.stringify(err)); // 失败报错\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用支持更新最近打开记录",
      children: "应用支持更新最近打开记录"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用有最近打开记录场景时，可以使用DLP框架提供的接口适配最近打开记录。可从以下场景适配："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "普通应用未启动，无法感知到DLP沙箱分身打开的DLP文件"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "仅有DLP沙箱分身有打开DLP文件场景：普通应用启动时，可以通过接口获取到历史通过本应用的DLP沙箱分身打开的DLP文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { dlpPermission } from '@kit.DataProtectionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'dlp';\n\nasync function getDLPFileAccessRecords() {\n  try {\n    let res:Array<dlpPermission.AccessedDLPFileInfo> = await dlpPermission.getDLPFileAccessRecords(); // 获取DLP访问列表\n    hilog.info(0x0000, TAG, 'res' + JSON.stringify(res))\n  } catch (err) {\n    hilog.error(0x0000, TAG, 'error:' + JSON.stringify(err)); // 失败报错\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "普通应用已启动，可以感知到DLP沙箱分身打开的DLP文件"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DLP沙箱分身有打开DLP文件场景：普通应用可以订阅本应用的DLP沙箱分身打开DLP文件的事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { dlpPermission } from '@kit.DataProtectionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'dlp';\n\n\nexport default class TestAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    this.subscribe();\n  }\n\n  onDestroy(): void {\n    this.unSubscribe();\n  }\n\n  event(info: dlpPermission.AccessedDLPFileInfo) {\n    hilog.info(0x0000, TAG, 'openDlpFile event');\n  }\n\n  unSubscribe() {\n    try {\n      dlpPermission.off('openDLPFile', this.event); // 取消订阅\n    } catch (err) {\n      hilog.error(0x0000, TAG, 'error:' + JSON.stringify(err)); // 失败报错\n    }\n  }\n\n  subscribe() {\n    try {\n      dlpPermission.on('openDLPFile', this.event); // 订阅\n    } catch (err) {\n      hilog.error(0x0000, TAG, 'error:' + JSON.stringify(err)); // 失败报错\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用内支持打开选定的dlp文件",
      children: "应用内支持打开选定的DLP文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用可以支持从最近打开列表、文件选择器中选择DLP文件，打开DLP文件的场景，按如下流程适配："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/ability-arkts-dep/ability-deprecated/js-apis-inner-ability-want/js-apis-inner-ability-want",
          children: "Want"
        }), "参数，指定action为\"ohos.want.action.viewData\"，bundleName、abilityName分别为选择打开DLP文件的应用的bundleName、abilityName，uri为需要打开的DLP文件的uri，在parameters中设置fileName的name值为DLP文件的文件名。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-common/js-apis-app-ability-common",
          children: "UIAbilityContext"
        }), "的context。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用context的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startability",
          children: "startAbility"
        }), "方法传入want参数，打开dlp文件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Want, common } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { UIContext } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'dlp';\n\nfunction openDlpFile(dlpUri: string, fileName: string) {\n  let want: Want = {\n    \"action\": \"ohos.want.action.viewData\",\n    \"bundleName\": \"com.example.example_bundle_name\",\n    \"abilityName\": \"exampleAbility\",\n    \"uri\": dlpUri,\n    \"parameters\": {\n      \"fileName\": {\n        \"name\": fileName\n      }\n    }\n  }\n  let context = new UIContext().getHostContext() as common.UIAbilityContext; // 获取当前UIAbilityContext\n  try {\n    hilog.info(0x0000, TAG, 'openDLPFile:' + JSON.stringify(want));\n    hilog.info(0x0000, TAG, 'openDLPFile: delegator:' + JSON.stringify(context));\n    context.startAbility(want);\n  } catch (err) {\n    hilog.error(0x0000, TAG, 'openDLPFile startAbility failed:' + JSON.stringify(err));\n    return;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用内支持对dlp文件权限设置",
      children: "应用内支持对DLP文件权限设置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用内可以集成权限设置按钮，当已打开一个普通文件后，点击权限设置按钮，拉起DLP管理应用的模态设置权限页面，生成DLP文件。也可以在DLP沙箱分身中查看当前正在打开的DLP文件的操作权限。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "普通应用内权限设置"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以无边框形式打开DLP权限管理应用。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "此方法只能在UIAbility上下文中调用，只支持Stage模式。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "want参数中uri的值为普通文件uri，parameters.displayName为文件名，这两个值为必传参数。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/data-protection-api/data-protection-arkts/js-apis-dlppermission/js-apis-dlppermission#dlppermissionstartdlpmanagerforresult11",
              children: "dlpPermission.startDLPManagerForResult"
            }), "拉起DLP管理应用的设置权限页面，输入相关的域账号信息，点击保存，在拉起的filepicker中选择DLP文件的保存路径，保存DLP文件。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用以下代码："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common, Want } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { dlpPermission } from '@kit.DataLossPreventionKit';\nimport { UIContext } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'dlp';\n\ntry {\n  let fileUri: string = \"file://docs/storage/Users/currentUser/test.txt\";\n  let fileName: string = \"test.txt\";\n  let context = new UIContext().getHostContext() as common.UIAbilityContext; // 获取当前UIAbilityContext\n  let want: Want = {\n    'uri': fileUri,\n    'parameters': {\n      'displayName': fileName\n    }\n  }; // 请求参数\n  dlpPermission.startDLPManagerForResult(context, want).then((res: dlpPermission.DLPManagerResult) => {\n    hilog.info(0x0000, TAG, 'startDLPManagerForResult res.resultCode:' + res.resultCode);\n    hilog.info(0x0000, TAG, 'startDLPManagerForResult res.want:' + JSON.stringify(res.want));\n  }); // 拉起DLP权限管理应用 设置权限\n} catch (err) {\n  hilog.error(0x0000, TAG, 'startDLPManagerForResult error:' + (err as BusinessError).code + (err as BusinessError).message);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DLP沙箱分身内权限修改，查看和解除"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果当前的账号是DLP文档的创建者，则该用户拥有修改这个DLP文件权限或者解除这个DLP文档权限还原为普通文件的能力，调用以下代码，拉起DLP管理应用的设置权限页面，在该页面中选择更改加密进行权限修改或者解除加密；如果当前账号拥有DLP文档只读或者编辑权限，调用以下代码则可以查看当前用户权限内容。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { common, Want } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { dlpPermission } from '@kit.DataLossPreventionKit';\nimport { UIContext } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'dlp';\n\ntry {\n  let fileUri: string = \"file://docs/storage/Users/currentUser/test.txt.dlp\";// DLP文件的uri\n  let fileName: string = \"test.txt.dlp\";\n  let context = new UIContext().getHostContext() as common.UIAbilityContext; // 获取当前UIAbilityContext\n  let want: Want = {\n    'uri': fileUri,\n    'parameters': {\n      'displayName': fileName\n    }\n  }; // 请求参数\n  dlpPermission.startDLPManagerForResult(context, want).then((res: dlpPermission.DLPManagerResult) => {\n    hilog.info(0x0000, TAG, 'startDLPManagerForResult res.resultCode:' + res.resultCode);\n    hilog.info(0x0000, TAG, 'startDLPManagerForResult res.want:' + JSON.stringify(res.want));\n  }); // 拉起DLP权限管理应用 设置权限\n} catch (err) {\n  hilog.error(0x0000, TAG, 'startDLPManagerForResult error:' + (err as BusinessError).code + (err as BusinessError).message);\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["DLP沙箱分身中可以调用", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/system-security-api/data-protection-api/data-protection-arkts/js-apis-dlppermission/js-apis-dlppermission#dlppermissiongetdlppermissioninfo",
                children: "getDLPPermissionInfo"
              }), "方法查询当前用户DLP文件权限，DLP沙箱分身的权限限制，参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "#%E6%B2%99%E7%AE%B1%E9%99%90%E5%88%B6",
                children: "沙箱限制"
              }), "。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { dlpPermission } from '@kit.DataProtectionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'dlp';\n\ndlpPermission.getDLPPermissionInfo().then((data:dlpPermission.DLPPermissionInfo)=> {\n  hilog.info(0x0000, TAG, 'getDLPPermissionInfo, result: ' + JSON.stringify(data));\n}).catch((err: BusinessError) => {\n  hilog.error(0x0000, TAG, 'getDLPPermissionInfo: ' + JSON.stringify(err));\n});\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "其他dlp能力增强",
      children: "其他DLP能力增强"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "判断一个文件是否是DLP文件"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["传入文件的fd查询对应文件是否是DLP文件，是DLP文件则按", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%BA%94%E7%94%A8%E5%86%85%E6%94%AF%E6%8C%81%E6%89%93%E5%BC%80%E9%80%89%E5%AE%9A%E7%9A%84dlp%E6%96%87%E4%BB%B6",
            children: "文档指导"
          }), "打开该文件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { dlpPermission } from '@kit.DataProtectionKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'dlp';\n\nlet uri = \"file://docs/storage/Users/currentUser/Desktop/test.txt.dlp\";\nlet file = fileIo.openSync(uri);\ntry {\n  let res: boolean = await dlpPermission.isDLPFile(file.fd); // 是否加密DLP文件\n  hilog.info(0x0000, TAG, 'res' + JSON.stringify(res));\n} catch (err) {\n  hilog.error(0x0000, TAG, 'startDLPManagerForResult error:' + (err as BusinessError).code + (err as BusinessError).message); // 失败报错\n}\nfileIo.closeSync(file);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "判断当前所在应用是否是DLP沙箱分身"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在应用中调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/data-protection-api/data-protection-arkts/js-apis-dlppermission/js-apis-dlppermission#dlppermissionisinsandbox",
            children: "isInSandbox"
          }), "接口判断当前是否是DLP沙箱分身，如果是DLP沙箱分身则可以结合", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%BA%94%E7%94%A8%E6%A0%B9%E6%8D%AEdlp%E6%96%87%E4%BB%B6%E7%9A%84%E6%9D%83%E9%99%90%E5%AF%B9%E7%95%8C%E9%9D%A2%E8%BF%9B%E8%A1%8C%E9%80%82%E9%85%8D",
            children: "调用接口查询权限"
          }), "的结果进行对应功能按钮的置灰或屏蔽。比如：如果只有只读权限，则编辑保存入口可以置灰，如果是只读或者编辑权限，则修改权限入口可以置灰。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { dlpPermission } from '@kit.DataProtectionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'dlp';\n\ndlpPermission.isInSandbox().then((data: boolean)=> {\n  hilog.info(0x0000, TAG, 'isInSandbox, result: ' + JSON.stringify(data));\n}).catch((err: BusinessError) => {\n  hilog.error(0x0000, TAG, 'isInSandbox: ' + JSON.stringify(err));\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "保留沙箱"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DLP沙箱分身关闭后会进行沙箱卸载，如果不希望DLP沙箱分身关闭时卸载该沙箱可以在沙箱中调用设置保留沙箱接口，只有当再次调用取消保留沙箱接口并关闭DLP沙箱分身才会触发沙箱的卸载。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["调用接口", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/system-security-api/data-protection-api/data-protection-arkts/js-apis-dlppermission/js-apis-dlppermission#dlppermissionsetretentionstate",
                children: "setRetentionState"
              }), "设置保留沙箱，传入参数为本沙箱内打开的dlp文件的uri列表，该接口只允许在沙箱中调用。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { dlpPermission } from '@kit.DataProtectionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'dlp';\n\n\nasync function setRetentionSandboxList() {\n  let docUris: Array<string>=[\"file://docs/storage/Users/currentUser/Desktop/test.txt.dlp\"]\n  try {\n    await dlpPermission.setRetentionState(docUris); // 设置沙箱保留\n  } catch (err) {\n    hilog.error(0x0000, TAG, 'startDLPManagerForResult error:' + (err as BusinessError).code + (err as BusinessError).message); // 失败报错\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["调用接口", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/system-security-api/data-protection-api/data-protection-arkts/js-apis-dlppermission/js-apis-dlppermission#dlppermissioncancelretentionstate",
                children: "cancelRetentionState"
              }), "取消保留沙箱，该接口只允许沙箱中调用。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { dlpPermission } from '@kit.DataProtectionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'dlp';\n\n\nasync function setRetentionSandboxList() {\n  let docUris: Array<string>=[\"file://docs/storage/Users/currentUser/Desktop/test.txt.dlp\"]\n  try {\n    await dlpPermission.cancelRetentionState(docUris); // 取消保留沙箱\n  } catch (err) {\n    hilog.error(0x0000, TAG, 'startDLPManagerForResult error:' + (err as BusinessError).code + (err as BusinessError).message); // 失败报错\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["调用接口", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/system-security-api/data-protection-api/data-protection-arkts/js-apis-dlppermission/js-apis-dlppermission#dlppermissiongetretentionsandboxlist",
                children: "getRetentionSandboxList"
              }), "获取保留沙箱记录，该接口允许原应用和DLP沙箱分身中调用。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { dlpPermission } from '@kit.DataProtectionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'dlp';\n\nasync function getRetentionSandboxList() {\n  try {\n    let res:Array<dlpPermission.RetentionSandboxInfo> = await dlpPermission.getRetentionSandboxList(); // 获取保留沙箱记录\n    hilog.info(0x0000, TAG, 'res' + JSON.stringify(res))\n  } catch (err) {\n    hilog.error(0x0000, TAG, 'startDLPManagerForResult error:' + (err as BusinessError).code + (err as BusinessError).message);// 失败报错\n  }\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "典型问题自排查",
      children: "典型问题自排查"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用可以打开正常文件无法打开fuse文件",
      children: "应用可以打开正常文件，无法打开FUSE文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "排查是否对want做了特定限制，导致DLP沙箱分身无法获取到FUSE文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "排查是否以读写权限打开了只读的FUSE文件。"
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