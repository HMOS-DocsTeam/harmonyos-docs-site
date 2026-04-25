---
title: "fast_ads_segment_map.h"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast-ads-segment-map-8h
kit: 系统
last_updated: "2026-04-22"
slug: fast-kit-fast-ads-segment-map-8h
---

# fast\_ads\_segment\_map.h

## 概述

线段表相关数据结构及函数定义。

****引用文件：**** &lt;FASTKit/fast\_ads\_segment\_map.h&gt;

****库：**** libfast\_ads.so

****系统能力：**** SystemCapability.FAST.Core

****起始版本：**** 6.0.2(22)

****相关模块：**** [FAST](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast)

## 汇总

### 类型定义

| 名称 | 描述 |
| --- | --- |
| typedef enum [FAST\_SegmentMapQueryType](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmapquerytype-1) [FAST\_SegmentMapQueryType](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmapquerytype) | 线段表支持的查询操作类型。 |
| typedef enum [FAST\_SegmentMapUpdateType](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmapupdatetype-1) [FAST\_SegmentMapUpdateType](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmapupdatetype) | 线段表支持的更新操作类型。 |
| typedef struct [FAST\_SegmentMapConfig](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmapconfig) [FAST\_SegmentMapConfig](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmapconfig) | 线段表的不透明配置。 |
| typedef void \* [FAST\_SegmentMapHandle](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmaphandle) | 线段表的句柄。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [FAST\_SegmentMapQueryType](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmapquerytype-1) { [FAST\_SEGMENTMAP\_QUERY\_TYPE\_SUM](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast) = 0, [FAST\_SEGMENTMAP\_QUERY\_TYPE\_MIN](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast) = 1, [FAST\_SEGMENTMAP\_QUERY\_TYPE\_MAX](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast) = 2 } | 线段表支持的查询操作类型。 |
| [FAST\_SegmentMapUpdateType](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmapupdatetype-1) { [FAST\_SEGMENTMAP\_UPDATE\_TYPE\_SET](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast) = 0, [FAST\_SEGMENTMAP\_UPDATE\_TYPE\_ADD](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast) = 1, [FAST\_SEGMENTMAP\_UPDATE\_TYPE\_SUB](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast) = 2 } | 线段表支持的更新操作类型。 |

### 函数

| 名称 | 描述 |
| --- | --- |
| FAST\_EXPORT [FAST\_ErrorCode](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_errorcode-1) [HMS\_FAST\_SegmentMap\_CreateConfig](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#hms_fast_segmentmap_createconfig) ([FAST\_SegmentMapConfig](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmapconfig) \*\*config) | 创建线段表的不透明配置。 |
| FAST\_EXPORT void [HMS\_FAST\_SegmentMap\_DestroyConfig](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#hms_fast_segmentmap_destroyconfig) ([FAST\_SegmentMapConfig](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmapconfig) \*config) | 销毁线段表的不透明配置。 |
| FAST\_EXPORT [FAST\_ErrorCode](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_errorcode-1) [HMS\_FAST\_SegmentMap\_SetQueryType](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#hms_fast_segmentmap_setquerytype) ([FAST\_SegmentMapConfig](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmapconfig) \*config, [FAST\_SegmentMapQueryType](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmapquerytype-1) type) | 设置线段表不透明配置中的查询类型。 |
| FAST\_EXPORT [FAST\_ErrorCode](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_errorcode-1) [HMS\_FAST\_SegmentMap\_SetUpdateType](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#hms_fast_segmentmap_setupdatetype) ([FAST\_SegmentMapConfig](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmapconfig) \*config, [FAST\_SegmentMapUpdateType](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmapupdatetype-1) type) | 设置线段表不透明配置中的更新类型。 |
| FAST\_EXPORT [FAST\_ErrorCode](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_errorcode-1) [HMS\_FAST\_SegmentMap\_Create](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#hms_fast_segmentmap_create) ([FAST\_SegmentMapHandle](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmaphandle) \*handle, size\_t size, const int32\_t \*array, [FAST\_SegmentMapConfig](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmapconfig) \*config) | 创建线段表。 |
| FAST\_EXPORT void [HMS\_FAST\_SegmentMap\_Destroy](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#hms_fast_segmentmap_destroy) ([FAST\_SegmentMapHandle](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmaphandle) handle) | 销毁线段表实例，释放内存，再次调用为未定义行为。 |
| FAST\_EXPORT [FAST\_ErrorCode](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_errorcode-1) [HMS\_FAST\_SegmentMap\_Update](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#hms_fast_segmentmap_update) ([FAST\_SegmentMapHandle](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmaphandle) handle, size\_t left, size\_t right, int32\_t value) | 更新线段表的区间，根据配置按照赋值、加法、减法等操作更新。 |
| FAST\_EXPORT [FAST\_ErrorCode](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_errorcode-1) [HMS\_FAST\_SegmentMap\_Query](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#hms_fast_segmentmap_query) ([FAST\_SegmentMapHandle](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmaphandle) handle, size\_t left, size\_t right, int32\_t \*result) | 查询线段表的区间，根据配置返回最大值、最小值、求和等数据。 |
