"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["781071"], {
731053(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_local_key_management_device_attestation_attestation_signature_verification_attestation_signature_verification_servers_attestation_signature_verification_servers_md_c62_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-local-key-management-device-attestation-attestation-signature-verification-attestation-signature-verification-servers-attestation-signature-verification-servers-md-c62.json
var site_docs_system_security_huks_kit_huks_local_key_management_device_attestation_attestation_signature_verification_attestation_signature_verification_servers_attestation_signature_verification_servers_md_c62_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-local-key-management/device-attestation/attestation-signature-verification/attestation-signature-verification-servers/attestation-signature-verification-servers","title":"服务器端开发","description":"使用前提","source":"@site/docs/system-security/huks-kit/huks-local-key-management/device-attestation/attestation-signature-verification/attestation-signature-verification-servers/attestation-signature-verification-servers.md","sourceDirName":"system-security/huks-kit/huks-local-key-management/device-attestation/attestation-signature-verification/attestation-signature-verification-servers","slug":"/system-security/huks-kit/huks-local-key-management/device-attestation/attestation-signature-verification/attestation-signature-verification-servers/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/device-attestation/attestation-signature-verification/attestation-signature-verification-servers/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"服务器端开发","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/attestation-signature-verification-servers","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用端开发","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/device-attestation/attestation-signature-verification/attestation-signature-verification-apps/"},"next":{"title":"验证应用请求真实性集成设计实践","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/device-attestation/device-attestation-practice/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-local-key-management/device-attestation/attestation-signature-verification/attestation-signature-verification-servers/attestation-signature-verification-servers.md


const frontMatter = {
	title: '服务器端开发',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/attestation-signature-verification-servers',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '服务器端开发';

const assets = {

};



const toc = [{
  "value": "使用前提",
  "id": "使用前提",
  "level": 2
}, {
  "value": "使用应用公钥对业务请求进行验签",
  "id": "使用应用公钥对业务请求进行验签",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
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
      id: "使用前提",
      children: "使用前提"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用应用公钥对业务请求进行验签的前提是服务器已经完成对密钥证明证书链进行校验和保存应用公钥，相关开发指南请参考："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/huks-kit/huks-local-key-management/device-attestation/device-attestation-guidelines/device-attestation-servers#%E6%A0%A1%E9%AA%8C%E5%AF%86%E9%92%A5%E8%AF%81%E6%98%8E%E8%AF%81%E4%B9%A6%E9%93%BE",
          children: "对密钥证明证书链进行校验"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/huks-kit/huks-local-key-management/device-attestation/device-attestation-guidelines/device-attestation-servers#%E4%BF%9D%E5%AD%98%E5%BA%94%E7%94%A8%E5%85%AC%E9%92%A5",
          children: "保存应用公钥"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用应用公钥对业务请求进行验签",
      children: "使用应用公钥对业务请求进行验签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用服务器首先校验挑战值Challenge，然后根据应用公钥ID查找应用公钥。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(439770)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安全建议：如果应用服务器在保存应用公钥时关联了用户ID，在使用应用公钥对业务请求进行验签时，应该根据应用公钥ID+当前登录的用户ID查找应用公钥。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用服务器再使用应用公钥对请求中的签名进行验签。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import org.bouncycastle.jce.provider.BouncyCastleProvider;\n\nimport java.io.ByteArrayOutputStream;\nimport java.io.FileInputStream;\nimport java.io.FileOutputStream;\nimport java.security.InvalidKeyException;\nimport java.security.KeyFactory;\nimport java.security.NoSuchAlgorithmException;\nimport java.security.NoSuchProviderException;\nimport java.security.PublicKey;\nimport java.security.Security;\nimport java.security.Signature;\nimport java.security.SignatureException;\nimport java.security.spec.X509EncodedKeySpec;\nimport java.util.Base64;\n\npublic class VerifySignature {\n    static {\n        Security.addProvider(new BouncyCastleProvider());\n    }\n\n    //保存HarmonyOS Hap应用生成的证书公钥的文件名\n    static String g_publicKeyFileName = \"d:\\\\attestPublicKey.pem\";\n    //HarmonyOS Hap应用使用私钥生成的签名数据，base64编码。\n    static String g_signedData = \"MEUCIQDtlrQa7HQccprCkR0nWTL7N6HEKY9PKN3DTk3aeN0/fQIgeqTrQ+7exiJhwTY3LwT7XhRHV1emOfTYho5qxyektho=\";\n    //待签名的数据\n    static String g_plaintext = \"123456\";\n    //签名算法，与应用端采用的算法保持一致，取值样例：SM3WITHSM2，SHA256withECDSA。\n    static String g_signAlg = \"SHA256withECDSA\";\n\n    public static void main(String[] args) {\n        VerifySignature verifySignature = new VerifySignature();\n        verifySignature.verifySignature(g_publicKeyFileName, g_plaintext, g_signedData, g_signAlg);\n    }\n\n    void verifySignature(String publicKeyFile, String plainText, String signedData, String signAlg) {\n        try {\n            PublicKey publicKey = readAttestPublicKey(publicKeyFile);\n            byte[] signedDataByte = Base64.getDecoder().decode(signedData);\n            System.out.println(\"signedDataByte len=\" + signedDataByte.length);\n            printBytes(signedDataByte);\n            byte[] plainTextBytes = plainText.getBytes();\n            System.out.println(\"plainTextBytes len=\" + plainTextBytes.length);\n            printBytes(plainTextBytes);\n            boolean result = doVerify(publicKey, plainTextBytes, signedDataByte, signAlg);\n            System.out.println(\"Verify signature result: \" + result);\n        } catch (Exception e) {\n            System.out.println(e);\n        }\n    }\n\n    PublicKey readAttestPublicKey(String publicKeyFileName) throws Exception {\n        //todo: 从服务器读取应用公钥\n        KeyFactory keyFactory = KeyFactory.getInstance(\"EC\", \"BC\");\n        X509EncodedKeySpec spec = new X509EncodedKeySpec(readFromFile(publicKeyFileName));\n        PublicKey publicKey = keyFactory.generatePublic(spec);\n        System.out.println(\"the app public key: \\n\" + publicKey);\n        return publicKey;\n    }\n\n    byte[] readFromFile(String fn) throws Exception {\n        FileInputStream inputStream = new FileInputStream(fn);\n        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();\n        byte[] bytes = new byte[1024];\n        int len;\n        do {\n            len = inputStream.read(bytes);\n            outputStream.write(bytes, 0, len);\n        } while (bytes.length == len);\n        inputStream.close();\n        return outputStream.toByteArray();\n    }\n\n    boolean doVerify(PublicKey publickey, byte[] unsignedData, byte[] signedData, String signAlg) {\n        boolean verifyResult = false;\n        try {\n            Signature signature = Signature.getInstance(signAlg, \"BC\");\n            signature.initVerify(publickey);\n            signature.update(unsignedData);\n            verifyResult = signature.verify(signedData);\n            return verifyResult;\n        } catch (NoSuchAlgorithmException | NoSuchProviderException | InvalidKeyException | SignatureException e) {\n            e.printStackTrace();\n        }\n        return verifyResult;\n    }\n\n    void printBytes(byte[] byteArray) {\n        for (int i = 0; i < byteArray.length; i++) {\n            System.out.printf(\"%02X \", byteArray[i]);\n        }\n        System.out.println();\n    }\n}\n"
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
439770(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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