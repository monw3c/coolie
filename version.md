# 0.14.5 2015年06月25日
- 支持分块加载

# 0.13.8 2015年06月06日
- 独立的 coolie-config.js，base 单独计算，仅用于单元测试
- 增加了安全性


# 0.12.0 2015年06月05日
- 已经完全不支持旧的写法
- 支持`require('some.json', 'json')`


# 0.11.0 2015年06月02日
- 增加了全局 DEBUG 变量，当`debug`配置为 true（默认） 时为 true


# 0.10.0 2015年06月01日
- 取消了对独立`coolie-config.js`的支持


# 0.9.0 2015年05月19日
- `base`路径重新定义，相对于`coolie-config.js`，更容易发布到 CDN
- 移除`host`选项


# 0.8.0 2015年05月08日
- 支持异步加载图片了 `require('image!./image.png')`
- 推荐新写法`require('./image.png', 'image')`，后续版本会废除旧写法
- 修正一个 reuqire 的 bug


# 0.7.7 2015年04月23日
- 增加了单元测试接口
- 完善了单元测试


# 0.6.0 2015年04月05日
- 新的并行加载方案
- 更小的体积
- 性能优化
- 兼容性考虑


# 0.5.0 2015年01月29日
- 优化了部分配置
- 增加了兼容性(ie5+)
- 适配了各种绝对路径


# 0.4.0 2015年01月15日
- 新增`data-config`配置


# 0.3.1 2014年11月20日
- 需要`coolie@0.3.0`以上版本构建工具支持
- 妥协增加了省略`.js`策略，路径策略参考`NodeJS`
- 妥协支持直接return返回


# 0.2.0 2014年11月19日
- 需要`coolie@0.2.0`以上版本构建工具支持
- `version`字符串修改的是`querystring`，不建议使用
- `version`对象配置支持对每个文件的版本号进行配置，达到真正的增量更新版本号的实现
- 增加了回调出口配置`callback`


# 0.1.5 2014年11月10日
- 优化模块出口策略
- 支持文本加载
- 优化性能
- 输出模块列表
- 更好的控制台提示


# 0.0.1  2014年11月1日
- 完成模块化管理和加载
- 初始