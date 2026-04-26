"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["816002"], {
618672(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_test_service_deveco_testing_get_familiar_get_familiar_md_2ee_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-test-service-deveco-testing-get-familiar-get-familiar-md-2ee.json
var site_docs_test_service_deveco_testing_get_familiar_get_familiar_md_2ee_namespaceObject = JSON.parse('{"id":"test-service/deveco-testing/get-familiar/get-familiar","title":"快速上手","description":"DevEco Testing是一款专项集成测试工具，提供了多项测试能力。DevEco Testing将测试能力以测试服务卡片的形式呈现给用户，无需复杂的配置，即可一键执行测试任务，同时提供了测试报告和分析，辅助开发者发现应用和产品问题，提升应用质量。","source":"@site/docs/test-service/deveco-testing/get-familiar/get-familiar.md","sourceDirName":"test-service/deveco-testing/get-familiar","slug":"/test-service/deveco-testing/get-familiar/","permalink":"/harmonyos-docs-site/test-service/deveco-testing/get-familiar/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"快速上手","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/get-familiar","kit":"testing","last_updated":"2026-04-20"},"sidebar":"docs","previous":{"title":"wukong稳定性工具使用指导","permalink":"/harmonyos-docs-site/test-service/indev_cmd/wukong-guidelines/"},"next":{"title":"专项测试","permalink":"/harmonyos-docs-site/test-service/deveco-testing/specialized-testing/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/test-service/deveco-testing/get-familiar/get-familiar.md


const frontMatter = {
	title: '快速上手',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/get-familiar',
	kit: 'testing',
	last_updated: '2026-04-20'
};
const contentTitle = '快速上手';

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
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "快速上手",
        children: "快速上手"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Testing是一款专项集成测试工具，提供了多项测试能力。DevEco Testing将测试能力以测试服务卡片的形式呈现给用户，无需复杂的配置，即可一键执行测试任务，同时提供了测试报告和分析，辅助开发者发现应用和产品问题，提升应用质量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "环境要求"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["（1）PC （Windows、Mac），安装DevEco Testing客户端。", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/download/deveco-testing",
        children: "DevEco Testing工具下载地址"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Windows"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "操作系统：Windows 10/11 64 位；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内存：推荐使用16GB及以上（可用内存大于8G）；"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["处理器：", (0,jsx_runtime.jsx)(_components.a, {
        href: "mailto:i7-10700@2.9GHz",
        children: "i7-10700@2.9GHz"
      }), "或者同等性能的型号；"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "硬盘：可用硬盘空间100GB以上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Mac"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "操作系统：MacOS（arm）15&26，MacOS（x86）15；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内存：推荐使用16GB及以上（可用内存大于8G）；"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["处理器：", (0,jsx_runtime.jsx)(_components.a, {
        href: "mailto:i7-10700@2.9GHz",
        children: "i7-10700@2.9GHz"
      }), "及以上或Apple silicon M系列；"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "硬盘：可用硬盘空间100GB以上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(425974)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果可用硬盘空间低于30GB，建议清理磁盘空间后再创建任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（2）被测设备要求："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备版本HarmonyOS 5.0及以上版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保手机性能状态正常，包括网络连接通畅、非高温、非低电量（推荐>80%），以及其他可能对性能表现产生影响的变量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "取消各类锁屏密码，确保自动化能完成上滑解锁。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用图标在桌面可见（自动化会翻页查找不同桌面，但不会打开文件夹）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对待测应用进行必要的预置操作，包括权限授予、用户协议确认、账号登录等，以保障自动化遍历可顺利进行。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "快速开始"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选择应用时，支持选择测试设备上已安装的应用或者安装新的应用，即在测试设备上安装新的应用包。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(668570)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1352",
        height: "850"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(279809)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Q1：HarmonyOS 5.0及以上版本设备已连接，DevEco Testing为什么无法识别设备？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A1：请在cmd窗口中执行hdc list targets，确认设备正常连接。正常连接如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(908643)/* ["default"] */.A) + "",
        width: "433",
        height: "146"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如返回为空，则表示USB连接没有建立，需排查PC机USB驱动、USB线缆连接、手机是否开启USB调试模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若hdc list targets能识别到设备，DevEco Testing未识别到设备，请将DevEco Testing安装路径中的hdc路径配置至PATH环境变量中，即可正常识别。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(10721)/* ["default"] */.A) + "",
        width: "616",
        height: "137"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "测试任务"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(705194)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1352",
        height: "850"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、用户在DevEco Testing工具导航栏 —【测试任务】中可以查看当前正在执行和历史执行的测试任务。用户可通过顶部操作栏，按任务名/备注、服务类型、任务状态筛选测试任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、测试任务分为5种状态（执行、完成、失败、停止、取消），用户可以通过下拉选择任务状态筛选过滤界面上所展示的测试任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "测试任务状态描述如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行：测试任务执行中"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完成：测试任务执行完成"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "失败：测试任务执行失败（通常为任务初始化发生异常）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "停止：测试任务过程被手动中止"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消：测试任务未执行取消（通常出现在客户端异常退出时）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3、对于无效测试报告，用户可以定期清理相关报告。点击删除报告，选择要删除的报告，系统将删除本页面内的测试报告。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "测试报告"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Testing执行测试任务结束后会生成测试报告，测试报告整体分为两个部分，上半部分为测试报告概览，下半部分为测试报告详情。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、测试报告概览包含应用信息、参数配置、执行日志等，可点击查询相关信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(791744)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1124",
        height: "183"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、不同的测试服务报告详情不同，以下图的应用上架预检（本地）为例，测试报告详情由应用信息、测试总览、各项检测数据组成。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(911206)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1904",
        height: "829"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3、测试报告支持手动备注，方便测试人员标记任务，并提供报告导出功能，点击报告页面“打开目录”按钮，可导出html格式的报告文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(914963)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1352",
        height: "850"
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
425974(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
10721(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
279809(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
911206(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002492343700-f8c698f5dd49d82e2e3b901423d51c51.png");

},
668570(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002535542241-2308c3f9fd25eb94523a98ccb06967d7.png");

},
914963(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002569032989-4b55f4c569a722941055a98cf18a0a1f.png");

},
791744(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002492503690-03619d38ea4065ecdc8842d63b5b8338.png");

},
705194(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002535862401-d2a03595ad7b537c324f213e9300a335.png");

},
908643(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002510820560-a54baec818d461d3fb50663014a88361.png");

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