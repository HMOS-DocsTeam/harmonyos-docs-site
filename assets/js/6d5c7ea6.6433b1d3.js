"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["58293"], {
731953(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_inter_app_redirection_specified_type_app_redirection_file_processing_apps_startup_file_processing_apps_startup_md_6d5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-inter-app-redirection-specified-type-app-redirection-file-processing-apps-startup-file-processing-apps-startup-md-6d5.json
var site_docs_ability_kit_stage_model_development_inter_app_redirection_specified_type_app_redirection_file_processing_apps_startup_file_processing_apps_startup_md_6d5_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/file-processing-apps-startup/file-processing-apps-startup","title":"拉起文件处理类应用（startAbility）","description":"使用场景","source":"@site/docs/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/file-processing-apps-startup/file-processing-apps-startup.md","sourceDirName":"ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/file-processing-apps-startup","slug":"/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/file-processing-apps-startup/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/file-processing-apps-startup/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"拉起文件处理类应用（startAbility）","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/file-processing-apps-startup","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"拉起图片编辑类应用（startAbilityByType）","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/photoeditorextensionability/"},"next":{"title":"拉起系统应用","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/system-app-startup/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/file-processing-apps-startup/file-processing-apps-startup.md


const frontMatter = {
	title: '拉起文件处理类应用（startAbility）',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/file-processing-apps-startup',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '拉起文件处理类应用（startAbility）';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "接口关键参数说明",
  "id": "接口关键参数说明",
  "level": 2
}, {
  "value": "接入步骤",
  "id": "接入步骤",
  "level": 2
}, {
  "value": "调用方接入步骤",
  "id": "调用方接入步骤",
  "level": 3
}, {
  "value": "目标方接入步骤",
  "id": "目标方接入步骤",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "拉起文件处理类应用startability",
        children: "拉起文件处理类应用（startAbility）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startability",
        children: "startAbility"
      }), "接口，由系统从已安装的应用中寻找符合要求的应用，打开特定文件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["例如，在浏览器应用中下载PDF文件，可以调用此接口选择文件处理应用打开此PDF文件。开发者需要在请求中设置待打开文件的URI路径（", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%8E%A5%E5%8F%A3%E5%85%B3%E9%94%AE%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",
        children: "uri"
      }), "）、文件格式（", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%8E%A5%E5%8F%A3%E5%85%B3%E9%94%AE%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",
        children: "type"
      }), "）等字段，以便系统能够识别，直接拉起文件打开应用或弹出一个选择框，让用户选择合适的应用来打开文件，效果示意如下图所示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图1 效果示意图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(319093)/* ["default"] */.A) + "",
        width: "290",
        height: "640"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口关键参数说明",
      children: "接口关键参数说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startability",
        children: "startAbility"
      }), "接口即可实现由已安装的垂域应用来打开文件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["表1 startAbility请求中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
        children: "want"
      }), "相关参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示待打开文件的URI路径，一般配合type使用。  uri格式为：file://bundleName/path  - file：文件URI的标志。  - bundleName：该文件资源的属主。  - path：文件资源在应用沙箱中的路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示打开文件的类型，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkdata/uniform-data-definition/uniform-data-type-descriptors",
              children: "UTD类型"
            }), "，比如：'general.plain-text'、'general.image'。目前也可以兼容使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.iana.org/assignments/media-types/media-types.xhtml?utm_source=ld246.com",
              children: "MIME type类型"
            }), "，如：'text/xml' 、 'image/*'等。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. type为可选字段，如果不传type，系统会尝试根据uri后缀名判断文件类型进行匹配；如果传入type，必须确保与uri的文件类型一致，否则会导致无法匹配到合适的应用。文件后缀与文件类型的映射关系参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkdata/uniform-data-definition/uniform-data-type-list",
              children: "Uniform Type Descriptor(UTD)预置列表"
            }), "。  2. 不支持传*/*。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Record<string, Object>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示由系统定义，由开发者按需赋值的自定义参数，文件打开场景请参考表2。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "flags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示处理方式，文件打开场景请参考表3。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示要执行的通用操作。文件打开场景固定值：'ohos.want.action.viewData' ，表示查看数据的操作。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantconstant/js-apis-app-ability-wantconstant#params",
        children: "parameters"
      }), "相关参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ability.params.stream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示携带的文件URI要授权给目标方，用于待打开的文件存在其他文件依赖的场景。例如打开本地html文件依赖本地其余资源文件的场景等。对应的value必须是string类型的文件URI数组。文件URI的获取参考表1中uri参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.ability.params.showDefaultPicker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否强制展示文件打开方式的选择弹框，缺省为false。  - false：表示由系统策略或默认应用设置决定直接拉起文件打开应用还是展示弹框。  - true：表示始终展示弹框。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "showCaller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示调用方本身作为目标方应用匹配成功时，是否在打开文件的应用选择弹框中展示，缺省为false。  - false：不展示。  - true：展示。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表3"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantconstant/js-apis-app-ability-wantconstant#flags",
        children: "flags"
      }), "相关参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLAG_AUTH_READ_URI_PERMISSION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00000001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指对URI执行读取操作的授权。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLAG_AUTH_WRITE_URI_PERMISSION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00000002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指对URI执行写入操作的授权。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接入步骤",
      children: "接入步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调用方接入步骤",
      children: "调用方接入步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\nimport { fileUri } from '@kit.CoreFileKit';\nimport { UIAbility, Want, common, wantConstant } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { window } from '@kit.ArkUI';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/stage-model-application-components/application-context-stage#%E8%8E%B7%E5%8F%96%E5%BA%94%E7%94%A8%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84",
            children: "应用文件路径"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\n// 假设应用bundleName值为com.example.demo\nexport default class EntryAbility extends UIAbility {\n    onWindowStageCreate(windowStage: window.WindowStage) {\n        // 获取文件沙箱路径\n        let filePath = this.context.filesDir + '/test1.txt';\n        // 将沙箱路径转换为uri\n        let uri = fileUri.getUriFromPath(filePath);\n        // 获取的uri为\"file://com.example.demo/data/storage/el2/base/files/test.txt\"\n    }\n    // ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造请求数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\nexport default class EntryAbility extends UIAbility {\n    onWindowStageCreate(windowStage: window.WindowStage) {\n        // 获取文件沙箱路径\n        let filePath = this.context.filesDir + '/test.txt';\n        // 将沙箱路径转换为uri\n        let uri = fileUri.getUriFromPath(filePath);\n        // 构造请求数据\n        let want: Want = {\n        action: 'ohos.want.action.viewData', // 表示查看数据的操作，文件打开场景固定为此值\n        uri: uri,\n        type: 'general.plain-text', // 表示待打开文件的类型\n        // 配置被分享文件的读写权限，例如对文件打开应用进行读写授权\n        flags: wantConstant.Flags.FLAG_AUTH_WRITE_URI_PERMISSION | wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION\n        };\n    }\n    // ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用接口启动。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\nexport default class EntryAbility extends UIAbility {\n    onWindowStageCreate(windowStage: window.WindowStage) {\n        // 获取文件沙箱路径\n        let filePath = this.context.filesDir + '/test.txt';\n        // 将沙箱路径转换为uri\n        let uri = fileUri.getUriFromPath(filePath);\n        // 构造请求数据\n        let want: Want = {\n        action: 'ohos.want.action.viewData', // 表示查看数据的操作，文件打开场景固定为此值\n        uri: uri,\n        type: 'general.plain-text', // 表示待打开文件的类型\n        // 配置被分享文件的读写权限，例如对文件打开应用进行读写授权\n        flags: wantConstant.Flags.FLAG_AUTH_WRITE_URI_PERMISSION | wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION\n        };\n        // 调用接口启动\n        this.context.startAbility(want)\n        .then(() => {\n            console.info('Succeed to invoke startAbility.');\n        })\n        .catch((err: BusinessError) => {\n            console.error(`Failed to invoke startAbility, code: ${err.code}, message: ${err.message}`);\n        });\n    }\n    // ...\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "目标方接入步骤",
      children: "目标方接入步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "声明文件打开能力。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["支持打开文件的应用需要在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
            children: "module.json5"
          }), "配置文件中声明文件打开能力。其中uris字段表示接收URI的类型，其中scheme固定为file。type字段表示支持打开的文件类型（参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkdata/uniform-data-definition/uniform-data-type-descriptors",
            children: "UTD类型"
          }), "（推荐）或", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.iana.org/assignments/media-types/media-types.xhtml?utm_source=ld246.com",
            children: "MIME type类型"
          }), "），如下举例中类型为txt文件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n\"module\": {\n    // ...\n    \"abilities\": [\n    {\n        // ...\n        \"skills\": [\n        {\n            \"actions\": [\n            \"ohos.want.action.viewData\" // 必填，声明数据处理能力\n            ],\n            \"uris\": [\n            {\n                // 允许打开uri中以file://协议开头标识的本地文件\n                \"scheme\": \"file\", // 必填，声明协议类型为文件\n                \"type\": \"general.plain-text\", // 必填，表示支持打开的文件类型\n                \"linkFeature\": \"FileOpen\" // 必填且大小写敏感，表示此URI的功能为文件打开\n            }\n            // ...\n            ]\n            // ...\n        }\n        ]\n    }\n    ]\n}\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用处理待打开文件。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["声明了文件打开的应用在被拉起后，获取传入的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
            children: "Want"
          }), "参数信息，从中获取待打开文件的URI，在打开文件并获取对应的file对象后，可对文件进行读写操作。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\nimport { fileIo } from '@kit.CoreFileKit';\nimport { Want, AbilityConstant, UIAbility } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nexport default class EntryAbility extends UIAbility {\n    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n        // 从want信息中获取uri字段\n        let uri = want.uri;\n        if (uri == null || uri == undefined) {\n            console.info('uri is invalid');\n            return;\n        }\n        try {\n            // 根据待打开文件的URI进行相应操作。例如同步读写的方式打开URI获取file对象\n            let file = fileIo.openSync(uri, fileIo.OpenMode.READ_WRITE);\n            console.info('Succeed to open file.');\n        } catch (err) {\n            let error: BusinessError = err as BusinessError;\n            console.error(`Failed to open file openSync, code: ${error.code}, message: ${error.message}`);\n        }\n    }\n}\n"
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
319093(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797860-e81d3d78ecb47b9646839a2e6e945866.jpeg");

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