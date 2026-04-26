"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["442516"], {
705015(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_repo_configuration_ide_ohpm_repo_configuration_md_194_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-module-management-ide-ohpm-repo-ide-ohpm-repo-configuration-ide-ohpm-repo-configuration-md-194.json
var site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_repo_configuration_ide_ohpm_repo_configuration_md_194_namespaceObject = JSON.parse('{"id":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration/ide-ohpm-repo-configuration","title":"配置文件","description":"config.yaml是ohpm-repo的重要文件，可以在其中修改默认参数配置，启动插件和扩展功能。ohpm-repo私仓解压目录中的conf目录下带有一个默认配置文件config.yaml，ohpm-repo执行install命令时默认读取该文件。","source":"@site/docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration/ide-ohpm-repo-configuration.md","sourceDirName":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration","slug":"/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration/","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"配置文件","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-configuration","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"快速开始","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-quickstart/"},"next":{"title":"日志","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-log/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration/ide-ohpm-repo-configuration.md


const frontMatter = {
	title: '配置文件',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-configuration',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = '配置文件';

const assets = {

};



const toc = [{
  "value": "默认配置",
  "id": "默认配置",
  "level": 2
}, {
  "value": "配置项说明",
  "id": "配置项说明",
  "level": 2
}, {
  "value": "listen",
  "id": "listen",
  "level": 3
}, {
  "value": "https",
  "id": "https",
  "level": 3
}, {
  "value": "deploy_root",
  "id": "deploy_root",
  "level": 3
}, {
  "value": "server",
  "id": "server",
  "level": 3
}, {
  "value": "db",
  "id": "db",
  "level": 3
}, {
  "value": "store",
  "id": "store",
  "level": 3
}, {
  "value": "use_reverse_proxy",
  "id": "use_reverse_proxy",
  "level": 3
}, {
  "value": "uplink",
  "id": "uplink",
  "level": 3
}, {
  "value": "logs",
  "id": "logs",
  "level": 3
}, {
  "value": "loglevel",
  "id": "loglevel",
  "level": 3
}, {
  "value": "auth_plugin",
  "id": "auth_plugin",
  "level": 3
}, {
  "value": "field_check_plugin",
  "id": "field_check_plugin",
  "level": 3
}, {
  "value": "content_check_plugin",
  "id": "content_check_plugin",
  "level": 3
}, {
  "value": "compability_log_level",
  "id": "compability_log_level",
  "level": 3
}, {
  "value": "allow_remove_depended_packages",
  "id": "allow_remove_depended_packages",
  "level": 3
}, {
  "value": "关于 deploy_root",
  "id": "关于-deploy_root",
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
        id: "配置文件",
        children: "配置文件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "config.yaml是ohpm-repo的重要文件，可以在其中修改默认参数配置，启动插件和扩展功能。ohpm-repo私仓解压目录中的conf目录下带有一个默认配置文件config.yaml，ohpm-repo执行install命令时默认读取该文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(49775)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ohpm-repo成功启动后修改配置文件方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["首次启动ohpm-repo时执行", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "install"
          })
        }), "命令时已指定配置文件：找到指定的配置文件进行文件内容修改，然后重新执行install指定修改后的配置文件，再执行start启动ohpm-repo。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["首次启动ohpm-repo时执行", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "install"
          })
        }), "命令未指定配置文件：默认使用ohpm-repo压缩包解压路径下conf目录中的配置文件，修改该文件内容，然后重新执行install和start操作。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "默认配置",
      children: "默认配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "##### server configuration section #####\nlisten: localhost:8088        # 建议修改为具体的ip/域名\n# listen:\n# - localhost:8088            # 监听本机环回地址\n# - http://localhost:8088     # 监听本机环回地址\n# - 0.0.0.0:8088              # 监听本机所有地址 (INADDR_ANY)\n# 协议可配置 http 或者 https，默认为 http\n# port: 1-65535(Windows系统)/ 1024-65535(Linux或Mac系统）\n\n# 可选 (listen 为 https 协议时必须配置)\nhttps_key: ''                 # https 服务使用的 key 的路径  (不配置默认为'')\nhttps_cert: ''                # https 服务使用的 crt 的路径  (不配置默认为'')\n\n##### server deploy root section #####\ndeploy_root: ''                # 安装根目录，只支持绝对路径，且目录必须存在\n\n##### server numeric limit section #####\nmax_package_size: 500          # 上传包大小限制，单位是MB (0, 500]，不配置或配置为0默认为 500\nmax_extract_size: 800          # 压缩包解压后大小限制，单位是MB ，不配置或配置为0默认为 800\nmax_extract_file_num: 30000    # 压缩包解压后文件个数限制，不配置或配置为0默认为30000个\nuser_rate_limit: 100           # 用户访问频率控制，单位是次/小时 (0, 10000]，不配置或配置为0默认为 100\nfetch_timeout: 60              # 请求/响应的超时时间，单位是秒 (0, 3600]，不配置或配置为0默认为 60\nkeep_alive_timeout: 60         # TCP 保持连接的超时时间，单位是秒 (0, 3600]，不配置或配置为0默认为 60\napi_timeout: 60                # api超时时间，单位是秒(0, 3600]，不配置或配置为0默认为 60\nupload_api_timeout: 300        # 上传三方包api超时时间，单位是秒(0, 3600]，不配置或配置为0默认为 300\nupload_lock_hour: 24           # 下架某一三方包所有版本后，限时禁止同名三方包上传，单位是小时 (0, 168]，不配置或配置为0默认为 24\nupload_max_times: 100          # 单用户24小时内上传次数限制 (0, 100000]，不配置或配置为0默认为 100\noperation_log_retention: 100   # 数据库中操作日志保留时间，单位是天，不配置或配置为0默认为 100\n\n##### metadata storage section #####\n## 数据存储类型 filedb 和 mysql 二选一，不可都配置\ndb:                         # 必须用 yaml 数组形式写法\n  type: filedb\n  config:                   # 如果想修改存储路径且保留旧的数据，则需要把旧路径下的数据文件迁移至新路径\n    path: ./db              # 本地数据存储路径，不配置默认为<deploy_root>/db;\n\n#db:                        # 必须用yaml数组形式写法\n#  type: mysql\n#  config:\n#    host: \"localhost\"      # 数据库主机地址\n#    port: 3306             # 数据库端口 (0,65535]\n#    username: tctAdmin         # 数据库的用户名\n#    password: \"password\"   # 数据库的用户密码（请配置明文, 最终在部署目录中会转换为密文）\n#    database: \"repo\"       # 数据库名\n\n##### storage section #####\n## 文件存储类型fs,sftp 和 custom 三选一，不可多选。\n\nstore:                               # 必须用 yaml 数组形式写法\n  type: fs\n  config:                            # 上传资源后如若要修改存储路径，则需要把旧路径下的数据迁移至新路径中\n    path: ./storage                  # 已上架三方库存储路径，不配置默认为 <deploy_root>/storage;\n    #server: http://localhost:8088   # 仓库下载链接地址，不配置取默认值\n\n# 文件存储类型为 sftp 时，最多配置三个 sftp\n#store:                               # 必须用 yaml 数组形式写法\n#  type: sftp                         # 当且仅当 db 的类型为 mysql 时，store 的类型才能为 sftp\n#  config:\n#    location:\n#      -\n#        name: test_one_sftp          # 主机名字不能与其他sftp配置重复\n#        host: \"localhost\"            # 主机地址\n#        port: 22                     # 主机端口 (0,65535]\n#        read_username: \"read\"        # 主机有读权限的用户名字\n#        read_password: \"password\"    # 主机有读权限的用户密码（请配置明文, 最终在部署目录中会转换为密文）\n#        write_username: \"write\"      # 主机有写权限的用户名字\n#        write_password: \"password\"   # 主机有写权限的用户密码（请配置明文, 最终在部署目录中会转换为密文）\n#        path: /source22              # 相对 sftp 根目录的文件路径，仅限/开头，且路径文件夹必须存在\n#      -\n#        name: test_two_sftp\n#        host: \"localhost\"\n#        port: 24\n#        read_username: \"read\"\n#        read_password: \"password\"\n#        write_username: \"write\"\n#        write_password: \"password\"\n#        path: /source24\n#    #server: http://localhost:8088   # 仓库下载链接地址，不配置取默认值\n\n#store:\n#  type: custom                                            # custom是自定义存储插件类型，自定义存储插件开发流程见指导文档\n#  config:\n#    export_name: CustomStorage                            # 插件export的类名\n#    plugin_path: plugins/CustomStorage.js                 # 插件的绝对路径或者相对于ohpm-repo软件包的路径，建议将插件放在软件包的plugins目录下\n#    custom_field: \"test\"                                  # 自定义字段，通过引入libs/common/getStorageConfigInfo.js的getStorageConfigInfo方法获取自定义字段的值\n#    #server: http://localhost:8088                        # 仓库下载链接地址，不配置取默认值\n\n##### 是否使用反向代理 #####\n# 可选项:true,false, 默认：false。如果使用反向代理，需要配置为true，客户端IP地址将从请求头中的x-forwarded-for字段获取\nuse_reverse_proxy: false\n\n##### uplink section #####\nuplink_cache_path: ./uplink      # 缓存路径，不配置默认为 <deploy_root>/uplink\nuplink_cache_time: 168           # 远程包 metadata 缓存时间，单位为小时，默认 168 小时，取值范围为 (0, 8760]\n\n##### log section #####\nlogs_path: ./logs                # 日志路径，不配置默认为 <deploy_root>/logs\n\n##### log level section #####\n# 日志级别: 级别由低到高分别是 all、trace、debug、info、warn、error、fatal、mark、off\n# run，operate 和 access 不配置或者配置错误，默认为 info\nloglevel_run: info\nloglevel_operate: info\nloglevel_access: info\n\n##### auth plugin section #####\n# 可选项，自定义认证插件配置\n#auth_plugin:\n#  name: CustomAuth              # 认证插件的名字\n#  path: plugins/CustomAuth.js   # 插件的绝对路径或者相对于ohpm-repo软件包的路径，建议将插件放在软件包的plugins目录下\n\n##### fieldCheck plugin section #####\n# 可选项，自定义元数据规则检验插件配置\n#field_check_plugin:\n#  config_file_path:  plugins/fieldCheckPlugin/CustomExtensionValidationConfig.json  # 字段校验配置文件的绝对路径或者相对于ohpm-repo软件包的路径，建议将文件放在软件包的plugins/fieldCheckPlugin目录下\n#  check_func_dir: plugins/fieldCheckPlugin                                          # 字段校验函数文件所在目录的绝对路径或者相对于ohpm-repo软件包的路径，建议将目录设置为plugins/fieldCheckPlugin文件夹\n\n##### content check plugin #####\n# 可选项，包内容规则检测插件配置\n#content_check_plugin:\n  # 该校验要求环境变量中有ark_disasm可执行文件、tar命令行工具\n  # 检查范围：上架的字节码har、hsp\n#  name: 'OHMUrlCheck'\n\n##### compatibleSdkVersion等兼容性字段检测日志等级 #####\n# 可选值：close、info、warn、error，默认：warn\ncompability_log_level: warn\n\n##### 是否允许下架被其他组件依赖的包 #####\n# 可选项:true,false, 默认：false\nallow_remove_depended_packages: false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置项说明",
      children: "配置项说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "listen",
      children: "listen"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "格式为三段式，即<proto>://<host>:<port>，其中<proto>可以不填，默认为http，如："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "监听本机回环地址（默认）："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "listen: localhost:8088\n# 或 listen: http://localhost:8088\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "监听具体地址（建议）："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "listen: https://<ohpm-repo部署机器ip>:8088\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["监听所有地址（当选择监听所有地址时，配置项", (0,jsx_runtime.jsx)(_components.a, {
            href: "#zh-cn_topic_0000001745376470_store",
            children: "store"
          }), "中server值必须配置）："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "listen: 0.0.0.0:8088\n# 或 listen: http://0.0.0.0:8088\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(963723)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["listen值建议监听具体的地址。proto支持http和https协议，支持缺省，缺省时默认为http。为了确保ohpm-repo链接的安全，建议选择使用https协议，如果配置为https协议，则需要完善", (0,jsx_runtime.jsx)(_components.a, {
        href: "#zh-cn_topic_0000001745376470_https",
        children: "https"
      }), "相关配置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "https",
      children: "https"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#zh-cn_topic_0000001745376470_listen",
        children: "listen"
      }), "时选择使用https协议，则需要配置https_key和https_cert："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "https_key：ssl证书私钥文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "https_cert：ssl证书文件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考配置如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "https_key: ./ssl/server.key\nhttps_cert: ./ssl/server.crt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(383130)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生产环境必须使用受信任CA颁发的证书，避免因使用自签名证书导致浏览器安全警告。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deploy_root",
      children: "deploy_root"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohpm-repo的部署目录，存储运行时生成的文件数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果<deploy_root>字段为空，则默认路径为："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "windows系统: ~/AppData/Roaming/Huawei/ohpm-repo"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其他操作系统：~/ohpm-repo"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果<deploy_root>字段不为空，则路径必须为", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "绝对路径"
            })
          }), "，且路径所指向文件夹", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "必须存在"
            })
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该路径不允许配置为ohpm-repo安装包解压根目录。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考配置如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "deploy_root: ''\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "server",
      children: "server"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务相关配置，具体为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "max_package_size"
          })
        }), ": 上传包大小限制，单位为MB， 不配置或配置为0取默认值500MB，取值范围为 (0, 500] 。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "max_extract_size"
          })
        }), ": 压缩包解压后大小限制，单位为MB，不配置或配置为0取默认值800MB。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "max_extract_file_num"
          })
        }), ": 压缩包解压后文件个数限制，不配置或配置为0取默认值30000个。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "user_rate_limit"
          })
        }), ": 用户访问频率控制，单位为次/秒，不配置或配置为0取默认值100次/秒，取值范围为 (0, 10000]。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "fetch_timeout"
          })
        }), ": 当使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#zh-cn_topic_0000001745376470_uplink",
          children: "uplink"
        }), "时，请求uplink数据的请求/响应超时时间，单位为秒，不配置或配置为0取默认值60秒，取值范围为 (0, 3600]。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "keep_alive_timeout"
          })
        }), ": TCP 保持连接的超时时间，单位为秒，不配置或配置为0取默认值60秒，取值范围为 (0, 3600]。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "api_timeout"
          })
        }), ": 接口请求与响应超时时间，单位为秒，不配置或配置为0取默认值60秒，取值范围(0, 3600]。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "upload_api_timeout"
          })
        }), ": 上传三方包接口请求与响应超时时间，单位为秒，不配置或配置为0取默认值300秒，取值范围(0, 3600]。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "upload_lock_hour"
          })
        }), ": 下架某个三方包所有版本后，限时禁止同名三方包上传，单位为小时，不配置或配置为0取默认值24小时，取值范围为 (0, 168]。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "upload_max_times"
          })
        }), ": 单用户24小时内上传次数限制，不配置或配置为0取默认值100次，取值范围为 (0, 100000]。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "operation_log_retention"
          })
        }), "：数据库中操作日志保留时间，单位是天，不配置或配置为0取默认值100天。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考配置如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "max_package_size: 500\nmax_extract_size: 800\nmax_extract_file_num: 30000\nuser_rate_limit: 100\nfetch_timeout: 60\nkeep_alive_timeout: 60\napi_timeout: 60\nupload_api_timeout: 300\nupload_lock_hour: 24\nupload_max_times: 100\noperation_log_retention: 100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(514279)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "db是元数据存储的配置项，store是文件存储的配置项。db支持fileDB本地存储和mysql数据库存储；store支持file storage存储，sftp存储和custom storage 自定义插件存储。db和store不能随意搭配，需要符合表1的匹配规范："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " db配置项与store配置项的搭配选择"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "db：元数据存储"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "与db所适配的store：三方包文件存储"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "filedb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "file storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mysql(ohpm-repo 1.1.0开始支持）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "file storage，sftp storage(ohpm-repo 1.1.0开始支持），custom storage(ohpm-repo 2.2.0开始支持）"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "db",
      children: "db"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohpm-repo运行过程产生的用户信息，运行状态等元数据存储配置，支持本地磁盘存储filedb和mysql数据库存储。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "本地磁盘存储"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认使用本地磁盘存储，配置如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "type: 存储插件名称，为filedb。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["config: 插件配置，具体为：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["path: 数据库文件存储地址，默认值为./db，支持相对和绝对路径配置，当配置为相对路径时，则以", (0,jsx_runtime.jsx)(_components.a, {
              href: "#zh-cn_topic_0000001745376470_%E5%85%B3%E4%BA%8E-deploy_root",
              children: "deploy_root"
            }), "为根目录。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(475847)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果想修改数据库文件存储路径同时保留旧的数据，则需要把旧路径下的数据文件迁移至新路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考配置如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "db:                \n  type: filedb     \n  config:\n    path: ./db\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "mysql存储"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "type: 插件名称，配置为mysql。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["config: 插件配置，具体为：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "host: 数据库主机地址。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "port: 数据库端口。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "username: 数据库的用户名。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "password: 数据库的用户密码（请配置明文, 最终在部署目录中会转换为密文）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "database: 数据库名。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考配置如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "db:                         \n  type: mysql\n  config:\n    host: \"localhost\"\n    port: 3306\n    username: \"tctAdmin\"\n    password: \"password\"\n    database: \"repo\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(451992)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了避免潜在的安全风险，建议使用非最高权限的数据库账户进行连接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "store",
      children: "store"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "三方库及其元数据等资源文件存储配置，支持本地磁盘存储，sftp存储和自定义插件存储。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "本地磁盘存储"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认使用本地磁盘存储文件，具体配置为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "type: 插件名称，为fs。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["config: 插件配置，具体为：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["path: 存储根目录路径，默认为./storage，支持相对和绝对路径配置，当配置为相对路径时，则以", (0,jsx_runtime.jsx)(_components.a, {
              href: "#zh-cn_topic_0000001745376470_%E5%85%B3%E4%BA%8E-deploy_root",
              children: "deploy_root"
            }), "为根目录。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["server: 仓库内容的下载地址，当", (0,jsx_runtime.jsx)(_components.a, {
              href: "#zh-cn_topic_0000001745376470_listen",
              children: "listen"
            }), "的host为0.0.0.0且本机存在多个网络接口时，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "必须配置"
              })
            }), "。\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["server的格式如下：<", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#zh-cn_topic_0000001745376470_listen",
                  children: "listen"
                }), "的proto>://<host>:<", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#zh-cn_topic_0000001745376470_listen",
                  children: "listen"
                }), "的port>；"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["当配置项", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#zh-cn_topic_0000001745376470_listen",
                  children: "listen"
                }), "的host不为0.0.0.0时，则server", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "默认"
                  })
                }), "取listen的完整格式，例如listen为127.0.0.1:8088，故server默认值为", (0,jsx_runtime.jsx)(_components.code, {
                  children: "http://127.0.0.1:8088"
                }), "；"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["当配置项", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#zh-cn_topic_0000001745376470_listen",
                  children: "listen"
                }), "的host为0.0.0.0时，如果本机仅存在一个网络接口，则server中的host默认为本机网络接口的ipv4地址；如果本机存在多个网络接口，则server中的host默认为本机获取到的第一个网络接口的ipv4地址，建议手动修改host为指定的本机ip/域名，例如listen为0.0.0.0:8088，故server需配置为", (0,jsx_runtime.jsx)(_components.code, {
                  children: "http://<本机ip/域名>:8088"
                }), "；"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["如果需要通过反向代理来访问ohpm-repo服务，则该字段须配置为反向代理服务器的域名地址，且需要配置", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#section1074004784011",
                  children: "use_reverse_proxy"
                }), "值为true。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(152565)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上传资源后如若要修改存储路径，则需要把旧路径下的数据迁移至新路径中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考配置如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "store:\n  type: fs\n  config:\n    path: ./storage\n    #server: http://localhost:8088\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "sftp 存储"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持使用sftp存储文件，仅当数据存储为mysql存储时才能使用sftp存储，具体配置为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "type: 插件名称，其名称为sftp。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["config: 插件配置。\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["location: 支持配置最多3个sftp服务，必须用yaml的数组形式写法，详细配置如下；\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "name: sftp服务名，名字不能与其他sftp配置重复。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "host: sftp服务主机地址。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "port：sftp服务端口。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "read_username：有读权限的用户名。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "read_password：有读权限的用户密码（请配置明文, 最终在部署目录中会转换为密文)。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "write_username：有写权限的用户名。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "write_password：有写权限的用户密码（请配置明文, 最终在部署目录中会转换为密文)。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "path：相对 sftp 根目录的文件路径，仅限/开头，且路径所指向的文件夹必须存在。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["server: 仓库内容的下载地址，当", (0,jsx_runtime.jsx)(_components.a, {
              href: "#zh-cn_topic_0000001745376470_listen",
              children: "listen"
            }), "的host为0.0.0.0且本机存在多个网络接口时，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "必须配置"
              })
            }), "。\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["server的格式如下：<", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#zh-cn_topic_0000001745376470_listen",
                  children: "listen"
                }), "的proto>://<host>:<", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#zh-cn_topic_0000001745376470_listen",
                  children: "listen"
                }), "的port>"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["当配置项", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#zh-cn_topic_0000001745376470_listen",
                  children: "listen"
                }), "的host不为0.0.0.0时，则server", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "默认"
                  })
                }), "取listen的完整格式，例如listen为127.0.0.1:8088，故server默认值为 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "http://127.0.0.1:8088"
                }), "；"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["当配置项", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#zh-cn_topic_0000001745376470_listen",
                  children: "listen"
                }), "的host为0.0.0.0时，如果本机仅存在一个网络接口，则server中的host默认为本机网络接口的ipv4地址；如果本机存在多个网络接口，则server中的host默认为本机获取到的第一个网络接口的ipv4地址，建议手动修改host为指定的本机ip/域名，例如listen为0.0.0.0:8088，故server需配置为", (0,jsx_runtime.jsx)(_components.code, {
                  children: "http://<本机ip/域名>:8088"
                }), "；"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["如果需要通过反向代理来访问ohpm-repo服务，则该字段须配置为反向代理服务器的域名地址，且需要配置", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#section1074004784011",
                  children: "use_reverse_proxy"
                }), "值为true。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考配置如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "store:                               \n  type: sftp                         \n  config:\n    location:\n      - \n        name: test_one_sftp          \n        host: \"localhost\"           \n        port: 22                     \n        read_username: \"read\"   \n        read_password: \"password\" \n        write_username: \"write\"   \n        write_password: \"password\" \n        path: /source22\n      -\n        name: test_two_sftp\n        host: \"localhost\"\n        port: 24\n        read_username: \"read\"\n        read_password: \"password\"\n        write_username: \"write\"\n        write_password: \"password\"\n        path: /source24\n    #server: http://localhost:8088\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "custom存储"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用自定义插件存储，具体配置为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["type: 插件名称，为custom。custom是自定义存储插件类型，自定义存储插件", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-storageplugin",
          children: "开发流程见官方文档"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["config: 插件配置，具体为：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "export_name：待书写插件export的类名。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "plugin_path：插件的绝对路径或者相对于ohpm-repo软件包的路径，建议将插件放在软件包的plugins目录下。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "custom_field：自定义字段，通过引入ohpm-repo解压包中libs/common/getStorageConfigInfo.js的getStorageConfigInfo方法获取自定义字段的值。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["server: 本地仓库下载地址：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["当配置项", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#zh-cn_topic_0000001745376470_listen",
                  children: "listen"
                }), "的host不为0.0.0.0时，则", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "默认"
                  })
                }), "取listen的完整格式，例如listen为127.0.0.1:8088，故server默认值为", (0,jsx_runtime.jsx)(_components.code, {
                  children: "http://127.0.0.1:8088"
                }), "；"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["如果配置项", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#zh-cn_topic_0000001745376470_listen",
                  children: "listen"
                }), "的host为0.0.0.0，则server中的host默认为localhost，如", (0,jsx_runtime.jsx)(_components.code, {
                  children: "http://localhost:8088。建议手动修改host为本机的ip/域名"
                }), "，例如listen为 0.0.0.0:8088，故server需配置为", (0,jsx_runtime.jsx)(_components.code, {
                  children: "http://<本机ip/域名>:8088"
                }), "；"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["如果需要通过反向代理来访问ohpm-repo服务，则该字段须配置为反向代理服务器的域名地址。多实例部署ohpm-repo时必须配置反向代理服务器，且需要配置", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#section1074004784011",
                  children: "use_reverse_proxy"
                }), "值为true。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考配置如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "store:\n  type: custom                                            \n  config:\n    export_name: \"MyStorage\"                              \n    plugin_path: \"plugins/storagePlugin/MyStorage.js\"        \n    custom_field: \"test\"                                  \n    #server: http://localhost:8088\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use_reverse_proxy",
      children: "use_reverse_proxy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "use_reverse_proxy: 是否使用反向代理选项。可选项：true/false， 默认：false。如果使用反向代理，必须配置为true，客户端IP地址将从请求头中的x-forwarded-for字段获取。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "use_reverse_proxy: false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(745252)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当use_reverse_proxy配置为true时，必须在反向代理配置时刷新x-forwarded-for值（如果存在多级代理，只需要在最外层代理配置刷新），如果不刷新将存在x-forwarded-for数据被篡改风险，反向代理配置刷新x-forwarded-for命令如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "proxy_set_header x-forwarded-for $remote_addr\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uplink",
      children: "uplink"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["uplink_cache_path：远程包缓存路径，默认路径为./uplink，支持相对和绝对路径配置，当配置为相对路径时，则以", (0,jsx_runtime.jsx)(_components.a, {
          href: "#zh-cn_topic_0000001745376470_%E5%85%B3%E4%BA%8E-deploy_root",
          children: "deploy_root"
        }), "为基准目录。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "uplink_cache_time：远程包metadata缓存时间，单位为小时，默认168小时，取值范围为(0, 8760]。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考配置如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uplink_cache_path: ./uplink\nuplink_cache_time: 168\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "logs",
      children: "logs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["logs_path: 日志存储，默认路径为./logs，支持相对路径和绝对路径配置，当配置为相对路径时，以", (0,jsx_runtime.jsx)(_components.a, {
          href: "#zh-cn_topic_0000001745376470_%E5%85%B3%E4%BA%8E-deploy_root",
          children: "deploy_root"
        }), "为基准目录。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考配置如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "logs_path: ./logs\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "loglevel",
      children: "loglevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "loglevel自定义配置，具体配置为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "loglevel_run：run日志文件的存储级别，默认级别为info，输出的日志信息级别高于设定的日志级别才会存储到run日志文件中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "loglevel_operate：operate日志文件的存储级别，默认级别为info，输出的日志信息级别高于设定的日志级别才会存储到operate日志文件中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "loglevel_access：access日志文件的存储级别，默认级别为info，输出的日志信息级别高于设定的日志级别才会存储到access日志文件中。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(213696)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "日志级别由低到高分别是all、trace、debug、info、warn、error、fatal、mark 和 off。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "run、operate和access，日志级别不配置或者配置错误，默认为info。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考配置如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "loglevel_run: info\nloglevel_operate: info\nloglevel_access: info\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "auth_plugin",
      children: "auth_plugin"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ohpm-repo从2.3.0版本开始支持自定义认证插件（需配套使用1.8.0及以上版本ohpm命令行工具），允许您开发定制化的认证插件来对接您自己的用户信息系统。自定义认证插件开发流程见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-custom-auth-plugin",
        children: "认证插件说明文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数说明："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "name: 插件名称，自定义插件文件CustomAuth.js中定义的实现类名称，如果实现类为CustomAuth，故此处值为：CustomAuth 。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "path: 编译后插件文件CustomAuth.js的存储位置。支持绝对路径和相对路径，相对路径的基准为ohpm-repo解压根目录。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考配置如下（默认不开启）："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#auth_plugin:\n#  name: CustomAuth              \n#  path: plugins/CustomAuth.js\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "field_check_plugin",
      children: "field_check_plugin"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ohpm-repo从5.1.3版本开始支持自定义元数据规则校验，可以对oh-package.json5中部分字段开发定制化的校验规则。自定义元数据规则校验插件开发流程见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-appendix/ide-custom-metadata-rule-validation/ide-custom-metadata-rule-validation-config",
        children: "自定义元数据规则校验插件说明文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数说明："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "config_file_path：字段校验配置文件路径，支持绝对路径和相对路径，相对路径的基准为ohpm-repo解压根目录，建议将文件存放在软件包的plugins/fieldCheckPlugin目录下，默认值为plugins/fieldCheckPlugin/CustomExtensionValidationConfig.json。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "check_func_dir：字段校验函数文件所在目录路径，支持绝对路径和相对路径，相对路径的基准为ohpm-repo解压根目录，建议将目录设置为plugins/fieldCheckPlugin文件夹，默认值为plugins/fieldCheckPlugin。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考配置如下（默认不开启）："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#field_check_plugin:\n#  config_file_path:  plugins/fieldCheckPlugin/CustomExtensionValidationConfig.json   \n#  check_func_dir: plugins/fieldCheckPlugin\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "content_check_plugin",
      children: "content_check_plugin"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohpm-repo从5.2.0版本开始支持三方库字节码文件的OHMUrl版本一致性校验，可以对字节码har文件中module.abc文件中的OHMUrl的版本号与har文件中实际的版本号进行一致性校验，阻止不一致包的上传，以防止运行时崩溃。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(523676)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["一致性检查将用到ark_disasm工具及系统自带的tar解压工具。ark_disasm工具位于命令行工具中，用于反编译module.abc文件，请先下载", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/download/command-line-tools-for-hmos",
        children: "命令行工具"
      }), "，并将ark_disasm工具所在路径（默认路径为command-line-tools/sdk/default/openharmony/toolchains）及tar解压工具的所在路径添加到系统环境变量中（对于Linux/macOS系统，请将bsdtar解压工具所在路径添加到系统环境变量中）。如在上传三方库过程中发现ark_disasm导致报错，请联系管理员，确保您使用的DevEco Studio与ark_disasm工具配套。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数说明："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "name：固定为\"OHMUrlCheck\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考配置如下（默认不开启）："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#content_check_plugin:\n#  name: 'OHMUrlCheck'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "compability_log_level",
      children: "compability_log_level"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "compability_log_level: compatibleSdkVersion等兼容性字段检测日志等级，可选值：close、info、warn、error，默认为warn，参考配置如下："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "compability_log_level: warn\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "allow_remove_depended_packages",
      children: "allow_remove_depended_packages"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "allow_remove_depended_packages: 是否允许下架被其他组件依赖的包，可选项：true，false，默认为false，参考配置如下："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "allow_remove_depended_packages: false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "关于-deploy_root",
      children: "关于 deploy_root"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["deploy_root为ohpm-repo的部署目录，通过配置文件中字段<", (0,jsx_runtime.jsx)(_components.a, {
        href: "#zh-cn_topic_0000001745376470_deploy_root",
        children: "deploy_root"
      }), ">可进行配置。"]
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
152565(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
745252(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
451992(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
213696(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
514279(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
963723(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
523676(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
475847(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
49775(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
383130(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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