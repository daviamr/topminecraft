import { BreadcrumbVotar } from "../_components/breadcrumb";
import Image from "next/image";
import ButtonLike from "../_components/button-like";
import FormUsername from "../_components/form-username";
import TableListVotes from "../_components/table-list-votes";

// interface VotePageProp {
//   params: {
//     id: string;
//   }
// }

export default async function Page({ params }: {params: {id: string}}) {
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
          <BreadcrumbVotar name={params.id} key={params.id} />
        </div>

        <div className="w-full py-2 border-b-1 border-neutral-400 mt-4">
          <h1 className="text-3xl font-extralight">
            {params.id}
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
