"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["813250"], {
156930(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_remote_communication_kit_guide_remote_communication_netcom_remote_communication_customhttp_remote_communication_customconfig_remote_communication_customsecurityconfig_remote_communication_customsecurityconfig_md_039_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-remote-communication-kit-guide-remote-communication-netcom-remote-communication-customhttp-remote-communication-customconfig-remote-communication-customsecurityconfig-remote-communication-customsecurityconfig-md-039.json
var site_docs_system_network_remote_communication_kit_guide_remote_communication_netcom_remote_communication_customhttp_remote_communication_customconfig_remote_communication_customsecurityconfig_remote_communication_customsecurityconfig_md_039_namespaceObject = JSON.parse('{"id":"system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-customconfig/remote-communication-customsecurityconfig/remote-communication-customsecurityconfig","title":"SecurityConfiguration：定制安全传输行为","description":"场景介绍","source":"@site/docs/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-customconfig/remote-communication-customsecurityconfig/remote-communication-customsecurityconfig.md","sourceDirName":"system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-customconfig/remote-communication-customsecurityconfig","slug":"/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-customconfig/remote-communication-customsecurityconfig/","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-customconfig/remote-communication-customsecurityconfig/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"SecurityConfiguration：定制安全传输行为","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-customsecurityconfig","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ProxyConfiguration：定制代理","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-customconfig/remote-communication-customproxyconfig/"},"next":{"title":"ProcessingConfiguration：定制处理行为","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-customconfig/remote-communication-customprocessconfig/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-customconfig/remote-communication-customsecurityconfig/remote-communication-customsecurityconfig.md


const frontMatter = {
	title: 'SecurityConfiguration：定制安全传输行为',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-customsecurityconfig',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = 'SecurityConfiguration：定制安全传输行为';

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
  "value": "客户端校验服务端证书",
  "id": "客户端校验服务端证书",
  "level": 2
}, {
  "value": "1. 使用系统默认证书",
  "id": "1-使用系统默认证书",
  "level": 3
}, {
  "value": "2. 跳过证书校验",
  "id": "2-跳过证书校验",
  "level": 3
}, {
  "value": "3. 使用字符串指定证书内容",
  "id": "3-使用字符串指定证书内容",
  "level": 3
}, {
  "value": "4. 使用二进制指定证书内容",
  "id": "4-使用二进制指定证书内容",
  "level": 3
}, {
  "value": "5. 使用文件指定证书内容",
  "id": "5-使用文件指定证书内容",
  "level": 3
}, {
  "value": "6. 使用文件目录指定证书。",
  "id": "6-使用文件目录指定证书",
  "level": 3
}, {
  "value": "7. 自定义证书校验",
  "id": "7-自定义证书校验",
  "level": 3
}, {
  "value": "服务器校验客户端证书",
  "id": "服务器校验客户端证书",
  "level": 2
}, {
  "value": "1. PEM证书",
  "id": "1-pem证书",
  "level": 3
}, {
  "value": "2. DER证书",
  "id": "2-der证书",
  "level": 3
}, {
  "value": "3. P12证书",
  "id": "3-p12证书",
  "level": 3
}, {
  "value": "证书锁定",
  "id": "证书锁定",
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
        id: "securityconfiguration定制安全传输行为",
        children: "SecurityConfiguration：定制安全传输行为"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在软件开发中，安全是非常重要的一环。Remote Communication Kit提供的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#securityconfiguration",
        children: "SecurityConfiguration"
      }), "是一个用于定制安全传输行为的工具，能够帮助开发者更好地保护其应用程序。通过合理的配置和使用，可以显著降低应用程序遭受攻击的风险。下面将详细说明如何使用证书校验来增强安全性。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "证书校验方式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可以配置的参数"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "remoteValidation（客户端校验服务端证书）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'system'：使用系统默认证书。  'skip'：跳过证书校验。  CertificateAuthority：通过content指定证书内容，filePath指定证书文件路径，folderPath指定证书目录。  ValidationCallback：自定义证书。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificate（服务端校验客户端证书）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ClientCertificate（客户端证书校验）：通过content指定证书内容，filePath指定证书文件路径，type指定证书类型，并通过key和keyPassword分别指定私钥及其密码。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定制安全传输行为能力支持Phone、2in1、Tablet、Wearable设备。并且从5.1.1(19)开始，新增支持TV设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "客户端校验服务端证书",
      children: "客户端校验服务端证书"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-使用系统默认证书",
      children: "1. 使用系统默认证书"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入需要的模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在remoteValidation中配置'system'时，将使用系统中默认的CA。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function TestRcp() {\n  const session = rcp.createSession();\n  const request = new rcp.Request('https://example.com'); // 请替换为实际的网址\n  request.configuration = {\n    security: {\n      remoteValidation: 'system',\n    }\n  }\n  try {\n    const response = await session.fetch(request);\n    console.info(`response statusCode: ${JSON.stringify(response.statusCode)}`);\n    console.info(`response: ${JSON.stringify(response.toString())}`);\n  } catch (err) {\n    console.error(`response error code is ${err.code}, error data is ${err.data}`);\n  } finally {\n    session.close();\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-跳过证书校验",
      children: "2. 跳过证书校验"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入需要的模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在remoteValidation中配置'skip'跳过证书校验。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function TestRcp() {\n  const session = rcp.createSession();\n  const request = new rcp.Request('https://example.com'); // 请替换为实际的网址\n  request.configuration = {\n    security: {\n      remoteValidation: 'skip',\n    }\n  }\n  try {\n    const response = await session.fetch(request);\n    console.info(`response statusCode: ${JSON.stringify(response.statusCode)}`);\n    console.info(`response: ${JSON.stringify(response.toString())}`);\n  } catch (err) {\n    console.error(`response error code is ${err.code}, error data is ${err.data}`);\n  } finally {\n    session.close();\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-使用字符串指定证书内容",
      children: "3. 使用字符串指定证书内容"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入需要的模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在remoteValidation中配置content，可以配置string类型证书内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const PEM_CA = '-----BEGIN CERTIFICATE-----\\n' +\n  'MIICPzCCAcWgAwIBAgIQBVVWvPJepDU1w6QP1atFcjAKBggqhkjOPQQDAzBhMQswCQYDVQQGEwJV\\n' +\n  'UzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3d3cuZGlnaWNlcnQuY29tMSAwHgYD\\n' +\n  'VQQDExdEaWdpQ2VydCBHbG9iYWwgUm9vdCBHMzAeFw0xMzA4MDExMjAwMDBaFw0zODAxMTUxMjAw\\n' +\n  'MDBaMGExCzAJBgNVBAYTAlVTMRUwEwYDVQQKEwxEaWdpQ2VydCBJbmMxGTAXBgNVBAsTEHd3dy5k\\n' +\n  'aWdpY2VydC5jb20xIDAeBgNVBAMTF0RpZ2lDZXJ0IEdsb2JhbCBSb290IEczMHYwEAYHKoZIzj0C\\n' +\n  'AQYFK4EEACIDYgAE3afZu4q4C/sLfyHS8L6+c/MzXRq8NOrexpu80JX28MzQC7phW1FGfp4tn+6O\\n' +\n  'YwwX7Adw9c+ELkCDnOg/QW07rdOkFFk2eJ0DQ+4QE2xy3q6Ip6FrtUPOZ9wj/wMco+I+o0IwQDAP\\n' +\n  'BgNVHRMBAf8EBTADAQH/MA4GA1UdDwEB/wQEAwIBhjAdBgNVHQ4EFgQUs9tIpPmhxdiuNkHMEWNp\\n' +\n  'Yim8S8YwCgYIKoZIzj0EAwMDaAAwZQIxAK288mw/EkrRLTnDCgmXc/SINoyIJ7vmiI1Qhadj+Z4y\\n' +\n  '3maTD/HMsQmP3Wyr+mt/oAIwOWZbwmSNuJ5Q3KjVSaLtx9zRSX8XAbjIho9OjIgrqJqpisXRAL34\\n' +\n  'VOKa5Vt8sycX\\n' +\n  '-----END CERTIFICATE-----';\n\nasync function TestRcp() {\n  const session = rcp.createSession();\n  const request = new rcp.Request('https://example.com'); // 请替换为实际的网址\n  request.configuration = {\n    security: {\n      remoteValidation: {\n        content: PEM_CA,\n      }\n    }\n  }\n  try {\n    const response = await session.fetch(request);\n    console.info(`response statusCode: ${JSON.stringify(response.statusCode)}`);\n    console.info(`response: ${JSON.stringify(response.toString())}`);\n  } catch (err) {\n    console.error(`response error code is ${err.code}, error data is ${err.data}`);\n  } finally {\n    session.close();\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-使用二进制指定证书内容",
      children: "4. 使用二进制指定证书内容"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入需要的模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\nimport { util } from '@kit.ArkTS';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在remoteValidation中配置content，可以配置ArrayBuffer类型证书内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const PEM_CA = '-----BEGIN CERTIFICATE-----\\n' +\n  'MIICPzCCAcWgAwIBAgIQBVVWvPJepDU1w6QP1atFcjAKBggqhkjOPQQDAzBhMQswCQYDVQQGEwJV\\n' +\n  'UzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3d3cuZGlnaWNlcnQuY29tMSAwHgYD\\n' +\n  'VQQDExdEaWdpQ2VydCBHbG9iYWwgUm9vdCBHMzAeFw0xMzA4MDExMjAwMDBaFw0zODAxMTUxMjAw\\n' +\n  'MDBaMGExCzAJBgNVBAYTAlVTMRUwEwYDVQQKEwxEaWdpQ2VydCBJbmMxGTAXBgNVBAsTEHd3dy5k\\n' +\n  'aWdpY2VydC5jb20xIDAeBgNVBAMTF0RpZ2lDZXJ0IEdsb2JhbCBSb290IEczMHYwEAYHKoZIzj0C\\n' +\n  'AQYFK4EEACIDYgAE3afZu4q4C/sLfyHS8L6+c/MzXRq8NOrexpu80JX28MzQC7phW1FGfp4tn+6O\\n' +\n  'YwwX7Adw9c+ELkCDnOg/QW07rdOkFFk2eJ0DQ+4QE2xy3q6Ip6FrtUPOZ9wj/wMco+I+o0IwQDAP\\n' +\n  'BgNVHRMBAf8EBTADAQH/MA4GA1UdDwEB/wQEAwIBhjAdBgNVHQ4EFgQUs9tIpPmhxdiuNkHMEWNp\\n' +\n  'Yim8S8YwCgYIKoZIzj0EAwMDaAAwZQIxAK288mw/EkrRLTnDCgmXc/SINoyIJ7vmiI1Qhadj+Z4y\\n' +\n  '3maTD/HMsQmP3Wyr+mt/oAIwOWZbwmSNuJ5Q3KjVSaLtx9zRSX8XAbjIho9OjIgrqJqpisXRAL34\\n' +\n  'VOKa5Vt8sycX\\n' +\n  '-----END CERTIFICATE-----';\n\nasync function TestRcp() {\n  const session = rcp.createSession();\n  const request = new rcp.Request('https://example.com'); // 请替换为实际的网址\n  const buffer = new ArrayBuffer(PEM_CA.length);\n  util.TextEncoder.create('utf-8').encodeIntoUint8Array(PEM_CA, new Uint8Array(buffer));\n  request.configuration = {\n    security: {\n      remoteValidation: {\n        content: buffer,\n      }\n    }\n  }\n  try {\n    const response = await session.fetch(request);\n    console.info(`response statusCode: ${JSON.stringify(response.statusCode)}`);\n    console.info(`response: ${JSON.stringify(response.toString())}`);\n  } catch (err) {\n    console.error(`response error code is ${err.code}, error data is ${err.data}`);\n  } finally {\n    session.close();\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-使用文件指定证书内容",
      children: "5. 使用文件指定证书内容"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入需要的模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "准备证书文件。在本例中，假设证书是example.pem，使用OpenSSL命令生成目标文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "openssl x509 -subject_hash -in ./example.pem\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "命令输出如下。以第一行为目标文件名，以.0为文件扩展名，以其他内容为文件内容，将输出保存为dd8e9d41.0。如果您使用Windows系统，OpenSSL可能会等待用户输入才会退出，按Enter键即可。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "dd8e9d41\n-----BEGIN CERTIFICATE-----\nMIICPzCCAcWgAwIBAgIQBVVWvPJepDU1w6QP1atFcjAKBggqhkjOPQQDAzBhMQsw\nCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3d3cu\nZGlnaWNlcnQuY29tMSAwHgYDVQQDExdEaWdpQ2VydCBHbG9iYWwgUm9vdCBHMzAe\nFw0xMzA4MDExMjAwMDBaFw0zODAxMTUxMjAwMDBaMGExCzAJBgNVBAYTAlVTMRUw\nEwYDVQQKEwxEaWdpQ2VydCBJbmMxGTAXBgNVBAsTEHd3dy5kaWdpY2VydC5jb20x\nIDAeBgNVBAMTF0RpZ2lDZXJ0IEdsb2JhbCBSb290IEczMHYwEAYHKoZIzj0CAQYF\nK4EEACIDYgAE3afZu4q4C/sLfyHS8L6+c/MzXRq8NOrexpu80JX28MzQC7phW1FG\nfp4tn+6OYwwX7Adw9c+ELkCDnOg/QW07rdOkFFk2eJ0DQ+4QE2xy3q6Ip6FrtUPO\nZ9wj/wMco+I+o0IwQDAPBgNVHRMBAf8EBTADAQH/MA4GA1UdDwEB/wQEAwIBhjAd\nBgNVHQ4EFgQUs9tIpPmhxdiuNkHMEWNpYim8S8YwCgYIKoZIzj0EAwMDaAAwZQIx\nAK288mw/EkrRLTnDCgmXc/SINoyIJ7vmiI1Qhadj+Z4y3maTD/HMsQmP3Wyr+mt/\noAIwOWZbwmSNuJ5Q3KjVSaLtx9zRSX8XAbjIho9OjIgrqJqpisXRAL34VOKa5Vt8\nsycX\n-----END CERTIFICATE-----\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在remoteValidation中通过filePath指定证书路径。关于文件路径，请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-file",
            children: "应用文件"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function TestRcp() {\n  const session = rcp.createSession();\n  const request = new rcp.Request('https://example.com'); // 请替换为实际的网址\n  request.configuration = {\n    security: {\n      remoteValidation: {\n        filePath: '/data/storage/el1/bundle/entry/resources/resfile/dd8e9d41.0', // 正式使用时，需替换为证书的沙箱路径。\n      }\n    }\n  }\n  try {\n    const response = await session.fetch(request);\n    console.info(`response statusCode: ${JSON.stringify(response.statusCode)}`);\n    console.info(`response: ${JSON.stringify(response.toString())}`);\n  } catch (err) {\n    console.error(`response error code is ${err.code}, error data is ${err.data}`);\n  } finally {\n    session.close();\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-使用文件目录指定证书",
      children: "6. 使用文件目录指定证书。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入需要的模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在remoteValidation中配置folderPath指定证书所在的沙箱目录。关于文件路径，请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-file",
            children: "应用文件"
          }), "。目录中的证书文件格式和内容请参考示例5中的步骤2。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function TestRcp() {\n  const session = rcp.createSession();\n  const request = new rcp.Request('https://example.com'); // 请替换为实际的网址\n  request.configuration = {\n    security: {\n      remoteValidation: {\n        folderPath: '/data/storage/el1/bundle/entry/resources/resfile/', // 正式使用时需替换成证书所在的沙箱目录。\n      }\n    }\n  }\n  try {\n    const response = await session.fetch(request);\n    console.info(`response statusCode: ${JSON.stringify(response.statusCode)}`);\n    console.info(`response: ${JSON.stringify(response.toString())}`);\n  } catch (err) {\n    console.error(`response error code is ${err.code}, error data is ${err.data}`);\n  } finally {\n    session.close();\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-自定义证书校验",
      children: "7. 自定义证书校验"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入需要的模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\nimport { networkSecurity } from '@kit.NetworkKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "校验证书的日期是否符合预期。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function makeItTwoChar(s: string): string {\n  if (s.length === 1) {\n    return '0' + s;\n  }\n  return s;\n}\nfunction getASNDateString(): string {\n  const date = new Date();\n  let dateStr = date.getFullYear().toString().slice(2);\n  dateStr += makeItTwoChar((date.getMonth() + 1).toString());\n  dateStr += makeItTwoChar(date.getDate().toString());\n  dateStr += makeItTwoChar(date.getHours().toString());\n  dateStr += makeItTwoChar(date.getMinutes().toString());\n  dateStr += makeItTwoChar(date.getSeconds().toString());\n  return dateStr + 'Z';\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "自定义证书校验逻辑。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function ValidationRemoteServer(context: rcp.ValidationContext): Promise<boolean> {\n  // 服务器未返回证书，校验失败\n  let length = context.pemCerts.length;\n  if (length <= 0) {\n    return Promise.reject();\n  }\n  // 此示例中最后一个证书为根证书，开发中请根据实际情况调整\n  const firstCaBlob: networkSecurity.CertBlob = {\n    type: networkSecurity.CertType.CERT_TYPE_PEM,\n    data: context.pemCerts[length - 1],\n  }\n  // 如果 certVerificationSync 的第二个参数未填写，则使用系统默认的 CA（\"/etc/security/certificates\"）进行验证\n  if (networkSecurity.certVerificationSync(firstCaBlob) !== 0) {\n    return Promise.reject();\n  }\n  // 此处可以添加所需的校验逻辑，如校验日期\n  for (const x of context.x509Certs) {\n    let dateStr = getASNDateString();\n    try {\n      x.checkValidityWithDate(dateStr);\n    } catch (e) {\n      return Promise.reject();\n    }\n  }\n\n  // 校验成功\n  return Promise.resolve(true);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将定义好的自定义证书校验器配置到configuration中，并利用fetch发起请求。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function TestRcp() {\n  const session = rcp.createSession();\n  const request = new rcp.Request('https://example.com'); // 请替换为实际的网址\n  request.configuration = {\n    security: {\n      remoteValidation: ValidationRemoteServer,\n    }\n  }\n  try {\n    const response = await session.fetch(request);\n    console.info(`response statusCode: ${JSON.stringify(response.statusCode)}`);\n    console.info(`response: ${JSON.stringify(response.toString())}`);\n  } catch (err) {\n    console.error(`response error code is ${err.code}, error data is ${err.data}`);\n  } finally {\n    session.close();\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "服务器校验客户端证书",
      children: "服务器校验客户端证书"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-pem证书",
      children: "1. PEM证书"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入需要的模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本示例使用自签名证书，以便完整演示本地证书生成流程。请通过以下OpenSSL命令依次完成：生成私钥、创建证书签名请求（CSR）文件、基于CSR签发自签名证书、将私钥与证书合并为PEM格式的完整证书文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注意：本示例使用自签名证书演示流程，实际生产环境中一般采用由可信证书颁发机构（CA）正式签发的证书。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "openssl genrsa -out cert.key 2048\nopenssl req -new -key cert.key -out cert.csr\nopenssl x509 -req -in cert.csr -out cert.crt -signkey cert.key -CAcreateserial -days 3650\nopenssl x509 -in cert.crt -out cert.pem -outform PEM\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在certificate中通过filePath指定证书路径（也可以通过content指定证书内容），type配置PEM指定证书类型，key和keyPassword指定证书私钥和密码。关于文件路径，请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-file",
            children: "应用文件"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function TestRcp() {\n  const session = rcp.createSession();\n  const request = new rcp.Request('https://example.com'); // 请替换为实际的网址\n  request.configuration = {\n    security: {\n      certificate: {\n        filePath: '/data/storage/el1/bundle/entry/resources/resfile/cert.pem', // 可以使用content字段指定证书内容\n        type: 'PEM',\n        key: '/data/storage/el1/bundle/entry/resources/resfile/cert.key', // 这是证书私钥，在使用中请替换为实际的证书秘钥路径，可选\n        keyPassword: 'keyPassword', // 证书私钥的密码，在使用中请替换为实际的证书秘钥密码，可选，本例中不生效\n      }\n    }\n  };\n  try {\n    const response = await session.fetch(request);\n    console.info(`response statusCode: ${JSON.stringify(response.statusCode)}`);\n    console.info(`response: ${JSON.stringify(response.toString())}`);\n  } catch (err) {\n    console.error(`response error code is ${err.code}, error data is ${err.data}`);\n  } finally {\n    session.close();\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-der证书",
      children: "2. DER证书"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入需要的模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在certificate中通过filePath指定证书内容（也可以通过content指定证书内容），type配置DER指定证书类型，key和keyPassword指定证书私钥和密码。使用openssl x509 -in cert.pem -outform der -out cert.der命令将上面例子中的pem文件转为der文件。关于文件路径，请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-file",
            children: "应用文件"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function TestRcp() {\n  const session = rcp.createSession();\n  const request = new rcp.Request('https://example.com'); // 请替换为实际的网址\n  request.configuration = {\n    security: {\n      certificate: {\n        filePath: '/data/storage/el1/bundle/entry/resources/resfile/cert.der', // 可以使用content字段指定证书内容\n        type: 'DER',\n        key: '/data/storage/el1/bundle/entry/resources/resfile/cert.key', // 这是证书私钥，在使用中请替换为实际的证书秘钥路径，可选\n        keyPassword: 'keyPassword', // 证书私钥的密码，在使用中请替换为实际的证书秘钥密码，可选，本例中不生效\n      }\n    }\n  };\n  try {\n    const response = await session.fetch(request);\n    console.info(`response statusCode: ${JSON.stringify(response.statusCode)}`);\n    console.info(`response: ${JSON.stringify(response.toString())}`);\n  } catch (err) {\n    console.error(`response error code is ${err.code}, error data is ${err.data}`);\n  } finally {\n    session.close();\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-p12证书",
      children: "3. P12证书"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入需要的模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在certificate中配置filePath指定证书路径（也可以配置content指定证书内容），type配置P12指定证书类型，keyPassword指定证书私钥的密码。使用openssl pkcs12 -export -out cert.p12 -inkey cert.key -in cert.pem命令将上面例子中的pem文件转为P12证书，设置密码“1234”。关于文件路径，请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-file",
            children: "应用文件"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function TestRcp() {\n  const session = rcp.createSession();\n  const request = new rcp.Request('https://example.com'); // 请替换为实际的网址\n  request.configuration = {\n    security: {\n      certificate: {\n        filePath: '/data/storage/el1/bundle/entry/resources/resfile/cert.p12', // 可以使用content字段指定证书内容\n        type: 'P12', // P12证书已包含私钥，不需要使用key指定私钥\n        keyPassword: '1234', // 证书私钥的密码，在使用中请替换为实际的证书秘钥密码，可选\n      }\n    }\n  };\n  try {\n    const response = await session.fetch(request);\n    console.info(`response statusCode: ${JSON.stringify(response.statusCode)}`);\n    console.info(`response: ${JSON.stringify(response.toString())}`);\n  } catch (err) {\n    console.error(`response error code is ${err.code}, error data is ${err.data}`);\n  } finally {\n    session.close();\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "证书锁定",
      children: "证书锁定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "证书锁定可以设置信任的证书的范围。通过比较证书公钥的SHA256哈希值的BASE64编码，限定可信任的证书。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可以通过以下OpenSSL命令获得证书公钥，其中，example.pem是服务器的PEM格式的证书，请替换为实际证书："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "openssl x509 -in example.pem -noout -pubkey | openssl asn1parse -noout -inform pem -out example.public.key\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可以通过以下OpenSSL命令计算公钥的SHA256哈希值的BASE64编码，其中，example.public.key是上一步生成的证书的公钥："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "openssl dgst -sha256 -binary example.public.key | openssl enc -base64\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入需要的模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在certificatePinning中配置可信任的证书公钥的SHA256哈希值。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const TEST_URL = 'https://example.com'; // 请替换成需要的URL\n\nconst RIGHT_EXAMPLE_PUBLIC_KEY_SHA256_HASH = [\n  'iMMpIJdSf5VlClHaxZReyhaLxLsmZMMNAiA2pMR8/M4=', // 请替换成需要的字符串\n  'qBRjZmOmkSNJL0p70zek7odSIzqs/muR4Jk9xYyCP+E=', // 请替换成需要的字符串\n];\n\nasync function TestRcp() {\n  const session = rcp.createSession();\n  const request = new rcp.Request(TEST_URL);\n  request.configuration = {\n    security: {\n      certificatePinning: [\n        {\n          kind: 'public-key',\n          publicKeyHash: RIGHT_EXAMPLE_PUBLIC_KEY_SHA256_HASH[0],\n          hashAlgorithm: 'SHA-256'\n        },\n        {\n          kind: 'public-key',\n          publicKeyHash: RIGHT_EXAMPLE_PUBLIC_KEY_SHA256_HASH[1],\n          hashAlgorithm: 'SHA-256'\n        },\n      ]\n    }\n  };\n  try {\n    const response = await session.fetch(request);\n    console.info('Test certificate pinning ' + response.statusCode);\n  } catch (e) {\n    console.error('Test certificate pinning ' + JSON.stringify(e));\n  } finally {\n    session.close();\n  }\n}\n"
          })
        }), "\n"]
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