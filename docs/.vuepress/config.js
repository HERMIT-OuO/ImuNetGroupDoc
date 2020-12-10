module.exports = {
    title: "IMU Netgroup Doc",
    description: "Maybe you can find something useful here",
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        "/": {
            lang: "en-US", // 将会被设置为 <html> 的 lang 属性
            title: "IMU Netgroup Doc",
            description: "Maybe you can find something useful here",
        },
        "/zh/": {
            lang: "zh-CN",
            title: "内蒙古大学网络组文档库",
            description: "希望你能在这里找到有用的内容",
        },
    },
    themeConfig: {
        locales: {
            "/": {
                selectText: "Languages",
                label: "English",
                ariaLabel: "Languages",
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh",
                    },
                },
                lang: "en-US", // 将会被设置为 <html> 的 lang 属性
                title: "IMU Netgroup Doc",
                description: "Maybe you can find something useful here",
                nav: [
                    { text: "Home", link: "/" }, // 根路径
                    {
                        text: "Documentation",
                        items: [
                            {
                                text: "Server",
                                items: [
                                    {
                                        text: "GPU Server",
                                        link: "/zh/guide/GPU_Doc/",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            "/zh/": {
                selectText: "选择语言",
                label: "简体中文",
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用.",
                        buttonText: "刷新",
                    },
                },
                lang: "zh-CN",
                title: "内蒙古大学网络组文档库",
                description: "希望你能在这里找到有用的内容",
                nav: [
                    { text: "首页", link: "/zh/" }, // 根路径
                    {
                        text: "文档",
                        items: [
                            {
                                text: "服务器",
                                items: [
                                    {
                                        text: "GPU 服务器",
                                        link: "/zh/guide/GPU_Doc/",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        },
        lastUpdated: "Last Updated",
        sidebar: "auto",
        sidebarDepth: 5,
    },
    plugins: ["@vuepress/back-to-top", "@vuepress/medium-zoom"],
};
