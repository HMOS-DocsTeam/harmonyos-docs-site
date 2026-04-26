"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["347473"], {
998954(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_localization_api_localization_arkts_js_apis_intl_js_apis_intl_md_617_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-localization-api-localization-arkts-js-apis-intl-js-apis-intl-md-617.json
var site_docs_ref_localization_api_localization_arkts_js_apis_intl_js_apis_intl_md_617_namespaceObject = JSON.parse('{"id":"localization-api/localization-arkts/js-apis-intl/js-apis-intl","title":"@ohos.intl (国际化-Intl)","description":"本模块提供基础的应用国际化能力，包括时间日期格式化、数字格式化、排序等，相关接口在ECMA 402标准中定义。","source":"@site/docs-ref/localization-api/localization-arkts/js-apis-intl/js-apis-intl.md","sourceDirName":"localization-api/localization-arkts/js-apis-intl","slug":"/localization-api/localization-arkts/js-apis-intl/js-apis-intl","permalink":"/harmonyos-docs-site/ref/localization-api/localization-arkts/js-apis-intl/js-apis-intl","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"@ohos.intl (国际化-Intl)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-intl","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-intl"},"sidebar":"ref","previous":{"title":"@ohos.i18n (国际化-I18n)","permalink":"/harmonyos-docs-site/ref/localization-api/localization-arkts/js-apis-i18n/js-apis-i18n"},"next":{"title":"@ohos.resourceManager (资源管理)","permalink":"/harmonyos-docs-site/ref/localization-api/localization-arkts/js-apis-resource-manager/js-apis-resource-manager"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/localization-api/localization-arkts/js-apis-intl/js-apis-intl.md


const frontMatter = {
	title: '@ohos.intl (国际化-Intl)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-intl',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-intl'
};
const contentTitle = '@ohos.intl (国际化-Intl)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "Locale(deprecated)",
  "id": "localedeprecated",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 3
}, {
  "value": "constructor(deprecated)",
  "id": "constructordeprecated",
  "level": 3
}, {
  "value": "constructor(deprecated)",
  "id": "constructordeprecated-1",
  "level": 3
}, {
  "value": "toString(deprecated)",
  "id": "tostringdeprecated",
  "level": 3
}, {
  "value": "maximize(deprecated)",
  "id": "maximizedeprecated",
  "level": 3
}, {
  "value": "minimize(deprecated)",
  "id": "minimizedeprecated",
  "level": 3
}, {
  "value": "LocaleOptions(deprecated)",
  "id": "localeoptionsdeprecated",
  "level": 2
}, {
  "value": "DateTimeFormat(deprecated)",
  "id": "datetimeformatdeprecated",
  "level": 2
}, {
  "value": "constructor(deprecated)",
  "id": "constructordeprecated-2",
  "level": 3
}, {
  "value": "constructor(deprecated)",
  "id": "constructordeprecated-3",
  "level": 3
}, {
  "value": "format(deprecated)",
  "id": "formatdeprecated",
  "level": 3
}, {
  "value": "formatRange(deprecated)",
  "id": "formatrangedeprecated",
  "level": 3
}, {
  "value": "resolvedOptions(deprecated)",
  "id": "resolvedoptionsdeprecated",
  "level": 3
}, {
  "value": "DateTimeOptions(deprecated)",
  "id": "datetimeoptionsdeprecated",
  "level": 2
}, {
  "value": "NumberFormat",
  "id": "numberformat",
  "level": 2
}, {
  "value": "constructor8+",
  "id": "constructor8",
  "level": 3
}, {
  "value": "constructor",
  "id": "constructor",
  "level": 3
}, {
  "value": "format",
  "id": "format",
  "level": 3
}, {
  "value": "formatRange18+",
  "id": "formatrange18",
  "level": 3
}, {
  "value": "resolvedOptions",
  "id": "resolvedoptions",
  "level": 3
}, {
  "value": "NumberOptions",
  "id": "numberoptions",
  "level": 2
}, {
  "value": "Collator8+",
  "id": "collator8",
  "level": 2
}, {
  "value": "constructor8+",
  "id": "constructor8-1",
  "level": 3
}, {
  "value": "constructor8+",
  "id": "constructor8-2",
  "level": 3
}, {
  "value": "compare8+",
  "id": "compare8",
  "level": 3
}, {
  "value": "resolvedOptions8+",
  "id": "resolvedoptions8",
  "level": 3
}, {
  "value": "CollatorOptions8+",
  "id": "collatoroptions8",
  "level": 2
}, {
  "value": "PluralRules(deprecated)",
  "id": "pluralrulesdeprecated",
  "level": 2
}, {
  "value": "constructor(deprecated)",
  "id": "constructordeprecated-4",
  "level": 3
}, {
  "value": "constructor(deprecated)",
  "id": "constructordeprecated-5",
  "level": 3
}, {
  "value": "select(deprecated)",
  "id": "selectdeprecated",
  "level": 3
}, {
  "value": "PluralRulesOptions(deprecated)",
  "id": "pluralrulesoptionsdeprecated",
  "level": 2
}, {
  "value": "RelativeTimeFormat(deprecated)",
  "id": "relativetimeformatdeprecated",
  "level": 2
}, {
  "value": "constructor(deprecated)",
  "id": "constructordeprecated-6",
  "level": 3
}, {
  "value": "constructor(deprecated)",
  "id": "constructordeprecated-7",
  "level": 3
}, {
  "value": "format(deprecated)",
  "id": "formatdeprecated-1",
  "level": 3
}, {
  "value": "formatToParts(deprecated)",
  "id": "formattopartsdeprecated",
  "level": 3
}, {
  "value": "resolvedOptions(deprecated)",
  "id": "resolvedoptionsdeprecated-1",
  "level": 3
}, {
  "value": "RelativeTimeFormatInputOptions(deprecated)",
  "id": "relativetimeformatinputoptionsdeprecated",
  "level": 2
}, {
  "value": "RelativeTimeFormatResolvedOptions(deprecated)",
  "id": "relativetimeformatresolvedoptionsdeprecated",
  "level": 2
}, {
  "value": "附录",
  "id": "附录",
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
    object: "object",
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
        id: "ohosintl-国际化-intl",
        children: "@ohos.intl (国际化-Intl)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块提供基础的应用国际化能力，包括时间日期格式化、数字格式化、排序等，相关接口在ECMA 402标准中定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-arkts/js-apis-i18n/js-apis-i18n",
        children: "I18N模块"
      }), "提供其他非ECMA 402定义的国际化接口，与本模块共同使用可提供完整的国际化支持能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(31767)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 6开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["本模块接口基于", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://cldr.unicode.org",
          children: "CLDR"
        }), "国际化数据库实现，随着CLDR标准的迭代演进，接口处理结果可能会相应调整。例如", (0,jsx_runtime.jsx)(_components.a, {
          href: "#numberformat",
          children: "数字格式化接口"
        }), "，其返回值仅适用于界面展示场景，开发者请勿对返回格式进行硬编码或假设性判断，否则可能导致版本兼容问题。其中，API version 12 对应", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://cldr.unicode.org/index/downloads/cldr-42",
          children: "CLDR 42"
        }), "版本，具体数据变更详情可查阅CLDR官方文档。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API version 11开始，本模块部分接口支持在ArkTS卡片中使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API version 12开始，本模块全接口支持在元服务中使用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { intl } from '@kit.LocalizationKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "localedeprecated",
      children: "Locale(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 6开始支持，从API version 20开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale",
        children: "Intl.Locale"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力"
        })
      }), "：从API version 11开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "与区域设置相关的语言，如：zh。取值遵循ISO 639标准。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "区域语言的书写方式（脚本），如：Hans。取值遵循Unicode ISO 15924标准。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "region"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "与区域设置相关的国家地区，如：CN。取值遵循ISO 3166标准。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "baseName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "区域对象的基本信息，由语言、脚本、国家地区组成，如：zh-Hans-CN。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "caseFirst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "区域的排序规则是否考虑大小写，取值包括：  \"upper\"：大写排前面。  \"lower\"：小写排前面。  \"false\"：使用区域默认的大小写排序规则。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "calendar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["区域的日历信息，取值包括：  \"buddhist\", \"chinese\", \"coptic\",\"dangi\", \"ethioaa\", \"ethiopic\", \"gregory\", \"hebrew\", \"indian\", \"islamic\", \"islamic-umalqura\", \"islamic-tbla\", \"islamic-civil\", \"islamic-rgsa\", \"iso8601\", \"japanese\", \"persian\", \"roc\", \"islamicc\"。  不同取值表示的含义请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/localization-kit/i18n/i18n-calendar",
              children: "设置日历和历法表1"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "collation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "区域的排序规则，取值包括：  \"big5han\"：拉丁字母使用的拼音排序。  \"compat\"：兼容性排序，仅用于阿拉伯语。  \"dict\"：词典风格排序，仅用于僧伽罗语。  \"direct\"：二进制码点排序。  \"ducet\"：按Unicode排序元素表排序。  \"eor\"：按欧洲排序规则排序。  \"gb2312\"：拼音排序，仅用于中文排序。  \"phonebk\"：电话本风格排序。  \"phonetic\"：发音排序。  \"pinyin\"：拼音排序。  \"reformed\"：瑞典语排序。  \"searchjl\"：韩语初始辅音搜索的特殊排序。  \"stroke\"：汉语的笔画排序。  \"trad\"：传统风格排序，如西班牙语。  \"unihan\"：统一汉字排序，用于日语、韩语、中文等汉字排序。  \"zhuyin\"：注音排序，仅用于中文排序。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hourCycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["区域的时制信息，取值包括：  \"h11\"、\"h12\"、\"h23\"、\"h24\"。  不同取值的显示效果可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%99%84%E5%BD%95",
              children: "附录表5"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "numberingSystem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "区域使用的数字系统，取值包括：  \"adlm\", \"ahom\", \"arab\", \"arabext\", \"bali\", \"beng\", \"bhks\", \"brah\", \"cakm\", \"cham\", \"deva\", \"diak\", \"fullwide\", \"gong\", \"gonm\", \"gujr\", \"guru\", \"hanidec\", \"hmng\", \"hmnp\", \"java\", \"kali\", \"khmr\", \"knda\", \"lana\", \"lanatham\", \"laoo\", \"latn\", \"lepc\", \"limb\", \"mathbold\", \"mathdbl\", \"mathmono\", \"mathsanb\", \"mathsans\", \"mlym\", \"modi\", \"mong\", \"mroo\", \"mtei\", \"mymr\", \"mymrshan\", \"mymrtlng\", \"newa\", \"nkoo\", \"olck\", \"orya\", \"osma\", \"rohg\", \"saur\", \"segment\", \"shrd\", \"sind\", \"sinh\", \"sora\", \"sund\", \"takr\", \"talu\", \"tamldec\", \"telu\", \"thai\", \"tibt\", \"tirh\", \"vaii\", \"wara\", \"wcho\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "numeric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true表示对数字字符进行特殊的排序规则处理，false表示不对数字字符进行特殊的排序规则处理。  默认值：false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructordeprecated",
      children: "constructor(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 8开始支持，从API version 20开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-arkts/js-apis-i18n/js-apis-i18n#getsystemlocaleinstance20",
        children: "i18n.System.getSystemLocaleInstance"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建区域对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力"
        })
      }), "：从API version 11开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { intl } from '@kit.LocalizationKit';\n\n// 默认构造函数使用系统当前区域ID创建\nlet locale = new intl.Locale();\n// 返回系统当前区域ID\nlet localeID = locale.toString();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructordeprecated-1",
      children: "constructor(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(locale: string, options?: LocaleOptions)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 6开始支持，从API version 20开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale",
        children: "Intl.Locale.constructor"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建区域对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力"
        })
      }), "：从API version 11开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
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
            children: "locale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示区域ID的字符串，由语言、脚本、国家地区组成。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#localeoptionsdeprecated",
              children: "LocaleOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建区域对象的选项。"
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
        children: "import { intl } from '@kit.LocalizationKit';\n\n// 创建zh-CN区域对象\nlet locale = new intl.Locale('zh-CN');\nlet localeID = locale.toString(); // localeID = 'zh-CN'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tostringdeprecated",
      children: "toString(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "toString(): string"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 6开始支持，从API version 20开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/toString",
        children: "Intl.Locale.toString"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取区域对象的字符串。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力"
        })
      }), "：从API version 11开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "区域对象的字符串。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { intl } from '@kit.LocalizationKit';\n\n// 创建en-GB区域对象\nlet locale = new intl.Locale('en-GB');\nlet localeID = locale.toString(); // localeID = 'en-GB'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "maximizedeprecated",
      children: "maximize(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "maximize(): Locale"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 6开始支持，从API version 20开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/maximize",
        children: "Intl.Locale.maximize"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "最大化区域信息，补齐区域对象中缺少的脚本、国家地区信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力"
        })
      }), "：从API version 11开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
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
              href: "#localedeprecated",
              children: "Locale"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "补齐完脚本、国家地区信息后的区域对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { intl } from '@kit.LocalizationKit';\n\n// 创建zh区域对象\nlet locale = new intl.Locale('zh');\n// 补齐区域对象的脚本和地区\nlet maximizedLocale = locale.maximize();\nlet localeID = maximizedLocale.toString(); // localeID = 'zh-Hans-CN'\n\n// 创建en-US区域对象\nlocale = new intl.Locale('en-US');\n// 补齐区域对象的脚本\nmaximizedLocale = locale.maximize();\nlocaleID = maximizedLocale.toString(); // localeID = 'en-Latn-US'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "minimizedeprecated",
      children: "minimize(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "minimize(): Locale"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 6开始支持，从API version 20开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/minimize",
        children: "Intl.Locale.minimize"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "最小化区域信息，移除区域对象中的脚本、国家地区信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力"
        })
      }), "：从API version 11开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
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
              href: "#localedeprecated",
              children: "Locale"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移除完脚本、国家地区信息后的区域对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { intl } from '@kit.LocalizationKit';\n\n// 创建zh-Hans-CN区域对象\nlet locale = new intl.Locale('zh-Hans-CN');\n// 移除区域对象的脚本和地区\nlet minimizedLocale = locale.minimize();\nlet localeID = minimizedLocale.toString(); // localeID = 'zh'\n\n// 创建en-US区域对象\nlocale = new intl.Locale('en-US');\n// 移除区域对象的地区\nminimizedLocale = locale.minimize();\nlocaleID = minimizedLocale.toString(); // localeID = 'en'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "localeoptionsdeprecated",
      children: "LocaleOptions(deprecated)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 6开始支持，从API version 20开始废弃，以calendar为例，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar",
        children: "Intl.LocaleOptions.calendar"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "区域初始化选项。从API version 9开始，LocaleOptions属性由必填改为可选。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力"
        })
      }), "：从API version 11开始，该类型支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
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
            children: "calendar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "历法参数，取值包括：  \"buddhist\", \"chinese\", \"coptic\", \"dangi\", \"ethioaa\", \"ethiopic\", \"gregory\", \"hebrew\", \"indian\", \"islamic\", \"islamic-umalqura\", \"islamic-tbla\", \"islamic-civil\", \"islamic-rgsa\", \"iso8601\", \"japanese\", \"persian\", \"roc\", \"islamicc\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "collation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "区域的排序规则，取值包括：  \"big5han\"：拉丁字母使用的拼音排序。  \"compat\"：兼容性排序，仅用于阿拉伯语。  \"dict\"：词典风格排序，仅用于僧伽罗语。  \"direct\"：二进制码点排序。  \"ducet\"：按Unicode排序元素表排序。  \"eor\"：按欧洲排序规则排序。  \"gb2312\"：拼音排序，仅用于中文排序。  \"phonebk\"：电话本风格排序。  \"phonetic\"：发音排序。  \"pinyin\"：拼音排序。  \"reformed\"：瑞典语排序。  \"searchjl\"：韩语初始辅音搜索的特殊排序。  \"stroke\"：汉语的笔画排序。  \"trad\"：传统风格排序，如西班牙语。  \"unihan\"：统一汉字排序，用于日语、韩语、中文等汉字排序。  \"zhuyin\"：注音排序，仅用于中文排序。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hourCycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "时制格式，取值包括：  \"h11\", \"h12\", \"h23\", \"h24\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "numberingSystem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数字系统，取值包括：  \"adlm\", \"ahom\", \"arab\", \"arabext\", \"bali\", \"beng\", \"bhks\", \"brah\", \"cakm\", \"cham\", \"deva\", \"diak\", \"fullwide\", \"gong\", \"gonm\", \"gujr\", \"guru\", \"hanidec\", \"hmng\", \"hmnp\", \"java\", \"kali\", \"khmr\", \"knda\", \"lana\", \"lanatham\", \"laoo\", \"latn\", \"lepc\", \"limb\", \"mathbold\", \"mathdbl\", \"mathmono\", \"mathsanb\", \"mathsans\", \"mlym\", \"modi\", \"mong\", \"mroo\", \"mtei\", \"mymr\", \"mymrshan\", \"mymrtlng\", \"newa\", \"nkoo\", \"olck\", \"orya\", \"osma\", \"rohg\", \"saur\", \"segment\", \"shrd\", \"sind\", \"sinh\", \"sora\", \"sund\", \"takr\", \"talu\", \"tamldec\", \"telu\", \"thai\", \"tibt\", \"tirh\", \"vaii\", \"wara\", \"wcho\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "numeric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true表示将数字字符视为数字进行排序处理，false表示将数字字符视为普通字符进行排序处理。例如设置为true时，字符串“21”和字符串“123”比较，相当于数字21和123比较。默认值：false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "caseFirst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "区域的排序规则是否考虑大小写，取值包括：  \"upper\"：大写排前面。  \"lower\"：小写排前面。  \"false\"：使用区域默认的大小写排序规则。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(288834)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["calendar：不同取值的含义请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/localization-kit/i18n/i18n-calendar",
          children: "设置日历和历法表1"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "datetimeformatdeprecated",
      children: "DateTimeFormat(deprecated)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 6开始支持，从API version 20开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat",
        children: "Intl.DateTimeFormat"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供日期格式化的能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructordeprecated-2",
      children: "constructor(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 8开始支持，从API version 20开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat",
        children: "Intl.DateTimeFormat.constructor"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建时间、日期格式化对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力"
        })
      }), "：从API version 11开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { intl } from '@kit.LocalizationKit';\n\n// 使用系统当前区域ID创建DateTimeFormat对象\nlet formatter: intl.DateTimeFormat = new intl.DateTimeFormat();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructordeprecated-3",
      children: "constructor(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(locale: string | Array<string>, options?: DateTimeOptions)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 6开始支持，从API version 20开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat",
        children: "Intl.DateTimeFormat.constructor"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建时间、日期格式化对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力"
        })
      }), "：从API version 11开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
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
            children: "locale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#datetimeoptionsdeprecated",
              children: "DateTimeOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建时间、日期格式化对象时可设置的配置项。  若所有选项均未设置时，year、month、day三个属性的默认值为numeric。"
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
        children: "import { intl } from '@kit.LocalizationKit';\n\n// 使用zh-CN区域ID创建DateTimeFormat对象，日期风格为full，时间风格为medium\nlet formatter: intl.DateTimeFormat = new intl.DateTimeFormat('zh-CN', { dateStyle: 'full', timeStyle: 'medium' });\n\n// 使用区域ID列表创建DateTimeFormat对象，因为ban为非法区域ID，因此使用zh区域ID创建DateTimeFormat对象\nformatter = new intl.DateTimeFormat(['ban', 'zh'], { dateStyle: 'full', timeStyle: 'medium' });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "formatdeprecated",
      children: "format(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "format(date: Date): string"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 6开始支持，从API version 20开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format",
        children: "Intl.DateTimeFormat.format"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对时间、日期进行格式化。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力"
        })
      }), "：从API version 11开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
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
            children: "date"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Date"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "时间、日期。说明：月份从0开始计数，例如0表示一月。"
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "格式化后的时间、日期字符串。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { intl } from '@kit.LocalizationKit';\n\nlet date: Date = new Date(2021, 11, 17, 3, 24, 0); // 时间日期为2021.12.17 03:24:00\n// 使用en-GB区域ID创建DateTimeFormat对象\nlet formatter: intl.DateTimeFormat = new intl.DateTimeFormat('en-GB');\nlet formattedDate: string = formatter.format(date); // formattedDate \"17/12/2021\"\n\n// 使用en-GB区域ID创建DateTimeFormat对象，dateStyle设置为full，timeStyle设置为medium\nformatter = new intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'medium' });\nformattedDate = formatter.format(date); // formattedDate \"Friday, 17 December 2021, 03:24:00\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "formatrangedeprecated",
      children: "formatRange(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "formatRange(startDate: Date, endDate: Date): string"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 6开始支持，从API version 20开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange",
        children: "Intl.DateTimeFormat.formatRange"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对时间段、日期段进行格式化。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力"
        })
      }), "：从API version 11开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
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
            children: "startDate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Date"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "时间、日期的开始。说明：月份从0开始计数，例如0表示一月。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "endDate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Date"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "时间、日期的结束。说明：月份从0开始计数，例如0表示一月。"
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "格式化后的时间段、日期段字符串。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { intl } from '@kit.LocalizationKit';\n\nlet startDate: Date = new Date(2021, 11, 17, 3, 24, 0); // 时间日期为2021.12.17 03:24:00\nlet endDate: Date = new Date(2021, 11, 18, 3, 24, 0);\n// 使用en-GB区域ID创建DateTimeFormat对象\nlet formatter: intl.DateTimeFormat = new intl.DateTimeFormat('en-GB');\nlet formattedDateRange: string = formatter.formatRange(startDate, endDate); // formattedDateRange = '17/12/2021 - 18/12/2021'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resolvedoptionsdeprecated",
      children: "resolvedOptions(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "resolvedOptions(): DateTimeOptions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 6开始支持，从API version 20开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions",
        children: "Intl.DateTimeFormat.resolvedOptions"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取创建时间、日期格式化对象时设置的配置项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力"
        })
      }), "：从API version 11开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
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
              href: "#datetimeoptionsdeprecated",
              children: "DateTimeOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "时间、日期格式化对象设置的配置项。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { intl } from '@kit.LocalizationKit';\n\nlet formatter: intl.DateTimeFormat = new intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'medium' });\n// 返回DateTimeFormat对象的配置项\nlet options: intl.DateTimeOptions = formatter.resolvedOptions();\nlet dateStyle: string | undefined = options.dateStyle; // dateStyle = 'full'\nlet timeStyle: string | undefined = options.timeStyle; // timeStyle = 'medium'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "datetimeoptionsdeprecated",
      children: "DateTimeOptions(deprecated)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 6开始支持，从API version 20开始废弃，建议使用Intl.DateTimeFormatOptions和Intl.ResolvedDateTimeFormatOptions替代。用法参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat",
        children: "Intl.DateTimeFormat.constructor"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions",
        children: "Intl.DateTimeFormat.resolvedOptions"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "时间、日期格式化时可设置的配置项。从API version 9开始，DateTimeOptions的属性由必填改为可选。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力"
        })
      }), "：从API version 11开始，该类型支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "locale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "合法的区域ID，如：zh-Hans-CN。  默认值：系统当前区域ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dateStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["日期显示格式，取值包括：  \"long\", \"short\", \"medium\", \"full\", \"auto\"。  不同取值的显示效果请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%99%84%E5%BD%95",
              children: "附录表1"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "timeStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["时间显示格式，取值包括：  \"long\", \"short\", \"medium\", \"full\", \"auto\"。  不同取值的显示效果请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%99%84%E5%BD%95",
              children: "附录表2"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hourCycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["时制格式，取值包括：  \"h11\", \"h12\", \"h23\", \"h24\"。  不设置dateStyle或timeStyle参数时的显示效果请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%99%84%E5%BD%95",
              children: "附录表5"
            }), "。  设置dateStyle或timeStyle参数时的显示效果请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%99%84%E5%BD%95",
              children: "附录表6"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "timeZone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用的时区，取值为合法的IANA时区ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "numberingSystem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数字系统，取值包括：  \"adlm\", \"ahom\", \"arab\", \"arabext\", \"bali\", \"beng\", \"bhks\", \"brah\", \"cakm\", \"cham\", \"deva\", \"diak\", \"fullwide\", \"gong\", \"gonm\", \"gujr\", \"guru\", \"hanidec\", \"hmng\", \"hmnp\", \"java\", \"kali\", \"khmr\", \"knda\", \"lana\", \"lanatham\", \"laoo\", \"latn\", \"lepc\", \"limb\", \"mathbold\", \"mathdbl\", \"mathmono\", \"mathsanb\", \"mathsans\", \"mlym\", \"modi\", \"mong\", \"mroo\", \"mtei\", \"mymr\", \"mymrshan\", \"mymrtlng\", \"newa\", \"nkoo\", \"olck\", \"orya\", \"osma\", \"rohg\", \"saur\", \"segment\", \"shrd\", \"sind\", \"sinh\", \"sora\", \"sund\", \"takr\", \"talu\", \"tamldec\", \"telu\", \"thai\", \"tibt\", \"tirh\", \"vaii\", \"wara\", \"wcho\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hour12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true表示使用12小时制，false表示使用24小时制。  同时设置hour12和hourCycle时，hourCycle不生效。  若hour12和hourCycle未设置且系统24小时开关打开时，hour12属性的默认值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "weekday"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["星期的显示格式，取值包括：  \"long\", \"short\", \"narrow\", \"auto\"。  不同取值的显示效果请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%99%84%E5%BD%95",
              children: "附录表4"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "era"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["纪元的显示格式，取值包括：  \"long\", \"short\", \"narrow\", \"auto\"。  不同取值的显示效果请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%99%84%E5%BD%95",
              children: "附录表9"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "year"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["年份的显示格式，取值包括：  \"numeric\", \"2-digit\"。  不同取值的显示效果请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%99%84%E5%BD%95",
              children: "附录表3"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "month"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["月份的显示格式，取值包括：  \"numeric\", \"2-digit\", \"long\", \"short\", \"narrow\", \"auto\"。  不同取值的显示效果请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%99%84%E5%BD%95",
              children: "附录表7"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "day"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日期的显示格式，取值包括：  \"numeric\", \"2-digit\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hour"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小时的显示格式，取值包括：  \"numeric\", \"2-digit\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分钟的显示格式，取值包括：  \"numeric\", \"2-digit\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "second"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "秒钟的显示格式，取值包括：  \"numeric\", \"2-digit\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "timeZoneName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["时区名称的本地化表示，取值包括：  \"long\", \"short\", \"auto\"。  不同取值的显示效果请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%99%84%E5%BD%95",
              children: "附录表8"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dayPeriod"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["时段的显示格式，取值包括：  \"long\", \"short\", \"narrow\", \"auto\"。  不同取值的显示效果请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%99%84%E5%BD%95",
              children: "附录表10"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "localeMatcher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要使用的区域匹配算法，取值包括：  \"lookup\"：精确匹配。  \"best fit\"：最佳匹配。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "formatMatcher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要使用的格式匹配算法，取值包括：  \"basic\"：精确匹配。  \"best fit\"：最佳匹配。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "numberformat",
      children: "NumberFormat"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供标准的数字格式化的能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor8",
      children: "constructor8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用当前系统区域创建数字格式化对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { intl } from '@kit.LocalizationKit';\n\n// 使用系统当前区域ID创建NumberFormat对象\nlet formatter: intl.NumberFormat = new intl.NumberFormat();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(locale: string | Array<string>, options?: NumberOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据指定的区域和配置项创建数字格式化对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
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
            children: "locale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#numberoptions",
              children: "NumberOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建数字格式化对象时可设置的配置项。"
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
        children: "import { intl } from '@kit.LocalizationKit';\n\n// 使用en-GB区域ID创建NumberFormat对象，style设置为decimal，notation设置为scientific\nlet formatter: intl.NumberFormat = new intl.NumberFormat('en-GB', { style: 'decimal', notation: 'scientific' });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "format",
      children: "format"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "format(num: number): string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "格式化数字。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
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
            children: "num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数字对象。"
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "格式化后的数字字符串。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { intl } from '@kit.LocalizationKit';\n\n// 使用区域ID列表创建NumberFormat对象，因为en-GB为合法的区域ID，因此使用en-GB创建NumberFormat对象\nlet formatter: intl.NumberFormat = new intl.NumberFormat(['en-GB', 'zh'], { style: 'decimal', notation: 'scientific' });\nlet formattedNumber: string = formatter.format(1223); // formattedNumber = 1.223E3\nlet options: intl.NumberOptions = {\n  roundingPriority: 'lessPrecision',\n  maximumFractionDigits: 3,\n  maximumSignificantDigits: 3\n}\nformatter = new intl.NumberFormat('en', options);\nlet result: string = formatter.format(1.23456); // result = 1.23\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "formatrange18",
      children: "formatRange18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "formatRange(startRange: number, endRange: number): string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对数字范围进行格式化。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 18开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
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
            children: "startRange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开始数字。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "endRange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结束数字。"
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "格式化后的数字范围字符串。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { intl } from '@kit.LocalizationKit';\n\nlet formatter: intl.NumberFormat = new intl.NumberFormat('en-US', { style: 'unit', unit: 'meter' });\nlet formattedRange: string = formatter.formatRange(0, 3); // formattedRange: 0–3 m\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resolvedoptions",
      children: "resolvedOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "resolvedOptions(): NumberOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取创建数字格式化对象时设置的配置项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
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
              href: "#numberoptions",
              children: "NumberOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建数字格式化对象时设置的配置项。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { intl } from '@kit.LocalizationKit';\n\nlet formatter: intl.NumberFormat = new intl.NumberFormat(['en-GB', 'zh'], { style: 'decimal', notation: 'scientific' });\n// 获取NumberFormat对象配置项\nlet options: intl.NumberOptions = formatter.resolvedOptions();\nlet style: string | undefined = options.style; // style = 'decimal'\nlet notation: string | undefined = options.notation; // notation = 'scientific'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "numberoptions",
      children: "NumberOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建数字格式化对象时可设置的配置项。从API version 9开始，NumberOptions的属性由必填改为可选。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "locale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["合法的区域ID， 如：\"zh-Hans-CN\"。  默认值：系统当前区域ID。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "currency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["货币单位， 取值符合", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.iso.org/iso-4217-currency-codes.html",
              children: "ISO-4217标准"
            }), "，如：\"EUR\"，\"CNY\"，\"USD\"等。  从API version 12开始支持三位数字代码，如：\"978\"，\"156\"，\"840\"等。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "currencySign"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["货币单位的符号显示，取值包括： \"standard\"，\"accounting\"。  默认值：standard。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。  不同取值的显示效果请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%99%84%E5%BD%95",
              children: "附录表19"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "currencyDisplay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["货币的显示方式，取值包括：\"symbol\", \"narrowSymbol\", \"code\", \"name\"。  默认值：symbol。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。  不同取值的显示效果请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%99%84%E5%BD%95",
              children: "附录表20"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["单位名称，如：\"meter\"，\"inch\"，“hectare”等。  从API version 18开始新增支持的组合单位有： \"beat-per-minute\", \"body-weight-per-second\", \"breath-per-minute\", \"foot-per-hour\", \"jump-rope-per-minute\", \"meter-per-hour\", \"milliliter-per-minute-per-kilogram\", \"rotation-per-minute\", \"step-per-minute\", \"stroke-per-minute\"。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unitDisplay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["单位的显示格式，取值包括：\"long\", \"short\", \"narrow\"。  默认值：short。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。  不同取值的显示效果请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%99%84%E5%BD%95",
              children: "附录表21"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unitUsage8+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["单位的使用场景，取值包括：\"default\", \"area-land-agricult\", \"area-land-commercl\", \"area-land-residntl\", \"length-person\", \"length-person-small\", \"length-rainfall\", \"length-road\", \"length-road-small\", \"length-snowfall\", \"length-vehicle\", \"length-visiblty\", \"length-visiblty-small\", \"length-person-informal\", \"length-person-small-informal\", \"length-road-informal\", \"speed-road-travel\", \"speed-wind\", \"temperature-person\", \"temperature-weather\", \"volume-vehicle-fuel\", \"elapsed-time-second\", \"size-file-byte\", \"size-shortfile-byte\"。  默认值：default。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。  不同取值的显示效果请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%99%84%E5%BD%95",
              children: "附录表22"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "signDisplay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["数字符号的显示格式，取值包括：  \"auto\"：自动判断是否显示正负符号。  \"never\"：不显示正负号。  \"always\"：总是显示正负号。  \"exceptZero\"：除了0都显示正负号。  默认值：\"auto\"。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "compactDisplay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["紧凑显示格式，取值包括：\"long\", \"short\"。  默认值：short。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。  不同取值的显示效果请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%99%84%E5%BD%95",
              children: "附录表18"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "notation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["数字的表示方法，取值包括：\"standard\", \"scientific\", \"engineering\", \"compact\"。  默认值：standard。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。  不同取值的显示效果请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%99%84%E5%BD%95",
              children: "附录表17"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "localeMatcher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["要使用的区域匹配算法，取值包括：\"lookup\", \"best fit\"。  默认值：best fit。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "style"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["数字的显示格式，取值包括：\"decimal\", \"currency\", \"percent\", \"unit\"。  默认值：decimal。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "numberingSystem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["数字系统，取值包括：  \"adlm\", \"ahom\", \"arab\", \"arabext\", \"bali\", \"beng\", \"bhks\", \"brah\", \"cakm\", \"cham\", \"deva\", \"diak\", \"fullwide\", \"gong\", \"gonm\", \"gujr\", \"guru\", \"hanidec\", \"hmng\", \"hmnp\", \"java\", \"kali\", \"khmr\", \"knda\", \"lana\", \"lanatham\", \"laoo\", \"latn\", \"lepc\", \"limb\", \"mathbold\", \"mathdbl\", \"mathmono\", \"mathsanb\", \"mathsans\", \"mlym\", \"modi\", \"mong\", \"mroo\", \"mtei\", \"mymr\", \"mymrshan\", \"mymrtlng\", \"newa\", \"nkoo\", \"olck\", \"orya\", \"osma\", \"rohg\", \"saur\", \"segment\", \"shrd\", \"sind\", \"sinh\", \"sora\", \"sund\", \"takr\", \"talu\", \"tamldec\", \"telu\", \"thai\", \"tibt\", \"tirh\", \"vaii\", \"wara\", \"wcho\"。  默认值：区域的默认数字系统。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "useGrouping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["true表示分组显示，false表示不分组显示。  默认值：true。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。  不同取值的显示效果请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%99%84%E5%BD%95",
              children: "附录表16"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minimumIntegerDigits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示要使用的最小整数位数，取值范围：1~21。  默认值：1。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。  不同取值的显示效果请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%99%84%E5%BD%95",
              children: "附录表11"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minimumFractionDigits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示要使用的最小分数位数，取值范围：0~20。  默认值：0。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。  不同取值的显示效果请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%99%84%E5%BD%95",
              children: "附录表12"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maximumFractionDigits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示要使用的最大分数位数，取值范围：1~21。  默认值：3。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。  不同取值的显示效果请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%99%84%E5%BD%95",
              children: "附录表13"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minimumSignificantDigits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示要使用的最小有效位数，取值范围：1~21。  默认值：1。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。  不同取值的显示效果请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%99%84%E5%BD%95",
              children: "附录表14"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maximumSignificantDigits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示要使用的最大有效位数，取值范围：1~21。  默认值：21。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。  不同取值的显示效果请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%99%84%E5%BD%95",
              children: "附录表15"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "roundingPriority18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["最大分数位数和最大有效位数同时设置时的舍入优先级，取值包括：\"auto\"，\"morePrecision\" 取最大分数位数，\"lessPrecision\" 取最大有效位数。  默认值：auto。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "roundingIncrement18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示舍入增量，取值范围：1，2，5，10，20，25，50，100，200，250，500，1000，2000，2500，5000。  默认值：1。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "roundingMode18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示舍入模式，取值包括：  \"ceil\"：向上取整。  \"floor\"：向下取整。  \"expand\"：远离零取整。  \"trunc\"：向零取整。  \"halfCeil\"：半向上取整，大于等于增量的一半时向上取整，小于增量的一半时向下取整。  \"halfFloor\"：半向下取整，大于增量的一半时向上取整，小于等于增量的一半时向下取整。  \"halfExpand\"：半远离零取整，大于等于增量的一半时远离零取整，小于增量的一半时向零取整。  \"halfTrunc\"：半向零取整，大于增量的一半时远离零取整，小于等于增量的一半时向零取整。  \"halfEven\"：半向偶数取整，大于增量的一半时 远离零取整，小于增量的一半时向零取整，等于增量的一半时向最近的偶数位舍入。  默认值：halfExpand。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 18开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "collator8",
      children: "Collator8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供字符串排序的能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor8-1",
      children: "constructor8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用当前系统区域创建排序对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { intl } from '@kit.LocalizationKit';\n\n// 使用系统区域创建Collator对象\nlet collator = new intl.Collator();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor8-2",
      children: "constructor8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(locale: string | Array<string>, options?: CollatorOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据指定的区域和配置项创建排序对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
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
            children: "locale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#collatoroptions8",
              children: "CollatorOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建排序对象时可设置的配置项。"
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
        children: "import { intl } from '@kit.LocalizationKit';\n\n// 使用zh-CN区域ID创建Collator对象，localeMatcher设置为lookup，usage设置为sort\nlet collator = new intl.Collator('zh-CN', {localeMatcher: 'lookup', usage: 'sort'});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "compare8",
      children: "compare8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "compare(first: string, second: string): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据配置项的排序规则，比较两个字符串。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
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
            children: "first"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进行比较的第一个字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "second"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进行比较的第二个字符串。"
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
            children: "比较结果。  - number为负数时，表示first排序在second之前。  - number为0时，表示first与second排序相同。  - number为正数，表示first排序在second之后。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { intl } from '@kit.LocalizationKit';\n\n// 使用en-GB区域ID创建Collator对象\nlet collator = new intl.Collator('en-GB');\n// 比较first和second的先后顺序\nlet compareResult = collator.compare('first', 'second'); // compareResult = -1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resolvedoptions8",
      children: "resolvedOptions8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "resolvedOptions(): CollatorOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取创建排序对象时设置的配置项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
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
              href: "#collatoroptions8",
              children: "CollatorOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回排序对象的属性。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { intl } from '@kit.LocalizationKit';\n\nlet collator = new intl.Collator('zh-Hans', { usage: 'sort', ignorePunctuation: true });\n// 获取Collator对象的配置项\nlet options = collator.resolvedOptions();\nlet usage = options.usage; // usage = 'sort'\nlet ignorePunctuation = options.ignorePunctuation; // ignorePunctuation = true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "collatoroptions8",
      children: "CollatorOptions8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建排序对象时可设置的配置项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 9中，CollatorOptions中的属性改为可选。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "localeMatcher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "区域匹配算法，取值范围：  \"lookup\"：模糊匹配。  \"best fit\"：准确匹配。  默认值：\"best fit\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "比较的用途，取值范围：  \"sort\"：用作排序。  \"search\"：用作查找匹配的字符串。  默认值：\"sort\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sensitivity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示字符串中的哪些差异会导致非零结果值，取值范围：  \"base\"：不同的字母比较不相等，比如：'a' ≠ 'b', 'a' = 'á', 'a' = 'A'。  \"accent\"：不同的字母或不同读音的相同字母比较不相等，比如'a' ≠ 'b', 'a' ≠ 'á', 'a' = 'A'。  \"case\"：不同的字母或相同字母大小写比较不相等，比如：'a' ≠ 'b', 'a' = 'á', 'a' ≠ 'A'。  \"variant\"：不同的字母或读音及其它有区别的标志或大小写都是不相等的，比如：'a' ≠ 'b', 'a' ≠ 'á', 'a' ≠ 'A'。  默认值：\"variant\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ignorePunctuation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true表示忽略标点符号，false表示考虑标点符号。  默认值：false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "collation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "区域的排序规则，取值包括：  \"big5han\"：拉丁字母使用的拼音排序。  \"compat\"：兼容性排序，仅用于阿拉伯语。  \"dict\"：词典风格排序，仅用于僧伽罗语。  \"direct\"：二进制码点排序。  \"ducet\"：按Unicode排序元素表排序。  \"eor\"：按欧洲排序规则排序。  \"gb2312\"：拼音排序，仅用于中文排序。  \"phonebk\"：电话本风格排序。  \"phonetic\"：发音排序。  \"pinyin\"：拼音排序。  \"reformed\"：瑞典语排序。  \"searchjl\"：韩语初始辅音搜索的特殊排序。  \"stroke\"：汉语的笔画排序。  \"trad\"：传统风格排序，如西班牙语。  \"unihan\"：统一汉字排序，用于日语、韩语、中文等汉字排序。  \"zhuyin\"：注音排序，仅用于中文排序。  默认值：\"default\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "numeric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数字排序，取值包括：  true：使用数字排序，比如：'1' < '2' < '10' < '11'。  false：不使用数字排序，比如：'1' < '10' < '11' < '2'。  默认值：false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "caseFirst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "区域的排序规则是否考虑大小写，取值包括：  \"upper\"：大写排前面。  \"lower\"：小写排前面。  \"false\"：使用区域默认的大小写排序规则。  默认值：\"false\"。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pluralrulesdeprecated",
      children: "PluralRules(deprecated)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 8开始支持，从API version 20开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules",
        children: "Intl.PluralRules"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供获取单复数类型的能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructordeprecated-4",
      children: "constructor(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 8开始支持，从API version 20开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules",
        children: "Intl.PluralRules.constructor"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建单复数对象来计算数字的单复数类别。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { intl } from '@kit.LocalizationKit';\n\n// 使用系统区域创建PluralRules对象\nlet pluralRules = new intl.PluralRules();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructordeprecated-5",
      children: "constructor(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(locale: string | Array<string>, options?: PluralRulesOptions)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 8开始支持，从API version 20开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules",
        children: "Intl.PluralRules.constructor"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建单复数对象来计算数字的单复数类别。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
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
            children: "locale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#pluralrulesoptionsdeprecated",
              children: "PluralRulesOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建单复数对象时设置的配置项。"
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
        children: "import { intl } from '@kit.LocalizationKit';\n\n// 使用zh-CN区域ID创建PluralRules对象，localeMatcher设置为lookup，type设置为cardinal\nlet pluralRules: intl.PluralRules = new intl.PluralRules('zh-CN', { localeMatcher: 'lookup', type: 'cardinal' });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "selectdeprecated",
      children: "select(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "select(n: number): string"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 8开始支持，从API version 20开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/select",
        children: "Intl.PluralRules.select"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取数字的单复数类别。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
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
            children: "n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待获取单复数类别的数字。"
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
            children: "string"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["单复数类别，取值包括：\"zero\"，\"one\"，\"two\", \"few\", \"many\", \"others\"。  不同取值的含义请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html",
              children: "语言单复数规则"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { intl } from '@kit.LocalizationKit';\n\n// 使用zh-Hans区域ID创建PluralRules对象\nlet zhPluralRules = new intl.PluralRules('zh-Hans');\n// 计算zh-Hans区域中数字1对应的单复数类别\nlet plural = zhPluralRules.select(1); // plural = 'other'\n\n// 使用en-US区域ID创建PluralRules对象\nlet enPluralRules = new intl.PluralRules('en-US');\n// 计算en-US区域中数字1对应的单复数类别\nplural = enPluralRules.select(1); // plural = 'one'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pluralrulesoptionsdeprecated",
      children: "PluralRulesOptions(deprecated)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 8开始支持，从API version 20开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules",
        children: "Intl.PluralRulesOptions"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建单复数对象时可设置的配置项。从API version 9开始，PluralRulesOptions的属性由必填改为可选。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "localeMatcher(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从API version 8开始支持，从API version 20开始废弃，建议使用Intl.PluralRulesOptions.localeMatcher替代，用法参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#options",
              children: "Intl.PluralRules"
            }), "。  区域匹配算法，取值包括：\"best fit\", \"lookup\"。  默认值：best fit。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从API version 8开始支持，从API version 20开始废弃，建议使用Intl.PluralRulesOptions.type替代，用法参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#options",
              children: "Intl.PluralRules"
            }), "。  排序的类型，取值包括：\"cardinal\", \"ordinal\",  默认值：cardinal。  - cardinal：基数词，ordinal：序数词。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minimumIntegerDigits(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从API version 8开始支持，从API version 20开始废弃，建议使用Intl.PluralRulesOptions.minimumIntegerDigits替代，用法参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#options",
              children: "Intl.PluralRules"
            }), "。  表示要使用的最小整数位数，取值范围：1~21。  默认值：1。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minimumFractionDigits(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从API version 8开始支持，从API version 20开始废弃，建议使用Intl.PluralRulesOptions.minimumFractionDigits替代，用法参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#options",
              children: "Intl.PluralRules"
            }), "。  表示要使用的最小分数位数，取值范围：0~20。  默认值：0。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maximumFractionDigits(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从API version 8开始支持，从API version 20开始废弃，建议使用Intl.PluralRulesOptions.maximumFractionDigits替代，用法参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#options",
              children: "Intl.PluralRules"
            }), "。  表示要使用的最大分数位数，取值范围：1~21。  默认值：3。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minimumSignificantDigits(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从API version 8开始支持，从API version 20开始废弃，建议使用Intl.PluralRulesOptions.minimumSignificantDigits替代，用法参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#options",
              children: "Intl.PluralRules"
            }), "。  表示要使用的最小有效位数，取值范围：1~21。  默认值：1。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maximumSignificantDigits(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从API version 8开始支持，从API version 20开始废弃，建议使用Intl.PluralRulesOptions.maximumSignificantDigits替代，用法参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#options",
              children: "Intl.PluralRules"
            }), "。  表示要使用的最大有效位数，取值范围：1~21。  默认值：21。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "relativetimeformatdeprecated",
      children: "RelativeTimeFormat(deprecated)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 8开始支持，从API version 20开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat",
        children: "Intl.RelativeTimeFormat"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供相对时间格式化的能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructordeprecated-6",
      children: "constructor(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 8开始支持，从API version 20开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat",
        children: "Intl.RelativeTimeFormat.constructor"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建相对时间格式化对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { intl } from '@kit.LocalizationKit';\n\n// 使用系统区域创建RelativeTimeFormat对象\nlet formatter: intl.RelativeTimeFormat = new intl.RelativeTimeFormat();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructordeprecated-7",
      children: "constructor(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(locale: string | Array<string>, options?: RelativeTimeFormatInputOptions)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 8开始支持，从API version 20开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat",
        children: "Intl.RelativeTimeFormat.constructor"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建相对时间格式化对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
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
            children: "locale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#relativetimeformatinputoptionsdeprecated",
              children: "RelativeTimeFormatInputOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建相对时间格式化对象时可配置的选项。"
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
        children: "import { intl } from '@kit.LocalizationKit';\n\n// 使用zh-CN区域ID创建RelativeTimeFormat对象，localeMatcher设置为lookup，numeric设置为always，style设置为long\nlet formatter: intl.RelativeTimeFormat = new intl.RelativeTimeFormat('zh-CN', {\n  localeMatcher: 'lookup',\n  numeric: 'always',\n  style: 'long'\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "formatdeprecated-1",
      children: "format(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "format(value: number, unit: string): string"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 8开始支持，从API version 20开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format",
        children: "Intl.RelativeTimeFormat.format"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对相对时间进行格式化。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Global.I18n"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相对时间格式化的数值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相对时间格式化的单位，  取值包括：\"year\", \"quarter\", \"month\", \"week\", \"day\", \"hour\", \"minute\", \"second\"。"
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "格式化后的相对时间。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { intl } from '@kit.LocalizationKit';\n\n// 使用zh-CN区域ID创建RelativeTimeFormat对象\nlet formatter: intl.RelativeTimeFormat = new intl.RelativeTimeFormat('zh-CN');\n// 计算zh-CN区域中数字3，单位quarter的本地化表示\nlet formatResult: string = formatter.format(3, 'quarter'); // formatResult = '3个季度后'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "formattopartsdeprecated",
      children: "formatToParts(deprecated)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["formatToParts(value: number, unit: string): Array", (0,jsx_runtime.jsxs)(_components.object, {
        children: [(0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 8开始支持，从API version 20开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts",
            children: "Intl.RelativeTimeFormat.formatToParts"
          }), "替代。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对相对时间进行格式化，获取格式化结果中各个部分的对象数组。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API"
            })
          }), "：从API version 12开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力"
            })
          }), "：SystemCapability.Global.I18n"]
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
                children: "value"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "相对时间格式化的数值。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "unit"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "相对时间格式化的单位，  取值包括：\"year\", \"quarter\", \"month\", \"week\", \"day\", \"hour\", \"minute\", \"second\"。"
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
                children: "Array<object>"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "格式化结果中各个部分的对象数组。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { intl } from '@kit.LocalizationKit';\n\n// 使用en区域ID创建RelativeTimeFormat对象，numeric设置为auto\nlet formatter: intl.RelativeTimeFormat = new intl.RelativeTimeFormat('en', { numeric: 'auto' });\nlet parts: Array<object> = formatter.formatToParts(10, 'seconds'); // parts = [ {type: 'literal', value: 'in'}, {type: 'integer', value: 10, unit: 'second'}, {type: 'literal', value: 'seconds'} ]\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "resolvedoptionsdeprecated-1",
          children: "resolvedOptions(deprecated)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "resolvedOptions(): RelativeTimeFormatResolvedOptions"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 8开始支持，从API version 20开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions",
            children: "Intl.RelativeTimeFormat.resolvedOptions"
          }), "替代。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取相对时间格式化对象的格式化配置项。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API"
            })
          }), "：从API version 12开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力"
            })
          }), "：SystemCapability.Global.I18n"]
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
                  href: "#relativetimeformatresolvedoptionsdeprecated",
                  children: "RelativeTimeFormatResolvedOptions"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "相对时间格式化对象的格式化配置项。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { intl } from '@kit.LocalizationKit';\n\n// 使用en-GB区域ID创建RelativeTimeFormat对象\nlet formatter: intl.RelativeTimeFormat = new intl.RelativeTimeFormat('en-GB', { style: 'short' });\n// 获取RelativeTimeFormat对象配置项\nlet options: intl.RelativeTimeFormatResolvedOptions = formatter.resolvedOptions();\nlet style: string = options.style; // style = 'short'\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "relativetimeformatinputoptionsdeprecated",
          children: "RelativeTimeFormatInputOptions(deprecated)"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 8开始支持，从API version 20开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#options",
            children: "Intl.RelativeTimeFormatOptions"
          }), "替代。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建相对时间格式化对象时可设置的配置项。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从API version 9开始，RelativeTimeFormatInputOptions中的属性改为可选。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API"
            })
          }), "：从API version 12开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力"
            })
          }), "：SystemCapability.Global.I18n"]
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
                children: "localeMatcher"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "区域匹配算法，取值包括：\"best fit\", \"lookup\"。  默认值：best fit。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "numeric"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["输出消息的格式，表示格式化结果中是否使用数字表示相对日期或时间。取值包括：\"always\", \"auto\"。  默认值：always。  不同取值的显示效果请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#%E9%99%84%E5%BD%95",
                  children: "附录表23"
                }), "。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "style"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["国际化消息的长度，取值包括：\"long\", \"short\", \"narrow\"。  默认值：long。  不同取值的显示效果请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#%E9%99%84%E5%BD%95",
                  children: "附录表24"
                }), "。"]
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "relativetimeformatresolvedoptionsdeprecated",
          children: "RelativeTimeFormatResolvedOptions(deprecated)"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 8开始支持，从API version 20开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions#return_value",
            children: "Intl.RelativeTimeFormatOptions"
          }), "替代。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "相对时间格式化对象的格式化配置项。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API"
            })
          }), "：从API version 12开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力"
            })
          }), "：SystemCapability.Global.I18n"]
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
                children: "locale"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示区域ID的字符串，包括语言以及可选的脚本和区域。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "numeric"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["输出消息的格式，表示格式化结果中是否使用数字表示相对日期或时间。取值包括：\"always\", \"auto\"。  不同取值的显示效果请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#%E9%99%84%E5%BD%95",
                  children: "附录表23"
                }), "。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "style"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["国际化消息的长度，取值包括：\"long\", \"short\", \"narrow\"。  不同取值的显示效果请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#%E9%99%84%E5%BD%95",
                  children: "附录表24"
                }), "。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "numberingSystem"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "使用的数字系统，取值包括：  \"adlm\", \"ahom\", \"arab\", \"arabext\", \"bali\", \"beng\", \"bhks\", \"brah\", \"cakm\", \"cham\", \"deva\", \"diak\", \"fullwide\", \"gong\", \"gonm\", \"gujr\", \"guru\", \"hanidec\", \"hmng\", \"hmnp\", \"java\", \"kali\", \"khmr\", \"knda\", \"lana\", \"lanatham\", \"laoo\", \"latn\", \"lepc\", \"limb\", \"mathbold\", \"mathdbl\", \"mathmono\", \"mathsanb\", \"mathsans\", \"mlym\", \"modi\", \"mong\", \"mroo\", \"mtei\", \"mymr\", \"mymrshan\", \"mymrtlng\", \"newa\", \"nkoo\", \"olck\", \"orya\", \"osma\", \"rohg\", \"saur\", \"segment\", \"shrd\", \"sind\", \"sinh\", \"sora\", \"sund\", \"takr\", \"talu\", \"tamldec\", \"telu\", \"thai\", \"tibt\", \"tirh\", \"vaii\", \"wara\", \"wcho\"。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "附录",
          children: "附录"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "时间日期格式化选项"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["下方表格以时间：2021年9月17日 13:04:00、2021年9月17日 00:25:00和区域ID: zh-CN、en为例，说明", (0,jsx_runtime.jsx)(_components.a, {
            href: "#datetimeoptionsdeprecated",
            children: "DateTimeOptions"
          }), "的取值和显示结果。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表1"
            })
          }), " 日期显示格式(dateStyle)"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "2021年9月17日 13:04:00，区域ID为zh-CN显示结果"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "2021年9月17日 13:04:00，区域ID为en显示结果"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "full"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "完整的日期显示，包含年份、月份、天数和星期。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "2021年9月17日星期五"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Friday, September 17, 2021"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "long"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "详细的日期显示，包含年份、月份和天数。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "2021年9月17日"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "September 17, 2021"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "short"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "简短的日期显示，包含年份、月份和天数。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "2021/9/17"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "9/17/21"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "medium"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "中等长度日期显示，包含年份、月份和天数。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "2021年9月17日"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Sep 17, 2021"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表2"
            })
          }), " 时间显示格式(timeStyle)"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "2021年9月17日 13:04:00，区域ID为zh-CN显示结果"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "2021年9月17日 13:04:00，区域ID为en显示结果"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "full"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "完整的时间显示，包含时区和时间，时间精确到秒。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "中国标准时间 13:04:00"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "13:04:00 China Standard Time"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "long"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "详细的时间显示，包含时区和时间，时区以GMT+时区偏移表示，时间精确到秒。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "GMT+8 13:04:00"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "13:04:00 GMT+8"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "short"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "简短时间显示，包含小时和分钟。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "13:04"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "13:04"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "medium"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "中等长度时间显示，包含小时、分钟和秒。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "13:04:00"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "13:04:00"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表3"
            })
          }), " 年份显示格式(year)"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "2021年9月17日 13:04:00，区域ID为zh-CN显示结果"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "2021年9月17日 13:04:00，区域ID为en显示结果"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "numeric"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "完整的年份显示。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "2021年"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "2021"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "2-digit"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用完整年份的后2位数字表示年份。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "21年"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "21"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表4"
            })
          }), " 星期显示格式(weekday)"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "2021年9月17日 13:04:00，区域ID为zh-CN显示结果"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "2021年9月17日 13:04:00，区域ID为en显示结果"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "long"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "详细的星期显示。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "星期五"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Friday"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "short"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "简短的星期显示。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "周五"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Fri"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "narrow"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "最简短的星期显示。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "五"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "F"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表5"
            })
          }), " 时制格式(hourCycle)"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "2021年9月17日 13:04:00，区域ID为zh-CN显示结果"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "2021年9月17日 00:25:00，区域ID为zh-CN显示结果"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "h11"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用0-11表示小时。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "下午1:04"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "上午0:25"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "h12"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用1-12表示小时。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "下午1:04"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "上午12:25"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "h23"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用0-23表示小时。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "13:04"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "00:25"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "h24"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用1-24表示小时。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "13:04"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "24:25"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(379337)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不设置dateStyle或timeStyle参数时，hourCycle不同取值的显示效果如上表格。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表6"
            })
          }), " 时制格式(hourCycle)"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "2021年9月17日 13:04:00，区域ID为zh-CN显示结果"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "2021年9月17日 00:25:00，区域ID为zh-CN显示结果"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "h11"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用1-24表示小时。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "下午13:04"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "上午24:25"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "h12"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用1-12表示小时。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "下午1:04"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "上午12:25"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "h23"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用0-11表示小时。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1:04"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "0:25"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "h24"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用0-23表示小时。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "13:04"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "0:25"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(75260)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置dateStyle或timeStyle参数时，hourCycle不同取值的显示效果如上表格。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表7"
            })
          }), " 月份格式(month)"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "2021年9月17日 13:04:00，区域ID为zh-CN显示结果"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "2021年9月17日 13:04:00，区域ID为en显示结果"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "numeric"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "以数字形式显示月份。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "9月"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "9"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "2-digit"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "以两位数字形式显示月份。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "09月"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "09"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "long"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "详细的月份显示。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "九月"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "September"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "short"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "简短的月份显示。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "9月"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Sep"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "narrow"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "最简短的月份显示。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "9"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "S"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表8"
            })
          }), " 时区名称的本地化表示(timeZoneName)"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "2021年9月17日 13:04:00，区域ID为zh-CN显示结果"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "2021年9月17日 13:04:00，区域ID为en显示结果"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "long"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "详细的时区名称显示。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "中国标准时间"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "China Standard Time"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "short"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "简短的时区名称显示。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "GMT+8"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "GMT+8"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表9"
            })
          }), " 纪元的显示格式(era)"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "2021年9月17日 13:04:00，区域ID为zh-CN显示效果"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "2021年9月17日 13:04:00，区域ID为en显示效果"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "long"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "详细的纪元显示。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "公元"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Anno Domini"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "short"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "简短的纪元显示。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "公元"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "AD"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "narrow"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "最简短的纪元显示。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "公元"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "A"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表10"
            })
          }), " 时段的显示格式(dayPeriod)"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "2021年9月17日 13:04:00，区域ID为zh-CN显示效果"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "2021年9月17日 13:04:00，区域ID为en显示效果"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "long"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "详细的时段表述。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "下午"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "in the afternoon"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "short"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "简短的时段表示。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "下午"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "in the afternoon"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "narrow"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "最简短的时段表示。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "下午"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "in the afternoon"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "数字格式化选项"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过数字格式化选项可以设置最小整数位数、最小小数位数、最大小数位数、最小有效位数、最大有效位数、是否分组显示、数字的表示方法、紧凑显示格式、舍入模式、舍入优先级、舍入增量以及数字的显示格式和数字系统。其中，数字的显示格式包括decimal(十进制)、percent(百分数)、currency(货币)和unit(单位)。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以123000.123为例，各选项取值和显示效果如下表所示："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表11"
            })
          }), " 最小整数位数(minimumIntegerDigits)"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "显示效果"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "6"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "123,000.123"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "7"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "0,123,000.123"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表12"
            })
          }), " 最小小数位数(minimumFractionDigits)"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "显示效果"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "3"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "123,000.123"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "4"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "123,000.1230"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表13"
            })
          }), " 最大小数位数(maximumFractionDigits)"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "显示效果"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "3"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "123,000.123"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "2"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "123,000.12"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表14"
            })
          }), " 最小有效位数(minimumSignificantDigits)"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "显示效果"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "9"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "123,000.123"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "123,000.1230"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表15"
            })
          }), " 最大有效位数(maximumSignificantDigits)"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "显示效果"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "9"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "123,000.123"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "8"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "123,000.12"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表16"
            })
          }), " 是否分组显示(useGrouping)"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "显示效果"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "true"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "123,000.123"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "false"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "123000.123"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表17"
            })
          }), " 数字的表示方法(notation)"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "显示效果"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "standard"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "123,000.123"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "scientific"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1.230001E5"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "engineering"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "123.000123E3"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "compact"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "123K"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表18"
            })
          }), " 紧凑显示格式(compactDisplay)"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "显示效果"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "short"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "123K"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "long"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "123 thousand"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "货币格式化选项"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以货币单位USD，数字大小-12300为例。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表19"
            })
          }), " 货币单位的符号(currencySign)"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "显示效果"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "standard"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-US$12,300.00"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "accounting"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "(US$12,300.00)"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表20"
            })
          }), " 货币的显示方式(currencyDisplay)"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "显示效果"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "symbol"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-US$12,300.00"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "narrowSymbol"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-$12,300.00"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "code"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-USD 12,300.00"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "name"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-12,300.00 US dollars"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "单位格式化选项"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以单位hectare，数字大小-12300为例。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表21"
            })
          }), " 单位的显示格式(unitDisplay)"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "显示效果"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "long"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-12,3000 hectares"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "short"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-12,300 ha"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "narrow"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-12,300ha"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表22"
            })
          }), " 单位的使用场景(unitUsage)"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "显示效果"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "未设置"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-12,300 ha"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "default"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-47.491 sq mi"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "area-land-agricult"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-30,393.962 ac"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "相对时间格式化选项"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以相对时间：一天前，区域ID: fr-FR和en-GB为例。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表23"
            })
          }), " 数值表示(numeric)"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "显示效果(fr-FR)"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "显示效果(en-GB)"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "always"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "使用数值表示相对时间。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "il y a 1 jour"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1 day ago"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "auto"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "根据区域ID自适应选择短语或数值表示相对时间。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "hier"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "yesterday"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表24"
            })
          }), " 相对时间样式(style)"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "取值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "显示效果(fr-FR)"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "显示效果(en-GB)"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "long"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "详细的相对时间显示。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "il y a 1 jour"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1 day ago"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "short"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "简短的相对时间显示。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "il y a 1 j"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1 day ago"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "narrow"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "最简短的相对时间显示。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-1 j"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1 day ago"
              })]
            })]
          })]
        }), "\n"]
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
379337(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
75260(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
288834(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
31767(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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