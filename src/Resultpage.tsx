import { useEffect, useState } from "react";
import { TfiMapAlt } from "react-icons/tfi";
import { useRecoilState } from "recoil";
import { locationAtom, positionAtom } from "./atom";
import { useNavigate } from "react-router-dom";
import { FiUpload } from "react-icons/fi";
import { AiOutlineCloseCircle, AiOutlinePicture } from "react-icons/ai";
import { GrDocumentCsv } from "react-icons/gr";

function Resultpage() {
  // const positions = useRecoilValue(positionAtom);
  // const locations = useRecoilValue(locationAtom);
  const [positions, setPositions] = useRecoilState<string[]>(positionAtom);
  const [locations, setLocations] = useRecoilState<string[]>(locationAtom);
  const [mixKeyword, setMixKeyword] = useState<string[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("positions: ", positions);
    console.log("positions: ", positions.length);
    console.log("locations: ", locations);
    console.log("locations: ", locations.length);

    if (positions.length > 0 && locations.length > 0) {
      const data: string[] = [];

      positions.map((p) => locations.map((l) => data.push(`${p}/${l}`)));

      setMixKeyword([...data]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container">
        <div className="flex flex-col md:flex-row gap-7">
          <div className="w-full md:w-8/12">
            <div className="flex flex-col">
              <div
                className="border-b-2 border-b-red1 cursor-pointer"
                onClick={() => navigate("/")}
              >
                <img
                  src="/logo.png"
                  alt="logo"
                  className="w-[200px] h-[72px] my-5"
                />
              </div>
              <div className="flex flex-col sm:grid sm:grid-cols-2 gap-x-4 gap-y-8 my-5">
                <div className="text-center mx-auto sm:mx-0">
                  <button className="text-red1 font-bold text-lg bg-white rounded-2xl px-10 py-2 flex justify-center items-center">
                    <div className="mr-3">Export File.</div>
                    <FiUpload />
                  </button>
                  <div className="flex flex-row items-center gap-2 mt-2">
                    <div className="text-sm">Click Export Data</div>
                    <GrDocumentCsv size={20} />
                    <AiOutlinePicture size={20} />
                  </div>
                </div>
                <div className="text-center mx-auto sm:mx-0">
                  <button
                    className="text-red1 font-bold text-lg bg-white rounded-2xl px-10 py-2 flex justify-center items-center cursor:pointer"
                    onClick={() => {
                      setPositions([]);
                      setLocations([]);
                      navigate("/");
                    }}
                  >
                    <div className="mr-3">Cancel</div>
                    <AiOutlineCloseCircle />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-4/12">
            <div className="bg-red1 h-screen rounded-3xl px-5 py-10">
              <div className="flex flex-col">
                <div className="ml-auto">
                  <TfiMapAlt color="white" size={30} />
                </div>
                <div className="border-4 border-black rounded-xl px-3 py-5 my-5 text-white bg-[#b73936]">
                  <div className="my-2">
                    <h3 className="text-xl my-1 text-black">Word matching</h3>
                    <ul className="list-disc ml-7">
                      {mixKeyword.length > 0 &&
                        mixKeyword.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                    </ul>
                    <div className="flex flex-row items-center justify-start py-2 gap-3">
                      <h3 className="text-xl my-1 text-black">Best Accuracy</h3>
                      <div>%</div>
                    </div>
                    <div className="flex flex-row items-center justify-start py-2 gap-3">
                      <h3 className="text-xl my-1 text-black">
                        Total Accuracy
                      </h3>
                      <div>%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resultpage;
