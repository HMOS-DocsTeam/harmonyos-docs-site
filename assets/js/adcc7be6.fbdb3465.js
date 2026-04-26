"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["230213"], {
950901(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scenario_fusion_guide_scenario_fusion_intelligent_filling_scenario_fusion_introduction_to_smart_fill_scenario_fusion_introduction_to_smart_fill_md_adc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scenario-fusion-guide-scenario-fusion-intelligent-filling-scenario-fusion-introduction-to-smart-fill-scenario-fusion-introduction-to-smart-fill-md-adc.json
var site_docs_scenario_fusion_guide_scenario_fusion_intelligent_filling_scenario_fusion_introduction_to_smart_fill_scenario_fusion_introduction_to_smart_fill_md_adc_namespaceObject = JSON.parse('{"id":"scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-introduction-to-smart-fill/scenario-fusion-introduction-to-smart-fill","title":"智能填充概述","description":"智能填充服务提供场景化的输入建议，完善应用/元服务的系统开发能力，实现用户对复杂表单的一键填充，助力打造HarmonyOS极致输入效率。开发ArkUI输入组件后（TextInput、TextArea以下统称输入组件），一行代码配置快速启用功能。","source":"@site/docs/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-introduction-to-smart-fill/scenario-fusion-introduction-to-smart-fill.md","sourceDirName":"scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-introduction-to-smart-fill","slug":"/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-introduction-to-smart-fill/","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-introduction-to-smart-fill/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"智能填充概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-introduction-to-smart-fill","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"文件路径转换API","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-api-path-conversion/"},"next":{"title":"典型场景展示","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-introduction-typical-scenario/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-introduction-to-smart-fill/scenario-fusion-introduction-to-smart-fill.md


const frontMatter = {
	title: '智能填充概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-introduction-to-smart-fill',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '智能填充概述';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "申请接入智能填充服务",
  "id": "申请接入智能填充服务",
  "level": 2
}, {
  "value": "接入须知",
  "id": "接入须知",
  "level": 3
}, {
  "value": "接入操作",
  "id": "接入操作",
  "level": 3
}, {
  "value": "前提条件",
  "id": "前提条件",
  "level": 2
}, {
  "value": "表单智能填充",
  "id": "表单智能填充",
  "level": 2
}, {
  "value": "表单填充推荐场景",
  "id": "表单填充推荐场景",
  "level": 3
}, {
  "value": "昵称填写推荐场景",
  "id": "昵称填写推荐场景",
  "level": 3
}, {
  "value": "日程信息推荐场景",
  "id": "日程信息推荐场景",
  "level": 3
}, {
  "value": "联系人信息推荐场景",
  "id": "联系人信息推荐场景",
  "level": 3
}, {
  "value": "车牌信息推荐场景",
  "id": "车牌信息推荐场景",
  "level": 3
}, {
  "value": "护照信息推荐场景",
  "id": "护照信息推荐场景",
  "level": 3
}, {
  "value": "发票抬头推荐场景",
  "id": "发票抬头推荐场景",
  "level": 3
}, {
  "value": "历史表单输入",
  "id": "历史表单输入",
  "level": 2
}, {
  "value": "保存历史表单输入场景",
  "id": "保存历史表单输入场景",
  "level": 3
}, {
  "value": "更新已有历史表单输入记录",
  "id": "更新已有历史表单输入记录",
  "level": 3
}, {
  "value": "手动新增/修改历史表单输入场景",
  "id": "手动新增修改历史表单输入场景",
  "level": 3
}, {
  "value": "云空间同步数据",
  "id": "云空间同步数据",
  "level": 2
}, {
  "value": "云空间多设备同步数据场景",
  "id": "云空间多设备同步数据场景",
  "level": 3
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "智能填充概述",
        children: "智能填充概述"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["智能填充服务提供场景化的输入建议，完善应用/元服务的系统开发能力，实现用户对复杂表单的一键填充，助力打造HarmonyOS极致输入效率。开发ArkUI输入组件后（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput",
        children: "TextInput"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea",
        children: "TextArea"
      }), "以下统称输入组件），一行代码配置快速启用功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "智能填充支持Phone、Tablet设备，并且从5.1.0(18)版本开始，新增支持2in1设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "申请接入智能填充服务",
      children: "申请接入智能填充服务"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接入须知",
      children: "接入须知"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["智能填充服务仅提供给", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/start/edrna-0000001062678489",
          children: "已完成认证的企业开发者"
        }), "使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["智能填充支持的填充字段满足应用使用智能填充的业务场景需求。字段请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-intelligentfilling-appendix",
          children: "ContentType使用场景说明"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接入操作",
      children: "接入操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "智能填充服务开放能力接入需要申请与审批，申请接入流程如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-createharmonyapp-0000001945392297",
            children: "创建HarmonyOS应用/元服务"
          }), "完成为HarmonyOS应用/元服务创建APP ID工作。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["登录", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
            children: "AppGallery Connect"
          }), "，选择“", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "开发与服务"
            })
          }), "”。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择应用后，在“开放能力管理”栏，找到智能填充服务的开放能力，点击右侧“申请”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(774887)/* ["default"] */.A) + "",
            width: "1730",
            height: "632"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在“新建业务申请”窗口填写申请原因，选择上传附件，然后点击“提交”。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["申请原因：请详细描述使用", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "智能填充的具体场景"
              })
            }), "。（例如：***应用是***（应用简介），希望在***场景中使用智能填充***字段信息，以提升用户表单填写效率。）字段信息请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-intelligentfilling-appendix",
              children: "ContentType使用场景说明"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "上传附件：提供接入智能填充场景的页面图片或视频。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(98363)/* ["default"] */.A) + "",
            width: "801",
            height: "435"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(903085)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请根据场景所需，申请必要的字段信息，并谨慎使用。若存在不合理使用的情况，我们将收回该服务授权。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "进入互动中心页面，可看到申请已提交的消息。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "返回“开放能力管理”页面，能力开关置灰，“申请”显示为“申请中”状态。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "申请审批通过后，互动中心将收到通知。至此，已成功接入智能填充服务。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(234503)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "审批通过后，预计30分钟生效。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备智能填充开关必须处于打开状态，请前往“设置 > 隐私和安全 > 智能填充”页面开启开关，页面中可查看“关于智能填充与隐私的声明”和“权限使用说明”。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(415856)/* ["default"] */.A) + "",
        width: "331",
        height: "676"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用/元服务的输入组件的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-intelligentfilling-appendix",
          children: "ContentType"
        }), "属性配置对应场景，即可触发智能填充功能。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备已连接互联网。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "表单智能填充",
      children: "表单智能填充"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "表单填充推荐场景",
      children: "表单填充推荐场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点击表单中任一配置了ContentType属性的输入组件，将在其下方弹窗展示推荐的填充数据，填充数据来源请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-intelligentfilling-explain",
        children: "推荐数据源及推荐逻辑说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击表单中ContentType为“PERSON_FULL_NAME”（姓名）或“PERSON_LAST_NAME”（姓氏）、“PERSON_FIRST_NAME”（名字）的输入组件时，将同时推荐表单中其他ContentType类型的数据（以下统称多输入框场景）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(258673)/* ["default"] */.A) + "",
        width: "683",
        height: "676"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(212585)/* ["default"] */.A) + "",
        width: "688",
        height: "677"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击其他ContentType的输入组件时，只会推荐对应场景数据。例如点击ContentType为“NICKNAME”（昵称）的输入组件时，仅会在弹窗中推荐昵称数据（以下统称单输入框场景）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(744555)/* ["default"] */.A) + "",
        width: "331",
        height: "676"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "表单中存在ContentType为“PERSON_FULL_NAME”（姓名）或“PERSON_LAST_NAME”（姓氏）、“PERSON_FIRST_NAME”（名字）的输入组件且其中已填入信息，在点击其他已配置ContentType的输入组件时，将根据已填入的姓名信息进行信息匹配推荐。例如姓名填写“张三”，点击“手机号码”输入组件仅推荐数据源中“张三”相关的信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(501493)/* ["default"] */.A) + "",
        width: "331",
        height: "676"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "表单中存在ContentType为“PERSON_FULL_NAME”（姓名）或“PERSON_LAST_NAME”（姓氏）、“PERSON_FIRST_NAME”（名字）的输入组件且存在地址输入组件，在点击用户姓名类和地址信息类的ContentType输入组件时，若推荐的数据包含华为账号数据源的数据，且华为账号数据源的推荐数目少于推荐的华为账号收货地址数据时，可点击“更多地址”按钮拉起选择其他收货地址页面。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(405952)/* ["default"] */.A) + "",
        width: "1032",
        height: "676"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "昵称填写推荐场景",
      children: "昵称填写推荐场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当表单中需要昵称填写时，可从华为账号信息来源获取。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(577820)/* ["default"] */.A) + "",
        width: "331",
        height: "676"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "日程信息推荐场景",
      children: "日程信息推荐场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当表单中的输入组件仅配置了ContentType为“FORMAT_ADDRESS”（全量地址）时，会从日程信息中获取2小时内的数据进行填充推荐。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(209164)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "日程数据源推荐场景目前仅支持中文地址。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(495895)/* ["default"] */.A) + "",
        width: "331",
        height: "676"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "联系人信息推荐场景",
      children: "联系人信息推荐场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击配置了ContentType为“PHONE_NUMBER”（手机号）的输入组件时，若表单中存在ContentType为“PERSON_FULL_NAME”（姓名）或“PERSON_LAST_NAME”（姓氏）、“PERSON_FIRST_NAME”（名字）的输入组件且已填入信息，将根据其填入的信息来推荐联系人数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(137144)/* ["default"] */.A) + "",
        width: "331",
        height: "681"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "车牌信息推荐场景",
      children: "车牌信息推荐场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从5.1.0(18)开始，支持智能填充的推荐车牌号场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当表单中需要车牌号填写时，可从历史表单输入数据源中获取机主本人的车牌信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(702327)/* ["default"] */.A) + "",
        width: "331",
        height: "676"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "护照信息推荐场景",
      children: "护照信息推荐场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从5.1.0(18)开始，支持智能填充的护照信息推荐场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表单中存在ContentType为“COUNTRY_ADDRESS”（国籍）、“PASSPORT_NUMBER”（护照号）、“VALIDITY”（有效期至）、“ISSUE_AT”（签发地）的输入组件，在点击姓名类输入组件时，可从历史表单输入数据源中推荐护照信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(378648)/* ["default"] */.A) + "",
        width: "684",
        height: "676"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "发票抬头推荐场景",
      children: "发票抬头推荐场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从5.1.0(18)开始，支持智能填充的发票抬头推荐场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当表单中存在ContentType为“ORGANIZATION”（名称）和“TAX_ID”（税号）时，点击名称框可从华为账号数据源获取数据进行主动推荐，或根据输入内容进行匹配推荐，名称单框不支持推荐；税号框则根据名称框内容进行匹配推荐，名称框为空则进行主动推荐，税号单框不支持匹配推荐。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(240379)/* ["default"] */.A) + "",
        width: "682",
        height: "676"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "历史表单输入",
      children: "历史表单输入"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "保存在应用/元服务中填写的表单信息，用于后续表单填充推荐。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "保存历史表单输入场景",
      children: "保存历史表单输入场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "填写表单信息时，表单中存在配置了ContentType属性的输入组件触发历史表单输入保存页面，选择“保存”后智能填充弹窗提示开通服务，开启智能填充开关后填写表单进行一键填充。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(333645)/* ["default"] */.A) + "",
        width: "2012",
        height: "679"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(516860)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当使用智能填充功能的表单页面在切换或退出时，会自动触发", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-autofillmanager/js-apis-app-ability-autofillmanager#autofillmanagerrequestautosave",
          children: "requestAutoSave"
        }), "接口进行历史表单输入保存请求，将弹出“保存至历史表单输入”页面。也可主动调用该接口触发历史表单输入保存。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "“保存至历史表单输入”页面在点击“保存信息”按钮之后，若智能填充功能开关未打开，则弹出智能填充服务打开引导弹窗，点击“同意”按钮之后，智能填充开关会打开并将表单输入数据保存到历史表单输入中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "“保存至历史表单输入”页面在点击“忽略”按钮后，该应用24小时之内不会再次询问。该设备累计忽略5次后，页面中将显示“忽略后不再询问”勾选框，勾选之后点击“忽略”按钮，后续将不再询问。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "更新已有历史表单输入记录",
      children: "更新已有历史表单输入记录"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当表单中存在ContentType为“PERSON_FULL_NAME”（姓名）的输入组件时，且表单还存在其他任一配置了ContentType的输入组件，在触发保存时若历史表单输入记录中存在该姓名的记录且其他数据存在差异，则拉起页面提示“更新已有记录”或“保存为新记录”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(277937)/* ["default"] */.A) + "",
        width: "331",
        height: "676"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "手动新增修改历史表单输入场景",
      children: "手动新增/修改历史表单输入场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在智能填充页面或个人信息页面可以对历史表单输入进行管理。当历史表单输入中无数据，可点击“新增表单信息”进行新增；也可对已保存的信息进行修改或删除（当设备设置锁屏密码，进入历史表单输入时，需要输入锁屏密码）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(701713)/* ["default"] */.A) + "",
        width: "676",
        height: "676"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "云空间同步数据",
      children: "云空间同步数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同一华为账号下通过云空间实现数据上云保存，用于多设备数据同步。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "云空间多设备同步数据场景",
      children: "云空间多设备同步数据场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "登录华为账号后“云空间服务 ”中 智能填充开关默认开启，可以实现多设备同步历史表单输入数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(556857)/* ["default"] */.A) + "",
        width: "259",
        height: "178"
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
378648(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959152-9041c128ca61e24baa55aed4131224de.png");

},
774887(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479147-9694430f45da4b0d0ca125b701260b00.png");

},
258673(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959148-23a139f2c616b46a295eb0aa701dcdd6.png");

},
744555(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799500-eef340bdb8b2b05dd1acb756a5041969.png");

},
98363(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799498-e1597c77a0c5e1203018d0d8a07e3925.png");

},
212585(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479149-92988f65a23e7d41a361c5f7ffa40c23.png");

},
556857(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479155-bca9619f8709357ebfafebde92e8d667.png");

},
702327(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439197-e999c6c0a25590edbe9e4a30fc3ad395.png");

},
415856(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439193-9a2f6947f871387e67ee949b15b31b40.png");

},
501493(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439195-86cff19f1ab903362c2868f891c49d95.png");

},
333645(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799504-2307f6502cc77be927703b1a319dbc7c.png");

},
701713(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959154-390b4f10a51772a410ec7c919ee7de1b.png");

},
405952(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959150-aa06daf64ddc0da8df47f60f1bc60982.png");

},
495895(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479151-cf4ad4d0e2164518c675061646b9dc9f.png");

},
240379(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479153-744b4679de3619a6c6cdc2f1cc393714.png");

},
209164(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
277937(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439199-da7c3a3c1a0740675d79929687934f26.png");

},
516860(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
903085(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
137144(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799502-60c4e3be799a92ee25c7cb5ba8e31cb1.png");

},
234503(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
577820(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799500-eef340bdb8b2b05dd1acb756a5041969.png");

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