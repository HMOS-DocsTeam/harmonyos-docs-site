"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["657042"], {
622535(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_core_file_kit_app_file_app_file_backup_restore_app_data_migration_guidelines_app_data_migration_overview_app_data_migration_overview_md_238_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-core-file-kit-app-file-app-file-backup-restore-app-data-migration-guidelines-app-data-migration-overview-app-data-migration-overview-md-238.json
var site_docs_core_file_kit_app_file_app_file_backup_restore_app_data_migration_guidelines_app_data_migration_overview_app_data_migration_overview_md_238_namespaceObject = JSON.parse('{"id":"core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-overview/app-data-migration-overview","title":"应用数据迁移功能介绍","description":"使用场景","source":"@site/docs/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-overview/app-data-migration-overview.md","sourceDirName":"core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-overview","slug":"/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-overview/","permalink":"/harmonyos-docs-site/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"应用数据迁移功能介绍","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-data-migration-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用克隆适配指导","permalink":"/harmonyos-docs-site/core-file-kit/app-file/app-file-backup-restore/app-file-clone/"},"next":{"title":"适配流程","permalink":"/harmonyos-docs-site/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/adaptation-process/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-overview/app-data-migration-overview.md


const frontMatter = {
	title: '应用数据迁移功能介绍',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-data-migration-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '应用数据迁移功能介绍';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "数据迁移机制",
  "id": "数据迁移机制",
  "level": 2
}, {
  "value": "应用沙箱数据迁移机制",
  "id": "应用沙箱数据迁移机制",
  "level": 3
}, {
  "value": "公共媒体库中数据迁移机制",
  "id": "公共媒体库中数据迁移机制",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "应用数据迁移功能介绍",
        children: "应用数据迁移功能介绍"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "终端设备从HarmonyOS 3.1 Release API 9及之前版本（简称HarmonyOS）升级到HarmonyOS NEXT Developer Preview1及之后版本（简称HarmonyOS NEXT）时，原HarmonyOS中运行的APK应用，升级后需要切换为HarmonyOS NEXT中的HarmonyOS应用。APK应用的部分数据需要转换并迁移到指定位置后，才能被HarmonyOS应用访问。HarmonyOS NEXT提供了“数据迁移框架”和“备份恢复框架”，为开发者提供应用数据的迁移和转换能力。开发者完成适配，APK应用切换为HarmonyOS应用后，可继承原APK应用中适配HarmonyOS应用的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下图所示，应用需要的数据，包含云端服务器中的数据，本地应用沙箱中的数据和本地公共媒体库中的数据。为了应用的数据可以继承，开发者需要保证云端数据定义兼容APK应用和HarmonyOS应用，确保系统升级后同一账号下的数据可识别。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(902978)/* ["default"] */.A) + "",
        width: "1532",
        height: "622"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "数据迁移机制",
      children: "数据迁移机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用沙箱数据迁移机制",
      children: "应用沙箱数据迁移机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "终端设备从HarmonyOS升级到HarmonyOS NEXT后，APK应用沙箱数据被搬迁到中间目录。针对应用沙箱数据，HarmonyOS NEXT提供“数据迁移框架”统一调度应用数据迁移任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用数据迁移任务需要执行的步骤包括：应用安装，数据迁移和数据恢复。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "应用安装步骤："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "“数据迁移框架”向华为应用市场发送HarmonyOS应用下载和安装请求。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "华为应用市场下载并安装HarmonyOS应用。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "数据迁移步骤："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在HarmonyOS应用安装完成之后，“数据迁移框架”将应用沙箱数据从中间目录搬迁到备份恢复目录。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "数据恢复步骤："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在应用数据搬迁到备份恢复目录后，“数据迁移框架”向“备份恢复框架”发送应用数据恢复请求。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "“备份恢复框架”拉起应用的“BackupExtensionAbility”独立进程，启动应用数据恢复。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "应用通过“BackupExtensionAbility”从备份恢复目录加载APK应用的数据，处理后保存到HarmonyOS应用沙箱中，完成应用数据恢复。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "“备份恢复框架”在应用数据恢复完成后，清空备份恢复目录。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "后续HarmonyOS应用通过访问HarmonyOS应用沙箱获取应用的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(440175)/* ["default"] */.A) + "",
        width: "1512",
        height: "594"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "公共媒体库中数据迁移机制",
      children: "公共媒体库中数据迁移机制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["公共媒体库中的数据，在终端设备从HarmonyOS升级到HarmonyOS NEXT后，会整体搬迁直接继承。应用可以使用HarmonyOS NEXT提供的API，访问公共媒体库中的数据。媒体库的使用指导可以参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/medialibrary-kit/photoaccesshelper-overview",
        children: "媒体文件管理服务"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(102947)/* ["default"] */.A) + "",
        width: "851",
        height: "350"
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
902978(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798616-e2ee6e9ee26b16b686b2bb9ccf7d4b27.png");

},
440175(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438311-d3cb8b088635d69d77ca70a33bf2afa8.png");

},
102947(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958266-75c73c92709305b082e36f6d8e18f0bf.png");

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