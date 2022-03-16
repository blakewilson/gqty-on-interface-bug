import { useQuery } from "../gqty";

export default function Page() {
  let searchNodes = useQuery().contentNodes({
    where: { search: "Sample page" },
  })?.nodes;

  return (
    <>
      <h1>Search Results</h1>

      {searchNodes?.map((node) => {
        return (
          <div key={node?.id ?? 0}>{node?.$on?.NodeWithTitle?.title()}</div>
        );
      })}
    </>
  );
}
