"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["645621"], {
72141(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_compilation_tool_chain_arkts_bytecode_arkts_bytecode_file_format_arkts_bytecode_file_format_md_5a2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-compilation-tool-chain-arkts-bytecode-arkts-bytecode-file-format-arkts-bytecode-file-format-md-5a2.json
var site_docs_arkts_arkts_compilation_tool_chain_arkts_bytecode_arkts_bytecode_file_format_arkts_bytecode_file_format_md_5a2_namespaceObject = JSON.parse('{"id":"arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-file-format/arkts-bytecode-file-format","title":"方舟字节码文件格式","description":"本文详细介绍了方舟字节码文件的格式，旨在帮助开发者深入理解字节码文件的组成结构，以指导字节码的分析和修改。","source":"@site/docs/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-file-format/arkts-bytecode-file-format.md","sourceDirName":"arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-file-format","slug":"/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-file-format/","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-file-format/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"方舟字节码文件格式","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-bytecode-file-format","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"方舟字节码概述","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-overview/"},"next":{"title":"方舟字节码基本原理","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-fundamentals/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-file-format/arkts-bytecode-file-format.md


const frontMatter = {
	title: '方舟字节码文件格式',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-bytecode-file-format',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '方舟字节码文件格式';

const assets = {

};



const toc = [{
  "value": "约束",
  "id": "约束",
  "level": 2
}, {
  "value": "字节码文件数据类型",
  "id": "字节码文件数据类型",
  "level": 2
}, {
  "value": "整型",
  "id": "整型",
  "level": 3
}, {
  "value": "字符串",
  "id": "字符串",
  "level": 3
}, {
  "value": "TaggedValue",
  "id": "taggedvalue",
  "level": 3
}, {
  "value": "TypeDescriptor",
  "id": "typedescriptor",
  "level": 2
}, {
  "value": "字节码文件布局",
  "id": "字节码文件布局",
  "level": 2
}, {
  "value": "Header",
  "id": "header",
  "level": 3
}, {
  "value": "Version",
  "id": "version",
  "level": 3
}, {
  "value": "ForeignClass",
  "id": "foreignclass",
  "level": 3
}, {
  "value": "ForeignMethod",
  "id": "foreignmethod",
  "level": 3
}, {
  "value": "ClassIndex",
  "id": "classindex",
  "level": 3
}, {
  "value": "Class",
  "id": "class",
  "level": 3
}, {
  "value": "ClassAccessFlag",
  "id": "classaccessflag",
  "level": 3
}, {
  "value": "ClassTag",
  "id": "classtag",
  "level": 3
}, {
  "value": "Field",
  "id": "field",
  "level": 3
}, {
  "value": "FieldTag",
  "id": "fieldtag",
  "level": 3
}, {
  "value": "Method",
  "id": "method",
  "level": 3
}, {
  "value": "MethodIndexData",
  "id": "methodindexdata",
  "level": 3
}, {
  "value": "MethodTag",
  "id": "methodtag",
  "level": 3
}, {
  "value": "Code",
  "id": "code",
  "level": 3
}, {
  "value": "TryBlock",
  "id": "tryblock",
  "level": 3
}, {
  "value": "CatchBlock",
  "id": "catchblock",
  "level": 3
}, {
  "value": "Annotation",
  "id": "annotation",
  "level": 3
}, {
  "value": "AnnotationElementTag",
  "id": "annotationelementtag",
  "level": 3
}, {
  "value": "AnnotationElement",
  "id": "annotationelement",
  "level": 3
}, {
  "value": "Value formats",
  "id": "value-formats",
  "level": 3
}, {
  "value": "LineNumberProgramIndex",
  "id": "linenumberprogramindex",
  "level": 3
}, {
  "value": "DebugInfo",
  "id": "debuginfo",
  "level": 3
}, {
  "value": "IndexSection",
  "id": "indexsection",
  "level": 3
}, {
  "value": "IndexHeader",
  "id": "indexheader",
  "level": 3
}, {
  "value": "ClassRegionIndex",
  "id": "classregionindex",
  "level": 3
}, {
  "value": "Type",
  "id": "type",
  "level": 3
}, {
  "value": "MethodStringLiteralRegionIndex",
  "id": "methodstringliteralregionindex",
  "level": 3
}, {
  "value": "LiteralArray",
  "id": "literalarray",
  "level": 3
}, {
  "value": "Literal",
  "id": "literal",
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
        id: "方舟字节码文件格式",
        children: "方舟字节码文件格式"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文详细介绍了方舟字节码文件的格式，旨在帮助开发者深入理解字节码文件的组成结构，以指导字节码的分析和修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束",
      children: "约束"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文内容基于方舟字节码版本号12.0.6.0（版本号为方舟编译器内部保留字段，开发者无需关注，仅供准确对照之用）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "字节码文件数据类型",
      children: "字节码文件数据类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方舟字节码使用了多种基础和复合数据类型，以下为常见类型的定义和说明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "整型",
      children: "整型"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
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
            children: "uint8_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8-bit无符号整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint16_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16-bit无符号整数，采用小端字节序。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32-bit无符号整数，采用小端字节序。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uleb128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "leb128编码的无符号整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sleb128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "leb128编码的有符号整数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "字符串",
      children: "字符串"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对齐方式：单字节对齐。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "格式："
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "格式"
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
            children: "utf16_length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uleb128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值为len << 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以'\\0'结尾的MUTF-8编码字符序列。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "taggedvalue",
      children: "TaggedValue"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对齐方式：单字节对齐。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "格式："
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "格式"
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
            children: "tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示数据种类的标记。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据不同的标记，data是不同类型的数据或者为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typedescriptor",
      children: "TypeDescriptor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TypeDescriptor是类（", (0,jsx_runtime.jsx)(_components.a, {
        href: "#class",
        children: "Class"
      }), "）名称的格式，由'L'、'_'、ClassName和';'组成：L_ClassName;。其中，ClassName是类的全名，名称中的'.'会被替换为'/'。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "字节码文件布局",
      children: "字节码文件布局"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["字节码文件起始于", (0,jsx_runtime.jsx)(_components.a, {
        href: "#header",
        children: "Header"
      }), "结构。文件中的所有结构均可以从Header出发，直接或间接地访问到。字节码文件中结构的引用方式包括偏移量和索引。偏移量是一个32位长度的值，表示当前结构的起始位置在字节码文件中相对于文件头的字节偏移量，从0开始计算。索引是一个16位长度的值，表示当前结构在索引区域中的位置，此机制将在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#indexsection",
        children: "IndexSection"
      }), "章节描述。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字节码文件中所有多字节数值类型（如u16、u32和i32等）均采用小端字节序（Little-endian）存储。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "header",
      children: "Header"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对齐方式：单字节对齐。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "格式："
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "格式"
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
            children: "magic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t[8]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件头魔数，值必须是'P' 'A' 'N' 'D' 'A' '\\0' '\\0' '\\0'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "checksum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字节码文件除文件头魔数和本校验字段之外的内容的adler32校验和。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t[4]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["字节码文件的版本号（", (0,jsx_runtime.jsx)(_components.a, {
              href: "#version",
              children: "Version"
            }), "）。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "file_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字节码文件的大小，以字节为单位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "foreign_off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["偏移量，指向外部区域。外部区域中仅包含类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#foreignclass",
              children: "ForeignClass"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "#foreignmethod",
              children: "ForeignMethod"
            }), "的元素。foreign_off指向该区域的第一个元素。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "foreign_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "外部区域的大小，以字节为单位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "num_classes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#classindex",
              children: "ClassIndex"
            }), "结构中元素的数量，即文件中定义的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#class",
              children: "Class"
            }), "的数量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "class_idx_off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["偏移量，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#classindex",
              children: "ClassIndex"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "num_lnps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#linenumberprogramindex",
              children: "LineNumberProgramIndex"
            }), "结构中元素的数量，即文件中定义的Line number program的数量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lnp_idx_off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["偏移量，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#linenumberprogramindex",
              children: "LineNumberProgramIndex"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reserved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方舟字节码文件内部使用的保留字段。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "num_index_regions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#indexsection",
              children: "IndexSection"
            }), "结构中元素的数量，即文件中", (0,jsx_runtime.jsx)(_components.a, {
              href: "#indexheader",
              children: "IndexHeader"
            }), "的数量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "index_section_off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["偏移量，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#indexsection",
              children: "IndexSection"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "version",
      children: "Version"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字节码版本号由4个部分组成，格式为：主版本号.次版本号.特性版本号.编译版本号。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "格式"
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
            children: "主版本号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识整体架构调整引入的字节码文件格式变更。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "次版本号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识局部架构调整或者重大特性调整引入的字节码文件格式变更。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "特性版本号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识中小特性引入的字节码文件格式变更。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "编译版本号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识缺陷修复引入的字节码文件格式变更。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "foreignclass",
      children: "ForeignClass"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述字节码文件中的外部类。外部类在其他文件中声明，并在当前字节码文件中被引用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对齐方式：单字节对齐。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "格式："
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "格式"
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
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["外部类的名称，命名遵循", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedescriptor",
              children: "TypeDescriptor"
            }), "语法。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "foreignmethod",
      children: "ForeignMethod"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述字节码文件中的外部方法。外部方法在其他文件中声明，并在当前字节码文件中被引用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对齐方式：单字节对齐。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "格式："
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "格式"
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
            children: "class_idx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint16_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个指向该方法所从属的类的索引，指向一个在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#classregionindex",
              children: "ClassRegionIndex"
            }), "中的位置，该位置的值是一个指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#class",
              children: "Class"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "#foreignclass",
              children: "ForeignClass"
            }), "的偏移量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reserved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint16_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方舟字节码文件内部使用的保留字段。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name_off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个偏移量，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AD%97%E7%AC%A6%E4%B8%B2",
              children: "字符串"
            }), "，表示方法名称。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "index_data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uleb128"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["方法的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#methodindexdata",
              children: "MethodIndexData"
            }), "数据。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(810737)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过ForeignMethod的偏移量，可以找到偏移量所在的IndexHeader以解析class_idx。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "classindex",
      children: "ClassIndex"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ClassIndex结构能通过名称快速定位到Class的定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对齐方式：4个字节。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "格式："
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "格式"
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
            children: "offsets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t[]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个数组，数组中每个元素的值是一个指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#class",
              children: "Class"
            }), "的偏移量。数组中的元素根据类的名称进行排序，名称遵循", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedescriptor",
              children: "TypeDescriptor"
            }), "语法。数组长度由", (0,jsx_runtime.jsx)(_components.a, {
              href: "#header",
              children: "Header"
            }), "中的num_classes指定。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "class",
      children: "Class"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在字节码文件中，一个类可以表示方舟字节码的一个源代码文件或者一种内置的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#annotation",
        children: "Annotation"
      }), "。当表示源代码文件时，类的方法对应源代码文件中的函数，类的字段对应源文件中的内部信息；当表示内置的Annotation时，类中不包含字段与方法。源代码文件中的一个类在字节码文件中表示为一个对应其构造函数的方法。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对齐方式：单字节对齐。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "格式："
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "格式"
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
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Class的名称，命名遵循", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedescriptor",
              children: "TypeDescriptor"
            }), "语法。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reserved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方舟字节码文件内部使用的保留字段。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "access_flags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uleb128"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Class的访问标志，是", (0,jsx_runtime.jsx)(_components.a, {
              href: "#classaccessflag",
              children: "ClassAccessFlag"
            }), "的组合。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "num_fields"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uleb128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class的字段的数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "num_methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uleb128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class的方法的数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "class_data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TaggedValue[]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["不定长度的数组，数组中每个元素都是", (0,jsx_runtime.jsx)(_components.a, {
              href: "#taggedvalue",
              children: "TaggedValue"
            }), "类型，元素的标记是", (0,jsx_runtime.jsx)(_components.a, {
              href: "#classtag",
              children: "ClassTag"
            }), "类型，数组中的元素按照标记递增排序（0x00标记除外）。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fields"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Field[]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Class的字段的数组，数组中每一个元素都是", (0,jsx_runtime.jsx)(_components.a, {
              href: "#field",
              children: "Field"
            }), "类型。数组长度由num_fields指定。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Method[]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Class的方法的数组，数组中每一个元素都是", (0,jsx_runtime.jsx)(_components.a, {
              href: "#method",
              children: "Method"
            }), "类型。数组长度由num_methods指定。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "classaccessflag",
      children: "ClassAccessFlag"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "值"
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
            children: "ACC_PUBLIC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0001"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["默认属性，方舟字节码中的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#class",
              children: "Class"
            }), "均具备此标志。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACC_ANNOTATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x2000"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["声明该类为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#annotation",
              children: "Annotation"
            }), "类型。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "classtag",
      children: "ClassTag"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对齐方式：单字节对齐。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "格式："
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "值"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "数量"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "格式"
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
            children: "NOTHING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["拥有此标记的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#taggedvalue",
              children: "TaggedValue"
            }), "，是其所在class_data的最后一项。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOURCE_LANG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["拥有此标记的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#taggedvalue",
              children: "TaggedValue"
            }), "的data的值为0时，表示源码语言是ArkTS/TS/JS。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOURCE_FILE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x07"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["拥有此标记的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#taggedvalue",
              children: "TaggedValue"
            }), "的data是一个偏移量，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AD%97%E7%AC%A6%E4%B8%B2",
              children: "字符串"
            }), "，表示源文件的名称。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(67610)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ClassTag是class_data中元素（", (0,jsx_runtime.jsx)(_components.a, {
        href: "#taggedvalue",
        children: "TaggedValue"
      }), "）所具备的标记，表头中的“数量”指的是在某一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "#class",
        children: "Class"
      }), "的class_data中拥有此标记的元素出现的次数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "field",
      children: "Field"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述字节码文件中的字段。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对齐方式：单字节对齐。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "格式："
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "格式"
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
            children: "class_idx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint16_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个指向该字段从属的类的索引，指向一个在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#classregionindex",
              children: "ClassRegionIndex"
            }), "中的位置，该位置的值是", (0,jsx_runtime.jsx)(_components.a, {
              href: "#type",
              children: "Type"
            }), "类型，是一个指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#class",
              children: "Class"
            }), "的偏移量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type_idx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint16_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个指向定义该字段的类型的索引，指向一个在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#classregionindex",
              children: "ClassRegionIndex"
            }), "中的位置，该位置的值是", (0,jsx_runtime.jsx)(_components.a, {
              href: "#type",
              children: "Type"
            }), "类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name_off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个偏移量，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AD%97%E7%AC%A6%E4%B8%B2",
              children: "字符串"
            }), "，表示字段的名称。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reserved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uleb128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方舟字节码文件内部使用的保留字段。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "field_data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TaggedValue[]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["不定长度的数组，数组中每个元素都是", (0,jsx_runtime.jsx)(_components.a, {
              href: "#taggedvalue",
              children: "TaggedValue"
            }), "类型，元素的标记是", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fieldtag",
              children: "FieldTag"
            }), "类型，数组中的元素按照标记递增排序（0x00标记除外）。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(539598)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过Field的偏移量，可以找到偏移量所在的IndexHeader以解析class_idx和type_idx。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fieldtag",
      children: "FieldTag"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对齐方式：单字节对齐。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "格式："
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "值"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "数量"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "格式"
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
            children: "NOTHING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["拥有此标记的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#taggedvalue",
              children: "TaggedValue"
            }), "，是其所在field_data的最后一项。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INT_VALUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sleb128"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["拥有此标记的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#taggedvalue",
              children: "TaggedValue"
            }), "的data的类型为boolean、byte、char、short 或 int。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VALUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["拥有此标记的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#taggedvalue",
              children: "TaggedValue"
            }), "的data的类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#value-formats",
              children: "Value formats"
            }), "中的FLOAT或ID。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(394147)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FieldTag是field_data中元素（", (0,jsx_runtime.jsx)(_components.a, {
        href: "#taggedvalue",
        children: "TaggedValue"
      }), "）的标记。表头中的“数量”表示在某个", (0,jsx_runtime.jsx)(_components.a, {
        href: "#field",
        children: "Field"
      }), "的field_data中拥有此标记的元素出现的次数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "method",
      children: "Method"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述字节码文件中的方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对齐方式：单字节对齐。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "格式："
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "格式"
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
            children: "class_idx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint16_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个指向该方法所从属的类的索引，指向一个在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#classregionindex",
              children: "ClassRegionIndex"
            }), "中的位置，该位置的值是", (0,jsx_runtime.jsx)(_components.a, {
              href: "#type",
              children: "Type"
            }), "类型，是一个指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#class",
              children: "Class"
            }), "的偏移量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reserved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint16_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方舟字节码文件内部使用的保留字段。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name_off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个偏移量，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AD%97%E7%AC%A6%E4%B8%B2",
              children: "字符串"
            }), "，表示方法名称。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "index_data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uleb128"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["方法的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#methodindexdata",
              children: "MethodIndexData"
            }), "数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "method_data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TaggedValue[]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["不定长度的数组，数组中每个元素都是", (0,jsx_runtime.jsx)(_components.a, {
              href: "#taggedvalue",
              children: "TaggedValue"
            }), "类型，元素的标记是", (0,jsx_runtime.jsx)(_components.a, {
              href: "#methodtag",
              children: "MethodTag"
            }), "类型，数组中的元素按照标记递增排序（0x00标记除外）。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(833552)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过Method的偏移量，可以找到偏移量所在的IndexHeader以解析class_idx。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "methodindexdata",
      children: "MethodIndexData"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MethodIndexData是一个无符号32位整数，划分为3个部分。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "位"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "格式"
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
            children: "0 - 15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "header_index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint16_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向一个在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#indexsection",
              children: "IndexSection"
            }), "中的位置，该位置的值是", (0,jsx_runtime.jsx)(_components.a, {
              href: "#indexheader",
              children: "IndexHeader"
            }), "。通过IndexHeader可以找到该方法引用的所有方法（", (0,jsx_runtime.jsx)(_components.a, {
              href: "#method",
              children: "Method"
            }), "）、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AD%97%E7%AC%A6%E4%B8%B2",
              children: "字符串"
            }), "或字面量数组（", (0,jsx_runtime.jsx)(_components.a, {
              href: "#literalarray",
              children: "LiteralArray"
            }), "）的偏移量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16 - 23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "function_kind"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示方法的函数类型（FunctionKind）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "24 - 31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reserved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方舟字节码文件内部使用的保留字段。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "FunctionKind"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "值"
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
            children: "FUNCTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "普通函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NC_FUNCTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "普通箭头函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GENERATOR_FUNCTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生成器函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASYNC_FUNCTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异步函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASYNC_GENERATOR_FUNCTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异步生成器函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASYNC_NC_FUNCTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异步箭头函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CONCURRENT_FUNCTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "并发函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "methodtag",
      children: "MethodTag"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "值"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "数量"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "格式"
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
            children: "NOTHING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["拥有此标记的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#taggedvalue",
              children: "TaggedValue"
            }), "，是其所在method_data的最后一项。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CODE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["拥有此标记的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#taggedvalue",
              children: "TaggedValue"
            }), "的data是一个偏移量，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#code",
              children: "Code"
            }), "，表示方法的代码段。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOURCE_LANG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["拥有此标记的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#taggedvalue",
              children: "TaggedValue"
            }), "的data为0时，表示源码语言是ArkTS/TS/JS。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEBUG_INFO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["拥有此标记的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#taggedvalue",
              children: "TaggedValue"
            }), "的data是一个偏移量，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#debuginfo",
              children: "DebugInfo"
            }), "，表示方法的调试信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ANNOTATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ">=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["拥有此标记的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#taggedvalue",
              children: "TaggedValue"
            }), "的data是一个偏移量，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#annotation",
              children: "Annotation"
            }), "， 表示方法的注解。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(886194)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["MethodTag是method_data中元素（", (0,jsx_runtime.jsx)(_components.a, {
        href: "#taggedvalue",
        children: "TaggedValue"
      }), "）的标记。表头中的“数量”表示在某个", (0,jsx_runtime.jsx)(_components.a, {
        href: "#method",
        children: "Method"
      }), "的method_data中，具有此标记的元素出现的次数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code",
      children: "Code"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对齐方式：单字节对齐。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "格式："
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "格式"
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
            children: "num_vregs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uleb128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示寄存器的数量，不包括存放入参和默认参数的寄存器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "num_args"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uleb128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示入参和默认参数的总数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "code_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uleb128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示所有指令的总大小，以字节为单位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tries_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uleb128"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["try_blocks数组的长度，表示", (0,jsx_runtime.jsx)(_components.a, {
              href: "#tryblock",
              children: "TryBlock"
            }), "的数量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "instructions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有指令的数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "try_blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TryBlock[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个数组，数组中每个元素均为TryBlock类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tryblock",
      children: "TryBlock"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对齐方式：单字节对齐。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "格式："
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "格式"
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
            children: "start_pc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uleb128"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["TryBlock的第一条指令距离其所在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#code",
              children: "Code"
            }), "的instructions的起始位置的偏移量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uleb128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TryBlock的大小，以字节为单位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "num_catches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uleb128"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["与TryBlock关联的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#catchblock",
              children: "CatchBlock"
            }), "的数量，值为1。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "catch_blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CatchBlock[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "与TryBlock关联的CatchBlock的数组，数组中有且仅有一个可以捕获所有类型的异常的CatchBlock。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "catchblock",
      children: "CatchBlock"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对齐方式：单字节对齐。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "格式："
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "格式"
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
            children: "type_idx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uleb128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值为0，表示此CatchBlock块捕获所有类型的异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "handler_pc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uleb128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异常处理逻辑的第一条指令的程序计数器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "code_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uleb128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此CatchBlock的大小，以字节为单位。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "annotation",
      children: "Annotation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述一个注解结构。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对齐方式：单字节对齐。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "格式："
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "格式"
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
            children: "class_idx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint16_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个指向当前Annotation所从属的类的索引，指向一个在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#classregionindex",
              children: "ClassRegionIndex"
            }), "中的位置，该位置的值是", (0,jsx_runtime.jsx)(_components.a, {
              href: "#type",
              children: "Type"
            }), "类型，是一个指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#class",
              children: "Class"
            }), "的偏移量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint16_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "elements数组的长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "elements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AnnotationElement[]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个数组，数组的每个元素都是", (0,jsx_runtime.jsx)(_components.a, {
              href: "#annotationelement",
              children: "AnnotationElement"
            }), "类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "element_types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t[]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个数组，数组的每个元素都是", (0,jsx_runtime.jsx)(_components.a, {
              href: "#annotationelementtag",
              children: "AnnotationElementTag"
            }), "类型，用于描述一个AnnotationElement。每个元素在element_types数组中的位置和其对应的AnnotationElement在elements数组中的位置一致。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(472661)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过Annotation的偏移量，可以找到偏移量所在的IndexHeader以解析class_idx。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "annotationelementtag",
      children: "AnnotationElementTag"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "标记"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "u1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'1'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "i8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'2'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "u8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'3'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "i16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'4'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "u16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'5'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "i32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'6'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "u32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'7'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "i64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'8'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "u64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'9'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "f32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'A'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "f64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'B'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'C'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'E'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "annotation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'G'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "literalarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'#'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unknown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'0'"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "annotationelement",
      children: "AnnotationElement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对齐方式：单字节对齐。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "格式："
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "格式"
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
            children: "name_off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个偏移量，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AD%97%E7%AC%A6%E4%B8%B2",
              children: "字符串"
            }), "，表示注解元素的名称。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["注解元素的值，若该值的宽度不超过32位，则此处存储值本身。否则，此处存储的值为指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#value-formats",
              children: "Value formats"
            }), "格式的偏移量。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "value-formats",
      children: "Value formats"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不同的值类型，有不同的值编码格式，包括INTEGER, LONG, FLOAT, DOUBLE, ID。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "格式"
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
            children: "INTEGER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "有符号的四字节整数值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LONG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "有符号的八字节整数值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLOAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "四字节位模式，向右零扩展，系统会将其解译为 IEEE754 32 位浮点值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DOUBLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "八字节位模式，向右零扩展，系统会将其解译为 IEEE754 64 位浮点值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "四字节位模式，表示文件中某个结构的偏移量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "linenumberprogramindex",
      children: "LineNumberProgramIndex"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "行号程序索引（LineNumberProgramIndex）的结构是一个数组，便于使用更紧凑的索引访问行号程序（Line number program）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对齐方式：4个字节。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "格式："
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "格式"
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
            children: "offsets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t[]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个数组，数组中每个元素的值是一个偏移量，指向一个行号程序。数组长度由", (0,jsx_runtime.jsx)(_components.a, {
              href: "#header",
              children: "Header"
            }), "中的num_lnps指定。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "debuginfo",
      children: "DebugInfo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调试信息（DebugInfo）包含方法的程序计数器与源代码中的行列号之间的映射以及有关局部变量的信息。调试信息的格式由", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://dwarfstd.org/dwarf3std.html",
        children: "DWARF调试信息格式第3版"
      }), "（见第6.2项）的内容演变形成。基于状态机（State machine）的执行模型对行号程序（Line number program）进行解释，可得到映射和局部变量信息编码。为对不同方法的相同行号程序进行去重，程序中引用的所有常量都被移动到了常量池（Constant pool）中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对齐方式：单字节对齐。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "格式："
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "格式"
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
            children: "line_start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uleb128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "状态机的行号寄存器的初始值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "num_parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uleb128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参和默认参数的总数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uleb128[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存储方法入参名称的数组，长度为num_parameters。每个元素表示字符串的偏移量或0，0表示对应参数无名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "constant_pool_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uleb128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "常量池的大小，以字节为单位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "constant_pool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uleb128[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存放常量池数据的数组，数组长度是constant_pool_size。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "line_number_program_idx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uleb128"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个索引，指向一个在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#linenumberprogramindex",
              children: "LineNumberProgramIndex"
            }), "中的位置，该位置的值是一个指向Line number program的偏移量。Line number program的长度可变，以END_SEQUENCE操作码结束。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Constant pool"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常量池（Constant pool）是DebugInfo中存放常量的结构。很多方法都具有相似的行号程序，其区别仅在于变量名、变量类型和文件名。为了对这类行号程序进行去重，程序中引用的所有常量都存储在常量池。在解释程序时，状态机维护一个指向常量池的指针。当状态机解释一条需要常量参数的指令时，会从内存常量池指针指向的位置读取值，然后递增指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "State machine"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["状态机（State machine）的作用是产生", (0,jsx_runtime.jsx)(_components.a, {
        href: "#debuginfo",
        children: "DebugInfo"
      }), "信息。状态机中有以下的寄存器："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "初始值"
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
            children: "address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "程序计数器（指向方法的某个指令），只能单调递增。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "line"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#debuginfo",
              children: "DebugInfo"
            }), "的属性line_start的值"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无符号整数，对应源码中的行号。所有的行都是从1开始编号，因此寄存器的值不能小于1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无符号整数，对应源码中的列号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "file"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["class_data（参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#class",
              children: "Class"
            }), "）中SOURCE_FILE标记的值，或者0"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个偏移量，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AD%97%E7%AC%A6%E4%B8%B2",
              children: "字符串"
            }), "，表示源文件的名称。如果没有文件名信息（", (0,jsx_runtime.jsx)(_components.a, {
              href: "#class",
              children: "Class"
            }), "中没有SOURCE_FILE标记），那么寄存器的值是0。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "source_code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个偏移量，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AD%97%E7%AC%A6%E4%B8%B2",
              children: "字符串"
            }), "，表示源文件的源码。如果没有源码信息，那么寄存器的值是0。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "constant_pool_ptr"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#debuginfo",
              children: "DebugInfo"
            }), "中常量池的起始地址"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向当前常量值的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Line number program"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一个行号程序（Line number program）由指令组成。每条指令都包含一个字节的操作码以及可选参数。根据操作码的不同，参数的值可能被编码在指令中（称为指令参数），或者需要从常量池中获取（称为常量池参数）。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "操作码"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "值"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "指令参数"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "常量池参数"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参数说明"
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
            children: "END_SEQUENCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标记行号程序的结束。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ADVANCE_PC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uleb128 addr_diff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "addr_diff：address寄存器的值待增加的数值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "address寄存器中的值加上addr_diff，指向下一个地址，而不生成位置条目。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ADVANCE_LINE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sleb128 line_diff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "line_diff：line寄存器的值待增加的数值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "line寄存器中的值加上line_diff，指向下一个行位置，而不生成位置条目。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "START_LOCAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x03"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sleb128 register_num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uleb128 name_idx  uleb128 type_idx"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["register_num：将包含局部变量的寄存器。  name_idx：一个偏移量，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AD%97%E7%AC%A6%E4%B8%B2",
              children: "字符串"
            }), "，表示变量的名称。  type_idx：一个偏移量，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AD%97%E7%AC%A6%E4%B8%B2",
              children: "字符串"
            }), "，表示变量的类型。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在当前地址中引入一个带有名称和类型的局部变量。将要包含这个变量的寄存器的编号被编码在指令中。如果寄存器的编号是-1，则表示这个寄存器是累加器寄存器。name_idx和type_idx的值可能为0，如果为0，则代表对应的信息不存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "START_LOCAL_EXTENDED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sleb128 register_num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uleb128 name_idx  uleb128 type_idx  uleb128 sig_idx"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["register_num：将包含局部变量的寄存器。  name_idx：一个偏移量，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AD%97%E7%AC%A6%E4%B8%B2",
              children: "字符串"
            }), "，表示变量的名称。  type_idx：一个偏移量，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AD%97%E7%AC%A6%E4%B8%B2",
              children: "字符串"
            }), "，表示变量的类型。  sig_idx：一个偏移量，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AD%97%E7%AC%A6%E4%B8%B2",
              children: "字符串"
            }), "，表示变量的签名。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在当前地址中引入一个带有名称、类型和签名的局部变量。将要包含这个变量的寄存器的编号被编码在指令中。如果寄存器的编号是-1，则表示这个寄存器是累加器寄存器。name_idx、type_idx和sig_idx的值可能为0，如果为0，则代表对应的信息不存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "END_LOCAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sleb128 register_num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "register_num：包含局部变量的寄存器。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在当前地址将指定寄存器中的局部变量标记为超出范围。寄存器的编号为-1，则表示这个寄存器是累加器寄存器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SET_FILE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x09"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uleb128 name_idx"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["name_idx：一个偏移量，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AD%97%E7%AC%A6%E4%B8%B2",
              children: "字符串"
            }), "，表示文件的名称。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置file寄存器的值。name_idx的值可能为0，如果为0，则代表对应的信息不存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SET_SOURCE_CODE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uleb128 source_idx"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["source_idx：一个偏移量，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AD%97%E7%AC%A6%E4%B8%B2",
              children: "字符串"
            }), "，表示文件的源码。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置source_code寄存器的值。source_idx的值可能为0，如果为0，则代表对应的信息不存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SET_COLUMN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uleb128 column_num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "column_num：待设置的列号。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置column寄存器的值，并生成一个位置条目。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "特殊操作码"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0c..0xff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使 line 和 address 寄存器指向下一个地址，并生成一个位置条目。详情参阅下文中的说明。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于值在0x0c和0xff（含）之间的特殊操作码，状态机按照以下步骤将line和address寄存器移动一小部分，然后生成一个新的位置条目（参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://dwarfstd.org/dwarf3std.html",
        children: "DWARF调试信息格式第3版"
      }), "第6.2.5.1项 Special Opcodes）："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "步骤序号"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "操作"
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
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "adjusted_opcode = opcode - OPCODE_BASE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算调整后的操作码。OPCODE_BASE的值是0x0c，是第一个特殊操作码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "address += adjusted_opcode / LINE_RANGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "增加address寄存器中的值。LINE_RANGE的值是15，用来计算行号信息的变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "line += LINE_BASE + (adjusted_opcode % LINE_RANGE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "增加line寄存器中的值。LINE_BASE的值是-4，是最小的行号增量值；最大的行号增量值是LINE_BASE + LINE_RANGE - 1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生成一个新的位置条目。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(872754)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "特殊操作码计算方式：(line_increment - LINE_BASE) + (address_increment * LINE_RANGE) + OPCODE_BASE。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "indexsection",
      children: "IndexSection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通常情况下，字节码文件的各个结构使用32位偏移量来引用，当一个结构引用另一个结构时，需要在当前结构中记录被引用结构的32位偏移量。为了减小文件体积，字节码文件被分割成多个索引区域（Index region），每个索引区域内的结构使用16位索引。IndexSection结构描述了索引区域的集合。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对齐方式：4个字节。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "格式："
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "格式"
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
            children: "headers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IndexHeader[]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个数组，数组中每个元素是", (0,jsx_runtime.jsx)(_components.a, {
              href: "#indexheader",
              children: "IndexHeader"
            }), "类型。数组中的元素根据区域的起始偏移量进行排序。数组长度由", (0,jsx_runtime.jsx)(_components.a, {
              href: "#header",
              children: "Header"
            }), "中的num_index_regions指定。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "indexheader",
      children: "IndexHeader"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["每个IndexHeader结构描述一个索引区域。每个索引区域都有两类索引：指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "#type",
        children: "Type"
      }), "的索引和指向方法、字符串或者字面量数组的索引。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对齐方式：4个字节。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "格式："
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "格式"
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
            children: "start_off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该区域的起始偏移量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "end_off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该区域的结束偏移量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "class_region_idx_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该区域的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#classregionindex",
              children: "ClassRegionIndex"
            }), "中元素的数量，最大值为65536。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "class_region_idx_off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个偏移量，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#classregionindex",
              children: "ClassRegionIndex"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "method_string_literal_region_idx_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该区域的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#methodstringliteralregionindex",
              children: "MethodStringLiteralRegionIndex"
            }), "中元素的数量，最大值为65536。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "method_string_literal_region_idx_off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个偏移量，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#methodstringliteralregionindex",
              children: "MethodStringLiteralRegionIndex"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reserved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方舟字节码文件内部使用的保留字段。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "classregionindex",
      children: "ClassRegionIndex"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ClassRegionIndex结构的作用是允许通过更紧凑的索引，找到对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#type",
        children: "Type"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对齐方式：4个字节。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "格式："
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "格式"
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
            children: "types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type[]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个数组，数组中每个元素都是", (0,jsx_runtime.jsx)(_components.a, {
              href: "#type",
              children: "Type"
            }), "类型。数组长度由", (0,jsx_runtime.jsx)(_components.a, {
              href: "#indexheader",
              children: "IndexHeader"
            }), "中的class_region_idx_size指定。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "type",
      children: "Type"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["表示一个基本类型编码或一个指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "#class",
        children: "Class"
      }), "的偏移量，是一个32位的值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基本类型采用以下方式编码："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "编码"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "u1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "i8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x01"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "u8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x02"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "i16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x03"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "u16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x04"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "i32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x05"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "u32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x06"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "f32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x07"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "f64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x08"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "i64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x09"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "u64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0a"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0c"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "methodstringliteralregionindex",
      children: "MethodStringLiteralRegionIndex"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MethodStringLiteralRegionIndex结构的作用是允许通过更紧凑的索引，找到对应的方法、字符串或者字面量数组。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对齐方式：4个字节。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "格式："
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "格式"
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
            children: "offsets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t[]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个数组，数组中每个元素的值都是一个偏移量，指向方法、字符串或者字面量数组。数组长度由", (0,jsx_runtime.jsx)(_components.a, {
              href: "#indexheader",
              children: "IndexHeader"
            }), "中的method_string_literal_region_idx_size指定。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "literalarray",
      children: "LiteralArray"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述字节码文件中的字面量数组。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对齐方式：单字节对齐。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "格式："
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "格式"
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
            children: "num_literals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "literals数组的长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "literals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Literal[]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个数组，数组的每个元素都是", (0,jsx_runtime.jsx)(_components.a, {
              href: "#literal",
              children: "Literal"
            }), "类型。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "literal",
      children: "Literal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述字节码文件中的字面量，根据字面量值的字节数的不同，有四种编码格式。分别是单字节编码、双字节编码、四字节编码和八字节编码。根据不同数值长度对应相应的编译格式，优化字节码文件大小。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对齐方式：每种格式都有对应的对齐规则。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "格式："
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "格式"
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
            children: "单字节编码"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单字节的值，单字节对齐，存储用于简单类型的字面量，例如BOOL字面量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "双字节编码"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint16_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "双字节的值，2个字节对齐，存储16位整型字面量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "四字节编码"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "四字节的值，4个字节对齐，存储32位数值字面量，例如INTEGER整数型字面量，或FLOAT浮点型字面量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "八字节编码"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "八字节的值，8个字节对齐，存储64位数值字面量，例如DOUBLE双精度浮点型字面量。"
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
539598(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
833552(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
472661(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
67610(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

},
872754(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
886194(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
394147(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
810737(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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