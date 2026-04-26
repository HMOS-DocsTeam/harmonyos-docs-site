"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["240909"], {
419733(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_appendix_ide_ohpm_repo_upgrade_ide_upgrade_101_to_2_xx_ide_upgrade_101_to_2_xx_md_0ef_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-module-management-ide-ohpm-repo-ide-ohpm-appendix-ide-ohpm-repo-upgrade-ide-upgrade-101-to-2-xx-ide-upgrade-101-to-2-xx-md-0ef.json
var site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_appendix_ide_ohpm_repo_upgrade_ide_upgrade_101_to_2_xx_ide_upgrade_101_to_2_xx_md_0ef_namespaceObject = JSON.parse('{"id":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-ohpm-repo-upgrade/ide-upgrade-101_to_2xx/ide-upgrade-101_to_2xx","title":"升级版本1.0.1至2.X.X/5.X.X","description":"升级至2.X.X版本与升级至5.X.X版本步骤一致，本文以升级至2.X.X版本为例。","source":"@site/docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-ohpm-repo-upgrade/ide-upgrade-101_to_2xx/ide-upgrade-101_to_2xx.md","sourceDirName":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-ohpm-repo-upgrade/ide-upgrade-101_to_2xx","slug":"/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-ohpm-repo-upgrade/ide-upgrade-101_to_2xx/","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-ohpm-repo-upgrade/ide-upgrade-101_to_2xx/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"升级版本1.0.1至2.X.X/5.X.X","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-upgrade-101_to_2xx","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"数据迁移","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-ohpm-repo-data-migration/"},"next":{"title":"升级版本1.1.0至2.X.X/5.X.X","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-ohpm-repo-upgrade/ide-upgrade-110_to_2xx/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-ohpm-repo-upgrade/ide-upgrade-101_to_2xx/ide-upgrade-101_to_2xx.md


const frontMatter = {
	title: '升级版本1.0.1至2.X.X/5.X.X',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-upgrade-101_to_2xx',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = '升级版本1.0.1至2.X.X/5.X.X';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
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
        id: "升级版本101至2xx5xx",
        children: "升级版本1.0.1至2.X.X/5.X.X"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "升级至2.X.X版本与升级至5.X.X版本步骤一致，本文以升级至2.X.X版本为例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(427902)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在升级之前，请务必备份好ohpm-repo 私仓工具中的历史数据，避免因升级操作失误，导致数据丢失。备份的内容包括ohpm-repo中", (0,jsx_runtime.jsx)(_components.a, {
        href: "#li10435216234",
        children: "<deploy_root>"
      }), "部署根目录内的数据、db元数据以及store三方包数据，详细可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-ohpm-repo-data-backup",
        children: "数据备份"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "旧版本服务停止：如果旧版本的服务还在运行，升级版本前请停止，进入1.0.1版本ohpm-repo私仓工具包解压目录下的bin目录，执行stop。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ohpm-repo stop\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(747439)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若您想在其他目录使用ohpm-repo，请将对应版本ohpm-repo工具包解压目录中bin目录的路径配置到", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-faq#section24117279211",
            children: "系统环境变量"
          }), "path中。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "下载并解压工具包：下载版本2.X.X的ohpm-repo私仓工具包，并解压（请解压到一个空文件夹中）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(600833)/* ["default"] */.A) + "",
            width: "258",
            height: "280"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安装完成之后，进入ohpm-repo 私仓工具包解压目录下的bin目录，执行如下命令："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ohpm-repo -v\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "终端输出版本号2.X.X，则表示解压成功。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "移植配置文件信息：版本2.X.X的配置文件与版本1.0.1相比有较大差异，需要提取旧版本配置文件信息至新版本配置文件中，移植的具体内容如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(137688)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果ohpm-repo版本1.0.1使用的配置文件，配置项均为默认项，则无需移植配置文件信息，直接执行下一步启动操作。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["旧版本1.0.1配置文件路径为：", (0,jsx_runtime.jsx)(_components.code, {
                children: "&lt;deploy\\_root&gt;/conf/config.yaml"
              }), "；新版本2.X.X配置文件路径为：<2.X.X版本ohpm-repo解压目录>/conf/config.yaml。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "<deploy_root>：ohpm-repo部署根目录"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "windows系统: ~/AppData/Roaming/Huawei/ohpm-repo"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "其他操作系统：~/ohpm-repo"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration#zh-cn_topic_0000001745376470_listen",
                    children: "listen"
                  })
                })
              }), "：旧版本listen值拷贝替换到新版本listen中。如果旧版本是在执行start时指定的listen值，需要把对应的listen值填入新版本配置文件中，新版本中listen值不支持命令行指定。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration#zh-cn_topic_0000001745376470_https",
                    children: "https"
                  })
                })
              }), "：如果listen配置的协议是https，需要拷贝https的值：旧版本https.key和https.cert路径信息对应拷贝替换到新版本https_key和https_cert中。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "# 旧版本 `1.0.1`\nhttps:\n  key: ./ssl/server.key     \n  cert: ./ssl/server.crt\n\n# 新版本 `2.X.X`\nhttps_key: ./ssl/server.key       \nhttps_cert: ./ssl/server.crt\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration#zh-cn_topic_0000001745376470_server",
                    children: "server"
                  })
                })
              }), "： 旧版本server有八个参数信息，对应拷贝到新版本server numeric limit section模块下，拷贝替换对应数字。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(160147)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "版本1.1.0开始，新增参数api_timeout。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "版本升级时，参数信息会有变化，具体信息可在<解压目录>/conf/config.yaml文件中获取。"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "# 旧版本 `1.0.1`\nserver:\n  max_package_size: 10\n  max_extract_size: 50\n  max_extract_file_num: 10240\n  user_rate_limit: 100\n  fetch_timeout: 60\n  keep_alive_timeout: 60\n  upload_lock_hour: 24\n  upload_max_times: 100     \n\n# 新版本 `2.X.X`\nmax_package_size: 10\nmax_extract_size: 50\nmax_extract_file_num: 10240\nuser_rate_limit: 100\nfetch_timeout: 60\nkeep_alive_timeout: 60\napi_timeout: 60\nupload_lock_hour: 24\nupload_max_times: 100\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration#zh-cn_topic_0000001745376470_db",
                    children: "db"
                  })
                })
              }), "：旧版本仅支持本地filedb存储，不支持mysql，故使用新版本db.type为filedb的模板，拷贝替换旧版本db.plugin_config.path路径信息至新版本db.config.path中。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "# 旧版本 `1.0.1`\ndb:\n  plugin_name: ohpm-repo-plugin-filedb\n  plugin_config:\n    path: ./db  \n\n# 新版本 `2.X.X`\ndb:\n  type: filedb\n  config:\n    path: ./db\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration#zh-cn_topic_0000001745376470_store",
                    children: "store"
                  })
                })
              }), "：旧版本仅支持本地storage存储，不支持sftp，故使用新版本store.type为fs的模板，拷贝替换旧版本store.plugin_config.path路径信息和store.plugin_config.server值至新版本对应的store.config.path和 store.config.server中。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(322161)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["在ohpm-repo 2.0.0版本中，listen的默认值已更改为listen: 0.0.0.0:8088，如果listen的host配置为0.0.0.0，则字段store.config.server不可省略****，必须****配置为详细地址，例如**", (0,jsx_runtime.jsx)(_components.code, {
                children: "http://localhost:8088**"
              }), "。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "# 旧版本 `1.0.1`\nstore:\n  plugin_name: ohpm-repo-plugin-fs\n  plugin_config:\n    path: ./storage\n    #server: http://localhost:8088\n\n# 新版本 `2.X.X`\nstore:\n  type: fs\n  config:\n    path: ./storage\n    #server: http://localhost:8088\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration#zh-cn_topic_0000001745376470_uplink",
                    children: "uplink"
                  })
                })
              }), "：拷贝旧版本uplink.store_path路径信息和uplink.cache_time缓存时间信息至新版本对应的uplink_store_path和uplink_cache_time中"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "# 旧版本 `1.0.1`\nuplink:\n  store_path: ./uplink\n  cache_time: 168\n  \n# 新版本 `2.X.X`\nuplink_store_path: ./uplink\nuplink_cache_time: 168\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选项）新版本如果需要使用新的部署目录<new_deploy_root>，需要手动迁移数据。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "解压与替换配置信息：按照步骤1-4，解压和拷贝替换配置文件信息。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "建立新部署目录：判断指定的新部署目录<new_deploy_root>是否存在，不存在则新建，新部署目录需存在且为空。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["拷贝数据文件：拷贝旧版本部署目录", (0,jsx_runtime.jsx)(_components.a, {
              href: "#li10435216234",
              children: "<deploy_root>"
            }), "下的全部文件至新部署目录<new_deploy_root>中。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "修改新版本ohpm-repo配置文件：打开新版本ohpm-repo 2.0.0的解压目录，进入conf目录下，修改新配置文件config.yaml，修改配置项deploy_root为新的部署目录<new_deploy_root>。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(989216)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在使用新部署目录时，旧版本部署目录中meta文件一定要迁移到新版本部署目录中，否则使用meta加密组件加密的数据无法被正确解密。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新版本服务启动：正确拷贝替换配置文件信息后，进入ohpm-repo私仓工具包解压目录下的bin目录，执行下面语句启动新版本服务："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "执行安装命令："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "ohpm-repo install\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "结果示例："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(528722)/* ["default"] */.A) + "",
                title: "点击放大",
                width: "1096",
                height: "152"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "刷新环境变量：安装成功后，必须根据给出的提示信息刷新环境变量，针对Windows系统和Linux/Mac系统，有不同处理方式："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(116318)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Windows系统： 关闭当前窗口，重新开启一个窗口"
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Linux系统或Mac系统：在命令行中执行刷新命令：", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "source ~/.bashrc"
                }), "或者. ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "~/.bashrc"
                }), "。"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "执行启动start命令："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "ohpm-repo start\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "结果示例："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(479425)/* ["default"] */.A) + "",
                title: "点击放大",
                width: "1079",
                height: "97"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(252914)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "版本升级之前，如果浏览器中已访问ohpm-repo页面，版本升级之后请刷新ohpm-repo页面。"
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
116318(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
989216(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
160147(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
600833(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
747439(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

},
479425(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561831195-c740f562e8d7cad78570f58822c2f53d.png");

},
528722(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530911274-1f5e54632d5889897904f3755262ee89.png");

},
322161(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
252914(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
427902(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAFZklEQVRo3u2af0zUZRzHX/66o+MOOU6DQ4FJgfyIH9MGGHKogMjCzSScOiwtI7J001mbra1MXEtNM1cB02xBg00TS1MMFIQyBKaAISDEOBAODAERkUOU/ji7PMGLsdpBPu/ttnvueZ7Pffe89nk+P/YdR8wnAwiNNm0dL85gdEqAEWCEBBgBRkiAEWAsJKmEDRGz/xVTywK9WBboBVLJmAUzcbQ8SPKKUGI1bvg4qbBTWNF0vXtY+y43tZOUW2oCeP+bC1DIJBRsTkdXrxNgRqrEpcHEatxQ2lhR3dzBzrUhw6/E0gpNxvFBnihkEvLLrg4JZfeKeQR7OT7S3oGcClLOlgkwiUuDWRfth9LGirScSnZlFXP4SrPJmu/WzmOWuz37T/zG9rwKk7n65jaT8eJnZwCg8ZvOwOFNJnNpOZV0dOsJ8HQwC+bx9hiphNQ1YTwfMMMIZVXSScNh1zWZLFXbyQE4fblp0NyDktmr0PhNp6Orl5qmTtym2aK0saKosgWAnt5+49p9R0vZkHbGOD6/baVZYI8NmPCZziwOcmWyXErK8Uu8/nU22Cig6ybxoX4krw8btCd9cyTpRBrHRwpqidn7w99x6oUAbGQSI+SrX8ajBJYcyDVea5/FLRAxxpxyyms5lO9KdXMHu7KK8ZvpQuqroaSeqeTG7T6D5+i6uNbZM2ivjUyCh4vdIxOEH0sbAJg2VS6yspHota9+AsDBWc2hhDDcnGwJalJzqlQLwLHzdYbrRipBrVYBoKvXPdKjViWd5FR5IxmFFYx1WTz4Oziryd8YhZuTLQXlTcQkZREf5Dko00peH2aIC2bS3+TVEej77xLganpdbZnrCXM9UcqldHTrBZh/kt9MF6On1DR2sig5B/R9I7Y3x0uNj+uUQb+vX+IPQJW2neyLDQKMOS0P8iYpYR6T5VLqdF1o9pykp/Om2Wr9CYn5x527+wR2MikAse6O7FgbQk1jJwv3nQKgvUdPYrivAGNOGRdr+LAjkPK6NjSfnoCum6QmRCGTTuLXatPrylFpDcDtvn6zNrta2ui6/33A3VBE9vXfRX/v3pjrAFjuKtP3se5gPjnVDaDvI9z3aRYHuTIAyB7yDHdHJQB37t4btvlgDzUA3jNUpMQEsjytgFut18cMGIs2MXPKa0Hfh4Ozmi/WaJgsl3K8sI7Mot8fyI0VRAcZqvlXIr1JXh0BQFFlC0q5dEi7cc89Q6jvdACa/ugmeo4r2xb4YG2vEh4z0qxs1cHThlRZew1/WwWV78egkEmo0rbjOFVOfLQPhRU64tN+oaxaO8ietb2Kl0I9UNpYkV2iZXX6Oa4kvsjGmFlYSycxfvw4Y0LwV1IgPOYhLQv0MoGi+TjT4EH2KnYs8idj00I8XOyo0razPCWXkO3HuFTXRpC3mrwt0QbvsVGYQMmICyFitjNdPX1sziyhWatj67eGRud8PyesJBOMxWtRZYvx0znK0miLeUzCfH8+ejkYW7nUBErue7HM83cyrjv6cy1vHCmmpcEQvH3f+YbUhCjiwj2Jj/bhlv4Om9LzADjzVqSx37XnyAXK73vUzqxiAFIvX+Vdjadp8TpKe2UT8Ir8wBJ/XKJrJ3bWUxRWthC197ixfvGd9iRzvNRkl2jZlXmBtzPO0n3DtPWSWVKLrrUHhXQSK9MKjHvrr98mJtCVz78vY8vhApM952qb6b7RjbfjFKobOmjv7iWvqtE47+WgouRKK4XaNupa2y3N5ew4i77wd79pOVThOVT8GJaspNA7Nqp7M7LwC39DQAFGDgX+D1AsH/yFBBgBRkiAEWCEBBghAUaAERJgBBih/1gTga3iGEad8v4EFTP/Ye4wQC4AAAAASUVORK5CYII=");

},
137688(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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