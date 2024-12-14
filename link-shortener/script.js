document.getElementById("linkForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const originalLink = document.getElementById("originalLink").value;
    const customName = document.getElementById("customName").value || Math.random().toString(36).substr(2, 5);
    const shortLink = `${window.location.href}${customName}`;

    localStorage.setItem(customName, originalLink);

    document.getElementById("result").innerHTML = `Shortened Link: <a href="${shortLink}" target="_blank">${shortLink}</a>`;
});
