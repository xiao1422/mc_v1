# mc_v1

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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


---
## 宝塔
### SSL 证书部署
> 在您通过宝塔面板将您的 `SSL证书` 部署完毕后，并开启了 `强制HTTPS` 后，它突然报 `502` 错误，可您觉得您的证书部署并无错误时

1. 打开项目管理：网站=>xx项目=>设置
2. 点击配置文件：设置==>配置文件
3. 在配置文件内查找关键词 `localhost`

您会看到下面这段(如无多余操作，它应该是在第58行开始)
```
    ...
    location / {
        proxy_pass http://127.0.0.1:8080;
        ...
    }
    # HTTP反向代理相关配置结束 <<<
    ...
```
然后将 `proxy_pass` 原来的值 `http://...` 改为 `https://...`

修改完成后的配置
```
    ...
    location / {
        proxy_pass https://127.0.0.1:8080;
        ...
    }
    # HTTP反向代理相关配置结束 <<<
    ...
```

