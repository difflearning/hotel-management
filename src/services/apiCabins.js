import supabase from "./supabase";
export async function  getCabins(){

    const { data, error } = await supabase
      .from('cabins')
      .select('*')
      if(error){
            console.log(data);
            throw new Error("Cabnis could not be loaded");
      }

      return data;
}


export async function deleteCabin(id){


      // Delete matching rows
      const { data,error } = await supabase
            .from('cabins')
            .delete()
            .eq('id', id);

      if(error) {

            throw new Error('Cabin could not deleted');
      }
      return data;
}

export async function insertCabin(newCabin) {
  const base_url =
    "https://dpmlnysinyurcvotfsda.supabase.co/storage/v1/object/public/cabin-images";

  const imageName = `${Math.random()}-${newCabin.image[0].name}`.replaceAll("/", "");
  const imagePath = `${base_url}/${imageName}`;

  // 1️⃣ Insert row
  const { data, error: insertEr } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (insertEr) throw new Error("Cabin could not be inserted");

  // 2️⃣ Upload image
  const { error: storageEr } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image[0]);

  // 3️⃣ Rollback if upload fails
  if (storageEr) {
    await supabase.from("cabins").delete().eq("id", data[0].id);
    throw new Error("Image upload failed");
  }

  return data;
}
