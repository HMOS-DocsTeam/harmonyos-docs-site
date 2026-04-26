"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["614216"], {
939055(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkdata_api_arkdata_c_arkdata_headerfile_capi_udmf_meta_h_capi_udmf_meta_h_md_5b8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkdata-api-arkdata-c-arkdata-headerfile-capi-udmf-meta-h-capi-udmf-meta-h-md-5b8.json
var site_docs_ref_arkdata_api_arkdata_c_arkdata_headerfile_capi_udmf_meta_h_capi_udmf_meta_h_md_5b8_namespaceObject = JSON.parse('{"id":"arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-meta-h/capi-udmf-meta-h","title":"udmf_meta.h","description":"概述","source":"@site/docs-ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-meta-h/capi-udmf-meta-h.md","sourceDirName":"arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-meta-h","slug":"/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-meta-h/capi-udmf-meta-h","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-meta-h/capi-udmf-meta-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"title":"udmf_meta.h","sidebar_position":20,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-udmf-meta-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-udmf-meta-h"},"sidebar":"ref","previous":{"title":"udmf_err_code.h","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h"},"next":{"title":"uds.h","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-uds-h/capi-uds-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-meta-h/capi-udmf-meta-h.md


const frontMatter = {
	title: 'udmf_meta.h',
	sidebar_position: 20,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-udmf-meta-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-udmf-meta-h'
};
const contentTitle = 'udmf_meta.h';

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
  "value": "宏定义",
  "id": "宏定义",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "udmf_metah",
        children: "udmf_meta.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明统一类型数据信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <database/udmf/udmf_meta.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libudmf.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.UDMF.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-module/capi-udmf/capi-udmf",
        children: "UDMF"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "宏定义",
      children: "宏定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_ENTITY \"general.entity\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有表示物理存储类型的基类型，用于描述类型的物理属性，无归属类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_OBJECT \"general.object\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有表示逻辑内容类型的基类型，用于描述类型的功能性特征，无归属类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_COMPOSITE_OBJECT \"general.composite-object\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有组合内容类型（例如PDF文件类型混合了文本和图片类数据）的基类型，归属类型为OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_TEXT \"general.text\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有文本的基类型，归属类型为OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_PLAIN_TEXT \"general.plain-text\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["未指定编码的文本类型，没有标识符，归属类型为TEXT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_HTML \"general.html\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HTML文本类型，归属类型为TEXT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_HYPERLINK \"general.hyperlink\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["超链接类型，归属类型为TEXT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_XML \"general.xml\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["XML文本类型，归属类型为TEXT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_SOURCE_CODE \"general.source-code\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有源代码的基类型，归属类型为PLAIN_TEXT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_SCRIPT \"general.script\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有脚本语言源代码的基类型，归属类型为SOURCE_CODE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_SHELL_SCRIPT \"general.shell-script\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Shell脚本类型，归属类型为SCRIPT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_CSH_SCRIPT \"general.csh-script\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["C-shell脚本类型，归属类型为SHELL_SCRIPT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_PERL_SCRIPT \"general.perl-script\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Perl脚本类型，归属类型为SHELL_SCRIPT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_PHP_SCRIPT \"general.php-script\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["PHP脚本类型，归属类型为SHELL_SCRIPT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_PYTHON_SCRIPT \"general.python-script\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Python脚本类型，归属类型为SHELL_SCRIPT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_RUBY_SCRIPT \"general.ruby-script\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Ruby脚本类型，归属类型为SHELL_SCRIPT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_TYPE_SCRIPT \"general.type-script\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["TypeScript源代码类型，归属类型为SCRIPT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_JAVA_SCRIPT \"general.java-script\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["JavaScript源代码类型，归属类型为SCRIPT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_C_HEADER \"general.c-header\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["C头文件类型，归属类型为SOURCE_CODE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_C_SOURCE \"general.c-source\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["C源代码类型，归属类型为SOURCE_CODE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_C_PLUS_PLUS_HEADER \"general.c-plus-plus-header\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["C++头文件类型，归属类型为SOURCE_CODE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_C_PLUS_PLUS_SOURCE \"general.c-plus-plus-source\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["C++源代码类型，归属类型为SOURCE_CODE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_JAVA_SOURCE \"general.java-source\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Java源代码类型，归属类型为SOURCE_CODE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_EBOOK \"general.ebook\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有电子书文件格式的基类型，归属类型为COMPOSITE_OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_EPUB \"general.epub\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["电子出版物（EPUB）文件格式类型，归属类型为EBOOK。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_AZW \"com.amazon.azw\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AZW电子书文件格式类型，归属类型为EBOOK。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_AZW3 \"com.amazon.azw3\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AZW3电子书文件格式类型，归属类型为EBOOK。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_KFX \"com.amazon.kfx\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["KFX电子书文件格式类型，归属类型为EBOOK。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_MOBI \"com.amazon.mobi\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["MOBI电子书文件格式类型，归属类型为EBOOK。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_MEDIA \"general.media\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有媒体的基类型，归属类型为OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_IMAGE \"general.image\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有图片的基类型，归属类型为MEDIA。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_JPEG \"general.jpeg\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["JPEG图片类型，归属类型为IMAGE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_PNG \"general.png\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["PNG图片类型，归属类型为IMAGE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_RAW_IMAGE \"general.raw-image\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有原始图像格式的基类型，归属类型为IMAGE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_TIFF \"general.tiff\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["TIFF图片类型，归属类型为IMAGE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_BMP \"com.microsoft.bmp\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["WINDOWS位图图像类型，归属类型为IMAGE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_ICO \"com.microsoft.ico\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["WINDOWS图标图像类型，归属类型为IMAGE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_PHOTOSHOP_IMAGE \"com.adobe.photoshop-image\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Adobe Photoshop图片类型，归属类型为IMAGE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_AI_IMAGE \"com.adobe.illustrator.ai-image\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Adobe Illustrator图片类型，归属类型为IMAGE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_WORD_DOC \"com.microsoft.word.doc\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Microsoft Word数据类型，归属类型为COMPOSITE_OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_EXCEL \"com.microsoft.excel.xls\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Microsoft Excel数据类型，归属类型为COMPOSITE_OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_PPT \"com.microsoft.powerpoint.ppt\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Microsoft PowerPoint演示文稿类型，归属类型为COMPOSITE_OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_PDF \"com.adobe.pdf\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["PDF数据类型，归属类型为COMPOSITE_OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_POSTSCRIPT \"com.adobe.postscript\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["PostScript数据类型，归属类型为COMPOSITE_OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_ENCAPSULATED_POSTSCRIPT \"com.adobe.encapsulated-postscript\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Encapsulated PostScript类型，归属类型为POSTSCRIPT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_VIDEO \"general.video\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有视频的基类型，归属类型为MEDIA。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_AVI \"general.avi\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AVI视频类型，归属类型为VIDEO。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_MPEG \"general.mpeg\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["MPEG-1或MPEG-2视频类型，归属类型为VIDEO。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_MPEG4 \"general.mpeg-4\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["MPEG-4视频类型，归属类型为VIDEO。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_VIDEO_3GPP \"general.3gpp\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["3GPP视频类型，归属类型为VIDEO。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_VIDEO_3GPP2 \"general.3gpp2\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["3GPP2视频类型，归属类型为VIDEO。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_WINDOWS_MEDIA_WM \"com.microsoft.windows-media-wm\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["WINDOWS WM视频类型，归属类型为VIDEO。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_WINDOWS_MEDIA_WMV \"com.microsoft.windows-media-wmv\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["WINDOWS WMV视频类型，归属类型为VIDEO。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_WINDOWS_MEDIA_WMP \"com.microsoft.windows-media-wmp\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["WINDOWS WMP视频类型，归属类型为VIDEO。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_AUDIO \"general.audio\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有音频的基类型，归属类型为MEDIA。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_AAC \"general.aac\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AAC音频类型，归属类型为AUDIO。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_AIFF \"general.aiff\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AIFF音频类型，归属类型为AUDIO。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_ALAC \"general.alac\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ALAC音频类型，归属类型为AUDIO。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_FLAC \"general.flac\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["FLAC音频类型，归属类型为AUDIO。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_MP3 \"general.mp3\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["MP3音频类型，归属类型为AUDIO。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_OGG \"general.ogg\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OGG音频类型，归属类型为AUDIO。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_PCM \"general.pcm\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["PCM音频类型，归属类型为AUDIO。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_WINDOWS_MEDIA_WMA \"com.microsoft.windows-media-wma\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["WINDOWS WMA音频类型，归属类型为AUDIO。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_WAVEFORM_AUDIO \"com.microsoft.waveform-audio\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["WINDOWS波形音频类型，归属类型为AUDIO。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_WINDOWS_MEDIA_WMX \"com.microsoft.windows-media-wmx\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["WINDOWS WMX视频类型，归属类型为VIDEO。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_WINDOWS_MEDIA_WVX \"com.microsoft.windows-media-wvx\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["WINDOWS WVX视频类型，归属类型为VIDEO。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_WINDOWS_MEDIA_WAX \"com.microsoft.windows-media-wax\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["WINDOWS WAX音频类型，归属类型为AUDIO。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_GENERAL_FILE \"general.file\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有文件的基类型，归属类型为ENTITY。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_DIRECTORY \"general.directory\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有目录的基类型，归属类型为ENTITY。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_FOLDER \"general.folder\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有文件夹的基类型，归属类型为DIRECTORY。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_SYMLINK \"general.symlink\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有符号链接的基类型，归属类型为ENTITY。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_ARCHIVE \"general.archive\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有文件和目录存档文件的基类型，归属类型为OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_BZ2_ARCHIVE \"general.bz2-archive\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["BZ2存档文件类型，归属类型为ARCHIVE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_DISK_IMAGE \"general.disk-image\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有可作为卷装载项的文件类型的基类型，归属类型为ARCHIVE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_TAR_ARCHIVE \"general.tar-archive\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["TAR存档文件类型，归属类型为ARCHIVE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_ZIP_ARCHIVE \"general.zip-archive\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ZIP存档文件类型，归属类型为ARCHIVE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_JAVA_ARCHIVE \"com.sun.java-archive\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["JAVA存档文件类型，归属类型为ARCHIVE和EXECUTABLE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_GNU_TAR_ARCHIVE \"org.gnu.gnu-tar-archive\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["GUN存档文件类型，归属类型为ARCHIVE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_GNU_ZIP_ARCHIVE \"org.gnu.gnu-zip-archive\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["GZIP存档文件类型，归属类型为ARCHIVE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_GNU_ZIP_TAR_ARCHIVE \"org.gnu.gnu-zip-tar-archive\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["GZIP TAR存档文件类型，归属类型为ARCHIVE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_CALENDAR \"general.calendar\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有日程类数据的基类型，归属类型为OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_CONTACT \"general.contact\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有联系人类数据的基类型，归属类型为OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_DATABASE \"general.database\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有数据库文件的基类型，归属类型为OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_MESSAGE \"general.message\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有消息类数据的基类型，归属类型为OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_VCARD \"general.vcard\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有电子名片类数据的基类型，归属类型为OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_NAVIGATION \"general.navigation\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有导航类数据的基类型，归属类型为OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_LOCATION \"general.location\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["导航定位类型，归属类型为NAVIGATION。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_OPENHARMONY_FORM \"openharmony.form\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["系统定义的卡片类型，归属类型为OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_OPENHARMONY_APP_ITEM \"openharmony.app-item\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["系统定义的桌面图标类型，归属类型为OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_OPENHARMONY_PIXEL_MAP \"openharmony.pixel-map\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["系统定义的像素图类型，归属类型为IMAGE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_OPENHARMONY_ATOMIC_SERVICE \"openharmony.atomic-service\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["系统定义的元服务类型，归属类型为OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_OPENHARMONY_PACKAGE \"openharmony.package\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["系统定义的包（即目录的打包文件），归属类型为DIRECTORY。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_OPENHARMONY_HAP \"openharmony.hap\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["系统定义的能力包，归属类型为OPENHARMONY_PACKAGE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_SMIL \"com.real.smil\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["同步多媒体集成语言类型，归属类型为XML文本类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_MARKDOWN \"general.markdown\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标记语言文本类型，归属类型为PLAIN_TEXT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_FAX \"general.fax\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["传真图像的基本类型，归属类型为IMAGE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_JFX_FAX \"com.j2.jfx-fax\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["J2 jConnect传真文件类型，归属类型为FAX。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_EFX_FAX \"com.js.efx-fax\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["电子传真文件类型，归属类型为FAX。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_XBITMAP_IMAGE \"general.xbitmap-image\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["X Window系统（X11）中使用的位图图像格式，归属类型为IMAGE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_TGA_IMAGE \"com.truevision.tga-image\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标签图形（TaggedGraphics）图像类型，归属类型为IMAGE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_SGI_IMAGE \"com.sgi.sgi-image\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["硅图（Silicon Graphics）图像类型，归属类型为IMAGE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_OPENEXR_IMAGE \"com.ilm.openexr-image\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开放标准的高动态范围图像格式类型，归属类型为IMAGE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_FLASHPIX_IMAGE \"com.kodak.flashpix.image\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["FlashPix图像文件类型，归属类型为IMAGE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_REALMEDIA \"com.real.realmedia\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["流媒体视频类型，归属类型为VIDEO。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_AU_AUDIO \"general.au-audio\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Au数据格式，归属类型为AUDIO。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_AIFC_AUDIO \"general.aifc-audio\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频交换数据类型，归属类型为AUDIO。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_SD2_AUDIO \"com.digidesign.sd2-audio\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["单声道/立体声音频类型（Digidesign Sound Designer II），归属类型为AUDIO。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_REALAUDIO \"com.real.realaudio\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RealMedia音频类型，归属类型为AUDIO。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_OPENXML \"org.openxmlformats.openxml\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开源XML基类型，归属类型为ARCHIVE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_WORDPROCESSINGML_DOCUMENT \"org.openxmlformats.wordprocessingml.document\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开源XML文档类型，归属类型为OPENXML和COMPOSITE_OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_SPREADSHEETML_SHEET \"org.openxmlformats.spreadsheetml.sheet\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开源XML电子表格类型，归属类型为OPENXML和COMPOSITE_OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_PRESENTATIONML_PRESENTATION \"org.openxmlformats.presentationml.presentation\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开源XML演示文稿类型，归属类型为OPENXML和COMPOSITE_OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_OPENDOCUMENT \"org.oasis.opendocument\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Office应用程序的开源文档类型，归属类型为ARCHIVE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_OPENDOCUMENT_TEXT \"org.oasis.opendocument.text\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开源文档类型，归属类型为OPENDOCUMENT和COMPOSITE_OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_OPENDOCUMENT_SPREADSHEET \"org.oasis.opendocument.spreadsheet\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开源文档电子表格类型，归属类型为OPENDOCUMENT和COMPOSITE_OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_OPENDOCUMENT_PRESENTATION \"org.oasis.opendocument.presentation\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开源文档演示类型，归属类型为OPENDOCUMENT和COMPOSITE_OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_OPENDOCUMENT_GRAPHICS \"org.oasis.opendocument.graphics\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开源文档图形类型，归属类型为OPENDOCUMENT和COMPOSITE_OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_OPENDOCUMENT_FORMULA \"org.oasis.opendocument.formula\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开源文档公式集类型，归属类型为OPENDOCUMENT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_STUFFIT_ARCHIVE \"com.allume.stuffit-archive\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Stuffit压缩格式类型（Stuffit archive），归属类型为ARCHIVE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_VCS \"general.vcs\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["VCalendar日历数据类型，归属类型为CALENDAR和TEXT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_ICS \"general.ics\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ICalendar日历数据类型，归属类型为CALENDAR和TEXT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_EXECUTABLE \"general.executable\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有可执行文件的基类型，归属类型为OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_PORTABLE_EXECUTABLE \"com.microsoft.portable-executable\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Microsoft Windows应用程序类型，归属类型为EXECUTABLE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_SUN_JAVA_CLASS \"com.sun.java-class\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Java类文件类型，归属类型为EXECUTABLE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_FONT \"general.font\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有字体数据类型的基础类型，归属类型为OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_TRUETYPE_FONT \"general.truetype-font\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["TrueType字体类型，归属类型为FONT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_TRUETYPE_COLLECTION_FONT \"general.truetype-collection-font\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["TrueType collection字体类型，归属类型为FONT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_OPENTYPE_FONT \"general.opentype-font\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OpenType字体类型，归属类型为FONT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_POSTSCRIPT_FONT \"com.adobe.postscript-font\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["PostScript字体类型，归属类型为FONT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_POSTSCRIPT_PFB_FONT \"com.adobe.postscript-pfb-font\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["PostScript Font Binary字体类型，归属类型为FONT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_POSTSCRIPT_PFA_FONT \"com.adobe.postscript-pfa-font\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Adobe Type 1 字体类型，归属类型为FONT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_OPENHARMONY_HDOC \"openharmony.hdoc\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["系统定义的备忘录数据类型，归属类型为COMPOSITE_OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_OPENHARMONY_HINOTE \"openharmony.hinote\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统定义的笔记数据类型，归属类型为COMPOSITE_OBJECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_OPENHARMONY_STYLED_STRING \"openharmony.styled-string\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["系统定义的样式字符串类型，归属类型为COMPOSITE_OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_OPENHARMONY_WANT \"openharmony.want\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["系统定义的Want类型，归属类型为OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_META_GENERAL_FILE_URI \"general.file-uri\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文件地址类型，归属类型为TEXT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 13"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_METE_GENERAL_CONTENT_FORM \"general.content-form\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["内容卡片类型，归属类型为OBJECT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 14"]
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