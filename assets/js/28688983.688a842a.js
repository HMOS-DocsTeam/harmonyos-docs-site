"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["897226"], {
507232(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_module_management_ide_add_new_ability_ide_add_new_ability_md_286_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-module-management-ide-add-new-ability-ide-add-new-ability-md-286.json
var site_docs_ide_project_ide_module_management_ide_add_new_ability_ide_add_new_ability_md_286_namespaceObject = JSON.parse('{"id":"ide-project/ide-module-management/ide-add-new-ability/ide-add-new-ability","title":"在模块中添加Ability","description":"Ability是应用/元服务所具备的能力的抽象，应用的一个Module可以包含一个或多个Ability，元服务仅包含一个Ability。应用/元服务先后提供了两种应用模型：","source":"@site/docs/ide-project/ide-module-management/ide-add-new-ability/ide-add-new-ability.md","sourceDirName":"ide-project/ide-module-management/ide-add-new-ability","slug":"/ide-project/ide-module-management/ide-add-new-ability/","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-add-new-ability/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"在模块中添加Ability","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-add-new-ability","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"基于Dockerfile部署ohpm-repo私仓","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-ohpm-dockerfile/"},"next":{"title":"创建服务卡片","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-service-widget/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-module-management/ide-add-new-ability/ide-add-new-ability.md


const frontMatter = {
	title: '在模块中添加Ability',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-add-new-ability',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = '在模块中添加Ability';

const assets = {

};



const toc = [{
  "value": "Stage模型添加Ability",
  "id": "stage模型添加ability",
  "level": 2
}, {
  "value": "在模块中添加UIAbility",
  "id": "在模块中添加uiability",
  "level": 3
}, {
  "value": "在模块中添加Extension Ability",
  "id": "在模块中添加extension-ability",
  "level": 3
}, {
  "value": "FA模型添加Ability",
  "id": "fa模型添加ability",
  "level": 2
}, {
  "value": "创建Particle Ability",
  "id": "创建particle-ability",
  "level": 3
}, {
  "value": "创建Feature Ability",
  "id": "创建feature-ability",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "在模块中添加ability",
        children: "在模块中添加Ability"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ability是应用/元服务所具备的能力的抽象，应用的一个Module可以包含一个或多个Ability，元服务仅包含一个Ability。应用/元服务先后提供了两种应用模型："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FA（Feature Ability）模型： API 7开始支持的模型，已经不再主推。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Stage模型：HarmonyOS 3.1 Developer Preview版本开始新增的模型，是目前主推且会长期演进的模型。在该模型中，由于提供了AbilityStage、WindowStage等类作为应用组件和Windows窗口的“舞台”，因此称这种应用模型为Stage模型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Stage模型包含两种Ability组件类型："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["UIAbility组件：包含UI界面，提供展示UI的能力，主要用于和用户交互。详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-overview",
              children: "UIAbility组件概述"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["ExtensionAbility组件：提供特定场景的扩展能力，满足更多的使用场景。详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/extensionability-overview",
              children: "ExtensionAbility概述"
            }), "。元服务暂不支持使用ExtensionAbility组件。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.1.0 Beta2版本开始，在API 23及以上工程，支持Car设备添加RemoteNotificationAbility。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "stage模型添加ability",
      children: "Stage模型添加Ability"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在模块中添加uiability",
      children: "在模块中添加UIAbility"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["选中对应的模块，单击鼠标右键，选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "New > Ability"
            })
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["设置Ability名称，选择是否在设备主屏幕上显示该功能的启动图标，单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Finish"
            })
          }), "完成Ability创建。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(23712)/* ["default"] */.A) + "",
            width: "975",
            height: "652"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在模块中添加extension-ability",
      children: "在模块中添加Extension Ability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在工程中选中对应的模块，单击鼠标右键，选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "New > Extension Ability"
            })
          }), "，选择不同的场景类型 。当前仅Application工程支持创建Extension Ability。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["若创建的模块类型为entry或feature，支持创建以下五种Extension Ability：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "EmbeddedUIExtensionAbility"
                  })
                }), "：用于提供", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ability-kit/stage-model-development/stage-model-application-components/extensionability-overview/embeddeduiextensionability",
                  children: "跨进程界面嵌入"
                }), "的能力。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Backup********Ability"
                  })
                }), "：用于提供", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/core-file-kit/app-file/app-file-backup-restore/app-file-backup-overview",
                  children: "备份及恢复应用数据"
                }), "的能力。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "WorkScheduler"
                  })
                }), "：用于提供", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/background-task-kit/work-scheduler",
                  children: "延迟任务"
                }), "的相关能力。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "RemoteNotificationAbility"
                  })
                }), "：用于提供获取场景化消息数据和生命周期销毁的回调的通知能力，当前仅支持在Phone、Tablet、2in1、Car设备中使用。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Driver"
                  })
                }), "：用于提供", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/system-hardware/driver-development-kit/development-of-basic-drivers/driverextensionability",
                  children: "驱动相关扩展框架"
                }), "。仅在当前工程的设备类型只含有2in1设备时，支持创建该类型。"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["若创建的模块类型为HAR或HSP，支持创建以下两种Extension Ability：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "EmbeddedUIExtensionAbility"
                  })
                }), "：用于提供", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ability-kit/stage-model-development/stage-model-application-components/extensionability-overview/embeddeduiextensionability",
                  children: "跨进程界面嵌入"
                }), "的能力。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "WorkScheduler"
                  })
                }), "：用于提供", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/background-task-kit/work-scheduler",
                  children: "延迟任务"
                }), "的相关能力。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(742631)/* ["default"] */.A) + "",
            width: "794",
            height: "380"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置Ability名称，单击Finish完成Extension Ability创建。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(640277)/* ["default"] */.A) + "",
            width: "965",
            height: "643"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fa模型添加ability",
      children: "FA模型添加Ability"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS工程与JS工程在FA模型中添加Ability的操作方式一致，本节内容以ArkTS工程为例介绍在模块中添加Ability。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建particle-ability",
      children: "创建Particle Ability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["选中对应的模块，单击鼠标右键，选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "New > Ability"
            })
          }), " ，然后选择对应的Data Ability/Service Ability模板。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(455297)/* ["default"] */.A) + "",
            width: "758",
            height: "507"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据选择的Ability模板，设置Ability的基本信息。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Ability name"
              })
            }), "：Ability类名称，由大小写字母、数字和下划线组成。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Language"
              })
            }), "：该Ability使用的开发语言。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Finish"
            })
          }), "完成Ability的创建，可以在工程目录对应的模块中查看和编辑Ability。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建feature-ability",
      children: "创建Feature Ability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["选中对应的模块，单击鼠标右键，选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "New > Ability"
            })
          }), " ，然后选择对应的Page Ability模板。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(773127)/* ["default"] */.A) + "",
            width: "758",
            height: "507"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据选择的Ability模板，设置Ability的基本信息。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Ability name"
              })
            }), "：Ability类名称，由大小写字母、数字和下划线组成。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Launcher ability"
              })
            }), "：表示该Ability在终端桌面上是否有启动图标，一个HAP可以有多个启动图标，来启动不同的FA。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Language"
              })
            }), "：该Ability使用的开发语言。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Finish"
            })
          }), "完成Ability的创建，可以在工程目录对应的模块中查看和编辑Ability。"]
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
742631(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833697-57ea6a2b3fee642866628d445bf9ceaf.png");

},
773127(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833701-52df7db6d95b3f2e1591ed642d91170f.png");

},
455297(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913774-52df7db6d95b3f2e1591ed642d91170f.png");

},
23712(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753721-22a07c664825fbb864de7202cdbacfcc.png");

},
640277(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913772-37f3dd9cfe985fc25a8794ad02425c95.png");

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