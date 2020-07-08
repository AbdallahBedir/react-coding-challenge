import React from 'react';
// SVG icons
import { ReactComponent as IcChromeReader }  from "../assets/icons/ic-chrome-reader-mode.svg";
import { ReactComponent as IcCollectReviews }  from "../assets/icons/ic-local-play-black-24-px.svg";
import { ReactComponent as IcManageReviews } from "../assets/icons/ic-manage-reviews.svg";
import { ReactComponent as IcShowReviews }  from "../assets/icons/ic-show-reviews.svg";
import { ReactComponent as IcExtension }  from "../assets/icons/ic-extension.svg";
import { ReactComponent as IcPieChart } from "../assets/icons/ic-pie-chart.svg";
import { ReactComponent as IcFreeBreakfast } from "../assets/icons/ic-free-breakfast.svg";
import { ReactComponent as IcSettings } from "../assets/icons/ic-settings.svg";
import { ReactComponent as IcLabs } from "../assets/icons/ic-labs.svg";

export default [
    {
        text:'News',
        icon:<IcChromeReader />
    },
    {
        text:'Invitations',
        icon:<IcCollectReviews />,
        submenu:[{
            text:'Starred',
            icon:<IcLabs />
        }],
        isOpen:false
    },
    {
        text:'Reviews',
        icon:<IcManageReviews />,
        submenu:[{
            text:'Starred',
            icon:<IcLabs />
        }],
        isOpen:false
    },
    {
        text:'Show reviews',
        icon:<IcShowReviews />,
        submenu:[{
            text:'Starred',
            icon:<IcLabs />
        }],
        isOpen:false
    },
    {
        text:'Apps & Integrations',
        icon:<IcExtension />,
        submenu:[{
            text:'Starred',
            icon:<IcLabs />
        }],
        isOpen:false
    },
    {
        text:'Analytics',
        icon:<IcPieChart />,
        submenu:[{
            text:'Starred',
            icon:<IcLabs />
        }],
        isOpen:false
    },
    {
        text:'Tips and Ideas',
        icon:<IcFreeBreakfast />
    },
    {
        text:'Settings',
        icon:<IcSettings/>,
        submenu:[{
            text:'Starred',
            icon:<IcLabs />
        }],
        isOpen:false
    },
    {
        text:'Labs',
        icon:<IcLabs />,
        submenu:[{
            text:'Starred',
            icon:<IcLabs />
        }],
        isOpen:false
    },
] 