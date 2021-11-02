const urlInput = document.getElementById("url_input");
const submitButton = document.getElementById("submit original");
const resultArea = document.getElementById("new URL");
const statsInput = document.getElementById("stats input");
const showStatsButton = document.getElementById("submit to show stats");
const infoDiv = document.getElementById("info area");
const server = "http://localhost:3000";

const shortener = async () => {
  const urlToChange = urlInput.value;
  if (!urlToChange) return;
  const response = await axios.post(
    `${server}/shorten`,
    JSON.stringify(urlToChange)
  );
  const newId = response.data;
  urlInput.value = "";
  resultArea.innerText = `${server}/original/${newId}`;
};
submitButton.addEventListener("click", shortener);

const presentStats = async () => {
  const shortenedUrl = statsInput.value;
  if (!shortenedUrl) return;
  const dividedUrl = shortenedUrl.split("/");
  const uniqueHash = dividedUrl[dividedUrl.length - 1];
  const { data } = await axios.get(`${server}/statistic/${uniqueHash}`);
  infoDiv.innerText = `your shortened URL was created at ${data.creationDate} \n from ${data.URL}, \n and it was entered ${data.counter} times.`;
  infoDiv.classList.add("alert", "alert-success");
  setTimeout(() => {
    infoDiv.classList.remove("alert", "alert-success");
    infoDiv.innerText = "";
  }, 10000);
};

showStatsButton.addEventListener("click", presentStats);
