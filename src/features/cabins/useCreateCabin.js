import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";




export  function useCreateCabin(){


    
    const queryClient = useQueryClient();

  const { mutate:createCabin, isLoading: isCreating } = useMutation({
   mutationFn: (newCabinData) => createEditCabin(newCabinData, null), // always passes id=null
    onSuccess: () => {
      toast.success("Cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });

    },
    onError: (err) => toast.error(err.message),
  });


  return {createCabin,isCreating};
}