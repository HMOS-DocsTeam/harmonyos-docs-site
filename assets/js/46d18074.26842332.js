"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["366890"], {
647170(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_web_introduction_ide_ohpm_depot_management_ide_ohpm_depot_management_md_46d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-module-management-ide-ohpm-repo-ide-ohpm-web-introduction-ide-ohpm-depot-management-ide-ohpm-depot-management-md-46d.json
var site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_web_introduction_ide_ohpm_depot_management_ide_ohpm_depot_management_md_46d_namespaceObject = JSON.parse('{"id":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-ohpm-depot-management/ide-ohpm-depot-management","title":"仓库管理","description":"仓库管理主要负责管理仓库信息，包括仓库中所有包权限管理，包的上传与下架和uplinks管理。","source":"@site/docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-ohpm-depot-management/ide-ohpm-depot-management.md","sourceDirName":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-ohpm-depot-management","slug":"/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-ohpm-depot-management/","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-ohpm-depot-management/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"仓库管理","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-depot-management","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"用户管理","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-ohpm-user-management/"},"next":{"title":"包权限管理","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-package-permission-management/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-ohpm-depot-management/ide-ohpm-depot-management.md


const frontMatter = {
	title: '仓库管理',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-depot-management',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = '仓库管理';

const assets = {

};



const toc = [{
  "value": "管理仓库",
  "id": "管理仓库",
  "level": 2
}, {
  "value": "管理三方包",
  "id": "管理三方包",
  "level": 3
}, {
  "value": "<strong><strong>权限管理</strong></strong>",
  "id": "权限管理",
  "level": 3
}, {
  "value": "<strong><strong>上下架</strong></strong>",
  "id": "上下架",
  "level": 3
}, {
  "value": "编辑仓库",
  "id": "编辑仓库",
  "level": 3
}, {
  "value": "删除仓库",
  "id": "删除仓库",
  "level": 3
}, {
  "value": "新增仓库",
  "id": "新增仓库",
  "level": 3
}, {
  "value": "uplinks",
  "id": "uplinks",
  "level": 2
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
        id: "仓库管理",
        children: "仓库管理"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仓库管理主要负责管理仓库信息，包括仓库中所有包权限管理，包的上传与下架和uplinks管理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "管理仓库",
      children: "管理仓库"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohpm-repo从5.3.0开始支持多仓配置，并且支持对每个仓库进行权限编辑。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["仓库权限分为读权限和写权限。当用户在执行下载包、上传包、下架现有包和编辑包标签时，需要同时具有仓库的对应权限和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-package-permission-management",
        children: "包的对应权限"
      }), "，缺一不可。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "仓库权限类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "前提条件"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可执行操作"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "典型场景"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "可读"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 公开可读  2. 授权可读，用户位于授权可读白名单中"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 下载包"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者获取依赖包"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "可写"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 公开可写  2. 授权可写，用户位于授权可写白名单中"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 下载包 - 上传包 - 下架现有包 - 编辑包标签（Tag）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "维护者更新仓库内容"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "管理仓库页面展示当前所拥有的仓库信息，包含如下四个功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "管理ohpm仓库三方包。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "编辑仓库。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "删除仓库。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "新增仓库。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(760423)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1220",
        height: "680"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "管理三方包",
      children: "管理三方包"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "管理三方包页面包含权限管理和上下架两部分。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "权限管理",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限管理"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohpm-repo从5.3.0版本开始支持配置包级别的访问权限。系统管理员能够对仓库中所有的包进行权限管理，支持配置包的可见性、白名单和管理所有者。支持通过包名模糊检索到需要管理权限的包。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(423278)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1259",
        height: "668"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "区域1：可见性配置，能够配置一个包的可见性，默认为公开可读。当配置为授权可读时，支持在区域2中添加可读白名单。当包设置为公开可读时，所有用户对包具有下载和查看权限；当包设置为授权可读时，仅添加在可读白名单中的用户具有包的下载权限。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(747649)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1259",
            height: "668"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "区域2：白名单配置，在白名单中的用户将具有包的下载和查看权限，包的所有者和维护者会自动添加到包的白名单中。点击“新增用户”或“删除”按钮，可以在白名单配置中添加或者删除查看者用户，所有者和维护者用户禁止被删除。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(871709)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1920",
            height: "911"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "区域3：管理所有者，包的所有者具有包的下载，上传，下架和编辑包tag权限。支持对包所有者进行新增和删除，当包仅剩唯一一个所有者用户时，禁止被删除。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(769611)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1920",
            height: "911"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "上下架",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "上下架"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击“管理ohpm仓库三方包”按钮，进入仓库管理详情面板，展示所有已上传至ohpm-repo的三方包信息。上下架包含上传三方包、单个包下架、批量包下架和搜索三方包四个功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(808942)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1920",
        height: "911"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "区域1：上传三方包，点击“上传三方包”按钮，能够上传指定的包文件或选择本地三方包文件，将其上传至仓库中，页面效果如下图所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(795427)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1259",
            height: "668"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "区域2：下架，点击指定包右边的“下架”按钮，进行单个包下架操作，输入下架原因即可完成包的下架，页面效果如下图所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(89713)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1259",
            height: "668"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "区域3：批量下架，勾选包左边的待选框，点击“批量下架”按钮，能够批量下架已勾选的包，可以通过改变页面底部每页包含的数据值，批量下架更多的包。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(580359)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1259",
            height: "668"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "区域4：筛选，点击列表标题旁的漏斗图标，可以进行包数据的筛选。支持通过Name、Version、Publisher、Author和PublishTime字段筛选包数据。例如筛选出Name带有数字3，版本号大于等于2.0.0，发布人为accessToken1的包，数据筛选效果如下图所示："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Name：支持对包名进行模糊搜索。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Version：支持输入最小版本号和最大版本号，进行版本号区间搜索。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Publisher：支持对包发布者名称进行模糊搜索。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Author：支持对包作者名称进行模糊搜索。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "PublishTime：支持对包发布时间进行区间搜索。"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(620439)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1259",
            height: "668"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "编辑仓库",
      children: "编辑仓库"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击指定仓库的“编辑”图标按钮，进入仓库信息编辑界面，可以修改仓库的Name 、Uplink、可读策略、授权可读白名单、可写策略，授权可写白名单、发布策略和描述信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(324978)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1881",
        height: "851"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name：仓库的名称。当仓库发过包或者已添加授权可读白名单或可写白名单时，禁止修改仓库名。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Uplink：配置代理仓库地址。其中Uplink为下拉框选择，选项为仓库管理页面的", (0,jsx_runtime.jsx)(_components.a, {
          href: "#zh-cn_topic_0000001792256181_uplinks",
          children: "uplinks"
        }), "面板配置的Uplink仓库。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可读策略： 分为公开可读和授权可读。当一个仓库被设置为授权可读时，将出现授权可读名单配置项，系统管理员默认具有仓库读和写权限。当仓库设置为公开可读时，所有用户对仓库具有读权限，能够访问仓库中包的信息和下载包；当设置为授权可读时，仅授权可读白名单中用户拥有仓库的读权限。当仓库可读策略设置为授权可读时，可写策略默认选择授权可写，不可修改。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "授权可读名单：当可读策略选择授权可读时，将出现授权可读名单配置项，能够逐个添加仓库可读用户。授权可读白名单最多添加200个。支持搜索用户名逐个添加，也支持使用英文逗号分隔用户名批量添加。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可写策略：分为公开可写和授权可写。当一个仓库被设置为授权可写时，将出现授权可写名单配置项，仅在可写名单中的用户具有仓库的写权限，具有写权限默认具有读权限，系统管理员默认具有仓库读写权限。当仓库设置为公开可写时，所有用户对仓库具有写权限，能够对仓库中的包进行下载，上传，下架和编辑tag操作；当设置为授权可写时，仅授权可写白名单中用户拥有仓库的写权限。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "授权可写名单：当可写策略选择授权可写时，将出现授权可写名单配置项，能够逐个添加仓库可写用户。授权可写白名单最多添加200个。支持搜索用户名逐个添加，也支持使用英文逗号分隔用户名批量添加。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["发布策略：分为禁止同版本覆盖和支持同版本覆盖两种模式。在禁止同版本覆盖模式下，若尝试向仓库重复发布同一版本的包，系统会报错提示“该三方库已存在此版本”，确保版本唯一性。在支持同版本覆盖模式下，允许重复发布同版本包，新包将直接覆盖旧包，适用于需要持续更新的场景。用户可通过配置灵活选择适合的发布策略。", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "覆盖操作不可逆，请谨慎选择"
          })
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "删除仓库",
      children: "删除仓库"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击“删除”图标按钮将删除当前选中的仓库。当仓库下存在上架包时禁止删除仓库，当仅剩最后一个仓库时禁止被删除。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(464998)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1259",
        height: "668"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "新增仓库",
      children: "新增仓库"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点击“+”图标按钮将新增一个仓库，可以对仓库的Name、Uplink、可读策略、可写策略、发布策略和描述信息进行编辑。可读策略默认为公开可读，可写策略默认为公开可写，发布策略默认为禁止同版本覆盖。最多支持创建20个仓库。", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(925779)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1259",
        height: "668"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uplinks",
      children: "uplinks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "uplinks功能可以让当前仓库获取配置的uplink仓库的所有包，若从某个已配置uplink的仓库下载当前仓库中不存在的三方包时，则会通过uplink仓库下载该包，如果访问uplink仓库需要代理，请配置好所需代理信息，uplink页面如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(112598)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1896",
        height: "946"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击新增按钮，可以创建新的uplink仓库。一旦完成新增uplink仓库的设置，必须前往仓库管理 > 管理仓库 > 编辑页面进行应用，这样该功能才会生效，且ohpm-repo只允许同时配置一个uplink仓库。uplink仓库地址不建议配置为其他ohpm-repo的地址，避免出现仓库A配置uplink为仓库B，仓库B配置uplink为仓库A，导致循环查找问题。页面效果如下图所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(73375)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1896",
            height: "946"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击编辑，可以修改已配置的uplink仓库信息，页面效果如下图所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(474104)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1896",
            height: "946"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击删除，可以删除配置的uplink仓库，页面效果如下图所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(30836)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1896",
            height: "946"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "由于搭建的ohpm-repo私仓可能需要通过代理来访问已配置的uplink仓库，因此ohpm-repo提供了代理功能。点击配置代理，可以添加代理信息，页面效果如下图所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(38128)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HttpProxy、HttpsProxy和uplinks仓库地址有关，与搭建的代理服务器协议无关。若uplinks仓库地址是http协议，则选择HttpProxy配置代理；若uplinks仓库地址是https协议，则选择HttpsProxy配置代理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(309807)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1896",
            height: "946"
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
808942(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530751540-74fc0f95d99ca0d6cb9b5ce7f19b8c0e.png");

},
925779(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561831439-062231fb21ccdb76ea64d1e19a51db1a.png");

},
30836(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530911526-859a69cf54ea065edf3ef957e14b55ca.png");

},
38128(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
580359(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530751518-08271c2f257df606675a1809de9de76a.png");

},
795427(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530911500-0d7717e9c3182942fcd15ad1a4121f08.png");

},
871709(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561831417-032f381127a067f4966353f4b53ab26c.png");

},
73375(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561751441-f6a4691a9afa182acbd1893866870771.png");

},
423278(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561751477-eaaf7b7395dba47eb715bbf06e4dc6d6.png");

},
89713(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530911512-f5fdf990323b2d0c5f7182b46ded57c3.png");

},
620439(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530911534-4fafdc628c10f940787c303260720b72.png");

},
474104(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530751530-1031aceaf6824a501c9008c1171e4861.png");

},
309807(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561751465-83946c113d9a31876264cb74c6ca72c5.png");

},
464998(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561831451-9a6737ad44298740ac0591dd02052d9f.png");

},
324978(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561831461-6c89ec06a5913f049c2c15d4aa805b35.png");

},
760423(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530751504-a9c5d46a7157ebb4a6ea129e03a0f2a9.png");

},
112598(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530911490-932894826222381ca25bef35757d65bd.png");

},
747649(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561831429-25d6b6ed0ce4c264ecbfeb804e8363de.png");

},
769611(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561751453-74bd26c9512ef09a715bd010bca5850c.png");

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