import { useEffect, useState } from "react";

interface People {
  name: string;
}

const FetchItems = () => {
  const [list, setList] = useState<People[]>([]);

  const fetchData = async () => {
    const res = await fetch(`https://swapi.dev/api/people`);
    const data = await res.json();

    setList(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ul style={{ textAlign: "left" }}>
      {list.map((post: any) => (
        <li key={post.name}>{post.name}</li>
      ))}
    </ul>
  );
};

export default FetchItems;
