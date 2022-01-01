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

export const fetchByID = async () => {

}

export const deleteByID = async () => {

}

export const fetchAll = async (url) => {

   try {
      const res = await fetch(url, {
         method: 'FETCH'
      })

      const result = await res.json();

      return result;
   } catch (error) {
      console.log(error);
   }

}