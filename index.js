const urlInput = document.getElementById("url_input");
const submitButton = document.getElementById("submit button");
const resultArea = document.getElementById("new URL");
const server = "http://localhost:3000";

const shortener = async () => {
  if (!urlInput.value) return;
  const response = await axios.get(`${server}/shorten/${urlInput.value}`);
  const newId = response.data;
  resultArea.innerText = `${server}/original/${newId}`;
};
submitButton.addEventListener("click", shortener);
