"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["595270"], {
12929(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ability_api_ability_arkts_both_models_js_apis_app_ability_want_js_apis_app_ability_want_md_0a7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ability-api-ability-arkts-both-models-js-apis-app-ability-want-js-apis-app-ability-want-md-0a7.json
var site_docs_ref_ability_api_ability_arkts_both_models_js_apis_app_ability_want_js_apis_app_ability_want_md_0a7_namespaceObject = JSON.parse('{"id":"ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want","title":"@ohos.app.ability.Want (Want)","description":"Want是对象间信息传递的载体，可以用于应用组件间的信息传递。","source":"@site/docs-ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want.md","sourceDirName":"ability-api/ability-arkts/both-models/js-apis-app-ability-want","slug":"/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"@ohos.app.ability.Want (Want)","sidebar_position":13,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-want","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-app-ability-want"},"sidebar":"ref","previous":{"title":"@ohos.app.ability.kioskManager (Kiosk模式管理)","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-kioskmanager/js-apis-app-ability-kioskmanager"},"next":{"title":"@ohos.app.ability.wantAgent (WantAgent模块)","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantagent/js-apis-app-ability-wantagent"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want.md


const frontMatter = {
	title: '@ohos.app.ability.Want (Want)',
	sidebar_position: 13,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-want',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-app-ability-want'
};
const contentTitle = '@ohos.app.ability.Want (Want)';

const assets = {

};



const toc = [{
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}, {
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "Want",
  "id": "want",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "ohosappabilitywant-want",
        children: "@ohos.app.ability.Want (Want)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Want是对象间信息传递的载体，可以用于应用组件间的信息传递。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其典型应用场景之一是，当UIAbilityA启动UIAbilityB、并需要传入一些数据时，可使用Want作为载体。例如在startAbility接口的入参want中，可以通过abilityName指定启动的目标Ability，也可以通过parameters等字段携带其他数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(307669)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 9 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "受IPC通信的限制，启动Ability时传入的Want字段需满足如下要求。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "API version 23开始，Want字段中支持传递的最大数据为200KB。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "API version 22及之前，Want字段中支持传递的最大数据为100KB。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Want } from '@kit.AbilityKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "want",
      children: "Want"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityBase"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "deviceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备ID。在应用启动场景中表示被拉起方的设备ID，如果未设置该字段，则表示指定当前设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用包名。在应用启动场景中表示被拉起方的应用包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "moduleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用模块名。在应用启动场景中表示被拉起方的应用模块名。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  若待启动的Ability所属的模块为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-package-fundamentals/application-package-dev/har-package",
              children: "HAR"
            }), "，则moduleName需为依赖该HAR的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-package-fundamentals/application-package-dev/hap-package",
              children: "HAP"
            }), "/", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-package-fundamentals/application-package-dev/in-app-hsp",
              children: "HSP"
            }), "的moduleName。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "abilityName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用的Ability组件名。在应用启动场景中表示被拉起方的Ability组件名。如果在Want中该字段同时指定了BundleName和AbilityName，则Want可以直接匹配到指定的Ability。AbilityName需要在一个应用的范围内保证唯一。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示要执行的通用操作（如：查看、分享、应用详情）。在隐式Want中，开发者可以定义该字段，配合uri或parameters来表示对数据执行的操作。隐式Want定义及匹配规则请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/stage-model-application-components/want/explicit-implicit-want-mappings",
              children: "显式Want与隐式Want匹配规则"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "entities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示目标Ability额外的类别信息（如：浏览器、视频播放器）。在隐式Want中是对action字段的补充。在隐式Want中，开发者可以定义该字段，来过滤匹配Ability类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "统一资源标识符，一般在应用启动场景中配合type使用，指明待处理的数据类型。如果在Want中指定了uri，则Want将匹配指定的Uri信息，包括scheme、schemeSpecificPart、authority和path信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示MIME type类型描述，打开文件的类型，主要用于文件管理器打开文件。比如：'text/xml' 、 'image/*'等，MIME定义请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.iana.org/assignments/media-types/media-types.xhtml?utm_source=ld246.com",
              children: "Media Types"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Record<string, Object>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示WantParams描述。  一、以下Key均由系统赋值，开发者手动修改也不会生效，系统在数据传递时会自动修改为实际值。  - ohos.aafwk.param.callerPid：表示拉起方的pid，值为字符串类型。  - ohos.aafwk.param.callerBundleName：表示拉起方的BundleName，值为字符串类型。  - ohos.aafwk.param.callerAbilityName：表示拉起方的AbilityName，值为字符串类型。  - ohos.aafwk.param.callerNativeName：表示native调用时拉起方的进程名，值为字符串类型。  - ohos.aafwk.param.callerAppId：表示拉起应用的AppId信息，值为字符串类型。  - ohos.aafwk.param.callerAppIdentifier：表示拉起应用的AppIdentifier信息，值为字符串类型。  - ohos.aafwk.param.callerToken：表示拉起方的token，值为字符串类型。  - ohos.aafwk.param.callerUid：表示", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-bundleinfo/js-apis-bundlemanager-bundleinfo#bundleinfo-1",
              children: "BundleInfo"
            }), "中的uid，应用包里应用程序的uid，值为数值类型。  - ohos.param.callerAppCloneIndex：表示拉起方应用的分身索引，值为数值类型。  - component.startup.newRules：表示是否启用新的管控规则，值为布尔类型。  - moduleName：表示被拉起方的moduleName，值为字符串类型。  - ohos.ability.params.abilityRecoveryRestart：表示当前Ability是否发生了故障恢复重启，值为布尔类型。  - ohos.extra.param.key.showMode：表示拉起元服务的展示模式，值为枚举类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantconstant/js-apis-app-ability-wantconstant#showmode12",
              children: "wantConstant.ShowMode"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：  在跨端场景中，以下三个字段不生效，不可用于身份或权限校验：ohos.aafwk.param.callerPid、ohos.aafwk.param.callerToken、ohos.aafwk.param.callerUid。  二、提供了一些由系统定义、开发者按需赋值的Key。具体的key值与对应说明详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantconstant/js-apis-app-ability-wantconstant#params",
              children: "wantConstant.Params"
            }), "。  三、除了上述情况，应用间还可以相互约定传入的键值对。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：  want的Params操作的常量的具体信息请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantconstant/js-apis-app-ability-wantconstant",
              children: "wantConstant"
            }), "。  需注意，WantParams支持传输的最大数据量遵循", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%BA%A6%E6%9D%9F%E9%99%90%E5%88%B6",
              children: "Want约束限制"
            }), "。当数据量超过该限制时，请使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-arkts/js-apis-rpc/js-apis-rpc#writerawdatabuffer11",
              children: "WriteRawDataBuffer"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkts-api/arkts-arkts/js-apis-uri/js-apis-uri",
              children: "uri"
            }), "的方式进行数据传输。  parameters的Value值仅支持基本数据类型：String、Number、Boolean、Object、undefined和null，不支持传递Object内部的function。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "flags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示处理Want的方式。值为枚举类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantconstant/js-apis-app-ability-wantconstant#flags",
              children: "Flags"
            }), "，默认传数字。  例如取值为0x00000001（即wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION）表示临时授予接收方读取该URI指向的数据的权限。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fds15+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Record<string, number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示文件描述符，在启动场景中拉起方写入的FD，会设置到该参数中。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 15开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["基础用法：在UIAbility对象中调用，示例中的context的获取方式请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#%E8%8E%B7%E5%8F%96uiability%E7%9A%84%E4%B8%8A%E4%B8%8B%E6%96%87%E4%BF%A1%E6%81%AF",
            children: "获取UIAbility的上下文信息"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIAbility, Want } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nexport default class EntryAbility extends UIAbility {\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    let want: Want = {\n      deviceId: '', // deviceId为空表示本设备\n      bundleName: 'com.example.myapplication',\n      abilityName: 'FuncAbility',\n      moduleName: 'entry' // moduleName非必选\n    };\n\n    this.context.startAbility(want, (err: BusinessError) => {\n      if (err.code) {\n        // 显式拉起Ability，通过bundleName、abilityName和moduleName可以唯一确定一个Ability\n        console.error(`Failed to startAbility. Code: ${err.code}, message: ${err.message}`);\n      }\n    });\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "目前支持的数据类型有：字符串、数字、布尔、对象、数组和文件描述符等。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "字符串（String）"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { UIAbility, Want } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nexport default class EntryAbility extends UIAbility {\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    let want: Want = {\n      bundleName: 'com.example.myapplication',\n      abilityName: 'FuncAbility',\n      parameters: {\n        keyForString: 'str',\n      },\n    };\n\n    this.context.startAbility(want, (err: BusinessError) => {\n      if (err.code) {\n        console.error(`Failed to startAbility. Code: ${err.code}, message: ${err.message}`);\n      }\n    });\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "数字（Number）"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { UIAbility, Want } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nexport default class EntryAbility extends UIAbility {\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    let want: Want = {\n      bundleName: 'com.example.myapplication',\n      abilityName: 'FuncAbility',\n      parameters: {\n        keyForInt: 100,\n        keyForDouble: 99.99,\n      },\n    };\n\n    this.context.startAbility(want, (err: BusinessError) => {\n      if (err.code) {\n        console.error(`Failed to startAbility. Code: ${err.code}, message: ${err.message}`);\n      }\n    });\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "布尔（Boolean）"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { UIAbility, Want } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nexport default class EntryAbility extends UIAbility {\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    let want: Want = {\n      bundleName: 'com.example.myapplication',\n      abilityName: 'FuncAbility',\n      parameters: {\n        keyForBool: true,\n      },\n    };\n\n    this.context.startAbility(want, (err: BusinessError) => {\n      if (err.code) {\n        console.error(`Failed to startAbility. Code: ${err.code}, message: ${err.message}`);\n      }\n    });\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "对象（Object）"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { UIAbility, Want } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nexport default class EntryAbility extends UIAbility {\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    let want: Want = {\n      bundleName: 'com.example.myapplication',\n      abilityName: 'FuncAbility',\n      parameters: {\n        keyForObject: {\n          keyForObjectString: 'str',\n          keyForObjectInt: -200,\n          keyForObjectDouble: 35.5,\n          keyForObjectBool: false,\n        },\n      },\n    };\n\n    this.context.startAbility(want, (err: BusinessError) => {\n      if (err.code) {\n        console.error(`Failed to startAbility. Code: ${err.code}, message: ${err.message}`);\n      }\n    });\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "数组（Array）"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { UIAbility, Want } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nexport default class EntryAbility extends UIAbility {\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    let want: Want = {\n      bundleName: 'com.example.myapplication',\n      abilityName: 'FuncAbility',\n      parameters: {\n        keyForArrayString: ['str1', 'str2', 'str3'],\n        keyForArrayInt: [100, 200, 300, 400],\n        keyForArrayDouble: [0.1, 0.2],\n        keyForArrayObject: [{ obj1: 'aaa' }, { obj2: 100 }],\n      },\n    };\n\n    this.context.startAbility(want, (err: BusinessError) => {\n      if (err.code) {\n        console.error(`Failed to startAbility. Code: ${err.code}, message: ${err.message}`);\n      }\n    });\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "文件描述符（FD）"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { UIAbility, Want } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo } from '@kit.CoreFileKit';\n\nexport default class EntryAbility extends UIAbility {\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    let fd: number = 0;\n\n    try {\n      fd = fileIo.openSync('/data/storage/el2/base/haps/pic.png').fd;\n    } catch (err) {\n      let code = (err as BusinessError).code;\n      let message = (err as BusinessError).message;\n      console.error(`Failed to openSync. Code: ${code}, message: ${message}`);\n    }\n    let want: Want = {\n      deviceId: '', // deviceId为空表示本设备\n      bundleName: 'com.example.myapplication',\n      abilityName: 'FuncAbility',\n      moduleName: 'entry', // moduleName非必选\n      parameters: {\n        'keyFd': { 'type': 'FD', 'value': fd } // {'type':'FD', 'value':fd}是固定用法，用于表示该数据是FD\n      }\n    };\n\n    this.context.startAbility(want, (err: BusinessError) => {\n      if (err.code) {\n        console.error(`Failed to startAbility. Code: ${err.code}, message: ${err.message}`);\n      }\n    });\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "parameters参数用法：parameters携带开发者自定义参数，由UIAbilityA传递给UIAbilityB，并在UIAbilityB中进行获取。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// (1) UIAbilityA通过startAbility启动UIAbilityB\nimport { UIAbility, Want } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nexport default class EntryAbility extends UIAbility {\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    let want: Want = {\n      bundleName: 'com.example.myapplication',\n      abilityName: 'UIAbilityB',\n      parameters: {\n        developerParameters: 'parameters',\n      },\n    };\n\n    this.context.startAbility(want, (err: BusinessError) => {\n      if (err.code) {\n        console.error(`Failed to startAbility. Code: ${err.code}, message: ${err.message}`);\n      }\n    });\n  }\n}\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// (2) 以UIAbilityB实例首次启动为例，会进入到UIAbilityB的onCreate生命周期\nimport { UIAbility, Want, AbilityConstant } from '@kit.AbilityKit';\n\nclass UIAbilityB extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    console.info(`onCreate, want parameters: ${want.parameters?.developerParameters}`);\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["parameters参数中", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantconstant/js-apis-app-ability-wantconstant",
                children: "wantConstant"
              }), "的Key的使用方法。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { UIAbility, Want, wantConstant } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nexport default class EntryAbility extends UIAbility {\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    let want: Want = {\n      bundleName: 'com.example.myapplication',\n      abilityName: 'FuncAbility',\n      parameters: {\n        [wantConstant.Params.CONTENT_TITLE_KEY]: 'contentTitle',\n      },\n    };\n\n    this.context.startAbility(want, (err: BusinessError) => {\n      if (err.code) {\n        console.error(`Failed to startAbility. Code: ${err.code}, message: ${err.message}`);\n      }\n    });\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "parameters参数中获取拉起方的信息。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["详见", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#%E8%8E%B7%E5%8F%96uiability%E6%8B%89%E8%B5%B7%E6%96%B9%E7%9A%84%E4%BF%A1%E6%81%AF",
                children: "获取UIAbility拉起方的信息"
              }), "。"]
            }), "\n"]
          }), "\n"]
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
307669(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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