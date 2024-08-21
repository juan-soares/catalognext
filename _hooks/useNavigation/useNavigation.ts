import { useRouter } from "next/navigation";

export const useNavigation = () => {
  const router = useRouter();

  const backToHomePage = () => {
    router.push("/");
  };

  return { backToHomePage };
};
