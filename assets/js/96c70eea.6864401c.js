"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["929508"], {
744581(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_local_key_management_device_attestation_device_attestation_guidelines_device_attestation_servers_device_attestation_servers_md_96c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-local-key-management-device-attestation-device-attestation-guidelines-device-attestation-servers-device-attestation-servers-md-96c.json
var site_docs_system_security_huks_kit_huks_local_key_management_device_attestation_device_attestation_guidelines_device_attestation_servers_device_attestation_servers_md_96c_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-local-key-management/device-attestation/device-attestation-guidelines/device-attestation-servers/device-attestation-servers","title":"服务器端开发","description":"校验密钥证明证书链","source":"@site/docs/system-security/huks-kit/huks-local-key-management/device-attestation/device-attestation-guidelines/device-attestation-servers/device-attestation-servers.md","sourceDirName":"system-security/huks-kit/huks-local-key-management/device-attestation/device-attestation-guidelines/device-attestation-servers","slug":"/system-security/huks-kit/huks-local-key-management/device-attestation/device-attestation-guidelines/device-attestation-servers/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/device-attestation/device-attestation-guidelines/device-attestation-servers/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"服务器端开发","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/device-attestation-servers","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用端开发","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/device-attestation/device-attestation-guidelines/device-attestation-apps/"},"next":{"title":"应用端开发","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/device-attestation/attestation-signature-verification/attestation-signature-verification-apps/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-local-key-management/device-attestation/device-attestation-guidelines/device-attestation-servers/device-attestation-servers.md


const frontMatter = {
	title: '服务器端开发',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/device-attestation-servers',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '服务器端开发';

const assets = {

};



const toc = [{
  "value": "校验密钥证明证书链",
  "id": "校验密钥证明证书链",
  "level": 2
}, {
  "value": "保存应用公钥",
  "id": "保存应用公钥",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "服务器端开发",
        children: "服务器端开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "校验密钥证明证书链",
      children: "校验密钥证明证书链"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["您的应用服务器接收到来自应用的请求，其中包含的密钥证明证书链采用X509标准格式，证书链（证书数组）中的第一本证书为", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "密钥证明证书"
        })
      }), "，最后一本证书为根CA证书，中间的为子CA证书。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用服务器对密钥证明证书链的校验步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用官网提供的可信的根CA证书对证书链合法性进行校验。（", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://pki.consumer.huawei.com/ca/cer/Huawei_CBG_ECC_Device_Attestation_Root_CA.cer",
            children: "根CA证书下载地址"
          }), "）"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(468032)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请勿在应用服务器中使用子CA证书对密钥证明证书链进行校验，子CA证书可能会因为有效期结束、证书被吊销等发生变化。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["解析", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "密钥证明证书"
            })
          }), "获取应用公钥、挑战值Challenge、应用ID、密钥管理部件ID。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其中应用公钥直接从密钥证明证书的subjectPublicKeyInfo字段获取；其他字段从密钥证明证书的扩展域段（Extensions）中获取，扩展域段的OID为1.3.6.1.4.1.2011.2.376.1.3（密钥证明扩展域段）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "校验挑战值Challenge是否与“创建密钥确立可信凭证流程”步骤3中应用服务器缓存的挑战值Challenge一致。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "校验应用ID是否与预期的取值一致。根据应用ID判断请求是否来自预期的HarmonyOS应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "校验密钥来源是否与预期的取值一致。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "密钥证明证书格式说明："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(123562)/* ["default"] */.A) + "",
        width: "470",
        height: "660"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(344818)/* ["default"] */.A) + "",
        width: "627",
        height: "471"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "密钥证明扩展域段为Asn.1 DER标准编码格式，数据结构定义如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HuaweiAttestation ::= SEQUENCE {\n version             AttestationVersion DEFAULT v1,\n claim1             AttestationClaim,\n claim2             AttestationClaim,\n claim3             AttestationClaim,\n ... ...\n}\n\nAttestationVersion ::= INTEGER { v1(0) }\n\nAttestationClaim ::= SEQUENCE {\n   securityLevel       SecurityLevel,\n   type             AttestationType,\n   value            AttestationValue\n}\n\nSecurityLevel ::= INTEGER\nAttestationType ::= OBJECT IDENTIFIER\nAttestationValue ::= ANY -- DEFINED BY AttestationType\n\nApplicationIDType ::= SEQUENCE {\n   type                         OBJECT IDENTIFIER,\n   value                        OCT_STR\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "AttestationClaim类型取值说明："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "序号"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "type（OID）取值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "value的数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "securityLevel"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Claim说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.3.6.1.4.1.2011.2.376.2.1.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OCT_STR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保留字段，暂不使用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用输入的挑战值Challenge。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.3.6.1.4.1.2011.2.376.2.1.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ApplicationIDType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保留字段，暂不使用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.3.6.1.4.1.2011.2.376.2.2.2.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OCT_STR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保留字段，暂不使用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥管理部件ID。取值固定为：0x28c4fb4944afec11b9090242ac120002（Universal Keystore Kit的部件ID）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.3.6.1.4.1.2011.2.376.2.2.4.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UTF8String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备产品型号，从API version 20开始支持。设备产品型号一般应用在设备风控场景，识别黑灰产设备的行为，请勿使用该字段对设备身份进行认证。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "securityLevel类型取值说明："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "securityLevel"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REE（Rich Execution Environment），数据来源于HarmonyOS系统层。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TEE（Trusted Execution Environment），数据通过TEE进行保护。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ApplicationIDType类型取值说明："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "type（OID）取值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "value取值说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3.6.1.4.1.2011.2.376.2.1.3.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HarmonyOS Hap应用信息，包含如下字段：  1. appId：包含Hap应用的bundleName和签名证书公钥的hash；  2. bundleName：Hap应用的包名；  3. appIdentifier：AppGallery Connect网站上为Hap应用分配的统一APP ID字段，从API version 20开始支持；  4. appMode：Hap应用的状态，取值：debug或release，从API version 20开始支持。  value为json字符串，样例如下：  {  \"appId\":\"com.example.attesthcts_BDmjsOezxRmguzlYRVhQavW22Eswi5sX61wOAysWPOGS8TZ5tY1u1A9EcvarzyrfOEj5zT8BCGkfFkVjn0m5wzo=\",  \"bundleName\":\"com.example.attesthcts\",  \"appIdentifier\":\"5765880207853009781\",  \"appMode\":\"release\"  }"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3.6.1.4.1.2011.2.376.2.1.3.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统服务（Service Ability）的ID，样例：  {processName: \"huawei_share\"}"
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
        children: "import org.bouncycastle.asn1.*;\nimport org.bouncycastle.jce.provider.BouncyCastleProvider;\n\nimport java.io.ByteArrayInputStream;\nimport java.io.FileOutputStream;\nimport java.security.PublicKey;\nimport java.security.Security;\nimport java.security.cert.CertPath;\nimport java.security.cert.CertPathValidator;\nimport java.security.cert.CertificateFactory;\nimport java.security.cert.PKIXCertPathValidatorResult;\nimport java.security.cert.PKIXParameters;\nimport java.security.cert.TrustAnchor;\nimport java.security.cert.X509Certificate;\nimport java.util.ArrayList;\nimport java.util.Date;\nimport java.util.HashSet;\nimport java.util.List;\n\nimport com.alibaba.fastjson.JSON;\n\npublic class ParseAttestation {\n    static {\n        Security.addProvider(new BouncyCastleProvider());\n    }\n\n    //HarmonyOS Hap应用通过anonAttestKeyItem接口获取到的 “密钥证明证书链”数据\n    static String[] g_attestCertStr = new String[]{\"-----BEGIN CERTIFICATE-----\\nMIIEUDCCA/WgAwIBAgIOCfv5Xf9hjA2u32gjpG8wCgYIKoZIzj0EAwIwXTE5MDcGA1UEAwwwSHVhd2VpIENCRyBFQ0MgRGV2aWNlIEFub255bW91cyBBdHRlc3RhdGlvbiBDQSAxMRMwEQYDVQQKDApIdWF3ZWkgQ0JHMQswCQYDVQQGEwJDTjAeFw0yNTA1MTMwNjI3NDlaFw0yNTA1MjAwNjI3NDlaMCwxKjAoBgNVBAMMIURldmljZSBDZXJ0aWZpY2F0ZSBNYW5hZ2VtZW50IEtleTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALd0wgFgvDF5uPq2hh69LdRHnIX3+mzdAzf10L9Jk6bWPZqqTvz88ZX7e12Su1Myf5iyT3TMKjZ+Y2SnsWpHG/7Dpx990u7/CxeeRY0qziIqMTEbrLFaSHY++///9SxmEiM7a3z2Ged2FzDSvOTj1JVmm2hk+bUcceTVuHAmRwidFIQrL5h/lxaO3uPFqbTdiW6ocz06pEbi8mg6LAafik1pfsO30a3yIGiH1f4uZhCEFjHQxQdSFsRPh04Ehclx6lQ196tO0d3RHR8dxL7ghGNxs9rB1Sq/0TH2mK1vKAY/YgvBs5nypOnDY+0MXN7j5NucvJ32wssGI7CbmMxVeZMCAwEAAaOCAf0wggH5MB0GA1UdDgQWBBQA6HLpfdJvtiqPqQXenry8b6qjYzAMBgNVHRMBAf8EAjAAMAkGA1UdOAQCBQAwHwYDVR0jBBgwFoAU4yzL/3aHOxL7QyI/P/sCBoHfJ6cwggGcBgwrBgEEAY9bAoJ4AQMEggGKMIIBhgIBADCB/AIBAgYNKwYBBAGPWwKCeAIBAzCB5wYOKwYBBAGPWwKCeAIBAwEEgdR7ImFwcElkIjoiY29tLmV4YW1wbGUubXlhcHBsaWNhdGlvbl9CS3BOWWR2UU0yYkNLYklwRERuWmdkdGNYdEtnZUg5M2FwVm1aOWdpcTFoeUt2elNzVVNFZTFsT3VsK3N2bXhZS2ltb0dNWnF0U0o3eGxpRkVZd2NRK0E9IiwiYnVuZGxlTmFtZSI6ImNvbS5leGFtcGxlLm15YXBwbGljYXRpb24iLCJhcHBJZGVudGlmaWVyIjoiMTU3MzU0NjgiLCJhcHBNb2RlIjoiZGVidWcifTAiAgEABg0rBgEEAY9bAoJ4AgEEBA5jaGFsbGVuZ2VfZGF0YTAYAgEDBg0rBgEEAY9bAoJ4AgEFBAQCAAAAMB0CAQIGDisGAQQBj1sCgngCAgQIDAhDTFMtQUwwMDAlAgEDBg4rBgEEAY9bAoJ4AgICBgQQKMT7SUSv7BG5CQJCrBIAAjAKBggqhkjOPQQDAgNJADBGAiEAko1y6sf7Fg48oWZC8FoP5WtmzKiVk5AOOvuhwaK0CQcCIQD8HymOzkzmOOjUuz/rdVrTM4191dpGr3jfU1u5rBpNIw==\\n-----END CERTIFICATE-----\", \"-----BEGIN CERTIFICATE-----\\nMIICyjCCAlCgAwIBAgIREj5jzbLehL8yzkDm5uwcSJUwCgYIKoZIzj0EAwMwSzETMBEGA1UEChMKSHVhd2VpIENCRzE0MDIGA1UEAxMrSHVhd2VpIENCRyBFQ0MgRGV2aWNlIEF0dGVzdGF0aW9uIFJvb3QgQ0EgMTAeFw0yMzEyMDUwMzE4MDRaFw0zMzEyMDUwMzE4MDRaMF0xOTA3BgNVBAMMMEh1YXdlaSBDQkcgRUNDIERldmljZSBBbm9ueW1vdXMgQXR0ZXN0YXRpb24gQ0EgMTETMBEGA1UECgwKSHVhd2VpIENCRzELMAkGA1UEBhMCQ04wWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAATYjeQrfijuZ/9HJPLlsfJ4/wnXbQXaxy5f5fEcMN+pTZ5RekpY7PnDp2zEdibvkSzjv1MuRs8JzORyGatSOrYFo4IBATCB/jAfBgNVHSMEGDAWgBTaRGLD5yvof1E6XEuPQ3w5JMPOrDAdBgNVHQ4EFgQU4yzL/3aHOxL7QyI/P/sCBoHfJ6cwRgYDVR0gBD8wPTA7BgRVHSAAMDMwMQYIKwYBBQUHAgEWJWh0dHA6Ly9wa2kuY29uc3VtZXIuaHVhd2VpLmNvbS9jYS9jcHMwEgYDVR0TAQH/BAgwBgEB/wIBATAOBgNVHQ8BAf8EBAMCAQYwUAYDVR0fBEkwRzBFoEOgQYY/aHR0cDovL3BraS5jb25zdW1lci5odWF3ZWkuY29tL2NhL2NybC9yb290X2RldmljZUF0dGVzdF9jcmwuY3JsMAoGCCqGSM49BAMDA2gAMGUCMQCE9qqNREq3AvCuznKeBl8biwC5GpV/Z1B0rsU4RqeTqNJ0Gvyz3g8Noaf4SpWzsLUCMBm5nr39UEOq89kx7QQjgYWLEWKcuSsgw2/6MckKP/6zrxjVld2SMtqiphKnrv1EkA==\\n-----END CERTIFICATE-----\",\"-----BEGIN CERTIFICATE-----\\nMIICCTCCAY6gAwIBAgIDVxAsMAoGCCqGSM49BAMDMEsxEzARBgNVBAoTCkh1YXdlaSBDQkcxNDAyBgNVBAMTK0h1YXdlaSBDQkcgRUNDIERldmljZSBBdHRlc3RhdGlvbiBSb290IENBIDEwIBcNMjMxMTMwMDIwNjU1WhgPMjA3MzExMzAwMjA2NTVaMEsxEzARBgNVBAoTCkh1YXdlaSBDQkcxNDAyBgNVBAMTK0h1YXdlaSBDQkcgRUNDIERldmljZSBBdHRlc3RhdGlvbiBSb290IENBIDEwdjAQBgcqhkjOPQIBBgUrgQQAIgNiAATDJzRdruaBeMoQBbdqCe51ezvkQn3OPYBoRmpL5KPktdFtD0b97FRp8jGLiUhPKyo8M15fxW5Ams4s80E8I1BSXoovDnkKllFfUadD8URgwEfOk5qttYNKzJcULavOhbijQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBTaRGLD5yvof1E6XEuPQ3w5JMPOrDAKBggqhkjOPQQDAwNpADBmAjEA2zDQREvORPqcZyjwKDltu0T9zN8Cd3/hi4DQZvuRJdJOY57yIIO/LKxezzEcGiMMAjEAkX7r0U4Mcaw4uURMh+7tLMyvyxnlW8yJqBEOnZfqS8I8t0bQIY2r/5TQAPC0JhBm\\n-----END CERTIFICATE-----\"};\n\n    //从HarmonyOS官网下载的根CA证书\n    static String g_rootCertStr = \"-----BEGIN CERTIFICATE-----\\n\" +\n            \"MIICCTCCAY6gAwIBAgIDVxAsMAoGCCqGSM49BAMDMEsxEzARBgNVBAoTCkh1YXdl\\n\" +\n            \"aSBDQkcxNDAyBgNVBAMTK0h1YXdlaSBDQkcgRUNDIERldmljZSBBdHRlc3RhdGlv\\n\" +\n            \"biBSb290IENBIDEwIBcNMjMxMTMwMDIwNjU1WhgPMjA3MzExMzAwMjA2NTVaMEsx\\n\" +\n            \"EzARBgNVBAoTCkh1YXdlaSBDQkcxNDAyBgNVBAMTK0h1YXdlaSBDQkcgRUNDIERl\\n\" +\n            \"dmljZSBBdHRlc3RhdGlvbiBSb290IENBIDEwdjAQBgcqhkjOPQIBBgUrgQQAIgNi\\n\" +\n            \"AATDJzRdruaBeMoQBbdqCe51ezvkQn3OPYBoRmpL5KPktdFtD0b97FRp8jGLiUhP\\n\" +\n            \"Kyo8M15fxW5Ams4s80E8I1BSXoovDnkKllFfUadD8URgwEfOk5qttYNKzJcULavO\\n\" +\n            \"hbijQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQW\\n\" +\n            \"BBTaRGLD5yvof1E6XEuPQ3w5JMPOrDAKBggqhkjOPQQDAwNpADBmAjEA2zDQREvO\\n\" +\n            \"RPqcZyjwKDltu0T9zN8Cd3/hi4DQZvuRJdJOY57yIIO/LKxezzEcGiMMAjEAkX7r\\n\" +\n            \"0U4Mcaw4uURMh+7tLMyvyxnlW8yJqBEOnZfqS8I8t0bQIY2r/5TQAPC0JhBm\\n\" +\n            \"-----END CERTIFICATE-----\\n\";\n\n    //保存HarmonyOS Hap应用生成的应用公钥的文件名\n    static String g_publicKeyFileName = \"d:\\\\attestPublicKey.pem\";\n\n    public static void main(String[] args) {\n        ParseAttestation parseAttestation = new ParseAttestation();\n        parseAttestation.parseAndValidateAttestCertChain(g_attestCertStr, g_rootCertStr, g_publicKeyFileName);\n    }\n\n    void parseAndValidateAttestCertChain(String[] attestCertStr, String rootCertStr, String publicKeyFileName) {\n        try {\n            //解析密钥证明证书链\n            List<X509Certificate> attestCerts = parseAttestationCerts(attestCertStr);\n            //校验密钥证明证书链\n            Date curDate = new Date();\n            validateAttestationCertChain(attestCerts, rootCertStr, curDate);\n            //解析密钥证明证书\n            AttestationInfo attestInfo = extractAttestaionField(attestCerts.get(0));\n            //校验密钥证明信息是否正确\n            if (!checkAttestInfo(attestInfo)) {\n                //todo： 进行异常处理\n            }\n            //保存HarmonyOS Hap应用生成的应用公钥\n            saveAttestPublicKey(attestInfo.publicKey, publicKeyFileName);\n        } catch (Exception e) {\n            System.out.println(e);\n        }\n    }\n\n    List<X509Certificate> parseAttestationCerts(String[] certStr) throws Exception {\n        List<X509Certificate> certificateList = new ArrayList<>(certStr.length);\n        CertificateFactory certificateFactory = CertificateFactory.getInstance(\"X.509\", \"BC\");\n        for (int i = 0; i < certStr.length; i++) {\n            certificateList.add((X509Certificate) certificateFactory.generateCertificate(\n                    new ByteArrayInputStream(certStr[i].getBytes())));\n        }\n        return certificateList;\n    }\n\n    void validateAttestationCertChain(List<X509Certificate> certs, String trustCAStr, Date date) throws Exception {\n        //构造证书链\n        CertificateFactory factory = CertificateFactory.getInstance(\"X.509\", \"BC\");\n        CertPath certPath = factory.generateCertPath(certs);\n\n        //读取信任根证书和构建trustAnchor对象\n        X509Certificate trustCA = (X509Certificate) factory.generateCertificate(\n                new ByteArrayInputStream(trustCAStr.getBytes()));\n\n        TrustAnchor trustAnchor = new TrustAnchor(trustCA, null);\n        HashSet trustAnchorSet = new HashSet<TrustAnchor>();\n        trustAnchorSet.add(trustAnchor);\n\n        //构建validator和对应的参数\n        PKIXParameters params = new PKIXParameters(trustAnchorSet);\n        params.setDate(date);\n        //密钥证明证书有效期比较短，不需要进行证书的吊销验证。\n        params.setRevocationEnabled(false);\n\n        CertPathValidator validator = CertPathValidator.getInstance(\"PKIX\", \"BC\");\n        try {\n            PKIXCertPathValidatorResult result = (PKIXCertPathValidatorResult) validator.validate(certPath, params);\n            System.out.println(\"Cert Chain validate success!\");\n        } catch (Exception e) {\n            System.out.println(\"Cert Chain validate fail!\" + e.getMessage());\n        }\n    }\n\n    int getInteger(ASN1Encodable value) {\n        if (value instanceof ASN1Integer) {\n            return ((ASN1Integer) value).getValue().intValue();\n        } else if (value instanceof ASN1Enumerated) {\n            return ((ASN1Enumerated) value).getValue().intValue();\n        } else {\n            throw new IllegalArgumentException(\n                    \"expected Integer value ; found \" + value.getClass().getName() + \" instead.\");\n        }\n    }\n\n    byte[] getOctetString(ASN1Encodable value) {\n        if (value instanceof ASN1OctetString) {\n            return ((ASN1OctetString) value).getOctets();\n        } else {\n            throw new RuntimeException(\n                    \"expected OctetString value ; found \" + value.getClass().getName() + \" instead.\");\n        }\n    }\n\n    void printBytes(byte[] byteArray) {\n if (byteArray == null) {\n     System.out.println(\"null\");\n        }\n        for (int i = 0; i < byteArray.length; i++) {\n            System.out.printf(\"%02X \", byteArray[i]);\n        }\n        System.out.println();\n    }\n\n    AttestationInfo extractAttestaionField(X509Certificate certificate) {\n        AttestationInfo attestInfo = new AttestationInfo();\n        //获取应用公钥\n        attestInfo.publicKey = certificate.getPublicKey();\n        //从密钥证明证书中获取 “密钥证明扩展域段”\n        byte[] attestationValue = certificate.getExtensionValue(\"1.3.6.1.4.1.2011.2.376.1.3\");\n        if (attestationValue == null || attestationValue.length == 0) {\n            throw new IllegalArgumentException(\"Can't found the attestation extension!\");\n        }\n        ASN1Sequence attestSequence = ASN1Sequence.getInstance(\n                ASN1OctetString.getInstance(attestationValue).getOctets());\n\n        //获取Attestation Version\n        attestInfo.version = getInteger(attestSequence.getObjectAt(0));\n\n        for (int i = 1; i < attestSequence.size(); i++) {\n            ASN1Sequence attestClaim = ASN1Sequence.getInstance(attestSequence.getObjectAt(i));\n            //获取Claim的oid\n            ASN1ObjectIdentifier attestClaimOid = (ASN1ObjectIdentifier) attestClaim.getObjectAt(1);\n            if (\"1.3.6.1.4.1.2011.2.376.2.1.4\".equalsIgnoreCase(attestClaimOid.getId())) {\n                //读取Challenge\n                attestInfo.challenge = getOctetString(attestClaim.getObjectAt(2));\n            } else if (\"1.3.6.1.4.1.2011.2.376.2.1.3\".equalsIgnoreCase(attestClaimOid.getId())) {\n                //读取appInfo\n                ASN1Sequence appInfoAsn1 = (ASN1Sequence) attestClaim.getObjectAt(2);\n                //获取appInfo的oid\n                ASN1ObjectIdentifier appidOid = (ASN1ObjectIdentifier) appInfoAsn1.getObjectAt(0);\n                if (!\"1.3.6.1.4.1.2011.2.376.2.1.3.1\".equalsIgnoreCase(appidOid.getId())) {\n                    continue;\n                }\n                //读取hap应用信息\n                String appInfo = new String(getOctetString(appInfoAsn1.getObjectAt(1)));\n                System.out.println(\"appInfo is:\\n\" + appInfo);\n                attestInfo.appInfo = JSON.parseObject(appInfo, AppInfo.class);\n            } else if (\"1.3.6.1.4.1.2011.2.376.2.2.2.6\".equalsIgnoreCase(attestClaimOid.getId())) {\n                //读取密钥管理部件id，应该取值为0x28c4fb4944afec11b9090242ac120002\n                attestInfo.keyManagerId = getOctetString(attestClaim.getObjectAt(2));\n            } else if (\"1.3.6.1.4.1.2011.2.376.2.2.4.8\".equalsIgnoreCase(attestClaimOid.getId())) {\n                //读取设备产品型号\n                attestInfo.model = attestClaim.getObjectAt(2).toString();\n            }\n        }\n        return attestInfo;\n    }\n\n    boolean checkAttestInfo(AttestationInfo attestInfo) {\n        //todo: 校验Challenge\n        System.out.println(\"challenge is:\");\n        printBytes(attestInfo.challenge);\n\n        //todo: 校验appInfo中的字段信息\n        System.out.println(\"appInfo.appId is:\\n\" + attestInfo.appInfo.appId);\n        System.out.println(\"appInfo.bundleName is:\\n\" + attestInfo.appInfo.bundleName);\n        System.out.println(\"appInfo.appIdentifier is:\\n\" + attestInfo.appInfo.appIdentifier);\n        System.out.println(\"appInfo.appMode is:\\n\" + attestInfo.appInfo.appMode);\n\n        //todo: 校验keyManagerId，固定为：0x28c4fb4944afec11b9090242ac120002。\n        System.out.println(\"key manager id is:\");\n        printBytes(attestInfo.keyManagerId);\n\n        return true;\n    }\n\n    void saveAttestPublicKey(PublicKey publicKey, String publicKeyFileName) throws Exception {\n        //todo: 把attestInfo.publicKey.getEncoded()获取到的应用公钥保存到服务器\n        FileOutputStream file = new FileOutputStream(publicKeyFileName);\n        file.write(publicKey.getEncoded());\n        file.close();\n        System.out.println(\"the app public key: \\n\" + publicKey);\n    }\n\n    class AttestationInfo {\n        public PublicKey publicKey;\n        public int version;\n        public byte[] challenge;\n        public AppInfo appInfo;\n        public byte[] keyManagerId;\n        public String model;\n    }\n\n    static class AppInfo {\n        public String appId;\n        public String bundleName;\n        public String appIdentifier;\n        public String appMode;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "保存应用公钥",
      children: "保存应用公钥"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "您的应用服务器对密钥证明证书链校验通过后，把密钥证明证书中的应用公钥保存到服务器中（“对密钥证明证书链进行校验”的样例代码中已包含公钥保存的示例代码），以便对后续的业务请求进行验证。在保存应用公钥前应确保公钥的唯一性，应用服务器中不应该存在多个相同的应用公钥。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(466717)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安全建议：为了提高安全性，建议为终端设备中登录的每个用户生成唯一的密钥对，并在应用服务器对用户与应用公钥进行关联。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "实现提示："
        })
      }), " 对业务请求进行签名验签时需要先查找到应用公钥，建议为应用公钥生成一个唯一的应用公钥ID（如：对应用公钥计算Hash），并保存应用公钥ID与应用公钥的关系，通过应用公钥ID来查找应用公钥。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同时，应用服务器应该返回应用公钥ID给应用，并由应用存储应用ID。"
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
466717(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
344818(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958414-832b0a6b338c903cdbd3e0b37078b552.png");

},
123562(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438459-c51fcb7446f951cbfca9998f5ed314f7.png");

},
468032(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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