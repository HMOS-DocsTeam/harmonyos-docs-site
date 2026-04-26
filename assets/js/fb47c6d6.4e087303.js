"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["241230"], {
866984(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ability_api_ability_arkts_stage_model_js_apis_app_ability_photoeditorextensionability_js_apis_app_ability_photoeditorextensionability_md_fb4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ability-api-ability-arkts-stage-model-js-apis-app-ability-photoeditorextensionability-js-apis-app-ability-photoeditorextensionability-md-fb4.json
var site_docs_ref_ability_api_ability_arkts_stage_model_js_apis_app_ability_photoeditorextensionability_js_apis_app_ability_photoeditorextensionability_md_fb4_namespaceObject = JSON.parse('{"id":"ability-api/ability-arkts/stage-model/js-apis-app-ability-photoeditorextensionability/js-apis-app-ability-photoeditorextensionability","title":"@ohos.app.ability.PhotoEditorExtensionAbility (支持图片编辑能力的ExtensionAbility组件)","description":"PhotoEditorExtensionAbility继承自ExtensionAbility，开发者可通过PhotoEditorExtensionAbility实现图片编辑扩展页面。应用通过startAbilityByType拉起图片编辑类应用扩展面板后，由用户在面板上选择实现了PhotoEditorExtensionAbility的图片编辑扩展页面并拉起该页面。","source":"@site/docs-ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-photoeditorextensionability/js-apis-app-ability-photoeditorextensionability.md","sourceDirName":"ability-api/ability-arkts/stage-model/js-apis-app-ability-photoeditorextensionability","slug":"/ability-api/ability-arkts/stage-model/js-apis-app-ability-photoeditorextensionability/js-apis-app-ability-photoeditorextensionability","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-photoeditorextensionability/js-apis-app-ability-photoeditorextensionability","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"title":"@ohos.app.ability.PhotoEditorExtensionAbility (支持图片编辑能力的ExtensionAbility组件)","sidebar_position":30,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-photoeditorextensionability","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-app-ability-photoeditorextensionability"},"sidebar":"ref","previous":{"title":"@ohos.app.ability.insightIntentProvider (意图提供方管理能力)","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentprovider/js-apis-app-ability-insightintentprovider"},"next":{"title":"@ohos.app.ability.OpenLinkOptions (openLink的可选参数)","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-openlinkoptions/js-apis-app-ability-openlinkoptions"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-photoeditorextensionability/js-apis-app-ability-photoeditorextensionability.md


const frontMatter = {
	title: '@ohos.app.ability.PhotoEditorExtensionAbility (支持图片编辑能力的ExtensionAbility组件)',
	sidebar_position: 30,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-photoeditorextensionability',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-app-ability-photoeditorextensionability'
};
const contentTitle = '@ohos.app.ability.PhotoEditorExtensionAbility (支持图片编辑能力的ExtensionAbility组件)';

const assets = {

};



const toc = [{
  "value": "实现效果",
  "id": "实现效果",
  "level": 2
}, {
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "PhotoEditorExtensionAbility",
  "id": "photoeditorextensionability",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 3
}, {
  "value": "onCreate",
  "id": "oncreate",
  "level": 3
}, {
  "value": "onStartContentEditing",
  "id": "onstartcontentediting",
  "level": 3
}, {
  "value": "onForeground",
  "id": "onforeground",
  "level": 3
}, {
  "value": "onBackground",
  "id": "onbackground",
  "level": 3
}, {
  "value": "onDestroy",
  "id": "ondestroy",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    bundlename: "bundlename",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    sandboxpath: "sandboxpath",
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
        id: "ohosappabilityphotoeditorextensionability-支持图片编辑能力的extensionability组件",
        children: "@ohos.app.ability.PhotoEditorExtensionAbility (支持图片编辑能力的ExtensionAbility组件)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PhotoEditorExtensionAbility继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-extensionability/js-apis-app-ability-extensionability",
        children: "ExtensionAbility"
      }), "，开发者可通过PhotoEditorExtensionAbility实现图片编辑扩展页面。应用通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startability",
        children: "startAbilityByType"
      }), "拉起图片编辑类应用扩展面板后，由用户在面板上选择实现了PhotoEditorExtensionAbility的图片编辑扩展页面并拉起该页面。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(812575)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 12 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块接口仅可在Stage模型下使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现效果",
      children: "实现效果"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下图为通过PhotoEditorExtensionAbility实现的图片编辑扩展页面示意图，页面的布局与功能可以根据实际需要开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(795923)/* ["default"] */.A) + "",
        width: "324",
        height: "592"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { PhotoEditorExtensionAbility } from '@kit.AbilityKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "photoeditorextensionability",
      children: "PhotoEditorExtensionAbility"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Ability.AppExtension.PhotoEditorExtension"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-app-ability-photoeditorextensioncontext/js-apis-app-ability-photoeditorextensioncontext",
              children: "PhotoEditorExtensionContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PhotoEditorExtensionAbility的上下文，提供保存图片能力。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oncreate",
      children: "onCreate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onCreate(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当PhotoEditorExtensionAbility创建时，系统会触发该回调，开发者可以在该回调内执行初始化业务逻辑操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Ability.AppExtension.PhotoEditorExtension"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { PhotoEditorExtensionAbility } from '@kit.AbilityKit';\n\nconst TAG: string = '[testTag] ExamplePhotoEditorAbility';\n\nexport default class ExamplePhotoEditorAbility extends PhotoEditorExtensionAbility {\n  onCreate() {\n    console.info(TAG, `onCreate`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onstartcontentediting",
      children: "onStartContentEditing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onStartContentEditing(uri: string, want: Want, session: UIExtensionContentSession): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当实现PhotoEditorExtensionAbility的图片编辑扩展界面内容对象创建时，系统会触发该回调，开发者可以在该回调内执行读取原始图片、加载页面等操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Ability.AppExtension.PhotoEditorExtension"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "uri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["待编辑的原始图片", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-arkts/js-apis-file-fileuri/js-apis-file-fileuri",
              children: "uri"
            }), "，格式为file://", (0,jsx_runtime.jsxs)(_components.bundlename, {
              children: ["/", (0,jsx_runtime.jsx)(_components.sandboxpath, {
                children: "。"
              })]
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "want"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
              children: "Want"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前PhotoEditorExtensionAbility的Want类型信息，包括ability名称、bundle名称等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "session"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensioncontentsession/js-apis-app-ability-uiextensioncontentsession",
              children: "UIExtensionContentSession"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PhotoEditorExtensionAbility界面内容相关信息。"
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
        children: "import { PhotoEditorExtensionAbility, Want, UIExtensionContentSession } from '@kit.AbilityKit';\n\nconst TAG: string = '[testTag] ExamplePhotoEditorAbility';\n\nexport default class ExamplePhotoEditorAbility extends PhotoEditorExtensionAbility {\n  onStartContentEditing(uri: string, want: Want, session: UIExtensionContentSession) {\n    console.info(TAG, `onStartContentEditing want: ${JSON.stringify(want)}, uri: ${uri}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onforeground",
      children: "onForeground"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onForeground(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当PhotoEditorExtensionAbility从后台转到前台时，系统会触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Ability.AbilityRuntime.AbilityCore"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { PhotoEditorExtensionAbility } from '@kit.AbilityKit';\n\nconst TAG: string = '[testTag] ExamplePhotoEditorAbility';\n\nexport default class ExamplePhotoEditorAbility extends PhotoEditorExtensionAbility {\n  onForeground() {\n    console.info(TAG, `onForeground`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onbackground",
      children: "onBackground"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onBackground(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当PhotoEditorExtensionAbility从前台转到后台时，系统会触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Ability.AbilityRuntime.AbilityCore"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { PhotoEditorExtensionAbility } from '@kit.AbilityKit';\n\nconst TAG: string = '[testTag] ExamplePhotoEditorAbility';\n\nexport default class ExamplePhotoEditorAbility extends PhotoEditorExtensionAbility {\n  onBackground() {\n    console.info(TAG, `onBackground`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ondestroy",
      children: "onDestroy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onDestroy(): void | Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当PhotoEditorExtensionAbility被销毁时，系统会触发该回调。开发者可以在该生命周期中执行资源清理等相关操作。使用同步回调或Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Ability.AppExtension.PhotoEditorExtension"]
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
            children: "void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同步回调示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { PhotoEditorExtensionAbility } from '@kit.AbilityKit';\n\nconst TAG: string = '[testTag] ExamplePhotoEditorAbility';\n\nexport default class ExamplePhotoEditorAbility extends PhotoEditorExtensionAbility {\n  onDestroy() {\n    console.info(TAG, `onDestroy`);\n    // 调用同步函数...\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Promise异步回调示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { PhotoEditorExtensionAbility } from '@kit.AbilityKit';\n\nconst TAG: string = '[testTag] ExamplePhotoEditorAbility';\n\nexport default class ExamplePhotoEditorAbility extends PhotoEditorExtensionAbility {\n  async onDestroy() {\n    console.info(TAG, `onDestroy`);\n    // 调用异步函数...\n  }\n}\n"
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
795923(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959394-b9bd4f75e8e49de023b38a2876462838.png");

},
812575(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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