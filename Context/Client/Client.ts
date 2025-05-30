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
}

export { Client };
