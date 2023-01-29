import Footer from "@components/Footer/Footer";
import Link from "next/link";
import eventLogger from "@utils/utilities";
import heroImage from "@public/assets/net.png";
import cloudImage from "@public/assets/cloud.png";
import Image from "next/image";
import { useAppStore } from "@stores/appStore";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [username, setUsername] = useState<string>();
  const { setOrg, alias } = useAppStore();

  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setOrg({ alias: username });
    router.push("/assessments");
  };
  return (
    <div className="flex flex-col pt-[64px] items-center justify-center">
      <div className=" w-full lg:w-[80%] max-w-[1500px] flex flex-col justify-between lg:items-center max-h-[1200px] md:justify-start md:items-start lg:h-[calc(100vh-50px)] lg:min-h-fit md:min-h-fit md:h-[50vh]sm:min-h-[auto]">
        <div className="flex lg:flex-1 justify-between items-center lg:w-[100%]  md:w-full sm:w-[100vw] h-full md:h-[50vh] lg:px-1 p-6 sm:px-16">
          <div className="flex lg:flex-col lg:flex-1 flex-initial w-full items-center sm:justify-center justify-start">
            <div className=" lg:w-full min-h-fit flex flex-col items-start">
              <span
                className="text-transparent text-cyBlack
              md:text-[3.6rem] lg:text-[3.9rem] sm:text-5xl text-[2.4rem] font-bold lg:text-left md:leading-[5rem] md:tracking-wide lg:leading-[5.1rem] sm:leading-[4rem] leading-snug tracking-wide lg:tracking-normal"
              >
                Data Solutions <br />
                for{" "}
                <span className="font-bold text-transparent bg-secondary bg-clip-text">
                  Change{" "}
                </span>
                Makers
              </span>
              <p className="pt-4 lg:pr-16 text-zinc-700 font-[500] leading-8 tracking-normal lg:w-full max-w-[1700px] w-full md:w-full sm:w-full">
                We derive insights that allow you to reach the data decisions
                you need instantly. We make sharing your findings easy with
                attractive data reports and visuals designed just for your
                Audience.
              </p>
              <div className="flex my-6">
                <Link
                  href={"#getting-started"}
                  className=" text-white bg-primary text-sm h-10 w-56 flex items-center justify-center rounded-full font-semibold"
                  onClick={() =>
                    eventLogger({
                      name: "Getting Started",
                      details: {
                        action: "click",
                        meta: "Getting started from landing page",
                      },
                    })
                  }
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:flex md:hidden sm:hidden flex-1 lg:justify-end items-center md:justify-start h-full overflow-hidden">
            <div className="relative lg:min-h-[700px] lg:h-[30%] h-full w-[75%] lg:max-h-[100%] lg:max-w-[100%]">
              <Image src={heroImage} alt="Landing Image" fill />
            </div>
          </div>
        </div>
      </div>
      <div
        id="getting-started"
        className="flex flex-col min-h-[50vh] w-full lg:w-[80%] max-w-[1500px] px-8"
      >
        <h2 className="font-bold lg:text-4xl text-2xl text-center mb-2">
          Our mission is to bring <br /> Sustainability to Businesses
        </h2>

        <div className="flex flex-col py-4">
          <h3 className="font-bold text-xl ">
            What is <span className="text-secondary">CYMON</span>
          </h3>
          <div className="flex justify-between lg:flex-row flex-col">
            <div className="flex flex-col lg:w-[50%] w-full ">
              <p className="mt-4">
                Is a cybersecurity assessment tool to assist CSOs with a quick
                and easy means to identify strengths and weaknesses with an
                organizational cybersecurity approach, as well as provide
                resources for a personalized response and recommendation for
                improvement in existing policies.
              </p>

              {alias ? (
                <Link
                  href="/assessments"
                  className="bg-secondary rounded-full w-fit px-6 mt-4 h-9 text-white flex items-center justify-center"
                >
                  Assessments
                </Link>
              ) : (
                <form className="flex flex-col my-4" onSubmit={handleSubmit}>
                  <h4>Enter Organisation Name or Alias to proceed</h4>
                  <input
                    type="text"
                    required
                    placeholder="Organisation Name"
                    className="outline-none border-b-2 border-primary w-[250px] h-9 bg-transparent text-sm focus:text-lg mt-2 focus:border-secondary transition-all ease-in-out"
                    onChange={(e) => setUsername(e.target.value)}
                  />

                  <button
                    type="submit"
                    className="bg-secondary rounded-full w-[250px] mt-4 h-9 text-white"
                  >
                    Take Assessment
                  </button>
                </form>
              )}
            </div>

            <div className="lg:w-[50%] w-[100%] min-w-[300px] flex items-center justify-center">
              <div className="relative h-[100%] w-[40%]">
                <Image alt="Cloud Image" src={cloudImage} fill />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
