"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["523271"], {
963641(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_push_kit_guide_push_server_push_delivery_report_push_delivery_report_md_0e7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-push-kit-guide-push-server-push-delivery-report-push-delivery-report-md-0e7.json
var site_docs_push_kit_guide_push_server_push_delivery_report_push_delivery_report_md_0e7_namespaceObject = JSON.parse('{"id":"push-kit-guide/push-server/push-delivery-report/push-delivery-report","title":"（可选）推送报告","description":"登录AppGallery Connect网站，点击“开发与服务”，在项目列表中找到您的项目，通过“增长 > 推送服务 > 推送报告”，您可以在“推送报告”中查看推送消息详情和推送用户详情。","source":"@site/docs/push-kit-guide/push-server/push-delivery-report/push-delivery-report.md","sourceDirName":"push-kit-guide/push-server/push-delivery-report","slug":"/push-kit-guide/push-server/push-delivery-report/","permalink":"/harmonyos-docs-site/push-kit-guide/push-server/push-delivery-report/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"（可选）推送报告","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-delivery-report","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"（可选）开发消息回执","permalink":"/harmonyos-docs-site/push-kit-guide/push-server/push-msg-receipt/"},"next":{"title":"获取AAID","permalink":"/harmonyos-docs-site/push-kit-guide/push-get-aaid/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/push-kit-guide/push-server/push-delivery-report/push-delivery-report.md


const frontMatter = {
	title: '（可选）推送报告',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-delivery-report',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '（可选）推送报告';

const assets = {

};



const toc = [{
  "value": "推送消息详情",
  "id": "推送消息详情",
  "level": 2
}, {
  "value": "推送用户详情",
  "id": "推送用户详情",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "可选推送报告",
        children: "（可选）推送报告"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["登录", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
        children: "AppGallery Connect"
      }), "网站，点击“开发与服务”，在项目列表中找到您的项目，通过“增长 > 推送服务 > 推送报告”，您可以在“推送报告”中查看推送消息详情和推送用户详情。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(234250)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "推送报告数据不是实时数据，当天生成的数据在控制台次日才能查看到。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "推送消息详情",
      children: "推送消息详情"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "您可以查看推送消息的详情，场景化消息的统计图和对应表格，同时可以按照通道维度进行查看，有“通过AGC控制台”、“通过API方式”和“全部通道”；也可以按照消息类型维度进行查看。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(859364)/* ["default"] */.A) + "",
        width: "1587",
        height: "596"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(101893)/* ["default"] */.A) + "",
        width: "1632",
        height: "268"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点击自定义后的", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(22102)/* ["default"] */.A) + "",
        width: "20",
        height: "22"
      }), "，可自定义推送消息报表展示的表格列，默认展示的表格列有：日期、消息类型、请求量、发送量、到达量、显示量、点击量、到达率（%）、点击率（%）、沉默设备丢弃、应用被卸载、无效TOKEN、通知关闭。全选可展示全部表格列，重置则恢复默认表格列。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(355707)/* ["default"] */.A) + "",
        width: "392",
        height: "519"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "报表数据条目说明："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请求量：该推送任务预计覆盖的设备数量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "发送量：在请求量的基础上剔除不符合下发条件的消息数量，实际下发的消息数量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "到达量：扣除未触达量后实际到达的数量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "显示量：消息展示在通知栏的数量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击量：用户点击推送消息的数量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "到达率（%）：到达量/发送量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击率（%）：点击量/显示量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "沉默设备丢弃：终端设备超过30天没有联网的数量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "频控丢弃量：向单个设备发送消息超出上限，超出部分被丢弃的数量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用被卸载：用户已经卸载该应用并且没有重新安装的数量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "无效TOKEN：消息从云端发送到终端设备过程中，由于Token无效不展示的数量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通知关闭：用户关闭了应用的消息通知权限的数量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "消息覆盖：待发送消息被覆盖的数量。针对待发送消息，只保留最新一条，其余待发送消息会被覆盖不下发。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "其他原因：其他不满足触达条件的情况，如推送链接无法正常访问等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "过期量：目标设备离线，在消息有效期内设备未上线导致消息过期的数量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "缓存量：目标设备离线，消息仍在有效期内的数量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "未触达量：消息未到达终端设备的数量。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(341836)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不符合下发条件的消息数量包括：沉默设备丢弃、频控丢弃量、应用被卸载、无效TOKEN、通知关闭、消息覆盖、其他原因、过期量、缓存量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "推送用户详情",
      children: "推送用户详情"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "您可以查看推送用户的详情，根据时间维度查看活跃用户、新增用户和总用户的统计数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(640269)/* ["default"] */.A) + "",
        width: "1619",
        height: "785"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "报表数据条目说明："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当天活跃用户数：当天设备与Push服务端建立连接的用户数量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当天新增用户数：当天新安装的用户数量。不统计重复卸载安装应用场景。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "30日活跃用户数：查询日往前30日内设备与Push服务端建立连接的用户数量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "总用户数：已安装的总用户数量。"
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
341836(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
234250(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
640269(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439185-a27f80b8d55e21785b814fe25a422ab8.png");

},
101893(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959138-187c7ad993d28ed7cecfd4b96cb74577.png");

},
22102(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAACXElEQVQ4jd2US0jUYRTFf6Pj6EId1MoHhFopmRSIoZGIWRpURLmQMINwEUVBUZbGbHqQFRqEi4QsRTDIV0kLjZA0FCHDHmKolKSJlqaOM840Nq//baGUNlMJCYFne77743C/w1WJiLCE8lhK2DIBmk0WRJlds800jSjKH9+rf2fYxrupvVVC6UgEOdnJRPuaeF5ZRZNHIqePZ7FtjT8aT9XiEpo7S9h3vZ2gQzeoPhaNVvFEjDMEZ12iLm8LA2VnuNoyjNHqWhC3CX1j4klmhLBAD1asy2CPyYJNiWOrnxcqDwhyxhKxXou3xjWhG6CD11X1hObks1bzkcqzxbxYuYEorzE6BsI4oTvMriPB5DZ0selgIiF+GhZgZb4mmkWXkS3xp2qlxzAmz25elLJXI2K2K7P+0EM5V9QsQ8ZhaSjIkaS0XCnvNYjF+RPhmjAum5qTqURoB2k1bGZ7ZAA+6rkMq5NJNT/mi5JAuq4QFbeZ0fztU6aHePNBj82hoJkyYrYr/CiK04h+SkFRQD/Yx+CkHccvLVoI9AklId6TtoondBvCSdv/mcqmt4ya7Ihzmp5H9+jdmUSU9yeelrZgjIol3F+Det4SVe6Og771GkWmTPJ2hGDqrONO3Uv6LVo27j3A0fQYbO1FFDsyyU+JJMDHc+GwuNNEs+guN0q/YUacLua4NF65IA/eTYnF4Trqtoe2bxCor6ewGlIstdzvU+Ntn2Esejf5q7q5O+JHllVBhQCqRSSc02RXjZwvbZNRk1UU+SodFQVS3v5ezFY30ebkdof/omVwD/878Dsglo2wUFnJwwAAAABJRU5ErkJggg==");

},
355707(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799490-d77f7099ffe9508e80e5dbc5e3faae8c.png");

},
859364(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439183-0fafe83f470f7cb8426357ea107a5b34.png");

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