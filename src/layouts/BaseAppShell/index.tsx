import { AppShell, Group, rem, Image } from "@mantine/core";
import React, { PropsWithChildren } from "react";
import Logo from "/images/logo.svg";
import { COLORS } from "shared/utils/colors";

export interface IAppShellRoutes extends PropsWithChildren {
    children?: React.ReactNode;
}
const BaseAppShell = ({ children }: IAppShellRoutes) => {
    return (
        <AppShell
            className={"h-screen"}
            bg={COLORS.primary}
            header={{ height: 60 }}
            m="lg"
        >
            <AppShell.Header
                bg={COLORS.primary}
                withBorder
                style={{ border: "1px solid black" }}
            >
                <Group className={"px-20 py-5"} h="100%">
                    <Image src={Logo}></Image>
                </Group>
            </AppShell.Header>

            <AppShell.Main pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}>
                {children}
            </AppShell.Main>
        </AppShell>
    );
};

export default BaseAppShell;
