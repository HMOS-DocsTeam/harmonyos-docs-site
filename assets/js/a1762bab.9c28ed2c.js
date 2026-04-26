"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["249540"], {
96281(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_key_generation_conversion_crypto_key_generation_conversion_dev_crypto_convert_string_data_to_asym_key_pair_crypto_convert_string_data_to_asym_key_pair_md_a17_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-key-generation-conversion-crypto-key-generation-conversion-dev-crypto-convert-string-data-to-asym-key-pair-crypto-convert-string-data-to-asym-key-pair-md-a17.json
var site_docs_system_security_crypto_architecture_kit_crypto_key_generation_conversion_crypto_key_generation_conversion_dev_crypto_convert_string_data_to_asym_key_pair_crypto_convert_string_data_to_asym_key_pair_md_a17_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-string-data-to-asym-key-pair/crypto-convert-string-data-to-asym-key-pair","title":"指定PEM格式字符串数据转换非对称密钥对(ArkTS)","description":"以RSA为例，根据指定的非对称密钥字符串数据，生成非对称密钥对（KeyPair）。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-string-data-to-asym-key-pair/crypto-convert-string-data-to-asym-key-pair.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-string-data-to-asym-key-pair","slug":"/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-string-data-to-asym-key-pair/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-string-data-to-asym-key-pair/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"指定PEM格式字符串数据转换非对称密钥对(ArkTS)","sidebar_position":15,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-convert-string-data-to-asym-key-pair","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用ECC压缩/非压缩点格式转换(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/o-convert-compressed-or-uncompressed-ecc-point-ndk/"},"next":{"title":"指定PEM格式字符串数据转换非对称密钥对(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-string-data-to-asym-key-pair-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-string-data-to-asym-key-pair/crypto-convert-string-data-to-asym-key-pair.md


const frontMatter = {
	title: '指定PEM格式字符串数据转换非对称密钥对(ArkTS)',
	sidebar_position: 15,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-convert-string-data-to-asym-key-pair',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '指定PEM格式字符串数据转换非对称密钥对(ArkTS)';

const assets = {

};



const toc = [{
  "value": "指定PEM格式字符串数据转换密钥对",
  "id": "指定pem格式字符串数据转换密钥对",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "指定pem格式字符串数据转换非对称密钥对arkts",
        children: "指定PEM格式字符串数据转换非对称密钥对(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以RSA为例，根据指定的非对称密钥字符串数据，生成非对称密钥对（KeyPair）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(959984)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对非对称密钥的convertPemKey操作："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "公钥需满足X.509规范、PKCS#1规范、PEM编码格式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "私钥需满足PKCS#8规范、PKCS#1规范、PEM编码格式。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "指定pem格式字符串数据转换密钥对",
      children: "指定PEM格式字符串数据转换密钥对"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec",
        children: "非对称密钥生成和转换规格"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreateasykeygenerator",
            children: "cryptoFramework.createAsyKeyGenerator"
          }), "，指定字符串参数'RSA1024'，创建RSA密钥类型为RSA1024、素数个数为2的非对称密钥生成器（AsyKeyGenerator）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生成RSA非对称密钥时，默认素数为2，此处省略了参数PRIMES_2。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#convertpemkey12",
            children: "AsyKeyGenerator.convertPemKey"
          }), "，传入二进制密钥数据，生成非对称密钥对象（KeyPair）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#getencodedpem12",
            children: "AsyKeyGenerator.getEncodedPem"
          }), "，将非对称密钥对象中的公钥转换成pkcs1或x509格式，私钥转换成pkcs1或pkcs8格式。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以Promise方式生成RSA密钥对为例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\n\nlet priKeyPkcs1Str1024: string =\n  '-----BEGIN RSA PRIVATE KEY-----\\n' +\n    'MIICXQIBAAKBgQCwIN3mr21+N96ToxnVnaS+xyK9cNRAHiHGgrbjHw6RAj3V+l+W\\n' +\n    'Y68IhIe3DudVlzE9oMjeOQwkMkq//HCxNlIlFR6O6pa0mrXSwPRE7YKG97CeKk2g\\n' +\n    'YOS8YEh8toAvm7xKbiLkXuuMlxrjP2j/mb5iI/UASFSPZiQ/IyxDr0AQaQIDAQAB\\n' +\n    'AoGAEvBFzBNa+7J4PXnRQlYEK/tvsd0bBZX33ceacMubHl6WVZbphltLq+fMTBPP\\n' +\n    'LjXmtpC+aJ7Lvmyl+wTi/TsxE9vxW5JnbuRT48rnZ/Xwq0eozDeEeIBRrpsr7Rvr\\n' +\n    '7ctrgzr4m4yMHq9aDgpxj8IR7oHkfwnmWr0wM3FuiVlj650CQQDineeNZ1hUTkj4\\n' +\n    'D3O+iCi3mxEVEeJrpqrmSFolRMb+iozrIRKuJlgcOs+Gqi2fHfOTTL7LkpYe8SVg\\n' +\n    'e3JxUdVLAkEAxvcZXk+byMFoetrnlcMR13VHUpoVeoV9qkv6CAWLlbMdgf7uKmgp\\n' +\n    'a1Yp3QPDNQQqkPvrqtfR19JWZ4uy1qREmwJALTU3BjyBoH/liqb6fh4HkWk75Som\\n' +\n    'MzeSjFIOubSYxhq5tgZpBZjcpvUMhV7Zrw54kwASZ+YcUJvmyvKViAm9NQJBAKF7\\n' +\n    'DyXSKrem8Ws0m1ybM7HQx5As6l3EVhePDmDQT1eyRbKp+xaD74nkJpnwYdB3jyyY\\n' +\n    'qc7A1tj5J5NmeEFolR0CQQCn76Xp8HCjGgLHw9vg7YyIL28y/XyfFyaZAzzK+Yia\\n' +\n    'akNwQ6NeGtXSsuGCcyyfpacHp9xy8qXQNKSkw03/5vDO\\n' +\n    '-----END RSA PRIVATE KEY-----\\n';\nlet publicPkcs1Str1024: string =\n  '-----BEGIN RSA PUBLIC KEY-----\\n' +\n    'MIGJAoGBALAg3eavbX433pOjGdWdpL7HIr1w1EAeIcaCtuMfDpECPdX6X5ZjrwiE\\n' +\n    'h7cO51WXMT2gyN45DCQySr/8cLE2UiUVHo7qlrSatdLA9ETtgob3sJ4qTaBg5Lxg\\n' +\n    'SHy2gC+bvEpuIuRe64yXGuM/aP+ZvmIj9QBIVI9mJD8jLEOvQBBpAgMBAAE=\\n' +\n    '-----END RSA PUBLIC KEY-----\\n';\n\nasync function testPkcs1ToPkcs8ByPromise() {\n  let asyKeyGenerator = cryptoFramework.createAsyKeyGenerator('RSA1024');\n  let keyPair = await asyKeyGenerator.convertPemKey(publicPkcs1Str1024, priKeyPkcs1Str1024);\n  let priPemKey = keyPair.priKey;\n  let pubPemKey = keyPair.pubKey;\n  let priString = priPemKey.getEncodedPem('PKCS8');\n  let pubString = pubPemKey.getEncodedPem('X509');\n  console.info('[promise]TestPkcs1ToPkcs8ByPromise priString output: ' + priString);\n  console.info('[promise]TestPkcs1ToPkcs8ByPromise pubString output: ' + pubString);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["同步返回结果（调用方法", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#convertpemkeysync12",
            children: "convertPemKeySync"
          }), "）："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\n\nlet priKeyPkcs1Str1024: string =\n  '-----BEGIN RSA PRIVATE KEY-----\\n' +\n    'MIICXQIBAAKBgQCwIN3mr21+N96ToxnVnaS+xyK9cNRAHiHGgrbjHw6RAj3V+l+W\\n' +\n    'Y68IhIe3DudVlzE9oMjeOQwkMkq//HCxNlIlFR6O6pa0mrXSwPRE7YKG97CeKk2g\\n' +\n    'YOS8YEh8toAvm7xKbiLkXuuMlxrjP2j/mb5iI/UASFSPZiQ/IyxDr0AQaQIDAQAB\\n' +\n    'AoGAEvBFzBNa+7J4PXnRQlYEK/tvsd0bBZX33ceacMubHl6WVZbphltLq+fMTBPP\\n' +\n    'LjXmtpC+aJ7Lvmyl+wTi/TsxE9vxW5JnbuRT48rnZ/Xwq0eozDeEeIBRrpsr7Rvr\\n' +\n    '7ctrgzr4m4yMHq9aDgpxj8IR7oHkfwnmWr0wM3FuiVlj650CQQDineeNZ1hUTkj4\\n' +\n    'D3O+iCi3mxEVEeJrpqrmSFolRMb+iozrIRKuJlgcOs+Gqi2fHfOTTL7LkpYe8SVg\\n' +\n    'e3JxUdVLAkEAxvcZXk+byMFoetrnlcMR13VHUpoVeoV9qkv6CAWLlbMdgf7uKmgp\\n' +\n    'a1Yp3QPDNQQqkPvrqtfR19JWZ4uy1qREmwJALTU3BjyBoH/liqb6fh4HkWk75Som\\n' +\n    'MzeSjFIOubSYxhq5tgZpBZjcpvUMhV7Zrw54kwASZ+YcUJvmyvKViAm9NQJBAKF7\\n' +\n    'DyXSKrem8Ws0m1ybM7HQx5As6l3EVhePDmDQT1eyRbKp+xaD74nkJpnwYdB3jyyY\\n' +\n    'qc7A1tj5J5NmeEFolR0CQQCn76Xp8HCjGgLHw9vg7YyIL28y/XyfFyaZAzzK+Yia\\n' +\n    'akNwQ6NeGtXSsuGCcyyfpacHp9xy8qXQNKSkw03/5vDO\\n' +\n    '-----END RSA PRIVATE KEY-----\\n';\nlet publicPkcs1Str1024: string =\n  '-----BEGIN RSA PUBLIC KEY-----\\n' +\n    'MIGJAoGBALAg3eavbX433pOjGdWdpL7HIr1w1EAeIcaCtuMfDpECPdX6X5ZjrwiE\\n' +\n    'h7cO51WXMT2gyN45DCQySr/8cLE2UiUVHo7qlrSatdLA9ETtgob3sJ4qTaBg5Lxg\\n' +\n    'SHy2gC+bvEpuIuRe64yXGuM/aP+ZvmIj9QBIVI9mJD8jLEOvQBBpAgMBAAE=\\n' +\n    '-----END RSA PUBLIC KEY-----\\n';\n\nfunction testPkcs1ToPkcs8BySync() {\n  let asyKeyGenerator = cryptoFramework.createAsyKeyGenerator('RSA1024');\n  try {\n    let keyPairData = asyKeyGenerator.convertPemKeySync(publicPkcs1Str1024, priKeyPkcs1Str1024);\n    if (keyPairData != null) {\n      console.info('[Sync]: convert pem key pair result: success.');\n    } else {\n      console.error('[Sync]: convert pem key pair result: fail.');\n    }\n    let priPemKey = keyPairData.priKey;\n    let pubPemKey = keyPairData.pubKey;\n    let priString = priPemKey.getEncodedPem('PKCS8');\n    let pubString = pubPemKey.getEncodedPem('X509');\n    console.info('[Sync]TestPkcs1ToPkcs8BySync priString output: ' + priString);\n    console.info('[Sync]TestPkcs1ToPkcs8BySync pubString output: ' + pubString);\n  } catch (e) {\n    console.error(`Sync failed: errCode: ${e.code}, message: ${e.message}`);\n  }\n}\n"
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
959984(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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