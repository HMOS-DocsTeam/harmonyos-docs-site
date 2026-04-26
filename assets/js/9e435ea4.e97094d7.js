"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["935812"], {
19674(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ut_arkxtest_guidelines_perftest_guideline_perftest_guideline_md_9e4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ut-arkxtest-guidelines-perftest-guideline-perftest-guideline-md-9e4.json
var site_docs_ut_arkxtest_guidelines_perftest_guideline_perftest_guideline_md_9e4_namespaceObject = JSON.parse('{"id":"ut/arkxtest-guidelines/perftest-guideline/perftest-guideline","title":"白盒性能测试框架使用指导","description":"简介","source":"@site/docs/ut/arkxtest-guidelines/perftest-guideline/perftest-guideline.md","sourceDirName":"ut/arkxtest-guidelines/perftest-guideline","slug":"/ut/arkxtest-guidelines/perftest-guideline/","permalink":"/harmonyos-docs-site/ut/arkxtest-guidelines/perftest-guideline/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"白盒性能测试框架使用指导","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/perftest-guideline","kit":"testing","last_updated":"2026-04-21"},"sidebar":"docs","previous":{"title":"UI测试框架使用指导","permalink":"/harmonyos-docs-site/ut/arkxtest-guidelines/uitest-guidelines/"},"next":{"title":"应用UI测试（基于Python）","permalink":"/harmonyos-docs-site/ut/hypium-python-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ut/arkxtest-guidelines/perftest-guideline/perftest-guideline.md


const frontMatter = {
	title: '白盒性能测试框架使用指导',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/perftest-guideline',
	kit: 'testing',
	last_updated: '2026-04-21'
};
const contentTitle = '白盒性能测试框架使用指导';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "实现原理",
  "id": "实现原理",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "定义测试策略",
  "id": "定义测试策略",
  "level": 3
}, {
  "value": "创建测试任务和启动测试",
  "id": "创建测试任务和启动测试",
  "level": 3
}, {
  "value": "获取测试结果",
  "id": "获取测试结果",
  "level": 3
}, {
  "value": "销毁创建的对象",
  "id": "销毁创建的对象",
  "level": 3
}, {
  "value": "完整示例",
  "id": "完整示例",
  "level": 2
}, {
  "value": "基础性能数据采集示例",
  "id": "基础性能数据采集示例",
  "level": 3
}, {
  "value": "场景化性能数据采集示例",
  "id": "场景化性能数据采集示例",
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
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "白盒性能测试框架使用指导",
        children: "白盒性能测试框架使用指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "白盒性能测试框架（PerfTest），提供了针对指定代码段运行时的白盒性能测试能力，用于度量指定应用进程的性能表现。框架通过多轮迭代执行机制和环境复位机制实现自动化测试，支持耗时、CPU使用率等基础数据和启动时延、滑动帧率等场景化性能数据的采集和度量。使用PerfTest接口的性能测试脚本需基于单元测试框架进行开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PerfTest功能设计图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(395431)/* ["default"] */.A) + "",
        width: "700",
        height: "422"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PerfTest对外提供ArkTS API，包括性能测试策略设置、性能测试执行、测试结果获取等能力。具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/test-api/test-arkts/js-apis-perftest/js-apis-perftest",
        children: "API文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "跨语言通信层负责上层ArkTS接口与底层C++接口的转换，包括参数校验、JSON序列化对象处理和异常处理等。作为PerfTest的客户端，它提供启动入口和功能调用接口。该层由测试应用加载运行，通过IPC与服务端通信实现功能调用和生命周期管理。此外，该层还负责管理C++层对ArkTS回调函数的调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PerfTest服务端负责白盒性能测试框架的主要功能处理，包含以下两部分："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "框架运行通用能力：管理C++接口和错误码，包括接口调用、参数解析、异常处理等。PerfTest服务端以独立进程运行，通过IPC与客户端通信，监听客户端生命周期，实现进程保活和按需启停。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "白盒性能测试能力：主要负责测试任务调度和性能数据采集工作。根据用户定义的测试策略，实现测试代码段运行、性能数据采集、数据处理和存储的自动化性能测试流程。当前支持采集的性能指标包括：耗时、CPU、内存、应用启动时延、页面切换时延、列表滑动帧率等。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用PerfTest接口进行白盒性能测试流程如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(58599)/* ["default"] */.A) + "",
        width: "1028",
        height: "649"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "定义性能测试策略，明确测试指标列表、被测代码段、环境复位代码段、被测应用包名、测试迭代次数、代码段单次执行超时时间等，后续白盒性能测试中将依照此策略执行测试。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建测试任务，配置测试策略并准备测试环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "启动测试，将根据测试迭代次数执行多轮测试。每轮测试采集被测代码段执行期间的性能数据，并执行环境复位代码段恢复环境。完成后进行数据处理和保存。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取测量数据值，结果存储在对象中，支持获取每轮测试详细数据和最大值、最小值、平均值等统计数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "销毁创建的对象，释放内存占用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以采集指定代码段执行期间的耗时、CPU使用率为例，介绍详细代码开发步骤。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义测试策略",
      children: "定义测试策略"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义测试性能指标列表"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["定义所需测试的性能指标列表metrics，类型为Array<PerfMetric>，其中", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-debug-optimize-api/test-api/test-arkts/js-apis-perftest/js-apis-perftest#perfmetric",
            children: "PerfMetric"
          }), "为框架支持采集的性能指标枚举。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let metrics: Array<PerfMetric> = [PerfMetric.DURATION, PerfMetric.CPU_USAGE]; // 定义待测指标\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义被测代码段和环境复位代码段"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "被测代码段actionCode是一个类型为Callback<Callback<boolean>>的回调函数，框架在测试期间会自动调用此回调函数，并采集性能数据。执行结束时需调用入参Callback<boolean>函数通知框架执行完成，否则会导致代码段执行超时。例如测试Utils.CalculateTest方法性能时，通过调用finish(true)通知框架代码段执行完成。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let actionCode: Callback<Callback<boolean>> = async (finish: Callback<boolean>) => { // 定义被测代码段\n  Utils.CalculateTest();\n  finish(true);\n};\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此外，框架支持定义环境复位代码段resetCode，用于在单次测试后进行环境复位，类型和使用方法与actionCode相同。resetCode会在actionCode执行完成后执行，但执行期间不会采集应用性能数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let resetCode: Callback<Callback<boolean>> = async (finish: Callback<boolean>) => { // 定义环境复位代码段\n  Utils.Reset();\n  finish(true);\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造测试策略对象"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["除以上步骤定义的属性外，框架还支持定义其他测试策略，从而帮助开发者进行更加精确的自动化性能测试。所有测试策略通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-debug-optimize-api/test-api/test-arkts/js-apis-perftest/js-apis-perftest#perfteststrategy",
            children: "PerfTestStrategy"
          }), "对象定义和保存，性能测试期间会依据此策略执行并采集数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let perfTestStrategy: PerfTestStrategy = {\n  // 定义测试策略\n  metrics: metrics,\n  actionCode: actionCode,\n  resetCode: resetCode,\n  bundleName: 'com.samples.test.perftest', // 定义被测应用包名，请开发者替换为实际包名\n  iterations: 10, // 定义测试迭代次数\n  timeout: 20000  // 定义代码段单次执行超时时间\n};\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建测试任务和启动测试",
      children: "创建测试任务和启动测试"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/test-api/test-arkts/js-apis-perftest/js-apis-perftest#create",
        children: "PerfTest.create()"
      }), "创建测试任务时，传入上文定义的PerfTestStrategy对象。然后调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/test-api/test-arkts/js-apis-perftest/js-apis-perftest#run",
        children: "PerfTest.run()"
      }), "异步接口启动测试。测试会自动迭代执行被测代码段并采集性能数据。使用await语法糖同步等待执行完成后再进行后续操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let perfTest: PerfTest = PerfTest.create(perfTestStrategy); // 创建测试任务对象PerfTest\nawait perfTest.run(); // 执行测试，异步函数需使用await同步等待完成\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取测试结果",
      children: "获取测试结果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["性能测试运行完成后，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/test-api/test-arkts/js-apis-perftest/js-apis-perftest#getmeasureresult",
        children: "PerfTest.getMeasureResult()"
      }), "获取各个指标的测试结果。结果存储在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/test-api/test-arkts/js-apis-perftest/js-apis-perftest#perfmeasureresult",
        children: "PerfMeasureResult"
      }), "对象中。若测试未完成或指标未定义，则抛出错误码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let res1: PerfMeasureResult = perfTest.getMeasureResult(PerfMetric.DURATION); // 获取耗时指标的测试结果\nlet res2: PerfMeasureResult = perfTest.getMeasureResult(PerfMetric.CPU_USAGE); // 获取CPU使用率指标的测试结果\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "销毁创建的对象",
      children: "销毁创建的对象"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["性能测试完成后，若无需继续使用PerfTest对象，可以调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/test-api/test-arkts/js-apis-perftest/js-apis-perftest#destroy",
        children: "PerfTest.destroy()"
      }), "销毁对象以释放内存。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "perfTest.destroy(); // 销毁PerfTest对象\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "基础性能数据采集示例",
      children: "基础性能数据采集示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以测试应用内指定逻辑执行时的基础性能数据为例，应用内定义了一个名为'Utils.CalculateTest()'的方法，性能测试时执行此方法，并采集执行期间的耗时和应用CPU占用率。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在 main > ets > utils 文件夹下新增 Utils.ets 文件，在文件中编写自定义的函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export class Utils {\n  static num: number = 0;\n  static maxNum: number = 10000;\n\n  public static CalculateTest() {\n    for (let index = 0; index < Utils.maxNum; index++) {\n      Utils.num++;\n    }\n  }\n\n  public static Reset() {\n    Utils.num = 0;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在 ohosTest > ets > test 文件夹下 CPUMetric.test.ets 文件中编写具体测试代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { describe, expect, it, Level } from '@ohos/hypium';\nimport { abilityDelegatorRegistry, PerfMeasureResult, PerfMetric, PerfTest, PerfTestStrategy } from '@kit.TestKit';\nimport { Utils } from '../../../main/ets/utils/Utils';\n\nexport default function PerfTestTest() {\n  describe('PerfTestTest2', () => {\n    it('testExample1', 0, async (done: Function) => {\n      let metrics: Array<PerfMetric> = [PerfMetric.DURATION, PerfMetric.CPU_USAGE]; // 定义待测指标\n      let actionCode: Callback<Callback<boolean>> = async (finish: Callback<boolean>) => { // 定义被测代码段\n        Utils.CalculateTest();\n        finish(true);\n      };\n      let resetCode: Callback<Callback<boolean>> = async (finish: Callback<boolean>) => { // 定义环境复位代码段\n        Utils.Reset();\n        finish(true);\n      };\n      let perfTestStrategy: PerfTestStrategy = {\n        // 定义测试策略\n        metrics: metrics,\n        actionCode: actionCode,\n        resetCode: resetCode,\n        bundleName: 'com.samples.test.perftest', // 定义被测应用包名，请开发者替换为实际包名\n        iterations: 10, // 定义测试迭代次数\n        timeout: 20000  // 定义代码段单次执行超时时间\n      };\n      try {\n        let perfTest: PerfTest = PerfTest.create(perfTestStrategy); // 创建测试任务对象PerfTest\n        await perfTest.run(); // 执行测试，异步函数需使用await同步等待完成\n        let res1: PerfMeasureResult = perfTest.getMeasureResult(PerfMetric.DURATION); // 获取耗时指标的测试结果\n        let res2: PerfMeasureResult = perfTest.getMeasureResult(PerfMetric.CPU_USAGE); // 获取CPU使用率指标的测试结果\n        perfTest.destroy(); // 销毁PerfTest对象\n        expect(res1.average).assertLessOrEqual(1000); // 断言性能测试结果\n        expect(res2.average).assertLessOrEqual(30); // 断言性能测试结果\n      } catch (error) {\n        expect(false).assertTrue();\n      }\n      done();\n    })\n  })\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "场景化性能数据采集示例",
      children: "场景化性能数据采集示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以测试应用内列表滑动的帧率为例，实现如下功能：打开指定应用，使用UI测试框架接口查找类型为'Scroll'的可滚动组件，并进行滑动操作，采集期间的列表滑动帧率数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在 main > ets > pages 文件夹下编写 PageListPage.ets 页面代码，作为被测示例demo。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct ListPage {\n  scroller: Scroller = new Scroller();\n  private arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\n  build() {\n    Row() {\n      Column() {\n        Scroll(this.scroller) {\n          Column() {\n            ForEach(this.arr, (item: number) => {\n              Text(item.toString())\n                .width('90%')\n                .height('40%')\n                .fontSize(80)\n                .textAlign(TextAlign.Center)\n                .margin({ top: 10 })\n            }, (item: string) => item)\n          }\n        }\n        .width('100%')\n        .height('100%')\n        .scrollable(ScrollDirection.Vertical)\n        .scrollBar(BarState.On)\n        .scrollBarColor(Color.Gray)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在ohosTest > ets > test文件夹下 slideFps.test.ets 文件中编写具体测试代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { describe, expect, it, Level } from '@ohos/hypium';\nimport {\n  abilityDelegatorRegistry,\n  Driver,\n  ON,\n  PerfMeasureResult,\n  PerfMetric,\n  PerfTest,\n  PerfTestStrategy\n} from '@kit.TestKit';\nimport { Want } from '@kit.AbilityKit';\n\nconst delegator: abilityDelegatorRegistry.AbilityDelegator = abilityDelegatorRegistry.getAbilityDelegator();\n\nexport default function PerfTestTest() {\n  describe('PerfTestTest1', () => {\n    it('testExample2', Level.LEVEL3, async (done: Function) => {\n      let driver = Driver.create();\n      await driver.delayMs(1000);\n      const bundleName = abilityDelegatorRegistry.getArguments().bundleName;\n      // 被拉起应用的包名和Ability组件名，请开发者替换为实际的bundleName和abilityName\n      const want: Want = {\n        bundleName: bundleName,\n        abilityName: 'EntryAbility'\n      };\n      await delegator.startAbility(want); // 拉起测试应用\n      await driver.delayMs(1000);\n      let toPageListBtn = await driver.findComponent(ON.id('toPageList'));\n      await toPageListBtn.click();\n      await driver.delayMs(1000);\n      let scroll = await driver.findComponent(ON.type('Scroll'));\n      await driver.delayMs(1000);\n      let center = await scroll.getBoundsCenter(); // 获取Scroll可滚动组件坐标\n      await driver.delayMs(1000);\n      let metrics: Array<PerfMetric> = [PerfMetric.LIST_SWIPE_FPS]; // 指定被测指标为列表滑动帧率\n      let actionCode = async (finish: Callback<boolean>) => { // 测试代码段中使用uitest进行列表滑动\n        await driver.fling({ x: center.x, y: Math.floor(center.y * 3 / 2) },\n          { x: center.x, y: Math.floor(center.y / 2) }, 50, 20000);\n        await driver.delayMs(3000);\n        finish(true);\n      };\n      let resetCode = async (finish: Callback<boolean>) => { // 复位环境，将列表划至顶部\n        await scroll.scrollToTop(40000);\n        await driver.delayMs(1000);\n        finish(true);\n      };\n      let perfTestStrategy: PerfTestStrategy = {\n        // 定义测试策略\n        metrics: metrics,\n        actionCode: actionCode,\n        resetCode: resetCode,\n        iterations: 5, // 指定测试迭代次数\n        timeout: 50000, // 指定actionCode和resetCode的超时时间\n      };\n      try {\n        let perfTest: PerfTest = PerfTest.create(perfTestStrategy); // 创建测试任务对象PerfTest\n        await perfTest.run(); // 执行测试，异步函数需使用await同步等待完成\n        let res: PerfMeasureResult = perfTest.getMeasureResult(PerfMetric.LIST_SWIPE_FPS); // 获取列表滑动帧率指标的测试结果\n        perfTest.destroy(); // 销毁PerfTest对象\n        expect(res.average).assertLargerOrEqual(30); // 断言性能测试结果\n      } catch (error) {\n        console.error(`Failed to execute perftest. Cause:${JSON.stringify(error)}`);\n      }\n      done();\n    })\n  })\n}\n"
          })
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
395431(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002581217683-49e13502e39187a7229528f5082e231c.png");

},
58599(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002550777588-94607868366b82c3be4a0155b2874c35.png");

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