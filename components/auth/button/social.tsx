"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { GOOGLE_AUTH_URL, GITHUB_AUTH_URL } from "@/constants/index";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Social = () => {
  const router = useRouter();

  const handleGoogleLogin = () => {
    router.push("/user_page"); // Chuyển hướng tới user_page sau khi đăng nhập với Google
  };

  const handleGithubLogin = () => {
    router.push("/user_page"); // Chuyển hướng tới user_page sau khi đăng nhập với Github
  };

  // const [error, setError] = useState<string | undefined>();
  // const [success, setSuccess] = useState<string | undefined>();
  // const [isPending, startTransition] = useTransition();

  // const onSubmit = (values: z.infer<typeof LoginSchema>) => {
  //   setError("");
  //   setSuccess("");

  //   startTransition(() => {
  //     login(values).then((data) => {
  //       if (data && data.error) {
  //         setError(data.error as string);
  //         if ("success" in data) {
  //           setSuccess(data.success as string);
  //         }
  //       } else {
  //         router.push("/auth/user_page");
  //       }
  //     });
  //   });
  // };

  return (
    <div className="flex items-center w-full gap-x-2">
      {/* <SessionProvider session={session}> */}
      <div className="w-1/2">
        <Link href={GOOGLE_AUTH_URL}>
          <Button
            size="lg"
            className="w-full"
            variant="outline"
            onClick={handleGoogleLogin}
          >
            <FcGoogle className="h-5 w-5" />
          </Button>
        </Link>
      </div>

      {/* </SessionProvider> */}
      <div className="w-1/2">
        <Link href={GITHUB_AUTH_URL}>
          <Button
            size="lg"
            className="w-full"
            variant="outline"
            onClick={handleGithubLogin}
          >
            <FaGithub className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
