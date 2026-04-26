"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["161760"], {
761644(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_health_service_kit_guide_health_harmonyos_health_app_dev_health_data_manage_health_samplepoint_manage_health_samplepoint_manage_md_445_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-health-service-kit-guide-health-harmonyos-health-app-dev-health-data-manage-health-samplepoint-manage-health-samplepoint-manage-md-445.json
var site_docs_health_service_kit_guide_health_harmonyos_health_app_dev_health_data_manage_health_samplepoint_manage_health_samplepoint_manage_md_445_namespaceObject = JSON.parse('{"id":"health-service-kit-guide/health-harmonyos/health-app-dev/health-data-manage/health-samplepoint-manage/health-samplepoint-manage","title":"运动健康采样数据","description":"场景介绍","source":"@site/docs/health-service-kit-guide/health-harmonyos/health-app-dev/health-data-manage/health-samplepoint-manage/health-samplepoint-manage.md","sourceDirName":"health-service-kit-guide/health-harmonyos/health-app-dev/health-data-manage/health-samplepoint-manage","slug":"/health-service-kit-guide/health-harmonyos/health-app-dev/health-data-manage/health-samplepoint-manage/","permalink":"/harmonyos-docs-site/health-service-kit-guide/health-harmonyos/health-app-dev/health-data-manage/health-samplepoint-manage/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"运动健康采样数据","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-samplepoint-manage","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"管理数据源","permalink":"/harmonyos-docs-site/health-service-kit-guide/health-harmonyos/health-app-dev/health-datasource-manage/"},"next":{"title":"锻炼记录","permalink":"/harmonyos-docs-site/health-service-kit-guide/health-harmonyos/health-app-dev/health-data-manage/health-exercisesequence-manage/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/health-service-kit-guide/health-harmonyos/health-app-dev/health-data-manage/health-samplepoint-manage/health-samplepoint-manage.md


const frontMatter = {
	title: '运动健康采样数据',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-samplepoint-manage',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '运动健康采样数据';

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
  "value": "保存用户的运动健康数据",
  "id": "保存用户的运动健康数据",
  "level": 3
}, {
  "value": "读取用户的运动健康数据",
  "id": "读取用户的运动健康数据",
  "level": 3
}, {
  "value": "删除指定的运动健康采样数据",
  "id": "删除指定的运动健康采样数据",
  "level": 3
}, {
  "value": "根据请求删除用户运动健康数据",
  "id": "根据请求删除用户运动健康数据",
  "level": 3
}, {
  "value": "聚合查询",
  "id": "聚合查询",
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
    ol: "ol",
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
        id: "运动健康采样数据",
        children: "运动健康采样数据"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运动健康采样数据(SamplePoint)，表示在某时刻（或一段时间）采集到的特定数据类型的样本，由时间、样本值及采样的数据源组成，支持保存、读取和删除等操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoresavedata",
              children: "saveData"
            }), "(sampleData: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#samplepoint",
              children: "SamplePoint"
            }), "[]"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#samplepoint",
              children: "SamplePoint"
            }), "): Promise<void>"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstorereaddata",
              children: "readData"
            }), "<T extends ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#samplepoint",
              children: "SamplePoint"
            }), ">(request: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#samplepointreadrequest",
              children: "SamplePointReadRequest"
            }), "): Promise<T[]>"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询运动健康采样数据，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#samplepointreadrequest",
              children: "SamplePointReadRequest"
            }), "设置查询条件，可按数据类型，字段、时间范围等条件查询。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoredeletedata-3",
              children: "deleteData"
            }), "(samplePoint: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#samplepoint",
              children: "SamplePoint"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#samplepoint",
              children: "SamplePoint"
            }), "[]): Promise<void>"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoredeletedata",
              children: "deleteData"
            }), "(request: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#samplepointdeleterequest",
              children: "SamplePointDeleteRequest"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#samplepointdeleterequest",
              children: "SamplePointDeleteRequest"
            }), "[]): Promise<void>"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoreaggregatedata",
              children: "aggregateData"
            }), "<T extends ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#aggregateresult",
              children: "AggregateResult"
            }), ">(request: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#aggregaterequest",
              children: "AggregateRequest"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#aggregaterequest",
              children: "AggregateRequest"
            }), "[]): Promise<T[]>"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(763313)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["aggregateData接口读取今日日常活动数据，数据上报存在延时，读取实时日常活动数据建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/health-service-kit-guide/health-harmonyos/health-app-dev/health-data-manage/health-three-ring-read",
        children: "读取实时三环数据"
      }), "接口。"]
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
        }), "接口引导用户授权，用户授权对应数据类型权限后，才有权限调用接口操作相关数据类型数据。"]
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
      id: "保存用户的运动健康数据",
      children: "保存用户的运动健康数据"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入运动健康服务功能模块及相关公共模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { healthStore } from '@kit.HealthServiceKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取dataSourceId，参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/health-service-kit-guide/health-harmonyos/health-app-dev/health-datasource-manage",
            children: "管理数据源"
          }), "，插入一个新的数据源或读取已有数据源。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建运动健康采样数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let samplePoint: healthStore.samplePointHelper.bodyTemperature.Model = {\n  dataType: healthStore.samplePointHelper.bodyTemperature.DATA_TYPE,\n  startTime: 1698633801000,\n  endTime: 1698633801000,\n  localDate: '10/30/2023',\n  timeZone: '+0800',\n  modifiedTime: 1698633801000,\n  // insertDataSource插入数据源接口返回的dataSourceId，或读取已有数据源的dataSourceId\n  dataSourceId: 'xxx',\n  fields: {\n    bodyTemperature: 39\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoresavedata",
            children: "saveData"
          }), "方法执行保存数据请求，并处理返回结果。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  await healthStore.saveData(samplePoint);\n  hilog.info(0x0000, 'testTag', 'Succeeded in saving data.');\n} catch (err) {\n  hilog.error(0x0000, 'testTag', `Failed to save data. Code: ${err.code}, message: ${err.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "读取用户的运动健康数据",
      children: "读取用户的运动健康数据"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入运动健康服务功能模块及相关公共模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { healthStore } from '@kit.HealthServiceKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建查询请求。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let samplePointReadRequest: healthStore.SamplePointReadRequest = {\n  samplePointDataType: healthStore.samplePointHelper.bodyTemperature.DATA_TYPE,\n  startTime: 1698633801000,\n  endTime: 1698633801000,\n  fields: {\n    bodyTemperature: 39\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstorereaddata",
            children: "readData"
          }), "方法执行查询请求，并处理返回结果。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  let samplePoints = await healthStore.readData(samplePointReadRequest);\n  samplePoints.forEach((samplePoint) => {\n    hilog.info(0x0000, 'testTag', `Succeeded in reading data, the bodyTemperature is ${samplePoint.fields.bodyTemperature}.`);\n  });\n} catch (err) {\n  hilog.error(0x0000, 'testTag', `Failed to read data. Code: ${err.code}, message: ${err.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "删除指定的运动健康采样数据",
      children: "删除指定的运动健康采样数据"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入运动健康服务功能模块及相关公共模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { healthStore } from '@kit.HealthServiceKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询待删除的运动健康采样数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let samplePointReadRequest: healthStore.SamplePointReadRequest = {\n  samplePointDataType: healthStore.samplePointHelper.bodyTemperature.DATA_TYPE,\n  startTime: 1698633801000,\n  endTime: 1698633801000\n}\nlet samplePoints: healthStore.SamplePoint[] = await healthStore.readData(samplePointReadRequest);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoredeletedata-3",
            children: "deleteData"
          }), "方法执行删除请求，并处理返回结果。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  for (let index = 0; index < samplePoints.length; index++) {\n    const samplePoint = samplePoints[index];\n    await healthStore.deleteData(samplePoint);\n  }\n  hilog.info(0x0000, 'testTag', 'Succeeded in deleting data.');\n} catch (err) {\n  hilog.error(0x0000, 'testTag', `Failed to delete data. Code: ${err.code}, message: ${err.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "根据请求删除用户运动健康数据",
      children: "根据请求删除用户运动健康数据"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入运动健康服务功能模块及相关公共模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { healthStore } from '@kit.HealthServiceKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建删除请求。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let samplePointDeleteRequest: healthStore.SamplePointDeleteRequest = {\n  dataType: healthStore.samplePointHelper.bodyTemperature.DATA_TYPE,\n  startTime: 1698633801000,\n  endTime: 1698633801000\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoredeletedata-3",
            children: "deleteData"
          }), "方法执行删除请求，并处理返回结果。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  await healthStore.deleteData(samplePointDeleteRequest);\n  hilog.info(0x0000, 'testTag', 'Succeeded in deleting data.');\n} catch (err) {\n  hilog.error(0x0000, 'testTag', `Failed to delete data. Code: ${err.code}, message: ${err.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "聚合查询",
      children: "聚合查询"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入运动健康服务功能模块及相关公共模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { healthStore } from '@kit.HealthServiceKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建聚合查询请求。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let aggregateRequest: healthStore.AggregateRequest<healthStore.samplePointHelper.dailyActivities.AggregateFields> = {\n  dataType: healthStore.samplePointHelper.dailyActivities.DATA_TYPE,\n  metrics: {\n    step: ['sum'],\n    calorie: ['sum'],\n    distance: ['sum'],\n    climbHighAltitude:['sum'],\n    isIntensity: ['sum'],\n    isStand: ['sum']\n },\n  groupBy: {\n    unitType: healthStore.GroupUnitType.DAY\n  },\n  startLocalDate: '10/30/2023',\n  endLocalDate: '10/30/2023'\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoreaggregatedata",
            children: "aggregateData"
          }), "方法执行查询请求，并处理返回结果。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  const aggregateResults = await healthStore.aggregateData<healthStore.samplePointHelper.dailyActivities.AggregateResult>(aggregateRequest);\n  hilog.info(0x0000, 'testTag', 'Succeeded in reading data.');\n  aggregateResults.forEach((aggregateResult) => {\n    hilog.info(0x0000, 'testTag', `the start time is ${aggregateResult.startTime}.`);\n    hilog.info(0x0000, 'testTag', `the end time is ${aggregateResult.endTime}.`);\n    Object.keys(aggregateResult.fields).forEach((fieldName) => {\n      hilog.info(0x0000, 'testTag', `the sum of ${fieldName} is ${aggregateResult.fields[fieldName].sum}.`);\n    });\n  });\n} catch (err) {\n  hilog.error(0x0000, 'testTag', `Failed to read data. Code: ${err.code}, message: ${err.message}`);\n}\n"
          })
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
763313(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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