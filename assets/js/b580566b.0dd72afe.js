"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["39702"], {
764273(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_agent_ide_agent_rules_ide_agent_rules_md_b58_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-agent-ide-agent-rules-ide-agent-rules-md-b58.json
var site_docs_ide_agent_ide_agent_rules_ide_agent_rules_md_b58_namespaceObject = JSON.parse('{"id":"ide-agent/ide-agent-rules/ide-agent-rules","title":"规则（Rules）配置","description":"从DevEco Studio 6.0.2 Beta1开始，CodeGenie支持用户配置规则（Rules）。在自定义智能体模型下，智能问答时可生成更加符合Rules规范的代码。规则包括全局级别规则（Global Rules）和工程级别规则（Project Rules）。","source":"@site/docs/ide-agent/ide-agent-rules/ide-agent-rules.md","sourceDirName":"ide-agent/ide-agent-rules","slug":"/ide-agent/ide-agent-rules/","permalink":"/harmonyos-docs-site/ide-agent/ide-agent-rules/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"规则（Rules）配置","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-agent-rules","kit":"devtools/ai-coding","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"模型（Model）配置","permalink":"/harmonyos-docs-site/ide-agent/ide-agent-model/"},"next":{"title":"自定义智能体（Agent）配置和调用","permalink":"/harmonyos-docs-site/ide-agent/ide-agent-use/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-agent/ide-agent-rules/ide-agent-rules.md


const frontMatter = {
	title: '规则（Rules）配置',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-agent-rules',
	kit: 'devtools/ai-coding',
	last_updated: '2026-04-24'
};
const contentTitle = '规则（Rules）配置';

const assets = {

};



const toc = [{
  "value": "Global Rules配置",
  "id": "global-rules配置",
  "level": 2
}, {
  "value": "Project Rules配置",
  "id": "project-rules配置",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "规则rules配置",
        children: "规则（Rules）配置"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.2 Beta1开始，CodeGenie支持用户配置规则（Rules）。在自定义智能体模型下，智能问答时可生成更加符合Rules规范的代码。规则包括全局级别规则（Global Rules）和工程级别规则（Project Rules）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Global Rules"
        })
      }), "：支持开发者自行导入规则文件（Custom rule），或使用默认规则（Default rule），或不使用规则（No rules）；规则与用户绑定，对当前用户下所有工程生效；支持添加多个自定义规则，添加后可选择是否生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Project Rules"
        })
      }), "：需开发者自行导入或创建规则；规则仅对当前工程有效；仅支持添加一个自定义规则，添加后即生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(501330)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "规则文件：扩展名为.md的Markdown文件，.md文件中仅二级标题及以下的规则内容生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认规则（Default rule）需联网使用，无网络或网络故障时用户可选择Custom rule或No rules。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "global-rules配置",
      children: "Global Rules配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击界面右上方", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(964119)/* ["default"] */.A) + "",
            width: "21",
            height: "24"
          }), "按钮，或者点击界面右上方", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Settings"
            })
          }), (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(249622)/* ["default"] */.A) + "",
            width: "22",
            height: "20"
          }), "按钮，选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rules"
            })
          }), "，进入配置页面。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(314543)/* ["default"] */.A) + "",
            width: "626",
            height: "294"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["选择规则长度限制，包括", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Quality first"
            })
          }), "、", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Token efficiency first"
            })
          }), "，默认为Token efficiency first。DevEco Studio 6.1.0 Beta2版本新增。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Quality first：生成代码时遵循更多规则，帮助AI获取更准确答复。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Token efficiency first：生成代码时优先考虑Token长度，节省Token数量。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(732759)/* ["default"] */.A) + "",
            width: "626",
            height: "138"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以有网络为例，点击", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(785364)/* ["default"] */.A) + "",
            width: "17",
            height: "19"
          }), "图标导入规则文件。无网络时操作界面可能存在差异，以实际为准。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(493191)/* ["default"] */.A) + "",
            width: "667",
            height: "195"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择和管理规则文件。Global Rules列表全量展示了默认规则（Default rule）、自定义规则（Custom rule）和无规则（No rules），当前仅支持选择其中一个规则。若选择No rules，则全局规则不生效。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["将鼠标悬停在默认规则上，点击", (0,jsx_runtime.jsx)(_components.img, {
              src: (__webpack_require__(312643)/* ["default"] */.A) + "",
              width: "17",
              height: "13"
            }), "编辑图标，开发者可查看具体规则内容。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "将鼠标悬停在自定义规则上，会出现编辑和删除按钮，方便开发者管理自定义规则。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(25739)/* ["default"] */.A) + "",
            width: "692",
            height: "314"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "project-rules配置",
      children: "Project Rules配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击界面右上方", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(995604)/* ["default"] */.A) + "",
            width: "21",
            height: "24"
          }), "按钮，或者点击界面右上方", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Settings"
            })
          }), (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(891573)/* ["default"] */.A) + "",
            width: "22",
            height: "20"
          }), "按钮，选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rules"
            })
          }), "，进入配置页面。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建或导入Rule文件。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["创建Rule文件方法：点击", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Create Rule"
              })
            }), "，工程目录中会新增/.codegenie/project_rule.md文件，在project_rule.md文件中输入规则内容。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["导入Rule文件方法：点击", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Import Rule"
              })
            }), "，工程目录中会新增/.codegenie/project_rule.md文件，project_rule.md文件内容即为导入的规则文件内容。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(152514)/* ["default"] */.A) + "",
            width: "708",
            height: "159"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "管理规则文件。将鼠标悬停在工程文件上，会出现编辑和删除按钮，方便开发者管理工程规则文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(5902)/* ["default"] */.A) + "",
            width: "688",
            height: "154"
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
501330(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
249622(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAIAAAAGHlpnAAACIElEQVR4AbSRz0/TcBjGDYd2bCc3xG3sB4gJbi2NC5CAM8wlHpyRGZ0XuOoNPOmfoSfhple4OI3DOA8mc8QJCZCZ0m6SiLBudBO3eXHQ9sRDmjS0oSQEaJ588/Z53vfTt22bINZPqbYLp77OGbGw8P3Fyxkom80ds6vpFo16k10rTE0+fjr1ZI0r1v82zChGRKlU/pT+AiXfpW5FwhaLhSTJaCScfP8RJoQGA0uH2G3tplKfXc5On7drbCxG0wG1m6ID9+MxmIjQ0PrfUn311CH4wvqV3u5QiKHpgMt1udn8l8l8gxqNptPZCRNR79Uenl9Xh9VTh/B43KUtQZEVZJifnX2L92hvJ+fmkqDAVBSltCl4vG7UmnQIPNnv93L8T8Qsyw8MXB8ZGRoeHhocDLFsASae7/V1ud1O1Jp0CM09UaFDVKt/8MFp6hoQDEOtrv5YXFxeWlpeWckzTBAmRfWVhW1RrKHWpENUKqK/20eQBGK7/eLExCNJkvf25PHxhMNhh0kQhL/HVymLqDXpEFSw7/fGVj7PclwRG4ESjd6EMF+r7cBEtPFrk6IP1jwaYbVZ4/E71dqOUN6en09jRu3jueKHVBomIjTYbFbVV0/dFrDwR+7GbkOJh/Gv2ZwkSbIsZ7K5xIN7MCE0oO2wjAgtc3TYmf7g9MybV9Ov++lAxyWHFhkKUwT6RkdvPH82CUUiYdya6TiE2YzBPwPEPgAAAP//5yPDwwAAAAZJREFUAwBd0BOwqAJ7PwAAAABJRU5ErkJggg==");

},
493191(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912740-0a4b0dd9eea348c0dc3d295381588ff0.png");

},
25739(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752752-96b0230ce16ac76c9176c1b1f439a9eb.png");

},
732759(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002574933315-8f4ce739eb680c68fd813f2a370598f5.png");

},
5902(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752681-ff9ba467ead426ed99aa66fe8ff4b8ee.png");

},
312643(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAANCAIAAADAGxJNAAABjUlEQVR4AVyRsWrCQBjH7zIZqDiK4Bs4iUi1k0519AXqYCHpaqmoSO1UJ62CQxvjC1isfYIKBrFDzRPYUR0dKigW4vV/d5Km/fjlu//d9/8ul4uyFDGdvtdqd7ciIFwGg5d+/7ndbsO1WCwBhEIIsW27Xr+H+Adjh9VqWSzehEIhb0lhjAyHr4XCtaZpun6F0HUNgRyJRBqNRqlUCgQCf3ow2Wy+/P4TSiF/GY+tcrnSbDb3++/5/BNbwwDgUOQA5WUymVSrVTQkk2eMMcdxvFV+NkrRyYUsWJZVqZRbrYdE4hQ7uuBVAB64kTmyBrVerzudTjwehwNgxQUeaH5vjB0EBA6QzWaj0ShqEqwwPGIiR95DjyGWCe+UiopboTi6wm1yEZlPVFXd7XaYUEoAhNwPAmy3W59PhZAlCP7pqVQaP3s2s2ci8IuBkEgfo9FbLBaDVYLt+B1kMufhcNgwjKdjPBo8uphhzOcvg8GgbJCZvwetudyFaXZNswd6PWToLgRIp1M4FTxogCCE/AAAAP//D8nMTgAAAAZJREFUAwAmEtOut+L0oQAAAABJRU5ErkJggg==");

},
995604(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAIAAACa6yEfAAADGElEQVR4AYyUu0sjURTGZ+ImWW1slFXxBaKwgqXZThJrY2GhQuI/sBERs/iKs4WP+MCIsAEbLVTsfICxTyyT0hTaKC4bV7R10SUTzf6uJ0yCu8WGjzPfOef7zr1z7xDbr//4PTz8Q0QR2DRNy+cVIBakQqQiEQLgAGJB+SWhAYTruiYghRBpAQiwCFz5UQASUNojfQNkAupCbJaBXKpEigI4KG2RlrbU+uRULSSTycPDA9M0rQrk+TlHBJZYiE1m0xAcH8cikUgqlTIMI5vNIgKXl1f9/QNLS0svLy/oBehpqfVhglgstre3t76+Hg6Hy8vfG8aMaWavri6DweDQ0NDd3d3KyoooiTKl4GcSa2JeW1urq6srKyubmTEqKiomJibGx8dbW1vj8XhXVxevls2aiC0U/MzLZDLNzU01NR9yudzOzq5pmj6fP51ODw8PLy8vO53O7e2d1dVVh8OOWBYnKj8PSj09Pfl8fm5ubn5+/uLi4ubmZmpqKhQKeTye09MEbxGJrLa0tKBEz/oQoO5PErvdgffp6ffZWdrv901OTgYCAbfbw84XFhYaGxsbGhpEKREzRJ0/80iAw8GI2aamxpGRkUDgs8fjTiTi0Wh0Y2OjsrLSML5mX2/E0kPU/nHCJP5Qv0woNOPxqJUx8/L19Q0cp3UjoiSCgh/GiPv7+7Gxsd7eXrfbHY8nwuFFjmNra2t/f58bMQxD1/WTkxPE7Fxi0U/Oq9bW1h0dHe7u7kSj3zo6OtgIJz84OEiX+7++/s5e4IARuq4V/eTJZKq9/WN1dfXBwQGfyuLiYltbm6ZpNpt+e/tzdHTU5/N1dnZSEWBR5y8JF35+fs4K3d3dm5ubXJXT6ZidnX18fJyensbs9/u9Xi9rordicX273c73G4lEBgYGq6qqmY2OEVyey/UpGPzi9fZSkTpERhT95O/elRHplYK5fX19LpfLalkjkCl/aU4JnQBOC0CovImkQPl5iIgISAUWF7MUiVIngoKfKnijk5SIDiD4G4XvFxE9EREBKZA6RP1L51+fmvpr1TQVdV37AwAA//+y5ChYAAAABklEQVQDAP6HsTt4dHEiAAAAAElFTkSuQmCC");

},
891573(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAIAAAAGHlpnAAACIElEQVR4AbSRz0/TcBjGDYd2bCc3xG3sB4gJbi2NC5CAM8wlHpyRGZ0XuOoNPOmfoSfhple4OI3DOA8mc8QJCZCZ0m6SiLBudBO3eXHQ9sRDmjS0oSQEaJ588/Z53vfTt22bINZPqbYLp77OGbGw8P3Fyxkom80ds6vpFo16k10rTE0+fjr1ZI0r1v82zChGRKlU/pT+AiXfpW5FwhaLhSTJaCScfP8RJoQGA0uH2G3tplKfXc5On7drbCxG0wG1m6ID9+MxmIjQ0PrfUn311CH4wvqV3u5QiKHpgMt1udn8l8l8gxqNptPZCRNR79Uenl9Xh9VTh/B43KUtQZEVZJifnX2L92hvJ+fmkqDAVBSltCl4vG7UmnQIPNnv93L8T8Qsyw8MXB8ZGRoeHhocDLFsASae7/V1ud1O1Jp0CM09UaFDVKt/8MFp6hoQDEOtrv5YXFxeWlpeWckzTBAmRfWVhW1RrKHWpENUKqK/20eQBGK7/eLExCNJkvf25PHxhMNhh0kQhL/HVymLqDXpEFSw7/fGVj7PclwRG4ESjd6EMF+r7cBEtPFrk6IP1jwaYbVZ4/E71dqOUN6en09jRu3jueKHVBomIjTYbFbVV0/dFrDwR+7GbkOJh/Gv2ZwkSbIsZ7K5xIN7MCE0oO2wjAgtc3TYmf7g9MybV9Ov++lAxyWHFhkKUwT6RkdvPH82CUUiYdya6TiE2YzBPwPEPgAAAP//5yPDwwAAAAZJREFUAwBd0BOwqAJ7PwAAAABJRU5ErkJggg==");

},
964119(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAIAAACa6yEfAAADGElEQVR4AYyUu0sjURTGZ+ImWW1slFXxBaKwgqXZThJrY2GhQuI/sBERs/iKs4WP+MCIsAEbLVTsfICxTyyT0hTaKC4bV7R10SUTzf6uJ0yCu8WGjzPfOef7zr1z7xDbr//4PTz8Q0QR2DRNy+cVIBakQqQiEQLgAGJB+SWhAYTruiYghRBpAQiwCFz5UQASUNojfQNkAupCbJaBXKpEigI4KG2RlrbU+uRULSSTycPDA9M0rQrk+TlHBJZYiE1m0xAcH8cikUgqlTIMI5vNIgKXl1f9/QNLS0svLy/oBehpqfVhglgstre3t76+Hg6Hy8vfG8aMaWavri6DweDQ0NDd3d3KyoooiTKl4GcSa2JeW1urq6srKyubmTEqKiomJibGx8dbW1vj8XhXVxevls2aiC0U/MzLZDLNzU01NR9yudzOzq5pmj6fP51ODw8PLy8vO53O7e2d1dVVh8OOWBYnKj8PSj09Pfl8fm5ubn5+/uLi4ubmZmpqKhQKeTye09MEbxGJrLa0tKBEz/oQoO5PErvdgffp6ffZWdrv901OTgYCAbfbw84XFhYaGxsbGhpEKREzRJ0/80iAw8GI2aamxpGRkUDgs8fjTiTi0Wh0Y2OjsrLSML5mX2/E0kPU/nHCJP5Qv0woNOPxqJUx8/L19Q0cp3UjoiSCgh/GiPv7+7Gxsd7eXrfbHY8nwuFFjmNra2t/f58bMQxD1/WTkxPE7Fxi0U/Oq9bW1h0dHe7u7kSj3zo6OtgIJz84OEiX+7++/s5e4IARuq4V/eTJZKq9/WN1dfXBwQGfyuLiYltbm6ZpNpt+e/tzdHTU5/N1dnZSEWBR5y8JF35+fs4K3d3dm5ubXJXT6ZidnX18fJyensbs9/u9Xi9rordicX273c73G4lEBgYGq6qqmY2OEVyey/UpGPzi9fZSkTpERhT95O/elRHplYK5fX19LpfLalkjkCl/aU4JnQBOC0CovImkQPl5iIgISAUWF7MUiVIngoKfKnijk5SIDiD4G4XvFxE9EREBKZA6RP1L51+fmvpr1TQVdV37AwAA//+y5ChYAAAABklEQVQDAP6HsTt4dHEiAAAAAElFTkSuQmCC");

},
785364(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAATCAIAAAD5x3GmAAACPUlEQVR4AXSSTW8SURSG72VlN9Z2o/6CBoktcQFFu7KLKiU2pomhpKClfkQ34I+AmKgRmoKJ1RAsZUhT3NtEXdnCtpgZ6sYSEnVB6k6aLsDnzg1TN508ufO+555z7seMq3t0rPnbPdZoy3iadYnBI+VACdHvK60jWuOxgFA1RAFDCLRg/B+doCMuxziCCTQgaAEI0BGEWoeXZZnRxUg4fGdhIQyRSBiw29sfmXWytXbRpl7fffL4UTy+nEw+TSSSNgke7PjlcQqaTWt+/jaZ1IDa29ZWNRq7e3162u8P+P2T9oNQnL9w0bKshw/up9NpsjVqb0fd7ujIqPaM9Xqt0+kgwDTN5fjSai43NuZmQSCo9iZdjGpBPBsoldZ3dr4iLMtcuhfLv85PTHhbrR9fPn8iCCq13+v1+z0KQHcSQpqmFYsurubyXu8Vgnt7jeqHqrA/HSsIXUADQiCl/NZocI3PX7z0+XxSCiDuoNaRUp2KZjpKztram1tzc0NDZ2q13T+Hh3bc/jWEoF5nq41hNDMzN/yTfg6TzWZXsis/f/2220lptxZCqBpewITmZnDWMDZtKmXD8HguScn8CU6NCjMHJ5MDRS+kPjZC3cHZ4eF2u43RUAboQSpStA4ORkbOoQiqOwjNhgqFt++LRU7swJfln8IyltaLhcK7YDBEDe3U3q5NTZU2jOa+lcm84twDMljANve/b5QrgcBVFgFVQ7XH40mnn3HucrmiMYxKpbIJiFQq5Xa7WYFMIcQ/AAAA//80wzv1AAAABklEQVQDAE9RRZ/11VIXAAAAAElFTkSuQmCC");

},
314543(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002575092879-8cc353fe80ec752332b8fd434b538fcd.png");

},
152514(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752726-5d146c3ecc47fe4ea5b9b33df539342c.png");

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