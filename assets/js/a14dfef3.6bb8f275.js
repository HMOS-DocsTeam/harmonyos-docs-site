"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["519676"], {
375458(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_basic_services_kit_pasteboard_use_pasteboard_to_copy_and_paste_use_pasteboard_to_copy_and_paste_md_a14_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-basic-services-kit-pasteboard-use-pasteboard-to-copy-and-paste-use-pasteboard-to-copy-and-paste-md-a14.json
var site_docs_system_basicfun_basic_services_kit_pasteboard_use_pasteboard_to_copy_and_paste_use_pasteboard_to_copy_and_paste_md_a14_namespaceObject = JSON.parse('{"id":"system-basicfun/basic-services-kit/pasteboard/use-pasteboard-to-copy-and-paste/use-pasteboard-to-copy-and-paste","title":"使用剪贴板进行复制粘贴","description":"场景介绍","source":"@site/docs/system-basicfun/basic-services-kit/pasteboard/use-pasteboard-to-copy-and-paste/use-pasteboard-to-copy-and-paste.md","sourceDirName":"system-basicfun/basic-services-kit/pasteboard/use-pasteboard-to-copy-and-paste","slug":"/system-basicfun/basic-services-kit/pasteboard/use-pasteboard-to-copy-and-paste/","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/pasteboard/use-pasteboard-to-copy-and-paste/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用剪贴板进行复制粘贴","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-pasteboard-to-copy-and-paste","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"申请访问剪贴板权限","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/pasteboard/get-pastedata-permission-guidelines/"},"next":{"title":"使用剪贴板进行复制粘贴 (C/C++)","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/pasteboard/native-use-pasteboard/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/basic-services-kit/pasteboard/use-pasteboard-to-copy-and-paste/use-pasteboard-to-copy-and-paste.md


const frontMatter = {
	title: '使用剪贴板进行复制粘贴',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-pasteboard-to-copy-and-paste',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = '使用剪贴板进行复制粘贴';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}, {
  "value": "剪贴板接入原理介绍",
  "id": "剪贴板接入原理介绍",
  "level": 2
}, {
  "value": "使用基础数据类型进行复制粘贴",
  "id": "使用基础数据类型进行复制粘贴",
  "level": 2
}, {
  "value": "ArkTS接口与NDK接口数据类型对应关系",
  "id": "arkts接口与ndk接口数据类型对应关系",
  "level": 3
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 3
}, {
  "value": "示例代码",
  "id": "示例代码",
  "level": 3
}, {
  "value": "使用统一数据类型进行复制粘贴",
  "id": "使用统一数据类型进行复制粘贴",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明-1",
  "level": 3
}, {
  "value": "示例代码",
  "id": "示例代码-1",
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
        id: "使用剪贴板进行复制粘贴",
        children: "使用剪贴板进行复制粘贴"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-pasteboard/js-apis-pasteboard",
        children: "剪贴板"
      }), "为开发者提供数据的复制粘贴能力。当需要使用复制粘贴等功能时，例如：复制文字内容到备忘录中粘贴，复制图库照片到文件管理粘贴，就可以通过剪贴板来完成。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "剪贴板内容包含剪贴板系统服务元数据和应用设置的数据，总大小上限默认为128MB，PC/2in1设备可通过系统配置修改上限，有效范围为128MB~2GB。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为保证剪贴板数据的准确性，同一时间只能支持一个复制操作。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["API version 12及之后，系统为提升用户隐私安全保护能力，剪贴板读取接口增加", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-basicfun/basic-services-kit/pasteboard/get-pastedata-permission-guidelines",
          children: "权限管控"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "剪贴板接入原理介绍",
      children: "剪贴板接入原理介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "剪贴板为应用提供应用数据的复制粘贴能力，支持在应用内或应用间共享复制或剪切的应用数据。剪贴板默认支持文本、HTML富文本、文件URI、PixelMap通用数据格式类型数据，同时也支持应用自定义扩展类型数据处理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "剪贴板数据定义对应PasteData，复制应用通过向剪贴板服务写入PasteData实现数据复制，粘贴应用通过读取剪贴板服务的PasteData实现数据粘贴，PasteData整体结构示意如下："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(605953)/* ["default"] */.A) + "",
        width: "1156",
        height: "753"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Record对应复制数据的不同内容片段；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Entry对应同一份数据的不同格式；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pasteDataProperty定义了剪贴板中数据内容的属性，包含时间戳、数据类型、可粘贴范围以及一些附加数据等。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了复制应用和粘贴应用对剪贴板数据内容理解一致，更好的实现不同应用间的复制粘贴体验，应用适配剪贴板时需按如下原则处理："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用复制时向剪贴板写入数据"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "复制数据内容只使用一个Record携带，对于复制数据内容的不同格式，使用同一Record的不同Entry携带。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果存在一个Record无法携带所有数据的场景，比如多文件复制时的多个uri，此时使用多Record携带复制数据内容的不同部分。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用将支持的所有剪贴板数据格式都写入剪贴板，以保证复制数据可以在所有可能粘贴的场景被粘贴。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用粘贴时通过剪贴板读取数据"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "剪贴板数据属于个人数据，读取剪贴板数据需要支持剪贴板读取权限授权，剪贴板提供了安全控件和用户授权ohos.permission.READ_PASTEBOARD权限两种授权方式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "复制应用写入剪贴板的数据可能包含多种格式数据，粘贴应用需根据当前粘贴页面和场景选择最合适的格式进行粘贴显示。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "剪贴板同时提供了TS API和NDK API，应用按需选择合适的API支持复制粘贴功能。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用基础数据类型进行复制粘贴",
      children: "使用基础数据类型进行复制粘贴"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "剪贴板支持使用基础数据类型进行复制粘贴，当前支持的基础数据类型有文本、HTML、URI、Want、PixelMap。ArkTS接口与NDK接口支持数据类型不完全一致，使用时须匹配接口支持类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新开发的应用建议使用本方案实现复制粘贴功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkts接口与ndk接口数据类型对应关系",
      children: "ArkTS接口与NDK接口数据类型对应关系"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ArkTS数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NDK数据类型"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MIMETYPE_PIXELMAP : \"pixelMap\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_OPENHARMONY_PIXEL_MAP : \"openharmony.pixel-map\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MIMETYPE_TEXT_HTML : \"text/html\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_HTML : \"general.html\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MIMETYPE_TEXT_PLAIN : \"text/plain\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_PLAIN_TEXT : \"general.plain-text\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MIMETYPE_TEXT_URI : \"text/uri\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_GENERAL_FILE_URI : \"general.file-uri\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MIMETYPE_TEXT_WANT : \"text/want\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NDK接口不支持该数据类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS数据类型对应剪贴板类型，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-pasteboard/js-apis-pasteboard",
        children: "ohos.pasteboard"
      }), "。NDK数据类型对应统一数据管理框架，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-module/capi-udmf/capi-udmf",
        children: "UDMF"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用剪贴板getData接口获取到uri类型数据之后，请使用文件管理的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs#fileiocopy11",
        children: "fileIo.copy"
      }), "接口获取文件。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-pasteboard/js-apis-pasteboard#setdata9",
              children: "setData(data: PasteData, callback: AsyncCallback<void>): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将数据写入系统剪贴板，使用callback异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-pasteboard/js-apis-pasteboard#setdata9-1",
              children: "setData(data: PasteData): Promise<void>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将数据写入系统剪贴板，使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-pasteboard/js-apis-pasteboard#getdata9",
              children: "getData( callback: AsyncCallback<PasteData>): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读取系统剪贴板内容，使用callback异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-pasteboard/js-apis-pasteboard#getdata9-1",
              children: "getData(): Promise<PasteData>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读取系统剪贴板内容，使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-pasteboard/js-apis-pasteboard#getdatasync11",
              children: "getDataSync(): PasteData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读取系统剪贴板内容, 此接口为同步接口，不能与SetData同线程调用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError, pasteboard } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n// ...\nconst systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();\n// ...\n  export async function setPlainData(content: string): Promise<void> {\n    try {\n      let pasteData = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, content);\n      await systemPasteboard.setData(pasteData);\n      hilog.info(0xFF00, '[Sample_pasteboard]', 'Set data to pasteboard successfully');\n    } catch (error) {\n      hilog.error(0xFF00, '[Sample_pasteboard]', 'Failed to set data to pasteboard, error:' + error);\n    }\n  }\n  export async function getPlainData(type: string): Promise<string> {\n    try {\n      // 从系统剪贴板中读取数据\n      let data = await systemPasteboard.getData();\n      // 从剪贴板数据中获取条目数量\n      let recordCount = data.getRecordCount();\n      // 从剪贴板数据中获取对应条目信息\n      let result = '';\n      for (let i = 0; i < recordCount; i++) {\n        let record = data.getRecord(i).toPlainText();\n        hilog.info(0xFF00, '[Sample_pasteboard]', 'Get data success, record:' + record);\n        result = record;\n      }\n      return result;\n    } catch (error) {\n      hilog.error(0xFF00, '[Sample_pasteboard]', 'Failed to get data from pasteboard, error:' + error);\n      return '';\n    }\n  }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用统一数据类型进行复制粘贴",
      children: "使用统一数据类型进行复制粘贴"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了方便剪贴板与其他应用间进行数据交互，减少数据类型适配的工作量，剪贴板支持使用统一数据对象进行复制粘贴。详细的统一数据对象请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-unifieddatachannel/js-apis-data-unifieddatachannel",
        children: "标准化数据通路"
      }), "文档介绍。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "剪贴板支持使用基础数据类型进行复制粘贴，当前支持的基础数据类型有文本、HTML。ArkTS接口与NDK接口支持的数据类型不完全一致，使用时需匹配对应接口所支持的类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明-1",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-pasteboard/js-apis-pasteboard#setunifieddata12",
              children: "setUnifiedData(data: unifiedDataChannel.UnifiedData): Promise<void>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将统一数据对象的数据写入系统剪贴板。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-pasteboard/js-apis-pasteboard#setunifieddatasync12",
              children: "setUnifiedDataSync(data: unifiedDataChannel.UnifiedData): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将统一数据对象的数据写入系统剪贴板，此接口为同步接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-pasteboard/js-apis-pasteboard#getunifieddata12",
              children: "getUnifiedData(): Promise<unifiedDataChannel.UnifiedData>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从系统剪贴板中读取统一数据对象的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-pasteboard/js-apis-pasteboard#getunifieddatasync12",
              children: "getUnifiedDataSync(): unifiedDataChannel.UnifiedData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从系统剪贴板中读取统一数据对象的数据，此接口为同步接口。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例代码-1",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError, pasteboard } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { unifiedDataChannel, uniformDataStruct, uniformTypeDescriptor } from '@kit.ArkData';\nconst systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();\n// ...\n  // 1.构造一条PlainText数据\n  export async function handleUniformData() {\n    let plainText: uniformDataStruct.PlainText = {\n      uniformDataType: uniformTypeDescriptor.UniformDataType.PLAIN_TEXT,\n      textContent: 'PLAINTEXT_CONTENT',\n      abstract: 'PLAINTEXT_ABSTRACT',\n    }\n\n    let record = new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.PLAIN_TEXT, plainText);\n    let data = new unifiedDataChannel.UnifiedData();\n    data.addRecord(record);\n    // 2.向系统剪贴板中存入一条PlainText数据\n    systemPasteboard.setUnifiedData(data).then((data: void) => {\n      hilog.info(0xFF00, '[Sample_pasteboard]', 'Succeeded in setting UnifiedData.');\n      // 存入成功，处理正常场景\n    }).catch((err: BusinessError) => {\n      hilog.error(0xFF00, '[Sample_pasteboard]', 'Failed to set UnifiedData. Cause: ' + err.message);\n      // 处理异常场景\n    });\n    // 3.从系统剪贴板中读取这条text数据\n    systemPasteboard.getUnifiedData().then((data) => {\n      let records: unifiedDataChannel.UnifiedRecord[] = data.getRecords();\n      for (let j = 0; j < records.length; j++) {\n        if (records[j].getType() === uniformTypeDescriptor.UniformDataType.PLAIN_TEXT) {\n          let text = records[j].getValue() as uniformDataStruct.PlainText;\n          hilog.info(0xFF00, '[Sample_pasteboard]', `${j + 1}.${text.textContent}`);\n        }\n      }\n    }).catch((err: BusinessError) => {\n      hilog.error(0xFF00, '[Sample_pasteboard]', 'Failed to get UnifiedData. Cause: ' + err.message);\n      // 处理异常场景\n    });\n  }\n"
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
605953(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958448-c43b0a07c89b615b15473c655ebfa8de.png");

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