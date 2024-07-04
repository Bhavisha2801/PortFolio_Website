import Slider from "react-slick";
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiNextdotjs } from "react-icons/si";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function CardHoverEffectDemo() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="md:px-40 lg:px-40 px-4 scroll-pb-5 align-middle items-center justify-center" id="skills">
      <div className="container px-5 py-2 mx-auto">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-1/2 w-full lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Skills
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500"></p>
        </div>
        <Slider {...settings} className="px-10">
          {projects.map((project, index) => (
            <div key={index} className="p-4">
              <div className="m-4 text-center p-4 bg-gray-800 rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105 hover:shadow-lg hover:animate-hover-bounce">
                <div className="text-4xl text-indigo-500 hover:text-indigo-700 mb-4">
                  {project.icon}
                </div>
                <div className="mt-2 text-lg font-medium text-white">
                  {project.title}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export const projects = [
  {
    title: "HTML",
    icon: <FaHtml5 />,
  },
  {
    title: "CSS",
    icon: <FaCss3 />,
  },
  {
    title: "React.Js",
    icon: <FaReact />,
  },
  {
    title: "Next.Js",
    icon: <SiNextdotjs />,
  },
  {
    title: "Node.Js",
    icon: <FaNodeJs />,
  },
  {
    title: "ExpressJs",
    icon: <SiExpress />,
  },
  {
    title: "MongoDB",
    icon: <SiMongodb />,
  },
];
