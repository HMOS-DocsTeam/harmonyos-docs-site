"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["789618"], {
984851(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ar_engine_kit_guide_arengine_faq_arengine_faq_4_arengine_faq_4_md_c41_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ar-engine-kit-guide-arengine-faq-arengine-faq-4-arengine-faq-4-md-c41.json
var site_docs_ar_engine_kit_guide_arengine_faq_arengine_faq_4_arengine_faq_4_md_c41_namespaceObject = JSON.parse('{"id":"ar-engine-kit-guide/arengine-faq/arengine-faq-4/arengine-faq-4","title":"某些特殊场景下（如附近存在磁场干扰、手机发烫或扫描到重复纹理等），出现平面漂移或者位姿数据跳变现象","description":"现象描述","source":"@site/docs/ar-engine-kit-guide/arengine-faq/arengine-faq-4/arengine-faq-4.md","sourceDirName":"ar-engine-kit-guide/arengine-faq/arengine-faq-4","slug":"/ar-engine-kit-guide/arengine-faq/arengine-faq-4/","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-faq/arengine-faq-4/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"某些特殊场景下（如附近存在磁场干扰、手机发烫或扫描到重复纹理等），出现平面漂移或者位姿数据跳变现象","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-faq-4","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"反光、光线暗或者弱纹理场景（输入图像颜色变化小）下无法识别平面","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-faq/arengine-faq-3/"},"next":{"title":"个人数据处理说明","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-personal-privacy/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ar-engine-kit-guide/arengine-faq/arengine-faq-4/arengine-faq-4.md


const frontMatter = {
	title: '某些特殊场景下（如附近存在磁场干扰、手机发烫或扫描到重复纹理等），出现平面漂移或者位姿数据跳变现象',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-faq-4',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '某些特殊场景下（如附近存在磁场干扰、手机发烫或扫描到重复纹理等），出现平面漂移或者位姿数据跳变现象';

const assets = {

};



const toc = [{
  "value": "现象描述",
  "id": "现象描述",
  "level": 2
}, {
  "value": "可能原因",
  "id": "可能原因",
  "level": 2
}, {
  "value": "处理步骤",
  "id": "处理步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "某些特殊场景下如附近存在磁场干扰手机发烫或扫描到重复纹理等出现平面漂移或者位姿数据跳变现象",
        children: "某些特殊场景下（如附近存在磁场干扰、手机发烫或扫描到重复纹理等），出现平面漂移或者位姿数据跳变现象"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "现象描述",
      children: "现象描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["某些特殊场景下，如使用环境附近存在强磁场，手机处于高负载场景下（后台开启很多应用或长时间使用导致手机发烫），或者扫描到重复纹理（见下图）时，可能出现识别到的平面无法锚定到现实世界中，或者通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arcamera_getpose",
        children: "HMS_AREngine_ARCamera_GetPose"
      }), "接口获取的位姿信息出现大幅度跳变等现象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 重复纹理的地板"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(246666)/* ["default"] */.A) + "",
        width: "3000",
        height: "4000"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "可能原因",
      children: "可能原因"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AR Engine通过获取到的加速度计传感器和磁力计传感器的信息进行平面计算和相机位姿计算，上述特殊场景下，系统传感器数据可能会存在异常，从而导致平面漂移或者位姿跳变的现象发生。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "处理步骤",
      children: "处理步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["建议应用对通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arcamera_getpose",
        children: "HMS_AREngine_ARCamera_GetPose"
      }), "接口获取到的位姿数据，按照实际应用使用场景进行滤波，如步行导航场景，应用可以缓存多帧数据，通过多帧数据可以计算得到运动速度，如果检测到此速度明显高于步行速度，证明此时AR数据已经不可信，可以丢弃此数据或者重启AR算法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(251284)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "计算运动速度"
        })
      }), "：x,y,z为在t时刻的位姿数据的位移量。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(929802)/* ["default"] */.A) + "",
        width: "323",
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
246666(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478629-6125ce7604c2fd348f25f2cecee6a848.jpg");

},
251284(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
929802(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUMAAABBCAYAAABLjMa4AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAYIklEQVR42u2deZhU1ZnGf7eqm24QVETcEAFFQBBxX3AhQRMXVFwSlxnHPTqZjIkTE/cQY5zRxIlJZow6ahInjqPOJDoZxyUucQtqEnUGxYgLKkZU1CAgAtJdVfnjvGfq69P31tLVXUh73ue5T1XfvnXvOd/5zvstZ7kQERERERERERERAZCs5eXP6bMUmzIiIqIKIk9ERERE9FfPMKey/zVwPLDCeIkRERERFgVgPeBK4KfijlJ/IMMcUARGAK8Aq4GjYntHRERUCI8HAHPFGUl/CZm9B7iTKnRTbOuIiIhG0bIWl31XkeFDQL4/sX0fIlHI4OXUKi87ojmy7zTf81FfmybvnI5Cf5O59wxvV8X20N/52P41YQAwElg3iqLpGCbZx/x2c7AhsHl/9gxLIr7JwAfAW+Z8mnVo1BLkdI+SuWfSZI8qMXUpVbmuVOF/Q3D51f2AjYDLgbv7yKtu9J6hnGuVQV8Z32KVslbTwTG4Ab8tgZXAecCbFX63JuSeptu5Jss8V6OeV5P3ROBkyb0D+ArwTh/Ie417hVsDS4G7DKEnGdc24jUmPfxfX9S50nMTc76S17EjME7fpwG/BNbpw/q09IHcm2mAcnXWMavc7cBnzN8/BM7tg7r2hs6vqTbJ1fiMfIUy+b/XA6ab8z8GvlRNLmubu+7Lu7vCvOeUF2gJ2N5bt02AQ3Ajz0mdDeotzO7AfwJLgJeB7wIT9L9mdNqi6rcXcBWwcyCLBBgEzFC5ihXadQ7wIi5X+KLq09pHHWZPYO8GPJthwMW40b8lwM+BQynnh/ta9iXJcgxwgTwLW0f/OQE4SIRXypD9auB+lT0PPAEs6wOyKgIbAIcBo+sgMWtI/xJ4TOV7HPg7YGgTvKminrElcBnwhYzyT5Kut6T0QV/GD4FfU84V/trIu9/kDH3H/Y4qdVpw3pLETrK+Y3tg2fy1f6GQ5lkJ9AM99w119r42KHngU8A5Iv1VqldIhoj4zwGOrFIubxkPMt5KUuHa1jpl1iJF/ry+1yN3X+YtgP8F3heJvGxCp28ZMuwLQvT3HQ8cJ+IqAd9Mkat//r4i7hFV5JlInqeZa3MVrsvVKbexwIXAdnUSYaK2ulJ69pipdwl4QPrVFx6if/4k4CTgaT3zghQ9988+FJglg1lN3m3AGfIW+w2sRf6F2H9KBjHsJNd4ix40oL/XlsCtwAHyvFqBUcANaqwncAnavgwhcsBmuCTwf8lD2qFCpxwEXC8ST+to/u+RwBE9IKtqZc2JNP6mAbnkgEuk7BtI7usr/7MM+EieQV8bog2kP6eKIGZVkelM6cawKmmbfRRt9Fb5beroRmD7OmXvfz9Dv98aN8g2EDc4+Xvp+z/VEcr2BBtK3mdK3udWkfdf4SZQD8kwjD6CmIEbX/i4pF96NUTeHJcIfUWNFoYtQ4H75Jlk5a1yGURgPaGZwNSU366v8KEkr61epfa5qHzG87NyGv8oz3SHjGf6302UAu+eYShagANrzOfNwCX922psm5OBO3V9kkEI+Qx5eU9oDHBKxnPOk9yv6mW5JxUMw27yyL9V4Zle9j8ArjOGIcRWIsNq2EhksFMNnThRiH6riCQtL+br15pytKi9TjHG3WKqjPAzNXhiWbrRmnGk6fq+auPzMuRtc7k34AYBs8q0rUkr1Uwwa5NnOAIYrtBpdQoZfhk3KPA/lOfVhS55UdanFMiigBt5QqHBE8Ya+rlhS4DZFYi2lnxYke5znnxZCxkWbrl+l6WIBZX1D8CT8tAGmLxKSYZklhRxG+Uhd6zgaZ4IXCovIUvh/L1HKUy/Vd5bkpHHLZA+Mtuh82/jJtInRvaeQO+jvJqgnvxPYvJSaXPNShn6kKguq6r0Fd8u1+FG6vc3uVtf/v2VPvhQ3ttBMtxpecjNJffpVcjHj7yeqCjpJtJHk339OlKOTtXx58B7psye0J8SEQ7sIV8UM57bEei6f+7KGnK5XiZXKcc5jfIsE0/8hwGHq347AJ+uRuZr09SakgkHfB4j7GgjlI+5UUINFaNkclLjRRpLDEHtAmysTrc8owyetFYDr9fZKX2CfRywqXIzq01uZj813sPmniVqn9rgSfsekdL+wB1SkoKUYqQ8jwHKfX6/Qh3ex01dKtVQr5PVuR/OULaSnjsJmC/Z+fZpk5f9vJGpLVPRdOhEUQHUPo3EXzNKnucc1c3/fn3lgB8z56G+KSUl4AXJ9BzpZ4ch753leZ2mfne/dC+tDh0i4OVV2rqoMPEMkda7wf3898EihyFGhxPp3mrpyPuUl7raOhUk90W4GRz1Gv6tpdeh0S9KVncHz6u1PUu4XP7buEGe2UZPBkneGytlk1eaaTH9ZHGGb8AfqzJ7BrkqFNKV1PBpIeJo3MjwPF13obnueNPxp9J9aoUN+25WI9Y6fSFnQq67pAQFE8q3K2G8StZ5ZErdvill3LGCV2/zRyvpulSx1mkLeXXWFuAn8sA3MOfyKZ7MesBLIsLWFHkNBa7GDYoUcKOF1hhPltzvMuFqklKvQ5UimVxjZOPvMV7h+wsimuNMaI7ypyUTCiembaeItL5d5Zn+WVeIPHapI/pKArnvoHucYcLbML2QN+mcokg2ybjm4MCo2uO38phCmfu/h+HW9J5dZ338vf6lwrNnpYS+e1QJk0N5X6v2mdhotPtxDJNzFTyLktzdzsCD8GHKp3E72LwWeAT+803gi+oMC4ATZC2ny/JNVwMtTLFSvkxjFWJeYkLTUAnC0U5vbeco8Xu6QpOTpLAzgV/Jgn7fWOB6LZi//h3VbxelFGyHC/NFYajtPQE/et0pi+rPFQLPw5PZWLVJB90nxS4Dzpe8FygX1mo8vQUKMX3Hz6r30cC/yiNIC8PDw///NT37TJV/r0BvnpJ3tEkvpHGel5z3SInCsvJlpUDui3X+AxPehukF/326kWE41aQgQzsaN8KcM3n2w2TQjwL+lKJvXn77y7Ben5FrTdN3/9ttRKRDAmP6A+X6Lu4Feb8sY7x7HfJmbQiT8yk5MyvcjaSwT5kGxHgnY2UlsuZwrZbn9Z5I51J5hPNERhgPgIzcy8kKQ2dnhBWVsErHncAtGqA4Th3oSV3zm5SwvF4y/FCh5DTcqPi7AdmlyXZdDdJsZQhvW4WQD0l2eZV/ltrA138bXb8gCOFsp3xfx+PKmbUZ4lwGXCSjEOYb/TP2lJfyNdJXIFSS/Uc67sHNTd3MlCuvcl+sEJoeGqLEGFxM4t63YWcFvT4c+FvVsyhdzincPsYM/Dypc4kJvyeblEZauRNFQ4v0vUMEeqry6wsyDIsPr4+SbBantGupQp4Q6d1PpI8eF6kuZzeg5xYLjUG2Zeqs90YfFzJMjHUcr5xSISX3sYcs3SOU9zD016yrHEFnBqGGSvugPg+Q1bNhaSElmV7EjXQNUUMmweDEuvI8NtDvvet/rQY1EpPkLQL/Lc9wO3k7dqCms0F5dkoBB5E+Qpgm+5zC2eEqX15J8xad8zJdacJLL6MNzWADVZL9i0RqQ4Kc2AwZgqK51ubFjlcY+5ZpD1/26fJ0Okz4+6w6YiHo7G+oPgNMvnagvMVbekGXfccfE5SzkuzbVSbfDm1Gp0eoPfN0nys3ULLB1D3ESh3e0ZgGfAM4S15VmgPi+8DpMoR3pMh8oolsvF4v0qDGUl33XuDkXCRje4oxhI3m71YGOtjj+7V8jIgQkcks3OTPWUaInkD20vUvGyF74hgsxXmtxvB/LvA7KVSnsWjFDG91onJ831YDhIo+APhqisLeE5Chv//jCmfbejBQUo9MB1e51pdniclhevxIBmBShQQ+1D7loiRLPkRyest4fStM+Gs7XYvyR/dJZtYb99dMUX7N4j5j5Oy1S0RU7ZRHsA+Qx/h2YOQaST216VhZg+xv1uGxufT4POBnFX6/jtq3WEXnW1XXnUWCZ+EmN6cRoT93uO7994HT4YlyU3npFvOV0w9TXgU9c5QIdnVKVNVoqm+dgA/WOjL0ire9vKPt9PfpuNHQ51TGosnXFRTWEghzKfBqlVDbdsqRIrAJyqnMT2kg2/DHKzm+0CiHVZLFIo1QpouCUMB39lEq6y5SuuXB/RqB7cz1LPvKB/m2gTo3zFj7kvGcrbdHFY8ck88cKA8ayXZ7ytNCbELdeydzcVM/8oEB8m11PXBbUPcVQc44MeHkEHWeZQqvhuPWafdGB/W/X6GUQq0dOmfkO9ykflpMuUqBjD9QHSqVOyci3B74B5Hb00aWaUQ4VSmSy01eF7pOVZuNm5VhvfjVQfrKX/9lRXUnmYiutzY6KRo97+wNVl2TgyUoxGlTYnW1coPnmKRnQQrip2XMySDDRbL47RUGYPxa3r2Ba9QxdkpRDt9gG8utvxG3ntcqZpGu0z8WKgdjj1VBSFmU5R8D/LPybaMzlDONyGvZPCIveX5oQpVaYJP4ncZT7gyOcADlbX0OraFsf1Ibe2/yYHlxSwLiKsgALQX+na57MYYe9AdG3q/r892M57+tZ7fLCE1TTq1I9i4oUPvyP79G+dU6DFsoYz9YUkg5b7HCyC1tLqjXqYkiwStwI/7tKakgO/1qX0UFKypELauAPwYyf8uUMTHGbB/cRgkrpJe1EGGtnvkA44zU87uPHRl6ofxQIbCfL1RS4vhThu3H4aaM/FEdJB8Q3HJ5ksOM15EEStquZx4pYrtLFmUnNdwYeYqYXNWpuu45uu6QM0QdeVwQEuSCIzFuvFemQ3ATuu/Q+Sl6/nZ0XwOaCwi9g/RVFGGH3FzK+UoD7dOm8iVVBmyepbxNVVZCvGQ8s48o7+TyktoiCfKEx0jRbzL19asZtldoa0kqS+4hFut+Q9UOD9J1zqHtjPnA66mlz/jc1VNBrrTeftlqOnqa3L3n/NvAmwy9spEKZy9RysYT2QCRlPXCJ8sxudrIyf9/I9wUpMGB954mc+8wHIabCna0HJWC2n6cnIDQ2OQDPa9l56BhJu3VEBmu6TDZdhBfkfNxk19b1ICPK+8yWtc8XSHcfkBe3NYiG9swFynR/iBuvtnv9bs5wOeU11sB3KvfbYybIzVRnW+wCdE6RZrzlGdLKuT8/KL763WPZ1SnBSLw+biJoZ36e17QMb0x2FZh0xjdoxKGS9lulSdWb2LZX3sj8GiFgRF/3Qvq/CNFnh9WUMqlkvMJ8swfCEItFFZ9TSQ703S0Tg0qjFXHtLnLWuu3UPf5kur3XEbY5j2cCXrmVpQnfleSxSQR56MN9Is3lT+fHdw7zXN6UH1mbECUfhHCTWqPbXG7w3tZjVPqwevsbri1vst07aAgN7sz8D3cpsq5Kp50ETcn9Ap53V+QYS2oX49UyJ4m74m6x5Y1ynuCiPsR+gmSwApcp8quVsdAIXQJt642tNCJscovKfwkuOfpCl3Opetk5qNFTBeawY8h6iirpEiFlFBxhZLM1bwFvzzocg38HB3k5y5QmU8ynoANyU7ETcV5QyHRXNyazDEpz/b3PFSkM70JEYAv55kKTcdnWHRPaCPk3V9N1wnWdgH+uzIMHYHs/YqJG3rgAfjnT5WB+EqGbHLG+PybCPl9kehdMpxZqYsWdco7mxB1JSYKeEI5z1DnvyNHYhXdJzw/YkLrSdIrf60N2/3SuXkiqEreV2K8tSfUd9ImW5+Toue74TZgmSt5v45bUntgBXkPwk03upGuszH6BTxJbaHcTkkh1BbyFktkbyXkFeCL8vaG1iGctA7hR6fyKeFAjsY2z6ynwQZLudrkYa6jv1sq1ONq3DSRRhUkX0P04O8/FLfCJCSZnDEIyGs/1+R1w7INlFHIkntPNmewIdg+uDl9VAmnW2VcB+t7m+Q+qALRTsTNGd2rQSOUmIGTWvT2CEUYowIybCN7Y4ywrgOr6Hu9/bitSjonSUnJDJd+t0o/hhnCJsXo76o00I7NSPvlMhql3v3W6u2A4IbivSX5qTyx+RU6UWIGR26hPNWiJUNxszp1MwifPni+v+94hZ5TGs2h9ODZB+H2fRyekg9Chuw444E3K2edM3nnz4lse3M7qrzxxL67BuqWV9790qA8/RHWsF1D1yW1/bKyOZHeHIVJK0WK19TocW2mfN/ufDJgw4bv0Zz9/rII52TlevMmp+NJ+quU1103g6Tb5YmCm8t4Gm5FTW8+39/nQKVnBjc5XPPPWVc6P+MToutHyPgMbIa818ONbh5Peft2uxPxBXTdSLKWAtUbts4QCfo8xkk1WD5bxq/jRor7VS4hQ6bDcXnRaWvQUvpnHonbWunzyjfdi1vSNapJROjv/3UZ0l/gcprr94FsEoXFZ/QB0dZb32HKx+3dT3Xe1+mzMmyD+lLe/qYb4AYx/k9kdHuQOzhE528z586R4n9E+t5l/vx1Kc8LF3vbnNxtlOf0fdaE6EmFI2fyT9Nx00ySfnwMwm3yMDLIqayJw8t+KxHEL3HLF9cJ0hR9XYYENz3nXoXm+V5+vr/PtiKf1ibWr5LcW3Eblozup7q+nYxPPoM7qh1VyS8tB1KQQv9GZLQjblDDN/ZlCkeP0/+n4eZ+ZS1l8ueflKX2z6/0asuSwqyHcSOM0+i+QUNEREREr3mCWe5oEbc28hjccpqncAMSnfLShuLmsjW6vMYuAUsC8izKyhVxw+3xBdxrX1gDzX3PdJpelWJzRFTSw6xpE5aUnpb3N0pkWFD4OYLy3KZSHbF7uBPNMBHuMNJ3+MhRXuzeHpU6IiKih4ZxNW5VzOJ6yNAS23x9H2nIbD/c5Ei7jfYAspcPWfhNQz2prcJtMjm4Qoidtn9dRERERD3opPo7VlJhX9jeQfk9pttRHr63iduLyN7e2x431xCmR0RERDQVLTWEs4t13VDcMrURuEm94eDH7bhlVlmbWfo1ky+mPCPmAT/Z4Qt035Glldq2BOsp/EBgR9TBTxSKjSjpprgtku7HTSFYN3p1Eb1MhOBWh0zHzQttb6KObUF5t+iIiIqKuiFuR5f/oPt7XkNL21LDES1whF0KZ3dWsZsIHNxHz/PrfifjNv94meYuXYxYi8lwI7ru6BLJLKK3vMEhuD0dn5GOnY3b+qqE23Vnv14gqfC3A3C7+nyD8jtQJkQyjGhUsSIi6oHPUe+gKOMY3JK50Iu7TCQ1m/RdYmrVVb9KYVcTClsdvoXyS8iifkfUHWZERPSEmHxEsSduo9uNcRP3B9H1JeqIKF/C5aq37EFEYq89ArejS3tQloTyvpnjIhlG1Kpg9ewkHBERwucCD8blnv+A2wb+XsovbvLvdE4ob+6ZUPtLlUJ9bcften4NbvBvFV234C9R+dWmEREREb3qEYJ718nthvgexG0CG+53aD2zRym/GrRWr81fczTwK8rv0rgbOJbumxpcGT3DiIiIZhJiG25fwbdxecCNcbvYZL0aYBPcCqcTUiKYarsw53DLRffEDZDcghv8G0j3l2xFMoyoO0yOiGhExz7C5f42wq1nX4SbSlPMCKmPxb2v5mYT9toQODxCrMRNnWnFvfRoKV2XgEZEdENLFEFEH8MT0EH6fICuuyJZ0vRvdNsLmCXPzq50apGXF5LacnNtETcYMxP3prfZxuuLZBgREbHGQmRwO0DPBX5HeVQ3vM5v2ns5bvNgG7n4+4wSub2K20DkVdxgzJTAuI8F3sG9fD5tJkQMkyNimByxRshwCu49zndQHtUNibCEey3sC7rOe4qWoDoV8n5ojuV0HxWeinsNwp1kr5WPiIhhckTTMV1h7L0Z/y/i3pf8AW4OYovI0W8k7LHQhNtp8Nd+BniLxl7kHhHJMCKi17zCIm4k+QDcy9jn0HWun3+9xKE6f21AauCWzyXy/pKMaMbnHku4kerpuGk5r0vHCxlhedbfETFMjojo9RB5G4XJt+LyhVPNNQXcCpF9gMdwy+Im6HNr3Fv2zqbrkrxCymE3Bd4N90Kzn+He0TOF8vZx9h7+XAfl+Y9xgCUiIqLX4dcFHyuSOVPh62Y63w6cRfnNhx3muyW5M4L7VTPs5+t3xwH7Ut5gxE7sHoF7udh8XXsxbtClLTZbVNiIiL7CMhHbm7gBjfd1fgRwOG6z37nAPH0+p8/ngYeAH+HmDdbqtS3VtS/hVp6sCoiwhHsX+ExgAW7HnA2Bibj3/SyPIXNEREQzw+f++ryIqJgREZk61mLC3/B8NXRSXy4v63lhRBTmy0smNI+IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiPh//Blvp0P6MmrtZQAAAABJRU5ErkJggg==");

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