// SVG icons
import IcChromeReader  from "../assets/icons/ic-chrome-reader-mode.svg";
import IcCollectReviews  from "../assets/icons/ic-local-play-black-24-px.svg";
import IcManageReviews from "../assets/icons/ic-manage-reviews.svg";
import IcShowReviews  from "../assets/icons/ic-show-reviews.svg";
import IcExtension  from "../assets/icons/ic-extension.svg";
import IcPieChart from "../assets/icons/ic-pie-chart.svg";
import IcFreeBreakfast from "../assets/icons/ic-free-breakfast.svg";
import IcSettings from "../assets/icons/ic-settings.svg";
import IcLabs from "../assets/icons/ic-labs.svg";

export default [
    {
        text:'News',
        icon:IcChromeReader
    },
    {
        text:'Invitations',
        icon:IcCollectReviews,
        submenu:[{
            text:'Starred',
            icon:IcLabs
        }],
        isOpen:false
    },
    {
        text:'Reviews',
        icon:IcManageReviews,
        submenu:[{
            text:'Starred',
            icon:IcLabs
        }],
        isOpen:false
    },
    {
        text:'Show reviews',
        icon:IcShowReviews,
        submenu:[{
            text:'Starred',
            icon:IcLabs
        }],
        isOpen:false
    },
    {
        text:'Apps & Integrations',
        icon:IcExtension,
        submenu:[{
            text:'Starred',
            icon:IcLabs
        }],
        isOpen:false
    },
    {
        text:'Analytics',
        icon:IcPieChart,
        submenu:[{
            text:'Starred',
            icon:IcLabs
        }],
        isOpen:false
    },
    {
        text:'Tips and Ideas',
        icon:IcFreeBreakfast
    },
    {
        text:'Settings',
        icon:IcSettings,
        submenu:[{
            text:'Starred',
            icon:IcLabs
        }],
        isOpen:false
    },
    {
        text:'Labs',
        icon:IcLabs,
        submenu:[{
            text:'Starred',
            icon:IcLabs
        }],
        isOpen:false
    },
] 