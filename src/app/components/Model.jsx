import Link from "next/link";
const Model = ({ selectedProject }) => {
  return (
    <div>
      {/* Modal for displaying more details */}
      <dialog id="my_modal_4" className="modal bg-[#2c3036] ">
        {selectedProject &&
          <div className="modal-box rounded-xl max-w-5xl  p-10 w-full ">
            <h3 className="font-extrabold text-lg text-white ">
              {selectedProject.title}
            </h3>
            <pre className="py-4 w-[40%] text-[#ABB2BF]">
              {selectedProject.info.map((p, index) =>
                <li key={index}>
                  {p}
                </li>
              )}
            </pre>
            <h3 className="text-[#ABB2BF] ">
              {" "}<span className="text-white mr-2 font-bold">
                Technology :
              </span>
              React.js, Tailwind CSS, CSS, TMDB API, netlify
            </h3>
            <div className="flex gap-3 mt-3">
              <Link
                href={`${selectedProject.githubLink}`}
                className="text-blue-500 hover:text-blue-700 font-bold underline"
              >
                Github
              </Link>
              <Link
                href={`${selectedProject.liveLink}`}
                className="text-blue-500 hover:text-blue-700 font-bold underline"
              >
                Live
              </Link>
              <div className="modal-action ml-auto">
                <form method="dialog">
                  <button className="btn text-white hover:text-red-500">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </div>}
      </dialog>
    </div>
  );
};

export default Model;
