import Container from "@components/Container/Container";
import { useAppStore } from "@stores/appStore";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Assessments = () => {
  const { alias } = useAppStore();
  const assessments = [1, 2, 3, 4, 5, 6];
  const router = useRouter();

  useEffect(() => {
    !alias && router.push("/#getting-started");
  }, []);

  return (
    <Container>
      <div className="lg:w-[70%] w-full">
        <div className="flex flex-col text-lg">
          <h2 className="mb-2 text-2xl">
            Hey <span className="font-bold">{alias}</span>
          </h2>
          <div className="flex flex-col lg:w-[80%] w-full">
            <p className="">
              Here are a few assessments curated to get a better understanding
              of your Organisation's cyber security.
            </p>
            <p className="mb-8">
              At the end of each assessment, you will get a report that has a
              score based on a standard criteria that can be used to make
              informed decisions
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-around lg:px-8 px-2">
          {assessments.map((assessment, index) => (
            <div
              className="flex flex-col lg:max-w-[270px] max-w-[160px] min-h-[160px] rounded-lg border border-slate-300 px-4 py-2 lg:mr-12 mr-1 my-4 hover:shadow-xl hover:bg-primary hover:bg-opacity-10"
              key={index}
            >
              <div className="flex flex-wrap justify-between">
                <h3 className="font-bold">Assessment {assessment}</h3>
                <span className="rounded-full px-4 bg-secondary text-primary text-xs flex items-center bg-opacity-60">
                  {assessment * 4} mins
                </span>
              </div>{" "}
              <p className="flex-1 py-2">
                More information about assessment {assessment} and primary CTA
              </p>
              <div className="flex items-center justify-center w-full">
                <Link
                  href={`/assessments/${assessment}`}
                  className="flex items-center rounded-md bg-secondary w-fit h-8 px-2 text-white hover:bg-primary text-xs"
                >
                  Take Assessment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Assessments;
