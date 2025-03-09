import BlurImage from "../../components/BlurImage";
import { albertSans } from "../font";
function page() {
  return (
    <div>
      {" "}
      <div className="relative pt-[47%] md:pt-[25%] w-full bg-fixed bg-cover bg-center md:bg-[left]">
        <BlurImage
          src={`/about-us.png`}
          alt="about us hero background"
          fill
          classname="object-cover"
        />
        <div className="w-full xl:w-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1
            className={`${albertSans.className} text-xl md:text-3xl lg:text-5xl min-[1440px]:text-6xl font-bold`}
          >
            About Us
          </h1>
        </div>
      </div>
      <div className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto">
        <div className="md:flex gap-8 items-center pt-14 pb-20">
          <div className="hidden md:flex gap-2 lg:gap-5 w-1/2 items-center">
            <div className="">
              <BlurImage
                src={`/about1.png`}
                alt="about us"
                width={358}
                height={548}
              />
            </div>
            <div className="flex flex-col gap-2 lg:gap-6">
              <BlurImage
                src={`/about2.png`}
                alt="about us"
                width={262}
                height={257}
              />
              <BlurImage
                src={`/about3.png`}
                alt="about us"
                width={262}
                height={257}
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl lg:text-3xl font-bold text-blue-600">
              Race Educational Services
            </h2>
            <p className="text-gray-700 leading-relaxed mt-4">
              is an agency that provides individuals with international
              admissions. We provide professional support and advice to those
              who want to study abroad.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We understand the difficulties that come with the admission
              process and aim to help every student that comes to us for our
              service. Whether it be choosing a course, an institution, starting
              an application, or simply understanding the requirements.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center py-0 md:py-14">
          <div className="md:w-1/2">
            <div className="">
              <BlurImage
                src={`/mission.png`}
                alt="about us"
                width={552}
                height={463}
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed mt-4">
              We strive to be the gateway for students worldwide, offering
              expert guidance, support, and resources to help you make informed
              decisions about studying abroad and prepare you for success in
              your chosen careers. 
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              To empower the dreams of international students by connecting you
              to higher education institutions that unlock doors to a brighter,
              globally connected future.
            </p>
          </div>
        </div>
        <div className="md:flex gap-8 items-center py-14">
          <div className="hidden md:block w-1/2">
            <div className="h-[550px] bg-cover flex items-center justify-center overflow-hidden">
              <BlurImage
                src={`/values.png`}
                alt="about us"
                width={552}
                height={686}
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
              Our Values
            </h2>
            <p className="text-gray-700 leading-relaxed mt-4">
              We uphold the highest standards of honesty and transparency in all
              our interactions, ensuring that students can trust us to guide
              them on their educational journey.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              To give the best service through professional conduct, attitude
              and behaviour and provide solutions in the most respectful and
              ethical manner We prioritize quality in every aspect of our
              services, ensuring that we connect students with reputable
              institutions that meet their academic and personal needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
