"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["174455"], {
663915(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_localization_kit_i_18_n_i_18_n_time_zone_dst_i_18_n_time_zone_i_18_n_time_zone_md_8df_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-localization-kit-i-18-n-i-18-n-time-zone-dst-i-18-n-time-zone-i-18-n-time-zone-md-8df.json
var site_docs_localization_kit_i_18_n_i_18_n_time_zone_dst_i_18_n_time_zone_i_18_n_time_zone_md_8df_namespaceObject = JSON.parse('{"id":"localization-kit/i18n/i18n-time-zone-dst/i18n-time-zone/i18n-time-zone","title":"时区","description":"使用场景","source":"@site/docs/localization-kit/i18n/i18n-time-zone-dst/i18n-time-zone/i18n-time-zone.md","sourceDirName":"localization-kit/i18n/i18n-time-zone-dst/i18n-time-zone","slug":"/localization-kit/i18n/i18n-time-zone-dst/i18n-time-zone/","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-time-zone-dst/i18n-time-zone/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"时区","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-time-zone","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"设置日历和历法","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-calendar/"},"next":{"title":"夏令时跳变","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-time-zone-dst/i18n-dst-transition/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/localization-kit/i18n/i18n-time-zone-dst/i18n-time-zone/i18n-time-zone.md


const frontMatter = {
	title: '时区',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-time-zone',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '时区';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
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
  "value": "时区接口基本功能",
  "id": "时区接口基本功能",
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
        id: "时区",
        children: "时区"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "全球各国家和地区的经度不同，地方时间也有所不同，因此划分了不同的时区。例如，英国采用0时区，中国采用东8时区，中国时间要比英国快8小时，中国北京中午12:00，对应英国伦敦是凌晨4:00。时区模块可用于获取时区列表，应用可基于该列表实现业务逻辑，如双时钟应用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，时区模块还可用于获取时区跳变时间点和偏移量等，时区的跳变逻辑参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/localization-kit/i18n/i18n-time-zone-dst/i18n-dst-transition",
        children: "夏令时跳变"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["时区模块关键接口如下表所示，具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-arkts/js-apis-i18n/js-apis-i18n",
        children: "国际化-I18n"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "getTimeZone(zoneID?: string): TimeZone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取时区ID对应的时区对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getID(): string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取时区对象的ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getDisplayName(locale?: string, isDST?: boolean): string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取时区对象名称在指定语言下的翻译。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getRawOffset(): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取时区的固定偏移量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getOffset(date?: number): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取某一时刻时区对象所表示时区的偏移量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getAvailableIDs(): Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取系统支持的时区ID列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getAvailableZoneCityIDs(): Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取系统支持的时区城市ID列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getCityDisplayName(cityID: string, locale: string): string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取时区城市名称在指定语言下的翻译。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getTimezoneFromCity(cityID: string): TimeZone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据城市ID创建对应的时区对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getTimezonesByLocation(longitude: number, latitude: number): Array<TimeZone>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据地理坐标获取所在时区对象的数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getZoneRules(): ZoneRules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取时区跳变规则。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nextTransition(date?: number): ZoneOffsetTransition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定时间的下一个时区跳变对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getMilliseconds(): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取时区跳变点的时间戳。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getOffsetAfter(): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取时区跳变后的偏移量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getOffsetBefore(): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取时区跳变前的偏移量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "时区接口基本功能",
      children: "时区接口基本功能"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { i18n } from '@kit.LocalizationKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用场景。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "时区接口基本功能：包括获取特定时区、计算固定和实际时区偏移量、遍历时区列表。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取巴西时区\nlet timezone: i18n.TimeZone = i18n.getTimeZone('America/Sao_Paulo'); // 传入特定时区，创建时区对象\nlet timezoneId = timezone.getID(); // timezoneId = 'America/Sao_Paulo'\n\n// 获取城市ID对应的时区对象\nlet aucklandTimezone: i18n.TimeZone = i18n.TimeZone.getTimezoneFromCity('Auckland');\ntimezoneId = aucklandTimezone.getID(); // timezoneId = 'Pacific/Auckland'\n\n// 获取时区的本地化名称\nlet timeZoneName = timezone.getDisplayName('zh-Hans', true); // timeZoneName = '巴西利亚标准时间'\n\n// 本地化城市名称\nlet cityDisplayName = i18n.TimeZone.getCityDisplayName('Auckland', 'zh-Hans'); // cityDisplayName = '奥克兰 (新西兰)'\n\n// 时区的固定偏移量\nlet rawOffset = timezone.getRawOffset(); // rawOffset = -10800000\n\n// 时区的实际偏移量（固定偏移量+夏令时）\nlet offset = timezone.getOffset(1234567890); // offset = -10800000\n\n// 系统支持的时区ID列表\nlet availableIDs = i18n.TimeZone.getAvailableIDs(); // availableIDs = ['America/Adak', 'Asia/Hovd', ...]\n\n// 系统支持的时区城市ID列表\nlet cityIDs = i18n.TimeZone.getAvailableZoneCityIDs(); // cityIDs = ['Auckland', 'Magadan', ...]\n\n// 遍历时区城市ID列表\nlet timezoneList: object[] = []; // 呈现给用户的时区列表\n\nclass Item {\n  public cityDisplayName = '';\n  public timezoneId = '';\n  public offset = '';\n  public cityId = '';\n};\n\nfor (let i = 0; i < cityIDs.length; i++) {\n  let cityId = cityIDs[i];\n  let timezone: i18n.TimeZone = i18n.TimeZone.getTimezoneFromCity(cityId); // 城市ID对应的时区对象\n  let cityDisplayName = i18n.TimeZone.getCityDisplayName(cityId, 'zh-CN'); // 本地化城市名称\n  let timestamp = (new Date()).getTime();\n  let item: Item = {\n    cityDisplayName: cityDisplayName,\n    timezoneId: timezone.getID(),\n    offset: 'GMT' + (timezone.getOffset(timestamp) / 3600 * 1000),\n    cityId: cityId\n  };\n  timezoneList.push(item);\n}\n\n// 指定地理坐标所在的时区对象数组\nlet timezoneArray: i18n.TimeZone[] = i18n.TimeZone.getTimezonesByLocation(-43.1, -22.5);\n\n// 获取指定时间的下一个时区跳变点\nlet tijuanaTzId = 'America/Tijuana';\nlet tijuanaTimeZone: i18n.TimeZone = i18n.getTimeZone(tijuanaTzId); // 获取蒂华纳时区对象\nlet zoneRules: i18n.ZoneRules = tijuanaTimeZone.getZoneRules(); // 获取蒂华纳时区的时区跳变规则\nlet someTime = new Date(2025, 4, 13);\nlet zoneOffsetTrans: i18n.ZoneOffsetTransition = zoneRules.nextTransition(someTime.getTime());\nzoneOffsetTrans.getMilliseconds(); // 跳变点的时间戳: 1762074000000\nzoneOffsetTrans.getOffsetAfter(); // 跳变后的偏移量: -28800000\nzoneOffsetTrans.getOffsetBefore(); // 跳变前的偏移量: -25200000\n// 将跳变点时间格式化\nlet dateTimeFormat: Intl.DateTimeFormat = new Intl.DateTimeFormat('en-US', {\n  timeZone: tijuanaTzId,\n  dateStyle: 'long',\n  timeStyle: 'long',\n  hour12: false\n});\nlet dateFormat =\n  dateTimeFormat.format(new Date(zoneOffsetTrans.getMilliseconds())); // November 2, 2025, 1:00:00 PST\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "双时钟应用：首先选择时区列表中的时区，添加到应用偏好时区列表。然后遍历应用偏好时区列表，获取各时区的时间。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let pauloTimezone: i18n.TimeZone = i18n.getTimeZone('America/Sao_Paulo');\nlet defaultTimezone: i18n.TimeZone = i18n.getTimeZone();\nlet appPreferredTimeZoneList: i18n.TimeZone[] = []; // 应用偏好时区列表\nappPreferredTimeZoneList.push(pauloTimezone);\nappPreferredTimeZoneList.push(defaultTimezone);\n\nlet locale: Intl.Locale = i18n.System.getSystemLocaleInstance();\nfor (let i = 0; i < appPreferredTimeZoneList.length; i++) {\n  let timezone = appPreferredTimeZoneList[i].getID();\n  let calendar: i18n.Calendar = i18n.getCalendar(locale.toString());\n  calendar.setTimeZone(timezone); // 设置日历对象的时区\n  // 获取年月日时分秒\n  let year = calendar.get('year');\n  let month = calendar.get('month');\n  let day = calendar.get('date');\n  let hour = calendar.get('hour');\n  let minute = calendar.get('minute');\n  let second = calendar.get('second');\n}\n"
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