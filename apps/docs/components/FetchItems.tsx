import { useEffect, useState } from "react";

interface People {
  name: string;
}

const FetchItems = () => {
  const [list, setList] = useState<People[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`https://swapi.dev/api/people`);
      const data = await res.json();

      setList(data.results);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ul style={{ textAlign: "left" }}>
      {isLoading && <p>Loading...</p>}
      {list.map((post: any) => (
        <li key={post.name}>{post.name}</li>
      ))}
    </ul>
  );
};

export default FetchItems;
