"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["664594"], {
323102(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_ohpm_cli_ide_ohpmrc_ide_ohpmrc_md_8eb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-ohpm-cli-ide-ohpmrc-ide-ohpmrc-md-8eb.json
var site_docs_ide_ohpm_cli_ide_ohpmrc_ide_ohpmrc_md_8eb_namespaceObject = JSON.parse('{"id":"ide-ohpm-cli/ide-ohpmrc/ide-ohpmrc","title":"ohpmrc","description":"ohpm配置文件。","source":"@site/docs/ide-ohpm-cli/ide-ohpmrc/ide-ohpmrc.md","sourceDirName":"ide-ohpm-cli/ide-ohpmrc","slug":"/ide-ohpm-cli/ide-ohpmrc/","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpmrc/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"ohpmrc","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpmrc","kit":"devtools/cli","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"系统平台要求","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-system-platform/"},"next":{"title":"oh-package.json5","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-oh-package-json5/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-ohpm-cli/ide-ohpmrc/ide-ohpmrc.md


const frontMatter = {
	title: 'ohpmrc',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpmrc',
	kit: 'devtools/cli',
	last_updated: '2026-04-24'
};
const contentTitle = 'ohpmrc';

const assets = {

};



const toc = [{
  "value": "描述",
  "id": "描述",
  "level": 2
}, {
  "value": "文件",
  "id": "文件",
  "level": 2
}, {
  "value": "注释",
  "id": "注释",
  "level": 2
}, {
  "value": "更新配置",
  "id": "更新配置",
  "level": 2
}, {
  "value": "默认配置项",
  "id": "默认配置项",
  "level": 2
}, {
  "value": "CA证书获取及配置",
  "id": "ca证书获取及配置",
  "level": 2
}, {
  "value": "Windows系统获取CA证书",
  "id": "windows系统获取ca证书",
  "level": 3
}, {
  "value": "Mac系统获取CA证书",
  "id": "mac系统获取ca证书",
  "level": 3
}, {
  "value": "log_level",
  "id": "log_level",
  "level": 2
}, {
  "value": "install_all",
  "id": "install_all",
  "level": 2
}, {
  "value": "resolve_conflict",
  "id": "resolve_conflict",
  "level": 2
}, {
  "value": "模块内依赖版本冲突",
  "id": "模块内依赖版本冲突",
  "level": 3
}, {
  "value": "模块间依赖版本冲突",
  "id": "模块间依赖版本冲突",
  "level": 3
}, {
  "value": "更新依赖版本的场景",
  "id": "更新依赖版本的场景",
  "level": 3
}, {
  "value": "ohpm install命令带--target_path选项时依赖冲突处理",
  "id": "ohpm-install命令带--target_path选项时依赖冲突处理",
  "level": 3
}, {
  "value": "限制条件说明",
  "id": "限制条件说明",
  "level": 3
}, {
  "value": "resolve_conflict_strict",
  "id": "resolve_conflict_strict",
  "level": 2
}, {
  "value": "严格模式冲突决策算法",
  "id": "严格模式冲突决策算法",
  "level": 3
}, {
  "value": "示例",
  "id": "示例",
  "level": 3
}, {
  "value": "crypto_path",
  "id": "crypto_path",
  "level": 2
}, {
  "value": "key_passphrase",
  "id": "key_passphrase",
  "level": 2
}, {
  "value": "AccessToken",
  "id": "accesstoken",
  "level": 2
}, {
  "value": "如何获取AccessToken",
  "id": "如何获取accesstoken",
  "level": 3
}, {
  "value": "如何配置AccessToken",
  "id": "如何配置accesstoken",
  "level": 3
}, {
  "value": "enforce_dependency_key",
  "id": "enforce_dependency_key",
  "level": 2
}, {
  "value": "ensure_dependency_include",
  "id": "ensure_dependency_include",
  "level": 2
}, {
  "value": "示例1",
  "id": "示例1",
  "level": 3
}, {
  "value": "示例2",
  "id": "示例2",
  "level": 3
}, {
  "value": "disallow_nested_package",
  "id": "disallow_nested_package",
  "level": 2
}, {
  "value": "示例",
  "id": "示例-1",
  "level": 3
}, {
  "value": "odm_r2_project_root",
  "id": "odm_r2_project_root",
  "level": 2
}, {
  "value": "compability_log_level",
  "id": "compability_log_level",
  "level": 2
}, {
  "value": "开关配置项说明",
  "id": "开关配置项说明",
  "level": 3
}, {
  "value": "enable_unified_lockfile",
  "id": "enable_unified_lockfile",
  "level": 2
}, {
  "value": "enable_boost_extraction_speed",
  "id": "enable_boost_extraction_speed",
  "level": 2
}, {
  "value": "enable_lock_inner_pkg_version",
  "id": "enable_lock_inner_pkg_version",
  "level": 2
}, {
  "value": "case_sensitive_check",
  "id": "case_sensitive_check",
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
    ol: "ol",
    p: "p",
    pre: "pre",
    "pre-release": "pre-release",
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
  }, _component0 = _components["pre-release"];
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ohpmrc",
        children: "ohpmrc"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohpm配置文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "描述",
      children: "描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohpm从命令行和.ohpmrc文件中获取其配置内容。ohpm config命令可用于修改用户级.ohpmrc文件的内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文件",
      children: "文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "项目级配置文件：/path/to/my/project/.ohpmrc"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户级配置文件：~/.ohpm/.ohpmrc"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "所有 ohpm 配置文件均是 ini 格式：<key>= <value> 的参数列表"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(700438)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "命令行工具会优先读取项目级的配置文件。如果缺少某些配置项，将从用户级配置文件中读取缺失的配置项信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在工程任意子目录下执行ohpm命令，都可以读取到项目级的.ohpmrc配置。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注释",
      children: "注释"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: ".ohpmrc 文件中以\"#\"或\";\"字符为注释符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "更新配置",
      children: "更新配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行如下命令可设置用户级配置："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm config set key value\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "默认配置项",
      children: "默认配置项"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "配置项"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "字段名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "字段说明"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "字段类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "默认值"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "备注"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "仓库设置"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载仓库"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "https://ohpm.openharmony.cn/ohpm/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持配置多个仓库地址，以英文逗号分隔。系统将按照配置的先后顺序依次检索这些仓库，直到成功下载目标包。例如：当需要下载包a时，会优先从第一个配置的仓库地址查找，若未找到则自动尝试下一个仓库，依此类推。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@group:registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定仓库"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据group指定组织的仓库地址。支持配置多个仓库地址，以英文逗号间隔，且优先级大于registry配置，系统将按照配置的先后顺序依次检索这些仓库，直到成功下载目标包。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "发布设置"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "publish_registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发布仓库"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "https://ohpm.openharmony.cn/ohpm/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置发布的仓库地址，仅支持配置一个仓库地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "publish_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户发布号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户发布号，用来发布三方库，全局唯一。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "路径设置"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓存路径"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~/.ohpm/cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "key_path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "私钥路径"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "利用ssh-keygen工具生成的私钥的放置路径地址。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "crypto_path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加密组件路径"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["加密组件路径地址。详情请见：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section18322038185010",
              children: "crypto_path"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "网络设置"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "no_proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不使用proxy代理"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置不使用代理的仓库地址，可配置多个，以英文逗号间隔；值可以是域名或者ip，支持二级域名通配符*（例如：*.huawei.com）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "http_proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "http代理"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持用户名和密码的网络代理，特殊字符需要转义。示例：", (0,jsx_runtime.jsx)(_components.code, {
              children: "http://proxy\\_server:port、http://username:password@proxy\\_server:port"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "https_proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "https代理"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持用户名和密码的网络代理，特殊字符需要转义。示例：", (0,jsx_runtime.jsx)(_components.code, {
              children: "https://proxy\\_server:port、http://username:password@proxy\\_server:port"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "strict_ssl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ssl校验"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认值为true，校验https证书；若配置为false，则不校验https证书。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ca_files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ca证书路径"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["strict_ssl=true时校验服务端证书需要的ca证书放置路径，可以放置多个证书路径，以英文逗号间隔。详情请见：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#zh-cn_topic_0000001792216397_ca%E8%AF%81%E4%B9%A6%E8%8E%B7%E5%8F%96%E5%8F%8A%E9%85%8D%E7%BD%AE",
              children: "CA证书获取及配置"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fetch_timeout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求超时时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值范围：[10000，360000]，单位为毫秒。如果设置的fetch_timeout值不在取值范围内，则默认为：60000。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "并发设置"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "max_concurrent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最大并发量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值范围：[1, 200]，设置每个模块在安装时允许的最大并发量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "retry_times"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "出错重试次数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值范围：[0, 5], 针对白名单内的异常，程序会按配置重试指定次数，白名单有：   - ECONNRESET：连接被对端重置 - ECONNREFUSED：连接被服务器拒绝 - ETIMEDOUT：连接超时 - RESPONSETIMEOUT：响应超时 - TARBADARCHIVE：包格式异常"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "retry_interval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "出错重试间隔时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值范围：[1000, 60000], 单位毫秒。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "依赖冲突设置"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "resolve_conflict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启自动解决依赖版本冲突功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["默认开启。当设置为true或缺省时，ohpm会自动处理依赖版本冲突，详情请见：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section368717475562",
              children: "resolve_conflict"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resolve_conflict_strict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启严格模式依赖冲突处理功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["默认关闭。当设置为true时，ohpm会按照严格模式处理依赖版本冲突，详情请见：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section1942983310492",
              children: "resolve_conflict_strict"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "安全设置"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "key_passphrase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已加密的私钥密码"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["默认为空，使用加密命令将私钥密码加密，执行涉及公私钥的认证命令时，自动使用key_passphrase对私钥文件进行解密，无需用户手动输入私钥密码。详情请见：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section10698175182316",
              children: "key_passphrase"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "其他设置"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "log_level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日志级别"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "info"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可设置日志输出级别，对应级别类型有debug、info、warn、error。详情请见：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section1539817345376",
              children: "log_level"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "install_all"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否安装工程所有模块的依赖"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["默认为true。当设置为true或缺省时，在执行ohpm install、ohpm update、ohpm uninstall时，将会安装工程下所有模块的依赖。详情请见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section1260011476535",
              children: "install_all"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ":_auth和:_read_auth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AccessToken配置项"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ohpm-repo支持使用access token进行认证。详情请见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section74219299467",
              children: "AccessToken"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enforce_dependency_key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启依赖名称校验"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["默认为false。设置为true后，ohpm会校验配置的本地依赖名称与其对应的包名是否一致，若不一致会导致命令执行失败。详情请见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section920325116547",
              children: "enforce_dependency_key"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ensure_dependency_include"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启依赖扫描功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["默认为false。从ohpm 1.7.0开始，在执行ohpm publish命令时，会检查发布包的源码中，静态导入的三方依赖是否都声明在oh-package.json5的dependencies或dynamicDependencies中。若缺少依赖声明且字段设置为false时，会提示相应告警信息；设置为true时，则会使命令执行失败并提示错误信息。详情请见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section1291814578276",
              children: "ensure_dependency_include"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "projectPackageJson:<project_root>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "工程oh-package.json5配置覆盖"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于覆盖工程根目录下oh-package.json5中的配置。   - 配置项名称中的<project_root>表示工程根目录路径（根据实际情况替换为真实的工程根目录路径）。 - 配置项的值为指定的工程级oh-package.json5文件的路径，支持使用相对路径（当使用相对路径时，根路径为<project_root>）。   详情请见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-ohpm-cli/ide-oh-package-json5#section140251819254",
              children: ".ohpmrc中projectPackageJson配置"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "disallow_nested_package"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启包内.har/.tgz依赖  配置路径检测"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["默认为false。设置为true后，在执行prepublish/publish时，会扫描包内是否存在'./'形式配置且后缀为.har/.tgz格式的依赖，如果存在，则会使命令执行失败并提示报错信息。详情见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section1237023983514",
              children: "disallow_nested_package"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "odm_r2_project_root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启overrideDependencyMap中相对路径自动转换功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["默认为false。设置为true后，当存在overrideDependencyMap配置且其配置项对应的配置文件内存在相对路径的依赖配置时，ohpm会基于工程根路径解析来查找这些相对路径。详情见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section136621053184912",
              children: "odm_r2_project_root"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enable_cross_process_lock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启用跨进程锁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认为false。由于oh_modules目录结构限制，ohpm不支持在同一个工程下并行运行多个ohpm install、ohpm update或ohpm uninstall命令，若需要在同一个工程下执行多个ohpm install、ohpm update或ohpm uninstall命令，则必须将该配置设置为true，以保证这多个命令以串行的方式运行。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "compability_log_level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "兼容性字段检测日志等级"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "warn"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["默认为warn。在执行prepublish、publish命令时，ohpm会检测oh-package.json5文件中是否配置了兼容性检测需要的所有字段（'compatibleSdkVersion', 'compatibleSdkType', 'obfuscated', 'nativeComponents'），如果未配置，则会根据日志等级打印提示或报错。详情请见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section96369529419",
              children: "compability_log_level"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "use_stream_threshold_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "流式上传阈值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值范围：[0, 300]，单位mb。当publish三方库的文件体积大于此阈值时将会使用流式上传三方库，如果仓库不存在流式上传接口则自动转为Base64方式上传。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lockfile_stable_order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "oh-package-lock.json5内容稳定排序"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认为false。若设置为true，会确保在oh-package.json5文件未变更时，当前已生成的oh-package-lock.json5各字段内容不变。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enable_unified_lockfile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lockfile合一"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["默认为false。若设置为true，会将所有模块的oh-package-lock.json5文件整合进项目下的oh-package-lock.json5。详情请见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section101671095818",
              children: "enable_unified_lockfile"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enable_boost_extraction_speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件解压提速"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["默认为false。若设置为true，在ohpm安装时，会使用更高效的文件解压方法，该功能当前处于实验阶段，详情请见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section20410165616573",
              children: "enable_boost_extraction_speed"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enable_lock_inner_pkg_version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "依赖内部的.har或.tgz依赖版本锁定"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["默认为true。若设置为false，在ohpm安装时，不会将依赖内部的.har或.tgz子依赖的版本保存至oh-package-lock.json5，详情请见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section1834543398",
              children: "enable_lock_inner_pkg_version"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "case_sensitive_check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "路径大小写敏感检测"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["默认为false。若设置为true，在执行ohpm相关命令时，如果ohpm检测到工程中文件的配置路径和文件的实际路径存在大小写不一致问题时，则会报错提示开发者修改，详情请见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section2045412394117",
              children: "case_sensitive_check"
            }), "。  该配置项仅在Windows环境下生效。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ca证书获取及配置",
      children: "CA证书获取及配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(632374)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CA证书的获取需要区分系统：当从Windows系统浏览器下载的证书仅适用于Windows系统，当从Mac系统浏览器中获取的证书适用于Mac系统和Linux系统。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "windows系统获取ca证书",
      children: "Windows系统获取CA证书"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "依次访问以下证书下载地址，并根据下图操作下载CA证书到本地："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "https://ohpm.openharmony.cn/\nhttps://contentcenter-drcn.dbankcdn.cn/   //该域名用于文件资源下载，访问根路径仅可用于获取CA证书\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["访问", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://ohpm.openharmony.cn/地址，下载证书"
      }), "，请选择保存类型为", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "证书链"
        })
      }), "（访问", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://contentcenter-drcn.dbankcdn.cn/",
        children: "https://contentcenter-drcn.dbankcdn.cn/"
      }), " 执行相同操作）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(245)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1213",
        height: "724"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过访问", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://ohpm.openharmony.cn/地址获取证书openharmony.cn.crt，通过访问https://contentcenter-drcn.dbankcdn.cn/地址获取证书update.hicloud.crt"
      }), "，在 .ohpmrc 文件中配置 ca_files=证书路径1，证书路径2（两个文件均需配置）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ca_files=D:\\_.openharmony.cn.crt,D:\\update.hicloud.crt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mac系统获取ca证书",
      children: "Mac系统获取CA证书"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "依次访问以下证书下载地址，并根据下图操作下载CA证书到本地："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "https://ohpm.openharmony.cn/\nhttps://contentcenter-drcn.dbankcdn.cn/   //该域名用于文件资源下载，访问根路径仅可用于获取CA证书\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["访问", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://ohpm.openharmony.cn/地址，下载证书"
      }), "，请选择保存类型为", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "证书链"
        })
      }), "（访问", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://contentcenter-drcn.dbankcdn.cn/",
        children: "https://contentcenter-drcn.dbankcdn.cn/"
      }), " 执行相同操作）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(581695)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1448",
        height: "955"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过访问", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://ohpm.openharmony.cn/地址获取证书openharmony.cn.pem，通过访问https://contentcenter-drcn.dbankcdn.cn/地址获取证书update.hicloud.pem"
      }), "，在 .ohpmrc 文件中配置 ca_files=证书路径1，证书路径2（两个文件均需配置）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ca_file=/Users/用户名/_.openharmony.cn.pem,/Users/用户名/_.update.hicloud.pem\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "log_level",
      children: "log_level"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可设置ohpm日志输出级别，对应级别类型有debug、info、warn、error，默认为：info。开发者在执行ohpm命令时，不同日志级别的区别和效果如下所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "debug：控制台会打印debug、info、warn、error日志。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(458689)/* ["default"] */.A) + "",
            width: "1285",
            height: "461"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "info：控制台会打印info、warn、error日志。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(162590)/* ["default"] */.A) + "",
            width: "1287",
            height: "269"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "warn：控制台会打印warn、error日志。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(947948)/* ["default"] */.A) + "",
            width: "1292",
            height: "214"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "error：控制台只会打印error日志。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(585429)/* ["default"] */.A) + "",
            width: "1300",
            height: "155"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "install_all",
      children: "install_all"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ohpm客户端1.8.0版本的.ohpmrc中支持install_all配置，用于控制ohpm install，ohpm update，ohpm uninstall的行为，install_all在.ohpmrc文件中设置为true或缺省时："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用ohpm install命令时，将安装工程下所有模块的依赖，与使用ohpm install --all行为一致；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用ohpm update时，将默认更新本模块下依赖并安装工程下所有模块的依赖，与使用ohpm update --all一致；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用ohpm uninstall时，将默认删除本模块下依赖并安装工程下所有模块的依赖，与使用ohpm uninstall --all一致。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "resolve_conflict",
      children: "resolve_conflict"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ohpm客户端1.5.0版本开始支持依赖版本冲突自动解决功能。只需要在.ohpmrc文件中，将resolve_conflict配置为true或缺省，即可开启该功能。依赖冲突的处理策略为：当您的项目同时依赖了某个三方库的不同版本时，ohpm将选择其中的最高版本进行安装。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(239972)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若某个三方库同时存在远程版本和本地版本（本地文件或源码依赖），无论本地版本的版本号是否大于远程版本，ohpm的冲突处理策略都会优先选择本地版本作为待安装的版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "模块内依赖版本冲突",
      children: "模块内依赖版本冲突"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(631992)/* ["default"] */.A) + "",
        width: "716",
        height: "353"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如上图所示的依赖路径中，moduleA 为您正在开发的模块，其直接依赖为 B@1.1，C@1.1。其中 B@1.1 与 C@1.1 分别依赖了 D 的两个版本 D@1.2 与 D@1.3。当您开启了依赖版本冲突自动解决功能，ohpm将会选择 D@1.3 版本作为待安装的版本，最终依赖路径被解析为下图蓝色箭头所指向的路径："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(570184)/* ["default"] */.A) + "",
        width: "710",
        height: "347"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "模块间依赖版本冲突",
      children: "模块间依赖版本冲突"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(430658)/* ["default"] */.A) + "",
        width: "723",
        height: "370"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如上图所示的依赖路径中，moduleA、moduleB 为您同一项目下正在开发的两个模块，其中moduleA 依赖 B@1.1，moduleB 依赖 C@1.1，B@1.1 与 C@1.1 分别依赖了 D 的两个版本 D@1.2 与 D@1.3。当您开启了依赖版本冲突自动解决功能，并且您是使用 ohpm install --all 进行安装时，ohpm将会选择 D@1.3 版本作为待安装的版本，最终依赖路径被解析为下图蓝色箭头所指向的路径："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(351177)/* ["default"] */.A) + "",
        width: "715",
        height: "371"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "更新依赖版本的场景",
      children: "更新依赖版本的场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当您希望将您某个模块的直接依赖更新成另一个版本，如下图所示，您手动将 C@1.1 更新为 C@1.2："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(392478)/* ["default"] */.A) + "",
        width: "716",
        height: "360"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于 C 更新为 C@1.2 后，不再依赖 D，若依赖 D 的版本在更新 C 版本之前已经通过 ohpm 的自动冲突处理机制锁定为 D@1.3 版本，此时 C 版本的升级将不会导致 D 的版本由 D@1.3 回退为 D@1.2，这样可以保证每一次更新都只是在上一次结果上进行影响最小的修改，最终的依赖路径将会被解析为下图蓝色箭头所指向的路径："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(186478)/* ["default"] */.A) + "",
        width: "715",
        height: "347"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于上述场景，如果希望D版本同时也回退至D@1.2版本，则需要在ohpm install之前执行ohpm clean命令清理各模块下的oh-package-lock.json5文件，以消除上一次安装结果的影响。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ohpm-install命令带--target_path选项时依赖冲突处理",
      children: "ohpm install命令带--target_path选项时依赖冲突处理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["target_path下是hvigor在构建时根据目标产物target为各模块自动生成定制的依赖配置文件（oh-package.json5），详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-install#section79331822125611",
        children: "target_path"
      }), "。在生成的oh-package.json5中，依赖的版本部分可能包含targetName，示例：\"version\": \"1.0.0+targetName\"。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["包含targetName信息的版本完整格式为：<major>.<minor>.<patch>[-", (0,jsx_runtime.jsx)(_component0, {
        children: "][+<targetName>]，此时冲突处理规则如下："
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1、<major>.<minor>.<patch>[-", (0,jsx_runtime.jsx)(_component0, {
        children: "]部分的比较规则依然遵循上文各场景所描述的处理规则，即取版本号最大的依赖。"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2、当两个版本<major>.<minor>.<patch>[-", (0,jsx_runtime.jsx)(_component0, {
        children: "]部分一致时，取尾部有[+<targetName>]信息的依赖。"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(604320)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、当两个版本尾部均有[+<targetName>]信息，且targetName不一致时，会根据<target_path>/dependencyMap.json5中targetName是否为空进行区分处理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当targetName空时，打印警告提示。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当targetName有值时，报错提示并中断程序。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、当两个依赖中有一个是本地依赖时，优先取本地依赖；当两个依赖均是本地依赖时，获取本地依赖包内oh-package.json5配置的version再次按照上述规则继续比较。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "限制条件说明",
      children: "限制条件说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若希望解决当前项目所有模块下的依赖版本冲突，请使用ohpm install --all完成依赖安装。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若在执行ohpm update或ohpm uninstall命令后，可能会破坏项目原有的依赖版本冲突处理结果。请额外执行一次ohpm install --all命令，重新处理当前项目所有模块下的依赖版本冲突。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当本地文件（.har或.tgz后缀）依赖之间、本地源码模块依赖之间、本地文件（.har或.tgz后缀）依赖与本地源码模块依赖之间出现冲突时，ohpm自动冲突处理机制会比较该依赖内部oh-package.json5文件中version字段配置的版本号大小，版本号大的将会被安装。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(192012)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如难以感知本地文件或本地源码依赖中的版本号，建议使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-ohpm-cli/ide-oh-package-json5#zh-cn_topic_0000001792256137_overrides",
            children: "overrides"
          }), "来处理冲突。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "resolve_conflict_strict",
      children: "resolve_conflict_strict"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohpm客户端从5.0.9版本，开始支持严格的依赖版本冲突处理机制。在.ohpmrc文件中，将resolve_conflict_strict配置为true开启该功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "严格模式下，当您的项目同时依赖了某个三方库的不同版本时，ohpm将按照严格模式冲突决策算法决策出最符合要求的版本进行安装，当程序不能决策出符合要求的版本时将报错。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "严格模式冲突决策算法",
      children: "严格模式冲突决策算法"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同一依赖，存在一个固定版本（如：1.0.1）、多个范围版本（如：^1.0.0、~1.1.0、>1.0.0等）时，如果该固定版本在所有范围版本交集区间内，则最终安装该固定版本，否则冲突决策失败；"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同一依赖，仅存在多个范围版本时，如果所有范围版本存在交集，则最终安装仓库中存在且在交集区间内的最高版本；若所有范围版本不存在交集区间，则冲突决策失败；"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用同一本地依赖（如：./a.har），依赖存放路径不一致时，冲突决策失败；"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同一依赖，同时存在本地版本（如：./a.har）与远程版本（如：^1.0.0）时，冲突决策失败；"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同一依赖，存在多个固定版本时，冲突决策失败。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(718750)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "2175",
            height: "719"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(716594)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "严格模式下，依赖冲突决策成功时，ohpm会打印被解决冲突的依赖的警告信息，包含：依赖名称、所有冲突的版本、最终安装版本、受影响的模块列表。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["严格模式下，依赖冲突决策失败时，ohpm会打印依赖冲突树并在树上高亮显示解决失败的依赖及版本和所有解决失败的依赖的错误信息，包含：依赖名称、所有冲突的版本。当依赖存在版本冲突时，可以通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-ohpm-cli/ide-oh-package-json5#zh-cn_topic_0000001792256137_overrides",
          children: "overrides"
        }), "配置解决。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将resolve_conflict_strict开关设置为true："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ohpm config set resolve_conflict_strict true\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在AppTest3工程根目录的oh-package.json5中配置依赖@ohos/axios："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"modelVersion\": \"6.1.0\",\n  \"description\": \"Please describe the basic information.\",\n  \"dependencies\": {\n    \"@ohos/axios\": \"2.2.5\"\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在AppTest3工程下entry模块的oh-package.json5中配置依赖@ohos/axios："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"name\": \"entry\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Please describe the basic information.\",\n  \"main\": \"\",\n  \"author\": \"\",\n  \"license\": \"\",\n  \"dependencies\": {\n    \"@ohos/axios\": \"2.2.6\"\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在AppTest3工程下任意目录执行命令：ohpm install --all，根据严格的依赖版本冲突处理规则，此时ohpm会安装失败并打印依赖冲突树，如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(219882)/* ["default"] */.A) + "",
            width: "1048",
            height: "243"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "crypto_path",
      children: "crypto_path"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohpm客户端从5.2.0版本开始，支持对敏感配置项进行加密存储和读取。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "支持加密的敏感配置项"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "配置项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "示例格式"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section10698175182316",
              children: "key_passphrase"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须加密，对应 key_path 的私钥密码"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "key_passphrase=security:xxx"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "http_proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "代理用户名密码部分可加密（username:password替换为密文）"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["http_proxy=", (0,jsx_runtime.jsx)(_components.code, {
              children: "http://security:xxx@proxy:port"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "https_proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "代理用户名密码部分可加密（username:password替换为密文）"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["https_proxy=", (0,jsx_runtime.jsx)(_components.code, {
              children: "https://security:xxx@proxy:port"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section74219299467",
              children: "AccessToken"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仓库认证配置（:_auth 和 :_read_auth）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "//<仓库地址>/:_auth=security:xxx  //<仓库地址>/:_read_auth=security:xxx"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户可通过以下流程实现配置加密："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-config#section1085417514102",
            children: "ohpm config encrypt"
          }), " 命令生成加密组件并对标准输入的数据加密。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在 .ohpmrc 文件中配置 crypto_path 加密组件路径和敏感配置项。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "crypto_path=D:\\path\\to\\crypto_dir\nkey_passphrase=security:xxx\nhttp_proxy=http://security:xxx@proxy:port\nhttps_proxy=https://security:xxx@proxy:port\n//<仓库地址>/:_auth=security:xxx\n//<仓库地址>/:_read_auth=security:xxx\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(562150)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、key_passphrase 配置项必须使用密文格式配置，其余敏感配置项仍兼容明文配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、命令执行时，根据优先级（项目级 > 用户级 .ohpmrc）获取命令所需的敏感配置项后，使用该配置项同层级的 crypto_path 指定的加密组件进行解密。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key_passphrase",
      children: "key_passphrase"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohpm 客户端从5.2.0版本开始，支持在 .ohpmrc 文件中配置 key_passphrase 私钥密码，用于自动解密 key_path 对应的私钥文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "执行 ohpm publish、ohpm unpublish 等需要认证的命令时，系统会自动使用 key_passphrase 解密私钥，无需手动输入密码。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["key_passphrase 必须是通过 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-config#section1085417514102",
          children: "ohpm config encrypt"
        }), " 命令生成的密文。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需同时配置 key_path 私钥文件路径。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["需同时配置 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#section18322038185010",
          children: "crypto_path"
        }), " 加密组件路径，用于运行时解密 key_passphrase。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在项目级或用户级 .ohpmrc 文件中配置，执行 publish 命令，用户无需手动输入密码即可完成推包操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "key_path=:\\path\\to\\key_file\ncrypto_path=D:\\path\\to\\crypto_dir\nkey_passphrase=security:xxx\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "accesstoken",
      children: "AccessToken"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AccessToken是 ohpm-repo 2.1.0版本新引入的认证机制，用户通过ohpm-repo界面生成Token，并将其配置至ohpm客户端配置文件中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在与 ohpm-repo 交互时，客户端会自动附带Token进行身份验证。该Token分两种权限等级："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "只读Token允许执行info和install操作；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "读写Token除了包含只读权限外，还支持publish和unpublish操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每位用户每种权限类型的Token最多可生成10个，首次生成时系统自动复制到剪贴板，后续不再显示完整Token内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "如何获取accesstoken",
      children: "如何获取AccessToken"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前AccessToken仅 ohpm-repo 支持，登录成功后，在ohpm-repo首页的右上角 > 认证管理 > AccessToken页面进行生成。", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(230352)/* ["default"] */.A) + "",
        width: "1854",
        height: "893"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "如何配置accesstoken",
      children: "如何配置AccessToken"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在\".ohpmrc\"文件配置示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "//127.0.0.1:8088/repos/ohpm/:_auth=readWriteToken\n//127.0.0.1:8088/repos/ohpm/:_read_auth=readOnlyToken\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中 ："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "//127.0.0.1:8088/repos/ohpm/ 是ohpm-repo的registry地址去除协议名的部分；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: ":_auth 和 :_read_auth 分别代表配置为读写Token或只读Token，readWriteToken和readOnlyToken代表Token具体的值。ohpm客户端执行info、install操作会优先使用只读Token，如果只读Token不存在才会使用读写Token。ohpm客户端执行publish、unpublish操作时只会使用读写Token。每种Token最多配置三条。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "enforce_dependency_key",
      children: "enforce_dependency_key"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohpm从1.7.0版本开始，支持在.ohpmrc文件中配置enforce_dependency_key，该配置项值为布尔类型，默认为false。将配置设置为true后，ohpm会校验各模块的oh-package.json5中配置的直接依赖中的本地依赖名称与其对应的包名（模块名）是否一致，若不一致会导致依赖安装失败并在错误日志中打印出不一致的依赖名称与其对应的包名（模块名）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在MyApplication工程下存在一个名称为foo的模块，foo模块的oh-package.json5如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"name\": \"foo\",\n  \"version\": \"2.0.0\",\n  \"description\": \"Please describe the basic information.\",\n }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在MyApplication工程下存在另一个名称为bar的模块，且bar模块中依赖了foo模块，bar模块的oh-package.json5如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"name\": \"bar\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Please describe the basic information.\",\n  \"dependencies\": {\n    \"fee\": \"file:../foo\"  \n  },\n }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如上所示，bar模块的oh-package.json5中配置了对foo模块的依赖，并为foo模块起了一个别名为fee。当在.ohpmrc中将enforce_dependency_key配置为true时："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enforce_dependency_key=true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此时在MyApplication下执行ohpm install --all命令将打印如下错误日志，同时会中断命令的执行："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm ERROR: local dependency \"fee\" found in \"D:\\DevecostudioProjects\\MyApplication2\\bar\\oh-package.json5\" does not match the actual name \"foo\" of its oh-package.json5\nohpm ERROR: Install failed, detail: There are some dependency names that are inconsistent with the actual package names.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若没有配置enforce_dependency_key或将其配置为false时，命令将不会被中断，同时上述错误日志的日志级别将会下调为告警日志："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm WARN: local dependency \"fee\" found in \"D:\\DevecostudioProjects\\MyApplication2\\bar\\oh-package.json5\" does not match the actual name \"foo\" of its oh-package.json5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议在.ohpmrc文件中配置enforce_dependency_key为true，禁止以别名的方式配置本地依赖，避免出现如下场景："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于上述示例，在MyApplication下真的存在一个名称为fee的模块，且该模块的版本号小于foo模块，fee模块的oh-package.json5如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"name\": \"fee\",\n  \"version\": \"1.0.0\",  // 小于foo的版本号2.0.0\n  \"description\": \"Please describe the basic information.\",\n }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "且entry模块中同时依赖了fee与bar，entry模块的oh-package.json5依赖配置如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"name\": \"entry\",\n  \"version\": \"1.0.0\",\n  \"dependencies\": {\n    \"fee\": \"file:../fee\",\n    \"bar\": \"file:../bar\"  \n  },\n }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此时在entry的依赖树中，依赖fee存在两个版本：一个别名为fee的foo模块，一个名称为fee的fee模块，若此时开启了", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section368717475562",
        children: "resolve_conflict"
      }), "，由于fee模块的实际版本号为1.0.0要小于foo模块的版本号2.0.0，在执行ohpm install时将只会在entry模块的oh_modules下安装以fee为别名的foo模块，而实际的fee模块则不会被安装，如下图所示："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(396671)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "946",
        height: "139"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在entry的oh_modules下会生成一个名称为fee的软链接，该链接却指向foo模块的实际路径："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(271735)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1828",
        height: "133"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果entry实际希望依赖的是真实的fee模块而不是foo模块，则此时会导致entry无法编译成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(694721)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、从ohpm客户端5.0.7开始，若项目级build-profile.json5文件中strictMode字段下配置了useNormalizedOHMUrl开关且useNormalizedOHMUrl=true，则该配置优先级高于enforce_dependency_key，如果ohpm检测到依赖别名与oh-package.json5中name不一致时，会报错提示并中止程序执行；若未配置useNormalizedOHMUrl或useNormalizedOHMUrl=false时，是否校验别名一致性则根据enforce_dependency_key配置决定。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、项目级build-profile.json5文件中，products节点下任意product字段配置了useNormalizedOHMUrl=true，则ohpm中useNormalizedOHMUrl开关会被设置为true，即ohpm检测到项目中依赖别名与oh-package.json5中name不一致时，会报错提示并中止程序执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ensure_dependency_include",
      children: "ensure_dependency_include"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohpm从1.7.0版本开始，支持在.ohpmrc文件中配置ensure_dependency_include，该配置项值为布尔类型，默认为false。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ohpm prepublish/publish时，ohpm会扫描待发布包的内容，如果代码中import了某个包的内容，但相应的包没有配置在dependencies/dynamicDependencies中，即如果该配置项的值为true，则ohpm会打印错误信息并中断执行；否则，ohpm只会打印告警提示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，test.har包的代码中import了@ohos/hypium包，但test.har的oh-package.json5的dependencies中未配置@ohos/hypium依赖。下面就ensure_dependency_include开关为true/false时ohpm publish的行为进行举例说明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1",
      children: "示例1"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将ensure_dependency_include开关置为false："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ohpm config set ensure_dependency_include false\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "发布test.har包。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ohpm publish test.har\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当ensure_dependency_include=false时，发布完成后将打印告警提示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(737736)/* ["default"] */.A) + "",
            width: "1274",
            height: "563"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2",
      children: "示例2"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将ensure_dependency_include开关置为true："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ohpm config set ensure_dependency_include true\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "发布test.har包。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ohpm publish test.har\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当ensure_dependency_include=true时，发布时将报错。", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(689574)/* ["default"] */.A) + "",
            width: "1270",
            height: "176"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "disallow_nested_package",
      children: "disallow_nested_package"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohpm从1.8.0版本开始，支持在.ohpmrc文件中配置disallow_nested_package，该配置项值为布尔类型，默认为false。在ohpm prepublish/publish时，ohpm会扫描待发布包的dependencies和dynamicDependencies依赖配置，如果依赖配置中存在相对路径或绝对路径配置的.har、.tgz依赖且disallow_nested_package开关为true，则ohpm会报错提示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例-1",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "lib_nested.har包的dependencies中配置了如下依赖："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"dependencies\": {\n    \"liblib_nested.so\": \"file:./src/main/cpp/types/liblib_nested\",\n    \"hsp\": \"./libs/hsp-default.tgz\",\n    \"lib_har\": \"./libs/lib_har.har\"\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将disallow_nested_package 开关置为true。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ohpm config set disallow_nested_package true\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "发布lib_nested.har。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ohpm publish lib_nested.har\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当disallow_nested_package=true时，发布时将报错。", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(120186)/* ["default"] */.A) + "",
            width: "1296",
            height: "264"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "odm_r2_project_root",
      children: "odm_r2_project_root"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "odm_r2_project_root是ohpm客户端1.8.0新增的开关配置，默认为false，可以通过config命令或直接在.ohpmrc文件中修改其值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当该配置为true时，若在overrideDependencyMap中配置的依赖项替换文件中存在以相对路径配置的本地依赖项时，在ohpm运行时会基于工程根路径来查找这些本地依赖项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: ".ohpmrc中开启odm_r2_project_root："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "odm_r2_project_root=true\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "overrideDependencyMap配置示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在工程根目录下的oh_package.json5中增加overrideDependencyMap配置，如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"overrideDependencyMap\": {\n     \"lib1\": \"lib1-override-dep-map.json5\",  \n     \"lib2\": \"lib2-override-dep-map.json5\"\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "依赖项\"lib1\"的依赖项替换文件lib1-override-dep-map.json5示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"dependencies\": {\n    \"@ohos/test\": \"file:./test.har\"\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如上第3步所示，当odm_r2_project_root开关设置为true时，在ohpm运行时会以工程根目录为起点查找\"./test.har\"，比如：工程根路径为：D:\\path\\to\\MyProject，在ohpm运行时解析得到test.har的绝对路径为：D:\\path\\to\\MyProject\\test.har。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "compability_log_level",
      children: "compability_log_level"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohpm客户端从5.0.1开始新增开关配置'compability_log_level'字段，用于控制在缺少兼容性检测需要的字段时ohpm的处理逻辑。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["compability_log_level字段默认赋值为'warn'，可配置的日志等级请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section139481140114517",
        children: "开关配置项说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在执行prepublish、publish命令时，ohpm会检测oh-package.json5文件中是否配置了兼容性检测需要的所有字段（'compatibleSdkVersion', 'compatibleSdkType', 'obfuscated', 'nativeComponents'），详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-ohpm-cli/ide-oh-package-json5#zh-cn_topic_0000001792256137_oh-packagejson5-%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
        children: "模块级oh-package.json5字段说明"
      }), "，下面统称 '兼容性字段'，如果未配置，则会根据日志等级打印提示或报错。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开关配置项说明",
      children: "开关配置项说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "close：关闭功能，不主动检测兼容性字段。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "info：检测到未配置的兼容性字段时，打印info日志。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "warn：检测到未配置的兼容性字段时，打印警告日志。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "error：检测到未配置的兼容性字段时，打印报错提示并中断程序。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "enable_unified_lockfile",
      children: "enable_unified_lockfile"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohpm客户端从5.1.1开始新增开关配置enable_unified_lockfile字段。启用此特性后，ohpm将自动整合项目中所有子模块的oh-package-lock.json5文件，统一生成至项目根目录的oh-package-lock.json5文件中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启用enable_unified_lockfile=true后，项目级统一管理lockfile锁文件，针对模块间存在重复依赖的场景，显著减少ohpm install耗时，优化构建流程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(50023)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启用enable_unified_lockfile=true后，原分散在各模块下的.hsp依赖安装目录将统一迁移至项目根目录。在流水线上开启此特性时，需搭配配套的hvigor使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "enable_boost_extraction_speed",
      children: "enable_boost_extraction_speed"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohpm客户端从5.3.0开始新增开关配置enable_boost_extraction_speed字段。ohpm安装时涉及对.har/.tgz三方包文件的解压和遍历，启用此特性后，将使用高性能方法进行解压和遍历，当工程中存在大文件依赖时，可以显著减少ohpm install耗时。该功能当前处于实验阶段，暂不支持解压包含软链接的三方包文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "enable_lock_inner_pkg_version",
      children: "enable_lock_inner_pkg_version"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohpm客户端从5.3.1开始新增开关配置enable_lock_inner_pkg_version字段。默认为true，若设置为false，在ohpm安装时，不会将依赖内部的.har或.tgz子依赖的版本保存至oh-package-lock.json5，以防oh-package-lock.json5中保存不存在的路径导致二次安装报错。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下图所示，蓝色箭头标识最终要安装的依赖，安装的依赖D@1.0.0来自依赖B@1.0.0（依赖名称和依赖版本相同的依赖会被定性为相同依赖，最终安装哪个由依赖构建先后顺序决定）, 因B@1.0.0并没有安装，但oh-package-lock.json5中锁定了依赖D的版本，在二次安装时会爆出D的依赖路径不存在错误，此时需要将该开关设置为false。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(77036)/* ["default"] */.A) + "",
        width: "815",
        height: "628"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "oh-package-lock.json5示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生成library.har，oh-package.json5如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"name\": \"library\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Please describe the basic information.\",\n  \"author\": \"\",\n  \"license\": \"Apache-2.0\",\n  \"dependencies\": {\n    \"inner\": \"./libs/inner.har\"\n  },\n  \"types\": \"Index.d.ets\",\n  \"artifactType\": \"obfuscation\",\n  \"compatibleSdkVersion\": 21,\n  \"compatibleSdkType\": \"HarmonyOS\",\n  \"obfuscated\": false\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "entry依赖library.har，oh-package.json5如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"name\": \"entry\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Please describe the basic information.\",\n  \"main\": \"\",\n  \"author\": \"\",\n  \"license\": \"\",\n  \"dependencies\": {\n    \"library\": \"./library.har\"\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: ".ohpmrc中配置开关：enable_lock_inner_pkg_version=false，工程任意目录下执行命令：ohpm install --all，此时生成的entry/oh-package-lock.json5中不会锁定内部包inner的版本，如下所示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  ......\n  \"specifiers\": {\n    \"library@library.har\": \"library@library.har\"\n  },\n  \"packages\": {\n    \"library@library.har\": {\n      \"name\": \"library\",\n      \"version\": \"1.0.0\",\n     \n      \"resolved\": \"library.har\",\n      \"registryType\": \"local\",\n      \"dependencies\": {\n        \"inner\": \"./libs/inner.har\"\n      }\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "enable_lock_inner_pkg_version=true时，entry/oh-package-lock.json5结果如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  ......\n  \"specifiers\": {\n    \"inner@../oh_modules/.ohpm/library@85ursk4cfzbgycewlyxweed+cyyeeixxig5mlazoo+g=/oh_modules/library/libs/inner.har\": \"\ninner@../oh_modules/.ohpm/library@c0jkxsxl3amvdd7rr1enrkrejzharxwucdoyc29br+u=/oh_modules/library/libs/inner.har\",\n    \"library@library.har\": \"library@library.har\"\n  },\n  \"packages\": {\n    \"\ninner@../oh_modules/.ohpm/library@c0jkxsxl3amvdd7rr1enrkrejzharxwucdoyc29br+u=/oh_modules/library/libs/inner.har\n\": {\n      \"name\": \"inner\",\n      \"version\": \"1.0.0\",\n      \"resolved\": \"../oh_modules/.ohpm/library@c0jkxsxl3amvdd7rr1enrkrejzharxwucdoyc29br+u=/oh_modules/library/libs/inner.har\" \n      \"registryType\": \"local\"\n    },\n    \"library@library.har\": {\n      \"name\": \"library\",\n      \"version\": \"1.0.0\",\n      \"resolved\": \"library.har\"\n      \"registryType\": \"local\",\n      \"dependencies\": {\n        \"inner\": \"./libs/inner.har\"\n      }\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case_sensitive_check",
      children: "case_sensitive_check"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohpm客户端从6.21.0新增开关配置\"case_sensitive_check\"字段。若设置为true，在执行ohpm相关命令时，如果ohpm检测到工程中文件的配置路径和文件的实际路径存在大小写不一致问题时，则会报错提示开发者修改。该配置项仅在Windows环境下生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "检测范围"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: ".har包、.tgz包、工程中的module作为依赖时的路径。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "prefix、target_path、parameterFile的命令中配置的目录或路径。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "overrides配置项中的本地依赖路径，overrideDependencyMap配置项涉及的配置文件及文件内的本地依赖路径，parameterFile配置文件及文件内的本地依赖路径。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "准备本地har包：test.har，该har包内oh-package.json5中name为：test，将其放置在模块entry的libs目录下。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "entry依赖test.har，则原始依赖路径为：<project_dir>/entry/libs/test.har， entry的oh-package.json5内容如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"name\": \"entry\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Please describe the basic information.\",\n  \"dependencies\": {\n    \"test\": \"./Libs/test.har\"\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行ohpm install，ohpm可检测到test.har的实际路径（<project_dir>/entry/libs/test.har）与配置路径（<project_dir>/entry/Libs/test.har）大小写不一致(配置时libs目录名存在大写字母：'L'，与原始目录名不一致)，此时ohpm会报错提示并中断执行。"
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
245(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753130-d7e0499e53e26c99142d07249487cabb.png");

},
239972(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
230352(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833079-e59d5541a1b1d6d9c58b9e3a05b6e9ee.png");

},
694721(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
581695(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833063-fc1cef7735dd5a2d3b9e8aae82d42912.png");

},
396671(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
689574(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753152-71a42adbfb279d71d171f79beef6bc15.png");

},
219882(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833049-02e033f18e63c3aaa0fc687725c542cd.png");

},
351177(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753128-898f229fc628181c44d72b1bcd509ec6.png");

},
570184(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913128-3f83ed27b79796900da9283003c09e28.png");

},
120186(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753069-27b1918d92df725a61db74454be8f669.png");

},
604320(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

},
77036(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753083-7ec80a5019716c4aae9569396703b273.png");

},
716594(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
50023(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
737736(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833057-bf8db9bda3ea1c658de0e8a3d591715e.png");

},
392478(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753077-1e31966da8da5a978bf26e3a17dcb605.png");

},
631992(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833039-8ac5c36dd0765745a3c5f4d63bc75ff8.png");

},
458689(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753164-1703a7372359279e2a66ef79bcc6f22c.png");

},
186478(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753158-12428c6ce75bf414b30839384fb2d4c8.png");

},
632374(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
947948(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753138-7ec407bed60a81bede0a1e14cdb34809.png");

},
700438(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
192012(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
562150(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
718750(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753091-1c2506cd11ac07085d053b2b193f15d7.png");

},
271735(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753059-9a0e1dda08e547b43779668edce7b66f.png");

},
162590(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833055-2d7adcb231426494866ee03b1cba26ce.png");

},
430658(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913118-a09fda5f90e3905751e021961eb8bc2f.png");

},
585429(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753144-9eff9c6e8aa283afa30de6dac246ea9c.png");

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