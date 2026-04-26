"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["576563"], {
713517(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_certificate_kit_certificate_framework_create_parse_pkcs_12_create_parse_pkcs_12_md_134_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-certificate-kit-certificate-framework-create-parse-pkcs-12-create-parse-pkcs-12-md-134.json
var site_docs_system_security_device_certificate_kit_certificate_framework_create_parse_pkcs_12_create_parse_pkcs_12_md_134_namespaceObject = JSON.parse('{"id":"system-security/device-certificate-kit/certificate-framework/create-parse-pkcs12/create-parse-pkcs12","title":"证书PKCS12的创建和解析","description":"从API 18开始，支持解析PKCS12证书。","source":"@site/docs/system-security/device-certificate-kit/certificate-framework/create-parse-pkcs12/create-parse-pkcs12.md","sourceDirName":"system-security/device-certificate-kit/certificate-framework/create-parse-pkcs12","slug":"/system-security/device-certificate-kit/certificate-framework/create-parse-pkcs12/","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-parse-pkcs12/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"证书PKCS12的创建和解析","sidebar_position":14,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-parse-pkcs12","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"证书CMS解封装","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-cms-decapsulation-object/"},"next":{"title":"证书链在线校验证书吊销状态","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-verify-cerchainvalidator-revocation-object/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-certificate-kit/certificate-framework/create-parse-pkcs12/create-parse-pkcs12.md


const frontMatter = {
	title: '证书PKCS12的创建和解析',
	sidebar_position: 14,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-parse-pkcs12',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '证书PKCS12的创建和解析';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "证书pkcs12的创建和解析",
        children: "证书PKCS12的创建和解析"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API 18开始，支持解析PKCS12证书。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API 21开始，支持创建PKCS12证书。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PKCS12是一种用于存储和传输用户私钥、证书及其相关证书链的标准格式。该格式通过密码保护，将多个密码学对象打包为一个加密的容器文件，支持存储私钥、公钥证书、证书颁发机构证书以及其他相关的密码学数据。PKCS12广泛应用于数字证书的安全存储、跨平台传输和证书备份场景，是实现证书管理和PKI应用的重要标准之一。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["导入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert",
            children: "证书算法库框架模块"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cert } from '@kit.DeviceCertificateKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#certcreatepkcs1221",
            children: "cert.createPkcs12"
          }), "创建PKCS12文件。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#certparsepkcs1218",
            children: "cert.parsePkcs12"
          }), "解析PKCS12文件。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "异步方法示例："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cert } from '@kit.DeviceCertificateKit';\n\n// string转Uint8Array。\nfunction stringToUint8Array(str: string): Uint8Array {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; i++) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nasync function createX509Cert(certData: string): Promise<cert.X509Cert> {\n  // 证书二进制数据，需业务自行赋值。\n  let encodingBlob: cert.EncodingBlob = {\n    data: stringToUint8Array(certData),\n    // 根据encodingData的格式进行赋值，支持FORMAT_PEM和FORMAT_DER。\n    encodingFormat: cert.EncodingFormat.FORMAT_PEM\n  };\n\n  let x509Cert: cert.X509Cert = {} as cert.X509Cert;\n  try {\n    x509Cert = await cert.createX509Cert(encodingBlob);\n  } catch (err) {\n    console.error(`createX509Cert failed: errCode: ${err.code}, message: ${err.message}`);\n  }\n  return x509Cert;\n}\n\nlet priKey = '-----BEGIN PRIVATE KEY-----\\n' +\n  'MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC9kBV6Cqd3vSi5\\n' +\n  'RuRAWjXEvsfD20ekCYyeJvnnSrHwnKodbF8VWFSv4sqYzMnxObpDLyQw0Uu08tbn\\n' +\n  'EQvxv0lOwnWkZR+Oc3M9Ow1uhDkm3eFbY5858mAmtY7Sqzhd0LS9k8Q57FRqOrQm\\n' +\n  '7ngHb0O+yjCIn/zmjyEuw51/cPDTM4h3P3di9nhbIg+UOMfkDbuSKRD7UvVV/JZi\\n' +\n  'BklF5ZrjFYgzYnWKv7N7XkYMGkaOx8+tue24eK06SapQWDLRnRPCVePV6xtoCmbN\\n' +\n  'A3ib/Uvr0qvRwPDCzGGOW9JvQdrI6Z/GD9nt5hqHB15iJVNxkDQtugv14qeDsFPS\\n' +\n  'IU8CtkCbAgMBAAECggEBAKbMmMlJhLCM5r+ZDJE/j55ujRLe6XwC1xP2keEeTdK9\\n' +\n  '18aKLGR41BPsSH8JfAxh0m75lSvLjoVLRSQPUOZIfjXqUF/2hzzug5F2W8xKVovH\\n' +\n  'o1uqHlp71nVZPrJK7Q9H7TH/SyP4uxK6UvkKzt0j34WLHgeqV3t8qCMhB34zIAWG\\n' +\n  'BcAuKJNRZGvMvjK99OSOh0SyvGQ5Yb5vyj1/znx3gM4z4deYXxDSyCO0m5I16jmM\\n' +\n  'gBEUG0UDUp8Xr2xs/EkhhWYRT1bkDlYZ9IuCbH/vB1YJJFdaO2tDivDUF6IObvNt\\n' +\n  'GaVuLlA/rSOJmJFBetrm7n+O2vNJxvoQmBYDKm3+qYkCgYEA9p5C1ZY5XfwwOcqi\\n' +\n  'KQ+Asd2NWLG2blhsII5wB8uPhFapjV0S9xTabScUD35AfxHgctafpZeQk4x5niRP\\n' +\n  'BHq7hpitaDdYs6A/jhZ7fdVYKb1KRTDt1LXmcg0qVmi/ANNvjhqjvyZM+pEj8yxM\\n' +\n  'aOl4isbBfUbzSsEbda3LcHi6+w8CgYEAxMYtkl3gbXJcgbAEdW+nMMQGoFDLkgyu\\n' +\n  'n0ZYuRRrWLnnUzZUyqNBwQUaZpwxHaAqi0OAEGSRSZBKRHz9IA2iP9YzcaJ0WtpB\\n' +\n  'CPqwBZjrCaVEpHldo2pIdujysXgiXRUiE+VR9ViDmftoVbdL6kttGS08jBBDVIV/\\n' +\n  'uQgC/q29UbUCgYAJHirMaMRwNB24VUSPjhItAUrzh4Z+J+i/f2Sm9SC2PNoB7vn/\\n' +\n  'hpbYyEQWmo1Z5VhOBp9aaPMgcWYhsaf2O29pd4WZv8oYwgj3gN9J9LRQvr3bNwbk\\n' +\n  'AWGmv9Pb4/2D001hjJyXOZxI+0q/99hPXKpnPxfyQMhH8EHKpQVLgDsxgwKBgEiH\\n' +\n  '+DJUci5Fkj2ngO08u7bo+rxLK85o6FEDYB7QnQT2eYMdqsGKzej1FZcvCZeu+x+c\\n' +\n  'QO9J8pfYHNgD7lXLULwRG6NOS29VtdU2en2FsVU72wJ5Tf+3ZICYOyUZcCk5afdF\\n' +\n  'dyFlgBTZK8s0pkH1jYBTQVcrg3X7Q2oTvu7bYcZlAoGAUwQI11mMR8oqfgWMoI/1\\n' +\n  'smOoq9qSMlutuWBjoPkbtJEGHEXAvjW1kgdBlPjUCwn6j+oIDLYu8DbfQRdiFQeP\\n' +\n  'rVCbbgOgayVpr+8Tv2DqB370GwBpOpuq0yiiN+c39Y0u03Yfve3icyl8+lN1t4h6\\n' +\n  'a20rj9HG4sb8tUIHPBv0dgY=\\n' +\n  '-----END PRIVATE KEY-----\\n';\n\nlet othercerts = '-----BEGIN CERTIFICATE-----\\n' +\n  'MIIDZTCCAk0CFAoqA7Irtoo7/3+sfOHy0s91pKkiMA0GCSqGSIb3DQEBCwUAMG8x\\n' +\n  'CzAJBgNVBAYTAkVOMQ0wCwYDVQQIDARURVNUMQ0wCwYDVQQHDAR4aWFuMQ8wDQYD\\n' +\n  'VQQKDAZodWF3ZWkxDTALBgNVBAsMBHhpYW4xDTALBgNVBAMMBHhpYW4xEzARBgkq\\n' +\n  'hkiG9w0BCQEWBHhpYW4wHhcNMjUwODE0MTE1NDM0WhcNMjYwODE0MTE1NDM0WjBv\\n' +\n  'MQswCQYDVQQGEwJFTjENMAsGA1UECAwEVEVTVDENMAsGA1UEBwwEeGlhbjEPMA0G\\n' +\n  'A1UECgwGaHVhd2VpMQ0wCwYDVQQLDAR4aWFuMQ0wCwYDVQQDDAR4aWFuMRMwEQYJ\\n' +\n  'KoZIhvcNAQkBFgR4aWFuMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA\\n' +\n  'wk4aByV5nOw+zIh/1agaN7rQyk+NFuXlYSwINrONRZt8zePSxhxz6gMq0XAb8ld0\\n' +\n  'DFC5onGQEI4ED8iP3v7C7yHqIAybTmIy22RWWk8c6h9S40Azp/YHujTTRs2XMe9G\\n' +\n  'A/iKed9DwLclbv6+m+WPmIvgFFAJlebtFI6X0E/zBxs/TknR8tJ2uk2G/CGCBlo5\\n' +\n  'bbSz5RIPfEmz93rR7prMxQLOsvfdNewNlhe82jxMKfzGEPXYXUj+Xwp8ep+aaUTr\\n' +\n  'Kb6Thvx7+uOBxgMM1crREepTKJM/4bsOpb2yIXXcOqclUPAZBvtzIjgs/DdKtCZo\\n' +\n  '0Jzr3gUbDJeE2xd+DcADxQIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQA5RyDOMYJV\\n' +\n  'AsdBUihPvnnakKfAY9CYN9I1tR0b9DaboeL+bONeIKzXyFdDrAj6eZLKZLUblFlH\\n' +\n  'BZnbP4lNwfYjmNgp4j7cqSIFVwd2Y+6T29pK6T6XYRsFGOaSp7wFzXplfbP8Ou1b\\n' +\n  'o2zTZWWWHbiExuXot4RfQkgH3Zhk5zjJGWvaOksvEhJUaufkWAXbRY2KHmH64dDB\\n' +\n  'Bgp50CPObTuc2a+5PAi7W5nj1se2OqKvepoeYLl8pfF/GFRqrvcII9kCm0oyMqBx\\n' +\n  '25R7aCNtSnENZnvRBspdYcX8zu6fR1qf0JmpLqLw5pPxJ2Puvq7g+33GWJ3Gq45f\\n' +\n  'ZcLXS+9LpW3a\\n' +\n  '-----END CERTIFICATE-----\\n';\n\nlet certData = '-----BEGIN CERTIFICATE-----\\n' +\n  'MIIDZzCCAk8CFCwQ5cxuFI+fsf/2fkG4gy8UT1gmMA0GCSqGSIb3DQEBCwUAMG8x\\n' +\n  'CzAJBgNVBAYTAkVOMQ0wCwYDVQQIDARURVNUMQ0wCwYDVQQHDAR4aWFuMQ8wDQYD\\n' +\n  'VQQKDAZodWF3ZWkxDTALBgNVBAsMBHhpYW4xDTALBgNVBAMMBHhpYW4xEzARBgkq\\n' +\n  'hkiG9w0BCQEWBHhpYW4wHhcNMjUwODE0MTE1NTQ1WhcNMjYwODE0MTE1NTQ1WjBx\\n' +\n  'MQswCQYDVQQGEwJHVDEPMA0GA1UECAwGaHVhd2VpMQ0wCwYDVQQHDAR4aWFuMQ8w\\n' +\n  'DQYDVQQKDAZodWF3ZWkxDTALBgNVBAsMBHhpYW4xDTALBgNVBAMMBHhpYW4xEzAR\\n' +\n  'BgkqhkiG9w0BCQEWBHhpYW4wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIB\\n' +\n  'AQC9kBV6Cqd3vSi5RuRAWjXEvsfD20ekCYyeJvnnSrHwnKodbF8VWFSv4sqYzMnx\\n' +\n  'ObpDLyQw0Uu08tbnEQvxv0lOwnWkZR+Oc3M9Ow1uhDkm3eFbY5858mAmtY7Sqzhd\\n' +\n  '0LS9k8Q57FRqOrQm7ngHb0O+yjCIn/zmjyEuw51/cPDTM4h3P3di9nhbIg+UOMfk\\n' +\n  'DbuSKRD7UvVV/JZiBklF5ZrjFYgzYnWKv7N7XkYMGkaOx8+tue24eK06SapQWDLR\\n' +\n  'nRPCVePV6xtoCmbNA3ib/Uvr0qvRwPDCzGGOW9JvQdrI6Z/GD9nt5hqHB15iJVNx\\n' +\n  'kDQtugv14qeDsFPSIU8CtkCbAgMBAAEwDQYJKoZIhvcNAQELBQADggEBALuqlvql\\n' +\n  'q/5SVghmtdzVNlsif9JofSgJhmww3r8HblZ7zD7ALfR6JcxxbBJYdBIn6mf2eNx/\\n' +\n  'kTzwYs94D12PhyAP63AcDxS/4Sh7QhmnNIx2SGi/rbFdPm8cmkaFfwr5gQP+ouNB\\n' +\n  '1e7vVyNpSjr4F8YcfjOHPofoCdWaOaBPrM760h711y/BTVMjuYkdzn0D1bHZIBc+\\n' +\n  'tljIMWXKsTwR6wCIpnFRJbEATTBwV843Q071d62jYueLgdS2wT39Syqb3ao3aHAS\\n' +\n  'ZI8k9GgNNKD4qBAZUbQVCs6diTBbeUMaqJ2N+tcQfmGfnNZK+/olEF6Ue/H0LZzY\\n' +\n  'nZSOvPxc0c2O34k=\\n' +\n  '-----END CERTIFICATE-----\\n';\n\nasync function doTestCreatePkcs12() {\n  const caCert = await createX509Cert(othercerts);\n  const x509Cert = await createX509Cert(certData);\n\n  let data: cert.Pkcs12Data = {\n    privateKey: priKey,\n    cert: x509Cert,\n    otherCerts: [caCert]\n  }\n\n  let keyParam: cert.PbesParams = {\n    saltLen: 16,\n    iterations: 2048,\n    encryptionAlgorithm: cert.PbesEncryptionAlgorithm.AES_192_CBC\n  }\n\n  let certParam: cert.PbesParams = {\n    saltLen: 16,\n    iterations: 2048,\n    encryptionAlgorithm: cert.PbesEncryptionAlgorithm.AES_256_CBC\n  }\n\n  let config: cert.Pkcs12CreationConfig = {\n    password: '123456',\n    keyEncParams: keyParam,\n    encryptCert: true,\n    certEncParams: certParam,\n    macSaltLen: 16,\n    macIterations: 2048,\n    macDigestAlgorithm: cert.Pkcs12MacDigestAlgorithm.SHA384\n  }\n\n  try {\n    let p12 = await cert.createPkcs12(data, config);\n    console.info(`createPkcs12 result: success, p12 = ` + p12);\n    let out: cert.Pkcs12Data = await cert.parsePkcs12(p12, '123456');\n    console.info(`parsePKCS12 result: success.`);\n    if (out.privateKey) {\n      console.info(`privateKey:` + out.privateKey.toString());\n    }\n    if (out.cert) {\n      console.info(`cert:` + out.cert.toString());\n    }\n    if (out.otherCerts && Array.isArray(out.otherCerts)) {\n      console.info(`otherCerts counts: `, out.otherCerts.length);\n      out.otherCerts.forEach((cert, idx) => {\n        console.info(`otherCerts[${idx}]:\\n${cert.toString()}`);\n      });\n    } else {\n      console.info(`otherCerts is empty or not an array.`);\n    }\n  } catch (err) {\n    console.error(`doTestCreatePkcs12 failed: errCode: ${err.code}, message: ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同步方法示例："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cert } from '@kit.DeviceCertificateKit';\n\n// string转Uint8Array。\nfunction stringToUint8Array(str: string): Uint8Array {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; i++) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nasync function createX509Cert(certData: string): Promise<cert.X509Cert> {\n  // 证书二进制数据，需业务自行赋值。\n  let encodingBlob: cert.EncodingBlob = {\n    data: stringToUint8Array(certData),\n    // 根据encodingData的格式进行赋值，支持FORMAT_PEM和FORMAT_DER。\n    encodingFormat: cert.EncodingFormat.FORMAT_PEM\n  };\n\n  let x509Cert: cert.X509Cert = {} as cert.X509Cert;\n  try {\n    x509Cert = await cert.createX509Cert(encodingBlob);\n  } catch (err) {\n    console.error(`doTestCreatePkcs12 failed: errCode: ${err.code}, message: ${err.message}`);\n  }\n  return x509Cert;\n}\n\nlet priKey = '-----BEGIN PRIVATE KEY-----\\n' +\n  'MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC9kBV6Cqd3vSi5\\n' +\n  'RuRAWjXEvsfD20ekCYyeJvnnSrHwnKodbF8VWFSv4sqYzMnxObpDLyQw0Uu08tbn\\n' +\n  'EQvxv0lOwnWkZR+Oc3M9Ow1uhDkm3eFbY5858mAmtY7Sqzhd0LS9k8Q57FRqOrQm\\n' +\n  '7ngHb0O+yjCIn/zmjyEuw51/cPDTM4h3P3di9nhbIg+UOMfkDbuSKRD7UvVV/JZi\\n' +\n  'BklF5ZrjFYgzYnWKv7N7XkYMGkaOx8+tue24eK06SapQWDLRnRPCVePV6xtoCmbN\\n' +\n  'A3ib/Uvr0qvRwPDCzGGOW9JvQdrI6Z/GD9nt5hqHB15iJVNxkDQtugv14qeDsFPS\\n' +\n  'IU8CtkCbAgMBAAECggEBAKbMmMlJhLCM5r+ZDJE/j55ujRLe6XwC1xP2keEeTdK9\\n' +\n  '18aKLGR41BPsSH8JfAxh0m75lSvLjoVLRSQPUOZIfjXqUF/2hzzug5F2W8xKVovH\\n' +\n  'o1uqHlp71nVZPrJK7Q9H7TH/SyP4uxK6UvkKzt0j34WLHgeqV3t8qCMhB34zIAWG\\n' +\n  'BcAuKJNRZGvMvjK99OSOh0SyvGQ5Yb5vyj1/znx3gM4z4deYXxDSyCO0m5I16jmM\\n' +\n  'gBEUG0UDUp8Xr2xs/EkhhWYRT1bkDlYZ9IuCbH/vB1YJJFdaO2tDivDUF6IObvNt\\n' +\n  'GaVuLlA/rSOJmJFBetrm7n+O2vNJxvoQmBYDKm3+qYkCgYEA9p5C1ZY5XfwwOcqi\\n' +\n  'KQ+Asd2NWLG2blhsII5wB8uPhFapjV0S9xTabScUD35AfxHgctafpZeQk4x5niRP\\n' +\n  'BHq7hpitaDdYs6A/jhZ7fdVYKb1KRTDt1LXmcg0qVmi/ANNvjhqjvyZM+pEj8yxM\\n' +\n  'aOl4isbBfUbzSsEbda3LcHi6+w8CgYEAxMYtkl3gbXJcgbAEdW+nMMQGoFDLkgyu\\n' +\n  'n0ZYuRRrWLnnUzZUyqNBwQUaZpwxHaAqi0OAEGSRSZBKRHz9IA2iP9YzcaJ0WtpB\\n' +\n  'CPqwBZjrCaVEpHldo2pIdujysXgiXRUiE+VR9ViDmftoVbdL6kttGS08jBBDVIV/\\n' +\n  'uQgC/q29UbUCgYAJHirMaMRwNB24VUSPjhItAUrzh4Z+J+i/f2Sm9SC2PNoB7vn/\\n' +\n  'hpbYyEQWmo1Z5VhOBp9aaPMgcWYhsaf2O29pd4WZv8oYwgj3gN9J9LRQvr3bNwbk\\n' +\n  'AWGmv9Pb4/2D001hjJyXOZxI+0q/99hPXKpnPxfyQMhH8EHKpQVLgDsxgwKBgEiH\\n' +\n  '+DJUci5Fkj2ngO08u7bo+rxLK85o6FEDYB7QnQT2eYMdqsGKzej1FZcvCZeu+x+c\\n' +\n  'QO9J8pfYHNgD7lXLULwRG6NOS29VtdU2en2FsVU72wJ5Tf+3ZICYOyUZcCk5afdF\\n' +\n  'dyFlgBTZK8s0pkH1jYBTQVcrg3X7Q2oTvu7bYcZlAoGAUwQI11mMR8oqfgWMoI/1\\n' +\n  'smOoq9qSMlutuWBjoPkbtJEGHEXAvjW1kgdBlPjUCwn6j+oIDLYu8DbfQRdiFQeP\\n' +\n  'rVCbbgOgayVpr+8Tv2DqB370GwBpOpuq0yiiN+c39Y0u03Yfve3icyl8+lN1t4h6\\n' +\n  'a20rj9HG4sb8tUIHPBv0dgY=\\n' +\n  '-----END PRIVATE KEY-----\\n';\n\nlet othercerts = '-----BEGIN CERTIFICATE-----\\n' +\n  'MIIDZTCCAk0CFAoqA7Irtoo7/3+sfOHy0s91pKkiMA0GCSqGSIb3DQEBCwUAMG8x\\n' +\n  'CzAJBgNVBAYTAkVOMQ0wCwYDVQQIDARURVNUMQ0wCwYDVQQHDAR4aWFuMQ8wDQYD\\n' +\n  'VQQKDAZodWF3ZWkxDTALBgNVBAsMBHhpYW4xDTALBgNVBAMMBHhpYW4xEzARBgkq\\n' +\n  'hkiG9w0BCQEWBHhpYW4wHhcNMjUwODE0MTE1NDM0WhcNMjYwODE0MTE1NDM0WjBv\\n' +\n  'MQswCQYDVQQGEwJFTjENMAsGA1UECAwEVEVTVDENMAsGA1UEBwwEeGlhbjEPMA0G\\n' +\n  'A1UECgwGaHVhd2VpMQ0wCwYDVQQLDAR4aWFuMQ0wCwYDVQQDDAR4aWFuMRMwEQYJ\\n' +\n  'KoZIhvcNAQkBFgR4aWFuMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA\\n' +\n  'wk4aByV5nOw+zIh/1agaN7rQyk+NFuXlYSwINrONRZt8zePSxhxz6gMq0XAb8ld0\\n' +\n  'DFC5onGQEI4ED8iP3v7C7yHqIAybTmIy22RWWk8c6h9S40Azp/YHujTTRs2XMe9G\\n' +\n  'A/iKed9DwLclbv6+m+WPmIvgFFAJlebtFI6X0E/zBxs/TknR8tJ2uk2G/CGCBlo5\\n' +\n  'bbSz5RIPfEmz93rR7prMxQLOsvfdNewNlhe82jxMKfzGEPXYXUj+Xwp8ep+aaUTr\\n' +\n  'Kb6Thvx7+uOBxgMM1crREepTKJM/4bsOpb2yIXXcOqclUPAZBvtzIjgs/DdKtCZo\\n' +\n  '0Jzr3gUbDJeE2xd+DcADxQIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQA5RyDOMYJV\\n' +\n  'AsdBUihPvnnakKfAY9CYN9I1tR0b9DaboeL+bONeIKzXyFdDrAj6eZLKZLUblFlH\\n' +\n  'BZnbP4lNwfYjmNgp4j7cqSIFVwd2Y+6T29pK6T6XYRsFGOaSp7wFzXplfbP8Ou1b\\n' +\n  'o2zTZWWWHbiExuXot4RfQkgH3Zhk5zjJGWvaOksvEhJUaufkWAXbRY2KHmH64dDB\\n' +\n  'Bgp50CPObTuc2a+5PAi7W5nj1se2OqKvepoeYLl8pfF/GFRqrvcII9kCm0oyMqBx\\n' +\n  '25R7aCNtSnENZnvRBspdYcX8zu6fR1qf0JmpLqLw5pPxJ2Puvq7g+33GWJ3Gq45f\\n' +\n  'ZcLXS+9LpW3a\\n' +\n  '-----END CERTIFICATE-----\\n';\n\nlet certData = '-----BEGIN CERTIFICATE-----\\n' +\n  'MIIDZzCCAk8CFCwQ5cxuFI+fsf/2fkG4gy8UT1gmMA0GCSqGSIb3DQEBCwUAMG8x\\n' +\n  'CzAJBgNVBAYTAkVOMQ0wCwYDVQQIDARURVNUMQ0wCwYDVQQHDAR4aWFuMQ8wDQYD\\n' +\n  'VQQKDAZodWF3ZWkxDTALBgNVBAsMBHhpYW4xDTALBgNVBAMMBHhpYW4xEzARBgkq\\n' +\n  'hkiG9w0BCQEWBHhpYW4wHhcNMjUwODE0MTE1NTQ1WhcNMjYwODE0MTE1NTQ1WjBx\\n' +\n  'MQswCQYDVQQGEwJHVDEPMA0GA1UECAwGaHVhd2VpMQ0wCwYDVQQHDAR4aWFuMQ8w\\n' +\n  'DQYDVQQKDAZodWF3ZWkxDTALBgNVBAsMBHhpYW4xDTALBgNVBAMMBHhpYW4xEzAR\\n' +\n  'BgkqhkiG9w0BCQEWBHhpYW4wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIB\\n' +\n  'AQC9kBV6Cqd3vSi5RuRAWjXEvsfD20ekCYyeJvnnSrHwnKodbF8VWFSv4sqYzMnx\\n' +\n  'ObpDLyQw0Uu08tbnEQvxv0lOwnWkZR+Oc3M9Ow1uhDkm3eFbY5858mAmtY7Sqzhd\\n' +\n  '0LS9k8Q57FRqOrQm7ngHb0O+yjCIn/zmjyEuw51/cPDTM4h3P3di9nhbIg+UOMfk\\n' +\n  'DbuSKRD7UvVV/JZiBklF5ZrjFYgzYnWKv7N7XkYMGkaOx8+tue24eK06SapQWDLR\\n' +\n  'nRPCVePV6xtoCmbNA3ib/Uvr0qvRwPDCzGGOW9JvQdrI6Z/GD9nt5hqHB15iJVNx\\n' +\n  'kDQtugv14qeDsFPSIU8CtkCbAgMBAAEwDQYJKoZIhvcNAQELBQADggEBALuqlvql\\n' +\n  'q/5SVghmtdzVNlsif9JofSgJhmww3r8HblZ7zD7ALfR6JcxxbBJYdBIn6mf2eNx/\\n' +\n  'kTzwYs94D12PhyAP63AcDxS/4Sh7QhmnNIx2SGi/rbFdPm8cmkaFfwr5gQP+ouNB\\n' +\n  '1e7vVyNpSjr4F8YcfjOHPofoCdWaOaBPrM760h711y/BTVMjuYkdzn0D1bHZIBc+\\n' +\n  'tljIMWXKsTwR6wCIpnFRJbEATTBwV843Q071d62jYueLgdS2wT39Syqb3ao3aHAS\\n' +\n  'ZI8k9GgNNKD4qBAZUbQVCs6diTBbeUMaqJ2N+tcQfmGfnNZK+/olEF6Ue/H0LZzY\\n' +\n  'nZSOvPxc0c2O34k=\\n' +\n  '-----END CERTIFICATE-----\\n';\n\nasync function doTestCreatePkcs12Sync() {\n  const caCert = await createX509Cert(othercerts);\n  const x509Cert = await createX509Cert(certData);\n\n  let data: cert.Pkcs12Data = {\n    privateKey: priKey,\n    cert: x509Cert,\n    otherCerts: [caCert]\n  }\n\n  let keyParam: cert.PbesParams = {\n    saltLen: 16,\n    iterations: 2048,\n    encryptionAlgorithm: cert.PbesEncryptionAlgorithm.AES_192_CBC\n  }\n\n  let certParam: cert.PbesParams = {\n    saltLen: 16,\n    iterations: 2048,\n    encryptionAlgorithm: cert.PbesEncryptionAlgorithm.AES_256_CBC\n  }\n\n  let config: cert.Pkcs12CreationConfig = {\n    password: '123456',\n    keyEncParams: keyParam,\n    encryptCert: true,\n    certEncParams: certParam,\n    macSaltLen: 16,\n    macIterations: 2048,\n    macDigestAlgorithm: cert.Pkcs12MacDigestAlgorithm.SHA384\n  }\n\n  try {\n    let p12 = cert.createPkcs12Sync(data, config);\n    console.info(`createPkcs12Sync result: success, p12 = ` + p12);\n    let conf: cert.Pkcs12ParsingConfig = {\n      password: '123456',\n      needsCert: true,\n      needsPrivateKey: true,\n      privateKeyFormat: cert.EncodingBaseFormat.PEM,\n      needsOtherCerts: true,\n    };\n    let out: cert.Pkcs12Data = cert.parsePkcs12(p12, conf);\n    console.info(`parsePKCS12 result: success.`);\n    if (out.privateKey) {\n      console.info(`privateKey:` + out.privateKey.toString());\n    }\n    if (out.cert) {\n      console.info(`cert:` + out.cert.toString());\n    }\n    if (out.otherCerts && Array.isArray(out.otherCerts)) {\n      console.info(`otherCerts counts:`, out.otherCerts.length);\n      out.otherCerts.forEach((cert, idx) => {\n        console.info(`otherCerts[${idx}]:\\n${cert.toString()}`);\n      });\n    } else {\n      console.info(`otherCerts is empty or not an array.`);\n    }\n  } catch (err) {\n    console.error(`doTestCreatePkcs12 failed: errCode: ${err.code}, message: ${err.message}`);\n  }\n}\n"
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