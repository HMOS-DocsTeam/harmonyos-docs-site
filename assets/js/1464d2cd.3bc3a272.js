"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["866766"], {
455733(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_inter_app_redirection_specified_type_app_redirection_start_navigation_apps_start_navigation_apps_md_146_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-inter-app-redirection-specified-type-app-redirection-start-navigation-apps-start-navigation-apps-md-146.json
var site_docs_ability_kit_stage_model_development_inter_app_redirection_specified_type_app_redirection_start_navigation_apps_start_navigation_apps_md_146_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-navigation-apps/start-navigation-apps","title":"拉起导航类应用（startAbilityByType）","description":"本章节介绍如何拉起导航类应用扩展面板。","source":"@site/docs/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-navigation-apps/start-navigation-apps.md","sourceDirName":"ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-navigation-apps","slug":"/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-navigation-apps/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-navigation-apps/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"拉起导航类应用（startAbilityByType）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/start-navigation-apps","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"拉起指定类型的应用概述","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-intent-panel/"},"next":{"title":"拉起邮件类应用（startAbilityByType）","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-email-apps/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-navigation-apps/start-navigation-apps.md


const frontMatter = {
	title: '拉起导航类应用（startAbilityByType）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/start-navigation-apps',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '拉起导航类应用（startAbilityByType）';

const assets = {

};



const toc = [{
  "value": "导航类应用扩展面板参数说明",
  "id": "导航类应用扩展面板参数说明",
  "level": 2
}, {
  "value": "拉起方开发步骤",
  "id": "拉起方开发步骤",
  "level": 2
}, {
  "value": "目标方开发步骤",
  "id": "目标方开发步骤",
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
        id: "拉起导航类应用startabilitybytype",
        children: "拉起导航类应用（startAbilityByType）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节介绍如何拉起导航类应用扩展面板。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导航类应用扩展面板参数说明",
      children: "导航类应用扩展面板参数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startAbilityByType接口中type字段为navigation，支持路线规划、导航、位置搜索三种意图场景，对应的wantParam参数如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(470919)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文中的经纬度均采用GCJ-02坐标系统。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "路线规划场景"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                children: "sceneType"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "意图场景，表明本次请求对应的操作意图。默认为1，路线规划场景填1或不填。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "originName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "起点名称。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "originLatitude"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "起点纬度。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "originLongitude"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "起点经度。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "originPoiIds"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Record<number, string>"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "起点POI ID列表，当前仅支持传入花瓣地图、高德地图、百度地图的POI ID。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "destinationName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "终点名称。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "destinationLatitude"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "终点纬度。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "destinationLongitude"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "终点经度。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "destinationPoiIds"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Record<number, string>"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "终点POI ID列表，当前仅支持传入花瓣地图、高德地图、百度地图的POI ID。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "vehicleType"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "交通出行工具，取值：0-驾车，1-步行，2-骑行，3-公交。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导航场景"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                children: "sceneType"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "意图场景，表明本次请求对应的操作意图。导航场景填2。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "destinationName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "终点名称。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "destinationLatitude"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "终点纬度。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "destinationLongitude"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "终点经度。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "destinationPoiIds"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Record<number, string>"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "终点POI ID列表，当前仅支持传入花瓣地图、高德地图、百度地图的POI ID。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "位置搜索场景"
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
                children: "sceneType"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "意图场景，表明本次请求对应的操作意图。位置搜索场景填3。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "destinationName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "地点名称。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "拉起方开发步骤",
      children: "拉起方开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造接口参数并调用startAbilityByType接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "终点POI ID列表（destinationPoiIds）和起点POI ID列表（originPoiIds）需开发者自行从各地图系统中获取，并按照对应关系传参。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n  @State hideAbility: string = 'hideAbility'\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.hideAbility)\n          .fontSize(30)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n            let wantParam: Record<string, Object> = {\n              'sceneType': 1,\n              'destinationLatitude': 32.060844,\n              'destinationLongitude': 118.78315,\n              'destinationName': 'xx市xx路xx号',\n              'destinationPoiIds': {\n                1: '1001', // key为1代表花瓣地图，value需为花瓣地图POI\n                2: '2002', // key为2代表高德地图，value需为高德地图POI\n                3: '3003'  // key为3代表百度地图，value需为百度地图POI\n              } as Record<number, string>,\n              'originName': 'xx市xx公园',\n              'originLatitude': 31.060844,\n              'originLongitude': 120.78315,\n              'originPoiIds': {\n                1: '1101', // key为1代表花瓣地图，value需为花瓣地图POI\n                2: '2202', // key为2代表高德地图，value需为高德地图POI\n                3: '3303'  // key为3代表百度地图，value需为百度地图POI\n              } as Record<number, string>,\n              'vehicleType': 0\n            };\n            let abilityStartCallback: common.AbilityStartCallback = {\n              onError: (code: number, name: string, message: string) => {\n                console.error(`onError code ${code} name: ${name} message: ${message}`);\n              },\n              onResult: (result) => {\n                console.info(`onResult result: ${JSON.stringify(result)}`);\n              }\n            }\n\n            context.startAbilityByType(\"navigation\", wantParam, abilityStartCallback,\n              (err) => {\n                if (err) {\n                  console.error(`startAbilityByType fail, err: ${JSON.stringify(err)}`);\n                } else {\n                  console.info(`success`);\n                }\n              });\n          });\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "效果示例图："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(613579)/* ["default"] */.A) + "",
            width: "328",
            height: "734"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "目标方开发步骤",
      children: "目标方开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在module.json5中配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#skills%E6%A0%87%E7%AD%BE",
            children: "uris"
          }), "，步骤如下："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "设置linkFeature属性以声明当前应用支持的特性功能，从而系统可以从设备已安装应用中找到当前支持该特性的应用，取值范围如下："
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "取值"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "含义"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "Navigation"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "声明应用支持导航功能"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "RoutePlan"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "声明应用支持路线规划功能"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "PlaceSearch"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "声明应用支持位置搜索功能"
                  })]
                })]
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "设置scheme、host、port、path/pathStartWith属性，与Want中URI相匹配，以便区分不同功能。"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"abilities\": [\n      {\n      \"skills\": [\n          {\n          \"uris\": [\n              {\n              \"scheme\": \"maps\", // 这里仅示意，应用需确保这里声明的uri能被外部正常拉起\n              \"host\": \"navigation\",\n              \"path\": \"\",\n              \"linkFeature\": \"Navigation\" // 声明应用支持导航功能\n              },\n              {\n              \"scheme\": \"maps\", // 这里仅示意，应用需确保这里声明的uri能被外部正常拉起\n              \"host\": \"routePlan\",\n              \"path\": \"\",\n              \"linkFeature\": \"RoutePlan\" // 声明应用支持路线规划功能\n              },\n              {\n              \"scheme\": \"maps\", // 这里仅示意，应用需确保这里声明的uri能被外部正常拉起\n              \"host\": \"search\",\n              \"path\": \"\",\n              \"linkFeature\": \"PlaceSearch\" // 声明应用支持位置搜索功能\n              }\n          ]\n          }\n      ]\n      }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "解析参数并做对应处理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "UIAbility.onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在参数", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "want.uri"
            })
          }), "中会携带目标方配置的linkFeature对应的uri。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在参数", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "want.parameters"
            })
          }), "中会携带Caller方传入的参数，不同场景参数如下所示。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "路线规划场景"
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                    children: "originName"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "起点名称。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "originLatitude"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "number"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "起点纬度。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "originLongitude"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "number"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "起点经度。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "originPoiId"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "起点POI ID，当前仅支持花瓣地图、高德地图、百度地图获取此参数。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "destinationName"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "终点名称。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "destinationLatitude"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "number"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "终点纬度。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "destinationLongitude"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "number"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "终点经度。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "destinationPoiId"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "终点POI ID，当前仅支持花瓣地图、高德地图、百度地图获取此参数。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "vehicleType"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "number"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "交通出行工具，取值：0-驾车，1-步行，2-骑行，3-公交。"
                  })]
                })]
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "导航场景"
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                    children: "destinationName"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "终点名称。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "destinationLatitude"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "number"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "终点纬度。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "destinationLongitude"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "number"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "终点经度。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "destinationPoiId"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "终点POI ID，当前仅支持花瓣地图、高德地图、百度地图获取此参数。"
                  })]
                })]
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "位置搜索场景"
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
                    children: "destinationName"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "地点名称。"
                  })]
                })
              })]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用可根据", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#skills%E6%A0%87%E7%AD%BE",
            children: "linkFeature"
          }), "中定义的特性功能，比如路线规划、导航和位置搜索，结合接收到的uri和参数开发不同的样式页面。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "完整示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window } from '@kit.ArkUI';\n\nconst TAG = 'EntryAbility';\n\nexport default class EntryAbility extends UIAbility {\n    windowStage: window.WindowStage | null = null;\n\n    uri?: string;\n    destinationLatitude?: number;\n    destinationLongitude?: number;\n    destinationName?: string;\n    originName?: string;\n    originLatitude?: number;\n    originLongitude?: number;\n    vehicleType?: number;\n    destinationPoiId?: string;\n    originPoiId?: string;\n\n    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n        hilog.info(0x0000, TAG, `onCreate, want=${JSON.stringify(want)}`);\n        super.onCreate(want, launchParam);\n        this.parseWant(want);\n    }\n\n    onNewWant(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n        hilog.info(0x0000, TAG, `onNewWant, want=${JSON.stringify(want)}`);\n        super.onNewWant(want, launchParam);\n        this.parseWant(want);\n        if (!this.windowStage) {\n            hilog.error(0x0000, TAG, 'windowStage is null');\n            this.context.terminateSelf();\n            return;\n        }\n        this.loadPage(this.windowStage);\n    }\n\n    private parseWant(want: Want): void {\n        this.uri = want.uri as string | undefined;\n        this.destinationLatitude = want.parameters?.destinationLatitude as number | undefined;\n        this.destinationLongitude = want.parameters?.destinationLongitude as number | undefined;\n        this.destinationName = want.parameters?.destinationName as string | undefined;\n        this.originName = want.parameters?.originName as string | undefined;\n        this.originLatitude = want.parameters?.originLatitude as number | undefined;\n        this.originLongitude = want.parameters?.originLongitude as number | undefined;\n        this.vehicleType = want.parameters?.vehicleType as number | undefined;\n        this.destinationPoiId = want.parameters?.destinationPoiId as string | undefined;\n        this.originPoiId = want.parameters?.originPoiId as string | undefined;\n    }\n\n    private loadPage(windowStage: window.WindowStage): void {\n        hilog.info(0x0000, TAG, `loadPage, uri=${this.uri}`);\n        if (this.uri === 'maps://navigation') {\n            // 构建导航场景参数\n            const storage: LocalStorage = new LocalStorage({\n                \"destinationLatitude\": this.destinationLatitude,\n                \"destinationLongitude\": this.destinationLongitude,\n                \"destinationPoiId\": this.destinationPoiId\n            } as Record<string, Object>);\n            // 拉起导航页面\n            windowStage.loadContent('pages/NavigationPage', storage)\n        } else if (this.uri === 'maps://routePlan') {\n            // 构建路径规划场景参数\n            const storage: LocalStorage = new LocalStorage({\n                \"destinationLatitude\": this.destinationLatitude,\n                \"destinationLongitude\": this.destinationLongitude,\n                \"destinationName\": this.destinationName,\n                \"originName\": this.originName,\n                \"originLatitude\": this.originLatitude,\n                \"originLongitude\": this.originLongitude,\n                \"vehicleType\": this.vehicleType,\n                \"destinationPoiId\": this.destinationPoiId,\n                \"originPoiId\": this.originPoiId\n            } as Record<string, Object>);\n            // 拉起路径规划页面\n            windowStage.loadContent('pages/RoutePlanPage', storage)\n        }  else if (this.uri === 'maps://search') {\n            // 构建位置搜索场景参数\n            const storage: LocalStorage = new LocalStorage({\n                \"destinationName\": this.destinationName\n            } as Record<string, Object>);\n            // 拉起位置搜索页面\n            windowStage.loadContent('pages/PlaceSearchPage', storage)\n        } else {\n            // 默认拉起首页\n            windowStage.loadContent('pages/Index', (err) => {\n                if (err.code) {\n                    hilog.error(0x0000, TAG, 'Failed to load the content. Cause: %{public}s',\n                        JSON.stringify(err) ?? '');\n                    return;\n                }\n                hilog.info(0x0000, TAG, 'Succeeded in loading the content.');\n            });\n        }\n    }\n\n    onDestroy(): void {\n        hilog.info(0x0000, TAG, `onDestroy`);\n    }\n\n    onWindowStageCreate(windowStage: window.WindowStage): void {\n        hilog.info(0x0000, TAG, `onWindowStageCreate`);\n        this.windowStage = windowStage;\n        this.loadPage(this.windowStage);\n    }\n\n    onWindowStageDestroy(): void {\n        hilog.info(0x0000, TAG, '%{public}s', 'Ability onWindowStageDestroy');\n    }\n\n    onForeground(): void {\n        hilog.info(0x0000, TAG, '%{public}s', 'Ability onForeground');\n    }\n\n    onBackground(): void {\n        hilog.info(0x0000, TAG, '%{public}s', 'Ability onBackground');\n    }\n}\n"
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
613579(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797856-211a63d1f9176afc919fe4111174579e.png");

},
470919(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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