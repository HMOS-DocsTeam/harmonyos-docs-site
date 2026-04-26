"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["890782"], {
637457(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_push_api_push_rest_api_push_rest_api_scenes_push_scenariozed_api_request_example_push_scenariozed_api_request_example_md_97c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-push-api-push-rest-api-push-rest-api-scenes-push-scenariozed-api-request-example-push-scenariozed-api-request-example-md-97c.json
var site_docs_ref_push_api_push_rest_api_push_rest_api_scenes_push_scenariozed_api_request_example_push_scenariozed_api_request_example_md_97c_namespaceObject = JSON.parse('{"id":"push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-example/push-scenariozed-api-request-example","title":"请求示例","description":"通知消息","source":"@site/docs-ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-example/push-scenariozed-api-request-example.md","sourceDirName":"push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-example","slug":"/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-example/push-scenariozed-api-request-example","permalink":"/harmonyos-docs-site/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-example/push-scenariozed-api-request-example","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"请求示例","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-scenariozed-api-request-example","kit":"应用服务","last_updated":"2026-04-22","slug":"push-scenariozed-api-request-example"},"sidebar":"ref","previous":{"title":"响应参数","permalink":"/harmonyos-docs-site/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-response/push-scenariozed-api-response"},"next":{"title":"消息频控","permalink":"/harmonyos-docs-site/ref/push-api/push-rest-api/push-rest-api-scenes/push-msg-freq-control/push-msg-freq-control"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-example/push-scenariozed-api-request-example.md


const frontMatter = {
	title: '请求示例',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-scenariozed-api-request-example',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'push-scenariozed-api-request-example'
};
const contentTitle = '请求示例';

const assets = {

};



const toc = [{
  "value": "通知消息",
  "id": "通知消息",
  "level": 2
}, {
  "value": "应用在前台时接收通知消息",
  "id": "应用在前台时接收通知消息",
  "level": 3
}, {
  "value": "卡片刷新消息",
  "id": "卡片刷新消息",
  "level": 2
}, {
  "value": "语音播报消息",
  "id": "语音播报消息",
  "level": 2
}, {
  "value": "后台消息",
  "id": "后台消息",
  "level": 2
}, {
  "value": "创建实况窗消息",
  "id": "创建实况窗消息",
  "level": 2
}, {
  "value": "航班场景（event为FLIGHT）",
  "id": "航班场景event为flight",
  "level": 3
}, {
  "value": "出行打车场景（event为TAXI）",
  "id": "出行打车场景event为taxi",
  "level": 3
}, {
  "value": "高铁/火车场景（event为TRAIN）",
  "id": "高铁火车场景event为train",
  "level": 3
}, {
  "value": "更新实况窗消息",
  "id": "更新实况窗消息",
  "level": 2
}, {
  "value": "航班场景（event为FLIGHT）",
  "id": "航班场景event为flight-1",
  "level": 3
}, {
  "value": "出行打车场景（event为TAXI）",
  "id": "出行打车场景event为taxi-1",
  "level": 3
}, {
  "value": "高铁/火车场景（event为TRAIN）",
  "id": "高铁火车场景event为train-1",
  "level": 3
}, {
  "value": "赛事比分场景（event为SCORE）",
  "id": "赛事比分场景event为score",
  "level": 3
}, {
  "value": "应用内通话消息",
  "id": "应用内通话消息",
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
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "请求示例",
        children: "请求示例"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通知消息",
      children: "通知消息"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Request URL\nPOST \"https://push-api.cloud.huawei.com/v3/3158882***52863/messages:send\"\n\n// Request Header\nContent-Type: application/json\nAuthorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****\npush-type:0\n \n// Request Body\n{\n  \"payload\": {\n    \"notification\": {\n      \"category\": \"xxxxxx\", // category替换为实际通知消息类型\n      \"title\": \"普通标题\",\n      \"body\": \"普通内容\",\n      \"clickAction\": {\n        \"actionType\": 0\n      },\n      \"style\": 0,\n      \"image\":\"https://lf*******246.png\"\n    }\n  },\n  \"target\": {\n    \"token\": [\"MAAALgE4G98BAAAAst*******jg\"]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用在前台时接收通知消息",
      children: "应用在前台时接收通知消息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用只在后台展示通知消息；应用在前台时，通知消息将不会展示，但可以接收通知消息后自行完成业务处理，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/push-kit-guide/push-scenes/push-alert/push-send-alert#%E5%BA%94%E7%94%A8%E5%9C%A8%E5%89%8D%E5%8F%B0%E6%97%B6%E5%A4%84%E7%90%86%E9%80%9A%E7%9F%A5%E6%B6%88%E6%81%AF",
        children: "应用在前台时处理通知消息"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Request URL\nPOST \"https://push-api.cloud.huawei.com/v3/3158882***52863/messages:send\"\n\n// Request Header\nContent-Type: application/json\nAuthorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****\npush-type: 0\n\n// Request Body\n{\n  \"payload\": {\n    \"notification\": {\n      \"category\": \"MARKETING\",\n      \"title\": \"普通通知标题\",\n      \"body\": \"普通通知内容\",\n      \"clickAction\": {\n        \"actionType\": 0\n      },\n      \"foregroundShow\": false  // 设置为false则应用在前台时不会展示通知消息，默认为true表示前后台都展示\n    }\n  },\n  \"target\": {\n    \"token\": [\"MAMzLg**********lPW\"]\n  },\n  \"pushOptions\": {\n    \"testMessage\": true,\n    \"ttl\": 86400\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "卡片刷新消息",
      children: "卡片刷新消息"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Request URL\nPOST \"https://push-api.cloud.huawei.com/v3/3158882***52863/messages:send\"\n\n// Request Header\nContent-Type: application/json\nAuthorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****\npush-type:1\n \n// Request Body\n{\n  \"payload\": {\n    \"formData\": {\n      \"123\": 96,\n      \"class\": \"123\"\n    },\n    \"version\": 922337203,\n    \"images\": [\n      {\n        \"keyName\": \"hello\",\n        \"url\": \"https://xxx.png\",\n        \"require\": 1\n      }\n    ],\n    \"formId\": 0,\n    \"moduleName\": \"testName\",\n    \"formName\": \"testFormName\",\n    \"abilityName\": \"testAbilityName\"\n  },\n  \"pushOptions\": {\n    \"biTag\": \"this is bi\",\n    \"ttl\": 666\n  },\n  \"target\": {\n    \"token\": [\n      \"MAAALgE4G98BAAAAst************ttQd4Tw\"\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "语音播报消息",
      children: "语音播报消息"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Request URL\nPOST \"https://push-api.cloud.huawei.com/v3/3158882***52863/messages:send\"\n\n// Request Header\nContent-Type: application/json\nAuthorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****\npush-type:2\n \n// Request Body\n{\n  \"payload\": {\n    \"extraData\": \"Extension extra data\",\n    \"notification\": {\n      \"category\": \"PLAY_VOICE\",\n      \"title\": \"普通标题\",\n      \"body\": \"普通内容\",\n      \"clickAction\": {\n        \"actionType\": 0\n      },\n      \"style\": 0,\n      \"image\":\"https://lf*******246.png\"\n    }\n  },\n  \"target\": {\n    \"token\": [\"MAAALgE4G98BAAAAst*******jg\"]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "后台消息",
      children: "后台消息"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Request URL\nPOST \"https://push-api.cloud.huawei.com/v3/3158882***52863/messages:send\"\n\n// Request Header\nContent-Type: application/json\nAuthorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****\npush-type:6\n \n// Request Body\n{\n  \"payload\": {\n    \"extraData\": \"携带的数据\"\n  },\n  \"target\": {\n    \"token\": [\"MAAALgE4G98BAAAAst************jq\"]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建实况窗消息",
      children: "创建实况窗消息"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "航班场景event为flight",
      children: "航班场景（event为FLIGHT）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "计划出发，使用左右文本模板。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Request URL\nPOST \"https://push-api.cloud.huawei.com/v3/3158882***52863/messages:send\"\n \n// Request Header\nContent-Type: application/json\nAuthorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****\npush-type:7\n\n// Request Body\n{\n  \"pushOptions\": {\n    \"ttl\": 1000,\n    \"biTag\": \"biTag\"\n  },\n  \"payload\": {\n    \"activityId\": 1,\n    \"operation\": 0,\n    \"event\": \"FLIGHT\",\n    \"status\": \"DEPART\", // 计划出发\n    \"activityData\": {\n      \"notificationData\": {\n        \"keywords\": {\n          \"flightNo\": \"MU1471\"\n        },\n        \"type\": 5,\n        \"contentTitle\": \"航班{{status}}\", // 航班计划出发\n        \"contentText\": [\n          {\n            \"text\": \"航班号：\"\n          },\n          {\n            \"text\": \"{{flightNo}}\", // MU1471\n            \"foregroundColor\": \"#FF317AF7\"\n          }\n        ],\n        \"clickAction\": {\n          \"actionType\": 0\n        },\n        \"firstTextBlock\": {\n          \"firstLine\": \"12:00\",\n          \"secondLine\": \"上海虹桥\"\n        },\n        \"lastTextBlock\": {\n          \"firstLine\": \"14:20\",\n          \"secondLine\": \"成都天府\"\n        },\n        \"displayHorizontalLine\": true,\n        \"spaceIcon\": \"space.png\", // 取值为“/resources/rawfile”路径下的文件名\n        \"extend\": {\n          \"type\": 3,\n          \"pic\": \"flight.png\", // 取值为“/resources/rawfile”路径下的文件名\n          \"clickAction\": {\n            \"actionType\": 1,\n            \"action\": \"xxxxxxx\"\n          }\n        }\n      },\n      \"capsuleData\": {\n        \"type\": 1,\n        \"status\": 1,\n        \"icon\": \"icon.svg\", // 取值为“/resources/rawfile”路径下的文件名\n        \"bgColor\": \"#FF317AF7\",\n        \"remind\": \"EXPAND\",\n        \"title\": \"即将出发\",\n        \"content\": \"请尽快前往机场\"\n      }\n    }\n  },\n  \"target\": {\n    \"token\": [\n      \"MAAALgE4G98BAAAAst************jq\"\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "出行打车场景event为taxi",
      children: "出行打车场景（event为TAXI）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "司机正在赶来，使用进度可视化模板。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Request URL\nPOST \"https://push-api.cloud.huawei.com/v3/3158882***52863/messages:send\"\n\n// Request Header\nContent-Type: application/json\nAuthorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****\npush-type:7\n\n// Request Body\n{\n  \"pushOptions\": {\n    \"ttl\": 1000,\n    \"biTag\": \"biTag\"\n  },\n  \"payload\": {\n    \"activityId\": 2,\n    \"operation\": 0,\n    \"event\": \"TAXI\",\n    \"status\": \"DRIVER_ON_THE_WAY\", // 司机正在赶来\n    \"activityData\": {\n      \"notificationData\": {\n        \"type\": 3,\n        \"contentTitle\": \"{{status}}\", // 司机正在赶来\n        \"contentText\": [\n          {\n            \"text\": \"距您\"\n          },\n          {\n            \"text\": \"1.2公里\",\n            \"foregroundColor\": \"#FF317AF7\"\n          },\n          {\n            \"text\": \" | \"\n          },\n          {\n            \"text\": \"5分钟\",\n            \"foregroundColor\": \"#FF317AF7\"\n          }\n        ],\n        \"clickAction\": {\n          \"actionType\": 1, // 打开应用自定义页面\n          \"action\": \"xxxxxx\" // 应用内置页面ability对应的action\n        },\n        \"richProgress\": {\n          \"type\": 0,\n          \"nodeIcons\": [\"icon1.png\", \"icon2.png\", \"icon3.png\"], // 取值为“/resources/rawfile”路径下的文件名\n          \"indicatorIcon\": \"taxi.png\", // 取值为“/resources/rawfile”路径下的文件名\n          \"progress\": 40,\n          \"indicatorType\": 1,\n          \"color\": \"#FF317AF7\",\n          \"bgColor\": \"#19000000\"\n        },\n        \"extend\": {\n          \"type\": 3,\n          \"pic\": \"phone.png\", // 取值为“/resources/rawfile”路径下的文件名\n          \"clickAction\": {\n            \"actionType\": 5, // 打开拨号界面\n            \"data\": {\n              \"tel\": \"138xxxxxxxx\" // 通过tel字段携带电话号码\n            }\n          }\n        }\n      },\n      \"capsuleData\": {\n        \"type\": 1,\n        \"status\": 1,\n        \"icon\": \"icon.svg\", // 取值为“/resources/rawfile”路径下的文件名\n        \"bgColor\": \"#FF317AF7\",\n        \"remind\": \"EXPAND\",\n        \"title\": \"接驾中\",\n        \"content\": \"预计5分钟\"\n      }\n    }\n  },\n  \"target\": {\n    \"token\": [\n      \"MAAALgE4G98BAAAAst************jq\"\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "高铁火车场景event为train",
      children: "高铁/火车场景（event为TRAIN）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "计划出发，使用左右文本模板。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Request URL\nPOST \"https://push-api.cloud.huawei.com/v3/3158882***52863/messages:send\"\n\n// Request Header\nContent-Type: application/json\nAuthorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****\npush-type:7\n\n// Request Body\n{\n  \"pushOptions\": {\n    \"ttl\": 1000,\n    \"biTag\": \"biTag\"\n  },\n  \"payload\": {\n    \"activityId\": 3,\n    \"operation\": 0,\n    \"event\": \"TRAIN\",\n    \"status\": \"DEPART\", // 计划出发\n    \"title\": \"列车即将出发\",\n    \"content\": \"请尽快去高铁站\",\n    \"activityData\": {\n      \"notificationData\": {\n        \"keywords\": {\n          \"trainNo\": \"G1406\"\n        },\n        \"type\": 5,\n        \"contentTitle\": \"列车{{status}}\", // 列车计划出发\n        \"contentText\": [\n          {\n            \"text\": \"车次：\"\n          },\n          {\n            \"text\": \"{{trainNo}}\", // G1406\n            \"foregroundColor\": \"#FF317AF7\"\n          }\n        ],\n        \"clickAction\": {\n          \"actionType\": 0\n        },\n        \"firstTextBlock\": {\n          \"firstLine\": \"13:00\",\n          \"secondLine\": \"上海虹桥\"\n        },\n        \"lastTextBlock\": {\n          \"firstLine\": \"14:20\",\n          \"secondLine\": \"南京南\"\n        },\n        \"displayHorizontalLine\": true,\n        \"spaceIcon\": \"space.png\", // 取值为“/resources/rawfile”路径下的文件名\n        \"extend\": {\n          \"type\": 3,\n          \"pic\": \"train.png\", // 取值为“/resources/rawfile”路径下的文件名\n          \"clickAction\": {\n            \"actionType\": 1,\n            \"action\": \"xxxxxxx\"\n          }\n        }\n      },\n      \"capsuleData\": {\n        \"type\": 1,\n        \"status\": 1,\n        \"icon\": \"icon.svg\", // 取值为“/resources/rawfile”路径下的文件名\n        \"bgColor\": \"#FF317AF7\",\n        \"remind\": \"EXPAND\",\n        \"title\": \"即将出发\",\n        \"content\": \"请尽快去高铁站\"\n      }\n    }\n  },\n  \"target\": {\n    \"token\": [\n      \"MAAALgE4G98BAAAAst************jq\"\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "更新实况窗消息",
      children: "更新实况窗消息"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "航班场景event为flight-1",
      children: "航班场景（event为FLIGHT）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "已值机，使用左右文本模板。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Request URL\nPOST \"https://push-api.cloud.huawei.com/v3/3158882***52863/messages:send\"\n \n// Request Header\nContent-Type: application/json\nAuthorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****\npush-type:7\n\n// Request Body\n{\n  \"pushOptions\": {\n    \"ttl\": 1000,\n    \"biTag\": \"biTag\"\n  },\n  \"payload\": {\n    \"activityId\": 1,\n    \"operation\": 1,\n    \"event\": \"FLIGHT\",\n    \"status\": \"CHECKED_IN\", // 已值机\n    \"version\": 1,\n    \"activityData\": {\n      \"notificationData\": {\n        \"keywords\": {\n          \"flightNo\": \"MU1471\"\n        },\n        \"type\": 5,\n        \"contentTitle\": \"登机口88\",\n        \"contentText\": [\n          {\n            \"text\": \"{{status}} | \" // 已值机\n          },\n          {\n            \"text\": \"{{flightNo}}\", // MU1471\n            \"foregroundColor\": \"#FF317AF7\"\n          }\n        ],\n        \"clickAction\": {\n          \"actionType\": 0\n        },\n        \"firstTextBlock\": {\n          \"firstLine\": \"12:00\",\n          \"secondLine\": \"上海虹桥\"\n        },\n        \"lastTextBlock\": {\n          \"firstLine\": \"14:20\",\n          \"secondLine\": \"成都天府\"\n        },\n        \"displayHorizontalLine\": true,\n        \"spaceIcon\": \"space.png\", // 取值为“/resources/rawfile”路径下的文件名\n        \"extend\": {\n          \"type\": 3,\n          \"pic\": \"flight.png\", // 取值为“/resources/rawfile”路径下的文件名\n          \"clickAction\": {\n            \"actionType\": 1,\n            \"action\": \"xxxxxxx\"\n          }\n        }\n      },\n      \"capsuleData\": {\n        \"type\": 1,\n        \"status\": 1,\n        \"icon\": \"icon.svg\", // 取值为“/resources/rawfile”路径下的文件名\n        \"bgColor\": \"#FF317AF7\",\n        \"remind\": \"EXPAND\",\n        \"title\": \"登机口88\",\n        \"content\": \"请尽快完成安检\"\n      }\n    }\n  },\n  \"target\": {\n    \"token\": [\n      \"MAAALgE4G98BAAAAst************jq\"\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "出行打车场景event为taxi-1",
      children: "出行打车场景（event为TAXI）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "正在去往目的地，使用进度可视化模板。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Request URL\nPOST \"https://push-api.cloud.huawei.com/v3/3158882***52863/messages:send\"\n\n// Request Header\nContent-Type: application/json\nAuthorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****\npush-type:7\n\n// Request Body\n{\n  \"pushOptions\": {\n    \"ttl\": 1000,\n    \"biTag\": \"biTag\"\n  },\n  \"payload\": {\n    \"activityId\": 2,\n    \"operation\": 1,\n    \"event\": \"TAXI\",\n    \"status\": \"HEADING_TO_DESTINATION\", // 正在去往目的地\n    \"version\": 1,\n    \"activityData\": {\n      \"notificationData\": {\n        \"type\": 3,\n        \"contentTitle\": \"{{status}}\", // 正在去往目的地\n        \"contentText\": [\n          {\n            \"text\": \"距目的地\"\n          },\n          {\n            \"text\": \"7.2公里\",\n            \"foregroundColor\": \"#FF317AF7\"\n          },\n          {\n            \"text\": \" | 预计\"\n          },\n          {\n            \"text\": \"27分钟\",\n            \"foregroundColor\": \"#FF317AF7\"\n          }\n        ],\n        \"clickAction\": {\n          \"actionType\": 1,\n          \"action\": \"xxxxxx\"\n        },\n        \"richProgress\": {\n          \"type\": 0,\n          \"nodeIcons\": [\"icon1.png\", \"icon2.png\", \"icon3.png\"], // 取值为“/resources/rawfile”路径下的文件名\n          \"indicatorIcon\": \"taxi.png\", // 取值为“/resources/rawfile”路径下的文件名\n          \"progress\": 60,\n          \"indicatorType\": 1,\n          \"color\": \"#FF317AF7\",\n          \"bgColor\": \"#19000000\"\n        },\n        \"extend\": {\n          \"type\": 0\n        }\n      },\n      \"capsuleData\": {\n        \"type\": 1,\n        \"status\": 1,\n        \"icon\": \"icon.svg\", // 取值为“/resources/rawfile”路径下的文件名\n        \"bgColor\": \"#FF317AF7\",\n        \"title\": \"27分钟\",\n        \"content\": \"距目的地7.2公里\"\n      }\n    }\n  },\n  \"target\": {\n    \"token\": [\n      \"MAAALgE4G98BAAAAst************jq\"\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "行程结束，使用强调文本模板。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Request URL\nPOST \"https://push-api.cloud.huawei.com/v3/3158882***52863/messages:send\"\n\n// Request Header\nContent-Type: application/json\nAuthorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****\npush-type:7\n\n// Request Body\n{\n  \"pushOptions\": {\n    \"ttl\": 1000,\n    \"biTag\": \"biTag\"\n  },\n  \"payload\": {\n    \"activityId\": 2,\n    \"operation\": 1,\n    \"event\": \"TAXI\",\n    \"status\": \"COMPLETED\", // 行程结束\n    \"version\": 2,\n    \"activityData\": {\n      \"notificationData\": {\n        \"type\": 4,\n        \"contentTitle\": \"{{status}}，请支付\", // 行程结束，请支付\n        \"contentText\": [\n          {\n            \"text\": \"全程\"\n          },\n          {\n            \"text\": \"10公里\",\n            \"foregroundColor\": \"#FF317AF7\"\n          },\n          {\n            \"text\": \" | 耗时\"\n          },\n          {\n            \"text\": \"30分钟\",\n            \"foregroundColor\": \"#FF317AF7\"\n          }\n        ],\n        \"clickAction\": {\n          \"actionType\": 1,\n          \"action\": \"xxxxxx\"\n        },\n        \"singleTextBlock\": {\n          \"firstLine\": \"全程费用\",\n          \"secondLine\": \"35.2元\",\n          \"underlineColor\": \"#FF317AF7\"\n        },\n        \"descPic\": \"payment.png\", // 取值为“/resources/rawfile”路径下的文件名\n        \"extend\": {\n          \"type\": 0\n        }\n      },\n      \"capsuleData\": {\n        \"type\": 1,\n        \"status\": 1,\n        \"icon\": \"icon.svg\", // 取值为“/resources/rawfile”路径下的文件名\n        \"bgColor\": \"#FF317AF7\",\n        \"title\": \"待支付\",\n        \"content\": \"费用35.2元\"\n      }\n    }\n  },\n  \"target\": {\n    \"token\": [\n      \"MAAALgE4G98BAAAAst************jq\"\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "高铁火车场景event为train-1",
      children: "高铁/火车场景（event为TRAIN）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "列车运行中，使用左右文本模板。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Request URL\nPOST \"https://push-api.cloud.huawei.com/v3/3158882***52863/messages:send\"\n\n// Request Header\nContent-Type: application/json\nAuthorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****\npush-type:7\n\n// Request Body\n{\n  \"pushOptions\": {\n    \"ttl\": 1000,\n    \"biTag\": \"biTag\"\n  },\n  \"payload\": {\n    \"activityId\": 3,\n    \"operation\": 1,\n    \"event\": \"TRAIN\",\n    \"status\": \"HEADING_TO_DESTINATION\", // 列车运行中\n    \"version\": 1,\n    \"activityData\": {\n      \"notificationData\": {\n        \"keywords\": {\n          \"trainNo\": \"G1406\"\n        },\n        \"type\": 5,\n        \"contentTitle\": \"{{status}}\", // 列车运行中\n        \"contentText\": [\n          {\n            \"text\": \"车次：\"\n          },\n          {\n            \"text\": \"{{trainNo}}\", // G1406\n            \"foregroundColor\": \"#FF317AF7\"\n          }\n        ],\n        \"clickAction\": {\n          \"actionType\": 0\n        },\n        \"firstTextBlock\": {\n          \"firstLine\": \"13:00\",\n          \"secondLine\": \"上海虹桥\"\n        },\n        \"lastTextBlock\": {\n          \"firstLine\": \"14:20\",\n          \"secondLine\": \"南京南\"\n        },\n        \"displayHorizontalLine\": true,\n        \"spaceIcon\": \"space.png\", // 取值为“/resources/rawfile”路径下的文件名\n        \"extend\": {\n          \"type\": 3,\n          \"pic\": \"train.png\", // 取值为“/resources/rawfile”路径下的文件名\n          \"clickAction\": {\n            \"actionType\": 1,\n            \"action\": \"xxxxxxx\"\n          }\n        }\n      },\n      \"capsuleData\": {\n        \"type\": 1,\n        \"status\": 1,\n        \"icon\": \"icon.svg\", // 取值为“/resources/rawfile”路径下的文件名\n        \"bgColor\": \"#FF317AF7\",\n        \"title\": \"运行中\",\n        \"content\": \"预计14:20到达\"\n      }\n    }\n  },\n  \"target\": {\n    \"token\": [\n      \"MAAALgE4G98BAAAAst************jq\"\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "赛事比分场景event为score",
      children: "赛事比分场景（event为SCORE）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "推送赛事最新比分，使用赛事比分模板。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Request URL\nPOST \"https://push-api.cloud.huawei.com/v3/3158882***52863/messages:send\"\n\n// Request Header\nContent-Type: application/json\nAuthorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****\npush-type:7\n \n// Request Body\n{\n  \"pushOptions\": {\n    \"ttl\": 1000,\n    \"biTag\": \"biTag\"\n  },\n  \"payload\": {\n    \"activityId\": 4,\n    \"operation\": 1,\n    \"event\": \"SCORE\",\n    \"activityData\": {\n      \"notificationData\": {\n        \"type\": 7,\n        \"contentTitle\": \"第四节比赛中\",\n        \"contentText\": [\n          {\n            \"text\": \"XX\",\n            \"foregroundColor\": \"#FF317AF7\"\n          },\n          {\n            \"text\": \" VS \"\n          },\n          {\n            \"text\": \"XX\",\n            \"foregroundColor\": \"#FF317AF7\"\n          },\n          {\n            \"text\": \" | 小组赛第五场\"\n          }\n        ],\n         \"game\": {\n            \"host\": {\n              \"icon\":\"host.png\", // 取值为“/resources/rawfile”路径下的文件名\n              \"name\": \"队名A\",\n              \"score\": \"110\"\n            },\n            \"guest\": {\n              \"icon\":\"guest.png\", // 取值为“/resources/rawfile”路径下的文件名\n              \"name\": \"队名B\",\n              \"score\": \"102\"\n            },\n            \"competition\": {\n              \"desc\": \"Q4\",\n              \"time\":\"02:16\"\n            }\n          },\n        \"displayHorizontalLine\": true,\n        \"clickAction\": {\n          \"actionType\": 1,\n          \"action\": \"xxxxxxx\"\n        }\n      },\n      \"capsuleData\": {\n        \"type\": 1,\n        \"status\": 1,\n        \"icon\": \"icon.svg\", // 取值为“/resources/rawfile”路径下的文件名\n        \"bgColor\": \"#FF317AF7\",\n        \"title\": \"110:102\",\n        \"content\": \"第四节比赛中\"\n      }\n    }\n  },\n  \"target\": {\n    \"token\": [\"MAAALgE4G98BAAAAst************jq\"]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用内通话消息",
      children: "应用内通话消息"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Request URL\nPOST \"https://push-api.cloud.huawei.com/v3/3158882***52863/messages:send\"\n\n// Request Header\nContent-Type: application/json\nAuthorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****\npush-type:10\n \n// Request Body\n{\n  \"pushOptions\": {\n    \"biTag\": \"biTag\",\n    \"ttl\": 30\n  },\n  \"payload\": {\n    \"extraData\": \"传递给应用的数据\"\n  },\n  \"target\": {\n    \"token\": [\n      \"MAAALgE4G98BAAAAst************jq\"\n    ]\n  }\n}\n"
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