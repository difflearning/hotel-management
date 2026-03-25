import React from "react";
import { useForm } from "react-hook-form";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";


import {useCreateCabin} from './useCreateCabin'
import PropTypes from "prop-types";
import { useUpdateCabin } from "./useUpdateCabin";



CreateCabinForm.propTypes = {
  cabinToEdit: PropTypes.bool,
  setShowForm:PropTypes.bool
};


function CreateCabinForm({ cabinToEdit = {} ,setShowForm}) {

    // Destructure id as cabinId, and everything else as editValues
  // const { id: cabinId, ...editValues } = cabinToEdit;


  const { id: rawId, ...editValues } = cabinToEdit;

  // Normalize id to a number if it exists
  const cabinId = rawId && typeof rawId === "object" ? rawId.id : rawId;


  const isEditingForm = !!cabinId; // true if cabinId exists, false otherwise
  
    const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
    } = useForm({

    defaultValues: isEditingForm   ? editValues:{}
  
    });


    

    const {createCabin,isCreating} = useCreateCabin();

    const {updateCabin,isUpdating} = useUpdateCabin();


  const isWorking = isCreating || isUpdating;

  function onSubmit(data) {
    // const image =
    //   typeof data.image === "string" ? data.image : data.image[0];

      const image = typeof data.image === "string" ? data.image : data.image?.[0] ?? null;
      isEditingForm ? updateCabin({newCabinData:{...data,image:image},id:cabinId}) :createCabin({ ...data, image },{ onSuccess:()=>{reset()}});


  }

  if (isWorking === true) return <Spinner />;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Cabin name" error={errors.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "This field is required",
            valueAsNumber: true,
            min: {
              value: 1,
              message: "Capacity must be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "This field is required",
            valueAsNumber: true,
            min: {
              value: 1,
              message: "Price must be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              Number(value) <= Number(getValues().regularPrice) ||
              "Discount should be less than regular price",
                valueAsNumber: true,
          })}
        />
      </FormRow>

      <FormRow label="Description for website">
        <Textarea id="description" {...register("description")} />
      </FormRow>

      <FormRow label="Cabin photo" error={errors.image?.message}>
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditingForm? false:"This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Button
    

          size="small"
          variation="secondary"
          type="reset"
          onClick={()=> setShowForm(false)} 
          disabled={isWorking}
        >
          Cancel
        </Button>

        <Button

                    size="small"
          variation="primary"
          type="submit"
          disabled={isWorking}
        >
        {isEditingForm ? "Edit cabin" : "Add cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
