export const MenuList = [
    {
        iconClass: "ph-duotone ph-house-line",
        name: "dashboard",
        path: '/dashboard'
    },
    {
        iconClass: "ph-duotone ph-detective",
        name: "Profile",
        path: '/profile'
    },
    {
        type: "dropdown",
        iconClass: "ph-duotone ph-stack",
        title:"Apps",
        collapseId: "apps",
        name: "apps",
        path: '/apps',
        children: [
            {name: "Website Analyzer", path: "/apps/website-analyzer"},
            {name: "Jobs Scrapper", path: "/apps/jobs-scrapper"},
            {name: "Instagram Scrapper", path: "/apps/instagram-scrapper"},
            {name: "Linkedin Scrapper", path: "/apps/linkedin-scrapper"},
        ],
    },
   
];
