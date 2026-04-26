"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["126655"], {
220497(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_service_collaboration_kit_guide_servicecollaboration_richeditor_title_servicecollaboration_richeditor_title_md_53c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-service-collaboration-kit-guide-servicecollaboration-richeditor-title-servicecollaboration-richeditor-title-md-53c.json
var site_docs_system_network_service_collaboration_kit_guide_servicecollaboration_richeditor_title_servicecollaboration_richeditor_title_md_53c_namespaceObject = JSON.parse('{"id":"system-network/service-collaboration-kit-guide/servicecollaboration-richeditor-title/servicecollaboration-richeditor-title","title":"跨设备互通（RichEditor控件）","description":"富文本控件RichEditor已集成跨设备互通能力。在平板或2in1设备上，用户可通过其右键菜单调用手机的相机、扫描及图库（访问图片）功能。","source":"@site/docs/system-network/service-collaboration-kit-guide/servicecollaboration-richeditor-title/servicecollaboration-richeditor-title.md","sourceDirName":"system-network/service-collaboration-kit-guide/servicecollaboration-richeditor-title","slug":"/system-network/service-collaboration-kit-guide/servicecollaboration-richeditor-title/","permalink":"/harmonyos-docs-site/system-network/service-collaboration-kit-guide/servicecollaboration-richeditor-title/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"跨设备互通（RichEditor控件）","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/servicecollaboration-richeditor-title","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"跨设备互通NDK开发指导","permalink":"/harmonyos-docs-site/system-network/service-collaboration-kit-guide/servicecollaboration-servicendk/servicecollaboration-servicendk-guide/"},"next":{"title":"接入跨设备互通控件后，设备选择列表没有周围设备","permalink":"/harmonyos-docs-site/system-network/service-collaboration-kit-guide/servicecollaboration-faq/servicecollaboration-faq-1/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/service-collaboration-kit-guide/servicecollaboration-richeditor-title/servicecollaboration-richeditor-title.md


const frontMatter = {
	title: '跨设备互通（RichEditor控件）',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/servicecollaboration-richeditor-title',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '跨设备互通（RichEditor控件）';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "关闭富文本跨设备互通能力",
  "id": "关闭富文本跨设备互通能力",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "跨设备互通richeditor控件",
        children: "跨设备互通（RichEditor控件）"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["富文本控件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor",
        children: "RichEditor"
      }), "已集成跨设备互通能力。在平板或2in1设备上，用户可通过其右键菜单调用手机的相机、扫描及图库（访问图片）功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "您通过此能力实现跨设备交互，可以使用其他设备的相机、扫描和图库功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需同时满足以下条件，才能使用该功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "设备限制"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "本端设备：HarmonyOS版本为HarmonyOS NEXT及以上的平板或2in1设备。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "远端设备：HarmonyOS版本为HarmonyOS NEXT及以上、具有相机能力的手机或平板设备。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "使用限制"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "双端设备需要登录同一华为账号。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "跨设备互通API支持根据特定调用策略调用设备。调用策略：2in1设备可以调用平板和手机，平板可以调用手机，同类型设备不可调用。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "双端设备需要打开WLAN和蓝牙开关。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "条件允许时，建议双端设备接入同一个局域网，可提升唤醒相机的速度。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["添加", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor",
        children: "RichEditor"
      }), "富文本组件，即可在富文本组件中右键中选择其他设备进行导入，通过onWillChange属性对回传的照片进行处理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  controller: RichEditorController = new RichEditorController()\n  options: RichEditorOptions = { controller: this.controller }\n\n  build() {\n    Column() {\n      Column() {\n        RichEditor(this.options)\n          .onWillChange((value: RichEditorChangeValue) => {\n            if (value?.replacedImageSpans[0]?.imageStyle?.objectFit != 0) {\n              return true;\n            }\n            for(let item of value.replacedImageSpans) {\n              this.controller.addImageSpan(item.valuePixelMap, {\n                imageStyle: {\n                  size: [\"500px\", \"500px\"],\n                  layoutStyle: {\n                    borderRadius: '10px',\n                  }\n                }\n              })\n            }\n            return false;\n          })\n          .borderWidth(1)\n          .borderColor(Color.Green)\n          .width(\"100%\")\n          .height(\"100%\")\n      }\n      .borderWidth(1)\n      .borderColor(Color.Red)\n      .width(\"100%\")\n      .height(\"70%\")\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "富文本组件使用流程如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.在富文本区域右键。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(287033)/* ["default"] */.A) + "",
        width: "206",
        height: "547"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.选择想要使用的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(662469)/* ["default"] */.A) + "",
        width: "206",
        height: "550"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.等待对端设备拍照回传。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(291901)/* ["default"] */.A) + "",
        width: "273",
        height: "88"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4.图片回传后，在光标后面已嵌入一张图片。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(945476)/* ["default"] */.A) + "",
        width: "256",
        height: "245"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "关闭富文本跨设备互通能力",
      children: "关闭富文本跨设备互通能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果需要关闭富文本右键菜单跨设备互通能力，可通过editMenuOptions属性自定义菜单内容去除跨设备互通菜单项，示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  controller: RichEditorController = new RichEditorController()\n  options: RichEditorOptions = { controller: this.controller }\n\n  build() {\n    Column() {\n      Column() {\n        RichEditor(this.options)\n          .editMenuOptions({\n            onCreateMenu: (menuItems: Array<TextMenuItem>) => {\n              if (menuItems.length === 0) {\n                return menuItems;\n              }\n              let newMenuItems: TextMenuItem[] = [];\n              menuItems.forEach((item, index) => {\n                if(!item.id.equals(TextMenuItemId.COLLABORATION_SERVICE)) {\n                  newMenuItems.push(item);\n                }\n              })\n              return newMenuItems;\n            },\n            onMenuItemClick: (menuItem: TextMenuItem, textRange: TextRange) => {\n              return false;\n            }\n          })\n          .borderWidth(1)\n          .borderColor(Color.Green)\n          .width(\"100%\")\n          .height(\"100%\")\n      }\n      .borderWidth(1)\n      .borderColor(Color.Red)\n      .width(\"100%\")\n      .height(\"70%\")\n    }\n  }\n}\n"
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
945476(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478441-03c143afcdac66b222b77c94107dfdf8.png");

},
287033(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798790-3a48d96404263f4d7484db18fabaa4c5.png");

},
291901(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958440-68740812e476cb10d641c29f9e806a0c.png");

},
662469(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438485-796d1c1da0a88d28c13da74f39550801.png");

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