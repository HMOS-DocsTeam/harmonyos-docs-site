"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["100420"], {
160652(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_location_api_location_arkts_errcode_errorcode_geolocationmanager_errorcode_geolocationmanager_md_cd6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-location-api-location-arkts-errcode-errorcode-geolocationmanager-errorcode-geolocationmanager-md-cd6.json
var site_docs_ref_location_api_location_arkts_errcode_errorcode_geolocationmanager_errorcode_geolocationmanager_md_cd6_namespaceObject = JSON.parse('{"id":"location-api/location-arkts-errcode/errorcode-geolocationmanager/errorcode-geolocationmanager","title":"位置服务错误码","description":"以下仅介绍本模块特有错误码，通用错误码请参考通用错误码说明文档。","source":"@site/docs-ref/location-api/location-arkts-errcode/errorcode-geolocationmanager/errorcode-geolocationmanager.md","sourceDirName":"location-api/location-arkts-errcode/errorcode-geolocationmanager","slug":"/location-api/location-arkts-errcode/errorcode-geolocationmanager/errorcode-geolocationmanager","permalink":"/harmonyos-docs-site/ref/location-api/location-arkts-errcode/errorcode-geolocationmanager/errorcode-geolocationmanager","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"位置服务错误码","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-geolocationmanager","kit":"应用服务","last_updated":"2026-04-22","slug":"errorcode-geolocationmanager"},"sidebar":"ref","previous":{"title":"Location_Info","permalink":"/harmonyos-docs-site/ref/location-api/location-c/location-struct/capi-location-location-info/capi-location-location-info"},"next":{"title":"模块描述","permalink":"/harmonyos-docs-site/ref/map-api/map-arkts/map-map/map-module-desc/map-module-desc"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/location-api/location-arkts-errcode/errorcode-geolocationmanager/errorcode-geolocationmanager.md


const frontMatter = {
	title: '位置服务错误码',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-geolocationmanager',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'errorcode-geolocationmanager'
};
const contentTitle = '位置服务错误码';

const assets = {

};



const toc = [{
  "value": "3301000 位置服务不可用",
  "id": "3301000-位置服务不可用",
  "level": 2
}, {
  "value": "3301100 位置功能的开关未开启导致功能失败",
  "id": "3301100-位置功能的开关未开启导致功能失败",
  "level": 2
}, {
  "value": "3301200 定位失败，未获取到定位结果",
  "id": "3301200-定位失败未获取到定位结果",
  "level": 2
}, {
  "value": "1. 网络不可用导致定位失败",
  "id": "1-网络不可用导致定位失败",
  "level": 3
}, {
  "value": "2. 定位结果不满足精度要求导致定位超时",
  "id": "2-定位结果不满足精度要求导致定位超时",
  "level": 3
}, {
  "value": "3. 获取缓存位置失败",
  "id": "3-获取缓存位置失败",
  "level": 3
}, {
  "value": "4. 其他原因导致定位失败",
  "id": "4-其他原因导致定位失败",
  "level": 3
}, {
  "value": "3301300 逆地理编码查询失败",
  "id": "3301300-逆地理编码查询失败",
  "level": 2
}, {
  "value": "3301400 地理编码查询失败",
  "id": "3301400-地理编码查询失败",
  "level": 2
}, {
  "value": "3301500 区域信息（包含国家码）查询失败",
  "id": "3301500-区域信息包含国家码查询失败",
  "level": 2
}, {
  "value": "3301600 地理围栏操作失败",
  "id": "3301600-地理围栏操作失败",
  "level": 2
}, {
  "value": "3301601 地理围栏个数超过最大值限制导致添加围栏失败",
  "id": "3301601-地理围栏个数超过最大值限制导致添加围栏失败",
  "level": 2
}, {
  "value": "3301602 地理围栏ID错误导致删除围栏失败",
  "id": "3301602-地理围栏id错误导致删除围栏失败",
  "level": 2
}, {
  "value": "3301700 请求无响应",
  "id": "3301700-请求无响应",
  "level": 2
}, {
  "value": "3301800 启动Wi-Fi或蓝牙扫描失败",
  "id": "3301800-启动wi-fi或蓝牙扫描失败",
  "level": 2
}, {
  "value": "3301900 由于Wi-Fi未连接导致获取Wi-Fi热点的MAC地址失败",
  "id": "3301900-由于wi-fi未连接导致获取wi-fi热点的mac地址失败",
  "level": 2
}, {
  "value": "3501100 由于位置功能开关未打开导致添加beacon围栏失败",
  "id": "3501100-由于位置功能开关未打开导致添加beacon围栏失败",
  "level": 2
}, {
  "value": "3501101 由于蓝牙功能开关未打开导致添加beacon围栏失败",
  "id": "3501101-由于蓝牙功能开关未打开导致添加beacon围栏失败",
  "level": 2
}, {
  "value": "3501601 由于beacon围栏个数超过最大值限制导致添加围栏失败",
  "id": "3501601-由于beacon围栏个数超过最大值限制导致添加围栏失败",
  "level": 2
}, {
  "value": "3501602 由于beacon围栏信息不正确导致删除围栏失败",
  "id": "3501602-由于beacon围栏信息不正确导致删除围栏失败",
  "level": 2
}, {
  "value": "3501603 由于存在重复的beacon围栏导致添加围栏失败",
  "id": "3501603-由于存在重复的beacon围栏导致添加围栏失败",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "位置服务错误码",
        children: "位置服务错误码"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(127508)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下仅介绍本模块特有错误码，通用错误码请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码说明文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3301000-位置服务不可用",
      children: "3301000 位置服务不可用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The location service is unavailable."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "位置服务不可用，位置服务相关的接口无法调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.位置服务启动异常，导致应用和位置服务子系统通信失败，导致位置服务不可用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.GNSS芯片初始化失败导致GNSS定位功能失效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.网络定位服务异常，导致网络定位功能失效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议增加重试机制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3301100-位置功能的开关未开启导致功能失败",
      children: "3301100 位置功能的开关未开启导致功能失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The location switch is off."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "位置功能的开关未开启导致功能失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "位置功能的开关未开启，导致持续定位，单次定位等基本功能不可用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请提示用户开启位置功能的开关。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3301200-定位失败未获取到定位结果",
      children: "3301200 定位失败，未获取到定位结果"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-网络不可用导致定位失败",
      children: "1. 网络不可用导致定位失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The network locating is failed because the network cannot be accessed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无法访问网络导致网络定位失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前设备无法访问网络。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请检查设备是否能联网，设备是否插入SIM卡，Wi-Fi开关是否开启等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-定位结果不满足精度要求导致定位超时",
      children: "2. 定位结果不满足精度要求导致定位超时"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The positioning result does not meet the precision requirement (maxAccuracy) in the positioning request parameters."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定位结果不满足定位请求参数中的精度要求(maxAccuracy)，导致定位超时。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["定位请求参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/location-api/location-arkts/js-apis-geolocationmanager/js-apis-geolocationmanager#locationrequest",
        children: "LocationRequest"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/location-api/location-arkts/js-apis-geolocationmanager/js-apis-geolocationmanager#currentlocationrequest",
        children: "CurrentLocationRequest"
      }), "中的精度要求(maxAccuracy)值设定过小。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请将定位请求参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/location-api/location-arkts/js-apis-geolocationmanager/js-apis-geolocationmanager#locationrequest",
        children: "LocationRequest"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/location-api/location-arkts/js-apis-geolocationmanager/js-apis-geolocationmanager#currentlocationrequest",
        children: "CurrentLocationRequest"
      }), "中的精度要求(maxAccuracy)适当放宽，可参考如下场景建议："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/location-api/location-arkts/js-apis-geolocationmanager/js-apis-geolocationmanager#locationrequestscenario",
          children: "scenario"
        }), "为NAVIGATION/TRAJECTORY_TRACKING/CAR_HAILING，或者", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/location-api/location-arkts/js-apis-geolocationmanager/js-apis-geolocationmanager#locationrequestpriority",
          children: "priority"
        }), "为ACCURACY时，建议设置maxAccuracy为大于10的值。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/location-api/location-arkts/js-apis-geolocationmanager/js-apis-geolocationmanager#locationrequestscenario",
          children: "scenario"
        }), "为DAILY_LIFE_SERVICE/NO_POWER，或者", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/location-api/location-arkts/js-apis-geolocationmanager/js-apis-geolocationmanager#locationrequestpriority",
          children: "priority"
        }), "为LOW_POWER/FIRST_FIX时，建议设置maxAccuracy为大于100的值。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-获取缓存位置失败",
      children: "3. 获取缓存位置失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The system does not have a cache location."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统无缓存位置，导致获取上一次位置失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统无缓存位置情况下，尝试获取缓存位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统未提前将位置信息进行缓存的情况下，需使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/location-api/location-arkts/js-apis-geolocationmanager/js-apis-geolocationmanager#geolocationmanagergetcurrentlocation",
        children: "getCurrentLocation"
      }), "接口获取实时位置信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-其他原因导致定位失败",
      children: "4. 其他原因导致定位失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to obtain the geographical location."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定位失败，未获取到定位结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GNSS信号弱，导致定位超时。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统时间设置错误，导致获取位置失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请移动至开阔地带再发起定位。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请在“日期和时间”页面勾选自动设置。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3301300-逆地理编码查询失败",
      children: "3301300 逆地理编码查询失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reverse geocoding query failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "逆地理编码查询失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.数据网络比较卡顿，导致端侧的请求发送失败或者云端的结果未返回到端侧。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.由于X86模拟器不支持逆地理编码功能，导致使用X86模拟器调试时逆地理编码查询失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.网络原因请尝试重试逆地理编码查询功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.X86模拟器原因建议在真机进行验证。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3301400-地理编码查询失败",
      children: "3301400 地理编码查询失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Geocoding query failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "地理编码查询失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.请求参数有误，或根据参数无法查到结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.数据网络比较卡顿，导致端侧的请求发送失败或者云端的结果未返回到端侧。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请检查请求参数或检查网络状态后重试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3301500-区域信息包含国家码查询失败",
      children: "3301500 区域信息（包含国家码）查询失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to query the area information."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "区域信息（包含国家码）查询失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "未查询到正确的区域信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议增加重试机制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3301600-地理围栏操作失败",
      children: "3301600 地理围栏操作失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to operate the geofence."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "地理围栏操作失败，包含添加，删除，暂停和恢复等操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.GNSS芯片不支持地理围栏功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.底层业务逻辑异常导致操作地理围栏失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.增加SysCap校验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.建议增加重试机制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3301601-地理围栏个数超过最大值限制导致添加围栏失败",
      children: "3301601 地理围栏个数超过最大值限制导致添加围栏失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The number of geofences exceeds the maximum."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "地理围栏个数超过最大限制导致添加围栏失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统中存在的地理围栏个数超过最大值(1000)限制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请在删除多余围栏之后再添加新的围栏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3301602-地理围栏id错误导致删除围栏失败",
      children: "3301602 地理围栏ID错误导致删除围栏失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to delete a geofence due to an incorrect ID."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "地理围栏ID错误导致删除围栏失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "APP调用删除地理围栏接口时传入的围栏ID错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请在调用删除地理围栏接口时传入正确的围栏ID。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3301700-请求无响应",
      children: "3301700 请求无响应"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "No response to the request."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "某些异步请求需要用户点击按钮确认，或者需要GNSS芯片和网络服务器响应，这些场景下未收到响应导致业务失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.用户未点击按钮确认。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.GNSS芯片未响应。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.网络服务器未响应。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议增加重试机制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3301800-启动wi-fi或蓝牙扫描失败",
      children: "3301800 启动Wi-Fi或蓝牙扫描失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to start Wi-Fi or Bluetooth scanning."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在订阅Wi-Fi蓝牙扫描信息时，可能会先启动Wi-Fi蓝牙扫描，如果启动扫描失败则会返回错误码给APP。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.Wi-Fi或蓝牙服务内部错误导致启动扫描失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.低电量场景下，受功耗管控，导致无法发起扫描。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.Wi-Fi或蓝牙开关未开启。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重新关闭开启Wi-Fi或蓝牙开关。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3301900-由于wi-fi未连接导致获取wi-fi热点的mac地址失败",
      children: "3301900 由于Wi-Fi未连接导致获取Wi-Fi热点的MAC地址失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to obtain the hotspot MAC address because the Wi-Fi is not connected."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备未连接Wi-Fi热点或路由器，导致获取Wi-Fi热点或路由器的MAC地址失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.Wi-Fi开关未开启。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.开启Wi-Fi开关但未连接热点或路由器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.请打开Wi-Fi开关。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.请连接路由器或者热点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3501100-由于位置功能开关未打开导致添加beacon围栏失败",
      children: "3501100 由于位置功能开关未打开导致添加beacon围栏失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to add a beacon fence because the location switch is off."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备未打开位置功能开关，导致添加beacon围栏失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "位置功能开关未开启。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请提示用户开启位置功能的开关。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3501101-由于蓝牙功能开关未打开导致添加beacon围栏失败",
      children: "3501101 由于蓝牙功能开关未打开导致添加beacon围栏失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to add a beacon fence because the bluetooth switch is off."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备未打开蓝牙功能开关，导致添加beacon围栏失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "蓝牙功能开关未开启。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请提示用户开启蓝牙功能开关。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3501601-由于beacon围栏个数超过最大值限制导致添加围栏失败",
      children: "3501601 由于beacon围栏个数超过最大值限制导致添加围栏失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The number of beacon fence exceeds the maximum."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "beacon围栏个数超过最大值限制导致添加围栏失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统中存在的beacon围栏个数超过最大值(16)限制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请在删除多余围栏之后再添加新的围栏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3501602-由于beacon围栏信息不正确导致删除围栏失败",
      children: "3501602 由于beacon围栏信息不正确导致删除围栏失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to delete the fence due to incorrect beacon fence information."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "beacon围栏信息不正确导致删除围栏失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "待删除围栏信息不正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请在调用删除beacon围栏接口时传入正确的围栏信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3501603-由于存在重复的beacon围栏导致添加围栏失败",
      children: "3501603 由于存在重复的beacon围栏导致添加围栏失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Duplicate beacon fence information."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "存在重复的beacon围栏导致添加围栏失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统中已存在相同的beacon围栏请求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请在删除之前围栏之后再添加新的围栏。"
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
127508(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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