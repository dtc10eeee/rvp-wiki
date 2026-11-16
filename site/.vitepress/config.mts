import { defineConfig } from 'vitepress'

const zhTheme = {
  nav: [
    { text: '首页', link: '/' },
    {
      text: '玩法',
      items: [
        { text: '武器系统', link: '/wiki/weapons.html' },
        { text: '辅助设备', link: '/wiki/equipment.html' },
        { text: '模块化损伤', link: '/wiki/damage.html' },
        { text: '车载无人机', link: '/wiki/uav.html' },
        { text: '战术地图', link: '/wiki/tactical-map.html' },
        { text: '界面与操作', link: '/wiki/interface.html' },
        { text: 'AI 乘员', link: '/wiki/ai-crew.html' }
      ]
    },
    { text: '载具', link: '/wiki/vehicles.html' },
    { text: '配置与许可', link: '/wiki/config.html' },
    { text: 'GitHub', link: 'https://github.com/TV90/limitless-vehicle-rvp-addon' },
    { text: '下载', link: 'https://github.com/TV90/limitless-vehicle-rvp-addon/releases/tag/1.0.0_preview_0.6.2.1' },
    { text: 'English Wiki', link: '/en/' }
  ],
  sidebar: {
    '/wiki/': [
      {
        text: '概览',
        items: [{ text: 'Wiki 首页', link: '/' }]
      },
      {
        text: '玩法',
        items: [
          { text: '武器系统', link: '/wiki/weapons.html' },
          { text: '辅助设备', link: '/wiki/equipment.html' },
          { text: '模块化损伤', link: '/wiki/damage.html' },
          { text: '车载无人机', link: '/wiki/uav.html' },
          { text: '战术地图', link: '/wiki/tactical-map.html' },
          { text: '界面与操作', link: '/wiki/interface.html' },
          { text: 'AI 乘员', link: '/wiki/ai-crew.html' }
        ]
      },
      {
        text: '参考',
        items: [
          { text: '载具', link: '/wiki/vehicles.html' },
          { text: '配置、兼容与许可', link: '/wiki/config.html' }
        ]
      }
    ]
  },
  outline: { level: [2, 3], label: '此页内容' },
  search: { provider: 'local' },
  editLink: {
    pattern: 'https://github.com/dtc10eeee/rvp-wiki/edit/master/site/:path',
    text: '在 GitHub 上编辑此页'
  },
  lastUpdated: { text: '最近更新' },
  docFooter: { prev: '上一篇', next: '下一篇' },
  footer: {
    message: '基于 Limitless Vehicle 的 RVP 附属 Mod',
    copyright: 'Copyright © 2026 YWZJ'
  },
  socialLinks: [
    { icon: 'github', link: 'https://github.com/TV90/limitless-vehicle-rvp-addon' }
  ]
}

const enTheme = {
  nav: [
    { text: 'Home', link: '/en/' },
    {
      text: 'Gameplay',
      items: [
        { text: 'Weapon Systems', link: '/en/wiki/weapons.html' },
        { text: 'Support Equipment', link: '/en/wiki/equipment.html' },
        { text: 'Modular Damage', link: '/en/wiki/damage.html' },
        { text: 'UAVs', link: '/en/wiki/uav.html' },
        { text: 'Tactical Map', link: '/en/wiki/tactical-map.html' },
        { text: 'Interface', link: '/en/wiki/interface.html' },
        { text: 'AI Crew', link: '/en/wiki/ai-crew.html' }
      ]
    },
    { text: 'Vehicles', link: '/en/wiki/vehicles.html' },
    { text: 'Config', link: '/en/wiki/config.html' },
    { text: 'GitHub', link: 'https://github.com/TV90/limitless-vehicle-rvp-addon' },
    { text: 'Download', link: 'https://github.com/TV90/limitless-vehicle-rvp-addon/releases/tag/1.0.0_preview_0.6.2.1' },
    { text: '中文 Wiki', link: '/' }
  ],
  sidebar: {
    '/en/wiki/': [
      {
        text: 'Overview',
        items: [{ text: 'Wiki Home', link: '/en/' }]
      },
      {
        text: 'Gameplay',
        items: [
          { text: 'Weapon Systems', link: '/en/wiki/weapons.html' },
          { text: 'Support Equipment', link: '/en/wiki/equipment.html' },
          { text: 'Modular Damage', link: '/en/wiki/damage.html' },
          { text: 'UAVs', link: '/en/wiki/uav.html' },
          { text: 'Tactical Map', link: '/en/wiki/tactical-map.html' },
          { text: 'Interface', link: '/en/wiki/interface.html' },
          { text: 'AI Crew', link: '/en/wiki/ai-crew.html' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Vehicles', link: '/en/wiki/vehicles.html' },
          { text: 'Configuration and License', link: '/en/wiki/config.html' }
        ]
      }
    ]
  },
  outline: { level: [2, 3], label: 'On this page' },
  search: { provider: 'local' },
  editLink: {
    pattern: 'https://github.com/dtc10eeee/rvp-wiki/edit/master/site/:path',
    text: 'Edit this page on GitHub'
  },
  lastUpdated: { text: 'Last updated' },
  docFooter: { prev: 'Previous', next: 'Next' },
  footer: {
    message: 'RVP addon for Limitless Vehicle',
    copyright: 'Copyright © 2026 YWZJ'
  },
  socialLinks: [
    { icon: 'github', link: 'https://github.com/TV90/limitless-vehicle-rvp-addon' }
  ]
}

export default defineConfig({
  lang: 'zh-CN',
  title: 'RVP Wiki',
  description: 'Real Vehicle Pack Wiki — Limitless Vehicle addon',
  base: '/rvp-wiki/',
  outDir: '../docs',
  appearance: 'dark',
  lastUpdated: true,
  cleanUrls: false,
  head: [
    ['meta', { name: 'theme-color', content: '#1b1b1f' }]
  ],
  themeConfig: zhTheme,
  locales: {
    root: { label: '简体中文', lang: 'zh-CN' },
    en: { label: 'English', lang: 'en', link: '/en/', themeConfig: enTheme }
  }
})