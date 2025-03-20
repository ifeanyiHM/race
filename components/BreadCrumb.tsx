import Link from "next/link";
import { FaAnglesRight } from "react-icons/fa6";
import { countries } from "../utils/constant";
import { capitalizeWord, formattedItem } from "../utils/FormatString";

function BreadCrumb() {
  return (
    <section className="text-[#333333] text-sm px-2 md:px-0 md:w-[95%] lg:w-[93%] mx-auto">
      <ul className="flex items-center space-x-2 font-medium">
        {countries.map((item, index) => (
          <li key={index} className="flex items-center">
            <Link href={formattedItem(item)} className="hover:text-blue-600">
              {`Study in ${capitalizeWord(item)}`}
            </Link>
            {index < countries.length - 1 && (
              <span className="mx-2">
                <FaAnglesRight />
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BreadCrumb;
