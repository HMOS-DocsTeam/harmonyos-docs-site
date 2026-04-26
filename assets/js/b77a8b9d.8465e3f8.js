"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["456820"], {
535155(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_refactoring_ide_code_refactoring_md_b77_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-refactoring-ide-code-refactoring-md-b77.json
var site_docs_ide_code_edit_ide_code_refactoring_ide_code_refactoring_md_b77_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-refactoring/ide-code-refactoring","title":"代码重构","description":"ArkTS/TS代码重构","source":"@site/docs/ide-code-edit/ide-code-refactoring/ide-code-refactoring.md","sourceDirName":"ide-code-edit/ide-code-refactoring","slug":"/ide-code-edit/ide-code-refactoring/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-refactoring/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"代码重构","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-refactoring","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@compatibility/api-compatibility-check","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-codelinter-compatibility/ide-api-compatibility-check/"},"next":{"title":"文档生成","permalink":"/harmonyos-docs-site/ide-code-edit/ide-arktsdoc/ide-arktsdoc-generation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-refactoring/ide-code-refactoring.md


const frontMatter = {
	title: '代码重构',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-refactoring',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '代码重构';

const assets = {

};



const toc = [{
  "value": "ArkTS/TS代码重构",
  "id": "arktsts代码重构",
  "level": 2
}, {
  "value": "Refactor-Extract代码提取",
  "id": "refactor-extract代码提取",
  "level": 3
}, {
  "value": "Refactor-Convert代码转换",
  "id": "refactor-convert代码转换",
  "level": 3
}, {
  "value": "Refactor-Rename代码重命名",
  "id": "refactor-rename代码重命名",
  "level": 3
}, {
  "value": "Move File",
  "id": "move-file",
  "level": 3
}, {
  "value": "Safe Delete",
  "id": "safe-delete",
  "level": 3
}, {
  "value": "C++代码重构",
  "id": "c代码重构",
  "level": 2
}, {
  "value": "展开宏",
  "id": "展开宏",
  "level": 3
}, {
  "value": "交换if分支",
  "id": "交换if分支",
  "level": 3
}, {
  "value": "移动函数体到声明处",
  "id": "移动函数体到声明处",
  "level": 3
}, {
  "value": "移动函数体到实现处",
  "id": "移动函数体到实现处",
  "level": 3
}, {
  "value": "将语句转为原始字符串",
  "id": "将语句转为原始字符串",
  "level": 3
}, {
  "value": "定义构造函数",
  "id": "定义构造函数",
  "level": 3
}, {
  "value": "提取表达式到变量",
  "id": "提取表达式到变量",
  "level": 3
}, {
  "value": "移除namespace",
  "id": "移除namespace",
  "level": 3
}, {
  "value": "添加using声明",
  "id": "添加using声明",
  "level": 3
}, {
  "value": "auto自动展开",
  "id": "auto自动展开",
  "level": 3
}, {
  "value": "声明隐式成员",
  "id": "声明隐式成员",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
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
        id: "代码重构",
        children: "代码重构"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arktsts代码重构",
      children: "ArkTS/TS代码重构"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "refactor-extract代码提取",
      children: "Refactor-Extract代码提取"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在编辑器中支持将函数内、类方法内等区域代码块或表达式，提取为新方法/函数（Method）、常量（Constant）、接口（Interface）、变量（Variable）或类型别名（Type Alias）。准确便捷的将所选区域代码从当前作用域内进行提取，提升编码效率。选中所需要提取的代码块，右键单击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Refactor"
        })
      }), "，选择需要提取的类型。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(169731)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Refactor-Extract代码提取为类型别名（Type Alias）能力仅TS语言支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方法/函数（Method）支持选中代码块或完整语句进行提取："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(549837)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "730",
        height: "690"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS语言中，支持将组件调用代码块提取为@Builder装饰器装饰的方法，组件属性调用表达式可提取为@Styles或@Extend装饰器装饰的方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方式"
        })
      }), "：选中需要提取的组件或属性，右键单击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Refactor"
        })
      }), "，选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Extract Method..."
        })
      }), "，组件私有属性可提取为@Extend装饰的方法，通用属性可提取为@Styles或@Extend装饰的方法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(685565)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "730",
        height: "690"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常量（Constant）支持选中单行表达式进行提取："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(983251)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "730",
        height: "641"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口（Interface）支持选中对象自变量进行提取："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(606625)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "730",
        height: "641"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持选中表达式提取为变量（Variable）："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(776223)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "730",
        height: "641"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "refactor-convert代码转换",
      children: "Refactor-Convert代码转换"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编辑器内提供Convert重构能力，支持Convert between named imports and namespace imports等高频转换操作，辅助开发者高效重构代码，提升代码质量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " Refactor-Convert功能支持清单"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "使用方法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持转换的源码类型"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Convert to class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将JS源码中的function转换为符合ES6标准的类"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["点击或选中function名，右键单击", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Refactor"
              })
            }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Convert"
              })
            }), "，或使用快捷键", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Ctrl+Alt+Shift+R"
              })
            }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Option+Shift+Command+R"
              })
            }), "），在弹窗中选择转换的方式。  说明：  若当前工程中已引用该方法，执行Convert to class后，在Find Usages中可查看引用的具体位置，点击", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Do Refactor"
              })
            }), "可忽略冲突并执行转换；也可以逐条修改引用位置的代码后，重新执行上述操作。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Convert to anonymous function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将箭头函数转换为匿名函数"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["选中箭头函数赋值变量，右键单击", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Refactor"
              })
            }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Convert"
              })
            }), "，或使用快捷键", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Ctrl+Alt+Shift+R"
              })
            }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Option+Shift+Command+R"
              })
            }), "），在弹窗中选择转换的方式。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JS/TS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Convert to named function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将箭头函数转换为普通函数"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["选中箭头函数赋值变量，右键单击", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Refactor"
              })
            }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Convert"
              })
            }), "，或使用快捷键", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Ctrl+Alt+Shift+R"
              })
            }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Option+Shift+Command+R"
              })
            }), "），在弹窗中选择转换的方式。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JS/TS/ArkTS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Convert to arrow function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将匿名函数转换为箭头函数"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["选中匿名函数赋值变量，右键单击", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Refactor"
              })
            }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Convert"
              })
            }), "，或使用快捷键", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Ctrl+Alt+Shift+R"
              })
            }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Option+Shift+Command+R"
              })
            }), "），在弹窗中选择转换的方式。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JS/TS/ArkTS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Convert default export to named export"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持named export和default export相互转换"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["完整选中export default语句，右键单击", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Refactor"
              })
            }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Convert"
              })
            }), "，或使用快捷键", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Ctrl+Alt+Shift+R"
              })
            }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Option+Shift+Command+R"
              })
            }), "），在弹窗中选择转换的方式。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JS/TS/ArkTS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Convert named export to default export"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["完整选中export语句，右键单击", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Refactor"
              })
            }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Convert"
              })
            }), "，或使用快捷键", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Ctrl+Alt+Shift+R"
              })
            }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Option+Shift+Command+R"
              })
            }), "），在弹窗中选择转换的方式。"]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Convert named imports to namespace import"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持在命名import和命名空间import形态间转换"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["完整选中import语句，右键单击", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Refactor"
              })
            }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Convert"
              })
            }), "，或使用快捷键", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Ctrl+Alt+Shift+R"
              })
            }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Option+Shift+Command+R"
              })
            }), "），在弹窗中选择转换的方式。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JS/TS/ArkTS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Convert namespace import to named imports"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["完整选中命名空间import语句，右键单击", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Refactor"
              })
            }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Convert"
              })
            }), "，或使用快捷键", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Ctrl+Alt+Shift+R"
              })
            }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Option+Shift+Command+R"
              })
            }), "），在弹窗中选择转换的方式。"]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Convert to template string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将字符串转换为模板字面量"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["选中字符串或完整表达式，右键单击", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Refactor"
              })
            }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Convert"
              })
            }), "，或使用快捷键", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Ctrl+Alt+Shift+R"
              })
            }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Option+Shift+Command+R"
              })
            }), "），在弹窗中选择转换的方式。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JS/TS/ArkTS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Convert to optional chain expression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将判空逻辑转换为可选链式调用"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["选中连续判空表达式，右键单击", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Refactor"
              })
            }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Convert"
              })
            }), "，或使用快捷键", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Ctrl+Alt+Shift+R"
              })
            }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Option+Shift+Command+R"
              })
            }), "），在弹窗中选择转换的方式。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JS/TS/ArkTS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "refactor-rename代码重命名",
      children: "Refactor-Rename代码重命名"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "代码编辑支持Rename功能，可以快速更改变量、方法、对象属性等相关标识符及文件、模块的名称，并同步到整个工程中对其进行引用的位置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方式"
        })
      }), "：选中需要重新命名的标识符（变量、类、接口、自定义组件等），右键单击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Refactor"
        })
      }), "，选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Rename..."
        })
      }), "（或使用", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "快捷键Shift+F6"
        })
      }), "），在弹框中输入新的标识符名称，并在", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Scope"
        })
      }), "中选择替换的范围，点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Refactor"
        })
      }), "完成重新命名。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(386585)/* ["default"] */.A) + "",
        width: "648",
        height: "503"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["代码编辑支持筛选并过滤不需要rename的引用位置。在", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Rename...", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "弹窗中点击"
            })
          }), "Preview"]
        })
      }), "，在弹出预览窗口中，用户选中无需Rename的选项，单击右键菜单", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Exclude********/Remove"
        })
      }), "进行过滤/删除，完成筛选后点击左下角", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Do Refactor"
        })
      }), "，重新执行Rename操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(48254)/* ["default"] */.A) + "",
        width: "1875",
        height: "366"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(267272)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若ArkTS文件中存在C++接口调用，使用Rename进行重命名时，C++文件中涉及的函数名也会被重命名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "move-file",
      children: "Move File"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在文件中单击右键，选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Refactor > Move File..."
        })
      }), "，在弹窗中输入或点击****...", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "选择指定的目录，点击"
        })
      }), "Refactor****，可将当前文件移动至该目录下。勾选", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Search for references"
        })
      }), "，可查找并更新工程中对该文件的引用；勾选", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Open in editor"
        })
      }), "，可在编辑器中查看移动的文件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(133383)/* ["default"] */.A) + "",
        width: "949",
        height: "575"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "safe-delete",
      children: "Safe Delete"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编辑器支持Safe Delete功能，帮助您安全地删除代码中的标识符对象（变量、函数或类等）或删除指定文件。在删除前，编辑器将先在代码中搜索对该对象的引用，如果存在引用，编辑器将提示您进行必要的检查和调整。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方式"
        })
      }), "：在编辑器内选中需要删除的标识符对象或在工程目录选择待删除的文件，右键单击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Refactor"
        })
      }), "，选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Safe Delete"
        })
      }), "，单击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "OK"
        })
      }), "将自动检查当前对象在代码中被引用的情况，点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "View Usages"
        })
      }), "可查看具体使用的代码内容，点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete Anyway"
        })
      }), "将直接删除该对象的定义。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(523924)/* ["default"] */.A) + "",
        width: "807",
        height: "535"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "c代码重构",
      children: "C++代码重构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编辑器提供C++代码重构能力，当前支持展开宏、交换if分支、移动函数体到声明处等使用场景下的重构能力，提升开发效率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "展开宏",
      children: "展开宏"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持在当前宏引用处展开宏。将光标移动至需要展开的宏，右键单击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Refactor"
        })
      }), "，选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Inline"
        })
      }), "，展开此处引用的宏。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(43078)/* ["default"] */.A) + "",
        width: "869",
        height: "447"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "交换if分支",
      children: "交换if分支"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编辑器支持在选中if-else完整代码块的情况下，实现对if-else代码块的位置交换，并对条件取反。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用约束"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要重构的代码块必须为完整的if-else代码结构，{}不能省略；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "if-else中的statement包含嵌套if-else语句时，只反转最外层的if-else语句。对于if() -else if()-else() 结构，仅支持对最后一层if-else结构进行交换；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持赋值语句的判断条件取反。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方式"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["编辑器内选择需要转换的代码区域，右键单击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Refactor"
        })
      }), "，选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Swap If Branches"
        })
      }), "，对原有if条件取反，并交换if-else原代码块顺序。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(270552)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "838",
        height: "785"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "移动函数体到声明处",
      children: "移动函数体到声明处"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["编辑器支持将函数体从源文件移动到头文件中，提高代码可读性。编辑器内选中函数名，右键单击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Refactor"
        })
      }), "，选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Move to Declaration"
        })
      }), "，源文件中的函数实现将移动至头文件中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(500413)/* ["default"] */.A) + "",
        width: "1020",
        height: "830"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "移动函数体到实现处",
      children: "移动函数体到实现处"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在编辑器内将光标放在或选中函数名，右键单击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Refactor"
        })
      }), "，选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Move to Implementation"
        })
      }), "，选择移动到的文件，将函数定义移动到该文件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(957)/* ["default"] */.A) + "",
        width: "1020",
        height: "830"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "将语句转为原始字符串",
      children: "将语句转为原始字符串"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编辑器提供重构能力，支持将带有 \\n, \\t, \", \\, '五类转义字符的字符串转换为原始字符串。当前仅支持标准字符串，不支持 u8\"\"等其他字符串。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在编辑器内选择字符串代码区域，右键单击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Refactor"
        })
      }), "，选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Convert To Raw String"
        })
      }), "，将语句转换为原始字符串。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(474857)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "961",
        height: "665"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义构造函数",
      children: "定义构造函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编辑器提供重构能力，支持为类的成员变量生成默认的构造函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "规格限制"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持未初始化成员变量的类"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持在（class标识符，类名，大括号）以外的位置触发"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持类已存在有入参的构造函数"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["使用方法：", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "在类的定义的类名处，右键单击"
            })
          }), "Generate"]
        })
      }), "****...", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "，选择"
        })
      }), "Constructor****，在弹框中点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Define"
        })
      }), "，为成员变量定义一个构造函数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(650886)/* ["default"] */.A) + "",
        width: "997",
        height: "602"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "提取表达式到变量",
      children: "提取表达式到变量"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在编辑器内，选中需要提取的表达式范围，右键单击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Refactor"
        })
      }), "，选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Extract Variable"
        })
      }), "，支持提取表达式到变量。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(417176)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "842",
        height: "660"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "移除namespace",
      children: "移除namespace"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["光标停留在需要移除的namespace处，右键单击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Refactor"
        })
      }), "，选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Remove Using Namespace"
        })
      }), "进行移除，可以避免命名冲突，提高代码可读性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(547259)/* ["default"] */.A) + "",
        width: "997",
        height: "652"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加using声明",
      children: "添加using声明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["编辑器内，光标停留在需要添加using声明处，右键单击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Refactor"
        })
      }), "，选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Add Using"
        })
      }), "完成使用using定义类型别名。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(805749)/* ["default"] */.A) + "",
        width: "997",
        height: "955"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "auto自动展开",
      children: "auto自动展开"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在auto关键字处右键单击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Refactor"
        })
      }), "，选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Expand Auto Type"
        })
      }), "，可以使用推断类型替换auto类型。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(403440)/* ["default"] */.A) + "",
        width: "997",
        height: "565"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "声明隐式成员",
      children: "声明隐式成员"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["编辑器支持在类中声明隐式复制/移动成员。光标停留在需要生成的类处，右键单击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Generate"
        })
      }), "..., 选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Copy/Move Members"
        })
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(926586)/* ["default"] */.A) + "",
        width: "997",
        height: "602"
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
386585(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753866-6a98b4813afe15572cf5228e5735e615.png");

},
267272(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
169731(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
270552(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753862-60d5de6fafe3faa274ddc9e82af3bd79.gif");

},
650886(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753793-fd074eb13ee3778f447ab1079b1085b3.gif");

},
926586(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913860-676e0a26a12c69f143f5822336426ccc.gif");

},
48254(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833769-5c91bba20fc8c4686103abfc7cca6e45.png");

},
547259(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753789-0edda6301d0d012c312e7ea0ce32fd2d.gif");

},
957(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833787-5e72093d230f8859404ec108df693eb9.gif");

},
983251(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753803-8adef1692a1a3c63c087e7bb2244cc75.gif");

},
417176(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913846-2d2a52d0a5c0826a832e08a7adc7e2de.gif");

},
805749(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753858-60b294e39264e7f098bc7790df527af7.gif");

},
474857(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913864-acfd2332ceb418b4ef888da0703867c4.gif");

},
776223(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833783-8358ba0af0f1cae12a4c475abbd3890c.gif");

},
403440(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753870-740ece365778920fd8600d492f4f0661.gif");

},
606625(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833779-341020ab2e2d11e7ce38e68ce4a78faf.gif");

},
43078(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833773-26fe6f90cdc29ee0b1439fc66a204c95.gif");

},
549837(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913856-2541cdb87058c35c7f10bc8626817633.gif");

},
133383(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913852-40ca6f2988d4695558113d6148a2cace.png");

},
500413(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753807-6f8f392fd0a55ff720c211e2a21e776e.gif");

},
685565(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753799-7300730381391cb77d1ed59f62b3fc23.gif");

},
523924(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753852-f20c11b79e291186b8a5c08a1afecdeb.png");

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