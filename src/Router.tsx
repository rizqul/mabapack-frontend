import UserAppShell from "layouts/UserAppShell";
import SigninPage from "pages/Common/Signin";
import SignupPage from "pages/Common/Signup";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SIGNIN, SIGNUP, asAbsolutePath } from "shared/utils/route";

const Router = () => {
    const role = "";
    const isRoleSet = true;

    return (
        <BrowserRouter>
            <UserAppShell>
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
            </UserAppShell>
        </BrowserRouter>
    );
};

export default Router;
