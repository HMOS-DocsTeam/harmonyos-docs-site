---
title: "基础数据结构和接口列表"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-basic-data-structure-and-api-list
kit: ai
last_updated: "2026-04-22"
---

# 基础数据结构和接口列表

本文档提供了进行算子开发和图开发时依赖的基础数据结构和接口说明，按照命名空间进行分类：

- ge（Graph Engine）

  ge是Graph Engine的缩写，代表一个通用的命名空间，专注于构图和图编译处理。此命名空间提供了一套丰富的API，用于构建和管理复杂的图结构。它的核心优势在于其通用性和灵活性，能够满足各种图处理需求，无论是在设计阶段还是在编译过程中。
- gert（GE Runtime）

  gert是GE Runtime的缩写，这个命名空间专门为运行时环境而设计，提供了一系列的高性能数据结构，以确保在执行时能够提供最佳性能。

## gert命名空间

****表1**** gert命名空间

| 分类 | 数据结构/接口名称 | 功能描述 |
| --- | --- | --- |
| 类和结构体 | [AnchorInstanceInfo](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-anchorinstanceinfo/cannkit-anchorinstanceinfo-introduction) | 用来描述一个算子的IR定义原型的输入信息与实际输入之间的关系。 |
| 类和结构体 | [CompileTimeTensorDesc](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-compiletimetensordesc/cannkit-compiletimetensordesc-constructor) | 用于描述编译时的Tensor描述信息，包含dtype信息以及format信息。 |
| 类和结构体 | [ComputeNodeInfo](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-computenodeinfo/cannkit-computenodeinfo-introduction) | 用于将算子的相关编译信息进行序列化保存，以便可以在图执行阶段能够高效地获取这些信息。 |
| 类和结构体 | [ContinuousVectorVector](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-continuousvectorvector/cannkit-continuousvectorvector-introduction) | 在内存中开辟一块连续的空间，用于存储数据的描述信息以及实际的数据元素，元素类型为ContinuousVector结构。 |
| 类和结构体 | [ContinuousVector](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-continuousvector/cannkit-continuousvector-introduction) | 本类是一个POD类，在内存中开辟一块连续的空间用于存储描述信息以及实际内存数据。 |
| 类和结构体 | [ExpandDimsType](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-expanddimstype/cannkit-expanddimstype-introduction) | ExpandDimsType类基于补维后的shape，描述了补维规则。 |
| 类和结构体 | [ExtendedKernelContext](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-extendedkernelcontext/cannkit-getinputdesc) | [InferShapeContext](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-infershapecontext/cannkit-infershapecontext-getinputshape)、[TilingContext](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-tilingcontext/cannkit-getinputshape)等的基类，ExtendedKernelContext中提供的方法如获取算子type、name、属性等接口均可以在InferShape、Tiling时调用。 |
| 类和结构体 | [InferDataTypeContext](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-inferdatatypecontext/cannkit-getinputdatatype) | 用于datatype推导的上下文结构。 |
| 类和结构体 | [InferShapeContext](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-infershapecontext/cannkit-infershapecontext-getinputshape) | 用于shape推导的上下文结构。 |
| 类和结构体 | [InferShapeRangeContext](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-infershaperangecontext/cannkit-getinputshaperange) | 用于shape range推导的上下文结构。 |
| 类和结构体 | [OpImplRegisterV2](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-opimpiregisterv2/cannkit-opimpiregisterv2-construction) | OpImplRegisterV2类作为注册接口类，提供了一系列算子原型注册接口，供开发者注册指定算子类型的Tiling函数、Infershape函数、私有属性等信息。开发者调用算子原型注册接口进行注册时会间接使用到该类。 |
| 类和结构体 | [Range](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-range/cannkit-range-introduction) | Range类用于描述一个对象的上下界。 |
| 类和结构体 | [RuntimeAttrs](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-runtimeattrs/cannkit-constructor) | 用于保存算子属性。 |
| 类和结构体 | [Shape](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-shape/cannkit-shape-introduction) | Shape结构体用于描述一个tensor的shape。 |
| 类和结构体 | [StorageFormat](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-storageformat/cannkit-storageformat-constructor) | StorageFormat格式包括原始格式、运行时格式、补维规则。 |
| 类和结构体 | [StorageShape](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-storageshape/cannkit-storageshape-introduction) | 该类描述了tensor的shape，包含两个信息：origin\_shape以及storage\_shape。 |
| 类和结构体 | [TilingData](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-tilingdata/cannkit-tilingdata-constructor) | 用于存储Tensor数据。 |
| 类和结构体 | [TensorPlacementUtils](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-tensorplacementutils) | 提供一组函数，用于判断TensorPlacement的位置。 |
| 类和结构体 | [Tensor](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-tensor/cannkit-tensor-constructor) | Tensor类用来描述一个tensor对象的信息以及行为，包含：shape信息、format信息、datatype信息以及tensor数据内容tensordata。 |
| 类和结构体 | [TilingContext](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-tilingcontext/cannkit-getinputshape) | 用于算子Tiling的上下文结构。 |
| 类和结构体 | [TilingData](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-tilingdata/cannkit-tilingdata-constructor) | 用于存储Tiling数据。 |
| 类和结构体 | [TypedContinuousVector](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-typedcontinuousvector/cannkit-typedcontinuousvector-introduction) | 本类继承自ContinuousVector类，与ContinuousVector类不同的是MutableData和GetData返回的是指定类型的地址，而不是void \*。因此称为Typed。 |
| 枚举 | [TensorPlacement](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-tensorplacement) | 表达Tensor存储位置的枚举值。 |

