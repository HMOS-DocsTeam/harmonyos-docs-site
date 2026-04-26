"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["557726"], {
939409(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_agent_ide_agent_mcp_ide_agent_mcp_md_4d5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-agent-ide-agent-mcp-ide-agent-mcp-md-4d5.json
var site_docs_ide_agent_ide_agent_mcp_ide_agent_mcp_md_4d5_namespaceObject = JSON.parse('{"id":"ide-agent/ide-agent-mcp/ide-agent-mcp","title":"模型上下文协议（MCP）配置","description":"功能介绍","source":"@site/docs/ide-agent/ide-agent-mcp/ide-agent-mcp.md","sourceDirName":"ide-agent/ide-agent-mcp","slug":"/ide-agent/ide-agent-mcp/","permalink":"/harmonyos-docs-site/ide-agent/ide-agent-mcp/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"模型上下文协议（MCP）配置","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-agent-mcp","kit":"devtools/ai-coding","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"意图装饰器生成和小艺智能体创建","permalink":"/harmonyos-docs-site/ide-insight-intent2/"},"next":{"title":"模型（Model）配置","permalink":"/harmonyos-docs-site/ide-agent/ide-agent-model/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-agent/ide-agent-mcp/ide-agent-mcp.md


const frontMatter = {
	title: '模型上下文协议（MCP）配置',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-agent-mcp',
	kit: 'devtools/ai-coding',
	last_updated: '2026-04-24'
};
const contentTitle = '模型上下文协议（MCP）配置';

const assets = {

};



const toc = [{
  "value": "功能介绍",
  "id": "功能介绍",
  "level": 2
}, {
  "value": "环境约束",
  "id": "环境约束",
  "level": 2
}, {
  "value": "操作步骤",
  "id": "操作步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "模型上下文协议mcp配置",
        children: "模型上下文协议（MCP）配置"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模型上下文协议（Model Context Protocol，简称MCP）是一种开放协议，允许大型语言模型（LLMs）访问自定义的工具和服务，可以通过部署MCP Server并将其集成到自定义智能体中来使用。关于 MCP 的更多信息，请参考 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://modelcontextprotocol.io/introduction",
        children: "MCP 官方文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.1 Beta1开始，CodeGenie支持配置MCP。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.1.0 Beta2开始，支持在MCP配置界面添加Node (npx) Path和Python (uvx) Path，支持从MCP市场添加MCP工具。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境约束",
      children: "环境约束"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为保证MCP Server正常启动，需要安装npx和uvx，可在配置MCP工具时在Node (npx) Path和Python (uvx) Path中添加。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "npx：依赖于Node.js，建议使用Node.js的LTS版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "uvx：基于Python的快速执行工具，建议安装Python 3.9 以上的版本。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "操作步骤",
      children: "操作步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击界面右上方", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(92613)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "23",
            height: "23"
          }), "按钮，或者点击界面右上方", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Settings"
            })
          }), (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(168559)/* ["default"] */.A) + "",
            width: "22",
            height: "20"
          }), "按钮，选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MCP"
            })
          }), "，进入配置页面。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(217809)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "631",
            height: "254"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["添加MCP工具。点击", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(275437)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "20",
            height: "20"
          }), "按钮或", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Add Manually"
            })
          }), "手动添加，点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MCP Market"
            })
          }), "或", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Add from MCP Market"
            })
          }), "从MCP市场添加。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(891635)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "633",
            height: "294"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "手动添加"
                })
              }), "：在编辑框中填写MCP工具的配置信息，填写完成后点击", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Add"
                })
              }), "。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(182563)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "MCP Server支持三种通信方式：Stdio 、Server-Sent Events (SSE) 和Streamable HTTP。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Stdio方式支持配置cmd、args和env字段，SSE和Streamable HTTP方式支持配置url字段。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(17360)/* ["default"] */.A) + "",
                title: "点击放大",
                width: "633",
                height: "728"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "从MCP市场添加"
                })
              }), "：在搜索框中搜索目标MCP工具，点击", (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(58517)/* ["default"] */.A) + "",
                title: "点击放大",
                width: "20",
                height: "20"
              }), "按钮添加。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(486163)/* ["default"] */.A) + "",
                title: "点击放大",
                width: "629",
                height: "290"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MCP Tools"
            })
          }), "列表中，展示所有MCP工具信息，包括名称、连接状态、启用状态。同时，将鼠标悬浮在工具上会显示三个操作按钮：刷新、编辑和删除，方便开发者管理工具。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(524708)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "627",
            height: "226"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "名称：MCP工具名称，如everything、time。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "连接状态：工具连接状态，包括“成功”、“失败”和“连接中”三种状态。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "启用状态：工具是否已启用。"
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
486163(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002574885083-1abbe0accc4d96b5ebe5850911c5a576.png");

},
168559(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAIAAAAGHlpnAAACIElEQVR4AbSRz0/TcBjGDYd2bCc3xG3sB4gJbi2NC5CAM8wlHpyRGZ0XuOoNPOmfoSfhple4OI3DOA8mc8QJCZCZ0m6SiLBudBO3eXHQ9sRDmjS0oSQEaJ588/Z53vfTt22bINZPqbYLp77OGbGw8P3Fyxkom80ds6vpFo16k10rTE0+fjr1ZI0r1v82zChGRKlU/pT+AiXfpW5FwhaLhSTJaCScfP8RJoQGA0uH2G3tplKfXc5On7drbCxG0wG1m6ID9+MxmIjQ0PrfUn311CH4wvqV3u5QiKHpgMt1udn8l8l8gxqNptPZCRNR79Uenl9Xh9VTh/B43KUtQZEVZJifnX2L92hvJ+fmkqDAVBSltCl4vG7UmnQIPNnv93L8T8Qsyw8MXB8ZGRoeHhocDLFsASae7/V1ud1O1Jp0CM09UaFDVKt/8MFp6hoQDEOtrv5YXFxeWlpeWckzTBAmRfWVhW1RrKHWpENUKqK/20eQBGK7/eLExCNJkvf25PHxhMNhh0kQhL/HVymLqDXpEFSw7/fGVj7PclwRG4ESjd6EMF+r7cBEtPFrk6IP1jwaYbVZ4/E71dqOUN6en09jRu3jueKHVBomIjTYbFbVV0/dFrDwR+7GbkOJh/Gv2ZwkSbIsZ7K5xIN7MCE0oO2wjAgtc3TYmf7g9MybV9Ov++lAxyWHFhkKUwT6RkdvPH82CUUiYdya6TiE2YzBPwPEPgAAAP//5yPDwwAAAAZJREFUAwBd0BOwqAJ7PwAAAABJRU5ErkJggg==");

},
92613(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAIAAABvSEP3AAABzElEQVR4AeTQyUsCYRQA8CbqD8isWwu0Q0VEVocKWqBohYjWQxAtDKW5tIuVGUW0E0aGhpEHQVPMS5coKLqE1S1tQeugHro54sWlBx9IjqNzyFvD42Pm+773m/de/Jf9++8RHxeL538pHo9HIl5saaofGhx4tZijDDDiXIDgsnG/369Qqrq6e/ncCa/XGwmiVhCRlp4+ho9P8yerqmsSExKfn0yBQIASolCCxPAojo8MtbS1f9psDoddtDDb0dpoMb+EQ2SFRPT0DxQWFk/xOJs7+3rjJXuSvySap1EoCQGXvSRehaO+7s7augab1RreV0gti8I5mAX8EBpBVSCCcBO7WxvbewdnpyelZSwMw0jlhCgTHJ5QJNbrtKyKiqLikt+EVKa4v7s1XhhWJOskAj5DlIzMTAzD3ATBZKbCFJcla6gKROjONcdyJTMlBdJIEaKgs6bmVq1GTbhcj6YHaISWgCwKJSsr+/BI7nQ6fD6fUqWGRqJUAQQEhQK72Tm5M3NCDldwc31FS8B9agUOUBj0OnycTTkLdAGtNApPML25sfbx/oZuR1ppFFZ55YFUlsRgRMpH+zQKXMrLL2AwkuElStArUZKDR7FRfgAAAP//YLFrgQAAAAZJREFUAwA+ow1qZWHxzgAAAABJRU5ErkJggg==");

},
58517(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAU0lEQVR4AdyQUQoAIAhDw3P36Yk7QeBE/JJAJXAfqxb1WnQSopXQwMNbFPzJkM5SUw1tdSEDEvPSzuwEggsYiXkp2W59mbSR0TZ4Qhs5YGLrH/kCAAD//5lYOW4AAAAGSURBVAMAiUFW4WyHXRQAAAAASUVORK5CYII=");

},
275437(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAU0lEQVR4AdyQUQoAIAhDw3P36Yk7QeBE/JJAJXAfqxb1WnQSopXQwMNbFPzJkM5SUw1tdSEDEvPSzuwEggsYiXkp2W59mbSR0TZ4Qhs5YGLrH/kCAAD//5lYOW4AAAAGSURBVAMAiUFW4WyHXRQAAAAASUVORK5CYII=");

},
891635(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002544364856-097f1e72fbae007ed6a7328d013063b2.png");

},
524708(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002575045065-b1cc52a4acbadb31458822a86d5439b1.png");

},
17360(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002544205206-72ad040fc06b8723b6b52874c72ed217.png");

},
182563(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
217809(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002575045063-4112de268851042b912845355ffac707.png");

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