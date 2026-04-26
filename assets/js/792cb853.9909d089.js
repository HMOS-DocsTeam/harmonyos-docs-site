"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["355949"], {
835696(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_debugging_commands_restool_restool_md_792_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-debugging-commands-restool-restool-md-792.json
var site_docs_system_debug_optimize_debugging_commands_restool_restool_md_792_namespaceObject = JSON.parse('{"id":"system-debug-optimize/debugging-commands/restool/restool","title":"restool工具","description":"简介","source":"@site/docs/system-debug-optimize/debugging-commands/restool/restool.md","sourceDirName":"system-debug-optimize/debugging-commands/restool","slug":"/system-debug-optimize/debugging-commands/restool/","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/restool/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"restool工具","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restool","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"edm工具","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/edm-tool/"},"next":{"title":"param工具","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/param-tool/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/debugging-commands/restool/restool.md


const frontMatter = {
	title: 'restool工具',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restool',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'restool工具';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "参数说明",
  "id": "参数说明",
  "level": 2
}, {
  "value": "restool支持的命令选项",
  "id": "restool支持的命令选项",
  "level": 3
}, {
  "value": "restool支持的子命令",
  "id": "restool支持的子命令",
  "level": 3
}, {
  "value": "使用实例",
  "id": "使用实例",
  "level": 2
}, {
  "value": "编译资源",
  "id": "编译资源",
  "level": 3
}, {
  "value": "固定资源ID",
  "id": "固定资源id",
  "level": 3
}, {
  "value": "restool工具错误码",
  "id": "restool工具错误码",
  "level": 2
}, {
  "value": "11201001 加载依赖库失败",
  "id": "11201001-加载依赖库失败",
  "level": 3
}, {
  "value": "11203001 JSON文件打开失败",
  "id": "11203001-json文件打开失败",
  "level": 3
}, {
  "value": "11203002 JSON文件解析失败",
  "id": "11203002-json文件解析失败",
  "level": 3
}, {
  "value": "11203003 JSON节点的类型与预期不匹配",
  "id": "11203003-json节点的类型与预期不匹配",
  "level": 3
}, {
  "value": "11203004 JSON中缺少必需节点",
  "id": "11203004-json中缺少必需节点",
  "level": 3
}, {
  "value": "11203005 JSON中存在空object或空数组",
  "id": "11203005-json中存在空object或空数组",
  "level": 3
}, {
  "value": "11203006 JSON中包含多个子节点",
  "id": "11203006-json中包含多个子节点",
  "level": 3
}, {
  "value": "11203007 无效的JSON节点名称",
  "id": "11203007-无效的json节点名称",
  "level": 3
}, {
  "value": "11204001 创建文件失败",
  "id": "11204001-创建文件失败",
  "level": 3
}, {
  "value": "11204003 删除文件失败",
  "id": "11204003-删除文件失败",
  "level": 3
}, {
  "value": "11204004 拷贝文件失败",
  "id": "11204004-拷贝文件失败",
  "level": 3
}, {
  "value": "11204005 打开文件失败",
  "id": "11204005-打开文件失败",
  "level": 3
}, {
  "value": "11204006 读取文件失败",
  "id": "11204006-读取文件失败",
  "level": 3
}, {
  "value": "11210001 未知命令选项",
  "id": "11210001-未知命令选项",
  "level": 3
}, {
  "value": "11210002 选项缺少必需参数",
  "id": "11210002-选项缺少必需参数",
  "level": 3
}, {
  "value": "11210003 无效参数",
  "id": "11210003-无效参数",
  "level": 3
}, {
  "value": "11210004 无效的输入路径",
  "id": "11210004-无效的输入路径",
  "level": 3
}, {
  "value": "11210005 重复的输入路径",
  "id": "11210005-重复的输入路径",
  "level": 3
}, {
  "value": "11210006 包名存在冲突",
  "id": "11210006-包名存在冲突",
  "level": 3
}, {
  "value": "11210007 无效的输出路径",
  "id": "11210007-无效的输出路径",
  "level": 3
}, {
  "value": "11210008 输出路径存在冲突",
  "id": "11210008-输出路径存在冲突",
  "level": 3
}, {
  "value": "11210009 重复的资源头文件路径",
  "id": "11210009-重复的资源头文件路径",
  "level": 3
}, {
  "value": "11210010 模块名称存在冲突",
  "id": "11210010-模块名称存在冲突",
  "level": 3
}, {
  "value": "11210011 重复的模块名称",
  "id": "11210011-重复的模块名称",
  "level": 3
}, {
  "value": "11210012 应用配置文件存在冲突",
  "id": "11210012-应用配置文件存在冲突",
  "level": 3
}, {
  "value": "11210013 无效的资源起始id",
  "id": "11210013-无效的资源起始id",
  "level": 3
}, {
  "value": "11210014 重复的增量资源文件路径",
  "id": "11210014-重复的增量资源文件路径",
  "level": 3
}, {
  "value": "11210015 target-config存在冲突",
  "id": "11210015-target-config存在冲突",
  "level": 3
}, {
  "value": "11210016 无效的target-config",
  "id": "11210016-无效的target-config",
  "level": 3
}, {
  "value": "11210017 无效的系统资源id_defined.json路径",
  "id": "11210017-无效的系统资源id_definedjson路径",
  "level": 3
}, {
  "value": "11210018 重复的系统资源id_defined.json路径",
  "id": "11210018-重复的系统资源id_definedjson路径",
  "level": 3
}, {
  "value": "11210019 compressed-config存在冲突",
  "id": "11210019-compressed-config存在冲突",
  "level": 3
}, {
  "value": "11210020 参数非ASCII值",
  "id": "11210020-参数非ascii值",
  "level": 3
}, {
  "value": "11210021 选项之间存在互斥",
  "id": "11210021-选项之间存在互斥",
  "level": 3
}, {
  "value": "11210022 包名为空",
  "id": "11210022-包名为空",
  "level": 3
}, {
  "value": "11210023 资源头文件路径为空",
  "id": "11210023-资源头文件路径为空",
  "level": 3
}, {
  "value": "11210024 dump命令缺少HAP包路径",
  "id": "11210024-dump命令缺少hap包路径",
  "level": 3
}, {
  "value": "11210025 dump命令指定的HAP包路径无效",
  "id": "11210025-dump命令指定的hap包路径无效",
  "level": 3
}, {
  "value": "11210026 无效的子线程数量",
  "id": "11210026-无效的子线程数量",
  "level": 3
}, {
  "value": "11211001 输出路径已存在",
  "id": "11211001-输出路径已存在",
  "level": 3
}, {
  "value": "11211002 缺少模块配置文件路径",
  "id": "11211002-缺少模块配置文件路径",
  "level": 3
}, {
  "value": "11211003 无效的模块类型",
  "id": "11211003-无效的模块类型",
  "level": 3
}, {
  "value": "11211004 资源起始id与id_defined.json存在冲突",
  "id": "11211004-资源起始id与id_definedjson存在冲突",
  "level": 3
}, {
  "value": "11211007 id_defined.json中的资源类型无效",
  "id": "11211007-id_definedjson中的资源类型无效",
  "level": 3
}, {
  "value": "11211008 id_defined.json中的资源id无效",
  "id": "11211008-id_definedjson中的资源id无效",
  "level": 3
}, {
  "value": "11211012 id_defined.json定义了重复的id",
  "id": "11211012-id_definedjson定义了重复的id",
  "level": 3
}, {
  "value": "11211014 错误的模块名称",
  "id": "11211014-错误的模块名称",
  "level": 3
}, {
  "value": "11211101 无效的资源文件",
  "id": "11211101-无效的资源文件",
  "level": 3
}, {
  "value": "11211103 无效的限定词目录",
  "id": "11211103-无效的限定词目录",
  "level": 3
}, {
  "value": "11211104 无效的资源组目录",
  "id": "11211104-无效的资源组目录",
  "level": 3
}, {
  "value": "11211106 无效的翻译状态",
  "id": "11211106-无效的翻译状态",
  "level": 3
}, {
  "value": "11211107 不支持的element资源类型",
  "id": "11211107-不支持的element资源类型",
  "level": 3
}, {
  "value": "11211108 无效的颜色值",
  "id": "11211108-无效的颜色值",
  "level": 3
}, {
  "value": "11211109 无效的资源引用",
  "id": "11211109-无效的资源引用",
  "level": 3
}, {
  "value": "11211110 theme资源的parent为空",
  "id": "11211110-theme资源的parent为空",
  "level": 3
}, {
  "value": "11211111 数组类型的资源超长",
  "id": "11211111-数组类型的资源超长",
  "level": 3
}, {
  "value": "11211112 无效的单复数资源类别",
  "id": "11211112-无效的单复数资源类别",
  "level": 3
}, {
  "value": "11211113 单复数资源的类别重复",
  "id": "11211113-单复数资源的类别重复",
  "level": 3
}, {
  "value": "11211114 单复数资源缺少other类别",
  "id": "11211114-单复数资源缺少other类别",
  "level": 3
}, {
  "value": "11211115 无效的symbol资源",
  "id": "11211115-无效的symbol资源",
  "level": 3
}, {
  "value": "11211116 无效的资源名称",
  "id": "11211116-无效的资源名称",
  "level": 3
}, {
  "value": "11211117 资源重复定义",
  "id": "11211117-资源重复定义",
  "level": 3
}, {
  "value": "11211118 资源id超过最大值",
  "id": "11211118-资源id超过最大值",
  "level": 3
}, {
  "value": "11211120 引用的资源未定义",
  "id": "11211120-引用的资源未定义",
  "level": 3
}, {
  "value": "11211124 解析resources.index文件失败",
  "id": "11211124-解析resourcesindex文件失败",
  "level": 3
}, {
  "value": "11212001 解析HAP包错误",
  "id": "11212001-解析hap包错误",
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
    ol: "ol",
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
        id: "restool工具",
        children: "restool工具"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["restool是一种应用工程资源编译工具，通过编译资源文件创建资源索引、解析资源，开发者可以调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-arkts/js-apis-resource-manager/js-apis-resource-manager",
        children: "资源管理接口"
      }), "获取到对应资源。restool工具保存在sdk安装目录下的toolchains子目录。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "参数说明",
      children: "参数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "restool支持的命令选项",
      children: "restool支持的命令选项"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可缺省"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否存在入参"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-i/--inputPath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "带参数"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定需要构建的资源目录或者资源中间件。  在资源目录中支持指定一个编译好的HAP/HSP资源目录（解压态），在此HAP/HSP的基础上完成叠加编译。  具体可参考如下", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%BC%96%E8%AF%91%E8%B5%84%E6%BA%90",
              children: "编译资源命令"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-j/--json"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "带参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定config.json或者module.json文件路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-o/--outputPath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "带参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定已编译资源的输出路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p/--packageName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "带参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定编译资源的bundle名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-r/--resHeader"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "带参数"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定资源的头文件生成路径，文件内容为资源名称与资源ID的映射表，支持4种格式：“.txt”、“.js”、“.h”、“.ts”。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  - “.txt”、“.js”、“.h”格式的文件包含-i指定的所有资源目录下的资源映射表。  - 从API version 23开始，支持“.ts”格式，文件内容仅包含-i指定的HAR编译产物的资源目录下的资源映射表。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-e/--startId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "带参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定生成资源的起始ID值，例如：0x01000000,范围[0x01000000, 0x06FFFFFF),[0x08000000, 0xFFFFFFFF)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-f/--forceWrite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不带参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果输出路径已经存在。强制删除，重新生成。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h/--help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不带参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查看工具帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-m/--modules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "带参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多模块联合编译时，指定多个模块名。用“,”连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-x/--append"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "带参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定生成中间文件的资源目录或单个资源路径。同一个命令可以多次指定。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-z/--combine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不带参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "针对资源中间文件目录，生成编译结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-l/--fileList"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "带参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定命令选项的集合json文件，例如：resConfig.json。详细格式请查看下方-l/--fileList参数说明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-v/--version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不带参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查看工具版本号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--ids"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "带参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定生成id_defined.json的输出目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--defined-ids"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "带参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定id_defined.json文件路径，一般都是通过--ids生成。  id_defined.json包含资源类型、名称及其ID的列表。  开发者可以自定义id_defined.json中的资源ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--dependEntry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "带参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FA模型下单独编译feature时，指定entry模块的编译结果目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--icon-check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不带参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启icon和startWindowIcon的PNG图片校验功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--compressed-config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "带参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定需要进行纹理压缩的json配置文件。例如：opt-compression.json，json配置文件的详细格式请查看下方--compressed-config参数说明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--thread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "带参数"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定资源编译时开启的子线程数量。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 18开始，支持该选项。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--target-config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "带参数"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["与“-i”命令同时使用，支持选择编译。  具体可参考如下", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "target-config参数说明"
              })
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--ignored-file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "带参数"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定资源文件和资源目录的忽略规则，格式为正则表达式，多个规则之间以“:”分隔。文件、目录的名称与正则表达式匹配的会被忽略。  例如：“.git:.svn”可以忽略所有名称为“.git”、“.svn”的文件和目录。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 19开始，支持该选项。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--ignored-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "带参数"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定资源文件和资源目录的忽略规则，格式为正则表达式，多个规则之间以“:”分隔。文件、目录的名称或路径与正则表达式匹配的会被忽略。  例如：“.+/rawfile/.git:.svn”中第一个正则包含指定路径“.+/rawfile/”，可以忽略rawfile目录下的“.git”文件和目录，不会忽略其他目录下的“.git”文件和目录；第二个规则不包含任何指定路径，可以忽略所有名称为“.svn”的文件和目录。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 23开始，支持该选项。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "target-config参数说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持参数配置类型：MccMnc、Locale、Orientation、Device、ColorMode、Density。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数格式说明：配置之间用“;”分割，配置中的值用“[]”封装，并使用“,”分割。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MccMnc匹配规则：Mcc（国家码）必须相同；Mnc（网络码）不存在时默认匹配，否则Mnc须相同才匹配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Locale匹配规则：Locale匹配需满足以下三条规则。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、语言须相同。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、脚本（文字）不存在时默认匹配，否则必须相同。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3、国家或地区不存在时默认匹配，否则必须相同。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数举例说明：Locale[zh_CN,en_US];Device[phone]，该参数过滤其他语言，保留能匹配上zh_CN和en_US的语言；过滤其他设备，保留phone；其他参数（如MccMnc、Orientation等）配置不过滤均保留。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "-l/--fileList参数说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于指定命令选项集合的json文件，json文件包含的字段与命令选项的对应关系如下。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "命令选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "configPath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-j/--json"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请参考-j/--json的说明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "packageName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-p/--packageName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请参考-p/--packageName的说明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-o/--outputPath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请参考-o/--outputPath的说明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-e/--startId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请参考-e/--startId的说明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "moduleNames"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-m/--modules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请参考-o/--outputPath的说明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ResourceTable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-r/--resHeader"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可以包含多个路径，相当于多次指定-r/--resHeader。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "applicationResource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-i/--inputPath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定AppScope的资源目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "moduleResources"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-i/--inputPath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定当前模块的资源目录，可以包含多个目录，相当于多次指定-i/--inputPath。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-i/--inputPath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定依赖模块的资源目录，可以包含多个目录，相当于多次指定-i/--inputPath。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "entryCompiledResource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--dependEntry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请参考--dependEntry的说明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iconCheck"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--icon-check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否启用icon和startWindowIcon的PNG图片校验功能。  - true：启用。  - false（缺省默认值）：不启用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ids"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--ids"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请参考--ids的说明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "definedIds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--defined-ids"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请参考--defined-ids的说明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--compressed-config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请参考--compressed-config的说明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "thread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--thread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请参考--thread的说明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ignoreResourcePattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--ignored-file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请参考--ignored-file的说明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ignoreResourcePathPattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--ignored-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请参考--ignored-path的说明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "qualifiersConfig"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--target-config"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定选择编译的参数配置，格式为json，支持的字段与--target-config的配置类型一致，字段类型为字符串数组，表示一个配置类型下可以配置多个值。举例说明：{\"Locale\":[\"zh_CN\",\"en_US\"], \"Device\":[\"phone\"]}等同于--target-config的配置Locale[zh_CN,en_US];Device[phone]。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从API version 23开始，支持该字段。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "--compressed-config参数说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在DevEco Studio配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile#section2095319147103",
        children: "纹理压缩"
      }), "的编译配置参数，编译后会在模块的build\\default\\intermediates\\res\\default下生成restool的纹理压缩配置文件opt-compression.json，文件结构如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"context\": {\n    // 纹理压缩库的绝对路径\n    \"extensionPath\": \"xxx\\\\xxx\\\\libimage_transcoder_shared.dll\"\n  },\n  \"compression\": {\n    // 是否对预置media图片资源启用纹理压缩。true：启用，false：不启用。\n    \"media\": {\n      \"enable\": true\n    },\n    // filters是预置media图片资源的过滤配置参数\n    \"filters\": [\n      {\n        // 纹理压缩的方式，type为转换类型，支持\"astc\"、\"sut\"\n        // block为转换扩展参数，决定画质和压缩率，当前仅支持\"4x4\"\n        \"method\": {\n          \"blocks\": \"4x4\",\n          \"type\": \"astc\"\n        },\n        // 需要压缩的media图片资源文件绝对路径\n        \"path\": [\n          \"xxx\\\\MyApplication\\\\entry\\\\src\\\\main\\\\resources\\\\base\\\\media\\\\startIcon.png\",\n          \"xxx\\\\MyApplication\\\\entry\\\\src\\\\main\\\\resources\\\\base\\\\media\\\\icon.png\",\n        ],\n        // 需要过滤的media图片资源文件绝对路径\n        \"exclude_path\": [],\n        // 按大小和分辨率匹配path中的图片资源文件路径，符合条件的文件将被压缩\n        \"rules_origin\": {\n          // 二维数组，数组中每个元素表示一个大小范围，单位为字节\n          \"size\": [\n            [\n              0,\n              10485760\n            ]\n          ],\n          // 二维数组，数组中每个元素表示一个分辨率范围，如下表示分辨率从0x0到1024x1024\n          \"resolution\": [\n            [\n              {\n                \"height\": 0,\n                \"width\": 0\n              },\n              {\n                \"height\": 1024,\n                \"width\": 1024\n              }\n            ]\n          ]\n        },\n        // 按大小和分辨率匹配exclude_path中的图片资源文件，符合条件的文件将被过滤\n        \"rules_exclude\": {\n          \"size\": [\n            [\n              0,\n              1048576\n            ]\n          ],\n          \"resolution\": [\n            [\n              {\n                \"height\": 0,\n                \"width\": 0\n              },\n              {\n                \"height\": 64,\n                \"width\": 64\n              }\n            ]\n          ]\n        }\n      }\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "restool支持的子命令",
      children: "restool支持的子命令"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dump"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以json的格式输出HAP包中resource的内容。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "dump命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "restool dump [-h] [config] filePath\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dump命令参数列表："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可缺省"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否存在入参"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不带参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不带参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只打印HAP包中资源的限定词信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 打印HAP包中所有的资源信息\nrestool dump entry.hap\n# 打印HAP包中资源的限定词信息\nrestool dump config entry.hap\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用实例",
      children: "使用实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，entry目录结构如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "entry/src/main\n|    |----resource\n|    |    |----base\n|    |    |    |----element\n|    |    |    |----media\n|    |    |    |----profile\n|    |    |----rawfile\n|    |    |----resfile\n|    |----config.json/module.json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "编译资源",
      children: "编译资源"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译资源的方式有三种，分别是全量资源编译、增量资源编译和叠加资源编译。其中增量编译仅预览模式可用，用于预览开发阶段的组件效果；全量编译用于构建工程的资源文件；叠加编译支持将工程中的资源叠加进已有的HAP模板资源中，复用已编译的资源项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、全量资源编译，命令如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "restool -i entry/src/main -j entry/src/main/module.json -p com.ohos.demo -o out -r out/ResourceTable.txt -f\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、增量资源编译，具体步骤如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤一：生成资源中间件，命令如下:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "restool -x entry/src/main/resource -o out\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤二：编译资源中间件，命令如下:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "restool -i out1 -i out2 -o out -p com.ohos.demo -r out/ResourceTable.txt -j entry/src/main/module.json -f -z\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3、叠加资源编译，命令如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# hapResource为解压后的HAP包路径\nrestool -i entry/src/main -i hapResource -j entry/src/main/module.json -p com.ohos.demo -o out -r out/ResourceTable.txt -f\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "固定资源id",
      children: "固定资源ID"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "固定资源ID，具体步骤如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤一：创建id_defined.json文件。创建方式有两种，分别是通过命令行和自定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "方式一：通过命令行生成此文件，命令如下："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "restool -i entry/src/main -j entry/src/main/module.json -p com.ohos.demo -o out -r out/ResourceTable.txt --ids out -f\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "方式二：自定义文件，文件名必须是id_defined.json，文件内容如下："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"record\" :\n    [\n        {\n            \"id\" : \"0x01000000\", // 资源需要固定的ID值\n            \"name\" : \"app_name\", // 资源名称\n            \"type\" : \"string\" // 资源类型\n        }\n    ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤二：完成资源ID固定。完成固定的方式有两种，通过命令一完成固定或者将自定义的id_defined.json放在resource/base/element/目录下后通过命令二完成固定。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "命令一："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "restool -i entry/src/main -j entry/src/main/module.json -p com.ohos.demo -o out1 -r out1/ResourceTable.txt --defined-ids out/id_defined.json -f\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "命令二："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "restool -i entry/src/main -j entry/src/main/module.json -p com.ohos.demo -o out1 -r out1/ResourceTable.txt  -f\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "restool工具错误码",
      children: "restool工具错误码"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11201001-加载依赖库失败",
      children: "11201001 加载依赖库失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to load the library 'xxx.dll'."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载依赖库失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "依赖库路径错误或路径无访问权限。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "三方依赖库未安装，或路径错误，或路径无访问权限。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "出现Windows系统报错，由于在用户环境变量和系统环境变量中，排在xxx.dll路径之前的路径文件无法被访问，导致加载依赖库时搜索环境变量错误。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查依赖库路径是否准确且有访问权限。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "按照错误信息提示安装缺失的三方依赖库，并保证三方依赖库路径准确且有访问权限。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将SDK下的xxx/HarmonyOS/previewer/common/bin路径及依赖库所在路径添加至环境变量Path的前两行，两者先后顺序无限制。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11203001-json文件打开失败",
      children: "11203001 JSON文件打开失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to open the JSON file 'xxx.json'."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSON文件打开失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSON文件路径错误，或无访问权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查JSON文件路径是否准确且有访问权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11203002-json文件解析失败",
      children: "11203002 JSON文件解析失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to parse the JSON file: incorrect format."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSON文件格式错误，解析失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSON文件格式错误，如包含多余的逗号等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["检查JSON文件格式，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.json.org/json-zh.html",
        children: "JSON"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11203003-json节点的类型与预期不匹配",
      children: "11203003 JSON节点的类型与预期不匹配"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The value type of node 'xxx' does not match. Expected type: xxx."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSON中xxx节点的类型错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSON中对应节点的类型错误，如预期类型是string，实际类型为number。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查JSON中xxx节点的类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11203004-json中缺少必需节点",
      children: "11203004 JSON中缺少必需节点"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The required node 'xxx' is missing."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSON中缺少必需的xxx节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSON中没有配置对应的必需节点，如name、value等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查JSON中是否缺少xxx节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11203005-json中存在空object或空数组",
      children: "11203005 JSON中存在空object或空数组"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The array or object node 'xxx' cannot be empty."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSON中xxx节点为空object或空数组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSON中对应节点为空，如object配置为{}，或数组配置为[]。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查JSON中xxx节点是否为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11203006-json中包含多个子节点",
      children: "11203006 JSON中包含多个子节点"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The node 'xxx' in the JSON file can have only one member."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSON中xxx节点仅能包含一个子节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSON中对应节点包含了多个子节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查xxx节点是否仅包含一个子节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11203007-无效的json节点名称",
      children: "11203007 无效的JSON节点名称"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invalid node name 'xxx'. Valid values: [\"boolean\",\"color\",\"float\",\"id\",\"intarray\",\"integer\",\"pattern\",\"plural\",\"strarray\",\"string\",\"symbol\",\"theme\"]."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无效的JSON节点名称xxx。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSON中对应节点的名称错误，不在指定的名称[\"boolean\",\"color\",\"float\",\"id\",\"intarray\",\"integer\",\"pattern\",\"plural\",\"strarray\",\"string\",\"symbol\",\"theme\"]范围内。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查JSON中xxx节点的名称是否在指定的范围内。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11204001-创建文件失败",
      children: "11204001 创建文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to create the directory or file 'xxx'."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建文件失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件路径错误，或无访问权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查文件路径是否准确且有访问权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11204003-删除文件失败",
      children: "11204003 删除文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to delete the directory or file 'xxx'."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除文件失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件路径错误，或无访问权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查文件路径是否准确且有访问权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11204004-拷贝文件失败",
      children: "11204004 拷贝文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to copy the file from 'xxx' to 'xxx'."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "拷贝文件失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件路径错误，或无访问权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查文件路径是否准确且有访问权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11204005-打开文件失败",
      children: "11204005 打开文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to open the file 'xxx'."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打开文件失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件路径错误，或无访问权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查文件路径是否准确且有访问权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11204006-读取文件失败",
      children: "11204006 读取文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to read the file 'xxx'."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "读取文件失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件路径错误，或无访问权限。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件内容为空。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查文件路径是否准确且有访问权限。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查文件内容是否为空。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11210001-未知命令选项",
      children: "11210001 未知命令选项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unknown option 'xxx'."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "未知命令选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持对应命令选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查命令是否准确，可使用-h查看命令帮助信息，输入正确的命令选项和参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11210002-选项缺少必需参数",
      children: "11210002 选项缺少必需参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Option 'xxx' requires an argument."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选项缺少必需的参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选项缺少必需的参数，如-i/--inputPath没有指定输入路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查命令是否准确，可使用-h查看命令帮助信息，输入正确的命令选项和参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11210003-无效参数",
      children: "11210003 无效参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invalid argument value 'xxx'."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无效的参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令选项均需带有前缀短划线-，选项对应的参数无短划线，若输入选项时遗漏了短划线，该选项将被当作参数处理，无法生效，如输入restool inputPath。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查命令是否准确，可使用-h查看命令帮助信息，输入正确的命令选项和参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11210004-无效的输入路径",
      children: "11210004 无效的输入路径"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invalid input path 'xxx'."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无效的输入路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-i/--inputPath选项指定的路径参数错误，或无访问权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查路径参数是否准确且有访问权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11210005-重复的输入路径",
      children: "11210005 重复的输入路径"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Duplicated input path 'xxx'."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重复的输入路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多个-i/--inputPath选项指定了相同的输入路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查-i/--inputPath选项指定的路径是否重复。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11210006-包名存在冲突",
      children: "11210006 包名存在冲突"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The package names 'xxx' and 'xxx' conflict."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "包名存在冲突。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多次指定了-p/--packageName选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查是否多次指定-p/--packageName选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11210007-无效的输出路径",
      children: "11210007 无效的输出路径"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invalid output path 'xxx'."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无效的输出路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-o/--outputPath指定的输出路径不存在，或无访问权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查路径参数是否准确且有访问权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11210008-输出路径存在冲突",
      children: "11210008 输出路径存在冲突"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The output paths 'xxx' and 'xxx' conflict."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输出路径存在冲突。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多次指定了-o/--outputPath选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查是否多次指定-o/--outputPath选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11210009-重复的资源头文件路径",
      children: "11210009 重复的资源头文件路径"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Duplicated resource header path 'xxx'."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重复的资源头文件路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多个-r/--resHeader选项指定了相同的资源头文件路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查-r/--resHeader选项指定的资源头文件路径是否重复。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11210010-模块名称存在冲突",
      children: "11210010 模块名称存在冲突"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The module names 'xxx' and 'xxx' conflict."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模块名称存在冲突。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多次指定了-m/--modules选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查是否多次指定-m/--modules选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11210011-重复的模块名称",
      children: "11210011 重复的模块名称"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Duplicated module name 'xxx'."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重复的模块名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-m/--modules选项指定了重复的模块名称，如-m entry,entry。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查-m/--modules选项指定的模块名称是否重复。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11210012-应用配置文件存在冲突",
      children: "11210012 应用配置文件存在冲突"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The paths 'xxx' and 'xxx' of the module.json (in the stage model) or config.json (in the FA model) file conflict."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用配置文件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json（Stage模型）"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-fa/application-configuration-file-overview-fa",
        children: "config.json（FA模型）"
      }), "的路径存在冲突。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多次指定了-j/--json选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查是否多次指定-j/--json选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11210013-无效的资源起始id",
      children: "11210013 无效的资源起始id"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invalid start ID 'xxx'. It is out of range."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无效的资源起始id。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过-e/--startId指定的资源起始id不在指定范围内。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查资源起始id是否在[0x01000000, 0x06FFFFFF) 或 [0x08000000, 0xFFFFFFFF)的范围内。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11210014-重复的增量资源文件路径",
      children: "11210014 重复的增量资源文件路径"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Duplicated append path 'xxx'."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重复的增量资源文件路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多个-x/--append选项指定了相同的增量资源文件路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查-x/--append指定的增量资源文件路径是否重复。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11210015-target-config存在冲突",
      children: "11210015 target-config存在冲突"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The target configurations 'xxx' and 'xxx' conflict."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多个target-config选项指定的参数存在冲突。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多次指定了--target-config选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查是否多次指定--target-config选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11210016-无效的target-config",
      children: "11210016 无效的target-config"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invalid target configuration argument 'xxx'. The argument format for option --target-config should be like 'Locale[zh_CN,en_US];Device[phone]'."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无效的target-config参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--target-config选项指定的参数格式错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["检查--target-config选项对应参数格式是否准确，如：Locale[zh_CN,en_US];Device[phone]，具体格式信息可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#restool%E6%94%AF%E6%8C%81%E7%9A%84%E5%91%BD%E4%BB%A4%E9%80%89%E9%A1%B9",
        children: "restool支持的命令选项"
      }), "中关于target-config的说明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11210017-无效的系统资源id_definedjson路径",
      children: "11210017 无效的系统资源id_defined.json路径"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invalid system id_defined.json path 'xxx'."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无效的系统资源id_defined.json路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过--defined-sysids指定的系统资源的id_defined.json路径错误或无访问权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查系统资源的id_defined.json路径是否准确且有访问权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11210018-重复的系统资源id_definedjson路径",
      children: "11210018 重复的系统资源id_defined.json路径"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Duplicated system id_defined.json path 'xxx'."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--defined-sysids选项指定的文件路径重复。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多个--defined-sysids选项指定了相同的系统资源id_defined.json路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查--defined-sysids选项指定的系统资源id_defined.json文件路径是否重复。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11210019-compressed-config存在冲突",
      children: "11210019 compressed-config存在冲突"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The compression JSON paths 'xxx' and 'xxx' conflict."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多个--compressed-config选项指定的参数存在冲突。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多次指定了--compressed-config选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查是否多次指定--compressed-config选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11210020-参数非ascii值",
      children: "11210020 参数非ASCII值"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The argument value 'xxx' is not an ASCII value."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数非ASCII值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入、输出路径等参数中存在中文或其他非ASCII字符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查参数中是否存在中文或者其他非ASCII字符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11210021-选项之间存在互斥",
      children: "11210021 选项之间存在互斥"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Options 'xxx' and 'xxx' cannot be used together."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不能同时指定两个互斥的选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同时指定了两个互斥的选项，如-x和--target-config。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查命令是否准确，避免指定互斥的选项，可以使用-h查看命令帮助信息，输入正确的命令选项和参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11210022-包名为空",
      children: "11210022 包名为空"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The package name is empty. It should be specified with option -p/--packageName."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "包名为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "未指定-p/--packageName选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查是否通过-p/--packageName选项指定包名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11210023-资源头文件路径为空",
      children: "11210023 资源头文件路径为空"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The resource header path (for example, ./ResourceTable.js, ./ResourceTable.h) is empty. It should be specified with option -r/--resHeader."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "资源头文件的路径为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "未通过-r/--resHeader选项指定资源头文件路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查是否通过-r/--resHeader选项指定资源头文件路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11210024-dump命令缺少hap包路径",
      children: "11210024 dump命令缺少HAP包路径"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The HAP path of the resource dump command is missing."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dump命令缺少HAP包路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dump命令未指定HAP包路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查dump命令是否指定HAP包路径，如：restool dump xxx/entry.hap。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11210025-dump命令指定的hap包路径无效",
      children: "11210025 dump命令指定的HAP包路径无效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invalid HAP path 'xxx' in the resource dump command."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dump命令指定HAP包路径无效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dump命令指定的HAP包路径错误或无访问权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查dump命令指定的HAP包路径是否准确且有访问权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11210026-无效的子线程数量",
      children: "11210026 无效的子线程数量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invalid thread count 'xxx'. It should be an integer greater than 0."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无效的子线程数量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--thread选项指定的子线程数量为负数或小数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查--thread选项的参数是否为大于0的整数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11211001-输出路径已存在",
      children: "11211001 输出路径已存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The output path exists. Specify option -f/--forceWrite to overwrite."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输出路径已存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过-o/--output指定的输出路径下已存在文件，无法直接覆盖。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查输出路径下是否已有文件，可手动删除或指定-f/--forceWrite选项强制覆盖。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11211002-缺少模块配置文件路径",
      children: "11211002 缺少模块配置文件路径"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "There are multiple input paths, but the path of the module.json (in the stage model) or config.json (in the FA model) file is not specified with option -j/--json."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["缺少应用配置文件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json（Stage模型）"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-fa/application-configuration-file-overview-fa",
        children: "config.json（FA模型）"
      }), "的路径。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当通过-i/--inputPath仅指定了单个输入路径时，restool默认从输入路径的父目录读取应用配置文件；当指定了多个输入路径时，如restool -i xxx\\AppScope -i xxx\\entry\\main，需要通过-j/--json明确指定应用配置文件的路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查是否通过-j/--json明确指定应用配置文件路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11211003-无效的模块类型",
      children: "11211003 无效的模块类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invalid module type 'xxx'. Valid values: [\"entry\", \"har\", \"shared\", \"feature\"]."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无效的模块类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用配置文件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json（Stage模型）"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-fa/application-configuration-file-overview-fa",
        children: "config.json（FA模型）"
      }), "中指定的模块类型错误，取值不在[\"entry\", \"har\", \"shared\", \"feature\"]范围内。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查模块类型是否在指定的范围内。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11211004-资源起始id与id_definedjson存在冲突",
      children: "11211004 资源起始id与id_defined.json存在冲突"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The start ID 'xxx' specified by option -e/--startId conflict with the IDs in the id_defined.json file."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过-e/--startId指定的资源起始id与id_defined.json文件存在冲突。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认情况下，资源起始id为0x01000000，编译时资源id依次递增，同时restool提供了两种方式自定义资源id："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "选项-e/--startId：可以在[0x01000000, 0x06FFFFFF) 或 [0x08000000, 0xFFFFFFFF)的范围内指定资源起始id。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%9B%BA%E5%AE%9A%E8%B5%84%E6%BA%90id",
          children: "固定资源ID"
        }), "：通过id_defined.json文件指定资源id。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若同时使用两种方式，可能导致同一个资源在两种方式下计算得到的资源id值不一致，存在冲突。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查是否同时使用上述两种方式自定义资源id。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11211007-id_definedjson中的资源类型无效",
      children: "11211007 id_defined.json中的资源类型无效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invalid resource type 'xxx' in the id_defined.json file. Valid values: [\"boolean\",\"color\",\"float\",\"id\",\"intarray\",\"integer\",\"pattern\",\"plural\",\"strarray\",\"string\",\"symbol\",\"theme\"]."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "id_defined.json中的资源类型无效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "id_defined.json中资源类型type的取值不在[\"boolean\",\"color\",\"float\",\"id\",\"intarray\",\"integer\",\"pattern\",\"plural\",\"strarray\",\"string\",\"symbol\",\"theme\"]范围内。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查资源类型是否在指定范围内。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11211008-id_definedjson中的资源id无效",
      children: "11211008 id_defined.json中的资源id无效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invalid ID value 'xxx' in the id_defined.json file. It should be a hexadecimal string, match the pattern ^0[xX][0-9a-fA-F]{8}, and be in the scope [0x01000000,0x06FFFFFF] or [0x08000000,0xFFFFFFFF]."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "id_defined.json中资源id无效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "id_defined.json中资源id非十六进制数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "id取值不在[0x01000000,0x06FFFFFF] 或 [0x08000000,0xFFFFFFFF]的范围内。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查资源id是否为十六进制格式且取值在[0x01000000,0x06FFFFFF] 或 [0x08000000,0xFFFFFFFF]范围内。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11211012-id_definedjson定义了重复的id",
      children: "11211012 id_defined.json定义了重复的id"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The names 'xxx' and 'xxx' in the id_defined.json file define the same ID."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "id_defined.json中两个资源定义了同一个资源id值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "id_defined.json中两个资源定义了同一个资源id值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查id_defined.json中的资源id是否唯一且取值在[0x01000000,0x06FFFFFF] 或 [0x08000000,0xFFFFFFFF]范围内。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11211014-错误的模块名称",
      children: "11211014 错误的模块名称"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The module name 'xxx' is not found in [\"yyy\",\"zzz\"], which is specified by -m/--modules."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用配置文件中的模块名称不在-m/--modules指定的模块名称列表内。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "-m/--modules指定的模块名称列表错误。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用配置文件", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
          children: "module.json（Stage模型）"
        }), "或", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-fa/application-configuration-file-overview-fa",
          children: "config.json（FA模型）"
        }), "中name指定的模块名称错误。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查-m/--modules指定的模块名称列表中是否包含应用配置文件中name指定的模块名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11211101-无效的资源文件",
      children: "11211101 无效的资源文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to scan resources: invalid path 'xxx'."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "扫描资源失败，无效的资源文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "资源文件不符合要求，比如："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rawfile应该是一个文件夹，实际是文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "base/element下应该都是JSON文件，实际存在文件夹。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["检查资源文件的类型是否正确，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/resource-categories-and-access#%E8%B5%84%E6%BA%90%E5%88%86%E7%B1%BB",
        children: "资源分类与访问-资源分类"
      }), "中关于各类资源文件的说明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11211103-无效的限定词目录",
      children: "11211103 无效的限定词目录"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invalid qualifier key 'xxx'. It should match the pattern of the qualifiers directory, for example zh_CN or en_US."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无效的限定词目录。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "限定词目录名称错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["检查限定词目录名称是否准确，限定词目录命名规则可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/resource-categories-and-access#%E8%B5%84%E6%BA%90%E7%9B%AE%E5%BD%95",
        children: "资源分类与访问-限定词目录"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11211104-无效的资源组目录",
      children: "11211104 无效的资源组目录"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invalid resource directory name 'xxx'. Valid values: [\"element\",\"media\",\"profile\"]."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无效的资源组目录名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "限定词目录下的资源组目录名称错误，不在[\"element\",\"media\",\"profile\"]范围内。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["检查限定词目录下是否仅包含", (0,jsx_runtime.jsx)(_components.a, {
        href: "/resource-categories-and-access#%E8%B5%84%E6%BA%90%E7%BB%84%E7%9B%AE%E5%BD%95",
        children: "资源组目录"
      }), "：element，media和profile。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11211106-无效的翻译状态",
      children: "11211106 无效的翻译状态"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invalid translation priority value 'xxx'. Valid values: [\"code\",\"translate\",\"LT\",\"customer\"]."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无效的翻译状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["字符串或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/localization-kit/l10n/l10n-translation/l10n-singular-plural",
        children: "单复数"
      }), "资源的可翻译属性attr下的翻译状态属性priority配置错误，不在[\"code\",\"translate\",\"LT\",\"customer\"]范围内。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["检查翻译状态priority的值是否准确，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/resource-categories-and-access#%E8%B5%84%E6%BA%90%E5%8F%AF%E7%BF%BB%E8%AF%91%E7%89%B9%E6%80%A7",
        children: "资源可翻译特性"
      }), "中关于priority的说明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11211107-不支持的element资源类型",
      children: "11211107 不支持的element资源类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unsupported element resource type 'xxx'. Valid values: [\"integer\",\"string\",\"strarray\",\"intarray\",\"boolean\",\"color\",\"theme\",\"plural\",\"float\",\"pattern\",\"symbol\"]."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持的element资源类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "element目录下json资源文件支持的资源类型为[\"integer\",\"string\",\"strarray\",\"intarray\",\"boolean\",\"color\",\"theme\",\"plural\",\"float\",\"pattern\",\"symbol\"]，不支持\"id\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["检查element资源的类型是否准确，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/resource-categories-and-access#%E8%B5%84%E6%BA%90%E7%BB%84%E7%9B%AE%E5%BD%95",
        children: "资源组目录"
      }), "中关于element资源的说明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11211108-无效的颜色值",
      children: "11211108 无效的颜色值"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invalid color value 'xxx' of the resource 'xxx'. It can only reference '$color:xxx' or be '#rgb', '#argb', '#rrggbb', or '#aarrggbb'."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无效的颜色值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "color资源只支持以下两种格式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "引用其他color资源，如$color:xxx引用应用自身color资源，或$ohos:color:xxx引用系统color资源。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "以#开头的rgb颜色值格式，如#rgb,#argb,#rrggbb,#aarrggbb。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查color资源是否为正确的引用格式或rgb格式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11211109-无效的资源引用",
      children: "11211109 无效的资源引用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invalid resource reference $xxx:xxx. Supported reference: $(ohos:)?xxx:xxx."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无效的资源引用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "资源引用只适用于同类型资源之间，如string.json中的字符串资源可以用$string:xxx引用应用自身的字符串资源，或使用$ohos:string:xxx引用系统字符串资源，但不能通过$integer:xxx引用整数资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查资源引用方式是否正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11211110-theme资源的parent为空",
      children: "11211110 theme资源的parent为空"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The parent value of resource 'xxx' is empty. It should be a valid resource name."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "theme资源的parent值为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "theme资源的parent属性是可选的，其值需配置为其他theme资源的名称，不能是空字符串。如下正确示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"theme\": [\n    {\n      \"name\": \"base\",\n      \"value\": [\n        {\n          \"name\": \"width\",\n          \"value\": \"wrap_content\"\n        },\n        {\n          \"name\": \"height\",\n          \"value\": \"wrap_content\"\n        },\n        {\n          \"name\": \"size\",\n          \"value\": \"25dp\"\n        }\n      ]\n    },\n    {\n      \"name\": \"child\",\n      \"parent\": \"base\",\n      \"value\": [\n        {\n          \"name\": \"noTitle\",\n          \"value\": \"yes\"\n        }\n      ]\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中声明了两个theme资源base和child，base不包含parent属性，child的parent配置为\"base\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查theme资源的parent是否为空，如无需parent属性，可以将其移除。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11211111-数组类型的资源超长",
      children: "11211111 数组类型的资源超长"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The array resource 'xxx' is too large. The total length of the value of the array elements cannot exceed 65535."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数组类型的资源超长。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单个数组类型资源总长度超过了65535个字节。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查数组类型资源是否超长，可以将其拆分为多个数组资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11211112-无效的单复数资源类别",
      children: "11211112 无效的单复数资源类别"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invalid quantity 'xxx' of the plural resource 'xxx'. Valid values: [\"zero\",\"one\",\"two\",\"few\",\"many\",\"other\"]."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无效的单复数资源类别。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单复数资源的类别属性quantity配置错误，不在[\"zero\",\"one\",\"two\",\"few\",\"many\",\"other\"]范围内。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["检查单复数的类别是否准确，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/localization-kit/l10n/l10n-translation/l10n-singular-plural",
        children: "支持单复数"
      }), "中关于单复数类别的说明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11211113-单复数资源的类别重复",
      children: "11211113 单复数资源的类别重复"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Duplicated quantity 'xxx' of the plural resource 'xxx'."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单复数资源的类别重复。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单复数资源中重复声明了相同的类别，如下错误示例中eat_apple重复声明了类别one："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"plural\": [\n    {\n      \"name\": \"eat_apple\",\n      \"value\": [\n        {\n          \"quantity\": \"one\",\n          \"value\": \"%d apple\"\n        },\n        {\n          \"quantity\": \"one\",\n          \"value\": \"%d apple\"\n        },\n        {\n          \"quantity\": \"other\",\n          \"value\": \"%d apples\"\n        }\n      ]\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["检查单复数资源声明的类别是否重复，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/localization-kit/l10n/l10n-translation/l10n-singular-plural",
        children: "支持单复数"
      }), "中关于单复数类别的说明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11211114-单复数资源缺少other类别",
      children: "11211114 单复数资源缺少other类别"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The plural resource 'xxx' should contain the 'other' quantity."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单复数资源应该包含other类别。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单复数资源缺少other类别的声明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["检查单复数资源是否包含other类别的声明，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/localization-kit/l10n/l10n-translation/l10n-singular-plural",
        children: "支持单复数"
      }), "中关于单复数类别的说明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11211115-无效的symbol资源",
      children: "11211115 无效的symbol资源"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invalid value 'xxx' of the symbol resource 'xxx'. It should be in the scope [0xF0000,0xFFFFF] or [0x100000,0x10FFFF]."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无效的symbol资源值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "symbol资源的值不在[0xF0000,0xFFFFF] 或 [0x100000,0x10FFFF]范围内。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查symbol资源的值是否在指定范围内。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11211116-无效的资源名称",
      children: "11211116 无效的资源名称"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invalid resource name 'xxx'. It should match the pattern [a-zA-Z0-9_]."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无效的资源名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "资源名称需要与规则[a-zA-Z0-9_]匹配，只能包含大小写字母、数字和下划线。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查资源名称与规则[a-zA-Z0-9_]是否匹配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11211117-资源重复定义",
      children: "11211117 资源重复定义"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Resource 'xxx' conflict. It is first declared at 'xxx' and declared again at 'xxx'."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "资源重复定义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在多处定义了同类型同名的资源，存在冲突。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查资源是否重复定义，可以修改资源名称或删除重复资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11211118-资源id超过最大值",
      children: "11211118 资源id超过最大值"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The resource ID 'xxx' exceeds the maximum ID 'xxx'."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "资源id超过最大值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用资源id的范围为[0x01000000,0x06FFFFFF] 或 [0x08000000,0xFFFFFFFF]，资源过多，或指定了较大的资源起始id，可能导致id溢出超过最大值0x06FFFFFF 或 0xFFFFFFFF。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "删除无用资源。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "指定较小的资源起始id。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11211120-引用的资源未定义",
      children: "11211120 引用的资源未定义"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The resource reference '$xxx:xxx' is not defined."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "引用的资源未定义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "引用的资源不存在，如资源已被删除或重命名。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "引用的资源所在的目录未通过-i/--inputPath指定为输入路径。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查报错的资源是否存在。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查资源所在的resources的父目录是否通过-i/--inputPath指定为输入路径，如报错信息中的资源定义在xxx/entry/src/main/resources/base/element/string.json中，则需指定xxx/entry/src/main为输入路径。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11211124-解析resourcesindex文件失败",
      children: "11211124 解析resources.index文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to parse the resources.index file."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解析resources.index失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "resources.index格式不正确，如内容为空或文件开头不存在128字节的版本信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查resources.index文件的来源，确保该文件是由restool工具编译生成。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11212001-解析hap包错误",
      children: "11212001 解析HAP包错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to parse the HAP."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解析HAP包失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAP包格式不正确，如经过多次压缩导致解压失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查HAP包格式，确保HAP包由SDK工具直接生成，无压缩解压等修改操作。"
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