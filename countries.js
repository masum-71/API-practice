const loadApi = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountry(data));
};

const displayCountry = (countries) => {
  const main = document.getElementById("main");

  countries.forEach((country) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
        <img src="${country.flags.png}" alt="">
        <p>name:${country.name.common} </p>
        <p>area: ${country.area} </p>
        <p>capital: ${country.capital ? country.capital : "No capital"} </p>
        <button onclick="countryDetail('${country.cca2}')">detail</button>
        `;
    main.appendChild(div);
  });
};

const countryDetail = (code) => {
  fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    .then((res) => res.json())
    .then((data) => showDetail(data[0]));
};

const showDetail = (code) => {
  console.log(code);
  const countryDetail = document.getElementById("country-detail");

  countryDetail.innerHTML = `
    <h4>name: ${code.name.common} </h4>
    <p>Population: ${code.population} </p>
    <p>Languages: ${code.languages} </p>
    `;
};

loadApi();
