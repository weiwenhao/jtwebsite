# Website

独立的 Next.js 单页落地页项目，用于部署到 Vercel。
样式基于 Tailwind CSS 和 shadcn/ui 组件结构，隐私政策、服务条款和联系支持都通过弹窗展示。

## 本地运行

```bash
cd website
npm install
npm run dev
```

默认地址：`http://localhost:3001`

## 部署到 Vercel

1. 在 Vercel 导入当前仓库
2. 将 `Root Directory` 设置为 `website`
3. Build Command 使用默认值 `next build`
4. Output Directory 保持默认
5. 如需自定义域名，在 Vercel 项目设置里绑定即可

## 可选环境变量

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPPORT_EMAIL`
- `NEXT_PUBLIC_CONTACT_EMAIL`

未设置时会使用代码内的默认值。
