"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["724952"], {
605129(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_ffrt_kit_ffrt_example_c_ffrt_concurrency_concurrent_queue_c_ffrt_concurrency_concurrent_queue_c_md_833_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-ffrt-kit-ffrt-example-c-ffrt-concurrency-concurrent-queue-c-ffrt-concurrency-concurrent-queue-c-md-833.json
var site_docs_system_basicfun_ffrt_kit_ffrt_example_c_ffrt_concurrency_concurrent_queue_c_ffrt_concurrency_concurrent_queue_c_md_833_namespaceObject = JSON.parse('{"id":"system-basicfun/ffrt-kit/ffrt-example-c/ffrt-concurrency-concurrent-queue-c/ffrt-concurrency-concurrent-queue-c","title":"Function Flow Runtime并发队列(C)","description":"概述","source":"@site/docs/system-basicfun/ffrt-kit/ffrt-example-c/ffrt-concurrency-concurrent-queue-c/ffrt-concurrency-concurrent-queue-c.md","sourceDirName":"system-basicfun/ffrt-kit/ffrt-example-c/ffrt-concurrency-concurrent-queue-c","slug":"/system-basicfun/ffrt-kit/ffrt-example-c/ffrt-concurrency-concurrent-queue-c/","permalink":"/harmonyos-docs-site/system-basicfun/ffrt-kit/ffrt-example-c/ffrt-concurrency-concurrent-queue-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Function Flow Runtime并发队列(C)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ffrt-concurrency-concurrent-queue-c","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Function Flow Runtime串行队列(C)","permalink":"/harmonyos-docs-site/system-basicfun/ffrt-kit/ffrt-example-c/ffrt-concurrency-serial-queue-c/"},"next":{"title":"Function Flow Runtime图依赖并发(C)","permalink":"/harmonyos-docs-site/system-basicfun/ffrt-kit/ffrt-example-c/ffrt-concurrency-graph-c/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/ffrt-kit/ffrt-example-c/ffrt-concurrency-concurrent-queue-c/ffrt-concurrency-concurrent-queue-c.md


const frontMatter = {
	title: 'Function Flow Runtime并发队列(C)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ffrt-concurrency-concurrent-queue-c',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Function Flow Runtime并发队列(C)';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "示例：银行服务系统",
  "id": "示例银行服务系统",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "约束限制",
  "id": "约束限制",
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
        id: "function-flow-runtime并发队列c",
        children: "Function Flow Runtime并发队列(C)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FFRT并发队列提供了设置任务优先级（Priority）和队列并发度的能力，使得队列中的任务能同时在多个线程上执行，获得更高的并行效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "队列并发度"
          })
        }), "：通过队列最大并发度设置，可以控制同一时刻同时执行的任务数量。这有助于避免任务并发过多对系统资源造成冲击，从而保证系统的稳定性和性能。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "任务优先级"
          })
        }), "：用户可以为每个任务设置优先级，不同的任务将严格按照优先级进行调度和执行。相同优先级的任务按照排队顺序执行，高优先级的任务将优先于低优先级的任务执行，确保关键任务能够及时处理。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例银行服务系统",
      children: "示例：银行服务系统"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "举例实现一个银行服务系统，每个客户向系统提交一个服务请求，可以区分普通用户和VIP用户，VIP用户的服务请求可以优先得到执行。银行系统中有2个窗口，可以并行取出用户提交的服务请求办理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以利用FFRT的并行队列范式做如下建模："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "排队逻辑"
          })
        }), "：并行队列。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "服务窗口"
          })
        }), "：并行队列的并发度，同时也对应FFRT Worker数量。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "用户等级"
          })
        }), "：并行队列任务优先级。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现代码如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <cstdio>\n#include <unistd.h>\n#include \"hilog/log.h\"\n#include \"ffrt/ffrt.h\" // 来自 OpenHarmony 第三方库 \"@ppd/ffrt\"\n\n#undef LOG_TAG\n#define LOG_TAG \"ConcurrentTag\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const int SLEEP_TIME = 100 * 1000;\nconst int BANK_CONCURRENCY = 2;\n\nffrt_queue_t CreateBankSystem(const char *name, int concurrency)\n{\n    ffrt_queue_attr_t queue_attr;\n    (void)ffrt_queue_attr_init(&queue_attr);\n    ffrt_queue_attr_set_max_concurrency(&queue_attr, concurrency);\n\n    // 创建一个并发队列\n    ffrt_queue_t queue = ffrt_queue_create(ffrt_queue_concurrent, name, &queue_attr);\n\n    // 队列创建完后需要销毁队列属性\n    ffrt_queue_attr_destroy(&queue_attr);\n    if (!queue) {\n        OH_LOG_INFO(LOG_APP, \"create queue failed\");\n        return NULL;\n    }\n\n    OH_LOG_INFO(LOG_APP, \"create bank system successfully\");\n    return queue;\n}\n\nvoid DestroyBankSystem(ffrt_queue_t queue_handle)\n{\n    ffrt_queue_destroy(queue_handle);\n    OH_LOG_INFO(LOG_APP, \"destroy bank system successfully\");\n}\n\nvoid BankBusiness(void *arg)\n{\n    usleep(SLEEP_TIME);\n    const char *data = (const char *)arg;\n    OH_LOG_INFO(LOG_APP, \"saving or withdraw for %{public}s\", data);\n}\n\n// 封装提交队列任务函数\nffrt_task_handle_t CommitRequest(ffrt_queue_t bank, void (*func)(void *), const char *name,\n    ffrt_queue_priority_t level, int delay)\n{\n    ffrt_task_attr_t task_attr;\n    (void)ffrt_task_attr_init(&task_attr);\n    ffrt_task_attr_set_name(&task_attr, name);\n    ffrt_task_attr_set_queue_priority(&task_attr, level);\n    ffrt_task_attr_set_delay(&task_attr, delay);\n\n    return ffrt_queue_submit_h_f(bank, func, (void*)name, &task_attr);\n}\n\n// 封装取消队列任务函数\nint CancelRequest(ffrt_task_handle_t request)\n{\n    return ffrt_queue_cancel(request);\n}\n\n// 封装等待队列任务函数\nvoid WaitForRequest(ffrt_task_handle_t task)\n{\n    ffrt_queue_wait(task);\n}\n\nint ConcurrentQueueCExec()\n{\n    ffrt_queue_t bank = CreateBankSystem(\"Bank\", BANK_CONCURRENCY);\n    if (!bank) {\n        printf(\"create bank system failed\\n\");\n        OH_LOG_INFO(LOG_APP, \"create bank system failed\");\n        return -1;\n    }\n\n    ffrt_task_handle_t task1 = CommitRequest(bank, BankBusiness, \"customer1\", ffrt_queue_priority_low, 0);\n    ffrt_task_handle_t task2 = CommitRequest(bank, BankBusiness, \"customer2\", ffrt_queue_priority_low, 0);\n    // VIP享受更优先的服务\n    ffrt_task_handle_t task3 = CommitRequest(bank, BankBusiness, \"customer3 VIP\", ffrt_queue_priority_high, 0);\n    ffrt_task_handle_t task4 = CommitRequest(bank, BankBusiness, \"customer4\", ffrt_queue_priority_low, 0);\n    ffrt_task_handle_t task5 = CommitRequest(bank, BankBusiness, \"customer5\", ffrt_queue_priority_low, 0);\n\n    // 取消客户4的服务\n    CancelRequest(task4);\n\n    // 等待所有的客户服务完成\n    WaitForRequest(task5);\n    DestroyBankSystem(bank);\n\n    ffrt_task_handle_destroy(task1);\n    ffrt_task_handle_destroy(task2);\n    ffrt_task_handle_destroy(task3);\n    ffrt_task_handle_destroy(task4);\n    ffrt_task_handle_destroy(task5);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(494075)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ffrt_queue_submit_h_f接口可以接收裸函数指针任务作为参数，如果任务存在前后处理可以参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/ffrt-kit/ffrt-api-guideline-c#ffrt_alloc_auto_managed_function_storage_base",
        children: "ffrt_alloc_auto_managed_function_storage_base"
      }), "函数查看如何构造任务结构体。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述样例中涉及到主要的FFRT的接口包括："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-basicfun/ffrt-kit/ffrt-api-guideline-c#ffrt_queue_t",
              children: "ffrt_queue_create"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建队列。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-basicfun/ffrt-kit/ffrt-api-guideline-c#ffrt_queue_t",
              children: "ffrt_queue_destroy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁队列。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-basicfun/ffrt-kit/ffrt-api-guideline-c#ffrt_task_attr_t",
              children: "ffrt_task_attr_set_queue_priority"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置队列任务优先级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-basicfun/ffrt-kit/ffrt-api-guideline-c#ffrt_queue_attr_t",
              children: "ffrt_queue_attr_set_max_concurrency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置并发队列的并发度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-basicfun/ffrt-kit/ffrt-api-guideline-c#ffrt_queue_t",
              children: "ffrt_queue_submit_h_f"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["向队列提交一个任务。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始，支持该接口。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(207225)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如何使用FFRT C++ API详见：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-basicfun/ffrt-kit/ffrt-development-guideline#using-ffrt-c-api-1",
          children: "FFRT C++接口三方库使用指导"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用FFRT C接口或C++接口时，都可以通过FFRT C++接口三方库简化头文件包含，即使用#include \"ffrt/ffrt.h\"头文件包含语句。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ffrt_queue_attr_t必须先调用ffrt_queue_attr_init初始化后再设置/获取属性，不再使用后需要显式调用ffrt_queue_attr_destroy释放资源。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ffrt_queue_t必须在进程退出前显式调用ffrt_queue_destroy释放资源。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "并发队列最大并发度建议控制在合理范围内，配置过大超过Worker线程数没有意义，配置过小可能导致系统资源利用率不足。"
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
207225(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
494075(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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