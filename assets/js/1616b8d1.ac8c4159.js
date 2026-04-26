"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["245669"], {
745161(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_web_introduction_ide_ohpm_repo_operation_log_ide_ohpm_repo_operation_log_md_161_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-module-management-ide-ohpm-repo-ide-ohpm-web-introduction-ide-ohpm-repo-operation-log-ide-ohpm-repo-operation-log-md-161.json
var site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_web_introduction_ide_ohpm_repo_operation_log_ide_ohpm_repo_operation_log_md_161_namespaceObject = JSON.parse('{"id":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-ohpm-repo-operation-log/ide-ohpm-repo-operation-log","title":"操作日志","description":"操作日志界面显示用户通过ohpm-repo管理界面进行的所有操作，以及通过ohpm命令行工具执行publish，unpublish和dist-tags等相关命令所记录的日志。操作日志界面分为两个部分：第一部分为筛选条件，第二部分是展示符合筛选条件的数据。","source":"@site/docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-ohpm-repo-operation-log/ide-ohpm-repo-operation-log.md","sourceDirName":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-ohpm-repo-operation-log","slug":"/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-ohpm-repo-operation-log/","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-ohpm-repo-operation-log/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"操作日志","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-operation-log","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"组织管理","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-ohpm-organization/"},"next":{"title":"系统设置","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-ohpm-system-settings/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-ohpm-repo-operation-log/ide-ohpm-repo-operation-log.md


const frontMatter = {
	title: '操作日志',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-operation-log',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = '操作日志';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
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
        id: "操作日志",
        children: "操作日志"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "操作日志界面显示用户通过ohpm-repo管理界面进行的所有操作，以及通过ohpm命令行工具执行publish，unpublish和dist-tags等相关命令所记录的日志。操作日志界面分为两个部分：第一部分为筛选条件，第二部分是展示符合筛选条件的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(734515)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["操作日志的数据每隔一天会定时清除，默认保留100天内的操作日志数据，数据保留时间可通过config.yaml中配置项", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration#li38847353322",
        children: "operation_log_retention"
      }), "设定。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(486024)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1301",
        height: "668"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据筛选：操作日志的数据筛选类别有五类，分别为：用户类型，事件类型，操作类型，操作时间区间和操作对象的用户名。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户类型：分为系统管理员用户和普通用户，当选中普通用户时，只会显示普通用户的操作日志信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(459112)/* ["default"] */.A) + "",
            width: "1151",
            height: "615"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "事件类型：包括六种事件类型，包括用户管理，仓库管理，包权限管理，认证管理，组织管理和系统设置，通过选择事件类型进行日志的筛选。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "例如当事件类型选择用户管理中的新增用户时，操作日志界面仅显示事件类型为新增用户的日志信息。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(490621)/* ["default"] */.A) + "",
                title: "点击放大",
                width: "1920",
                height: "911"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "事件类型具体内容见下表：当选择一级事件类型时，将自动包含所有二级事件类型和三级事件类型；当选择二级事件类型时，自动包含所有三级事件类型。"
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "一级事件类型"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "二级事件类型"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "三级事件类型"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "用户管理"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "新增用户"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "-"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "删除用户"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "-"
                  }), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "修改用户角色"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "-"
                  }), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "重置用户密码"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "-"
                  }), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "仓库管理"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "管理仓库"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "新增仓库"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "删除仓库"
                  }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "更新代码仓"
                  }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "上架资源包"
                  }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "下架资源包"
                  }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "批量下架资源包"
                  }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "uplink"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "更新Uplink代理"
                  }), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "添加Uplink"
                  }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "修改Uplink"
                  }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "删除Uplink"
                  }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "tag"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "增加Tag"
                  }), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "更新Tag"
                  }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "删除Tag"
                  }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "权限管理"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "编辑包可见性"
                  }), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "新增包白名单用户"
                  }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "删除包白名单用户"
                  }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "包权限管理"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "新增包所有者"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "-"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "删除包所有者"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "-"
                  }), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "转移包所有者"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "-"
                  }), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "新增包维护者"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "-"
                  }), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "删除包维护者"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "-"
                  }), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "认证管理"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "证书认证"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "添加发布公钥"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "删除发布公钥"
                  }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "Access Token"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "生成Access Token"
                  }), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "删除Access Token"
                  }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "组织管理"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "组织"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "添加分组"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "修改分组"
                  }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "删除分组"
                  }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "组织成员"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "添加组成员"
                  }), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "删除组成员"
                  }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "组织管理员"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "添加组管理员"
                  }), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "删除组管理员"
                  }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "系统设置"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "更新oh-package.json5检查规则"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "-"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "重置系统密钥"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "-"
                  }), (0,jsx_runtime.jsx)(_components.td, {})]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "更新系统安全配置"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "-"
                  }), (0,jsx_runtime.jsx)(_components.td, {})]
                })]
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "操作结果：选择成功/失败进行筛选。如操作结果选择失败，操作日志页面结果如下："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(998926)/* ["default"] */.A) + "",
                title: "点击放大",
                width: "1920",
                height: "911"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "操作时间区间：选中操作时间的区间进行筛选。如区间时间选择在2025.8.4到2025.8.11，操作日志页面结果如下："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(368796)/* ["default"] */.A) + "",
                title: "点击放大",
                width: "1920",
                height: "911"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "操作对象用户名：输入操作对象用户名进行筛选。如输入用户名为user，操作日志页面结果如下："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(171948)/* ["default"] */.A) + "",
                title: "点击放大",
                width: "1920",
                height: "911"
              })
            }), "\n"]
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
490621(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530751268-0ffc4230dd845a3ab5e55f433e299241.png");

},
171948(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530751266-08d01604ab80c433cd2f0441650a7462.png");

},
459112(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561751211-ac05ed54d5419e020b4019653c45f511.png");

},
734515(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
998926(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530911256-c121be78fe78719a2b3441f71a43c91a.png");

},
486024(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561831177-e540304d47116311ec2c1a81fe576bde.png");

},
368796(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561751213-f56ccf1ce9887dc87dc43252568b4d75.png");

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