const apiUrl = "https://kanji-flash-backend-v2.onrender.com/api/kanji/random";

async function loadRandomKanji() {
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) throw new Error("Network response was not ok");
    const data = await res.json();
console.log("API Data:", data);

    // Update the UI with data
document.getElementById("kanji").textContent = data.symbol || data.kanji || "⛔";
    document.getElementById("meaning").textContent = `Meaning: ${data.meaning || "-"}`;
    document.getElementById("romaji").textContent = `Romaji: ${data.romaji || "-"}`;
    document.getElementById("kana").textContent = `Kana: ${data.kana || "-"}`;
    document.getElementById("hint").textContent = `Hint: ${data.hint || "-"}`;
    //document.getElementById("jlpt").textContent = `JLPT Level: ${data.jlpt || "-"}`;

    document.getElementById("learn-more").href = `https://kanji-flash-frontend.onrender.com`;
  } catch (error) {
    console.error("Failed to fetch random Kanji:", error);
    document.getElementById("kanji").textContent = "⚠️";
    document.getElementById("meaning").textContent = "Failed to load Kanji";
    document.getElementById("romaji").textContent = "";
    document.getElementById("kana").textContent = "";
    document.getElementById("hint").textContent = "";
    document.getElementById("jlpt").textContent = "";
  }
}

document.getElementById("next").addEventListener("click", loadRandomKanji);
loadRandomKanji();
