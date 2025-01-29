import {
  Link,
  useLoaderData,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { getBlog } from "../services/apiRestaurant";
import sleep from "sleep-promise";
import CommentForm from "../features/blogform/CommentForm";
import Alert from "../features/user/Alert";
import { useState, useEffect, useRef } from "react";
import { formatNumber } from "../utils/helpers";

function BlogDetail() {
  const blog = useLoaderData();
  const { id } = useParams();
  const blogDetail = blog.find((x) => Number(x.id) === Number(id));
  const newText = blog.slice(0, 5);
  const [alert, setAlert] = useOutletContext();
  
  return (
    <div className="relative flex flex-col items-center ipadpro:mr-10 ipadpro:flex-row ipadpro:gap-20">
      {alert && <Alert setAlert={setAlert} />}
      <div
        
        className={`my-4 w-[85%] ipadpro:w-[60%] ${alert ? "blur-sm" : ""}`}
      >
        <div className="relative">
          <img
            alt={blogDetail.title}
            className="ipadpro:h-[500px] ipadpro:w-[80%]"
            src={blogDetail.image}
          />
          <div className="absolute -right-3 top-7 h-12 w-12 content-center bg-[#ffff] text-center text-amber-700 ring-2 ring-amber-700 lgdesktop:h-16 lgdesktop:w-16 lgdesktop:text-xl">
            {formatNumber(blogDetail.date)} آبان
          </div>
        </div>
        <h1 className="my-3 font-vaziri text-lg lgdesktop:text-2xl">
          {blogDetail.title}
        </h1>
        <p className="font-vaziri leading-7 lgdesktop:text-xl lgdesktop:leading-10">
          {blogDetail.text}
        </p>
        <CommentForm setAlert={setAlert} />
      </div>
      <div className="absolute left-[38%] top-[1%] h-[98%] w-[1px] bg-[#ccc] max-ipadpro:hidden"></div>
      <div
        className={`w-[85%] ipadpro:sticky ipadpro:top-3 ipadpro:ml-0 ipadpro:w-[30%] ipadpro:self-start ${alert ? "blur-sm" : ""}`}
      >
        <h1 className="font-vaziri text-lg lgdesktop:text-2xl">
          {" "}
          نوشته های تازه{" "}
        </h1>
        <div className="w-[15%] border-b-[5px]"></div>
        <div className="mt-4 flex flex-col divide-y-[1px] divide-stone-300 lgdesktop:text-xl">
          {newText.map((x) => (
            <Link to={`/blog/${x.id}`} key={x.id}>
              <h3 className="h-10 pt-1 text-base text-amber-800 hover:text-amber-600">
                {x.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function loader() {
  const blog = await getBlog();
  await sleep(500);
  return blog;
}

export default BlogDetail;
