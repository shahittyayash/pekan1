document.addEventListener("DOMContentLoaded", () => {
  const tooltip = document.getElementById("event-tooltip");
  const eventDays = document.querySelectorAll(".event-day");

  eventDays.forEach(day => {
    // Detect event type
    const type = day.classList.contains("eid")
      ? "eid"
      : day.classList.contains("race")
      ? "race"
      : day.classList.contains("car")
      ? "car"
      : null;

    // Tooltip setup
    day.addEventListener("mouseenter", () => {
      const title = day.dataset.title || "Event";
      const desc = day.dataset.description || "";
      const location = day.dataset.location || "";

      tooltip.innerHTML = `
        <strong>${title}</strong><br>
        ${desc}<br>
        <em>${location}</em>
      `;
      tooltip.className = `tooltip ${type}`;
      tooltip.style.visibility = "visible";
      tooltip.style.opacity = "1";

      const rect = day.getBoundingClientRect();
      tooltip.style.top = `${rect.top + window.scrollY - 80}px`;
      tooltip.style.left = `${rect.left + rect.width / 2 - 100}px`;
    });

    day.addEventListener("mousemove", (e) => {
      tooltip.style.top = `${e.pageY - 100}px`;
      tooltip.style.left = `${e.pageX - 110}px`;
    });

    day.addEventListener("mouseleave", () => {
      tooltip.style.visibility = "hidden";
      tooltip.style.opacity = "0";
    });
  });
});
