"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["932120"], {
892625(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_network_api_service_collaboration_api_servicecollaboration_arkts_servicecollaboration_collaborationservice_servicecollaboration_collaborationservice_md_080_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-network-api-service-collaboration-api-servicecollaboration-arkts-servicecollaboration-collaborationservice-servicecollaboration-collaborationservice-md-080.json
var site_docs_ref_system_network_api_service_collaboration_api_servicecollaboration_arkts_servicecollaboration_collaborationservice_servicecollaboration_collaborationservice_md_080_namespaceObject = JSON.parse('{"id":"system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationservice/servicecollaboration-collaborationservice","title":"CollaborationService (跨设备互通组件)","description":"该模块提供了组件createCollaborationServiceMenuItems和CollaborationServiceFilter，两者需要配合使用，完成分布式跨端能力，如在2in1端跨端调用手机端拍照。","source":"@site/docs-ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationservice/servicecollaboration-collaborationservice.md","sourceDirName":"system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationservice","slug":"/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationservice/servicecollaboration-collaborationservice","permalink":"/harmonyos-docs-site/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationservice/servicecollaboration-collaborationservice","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"CollaborationService (跨设备互通组件)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-collaborationservice","kit":"系统","last_updated":"2026-04-22","slug":"servicecollaboration-collaborationservice"},"sidebar":"ref","previous":{"title":"CollaborationCamera (跨设备互通组件)","permalink":"/harmonyos-docs-site/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationcamera/servicecollaboration-collaborationcamera"},"next":{"title":"CollaborationDevicePicker (流转控件)","permalink":"/harmonyos-docs-site/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationdevicepicker/servicecollaboration-collaborationdevicepicker"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationservice/servicecollaboration-collaborationservice.md


const frontMatter = {
	title: 'CollaborationService (跨设备互通组件)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-collaborationservice',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'servicecollaboration-collaborationservice'
};
const contentTitle = 'CollaborationService (跨设备互通组件)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "createCollaborationServiceMenuItems",
  "id": "createcollaborationservicemenuitems",
  "level": 2
}, {
  "value": "createCollaborationServiceMenuItems",
  "id": "createcollaborationservicemenuitems-1",
  "level": 2
}, {
  "value": "createCollaborationServiceMenuItems",
  "id": "createcollaborationservicemenuitems-2",
  "level": 2
}, {
  "value": "CollaborationServiceFilter",
  "id": "collaborationservicefilter",
  "level": 2
}, {
  "value": "CollaborationDeviceFilterType",
  "id": "collaborationdevicefiltertype",
  "level": 2
}, {
  "value": "CollaborationServiceStateDialog",
  "id": "collaborationservicestatedialog",
  "level": 2
}, {
  "value": "onState",
  "id": "onstate",
  "level": 3
}, {
  "value": "build",
  "id": "build",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "collaborationservice-跨设备互通组件",
        children: "CollaborationService (跨设备互通组件)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该模块提供了组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "#createcollaborationservicemenuitems",
        children: "createCollaborationServiceMenuItems"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#collaborationservicefilter",
        children: "CollaborationServiceFilter"
      }), "，两者需要配合使用，完成分布式跨端能力，如在2in1端跨端调用手机端拍照。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#createcollaborationservicemenuitems",
        children: "createCollaborationServiceMenuItems"
      }), "组件，可以获取组网内具有对应能力的设备列表。用户选择对应的设备后，拉起应用。调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#collaborationservicestatedialog",
        children: "CollaborationServiceStateDialog"
      }), "，应用将弹出提示框，提示对端应用状态。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { CollaborationServiceStateDialog, createCollaborationServiceMenuItems, CollaborationServiceFilter} from '@kit.ServiceCollaborationKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "createcollaborationservicemenuitems",
      children: "createCollaborationServiceMenuItems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createCollaborationServiceMenuItems(businessFilter?: Array<CollaborationServiceFilter>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设备列表选择器，需要在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menu/ts-basic-components-menu",
        children: "Menu"
      }), "组件内调用。用于显示组网内具有对应能力的设备列表。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该方法为自定义构建函数，开发者在使用前需要先了解", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
        children: "@Builder"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), " @Builder"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.Service"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在PC/2in1、Tablet可正常调用，在其他设备类型上无法展示设备列表，无法使用跨设备互通能力。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "businessFilter"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#collaborationservicefilter",
              children: "CollaborationServiceFilter"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传入能力类型。默认值为ALL，匹配跨端拍照、文档扫描和图库选择器。  对于API 6.0.0(20)及之后版本，支持匹配跨端拍照、文档扫描、图库选择器、视频选择器、图片和视频选择器；对于API 6.0.0(20)之前版本，仅支持匹配跨端拍照、文档扫描、图库选择器。"
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
        children: "@Builder\nMyTestMenu() {\n  Menu() {\n    createCollaborationServiceMenuItems([CollaborationServiceFilter.ALL])\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "createcollaborationservicemenuitems-1",
      children: "createCollaborationServiceMenuItems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createCollaborationServiceMenuItems(businessFilter: Array<CollaborationServiceFilter>, canReceiveNumber: number): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设备列表选择器，需要在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menu/ts-basic-components-menu",
        children: "Menu"
      }), "组件内调用。用于显示组网内具有对应能力的设备列表，此接口支持自定义对端图库能力图片选择的数量。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该方法为自定义构建函数，开发者在使用前需要先了解", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
        children: "@Builder"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), " @Builder"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.Service"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在PC/2in1、Tablet可正常调用，在其他设备类型上无法展示设备列表，无法使用跨设备互通能力。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "businessFilter"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#collaborationservicefilter",
              children: "CollaborationServiceFilter"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传入能力类型。默认值为ALL，匹配跨端拍照、文档扫描和图库选择器。  对于API 6.0.0(20)及之后版本，支持匹配跨端拍照、文档扫描、图库选择器、视频选择器、图片和视频选择器；对于API 6.0.0(20)之前版本，仅支持匹配跨端拍照、文档扫描、图库选择器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "canReceiveNumber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传入照片最大张数，数量1到50，小于等于0时不会拉起被调用设备的能力，大于50默认为50。"
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
        children: "@Builder\nMyTestMenu() {\n  Menu() {\n    createCollaborationServiceMenuItems([CollaborationServiceFilter.ALL], 30)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "createcollaborationservicemenuitems-2",
      children: "createCollaborationServiceMenuItems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createCollaborationServiceMenuItems(businessFilter: Array<CollaborationServiceFilter>, canReceiveMaxCount: number, deviceTypeFilter: Array<CollaborationDeviceFilterType> ): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设备列表选择器，需要在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menu/ts-basic-components-menu",
        children: "Menu"
      }), "组件内调用。用于显示组网内具有对应能力的设备列表，此接口支持自定义对端图库能力图片选择的数量和支持自定义选择对端的设备类型手机、平板和2in1设备。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体调用策略：2in1设备可以调用平板和手机，平板可以调用手机，并且在6.1.0(23)及以上版本支持手机、平板或2in1设备调用支持拍照、扫描、选择图库能力的手机，支持拍照、扫描、选择图库能力的平板，以及支持选择图库能力的2in1设备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该方法为自定义构建函数，开发者在使用前需要先了解", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
        children: "@Builder"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此模块的接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), " @Builder"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.Service"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
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
            children: "businessFilter"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#collaborationservicefilter",
              children: "CollaborationServiceFilter"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传入能力类型。默认值为ALL，匹配跨端拍照、文档扫描和图库选择器。  对于API 6.0.0(20)及之后版本，支持匹配跨端拍照、文档扫描、图库选择器、视频选择器、图片和视频选择器；对于API 6.0.0(20)之前版本，仅支持匹配跨端拍照、文档扫描、图库选择器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "canReceiveMaxCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传入照片最大张数，数量1到50，小于等于0时不会拉起被调用设备的能力，大于50默认为50。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceTypeFilter"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#collaborationdevicefiltertype",
              children: "CollaborationDeviceFilterType"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传入调用的设备类型，传入为空或传入非法值时不会调用设备。"
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
        children: "@Builder\nMyTestMenu() {\n  Menu() {\n    createCollaborationServiceMenuItems([CollaborationServiceFilter.ALL], 30, [CollaborationDeviceFilterType.PHONE, CollaborationDeviceFilterType.TABLET])\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "collaborationservicefilter",
      children: "CollaborationServiceFilter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "能力类型枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.Service"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "ALL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "匹配跨端拍照、文档扫描和图库选择器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TAKE_PHOTO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "匹配跨端拍照。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCAN_DOCUMENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "匹配文档扫描。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_PICKER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "匹配图库选择器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VIDEO_PICKER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["匹配视频选择器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.0(20)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_VIDEO_PICKER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["匹配图片和视频选择器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.0(20)"]
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
        children: "@Builder\nMyTestMenu() {\n  Menu() {\n    createCollaborationServiceMenuItems([CollaborationServiceFilter.ALL], 30)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "collaborationdevicefiltertype",
      children: "CollaborationDeviceFilterType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备类型枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此模块的接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.Service"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "PHONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手机。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TABLET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "平板。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PC_2IN1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PC/2in1。"
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
        children: "@Builder\nMyTestMenu() {\n  Menu() {\n    createCollaborationServiceMenuItems([CollaborationServiceFilter.ALL], 30, [CollaborationDeviceFilterType.PHONE, CollaborationDeviceFilterType.TABLET])\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "collaborationservicestatedialog",
      children: "CollaborationServiceStateDialog"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "弹窗组件，用于提示对端应用状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["您需要实现", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onstate",
        children: "onState"
      }), "方法，并且在页面中定义这个组件，在业务开始后，此方法将被协同框架调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该组件为自定义组件，开发者在使用前需要先了解", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#component",
        children: "@Component"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), " @Component"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.Service"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onstate",
      children: "onState"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onState: (stateCode: number, bufferType: string, buffer: ArrayBuffer) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接收数据的回调函数，其中传入的stateCode是完成状态，bufferType是回传的数据类型，buffer是回传的数据内容，开发者可通过状态和数据结合自身的业务逻辑实现onState方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.Service"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "stateCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识业务完成状态，含义详见下面状态码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bufferType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识回传数据类型。  \"general.image\"：图片类型。  \"general.fileName\"：文件名称。  \"general.video\"：视频，从6.1.0(23)开始支持此类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArrayBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当bufferType为\"general.image\"，成功则返回对应数据，失败则返回空。  当bufferType为\"general.video\"，成功则返回对应存在应用沙箱视频uri路径，失败则返回空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "状态码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下部分错误状态的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-error-code/servicecollaboration-error-code",
        children: "ArkTS 错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "状态码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1001202001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对端取消。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1001202002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "协同框架内部出现错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1001202003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本端取消。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1001202004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跨设备互通能力开始。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1001202005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片全部回传结束。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1001202006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回传文件名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1001202007"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当", (0,jsx_runtime.jsx)(_components.a, {
              href: "#createcollaborationservicemenuitems-1",
              children: "createCollaborationServiceMenuItems"
            }), "传入自定义图片张数canReceiveNumber小于等于0时，不会拉起被调用设备的能力。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1001202015"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频全部回传成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1001202016"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "正在回传多个视频。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "build",
      children: "build"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "build(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "struct的默认构造函数，开发者无法直接调用此方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.Service"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例1："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "6.1.0(23)之前的版本，参考以下示例，可以完成一次调用对端应用的获取图片操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["跨设备互通详细介绍可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/service-collaboration-kit-guide/servicecollaboration-service/servicecollaboration-service-overview",
        children: "跨设备互通特性简介"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {\n  createCollaborationServiceMenuItems,\n  CollaborationServiceStateDialog,\n  CollaborationServiceFilter\n} from '@kit.ServiceCollaborationKit';\nimport { image } from '@kit.ImageKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct Index {\n  @State picture: PixelMap | undefined = undefined;\n\n  @Builder\n  MyTestMenu() {\n    Menu() {\n      createCollaborationServiceMenuItems([CollaborationServiceFilter.ALL], 30)\n    }\n  }\n\n  build() {\n    Column({ space: 20 }) {\n      CollaborationServiceStateDialog({\n        onState: (stateCode: number, bufferType: string, buffer: ArrayBuffer): void => this.doInsertPicture(stateCode, bufferType, buffer)\n      })\n      Button('使用远端设备进行拍照')\n        .type(ButtonType.Normal)\n        .borderRadius(10)\n        .bindMenu(this.MyTestMenu)\n\n      if (this.picture) {\n        Image(this.picture)\n          .borderStyle(BorderStyle.Dotted)\n          .borderWidth(1)\n          .objectFit(ImageFit.Contain)\n          .height('80%')\n          .onComplete((event) => {\n            if (event != undefined) {\n              hilog.info(0, \"MEMOMOCK\", \"onComplete \" + event.loadingStatus)\n            }\n          })\n      }\n    }\n    .padding(20)\n    .width('100%')\n    .alignItems(HorizontalAlign.Center)\n  }\n\n  doInsertPicture(stateCode: number, bufferType: string, buffer: ArrayBuffer): void {\n    if (stateCode != 0) {\n      return\n    }\n    if (bufferType == \"general.image\") {\n      let imageSource = image.createImageSource(buffer)\n      imageSource.createPixelMap().then((pixelMap) => {\n        this.picture = pixelMap;\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例2："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "6.1.0(23)及之后的版本，参考以下示例，可以完成一次调用对端应用的获取图片和视频操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["跨设备互通详细介绍可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/service-collaboration-kit-guide/servicecollaboration-service/servicecollaboration-service-overview",
        children: "跨设备互通特性简介"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {\n  createCollaborationServiceMenuItems, CollaborationServiceStateDialog\n} from '@kit.ServiceCollaborationKit';\nimport { image } from '@kit.ImageKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { util } from '@kit.ArkTS';\n\nclass VideoItem {\n  id: string;\n  src: string;\n\n  constructor(id: string, src: string) {\n    this.id = id;\n    this.src = src;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State picture: PixelMap | undefined = undefined;\n  controller: RichEditorController = new RichEditorController();\n  options: RichEditorOptions = { controller: this.controller };\n  @State videoSrc: string = ''\n  @State videoItems: VideoItem[] = [];\n  refreshId: number = 0;\n\n  @Builder\n  MyToolBarMenu() {\n    Menu() {\n      // create collaboration camera menuItems to show camera devices.\n      createCollaborationServiceMenuItems([0, 5\n      ], 50)\n    }\n  }\n\n  aboutToAppear(): void {\n    hilog.info(0, 'MEMOMOCK', 'aboutToAppear ');\n  }\n\n  aboutToDisappear(): void {\n    hilog.info(0, 'MEMOMOCK', 'aboutToDisappear ');\n  }\n\n  build() {\n    Column({ space: 20 }) {\n      CollaborationServiceStateDialog({\n        onState: (stateCode: number, dataType?: string, buffer?: ArrayBuffer): void =>\n        this.doInsertPicture(stateCode, dataType, buffer)\n      })\n      Button('使用远端设备进行拍照')\n        .type(ButtonType.Normal)\n        .borderRadius(10)\n        .bindMenu(this.MyToolBarMenu)\n      RichEditor(this.options)\n        .onReady(() => {\n          hilog.info(0x0000, 'MEMOMOCK', 'RichEditor');\n        }\n        )\n      Column() {\n        List() {\n          ForEach(this.videoItems, (item: VideoItem, index: number) => {\n            ListItem() {\n              Video({\n                src: item.src,\n                controller: new VideoController()\n              })\n                .objectFit(ImageFit.Auto)\n                .width('20%')\n                .height('20%')\n                .margin({ top: 10, right: 10 })\n                .onError((err) => {\n                  hilog.error(0, 'MEMOMOCK', `code is ${err.code}, message is ${err.message}`);\n                })\n            }\n          }, (item: VideoItem) => {\n            hilog.info(0, 'MEMOMOCK', 'item id ' + item.id);\n            hilog.info(0, 'MEMOMOCK', 'item src' + item.src);\n            return item.id;\n          });\n        }\n      }.padding({ bottom: '120vp' })\n    }\n    .width('100%')\n    .alignItems(HorizontalAlign.Center);\n  }\n\n  doInsertPicture(stateCode: number, dataType?: string, buffer?: ArrayBuffer): void {\n    hilog.info(0, 'MEMOMOCK', 'doInsertPicture is ' + stateCode)\n    if (dataType == 'general.video') {\n      let decoder = util.TextDecoder.create('utf-8');\n      let uriStr = decoder.decodeToString(new Uint8Array(buffer));\n      hilog.info(0, 'MEMOMOCK', 'Received URI: ' + uriStr);\n      const newId = String(++this.refreshId);\n      this.videoItems.push(new VideoItem(newId, uriStr));\n    } else if (dataType == 'general.image') {\n      let imageSource = image.createImageSource(buffer)\n      imageSource && imageSource.createPixelMap().then((pixelMap) => {\n        this.picture = pixelMap;\n        if (this.controller) {\n          this.controller.addImageSpan(pixelMap,\n            {\n              imageStyle:\n              {\n                size: [\"200px\", \"200px\"]\n              }\n            });\n        }\n      })\n    }\n  }\n}\n"
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