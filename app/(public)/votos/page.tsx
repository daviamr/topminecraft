import { BreadcrumbVotos } from "./_components/breadcrumb";

import Image from "next/image";
import ButtonLike from "./_components/button-like";
import FormUsername from "./_components/form-username";
import TableListVotes from "./_components/table-list-votes";

export default function Votos() {
  return (
    <>
      <div className="py-2 px-4">
        <div className="bg-neutral-400 w-full h-20 flex items-center justify-center">
          <span className="text-white">Anucie aqui</span>
        </div>

        <div className="w-full p-1 mt-2">
          <BreadcrumbVotos />
        </div>

        <div className="w-full py-2 border-b-1 border-neutral-400 mt-4">
          <h1 className="text-3xl text-neutral-800 font-extralight">
            Nome server
          </h1>
        </div>

        <div className="flex flex-col items-start gap-2 mt-4">
          <div className="bg-white rounded-sm py-4 px-2 flex flex-col gap-2">
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

        <div className="bg-neutral-400 w-full h-20 flex items-center justify-center mt-5">
          <span className="text-white">Anucie aqui</span>
        </div>
      </div>
    </>
  );
}
