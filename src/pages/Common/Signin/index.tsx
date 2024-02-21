import { Text } from "@mantine/core";
import Seo from "shared/components/Seo";

const PAGE_TITLE = "Sign in";
const SigninPage = () => {
    return (
        <>
            <Seo title={PAGE_TITLE} />
            <Text>this is sign in</Text>
        </>
    );
};

export default SigninPage;
