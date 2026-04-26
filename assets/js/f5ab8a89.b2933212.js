"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["22758"], {
324(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_basic_property_ts_universal_attributes_z_order_ts_universal_attributes_z_order_md_f5a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-ts-component-general-attributes-basic-property-ts-universal-attributes-z-order-ts-universal-attributes-z-order-md-f5a.json
var site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_basic_property_ts_universal_attributes_z_order_ts_universal_attributes_z_order_md_f5a_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-z-order/ts-universal-attributes-z-order","title":"Z序控制","description":"组件的Z序，设置同一容器中兄弟组件的堆叠顺序。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-z-order/ts-universal-attributes-z-order.md","sourceDirName":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-z-order","slug":"/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-z-order/ts-universal-attributes-z-order","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-z-order/ts-universal-attributes-z-order","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Z序控制","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-z-order","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-universal-attributes-z-order"},"sidebar":"ref","previous":{"title":"浮层","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-overlay/ts-universal-attributes-overlay"},"next":{"title":"隐私遮罩","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-obscured/ts-universal-attributes-obscured"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-z-order/ts-universal-attributes-z-order.md


const frontMatter = {
	title: 'Z序控制',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-z-order',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-universal-attributes-z-order'
};
const contentTitle = 'Z序控制';

const assets = {

};



const toc = [{
  "value": "zIndex",
  "id": "zindex",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（设置组件堆叠顺序）",
  "id": "示例1设置组件堆叠顺序",
  "level": 3
}, {
  "value": "示例2（动态修改zIndex属性）",
  "id": "示例2动态修改zindex属性",
  "level": 3
}, {
  "value": "示例3（设置不同容器内组件的zIndex属性）",
  "id": "示例3设置不同容器内组件的zindex属性",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "z序控制",
        children: "Z序控制"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件的Z序，设置同一容器中兄弟组件的堆叠顺序。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(173053)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "zindex",
      children: "zIndex"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "zIndex(value: number): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件的堆叠顺序。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同一容器中兄弟组件显示层级关系。zIndex值越大，显示层级越高，即zIndex值大的组件会覆盖在zIndex值小的组件上方。当不涉及新增或减少兄弟节点，动态改变zIndex时会在zIndex改变前层级顺序的基础上进行稳定排序。"
          })]
        })
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
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1设置组件堆叠顺序",
      children: "示例1（设置组件堆叠顺序）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过zIndex设置组件堆叠顺序。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ZIndexExample {\n  build() {\n    Column() {\n      Stack() {\n        // Stack会重叠组件，默认后定义的在最上面，具有较高zIndex值的元素在zIndex较小的元素前面\n        // Text1设置zIndex值为2\n        Text('1, zIndex(2)')\n          .size({ width: '40%', height: '30%' }).backgroundColor(0xbbb2cb)\n          .zIndex(2)\n        // Text2设置zIndex值为1\n        Text('2, default zIndex(1)')\n          .size({ width: '70%', height: '50%' }).backgroundColor(0xd2cab3).align(Alignment.TopStart)\n          .zIndex(1)\n        // Text3设置zIndex值为0\n        Text('3, zIndex(0)')\n          .size({ width: '90%', height: '80%' }).backgroundColor(0xc1cbac).align(Alignment.TopStart)\n          .zIndex(0)\n      }.width('100%').height(200)\n    }.width('100%').height(200)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stack容器内子组件不设置zIndex的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(829001)/* ["default"] */.A) + "",
        width: "377",
        height: "190"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stack容器子组件设置zIndex后的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(816953)/* ["default"] */.A) + "",
        width: "380",
        height: "186"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2动态修改zindex属性",
      children: "示例2（动态修改zIndex属性）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例使用Button组件动态修改zIndex属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ZIndexExample {\n  @State zIndex_: number = 0\n\n  build() {\n    Column() {\n      // 点击Button改变zIndex后，在点击Button前的层级顺序上根据zIndex进行稳定排序。\n      Button(\"change Text2 zIndex\")\n        .onClick(() => {\n          this.zIndex_ = (this.zIndex_ + 1) % 3;\n        })\n      Stack() {\n        // Text1设置zIndex值为1\n        Text('1, zIndex(1)')\n          .size({ width: '70%', height: '50%' }).backgroundColor(0xd2cab3).align(Alignment.TopStart)\n          .zIndex(1)\n        // Text2设置zIndex默认值为0\n        Text('2, default zIndex(0), now zIndex:' + this.zIndex_)\n          .size({ width: '90%', height: '80%' }).backgroundColor(0xc1cbac).align(Alignment.TopStart)\n          .zIndex(this.zIndex_)\n      }.width('100%').height(200)\n    }.width('100%').height(200)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不点击Button修改zIndex值的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(848209)/* ["default"] */.A) + "",
        width: "531",
        height: "248"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击Button动态修改zIndex，使Text1和Text2的zIndex相等，因为在点击Button前的层级顺序上根据zIndex进行稳定排序，层级顺序不发生改变。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(758800)/* ["default"] */.A) + "",
        width: "531",
        height: "248"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击Button动态修改zIndex，使Text2的zIndex大于Text1，层级顺序发生改变。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(586052)/* ["default"] */.A) + "",
        width: "530",
        height: "248"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3设置不同容器内组件的zindex属性",
      children: "示例3（设置不同容器内组件的zIndex属性）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例在不同容器内设置zIndex属性。其中，Text1、Text2和Text3在不同的Stack容器内。虽然Text3的zIndex值最小，但Text1、Text2仍无法按照预期显示在Text3的上方。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ZIndexExample {\n  build() {\n    Stack() {\n      Stack() {\n        // Text1设置zIndex值为2\n        Text('1, zIndex(2)')\n          .size({ width: '40%', height: '30%' }).backgroundColor(0xbbb2cb)\n          .zIndex(2)\n        // Text2设置zIndex值为1\n        Text('2, default zIndex(1)')\n          .size({ width: '70%', height: '50%' }).backgroundColor(0xd2cab3).align(Alignment.TopStart)\n          .zIndex(1)\n      }.width('100%').height(200)\n\n      Stack() {\n        // zIndex在不同容器的组件中无法生效，Text3会显示在最上方\n        // Text3设置zIndex值为0\n        Text('3, zIndex(0)')\n          .size({ width: '90%', height: '80%' }).backgroundColor(0xc1cbac).align(Alignment.TopStart)\n          .zIndex(0)\n      }.width('100%').height(200)\n    }.width('100%').height(200)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(935601)/* ["default"] */.A) + "",
        width: "439",
        height: "224"
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
848209(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479485-2a12d36c37d563f6c769695255804898.png");

},
586052(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439531-c51ed2367e1e82b8bf21b6eb8920b1f2.png");

},
935601(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
829001(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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mRPXXLuNkMA2BaPQMB7d8qAbT546zgPJx0/2mbWUwmW2MCglnb5mBwNpWt/H6dPb5tnm8/lischMEFAKO8fmL/uyL25sI3H69GlJIKDlOF/U668/fd11Z0IdGs0k2NrupRkIsF1K2dnZdooY01Pp6lu85Rve+ozbfvqnfvI93vMdFODc2Oxe7MUf2VqLKLbBwMHB4U/8xI+9zuu9+ku85IuXUmxL4qqrrvq3A5Bt7mcw+Xt/8vMqS7ID0BoBAcKh8D133/cNX/8tH/VRH3Xy1AmJ52DzQJoQD2AsEBiACuL5MzSeLSB4tgkMggCgIZ7JQIHgmQwJCQkB0VrZ27u0vb2otULAxLMJCuQwDMujYXvnRETjqquu+ld68PUPv/mGl0BIE3QAAMg29zOY/L0/+QWVA1whQSDulynwOI6zWW8jBQ9kg3gWNZ7NYKhYqEFCBfH8mecmnpt5puQ5BIhnMiQAAoMV4QQEggTxgshYIK666qp/jQdf//Cbb3gJhDRBBwBA5TkYDOaZBAUEgCEjIjNns962JJ6DUeM5FBDPZEgsCDCYF0Ygns08kAGBkAEovEACQYDAkJmJBZIAgUA8k8EgwG52hipXXXXVfwCAynMzJAAC8WyCAkQEIPE8BJUXSFAQkCCo/AvMCyLAvKgCAAMQIhD3EwDm2cRlUhGFq6666j8GQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOWqq6666j8XQOW5GQDzTOaqq6666t8FoPIAAmjBJBsDUwooXHXVVVe9SIQLAIbAIACg8twqnmHhHgpKEFddddVV/woC82wAledkT9JkBiHUYAJx1VVXXfUikcEgHgig8pwyk5CQbTAOE1x11VVXvUhUIjCIBwCQbR6gZV7au08apR5aIgiuuuqqq14k7ktsLs4gS8YFAQCyzXMz9zNXXXXVVf8KAhAABgEAUHk+xP3EVVddddW/jXgmgMpVV1111X8ugMpVV1111X8ugMpVV1111X8ugMpVV1111X8ugMpVV1111X8ugMpVV1111X8ugMpVV1111X8ugMpVV1111X8ugH8EmOkkjosBIjsAAAAASUVORK5CYII=");

},
173053(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
816953(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959484-eb5a84f78fe574935a087d89e4ae4384.png");

},
758800(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799836-d1224cba98907cab9c090b14290cf090.png");

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