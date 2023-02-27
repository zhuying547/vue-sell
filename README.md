# vue-sell

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## Note

---

需要借助 prettier-plugin-stylus 完成对 stylus 的格式化。

- 不支持 @font-face 难绷！

### 数据 Mock

通过 devServer 的配置完成

> 统一放在 `/api` 请求路径下

### stylus-loader

在`<style lang="stylus">`中导入 mixin，导入图片的路径是相对 mixin 所在目录，为什么？
