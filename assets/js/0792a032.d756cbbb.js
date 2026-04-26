"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["928882"], {
974873(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_appendix_ide_ohpm_version_rules_ide_ohpm_version_rules_md_079_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-appendix-ide-ohpm-version-rules-ide-ohpm-version-rules-md-079.json
var site_docs_ide_appendix_ide_ohpm_version_rules_ide_ohpm_version_rules_md_079_namespaceObject = JSON.parse('{"id":"ide-appendix/ide-ohpm-version-rules/ide-ohpm-version-rules","title":"OHPM版本号规则","description":"ohpm管理的三方包的版本号遵循语义化版本控制（SemVer 2.0.0）规则。","source":"@site/docs/ide-appendix/ide-ohpm-version-rules/ide-ohpm-version-rules.md","sourceDirName":"ide-appendix/ide-ohpm-version-rules","slug":"/ide-appendix/ide-ohpm-version-rules/","permalink":"/harmonyos-docs-site/ide-appendix/ide-ohpm-version-rules/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"OHPM版本号规则","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-version-rules","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"日志上传","permalink":"/harmonyos-docs-site/ide-appendix/ide-log-postback/"},"next":{"title":"pac.json5隐私清单文件","permalink":"/harmonyos-docs-site/ide-appendix/agc-pac/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-appendix/ide-ohpm-version-rules/ide-ohpm-version-rules.md


const frontMatter = {
	title: 'OHPM版本号规则',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-version-rules',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = 'OHPM版本号规则';

const assets = {

};



const toc = [{
  "value": "版本号格式",
  "id": "版本号格式",
  "level": 2
}, {
  "value": "格式约束",
  "id": "格式约束",
  "level": 3
}, {
  "value": "特殊版本号示例",
  "id": "特殊版本号示例",
  "level": 3
}, {
  "value": "版本比较规则",
  "id": "版本比较规则",
  "level": 2
}, {
  "value": "标准版本与先行版本比较规则",
  "id": "标准版本与先行版本比较规则",
  "level": 3
}, {
  "value": "先行版本间比较规则",
  "id": "先行版本间比较规则",
  "level": 3
}, {
  "value": "版本范围操作符",
  "id": "版本范围操作符",
  "level": 2
}, {
  "value": "^（尖号）",
  "id": "尖号",
  "level": 3
}, {
  "value": "~（波浪号）",
  "id": "波浪号",
  "level": 3
}, {
  "value": "-（连字符）/...（省略符）",
  "id": "-连字符省略符",
  "level": 3
}, {
  "value": "大小关系比较（&gt;、&lt;、&gt;=、&lt;=、=）",
  "id": "大小关系比较",
  "level": 3
}, {
  "value": "通配符与逻辑符",
  "id": "通配符与逻辑符",
  "level": 2
}, {
  "value": "x 或 *（通配符）",
  "id": "x-或-通配符",
  "level": 3
}, {
  "value": "空格分割（逻辑与）",
  "id": "空格分割逻辑与",
  "level": 3
}, {
  "value": "||（逻辑或）",
  "id": "逻辑或",
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
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ohpm版本号规则",
        children: "OHPM版本号规则"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ohpm管理的三方包的版本号遵循", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://semver.org/lang/zh-CN/",
        children: "语义化版本控制"
      }), "（SemVer 2.0.0）规则。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "版本号格式",
      children: "版本号格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "版本号格式：主版本号.次版本号.修订号[-先行版本号][+构建信息]， 正例：1.0.0-PRERELEASE+BUILD\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "主版本号（MAJOR）：非负整数，当开发者做了不能向下兼容的代码修改时，必须递增主版本号，同时MINOR和PATCH须归零。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "次版本号（MINOR）：非负整数，当开发者新增功能时必须递增次版本号，同时PATCH须归零。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "修订号（PATCH）：非负整数，当开发者做了程序Bug或漏洞修复时须递增修订号。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "先行版本号（PRERELEASE，可选）：由连字符（-）和点（.）分隔的ASCII字母、数字、连字符组成，禁止使用空格；用于标识尚未稳定的预发布版本（如测试版、候选版），正例：1.0.0-alpha、1.0.0-beta。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "构建信息（BUILD，可选）：由加号（+）和点（.）分隔的ASCII字母、数字、连字符组成，禁止使用空格；不影响版本比较时的优先级，用于记录编译或构建过程中的附加信息（如时间戳），正例：1.0.0+20250415。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "格式约束",
      children: "格式约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "标准版本号：x.y.z，标准版本号只允许存在三位，每一位版本均禁止在前面添加0，正例：1.0.0，反例：01.0.1、1.0.0.0、-1.0.01。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "先行版本：x.y.z-PRERELEASE，PRERELEASE部分按点（.）分隔后的标识符如果是纯数字，则禁止在最前面添加0，正例：1.0.0-beta.10，反例：1.0.0-beta.01。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "空标识符，如：\"1.0.0-\"无效，需至少一个标识符，正例：1.0.0-rc。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "特殊版本号示例",
      children: "特殊版本号示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"0.1.0\" 初始开发版本，API不稳定（主版本号为零（0.y.z）的软件处于开发初始阶段，视为非稳定版本）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"1.0.0\" 首个稳定版，API定型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"1.0.0-beta.1\"主版本升级的预发布版本。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "版本比较规则",
      children: "版本比较规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "版本比较时优先比较标准版本号部分（即：主版本号.次版本号.修订号），优先级为：主版本号 > 次版本号 > 修订号。比较方式如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["按数值逐级比较：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "主版本号不同时，直接比较主版本号，例如：1.0.0 < 2.0.0；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "主版本号相同，比较次版本号，例如：1.1.0 < 1.2.0；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "次版本号相同，比较修订号，例如：1.1.1 < 1.1.2。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当存在缺省字段时，缺失字段视为0，例如：1.2等价于1.2.0、1等价于1.0.0。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "标准版本与先行版本比较规则",
      children: "标准版本与先行版本比较规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "标准版本与先行版本比较方式如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置固定版本比较："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "遵循优先级为主版本号 > 次版本号 > 修订号，当标准版本号不相同时，按照同级版本大小进行比较。例如：1.0.2-snapshot> 1.0.0，可参考示例3。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当标准版本号相同时，先行版本优先级小于标准版本。例如：1.0.0-snapshot < 1.0.0。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置范围版本比较："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当仓库同时存在先行版本和标准版本，配置依赖为标准范围版本如：>=1.0.0 ，此时安装的版本会从标准版本中获取，即安装>=1.0.0的最新标准版本，如果没有>=1.0.0的标准版本，则安装>=1.0.0的先行版本，可参考示例1。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当仓库同时存在先行版本和标准版本，配置依赖为先行范围版本如：>=1.0.0-snapshot ，此时安装的版本会从标准版本中获取，即安装>=1.0.0的最新标准版本，如果没有>=1.0.0的标准版本，则安装>=1.0.0-snapshot的先行版本，可参考示例4和示例5"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当仓库仅存在先行版本时，配置依赖为标准范围版本如：>=1.0.0 ，此时安装的版本会从先行版本中获取，即安装>=1.0.0的最新先行版本，可参考示例2。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当仓库仅存在先行版本时，配置依赖为先行范围版本如：>=1.0.0-snapshot ，此时安装的版本会从先行版本中获取，即安装>=1.0.0-snapshot的最新先行版本，可参考示例6。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 示例1\n> 依赖`liba`在仓库存在的版本有：['1.0.0-snapshot.1', '1.0.0-snapshot.2', '1.0.0', '2.0.0-snapshot.1', '2.0.0-snapshot.2', '2.0.0', '3.0.0-snapshot.1', '3.0.0-snapshot.2']\n> entry模块依赖`liba`，entry的oh-package.json5配置：{\n  \"name\": \"entry\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Please describe the basic information.\",\n  \"main\": \"Index.ets\",\n  \"license\": \"Apache-2.0\",\n  \"dependencies\": {\n    \"liba\": \">=1.0.0\"\n  }\n}\n> ohpm install后安装的`liba`版本为：`2.0.0`\n\n// 示例2\n> 依赖`liba`在仓库存在的版本有：['1.0.0-snapshot.1', '1.0.0-snapshot.2', '2.0.0-snapshot.1', '2.0.0-snapshot.2']\n> entry模块依赖`liba`，entry的oh-package.json5配置：{\n  \"name\": \"entry\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Please describe the basic information.\",\n  \"main\": \"Index.ets\",\n  \"license\": \"Apache-2.0\",\n  \"dependencies\": {\n    \"liba\": \">=1.0.0\"\n  }\n}\n> ohpm install后安装的`liba`版本为：`2.0.0-snapshot.2`\n\n// 示例3\n> 依赖`liba`在仓库存在的版本有：['1.0.0', '1.0.2-snapshot', '2.0.0-snapshot.1', '2.0.0-snapshot.2']\n> entry模块依赖`liba`，entry的oh-package.json5配置：{\n  \"name\": \"entry\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Please describe the basic information.\",\n  \"main\": \"Index.ets\",\n  \"license\": \"Apache-2.0\",\n  \"dependencies\": {\n    \"liba\": \"^1.0.0\"\n  }\n}\n> 工程级配置依赖`liba`，工程级的\noh-package.json5配置：{\n  \"modelVersion\": \"x.0.0\",\n  \"description\": \"Please describe the basic information.\",\n  \"dependencies\": {\n    \"liba\": \"1.0.2-snapshot\"\n  }\n}\n> ohpm install后安装的`liba`版本为：`1.0.2-snapshot`\n\n// 示例4\n> 依赖`liba`在仓库存在的版本有：['1.0.0-snapshot', '1.0.0']\n> entry模块依赖`liba`，entry的oh-package.json5配置：{\n  \"name\": \"entry\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Please describe the basic information.\",\n  \"main\": \"Index.ets\",\n  \"license\": \"Apache-2.0\",\n  \"dependencies\": {\n    \"liba\": \">=1.0.0-snapshot\"\n  }\n}\n> ohpm install后安装的`liba`版本为：`1.0.0`\n\n// 示例5\n> 依赖`liba`在仓库存在的版本有：['0.0.1','1.0.0-snapshot', '1.0.1-snapshot']\n> entry模块依赖`liba`，entry的oh-package.json5配置：{\n  \"name\": \"entry\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Please describe the basic information.\",\n  \"main\": \"Index.ets\",\n  \"license\": \"Apache-2.0\",\n  \"dependencies\": {\n    \"liba\": \">=1.0.0-snapshot\"\n  }\n}\n> ohpm install后安装的`liba`版本为：`1.0.1-snapshot`\n\n// 示例6\n> 依赖`liba`在仓库存在的版本有：['1.0.0-snapshot.1', '1.0.0-snapshot.2', '2.0.0-snapshot.1', '2.0.0-snapshot.2']\n> entry模块依赖`liba`，entry的oh-package.json5配置：{\n  \"name\": \"entry\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Please describe the basic information.\",\n  \"main\": \"Index.ets\",\n  \"license\": \"Apache-2.0\",\n  \"dependencies\": {\n    \"liba\": \">=1.0.0-snapshot\"\n  }\n}\n> ohpm install后安装的`liba`版本为：`2.0.0-snapshot.2`\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "先行版本间比较规则",
      children: "先行版本间比较规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当标准版本部分一致时，版本大小由先行版本号决定；即先行版本号按 \".\" 分割的标识符逐个比较，每个标识符按字符从左到右逐个比较，详细如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "数字标识符按数字比较大小。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "举例：2.0.0-beta.2与2.0.0-beta.11比较，标准版本：\"2.0.0\" 部分一致，大小由先行版本号部分：beta.2和beta.11决定；按 \".\" 分割后，第一段标识符\"beta\"一致，进而比较数字部分：2 < 11，故：2.0.0-beta.2 < 2.0.0-beta.11。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "非数字标识符按ASCII字典序比较大小。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "举例：4.0.0-beta.2与4.0.0-rc.1比较，标准版本：\"4.0.0\" 一致，比较 \"beta.2\" 与 \"rc.1\" 部分，因首个字符字典序：b < r，故：4.0.0-beta.2 < 4.0.0-rc.1。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "数字标识符优先级低于非数字标识符。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "举例：1.0.0-1 < 1.0.0-a。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "标识符数量差异，标识符数量更多优先级更高。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "举例：3.0.0-alpha < 3.0.0-alpha.1。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "多个连接符（-）连接的标识符作为一个整体参与版本比较。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "举例：2.1.0-100-1002与2.1.0-1001-001比较，标准版本部分 \"2.1.0\" 一致，比较 \"100-1002\" 与 \"1001-001\" 部分，从左到右逐字符（按ASCII字典序）比较，在第四位字符时：\"-\" < \"1\"，故：2.1.0-100-1002 < 2.1.0-1001-001。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "版本范围操作符",
      children: "版本范围操作符"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "尖号",
      children: "^（尖号）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用^（插入符）会将要安装或升级的版本的主版本号固定，最高允许升级到主版本下的最新版本。当主版本号为0时，将固定从左往右的第一位非零版本；适用场景：希望自动获取当前主版本下的最新版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ^使用示例\n^1.2.301 等价于：1.2.301 <= 版本 < 2.0.0。 // 固定主版本号：1不变\n^0.2.301 等价于：0.2.301 <= 版本 < 0.3.0。 // 固定从左往右的第一位非零版本，即次版本号：2不变\n^0.0.301 等价于：0.0.301 <= 版本 < 0.0.302。// 固定从左往右的第一位非零版本，即修订号：301不变\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从OHPM v5.0.11即DevEco Studio 5.0.7.210开始，^（插入符）的含义始终为固定主版本，不再固定从左往右的第一位非零版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ^语义统一后示例\n^1.2.301 等价于：1.2.301 <= 版本 < 2.0.0 // 固定主版本号：1不变\n^0.2.301 等价于：0.2.301 <= 版本 < 1.0.0 // 固定主版本号：0不变\n^0.0.301 等价于：0.0.301 <= 版本 < 1.0.0 // 固定主版本号：0不变\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "波浪号",
      children: "~（波浪号）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用~（波浪符）会将要安装或升级的版本的主版本号、次版本号固定，最高允许升级到主版本号.次版本号下的最新版本；适用场景：希望只接受修订号更新，不自动升级主版本号和次版本号。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ~使用示例\n~1.2.301 等价于：1.2.301 <= 版本 < 1.3.0 // 固定主版本号.次版本号：1.2不变\n~1.2 等价于： ~1.2.0` 等价于：1.2.0 <= 版本 < 1.3.0 // 固定主版本号.次版本号：1.2不变\n~1 等价于： ~1.x` 等价于：1.0.0 <= 版本 < 2.0.0-0 // 固定主版本号：1不变（特殊）\n~0.10.100 等价于：0.10.100 <= 版本 < 0.11.0 // 固定主版本号.次版本号：0.10不变\n~0.0 等价于：0.0.0 <= 版本 < 0.1.0 // 固定主版本号.次版本号：0.0不变\n~0 等价于：0.x 等价于：0.0.0 <= 版本 < 1.0.0-0 // 固定主版本号：0不变（特殊）\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-连字符省略符",
      children: "-（连字符）/...（省略符）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于明确声明一个连续的版本区间，包含起始和结束版本（前后需要有空格）；\"-\"在跨工具链支持上更全面，应优先选用；适用场景：希望定义闭区间并简化表达式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 使用示例\n1.0.1 - 2.1.1 等价于：1.0.1 <= 版本 <= 2.1.1\n1.0.1 ... 2.1.1 等价于：1.0.1 <= 版本 <= 2.1.1\n// 左侧版本存在版本缺省时示例\n1.1 - 2.1.0 等价于 1.1.0 <= 版本 <= 2.1.0\n// 右侧版本存在版本缺省时示例\n1.1.0 - 2.1 等价于 1.1.0 <= 版本 < 2.2.0-0 \n1.1.0 - 2 等价于 1.1.0 <= 版本 < 3.0.0-0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "大小关系比较",
      children: "大小关系比较（>、<、>=、<=、=）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按字面意义匹配版本范围，正例：\">1.2.0\" 表示版本需高于1.2.0及以下版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通配符与逻辑符",
      children: "通配符与逻辑符"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "x-或-通配符",
      children: "x 或 *（通配符）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配任意值，通常用于省略字段， 简化范围定义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 通配符使用示例\n1.x 等价于：1.0.0 <= 版本 < 2.0.0 等价于：^1.0.0\n1.1.x 等价于：1.1.0 <= 版本 < 1.2.0 等价于：~1.1.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "空格分割逻辑与",
      children: "空格分割（逻辑与）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多个范围条件使用空格分割时，默认以逻辑与（&&）连接，需同时满足所有条件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 空格使用示例\n>=1.0.101 <2.0.100 等价于：1.0.101 <= 版本 < 2.0.100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "逻辑或",
      children: "||（逻辑或）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组合多个范围版本，满足任意一个即可。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 逻辑或使用示例\n^1.0.101 || ^2.0.100 等价于：1.0.101 <= 版本 < 2.0.0 或 2.0.100 <= 版本 < 3.0.0\n"
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