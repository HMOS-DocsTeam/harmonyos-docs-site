"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["869534"], {
819607(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_form_kit_arkts_ui_arkts_ui_widget_arkts_ui_lockscreen_form_arkts_ui_lockscreen_form_development_arkts_ui_lockscreen_form_development_md_604_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-form-kit-arkts-ui-arkts-ui-widget-arkts-ui-lockscreen-form-arkts-ui-lockscreen-form-development-arkts-ui-lockscreen-form-development-md-604.json
var site_docs_form_kit_arkts_ui_arkts_ui_widget_arkts_ui_lockscreen_form_arkts_ui_lockscreen_form_development_arkts_ui_lockscreen_form_development_md_604_namespaceObject = JSON.parse('{"id":"form-kit/arkts-ui/arkts-ui-widget/arkts-ui-lockscreen-form/arkts-ui-lockscreen-form-development/arkts-ui-lockscreen-form-development","title":"锁屏卡片开发指导","description":"从API version 18开始，Form Kit提供在设备锁屏界面上显示卡片的能力，用以展示重要信息或快捷操作，旨在让用户无需解锁即可获取关键资讯或执行常用功能。锁屏卡片常用于展示天气、时钟等内容，并支持用户个性化定制。","source":"@site/docs/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-lockscreen-form/arkts-ui-lockscreen-form-development/arkts-ui-lockscreen-form-development.md","sourceDirName":"form-kit/arkts-ui/arkts-ui-widget/arkts-ui-lockscreen-form/arkts-ui-lockscreen-form-development","slug":"/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-lockscreen-form/arkts-ui-lockscreen-form-development/","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-lockscreen-form/arkts-ui-lockscreen-form-development/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"锁屏卡片开发指导","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-lockscreen-form-development","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用内拉起卡片管理加桌","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-add/arkts-ui-widget-open-formmanager/"},"next":{"title":"背板透明卡片开发指导","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-transparent-backplate-form/arkts-ui-transparent-backplate-form-development/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-lockscreen-form/arkts-ui-lockscreen-form-development/arkts-ui-lockscreen-form-development.md


const frontMatter = {
	title: '锁屏卡片开发指导',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-lockscreen-form-development',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '锁屏卡片开发指导';

const assets = {

};



const toc = [{
  "value": "亮点/特征",
  "id": "亮点特征",
  "level": 2
}, {
  "value": "使用步骤",
  "id": "使用步骤",
  "level": 2
}, {
  "value": "约束和限制",
  "id": "约束和限制",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "锁屏卡片配置",
  "id": "锁屏卡片配置",
  "level": 3
}, {
  "value": "锁屏卡片开放能力申请",
  "id": "锁屏卡片开放能力申请",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "锁屏卡片开发指导",
        children: "锁屏卡片开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，Form Kit提供在设备锁屏界面上显示卡片的能力，用以展示重要信息或快捷操作，旨在让用户无需解锁即可获取关键资讯或执行常用功能。锁屏卡片常用于展示天气、时钟等内容，并支持用户个性化定制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文介绍了锁屏卡片的使用步骤、约束限制，并给出开发指导。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "亮点特征",
      children: "亮点/特征"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用信息浅层触达，不解锁即可查看，通过浅层信息持续获得用户关注，吸引用户复访。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用快捷功能一键直达，提供更便捷的访问路径，提升操作效率。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用步骤",
      children: "使用步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "锁屏卡片除了在锁屏界面显示卡片，还支持添加、删除、移动卡片，具体操作步骤如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "进入锁屏编辑态：在设备锁屏界面双手捏合手势进入锁屏编辑态，出现4个卡片添加位。 锁屏卡片只支持1*1、1*2尺寸的卡片，1*1尺寸卡片对应1个卡片添加位，1*2对应2个卡片添加位。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "进入锁屏卡片管理页面：点击卡片添加位会弹出锁屏卡片管理页面。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加卡片：在锁屏卡片管理页面选择任一卡片，例如运动健康和时钟，卡片就会添加到锁屏上。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "删除卡片：在锁屏编辑态，点击卡片右上角的减号即可删除卡片。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(316018)/* ["default"] */.A) + "",
            width: "525",
            height: "242"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束和限制",
      children: "约束和限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备限制：仅手机、平板设备支持使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "界面限制："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "锁屏卡片只支持 1*1、1*2尺寸的卡片。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["锁屏卡片不推荐展示涉及用户的隐私敏感数据，具体界面约束请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/design-guides/system-features-service-widget-0000002087671904#section248mcpsimp",
          children: "卡片内容设计"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卡片创建完成后，需要完成锁屏卡片配置，并接入锁屏卡片开放能力，其他开发流程与普通卡片一致，具体步骤参考如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "锁屏卡片配置",
      children: "锁屏卡片配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在form_config.json配置文件中，锁屏卡片必须配置renderingMode和supportDimensions字段。其中renderingMode字段仅支持配置为“singleColor”或者“autoColor”，supportDimensions字段取值中必须包含\"1*1\"或\"1*2\"，具体参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/form-kit/arkts-ui/arkts-ui-widget-configuration#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
        children: "配置文件字段说明"
      }), "。renderingMode字段在API version 18版本后，配置方法有变动。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 在API version 18及以上的版本，renderingMode的配置方法如下\n// entry/src/main/resources/base/profile/form_config.json\n{\n  \"forms\": [\n    {\n      \"name\": \"widget\",\n      \"displayName\": \"$string:widget_display_name\",\n      \"description\": \"$string:widget_desc\",\n      \"src\": \"./ets/widget/pages/WidgetCard.ets\",\n      \"uiSyntax\": \"arkts\",\n      \"isDynamic\": true,\n      \"isDefault\": true,\n      \"updateEnabled\": false,\n      \"scheduledUpdateTime\": \"10:30\",\n      \"renderingMode\": \"autoColor\",\n      \"updateDuration\": 1,\n      \"defaultDimension\": \"1*2\",\n      \"supportDimensions\": [\n        \"1*2\",\n        \"2*2\"\n      ]\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 在API version 18之前的版本，renderingMode的配置方法如下。value值“0”表示“autoColor”，value值“1”代表“fullColor”，value值“2”代表“singleColor”\n// entry/src/main/resources/base/profile/form_config.json\n{\n  \"forms\": [\n    {\n      \"name\": \"widget\",\n      \"displayName\": \"$string:widget_display_name\",\n      \"description\": \"$string:widget_desc\",\n      \"src\": \"./ets/widget/pages/WidgetCard.ets\",\n      \"uiSyntax\": \"arkts\",\n      \"isDynamic\": true,\n      \"isDefault\": true,\n      \"updateEnabled\": false,\n      \"scheduledUpdateTime\": \"10:30\",\n      \"updateDuration\": 1,\n      \"defaultDimension\": \"1*2\",\n      \"supportDimensions\": [\n        \"1*2\",\n        \"2*2\"\n      ],\n      \"metadata\": [\n        {\n          \"name\": \"renderingMode\",\n          \"value\": \"2\"\n        }\n      ]\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "锁屏卡片开放能力申请",
      children: "锁屏卡片开放能力申请"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因为锁屏卡片会展示在设备的锁屏界面，出于数据隐私安全考虑，需要开发者申请上架开放能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["因此在应用调试或发布时，必须使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section297715173233",
        children: "手动签名"
      }), "，并在手动签名", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-debug-profile-0000002248181278",
        children: "申请Profile"
      }), "过程中", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-app-0000002247955506",
        children: "创建HarmonyOS应用"
      }), "，创建应用时参考如下指导为应用接入开放能力。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在“开放能力接入”页面，点击锁屏卡片对应的申请按钮。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(564013)/* ["default"] */.A) + "",
            width: "525",
            height: "54"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在“新建业务申请”窗口填写申请信息，然后点击“提交”。申请原因：必填，不超过256个字符。上传附件：选填，仅可上传1个附件，大小不超过500MB。支持文本、表格、图片、视频、压缩包格式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(234113)/* ["default"] */.A) + "",
            width: "525",
            height: "381"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "返回“开放能力接入”页面，原“申请”按钮变为“申请中”，1-3个工作日反馈申请结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(276184)/* ["default"] */.A) + "",
            width: "525",
            height: "42"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "申请审批通过后，互动中心会发送通知给您，同时“申请中”按钮会变为置灰显示的“申请”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(391906)/* ["default"] */.A) + "",
            width: "525",
            height: "41"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "能力申请通过后，勾选锁屏卡片的能力开关，点击右上角“保存”。至此，您的应用已成功接入开放能力。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(320606)/* ["default"] */.A) + "",
            width: "525",
            height: "381"
          })
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
276184(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
391906(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAg0AAAApCAIAAAA52I3KAAAgAUlEQVR42u2deXxURbbHT9W9vS/ppDudlYQkJCSEfQsIQfZVFlFxRVHBHZ1R543OOL4ZZ3AX37ghiqC+EWSLw76EENawhZCEkH3fk+5Oek9333ur3h+djdXxjTiA9/vJJ5/kdnfduqfuPb86VaeqEaUURERERERErgIWTSAiIiIiIuqEiIiIiIioEyIiIiIiok6IiIiIiIg6ISIiIiIi6oSIiIiIyL8GpdA7LZXCxf9e/5RVJObFityijxYFQAgBpRQh1PsVQi695xFCPe+hlFDAGPUuCiFEKe15WBDCCHWdpbMESikghLrff/FpEMZwSU26q+j/s+u13hW+Ql0BMMaXl3BJbS9/lRByyUVjjK5Yfpc1uip1lbNcdsxvOtplmytV6eJ26S7Bb8bexV1+pKt4uPwqetvvkmIpIYBw1+kuamtKKFxa0xtRIQCg63IAEKBeavGLVV7UCZFbWi1+wrNEBYFQSjHLYgBB4CkFjJkuwbhSSZRCL3UBhLrfdpk4Xez/uhxW5+fA/yEiCIAZ//koIRT1FqsfUUSAK7jtnwFB4BHTbRDEMAwAEQTCsiwACIJAKUUYMxgLAg+YZRAAgMDzgBClFDOM3ysTXkAMA0B7rhr9ePv0NvC/0Mp+O1zT/j2dBYowAiIItFNlmM6634h0uCiVISXb+a/dSbASqzEAgLuDOgVkVIs6ISLy07XBam7FGqNWJphbLNoQo7T7Fc6el5NndnFShUqOOGeHD7A6acjAUJ3S//HWU3vO0vhZY/p1F+g0W9UGnaetNr+8CWNGIBASk9g3WA0A1rYmRh4keNy6oECPvQVpQ2TAtza1G8OCq/KP1TgkCoYiBnyCYtDgBI/DExIS2FNRj7WNUwRpZADgsDTL9KFSAACuqd5iiAyVAABw9ZVlDSYHAgqYQZTwPNEaIxL6RUmAAiCf02rzSYODlD1lEm9Tc7tWb5Ax4HNabV4mWK9BmGGQtzQ3v67NiREAQkSghsj4IYl9qvJPNHkkLOHUukCr2QQIcSCNSxwUqZcT3m0x+4JDA8HXXmeBPmGBvY3MOVutoA9WMxfb3n7sUF7c6NQwZe+DPlOLPTjEAEAAsNfl4CUalRRam1sDQowyEHiButotXkYZpFUAIIbBCCF7c61DZowIlPulwt+mlrqiwqpWQMgfMwAFfXRCYnQIA8TcbjMEBgIFt6OVkxkDZAAALnN9bn6JKiohSoPKSss6BKCgSBiYHKbXYAT2VpPSGMzewHcy56PNDioAVNYKVIvjdAgYFKZBfLtwvI0aVcjuApuTmDnULwhhCYyMYmT4usQZzJ///Odf4Ujf1X66QzyRm7mNCSBkKz++6rsjCYMjt3/6VcjtqQFdvdPmC/veX3OiT5+gwvT1m3Nc/SM1ubs2n7AETxqu+fyvK7amHzpz8tC3G3ZU1xTv2r3Prkrsq7K8/18r2aTkoj2f/s/Ws05zfXbGlqNtQXNGJ4Cr/N23vvYxpm9WbYpM6rf3i9fzheR+EQHHvnr/iCswHEybv/6uxenO/H7t3gK8YPaws9vXHWmW9VELNXWNDoc9e9uqtfsr+yfG6ToKX3z1M1WY9nhGTmRf5eq3vjMMMmbuPB4Wrfvg9785UGy2mZsK83KLKusbq7M/W7ll2D33BDM+SlHDqbQ31xyLj9VbWlraHF5FgEbiLXvjnS0jZ6ZqMW7P2bUm0zoxpR9GyN147L9/v0YbH0U7XG6vz2MtXfP5wZF3TrXk7X3nrY8hMPRw2obzJp642/MPb8poDpo1Ks5csOvFP3za0FyRsX3Tui3ppuaqAxknpZGJtCrjk8827d+7Me3AufrKwoN7d1e6dYP7Sdd99Pa3a3dbFIpw1v2Pzz7el3UqffteJma4wXR0+W9+l17mGjh8FONoXL9m1akaJiE2xJyz54sfckaPGybDOD/tm8w24+j+wRhjBJQiZG88+cHKtMTU1ABWAMAEAQbXqjdfPtmklPJ2k8lktVqbCjI+Tcuds2CK++z6F97cEDdkZKiOWffaq+dxmF5K5Cr1kS/f+OF8Q8Wp7HOn04+XuAx6ZeHBfx6q1UwfE5uz5Y3JD77e5HLmnDhx8lDa19sLR9w2Wi25XmHZ/8NNIQTVVcIFBwTIkN1JqRSpJKigikcKHKTBcgxGKWr3Ac9TDuFABei0OEzVFZr+3LC/NpFA6Efs+C+GuiI3LAhhSgVj0oSFroM1lSUmK9/hdLkxQYxcIcMYMxh4t9vtExCinNvt9glUplACaSqolPzX56+EMtK/scjn9eZtfz+tuHKwr6mwthTtPhAqCFpdoE4XiNqVDQIBgA0ffBQ08i5n0Za88vofNm2su9DAubYOS/zdtCUPpV9owzK1gnF8/92m0VPnLhyR2MHJJ8yae7ao7vThvPyyBpCwbZUlJaaa7ceTo9qPcRJp9om6caMNubl5POULc88bk8bqZBSUISOGJ7edO2ocOz2oPist1/bAcw9HaRADMgAIC9fbGo4dzFRhvoPVD7w/NhJYOVgLVr719ygt01qcfa5V9aE3L3zEHfeMCgkxGrQajZryApYgNiA0jMhZNGLmQ1NPVc2+b/FRX0dcypCCes+y4fo1hRLg2z98b/sj76zwZqSdDx4wM4Ztb7cqdf0TIzS5+47lFFknTBoTwbu9Xm97Q1GNr+/9M5Kmzpt+/uz2BUsfMRzdyAclPvXA7KKdG2uz92Qc3heYkFyamX5weL/2w1+dbA6QZL1TWbfg7d89OAPt3Lv5h5qa6vqinCZJvadEr44ctOjuGWqBNybMeHhcwYp3Nq7+y71EEIBhAHygj3/siacH67pa2jak6M/7sdf8/mcHYiOjvvrvFQPG9m+RBrA56X//x4WRT74SHRhE6u2AJIwmdMmSF9Q1R00hoUkTRtbl7t5bpnjyyfmBxojkaHX6urzo2XPC1RiA0BsptQdjoJRyAuIJUAKcAIAQC7SmWSh3QqQWeQVACDACoGCyEXsgo2WuS03YX5kHAVsHNTupQODy4TYWg16NdApRJW7uvgBFCAmWdR+vrrQhJTYfyS5uW0llPk9TRc2sF9+bFiTX6COSkpLYxryajqjExCS+qrCG5wDpGK4lc99+A6KcQCQStux8DR8ztf/Ee8d8t8cbGZEox7WuBplUwmhCRwxMchX887Ntha8/+dE0Q3Bp+77XXvnt0XVt8ntfGd6Rvfy3q+c9tXzn5k9rAwaNTbBLlTR9587gvtGN+z+xxS1ZOmesMlI2cVzfhswvNrUMfv6uMTvWZSLqDgnT5R3eWWpRMth7/tgxu7x5TP97NNqI+H6GkgLS0tDsbGiU6wbHxQ2AluJ/HjknMHJzYZYiPH5IUpzbzXHguVBlGxkJSG4cN2lyrBrwtFmPS2hLq0UVZmitKdKEMMf275PIlCzxdvgEtSGmvqK5+Mw363dl1PmCpBppqKXJ6pK0mtsoMVQc/fJgFbvMqDiPgHAddicLAAwjU0kZVqZUKtyc1+XlBYlEwrCyAH2Ara5o65r1hVUXPv7bikS5PLrfqLDQUHeEoQ33GT0wdOX32ZHRgem79s6eNvfRgASu6Xy9uWPLmvdOlBteXD4pPDoqm5gjI2dOTlJ4JToZAooQADE7W88ePHHqiXkpEXIfBQYhELyWVjevlgqCwDCMt9Xio9jn7QhKmPPS7+8u2rTqr1tPzHvlg/uGGerSvz3mcnBIEhWfIG1ucnVY93y/VmqvaiUR0/QdZafNyWMnGTwVh84W7qyRBAyZPjaMbN6VOWnSRIOCErhRprcpgEaBDGpkkyAqRwY1amaBYJQUjVtKqVRB6+pov3AchKCxlWAtliMgFDD6BXXiRyeCbsZI4li5cLCEODyUIz3JZN2TjxIG1HI0qT+e0I8Ro4qbty+AAIA1PvbinwDAnr/V7Ix+5pknYgyq3R/+1eTyScOgtuzs3n02U3FZjc+1X95UmVMa2YcFSkCpkXE8xwCllOc4rAiMDlYXHvvkcLPs2XBFSXajjDoulFtj+kS1FWQWREx586XFxdu+fK34bINVePUPf/TaWs3HX5r3+PLly+bnllZrQkJQlcPNESkgtVKuCklY+uyj731cqVZNK8x4G0e9nYiJvc3MCyTl9iknT6zvE67MuKBZ/tqrlsPZceMMq9/b7PBhVqXUSZWcSqkIThwX7so56FKyErmEMhhTjOVKtiLzeFZS1PAYrcvh1SOgjIT3NGfs2lGilficZiEq9fXH7wCApiLlmOlz1Srl+YPfVgROXzw8xNHuUjDsiPt+81CJc8GrL+/88E2Ly8u1O1FseBinjRiyaMmUPc52FyPFHpebyFgfR4I0av+0O+f1+jhBgpHAeTo8PuRyGaKHLnt8+q6tp2OGz70vpOGf+e0cz7lcbtArwiL7Dxvqi4wKcjLyc7s3FJu1auTuP/3RZx9bUPDcKk10Yr9o66Z3sx22vg/cvcwoBSAcwRLUcHRbvvGzT6fuWbtp6J8ewQK5oq+iRJDJFS0FW597/khTif2lLz70nPp2TdOw/g5BatBg7BMoEMoESDvWrN24/IO/heak/WNP8QOJqoxt6zxSLVIGzZo1qebkvvT0xuSUFKAUEMa/bCrRtbyWAI0OylJi8lBABHOo0UnDKFAKiAWNDCkweHmgGBAGgxpJMZDrM93MXuNxo5Q6Xa5LDqpVqpvOdfg1ttFGdxUInAAyFqTQMzlGKWAEFIBScHrprvNCnAFF6PA1pIIS0pU4SQmh3XmKhAiXpgUgxPTKYrysq9JTkj/pEovq9DP2C7wNb391YNZDT+VuW1ueMNYuUeiDDfamjCGLnnx+1oDcbZ/vcQxdvnjsua1fHGNYYqrSDplw311zegpZcCdQIDRqUcrGhEFDtd626YNSvn/npXPFXFLi0IGJsWcy9wUPm7fsiQd27M4aNjyx8EzFsKnjgxVscWZhoF7V0sCF9I33mvKAlXo9bo5QJJEqVVJWpn942dICU3VZrUun07IMLjl7st7hKsvObeVZDdeydt/hZyYvlSNeoMjReCbrVJDdbrVWlhRLGrxu/uih3XDHQ3PvuhcAPKXSI+c5JWsqqpItWnyHQc6CrVY3YNzjSx4OlABYiz7YcKjaNTtaCWFJcWe/2pDrJa01rc3m86c6ykEbunB8KoDDbqne8O3WMZNnFR34YtPm4pkPHEyVn2iRGUOViANnXb55wKSxBgnDW4rSzhQtvf923uMNCO3TNyrUVN+sCI3TS2x5dkw9ret3ZY2YttBbsmNjoTJi8O0SVmIMCqjAiO+w1tbU+Lh2Gj122Qt/rT1fWGkV5tw3D1CZ1hjmsZSv/MsHCY+tnB1R98YLj01e8sbClEgMrr+/vzbl7hWjB4dXp//hix1Fy+cmARBg5QajkmXBn23FGvUKCeP1eEOS5730yv1Za780NXnmL3oisLC09bRMqZIopaqm4hyWaqNi+zz/0qQw3maKGnrv7ElJmtZJTqb+/PH1h3Mjg7R6jc7S4Ll9+gQDC06rGSsMStl/fuQDAAxGPDEUGZSooINSPTMoGEVpkVKJwEdbWgWHgHgGBaoQ56U8Dx7+OmYkXVUnrDZ7/vlChmWge2aEAqWUYZjhQwZJpZKbLtqosRAvD0opCAQwgmg9KmuhhAKDITkcl7YQQkHKgpeDKgtE6K7ep+jscxBCAOHOiTdCKcYYY+ZHBs4vzWJE3SKCkCgRP9vIE1DSVpP70Ztr+i96etqowXRYvMlU+db3lYvvhtP7K5Jn3aVUKmUMCEiikMkoASlty8jMi4qdIwgCIaRngQIwGPFOl6ul8tw3a9YPn2R2GJMX33NXQqhaRqnTKyiJde/6/802J06fGa7v2LJiRcHLy+dn7t9RguLHjp9z1+Tp7jP6rEpXhVIXH+w6vG3bqXJ2SostIbiP88CH2/NlTzw/2McJqfe8cO7IUjvWTxip/mrlGjNnW7fyc31yStWhbTRqxp0zk9d8nDP1junJrcJhC5k3d6YhmOU5DmFcX2OKGDjxyUWjcrMOf/7xhuUvPZidlqYOmhoRoCQAmFfLJBgQRkjweWDAbalxCOdzZWzQ6ImjQjhgZbzz6ObV1XzQiMgIW/6uGs2QxfO1HU31546m949IJD4fz/vaTWZqs0kkDGc2uTjjyaMbDtYbZ03V6+LHMq1pfSZODzCFe7NOrl6fO2fRo+vf3jTjmT+FnFr/xtdfmmpH1J48mbBgoc0k9E8aGhbkrgvQDR04tKP40CffbMx3qP+yQHXm8O52rWf0nS/dNakfA8krXtb8cLqMH8B89+afbUMfeGFcOM+TRc8ue+eP734qfe7padFCS+EXf/9kaISMFwhmWF/D2SJLmFzKNJUcWbXaXnood8LgmYKgGDZg6KZdO2hcfGOR9a7fPF/77XfFLW1RiaF7Vz5RnvzozIWCl+oHxQRdKAz508rXUhMDAJpr3v3K6SbtLUf/8Mr7MHjWG797JlguUPwfzpQNCMABAAAQFoypCiQMRAZjAOCcMDCGjdZBdQAMMOKaJsEdhOMMDFy3MOiq+U5nc/PjYvomJyVERUb0/PSJsDucJrMlNCT4JhqYIgAYQYWJXmgiUgYBAE8gUIVCNIgCijUgpxfaXMBgQAA+HmINKNaA6dVynxA1N9RJtDoWIQSeytIGjUHHIATUU5x/Nq+wrLa6qrq2tqa6qryswuIWgkP0/mEsd1tzqxNpVdKeVV2Cq6K6SapSY0qc5qamdp9aKaUXL/IS+YkqQQAQspas+t+0wQt/uyg1nraXr1710bbdpwL6TV84Xnu2jp0yYagCg6uthVMGNh/+5h9n2qdPSeG9HSmTJwfKAGMWY4wxBoQYhE6mfXrKLGEclhH3PjVM27g7I9/eWn0irzwieYiRddfX1njVA556ZIaEQvjA20K4sv1ZhYmpU0dEoMMnzmRnHsivd3Q4bUD5+tp6XhVxz51jtn+9evu+oyavyhiIcg7vyqrDo+KkpU1shNFVXu4ZOXX+0088EKnyNLTamuvb5z31NC0/juJnL5owQMtybUzkjNTBChmLEMIMw7vbmlzSkSMGhsUlTxg3RO5pTM9qmb9kQQAmBCHMdzRYXHGJSWpq2fTlR7tPFFWWFtU0Wx2W5pqKsgvnTp2u6Rg2MvXhRx/iCg9mWyNeeHZxuKds1ddbmLAR904Z3VrdGDIgxttiDYqL1mvUChkWpPrRKSnjp0wKchWuXr1N0KoLMzaes8e8/PRdIRER0aH6mpKqvqNGGAWnySNJHpik06gUjFSfNPTBeSlHMg4owsJPb9pcpx6y7NE7fcUnS6zkjrmzvbV5dbWlB/ftPZCReSq/nFMoGy5kd0RNfvGhKZQQjBGVBI69LWnvd2mqsCQttmoiByf2DTUYDEajUa+V8TJjakpiS0NbwqAkBTDxY0basre+9cHn9arY+6amtLtt5cfTa5j41ER2e2bpk397e3q0I21zrtV8Zsvxhvn3LxkV6/nivXfWrNsXOXjqrFFxtMNRUlIaEDts3LBEKf7PZz51L6xTq5BGirqPMFIUrEYSFgWrEKEQqMHReqyV9gQiP398c7X1E4eOZk1Mve2SNZwIIbe741x+wfixoy/udt3QCAQYDJklQlour1MiQeicxA4PQEopOL3QZKP+S8EIXF6YM5CZmsRcYUaICoAYoebQ0td/uH/Z3Loy59w7Ej99a+ei3047c6h2/rxBry57xh06KD5E43E4QBGgEOoOHGpflb4+HvsAseXpaz/Ya3/qkSnA+bDK0D85VmnPfeGvB//y/ks6gKr936yvjvnjExNEV/+zqgZBv8BdSgkgTAkgfD19BrraCjL/umPKMP+vZBfCA2a75k3Rv1HBn7XjSAh0Ntx1nCy4TrO+108wLrkdun/7O7XX71LYa1fuciUQBOGmHiDhBRBIp/BWmjs1UsIAzwMCuKZLoQLFDLg3pu2T69Tn8+3jRwWczc71eJ1554rjRkzVyawyfczI24ZVHT0QPW2e4sKetAr8/GvPRMkwC3IACI8w+qxFFwqLwNehCB00aGAcSJS07dyKN94NU+GWsrxyh3aF+VhMyoIHpgwghIpRxb/3aBFKkf8G9neGKKUYY0JI11YPpHMJdaeDo4CuZPHOvSjA/6t7hqlzow7/xzFGAAgDIaT7+OWPCe3ahAFdOh6JCCG9dxnp3IaC+qvUtY/IZRuKdB9BCPk1ghDSa9sMSijFqMcCcPl+G5QCZoFS/1UAJZQiAIoxpoQCBtozMdp7+qz35iCdfVj/VSCMEaWEEP8EYLdFL9mjxP8AXsVOPSbt7sv62476zXSxt2Qw9ndn/f7KX2q3Gbubo7e1oWujD9z5Ku30dV0bg9xoPeDLTdRl887f19tTsD+pcje34wBgMOjV4I+RPBwEqRCLQSCUUFDLkSAApVDXftXpIIwR8DgwRA9ldX36aA7v2NIihMp1QvmprONnzSNfvlOrNoYEsQ3EV1lUhqubVboUrSbMXXcubf8ZIlE0nz8hC+4XadS53EqPpy6nMnF0OGXUUbPunBcpBSy7TyuDNqtDaYiEG2Oxz01N712GUJdn7+0CUJcP6zI1unZB/l/MZR6nd0v5C79a212jTXvVqleZXRXrrihGl9ftyuV0fRBdcupL69Dt4zv/6LzW7rOiK3dWUC/bXnZ2hPBlkU2v8175s9cwVPc4LbrKBOAlV40uNuMVzX6xQbpvASQmkvxknbjVOpgALIPG92N4gba7qYeDYDUGRKUM9vHAYHB6KYuh2UHJVXWTAsMmDxycnlETpIFsSdTv/vhi2e7TgyYHffberg4BY7U60hiRF6yPSBw/si//96NCSJBGqWLCIyMpK5dZA/ftyLowNGFUrMHp5TVKFhjW567ZsXGzUcV6bc1czJQVT87rjLTF21VEROSm0Imu+LEnXsYYw825IxQCEASaXU08HFVKkZSFFgcBChhTjgeEQC4BQQCOv+qKTAqAKF9XUeoQ+NqC4jYBYUvFlv1H4ybfzyCep8RafXzPAWVrc2N9dpZPKHO2Mdv+uXnmosenzIgFgLZAa2Yhlnsrss6G3XP/rD4GJbRYjENnvPz0YiUGMJ97c0NWk4+GSuj1HOcW6WxKoP6RlCsMt/Zsz3mJYFMQKAAC/8pdAGDEhhL5NesEQsjd0aFUKC55Vmx2h1QquUl1gifQYKVC52DmRVt0oK5hvmssVEEAFMvH3fnYkZ1LTVQ/YYjyk/fWERmsfvfzsCFT87ZvDBj58EMzjB99UnH3kgfCSzYUYPXSJQs0Wn8WI9NQbw5PTl22OOXCqUObvt//zDPzdm7YGtr3QRWDeAAWAaEUIf+wtMjPIQYEXD7avUqGUJDLUc9GaQgQAM8DD0B4ShmkknRGcpQCQcB0pYMT//gvBdR9EIARAz6RX7NO+Cd/YvtGnzqdExJqhJ7lE0AEodVkGT5kINxUA+j+mkpYYHFn8muP4+/pXgIFwBgwAQl71V4oQuBtr4u6/cFgXUtOGZ39xAtjkiJr8w8dymuqdWqXLV1gOfzdxPufmxAf4qAjJiNVaIihewpPH52QAEqQBiSnzk9OBXDWOlUj754/BPyZY7Kggf37yzHcGEtBb3KFoIAQuE3Cl2cE6p+3RKCRo9IivkKOv39c6qni/5IlPDJFGuQRPk4nuigkmMnsaZKGAl7XXzLBSL87xI8bLwl2CTuLYEEqq+SFDZkkdSRT2kCdFpLdTif1Y5AcpcRihRhSiNzqXGtfcZvdYTJbessBQjg8NEQul92MXqPSTFcd4Rh8rZ6gQEEQ4KkJbFww/ne27rj2ZyklgkBZlhHvv1+SzBO+PYUwazY7jqUfHODavNCmZD5eyO7dw0WOZHOO+eInyCYpyKZcombQ6SrSAdTTQSUaPDyJWZgAr3/OjZ7M2hpoSzspccLwcBwQgh8cxcjQjbLNg4jILz3uRCkN0GoCtJqf6gRvzHiCUojRo9ticVYF4QDIlaaqMQYMMDYWxxquLRKdXwJGu/NEur5lCyEMQDqT+i77ppmuTE2EEGZZuOy7aC7aAkTkZ4FQECgwQNf/4N3vwe88JA2TgdMkWNvBLkFaB/nNOt8d4xhsJsaB0glquu4giUhixoejgQlMQwl3AphF/bFSBpsP+9oxVNSR/oHY4QACoFFBmFqUCJFft05cnnfc88JN+GD463znUHZoJKm3Uh9/hffIJBAegGINP+qpL/uesYuS6XB3NiO+NAXxkqS7S96BxAUTPzsYAUGABWgk6LV7pGFS4Aiog9EQI8p2Ip0KRgbj4hLhPIG4KCh2M6NCyc5KGBOMjxUQaxttoiRDgNuS8JBobOHQxL5oc47QJxSP0IDbSne08ENjJaEyf0apaGyRX59OwC2awh9jwDEGsd1/TSEFAZ6AUgqcF6gUGAyUAA/AYAiUQV4Zb5NhqYs0eYhUgycYsc4FFhuKjWRMArUSNCAcm10wLok5VUICw5CRIipDwXKotZCoaCZMjnoWDouI/Ap14pbEv8b9qtIoLly45ZBiAIwEDoTuPeQFau6gBh1mKY1LlCQa4HQOMSTgOC3wPqhv4rdYaWIk0+6mTopa7VSmAq+3c+7Ky9MOF5UqkJQBt0/MTBMRdeJW5BdY4y5yo/QJABDQY6f5003UBDhCAUABIzBX0/DBkvuS0OrtfL845vZw8DTy8YPZWBk0lgl2jnl4jjRRC6YyoiLM3P4YAIATWBaIADF9mZnjmTOn+f1eiAvCCICK95PILe82qdglErmlabdRqw8MgUjT1SnieWBZ4Dna5IAQHWIAeB4QAywGwgMjAQQgkM7hKQkGAGAweDlgGSAEJCzY7dRGICwAsaJIiIg6ISJya4UX/xI3yzaiIiK/DOIEnMivQCHolUXian2kf0UkxP6ViBhPiIiIiIiIiPGEiIiIiIioEyIiIiIiok6IiIiIiIg6ISIiIiIi6oSIiIiIiKgTIiIiIiKiToiIiIiI3Cr8H2tTV9jUKBHsAAAAAElFTkSuQmCC");

},
564013(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
234113(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438347-4e8bfb4c542c09d6ddaf248a52ca4b65.png");

},
316018(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478301-310b757e96510948fc6542c7a8c6eeeb.png");

},
320606(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798654-7c0b9b8492f3a67d5a6bdd5ff3486419.png");

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