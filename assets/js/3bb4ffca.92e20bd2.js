"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["109775"], {
205188(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_calendar_kit_calendarmanager_overview_calendarmanager_overview_md_3bb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-calendar-kit-calendarmanager-overview-calendarmanager-overview-md-3bb.json
var site_docs_calendar_kit_calendarmanager_overview_calendarmanager_overview_md_3bb_namespaceObject = JSON.parse('{"id":"calendar-kit/calendarmanager-overview/calendarmanager-overview","title":"Calendar Kit简介","description":"Calendar Kit（日历服务）提供日历与日程管理能力，通常是指可以用于访问和操作日历数据的API（应用程序接口）。这些接口允许开发者将其他应用中的工作、生活中与时间相关的日程服务（如出行、餐饮、运动、娱乐等）与系统日历进行集成，从而实现日程管理、事件创建、查询等功能。","source":"@site/docs/calendar-kit/calendarmanager-overview/calendarmanager-overview.md","sourceDirName":"calendar-kit/calendarmanager-overview","slug":"/calendar-kit/calendarmanager-overview/","permalink":"/harmonyos-docs-site/calendar-kit/calendarmanager-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Calendar Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/calendarmanager-overview","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"支持的国家/地区","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-appendix/cloudfoundation-supported-regions/"},"next":{"title":"日历账户管理","permalink":"/harmonyos-docs-site/calendar-kit/calendarmanager-calendar-developer/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/calendar-kit/calendarmanager-overview/calendarmanager-overview.md


const frontMatter = {
	title: 'Calendar Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/calendarmanager-overview',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Calendar Kit简介';

const assets = {

};



const toc = [{
  "value": "能力范围",
  "id": "能力范围",
  "level": 2
}, {
  "value": "亮点/特征",
  "id": "亮点特征",
  "level": 2
}, {
  "value": "运作机制",
  "id": "运作机制",
  "level": 2
}, {
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
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
        id: "calendar-kit简介",
        children: "Calendar Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Calendar Kit（日历服务）提供日历与日程管理能力，通常是指可以用于访问和操作日历数据的API（应用程序接口）。这些接口允许开发者将其他应用中的工作、生活中与时间相关的日程服务（如出行、餐饮、运动、娱乐等）与系统日历进行集成，从而实现日程管理、事件创建、查询等功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "能力范围",
      children: "能力范围"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Calendar Kit包括账户管理和日程管理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建日历账户。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者可以创建属于本应用特有的日历账户，账户创建成功后会返回一个账户id，账户id是数据表自增主键，作为账户的唯一标识符。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取日历账户。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者可以获取指定的日历账户信息或者获取当前应用创建的所有日历账户信息。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "删除日历账户。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者可以删除指定的日历账户，日历账户删除后，和该日历账户所关联的全部日程都会被删除。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建日程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者获取到日历账号信息后，可以在获取到的日历账户下创建日程。创建日程时可以设置日程提醒时间，到达日程提醒时间时会有日程提醒通知弹出。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "日程创建成功后会返回一个日程id，日程id是数据表自增主键，作为日程的唯一标识符。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "删除日程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者可以指定日程id进行日程的删除，可以同时删除一条或者多条日程。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "更新日程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者可以根据日程id对日程信息进行更新，包括更新日程标题、日程地点、日程开始时间、日程结束时间、日程提醒时间等信息。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询日程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询日程支持三种方式：根据日程id查询日程、根据日程标题查询日程、根据日程的开始时间和结束时间查询日程。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "亮点特征",
      children: "亮点/特征"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "日程一键服务"
        })
      }), "：开发者通过永久性授权机制，在用户许可当前应用读写系统日历后，可将对应的日程服务以DeepLink的形式同时写入日历。根据开发者设置的提醒规则，在日程临近或到期时，日历应用、日历通知、日历卡片等区域同时会显示对应的“服务按钮”，用户可通过点击此按钮拉起跳转链接，一步直达服务落地页。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运作机制",
      children: "运作机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Calendar Kit为用户提供了一系列接口来获取日历账户，并使用特定的接口向日历账户中写入或读取日程信息。如果写入的日程带有提醒时间则系统会在时间到达时向用户发送提醒。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "目前Calendar Kit的相关能力及接口使用，仅支持在Stage模型下使用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用Calendar Kit的相关能力，需要获取读取或写入日历、日程的权限。具体指导可见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
            children: "声明权限"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "进行日历或日程的读取时，需要申请ohos.permission.READ_CALENDAR或ohos.permission.READ_WHOLE_CALENDAR权限。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "进行日历或日程的添加、删除或修改时，需要申请ohos.permission.WRITE_CALENDAR或ohos.permission.WRITE_WHOLE_CALENDAR权限。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "申请对应权限之后，支持的相关操作可见下表。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "申请的权限"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "支持的日历账户操作范围"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "支持的日程操作范围"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ohos.permission.READ_CALENDAR"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "- 读取系统默认日历账户  - 读取当前应用创建的日历账户"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "- 读取系统默认日历账户下当前应用创建的日程  - 读取当前应用创建的日历账户下当前应用创建的日程"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ohos.permission.WRITE_CALENDAR"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "- 添加、删除或修改当前应用创建的日历账户"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "- 添加、删除或修改系统默认日历账户下当前应用创建的日程  - 添加、删除或修改当前应用创建的日历账户下当前应用创建的日程"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ohos.permission.READ_WHOLE_CALENDAR"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "- 读取所有日历账户"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "- 读取所有应用创建的日程"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ohos.permission.WRITE_WHOLE_CALENDAR"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "- 添加、删除或修改所有日历账户"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "- 添加、删除或修改所有应用创建的日程"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit支持模拟器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模拟器与真机存在通用差异，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification",
        children: "模拟器与真机的差异"
      }), "。"]
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