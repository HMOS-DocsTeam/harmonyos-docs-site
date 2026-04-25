---
title: "管理数据源"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-datasource-manage
kit: app-services
last_updated: "2026-04-22"
---

# 管理数据源

## 场景介绍

数据源提供了应用或者设备的信息，每一个运动健康数据必须关联数据源信息，通过DataSourceId进行关联。

![](../../../../images/7112407f/note_3.0-zh-cn.png) 

DataSourceId在插入数据源信息时由平台生成，无法更改。

## 接口说明

| 接口名 | 描述 |
| --- | --- |
| [insertDataSource](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoreinsertdatasource)(dataSource: [DataSourceBase](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#datasourcebase)): Promise&lt;string&gt; | 插入数据源，入参为数据源基类[DataSourceBase](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#datasourcebase)。 |
| [readDataSource](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstorereaddatasource)(request: [DataSourceReadRequest](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#datasourcereadrequest)): Promise&lt;[DataSource](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#datasource)[]&gt; | 查询数据源，通过[DataSourceReadRequest](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#datasourcereadrequest)设置查询条件，可按DataSourceId/包名/设备UniqueId查询数据源。 |
| [updateDataSource](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoreupdatedatasource)(dataSource: [DataSource](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#datasource)): Promise&lt;void&gt; | 更新数据源，其中数据源的dataSourceId和uniqueId字段无法更新。 |

## 开发前检查

- 完成[申请运动健康服务](/health-service-kit-guide/health-harmonyos/health-preparations/health-apply)与[配置Client ID](/health-service-kit-guide/health-harmonyos/health-preparations/health-configuration-client-id)。
- 接口首次调用前，需先使用[init](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoreinit)方法进行初始化。
- 需先通过[用户授权](/health-service-kit-guide/health-harmonyos/health-app-dev/health-add-permissions#用户授权)接口引导用户授权，用户授权任意数据类型权限后，才有权限调用数据源相关接口。
- 错误码请参考[ArkTS API错误码](/ref/health-service-api/errorcode-healthservice/errorcode-healthservice)，常见问题请参考[Health Service Kit常见问题](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-faqs)。

## 开发步骤

### 插入数据源

1.导入运动健康服务功能模块及相关公共模块。

```
import { healthStore } from '@kit.HealthServiceKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
```

2.创建数据源。

```
let dataSource: healthStore.DataSourceBase = {
  deviceInfo: {
    uniqueId: 'test',
    name: 'test', // 插入数据源时此字段必填
    category: healthStore.DeviceCategory.WEARABLE_BAND, // 插入数据源时此字段必填
    productId: '0554', // 插入数据源时此字段必填
    model: 'lotana',
    manufacturer: 'HUAWEI',
    mac: 'testDeviceMac',
    sn: 'testDeviceSn',
    hardwareVersion: '1',
    softwareVersion: '2',
    firmwareVersion: '3',
    udid: ''
  }
}
```

3.调用[insertDataSource](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoreinsertdatasource)方法执行插入请求，并处理返回结果。

```
try {
  const dataSourceId = await healthStore.insertDataSource(dataSource);
  hilog.info(0x0000, 'testTag', `Succeeded in inserting dataSource, the dataSourceId is ${dataSourceId}.`);
} catch (err) {
  hilog.error(0x0000, 'testTag', `Failed to insert dataSource. Code: ${err.code}, message: ${err.message}`);
}
```

### 读取数据源

1.导入运动健康服务功能模块及相关公共模块。

```
import { healthStore } from '@kit.HealthServiceKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
```

2.创建数据源读取请求。

```
let readSourceRequest: healthStore.DataSourceReadRequest = {
  deviceUniqueId: 'testudidupdate'
}
```

3.调用[readDataSource](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstorereaddatasource)方法执行查询请求，并处理返回结果。

```
try {
  let dataSources = await healthStore.readDataSource(readSourceRequest);
  dataSources.forEach((dataSource) => {
    hilog.info(0x0000, 'testTag', `Succeeded in reading dataSource, the dataSourceId is ${dataSource.dataSourceId}.`);
  });
} catch (err) {
  hilog.error(0x0000, 'testTag', `Failed to read dataSource. Code: ${err.code}, message: ${err.message}`);
}
```

### 更新数据源

1.导入运动健康服务功能模块及相关公共模块。

```
import { healthStore } from '@kit.HealthServiceKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
```

2.创建数据源。

```
let newDataSource: healthStore.DataSource = {
  deviceInfo: {
    uniqueId: 'test',
    name: 'test',
    category: healthStore.DeviceCategory.WEARABLE_BAND,
    productId: '0554',
    model: 'lotana',
    manufacturer: 'HUAWEI',
    mac: 'testDeviceMac',
    sn: 'testDeviceSn',
    hardwareVersion: '1',
    softwareVersion: '2',
    firmwareVersion: '3',
    // 修改udid
    udid: 'updateudid'
  },
  // 此处dataSourceId值为开发步骤插入数据源时，返回的dataSourceId
  dataSourceId: 'xxx'
}
```

3.调用[updateDataSource](/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoreupdatedatasource)方法执行更新请求，并处理返回结果。

```
try {
  await healthStore.updateDataSource(newDataSource);
  hilog.info(0x0000, 'testTag', 'Succeeded in updating dataSource.');
} catch (err) {
  hilog.error(0x0000, 'testTag', `Failed to update dataSource. Code: ${err.code}, message: ${err.message}`);
}
```
