import { defineConfig } from 'astro/config';

// 在 Astro 的配置文件中设置 site 属性为你的网站自己的唯一 Netlify URL
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [preact()]
});