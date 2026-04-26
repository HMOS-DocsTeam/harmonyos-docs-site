"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["143964"], {
237014(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_local_key_management_huks_key_use_huks_identity_authentication_huks_identity_authentication_overview_huks_identity_authentication_overview_md_bf5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-local-key-management-huks-key-use-huks-identity-authentication-huks-identity-authentication-overview-huks-identity-authentication-overview-md-bf5.json
var site_docs_system_security_huks_kit_huks_local_key_management_huks_key_use_huks_identity_authentication_huks_identity_authentication_overview_huks_identity_authentication_overview_md_bf5_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-local-key-management/huks-key-use/huks-identity-authentication/huks-identity-authentication-overview/huks-identity-authentication-overview","title":"用户身份认证访问控制简介","description":"HUKS提供了完备的密钥访问控制能力，以保证存储在HUKS中的密钥被合法正确地访问：","source":"@site/docs/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-identity-authentication/huks-identity-authentication-overview/huks-identity-authentication-overview.md","sourceDirName":"system-security/huks-kit/huks-local-key-management/huks-key-use/huks-identity-authentication/huks-identity-authentication-overview","slug":"/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-identity-authentication/huks-identity-authentication-overview/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-identity-authentication/huks-identity-authentication-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"用户身份认证访问控制简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-identity-authentication-overview","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"密钥派生(C/C++)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-derivation/huks-key-derivation-ndk/"},"next":{"title":"用户身份认证访问控制开发指导","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-identity-authentication/huks-user-identity-authentication/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-identity-authentication/huks-identity-authentication-overview/huks-identity-authentication-overview.md


const frontMatter = {
	title: '用户身份认证访问控制简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-identity-authentication-overview',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '用户身份认证访问控制简介';

const assets = {

};



const toc = [{
  "value": "使用场景及开发流程",
  "id": "使用场景及开发流程",
  "level": 2
}, {
  "value": "用户身份认证",
  "id": "用户身份认证",
  "level": 3
}, {
  "value": "设置授权访问类型",
  "id": "设置授权访问类型",
  "level": 3
}, {
  "value": "支持挑战值校验",
  "id": "支持挑战值校验",
  "level": 3
}, {
  "value": "二次认证密钥访问控制",
  "id": "二次认证密钥访问控制",
  "level": 3
}, {
  "value": "用户身份认证和授权访问类型详细规格",
  "id": "用户身份认证和授权访问类型详细规格",
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
        id: "用户身份认证访问控制简介",
        children: "用户身份认证访问控制简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HUKS提供了完备的密钥访问控制能力，以保证存储在HUKS中的密钥被合法正确地访问："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "业务只能访问属于自己的密钥，即只能访问业务自身通过HUKS生成或导入的密钥。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持密钥的用户身份认证访问控制，对于高安全级别、保护敏感数据的业务密钥，需要在使用密钥的时候，再次要求用户即时地验证锁屏密码或生物特征，验证通过后，才能使用业务密钥。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持严格限制密钥的使用用途，如支持只允许AES密钥进行加密解密，只允许RSA密钥进行签名验签。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(486020)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "轻量级智能穿戴不支持用户身份认证访问控制功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API 23开始支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-group-key-overview",
        children: "群组密钥"
      }), "特性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景及开发流程",
      children: "使用场景及开发流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "整个用户身份认证访问控制，涉及多个环节，介绍如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "用户身份认证",
      children: "用户身份认证"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["生成/导入密钥时，可以指定密钥必须经过用户身份认证后才能使用。应用可以指定用于解锁设备锁屏的凭据（锁屏密码、指纹、人脸）的子集进行身份认证，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%94%A8%E6%88%B7%E8%BA%AB%E4%BB%BD%E8%AE%A4%E8%AF%81%E5%92%8C%E6%8E%88%E6%9D%83%E8%AE%BF%E9%97%AE%E7%B1%BB%E5%9E%8B%E8%AF%A6%E7%BB%86%E8%A7%84%E6%A0%BC",
        children: "用户身份认证和授权访问类型详细规格"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生成/导入密钥后，即使应用进程被攻击也不会导致未经用户授权的密钥访问，一般用于高敏感且高级别安全保护的场景，比如免密登录、免密支付、自动填充密码保护等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置授权访问类型",
      children: "设置授权访问类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除用户身份认证外，应用还需将密钥的授权访问类型（即失效条件）设置为以下三种类型之一："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "清除锁屏密码后，密钥永久失效。"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在生成/导入密钥后，一旦清除锁屏密码，此类密钥将永久失效。修改密码不会导致失效情况发生。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "前提条件：当前用户已经设置了锁屏密码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适用场景：保护与用户强相关的数据、锁屏密码授权访问某部分功能。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "用户录入新生物特征后，该特征下密钥永久失效。"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在生成/导入密钥后，一旦录入新的生物特征，该特征下此类密钥将永久失效。仅删除生物特征不会导致失效情况发生。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "这表示该授权访问类型下，仅录入同类型的新生物特征会无法使用此类密钥，而其它身份认证方式（其它生物特征、锁屏密码）仍可正常使用此类密钥。需要注意的是，如果清除锁屏密码，该授权访问类型的密钥也将永久失效。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "前提条件：当前用户至少录入了一个生物特征（如指纹）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用场景：免密登录、免密支付等。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "用户密钥总是有效。"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用此模式生成的密钥将永久有效，除非用户主动删除。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "这表示无论用户如何清除、更改锁屏密码和生物特征，只要用户身份认证成功，此类密钥总是可用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "密钥生成时将绑定前台用户id，使用此模式生成的密钥时，仅对前台用户id进行校验。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持挑战值校验",
      children: "支持挑战值校验"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此外，为了保证密钥使用时用户认证结果的有效性（不可重放），HUKS支持挑战值校验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在身份认证前，需要从HUKS获取挑战值传给用户身份认证方法，然后在密钥操作时校验认证令牌的挑战值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "二次认证密钥访问控制",
      children: "二次认证密钥访问控制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除此之外，二次认证密钥访问控制还包含以下三种方式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "根据AuthToken进行访问控制"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(368694)/* ["default"] */.A) + "",
            width: "1638",
            height: "971"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户身份认证访问控制流程如上图所示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其中，AT KEY（对称密钥）由HUKS TA每次启动时根据设备的安全根密钥重新派生而成。且UserIAM 与HUKS 的交互位于TEE环境内。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "允许一次认证多次授权"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "密钥管理支持一次认证多次授权，允许多个密钥的访问控制授权通过一次认证完成。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适用场景：如手机克隆，希望一次性导出数据，只需要校验一次锁屏密码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用方式：HUKS 每次生成的Challenge为8字节，而传入UserIAM中的Challenge可扩展为32字节，因而支持一次授权4个密钥的访问。业务调用HUKS为每个密钥生成8字节的Challenge，而后将多个Challenge拼接为一个Challenge传入UserIAM进行认证。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "支持基于Timestamp的访问控制"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对于某些特殊场景，如高性能场景，支持基于Timestamp的免Challenge实现。在生成密钥时设置超时时间，业务使用时直接请求UserIAM发起认证，而后将包含了Timestamp的AuthToken传给HUKS，HUKS校验AuthToken后，对比当前时间与Timestamp差值是否大于超时时间，从而判断密钥是否允许使用。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "用户身份认证和授权访问类型详细规格",
      children: "用户身份认证和授权访问类型详细规格"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为方便查阅，在表格中将使用对应的简写指代具体的用户认证类型，其对应关系如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HUKS_USER_AUTH_TYPE_PIN，即锁屏密码，简写为PIN。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HUKS_USER_AUTH_TYPE_FACE，即生物特征（人脸），简写为FACE。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HUKS_USER_AUTH_TYPE_FINGERPRINT，即生物特征（指纹），简写为FINGERPRINT。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["HUKS_USER_AUTH_TYPE_TUI_PIN，即数字盾密码。简写为TUI_PIN。数字盾密码请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-trustedauth-service",
          children: "数字盾服务"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安全访问控制类型简写为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HUKS_AUTH_ACCESS_INVALID_CLEAR_PASSWORD，即清除锁屏密码后，密钥永久失效。简写为INVALID_CLEAR_PASSWORD。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HUKS_AUTH_ACCESS_INVALID_NEW_BIO_ENROLL，即用户录入新生物特征后，该特征下密钥永久失效。简写为 INVALID_NEW_BIO_ENROLL。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HUKS_AUTH_ACCESS_ALWAYS_VALID，即用户密钥总是有效。简写为ALWAYS_VALID。"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "用户身份认证"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "授权访问类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INVALID_CLEAR_PASSWORD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前仅支持锁屏密码进行身份认证，清除锁屏密码后，密钥永久失效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FACE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INVALID_CLEAR_PASSWORD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前仅支持人脸进行身份认证，清除锁屏密码后，密钥永久失效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FINGERPRINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INVALID_CLEAR_PASSWORD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前仅支持指纹进行身份认证，清除锁屏密码后，密钥永久失效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FACE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INVALID_CLEAR_PASSWORD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FINGERPRINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INVALID_CLEAR_PASSWORD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FACE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FINGERPRINT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FACE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INVALID_NEW_BIO_ENROLL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前仅支持人脸进行身份认证，录入新的人脸后，密钥永久失效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FINGERPRINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INVALID_NEW_BIO_ENROLL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前仅支持指纹进行身份认证，录入新的指纹后，密钥永久失效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FACE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INVALID_NEW_BIO_ENROLL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FINGERPRINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INVALID_NEW_BIO_ENROLL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FACE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FINGERPRINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INVALID_NEW_BIO_ENROLL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FACE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FINGERPRINT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALWAYS_VALID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前仅支持锁屏密码进行身份认证，密钥永久有效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FACE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALWAYS_VALID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前仅支持人脸进行身份认证，密钥永久有效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FINGERPRINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALWAYS_VALID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前仅支持指纹进行身份认证，密钥永久有效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FACE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALWAYS_VALID"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FINGERPRINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALWAYS_VALID"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FACE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FINGERPRINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALWAYS_VALID"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FACE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FINGERPRINT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TUI_PIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALWAYS_VALID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前仅支持数字盾密码进行身份认证，密钥永久有效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TUI_PIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FACE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALWAYS_VALID"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TUI_PIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FINGERPRINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALWAYS_VALID"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TUI_PIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FACE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FINGERPRINT"
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
486020(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
368694(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958412-536f7e6cd43f071964894dcc3fd93cf6.png");

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