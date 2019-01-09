async function getData() {
  const dataUrl = 'https://ghibliapi.herokuapp.com/films/';

  try {
    const response = await fetch(`${dataUrl}`);
    const data = await response.json();

    return await data;
  } catch (err) {
    console.log(err);
  }
}

export default getData;
