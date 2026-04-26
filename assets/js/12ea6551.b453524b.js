"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["941710"], {
874727(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_natural_language_api_natural_language_arkts_natural_language_json_object_api_natural_language_json_object_api_md_12e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-natural-language-api-natural-language-arkts-natural-language-json-object-api-natural-language-json-object-api-md-12e.json
var site_docs_ref_natural_language_api_natural_language_arkts_natural_language_json_object_api_natural_language_json_object_api_md_12e_namespaceObject = JSON.parse('{"id":"natural-language-api/natural-language-arkts/natural-language-json-object-api/natural-language-json-object-api","title":"jsonObject（实体的其他字段）","description":"Entity返回值中jsonObject的参数详细说明。","source":"@site/docs-ref/natural-language-api/natural-language-arkts/natural-language-json-object-api/natural-language-json-object-api.md","sourceDirName":"natural-language-api/natural-language-arkts/natural-language-json-object-api","slug":"/natural-language-api/natural-language-arkts/natural-language-json-object-api/natural-language-json-object-api","permalink":"/harmonyos-docs-site/ref/natural-language-api/natural-language-arkts/natural-language-json-object-api/natural-language-json-object-api","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"jsonObject（实体的其他字段）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/natural-language-json-object-api","kit":"AI","last_updated":"2026-04-22","slug":"natural-language-json-object-api"},"sidebar":"ref","previous":{"title":"wordTag（词性）","permalink":"/harmonyos-docs-site/ref/natural-language-api/natural-language-arkts/natural-language-word-tag-api/natural-language-word-tag-api"},"next":{"title":"ArkTS API错误码","permalink":"/harmonyos-docs-site/ref/natural-language-api/natural-language-error-code/natural-language-error-code"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/natural-language-api/natural-language-arkts/natural-language-json-object-api/natural-language-json-object-api.md


const frontMatter = {
	title: 'jsonObject（实体的其他字段）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/natural-language-json-object-api',
	kit: 'AI',
	last_updated: '2026-04-22',
	slug: 'natural-language-json-object-api'
};
const contentTitle = 'jsonObject（实体的其他字段）';

const assets = {

};



const toc = [{
  "value": "基础类",
  "id": "基础类",
  "level": 2
}, {
  "value": "时间实体",
  "id": "时间实体",
  "level": 3
}, {
  "value": "地点实体",
  "id": "地点实体",
  "level": 3
}, {
  "value": "姓名实体",
  "id": "姓名实体",
  "level": 3
}, {
  "value": "手机号实体",
  "id": "手机号实体",
  "level": 3
}, {
  "value": "邮箱实体",
  "id": "邮箱实体",
  "level": 3
}, {
  "value": "URL实体",
  "id": "url实体",
  "level": 3
}, {
  "value": "娱乐类",
  "id": "娱乐类",
  "level": 2
}, {
  "value": "火车车次实体",
  "id": "火车车次实体",
  "level": 3
}, {
  "value": "航班号实体",
  "id": "航班号实体",
  "level": 3
}, {
  "value": "生活类",
  "id": "生活类",
  "level": 2
}, {
  "value": "快递单号实体",
  "id": "快递单号实体",
  "level": 3
}, {
  "value": "身份证号实体",
  "id": "身份证号实体",
  "level": 3
}, {
  "value": "验证码实体",
  "id": "验证码实体",
  "level": 3
}, {
  "value": "银行卡号实体",
  "id": "银行卡号实体",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "jsonobject实体的其他字段",
        children: "jsonObject（实体的其他字段）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Entity返回值中jsonObject的参数详细说明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基础类",
      children: "基础类"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "时间实体",
      children: "时间实体"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "识别文本中出现的时间，返回类型为JSONObject，键为“time”，键对应的值类型为JSONArray，数组里值类型为JSONObject，具体字段如下表。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参数名"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "是否必选"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "repeat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "周期。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rrule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "周期标识，不一定准确，具体以repeat为准（参考数据，不建议使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开始时间。  示例如下：  1. 2021-08-28T08:00:00（日期和精确时间）  2. 2021-08-28TM（日期和模糊时间）  3. 2021-08-28（日期）  4. T08:00:00（周期时间，没有明确日期，例如“每天8点”）  5. TM（周期时间，没有明确日期，例如“每天早上”）  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  T为分隔符，T前面为年月日，T后面为时间点，可以是精确时间，可以是用粒度表示的模糊时间。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "suggestStart"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "具体开始时间。  大多数情况和start一样，表面上是单个时间，但实际是时间段的时候有区别。  示例如下：  1. “1月”，start（2021-01），end（2021-01），suggestStart（2021-01-01），suggestEnd（2021-01-31）  2. “1月到3月”，start（2021-01），end（2021-03），suggestStart（2021-01-01），suggestEnd（2021-03-31）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startTimestamp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开始默认时间戳，因时间不一定完整，该时间戳不一定准确，具体以start和suggestStart为准（参考数据，不建议使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结束时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "suggestEnd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "具体结束时间。  大多数情况和end一样，表面上是单个时间，但实际是时间段的时候有区别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "endTimestamp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结束时间戳（参考数据，不建议使用）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxSection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最大时间粒度。  P：精确时间。  M：早晨。  F：上午。  N：中午。  A：下午。  L：傍晚。  E：晚上。  W：凌晨。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minSection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最小时间粒度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isContainFuzzyTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否包含模糊时间，true：包含，false：不包含，默认为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "containFuzzySection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模糊时间粒度，不包含模糊时间粒度时默认为D。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inferType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "时间推理类型枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rangeDecoration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "范围描述。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rangeText"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "带范围描述的文本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isFestival"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否节日。  true：是。false：不是。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "normalFestival"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "节日归一化值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isLunarTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否包含农历时间，true：包含，false：不包含。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startLunarTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含的农历时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isSolarTerm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否节气。  true：是。false：不是。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isIllegal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否非法。  true：是。false：不是。  默认为false。  备注：不会将所有不符合规范的时间都识别，只有具体业务场景出现较多较特殊，且非常必要的时候，时间实体才会特意去识别，并设置非法标识，绝大多数不规范的时间不识别，或识别不正确并无影响。  示例如下：  1. “2月30号”，会把start设置为29号或28号，isIllegal设为true。  2. “每周上午8点”，缺少每周具体周几，周期会默认设置成当前周几，isIllegal设为true。  3. “每月周一8点”，缺少每月具体几号。  4. “每年8号上午9点”，缺少每年具体几月。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isChangedIllegal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否自动修正了非法时间。  true：是。false：不是。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isPlusTwelveHour"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否包含天以内模糊时间。  true：是。false：不是。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对应实体出现频率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "oriFestival"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "时间里包含的节日文本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "timestampZone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "时间戳所在时区，即设备上报时区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "originTimestamp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参文本时间戳，即设备上报时间。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "地点实体",
      children: "地点实体"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "识别文本中出现的地点，返回类型为JSONObject，键为“location”，键对应的值类型为JSONArray，数组里值类型为JSONObject，具体字段如下表。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参数名"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "是否必选"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "地点类型：首层核心地点的实际类型。  type：参考邮政局的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "coreLocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSONObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "核心地点信息组成元素集合。  coreLocation：“邮政局”对应的组成元素分析结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "adornLocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSONObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修饰核心地点的组成元素集合，引用location定义。  adornLocation：“小肥羊旁边的”对应的组成元素分析结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isAbstract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0：非抽象地点。  1：和意图相关的抽象地点。  默认为0。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "地点实体内，coreLocation参数的定义，具体字段如下表。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "子参数"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "是否必选"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "oriText"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "地点实体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "核心地点信息（地点原文去除修饰地点、修饰词后（旁边"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "province"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSONObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "省份，原文中出现的省份。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "city"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSONObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "城市，原文中出现的城市。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "county"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSONObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "县，原文中出现的县。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "district"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSONObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "行政区，原文中出现的行政区，如“江宁区”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subDistrict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSONObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "街道/社区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "town"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSONObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "乡/镇。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "village"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSONObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "村。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subVillage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSONObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "村组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "region"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSONObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参考物，固定商区、片区（不包含行政区）的概念 ，对应大众点评region字段（识别范围大于大众点评的对应字段）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "road"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSONObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "道路。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "default"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSONObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未分类区域，语义无法区分出该区域类地点属于哪个类型，比如 福永既可能是镇、也可能是街道，文本中只出现福永且上下文无法判断类型时输出到该字段。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "location"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSONObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "地图poi信息/组织机构/抽象地点。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "coreLocation内，参数类型为JSONObject的参数的定义，具体字段如下表。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "子参数"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "是否必选"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "地点类型对应的地点信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extend"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSONObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "地点扩展信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "姓名实体",
      children: "姓名实体"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "识别文本中出现的人名，返回类型为JSONObject，键为“name”，键对应的值类型为JSONArray，数组里的值类型为JSONObject，具体字段如下表。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参数名"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "是否必选"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "nr（正式），nrn（昵称），nrt（称谓），nrx（其他）。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "手机号实体",
      children: "手机号实体"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "识别文本中出现的电话号码，返回类型为JSONObject，键为“phoneNum”，键对应的值类型为JSONArray，数组里的值类型为JSONObject，具体字段如下表。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参数名"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "是否必选"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "号码类型，0（固话）、1（手机）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "号码（去除分机号）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extNumber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分机号，当类型为固话时可能存在该字段。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "邮箱实体",
      children: "邮箱实体"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "识别文本中出现的邮箱，返回类型为JSONObject，键为“email”，键对应的值为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "url实体",
      children: "URL实体"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "识别文本中出现的URL，返回类型为JSONObject， 键为“url”，键对应的值为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "娱乐类",
      children: "娱乐类"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "火车车次实体",
      children: "火车车次实体"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "识别文本中出现的火车车次，返回类型为JSONObject， 键为“trainNo”，键对应的值类型为JSONArray，数组里的值类型为JSONObject，具体字段如下表。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参数名"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "是否必选"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对应实体出现频率。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "航班号实体",
      children: "航班号实体"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "识别文本中出现的飞机航班，返回类型为JSONObject， 键为“flightNo”，键对应的值为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "生活类",
      children: "生活类"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "快递单号实体",
      children: "快递单号实体"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "识别文本中出现的快递单号，返回类型为JSONObject，键为“expressNo”，键对应的值类型为JSONArray，数组里的值类型为JSONObject，具体字段如下表。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参数名"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "是否必选"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isTailNum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否为单号尾号，0（不是尾号）、1（是尾号）。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "身份证号实体",
      children: "身份证号实体"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "识别文本中出现的身份证号，返回类型为JSONObject， 键为“idNo”，键对应的值类型为JSONArray，数组里的值类型为JSONObject，具体字段如下表。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参数名"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "是否必选"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "身份证号码字串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对应实体出现频率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0（身份证）、1（护照）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isComplete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "“1”（证件号是完整的，不含*等字符），“0”（证件号不是完整的，含有*等字符，例如321***********1234）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "验证码实体",
      children: "验证码实体"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "识别文本中出现的验证码，返回类型为JSONObject， 键为“verificationCode”，键对应的值类型为JSONArray，数组里的值类型为JSONObject，具体字段如下表。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参数名"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "是否必选"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "验证码类型（取原文内容，如：验证码、校验码等）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "supplier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "验证码提供商。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "银行卡号实体",
      children: "银行卡号实体"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "识别文本中出现的银行卡号，返回类型为JSONObject， 键为“bankCardNo”，键对应的值类型为JSONArray，数组里的值类型为JSONObject，具体字段如下表。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参数名"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "是否必选"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡号中的数字。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对应实体出现频率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "validDate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "银行卡号有效期。"
          })]
        })]
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