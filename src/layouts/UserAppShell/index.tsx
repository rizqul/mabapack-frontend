import BaseAppShell from "layouts/BaseAppShell";
import { PropsWithChildren } from "react";

export interface IAppShellRoutes extends PropsWithChildren {
    children?: React.ReactNode;
}
const UserAppShell = ({ children }: IAppShellRoutes) => {
    return <BaseAppShell>{children}</BaseAppShell>;
};

export default UserAppShell;
