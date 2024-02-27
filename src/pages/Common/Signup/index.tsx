import {
    Image,
    Group,
    Stack,
    Title,
    TextInput,
    Switch,
    Text,
    Button,
    Anchor,
} from "@mantine/core";
import Seo from "shared/components/Seo";
import Logo from "/images/logo.svg";
import Moto from "/images/moto.svg";
import {
    MdOutlineEmail,
    MdLockOutline,
    MdArrowForward,
    MdOutlinePhone,
} from "react-icons/md";
import { COLORS } from "shared/utils/colors";

const PAGE_TITLE = "Sign Up";
const SignupPage = () => {
    return (
        <>
            <Seo title={PAGE_TITLE} />
            <Group mt={40} mx={100} justify={"space-between"}>
                <Stack mt={60} align={"center"}>
                    <Image className={"w-80"} src={Logo}></Image>
                    <Image src={Moto}></Image>
                </Stack>
                <Stack align={"center"} gap={"lg"}>
                    <Title className={"font-xl text-center"} c={"white"}>
                        Sign up
                    </Title>
                    <TextInput
                        w={"100%"}
                        size={"xl"}
                        type={"email"}
                        leftSection={<MdOutlineEmail />}
                        placeholder={"abc@gmail.com"}
                    />
                    <TextInput
                        w={"100%"}
                        size={"xl"}
                        type={"number"}
                        leftSection={<MdOutlinePhone />}
                        placeholder={"Number Phone"}
                    />
                    <TextInput
                        w={"100%"}
                        size={"xl"}
                        type={"password"}
                        leftSection={<MdLockOutline />}
                        placeholder={"Your password"}
                    />
                    <Group w={400} justify={"space-between"}>
                        <Switch
                            size={"lg"}
                            color={COLORS.action}
                            c={"white"}
                            defaultChecked
                            label={"Remember me"}
                        />
                        <Anchor c={"white"} size={"lg"}>
                            Forgot Password?
                        </Anchor>
                    </Group>
                    <Stack align={"center"} mt={20}>
                        <Button
                            size={"lg"}
                            w={240}
                            bg={COLORS.action}
                            rightSection={
                                <MdArrowForward
                                    color={COLORS.white}
                                    className={"text-xl"}
                                />
                            }
                        >
                            Sign up
                        </Button>
                        <Group>
                            <Text c={"white"} size={"md"}>
                                Already have an account?
                            </Text>
                            <Anchor
                                className={"font-bold"}
                                c={"white"}
                                size={"md"}
                                href={"signin"}
                            >
                                Sign in
                            </Anchor>
                        </Group>
                    </Stack>
                </Stack>
            </Group>
        </>
    );
};

export default SignupPage;
