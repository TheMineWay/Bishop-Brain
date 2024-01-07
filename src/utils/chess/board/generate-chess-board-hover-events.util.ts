export const generateChessBoardHoverEvents = (
  boardCells: Record<string, HTMLDivElement | null>,
  indexCells: Record<string | number, HTMLDivElement | null>,
  options: {
    hoverClassName: string;
  }
) => {
  const ev = (elements: (HTMLDivElement | null)[], highlight: boolean) => {
    if (highlight) {
      for (const element of elements) {
        element?.classList.add(options.hoverClassName);
      }
    } else {
      for (const element of elements) {
        element?.classList.remove(options.hoverClassName);
      }
    }
  };

  const enterEvents: { [x: string]: () => void } = {};
  const leaveEvents: { [x: string]: () => void } = {};

  // Generate events
  for (const [key, element] of Object.entries(boardCells)) {
    if (!element) continue;

    const [row, cell] = key.split("");
    const [rowElement, cellElement] = [indexCells[row], indexCells[cell]];

    // Store events so they can be destroyed later
    enterEvents[`${row}${cell}`] = () => ev([rowElement, cellElement], true);
    leaveEvents[`${row}${cell}`] = () => ev([rowElement, cellElement], false);

    element.addEventListener("mouseenter", enterEvents[`${row}${cell}`]);
    element.addEventListener("mouseleave", leaveEvents[`${row}${cell}`]);
  }

  // Destroy events on derender
  return {
    destroyEvents: () => {
      for (const [key, element] of Object.entries(boardCells)) {
        if (!element) continue;

        const [row, cell] = key.split("");

        element.removeEventListener("mouseenter", enterEvents[`${row}${cell}`]);
        element.removeEventListener("mouseleave", leaveEvents[`${row}${cell}`]);
      }
    },
  };
};
