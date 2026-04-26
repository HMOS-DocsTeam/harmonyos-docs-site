"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["136007"], {
741517(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_health_service_kit_guide_health_harmonyos_health_app_dev_health_datasource_manage_health_datasource_manage_md_20a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-health-service-kit-guide-health-harmonyos-health-app-dev-health-datasource-manage-health-datasource-manage-md-20a.json
var site_docs_health_service_kit_guide_health_harmonyos_health_app_dev_health_datasource_manage_health_datasource_manage_md_20a_namespaceObject = JSON.parse('{"id":"health-service-kit-guide/health-harmonyos/health-app-dev/health-datasource-manage/health-datasource-manage","title":"管理数据源","description":"场景介绍","source":"@site/docs/health-service-kit-guide/health-harmonyos/health-app-dev/health-datasource-manage/health-datasource-manage.md","sourceDirName":"health-service-kit-guide/health-harmonyos/health-app-dev/health-datasource-manage","slug":"/health-service-kit-guide/health-harmonyos/health-app-dev/health-datasource-manage/","permalink":"/harmonyos-docs-site/health-service-kit-guide/health-harmonyos/health-app-dev/health-datasource-manage/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"管理数据源","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-datasource-manage","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"管理用户授权","permalink":"/harmonyos-docs-site/health-service-kit-guide/health-harmonyos/health-app-dev/health-add-permissions/"},"next":{"title":"运动健康采样数据","permalink":"/harmonyos-docs-site/health-service-kit-guide/health-harmonyos/health-app-dev/health-data-manage/health-samplepoint-manage/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/health-service-kit-guide/health-harmonyos/health-app-dev/health-datasource-manage/health-datasource-manage.md


const frontMatter = {
	title: '管理数据源',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-datasource-manage',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '管理数据源';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发前检查",
  "id": "开发前检查",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "插入数据源",
  "id": "插入数据源",
  "level": 3
}, {
  "value": "读取数据源",
  "id": "读取数据源",
  "level": 3
}, {
  "value": "更新数据源",
  "id": "更新数据源",
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
    li: "li",
    p: "p",
    pre: "pre",
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
        id: "管理数据源",
        children: "管理数据源"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据源提供了应用或者设备的信息，每一个运动健康数据必须关联数据源信息，通过DataSourceId进行关联。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(417870)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DataSourceId在插入数据源信息时由平台生成，无法更改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoreinsertdatasource",
              children: "insertDataSource"
            }), "(dataSource: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#datasourcebase",
              children: "DataSourceBase"
            }), "): Promise<string>"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["插入数据源，入参为数据源基类", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#datasourcebase",
              children: "DataSourceBase"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstorereaddatasource",
              children: "readDataSource"
            }), "(request: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#datasourcereadrequest",
              children: "DataSourceReadRequest"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#datasource",
              children: "DataSource"
            }), "[]>"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询数据源，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#datasourcereadrequest",
              children: "DataSourceReadRequest"
            }), "设置查询条件，可按DataSourceId/包名/设备UniqueId查询数据源。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoreupdatedatasource",
              children: "updateDataSource"
            }), "(dataSource: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#datasource",
              children: "DataSource"
            }), "): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新数据源，其中数据源的dataSourceId和uniqueId字段无法更新。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发前检查",
      children: "开发前检查"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["完成", (0,jsx_runtime.jsx)(_components.a, {
          href: "/health-service-kit-guide/health-harmonyos/health-preparations/health-apply",
          children: "申请运动健康服务"
        }), "与", (0,jsx_runtime.jsx)(_components.a, {
          href: "/health-service-kit-guide/health-harmonyos/health-preparations/health-configuration-client-id",
          children: "配置Client ID"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["接口首次调用前，需先使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoreinit",
          children: "init"
        }), "方法进行初始化。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["需先通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/health-service-kit-guide/health-harmonyos/health-app-dev/health-add-permissions#%E7%94%A8%E6%88%B7%E6%8E%88%E6%9D%83",
          children: "用户授权"
        }), "接口引导用户授权，用户授权任意数据类型权限后，才有权限调用数据源相关接口。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["错误码请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/health-service-api/errorcode-healthservice/errorcode-healthservice",
          children: "ArkTS API错误码"
        }), "，常见问题请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-faqs",
          children: "Health Service Kit常见问题"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "插入数据源",
      children: "插入数据源"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.导入运动健康服务功能模块及相关公共模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { healthStore } from '@kit.HealthServiceKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.创建数据源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let dataSource: healthStore.DataSourceBase = {\n  deviceInfo: {\n    uniqueId: 'test',\n    name: 'test', // 插入数据源时此字段必填\n    category: healthStore.DeviceCategory.WEARABLE_BAND, // 插入数据源时此字段必填\n    productId: '0554', // 插入数据源时此字段必填\n    model: 'lotana',\n    manufacturer: 'HUAWEI',\n    mac: 'testDeviceMac',\n    sn: 'testDeviceSn',\n    hardwareVersion: '1',\n    softwareVersion: '2',\n    firmwareVersion: '3',\n    udid: ''\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["3.调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoreinsertdatasource",
        children: "insertDataSource"
      }), "方法执行插入请求，并处理返回结果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n  const dataSourceId = await healthStore.insertDataSource(dataSource);\n  hilog.info(0x0000, 'testTag', `Succeeded in inserting dataSource, the dataSourceId is ${dataSourceId}.`);\n} catch (err) {\n  hilog.error(0x0000, 'testTag', `Failed to insert dataSource. Code: ${err.code}, message: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "读取数据源",
      children: "读取数据源"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.导入运动健康服务功能模块及相关公共模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { healthStore } from '@kit.HealthServiceKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.创建数据源读取请求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let readSourceRequest: healthStore.DataSourceReadRequest = {\n  deviceUniqueId: 'testudidupdate'\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["3.调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstorereaddatasource",
        children: "readDataSource"
      }), "方法执行查询请求，并处理返回结果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n  let dataSources = await healthStore.readDataSource(readSourceRequest);\n  dataSources.forEach((dataSource) => {\n    hilog.info(0x0000, 'testTag', `Succeeded in reading dataSource, the dataSourceId is ${dataSource.dataSourceId}.`);\n  });\n} catch (err) {\n  hilog.error(0x0000, 'testTag', `Failed to read dataSource. Code: ${err.code}, message: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "更新数据源",
      children: "更新数据源"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.导入运动健康服务功能模块及相关公共模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { healthStore } from '@kit.HealthServiceKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.创建数据源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let newDataSource: healthStore.DataSource = {\n  deviceInfo: {\n    uniqueId: 'test',\n    name: 'test',\n    category: healthStore.DeviceCategory.WEARABLE_BAND,\n    productId: '0554',\n    model: 'lotana',\n    manufacturer: 'HUAWEI',\n    mac: 'testDeviceMac',\n    sn: 'testDeviceSn',\n    hardwareVersion: '1',\n    softwareVersion: '2',\n    firmwareVersion: '3',\n    // 修改udid\n    udid: 'updateudid'\n  },\n  // 此处dataSourceId值为开发步骤插入数据源时，返回的dataSourceId\n  dataSourceId: 'xxx'\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["3.调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoreupdatedatasource",
        children: "updateDataSource"
      }), "方法执行更新请求，并处理返回结果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n  await healthStore.updateDataSource(newDataSource);\n  hilog.info(0x0000, 'testTag', 'Succeeded in updating dataSource.');\n} catch (err) {\n  hilog.error(0x0000, 'testTag', `Failed to update dataSource. Code: ${err.code}, message: ${err.message}`);\n}\n"
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
417870(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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