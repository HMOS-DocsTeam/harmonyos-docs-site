"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["554039"], {
786636(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_basicfun_api_status_bar_extension_api_statusbar_extension_arkts_statusbar_extension_manager_statusbar_extension_manager_md_1fd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-basicfun-api-status-bar-extension-api-statusbar-extension-arkts-statusbar-extension-manager-statusbar-extension-manager-md-1fd.json
var site_docs_ref_system_basicfun_api_status_bar_extension_api_statusbar_extension_arkts_statusbar_extension_manager_statusbar_extension_manager_md_1fd_namespaceObject = JSON.parse('{"id":"system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-manager/statusbar-extension-manager","title":"statusBarManager（状态栏管理服务）","description":"本模块为应用提供接入状态栏的能力。应用可以通过接入相应的API，可快速在状态栏显示应用及下拉面板，实现对应用的管理；用户可以通过直接操作状态栏图标完成一些应用操作。","source":"@site/docs-ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-manager/statusbar-extension-manager.md","sourceDirName":"system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-manager","slug":"/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-manager/statusbar-extension-manager","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-manager/statusbar-extension-manager","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"statusBarManager（状态栏管理服务）","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-manager","kit":"系统","last_updated":"2026-04-22","slug":"statusbar-extension-manager"},"sidebar":"ref","previous":{"title":"情景模式错误码","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/basic-services-api/basic-services-arkts-errcode/errorcode-intelligentscene/errorcode-intelligentscene"},"next":{"title":"StatusBarViewExtensionAbility（状态栏扩展Ability）","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-ability/statusbar-extension-ability"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-manager/statusbar-extension-manager.md


const frontMatter = {
	title: 'statusBarManager（状态栏管理服务）',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-manager',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'statusbar-extension-manager'
};
const contentTitle = 'statusBarManager（状态栏管理服务）';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "statusBarManager.StatusBarItem",
  "id": "statusbarmanagerstatusbaritem",
  "level": 2
}, {
  "value": "statusBarManager.StatusBarIcon",
  "id": "statusbarmanagerstatusbaricon",
  "level": 2
}, {
  "value": "statusBarManager.QuickOperation",
  "id": "statusbarmanagerquickoperation",
  "level": 2
}, {
  "value": "statusBarManager.StatusBarGroupMenu",
  "id": "statusbarmanagerstatusbargroupmenu",
  "level": 2
}, {
  "value": "statusBarManager.StatusBarMenuItem",
  "id": "statusbarmanagerstatusbarmenuitem",
  "level": 2
}, {
  "value": "statusBarManager.StatusBarMenuAction",
  "id": "statusbarmanagerstatusbarmenuaction",
  "level": 2
}, {
  "value": "statusBarManager.StatusBarSubMenuItem",
  "id": "statusbarmanagerstatusbarsubmenuitem",
  "level": 2
}, {
  "value": "statusBarManager.addToStatusBar",
  "id": "statusbarmanageraddtostatusbar",
  "level": 2
}, {
  "value": "statusBarManager.addToStatusBar",
  "id": "statusbarmanageraddtostatusbar-1",
  "level": 2
}, {
  "value": "statusBarManager.removeFromStatusBar",
  "id": "statusbarmanagerremovefromstatusbar",
  "level": 2
}, {
  "value": "statusBarManager.removeFromStatusBar",
  "id": "statusbarmanagerremovefromstatusbar-1",
  "level": 2
}, {
  "value": "statusBarManager.updateQuickOperationHeight",
  "id": "statusbarmanagerupdatequickoperationheight",
  "level": 2
}, {
  "value": "statusBarManager.updateQuickOperationHeight",
  "id": "statusbarmanagerupdatequickoperationheight-1",
  "level": 2
}, {
  "value": "statusBarManager.updateStatusBarMenu",
  "id": "statusbarmanagerupdatestatusbarmenu",
  "level": 2
}, {
  "value": "statusBarManager.updateStatusBarMenu",
  "id": "statusbarmanagerupdatestatusbarmenu-1",
  "level": 2
}, {
  "value": "statusBarManager.updateStatusBarIcon",
  "id": "statusbarmanagerupdatestatusbaricon",
  "level": 2
}, {
  "value": "statusBarManager.updateStatusBarIcon",
  "id": "statusbarmanagerupdatestatusbaricon-1",
  "level": 2
}, {
  "value": "statusBarManager.on(&#39;statusBarIconClick&#39;)",
  "id": "statusbarmanageronstatusbariconclick",
  "level": 2
}, {
  "value": "statusBarManager.off(&#39;statusBarIconClick&#39;)",
  "id": "statusbarmanageroffstatusbariconclick",
  "level": 2
}, {
  "value": "statusBarManager.on(&#39;rightMenuClick&#39;)",
  "id": "statusbarmanageronrightmenuclick",
  "level": 2
}, {
  "value": "statusBarManager.off(&#39;rightMenuClick&#39;)",
  "id": "statusbarmanageroffrightmenuclick",
  "level": 2
}, {
  "value": "statusBarManager.updateStatusBarHoverTips",
  "id": "statusbarmanagerupdatestatusbarhovertips",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "statusbarmanager状态栏管理服务",
        children: "statusBarManager（状态栏管理服务）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块为应用提供接入状态栏的能力。应用可以通过接入相应的API，可快速在状态栏显示应用及下拉面板，实现对应用的管理；用户可以通过直接操作状态栏图标完成一些应用操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { statusBarManager } from '@kit.DeskTopExtensionKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "statusbarmanagerstatusbaritem",
      children: "statusBarManager.StatusBarItem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态栏图标详细参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.PCService.StatusBarManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "只读"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "icons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#statusbarmanagerstatusbaricon",
              children: "StatusBarIcon"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "状态栏应用图标的图片信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "quickOperation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#statusbarmanagerquickoperation",
              children: "QuickOperation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "状态栏应用图标的左键业务弹窗相关信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "statusBarGroupMenu"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#statusbarmanagerstatusbargroupmenu",
              children: "StatusBarGroupMenu"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["状态栏图标的右键分组菜单相关信息。  默认值：undefined。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 当前所有分组下一级菜单项的总和不可超过20个。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hoverTips"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["状态栏图标hover时的显示信息。  取值范围：1~128。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 如不配置该参数，则hover时显示内容默认取值为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#statusbarmanagerquickoperation",
              children: "statusBarManager.QuickOperation"
            }), "中配置模块的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-hapmoduleinfo/js-apis-bundlemanager-hapmoduleinfo#hapmoduleinfo-1",
              children: "label"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.2(22)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "statusbarmanagerstatusbaricon",
      children: "statusBarManager.StatusBarIcon"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态栏图标的图片信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.PCService.StatusBarManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "只读"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "white"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "image.PixelMap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["深色壁纸下展示的图标，建议采用纯白色图标，支持JPEG、PNG、GIF、WebP、BMP、SVG、ICO、DNG等图片类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 建议使用24", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-pixel-units/ts-pixel-units",
              children: "vp"
            }), " * 24vp的图片。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "black"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "image.PixelMap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["浅色壁纸下展示的图标，建议采用纯黑色图标，支持JPEG、PNG、GIF、WebP、BMP、SVG、ICO、DNG等图片类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 建议使用24vp * 24vp的图片。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "statusbarmanagerquickoperation",
      children: "statusBarManager.QuickOperation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态栏图标左键业务弹窗的详细信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.PCService.StatusBarManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "只读"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "状态栏图标的左键业务弹窗的标题。  取值范围：无限制，超长显示省略号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "状态栏图标的左键业务弹窗的自定义区域高度，单位：vp。  取值范围：大于0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "abilityName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["状态栏图标左键业务弹窗的应用定制区域对应的自定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-ability/statusbar-extension-ability",
              children: "StatusBarViewExtensionAbility"
            }), "的名称。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 当传空字符串时，支持通过监听", (0,jsx_runtime.jsx)(_components.a, {
              href: "#statusbarmanageronstatusbariconclick",
              children: "statusBarIconClick"
            }), "事件处理点击业务。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "moduleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["状态栏图标左键业务弹窗的应用定制区域对应的自定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-ability/statusbar-extension-ability",
              children: "StatusBarViewExtensionAbility"
            }), "所在的模块名称。  默认值：''。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "loadingStatus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["点击状态栏图标展开二级菜单场景下是否加载动效。  默认值：false。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.0(20)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "statusbarmanagerstatusbargroupmenu",
      children: "statusBarManager.StatusBarGroupMenu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type StatusBarGroupMenu = StatusBarMenuItem[]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态栏图标右键菜单的分组菜单信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.PCService.StatusBarManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#statusbarmanagerstatusbarmenuitem",
              children: "StatusBarMenuItem"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "菜单组的信息，可以包含多个一级菜单项。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "statusbarmanagerstatusbarmenuitem",
      children: "statusBarManager.StatusBarMenuItem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态栏图标右键菜单的一级菜单项信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.PCService.StatusBarManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "只读"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "菜单项标题。  取值范围：无限制，超长显示省略号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "menuAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#statusbarmanagerstatusbarmenuaction",
              children: "StatusBarMenuAction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["菜单项行为信息。  默认值：undefined。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 当前菜单行为仅支持打开应用内定义的UIAbility，且menuAction和subMenu两个参数不可同时缺省。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subMenu"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#statusbarmanagerstatusbarsubmenuitem",
              children: "StatusBarSubMenuItem"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一级菜单项的子菜单项。  默认值：undefined。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 当前单个一级菜单项最多支持20个子菜单项。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "statusbarmanagerstatusbarmenuaction",
      children: "statusBarManager.StatusBarMenuAction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态栏图标右键菜单的菜单项点击行为信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.PCService.StatusBarManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "只读"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "abilityName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["点击菜单项拉起的应用的Ability名称。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 当前仅支持拉起UIAbility。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "moduleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "点击菜单项拉起的应用的Ability所在的模块名称。  默认值：''"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "notifyOnly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图标右键菜单点击事件使能。  取值范围：  false：不使能，此时点击右键菜单无事件通知。  true：使能，此时点击右键菜单有事件通知。  默认值：false - 无右键菜单点击事件触发。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 当使能和提供菜单menuCode时，支持通过监听", (0,jsx_runtime.jsx)(_components.a, {
              href: "#statusbarmanageronrightmenuclick",
              children: "rightMenuClick"
            }), "事件处理图标右键菜单点击业务。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 5.0.2(14)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "menuCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图标右键菜单唯一标识。  默认值：''。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 需保证菜单标识的唯一性，用于区分不同菜单项。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 5.0.2(14)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "statusbarmanagerstatusbarsubmenuitem",
      children: "statusBarManager.StatusBarSubMenuItem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态栏图标的右键菜单的二级菜单项信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.PCService.StatusBarManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "只读"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subTitle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "二级菜单项标题。  取值范围：无限制，超长显示省略号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "menuAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#statusbarmanagerstatusbarmenuaction",
              children: "StatusBarMenuAction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["菜单项行为信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 当前菜单行为仅支持打开应用内定义的UIAbility。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "statusbarmanageraddtostatusbar",
      children: "statusBarManager.addToStatusBar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "addToStatusBar(context: common.Context, statusBarItem: StatusBarItem): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用接入状态栏方法，当前同一个应用仅支持添加一个图标，重复添加无效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.PCService.StatusBarManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context#context",
              children: "common.Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["上下文信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 当前context仅支持传入Context的子类UIAbilityContext、ServiceExtensionContext、FormExtensionContext。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "statusBarItem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#statusbarmanagerstatusbaritem",
              children: "StatusBarItem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用自定义接入状态栏的图标的详细信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-error-code/statusbar-extension-error-code",
        children: "ArkTS API错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The parameter check failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1010710001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The size of the pixelmap exceeds the limit."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1010710002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The number of menu items or submenu items exceeds the limit."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1010710003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The API is being called too frequently."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1010710005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The string length exceeds the threshold."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1010720001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A menu item contains neither submenu nor menuAction."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { statusBarManager } from '@kit.DeskTopExtensionKit';\nimport { image } from '@kit.ImageKit';\nimport { resourceManager } from '@kit.LocalizationKit';\n\n/**\n * 可以通过自定义组件的内置方法获取Context信息\n * 具体方法：this.getUIContext().getHostContext();\n */\nasync function addToStatusBar(context: Context) {\n  if (!context) {\n    console.error('getHostContext failed');\n    return;\n  }\n  // 获取resourceManager资源管理器\n  const resourceMgr: resourceManager.ResourceManager = context.resourceManager;\n\n  // 创建white pixelMap，需在资源rawfile文件夹中预置testWhite.png图片，图片大小为24vp * 24vp\n  const whiteFileData = resourceMgr.getRawFileContentSync('testWhite.png');\n  const whiteBuffer = whiteFileData.buffer;\n  const whiteImageSource = image.createImageSource(whiteBuffer);\n  let whitePixelMap = await whiteImageSource.createPixelMap();\n\n  // 创建black pixelMap，需在资源rawfile文件夹中预置testBlack.png图片，图片大小为24vp * 24vp\n  const blackFileData = resourceMgr.getRawFileContentSync('testBlack.png');\n  const blackBuffer = blackFileData.buffer;\n  const blackImageSource = image.createImageSource(blackBuffer);\n  let blackPixelMap = await blackImageSource.createPixelMap();\n\n  // 构建图标信息\n  let icon: statusBarManager.StatusBarIcon = {\n    white: whitePixelMap,\n    black: blackPixelMap\n  }\n\n  // 构建右键菜单项内容\n  let subMenus: Array<statusBarManager.StatusBarSubMenuItem> = [];\n  let subMenuItemAction: statusBarManager.StatusBarMenuAction = {\n    abilityName: \"EntryAbility\"\n  }\n  let subMenu: statusBarManager.StatusBarSubMenuItem = {\n    subTitle: \"子菜单项\",\n    menuAction: subMenuItemAction\n  }\n  subMenus.push(subMenu);\n\n  let statusBarMenuItems: Array<statusBarManager.StatusBarMenuItem> = [];\n  let menuItem: statusBarManager.StatusBarMenuItem = {\n    title: \"一级菜单项\",\n    // 一级menuAction和subMenu两项不可都缺省\n    subMenu: subMenus\n  };\n  statusBarMenuItems.push(menuItem);\n\n  let statusBarGroupMenus: Array<statusBarManager.StatusBarGroupMenu> = [];\n  statusBarGroupMenus.push(statusBarMenuItems);\n\n  // 构建左键业务弹窗信息\n  let operation: statusBarManager.QuickOperation = {\n    abilityName: \"MyStatusBarViewAbility\",\n    title: \"测试Demo\",\n    height: 300,\n    // 可缺省\n    moduleName: 'entry'\n  };\n\n  // 构建添加到状态栏的图标详细信息\n  let item: statusBarManager.StatusBarItem = {\n    icons: icon,\n    quickOperation: operation,\n    statusBarGroupMenu: statusBarGroupMenus\n  };\n\n  try {\n    statusBarManager.addToStatusBar(context, item);\n  } catch (error) {\n    console.error(`addToStatusBar failed. error code: ${error.code}, error message: ${error.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "statusbarmanageraddtostatusbar-1",
      children: "statusBarManager.addToStatusBar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "addToStatusBar(context: common.Context, statusBarItem: StatusBarItem, callback: AsyncCallback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用接入状态栏方法，使用callback异步回调，当前同一个应用仅支持添加一个图标，重复添加无效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.PCService.StatusBarManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context#context",
              children: "common.Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["上下文信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 当前context仅支持传入Context的子类UIAbilityContext、ServiceExtensionContext、FormExtensionContext。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "statusBarItem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#statusbarmanagerstatusbaritem",
              children: "StatusBarItem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用自定义接入状态栏的图标的详细信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示应用添加图标到状态栏回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-error-code/statusbar-extension-error-code",
        children: "ArkTS API错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The parameter check failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1010710001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The size of the pixelmap exceeds the limit."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1010710002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The number of menu items or submenu items exceeds the limit."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1010710003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The API is being called too frequently."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1010710005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The string length exceeds the threshold."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1010720001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A menu item contains neither submenu nor menuAction."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { statusBarManager } from '@kit.DeskTopExtensionKit';\nimport { image } from '@kit.ImageKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { resourceManager } from '@kit.LocalizationKit';\n\n/**\n * 可以通过自定义组件的内置方法获取Context信息\n * 具体方法：this.getUIContext().getHostContext();\n */\nasync function addToStatusBar(context: Context) {\n  if (!context) {\n    console.error('getHostContext failed');\n    return;\n  }\n  // 获取resourceManager资源管理器\n  const resourceMgr: resourceManager.ResourceManager = context.resourceManager;\n\n  // 创建white pixelMap，需在资源rawfile文件夹中预置testWhite.png图片，图片大小为24vp * 24vp\n  const whiteFileData = resourceMgr.getRawFileContentSync('testWhite.png');\n  const whiteBuffer = whiteFileData.buffer;\n  const whiteImageSource = image.createImageSource(whiteBuffer);\n  let whitePixelMap = await whiteImageSource.createPixelMap();\n\n  // 创建black pixelMap，需在资源rawfile文件夹中预置testBlack.png图片，图片大小为24vp * 24vp\n  const blackFileData = resourceMgr.getRawFileContentSync('testBlack.png');\n  const blackBuffer = blackFileData.buffer;\n  const blackImageSource = image.createImageSource(blackBuffer);\n  let blackPixelMap = await blackImageSource.createPixelMap();\n\n  // 构建图标信息\n  let icon: statusBarManager.StatusBarIcon = {\n    white: whitePixelMap,\n    black: blackPixelMap\n  }\n\n  // 构建右键菜单项内容\n  let subMenus: Array<statusBarManager.StatusBarSubMenuItem> = [];\n  let subMenuItemAction: statusBarManager.StatusBarMenuAction = {\n    abilityName: \"EntryAbility\"\n  }\n  let subMenu: statusBarManager.StatusBarSubMenuItem = {\n    subTitle: \"子菜单项\",\n    menuAction: subMenuItemAction\n  }\n  subMenus.push(subMenu);\n\n  let statusBarMenuItems: Array<statusBarManager.StatusBarMenuItem> = [];\n  let menuItem: statusBarManager.StatusBarMenuItem = {\n    title: \"一级菜单项\",\n    // 一级menuAction和subMenu两项不可都缺省\n    subMenu: subMenus\n  };\n  statusBarMenuItems.push(menuItem);\n\n  let statusBarGroupMenus: Array<statusBarManager.StatusBarGroupMenu> = [];\n  statusBarGroupMenus.push(statusBarMenuItems);\n\n  // 构建左键业务弹窗信息\n  let operation: statusBarManager.QuickOperation = {\n    abilityName: \"MyStatusBarViewAbility\",\n    title: \"测试Demo\",\n    height: 300,\n    // 可缺省\n    moduleName: 'entry'\n  };\n\n  // 构建添加到状态栏的图标详细信息\n  let item: statusBarManager.StatusBarItem = {\n    icons: icon,\n    quickOperation: operation,\n    statusBarGroupMenu: statusBarGroupMenus\n  };\n\n  try {\n    statusBarManager.addToStatusBar(context, item, (error: BusinessError) => {\n      if (error) {\n        // ...\n        return;\n      }\n      console.info('addToStatusBar success');\n    });\n  } catch (error) {\n    console.error(`addToStatusBar failed. error code: ${error.code}, error message: ${error.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "statusbarmanagerremovefromstatusbar",
      children: "statusBarManager.removeFromStatusBar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "removeFromStatusBar(context: common.Context): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用移除状态栏对应图标方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.PCService.StatusBarManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context#context",
              children: "common.Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["上下文信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 当前context仅支持传入Context的子类UIAbilityContext、ServiceExtensionContext、FormExtensionContext。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-error-code/statusbar-extension-error-code",
        children: "ArkTS API错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The parameter check failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1010710003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The API is being called too frequently."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1010710004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The icon cannot be deleted when no window is in the foreground."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { statusBarManager } from '@kit.DeskTopExtensionKit';\n\n/**\n * 可以通过自定义组件的内置方法获取Context信息\n * 具体方法：this.getUIContext().getHostContext();\n */\nfunction removeFromStatusBar(context: Context) {\n  if (!context) {\n    console.error('getHostContext failed');\n    return;\n  }\n  try {\n    statusBarManager.removeFromStatusBar(context);\n  } catch (error) {\n    console.error(`removeFromStatusBar failed. error code: ${error.code}, error message: ${error.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "statusbarmanagerremovefromstatusbar-1",
      children: "statusBarManager.removeFromStatusBar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "removeFromStatusBar(context: common.Context, callback: AsyncCallback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用移除状态栏对应图标方法，使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.PCService.StatusBarManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context#context",
              children: "common.Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["上下文信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 当前context仅支持传入Context的子类UIAbilityContext、ServiceExtensionContext、FormExtensionContext。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示应用移除状态栏图标回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-error-code/statusbar-extension-error-code",
        children: "ArkTS API错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The parameter check failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1010710003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The API is being called too frequently."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1010710004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The icon cannot be deleted when no window is in the foreground."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { statusBarManager } from '@kit.DeskTopExtensionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n/**\n * 可以通过自定义组件的内置方法获取Context信息\n * 具体方法：this.getUIContext().getHostContext();\n */\nfunction removeFromStatusBar(context: Context) {\n  if (!context) {\n    console.error('getHostContext failed');\n    return;\n  }\n  try {\n    statusBarManager.removeFromStatusBar(context, (error: BusinessError) => {\n      if (error) {\n        // ...\n        return;\n      }\n      console.info('removeFromStatusBar success');\n    });\n  } catch (error) {\n    console.error(`removeFromStatusBar failed. error code: ${error.code}, error message: ${error.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "statusbarmanagerupdatequickoperationheight",
      children: "statusBarManager.updateQuickOperationHeight"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "updateQuickOperationHeight(context: common.Context, height: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用更新状态栏图标的左键弹窗应用定制区域高度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.PCService.StatusBarManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context#context",
              children: "common.Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["上下文信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 当前context仅支持传入Context的子类UIAbilityContext、ServiceExtensionContext、FormExtensionContext。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "状态栏图标左键的应用面板自定义区域高度，单位：vp。  取值范围：大于0。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-error-code/statusbar-extension-error-code",
        children: "ArkTS API错误码"
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The parameter check failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1010710003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The API is being called too frequently."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { statusBarManager } from '@kit.DeskTopExtensionKit';\n\n/**\n * 可以通过自定义组件的内置方法获取Context信息\n * 具体方法：this.getUIContext().getHostContext();\n */\nfunction updateQuickOperationHeight(context: Context) {\n  if (!context) {\n    console.error('getHostContext failed');\n    return;\n  }\n  let height = 200;\n  try {\n    statusBarManager.updateQuickOperationHeight(context, height);\n  } catch (error) {\n    console.error(`updateQuickOperationHeight failed. error code: ${error.code}, error message: ${error.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "statusbarmanagerupdatequickoperationheight-1",
      children: "statusBarManager.updateQuickOperationHeight"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "updateQuickOperationHeight(context: common.Context, height: number, callback: AsyncCallback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用更新状态栏图标的左键弹窗应用定制区域高度，使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.PCService.StatusBarManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context#context",
              children: "common.Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["上下文信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 当前context仅支持传入Context的子类UIAbilityContext、ServiceExtensionContext、FormExtensionContext。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "状态栏图标左键的应用面板自定义区域高度，单位：vp。  取值范围：大于0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示应用更新状态栏图标的左键弹窗应用定制区域高度回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-error-code/statusbar-extension-error-code",
        children: "ArkTS API错误码"
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The parameter check failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1010710003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The API is being called too frequently."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { statusBarManager } from '@kit.DeskTopExtensionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n/**\n * 可以通过自定义组件的内置方法获取Context信息\n * 具体方法：this.getUIContext().getHostContext();\n */\nfunction updateQuickOperationHeight(context: Context) {\n  if (!context) {\n    console.error('getHostContext failed');\n    return;\n  }\n  let height = 200;\n  try {\n    statusBarManager.updateQuickOperationHeight(context, height, (error) => {\n      if (error) {\n        // ...\n        return;\n      }\n      console.info('updateQuickOperationHeight success');\n    });\n  } catch (error) {\n    console.error(`updateQuickOperationHeight failed. error code: ${error.code}, error message: ${error.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "statusbarmanagerupdatestatusbarmenu",
      children: "statusBarManager.updateStatusBarMenu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "updateStatusBarMenu(context: common.Context, statusBarGroupMenus: StatusBarGroupMenu[]): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用更新状态栏图标的右键菜单内容。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.PCService.StatusBarManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context#context",
              children: "common.Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["上下文信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 当前context仅支持传入Context的子类UIAbilityContext、ServiceExtensionContext、FormExtensionContext。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "statusBarGroupMenus"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#statusbarmanagerstatusbargroupmenu",
              children: "StatusBarGroupMenu"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["更新后的应用右键菜单栏相关信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 当前所有分组下一级菜单项的总和不可超过20个。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-error-code/statusbar-extension-error-code",
        children: "ArkTS API错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The parameter check failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1010710002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The number of menu items or submenu items exceeds the limit."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1010710003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The API is being called too frequently."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1010720001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A menu item contains neither submenu nor menuAction."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { statusBarManager } from '@kit.DeskTopExtensionKit';\n\n/**\n * 可以通过自定义组件的内置方法获取Context信息\n * 具体方法：this.getUIContext().getHostContext();\n */\nfunction updateStatusBarMenu(context: Context) {\n  // 构建右键菜单项内容\n  let subMenus: Array<statusBarManager.StatusBarSubMenuItem> = [];\n  let subMenuItemAction: statusBarManager.StatusBarMenuAction = {\n    abilityName: \"EntryAbility\"\n  }\n  let subMenu: statusBarManager.StatusBarSubMenuItem = {\n    subTitle: \"二级菜单项\",\n    menuAction: subMenuItemAction\n  }\n  subMenus.push(subMenu);\n  let statusBarMenuItems: Array<statusBarManager.StatusBarMenuItem> = [];\n  let menuItem: statusBarManager.StatusBarMenuItem = {\n    title: \"一级菜单项\",\n    // 一级menuAction和subMenu两项不可都缺省\n    subMenu: subMenus\n  };\n  statusBarMenuItems.push(menuItem);\n  let statusBarGroupMenus: Array<statusBarManager.StatusBarGroupMenu> = [];\n  statusBarGroupMenus.push(statusBarMenuItems);\n  if (!context) {\n    console.error('getHostContext failed');\n    return;\n  }\n  try {\n    statusBarManager.updateStatusBarMenu(context, statusBarGroupMenus);\n  } catch (error) {\n    console.error(`updateStatusBarMenu failed. error code: ${error.code}, error message: ${error.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "statusbarmanagerupdatestatusbarmenu-1",
      children: "statusBarManager.updateStatusBarMenu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "updateStatusBarMenu(context: common.Context, statusBarGroupMenus: StatusBarGroupMenu[], callback: AsyncCallback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用更新状态栏图标的右键菜单内容，使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.PCService.StatusBarManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context#context",
              children: "common.Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["上下文信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 当前context仅支持传入Context的子类UIAbilityContext、ServiceExtensionContext、FormExtensionContext。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "statusBarGroupMenus"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#statusbarmanagerstatusbargroupmenu",
              children: "StatusBarGroupMenu"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["更新后的应用右键菜单栏相关信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 当前所有分组下一级菜单项的总和不可超过20个。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示应用更新状态栏图标的右键菜单内容回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-error-code/statusbar-extension-error-code",
        children: "ArkTS API错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The parameter check failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1010710002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The number of menu items or submenu items exceeds the limit."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1010710003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The API is being called too frequently."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1010720001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A menu item contains neither submenu nor menuAction."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { statusBarManager } from '@kit.DeskTopExtensionKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n/**\n * 可以通过自定义组件的内置方法获取Context信息\n * 具体方法：this.getUIContext().getHostContext();\n */\nfunction updateStatusBarMenu(context: Context) {\n  // 构建右键菜单项内容\n  let subMenus: Array<statusBarManager.StatusBarSubMenuItem> = [];\n  let subMenuItemAction: statusBarManager.StatusBarMenuAction = {\n    abilityName: \"EntryAbility\"\n  }\n  let subMenu: statusBarManager.StatusBarSubMenuItem = {\n    subTitle: \"二级菜单项\",\n    menuAction: subMenuItemAction\n  }\n  subMenus.push(subMenu);\n  let statusBarMenuItems: Array<statusBarManager.StatusBarMenuItem> = [];\n  let menuItem: statusBarManager.StatusBarMenuItem = {\n    title: \"一级菜单项\",\n    // 一级menuAction和subMenu两项不可都缺省\n    subMenu: subMenus\n  };\n  statusBarMenuItems.push(menuItem);\n  let statusBarGroupMenus: Array<statusBarManager.StatusBarGroupMenu> = [];\n  statusBarGroupMenus.push(statusBarMenuItems);\n  if (!context) {\n    console.error('getHostContext failed');\n    return;\n  }\n  try {\n    statusBarManager.updateStatusBarMenu(context, statusBarGroupMenus, (err: BusinessError) => {\n      if (err) {\n        // ...\n        return;\n      }\n      console.info('updateStatusBarMenu success');\n    });\n  } catch (error) {\n    console.error(`updateStatusBarMenu failed. error code: ${error.code}, error message: ${error.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "statusbarmanagerupdatestatusbaricon",
      children: "statusBarManager.updateStatusBarIcon"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "updateStatusBarIcon(context: common.Context, statusBarIcon: StatusBarIcon): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用更新接入状态栏的图标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.PCService.StatusBarManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context#context",
              children: "common.Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["上下文信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 当前context仅支持传入Context的子类UIAbilityContext、ServiceExtensionContext、FormExtensionContext。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "statusBarIcon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#statusbarmanagerstatusbaricon",
              children: "StatusBarIcon"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新的图标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-error-code/statusbar-extension-error-code",
        children: "ArkTS API错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The parameter check failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1010710001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The size of the pixelmap exceeds the limit."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1010710003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The API is being called too frequently."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { statusBarManager } from '@kit.DeskTopExtensionKit';\nimport { image } from '@kit.ImageKit';\nimport { resourceManager } from '@kit.LocalizationKit';\n\n/**\n * 可以通过自定义组件的内置方法获取Context信息\n * 具体方法：this.getUIContext().getHostContext();\n */\nasync function updateStatusBarIcon(context: Context) {\n  if (!context) {\n    console.error('getHostContext failed');\n    return;\n  }\n  // 获取resourceManager资源管理器\n  const resourceMgr: resourceManager.ResourceManager = context.resourceManager;\n\n  // 创建white pixelMap，需在资源rawfile文件夹中预置testWhite.png图片，图片大小为24vp * 24vp\n  const whiteFileData = resourceMgr.getRawFileContentSync('testWhite.png');\n  const whiteBuffer = whiteFileData.buffer;\n  const whiteImageSource = image.createImageSource(whiteBuffer);\n  let whitePixelMap = await whiteImageSource.createPixelMap();\n\n  // 创建black pixelMap，需在资源rawfile文件夹中预置testBlack.png图片，图片大小为24vp * 24vp\n  const blackFileData = resourceMgr.getRawFileContentSync('testBlack.png');\n  const blackBuffer = blackFileData.buffer;\n  const blackImageSource = image.createImageSource(blackBuffer);\n  let blackPixelMap = await blackImageSource.createPixelMap();\n\n  // 构建图标信息\n  let icons: statusBarManager.StatusBarIcon = {\n    white: whitePixelMap,\n    black: blackPixelMap\n  }\n\n  try {\n    statusBarManager.updateStatusBarIcon(context, icons);\n  } catch (error) {\n    console.error(`updateStatusBarIcon failed. error code: ${error.code}, error message: ${error.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "statusbarmanagerupdatestatusbaricon-1",
      children: "statusBarManager.updateStatusBarIcon"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "updateStatusBarIcon(context: common.Context, statusBarIcon: StatusBarIcon, callback: AsyncCallback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用更新接入状态栏的图标，使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.PCService.StatusBarManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context#context",
              children: "common.Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["上下文信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 当前context仅支持传入Context的子类UIAbilityContext、ServiceExtensionContext、FormExtensionContext。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "statusBarIcon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#statusbarmanagerstatusbaricon",
              children: "StatusBarIcon"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新的图标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示应用更新接入状态栏的图标回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-error-code/statusbar-extension-error-code",
        children: "ArkTS API错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The parameter check failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1010710001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The size of the pixelmap exceeds the limit."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1010710003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The API is being called too frequently."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { statusBarManager } from '@kit.DeskTopExtensionKit';\nimport { image } from '@kit.ImageKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { resourceManager } from '@kit.LocalizationKit';\n\n/**\n * 可以通过自定义组件的内置方法获取Context信息\n * 具体方法：this.getUIContext().getHostContext();\n */\nasync function updateStatusBarIcon(context: Context) {\n  if (!context) {\n    console.error('getHostContext failed');\n    return;\n  }\n  // 获取resourceManager资源管理器\n  const resourceMgr: resourceManager.ResourceManager = context.resourceManager;\n\n  // 创建white pixelMap，需在资源rawfile文件夹中预置testWhite.png图片，图片大小为24vp * 24vp\n  const whiteFileData = resourceMgr.getRawFileContentSync('testWhite.png');\n  const whiteBuffer = whiteFileData.buffer;\n  const whiteImageSource = image.createImageSource(whiteBuffer);\n  let whitePixelMap = await whiteImageSource.createPixelMap();\n\n  // 创建black pixelMap，需在资源rawfile文件夹中预置testBlack.png图片，图片大小为24vp * 24vp\n  const blackFileData = resourceMgr.getRawFileContentSync('testBlack.png');\n  const blackBuffer = blackFileData.buffer;\n  const blackImageSource = image.createImageSource(blackBuffer);\n  let blackPixelMap = await blackImageSource.createPixelMap();\n\n  // 构建图标信息\n  let icons: statusBarManager.StatusBarIcon = {\n    white: whitePixelMap,\n    black: blackPixelMap\n  }\n\n  try {\n    statusBarManager.updateStatusBarIcon(context, icons, (error: BusinessError) => {\n      if (error) {\n        // ...\n        return;\n      }\n      console.info('updateStatusBarIcon success');\n    });\n  } catch (error) {\n    console.error(`updateStatusBarIcon failed. error code: ${error.code}, error message: ${error.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "statusbarmanageronstatusbariconclick",
      children: "statusBarManager.on('statusBarIconClick')"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'statusBarIconClick', callback: Callback<emitter.EventData>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "监听状态栏图标点击事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.PCService.StatusBarManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["事件回调类型，支持的事件为'statusBarIconClick'，当点击应用图标时，触发该事件。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 当调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#statusbarmanageraddtostatusbar",
              children: "addToStatusBar"
            }), "，入参", (0,jsx_runtime.jsx)(_components.a, {
              href: "#statusbarmanagerquickoperation",
              children: "quickOperation"
            }), "未指定abilityName时，支持通过监听statusBarIconClick事件处理点击业务。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/js-apis-emitter/js-apis-emitter#eventdata",
              children: "emitter.EventData"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要注册的回调函数，返回信息为图标点击相关信息。  当前仅支持返回iconClickType（点击事件类型）中的leftClick（左键）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "private onStatusBarIconClick = (eventData: emitter.EventData) => {\n  // 自定义图标点击业务\n  let data = eventData.data;\n  if (data) {\n    switch (data['iconClickType']) {\n      case 'leftClickType':\n        // 自定义左键点击业务\n        break;\n      default:\n        break;\n    }\n  }\n}\n\n// 监听状态栏图标点击事件\nstatusBarManager.on('statusBarIconClick', this.onStatusBarIconClick);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "statusbarmanageroffstatusbariconclick",
      children: "statusBarManager.off('statusBarIconClick')"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'statusBarIconClick', callback?: Callback<emitter.EventData>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注销状态栏图标点击事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.PCService.StatusBarManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消事件回调类型，支持的事件为'statusBarIconClick'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/js-apis-emitter/js-apis-emitter#eventdata",
              children: "emitter.EventData"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["取消该事件的回调处理函数。  默认值：undefined。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  若不传入callback，会取消该事件的所有回调函数；  若传入callback，需要传入对应on方法相同的对象，否则会导致回调函数未成功注销，导致内存泄露。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "private onStatusBarIconClick = (eventData: emitter.EventData) => {\n  // 自定义图标点击业务\n  let data = eventData.data;\n  if (data) {\n    switch (data['iconClickType']) {\n      case 'leftClickType':\n        // 自定义左键点击业务\n        break;\n      default:\n        break;\n    }\n  }\n}\n// 取消事件回调处理函数\nstatusBarManager.off('statusBarIconClick', this.onStatusBarIconClick);\n\n// 注销事件监听\nstatusBarManager.off('statusBarIconClick');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "statusbarmanageronrightmenuclick",
      children: "statusBarManager.on('rightMenuClick')"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'rightMenuClick', callback: Callback<emitter.EventData>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "监听状态栏图标右键菜单点击事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.PCService.StatusBarManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["事件回调类型，支持的事件为'rightMenuClick'，当点击应用图标右键菜单时，触发该事件。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 当调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#statusbarmanagerupdatestatusbarmenu",
              children: "updateStatusBarMenu"
            }), "，添加菜单项时，指定", (0,jsx_runtime.jsx)(_components.a, {
              href: "#statusbarmanagerstatusbarmenuaction",
              children: "menuAction"
            }), "的notifyOnly使能和菜单项menuCode时生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/js-apis-emitter/js-apis-emitter#eventdata",
              children: "emitter.EventData"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要注册的回调函数，返回信息为图标右键菜单点击相关信息。  当前返回信息menuCode（点击菜单项唯一标识）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "private onRightMenuClick = (eventData: emitter.EventData) => {\n  // 自定义图标右键菜单点击业务\n  let data = eventData.data;\n  if (data) {\n    let menuCode = data['menuCode'] as string;\n    // 处理点击菜单项业务\n  }\n}\n\n// 监听右键菜单点击事件\nstatusBarManager.on('rightMenuClick', this.onRightMenuClick);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "statusbarmanageroffrightmenuclick",
      children: "statusBarManager.off('rightMenuClick')"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'rightMenuClick', callback?: Callback<emitter.EventData>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注销状态栏图标右键菜单点击事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.PCService.StatusBarManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消事件回调类型，支持的事件为'rightMenuClick'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/js-apis-emitter/js-apis-emitter#eventdata",
              children: "emitter.EventData"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["取消该事件的回调处理函数。  默认值：undefined。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  若不传入callback，会取消该事件的所有回调函数；  若传入callback，需要传入对应on方法相同的对象，否则会导致回调函数未成功注销，导致内存泄露。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "private onRightMenuClick = (eventData: emitter.EventData) => {\n  // 自定义图标右键菜单点击业务\n  let data = eventData.data;\n  if (data) {\n    let menuCode = data['menuCode'] as string;\n    // 处理点击菜单项业务\n  }\n}\n\n// 取消事件回调处理函数\nstatusBarManager.off('rightMenuClick', this.onRightMenuClick);\n\n// 注销事件监听\nstatusBarManager.off('rightMenuClick');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "statusbarmanagerupdatestatusbarhovertips",
      children: "statusBarManager.updateStatusBarHoverTips"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "updateStatusBarHoverTips(context: common.Context, hoverTips: string): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更新状态栏图标hover时显示内容。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.PCService.StatusBarManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context#context",
              children: "common.Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["上下文信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 当前context仅支持传入Context的子类UIAbilityContext、ServiceExtensionContext、FormExtensionContext。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hoverTips"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "状态栏图标hover时的显示信息。  字符串长度范围：1~128。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，无返回结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-error-code/statusbar-extension-error-code",
        children: "ArkTS API错误码"
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
            children: "1010710003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The API is being called too frequently."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1010710005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The string length exceeds the threshold."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { statusBarManager } from '@kit.DeskTopExtensionKit';\n\n/**\n * 可以通过自定义组件的内置方法获取Context信息\n * 具体方法：this.getUIContext().getHostContext();\n */\nasync function updateStatusBarHoverTips(context: Context) {\n  if (!context) {\n    console.error('getHostContext failed');\n    return;\n  }\n  let hoverTips: string = 'hoverTips';\n  try {\n    await statusBarManager.updateStatusBarHoverTips(context, hoverTips);\n  } catch (error) {\n    console.error(`updateStatusBarHoverTips failed. error code: ${error.code}, error message: ${error.message}`);\n  }\n}\n"
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