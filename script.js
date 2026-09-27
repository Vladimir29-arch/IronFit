const countElement = document.getElementById("workoutCount");

const addButton = document.getElementById("addWorkout");

const resetButton = document.getElementById("resetWorkout");


let count = Number(
  localStorage.getItem("ironfitWorkouts")
) || 0;


countElement.textContent = count;


addButton.addEventListener("click", () => {

  count++;

  localStorage.setItem(
    "ironfitWorkouts",
    count
  );

  countElement.textContent = count;

});


resetButton.addEventListener("click", () => {

  count = 0;

  localStorage.setItem(
    "ironfitWorkouts",
    count
  );

  countElement.textContent = count;

});