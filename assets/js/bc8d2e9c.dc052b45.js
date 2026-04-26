"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["933862"], {
197583(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_fa_model_development_fa_model_application_components_pageability_pageability_lifecycle_pageability_lifecycle_md_bc8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-fa-model-development-fa-model-application-components-pageability-pageability-lifecycle-pageability-lifecycle-md-bc8.json
var site_docs_ability_kit_fa_model_development_fa_model_application_components_pageability_pageability_lifecycle_pageability_lifecycle_md_bc8_namespaceObject = JSON.parse('{"id":"ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-lifecycle/pageability-lifecycle","title":"PageAbility的生命周期","description":"概述","source":"@site/docs/ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-lifecycle/pageability-lifecycle.md","sourceDirName":"ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-lifecycle","slug":"/ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-lifecycle/","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-lifecycle/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"PageAbility的生命周期","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pageability-lifecycle","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"PageAbility组件配置","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-configuration/"},"next":{"title":"PageAbility的启动模式","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-launch-type/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-lifecycle/pageability-lifecycle.md


const frontMatter = {
	title: 'PageAbility的生命周期',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pageability-lifecycle',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'PageAbility的生命周期';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "开发指导",
  "id": "开发指导",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
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
        id: "pageability的生命周期",
        children: "PageAbility的生命周期"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PageAbility生命周期是PageAbility被调度到INACTIVE、ACTIVE、BACKGROUND等各个状态的统称。PageAbility生命周期流转及状态说明如图1、表1所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " PageAbility生命周期流转"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(385611)/* ["default"] */.A) + "",
        width: "702",
        height: "282"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " PageAbility生命周期状态说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "生命周期状态"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "生命周期状态说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UNINITIALIZED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未初始状态，为临时状态，PageAbility被创建后会由UNINITIALIZED状态进入INITIAL状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INITIAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化状态，也表示停止状态，表示当前PageAbility未运行，PageAbility被启动后由INITIAL态进入INACTIVE状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INACTIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "失去焦点状态，表示当前窗口已显示但是无焦点状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "前台激活状态，表示当前窗口已显示，并获取焦点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BACKGROUND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "后台状态，表示当前PageAbility退到后台，PageAbility在被销毁后由BACKGROUND状态进入INITIAL状态，或者重新被激活后由BACKGROUND状态进入ACTIVE状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以在app.js/app.ets中实现生命周期相关回调函数，PageAbility生命周期相关回调函数见下表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " PageAbility生命周期回调接口说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onCreate()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ability第一次启动时调用onCreate方法，开发者可以在该方法里做一些应用初始化工作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onDestroy()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用退出，销毁Ability对象前调用onDestroy方法，开发者可以在该方法里做一些回收资源、清空缓存等应用退出前的准备工作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onActive()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ability切换到前台，并且已经获取焦点时调用onActive方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onInactive()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ability失去焦点时调用onInactive方法，Ability在进入后台状态时会先失去焦点，再进入后台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onShow()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ability由后台不可见状态切换到前台可见状态调用onShow方法，此时用户在屏幕可以看到该Ability。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onHide()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ability由前台切换到后台不可见状态时调用onHide方法，此时用户在屏幕看不到该Ability。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onSaveData()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当系统需要回收页面内存或页面配置变更时调用，用于保存页面的临时状态数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onRestoreData()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当页面从回收状态恢复时调用，用于恢复之前保存的页面状态数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PageAbility生命周期回调与生命周期状态的关系如下图所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " PageAbility生命周期回调与生命周期状态的关系"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(770243)/* ["default"] */.A) + "",
        width: "322",
        height: "623"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(67722)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PageAbility的生命周期回调均为同步接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "目前app.js环境中仅支持onCreate和onDestroy回调，app.ets环境支持全量生命周期回调。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发指导",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面通过一个完整的示例展示FA模型PageAbility生命周期的使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在app.ets文件中实现Ability生命周期回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// app.ets示例代码如下：\nimport commonEvent from '@ohos.commonEvent';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nconst TAG = \"Fa:MainAbility:\";\nconst listPush = \"Fa_MainAbility_\";\n\nclass Test {\n  onCreate() {\n    console.info(TAG, `onCreate`);\n  }\n\n  onDestroy() {\n    console.info(TAG, `onDestroy`);\n    // 发送事件通知Ability已销毁\n    commonEvent.publish(\"Fa_MainAbility_onDestroy\", (err: BusinessError) => {\n      console.info(TAG, listPush, `onDestroy`, `err: ${JSON.stringify(err)}`);\n    });\n  }\n\n  onActive() {\n    console.info(TAG, `onActive`);\n  }\n\n  onInactive() {\n    console.info(TAG, `onInactive`);\n  }\n\n  onShow() {\n    console.info(TAG, `onShow`);\n  }\n\n  onHide() {\n    console.info(TAG, `onHide`);\n  }\n\n  onContinue(wantParam: Record<string, Object>) {\n    console.info(TAG, `onContinue`);\n    return true;\n  }\n\n  onNewWant(want: Record<string, Object>, launchParam: Record<string, number>) {\n    console.info(TAG, `onNewWant`);\n  }\n\n  onSaveData(saveData: Object) {\n    console.info(TAG, `onSaveData`);\n    return true;\n  }\n  \n  onRestoreData(restoreData: Object) {\n    console.info(TAG, `onRestoreData`);\n  }\n}\n\nexport default new Test()\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Index.ets页面提供一个\"terminateSelf\"按钮，点击后调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/fa-model/js-apis-ability-featureability/js-apis-ability-featureability#featureabilityterminateself7-1",
            children: "featureAbility.terminateSelf"
          }), "接口关闭Ability，从而触发onDestroy生命周期回调。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.ets示例代码如下：\nimport ability_featureAbility from '@ohos.ability.featureAbility';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'FA Model Lifecycle Demo';\n\n  // 点击terminateSelf按钮关闭自己\n  terminateSelf() {\n    console.info(`Index: terminateSelf called`);\n    ability_featureAbility.terminateSelf().then((data) => {\n      console.info(`Index: terminateSelf success data = : ${JSON.stringify(data)}`);\n    }).catch((err: BusinessError) => {\n      console.info(`Index: terminateSelf err = ${JSON.stringify(err)}`);\n    });\n  }\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(30)\n          .fontWeight(FontWeight.Bold)\n          .margin({ bottom: 20 })\n\n        Text('点击下方按钮关闭Ability')\n          .fontSize(18)\n          .margin({ bottom: 20 })\n\n        Button('terminateSelf')\n          .fontSize(20)\n          .width(200)\n          .height(50)\n          .onClick(() => {\n            this.terminateSelf();\n          })\n      }\n      .width('100%')\n      .padding(20)\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "运行验证生命周期流程。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "回调函数"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "触发时机"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "典型使用场景"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "onCreate"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Ability第一次启动时"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "应用初始化、资源加载"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "onActive"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Ability切换到前台且获取焦点"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "刷新UI、恢复动画"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "onInactive"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Ability失去焦点"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "暂停动画、保存临时数据"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "onShow"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Ability由后台切换到前台可见"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "显示UI、准备用户交互"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "onHide"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Ability由前台切换到后台不可见"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "隐藏UI、释放显示资源"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "onDestroy"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Ability被销毁前"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "回收资源、清空缓存"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "onSaveData"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "系统需要回收页面时"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "保存页面状态、存储临时数据"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "onRestoreData"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "页面从回收状态恢复时"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "恢复页面状态、重新加载数据"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过运行上述示例，开发者可以观察到完整的生命周期回调流程："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "应用启动时依次调用：onCreate → onActive"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "点击按钮调用terminateSelf后依次调用：onInactive → onHide → onDestroy"
          }), "\n"]
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
67722(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
385611(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437557-a50066f9e24217248976f1f00d0684c4.png");

},
770243(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957512-908ed8743e734eb0f2ecb1e8e28599ee.png");

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