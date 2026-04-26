"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["930956"], {
233419(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_local_key_management_huks_key_generation_import_huks_key_import_huks_key_import_overview_huks_key_import_overview_md_946_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-local-key-management-huks-key-generation-import-huks-key-import-huks-key-import-overview-huks-key-import-overview-md-946.json
var site_docs_system_security_huks_kit_huks_local_key_management_huks_key_generation_import_huks_key_import_huks_key_import_overview_huks_key_import_overview_md_946_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-key-import-overview/huks-key-import-overview","title":"密钥导入介绍及算法规格","description":"如果业务在HUKS外部生成密钥（比如应用间协商生成、服务器端生成），业务可以将密钥导入到HUKS中由HUKS进行管理。密钥一旦导入到HUKS中，在密钥的生命周期内，其明文仅在安全环境中进行访问操作，不会传递出安全环境。","source":"@site/docs/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-key-import-overview/huks-key-import-overview.md","sourceDirName":"system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-key-import-overview","slug":"/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-key-import-overview/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-key-import-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"密钥导入介绍及算法规格","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-key-import-overview","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"生成密钥(C/C++)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-ndk/"},"next":{"title":"明文导入密钥(ArkTS)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-import-key-in-plaintext-arkts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-key-import-overview/huks-key-import-overview.md


const frontMatter = {
	title: '密钥导入介绍及算法规格',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-key-import-overview',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '密钥导入介绍及算法规格';

const assets = {

};



const toc = [{
  "value": "明文导入",
  "id": "明文导入",
  "level": 2
}, {
  "value": "安全导入",
  "id": "安全导入",
  "level": 2
}, {
  "value": "安全导入密钥材料格式",
  "id": "安全导入密钥材料格式",
  "level": 3
}, {
  "value": "数字信封导入",
  "id": "数字信封导入",
  "level": 2
}, {
  "value": "支持的算法",
  "id": "支持的算法",
  "level": 2
}, {
  "value": "导入密钥格式",
  "id": "导入密钥格式",
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
    ol: "ol",
    p: "p",
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
        id: "密钥导入介绍及算法规格",
        children: "密钥导入介绍及算法规格"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果业务在HUKS外部生成密钥（比如应用间协商生成、服务器端生成），业务可以将密钥导入到HUKS中由HUKS进行管理。密钥一旦导入到HUKS中，在密钥的生命周期内，其明文仅在安全环境中进行访问操作，不会传递出安全环境。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "密钥导入的方式包含明文导入和安全导入两种方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(303416)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用现有密钥别名作为导入的密钥别名会把现有密钥覆盖。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API 23开始支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-group-key-overview",
        children: "群组密钥"
      }), "特性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "明文导入",
      children: "明文导入"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该方式直接将密钥明文导入HUKS，在导入过程中密钥明文会暴露在非安全环境中，一般适用于轻量级智能穿戴或低安业务。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "推荐使用该方式导入的密钥类型：非对称密钥的公钥。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不推荐使用该方式导入的密钥类型：对称密钥、非对称密钥对。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(687478)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "轻量级智能穿戴只支持明文导入，不支持安全导入。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "安全导入",
      children: "安全导入"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该方式支持业务与HUKS建立端到端的加密传输通道，将密钥安全加密导入到HUKS中，确保导入过程中密钥不被泄露，适用于高安敏感业务。相较于明文导入，安全导入步骤更多，密钥材料更复杂。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "推荐使用该方式导入的密钥类型：对称密钥、非对称密钥对。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下图为安全导入密钥开发时序图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(30797)/* ["default"] */.A) + "",
        width: "706",
        height: "683"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据开发流程，在安全导入密钥过程中，需要依次调用HUKS的能力包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "生成非对称密钥对并导出公钥，用于设备间密钥协商。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "生成对称密钥，用于加密待导入密钥。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用对称密钥加密待导入密钥，形成密钥密文。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "导入加密密钥。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "删除密钥。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["导出密钥接口返回的", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-concepts#%E5%85%AC%E9%92%A5%E6%9D%90%E6%96%99%E6%A0%BC%E5%BC%8F",
        children: ["公钥明文材料是按照", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "X.509"
          })
        }), "格式封装"]
      }), "，导入加密密钥接口中的密钥材料需满足", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LengthData-Data"
        })
      }), "的格式封装，形如：[(Lengthpart1Datapart1)……(LengthpartnDatapartn)]。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(562602)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["安全导入密钥时，协商算法支持ECDH和X25519，协商后的Shared_Key使用AES-GCM算法加密Caller_Kek。对应算法套件定义见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksunwrapsuite9",
          children: "HuksUnwrapSuite"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "安全导入不支持X.509格式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "轻量级智能穿戴只支持明文导入，不支持安全导入。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "安全导入密钥材料格式",
      children: "安全导入密钥材料格式"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "内容"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "长度"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "业务公钥长度LCaller_Pk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4字节"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "业务公钥Caller_Pk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LCaller_Pk字节"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shared_Key加密参数AAD2长度LAAD2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4字节"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shared_Key加密参数AAD2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LAAD2字节"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shared_Key加密参数NONCE2长度LNONCE2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4字节"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shared_Key加密参数NONCE2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LNONCE2字节"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shared_Key加密参数TAG2长度LTAG2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4字节"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shared_Key加密参数TAG2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LTAG2字节"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caller_Kek密文长度LCaller_Kek_enc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4字节"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caller_Kek密文Caller_Kek_enc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LCaller_Kek_enc字节"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caller_Kek加密参数AAD3长度LAAD3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4字节"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caller_Kek加密参数AAD3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LAAD3字节"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caller_Kek加密参数NONCE3长度LNONCE3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4字节"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caller_Kek加密参数NONCE3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LNONCE3字节"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caller_Kek加密参数TAG3长度LTAG3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4字节"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caller_Kek加密参数TAG3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LTAG3字节"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "密钥明文材料长度的长度LTo_Import_Key_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4字节"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "密钥明文材料长度To_Import_Key_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LTo_Import_Key_size字节"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "To_Import_Key密文长度LTo_Import_Key_enc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4字节"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "To_Import_Key密文To_Import_Key_enc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LTo_Import_Key_enc字节"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "数字信封导入",
      children: "数字信封导入"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API 23开始支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-key-import-overview#%E6%95%B0%E5%AD%97%E4%BF%A1%E5%B0%81%E5%AF%BC%E5%85%A5",
        children: "数字信封"
      }), "特性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该方式支持以数字信封形式导入密钥，确保密钥安全导入HUKS，防止传输过程中泄露，适用于高安全敏感业务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "推荐使用该方法导入的密钥类型：对称密钥、非对称密钥对。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下图为数字信封导入密钥开发时序图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(789345)/* ["default"] */.A) + "",
        width: "451",
        height: "802"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据业务流程，导入数字信封时需要调用HUKS的能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "生成SM4密钥，用于加密将导入的密钥。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用生成的SM4密钥并采用ECB，NoPadding模式对导入密钥明文进行加密，若业务导入非对称密钥仅需加密其私钥。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "导出对端SM2公钥，用于加密生成的SM4密钥。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用对端导出的SM2公钥，采用NoPadding模式并指定SM3为摘要算法加密本端生成的SM4密钥。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "导入加密密钥。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["导出密钥接口返回的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-concepts#%E5%85%AC%E9%92%A5%E6%9D%90%E6%96%99%E6%A0%BC%E5%BC%8F",
        children: "公钥材料格式"
      }), "按照X.509格式封装，导入加密密钥接口返回的密钥材料按照", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LengthData-Data"
        })
      }), "的格式封装，分别是[(LengthEncSm4DataEncSm4)(LengthEncImpKeyDataEncImpKey)]。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(233175)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅手机、平板、PC/2in1设备、TV、智能穿戴支持数字信封导入。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持的算法",
      children: "支持的算法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下为密钥导入支持的规格说明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(782871)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导入RSA密钥时，公钥必须大于或者等于65537。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数字信封不支持 DSA 算法，X25519密钥和Ed25519密钥，在使用数字信封导入密钥时公钥采用裸密钥的方式在该标签中填入。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "手机、平板、PC/2in1设备、TV、智能穿戴规格"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "算法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持的密钥长度"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API级别"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128、192、256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2048、3072、4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1024-2048（含），必须是8的倍数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HMAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8-1024（含），必须是8的倍数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256、384、521"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ED25519"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X25519"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SM2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SM4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3DES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128、192"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "轻量级智能穿戴规格"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "算法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持的密钥长度"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API级别"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128、192、256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3DES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128、192"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1024-2048（含），必须是8的倍数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HMAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8-1024（含），必须是8的倍数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CMAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入密钥格式",
      children: "导入密钥格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HUKS支持导入密钥类型众多，各种不同类型对应的密钥格式不尽相同。下表归纳了HUKS导入密钥所支持的密钥类型及对应的密钥材料格式。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "密钥类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "算法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "导入格式"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "对称密钥"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥字节数据"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "非对称密钥-密钥对"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/huks-kit/huks-local-key-management/huks-concepts#%E5%AF%86%E9%92%A5%E5%AF%B9%E6%9D%90%E6%96%99%E6%A0%BC%E5%BC%8F",
              children: "密钥对材料格式"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "非对称密钥-公钥"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ED25519、X25519"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["密钥字节数据，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-import-key-in-plaintext-arkts#%E5%AF%BC%E5%85%A5x25519%E5%AF%86%E9%92%A5%E5%85%AC%E9%92%A5",
              children: "导入X25519密钥公钥"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "非对称密钥-公钥"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA、ECC、ECDH、DH、SM2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X.509规范的DER格式"
          })]
        })]
      })]
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
303416(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
789345(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438457-9f301f801e99d1242a9c2cbef5a20a28.png");

},
562602(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
782871(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
687478(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
30797(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798762-10d9ca427128d5eb92b173d0f651a707.png");

},
233175(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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