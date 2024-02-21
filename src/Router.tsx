import BaseAppShell from "layouts/BaseAppShell";
import SigninPage from "pages/Common/Signin";
import SignupPage from "pages/Common/Signup";
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SIGNIN, SIGNUP, asAbsolutePath } from "shared/utils/route";

const Router = () => {
    const [role, setRole] = useState<string>("");
    const [isRoleSet, setIsRoleSet] = useState<boolean>(true);

    return (
        <BrowserRouter>
            <BaseAppShell>
                <Routes>
                    <Route path={SIGNIN} element={<SigninPage />} />
                    {isRoleSet && role === "" && (
                        <Route
                            index
                            element={<Navigate to={asAbsolutePath(SIGNIN)} />}
                        />
                    )}

                    {!isRoleSet && role !== "" && (
                        <Route path={SIGNUP} element={<SignupPage />} />
                    )}
                </Routes>
            </BaseAppShell>
        </BrowserRouter>
    );
};

export default Router;
