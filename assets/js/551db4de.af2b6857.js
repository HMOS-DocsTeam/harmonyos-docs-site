"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["961198"], {
330928(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ut_hypium_perf_python_guidelines_hypium_perf_python_guidelines_md_551_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ut-hypium-perf-python-guidelines-hypium-perf-python-guidelines-md-551.json
var site_docs_ut_hypium_perf_python_guidelines_hypium_perf_python_guidelines_md_551_namespaceObject = JSON.parse('{"id":"ut/hypium-perf-python-guidelines/hypium-perf-python-guidelines","title":"自定义性能脚本测试（基于Python）","description":"*概述*","source":"@site/docs/ut/hypium-perf-python-guidelines/hypium-perf-python-guidelines.md","sourceDirName":"ut/hypium-perf-python-guidelines","slug":"/ut/hypium-perf-python-guidelines/","permalink":"/harmonyos-docs-site/ut/hypium-perf-python-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"自定义性能脚本测试（基于Python）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hypium-perf-python-guidelines","kit":"testing","last_updated":"2026-04-20"},"sidebar":"docs","previous":{"title":"应用UI测试（基于Python）","permalink":"/harmonyos-docs-site/ut/hypium-python-guidelines/"},"next":{"title":"HiSmartPerf Device性能使用指导","permalink":"/harmonyos-docs-site/test-service/indev_cmd/smartperf-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ut/hypium-perf-python-guidelines/hypium-perf-python-guidelines.md


const frontMatter = {
	title: '自定义性能脚本测试（基于Python）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hypium-perf-python-guidelines',
	kit: 'testing',
	last_updated: '2026-04-20'
};
const contentTitle = '自定义性能脚本测试（基于Python）';

const assets = {

};



const toc = [{
  "value": "<strong><strong>概述</strong></strong>",
  "id": "概述",
  "level": 2
}, {
  "value": "<strong><strong>环境搭建</strong></strong>",
  "id": "环境搭建",
  "level": 2
}, {
  "value": "<strong><strong>脚本写作&amp;调试</strong></strong>",
  "id": "脚本写作调试",
  "level": 2
}, {
  "value": "脚本写作",
  "id": "脚本写作",
  "level": 2
}, {
  "value": "测试框架介绍",
  "id": "测试框架介绍",
  "level": 2
}, {
  "value": "本地脚本调试",
  "id": "本地脚本调试",
  "level": 2
}, {
  "value": "<strong><strong>性能脚本测试执行</strong></strong>",
  "id": "性能脚本测试执行",
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
        id: "自定义性能脚本测试基于python",
        children: "自定义性能脚本测试（基于Python）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "概述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Testing场景化的性能测试服务，基于Hypium自动化测试框架，为开发者提供性能测试能力，支持使用Python编写应用的性能测试脚本。本指南主要讲解性能测试脚本的开发。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hypium基本API接口功能介绍，请参考指导：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ut/hypium-python-guidelines#section1141818121333",
        children: "Hypium框架-API使用方法"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["测试服务执行测试脚本详情介绍，请参考指导：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/test-service/deveco-testing/specialized-testing#section8642101711299",
        children: "场景化性能测试"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境搭建",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "环境搭建"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1、系统要求"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Windows"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "操作系统：Windows 10/11 64 位"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内存：推荐使用16GB及以上（可用内存大于8G）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["处理器：", (0,jsx_runtime.jsx)(_components.a, {
        href: "mailto:i7-10700@2.9GHz",
        children: "i7-10700@2.9GHz"
      }), "或者同等性能的型号"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "硬盘：可用硬盘空间100GB以上"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Mac"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "操作系统：MacOS 13及以上"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内存：推荐使用16GB及以上（可用内存大于8G）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["处理器：", (0,jsx_runtime.jsx)(_components.a, {
        href: "mailto:i7-10700@2.9GHz",
        children: "i7-10700@2.9GHz"
      }), "及以上或Apple silicon M系列"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "硬盘：可用硬盘空间100GB以上"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2、环境配置"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "安装Python及Hypium"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考指导：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ut/hypium-python-guidelines",
        children: "应用UI测试-安装指导"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "安装hypium_perf"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1）打开DevEco Testing客户端-专项测试-场景化性能测试卡片，点击获取安装包，打开安装包目录，如下图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(623402)/* ["default"] */.A) + "",
        width: "705",
        height: "299"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2）由于存在依赖关系，需要依次步骤1目录下的hypium、hypium-perf、perf_analyzer等安装包。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装命令示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "pip install hypium-6.0.7.210.tar.gz\npip install hypium-perf-6.0.7.210.tar.gz\npip install perf_analyzer-6.0.7.203b0-py3-none-any.whl perf_collector-6.0.7.203b0-py3-none-any.whl perf_common-6.0.7.203b0-py3-none-any.whl perf_resource-6.0.7.203b0-py3-none-any.whl\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(426529)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、以上命令中安装包的版本仅供示例，具体版本号请参照实际下载版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、若安装 paddlepaddle 失败，请先安装当前目录下提供的 paddlepaddle 的 whl 包，然后再安装其他 Python 包。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3）安装完成后，可前往查看PyCharm-设置-项目-Python解释器中的软件包与已安装版本是否一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "脚本写作调试",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "脚本写作&调试"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "脚本写作",
      children: "脚本写作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1、下载工程模板"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1）打开DevEco Testing客户端-专项测试-场景化性能测试卡片，在测试前准备中，点击创建工程模板按钮。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(513489)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "819",
        height: "693"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2）填写工程项目名称，选择工程存放路径，点击开始生成按钮。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(724287)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1346",
        height: "638"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3）在步骤2中填写的项目路径下，将自动生成用例模板。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(764167)/* ["default"] */.A) + "",
        width: "686",
        height: "189"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(956078)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "已创建的工程模板可在PyCharm中直接调试，或根据实际测试场景编写脚本。调试成功后，即可在DevEco Testing上执行性能测试。详细步骤请参阅本地脚本调试及测试执行章节。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2、场景用例和原子用例使用说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（1）测试步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户的一次操作定义为一个测试步骤。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（2）原子用例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多个测试步骤组合完成一套操作，形成一个原子用例。原子用例存放在models目录中，对应脚本中的一个模型，具有独立的编号。原子用例是最小的用例单元，且可以被重复使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（3） 场景用例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户完成一件事情定义为一个场景用例。例如：用户在小红书浏览后去淘宝搜索购物。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一个场景用例对应一个用例文件，编号与文件名一致，存放在testcases目录下。场景用例是测试执行的入口，一个场景用例可以由多个原子用例组成。例如，上述场景可以由两个原子用例组成：1）用户浏览小红书；2）用户在淘宝搜索并购物。这两个原子用例独立且可被重用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果有另一个场景用例：用户在小红书浏览后去京东购物，那么“用户浏览小红书”这个原子用例即可被重用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "测试的执行入口和结果反馈均以场景用例为单位。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(885402)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1个性能场景用例由1-N个原子用例(Model)组成，1个原子用例对应1-N个测试步骤。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "每个场景用例都需要一个配对的json配置文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景用例包含的步骤数建议在30个步骤以下，步骤数过多可能会导致执行异常，建议进行用例拆分。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "原子用例可以放在models目录下，推荐按照APP进行区分。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "3、场景用例写作指导"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Testcase编写规范："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Testcase对应的是测试场景中的一系列相关的原子用例操作序列。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（1）命名规范："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一个Testcase是一个独立的Python文件，Testcase编号与Python文件名一致，例：OH_PerfDemoTest.py。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（2）继承规范："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Testcase必须继承PerfBaseCase类，PerfBaseCase会负责用例开始时的初始化流程，进行一些设备环境检查操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（3）注释规范："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将Testcase的场景描述放置在用例最上方，方便审视测试场景所包含的原子用例执行步骤对应关系。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景用例示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import os\nfrom hypium.advance.perf.application_model.perf_basecase import PerfBaseCase\nfrom models.browse_huawei_video import BrowseHuaweiVideo\n# 场景用例名，和py文件名一致，可以自定义，但有推荐命名格式，需同步生成同名的json文件\n# 测试用例应继承PerfBaseCase\n'''\n@场景用例\n浏览视频应用界面\n@预置条件\n无\n@原子用例\n视频页面浏览\n'''\nclass OH_PerfDemoTest(PerfBaseCase):\n    def __init__(self, controllers):  # 初始化操作，这里一般情况下不作变动\n        self.TAG = self.__class__.__name__\n        self.tests = [  # 指定场景用例执行入口\n            \"test_step\"\n        ]\n        self.case_id = os.path.splitext(os.path.basename(__file__))[0]  # 文件名, 类名, case_id 三者保持一致\n        self.case_scene_name = '浏览视频应用界面'  # 指定场景用例名称，用于显示在报告中\n        case_pkg = 'com.huawei.hmsapp.himovie'  # 指定被测试应用，用于采集应用资源使用信息，如果未配置，则不采集\n        PerfBaseCase.__init__(self, controllers, case_pkg)  # 调用父类初始化方法\n        self.log.info(\"Case id is %s\" % self.case_id)\n    def setup(self):\n        # 场景用例前置化操作，在test_step前执行的一些操作\n        self.log.info(\"预置工作:初始化设备开始.................\" + self.devices[0].device_sn)\n    def test_step(self):\n        # 组装需要调用的原子用例，使用原子化用例构建场景步骤，可以一个场景用例添加多个相关的原子用例\n        steps = [\n            # 原子用例需要传入driver，case_id\n            BrowseHuaweiVideo(self.driver, self.case_id)\n        ]\n        # 按顺序执行原子用例\n        for item in steps:\n            item.execute()\n    def teardown(self):\n        # 获取用例测试结果\n        result = self.get_case_result()\n        # 场景用例结束后执行该teardown操作\n        self.log.info(\"收尾工作................., result is {}\".format(result))\n        # 此处为用例结尾时执行的PerfBaseCase的teardown方法，处理一些结束操作\n        PerfBaseCase.teardown(self)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_PerfDemoTest.json 配置文件示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"description\": \"Config for OpenHarmony devicetest test cases\",\n    \"environment\": [\n        {\n            \"type\": \"device\"\n        }\n    ],\n    \"driver\": {\n        \"type\": \"DeviceTest\",\n        \"py_file\": [\"OH_PerfDemoTest.py\"]\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(545847)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "py_file 的值表示场景用例文件相对于 testcases 文件夹的路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，若场景用例文件直接位于 testcases 文件夹下，则 py_file 的值为 [\"OH_PerfDemoTest.py\"]，若场景用例文件位于 testcases 下的 test_01 文件夹中，则 py_file 的值为 [\"test_01/OH_PerfDemoTest.py\"]。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "4、原子用例写作指导"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Model编写规范："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Model对应的是原子用例中的一组操作序列，在脚本编写时对应一个Model类。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（1）命名规范："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一个Model是一个原子用例，Model类命名要有一定业务含义，例如：”视频页面浏览”命名为BrowseHuaweiVideo。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（2）继承规范："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Model类必须继承基类ModelBase，ModelBase会负责与采集器的交互，并且处理Model类抛出的异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（3）注释规范："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将原子用例操作步骤放置在用例最上方，方便审视Model类步骤和用例执行步骤对应关系。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "原子用例示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "from hypium import BY\nfrom hypium.advance.perf.application_model.model_base import ModelBase\nfrom hypium.advance.perf.driver_perf.idriver_perf import IDriverPerf\nfrom hypium.advance.perf.driver_perf.tag import SceneType\nfrom hypium.model import UiParam\n'''\n@原子用例\n视频页面浏览\n@预置条件\n无\n@用例步骤\n1.冷启动视频\n2.上滑1次浏览界面\n3.下滑1次浏览界面\n4.切换到影院界面\n5.精确的向上滑动界面\n6.抛滑，向下滑动界面\n7.侧滑返回\n8.点击我的\n9.上滑返回桌面\n'''\nAPP_NAME = \"视频\"\nclass BrowseHuaweiVideo(ModelBase):  # 原子用例统一继承ModelBase\n    def __init__(self, uidriver: IDriverPerf, case_id):  # 进行初始化操作\n        ModelBase.__init__(self, uidriver, case_id)  # 调用父类初始化方法\n        self.scene_no = \"browse_huawei_video\"  # 原子用例id\n        self.scene_name = \"浏览视频应用\"  # 原子用例名字\n        self.scene_type = \"浏览视频应用场景\"  # 原子用例类型\n        self.scene_path = \"日常高频操作-基础操作场景-系统通用操作场景-浏览视频应用\"  # 原子用例所属路径\n        self.driver = uidriver\n    def setup(self):\n        # 原子用例预置动作\n        # 停止指定的应用\n        self.driver.stop_app('com.huawei.hmsapp.himovie')\n        # 返回手机桌面主页\n        self.driver.go_home()\n    @ModelBase.scene_recover\n    def execute(self):\n        # 1.冷启动应用'视频'\n        # start_application_perf 启动应用的接口，从主页开始滑动查找对应APP名的应用，应用需要在桌面上可见，找到应用直接点击，打开应用\n        # start_application_perf 接口为6.0版本新增接口请基于 DevEco Testing Hypium6.0.0 Release版本使用\n        self.driver.start_application_perf(\"视频\", SceneType.COLD_START)\n        # 等待指定时间，等待界面稳定，再进行下一步操作\n        self.driver.wait(3)\n        # 2.上滑1次浏览界面\n        # swipe_perf 在屏幕上或者指定区域area中执行朝向指定方向direction的滑动操作\n        self.driver.swipe_perf(UiParam.UP,\n                               tag=self.create_tag(\"上滑1次浏览界面\", SceneType.NO_PAGE_SWITCH))\n        # 等待指定时间，等待界面稳定，再进行下一步操作\n        self.driver.wait(1)\n        # 3.下滑1次浏览界面\n        self.driver.swipe_perf(UiParam.DOWN,\n                               tag=self.create_tag(\"下滑1次浏览界面\", SceneType.NO_PAGE_SWITCH))\n        # 等待指定时间，等待界面稳定，再进行下一步操作\n        self.driver.wait(1)\n        # 4.使用find_component查找控件，返回一个控件对象（控件文本为影院）\n        com = self.driver.find_component(BY.text('影院'))\n        # 可将控件对象传入touch_perf，会自动识别并转换为坐标点击\n        self.driver.touch_perf(com, tag=self.create_tag(\"切换到影院界面\", SceneType.WITH_PAGE_SWITCH))\n        # 5.精确的向上滑动界面\n        # slide_perf 根据指定的起始和结束位置执行滑动操作，起始和结束的位置可以为控件或者屏幕坐标。该接口用于执行较为精准的滑动操作。\n        self.driver.slide_perf((0.5, 0.8), (0.5, 0.2), slide_time=0.5,\n                               tag=self.create_tag(\"精确的向上滑动界面\", SceneType.NO_PAGE_SWITCH))\n        # 6.抛滑，向下滑动界面\n        # fling_perf 抛滑接口\n        self.driver.fling_perf(UiParam.DOWN, tag=self.create_tag(\"抛滑，向下滑动界面\", SceneType.NO_PAGE_SWITCH))\n        # 对于不需要性能指标的接口，可以使用不带perf的接口\n        self.driver.touch((0.5, 0.3))\n        # 等待指定时间，等待界面稳定，再进行下一步操作\n        self.driver.wait(3)\n        # 7.侧滑返回，退出\n        # swipe_to_back_perf 滑动屏幕右侧返回\n        self.driver.swipe_to_back_perf(tag=self.create_tag(\"侧滑返回\", SceneType.WITH_PAGE_SWITCH))\n        # 使用find_all_components根据BY指定的条件查找控件, 返回所有符合条件的控件，返回值是多个多个控件对象的值组成的列表（控件text值为我的）\n        comps = self.driver.find_all_components(BY.text(\"我的\"))\n        # 8.点击我的\n        # 可将控件对象传入touch_perf，会自动识别并转换为坐标点击\n        self.driver.touch_perf(comps[0], tag=self.create_tag(\"点击我的\", SceneType.WITH_PAGE_SWITCH))\n        # 9.上滑返回桌面\n        # swipe_to_home_perf 从屏幕底部上滑返回桌面\n        self.driver.swipe_to_home_perf(tag=self.create_tag(\"上滑返回桌面\", SceneType.WITH_PAGE_SWITCH))\n    def teardown(self):\n        # 原子用例结束清理步骤\n        # 停止指定的应用\n        self.driver.stop_app('com.huawei.hmsapp.himovie')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "5、使用UIViewer查看控件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用DevEco Testing->实用工具->UIViewer工具，辅助脚本写作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(256113)/* ["default"] */.A) + "",
        width: "938",
        height: "803"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "测试框架介绍",
      children: "测试框架介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1、功能介绍"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "性能测试框架作为Hypium自动化测试框架的增强能力，其设备操作API与Hypium保持一致。该框架主要负责性能自动化测试模型的流程控制，管理测试过程中的trace资源和视频资源采集，并提供自动化测试完成后的指标分析功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hypium基本API接口功能介绍，请参考指导：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ut/hypium-python-guidelines#section1141818121333",
        children: "Hypium框架-API使用方法"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注：若测试场景包含隐私界面则无法录屏进行测试，例如银行类应用、密码界面等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2、场景tag"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景tag是测试框架定义的一套用于标注测试步骤使用场景的标签。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def create_tag(self, step_name=\"\", scene_type=\"\", tag_id=\"\", pkg_name=\"\", dynamic_type=\"\", action_type=\"\", trigger_type=\"\", is_first_swipe=False, wait_time=0, is_watch=False, is_seek=False, is_short_video=False, need_wait_scene=True, ad_monitor=False, cold_start_wait_time=None, pop_up_window_enable=True, extend_param={})\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "step_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必填，测试步骤名字。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scene_type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必填，对应性能tag类型，从SceneType中选择。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tag_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非必填，指定标签id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pkg_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非必填，测试应用相关包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dynamic_type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非必填，标记当前操作是否为动态阈值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "action_type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非必填，标记当前操作的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "is_first_swipe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认False，标记是否为列表页面的首次滑动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wait_time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认0，增加采集时长，避免采集未包含全部动效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "is_watch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认False，不做视频观看操作，设置为True会对页面进行30S观看，在scene_type为WATCH时生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "is_seek"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认False，设置为True表示该操作为滑动进度条的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "is_short_video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认False，在scene_type字段为PLAY_VIDEO时生效，标记起播视频为长视频（False）或者短视频（True）。  （时长小于5分钟的视频为短视频）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "need_wait_scene"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认True，在执行完perf接口后需要进行预置等待时间，设置为False时，不需要进行等待。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ad_monitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认为False，在scene_type字段为COLD_START时生效，设置为True时，会进行广告检测。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cold_start_wait_time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非必填，在scene_type字段为COLD_START时生效，表示冷启动后，需要额外等待的时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pop_up_window_enable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认True，在scene_type字段为COLD_START时生效，表示冷启动后，是否执行一次弹窗检测操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extend_param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预留字段。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(396713)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "所有性能测试需要采集指标的步骤，有以下3个原则："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "API接口使用 _perf方法。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "必须带上场景tag。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "每个步骤必须是单独的tag，不能多个步骤共用一个tag。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["****3、****", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景tag类型"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class SceneType(Enum):\n    # 起播时延\n    PLAY_VIDEO = \"PLAY_VIDEO\"\n    # 冷启\n    COLD_START = \"COLD_START\"\n    # 热启\n    HOT_START = \"HOT_START\"\n    # 有页面切换\n    WITH_PAGE_SWITCH = \"WITH_PAGE_SWITCH\"\n    # 无页面切换\n    NO_PAGE_SWITCH = \"NO_PAGE_SWITCH\"\n    # 视频观看\n    WATCH = \"WATCH\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注：滑动和无页面切换操作的场景不测完成时延；冷启动操作前需要杀掉该后台应用，热启动操作前需要拉起该应用并置于后台。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["****4、****", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "hypium_perf常用接口和用法"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Hypium的界面操作接口上封装一套perf接口，提供给性能测试使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(645961)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下所有示例代码中driver都是UiExplorerPerf对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Phone常用接口"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1、点击********操作"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def touch_perf(self, target: Union[By, UiComponent, tuple], wait_time: float = 0.1, tag: Tag = None)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据选定的控件或者坐标位置执行点击操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数说明"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "序号"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要点击的目标，可以为控件（通过By类指定）或者屏幕坐标（通过tuple类型指定，例如（100，200）， 其中100为x轴坐标，200为y轴坐标）， 或者使用find_component找到的控件对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wait_time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "点击后等待响应的时间，默认0.1s。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对应性能场景tag，点击如果进入新界面，需使用WITH_PAGE_SWITCH（有界面切换的场景类型）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 点击文本为\"hello\"的控件\ndriver.touch_perf(BY.text(\"hello\"), tag=self.create_tag(\"点击hello\", SceneType.NO_PAGE_SWITCH))\n\n# 点击（100，200）的位置\ndriver.touch_perf(（100，200）, tag=self.create_tag(\"点击（100，200）\", SceneType.NO_PAGE_SWITCH))\n\n# 冷启动相机\nAPP_NAME=\"相机\"\nicon_pos = self.driver.find_app_in_launcher(APP_NAME)\ndriver.touch_perf(icon_pos, tag=self.create_tag(\"相机冷启动\", SceneType.COLD_START))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2、长按********操作"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def long_touch_perf(self, target: Union[By, UiComponent, tuple], tag: Tag = None)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据选定的控件或者坐标位置执行长按操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数说明"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "序号"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要点击的目标，可以为控件（通过By类指定）或者屏幕坐标（通过tuple类型指定，例如（100，200）， 其中100为x轴坐标，200为y轴坐标），或者使用find_component找到的控件对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对应性能场景tag，点击如果进入新界面，需使用WITH_PAGE_SWITCH（有界面切换的场景类型）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 长按相机图标，弹出弹窗\nAPP_NAME=\"相机\"\nicon_pos = self.driver.find_app_in_launcher(APP_NAME)\ndriver.long_touch_perf(icon_pos, tag=self.create_tag(\"长按相机图标弹出弹窗\", SceneType.NO_PAGE_SWITCH))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "3、双击********操作"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def double_touch_perf(self, target: Union[By, UiComponent, tuple], tag: Tag = None)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据选定的控件或者坐标位置执行双击操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数说明"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "序号"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要点击的目标，可以为控件（通过By类指定）或者屏幕坐标（通过tuple类型指定，例如（100，200）， 其中100为x轴坐标，200为y轴坐标），或者使用find_component找到的控件对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对应性能场景tag，点击如果进入新界面，需使用WITH_PAGE_SWITCH（有界面切换的场景类型）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 双击确认按钮（控件文本为确认）\ndriver.double_touch_perf(BY.text(\"确认\"), tag=self.create_tag(\"双击确认按钮\", SceneType.WITH_PAGE_SWITCH))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "4、执行指定距离的滑动操作"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def swipe_perf(self, direction: str, distance: int = 60, start_point: tuple = None, swipe_time: float = None, tag: Tag = None)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在屏幕上或者指定区域area中执行朝向指定方向direction的滑动操作。该接口用于执行不太精准的滑动操作。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "序号"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑动方向，目前支持：”LEFT” 左滑；”RIGHT” 右滑；”UP” 上滑；”DOWN” 下滑。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "distance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相对滑动区域总长度的滑动距离，范围为1~100，表示滑动长度为滑动区域总长度的1%到100%， 默认为60。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "start_point"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑动起始点，默认为None，表示在区域中间位置执行滑动操作，可以传入滑动起始点坐标，支持使用(0.5, 0.5)这样的比例坐标。当同时传入side和start_point的时候，仅start_point生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "swipe_time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑动时间（s)， 默认0.3s。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对应性能场景tag，若该操作不涉及页面切换，需使用NO_PAGE_SWITCH。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 在屏幕上向上滑动40\ndriver.swipe_perf(UiParam.UP, distance=40, tag=self.create_tag(\"向上滑动\", SceneType.NO_PAGE_SWITCH))\n\n# 在屏幕上向右滑动, 滑动时间为0.1秒\ndriver.swipe_perf(UiParam.RIGHT, swipe_time=0.1, tag=self.create_tag(\"向右滑动\", SceneType.NO_PAGE_SWITCH))\n\n# 在屏幕起始点为比例坐标为(0.8, 0.8)的位置向上滑动30\ndriver.swipe_perf(UiParam.UP, 30, start_point=(0.8, 0.8), tag=self.create_tag(\"向上滑动\", SceneType.NO_PAGE_SWITCH))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "5、执行精准的滑动操作"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def slide_perf(self, start: Union[By, tuple], end: Union[By, tuple], slide_time: float = 2, tag: Tag = None)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据指定的起始和结束位置执行滑动操作，起始和结束的位置可以为控件或者屏幕坐标。该接口用于执行较为精准的滑动操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数说明"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "序列"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑动起始位置，可以为控件BY.text(\"滑块\")或者坐标（100，200），或者使用find_component找到的控件对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑动结束位置，可以为控件BY.text(\"最大值\")或者坐标（100，200）, 或者使用find_component找到的控件对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "slide_time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑动操作总时间，单位秒。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对应性能场景tag，若该操作不涉及页面切换，需使用NO_PAGE_SWITCH。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 从类型为Slider的控件滑动到文本为最大的控件\ndriver.slide_perf(BY.type(\"Slider\"), BY.text(\"最大\"),tag=self.create_tag(\"滑动到最大\", SceneType.NO_PAGE_SWITCH))\n\n# 从坐标100，200滑动到300，400\ndriver.slide_perf(（100，200）, (300, 400), tag=self.create_tag(\"向上滑动\", SceneType.NO_PAGE_SWITCH))\n\n# 从坐标100，200滑动到300，400, 滑动时间为3秒\ndriver.slide_perf(（100，200）, (300, 400), slide_time=3, tag=self.create_tag(\"向上滑动\", SceneType.NO_PAGE_SWITCH))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "6、拖拽********操作"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def drag_perf(self, start: Union[By, tuple], end: Union[By, tuple],\n                  area: By = None, press_time: float = 1, drag_time: float = 1, tag: Tag = None)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据指定的起始和结束位置执行拖拽操作，起始和结束的位置可以为控件或者屏幕坐标。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数说明"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "序号"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽起始位置，可以为控件BY.text(\"滑块\")或者坐标（100，200），或者使用find_component找到的控件对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽结束位置，可以为控件BY.text(\"最大值\")或者坐标（100，200），或者使用find_component找到的控件对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "area"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽操作区域，可以为控件BY.text(\"画布\")，或者使用find_component找到的控件对象。目前仅在start或者end为坐标时生效，指定区域后，当start和end为坐标时，其坐标将被视为相对于指定的区域的相对位置坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "press_time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽操作开始时长按的时间，默认为1s（暂不支持修改）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "drag_time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖动的时间， 默认为1s（整个拖拽操作总时间 = press_time + drag_time）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对应性能场景tag，若该操作不涉及页面切换，需使用NO_PAGE_SWITCH。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 拖拽文本为\"文件.txt\"的控件到文本为\"上传文件\"的控件\ndriver.drag_perf(BY.text(\"文件.txt\"), BY.text(\"上传文件\"), tag=self.create_tag(\"拖拽文件\", SceneType.NO_PAGE_SWITCH))\n\n# 拖拽id为\"start_bar\"的控件到坐标（100，200）的位置, 拖拽时间为2秒\ndriver.drag_perf(BY.key(\"start_bar\"), （100，200）, drag_time=2, tag=self.create_tag(\"拖拽start_bar\", SceneType.NO_PAGE_SWITCH))\n\n# 在id为\"Canvas\"的控件上从相对位置(10, 20)拖拽到（100，200）\ndriver.drag_perf((10, 20), （100，200）, area = BY.id(\"Canvas\"), tag=self.create_tag(\"拖拽Canvas\", SceneType.NO_PAGE_SWITCH))\n\n# 在滑动条上从相对位置(10, 10)拖拽到(10, 200)\ndriver.drag_perf((10, 10), (10, 200), area=BY.type(\"Slider\"), tag=self.create_tag(\"拖拽滑动条\", SceneType.NO_PAGE_SWITCH))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "7、屏幕侧边滑动返回********操作"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def swipe_to_back_perf(self, side=UiParam.RIGHT, times: int = 1, height: float = 0.5, tag: Tag = None)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "滑动屏幕侧边返回。设备需开启触摸屏手势导航。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数说明"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "序号"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "side"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑动的位置，“RIGHT“表示在右边滑动返回，“LEFT“表示在左边滑动返回。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "times"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑动次数，默认1次，某些场景可能需要两次才能返回。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑动位置在屏幕中Y轴的比例高度（从屏幕顶部开始计算）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对应性能场景tag，侧边返回有界面切换时，需使用WITH_PAGE_SWITCH。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 侧滑返回\nself.driver.swipe_to_back_perf(tag=self.create_tag(\"侧滑返回\", SceneType.WITH_PAGE_SWITCH))\n\n# 侧滑2次返回\nself.driver.swipe_to_back_perf(times=2, tag=self.create_tag(\"侧滑2次返回\", SceneType.WITH_PAGE_SWITCH))\n\n# 设置侧滑位置的高度比例为屏幕高度的80%，即在屏幕靠下的位置侧滑返回\nself.driver.swipe_to_back_perf(height=0.8, tag=self.create_tag(\"屏幕靠下的位置侧滑返回\", SceneType.WITH_PAGE_SWITCH))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "8、从屏幕底部上滑返回桌面"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def swipe_to_home_perf(self, times: int = 1, tag: Tag = None)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "屏幕底端上滑回到桌面，设备预置：设备开启触摸屏手势导航。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数说明"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "序号"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "times"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上滑次数，默认1次，某些场景可能需要两次上滑才能返回桌面。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对应性能场景tag，返回桌面一般带有界面切换，需使用WITH_PAGE_SWITCH。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 上滑返回桌面\nself.driver.swipe_to_home_perf(tag=self.create_tag(\"上滑返回桌面\", SceneType.WITH_PAGE_SWITCH))\n\n# 连续上滑2次返回桌面\nself.driver.swipe_to_home_perf(times=2, tag=self.create_tag(\"上滑返回桌面\", SceneType.WITH_PAGE_SWITCH))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "9、观看视频"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def watch_perf(self, watch_time, is_bullet_screen=False, is_full_screen=False, watch_tag_desc=None)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在页面停留指定时间，进行观看视频操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数说明"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "序号"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "watch_time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "观看时长，防止长时间观看行为导致视频过大，会按照30S对时长进行分割。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "is_bullet_screen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认False，设置为True时，对视频播放与弹幕进行卡顿检测。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "is_full_screen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认False，设置为True时，表示当前为全屏播放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "watch_tag_desc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非必填，填写后会生成步骤操作描述，对于观看时间大于30S的场景，不建议设置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 观看20S视频，检测视频卡顿\nself.watch_perf(20)\n\n# 全屏观看20S视频，检测弹幕卡顿与视频卡顿\nself.watch_perf(20, is_bullet_screen=True, is_full_screen=True)\n\n# 指定操作步骤观看视频\nself.watch_perf(20, watch_tag_desc=\"观看直播视频\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "10、在桌面滑动查找APP，并打开应用"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def start_application_perf(self, app_name, scene_type, tag=None)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于APP名称，在桌面上滑动查找指定APP，并进行点击。设备预置：需提前下载APP，并放置在桌面，不要放入文件夹中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数说明"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "序号"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "app_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用名称，与桌面上显示的名称一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "scene_type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用启动方式，为SceneType.COLD_START或者SceneType.HOT_START。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非必填，如果没赋值，则会根据scene_type自动生成。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 启动设置应用\nself.driver.start_application_perf(\"设置\", SceneType.COLD_START)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 查找需要操作的窗口\nwindow = driver.find_window(WindowFilter().bundle_name(package_name))\n# 点击窗口最小化\ndriver.minimize_window_perf(window, tag=self.create_tag(\"点击窗口最小化\", \nscene_type=SceneType.WITH_PAGE_SWITCH))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "常用视频检测场景介绍"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1、视频起播时延测试步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 点击视频图框播放视频\nself.driver.touch_perf(BY.text(\"视频\"), tag=self.create_tag(\"点击播放长视频\", SceneType.PLAY_VIDEO, is_seek=False, is_short_video=True))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2、视频卡顿测试步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景1：测试视频卡顿"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 观看180S视频\nself.watch_perf(180)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景2：测试起播时延与视频卡顿"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "watch_tag=self.create_tag(\"点击播放长视频并观看\", SceneType.PLAY_VIDEO, is_seek=False, is_short_video=True)\nwatch_tag.watch_time=10\n# 点击视频图框播放视频，并观看10S视频\nself.driver.touch_perf(BY.text(\"视频\"), tag=watch_tag)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "本地脚本调试",
      children: "本地脚本调试"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["****1、****", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "main.py实现"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****方法一：****在main.py中修改cmd命令，将参数替换为本地调试的场景用例名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(180276)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1183",
        height: "545"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "main.py示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import time\nfrom xdevice.__main__ import main_process\nif __name__ == \"__main__\":\n    try:\n        pass_dict = dict()\n        pass_dict['task_id'] = time.strftime('%Y%m%d%H%M%S', time.localtime())\n        cmd = 'run -l OH_PerfDemoTest -ta pass_through:' + str(pass_dict)\n        main_process(cmd)\n        time.sleep(10)\n    except Exception as e:\n        print(e)\n    finally:\n        print(\"Task is End\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****方法二：****在main.py同级目录下，新建一个json文件，命名为action_testsuite.json，并在main.py中修改cmd命令。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(233087)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "691",
        height: "290"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "action_testsuite.json示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"description\": \"hypium test case\",\n    \"environment\": [\n        {\n            \"type\": \"device\"\n        }\n    ],\n    \"driver\": {\n        \"type\": \"DeviceTest\",\n        \"py_file\": [\n            \"OH_PerfDemoTest.py\"\n        ]\n    },\n    \"kits\": [\n    ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2、本地多用例执行方式"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一个测试任务执行多个场景用例，而不必每个场景用例单独执行，任务会按照顺序依次执行指定的场景用例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****方法一：****在main.py 的cmd命令中指定多个case，用”;”分割。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(134360)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1213",
        height: "475"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****方法二：****在json文件配置，并在main.py的cmd命令参数中指定json文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(258706)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "691",
        height: "290"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "action_testsuite.json示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"description\": \"hypium test case\",\n    \"environment\": [\n        {\n            \"type\": \"device\"\n        }\n    ],\n    \"driver\": {\n        \"type\": \"DeviceTest\",\n        \"py_file\": [\n            \"Open_Perf_Test.py\",\n            \"OH_PerfDemoTest.py\"\n        ]\n    },\n    \"kits\": [\n    ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(488241)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****执行方式：****在工程文件中执行 main.py；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****预期结果：****设备按照脚本定义的测试步骤执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "性能脚本测试执行",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "性能脚本测试执行"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["性能脚本本地调试验证成功后，可在DevEco Testing创建性能测试任务，请查看文档：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/test-service/deveco-testing/specialized-testing#section8642101711299",
        children: "场景化性能测试-任务创建"
      }), "。"]
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
134360(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002492343726-ed0a9f400682f5b4793252e8d52f4cba.png");

},
488241(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
724287(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002524503435-3e2b02e9c7a6a4d75598327a9937daec.png");

},
956078(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
513489(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002492343738-db7505f0bee538b8ad3c5a10b7f9bd8d.png");

},
396713(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

},
645961(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAFZklEQVRo3u2af0zUZRzHX/66o+MOOU6DQ4FJgfyIH9MGGHKogMjCzSScOiwtI7J001mbra1MXEtNM1cB02xBg00TS1MMFIQyBKaAISDEOBAODAERkUOU/ji7PMGLsdpBPu/ttnvueZ7Pffe89nk+P/YdR8wnAwiNNm0dL85gdEqAEWCEBBgBRkiAEWAsJKmEDRGz/xVTywK9WBboBVLJmAUzcbQ8SPKKUGI1bvg4qbBTWNF0vXtY+y43tZOUW2oCeP+bC1DIJBRsTkdXrxNgRqrEpcHEatxQ2lhR3dzBzrUhw6/E0gpNxvFBnihkEvLLrg4JZfeKeQR7OT7S3oGcClLOlgkwiUuDWRfth9LGirScSnZlFXP4SrPJmu/WzmOWuz37T/zG9rwKk7n65jaT8eJnZwCg8ZvOwOFNJnNpOZV0dOsJ8HQwC+bx9hiphNQ1YTwfMMMIZVXSScNh1zWZLFXbyQE4fblp0NyDktmr0PhNp6Orl5qmTtym2aK0saKosgWAnt5+49p9R0vZkHbGOD6/baVZYI8NmPCZziwOcmWyXErK8Uu8/nU22Cig6ybxoX4krw8btCd9cyTpRBrHRwpqidn7w99x6oUAbGQSI+SrX8ajBJYcyDVea5/FLRAxxpxyyms5lO9KdXMHu7KK8ZvpQuqroaSeqeTG7T6D5+i6uNbZM2ivjUyCh4vdIxOEH0sbAJg2VS6yspHota9+AsDBWc2hhDDcnGwJalJzqlQLwLHzdYbrRipBrVYBoKvXPdKjViWd5FR5IxmFFYx1WTz4Oziryd8YhZuTLQXlTcQkZREf5Dko00peH2aIC2bS3+TVEej77xLganpdbZnrCXM9UcqldHTrBZh/kt9MF6On1DR2sig5B/R9I7Y3x0uNj+uUQb+vX+IPQJW2neyLDQKMOS0P8iYpYR6T5VLqdF1o9pykp/Om2Wr9CYn5x527+wR2MikAse6O7FgbQk1jJwv3nQKgvUdPYrivAGNOGRdr+LAjkPK6NjSfnoCum6QmRCGTTuLXatPrylFpDcDtvn6zNrta2ui6/33A3VBE9vXfRX/v3pjrAFjuKtP3se5gPjnVDaDvI9z3aRYHuTIAyB7yDHdHJQB37t4btvlgDzUA3jNUpMQEsjytgFut18cMGIs2MXPKa0Hfh4Ozmi/WaJgsl3K8sI7Mot8fyI0VRAcZqvlXIr1JXh0BQFFlC0q5dEi7cc89Q6jvdACa/ugmeo4r2xb4YG2vEh4z0qxs1cHThlRZew1/WwWV78egkEmo0rbjOFVOfLQPhRU64tN+oaxaO8ietb2Kl0I9UNpYkV2iZXX6Oa4kvsjGmFlYSycxfvw4Y0LwV1IgPOYhLQv0MoGi+TjT4EH2KnYs8idj00I8XOyo0razPCWXkO3HuFTXRpC3mrwt0QbvsVGYQMmICyFitjNdPX1sziyhWatj67eGRud8PyesJBOMxWtRZYvx0znK0miLeUzCfH8+ejkYW7nUBErue7HM83cyrjv6cy1vHCmmpcEQvH3f+YbUhCjiwj2Jj/bhlv4Om9LzADjzVqSx37XnyAXK73vUzqxiAFIvX+Vdjadp8TpKe2UT8Ir8wBJ/XKJrJ3bWUxRWthC197ixfvGd9iRzvNRkl2jZlXmBtzPO0n3DtPWSWVKLrrUHhXQSK9MKjHvrr98mJtCVz78vY8vhApM952qb6b7RjbfjFKobOmjv7iWvqtE47+WgouRKK4XaNupa2y3N5ew4i77wd79pOVThOVT8GJaspNA7Nqp7M7LwC39DQAFGDgX+D1AsH/yFBBgBRkiAEWCEBBghAUaAERJgBBih/1gTga3iGEad8v4EFTP/Ye4wQC4AAAAASUVORK5CYII=");

},
233087(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002492343730-dbbc3d8cda80e3679f608fbbbc9db1b3.png");

},
623402(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002492343740-193f22f2042ab32c1cd4bd46bc3f007f.png");

},
885402(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
258706(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002492343736-dbbc3d8cda80e3679f608fbbbc9db1b3.png");

},
426529(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
256113(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002492343724-7851b0599ce1a18cb664bf0b54195495.png");

},
180276(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002524503433-b64c334af80fb483d9deb87c54edbe85.png");

},
764167(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002492343728-ebe2e82a2ad55c67b0a54d5a2cf483ea.png");

},
545847(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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