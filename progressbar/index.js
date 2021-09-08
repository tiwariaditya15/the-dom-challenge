console.log(">>");
const btnSubmit = document.querySelector(".btn-submit");
const queue = [];
function run() {
  const bar = document.querySelector(".bar");

  const progressBar = setInterval(() => {
    if (bar.style.width === "100%") {
      bar.style.width = "";
      return clearInterval(progressBar);
    }

    if (bar.style.width.length > 0) {
      console.log(bar.style.width);
      return (bar.style.width =
        parseInt(bar.style.width[0], 10) * 10 + 10 + "%");
    }
    bar.style.width = "10%";
  }, 1000);
}

function handleRun() {
  queue.push(run);
  showProgress();
}

function showProgress() {
  queue.forEach((callback) => {
    callback();
    queue.shift();
  });
  console.log({ queue });
}
btnSubmit.addEventListener("click", handleRun);
