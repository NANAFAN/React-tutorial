//export宣言することで、他のファイルで関数を使えるようにしてる
export async function fetchImages(breed) {
    const response = await fetch(
      `https://dog.ceo/api/breed/${breed}/images/random/12`
    );
    const data = await response.json();
    return data.message;
  }