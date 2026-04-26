"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["938017"], {
442281(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_iap_kit_guide_iap_appendix_iap_appendix_coverage_iap_appendix_coverage_md_417_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-iap-kit-guide-iap-appendix-iap-appendix-coverage-iap-appendix-coverage-md-417.json
var site_docs_iap_kit_guide_iap_appendix_iap_appendix_coverage_iap_appendix_coverage_md_417_namespaceObject = JSON.parse('{"id":"iap-kit-guide/iap-appendix/iap-appendix-coverage/iap-appendix-coverage","title":"华为IAP范围覆盖","description":"IAP已支持全球多个国家或地区，为当地的消费者和商户提供安全、便捷、高效的支付服务。","source":"@site/docs/iap-kit-guide/iap-appendix/iap-appendix-coverage/iap-appendix-coverage.md","sourceDirName":"iap-kit-guide/iap-appendix/iap-appendix-coverage","slug":"/iap-kit-guide/iap-appendix/iap-appendix-coverage/","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-appendix/iap-appendix-coverage/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"华为IAP范围覆盖","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-appendix-coverage","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自动续期订阅商品，A切换B且立即生效时，新订阅有效期的组成","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-faq/iap-faq-23/"},"next":{"title":"Live View Kit简介","permalink":"/harmonyos-docs-site/live-view-kit-guide/liveview-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/iap-kit-guide/iap-appendix/iap-appendix-coverage/iap-appendix-coverage.md


const frontMatter = {
	title: '华为IAP范围覆盖',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-appendix-coverage',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '华为IAP范围覆盖';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    img: "img",
    p: "p",
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
        id: "华为iap范围覆盖",
        children: "华为IAP范围覆盖"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IAP已支持全球多个国家或地区，为当地的消费者和商户提供安全、便捷、高效的支付服务。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["目前IAP在全球共支持", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "183"
        })
      }), "个国家或地区，其中："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "支付方式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数量"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡支付（Credit card/Debit card）"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["全球支持", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "183"
              })
            }), "个国家或地区。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(952740)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于某些币种在支付平台不支持携带小数，开发者在设置订单参数amount字段时，应设置为整数金额值，如5.00，不支持5.02。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "涉及币种："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BEF、XOF、XAF、XPF、KMF、GRD、GNF、HUF、IDR、JPY、LUF、MGA、MGF、PYG、PTE、RWF、KRW、ESP、TRL、VND、IQD、COP、CLP、ISK、KES（M-Pesa不支持小数，银行卡、花币、优惠券支持小数，建议amount优先设为整数）"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "序号"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "归属站点"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "国家/地区"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "国家/地区码"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "币种"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支付方式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "发卡组织"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "德国"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "爱尔兰"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "西班牙"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "法国"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "意大利"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "芬兰"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "瑞典"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SEK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "波兰"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PLN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "爱沙尼亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "比利时"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "奥地利"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "瑞士"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "罗马尼亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉脱维亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "匈牙利"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HUF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "斯洛伐克"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "荷兰"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "捷克"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CZ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CZK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "丹麦"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DKK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "希腊"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "英国"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GBP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "立陶宛"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "挪威"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "葡萄牙"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "塞尔维亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "土耳其"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "乌克兰"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UAH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "斯洛文尼亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "29"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "白俄罗斯"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保加利亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "克罗地亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "北马其顿"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MKD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "33"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "波黑"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "34"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "格鲁吉亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "35"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "马耳他"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "36"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列支敦士登"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "37"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "俄罗斯"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIR/Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "38"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以色列"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ILS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "39"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "塞浦路斯"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亚美尼亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "41"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卢森堡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "冰岛"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "43"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "摩尔多瓦"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "44"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "黑山"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "阿塞拜疆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AZ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AZN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "46"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "摩纳哥"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "47"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安道尔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "48"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圣马力诺"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "49"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "梵蒂冈"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "法罗群岛"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DKK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "51"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直布罗陀"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "52"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "格陵兰"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DKK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "53"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "欧洲"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "阿尔巴尼亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "54"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亚太地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中国境内"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CNY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "华为支付/Huawei Pay"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "55"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亚太地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "马来西亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MYR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "56"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亚太地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "越南"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "57"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亚太地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "菲律宾"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "58"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亚太地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新加坡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SGD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "59"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亚太地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "香港特别行政区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HKD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银联/Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "60"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亚太地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "印度尼西亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "61"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亚太地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "斯里兰卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LKR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "62"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亚太地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "尼泊尔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "63"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亚太地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "孟加拉"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BDT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亚太地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "泰国"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "THB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "65"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亚太地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "柬埔寨"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "66"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亚太地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "澳大利亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亚太地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "巴布亚新几内亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "68"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亚太地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "老挝"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "69"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亚太地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新西兰"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NZ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NZD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "70"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亚太地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日本"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JPY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "71"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亚太地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蒙古"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "72"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亚太地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "澳门特别行政区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银联/Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "73"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亚太地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文莱"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "74"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亚太地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "斐济"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FJ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "75"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亚太地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "法属波利尼西亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "76"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亚太地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "马尔代夫"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "77"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亚太地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中国台湾"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TWD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "78"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亚太地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缅甸"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MMK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "79"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亚太地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所罗门群岛"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亚太地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "汤加"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "81"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亚太地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "库克群岛"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NZD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "82"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亚太地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "瑙鲁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "83"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "乌兹别克斯坦"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UZ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "84"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "哈萨克斯坦"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KZ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KZT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "85"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "吉尔吉斯斯坦"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "86"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "土库曼斯坦"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "87"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "塔吉克斯坦"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TJ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "88"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "沙特阿拉伯"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "89"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "阿联酋"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "90"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "约旦"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JOD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "91"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "巴林"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BHD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "92"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡塔尔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "93"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "也门"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "94"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "刚果（金）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "95"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "埃及"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EGP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "96"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "黎巴嫩"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "97"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "阿尔及利亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DZ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DZD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "98"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "巴基斯坦"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "99"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "巴勒斯坦"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "喀麦隆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "塞内加尔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "刚果（布）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "几内亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "104"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加蓬"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "毛里塔尼亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "106"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "尼日尔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "107"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "乍得"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "108"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "赤道几内亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GQ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "109"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "科特迪瓦"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "110"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布基纳法索"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "111"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "马里"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "112"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "利比亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LYD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "113"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "贝宁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BJ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "114"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多哥"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "115"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "佛得角"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "116"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XAF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "117"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "冈比亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "118"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "几内亚比绍"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "119"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "突尼斯"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "120"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "埃塞俄比亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ETB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "121"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "吉布提"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DJ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "122"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "厄立特里亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "123"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "科威特"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KWD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "124"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "阿曼"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OMR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "125"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "摩洛哥"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "126"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中东北非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "伊拉克"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IQ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IQD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Diners/Discover/AMEX"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "127"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非洲南部"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "南非"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ZA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ZAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非洲南部"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "尼日利亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "129"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非洲南部"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "坦桑尼亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TZ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TZS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "130"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非洲南部"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "博茨瓦纳"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BWP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "131"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非洲南部"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "赞比亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ZM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "132"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非洲南部"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "毛里求斯"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "133"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非洲南部"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "乌干达"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "134"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非洲南部"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加纳"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GHS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "135"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非洲南部"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "津巴布韦"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ZW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "136"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非洲南部"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安哥拉"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "137"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非洲南部"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "纳米比亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NAD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "138"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非洲南部"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "莫桑比克"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MZ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "139"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非洲南部"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "马达加斯加"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "140"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非洲南部"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "马拉维"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "141"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非洲南部"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "肯尼亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "142"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非洲南部"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "留尼汪岛"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "143"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非洲南部"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "科摩罗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "144"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非洲南部"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "利比里亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "145"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非洲南部"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圣多美和普林西比"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "146"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非洲南部"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "马约特"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "147"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非洲南部"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "斯威士兰"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SZ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "148"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非洲南部"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "莱索托"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "149"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非洲南部"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "塞拉利昂"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "150"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非洲南部"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卢旺达"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RWF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "151"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "哥伦比亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "152"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "秘鲁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "153"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "墨西哥"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MXN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "154"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "阿根廷"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "155"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "玻利维亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BOB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "156"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "厄瓜多尔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "157"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "乌拉圭"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UYU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "158"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "巴拉圭"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PYG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "159"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "牙买加"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "160"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "特立尼达和多巴哥"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TTD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "161"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "哥斯达黎加"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "162"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "智利"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "163"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "危地马拉"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GTQ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "164"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "洪都拉斯"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "165"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "尼加拉瓜"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "166"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多米尼加"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "167"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "巴哈马"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "168"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "阿鲁巴"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "169"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "英属维尔京群岛"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "170"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圣卢西亚"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "171"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "法属圭亚那"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "172"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开曼群岛"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "173"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "巴拿马"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "174"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "委内瑞拉"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "175"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "萨尔瓦多"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "176"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "巴西"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BRL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "177"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "瓜德罗普"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "178"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "波多黎各"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "179"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "格林纳达"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "180"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安圭拉"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "181"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圭亚那"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Discover Card/Diners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "182"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "海地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "183"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "北美地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加拿大"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visa/Mastercard/JCB/Maestro/American Express/Discover Card/Diners"
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
952740(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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