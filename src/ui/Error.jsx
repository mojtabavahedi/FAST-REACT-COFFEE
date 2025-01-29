import { useNavigate, useRouteError } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const error =useRouteError()

  return (
    <div >
      <h1>ظاهرا خطایی رخ داده است</h1>
      <p>{error.data|| error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; برگشت به عقب</button>
    </div>
  );
}

export default NotFound;
