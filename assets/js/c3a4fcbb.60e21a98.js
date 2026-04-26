"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["967640"], {
30859(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_ohpm_cli_ide_ohpm_common_commands_ide_ohpm_convert_ide_ohpm_convert_md_c3a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-ohpm-cli-ide-ohpm-common-commands-ide-ohpm-convert-ide-ohpm-convert-md-c3a.json
var site_docs_ide_ohpm_cli_ide_ohpm_common_commands_ide_ohpm_convert_ide_ohpm_convert_md_c3a_namespaceObject = JSON.parse('{"id":"ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-convert/ide-ohpm-convert","title":"ohpm convert","description":"将npm三方库转换为ohpm三方库。因为语法差异，转换时仅对文件进行格式转换，不修改原npm包的代码逻辑。若HAR包在转换后出现代码不兼容的报错，开发者需修改原npm包的代码做适配。","source":"@site/docs/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-convert/ide-ohpm-convert.md","sourceDirName":"ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-convert","slug":"/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-convert/","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-convert/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"title":"ohpm convert","sidebar_position":20,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-convert","kit":"devtools/cli","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"ohpm dist-tags","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-dist-tags/"},"next":{"title":"ohpm config错误码","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-errorcode/ide-ohpm-config-errorcode/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-convert/ide-ohpm-convert.md


const frontMatter = {
	title: 'ohpm convert',
	sidebar_position: 20,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-convert',
	kit: 'devtools/cli',
	last_updated: '2026-04-24'
};
const contentTitle = 'ohpm convert';

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
  "value": "Options",
  "id": "options",
  "level": 2
}, {
  "value": "registry",
  "id": "registry",
  "level": 3
}, {
  "value": "publish",
  "id": "publish",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ohpm-convert",
        children: "ohpm convert"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将npm三方库转换为ohpm三方库。因为语法差异，转换时仅对文件进行格式转换，不修改原npm包的代码逻辑。若HAR包在转换后出现代码不兼容的报错，开发者需修改原npm包的代码做适配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命令格式",
      children: "命令格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm convert [[<@group>/]<pkg>[@<version> | @tag:<tag>]] --registry <string> [--publish]\nohpm convert <node_modules_path> [--publish]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(126557)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@group：三方库的命名空间，可选。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pkg：三方库名称，必选。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "version：三方库的版本号，可选。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "tag：三方库的标签，标签会标记三方库的某个版本号，可选。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能描述",
      children: "功能描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将指定npm仓库中的某个包或者本地node_modules目录下的包转换成满足ohpm格式要求的HAR包，并保存至当前工作目录，转换后的包将支持上传至ohpm-repo私仓或OpenHarmony三方库中心仓。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ohpm convert @group/pkg@version --registry <npm仓库地址>"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "下载指定仓库中的某个包及其所有依赖项，并且将该包及其依赖转换为满足ohpm格式要求的HAR包。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ohpm convert <node_modules_path>"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "转换本地node_modules中的所有包为满足ohpm格式要求的HAR包，<node_modules_path>必须为npm执行install命令后生成的node_modules目录。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ohpm convert ./xxxx/node_modules\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(833668)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ohpm convert命令仅保留npm包中package.json配置文件中的name、version、main、types、license、description、author、keywords、homepage、repository、artifactType、dependencies、devDependencies、dynamicDependencies、overrides、scripts、hooks，module、packageType、typesVersions、exports和jsnext:main字段，具体字段说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-ohpm-cli/ide-oh-package-json5#zh-cn_topic_0000001792256137_oh-packagejson5-%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
        children: "oh-package.json5 字段说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "options",
      children: "Options"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "registry",
      children: "registry"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：无"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：URL"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在convert命令后面配置 --registry <registry> 参数，指定仓库地址。如果指定了--registry，convert命令将从远程仓库地址下载指定的包及其依赖后，进行转换处理。如果没有指定--registry，convert命令将从本地node_modules目录进行转换处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "publish",
      children: "publish"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：false"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型： Boolean"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 convert命令后面配置 --publish 参数 ，若指定该参数，执行convert命令前请确认.ohpmrc推包相关配置无误，当所有包转换完成后将根据.ohpmrc中的配置依次进行推包。"
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
      children: "从ohpm 6.0.2.636版本开始，可以在convert命令后配置--log_level <string>参数，指定执行当前命令的日志级别（info、debug、warn、error），如果未指定该值则日志级别为.ohpmrc中配置的log_level的级别。"
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
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "转换远程npm三方库中的包"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "转换npm三方库中的axios包，执行以下命令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm convert axios --registry https://registry.npmjs.org/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PS C:\\Users\\xxxxx\\Desktop> ohpm convert axios --registry https://registry.npmjs.org\n...\nohpm INFO: > start convert package: asynckit@0.4.0\nohpm INFO: > start convert package: axios@1.6.8\nohpm INFO: > start convert package: combined-stream@1.0.8\n...\nohpm INFO: A total of 9 packets are converted successfully.\nohpm INFO: Converted packages are saved to the \"C:\\Users\\xxxxx\\Desktop\\convert_1712127991590\" directory.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(64301)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "627",
        height: "236"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "转换本地node_modules目录中的包"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行npm install uuid后，转换本地node_modules目录中的包，执行以下命令："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(108293)/* ["default"] */.A) + "",
        width: "433",
        height: "103"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm convert C:\\Users\\xxxxx\\Desktop\\uuidInstallDir\\node_modules\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PS C:\\Users\\xxxxx\\Desktop> ohpm convert C:\\Users\\xxxxx\\Desktop\\uuidInstallDir\\node_modules\nohpm INFO: > start convert package: uuid\n...\nohpm INFO: A total of 1 package(s) are converted successfully.\nohpm INFO: Converted packages are saved to the \"C:\\Users\\xxxxx\\Desktop\\convert_1712128912583\" directory.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(981996)/* ["default"] */.A) + "",
        width: "580",
        height: "43"
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
981996(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
64301(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833683-5b8e708d2e74b2b456336cc3fcda0287.png");

},
833668(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
126557(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
108293(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753703-745036bbe1d7ced002cfa20d6e0f614c.png");

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