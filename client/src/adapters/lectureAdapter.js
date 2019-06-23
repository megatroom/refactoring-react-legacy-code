export const transformSessionToViewModel = session => ({
  id: session.id,
  name: session.title,
  summary: session.summary,
  actions: [{ label: "Assistir" }],
  isDisabled: false,
  posHighlight: false,
  posLabel: session.speaker
});

export const transformWorkshopToViewModel = workshop => ({
  id: workshop.id,
  name: workshop.description,
  summary: workshop.grade.map(g => g.title).join("; "),
  actions: [{ label: "Assistir" }],
  isDisabled: false,
  posHighlight: false,
  posLabel: workshop.teacher
});
