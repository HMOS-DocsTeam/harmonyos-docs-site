"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["891797"], {
426889(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_basicfun_api_basic_services_api_basic_services_arkts_basic_services_others_js_apis_settings_js_apis_settings_md_0f8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-basicfun-api-basic-services-api-basic-services-arkts-basic-services-others-js-apis-settings-js-apis-settings-md-0f8.json
var site_docs_ref_system_basicfun_api_basic_services_api_basic_services_arkts_basic_services_others_js_apis_settings_js_apis_settings_md_0f8_namespaceObject = JSON.parse('{"id":"system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-settings/js-apis-settings","title":"@ohos.settings (设置数据项名称)","description":"本模块提供访问设置数据项的能力。","source":"@site/docs-ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-settings/js-apis-settings.md","sourceDirName":"system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-settings","slug":"/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-settings/js-apis-settings","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-settings/js-apis-settings","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"@ohos.settings (设置数据项名称)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-settings","kit":"系统","last_updated":"2026-04-22","slug":"js-apis-settings"},"sidebar":"ref","previous":{"title":"@ohos.customization.customConfig (定制配置)","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-customization-customconfig/js-apis-customization-customconfig"},"next":{"title":"@ohos.wallpaper (壁纸)","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-wallpaper/js-apis-wallpaper"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-settings/js-apis-settings.md


const frontMatter = {
	title: '@ohos.settings (设置数据项名称)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-settings',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'js-apis-settings'
};
const contentTitle = '@ohos.settings (设置数据项名称)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "domainName",
  "id": "domainname",
  "level": 2
}, {
  "value": "常量",
  "id": "常量",
  "level": 3
}, {
  "value": "date",
  "id": "date",
  "level": 2
}, {
  "value": "常量",
  "id": "常量-1",
  "level": 3
}, {
  "value": "display",
  "id": "display",
  "level": 2
}, {
  "value": "常量",
  "id": "常量-2",
  "level": 3
}, {
  "value": "general",
  "id": "general",
  "level": 2
}, {
  "value": "常量",
  "id": "常量-3",
  "level": 3
}, {
  "value": "input",
  "id": "input",
  "level": 2
}, {
  "value": "常量",
  "id": "常量-4",
  "level": 3
}, {
  "value": "network",
  "id": "network",
  "level": 2
}, {
  "value": "常量",
  "id": "常量-5",
  "level": 3
}, {
  "value": "phone",
  "id": "phone",
  "level": 2
}, {
  "value": "常量",
  "id": "常量-6",
  "level": 3
}, {
  "value": "sound",
  "id": "sound",
  "level": 2
}, {
  "value": "常量",
  "id": "常量-7",
  "level": 3
}, {
  "value": "TTS",
  "id": "tts",
  "level": 2
}, {
  "value": "常量",
  "id": "常量-8",
  "level": 3
}, {
  "value": "wireless",
  "id": "wireless",
  "level": 2
}, {
  "value": "常量",
  "id": "常量-9",
  "level": 3
}, {
  "value": "settings.setValue10+",
  "id": "settingssetvalue10",
  "level": 2
}, {
  "value": "settings.setValue10+",
  "id": "settingssetvalue10-1",
  "level": 2
}, {
  "value": "settings.setValue11+",
  "id": "settingssetvalue11",
  "level": 2
}, {
  "value": "settings.getValue10+",
  "id": "settingsgetvalue10",
  "level": 2
}, {
  "value": "settings.getValue10+",
  "id": "settingsgetvalue10-1",
  "level": 2
}, {
  "value": "settings.getValue11+",
  "id": "settingsgetvalue11",
  "level": 2
}, {
  "value": "settings.getValueSync10+",
  "id": "settingsgetvaluesync10",
  "level": 2
}, {
  "value": "settings.getValueSync11+",
  "id": "settingsgetvaluesync11",
  "level": 2
}, {
  "value": "settings.setValueSync10+",
  "id": "settingssetvaluesync10",
  "level": 2
}, {
  "value": "settings.setValueSync11+",
  "id": "settingssetvaluesync11",
  "level": 2
}, {
  "value": "settings.registerKeyObserver11+",
  "id": "settingsregisterkeyobserver11",
  "level": 2
}, {
  "value": "settings.unregisterKeyObserver11+",
  "id": "settingsunregisterkeyobserver11",
  "level": 2
}, {
  "value": "settings.openNetworkManagerSettings18+",
  "id": "settingsopennetworkmanagersettings18",
  "level": 2
}, {
  "value": "settings.enableAirplaneMode",
  "id": "settingsenableairplanemode",
  "level": 2
}, {
  "value": "settings.enableAirplaneMode",
  "id": "settingsenableairplanemode-1",
  "level": 2
}, {
  "value": "settings.canShowFloating",
  "id": "settingscanshowfloating",
  "level": 2
}, {
  "value": "settings.canShowFloating",
  "id": "settingscanshowfloating-1",
  "level": 2
}, {
  "value": "settings.getUriSync8+",
  "id": "settingsgeturisync8",
  "level": 2
}, {
  "value": "settings.getURI(deprecated)",
  "id": "settingsgeturideprecated",
  "level": 2
}, {
  "value": "settings.getURI(deprecated)",
  "id": "settingsgeturideprecated-1",
  "level": 2
}, {
  "value": "settings.getValue(deprecated)",
  "id": "settingsgetvaluedeprecated",
  "level": 2
}, {
  "value": "settings.getValue(deprecated)",
  "id": "settingsgetvaluedeprecated-1",
  "level": 2
}, {
  "value": "settings.getValueSync(deprecated)",
  "id": "settingsgetvaluesyncdeprecated",
  "level": 2
}, {
  "value": "settings.setValueSync(deprecated)",
  "id": "settingssetvaluesyncdeprecated",
  "level": 2
}, {
  "value": "settings.openInputMethodSettings23+",
  "id": "settingsopeninputmethodsettings23",
  "level": 2
}, {
  "value": "settings.openInputMethodDetail23+",
  "id": "settingsopeninputmethoddetail23",
  "level": 2
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
    object: "object",
    p: "p",
    pre: "pre",
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
        id: "ohossettings-设置数据项名称",
        children: "@ohos.settings (设置数据项名称)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块提供访问设置数据项的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(633314)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果访问的数据项没有获取到值，表示当前系统应用没有将该数据项的值添加到数据库。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { settings } from '@kit.BasicServicesKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "domainname",
      children: "domainName"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供查询的域名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "常量",
      children: "常量"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Applications.Settings.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEVICE_SHARED11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备属性共享域，所有设置项不区分多用户。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USER_PROPERTY11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为用户属性域，该域下所有配置区分多用户。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "date",
      children: "date"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供设置时间和日期格式的数据项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "常量-1",
      children: "常量"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Applications.Settings.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATE_FORMAT(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日期格式。  日期格式包括mm/dd/yyyy、dd/mm/yyyy和yyyy/mm/dd，其中mm、dd和yyyy分别代表月份、日期和年份（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TIME_FORMAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "时间以12小时格式或24小时格式显示。  - 值为 \"12\"表示12小时格式。  - 值为\"24\"表示24小时格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTO_GAIN_TIME(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否自动从网络获取日期、时间和时区。  - 值为true，表示自动从网络获取信息。  - 值为false，表示不自动获取信息（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTO_GAIN_TIME_ZONE(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否自动从NITZ获取时区。  - 值为true，表示自动获取。  - 值为false，表示不自动获取（该常量不支持使用）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "display",
      children: "display"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供设置显示效果的数据项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "常量-2",
      children: "常量"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Applications.Settings.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FONT_SCALE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "（domainName为USER_PROPERTY）字体的比例因子，值为固定浮点数。标准档位取值为1，其他档位包括0.85、1.15、1.3、1.45。关怀模式下，额外提供1.75、2、3.2档位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCREEN_BRIGHTNESS_STATUS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "屏幕亮度。取值范围:0到255。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTO_SCREEN_BRIGHTNESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否启用屏幕亮度自动调整。  - 值为AUTO_SCREEN_BRIGHTNESS_MODE，表示启用自动调整。  - 值为MANUAL_SCREEN_BRIGHTNESS_MODE，表示不启用自动调整。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTO_SCREEN_BRIGHTNESS_MODE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用屏幕亮度自动调整时AUTO_SCREEN_BRIGHTNESS的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MANUAL_SCREEN_BRIGHTNESS_MODE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用屏幕亮度手动调整时的AUTO_SCREEN_BRIGHTNESS值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCREEN_OFF_TIMEOUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备在一段时间不活动后进入睡眠状态的等待时间（单位: ms）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEFAULT_SCREEN_ROTATION(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启用屏幕的自动旋转时，此属性无效。不启用自动旋转时，以下值可用:  - 值为0，表示屏幕旋转0度。  - 值为1，表示屏幕旋转90度。  - 值为2，表示屏幕旋转180度。  - 值为3，表示屏幕旋转270度（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ANIMATOR_DURATION_SCALE(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动画持续时间的比例因子，影响所有此类动画的开始延迟和持续时间。  值为0，表示动画将立即结束。默认值为1（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSITION_ANIMATION_SCALE(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "过渡动画的比例因子。  值为0，表示禁用过渡动画（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WINDOW_ANIMATION_SCALE(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "普通窗口动画的比例因子。  值为0，表示禁用窗口动画（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DISPLAY_INVERSION_STATUS(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否启用显示颜色反转。  - 值为1，表示启用显示颜色反转。  - 值为0，表示不启用显示颜色反转（该常量不支持使用）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "general",
      children: "general"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供设置设备常规信息的数据项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "常量-3",
      children: "常量"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Applications.Settings.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SETUP_WIZARD_FINISHED(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否已运行启动向导。  - 值为0，表示启动向导尚未运行。  - 值为非0，表示启动向导已运行（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "END_BUTTON_ACTION(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当用户不在呼叫中时，由用户按下呼叫结束按钮后会发生的情况。  - 值为0，表示没有任何反应。  - 值为1，表示显示主屏幕。  - 值为2，表示设备进入睡眠状态，屏幕锁定。  - 值为3，表示显示主屏幕。如果用户已在主屏幕上，设备将进入睡眠状态（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCELEROMETER_ROTATION_STATUS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否启用加速计更改屏幕方向（是否启用自动旋转）。  - 值为1，表示启用加速计。  - 值为0，表示不启用加速计。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEVICE_PROVISION_STATUS(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否预配设备。  在具有单个系统用户的多用户设备上，当值为true时，屏幕可能会被锁定。此外，其他功能无法在系统用户上启动，除非被标记在屏幕锁定上显示（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HDC_STATUS(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否启用USB设备上的HDC（硬盘控制器）。  - 值为true，表示启用HDC。  - 值为false，表示不启用HDC（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BOOT_COUNTING(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备开机后的启动操作数（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CONTACT_METADATA_SYNC_STATUS(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否启用联系人元数据同步。  - 值为true，表示启用同步。  - 值为false，表示不启用同步（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEVICE_NAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USB_STORAGE_STATUS(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否启用USB大容量存储。  - 值为true，表示启用USB大容量存储。  - 值为false，表示不启用USB大容量存储（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEBUGGER_WAITING(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备在启动应用程序进行调试时是否等待调试器进行调试。  - 值为1，表示设备等待调试器。  - 值为0，表示系统不会等待调试器，应用程序正常运行（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEBUG_APP_PACKAGE(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要调试的应用程序的bundle name（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCESSIBILITY_STATUS(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否启用辅助功能。  - 值为1，表示启用辅助功能。  - 值为0，表示不启用辅助功能（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTIVATED_ACCESSIBILITY_SERVICES(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已激活的辅助功能的列表（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GEOLOCATION_ORIGINS_ALLOWED(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "浏览器可以使用的默认地理位置。多个地理位置由空格分隔（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP_USE_HINTS(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控制应用程序首次启动时是否跳过所有介绍性提示。适用于临时用户或熟悉环境的用户。  - 值为1，表示应用程序将在首次启动时跳过所有介绍性提示。  - 值为0，表示应用程序不会在首次启动时跳过所有介绍性提示（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOUCH_EXPLORATION_STATUS(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否启用触摸浏览。  - 值为1，表示启用触摸浏览。  - 值为0，表示不启用触摸浏览（该常量不支持使用）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "input",
      children: "input"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供设置有关输入法信息的数据项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "常量-4",
      children: "常量"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Applications.Settings.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEFAULT_INPUT_METHOD(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认输入法及其ID（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTIVATED_INPUT_METHOD_SUB_MODE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认输入法键盘类型及其ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTIVATED_INPUT_METHODS(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已激活的输入法的列表。  该列表是一个字符串，由已激活的输入法ID和输入法键盘类型组成。  输入法ID后添加冒号':'连接，输入法的键盘类型后添加分号';'连接。  用ima代表输入法ID，keyboardType代表键盘类型，示例格式是ima0:keyboardType0;keyboardType1;ima1:ima2:keyboardTypes0（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SELECTOR_VISIBILITY_FOR_INPUT_METHOD(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入法选择器是否可见。  - 值为1，表示输入法选择器可见。  - 值为0，表示输入法选择器不可见（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTO_CAPS_TEXT_INPUT(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否为文本编辑器启用自动大写。  - 值为0，表示不启用自动大写。  - 值为1，表示启用自动大写（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTO_PUNCTUATE_TEXT_INPUT(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否为文本编辑器启用自动标点符号。自动标点符号使文本编辑器能够将两个空格转换为句点'.'和空格。  - 值为0，表示不启用自动标点符号。  - 值为1，表示启用自动标点符号（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTO_REPLACE_TEXT_INPUT(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否为文本编辑器启用自动更正。自动更正使文本编辑器能够更正拼写错误。  - 值为0，表示不启用自动更正。  - 值为1，表示启用自动更正（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOW_PASSWORD_TEXT_INPUT(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否在文本编辑器中启用密码显示。密码显示使文本编辑器能够在用户键入密码字符时显示密码字符。  - 值为0，表示不启用密码显示。  - 值为1，表示启用密码显示（该常量不支持使用）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "network",
      children: "network"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供设置网络信息的数据项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "常量-5",
      children: "常量"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Applications.Settings.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATA_ROAMING_STATUS(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否启用数据漫游。  - 值为true，表示启用数据漫游。  - 值为false，表示不启用数据漫游（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP_PROXY_CFG(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "全局HTTP代理的主机名和端口号。主机名和端口号由冒号':'分隔（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETWORK_PREFERENCE_USAGE(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要使用网络的用户首选项（该常量不支持使用）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "phone",
      children: "phone"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供设置来电和去电接听方式的数据项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "常量-6",
      children: "常量"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Applications.Settings.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RTT_CALLING_STATUS(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否启用实时文本（RTT）呼叫。启用表示来电和去电在设备以及运营商支持时作为RTT呼叫应答。  - 值为1，表示启用RTT呼叫。  - 值为0，表示不启用RTT呼叫（该常量不支持使用）。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sound",
      children: "sound"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供设置声音效果的数据项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "常量-7",
      children: "常量"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Applications.Settings.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VIBRATE_WHILE_RINGING(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备在来电响铃时是否振动。此属性由电话和设置应用程序使用。  该值仅影响设备因来电而响铃的情况，不影响任何其他应用程序或场景（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEFAULT_ALARM_ALERT(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统默认告警的存储区域（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DTMF_TONE_TYPE_WHILE_DIALING(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拨号时播放的双音多频（DTMF）音的类型。  - 值为0，表示常规的短音效。  - 值为1，表示长音效（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DTMF_TONE_WHILE_DIALING(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拨号时是否播放DTMF音。  - 值为1，表示播放DTMF音。  - 值为0，表示不播放（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AFFECTED_MODE_RINGER_STREAMS(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频流受振铃模式和请勿打扰（DND）模式更改的影响。要求特定的音频流受到振铃模式和DND模式变化的影响，将对应比特位设置为1（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AFFECTED_MUTE_STREAMS(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "受静音模式影响的音频流。若需在静音模式下保持特定音频流静音，将相应位设为1（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEFAULT_NOTIFICATION_SOUND(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统默认通知音的存储区域（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEFAULT_RINGTONE(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统默认铃声的存储区域（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOUND_EFFECTS_STATUS(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声音功能是否可用。  - 值为0，表示不可用。  - 值为1，表示可用（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VIBRATE_STATUS(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备是否为事件振动。该参数在系统内部使用。  - 值为1，表示设备会因事件而振动。  - 值为0，表示设备不因事件振动（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HAPTIC_FEEDBACK_STATUS(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备是否启用触觉反馈。  - 值为true，表示启用触觉反馈。  - 值为false，表示不启用触觉反馈（该常量不支持使用）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tts",
      children: "TTS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供设置文本到语音(TTS)转换信息的数据项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "常量-8",
      children: "常量"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Applications.Settings.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEFAULT_TTS_PITCH(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本转语音(TTS)引擎的默认音高。  其中100=1x，该值设置为200，表示频率是正常声音频率的两倍（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEFAULT_TTS_RATE(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TTS引擎的默认语速。  其中100=1x（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEFAULT_TTS_SYNTH(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认TTS引擎（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ENABLED_TTS_PLUGINS(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于TTS的已激活插件包列表，多个插件包用空格分隔（该常量不支持使用）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wireless",
      children: "wireless"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供设置无线网络信息的数据项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "常量-9",
      children: "常量"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Applications.Settings.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLUETOOTH_DISCOVER_ABILITY_STATUS(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备是否可以被其他设备通过蓝牙发现或连接。  - 值为0，表示设备不可以被连接或发现。  - 值为1，表示设备可以被连接但不可以被发现。  - 值为2，表示设备可以被连接和发现（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLUETOOTH_DISCOVER_TIMEOUT(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过蓝牙发现设备的持续时间（以秒为单位）。  这段时间后，设备不可以被蓝牙搜寻到（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AIRPLANE_MODE_RADIOS(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启用飞行模式时要禁用的无线电信号列表。  多个无线电信号用逗号(,)分隔。  取值包括以下常量：BLUETOOTH_RADIO、 CELL_RADIO、 NFC_RADIO、 WIFI_RADIO（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLUETOOTH_RADIO(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "常量，作为AIRPLANE_MODE_RADIOS的取值时表示蓝牙在飞行模式下禁用（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CELL_RADIO(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "常量，作为AIRPLANE_MODE_RADIOS的取值时表示蜂窝无线电在飞行模式下禁用（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFC_RADIO(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "常量，作为AIRPLANE_MODE_RADIOS的取值时表示NFC在飞行模式下禁用（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WIFI_RADIO(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "常量，作为AIRPLANE_MODE_RADIOS的取值时表示Wi-Fi在飞行模式下禁用（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLUETOOTH_STATUS(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蓝牙是否可用。  - 值为true，表示蓝牙可用。  - 值为false，表示蓝牙不可用（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OWNER_LOCKDOWN_WIFI_CFG(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否应锁定由设备所有者的应用程序创建的Wi-Fi配置。  - 值为true，表示Wi-Fi配置应该被锁定。  - 值为false，表示不应该被锁定（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WIFI_DHCP_MAX_RETRY_COUNT(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "尝试从DHCP服务器获取IP地址的最大次数（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WIFI_TO_MOBILE_DATA_AWAKE_TIMEOUT(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wi-Fi连接断开后等待移动数据连接时保持唤醒锁的最长时间（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WIFI_STATUS(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wi-Fi是否可用。  - 值为true，表示Wi-Fi可用。  - 值为false，表示Wi-Fi不可用（该常量不支持使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WIFI_WATCHDOG_STATUS(deprecated21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wi-Fi的WatchDog是否可用。  - 值为true，表示可用。  - 值为false，表示不可用（该常量不支持使用）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settingssetvalue10",
      children: "settings.setValue10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setValue(context: Context, name: string, value: string, callback: AsyncCallback<boolean>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将数据项名称及数据项的值保存到DEVICE_SHARED域数据库中，使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "：此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.Settings.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "： ohos.permission.MANAGE_SETTINGS，仅系统应用可用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用上下文（仅支持UIAbilityContext和ExtensionContext）。  Stage模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据项的名称。数据项名称分为以下两种：  - 上述任意一个数据库中已存在的数据项。  - 开发者自行添加的数据项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据项值。取值范围随业务变动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。返回true表示操作成功，返回false表示操作失败。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { settings } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n\n// 更新数据项亮度的值(该数据项在数据库中已存在，故setValue方法将更新该数据项的值)。\n// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。\nconst context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\nsettings.setValue(context, settings.display.SCREEN_BRIGHTNESS_STATUS, '100', (status) => {\n  console.info('Callback return whether value is set.');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settingssetvalue10-1",
      children: "settings.setValue10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setValue(context: Context, name: string, value: string): Promise<boolean>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将数据项名称及数据项的值保存到DEVICE_SHARED域数据库中。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "：此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.Settings.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "： ohos.permission.MANAGE_SETTINGS，该权限仅系统应用可用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用上下文（仅支持UIAbilityContext和ExtensionContext）。  Stage模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据项的名称。数据项名称分为以下两种：  - 上述任意一个数据库中已存在的数据项。  - 开发者自行添加的数据项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据项值。取值范围随业务变动。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象。返回true表示操作成功，返回false表示操作失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { settings } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n\n// 更新数据项亮度的值(该数据项在数据库中已存在，故setValue方法将更新该数据项的值)。\n// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。\nconst context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\nsettings.setValue(context, settings.display.SCREEN_BRIGHTNESS_STATUS, '100').then((status) => {\n  console.info('Callback return whether value is set.');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settingssetvalue11",
      children: "settings.setValue11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setValue(context: Context, name: string, value: string, domainName: string): Promise<boolean>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将数据项名称及数据项的值保存到数据库中。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "：此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.Settings.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "写入DEVICE_SHARED、USER_PROPERTY域需要权限ohos.permission.MANAGE_SETTINGS，该权限仅系统应用可用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "写入USER_SECURITY域需要权限ohos.permission.MANAGE_SECURE_SETTINGS，该权限仅系统应用可用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用上下文（仅支持UIAbilityContext和ExtensionContext）。  Stage模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据项的名称。数据项名称分为以下两种：  - 上述任意一个数据库中已存在的数据项。  - 开发者自行添加的数据项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据项值。取值范围随业务变动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "domainName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定要设置的域名。  - domainName为domainName.DEVICE_SHARED,  表示设备属性共享域。  - domainName为domainName.USER_PROPERTY,  表示用户属性域。  - domainName为domainName.USER_SECURITY,  表示用户安全属性域(仅对系统应用开放)。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象。返回true表示操作成功，返回false表示操作失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { settings } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n\n// 更新数据项亮度的值(该数据项在数据库中已存在，故setValue方法将更新该数据项的值)。\n// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。\nconst context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\nsettings.setValue(context, settings.display.SCREEN_BRIGHTNESS_STATUS, '100', settings.domainName.DEVICE_SHARED).then((status) => {\n  console.info(`callback:return whether value is set.`)\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settingsgetvalue10",
      children: "settings.getValue10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getValue(context: Context, name: string, callback: AsyncCallback<string>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取数据库中DEVICE_SHARD域指定数据项的值。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "：此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.Settings.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用上下文（仅支持UIAbilityContext和ExtensionContext）。  Stage模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据项的名称。数据项名称分为以下两种：  - 上述任意一个数据库中已存在的数据项。  - 开发者自行添加的数据项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用callback方式获取数据项的值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { settings } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n\n// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。\nconst context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\nsettings.getValue(context, settings.display.SCREEN_BRIGHTNESS_STATUS, (err, value) => {\n  if (err) {\n    console.error(`Failed to get the setting. ${err.message} `);\n    return;\n  }\n  console.info(`callback:value -> ${value}`)\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settingsgetvalue10-1",
      children: "settings.getValue10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getValue(context: Context, name: string): Promise<string>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取数据库中DEVICE_SHARD域指定数据项的值。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "：此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.Settings.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用上下文（仅支持UIAbilityContext和ExtensionContext）。  Stage模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据项的名称。数据项名称分为以下两种：  - 上述任意一个数据库中已存在的数据项。  - 开发者自行添加的数据项。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象。返回获得的数据项的值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { settings } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n\n// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。\nconst context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\nsettings.getValue(context, settings.display.SCREEN_BRIGHTNESS_STATUS).then((value) => {\n  console.info(`promise:value -> ${value}`)\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settingsgetvalue11",
      children: "settings.getValue11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getValue(context: Context, name: string, domainName: string): Promise<string>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取数据库中指定数据项的值。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "：此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.Settings.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "读取USER_SECURITY域需要权限ohos.permission.MANAGE_SECURE_SETTINGS，该权限仅系统应用可用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用上下文（仅支持UIAbilityContext和ExtensionContext）。  Stage模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据项的名称。数据项名称分为以下两种：  - 上述任意一个数据库中已存在的数据项。  - 开发者自行添加的数据项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "domainName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定要设置的域名。  - domainName为domainName.DEVICE_SHARED,  设备属性共享域。  - domainName为domainName.USER_PROPERTY,  表示为用户属性域。  - domainName为domainName.USER_SECURITY,  表示为用户安全属性域(仅对系统应用开放)。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象。返回获得的数据项的值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { settings } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n\n// 更新数据项亮度的值(该数据项在数据库中已存在，故getValue方法将更新该数据项的值)。\n// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。\nconst context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\nsettings.getValue(context, settings.display.SCREEN_BRIGHTNESS_STATUS, settings.domainName.DEVICE_SHARED).then((value) => {\n  console.info(`Promise:value -> ${value}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settingsgetvaluesync10",
      children: "settings.getValueSync10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getValueSync(context: Context, name: string, defValue: string): string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取数据库中DEVICE_SHARED域指定数据项的值。此方法相较getValue为同步方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "：此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.Settings.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用上下文（仅支持UIAbilityContext和ExtensionContext）。  Stage模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据项的名称。数据项名称分为以下两种：  - 上述任意一个数据库中已存在的数据项。  - 开发者自行添加的数据项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "defValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认值。由开发者设置，在数据库中查询不到该数据时，返回默认值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回数据项的值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { settings } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n\n// 获取数据项亮度的值(该数据项在数据库中已存在)。\n// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。\nconst context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\nlet value = settings.getValueSync(context, settings.display.SCREEN_BRIGHTNESS_STATUS, '10');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settingsgetvaluesync11",
      children: "settings.getValueSync11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getValueSync(context: Context, name: string, defValue: string, domainName: string): string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取数据项的值。此方法相较getValue为同步方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "：此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.Settings.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "读取USER_SECURITY域需要权限ohos.permission.MANAGE_SECURE_SETTINGS，该权限仅系统应用可用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用上下文（仅支持UIAbilityContext和ExtensionContext）。  Stage模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据项的名称。数据项名称分为以下两种：  - 上述任意一个数据库中已存在的数据项。  - 开发者自行添加的数据项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "defValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认值。由开发者设置，在数据库中查询不到该数据时，返回默认值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "domainName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定要设置的域名。  - domainName为domainName.DEVICE_SHARED,  设备属性共享域。  - domainName为domainName.USER_PROPERTY,  表示为用户属性域。  - domainName为domainName.USER_SECURITY,  表示为用户安全属性域(仅对系统应用开放)。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回数据项的值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { settings } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n\n// 更新数据项亮度的值(该数据项在数据库中已存在)。\n// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。\nconst context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\nlet value = settings.getValueSync(context, settings.display.SCREEN_BRIGHTNESS_STATUS, '100',  settings.domainName.DEVICE_SHARED);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settingssetvaluesync10",
      children: "settings.setValueSync10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setValueSync(context: Context, name: string, value: string): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将数据项名称及数据项的值保存到DEVICE_SHARED域数据库中。此方法相较setValue为同步方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果数据库中已经存在该数据项，setValueSync方法将更新该数据项的值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果数据库中不存在该数据项，setValueSync方法将向数据库中插入该数据项。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "：此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.Settings.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "： ohos.permission.MANAGE_SETTINGS，该权限仅系统应用可用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用上下文（仅支持UIAbilityContext和ExtensionContext）。  Stage模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据项的名称。数据项名称分为以下两种：  - 上述任意一个数据库中已存在的数据项。  - 开发者自行添加的数据项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据项的具体数值。取值范围随业务变动。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回设置数据项的值是否成功的结果。true表示设置成功，false表示设置失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { settings } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n\n// 更新数据项亮度的值(该数据项在数据库中已存在，故setValueSync方法将更新该数据项的值)。\n// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。\nconst context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\nlet ret = settings.setValueSync(context, settings.display.SCREEN_BRIGHTNESS_STATUS, '100');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settingssetvaluesync11",
      children: "settings.setValueSync11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setValueSync(context: Context, name: string, value: string, domainName: string): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置数据项的值。此方法相较setValue为同步方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果数据库中已经存在该数据项，则setValueSync方法将更新该数据项的值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果数据库中尚未存在该数据项，则setValueSync方法将向数据库中插入该数据项。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "：此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.Settings.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "写入DEVICE_SHARED、USER_PROPERTY域需要权限ohos.permission.MANAGE_SETTINGS，该权限仅系统应用可用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "写入USER_SECURITY域需要权限ohos.permission.MANAGE_SECURE_SETTINGS，该权限仅系统应用可用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用上下文（仅支持UIAbilityContext和ExtensionContext）。  Stage模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据项的名称。数据项名称分为以下两种：  - 上述任意一个数据库中已存在的数据项。  - 开发者自行添加的数据项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据项值。取值范围随业务变动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "domainName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定要设置的域名。  - domainName为domainName.DEVICE_SHARED,  设备属性共享域。  - domainName为domainName.USER_PROPERTY,  表示为用户属性域。  - domainName为domainName.USER_SECURITY,  表示为用户安全属性域(仅对系统应用开放)。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回设置数据项的值是否成功的结果。true表示设置成功，false表示设置失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { settings } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n\n// 更新数据项亮度的值(该数据项在数据库中已存在，故setValueSync方法将更新该数据项的值)。\n// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。\nconst context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\nlet ret = settings.setValueSync(context, settings.display.SCREEN_BRIGHTNESS_STATUS, '100', settings.domainName.DEVICE_SHARED);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settingsregisterkeyobserver11",
      children: "settings.registerKeyObserver11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "registerKeyObserver(context: Context, name: string, domainName: string, observer:AsyncCallback<void>): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于在指定上下文中注册一个观察者，以便在指定域名中观察指定的数据项。当该数据项的值发生变化时，将调用注册的回调函数。成功注册返回true，否则返回false。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "：此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.Settings.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用上下文（仅支持UIAbilityContext和ExtensionContext）。  Stage模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据项的名称。数据项名称分为以下两种：  - 上述任意一个数据库中已存在的数据项。  - 开发者自行添加的数据项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "domainName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定要设置的域名。  - domainName为domainName.DEVICE_SHARED,  设备属性共享域。  - domainName为domainName.USER_PROPERTY,  表示为用户属性域。  - domainName为domainName.USER_SECURITY,  表示为用户安全属性域(仅对系统应用开放)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "observer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用callback方式获取数据项的值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回注册观察者是否成功的结果。true表示注册成功，false表示注册失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { settings } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n\n// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。\nconst context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\nsettings.registerKeyObserver(context, settings.display.SCREEN_BRIGHTNESS_STATUS, settings.domainName.DEVICE_SHARED, () => {\n  let value:string = settings.getValueSync(context, settings.display.SCREEN_BRIGHTNESS_STATUS, '10');\n  console.info(`Promise:value -> ${value}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settingsunregisterkeyobserver11",
      children: "settings.unregisterKeyObserver11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "unregisterKeyObserver(context: Context, name: string, domainName: string): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同步方法，注销指定域名下对指定数据项名称的观察者。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "：此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.Settings.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用上下文（仅支持UIAbilityContext和ExtensionContext）。  Stage模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据项的名称。数据项名称分为以下两种：  - 上述任意一个数据库中已存在的数据项。  - 开发者自行添加的数据项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "domainName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定要设置的域名。  - domainName为domainName.DEVICE_SHARED,  设备属性共享域。  - domainName为domainName.USER_PROPERTY,  表示为用户属性域。  - domainName为domainName.USER_SECURITY,  表示为用户安全属性域(仅对系统应用开放)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回注销指定域名下指定键的监视器是否成功。true表示注销成功，false表示注销失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { settings } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n\n// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。\nconst context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\nlet ret = settings.unregisterKeyObserver(context, settings.display.SCREEN_BRIGHTNESS_STATUS,  settings.domainName.DEVICE_SHARED);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settingsopennetworkmanagersettings18",
      children: "settings.openNetworkManagerSettings18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "openNetworkManagerSettings(context: Context): Promise<boolean>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打开WLAN设置弹窗。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.Settings.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异"
        })
      }), "：该接口在Phone、PC/2in1、Tablet设备中可正常调用，在其他设备调用不生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用上下文（仅支持UIAbilityContext和ExtensionContext）。  Stage模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象。返回true表示操作成功，返回false表示操作失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts-errcode/errorcode-settings/errorcode-settings",
        children: "设置数据项错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Original service error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { settings } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n\n// 跳转网络管理器设置页面。\n// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。\nconst context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\nsettings.openNetworkManagerSettings(context).then((status) => {\n  console.info(`callback:return whether settings is open.`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settingsenableairplanemode",
      children: "settings.enableAirplaneMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enableAirplaneMode(enable: boolean, callback: AsyncCallback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启用或禁用飞行模式。使用callback异步回调（暂不支持）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.Settings.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否开启飞行模式。true表示开启，false表示禁用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let isEnabled :boolean = true;\nsettings.enableAirplaneMode(isEnabled, (err:Error) => {\n    if (err) {\n        console.error('Failed to enable AirplaneMode.');\n        return;\n    }\n    console.info('Return true if enable.');\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settingsenableairplanemode-1",
      children: "settings.enableAirplaneMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enableAirplaneMode(enable: boolean): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启用或禁用飞行模式。使用Promise异步回调（暂不支持）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.Settings.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否开启飞行模式。true表示开启，false表示禁用。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无返回结果的Promise对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let isEnabled :boolean = true;\nsettings.enableAirplaneMode(isEnabled).then(() => {\n  console.info('Succeeded in enabling AirplaneMode.');\n}).catch((err:Error) => {\n  console.error(`Failed to enable AirplaneMode. Cause: ${err}`);\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settingscanshowfloating",
      children: "settings.canShowFloating"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canShowFloating(callback: AsyncCallback<boolean>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查应用是否能够以悬浮窗形式显示。使用callback异步回调（暂不支持）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.Settings.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。  返回true，表示应用能够以悬浮窗形式显示。返回false，表示不能。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "settings.canShowFloating((err:Error, status: boolean) => {\n  if (err) {\n    console.error(`Failed to Checks whether a specified application can show as float window ${err.message} `);\n    return;\n  }\n  console.info('Checks whether a specified application can show as float window.');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settingscanshowfloating-1",
      children: "settings.canShowFloating"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canShowFloating(): Promise<boolean>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查应用是否能够以悬浮窗形式显示。使用Promise异步回调（暂不支持）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.Settings.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象。  返回true，表示应用能够以悬浮窗形式显示。返回false，表示不能。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "settings.canShowFloating().then((status:boolean) => {\n    console.info('Checks whether a specified application can show as float window.');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settingsgeturisync8",
      children: "settings.getUriSync8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getUriSync(name: string): string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取数据项的URI（暂不支持）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Applications.Settings.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据项的名称。数据项名称分为以下两种：  - 上述任意一个数据库中已存在的数据项。  - 开发者自行添加的数据项。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据项的URI。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 获取数据项的URI。\nlet uriVar:string = settings.getUriSync(settings.display.SCREEN_BRIGHTNESS_STATUS);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settingsgeturideprecated",
      children: "settings.getURI(deprecated)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["getURI(name: string, callback: AsyncCallback", (0,jsx_runtime.jsxs)(_components.object, {
        children: ["): void", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取数据项的URI。使用callback异步回调（暂不支持）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(619201)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从 API version 7开始支持，从API version 9开始废弃，此接口不再提供代替接口。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力"
            })
          }), "：SystemCapability.Applications.Settings.Core"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "参数"
            })
          }), "："]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "name"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "数据项的名称。数据项名称分为以下两种：  - 上述任意一个数据库中已存在的数据项。  - 开发者自行添加的数据项。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "callback"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "AsyncCallback<object>"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "回调函数。获取数据项的URI。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例"
            })
          }), "："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "settings.getURI(settings.display.SCREEN_BRIGHTNESS_STATUS, (uri:string) => {\n    console.info(`callback:uri -> ${JSON.stringify(uri)}`)\n})\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "settingsgeturideprecated-1",
          children: "settings.getURI(deprecated)"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["getURI(name: string): Promise", (0,jsx_runtime.jsxs)(_components.object, {
            children: [(0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "获取数据项的URI。使用Promise异步回调（暂不支持）。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(380275)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "从 API version 7开始支持，从API version 9开始废弃，此接口不再提供代替接口。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Applications.Settings.Core"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "参数"
                })
              }), "："]
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "参数名"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "类型"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "必填"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "说明"
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.tbody, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "name"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "数据项的名称。数据项名称分为以下两种：  - 上述任意一个数据库中已存在的数据项。  - 开发者自行添加的数据项。"
                  })]
                })
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "返回值"
                })
              }), "："]
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "类型"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "说明"
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.tbody, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "Promise<object>"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Promise对象。返回获取的数据项的URI。"
                  })]
                })
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "示例"
                })
              }), "："]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "settings.getURI(settings.display.SCREEN_BRIGHTNESS_STATUS).then((uri:string) => {\n    console.info(`promise:uri -> ${JSON.stringify(uri)}`)\n})\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "settingsgetvaluedeprecated",
              children: "settings.getValue(deprecated)"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["getValue(dataAbilityHelper: DataAbilityHelper, name: string, callback: AsyncCallback", (0,jsx_runtime.jsxs)(_components.object, {
                children: ["): void", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "获取数据库中DEVICE_SHARD域指定数据项的值。使用callback异步回调。"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.img, {
                    src: (__webpack_require__(369311)/* ["default"] */.A) + "",
                    width: "102",
                    height: "38"
                  })
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["从 API version 7开始支持，从API version 9开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
                    href: "#settingsgetvalue10",
                    children: "getValue()"
                  }), "替代。"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "模型约束"
                    })
                  }), "：此接口仅可在FA模型下使用。"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "系统能力"
                    })
                  }), "：SystemCapability.Applications.Settings.Core"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "参数"
                    })
                  }), "："]
                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.th, {
                        children: "参数名"
                      }), (0,jsx_runtime.jsx)(_components.th, {
                        children: "类型"
                      }), (0,jsx_runtime.jsx)(_components.th, {
                        children: "必填"
                      }), (0,jsx_runtime.jsx)(_components.th, {
                        children: "说明"
                      })]
                    })
                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "dataAbilityHelper"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: (0,jsx_runtime.jsx)(_components.a, {
                          href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability/js-apis-inner-ability-dataabilityhelper/js-apis-inner-ability-dataabilityhelper",
                          children: "DataAbilityHelper"
                        })
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "是"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "数据管理辅助类。"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "name"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "string"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "是"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "数据项的名称。数据项名称分为以下两种：  - 上述任意一个数据库中已存在的数据项。  - 开发者自行添加的数据项。"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "callback"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "AsyncCallback<object>"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "是"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "使用callback方式获取数据项的值。"
                      })]
                    })]
                  })]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "示例"
                    })
                  }), "："]
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "import featureAbility from '@ohos.ability.featureAbility';\n\nlet uri:string = settings.getUriSync(settings.display.SCREEN_BRIGHTNESS_STATUS);\nlet helper = featureAbility.acquireDataAbilityHelper(uri);\nsettings.getValue(helper, settings.display.SCREEN_BRIGHTNESS_STATUS, (err:Error, value:string) => {\n    if (err) {\n        console.error(`Failed to get the setting. ${err.message} `);\n        return;\n    }\n    console.info(`callback:value -> ${JSON.stringify(value)}`)\n});\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "settingsgetvaluedeprecated-1",
                  children: "settings.getValue(deprecated)"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["getValue(dataAbilityHelper: DataAbilityHelper, name: string): Promise", (0,jsx_runtime.jsxs)(_components.object, {
                    children: [(0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "获取数据库中DEVICE_SHARD域指定数据项的值。使用Promise异步回调。"
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: (0,jsx_runtime.jsx)(_components.img, {
                        src: (__webpack_require__(274702)/* ["default"] */.A) + "",
                        width: "102",
                        height: "38"
                      })
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: ["从 API version 7开始支持，从API version 9开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
                        href: "#settingsgetvalue10-1",
                        children: "getValue()"
                      }), "替代。"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "模型约束"
                        })
                      }), "：此接口仅可在FA模型下使用。"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "系统能力"
                        })
                      }), "：SystemCapability.Applications.Settings.Core"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "参数"
                        })
                      }), "："]
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.th, {
                            children: "参数名"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "类型"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "必填"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "说明"
                          })]
                        })
                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "dataAbilityHelper"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: (0,jsx_runtime.jsx)(_components.a, {
                              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability/js-apis-inner-ability-dataabilityhelper/js-apis-inner-ability-dataabilityhelper",
                              children: "DataAbilityHelper"
                            })
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "是"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "数据管理辅助类。"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "name"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "string"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "是"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "数据项的名称。数据项名称分为以下两种：  - 上述任意一个数据库中已存在的数据项。  - 开发者自行添加的数据项。"
                          })]
                        })]
                      })]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "返回值"
                        })
                      }), "："]
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.th, {
                            children: "类型"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "说明"
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.tbody, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Promise<object>"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Promise对象。返回获取的数据项的值。"
                          })]
                        })
                      })]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "示例"
                        })
                      }), "："]
                    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                      children: (0,jsx_runtime.jsx)(_components.code, {
                        children: "import featureAbility from '@ohos.ability.featureAbility';\n\nlet uri:string = settings.getUriSync(settings.display.SCREEN_BRIGHTNESS_STATUS);\nlet helper = featureAbility.acquireDataAbilityHelper(uri);\nsettings.getValue(helper, settings.display.SCREEN_BRIGHTNESS_STATUS).then((value:string) => {\n    console.info(`promise:value -> ${JSON.stringify(value)}`)\n});\n"
                      })
                    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                      id: "settingsgetvaluesyncdeprecated",
                      children: "settings.getValueSync(deprecated)"
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "getValueSync(dataAbilityHelper: DataAbilityHelper, name: string, defValue: string): string"
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "获取数据项的值。此方法相较getValue为同步方法。"
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: (0,jsx_runtime.jsx)(_components.img, {
                        src: (__webpack_require__(601825)/* ["default"] */.A) + "",
                        width: "102",
                        height: "38"
                      })
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: ["从 API version 8开始支持，从API version 9开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
                        href: "#settingsgetvaluesync10",
                        children: "getValueSync()"
                      }), "替代。"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "模型约束"
                        })
                      }), "：此接口仅可在FA模型下使用。"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "系统能力"
                        })
                      }), "：SystemCapability.Applications.Settings.Core"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "参数"
                        })
                      }), "："]
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.th, {
                            children: "参数名"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "类型"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "必填"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "说明"
                          })]
                        })
                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "dataAbilityHelper"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: (0,jsx_runtime.jsx)(_components.a, {
                              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability/js-apis-inner-ability-dataabilityhelper/js-apis-inner-ability-dataabilityhelper",
                              children: "DataAbilityHelper"
                            })
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "是"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "数据管理辅助类。"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "name"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "string"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "是"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "数据项的名称。数据项名称分为以下两种：  - 上述任意一个数据库中已存在的数据项。  - 开发者自行添加的数据项。"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "defValue"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "string"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "是"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "默认值。由开发者设置，在数据库中查询不到该数据时，返回默认值。"
                          })]
                        })]
                      })]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "返回值"
                        })
                      }), "："]
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.th, {
                            children: "类型"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "说明"
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.tbody, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "string"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "返回数据项的值。"
                          })]
                        })
                      })]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "示例"
                        })
                      }), "："]
                    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                      children: (0,jsx_runtime.jsx)(_components.code, {
                        children: "import featureAbility from '@ohos.ability.featureAbility';\n\n// 获取数据项亮度的值(该数据项在数据库中已存在)。\nlet uri:string = settings.getUriSync(settings.display.SCREEN_BRIGHTNESS_STATUS);\nlet helper = featureAbility.acquireDataAbilityHelper(uri);\nlet value:string = settings.getValueSync(helper, settings.display.SCREEN_BRIGHTNESS_STATUS, '10');\n"
                      })
                    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                      id: "settingssetvaluesyncdeprecated",
                      children: "settings.setValueSync(deprecated)"
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "setValueSync(dataAbilityHelper: DataAbilityHelper, name: string, value: string): boolean"
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "设置数据项的值。此方法相较setValue为同步方法。"
                    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                        children: "如果数据库中已经存在该数据项，setValueSync方法将更新该数据项的值。"
                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                        children: "如果数据库中不存在该数据项，setValueSync方法将向数据库中插入该数据项。"
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: (0,jsx_runtime.jsx)(_components.img, {
                        src: (__webpack_require__(106709)/* ["default"] */.A) + "",
                        width: "102",
                        height: "38"
                      })
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: ["从 API version 8开始支持，从API version 9开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
                        href: "#settingssetvaluesync10",
                        children: "setValueSync()"
                      }), "替代。"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "模型约束"
                        })
                      }), "：此接口仅可在FA模型下使用。"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "需要权限"
                        })
                      }), "：ohos.permission.MANAGE_SETTINGS，该权限仅系统应用可用。"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "系统能力"
                        })
                      }), "：SystemCapability.Applications.Settings.Core"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "参数"
                        })
                      }), "："]
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.th, {
                            children: "参数名"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "类型"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "必填"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "说明"
                          })]
                        })
                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "dataAbilityHelper"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: (0,jsx_runtime.jsx)(_components.a, {
                              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability/js-apis-inner-ability-dataabilityhelper/js-apis-inner-ability-dataabilityhelper",
                              children: "DataAbilityHelper"
                            })
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "是"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "数据管理辅助类。"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "name"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "string"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "是"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "数据项的名称。数据项名称分为以下两种：  - 上述任意一个数据库中已存在的数据项。  - 开发者自行添加的数据项。"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "value"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "string"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "是"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "数据项的具体数值。取值范围随业务变动。"
                          })]
                        })]
                      })]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "返回值"
                        })
                      }), "："]
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.th, {
                            children: "类型"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "说明"
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.tbody, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "boolean"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "返回设置数据项的值是否成功的结果。true表示设置成功，false表示设置失败。"
                          })]
                        })
                      })]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "示例"
                        })
                      }), "："]
                    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                      children: (0,jsx_runtime.jsx)(_components.code, {
                        children: "import featureAbility from '@ohos.ability.featureAbility';\n\n// 更新数据项亮度的值(该数据项在数据库中已存在，故setValueSync方法将更新该数据项的值)。\nlet uri:string = settings.getUriSync(settings.display.SCREEN_BRIGHTNESS_STATUS);\nlet helper = featureAbility.acquireDataAbilityHelper(uri);\nlet ret:string = settings.setValueSync(helper, settings.display.SCREEN_BRIGHTNESS_STATUS, '100');\n"
                      })
                    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                      id: "settingsopeninputmethodsettings23",
                      children: "settings.openInputMethodSettings23+"
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "openInputMethodSettings(context: Context): void"
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "打开输入法设置页面。"
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "模型约束"
                        })
                      }), "：此接口仅可在Stage模型下使用。"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "系统能力"
                        })
                      }), "：SystemCapability.Applications.Settings.Core"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "设备行为差异"
                        })
                      }), "：该接口在Phone、Tablet设备中可正常调用，在其他设备调用不生效。"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "参数"
                        })
                      }), "："]
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.th, {
                            children: "参数名"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "类型"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "必填"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "说明"
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.tbody, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "context"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Context"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "是"
                          }), (0,jsx_runtime.jsxs)(_components.td, {
                            children: ["应用上下文（仅支持UIAbilityContext和ExtensionContext）。  Stage模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
                              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
                              children: "Context"
                            }), "。"]
                          })]
                        })
                      })]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "错误码"
                        })
                      }), "："]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts-errcode/errorcode-settings/errorcode-settings",
                        children: "设置数据项错误码"
                      }), "。"]
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.th, {
                            children: "错误码ID"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "错误信息"
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.tbody, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "16900010"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Parameter error."
                          })]
                        })
                      })]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "示例"
                        })
                      }), "："]
                    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                      children: (0,jsx_runtime.jsx)(_components.code, {
                        children: "import { settings } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n\n// 跳转输入法设置页面。\n// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。\nconst context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\nsettings.openInputMethodSettings(context);\n"
                      })
                    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                      id: "settingsopeninputmethoddetail23",
                      children: "settings.openInputMethodDetail23+"
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "openInputMethodDetail(context: Context, bundleName: string, inputMethodId: string): void"
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "打开输入法详情页面。"
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "模型约束"
                        })
                      }), "：此接口仅可在Stage模型下使用。"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "系统能力"
                        })
                      }), "：SystemCapability.Applications.Settings.Core"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "设备行为差异"
                        })
                      }), "：该接口在Phone、Tablet设备中可正常调用，在其他设备调用不生效。"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "参数"
                        })
                      }), "："]
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.th, {
                            children: "参数名"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "类型"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "必填"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "说明"
                          })]
                        })
                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "context"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Context"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "是"
                          }), (0,jsx_runtime.jsxs)(_components.td, {
                            children: ["应用上下文（仅支持UIAbilityContext和ExtensionContext）。  Stage模型的应用Context定义见", (0,jsx_runtime.jsx)(_components.a, {
                              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
                              children: "Context"
                            }), "。"]
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "bundleName"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "string"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "是"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "拉起输入法的对应包名"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "inputMethodId"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "string"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "是"
                          }), (0,jsx_runtime.jsxs)(_components.td, {
                            children: ["输入法扩展在应用内唯一标识", (0,jsx_runtime.jsx)(_components.a, {
                              href: "/ref/ime-api/ime-arkts/js-apis-inputmethod/js-apis-inputmethod#inputmethodproperty8",
                              children: "id"
                            }), "。"]
                          })]
                        })]
                      })]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "错误码"
                        })
                      }), "："]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts-errcode/errorcode-settings/errorcode-settings",
                        children: "设置数据项错误码"
                      }), "。"]
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.th, {
                            children: "错误码ID"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "错误信息"
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.tbody, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "16900010"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Parameter error."
                          })]
                        })
                      })]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "示例"
                        })
                      }), "："]
                    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                      children: (0,jsx_runtime.jsx)(_components.code, {
                        children: "import { settings } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n\n// 跳转输入法详情页面。\n// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。\nconst context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\nlet bundleName: string = \"target inputMethod bundle name\";\nlet inputMethodId: string = \"target inputMethod id\";\nsettings.openInputMethodDetail(context, bundleName, inputMethodId);\n"
                      })
                    }), "\n"]
                  })]
                })]
              })]
            })]
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
633314(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
369311(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
106709(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
619201(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
274702(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
601825(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
380275(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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