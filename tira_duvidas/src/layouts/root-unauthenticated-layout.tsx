import { Flex } from "@chakra-ui/layout";
import { Outlet, useNavigation } from "react-router-dom";
import LoadingLogo from "../assets/ufms-logo.png";

export function RootUnauthenticatedLayout() {
  const { state } = useNavigation();

  return (
    <Flex
      as="main"
      minWidth="500px"
      className="min-h-screen min-w-screen text-zind-900 bg-gradient-to-t from-blue-600 to-violet-600"
    >
      <Flex w="full" flex={1} className="min-w-screen min-h-screen">
        <Flex w="full" flex={1} py={8} px={8} className="w-full min-w-screen">
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
