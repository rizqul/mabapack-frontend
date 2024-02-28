import { Stack, Image } from "@mantine/core";
import Home from "/images/home-image.jpg";

const PublicHomePage = () => {
    return (
        <>
            <Stack>
                <Image src={Home}></Image>
            </Stack>
        </>
    );
};
export default PublicHomePage;
