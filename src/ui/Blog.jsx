import sleep from "sleep-promise";
import { getBlog } from "../services/apiRestaurant";
import { Link, useLoaderData } from "react-router-dom";
import { number } from "yup";
import { formatNumber } from "../utils/helpers";

function Blog() {
  const blog = useLoaderData();

  return (
    <div>
      <div className="ipadmini:flex ipadmini:justify-center">
        <div className="ipadpro:flex ipadpro:w-[830px] ipadpro:flex-wrap ipadpro:gap-10 desktop:w-[1020px] desktop:gap-14 lgdesktop:w-[1320px]">
          {blog.map((x) => (
            <div className="mt-7 flex flex-col items-center">
              <div className="relative w-[280px] tablet:w-[500px] ipadpro:w-[250px] desktop:w-[300px] lgdesktop:w-[400px]">
                <img alt={x.title} src={x.image} />
                <div className="absolute -right-3 top-7 h-12 w-12 content-center bg-[#ffff] text-center text-amber-700 ring-2 ring-amber-700 lgdesktop:h-16 lgdesktop:w-16 lgdesktop:text-xl">
                  {formatNumber(x.date)} آبان
                </div>
              </div>
              <div className="mt-4 w-[280px] tablet:w-[500px] ipadpro:w-[250px] desktop:w-[300px] lgdesktop:w-[400px] lgdesktop:text-2xl">
                <Link className="hover:text-amber-800" to={`/blog/${x.id}`}>
                  {" "}
                  <h1 className="font-vaziri">{x.title}</h1>
                </Link>
                <p className="mt-4">{x.text.slice(0, 100)}...</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-10 mt-10 flex justify-center gap-4 lgdesktop:gap-7">
        {blog.map((x) => (
          <span
            className={`h-5 w-5 rounded-full text-center font-vaziri ring-2 ring-black hover:bg-[#D3AC67] hover:text-[#ffff] lgdesktop:h-8 lgdesktop:w-8 lgdesktop:text-xl ${blog.indexOf(x) === 0 ? "bg-[#D3AC67] text-[#ffff]" : ""} `}
          >
            {formatNumber(blog.indexOf(x) + 1)}
          </span>
        ))}
      </div>
    </div>
  );
}

export async function loader() {
  const blog = await getBlog();
  await sleep(500);
  return blog;
}

export default Blog;
