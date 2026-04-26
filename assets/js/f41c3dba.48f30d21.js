"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["928224"], {
34019(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_repo_log_ide_ohpm_repo_log_md_f41_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-module-management-ide-ohpm-repo-ide-ohpm-repo-log-ide-ohpm-repo-log-md-f41.json
var site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_repo_log_ide_ohpm_repo_log_md_f41_namespaceObject = JSON.parse('{"id":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-log/ide-ohpm-repo-log","title":"日志","description":"与任何web应用程序相同，ohpm-repo有一个内置的日志记录器，其定义了四种日志类型。","source":"@site/docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-log/ide-ohpm-repo-log.md","sourceDirName":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-log","slug":"/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-log/","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-log/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"日志","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-log","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"配置文件","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration/"},"next":{"title":"ohpm-repo help","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-help/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-log/ide-ohpm-repo-log.md


const frontMatter = {
	title: '日志',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-log',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = '日志';

const assets = {

};



const toc = [{
  "value": "访问日志 - access.log",
  "id": "访问日志---accesslog",
  "level": 2
}, {
  "value": "操作日志 - operate.log",
  "id": "操作日志---operatelog",
  "level": 2
}, {
  "value": "运行日志 - run.log",
  "id": "运行日志---runlog",
  "level": 2
}, {
  "value": "运行错误日志 - repoError.log",
  "id": "运行错误日志---repoerrorlog",
  "level": 2
}, {
  "value": "下载错误日志",
  "id": "下载错误日志",
  "level": 2
}, {
  "value": "日志存储路径",
  "id": "日志存储路径",
  "level": 2
}, {
  "value": "日志打印级别",
  "id": "日志打印级别",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
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
        id: "日志",
        children: "日志"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "与任何web应用程序相同，ohpm-repo有一个内置的日志记录器，其定义了四种日志类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "访问日志---accesslog",
      children: "访问日志 - access.log"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "访问日志中主要包含操作时间、服务器IP、操作源、操作结果以及请求接口或者请求静态资源，其文件保存个数最多为180个。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "操作日志---operatelog",
      children: "操作日志 - operate.log"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "操作日志中主要包含操作时间、日志级别、操作人id（userId）、终端IP（ip）、操作资源（resource）、操作方法名（event）以及操作结果（result），其文件保存个数最多为180个。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(283281)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1466",
        height: "99"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(840038)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "操作方法名(event)"
        })
      }), "： 当在ohpm-repo管理界面执行一系列操作时，会在operate.log文件生成一条条操作数据，操作方法名即表示当前操作涉及到的方法名字，例如login即表示登录操作，analyzePackage即表示上传包时对包的解析操作。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 常用操作方法说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "序号"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "generateAccessToken / deleteAccessToken"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生成 / 删除AccessToken"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "login / logout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "登入 / 登出"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "publish / unPublish/batchUnPublish"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上架资源包/ 下架资源包/批量下架资源包"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "addGroup / deleteGroup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加/删除组织"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "updateGroup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新组织"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "addMember/deleteMember"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加 / 删除组织成员"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "addAdminMember/deleteAdminMember"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加/删除组织管理员"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "addPublicKey / delPublicKeyById"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加 / 删除发布公钥"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "addRepo/updateRepo/deleteRepo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增仓库/更新仓库/删除仓库"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "analyzePackage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解析上传的包文件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uploadPackage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上传包文件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getPackageSizeLimit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取包的大小限制"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "addUplink / deleteUplink"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加 / 删除uplink"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "updateUplink"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新uplink"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "updateUplinkProxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新Uplink代理"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "addUser / delUserByUserId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加/删除用户"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "changePassWord"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "改变用户账户密码"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "resetPassWord"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重置用户账户密码"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "changeRole"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改用户角色(管理员和非管理员)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "register"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册账户"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "resetKey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重置系统密钥"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "addPackagePermissionOwner/deletePackagePermissionOwner/transferPackagePermissionOwner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增/删除/转移包所有者"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "addPackagePermissionMaintainer/deletePackagePermissionMaintainer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增/删除包维护者"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "addPackagePermissionVisitor/deletePackagePermissionVisitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增/删除包白名单用户"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "editPackageReadPolicy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编辑包可见性"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运行日志---runlog",
      children: "运行日志 - run.log"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行日志中主要包含操作时间、日志级别以及日志信息，其文件保存个数最多为30个。运行日志定义了日志级别：all，trace，debug，info，warn，error，fatal，mark和off。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(844267)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "890",
        height: "101"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运行错误日志---repoerrorlog",
      children: "运行错误日志 - repoError.log"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当ohpm-repo在运行过程中，所有run.log中生成的error日志都会打印到repoError.log中，是error日志的集合，日志打印级别与run.log日志保持一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "下载错误日志",
      children: "下载错误日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当从仓库中下载某个包失败时，仓库会生成一条错误日志记录在数据库中的downloadfailure 表中，当为ohpm-repo配置了sftp存储服务时，从任意一个sftp服务中下载失败时，都会生成一条错误日志并保存。每条日志都有handled标识，handled为0时表示已处理，handled为1时表示未处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "日志存储路径",
      children: "日志存储路径"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["日志存储的默认路径为./logs，相对路径基准为ohpm-repo部署根目录", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration#zh-cn_topic_0000001745376470_%E5%85%B3%E4%BA%8E-deploy_root",
        children: "deploy_root"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "日志打印级别",
      children: "日志打印级别"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在配置文件中可以设置访问、操作、运行日志的打印级别，日志将会只打印不低于设置级别的日志，日志级别由低到高为：all，trace，debug，info，warn，error，fatal，mark和off。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "loglevel_run: info\nloglevel_operate: info\nloglevel_access: info\n"
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
844267(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530751280-0af9a065f919190b7ec9a1e015cd075f.png");

},
840038(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
283281(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561751223-d3b5fa1153832e228d66b8bdf1b0cbf7.png");

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