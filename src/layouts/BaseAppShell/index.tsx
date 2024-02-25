import { AppShell, Group, Image, Button } from "@mantine/core";
import React, { PropsWithChildren } from "react";
import Logo from "/images/logo.svg";
import { HiOutlineUser } from "react-icons/hi";
import { COLORS } from "shared/utils/colors";

export interface IAppShellRoutes extends PropsWithChildren {
    children?: React.ReactNode;
}
const BaseAppShell = ({ children }: IAppShellRoutes) => {
    return (
        <AppShell bg={COLORS.primary}>
            <Group
                h={100}
                className={"justify-between items-center px-20 py-5"}
                mb={"xl"}
            >
                <Image src={Logo} />
                <Group>
                    <Button size={"xl"} className={"text-white"}>
                        Beranda
                    </Button>
                    <Button size={"xl"} className={"text-white"}>
                        Toko
                    </Button>
                    <Button size={"xl"} className={"text-white"}>
                        Tentang
                    </Button>
                    <Button size={"xl"} className={"text-white"}>
                        Artikel
                    </Button>
                </Group>
                <HiOutlineUser size={36} color={COLORS.white} />
            </Group>
            {children}
        </AppShell>
    );
};

export default BaseAppShell;
