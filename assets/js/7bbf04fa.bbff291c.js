"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["493232"], {
451931(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_wallet_kit_guide_wallet_preparations_wallet_preparations_md_7bb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-wallet-kit-guide-wallet-preparations-wallet-preparations-md-7bb.json
var site_docs_wallet_kit_guide_wallet_preparations_wallet_preparations_md_7bb_namespaceObject = JSON.parse('{"id":"wallet-kit-guide/wallet-preparations/wallet-preparations","title":"创建Wallet Kit服务","description":"请先参考“应用开发准备”完成基本准备工作和指纹配置，再继续以下开发活动。","source":"@site/docs/wallet-kit-guide/wallet-preparations/wallet-preparations.md","sourceDirName":"wallet-kit-guide/wallet-preparations","slug":"/wallet-kit-guide/wallet-preparations/","permalink":"/harmonyos-docs-site/wallet-kit-guide/wallet-preparations/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"创建Wallet Kit服务","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/wallet-preparations","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Wallet Kit简介","permalink":"/harmonyos-docs-site/wallet-kit-guide/wallet-introduction/"},"next":{"title":"概述","permalink":"/harmonyos-docs-site/wallet-kit-guide/wallet-carkey/wallet-carkey-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/wallet-kit-guide/wallet-preparations/wallet-preparations.md


const frontMatter = {
	title: '创建Wallet Kit服务',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/wallet-preparations',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '创建Wallet Kit服务';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
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
        id: "创建wallet-kit服务",
        children: "创建Wallet Kit服务"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请先参考“", (0,jsx_runtime.jsx)(_components.a, {
        href: "/application-dev-overview",
        children: "应用开发准备"
      }), "”完成基本准备工作和指纹配置，再继续以下开发活动。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["登录", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
            children: "AppGallery Connect"
          }), "，选择“我的项目”。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击进入对应的项目，在左侧“项目设置”页签，上侧导航选择“开放能力管理”，打开华为钱包的开关。用于钱包对车钥匙管理台向钱包服务器发起http/https请求时的权限控制。关闭状态下，开发者服务器将访问不了钱包服务器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(435829)/* ["default"] */.A) + "",
            width: "1628",
            height: "686"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在“项目设置”页签，左侧导航选择“盈利 > 华为钱包”，点击“申请Wallet Kit服务”，进入申请Wallet Kit服务。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(531661)/* ["default"] */.A) + "",
            width: "1887",
            height: "617"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击“产品接入华为钱包服务”的“点击申请”按钮。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(972588)/* ["default"] */.A) + "",
            width: "1667",
            height: "628"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "各业务场景对应的参数有差异，具体参数请参考各业务的Wallet Kit服务基本信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(481094)/* ["default"] */.A) + "",
            width: "1871",
            height: "834"
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "Wallet Kit服务参数名称"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "参数值"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "服务类型"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["分为卡、票、券、钥匙等，暂时只支持车钥匙，交通卡服务接入请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/wallet-kit-guide/wallet-transport/wallet-transport-overview",
                  children: "接入交通卡"
                }), "。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "服务项目"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "服务项目依赖所选择的服务类型，不同的服务类型，有不同的服务项目。例如当服务类型选择“卡”时，对应的服务项目有：“会员卡”、“礼品卡”等。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "服务名称"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Wallet Kit首页列表展示该开发者所有创建的服务时，服务名称用于区分不同的服务。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "服务号"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用于Wallet Kit服务器区分不同的服务且保证唯一性。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "接入方式"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "国内支持三种接入方式，App接入，云端接入，代理接入。商户可以根据自己的需求选择适合自己类型的接入方式。选择云端接入时用户需要填写“回调地址”、“用户公钥”二项资料，选择App接入则只需要上传证书请求文件生成证书即可，选择代理接入时用户需要填写“回调地址”一项资料，而用户公钥则会发送默认值到Wallet Kit服务器。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "回调地址"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "开发者提供给Wallet Kit的地址，用于Wallet Kit回调开发者，用户领卡成功或删卡时回调开发者。  注：如果不需要Wallet Kit通知开发者用户领卡或删卡的状态，可以不填该字段。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "用户公钥"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "开发者将生成的公钥复制粘贴到此处，后续该公钥将作为Wallet Kit服务器认证开发者身份的方式，参考如下公钥生成方式。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "公钥生成方式："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（1）配置好node执行环境并使用文本编辑器新建文件，拷贝以下代码到文件中并保存命名为generateKeyPair.js。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const crypto = require('crypto');\n// 生成密钥对\nconst { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {\n  modulusLength: 4096, // 密钥长度，不少于4096\n  publicKeyEncoding: {\n    type: 'spki', // 公钥编码格式\n    format: 'der' // 公钥输出格式\n  },\n  privateKeyEncoding: {\n    type: 'pkcs8', // 私钥编码格式\n    format: 'der' // 私钥输出格式\n  }\n});\nconsole.info('生成的公钥：');\nconsole.info(publicKey.toString('base64'));\nconsole.info('生成的私钥：');\nconsole.info(privateKey.toString('base64'));\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（2）打开命令行工具，执行", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "node generateKeyPair.js"
            })
          }), "命令。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（3）从结果中拷贝生成的公私钥并保存。结果如下图所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(736938)/* ["default"] */.A) + "",
            width: "1122",
            height: "736"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击“下一步”，进入NFC参数设置页面，各业务场景对应的参数有差异，具体参数请参考各业务的NFC参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(261964)/* ["default"] */.A) + "",
            width: "1199",
            height: "693"
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "NFC参数名称"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "参数值"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "是否支持跨移动设备同步"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用户领取卡券后可通过此能力在同一账号下的多设备中共享此卡券。商户默认选择“否”即可。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "是否开通NFC能力"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "服务类型为门钥匙、一卡通、门禁卡、社会保障卡、港澳通行证、护照时，需要开通NFC能力，同时需要配置应用号和文件参数。其余的服务类型可以选择不开通NFC能力。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "应用ID"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "通过“获取AID”按钮创建新应用ID，内容格式为16进制数（字符为 0-F），最大长度为32（推荐32位），建议以“A000000048575041590100”开头。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "外部认证密钥"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用于离线读写卡时外部认证校验。内容格式为16进制数（字符为 0-F），最大长度为32（推荐32位）。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "文件参数定义"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "密钥信息，用于对指定文件区域读写权限的控制。内容格式为16进制数（字符为 0-F），最大长度为32（推荐32位）。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击“下一步”，创建完成后，返回Wallet Kit服务创建页面，可对所创建的服务进行查看、修改和删除。"
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
972588(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959196-7c4b3e9cc5e17a31fde02870f623cb56.png");

},
481094(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479197-b891782a74972944c8b2c4f36bb83ead.png");

},
736938(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799548-d0f098a3e1f69ec8260ea8997e4b705f.png");

},
531661(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439241-775030011f9fada62ca78a35a5fb3b6c.png");

},
435829(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799546-2d5383f1aeeac4fc137fce82594013e7.png");

},
261964(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439243-308ad7aa2232cd814931c4991fb6d184.png");

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