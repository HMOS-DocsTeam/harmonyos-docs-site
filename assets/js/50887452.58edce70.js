"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["730425"], {
981092(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_localization_kit_i_18_n_i_18_n_calendar_i_18_n_calendar_md_508_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-localization-kit-i-18-n-i-18-n-calendar-i-18-n-calendar-md-508.json
var site_docs_localization_kit_i_18_n_i_18_n_calendar_i_18_n_calendar_md_508_namespaceObject = JSON.parse('{"id":"localization-kit/i18n/i18n-calendar/i18n-calendar","title":"设置日历和历法","description":"功能介绍","source":"@site/docs/localization-kit/i18n/i18n-calendar/i18n-calendar.md","sourceDirName":"localization-kit/i18n/i18n-calendar","slug":"/localization-kit/i18n/i18n-calendar/","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-calendar/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"设置日历和历法","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-calendar","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"电话号码格式化","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-phone-numbers/"},"next":{"title":"时区","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-time-zone-dst/i18n-time-zone/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/localization-kit/i18n/i18n-calendar/i18n-calendar.md


const frontMatter = {
	title: '设置日历和历法',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-calendar',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '设置日历和历法';

const assets = {

};



const toc = [{
  "value": "功能介绍",
  "id": "功能介绍",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "设置日历和历法",
        children: "设置日历和历法"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不同地区的用户使用不同的历法，大多数地区使用公历，也有些地区的用户使用其他历法，例如农历、伊斯兰历或希伯来历。日历上的时间和日期根据历法计算得到，并会随时区和夏令时的变化而调整。因此，用户需要设置符合本地习惯的历法。国际化提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-arkts/js-apis-i18n/js-apis-i18n#calendar8",
        children: "Calendar"
      }), "类，可以设置历法、日期、时区、一周的起始日期和一年中第一周的最小天数。此外，还可以判断具体某一天在日历中是否为周末以及计算相差天数。在应用开发过程中，可以根据业务需求选择使用不同功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以查看公历日期对应的农历日期为例，说明如何使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-arkts/js-apis-i18n/js-apis-i18n#calendar8",
        children: "Calendar"
      }), "类接口。"]
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
          children: "公历相关用法。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let calendar: i18n.Calendar = i18n.getCalendar('zh-Hans', 'gregory');\n// 设置日历对象的时间日期为2022.06.13 08:00:00\ncalendar.setTime(new Date(2022, 5, 13, 8, 0, 0));\ncalendar.setTime(10540800000);\n\n// 设置日历对象的时间日期为2022.06.13 08:00:00\ncalendar.set(2022, 5, 13, 8, 0, 0);\n\n// 设置日历对象的时区\ncalendar.setTimeZone('Asia/Shanghai');\n\n// 获取日历对象的时区\nlet timezone = calendar.getTimeZone(); // timezone = 'Asia/Shanghai'\n\n// 获取日历对象的一周起始日\nlet firstDayOfWeek = calendar.getFirstDayOfWeek(); // firstDayOfWeek = 1\n\n// 设置每一周的起始日\ncalendar.setFirstDayOfWeek(1);\n\n// 获取一年中第一周的最小天数\nlet minimalDaysInFirstWeek = calendar.getMinimalDaysInFirstWeek(); // minimalDaysInFirstWeek = 1\n\n// 设置一年中第一周的最小天数\ncalendar.setMinimalDaysInFirstWeek(3);\n\n// 获取日历对象中与field相关联的值\nlet year = calendar.get('year'); // year = 2022\n\n// 获取日历对象本地化名称\nlet calendarName = calendar.getDisplayName('zh-Hans'); // calendarName = '公历'\n\n// 判断指定的日期在日历中是否为周末\nlet isWeekend = calendar.isWeekend(new Date(2023, 9, 15)); // isWeekend = true\n\n// 在日历的给定字段进行加减操作\ncalendar.set(2023, 10, 15);\ncalendar.add('date', 2);\nlet day = calendar.get('date'); // day = 17\n\n// 比较日历和指定日期相差的天数\nlet daysDifference = calendar.compareDays(new Date(2023, 10, 15)); // daysDifference = -3\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取公历日期对应的农历日期。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let calendarChinese: i18n.Calendar = i18n.getCalendar('zh-Hans', 'chinese');\n// 将公历日期设置到calendar对象，时间日期为2023.07.25 08:00:00\ncalendarChinese.setTime(new Date(2023, 6, 25, 8, 0, 0));\n\n// 获取农历年月日\nlet yearChinese = calendarChinese.get('year'); // year = 40，指干支纪年40，范围1-60\nlet monthChinese = calendarChinese.get('month'); // month = 5，指6月\nlet dayChinese = calendarChinese.get('date'); // day = 8，指8日\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 支持的历法"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "中文名称"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buddhist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "佛历"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "chinese"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "农历"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "coptic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "科普特历"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ethiopic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "埃塞俄比亚历"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hebrew"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "希伯来历"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "gregory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "公历"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "indian"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "印度历"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "islamic_civil"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "伊斯兰希吉来历"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "islamic_tbla"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "伊斯兰天文历"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "islamic_umalqura"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "伊斯兰历（乌姆库拉）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "japanese"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日本历"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "persian"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "波斯历"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/harmonyos_samples/international",
          children: "国际化-日历"
        })
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