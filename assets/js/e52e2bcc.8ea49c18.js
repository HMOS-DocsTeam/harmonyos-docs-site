"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["809233"], {
267186(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_health_service_kit_guide_health_harmonyos_health_app_dev_health_data_manage_health_exercisesequence_manage_health_exercisesequence_manage_md_e52_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-health-service-kit-guide-health-harmonyos-health-app-dev-health-data-manage-health-exercisesequence-manage-health-exercisesequence-manage-md-e52.json
var site_docs_health_service_kit_guide_health_harmonyos_health_app_dev_health_data_manage_health_exercisesequence_manage_health_exercisesequence_manage_md_e52_namespaceObject = JSON.parse('{"id":"health-service-kit-guide/health-harmonyos/health-app-dev/health-data-manage/health-exercisesequence-manage/health-exercisesequence-manage","title":"锻炼记录","description":"场景介绍","source":"@site/docs/health-service-kit-guide/health-harmonyos/health-app-dev/health-data-manage/health-exercisesequence-manage/health-exercisesequence-manage.md","sourceDirName":"health-service-kit-guide/health-harmonyos/health-app-dev/health-data-manage/health-exercisesequence-manage","slug":"/health-service-kit-guide/health-harmonyos/health-app-dev/health-data-manage/health-exercisesequence-manage/","permalink":"/harmonyos-docs-site/health-service-kit-guide/health-harmonyos/health-app-dev/health-data-manage/health-exercisesequence-manage/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"锻炼记录","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-exercisesequence-manage","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"运动健康采样数据","permalink":"/harmonyos-docs-site/health-service-kit-guide/health-harmonyos/health-app-dev/health-data-manage/health-samplepoint-manage/"},"next":{"title":"健康记录","permalink":"/harmonyos-docs-site/health-service-kit-guide/health-harmonyos/health-app-dev/health-data-manage/health-healthsequence-manage/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/health-service-kit-guide/health-harmonyos/health-app-dev/health-data-manage/health-exercisesequence-manage/health-exercisesequence-manage.md


const frontMatter = {
	title: '锻炼记录',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-exercisesequence-manage',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '锻炼记录';

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
  "value": "保存用户的锻炼记录",
  "id": "保存用户的锻炼记录",
  "level": 3
}, {
  "value": "读取用户的锻炼记录",
  "id": "读取用户的锻炼记录",
  "level": 3
}, {
  "value": "删除指定的锻炼记录",
  "id": "删除指定的锻炼记录",
  "level": 3
}, {
  "value": "根据请求删除用户锻炼记录",
  "id": "根据请求删除用户锻炼记录",
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
        id: "锻炼记录",
        children: "锻炼记录"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "锻炼记录，记录用户一次活动的基本信息，包括锻炼的起止时间，运动类型，统计数据，详情数据等，支持写入、读取和删除，每条锻炼记录数据需要关联数据源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoresavedata-1",
              children: "saveData"
            }), "(exerciseSequence: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence",
              children: "ExerciseSequence"
            }), "[]"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence",
              children: "ExerciseSequence"
            }), "): Promise<void>"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstorereaddata-1",
              children: "readData"
            }), "<T extends ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence",
              children: "ExerciseSequence"
            }), ">(request: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequencereadrequest",
              children: "ExerciseSequenceReadRequest"
            }), "): Promise<T[]>"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询锻炼记录，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequencereadrequest",
              children: "ExerciseSequenceReadRequest"
            }), "设置查询条件，可按数据类型，字段、时间范围等条件查询。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoredeletedata-4",
              children: "deleteData"
            }), "(exerciseSequence: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence",
              children: "ExerciseSequence"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence",
              children: "ExerciseSequence"
            }), "[]): Promise<void>"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoredeletedata-1",
              children: "deleteData"
            }), "(request: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequencedeleterequest",
              children: "ExerciseSequenceDeleteRequest"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequencedeleterequest",
              children: "ExerciseSequenceDeleteRequest"
            }), "[]): Promise<void>"]
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
      id: "保存用户的锻炼记录",
      children: "保存用户的锻炼记录"
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
          children: "创建锻炼记录。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 构造跑步记录\nconst startTime = 1698040800000; // 2023-10-23 14:00:00\nconst endTime = 1698042600000; // 2023-10-23 14:30:00\n\nconst runningSequence: healthStore.exerciseSequenceHelper.running.Model = {\n  dataType: healthStore.exerciseSequenceHelper.DATA_TYPE,\n  // insertDataSource插入数据源接口返回的dataSourceId，或读取已有数据源的dataSourceId\n  dataSourceId: 'xxx',\n  startTime: startTime, // 2023-10-23 14:00:00\n  endTime: endTime, // 2023-10-23 14:30:00\n  localDate: '10/23/2023',\n  timeZone: '+0800',\n  modifiedTime: new Date().getTime(),\n  exerciseType: healthStore.exerciseSequenceHelper.running.EXERCISE_TYPE,\n  duration: 1800,\n  summaries: {\n    distance: {\n      totalDistance: 2000\n    },\n    calorie: {\n      totalCalories: 20\n    },\n    speed: {\n      avg: 5,\n      max: 6\n    }\n  },\n  details: {\n    exerciseHeartRate: [\n      {\n        startTime: startTime,\n        bpm: 88\n      },\n      {\n        startTime: startTime + 5000,\n        bpm: 89\n      }\n    ],\n    speed: [\n      {\n        startTime: startTime,\n        speed: 2.5\n      },\n      {\n        startTime: startTime + 5000,\n        speed: 2.3\n      }\n    ],\n    altitude: [\n      {\n        startTime: startTime,\n        altitude: 100\n      },\n      {\n        startTime: startTime + 5000,\n        altitude: 101\n      }\n    ]\n  }\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoresavedata-1",
            children: "saveData"
          }), "方法执行保存数据请求，并处理返回结果。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  await healthStore.saveData(runningSequence);\n  hilog.info(0x0000, 'testTag', 'Succeeded in saving data.');\n} catch (err) {\n  hilog.error(0x0000, 'testTag', `Failed to save data. Code: ${err.code}, message: ${err.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "读取用户的锻炼记录",
      children: "读取用户的锻炼记录"
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
            children: "// 查询跑步记录\nconst sequenceReadRequest: healthStore.ExerciseSequenceReadRequest<healthStore.exerciseSequenceHelper.running.DetailFields> = {\n  startTime: 1698040800000,\n  endTime: 1698042600000,\n  exerciseType: healthStore.exerciseSequenceHelper.running.EXERCISE_TYPE,\n  count: 1,\n  sortOrder: 1,\n  readOptions: {\n    withPartialDetails: ['exerciseHeartRate', 'altitude']\n }\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstorereaddata-1",
            children: "readData"
          }), "方法执行查询请求，并处理返回结果。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  const runningSequences = await healthStore.readData<healthStore.exerciseSequenceHelper.running.Model>(sequenceReadRequest);\n  hilog.info(0x0000, 'testTag', 'Succeeded in reading data.');\n  runningSequences.forEach((runningSequence) => {\n    hilog.info(0x0000, 'testTag', `the start time is ${runningSequence.startTime}.`);\n    hilog.info(0x0000, 'testTag', `the end time is ${runningSequence.endTime}.`);\n    Object.keys(runningSequence.summaries).forEach((key) => {\n      Object.keys(runningSequence.summaries[key]).forEach((fieldName) => {\n        hilog.info(0x0000, 'testTag', `the summaries of ${key} field ${fieldName} is ${runningSequence.summaries[key][fieldName]}.`);\n      });\n    });\n  });\n} catch (err) {\n  hilog.error(0x0000, 'testTag', `Failed to read data. Code: ${err.code}, message: ${err.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "删除指定的锻炼记录",
      children: "删除指定的锻炼记录"
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
          children: "查询待删除的锻炼记录。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 查询跑步记录\nconst sequenceReadRequest: healthStore.ExerciseSequenceReadRequest<healthStore.exerciseSequenceHelper.running.DetailFields> = {\n  startTime: 1698040800000,\n  endTime: 1698042600000,\n  exerciseType: healthStore.exerciseSequenceHelper.running.EXERCISE_TYPE\n};\nconst runningSequences = await healthStore.readData<healthStore.exerciseSequenceHelper.running.Model>(sequenceReadRequest);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoredeletedata-4",
            children: "deleteData"
          }), "方法执行删除请求，并处理返回结果。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  for (let index = 0; index < runningSequences.length; index++) {\n    const runningSequence = runningSequences[index];\n    await healthStore.deleteData(runningSequence);\n  }\n  hilog.info(0x0000, 'testTag', 'Succeeded in deleting data.');\n} catch (err) {\n  hilog.error(0x0000, 'testTag', `Failed to delete data. Code: ${err.code}, message: ${err.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "根据请求删除用户锻炼记录",
      children: "根据请求删除用户锻炼记录"
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
            children: "let exerciseSequenceDeleteRequest: healthStore.ExerciseSequenceDeleteRequest= {\n  exerciseType: healthStore.exerciseSequenceHelper.running.EXERCISE_TYPE,\n  startTime: 1698633801000,\n  endTime: 1698633801000\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoredeletedata-1",
            children: "deleteData"
          }), "方法执行删除请求，并处理返回结果。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  await healthStore.deleteData(exerciseSequenceDeleteRequest);\n  hilog.info(0x0000, 'testTag', 'Succeeded in deleting data.');\n} catch (err) {\n  hilog.error(0x0000, 'testTag', `Failed to delete data. Code: ${err.code}, message: ${err.message}`);\n}\n"
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