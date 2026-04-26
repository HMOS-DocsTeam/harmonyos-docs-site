"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["579876"], {
485649(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_codegenie_code_edit_ide_code_continuation_ide_code_continuation_md_242_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-codegenie-code-edit-ide-code-continuation-ide-code-continuation-md-242.json
var site_docs_ide_codegenie_code_edit_ide_code_continuation_ide_code_continuation_md_242_namespaceObject = JSON.parse('{"id":"ide-codegenie-code-edit/ide-code-continuation/ide-code-continuation","title":"代码续写","description":"利用AI大模型分析并理解开发者在代码编辑区的上下文信息或自然语言描述信息，智能续写符合上下文的ArkTS或C++代码片段，减少重复编码工作。","source":"@site/docs/ide-codegenie-code-edit/ide-code-continuation/ide-code-continuation.md","sourceDirName":"ide-codegenie-code-edit/ide-code-continuation","slug":"/ide-codegenie-code-edit/ide-code-continuation/","permalink":"/harmonyos-docs-site/ide-codegenie-code-edit/ide-code-continuation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"代码续写","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-continuation","kit":"devtools/ai-coding","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"编辑区对话","permalink":"/harmonyos-docs-site/ide-codegenie-code-edit/ide-edit-area-code-generation/"},"next":{"title":"页面生成","permalink":"/harmonyos-docs-site/ide-page-generation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-codegenie-code-edit/ide-code-continuation/ide-code-continuation.md


const frontMatter = {
	title: '代码续写',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-continuation',
	kit: 'devtools/ai-coding',
	last_updated: '2026-04-24'
};
const contentTitle = '代码续写';

const assets = {

};



const toc = [{
  "value": "使用约束",
  "id": "使用约束",
  "level": 2
}, {
  "value": "续写设置",
  "id": "续写设置",
  "level": 2
}, {
  "value": "<strong><strong>DevEco Studio 6.1.0 Release及以上版本</strong></strong>",
  "id": "deveco-studio-610-release及以上版本",
  "level": 3
}, {
  "value": "<strong><strong>DevEco Studio 6.1.0 Beta2</strong></strong>",
  "id": "deveco-studio-610-beta2",
  "level": 3
}, {
  "value": "<strong><strong>DevEco Studio 6.1.0 Beta2以下版本</strong></strong>",
  "id": "deveco-studio-610-beta2以下版本",
  "level": 3
}, {
  "value": "续写触发和采纳",
  "id": "续写触发和采纳",
  "level": 2
}, {
  "value": "续写触发",
  "id": "续写触发",
  "level": 3
}, {
  "value": "续写采纳",
  "id": "续写采纳",
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
        id: "代码续写",
        children: "代码续写"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "利用AI大模型分析并理解开发者在代码编辑区的上下文信息或自然语言描述信息，智能续写符合上下文的ArkTS或C++代码片段，减少重复编码工作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.1.0 Beta2版本开始，代码续写入口变更为Code Completion & Inline Chat，续写启动等设置相关选项的入口发生变化；支持添加模型和提示词。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用约束",
      children: "使用约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "建议编辑区已有较丰富上下文，能够使AI模型对编程场景有一定理解的情况下进行续写。若编辑器中内容较少，AI模型可能无法有效理解用户的意图并生成相应的代码。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI模型反馈需满足规则：光标上文10行内，有效代码行数超过5行（排除单独{}、（）、[]括号行、空行、纯注释行场景）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "续写设置",
      children: "续写设置"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deveco-studio-610-release及以上版本",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DevEco Studio 6.1.0 Release及以上版本"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["进入", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "File > Settings..."
        })
      }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DevEco Studio > Preferences/Settings"
        })
      }), "）", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: ">"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "CodeGenie > Code Completion"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "& Inline Chat"
        })
      }), "页面进行设置，若没登录华为开发者账号请先登录。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "快捷键和续写开启设置"
        })
      }), "选项****：****"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Display hints for code suggestion inline chat"
          })
        }), "：在编辑区空行显示触发代码续写等功能的快捷键。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enable"
          })
        }), "：启用代码续写能力。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Display hints for accept shortcuts"
          })
        }), "：在续写结果最后的位置显示采纳代码的快捷键。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "自动续写设置"
        })
      }), "选项****：****"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Auto Suggestion"
          })
        }), "：自动续写开关，开启后将会根据代码上下文在合适位置自动触发代码续写。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Frequency"
          })
        }), "：控制自动续写的触发频率。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Allow auto suggestion for code completion"
          })
        }), "：是否允许自动续写与编辑器联想功能同时存在。取消勾选后，编辑器联想功能优先级更高。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "续写模型设置"
        })
      }), "选项****：****"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CodeGenie为续写功能提供了内置的模型，也可使用三方模型和提示词进行续写。当前续写仅支持OpenAI和Ollama两种协议的模型，同时模型需支持FIM（Fill-in-Middle）补全能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Model"
          })
        }), "：选择代码续写的模型，模型内容请参考：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-agent/ide-agent-model",
          children: "模型（Model）配置"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Prompt format"
          })
        }), "：提示词格式，此处列出了主流的FIM提示词格式，并自动与模型选项联动。设置时需要选择与模型匹配的提示词格式，续写才能正常工作，开发者可在模型官网或者模型技术报告获取提示词格式。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(327569)/* ["default"] */.A) + "",
        width: "983",
        height: "711"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deveco-studio-610-beta2",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DevEco Studio 6.1.0 Beta2"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["进入", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "File > Settings..."
        })
      }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DevEco Studio > Preferences/Settings"
        })
      }), "）", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: ">"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "CodeGenie > Code Completion"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "& Inline Chat"
        })
      }), "页面进行设置，若没登录华为开发者账号请先登录。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "快捷键和续写开启设置"
        })
      }), "选项****：****"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Show trigger shortcut tips"
          })
        }), "：在编辑区空行显示触发代码续写等功能的快捷键。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enable code completion"
          })
        }), "：启用代码续写能力。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Show accept shortcut tips"
          })
        }), "：在续写结果最后的位置显示采纳代码的快捷键。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "自动续写设置"
        })
      }), "选项****：****"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enable code auto completion"
          })
        }), "：自动续写开关，开启后将会根据代码上下文在合适位置自动触发代码续写。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Frequency"
          })
        }), "：控制自动续写的触发频率。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Auto-completion is allowed when code completion is triggerd"
          })
        }), "：是否允许自动续写与编辑器联想功能同时存在。取消勾选后，编辑器联想功能优先级更高。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "续写模型设置"
        })
      }), "选项****：****"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CodeGenie为续写功能提供了内置的模型，也可使用三方模型和提示词进行续写。当前续写仅支持OpenAI和Ollama两种协议的模型，同时模型需支持FIM（Fill-in-Middle）补全能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Model"
          })
        }), "：选择代码续写的模型，模型内容请参考：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-agent/ide-agent-model",
          children: "模型（Model）配置"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Prompt format"
          })
        }), "：提示词格式，此处列出了主流的FIM提示词格式，并自动与模型选项联动。设置时需要选择与模型匹配的提示词格式，续写才能正常工作，开发者可在模型官网或者模型技术报告获取提示词格式。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(438952)/* ["default"] */.A) + "",
        width: "982",
        height: "734"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deveco-studio-610-beta2以下版本",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DevEco Studio 6.1.0 Beta2以下版本"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["进入", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "File > Settings..."
        })
      }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DevEco Studio > Preferences/Settings"
            })
          })
        })
      }), "）", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: ">"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "CodeGenie > Code Generation"
        })
      }), "页面勾选", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Enable code generation"
        })
      }), "，开启代码续写功能。如果已经熟悉了CodeGenie常用的快捷键，想要更加沉浸的体验，可以在该页面勾选", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Do not disturb"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "mode"
        })
      }), "，隐藏代码生成工具栏及快捷键提示。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["同时，根据编码习惯，选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Enable snippet generation"
        })
      }), "（片段续写）和", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Enable inline generation"
        })
      }), "（行内续写），以及设置续写时延。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(164158)/* ["default"] */.A) + "",
        width: "980",
        height: "709"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "续写触发和采纳",
      children: "续写触发和采纳"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "续写触发",
      children: "续写触发"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DevEco Studio 6.1.0 Release及以上版本"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Enable inline generation（行内续写）与Enable snippet generation（片段续写）合并为", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Auto Suggestion"
        })
      }), "，取消了", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Delay"
        })
      }), "设置项，通过设置", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency"
        })
      }), "调整自动续写的触发频次。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(598742)/* ["default"] */.A) + "",
        width: "981",
        height: "711"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DevEco Studio 6.1.0 Beta2"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Enable inline generation（行内续写）与Enable snippet generation（片段续写）合并为", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Enable code auto completion"
        })
      }), "，取消了", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Delay"
        })
      }), "设置项，通过设置", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency"
        })
      }), "调整自动续写的触发频次。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(722822)/* ["default"] */.A) + "",
        width: "982",
        height: "734"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DevEco Studio 6.1.0 Beta2以下版本"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enable inline generation"
          })
        }), "（行内续写）：在编码时稍作停顿，CodeGenie将在当前代码行即时续写代码。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enable snippet generation"
          })
        }), "（片段续写）：输入回车，CodeGenie将根据上下文生成代码片段。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在编辑区输入", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Alt+C"
          })
        }), "快捷键（macOS上为", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Option+C"
          })
        }), "）触发代码续写。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(590828)/* ["default"] */.A) + "",
        width: "980",
        height: "711"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "续写采纳",
      children: "续写采纳"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "续写内容采纳方式"
        })
      }), "****：****"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["可通过按", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Ta********b"
          })
        }), "键采纳该内容。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["****Ctrl + ↓（", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "macOS中为"
          })
        }), "Command + ↓********）****逐行采纳该内容。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["****Ctrl + →", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsxs)(_components.strong, {
                children: ["（", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "macOS中为"
                  })
                }), "Option + →"]
              })
            })
          })
        }), "）****逐单词采纳该内容。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过按", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "ESC"
          })
        }), "键忽略该内容。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(139833)/* ["default"] */.A) + "",
        width: "1206",
        height: "971"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "CodeGenie续写常用快捷键如下："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {})]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "操作"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "macOS"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Windows"
              })
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "触发多行代码续写"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enter、Option+C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enter、Alt+C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "触发单行代码续写"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Option+X"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alt+X"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "采纳续写生成的代码"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tab"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tab"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "忽略续写生成的代码"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Esc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Esc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "查看上一个代码续写结果"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Option +["
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alt + ["
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "查看下一个代码续写结果"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Option + ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alt + ]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "重新生成代码内容（最多支持重新生成5次）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Option + R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alt + R"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "展示CodeGenie面板"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Option + U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alt + U"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "代码逐行采纳"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Command + ↓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ctrl + ↓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "代码逐单词采纳"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Option + →"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ctrl + →"
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
139833(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753710-3a28e75f346fef2f2619ccbf9d546c84.png");

},
164158(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753714-d16cfedcc3b622f17ea5937fd8633415.png");

},
722822(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753647-5335da4511cd756dac57ba1c7ba2f000.png");

},
598742(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913708-18a7dae4042a1b0c526ca39801839332.png");

},
438952(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913702-c11cb4e71ee3194d28ee1ec2cecde1d9.png");

},
327569(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913706-be9e2ea519e28adca53dcc80f11cd36d.png");

},
590828(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753712-416719a743e0e53f011076c570dde558.png");

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