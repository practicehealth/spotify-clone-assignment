import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
const FooterLinks = ({ options, heading }: any) => {
  return (
    <div>
      <p className="font-bold cursor-pointer text-white">{heading}</p>
      <ul>
        {options.map((item: any) => (
          <li key={item.title}>
            <p className="text-[#b3b3b3] hover:text-white hover:underline cursor-pointer mt-1.5 font-semibold">
              {item.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const linkOptions1 = [
    { title: "About", link: "#" },
    { title: "Jobs", link: "#" },
    { title: "For the Record", link: "#" },
  ];
  const linkOptions2 = [
    { title: "For Artists", link: "#" },
    { title: "Developers", link: "#" },
    { title: "Advertising", link: "#" },
    { title: "Investors", link: "#" },
    { title: "Vendors", link: "#" },
  ];
  const linkOptions3 = [
    { title: "Support", link: "#" },
    { title: "Free Mobile App", link: "#" },
  ];
  const socials = [
    {
      icon: <FaInstagram className="text-white rounded-full  w-5 h-5" />,
      link: "#",
    },
    {
      icon: <FaTwitter className="text-white rounded-full  w-5 h-5" />,
      link: "#",
    },
    {
      icon: <MdFacebook className="text-white rounded-full  w-5 h-5" />,
      link: "#",
    },
  ];
  return (
    <div>
      <section className="flex items-start justify-between flex-wrap p-8 mt-14 mb-4">
        <div className="flex items-start gap-28 flex-wrap">
          <FooterLinks heading={"Company"} options={linkOptions1} />
          <FooterLinks heading={"Communities"} options={linkOptions2} />
          <FooterLinks heading={"Useful links"} options={linkOptions3} />
        </div>
        <div>
          <ul className="flex items-start gap-5 flex-wrap">
            {socials.map((item, id) => (
              <li
                key={id}
                className="bg-[#242424] hover:bg-[#444444] rounded-full p-3"
              >
                <a href={item.link}>{item.icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <hr className="mx-10 border-none h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      <section>
        <p className="h-[180px] px-8 pt-10 text-[#b3b3b3] text-sm font-semibold">
          © 2024 Spotify AB
        </p>
      </section>
    </div>
  );
};

export default Footer;
