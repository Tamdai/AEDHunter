import { useState } from "react";
import {
  AiOutlineDownCircle,
  AiOutlineCloudUpload,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import CheckboxItem from "./components/CheckboxItem";
import RadioItem from "./components/RadioItem";
import { TbExternalLink } from "react-icons/tb";
import { TfiMapAlt } from "react-icons/tfi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { locationAtom, positionAtom } from "./atom";

function Homepage() {
  // const [position, setPosition] = useState<string[]>([]);
  const [position, setPosition] = useRecoilState<string[]>(positionAtom);
  const [update, setUpdate] = useState<string>("Anytime");
  // const [location, setLocation] = useState<string[]>([]);
  const [location, setLocation] = useRecoilState<string[]>(locationAtom);
  const [imgNumber, setImgNumber] = useState<number>(5);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tempLocation, setTempLocation] = useState<string>("");

  const navigate = useNavigate();

  const handleLoadData = () => {
    if (location.length <= 0 && position.length <= 0) {
      Swal.fire({
        title: "Error!",
        text: "Please input Location or Position",
        icon: "error",
        confirmButtonText: "OK",
      });
    } else {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        navigate("/result");
      }, 3000);
    }
  };

  const addPosition = (label: string) => {
    if (position.length < 3) {
      if (position.includes(label)) {
        const newPosition = position.filter((item) => item !== label.trim());
        setPosition([...newPosition]);
      } else {
        setPosition([...position, label.trim()]);
      }
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please select less than 3 position",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleAddLocation = () => {
    if (location.length < 3) {
      if (
        !location.includes(tempLocation.trim()) &&
        tempLocation.trim() !== ""
      ) {
        setLocation([...location, tempLocation.trim()]);
      }
      setTempLocation("");
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please add less than 3 location",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleImage = (value: number) => {
    setImgNumber(value);
  };

  return (
    <>
      <div className="container">
        <div className="flex flex-col md:flex-row gap-7">
          <div className="w-full sm:w-8/12">
            <div className="flex flex-col">
              <div className="border-b-2 border-b-red1 mx-auto sm:mx-0">
                <img
                  src="/logo.png"
                  alt="logo"
                  className="w-[200px] h-[72px] my-5"
                />
              </div>
              <div className="flex flex-col sm:grid sm:grid-cols-2 gap-x-4 gap-y-8 my-5">
                <div className="text-center">
                  <div className="dropdown">
                    <label tabIndex={0} className="btn m-1 bg-white w-[300px]">
                      Position <AiOutlineDownCircle size={20} />
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <CheckboxItem
                        label="ภายในอาคาร"
                        onChange={addPosition}
                        isDisable={position.length < 3 ? false : true}
                      />
                      <CheckboxItem
                        label="นอกอาคาร"
                        onChange={addPosition}
                        isDisable={position.length < 3 ? false : true}
                      />
                      <CheckboxItem
                        label="ห้องประชุม"
                        onChange={addPosition}
                        isDisable={position.length < 3 ? false : true}
                      />
                      <CheckboxItem
                        label="ใต้ตึก"
                        onChange={addPosition}
                        isDisable={position.length < 3 ? false : true}
                      />
                      <CheckboxItem
                        label="หน้าห้อง"
                        onChange={addPosition}
                        isDisable={position.length < 3 ? false : true}
                      />
                      <CheckboxItem
                        label="ประชาสัมพันธ์"
                        onChange={addPosition}
                        isDisable={position.length < 3 ? false : true}
                      />
                      <CheckboxItem
                        label="เค้าเตอร์"
                        onChange={addPosition}
                        isDisable={position.length < 3 ? false : true}
                      />
                      <CheckboxItem
                        label="ฟิตเนส"
                        onChange={addPosition}
                        isDisable={position.length < 3 ? false : true}
                      />
                      <CheckboxItem
                        label="สนามบิน"
                        onChange={addPosition}
                        isDisable={position.length < 3 ? false : true}
                      />
                      <CheckboxItem
                        label="สถานีรถไฟ"
                        onChange={addPosition}
                        isDisable={position.length < 3 ? false : true}
                      />
                      <CheckboxItem
                        label="อื่นๆ"
                        onChange={addPosition}
                        isDisable={position.length < 3 ? false : true}
                      />
                    </ul>
                  </div>
                </div>
                <div className="text-center">
                  <div className="dropdown">
                    <label tabIndex={0} className="btn m-1 bg-white w-[300px]">
                      Last Update <AiOutlineDownCircle size={20} />
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <RadioItem
                        name="update"
                        label="Anytime"
                        value="Anytime"
                        update={update}
                        onChange={() => setUpdate("Anytime")}
                      />
                      <RadioItem
                        name="update"
                        label="Past 24 hr"
                        value="Past 24 hr"
                        update={update}
                        onChange={() => setUpdate("Past 24 hr")}
                      />
                      <RadioItem
                        name="update"
                        label="Past week"
                        value="Past week"
                        update={update}
                        onChange={() => setUpdate("Past week")}
                      />
                      <RadioItem
                        name="update"
                        label="Past months"
                        value="Past months"
                        update={update}
                        onChange={() => setUpdate("Past months")}
                      />
                      <RadioItem
                        name="update"
                        label="Past years"
                        value="Past years"
                        update={update}
                        onChange={() => setUpdate("Past years")}
                      />
                    </ul>
                  </div>
                </div>
                <div className="text-center mx-auto">
                  <div className="bg-white rounded-3xl my-2 w-[300px]">
                    <h4 className="text-center">Location</h4>
                    <div className="flex flex-row justify-start items-center mx-3">
                      <div className="rounded-3xl w-[200px] mx-auto py-3 relative">
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input w-full max-w-xs input-sm px-7"
                          onChange={(e) => setTempLocation(e.target.value)}
                          value={tempLocation}
                        />
                        <div className="absolute top-5 left-1">
                          <TbExternalLink />
                        </div>
                      </div>
                      <AiOutlineCloudUpload
                        size={30}
                        color="red"
                        className="hover:cursor-pointer"
                        onClick={handleAddLocation}
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="dropdown">
                    <label tabIndex={0} className="btn m-1 bg-white w-[300px]">
                      Display <AiOutlineDownCircle size={20} />
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <RadioItem
                        name="images"
                        label="5 Images"
                        value={5}
                        onChange={() => handleImage(5)}
                        update={imgNumber}
                      />
                      <RadioItem
                        name="images"
                        label="10 Images"
                        value={10}
                        onChange={() => handleImage(10)}
                        update={imgNumber}
                      />
                      <RadioItem
                        name="images"
                        label="15 Images"
                        value={15}
                        onChange={() => handleImage(15)}
                        update={imgNumber}
                      />
                      <RadioItem
                        name="images"
                        label="20 Images"
                        value={20}
                        onChange={() => handleImage(20)}
                        update={imgNumber}
                      />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-4/12">
            <div className="bg-red1 h-screen rounded-3xl px-5 py-10">
              <div className="flex flex-col">
                <div className="ml-auto">
                  <TfiMapAlt color="white" size={30} />
                </div>
                <div className="border-4 border-black rounded-xl px-3 py-5 my-5 text-white bg-red2">
                  <div className="my-2">
                    <div className="flex flex-row justify-between items-center">
                      <h3 className="text-xl my-1">Position</h3>
                      {position.length > 0 && (
                        <div
                          className="px-1 text-sm bg-white text-black rounded cursor-pointer hover:bg-white/50 flex justify-between items-center"
                          onClick={() => setPosition([])}
                        >
                          Reset <AiOutlineCloseCircle className="ml-2" />
                        </div>
                      )}
                    </div>
                    <ol className="list-decimal ml-7">
                      {position.length > 0 &&
                        position.map((item) => <li key={item}>{item}</li>)}
                    </ol>
                  </div>
                  <div className="my-2">
                    <div className="flex flex-row justify-between items-center">
                      <h3 className="text-xl my-1">Location</h3>
                      {location.length > 0 && (
                        <div
                          className="px-1 text-sm bg-white text-black rounded cursor-pointer hover:bg-white/50 flex justify-between items-center"
                          onClick={() => setLocation([])}
                        >
                          Reset <AiOutlineCloseCircle className="ml-2" />
                        </div>
                      )}
                    </div>
                    <ol className="list-decimal ml-7">
                      {location.length > 0 &&
                        location.map((item) => <li key={item}>{item}</li>)}
                    </ol>
                  </div>
                  <div className="my-2">
                    <div className="flex flex-row justify-between items-center">
                      <h3 className="text-xl my-1">Last Update</h3>
                      {update && update !== "Anytime" && (
                        <div
                          className="px-1 text-sm bg-white text-black rounded cursor-pointer hover:bg-white/50 flex justify-between items-center"
                          onClick={() => setUpdate("Anytime")}
                        >
                          Reset <AiOutlineCloseCircle className="ml-2" />
                        </div>
                      )}
                    </div>
                    {update}
                  </div>
                </div>
                <div className="my-3 text-right">
                  <button
                    className="bg-white text-red1 rounded-2xl px-5 py-1 uppercase font-bold text-xl hover:bg-white/50"
                    onClick={handleLoadData}
                  >
                    Click Here
                  </button>
                  <div className="text-[10px] text-white my-1">
                    Click after loading data.
                  </div>
                  {isLoading && (
                    <div className="box-loading z-50 text-center my-3">
                      <progress className="progress w-56 bg-white"></progress>
                      <div className="text-white">Loading...</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
