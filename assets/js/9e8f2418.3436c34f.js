"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["260019"], {
666180(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_test_service_deveco_testing_regression_test_regression_test_md_9e8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-test-service-deveco-testing-regression-test-regression-test-md-9e8.json
var site_docs_test_service_deveco_testing_regression_test_regression_test_md_9e8_namespaceObject = JSON.parse('{"id":"test-service/deveco-testing/regression-test/regression-test","title":"回归测试","description":"回归测试","source":"@site/docs/test-service/deveco-testing/regression-test/regression-test.md","sourceDirName":"test-service/deveco-testing/regression-test","slug":"/test-service/deveco-testing/regression-test/","permalink":"/harmonyos-docs-site/test-service/deveco-testing/regression-test/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"回归测试","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/regression-test","kit":"testing","last_updated":"2026-04-20"},"sidebar":"docs","previous":{"title":"探索测试","permalink":"/harmonyos-docs-site/test-service/deveco-testing/exploratory-testing/"},"next":{"title":"实用工具","permalink":"/harmonyos-docs-site/test-service/deveco-testing/tool/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/test-service/deveco-testing/regression-test/regression-test.md


const frontMatter = {
	title: '回归测试',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/regression-test',
	kit: 'testing',
	last_updated: '2026-04-20'
};
const contentTitle = '回归测试';

const assets = {

};



const toc = [{
  "value": "回归测试",
  "id": "回归测试-1",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "回归测试",
        children: "回归测试"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(414373)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1352",
        height: "850"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "回归测试-1",
      children: "回归测试"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****回归测试：****针对待测试应用的指定场景，支持通过构建自定义测试包，无需搭建环境即可执行测试用例。用例执行过程中提供实时投屏、步骤截图、步骤结果和测试用例执行日志展示，辅助开发者快速定位问题；此外，测试报告支持指标上报，辅助开发者了解应用的执行性能，助力开发者更高效地打造出高质量应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "测试包构建"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "回归测试的测试对象为应用的核心功能，用户可将应用核心功能的测试用例构建成多个可执行测试包，每个测试包中仅包含单个测试用例，便于观察到核心功能的每个小功能点的质量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["测试执行前需先构建测试包，用户利用python的setuptools工具在工程（测试工程构建参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ut/hypium-python-guidelines",
        children: "应用UI测试（基于Python）"
      }), "）根目录下构建setup-regression.py、MANIFEST.in文件，setup-regression.py文件中声明用例，MANIFEST.in文件中声明脚本执行过程中需要用到的aw包、config文件夹下的配置文件及其他的资源文件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为方便用户构建测试包，DevEco Testing Hypium（PyCharm插件）已发布，用户可利用插件快速生成可执行测试包。具体操作步骤如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****步骤一：****PyCharm中本地安装 DevEco Testing Hypium 插件，安装成功后重启IDE，导航栏中出现相关字样，即为安装成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****步骤二：****新建hypium工程，编写用例。以下为示例工程目录："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HypiumTest\n |     |----aw                                       // 工程中自定义模块文件夹\n |     |     |----Utils.py                         // 示例模块文件\n |     |----config                                  // 测试工程配置文件夹\n |     |     |----user_config.xml             // 测试工程配置文件，主要是测试框架的任务配置\n |     |----resource                              // 测试资源文件夹，测试过程中用到的资源文件默认会优先从当前文件夹进行查找\n|     |    |----images            // 资源文件子目录\n|     |    |    |----icon_mms.png   // 资源文件，以png图片为例\n |     |----testcases                             // 测试用例文件夹，测试过程中的测试用例文件优先会从当前文件夹进行查找\n |     |    |----Example.json                  // Example测试用例配置文件，配置用例设备信息等\n |     |    |----Example.py                     // Example测试用例文件，实际的测试逻辑代码\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(111998)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在用例脚本中，请导入并使用hypium.advance.deveco_testing.step中的Step方法标记步骤(from hypium.advance.deveco_testing.step import Step)，否则回归测试过程中无法正确读取到测试步骤，并导致指标监控为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****步骤三：****在工程根目录下创建setup-regression.py文件和MANIFEST.in文件（用户本地环境需预先安装setuptools模块），参考python的setuptools用法编写setup-regression.py，示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "from setuptools import setup \n\n setup(\n       name='hypiumTest',\n       version='1.0.0.0',\n       author='xxx',\n       # py_modules指定需要打包的hypium用例py文件\n       py_modules=['testcases.Example'],\n       include_package_data=True\n       )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(901011)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "回归测试生成的可执行测试包中仅支持单用例（即单个json文件和json中指定的用例文件），编写setup-regression.py时需注意写法，否则会打包失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过MANIFEST.in文件指定需要一起打包的文件，示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 与打包用例对应的json文件\n include testcases/Example.json\n# 用例依赖的aw\ninclude aw/*.py\n# 用例中用到的各类配置文件\ninclude config/*.xml\n include config/*.json\n include config/*.txt\n# 用例中用到的resource\ninclude resource/*\ninclude resource/images/*\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(747689)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一定要确保用例所需要的 aw 和配置文件及其他资源全部都写到 MANIFEST.in 中，否则用例包无法正常执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****步骤四：****在根目录下右键选择“DevEco Testing Hypium”-“生成测试服务包”，出现下图弹窗，选择“回归测试”，用户需填写待测试应用的名称及测试场景，信息填写完毕后点击“OK”即可在指定目录下查看测试包。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(728644)/* ["default"] */.A) + "",
        width: "546",
        height: "240"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(131546)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "591",
        height: "375"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生成回归测试测试包，打包好的测试包支持在回归测试服务中本地执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "创建任务"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进入DevEco Testing客户端，在左侧菜单栏选择“回归测试”，点击“回归测试”服务卡片，即进入任务创建界面。按需配置任务参数，点击创建任务即开始测试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(854328)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "787",
        height: "446"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置服务参数："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任务名称：用于标识任务，系统会根据时间生成默认任务名，支持自定义修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "备注信息：按需填写任务备注信息，便于快速筛选报告。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "测试设备：选择一个待测设备。系统版本支持 HarmonyOS 5.0及以上版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "测试包路径：选择待测测试包，服务将对测试包中指定应用进行解析，并执行测试包中测试用例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "测试包详情："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(23235)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1352",
        height: "850"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击查看测试包详情，即可查看测试包基本信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数配置完成后，点击“创建任务”即开始测试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "测试执行"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任务创建后即进入测试执行页面，测试过程中，在测试页面可以看到设备实时投屏、设备截图、测试步骤结果上报以及指标数据上报。执行过程中如果脚本执行失败，任务会立刻停止，生成的报告中仅包含任务失败前的数据信息。手动停止查看报告时，报告中仅包含报告停止前的数据信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(490286)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1143",
        height: "838"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "查看报告"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "测试完成后，将自动跳转到报告界面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(194394)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1117",
        height: "763"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任务信息：在报告的最上方可查看本次任务的应用信息，运行时间，环境参数和执行日志，点击“打开目录”按钮，可以导出html格式的报告文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用信息：基于测试包中指定的待测试应用获取设备上该应用的包名、版本、API版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "环境参数：展示测试设备信息和参数配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "测试结论：本次测试任务的执行结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上报指标：本次任务执行过程中CPU平均使用率、内存平均使用率以及用户在脚本中自定义指标上报，目前不支持自定义指标更新操作，若多次上报同一个指标，仅展示最后一次的指标上报结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "测试截图&CPU使用率：该部分展示了任务执行过程中CPU使用率、内存使用的变化情况，同时移动指针可查看当前时间对应的截图（并非每一秒均存在截图）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行步骤&执行日志：该部分展示了测试用例执行的所有测试步骤、每一步的执行结果以及用例的执行日志，若某一步执行失败，则后续步骤不再执行。点击每一步，CPU使用率统计图中将会展示出该步骤执行过程中的CPU使用情况，同时该步骤对应的执行日志将会高亮显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(276916)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更多测试服务详情，请前往DevEco Testing客户端 -> 回归测试 -> 回归测试 -> 任务创建页 -> 测试指南中查询。"
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
901011(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
490286(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002492343750-113d4eba9479d21db8dbd1df1a99e43e.jpg");

},
111998(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

},
194394(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002492343758-37bb509572cd0e8c09c5e66ff39b9952.png");

},
728644(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
23235(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002538035122-f636923523cc6f5bf546b04da622f7ad.png");

},
414373(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002492343756-25f52509e51d6ef7c455d2862cdabd39.png");

},
747689(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAFZklEQVRo3u2af0zUZRzHX/66o+MOOU6DQ4FJgfyIH9MGGHKogMjCzSScOiwtI7J001mbra1MXEtNM1cB02xBg00TS1MMFIQyBKaAISDEOBAODAERkUOU/ji7PMGLsdpBPu/ttnvueZ7Pffe89nk+P/YdR8wnAwiNNm0dL85gdEqAEWCEBBgBRkiAEWAsJKmEDRGz/xVTywK9WBboBVLJmAUzcbQ8SPKKUGI1bvg4qbBTWNF0vXtY+y43tZOUW2oCeP+bC1DIJBRsTkdXrxNgRqrEpcHEatxQ2lhR3dzBzrUhw6/E0gpNxvFBnihkEvLLrg4JZfeKeQR7OT7S3oGcClLOlgkwiUuDWRfth9LGirScSnZlFXP4SrPJmu/WzmOWuz37T/zG9rwKk7n65jaT8eJnZwCg8ZvOwOFNJnNpOZV0dOsJ8HQwC+bx9hiphNQ1YTwfMMMIZVXSScNh1zWZLFXbyQE4fblp0NyDktmr0PhNp6Orl5qmTtym2aK0saKosgWAnt5+49p9R0vZkHbGOD6/baVZYI8NmPCZziwOcmWyXErK8Uu8/nU22Cig6ybxoX4krw8btCd9cyTpRBrHRwpqidn7w99x6oUAbGQSI+SrX8ajBJYcyDVea5/FLRAxxpxyyms5lO9KdXMHu7KK8ZvpQuqroaSeqeTG7T6D5+i6uNbZM2ivjUyCh4vdIxOEH0sbAJg2VS6yspHota9+AsDBWc2hhDDcnGwJalJzqlQLwLHzdYbrRipBrVYBoKvXPdKjViWd5FR5IxmFFYx1WTz4Oziryd8YhZuTLQXlTcQkZREf5Dko00peH2aIC2bS3+TVEej77xLganpdbZnrCXM9UcqldHTrBZh/kt9MF6On1DR2sig5B/R9I7Y3x0uNj+uUQb+vX+IPQJW2neyLDQKMOS0P8iYpYR6T5VLqdF1o9pykp/Om2Wr9CYn5x527+wR2MikAse6O7FgbQk1jJwv3nQKgvUdPYrivAGNOGRdr+LAjkPK6NjSfnoCum6QmRCGTTuLXatPrylFpDcDtvn6zNrta2ui6/33A3VBE9vXfRX/v3pjrAFjuKtP3se5gPjnVDaDvI9z3aRYHuTIAyB7yDHdHJQB37t4btvlgDzUA3jNUpMQEsjytgFut18cMGIs2MXPKa0Hfh4Ozmi/WaJgsl3K8sI7Mot8fyI0VRAcZqvlXIr1JXh0BQFFlC0q5dEi7cc89Q6jvdACa/ugmeo4r2xb4YG2vEh4z0qxs1cHThlRZew1/WwWV78egkEmo0rbjOFVOfLQPhRU64tN+oaxaO8ietb2Kl0I9UNpYkV2iZXX6Oa4kvsjGmFlYSycxfvw4Y0LwV1IgPOYhLQv0MoGi+TjT4EH2KnYs8idj00I8XOyo0razPCWXkO3HuFTXRpC3mrwt0QbvsVGYQMmICyFitjNdPX1sziyhWatj67eGRud8PyesJBOMxWtRZYvx0znK0miLeUzCfH8+ejkYW7nUBErue7HM83cyrjv6cy1vHCmmpcEQvH3f+YbUhCjiwj2Jj/bhlv4Om9LzADjzVqSx37XnyAXK73vUzqxiAFIvX+Vdjadp8TpKe2UT8Ir8wBJ/XKJrJ3bWUxRWthC197ixfvGd9iRzvNRkl2jZlXmBtzPO0n3DtPWSWVKLrrUHhXQSK9MKjHvrr98mJtCVz78vY8vhApM952qb6b7RjbfjFKobOmjv7iWvqtE47+WgouRKK4XaNupa2y3N5ew4i77wd79pOVThOVT8GJaspNA7Nqp7M7LwC39DQAFGDgX+D1AsH/yFBBgBRkiAEWCEBBghAUaAERJgBBih/1gTga3iGEad8v4EFTP/Ye4wQC4AAAAASUVORK5CYII=");

},
276916(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
854328(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002492343752-6df2d7bf788da31e3bc4181269af84d6.png");

},
131546(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002492343754-bebd69e716808834ff128f02b1008c7b.png");

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