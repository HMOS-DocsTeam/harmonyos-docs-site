"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["737989"], {
862836(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_interaction_property_ts_universal_attributes_cursor_ts_universal_attributes_cursor_md_af7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-ts-component-general-attributes-interaction-property-ts-universal-attributes-cursor-ts-universal-attributes-cursor-md-af7.json
var site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_interaction_property_ts_universal_attributes_cursor_ts_universal_attributes_cursor_md_af7_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-cursor/ts-universal-attributes-cursor","title":"鼠标光标控制","description":"控制鼠标光标的显示样式。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-cursor/ts-universal-attributes-cursor.md","sourceDirName":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-cursor","slug":"/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-cursor/ts-universal-attributes-cursor","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-cursor/ts-universal-attributes-cursor","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"鼠标光标控制","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-cursor","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-universal-attributes-cursor"},"sidebar":"ref","previous":{"title":"事件独占控制","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/touch-interactions/ts-universal-attributes-monopolize-events/ts-universal-attributes-monopolize-events"},"next":{"title":"多态样式","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-polymorphic-style/ts-universal-attributes-polymorphic-style"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-cursor/ts-universal-attributes-cursor.md


const frontMatter = {
	title: '鼠标光标控制',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-cursor',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-universal-attributes-cursor'
};
const contentTitle = '鼠标光标控制';

const assets = {

};



const toc = [{
  "value": "cursorControl",
  "id": "cursorcontrol",
  "level": 2
}, {
  "value": "setCursor",
  "id": "setcursor",
  "level": 3
}, {
  "value": "restoreDefault",
  "id": "restoredefault",
  "level": 3
}, {
  "value": "PointerStyle",
  "id": "pointerstyle",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
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
        id: "鼠标光标控制",
        children: "鼠标光标控制"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "控制鼠标光标的显示样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(882641)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cursorcontrol",
      children: "cursorControl"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setcursor",
      children: "setCursor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setCursor(value: PointerStyle): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方法语句中可使用的全局接口，调用该接口可更改当前的鼠标光标样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#pointerstyle",
              children: "PointerStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置的鼠标样式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "restoredefault",
      children: "restoreDefault"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "restoreDefault(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方法语句中可使用的全局接口，调用此接口可将鼠标光标恢复成默认箭头样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pointerstyle",
      children: "PointerStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type PointerStyle = pointer.PointerStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "光标样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-arkts/js-apis-pointer/js-apis-pointer#pointerstyle",
              children: "pointer.PointerStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光标样式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(52259)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["直接使用cursorControl可能导致", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-global-interface#ui%E4%B8%8A%E4%B8%8B%E6%96%87%E4%B8%8D%E6%98%8E%E7%A1%AE",
        children: "UI上下文不明确"
      }), "的问题，建议使用getUIContext()获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
        children: "UIContext"
      }), "实例，并使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getcursorcontroller12",
        children: "getCursorController"
      }), "获取绑定实例的cursorControl。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过setCursor实现了鼠标光标样式的更改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { pointer } from '@kit.InputKit';\n\n@Entry\n@Component\nstruct CursorControlExample {\n  @State text: string = '';\n  controller: TextInputController = new TextInputController()\n\n  build() {\n    Column() {\n      Row()\n        .height(200)\n        .width(200)\n        .backgroundColor(Color.Green)\n        .position({ x: 60, y: 70 })\n        .onHover((flag) => {\n          if (flag) {\n            // 建议使用this.getUIContext().getCursorController().setCursor()\n            cursorControl.setCursor(pointer.PointerStyle.EAST)\n          } else {\n            // 建议使用this.getUIContext().getCursorController().restoreDefault()\n            cursorControl.restoreDefault()\n          }\n        })\n      Row()\n        .height(200)\n        .width(200)\n        .backgroundColor(Color.Blue)\n        .position({ x: 130, y: 120 })\n        .onHover((flag) => {\n          if (flag) {\n            // 建议使用this.getUIContext().getCursorController().setCursor()\n            cursorControl.setCursor(pointer.PointerStyle.WEST)\n          } else {\n            // 建议使用this.getUIContext().getCursorController().restoreDefault()\n            cursorControl.restoreDefault()\n          }\n        })\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示意图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当鼠标悬浮在蓝色区域时，显示：向西箭头光标样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(484863)/* ["default"] */.A) + "",
        width: "252",
        height: "228"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当鼠标悬浮在绿色区域时，显示：向东箭头光标样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(593346)/* ["default"] */.A) + "",
        width: "253",
        height: "227"
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
593346(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCADjAP0DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAozRXzr/wVZ1S60P/AIJ2fF66sbq5sbyDw7M0dxbytFLEdyDKspBB9waxxFZUqUqr+ym/uVznxWIVChOs1flTdvRXPoqiv5U/+Fx+MP8AocPFH/g6uv8A4uj/AIXH4w/6HDxR/wCDq6/+Lr86/wCIk0P+fEvvX+R+T/8AEXKH/QNL/wACX+R/VZRX8qf/AAuPxh/0OHij/wAHV1/8XR/wuPxh/wBDh4o/8HV1/wDF0f8AESaH/PiX3r/IP+IuUP8AoGl/4Ev8j+qyiv5U/wDhcfjD/ocPFH/g6uv/AIuj/hcfjD/ocPFH/g6uv/i6P+Ik0P8AnxL71/kH/EXKH/QNL/wJf5H9VlFfyqf8Lj8Y/wDQ4eKf/B1df/F0n/C4/GH/AEOHij/wdXX/AMXS/wCIlUP+fD+9f5B/xFyh/wBA0v8AwJf5H9VlFfyp/wDC4/GH/Q4eKP8AwdXX/wAXR/wuPxh/0OHij/wdXX/xdP8A4iTQ/wCfEvvX+Qf8Rcof9A0v/Al/kf1WUV/Kn/wuPxh/0OHij/wdXX/xdH/C4/GH/Q4eKP8AwdXX/wAXR/xEmh/z4l96/wAg/wCIuUP+gaX/AIEv8j+qyiv5U/8AhcfjD/ocPFH/AIOrr/4uj/hcfjD/AKHDxR/4Orr/AOLo/wCIk0P+fEvvX+Qf8Rcof9A0v/Al/kf1WUV/Kn/wuPxh/wBDh4o/8HV1/wDF0f8AC4/GH/Q4eKP/AAdXX/xdH/ESaH/PiX3r/IP+IuUP+gaX/gS/yP6rKK/lT/4XH4w/6HDxR/4Orr/4uj/hcfjD/ocPFH/g6uv/AIuj/iJND/nxL71/kH/EXKH/AEDS/wDAl/kf1WUV+KP/AAbk+ONe8W/tqeLrXVNe1zU7dfA9xKsV5fy3EYf7fYgMFdiN2CRn0J9a/a1RhR9K+1yXNo5jhViox5U21Z67H6Jw7nUc2wUcbCDim2rN32dhaKKK9Y9wKKKKACiiigAooooAKKKKACvnH/grR/yjd+Mn/Ytz/wDoS19HV84/8FaP+Ubvxk/7Fuf/ANCWuLMv90q/4Zfkzzs3/wBxrf4Jfkz+b2iiiv5kP44CiiigAoorpfhV4i0nwr4pa61mz+1Wpsbu3j/0GG/+y3EkDpBc/Z5mWKbypGSTy5GCttxW1CmqlRQlJRTe72Xnpqb4elGpUjCclFN2u9l5u2pX8KfDTXvHWi67qGjabPqVp4ZshqOrNCylrS23hDLszuZVzltgbYqs7YRWYYVeqXPgvxT8bPhxqx+H/wAV7XwPP4S1TSdf1TWJ/AOjeHV021iuGAulurOZ7kyRSOhS3hRnnd1jAJOK5D4seIdG8V+PtQv/AA/p7abpdw6eTA0Mdu0rLGqyTmCL91bmaQPN9ni/dQ+b5aZRFJ9vNcow+Gw1KtRrKble6V+j31+53sfSZ1keFweDo4ihiY1JTvdK/R76paepzVFBor54+UCiiigAooooAKKKKACiiigD9EP+Dab/AJPi8X/9iHc/+nCxr9wK/D//AINpv+T4vF//AGIdz/6cLGv3Ar944F/5FEPWX5n9OeGv/Ihp+sv/AEphRRRX2B94FFFFABRRRQAUUUUAFFFFABXzj/wVo/5Ru/GT/sW5/wD0Ja+jq+cf+CtH/KN34yf9i3P/AOhLXFmX+6Vf8MvyZ52b/wC41v8ABL8mfze0UUV/Mh/HAUUUUAFFFFACFAxBIBK9DjpS1j+KPiJovgu7it9U1AWssyeYoMUj5XJH8Kkdj3rM/wCF4+E/+guv/gNP/wDG6/RMr8I+N8zwkMfluUYmtRmrxnChUlCSu1eMlFpq6a0fQ9GllONqRU6dKTT2aTsdXRXKf8Lx8Kf9Bdf/AAGn/wDjdH/C8fCn/QXX/wABp/8A43Xof8QN8Rf+hFi//Cer/wDIF/2JmH/PmX/gLOrorlP+F4+FP+guv/gNP/8AG6P+F4+FP+guv/gNP/8AG6P+IG+Iv/Qixf8A4T1f/kA/sTMP+fMv/AWdXRXKf8Lx8Kf9Bdf/AAGn/wDjdH/C8fCn/QXX/wABp/8A43R/xA3xF/6EWL/8J6v/AMgH9iZh/wA+Zf8AgLOrorlP+F4+FP8AoLr/AOA0/wD8bo/4Xj4U/wCguv8A4DT/APxuj/iBviL/ANCLF/8AhPV/+QD+xMw/58y/8BZ1dFcp/wALx8Kf9Bdf/Aaf/wCN0f8AC8fCf/QXX/wGn/8AjdH/ABA3xF/6EWL/APCer/8AIB/YmYf8+Zf+As/Tv/g2m/5Pi8X/APYh3P8A6cLGv3A3V/Ob/wAERP8AgpD8Ff2O/wBqjxF4k+I3jb/hH9Fv/Ck2mW840bULzzLhru0kCbLe3kYZSJzkgDjGckV+pQ/4OR/2Lcf8lkk/8I7Xv/kGv2Pg/wAKONsNlkKVfJ8VGV3o8PV7/wCA/obw/ksNktOjiHySTlo9Hq+z1PujdRur4X/4iR/2Lf8Aoskn/hHa9/8AINH/ABEj/sW/9Fkk/wDCO17/AOQa+o/4hnxh/wBCnFf+CKv/AMgfbfXMP/z8j96/zPujdRur4X/4iR/2Lf8Aoskn/hHa9/8AINH/ABEj/sW/9Fkk/wDCO17/AOQaP+IZ8Yf9CnFf+CKv/wAgH1zD/wDPyP3r/M+6N1Ga+F/+Ikf9i3/oskn/AIR2vf8AyDX1r8DPjd4Z/aR+FOh+OfBeo/2x4X8TWgvtMvjbTW32qEkgN5cyJInIIw6g+1eNnXCueZRTjVzXBVqEZOydSnOCbteycopN+RdPEUqjtTkn6NM7OihelFeCahRRRQAV84/8FaP+Ubvxk/7Fuf8A9CWvo6vnH/grR/yjd+Mn/Ytz/wDoS1xZl/ulX/DL8medm/8AuNb/AAS/Jn83tFFFfzIfxwFFFFABRRRQB4p+07/yOWn/APYPX/0ZJXmR616b+07/AMjlp/8A2D0/9GSV5ketf9Dn0T/+TSZH/wBef/b5n7Zw/wD8i2j/AIQooor+iD2AooooAKKKKACiiigAopuG35z8uOmO9OqYtvdAFFFFUAUUUUAFFFFABX9bn/BEb/lE58CP+xXh/wDRklfyR1/W5/wRG/5ROfAj/sV4f/RklfxT9Nv/AJJ3Lv8Ar+//AEhn0nDf8afp+p9Vp90fSlpE+4PpS1/myfYBRRRQAV84/wDBWj/lG78ZP+xbn/8AQlr6Or5x/wCCtH/KN34yf9i3P/6EtcWZf7pV/wAMvyZ52b/7jW/wS/Jn83tFFFfzIfxwFFFFABRRRQB4p+07/wAjlp//AGD0/wDRkleZHrXpv7Tv/I5af/2D0/8ARkleZHrX/Q59E/8A5NJkf/Xn/wBvmftnD/8AyLaP+EKKKK/og9gKKKKACiiigAooooAKKKKACiiigAooooAKKKKACv63P+CI3/KJz4Ef9ivD/wCjJK/kjr+tz/giN/yic+BH/Yrw/wDoySv4p+m3/wAk7l3/AF/f/pDPpOG/40/T9T6rT7g+lLSJ9wfSlr/Nk+wCiiigAr5x/wCCtH/KN34yf9i3P/6EtfR1fOP/AAVo/wCUbvxk/wCxbn/9CWuLMv8AdKv+GX5M87N/9xrf4Jfkz+b2iiiv5kP44CiiigAooooA8U/ad/5HLT/+wen/AKMkrzI9a9N/ad/5HLT/APsHp/6MkrzI9a/6HPon/wDJpMj/AOvP/t8z9s4f/wCRbR/whRRRX9EHsBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAV/W5/wRG/5ROfAj/sV4f/AEZJX8kdf1uf8ERv+UTnwI/7FeH/ANGSV/FP02/+Sdy7/r+//SGfScN/xp+n6n1Wn3B9KWkT7g+lLX+bJ9gFFFFABXzj/wAFaP8AlG78ZP8AsW5//Qlr6Or5x/4K0f8AKN34yf8AYtz/APoS1xZl/ulX/DL8medm/wDuNb/BL8mfze0UUV/Mh/HAUUUUAFFFFAHin7Tv/I5af/2D0/8ARkleZHrXpv7Tv/I5af8A9g9P/RkleZHrX/Q59E//AJNJkf8A15/9vmftnD//ACLaP+EKKKK/og9gKKKKACiiigAooooAKKKKACiiigAooooAKKKKACv63P8AgiN/yic+BH/Yrw/+jJK/kjr+tz/giN/yic+BH/Yrw/8AoySv4p+m3/yTuXf9f3/6Qz6Thv8AjT9P1PqtPuD6UtIn3B9KWv8ANk+wCiiigAr5x/4K0f8AKN34yf8AYtz/APoS19HV84/8FaP+Ubvxk/7Fuf8A9CWuLMv90q/4Zfkzzs3/ANxrf4Jfkz+b2iiiv5kP44CiiigAooooA8U/ad/5HLT/APsHp/6MkrzI9a9N/ad/5HLT/wDsHp/6MkrzI9a/6HPon/8AJpMj/wCvP/t8z9s4f/5FtH/CFFFFf0QewFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABX9bn/AARG/wCUTnwI/wCxXh/9GSV/JHX9bn/BEb/lE58CP+xXh/8ARklfxT9Nv/kncu/6/v8A9IZ9Jw3/ABp+n6n1Wn3B9KWkT7g+lLX+bJ9gFFFFABXzj/wVo/5Ru/GT/sW5/wD0Ja+jq+cf+CtH/KN34yf9i3P/AOhLXFmX+6Vf8MvyZ52b/wC41v8ABL8mfze0UUV/Mh/HAUUUUAFFFFAHin7Tv/I5af8A9g9P/RkleZHrXpv7Tv8AyOWn/wDYPT/0ZJXmR61/0OfRP/5NJkf/AF5/9vmftnD/APyLaP8AhCiiiv6IPYCiiigAooooAKKKKACiiigAooooAKKKKACiiigAr+tz/giN/wAonPgR/wBivD/6Mkr+SOv63P8AgiN/yic+BH/Yrw/+jJK/in6bf/JO5d/1/f8A6Qz6Thv+NP0/U+q0+4PpS0ifcH0pa/zZPsAooooAK+cf+CtH/KN34yf9i3P/AOhLX0dXg3/BS3wFrXxX/YP+KXh3w3pt1rWuaxoMtvZWNsAZbqQlSEUEgZOD37Vx5hFywtVRV3yy/Jnn5rFywVWMd3GVvN8r0P5qKK9+/wCHV37R3/RG/HH/AIDJ/wDF0f8ADq79o7/ojfjj/wAB0/8Ai6/nX+xsd/z5l/4C/wDI/lD/AFfzL/oHn/4DL/I8Bor37/h1d+0d/wBEb8cf+A6f/F0f8Orv2jv+iN+OP/AdP/i6f9jY7/nzL/wF/wCQf6v5l/0Dz/8AAZf5HgNFe/f8Orv2jv8Aojfjj/wHT/4uj/h1d+0d/wBEb8cf+A6f/F0f2Njv+fMv/AX/AJB/q/mX/QPP/wABl/kfC37Tv/I5af8A9g9P/RkleZGvfv8AgoV+z742/Zz+K+i6P468M6r4X1a80hb2C1v0CySwGeZBIACeC0bjnH3T25rwGv8AoL+ilCUPCfJITTTVHVPR/HI/Wclo1KOApUqsXGSWqas18mFFFFf0MekFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABX9bn/BEb/lE58CP+xXh/wDRklfyR1/W5/wRG/5ROfAj/sV4f/RklfxT9Nv/AJJ3Lv8Ar+//AEhn0nDf8afp+p9Vp9wfSlpE+4PpS1/myfYBRRRQAUUUUAFFFFABRRRQAUUUUAfzo/8AB3sf+Nh/gD/snNp/6c9Sr8pa/Vr/AIO9v+Uh/gD/ALJzaf8Apz1Kvylr/ZD6Of8AybnK/wDA/wD0uZ+e5x/vk/X9EFFFFfth5oUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFf1uf8ERv+UTnwI/7FeH/ANGSV/JHX9bn/BEb/lE58CP+xXh/9GSV/FP02/8Akncu/wCv7/8ASGfScN/xp+n6n1Wn3B9KWkT7g+lLX+bJ9gFFFFABRRRQAUUUUAFFFFABRRRQB/Oj/wAHe3/KQ/wB/wBk5tP/AE56lX5S1+rX/B3t/wApD/AH/ZObT/056lX5S1/sh9HP/k3OV/4H/wClzPz3OP8AfJ+v6IKKKK/bDzQooooAKKKKACiiigAooooAKKKKACiiigAooooAK/rc/wCCI3/KJz4Ef9ivD/6Mkr+SOv63P+CI3/KJz4Ef9ivD/wCjJK/in6bf/JO5d/1/f/pDPpOG/wCNP0/U+q0+4PpS0ifdH0pa/wA2T7AKKKKACiiigAooooAKKKKACiiigD84v+CvX/BAh/8Agqt+0ToHj0fFuPwEmh+G4vD408+Ff7VMxS6ubjzvN+2Q7c/aAuzYcbM7juwPlP8A4gzpP+jkk/8ADef/AHzr9yaK/XOH/HjjzI8upZVleYOnQpK0Y+zpOyve15U23q3uzgrZXhas3UnC7fm/8z8Nv+IM6T/o5JP/AA3n/wB86P8AiDOk/wCjkk/8N5/986/cmiva/wCJmPEv/oaP/wAFUP8A5UZ/2Ng/5Pxf+Z+G3/EGdJ/0ckn/AIbz/wC+dH/EGdJ/0ckn/hvP/vnX7k0Uf8TMeJf/AENH/wCCqH/yoP7Gwf8AJ+L/AMz8Nv8AiDOk/wCjkk/8N5/986P+IM6T/o5JP/Def/fOv3Joo/4mY8S/+ho//BVD/wCVB/Y2D/k/F/5n4bf8QZ0n/RySf+G8/wDvnR/xBnSf9HJJ/wCG8/8AvnX7k0Uf8TMeJf8A0NH/AOCqH/yoP7Gwf8n4v/M/Db/iDOk/6OST/wAN5/8AfOj/AIgzpP8Ao5JP/Def/fOv3Joo/wCJmPEv/oaP/wAFUP8A5UH9jYP+T8X/AJn4bf8AEGdJ/wBHJJ/4bz/750f8QZ0n/RySf+G8/wDvnX7k0Uf8TMeJf/Q0f/gqh/8AKg/sbB/yfi/8z8Nv+IM6T/o5JP8Aw3n/AN86P+IM6T/o5JP/AA3n/wB86/cmij/iZjxL/wCho/8AwVQ/+VB/Y2D/AJPxf+Z+G3/EGdJ/0ckn/hvP/vnR/wAQZ0n/AEckn/hvP/vnX7k0Uf8AEzHiX/0NH/4Kof8AyoP7Gwf8n4v/ADPw2/4gzpP+jkk/8N5/986/XD9iD9mVv2Of2TPAfwvbXF8SN4J0xNN/tQWX2L7btZjv8nzJNn3sY3t0616zRXxfGnitxZxZh6eF4gxjrQpy5opwpxtK1r3hCL2fU6cNgaGHblRjZv1/UBRRRX56dQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf/9k=");

},
484863(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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");

},
52259(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
882641(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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