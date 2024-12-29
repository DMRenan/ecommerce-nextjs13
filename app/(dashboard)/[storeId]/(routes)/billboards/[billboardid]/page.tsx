import prismadb from "@/lib/prismadb";
import { BillboardForm } from "@/app/(dashboard)/[storeId]/(routes)/billboards/[billboardid]/components/billboard-form";

const BillboardPage = async ({
  params,
}: {
  params: { billboardId?: string };
}) => {
  const billboard = params.billboardId
    ? await prismadb.billboard.findUnique({
        where: {
          id: params.billboardId,
        },
      })
    : null;

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={billboard} />
      </div>
    </div>
  );
};

export default BillboardPage;
