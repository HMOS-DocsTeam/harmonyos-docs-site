"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["493831"], {
413508(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scenario_fusion_guide_scenario_fusion_intelligent_filling_scenario_fusion_tripartiteframework_scenario_fusion_mappingrelationship_scenario_fusion_mappingrelationship_md_5ac_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scenario-fusion-guide-scenario-fusion-intelligent-filling-scenario-fusion-tripartiteframework-scenario-fusion-mappingrelationship-scenario-fusion-mappingrelationship-md-5ac.json
var site_docs_scenario_fusion_guide_scenario_fusion_intelligent_filling_scenario_fusion_tripartiteframework_scenario_fusion_mappingrelationship_scenario_fusion_mappingrelationship_md_5ac_namespaceObject = JSON.parse('{"id":"scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-mappingrelationship/scenario-fusion-mappingrelationship","title":"H5/三方框架和HarmonyOS配置项映射关系","description":"H5 autocomplete和HarmonyOS的ContentType的映射关系","source":"@site/docs/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-mappingrelationship/scenario-fusion-mappingrelationship.md","sourceDirName":"scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-mappingrelationship","slug":"/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-mappingrelationship/","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-mappingrelationship/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"H5/三方框架和HarmonyOS配置项映射关系","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-mappingrelationship","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"mPaas框架+H5接入智能填充","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-mpass/"},"next":{"title":"单击快速验证手机号按钮，无法拉起页面","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-button-frequently-asked-questions/scenario-fusion-faq-1/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-mappingrelationship/scenario-fusion-mappingrelationship.md


const frontMatter = {
	title: 'H5/三方框架和HarmonyOS配置项映射关系',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-mappingrelationship',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'H5/三方框架和HarmonyOS配置项映射关系';

const assets = {

};



const toc = [{
  "value": "H5 autocomplete和HarmonyOS的ContentType的映射关系",
  "id": "h5-autocomplete和harmonyos的contenttype的映射关系",
  "level": 2
}, {
  "value": "React Native textContentType和HarmonyOS的ContentType的映射关系",
  "id": "react-native-textcontenttype和harmonyos的contenttype的映射关系",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
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
        id: "h5三方框架和harmonyos配置项映射关系",
        children: "H5/三方框架和HarmonyOS配置项映射关系"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "h5-autocomplete和harmonyos的contenttype的映射关系",
      children: "H5 autocomplete和HarmonyOS的ContentType的映射关系"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "输入场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "【H5】autocomplete"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "【ArkUI】ContentType"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "昵称"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "nickname"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NICKNAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "昵称，如“Vivian”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "姓名"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PERSON_FULL_NAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "姓名，如“张三”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "姓氏"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "family-name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PERSON_LAST_NAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "姓氏，如“张”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "名字"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "given-name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PERSON_FIRST_NAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "名字，如“三”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "手机号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tel-national"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHONE_NUMBER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手机号，如“188******88”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "邮件地址"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "email"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMAIL_ADDRESS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["邮箱地址，如“a****", (0,jsx_runtime.jsx)(_components.a, {
              href: "mailto:t@huawei.com",
              children: "t@huawei.com"
            }), "”。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "身份证号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "id-card-number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ID_CARD_NUMBER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "身份证号，如“3201***********123”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "地址"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "street-address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FULL_STREET_ADDRESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "带街道详细地址，如“雨花街道玉兰路98号”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "国籍"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "country"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COUNTRY_ADDRESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "国籍，如“中国”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "护照号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "passport-number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASSPORT_NUMBER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "护照号，如“G*******1”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "有效期至"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "validity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VALIDITY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "有效期至，如“2025-1-1”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "签发地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "issue-at"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISSUE_AT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "签发地，如“广东”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "车牌号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "license-plate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LICENSE_PLATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "车牌号，如“粤A*****1”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "organization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ORGANIZATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "名称，如“深圳市xx公司”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "税号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tax-id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TAX_ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "税号，如“2020***********000”。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(446072)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "autocomplete配置项name和（family-name，given-name）不能同时在同一个表单中使用（在护照信息场景中可以同时使用）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "react-native-textcontenttype和harmonyos的contenttype的映射关系",
      children: "React Native textContentType和HarmonyOS的ContentType的映射关系"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "输入场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "【React Native】textContentType"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "【ArkUI】ContentType"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "昵称"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "nickname"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NICKNAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "昵称，如“Vivian”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "姓名"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PERSON_FULL_NAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "姓名，如“张三”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "姓氏"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "familyName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PERSON_LAST_NAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "姓氏，如“张”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "名字"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "givenName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PERSON_FIRST_NAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "名字，如“三”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "手机号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "telephoneNumber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHONE_NUMBER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手机号，如“188******88”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "邮件地址"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "emailAddress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMAIL_ADDRESS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["邮箱地址，如“a****", (0,jsx_runtime.jsx)(_components.a, {
              href: "mailto:t@huawei.com",
              children: "t@huawei.com"
            }), "”。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "身份证号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "idCardNumber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ID_CARD_NUMBER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "身份证号，如“3201***********123”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "全量地址"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "formatAddress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FORMAT_ADDRESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "全量地址，如“中国江苏省南京市雨花台区雨花街道玉兰路98号”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "街道详细地址"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fullStreetAddress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FULL_STREET_ADDRESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "带街道详细地址，如“雨花街道玉兰路98号”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "详细地址"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "detailInfoWithoutStreet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DETAIL_INFO_WITHOUT_STREET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不带街道详细地址，如“玉兰路98号”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "国籍"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "countryName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COUNTRY_ADDRESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "国籍，如“中国”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "护照号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "passportNumber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASSPORT_NUMBER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "护照号，如“G*******1”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "有效期至"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "validity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VALIDITY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "有效期至，如“2025-1-1”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "签发地"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "issueAt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISSUE_AT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "签发地，如“广东”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "车牌号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "licensePlate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LICENSE_PLATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "车牌号，如“粤A*****1”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "organization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ORGANIZATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "名称，如“深圳市xx公司”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "税号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "taxId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TAX_ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "税号，如“2020***********000”。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(510248)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "textContentType配置项name和（familyName，givenName）不能同时在同一个表单中使用（在护照信息场景中可以同时使用）。"
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
510248(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
446072(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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