import { useParams } from "react-router-dom";

export function DetailCharacter() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>HELLO Spider MAN</h1>
      <label>
        Tecnologias
        <input list="techs" />
      </label>
      <datalist id="techs">
        <option value="HTML5" />
        <option value="HTML" />
        <option value="CSS3" />
        <option value="CSS" />
        <option value="REACT NATIVE" />
        <option value="node" />
        <option value="Next" />
        <option value="Nest" />
        <option value="Javascript" />
      </datalist>
    </div>
  );
}
