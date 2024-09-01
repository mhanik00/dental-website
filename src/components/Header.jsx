import logo from "../assets/logo.png";
export default function Header() {
    return (
        <div className=" flex justify-between p-2 items-center  bg-amber-300">
            <div className="flex  p-4 items-center ">

                <img className="  h-16 text-amber-300" src={logo} alt="logo">
                </img>
                <h1 className="ml-2 text-2xl font-bold text-wrap">
                    EverSmile Dental
                </h1>

            </div>

            <div>

                <ul className=" flex gap-x-3  text-wrap  font-semibold text-xl items-center">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                    <li className=" text-nowrap bg-lime-500 px-3 py-2 rounded  rounded-full">Log In</li>
                </ul>

            </div>

        </div>
    )
}