## ge命名空间

****表2**** ge命名空间

| 分类 | 数据结构/接口名称 | 功能描述 |
| --- | --- | --- |
| 类和结构体 | [Allocator](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-allocator/cannkit-allocator-construction-and-destructor) | 支持使用开发者注册的外置allocator功能，所在头文件位于CANN软件安装后文件存储路径下的“include/ge/ge\_allocator.h”路径。 |
| 类和结构体 | [AscendString](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ascendstring/cannkit-ascendstring-construction-and-destructor) | 用于存储字符串。  - 头文件位于CANN软件安装后文件存储路径下的include/graph/ascend\_string.h  - 库文件：libgraph.so |
| 类和结构体 | [AttrValue](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-attrvalue/cannkit-attrvalue-construction-and-destructor) | 用于存储属性值。  - 头文件位于CANN软件安装后文件存储路径下的include/graph/attr\_value.h  - 库文件：libgraph\_base.so |
| 类和结构体 | [AutoMappingSubgraphIOIndexFuncRegister](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-automappingsubgraphioindexfuncregister) | 内部关联接口，插件适配API调用时间接调用，开发者不直接感知。 |
| 类和结构体 | [FrameworkRegistry](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-frameworkregistry/cannkit-frameworkregistry-construction) | 内部关联接口，插件适配API调用时间接调用，开发者不直接感知。 |
| 类和结构体 | [InferenceContext](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-inferencecontext/cannkit-inferencecontext-construction) | 获取推理上下文对象，并设置相应对象的形状和数据类型，主要用于资源类算子。 |
| 类和结构体 | [InferFormatFuncRegister](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-inferformatfuncregister) | 算子InferFormat函数注册接口，此接口被其他头文件引用，一般不用由算子开发者直接调用。 |
| 类和结构体 | [InferShapeFuncRegister](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-infershapefuncregister) | 算子InferShape函数注册接口，此接口被其他头文件引用，一般不用由算子开发者直接调用。 |
| 类和结构体 | [InferValueRangeFuncRegister](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-infervaluerangefuncregister) | 算子InferValueRangeFuncRegister函数注册接口，此接口被其他头文件引用，一般不由算子开发者直接调用。 |
| 类和结构体 | [ListTensorType](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-listtensortype) | ListTensorType类用以定义输入或者输出支持的数据类型，是TensorType的封装，用于标识支持多个数据类型的情况。 |
| 类和结构体 | [MemBlock](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-memblock/cannkit-memblock-construction-and-destructor) | 配合[Allocator](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-allocator/cannkit-allocator-construction-and-destructor)类使用，支持使用开发者注册的外置allocator功能，所在头文件位于CANN软件安装后文件存储路径下的“include/ge/ge\_allocator.h”路径。 |
| 类和结构体 | [OperatorCreatorRegister](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-operatorcreatorregister) | 算子注册接口，注册一个算子原型，此接口被其他头文件引用，一般不用由算子开发者直接调用。 |
| 类和结构体 | [OperatorFactory](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-operatorfactory/cannkit-createoperator) | 内部关联接口，此接口被其他头文件引用，一般不用由算子开发者直接调用。 |
| 类和结构体 | [Operator](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-operator/cannkit-operator-construction-and-destructor) | 算子类。  - 头文件位于CANN软件安装后文件存储路径下的include/graph/operator.h  - 库文件：libgraph.so |
| 类和结构体 | [OpReceiver](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-opreceiver) | 用于算子编写适配插件进行AI框架适配时，进行映射关系注册。 |
| 类和结构体 | [OpRegistrationData](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-opregistrationdata/cannkit-general-description) | 用于算子编写适配插件进行AI框架适配时，进行映射关系注册。 |
| 类和结构体 | [Promote](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-promote) | Promote类用于表示输出数据类型为输入或属性指定的数据类型间的提升类型。 |
| 类和结构体 | [ShapeAndType](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-shapeandtype/cannkit-shapeandtype-construction-and-destructor) | 可设置、获取相应对象的形状和数据类型。 |
| 类和结构体 | [Shape](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-shape/cannkit-shape-construction-and-destructor) | 用于存储Tensor的shape信息。  - 头文件位于CANN软件安装后文件存储路径下的include/graph/tensor.h  - 库文件：libgraph\_base.so |
| 类和结构体 | [TensorDescInfo](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-tensordescinfo) | 存储Tensor描述信息。 |
| 类和结构体 | [TensorDesc](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-tensordesc/cannkit-tensordesc-construction-and-destructor) | 用于存取、管理Tensor描述信息。  - 头文件位于CANN软件安装后文件存储路径下的include/graph/tensor.h  - 库文件：libgraph\_base.so |
| 类和结构体 | [TensorType](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-tensortype) | TensorType类用以定义输入或者输出支持的数据类型。 |
| 类和结构体 | [Tensor](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-tensor/cannkit-tensor-construction-and-destructor) | Tensor结构。  - 头文件位于CANN软件安装后文件存储路径下的include/graph/tensor.h  - 库文件：libgraph\_base.so |
| 类和结构体 | [TypeUtils](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-typeutils/cannkit-datatypetoascendstring) | 类型转换工具类。 |
| 类和结构体 | [VerifyFuncRegister](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-verifyfuncregister) | 算子verifyFunc函数注册接口，此接口被其他头文件引用，一般不用由算子开发者直接调用。 |
| 函数 | [ConvertToAscendString](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-converttoascendstring) | 模板函数，接受一个模板参数T，并将其转换为AscendString类型。这个函数的主要功能是将不同类型的字符串转换为AscendString类型。 |
| 函数 | [ConvertToListAscendString](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-converttolistascendstring) | 定义了一个模板函数ConvertToListAscendString，用于将不同类型的字符串列表转换为AscendString类型的列表。 |
| 函数 | [GetC0Format](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-getc0format) | 根据实际format获取C0 format的值。 |
| 函数 | [GetC0Value](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-getc0value) | 从实际format中解析出c0 format信息。 |
| 函数 | [GetFormatFromC0](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-getformatfromc0) | 根据传入的format和c0format信息得到实际的format。 |
| 函数 | [GetFormatFromSub](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-getformatfromsub) | 根据传入的主format和子format信息得到实际的format。 |
| 函数 | [GetFormatFromSubAndC0](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-getformatfromsubandc0) | 根据传入的主format，子format和c0format信息得到实际的format。 |
| 函数 | [GetFormatName](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-getformatname) | 根据传入的format类型，获取format的字符串描述。 |
| 函数 | [GetPrimaryFormat](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-getprimaryformat) | 从实际format中解析出主format信息。 |
| 函数 | [GetSizeByDataType](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-getsizebydatatype) | 根据传入的data\_type，获取该data\_type所占用的内存大小。 |
| 函数 | [GetSizeInBytes](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-getsizeinbytes) | 根据传入的element\_count和data\_type，获取element\_count个该data\_type所占用的内存总大小。 |
| 函数 | [GetSubFormat](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-getsubformat) | 从实际format中解析出子format信息。 |
| 函数 | [HasC0Format](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-hasc0format) | 判断实际format中是否包含C0 format。 |
| 函数 | [HasSubFormat](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-hassubformat) | 判断实际format中是否包含子format。 |
| 类型定义 | [ge::graphStatus](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-gegraphstatus) | 返回码状态说明。 |
| 枚举 | [DataType](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-datatype) | 数据类型枚举值。 |
| 枚举 | [Format](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-format) | 数据格式枚举值 |
| 宏 | [BROADCAST\_INFER](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-broadcast-infer) | 提供公共函数宏封装，供算子开发者开发InferShape函数。该函数基于2个输入的shape，设置输出的shape。该宏只是设置shape，未设置dtype。 |
| 宏 | [COMMON\_INFER\_FUNC\_REG](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-common-infer-func-reg) | 注册算子的InferShape函数。 |
| 宏 | [DECLARE\_ERRORNO](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-declare-errorno) | 错误码及描述注册宏。 |
| 宏 | [ELMTWISE\_INFER\_SHAPEANDTYPE](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-elmtwise-infer-shapeandtype) | 提供公共函数宏封装，供算子开发者开发InferShape函数。该函数基于输入的shape和dtype，设置输出的shape和dtype。 |
| 宏 | [IMPLEMT\_COMMON\_INFERFUNC](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-implemt-common-inferfunc) | 封装算子的Common\_InferShape函数。 |
| 宏 | [IMPLEMT\_INFERFORMAT\_FUNC](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-implemt-inferformat-func) | 封装算子的inferFormat函数。 |
| 宏 | [IMPLEMT\_INFERFUNC](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-implemt-inferfunc) | 封装算子的InferShape函数。 |
| 宏 | [IMPLEMT\_VERIFIER](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-implemt-verifier) | 封装算子的Verify函数。 |
| 宏 | [INFER\_FORMAT\_FUNC\_REG](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-infer-format-func-reg) | 注册算子的InferFormat实现。 |
| 宏 | [INFER\_FUNC\_REG](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-infer-func-reg) | 注册算子的InferShape函数。 |
| 宏 | [原型定义接口（REG\_OP）](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-prototype-definition-api) | 原型定义接口。 |
| 宏 | [原型定义衍生接口说明](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-prototype-definition-derivative-api) | 原型定义衍生接口。 |
| 宏 | [VERIFY\_FUNC\_REG](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-verify-func-reg) | 注册算子的Verify函数。 |
