"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["367894"], {
834526(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_previewer_01_ide_previewer_profile_manager_ide_previewer_profile_manager_md_543_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-previewer-01-ide-previewer-profile-manager-ide-previewer-profile-manager-md-543.json
var site_docs_ide_previewer_01_ide_previewer_profile_manager_ide_previewer_profile_manager_md_543_namespaceObject = JSON.parse('{"id":"ide-previewer-01/ide-previewer-profile-manager/ide-previewer-profile-manager","title":"Profile Manager","description":"由于真机设备型号众多，不同设备型号的屏幕分辨率可能各不相同。因此，在HarmonyOS应用/元服务开发过程中，为了适配多种设备型号，可能需要查看不同设备上的界面显示效果。对此，DevEco Studio的预览器提供了Profile Manager功能，支持开发者自定义预览设备Profile（包含分辨率和语言），从而可以通过定义不同的预览设备Profile，查看HarmonyOS应用/元服务在不同设备上的预览显示效果。当前支持自定义设备分辨率及系统语言。","source":"@site/docs/ide-previewer-01/ide-previewer-profile-manager/ide-previewer-profile-manager.md","sourceDirName":"ide-previewer-01/ide-previewer-profile-manager","slug":"/ide-previewer-01/ide-previewer-profile-manager/","permalink":"/harmonyos-docs-site/ide-previewer-01/ide-previewer-profile-manager/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Profile Manager","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-previewer-profile-manager","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"查看ArkUI预览效果","permalink":"/harmonyos-docs-site/ide-previewer-01/ide-previewer-arkui/"},"next":{"title":"查看多端设备预览效果","permalink":"/harmonyos-docs-site/ide-previewer-01/ide-previewer-multi-profile/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-previewer-01/ide-previewer-profile-manager/ide-previewer-profile-manager.md


const frontMatter = {
	title: 'Profile Manager',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-previewer-profile-manager',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = 'Profile Manager';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "profile-manager",
        children: "Profile Manager"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于真机设备型号众多，不同设备型号的屏幕分辨率可能各不相同。因此，在HarmonyOS应用/元服务开发过程中，为了适配多种设备型号，可能需要查看不同设备上的界面显示效果。对此，DevEco Studio的预览器提供了Profile Manager功能，支持开发者自定义预览设备Profile（包含分辨率和语言），从而可以通过定义不同的预览设备Profile，查看HarmonyOS应用/元服务在不同设备上的预览显示效果。当前支持自定义设备分辨率及系统语言。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["定义设备后，可以在Previewer右上角，单击", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(238596)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "18",
        height: "18"
      }), "按钮，打开Profile管理器，切换预览设备。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(758579)/* ["default"] */.A) + "",
        width: "844",
        height: "537"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["同时，Profile Manager还支持多设备预览功能，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-previewer-01/ide-previewer-multi-profile",
        children: "查看多端设备预览效果"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以自定义一款Phone设备为例，介绍设备Profile Manager的使用方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在预览器界面，打开Profile Manager界面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(989088)/* ["default"] */.A) + "",
            width: "227",
            height: "28"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Profile Manager界面，单击****+ New Profile****按钮，添加设备。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(951155)/* ["default"] */.A) + "",
            width: "336",
            height: "383"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Create Profile"
            })
          }), "界面，填写新增设备的信息，如", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Profile ID"
            })
          }), "（设备型号）、", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Device type"
            })
          }), "（设备类型）、", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Resolution"
            })
          }), "（分辨率）和", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Language and region"
            })
          }), "（语言和区域）等。其中Device type只能选择module.json5中deviceTypes字段已定义的设备。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(165492)/* ["default"] */.A) + "",
            width: "333",
            height: "592"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["设备信息填写完成后，单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OK"
            })
          }), "完成创建。"]
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
165492(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752621-3243af132132cec54bbf451fd16bc522.png");

},
989088(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAAAcCAYAAACTSgiAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAdRSURBVHhe7ZxrTxZHFMdp0n6GJv0A/TYiWG0iMV4aIIq34AUREw1gjCRVDCFYlFDFgJQgaFBCFLmES4igqBAVihJQE7UvBKLSQupp/kMG5zkzu88++8wiW/bFLyxnzpyd2Z3/zOzZhZR3795RxBIpKRR6eJ8iwkMKN6xl+MAOI7xPEeEhEqNCWAd1WNsdEUtcMXZ3d9PVq1fpypUroQJtRtt5f5yArzqoebzVCvoZifH/gasYMUAfPnxIMzMzNDc3Fwj8nLaYnJykO3fueBIkfOAbxkGNfoax3RE6rmLErBukEAE/p01evHgh+sDtHPjAN6yDOqztjojFVYzYBnHx2Iaf0zboA7dxpE9YB3VY2x0RSyTGNSTGJ0+exMDLE/VzorGxkc6cOUN79+6l/Px8On/+PPX19Wl+iWI7Lu+nE7xeUPgW46WBT/RzzQLlNP5DTcOftHLYUAYf+PLyRMV47949ysvLoyNHjohjXu5EsmKcmpqikZGRZdR6b968ocrKSgGOedyVwtRuExhY69atExQWFtKtW7eMoEz6JTIYR0dH6dixY7Rz505xTdra2ujatWt09uxZEevChQtaHS8EETczM5M2b97sCfjy+k5gHBw9epQuXryolal0dHTQ8ePHY66vbzFKkfX9+UHAy6VdipaXexVjT0+PEKAcHBLYUMb9OcmKETeDnxt2KURp+5qCNLXbhCpGDLCCggIjKPMjxl27dlFZWZlmB4ODg3Tw4EGxmvGyeNiOiz7hvr569UqMIcnr1681XwBfr9cBk0RWVparGN++fUsnT57Urq9vMWLVM4mQAx/4cruEn1PS3t5Oubm5mhA4Bw4cELMMr6/2gds4bmLk58Ng5UKUfC1BmtptAjceqx7E5jZYUAYf+HodhOXl5eLacLvKgwcPxHXykuGWmOLeuHGDnj596juuFOOjR49i7p9TX72KUU528cSIMvjwc/oWI7ahUozvZ+eoe+wjlXbOC/onPtDM7BcxmraxbmIcGhqiDRs2aIPdCfjyLaTaB27jfG0x4vURbpAbra2tWj2Jqd1OYBvKB7cJ+MCX253AgL1//75m52AFKy0t1exOmOIePnyYWlpafMflYrx+/bq1lRHk5OTEiHFgYIBOnz4ds3qjTzi3FTFKmoc/0fdFnykljyirYYEy/1gQxz+W/Es94/FXTn5OycTEhHgmSEtL0wa9BGXwgS+vr/aB2ziJihF2Lki/QgTnzp3TzsPBDoDXk5ja7UQQYsQzHSZE+XtnZyfdvXs3hrGxMVGGSWX//v1aDBNOcTHYKyoqfMflYsRP7qNiQ4w4T6BirOydF8IDGy8vLttTqxeF7dt8ot9657V6XsQoL/KzZ8/o1KlTlJqaujwwcQwbylRfE8mKEe8gIRaJuhWylcBBkmjfvn20fv16TYToa0ZGhmvSytRuJ4IQY29vL+3YsWP5dzzD7dmzJ4ba2lpRhuzn9u3btRgmnOJu2rRJ2P3G5c+M+Ml9VJIVI+pKpM26GH/t+CLGny7pYvwmj6iq358YkSHDTDI8PCx+x1YOzzDFxcXiGDaUwcctm5asGOMBESYjRAn6tGXLFk2MEChWBO6vkki7gxDjy5cvRVvddiiSuro6OnHihGY34RTXtE1NJK4UI7c7kawYTVgXIyjrnqfv8pcEmd2wQL/UL21Tfyj+TC2PP2r+HH5OyfT0NDU0NIgkDt4t9ff3L5fhGDaUwQe+vL7aB27juIlRJhAkSB7AjhVStZeUlGhxEwWJKL463rx5U/PjmNrtRBBiBBiAcpVyA+8Hq6urNbsTpriIwa9LInG9iFHdwiYrRmxTZcZW2qyKUU3gPJ76QCXtf1P674u08fKC2L7+9X7Jz08CB9y+fZueP38ujjEL4j0TLjjAsZwZ4QNfXl/tA7dx3MTIVyo5kE3PeU5JpERAalzGq6+v18pNmNrtRFBi7OrqEltquWsxUVNTI7aW3O5GEHHdxIgkDkSDpI5NMSJWYM+MQb/aqKqqWk7By0EukwE4hg1l8IEvr6/2gds4q0mMQGZQud0JU7tN4MYH9WoDYLClp6eLSUTNTI6Pj4sJFGVe3g1zbMd1EyPK1HtqS4z8nloV40q89MfH23gWwOdPeOmLJAbAMWwogw+vx/vAbZzVJsZEMbXbhDrQgnjpDzBZZmdni7q7d+8WSRUcFxUViccKt0nADZtx3cQoV0YJkjvJitGEVTGu5OdwSJA0NzfToUOHBDj2mjRJVozbtm2LERyeIWFHllW144YhK8pjrwSmdptQxRjE53AqWLXwZ2l4vperGVaZrVu3UlNTk+bvFVtxg/ocDuAzNy9itPY5nC34OW2TrBjDgNd248ar8PJE/fyAJBUmVG5PFj9xeT+d4PWCIhLjGhJjxOrGVYzRHxeHg7C2OyIWVzHKf7sxOzuricgW/Jy2iP7tRkTYcBUjWKv/kCqs8H5FhIe4YlxL8IEdRnifIsJDJEYFPrDDCO9TRHiIxBgRsUr4DwiZUXd2i+htAAAAAElFTkSuQmCC");

},
758579(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912682-d2237b4cd8e2353833a0d9f78c809ee6.png");

},
951155(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832603-f2e5b83db924ea7c1dd6e42097c47848.png");

},
238596(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAA3UlEQVQ4jc2TLQ6EMBCFH5t1EASGhFPgoGdogqjE9w6cCYGr4BQIBDdAVBIIklU7abfNZrOpYFTfTPNlfiOt9YUA9ggBCQp6fjrO88S2baTzPLfiwzAAAIQQ30Fd12Hfd9J1XUNKSRClFMVMmFOaCQGA4zi8EKUUZecF/Ws/g4QQ4JyT5pxbpTk9atsWWmvSZVlaMN8bAKJQC+lk1Pc91nUlXVUVGGNYlgXjOJI/jmOaphdkfn4bYwzTNGGeZ8vfNA3t2f1OxAFlWWbpoigAuKeSJAnSNCUdbGr369EL8D1NosnhNh8AAAAASUVORK5CYII=");

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