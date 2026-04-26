"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["517734"], {
596860(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_repo_command_ide_ohpm_repo_command_data_migration_ide_ohpm_repo_batch_download_ide_ohpm_repo_batch_download_md_513_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-module-management-ide-ohpm-repo-ide-ohpm-repo-command-ide-ohpm-repo-command-data-migration-ide-ohpm-repo-batch-download-ide-ohpm-repo-batch-download-md-513.json
var site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_repo_command_ide_ohpm_repo_command_data_migration_ide_ohpm_repo_batch_download_ide_ohpm_repo_batch_download_md_513_namespaceObject = JSON.parse('{"id":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-command-data-migration/ide-ohpm-repo-batch-download/ide-ohpm-repo-batch-download","title":"ohpm-repo batch_download","description":"批量下载ohpm-repo或OpenHarmony三方库中心仓的包文件。","source":"@site/docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-command-data-migration/ide-ohpm-repo-batch-download/ide-ohpm-repo-batch-download.md","sourceDirName":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-command-data-migration/ide-ohpm-repo-batch-download","slug":"/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-command-data-migration/ide-ohpm-repo-batch-download/","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-command-data-migration/ide-ohpm-repo-batch-download/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"ohpm-repo batch_download","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-batch-download","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"ohpm-repo export_pkginfo","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-command-data-migration/ide-ohpm-repo-export-pkginfo/"},"next":{"title":"ohpm-repo batch_publish","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-command-data-migration/ide-ohpm-repo-batch-publish/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-command-data-migration/ide-ohpm-repo-batch-download/ide-ohpm-repo-batch-download.md


const frontMatter = {
	title: 'ohpm-repo batch_download',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-batch-download',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = 'ohpm-repo batch_download';

const assets = {

};



const toc = [{
  "value": "前提条件",
  "id": "前提条件",
  "level": 2
}, {
  "value": "命令格式",
  "id": "命令格式",
  "level": 2
}, {
  "value": "功能描述",
  "id": "功能描述",
  "level": 2
}, {
  "value": "参数",
  "id": "参数",
  "level": 2
}, {
  "value": "&lt;pkg_list&gt;",
  "id": "pkg_list",
  "level": 3
}, {
  "value": "选项",
  "id": "选项",
  "level": 2
}, {
  "value": "--public-registry",
  "id": "--public-registry",
  "level": 3
}, {
  "value": "--http-proxy",
  "id": "--http-proxy",
  "level": 3
}, {
  "value": "--not-use-proxy",
  "id": "--not-use-proxy",
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
        id: "ohpm-repo-batch_download",
        children: "ohpm-repo batch_download"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "批量下载ohpm-repo或OpenHarmony三方库中心仓的包文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["已成功执行", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-command-data-migration/ide-ohpm-repo-export-pkginfo",
        children: "export_pkginfo 命令"
      }), "，生成pkgInfo_xxx.json文件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命令格式",
      children: "命令格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm-repo batch_download <pkg_list>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能描述",
      children: "功能描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据提供的包名列表用于批量下载ohpm-repo或OpenHarmony三方库中心仓的包文件，并导出zip文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["说明：执行", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-command-data-migration/ide-ohpm-repo-export-pkginfo",
        children: "export_pkginfo 命令"
      }), "生成的pkgInfo_xxx.json文件中记录着ohpm-repo或OpenHarmony三方库中心仓中所有已上架的包，若仅需要批量下载部分包文件，可以手动修改pkgInfo_xxx.json文件，命令只会批量下载pkgInfo_xxx.json文件中指定的包，包如果有其他依赖，所依赖的包也会一并下载。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "参数",
      children: "参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pkg_list",
      children: "<pkg_list>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型： String"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "必填参数"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["必须在batch_download命令后面配置<pkg_list>参数，指定执行", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-command-data-migration/ide-ohpm-repo-export-pkginfo",
        children: "export_pkginfo 命令"
      }), "导出的json文件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选项",
      children: "选项"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "--public-registry",
      children: "--public-registry"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：无"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：URL"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在batch_download命令后面配置--public-registry <string>，指定OpenHarmony三方库中心仓registry地址下载包文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "--http-proxy",
      children: "--http-proxy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：无"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：String"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在batch_download命令后面配置--http-proxy <string>，发起请求时将为上面配置的--public-registry地址设置代理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "--not-use-proxy",
      children: "--not-use-proxy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：无"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：String"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在batch_download命令后面配置--not-use-proxy <string>，发起请求时不会为指定的地址设置代理，如果有多个地址请使用英文逗号隔开，并使用url编码转换特殊字符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行以下命令从ohpm-repo中批量下载包文件："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm-repo batch_download <pkgInfo_xxxx.json地址>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PS D:\\> ohpm-repo batch_download D:\\pkgInfo_1754733375315.json\n[2025-08-09T18:33:30.349] [INFO] default - download \"@ohos/test@1.0.0\" from repository \"ohpm\" successfully\".\n[2025-08-09T18:33:30.367] [INFO] default - download \"@ohos/test-two@1.0.0\" from repository \"ohpm\" successfully\".\n...\n[2025-08-09T18:33:30.466] [INFO] default - all \"6\" package(s) are successfully download.\n[2025-08-09T18:33:30.466] [INFO] default - save the .zip file to : \"D:\\batch_download_1754735610304.zip\".\n[2025-08-09T18:33:30.467] [INFO] default - Clear the cache.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(951789)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1、生成的zip文件以仓库名作为目录，每个仓库目录中存在包文件和pkgInfo.json文件，pkgInfo.json文件记录每个包的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "文件名"
        })
      }), "、", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "包名"
        })
      }), "、", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "组织"
        })
      }), "、", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "上传者"
        })
      }), "和", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tag标签"
        })
      }), "，用于在批量上传时准确指定ohpm-repo的数据库中某个用户为某个包的真实上传用户，同时将包的Tag标签一起上传。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、命令执行中，如果某个包的用户在ohpm-repo中不存在，将默认指定该包的上传用户为管理员用户或者组织的管理员用户。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["3、ohpm-repo从5.3.0开始支持多仓库配置，当从OpenHarmony三方库中心仓下载包，生成的包zip文件，目录名为ohpm，在后续执行", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-command-data-migration/ide-ohpm-repo-batch-publish",
        children: "batch_publish"
      }), "命令时，默认导入ohpm-repo仓库名为ohpm的仓库中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "batch_download_1754735610304.zip目录结构\n+---ohpm\n|       @ohos+test-two@1.0.0.har\n|       @ohos+test@1.0.0.har\n|       pkgInfo.json\n|\n+---one\n|       @ohos+test-four@1.0.0.har\n|       @ohos+test-three@1.0.0.har\n|       pkgInfo.json\n|\n+---two\n|       @ohos+test-five@1.0.0.har\n|       @ohos+test-six@1.0.0.har\n|       pkgInfo.json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "batch_download_1754735610304.zip中ohpm目录中pkgInfo.json结构\n{\n  \"packageArray\": [\n    {\n      \"packageFile\": \"@ohos+test@1.0.0.har\",\n      \"packageName\": \"@ohos/test@1.0.0\",\n      \"user\": \"admin\",\n      \"userId\": \"\",\n      \"group\": \"ohos\",\n      \"distTags\": []\n    },\n    {\n      \"packageFile\": \"@ohos+test-two@1.0.0.har\",\n      \"packageName\": \"@ohos/test-two@1.0.0\",\n      \"user\": \"admin\",\n      \"userId\": \"\",\n      \"group\": \"ohos\",\n      \"distTags\": []\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行以下命令从OpenHarmony三方库中心仓中批量下载包文件："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm-repo batch_download <pkgInfo_xxxx.json地址> --public-registry <OpenHarmony三方库中心仓registry地址> --http-proxy <配置代理地址> --not-use-proxy <配置不使用代理>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PS D:\\> ohpm-repo batch_download D:\\pkgInfo_1754734313921.json --public-registry https://ohpm.openharmony.cn/ohpm/\n...\n[2025-08-09T18:49:38.833] [INFO] default - A total of 95 package(s) successfully obtain download url.\n[2025-08-09T18:49:38.834] [INFO] default - A total of 95 package(s) are successfully downloaded.\n[2025-08-09T18:49:38.834] [INFO] default - A total of 95 package(s) are converted successfully.\n[2025-08-09T18:49:38.834] [INFO] default - Packing the .zip file. . .\n[2025-08-09T18:49:39.820] [INFO] default - save the .zip file to : \"D:\\batch_download_1754736519129.zip\".\n[2025-08-09T18:49:39.820] [INFO] default - Clear the cache.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(960381)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果ohpm-repo实例的数据存储类型为filedb，请执行ohpm-repo restart命令重启ohpm-repo服务，以便刷新ohpm-repo网站页面中的数据。该操作会影响正在使用ohpm-repo服务的用户，请提前告知。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["生成的zip文件中以仓库名作为目录，每个仓库目录中存在pkgInfo.json文件，其中记录了每个包的", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "文件名"
          })
        }), "、", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "包名"
          })
        }), "、", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "组织"
          })
        }), "、", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "上传者和********Tag标签"
          })
        }), "，用于在批量上传时准确指定ohpm-repo的数据库中某个用户为某个包的真实上传用户，同时将包的Tag标签一起上传。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当执行batch_download命令时，某个中心仓包的组织为A，若为其指定ohpm-repo的数据库中某用户为其真实上传用户，ohpm-repo实例中不存在A组织，则该包的真实上传用户将设定为空，并且提醒用户手动创建A组织。之后执行批量上传时同样会提醒该包的A组织在ohpm-repo实例中不存在，需要先手动创建A组织。如果需要自动添加组织，使用batch_publish命令的可选参数--force，将会选取一个管理员用户作为A组织负责人，自动创建A组织后进行该包的上传。"
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
960381(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
951789(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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