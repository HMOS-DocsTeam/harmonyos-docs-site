"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["567299"], {
223675(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_cann_api_hiai_foundation_c_cannkit_total_cannkit_structs_cannkit_sopexec_fusedconv_actparam_cannkit_sopexec_fusedconv_actparam_md_b92_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-cann-api-hiai-foundation-c-cannkit-total-cannkit-structs-cannkit-sopexec-fusedconv-actparam-cannkit-sopexec-fusedconv-actparam-md-b92.json
var site_docs_ref_cann_api_hiai_foundation_c_cannkit_total_cannkit_structs_cannkit_sopexec_fusedconv_actparam_cannkit_sopexec_fusedconv_actparam_md_b92_namespaceObject = JSON.parse('{"id":"cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopexec-fusedconv-actparam/cannkit-sopexec-fusedconv-actparam","title":"HiAI_SingleOpExecutorFusedConvolutionActivationParam","description":"概述","source":"@site/docs-ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopexec-fusedconv-actparam/cannkit-sopexec-fusedconv-actparam.md","sourceDirName":"cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopexec-fusedconv-actparam","slug":"/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopexec-fusedconv-actparam/cannkit-sopexec-fusedconv-actparam","permalink":"/harmonyos-docs-site/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopexec-fusedconv-actparam/cannkit-sopexec-fusedconv-actparam","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"HiAI_SingleOpExecutorFusedConvolutionActivationParam","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit-sopexec-fusedconv-actparam","kit":"AI","last_updated":"2026-04-22","slug":"cannkit-sopexec-fusedconv-actparam"},"sidebar":"ref","previous":{"title":"HiAI_SingleOpExecutorConvolutionParam","permalink":"/harmonyos-docs-site/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopexec-convparam/cannkit-sopexec-convparam"},"next":{"title":"textToSpeech（文本转语音）","permalink":"/harmonyos-docs-site/ref/core-speech-api/core-speech-arkts/hms-ai-texttospeech/hms-ai-texttospeech"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopexec-fusedconv-actparam/cannkit-sopexec-fusedconv-actparam.md


const frontMatter = {
	title: 'HiAI_SingleOpExecutorFusedConvolutionActivationParam',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit-sopexec-fusedconv-actparam',
	kit: 'AI',
	last_updated: '2026-04-22',
	slug: 'cannkit-sopexec-fusedconv-actparam'
};
const contentTitle = 'HiAI_SingleOpExecutorFusedConvolutionActivationParam';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "成员变量",
  "id": "成员变量",
  "level": 3
}, {
  "value": "结构体成员变量说明",
  "id": "结构体成员变量说明",
  "level": 2
}, {
  "value": "actOpDesc",
  "id": "actopdesc",
  "level": 3
}, {
  "value": "bias",
  "id": "bias",
  "level": 3
}, {
  "value": "convOpDesc",
  "id": "convopdesc",
  "level": 3
}, {
  "value": "filter",
  "id": "filter",
  "level": 3
}, {
  "value": "input",
  "id": "input",
  "level": 3
}, {
  "value": "options",
  "id": "options",
  "level": 3
}, {
  "value": "output",
  "id": "output",
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
    p: "p",
    pre: "pre",
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
        id: "hiai_singleopexecutorfusedconvolutionactivationparam",
        children: "HiAI_SingleOpExecutorFusedConvolutionActivationParam"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopexecutor_createfusedconvolutionactivation",
        children: "HMS_HiAISingleOpExecutor_CreateFusedConvolutionActivation"
      }), "输入参数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit",
        children: "CANN"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-single-op-8h/cannkit-hiai-single-op-8h",
        children: "hiai_single_op.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopoptions",
              children: "HiAI_SingleOpOptions"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#options",
              children: "options"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopoptions",
              children: "HiAI_SingleOpOptions"
            }), "对象的指针。该值不能为空指针，否则接口调用失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopdescriptor",
              children: "HiAI_SingleOpDescriptor"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#convopdesc",
              children: "convOpDesc"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向卷积算子对应的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopdescriptor",
              children: "HiAI_SingleOpDescriptor"
            }), "对象的指针。该值不能为空指针，否则接口调用失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopdescriptor",
              children: "HiAI_SingleOpDescriptor"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#actopdesc",
              children: "actOpDesc"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向激活算子对应的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopdescriptor",
              children: "HiAI_SingleOpDescriptor"
            }), "对象的指针。该值不能为空指针，否则接口调用失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input",
              children: "input"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向输入Tensor描述的指针。该值不能为空指针，否则接口调用失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#output",
              children: "output"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向输出Tensor描述的指针。该值不能为空指针，否则接口调用失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#filter",
              children: "filter"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向卷积核Tensor的指针。该值不能为空指针，否则接口调用失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#bias",
              children: "bias"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向偏置Tensor的指针。如果卷积没有偏置，则该值可以是空指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "结构体成员变量说明",
      children: "结构体成员变量说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "actopdesc",
      children: "actOpDesc"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_SingleOpDescriptor* HiAI_SingleOpExecutorFusedConvolutionActivationParam::actOpDesc\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["指向激活算子对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopdescriptor",
        children: "HiAI_SingleOpDescriptor"
      }), "对象的指针。该值不能为空指针，否则接口调用失败。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bias",
      children: "bias"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_SingleOpTensor* HiAI_SingleOpExecutorFusedConvolutionActivationParam::bias\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指向偏置Tensor的指针。如果卷积没有偏置，则该值可以是空指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "convopdesc",
      children: "convOpDesc"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_SingleOpDescriptor* HiAI_SingleOpExecutorFusedConvolutionActivationParam::convOpDesc\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["指向卷积算子对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopdescriptor",
        children: "HiAI_SingleOpDescriptor"
      }), "对象的指针。该值不能为空指针，否则接口调用失败。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "filter",
      children: "filter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_SingleOpTensor* HiAI_SingleOpExecutorFusedConvolutionActivationParam::filter\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指向卷积核Tensor的指针。该值不能为空指针，否则接口调用失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "input",
      children: "input"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_SingleOpTensorDesc* HiAI_SingleOpExecutorFusedConvolutionActivationParam::input\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指向输入Tensor描述的指针。该值不能为空指针，否则接口调用失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "options",
      children: "options"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_SingleOpOptions* HiAI_SingleOpExecutorFusedConvolutionActivationParam::options\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopoptions",
        children: "HiAI_SingleOpOptions"
      }), "对象的指针。该值不能为空指针，否则接口调用失败。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "output",
      children: "output"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_SingleOpTensorDesc* HiAI_SingleOpExecutorFusedConvolutionActivationParam::output\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指向输出Tensor描述的指针。该值不能为空指针，否则接口调用失败。"
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