"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["164742"], {
194243(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ability_api_ability_arkts_ability_arkts_dep_js_apis_ability_wantconstant_js_apis_ability_wantconstant_md_ecc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ability-api-ability-arkts-ability-arkts-dep-js-apis-ability-wantconstant-js-apis-ability-wantconstant-md-ecc.json
var site_docs_ref_ability_api_ability_arkts_ability_arkts_dep_js_apis_ability_wantconstant_js_apis_ability_wantconstant_md_ecc_namespaceObject = JSON.parse('{"id":"ability-api/ability-arkts/ability-arkts-dep/js-apis-ability-wantconstant/js-apis-ability-wantconstant","title":"@ohos.ability.wantConstant (wantConstant)","description":"wantConstant模块提供want中操作want常数和解释Flags说明的能力。","source":"@site/docs-ref/ability-api/ability-arkts/ability-arkts-dep/js-apis-ability-wantconstant/js-apis-ability-wantconstant.md","sourceDirName":"ability-api/ability-arkts/ability-arkts-dep/js-apis-ability-wantconstant","slug":"/ability-api/ability-arkts/ability-arkts-dep/js-apis-ability-wantconstant/js-apis-ability-wantconstant","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/ability-arkts-dep/js-apis-ability-wantconstant/js-apis-ability-wantconstant","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"@ohos.ability.wantConstant (wantConstant)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-ability-wantconstant","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-ability-wantconstant"},"sidebar":"ref","previous":{"title":"@ohos.ability.errorCode (ErrorCode)","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/ability-arkts-dep/js-apis-ability-errorcode/js-apis-ability-errorcode"},"next":{"title":"@ohos.application.appManager (appManager)","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/ability-arkts-dep/js-apis-application-appmanager/js-apis-application-appmanager"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ability-api/ability-arkts/ability-arkts-dep/js-apis-ability-wantconstant/js-apis-ability-wantconstant.md


const frontMatter = {
	title: '@ohos.ability.wantConstant (wantConstant)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-ability-wantconstant',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-ability-wantconstant'
};
const contentTitle = '@ohos.ability.wantConstant (wantConstant)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "Action",
  "id": "action",
  "level": 2
}, {
  "value": "Entity",
  "id": "entity",
  "level": 2
}, {
  "value": "Flags",
  "id": "flags",
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
        id: "ohosabilitywantconstant-wantconstant",
        children: "@ohos.ability.wantConstant (wantConstant)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "wantConstant模块提供want中操作want常数和解释Flags说明的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(377390)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本模块首批接口从API version 6开始支持，从API version 9废弃，替换模块为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantconstant/js-apis-app-ability-wantconstant",
        children: "@ohos.app.ability.wantConstant"
      }), "。后续版本的新增接口，采用上角标单独标记接口的起始版本。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import wantConstant from '@ohos.ability.wantConstant';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "action",
      children: "Action"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "want操作的常数。用于表示要执行的通用操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityBase"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTION_HOME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.want.action.home"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示返回原点的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTION_DIAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.want.action.dial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示启动显示小键盘的页面功能的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTION_SEARCH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.want.action.search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示启动页面搜索功能的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTION_WIRELESS_SETTINGS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.settings.wireless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示启动提供无线网络设置的页面功能的操作，例如，Wi-Fi选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTION_MANAGE_APPLICATIONS_SETTINGS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.settings.manage.applications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示启动管理已安装应用程序的页面功能的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTION_APPLICATION_DETAILS_SETTINGS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.settings.application.details"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示启动显示指定应用程序详细信息的页面功能的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTION_SET_ALARM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.want.action.setAlarm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示启动页面功能以设置闹钟的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTION_SHOW_ALARMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.want.action.showAlarms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示启动显示所有警报的页面功能的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTION_SNOOZE_ALARM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.want.action.snoozeAlarm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示启动用于使闹钟睡眠的页面功能的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTION_DISMISS_ALARM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.want.action.dismissAlarm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示启动删除闹钟的页面功能的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTION_DISMISS_TIMER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.want.action.dismissTimer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示启动页面功能以关闭计时器的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTION_SEND_SMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.want.action.sendSms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示启动发送sms的页面功能的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTION_CHOOSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.want.action.choose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示启动页面功能以打开联系人或图片的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTION_IMAGE_CAPTURE8+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.want.action.imageCapture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示启动页面拍照功能的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTION_VIDEO_CAPTURE8+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.want.action.videoCapture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示启动页面功能以拍摄视频的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTION_SELECT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.want.action.select"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示显示应用程序选择对话框的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTION_SEND_DATA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.want.action.sendData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示发送单个数据记录的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTION_SEND_MULTIPLE_DATA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.want.action.sendMultipleData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示发送多个数据记录的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTION_SCAN_MEDIA_FILE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.want.action.scanMediaFile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示请求媒体扫描仪扫描文件并将文件添加到媒体库的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTION_VIEW_DATA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.want.action.viewData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示查看数据的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTION_EDIT_DATA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.want.action.editData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示编辑数据的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INTENT_PARAMS_INTENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ability.want.params.INTENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示用行为选择器来展示选择的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INTENT_PARAMS_TITLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ability.want.params.TITLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示与行为选择器一起使用时的字符序列对话框标题。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTION_FILE_SELECT7+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.action.fileSelect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示选择文件的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PARAMS_STREAM7+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ability.params.stream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示发送数据时与目标关联的数据流的URI。对应的value必须是string类型的数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTION_APP_ACCOUNT_OAUTH 8+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.account.appAccount.action.oauth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示提供oauth服务的操作。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "entity",
      children: "Entity"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "want实体的常数。用于表示目标Ability额外的类别信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityBase"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ENTITY_DEFAULT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "entity.system.default"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示默认实体，如果未指定实体，则使用该实体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ENTITY_HOME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "entity.system.home"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示主屏幕实体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ENTITY_VOICE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "entity.system.voice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示语音交互实体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ENTITY_BROWSABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "entity.system.browsable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示浏览器类别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ENTITY_VIDEO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "entity.system.video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示视频类别。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flags",
      children: "Flags"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Flags说明。用于表示处理Want的方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityBase"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLAG_AUTH_READ_URI_PERMISSION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00000001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示对URI执行读取操作的授权。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLAG_AUTH_WRITE_URI_PERMISSION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00000002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示对URI执行写入操作的授权。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLAG_ABILITY_FORWARD_RESULT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00000004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将结果返回给元能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLAG_ABILITY_CONTINUATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00000008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确定是否可以将本地设备上的功能迁移到远程设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLAG_NOT_OHOS_COMPONENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00000010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定组件是否属于OHOS。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLAG_ABILITY_FORM_ENABLED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00000020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定是否启动某个能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLAG_ABILITYSLICE_MULTI_DEVICE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00000100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持分布式调度系统中的多设备启动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLAG_START_FOREGROUND_ABILITY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00000200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示无论主机应用程序是否已启动，都将启动使用服务模板的功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLAG_INSTALL_ON_DEMAND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00000800"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果未安装指定的功能，请安装该功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLAG_INSTALL_WITH_BACKGROUND_MODE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x80000000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果未安装，使用后台模式安装该功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLAG_ABILITY_CLEAR_MISSION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00008000"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指示清除其他任务的操作。可以为传递给 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "FeatureAbility"
              })
            }), " 中", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/fa-model/js-apis-ability-featureability/js-apis-ability-featureability#featureabilitystartability",
              children: "startAbility"
            }), "方法的", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Want"
              })
            }), "设置此标志，并且必须与", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "FLAG_ABILITY_NEW_MISSION"
              })
            }), "一起使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLAG_ABILITY_NEW_MISSION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x10000000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示在历史任务堆栈上创建任务的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLAG_ABILITY_MISSION_TOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x20000000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示如果启动能力的现有实例已位于任务堆栈的顶部，则将重用该实例。否则，将创建一个新的能力实例。"
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
377390(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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