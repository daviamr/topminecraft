import Image from "next/image";
import { BreadcrumbVotar } from "../_components/breadcrumb";
import ButtonLike from "../_components/button-like";
import FormUsername from "../_components/form-username";
import TableListVotes from "../_components/table-list-votes";

export default async function Page({params}: {params: Promise<{host: string}>}) {

  const host = (await params).host;

  return (
    <>
      {/* anuncio */}
      <div className="w-full px-4 my-8">
        <div className="bg-neutral-400 h-[60px] flex items-center justify-center">
          <span className="text-white">Anucie aqui</span>
        </div>
      </div>

      <div className="p-4">

        <div className="w-full p-1">
          <BreadcrumbVotar name={host} key={host} />
        </div>

        <div className="w-full py-2 border-b-1 border-neutral-400 mt-4">
          <h1 className="text-3xl font-extralight">
            {host}
          </h1>
        </div>

        <div className="flex flex-col items-start gap-4 mt-4">
          <div className="bg-white dark:bg-[#262626] rounded-sm py-8 px-4 flex flex-col gap-2">
            <ButtonLike />
            <Image
              src="/complex.webp"
              alt="gif servidor"
              width={468}
              height={60}
            />
            <FormUsername />
          </div>
          <div className="mt-10 w-full">
            <TableListVotes />
          </div>
        </div>
      </div>

      {/* anuncio */}
      <div className="w-full px-4 mt-4">
        <div className="bg-neutral-400 h-[60px] flex items-center justify-center">
          <span className="text-white">Anucie aqui</span>
        </div>
      </div>
    </>
  );
}
