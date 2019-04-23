export const transformCourseToViewModel = ({
  id,
  status,
  image,
  name,
  summary,
  progress,
  price
}) => {
  const actions = [];
  const isDisabled = status !== "ACTIVE";
  let posHighlight = false;
  let posLabel;

  if (status === "ACTIVE") {
    if (progress && progress.length > 0) {
      const progressTotal = progress.length;
      const progressCount = progress.filter(p => p.status === "DONE").length;

      if (progressCount === progressTotal) {
        posLabel = "Concluído";
      } else if (progressCount === 0) {
        posLabel = "Não iniciado";
      } else {
        const progressPercent = Math.floor(
          (progressCount * 100) / progressTotal
        );
        posLabel = `Progresso: ${progressPercent}%`;
      }

      actions.push({
        label: progressCount === 0 ? "Começar" : "Continuar"
      });
    } else {
      posLabel = price ? `Preço: R$ ${price}` : "Grátis";
      posHighlight = true;

      actions.push({ label: "Saber mais" });
      actions.push(
        price
          ? { label: "Comprar", link: `/payment/course/${id}` }
          : { label: "Começar" }
      );
    }
  } else if (status === "CANCELED") {
    posLabel = "Cancelado";

    actions.push({ label: "Reativar" });
  } else {
    posLabel = "Em breve...";

    actions.push({ label: "Saber mais" });
  }

  return {
    id,
    image,
    name,
    summary,
    actions,
    isDisabled,
    posHighlight,
    posLabel
  };
};
