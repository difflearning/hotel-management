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

export async function createEditCabin(newCabin,id=null) {
  
  // const hasImagePath = newCabin?.image?.startsWidth(supabase);

  const hasImagePath = typeof newCabin.image === "string" &&
                     newCabin.image.startsWith(
                       "https://dpmlnysinyurcvotfsda.supabase.co/"
                     );


  console.log(id);
  console.log(newCabin);

const BASE_URL =
  "https://dpmlnysinyurcvotfsda.supabase.co/storage/v1/object/public/cabin-images";


  const imageName = `${crypto.randomUUID()}-${newCabin.image.name}`.replaceAll("/","");


const imagePath = hasImagePath
  ? newCabin.image
  : `${BASE_URL}/${imageName}`;


    let  query = null ;



// 1️⃣ Insert or update row
if(!id){

    query = supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select()
    .single();

}

if (id) {
  query = supabase
    .from("cabins")
    .update({ ...newCabin, image: imagePath })
    .eq("id", Number(id))
    .select()
    .single();
}

const { data, error } = await query;
if (error) throw new Error(error.message);

// 2️⃣ Upload image only if new
if (!hasImagePath) {


  const { error: storageEr } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageEr) {
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error(storageEr.message);
  }
}

return data;

}
