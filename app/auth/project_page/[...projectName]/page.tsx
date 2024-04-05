import { DialogDemo } from "@/components/auth/projectpage/create-link";
import UserProjectPage from "@/app/auth/project_page/user/page";
import { MenuList } from "@/app/auth/project_page/list/menu-list";

export default function Page() {
  <div className="min-h-screen w-full bg-gray-50">
    {/* HEADER  */}
    <UserProjectPage />
    {/* LINK  */}
    <div className="pt-12 flex h-36 items-center border-b border-gray-200 bg-white">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl text-gray-600">Links</h1>
          {/* UpgradePopupOpen  */}
          <DialogDemo />
        </div>
      </div>
    </div>
    {/* LIST  */}
    <MenuList />
  </div>;
}