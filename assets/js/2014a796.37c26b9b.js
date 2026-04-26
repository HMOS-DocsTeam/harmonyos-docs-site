"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["400724"], {
580061(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_cross_app_data_share_one_to_many_data_share_share_config_share_config_md_201_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-cross-app-data-share-one-to-many-data-share-share-config-share-config-md-201.json
var site_docs_arkdata_cross_app_data_share_one_to_many_data_share_share_config_share_config_md_201_namespaceObject = JSON.parse('{"id":"arkdata/cross-app-data-share/one-to-many-data-share/share-config/share-config","title":"应用间配置共享 (ArkTS)","description":"场景介绍","source":"@site/docs/arkdata/cross-app-data-share/one-to-many-data-share/share-config/share-config.md","sourceDirName":"arkdata/cross-app-data-share/one-to-many-data-share/share-config","slug":"/arkdata/cross-app-data-share/one-to-many-data-share/share-config/","permalink":"/harmonyos-docs-site/arkdata/cross-app-data-share/one-to-many-data-share/share-config/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"应用间配置共享 (ArkTS)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-config","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"跨应用数据共享概述","permalink":"/harmonyos-docs-site/arkdata/cross-app-data-share/data-share-overview/"},"next":{"title":"通过标准化数据通路实现数据共享 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/cross-app-data-share/many-to-many-data-share/unified-data-channels/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/cross-app-data-share/one-to-many-data-share/share-config/share-config.md


const frontMatter = {
	title: '应用间配置共享 (ArkTS)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-config',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '应用间配置共享 (ArkTS)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "运作机制",
  "id": "运作机制",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "公共接口",
  "id": "公共接口",
  "level": 3
}, {
  "value": "配置发布方接口",
  "id": "配置发布方接口",
  "level": 3
}, {
  "value": "配置访问方接口",
  "id": "配置访问方接口",
  "level": 3
}, {
  "value": "配置发布方",
  "id": "配置发布方",
  "level": 2
}, {
  "value": "module.json5 配置",
  "id": "modulejson5-配置",
  "level": 3
}, {
  "value": "静态配置",
  "id": "静态配置",
  "level": 3
}, {
  "value": "动态配置",
  "id": "动态配置",
  "level": 3
}, {
  "value": "配置访问方",
  "id": "配置访问方",
  "level": 2
}, {
  "value": "获取配置项信息",
  "id": "获取配置项信息",
  "level": 3
}, {
  "value": "监听/取消监听配置变化",
  "id": "监听取消监听配置变化",
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
        id: "应用间配置共享-arkts",
        children: "应用间配置共享 (ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用间配置共享通过集中管理公共配置信息，在不同应用间共享配置，提升协作效率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，支持应用间配置共享。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运作机制",
      children: "运作机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用间配置共享运作机制如下所示："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "配置发布方（即数据提供方）"
          })
        }), "：负责提供默认共享配置项，并能动态修改配置项信息。当前支持静态配置和动态配置两种配置方式。\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "静态配置"
              })
            }), "：应用包在安装时提供的默认共享配置项（不依赖应用启动即生效）。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "动态配置"
              })
            }), "：配置发布方通过调用相关接口可以动态新增、删除或修改配置项（不依赖应用升级）。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "配置访问方（即数据访问方）"
          })
        }), "：可通过调用接口获取配置信息、或者监听/取消监听配置变化。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一个应用最多可以发布32个配置项，这个数量是静态配置与动态配置的总和。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下接口为应用间配置共享的相关接口。详细接口和说明，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-datashare/js-apis-data-datashare#datasharecreatedataproxyhandle20",
        children: "应用间配置共享接口"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "公共接口",
      children: "公共接口"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "createDataProxyHandle(): Promise<DataProxyHandle>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建数据代理操作句柄，可用于订阅、发布、获取等操作。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置发布方接口",
      children: "配置发布方接口"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "publish(data: ProxyData[], config: DataProxyConfig): Promise<DataProxyResult[]>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发布或修改配置项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "delete(uris: string[], config: DataProxyConfig): Promise<DataProxyResult[]>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除配置项。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置访问方接口",
      children: "配置访问方接口"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "get(uris: string[], config: DataProxyConfig): Promise<DataProxyGetResult[]>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取配置项信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(event: 'dataChange', uris: string[], config: DataProxyConfig, callback: AsyncCallback<DataProxyChangeInfo[]>): DataProxyResult[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听配置项变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(event: 'dataChange', uris: string[], config: DataProxyConfig, callback?: AsyncCallback<DataProxyChangeInfo[]>): DataProxyResult[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消监听配置项变化。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置发布方",
      children: "配置发布方"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "modulejson5-配置",
      children: "module.json5 配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置发布方需要配置module.json5文件中的crossAppSharedConfig字段，通过crossAppSharedConfig字段引用shared_config.json文件，shared_config.json为共享配置文件，定义了应用希望与其他应用共享的配置项。共享配置文件需放置在工程resources/base/profile目录下，并通过$资源访问方式引用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\":{\n    \"crossAppSharedConfig\": \"$profile:shared_config\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "共享配置文件shared_config.json的文件名\"shared_config\"可自定义，根节点名称为crossAppSharedConfig，为对象数组，标识当前共享配置项的数量。（一个应用最多可以发布32个配置项，这个数量是静态配置项与动态配置项的总和。静态配置项数量超过32时，只解析前32个符合crossAppSharedConfig字段配置说明要求的配置项，其余配置项不生效。）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "crossAppSharedConfig字段配置说明："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "共享配置项的全局唯一标识。固定格式为\"datashareproxy://{bundleName}/{path}\"，其中bundleName为配置发布方应用的bundleName，path可随意填写，但同一应用内不允许重复。uri最大长度为256字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "共享配置项的值，最大长度为4096字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "allowList"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["允许访问该共享配置项的应用程序列表。数组最大长度为256，超过256的部分不生效。数组中每个元素为应用的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/common-problem-of-application#%E4%BB%80%E4%B9%88%E6%98%AFappidentifier",
              children: "appIdentifier"
            }), "，单个appIdentifier为只包含数字的字符串，最大长度为128字节，超过128字节的appIdentifier不会生效。可使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#bundlemanagergetbundleinfoforself",
              children: "getBundleInfoForSelf"
            }), "接口来获取当前应用的appIdentifier。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"crossAppSharedConfig\": [\n        {\n            \"uri\": \"datashareproxy://com.example.example/key1\",\n            \"value\": \"SHARED_CONFIG_DEMO1\",\n            \"allowList\": [\"6917573629901742292\"]\n        },\n        {\n            \"uri\": \"datashareproxy://com.example.example/key2\",\n            \"value\": \"SHARED_CONFIG_DEMO2\",\n            \"allowList\": [\"6917573298752100864\", \"6917573298752100864\"]\n        }\n    ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "静态配置",
      children: "静态配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用包在安装时提供的默认共享配置项，即在应用安装过程中，预先定义并设置好的共享配置项，这些配置项不依赖应用的启动即可生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "动态配置",
      children: "动态配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可通过调用publish接口或delete接口，动态新增、删除或修改配置项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过调用publish接口发布或修改配置项。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function publishSharedConfig() {\n  dataShare.createDataProxyHandle().then((dataProxyHandle) => {\n    const newConfigData: dataShare.ProxyData[] = [\n      {\n        uri: 'datashareproxy://com.samples.shareconfig/config1',\n        value: 'Value1',\n        allowList: [\n          'appIdentifier1',\n          'appIdentifier2'\n        ]\n      },\n      {\n        uri: 'datashareproxy://com.samples.shareconfig/config2',\n        value: 'Value2',\n        allowList: [\n          'appIdentifier3',\n          'appIdentifier4'\n        ]\n      }\n    ];\n    const config: dataShare.DataProxyConfig = {\n      type: dataShare.DataProxyType.SHARED_CONFIG,\n    };\n    dataProxyHandle.publish(newConfigData, config).then((results: dataShare.DataProxyResult[]) => {\n      results.forEach((result) => {\n        console.info(`URI: ${result.uri}, Result: ${result.result}`);\n      });\n    }).catch((error: BusinessError) => {\n      console.error('Error publishing config:', error);\n    });\n  }).catch((error: BusinessError) => {\n    console.error('Error creating DataProxyHandle:', error);\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过调用delete接口删除配置项。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function deleteSharedConfig() {\n  dataShare.createDataProxyHandle().then((dataProxyHandle) => {\n    const urisToDelete: string[] = [\n      'datashareproxy://com.samples.shareconfig/config1',\n      'datashareproxy://com.samples.shareconfig/config2'\n    ];\n    const config: dataShare.DataProxyConfig = {\n      type: dataShare.DataProxyType.SHARED_CONFIG,\n    };\n    dataProxyHandle.delete(urisToDelete, config).then((results: dataShare.DataProxyResult[]) => {\n      results.forEach((result) => {\n        console.info(`URI: ${result.uri}, Result: ${result.result}`);\n      });\n    }).catch((error: BusinessError) => {\n      console.error('Error deleting config:', error);\n    });\n  }).catch((error: BusinessError) => {\n    console.error('Error creating DataProxyHandle:', error);\n  });\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置访问方",
      children: "配置访问方"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置访问方可以通过调用get、on或off接口来获取配置信息或监听/取消监听配置变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取配置项信息",
      children: "获取配置项信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用get接口获取配置信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function getSharedConfig() {\n  dataShare.createDataProxyHandle().then((dataProxyHandle) => {\n    const urisToGet: string[] = [\n      'datashareproxy://com.samples.shareconfig/config1',\n      'datashareproxy://com.samples.shareconfig/config2'\n    ];\n    const config: dataShare.DataProxyConfig = {\n      type: dataShare.DataProxyType.SHARED_CONFIG,\n    };\n    dataProxyHandle.get(urisToGet, config).then((results: dataShare.DataProxyGetResult[]) => {\n      results.forEach((result) => {\n        console.info(`URI: ${result.uri}, Result: ${result.result}, AllowList: ${result.allowList}`);\n      });\n    }).catch((error: BusinessError) => {\n      console.error('Error getting config:', error);\n    });\n  }).catch((error: BusinessError) => {\n    console.error('Error creating DataProxyHandle:', error);\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "监听取消监听配置变化",
      children: "监听/取消监听配置变化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用on接口监听配置变化，使用off接口取消监听配置变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function watchConfigChanges() {\n  dataShare.createDataProxyHandle().then((dsProxyHelper) => {\n    const uris: string[] = [\n      'datashareproxy://com.samples.shareconfig/config1',\n      'datashareproxy://com.samples.shareconfig/config2'\n    ];\n    const config: dataShare.DataProxyConfig = {\n      type: dataShare.DataProxyType.SHARED_CONFIG,\n    };\n    const callback = (err: BusinessError<void>, changes: dataShare.DataProxyChangeInfo[]): void => {\n      if (err) {\n        console.error('err:', err);\n      } else {\n        changes.forEach((change) => {\n          console.info(`Change Type: ${change.type}, URI: ${change.uri}, Value: ${change.value}`);\n        });\n      }\n    };\n    // 监听配置变化\n    const listenResults: dataShare.DataProxyResult[] = dsProxyHelper.on('dataChange', uris, config, callback);\n    listenResults.forEach((result) => {\n      console.info(`URI: ${result.uri}, Result: ${result.result}`);\n    });\n    // 取消监听配置变化\n    const unListenResults: dataShare.DataProxyResult[] = dsProxyHelper.off('dataChange', uris, config, callback);\n    unListenResults.forEach((result) => {\n      console.info(`URI: ${result.uri}, Result: ${result.result}`);\n    });\n  }).catch((error: BusinessError) => {\n    console.error('Error creating DataProxyHandle:', error);\n  });\n}\n"
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