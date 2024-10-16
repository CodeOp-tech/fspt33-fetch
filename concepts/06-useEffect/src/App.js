import axios from "axios";
import { useEffect, useState } from "react";

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          "https://api.github.com/users/surajverma2587"
        );

        setData(response.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Oops something went wrong</div>}
      {data && <div>Data received</div>}
    </div>
  );
};
