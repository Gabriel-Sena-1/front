import { Flex } from "@chakra-ui/layout";
import { Outlet, useNavigation } from "react-router-dom";
import LoadingLogo from "../assets/ufms-logo.png";

export function RootUnauthenticatedLayout() {
  const { state } = useNavigation();

  return (
    <Flex
      as="main"
      direction="column"
      minWidth="500px"
      style={{ backgroundColor: "#3498DB" }}
    >
      <Flex w="full" height={81} className="bg-white"></Flex>
      <Flex w="full" flex={1} className="min-w-screen min-h-screen">
        <Flex w="full" flex={1} className="w-full min-w-screen">
          {state === "loading" ? (
            <>
              <LoadingLogo />
            </>
          ) : (
            <Outlet />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
