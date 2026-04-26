"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["146554"], {
46690(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_ohpm_cli_ide_ohpm_common_commands_ide_ohpm_version_ide_ohpm_version_md_7db_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-ohpm-cli-ide-ohpm-common-commands-ide-ohpm-version-ide-ohpm-version-md-7db.json
var site_docs_ide_ohpm_cli_ide_ohpm_common_commands_ide_ohpm_version_ide_ohpm_version_md_7db_namespaceObject = JSON.parse('{"id":"ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-version/ide-ohpm-version","title":"ohpm version","description":"管理模块版本。","source":"@site/docs/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-version/ide-ohpm-version.md","sourceDirName":"ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-version","slug":"/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-version/","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-version/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"ohpm version","sidebar_position":13,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-version","kit":"devtools/cli","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"ohpm root","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-root/"},"next":{"title":"ohpm cache clean","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-cache/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-version/ide-ohpm-version.md


const frontMatter = {
	title: 'ohpm version',
	sidebar_position: 13,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-version',
	kit: 'devtools/cli',
	last_updated: '2026-04-24'
};
const contentTitle = 'ohpm version';

const assets = {

};



const toc = [{
  "value": "命令格式",
  "id": "命令格式",
  "level": 2
}, {
  "value": "功能描述",
  "id": "功能描述",
  "level": 2
}, {
  "value": "参数说明",
  "id": "参数说明",
  "level": 2
}, {
  "value": "无参数",
  "id": "无参数",
  "level": 3
}, {
  "value": "newversion",
  "id": "newversion",
  "level": 3
}, {
  "value": "major",
  "id": "major",
  "level": 3
}, {
  "value": "minor",
  "id": "minor",
  "level": 3
}, {
  "value": "patch",
  "id": "patch",
  "level": 3
}, {
  "value": "Options",
  "id": "options",
  "level": 2
}, {
  "value": "prefix",
  "id": "prefix",
  "level": 3
}, {
  "value": "parameterFile",
  "id": "parameterfile",
  "level": 3
}, {
  "value": "log_level",
  "id": "log_level",
  "level": 3
}, {
  "value": "debug",
  "id": "debug",
  "level": 3
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
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
        id: "ohpm-version",
        children: "ohpm version"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "管理模块版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命令格式",
      children: "命令格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm version [options] [<newversion> | major | minor | patch]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能描述",
      children: "功能描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在模块目录中运行此命令以获取或升级版本号，同时将数据回写入 oh-package.json5 中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "参数说明",
      children: "参数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "无参数",
      children: "无参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当无参数使用ohpm version命令时，则会将当前模块的版本号打印至标准输出中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "newversion",
      children: "newversion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "newversion 参数应为一个合法的语义化版本，命令会将当前模块版本改写为 newversion 并打印在标准输出中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "major",
      children: "major"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当参数为 major 时，有以下几种情况："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若无先行版本号，则将主版本号递增 1，其他位置为 0；"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若存在先行版本号：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当次版本号、修订号都为 0 时，则主版本号不变，而将先行版本号删掉。即 1.0.0-beta.1 升级为 1.0.0；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当次版本号、修订号任意一个不为 0 时，则将主版本号递增1，其他位置为 0，并删除先行版本号。即 1.0.1-beta.1 升级为 2.0.0。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "minor",
      children: "minor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当参数为 minor 时，固定主版本号，变化次版本号与修订号，有以下几种情况："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若无先行版本号，则将次版本号递增 1，修订号置为 0；"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若存在先行版本号:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当修订号为 0 时，则次版本号不变，而将先行版本号删除。即 1.1.0-beta.1 升级为 1.1.0;"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当修订号不为 0 时，则将次版本号递增 1，修订号置为 0，同时删除先行版本号，即 1.1.1-beta.1 升级为 1.2.0。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "patch",
      children: "patch"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当参数为 patch 时，固定主版本号与次版本号，变化修订号，有以下几种情况："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若无先行版本号，则修订号递增 1。即 1.0.0 升级为 1.0.1；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若存在先行版本号，则仅删除先行版本号。即 1.0.0-beta.1 升级为 1.0.0。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "options",
      children: "Options"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prefix",
      children: "prefix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：\"\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型： string"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 version 命令后面配置 --prefix <string> 参数，用来指定包的根目录，该目录下必须存在 oh-package.json5 文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "parameterfile",
      children: "parameterFile"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：无"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型： string"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "别名：pf"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 version 命令后面配置 --pf <string> 或者 --parameterFile <string> 参数，用来指定参数化配置文件地址。使用该命令前需保证项目级别的oh-package.json5中已配置parameterFile参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "log_level",
      children: "log_level"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：无"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型： String"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从ohpm 6.0.2.636版本开始，可以在 version 命令后配置--log_level <string>参数，指定执行当前命令的日志级别（info、debug、warn、error），如果未指定该值则日志级别为.ohpmrc中配置的log_level的级别。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "debug",
      children: "debug"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：false"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型： Boolean"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从ohpm 6.0.2.636版本开始，可以在命令后配置--debug参数，指定执行当前命令的日志级别为debug，该配置仅在当前命令行生效，不修改.ohpmrc中的日志级别，如果未指定该值则日志级别为.ohpmrc中配置的log_level的级别。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前模块为 entry，版本号为 1.0.0，在当前模块的根目录执行："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm version\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(146009)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "489",
        height: "77"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接着执行："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm version 1.0.1-beta.1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(46803)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "597",
        height: "61"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接着执行："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm version major\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(702725)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "545",
        height: "65"
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
702725(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiEAAABBCAYAAAAHfHT0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAGdYAABnWARjRyu0AAAtuSURBVHhe7Z1RjiPJDUR9gIF/fP8P32dvswdYmwMQCMQEycxSlUqljo8HJSOCzJTUbSW6vdP/+vXr1z/GGGOMMe/GlxBjjDHG3MLLl5C//vpL6u/i7v3Na/j9ezZPf//89WfMvfwrvgkRFZqo+ng255QfKH/Sco1gNlG5o6j5gcoeQc0OVPYMrp5fUe2Z50mf6x2O9OzQzT965rO4ev87n9sZ3P3eKN2sc/XX97v4luexy+9LCApHXoSuZ5qvelGbfFUjO9kjrJzvFa6ej8Tcq2Z3dHvimV4539G+iTxTN3/yr+bq/e98bmdw9/mP7n/1+/oUvuV1+Knv5x+XkGD3hejy0/xqvaOpTLI68yg468y5ydXnfxfdmScvfVzv8krvClfOXuHO/d+x9ze/d8HRM3zC2Y15heVLSGjdF3zlTfOrdaWpzK5eZY+As86cm1x9/ncxnbnyQ08P1ztgP3tnceXsFb59/6fPX+HIGT7h3Ma8wkdcQhDMYUatkR2dtagRpau662W6DHrsV/l8xB6uMV95KtN5yudMpSsfc5WeHvdnvaLhI+ro7fpI5WVf1xt0uVVPZSodwQzmsFY+UukB9mIOa+Wzzj5rU11pqWONYE/CuqqRzkOmXvazVj7W7KGmwFwF57lWOfRY41rl2FcagxnMYa38CexhqhzqSJdBD33WuH4Kp/w6Jqh6pvnVGtnNTPo0r/O7Ws1S+tTDPoNZzGCt1p2WsLfSf6SHqfzQ08M1+lgrDWvlveJPetL57HX7VXO6+cFOH2qx5szUM+moxZozUw/DM6r1rlbprEWNmvK7mulmsRZrznT+lFXrjm6eqpUWNWrVelerdJ7PmWqWgmfxenf2Sl5lUFM9n8xpl5BgdRZq1RpJvfIT5U/art/V0yzF1DP1B11mms+wN/V3s5CVXLcXPyKoVT7CHtasTX6nIZU/9SGRPTpnpw+1yZ/0s+YrLem8YNov2d032Z3ZwfnpTGf6U5+Cc1OttG6vzkOq3LT/5E9Us6q502z2qzld/TQ+6hJSkZkpO+2ltFgrVJ71SkOO+KhN/UGXmeYz7EWtqPIVKzmVSY0fEdTY361Zm/xOQyp/6gsik7mjc3b6UJv8SQ9NgT7md7Sk84Jpv6TyQkeUz1rSeczqbNTO9Ke+isyqntAUnMGa6Xoxs6qjNvkT1SxeZ426gn2VX8k8iVMvIcHKC4Ta6v6hKZ3hzDR/Z+Y0S2nT/Ff7gy4zzWfYm/af/ORoLmt+ZEJX3qS96ncaUvm7fWfN6XTUJp9hr8sGq/N39lREZjWndIQzXc/KvKDKKR21M/2pryKzqmdlzs5ewc4+U3ZnlqKalWueNc1eye/O/HT+uIRUTyj0lSc7zZvqHU2xu9/qXkqr9GkPrKd+5TNdZprPsLfSv9uj/KSaxY9M6MqbNO7j/ORPetL57FX7xbqaU/V0WqUfnRWwd9b8rkflmcis5rpaadPcKd/1Kw+1Fb/LVx7nJqq80lnr9lrpr7RKR21nlqKalWvWsFawr/IrmSfx+xKCqFAw+QlmsgfhrAIzmFU6gzmcmWC2ylUZpSk4x9nOQ19pCPo7OZVJlL/SP/nB5AfoYx4fMZNUGudZw8dcIys+s+OrXOXxmlFeagj6KqP0TkOUjj3or2rscY1gHuk8hHM4O1nxmCrT9STYi/kVDR9z3WXVeoUum7N4JuvorWYmX2WU3mkVnN1dK5SXPdzLOnpP4pI/YHf3i/HUN+MO+LX6hNfuyBmOnnvq+4TX42l84mu2c6Zves/99fvZ8PvzE98vX0J+OPFaISrzbnbO8cq5s7fqn3yj+aTX68j79y3vdz73b3k+3wi+Rz/1ffKf8jfGGGPMLXz9JeQ///33b5T3BJ5+fmOMMabiR/wk5Okf4r6EGGOM+UZ8Cfk/+dOGRGUmXukNuv5X5hpjjDGfyo/4dYzSE+Xvfuhj/siFoes/Ms8YY4x5AqddQp76/+xVH/I7H/x39xtjjDFP5TGXkKv+E6a7LxGv9htjjDFP5fclJD/g+YMea+Wzzj5rU11pqKN2Fb6EGGOMMdcz/gE79eE/9TA8o1p32rvYvQD4EmKMMcYcY+kSgt6OlnReMO33Lo58+PsSYowxxhzjjz9gl2QA17ta0nnBtN87OPrB70uIMcYYcwz5kxBE+atasnKxiMxK7gpe+dD3JcQYY4w5xiW/jmFf5ZnIdLnJP8p0CYj1dCngPHuv9BtjjDHfytJ/HTNp7HGNYB7pvGDqP0peEhj2sUdR5V7tN8YYY76Vj/kXU6+4YBhjjDHmc7n9EnLVTziMMcYY89l8zE9CjDHGGPOz8CXEGGOMMbfw8iXk7l+l+Fc5z8bv37N5+vvnrz9j7uWPf6xMhSaqPp7NOeUHyp+0XCOYTVTuKGp+oLJHULMDlT2Dq+dXVHvmedLneocjPTt084+e+Syu3v/O53YGd783Sjfmp/DHvxNy5Jui65nmq17UJl/VyE72CCvne4Wr5yMx96rZHd2eeKZXzne0byLP1M2f/Ku5ev87n9sZ3H3+p79+xrzC+I+VrdDlp/nVekdTmWR15lFw1plzk6vP/y66M09e+rje5ZXeFa6cvcKd+79j729+74JPOIMxd7B8CQmt+0apvGl+ta40ldnVq+wRcNaZc5Orz/8upjNXfujp4XoH7GfvLK6cvcK37//0+St8whmMeTcfcQlBMIcZtUZ2dNaiRpSu6q6X6TLosV/l8xF7uMZ85alM5ymfM5WufMxVenrcn/WKho+oo7frI5WXfV1v0OVWPZWpdAQzmMNa+UilB9iLOayVzzr7rE11paWONYI9CeuqRjoPmXxjvo1Tfh0TVD3T/GqN7GYmfZrX+V2tZil96mGfwSxmsFbrTkvYW+k/0sNUfujp4Rp9rJWGtfJe8Sc96Xz2uv2qOd38YKcPtVhzZuqZdNRizZmph+EZ1XpXq3TWokZN+V3NTL4x38Rpl5BgdRZq1RpJvfIT5U/art/V0yzF1DP1B11mms+wN/V3s5CVXLcXPyKoVT7CHtasTX6nIZU/9SGRPTpnpw+1yZ/0s+YrLem8YNov2d032Z3ZsZs35ul81CWkIjNTdtpLabFWqDzrlYYc8VGb+oMuM81n2ItaUeUrVnIqkxo/Iqixv1uzNvmdhlT+1BdEJnNH5+z0oTb5kx6aAn3M72hJ5wXTfknlhY4on7Wk85idrDHfwqmXkIB7p/mr+4emdIYz0/ydmdMspU3zX+0Pusw0n2Fv2n/yk6O5rPmRCV15k/aq32lI5e/2nTWn01GbfIa9Lhuszt/ZUxGZ1ZzSEc50PSvzgtWcMd/GH5eQ6psh9JVvlGneVO9oit39VvdSWqVPe2A99Suf6TLTfIa9lf7dHuUn1Sx+ZEJX3qRxH+cnf9KTzmev2i/W1Zyqp9Mq/eisgL2z5nc9Ks9EZjXX1Uqb5k75qv/vv/9uUT3GPI3flxBEhYLJTzCTPQhnFZjBrNIZzOHMBLNVrsooTcE5znYe+kpD0N/JqUyi/JX+yQ8mP0Af8/iImaTSOM8aPuYaWfGZHV/lKo/XjPJSQ9BXGaV3GqJ07EF/VWOPawTzSOchnMPZyYrHVJmuR108ENVjzNO45A/Ydd9Y7+Du/Z/Ezv8ovosjZzh67qnvE16Pp/GJr9nOmT7l/OrigageY56GLyE/nHitEJV5NzvneOXc2Vv1T77RfNLrdeT9+5Tzq4sHonqMeRr+U/7GGGOMuQVfQowxxhhzC76EGGOMMeYWfAkxxhhjzC34EmKMMcaYW/AlxBhjjDG34EuIMcYYY27BlxBjjDHG3IIvIcYYY4y5BV9CjDHGGHMLvoQYY4wx5hZ8CTHGGGPMLfgSYowxxphb8CXEGGOMMbfgS4gxxhhjbsGXEGOMMcbcgi8hxhhjjLmBX//8D9CNE7mjnDLIAAAAAElFTkSuQmCC");

},
46803(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
146009(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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