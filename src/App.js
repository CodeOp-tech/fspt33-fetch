import axios from "axios";
import { useEffect, useState } from "react";

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState();
  const [username, setUsername] = useState("surajverma2587");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}`
        );

        setIsError(false);
        setData(response.data);
      } catch (error) {
        setData();
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [username]);

  const handleClick = () => {
    setUsername("zoelaventhol");
  };

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Oops something went wrong</div>}
      {data && (
        <div>
          <button onClick={handleClick}>Zoe</button>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={data.avatar_url}
              className="card-img-top"
              alt={data.name}
            />
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <h6 className="card-text">{data.location}</h6>
              <p className="card-text">{data.bio}</p>
              <a href={data.html_url} className="btn btn-primary">
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
