class Client {
  async initialReq(url: string) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("error at initial ", error);
    }
  }

  async searchByIngredient(url: string) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("error at search by ingredient ", error);
    }
  }
}

export { Client };
