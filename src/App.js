import Parent from "./parent_to_child/Parent";
import Parent2 from "./child_to_parent/Parent2";
import Parent3 from "./sibling_to_sibling/Parent3";
import Parent4 from "./parent_to_grandchild/Parent4";

export default function App() {
  return (
    <>
      <Parent />
      <Parent2 />
      <Parent3 />
      <Parent4 />
    </>
  );
}
