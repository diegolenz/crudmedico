export interface NavigationOptions {
    toolbar?: ToolbarOptions;
    sidenav?: SidenavOptions;
    footer?: FooterOptions;
}

export interface FooterOptions {
    showFooter?: boolean;
    footerType?: "menu" | "prompt";
    footerPlaceholder?: string;
    onSend?: (value: string) => any;
}

export interface ToolbarOptions {
    showToolbar?: boolean;
    backgroundColor?: string;
    color?: string;
    leftButton?: ToolbarActionButton;
    rightButton?: ToolbarActionButton;
}

export interface SidenavOptions {
    showToolbar?: boolean;
    toolbarHeight?: number;
    toolbarColor?: string;
    width?: number;
    menuItens?: SidenavMenuItem[];
}

export interface ToolbarActionButton {
    icon: string;
    color: string;
    onClick(): any;
}

export interface SidenavMenuItem {
    icon?: string;
    label?: string;
    color?: string;
    iconColor?: string;
    link?: string;
    perms?: string | string[];
    subItens?: SidenavMenuItem[];
    open?: boolean;
    type?: string;
}
