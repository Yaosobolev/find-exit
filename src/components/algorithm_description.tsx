import { AlgorithmDescriptionProps } from "./props/algorithm_description_props";

export const AlgorithmDescription = (props: AlgorithmDescriptionProps) => {
  let description = "";

  switch (props.algorithm) {
    case "A*":
      description = "это алгоритм - A*";
      break;

    default:
      description = "Выберите алгоритм";
      break;
  }

  return (
    <div className="text-xl text-center mt-8 mb-2 mx-3">
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
    </div>
  );
};
