"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["545161"], {
56676(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_network_api_service_collaboration_api_servicecollaboration_arkts_servicecollaboration_collaborationcamera_servicecollaboration_collaborationcamera_md_b80_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-network-api-service-collaboration-api-servicecollaboration-arkts-servicecollaboration-collaborationcamera-servicecollaboration-collaborationcamera-md-b80.json
var site_docs_ref_system_network_api_service_collaboration_api_servicecollaboration_arkts_servicecollaboration_collaborationcamera_servicecollaboration_collaborationcamera_md_b80_namespaceObject = JSON.parse('{"id":"system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationcamera/servicecollaboration-collaborationcamera","title":"CollaborationCamera (跨设备互通组件)","description":"该模块提供了组件createCollaborationCameraMenuItems和CollaborationCameraStateDialog，两者需要配合使用，完成分布式跨端能力，如在2in1端跨端调用手机端拍照。","source":"@site/docs-ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationcamera/servicecollaboration-collaborationcamera.md","sourceDirName":"system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationcamera","slug":"/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationcamera/servicecollaboration-collaborationcamera","permalink":"/harmonyos-docs-site/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationcamera/servicecollaboration-collaborationcamera","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"CollaborationCamera (跨设备互通组件)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-collaborationcamera","kit":"系统","last_updated":"2026-04-22","slug":"servicecollaboration-collaborationcamera"},"sidebar":"ref","previous":{"title":"API错误码","permalink":"/harmonyos-docs-site/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code"},"next":{"title":"CollaborationService (跨设备互通组件)","permalink":"/harmonyos-docs-site/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationservice/servicecollaboration-collaborationservice"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationcamera/servicecollaboration-collaborationcamera.md


const frontMatter = {
	title: 'CollaborationCamera (跨设备互通组件)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-collaborationcamera',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'servicecollaboration-collaborationcamera'
};
const contentTitle = 'CollaborationCamera (跨设备互通组件)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "createCollaborationCameraMenuItems(deprecated)",
  "id": "createcollaborationcameramenuitemsdeprecated",
  "level": 2
}, {
  "value": "CollaborationCameraBusinessFilter(deprecated)",
  "id": "collaborationcamerabusinessfilterdeprecated",
  "level": 2
}, {
  "value": "CollaborationCameraStateDialog(deprecated)",
  "id": "collaborationcamerastatedialogdeprecated",
  "level": 2
}, {
  "value": "onState(deprecated)",
  "id": "onstatedeprecated",
  "level": 3
}, {
  "value": "build(deprecated)",
  "id": "builddeprecated",
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
        id: "collaborationcamera-跨设备互通组件",
        children: "CollaborationCamera (跨设备互通组件)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该模块提供了组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "#createcollaborationcameramenuitemsdeprecated",
        children: "createCollaborationCameraMenuItems"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#collaborationcamerastatedialogdeprecated",
        children: "CollaborationCameraStateDialog"
      }), "，两者需要配合使用，完成分布式跨端能力，如在2in1端跨端调用手机端拍照。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#createcollaborationcameramenuitemsdeprecated",
        children: "createCollaborationCameraMenuItems"
      }), "组件，可以获取组网内具有对应能力的设备列表。用户选择对应的设备后，拉起应用。调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#collaborationcamerastatedialogdeprecated",
        children: "CollaborationCameraStateDialog"
      }), "，应用将弹出提示框，提示对端应用状态。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃说明："
        })
      }), " 从5.0.0(12)开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationservice/servicecollaboration-collaborationservice",
        children: "CollaborationService"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { CollaborationCameraStateDialog, createCollaborationCameraMenuItems, CollaborationCameraBusinessFilter} from '@kit.ServiceCollaborationKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "createcollaborationcameramenuitemsdeprecated",
      children: "createCollaborationCameraMenuItems(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createCollaborationCameraMenuItems(businessFilter?: Array<CollaborationCameraBusinessFilter>): void"
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
          children: "废弃说明："
        })
      }), " 从5.0.0(12) 开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationservice/servicecollaboration-collaborationservice#createcollaborationservicemenuitems",
        children: "createCollaborationServiceMenuItems"
      }), "替代。"]
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
      }), " SystemCapability.Collaboration.Camera"]
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
      }), " 4.0.0(10)"]
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
              href: "#collaborationcamerabusinessfilterdeprecated",
              children: "CollaborationCameraBusinessFilter"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传入能力类型，支持匹配跨端拍照、扫描、图库。  默认值为ALL，匹配所有业务。"
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
        children: "@Builder\nMyTestMenu() {\n  Menu() {\n    createCollaborationCameraMenuItems([CollaborationCameraBusinessFilter.ALL])\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "collaborationcamerabusinessfilterdeprecated",
      children: "CollaborationCameraBusinessFilter(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "能力类型枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃说明："
        })
      }), " 从5.0.0(12) 开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationservice/servicecollaboration-collaborationservice#collaborationservicefilter",
        children: "CollaborationServiceFilter"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.Camera"]
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
      }), " 4.0.0(10)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "匹配所有业务。"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["匹配文档扫描。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 4.1.0(11)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_PICKER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["匹配图库选择器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 4.1.0(11)"]
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
        children: "@Builder\nMyTestMenu() {\n  Menu() {\n    createCollaborationCameraMenuItems([CollaborationCameraBusinessFilter.ALL])\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "collaborationcamerastatedialogdeprecated",
      children: "CollaborationCameraStateDialog(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "弹窗组件，用于提示对端应用状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["您需要实现", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onstatedeprecated",
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
          children: "废弃说明："
        })
      }), " 从5.0.0(12) 开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationservice/servicecollaboration-collaborationservice#collaborationservicestatedialog",
        children: "CollaborationServiceStateDialog"
      }), "替代。"]
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
      }), " SystemCapability.Collaboration.Camera"]
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
      }), " 4.0.0(10)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onstatedeprecated",
      children: "onState(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onState: (stateCode: number, buffer: ArrayBuffer) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接收数据的回调函数，其中传入的stateCode是完成状态，buffer是回传的图片数据，开发者可通过状态和图片数据结合自身的业务逻辑实现onState方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃说明："
        })
      }), " 从5.0.0(12) 开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationservice/servicecollaboration-collaborationservice#onstate",
        children: "onState"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.Camera"]
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
      }), " 4.0.0(10)"]
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
            children: "stateCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识业务完成状态，含义详见下面错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArrayBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功则返回对应数据，失败则返回空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-error-code/servicecollaboration-error-code",
        children: "ArkTS 错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
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
            children: "代表回传文件名称。"
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
      id: "builddeprecated",
      children: "build(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "build(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "struct的默认构造函数，开发者无法直接调用此方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃说明："
        })
      }), " 从5.0.0(12) 开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationservice/servicecollaboration-collaborationservice#build",
        children: "build"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.Camera"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在PC/2in1、Tablet可被组件正常调用，在其他设备类型上无法展示设备列表，无法使用跨设备互通能力。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考以下示例，可以完成一次调用对端应用的操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["跨设备互通详细介绍可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/service-collaboration-kit-guide/servicecollaboration-service/servicecollaboration-service-overview",
        children: "跨设备互通特性简介"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {\n  createCollaborationCameraMenuItems,\n  CollaborationCameraStateDialog,\n  CollaborationCameraBusinessFilter\n} from '@kit.ServiceCollaborationKit';\nimport { image } from '@kit.ImageKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct Index {\n  @State picture: PixelMap | undefined = undefined;\n\n  @Builder\n  MyTestMenu() {\n    Menu() {\n      createCollaborationCameraMenuItems([CollaborationCameraBusinessFilter.ALL]);\n    }\n  }\n\n  build() {\n    Column({ space: 20 }) {\n      CollaborationCameraStateDialog({\n        onState: (stateCode: number, buffer: ArrayBuffer): void => this.doInsertPicture(stateCode, buffer)\n      })\n      Button('使用远端设备插入图片')\n        .type(ButtonType.Normal)\n        .borderRadius(10)\n        .bindMenu(this.MyTestMenu)\n\n      if (this.picture) {\n        Image(this.picture)\n          .borderStyle(BorderStyle.Dotted)\n          .borderWidth(1)\n          .objectFit(ImageFit.Contain)\n          .height('80%')\n          .onComplete((event) => {\n            if (event != undefined) {\n              hilog.info(0, \"MEMOMOCK\", \"onComplete \" + event.loadingStatus)\n            }\n          })\n      }\n    }\n    .padding(20)\n    .width('100%')\n    .alignItems(HorizontalAlign.Center)\n  }\n\n  doInsertPicture(stateCode: number, buffer: ArrayBuffer): void {\n    if (stateCode != 0) {\n      return\n    }\n    let imageSource = image.createImageSource(buffer)\n    imageSource.createPixelMap().then((pixelMap) => {\n      this.picture = pixelMap;\n    })\n  }\n}\n"
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