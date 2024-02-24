import { AppShell, Group, rem, Image, Button } from "@mantine/core";
import React, { PropsWithChildren } from "react";
import Logo from "/images/logo.svg";
import { HiOutlineUser } from "react-icons/hi";
import { COLORS } from "shared/utils/colors";

export interface IAppShellRoutes extends PropsWithChildren {
    children?: React.ReactNode;
}
const BaseAppShell = ({ children }: IAppShellRoutes) => {
    return (
        <AppShell className={"h-screen"} header={{ height: 60 }} m="lg">
            <AppShell.Header>
                <Group
                    className={"flex justify-between items-center px-20 py-5"}
                >
                    <Image src={Logo} />
                    <Group className={"flex gap-x-20"}>
                        <Button
                            className={"text-xl text-white"}
                            bg={COLORS.primary}
                        >
                            Beranda
                        </Button>
                        <Button
                            className={"text-xl text-white"}
                            bg={COLORS.primary}
                        >
                            Toko
                        </Button>
                        <Button
                            className={"text-xl text-white"}
                            bg={COLORS.primary}
                        >
                            Tentang
                        </Button>
                        <Button
                            className={"text-xl text-white"}
                            bg={COLORS.primary}
                        >
                            Artikel
                        </Button>
                    </Group>
                    <HiOutlineUser size={30} color={COLORS.white} />
                </Group>
            </AppShell.Header>

            <AppShell.Main pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}>
                {children}
            </AppShell.Main>
        </AppShell>
    );
};

export default BaseAppShell;
