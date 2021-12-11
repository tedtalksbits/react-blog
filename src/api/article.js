export const post = async (object, url) => {
   const res = await fetch(url, {
      method: 'PUT',
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(object)
   })

   const result = await res.json();
   return result;
}