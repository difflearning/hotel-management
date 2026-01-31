

import React from "react";

import Input from "../../ui/Input";

import Form from "../../ui/Form";

import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import {insertCabin} from "../../services/apiCabins";
import toast from "react-hot-toast";
import Spinner from "../../ui/Spinner";

import  FormRow from "../../ui/FormRow";


import Textarea from "../../ui/Textarea"
import FileInput from "../../ui/FileInput"
import Button from "../../ui/Button"


// const FormRow = styled.div`
//   display: grid;
//   align-items: center;
//   grid-template-columns: 24rem 1fr 1.2fr;
//   gap: 2.4rem;

//   padding: 1.2rem 0;

//   &:first-child {
//     padding-top: 0;
//   }

//   &:last-child {
//     padding-bottom: 0;
//   }

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }

//   &:has(button) {
//     display: flex;
//     justify-content: flex-end;
//     gap: 1.2rem;
//   }
// `;

// const Label = styled.label`
//   font-weight: 500;
// `;

// const Error = styled.span`
//   font-size: 1.4rem;
//   color: var(--color-red-700);
// `;

function CreateCabinForm() {


  const {
  register,
  handleSubmit,
  reset,
  getValues,
  formState: { errors },
} = useForm();

  const queryClient = useQueryClient();



  const {mutate,isLoading:isCreating}=useMutation({

      mutationFn:insertCabin,
      onSuccess:()=>{

        toast.success("Successfully created ");


           queryClient.invalidateQueries({

                queryKey:["cabin"]
            });

       reset();
      }
      ,

      onError: (err) => toast.error(err.message),

  });

  function onSubmit(data){

    mutate(data);
  }


  function onError(error){


      console.log(error);

  }
  




  {isCreating && <Spinner/>}
  return (
    <Form  onSubmit={handleSubmit(onSubmit,onError)}>
      <FormRow label="Cabin name" error={errors.name?.message} >

        <Input type="text" id="name" {...register('name',{

            required:"This field is required"
        })} />

      </FormRow>


      <FormRow label="Maximum capacity" error={errors.maxCapacity?.message}>

        <Input type="number" id="maxCapacity" {...register('maxCapacity',{




            required:"This field is required",
            min:{

                value:1,
                message:"Capacity should be at least"
            }

        })

          


        } />
      </FormRow>


      <FormRow  label="Regular price" error={errors.regularPrice?.message}>

        <Input type="number" id="regularPrice" {...register('regularPrice',{

            required:"This field is required",
            min:{

                value:1,
                message:"Capacity should be at least"
            }
        })}/>
      </FormRow>


       <FormRow  label="Discount"  error={errors.discount?.message}>

        <Input type="number" id="discount" defaultValue={0} {...register('discount',{

            required:"This field is rquired",
            validate: (value) => value < getValues().regularPrice || "Discount should be less than regular price"
        })} />

      </FormRow>


        
      <FormRow label="Description for website" >

        <Textarea type="number" id="description" defaultValue="" {...register('description')}/>
      </FormRow>


        
      <FormRow label="Cabin photo">

        <FileInput id="image" accept="image/*"  {...register("image",{

            required:"This field is required"
        })} />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button sizes="small" variation="primary" type="submit"  disabled={isCreating}>Edit cabin</Button>
      </FormRow>
   
    </Form>
  );
}

export default CreateCabinForm;
