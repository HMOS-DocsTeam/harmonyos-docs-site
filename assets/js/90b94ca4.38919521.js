"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["111640"], {
801337(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_preparations_payment_real_name_preparations_payment_real_name_preparations_md_90b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-preparations-payment-real-name-preparations-payment-real-name-preparations-md-90b.json
var site_docs_payment_kit_guide_payment_preparations_payment_real_name_preparations_payment_real_name_preparations_md_90b_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-preparations/payment-real-name-preparations/payment-real-name-preparations","title":"（可选）用户身份验证服务接入准备","description":"如不涉及身份验证服务接入，可跳过该章节。","source":"@site/docs/payment-kit-guide/payment-preparations/payment-real-name-preparations/payment-real-name-preparations.md","sourceDirName":"payment-kit-guide/payment-preparations/payment-real-name-preparations","slug":"/payment-kit-guide/payment-preparations/payment-real-name-preparations/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-preparations/payment-real-name-preparations/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"（可选）用户身份验证服务接入准备","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-real-name-preparations","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"（可选）数字人民币接入准备","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-preparations/payment-digital-cny-pay-preparations/"},"next":{"title":"商户基础支付场景","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-payment-process/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-preparations/payment-real-name-preparations/payment-real-name-preparations.md


const frontMatter = {
	title: '（可选）用户身份验证服务接入准备',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-real-name-preparations',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '（可选）用户身份验证服务接入准备';

const assets = {

};



const toc = [{
  "value": "开启用户身份验证服务权限开关",
  "id": "开启用户身份验证服务权限开关",
  "level": 2
}, {
  "value": "上传开发者公钥及下载华为公钥",
  "id": "上传开发者公钥及下载华为公钥",
  "level": 2
}, {
  "value": "SM2公私钥对生成示例代码参考",
  "id": "sm2公私钥对生成示例代码参考",
  "level": 3
}, {
  "value": "SM2加密示例代码参考",
  "id": "sm2加密示例代码参考",
  "level": 3
}, {
  "value": "SM2解密示例代码参考",
  "id": "sm2解密示例代码参考",
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
        id: "可选用户身份验证服务接入准备",
        children: "（可选）用户身份验证服务接入准备"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如不涉及身份验证服务接入，可跳过该章节。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开启用户身份验证服务权限开关",
      children: "开启用户身份验证服务权限开关"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可登录", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
        children: "AppGallery Connect"
      }), "，在“项目设置 > 开放能力管理”的“鸿蒙支付服务”中开启身份验证服务相关权限开关。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(790704)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启身份验证服务相关权限开关时，开发者需签署一份“开发者协议”，开发者同意协议并提交申请资料后需要等待审核（审核周期一般在1-3个工作日）通过后才能使用相关服务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(192978)/* ["default"] */.A) + "",
        width: "1882",
        height: "398"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "上传开发者公钥及下载华为公钥",
      children: "上传开发者公钥及下载华为公钥"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可登录", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
        children: "AppGallery Connect"
      }), "，在“鸿蒙支付服务 > 身份验证服务”菜单中的“公钥管理”页签下完成开发者证书的上传以及华为公钥证书下载。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(692725)/* ["default"] */.A) + "",
        width: "2001",
        height: "873"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "证书使用如图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(986643)/* ["default"] */.A) + "",
        width: "2028",
        height: "3840"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "证书说明如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "证书"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "获取方式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "内容说明及使用场景"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "华为加密公钥"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
              children: "AppGallery Connect"
            }), "的“鸿蒙支付服务>身份验证服务>公钥管理”下载"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["华为支付服务器使用SM2加密算法生成的证书公钥。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "使用场景："
              })
            }), " 开发者可用对应的公钥证书对请求开放API接口的隐私字段进行加密，华为支付服务器使用配对的私钥证书对隐私字段进行解密。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "华为签名公钥"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
              children: "AppGallery Connect"
            }), "的“鸿蒙支付服务>身份验证服务>公钥管理”下载"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["华为支付服务器使用SM2加密算法生成的证书公钥。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "使用场景："
              })
            }), " 华为支付服务器使用配对的私钥证书对响应报文进行加签， 开发者用于对开放API接口响应报文验签使用，具体验签方式请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/payment-api/payment-rest/payment-rest-overview/payment-rest-overview#%E9%AA%8C%E7%AD%BE%E8%A7%84%E5%88%99",
              children: "验签规则"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "开发者公钥"
              })
            }), "（", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "加密"
              })
            }), "）"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者生成"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开发者使用SM2加密算法生成的证书公钥。需登录", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
              children: "AppGallery Connect"
            }), "，在“鸿蒙支付服务>身份验证服务>公钥管理”上传（公钥类型为加密）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "使用场景："
              })
            }), " 开发者上传后生成证书Id（developerEncKeyId），开发者请求开放API接口时可通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/payment-api/payment-model/payment-model#paydevauth",
              children: "PayDevAuth"
            }), "请求头传递，指定给华为支付服务器用于对开放API接口响应的隐私字段加密。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "开发者公钥（签名）"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者生成"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开发者使用SM2加密算法生成的证书公钥。需登录", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
              children: "AppGallery Connect"
            }), "，在“鸿蒙支付服务>身份验证服务>公钥管理”上传（公钥类型为签名）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "使用场景："
              })
            }), " 开发者上传后生成证书Id（developerSignKeyId），开发者请求开放API接口时可通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/payment-api/payment-model/payment-model#paydevauth",
              children: "PayDevAuth"
            }), "请求头传递，指定给华为支付服务器用于对开放API接口请求报文进行验签。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sm2公私钥对生成示例代码参考",
      children: "SM2公私钥对生成示例代码参考"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(443988)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "只支持ASN.1格式的SM2公私钥对（以下示例代码为服务端生成示例）。如需在应用端生成ASN.1格式SM2公私钥对（公钥91字节，私钥51字节）可参考："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-randomly",
          children: "随机生成非对称密钥对(ArkTS)"
        }), "（应用端生成的公私钥对可能无法在服务端使用）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-cross-platform-compatibility#section1152116421582",
          children: "数据编码格式差异"
        }), "将生成的秘钥对转成16进制hex格式。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "生成的SM2公私钥对，还请先自测验证加解密是否正常，正常后再正式对外使用，避免生成错误的公私钥对，阻塞后续业务进度。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import org.bouncycastle.jce.provider.BouncyCastleProvider;\nimport org.bouncycastle.util.encoders.Hex;\nimport org.junit.Test;\n\nimport java.security.KeyPair;\nimport java.security.KeyPairGenerator;\nimport java.security.SecureRandom;\nimport java.security.spec.ECGenParameterSpec;\nimport java.util.HashMap;\n\npublic class GenerateSm2KeyPairTest2 {\n  public static void main(String[] args) {\n    try {\n      // 获取sm2公私钥\n      String jsonObject = getSm2SecretKey();\n      // 可打印生成公私钥信息，例如：log.info(jsonObject);\n    } catch (Exception e) {\n      e.printStackTrace();\n    }\n  }\n\n  /**\n   * 生成SM2的ASN.1格式的公私钥\n   *\n   * @return SM2的ASN.1格式的公私钥\n   */\n  public static String getSm2SecretKey() {\n    try {\n      KeyPair keyPair = generateSm2KeyPair();\n      String privateKeyStr = Hex.toHexString(keyPair.getPrivate().getEncoded());\n      String publicKeyStr = Hex.toHexString(keyPair.getPublic().getEncoded());\n      HashMap<String, String> result = new HashMap<>();\n      result.put(\"Sm2PrivateKey\", privateKeyStr);\n      result.put(\"Sm2PublicKey\", publicKeyStr);\n      return result.toString();\n    } catch (Exception e) {\n      return null;\n    }\n  }\n\n  /**\n   * SM2算法生成ASN.1格式的公私钥对\n   *\n   * @return 密钥对信息\n   */\n  public static KeyPair generateSm2KeyPair() throws Exception {\n    try {\n      final ECGenParameterSpec sm2Spec = new ECGenParameterSpec(\"sm2p256v1\");\n      // 获取一个椭圆曲线类型的密钥对生成器\n      final KeyPairGenerator kpg = KeyPairGenerator.getInstance(\"EC\", new BouncyCastleProvider());\n      SecureRandom random = new SecureRandom();\n      // 使用SM2的算法区域初始化密钥生成器\n      kpg.initialize(sm2Spec, random);\n      // 获取密钥对\n      KeyPair keyPair = kpg.generateKeyPair();\n      return keyPair;\n    } catch (Exception e) {\n      throw new SecurityException(\"generateSm2KeyPair failed.\");\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sm2加密示例代码参考",
      children: "SM2加密示例代码参考"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import org.bouncycastle.asn1.ASN1ObjectIdentifier;\nimport org.bouncycastle.asn1.gm.GMNamedCurves;\nimport org.bouncycastle.asn1.x509.AlgorithmIdentifier;\nimport org.bouncycastle.asn1.x509.SubjectPublicKeyInfo;\nimport org.bouncycastle.asn1.x9.X9ECParameters;\nimport org.bouncycastle.asn1.x9.X9ObjectIdentifiers;\nimport org.bouncycastle.crypto.engines.SM2Engine;\nimport org.bouncycastle.crypto.params.ECDomainParameters;\nimport org.bouncycastle.crypto.params.ECPublicKeyParameters;\nimport org.bouncycastle.crypto.params.ParametersWithRandom;\nimport org.bouncycastle.math.ec.ECPoint;\nimport org.bouncycastle.util.encoders.Hex;\n\nimport java.nio.charset.StandardCharsets;\nimport java.security.SecureRandom;\n\npublic class SM2EncTest {\n  public static void main(String[] args) {\n    encrypt(\"16进制编码的SM2公钥\", \"待加密数据\");\n  }\n\n  public static String encrypt(String pubKey, String data) {\n    SM2Engine sm2Engine = new SM2Engine(SM2Engine.Mode.C1C3C2);\n    if (data == null || data.isEmpty()) {\n      return data;\n    }\n    byte[] in = data.getBytes(StandardCharsets.UTF_8);\n    return Hex.toHexString(encrypt(pubKey, in, sm2Engine));\n  }\n\n  private static byte[] encrypt(String pubKey, byte[] in, SM2Engine sm2Engine) {\n    try {\n      byte[] bPubKey = Hex.decode(pubKey);\n      byte[] coding = getCoding(bPubKey);\n      X9ECParameters x9ECParameters = GMNamedCurves.getByName(\"sm2p256v1\");\n      ECDomainParameters ecDomainParameters = new ECDomainParameters(x9ECParameters.getCurve(),\n              x9ECParameters.getG(), x9ECParameters.getN());\n      ECPoint pukPoint = x9ECParameters.getCurve().decodePoint(coding);\n      ECPublicKeyParameters publicKeyParameters = new ECPublicKeyParameters(pukPoint, ecDomainParameters);\n      sm2Engine.init(true, new ParametersWithRandom(publicKeyParameters, new SecureRandom()));\n      return sm2Engine.processBlock(in, 0, in.length);\n    } catch (Exception var7) {\n      throw new SecurityException(var7);\n    }\n  }\n\n  private static byte[] getCoding(byte[] publicKey) {\n    if (publicKey.length != 64 && publicKey.length != 65) {\n      AlgorithmIdentifier aid = new AlgorithmIdentifier(\n              X9ObjectIdentifiers.id_ecPublicKey, new ASN1ObjectIdentifier(\"1.2.156.10197.1.301\"));\n      SubjectPublicKeyInfo info = SubjectPublicKeyInfo.getInstance(publicKey);\n      if (!aid.equals(info.getAlgorithm())) {\n        throw new SecurityException(\"encoded not valid\");\n      } else {\n        byte[] coding = info.getPublicKeyData().getBytes();\n        if (coding.length != 65) {\n          throw new SecurityException(\"encoded not valid\");\n        } else {\n          return coding;\n        }\n      }\n    } else {\n      if (publicKey.length == 64) {\n        byte[] bytes = new byte[65];\n        bytes[0] = 4;\n        System.arraycopy(publicKey, 0, bytes, 1, 64);\n        publicKey = bytes;\n      }\n      return (byte[]) publicKey.clone();\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sm2解密示例代码参考",
      children: "SM2解密示例代码参考"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import org.bouncycastle.asn1.ASN1Integer;\nimport org.bouncycastle.asn1.ASN1OctetString;\nimport org.bouncycastle.asn1.ASN1Primitive;\nimport org.bouncycastle.asn1.ASN1Sequence;\nimport org.bouncycastle.asn1.ASN1Set;\nimport org.bouncycastle.asn1.ASN1TaggedObject;\nimport org.bouncycastle.asn1.gm.GMNamedCurves;\nimport org.bouncycastle.asn1.sec.ECPrivateKey;\nimport org.bouncycastle.asn1.x509.AlgorithmIdentifier;\nimport org.bouncycastle.asn1.x9.X9ECParameters;\nimport org.bouncycastle.crypto.engines.SM2Engine;\nimport org.bouncycastle.crypto.params.ECDomainParameters;\nimport org.bouncycastle.crypto.params.ECPrivateKeyParameters;\nimport org.bouncycastle.util.encoders.Hex;\n\nimport java.io.IOException;\nimport java.math.BigInteger;\nimport java.nio.charset.StandardCharsets;\nimport java.util.Enumeration;\n\npublic class SM2DecTest {\n  public static void main(String[] args) {\n    String data = decrypt(\"16进制编码解密私钥\", \"密文\");\n    System.out.println(data);\n  }\n\n  private static String decrypt(String priKey, String cipherData) {\n    SM2Engine sm2Engine = new SM2Engine(SM2Engine.Mode.C1C3C2);\n    if (cipherData == null || cipherData.isEmpty()) {\n      throw new SecurityException(\"cipher data is empty when decrypt data\");\n    }\n    if (priKey == null || priKey.isEmpty()) {\n      throw new SecurityException(\"pri key is empty when decrypt data\");\n    }\n    try {\n      X9ECParameters x9ECParameters = GMNamedCurves.getByName(\"sm2p256v1\");\n      ECDomainParameters ecDomainParameters = new ECDomainParameters(x9ECParameters.getCurve(),\n              x9ECParameters.getG(), x9ECParameters.getN());\n      byte[] bPriKey = Hex.decode(priKey);\n      byte[] enContent = Hex.decode(cipherData);\n      BigInteger privateKeyD;\n      if (bPriKey.length != 32 && bPriKey.length != 33) {\n        privateKeyD = getDInt(bPriKey);\n      } else {\n        privateKeyD = new BigInteger(bPriKey);\n      }\n      ECPrivateKeyParameters privateKeyParameters = new ECPrivateKeyParameters(privateKeyD, ecDomainParameters);\n      sm2Engine.init(false, privateKeyParameters);\n      return new String(sm2Engine.processBlock(enContent, 0, enContent.length), StandardCharsets.UTF_8);\n    } catch (Exception var7) {\n      throw new SecurityException(var7);\n    }\n  }\n\n  private static BigInteger getDInt(byte[] bytesKey) throws IOException {\n    ASN1Sequence sequence = ASN1Sequence.getInstance(bytesKey);\n    Enumeration e = sequence.getObjects();\n    BigInteger version = ((ASN1Integer) e.nextElement()).getValue();\n    if (version.intValue() != 0) {\n      throw new IllegalArgumentException(\"wrong version for private key info\");\n    }\n    AlgorithmIdentifier algId = AlgorithmIdentifier.getInstance(e.nextElement());\n    ASN1OctetString privKey = ASN1OctetString.getInstance(e.nextElement());\n    ASN1Set attributes;\n    if (e.hasMoreElements()) {\n      attributes = ASN1Set.getInstance((ASN1TaggedObject) e.nextElement(), false);\n    }\n    ASN1Primitive primitive = ASN1Primitive.fromByteArray(privKey.getOctets());\n    ECPrivateKey privateKey = ECPrivateKey.getInstance(primitive);\n    return privateKey.getKey();\n  }\n}\n"
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
986643(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479085-e752b4dbc2a26d9f5868b69e47ebc72c.png");

},
790704(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
192978(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439129-9e7d2e1d5b6380638f40b8b70238f99a.png");

},
692725(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959084-0f07ca9ebfbb90e03580430775d98825.png");

},
443988(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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