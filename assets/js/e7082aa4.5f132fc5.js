"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["891048"], {
222979(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_pen_kit_guide_pen_introduction_c_pen_image_feature_picker_c_pen_image_feature_picker_c_md_e70_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-pen-kit-guide-pen-introduction-c-pen-image-feature-picker-c-pen-image-feature-picker-c-md-e70.json
var site_docs_system_hardware_pen_kit_guide_pen_introduction_c_pen_image_feature_picker_c_pen_image_feature_picker_c_md_e70_namespaceObject = JSON.parse('{"id":"system-hardware/pen-kit-guide/pen-introduction-c/pen-image-feature-picker-c/pen-image-feature-picker-c","title":"接入全局取色","description":"接入全局取色功能，用户可以使用手指或者手写笔操作取色器在屏幕上移动，在目标位置抬起手指/抬起手写笔，会生成该位置色值对应的图像信息。","source":"@site/docs/system-hardware/pen-kit-guide/pen-introduction-c/pen-image-feature-picker-c/pen-image-feature-picker-c.md","sourceDirName":"system-hardware/pen-kit-guide/pen-introduction-c/pen-image-feature-picker-c","slug":"/system-hardware/pen-kit-guide/pen-introduction-c/pen-image-feature-picker-c/","permalink":"/harmonyos-docs-site/system-hardware/pen-kit-guide/pen-introduction-c/pen-image-feature-picker-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"接入全局取色","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pen-image-feature-picker-c","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"接入手写交互","permalink":"/harmonyos-docs-site/system-hardware/pen-kit-guide/pen-features/pen-stylus-interaction/"},"next":{"title":"接入报点预测","permalink":"/harmonyos-docs-site/system-hardware/pen-kit-guide/pen-introduction-c/pen-point-prediction-c/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/pen-kit-guide/pen-introduction-c/pen-image-feature-picker-c/pen-image-feature-picker-c.md


const frontMatter = {
	title: '接入全局取色',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pen-image-feature-picker-c',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '接入全局取色';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "限制与约束",
  "id": "限制与约束",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "接入步骤",
  "id": "接入步骤",
  "level": 2
}, {
  "value": "在 CMake 脚本中链接动态库",
  "id": "在-cmake-脚本中链接动态库",
  "level": 3
}, {
  "value": "导入模块",
  "id": "导入模块",
  "level": 3
}, {
  "value": "示例代码",
  "id": "示例代码",
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
    p: "p",
    pre: "pre",
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
        id: "接入全局取色",
        children: "接入全局取色"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接入全局取色功能，用户可以使用手指或者手写笔操作取色器在屏幕上移动，在目标位置抬起手指/抬起手写笔，会生成该位置色值对应的图像信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用中拉起全局取色，效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(587088)/* ["default"] */.A) + "",
        width: "525",
        height: "328"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持获取当前屏幕上选中位置的色值和色域空间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制与约束",
      children: "限制与约束"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "全局取色能力支持设备：Tablet、PC/2in1，并且从5.1.1(19)版本开始，新增支持设备：Phone（只支持部分机型）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-c-api/pen-module/pen-imagefeaturepicker-c/pen-imagefeaturepicker-c#hms_gcp_startcolorpicker",
              children: "HMS_GCP_StartColorPicker"
            }), " (int32_t initialPosX, int32_t initialPosY, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-c-api/pen-module/pen-imagefeaturepicker-c/pen-imagefeaturepicker-c#hms_gcp_onresult",
              children: "HMS_GCP_OnResult"
            }), " onResultCallback, void *userData)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动取色器。此API用于启动取色器，在取色器移动时不显示色值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-c-api/pen-module/pen-imagefeaturepicker-c/pen-imagefeaturepicker-c#hms_gcp_startcolorpickerwithcolorvalue",
              children: "HMS_GCP_StartColorPickerWithColorValue"
            }), " (int32_t initialPosX, int32_t initialPosY, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-c-api/pen-module/pen-imagefeaturepicker-c/pen-imagefeaturepicker-c#hms_gcp_onresult",
              children: "HMS_GCP_OnResult"
            }), " onResultCallback, void *userData)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动取色器。此API用于启动取色器，在取色器移动时显示色值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接入步骤",
      children: "接入步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在-cmake-脚本中链接动态库",
      children: "在 CMake 脚本中链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libace_napi.z.so libcolorpicker_ndk.z.so  libhilog_ndk.z.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"color_picker/native_gcp_api.h\"\n#include \"hilog/log.h\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "native_gcp_api.h提供HMS_GCP_StartColorPicker()和HMS_GCP_StartColorPickerWithColorValue()两种方式启动全局取色功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过调用HMS_GCP_StartColorPicker()，实现启动取色器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(767935)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该启动方法不支持实时显示色值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void onSuccessCallback(void *userData, HMS_GCP_PickedColorInfo pickedColorInfo, const int32_t code) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0x0000, \"penkit\", \"picked code is: %{public}d\", code);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0x0000, \"penkit\", \"picked Red is: %{public}d\", pickedColorInfo.color.red);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0x0000, \"penkit\", \"picked Green is:%{public}d \", pickedColorInfo.color.green);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0x0000, \"penkit\", \"picked Blue is: %{public}d\", pickedColorInfo.color.blue);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0x0000, \"penkit\", \"picked Alpha is:%{public}d \", pickedColorInfo.color.alpha);\n    delete userData;\n}\nvoid startPick() {\n    int32_t posX = 200;\n    int32_t posY = 200;\n    void *userData = nullptr;\n    HMS_GCP_StartColorPicker(posX, posY, onSuccessCallback, userData);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过调用HMS_GCP_StartColorPickerWithColorValue()，实现启动取色器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(567834)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该启动方法支持实时显示色值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void onSuccessCallback(void *userData, HMS_GCP_PickedColorInfo pickedColorInfo, const int32_t code) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0x0000, \"penkit\", \"picked code is: %{public}d\", code);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0x0000, \"penkit\", \"picked Red is: %{public}d\", pickedColorInfo.color.red);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0x0000, \"penkit\", \"picked Green is:%{public}d \", pickedColorInfo.color.green);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0x0000, \"penkit\", \"picked Blue is: %{public}d\", pickedColorInfo.color.blue);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0x0000, \"penkit\", \"picked Alpha is:%{public}d \", pickedColorInfo.color.alpha);\n    delete userData;\n}\nvoid startPickWithColorValue() {\n    int32_t posX = 200;\n    int32_t posY = 200;\n    void *userData = nullptr;\n    HMS_GCP_StartColorPickerWithColorValue(posX, posY, onSuccessCallback, userData);\n}\n"
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
567834(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAFZklEQVRo3u2af0zUZRzHX/66o+MOOU6DQ4FJgfyIH9MGGHKogMjCzSScOiwtI7J001mbra1MXEtNM1cB02xBg00TS1MMFIQyBKaAISDEOBAODAERkUOU/ji7PMGLsdpBPu/ttnvueZ7Pffe89nk+P/YdR8wnAwiNNm0dL85gdEqAEWCEBBgBRkiAEWAsJKmEDRGz/xVTywK9WBboBVLJmAUzcbQ8SPKKUGI1bvg4qbBTWNF0vXtY+y43tZOUW2oCeP+bC1DIJBRsTkdXrxNgRqrEpcHEatxQ2lhR3dzBzrUhw6/E0gpNxvFBnihkEvLLrg4JZfeKeQR7OT7S3oGcClLOlgkwiUuDWRfth9LGirScSnZlFXP4SrPJmu/WzmOWuz37T/zG9rwKk7n65jaT8eJnZwCg8ZvOwOFNJnNpOZV0dOsJ8HQwC+bx9hiphNQ1YTwfMMMIZVXSScNh1zWZLFXbyQE4fblp0NyDktmr0PhNp6Orl5qmTtym2aK0saKosgWAnt5+49p9R0vZkHbGOD6/baVZYI8NmPCZziwOcmWyXErK8Uu8/nU22Cig6ybxoX4krw8btCd9cyTpRBrHRwpqidn7w99x6oUAbGQSI+SrX8ajBJYcyDVea5/FLRAxxpxyyms5lO9KdXMHu7KK8ZvpQuqroaSeqeTG7T6D5+i6uNbZM2ivjUyCh4vdIxOEH0sbAJg2VS6yspHota9+AsDBWc2hhDDcnGwJalJzqlQLwLHzdYbrRipBrVYBoKvXPdKjViWd5FR5IxmFFYx1WTz4Oziryd8YhZuTLQXlTcQkZREf5Dko00peH2aIC2bS3+TVEej77xLganpdbZnrCXM9UcqldHTrBZh/kt9MF6On1DR2sig5B/R9I7Y3x0uNj+uUQb+vX+IPQJW2neyLDQKMOS0P8iYpYR6T5VLqdF1o9pykp/Om2Wr9CYn5x527+wR2MikAse6O7FgbQk1jJwv3nQKgvUdPYrivAGNOGRdr+LAjkPK6NjSfnoCum6QmRCGTTuLXatPrylFpDcDtvn6zNrta2ui6/33A3VBE9vXfRX/v3pjrAFjuKtP3se5gPjnVDaDvI9z3aRYHuTIAyB7yDHdHJQB37t4btvlgDzUA3jNUpMQEsjytgFut18cMGIs2MXPKa0Hfh4Ozmi/WaJgsl3K8sI7Mot8fyI0VRAcZqvlXIr1JXh0BQFFlC0q5dEi7cc89Q6jvdACa/ugmeo4r2xb4YG2vEh4z0qxs1cHThlRZew1/WwWV78egkEmo0rbjOFVOfLQPhRU64tN+oaxaO8ietb2Kl0I9UNpYkV2iZXX6Oa4kvsjGmFlYSycxfvw4Y0LwV1IgPOYhLQv0MoGi+TjT4EH2KnYs8idj00I8XOyo0razPCWXkO3HuFTXRpC3mrwt0QbvsVGYQMmICyFitjNdPX1sziyhWatj67eGRud8PyesJBOMxWtRZYvx0znK0miLeUzCfH8+ejkYW7nUBErue7HM83cyrjv6cy1vHCmmpcEQvH3f+YbUhCjiwj2Jj/bhlv4Om9LzADjzVqSx37XnyAXK73vUzqxiAFIvX+Vdjadp8TpKe2UT8Ir8wBJ/XKJrJ3bWUxRWthC197ixfvGd9iRzvNRkl2jZlXmBtzPO0n3DtPWSWVKLrrUHhXQSK9MKjHvrr98mJtCVz78vY8vhApM952qb6b7RjbfjFKobOmjv7iWvqtE47+WgouRKK4XaNupa2y3N5ew4i77wd79pOVThOVT8GJaspNA7Nqp7M7LwC39DQAFGDgX+D1AsH/yFBBgBRkiAEWCEBBghAUaAERJgBBih/1gTga3iGEad8v4EFTP/Ye4wQC4AAAAASUVORK5CYII=");

},
767935(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAFZklEQVRo3u2af0zUZRzHX/66o+MOOU6DQ4FJgfyIH9MGGHKogMjCzSScOiwtI7J001mbra1MXEtNM1cB02xBg00TS1MMFIQyBKaAISDEOBAODAERkUOU/ji7PMGLsdpBPu/ttnvueZ7Pffe89nk+P/YdR8wnAwiNNm0dL85gdEqAEWCEBBgBRkiAEWAsJKmEDRGz/xVTywK9WBboBVLJmAUzcbQ8SPKKUGI1bvg4qbBTWNF0vXtY+y43tZOUW2oCeP+bC1DIJBRsTkdXrxNgRqrEpcHEatxQ2lhR3dzBzrUhw6/E0gpNxvFBnihkEvLLrg4JZfeKeQR7OT7S3oGcClLOlgkwiUuDWRfth9LGirScSnZlFXP4SrPJmu/WzmOWuz37T/zG9rwKk7n65jaT8eJnZwCg8ZvOwOFNJnNpOZV0dOsJ8HQwC+bx9hiphNQ1YTwfMMMIZVXSScNh1zWZLFXbyQE4fblp0NyDktmr0PhNp6Orl5qmTtym2aK0saKosgWAnt5+49p9R0vZkHbGOD6/baVZYI8NmPCZziwOcmWyXErK8Uu8/nU22Cig6ybxoX4krw8btCd9cyTpRBrHRwpqidn7w99x6oUAbGQSI+SrX8ajBJYcyDVea5/FLRAxxpxyyms5lO9KdXMHu7KK8ZvpQuqroaSeqeTG7T6D5+i6uNbZM2ivjUyCh4vdIxOEH0sbAJg2VS6yspHota9+AsDBWc2hhDDcnGwJalJzqlQLwLHzdYbrRipBrVYBoKvXPdKjViWd5FR5IxmFFYx1WTz4Oziryd8YhZuTLQXlTcQkZREf5Dko00peH2aIC2bS3+TVEej77xLganpdbZnrCXM9UcqldHTrBZh/kt9MF6On1DR2sig5B/R9I7Y3x0uNj+uUQb+vX+IPQJW2neyLDQKMOS0P8iYpYR6T5VLqdF1o9pykp/Om2Wr9CYn5x527+wR2MikAse6O7FgbQk1jJwv3nQKgvUdPYrivAGNOGRdr+LAjkPK6NjSfnoCum6QmRCGTTuLXatPrylFpDcDtvn6zNrta2ui6/33A3VBE9vXfRX/v3pjrAFjuKtP3se5gPjnVDaDvI9z3aRYHuTIAyB7yDHdHJQB37t4btvlgDzUA3jNUpMQEsjytgFut18cMGIs2MXPKa0Hfh4Ozmi/WaJgsl3K8sI7Mot8fyI0VRAcZqvlXIr1JXh0BQFFlC0q5dEi7cc89Q6jvdACa/ugmeo4r2xb4YG2vEh4z0qxs1cHThlRZew1/WwWV78egkEmo0rbjOFVOfLQPhRU64tN+oaxaO8ietb2Kl0I9UNpYkV2iZXX6Oa4kvsjGmFlYSycxfvw4Y0LwV1IgPOYhLQv0MoGi+TjT4EH2KnYs8idj00I8XOyo0razPCWXkO3HuFTXRpC3mrwt0QbvsVGYQMmICyFitjNdPX1sziyhWatj67eGRud8PyesJBOMxWtRZYvx0znK0miLeUzCfH8+ejkYW7nUBErue7HM83cyrjv6cy1vHCmmpcEQvH3f+YbUhCjiwj2Jj/bhlv4Om9LzADjzVqSx37XnyAXK73vUzqxiAFIvX+Vdjadp8TpKe2UT8Ir8wBJ/XKJrJ3bWUxRWthC197ixfvGd9iRzvNRkl2jZlXmBtzPO0n3DtPWSWVKLrrUHhXQSK9MKjHvrr98mJtCVz78vY8vhApM952qb6b7RjbfjFKobOmjv7iWvqtE47+WgouRKK4XaNupa2y3N5ew4i77wd79pOVThOVT8GJaspNA7Nqp7M7LwC39DQAFGDgX+D1AsH/yFBBgBRkiAEWCEBBghAUaAERJgBBih/1gTga3iGEad8v4EFTP/Ye4wQC4AAAAASUVORK5CYII=");

},
587088(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958478-bf13b186824bace999b6ae8d8e5c968e.png");

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