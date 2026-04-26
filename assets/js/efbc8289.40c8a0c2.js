"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["441841"], {
277839(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_repo_faq_ide_ohpm_repo_faq_md_efb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-module-management-ide-ohpm-repo-ide-ohpm-repo-faq-ide-ohpm-repo-faq-md-efb.json
var site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_repo_faq_ide_ohpm_repo_faq_md_efb_namespaceObject = JSON.parse('{"id":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-faq/ide-ohpm-repo-faq","title":"常见问题FAQ","description":"ohpm-repo私仓工具获取与升级","source":"@site/docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-faq/ide-ohpm-repo-faq.md","sourceDirName":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-faq","slug":"/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-faq/","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-faq/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"常见问题FAQ","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-faq","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"安全配置指南","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration-guide/"},"next":{"title":"数据迁移","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-ohpm-repo-data-migration/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-faq/ide-ohpm-repo-faq.md


const frontMatter = {
	title: '常见问题FAQ',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-faq',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = '常见问题FAQ';

const assets = {

};



const toc = [{
  "value": "ohpm-repo私仓工具获取与升级",
  "id": "ohpm-repo私仓工具获取与升级",
  "level": 2
}, {
  "value": "ohpm-repo启动后如何修改配置文件，并使得修改后配置文件生效",
  "id": "ohpm-repo启动后如何修改配置文件并使得修改后配置文件生效",
  "level": 2
}, {
  "value": "ohpm-repo部署目录和ohpm-repo解压目录说明",
  "id": "ohpm-repo部署目录和ohpm-repo解压目录说明",
  "level": 2
}, {
  "value": "ohpm-repo 的权限管理",
  "id": "ohpm-repo-的权限管理",
  "level": 2
}, {
  "value": "账户权限：系统管理员和系统普通用户",
  "id": "账户权限系统管理员和系统普通用户",
  "level": 3
}, {
  "value": "组织权限：组织成员和组织管理员",
  "id": "组织权限组织成员和组织管理员",
  "level": 3
}, {
  "value": "上传包和卸载包权限管理",
  "id": "上传包和卸载包权限管理",
  "level": 3
}, {
  "value": "ohpm-repo 的元数据与三方包数据管理",
  "id": "ohpm-repo-的元数据与三方包数据管理",
  "level": 2
}, {
  "value": "元数据与三方包数据介绍",
  "id": "元数据与三方包数据介绍",
  "level": 3
}, {
  "value": "元数据和三方包数据存储方式介绍",
  "id": "元数据和三方包数据存储方式介绍",
  "level": 3
}, {
  "value": "ohpm-repo认证方式",
  "id": "ohpm-repo认证方式",
  "level": 2
}, {
  "value": "认证方式说明",
  "id": "认证方式说明",
  "level": 3
}, {
  "value": "认证失败FAQ",
  "id": "认证失败faq",
  "level": 3
}, {
  "value": "使用证书认证执行publish/unpublish/dist-tags等命令失败",
  "id": "使用证书认证执行publishunpublishdist-tags等命令失败",
  "level": 3
}, {
  "value": "使用证书认证在git-bash终端下执行ohpm publish XX.har发包到ohpm-repo中报错：The content of private key in the key_path error",
  "id": "使用证书认证在git-bash终端下执行ohpm-publish-xxhar发包到ohpm-repo中报错the-content-of-private-key-in-the-key_path-error",
  "level": 3
}, {
  "value": "使用AccessToken认证，执行publish/unpublish/dist-tags等命令失败",
  "id": "使用accesstoken认证执行publishunpublishdist-tags等命令失败",
  "level": 3
}, {
  "value": "应用内hsp包如何发布到ohpm-repo",
  "id": "应用内hsp包如何发布到ohpm-repo",
  "level": 2
}, {
  "value": "执行ohpm-repo命令报错",
  "id": "执行ohpm-repo命令报错",
  "level": 2
}, {
  "value": "在执行ohpm-repo install或者ohpm-repo start的时候报错：server install failed: YAMLException: bad indentation of a mapping entry",
  "id": "在执行ohpm-repo-install或者ohpm-repo-start的时候报错server-install-failed-yamlexception-bad-indentation-of-a-mapping-entry",
  "level": 3
}, {
  "value": "执行命令ohpm-repo &lt;command&gt;，报错ohpm-repo不存在或者&lt;command&gt;命令不存在。",
  "id": "执行命令ohpm-repo-command报错ohpm-repo不存在或者command命令不存在",
  "level": 3
}, {
  "value": "ohpm-repo成功启动后，根据配置文件中的listen值访问ohpm-repo私仓管理界面，界面不显示信息或者无法打开页面",
  "id": "ohpm-repo成功启动后根据配置文件中的listen值访问ohpm-repo私仓管理界面界面不显示信息或者无法打开页面",
  "level": 3
}, {
  "value": "机器A部署ohpm-repo私仓服务，在机器B上通过A的域名+端口访问已部署的ohpm-repo私仓服务，打开包的描述页出错",
  "id": "机器a部署ohpm-repo私仓服务在机器b上通过a的域名端口访问已部署的ohpm-repo私仓服务打开包的描述页出错",
  "level": 3
}, {
  "value": "执行ohpm-repo install时报错：fail to initialize encryption component: Error: invalid crypto component.",
  "id": "执行ohpm-repo-install时报错fail-to-initialize-encryption-component-error-invalid-crypto-component",
  "level": 3
}, {
  "value": "执行ohpm publish XX.har发包到ohpm-repo私仓中报错",
  "id": "执行ohpm-publish-xxhar发包到ohpm-repo私仓中报错",
  "level": 2
}, {
  "value": "报错：connect ECONNREFUSED ::1:8089",
  "id": "报错connect-econnrefused-18089",
  "level": 3
}, {
  "value": "报错：The content of private key in the key_path error.",
  "id": "报错the-content-of-private-key-in-the-key_path-error",
  "level": 3
}, {
  "value": "报错：HttpCode 400 Group does not exist!",
  "id": "报错httpcode-400-group-does-not-exist",
  "level": 3
}, {
  "value": "报错：HttpCode 400 You are not a developer of the group!",
  "id": "报错httpcode-400-you-are-not-a-developer-of-the-group",
  "level": 3
}, {
  "value": "报错：ohpm ERROR: HttpCode 404 Not Found",
  "id": "报错ohpm-error-httpcode-404-not-found",
  "level": 3
}, {
  "value": "报错：Same ohpm package is exists!",
  "id": "报错same-ohpm-package-is-exists",
  "level": 3
}, {
  "value": "报错：Request Entity Too Large",
  "id": "报错request-entity-too-large",
  "level": 3
}, {
  "value": "报错：The packageType is no equals the exists packageType!",
  "id": "报错the-packagetype-is-no-equals-the-exists-packagetype",
  "level": 3
}, {
  "value": "执行ohpm install XX.har从ohpm-repo私仓中下载包报错",
  "id": "执行ohpm-install-xxhar从ohpm-repo私仓中下载包报错",
  "level": 2
}, {
  "value": "ohpm-repo配置uplink后，执行install命令下载uplink所配置仓库中的包失败",
  "id": "ohpm-repo配置uplink后执行install命令下载uplink所配置仓库中的包失败",
  "level": 3
}, {
  "value": "访问ohpm-repo私仓管理界面报错",
  "id": "访问ohpm-repo私仓管理界面报错",
  "level": 2
}, {
  "value": "访问ohpm-repo私仓管理界面中页面功能，报错：非法请求",
  "id": "访问ohpm-repo私仓管理界面中页面功能报错非法请求",
  "level": 3
}, {
  "value": "访问ohpm-repo私仓管理页面，报错“加密组件无效”。",
  "id": "访问ohpm-repo私仓管理页面报错加密组件无效",
  "level": 3
}, {
  "value": "访问ohpm-repo私仓管理界面，报错：“系统配置错误，请联系管理员”",
  "id": "访问ohpm-repo私仓管理界面报错系统配置错误请联系管理员",
  "level": 3
}, {
  "value": "配置ohpm-repo私仓工具环境变量",
  "id": "配置ohpm-repo私仓工具环境变量",
  "level": 2
}, {
  "value": "<strong><strong>Windows环境</strong></strong>",
  "id": "windows环境",
  "level": 3
}, {
  "value": "<strong><strong>Linux和macOS环境</strong></strong>",
  "id": "linux和macos环境",
  "level": 3
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
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "常见问题faq",
        children: "常见问题FAQ"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohpm-repo私仓工具获取与升级",
      children: "ohpm-repo私仓工具获取与升级"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/download/ohpm-repo",
            children: "下载中心"
          }), "上获取最新ohpm-repo工具包。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(431350)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1126",
            height: "376"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ohpm-repo升级指导：在升级之前请务必进行好数据的备份，具体的升级指导文档见：", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-upgrade",
            children: "ohpm-repo版本升级"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohpm-repo启动后如何修改配置文件并使得修改后配置文件生效",
      children: "ohpm-repo启动后如何修改配置文件，并使得修改后配置文件生效"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "版本1.0.1"
          })
        }), "：停止当前ohpm-repo服务，修改ohpm-repo压缩包解压根目录中conf目录中的配置文件，然后重新执行start命令。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "版本1.1.0"
          })
        }), "：停止当前ohpm-repo服务，修改部署根目录中conf目录下的配置文件，然后重新执行start命令。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "版本2.X.X"
          })
        }), "：停止当前ohpm-repo服务，根据前一次ohpm-repo启动是否指定配置文件进行区别处理：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "上一次执行install命令指定配置文件：找到指定的配置文件进行修改，然后重新执行install，指定修改后配置文件，再执行start命令启动ohpm-repo。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "上一次执行install命令未指定配置文件：未指定配置文件即默认使用压缩包解压目录中conf下的配置文件，则修改默认使用的配置文件，然后不指定配置文件执行install，再执行start启动ohpm-repo。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohpm-repo部署目录和ohpm-repo解压目录说明",
      children: "ohpm-repo部署目录和ohpm-repo解压目录说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ohpm-repo解压目录"
            })
          }), "：<binary_root>，ohpm-repo安装包解压后所在的根目录，存放的是ohpm-repo压缩包解压后的内容。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ohpm-repo部署目录"
            })
          }), "：<deploy_root>，ohpm-repo运行时产生数据的存储位置，包括配置文件，日志文件，加密组件等信息。ohpm-repo部署目录在不同版本有不同的配置方法。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ohpm-repo 1.0.1版本：不支持自定义ohpm-repo部署目录，仅支持使用默认路径。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ohpm-repo 1.1.0版本：在使用ohpm-repo start或ohpm-repo deploy命令时，支持通过配置--deploy_root参数来指定ohpm-repo的部署目录，不指定使用默认路径。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["ohpm-repo 2.X.X版本：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "方法一：在配置文件中配置参数--deploy_root可指定ohpm-repo的部署目录，执行ohpm-repo install命令生效。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "方法二：使用ohpm-repo deploy命令部署多实例，支持通过配置--deploy_root参数来指定ohpm-repo的部署目录；不指定使用默认路径。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(174191)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ohpm-repo部署目录默认路径如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Windows系统默认路径"
              })
            }), "：~/AppData/Roaming/Huawei/ohpm-repo"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Linux/macOS系统默认路径"
              })
            }), ": ~/ohpm-repo"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ohpm-repo部署目录和ohpm-repo解压目录不要放在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "同一目录"
            })
          }), "中。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohpm-repo-的权限管理",
      children: "ohpm-repo 的权限管理"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "账户权限系统管理员和系统普通用户",
      children: "账户权限：系统管理员和系统普通用户"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "账户的注册"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ohpm-repo账户有两种类型：用户类型和管理员类型。ohpm-repo初次启动默认有一个管理员账户：账户名：admin，密码：12345Qq!。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过ohpm-repo管理界面的注册按钮新增用户类型："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(94994)/* ["default"] */.A) + "",
                title: "点击放大",
                width: "1866",
                height: "630"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "登录任一管理员账户，能够在ohpm-repo的用户管理界面新增用户并管理其他用户（删除用户，变更用户类型，重置密码）："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(707991)/* ["default"] */.A) + "",
                title: "点击放大",
                width: "1461",
                height: "796"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "账户的权限说明"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["系统管理员：允许有多个系统管理员。\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "用户管理：创建新用户，编辑用户类型，修改其他用户类型和重置其他用户密码。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "仓库管理：编辑仓库，管理三方包（可以通过ohpm-repo管理界面直接发包），编辑uplink仓库和配置代理信息。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "系统设置：添加oh-package.json5检查规则，重置系统密钥和添加支持匿名化配置。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "组织管理：查看所有组织信息，编辑或删除所管理组织，能够编辑所有组织的管理员。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "操作日志：能够记录用户所有操作记录。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "认证管理：支持公私钥认证和AccessToken认证。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "包权限管理：支持对单个三方包配置精细化的权限控制，包含包的所有者、包的维护者和包的查看者。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["系统普通用户：允许有多个系统普通用户。\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "组织管理：查看所在组织列表，编辑或删除所管理组织信息。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "认证管理：支持公私钥认证和AccessToken认证。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "包权限管理：支持对单个三方包配置精细化的权限控制，包含包的所有者、包的维护者和包的查看者。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "组织权限组织成员和组织管理员",
      children: "组织权限：组织成员和组织管理员"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "组织创建与组织权限的编辑"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "组织的新增和删除：登录系统管理员账户，在组织管理界面，通过新增按钮创建组织，当前系统管理员默认成为该组织的管理员；通过删除按钮删除组织。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(317485)/* ["default"] */.A) + "",
                title: "点击放大",
                width: "1461",
                height: "796"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "组织普通成员的添加和删除：登录组织管理员的账户，在组织管理界面，选中需要添加用户的组织的详情按钮，然后在成员界面通过新增按钮添加组织成员，通过删除按钮删除组织成员。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(973464)/* ["default"] */.A) + "",
                title: "点击放大",
                width: "1461",
                height: "796"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "组织管理员的添加和删除：登录系统管理员账户，在组织管理界面，选中需要添加用户的组织的编辑组织管理员按钮，然后在编辑组织管理员界面通过新增组织管理员按钮添加组织管理员，通过删除按钮删除组织管理员。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(435413)/* ["default"] */.A) + "",
                title: "点击放大",
                width: "1461",
                height: "796"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "组织的权限说明"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["组织用户：允许有多个组织用户。\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "上传包：能够上传带有该组织的三方包"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "下架包：能够下架成员自己上传的三方包"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["组织管理员：允许有多个组织管理员。\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "上传包：能够上传带有该组织的三方包"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "下架包：能够下架组织下所有成员上传的包"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "组织编辑：编辑所属组织，删除与组织管理员权限变更"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "组织成员编辑：管理所属组织成员的添加与删除"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "上传包和卸载包权限管理",
      children: "上传包和卸载包权限管理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "三方包可以分为有组织的包和没有组织的包两类，上传和下架包可以通过ohpm-repo和ohpm命令行工具两种方式操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过ohpm-repo管理界面中仓库管理上传和下架包：只有系统管理员才有此权限。", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "有组织包管理"
          })
        }), "：系统管理员可对所在组织的全部包执行上架与下架操作；", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "无组织包管理"
          })
        }), "：系统管理员可上架所有无组织包（注：无组织包的所有版本仅限单一用户上传），并拥有下架全部无组织包的权限。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过ohpm命令行工具上传和下架包：配置.ohpmrc文件时，无论采用公私钥认证还是AccessToken认证，认证信息配置会标识唯一的用户信息，对于带组织的包，能够上传和下架用户所属组织的所有包；对于无组织的包，能够上传和下架所有的包。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohpm-repo-的元数据与三方包数据管理",
      children: "ohpm-repo 的元数据与三方包数据管理"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "元数据与三方包数据介绍",
      children: "元数据与三方包数据介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohpm-repo的数据包括两部分："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "元数据：ohpm-repo运行过程中生成的用户数据和上传包后包的描述数据，在配置文件中，通过在配置文件中db选项配置存储信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "三方包数据：ohpm-repo运行后，通过ohpm-repo管理界面和ohpm命令行工具发布三方包到ohpm-repo中后，三方包的包文件数据，通过在配置文件中store选项配置存储信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "元数据和三方包数据存储方式介绍",
      children: "元数据和三方包数据存储方式介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "元数据：可以存放在本地文件（fileDb）和mysql数据库（mysql）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "三方包数据：可以存放在本地文件（file storage）,sftp服务器（sftp storage）和自定义插件存储（custom storage，包括各种云存储）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "元数据和三方包数据的存储方法不能够随意搭配，匹配规则和支持的ohpm-repo版本信息见下图："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(26619)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "971",
            height: "166"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "存储方式的变更：如果元数据和包数据的存储位置需要改变，可以通过数据迁移指导进行完成。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohpm-repo认证方式",
      children: "ohpm-repo认证方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohpm在执行publish，unpublish和dist-tags等需要修改ohpm-repo数据库内容命令时，需要获取读写权限才能够操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从ohpm-repo5.0.5版本开始，如果ohpm-repo配置不支持匿名访问，ohpm在执行install，info和update命令时需要通过AccessToken认证或者自定义AccessToken认证方法，正确配置读写/只读AccessToken信息获取读权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "认证方式说明",
      children: "认证方式说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "****证书认证：****通过嵌入加密ssh证书进行身份验证，需要输入密码，获得读写权限。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "****AccessToken认证（对接数据库中用户数据）：****AccessToken是ohpm-repo 2.1.0版本新引入的认证机制（需配套使用1.6.0及以上版本的ohpm命令行工具），用户通过ohpm-repo界面生成Token，并将其配置至ohpm客户端配置文件中。在与ohpm-repo交互时，客户端会自动附带Token进行身份验证，实现免密认证。配置只读AccessToken获得读权限，配置读写AccessToken获得读写权限。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["****自定义AccessToken认证（对接自定义的用户数据）：****AccessToken是ohpm-repo 2.3.0版本新引入的认证机制（需配套使用1.8.0及以上版本的ohpm命令行工具），如果开发者不想把用户的数据存储在所配置的db存储路径中，可以", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-custom-auth-plugin",
          children: "自定义认证插件"
        }), "，对接自定义的用户数据。AccessToken的有效性由自定义的用户数据认证。配置只读AccessToken获得读权限，配置读写AccessToken获得读写权限。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "认证失败faq",
      children: "认证失败FAQ"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用证书认证执行publishunpublishdist-tags等命令失败",
      children: "使用证书认证执行publish/unpublish/dist-tags等命令失败"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "现象"
          })
        }), "：报错信息为：ERROR: Publish failed, detail: The \"key_path\" is empty - configure \"key_path\" in the .ohpmrc file."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "原因分析"
          })
        }), "：没有正确配置证书认证参数。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "解决方法"
          })
        }), "：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "确保通过ssh-keygen工具生成的公私钥文件是成对的。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "确保在ohpm-repo私仓管理界面配置公钥信息，在ohpm的配置文件.ohpmrc配置publish_id，publish_registry和key_path等参数。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用证书认证在git-bash终端下执行ohpm-publish-xxhar发包到ohpm-repo中报错the-content-of-private-key-in-the-key_path-error",
      children: "使用证书认证在git-bash终端下执行ohpm publish XX.har发包到ohpm-repo中报错：The content of private key in the key_path error"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "现象"
            })
          }), "：在git-bash终端下运行ohpm publish命令出现 “The content of private key in the key_path error”错误，报错截图为："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(657666)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "709",
            height: "519"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "原因分析"
            })
          }), "：使用ohpm publish命令上传包时，此时如果使用ssh证书密码认证，程序需要通过TTY流读取用户输入的密码，git安装的版本过低其携带的git-bash会导致TTY流丢失，从而出现该错误。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "解决方法"
            })
          }), "："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "方法一：从git官网下载安装最新版本git，使用最新版本携带的git-bash终端进行操作。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "方法二：在当前git安装目录下的etc目录中新增git-bash.config文件，git-bash.config文件里面添加一行MSYS=enable_pcon 配置。重新打开git-bash终端运行ohpm publish命令即可。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用accesstoken认证执行publishunpublishdist-tags等命令失败",
      children: "使用AccessToken认证，执行publish/unpublish/dist-tags等命令失败"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "现象"
          })
        }), "：报错信息为ERROR: Publish failed, detail: The \"key_path\" is empty - configure \"key_path\" in the .ohpmrc file."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "原因分析"
          })
        }), "：没有正确配置AccessToken或者当前工具版本不支持该功能。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "解决方法"
          })
        }), "：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "升级工具版本：从ohpm-repo2.1.0和ohpm 1.6.0版本起，开始支持AccessToken功能，确保ohpm-repo和ohpm升级到对应的版本。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["在ohpm配置文件.ohpmrc中配置AccessToken错误，请遵循如下步骤完成配置：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "在ohpm客户端的配置文件.ohpmrc中新增一行//<ip>:<port>/repos/ohpm/:_auth=<token>"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "**//<ip>:<port>/repos/ohpm/**是客户端publish_registry去除协议名的部分url,<token>是生成的token。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "使用ohpm客户端执行publish等命令。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用内hsp包如何发布到ohpm-repo",
      children: "应用内hsp包如何发布到ohpm-repo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果需要发布应用内hsp包到ohpm-repo，需要确保安装指定版本的软件：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "ohpm-cli命令行工具"
              })
            }), "：1.3.0版本开始支持。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "DevEco Studio"
              })
            }), "：4.1.0版本开始支持。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "ohpm-repo私仓"
              })
            }), "： 1.1.0版本开始支持。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用内hsp包不能直接发布在ohpm-repo，需要获得.tgz格式的包文件，再上传到ohpm-repo。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["有两种获得.tgz的方法：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["当使用DevEco Studio软件时，点击release发布，可获得.tgz包，具体步骤请参考：", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ide-project/ide-module-management/ide-creating-har-api9/ide-hsp",
                children: "开发动态共享包"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果已经获得了一个包的.hsp文件和.har文件，可在两个文件所在的目录中执行tar命令生成.tgz包文件："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 打包 libhsp.har 和 libhsp.hsp 文件，生成 libhsp.tgz文件\ntar -czvf libhsp.tgz libhsp.har libhsp.hsp\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "执行ohpm-repo命令报错",
      children: "执行ohpm-repo命令报错"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在执行ohpm-repo-install或者ohpm-repo-start的时候报错server-install-failed-yamlexception-bad-indentation-of-a-mapping-entry",
      children: "在执行ohpm-repo install或者ohpm-repo start的时候报错：server install failed: YAMLException: bad indentation of a mapping entry"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(212095)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1088",
        height: "195"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohpm-repo的配置文件config.yaml中配置缩进格式不对，并且在报错信息中会提示出错误的位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "执行命令ohpm-repo-command报错ohpm-repo不存在或者command命令不存在",
      children: "执行命令ohpm-repo <command>，报错ohpm-repo不存在或者<command>命令不存在。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "报错ohpm-repo不存在"
          })
        }), "：ohpm-repo工具包解压目录中bin目录的路径没有配置到系统环境变量path中，需要手动添加", (0,jsx_runtime.jsx)(_components.a, {
          href: "#section24117279211",
          children: "系统环境变量"
        }), "，或者进入bin目录，在命令前面加上 ./，即执行命令./ohpm-repo <command>方式使命令生效。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "报错<command>命令不存在"
          })
        }), "：查询当前ohpm-repo版本是否是2.X.X，部分命令2.0.0版本之后才存在，例如install和remove_instance。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ohpm-repo成功启动后根据配置文件中的listen值访问ohpm-repo私仓管理界面界面不显示信息或者无法打开页面",
      children: "ohpm-repo成功启动后，根据配置文件中的listen值访问ohpm-repo私仓管理界面，界面不显示信息或者无法打开页面"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "可能性一"
          })
        }), "：浏览器和ohpm-repo不兼容导致不显示内容，当ohpm-repo成功启动后，打开ohpm-repo管理页面并不显示内容，这可能是因为当前用户使用的浏览器与ohpm-repo不兼容，请下载最新版本的浏览器，重新输入listen值进行访问。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "可能性二"
          })
        }), "：服务未启动，执行命令ohpm-repo install和ohpm-repo start，启动ohpm-repo私仓服务。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "可能性三"
          })
        }), "：ohpm-repo私仓管理界面访问地址不正确，请在浏览器中输入ohpm-repo配置文件config.yaml中配置的listen值。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "机器a部署ohpm-repo私仓服务在机器b上通过a的域名端口访问已部署的ohpm-repo私仓服务打开包的描述页出错",
      children: "机器A部署ohpm-repo私仓服务，在机器B上通过A的域名+端口访问已部署的ohpm-repo私仓服务，打开包的描述页出错"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "现象"
            })
          }), "：报错信息如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(435902)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1136",
            height: "571"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "原因分析"
            })
          }), "：部署ohpm-repo的机器没有配置server，使用的是默认的server，host为localhost，在其他机器中不能访问。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "解决方法"
            })
          }), "：修改部署ohpm-repo机器A的配置文件，添加store.config.server的配置。建议手动修改host为本机的ip/域名，例如listen为0.0.0.0:8088，故server需配置为", (0,jsx_runtime.jsx)(_components.code, {
            children: "http://<本机ip/域名>:8088"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "执行ohpm-repo-install时报错fail-to-initialize-encryption-component-error-invalid-crypto-component",
      children: "执行ohpm-repo install时报错：fail to initialize encryption component: Error: invalid crypto component."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "现象"
            })
          }), "：报错信息如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(476309)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1417",
            height: "51"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "原因分析"
            })
          }), "：在ohpm-repo私仓部署根目录deploy_root中，加密组件meta文件受到损坏，处于失效状态。ohpm-repo私仓中，uplink的代理地址信息和证书认证的公钥信息均通过meta加密组件进行加密存储。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "解决方法"
            })
          }), "："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果是版本升级导致的问题，请找回上一个版本中meta文件，替换当前版本的meta文件。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["其他原因导致meta文件损坏，需要执行如下步骤：\n", (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "清空数据库中表publickey和uplinkproxy中的内容（操作数据库前请提前备份，避免误删数据影响开发）。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "删除受损的meta文件。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "重新执行ohpm-repo install命令，生成新的meta文件。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "在ohpm-repo管理界面的仓库管理处，重新配置uplink的代理信息。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "在ohpm-repo管理界面的认证管理处，重新配置证书认证的公钥数据。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "执行ohpm-publish-xxhar发包到ohpm-repo私仓中报错",
      children: "执行ohpm publish XX.har发包到ohpm-repo私仓中报错"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "报错connect-econnrefused-18089",
      children: "报错：connect ECONNREFUSED ::1:8089"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "现象"
            })
          }), "： 配置文件中store.config.server为", (0,jsx_runtime.jsx)(_components.code, {
            children: "http://Localhost:8089，其host为localhost，ohpm执行publish命令"
          }), "，命令行报如下错误"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ohpm ERROR request to http://Localhost:8089/repos/ohpm/Login failed, reason: connect ECONNREFUSED ::1:8089\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "原因："
            })
          }), " 通过报错信息最后的listen值::1:8089可知：localhost没有被正确解析为127.0.0.1，而是被解析为::1，这是因为iPv6协议优先级大于iPv4协议，故localhost解析为 ::1 (127.0.0.1 ipv6的形式)。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "解决方法"
            })
          }), "："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "方法一：修改iPv4的解析优先级，使其大于iPv6的优先级。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "方法二：把server中的localhost修改为127.0.0.1。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "报错the-content-of-private-key-in-the-key_path-error",
      children: "报错：The content of private key in the key_path error."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "现象"
            })
          }), "：ohpm执行publish命令，命令行报错信息为："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "The content of private key in the key_path error.\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "解决方法"
            })
          }), "：输入的密码错误，请重新输入或重新配置密钥。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "报错httpcode-400-group-does-not-exist",
      children: "报错：HttpCode 400 Group does not exist!"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "现象"
            })
          }), "：ohpm执行publish命令，命令行报错信息为"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HttpCode 400 Group does not exist!"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "解决方法"
            })
          }), "：有一些三方包包含组织名，只有发布包的用户在该组织下才具有发包的能力。报错信息表明三方包具有组织名，但组织未被创建。在ohpm中包的命名格式为：@<group>/<package_name>，其中<group>为组织名，打开ohpm-repo管理界面，添加组织即可成功发布包。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "报错httpcode-400-you-are-not-a-developer-of-the-group",
      children: "报错：HttpCode 400 You are not a developer of the group!"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "现象"
            })
          }), "：ohpm执行publish命令，命令行报错信息为："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "HttpCode 400 You are not a developer of the group!\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "解决方法"
            })
          }), "：有一些三方包包含组织名，只有发布包的用户在该组织下才具有发包的能力。报错信息表明已经有管理员账户添加了该包组织，但是当前账户没有在该组织的成员里面。在ohpm中包的命名格式为@<group>/<package_name>，其中<group>为组织名，找到创建<group>组织的负责人账户，然后负责人账户登录ohpm-repo管理界面，进入组织的详情里，添加需要发包的账户为组织的成员，成员即可发布具有对应组织名的包。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(900185)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1461",
            height: "796"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "报错ohpm-error-httpcode-404-not-found",
      children: "报错：ohpm ERROR: HttpCode 404 Not Found"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "现象"
            })
          }), "：ohpm执行publish命令，命令行报错信息如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ohpm ERROR: HttpCode 404 Not Found\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "解决方法"
            })
          }), "：ohpm配置文件中的配置项publish_registry配置错误，未配置端口或路径不全，正确的配置例如："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "publish_registry = http://localhost:8089/repos/ohpm\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "报错same-ohpm-package-is-exists",
      children: "报错：Same ohpm package is exists!"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "现象"
            })
          }), "：ohpm执行publish命令，命令行报错信息为：Same ohpm package is exists!"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(154753)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "760",
            height: "75"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "原因分析"
            })
          }), "：对没有组织三方库进行升级时，只能由原来发包用户升级，不能变更其他用户升级。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "解决方法"
            })
          }), "：使用原来发包用户可以继续升级上传，不能变更用户对已经上传的包升级；如果需要支持不同用户升级上传包，包名必须带有组织名。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "报错request-entity-too-large",
      children: "报错：Request Entity Too Large"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "现象"
          })
        }), "：ohpm执行publish命令，命令行报错信息为：Request Entity Too Large。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "原因分析"
          })
        }), "：当使用nginx作为反向代理服务器时，发送过大的包，超过了nginx配置中设置的client_max_body_size的限制。默认情况下，nginx设置此值为1MB。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "解决方法"
          })
        }), "：修改nginx中参数client_max_body_size的配置，设置一个与上架包相匹配的大小。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "报错the-packagetype-is-no-equals-the-exists-packagetype",
      children: "报错：The packageType is no equals the exists packageType!"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "现象"
          })
        }), "：ohpm执行publish命令，命令行报错信息为：The packageType is no equals the exists packageType!"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "原因分析"
          })
        }), "：当前上传包的包是一个har包，仓库中已经存在同名的hsp包，har包和hsp包不能够同名。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "解决方法"
          })
        }), "：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "方法一：修改需要上传包的名称，避免与已经上传的hsp包同名；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "方法二：下架已经上传的所有同名hsp包，然后再上传同名的har包（下架包后，再次上传同名的第三方包会受限并锁定一段时间，以防止滥用。您可以通过在config.yaml文件中设置upload_lock_hour参数来调整这个锁定期的时长）。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "执行ohpm-install-xxhar从ohpm-repo私仓中下载包报错",
      children: "执行ohpm install XX.har从ohpm-repo私仓中下载包报错"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ohpm-repo配置uplink后执行install命令下载uplink所配置仓库中的包失败",
      children: "ohpm-repo配置uplink后，执行install命令下载uplink所配置仓库中的包失败"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当添加了uplink的时候，首先确认是否在管理仓库的地方，选用了新增的uplink，下图表示新增的uplink没有被选中，uplink处为空："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(582808)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1920",
            height: "911"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果新增的uplink中存在所需的三方包，但是下载不下来，可能是需要配置uplink的代理信息，配置位置如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(270062)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1920",
            height: "911"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "访问ohpm-repo私仓管理界面报错",
      children: "访问ohpm-repo私仓管理界面报错"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "访问ohpm-repo私仓管理界面中页面功能报错非法请求",
      children: "访问ohpm-repo私仓管理界面中页面功能，报错：非法请求"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "现象"
            })
          }), "：访问ohpm-repo私仓管理界面的页面功能，报错“非法请求”。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(63666)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1253",
            height: "601"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "原因分析"
            })
          }), "：在ohpm-repo私仓5.0.2版本中，新增接口防重放攻击机制，该机制将校验ohpm-repo私仓所有涉及修改数据请求中的时间戳。若请求携带的时间戳与服务器当前时间相差超过1分钟（超前或滞后），系统将拒绝该请求，并返回“非法请求”错误。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "解决方法"
            })
          }), "：为确保系统正常运行，请保持服务器与客户端浏览器时间同步。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "访问ohpm-repo私仓管理页面报错加密组件无效",
      children: "访问ohpm-repo私仓管理页面，报错“加密组件无效”。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "现象"
            })
          }), "：打开ohpm-repo私仓管理界面，访问仓库管理页面中uplink代理配置页面，或访问认证管理页面中证书认证配置页面，报错“加密组件无效”，且已经配置的信息被清空。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(775006)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1256",
            height: "632"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(876038)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1461",
            height: "796"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "原因"
            })
          }), "：uplink代理的地址信息和证书认证的公钥信息存储均需要加密，加密组件为ohpm-repo私仓部署根目录deploy_root中的meta文件。如果加密时的meta文件和解密时的meta文件不一致，会导致解密数据失败。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "解决方法"
            })
          }), "："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果是版本升级导致的问题，请找回上一个版本中meta文件，替换当前版本的meta文件，保证加密组件的一致性。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["其他原因导致使用meta文件解密失败，需要执行如下步骤：\n", (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "清空数据库中表publickey和uplinkproxy中的内容（操作数据库前请提前备份，避免误删数据影响开发）。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "删除解密失败的meta文件。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "重新执行ohpm-repo install命令，生成新的meta文件。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "在ohpm-repo管理界面的仓库管理处，重新配置uplink的代理信息。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "在ohpm-repo管理界面的认证管理处，重新配置证书认证的公钥数据。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "访问ohpm-repo私仓管理界面报错系统配置错误请联系管理员",
      children: "访问ohpm-repo私仓管理界面，报错：“系统配置错误，请联系管理员”"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "现象"
            })
          }), "：访问ohpm-repo私仓管理界面，在ohpm-repo管理界面报错“非法请求”，在ohpm-repo运行日志报错：“verify reverse proxy usage: set \"use_reverse_proxy\" to false in config.yaml if not used, or refresh \"x-forwarded-for\" in Nginx if it is.”。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(233882)/* ["default"] */.A) + "",
            width: "320",
            height: "95"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(945235)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1718",
            height: "32"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "原因分析"
            })
          }), "：在ohpm-repo私仓5.0.7版本中，配置文件新增配置项", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration#section1074004784011",
            children: "use_reverse_proxy"
          }), "，用于判断是否已使用反向代理。如果配置use_reverse_proxy值为true，但未使用反向代理或者在配置反向代理时未刷新x-forwarded-for值，将导致从请求头获取到x-forwarded-for值为空，报此错误。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "解决方法"
            })
          }), "：只有已使用反向代理，才能够将配置项use_reverse_proxy置为true，且需要在反向代理配置时刷新x-forwarded-for值（如果存在多级代理，只需要在最外层代理配置），配置命令为：“proxy_set_header x-forwarded-for $remote_addr”。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置ohpm-repo私仓工具环境变量",
      children: "配置ohpm-repo私仓工具环境变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "windows环境",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Windows环境"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在任务栏搜索框或开始菜单中，搜索“环境变量”，选择“", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "编辑系统环境变量"
            })
          }), "”。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在弹出的“系统属性”窗口中，点击右下角的“", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "环境变量"
            })
          }), "”按钮。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在弹出的“环境变量”窗口中，在系统变量中找到“", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Path"
            })
          }), "”变量。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑Path变量，将ohpm-repo工具包解压目录下的bin目录路径添加到新的一行中。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["连续点击所有打开的窗口上的“", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "确定"
            })
          }), "”，进行保存。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["重新打开命令行终端，即可使用 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-command",
            children: "ohpm-repo 相关命令"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "linux和macos环境",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Linux和macOS环境"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开命令行终端，执行以下命令编辑 .bashrc 文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "vim ~/.bashrc\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按 i 进入插入模式（底部显示 -- INSERT --）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在文件末尾新起一行，添加以下内容："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export PATH=\"$PATH:[指定路径]\"  // 其中的[指定路径]请替换为 ohpm-repo 工具包解压目录中 bin 目录的路径\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按 Esc 键退出插入模式，输入 :wq 然后按 Enter 来保存并退出。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["输入下面的命令使配置生效后，即可使用 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-command",
            children: "ohpm-repo 相关命令"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "source ~/.bashrc\n"
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
317485(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530751426-1a6b07718cdaacfb3f4f675f58735c41.png");

},
876038(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561751351-3977798ce83de0350532632ed3cebb26.png");

},
63666(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530751402-f2cca6de2965cce1107c8866c2970e3b.png");

},
435902(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561751361-7ea2ffe73f8bc5761ee5025eba37a7e3.png");

},
26619(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561831349-b10cf0f85b41d57414b94881e816054f.png");

},
154753(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530911422-0d8fa83ef0cd0bb29291a83d7b317adb.png");

},
94994(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561751375-3e2f4870a4b426635b021cc3bfceb81e.png");

},
174191(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
707991(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530911410-c7dc3992419f18751caac882b31b6ac4.png");

},
270062(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530751436-129cee3ce2c19002302761eb32cf45a3.png");

},
900185(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530911388-97f25ee825c7af903774f1c53acd56c5.png");

},
973464(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561831325-43eb4e698b3bf8c11bf29ebb58924d15.png");

},
431350(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530911382-bd7506eaa3bf4ff32c4cc3d17ee9f301.png");

},
212095(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561831337-f391f4b09b3fc7befbae7c6bab317592.png");

},
945235(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530911398-517ca996a6df25371882d2b105f60dee.png");

},
233882(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
657666(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561831315-2424d0c4aa0987336a386a96a6291d9e.png");

},
775006(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530751394-cc282abada3300cb994ffa23bb3d260e.png");

},
476309(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561831307-4586d100fb0e6fad364523c490e70bbb.png");

},
435413(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561751331-a92e688405fc5ff70e7ed731e2960534.png");

},
582808(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530751414-e2188216ed934e431c0c7c120c150f03.png");

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