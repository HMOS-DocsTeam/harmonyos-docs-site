"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["352153"], {
376862(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_thread_scheduling_gewu_ndk_api_guidelines_gewu_ndk_api_guidelines_md_b03_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-thread-scheduling-gewu-ndk-api-guidelines-gewu-ndk-api-guidelines-md-b03.json
var site_docs_coding_thread_scheduling_gewu_ndk_api_guidelines_gewu_ndk_api_guidelines_md_b03_namespaceObject = JSON.parse('{"id":"coding/thread-scheduling/gewu-ndk-api-guidelines/gewu-ndk-api-guidelines","title":"格物开发指导","description":"场景介绍","source":"@site/docs/coding/thread-scheduling/gewu-ndk-api-guidelines/gewu-ndk-api-guidelines.md","sourceDirName":"coding/thread-scheduling/gewu-ndk-api-guidelines","slug":"/coding/thread-scheduling/gewu-ndk-api-guidelines/","permalink":"/harmonyos-docs-site/coding/thread-scheduling/gewu-ndk-api-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"格物开发指导","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gewu-ndk-api-guidelines","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"QoS 开发指导","permalink":"/harmonyos-docs-site/coding/thread-scheduling/qos-guidelines/"},"next":{"title":"内存管理purgeable内存开发指导","permalink":"/harmonyos-docs-site/coding/memory-management/purgeable-memory-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/thread-scheduling/gewu-ndk-api-guidelines/gewu-ndk-api-guidelines.md


const frontMatter = {
	title: '格物开发指导',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gewu-ndk-api-guidelines',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '格物开发指导';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口",
  "id": "接口",
  "level": 2
}, {
  "value": "错误码",
  "id": "错误码",
  "level": 3
}, {
  "value": "会话句柄",
  "id": "会话句柄",
  "level": 3
}, {
  "value": "请求句柄",
  "id": "请求句柄",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
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
        id: "格物开发指导",
        children: "格物开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始支持。端侧推理场景具有保障用户数据隐私、部署成本低、时延低、不受网络影响的高可用性等优点。但是，相比于云侧推理而言，端侧推理也面临着更大的挑战，因为端侧设备的内存资源受限、算力受限、对功耗敏感，并且还需要在运行端侧推理业务时保障用户体验、不卡顿。为了应对端侧推理的这些挑战，格物服务提供QoS感知的推理加速和资源管理优化能力。本文将指导开发者使用格物接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "错误码",
      children: "错误码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_QoS_GewuErrorCode枚举型作为格物的错误码类型，各函数接口返回的错误码含义见接口描述。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "会话句柄",
      children: "会话句柄"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "会话句柄用于会话的管理。通过OH_QoS_GewuSession成功创建会话时可获得会话句柄，可用于提交/中止请求和销毁会话。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef unsigned int OH_QoS_GewuSession;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "请求句柄",
      children: "请求句柄"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求句柄用于请求的管理。通过OH_QoS_GewuSubmitRequest成功提交请求时可获得请求句柄，可用于中止请求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef unsigned int OH_QoS_GewuRequest;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "函数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "简介"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_QoS_GewuCreateSession"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建会话"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_QoS_GewuDestroySession"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁会话"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_QoS_GewuSubmitRequest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提交请求"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_QoS_GewuAbortRequest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中止请求"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "OH_QoS_GewuCreateSession"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_QoS_GewuCreateSession接口用于创建会话。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口异步处理请求，即该接口只是发起创建会话，并不会等到会话资源分配完成、模型加载完成才返回。格物优化端侧推理资源管理，可以动态按需加载资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "会话对象的生命周期从OH_QoS_GewuCreateSession函数返回开始，到调用OH_QoS_GewuDestroySession为止。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct {\n    OH_QoS_GewuSession session;\n    OH_QoS_GewuErrorCode error;\n} OH_QoS_GewuCreateSessionResult;\n\nOH_QoS_GewuCreateSessionResult OH_QoS_GewuCreateSession(const char* attributes);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["const char* attributes参数表示会话属性的json字符串。该json字符串支持以下字段：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "\"model\": string 表示会话使用的模型的路径。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "attributes json字符串例子："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"model\": \"/data/storage/el2/base/files/qwen2/\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果创建会话成功，返回值OH_QoS_GewuCreateSessionResult里的error为OH_QOS_GEWU_OK，而session为创建出来的会话句柄。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果创建会话失败，返回值OH_QoS_GewuCreateSessionResult里的error为错误原因，其中OH_QOS_GEWU_NOMEM表示没有足够的内存创建会话。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "OH_QoS_GewuDestroySession"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_QoS_GewuDestroySession接口用于销毁会话。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议用户应当等待至所有请求都已完成或中止，然后再调用该接口来销毁会话。如果调用该接口时还有正在进行的请求，那些请求将会被中止，且用户不会再收到回复。注意，在调用完该接口后，会话对象无法再被使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_QoS_GewuErrorCode OH_QoS_GewuDestroySession(OH_QoS_GewuSession session);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OH_QoS_GewuSession session参数为要销毁的会话的句柄。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果会话销毁成功，返回值为OH_QOS_GEWU_OK。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果会话销毁失败，返回值为错误原因，其中OH_QOS_GEWU_NOENT表示找不到会话。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "OH_QoS_GewuSubmitRequest"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_QoS_GewuSubmitRequest接口用于提交请求。该接口异步执行请求，即该接口只是发起请求，并不直接返回结果，该接口返回时请求可能尚未开始执行。请求的结果通过调用用户提供的回调返回给用户。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct {\n    OH_QoS_GewuRequest request;\n    OH_QoS_GewuErrorCode error;\n} OH_QoS_GewuSubmitRequestResult;\n\ntypedef void (*OH_QoS_GewuOnResponse)(void* context, const char* response);\n\nOH_QoS_GewuSubmitRequestResult OH_QoS_GewuSubmitRequest(OH_QoS_GewuSession session, const char* request,\n    OH_QoS_GewuOnResponse callback, void* context);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_QoS_GewuSubmitRequest函数的各参数如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OH_QoS_GewuSession session参数是会话句柄，表示请求要提交到哪个会话。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["const char* request参数为请求的json字符串，支持以下字段：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\"messages\": array. 表示消息的数组其中每个元素支持以下字段：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "\"role\": string. 消息的角色类型。其中\"developer\"表示开发者或系统提供的指示，\"user\"表示用户输入，\"assistant\"表示模型生成结果。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "\"content\": string. 消息内容。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "\"stream\": boolean or null. 是否使能流式推理，默认为非流式。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OH_QoS_GewuOnResponse callback参数为请求的回调函数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "void* context参数为用户提供的上下文指针，用于传递给回调函数。一般用法中，用户代码可通过该参数找到与收到的回复对应的请求，从而进行相应的处理。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "另外，OH_QoS_GewuOnResponse回调函数的各参数如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "void* context参数是调用OH_QoS_GewuSubmitRequest时传进来的context指针。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["const char* response参数是回复的json字符串，包含以下字段：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\"message\": 回复消息，包含以下字段：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "\"role\": string. 消息的角色类型，应为\"assistant\"。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "\"content\": string. 消息内容。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\"finish_reason\": string or null. 停止原因，可能的值如下：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "null: 表示没有停止。流式推理中会有多次回复，只有最后一次回复有非空的\"finish_reason\"。而非流式推理只有一次回复，且\"finish_reason\"非空。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "\"stop\": 正常停止。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "\"abort\": 用户主动提前中止。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "\"length\": token数超过限制。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果提交请求成功，返回值OH_QoS_GewuSubmitRequestResult里的error为OH_QOS_GEWU_OK，request为请求句柄。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果提交请求失败，返回值OH_QoS_GewuSubmitRequestResult里的error为错误原因，其中OH_QOS_GEWU_NOMEM表示没有足够的内存处理该请求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "OH_QoS_GewuAbortRequest"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_QoS_GewuAbortRequest接口用于提前中止请求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "正常情况下，用户调用OH_QoS_GewuSubmitRequest接口提交请求后，等待至推理完成（即收到\"finish_reason\"不为空的回复），不需要调用OH_QoS_GewuAbortRequest接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "只有当用户希望提前中止推理请求的时候，才需要调用OH_QoS_GewuAbortRequest接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "成功调用该函数后，用户不会再收到该请求的回复，且该请求句柄无法再被使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_QoS_GewuErrorCode OH_QoS_GewuAbortRequest(OH_QoS_GewuSession session, OH_QoS_GewuRequest request);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OH_QoS_GewuSession session参数为请求所述的会话的句柄。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OH_QoS_GewuRequest request参数为要中止的请求的句柄。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果请求中止成功，返回值为OH_QOS_GEWU_OK。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果请求中止失败，返回值为错误原因，其中OH_QOS_GEWU_NOENT表示找不到请求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例如下:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <future>\n#define LOG_TAG \"DEMO\"\n#include <hilog/log.h>\n#include <nlohmann/json.hpp>\n#include <qos/qos.h>\n#include <string>\n\n#define DEMO_LOGD(fmt, ...) OH_LOG_DEBUG(LOG_APP, fmt, ##__VA_ARGS__)\n#define DEMO_LOGI(fmt, ...) OH_LOG_INFO(LOG_APP, fmt, ##__VA_ARGS__)\n#define DEMO_LOGW(fmt, ...) OH_LOG_WARN(LOG_APP, fmt, ##__VA_ARGS__)\n#define DEMO_LOGE(fmt, ...) OH_LOG_ERROR(LOG_APP, fmt, ##__VA_ARGS__)\n\nusing json = nlohmann::json;\n\n/* 用于保存聊天状态 */\nstruct ChatContext {\npublic:\n    ChatContext()\n    {\n        future = promise.get_future();\n    }\n\n    void Join()\n    {\n        assert(future.valid());\n        std::string stopReasonStr = future.get();\n        DEMO_LOGI(\"stopReasonStr=%s\", stopReasonStr.c_str());\n    }\n\n    std::promise<std::string> promise;\n    std::future<std::string> future;\n    std::string responseContent;\n    bool earlyAbort = false;\n};\n\n/* 接收到推理结果时的回调函数 */\nvoid OnChatResponse(void *context, const char *response)\n{\n    ChatContext *chatContext = static_cast<ChatContext *>(context);\n    if (chatContext->earlyAbort) {\n        DEMO_LOGD(\"ignore response after early abort\");\n        return;\n    }\n    try {\n        json responseJson = json::parse(response);\n        chatContext->responseContent += responseJson.at(\"message\").at(\"content\").get<std::string>();\n        json finishReasonJson = responseJson.at(\"finish_reason\");\n        if (!finishReasonJson.is_null()) {\n            /* finish */\n            std::string finishReasonStr = finishReasonJson.get<std::string>();\n            chatContext->promise.set_value(finishReasonStr);\n        } else if (chatContext->responseContent.find(\"\\n\") != std::string::npos) {\n            /* customized stop */\n            chatContext->promise.set_value(\"customized\");\n            chatContext->earlyAbort = true;\n        } else {\n            /* continue */\n            ;\n        }\n    } catch (json::exception &e) {\n        DEMO_LOGE(\"failed to parse response: %s\", e.what());\n    }\n}\n\nint Demo(void)\n{\n    DEMO_LOGI(\"Demo starts\");\n    json attrJson = {\n        /* 模型文件位置，根据实际情况修改 */\n        {\"model\", \"/data/storage/el2/base/files/qwen2-awq\"},\n    };\n    std::string attrStr = attrJson.dump(4);\n\n    /* 创建会话 */\n    OH_QoS_GewuCreateSessionResult createResult = OH_QoS_GewuCreateSession(attrStr.c_str());\n    if (createResult.error != OH_QOS_GEWU_OK) {\n        DEMO_LOGE(\"failed to create session, error=%d\", (int)createResult.error);\n        return -1;\n    }\n    OH_QoS_GewuSession session = createResult.session;\n\n    /* 创建并提交请求 */\n    ChatContext context;\n    json requestJson = {\n        {\"messages\", json::array({\n            {{\"role\", \"developer\"}, {\"content\", \"You are a helpful assistant\"}},\n            {{\"role\", \"user\"}, {\"content\", \"What is LLM?\"}},\n        })},\n        {\"stream\", true},\n    };\n    std::string requestStr = requestJson.dump(4);\n    OH_QoS_GewuSubmitRequestResult submitResult = OH_QoS_GewuSubmitRequest(session, requestStr.c_str(),\n                                                                           OnChatResponse, &context);\n    if (submitResult.error != OH_QOS_GEWU_OK) {\n        DEMO_LOGE(\"failed to submit request, error=%d\", (int)submitResult.error);\n        return -1;\n    }\n    OH_QoS_GewuRequest request = submitResult.request;\n    context.Join();\n\n    /* 提前中止请求 */\n    if (context.earlyAbort) {\n        OH_QoS_GewuErrorCode error = OH_QoS_GewuAbortRequest(session, request);\n        if (error != OH_QOS_GEWU_OK) {\n            DEMO_LOGE(\"failed to abort request, error=%d\", (int)error);\n            return -1;\n        }\n    }\n\n    /* 打印结果 */\n    DEMO_LOGI(\"response: %s\", context.responseContent.c_str());\n\n    /* 销毁会话 */\n    OH_QoS_GewuErrorCode error = OH_QoS_GewuDestroySession(session);\n    if (error != OH_QOS_GEWU_OK) {\n        DEMO_LOGE(\"failed to destroy session, error=%d\", (int)error);\n        return -1;\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(537153)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在demo代码中，使用了第三方库nlohmann/json来简化JSON数据的解析与构造。nlohmann/json是一个现代C++的JSON库，提供了直观、简洁的方式来处理JSON数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "它的设计理念是让JSON操作像使用STL容器一样自然。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以下载json.hpp文件并放入项目的include目录即可使用，无需额外链接库文件。"
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
537153(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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