import Container from "@components/Container/Container";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  MdCheck,
  MdChevronLeft,
  MdDownload,
  MdInfo,
  MdOutlineComputer,
} from "react-icons/md";

const AssessmentID = () => {
  const [selectedAns, setSelectedAns] = useState<any>({
    one: false,
    two: false,
    three: false,
    four: false,
  });
  const [question, setQuestion] = useState(1);
  const [complete, setComplete] = useState(false);
  const router = useRouter();
  const assessmentID = router.query.id;
  const options = [1, 2, 3, 4];

  return (
    <Container>
      <div className="flex flex-col items-center lg:w-[80%] w-full">
        <div className="">
          <div className="flex justify-between mb-6">
            <h2 className="font-bold text-xl">Assessment {assessmentID}</h2>
            <Link
              href="/assessments"
              className="rounded-md h-7 w-fit px-4 bg-primary text-white flex items-center"
            >
              <MdChevronLeft className="mr-2" />
              Back
            </Link>
          </div>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugit
            laudantium natus aspernatur veritatis amet quisquam libero totam
            illo inventore saepe voluptates ex aliquam commodi minus modi,
            placeat quibusdam? Amet ullam exercitationem ducimus suscipit
            delectus pariatur molestias, deleniti, sunt ut accusamus saepe,
            veniam nisi sed totam beatae recusandae? Nisi, assumenda.
          </p>
        </div>
        {!complete && (
          <div className="flex flex-col mt-8 items-center justify-between">
            <div className="flex flex-wrap justify-between">
              <div className="flex flex-col justify-between flex-1">
                <h3 className="font-bold">Question {question} / 3</h3>
                <p className="flex-1 min-w-[300px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                  sunt velit corporis voluptatem dolore inventore exercitationem
                  omnis nemo asperiores dolor.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-evenly flex-1">
                {options.map((option, index) => (
                  <div
                    className={`flex flex-col items-center lg:w-[220px] w-[150px] min-h-[160px] rounded-lg border border-slate-300 px-4 py-2 mr-4 my-4 hover:shadow-xl hover:bg-primary hover:bg-opacity-10 cursor-pointer ${
                      selectedAns[option] &&
                      "bg-primary bg-opacity-10 border border-secondary"
                    }`}
                    key={index}
                    onClick={() =>
                      setSelectedAns({
                        ...selectedAns,
                        [option]: !selectedAns[option],
                      })
                    }
                  >
                    <div className="flex justify-between">
                      <h3 className="font-bold">Answer {option}</h3>
                    </div>
                    <MdOutlineComputer className="flex-1 text-8xl" />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap w-full justify-between mb-2">
              <div className="flex items-center rounded-md border border-slate-200 w-fit px-8 py-1 text-sm">
                <MdInfo className="mr-2 text-blue-400" />
                <span className="text-slate-400">
                  Please read through the question and pick all answers that
                  apply
                </span>
              </div>{" "}
              <button
                className={`${
                  question === 3 ? "bg-primary" : "bg-secondary"
                } rounded-full px-8 lg:w-fit lg:py-0 py-2 w-full text-white lg:mt-0 mt-4 ${
                  complete && "hidden"
                } `}
                onClick={() =>
                  question < 3
                    ? setQuestion((prev) => prev + 1)
                    : setComplete(true)
                }
              >
                {question === 3 ? "Finish" : "Next"}
              </button>
            </div>{" "}
          </div>
        )}

        {complete && (
          <div className="flex flex-col items-center justify-center flex-1 mt-10 border p-4 rounded-md bg-primary bg-opacity-5">
            <p className="font-semibold mb-4">
              You have completed assessment {assessmentID}. Click below to get a
              report.
            </p>
            <div className="flex items-center justify-center rounded-full bg-green-400 h-12 w-12">
              <MdCheck className="text-white text-4xl" />
            </div>
            <h4 className="font-bold mt-2">
              Assessment {assessmentID} completed!!
            </h4>
            <button className="flex items-center rounded-full px-4 text-sm text-white bg-primary mt-6 h-8">
              <MdDownload className="mr-2" /> Download Report
            </button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default AssessmentID;
