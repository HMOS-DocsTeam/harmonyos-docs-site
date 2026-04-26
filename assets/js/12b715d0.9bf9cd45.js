"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["335198"], {
289888(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_security_kit_guide_devicesecurity_deviceverify_develop_devicesecurity_deviceverify_develop_md_12b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-security-kit-guide-devicesecurity-deviceverify-develop-devicesecurity-deviceverify-develop-md-12b.json
var site_docs_system_security_device_security_kit_guide_devicesecurity_deviceverify_develop_devicesecurity_deviceverify_develop_md_12b_namespaceObject = JSON.parse('{"id":"system-security/device-security-kit-guide/devicesecurity-deviceverify-develop/devicesecurity-deviceverify-develop","title":"应用设备状态检测","description":"场景介绍","source":"@site/docs/system-security/device-security-kit-guide/devicesecurity-deviceverify-develop/devicesecurity-deviceverify-develop.md","sourceDirName":"system-security/device-security-kit-guide/devicesecurity-deviceverify-develop","slug":"/system-security/device-security-kit-guide/devicesecurity-deviceverify-develop/","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-deviceverify-develop/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"应用设备状态检测","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-deviceverify-develop","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"（可选）申请使用受限权限","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-prepare/devicesecurity-prepare-declarepermissions/"},"next":{"title":"系统完整性检测","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-safetydetect-develop/devicesecurity-sysintegrity-check/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-security-kit-guide/devicesecurity-deviceverify-develop/devicesecurity-deviceverify-develop.md


const frontMatter = {
	title: '应用设备状态检测',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-deviceverify-develop',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '应用设备状态检测';

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
  "value": "业务流程",
  "id": "业务流程",
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
  "value": "客户端开发",
  "id": "客户端开发",
  "level": 3
}, {
  "value": "服务端开发",
  "id": "服务端开发",
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
        id: "应用设备状态检测",
        children: "应用设备状态检测"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用通过调用Device Security Kit的getDeviceToken接口获取到DeviceToken，应用的服务器使用DeviceToken到Device Security服务器查询和管理应用在该设备的使用状态，应用在无法获取到持久化设备标识的情况下也可以对设备的应用状态进行记录和查询。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用可以根据Device Security服务器返回的使用状态，判断应用是否在该设备上首次安装，或在该设备上用户是否已获取了优惠券等，以支撑业务进行新用户营销活动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用设备状态检测（DeviceVerify）能力不支持模拟器。支持设备：Phone、Tablet、PC/2in1、Wearable，从5.1.1(19)版本开始，新增支持设备：TV。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(629046)/* ["default"] */.A) + "",
        width: "1072",
        height: "439"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "流程说明："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者应用调用Device Security Kit的getDeviceToken接口获取DeviceToken。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Device Security Kit返回DeviceToken。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者应用在业务请求（如领取优惠券请求）中把DeviceToken发送到应用的服务器。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用服务器发送DeviceVerify Rest请求到Device Security服务器，对该设备的标记状态（如是否已领取优惠券）进行查询（getDeviceStatus接口）和更新（setDeviceStatus接口）等操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(195723)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Device Security服务器为每个设备的每个应用提供了2个bit的状态存储和查询能力，这2个bit的具体含义由应用自行定义。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如，可以使用bit 0来标识设备是否领取过新机礼包，bit0=false表示未领取，bit0=true表示已领取。用户在设备上领取新机礼包，应用服务器到Device Security服务器查询设备标记状态后，可根据bit0取值做相应处理。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果bit0=true，则表示该设备已经领取过了新机礼包，应用服务器可拒绝该设备继续领取新机礼包。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果bit0=false，则表示该设备未领取过新机礼包，应用服务器可向该设备的用户颁发新机礼包，并调用Device Security服务器的更新设备标记状态接口修改bit0为true。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Device Security服务器返回DeviceVerify响应。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用服务器根据Device Security服务器返回的响应进行相应的业务处理。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用服务器返回业务响应。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是DeviceVerify相关接口，包括ArkTS API和REST API，更多接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-deviceverify-api/devicesecurity-deviceverify-api",
        children: "API参考"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-deviceverify-api/devicesecurity-deviceverify-api#getdevicetoken",
              children: "getDeviceToken(): Promise<string>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取本设备的DeviceToken"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-restapi/devicesecurity-deviceverify-checkdevicetoken/devicesecurity-deviceverify-checkdevicetoken",
              children: "checkDeviceToken"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "验证deviceToken"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-restapi/devicesecurity-deviceverify-getdevicestatus/devicesecurity-deviceverify-getdevicestatus",
              children: "getDeviceStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询设备标记状态"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-restapi/devicesecurity-deviceverify-updatedevicestatus/devicesecurity-deviceverify-updatedevicestatus",
              children: "setDeviceStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新设备标记状态"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-restapi/devicesecurity-deviceverify-deletedevicestatus/devicesecurity-deviceverify-deletedevicestatus",
              children: "delDeviceStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除设备标记状态"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(439073)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当getDeviceToken接口由于网络不稳定或其他原因无法获取到DeviceToken时，应用需要考虑异常处理方案，避免出现应用依赖DeviceToken的基本功能不可用。例如应用重新调用getDeviceToken接口或采用其他风控因子进行判断。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "客户端开发",
      children: "客户端开发"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(734205)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请确保已打开", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/device-security-kit-guide/devicesecurity-prepare/devicesecurity-deviceverify-activateservice",
        children: "“应用设备状态检测”开关"
      }), "并", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-debug-profile-0000002248181278",
        children: "申请调试Profile"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入Device Security Kit模块及相关公共模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { deviceCertificate } from '@kit.DeviceSecurityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取设备deviceToken信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const TAG = \"DeviceCertificateJsTest\";\n\n// 请求deviceToken，并处理结果\ntry {\n  deviceCertificate.getDeviceToken().then((token) => {\n      hilog.info(0x0000, TAG, 'Succeeded in executing getDeviceToken');\n      // 开发者处理deviceToken\n  }).catch((err: BusinessError) => {\n    hilog.error(0x0000, TAG, 'getDeviceToken failed!  %{public}d %{public}s', err.code, err.message);\n  });\n} catch(err) {\n  let error: BusinessError = err as BusinessError;\n  hilog.error(0x0000, TAG, 'getDeviceToken failed!  %{public}d %{public}s', error.code, error.message);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(547063)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "deviceToken由Device Security Kit加密生成，每次调用生成Token均不一样，有效期1小时。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "服务端开发",
      children: "服务端开发"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取凭证Token，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/device-security-kit-guide/devicesecurity-prepare/devicesecurity-deviceverify-token",
            children: "基于服务账号生成鉴权令牌"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可分别调用checkDeviceToken、getDeviceStatus、setDeviceStatus、delDeviceStatus接口，实现deviceToken验证、查询设备标记状态、更新设备标记状态及删除设备标记状态功能。更多接口信息请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-deviceverify-api/devicesecurity-deviceverify-api",
            children: "REST API"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "样例代码："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import java.io.BufferedReader;\nimport java.io.IOException;\nimport java.io.InputStream;\nimport java.io.InputStreamReader;\nimport java.io.OutputStream;\nimport java.net.HttpURLConnection;\nimport java.net.URL;\n\nimport com.alibaba.fastjson.JSONObject;\n\npublic class DeviceTokenServer {\n    // 使用应用设备状态检测功能获取的设备deviceToken\n    static String deviceToken = \"aes-gcm.gouLVEalfJxRLxt+3Gxh/orDAG9kDbkeFydkxGrDOHVJ3KEhiSDhIeW+/KH0ErqVxZ0vfkgtapaMu3yc0IND+lzC8ZH86NHxW+/GsqxYhvZ650TWUkanwdlZwYD0HPZ/KFnDPgIvGLvvWz1BdoPOOiFy5BuCQfGVNxl9OBTd7wsiJpl8kKywMRg/k1x61/8IpaH4F6tPrMV/Fv4N/WLfSHlC9AkB1ekZz4hxambDaXP8aXz59FYWItTl7tBOV09+JKnFqD0dB5ZmXjUhVLRKpYeGH8dPWG2gOmEksY6CsXvWBul+5HF76myfUeSvrWfD7Ee3+5Uuld3v+s8W+aFJkdUo8GSCF4xbiA+01BKnq0DIh0EKW/VJAQHjo/P/X/6jMwoDnbF7NWPmh827LHKQMIsN46zfke7qpdBsYpidKNxlXIb1azyAhD/izf5KQwkzwlVTctIvkUNH9XjTh1I6xb8yYb7TjZ7tnMGg2lWizNsejIcwAPqTTyXXupL5mPc8SwsZ424mDQhf1pCfacbZFaew0jWUC5ZQ2B8CiBeX\";\n    // 基于服务账号生成的鉴权令牌\n    static String authorization = \"Bearer eyJraWQiOiI5YTU5ZGRkZDZlYzY0MTgyYmUwMTc2MDNjZDU1YjEwNCIsInR5cCI6IkpXVCIsImFsZyI6IlBTMjU2In0.eyJhdWQiOiJodHRwczovL29hdXRoLWxvZ2luLmNsb3VkLmh1YXdlaS5jb20vb2F1dGgyL3YzL3Rva2VuIiwiaXNzIjoiMTE0MDIzMzQ1IiwiZXhwIjoxNzU0NDQ4NDU2LCJpYXQiOjE3NTQ0NDQ4NTZ9.cJEiLM53QBTSxzPjDAqK-HeteSv_qWxnAuEiwaN_udLQz78QZPcD54RFWSOqE459B0Y78hEL1-2eQlcCjbGn0OI2AQbwTwYzoRbLftAEyP5V9Juv1A-cfR8MoVapVdZ3pA9Jg6B5cBjcQLax-GTUJjevgI4PyTxQCIhLa-kaQq_h-KOnpcWlVUx2weLRAcGs4Tr3wYqdLnSPE7Hp_44C3S69dSoXoP8HL6-2L4aJzzvNn7uYoRiZAoCZoarJNHi7d8h9JEJ2K5vmaYV_lJ9l0_G4RDjpEmtCPOEkXLPIvjh5fwEBPyMZiUJqHyqTkdw8AjjgIaFe0wG9wCZk4sEo9GOruuy9tN6mEccFAEKbSf28gpUowWC23uKQPIYb9sdzrN8D3hpalrN5CDh1dv80wlhLxXeJOWWnfjCqYhA0m17UFC4xEhno-M52dEb4BODPsw-96xx02GX8_VqDDjjUmXEr6lwj4yLE_5feR1QFQS2NhC11Py4AzrsEPb9maFqR-bOUO2SfLdD1EjvMx2p-tELosFH8DmvwtbjNVYDN0zGEed150qhMtkDG9DUwT0dL3q_ikRq73syB9WbQrlpWeJAWBmazkb0EoSf24UO2rRjcZ0hGmgFIIH7AzHgw4Ok2ijCJ5uVIY59DUsXXUIBIH7tMyNUjrdZG0_ctDORrk_s\";\n    // Hap应用的包名\n    static String bundleName = \"com.huawei.myapplication.shoubiao412\";\n\n    public static void main(String[] args) throws IOException {\n        checkDeviceToken();\n        setDeviceStatus();\n        getDeviceStatus();\n        delDeviceStatus();\n    }\n    public static void checkDeviceToken() throws IOException {\n        // 请求checkDeviceToken接口的地址\n        String url = \"https://connect-api.cloud.huawei.com/api/rms/v1/deviceVerify/checkDeviceToken\";\n        URL obj = new URL(url);\n        HttpURLConnection con = (HttpURLConnection) obj.openConnection();\n        createRequestHeader(con);\n        JSONObject postBody = createRequestBody();\n        sendRequestAndReadResponse(con, postBody);\n    }\n    public static void getDeviceStatus() throws IOException {\n        // 请求getDeviceStatus接口的地址\n        String url = \"https://connect-api.cloud.huawei.com/api/rms/v1/deviceVerify/getDeviceStatus\";\n        URL obj = new URL(url);\n        HttpURLConnection con = (HttpURLConnection) obj.openConnection();\n        createRequestHeader(con);\n        JSONObject postBody = createRequestBodyWithMode();\n        sendRequestAndReadResponse(con, postBody);\n    }\n    public static void setDeviceStatus() throws IOException {\n        // 请求setDeviceStatus接口的地址\n        String url = \"https://connect-api.cloud.huawei.com/api/rms/v1/deviceVerify/setDeviceStatus\";\n        URL obj = new URL(url);\n        HttpURLConnection con = (HttpURLConnection) obj.openConnection();\n        createRequestHeader(con);\n        JSONObject postBody = createRequestBodyWithBit();\n        sendRequestAndReadResponse(con, postBody);\n    }\n    public static void delDeviceStatus() throws IOException {\n        // 请求delDeviceStatus接口的地址\n        String url = \"https://connect-api.cloud.huawei.com/api/rms/v1/deviceVerify/delDeviceStatus\";\n        URL obj = new URL(url);\n        HttpURLConnection con = (HttpURLConnection) obj.openConnection();\n        createRequestHeader(con);\n        JSONObject postBody = createRequestBodyWithMode();\n        sendRequestAndReadResponse(con, postBody);\n    }\n    public static JSONObject createRequestBody() {\n        // 创建请求体\n        JSONObject data = new JSONObject();\n        data.put(\"deviceToken\", deviceToken);\n        // 可选，根据需要添加\n        // data.put(\"transactionId\", \"xxx\");\n        // 应用服务器上的UTC时间\n        data.put(\"timestamp\", 1704038400000L);\n        JSONObject postBody = new JSONObject();\n        postBody.put(\"data\", data);\n        return postBody;\n    }\n    public static JSONObject createRequestBodyWithMode() {\n        // 创建请求体\n        JSONObject data = new JSONObject();\n        // 设备标记状态的粒度。取值：1：应用级 2：开发者级\n        data.put(\"mode\", 1);\n        data.put(\"deviceToken\", deviceToken);\n        // 可选，根据需要添加\n        // data.put(\"transactionId\", \"xxx\");\n        // 应用服务器上的UTC时间\n        data.put(\"timestamp\", 1704038400000L);\n        JSONObject postBody = new JSONObject();\n        postBody.put(\"data\", data);\n        return postBody;\n    }\n    public static JSONObject createRequestBodyWithBit() {\n        // 创建请求体\n        JSONObject data = new JSONObject();\n        // 设备标记状态的粒度。取值：1：应用级 2：开发者级\n        data.put(\"mode\", 1);\n        data.put(\"deviceToken\", deviceToken);\n        // 可选，根据需要添加\n        // data.put(\"transactionId\", \"xxx\");\n        // 应用服务器上的UTC时间\n        data.put(\"timestamp\", 1704038400000L);\n        // 设备标记状态的第一位数据\n        data.put(\"bit0\", 1);\n        // 设备标记状态的第二位数据\n        data.put(\"bit1\", 0);\n        JSONObject postBody = new JSONObject();\n        postBody.put(\"data\", data);\n        return postBody;\n    }\n    public static void createRequestHeader(HttpURLConnection con) throws IOException {\n        con.setRequestMethod(\"POST\");\n        con.setDoOutput(true);\n\n        // 设置请求头\n        con.setRequestProperty(\"Content-Type\", \"application/json;charset=utf-8\");\n        con.setRequestProperty(\"Authorization\", authorization);\n        // 设置bundleName\n        con.setRequestProperty(\"bundleName\", bundleName);\n    }\n    public static void sendRequestAndReadResponse(HttpURLConnection con, JSONObject postBody) throws IOException {\n        try (OutputStream os = con.getOutputStream()) {\n            byte[] input = postBody.toString().getBytes(\"utf-8\");\n            os.write(input, 0, input.length);\n        }\n        // 读取响应码\n        int responseCode = con.getResponseCode();\n        System.out.println(\"Response Code: \" + responseCode);\n\n        InputStream stream;\n        if (responseCode >= 200 && responseCode < 300) {\n            stream = con.getInputStream();\n        } else {\n            // 获取错误信息\n            stream = con.getErrorStream();\n        }\n        // 读取响应内容（无论是成功还是失败）\n        StringBuilder response = new StringBuilder();\n        String line;\n        try (BufferedReader br = new BufferedReader(new InputStreamReader(stream, \"utf-8\"))) {\n            while ((line = br.readLine()) != null) {\n                response.append(line);\n            }\n        } catch (Exception e) {\n            System.out.println(e);\n        }\n        System.out.println(\"Response Content: \" + response.toString());\n    }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(104854)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备标记状态记录的存储期限为2年，存储期限从lastUpdateTime（最后一次更新时间）开始计算。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者可以根据getDeviceStatus响应中的lastUpdateTime字段判断设备标记状态的有效期，例如开发者在5月份和6月份分别开展2个不同的优惠活动，可以根据lastUpdateTime字段判断用户已参加的优惠活动，比如lastUpdateTime为5月份，则表示用户参加了5月份的优惠活动。"
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
629046(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478385-dc83955710f97319d2642dc8bbc51a35.png");

},
195723(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
104854(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
439073(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
734205(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
547063(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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