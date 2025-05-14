import React from "react";

const Footer = () => {
    return (
        <div className="fixed w-full bottom-0 h-7 gap-4 bg-transparent z-50 backdrop-blur-3xl border-t flex items-center justify-center text-foreground">
            Press
            <span className="text-xs tracking-widest opacity-60 px-1.5 py-0.2 rounded border-1 border-gray-400">
                ⌘J
            </span>
            to open the command menu
        </div>
    );
};

export default Footer;
