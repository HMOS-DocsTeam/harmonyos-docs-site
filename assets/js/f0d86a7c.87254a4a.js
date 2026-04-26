"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["780929"], {
758896(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_user_authentication_kit_user_authentication_overview_user_authentication_overview_md_f0d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-user-authentication-kit-user-authentication-overview-user-authentication-overview-md-f0d.json
var site_docs_system_security_user_authentication_kit_user_authentication_overview_user_authentication_overview_md_f0d_namespaceObject = JSON.parse('{"id":"system-security/user-authentication-kit/user-authentication-overview/user-authentication-overview","title":"User Authentication Kit简介","description":"User Authentication Kit（用户认证服务）提供了基于用户在设备本地注册的锁屏口令、人脸和指纹来认证用户身份的能力。","source":"@site/docs/system-security/user-authentication-kit/user-authentication-overview/user-authentication-overview.md","sourceDirName":"system-security/user-authentication-kit/user-authentication-overview","slug":"/system-security/user-authentication-kit/user-authentication-overview/","permalink":"/harmonyos-docs-site/system-security/user-authentication-kit/user-authentication-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"User Authentication Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/user-authentication-overview","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"CryptoExtensionAbility适配开发指导","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-extension-ability-support/huks-extension-ability-support-dev/"},"next":{"title":"开发准备","permalink":"/harmonyos-docs-site/system-security/user-authentication-kit/user-authentication-dev/prerequisites/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/user-authentication-kit/user-authentication-overview/user-authentication-overview.md


const frontMatter = {
	title: 'User Authentication Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/user-authentication-overview',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = 'User Authentication Kit简介';

const assets = {

};



const toc = [{
  "value": "亮点/特征",
  "id": "亮点特征",
  "level": 2
}, {
  "value": "运作机制",
  "id": "运作机制",
  "level": 2
}, {
  "value": "AuthToken数据结构",
  "id": "authtoken数据结构",
  "level": 3
}, {
  "value": "生物认证可信等级划分原则",
  "id": "生物认证可信等级划分原则",
  "level": 3
}, {
  "value": "系统身份认证约束与限制",
  "id": "系统身份认证约束与限制",
  "level": 2
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
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
        id: "user-authentication-kit简介",
        children: "User Authentication Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "User Authentication Kit（用户认证服务）提供了基于用户在设备本地注册的锁屏口令、人脸和指纹来认证用户身份的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供了系统级用户身份认证功能，并提供了多设备统一的、集多种认证方式（人脸、指纹、口令）于一体的系统级用户身份认证控件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户向应用/系统服务请求访问某些个人数据或执行某些敏感操作时，应用/系统服务将调用系统用户身份认证控件对用户身份进行认证，认证通过后，响应用户对于数据或敏感操作的执行请求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户身份认证可用于各种鉴权场景，如应用内账号登录、支付认证等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(854162)/* ["default"] */.A) + "",
        width: "3582",
        height: "1148"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "亮点特征",
      children: "亮点/特征"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "归一化认证接口"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "屏蔽不同认证因子的差异，调用锁屏口令、人脸、指纹认证的接口归一。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同一套接口提供人脸、指纹、锁屏口令的组合认证方式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同一套接口提供人脸认证、指纹认证和业务自定义认证的组合。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "支持感知认证可信等级差异"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持调用者指定期望的认证可信等级，避免将低安全认证能力应用在高风险操作的用户鉴权场景，例如将防伪能力不够的2D人脸认证用于支付场景。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "支持业务自定义认证方式"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持带导航键的认证界面，用户点击导航键可切换业务自定义认证界面。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "支持短时间内复用任意应用的认证结果"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持选择复用锁屏认证结果或任意应用的身份认证结果，认证后调用者指定的时间范围内（最长5min），可直接返回认证通过结果，无需重复认证。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持认证方式无关的复用模式，采用此模式，无论上次认证使用何种方式，只要在认证后调用者指定的时间范围内（最长5min），可直接返回认证通过结果，无需重复认证。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持认证方式匹配的复用模式，采用此模式，不仅需要处于调用者指定的认证后时间范围内（最长5min），还需要认证使用的认证方式与调用者指定的一致，才能复用解锁认证结果并返回认证通过。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "提供系统级用户身份认证界面"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持调用者自定义认证界面的标题和导航键文字。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户身份认证控件会根据设备屏幕状态自适应调整窗口显示模式。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "支持感知注册凭据的变化"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "业务开通时，从认证成功结果中获取用户凭据的状态，或者直接查询用户凭据的状态，并存储注册的凭据状态。当调用者需要感知用户凭据变化时，需要从当前认证成功结果获取凭据的状态，或者查询当前凭据的状态，通过对比差异感知凭据状态的变化。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运作机制",
      children: "运作机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "统一用户认证框架架构如下图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(387690)/* ["default"] */.A) + "",
        width: "1523",
        height: "895"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户认证框架主要包括四个部分："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "统一用户认证API：提供归一化的系统用户身份认证能力调用接口。屏蔽认证差异，便于开发者调用系统能力认证用户身份。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "统一用户认证框架：包括框架层的SA和驱动，负责调度系统上的各种身份认证能力和用户认证控件，来完成业务通过统一用户认证API发起的用户认证请求。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "统一用户认证控件：实现了各种认证方式的用户身份认证交互界面，确保一致的用户身份认证体验，供统一用户认证框架调用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "各种认证能力：包括口令认证、人脸认证和指纹认证，分别实现了基于锁屏口令、人脸和指纹认证用户身份的能力，供统一用户认证框架调度。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户身份认证通过后，统一用户认证框架会在设备可信执行环境中签发用户身份认证通过证明，简称AuthToken。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从图的左侧，可以看到应用使用用户身份认证功能完成用户鉴权的过程：当应用需要调用通用密钥库服务中需用户授权才能访问的密钥时，应用可以将获取到的AuthToken随密钥调用请求一同提供给", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-overview",
        children: "通用密钥库服务"
      }), "，作为密钥二次访问控制的用户鉴权证明。通用密钥库服务在可信执行环境中校验了AuthToken的合法性和有效性后，便会响应业务请求，执行对应的密钥操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "authtoken数据结构",
      children: "AuthToken数据结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "明文段"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "内容"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "token版本号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前为2.0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "challenge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证随机挑战"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t[32]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要校验认证结果的业务方生成的一次性随机挑战。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证通过时戳"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证通过时戳。在复用场景中，该时戳为用户认证通过的时间，而不是复用认证结果时AuthToken的签发时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "authTrustLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证可信等级"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示用户认证结果的可信等级，取决于设备上认证执行器本身的能力，正常情况下应该大于或者等于调用者传入的authTrustLevel。见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%94%9F%E7%89%A9%E8%AE%A4%E8%AF%81%E5%8F%AF%E4%BF%A1%E7%AD%89%E7%BA%A7%E5%88%92%E5%88%86%E5%8E%9F%E5%88%99",
              children: "生物认证可信等级划分原则"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "authType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证通过采用的认证类型，包括人脸、指纹、口令（特指锁屏口令认证）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "authMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作类型：识别/认证。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "securityLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "token签发环境安全等级"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "token签发环境安全等级。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "密文段"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "内容"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "userId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统在创建用户时给用户分配的ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "secureUid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安全用户ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户注册系统口令时为用户随机分配的ID，在用户删除口令时删除，变更口令时该ID不变。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enrolledId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "凭据注册ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户每录入一个凭据，该用户的该类型凭据的enrolledId便会更换一个随机值，删除凭据时该ID不变。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "credentialId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "匹配上的凭据ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "随机分配给用户注册的人脸、指纹等凭据的ID。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "标签段"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "内容"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密文段的TAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t[16]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密文字段采用AES-GCM加密生成的TAG。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密文段加密使用的IV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t[12]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密文字段采用AES-GCM加密采用的随机IV。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sign"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "token的完整性保护签名"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t[32]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保护AuthToken的完整性。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "生物认证可信等级划分原则",
      children: "生物认证可信等级划分原则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "认证可信等级评估的是系统用户身份认证能力的安全性，取决于认证方案能力等级（Authentication Capability Level，ACL）和该认证系统的实现安全等级（Authentication Security Level，ASL）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统采用三种指标来衡量生物认证方案能力等级，具体定义如下表所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FRR（False Rejection Rate）：将合法用户当做非法用户拒绝的概率。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FAR（False Acceptance Rate）：将非法用户当做合法用户接受的概率，又称为误闯率。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SAR（Spoof Acceptance Rate）：接受一个基于合法生物特征复制的、非活体的样本概率。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FAR越低，FRR越高，认证的安全性越高，但合法用户被错误拒绝的概率越高，导致使用便捷性越差；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "反之FAR越高，FRR越低，则认证安全性越差，使用便捷性越好。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "认证方案能力等级"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "认证能力指标"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACL4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FRR=10%时，FAR≤0.0001%，SAR≤3%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACL3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FRR=10%时，FAR≤0.002%，SAR≤7%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACL2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FRR=10%时，FAR≤0.002%，7%<SAR≤20%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACL1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FRR=10%时，FAR≤1%，7%<SAR≤20%"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生物认证系统一般分为以下5个执行单元：生物特征源数据的采集、生物特征的提取、生物特征的存储、生物特征的比对和认证结果的签发。系统将认证过程中的各个执行单元的运行环境安全ESL（Executor Security Level）分为以下4个等级："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "执行单元安全等级"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "定义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ESL3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作在高安全硬件可信环境中完成，如安全协处理器、安全芯片等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ESL2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作在基于硬件可信根隔离的可信执行环境中完成，如TEE、SGX。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ESL1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作在有访问控制的执行环境中完成，如Linux。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ESL0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作在无访问控制的运行环境中完成，如单进程的轻量级系统。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "整个认证系统的实现安全等级ASL等于生物认证5个执行单元中最低的ESL级别。例如，有一个人脸认证系统，其特征存储和比对都在安全隔离环境TEE中执行（即ESL=2），但特征提取算法运行在普通系统环境中（即ESL=1），则该人脸认证系统的ASL=1。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由认证方案能力等级和认证方案安全等级映射得到认证结果可信等级的具体规则如下表："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "认证可信等级"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "映射规则"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明&举例"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "典型应用场景"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ATL4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACL≥3，ASL≥2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "能高精度地识别用户个体，有很强的活体检测能力，如：有特殊安全增强的指纹与3D人脸认证。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小额支付"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ATL3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACL≥3，ASL≥1  ACL≥2，ASL≥2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "能精确识别用户个体，有较强的活体检测能力，如：有特殊安全增强的2D人脸认证。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备解锁、应用登录、账号登录"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ATL2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACL≥2，ASL≥1  ACL≥1，ASL≥2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "能精确识别用户个体，有一定的活体检测能力，如：使用普通相机采集图像的2D人脸认证。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "维持设备解锁状态"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ATL1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACL=1，ASL=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "能识别用户个体，有一定的活体检测能力，如声纹认证。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "业务风控、精准推荐、个性化服务"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "系统身份认证约束与限制",
      children: "系统身份认证约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "三方应用调用系统本地身份认证能力，必须使用系统自带的身份认证控件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不允许三方应用在后台发起身份认证请求。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit支持模拟器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模拟器与真机存在通用差异，详情请参见详情请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification",
        children: "模拟器与真机的差异"
      }), "。"]
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
854162(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958416-1bb8eab139202b382af76ee54a444a28.png");

},
387690(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478417-d7ff247d7c5bc05f3765cb2590fd0acf.png");

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