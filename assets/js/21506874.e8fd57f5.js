"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["550837"], {
147874(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_health_service_kit_guide_health_harmonyos_health_data_type_health_healthsequence_health_sleeprecord_health_sleeprecord_md_215_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-health-service-kit-guide-health-harmonyos-health-data-type-health-healthsequence-health-sleeprecord-health-sleeprecord-md-215.json
var site_docs_health_service_kit_guide_health_harmonyos_health_data_type_health_healthsequence_health_sleeprecord_health_sleeprecord_md_215_namespaceObject = JSON.parse('{"id":"health-service-kit-guide/health-harmonyos/health-data-type/health-healthsequence/health-sleeprecord/health-sleeprecord","title":"睡眠","description":"夜间睡眠","source":"@site/docs/health-service-kit-guide/health-harmonyos/health-data-type/health-healthsequence/health-sleeprecord/health-sleeprecord.md","sourceDirName":"health-service-kit-guide/health-harmonyos/health-data-type/health-healthsequence/health-sleeprecord","slug":"/health-service-kit-guide/health-harmonyos/health-data-type/health-healthsequence/health-sleeprecord/","permalink":"/harmonyos-docs-site/health-service-kit-guide/health-harmonyos/health-data-type/health-healthsequence/health-sleeprecord/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"睡眠","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-sleeprecord","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"其他运动","permalink":"/harmonyos-docs-site/health-service-kit-guide/health-harmonyos/health-data-type/health-exercisesequence/health-other-sport/"},"next":{"title":"申请验证获取正式权限","permalink":"/harmonyos-docs-site/health-service-kit-guide/health-harmonyos/health-verification/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/health-service-kit-guide/health-harmonyos/health-data-type/health-healthsequence/health-sleeprecord/health-sleeprecord.md


const frontMatter = {
	title: '睡眠',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-sleeprecord',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '睡眠';

const assets = {

};



const toc = [{
  "value": "夜间睡眠",
  "id": "夜间睡眠",
  "level": 2
}, {
  "value": "OAuth权限",
  "id": "oauth权限",
  "level": 3
}, {
  "value": "夜间睡眠数据类型",
  "id": "夜间睡眠数据类型",
  "level": 3
}, {
  "value": "关联的明细数据说明",
  "id": "关联的明细数据说明",
  "level": 3
}, {
  "value": "数据开放说明",
  "id": "数据开放说明",
  "level": 3
}, {
  "value": "零星小睡",
  "id": "零星小睡",
  "level": 2
}, {
  "value": "OAuth权限",
  "id": "oauth权限-1",
  "level": 3
}, {
  "value": "零星小睡数据类型",
  "id": "零星小睡数据类型",
  "level": 3
}, {
  "value": "关联的明细数据说明",
  "id": "关联的明细数据说明-1",
  "level": 3
}, {
  "value": "数据开放说明",
  "id": "数据开放说明-1",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
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
        id: "睡眠",
        children: "睡眠"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "夜间睡眠",
      children: "夜间睡眠"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从入睡到醒来的一段完整睡眠记录（睡眠时长超过3小时），包括夜间睡眠数据以及每个时刻的睡眠状态采样数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "健康记录类型如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "健康记录类型常量"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "描述"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据来源"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthsequencehelper/health-api-healthsequencehelper#%E5%B8%B8%E9%87%8F",
              children: "healthSequenceHelper.sleepRecord.DATA_TYPE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "夜间睡眠"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分手表、手环等"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oauth权限",
      children: "OAuth权限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "联盟卡片申请的权限名称：健康数据 > 睡眠数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "夜间睡眠数据类型",
      children: "夜间睡眠数据类型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["字段定义：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthsequencehelper/health-api-healthsequencehelper#fields",
          children: "healthSequenceHelper.sleepRecord.Fields"
        })]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "字段"
              })
            }), "列表"]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "单位"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "取值范围"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fallAsleepTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分期睡眠最早入睡时间点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "毫秒"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0，∞）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wakeupTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分期睡眠最晚醒来时间点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "毫秒"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0，∞）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "夜间/普通睡眠时长（不含零星小睡时长）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "秒"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0，∞）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bedTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最早上床时间点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0，∞）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "risingTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最晚起床时间点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0，∞）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "prepareSleepTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "准备入睡时间点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "毫秒"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0，∞）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shallowDuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "浅睡时长"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "秒"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0，∞）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deepDuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "深睡时长"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "秒"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0，∞）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dreamDuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REM时长"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "秒"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0，∞）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wakeDuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清醒时长"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "秒"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0，∞）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wakeCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清醒次数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0，∞）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onBedDuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卧床时长"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "秒"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0，∞）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "recordDuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "睡眠记录时长（手动输入睡眠就是总时长）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "秒"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0，∞）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sleepEfficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "睡眠效率"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,100]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sleepScore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "睡眠得分"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,100]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deepSleepContinuity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "深睡连续性"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,100]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "respiratoryQualityScore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "呼吸质量分"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,100]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "turnOverCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "翻身次数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0，∞）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sleepEndReason"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "睡眠结束原因"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0，∞）  取值参考如下：  0：手动结束睡眠监测  1：自动结束睡眠监测  2：中断睡眠监测  3：电量过低结束"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sleepSymptoms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "睡眠症状"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sleepType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "睡眠数据类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1：科学睡眠  2：普通睡眠  3：手动输入睡眠  4：手机记录睡眠  未设置时，默认值为2。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "关联的明细数据说明",
      children: "关联的明细数据说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["字段定义：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthsequencehelper/health-api-healthsequencehelper#detailfields",
          children: "healthSequenceHelper.sleepRecord.DetailFields"
        })]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "字段"
              })
            }), "列表"]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sleepSegment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "睡眠状态采样"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#sleepsegment",
              children: "SleepSegment"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据开放说明",
      children: "数据开放说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "开放API"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "查询及时性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据源"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstorereaddata-2",
              children: "healthStore.readData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分钟级"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分手表、手环等"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "零星小睡",
      children: "零星小睡"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "日间进行的短时间睡眠，包括零星小睡睡眠数据以及每个时刻的睡眠状态采样数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "健康记录类型如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "健康记录类型常量"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "描述"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据来源"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthsequencehelper/health-api-healthsequencehelper#%E5%B8%B8%E9%87%8F-1",
              children: "healthSequenceHelper.sleepNapRecord.DATA_TYPE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "零星小睡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分手表、手环等"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oauth权限-1",
      children: "OAuth权限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "联盟卡片申请的权限名称：健康数据 > 睡眠数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "零星小睡数据类型",
      children: "零星小睡数据类型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["字段定义：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthsequencehelper/health-api-healthsequencehelper#fields-1",
          children: "healthSequenceHelper.sleepNapRecord.Fields"
        })]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "字段"
              })
            }), "列表"]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "单位"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "取值范围"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "noonDuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "午睡时长(零星小睡）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "秒"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0，∞）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "noonRecordDuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "零星小睡记录时长"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "秒"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0，∞）"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "关联的明细数据说明-1",
      children: "关联的明细数据说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["字段定义：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthsequencehelper/health-api-healthsequencehelper#detailfields-1",
          children: "healthSequenceHelper.sleepNapRecord.DetailFields"
        })]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "字段"
              })
            }), "列表"]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sleepSegment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "睡眠状态采样"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-healthfields/health-api-healthfields#sleepsegment",
              children: "SleepSegment"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据开放说明-1",
      children: "数据开放说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "开放API"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "查询及时性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据源"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstorereaddata-2",
              children: "healthStore.readData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分钟级"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分手表、手环等"
          })]
        })
      })]
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