import { prepass, selectFields } from "gqty";
import { useQuery } from "../gqty";

export default function Page() {
  let searchNodes = useQuery().contentNodes({
    where: { search: "S" },
  })?.nodes;

  prepass(searchNodes, "$on.Page.title");

  let nodesWithSelectedFields = selectFields(searchNodes, [
    "databaseId",
    "uri",
    "date",
    "$on.Page.title",
  ]);

  return (
    <>
      <h1>Search Results</h1>

      {nodesWithSelectedFields?.map((node) => (
        <div key={node?.databaseId ?? 0}>{node?.$on?.Page?.title()}</div>
      ))}
    </>
  );
}
