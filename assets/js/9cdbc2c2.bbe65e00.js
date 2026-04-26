"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["349446"], {
665940(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_security_kit_guide_devicesecurity_taas_dev_devicesecurity_taas_verify_devicesecurity_taas_verifysignature_devicesecurity_taas_verifysignature_md_9cd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-security-kit-guide-devicesecurity-taas-dev-devicesecurity-taas-verify-devicesecurity-taas-verifysignature-devicesecurity-taas-verifysignature-md-9cd.json
var site_docs_system_security_device_security_kit_guide_devicesecurity_taas_dev_devicesecurity_taas_verify_devicesecurity_taas_verifysignature_devicesecurity_taas_verifysignature_md_9cd_namespaceObject = JSON.parse('{"id":"system-security/device-security-kit-guide/devicesecurity-taas-dev/devicesecurity-taas-verify/devicesecurity-taas-verifysignature/devicesecurity-taas-verifysignature","title":"验证签名","description":"如果需要在端侧校验安全图像数据或安全地理位置数据签名的有效性，可以使用Crypto Architecture Kit，使用方法请参考“使用ECDSA密钥对签名验签”章节。","source":"@site/docs/system-security/device-security-kit-guide/devicesecurity-taas-dev/devicesecurity-taas-verify/devicesecurity-taas-verifysignature/devicesecurity-taas-verifysignature.md","sourceDirName":"system-security/device-security-kit-guide/devicesecurity-taas-dev/devicesecurity-taas-verify/devicesecurity-taas-verifysignature","slug":"/system-security/device-security-kit-guide/devicesecurity-taas-dev/devicesecurity-taas-verify/devicesecurity-taas-verifysignature/","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-taas-dev/devicesecurity-taas-verify/devicesecurity-taas-verifysignature/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"验证签名","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-taas-verifysignature","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"验证匿名证书链","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-taas-dev/devicesecurity-taas-verify/devicesecurity-taas-verifycertchain/"},"next":{"title":"数字盾服务概述","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-security-kit-guide/devicesecurity-taas-dev/devicesecurity-taas-verify/devicesecurity-taas-verifysignature/devicesecurity-taas-verifysignature.md


const frontMatter = {
	title: '验证签名',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-taas-verifysignature',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '验证签名';

const assets = {

};



const toc = [{
  "value": "获取签名数据",
  "id": "获取签名数据",
  "level": 2
}, {
  "value": "安全摄像头图像数据格式",
  "id": "安全摄像头图像数据格式",
  "level": 3
}, {
  "value": "压缩、裁剪后安全图像数据格式",
  "id": "压缩裁剪后安全图像数据格式",
  "level": 3
}, {
  "value": "安全地理位置数据格式",
  "id": "安全地理位置数据格式",
  "level": 3
}, {
  "value": "验证签名",
  "id": "验证签名-1",
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
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "验证签名",
        children: "验证签名"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果需要在端侧校验安全图像数据或安全地理位置数据签名的有效性，可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-architecture-kit-intro",
        children: "Crypto Architecture Kit"
      }), "，使用方法请参考“", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-ecdsa-sign-sig-verify",
        children: "使用ECDSA密钥对签名验签"
      }), "”章节。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(241712)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["推荐开发者在服务器端完成安全图像或安全地理位置的签名验证，请参考“", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/device-attestation/device-attestation-guidelines/device-attestation-servers",
        children: "Device Certificate Kit 设备真实性证明服务器端开发"
      }), "”。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取签名数据",
      children: "获取签名数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "安全摄像头图像数据格式",
      children: "安全摄像头图像数据格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安全图像数据的结构如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(259437)/* ["default"] */.A) + "",
        width: "925",
        height: "258"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中，用户数据和图像数据为被签名的原始数据，图像数据长度固定为460800字节，签名数据是Base64编码的签名结果，开发者需要解析出这些数据用来验证安全图像数据签名。参考代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { util } from '@kit.ArkTS';\n\n// 获取被签名的原始数据\nconst secureImageBuffer = new ArrayBuffer(461844); // 实际使用时请替换为Camera Kit获取到的安全图像buffer\nconst view = new DataView(secureImageBuffer);\nconst imageBufferLength = 460800; // 安全图像buffer长度固定为460800\nconst userDataLength = view.getUint32(0, true); // 获取用户数据长度\nconst originData = secureImageBuffer.slice(4, 4 + userDataLength + imageBufferLength);\n// 获取签名结果\nconst maxSignatureBufferLength = 512;\nconst signatureBuffer = secureImageBuffer.slice(4 + userDataLength + imageBufferLength,\n  4 + userDataLength + imageBufferLength + maxSignatureBufferLength);\nconst signatureString = String.fromCharCode(...new Uint8Array(signatureBuffer).filter(code => code !== 0));\nconst base64Helper = new util.Base64Helper();\nconst signatureData = base64Helper.decodeSync(signatureString);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "压缩裁剪后安全图像数据格式",
      children: "压缩、裁剪后安全图像数据格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "压缩、裁剪处理后返回的安全图像数据的结构如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(996498)/* ["default"] */.A) + "",
        width: "920",
        height: "437"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回的处理后安全图像数据具体包含："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "魔数Magic，其值当前默认为 0x53494D47，开发者可以通过检查Magic字段来验证返回的图像数据的正确性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "版本Version，其值当前默认为 1，开发者可以通过检查Version字段来验证返回的图像数据的正确性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户数据长度（16到127 Bytes之间）和用户数据。其中，用户数据是开发者在调用initializeAttestContext初始化证明会话时，传入的相关数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "图像数据长度，图像宽度（单位为：pixel，取值范围在0到640之间），图像高度（单位为：pixel，取值范围在0到480之间）和图像数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "签名数据，是Base64编码的签名结果。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中，签名的原始数据由用户数据和图像数据组成，开发者需要解析出这些数据用来验证安全图像数据签名。参考代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { util } from '@kit.ArkTS';\n\nlet offset = 0;\nconst secureImageBuffer = new ArrayBuffer(461844); // 实际使用时请替换为Camera Kit获取到的安全图像buffer\nconst view = new DataView(secureImageBuffer);\nconst magic = view.getUint32(offset, true); // 获取安全图像的Magic字段，该值默认为 0x53494D47\noffset += 4;\nconst version = view.getUint32(offset, true); // 获取安全图像的Version字段，该值默认为 1\noffset += 4;\nconst userDataLength = view.getUint32(offset, true); // 获取用户数据长度\noffset += 4;\nconst userdata = secureImageBuffer.slice(offset, offset + userDataLength);\noffset += userDataLength;\nconst imageLen = view.getUint32(offset, true); // 获取压缩、裁剪处理后的图像数据长度\noffset += 4;\nconst imageWidth = view.getUint32(offset, true); // 获取图像的宽度，单位为像素\noffset += 4;\nconst imageHeight = view.getUint32(offset, true); // 获取图像的高度，单位为像素\noffset += 4;\nconst imageBuffer = secureImageBuffer.slice(offset, offset + imageLen);\noffset += imageLen;\n// 获取被签名的原始数据\nconst totalLength = userdata.byteLength + imageBuffer.byteLength;\nconst originData = new Uint8Array(new ArrayBuffer(totalLength));\noriginData.set(new Uint8Array(userdata), 0);\noriginData.set(new Uint8Array(imageBuffer), userdata.byteLength);\n// 获取签名结果\nconst maxSignatureLength = 512;\nconst signatureBuffer = secureImageBuffer.slice(offset, offset + maxSignatureLength);\nconst signatureString = String.fromCharCode(...new Uint8Array(signatureBuffer).filter(code => code !== 0));\nconst base64Helper = new util.Base64Helper();\nconst signatureData = base64Helper.decodeSync(signatureString);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "安全地理位置数据格式",
      children: "安全地理位置数据格式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["安全地理位置数据的结构请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-taas-api/devicesecurity-taas-api",
        children: "TrustedAppService（可信应用服务）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对安全地理位置数据验签时，需要将返回的结构体中的数据拼接成字符串形式，格式要求如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数据排列顺序为：纬度、经度、高度、精确度、时间戳和用户数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "纬度、经度和高度类型为浮点型，精度为小数点后保留15位；精确度为浮点型，精度为小数点后保留6位；时间戳类型为64位正整数；用户数据类型为字符串。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数据之间的分隔符使用英文逗号。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "签名数据是Base64编码后的签名结果。获取签名和签名原始数据的参考代码（不含异常处理逻辑，由开发者根据业务场景实现）如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { trustedAppService } from '@kit.DeviceSecurityKit';\nimport { util } from '@kit.ArkTS';\n\n// 以下均为示例值，仅用于展示如何获取原始签名数据和签名结果\nconst location: trustedAppService.Location = {\n  latitude: 40.053903635898685,\n  longitude: 116.17356591910897,\n  altitude: 0,\n  accuracy: 11.160304069519043,\n  timestamp: 1722151680187\n};\nconst userData = \"trusted_app_service_userdata\";\nconst secureLocation: trustedAppService.SecureLocation = {\n  originalLocation: location,\n  userData: userData,\n  signature: \"MEQCIEAcJHgaU8aAoMqD1wgoxiXR5I4jmwVG6ncgSKkW4uBHAiBnfv96T+gt1ef83kNZ+U0gBLsq9byuBLP1RBx30hByuQ==\"\n};\n// 获取原始数据\nconst originString = secureLocation.originalLocation.latitude.toFixed(15) + ',' +\n  secureLocation.originalLocation.longitude.toFixed(15) + ',' +\n  secureLocation.originalLocation.altitude.toFixed(15) + ',' +\n  secureLocation.originalLocation.accuracy.toFixed(6) + ',' +\n  secureLocation.originalLocation.timestamp + ',' + secureLocation.userData.toString();\nconst textEncoder = new util.TextEncoder();\nconst originData = textEncoder.encodeInto(originString);\n// 获取签名结果\nconst base64Helper = new util.Base64Helper();\nconst signatureData = base64Helper.decodeSync(secureLocation.signature.toString());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "验证签名-1",
      children: "验证签名"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在安全摄像头场景和安全地理位置场景中，由于使用的是相同的证明密钥，因此签名验证的流程是一致的。结合“", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/device-security-kit-guide/devicesecurity-taas-dev/devicesecurity-taas-securecamera",
        children: "安全摄像头场景"
      }), "”和“", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/device-security-kit-guide/devicesecurity-taas-dev/devicesecurity-taas-securelocation",
        children: "安全地理位置场景"
      }), "”中获取到的原始数据和签名结果，验证签名的参考代码（不含异常处理逻辑，由开发者根据业务场景实现）如下："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从匿名证书链中获取公钥。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cert } from '@kit.DeviceCertificateKit';\nimport { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { util } from '@kit.ArkTS';\nimport { trustedAppService } from '@kit.DeviceSecurityKit';\n\n// 以安全摄像头场景为例，忽略异常情况处理\nconst userData = \"trusted_app_service_demo\";\nconst deviceId = 7483679320805398131;\nconst initProperties: Array<trustedAppService.AttestParam> = [\n  {\n    tag: trustedAppService.AttestTag.ATTEST_TAG_DEVICE_TYPE,\n    value: trustedAppService.AttestType.ATTEST_TYPE_CAMERA\n  },\n  {\n    tag: trustedAppService.AttestTag.ATTEST_TAG_DEVICE_ID,\n    value: BigInt(deviceId)\n  }\n];\nconst initOptions: trustedAppService.AttestOptions = {\n  properties: initProperties\n};\nconst returnResult = await trustedAppService.initializeAttestContext(userData, initOptions);\n// 解析匿名证书链数据，获取三级证书\nconst certChain = returnResult.certChains;\nconst certList = certChain[0].split('-----BEGIN CERTIFICATE-----');\nconst thirdCert = '-----BEGIN CERTIFICATE-----' + certList[1];\n// 获取公钥\nconst textEncoder = new util.TextEncoder();\nconst encodingBlob: cert.EncodingBlob = {\n  data: textEncoder.encodeInto(thirdCert),\n  encodingFormat: cert.EncodingFormat.FORMAT_PEM\n};\nconst x509Cert = await cert.createX509Cert(encodingBlob);\nconst asyKeyGenerator = cryptoFramework.createAsyKeyGenerator('ECC256');\nconst keyPair = asyKeyGenerator.convertKeySync(x509Cert.getPublicKey().getEncoded(), null);\nconst pubKey = keyPair.pubKey; // 证书中的公钥需要转换成cryptoFramework能够接收的格式\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建非对称密钥类型为ECC256、摘要算法为SHA256的verify实例，并使用步骤1中获取到的公钥进行初始化。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const verifier = cryptoFramework.createVerify('ECC256|SHA256');\nverifier.initSync(pubKey);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用原始数据和签名结果进行验证签名。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const originData = ...; // 请使用获取到的安全图像原始数据\nconst signatureData = ...; // 请使用获取到的签名结果\nconst inputData: cryptoFramework.DataBlob = {\n  data: new Uint8Array(originData)\n};\nconst signature: cryptoFramework.DataBlob = {\n  data: new Uint8Array(signatureData)\n};\n// 验证签名结果\nconst result = verifier.verifySync(inputData, signature);\n"
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
996498(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798740-294fa2e2afabf5aaf17100cab1382bbb.jpg");

},
259437(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478389-5d59d3ae4033df34b5db9efc7c608c08.png");

},
241712(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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