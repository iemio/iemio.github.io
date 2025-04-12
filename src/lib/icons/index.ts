import { IconType } from "react-icons";
import {
    RiHome9Fill,
    RiHome9Line,
    RiQuillPenFill,
    RiQuillPenLine,
    RiGithubLine,
    RiGithubFill,
    RiBookletLine,
    RiBookletFill,
} from "react-icons/ri";

import {
    IoAlbumsOutline,
    IoAlbums,
    IoChatboxOutline,
    IoChatbox,
} from "react-icons/io5";
import {
    TbLayoutNavbarExpandFilled,
    TbLayoutNavbarCollapseFilled,
} from "react-icons/tb";

export const Icons: Record<string, IconType> = {
    home: RiHome9Line,
    aHome: RiHome9Fill,
    blogs: RiQuillPenLine,
    aBlogs: RiQuillPenFill,
    github: RiGithubLine,
    aGithub: RiGithubFill,
    diary: RiBookletLine,
    aDiary: RiBookletFill,
    gallery: IoAlbumsOutline,
    aGallery: IoAlbums,
    message: IoChatboxOutline,
    aMessage: IoChatbox,
    mobileNavClose: TbLayoutNavbarCollapseFilled,
    mobileNavOpen: TbLayoutNavbarExpandFilled,
};

// a for active :)
