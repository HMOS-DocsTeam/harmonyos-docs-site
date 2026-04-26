"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["228191"], {
157006(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_map_kit_guide_map_creation_map_location_map_location_md_7c0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-map-kit-guide-map-creation-map-location-map-location-md-7c0.json
var site_docs_map_kit_guide_map_creation_map_location_map_location_md_7c0_namespaceObject = JSON.parse('{"id":"map-kit-guide/map-creation/map-location/map-location","title":"显示我的位置","description":"场景介绍","source":"@site/docs/map-kit-guide/map-creation/map-location/map-location.md","sourceDirName":"map-kit-guide/map-creation/map-location","slug":"/map-kit-guide/map-creation/map-location/","permalink":"/harmonyos-docs-site/map-kit-guide/map-creation/map-location/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"显示我的位置","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-location","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"切换地图类型","permalink":"/harmonyos-docs-site/map-kit-guide/map-creation/map-type/"},"next":{"title":"显示自定义地图","permalink":"/harmonyos-docs-site/map-kit-guide/map-creation/map-style/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/map-kit-guide/map-creation/map-location/map-location.md


const frontMatter = {
	title: '显示我的位置',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-location',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '显示我的位置';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "开启“我的位置”按钮",
  "id": "开启我的位置按钮",
  "level": 3
}, {
  "value": "监听“我的位置”按钮点击事件",
  "id": "监听我的位置按钮点击事件",
  "level": 3
}, {
  "value": "隐藏“我的位置”按钮",
  "id": "隐藏我的位置按钮",
  "level": 3
}, {
  "value": "自定义位置图标样式",
  "id": "自定义位置图标样式",
  "level": 3
}, {
  "value": "更改我的位置图层相对于覆盖物的压盖顺序",
  "id": "更改我的位置图层相对于覆盖物的压盖顺序",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "显示我的位置",
        children: "显示我的位置"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.1(21)开始，支持更改我的位置相对覆盖物的顺序。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节将向您介绍如何开启和展示“我的位置”功能，“我的位置”指的是进入地图后点击“我的位置”显示当前位置点的功能。效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(700872)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["“我的位置”功能主要由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller",
        children: "MapComponentController"
      }), "的方法实现，更多接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setmylocationenabled",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "方法名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setmylocationenabled",
              children: "setMyLocationEnabled"
            }), "(myLocationEnabled: boolean): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "“我的位置”图层功能开关，默认使用系统的连续定位能力显示用户位置。开关打开后，“我的位置”按钮默认显示在地图的右下角。点击“我的位置”按钮，将会在屏幕中心显示当前定位，以蓝色圆点的形式呈现。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setmylocationcontrolsenabled",
              children: "setMyLocationControlsEnabled"
            }), "(enabled: boolean): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否启用“我的位置”按钮。只显示按钮，在不开启“我的位置”图层功能的情况下，点击按钮没反应。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setmylocation",
              children: "setMyLocation"
            }), "(location: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-arkts/js-apis-geolocationmanager/js-apis-geolocationmanager#location",
              children: "geoLocationManager.Location"
            }), "): void"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置“我的位置”坐标。  如果不使用Map Kit提供的默认定位行为，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-api",
              children: "Location Kit"
            }), "获取用户位置后，传给Map Kit。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setmylocationstyle",
              children: "setMyLocationStyle"
            }), "(style: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#mylocationstyle",
              children: "mapCommon.MyLocationStyle"
            }), "): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置“我的位置”样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapeventmanager/map-map-mapeventmanager#onmylocationbuttonclick",
              children: "on"
            }), "(type: 'myLocationButtonClick', callback: Callback<void>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听“我的位置”按钮点击事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-mapeventmanager/map-map-mapeventmanager#offmylocationbuttonclick",
              children: "off"
            }), "(type: 'myLocationButtonClick', callback?: Callback<void>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消监听“我的位置”按钮点击事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开启我的位置按钮",
      children: "开启“我的位置”按钮"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在启用“我的位置”功能前，开发者应确保应用已申请并获得用户定位权限，以便正确显示用户当前位置。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["申请ohos.permission.LOCATION和ohos.permission.APPROXIMATELY_LOCATION权限，您需要在module.json5配置文件中声明所需要的权限，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
            children: "声明权限"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\" : {\n    // ...\n    \"requestPermissions\":[\n      {\n        // 允许应用在前台运行时获取位置信息\n        \"name\" : \"ohos.permission.LOCATION\",\n        // reason需要在/resources/base/element/string.json中新建\n        \"reason\": \"$string:location_permission\",\n        \"usedScene\": {\n          \"abilities\": [\n            \"EntryAbility\"\n          ],\n          \"when\":\"inuse\"\n        }\n      },\n      {\n        // 允许应用获取设备模糊位置信息\n        \"name\" : \"ohos.permission.APPROXIMATELY_LOCATION\",\n        // reason需要在/resources/base/element/string.json中新建\n        \"reason\": \"$string:approximately_location_permission\",\n        \"usedScene\": {\n          \"abilities\": [\n            \"EntryAbility\"\n          ],\n          \"when\":\"inuse\"\n        }\n      }\n    ]\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["初始化地图并获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller",
            children: "MapComponentController"
          }), "地图操作类对象。调用mapController对象的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setmylocationenabled",
            children: "setMyLocationEnabled"
          }), "方法启用“我的位置”功能。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "建议在获得用户授权后开启“我的位置”功能。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { abilityAccessCtrl, bundleManager, common, PermissionRequestResult, Permissions } from '@kit.AbilityKit';\nimport { BusinessError, AsyncCallback } from '@kit.BasicServicesKit';\nimport { MapComponent, mapCommon, map } from '@kit.MapKit';\n\n@Entry\n@Component\nstruct LocationDemo {\n  private mapOptions?: mapCommon.MapOptions;\n  private callback?: AsyncCallback<map.MapComponentController>;\n  private mapController?: map.MapComponentController;\n  private mapEventManager?: map.MapEventManager;\n\n  aboutToAppear(): void {\n    // 地图初始化参数，设置地图中心点坐标及层级\n    this.mapOptions = {\n      position: {\n        target: {\n          latitude: 39.9,\n          longitude: 116.4\n        },\n        zoom: 10\n      }\n    };\n\n    // 地图初始化的回调\n    this.callback = async (err, mapController) => {\n      if (!err) {\n        // 获取地图的控制器类，用来操作地图\n        this.mapController = mapController;\n        this.mapEventManager = this.mapController.getEventManager();\n        let permission = await this.checkPermissions();\n        if (!permission) {\n          this.requestPermissions();\n          // 启用我的位置按钮\n          this.mapController?.setMyLocationControlsEnabled(true);\n        }\n      } else {\n        console.error(`Failed to initialize the map, code is：${err.code}, message is ${err.message}`);\n      }\n    };\n  }\n\n  // 校验应用是否被授予定位权限，可以通过调用checkAccessToken()方法来校验当前是否已经授权。\n  async checkPermissions(): Promise<boolean> {\n    const permissions: Array<Permissions> = ['ohos.permission.LOCATION', 'ohos.permission.APPROXIMATELY_LOCATION'];\n    for (let permission of permissions) {\n      let grantStatus: abilityAccessCtrl.GrantStatus = await this.checkAccessToken(permission);\n      if (grantStatus === abilityAccessCtrl.GrantStatus.PERMISSION_GRANTED) {\n        // 启用我的位置图层，mapController为地图操作类对象\n        this.mapController?.setMyLocationEnabled(true);\n        // 启用我的位置按钮\n        this.mapController?.setMyLocationControlsEnabled(true);\n        return true;\n      }\n    }\n    return false;\n  }\n\n  // 如果没有被授予定位权限，动态向用户申请授权\n  requestPermissions(): void {\n    let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();\n    atManager.requestPermissionsFromUser(this.getUIContext().getHostContext() as common.UIAbilityContext,\n      ['ohos.permission.LOCATION', 'ohos.permission.APPROXIMATELY_LOCATION'])\n      .then((data: PermissionRequestResult) => {\n        // 启用我的位置图层\n        this.mapController?.setMyLocationEnabled(true);\n      })\n      .catch((err: BusinessError) => {\n        console.error(`Failed to request permissions from user. Code is ${err.code}, message is ${err.message}`);\n      })\n  }\n\n  async checkAccessToken(permission: Permissions): Promise<abilityAccessCtrl.GrantStatus> {\n    let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();\n    let grantStatus: abilityAccessCtrl.GrantStatus = abilityAccessCtrl.GrantStatus.PERMISSION_DENIED;\n\n    // 获取应用程序的accessTokenID\n    let tokenId: number = 0;\n    let bundleInfo: bundleManager.BundleInfo =\n      await bundleManager.getBundleInfoForSelf(bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION);\n    console.info('Succeeded in getting Bundle.');\n    let appInfo: bundleManager.ApplicationInfo = bundleInfo.appInfo;\n    tokenId = appInfo.accessTokenId;\n\n    // 校验应用是否被授予权限\n    grantStatus = await atManager.checkAccessToken(tokenId, permission);\n    console.info('Succeeded in checking access token.');\n    return grantStatus;\n  }\n\n  build() {\n    Stack() {\n      // 调用MapComponent组件初始化地图\n      MapComponent({ mapOptions: this.mapOptions, mapCallback: this.callback }).width('100%').height('100%');\n    }.height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "检查“我的位置”功能是否成功启用。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["“我的位置”按钮", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(561165)/* ["default"] */.A) + "",
            width: "19",
            height: "18"
          }), "默认显示在地图的右下角。点击“我的位置”按钮", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(254119)/* ["default"] */.A) + "",
            width: "19",
            height: "18"
          }), "，将会在屏幕中心显示当前定位，以蓝色圆点的形式呈现，效果如下图所示，效果根据获取到的用户位置会有变化。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(855398)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1216",
            height: "2688"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取用户位置坐标并设置用户的位置。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Map Kit默认使用系统的连续定位能力，如果您希望定制显示频率或者精准度，可以调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/location-api/location-arkts/js-apis-geolocationmanager/js-apis-geolocationmanager",
            children: "geoLocationManager"
          }), "相关接口获取用户位置坐标（WGS84坐标系）。注意访问设备的位置信息必须申请权限，并且获得用户授权，详情见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/location-api/location-arkts/js-apis-geolocationmanager/js-apis-geolocationmanager",
            children: "geoLocationManager"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["下面的示例仅显示一次定位结果，在获取到用户坐标后，调用mapController对象的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setmylocation",
            children: "setMyLocation"
          }), "设置用户的位置，", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setmylocation",
            children: "setMyLocation"
          }), "接口使用的是WGS84坐标系。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 需要引入@kit.LocationKit模块\nimport { geoLocationManager } from '@kit.LocationKit';\n// ...\n\n// 获取用户位置坐标\nlet location = await geoLocationManager.getCurrentLocation();\n\n// 设置用户的位置\nthis.mapController.setMyLocation(location);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "监听我的位置按钮点击事件",
      children: "监听“我的位置”按钮点击事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapeventmanager/map-map-mapeventmanager#onmylocationbuttonclick",
        children: "on('myLocationButtonClick')"
      }), "方法，设置'myLocationButtonClick'事件监听。设置监听后“我的位置按钮”点击事件自定义，反之不设置则由Map Kit执行点击后默认事件，即地图移动到当前用户位置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let callback = () => {\n  console.info(\"myLocationButtonClick\", `myLocationButtonClick`);\n};\nthis.mapEventManager.on(\"myLocationButtonClick\", callback);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "隐藏我的位置按钮",
      children: "隐藏“我的位置”按钮"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "控制是否显示“我的位置”按钮。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "this.mapController.setMyLocationControlsEnabled(false);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自定义位置图标样式",
      children: "自定义位置图标样式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过调用mapController.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#setmylocationstyle",
        children: "setMyLocationStyle"
      }), "方法，设置用户位置图标样式。效果如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let style: mapCommon.MyLocationStyle = {\n  anchorU: 0.5,\n  anchorV: 0.5,\n  radiusFillColor: 0xffff0000,\n  // icon为自定义图标资源，使用时需要替换\n  // 图标存放在resources/rawfile，icon参数传入rawfile文件夹下的相对路径\n  icon: 'test.png'\n};\nawait this.mapController.setMyLocationStyle(style);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(669849)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "更改我的位置图层相对于覆盖物的压盖顺序",
      children: "更改我的位置图层相对于覆盖物的压盖顺序"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过调用mapController.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-mapcomponentcontroller/map-map-mapcomponentcontroller#changemylocationlayerorder",
        children: "changeMyLocationLayerOrder"
      }), "方法，更改我的位置图层相对于覆盖物的压盖顺序。效果如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// true：我的位置图层位于覆盖物之下\nthis.mapController?.changeMyLocationLayerOrder(true);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(853492)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
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
669849(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479013-3200ab1873d791b441ebf085c9f3510c.jpg");

},
254119(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAIAAAA2bnI+AAACE0lEQVQ4EW2TPWsyQRDHd3bPOw0ExCJ+Bks7IVUKm3yCNIGAdtapLAQRbNOIHKT346TIhwiWEu/29mVmnkcnnJeXKY65mf3tzOz+V9HZ8GziExEiVlU1mUzqiASJyHtvrS3LUv1JElFVVUmSIGINi8/M/mxfZDNtrX16esqyDACurq6m02lRFCGEGKMss2f7RiLifD4HgG63m+c5Eb2+vmZZlqbpZDKRmojonAshfCNHo5HWuiiKGKNzTiqUZYmISZKMRiOJM/OFjDEWRZFlWVmWMgkiSnve+xgjIiqlrLWynff+q+bxeFRK7XY75xwirtdrY4yMut1uQwjMvFgslPpafyK99/+jzKy1DiFYaw+Hg2oYAOz3eyJi5na7LdfDzMo5N5vNBoOBMUba6/V6DVC1Wq3r62siijEaYwaDwXA4PDV/PB4fHh5ub2/TNJV0v99vkp1O5+bmRsYzxtzd3a1WKyJSMcaqqmKMWmtrrRx6kzTGfHx8CKmUqtV2mdgYc39/H0JAxLe3NwDQWidJ8vLyIjLYbDYAIFucaooXY2RmAPj8/GRmRJQvEYWzWWub2IUU/vHxsdPpOOeqqqqVwMzOOQAYj8d1wZ8kEeV5rrUGgOfn5/f39/l8boxRSi2Xyyb2BykHttvtut0uAKRpmue5yOMnWb+AZkJE02q1DodDM970T7fS/BdfXvZms6mF+nvNP7KA+vQ3/zpGAAAAAElFTkSuQmCC");

},
561165(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAIAAAA2bnI+AAACE0lEQVQ4EW2TPWsyQRDHd3bPOw0ExCJ+Bks7IVUKm3yCNIGAdtapLAQRbNOIHKT346TIhwiWEu/29mVmnkcnnJeXKY65mf3tzOz+V9HZ8GziExEiVlU1mUzqiASJyHtvrS3LUv1JElFVVUmSIGINi8/M/mxfZDNtrX16esqyDACurq6m02lRFCGEGKMss2f7RiLifD4HgG63m+c5Eb2+vmZZlqbpZDKRmojonAshfCNHo5HWuiiKGKNzTiqUZYmISZKMRiOJM/OFjDEWRZFlWVmWMgkiSnve+xgjIiqlrLWynff+q+bxeFRK7XY75xwirtdrY4yMut1uQwjMvFgslPpafyK99/+jzKy1DiFYaw+Hg2oYAOz3eyJi5na7LdfDzMo5N5vNBoOBMUba6/V6DVC1Wq3r62siijEaYwaDwXA4PDV/PB4fHh5ub2/TNJV0v99vkp1O5+bmRsYzxtzd3a1WKyJSMcaqqmKMWmtrrRx6kzTGfHx8CKmUqtV2mdgYc39/H0JAxLe3NwDQWidJ8vLyIjLYbDYAIFucaooXY2RmAPj8/GRmRJQvEYWzWWub2IUU/vHxsdPpOOeqqqqVwMzOOQAYj8d1wZ8kEeV5rrUGgOfn5/f39/l8boxRSi2Xyyb2BykHttvtut0uAKRpmue5yOMnWb+AZkJE02q1DodDM970T7fS/BdfXvZms6mF+nvNP7KA+vQ3/zpGAAAAAElFTkSuQmCC");

},
855398(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959012-8984b853804768a03d4eae7dfb484dcb.jpg");

},
700872(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479011-8984b853804768a03d4eae7dfb484dcb.jpg");

},
853492(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799364-f6688ceadcb2a37471299fb1cc636415.jpg");

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