"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["539332"], {
140305(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_c_cpp_fdsan_fdsan_md_8ed_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-c-cpp-fdsan-fdsan-md-8ed.json
var site_docs_coding_c_cpp_fdsan_fdsan_md_8ed_namespaceObject = JSON.parse('{"id":"coding/c-cpp/fdsan/fdsan","title":"fdsan使用指导","description":"功能介绍","source":"@site/docs/coding/c-cpp/fdsan/fdsan.md","sourceDirName":"coding/c-cpp/fdsan","slug":"/coding/c-cpp/fdsan/","permalink":"/harmonyos-docs-site/coding/c-cpp/fdsan/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"fdsan使用指导","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/fdsan","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"C/C++标准库机制概述","permalink":"/harmonyos-docs-site/coding/c-cpp/c-cpp-overview/"},"next":{"title":"Node-API简介","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/c-cpp/fdsan/fdsan.md


const frontMatter = {
	title: 'fdsan使用指导',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/fdsan',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = 'fdsan使用指导';

const assets = {

};



const toc = [{
  "value": "功能介绍",
  "id": "功能介绍",
  "level": 2
}, {
  "value": "实现原理",
  "id": "实现原理",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "fdsan_set_error_level",
  "id": "fdsan_set_error_level",
  "level": 3
}, {
  "value": "fdsan_get_error_level",
  "id": "fdsan_get_error_level",
  "level": 3
}, {
  "value": "fdsan_create_owner_tag",
  "id": "fdsan_create_owner_tag",
  "level": 3
}, {
  "value": "fdsan_exchange_owner_tag",
  "id": "fdsan_exchange_owner_tag",
  "level": 3
}, {
  "value": "fdsan_close_with_tag",
  "id": "fdsan_close_with_tag",
  "level": 3
}, {
  "value": "fdsan_get_owner_tag",
  "id": "fdsan_get_owner_tag",
  "level": 3
}, {
  "value": "fdsan_get_tag_type",
  "id": "fdsan_get_tag_type",
  "level": 3
}, {
  "value": "fdsan_get_tag_value",
  "id": "fdsan_get_tag_value",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例",
  "level": 2
}, {
  "value": "使用标准库接口",
  "id": "使用标准库接口",
  "level": 3
}, {
  "value": "日志信息",
  "id": "日志信息",
  "level": 3
}, {
  "value": "实现具有fdsan的函数接口",
  "id": "实现具有fdsan的函数接口",
  "level": 3
}, {
  "value": "多线程场景下的注意事项",
  "id": "多线程场景下的注意事项",
  "level": 2
}, {
  "value": "close函数信号安全性说明",
  "id": "close函数信号安全性说明",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "fdsan使用指导",
        children: "fdsan使用指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fdsan主要用于检测不同使用者对相同文件描述符的错误操作，如多次关闭（double-close）和关闭后使用（use-after-close）。这些文件描述符可以是操作系统中的文件、目录、网络套接字或其他I/O设备等。在程序中，打开文件或套接字会生成一个文件描述符。如果此文件描述符在使用后出现反复关闭或关闭后使用等情形，会导致内存泄露或文件句柄泄露等安全隐患。这类问题非常隐蔽，难以排查。为此，引入了fdsan这种检测工具。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设计思路：当打开已有文件或创建一个新文件的时候，在得到返回fd后，设置一个关联的tag，来标记fd的属主信息；关闭文件前，检测fd关联的tag，判断是否符合预期(属主信息一致)，符合就继续走正常文件关闭流程；如果不符合就是检测到异常，根据设置，调用对应的异常处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tag由两部分组成，最高位的8-bit构成type，后面的56-bit构成value。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type标识fd通过何种封装形式进行管理，例如FDSAN_OWNER_TYPE_FILE表示fd通过普通文件进行管理。类型在fdsan_owner_type中定义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "value用于标识实际的owner tag。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tag构成图示"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(351194)/* ["default"] */.A) + "",
        width: "988",
        height: "262"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fdsan_set_error_level",
      children: "fdsan_set_error_level"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum fdsan_error_level fdsan_set_error_level(enum fdsan_error_level new_level);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      }), " 可以通过fdsan_set_error_level设定error_level，error_level用于控制检测到异常后的处理行为。默认error_level为FDSAN_ERROR_LEVEL_WARN_ALWAYS。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      }), " fdsan_error_level"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FDSAN_ERROR_LEVEL_DISABLED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "disabled，此level代表什么都不处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FDSAN_ERROR_LEVEL_WARN_ONCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "warn-once，第一次出现错误时在hilog中发出警告，然后将级别降低为disabled(FDSAN_ERROR_LEVEL_DISABLED)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FDSAN_ERROR_LEVEL_WARN_ALWAYS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "warn-always，每次出现错误时都在hilog中发出警告。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FDSAN_ERROR_LEVEL_FATAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fatal，出现错误时调用abort异常退出。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      }), " 返回旧的error_level。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fdsan_get_error_level",
      children: "fdsan_get_error_level"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum fdsan_error_level fdsan_get_error_level();\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      }), " 可以通过fdsan_get_error_level获取error level。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      }), " 当前的error_level。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fdsan_create_owner_tag",
      children: "fdsan_create_owner_tag"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint64_t fdsan_create_owner_tag(enum fdsan_owner_type type, uint64_t tag);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      }), " 通过传入的type和tag字段，拼接成一个有效的文件描述符的关闭tag。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      }), " fdsan_owner_type"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FDSAN_OWNER_TYPE_GENERIC_00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认未使用fd对应的type值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FDSAN_OWNER_TYPE_GENERIC_FF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认非法fd对应的type值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FDSAN_OWNER_TYPE_FILE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认普通文件对应的type值，使用fopen或fdopen打开的文件具有该类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FDSAN_OWNER_TYPE_DIRECTORY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认文件夹对应的type值，使用opendir或fdopendir打开的文件具有该类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FDSAN_OWNER_TYPE_UNIQUE_FD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认unique_fd对应的type值，保留暂未使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FDSAN_OWNER_TYPE_ZIPARCHIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认zip压缩文件对应的type值，保留暂未使用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      }), " 返回创建的tag，可以用于fdsan_exchange_owner_tag函数的输入。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fdsan_exchange_owner_tag",
      children: "fdsan_exchange_owner_tag"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void fdsan_exchange_owner_tag(int fd, uint64_t expected_tag, uint64_t new_tag);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      }), " 修改文件描述符的关闭tag。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过fd找到对应的FdEntry，判断close_tag值与expected_tag是否一致。如果一致，说明符合预期，可以使用new_tag值重新设定对应的FdEntry。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果不符合，说明检测到异常，后续进行对应的异常处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fd句柄，作为FdEntry的索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "expected_tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "期望的ownership tag值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "new_tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置新的ownership tag值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fdsan_close_with_tag",
      children: "fdsan_close_with_tag"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int fdsan_close_with_tag(int fd, uint64_t tag);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      }), " 根据tag描述符关闭文件描述符。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过fd找到匹配的FdEntry。如果close_tag与tag相同，则符合预期，可以继续执行文件描述符关闭流程；否则，表示检测到异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待关闭的fd句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "期望的ownership tag。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      }), " 0或者-1，0表示close成功，-1表示close失败。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fdsan_get_owner_tag",
      children: "fdsan_get_owner_tag"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint64_t fdsan_get_owner_tag(int fd);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      }), " 根据文件描述符获取tag信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过fd找到匹配的FdEntry，并获取其close_tag。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件描述符。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      }), " 返回对应fd的tag。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fdsan_get_tag_type",
      children: "fdsan_get_tag_type"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char* fdsan_get_tag_type(uint64_t tag);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      }), " 根据tag计算出对应的type类型。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取tag信息后，计算并获取对应tag的type信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ownership tag。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      }), " 返回对应tag的type。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fdsan_get_tag_value",
      children: "fdsan_get_tag_value"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint64_t fdsan_get_tag_value(uint64_t tag);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      }), " 根据tag计算出对应的owner value。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过获取到的tag信息，通过偏移计算获取对应tag中的value信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ownership tag。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      }), " 返回对应tag的value。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如何使用fdsan？这是一个简单的double-close问题："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <unistd.h>\n#include <fcntl.h>\n#include <hilog/log.h>\n#include <vector>\n#include <thread>\n\nvoid good_write()\n{\n    sleep(1);\n    int fd = open(\"log\", O_WRONLY | O_APPEND);\n    sleep(3);\n    ssize_t ret = write(fd, \"fdsan test\", 11);\n    if (ret == -1) {\n        OH_LOG_ERROR(LOG_APP, \"good write but failed?!\");\n    }\n    close(fd);\n}\n\nvoid bad_close()\n{\n    int fd = open(\"/dev/null\", O_RDONLY);\n    close(fd);\n    sleep(2);\n    // This close expected to be detect by fdsan\n    close(fd);\n}\n\nvoid functional_test()\n{\n    std::vector<std::thread> threads;\n    for (auto function : { good_write, bad_close }) {\n        threads.emplace_back(function);\n    }\n    for (auto& thread : threads) {\n        thread.join();\n    }\n}\n\nint main()\n{\n    functional_test();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述代码中的good_write函数会打开一个文件并写入一些字符串，而bad_close函数中也会打开一个文件同时包含double-close问题，这两个线程同时运行执行情况如下图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(150324)/* ["default"] */.A) + "",
        width: "748",
        height: "412"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于每次open返回的文件描述符（fd）是顺序分配的，进入主函数后第一个可用的fd是43。在bad_close 函数中，第一次open返回的fd也是43。关闭之后，43变成可用的fd。在good_write函数中，open返回了第一个可用的fd，即43。然而，由于bad_close函数中存在重复关闭问题，错误地关闭了另一个线程中打开的文件，导致写入失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "引入fdsan后，有两种检测方法：使用标准库接口或实现带有fdsan的函数接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用标准库接口",
      children: "使用标准库接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "标准库接口中，fopen、fdopen、opendir、fdopendir已集成fdsan。使用这些接口而非直接使用open有助于检测问题。例如，可以使用fopen替代open。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <stdio.h>\n#include <errno.h>\n#define TEMP_FILE \"/data/local/tmp/test.txt\"\n\nvoid good_write()\n{\n    // fopen is protected by fdsan, replace open with fopen\n    // int fd = open(TEMP_FILE, O_RDWR);\n    FILE *f = fopen(TEMP_FILE, \"w+\");\n    if (f == NULL) {\n        printf(\"fopen failed errno=%d\\n\", errno);\n        return;\n    }\n    // ssize_t ret = write(fd, \"fdsan test\\n\", 11);\n    int ret = fprintf(f, \"fdsan test %d\\n\", 11);\n    if (ret < 0) {\n        printf(\"fprintf failed errno=%d\\n\", errno);\n    }\n    // close(fd);\n    fclose(f);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "日志信息",
      children: "日志信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用fopen打开的每个文件描述符都需要有一个与之对应的 tag 。fdsan 在 close 时会检查关闭的 fd 是否与 tag 匹配，不匹配就会默认提示相关日志信息。下面是上述代码的日志信息："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# hilog | grep MUSL-FDSAN\n04-30 15:03:41.760 10933  1624 E C03f00/MUSL-FDSAN: attempted to close file descriptor 43,                             expected to be unowned, actually owned by FILE* 0x00000000f7b90aa2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从这里的错误信息中可以看出，FILE接口的文件被其他人错误地关闭了。FILE接口的地址可以协助进一步定位。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此外，可以在代码中使用fdsan_set_error_level设置错误等级error_level。设置为Fatal之后，如果fdsan检测到错误，会提示日志信息并crash生成堆栈信息，用于定位。下面是 error_level 设置为Fatal之后生成的crash堆栈信息："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Reason:Signal:SIGABRT(SI_TKILL)@0x0000076e from:1902:20010043\nFault thread info:\nTid:15312, Name:e.myapplication\n#00 pc 000e65bc /system/lib/ld-musl-arm.so.1(raise+176)(3de40c79448a2bbced06997e583ef614)\n#01 pc 0009c3bc /system/lib/ld-musl-arm.so.1(abort+16)(3de40c79448a2bbced06997e583ef614)\n#02 pc 0009de4c /system/lib/ld-musl-arm.so.1(fdsan_error+116)(3de40c79448a2bbced06997e583ef614)\n#03 pc 0009e2e8 /system/lib/ld-musl-arm.so.1(fdsan_close_with_tag+836)(3de40c79448a2bbced06997e583ef614)\n#04 pc 0009e56c /system/lib/ld-musl-arm.so.1(close+20)(3de40c79448a2bbced06997e583ef614)\n#05 pc 000055d8 /data/storage/el1/bundle/libs/arm/libentry.so(bad_close()+96)(f3339aac824c099f449153e92718e1b56f80b2ba)\n#06 pc 00006cf4 /data/storage/el1/bundle/libs/arm/libentry.so(decltype(std::declval<void (*)()>()()) std::__n1::__invoke[abi:v15004]<void (*)()>(void (*&&)())+24)(f3339aac824c099f449153e92718e1b56f80b2ba)\n#07 pc 00006c94 /data/storage/el1/bundle/libs/arm/libentry.so(f3339aac824c099f449153e92718e1b56f80b2ba)\n#08 pc 000067b8 /data/storage/el1/bundle/libs/arm/libentry.so(void* std::__n1::__thread_proxy[abi:v15004]<std::__n1::tuple<std::__n1::unique_ptr<std::__n1::__thread_struct, std::__n1::default_delete<std::__n1::__thread_struct>>, void (*)()>>(void*)+100)(f3339aac824c099f449153e92718e1b56f80b2ba)\n#09 pc 00105a6c /system/lib/ld-musl-arm.so.1(start+248)(3de40c79448a2bbced06997e583ef614)\n#10 pc 000700b0 /system/lib/ld-musl-arm.so.1(3de40c79448a2bbced06997e583ef614)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此时，从crash信息中可以看到bad_close存在问题，同时crash中包含所有打开的文件，协助定位问题，提升效率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OpenFiles列出所有打开的文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "字段说明："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fd->对象描述：文件描述符fd关联的内核对象标识。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[方括号内容]：对象内部标识："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于socket/pipe：内核分配的伪文件系统ID；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于普通文件：文件系统inode编号（操作系统用于管理该文件元数据及数据块的数据结构）；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于anon_inode：对象类型名称。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "native object of unknown type 0：该fd对应的tag标签值为0。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OpenFiles:\n0->/dev/null native object of unknown type 0\n1->/dev/null native object of unknown type 0\n2->/dev/null native object of unknown type 0\n3->socket:[28102] native object of unknown type 0\n4->socket:[28103] native object of unknown type 0\n5->anon_inode:[eventpoll] native object of unknown type 0\n6->/sys/kernel/debug/tracing/trace_marker native object of unknown type 0\n7->anon_inode:[eventpoll] native object of unknown type 0\n8->anon_inode:[eventpoll] native object of unknown type 0\n9->/dev/console native object of unknown type 0\n10->pipe:[95598] native object of unknown type 0\n11->pipe:[95598] native object of unknown type 0\n12->socket:[18542] native object of unknown type 0\n13->pipe:[96594] native object of unknown type 0\n14->socket:[18545] native object of unknown type 0\n15->pipe:[96594] native object of unknown type 0\n16->anon_inode:[eventfd] native object of unknown type 0\n17->/dev/binder native object of unknown type 0\n18->/data/storage/el1/bundle/entry.hap native object of unknown type 0\n19->anon_inode:[eventpoll] native object of unknown type 0\n20->anon_inode:[signalfd] native object of unknown type 0\n21->socket:[29603] native object of unknown type 0\n22->anon_inode:[eventfd] native object of unknown type 0\n23->anon_inode:[eventpoll] native object of unknown type 0\n24->anon_inode:[eventfd] native object of unknown type 0\n25->anon_inode:[eventpoll] native object of unknown type 0\n26->anon_inode:[eventfd] native object of unknown type 0\n27->anon_inode:[eventpoll] native object of unknown type 0\n28->anon_inode:[eventfd] native object of unknown type 0\n29->anon_inode:[eventpoll] native object of unknown type 0\n30->anon_inode:[eventfd] native object of unknown type 0\n31->anon_inode:[eventpoll] native object of unknown type 0\n32->anon_inode:[eventfd] native object of unknown type 0\n33->anon_inode:[eventpoll] native object of unknown type 0\n34->anon_inode:[eventfd] native object of unknown type 0\n35->socket:[97409] native object of unknown type 0\n36->socket:[94716] native object of unknown type 0\n38->socket:[94720] native object of unknown type 0\n40->/data/storage/el1/bundle/entry_test.hap native object of unknown type 0\n41->socket:[95617] native object of unknown type 0\n42->/sys/kernel/debug/tracing/trace_marker native object of unknown type 0\n43->/dev/null FILE* 4155724704\n44->socket:[94737] native object of unknown type 0\n45->pipe:[95634] native object of unknown type 0\n46->pipe:[95634] native object of unknown type 0\n47->pipe:[95635] native object of unknown type 0\n49->pipe:[95636] native object of unknown type 0\n50->pipe:[95636] native object of unknown type 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现具有fdsan的函数接口",
      children: "实现具有fdsan的函数接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除了使用标准库函数，还可以实现具有fdsan的函数接口。fdsan机制通过fdsan_exchange_owner_tag和fdsan_close_with_tag实现。fdsan_exchange_owner_tag设置fd的tag，fdsan_close_with_tag检查关闭文件时的tag。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面是一个实现具有fdsan功能的函数接口的示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <errno.h>\n#include <stdio.h>\n#include <fcntl.h>\n#include <unistd.h>\n\n#include <utility>\n\nstruct fdsan_fd {\n    fdsan_fd() = default;\n\n    explicit fdsan_fd(int fd)\n    {\n        reset(fd);\n    }\n\n    fdsan_fd(const fdsan_fd& copy) = delete;\n    fdsan_fd(fdsan_fd&& move)\n    {\n        *this = std::move(move);\n    }\n\n    ~fdsan_fd()\n    {\n        reset();\n    }\n\n    fdsan_fd& operator=(const fdsan_fd& copy) = delete;\n    fdsan_fd& operator=(fdsan_fd&& move)\n    {\n        if (this == &move) {\n            return *this;\n        }\n        reset();\n        if (move.fd_ != -1) {\n            fd_ = move.fd_;\n            move.fd_ = -1;\n            // Acquire ownership from the moved-from object.\n            exchange_tag(fd_, move.tag(), tag());\n        }\n        return *this;\n    }\n\n    int get()\n    {\n        return fd_;\n    }\n\n    void reset(int new_fd = -1)\n    {\n        if (fd_ != -1) {\n            close(fd_, tag());\n            fd_ = -1;\n        }\n        if (new_fd != -1) {\n            fd_ = new_fd;\n            // Acquire ownership of the presumably unowned fd.\n            exchange_tag(fd_, 0, tag());\n        }\n    }\n\n  private:\n    int fd_ = -1;\n\n    // Use the address of object as the file tag\n    uint64_t tag()\n    {\n        return reinterpret_cast<uint64_t>(this);\n    }\n\n    static void exchange_tag(int fd, uint64_t old_tag, uint64_t new_tag)\n    {\n        if (&fdsan_exchange_owner_tag) {\n            fdsan_exchange_owner_tag(fd, old_tag, new_tag);\n        }\n    }\n\n    static int close(int fd, uint64_t tag)\n    {\n        if (&fdsan_close_with_tag) {\n            return fdsan_close_with_tag(fd, tag);\n        }\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这里的实现中使用fdsan_exchange_owner_tag在开始时将fd与结构体对象地址绑定，然后在关闭文件时使用fdsan_close_with_tag进行检测，预期tag是结构体对象地址。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在实现具有fdsan的函数接口后，可以使用该接口包装fd。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define TEMP_FILE \"/data/local/tmp/test.txt\"\n\nvoid good_write()\n{\n    // int fd = open(DEV_NULL_FILE, O_RDWR);\n    fdsan_fd fd(open(TEMP_FILE, O_CREAT | O_RDWR));\n    if (fd.get() == -1) {\n        printf(\"fopen failed errno=%d\\n\", errno);\n        return;\n    }\n    ssize_t ret = write(fd.get(), \"fdsan test\\n\", 11);\n    if (ret == -1) {\n        printf(\"write failed errno=%d\\n\", errno);\n    }\n    fd.reset();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此时运行该程序可以检测到另一个线程的double-close问题，详细信息可以", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%97%A5%E5%BF%97%E4%BF%A1%E6%81%AF",
        children: "参考日志"
      }), "。同样也可以设置error_level为fatal，这样可以使fdsan在检测到crash之后主动crash以获取更多信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多线程场景下的注意事项",
      children: "多线程场景下的注意事项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在多线程环境中使用fdsan时，由于文件描述符（fd）的分配和回收是全局性的，fdsan检测到的tag不匹配错误信息可能存在与实际根因不一致的情况。开发者需要注意以下场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "fd快速回收导致报错指向错误属主："
        })
      }), " 当线程A关闭一个fd后，该fd可能立即被线程B回收并绑定新的tag。此时如果线程A（或系统中其他模块）对该fd执行了非法close或double close，fdsan报错信息中显示的owner将是线程B的tag，而非原始属主的信息。这并不意味着线程B的tag设置有误，而是当前进程内其他业务逻辑存在非法close或double close的问题。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "检测与执行的竞态窗口："
        })
      }), " fdsan_close_with_tag内部在\"校验tag\"与\"执行close\"之间存在极小的时间窗口。在多线程并发场景下，fd可能在该窗口内被回收并重新分配给其他线程，导致校验结果指向的属主并非当前fd的实际使用者。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "排查建议："
        })
      }), " 当看到fdsan报错时，不应直接认定日志中显示的owner就是问题的直接责任方。建议结合fd的生命周期、调用栈信息以及系统中其他模块对fd的使用情况进行综合排查，确认是否存在其他模块的非法close或double close行为。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "close函数信号安全性说明",
      children: "close函数信号安全性说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在POSIX标准中，close函数原本被定义为信号安全函数（async-signal-safe），这意味着它可以安全地在信号处理函数（signal handler）中调用。然而，在集成了fdsan（File Descriptor Sanitizer）机制的系统实现中，这一性质发生了变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于fdsan的实现依赖于mmap系统调用，而mmap本身不是信号安全函数，这会导致close函数也不再是信号安全的。因此，在信号处理函数中避免使用 close，可以通过其他系统调用来实现相同功能。"
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
351194(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
150324(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959368-023af6a07855f4fa80e091690409a2b8.png");

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