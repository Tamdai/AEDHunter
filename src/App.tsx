// import { useState } from "react";
import { AiOutlineDownCircle } from "react-icons/ai";

function App() {
  // const [position, setPosition] = useState<string[]>([]);
  // const [update, setUpdate] = useState<string[]>([]);
  // const [location, setLocation] = useState<string[]>([]);
  // const [imgNumber, setImgNumber] = useState<number>(5);

  return (
    <div className="container">
      <div className="flex flex-col md:flex-row gap-7">
        <div className="w-full md:w-8/12">
          <div className="flex flex-col">
            <div className="border-b-2 border-b-red1">
              <img
                src="/logo.png"
                alt="logo"
                className="w-[200px] h-[72px] my-5"
              />
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 my-5">
              <div className="text-center">
                <div className="dropdown">
                  <label tabIndex={0} className="btn m-1 bg-white w-[200px]">
                    Position <AiOutlineDownCircle size={20} />
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <div className="form-control p-0">
                        <label className="label cursor-pointer">
                          <input type="checkbox" className="checkbox mr-3" />
                          <span className="label-text">ภายในอาคาร</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-control p-0">
                        <label className="label cursor-pointer">
                          <input type="checkbox" className="checkbox mr-3" />
                          <span className="label-text">นอกอาคาร</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-control p-0">
                        <label className="label cursor-pointer">
                          <input type="checkbox" className="checkbox mr-3" />
                          <span className="label-text">ห้องประชุม</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-control p-0">
                        <label className="label cursor-pointer">
                          <input type="checkbox" className="checkbox mr-3" />
                          <span className="label-text">ใต้ตึก</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-control p-0">
                        <label className="label cursor-pointer">
                          <input type="checkbox" className="checkbox mr-3" />
                          <span className="label-text">หน้าห้อง</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-control p-0">
                        <label className="label cursor-pointer">
                          <input type="checkbox" className="checkbox mr-3" />
                          <span className="label-text">ห้องประชุม</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-control p-0">
                        <label className="label cursor-pointer">
                          <input type="checkbox" className="checkbox mr-3" />
                          <span className="label-text">ประชาสัมพันธ์</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-control p-0">
                        <label className="label cursor-pointer">
                          <input type="checkbox" className="checkbox mr-3" />
                          <span className="label-text">เค้าเตอร์</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-control p-0">
                        <label className="label cursor-pointer">
                          <input type="checkbox" className="checkbox mr-3" />
                          <span className="label-text">ฟิตเนส</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-control p-0">
                        <label className="label cursor-pointer">
                          <input type="checkbox" className="checkbox mr-3" />
                          <span className="label-text">สนามบิน</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-control p-0">
                        <label className="label cursor-pointer">
                          <input type="checkbox" className="checkbox mr-3" />
                          <span className="label-text">สถานีรถไฟ</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-control p-0">
                        <label className="label cursor-pointer">
                          <input type="checkbox" className="checkbox mr-3" />
                          <span className="label-text">อื่นๆ</span>
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <div className="dropdown">
                  <label tabIndex={0} className="btn m-1 bg-white w-[200px]">
                    Last Update <AiOutlineDownCircle size={20} />
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <div className="form-control p-0">
                        <label className="label cursor-pointer">
                          <input type="checkbox" className="checkbox mr-3" />
                          <span className="label-text">Anytime</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-control p-0">
                        <label className="label cursor-pointer">
                          <input type="checkbox" className="checkbox mr-3" />
                          <span className="label-text">Past 24 hr</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-control p-0">
                        <label className="label cursor-pointer">
                          <input type="checkbox" className="checkbox mr-3" />
                          <span className="label-text">Past week</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-control p-0">
                        <label className="label cursor-pointer">
                          <input type="checkbox" className="checkbox mr-3" />
                          <span className="label-text">Past months</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-control p-0">
                        <label className="label cursor-pointer">
                          <input type="checkbox" className="checkbox mr-3" />
                          <span className="label-text">Past years</span>
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center mx-auto">
                <div className="rounded-3xl w-[200px]">
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input w-full max-w-xs"
                  />
                </div>
              </div>
              <div className="text-center">
                <div className="dropdown">
                  <label tabIndex={0} className="btn m-1 bg-white w-[200px]">
                    Display <AiOutlineDownCircle size={20} />
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <div className="form-control p-0">
                        <label className="label cursor-pointer">
                          <input
                            type="radio"
                            name="images"
                            className="radio checked:bg-green-400  mr-3"
                            checked
                          />
                          <span className="label-text">5 Images</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-control p-0">
                        <label className="label cursor-pointer">
                          <input
                            type="radio"
                            name="images"
                            className="radio checked:bg-green-400  mr-3"
                            checked
                          />
                          <span className="label-text">10 Images</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-control p-0">
                        <label className="label cursor-pointer">
                          <input
                            type="radio"
                            name="images"
                            className="radio checked:bg-green-400  mr-3"
                            checked
                          />
                          <span className="label-text">15 Images</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-control p-0">
                        <label className="label cursor-pointer">
                          <input
                            type="radio"
                            name="images"
                            className="radio checked:bg-green-400  mr-3"
                            checked
                          />
                          <span className="label-text">20 Images</span>
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-4/12">
          <div className="bg-red1 h-screen rounded-3xl p-5">right</div>
        </div>
      </div>
    </div>
  );
}

export default App;
