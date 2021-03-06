const createHabitForm = $("#newHabit");
const typeInput = $("textarea#type");
const activityInput = $("textarea#activity");
const descriptionInput = $("textarea#description");
const frequencyInput = $("textarea#frequency");

// eslint-disable-next-line prefer-arrow-callback
createHabitForm.on("submit", function(event) {
  event.preventDefault();
  const newHabit = {
    type: typeInput.val().trim(),
    activity: activityInput.val().trim(),
    description: descriptionInput.val().trim(),
    frequency: frequencyInput.val().trim()
  };

  if (
    newHabit.type &&
    newHabit.activity &&
    newHabit.description &&
    newHabit.frequency
  ) {
    createNewHabit(newHabit);
  }
});

const createNewHabit = newHabit => {
  $.post("/api/create-habit", {
    habit: newHabit
  }).then(() => {
    location.replace("/checkin");
  });
}

$(".habit").on("click", function() {
  event.preventDefault();
  console.log("habit clicked");

  const id = $(this).data("id");

  $.post("/api/user/habit", {
    HabitId: id
  }).then(() => {
    // Reload the page to get the updated list
    window.location.replace("/checkin");
  });
});
