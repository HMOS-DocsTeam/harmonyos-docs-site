"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["158070"], {
64660(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_internationalization_arkts_internationalization_md_5f9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-internationalization-arkts-internationalization-md-5f9.json
var site_docs_arkui_arkts_ui_development_arkts_internationalization_arkts_internationalization_md_5f9_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-internationalization/arkts-internationalization","title":"UI国际化","description":"本文介绍如何实现应用程序UI界面的国际化，包含资源配置和镜像布局，关于应用适配国际化的详细参考，请参考Localization Kit（本地化开发服务）。","source":"@site/docs/arkui/arkts-ui-development/arkts-internationalization/arkts-internationalization.md","sourceDirName":"arkui/arkts-ui-development/arkts-internationalization","slug":"/arkui/arkts-ui-development/arkts-internationalization/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-internationalization/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"title":"UI国际化","sidebar_position":18,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-internationalization","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"属性更新器 (AttributeUpdater)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-extension-attributeupdater/"},"next":{"title":"无障碍开发指导","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-support-accessibility-friendliness/arkts-universal-attributes-accessibility/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-internationalization/arkts-internationalization.md


const frontMatter = {
	title: 'UI国际化',
	sidebar_position: 18,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-internationalization',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'UI国际化';

const assets = {

};



const toc = [{
  "value": "利用资源限定词配置国际化资源",
  "id": "利用资源限定词配置国际化资源",
  "level": 2
}, {
  "value": "使用镜像能力",
  "id": "使用镜像能力",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 3
}, {
  "value": "使用约束",
  "id": "使用约束",
  "level": 3
}, {
  "value": "界面布局和边框设置",
  "id": "界面布局和边框设置",
  "level": 3
}, {
  "value": "自定义绘制Canvas组件",
  "id": "自定义绘制canvas组件",
  "level": 3
}, {
  "value": "镜像状态字符对齐",
  "id": "镜像状态字符对齐",
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
        id: "ui国际化",
        children: "UI国际化"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文介绍如何实现应用程序UI界面的国际化，包含资源配置和镜像布局，关于应用适配国际化的详细参考，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/localization-kit/i18n-l10n",
        children: "Localization Kit（本地化开发服务）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "利用资源限定词配置国际化资源",
      children: "利用资源限定词配置国际化资源"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在开发阶段，通过DevEco Studio，可以为应用在对应语言和地区的资源限定词目录下配置不同的资源，来实现UI国际化。详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/resource-categories-and-access",
        children: "资源分类与访问"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用镜像能力",
      children: "使用镜像能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不同国家对文本对齐方式和读取顺序有所不同，例如英语采用从左到右的顺序，阿拉伯语和希腊语则采用从右到左（RTL）的顺序。为满足不同用户的阅读习惯，ArkUI提供了镜像能力。在特定情况下将显示内容在X轴上进行镜像反转，由从左到右显示变成从右到左显示。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "镜像前"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "镜像后"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当组件满足以下任意条件时，镜像能力生效："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "组件的direction属性设置为Direction.Rtl。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "组件的direction属性设置为Direction.Auto，且当前的系统语言（如维吾尔语）的阅读习惯是从右向左。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LTR：顺序为从左到右。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RTL：顺序为从右到左。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用约束",
      children: "使用约束"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI 如下能力已默认适配镜像："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类别"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "基础组件"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper",
              children: "Swiper"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs",
              children: "Tabs"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent",
              children: "TabContent"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
              children: "List"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-progress/ts-basic-components-progress",
              children: "Progress"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-calendarpicker/ts-basic-components-calendarpicker",
              children: "CalendarPicker"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-calendarpicker-dialog/ts-methods-calendarpicker-dialog",
              children: "CalendarPickerDialog"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-textpicker/ts-basic-components-textpicker",
              children: "TextPicker"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-textpicker-dialog/ts-methods-textpicker-dialog",
              children: "TextPickerDialog"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-datepicker/ts-basic-components-datepicker",
              children: "DatePicker"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-datepicker-dialog/ts-methods-datepicker-dialog",
              children: "DatePickerDialog"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid",
              children: "Grid"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow",
              children: "WaterFlow"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll",
              children: "Scroll"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-basic-components-scrollbar/ts-basic-components-scrollbar",
              children: "ScrollBar"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-alphabet-indexer/ts-container-alphabet-indexer",
              children: "AlphabetIndexer"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/arkui-declarative-comp-dep/ts-basic-components-stepper/ts-basic-components-stepper",
              children: "Stepper"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-sidebarcontainer/ts-container-sidebarcontainer",
              children: "SideBarContainer"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
              children: "Navigation"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination",
              children: "NavDestination"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-rating/ts-basic-components-rating",
              children: "Rating"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-slider/ts-basic-components-slider",
              children: "Slider"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-toggle/ts-basic-components-toggle",
              children: "Toggle"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-badge/ts-container-badge",
              children: "Badge"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-counter/ts-container-counter",
              children: "Counter"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-chip/ohos-arkui-advanced-chip",
              children: "Chip"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-segmentbutton/ohos-arkui-advanced-segmentbutton",
              children: "SegmentButton"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#bindmenu",
              children: "bindMenu"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#bindcontextmenu8",
              children: "bindContextMenu"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput",
              children: "TextInput"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea",
              children: "TextArea"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search",
              children: "Search"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-stack/ts-container-stack",
              children: "Stack"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridrow/ts-container-gridrow",
              children: "GridRow"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
              children: "Text"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-select/ts-basic-components-select",
              children: "Select"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-marquee/ts-basic-components-marquee",
              children: "Marquee"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-row/ts-container-row",
              children: "Row"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-column/ts-container-column",
              children: "Column"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-flex/ts-container-flex",
              children: "Flex"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer",
              children: "RelativeContainer"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitemgroup/ts-container-listitemgroup",
              children: "ListItemGroup"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "高级组件"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-selectionmenu/ohos-arkui-advanced-selectionmenu",
              children: "SelectionMenu"
            }), " 、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-treeview/ohos-arkui-advanced-treeview",
              children: "TreeView"
            }), " 、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-filter/ohos-arkui-advanced-filter",
              children: "Filter"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-splitlayout/ohos-arkui-advanced-splitlayout",
              children: "SplitLayout"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-toolbar/ohos-arkui-advanced-toolbar",
              children: "ToolBar"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-composelistitem/ohos-arkui-advanced-composelistitem",
              children: "ComposeListItem"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-editabletitlebar/ohos-arkui-advanced-editabletitlebar",
              children: "EditableTitleBar"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-progressbutton/ohos-arkui-advanced-progressbutton",
              children: "ProgressButton"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-subheader/ohos-arkui-advanced-subheader",
              children: "SubHeader"
            }), " 、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-popup/ohos-arkui-advanced-popup",
              children: "Popup"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ohos-arkui-advanced-dialog/ohos-arkui-advanced-dialog",
              children: "Dialog"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-swiperefresher/ohos-arkui-advanced-swiperefresher",
              children: "SwipeRefresher"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "通用属性"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location#position",
              children: "position"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location#markanchor",
              children: "markAnchor"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location#offset",
              children: "offset"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location#alignrules12",
              children: "alignRules"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-border/ts-universal-attributes-border#borderwidth",
              children: "borderWidth"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-border/ts-universal-attributes-border#bordercolor",
              children: "borderColor"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-border/ts-universal-attributes-border#borderradius",
              children: "borderRadius"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#padding",
              children: "padding"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#margin",
              children: "margin"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "接口"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-alert-dialog-box/ts-methods-alert-dialog-box",
              children: "AlertDialog"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-action-sheet/ts-methods-action-sheet",
              children: "ActionSheet"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-promptaction/js-apis-promptaction#promptactionshowdialogdeprecated",
              children: "promptAction.showDialog"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-promptaction/js-apis-promptaction#promptactionshowtoastdeprecated",
              children: "promptAction.showToast"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "但如下三种场景还需要进行适配："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "界面布局、边框设置：关于方向类的通用属性，如果需要支持镜像能力，使用泛化的方向指示词 start/end入参类型替换 left/right、x/y等绝对方向指示词的入参类型，来表示自适应镜像能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Canvas组件只有限支持文本绘制的镜像能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "XComponent组件不支持组件镜像能力。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "界面布局和边框设置",
      children: "界面布局和边框设置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前，以下三类通用属性需要使用新入参类型适配："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["位置设置：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location#position",
        children: "position"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location#markanchor",
        children: "markAnchor"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location#offset",
        children: "offset"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location#alignrules12",
        children: "alignRules"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["边框设置：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-border/ts-universal-attributes-border#borderwidth",
        children: "borderWidth"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-border/ts-universal-attributes-border#bordercolor",
        children: "borderColor"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-border/ts-universal-attributes-border#borderradius",
        children: "borderRadius"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["尺寸设置：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#padding",
        children: "padding"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#margin",
        children: "margin"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以position为例，需要把绝对方向x、y描述改为新入参类型start、end的描述，其他属性类似。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { LengthMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct InterfaceLayoutBorderSettings {\n  build() {\n    Stack({ alignContent: Alignment.TopStart }) {\n      Stack({ alignContent: Alignment.TopStart }) {\n        Column()\n          .width(100)\n          .height(100)\n          .backgroundColor(Color.Red)\n          .position({\n            start: LengthMetrics.px(200),\n            top: LengthMetrics.px(200)\n          }) // 需要同时支持LTR和RTL时使用API12新增的LocalizedEdges入参类型,\n        // 仅支持LTR时等同于.position({ x: '200px', y: '200px' })\n\n      }.backgroundColor(Color.Blue)\n    }.width('100%').height('100%').border({ color: '#880606' })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自定义绘制canvas组件",
      children: "自定义绘制Canvas组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Canvas组件的绘制内容和坐标均不支持镜像能力。已绘制到Canvas组件上的内容并不会跟随系统语言的切换自动做镜像效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d",
        children: "CanvasRenderingContext2D"
      }), "的文本绘制支持镜像能力，在使用时需要与Canvas组件的通用属性direction（组件显示方向）和CanvasRenderingContext2D的属性direction（文本绘制方向）协同使用。具体规格如下："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "优先级：CanvasRenderingContext2D的direction属性 > Canvas组件通用属性direction > 系统语言决定的水平显示方向。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Canvas组件本身不会自动跟随系统语言切换镜像效果，需要应用监听到系统语言切换后自行重新绘制。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CanvasRenderingContext2D绘制文本时，只有符号等文本会对绘制方向生效，英文字母和数字不响应绘制方向的变化。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError, commonEventManager } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct CustomizeCanvasComponentDrawing {\n  @State message: string = 'Hello world';\n  private settings: RenderingContextSettings = new RenderingContextSettings(true)\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings)\n\n  aboutToAppear(): void {\n    // 监听系统语言切换\n    let subscriber: commonEventManager.CommonEventSubscriber | null = null;\n    let subscribeInfo2: commonEventManager.CommonEventSubscribeInfo = {\n      events: ['usual.event.LOCALE_CHANGED'],\n    }\n    commonEventManager.createSubscriber(subscribeInfo2,\n      (err: BusinessError, data: commonEventManager.CommonEventSubscriber) => {\n        if (err) {\n          console.error(`Failed to create subscriber. Code is ${err.code}, message is ${err.message}`);\n          return;\n        }\n\n        subscriber = data;\n        if (subscriber !== null) {\n          commonEventManager.subscribe(subscriber, (err: BusinessError, data: commonEventManager.CommonEventData) => {\n            if (err) {\n              return;\n            }\n            // 监听到语言切换后，需要重新绘制Canvas内容\n            this.drawText();\n          })\n        } else {\n          console.error(`MayTest Need create subscriber`);\n        }\n      })\n  }\n\n  drawText(): void {\n    console.error('MayTest drawText')\n    this.context.reset()\n    this.context.direction = 'inherit'\n    this.context.font = '30px sans-serif'\n    this.context.fillText('ab%123&*@', 50, 50)\n  }\n\n  build() {\n    Row() {\n      Canvas(this.context)\n        .direction(Direction.Auto)\n        .width('100%')\n        .height('100%')\n        .onReady(() =>{\n          this.drawText()\n        })\n    }\n    .height('100%')\n  }\n\n}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "镜像前"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "镜像后"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "镜像状态字符对齐",
      children: "镜像状态字符对齐"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#direction",
        children: "Direction"
      }), "是指文字的方向，即文本在屏幕上呈现时字符的顺序。在从左到右（LTR）文本中，显示顺序是从左向右；在从右到左（RTL）文本中，显示顺序是从右到左。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#textalign",
        children: "TextAlign"
      }), "是将文本作为一个整体，在布局上的影响，具体位置会受Direction影响，以TextAlign为start为例，当Direction为LTR时，布局位置靠左；当Direction为RTL时，布局位置靠右。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在LTR与RTL文本混排时，如一个英文句子中包含阿拉伯语的单词或短语，显示顺序将变得复杂。下图为数字和维吾尔语混合时对应的字符逻辑顺序。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(888709)/* ["default"] */.A) + "",
        width: "1174",
        height: "75"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此时，文本渲染引擎会采用名为“双向算法”或“Unicode双向算法”（Unicode Bidirectional Algorithm）的方法来确定字符的显示顺序。下图展示了LTR与RTL文本混合时对应的字符显示顺序，确定字符方向的基本原则如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "强字符的方向性：强字符具有明确的方向性，例如，中文为LTR，阿拉伯语为RTL，这类字符的方向性会影响其周围的中性字符。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "弱字符的方向性：弱字符不具备明确的方向性，这些字符不会影响其周围中性字符的方向。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "中性字符的方向性：中性字符无固定方向性，它们会继承其最近的强字符的方向；若附近无强字符，则采用全局方向。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(590481)/* ["default"] */.A) + "",
        width: "1230",
        height: "274"
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
888709(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
590481(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798384-e02fba0ad7d940405eda3256ac18f678.png");

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