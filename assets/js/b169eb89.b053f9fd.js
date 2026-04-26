"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["510712"], {
442570(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_local_key_management_huks_concepts_huks_concepts_md_b16_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-local-key-management-huks-concepts-huks-concepts-md-b16.json
var site_docs_system_security_huks_kit_huks_local_key_management_huks_concepts_huks_concepts_md_b16_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-local-key-management/huks-concepts/huks-concepts","title":"本地密钥管理基础概念","description":"在使用通用密钥库完成应用开发前，开发者需要了解以下相关概念，以下概念将贯穿整个开发过程。","source":"@site/docs/system-security/huks-kit/huks-local-key-management/huks-concepts/huks-concepts.md","sourceDirName":"system-security/huks-kit/huks-local-key-management/huks-concepts","slug":"/system-security/huks-kit/huks-local-key-management/huks-concepts/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-concepts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"本地密钥管理基础概念","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-concepts","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Universal Keystore Kit简介","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-overview/"},"next":{"title":"密钥生成介绍及算法规格","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-local-key-management/huks-concepts/huks-concepts.md


const frontMatter = {
	title: '本地密钥管理基础概念',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-concepts',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '本地密钥管理基础概念';

const assets = {

};



const toc = [{
  "value": "可信执行环境（TEE）",
  "id": "可信执行环境tee",
  "level": 2
}, {
  "value": "密钥材料格式",
  "id": "密钥材料格式",
  "level": 2
}, {
  "value": "密钥对材料格式",
  "id": "密钥对材料格式",
  "level": 3
}, {
  "value": "公钥材料格式",
  "id": "公钥材料格式",
  "level": 3
}, {
  "value": "私钥材料格式",
  "id": "私钥材料格式",
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
        id: "本地密钥管理基础概念",
        children: "本地密钥管理基础概念"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用通用密钥库完成应用开发前，开发者需要了解以下相关概念，以下概念将贯穿整个开发过程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "可信执行环境tee",
      children: "可信执行环境（TEE）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可信执行环境（Trusted Execution Environment），简称TEE，是存在于智能手机、平板或任意移动设备主处理器中的一个安全区域，确保各种敏感数据在一个可信环境中被存储、处理和受到保护。TEE为授权安全软件，也称为“可信应用”提供一个安全的执行环境，通过实施保护、保密性、完整性和数据访问权限确保端到端的安全。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "密钥材料格式",
      children: "密钥材料格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对不同密码算法的密钥对、公钥、私钥，HUKS为其密钥材料定义了一套格式，该格式在密钥导入、导出等场景使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "密钥对材料格式",
      children: "密钥对材料格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "密钥对材料 = 密钥对材料Header + 密钥对材料原文"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以RSA密钥为例，应用需要申请一个Uint8Array，按照RSA密钥对材料内存排布格式，将各个变量赋值到对应的位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下图为RSA密钥材料内存结构为例，其他算法格式见样例下方表格。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(208064)/* ["default"] */.A) + "",
        width: "1064",
        height: "603"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["其中，密钥算法的值取自枚举类", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#hukskeyalg",
        children: "HuksKeyAlg"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let rsa2048KeyPairMaterial = new Uint8Array([\n    0x01, 0x00, 0x00, 0x00, // 密钥算法：huks.HuksKeyAlg.HUKS_ALG_RSA = 1\n    0x00, 0x08, 0x00, 0x00, // 密钥大小（比特）：2048\n    0x00, 0x01, 0x00, 0x00, // 模数n长度（字节）：256\n    0x03, 0x00, 0x00, 0x00, // 公钥指数e长度（字节）：3\n    0x00, 0x01, 0x00, 0x00, // 私钥指数d长度（字节）：256\n    // 模数n\n    0xc5, 0x35, 0x62, 0x48, 0xc4, 0x92, 0x87, 0x73, 0x0d, 0x42, 0x96, 0xfc, 0x7b, 0x11, 0x05, 0x06,\n    0x0f, 0x8d, 0x66, 0xc1, 0x0e, 0xad, 0x37, 0x44, 0x92, 0x95, 0x2f, 0x6a, 0x55, 0xba, 0xec, 0x1d,\n    0x54, 0x62, 0x0a, 0x4b, 0xd3, 0xc7, 0x05, 0xe4, 0x07, 0x40, 0xd9, 0xb7, 0xc2, 0x12, 0xcb, 0x9a,\n    0x90, 0xad, 0xe3, 0x24, 0xe8, 0x5e, 0xa6, 0xf8, 0xd0, 0x6e, 0xbc, 0xd1, 0x69, 0x7f, 0x6b, 0xe4,\n    0x2b, 0x4e, 0x1a, 0x65, 0xbb, 0x73, 0x88, 0x6b, 0x7c, 0xaf, 0x7e, 0xd0, 0x47, 0x26, 0xeb, 0xa5,\n    0xbe, 0xd6, 0xe8, 0xee, 0x9c, 0xa5, 0x66, 0xa5, 0xc9, 0xd3, 0x25, 0x13, 0xc4, 0x0e, 0x6c, 0xab,\n    0x50, 0xb6, 0x50, 0xc9, 0xce, 0x8f, 0x0a, 0x0b, 0xc6, 0x28, 0x69, 0xe9, 0x83, 0x69, 0xde, 0x42,\n    0x56, 0x79, 0x7f, 0xde, 0x86, 0x24, 0xca, 0xfc, 0xaa, 0xc0, 0xf3, 0xf3, 0x7f, 0x92, 0x8e, 0x8a,\n    0x12, 0x52, 0xfe, 0x50, 0xb1, 0x5e, 0x8c, 0x01, 0xce, 0xfc, 0x7e, 0xf2, 0x4f, 0x5f, 0x03, 0xfe,\n    0xa7, 0xcd, 0xa1, 0xfc, 0x94, 0x52, 0x00, 0x8b, 0x9b, 0x7f, 0x09, 0xab, 0xa8, 0xa4, 0xf5, 0xb4,\n    0xa5, 0xaa, 0xfc, 0x72, 0xeb, 0x17, 0x40, 0xa9, 0xee, 0xbe, 0x8f, 0xc2, 0xd1, 0x80, 0xc2, 0x0d,\n    0x44, 0xa9, 0x59, 0x44, 0x59, 0x81, 0x3b, 0x5d, 0x4a, 0xde, 0xfb, 0xae, 0x24, 0xfc, 0xa3, 0xd9,\n    0xbc, 0x57, 0x55, 0xc2, 0x26, 0xbc, 0x19, 0xa7, 0x9a, 0xc5, 0x59, 0xa3, 0xee, 0x5a, 0xef, 0x41,\n    0x80, 0x7d, 0xf8, 0x5e, 0xc1, 0x1d, 0x32, 0x38, 0x41, 0x5b, 0xb6, 0x92, 0xb8, 0xb7, 0x03, 0x0d,\n    0x3e, 0x59, 0x0f, 0x1c, 0xb3, 0xe1, 0x2a, 0x95, 0x1a, 0x3b, 0x50, 0x4f, 0xc4, 0x1d, 0xcf, 0x73,\n    0x7c, 0x14, 0xca, 0xe3, 0x0b, 0xa7, 0xc7, 0x1a, 0x41, 0x4a, 0xee, 0xbe, 0x1f, 0x43, 0xdd, 0xf9,\n    // 公钥指数e\n    0x01, 0x00, 0x01,\n    // 私钥指数d\n    0x88, 0x4b, 0x82, 0xe7, 0xe3, 0xe3, 0x99, 0x75, 0x6c, 0x9e, 0xaf, 0x17, 0x44, 0x3e, 0xd9, 0x07,\n    0xfd, 0x4b, 0xae, 0xce, 0x92, 0xc4, 0x28, 0x44, 0x5e, 0x42, 0x79, 0x08, 0xb6, 0xc3, 0x7f, 0x58,\n    0x2d, 0xef, 0xac, 0x4a, 0x07, 0xcd, 0xaf, 0x46, 0x8f, 0xb4, 0xc4, 0x43, 0xf9, 0xff, 0x5f, 0x74,\n    0x2d, 0xb5, 0xe0, 0x1c, 0xab, 0xf4, 0x6e, 0xd5, 0xdb, 0xc8, 0x0c, 0xfb, 0x76, 0x3c, 0x38, 0x66,\n    0xf3, 0x7f, 0x01, 0x43, 0x7a, 0x30, 0x39, 0x02, 0x80, 0xa4, 0x11, 0xb3, 0x04, 0xd9, 0xe3, 0x57,\n    0x23, 0xf4, 0x07, 0xfc, 0x91, 0x8a, 0xc6, 0xcc, 0xa2, 0x16, 0x29, 0xb3, 0xe5, 0x76, 0x4a, 0xa8,\n    0x84, 0x19, 0xdc, 0xef, 0xfc, 0xb0, 0x63, 0x33, 0x0b, 0xfa, 0xf6, 0x68, 0x0b, 0x08, 0xea, 0x31,\n    0x52, 0xee, 0x99, 0xef, 0x43, 0x2a, 0xbe, 0x97, 0xad, 0xb3, 0xb9, 0x66, 0x7a, 0xae, 0xe1, 0x8f,\n    0x57, 0x86, 0xe5, 0xfe, 0x14, 0x3c, 0x81, 0xd0, 0x64, 0xf8, 0x86, 0x1a, 0x0b, 0x40, 0x58, 0xc9,\n    0x33, 0x49, 0xb8, 0x99, 0xc6, 0x2e, 0x94, 0x70, 0xee, 0x09, 0x88, 0xe1, 0x5c, 0x4e, 0x6c, 0x22,\n    0x72, 0xa7, 0x2a, 0x21, 0xdd, 0xd7, 0x1d, 0xfc, 0x63, 0x15, 0x0b, 0xde, 0x06, 0x9c, 0xf3, 0x28,\n    0xf3, 0xac, 0x4a, 0xa8, 0xb5, 0x50, 0xca, 0x9b, 0xcc, 0x0a, 0x04, 0xfe, 0x3f, 0x98, 0x68, 0x81,\n    0xac, 0x24, 0x53, 0xea, 0x1f, 0x1c, 0x6e, 0x5e, 0xca, 0xe8, 0x31, 0x0d, 0x08, 0x12, 0xf3, 0x26,\n    0xf8, 0x5e, 0xeb, 0x10, 0x27, 0xae, 0xaa, 0xc3, 0xad, 0x6c, 0xc1, 0x89, 0xdb, 0x7d, 0x5a, 0x12,\n    0x55, 0xad, 0x11, 0x19, 0xa1, 0xa9, 0x8f, 0x0b, 0x6d, 0x78, 0x8d, 0x1c, 0xdf, 0xe5, 0x63, 0x82,\n    0x0b, 0x7d, 0x23, 0x04, 0xb4, 0x75, 0x8c, 0xed, 0x77, 0xfc, 0x1a, 0x85, 0x29, 0x11, 0xe0, 0x61,\n]);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RSA密钥对材料格式："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "密钥  算法"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "密钥  大小"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "模数n  长度Ln"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "公钥指数e  长度Le"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "私钥指数d  长度Ld"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "n"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "e"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "d"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "4字节"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "4字节"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "4字节"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "4字节"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "4字节"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Ln字节"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Le字节"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Ld字节"
              })]
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ECC密钥对材料格式："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "密钥  算法"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "密钥  大小"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "坐标x  长度Lx"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "坐标y  长度Ly"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "坐标z  长度Lz"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "x"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "y"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "z"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "4字节"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "4字节"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "4字节"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "4字节"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "4字节"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Lx字节"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Ly字节"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Lz字节"
              })]
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DH密钥对材料格式："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "密钥  算法"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "密钥  大小"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "公钥pk  长度Lpk"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "私钥sk  长度Lsk"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "保留  字段"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "pk"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "sk"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "4字节"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "4字节"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "4字节"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "4字节"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "4字节"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Lpk字节"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Lsk字节"
              })]
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Curve25519密钥对材料格式："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "密钥  算法"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "密钥  大小"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "公钥pk  长度Lpk"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "私钥sk  长度Lsk"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "保留  字段"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "pk"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "sk"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "4字节"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "4字节"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "4字节"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "4字节"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "4字节"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Lpk字节"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Lsk字节"
              })]
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "公钥材料格式",
      children: "公钥材料格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在公钥导出/导入时，密钥材料采用标准的X.509规范的DER格式封装。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下是一个DER编码的ECC公钥："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let eccP256PubKey = new Uint8Array([\n    0x30, 0x59, 0x30, 0x13, 0x06, 0x07, 0x2a, 0x86, 0x48, 0xce, 0x3d, 0x02, 0x01, 0x06, 0x08, 0x2a,\n    0x86, 0x48, 0xce, 0x3d, 0x03, 0x01, 0x07, 0x03, 0x42, 0x00, 0x04, 0xc0, 0xfe, 0x1c, 0x67, 0xde,\n    0x86, 0x0e, 0xfb, 0xaf, 0xb5, 0x85, 0x52, 0xb4, 0x0e, 0x1f, 0x6c, 0x6c, 0xaa, 0xc5, 0xd9, 0xd2,\n    0x4d, 0xb0, 0x8a, 0x72, 0x24, 0xa1, 0x99, 0xaf, 0xfc, 0x3e, 0x55, 0x5a, 0xac, 0x99, 0x3d, 0xe8,\n    0x34, 0x72, 0xb9, 0x47, 0x9c, 0xa6, 0xd8, 0xfb, 0x00, 0xa0, 0x1f, 0x9f, 0x7a, 0x41, 0xe5, 0x44,\n    0x3e, 0xb2, 0x76, 0x08, 0xa2, 0xbd, 0xe9, 0x41, 0xd5, 0x2b, 0x9e\n]);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "私钥材料格式",
      children: "私钥材料格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "复用密钥对的材料格式，私钥材料的封装是把密钥对材料Header中的公钥部分的长度字段置0，同时密钥对材料原文部分拼接私钥材料即可。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "私钥材料 = 密钥对材料Header + 私钥材料原文"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以RSA私钥材料为例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(620269)/* ["default"] */.A) + "",
        width: "871",
        height: "536"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let rsa2048PrivateKeyMaterial = new Uint8Array([\n    0x01, 0x00, 0x00, 0x00, // 密钥算法：huks.HuksKeyAlg.HUKS_ALG_RSA = 1\n    0x00, 0x08, 0x00, 0x00, // 密钥大小（比特）：2048\n    0x00, 0x01, 0x00, 0x00, // 模数n长度（字节）：256\n    0x00, 0x00, 0x00, 0x00, // 公钥指数e长度（字节）：0\n    0x00, 0x01, 0x00, 0x00, // 私钥指数d长度（字节）：256\n    // 模数n\n    0xc5, 0x35, 0x62, 0x48, 0xc4, 0x92, 0x87, 0x73, 0x0d, 0x42, 0x96, 0xfc, 0x7b, 0x11, 0x05, 0x06,\n    0x0f, 0x8d, 0x66, 0xc1, 0x0e, 0xad, 0x37, 0x44, 0x92, 0x95, 0x2f, 0x6a, 0x55, 0xba, 0xec, 0x1d,\n    0x54, 0x62, 0x0a, 0x4b, 0xd3, 0xc7, 0x05, 0xe4, 0x07, 0x40, 0xd9, 0xb7, 0xc2, 0x12, 0xcb, 0x9a,\n    0x90, 0xad, 0xe3, 0x24, 0xe8, 0x5e, 0xa6, 0xf8, 0xd0, 0x6e, 0xbc, 0xd1, 0x69, 0x7f, 0x6b, 0xe4,\n    0x2b, 0x4e, 0x1a, 0x65, 0xbb, 0x73, 0x88, 0x6b, 0x7c, 0xaf, 0x7e, 0xd0, 0x47, 0x26, 0xeb, 0xa5,\n    0xbe, 0xd6, 0xe8, 0xee, 0x9c, 0xa5, 0x66, 0xa5, 0xc9, 0xd3, 0x25, 0x13, 0xc4, 0x0e, 0x6c, 0xab,\n    0x50, 0xb6, 0x50, 0xc9, 0xce, 0x8f, 0x0a, 0x0b, 0xc6, 0x28, 0x69, 0xe9, 0x83, 0x69, 0xde, 0x42,\n    0x56, 0x79, 0x7f, 0xde, 0x86, 0x24, 0xca, 0xfc, 0xaa, 0xc0, 0xf3, 0xf3, 0x7f, 0x92, 0x8e, 0x8a,\n    0x12, 0x52, 0xfe, 0x50, 0xb1, 0x5e, 0x8c, 0x01, 0xce, 0xfc, 0x7e, 0xf2, 0x4f, 0x5f, 0x03, 0xfe,\n    0xa7, 0xcd, 0xa1, 0xfc, 0x94, 0x52, 0x00, 0x8b, 0x9b, 0x7f, 0x09, 0xab, 0xa8, 0xa4, 0xf5, 0xb4,\n    0xa5, 0xaa, 0xfc, 0x72, 0xeb, 0x17, 0x40, 0xa9, 0xee, 0xbe, 0x8f, 0xc2, 0xd1, 0x80, 0xc2, 0x0d,\n    0x44, 0xa9, 0x59, 0x44, 0x59, 0x81, 0x3b, 0x5d, 0x4a, 0xde, 0xfb, 0xae, 0x24, 0xfc, 0xa3, 0xd9,\n    0xbc, 0x57, 0x55, 0xc2, 0x26, 0xbc, 0x19, 0xa7, 0x9a, 0xc5, 0x59, 0xa3, 0xee, 0x5a, 0xef, 0x41,\n    0x80, 0x7d, 0xf8, 0x5e, 0xc1, 0x1d, 0x32, 0x38, 0x41, 0x5b, 0xb6, 0x92, 0xb8, 0xb7, 0x03, 0x0d,\n    0x3e, 0x59, 0x0f, 0x1c, 0xb3, 0xe1, 0x2a, 0x95, 0x1a, 0x3b, 0x50, 0x4f, 0xc4, 0x1d, 0xcf, 0x73,\n    0x7c, 0x14, 0xca, 0xe3, 0x0b, 0xa7, 0xc7, 0x1a, 0x41, 0x4a, 0xee, 0xbe, 0x1f, 0x43, 0xdd, 0xf9,\n    // 私钥指数d\n    0x88, 0x4b, 0x82, 0xe7, 0xe3, 0xe3, 0x99, 0x75, 0x6c, 0x9e, 0xaf, 0x17, 0x44, 0x3e, 0xd9, 0x07,\n    0xfd, 0x4b, 0xae, 0xce, 0x92, 0xc4, 0x28, 0x44, 0x5e, 0x42, 0x79, 0x08, 0xb6, 0xc3, 0x7f, 0x58,\n    0x2d, 0xef, 0xac, 0x4a, 0x07, 0xcd, 0xaf, 0x46, 0x8f, 0xb4, 0xc4, 0x43, 0xf9, 0xff, 0x5f, 0x74,\n    0x2d, 0xb5, 0xe0, 0x1c, 0xab, 0xf4, 0x6e, 0xd5, 0xdb, 0xc8, 0x0c, 0xfb, 0x76, 0x3c, 0x38, 0x66,\n    0xf3, 0x7f, 0x01, 0x43, 0x7a, 0x30, 0x39, 0x02, 0x80, 0xa4, 0x11, 0xb3, 0x04, 0xd9, 0xe3, 0x57,\n    0x23, 0xf4, 0x07, 0xfc, 0x91, 0x8a, 0xc6, 0xcc, 0xa2, 0x16, 0x29, 0xb3, 0xe5, 0x76, 0x4a, 0xa8,\n    0x84, 0x19, 0xdc, 0xef, 0xfc, 0xb0, 0x63, 0x33, 0x0b, 0xfa, 0xf6, 0x68, 0x0b, 0x08, 0xea, 0x31,\n    0x52, 0xee, 0x99, 0xef, 0x43, 0x2a, 0xbe, 0x97, 0xad, 0xb3, 0xb9, 0x66, 0x7a, 0xae, 0xe1, 0x8f,\n    0x57, 0x86, 0xe5, 0xfe, 0x14, 0x3c, 0x81, 0xd0, 0x64, 0xf8, 0x86, 0x1a, 0x0b, 0x40, 0x58, 0xc9,\n    0x33, 0x49, 0xb8, 0x99, 0xc6, 0x2e, 0x94, 0x70, 0xee, 0x09, 0x88, 0xe1, 0x5c, 0x4e, 0x6c, 0x22,\n    0x72, 0xa7, 0x2a, 0x21, 0xdd, 0xd7, 0x1d, 0xfc, 0x63, 0x15, 0x0b, 0xde, 0x06, 0x9c, 0xf3, 0x28,\n    0xf3, 0xac, 0x4a, 0xa8, 0xb5, 0x50, 0xca, 0x9b, 0xcc, 0x0a, 0x04, 0xfe, 0x3f, 0x98, 0x68, 0x81,\n    0xac, 0x24, 0x53, 0xea, 0x1f, 0x1c, 0x6e, 0x5e, 0xca, 0xe8, 0x31, 0x0d, 0x08, 0x12, 0xf3, 0x26,\n    0xf8, 0x5e, 0xeb, 0x10, 0x27, 0xae, 0xaa, 0xc3, 0xad, 0x6c, 0xc1, 0x89, 0xdb, 0x7d, 0x5a, 0x12,\n    0x55, 0xad, 0x11, 0x19, 0xa1, 0xa9, 0x8f, 0x0b, 0x6d, 0x78, 0x8d, 0x1c, 0xdf, 0xe5, 0x63, 0x82,\n    0x0b, 0x7d, 0x23, 0x04, 0xb4, 0x75, 0x8c, 0xed, 0x77, 0xfc, 0x1a, 0x85, 0x29, 0x11, 0xe0, 0x61,\n]);\n"
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
208064(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958410-eda7fe8854c80458054aa773c5bc8028.png");

},
620269(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478411-c65a36852a689491ce6d677dc30de8a7.png");

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