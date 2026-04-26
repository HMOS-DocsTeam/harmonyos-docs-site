"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["124512"], {
264695(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ability_api_ability_arkts_stage_model_js_apis_app_ability_insightintentdecorator_js_apis_app_ability_insightintentdecorator_md_061_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ability-api-ability-arkts-stage-model-js-apis-app-ability-insightintentdecorator-js-apis-app-ability-insightintentdecorator-md-061.json
var site_docs_ref_ability_api_ability_arkts_stage_model_js_apis_app_ability_insightintentdecorator_js_apis_app_ability_insightintentdecorator_md_061_namespaceObject = JSON.parse('{"id":"ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator","title":"@ohos.app.ability.InsightIntentDecorator (意图装饰器定义)","description":"InsightIntentDecorator模块提供了几类意图装饰器，用于装饰类或方法。开发者可以使用装饰器开发意图, 将应用的功能定义为意图，并集成到智能问答、智能搜索、智能推荐等AI入口。","source":"@site/docs-ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator.md","sourceDirName":"ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator","slug":"/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":26,"frontMatter":{"title":"@ohos.app.ability.InsightIntentDecorator (意图装饰器定义)","sidebar_position":26,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-insightintentdecorator","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-app-ability-insightintentdecorator"},"sidebar":"ref","previous":{"title":"@ohos.app.ability.InsightIntentContext (意图执行上下文)","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentcontext/js-apis-app-ability-insightintentcontext"},"next":{"title":"@ohos.app.ability.InsightIntentEntryExecutor (@InsightIntentEntry的意图执行基类)","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintententryexecutor/js-apis-app-ability-insightintententryexecutor"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator.md


const frontMatter = {
	title: '@ohos.app.ability.InsightIntentDecorator (意图装饰器定义)',
	sidebar_position: 26,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-insightintentdecorator',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-app-ability-insightintentdecorator'
};
const contentTitle = '@ohos.app.ability.InsightIntentDecorator (意图装饰器定义)';

const assets = {

};



const toc = [{
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "@InsightIntentLink",
  "id": "insightintentlink",
  "level": 2
}, {
  "value": "IntentDecoratorInfo",
  "id": "intentdecoratorinfo",
  "level": 2
}, {
  "value": "LinkIntentDecoratorInfo",
  "id": "linkintentdecoratorinfo",
  "level": 2
}, {
  "value": "LinkIntentParamMapping",
  "id": "linkintentparammapping",
  "level": 2
}, {
  "value": "LinkParamCategory",
  "id": "linkparamcategory",
  "level": 2
}, {
  "value": "@InsightIntentPage",
  "id": "insightintentpage",
  "level": 2
}, {
  "value": "PageIntentDecoratorInfo",
  "id": "pageintentdecoratorinfo",
  "level": 2
}, {
  "value": "@InsightIntentFunction",
  "id": "insightintentfunction",
  "level": 2
}, {
  "value": "@InsightIntentFunctionMethod",
  "id": "insightintentfunctionmethod",
  "level": 2
}, {
  "value": "FunctionIntentDecoratorInfo",
  "id": "functionintentdecoratorinfo",
  "level": 2
}, {
  "value": "@InsightIntentEntry",
  "id": "insightintententry",
  "level": 2
}, {
  "value": "EntryIntentDecoratorInfo",
  "id": "entryintentdecoratorinfo",
  "level": 2
}, {
  "value": "@InsightIntentForm",
  "id": "insightintentform",
  "level": 2
}, {
  "value": "FormIntentDecoratorInfo",
  "id": "formintentdecoratorinfo",
  "level": 2
}, {
  "value": "@InsightIntentEntity",
  "id": "insightintententity",
  "level": 2
}, {
  "value": "IntentEntityDecoratorInfo",
  "id": "intententitydecoratorinfo",
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
        id: "ohosappabilityinsightintentdecorator-意图装饰器定义",
        children: "@ohos.app.ability.InsightIntentDecorator (意图装饰器定义)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["InsightIntentDecorator模块提供了几类意图装饰器，用于装饰类或方法。开发者可以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-decorator-development",
        children: "使用装饰器开发意图"
      }), ", 将应用的功能定义为意图，并集成到智能问答、智能搜索、智能推荐等AI入口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#insightintentlink",
          children: "@InsightIntentLink"
        }), "装饰器：使用该装饰器装饰当前应用的uri链接，可以将该uri链接定义为意图，便于AI入口通过意图快速跳转到当前应用。该装饰器支持的参数参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#linkintentdecoratorinfo",
          children: "LinkIntentDecoratorInfo"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#insightintentpage",
          children: "@InsightIntentPage"
        }), "装饰器：使用该装饰器装饰当前应用的Page页面，可以将该Page页面定义为意图，便于AI入口通过意图快速跳转到当前Page页面。该装饰器支持的参数参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#pageintentdecoratorinfo",
          children: "PageIntentDecoratorInfo"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#insightintentfunction",
          children: "@InsightIntentFunction"
        }), "装饰器与", (0,jsx_runtime.jsx)(_components.a, {
          href: "#insightintentfunctionmethod",
          children: "@InsightIntentFunctionMethod"
        }), "装饰器：两者必须组合使用。使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#insightintentfunction",
          children: "@InsightIntentFunction"
        }), "装饰器来装饰类，同时使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#insightintentfunctionmethod",
          children: "@InsightIntentFunctionMethod"
        }), "装饰器来装饰类中的静态函数，可以将对应的静态函数定义为意图，便于AI入口能够快速执行此函数。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#insightintententry",
          children: "@InsightIntentEntry"
        }), "装饰器：使用该装饰器装饰一个继承自", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintententryexecutor/js-apis-app-ability-insightintententryexecutor",
          children: "InsightIntentEntryExecutor"
        }), "的类，实现意图操作并配置意图依赖的Ability组件，便于AI入口拉起依赖的Ability组件时，执行对应的意图操作。该装饰器支持的参数参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#entryintentdecoratorinfo",
          children: "EntryIntentDecoratorInfo"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#insightintentform",
          children: "@InsightIntentForm"
        }), "装饰器：使用该装饰器装饰", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/form-api/form-arkts/js-apis-app-form-formextensionability/js-apis-app-form-formextensionability",
          children: "FormExtensionAbility"
        }), "并配置FormExtensionAbility绑定的卡片名称，便于AI入口通过意图添加卡片。该装饰器支持的参数参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#formintentdecoratorinfo",
          children: "FormIntentDecoratorInfo"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#insightintententity",
          children: "@InsightIntentEntity"
        }), "装饰器：使用该装饰器装饰一个继承自", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintent/js-apis-app-ability-insightintent#intententity20",
          children: "IntentEntity"
        }), "的类，可将该类定义为意图实体，用于传递意图调用时所需的参数。该装饰器支持的参数参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#intententitydecoratorinfo",
          children: "IntentEntityDecoratorInfo"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(228586)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 20开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块接口仅可在Stage模型下使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "意图可以分为标准意图和自定义意图。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统会根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "#intentdecoratorinfo",
        children: "IntentDecoratorInfo"
      }), "中的schema与intentVersion字段，在标准意图列表查询是否存在匹配的意图。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果存在匹配的意图，则对应的意图为标准意图。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果不存在匹配的意图，则对应的意图为自定义意图。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { InsightIntentLink, InsightIntentPage, InsightIntentFunctionMethod, InsightIntentFunction, InsightIntentEntry } from '@kit.AbilityKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "insightintentlink",
      children: "@InsightIntentLink"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用该装饰器装饰当前应用的uri链接，可以将该uri链接定义为意图，便于AI入口通过定义的意图快速跳转到当前应用。该装饰器支持的参数参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#linkintentdecoratorinfo",
        children: "LinkIntentDecoratorInfo"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(807298)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["uri链接格式需要符合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-uri-config",
        children: "应用链接说明"
      }), "中的要求。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以自定义意图为例：自定义意图的parameters需要传入标准的JSON Schema数据结构。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { InsightIntentLink, LinkParamCategory } from '@kit.AbilityKit';\n\n@InsightIntentLink({\n  intentName: 'PlayMusic',\n  domain: 'MusicDomain',\n  intentVersion: '1.0.1',\n  displayName: '播放歌曲',\n  displayDescription: '播放音乐意图',\n  icon: $r('app.media.app_icon'), // $r表示本地图标，需要在资源目录中定义\n  llmDescription: '支持传递歌曲名称，播放音乐',\n  keywords: ['音乐播放', '播放歌曲', 'PlayMusic'],\n  uri: 'https://www.example.com/music/',\n  paramMappings: [{\n    paramName: 'songName',\n    paramMappingName: 'music',\n    paramCategory: LinkParamCategory.LINK\n  }],\n  parameters: {\n    'schema': 'http://json-schema.org/draft-07/schema#',\n    'type': 'object',\n    'title': 'Song Schema',\n    'description': 'A schema for describing songs and their artists',\n    'properties': {\n      'songName': {\n        'type': 'string',\n        'description': 'The name of the song',\n        'minLength': 1\n      }\n    },\n    'required': ['songName'],\n    'additionalProperties': false\n  },\n  result: {\n    'type': 'object',\n    'propertyNames': {\n      'enum': [\n        'code',\n        'result'\n      ]\n    },\n    'required': [\n      'code',\n      'result'\n    ],\n    'properties': {\n      'code': {\n        'description': '执行结果码',\n        'type': 'number'\n      },\n      'result': {}\n    }\n  }\n})\nexport class ClassForLink {\n  private _playback: string = 'intention_test';\n\n  public set playback(value: string) {\n    this._playback = value;\n  }\n\n  public get playback(): string {\n    return this._playback;\n  }\n\n  constructor(playback: string) {\n    this._playback = playback;\n  }\n\n  static Function1(playbackProgress: number, playback?: number): void {\n    console.info(`Function1, playbackProgress: ${playbackProgress}.`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "intentdecoratorinfo",
      children: "IntentDecoratorInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "意图装饰器的通用属性，用于定义意图的基本信息（包括意图名称、意图版本号）。适用于本模块的所有装饰器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "属性："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(937221)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果根据schema与intentVersion字段，在标准意图列表存在匹配的标准意图，系统会将intentName、domain、llmDescription、keywords、parameters、result字段均设置为标准意图的相应字段值。"
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
            children: "intentName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示意图名称，是意图的唯一标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示意图垂域，用于将意图按垂直领域分类（例如：视频、音乐、游戏），取值范围参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/service/intents-ai-distribution-characteristic-0000001901922213#section2656133582215",
              children: "各垂域的智慧分发特性列表"
            }), "中的垂域字段。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "intentVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示意图版本号。当意图能力演进时，可通过版本号进行区分和管理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "displayName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示显示给用户的意图名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "displayDescription"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示显示给用户的意图描述。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "schema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示接入的标准意图的名称。开发者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-definition#%E6%8E%A5%E5%85%A5%E6%A0%87%E5%87%86%E6%84%8F%E5%9B%BE",
              children: "接入标准意图"
            }), "时，需要配置该字段，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-definition#%E5%88%9B%E5%BB%BA%E8%87%AA%E5%AE%9A%E4%B9%89%E6%84%8F%E5%9B%BE",
              children: "创建自定义意图"
            }), "时，无需配置该字段。标准意图列表参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-access-specifications",
              children: "附录：标准意图接入规范"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "icon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResourceStr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示意图图标，用于在AI入口显示。  - 当取值为字符串类型时，表示图标读取网络资源。  - 当取值为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-arkts/js-apis-resource-manager/js-apis-resource-manager",
              children: "Resource"
            }), "时，表示图标读取本地资源。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "llmDescription"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示意图的功能，用于大型语言模型理解该意图。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keywords"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示意图的搜索关键字。"
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
            children: ["表示意图参数的数据格式声明，用于意图调用时定义入参的数据格式。取值参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/service/intents-schema-0000001901962713",
              children: "各垂域意图Schema"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Record<string, Object>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示意图调用返回结果的数据格式声明，用于定义意图调用返回结果的数据格式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "linkintentdecoratorinfo",
      children: "LinkIntentDecoratorInfo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LinkIntentDecoratorInfo继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#intentdecoratorinfo",
        children: "IntentDecoratorInfo"
      }), "，用于描述", (0,jsx_runtime.jsx)(_components.a, {
        href: "#insightintentlink",
        children: "@InsightIntentLink"
      }), "装饰器支持的参数，例如应用间跳转需要的uri信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "属性："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "uri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示意图的uri信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "paramMappings"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#linkintentparammapping",
              children: "LinkIntentParamMapping"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "意图参数和uri信息的映射。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "linkintentparammapping",
      children: "LinkIntentParamMapping"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LinkIntentParamMapping是", (0,jsx_runtime.jsx)(_components.a, {
        href: "#insightintentlink",
        children: "@InsightIntentLink"
      }), "装饰器的意图参数和uri信息的映射。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "属性："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "paramName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示意图参数的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "paramMappingName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示意图参数映射名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "paramCategory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#linkparamcategory",
              children: "LinkParamCategory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示意图参数类别。  若意图参数类别取值为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#linkparamcategory",
              children: "LINK"
            }), "，系统获取paramName字段对应的意图参数映射名称，并将该意图参数映射名称拼接到uri链接的末尾(以键值对的形式key=value，key为意图参数映射名称，value为意图参数值)。  若意图参数类别为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#linkparamcategory",
              children: "WANT"
            }), "，系统获取paramName字段对应的意图参数映射名称，并将该意图参数映射名称及取值通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
              children: "Want"
            }), "的parameters字段进行传递。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "linkparamcategory",
      children: "LinkParamCategory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#insightintentlink",
        children: "@InsightIntentLink"
      }), "装饰器的意图参数类别，用于定义意图参数的传递形式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LINK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'link'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示意图参数类别为'link'。意图参数将被拼接到uri链接的末尾，以uri链接的形式传给应用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WANT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'want'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示意图参数类别为'want'。意图参数将通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
              children: "Want"
            }), "的parameters字段传给应用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "insightintentpage",
      children: "@InsightIntentPage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用该装饰器装饰当前应用的页面，可以将页面定义为意图，便于AI入口通过意图快速跳转到指定页面。该装饰器支持的参数参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#pageintentdecoratorinfo",
        children: "PageIntentDecoratorInfo"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(686621)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该装饰器仅支持装饰struct页面。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { InsightIntentPage } from '@kit.AbilityKit';\n\n@Entry\n@Component\n@InsightIntentPage({\n  intentName: 'SearchMusic',\n  domain: 'MusicDomain',\n  intentVersion: '1.0.1',\n  displayName: '搜索歌曲',\n  displayDescription: '搜索歌曲意图',\n  schema: 'SearchMusic',\n  uiAbility: 'Entry',\n  pagePath: './ets/pages/Index',\n  navigationId: '1',\n  navDestinationName: 'PageOne',\n})\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    RelativeContainer() {\n      Text(this.message)\n        .id('HelloWorld')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pageintentdecoratorinfo",
      children: "PageIntentDecoratorInfo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PageIntentDecoratorInfo继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#intentdecoratorinfo",
        children: "IntentDecoratorInfo"
      }), "，用于描述", (0,jsx_runtime.jsx)(_components.a, {
        href: "#insightintentpage",
        children: "@InsightIntentPage"
      }), "装饰器支持的参数，例如目标页面的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navdestination10",
        children: "NavDestination"
      }), "名称。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "属性："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "uiAbility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示与意图绑定的UIAbility名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pagePath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示与意图绑定的页面路径，该页面需要是一个实际存在的文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "navigationId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示与意图绑定的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#%E5%B1%9E%E6%80%A7",
              children: "Navigation组件"
            }), "的id属性。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "navDestinationName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示与意图绑定", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navdestination10",
              children: "NavDestination组件"
            }), "的名称。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "insightintentfunction",
      children: "@InsightIntentFunction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该装饰器与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#insightintentfunctionmethod",
        children: "@InsightIntentFunctionMethod"
      }), "装饰器必须组合使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用该装饰器来装饰类，同时使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#insightintentfunctionmethod",
        children: "@InsightIntentFunctionMethod"
      }), "装饰器来装饰类中的静态函数，可以将对应的静态函数定义为意图，便于AI入口能够快速执行此函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "insightintentfunctionmethod",
      children: "@InsightIntentFunctionMethod"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该装饰器与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#insightintentfunction",
        children: "@InsightIntentFunction"
      }), "装饰器必须组合使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用该装饰器来装饰类中的静态函数，同时使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#insightintentfunction",
        children: "@InsightIntentFunction"
      }), "装饰器来装饰静态函数所属的类，可以将对应的静态函数定义为意图，便于AI入口能够快速执行此函数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(628380)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "静态方法所在的类需要通过export导出。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数的参数名称、参数类型需要与意图定义的参数名称、参数类型保持一致。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { InsightIntentFunction, InsightIntentFunctionMethod } from '@kit.AbilityKit';\n\n@InsightIntentFunction()\nexport class ClassForFuncDemo {\n  @InsightIntentFunctionMethod({\n  intentName: 'GetWeather',\n  domain: 'LifeDomain',\n  intentVersion: '1.0.1',\n  displayName: '查询天气',\n  displayDescription: '显示天气信息',\n  icon: $r('app.media.app_icon'), // $r表示本地图标，需要在资源目录中定义\n  llmDescription: 'Get weather of an location',\n  parameters: {\n    'schema': 'http://json-schema.org/draft-07/schema#',\n    'type': 'object',\n    'title': 'Weather Schema',\n    'description': 'A schema for get weather of an location',\n    'properties': {\n      'location': {\n        'type': 'string',\n        'description': 'The city and state, e.g. Hangzhou',\n        'minLength': 1\n      }\n    },\n    'required': ['location'],\n    'additionalProperties': false\n  }\n})\n  static getWeather(location: string): string {\n    console.info(`location: ${location}`);\n    return 'The current temperature in Hangzhou is 24℃';\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "functionintentdecoratorinfo",
      children: "FunctionIntentDecoratorInfo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#insightintentfunctionmethod",
        children: "@InsightIntentFunctionMethod"
      }), "装饰器的参数类型，当前全部属性均继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#intentdecoratorinfo",
        children: "IntentDecoratorInfo"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "insightintententry",
      children: "@InsightIntentEntry"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用该装饰器装饰一个继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintententryexecutor/js-apis-app-ability-insightintententryexecutor",
        children: "InsightIntentEntryExecutor"
      }), "的类，实现意图操作并配置意图依赖的Ability组件，便于AI入口拉起依赖的Ability组件时，执行对应的意图操作。该装饰器支持的参数参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#entryintentdecoratorinfo",
        children: "EntryIntentDecoratorInfo"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(312161)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果使用该装饰器接入标准意图，必须实现标准意图Json Schema中定义的所有必选参数且类型匹配。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果创建自定义意图，必须实现parameters字段中定义的所有必选参数且类型匹配。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "被装饰的类需要使用export default导出。类的属性仅支持基础类型或意图实体，返回值仅支持意图实体。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { insightIntent, InsightIntentEntry, InsightIntentEntryExecutor } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst LOG_TAG: string = 'testTag-EntryIntent';\n\n// 使用@InsightIntentEntry装饰器定义意图\n@InsightIntentEntry({\n  intentName: 'PlayMusic',\n  domain: 'MusicDomain',\n  intentVersion: '1.0.1',\n  displayName: '播放歌曲',\n  displayDescription: '播放音乐意图',\n  icon: $r('app.media.app_icon'), // $r表示本地图标，需要在资源目录中定义\n  llmDescription: '支持传递歌曲名称，播放音乐',\n  keywords: ['音乐播放', '播放歌曲', 'PlayMusic'],\n  abilityName: 'EntryAbility',\n  executeMode: [insightIntent.ExecuteMode.UI_ABILITY_FOREGROUND],\n  parameters: {\n    'schema': 'http://json-schema.org/draft-07/schema#',\n    'type': 'object',\n    'title': 'Song Schema',\n    'description': 'A schema for describing songs and their artists',\n    'properties': {\n      'songName': {\n        'type': 'string',\n        'description': 'The name of the song',\n        'minLength': 1\n      }\n    },\n    'required': ['songName']\n  }\n})\nexport default class PlayMusicDemo extends InsightIntentEntryExecutor<string> {\n  songName: string = '';\n\n  onExecute(): Promise<insightIntent.IntentResult<string>> {\n    hilog.info(0x0000, LOG_TAG, 'PlayMusicDemo executeMode %{public}s', JSON.stringify(this.executeMode));\n    hilog.info(0x0000, LOG_TAG, '%{public}s', JSON.stringify(this));\n    let storage = new LocalStorage();\n    storage.setOrCreate('songName', this.songName);\n    // 根据executeMode参数的不同情况，提供不同拉起PlayMusicPage页面的方式。\n    if (this.executeMode == insightIntent.ExecuteMode.UI_ABILITY_FOREGROUND) {\n      this.windowStage?.loadContent('pages/PlayMusicPage', storage);\n    } else if (this.executeMode == insightIntent.ExecuteMode.UI_EXTENSION_ABILITY) {\n      this.uiExtensionSession?.loadContent('pages/PlayMusicPage', storage);\n    }\n    // 定义意图的执行结果\n    let result: insightIntent.IntentResult<string> = {\n      code: 123,\n      result: 'result'\n    }\n    hilog.info(0x0000, LOG_TAG, 'PlayMusicDemo return %{public}s', JSON.stringify(result));\n    // 以Promise的方式返回意图执行结果\n    return Promise.reject(result);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "entryintentdecoratorinfo",
      children: "EntryIntentDecoratorInfo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["EntryIntentDecoratorInfo继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#intentdecoratorinfo",
        children: "IntentDecoratorInfo"
      }), "，用于描述", (0,jsx_runtime.jsx)(_components.a, {
        href: "#insightintententry",
        children: "@InsightIntentEntry"
      }), "装饰器支持的参数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "属性："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "abilityName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示与意图绑定的Ability名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "executeMode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintent/js-apis-app-ability-insightintent#executemode",
              children: "insightIntent.ExecuteMode"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示意图调用执行模式。即拉起绑定的Ability时支持的执行模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "insightintentform",
      children: "@InsightIntentForm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用该装饰器装饰", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/form-api/form-arkts/js-apis-app-form-formextensionability/js-apis-app-form-formextensionability",
        children: "FormExtensionAbility"
      }), "并配置FormExtensionAbility绑定的卡片名称，便于AI入口通过意图添加卡片。该装饰器支持的参数参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#formintentdecoratorinfo",
        children: "FormIntentDecoratorInfo"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(447347)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["卡片名称定义的要求参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/form-kit/arkts-ui/arkts-ui-widget-configuration#%E5%8D%A1%E7%89%87%E9%85%8D%E7%BD%AE",
        children: "卡片配置"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { formBindingData, FormExtensionAbility, formInfo } from '@kit.FormKit';\nimport { insightIntent, Want, InsightIntentForm } from '@kit.AbilityKit';\n\n// 使用@InsightIntentForm装饰器将该FormExtensionAbility名为widget的卡片定义为意图\n@InsightIntentForm({\n  intentName: 'PlayMusic',\n  domain: 'MusicDomain',\n  intentVersion: '1.0.1',\n  displayName: '播放歌曲',\n  displayDescription: '播放音乐意图',\n  icon: $r('app.media.app_icon'), // $r表示本地图标，需要在资源目录中定义\n  llmDescription: '支持传递歌曲名称，播放音乐',\n  keywords: ['音乐播放', '播放歌曲', 'PlayMusic'],\n  parameters: {\n    '$schema': 'http://json-schema.org/draft-07/schema#',\n    'type': 'object',\n    'title': 'Song Schema',\n    'description': 'A schema for describing songs and their artists',\n    'properties': {\n      'songName': {\n        'type': 'string',\n        'description': 'The name of the song',\n        'minLength': 1\n      },\n      'artist': {\n        'type': 'object',\n        'description': 'Information about the artist',\n        'properties': {\n          'country': {\n            'type': 'string',\n            'description': 'The artist\\'s country of origin',\n            'default': 'zh'\n          },\n          'city': {\n            'type': 'object',\n            'description': 'The artist\\' city of origin'\n          },\n          'name': {\n            'type': 'string',\n            'description': 'The name of the artist',\n            'minLength': 1\n          }\n        },\n        'required': ['name']\n      }\n    },\n    'required': ['songName']\n  },\n  formName: 'widget'\n})\nexport default class EntryFormAbility extends FormExtensionAbility {\n  songName: string = '';\n\n  onAddForm(want: Want) {\n    // 该方法被调用时，将返回FormBindingData对象\n    let formData = '';\n    return formBindingData.createFormBindingData(formData);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "formintentdecoratorinfo",
      children: "FormIntentDecoratorInfo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FormIntentDecoratorInfo继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#intentdecoratorinfo",
        children: "IntentDecoratorInfo"
      }), "，用于描述", (0,jsx_runtime.jsx)(_components.a, {
        href: "#insightintentform",
        children: "@InsightIntentForm"
      }), "装饰器支持的参数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "属性："
        })
      })
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
            children: "formName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示FormExtensionAbility绑定的卡片名称。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "insightintententity",
      children: "@InsightIntentEntity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用该装饰器装饰一个继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintent/js-apis-app-ability-insightintent#intententity20",
        children: "IntentEntity"
      }), "的类，可将该类定义为意图实体，用于传递意图调用时所需的参数。该装饰器支持的参数参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#intententitydecoratorinfo",
        children: "IntentEntityDecoratorInfo"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { insightIntent, InsightIntentEntity } from '@kit.AbilityKit';\n\n@InsightIntentEntity({\n  entityCategory: 'artist entity category',\n  parameters: {\n    '$id': '/schemas/ArtistClassDef',\n    'type': 'object',\n    'description': 'Information about the artist',\n    'properties': {\n      'country': {\n        'type': 'string',\n        'description': 'The artist\\'s country of origin',\n        'default': 'zh'\n      },\n      'city': {\n        'type': 'string',\n        'description': 'The artist\\'s city of origin'\n      },\n      'name': {\n        'type': 'string',\n        'description': 'The name of the artist',\n        'minLength': 1\n      }\n    },\n    'required': ['name']\n  }\n})\nexport class ArtistClassDef implements insightIntent.IntentEntity {\n  entityId: string = 'id';\n  name: string = '';\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "intententitydecoratorinfo",
      children: "IntentEntityDecoratorInfo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于描述", (0,jsx_runtime.jsx)(_components.a, {
        href: "#insightintententity",
        children: "@InsightIntentEntity"
      }), "装饰器支持的参数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "属性："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "entityCategory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示意图实体类别。可以基于意图实体类别对意图实体进行归类"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示意图实体的数据格式声明。用于定义意图实体的数据格式。"
          })]
        })]
      })]
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
228586(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
312161(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
807298(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
447347(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
686621(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
628380(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
937221(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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